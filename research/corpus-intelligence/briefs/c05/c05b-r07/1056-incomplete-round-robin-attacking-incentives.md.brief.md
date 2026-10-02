# arxiv-program/research/2026-09-21/arxiv-deep/1056-incomplete-round-robin-attacking-incentives.md
## What it is (1-2 sentences)
Full-paper deep read (ledger 1056, arXiv:2509.13141v1, Csató 2025) of a simulation study showing incomplete round-robin tournaments (the new 36-team Champions League league phase: 8 of 35 possible opponents) increase teams' offensive incentive vs the old complete group format, because goal difference and goals scored break ties among teams with unequal schedules.

## Key metrics/methods (formulas where given, else "not specified")
- Four-parameter pot-based independent Poisson model: team scoring rates parametrized by pot (strength tier) membership — formal specification stated verbally, no explicit equations given.
- Attacking incentive: marginal increase in qualification/elimination-avoidance probability from an additional goal — computed by simulation (not a closed-form metric).
- Validation: one million replications per (design, match type); designs = old 8×4 group format vs new 36-team incomplete round-robin, calibrated to the Champions League pot structure.

## Data sources named
- Pure simulation study calibrated to Champions League pot structure; no new empirical match dataset. No code/data stated in the paper. Companion to ledger 1058's match classification.

## Findings (numbers and facts, not vibes)
- New Champions League phase increased attacking incentives by +119% for direct Round-of-16 qualification and +58% for avoiding elimination, on average, vs the old format.
- Core lesson per the paper: format changes move goal expectancy, not just qualification probability — the same fixture under the old group format and the new league phase has different expected goal dynamics.
- Limitations: simulation only — the incentive effect is derived, not measured from actual post-reform goal data; four-parameter Poisson is coarse (ignores team-specific attacking styles); only Champions League structures studied.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, OTHER)
- OTHER: format-aware totals modeling — attacking incentive varies by format, matchday, and table position; late group games with tiebreakers at stake carry higher goal expectancy than raw team strengths imply; when competitions change format (UCL 2024/25, World Cup 2026 expansion), historical goal data from the old format is stale.
- SCHEME (weak, INFERENCE): incentive surfaces are a general mechanism — any scoring/totals engine should condition on format-driven marginal goal value, not just matchup strength.

## Engine-actionable? (yes/no + one-line what)
Yes — precompute attacking-incentive surfaces by simulation per competition format and wire as a feature into the goal-expectancy/totals model; gate = on post-reform UCL data, high-incentive matches must show higher total goals (or goal-supremacy vs market) than low-incentive matches of similar strength.
