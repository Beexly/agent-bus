# arxiv-program/research/2026-09-21/arxiv-deep/1229-single-event-multinomial-full-kelly.md
## What it is (1-2 sentences)
An expository derivation (arXiv:2603.13581v1, Christopher D. Long, 2,369 words) of the exact closed-form full-Kelly staking rule for a single event with M mutually exclusive outcomes: which outcomes get positive stake, how much cash is held back, and the greedy support-selection rule. Pure theory; no data, no code, no numerical validation.
## Key metrics/methods (formulas where given, else "not specified")
- Objective: max_{c,x≥0} Σ p_i·log(c + x_i/q_i) s.t. c + Σx_i = 1, where p_i = subjective probs, q_i = 1/O_i state prices, c = cash reserve, x_i = stakes.
- Fixed-support cash: c_A = (1 − P_A)/(1 − Q_A), P_A = Σ_{i∈A} p_i, Q_A = Σ_{i∈A} q_i.
- Canonical stakes: x_i⋆ = (p_i − c⋆·q_i)_+ (bet only where subjective prob exceeds cash-scaled state price).
- Greedy support: sort edge ratios r_i = p_i/q_i descending; expand support while r_{k+1} > c_k.
- Terminal wealth: W_i⋆ = max(c⋆, p_i/q_i).
- Ledger's acceptance gate: greedy support must match brute-force optimal support on 1,000 random synthetic markets (M ∈ {4,…,20}) in 100% of cases, objective value to 10⁻⁹.
## Data sources named
None — theory paper, no datasets, no code.
## Findings (numbers and facts, not vibes)
- Closed-form solution: optimal wealth is the cash floor c⋆ except on outcomes where the probability-to-price ratio p_i/q_i exceeds it.
- Support characterized by sorted edge ratios with threshold rule r_{k+1} > c_k (proved optimal for the stated program).
- Ledger notes: assumes p_i known exactly (no estimation error), single event only, all odds simultaneously available at fixed prices, no stake limits, full Kelly only (no fractional variant).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Exact Kelly rule for multi-outcome futures/award markets — OTHER (bankroll/staking lane, not a player intelligence tag)
## Engine-actionable? (yes/no + one-line what)
yes — Build the multinomial Kelly pricer for futures/award markets (division winner, awards, golf) with the greedy support rule, then apply a house fractional-Kelly overlay since full Kelly is too aggressive standalone.
