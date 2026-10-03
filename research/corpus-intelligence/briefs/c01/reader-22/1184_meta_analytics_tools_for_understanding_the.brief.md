# arxiv-program/research/2026-09-21/arxiv-deep/1184-meta-analytics-tools-for-understanding-the.md
## What it is (1-2 sentences)
A "meta-analytics" framework that audits sports metrics themselves via three R²-style meta-metrics — Discrimination (does the metric differentiate players beyond noise), Stability (does it persist season-to-season), and Independence (does it carry unique information vs. other metrics) — plus empirical-Bayes shrinkage and PCA-based metric construction demos. Verdict in file: ADAPT — the audit toolkit GSE's 26-metric catalog has been missing.

## Key metrics/methods (formulas where given, else "not specified")
- Mixed-effects motivation: X_spm = μ_m + Z_sm + Z_pm + Z_spm + ε_spm, variance components σ²_SM, σ²_PM, σ²_SPM, τ²_M (sampling).
- Discrimination: D_sm = 1 − E_sm[V_spm[X]] / V_sm[X]; combined D_m = E_m[D_sm].
- Stability: S_m = 1 − E_m[V_pm[X] − V_spm[X]] / (V_m[X] − E_m[V_spm[X]]), with 0 ≤ S_m ≤ 1 (proved in appendix).
- Independence: I_mM = C_{m,m} − C_{m,M} C_{M,M}^{−1} C_{M,m} (eq. 8) via Gaussian-copula latent correlation matrix C (rank-likelihood estimation, Hoff 2007, R package sbgcop); greedy "independence curves."
- PCA fraction: F_k = (Σ_1^k λ_i)/(Σ_1^M λ_i) for redundancy analysis.
- Sampling variances V_spm[X] estimated by bootstrap resampling of games within seasons; EB shrinkage of 3P% via hierarchical Beta-binomial (gbp package).

## Data sources named
70 NBA metrics for all players/seasons from 2000 onward (basketball-reference.com); 40 NHL metrics from 2000 onward (hockey-reference.com). Player-season-metric 3D array X_spm, metrics normalized by minutes/possessions. Public sources; no football data.

## Findings (numbers and facts, not vibes)
- NBA: raw 3P% is the least discriminative and least stable metric studied; over 50% of between-player 3P% variation in a season is chance.
- Rebounds/blocks/assists are highly discriminative and stable (position indicators); rate stats are more stable but less discriminative than totals.
- Among rate metrics BPM beats WS/48, ORtg, DRtg on reliability; VORP beats total WS.
- Independence: NBA steals I ≈ 0.40 (60% explained by the other 69 metrics — most unique of those studied); NBA PCA F_15 ≈ 0.75 (15 of 65 components explain 75%); omnibus {WS,VORP,PER,BPM,PTS}: F_1 = 0.75 (one latent factor); defensive {DBPM,STL,BLK,DWS,DRtg}: F_1 = 0.51.
- NHL: takeaways I = 0.73 (only 27% explained by other 39 metrics); Corsi metrics more reliable than Fenwick; plus-minus non-discriminative; F_15 = 0.90.
- EB shrinkage of 3P% visibly improves its D and S (paper Fig. 2, Fig. 6).
- Authors' own caveat: meta-metrics measure internal reliability, not relevance — a stable/discriminative/independent metric can be useless for winning (their zip-code example); relevance (predictive/causal link to winning) must be paired with D/S/I.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (feature/metric QA): the missing reliability-audit layer for GSE's 26-metric catalog — run D/S/I on every gse-lab metric family (EPA splits, luck-layer metrics, QB aggressiveness) across seasons; flag metrics with D < 0.5 (chance-dominated) or I < 0.2 (redundant) for shrinkage/removal review.
- QB-BEHAVIOR (method transfer): INFERENCE — the discrimination/stability machinery applies directly to QB behavioral rate metrics (e.g., small-sample splits like situational INT rates, target concentration) to test whether observed QB-to-QB differences exceed sampling noise; EB shrinkage is the prescribed treatment for noisy QB rate stats.
- OTHER (relevance caveat as doctrine): the paper's own warning — never use D/S/I alone to drop a metric with proven predictive value; relevance overrides reliability — aligns with GSE's standing calibration-state discipline.

## Engine-actionable? (yes/no + one-line what)
yes — Build the D/S/I meta-metric pipeline over gse-lab metric families (nflverse-derived, 2015–2025), publish a metric-reliability report, and shrink/remove flagged metrics; ADOPT as standing annual QA only if acting on findings (≥3 flagged metrics) improves 2025 walk-forward log-loss ≥0.002.
