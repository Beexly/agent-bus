# arxiv-program/research/2026-09-21/arxiv-deep/0270-how-much-does-home-field-advantage.md
## What it is (1-2 sentences)
Deep-dive of Price, Cai, Shen & Hu (2022): a hierarchical causal model that identifies team-level and league-level home-field advantage via paired home/away differencing (the return fixture cancels the neutral-field nuisance parameter), applied to the 2020–21 English Premier League. Ledger verdict: ADAPT — the differencing trick transfers to NFL division games, re-fit on multi-season unbalanced schedules.
## Key metrics/methods (formulas where given, else "not specified")
- Match model: Y_{i,j} = α_{i,j} + β_i + ε_{i,j} (eq. 3), Y_{i,j} = net stat difference (home minus away); α_{i,j} = hypothetical neutral-field expected outcome (nuisance); β_i = team i's causal home effect; ε ~ N(0, σ₀²).
- Return fixture: Y_{j,i} = −α_{i,j} + β_j + ε_{j,i} (eq. 5); paired cancellation: Y_{i,j} + Y_{j,i} = β_i + β_j + ε_{i,j} + ε_{j,i} (eq. 6).
- Linear system: H β + ε = Y (eq. 7); OLS β̂ = (HᵀH)⁻¹HᵀY; league effect Δ̂ = Σ_i β̂_i/n (eq. 8).
- Hierarchy: β_i ~ N(Δ, σ²) (eq. 4); exact normality of β̂ − β (Prop. 3.1) with covariance σ̂²_β(HᵀH)⁻¹, σ̂²_β = 2‖Hβ̂ − Y‖²₂/N; team CIs (eq. 9); unbiased league-variance σ̂² via law of total variance (eq. 10); league CI Δ̂ ± z_{α/2}√(σ̂²/n) (eq. 11).
- Causal definition: β_i = E_j{Y*(δ_i=1,δ_j=0) − Y*(δ_i=0,δ_j=0)} (eq. 1); Δ = E_i{β_i} (eq. 2); assumptions (A1) SUTVA, (A2) ignorability (auto-holds: schedule pre-determined), (A3) non-monotonicity (no transitivity of dominance).
- Validation: 1,000-replicate Monte Carlo (n ∈ {10,20,40,80}, σ₀² ∈ {0.5,1,2}, Δ=1, β_i ~ N(1,0.3²), two α_{i,j} scenarios).
## Data sources named
- EPL 2020–21: 380 games, 20 teams, full double round-robin, from Hudl & Wyscout (proprietary; not publicly downloadable). Eleven per-game stats: Attacks w/ Shot, Defence Interceptions, Reaching Opponent Box, Reaching Opponent Half, Shots Blocked, Shots from Box, Shots from Danger Zone, Successful Key Passes, Touches in Box, Expected Goals (XG), Yellow Cards. No code/data link; method fully specified in text.
## Findings (numbers and facts, not vibes)
- Simulation: bias tiny (e.g., scenario 1, n=20, σ₀²=1: bias −0.0059; scenario 2, n=80, σ₀²=2: bias −0.0010); coverage approaches nominal 95% as n grows (n=10: 0.882–0.913; n=20: 0.914–0.950; n=80: 0.947–0.955); SV ≈ MV in all rows (e.g., scenario 1, n=40, σ₀²=1: SV 0.0030, MV 0.0030).
- EPL league-level Δ̂ (Δ̂ / σ̂ / p): Attacks w/ Shot 1.568 / 0.556 / 0.005; Defence Interceptions −1.997 / 1.200 / 0.096; Reaching Opponent Box 1.732 / 0.608 / 0.004; Reaching Opponent Half 3.592 / 0.949 / 0.000; Shots Blocked 0.350 / 0.329 / 0.287; Shots from Box 1.066 / 0.379 / 0.005; Shots from Danger Zone 0.786 / 0.279 / 0.005; Successful Key Passes 0.489 / 0.237 / 0.039; Touches in Box 2.253 / 1.043 / 0.031; XG 0.232 / 0.092 / 0.011; Yellow Cards −0.026 / 0.126 / 0.834.
- 7 of 11 statistics significant at α=0.05, ALL offense-side (offensive chance creation); defensive stats (interceptions, blocked shots) and the referee proxy (yellow cards) not significant; goals showed no significant HFA.
- Raw that season: 144 home wins (37.89%) vs 153 away wins (40.26%) — no raw home win edge — yet causal offensive effects remain positive; home 514 goals (50.19%) vs away 510 (49.81%) of 1,024.
- Teams with most significant team-level statistics: Fulham, Brighton, Newcastle United, Wolverhampton Wanderers — all bottom-half finishers (Fulham relegated): weaker teams retain larger home advantage; top teams dominate regardless of venue.
- Caveats: 2020–21 was a COVID season (empty/reduced crowds — may explain no officiating-bias/goal-level HFA); only one season, n=20; A3 non-monotonicity is strong and evidence-light; NFL schedules are not double round-robins (only division pairs give clean home+away).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Paired-difference causal decomposition of home-field advantage into team-specific offensive/defensive/referee components — GSE has no causal HFA module; closes a gap in the map's home-field lane (OTHER)
- "Weaker teams retain larger venue dependence" → venue-dependence rankings as matchup content (which teams' offenses collapse on the road) and a team-specific road-penalty input to the game model (OTHER)
- Time-varying extension: crowd-size + travel-miles moderators on β_{i,s} with the 2020 zero-crowd COVID season as a natural experiment → crowd-adjusted team-specific HFA coefficient replacing a flat +2.5-point home edge (OTHER, INFERENCE: paper proposes crowd as future direction; the 2020-natural-experiment design is the deep-dive's)
## Engine-actionable? (yes/no + one-line what)
yes — build the division-pair HFA module on nflverse 2018–2025 (offensive/defensive EPA/play, success rate, penalty margin as outcomes), gated on offensive-EPA Δ̂ > 0 (p<0.05) in 2020–22 with sign persisting on 2023–24 holdout.
