# docs/fable/github/ISSUE_06_CLEAN_ROOMS_SYNTHETIC_PARTNER_DEMO.md
## What it is (1-2 sentences)
GitHub issue spec for a synthetic AWS Clean Rooms partner demo: partner schemas are entirely synthetic, demonstrating that partnerships can be "technically imaginable without exposing raw data." Acceptance criteria require partner schemas across six cohorts, allowed/disallowed query examples, and explicit privacy thresholds.
## Key metrics/methods (formulas where given, else "not specified")
not specified — no formulas or numeric thresholds given in this file (thresholds referenced as "explicit" but values live in `docs/fable/aws/clean-rooms-demo/*`, not this doc).
## Data sources named
- `docs/fable/aws/clean-rooms-demo/*` (synthetic partner schemas: media, DFS/fantasy, sportsbook/operator, team/training, data-provider, community cohort)
## Findings (numbers and facts, not vibes)
- Six required partner-schema cohorts: media, DFS/fantasy, sportsbook/operator, team/training, data-provider, community cohort.
- Explicit risk: synthetic demo could be mistaken for a real partnership; flagged "Owner Decision Needed: Partner and legal review."
- Test plan: docs review plus `npm run fable:evidence`.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Synthetic clean-rooms schemas spanning DFS/fantasy, sportsbook/operator, team/training cohorts — TRUST-SIGNAL
- Privacy thresholds + allowed/disallowed query examples as privacy-by-design pattern for data partnerships — TRUST-SIGNAL
- Media/data-provider/community partner-schema templates as partnership design input — OTHER
## Engine-actionable? (yes/no + one-line what)
yes — six-cohort synthetic partner-schema template is a design pattern the engine's future data-partnership plumbing can reuse for privacy-safe collaboration.
