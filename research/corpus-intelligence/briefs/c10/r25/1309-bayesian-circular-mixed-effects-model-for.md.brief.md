# arxiv-program/research/2026-09-21/arxiv-deep/1309-bayesian-circular-mixed-effects-model-for.md
## What it is (1-2 sentences)
Deep read of Nguyen & Yurko (2025, arXiv:2507.06122): a Bayesian circular mixed-effects model of frame-level turn angles for NFL ball carriers using NFL Big Data Bowl 2025 tracking data, estimating per-player turn-angle variability (von Mises concentration κ) as a "shiftiness" measure with uncertainty quantification. Verdict: ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- φ_ijt ~ vonMises(μ_ijt, κ_ijt); tan(μ_ijt/2) = α₀ + x_ijtᵀβ; log κ_ijt = γ₀ + z_ijtᵀψ + u_j; u_j ~ N(0, σ²_p[j]) (position-specific random-effect variance).
- b_t = atan2(y_{t+1} − y_t, x_{t+1} − x_t); φ_t = b_t − b_{t−1}. Higher κ = less variability = straighter runner.
- Fit: Stan via brms, NUTS, 4 chains × 3,500 iterations (1,500 burn-in), 8,000 posterior draws; weakly informative half-t₃ priors; R̂ ≈ 1.
## Data sources named
- NFL Big Data Bowl 2025 tracking data (Kaggle), first 9 weeks of 2022 NFL season: 9,480 plays / 136 games; 5,431 rushing attempts; 4,049 pass plays. Frame-level x, y, speed, acceleration, distance, orientation, direction, event tags at 10 Hz.
- 40-yard dash combine times via nflreadr.
- Reference code: https://github.com/qntkhvn/turn-angle
## Findings (numbers and facts, not vibes)
- Speed → higher concentration: ψ̂_s = 0.709, 95% CI [0.705, 0.713] (faster = straighter).
- Acceleration → lower concentration: ψ̂_a = −0.094, CI [−0.101, −0.087]; distance covered: ψ̂_dis = −0.015, CI [−0.016, −0.014].
- Run plays: ψ̂_run = 0.044, CI [0.011, 0.078]; WR: ψ̂_WR = −0.134, CI [−0.200, −0.065]; TE: ψ̂_TE = 0.064, CI [−0.021, 0.151] (overlaps 0).
- Random-effect SD: σ̂_RB = 0.135 [0.111, 0.164]; σ̂_TE = 0.300 [0.234, 0.378]; σ̂_WR = 0.304 [0.257, 0.355] — WR/TE far more heterogeneous than RB.
- Eye-test alignment: Justice Hill most variable RB, Jonathan Taylor least; DK Metcalf straight-line; George Pickens most variable WR; Kittle/Pitts/Kelce top-5 most variable TEs. Correlation with combine 40 time r = 0.135.
- No overlap between 95% CIs of top vs bottom players within RB and WR — estimates discriminate reliably.
- No train/test predictive split (descriptive only); no year-over-year stability analysis; 10 Hz may alias the fastest cuts.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Per-player "shiftiness" posteriors as an evasion/YAC feature (QB-BEHAVIOR, OTHER)
- WR/TE turn-angle heterogeneity >> RB heterogeneity (OTHER)
- Speed-straightness tradeoff quantified at frame level (OTHER)
## Engine-actionable? (yes/no + one-line what)
Yes — extract posterior player concentration random effects as a per-season "shiftiness" feature for YAC/broken-tackle/missed-tackle modeling, gated on out-of-sample R² gain ≥0.02 or α=0.05 significance; extend to pre-catch WR route sequences.
