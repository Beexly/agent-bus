# ops/edge/2026-08-19-affiliate-tooling-research-triage.md
## What it is (1-2 sentences)
A triage note on a founder-pasted DeepSeek research dump about affiliate/partnership tooling, explicitly labeled NOT YET VERIFIED, warning that several claims carry classic hallucination signatures (hyper-precise unverifiable numbers) and ruling that nothing gets adopted, cited, or acted on until each repo/claim passes citation-verification (repo exists, URL resolves, stats appear outside the one AI-generated summary).

## Key metrics/methods (formulas where given, else "not specified")
Not specified — the file is a caution note, not a methods document. The only numbers quoted are the ones flagged as hallucination signatures: "$0 → $4M... $20/mo operating cost... 14+ months," "$16.02 revenue potential (30-day projection)," "100M+ clicks and 2M+ links monthly," "Used by ASOS, Vestiaire Collective, and Shopify."

## Data sources named
- DeepSeek research dump (founder-pasted 2026-08-19 night) — the subject of triage, NOT a source
- Named-as-real-but-need-verification tools: Dub (link infra), Google Meridian (Google's open-sourced MMM tool); unconfirmed names: Refferq, ClawMarketing, SponsorFit, OpenPartner, xAmplify PRM, mangosqueezy, Numok, etc.
- `apps/web/lib/revenue/` (existing: only `RevenueSurface`/`RevenuePartner`, no deal-registration or partner-tier concept)
- C-18 (postback tracking, already opened), C-17/R-7 affiliate items, CLAUDE.md (no fake data rule)

## Findings (numbers and facts, not vibes)
- Status: all claims unverified at time of writing; per CLAUDE.md, nothing adopted/cited/acted on until verified.
- Caution-over-dismissal: some tools real and well-known (Dub, Google Meridian); others plausible-sounding but unconfirmed (Refferq, ClawMarketing, SponsorFit, OpenPartner, xAmplify PRM, mangosqueezy, Numok).
- Three sound ideas regardless of which repos are real: (1) PRM vs affiliate distinction — partnerships need different handling than affiliate links; matches a gap in `apps/web/lib/revenue/` (no deal-registration or partner-tier concept); worth own design pass, low urgency. (2) Attribution surviving Safari ITP / third-party cookie deprecation — real current problem, ties into C-18 postback tracking, fold in when picked up. (3) Fraud detection on commissions — real risk if R-7/C-17 go live, fold into C-18 design scope.
- Next step deferred (to conserve tokens): bounded cheap verification pass — single agent, ToolSearch → WebFetch each named repo URL, confirm exists/real/last-commit date, discard anything not resolving — before anything feeds C-17/C-18/R-7.
- UNCERTAIN: every tool name and statistic in the underlying DeepSeek dump is unverified; treat the whole list as leads, not facts.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **OTHER (revenue):** The PRM-vs-affiliate distinction and deal-registration/partner-tier gap is revenue-lane material, not engine material; fraud detection on commissions is flagged as a real risk if affiliate items go live.
- **COACHING:** None. **QB-BEHAVIOR:** None. **OL:** None. **SCHEME:** None. **TRUST-SIGNAL:** None — this file is an anti-signal caution note; its only contribution is methodology discipline (citation-verification before adoption).

## Engine-actionable? (yes/no + one-line what)
No — affiliate/revenue tooling triage with no sports or engine content; nothing here feeds the prediction engine.
