# docs/arxiv-program/research/2026-09-21/arxiv-deep/0579-a-bayesian-mixture-model-approach-to.md

## What it is (1-2 sentences)
Deep read of Sawczuk, Palczewska, Jones & Palczewski (2022, arXiv:2212.10904v1), which builds a smooth Expected Possession Value (EPV) surface for rugby league using a Bayesian Mixture Model with fixed interpolation weights and learned per-centre outcome probabilities, plus actual-vs-expected (AE) player ratings from it. Ledger verdict: ADAPT — port the fixed-weight BMM machinery to a smooth NFL expected-possession-value surface over field coordinates, replacing rugby outcomes with NFL drive outcomes.

## Key metrics/methods (formulas where given, else "not specified")
- Bayesian Mixture Model: 33 centres (30 field of play at x ∈ {0,20,35,50,70}, y ∈ {−10,20,35,65,90,100}; 3 in try area at x ∈ {0,35,70}), each holding a 5-Dirichlet probability vector over possession outcomes (converted try, unconverted try, penalty goal, drop goal, no score).
- Location probability: P(s;x,y) = Σ_k z_k(x,y) P_k(s); weights z_k by bilinear interpolation among the 4 surrounding centres (field) or linear interpolation between 2 nearest centres (try area); P_k ~ Dirichlet(α), priors independent between centres; posteriors via MCMC (PyMC3 v3.11.4).
- EPV(x,y) = Σ_s P(s;x,y)·Points(s), Points = converted 6, unconverted 4, penalty goal 2, drop goal 1, no score 0; posterior-mean EPV^μ and SD-propagated EPV^σ surfaces reported.
- Hierarchy: league model first (human-defined priors), then 24 team attacking/defending models with Dirichlet α priors from MLE of the league posterior.
- Player AE rating: (Actual return − Expected return) / (team median possessions per fixture), expected return from league-model EPV at action locations.
- Assumptions: one possession outcome per possession; weights fixed not estimated; observations conditionally independent (within-possession autocorrelation ignored — acknowledged limitation); location-only (no defender/game-state context — acknowledged).
- GSE implementation spec from the read: ~40 expert centres on NFL field grid + red-zone/end-zone region with linear weights; outcomes TD (7/6), FG (3), safety (2), punt, turnover, downs, end of half; Dirichlet priors from historical NFL scoring rates; league → team offense/defense hierarchy; surface served as a 1-yard-grid lookup table. Improvement experiment: replace fixed bilinear weights with learned weights (neural net or GP kernel over (x,y), plus down/distance/time/score-differential inputs).

## Data sources named
Event-level Opta (Stats Perform) match-play data, all 138 matches of the 2021 Super League season: 557,050 raw events filtered to 99,966 attacking actions (consecutive duplicate location codings removed); per observation: attacking team, defending team, player ID, x,y coordinates, possession number, possession outcome. Team subsets: 12 attacking (median 8105 actions/team, IQR 7596–8937), 12 defending (median 8077, IQR 7878–8700). Only 91 of 99,966 actions in the try area. Proprietary data — not public. No code released.

## Findings (numbers and facts, not vibes)
- Season totals: 1001 tries (768 converted, 233 unconverted), 175 penalty-goal attempts (158 successful), 83 drop-goal attempts (37 successful) across 2021.
- Highest field-of-play EPV at centre (50,100): EPV^μ = 1.73; try-area centres EPV^μ ∈ {3.52, 3.72, 3.16} (prior-dominated — only 91 try-area actions across 3 centres).
- Top AE player ratings (points per match above expected): Player 276 (Full Back) 8.21; player 19 (Winger) 6.67; player 6335 (Stand-off) 6.35; player 1004 (Scrum Half) 6.10; player 433 (Full Back) 4.96.
- Face-validity check: Man of Steel and Young Player of the Year both appear in the AE top 20.
- No train/test split, no predictive backtest, no accuracy metrics, no baselines or significance tests — all numbers are in-sample descriptive estimates (INFERENCE: surfaces could over/under-smooth; AE ratings unvalidated out-of-sample).
- Acknowledged limitations: within-possession autocorrelation inflates effective N; context-free (5 defenders vs 0 identical); AE ratings penalize high-action playmakers (scrum halves); MCMC diagnostics (chains, iterations, R-hat) unstated.
- GSE overlap: new capability — GSE's EP stack is game-state (yardline/down/distance/clock) via nflverse models, not a continuous (x,y) spatial surface; no Bayesian mixture machinery in-repo.
- Acceptance gate from the read: ADOPT if on a 2023–2024 nflverse holdout (trained 2016–2022) the BMM surface's drive-points MSE ≤ nflfastR EP MSE (within 2%) AND at least one per-outcome surface (e.g., FG probability in 30–55-yard FG range) is ≥5% lower Brier than EP-implied outcome probabilities; REJECT as standalone predictor if it underperforms nflfastR EP by >5% MSE.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Smooth spatial EPV surface + per-outcome probability surfaces (e.g., FG probability by field region for kicker evaluation; red-zone/end-zone linear-weight region mirrors NFL red-zone dynamics) — SCHEME (spatial attacking/defensive tendencies: Team A above league average on left side, stronger penalty-goal right; Team B's defensive profile — analogous to NFL team tendency maps by field position).
- Team attacking/defending difference surfaces vs league average — SCHEME (team-level spatial tendency intelligence: where on the field a team over/under-performs).
- AE player ratings (actual vs expected points per match above expectation) — OTHER (player evaluation metric infrastructure; INFERENCE: AE-style ratings could be built for NFL returners/RBs/WRs, but the paper has no QB-behavior content — no target concentration, trust targets, or INT-situation data).

## Engine-actionable? (yes/no + one-line what)
Yes — port the fixed-weight Bayesian mixture surface to NFL drive outcomes on nflverse data to produce per-outcome probability surfaces (FG/TD/turnover by field region) plus AE player ratings, validated against nflfastR EP on a 2023–2024 holdout.
