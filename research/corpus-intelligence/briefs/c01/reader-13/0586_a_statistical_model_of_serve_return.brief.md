# arxiv-program/research/2026-09-21/arxiv-deep/0586-a-statistical-model-of-serve-return.md
## What it is (1-2 sentences)
Latent style allocation model (Kovalchik & Albert, 2022): a two-level Bayesian mixture where each latent "style" is itself a mixture of Gaussian patterns, with partial pooling across players via a shared pattern simplex, applied to discover serve-return impact-location styles from professional tennis tracking data. Verdict in the file: ADAPT — port the methodology to NGS tracking data (route-running styles, coverage shells, pass-rush archetypes, QB throw-location tendencies); the tennis data do not transfer.
## Key metrics/methods (formulas where given, else "not specified")
- Generative process: (1) θ_k ~ G(·) (style→pattern simplex via ordered stick-breaking); (2) π_i ~ Dirichlet(α_0) (player i's style distribution); (3) k_ij ~ Categorical(π_i); (4) m_ij ~ Categorical(θ_{k_ij}); (5) Y_ij ~ MVN(μ_{m_ij}, Σ_{m_ij}).
- Marginal likelihood: L_ij(Θ) = Σ_{k=1}^K Σ_{m=1}^M π_{ik} θ_{km} MVN(Y_ij; μ_m, Σ_m).
- Covariate-adjusted means: μ_{m_ij} = (α_{m_ij} + η_{r(ij)} − δ_{s(ij)}) x_ij (pattern population effects + receiver offset − server offset, times covariates: serve direction × court side, surface).
- Ordered stick-breaking (Eq. 7): β_{km} ~ N(0,1) with β_{1m} << … << β_{Km}; ν_{km} = logit^{−1}(β_{km}); θ_{km} = ν_{km}∏_{l<m}(1−ν_{kl}) — identifiability trick; K(M−1) parameters per style simplex.
- Priors: MVN(0,·) with LKJ-Cholesky on effect matrices; Σ_m with modified LKJ-Cholesky + Student-t(1)-truncated scaling (heavy tails).
- Model selection: ELPD (PSIS-LOO) over K, M ∈ {2…8}²; 1st and 2nd serves fit separately; fit via Stan variational inference. Component guidance: more patterns M when within-player heterogeneity is high; more styles K when between-player differences dominate.
- GSE implementation spec: apply to NGS catch-point locations (2D lateral + depth at catch), or DB pre-snap alignment, or pass-rush get-off vectors; covariates x = down/distance bucket, formation, man/zone indicator; player offsets η (receiver) and δ (nearest defender) as receiver/server offsets; then attach styles to outcomes (P(completion | style, pattern, coverage), EPA/route).
## Data sources named
142,803 return points from 141 top ATP players, 1,334 matches, 2018–2020 (ATP website tracking summaries, atptour.com); inclusion: matches with ≥30 return points, receivers with ≥3 matches. Fit in Stan (variational inference); no code repo stated. GSE-side target data named: NFL Next Gen Stats tracking.
## Findings (numbers and facts, not vibes)
- ELPD, 1st serve: MVN −181748; finite mixture −157105; mixed membership −146365; latent style allocation −142358 (2.8% better than mixed membership).
- ELPD, 2nd serve: −146143; −124560; −123107; latent style allocation −118955 (3.5% better than mixed membership).
- Selected: K=6 styles, M=6 patterns (both serve types). 1st serve: style 1 plurality for 80/141 players (56.7%), style 6 for 25 (17.7%), styles 2–5 for 3–12% each. 2nd serve: style 1 for 72 (51.0%), style 6 for 23 (16.3%).
- Style weights: 1st-serve style 6 puts 84% on component 1 (deep/diffuse); styles 1–3 put 50–58% on component 5. Player examples: Nadal/Medvedev 78–83% style 6 on 1st serve (deepest, most spread); Federer most aggressive (0.5–1 m inside court vs Djokovic; P(impact beyond baseline) ≈ 0 on 2nd serve); Djokovic between Federer and Nadal on depth; Murray/Rublev asymmetric Ad/Deuce patterns.
- Paper cites Dutta, Yurko & Ventura (2020) for NFL coverage types — but that method is not in Garrett's repo (genuine corpus gap).
- Limitations stated: no link from styles to outcomes (descriptive only); variational inference understates uncertainty; static styles over 2018–2020 (no temporal dynamics); aces excluded; fixed K, M.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: port to QB dropback/throw-location tendencies — latent "throw-location styles" (e.g., boundary-aggressive vs check-down archetypes) from NGS, with partial pooling for low-attempt QBs; downstream: P(completion | QB style, coverage) as an engine feature.
- SCHEME: port to coverage shells (DB pre-snap alignment archetypes) and pass-rush archetypes — interpretable latent scheme types for matchup features.
- COACHING: style discovery as a tendency-quantification tool — e.g., "deep-boundary specialist" vs "slot possession" WR archetypes for coaching/scheme tendency profiles.
- OTHER: method is unsupervised archetype discovery from tracking data — fills the NGS-lane hole; ordered stick-breaking identifiability trick transfers to any Stan-based latent-style model GSE builds.
## Engine-actionable? (yes/no + one-line what)
Yes — 2–3 engineer-weeks to port latent style allocation to NGS catch-point/alignment data with ELPD model selection, gated on replicating the ≥2% ELPD gain and ≥1% completion-probability log-loss improvement on 2024 NGS holdout; improvement experiment: hidden Markov layer over styles within a game for "in-game tendency shift" features.
