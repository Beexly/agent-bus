# docs/strategy/design-monetization-growth.md
## What it is (1-2 sentences)
Reference-and-discipline doc (2026-06-03) for a best-visual-2026 site that monetizes without betraying the honesty doctrine — design system refs, adopted tooling (tldraw, SWR, Stripe patterns, gated TTS/video), ethical-only monetization psychology, and a banned list.
## Key metrics/methods (formulas where given, else "not specified")
Not specified. Honest funnel: Awareness (verifiable track record + published calibration) → Trial (free picks + open record) → Engagement (Beat-the-Model contest) → Upgrade (honest gating: confidence, factor trail, alerts) → Retention (real performance + leaderboard) → Referral. Tier anchoring noted: Elite/Pro/Free already priced. Free tier: 1 pick/day, no confidence scores.
## Data sources named
None. Reference refs: Stripe (cal.com + vercel/nextjs-commerce patterns), `lib/trust-claims.ts` + public-copy scanners, `proof-of-record.ts` (Merkle), TTS (OpenBMB/VoxCPM), AI video (MoneyPrinterTurbo).
## Findings (numbers and facts, not vibes)
- ADOPT (honest, and stronger): real social proof = cryptographically-verifiable track record (`proof-of-record.ts`); honest loss-aversion via feature gating; reciprocity via free public calibration + track record; authority via published methodology, not hype.
- REJECT/BANNED by copy scanners and the honesty doctrine: "10,000+ bettors trust our AI picks" (unverified overclaim); wagering-push copy ("place your first bet using our picks", "you'll miss the weekend games"); fake scarcity/urgency ("only 100 spots", "ends in 7 days") unless literally true; dark-pattern auto-convert trials without explicit consent.
- Declined: crypto/token-gating/blockchain picks marketplace (gamba-labs, buperrr/cryptocasino), casino/predictor repos — off-brand + legal/guardrail walls; the one legitimate "provably fair" idea is Merkle proof-of-record (plain hashing, no currency).
- A-V content rule: TTS/video gated, human review before publish, NO auto-publish.
- Design refs to study: PostHog real-time dashboards, cal.com subscription UX, tldraw infinite canvas for interactive factor breakdowns and confidence heatmaps.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the core doctrine — convert on provable accuracy + radical transparency (verifiable track record, published calibration) instead of tout psychology; the banned list defines what engine-adjacent copy must never claim.
- OTHER: tldraw-based confidence heatmaps / consensus-divergence visualization are UX surfaces for engine output.
## Engine-actionable? (yes/no + one-line what)
Partial — no engine method, but the banned-claims list and no-auto-publish rule are hard constraints on any public engine output/copy; tldraw confidence heatmaps are a candidate surface for the projection engine's confidence data.
