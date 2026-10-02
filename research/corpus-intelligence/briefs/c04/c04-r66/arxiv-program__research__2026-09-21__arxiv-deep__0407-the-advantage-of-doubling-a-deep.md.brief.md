# docs/arxiv-program/research/2026-09-21/arxiv-deep/0407-the-advantage-of-doubling-a-deep.md
## What it is (1-2 sentences)
Deep-read of Wang et al. (2018, arXiv:1803.02940v1) on studying NBA double-teaming via a rule-based action detector plus deep RL (dueling-CNN Q-learning on SportVU tracking), with an explicit NFL transfer spec ("Double-or-Die") for bracket-coverage and blitz decision modeling. Ledger verdict: ADAPT.

## Key metrics/methods (formulas where given, else "not specified")
- MDP: state s_t = court configuration at second t; action a_t ∈ 20 discrete actions (stay home, or double leaving open the man in one of 19 court regions), feasible set A_t restricted to regions occupied by an offensive player; reward = negative points scored {0,−1,…,−5}, undiscounted so cumulative reward = terminal reward.
- Return: G_t := Σ_{t=t0}^{T} γ^{t−t0} r_t (γ effectively 1). Optimal Q: Q*_π(s,a) = max_π E[G_t | s_t = s, a_t = a]; V*_π(s) = max_a Q*_π(s,a); advantage A*_π(s,a) = Q*_π(s,a) − V*_π(s).
- TD loss: L = Σ_i Σ_t [Q*_π(s_t^i, a_t^i) − (r_t^i + V*_π(s_{t+1}^i))]², trained with double Q-learning and a periodically cached target network. Policy: π*(a|s_t) = 1 iff a = argmax_{a∈A_t} Q*_π(s_t, a).
- NBNet: dueling CNN — 17-channel 47×50 image input (1 court-region channel, 11 trajectory channels with exponential time decay, 5 offensive-player shooting-% channels computed causally from pre-game data) + 93 flat features (shot/game clock, quarter, binned heights/weights).
- Post-processing: double-team actions suppressed unless their Q exceeds man-to-man Q by ≥ 0.2 (validation-tuned), taming the raw 90.6% doubling rate to 29.29% (vs. 33.92% observed per-second rate).
- Rule-based action detector: ≥2 defenders within a radius of the ball handler, excluding cases where a second defender is near another offensive player; a possession counts as "Double" if the action persists ≥2 consecutive windows. Detector–human agreement 72.3%/73.2% vs. human–human 64.2% on 100 possessions.
- NFL transfer (file's own spec): reward = −EPA; actions = {rush 4, blitz 5, blitz 6+, bracket WR1, bracket WR2, …} with feasibility masking; dueling network on NGS 2019–2024.

## Data sources named
SportVU optical tracking + NBA play-by-play, three seasons through 2017–18 incl. playoffs (875,412 possessions total; 643,147 kept after dropping transition plays; RL deep-dive subset: 22,695 Cleveland Cavaliers offensive possessions, 70/10/20 train/val/test). NFL transfer spec names NGS tracking + nflverse + charted coverage labels (2019–2024, with 2022–2023 for the observational layer and 2023–2024 holdout).

## Findings (numbers and facts, not vibes)
- 4.8% of possessions contain a double team (team range 3.8% Portland – 6.7% Milwaukee).
- Doubling trade-off: significantly lower offensive FG%, but significantly higher foul rate.
- Doubled ball handlers shoot only 6.2% of the time; they pass or dribble.
- Best vs. the double: John Wall (1.07 ppp doubled vs. 0.89 not); worst guard Lou Williams (0.68 vs. 0.95); most negatively affected forward Kevin Durant (0.99 vs. 0.90).
- Passing out of the double beats keeping the ball, yet players often don't pass.
- Best tandems: Lowry + Valanciunas 0.64 pts/possession allowed; Paul + Jordan 0.70; Thompson + Green 0.74. Rubio + Towns force turnovers on 21.4% of double teams.
- Q-values predict outcomes: q_avg vs. points correlation −0.08 (p < 0.001); tight clustering in [−1, 0] vs. mean reward ≈ −1.4 shows classic Q-learning upward bias (acknowledged by authors). Team q_avg positively correlates with win % vs. the Cavs.
- Learned policy insights: better to leave the open man in the paint than in the back; policy more hesitant to double stars, more willing to double role players; Chicago and Golden State graded best at defending the Cavs, Indiana highest potential under optimal play.
- Stated limitations: off-policy evaluation uncorrected (no behavior-policy distribution, no importance weighting — Q-values "are biased"); learned policy initially doubles in 90.6% of possessions (artifact of 19/20 actions being double variants; 0.2 margin is hand-tuned); Cavs-only RL (one team's offense, one era); correlation −0.08 weak despite significance; rule-based detector misses disguised doubles/late rotations.
- Paper admits π* is optimal only w.r.t. explored state-action pairs.
- Code: https://github.com/igfox/AdvantageOfDoubling.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Double-or-Die bracket/blitz decision engine — SCHEME (coverage scheme decision: which receiver to bracket, when to blitz; NFL analog of the doubling dilemma).
- Learned policy insight (hesitant to double stars, willing to double role players; which QBs to blitz in the weekly "double report") — COACHING (defensive play-calling guidance).
- Q-learning upward bias (−0.08 correlation, acknowledged), TD-loss formulation, dueling-CNN NBNet architecture, off-policy-bias honesty — OTHER (modeling methodology).
- NFL reward = −EPA, feasibility masking, 0.2-margin threshold concept — OTHER (methodological transfer).
- NGS tracking as the direct SportVU analogue — OTHER (data-source note).

## Engine-actionable? (yes/no + one-line what)
Yes — build the "Double-or-Die" observational layer first (EPA/play for Bracket vs. No-Bracket and Blitz vs. No-Blitz with 95% CIs on 2022–2023 charted data), then the dueling-network Q-learning layer on NGS tracking if the trade-off replicates; weekly "double report" product (which receivers to bracket, which QBs to blitz) if the holdout gate passes.
