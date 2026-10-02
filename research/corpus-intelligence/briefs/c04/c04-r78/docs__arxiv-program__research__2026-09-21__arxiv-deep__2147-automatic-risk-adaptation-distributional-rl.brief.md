# docs/arxiv-program/research/2026-09-21/arxiv-deep/2147-automatic-risk-adaptation-distributional-rl.md
## What it is (1-2 sentences)
A method (Automatic Risk Adaptation, ARA) for distributional RL that replaces the hand-tuned static CVaR risk level with a per-state risk level derived from the agent's own parametric uncertainty (Random Network Distillation prediction error): novel states get conservative (risk-averse) action selection, familiar states get risk-neutral. The paper proves static risk levels are suboptimal under changing conditions and shows ARA beats every static-CVaR baseline on locomotion benchmarks.

## Key metrics/methods (formulas where given, else "not specified")
- Q(s,a)=E_{τ∼U(0,1)}[Z_τ(s,a)] — risk-neutral value from quantile function
- Q_β(s,a)=E_τ[Z_{β(τ)}(s,a)] — risk-distorted value via distortion β
- β_CVaR(τ;α)=τ·α — CVaR distortion keeping the worst-α fraction of quantiles
- u(s)=‖f(s)−g(s)‖² — RND prediction error (frozen target f, trained predictor g), running-average normalized
- β_ARA(τ)=β_CVaR(τ; ψ(u)), with ψ(u)=e^{−u} ∈ (0,1] mapping novelty to risk level
- Baselines: neutral DSAC, DSAC + static CVaR α∈{0.25, 0.5, 0.75}; 5 seeds, eval every 10k steps over 50 episodes, mean ± SE

## Data sources named
- Windy GridWorld LavaGap (tabular, 50-atom categorical value distribution)
- AntBulletEnv-v0 and HopperBulletEnv-v0 (PyBullet; "DynamicAnt"/"DynamicHopper" variants randomizing foot friction and torso mass ±20% per episode)
- BipedalWalkerHardcore-v3 (variable terrain)
- Environments standard (Gym/PyBullet); paper code not verifiable

## Findings (numbers and facts, not vibes)
- Static-α suboptimality: tabular optimal value function under light-south wind evaluated under 4 wind settings — best α wanders 0.4→0.5→0.1→0.9, no predictable pattern; best-vs-worst static α gap widens from 0% (train setting) to 10% under unseen wind directions.
- DynamicAnt: ARA final return ≥14% better than neutral DSAC and every static-CVaR agent; α=0.75 reaches only ~60% of ARA's performance; ARA reduces Q-value estimation error fastest after ~600k steps.
- DynamicHopper: ARA ≈ neutral/α=0.5/0.75 final return but reaches it ~3× faster than neutral; average risk parameter ends 10% higher (less risky) than Ant.
- BipedalWalkerHardcore: ARA has the lowest failure rate at every point of training — 4× lower than neutral, 7× lower than static risk-aware agents by end of training; return conceded slightly to static α=0.5/0.75.
- ARA adds one RND network pair; no extra episode evaluations; cost independent of state/action-space size.
- Limitation: conservative-by-default can stall exploration (bad seeds in fixed-dynamics Ant stayed conservative and never learned to walk); the uncertainty↔risk proxy requires failure states to be rare — if failures are common, the proxy inverts.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: Maps directly to stake/post decisions — per-game CVaR risk level driven by game-novelty: rookie-QB starts, new head coaches, extreme weather, and unprecedented matchup contexts get automatic conservatism; familiar divisional games get full aggression. Eliminates a global hand-tuned risk knob.
- TRUST-SIGNAL: the acceptance gate in the file (walk-forward: worst-week loss ≥25% smaller than best fixed-α, profit ≥0.95× best fixed-α, monotonically decreasing stake with novelty decile) is a calibrated risk-discipline artifact the pick desk can audit.
- INFERENCE: novelty via RND on engine game-feature vectors is a defensible "situations the engine was never calibrated on" detector, analogous to how a risk manager dims exposure in uncharted territory.

## Engine-actionable? (yes/no + one-line what)
Yes — wrap the engine's per-game pick/stake rule with CVaR distortion α=e^{−u}, where u is normalized RND prediction error on game-feature vectors, precomputed weekly; paper estimates ~1–2 weeks effort with a pre-registered walk-forward acceptance gate.
