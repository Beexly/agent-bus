# docs/ops/edge/L12_GROUPING_LOSS.md
## What it is (1-2 sentences)
A go/no-go gate run (2026-09-18) attempting the C-21 grouping-loss estimator on the n=909 graded pick population to answer whether RES≈0 means the market is efficient vs. the pipeline is collapsing signal. The run was BLOCKED: the required model probability p̂ per pick does not exist anywhere in the artifacts, so nothing was computed and nothing was invented.

## Key metrics/methods (formulas where given, else "not specified")
- Grouping loss: `GL = E_S[ Var( P(Y=1|X) | score = s ) ]` — lower bound on recoverable resolution, estimated by clustering on features inside each calibrated-probability bin. Decision rule is the permutation null (shuffle outcomes within bin, recompute): `GL > c_0.95` ⇒ real structure (build); `GL ≤ c_0.95` ⇒ market already efficient w.r.t. current features (stop / find data).
- Estimator implemented in `docs/ops/edge/l12_grouping_loss.py`: equal-count score bins over {5, 10, 20}; k-means (hand-rolled, no sklearn) over logit-transformed + standardized feature space; two-term GL formula `GL_b = (1/N_b)·Σ_c n_c·(ȳ_c−ȳ_b)² − (1/N_b)·Σ_c (n_c/(n_c−1))·ȳ_c·(1−ȳ_c)`; singleton clusters dropped; 1,000-iteration within-bin permutation null → observed, mean, sd, 95th percentile, one-sided p-value; {5,10,20}×{3,5,8} sensitivity grid.
- C-21 correctness note (C-22 round 3 fix): GL must be computed against *features* used to cluster; without features it collapses to within-bin outcome variance ≈ p(1−p) ≈ 0.25, pure Bernoulli noise — the exact wrong formula an adversary shipped in v2.
- Context: ECE ≈ 0.0044 (well-calibrated) but resolution ≈ 0 on the graded population.

## Data sources named
- `docs/ops/ops/2026-08-18-clv-census.csv` — 1,161 rows, 22 columns; graded subset n=909 (rows with `clv_kind`/`clv_graded_at` populated); 785 of those carry `clv_verdict`.
- `docs/ops/calibration/2026-08-19-l9-clv-slices/` — aggregates only (market×month beat rates, 57/388 SPREAD counts, n=3 spot checks), no pick-level rows.
- `docs/ops/edge/2026-08-19-deepseek-adversary-round3.md` — estimator correction.
- Schema: `packages/db/prisma/schema.prisma` line 602 — `PickProofReceipt.modelProb Float?` documented "null until one genuinely exists" (never populated to date of run).
- Remote branch `origin/hermes/l7-clv-forensics` fetched read-only into scratch mirror `C:/tmp/l12-scratch` (not committed).

## Findings (numbers and facts, not vibes)
- ECE ≈ 0.0044 on the graded n=909 population — well-calibrated — with resolution ≈ 0.
- p̂ is MISSING entirely: `confidence_pct` (0–100) is a heuristic composite, not a probability; `market_fair_prob` is the *market's* de-vigged probability, populated on only ~561/1,161 rows, not the model's. The schema column for the model's own probability has never been populated.
- Binary outcome present on all 1,161 rows (`result` WIN/LOSS).
- 18 feature-like columns exist but are pre-lock odds + market metadata only; game-state covariates (rest days, schedule density, line movement, pitcher/weather/park) live on `Game`/`PickSignalSnapshot`/`OpeningLine` and were not exported in the census — structurally weak for clustering.
- Gate verdict: BLOCKED — grouping loss not computable; no GL, p-value, or sensitivity grid emitted. Correct NO-GO per L-12's "do not invent any number" rule.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Gate methodology for deciding build-vs-stop on a flat-resolution model (OTHER — calibration/edge infrastructure; the GL>95th-percentile-of-permutation-null decision rule is a reusable engine artifact).
- The block exposes that the engine had no persisted calibrated p̂ per pick as of 2026-08-19 (OTHER — engine plumbing gap; implies all "calibration" claims before this date were heuristic composites).

## Engine-actionable? (yes/no + one-line what)
Yes — keep the grouping-loss gate spec on file as the canonical build-vs-stop decision rule (GL vs 1,000-iteration within-bin permutation null, {5,10,20}×{3,5,8} sensitivity grid) and verify every engine probability it consumes is a true persisted p̂, not a heuristic composite like `confidence_pct`.
