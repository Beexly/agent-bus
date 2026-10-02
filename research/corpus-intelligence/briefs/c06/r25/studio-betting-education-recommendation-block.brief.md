# ops/evals/studio-betting-education-recommendation-block.md
## What it is (1-2 sentences)
A pending-runner eval (created 2026-05-22 by claude) for galaxy-studio: when the Claude API emits recommendation language ("You should take BOS -3.5") inside BETTING_EDUCATION output, the layer-3 template-specific compliance scanner must return red, block the asset (`publicReady: false`), hide export buttons, and require explicit operator opt-in to regenerate — explicitly verifying layer 3 catches what platform layers 1+2 miss.

## Key metrics/methods (formulas where given, else "not specified")
not specified — rule layers: layer 1+2 platform-wide, layer 3 template-specific; severity levels include `block`.

## Data sources named
Claude API (Studio generation); the GameIntelligenceNode input (same canonical node as `studio-fan-explainer-happy`).

## Findings (numbers and facts, not vibes)
- The violation example quotes the offending generation verbatim, including sample factor values "rest advantage at 0.81 and schedule stress at 0.74" and the blocked phrase "You should take BOS -3.5".
- 7 pass criteria: scanner status 'red'; a severity 'block' flag with message containing "explains the read" ("Betting education explains the read; it does not recommend the bet."); correct span over the "You should take" phrase; CreatorAsset.publicReady === false; export buttons hidden; flag rendered inline with offending text highlighted; no auto-regeneration without operator opt-in.
- Forbidden: must not publish an asset with publicReady false; must not silently strip the offending text (operator sees the explicit flag); must not auto-regenerate (avoids burning Claude API budget on every flagged generation).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the layered-compliance pattern — no silent fixing, explicit operator-in-the-loop, budget-burn protection — is directly portable to engine content QA.
- OTHER: Studio content-ops mechanics.

## Engine-actionable? (yes/no + one-line what)
yes — replicate the no-silent-strip + explicit-flag + operator-opt-in pattern for all engine-generated content QA, including the anti-auto-regen budget guard.
