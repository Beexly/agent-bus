# arxiv-program/research/2026-09-21/arxiv-deep/1349-diversity-is-key-fantasy-football-dream.md
## What it is (1-2 sentences)
Fantasy Premier League study with a rigorous three-step dominance-pruning data-reduction algorithm that makes salary-cap lineup optimization tractable (~10^23 → ~10^7 combinations, verified by integer programming, code on GitHub), plus a retrospective diversity-of-salaries regularity; verdict ADAPT.

## Key metrics/methods (formulas where given, else "not specified")
- Three-step dominance pruning: (1) per cost value and position, keep only top-n_e scorers (n_e = max players of that position in any allowed formation); (2) per points value and position, keep only cheapest n_e; (3) Algorithm 1: sweep budgets upward, discarding any player never in the affordable top-n_e (strictly dominated: higher cost + lower points than a same-position peer).
- IP verification (PuLP): maximize Σ points_i·x_i s.t. Σ GK = 1, 3 ≤ Σ DEF ≤ 5, 3 ≤ Σ MID ≤ 5, 1 ≤ Σ FWD ≤ 3, Σ x_i = 11, Σ cost_i·x_i ≤ budget, x_i ∈ {0,1}.
- Diversity test "bin method" (Algorithm 3): 11 equal bins spanning a team's variable range; ≤3 empty bins = diverse; random-team null computed analytically (random XI has ~6 players in 2 salary bins → ≥4 empty bins → not diverse).

## Data sources named
Fantasy Premier League (FPL), 5 seasons 2016/17–2020/21, 684–714 active players; FPL website API + Vaastav's GitHub FPL historical repository; per player: id, end-of-season cost, total season points, element type.

## Findings (numbers and facts, not vibes)
- Reduction: ~10^23 theoretical XIs (684 choose 11) → ~7×10^7 after pruning; runtime from "a few thousand years" to "a matter of hours on a standard computer."
- Optimal-team points scale logarithmically with budget; 2020/21: budget 500 → 1,182 pts; 1000 → 2,178 pts (best actual cost 980).
- Dominant formations: 3-5-2, 4-5-1, 5-4-1; lower budgets favor more defenders/fewer forwards, higher budgets the reverse.
- 72% of the 385 optimal teams have diverse salary distributions (5 seasons × 7 formations × 11 budgets); 69% in the cross-season pool; 11 of 12 other variables also diverse — only red cards non-diverse.
- Limitations: oracle by construction (end-of-season totals, hindsight — explicitly cannot predict); FPL/soccer-specific; diversity threshold ad hoc; bin-diversity ≠ causal prospectively.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (DFS optimizer engineering): three-step dominance pruning as a preprocessing step for GSE's salary-cap MILP (prune on (projection, salary, ownership) triples weekly) — expected ≥10× solver speedup enabling larger player pools and more GPP lineups.
- OTHER (GPP construction): salary/projection-spread diversity constraint as a tournament heuristic — 72% regularity suggests optimal ex-post lineups are rarely stars-and-scrubs clumps; INFERENCE — parallels DK GPP ownership-diversification dynamics.

## Engine-actionable? (yes/no + one-line what)
Yes — port the dominance-pruning preprocessor into the DFS optimizer (accept if exact optima on all test slates with ≥10× speedup); test a bin-diversity constraint in GPP sets for realized ROI lift over pure max-projection lineups.
