# legal/SIRIUSXM_CONNECTION.md
## What it is (1-2 sentences)
Legal posture memo on the SiriusXM audio ingestion lane: the customer's SiriusXM agreement contractually bars any automated capture, transcription, or AI claim-extraction from the stream, so the `siriusxm-streaming` source-rights registry status is `permission_required` and the `siriusxm-activator` tool stays permanently excluded. It defines two lanes — manual listener log (available now) and written license (unlocks automation) — plus engineering invariants.

## Key metrics/methods (formulas where given, else "not specified")
- Contract clauses deciding the outcome:
  - §9(d) Personal Use — subscription is personal, non-commercial, household-only; platform use is commercial, so the owner's paid plan unlocks nothing.
  - §9(l) AI Matters — no web scraping/extraction; services data may not be used to create, train, or improve any AI service, directly or indirectly — bans automated capture/transcription/claim-extraction regardless of subscription tier.
  - §9(j) Code of Conduct — no reproducing/reselling/exploiting any resource on the Service.
  - §11 Content — all content is SiriusXM's or licensors'; no rights granted by subscribing.
- Reviewed 2026-06-12; underlying Customer Agreement dated 2025-06-05.
- Engineering invariants: `checkClearance("siriusxm-streaming")` must return `allowed=false` for any automated job until a license is on file; manual Airwave entries citing SiriusXM must carry the registry attribution text and a `manual_listener_log` provenance marker.
- No formulas given (not specified).

## Data sources named
- SiriusXM streaming service (contractually blocked for automation).
- Manual listener log intake fields: pundit name, claim, date/show — entered by a human listener into "Airwave intake" (Airwave's existing manual-intake lane).
- Free podcast/YouTube versions of the same shows (hosts' openly published feeds/RSS) — treated as separate sources, evaluated on their own terms via the registry; noted as having "far friendlier terms."
- Fantasy Sports Radio named as the example SiriusXM sports-talk programming of interest.

## Findings (numbers and facts, not vibes)
- Status `permission_required` (source-rights registry: `siriusxm-streaming`).
- Bottom line stated plainly: "the owner's paid plan does not unlock any automated pipeline."
- Lane 1 (Manual listener log, available today): human listens on their own subscription, manually enters short factual claims — pundit name, claim, date/show — with attribution; no recordings, no transcripts of expression, no automation touching the SiriusXM stream or app.
- Lane 2 (Written license, unlocks automation): signed agreement with Sirius XM Radio LLC covering automated capture or analysis; until countersigned paper exists, every registry flag stays `false`.
- A ready outreach draft is included: license inquiry for "short factual claim extraction with on-air attribution," explicitly not seeking rebroadcast/storage/redistribution of audio; direction to find the right channel via SiriusXM business/partnerships pages (customer-care addresses in the agreement are not the licensing desk).
- The `siriusxm-activator` tool "remains permanently excluded" — characterized as circumventing paid activation.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **TRUST-SIGNAL**: Manual intake requires attribution + provenance marker (`manual_listener_log`) — the trust-model for human-curated expert-signal claims feeds the same "show your work" doctrine as the 30-day campaign plan.
- **OTHER**: Legal/licensing doctrine — INGEST-AND-LEARN applies (restricted license = research/learn-only posture, not necessarily discard), but §9(l) explicitly bans even indirect AI improvement from the data, so this lane is HARD-BLOCKED for automation, not just rights-gated. Key precedent for the engine: contract terms can outrank subscription access.
- **OTHER**: The "free podcast/YouTube/RSS versions are separate sources" rule is a reusable legal pattern for sourcing expert audio — friendly-terms feeds are first-class candidates.
- No QB-BEHAVIOR, COACHING, OL, or SCHEME content.

## Engine-actionable? (yes/no + one-line what)
No — legal/operational guardrail, not engine methodology; actionable only as a hard constraint: never wire automated SiriusXM capture/transcription/claim-extraction into Airwave or the expert-signal pipeline, and enforce `allowed=false` clearance until a written license exists.
