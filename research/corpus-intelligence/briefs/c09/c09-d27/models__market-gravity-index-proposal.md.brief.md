# models/market-gravity-index-proposal.md
## What it is (1-2 sentences)
Pre-build math proposal (per tracker law "math proposal first") defining the Market Gravity Index: how strongly the market pulls individual books toward the consensus fair price over the capture window — convergence as "gravity." Derives only from existing multi-book odds snapshots de-vigged via `packages/prediction-engine/src/market-read.ts`.
## Key metrics/methods (formulas where given, else "not specified")
- For a game market with ≥2 books and ≥2 snapshots per book: de-vig each book's earliest and latest quote; dispersion at each end `D_early = mean |book_fair_i − consensus_fair|` across books at earliest quotes; `D_late` likewise at latest. **Gravity `G = 1 − (D_late / D_early)`, clamped to [−1, 1].**
- Reading: `G → 1` = books collapsing onto consensus (strong gravity); `G ≈ 0` = dispersion unchanged; `G < 0` = books diverging — flagged as the interesting state (divergence = disagreement signals matter most).
- Null guards (never 0): <2 books or <2 distinct snapshot times → null; `D_early < 0.25` percentage points → null (books already agreed; ratio on near-zero dispersion is noise).
- Stated weaknesses: capture-window bounded (not tick-by-tick); convergence ≠ correctness (books can converge on a wrong number); book-composition change mid-window biases dispersion — guard is to compare only books present at both ends.
## Data sources named
Multi-book odds snapshots over the capture window (existing capture infrastructure); de-vig via `packages/prediction-engine/src/market-read.ts`; drift column in the same machinery.
## Findings (numbers and facts, not vibes)
- The index surfaces on the Market Fair Board (`/observatory`) next to the Drift column; magenta when `G < 0`; tooltip carries the weakness line; null renders as an em-dash (no zero-cosplay).
- Acceptance criteria: owner-approved math, pure function + tests (converging fixture, diverging fixture, every null guard), honest null rendering.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: market-behavior signal — book convergence/divergence as a feature feeding pick decisioning; explicitly distinct from correctness (convergent books can be wrong).
## Engine-actionable? (yes/no + one-line what)
Yes — book-consensus-convergence (G with its null guards and −1/1 clamp) is a concrete market-signal feature to wire into the engine's market read / disagreement layer.
