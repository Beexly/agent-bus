# docs/arxiv-program/research/2026-09-21/arxiv-deep/0043-predicting-formula-1-race-outcomes-decomposing.md
## What it is (1-2 sentences)
A full-paper deep-read of Rane (2025, arXiv:2508.00200): time-decayed ridge regression (RAPM, borrowed from NBA/NHL analytics) on driver/constructor one-hot indicators predicts F1 race rank, with LOESS-smoothed coefficients and partial-Kendall's-Tau variance decomposition of driver vs car effects, 2014-2024 Hybrid Era. The verdict is ADAPT: the decomposition technique is directly transferable to NFL player/team effect separation (QB vs supporting cast, coach/scheme vs personnel).
## Key metrics/methods (formulas where given, else "not specified")
- Ridge (L2, chosen so low-sample entities keep shrunk coefficients) on sparse driver/constructor indicators; refit per race on all prior data (forward-facing).
- Time decay: exponential, season decay factor 0.75, round decay 0.075 (grid-searched against MAE); total weight = rank-position weight x time-decay weight (exact forms partially garbled in PDF extraction — verify against source PDF before implementing).
- LOESS smoothing: blended coefficient = w*raw + (1-w)*LOESS-predicted, LOESS weight capped at 0.7, parameterized separately for drivers/constructors (subscripting garbled — verify).
- Metrics: Kendall's Tau = (concordant - discordant)/C(n,2) averaged across races (chosen over Spearman for outlier robustness); partial-Tau variance shares = partial-tau_component / sum partial-tau; MAE for hyperparameter tuning; McFadden's pseudo-R^2 = 1 - LL(full)/LL(null) for binary Top-3/6/10 logistic variants; nDCG as guardrail; bootstrap R=50, 95% CI (with author's caveat that penalized coefficients can be non-normal).
- DNF handling: primary model excludes non-finishers; variants with DNFs included vs partially attributed (Collision/Accident/Spun-Off -> driver fault, else constructor fault).
## Data sources named
Ergast API + Jolpica-F1 via the f1dataR R package; 2014-2024 Hybrid Era (2012-2013 warm start); ratings + tables at https://saurabhr.com/f1-rapm/; no code repo stated.
## Findings (numbers and facts, not vibes)
- Constructors explain 64.0% of race-outcome variance in the Hybrid Era (DNF-excluded model), overall Kendall's Tau 0.625; DNF-inclusive model 76.1% constructor share; qualifying model only 47.0% constructor (drivers relatively more important).
- 2014-2021 cohort implied constructor influence 70.1% vs Kesteren (2023) 88% at season granularity — race-level granularity explains only a small part of the gap.
- Position weighting on/off: "no significant performance difference." Logistic Top-N: McFadden's R^2 dips below 0.0 for all N > 10; model performance peaks at N=5.
- Case studies: Verstappen 2017-2020 driver coefficient exceeded Bottas's and matched Hamilton's despite fewer points (Bottas "inflated by the strength of the Mercedes"); Bottas's post-Mercedes drop suggests the model "may not be fully separating constructor and driver performance."
- Driver-seasons after team switches are less predictable than same-team seasons; new drivers paradoxically show lower error (attributed to backmarker/midfield assignment).
- Caveats: incomplete driver/constructor separation (only identified via teammate comparisons and team switches); bootstrap CIs understate uncertainty for shrunk coefficients; weather and circuit type excluded; new 2026 regulations expected to degrade the model.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: the GSE analogue is decomposing dropback EPA into QB vs supporting-cast (OL/WR) effects with the same ridge + LOESS pattern.
- SCHEME: partial-Tau decomposition of coach/scheme vs personnel variance shares is novel to the corpus and directly targets the scheme-vs-talent split.
- COACHING: play-caller as an indicator feature in the pilot (one-hot QB + OL unit + play-caller) — the coach-effect analogue of the constructor coefficient.
- OL: OL unit as an indicator feature in the proposed EPA decomposition.
## Engine-actionable? (yes/no + one-line what)
Yes — pilot time-decayed ridge + LOESS + partial-Tau decomposition on nflverse dropback EPA (one-hot QB + OL unit + play-caller, forward-week validation), adopting only if it beats team-average carry-forward by >=5% MAE on 2024 holdout with variance shares stable across seasons.
