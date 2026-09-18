#!/usr/bin/env node
/**
 * GSE agent bus - one script, two front-ends.
 *
 *   node bin/bus.mjs --mcp              stdio MCP server (JSON-RPC 2.0, newline framed)
 *   node bin/bus.mjs claim ARCH-15 ...  plain CLI, no registration needed
 *
 * Transport is git. The bus repo is the medium, so agents on different
 * machines coordinate with no server, no database and no secret.
 *
 * The mutex: a claim writes sports/claims/<TASK-ID>.json, a SHARED path.
 * Two agents claiming the same task both try to create the same file and
 * exactly one push wins. The loser re-fetches, reads the winner's lease and
 * is told who holds it. Git's non-fast-forward rejection IS the lock.
 *
 * Everything else lives under a per-agent path and therefore can never
 * conflict. No file is ever appended to by two agents - that is what
 * corrupted STATUS.md (see its 2026-09-12 repair note).
 *
 * Zero dependencies. Node built-ins only.
 */

import { execFileSync } from "node:child_process";
import {
  readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, rmSync,
} from "node:fs";
import { join, dirname, resolve, basename } from "node:path";
import { fileURLToPath } from "node:url";

const SERVER_NAME = "gse-agent-bus";
const SERVER_VERSION = "1.0.0";
const PROTOCOL_VERSION = "2025-06-18";
const DEFAULT_TTL_MIN = 90;
const MAX_PUSH_ATTEMPTS = 3;

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = resolve(process.env.GSE_BUS_REPO || join(HERE, ".."));
const LANE = join(REPO, "sports");
const CLAIMS = join(LANE, "claims");
const MSG = join(LANE, "msg");
const CURSORS = join(LANE, "cursors");
const ARCHIVE = join(LANE, "archive");

const KINDS = ["task", "question", "finding", "handoff", "fyi", "ack"];
const OUTCOMES = ["done", "blocked", "handoff"];

/* ------------------------------------------------------------------ util */

const nowIso = () => new Date().toISOString();
const compact = (iso) => iso.replace(/[-:.]/g, "");
const rand = () => Math.random().toString(16).slice(2, 6);
const slug = (s) =>
  String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 48) || "note";

class BusError extends Error {
  constructor(message, hint) {
    super(message);
    this.hint = hint;
  }
}

function readJson(path, fallback = null) {
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch {
    return fallback;
  }
}

function writeJson(path, value) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, JSON.stringify(value, null, 2) + "\n", "utf8");
}

/** Path relative to the repo root, forward slashes, for git. */
const rel = (abs) => resolve(abs).slice(resolve(REPO).length + 1).split("\\").join("/");

/* ------------------------------------------------------------------- git */

function git(args, opts = {}) {
  return execFileSync("git", args, {
    cwd: REPO,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
    timeout: opts.timeout ?? 60_000,
  }).trim();
}

function gitTry(args, opts = {}) {
  try {
    return { ok: true, out: git(args, opts) };
  } catch (err) {
    const stderr = err?.stderr?.toString?.() ?? "";
    const stdout = err?.stdout?.toString?.() ?? "";
    return { ok: false, out: (stderr + stdout).trim() || String(err.message) };
  }
}

/** Guard: only ever hard-reset something that really is the bus repo. */
function assertBusRepo() {
  if (!existsSync(join(REPO, "PROTOCOL.md"))) {
    throw new BusError(
      `${REPO} does not look like the agent-bus repo (no PROTOCOL.md).`,
      "Set GSE_BUS_REPO to your agent-bus clone, or run this script from inside it.",
    );
  }
}

/** Discard local state and match origin/main exactly. */
function sync() {
  assertBusRepo();
  const fetched = gitTry(["fetch", "--quiet", "origin", "main"]);
  if (!fetched.ok) {
    throw new BusError(
      `git fetch failed: ${fetched.out}`,
      "Check network access and that the bus remote is reachable.",
    );
  }
  const reset = gitTry(["reset", "--hard", "--quiet", "origin/main"]);
  if (!reset.ok) throw new BusError(`git reset failed: ${reset.out}`);
  gitTry(["clean", "-qfd", "sports"]);
}

/**
 * The write loop. `mutate` runs against a freshly synced tree and returns
 * { paths, removed, message, result } or { abort } to stop without pushing.
 * A rejected push means someone else won the race: re-sync and run `mutate`
 * again so it can see the new state and decide differently.
 */
function commitAndPush(mutate) {
  let last = "";
  for (let attempt = 1; attempt <= MAX_PUSH_ATTEMPTS; attempt++) {
    sync();
    const plan = mutate(attempt);
    if (plan.abort) return plan.result;

    for (const p of plan.removed ?? []) gitTry(["rm", "-q", "--ignore-unmatch", "--", rel(p)]);
    for (const p of plan.paths ?? []) {
      const added = gitTry(["add", "--", rel(p)]);
      if (!added.ok) throw new BusError(`git add failed for ${rel(p)}: ${added.out}`);
    }

    if (!git(["status", "--porcelain"])) return plan.result;

    const committed = gitTry(["commit", "-q", "-m", plan.message]);
    if (!committed.ok) throw new BusError(`git commit failed: ${committed.out}`);

    const pushed = gitTry(["push", "--quiet", "origin", "HEAD:main"]);
    if (pushed.ok) return plan.result;
    last = pushed.out;
  }
  throw new BusError(
    `push rejected after ${MAX_PUSH_ATTEMPTS} attempts: ${last}`,
    "The bus is busy. Retry in a moment; nothing was written.",
  );
}

/* -------------------------------------------------------------- identity */

function roster() {
  return readJson(join(LANE, "agents.json"), { agents: [] }).agents ?? [];
}

function whoami(explicit) {
  const id = explicit || process.env.GSE_AGENT_ID || "";
  const known = roster();
  if (!id) {
    throw new BusError(
      "No agent identity.",
      `Set GSE_AGENT_ID or pass --agent. Known: ${known.map((a) => a.id).join(", ") || "(roster empty)"}`,
    );
  }
  const hit = known.find((a) => a.id === id);
  if (!hit && known.length) {
    throw new BusError(
      `Unknown agent "${id}".`,
      `Known: ${known.map((a) => a.id).join(", ")}. Add yourself to sports/agents.json to join.`,
    );
  }
  return hit ?? { id, display: id };
}

/* ---------------------------------------------------------------- claims */

const claimPath = (taskId) => join(CLAIMS, `${taskId}.json`);
const expired = (c) => !c?.expiresAt || Date.parse(c.expiresAt) <= Date.now();

function listClaims() {
  if (!existsSync(CLAIMS)) return [];
  return readdirSync(CLAIMS)
    .filter((f) => f.endsWith(".json"))
    .map((f) => readJson(join(CLAIMS, f)))
    .filter(Boolean);
}

function toolClaim({ taskId, note = "", ttlMinutes = DEFAULT_TTL_MIN }, me) {
  if (!taskId || !/^[A-Za-z0-9][A-Za-z0-9._-]*$/.test(taskId)) {
    throw new BusError(
      `Invalid taskId ${JSON.stringify(taskId)}.`,
      "Use a ledger-style id: letters, digits, dot, dash, underscore. Example: ARCH-15.",
    );
  }
  const ttl = Number(ttlMinutes);
  if (!Number.isFinite(ttl) || ttl < 1 || ttl > 1440) {
    throw new BusError("ttlMinutes must be between 1 and 1440.", "Default is 90.");
  }

  return commitAndPush(() => {
    const path = claimPath(taskId);
    const existing = readJson(path);

    if (existing && existing.agent !== me.id && !expired(existing)) {
      return {
        abort: true,
        result: {
          granted: false,
          taskId,
          heldBy: existing.agent,
          since: existing.claimedAt,
          expiresAt: existing.expiresAt,
          note: existing.note || "",
          advice: `${existing.agent} holds this until ${existing.expiresAt}. Pick another task or post a handoff.`,
        },
      };
    }

    const stolenFrom = existing && existing.agent !== me.id && expired(existing) ? existing.agent : null;
    const claimedAt = nowIso();
    const lease = {
      taskId,
      agent: me.id,
      note,
      claimedAt,
      ttlMinutes: ttl,
      expiresAt: new Date(Date.now() + ttl * 60_000).toISOString(),
      renewedFrom: existing?.agent === me.id ? existing.claimedAt : undefined,
      stolenFrom: stolenFrom || undefined,
      stolenLeaseExpiredAt: stolenFrom ? existing.expiresAt : undefined,
    };
    writeJson(path, lease);

    return {
      paths: [path],
      message: `[bus] claim ${taskId} by ${me.id}${stolenFrom ? ` (expired lease from ${stolenFrom})` : ""}`,
      result: {
        granted: true,
        taskId,
        agent: me.id,
        claimedAt,
        expiresAt: lease.expiresAt,
        stolenFrom,
        advice: stolenFrom
          ? `Lease taken from ${stolenFrom}, whose claim expired at ${existing.expiresAt}. Check for unpushed work before redoing it.`
          : `Held until ${lease.expiresAt}. Call bus_release when done, or bus_claim again to renew.`,
      },
    };
  });
}

function toolRelease({ taskId, outcome = "done", evidence = "" }, me) {
  if (!OUTCOMES.includes(outcome)) {
    throw new BusError(`Invalid outcome "${outcome}".`, `Use one of: ${OUTCOMES.join(", ")}.`);
  }
  return commitAndPush(() => {
    const path = claimPath(taskId);
    const existing = readJson(path);
    if (!existing) {
      return { abort: true, result: { released: false, taskId, reason: "no live claim", advice: "Nothing to release." } };
    }
    if (existing.agent !== me.id) {
      return {
        abort: true,
        result: {
          released: false,
          taskId,
          heldBy: existing.agent,
          reason: "held by another agent",
          advice: `Only ${existing.agent} can release this. Post a handoff message instead.`,
        },
      };
    }
    const settled = { ...existing, releasedAt: nowIso(), outcome, evidence, releasedBy: me.id };
    const archived = join(ARCHIVE, "claims", `${taskId}-${compact(settled.releasedAt)}.json`);
    writeJson(archived, settled);
    return {
      paths: [archived],
      removed: [path],
      message: `[bus] release ${taskId} ${outcome} by ${me.id}`,
      result: { released: true, taskId, outcome, evidence, archived: rel(archived) },
    };
  });
}

/* -------------------------------------------------------------- messages */

function listMessages() {
  if (!existsSync(MSG)) return [];
  const out = [];
  for (const from of readdirSync(MSG)) {
    const dir = join(MSG, from);
    let files = [];
    try {
      files = readdirSync(dir).filter((f) => f.endsWith(".json"));
    } catch {
      continue;
    }
    for (const f of files) {
      const m = readJson(join(dir, f));
      if (m?.id) out.push(m);
    }
  }
  return out.sort((a, b) => String(a.ts).localeCompare(String(b.ts)));
}

function toolPost({ to = "all", kind = "fyi", subject, body = "", refs = [] }, me) {
  if (!subject) throw new BusError("subject is required.", "One line saying what this is.");
  if (!KINDS.includes(kind)) throw new BusError(`Invalid kind "${kind}".`, `Use one of: ${KINDS.join(", ")}.`);
  const known = roster().map((a) => a.id);
  if (to !== "all" && known.length && !known.includes(to)) {
    throw new BusError(`Unknown recipient "${to}".`, `Use "all" or one of: ${known.join(", ")}.`);
  }

  const ts = nowIso();
  const id = `${me.id}/${compact(ts)}-${rand()}`;
  const path = join(MSG, me.id, `${compact(ts)}-${rand()}-${slug(subject)}.json`);
  const msg = { id, from: me.id, to, kind, subject, body, refs: Array.isArray(refs) ? refs : [], ts };

  return commitAndPush(() => {
    writeJson(path, msg);
    return {
      paths: [path],
      message: `[bus] ${kind} ${me.id} -> ${to}: ${subject}`.slice(0, 100),
      result: { posted: true, id, to, kind, subject, ts, path: rel(path) },
    };
  });
}

function toolAck({ messageId, note = "" }, me) {
  if (!messageId) throw new BusError("messageId is required.", "Use the id from bus_poll.");
  const target = listMessages().find((m) => m.id === messageId);
  if (!target) {
    throw new BusError(`No message with id "${messageId}".`, "Run bus_poll to see current ids.");
  }
  return toolPost(
    { to: target.from, kind: "ack", subject: `ack: ${target.subject}`, body: note, refs: [messageId] },
    me,
  );
}

function cursorPath(agent) {
  return join(CURSORS, `${agent}.json`);
}

function toolPoll({ since, advance = true }, me) {
  sync();
  const cursor = readJson(cursorPath(me.id), {});
  const from = since || cursor.lastSeen || "1970-01-01T00:00:00.000Z";

  const fresh = listMessages().filter(
    (m) => m.ts > from && m.from !== me.id && (m.to === me.id || m.to === "all"),
  );
  const claimEvents = listClaims()
    .filter((c) => c.agent !== me.id && c.claimedAt > from)
    .map((c) => ({ taskId: c.taskId, agent: c.agent, claimedAt: c.claimedAt, expiresAt: c.expiresAt, note: c.note }));

  const newest = fresh.length ? fresh[fresh.length - 1].ts : null;
  const result = {
    agent: me.id,
    since: from,
    messages: fresh,
    claims: claimEvents,
    count: fresh.length + claimEvents.length,
  };

  if (advance) {
    // Best effort: the read already succeeded, so a failed cursor push must
    // not fail the poll. Worst case the next poll re-reports a few messages.
    try {
      const at = newest || nowIso();
      commitAndPush(() => {
        writeJson(cursorPath(me.id), { agent: me.id, lastSeen: at, updatedAt: nowIso() });
        return {
          paths: [cursorPath(me.id)],
          message: `[bus] cursor ${me.id}`,
          result: null,
        };
      });
      result.cursorAdvancedTo = at;
    } catch (err) {
      result.cursorWarning = `cursor not saved: ${err.message}`;
    }
  }
  return result;
}

/* ----------------------------------------------------------------- board */

function buildBoard() {
  sync();
  const claims = listClaims();
  const messages = listMessages();
  const acked = new Set(messages.flatMap((m) => (m.kind === "acknowledge" || m.kind === "ack" ? m.refs : [])));

  const live = claims.filter((c) => !expired(c));
  const stale = claims.filter((c) => expired(c));
  const recent = messages.slice(-20).reverse();
  const unacked = messages.filter((m) => m.kind !== "ack" && !acked.has(m.id)).slice(-20).reverse();

  const seen = existsSync(CURSORS)
    ? readdirSync(CURSORS)
        .filter((f) => f.endsWith(".json"))
        .map((f) => readJson(join(CURSORS, f)))
        .filter(Boolean)
    : [];

  return { generatedAt: nowIso(), live, stale, recent, unacked, lastSeen: seen };
}

function renderBoard(b) {
  const L = [];
  L.push("# GSE engine board");
  L.push("");
  L.push("DERIVED FILE. Regenerated by `bin/bus.mjs board --publish`.");
  L.push("Never edit or append by hand: two agents appending to one file is what");
  L.push("corrupted STATUS.md (see its 2026-09-12 repair note).");
  L.push("");
  L.push(`Generated ${b.generatedAt}`);
  L.push("");
  L.push("## Live claims");
  L.push("");
  if (!b.live.length) L.push("_none_");
  else {
    L.push("| Task | Agent | Since | Expires | Note |");
    L.push("|---|---|---|---|---|");
    for (const c of b.live) {
      L.push(`| ${c.taskId} | ${c.agent} | ${c.claimedAt} | ${c.expiresAt} | ${(c.note || "").slice(0, 60)} |`);
    }
  }
  L.push("");
  L.push("## Expired leases (reclaimable)");
  L.push("");
  if (!b.stale.length) L.push("_none_");
  else {
    L.push("| Task | Was held by | Expired | Note |");
    L.push("|---|---|---|---|");
    for (const c of b.stale) {
      L.push(`| ${c.taskId} | ${c.agent} | ${c.expiresAt} | ${(c.note || "").slice(0, 60)} |`);
    }
  }
  L.push("");
  L.push("## Unacknowledged messages");
  L.push("");
  if (!b.unacked.length) L.push("_none_");
  else for (const m of b.unacked) L.push(`- \`${m.id}\` ${m.from} to ${m.to} [${m.kind}] ${m.subject}`);
  L.push("");
  L.push("## Last seen");
  L.push("");
  if (!b.lastSeen.length) L.push("_no agent has polled yet_");
  else for (const s of b.lastSeen) L.push(`- ${s.agent}: ${s.updatedAt}`);
  L.push("");
  return L.join("\n");
}

function toolBoard({ publish = false } = {}) {
  const b = buildBoard();
  const md = renderBoard(b);
  if (!publish) return { ...b, markdown: md, published: false };
  commitAndPush(() => {
    const path = join(LANE, "BOARD.md");
    mkdirSync(dirname(path), { recursive: true });
    writeFileSync(path, md, "utf8");
    return { paths: [path], message: "[bus] board refresh", result: null };
  });
  return { ...b, markdown: md, published: true };
}

/* ----------------------------------------------------------------- tools */

const STR = (description) => ({ type: "string", description });

const TOOLS = [
  {
    name: "bus_whoami",
    title: "Identify this agent",
    description: "Resolve this agent's bus identity and list the roster. Call once at session start.",
    inputSchema: { type: "object", properties: { agent: STR("Override the agent id.") } },
    annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false },
    handler: (a, me) => ({ you: me, roster: roster() }),
  },
  {
    name: "bus_claim",
    title: "Claim a task",
    description:
      "Take an exclusive, expiring lease on a task id BEFORE starting work. Returns granted:false with heldBy if another agent already holds it. Claiming an expired lease succeeds and reports who it was taken from. Call this first, every time.",
    inputSchema: {
      type: "object",
      required: ["taskId"],
      properties: {
        taskId: STR('Ledger-style id, e.g. "ARCH-15".'),
        note: STR("One line on what you are about to do."),
        ttlMinutes: { type: "number", description: "Lease length, 1-1440. Default 90.", minimum: 1, maximum: 1440 },
      },
    },
    annotations: { readOnlyHint: false, destructiveHint: false, idempotentHint: false, openWorldHint: false },
    handler: toolClaim,
  },
  {
    name: "bus_release",
    title: "Release a task",
    description: "Settle your own lease and archive it with an outcome and evidence. Only the holder may release.",
    inputSchema: {
      type: "object",
      required: ["taskId"],
      properties: {
        taskId: STR("The task id you hold."),
        outcome: { type: "string", enum: OUTCOMES, description: "How it ended. Default done." },
        evidence: STR("Commit SHA, PR number, or the exact blocking error."),
      },
    },
    annotations: { readOnlyHint: false, destructiveHint: false, idempotentHint: true, openWorldHint: false },
    handler: toolRelease,
  },
  {
    name: "bus_post",
    title: "Post a message",
    description: 'Send a message to one agent or to "all". Use for findings, questions, handoffs and briefs.',
    inputSchema: {
      type: "object",
      required: ["subject"],
      properties: {
        to: STR('Recipient agent id, or "all". Default "all".'),
        kind: { type: "string", enum: KINDS, description: "Message type. Default fyi." },
        subject: STR("One line."),
        body: STR("Full text. Markdown is fine."),
        refs: { type: "array", items: { type: "string" }, description: "Related message ids or task ids." },
      },
    },
    annotations: { readOnlyHint: false, destructiveHint: false, idempotentHint: false, openWorldHint: false },
    handler: toolPost,
  },
  {
    name: "bus_poll",
    title: "Read new traffic",
    description:
      "Return every message and claim newer than your cursor, then advance it. This is how you find out what the other agents just did. Call at the start of a turn and after any long task.",
    inputSchema: {
      type: "object",
      properties: {
        since: STR("ISO timestamp override. Omit to use your saved cursor."),
        advance: { type: "boolean", description: "Save the new cursor. Default true." },
      },
    },
    annotations: { readOnlyHint: false, destructiveHint: false, idempotentHint: false, openWorldHint: false },
    handler: toolPoll,
  },
  {
    name: "bus_ack",
    title: "Acknowledge a message",
    description: "Confirm you read a message, so the sender can see it landed rather than guessing.",
    inputSchema: {
      type: "object",
      required: ["messageId"],
      properties: { messageId: STR("Id from bus_poll."), note: STR("Optional reply line.") },
    },
    annotations: { readOnlyHint: false, destructiveHint: false, idempotentHint: false, openWorldHint: false },
    handler: toolAck,
  },
  {
    name: "bus_board",
    title: "Show the board",
    description: "Live view: who holds what, which leases expired, what is unacknowledged, who is active.",
    inputSchema: {
      type: "object",
      properties: { publish: { type: "boolean", description: "Also commit sports/BOARD.md. Default false." } },
    },
    annotations: { readOnlyHint: false, destructiveHint: false, idempotentHint: true, openWorldHint: false },
    handler: (a) => toolBoard(a),
  },
];

const byName = new Map(TOOLS.map((t) => [t.name, t]));

function callTool(name, args, explicitAgent) {
  const tool = byName.get(name);
  if (!tool) {
    throw new BusError(`Unknown tool "${name}".`, `Available: ${TOOLS.map((t) => t.name).join(", ")}.`);
  }
  const me = whoami(args?.agent || explicitAgent);
  return tool.handler(args ?? {}, me);
}

/* ------------------------------------------------------------ mcp server */

function respond(id, result) {
  process.stdout.write(JSON.stringify({ jsonrpc: "2.0", id, result }) + "\n");
}
function respondError(id, code, message, data) {
  process.stdout.write(JSON.stringify({ jsonrpc: "2.0", id, error: { code, message, data } }) + "\n");
}

function handleRpc(req) {
  const { id, method, params } = req;
  if (method === "initialize") {
    return respond(id, {
      protocolVersion: PROTOCOL_VERSION,
      capabilities: { tools: { listChanged: false } },
      serverInfo: { name: SERVER_NAME, version: SERVER_VERSION },
      instructions:
        "Shared coordination bus for the GSE engine agents. Call bus_claim BEFORE starting a task, " +
        "bus_poll at the start of a turn, and bus_release when finished.",
    });
  }
  if (method === "notifications/initialized" || method?.startsWith("notifications/")) return;
  if (method === "ping") return respond(id, {});
  if (method === "tools/list") {
    return respond(id, {
      tools: TOOLS.map(({ name, title, description, inputSchema, annotations }) => ({
        name, title, description, inputSchema, annotations,
      })),
    });
  }
  if (method === "tools/call") {
    try {
      const out = callTool(params?.name, params?.arguments);
      return respond(id, {
        content: [{ type: "text", text: JSON.stringify(out, null, 2) }],
        structuredContent: out ?? {},
      });
    } catch (err) {
      const text = err instanceof BusError && err.hint ? `${err.message}\n${err.hint}` : err.message;
      return respond(id, { content: [{ type: "text", text }], isError: true });
    }
  }
  if (id !== undefined) respondError(id, -32601, `Method not found: ${method}`);
}

function runMcp() {
  let buf = "";
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", (chunk) => {
    buf += chunk;
    let nl;
    while ((nl = buf.indexOf("\n")) >= 0) {
      const line = buf.slice(0, nl).trim();
      buf = buf.slice(nl + 1);
      if (!line) continue;
      let req;
      try {
        req = JSON.parse(line);
      } catch {
        respondError(null, -32700, "Parse error");
        continue;
      }
      try {
        handleRpc(req);
      } catch (err) {
        if (req.id !== undefined) respondError(req.id, -32603, err.message);
      }
    }
  });
  process.stdin.on("end", () => process.exit(0));
}

/* ------------------------------------------------------------------- cli */

const USAGE = `GSE agent bus

  node bin/bus.mjs --mcp                       run as an MCP stdio server
  node bin/bus.mjs whoami
  node bin/bus.mjs claim <TASK-ID> [--note "..."] [--ttl 90]
  node bin/bus.mjs release <TASK-ID> [--outcome done|blocked|handoff] [--evidence "..."]
  node bin/bus.mjs post --to all --kind fyi --subject "..." [--body "..."]
  node bin/bus.mjs poll [--since ISO] [--no-advance]
  node bin/bus.mjs ack <MESSAGE-ID> [--note "..."]
  node bin/bus.mjs board [--publish]

Identity comes from GSE_AGENT_ID or --agent.
Bus repo comes from GSE_BUS_REPO or this script's parent directory.`;

function parseArgs(argv) {
  const positional = [];
  const flags = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith("--")) {
      const key = a.slice(2);
      if (key.startsWith("no-")) flags[key.slice(3)] = false;
      else if (i + 1 < argv.length && !argv[i + 1].startsWith("--")) flags[key] = argv[++i];
      else flags[key] = true;
    } else positional.push(a);
  }
  return { positional, flags };
}

function runCli(argv) {
  const { positional, flags } = parseArgs(argv);
  const cmd = positional[0];
  if (!cmd || cmd === "help" || flags.help) {
    process.stdout.write(USAGE + "\n");
    return;
  }
  const map = {
    whoami: () => ["bus_whoami", {}],
    claim: () => ["bus_claim", { taskId: positional[1], note: flags.note || "", ttlMinutes: flags.ttl ? Number(flags.ttl) : DEFAULT_TTL_MIN }],
    release: () => ["bus_release", { taskId: positional[1], outcome: flags.outcome || "done", evidence: flags.evidence || "" }],
    post: () => ["bus_post", { to: flags.to || "all", kind: flags.kind || "fyi", subject: flags.subject, body: flags.body || "", refs: flags.refs ? String(flags.refs).split(",") : [] }],
    poll: () => ["bus_poll", { since: flags.since, advance: flags.advance !== false }],
    ack: () => ["bus_ack", { messageId: positional[1], note: flags.note || "" }],
    board: () => ["bus_board", { publish: flags.publish === true }],
  };
  if (!map[cmd]) {
    process.stderr.write(`Unknown command "${cmd}".\n\n${USAGE}\n`);
    process.exit(2);
  }
  try {
    const [name, args] = map[cmd]();
    const out = callTool(name, args, flags.agent);
    if (cmd === "board" && !flags.json) process.stdout.write(out.markdown + "\n");
    else process.stdout.write(JSON.stringify(out, null, 2) + "\n");
  } catch (err) {
    process.stderr.write(`${err.message}\n`);
    if (err instanceof BusError && err.hint) process.stderr.write(`${err.hint}\n`);
    process.exit(1);
  }
}

const argv = process.argv.slice(2);
if (argv.includes("--mcp")) runMcp();
else runCli(argv);
