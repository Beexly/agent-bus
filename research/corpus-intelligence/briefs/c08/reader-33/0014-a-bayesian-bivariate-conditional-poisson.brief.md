# docs/arxiv-program/research/2026-09-21/arxiv-deep/0014-a-bayesian-bivariate-conditional-poisson.md
## What it is (1-2 sentences)
Deep read of arXiv:2608.07168 — a Bayesian bivariate conditional Poisson (BCP) regression modeling signed home–away goal dependence in the English Premier League; verdict ADAPT for the joint-modeling technique, not the soccer model.
## Key metrics/methods (formulas where given, else "not specified")
- BCP(λ₁,λ₂,φ): Y₁ ~ Poisson(λ₁); Y₂ | Y₁=y₁ ~ Poisson(μ₂ e^{φy₁}), μ₂ = λ₂ exp(−λ₁(e^{φ}−1)); Cov(Y₁,Y₂) = λ₁λ₂(e^φ−1).
- Log-linear intensities: log λ_{j,i} = β_{0,j} + β_{j,Att} log(Attᵢ+1) + β_{j,F} FS_{i,j}; empirical-Bayes priors θ ~ N(0, sê(θ̂_MLE)²); Stan/HMC, 4 chains × 2,000 (1,000 warmup).
- Model selection by PSIS-LOO ELPD (joint) + conditional ELPD₂ = Σᵢ E[log p(y_{i,2} | y_{i,1}, θ)] for directionality; PPCs with 4,000 replications vs independent Poisson.
## Data sources named
1,140 EPL matches across 2018–19, 2020–21, 2023–24 seasons (home/away goals, attendance, home/away fouls); publicly sourced, no tracking/xG/player data, no team-strength terms.
## Findings (numbers and facts, not vibes)
- Joint ELPD-LOO: BCP A→H −3552.0, BCP H→A −3552.1, independent Poisson −3565.0 (~13 points gained from modeling dependence).
- Conditional ELPD₂ favors away-given-home: H→A −1721.8 vs A→H −1817.2.
- φ (H→A) posterior mean −0.107, 95% CI [−0.147, −0.066]; one home goal multiplies the away conditional mean by exp(−0.107) ≈ 0.899.
- Attendance elasticity β_{1,Att} = 0.024, CI [0.013, 0.034]; β_{2,Att} = 0.000, CI [−0.011, 0.011]. Foul effects' 95% CIs both include zero (β_{1,AF} 0.012, CI [−0.001, 0.025]; β_{2,HF} 0.007, CI [−0.008, 0.022]).
- Independent Poisson fails on observed goal correlation and home-loss proportion; BCP PPCs replicate both. MCMC: R̂≈1.0.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Joint home/away scoring distribution with signed dependence → OTHER (probability-modeling technique portable to NFL correlated spread/total pricing)
- Conditional ELPD₂ directionality diagnostic → OTHER (model-comparison method for any joint scoreline model)
- Attendance/foul covariate story → OTHER (no NFL analogue at this specificity; do not adopt)
## Engine-actionable? (yes/no + one-line what)
Yes — re-specify BCP on NFL home/away points with GSE team-strength features (off/def EPA, injuries, weather), compare joint vs independent via PSIS-LOO, and use the fitted joint distribution for correlated spread+total/parlay pricing; acceptance gate is ≥5 ELPD points over independent baseline plus reproducing observed home–away correlation.
