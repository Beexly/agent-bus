# strategy/platform-gaps-triage.md
## What it is (1-2 sentences)
A 2026-06-03 triage of a 25-gap platform audit (from Copilot) through the GSE honesty/responsible-play doctrine, sorting each gap into ON-BRAND build, founder/legal-gated, or reject/reframe.

## Key metrics/methods (formulas where given, else "not specified")
not specified (status checklist per gap, no formulas)

## Data sources named
Related docs: `design-monetization-growth.md`, `gaming-and-engagement-expansion.md`. Code named: `bankroll.ts`, `responsible-gaming.ts`, `consensus.ts`, `consensus-view.ts`; planned: LossAutopsy/CockpitDecision → public `/accountability`; PropPick engine extension; Cerebras/TTS scoped.

## Findings (numbers and facts, not vibes)
- SHIPPED (per triage): bankroll + Kelly sizing (conservative, "not a bet rec", hard caps, over-exposure flag); responsible-gaming enforcement (self-exclusion block, loss cool-down, session/milestone nudges); consensus/divergence surface (`consensus.ts` + `consensus-view.ts`).
- BUILD next (on-brand): user performance analytics (accuracy by sport, ROI by type, calibration by confidence, vs-close) — pure analytics over settled picks using engine calibration primitives; public accountability with model changelog, loss autopsies, pick retraction, pre-mortem; dark mode; offline PWA; audio TTS pick briefings/podcast (content-gated, no auto-publish); props modeling (PropPick); "how we compare" benchmarks with verifiable numbers only; email digest (owned channel, no urgency dark patterns); preference-driven personalization (no loss-chasing dark profiling).
- FOUNDER/LEGAL-GATED: native mobile app (Expo), live in-game re-scoring (paid live-odds feed + WebSocket infra; re-score logic buildable, feed is the gate), A/B testing infra (PostHog, founder picks tool/budget), jurisdictional geo-fencing/state RG messaging, B2B/data-licensing API, institutional/syndicate tier, creator program (affiliate model).
- REJECT/REFRAME: "place bet at DraftKings" buttons / embedded sportsbook checkout / bet-slip deeplinks ("make betting frictionless") — rejected as tout-funnel behavior; honest affiliate disclosure link at most, founder-gated, Phase-3; NFTs for pick-ownership rejected (legit version = Merkle proof-of-record, no crypto); merch deprioritized.
- Reframe: platform = the honest/introspective/transparent one (accountability, calibration, responsible play, proof-of-record), not the frictionless-betting one.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: calibration-by-confidence analytics, loss autopsies, verifiable-only benchmarks, Merkle proof-of-record; OTHER: platform roadmap; no football signal.

## Engine-actionable? (yes/no + one-line what)
yes — "calibration by confidence" user/engine analytics and PropPick extension are on-brand builds; the rejected-frictionless-betting stance constrains how any edge feed surfaces (show edge, never push execution).
