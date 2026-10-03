# docs/arxiv-program/research/2026-09-21/arxiv-deep/1303-spatial-modeling-heavy-precipitation-max-stable-processes.md
## What it is (1-2 sentences)
Deep-read ledger of Oesting & Naveau (2020), arXiv:2003.05854v1, on coupling ensemble rainfall forecasts with weather-station records inside a max-stable-process framework to simulate coherent spatial fields of extreme precipitation. Verdict: ADAPT — the tail-dependence machinery ports to correlated extreme-weather scenarios across NFL stadium networks.
## Key metrics/methods (formulas where given, else "not specified")
- Max-stable processes with unit Fréchet margins, data-driven spectral (basis) functions built from forecast fields. Five models: A — max-linear on all N forecast maps (normalized); B — max-linear on max-spectral functions above empirical 90%-quantile threshold (N(u) = 1819 maps); C — Reich–Shaby (2012) construction with nugget parameter α ∈ (0,1), spectral functions from B; D — max-linear mixture Y(s) = max{a·Y_noise(s), (1−a)·Y_B(s)}, s ∈ S, a ∈ [0,1]; E — classical Brown–Resnick with anisotropic power variogram plus nugget (5 parameters: σ², b1, b2, θ, β).
- Extremal coefficient (pairwise, Eq. 5) characterizes extremal dependence; triplewise extension via the empirical multivariate weighted F-madogram.
- Model E variogram: γ(h) = σ²·1{‖h‖=0} + (rotated anisotropic power term with b1, b2, θ ∈ (−π/4, π/4), β ∈ (0,2]).
- Assumptions: unit Fréchet margins after transformation; threshold exceedances of forecast fields carry the extremal dependence structure (generalized Pareto process theory); semi-parametric max-linear combination of 1819 spectral functions.
- Fit = minimize RMSE of model-implied pairwise extremal coefficients vs empirical F-madogram estimates. Uncertainty: parametric bootstrap — 190 block maxima simulated from each fitted model 500 times; gray bands = 2.5–97.5% quantiles of the implied coefficients.
## Data sources named
110 Météo-France weather stations in southern France; fall seasons 1980–2017, each season split into 5 blocks → 190 block maxima. Forecast side: PEARP ensemble forecast fields (Météo-France NWP) for fall seasons 2012–2017, identified spatially to closest grid cell per station. Code: not stated in paper.
## Findings (numbers and facts, not vibes)
- Model A fails: using all forecast maps misrepresents extremal dependence (dry days should not build basis functions).
- Model B overstates dependence for strongly dependent station pairs (missing nugget effect).
- Models C and D capture observed pairwise extremal coefficients well — with 0, 1, 1 fitted parameters for B, C, D respectively.
- Supplement (triplewise, out-of-fit validation): RMSE Model C = 0.154, Model D = 0.137, Model E = 0.167; C and D nearly identical, E deviates most.
- Model E (5 parameters) cannot capture non-stationarity by construction; the data-driven C/D beat it with one parameter each.
- Limitations: single region (southern France), single season (fall); orography-driven non-stationarity may not transfer; 1819 spectral functions are data-hungry at fit time.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Tail-dependence complement to the weather lane (ledgers 1301 calibration, 1305 forecasting): models how extremes co-move across space — no max-stable / multivariate-EVT material exists elsewhere in the corpus [OTHER]
- Spec'd adaptation: ensemble forecast fields over NFL stadium locations as spectral functions → simulate joint extreme-weather scenarios (wind/gust maxima) across all stadiums in a slate week, feeding correlated tail weather into Monte Carlo totals/projection simulations [OTHER]
- The bootstrap-band diagnostic (2.5–97.5% bands on implied extremal coefficients) is proposed as the acceptance test for any spatial-extremes model before it touches the engine [OTHER]
## Engine-actionable? (yes/no + one-line what)
Yes — build a data-driven max-stable pipeline on US mesonet gust data at NFL stadium coordinates: fit pairwise extremal coefficients of game-day wind/gust maxima and use the fitted model to simulate joint extreme-weather scenarios for correlated tail-weather Monte Carlo on totals.
