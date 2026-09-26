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

// ../gsx/packages/verifier/src/__tests__/holdout.test.ts
var import_vitest = require("vitest");
var import_node_path2 = __toESM(require("node:path"));
var import_node_fs2 = require("node:fs");

// ../gsx/packages/verifier/src/holdout.ts
var import_node_fs = require("node:fs");
var import_node_path = __toESM(require("node:path"));
var PICKS_H1_CUTOFF = "2026-08-01T00:00:00.000Z";
var NFL_H2_SEASONS = [2020, 2021, 2022, 2023, 2024, 2025];
var NFL_H2_DISCOVER_MAX_SEASON = 2019;
var NFL_H2_LIVE_SEASON = 2026;
var HOLDOUT_DEFS = {
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
var RE_GRADED_MODEL_VERSIONS = [
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
function isPicksH1(row2, cutoff = PICKS_H1_CUTOFF) {
  if (row2.isFounder) return false;
  if (!row2.isSettled) return false;
  if (!row2.isPublished) return false;
  if (row2.outcome !== 0 && row2.outcome !== 1) return false;
  if (!(row2.marketFairProb > 0 && row2.marketFairProb < 1)) return false;
  return row2.generatedAt >= cutoff;
}
function isNflH2(row2) {
  if (row2.sport.toUpperCase() !== "NFL") return false;
  const s = row2.season;
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

// ../gsx/packages/verifier/src/__tests__/holdout.test.ts
var FIXTURE_PATH = import_node_path2.default.join(__dirname, "..", "..", "fixtures", "picks-h1.json");
function fixtureRows() {
  const raw = JSON.parse((0, import_node_fs2.readFileSync)(FIXTURE_PATH, "utf8"));
  return [...parsePicksH1Export(raw).rows];
}
function row(over) {
  return {
    id: "t",
    sport: "NFL",
    market: "MONEYLINE",
    outcome: 1,
    marketFairProb: 0.6,
    modelProb: 0.65,
    confidence: 65,
    modelVersion: "v5.2.7",
    generatedAt: "2026-09-01T00:00:00.000Z",
    isFounder: false,
    isPublished: true,
    isSettled: true,
    season: 2025,
    ...over
  };
}
(0, import_vitest.describe)("frozen holdout constants", () => {
  (0, import_vitest.it)("PICKS-H1 cutoff is 2026-08-01 and is never silently edited", () => {
    (0, import_vitest.expect)(PICKS_H1_CUTOFF).toBe("2026-08-01T00:00:00.000Z");
    (0, import_vitest.expect)(HOLDOUT_DEFS["PICKS-H1"].cutoff).toBe(PICKS_H1_CUTOFF);
  });
  (0, import_vitest.it)("NFL-H2 seasons are exactly 2020\u20132025 with discover \u22642019 and live 2026", () => {
    (0, import_vitest.expect)([...HOLDOUT_DEFS["NFL-H2"].seasons]).toEqual([2020, 2021, 2022, 2023, 2024, 2025]);
    (0, import_vitest.expect)(HOLDOUT_DEFS["NFL-H2"].discoverMaxSeason).toBe(2019);
    (0, import_vitest.expect)(HOLDOUT_DEFS["NFL-H2"].liveSeason).toBe(2026);
  });
  (0, import_vitest.it)("re-graded versions span v5.0.0 \u2192 v5.2.7", () => {
    (0, import_vitest.expect)(RE_GRADED_MODEL_VERSIONS[0]).toBe("v5.0.0");
    (0, import_vitest.expect)(RE_GRADED_MODEL_VERSIONS[RE_GRADED_MODEL_VERSIONS.length - 1]).toBe("v5.2.7");
    (0, import_vitest.expect)(RE_GRADED_MODEL_VERSIONS).toContain("v5.2.7");
  });
});
(0, import_vitest.describe)("PICKS-H1 membership", () => {
  (0, import_vitest.it)("admits a settled published non-founder pick at/after the cutoff", () => {
    (0, import_vitest.expect)(isPicksH1(row({}))).toBe(true);
    (0, import_vitest.expect)(isPicksH1(row({ generatedAt: PICKS_H1_CUTOFF }))).toBe(true);
  });
  (0, import_vitest.it)("excludes pre-cutoff rows \u2014 hand count on the fixture", () => {
    const rows = fixtureRows();
    const early = rows.find((r) => r.id === "fx-exclude-early");
    (0, import_vitest.expect)(isPicksH1(early)).toBe(false);
    const selected = selectPicksH1(rows);
    (0, import_vitest.expect)(rows.length).toBe(38);
    (0, import_vitest.expect)(selected.length).toBe(34);
    (0, import_vitest.expect)(selected.map((r) => r.id)).not.toContain("fx-exclude-founder");
    (0, import_vitest.expect)(selected.map((r) => r.id)).not.toContain("fx-exclude-unpub");
    (0, import_vitest.expect)(selected.map((r) => r.id)).not.toContain("fx-exclude-pending");
    (0, import_vitest.expect)(selected.map((r) => r.id)).not.toContain("fx-exclude-early");
    (0, import_vitest.expect)(selected.map((r) => r.id)).toContain("fx-held");
  });
  (0, import_vitest.it)("excludes founder rows, unpublished rows, and unsettled rows structurally", () => {
    (0, import_vitest.expect)(isPicksH1(row({ isFounder: true }))).toBe(false);
    (0, import_vitest.expect)(isPicksH1(row({ isPublished: false }))).toBe(false);
    (0, import_vitest.expect)(isPicksH1(row({ isSettled: false }))).toBe(false);
  });
  (0, import_vitest.it)("excludes a non-interior marketFairProb (synthetic 0.5 is kept; 0 and 1 are not)", () => {
    (0, import_vitest.expect)(isPicksH1(row({ marketFairProb: 0.5 }))).toBe(true);
    (0, import_vitest.expect)(isPicksH1(row({ marketFairProb: 1 }))).toBe(false);
    (0, import_vitest.expect)(isPicksH1(row({ marketFairProb: 0 }))).toBe(false);
  });
});
(0, import_vitest.describe)("NFL-H2 membership", () => {
  (0, import_vitest.it)("admits NFL seasons 2020\u20132025 only", () => {
    (0, import_vitest.expect)(isNflH2(row({ sport: "NFL", season: 2020 }))).toBe(true);
    (0, import_vitest.expect)(isNflH2(row({ sport: "NFL", season: 2025 }))).toBe(true);
    (0, import_vitest.expect)(isNflH2(row({ sport: "NFL", season: 2019 }))).toBe(false);
    (0, import_vitest.expect)(isNflH2(row({ sport: "NFL", season: 2026 }))).toBe(false);
    (0, import_vitest.expect)(isNflH2(row({ sport: "MLB", season: 2022 }))).toBe(false);
  });
  (0, import_vitest.it)("hand-count on the fixture: NFL rows with season in 2020\u20132025", () => {
    const rows = fixtureRows();
    const nflH2 = selectNflH2(rows);
    (0, import_vitest.expect)(nflH2.length).toBe(16);
    (0, import_vitest.expect)(nflH2.every((r) => r.sport === "NFL" && r.season === 2025)).toBe(true);
  });
});
(0, import_vitest.describe)("era split", () => {
  (0, import_vitest.it)("splits at discoverMaxSeason \u2014 hand: 2019\u2192discover, 2020\u2192validate", () => {
    const rows = [
      row({ id: "a", season: 2019 }),
      row({ id: "b", season: 2018 }),
      row({ id: "c", season: 2020 }),
      row({ id: "d", season: 2025 })
    ];
    const { discover, validate } = splitEras(rows);
    (0, import_vitest.expect)(discover.map((r) => r.id)).toEqual(["a", "b"]);
    (0, import_vitest.expect)(validate.map((r) => r.id)).toEqual(["c", "d"]);
  });
});
(0, import_vitest.describe)("sport helpers", () => {
  (0, import_vitest.it)("football = NFL or NCAAF aliases; MLB is not football", () => {
    (0, import_vitest.expect)(isFootballSport("NFL")).toBe(true);
    (0, import_vitest.expect)(isFootballSport("nfl")).toBe(true);
    (0, import_vitest.expect)(isFootballSport("NCAAF")).toBe(true);
    (0, import_vitest.expect)(isFootballSport("MLB")).toBe(false);
    (0, import_vitest.expect)(isFootballSport("NBA")).toBe(false);
  });
});
(0, import_vitest.describe)("export loading", () => {
  (0, import_vitest.it)("loads the committed fixture from the default search path", () => {
    const repoRoot = import_node_path2.default.join(__dirname, "..", "..", "..", "..");
    const loaded = loadPicksH1(repoRoot);
    (0, import_vitest.expect)(loaded.export.holdoutId).toBe("PICKS-H1");
    (0, import_vitest.expect)(loaded.export.schemaVersion).toBe(1);
    (0, import_vitest.expect)(loaded.export.rows.length).toBe(38);
    (0, import_vitest.expect)(loaded.fromFixture).toBe(true);
  });
  (0, import_vitest.it)("search paths put the real export before the fixture", () => {
    const paths = exportSearchPaths("/repo");
    (0, import_vitest.expect)(paths[0]).toContain("picks-h1.json");
    (0, import_vitest.expect)(paths[paths.length - 1]).toContain(import_node_path2.default.join("fixtures", "picks-h1.json"));
  });
  (0, import_vitest.it)("rejects a malformed export with a named error", () => {
    (0, import_vitest.expect)(() => parsePicksH1Export(null)).toThrow(/must be a JSON object/);
    (0, import_vitest.expect)(() => parsePicksH1Export({})).toThrow(/missing rows/);
    (0, import_vitest.expect)(
      () => parsePicksH1Export({
        holdoutId: "PICKS-H1",
        rows: [{ id: "x", outcome: 2, marketFairProb: 0.5 }]
      })
    ).toThrow(/outcome must be 0 or 1/);
  });
});
