# arxiv-program/research/2026-09-21/arxiv-deep/0930-luck-skill-decomposition-tournaments.md
## What it is (1-2 sentences)
Ledger read of arXiv:1910.03400 (Sobkowicz et al., 2019, Physica A 2020), an agent-based tournament model (performance = linear mix of talent and luck) fitted to empirical Olympic 100m dash results from 13 Games (1968–2016) to decompose success into talent vs chance. Verdict: ADAPT — gives GSE a principled noise-floor estimator: the irreducible luck share (1−a) estimated from within-unit run-to-run variability, usable as a calibration floor and Kelly sizing cap.
## Key metrics/methods (formulas where given, else "not specified")
- P_j(t) = a·T_j + (1 − a)·L_j(t); T_j ∈ [0,1] fixed per agent (uniform or truncated Gaussian σ_T ∈ {0.1, 0.2}, mean 0.5); L_j(t) ~ U(0,1) i.i.d. per round; 1,000,000 agents, grouped in tens, 6 rounds, repeated 1000 times per configuration.
- Run-to-run difference: difference of two subsequent runs has symmetric triangular distribution on [−(1−a), (1−a)] with SD = (1 − a)/√6 — the moment identity that estimates luck share without the full ABM.
- Injustice metric: Z_t = Q / ΔTL_t, ΔTL_t = TL(t+1) − TL(t), normalized so Z_1 ≡ 1.
## Data sources named
Olympic 100m results: 13 Games (Mexico City 1968 → Rio 2016), men and women, raw run times per round; source SportsReference (2018). National championships: 70 countries, 1980–2006; source GBRAthletics (2018). Performance rescaled as p = t_WR / t (world-record time at race date ÷ run time).
## Findings (numbers and facts, not vibes)
- Best-fit parameters: men σ_T = 0.15, a = 0.96; women σ_T = 0.14, a = 0.94.
- Headline: random luck accounts for ~4% of performance for men and ~6% for women at the Olympic level — presented as a strong lower bound for less controlled domains (INFERENCE: team sports have larger luck shares).
- Stage averages matched within ~0.007 everywhere: model men 0.935/0.968/0.975 vs empirical 0.934/0.959/0.975 (RO+QF/SF/FIN); women 0.908/0.949/0.962 vs empirical 0.915/0.947/0.959.
- Individual variability: model-predicted SD = 0.04/√6 ≈ 0.016 (men), 0.06/√6 ≈ 0.024 (women) vs empirical 0.012–0.013 for both ("remarkably close" per the paper; women's empirical notably below model prediction).
- Lucky streaks (σ_T=0.2, a=0.5): of 1000 final winners, 852 were moderately lucky (L > 0.5) in all 6 rounds; 232 were very lucky (L > 0.75) in all 6; almost no winner moderately lucky in fewer than 5 of 6 rounds.
- Talent among winners: practically no agent with talent < 0.5 won round 3; cutoff ~0.7 for round 4, ~0.8 for round 5 — despite 50% per-round luck weight.
- Injustice metric: with linear payoff growth, for a=1, σ_T=0.2, normalized Z_t reaches 2700 for finalists vs the winner.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (calibration): estimated luck share (1−a) is the floor under which no model's Brier/log-loss can go — no team-game probability may imply less variance than the luck share permits; shrink toward the noise floor instead of toward 0/1.
- OTHER (sizing): cap fractional-Kelly growth rates at the talent-share a — never size as if the talent component were the whole edge (connects to the Kelly lane, ledger 0821).
- TRUST-SIGNAL: numeric gate — ADAPT confirmed if the NFL luck-share estimate is stable (±0.1 across rolling 5-year windows 2010–2025) and the implied entropy floor improves log-loss on 2023–2025 holdout by ≥0.005; reject if unstable or no log-loss gain.
- OTHER (improvement): replace uniform luck with a two-component mixture (routine noise + rare shocks — injuries, weather) fit to consecutive-game difference kurtosis; the shock component maps onto GSE's causal-injury and weather lanes.
## Engine-actionable? (yes/no + one-line what)
Yes — build the moment-matching luck-share estimator on nflverse margins vs closing spreads (2010–2025): within-team consecutive-game spread-residual differences → invert (1−a) ≈ SD·√6; use as calibration entropy floor and Kelly cap; 1–2 days.
