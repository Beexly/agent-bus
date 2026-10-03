# arxiv-program/research/2026-09-21/arxiv-deep/1083-scoring-rules-rps-vs-ignorance.md
## What it is (1-2 sentences)
Full-read ledger of Wheatcroft (arXiv:1908.08980v1), which argues against the Ranked Probability Score for football outcome forecasts and shows via two experiments that the ignorance (log) score identifies the true forecasting system faster and more reliably than Brier and RPS. Verdict in file: ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- Brier = Σ_i(p_i − o_i)² (eq. 1); RPS = Σ_{i=1}^{r−1}Σ_{j=1}^i(p_j − o_j)² (eq. 2); IGN = −log₂(p(Y)) (eq. 3).
- Properties: all three proper; only ignorance is local; only RPS is distance-sensitive; equitable/regular/feasible defined.
- Experiment 1: perfect vs imperfect forecast pairs over n repeated draws; selection = lower mean score; P(select perfect) vs n.
- Experiment 2: imperfection δ: ε = (1/3)(|p̃_h−p_h|+|p̃_d−p_d|+|p̃_a−p_a|) (eq. 4); imperfect forecast drawn from {ε<δ}; pairwise differences with 95% resampling intervals.
- Odds→probabilities (App. B, eq. 5): p_h = (1/O_h)/Σ(1/O_i) — margin removed by renormalization; max odds across bookmakers used.
- Mean relative ignorance Δ (bits) ⟺ 2^Δ = mean increase in probability density placed on the outcome.
## Data sources named
- football-data.co.uk: 39,343 matches, top five English leagues 2005/06 onward (EPL 6,460; Championship/League One/League Two 6,624 each; National League 6,488).
- Synthetic five Constantinou–Fenton forecast pairs (Experiment 1).
## Findings (numbers and facts, not vibes)
- Hierarchy ignorance > Brier > RPS at low imperfection (δ=0.01, 0.025; 95% resampling intervals exclude zero for large n); ignorance still significantly better at δ=0.05, 0.1.
- Experiment 1: ignorance identifies the perfect system fastest for almost all n; RPS barely improves with n on match 4.
- Ledger's numeric gate: adopt ignorance as GSE's primary engine-variant selection metric; promote a challenger only if mean relative ignorance ≥ 0.05 bits (2^0.05 ≈ 1.035× mean probability placed on the outcome) on held-out games with 95% resampling interval of the pairwise difference excluding zero.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Ignorance beats Brier/RPS for identifying the true forecasting system: TRUST-SIGNAL (engine evaluation reliability — which metric to trust when comparing variants).
- 2^Δ bits interpretation as gambler-legible publishable stat: TRUST-SIGNAL (public model-card transparency).
- Caveat that the hierarchy is proven for near-perfect discrimination, not the messy middle of imperfect-vs-imperfect: OTHER (methodological limitation).
## Engine-actionable? (yes/no + one-line what)
Yes — make mean ignorance (log₂) the engine-variant selection metric; gate variant promotion on ≥0.05 bits with a 95% resampling interval excluding zero, per the paper's two experiments.
