# gse/waitlist-spec.md

## What it is (1-2 sentences)
The waitlist product spec defining the "Founding Decision-Process Lane" page copy, lead capture fields, validation and consent rules, source tracking, and the thank-you state — the public-facing funnel for the no-claim sports-decision audit offering (PR2 implementation notes at the end).

## Key metrics/methods (formulas where given, else "not specified")
- No formulas; validation rules: email format + dedupe by address; required fields = name, email, role, one sports interest; consent must be explicit before any follow-up; optional fields stored as nullable text and never required for queue entry.

## Data sources named
None (no external data; the store is the internal lead table). Referenced: the PR2 implementation note targets `apps/web/app/waitlist` as the form route and either the existing Postgres-backed lead table or a new `WaitlistLead` table.

## Findings (numbers and facts, not vibes)
- Page copy (verbatim): Headline "Founding Decision-Process Lane"; Subhead "For operators who want clarity first, not hype."; Body: "No guaranteed picks. No performance promises." / "Join the founding waitlist for a process audit, source-quality checks, and no-claim sports decision guidance." / "Current calibration is in trust-first review mode."
- Lead fields: full name; email (required); role — one of operator / analyst / founder / bettor; sports interests (multi-select); current stack or workflow summary; "What process is weakest today?"; consent checkbox for occasional founder update emails.
- Consent language (verbatim): "You are opting in to non-promotional process updates, research notes, and audit lane updates. You can unsubscribe from non-essential touches at any time."
- No performance claims rule: no mention of projected returns, hit-rates, guaranteed odds advantage, or profit outcomes in waitlist copy — process language and truth disclosure only.
- Source tracking: capture UTM fields, referrer and path, timestamp + consent timestamp, versioned copy ID for audit.
- Thank-you state (verbatim): "Thanks — your waitlist slot is captured. You are queued for founder review and will receive the next available opening note."
- PR2 implementation notes: build as form route in `apps/web/app/waitlist` after PR2; store in existing Postgres-backed lead table or a new `WaitlistLead` table; add soft-delete and consent timestamp metadata.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: The waitlist is the trust-funnel intake — it sells "process audit, source-quality checks, and no-claim sports decision guidance" with zero performance claims, and the captured fields (role, sports interests, current stack, weakest process) are the intake questionnaire for the trust-target program. The role options (operator/analyst/founder/bettor) define the trust-target segmentation.
- OTHER: The copy ID versioning ("Capture versioned copy ID for audit") plus consent timestamps create an audit trail for every lead — consistent with the no-claim CI enforcement in the other briefs; serves the compliance side of the trust lane.

## Engine-actionable? (yes/no + one-line what)
No — a public-funnel copy/product spec; relevant to the trust-target intake program, but no methods or numbers to wire.
