# arxiv-program/research/2026-09-21/arxiv-deep/0586-a-statistical-model-of-serve-return.md
## What it is (1-2 sentences)
Full-paper brief of a tennis tracking-data model (Kovalchik & Albert, arXiv:2202.00583v1): "latent style allocation," a two-level Bayesian mixture where each latent style is itself a mixture of Gaussian patterns, with partial pooling across players — fit to 142,803 return impact points from 141 ATP players. Verdict: ADAPT — port the latent-style-allocation machinery (styles = mixtures of patterns, shared pattern simplex with ordered stick-breaking identifiability) to GSE's NGS tracking-data archetype problems (route-running styles, coverage shells, pass-rush archetypes, QB dropback/throw-location tendencies).

## Key metrics/methods (formulas where given, else "not specified")
- Two-level generative: θ_k ~ G(·) (style→pattern simplex); π_i ~ Dirichlet(α_0) (player i over K styles); k_ij|π_i ~ Categorical; m_ij|k_ij ~ Categorical(θ_{k_ij}); Y_ij|m_ij ~ MVN(μ_{m_ij}, Σ_{m_ij}).
- Marginal likelihood: L_ij(Θ) = Σ_k Σ_m π_{ik} θ_{km} MVN(Y_ij; μ_m, Σ_m) (marginalized so Stan fits without discrete sampling).
- Covariate-adjusted means: μ_{m_ij} = (α_{m_ij} + η_{r(ij)} − δ_{s(ij)}) x_ij (pattern population effects + receiver offset − server offset × covariates: serve direction × court side, surface).
- Ordered stick-breaking (Eq. 7): β_{km} ~ N(0,1) with β_{1m}<<β_{2m}<<…<<β_{Km}; ν_{km}=logit^{−1}(β_{km}); θ_{km}=ν_{km}∏_{l<m}(1−ν_{kl}) — identifies style ordering.
- Priors: MVN(0,·) with LKJ-Cholesky covariance on effect matrices; modified LKJ-Cholesky + Student-t(1)-truncated scaling for Σ_m (heavy tails). Fit via Stan variational inference.
- Model selection: ELPD (PSIS-LOO) over K,M ∈ {2…8}²; 1st and 2nd serves fit separately; selected K=6, M=6 both. Component guidance (stated): more patterns M when within-player heterogeneity is high; more styles K when between-player differences dominate.

## Data sources named
142,803 return points from 141 top ATP players, 1,334 matches, 2018–2020 (ATP website tracking summaries; atptour.com). Variables: return impact 2D location (lateral m from center line, depth m from baseline), serve number, server/receiver ids, court side, surface, event, date. Inclusion: ≥30 return points per match; receivers with ≥3 matches. No public code repo stated; models fit in Stan.

## Findings (numbers and facts, not vibes)
- ELPD, 1st serve: MVN −181748; finite mixture −157105; mixed membership −146365; latent style allocation −142358 (2.8% better than mixed membership). 2nd serve: −146143; −124560; −123107; −118955 (3.5% better).
- Six styles identified per serve type. 1st serve: style 1 plurality for 80/141 players (56.7%); style 6 for 25 (17.7%); styles 2–5 for 3–12% each. 2nd serve: style 1 for 72 (51.0%); style 6 for 23 (16.3%).
- Style 6 puts 84% weight on component 1 (deep/diffuse); styles 1–3 put 50–58% on component 5. Player examples: Nadal/Medvedev 78–83% style 6 on 1st serve (deepest, most spread); Federer most aggressive (0.5–1 m inside court vs Djokovic; P(impact beyond baseline) ≈ 0 on 2nd serve); Djokovic between Federer and Nadal on depth; Murray/Rublev asymmetric Ad/Deuce patterns.
- Limitations: no link from styles to outcomes (descriptive only); variational inference understates posterior uncertainty; fixed K,M; aces excluded (most aggressive serves missing); no temporal dynamics; surface as mean covariate only.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (NGS archetype discovery): fills a genuine corpus hole — no latent-style/archetype-discovery model for tracking data exists in Garrett's repo; the two-level style-vs-pattern structure with partial pooling for sparse players (rookies) ports line-for-line in Stan.
- QB-BEHAVIOR: the GSE port's first application (a) is WR route endpoints / catch-point locations, and (c) is QB dropback/throw-location tendencies — the exact behavioral-profiling target of the intelligence program.
- SCHEME: port application (b) is DB pre-snap alignment coordinates — coverage-shell archetypes; covariates x = down/distance bucket, formation, man/zone indicator; defender offsets δ for the covering unit.
- OL: pass-rush get-off vectors is a named port candidate (defensive, but OL-relevant as the mirror side of protection analysis).
- TRUST-SIGNAL: partial pooling shrinks low-sample players toward the shared simplex rather than fabricating individual styles — honest small-sample handling; downstream must attach styles to outcomes (P(completion|style,coverage)) to become a feature.

## Engine-actionable? (yes/no + one-line what)
Yes — port latent style allocation to NGS spatial summaries (start with WR catch-point locations or DB pre-snap alignment), select K,M via ELPD grid, then attach styles to outcomes (completion probability / EPA per style-pattern-coverage) as matchup features; gates: replicate ≥2% ELPD gain over finite mixture on 2024 NGS AND style features improve completion-probability log-loss by ≥1% (else keep archetypes as content-only, e.g., "six WR archetypes" visualization); ~2–3 weeks.
