# arxiv-program/research/2026-09-21/arxiv-deep/0721-distributed-lag-models-athlete-wellness-recovery.md
## What it is (1-2 sentences)
Deep ledger on Schliep, Schafer & Hawkey (2020), "Distributed lag models to identify the cumulative effects of training and recovery in athletes using multivariate ordinal wellness data" (arXiv:2005.09024v1): a hierarchical Bayesian distributed-lag model that separates cumulative workload and recovery effects on 6 ordinal wellness metrics with individual-specific lag curves. Verdict: ADAPT — directly transferable to GSE's injury/availability lane, replacing one-size-fits-all rest features.

## Key metrics/methods (formulas where given, else "not specified")
- Cumulative probit (Albert & Chib 1993): Z̃_ijt = μ_ijt + ε_ijt, ε_ijt ~ N(0,σ²_ij), ordinal Z_ijt ∈ {1..5} via ordered thresholds θ_ij^(k).
- Latent-factor means: univariate μ_ijt = β_0ij + β_1ij Y_it; bivariate μ_ijt = β_0ij + Σ_m β_mij Y_mit.
- Distributed lag: Y_it = Σ_{l=0}^{L}(X_1i,t−l α_1il + X_2i,t−l α_2il) + η_it, η_it ~ N(0,τ²_i), L=10 days; lag curves allow positive and negative effects at different lags (not Dirichlet-constrained).
- Hierarchical borrowing: α_mil ~ N(α_ml, ψ_ml) — global mean lag curves + individual deviations. Priors: α_ml ~ N(0,10); variances Inverse-Gamma(0.01,0.01); Dirichlet(10,10) split on (σ²,τ²); log-gap N(0,1) thresholds. Identifiability: θ^(1)=0, β_11=1, shared thresholds per metric.
- Relative importance: R_j = |C_j|/Σ|C_j'| (Eq. 9), with C_j = corr(Z̃_j, Y) — model-based metric weights replacing unweighted 1/J averaging; R_jm for bivariate factors (Eq. 10).
- Inference: hybrid Metropolis-within-Gibbs, 100k iterations, 20k burn-in; 95% posterior credible intervals on lag coefficients.
- Workload = RPE × duration (Foster et al.); recovery = first PC of sleep metrics (64–94% variance); ordinal 1–10 collapsed to 5 categories via individual-specific k-means.

## Data sources named
- 20 professional MLS referees, 2015–2016 seasons (Feb 1–Oct 30), 170–467 days per individual; 3–44 matches officiated each (avg 28); proprietary referee-program data, not shared.

## Findings (numbers and facts, not vibes)
- Global: workload negatively related to wellness with lag 1 most significant (acute); recovery positively related, significant at lags 1–5 (longer-lasting than workload).
- Individual variation large: Athletes A and B significant negative workload effects at lags 1–2; C and D not; D shows positive workload→wellness; A positive at lag 9, B at lags 7–9.
- Energy exceeds 1/6 relative importance for all four profiled athletes; appetite negatively correlated for Athlete B; none of the six metrics uniformly insignificant.
- Match-day patterns: Athlete A wellness highest on match day; B lower the day after; D higher the day after.
- Limitations: lagged coefficients assumed constant in time (flagged by authors — fitness changes seasonally); subjects are referees, not competing athletes; no out-of-sample predictive validation; n=20.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- New territory in corpus: injuries/causal lane — hierarchical cumulative-workload + individual lag curves for NFL injury-risk/availability (snap counts, travel, rest days, short weeks): OTHER (injury lane).
- R_j relative-importance weights as a principled replacement for any unweighted averaging of availability signals: OTHER.
- Flag players whose workload-lag profile sits in the high-risk posterior region → adjust or withhold picks on their games: TRUST-SIGNAL.

## Engine-actionable? (yes/no + one-line what)
Yes — build per-player availability model (workload = snap counts × intensity, recovery = rest/travel/short-week flags, 10-game lags, partial pooling within position groups) targeting binary DNP or ordinal practice status; adoption gate: held-out 2025 availability AUC beats pooled logistic baseline by ≥3pp with meaningful individual heterogeneity (ψ_ml > 0).
