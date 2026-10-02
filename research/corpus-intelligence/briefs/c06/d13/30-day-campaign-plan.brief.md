# launch-prep/30-day-campaign-plan.md
## What it is (1-2 sentences)
The 30-day go-to-market launch campaign plan for Galaxy Sports Edge: silent-collection cadence Day 0→30, no paid acquisition until Day 21, with content calendar, channel mix, message pillars, banned moves, and risk contingencies. Its core operating logic is trust-first growth — nothing publishes a performance number until ≥100 settled canonical signals unlock the Calibration Report on Day 30.

## Key metrics/methods (formulas where given, else "not specified")
- Day-7 targets: 75 free signups; email open rate 50%+ (welcome flow); 25 settled canonical signals; 30 X followers; 30 Threads followers; 5 founder DMs received.
- Day-30 targets: 500 free signups; email open rate 40%+ (decay-normalized); 100+ settled canonical signals; 25 paid conversions (Pro/Elite); MRR ~$600; 200 X followers; 200 Threads followers; 30 founder DMs received.
- Variance-education anchor example used repeatedly: "a 64% confidence signal still loses 36 times in 100."
- Gating mechanics: `PUBLIC_PICKS_ENABLED=true` flips Day 14 (Signal Feed opens publicly); `PERFORMANCE_STATS_ENABLED=true` flips Day 30 only when ≥100 settled signals exist; if the threshold isn't met, the page stays "Collecting" and Email 5 holds — "no fake deadline."
- Pricing philosophy post teased: "Why I'm charging $19 instead of $99" — implying Pro pricing near $19/mo (plan's MRR math: 25 paid × ~$24 avg ≈ $600; INFERENCE on the per-tier split).
- Gate model referenced: `apps/web/lib/feature-gates.ts`; email sequence at `docs/email-sequences/welcome-flow.md`; social-day playbook at `social/launch-day.md`.
- Risk probabilities named: slate clears readiness gate early (Medium); major losing signal in Week 2 (High); tout operator attacks brand publicly (Low); Vercel build breaks before Round 2 (Low); Anthropic API outage (Low); Calibration Report without 100 settled signals by Day 30 (High).
- No formulas given (not specified).

## Data sources named
- Vercel Analytics (free) — site traffic.
- X / Threads / IG native analytics — social reach.
- Postmark/Resend dashboard — email open rates.
- Stripe Dashboard — paid conversion + MRR.
- Notion or single Google Sheet — weekly review log.
- Explicit: no paid analytics tools in first 30 days.

## Findings (numbers and facts, not vibes)
- Audience/ICP: primary persona "The Disillusioned Bettor" (28–45, college-educated, $80k+ income, burned by tout services, wants defensible reasoning not vibes); secondary "The Quant-Curious" (25–40, technical, wants model transparency and calibration data); anti-persona "The Lock Hunter" (wants guaranteed picks, churns after one losing weekend — actively repelled).
- Channel weights: X 35%, Email 25%, Threads 20%, Founder DMs/direct outreach 10%, Search/SEO 5%, Blog 5%.
- First 25 paid customers are expected to come from founder DMs, not the funnel.
- Explicitly excluded from the 30-day mix: paid social, affiliate/sponsorship deals, press outreach (until Day 30), Reddit promotion, TikTok/YouTube.
- Five message pillars: Show your work / Wait for the data / No false certainty / One person / Calibration over conviction.
- Seven banned moves: no "lock of the day" (even as a joke); no promised outcomes; no quoting any number (win-rate, ROI, accuracy) until Calibration Report opens; no growth hacks; no auto-DMs; no engagement bait; no tout drama or naming competitors.
- Week 2 theme threads include "The 4 gates" deep-dive, "Why Eclipse Gate isn't what you think it is," and variance education.
- Week 3: Free vs Pro comparison, one specific signal's factor trail, refund-policy-as-feature.
- Press outreach at Day 30 targets sharp-bettor podcasts + Action Network / Athletic.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **TRUST-SIGNAL**: The entire plan is a trust architecture — gate stats until defensible (≥100 settled signals), variance framed honestly, calibration-over-conviction messaging, anti-tout positioning. This is the GSE public-funnel trust model: earned numbers only, never quoted early.
- **TRUST-SIGNAL**: Explicit ban on quoting win-rate/ROI/accuracy before the Calibration Report opens — matches the standing public-private doctrine (public surface shows only projections/rankings once honest).
- **OTHER**: Go-to-market/operations — channel weights, founder-led distribution, Day 14/21/30 operational milestones, contingency table. No QB-BEHAVIOR, COACHING, OL, or SCHEME content.

## Engine-actionable? (yes/no + one-line what)
No — marketing/ops artifact, not engine methodology; actionable only as the trust-model spec (settled-signal gating thresholds) the engine's Calibration Report must satisfy.
