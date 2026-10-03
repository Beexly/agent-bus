# arxiv-program/research/2026-09-21/arxiv-deep/1198-optimal-selection-of-starting-lineup.md
## What it is (1-2 sentences)
Ledger deep read of Deb & Das (2023, arXiv:2303.12385): two-stage LASSO multinomial logistic regression + GRASP meta-heuristic to select the optimal soccer starting eleven per opponent, with a "management efficiency" rating. Verdict: REJECT — soccer-specific, no NFL transfer path.
## Key metrics/methods (formulas where given, else "not specified")
- Stage 1: multinomial logit (Draw pivot): log[P(Loss)/P(Draw)] = xᵀβ_l; log[P(Win)/P(Draw)] = xᵀβ_w; P(Win) = exp(xᵀβ_w)/[1+exp(xᵀβ_w)+exp(xᵀβ_l)].
- LASSO objective: β̂ = argmin{−log L(β) + λ‖β_S‖₁}; forced inclusion of GK/defender-defensive/midfielder-general/forward-attacking skills, hard cap ≤20 selected variables; refit plain MLR on selected set.
- Stage 2: GRASP-type meta-heuristic — ≥10 random starts, ≥20 iterations; neighborhood = lineups differing by exactly one player (|S−S*| = 2); greedy best-neighbor move; random restart on convergence/cycling; relative-improvement convergence δ on P(win|S).
- Management efficiency = P(win|actual XI) / P(win|optimal XI) ∈ [0,1].
- Features: 10 own + 10 opponent lineup-strength measures (PCA-weighted 33 FIFA attributes into 4 skill indices: goalkeeping, defensive, attacking, general), player-position fixed effects (≥30 appearances), two-way pair interactions (≥30 joint appearances).
## Data sources named
European Soccer Database via Kaggle (kaggle.com/hugomathien/soccer); EPL, 8 seasons 2008/09–2015/16; 10 clubs present in all 8 seasons; 272–290 usable matches per club; train 2008/09–2014/15, test 2015/16 (38 matches/team), time-ordered.
## Findings (numbers and facts, not vibes)
- Proposed model wins AIC on 9 of 10 teams (exception: Sunderland); combined 4678.97 vs 4924.34 for plain LR.
- Management efficiency (2015/16 avg): Tottenham 0.822, Aston Villa 0.746, Everton 0.730, Arsenal 0.722, Chelsea 0.662, Man City 0.647, Liverpool 0.604, Man Utd 0.579, Stoke City 0.456, Sunderland 0.403; SD 0.096–0.312.
- Arsenal vs Tottenham 8 Nov 2015 case study: 6 suggested changes raise model P(win) 66.2% → 73.9%; reverse leg (actual 2–2): 36.7% → 57.1%.
- Significant synergies, e.g., Chelsea Cole:Mata pair +1.67 (0.677)* win log-odds; Stoke Sidibe −2.24 (0.677→se, 0.779)* win / −4.03 (0.839)* loss.
- No out-of-sample profit/win-rate vs bookmakers; optimization gains measured against the model's own probabilities (self-referential).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- LASSO-with-forced-covariates pattern: portable to prop markets (receiver yardage vs coverage personnel) where individual-player outcomes matter — OTHER (INFERENCE: suggested in ledger, not tested)
- GRASP one-swap neighborhood search: generic OR, already standard in repo optimizer tooling — OTHER
- Management-efficiency ratio shape (actual vs optimal decision quality) is a coaching-decision-quality analog but soccer XI-locked — COACHING (INFERENCE: idea shape only)
## Engine-actionable? (yes/no + one-line what)
No — nothing in the EPL lineup machinery transfers to NFL prediction or GSE's salary-cap DFS optimizer; parked idea only (LASSO-with-forced-covariates for prop modeling) with no paper-level validation behind it.
