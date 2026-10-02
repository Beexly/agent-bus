# docs/positioning.md
## What it is (1-2 sentences)
GSE's brand positioning doc (last updated 2026-05-22): consumer-facing wedge is transparent, deterministic sportsbook research — "We're not AI. We're math you can read." Bans AI framing in public copy and defines the Free/Pro/Elite tier narrative and a public-methodology rule (publish framework, withhold implementation).
## Key metrics/methods (formulas where given, else "not specified")
- not specified (copy doctrine, not model math). Operational cadence stated: "Most days, fewer than five picks. Thin slate? We post less. Sometimes nothing."
- Public methodology rule: publish factors, conceptual approach, gating philosophy, changelog; withhold weights, constants, exact aggregation formula.
## Data sources named
- None.
## Findings (numbers and facts, not vibes)
- Primary line: "We're not AI. We're math you can read." General-intelligence repositioning is explicitly forbidden in public marketing copy.
- Banned terms (machine-readable list at `apps/web/lib/positioning-vocab.json`; runtime lint `apps/web/lib/compliance-scanner/rules.ts`, CI lint `scripts/guardrails/trust-gate.mjs`, `npm run lint:brand`): AI-powered/driven/assisted/based/enabled/generated, "our AI", machine learning (when describing engine/picks), "Mission Control", "ecosystem", "transform / unlock your / level up / your edge starts here", first-person algorithm voice, personified board/model language, "pick card / VIP card", certainty language around outcomes.
- Tier narrative: Free = "See it" (one pick/day + public surfaces); Pro = "Bet it" (every pick, confidence, reasoning, factor breakdown, alerts); Elite = "Master it" (full analysis, advanced tools, weekly learning digest, early access).
- Pick cadence: model posts only when it finds edge — most days fewer than five picks.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — brand/copy doctrine; no sports-behavior content. INFERENCE: the deterministic-scoring posture and "publish framework, withhold implementation" rule constrain how engine factor-breakdown copy can be surfaced publicly.
## Engine-actionable? (yes/no + one-line what)
No — copy doctrine only; no model inputs or data. (Useful as a constraint reference for surfacing engine outputs, not an input to them.)
