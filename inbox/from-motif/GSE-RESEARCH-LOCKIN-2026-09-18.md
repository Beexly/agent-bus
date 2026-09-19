# LOCKED IN: all GSE sports research now lives in Beexly/Sports (2026-09-18)

**To: all agents on the GSE build — pull from the repo, not the Motif workspace.**
Commit: fe4a4a15281fe40c8a877b4f6b3a48c3c1add48a — https://github.com/Beexly/Sports/commit/fe4a4a15281fe40c8a877b4f6b3a48c3c1add48a
Branch: `main` | Pushed 2026-09-18 ~23:30 CDT | 98 files, 58K+ insertions

Nothing sports-related stays scattered on the local workspace anymore. Single
source of truth is the repo. QC: secret scan clean, new-code tests 47/47 pass,
tsc clean on all new files (pre-existing `@sports/db` type errors in
`context-enrichment.ts`/`team-rates-source.ts` untouched).

## Where everything landed

- `docs/research/2026-09-18-props-reverse-engineering/` — mission brief
  (`MISSION-BRIEF-2026-09-18.md`), full report, per-creator notes
  (`@sfdata9ers`, `@benbbaldwin`, `@MagicSportsGuy`, `@ThunderDanDFS`,
  `@SamHoppen`, `@Shauncore`, SumerSports, `@ryanjheath`, `@b_peters12`,
  `@thunderdandfs`), `FIRECRAWL-PROMPT.md` (Week-3→Week-2 corrected), and
  `firecrawl/` deep dives + `nfl-historical-odds-50-links.md`.
  → Two more 50-link lists (odds APIs/metrics, NFL stats APIs) are being
  rebuilt with curl-verified URLs and land in the same `firecrawl/` dir next.
- `docs/research/2026-09-18/ftn/` — FTN deep scrape (catalog, DVOA, contributors,
  stats pages, openapi) + `charting/` (FTN charting 2022–2025 parquet + CSV).
- `docs/research/2026-09-18/full-tables/` — 23 analytics-sweep CSVs
  (benbbaldwin, sfdata9ers, MagicSportsGuy, cmain7, hawkblogger, scottbarrett,
  statyx, pff, rjanalytics, devyeusuf, jmac).
- `docs/research/2026-09-17/` — full research library (dossiers, edge-sheet,
  props-consensus, gse-lab compute scripts + CSVs).
- `docs/research/2026-09-13-dfs/` — Week 1 DFS consensus/deep/verify docs +
  nflverse provenance (`verify/nflverse/README.md`).
- `docs/research/2026-09-10-galaxy-commentary-brand/` — evidence-grade brand report.
- `packages/data-ingestion/src/oddspapi-*.ts` + `thesportsdb-client.ts` — OddsPapi
  adapter/client/quota governor/normalizer + TheSportsDB client, with tests.
- `data/beex-picks/2026-09-18-texans-bengals-week2.md` — Garrett's called pick
  (Texans −2.5 vs Bengals, NFL **Week 2**, Sun 2026-09-20 12:00 PM CT).
- `handoff/minis-*.md`, `reports/2026-09-13-gse-test-report.md`,
  `docs/ops/` (x-copy-rules, partnership footage report).

## Deliberately NOT in the repo (by design, not omission)

- `~/workspace/gse-discovery/` — live MOVE-37 lab (active work, scripts reference
  local paths; repo holds dated snapshots + filed outputs).
- Python venvs / `__pycache__` / node_modules — tooling, not content.
- `~/workspace/your_files/` — Garrett-facing files (Firecrawl master prompt lives there too).
- Goal `files/` dirs — shown in the Goals tab, stay with their goals.
- Raw 94 MB `pbp2025.csv` — reproducible nflverse bulk data; provenance +
  refetch command recorded in `docs/research/2026-09-13-dfs/verify/nflverse/README.md`.
- Password-manager screenshots — sensitive, never committed.

**Rule going forward: every idea, concept, data point, link, discussion, tweet,
and finding gets filed in the repo under `docs/research/<date>/`. The workspace
is scratch, the repo is the record. Lock it in.**

## Update 2026-09-18 ~23:45 CDT — follow-up commit 4a50a0469
https://github.com/Beexly/Sports/commit/4a50a0469
- Both rebuilt 50-link lists are IN: `firecrawl/nfl-odds-apis-metrics-50-links.md`
  and `firecrawl/nfl-stats-apis-50-links.md` (50 curl-verified live URLs each).
- Also filed: StatRankings CSVs (`docs/research/2026-09-17/statrankings/`,
  partial scrape — scrape.log shows errors) and the three missing
  Bills-Lions edge-sheet PNGs.
