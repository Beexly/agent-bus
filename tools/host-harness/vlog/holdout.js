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
var holdout_exports = {};
__export(holdout_exports, {
  HOLDOUT_DEFS: () => HOLDOUT_DEFS,
  NFL_H2_DISCOVER_MAX_SEASON: () => NFL_H2_DISCOVER_MAX_SEASON,
  NFL_H2_LIVE_SEASON: () => NFL_H2_LIVE_SEASON,
  NFL_H2_SEASONS: () => NFL_H2_SEASONS,
  PICKS_H1_CUTOFF: () => PICKS_H1_CUTOFF,
  RE_GRADED_MODEL_VERSIONS: () => RE_GRADED_MODEL_VERSIONS,
  exportSearchPaths: () => exportSearchPaths,
  isFootballSport: () => isFootballSport,
  isNflH2: () => isNflH2,
  isPicksH1: () => isPicksH1,
  loadPicksH1: () => loadPicksH1,
  parsePicksH1Export: () => parsePicksH1Export,
  selectNflH2: () => selectNflH2,
  selectPicksH1: () => selectPicksH1,
  splitEras: () => splitEras
});
module.exports = __toCommonJS(holdout_exports);
var import_node_fs = require("node:fs");
var import_node_path = __toESM(require("node:path"));
const PICKS_H1_CUTOFF = "2026-08-01T00:00:00.000Z";
const NFL_H2_SEASONS = [2020, 2021, 2022, 2023, 2024, 2025];
const NFL_H2_DISCOVER_MAX_SEASON = 2019;
const NFL_H2_LIVE_SEASON = 2026;
const HOLDOUT_DEFS = {
  "PICKS-H1": {
    id: "PICKS-H1",
    cutoff: PICKS_H1_CUTOFF,
    description: "Settled published non-founder picks with generatedAt >= 2026-08-01, plus everything forward."
  },
  "NFL-H2": {
    id: "NFL-H2",
    seasons: NFL_H2_SEASONS,
    discoverMaxSeason: NFL_H2_DISCOVER_MAX_SEASON,
    liveSeason: NFL_H2_LIVE_SEASON,
    description: "NFL seasons 2020\u20132025 for nflverse hypotheses (discover \u22642019); 2026 is the live weekly holdout."
  }
};
const RE_GRADED_MODEL_VERSIONS = [
  "v5.0.0",
  "v5.0.0-seed",
  "v5.1.0",
  "v5.2.0",
  "v5.2.1",
  "v5.2.2",
  "v5.2.3",
  "v5.2.4",
  "v5.2.5",
  "v5.2.6",
  "v5.2.7"
];
function exportSearchPaths(repoRoot) {
  return [
    process.env["PICKS_H1_EXPORT"]?.trim() || import_node_path.default.join(repoRoot, "verifier", "picks-h1.json"),
    import_node_path.default.join(repoRoot, ".gse-local", "calibration", "picks-h1.json"),
    import_node_path.default.join(repoRoot, "packages", "verifier", "fixtures", "picks-h1.json")
  ].filter((p, i, arr) => arr.indexOf(p) === i);
}
function loadPicksH1(repoRoot) {
  const candidates = exportSearchPaths(repoRoot);
  const fixturePath = import_node_path.default.join(repoRoot, "packages", "verifier", "fixtures", "picks-h1.json");
  for (const p of candidates) {
    if (!(0, import_node_fs.existsSync)(p)) continue;
    const raw = JSON.parse((0, import_node_fs.readFileSync)(p, "utf8"));
    const doc = parsePicksH1Export(raw);
    return {
      export: doc,
      path: p,
      fromFixture: import_node_path.default.resolve(p) === import_node_path.default.resolve(fixturePath)
    };
  }
  throw new Error(
    `picks-h1 export not found. Looked in:
  ${candidates.join("\n  ")}
Write verifier/picks-h1.json (calibration-metrics cron) or commit a fixture.`
  );
}
function parsePicksH1Export(raw) {
  if (typeof raw !== "object" || raw === null) {
    throw new Error("picks-h1 export must be a JSON object");
  }
  const doc = raw;
  const rowsRaw = doc["rows"];
  if (!Array.isArray(rowsRaw)) {
    throw new Error("picks-h1 export missing rows[]");
  }
  const rows = rowsRaw.map((r, i) => parseRow(r, i));
  const holdoutId = doc["holdoutId"] ?? "PICKS-H1";
  if (holdoutId !== "PICKS-H1" && holdoutId !== "NFL-H2") {
    throw new Error(`unknown holdoutId: ${String(holdoutId)}`);
  }
  return {
    holdoutId,
    generatedAt: String(doc["generatedAt"] ?? (/* @__PURE__ */ new Date(0)).toISOString()),
    schemaVersion: 1,
    rows,
    source: doc["source"] === void 0 ? void 0 : String(doc["source"])
  };
}
function parseRow(raw, i) {
  if (typeof raw !== "object" || raw === null) {
    throw new Error(`rows[${i}] must be an object`);
  }
  const r = raw;
  const outcome = r["outcome"];
  if (outcome !== 0 && outcome !== 1) {
    throw new Error(`rows[${i}].outcome must be 0 or 1`);
  }
  const mfp = r["marketFairProb"];
  if (typeof mfp !== "number" || !(mfp > 0 && mfp < 1)) {
    throw new Error(`rows[${i}].marketFairProb must be in (0,1)`);
  }
  const mp = r["modelProb"];
  if (mp !== null && (typeof mp !== "number" || !(mp > 0 && mp < 1))) {
    throw new Error(`rows[${i}].modelProb must be null or in (0,1)`);
  }
  return {
    id: String(r["id"] ?? `row-${i}`),
    sport: String(r["sport"] ?? "UNKNOWN"),
    market: String(r["market"] ?? "UNKNOWN"),
    outcome,
    marketFairProb: mfp,
    modelProb: mp === void 0 ? null : mp,
    confidence: r["confidence"] === null || r["confidence"] === void 0 ? null : Number(r["confidence"]),
    modelVersion: String(r["modelVersion"] ?? "unknown"),
    generatedAt: String(r["generatedAt"] ?? ""),
    isFounder: Boolean(r["isFounder"] ?? false),
    isPublished: Boolean(r["isPublished"] ?? true),
    isSettled: Boolean(r["isSettled"] ?? true),
    season: r["season"] === void 0 || r["season"] === null ? null : Number(r["season"])
  };
}
function isPicksH1(row, cutoff = PICKS_H1_CUTOFF) {
  if (row.isFounder) return false;
  if (!row.isSettled) return false;
  if (!row.isPublished) return false;
  if (row.outcome !== 0 && row.outcome !== 1) return false;
  if (!(row.marketFairProb > 0 && row.marketFairProb < 1)) return false;
  return row.generatedAt >= cutoff;
}
function isNflH2(row) {
  if (row.sport.toUpperCase() !== "NFL") return false;
  const s = row.season;
  if (s == null) return false;
  return NFL_H2_SEASONS.includes(s);
}
function selectPicksH1(rows, cutoff = PICKS_H1_CUTOFF) {
  return rows.filter((r) => isPicksH1(r, cutoff));
}
function selectNflH2(rows) {
  return rows.filter((r) => isNflH2(r));
}
function isFootballSport(sport) {
  const s = sport.toUpperCase();
  return s === "NFL" || s === "NCAAF" || s === "NCAA_FOOTBALL" || s === "COLLEGE_FOOTBALL";
}
function splitEras(rows, discoverMaxSeason = NFL_H2_DISCOVER_MAX_SEASON) {
  const discover = [];
  const validate = [];
  for (const r of rows) {
    const s = r.season ?? 0;
    if (s <= discoverMaxSeason) discover.push(r);
    else validate.push(r);
  }
  return { discover, validate };
}
