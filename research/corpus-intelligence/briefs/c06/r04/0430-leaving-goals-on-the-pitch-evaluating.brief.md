# arxiv-program/research/2026-09-21/arxiv-deep/0430-leaving-goals-on-the-pitch-evaluating.md
## What it is (1-2 sentences)
Per-team Markov Decision Processes over soccer possessions (375 states), combined with PRISM probabilistic model checking and policy-modification counterfactuals, ask whether EPL teams should shoot more from long distance; verdict in the dossier is REJECT for GSE — soccer shot policy has no NFL transfer path and the Markov counterfactual machinery duplicates existing 4th-down literature.
## Key metrics/methods (formulas where given, else "not specified")
- P(s,a,s′) = Pr[S_{t+1}=s′|S_t=s,A_t=a]; π(a|s) = Pr[A_t=a|S_t=s] estimated by counts: π(shoot|s)=c_s^shot/c_s.
- E[goals|π] = Σ_s E[shots in s|π]·P(s,shoot,s_goal); expected visits from fundamental matrix N = (I−Q)⁻¹, Q[i,j]=P(i,move_to(j),j)·π(move_to(j)|i).
- V_π(s) = Σ_a π(a|s) Σ_s′ P(s,a,s′)(R+γV_π(s′)), γ=1; PRISM/STORM model checking for exact scoring probabilities under action sequences; policy edits ±5/10/20% with parametric frequency-efficiency xG adjustment.
## Data sources named
StatsBomb EPL event-stream data, 2017/18 and 2018/19 seasons; 17 teams present in both (76 matches/team). State space: 22×17 offensive-half grid + defensive-half state + 3 absorbing states.
## Findings (numbers and facts, not vibes)
- MDP fit: MAE of model vs empirical state values in [0.013, 0.015] across 17 teams; season-goals estimate avg relative error 11.38% (~6 goals on a 50-goal season).
- High-volume long-distance shooters (Eriksen, Pogba, Kane, De Bruyne, Son, Hazard, Sigurdsson): 6.5% conversion on 416 long-distance shots vs 2.1% goal rate in 4,455 non-shooting touches in the zone.
- Long-distance shots declined ~20%/season from 2013/14 to 2018/19. Probability of ever generating a better shot can be as low as 5% (Chelsea, left of penalty arc).
- Policy counterfactuals: most teams score more shooting MORE from distance (exceptions: Burnley, Liverpool, Newcastle); targeted 10% increase → ~+0.5 goals/season, 20% → ~+1 goal/season. Worked example: +1 goal would have kept Bournemouth up in 2019/20 (−24 vs Aston Villa's −26 GD).
- Limitations: heuristic frequency-efficiency adjustment; GBM-estimated intended move destinations inject model-on-model error; no temporal holdout.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- COACHING: per-team decision-policy counterfactuals (the NFL analogue is 4th-down go/punt policy evaluation, already in-repo).
## Engine-actionable? (yes/no + one-line what)
no — REJECT; soccer domain with no NFL transfer path; method duplicates existing 4th-down/WP counterfactual machinery in the repo.
