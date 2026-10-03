# docs/product/github-issues-for-model-spec.md
## What it is (1-2 sentences)
Phase 4 spec for a public bug tracker against the scoring engine itself (at `/model-issues/`): users file five issue kinds (factor read bug, gate behavior bug, data quality bug, methodology improvement, edge case), operators triage through a public state machine (OPEN → ACCEPTED → IN_PROGRESS → SHIPPED, plus REJECTED/DUPLICATE/INVESTIGATING/WONT_FIX), and every triage decision ships with a public explanation.
## Key metrics/methods (formulas where given, else "not specified")
- Full Prisma schema given: `ModelIssue` (number, kind, severity LOW/MEDIUM/HIGH, affectedFactor/affectedGate/affectedSource, upvoteCount, commentCount, resolvedInModelVersion), `ModelIssueComment`, `ModelIssueUpvote` (unique per issue/user), `ModelIssueGame` (links issues to Game rows).
- Five issue kinds; explicit NOT-tracked: individual pick disagreements (go to Loss Room autopsies), consumer-product feature requests, website bugs.
- Anti-abuse: auth required (FREE tier ok), rate limit 5 issues/user/day, fuzzy duplicate detection on title+description against OPEN/ACCEPTED, spam filter, per-issue comment locks.
- Triage voice rules: every comment must commit to a decision and explain it (pass example: "Accepted. Confirmed the schedule-stress factor was over-weighting back-to-backs in soccer. Adjusting weight in v6.0.5"); failures: "Thanks for the feedback!", "We'll look into it."
## Data sources named
Decision reference: master plan Part 2.C.6. Code: `apps/web/app/model-issues/`, `apps/web/lib/model-issues/`. Cross-refs: Model Journal weekly essay, `/changelog` per-version issue links, pick detail pages show "Known issues affecting this pick" when an ACCEPTED issue is open.
## Findings (numbers and facts, not vibes)
- 10 acceptance criteria for v0-live including brand-safety scan on triage comments returning zero hits.
- Worked triage example: schedule-stress factor over-weighting soccer back-to-backs → weight adjusted in v6.0.5.
- WONT_FIX example: edge case affecting < 5 games/year documented as known limitation rather than fixed.
- Open items: no anonymous filing (auth required), no Linear/Jira integration in v0 (public tracker stays separate), no contributor leaderboard in v0, no Pro-tier priority triage (merit-based equal treatment).
- "No betting product publishes a public engine issue tracker. That's the point."
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (TRUST-SIGNAL) Public engine bug tracker as community-driven model debugging — radical transparency as product moat; no competitor does this.
- (OTHER) Pick detail pages surface "Known issues affecting this pick" — honest uncertainty attribution tied to open engine defects, directly relevant to published-pick confidence labeling.
- (OTHER) Five issue kinds form a taxonomy of model-failure modes (factor read, gate behavior, data quality, methodology, edge case) — reusable classification schema for the engine's own failure taxonomy.
- (OTHER) Rejected issues get public explanations ("variance, not a bug, see the autopsy") — feedback loop connecting Loss Room autopsies to issue tracker verdicts.
## Engine-actionable? (yes/no + one-line what)
Yes — adopt the five-kind failure taxonomy and the ACCEPTED→SHIPPED state machine as the intake format for the total-signal wiring program's adjustment layer: every candidate factor fix arrives as a triageable issue with affected factor, severity, and linked games.
