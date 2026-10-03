# docs/ops/evals/studio-sponsor-safe-competitor-claim-block.md

## What it is (1-2 sentences)
Eval spec (pending-runner, created 2026-05-22 by claude) verifying the SPONSOR_SAFE_BLURB template's stricter compliance rules: a Claude-generated newsletter blurb (sponsored by DraftKings) claiming DraftKings has "sharper lines" and "cheaper juice than the other major books" must be blocked red, with at least 2 block-severity flags, publicReady=false, and export buttons hidden.

## Key metrics/methods (formulas where given, else "not specified")
- Layer 3 rule `L3-BEST-BOOK`: pattern `/\b(best book|sharpest lines?|cheapest juice|lowest hold|fastest payouts?)\b/i` → severity `block`.
- Sponsor-safe template-specific rule forbids "than the other major books" cross-operator comparison → severity `block`.
- Expected scanner status `red`; `CreatorAsset.publicReady === false`; UI shows both flags inline; regeneration offered with reinforced "no competitive claims about sportsbooks" instruction; Studio MUST NOT silently strip phrases and present a cleaned version.

## Data sources named
- None.

## Findings (numbers and facts, not vibes)
- Test fixture quote: "For the sharpest lines on this matchup, DraftKings consistently offers cheaper juice than the other major books."
- Tagline in fixture: "Galaxy Sports Edge — math you can read."
- Status: pending-runner.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: compliance/sponsor-safety doctrine only.
- No QB, coaching, OL, or scheme material.

## Engine-actionable? (yes/no + one-line what)
**No** — content-compliance eval spec; no sports-intelligence content.
