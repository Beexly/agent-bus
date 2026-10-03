# docs/arxiv-program/research/2026-09-21/arxiv-deep/0476-evaluating-realtime-probabilistic-forecasts-with-application.md

## What it is (1-2 sentences)
Yeh, Rice & Dubin (2020, arXiv:2010.00781v1): the definitive evaluation toolkit for continuously-updated probabilistic forecasts — calibration surfaces with Wilson–Bonferroni intervals, pointwise Lai-style Brier skill confidence intervals, and a novel functional L² skill test — validated by Monte Carlo simulation and applied to ESPN's real-time NBA home-win forecasts over two seasons. The corpus ledger verdict is ADOPT — directly implementable as GSE's live win-probability evaluation protocol against books and baselines.

## Key metrics/methods (formulas where given, else "not specified")
- Calibration surfaces: adaptive rank-based bins (M=10; bin reference p̃_j(t) = median forecast in bin, because in-play forecasts cluster near 0/1 late); Wilson intervals with Bonferroni correction over M bins; calibrated iff reference plane f(t,p)=p lies between upper/lower surfaces U_{1−α}(t,p), L_{1−α}(t,p).
- Summary statistics: U^min_{1−α}(t)=min_j[U(t,p̃_j)−p̃_j] ≥ 0 and L^max_{1−α}(t)=max_j[L(t,p̃_j)−p̃_j] ≤ 0; smoothed with 5%-of-game moving average.
- Pointwise skill CI: Δ̂_N(t)=N⁻¹Σ_i[L(Y_i,p̂_i^A(t))−L(Y_i,p̂_i^B(t))] (Brier); (Δ̂_N−Δ_N)/s_N → N(0,1) with s_N²(t)=N⁻¹Σ_i δ_i²(t)p_i(t)(1−p_i(t)); conservative CI Δ̂_N(t) ± z_{1−α/2}s_N(t)/√N using p(1−p)≤1/4.
- Functional skill test: H₀: ‖Δ_N‖²=0; ‖Z_N‖²=N‖Δ̂_N‖² →ᴰ Σ_{i≥1}λ_iχ²_i(1); λ_i conservatively estimated by eigenvalues of Ĉ_cons(t,s)=N⁻¹Σ_i[p̂_i^A(t)−p̂_i^B(t)][p̂_i^A(s)−p̂_i^B(s)]; p-value via Q_D=Σ_{i=1}^D λ̂_iχ²_i(1), D=10, Monte Carlo or Imhof (1961). INVALID for nested models (degenerate kernel).
- Assumptions: martingale-difference forecast errors; non-degenerate s_N² (non-nested, non-identical models); p(1−p)≤1/4 conservatism.

## Data sources named
- ESPN real-time home-win probability forecasts + play-by-play scores from espn.com/nba, NBA regular seasons 2017–2018 (train: 1,137 games, 354,749 processed events) and 2018–2019 (test: N=1,213 games, 396,991 events); overtime removed (<10% of games); forecasts linearly interpolated to curves p̂_i^ESPN(t), t∈[0,1].
- Benchmarks: CF (p̂=0.5), HomeWP (p̂=0.593, 2008–2017 home win rate), pointwise GLMs (logit/probit via R glm, IWLS): PgRS, LS, ScDnoInt, ScD, PgRSLS, PgRSScD — fit on 2017–18, evaluated rolling on 2018–19. RS_i = ESPN pregame home-win probability.

## Findings (numbers and facts, not vibes)
- Simulation (Table 3): under H₀ rejection rates slightly below nominal — e.g., OraBM1 vs OraBM2 at N=500: 0.089/0.030/0.003 at 10/5/1% (test slightly conservative); oracle vs noisy oracle power ≈1.000 at all levels. [TRUST-SIGNAL]
- Power analysis: PgRSScD vs PgRS power 1.000 even at N=100; vs ScD: 0.510/0.377/0.176 at N=100 → 0.995/0.982/0.907 at N=500; lesson: N≥500 needed to separate competitive models. [TRUST-SIGNAL]
- ESPN well-calibrated at all t; extremes calibrated — 555 games with p̂>0.995 at some t: home won 553 (0.9964); 343 games with p̂<0.005: home won 1 (0.0029). [TRUST-SIGNAL]
- ESPN significantly beats PgRS, ScD, LS, PgRSLS in aggregate, but ESPN vs simple logit PgRSScD: Brier-skill point estimates slightly favor the simple model except in the final moments, NOT significant at 5% at any t nor in aggregate — a proprietary in-play model's extra information adds no demonstrable skill. [OTHER]
- Variable importance: team strength dominates early, score difference dominates late. [SCHEME]
- Caveats in file: functional test invalid for nested models (GSE engine version A/B often is); one NFL season has 272 games — single-season in-play comparisons underpowered, pool across seasons; conservative p(1−p)≤1/4 bound is loose late-game. [TRUST-SIGNAL]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Calibration-surface + Wilson–Bonferroni protocol and U^min/L^max summaries → TRUST-SIGNAL: a formal live-calibration validation pipeline GSE lacks (map covers only pregame calibration; this fills the in-play gap). The adaptive rank-binning fix for late-game 0/1 forecast clustering applies directly to GSE's live win probs.
- Lai-style pointwise Brier skill CIs + Theorem 1 functional L² test → TRUST-SIGNAL: model-vs-model live comparison with formal p-values for GSE live vs books vs baselines.
- "Simple score+strength logit ≈ proprietary ESPN model" → OTHER (cross-sport caution): sets the complexity bar — GSE's live model must demonstrably beat a 2-covariate logit; adopt PgRSScD-equivalent as the permanent simple NFL baseline.
- Strength-early/score-late importance profile → SCHEME: in-play value decomposition across game fraction (pregame strength decays, live state dominates late).
- INFERENCE: the nested-model invalidity is a direct gap for GSE's engine versioning — the file's own improvement experiment proposes a Clark & McCracken (2015)-style adjustment for nested comparisons, which GSE would need to test engine N+1 vs N on live curves.

## Engine-actionable? (yes/no + one-line what)
yes — implement the in-play calibration-surface pipeline (U/L surfaces, M=10 rank bins, Wilson–Bonferroni) and the pointwise Brier-skill CI + functional L² test on pooled 2024–2025 NFL games (N≥500 per the power analysis) with an NFL PgRSScD logit (pregame GSE prob + live score diff) as the permanent simple baseline.
