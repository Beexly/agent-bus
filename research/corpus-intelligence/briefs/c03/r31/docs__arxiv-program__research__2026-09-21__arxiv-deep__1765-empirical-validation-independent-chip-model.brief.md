# docs/arxiv-program/research/2026-09-21/arxiv-deep/1765-empirical-validation-independent-chip-model.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv:2506.00180v1 (Juho Kim, 2025), an empirical validation of the Independent Chip Model (ICM) on 10,000+ poker tournaments, finding ICM is roughly valid but systematically miscalibrated by stack size. Verdict: REJECT — poker-specific throughout, no transferable method for DFS or GSE.

## Key metrics/methods (formulas where given, else "not specified")
- ICM: P_i(1st) = chips_i/Σchips; P_i(kth) via recursive conditional probabilities.
- Calibration finding: E[realized | ICM-predicted] shows ICM underestimates P(large stack wins) and overestimates P(short stack cashes); large stacks are large partly because they're skilled (skill-homogeneity violation).

## Data sources named
New dataset of 10,000+ poker tournaments (paper's contribution; availability not verified). No code repo linked.

## Findings (numbers and facts, not vibes)
- [OTHER] ICM beats the proposed baseline (exact margins in the paper's tables — not quoted in the ledger).
- [OTHER] Consistent with Henke's WPT finding cited in 0911.3100: ICM underestimates large-stack performance, overestimates short-stack performance.
- [OTHER] The stack-size miscalibration finding has no DFS translation: DFS has no chip stacks, no eliminations, no ICM analogue.
- [OTHER] Tournament-equity value already better covered by ledger 1761 (SCO approach).

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] REJECT — no DFS implementation path; validation methodology requires chip-stack data nonexistent in fantasy sports.
## Engine-actionable? (yes/no + one-line what)
No — reject; poker ICM calibration does not transfer to any GSE lane, and ledger 1761 covers tournament equity better.
