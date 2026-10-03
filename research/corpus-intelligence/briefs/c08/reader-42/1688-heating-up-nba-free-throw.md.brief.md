# docs/arxiv-program/research/2026-09-21/arxiv-deep/1688-heating-up-nba-free-throw.md
## What it is (1-2 sentences)
Pudaite (arXiv:1801.07104, 2018): reframes the "hot hand" as causal dynamics — repetition heats, interruption cools, fatigue/stress damp — estimated in the clean lab of NBA free throws with Bayesian hierarchical models. Verdict in ledger: ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- Model 1: Y_ijk ~ B(1, P_ijk); P_ijk = logistic(X_ijk); X_ij ~ N(μi, Σi); (μi,Σi) ~ Ψ1, EM-estimated (Simpson's-paradox control).
- Model 2: Z_ij = X_ij + Δ_h, Δ_h ~ N(0, ΣΔ); estimated ΣΔ = [[0.0402, 0.0080],[0.0080, 0.0346]] (SD 0.20/0.19 logit units, ρ=0.21).
- Model 3: minute-binned Kalman-filtered Δ_h(t) with Mahalanobis trend statistics for fatigue/stress.
- Estimands: δ12 = Pct2−Pct1 (repetition), cross-trip drops (interruption), Δ_h(t) trajectories.
## Data sources named
- NBA play-by-play 2000-01 through 2013-14 (14 seasons), 1,233 players; Gilovich–Vallone–Tversky (1985) Celtics data re-analysis.
## Findings (numbers and facts, not vibes)
- Repetition: 2nd FT +5.3pp over 1st on first trips (73.0%→78.3%, z=24.6, N=79,771); exactly-2 trips +4.6pp (73.2%→77.8%, z=46.56, N=382,031); 3+ trips: 78.1%→83.2%→85.0%; 46% more 1st than 3rd misses (1,016 vs 695).
- Interruption: 1st shot of 2nd trip 74.2% vs last of 1st trip 78.3% (cools), but above 1st-trip 1st shot 73.0% (+1.2pp retention, z=5.395).
- vs Arkes (2010) conditional +2.9pp (SE 0.8pp): author's unconditional repetition effect ~5–6pp, ~2× larger.
- Model 2: trip-to-trip displacement SD ≈ 3.5pp for a typical 75.4% shooter; improvement continues to ~6th–7th trip.
- Model 3 fatigue/stress: decline over game (Mahalanobis 3.5/2.9), steeper from minute 45 through OT — "suggestive" only, confounded by substitution patterns.
- Limitations: within-trip independence assumption; interruption unoperationalized; Model 2 ignores inter-player Δ_h variation; free-throw-specific, field-goal transfer is extrapolation.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Repetition/interruption causal vocabulary for player props (WR's 3rd target vs 1st target in a drive = heating; long bench stint = cooling): QB-BEHAVIOR (QB after long bench stint; per-play player performance dynamics).
- Coaching workload/snap-count decisions via touches × cumulative-snaps fatigue interaction: COACHING.
- Paper's key identification move (condition on the act of shooting, not the outcome) is a methodological trust signal for hot-hand claims: TRUST-SIGNAL (how to distinguish real heat from selection artifacts).
## Engine-actionable? (yes/no + one-line what)
yes — add repetition/interruption/fatigue features to NFL player-prop models (touch index within drive, plays since last touch, cumulative snaps, score leverage) via Bayesian hierarchical logistic, behind a numeric gate: player-adjusted within-drive repetition ≥ +2pp catch rate (|z|>3) AND between-drive interruption ≤ −1pp (|z|>2) on nflverse 2018–2024, else REJECT.
