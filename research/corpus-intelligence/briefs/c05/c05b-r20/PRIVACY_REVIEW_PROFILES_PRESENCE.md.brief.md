# docs/legal/PRIVACY_REVIEW_PROFILES_PRESENCE.md
## What it is (1-2 sentences)
A DRAFT privacy-review gate (requires owner sign-off) for two staged NFL House features: a fan-type field on the user profile (Stage 1) and live-room presence indicators (Stage 2). Companion docs: COMMUNITY_MODERATION_POLICY.md, docs/design/NFL_HOUSE_DOCTRINE.md.

## Key metrics/methods (formulas where given, else "not specified")
- Proposed retention numbers: messages 12 months then delete (per moderation policy audit needs); moderation action log retained longer for legal defensibility; fan type/register live with the account, deleted with the account; GDPR erasure timeline proposed at 30 days.
- Fan-type enum: one of ~6 labels — sharp bettor, film nerd, fantasy beginner, Sunday-only, learning football, here for the vibes.
- Reader register (teach/plain/math): currently localStorage-only, no server storage; profile move makes it account data.
- No formulas.

## Data sources named
None — privacy/legal doc; no data sources named.

## Findings (numbers and facts, not vibes)
- Sensitivity reads: fan type = Low (self-chosen content preference) — but "learning football" + betting context implies inexperience; reader register = already live/local; presence (online/in-room indicator) = Medium (reveals real-time activity in betting-adjacent spaces); message content + moderation log = Medium-high (UGC with actor attribution; distress signals may appear).
- 8 proposed rules: (1) fan type/register are content-rendering preferences only — never inputs to pricing, offers, upsells, or tier nudges; behavior signals trigger support nudges, never marketing; (2) no public exposure of fan type — other users never see it; moderation tooling may see it to protect beginners (its only cross-surface use); (3) presence is opt-in, default off, room-scoped, never historical (no "last seen 3h ago"); (4) self-excluded users: profile fields persist, all room/presence features go dark; (5) retention per above; (6) deletion path: account deletion removes profile fields and anonymizes authored messages (content survives for thread coherence only if attribution fully severed); (7) no model training on UGC without separate consent; (8) distress content (chasing language, self-harm references) routes to support-nudge path, never engagement ranking.
- Owner open questions: is 12-month retention right; should fan type feed content recommendations (proposed: yes, on-site ordering only, never email/push targeting); EU/GDPR posture confirmation (fan type + messages = personal data if EU users in scope).
- Sign-off checklist gates schema migration (Stage 1) then presence (Stage 2, behind moderation tooling).
- Once signed, fan-type ships as one nullable enum column; register follows the account instead of the browser.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Fan-type taxonomy (sharp bettor, film nerd, fantasy beginner, Sunday-only, learning football, here for the vibes) as a user-segmentation signal — OTHER
- Distress-content routing (chasing language) to support nudges, never engagement — TRUST-SIGNAL
- No-model-training-on-UGC rule mirrors the rights posture demanded of ingested sources — TRUST-SIGNAL
- Presence indicators (opt-in, default off, room-scoped, non-historical) as engagement/room-health telemetry — OTHER

## Engine-actionable? (yes/no + one-line what)
Yes — the fan-type + reader-register taxonomy could feed a content-personalization signal (on-site ordering only), and distress/chasing language detection is a reusable classifier input for responsible-play nudges.
