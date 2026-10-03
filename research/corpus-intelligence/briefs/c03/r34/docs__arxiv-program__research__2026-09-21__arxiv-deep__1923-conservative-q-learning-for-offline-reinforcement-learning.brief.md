# docs/arxiv-program/research/2026-09-21/arxiv-deep/1923-conservative-q-learning-for-offline-reinforcement-learning.md
## What it is (1-2 sentences)
Read-notes on Conservative Q-Learning (CQL, Kumar et al. 2020, arXiv:2006.04779): an offline-RL method that regularizes Q-values so the learned value function lower-bounds the true policy value, enabling safe policy improvement from fixed logged data. Verdict in file: ADOPT, as a staking-policy learner on GSE's logged picks.
## Key metrics/methods (formulas where given, else "not specified")
- CQL(ℛ) objective (Eq 3): min_Q max_μ α(E_{s∼D,a∼μ(a|s)}[Q(s,a)] − E_{s∼D,a∼π̂_β(a|s)}[Q(s,a)]) + ½E_{s,a,s′∼D}[(Q(s,a) − B̂^{π_k}Q̂^k(s,a))²] + ℛ(μ).
- CQL(ℋ) (Eq 4): min_Q αE_{s∼D}[logΣ_a exp(Q(s,a)) − E_{a∼π̂_β(a|s)}[Q(s,a)]] + ½E_{s,a,s′∼D}[(Q − B̂^{π_k}Q̂^k)²].
- Theorem 3.3: expected Q under the learned policy lower-bounds the true policy value; lower-bound empirically verified (predicted V̂^k ≤ actual discounted return, Table 4).
- Metrics: normalized D4RL return (4 seeds), success rates, offline Atari return on 1%/10% of DQN replay data.
## Data sources named
D4RL benchmark (Fu et al. 2020) — Gym MuJoCo (HalfCheetah/Hopper/Walker2d), Adroit 24-DoF hand, AntMaze, Franka Kitchen, offline Atari (DQN replay); public at github.com/rail-berkeley/d4rl. GSE analogs named: GSE logged picks + closing odds, NFL 2021–2024.
## Findings (numbers and facts, not vibes)
- Gym D4RL (Table 1): on multi-policy/complex datasets CQL beats prior methods by "large margins, sometimes as much as 2-3x"; on single-policy sets roughly matches/exceeds the best prior.
- Adroit (Table 2): CQL variants are the only methods improving over behavioral cloning, "attaining scores that are 2-9x those of the next best offline RL method".
- AntMaze: "only CQL is able to make meaningful progress on the much harder medium and large mazes," and "the only method that attains non-zero returns" on harder mazes.
- Franka Kitchen: CQL "over 40% success rate on all tasks," the only method beating BC.
- Offline Atari (1% data, Table 3): CQL achieves "36x and 6x times the return of the best prior method on Q*bert and Breakout, respectively".
- Implementation claim: "<20 lines of code on top of a number of standard, online RL algorithms" (no direct code URL stated).
- GSE implementation spec: discrete stake actions (0 / 0.25u / 0.5u / 1u / 2u); state = slate context (week, bankroll, edges, CLV, market features); reward = settled profit in units; greedy argmax over conservative Q with per-week max-exposure cap; fallback to fractional-Kelly on OOD states.
- Acceptance gate: ADOPT iff 2024-holdout CQL policy beats fractional-Kelly baseline by ≥2pp ROI with max drawdown no worse than baseline (within 0.5u) AND empirical lower-bound diagnostic holds (predicted value ≤ realized return on ≥90% of weeks).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the lower-bound guarantee is a safety property — the engine never claims more value than the policy plausibly has; the public "confidence" number can be sourced from the conservative expected value, reducing overclaim risk.
- OTHER: staking/portfolio optimization (offline RL on logged picks; abstention = learned "don't bet"); pairs with ledger 1922 (distributional critic for CVaR tail-risk staking).
## Engine-actionable? (yes/no + one-line what)
Yes — train CQL(ℋ) on the GSE logged-pick dataset to learn a conservative stake-sizing/abstention policy to replace heuristic fractional-Kelly, gated by the ≥2pp ROI + lower-bound-diagnostic test.
