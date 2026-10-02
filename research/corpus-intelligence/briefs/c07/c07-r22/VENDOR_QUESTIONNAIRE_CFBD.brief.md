# legal/VENDOR_QUESTIONNAIRE_CFBD.md
## What it is (1-2 sentences)
Vendor/terms clearance checklist for CollegeFootballData (CFBD): registry entry `collegefootballdata`, currently `vendor_candidate` (all rights flags false), aiming for `approved_api` status for college-football FACTS only — feeding the QB college→NFL transition signal. Ingestion stays BLOCKED until every checklist box is checked, including a human/legal read of the JS-rendered Terms page.
## Key metrics/methods (formulas where given, else "not specified")
Free-tier limit: 1,000 calls/month (Bearer token, `CFBD_API_KEY`, never committed). Paid tiers $1–$30/mo. Data scope: FACTS only — games, teams, box scores, schedules, college passing/scheme stats; proprietary ratings/outputs (e.g. SP+) excluded from ingestion that feeds claims (reference only); no images/logos. Otherwise not specified.
## Data sources named
CollegeFootballData (collegefootballdata.com/key); cfbfastR (MIT-licensed R wrapper); official Python/TypeScript/C# libraries.
## Findings (numbers and facts, not vibes)
- Highest-priority free CFB stats candidate; the free tier is "generous for the targeted college→NFL signal."
- The concrete use case: college passing/scheme facts feed a QB college→NFL transition signal.
- Gate mechanics: flip to `approved_api`, enable automation/storage/derived flags, set reviewed_at/reviewed_by + evidence URLs; remove from `sports-data-candidates.ts` on clearance.
- Schema rule: verify each endpoint's REAL schema live before building the adapter; never guess columns; pin verified schema; record freshness/update cadence against the no-stale-data rule.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [QB-BEHAVIOR] The stated use case — college passing/scheme data feeding the QB college→NFL transition signal — is a QB-behavior data lane.
- [SCHEME] College scheme stats are explicitly named as in-scope facts, tying college scheme data to the NFL transition signal.
- [OTHER] Source-rights registry mechanics (vendor_candidate → approved_api; facts vs proprietary-outputs separation).
## Engine-actionable? (yes/no + one-line what)
Yes — CFBD is the designated free source for the QB college→NFL transition signal; wire college passing/scheme facts once the terms-read gate clears.
