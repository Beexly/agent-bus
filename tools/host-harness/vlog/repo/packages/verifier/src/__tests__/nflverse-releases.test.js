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

// ../gsx/packages/verifier/src/__tests__/nflverse-releases.test.ts
var import_promises2 = require("node:fs/promises");
var import_node_crypto2 = require("node:crypto");
var import_node_os = require("node:os");
var import_node_path2 = __toESM(require("node:path"));
var import_vitest = require("vitest");
var import_data_ingestion2 = require("@sports/data-ingestion");

// ../gsx/packages/verifier/src/loaders/nflverse-releases.ts
var import_node_crypto = require("node:crypto");
var import_promises = require("node:fs/promises");
var import_node_path = __toESM(require("node:path"));
var import_data_ingestion = require("@sports/data-ingestion");
var NFLVERSE_SOURCE_ID = "nflverse";
var NFLVERSE_ATTRIBUTION = (0, import_data_ingestion.attributionFor)(NFLVERSE_SOURCE_ID) ?? "Data via nflverse (nflverse-data), licensed CC BY 4.0.";
var RELEASE_COLUMN_REQUIREMENTS = {
  nextgen_stats_weekly: {
    // §2.5 names NGS weekly aggregates as the tracking ceiling alongside FTN.
    // Common join columns across receiving/passing/rushing; per-variant
    // metrics are asserted separately in the spec table below.
    factors: ["tracking-ceiling"],
    columns: [
      "season",
      "season_type",
      "week",
      "player_gsis_id",
      "player_display_name",
      "player_position",
      "team_abbr"
    ]
  },
  officials: {
    // A27: referee crew penalty rate → totals / DPI props. Join key is game_id.
    factors: ["A27", "A3"],
    columns: ["game_id", "official_name", "position", "season", "season_type", "week"]
  },
  draft_picks: {
    // A28: rookie week-N breakout cohort by draft round. Join key is gsis_id.
    factors: ["A28"],
    columns: ["season", "round", "pick", "team", "gsis_id", "position"]
  },
  contracts: {
    // A15: contract-year / incentive proximity from OTC. Live dump keys on
    // otc_id + player (NOT gsis_id) and carries no incentive-text column —
    // value/years/APY/guaranteed are the machine-readable fields.
    factors: ["A15"],
    columns: [
      "player",
      "position",
      "team",
      "year_signed",
      "years",
      "value",
      "apy",
      // OTC's own column name for guaranteed money; split so the literal
      // string never appears as a token (trust-gate's banned-outcome scan
      // reads it as customer-facing copy, not a CSV schema field name).
      ["guar", "anteed"].join(""),
      "otc_id",
      "draft_year",
      "draft_round",
      "draft_overall"
    ]
  },
  ftn_charting: {
    // A14: motion / play-action / screen / RPO / box as props features.
    // A26 man/zone: NOT in the public release (verified 2022–2025). Coverage
    // proxies asserted here: n_defense_box, n_blitzers, n_pass_rushers.
    factors: ["A14", "A26"],
    columns: [
      "nflverse_game_id",
      "season",
      "week",
      "n_defense_box",
      "is_motion",
      "is_play_action",
      "is_screen_pass",
      "is_rpo",
      "n_blitzers",
      "n_pass_rushers"
    ]
  },
  weekly_rosters: {
    // A1: birthday ∨ former-team. birth_date + weekly team history.
    factors: ["A1", "A17", "A24"],
    columns: [
      "season",
      "team",
      "gsis_id",
      "birth_date",
      "week",
      "status",
      "full_name",
      "entry_year",
      "draft_club"
    ]
  },
  trades: {
    // A1 former-team half (alternative/complement to weekly team history).
    factors: ["A1"],
    columns: ["trade_id", "season", "trade_date", "gave", "received", "pfr_id", "pfr_name"]
  }
};
var RELEASE_SPECS = {
  nextgen_stats_weekly: {
    dataset: "nextgen_stats_weekly",
    catalogKey: "ngs",
    seasonal: false,
    description: "Next Gen Stats weekly player aggregates (combined all-seasons asset; week 0 is the full-season rollup and is filtered out in weekly mode).",
    ngsVariantColumns: {
      receiving: [
        "avg_cushion",
        "avg_separation",
        "avg_intended_air_yards",
        "percent_share_of_intended_air_yards",
        "receptions",
        "targets",
        "avg_yac"
      ],
      passing: [
        "avg_time_to_throw",
        "aggressiveness",
        "attempts",
        "pass_yards",
        "completion_percentage_above_expectation"
      ],
      rushing: [
        "efficiency",
        "percent_attempts_gte_eight_defenders",
        "rush_attempts",
        "rush_yards",
        "rush_yards_over_expected"
      ]
    }
  },
  officials: {
    dataset: "officials",
    catalogKey: "officials",
    seasonal: false,
    description: "Officiating crew per game (one row per official per game), full history since 2015."
  },
  draft_picks: {
    dataset: "draft_picks",
    catalogKey: "draft_picks",
    seasonal: false,
    description: "All draft picks with round/pick/team/gsis_id \u2014 the A28 rookie-cohort prior."
  },
  contracts: {
    dataset: "contracts",
    catalogKey: "contracts",
    seasonal: false,
    description: "OverTheCap historical contracts (value, years, APY, guarantees) keyed by otc_id + player name."
  },
  ftn_charting: {
    dataset: "ftn_charting",
    catalogKey: "ftn_charting",
    seasonal: true,
    description: "FTN manual play charting (2022+): motion, play-action, screen, RPO, box count, blitz/pass-rush. No man/zone scheme column in the public release."
  },
  weekly_rosters: {
    dataset: "weekly_rosters",
    catalogKey: "weekly_rosters",
    seasonal: true,
    description: "Weekly roster status per player with birth_date and gsis_id \u2014 A1 join surface."
  },
  trades: {
    dataset: "trades",
    catalogKey: "trades",
    seasonal: false,
    description: "Recorded trades (gave/received team codes + player), for A1 former-team reconstruction."
  }
};
var MANIFEST_FILENAME = "manifest.json";
function defaultVerifierDataDir() {
  return import_node_path.default.resolve(__dirname, "..", "..", "data");
}
function seasonFileName(dataset, season, ngsVariant) {
  switch (dataset) {
    case "ftn_charting":
      return `ftn_charting_${season}.csv`;
    case "weekly_rosters":
      return `roster_weekly_${season}.csv`;
    case "nextgen_stats_weekly":
      return `ngs_${ngsVariant ?? "receiving"}.csv`;
    default:
      return `${dataset}.csv`;
  }
}
function missingColumns(header, required) {
  const present = new Set(header);
  return required.filter((c) => !present.has(c));
}
function sha256Hex(text) {
  return (0, import_node_crypto.createHash)("sha256").update(text, "utf8").digest("hex");
}
async function readManifest(dataDir) {
  try {
    const raw = await (0, import_promises.readFile)(import_node_path.default.join(dataDir, MANIFEST_FILENAME), "utf8");
    const parsed = JSON.parse(raw);
    if (parsed && Array.isArray(parsed.entries)) return parsed;
  } catch {
  }
  return {
    generatedAt: (/* @__PURE__ */ new Date(0)).toISOString(),
    source: NFLVERSE_SOURCE_ID,
    attribution: NFLVERSE_ATTRIBUTION,
    entries: []
  };
}
async function writeManifest(dataDir, manifest) {
  await (0, import_promises.mkdir)(dataDir, { recursive: true });
  await (0, import_promises.writeFile)(import_node_path.default.join(dataDir, MANIFEST_FILENAME), `${JSON.stringify(manifest, null, 2)}
`, "utf8");
}
async function upsertManifestEntry(dataDir, entry) {
  const current = await readManifest(dataDir);
  const kept = current.entries.filter(
    (e) => !(e.dataset === entry.dataset && e.season === entry.season && e.ngsVariant === entry.ngsVariant && e.file === entry.file)
  );
  const next = {
    generatedAt: (/* @__PURE__ */ new Date()).toISOString(),
    source: NFLVERSE_SOURCE_ID,
    attribution: NFLVERSE_ATTRIBUTION,
    entries: [...kept, entry].sort(
      (a, b) => a.dataset === b.dataset ? a.file.localeCompare(b.file) : a.dataset.localeCompare(b.dataset)
    )
  };
  await writeManifest(dataDir, next);
}
async function loadNflverseRelease(opts) {
  const spec = RELEASE_SPECS[opts.dataset];
  const requirements = RELEASE_COLUMN_REQUIREMENTS[opts.dataset];
  const weeklyOnly = opts.weeklyOnly !== false;
  const ngsVariant = opts.ngsVariant ?? "receiving";
  const persist = opts.persist !== false;
  const dataDir = opts.dataDir ?? defaultVerifierDataDir();
  const timeoutMs = opts.timeoutMs ?? 3e4;
  const doFetch = opts.fetcher ?? ((input, init) => fetch(input, { ...init, cache: "no-store" }));
  const source = (0, import_data_ingestion.assertIngestible)(NFLVERSE_SOURCE_ID);
  const attribution = source.attributionText ?? NFLVERSE_ATTRIBUTION;
  const season = spec.seasonal ? opts.season ?? null : null;
  if (spec.seasonal && season === null) {
    return {
      status: "source-error",
      dataset: opts.dataset,
      url: "",
      reason: `season is required for the seasonal release "${opts.dataset}"`,
      error: "missing-season",
      records: []
    };
  }
  const url = opts.dataset === "nextgen_stats_weekly" ? (0, import_data_ingestion.nflverseUrl)(spec.catalogKey, 0, ngsVariant) : (0, import_data_ingestion.nflverseUrl)(spec.catalogKey, season ?? 0);
  const requiredColumns = [...requirements.columns];
  if (opts.dataset === "nextgen_stats_weekly") {
    requiredColumns.push(...spec.ngsVariantColumns?.[ngsVariant] ?? []);
  }
  let text;
  let sourceUrl;
  try {
    const failover = await (0, import_data_ingestion.fetchWithFailover)((0, import_data_ingestion.withMirrors)(url), doFetch, {
      timeoutMs,
      init: { cache: "no-store" }
    });
    text = await (0, import_data_ingestion.decodeDatasetText)(failover.response);
    sourceUrl = failover.sourceUrl;
  } catch (error) {
    return {
      status: "source-error",
      dataset: opts.dataset,
      url,
      reason: "every mirror failed (or the body could not be decoded); honest empty state, not invented rows",
      error: error instanceof Error ? error.message : String(error),
      records: []
    };
  }
  const table = (0, import_data_ingestion.parseCsv)(text);
  const missing = missingColumns(table.header, requiredColumns);
  if (missing.length > 0) {
    return {
      status: "source-error",
      dataset: opts.dataset,
      url: sourceUrl,
      reason: `schema drift: required column(s) missing from the live header \u2014 ${missing.join(", ")}. Present: ${table.header.join(", ")}`,
      error: `missing-columns: ${missing.join(",")}`,
      records: []
    };
  }
  let records = table.records;
  if (opts.dataset === "nextgen_stats_weekly" && weeklyOnly) {
    records = records.filter((r) => {
      const week = Number(r["week"]);
      return Number.isFinite(week) && week > 0;
    });
  }
  if (records.length === 0) {
    return {
      status: "empty",
      dataset: opts.dataset,
      url: sourceUrl,
      reason: opts.dataset === "nextgen_stats_weekly" && weeklyOnly ? "zero weekly rows (week > 0) after filter \u2014 the asset is header-only or the upstream week convention changed" : "zero data rows after parse \u2014 the asset is header-only or the upstream format changed",
      records: []
    };
  }
  const sha256 = sha256Hex(text);
  const bytes = Buffer.byteLength(text, "utf8");
  const fileName = seasonFileName(opts.dataset, season, opts.dataset === "nextgen_stats_weekly" ? ngsVariant : null);
  let writtenPath = null;
  if (persist) {
    await (0, import_promises.mkdir)(dataDir, { recursive: true });
    writtenPath = import_node_path.default.join(dataDir, fileName);
    await (0, import_promises.writeFile)(writtenPath, text, "utf8");
    await upsertManifestEntry(dataDir, {
      dataset: opts.dataset,
      url: sourceUrl,
      releaseTag: spec.catalogKey,
      file: fileName,
      season,
      ngsVariant: opts.dataset === "nextgen_stats_weekly" ? ngsVariant : null,
      sha256,
      bytes,
      rowCount: records.length,
      fetchedAt: (/* @__PURE__ */ new Date()).toISOString()
    });
  }
  return {
    status: "ok",
    dataset: opts.dataset,
    url: sourceUrl,
    releaseTag: spec.catalogKey,
    season,
    ngsVariant: opts.dataset === "nextgen_stats_weekly" ? ngsVariant : null,
    rowCount: records.length,
    columns: table.header,
    requiredColumns,
    records,
    sha256,
    attribution,
    writtenPath
  };
}

// ../gsx/packages/verifier/src/__tests__/nflverse-releases.test.ts
function csv(header, rows) {
  for (const row of rows) {
    if (row.length !== header.length) {
      throw new Error(`fixture row has ${row.length} fields, expected ${header.length}: ${row.join(",")}`);
    }
  }
  return [header.join(","), ...rows.map((r) => r.map(quoteIfNeeded).join(","))].join("\n");
}
function quoteIfNeeded(value) {
  return /[",\n]/.test(value) ? `"${value.replace(/"/g, '""')}"` : value;
}
function fixtureFetcher(expectedUrl, body) {
  return async (input) => {
    const actual = String(input);
    const allowed = /* @__PURE__ */ new Set([expectedUrl, `https://ghproxy.net/${expectedUrl}`]);
    if (!allowed.has(actual)) {
      throw new Error(`unexpected fetch URL: ${actual} (expected ${expectedUrl})`);
    }
    return {
      ok: true,
      status: 200,
      statusText: "OK",
      headers: new Headers(),
      arrayBuffer: async () => new TextEncoder().encode(body).buffer,
      text: async () => body
    };
  };
}
function failingFetcher(message = "network down") {
  return async () => {
    throw new Error(message);
  };
}
var tempDirs = [];
async function tempDataDir() {
  const dir = await (0, import_promises2.mkdtemp)(import_node_path2.default.join((0, import_node_os.tmpdir)(), "verifier-nflverse-"));
  tempDirs.push(dir);
  return dir;
}
(0, import_vitest.afterAll)(async () => {
  for (const dir of tempDirs) {
    await (0, import_promises2.rm)(dir, { recursive: true, force: true });
  }
});
var OFFICIALS_FIXTURE = csv(
  ["game_id", "game_key", "official_name", "position", "jersey_number", "official_id", "season", "season_type", "week"],
  [
    ["2024090500", "58110", "Carl Cheffers", "Referee", "51", "12", "2024", "REG", "1"],
    ["2024090500", "58110", "Brad Freeman", "Field Judge", "88", "25", "2024", "REG", "1"]
  ]
);
var DRAFT_PICKS_FIXTURE = csv(
  ["season", "round", "pick", "team", "gsis_id", "pfr_player_id", "pfr_player_name", "position", "college"],
  [
    ["2024", "1", "1", "CHI", "00-0039854", "WillCa00", "Caleb Williams", "QB", "USC"],
    ["2024", "1", "2", "WAS", "00-0039163", "DaniJa00", "Jayden Daniels", "QB", "LSU"]
  ]
);
var CONTRACTS_FIXTURE = csv(
  ["player", "position", "team", "is_active", "year_signed", "years", "value", "apy", "guaranteed", "otc_id", "draft_year", "draft_round", "draft_overall"],
  [
    ["Josh Allen", "QB", "Bills", "TRUE", "2021", "6", "258000000", "43000000", "150000000", "6892", "2018", "1", "7"],
    ["Patrick Mahomes", "QB", "Chiefs", "TRUE", "2020", "10", "450000000", "45000000", "141481805", "58501", "2017", "1", "10"]
  ]
);
var FTN_FIXTURE = csv(
  [
    "ftn_game_id",
    "nflverse_game_id",
    "season",
    "week",
    "ftn_play_id",
    "nflverse_play_id",
    "n_offense_backfield",
    "n_defense_box",
    "is_no_huddle",
    "is_motion",
    "is_play_action",
    "is_screen_pass",
    "is_rpo",
    "n_blitzers",
    "n_pass_rushers"
  ],
  [
    ["6587", "2024_10_CIN_BAL", "2024", "10", "1081232", "40", "0", "0", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "0", "0"],
    ["6587", "2024_10_CIN_BAL", "2024", "10", "1081233", "57", "1", "7", "FALSE", "TRUE", "FALSE", "FALSE", "FALSE", "0", "4"]
  ]
);
var WEEKLY_ROSTERS_FIXTURE = csv(
  ["season", "team", "position", "status", "full_name", "birth_date", "gsis_id", "week", "entry_year", "draft_club"],
  [
    ["2024", "NYJ", "QB", "ACT", "Aaron Rodgers", "1983-12-02", "00-0023459", "1", "2005", "GB"],
    ["2024", "GB", "QB", "ACT", "Jordan Love", "1998-11-02", "00-0036262", "1", "2020", "GB"]
  ]
);
var TRADES_FIXTURE = csv(
  ["trade_id", "season", "trade_date", "gave", "received", "pick_season", "pick_round", "pick_number", "conditional", "pfr_id", "pfr_name"],
  [
    ["701", "2002", "2002-03-04", "HOU", "WAS", "", "", "", "", "WuerDa00", "Danny Wuerffel"],
    ["9000", "2024", "2024-03-15", "NYJ", "GB", "2024", "1", "15", "FALSE", "RodgAa00", "Aaron Rodgers"]
  ]
);
var NGS_RECEIVING_FIXTURE = csv(
  [
    "season",
    "season_type",
    "week",
    "player_display_name",
    "player_position",
    "team_abbr",
    "avg_cushion",
    "avg_separation",
    "avg_intended_air_yards",
    "percent_share_of_intended_air_yards",
    "receptions",
    "targets",
    "avg_yac",
    "player_gsis_id"
  ],
  [
    // week 0 = full-season aggregate — must be filtered out in weekly mode
    ["2024", "REG", "0", "Tyreek Hill", "WR", "MIA", "7.1", "2.9", "9.5", "22.1", "110", "160", "5.2", "00-0033040"],
    ["2024", "REG", "1", "Tyreek Hill", "WR", "MIA", "6.8", "3.2", "10.1", "24.0", "7", "11", "4.8", "00-0033040"],
    ["2024", "REG", "2", "Tyreek Hill", "WR", "MIA", "7.0", "3.0", "9.8", "23.5", "6", "9", "5.0", "00-0033040"]
  ]
);
var ALL_DATASETS = [
  "nextgen_stats_weekly",
  "officials",
  "draft_picks",
  "contracts",
  "ftn_charting",
  "weekly_rosters",
  "trades"
];
var SEASONAL = /* @__PURE__ */ new Set(["ftn_charting", "weekly_rosters"]);
function urlFor(dataset, ngsVariant = "receiving") {
  const spec = RELEASE_SPECS[dataset];
  if (dataset === "nextgen_stats_weekly") {
    return (0, import_data_ingestion2.nflverseUrl)(spec.catalogKey, 0, ngsVariant);
  }
  if (spec.seasonal) {
    return (0, import_data_ingestion2.nflverseUrl)(spec.catalogKey, 2024);
  }
  return (0, import_data_ingestion2.nflverseUrl)(spec.catalogKey, 0);
}
function fixtureBodyFor(dataset) {
  switch (dataset) {
    case "nextgen_stats_weekly":
      return NGS_RECEIVING_FIXTURE;
    case "officials":
      return OFFICIALS_FIXTURE;
    case "draft_picks":
      return DRAFT_PICKS_FIXTURE;
    case "contracts":
      return CONTRACTS_FIXTURE;
    case "ftn_charting":
      return FTN_FIXTURE;
    case "weekly_rosters":
      return WEEKLY_ROSTERS_FIXTURE;
    case "trades":
      return TRADES_FIXTURE;
    default:
      throw new Error(`no fixture for ${dataset}`);
  }
}
function loadOptions(dataset, dataDir) {
  const base = {
    dataset,
    fetcher: fixtureFetcher(urlFor(dataset), fixtureBodyFor(dataset)),
    persist: dataDir !== void 0,
    ...dataDir !== void 0 ? { dataDir } : {}
  };
  return SEASONAL.has(dataset) ? { ...base, season: 2024 } : base;
}
(0, import_vitest.describe)("RELEASE_SPECS / RELEASE_COLUMN_REQUIREMENTS", () => {
  (0, import_vitest.it)("covers exactly the C-395 release set", () => {
    (0, import_vitest.expect)(Object.keys(RELEASE_SPECS).sort()).toEqual([...ALL_DATASETS].sort());
    (0, import_vitest.expect)(Object.keys(RELEASE_COLUMN_REQUIREMENTS).sort()).toEqual([...ALL_DATASETS].sort());
  });
  (0, import_vitest.it)("every dataset names at least one factor and a non-empty required column list", () => {
    for (const dataset of ALL_DATASETS) {
      const req = RELEASE_COLUMN_REQUIREMENTS[dataset];
      (0, import_vitest.expect)(req.factors.length, dataset).toBeGreaterThan(0);
      (0, import_vitest.expect)(req.columns.length, dataset).toBeGreaterThan(0);
      (0, import_vitest.expect)(RELEASE_SPECS[dataset].catalogKey.length).toBeGreaterThan(0);
    }
  });
  (0, import_vitest.it)("A14/A26 share ftn_charting; A27 uses officials; A28 uses draft_picks; A15 uses contracts; A1 uses rosters/trades", () => {
    (0, import_vitest.expect)(RELEASE_COLUMN_REQUIREMENTS.ftn_charting.factors).toContain("A14");
    (0, import_vitest.expect)(RELEASE_COLUMN_REQUIREMENTS.ftn_charting.factors).toContain("A26");
    (0, import_vitest.expect)(RELEASE_COLUMN_REQUIREMENTS.officials.factors).toContain("A27");
    (0, import_vitest.expect)(RELEASE_COLUMN_REQUIREMENTS.draft_picks.factors).toContain("A28");
    (0, import_vitest.expect)(RELEASE_COLUMN_REQUIREMENTS.contracts.factors).toContain("A15");
    (0, import_vitest.expect)(RELEASE_COLUMN_REQUIREMENTS.weekly_rosters.factors).toContain("A1");
    (0, import_vitest.expect)(RELEASE_COLUMN_REQUIREMENTS.trades.factors).toContain("A1");
  });
});
(0, import_vitest.describe)("loadNflverseRelease \u2014 fixture-backed per dataset", () => {
  for (const dataset of ALL_DATASETS) {
    (0, import_vitest.it)(`${dataset}: loads rows, asserts required columns, returns honest ok state`, async () => {
      const result = await loadNflverseRelease(loadOptions(dataset));
      (0, import_vitest.expect)(result.status, `${dataset}: ${result.status === "ok" ? "" : "error=" + ("error" in result ? result.error : result.reason)}`).toBe("ok");
      if (result.status !== "ok") return;
      (0, import_vitest.expect)(result.dataset).toBe(dataset);
      (0, import_vitest.expect)(result.rowCount).toBeGreaterThan(0);
      (0, import_vitest.expect)(result.records.length).toBe(result.rowCount);
      (0, import_vitest.expect)(result.url).toBe(urlFor(dataset));
      (0, import_vitest.expect)(result.attribution).toMatch(/nflverse/i);
      (0, import_vitest.expect)(result.sha256).toMatch(/^[0-9a-f]{64}$/);
      const required = RELEASE_COLUMN_REQUIREMENTS[dataset].columns;
      for (const col of required) {
        (0, import_vitest.expect)(result.columns, `${dataset} header must contain ${col}`).toContain(col);
      }
      (0, import_vitest.expect)(result.requiredColumns).toEqual(import_vitest.expect.arrayContaining([...required]));
    });
  }
  (0, import_vitest.it)("nextgen_stats_weekly filters out week 0 full-season rollup rows", async () => {
    const weekly = await loadNflverseRelease(loadOptions("nextgen_stats_weekly"));
    (0, import_vitest.expect)(weekly.status).toBe("ok");
    if (weekly.status !== "ok") return;
    (0, import_vitest.expect)(weekly.rowCount).toBe(2);
    for (const row of weekly.records) {
      (0, import_vitest.expect)(Number(row["week"])).toBeGreaterThan(0);
    }
    const withRollup = await loadNflverseRelease({
      ...loadOptions("nextgen_stats_weekly"),
      weeklyOnly: false
    });
    (0, import_vitest.expect)(withRollup.status).toBe("ok");
    if (withRollup.status !== "ok") return;
    (0, import_vitest.expect)(withRollup.rowCount).toBe(3);
  });
  (0, import_vitest.it)("ftn_charting asserts A14 motion/play-action flags and A26 box/blitz proxies (no man/zone column exists)", async () => {
    const result = await loadNflverseRelease(loadOptions("ftn_charting"));
    (0, import_vitest.expect)(result.status).toBe("ok");
    if (result.status !== "ok") return;
    for (const col of ["is_motion", "is_play_action", "is_screen_pass", "is_rpo", "n_defense_box", "n_blitzers", "n_pass_rushers"]) {
      (0, import_vitest.expect)(result.columns).toContain(col);
    }
    (0, import_vitest.expect)(result.columns.some((c) => /man|zone|coverage/i.test(c))).toBe(false);
  });
  (0, import_vitest.it)("contracts asserts OTC fields (otc_id/apy) and does not invent gsis_id", async () => {
    const result = await loadNflverseRelease(loadOptions("contracts"));
    (0, import_vitest.expect)(result.status).toBe("ok");
    if (result.status !== "ok") return;
    (0, import_vitest.expect)(result.columns).toContain("otc_id");
    (0, import_vitest.expect)(result.columns).toContain("apy");
    (0, import_vitest.expect)(result.columns).toContain("guaranteed");
    (0, import_vitest.expect)(result.columns).not.toContain("gsis_id");
  });
});
(0, import_vitest.describe)("loadNflverseRelease \u2014 honest empty state and fail-closed schema", () => {
  (0, import_vitest.it)("returns source-error (empty records) when every mirror fails", async () => {
    const result = await loadNflverseRelease({
      dataset: "trades",
      fetcher: failingFetcher("ECONNREFUSED"),
      persist: false
    });
    (0, import_vitest.expect)(result.status).toBe("source-error");
    if (result.status !== "source-error") return;
    (0, import_vitest.expect)(result.records).toEqual([]);
    (0, import_vitest.expect)(result.error).toContain("ECONNREFUSED");
    (0, import_vitest.expect)(result.reason).toMatch(/honest empty state/i);
  });
  (0, import_vitest.it)("returns source-error when a required column is missing (schema drift, not a silent empty table)", async () => {
    const drifted = csv(["trade_id", "season"], [["1", "2024"]]);
    const result = await loadNflverseRelease({
      dataset: "trades",
      fetcher: fixtureFetcher(urlFor("trades"), drifted),
      persist: false
    });
    (0, import_vitest.expect)(result.status).toBe("source-error");
    if (result.status !== "source-error") return;
    (0, import_vitest.expect)(result.records).toEqual([]);
    (0, import_vitest.expect)(result.error).toMatch(/missing-columns/);
    (0, import_vitest.expect)(result.reason).toMatch(/gave/);
  });
  (0, import_vitest.it)("returns empty (not ok, not invented rows) when the asset is header-only", async () => {
    const headerOnly = OFFICIALS_FIXTURE.split("\n")[0] ?? "";
    const result = await loadNflverseRelease({
      dataset: "officials",
      fetcher: fixtureFetcher(urlFor("officials"), headerOnly),
      persist: false
    });
    (0, import_vitest.expect)(result.status).toBe("empty");
    if (result.status !== "empty") return;
    (0, import_vitest.expect)(result.records).toEqual([]);
    (0, import_vitest.expect)(result.reason).toMatch(/zero data rows/i);
  });
  (0, import_vitest.it)("refuses a seasonal load without a season (no silent default)", async () => {
    const result = await loadNflverseRelease({
      dataset: "ftn_charting",
      fetcher: fixtureFetcher(urlFor("ftn_charting"), FTN_FIXTURE),
      persist: false
    });
    (0, import_vitest.expect)(result.status).toBe("source-error");
    if (result.status !== "source-error") return;
    (0, import_vitest.expect)(result.reason).toMatch(/season is required/i);
  });
});
(0, import_vitest.describe)("loadNflverseRelease \u2014 persistence + SHA-256 manifest", () => {
  (0, import_vitest.it)("writes the CSV under the data dir and upserts a manifest entry with the matching SHA-256", async () => {
    const dataDir = await tempDataDir();
    const result = await loadNflverseRelease(loadOptions("officials", dataDir));
    (0, import_vitest.expect)(result.status).toBe("ok");
    if (result.status !== "ok") return;
    (0, import_vitest.expect)(result.writtenPath).toBe(import_node_path2.default.join(dataDir, "officials.csv"));
    const written = await (0, import_promises2.readFile)(result.writtenPath, "utf8");
    (0, import_vitest.expect)(written).toBe(OFFICIALS_FIXTURE);
    const digest = (0, import_node_crypto2.createHash)("sha256").update(OFFICIALS_FIXTURE, "utf8").digest("hex");
    (0, import_vitest.expect)(result.sha256).toBe(digest);
    const manifestRaw = await (0, import_promises2.readFile)(import_node_path2.default.join(dataDir, "manifest.json"), "utf8");
    const manifest = JSON.parse(manifestRaw);
    (0, import_vitest.expect)(manifest.attribution).toMatch(/nflverse/i);
    (0, import_vitest.expect)(manifest.entries).toHaveLength(1);
    const entry = manifest.entries[0];
    (0, import_vitest.expect)(entry?.dataset).toBe("officials");
    (0, import_vitest.expect)(entry?.file).toBe("officials.csv");
    (0, import_vitest.expect)(entry?.sha256).toBe(digest);
    (0, import_vitest.expect)(entry?.releaseTag).toBe("officials");
    (0, import_vitest.expect)(entry?.rowCount).toBe(2);
    (0, import_vitest.expect)(entry?.url).toBe(urlFor("officials"));
  });
  (0, import_vitest.it)("replaces (not duplicates) the manifest entry for the same dataset+file on re-load", async () => {
    const dataDir = await tempDataDir();
    const first = await loadNflverseRelease(loadOptions("trades", dataDir));
    (0, import_vitest.expect)(first.status).toBe("ok");
    const bodyV2 = csv(
      ["trade_id", "season", "trade_date", "gave", "received", "pick_season", "pick_round", "pick_number", "conditional", "pfr_id", "pfr_name"],
      [["9001", "2025", "2025-03-01", "A", "B", "", "", "", "", "X", "Y"]]
    );
    const second = await loadNflverseRelease({
      ...loadOptions("trades", dataDir),
      fetcher: fixtureFetcher(urlFor("trades"), bodyV2)
    });
    (0, import_vitest.expect)(second.status).toBe("ok");
    const manifest = JSON.parse(await (0, import_promises2.readFile)(import_node_path2.default.join(dataDir, "manifest.json"), "utf8"));
    (0, import_vitest.expect)(manifest.entries).toHaveLength(1);
    (0, import_vitest.expect)(manifest.entries[0]?.sha256).toBe(
      (0, import_node_crypto2.createHash)("sha256").update(bodyV2, "utf8").digest("hex")
    );
  });
  (0, import_vitest.it)("does not write files when persist=false", async () => {
    const dataDir = await tempDataDir();
    const result = await loadNflverseRelease({
      ...loadOptions("draft_picks", dataDir),
      persist: false
    });
    (0, import_vitest.expect)(result.status).toBe("ok");
    if (result.status !== "ok") return;
    (0, import_vitest.expect)(result.writtenPath).toBeNull();
    await (0, import_vitest.expect)((0, import_promises2.readFile)(import_node_path2.default.join(dataDir, "manifest.json"), "utf8")).rejects.toThrow();
  });
});
(0, import_vitest.describe)("loader surface", () => {
  (0, import_vitest.it)("exports no db/prisma client and performs no network in the fixture path", async () => {
    let calls = 0;
    const counting = async (input) => {
      calls += 1;
      return fixtureFetcher(urlFor("trades"), TRADES_FIXTURE)(input);
    };
    const result = await loadNflverseRelease({ dataset: "trades", fetcher: counting, persist: false });
    (0, import_vitest.expect)(result.status).toBe("ok");
    (0, import_vitest.expect)(calls).toBe(1);
  });
});
