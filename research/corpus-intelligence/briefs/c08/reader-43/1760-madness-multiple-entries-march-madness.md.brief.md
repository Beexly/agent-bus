# docs/arxiv-program/research/2026-09-21/arxiv-deep/1760-madness-multiple-entries-march-madness.md
## What it is (1-2 sentences)
Paper (Decary, Bergman, Cardonha, Imbrogno, Lodi, 2024) on optimizing multi-entry portfolios for top-heavy tournament pools: maximizes Expected Maximum Score (EMS), proves EMS is monotone submodular, develops SAA MILP / greedy / proportional-heuristic optimizers, and validates on a real 2023 DraftKings $1M March Madness pool where a 100-entry portfolio had a simulated 2.2% win probability.

## Key metrics/methods (formulas where given, else "not specified")
- EMS: E[S(ℰ)] = Σ_ω P(ω)·max_{e∈ℰ} s(e,ω), approximated by (1/N)Σ_n max_{e∈ℰ} s(e,ω_n).
- Submodularity: E[S(ℰ∪{e})] − E[S(ℰ)] decreasing in ℰ (diminishing returns to additional entries); greedy has (1−1/e) approximation in principle.
- SAA MILP: max (1/N)Σ_n z_n s.t. z_n ≤ Σ_e y_{e,n}·s(e,ω_n), entry-feasibility constraints.
- Training: March Madness tournaments 2017–2023 (excl. 2020), Kaggle structures, 538 Elo-based win-probability matrices; evaluation on 10,000 fresh simulated brackets per solution.

## Data sources named
Kaggle bracket structures; 538 team win-probability matrices (Elo-based); DraftKings 2023 March Madness pool (12,605 entries, 8,967 participants, $100/entry, 100-entry max, $1M first prize = 80% of pool).

## Findings (numbers and facts, not vibes)
Empirical EMS (out-of-sample, 192 max), 2 entries: SAA 105.7, SIP 103.1, G-SAA 104.7, PROP 100.1, PROP+ 105.9. 3 entries: SAA 111.5, SIP 107.9, G-SAA 110.7, PROP 103.5, PROP+ 111.5. 100 entries: PROP+ 138.62 (dominates; highest SD — desirable for top-heavy payouts). Simultaneous optimization (SAA, PROP+) beats myopic sequential (SIP). Real DK 2023 pool: PROP+ 100-entry portfolio → 2.2% chance of winning $1M ($10,000 staked; 2.2% × $1M = $22,000 expected gross). Key theoretical findings: best individual entry need NOT belong to the optimal portfolio; optimal diversification increases as win probabilities approach 0.5. Monte Carlo check: 250 scenarios gave worst-case 95% CI widths of 0.44 (2 entries) / 0.39 (100 entries) out of 192 points. Exact DP infeasible: 2,548.42s for 2 entries on 64 teams.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: EMS/submodularity/SAA/PROP+ framework ports directly to DFS multi-entry GPP construction (scenarios = simulated slates, entries = lineup vectors); diversification dial (concentrate when confident, diversify when uncertain) as a portfolio rule; proposed field-aware EMS extension (maximize P(beating a synthetic sharp field)) converts the no-field-modeling limitation into a contrarian-leverage optimizer.

## Engine-actionable? (yes/no + one-line what)
yes — Build a greedy-SAA (G-SAA) DFS portfolio optimizer maximizing EMS over simulated slates, plus a field-aware variant targeting win probability against a synthetic sharp field.
