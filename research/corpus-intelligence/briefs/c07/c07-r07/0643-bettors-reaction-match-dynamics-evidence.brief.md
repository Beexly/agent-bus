# arxiv-program/research/2026-09-21/arxiv-deep/0643-bettors-reaction-match-dynamics-evidence.md
## What it is (1-2 sentences)
Inferential study of whether in-play bettors update priors on in-match dynamics ("technical analysis") or only pre-game strength ("fundamental analysis"), using a beta-inflated state-space model with P-spline time-varying coefficients on per-minute Bundesliga relative stakes (Michels, Ötting, Langrock, 2022, arXiv:2202.10085). Ledger verdict: ADAPT — the beta-inflated SSM with momentum memory is a transferable framework for modeling NFL in-play handle/line dynamics and bettor overreaction.
## Key metrics/methods (formulas where given, else "not specified")
- Observation: y_t ~ BEINF(μ_t, σ, p, q) — beta-inflated distribution (handles y_t = 0 or 1 exactly), f(y_t) = p if 0; (1−p−q)h(y_t) if 0<y_t<1; q if 1; h beta density with a = μ_t(1−σ²)/σ², b = (1−μ_t)(1−σ²)/σ².
- Baseline: μ_t = logit⁻¹(α_0 + α·prewindiff + g_t); state: g_t = φ g_{t−1} + β·vaepdiff_{t−1} + ω η_t, η_t iid N(0,1), φ ∈ (−1,1) — VAEP enters lagged and persists through φ ("momentum memory").
- Extended model: time-varying α_t, β_t via P-splines (K=10 cubic B-splines, second-difference roughness penalty; λ_α, λ_β chosen by AIC over 7×7 grid {0.05,…,500}²).
- Likelihood: fine state discretization (Kitagawa 1987) → m-state HMM, forward algorithm O(m²T).
- Model comparison via AIC (no held-out test); one-step-ahead stake forecasts; in-sample threshold betting strategy on tied-at-halftime matches.
## Data sources named
Betting: in-play stakes on all 306 matches of 2017/18 German Bundesliga from a large European bookmaker, 1 Hz → 1-minute intervals; relative stakes on home team per minute: N = 306 series × up to 85 minutes = 26,010 observations (draws excluded; proprietary, not public). Events: WyScout 1 Hz event data, public via Pappalardo et al. 2019 (Scientific Data); VAEP values from gradient-boosted trees trained on five seasons + one World Cup + one European Championship. Covariate summaries: relativestake mean 0.493 (sd 0.313); prewindiff mean 0.139 (sd 0.317, range −0.740–0.851); vaepdiff mean 0.004 (sd 0.161, range −1.091–1.167).
## Findings (numbers and facts, not vibes)
- Baseline SSM: φ̂ = 0.968 [0.964; 0.971] (strong persistence of market sentiment); ω̂ = 0.249 [0.238; 0.261]; σ̂ = 0.300; α̂_0 = −0.195 [−0.278; −0.113] (away-team stake bias at equal odds — bettors underestimate home advantage); α̂ (prewindiff) = 2.395 [2.151; 2.640]; β̂ (vaepdiff) = 0.600 [0.550; 0.651].
- Varying-coefficient: ζ̂_1 (scorediff) = 0.234; ζ̂_2 (winprobteam) = 0.336; chosen λ_α = 1, λ_β = 5. Pre-game strength effect positive throughout but decreasing approximately linearly over time; VAEP effect slightly positive in first half, then rapidly increasing in second half — bettors overweight late in-game momentum.
- AIC comparisons: vs no-prewindiff ΔAIC = 339.17; vs no-vaepdiff ΔAIC = 522.04; time-varying favored by ΔAIC = 270.62.
- Strategy (1€ bets on home team when tied at HT and vaepdiff > threshold), mean returns: threshold >0.02: −0.27 (45–60), −0.08 (60–75), −0.01 (75–end); >0.05: −0.14, −0.28, +0.32 — mostly negative, some substantially below the ~5% vig → momentum overreaction by bettors.
- Case study (HSV vs Werder): live win probabilities from bookmaker odds barely respond to VAEP swings — "changes in the win probability are almost exclusively resulting from the time remaining" — bookmakers do not price in-play momentum the way bettors bet it.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Momentum-overreaction detection for live-betting value flags (bookmaker prices time-remaining, bettors bet momentum): OTHER
- AR(1) market-sentiment state as a steam/unusual-handle detector (observed stakes outside 99% forecast quantile): TRUST-SIGNAL
- NFL VAEP analogue from nflverse per-play EPA/WPA: OTHER
- Time-varying coefficient shape (momentum coefficient rising in second half) as replicable NFL hypothesis: OTHER
## Engine-actionable? (yes/no + one-line what)
Yes — replicate the BEINF-SSM on NFL using Betfair Exchange in-play volume (public API) as the handle target and per-drive EPA-diff as the momentum term; ADAPT if the momentum-SSM beats the no-momentum SSM on 2024 data with the β_t second-half rise replicating, and the momentum-vs-market divergence rule yields positive CLV (medium effort).
