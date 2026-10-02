# docs/arxiv-program/research/2026-09-21/arxiv-deep/1369-kelly-criterion-revisited-optimal-bets.md
## What it is (1-2 sentences)
Ledger for arXiv:physics/0607166v1 (Piotrowski & Schroeder, 2006) re-deriving the Kelly criterion for parimutuel ("fair odds") bookmaker bets, yielding an optimum plus an entropy decomposition of max profit. Verdict: ADAPT (only the parimutuel optimum and entropy decomposition; the projective-geometry framing and big-investor "no-go" hypothesis are speculative and excluded).
## Key metrics/methods (formulas where given, else "not specified")
- Set-up: binary bookmaker bet; gambler m stakes in_k on event k; pool totals IN_k = Σ_m in_k^m (eq. 1); parimutuel fair-odds condition out_k^m = α_k·in_k^m with α_k = (IN_1 + IN_2)/IN_k (eqs. 2–4); all fees/taxes ignored.
- Expected log-profit E(z_k)(l_1,l_2) = p_1·ln(1 + (IN_2/IN_1)·l_1 − l_2) + p_2·ln(1 + (IN_1/IN_2)·l_2 − l_1) (eq. 5), where l_k = in_k/all_0 is the fraction of capital staked.
- **Kelly optimum (unconstrained):** (l̄_1 − p_1)·IN_2 = (l̄_2 − p_2)·IN_1 (eq. 6) — a line of optimal strategies in (l_1, l_2) space.
- **Max profit / entropy decomposition:** E(z_k)(l̄_1,l̄_2) = −Σ_{k=1,2} p_k·ln((IN_1+IN_2)/IN_k) − S (eq. 7), where S = −Σ_k p_k·ln p_k is the Boltzmann/Shannon entropy. Max profit = "unpopularity profit" (the seer's profit from betting against the crowd) minus entropy; nonnegative — profit is zero iff p_1·IN_2 = p_2·IN_1 (crowd matches true probabilities).
- **No-short optimum:** (l_1* = p_1 − (IN_1/IN_2)·p_2, l_2* = 0) when p_1·IN_2 > p_2·IN_1 (index-swapped otherwise); under Laplace indifference (IN_1 = IN_2) reduces to (l_1* = p_1 − p_2, l_2* = 0) — the classic Kelly result.
- Big-gambler extension: optimality conditions reduce to degree-5 polynomials (eq. 9, Appendix Mathematica 5.2 code) — no closed form (Galois), numerical solutions only.
## Data sources named
No empirical data — analytical proof-based paper; no dataset.
## Findings (numbers and facts, not vibes)
- No numerical results beyond the symbolic Appendix output; no baselines vs other strategies (analytical work only).
- Structural claims: (a) the projective-geometry machinery (cross ratios, Hilbert metrics) is decorative — eqs. 6–7 follow from standard calculus; (b) the "no-go" hypothesis for big investors is philosophical with no operational consequence (degree-5 unsolvability does not prevent numerical optimization, which the authors themselves note); (c) US sportsbooks are fixed-odds with vig, not pool-sharing — the fair-odds condition is an idealization, and reinterpreting IN_k as handle share is an analogy, not an identity.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (bankroll/bet-sizing): complements corpus ledgers 0813/1200/1366–1368 (all assume fixed odds and an isolated bettor); this is the only corpus source for the "unpopularity profit" concept — value as a function of where the crowd's money sits relative to true probabilities.
- TRUST-SIGNAL: explicit acceptance gate — ADOPT the unpopularity premium only if it improves realized log-wealth growth vs base Kelly with no worse max drawdown; REJECT if public betting percentages prove too noisy (premium sign flips on >30% of picks between line snapshots).
## Engine-actionable? (yes/no + one-line what)
Yes — two small additions to the sizing step: (1) an "unpopularity premium" term on the Kelly fraction proportional to (p_i·(1−h_i) − (1−p_i)·h_i) using public betting percentages as the crowd-handle proxy, tilting stakes toward picks where the engine disagrees with the crowd's money; (2) an entropy gate deprioritizing picks where market-implied binary entropy dominates the disagreement term; backtest on GSE engine 2024–2025 NFL picks vs base Kelly.
