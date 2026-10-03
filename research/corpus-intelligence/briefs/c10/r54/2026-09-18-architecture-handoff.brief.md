# docs/ops/handoff/2026-09-18-architecture-handoff.md
## What it is (1-2 sentences)
Handoff from a Fable architect session to the next Opus session documenting the state of the 2026-09-18 signal-architecture rebuild (PR Beexly/Sports#863, branch `claude/pensive-babbage-c7xfdy`), the founder's rejection of the first architecture document (honesty gate at build boundary instead of publish boundary, serial sequencing), and 16 verified-expensive-to-rediscover facts about unwired engine components and live bugs.
## Key metrics/methods (formulas where given, else "not specified")
- Three governing corrections: (1) certification gate constrains only what number reaches a customer — build carries more signal than it displays; (2) build runs full width, concurrently; (3) capture starts everywhere immediately because an as-of signal accrues sample in wall-clock time — deferral destroys unrecoverable future sample.
- Learning-loop components exist but none wired: `edge-lab/walk-forward.ts` (purge, embargo, sealed holdout, reachable only from scripts); `trials-registry.ts` (hash chain, Benjamini-Hochberg) never run; `placebo.ts`, `logit-pool.ts`, `logistic.ts`, `calibration-blend.ts` never run; `evidence-readiness-matrix.ts` (13 factor keys with trust/sample/age floors at :18-31 and :82-252) called by nothing; feature store holds zero registered features; conviction gate zero importers; `gate_decisions` no writer; `Signal` table no writer and no reader.
- `logistic.ts:59-101` penalizes every coefficient toward zero with unpenalized intercept, so a naive head shrinks to base rate not market — market logit must enter as fixed offset.
- `walk-forward.ts:80-137` has no group key; cuts folds by row index (fixture grouping proposed, not existing).
- `cqr.ts:12-15` clamps finite-sample rank into range instead of refusing: at n=5, alpha 0.1 it claims 90% coverage and delivers 83.33%.
## Data sources named
`compute_advanced_metrics.py` (2026-09-17 gse-lab research); `odds_line_snapshots` book column (schema.prisma:467); `backfill-independent-trueprob.ts` inside the six-hourly calibration cron; `nflverse-season.ts` (season floor logic); `clv-capture.ts` odds batches without book identifier.
## Findings (numbers and facts, not vibes)
- `backfill-independent-trueprob.ts:96-101, 172-183, 235-257` rewrites `factorBreakdown.independentEdge.trueProb` inside the six-hourly calibration cron using inputs that are NOT as-of — "any model fitted on that column is fitting on the answer." Called the single most important finding of the session; in none of three candidate designs.
- `clv-capture.ts:90-144` reads odds batches with no book identifier while `odds_line_snapshots` carries `book` — book-mix drift is currently scored as market movement, which is why the 23% beat-close cannot be attributed to model or ruler.
- `compute_advanced_metrics.py:41-50` double-inverts lower-is-better metrics: rank taken descending then inverted again, so worst team reads 100 — every percentile claim from those files is suspect.
- `in-play-exclusion.ts:60-66` keeps a row when either clock is null — a leakage hole.
- `pick-card.tsx:191-207` renders market-implied probability to every tier; standing note about `canSeeConfidence` gating is stale; real gap is spread/total coverage enforced server-side.
- `schema.prisma:675` defaults `GateDecision.isBootstrap` to true and readers filter on it — writers omitting it produce rows the lane never shows.
- 22 files under `apps/web` partially mock `@sports/prediction-engine` (standing notes say 19; count drifts).
- `nfl-team-form.ts` recorded prior kill: schedule-derived reference features carry no information beyond closing price, probe p=0.060, verdict FIRE_NOTHING — do not re-promote schedule features without a pre-registration naming that kill.
- CI red is founder-only: ledger row M-1 carries owner `motif` outside allowed set; present on main; no agent may fix (ledger rule 2).
- Founder directive (standing): build wide, gate only the published number; never narrower plan when wider is executable.
- Open founder decisions: re-own/cancel M-1; read-only production probe (no agent may touch DB); per-pick feature vectors / head registry / CLV grades proposal SQL under `docs/ops/proposals/`; retention rule for `gate_decisions`; research-branch merge scope (code only, ~9.6 MB of documents/logs stay out).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Capture-everything-immediately (as-of sample accrues in wall-clock time; deferral destroys future sample) — OTHER (data-capture doctrine)
- Learning loop never closed (data lands → train → eval → deploy → more data) — OTHER (ML ops)
- trueProb column contaminated with look-ahead (fits on the answer) — TRUST-SIGNAL
- Market logit as fixed offset to prevent shrinkage to base rate — OTHER (modeling)
- CLV book-mix drift misattributed as market movement — TRUST-SIGNAL
- Coverage calibration failure at n=5 (90% claimed, 83.33% delivered) — TRUST-SIGNAL
- In-play leakage hole (null clocks kept) — TRUST-SIGNAL
- Percentile double-inversion bug (worst reads 100) — TRUST-SIGNAL
- Schedule-derived features killed by probe (p=0.060, FIRE_NOTHING) — SCHEME
- Build-wide / gate-only-publish doctrine — OTHER (architecture)
## Engine-actionable? (yes/no + one-line what)
Yes — confirms which engine components are built-but-unwired (walk-forward, BH trials registry, feature store, conviction gate) and names live trust bugs (look-ahead in trueProb backfill, book-mix drift in CLV, in-play leakage, percentile inversion) to fix before any calibration claim.
