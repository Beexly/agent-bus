# arxiv-program/research/2026-09-21/arxiv-deep/1184-meta-analytics-tools-for-understanding-the.md
## What it is (1-2 sentences)
Ledger for Franks et al. (2016) "Meta-Analytics: Tools for Understanding the Statistical Properties of Sports Metrics" (arXiv:1609.09830) — a framework scoring sports metrics themselves on discrimination (signal vs. noise), stability (persistence), and independence (non-redundancy) via R²-style variance ratios. Verdict: ADAPT — the audit toolkit GSE's 26-metric catalog has been missing.
## Key metrics/methods (formulas where given, else "not specified")
- Mixed-effects model: X_spm = μ_m + Z_sm + Z_pm + Z_spm + ε_spm (variance components σ²_SM, σ²_PM, σ²_SPM, τ²_M sampling).
- Discrimination: D_sm = 1 − E_sm[V_spm[X]] / V_sm[X]; Stability: S_m = 1 − E_m[V_pm[X] − V_spm[X]] / (V_m[X] − E_m[V_spm[X]]); Independence: I_mM = C_{m,m} − C_{m,M} C_{M,M}⁻¹ C_{M,m} (Gaussian-copula latent correlation, sbgcop package); PCA fraction F_k = (Σ₁ᵏλ_i)/(Σ₁ᴹλ_i).
- Sampling variances via bootstrap resampling of games within seasons; EB shrinkage (Beta-binomial, gbp package) for noisy rates.
## Data sources named
70 NBA metrics, 2000+ (basketball-reference.com); 40 NHL metrics, 2000+ (hockey-reference.com). Player-season-metric 3D array X_spm.
## Findings (numbers and facts, not vibes)
- NBA: raw 3P% least discriminative/least stable metric studied; >50% of between-player 3P% variation in a season is chance; rebounds/blocks/assists highly discriminative and stable; BPM beats WS/48/ORtg/DRtg on reliability; steals I≈0.40 (60% explained by other 69 metrics); NBA PCA F_15≈0.75 (15 of 65 components explain 75%); omnibus {WS,VORP,PER,BPM,PTS} F_1=0.75.
- NHL: takeaways I=0.73 (most unique metric); Corsi more reliable than Fenwick; plus-minus non-discriminative; F_15=0.90.
- EB shrinkage visibly improves 3P%'s D and S.
- Authors' own caveat: meta-metrics measure internal reliability, NOT relevance — a fourth "relevance" meta-metric (predictive/causal link to winning) is needed and not provided.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL — reliability audit for every engine input metric: kill chance-dominated (D<0.5), redundant (I<0.2), or unstable features before they enter models; directly gates what the engine trusts.
- OTHER — feature-QA methodology / metric inventory governance.
## Engine-actionable? (yes/no + one-line what)
Yes — run D/S/I scoring over all gse-lab metric families (29 CSVs, 2015–2025), flag D<0.5 or I<0.2 metrics for shrinkage/removal, and adopt the audit as a standing annual QA step if it improves 2025 walk-forward log-loss by ≥0.002.
