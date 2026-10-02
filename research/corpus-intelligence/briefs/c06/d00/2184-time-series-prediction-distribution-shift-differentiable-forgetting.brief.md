# arxiv-program/research/2026-09-21/arxiv-deep/2184-time-series-prediction-distribution-shift-differentiable-forgetting.md
## What it is (1-2 sentences)
Stefanos Bennett and Jase Clarkson (2022, Oxford / Alan Turing Institute; ICML Workshop on Principles of Distribution Shift 2022; arXiv:2207.11486v1). Under distribution shift, instead of hand-chosen rolling windows or grid-searched exponential decay, the forgetting (sample-weighting) mechanism itself is learned by gradient descent via bi-level optimization on validation loss — enabling expressive multi-parameter decay shapes that trade sample relevancy against effective sample size automatically.

## Key metrics/methods (formulas where given, else "not specified")
- Weighted ERM: R̂_t(θ) = Σ_{τ=1}^{t-1} α_{|t-1-τ|}·L(f(X_τ;θ), Y_τ), weights from a forgetting mechanism α(i;η) parameterized by η.
- Two mechanisms: (3) exponential decay α(τ;η) = exp(−η₁τ) → **GradExp**; (4) mixed decay α(τ;η) = exp(−η₁τ − η₂τ² − η₃log(τ+1)) → **GradMixedDecay**.
- Bi-level optimization: min_η g^U(η, θ̂) s.t. θ̂ ∈ argmin_θ g^L(η,θ), where g^U = validation loss (most recent T−t* samples) and g^L = α-weighted training loss.
- Implicit differentiation (Gould et al. 2016, Lemma 3.1): ∂θ̂/∂η_i = −(∇²_θ g^L|θ̂)^{−1}·∂/∂η_i ∇_θ g^L|θ̂ (requires g^L twice continuously differentiable in each argument — incompatible with tree models like LightGBM unless weights are fit on a differentiable surrogate then frozen).
- Chain rule applied for d g^U/dη_i. Training: 5 restarts from random init, 50 epochs SGD each.
- One-step-ahead path-dependent risk: R_t(θ) = E_{Y_t~π_t(·|X_t)}[L(f(X_t;θ), Y_t) | {(X_τ,Y_τ)}_{τ=1}^{t-1}]; time-varying conditional label distribution Y_t|X ~ π_t(·|X).
- Baselines compared: Stationary (unweighted), Window (uniform fixed-length recent window), StateSpace (random-walk parameter state), ARIMA, DBF (Kuznetsov & Mohri two-step discrepancy-based forecasting), GridSearchExp (mechanism 3 fit by grid search).
- Assumptions: validation = most recent samples (distribution changes little over short spans, Kuznetsov & Mohri); monotone-decreasing forgetting encodes "recent samples more relevant"; more expressive mechanisms trade adaptivity for effective sample size; authors disclose real-data Wilcoxon tests violate the independence assumption (correlated time series) — significance stars on real columns overstated.

## Data sources named
- Synthetic (from Kuznetsov & Mohri 2020): 4 settings × 192 Monte Carlo runs, t = 1..3000, ε_t ~ N(0, 0.05²): FixedRegime (θ_t = −0.9 on t∈[1000,2000], 0.9 else — abrupt change points), RandomWalk (θ_t = 1 − t/1500 — gradual drift), RandomRegime (stochastic switching between θ=−0.5/0.9 — irregular change points), Stat (θ=−0.5 constant — no shift). Features X_t = (Y_{t−1}, Y_{t−2}, Y_{t−3}), no-intercept linear model. Split: train t=1..2875, validation 2876..2975, test 2976..3000.
- Real financial: 19 years of daily log-returns for 50 NYSE equities. Task 1 (Factor): Fama–French 3-factor risk model — Y_t^(i) − RF_t = θ_t^(i)ᵀX_t, X_t = (1, MR_t, SB_t, HL_t), θ∈R⁴. Task 2 (Vol): forecast next-day |return| for 15 ETFs from 5 lagged absolute returns, θ∈R⁵. Protocol: expanding time-series CV — 6 years training, 150-day validation, next 150 days out-of-sample; roll forward 150 days per update.
- Metric: MSE (one-step-ahead).

## Findings (numbers and facts, not vibes)
- Table 1 — MSE (best per column bold; * = significantly worse than best at 5%, paired Wilcoxon). Columns: FixedRegime ×10⁻³, RandomWalk ×10⁻³, RandomRegime ×10⁻³, Stat ×10⁻³, Factor ×10⁻⁴, Vol ×10⁻⁵:
  - Stationary: 4.00*, 17.2*, 4.20, 2.54, 2.60*, 8.77
  - Window: 2.62*, 3.10*, 4.63*, 2.57*, 2.62*, 8.96
  - StateSpace: 2.73**, 3.30*, 5.25*, 2.60*, 3.81*, 9.75*
  - ARIMA: 2.65*, 13.4*, 4.41*, 2.57*, –, 9.24*
  - DBF: 4.44*, 23.3*, 4.55*, 2.64*, 5.11*, 10.7*
  - GridSearchExp: 2.63, 3.00, 4.31*, 2.58*, 2.59*, 8.94
  - GradExp: 3.96*, 17.2*, 4.20, 2.55, 2.59*, 8.77
  - GradMixedDecay: 2.60, 2.80, 4.39*, 2.57*, 2.49, 8.76
- Paper's claims: GradMixedDecay best in 4 of 6 datasets (FixedRegime, RandomWalk, Factor, Vol) and near-best in RandomRegime and Stat; GradExp ≈ GridSearchExp (gradient matches grid search where grid search is feasible, while enabling the 3-parameter mechanism grid search cannot afford).
- No-shift control (Stat setting): Stationary (2.54) wins — forgetting only helps under actual shift.
- Adversarial caveats noted in the read: Vol column GradMixedDecay 8.76 vs Stationary 8.77 is a tie, not a win; real-data Wilcoxon stars overstated (correlated time series); synthetic settings are simple AR(1) with known breaks — far simpler than NFL regime change.
- NFL-scale caveat: NFL seasons are ~17 games — the effective-sample-size tradeoff bites much harder than in 19 years of daily data; the "validation = most recent data" assumption breaks under abrupt mid-validation regime change (exactly when forgetting matters most).
- GSE acceptance gate (pre-registered in the deep read): adopt learned forgetting weights iff GradMixedDecay beats BOTH Stationary and 3-season Window baselines by ≥ 0.003 log-loss on held-out 2025 nflverse AND learned decay is non-degenerate (effective sample size ≥ 300 games). Reject if it fails to beat fixed Window (mirrors the paper's Stat-setting result) or surrogate→LightGBM sign flip occurs.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Era/coaching/QB regime change (pre/post-2011 CBA rest edges, rule changes, new OCs) is exactly the paper's "distribution shift" setting — currently handled with fixed windows at best; gradient-learned forgetting replaces ad-hoc lookback windows for weighting historical NFL seasons — COACHING.
- Mixed-decay mechanism can learn non-monotone relevance (e.g., "last season matters, 2 seasons ago less, but the same-coach era 3 seasons ago matters again") — pure exponential decay cannot express this; the η₂τ²/η₃log terms approximate it — COACHING.
- Beyond-paper extension in the read: feature-group-specific forgetting curves — separate η vectors for (i) personnel-dependent features (QB EPA, pressure rate — fast decay, rosters churn) → QB-BEHAVIOR, (ii) scheme/coaching features (play-action rate, blitz rate — medium decay, OCs turn over ~3 years) → SCHEME / COACHING, (iii) structural features (home-field, altitude — near-zero decay) → OTHER. Shared validation objective with L2 penalty toward the global curve to preserve effective sample size.
- Caution for calibration program: in the no-shift regime, unweighted (Stationary) won — TRUST-SIGNAL (don't forget data without evidence of shift).
- INFERENCE: the bi-level weighting machinery is a general sample-relevancy learner; nothing inherently OL-specific in the paper.

## Engine-actionable? (yes/no + one-line what)
Yes — fit α(τ;η) = exp(−η₁τ − η₂τ² − η₃log(τ+1)) on nflverse 2015–2024 game rows via a logistic-regression surrogate (differentiable as Lemma 3.1 requires), then apply learned weights as LightGBM sample_weight when training the season's engine; refit each offseason and at Week 9; estimated ~3 engineer-days.
