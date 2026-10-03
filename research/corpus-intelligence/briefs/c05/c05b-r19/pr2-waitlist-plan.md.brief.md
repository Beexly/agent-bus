# docs/gse/pr2-waitlist-plan.md
## What it is (1-2 sentences)
The PR2 build plan for GSE's waitlist landing page: route locations, a preferred lightweight leads table, no-op analytics, validation, test plan, stop conditions, and owner gates.

## Key metrics/methods (formulas where given, else "not specified")
- Storage: Option A (reuse Cockpit/lead tables) vs Option B (new `gse_waitlist_leads` table with explicit consent + tracking columns); preferred now = Option B for traceability and PR1 separation.
- Routes/components: `apps/web/app/waitlist/page.tsx`, `apps/web/app/api/waitlist/route.ts`, `apps/web/components/gse/`, `apps/web/lib/` validation + UTM parsing helpers.
- Validation: zod-like input validation with explicit server-side re-check; schema migration in draft mode; no-op analytics layer in PR2 only.
- Analytics counters (aggregate only): started / viewed / submitted / blocked; no third-party tracking without owner approval.
- Test plan (5): form renders/validates; consent required; claim-gate unit checks for banned terms; backtest-truth visibility in public-safe section; owner-review queue status updatable.
- Stop conditions: any request for public performance claims; missing source tracking/consent path; money/pricing without owner-approved billing path; cross-lane data/brand leakage with XXX/other lanes.
- Owner gates: no external sends/publishes; no pricing changes; no sportsbook/affiliate framing; final release blocked until trust + owner gates approved.

## Data sources named
- None (web feature plan; no data sources).

## Findings (numbers and facts, not vibes)
- Preferred schema: dedicated `gse_waitlist_leads` table, not reusing existing onboarding tables.
- Four aggregate counters only — no PII-level tracking in PR2.
- Claim-gate checks for banned terms are unit-tested, not manual.
- Brand isolation enforced as a stop condition (no cross-lane leakage).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: consent-required flow, claim-gate unit tests, backtest-truth visibility in the public-safe section, and hard stop conditions against performance claims.
- OTHER: web feature planning.

## Engine-actionable? (yes/no + one-line what)
No — waitlist web feature plan; no engine content.
