# docs/devrel/MARKETPLACE_CHECKLIST.md
## What it is (1-2 sentences)
Internal planning checklist for marketplace listing readiness (AWS, Cloudflare, GitHub Marketplace) — gates, packaging, terms, support/SLA, security review — explicitly not a filled submission and not legal advice.
## Key metrics/methods (formulas where given, else "not specified")
- Gate metric: usageSummary() (apps/web/lib/platform/usage-meter.ts) must show non-zero real usage over a trailing 30 days on the relevant provider before pursuing a listing
## Data sources named
usageSummary()/usage-meter.ts (internal telemetry); references CASE_STUDY_TEMPLATE.md NON-CLAIMS rules
## Findings (numbers and facts, not vibes)
- Hard gate: no listing on zero real usage — "a listing built on zero real usage has nothing to point to and risks overstating traction"
- Security review items (all three marketplaces): data handling/retention documented, auth model documented (least-privilege scopes), no live provider credentials committed to repo, incident-contact process defined
- Non-claims discipline for listing copy: no compliance/certification claims without a real current certificate, no "unprecedented" language, no "permanent" uniqueness/moat claims, every metric cited to a real source
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Trailing-30-day non-zero-usage gate is an anti-overclaim trust primitive [TRUST-SIGNAL]
- No QB-BEHAVIOR/COACHING/OL/SCHEME content [OTHER]
## Engine-actionable? (yes/no + one-line what)
No — marketplace/compliance planning doc; intake only.
