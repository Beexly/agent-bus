# docs/product/cockpit-losses-spec.md
## What it is (1-2 sentences)
Phase 3 operator-only UI spec for authoring `LossAutopsy` entries on settled losses — a landing page listing losses needing autopsies plus an authoring editor with 4 required narrative fields, a root-cause enum, pre-mortem comparison tagging, and a compliance scanner, publishing to the public Loss Room at `/performance/losses/[id]`.
## Key metrics/methods (formulas where given, else "not specified")
- Headline hard-capped at 140 chars; `isPublic` defaults FALSE; editor auto-save every 30s (open item, default yes).
- `whatWeLearned` must commit to one of: (a) this changes factor weight X, (b) this is variance, (c) known limitation addressed in model version N.
- Pre-mortem comparison: each pre-mortem bullet tagged CALLED / DID_NOT_HAPPEN; "pre-mortem missed the actual cause" auto-checked when rootCause's expected factor matches no bullet's factorKey (mapping in `lib/pre-mortem/compare.ts`).
- Compliance scanner (layered rules via `getRulesForTemplate('LOSS_AUTOPSY')`): hard refusal on banned vocabulary, exculpatory language ("tough loss," "bad luck," "the refs"), blame-external-factors framing, aggregate win-rate claims, competitor comparisons; yellow on hedging ("might have been") and defensive framing ("we still believe").
- Edit-after-publish is append-only: body immutable, lessonTags/evidenceRefs append-only, retraction via decision-log entry → public surface 410 Gone.
- Hard refusals: no publish without all narrative fields; no compliance bypass on red; no body edits on PUBLISHED; no deletes; no Claude-API auto-suggested narrative text.
## Data sources named
Companion specs: `docs/product/ledger-and-loss-room-spec.md` (public Loss Room), `docs/product/galaxy-memory-persistence-spec.md` (Memory cross-refs). Code location: `apps/web/app/cockpit/losses/`, `apps/web/components/cockpit/losses/`. 11 acceptance criteria for Phase 3 v0 → green.
## Findings (numbers and facts, not vibes)
- Losses awaiting autopsy are auto-populated from settled losses lacking a `LossAutopsy` row.
- Publish propagates cross-references: Game Room Galaxy Memory slot link, Ledger row 📋 Autopsy badge, Model Journal draft view linkage, Twitter bot post-mortem thread queue.
- Example loss rows in spec: LAL +145 @ GSW (NBA), MIN +6 @ PIT (NFL), TOR @ BOS (MLB), NYK +3.5 @ MIA (NBA) with root causes like VARIANCE, INJURY_SHOCK.
- Three open items: 30s auto-save (default yes), autopsy deadline (default no hard deadline; soft alert at 14+ days), non-operator authors (default no in v0; `authorEmail` locked to cockpit-authenticated operator).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (TRUST-SIGNAL) Autopsy system is the core transparency posture; "strongest moat against tout-coded competitors" when done honestly; defensive/exculpatory autopsies become "marketing dressed as honesty."
- (TRUST-SIGNAL) Compliance scanner hard-refuses exculpatory language and aggregate win-rate claims — honesty constraints are machine-enforced, not policy docs.
- (OTHER) `whatWeLearned` commits to factor-weight changes — creates a feedback loop from losses into model factor weights (engine-relevant loop).
- (OTHER) Pre-mortem CALLED/DID_NOT_HAPPEN tagging plus "missed cause" flag generates a pre-mortem coverage score per autopsy (INCOMPLETE in example) — measurable pre-mortem quality metric.
- (OTHER) Append-only persistence with retraction requiring a decision-log entry — provenance discipline on the public record.
## Engine-actionable? (yes/no + one-line what)
Yes — harvest "whatWeLearned → factor weight change" commitments and pre-mortem missed-cause flags as a structured calibration signal: each autopsy yields which factor was under/over-weighted and whether the pre-mortem covered the root cause.
