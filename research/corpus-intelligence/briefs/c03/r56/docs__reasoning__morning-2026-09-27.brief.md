# docs/reasoning/morning-2026-09-27.md
## What it is (1-2 sentences)
The 2026-09-27 overnight session report covering 10 unpushed commits on branch `overnight/2026-09-27-A`: measured the confidence market leak, extended nflverse ingest to 2018–2025, benchmarked the pregame bridge on a 2025 holdout, re-measured the officials scalarizer, and shipped append-only price-archive guards.

## Key metrics/methods (formulas where given, else "not specified")
- Pregame bridge holdout (2025, n=285 games): Brier 0.223743 vs always-base-rate 0.249848 vs always-0.5 0.250000; log loss 0.636548; ECE (10 bins) 0.051868; skill vs base rate +0.026190; 95% CI (paired bootstrap, 10k, seed 20260927) [+0.010734, +0.041393]; P(skill>0)=0.9997. Contract: 285 ≥ 250 sample, 0.0519 ≤ 0.06 ECE → eligible but NOT published (`probabilityClaimsAllowed` false; `f2=1` blocks LIVE as `pregame_context_logit` duplicates LIVE `historical_strength` family).
- Officials scalarizer re-measured: 2025 holdout (269 games, priors from 6,990 settled pre-2025 games, official home-win rate shrunk to era mean k=10, ≥20 prior games): n=269, r=+0.027366, slope=+0.208919, se=+0.467033; |r|≥0.08 fails → DARK (f1). Prior verdict (n=113, r=−0.092574) judged sampling noise; sign flipped on 2.4× holdout from 6× training games.
- nflverse 2018–2025: 26 datasets, 1,061,511 rows, 318.6 MB; participation 382,557 / rosters 404,653 / snap-counts 205,355 / fourth-down 33,002 / contracts 35,944. OOM fixed structurally: one season at a time under `--max-old-space-size=4096`, 38 s, exit 0.
- Participation identifier break: 7,952,525 slots — 3,019,631 GSIS-format, 4,932,894 not; per-season match rate 0.0000 for 2018–2022 (bare numeric ids like `44987`), 1.0000 for 2023–2025 (GSIS like `00-0032933`). Roster-dependent measurement may only use 2023–2025.
- Join rates: snaps→rosters 205,355 total, 135,808 matched (0.6613, capped by pfr_id roster coverage 44–75%); contracts→rosters 0.9776; participation→rosters 0.3797.
- Full prediction-engine suite: 6131 passed (6131) across 847 files; `tsc --noEmit` exit 0 first time. Price-archive: 14/14 tests. Dashboard self-guard: 9 forbidden phrasings caught, 9 legitimate calibration statements allowed.
- LAC edge recomputed: 0.30259224777263855, unchanged. Module ledger: 63 dirs — 57 catalogued, 4 blocked, 1 dark, 1 wired. Feature catalog: 11 rows (240 labels = wish list), wired 5, dark 3, catalogued 3; no market-quote table in data/gse-dataset (clv-harness output labeled synthetic).

## Data sources named
nflverse (pbp_participation 2016–2025, nfl4th_infrastructure 2014–2026, rosters, snap-counts, contracts, fourth-down), games.jsonl referee column (7,308 of 7,548 games 1999–2026), registry (8 locked parts), `data/reasoning/dark-candidates.jsonl`, `docs/reasoning/confidence-market-leak-2026-09-27.md`, `data/reasoning/ingestion-gates.jsonl` (368 exported ACCEPTANCE_GATE constants in packages/data-ingestion/src, slice 8 unevaluated).

## Findings (numbers and facts, not vibes)
- Pregame bridge has real holdout skill: +0.026190 Brier improvement vs base rate, 95% CI excludes zero, P(skill>0)=0.9997; eligible but not published (two independent gates, only one moved).
- `officials` scalarizer is DARK on a stronger measurement: n=269 holdout gives r=+0.0274, sign flipped vs prior −0.0926 → old signal was sampling noise.
- Participation↔roster joins are impossible for 2018–2022 (total identifier correlation: every joinable slot joined, every unjoinable failed); only 2023–2025 usable for roster-dependent work.
- Confidence market leak confirmed (see companion brief); calibration page confirmed dark; no push; no public numbers; nothing above unmeasured; tree clean.
- The original work order was stale (branch already merged 3 commits past expected SHA; `from-bridge.ts`/`reasonAbout` exist contrary to claim) — amended, not obeyed; parallel session never launched.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Officials home-win-rate scalarizer DARK (f1) on 269-game holdout — referee-crew prior has no measurable predictive signal. (OTHER)
- Fourth-down dataset (33,002 rows) ingested; fourth-down aggressiveness coaching prior measured elsewhere at walk-forward r=−0.014 (see reverse-engineering-intake brief) — does not move the tilt. (COACHING)
- `it.fails` guards + fail-closed performance gate: pattern for honest calibration hygiene. (TRUST-SIGNAL)
- No market-quote table exists in the dataset (only synthetic-labeled CLV harness) — real closing-line data is a stated gap. (OTHER)

## Engine-actionable? (yes/no + one-line what)
Yes — pregame bridge is eligible to ship (contract cleared) pending `f2` deduplication decision; officials stays DARK; roster joins restricted to 2023–2025.
