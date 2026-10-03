# gse/waitlist-spec.md
## What it is (1-2 sentences)
Product spec for the "Founding Decision-Process Lane" waitlist page: headline/subhead/body copy, lead fields, validation rules, consent language, no-performance-claim rules, source tracking, thank-you state, and PR2 implementation notes.
## Key metrics/methods (formulas where given, else "not specified")
Validation: email format + dedupe by address; required fields = name, email, role, one sports interest; consent must be explicit before any follow-up; optional fields nullable text, never required for queue entry. Source tracking captures UTM fields, referrer + path, timestamp + consent timestamp, versioned copy ID. Otherwise not specified.
## Data sources named
None — copy/messaging spec only. Implementation: form route in `apps/web/app/waitlist`; Postgres-backed lead table or new `WaitlistLead` table.
## Findings (numbers and facts, not vibes)
- Headline: "Founding Decision-Process Lane"; subhead: "For operators who want clarity first, not hype." Body copy: "No guaranteed picks. No performance promises." "Current calibration is in trust-first review mode."
- Role values: operator / analyst / founder / bettor; sports interests multi-select; free-text "weakest process" field.
- Consent language: opting in to "non-promotional process updates, research notes, and audit lane updates"; unsubscribe from non-essential touches anytime.
- No mention of projected returns, hit-rates, guaranteed odds advantage, or profit outcomes anywhere in waitlist copy — process language and truth disclosure only.
- Thank-you: "Thanks — your waitlist slot is captured. You are queued for founder review and will receive the next available opening note."
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] The entire spec is refusal-native copy: no performance claims, calibration in "trust-first review mode" — the waitlist doubles as a trust-signal acquisition funnel.
## Engine-actionable? (yes/no + one-line what)
No — copy/spec artifact; no engine mechanics.
