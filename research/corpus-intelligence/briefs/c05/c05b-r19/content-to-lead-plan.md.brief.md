# docs/gse/content-to-lead-plan.md
## What it is (1-2 sentences)
A draft-only, no-claim social content and lead-generation plan for GSE's founding waitlist: 25 no-claim post drafts, 10 research-brief topics, CTAs, and a mandatory compliance-scan procedure — with the owner holding the publish gate on every post.

## Key metrics/methods (formulas where given, else "not specified")
- Compliance procedure (§D): (1) `runNoClaimGuard(text)` via platform `@/lib/compliance-scanner` must return `ok === true` (0 block flags); (2) `hasNoPerformanceClaim(text)` must be `true`; (3) manual tone read (no tout voice, no hype emoji ladder, no competitor compare); (4) log `claim_gate_hit` on failure and rewrite — never ship a failure.
- Canonical implementation: drafts live as typed constants in `apps/web/lib/gse/content-drafts.ts` (currently 50 social posts); scanned by `apps/web/__tests__/gse-waitlist.test.ts`.
- Content inventory: representative subset of 25 social posts + 10 research-brief topics shown; 15 originally scanned, extended to 25.
- Hard figure for backtest-truth posts: beats naive = false.

## Data sources named
- GSE's own honest model scorecard ("last out-of-sample test (10,301 plays) it did not beat a simple baseline") — referenced as a CTA destination.
- Research topics draw on: injury context vs market reaction, rest/travel spots, weather-sensitive totals, closing-line value as process metric, pace/possessions, opponent (strength-of-schedule) adjustment, calibration drift, source triage, decision journaling.

## Findings (numbers and facts, not vibes)
- Model's last out-of-sample test: 10,301 plays, did not beat a simple baseline — publicly disclosed in drafts and CTAs.
- 50 social posts are the canonical typed set; 25 shown in this doc.
- Owner gates (all BLOCKED): no auto-posting/scheduling, no external account use, owner approves each post + channel, no sportsbook/affiliate links, no pricing in posts.
- 10 research brief topics are education-only, no outcome guarantees; each frames uncertainty explicitly (e.g., "stated as ranges", "with uncertainty bands").

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: entire doc is the operationalization of the trust doctrine — honest scorecard, no performance claims, process-over-outcome framing, documented decision hygiene.
- OTHER: marketing/lead-gen ops (draft-only pipeline, owner publish gate).

## Engine-actionable? (yes/no + one-line what)
No — marketing/compliance ops doc, not engine work; engine relevance is only the research-topic list (injury-vs-market, rest/travel, weather, pace, CLV) as modeling inputs.
