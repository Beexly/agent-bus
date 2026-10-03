# media/media-studio-workflow.md
## What it is (1-2 sentences)
Doctrine-only seven-stage media production workflow (Brief → Asset Selection → Creation → Claim Governance Review → Brand Safety Review → Rights/Attribution → Operator Publish) for Galaxy Sports Edge multimedia output; status is doctrine with no automated implementation — every output requires operator review.
## Key metrics/methods (formulas where given, else "not specified")
- Win-rate claim gate: **≥30 settled picks**, defined window, model version required (same threshold as launch-runbook policy).
- Takedown severity: P1 = false win-rate claim published; P2 = governance violation; P0 = incorrect pick settlement.
- Claim-governance table: pick direction → freshness disclosure; confidence score → "not a guarantee" context; injury status → Tier 1 or "Unconfirmed" label; sharp money → Tier 1/2 backing; "Lock"/"Guaranteed" → BLOCKED, no exceptions.
- Approved templates: `social-pick-card-square` (1080×1080), `social-pick-card-wide` (1200×630), `og-image-standard` (1200×630), `story-brief` (1080×1920), `galaxy-almanac-thumbnail` (1280×720).
- AI-permission matrix: AI allowed at stages 1, 2, 4; limited at 3 (Canvas PNG/SVG); forbidden at 5, 6, 7 (operator-only visual/legal/publish).
## Data sources named
- Data payload from Signal Ledger or Evidence Vault when pick/model data is referenced; attribution required: "odds data via The Odds API" when Odds API data displayed.
## Findings (numbers and facts, not vibes)
- Banned visual elements: lock emoji, sportsbook green, casino imagery, fire emoji; brand tokens from `DESIGN.md` only; no AI-generated images of real athletes; no watermarked/unlicensed stock.
- Emergency takedown protocol: remove → document → find the stage that failed → update checklist → void associated pick in Signal Ledger and update performance record if the pick claim was false.
- Codex audit requirements: no automated posting endpoint exists; `/api/og` must be Stage-5 compliant; no media in `public/` without provenance; no auto-publish scheduler wired.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the evidence-tier intake standard (Tier 1/2 backing for sharp-money claims, Tier 1 or "Unconfirmed" for injury status) is directly the trust-signal intake posture — quotes/dynamics from players/coaches would enter at this tiering.
- OTHER: production workflow, not engine signal.
## Engine-actionable? (yes/no + one-line what)
Yes — one-line: the Tier 1/2 evidence-tiering standard for claims and the ≥30 settled-pick win-rate gate are the trust-signal intake rules the engine's claim surfaces must inherit.
