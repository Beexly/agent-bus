# arxiv-program/research/2026-09-21/arxiv-deep/1654-copula-hmm-football-momentum.md
## What it is (1-2 sentences)
ADAPT verdict deep-read of O'Hagan et al., arXiv:2002.01193 (2020): a copula-based multivariate hidden Markov model for detecting "momentum" regimes in football, using minute-level (shots on goal, ball touches) with covariate-driven transition probabilities. The brief recommends porting the template to GSE's live NFL game-state regime detection on drive/play-level observables like EPA/play and success rate.
## Key metrics/methods (formulas where given, else "not specified")
- Hidden states S_t ∈ {1..K}; state-dependent joint f(y_t|S_t) = c(F_1(y_1t|θ_1), F_2(y_2t|θ_2); η)·f_1·f_2 with Conway–Maxwell–Poisson marginals and Clayton copula c(·;η).
- Transitions via multinomial logit: P(S_t=j|S_{t-1}=i, x_t) = exp(γ_ij′x_t) / Σ_k exp(γ_ik′x_t), covariates = opponent market value, score diff, home/away, match minute.
- Estimation: numerical ML via nlm() with 50 random starts; model selection by AIC/BIC over K=2..5 and copula families.
## Data sources named
Borussia Dortmund, Bundesliga 2017/18, all 34 matches; 3,214 minute-level bivariate observations. Data proprietary (club tracking/event feed); supplementary code claimed but no public URL in the paper text.
## Findings (numbers and facts, not vibes)
- Copula model beat conditional-independence baseline by ΔAIC = 48, ΔBIC = 35 (Clayton selected). (SCHEME)
- BIC + interpretability favor K=3 states: 3-state BIC 20,979 vs 2-state 21,020 vs 4-state 21,030 vs 5-state 21,098. (SCHEME)
- 3-state means: shots 0.226/0.132/0.147; ball touches 2.032/4.583/9.732; states decode as low-control/counter-attack, balanced, dominant possession. (OTHER)
- Adding all transition covariates improved fit by ΔAIC = 51 vs no-covariate transitions. (SCHEME)
- No out-of-sample validation; all selection in-sample on one team's season. (TRUST-SIGNAL)
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- SCHEME: covariate-driven transitions (score diff, time, home, opponent strength) map directly onto NFL live-game regime features.
- TRUST-SIGNAL: in-sample-only selection with 50-restart ML is an overfit flag; the brief sets a hard ADAPT gate (holdout predictive log-likelihood ≥ 0.02 nats/obs over independence baseline) before any regime feature enters live models.
- COACHING: INFERENCE — decoded momentum states confound coaching tactical shifts with momentum; NFL port must control for scheme/tempo changes or states will rediscover them.
## Engine-actionable? (yes/no + one-line what)
Yes — build gse.regimes.CopulaHMM on drive-level (EPA/play, success rate), K=3, copula vs independence ΔAIC gate, Viterbi state posteriors as live win-prob/spread features.
