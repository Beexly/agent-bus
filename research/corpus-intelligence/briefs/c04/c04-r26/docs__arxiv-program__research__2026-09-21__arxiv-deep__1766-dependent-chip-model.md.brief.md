# docs/arxiv-program/research/2026-09-21/arxiv-deep/1766-dependent-chip-model.md
## What it is (1-2 sentences)
Abstract-only deep read of Besalú (2021), "The Dependent Chip Model (DCM)" (arXiv:2102.07738v1) — full text was NOT accessible (ar5iv returned abstract page only), so the file is disqualified per the task's full-text rule. Verdict: REJECT.

## Key metrics/methods (formulas where given, else "not specified")
- DCM: recursive exploration of a multiplayer Texas Hold'em game tree assuming all players have equal skill but different survival prospects from their stacks; prizes arise purely from initial chip amounts (29 pages, 4 figures, 4 tables, 3 algorithms per abstract).
- Key directional claim: DCM awards MORE to top podium positions and LESS to lower ones than ICM (DCM_podium_top > ICM_podium_top; DCM_podium_bottom < ICM_podium_bottom).

## Data sources named
None — no dataset described in the abstract; the method is computational.

## Findings (numbers and facts, not vibes)
- Full text inaccessible → paper disqualified per the "full text only; never abstract-only" task rule regardless of content.
- Poker deal-making (chopping prize pools) has no DFS application — DFS players don't negotiate prize splits; file states this explicitly.
- Equal-skill assumption (all players have identical per-hand win probabilities) acknowledged as a strong limitation.
- Superseded in-lane: ledger 1761 (SCO) already provides a strictly more general, better-validated replacement for ICM-based tournament equity; no DFS transfer exists for prize-chop negotiation.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- REJECT — no usable content: OTHER (poker deal-making; no relevance to QB behavior, coaching, OL, trust signals, or scheme).

## Engine-actionable? (yes/no + one-line what)
No — rejected: abstract-only, poker prize-chop topic with no DFS transfer, superseded by ledger 1761.
