# docs/arxiv-program/research/2026-09-21/arxiv-deep/0407-the-advantage-of-doubling-a-deep.md
## What it is (1-2 sentences)
Deep-read ledger of Wang et al. (2018) "The Advantage of Doubling" (arXiv:1803.02940v1): an NBA double-team study using a rule-based double-team detector plus a dueling-CNN Q-learning policy (NBNet) over SportVU tracking data. Verdict: ADAPT — the NFL analogue is bracket/double coverage and the blitz, and the file specs a "Double-or-Die" defensive decision engine port for NGS tracking.
## Key metrics/methods (formulas where given, else "not specified")
- MDP: state s_t = court config at second t; action ∈ 20 discrete actions (stay home, or double leaving open one of 19 court regions); reward = negative points scored {0,−1,…,−5}, undiscounted.
- Q*_π(s,a) = max_π E[G_t | s_t=s, a_t=a]; V*(s) = max_a Q*(s,a); A*(s,a) = Q*−V*; TD loss L = Σ_i Σ_t [Q*(s_t^i,a_t^i) − (r_t^i + V*(s_{t+1}^i))]² with double Q-learning + cached target net.
- NBNet: dueling CNN on 17-channel 47×50 court image (trajectories with exponential time decay, causal per-player shooting-% channels) + 93 flat features.
- q_avg(i) = (1/T_i)Σ_t Q*(s_t^i, a_t^i) as the possession-quality summary statistic.
- Post-processing: double actions suppressed unless Q-margin over man-to-man ≥ 0.2 (tames raw 90.6% doubling rate to 29.29% vs. 33.92% observed).
## Data sources named
SportVU optical tracking + play-by-play, three NBA seasons through 2017–18 incl. playoffs (875,412 possessions; 643,147 after dropping transition); rule-based action detector validated vs. two humans on 100 possessions (72.3%/73.2% detector–human agreement vs. 64.2% human–human); RL subset: Cleveland Cavaliers offensive possessions only (22,695; 70/10/20 split).
## Findings (numbers and facts, not vibes)
- 4.8% of possessions contain a double team (team range 3.8% Portland – 6.7% Milwaukee).
- Doubling: significantly lower offensive FG% but significantly higher foul rate (quantified risk/reward, Figure 5).
- Doubled ball handlers shoot only 6.2% of the time; pass-out-of-double beats keeping the ball, yet players often don't pass.
- Player effects: best vs. double John Wall (1.07 ppp doubled vs. 0.89 not); worst guard Lou Williams (0.68 vs. 0.95); worst-affected forward Kevin Durant (0.99 vs. 0.90).
- Best tandems: Lowry+Valanciunas 0.64 pts/poss allowed; Paul+Jordan 0.70; Thompson+Green 0.74; Rubio+Towns force turnovers on 21.4% of doubles.
- q_avg vs. points correlation −0.08 (p < 0.001); clustering in [−1,0] vs. mean reward ≈ −1.4 shows upward Q-learning bias (acknowledged); team q_avg positively correlates with win % vs. the Cavs.
- Learned policy: better to leave the open man in the paint than in the back; more hesitant to double stars, more willing to double role players; Chicago and Golden State best at defending the Cavs; Indiana highest potential under optimal play.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Double-team/blitz decision framework with observed-vs-learned policy comparison maps to NFL defensive play-calling (when to bracket a WR1, when to blitz) — COACHING, SCHEME.
- Off-policy Q-value bias warning for any GSE "optimal decision" claim derived from historical tracking — OTHER (methodology guardrail).
- Nothing on QB behavior, OL, or trust quotes — those tags do not apply (no such content in file).
## Engine-actionable? (yes/no + one-line what)
Yes — observational layer first: compute EPA/play for Bracket vs. No-Bracket and Blitz vs. No-Blitz with 95% CIs on 2022–2023 charted data (min. 50 brackets per receiver), then train the dueling-Q "Double-or-Die" policy on NGS 2019–2022 with reward = −EPA and validate on 2023–2024.
