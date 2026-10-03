# arxiv-program/research/2026-09-21/arxiv-deep/1703-cross-country-weather-mixed-effects.md
## What it is (1-2 sentences)
Deep read of arXiv:2405.09865 (Wilson & Wilson 2024) — Bayesian linear mixed-effects model of log finish times across 28 amateur cross-country races (8 courses, 5 seasons) with random athlete/course/season effects and rainfall (current + lagged month) fixed effects, estimating course difficulty and weather impacts via JAGS. Ledger verdict: ADAPT — directly adaptable template for NFL weather/field-condition effects, but the windspeed null is course-geometry-specific and must not transfer to NFL stadiums.

## Key metrics/methods (formulas where given, else "not specified")
- Model: Y_ijk = log(T_ijk) | μ_ijk, τ ~ N(μ_ijk, 1/τ); μ_ijk = λ + α_i + β_j + δ_k + γ(D_jk−d̄) + ρ_m R_m + ρ_{m−1} R_{m−1} (windspeed dropped; λ_w(W−w̄) term removed).
- α_i ~ N(0,1/τ_α) athlete, β_j ~ N(0,1/τ_β) course, δ_k ~ N(0,1/τ_δ) season random effects (corner constraints α_1=β_1=δ_1=0); diffuse Normal priors on fixed effects; Gamma priors on precisions; correlated prior on rainfall effects via Gamma-distributed decay φ<1: ρ_{m−1} ~ N(φm_ρ, v_{ρ−1}), φ ~ Gamma(a_φ,b_φ), a_φ ≤ b_φ.
- Inference: rjags/JAGS, 10k burn-in, 1M iterations thinned by 100 → 10k posterior samples. Windspeed dropped after null; log-pace robustness variant qualitatively identical. Validation: posterior predictive vs observed per-race histograms and quartiles (in-sample only; no out-of-sample).

## Data sources named
- 14,067 men's + 10,515 women's chip-timed finish times; 28 races on 8 courses (Alnwick, Aykley Heads, Druridge Bay, Gosforth, Herrington, Lambton, Thornley, Wrekenton); 2,668 unique men, 2,116 unique women; seasons 2017/18–2022/23 (2019/20 shortened, 2020/21 cancelled — Covid).
- Race distance: Garmin GPS (men ~10 km/3 laps; women = 2/3 of men's). Windspeed: Durham weather station, 2 pm race day, visualcrossing.com. Rainfall: Met Office Durham station monthly data (current + previous month) as underfoot proxy.
- Acknowledged measurement error: central-station weather vs course-level conditions; GPS distance error — not modeled (attenuation bias toward zero, may explain wind null).

## Findings (numbers and facts, not vibes)
- Current-month rainfall: +10 mm → +25 s (men, 47-min race) / +18 s (women, 38-min race); posterior median 0.001 per mm on log scale.
- Previous-month rainfall: +10 mm → +22 s (men) / +14 s (women) — lagged underfoot effect nearly as large as contemporaneous.
- Distance: +0.1 mile → +65 s (men) / +86 s (women); posterior median γ = 0.224 (men), 0.368 (women) per mile on log scale.
- Windspeed: posterior centered at 0 (−0.001 to 0.000) — NO effect, attributed to looped courses (headwind/tailwind cancel); NOT generalizable to open stadiums.
- Course effects vs Alnwick: hardest Herrington (+0.150 men / +0.191 women), Thornley (+0.153/+0.181); easiest Druridge Bay (−0.068/−0.057), Gosforth (−0.043/−0.029) — ordering differs from raw times, matching runners' qualitative opinions.
- Seasons: no pre/post-Covid trend; 19/20 and 21/22 slightly slower (+0.03 to +0.045 log). Posterior predictive quartiles match observed within ~1 min at all quartiles (Table 1).
- INFERENCE: NFL adaptation spec in read — module `weather/field_conditions.py`: log(total points) or log(offensive yards) = λ + offense/defense random effects + stadium random effect + week effect + temp + game-day precip + trailing-7-day precip, interacted with grass/turf; effort ~3–4 days. Acceptance gate: out-of-sample RMSE on 2025 totals improves ≥ 1.5% over no-weather baseline, trailing-rain-on-grass 95% CI excludes zero with correct sign, turf/dome effects ≈ 0.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- COACHING (ENVIRONMENT): weather/field-condition estimation layer for totals — stadium random effects, lagged rainfall → natural-grass degradation; stadium-specific wind coefficients (wind × bowl geometry/orientation) instead of one league-wide coefficient.
- SCHEME: field-condition interaction with surface/playing style (e.g., rain × grass concentrates scoring suppression).

## Engine-actionable? (yes/no + one-line what)
Yes — rebuild as a stadium-coordinate Bayesian mixed model for game totals: game-day + trailing-7-day precipitation × grass/turf with stadium random effects, validated out-of-sample on 2025 totals (paper's own in-sample-only limitation must be fixed).
