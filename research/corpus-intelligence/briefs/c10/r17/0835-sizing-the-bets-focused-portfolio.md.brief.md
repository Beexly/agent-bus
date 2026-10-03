# arxiv-program/research/2026-09-21/arxiv-deep/0835-sizing-the-bets-focused-portfolio.md
## What it is (1-2 sentences)
An arXiv 2024 paper (Vukcevic, Keser) deriving the constrained generalized multivariate Kelly solution for sizing a small set of simultaneous correlated bets, with long-only, leverage-cap, per-position-max, and permanent-capital-loss constraints solved exactly via Newton–Raphson over active-constraint combinations; validated on constructed scenarios only. Verdict: ADAPT — the first fully-read multivariate Kelly treatment in the repo, directly applicable to sizing a small set of correlated GSE edges.
## Key metrics/methods (formulas where given, else "not specified")
- Core first-order condition (quoted exactly): ∑_i p_i k_{ij} / (1 + ∑_j f_j k_{ij}) = 0, solved for fraction vector f via Newton–Raphson over discrete joint outcomes with probabilities p_i and payoff vectors k_{ij}.
- Constraints: long-only (f_j ≥ 0), leverage cap (∑ f_j ≤ 1), max allocation per position, permanent-capital-loss constraint P(loss ≥ K) ≤ P — enforced by enumerating all 2^{N_l} active/inactive constraint combinations and keeping the feasible optimum.
- Log-growth objective; assumes known outcome probabilities, fully enumerated discrete joint outcome space, log utility, simultaneous resolution, no sequential rebalancing.
- Implemented in Rust crate `charlie` (GitLab links stated in paper).
## Data sources named
No empirical dataset — validation is constructed scenarios: five identical 50%-loss/100%-gain 50/50 candidates; a 5-asset example portfolio (A–E) with stated edge and loss parameters.
## Findings (numbers and facts, not vibes)
- Five identical candidates: unconstrained Kelly 35% each (75% leverage implied) → no-leverage constraint 20% each → with P=5%/K=50% permanent-loss constraint 2% each.
- Example portfolio: A 30%, B 8%, C 30%, D 2%, E 30%; expected gain $0.32 per dollar wagered; cumulative loss probability 16%; claimed probability of 60% capital loss 0.008%.
- All numbers are model outputs on stipulated inputs, not empirical findings; no out-of-sample validation; no baselines beyond constraint variants.
- Complexity is 2^{N_l} — infeasible beyond small N (with 20 candidates and all constraints, ~4 trillion nonlinear systems); Newton–Raphson nonconvergence can silently discard the true optimum (flagged in the paper).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Constrained multivariate Kelly → sizing layer for a small set of correlated GSE picks, replacing naive flat stakes or single-bet Kelly (OTHER)
- The P(loss ≥ K) ≤ P constraint is the honest public-bankroll guardrail (max drawdown control) (TRUST-SIGNAL)
## Engine-actionable? (yes/no + one-line what)
Yes — port to Python (scipy Newton/SLSQP, N ≤ 10 with constraint enumeration, SLSQP on log-growth for larger N) fed by engine win probabilities and odds → payoff multiples, with long-only / no-leverage / 25%-per-pick / P=1%-K=30% constraints; gate ADOPT on walk-forward max drawdown ≤ 0.25-Kelly drawdown at comparable ROI.
