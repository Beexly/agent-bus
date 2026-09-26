"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var factgraph_exports = {};
__export(factgraph_exports, {
  buildFactGraph: () => buildFactGraph,
  buildMintLog: () => buildMintLog,
  loadFactorSpecs: () => loadFactorSpecs,
  parseFactorYaml: () => parseFactorYaml,
  renderIndexMarkdown: () => renderIndexMarkdown,
  toFactorSpec: () => toFactorSpec,
  validatePreRegistration: () => validatePreRegistration,
  writeMintLog: () => writeMintLog
});
module.exports = __toCommonJS(factgraph_exports);
var import_node_fs = require("node:fs");
var import_node_path = __toESM(require("node:path"));
function validatePreRegistration(spec, options) {
  const errors = [];
  const warnings = [];
  if (!spec.id || !/^[A-Z][0-9]+$/.test(spec.id)) {
    errors.push(`id must look like A1 / P1 (got ${JSON.stringify(spec.id)})`);
  }
  if (!spec.kill_line || spec.kill_line.trim().length === 0) {
    errors.push("kill_line is required and must be non-empty (pre-registered before any run)");
  }
  if (!spec.hypothesis || spec.hypothesis.trim().length === 0) {
    errors.push("hypothesis is required");
  }
  const scoredStatuses = /* @__PURE__ */ new Set(["CANDIDATE", "LIVE", "DEAD"]);
  if (scoredStatuses.has(spec.status)) {
    if (!spec.run_sha || spec.run_sha.trim().length < 7) {
      errors.push(`status=${spec.status} requires a run_sha (\u22657 hex chars)`);
    }
    if (!spec.run_at) {
      errors.push(`status=${spec.status} requires run_at`);
    }
    if (spec.number == null || !Number.isFinite(spec.number)) {
      errors.push(`status=${spec.status} requires a validate-era point estimate in number`);
    }
    if (spec.n == null || !(spec.n > 0)) {
      errors.push(`status=${spec.status} requires n > 0`);
    }
  }
  if (spec.status === "BLOCKED" && !spec.blocked_on) {
    errors.push("status=BLOCKED requires blocked_on naming the missing dataset");
  }
  if (options?.killLineCommittedAt && options?.runCommittedAt) {
    if (options.runCommittedAt < options.killLineCommittedAt) {
      errors.push(
        `run_sha commit (${options.runCommittedAt}) predates kill_line commit (${options.killLineCommittedAt}) \u2014 pre-registration violated`
      );
    }
  }
  if (scoredStatuses.has(spec.status) && (spec.ci == null || spec.ci.length !== 2)) {
    warnings.push(`status=${spec.status} without a 95% CI \u2014 INDEX will render the number bare`);
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
      const spec = toFactorSpec(parsed, fallback);
      if (spec.id !== fallback && fallback.match(/^[A-Z][0-9]+$/)) {
        errors.push(`${f}: id ${spec.id} does not match filename ${fallback}`);
      }
      specs.push(spec);
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
