# arxiv-program/research/2026-09-21/arxiv-deep/0655-modeling-outcomes-soccer-matches-tvc-bradley-terry.md
## What it is (1-2 sentences)
Deep-read ledger of Tsokos et al. (2018) "Modeling outcomes of soccer matches" — the 2017 Machine Learning Journal "MLS challenge" entry comparing Bradley–Terry extensions (constant, linear-feature, time-varying-coefficient, smooth time-interaction) and a hierarchical Poisson log-linear model. Verdict: ADAPT the time-varying-coefficient BT (feature weights that change linearly with games played) and the walk-forward-plus-meta-analysis validation framework.

## Key metrics/methods (formulas where given, else "not specified")
- BT strength specs: BL λ_it = β h_it (Eq. 1); CS λ_it = α_i + β h_it (Eq. 2); LF λ_it = Σ_k β_k x_itk (Eq. 3); TVC λ_it = Σ_{k∈V} γ_k(m_it) x_itk + Σ_{k∉V} β_k x_itk with γ_k(m_it) = α_k + β_k m_it (Eq. 4) — equivalently LF + {m_it x_itk} interactions; AFD smooth bivariate thin-plate spline time interactions via mgcv (Eq. 5); draws via ordinal cumulative-link or Davidson extension.
- HPL: hierarchical Poisson log-linear for goal counts with attack/defense + AR(1) across seasons, fitted with INLA (Eq. 7).
- Scoring: Ranked Probability Score RPS = (1/(r−1)) Σ_{i=1}^{r−1} Σ_{j=1}^{i} (p_j − a_j) (Eq. 8).
- Meta-analysis synthesis: S_i | U_i ~ Normal(α + U_i, σ̂_i²), U_i ~ Normal(0, τ²); α̂ = Σ w_i s_i / Σ w_i, w_i = 1/(σ̂_i² + τ̂²).

## Data sources named
52 leagues, 35 countries, >200,000 matches (nearly all leagues since 2008); 16 features (home, newly promoted, rest days, form last 3/9, matches played, points tally, goal difference, goals scored/conceded per match, prior-season points/goal difference, pairwise-comparison rankings, season/window/quarter). MLS challenge data at osf.io/ftuva (Berrar et al. 2017). R packages: BradleyTerry, mgcv, R-INLA.

## Findings (numbers and facts, not vibes)
- Ranked probability score (validation / challenge test): BL 0.2242/0.2261; CS 0.2112/0.2128; LF 0.2088/0.2080; TVC 0.2081/0.2080; AFD 0.2079/0.2061; HPL 0.2073/0.2047 (best).
- Validation-test correlation 0.973 (excluding BL) — the temporal validation framework accurately estimated unseen performance.
- Only goal difference and last-season points tally had time-varying coefficients significantly ≠ 0 (Wald p < 0.001); TVC-Ordinal was the submitted model.
- HPL RMSE on actual scores: 1.0011 (SE 0.0077) vs baseline 1.0331 (SE 0.0083).
- Home teams scored 304,918 goals vs away 228,293.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: dynamic ratings — port TVC to NFL as {week × feature} interactions (prior-season rating weight decays as current-season games accumulate; early-season form weight high then decays); port HPL's AR(1)-across-seasons attack/defense as a cleaner dynamic team-strength model than rolling averages.
- OTHER: evaluation process — the 17-temporal-experiments + jackknife + DerSimonian-Laird meta-analysis protocol is a template for GSE's model-comparison harness across seasons with proper uncertainty.

## Engine-actionable? (yes/no + one-line what)
Yes — implement TVC as logistic BT with {week × feature} interactions for {prior-season rating, current-season point differential, rest days} on nflverse data, walk-forward 2018–2024, gated on mean log-loss improvement ≥0.005 with jackknife CI excluding zero; adopt the validation harness as standard model-comparison infrastructure regardless.
