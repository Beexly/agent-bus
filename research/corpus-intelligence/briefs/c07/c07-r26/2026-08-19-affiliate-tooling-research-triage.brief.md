# ops/edge/2026-08-19-affiliate-tooling-research-triage.md
## What it is (1-2 sentences)
Triage note on a founder-pasted DeepSeek research dump about affiliate/partnership tooling (2026-08-19), held as **unverified** under the repo's no-fake-data policy — nothing may be adopted, cited, or acted on until each named repo/claim passes citation verification.

## Key metrics/methods (formulas where given, else "not specified")
Not specified (no verified metrics; the note exists to refuse unverified numbers).

## Data sources named
DeepSeek research dump pasted by founder (unverified). Named tools: **Dub** (link infra — real, well-known) and **Google Meridian** (Google's open-sourced MMM tool — real); unverified/plausibly-hallucinated names: Refferq, ClawMarketing, SponsorFit, OpenPartner, xAmplify PRM, mangosqueezy, Numok.

## Findings (numbers and facts, not vibes)
- Hallucination signatures flagged: hyper-precise unverifiable numbers ("$0 → $4M... $20/mo operating cost... 14+ months," "$16.02 revenue potential (30-day projection)," "100M+ clicks and 2M+ links monthly," "Used by ASOS, Vestiaire Collective, and Shopify").
- Three ideas judged sound regardless of repo reality: (1) PRM vs. affiliate distinction — partnerships need deal-registration/partner-tier handling, and nothing in `apps/web/lib/revenue/` (only `RevenueSurface`/`RevenuePartner`) covers it; (2) attribution surviving Safari ITP / third-party cookie deprecation ties into the open C-18 postback-tracking design; (3) fraud detection on commissions belongs in C-18's scope.
- Next step deferred: a bounded single-agent verification pass (ToolSearch → WebFetch each named repo URL, confirm existence/last-commit, discard non-resolvers) before anything feeds C-17/C-18/R-7.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Affiliate/partnership tooling evaluation for the revenue lane — **OTHER**
- Verification-before-adoption discipline for AI-generated vendor claims — **TRUST-SIGNAL**

## Engine-actionable? (yes/no + one-line what)
No — revenue/affiliate tooling intake; zero sports-prediction, factor, or calibration content.
