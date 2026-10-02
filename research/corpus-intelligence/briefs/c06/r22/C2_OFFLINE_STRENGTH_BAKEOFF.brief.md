# docs/ops/C2_OFFLINE_STRENGTH_BAKEOFF.md
## What it is (1-2 sentences)
Spec for a landed measurement-only harness (`apps/web/lib/ratings/offline-strength-feature-bakeoff.ts`) that compares strength-feature candidates (current, elo, btl, pi, market) on settled rows — with explicit instructions not to swap any live rating system.
## Key metrics/methods (formulas where given, else "not specified")
Comparison table reports Brier, logLoss, MAE (+ MAE deltas) per candidate on identical settled rows.
## Data sources named
Settled picks rows / feature store (when available) mapped to `OfflineStrengthRow`; fixture `OFFLINE_STRENGTH_BAKEOFF_FIXTURE`.
## Findings (numbers and facts, not vibes)
- Harness is measurement-only: done when vitest is green on fixture and the table compares current/elo/btl/pi/market — no production rating swap, no MODEL_VERSION change, no gate flips.
- Next step (not this unit): feed identical-row settled picks with real Elo/BTL/pi differentials from the feature store when available.
- arXiv anchor papers pinned for this category: 2405.10247, 2408.08331 (do not re-search arXiv).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: rating-system evaluation methodology.
- TRUST-SIGNAL: offline bake-off before any live swap is a trust-preserving evaluation pattern.
## Engine-actionable? (yes/no + one-line what)
yes — run the bakeoff on identical settled rows before adopting Elo/BTL/pi rating features into scoring.
