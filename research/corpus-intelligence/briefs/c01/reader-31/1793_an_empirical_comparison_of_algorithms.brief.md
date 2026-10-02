# arxiv-program/research/2026-09-21/arxiv-deep/1793-an-empirical-comparison-of-algorithms.md

## What it is (1-2 sentences)
A ledger note on arXiv:1206.6814v1 (Dani, Madani, Pennock, Sanghai, Galebach 2006) — an empirical shootout of six forecast-aggregation algorithms converting a crowd of noisy NFL probability forecasts (ProbabilitySports, 1,319 games, 2000–2004) into one calibrated forecast. Ledger verdict: **ADAPT** — the closest empirical study in the corpus of a probability-aggregation operator on NFL games, and the strongest evidence for a calibration-lane maxim: optimize quadratic/log loss, not accuracy.

## Key metrics/methods (formulas where given, else "not specified")
- Six aggregation families, evaluated online (train-on-past, predict-next-game) and via cross-validation; missing predictions handled by 0.5-imputation or participation-only updates:
  1. **Average** — simple mean of expert probabilities (no parameters).
  2. **Average(k)** — mean of top-k scoring experts so far (k = 30 / 20).
  3. **Experts algorithm** (Cesa-Bianchi et al.) — multiplicative weights w ← w·U_β(q); variants of prediction function (Vovk's, piecewise-linear, identity) × update function (e^{q ln β}, e^{−βq}, 1−(1−β)q); best config β = 0.75, update e^{−βq}, Vovk prediction; "Expert MD" variant freezes weights for non-participants. Regret bound: loss(A) ≤ [ln(2)·N + L·ln(1/β)] / ln(2/(1+β)), L = best expert's loss in hindsight.
  4. **Variance algorithm (novel, EM)** — model each expert's prediction as Gaussian centered on the true event probability with per-expert variance σᵢ²; alternate between inverse-variance-weighted probability estimates and variance estimates. Equations: (1) p̂_t = (Σ_i w_i p_{it})/(Σ_i w_i), w_i = 1/σᵢ²; (2) σᵢ = √(Σ_t (p_t − p_{it})²/T). No parameters.
  5. **Exp Gradient** — batch exponentiated-gradient minimization of quadratic loss, wᵢ ← wᵢ·exp(2.0·xᵢ·δ·lr), lr = 0.1, 3 passes, chronological order.
  6. **Market simulation** — log-utility agents with priors = expert predictions trade a $1 Arrow-Debreu security; equilibrium price (wealth-weighted average) is the aggregate.
- Scoring rule: **100 − 400(p − y)²** per game (quadratic, incentive-compatible); metrics: zero-one accuracy and quadratic loss. Target: binary home-team-win outcome.
- Assumptions: expert predictions independent Gaussians centered on true probability with time-constant per-expert variance; quadratic loss is the right probability-quality metric.

## Data sources named
ProbabilitySports.com NFL contests, 2000–2004: **1,319 games** (~250+/season); no team/record features — only expert probabilities per game. Expert counts per season: **625 → 786 → 1,257 → 1,969 → 2,231**. Expert quality distribution is brutal: median final season scores −485, −649, −684.2, −437, −275 (2000–2004); mean scores −1301, −1547, −1792, −1221, −944 — most experts badly miscalibrated. NCAA basketball playoff data (~60 games/season, 2001–2003) as second domain. Site defunct; replication via modern crowd panels (Kalshi/polymarket-free forecasts) suggested.

## Findings (numbers and facts, not vibes)
- **Zero-one accuracy is a dead end:** no algorithm consistently beats simple averaging on 0/1 error (SVM/trees/boosting all fail too; even the top expert doesn't clearly beat Average on 0/1 — Fig 2a: Average 0/1 errors 0.3552/0.3436/0.3708/0.3109 vs Top Expert 0.3514/0.3127/0.3521/0.3221).
- **Quadratic loss is where aggregation wins:** Variance beats Average in **9 of 11 experiments** (5 NFL seasons + 3 NCAA + 3 multi-year), sign-test significant (p ≤ 0.1) in 2003 and 2004.
- Quadratic scores (higher = better), seasons 2000–2004 (Top Expert / Average / Avg(30) / Variance / Var(20) / Experts / Expert MD / ExpGrad / MarketSim):
  - 2000: 3185 / 2561 / 2864 / 2979 / **3187** / 2801 / 2875 / 2827 / 3090
  - 2001: 3445 / 2574 / 2589 / 2660 / 2662 / 2541 / 2644 / 2563 / 2482
  - 2002: 3339 / 2562 / 2529 / 2627 / 2611 / 2406 / 2505 / 2616 / 2381
  - 2003: 4218 / 3298 / 3731 / 3498 / 3881 / 3343 / 3442 / 3371 / 3397
  - 2004: 3747 / 3371 / 2986 / 3456 / 3344 / 3099 / 3346 / 3137 / 3203
- Multi-year 2000–3: Top Expert **9,910** vs Average **11,169** vs Variance **11,512**.
- Even averaging only experts with *negative* final scores yields positive scores (1,763–2,717/season) — averaging smooths miscalibration.
- Prediction markets (TradeSports/NewsFutures, 2003) scored 3,389/3,359 — Variance (3,498) was competitive with real-money markets.
- Caveats noted: experts algorithm never consistently beats Average despite worst-case guarantees (cautionary tale); Variance(20) cutoff may be overfit — plain Variance (no cutoff) is the honest result; independence assumption violated (correlated expert errors) though EM works anyway; thin significance (sign test p ≤ 0.1, not 0.05).
- Ledger's improvement experiment: **bias + recency + correlation-aware EM** — (a) estimate per-source bias as well as variance; (b) exponential recency weighting on variance estimates; (c) block-structure EM by source type (models vs markets vs humans) to absorb within-block correlation, then inverse-variance-weight block means.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — Forecast-aggregation / calibration methodology: the EM variance operator for combining forecast sources into one calibrated probability on NFL games; per-source σᵢ² as a reliability signal. No player behavior, coaching, OL, or scheme content; no quotes.

## Engine-actionable? (yes/no + one-line what)
Yes — implement a **Variance-EM aggregation layer** combining GSE's per-game win probabilities (engine model, market-implied odds, crowd/consensus feeds, analyst overrides) into the published probability, and track per-source σᵢ² as a standing source-reliability/model-health dashboard. Ledger gate: ADOPT if it beats simple averaging on Brier by ≥ 0.002 over 2024–2025 with no calibration degradation (ECE within 0.005); do NOT evaluate on pick accuracy. ~2 days effort.
