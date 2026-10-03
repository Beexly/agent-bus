# arxiv-program/research/2026-09-21/arxiv-deep/1930-counterfactual-conservative-q-learning-for-offline-multi-agent.md
## What it is (1-2 sentences)
Deep-read ledger of Shao et al. (2023), Counterfactual Conservative Q-Learning (CFCQL) for offline multi-agent RL: per-agent counterfactual regularization keeps CQL's value lower-bound guarantee while avoiding the exponential-in-agents over-conservatism of naive joint CQL (MACQL). Verdict in file: ADAPT — reframes GSE's slate problem as multi-agent portfolio stake selection, one agent per bet.

## Key metrics/methods (formulas where given, else "not specified")
- CFCQL evaluation (Eq. 4): Q̂_{k+1} ← argmin_Q α[Σ_{i=1}^n λ_i E_{s∼D, a^i∼μ^i, a^{−i}∼β^{−i}}[Q(s,a)] − E_{s∼D, a∼β}[Q(s,a)]] + Bellman error Ê_D(π,Q,k), Σλ_i=1, λ_i≥0 — penalize agent i's OOD actions counterfactually (others' actions held at behavior data), linearly combined
- Theorem 4.1: V̂^π(s)=E_{π(a|s)}[Q̂^π(s,a)] lower-bounds the true policy value from exact evaluation
- Theorem 4.2: CFCQL's conservatism is milder than MACQL's (quantified gap) while still a lower bound; Theorems 4.3/4.4: better safe-policy-improvement bounds
- GSE spec in file: each bet an agent choosing a^i ∈ {0, 0.25u, 0.5u, 1u, 2u}; shared reward = weekly portfolio profit; λ_i ∝ 1/(#bets) or ∝ Kelly weight; decentralized execution with exposure cap as hard constraint

## Data sources named
Offline MARL benchmarks: Multi-agent Particle Environments (Cooperative Navigation, Predator-Prey, World; Random/Med-Rep/Medium/Expert datasets); Multi-agent MuJoCo (HalfCheetah-v2). No code stated.

## Findings (numbers and facts, not vibes)
- MPE Cooperative Navigation: CFCQL 62.2±8.1 / 52.2±9.6 / 65.0±10.2 / 112±4 (Random/Med-Rep/Medium/Expert) vs MACQL 45.6±8.7 / 25.5±5.9 / 14.3±20.2 / 12.2±31, OMAR 34.4±5.3 / 37.9±12.3 / 47.9±18.9 / 114.9±2.6 — CFCQL best or tied-best on all four; MACQL collapses on Medium/Expert (over-conservatism)
- Predator-Prey: CFCQL 78.5±15.6 / 71.1±6 / 68.5±21.8 vs MACQL 25.2±11.5 / 11.9±9.2 / 55±43.2
- MaMuJoCo HalfCheetah: CFCQL competitive/best vs MACQL/IQL (exact numbers in paper tables; direction favors CFCQL)
- Pattern: the CFCQL–MACQL gap is largest where data is weakest (Random/Med-Rep) — where conservatism calibration matters most

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Per-bet-agent framing of slate staking (13-bet slate = 5^13 joint action space where joint CQL is hopelessly conservative): OTHER (stake-sizing / portfolio layer — replaces independent-Kelly's missing portfolio coupling; file flags Kelly as per-bet independent, gap #1)
- Lower-bound guarantee (Thm 4.1) on portfolio value with milder pessimism: TRUST-SIGNAL (conservative staking bounds are a trust-relevant safety property for a bettor-facing portfolio)
- Biggest CFCQL–MACQL gap on weakest data: OTHER (regime note — the method's edge concentrates in thin-data settings, matching early-season/small-slate conditions)

## Engine-actionable? (yes/no + one-line what)
Yes — train CFCQL joint-Q over (slate state, stake vector) on logged GSE picks 2021–2024, adopt iff 2024 test beats independent per-bet CQL ROI by ≥1pp with max drawdown no worse and the value lower-bound diagnostic holds on ≥90% of weeks; proposed improvement: adaptive λ_i weighted by historical edge variance (paper fixes λ uniformly).
