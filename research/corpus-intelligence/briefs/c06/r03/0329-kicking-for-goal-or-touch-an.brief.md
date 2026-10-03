# arxiv-deep/0329-kicking-for-goal-or-touch-an.md
## What it is (1-2 sentences)
Rugby union expected-points decision framework (arXiv:2512.00312v2, Watts & Pipping-Gamón 2026) for penalty kick decisions: two context-aware EP surfaces (lineout EP via linear regression; kick EP via GAM success surface + miss-continuation value) combined into a ΔEP indifference-frontier decision map, with per-decision regret accounting evaluated on a New Zealand vs South Africa case study. Verdict in file: ADAPT — rugby numbers don't transfer, but the ΔEP-indifference-frontier + regret-evaluation design ports to NFL 4th-down, dynamic-kickoff, and 2-point decisions.
## Key metrics/methods (formulas where given, else "not specified")
- EPlineout = β̂0 + β̂1·meter_line + β̂2·Card_Diff + β̂3·WinPct_Diff (multiple linear regression on next-score value of opening lineout phases).
- P(make | d, θ) = logit⁻¹{β0 + f(d,θ)}, 2D spline in distance and angle fit by GAM (logistic link, quasi-binomial, REML smoothing).
- EPkick(d,θ) = Pmake·3 + (1−Pmake)·EPmiss(d,θ); EPmiss from 22 m drop-out restart next-score values.
- ΔEP(x,y;dtouch) = EPlineout(xLO) − EPkick(x,y), xLO = max{5, x−dtouch}; dtouch ∈ {0,5,10,15,20,25} m; zero traces the indifference frontier. Regret: R = EPoptimal − EPactual.
## Data sources named
- 2018/19 Premiership Rugby phase-level event logs (Martinez-Arastey et al. 2025): 132 matches, 35,199 phases; 2,046 retained lineout observations after cluster subsampling (one per run_id group, Ỹ ∼ Uniform{Y1…Yn}).
- Quarrie & Hopkins (2015) penalty-kicking data: 582 international matches 2002–2011, 3,802 penalties in a 5 m × 5 m grid.
- 93 kick-restart observations for miss continuation; authors-collected 13 in-range penalty decisions from New Zealand vs South Africa (Sept 16, 2025).
## Findings (numbers and facts, not vibes)
- Lineout EP regression: Intercept 3.2545 (SE 0.2093, p<2e-16); meter_line −0.0586 (SE 0.0044, p<2e-16); Card_Diff 0.8802 (SE 0.3052, p=0.00397); WinPct_Diff 0.6503 (SE 0.3430, p=0.05809).
- Miss continuation values by zone: 2.75 (n=4), 1.24 (n=17), −0.63 (n=27), 1.24 (n=45); overall 0.76 (n=93).
- Case study: at 15 m from touch, 30 m out, lineout becomes preferable once expected touch gain > ~16 m; at 20 m gain: EP lineout 2.67 vs EP kick 2.42, ΔEP +0.25.
- All 13 penalties: total regret R = 1.39 points; proportion optimal decisions = 0.46; final 24–17 NZ (regret would not have swung outcome); most wrong decisions sat near the indifference frontier.
- Sensitivity (figures only, no numbers): kicks preferred more when down a player; lineouts more with numerical advantage; stronger teams get larger lineout EP.
- Limitations: selection bias (kicks only when makeable); club-phase data fused with a decade-older international kicking dataset; tiny continuation samples; EP not win probability (authors' own closing critique); no held-out validation of either surface.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- COACHING — per-decision regret ledger (R = EPoptimal − EPactual) as a season-long coaching decision-quality product ("coaching decision quality" weekly cards).
- SCHEME — 4th-down go/punt/FG ΔEP/ΔWP indifference frontiers with sensitivity grids (kicker strength, weather, team quality); dynamic-kickoff return-vs-touchback decision maps (closest rugby analog); 2-point conversion maps by score/time.
- TRUST-SIGNAL — the paper's EP-vs-WP critique means decision quality should be reported on win-probability scale where stakes matter.
## Engine-actionable? (yes/no + one-line what)
Yes — port the Δ-frontier + per-team regret accounting to NFL 4th downs on nflverse 2022–2025 with WP-scale payoff matrices; gate: regret rankings stable year-over-year (Spearman ρ ≥ 0.4) and ΔWP recommendations beating nfl4th by ≥0.05 realized-WP per decision.
