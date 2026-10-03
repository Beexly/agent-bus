# docs/arxiv-program/research/2026-09-21/arxiv-deep/0957-pep-tackle-value-prevented-expected-points.md

## What it is (1-2 sentences)
ArXiv 2407.08508 (Bajons, Koslik, Michels, Ötting, 2024): assigns every NFL tackle a value — Prevented Expected Points (PEP) — by computing the counterfactual end-of-play yard-line density with the tackler removed from the tracking frame, then fits a mixed-effects model to estimate individual tackling ability.

## Key metrics/methods (formulas where given, else "not specified")
- PEP (eq. 3): PEP = E[g(Y)|x_removed] − g(y₀), where y₀ is the observed end-of-play yard line (EOPY); alternative eq. 4: PEP_alt = E[g(Y)|x_removed] − E[g(Y)|x₀] (conditional treatment effect); the paper uses PEP (not alt) for player evaluation.
- Conditional density of EOPY: random forest regression (N = 1000 trees, R ranger default hyperparameters, untuned); tree predictions treated as samples from the conditional density (non-parametric, captures multi-modality and heteroscedasticity). Trained on 8 weeks / held out 1 week, nine folds.
- EP model: EP = E[Y|X] = Σ_y y·P(Y=y|X), y ∈ {−7, −3, −2, 0, 2, 3, 7}; XGBoost multi-class trained on 2011–2021 play-by-play, evaluated on 2022; inputs: adjusted LOS, yards to go, score differential, down, quarter, home indicator, timeouts remaining per team.
- Player strength: GAMLSS mixed-effects, PEPᵢ ∼ SST(μᵢ, σ, ν, τ) (4-param skew-t selected by wormplots over Normal and TF); μᵢ = xᵢβ + T_it + B_ib + O_io with random intercepts for tackler, ball carrier, offensive team; fixed effects for position, short-yardage (<2 yds), 4th down, 4th quarter, turnovers, pass result, ball-carrier position. Uncertainty via 1000 bootstrap samples resampling full drives. Player analysis restricted to tacklers with >10 tackles.

## Data sources named
- NFL Big Data Bowl 2024 tackles competition tracking data (public via Kaggle; high-resolution positions/velocities); EP model trained on nflfastR/nflverse play-by-play 2011–2021, evaluated on 2022. No code URL stated. Run-play-only robustness subset: 5,889 tackles (Appendix A.3).

## Findings (numbers and facts, not vibes)
- RF out-of-sample: RMSE 5.74, MAE 3.13 on held-out weeks — "similar to existing approaches (Yurko et al. 2020)".
- EP model: MAE 3.6391 vs Carl & Baldwin's 3.6395 — on par (a 0.0004 difference).
- Example play: true EOPY = 12-yard line → EP 5.41; hypothetical (tackler removed) density mass in end zone → mean EP 6.2; PEP = 0.79.
- Cumulative PEP top 20 (Appendix A.1): ILB/LB and safeties dominate — e.g., a CB at 21.685 on 28 tackles, Bobby Okereke (ILB) 20.369 on 63, Ryan Neal (SS) 20.300 on 25, Adrian Amos (FS) 20.179 on 31, Tremaine Edmunds (ILB) 19.035 on 47, Derwin James (FS) 18.625 on 55.
- Position finding: ILB/SS highest cumulative PEP (tackle most); DE/NT/DT low cumulative PEP (misses remediated by others); on AVERAGE PEP, defensive backs (CB/SS/FS) overtake ILBs (last line before the TD).
- Mixed-model top-10 ILB (bootstrap medians) includes the top-3 2022 tackles leaders — Nick Bolton, Foyesade Oluokun, Jordyn Brooks — with narrower bootstrap distributions (less variance). Top DTs: Dexter Lawrence, Aaron Donald narrow; Osa Odighizuwa, Broderick Washington surprisingly in top 10 but with wide distributions (flagged uncertain).
- Position-free top-20 ranking: top 10 mostly cornerbacks — authors explicitly flag the caveat that CBs can generate PEP by allowing a catch then tackling (rewards last line of defense, not coverage quality). Run-play-only refit: a cornerback pops to #1, fewer CBs overall in top ranks.
- Authors' own gaps: missed tackles are NOT punished (only real tackles scored; Appendix A.4 sketches the extension); run/pass plays conflated in the main model; counterfactual validity caveat (removing the tackler ≠ a real missed tackle — other defenders' reactions change); RF feature list unstated; half-season sample; no comparison to existing tackling metrics (stops, PFF grades) — no demonstrated incremental value.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- PEP pipeline as a defensive-evaluation instrument for the IDP/tackle-prop lane: IDP rankings, tackle-prop edges (high PEP/tackle players with low market tackle lines), opponent scouting (OTHER)
- Counterfactual-removal framing ported to other defensive events (INFERENCE: the paper only scores tackles; extension to blocks/pressures is the reader's suggestion, not a file finding) (SCHEME)
- Score missed tackles by inverting the counterfactual (E[g(Y)|x₀] − E[g(Y)|x_made]) to build a net tackling metric (PEP_made − PEP_missed) — the authors' own stated gap, closing it and testing whether it predicts future missed-tackle rate better than PFF grades (OTHER)
- Split the mixed model by run/pass to remove the CB catch-and-tackle bias (SCHEME)

## Engine-actionable? (yes/no + one-line what)
Yes — build the counterfactual-removal RF + per-tree EP mapping + GAMLSS pipeline on Big Data Bowl tracking data for IDP/tackle-prop edges, gated on EOPY MAE ≤ 3.5 and the tackler intercept predicting second-half tackles per snap with out-of-sample R² ≥ 0.05 above the raw-tackle-rate baseline.
