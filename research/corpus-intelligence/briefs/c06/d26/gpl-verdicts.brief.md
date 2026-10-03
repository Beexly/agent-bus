# research/2026-09-28/orchestration/gpl-verdicts.md
## What it is (1-2 sentences)
Engineering (not legal) license verdicts for six named NFL-sweep research items, each verified by reading the actual LICENSE file via the GitHub API: dynastyprocess/data (GPL-3.0), nflverse/nflverse-pfr (GPL-3.0), sumedhk0/PanopticPigskin (AGPL-3.0), nflverse/nflverse-pbp (CC-BY-4.0), nflverse/nflverse-data (CC-BY-4.0), mkreiser/ESPN-Fantasy-Football-API (LGPL-3.0-only) — with "safely usable today" lanes, clean-room rules, and attribution format.

## Key metrics/methods (formulas where given, else "not specified")
- Legal grounding used (engineering verdicts, not legal advice): facts/data points are not copyrightable expression (Feist v. Rural, 1991) — GPL on a dataset binds the compilation/expression, not extracted facts. GPL/AGPL on code: incorporating, forking, or (AGPL) network-serving creates obligations — GPL requires open-sourcing distributed derivatives; AGPL §13 extends to network use. CC-BY-4.0 is not copyleft: permits adaptation into proprietary works with attribution, no source-sharing. LGPL-3.0 expressly permits unmodified library use via dynamic linkage without copylefting the host.
- PanopticPigskin CV method (method-only, AGPL): (a) calibrate panning/tilting/zooming broadcast cameras from field paint (yard lines, hash marks, numerals); (b) known player height fixes paint-alone lens scale ambiguity; (c) per-frame solve + refinement pass; (d) cross-check solve against the play's line of scrimmage; (e) endzone camera on its own paint; pipeline = YOLOv8 detection + tracking joined across two views, jersey-number identity, SMPL-X body fitting, Gaussian-splat rendering, interactive browser "Film Room" viewer, per-player reports.
- Clean-room rules: never copy files in; no line-by-line R→TS/Py→TS translation (mechanical translation is still derivative); read for method, close repo, write independent design doc, implement from doc; provenance header comments on every ingestion module; CC-BY-4.0 attribution mandatory.
- Attribution format: `NFL play-by-play, player stats, rosters, schedules, snap counts, and advanced stats via nflverse (https://github.com/nflverse/nflverse-data), © nflverse contributors, licensed under CC-BY-4.0 (https://creativecommons.org/licenses/by/4.0/).` in-repo `docs/ATTRIBUTIONS.md`, per-dataset ingestion docs ("Source: nflverse-data release <tag>, CC-BY-4.0"), and "Data: nflverse (CC-BY-4.0)" credit on public surfaces.

## Data sources named
- dynastyprocess/data (GPL-3.0): `files/` = db_playerids.csv, db_fpecr.csv.gz/.parquet (FantasyPros ECR), values.csv / values-players.csv / values-picks.csv (dynasty trade values), fp_latest_weekly.csv, archives/; weekly GH Actions refresh; no application code.
- nflverse/nflverse-pfr (GPL-3.0): R package pfr_scrapR — R/ scrapers (pfr_advanced_stats.R, game_snaps.R, game_advstats.R, game_urls.R, utils.R) + auto/, build/, exec/ workflows; data itself moved to nflverse-data releases.
- nflverse/nflverse-data (CC-BY-4.0): data hub — play-by-play, player stats, rosters, schedules, snap counts, PFR advanced stats as versioned GitHub Releases (parquet/CSV/RDS).
- nflverse/nflverse-pbp (CC-BY-4.0): whole repo under one stock license, no per-file carve-outs (verified).
- mkreiser/ESPN-Fantasy-Football-API (LGPL-3.0-only): JS npm package espn-fantasy-football-api@2.0.1, API client for ESPN fantasy football API v3 (supports private leagues in Node). Correction in file: it is JS, not Python.
- sumedhk0/PanopticPigskin (AGPL-3.0): nfl_gsplat/ library, scripts/ numbered pipeline stages, tools/, eval/, viewer/, tests/.

## Findings (numbers and facts, not vibes)
- dynastyprocess/data — DATA verdict: safely read ECR ranks, ADP, projections, player-ID mappings, dynasty values out of CSVs/parquet into GSE's own tables; do NOT commit the files into the repo or closed product, do NOT redistribute verbatim, do NOT copy the .github/workflows generation code. Caveat: FantasyPros ECR is scraped; FantasyPros' own ToS governs commercial use of their rankings separately from the repo's GPL; if ECR becomes load-bearing on a revenue surface, verify FantasyPros ToS.
- nflverse-pfr — CODE verdict: study-only for R scrapers; get the DATA from nflverse-data releases (CC-BY-4.0) via nflreadr, nfl-data-py, or direct release URLs; do NOT fork, do NOT copy .R files, do NOT mechanically translate R→TS.
- PanopticPigskin — strongest copyleft in the set: nothing usable from the code, and do NOT run it server-side to generate outputs for users (AGPL §13 treats network interaction as conveyance). The techniques and demo play's per-player report structure are method-only.
- nflverse-pbp — CC-BY-4.0 not copyleft: data + adaptation of R scraper logic permitted into proprietary code with attribution as the only price; coding agent should still prefer independent implementation for the TS stack.
- nflverse-data — preferred clean lane for all nflverse data; download and ingest any release artifact with attribution.
- ESPN-Fantasy-Football-API — library-safe: npm install as unmodified dependency (LGPL-3.0 designed for dynamic linkage); do NOT fork-and-vendor a modified copy; product question open: whether it's needed at all if existing intakes cover ESPN data.
- Open follow-ups logged: (1) re-run "other GPL/AGPL items" check once full sweep keeper index is on the remote; (2) FantasyPros ToS review if ECR becomes revenue-load-bearing; (3) whether espn-fantasy-football-api fills a gap; (4) these are engineering verdicts not legal advice — one-hour IP-attorney review recommended if any item becomes load-bearing for a commercial product.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] License-verdict system for NFL sweep research (DATA vs CODE vs LIBRARY-SAFE lanes) — legal/intel property posture, not engine signal.
- [OTHER] nflverse-data as the sanctioned clean data lane (CC-BY-4.0) for play-by-play, player stats, rosters, schedules, snap counts, PFR advanced stats — this IS the sanctioned data foundation for the engine; attribution mandatory.
- [OTHER] dynastyprocess DynastyProcess ECR/ADP/dynasty-values extraction — fantasy consensus data lane; FantasyPros ToS caveat is the trust blocker.
- [OTHER] PanopticPigskin broadcast camera-calibration method (field paint + known player height resolving lens ambiguity; per-frame solve + LoS cross-check; YOLOv8 two-view tracking; SMPL-X + Gaussian-splat) — computer-vision method intel for film-room features; method-only under AGPL.
- [OTHER] FantasyPros ECR scraping pipeline design (weekly refresh cadence, ID-mapping approach) — method-level input for GSE's own scraper design.
- [OTHER] Clean-room protocol (design doc first, implement from doc, provenance headers) — engineering process rule for all future teardowns.

## Engine-actionable? (yes/no + one-line what)
Yes — route all nflverse data ingestion through the nflverse-data release lane with the documented attribution, and adopt the clean-room rules as the binding protocol for every future code/method teardown before implementation begins.
