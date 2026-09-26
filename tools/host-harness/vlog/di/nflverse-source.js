"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var nflverse_source_exports = {};
__export(nflverse_source_exports, {
  NFLVERSE_BASE: () => NFLVERSE_BASE,
  NFLVERSE_CATALOG: () => NFLVERSE_CATALOG,
  decodeDatasetText: () => decodeDatasetText,
  fetchNflverse: () => fetchNflverse,
  fetchNflverseText: () => fetchNflverseText,
  mergePlayerStatsWeekCurrency: () => mergePlayerStatsWeekCurrency,
  nflverseUrl: () => nflverseUrl,
  parseCsv: () => parseCsv
});
module.exports = __toCommonJS(nflverse_source_exports);
var import_node_zlib = require("node:zlib");
var import_no_store_fetch = require("./no-store-fetch.js");
const NFLVERSE_BASE = "https://github.com/nflverse/nflverse-data/releases/download";
function ds(d) {
  return d;
}
const NFLVERSE_CATALOG = {
  pbp: ds({
    key: "pbp",
    tag: "pbp",
    grain: "play",
    since: 1999,
    seasonal: true,
    description: "Play-by-play with EPA, WPA, air yards, success rate, win prob.",
    unlocks: "Per-play efficiency \u2014 the foundation for team/player true-talent models.",
    file: (s) => `play_by_play_${s}.csv`
  }),
  pbp_participation: ds({
    key: "pbp_participation",
    tag: "pbp_participation",
    grain: "play",
    since: 2016,
    seasonal: true,
    description: "Personnel & participation per play: who was on the field, defenders in box.",
    unlocks: "Scheme/personnel context \u2014 formation tendencies, box counts, coverage proxies.",
    file: (s) => `pbp_participation_${s}.csv`
  }),
  player_stats_week: ds({
    key: "player_stats_week",
    tag: "player_stats",
    grain: "player-week",
    since: 1999,
    seasonal: false,
    description: "Merged weekly offensive player stats: targets, receptions, air yards, EPA, attempts.",
    unlocks: "Usage & target share by player-week \u2014 the QB-age/RB-target-share class of trend.",
    file: () => "player_stats.csv.gz"
  }),
  snap_counts: ds({
    key: "snap_counts",
    tag: "snap_counts",
    grain: "player-week",
    since: 2012,
    seasonal: true,
    description: "Offense/defense/ST snap counts and snap share per player-game.",
    unlocks: "True workload (snap share) \u2014 the cleanest usage signal there is.",
    file: (s) => `snap_counts_${s}.csv`
  }),
  ngs: ds({
    key: "ngs",
    tag: "nextgen_stats",
    grain: "player-week",
    since: 2016,
    seasonal: false,
    description: "Next Gen Stats (variant: passing | receiving | rushing): separation, cushion, time-to-throw, air yards, speed.",
    unlocks: "Tracking-derived talent signals not in any box score (e.g. receiver separation).",
    // Combined all-seasons asset. The per-season `ngs_<season>_<variant>.csv.gz` 404s for the current
    // season (verified live 2026-06: ngs_2025_* missing), but the combined `ngs_<variant>.csv.gz`
    // includes it (2016->2025). Consumers filter by season via resolveActiveSeason, so this keeps NGS
    // current without per-season 404s.
    file: (_s, v = "receiving") => `ngs_${v}.csv.gz`
  }),
  pfr_advstats: ds({
    key: "pfr_advstats",
    tag: "pfr_advstats",
    grain: "player-week",
    since: 2018,
    seasonal: true,
    description: "PFR advanced (variant: pass | rush | rec | def): pressures, YAC, broken tackles, ADOT.",
    unlocks: "Charting-grade efficiency \u2014 pressure, separation-of-effort, missed-tackle rates.",
    file: (s, v = "rec") => `advstats_week_${v}_${s}.csv`
  }),
  ftn_charting: ds({
    key: "ftn_charting",
    tag: "ftn_charting",
    grain: "play",
    since: 2022,
    seasonal: true,
    description: "FTN manual charting: play action, RPO, screen, motion, defenders in box.",
    unlocks: "Play-design context the public market rarely prices.",
    file: (s) => `ftn_charting_${s}.csv`
  }),
  depth_charts: ds({
    key: "depth_charts",
    tag: "depth_charts",
    grain: "player-week",
    since: 2001,
    seasonal: true,
    description: "Weekly depth-chart position per player.",
    unlocks: "Role/starter status \u2014 context for usage and injury cascades.",
    file: (s) => `depth_charts_${s}.csv`
  }),
  injuries: ds({
    key: "injuries",
    tag: "injuries",
    grain: "player-week",
    since: 2009,
    seasonal: true,
    description: "Official weekly injury reports (status, designation, body part).",
    unlocks: "Availability signal \u2014 the highest-value non-market factor for game outcomes.",
    file: (s) => `injuries_${s}.csv`
  }),
  rosters: ds({
    key: "rosters",
    tag: "rosters",
    grain: "player",
    since: 1920,
    seasonal: true,
    description: "Season rosters: name, position, team, birth_date, gsis_id, draft, college.",
    unlocks: "Player master + age \u2014 the join key (gsis_id) for every other dataset.",
    file: (s) => `roster_${s}.csv`
  }),
  espn_qbr_week: ds({
    key: "espn_qbr_week",
    tag: "espn_data",
    grain: "player-week",
    since: 2006,
    seasonal: false,
    description: "ESPN Total QBR, weekly level.",
    unlocks: "A second, independent QB quality estimate to triangulate against.",
    file: () => `qbr_week_level.csv`
  }),
  players: ds({
    key: "players",
    tag: "players",
    grain: "player",
    since: 0,
    seasonal: false,
    description: "All-time player master table.",
    unlocks: "Stable cross-season player identity + bio.",
    file: () => `players.csv`
  }),
  schedules: ds({
    key: "schedules",
    tag: "schedules",
    grain: "game",
    since: 1999,
    seasonal: false,
    description: "Game schedule + results, rest, roof, surface, spread/total (Lee Sharpe's nfldata).",
    unlocks: "Authoritative game master with rest/venue context for joins.",
    file: () => `games.csv`
  }),
  draft_picks: ds({
    key: "draft_picks",
    tag: "draft_picks",
    grain: "player",
    since: 0,
    seasonal: false,
    description: "All draft picks (round, pick, team, player).",
    unlocks: "Draft capital \u2014 a prior on talent/role for younger players.",
    file: () => `draft_picks.csv`
  }),
  combine: ds({
    key: "combine",
    tag: "combine",
    grain: "player",
    since: 0,
    seasonal: false,
    description: "Combine results (40, vert, etc.).",
    unlocks: "Athletic testing priors.",
    file: () => `combine.csv`
  }),
  // ── Coverage-completeness additions (verified live against nflverse-data,
  //    all standard CC-BY-4.0 — NOT the FTN/participation CC-BY-SA exception).
  //    Schemas confirmed from the live release headers on 2026-06-15.
  officials: ds({
    key: "officials",
    tag: "officials",
    grain: "game",
    since: 2015,
    seasonal: false,
    description: "Officiating crew per game (referee/umpire/etc.) keyed by game_id.",
    unlocks: "Referee-crew tendencies \u2014 penalty/total/pace lean the market rarely prices.",
    file: () => `officials.csv`
  }),
  trades: ds({
    key: "trades",
    tag: "trades",
    grain: "snapshot",
    since: 2002,
    seasonal: false,
    description: "Recorded trades: players/picks gave & received, with trade dates.",
    unlocks: "Roster-movement events \u2014 mid-season role shifts and draft-capital flow.",
    file: () => `trades.csv`
  }),
  contracts: ds({
    key: "contracts",
    tag: "contracts",
    grain: "player",
    since: 0,
    seasonal: false,
    description: "OverTheCap historical player contracts: value, APY, guarantees, years.",
    unlocks: "Contract-year / holdout / cap context \u2014 a soft motivation+availability signal.",
    file: () => `historical_contracts.csv.gz`
  }),
  weekly_rosters: ds({
    key: "weekly_rosters",
    tag: "weekly_rosters",
    grain: "player-week",
    since: 2002,
    seasonal: true,
    description: "Weekly roster status per player (active/inactive/IR) with gsis_id + bio.",
    unlocks: "Weekly availability + in-season team/role changes \u2014 who actually dressed.",
    file: (s) => `roster_weekly_${s}.csv`
  }),
  stats_team_week: ds({
    key: "stats_team_week",
    tag: "stats_team",
    grain: "team-week",
    since: 1999,
    seasonal: true,
    description: "Team-week aggregated stats: pass/rush yards, EPA, CPOE, first downs, TDs.",
    unlocks: "Team efficiency aggregates (EPA/CPOE) without re-deriving from play-by-play.",
    file: (s) => `stats_team_week_${s}.csv`
  })
};
function nflverseUrl(key, season, variant) {
  const d = NFLVERSE_CATALOG[key];
  return `${NFLVERSE_BASE}/${d.tag}/${d.file(season, variant)}`;
}
function parseCsv(text, options = {}) {
  if (options.columns !== void 0) return parseCsvProjected(text, options.columns);
  const rows = [];
  let field = "";
  let row = [];
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else inQuotes = false;
      } else field += c;
    } else if (c === '"') inQuotes = true;
    else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n") {
      row.push(field);
      rows.push(row);
      field = "";
      row = [];
    } else if (c === "\r") {
    } else field += c;
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  const header = rows.shift() ?? [];
  const records = rows.filter((r) => r.length > 1 || r.length === 1 && r[0] !== "").map((r) => {
    const rec = {};
    for (let j = 0; j < header.length; j++) rec[header[j]] = r[j] ?? "";
    return rec;
  });
  return { header, records };
}
function parseCsvProjected(text, columns) {
  const header = [];
  let i = 0;
  {
    let field2 = "";
    let inQuotes2 = false;
    for (; i < text.length; i++) {
      const c = text[i];
      if (inQuotes2) {
        if (c === '"') {
          if (text[i + 1] === '"') {
            field2 += '"';
            i++;
          } else inQuotes2 = false;
        } else field2 += c;
      } else if (c === '"') inQuotes2 = true;
      else if (c === ",") {
        header.push(field2);
        field2 = "";
      } else if (c === "\n") {
        header.push(field2);
        i++;
        break;
      } else if (c === "\r") {
      } else field2 += c;
    }
    if (i >= text.length && (field2.length > 0 || header.length > 0)) header.push(field2);
  }
  const allowSet = new Set(columns);
  const keepKeyByIdx = /* @__PURE__ */ new Map();
  for (let j = 0; j < header.length; j++) {
    const key = header[j];
    if (allowSet.has(key)) keepKeyByIdx.set(j, key);
  }
  const records = [];
  let rec = {};
  let field = "";
  let col = 0;
  let cells = 0;
  let keepingField = keepKeyByIdx.has(0);
  let inQuotes = false;
  let rowHasContent = false;
  const endField = () => {
    if (keepingField) {
      const key = keepKeyByIdx.get(col);
      if (key !== void 0) rec[key] = field;
    }
    cells++;
    col++;
    field = "";
    keepingField = keepKeyByIdx.has(col);
  };
  const endRow = () => {
    endField();
    if (rowHasContent || cells > 1) records.push(rec);
    rec = {};
    col = 0;
    cells = 0;
    field = "";
    keepingField = keepKeyByIdx.has(0);
    rowHasContent = false;
  };
  for (; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          if (keepingField) field += '"';
          i++;
          rowHasContent = true;
        } else inQuotes = false;
      } else {
        if (keepingField) field += c;
        rowHasContent = true;
      }
    } else if (c === '"') {
      inQuotes = true;
      rowHasContent = true;
    } else if (c === ",") endField();
    else if (c === "\n") endRow();
    else if (c === "\r") {
    } else {
      if (keepingField) field += c;
      rowHasContent = true;
    }
  }
  if (field.length > 0 || col > 0 || rowHasContent) endRow();
  return { header, records };
}
async function decodeDatasetText(response) {
  const buf = Buffer.from(await response.arrayBuffer());
  const isGzip = buf.length > 1 && buf[0] === 31 && buf[1] === 139;
  return isGzip ? (0, import_node_zlib.gunzipSync)(buf).toString("utf8") : buf.toString("utf8");
}
async function fetchNflverseText(key, season, variant) {
  const url = nflverseUrl(key, season, variant);
  const res = await (0, import_no_store_fetch.noStoreFetch)(url);
  if (!res.ok) throw new Error(`nflverse fetch failed (${res.status}) for ${url}`);
  return decodeDatasetText(res);
}
const PLAYER_STATS_OFFENSE_POSITIONS = /* @__PURE__ */ new Set(["QB", "RB", "WR", "TE", "FB"]);
function maxSeasonIn(table) {
  let max = 0;
  for (const row of table.records) {
    const value = Number(row["season"]);
    if (Number.isFinite(value) && value > max) max = value;
  }
  return max;
}
function perSeasonPlayerStatsWeekUrl(season) {
  return `${NFLVERSE_BASE}/stats_player/stats_player_week_${season}.csv`;
}
async function fetchPerSeasonPlayerStatsWeekWith(season, fetchText, options) {
  const url = perSeasonPlayerStatsWeekUrl(season);
  try {
    const table = parseCsv(await fetchText(url), options);
    const records = table.records.filter((row) => {
      const position = (row["position"] ?? "").toUpperCase();
      const seasonType = (row["season_type"] ?? "REG").toUpperCase();
      return PLAYER_STATS_OFFENSE_POSITIONS.has(position) && (seasonType === "REG" || seasonType.startsWith("POST"));
    });
    return { header: table.header, records };
  } catch {
    return null;
  }
}
async function mergePlayerStatsWeekCurrency(table, season, fetchText, options = {}) {
  const covered = maxSeasonIn(table);
  if (!Number.isFinite(covered) || covered === 0) return table;
  if (season <= covered) return table;
  const records = [...table.records];
  for (let extraSeason = covered + 1; extraSeason <= season; extraSeason++) {
    const perSeason = await fetchPerSeasonPlayerStatsWeekWith(extraSeason, fetchText, options);
    if (perSeason && perSeason.records.length > 0) records.push(...perSeason.records);
  }
  return { header: table.header, records };
}
async function fetchNflverse(key, season, variant) {
  const table = parseCsv(await fetchNflverseText(key, season, variant));
  if (key !== "player_stats_week" || !Number.isFinite(season)) return table;
  return mergePlayerStatsWeekCurrency(table, season, async (url) => {
    const res = await (0, import_no_store_fetch.noStoreFetch)(url);
    if (!res.ok) throw new Error(`nflverse fetch failed (${res.status}) for ${url}`);
    return decodeDatasetText(res);
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  NFLVERSE_BASE,
  NFLVERSE_CATALOG,
  decodeDatasetText,
  fetchNflverse,
  fetchNflverseText,
  mergePlayerStatsWeekCurrency,
  nflverseUrl,
  parseCsv
});
