# arxiv-program/research/2026-09-21/arxiv-deep/1754-gamblers-ruin-probability-general-formula.md
## What it is (1-2 sentences)
Exact closed-form gambler's ruin probability (Katriel 2012, arXiv:1209.4203) for i.i.d. integer-valued payoff distributions with bounded per-game loss, expressed through the roots of the payoff generating function inside the unit disk — a strict generalization of the classical symmetric ±1 ruin formula.
## Key metrics/methods (formulas where given, else "not specified")
- Theorem 1, Eq. (2): P_ruin(M) = Σ_{n=1}^{ν} Φ_{n,M−n+1}(η_1,…,η_n) Π_{j=1}^{n−1}(1−η_j), where η_j are the ν roots of p(z)=1 in |z|<1 and Φ_{n,r} is the complete symmetric polynomial of order r (handles multiple roots).
- Distinct-roots form, Eq. (3): P_ruin(M) = Σ_{j=1}^{ν} η_j^M Π_{i≠j} (1−η_i)/(η_j−η_i).
- Assumptions: i.i.d. integer payoffs with max loss ν, p_{−ν}≠0, E[X_t] > 0; ruin when wealth < ν; infinitely rich adversary (no profit target).
## Data sources named
None — pure probability theory, no empirical data.
## Findings (numbers and facts, not vibes)
- Exact formulas only; no numerical results in the paper.
- File's ledger verdict: ADAPT — root-finding for p(z)=1 in the unit disk must be implemented numerically (paper provides none) and validated.
- Implementation spec in file: discretize weekly settled P&L to 0.1u integers, estimate {p_k} empirically per market, find ν roots numerically (numpy polynomial roots on z^ν·p(z)), compute via Eq. (3), size stakes so P_ruin(bankroll) ≤ 1%, recompute monthly; ~1 day effort.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: bankroll/staking risk — closed-form ruin gate for GSE's actual asymmetric weekly P&L (−110 bets: win +0.91u, lose −1u, pushes as 0), which the classical B/(A+B) and ±1-correlation formulas both misprice.
- TRUST-SIGNAL: honest risk quantification for staking discipline.
## Engine-actionable? (yes/no + one-line what)
Yes — build the "payoff-aware ruin gate" staking module (Eq. 3 with numerical root-finder, ≤1% ruin gate, acceptance gate: adopt if Katriel P_ruin differs from symmetric approximations by >25% relative when |skewness| > 0.3).
