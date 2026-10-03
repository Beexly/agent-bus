# docs/arxiv-program/research/2026-09-21/arxiv-deep/0623-nba-load-management-healthy-worker-survivor.md
## What it is (1-2 sentences)
A causal-inference study of whether NBA playing load causes injuries, using a marginal structural piecewise-exponential model (MS-PEM) with propensity-weighted cumulative exposure to correct the "healthy-worker survivor effect" — fragile players get rested, so heavy minutes look falsely protective. Ledger verdict: ADAPT — port the MS-PEM design to NFL snap/load data before trusting any naive load→injury coefficient.
## Key metrics/methods (formulas where given, else "not specified")
- MS-PEM: (1) logistic participation propensity model → stabilized inverse-probability weights (IPW); (2) piecewise-exponential (Poisson) outcome model on a discretized time grid; (3) spline-based weighted cumulative exposure (WCE) over lagged load
- Design: 20 time intervals, 10-game lag structure, 5-fold player-grouped CV, weights truncated at 1st/99th percentiles
- Identification under Robins marginal-structural-model assumptions: consistency, conditional exchangeability, positivity
- Comparators: naive Cox on recent 7-day load; propensity variants (logistic IPW, GBM IPW, ensemble, overlap weights)
## Data sources named
78,594 player-game records, 771 players, 2,439 injuries, NBA seasons 2022–23 through 2024–25 (event rate 3.10%); public box-score-derived minutes, injury reports, player/team/game covariates (no download link for the assembled panel).
## Findings (numbers and facts, not vibes)
- Naive Cox on recent 7-day load: HR 0.993, p < 0.001 — falsely implying each extra minute lowers injury hazard 0.7% (the survivor effect in one number)
- Empirical naive lag weights: lag 1 −0.096, lag 5 −0.134, lag 10 −0.089 (all negative, all misleading)
- Table 5 lag-one weights: naive −0.094; logistic IPW −0.023; GBM IPW −0.035; ensemble −0.028; overlap −0.021 — IPW attenuates toward zero but does not flip the sign with public covariates
- Simulation with true lag-one weight +0.004: naive HWSE-contaminated estimate −0.023 (wrong sign), no-selection estimator +0.0039 (recovers truth)
- Penalty sensitivity: CV-chosen penalty attenuated naive estimate only 1–2%; lighter α=0.1 gave 62.8–78.0% attenuation depending on propensity method — the "causal" answer is fragile to regularization choice
- Authors' bottom line: with public covariates latent-fitness confounding cannot be removed; the true sign remains uncertain
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- COACHING: rest decisions by teams observing private fitness signals are the selection mechanism; the mechanism is stronger in the NFL (practice reports, less formalized load management) — bias direction transfers, lag structure/load metric must be rebuilt around snaps/contacts
- TRUST-SIGNAL: any GSE load→injury coefficient estimated naively will inherit the survivor effect; IPW-corrected estimates serve as sanity bounds on injury-forecasting features
## Engine-actionable? (yes/no + one-line what)
Yes — replicate MS-PEM on nflverse snap-load lags + public injury reports: propensity model for participation, stabilized IPW truncated 1st/99th, piecewise-exponential injury hazard with spline WCE over 4–8 weekly lags; flag any load feature whose naive coefficient flips sign under IPW as survivor-contaminated. (~1–2 weeks effort per ledger.)
