# gse/pr3-analytics-provider-plan.md
## What it is (1-2 sentences)
A PLAN-ONLY doc for the GSE waitlist analytics layer (PR3): the event registry (`apps/web/lib/analytics/events.ts`) is a typed no-op `track()` that returns its payload and performs zero network calls; no analytics provider is wired, no key exists, and wiring one is owner-gated on a privacy decision.
## Key metrics/methods (formulas where given, else "not specified")
not specified — no metrics, formulas, or statistical methods in this doc. The only technical spec: provider dispatch must be guarded by `if (PROVIDER_KEY)` so the no-key path keeps `track()` inert; unit test "track is inert and returns payload" must keep passing in the no-key path.
## Data sources named
None (no external data sources). Provider candidates only: PostHog (EU/self-host), Plausible / privacy-first, server-side-only sink, or keep no-op (default).
## Findings (numbers and facts, not vibes)
- 8 waitlist funnel events already registered in the no-op registry: `waitlist_viewed`, `waitlist_started`, `waitlist_submitted`, `waitlist_consent_blocked`, `audit_offer_clicked`, `transparency_read`, `research_brief_clicked`, `claim_gate_hit`.
- Payload rule: only non-identifying funnel context (page/copyVersion, role, offer slug, section, brief id, rule id); never raw email, name, or free-text. If a per-lead identifier is ever needed: salted hash, not the address.
- 5 binding privacy rules: no PII in payloads; consent-gated; no third-party cookies / no cross-site identifiers; honor Do-Not-Track + opt-out; DPA/privacy review precedes any vendor.
- 3 owner gates, all BLOCKED: choosing/enabling a provider and setting its key; any change making `track()` do a network call by default; sending any identifier (even hashed) off-platform.
- Exact next safe action: keep `track()` no-op; if owner picks a provider, implement guarded dispatch in a PR3 branch, add a test asserting no network call without a key, stop before any deploy.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- No-op analytics registry as a trust posture: no PII leaves the platform, consent hard-gated, DNT honored — OTHER (infra/privacy posture). This is the "trust" story of the brand layer, not a football TRUST-SIGNAL, so no sports tag applies.
## Engine-actionable? (yes/no + one-line what)
No — plan-only infrastructure doc with zero football/engine content; useful only as privacy reference for any future funnel analytics on public surfaces.
