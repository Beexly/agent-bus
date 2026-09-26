"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../gsx/packages/verifier/src/__tests__/factgraph.test.ts
var import_vitest = require("vitest");
var import_node_fs2 = require("node:fs");
var import_node_os = require("node:os");
var import_node_path2 = __toESM(require("node:path"));

// ../gsx/packages/verifier/src/factgraph.ts
var import_node_fs = require("node:fs");
var import_node_path = __toESM(require("node:path"));
function validatePreRegistration(spec2, options) {
  const errors = [];
  const warnings = [];
  if (!spec2.id || !/^[A-Z][0-9]+$/.test(spec2.id)) {
    errors.push(`id must look like A1 / P1 (got ${JSON.stringify(spec2.id)})`);
  }
  if (!spec2.kill_line || spec2.kill_line.trim().length === 0) {
    errors.push("kill_line is required and must be non-empty (pre-registered before any run)");
  }
  if (!spec2.hypothesis || spec2.hypothesis.trim().length === 0) {
    errors.push("hypothesis is required");
  }
  const scoredStatuses = /* @__PURE__ */ new Set(["CANDIDATE", "LIVE", "DEAD"]);
  if (scoredStatuses.has(spec2.status)) {
    if (!spec2.run_sha || spec2.run_sha.trim().length < 7) {
      errors.push(`status=${spec2.status} requires a run_sha (\u22657 hex chars)`);
    }
    if (!spec2.run_at) {
      errors.push(`status=${spec2.status} requires run_at`);
    }
    if (spec2.number == null || !Number.isFinite(spec2.number)) {
      errors.push(`status=${spec2.status} requires a validate-era point estimate in number`);
    }
    if (spec2.n == null || !(spec2.n > 0)) {
      errors.push(`status=${spec2.status} requires n > 0`);
    }
  }
  if (spec2.status === "BLOCKED" && !spec2.blocked_on) {
    errors.push("status=BLOCKED requires blocked_on naming the missing dataset");
  }
  if (options?.killLineCommittedAt && options?.runCommittedAt) {
    if (options.runCommittedAt < options.killLineCommittedAt) {
      errors.push(
        `run_sha commit (${options.runCommittedAt}) predates kill_line commit (${options.killLineCommittedAt}) \u2014 pre-registration violated`
      );
    }
  }
  if (scoredStatuses.has(spec2.status) && (spec2.ci == null || spec2.ci.length !== 2)) {
    warnings.push(`status=${spec2.status} without a 95% CI \u2014 INDEX will render the number bare`);
  }
  return { ok: errors.length === 0, errors, warnings };
}
function parseFactorYaml(text) {
  const out = {};
  const lines = text.split(/\r?\n/);
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    i += 1;
    const trimmed = line.trim();
    if (trimmed.length === 0 || trimmed.startsWith("#")) continue;
    const m = /^([A-Za-z_][A-Za-z0-9_]*)\s*:\s*(.*)$/.exec(trimmed);
    if (!m) continue;
    const key = m[1];
    let rest = m[2].trim();
    if (rest === ">" || rest === "|") {
      const buf = [];
      while (i < lines.length) {
        const next = lines[i];
        if (next.trim().length === 0) {
          buf.push("");
          i += 1;
          continue;
        }
        if (/^\S/.test(next) && !next.startsWith(" ")) break;
        buf.push(next.replace(/^\s+/, "").trimEnd());
        i += 1;
      }
      out[key] = buf.join(" ").replace(/\s+/g, " ").trim();
      continue;
    }
    out[key] = parseScalar(rest);
  }
  return out;
}
function parseScalar(raw) {
  if (raw === "" || raw === "null" || raw === "~") return null;
  if (raw === "true") return true;
  if (raw === "false") return false;
  if (raw.startsWith('"') && raw.endsWith('"') && raw.length >= 2 || raw.startsWith("'") && raw.endsWith("'") && raw.length >= 2) {
    return raw.slice(1, -1);
  }
  if (raw.startsWith("[") && raw.endsWith("]")) {
    const inner = raw.slice(1, -1).trim();
    if (inner.length === 0) return [];
    return inner.split(",").map((s) => parseScalar(s.trim()));
  }
  const num = Number(raw);
  if (!Number.isNaN(num) && raw.trim() !== "") return num;
  return raw;
}
function toFactorSpec(parsed, fallbackId) {
  const numOrNull = (v) => {
    if (v == null) return null;
    const n = Number(v);
    return Number.isFinite(n) ? n : null;
  };
  const str = (v) => v == null ? "" : String(v);
  const strOrNull = (v) => v == null ? null : String(v);
  const data = Array.isArray(parsed["data"]) ? parsed["data"].map(String) : [];
  let ci = null;
  const ciRaw = parsed["ci"];
  if (Array.isArray(ciRaw) && ciRaw.length === 2) {
    ci = [Number(ciRaw[0]), Number(ciRaw[1])];
  }
  const statusRaw = str(parsed["status"] || "UNTESTED").toUpperCase();
  const status = ["UNTESTED", "CANDIDATE", "LIVE", "DEAD", "BLOCKED"].includes(
    statusRaw
  ) ? statusRaw : "UNTESTED";
  return {
    id: str(parsed["id"] || fallbackId),
    title: str(parsed["title"]),
    hypothesis: str(parsed["hypothesis"]),
    estimand: str(parsed["estimand"]),
    unit: str(parsed["unit"]),
    data,
    discover_era: str(parsed["discover_era"]),
    validate_era: str(parsed["validate_era"]),
    kill_line: str(parsed["kill_line"]),
    mde_80pct_power: numOrNull(parsed["mde_80pct_power"]),
    script: str(parsed["script"]),
    status,
    number: numOrNull(parsed["number"]),
    ci,
    n: numOrNull(parsed["n"]),
    run_sha: strOrNull(parsed["run_sha"]),
    run_at: strOrNull(parsed["run_at"]),
    blocked_on: strOrNull(parsed["blocked_on"]),
    notes: str(parsed["notes"] ?? "")
  };
}
function loadFactorSpecs(factorsDir) {
  const specs = [];
  const errors = [];
  if (!(0, import_node_fs.existsSync)(factorsDir)) {
    return { specs, errors: [] };
  }
  const files = (0, import_node_fs.readdirSync)(factorsDir).filter((f) => f.endsWith(".yaml") || f.endsWith(".yml")).sort();
  for (const f of files) {
    const full = import_node_path.default.join(factorsDir, f);
    try {
      const parsed = parseFactorYaml((0, import_node_fs.readFileSync)(full, "utf8"));
      const fallback = f.replace(/\.ya?ml$/, "");
      const spec2 = toFactorSpec(parsed, fallback);
      if (spec2.id !== fallback && fallback.match(/^[A-Z][0-9]+$/)) {
        errors.push(`${f}: id ${spec2.id} does not match filename ${fallback}`);
      }
      specs.push(spec2);
    } catch (e) {
      errors.push(`${f}: ${e instanceof Error ? e.message : String(e)}`);
    }
  }
  specs.sort((a, b) => a.id.localeCompare(b.id, void 0, { numeric: true }));
  return { specs, errors };
}
function renderIndexMarkdown(specs) {
  const lines = [
    "# Factor index",
    "",
    "Public source of `/method/factors`. Generated by `factgraph.ts` (`npm run factors:index`).",
    "DEAD rows stay forever. LIVE rows link to the pick-card factor trail.",
    "",
    "| id | hypothesis | status | validate-era | CI | n | kill line | run |",
    "|---|---|---|---|---|---|---|---|"
  ];
  for (const s of specs) {
    const num = s.number == null ? "\u2014" : s.number.toFixed(4);
    const ci = s.ci == null ? "\u2014" : `[${s.ci[0].toFixed(4)}, ${s.ci[1].toFixed(4)}]`;
    const n = s.n == null ? "\u2014" : String(s.n);
    const kill = s.kill_line.replace(/\|/g, "\\|");
    const run = s.run_at ?? "\u2014";
    lines.push(
      `| ${s.id} | ${s.hypothesis.replace(/\|/g, "\\|")} | ${s.status} | ${num} | ${ci} | ${n} | ${kill} | ${run} |`
    );
  }
  if (specs.length === 0) {
    lines.push("| \u2014 | *(no factor specs yet)* | \u2014 | \u2014 | \u2014 | \u2014 | \u2014 | \u2014 |");
  }
  lines.push("");
  return lines.join("\n");
}
function buildFactGraph(factorsDir, options) {
  const { specs, errors: loadErrors } = loadFactorSpecs(factorsDir);
  const checks = specs.map((s) => ({ id: s.id, check: validatePreRegistration(s) }));
  const allErrors = [
    ...loadErrors,
    ...checks.flatMap((c) => c.check.errors.map((e) => `${c.id}: ${e}`))
  ];
  const markdown = renderIndexMarkdown(specs);
  const ok = allErrors.length === 0;
  if (options?.write !== false && ok) {
    (0, import_node_fs.mkdirSync)(factorsDir, { recursive: true });
    (0, import_node_fs.writeFileSync)(import_node_path.default.join(factorsDir, "INDEX.md"), markdown, "utf8");
  }
  return {
    generatedAt: (/* @__PURE__ */ new Date()).toISOString(),
    specs,
    checks,
    markdown,
    ok
  };
}
function buildMintLog(rows, options) {
  const loggedAt = options?.loggedAt ?? (/* @__PURE__ */ new Date()).toISOString();
  const holdoutId = options?.holdoutId ?? "PICKS-H1";
  return rows.map((r) => {
    const held = r.modelProb == null || !(r.modelProb > 0 && r.modelProb < 1);
    return {
      pickId: r.id,
      holdoutId,
      decision: held ? "held" : "published",
      reason: held ? "no finite modelProb on the holdout export \u2014 held, not scored" : "scored on PICKS-H1",
      modelVersion: r.modelVersion,
      generatedAt: r.generatedAt,
      loggedAt
    };
  });
}
function writeMintLog(mintLogPath, entries) {
  (0, import_node_fs.mkdirSync)(import_node_path.default.dirname(mintLogPath), { recursive: true });
  (0, import_node_fs.writeFileSync)(
    mintLogPath,
    JSON.stringify({ generatedAt: (/* @__PURE__ */ new Date()).toISOString(), entries }, null, 2),
    "utf8"
  );
}

// ../gsx/packages/verifier/src/__tests__/factgraph.test.ts
function spec(over) {
  return {
    id: "A1",
    title: "t",
    hypothesis: "h",
    estimand: "e",
    unit: "u",
    data: ["d"],
    discover_era: "2017-2020",
    validate_era: "2021-2024",
    kill_line: "validate-era effect <= 0",
    mde_80pct_power: null,
    script: "scripts/factors/A1.mjs",
    status: "UNTESTED",
    number: null,
    ci: null,
    n: null,
    run_sha: null,
    run_at: null,
    blocked_on: null,
    notes: "",
    ...over
  };
}
(0, import_vitest.describe)("YAML subset parser", () => {
  (0, import_vitest.it)("parses flat keys, null, numbers, booleans, and inline arrays", () => {
    const parsed = parseFactorYaml(`
# comment
id: A1
title: "Birthday bump"
status: UNTESTED
number: null
n: 42
flag: true
data: [rosters, player_stats]
`);
    (0, import_vitest.expect)(parsed["id"]).toBe("A1");
    (0, import_vitest.expect)(parsed["title"]).toBe("Birthday bump");
    (0, import_vitest.expect)(parsed["status"]).toBe("UNTESTED");
    (0, import_vitest.expect)(parsed["number"]).toBeNull();
    (0, import_vitest.expect)(parsed["n"]).toBe(42);
    (0, import_vitest.expect)(parsed["flag"]).toBe(true);
    (0, import_vitest.expect)(parsed["data"]).toEqual(["rosters", "player_stats"]);
  });
  (0, import_vitest.it)("folds a > block into one line", () => {
    const parsed = parseFactorYaml(`
notes: >
  Components already measured
  separately on YARDS.
`);
    (0, import_vitest.expect)(parsed["notes"]).toBe("Components already measured separately on YARDS.");
  });
  (0, import_vitest.it)("toFactorSpec defaults unknown status to UNTESTED", () => {
    const s = toFactorSpec({ id: "A9", status: "WEIRD" }, "A9");
    (0, import_vitest.expect)(s.status).toBe("UNTESTED");
  });
});
(0, import_vitest.describe)("pre-registration validation", () => {
  (0, import_vitest.it)("requires a non-empty kill_line always \u2014 hand: empty string fails", () => {
    const check = validatePreRegistration(spec({ kill_line: "  " }));
    (0, import_vitest.expect)(check.ok).toBe(false);
    (0, import_vitest.expect)(check.errors.join(" ")).toContain("kill_line");
  });
  (0, import_vitest.it)("allows UNTESTED with kill_line and nothing else", () => {
    const check = validatePreRegistration(spec({}));
    (0, import_vitest.expect)(check.ok).toBe(true);
    (0, import_vitest.expect)(check.errors).toEqual([]);
  });
  (0, import_vitest.it)("refuses CANDIDATE without run_sha / run_at / number / n", () => {
    const check = validatePreRegistration(spec({ status: "CANDIDATE" }));
    (0, import_vitest.expect)(check.ok).toBe(false);
    (0, import_vitest.expect)(check.errors.some((e) => e.includes("run_sha"))).toBe(true);
    (0, import_vitest.expect)(check.errors.some((e) => e.includes("run_at"))).toBe(true);
    (0, import_vitest.expect)(check.errors.some((e) => e.includes("number"))).toBe(true);
    (0, import_vitest.expect)(check.errors.some((e) => e.includes("n > 0"))).toBe(true);
  });
  (0, import_vitest.it)("accepts a fully scored CANDIDATE", () => {
    const check = validatePreRegistration(
      spec({
        status: "CANDIDATE",
        run_sha: "abc1234def",
        run_at: "2026-09-16T00:00:00.000Z",
        number: 0.012,
        n: 400,
        ci: [-0.01, 0.03]
      })
    );
    (0, import_vitest.expect)(check.ok).toBe(true);
  });
  (0, import_vitest.it)("enforces kill_line commit before run commit when both dates are supplied", () => {
    const bad = validatePreRegistration(
      spec({
        status: "DEAD",
        run_sha: "deadbeef00",
        run_at: "2026-09-10T00:00:00.000Z",
        number: -0.02,
        n: 350
      }),
      {
        killLineCommittedAt: "2026-09-12T00:00:00.000Z",
        runCommittedAt: "2026-09-10T00:00:00.000Z"
      }
    );
    (0, import_vitest.expect)(bad.ok).toBe(false);
    (0, import_vitest.expect)(bad.errors.join(" ")).toContain("predates");
    const good = validatePreRegistration(
      spec({
        status: "DEAD",
        run_sha: "deadbeef00",
        run_at: "2026-09-13T00:00:00.000Z",
        number: -0.02,
        n: 350
      }),
      {
        killLineCommittedAt: "2026-09-12T00:00:00.000Z",
        runCommittedAt: "2026-09-13T00:00:00.000Z"
      }
    );
    (0, import_vitest.expect)(good.ok).toBe(true);
  });
  (0, import_vitest.it)("BLOCKED requires blocked_on", () => {
    const check = validatePreRegistration(spec({ status: "BLOCKED" }));
    (0, import_vitest.expect)(check.ok).toBe(false);
    (0, import_vitest.expect)(check.errors.join(" ")).toContain("blocked_on");
  });
  (0, import_vitest.it)("id must look like A1 / P1", () => {
    (0, import_vitest.expect)(validatePreRegistration(spec({ id: "nope" })).ok).toBe(false);
    (0, import_vitest.expect)(validatePreRegistration(spec({ id: "P1" })).ok).toBe(true);
  });
});
(0, import_vitest.describe)("INDEX.md rendering", () => {
  (0, import_vitest.it)("carries id, status, number, CI, n, kill line, run date (\xA74.4)", () => {
    const md = renderIndexMarkdown([
      spec({
        id: "A1",
        hypothesis: "Birthday or former-team",
        status: "CANDIDATE",
        number: 0.011,
        ci: [-5e-3, 0.027],
        n: 400,
        run_at: "2026-09-16T00:00:00.000Z"
      }),
      spec({ id: "A2", hypothesis: "Shrinkage weight", status: "DEAD", number: -0.02, n: 200 })
    ]);
    (0, import_vitest.expect)(md).toContain("| A1 |");
    (0, import_vitest.expect)(md).toContain("CANDIDATE");
    (0, import_vitest.expect)(md).toContain("0.0110");
    (0, import_vitest.expect)(md).toContain("[-0.0050, 0.0270]");
    (0, import_vitest.expect)(md).toContain("| A2 |");
    (0, import_vitest.expect)(md).toContain("DEAD");
  });
  (0, import_vitest.it)("renders an honest empty row when there are no specs", () => {
    const md = renderIndexMarkdown([]);
    (0, import_vitest.expect)(md).toContain("no factor specs yet");
  });
});
(0, import_vitest.describe)("buildFactGraph", () => {
  (0, import_vitest.it)("writes INDEX.md when every spec passes; refuses when one fails", () => {
    const dir = (0, import_node_fs2.mkdtempSync)(import_node_path2.default.join((0, import_node_os.tmpdir)(), "factors-"));
    try {
      (0, import_node_fs2.writeFileSync)(
        import_node_path2.default.join(dir, "A1.yaml"),
        `id: A1
title: t
hypothesis: h
estimand: e
unit: u
data: [d]
discover_era: 2017-2020
validate_era: 2021-2024
kill_line: "effect <= 0"
script: scripts/factors/A1.mjs
status: UNTESTED
`,
        "utf8"
      );
      const ok = buildFactGraph(dir, { write: true });
      (0, import_vitest.expect)(ok.ok).toBe(true);
      (0, import_vitest.expect)((0, import_node_fs2.existsSync)(import_node_path2.default.join(dir, "INDEX.md"))).toBe(true);
      (0, import_node_fs2.writeFileSync)(
        import_node_path2.default.join(dir, "A2.yaml"),
        `id: A2
hypothesis: h
kill_line: ""
status: UNTESTED
`,
        "utf8"
      );
      const bad = buildFactGraph(dir, { write: false });
      (0, import_vitest.expect)(bad.ok).toBe(false);
    } finally {
      (0, import_node_fs2.rmSync)(dir, { recursive: true, force: true });
    }
  });
});
(0, import_vitest.describe)("mint log", () => {
  const rows = [
    {
      id: "held-1",
      sport: "NFL",
      market: "SPREAD",
      outcome: 0,
      marketFairProb: 0.55,
      modelProb: null,
      confidence: 70,
      modelVersion: "v5.2.7",
      generatedAt: "2026-09-09T00:00:00.000Z",
      isFounder: false,
      isPublished: true,
      isSettled: true,
      season: 2026
    },
    {
      id: "pub-1",
      sport: "NFL",
      market: "MONEYLINE",
      outcome: 1,
      marketFairProb: 0.6,
      modelProb: 0.65,
      confidence: 65,
      modelVersion: "v5.2.7",
      generatedAt: "2026-09-09T00:00:00.000Z",
      isFounder: false,
      isPublished: true,
      isSettled: true,
      season: 2026
    }
  ];
  (0, import_vitest.it)("marks a null-modelProb pick held and a scored pick published \u2014 hand 1/1", () => {
    const entries = buildMintLog(rows, { loggedAt: "2026-09-15T12:00:00.000Z" });
    (0, import_vitest.expect)(entries.length).toBe(2);
    (0, import_vitest.expect)(entries[0].decision).toBe("held");
    (0, import_vitest.expect)(entries[0].reason).toContain("no finite modelProb");
    (0, import_vitest.expect)(entries[1].decision).toBe("published");
    (0, import_vitest.expect)(entries[0].holdoutId).toBe("PICKS-H1");
  });
  (0, import_vitest.it)("writeMintLog lands a JSON file with entries[]", () => {
    const dir = (0, import_node_fs2.mkdtempSync)(import_node_path2.default.join((0, import_node_os.tmpdir)(), "mint-"));
    try {
      const p = import_node_path2.default.join(dir, "mint-log.json");
      writeMintLog(p, buildMintLog(rows));
      const doc = JSON.parse((0, import_node_fs2.readFileSync)(p, "utf8"));
      (0, import_vitest.expect)(Array.isArray(doc.entries)).toBe(true);
      (0, import_vitest.expect)(doc.entries.length).toBe(2);
    } finally {
      (0, import_node_fs2.rmSync)(dir, { recursive: true, force: true });
    }
  });
});
