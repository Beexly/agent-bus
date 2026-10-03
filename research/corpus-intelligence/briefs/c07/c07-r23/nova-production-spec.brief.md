# nova-production-spec.md
## What it is (1-2 sentences)
Production and brand-safety spec for Nova, Galaxy Studios' virtual AI sports presenter: SFW, licensed, disclosed synthetic presenter with human-gated publishing and brand-safety enforcement in code.
## Key metrics/methods (formulas where given, else "not specified")
`scanText` in `lib/safety/content-safety.ts` categorizes every script (sexual, hate, violence, self-harm, PII, profanity, overclaim) → `safe | review | block`; image/video moderation interface fails closed to human review until a real NSFW classifier is wired. `assessPublishReadiness(broadcast, ctx)` in `lib/fantasy/host.ts` gates publish on four checks: disclosure present, brand-safety pass, likeness consent on file, named human approver — defaults fail consent + human gates. Built & tested: content-safety engine (8 tests), publish-readiness gating (host suite).
## Data sources named
none — no data sources; licensed TTS/neural-voice vendors and digital-human avatar vendors are criteria, not selections.
## Findings (numbers and facts, not vibes)
- Nova is currently a stylized brand avatar (deliberately not photoreal); FTC + platform disclosure baked into `HOST_DISCLOSURE` on every output.
- Nova never posts or replies autonomously; a named human approver is a required gate.
- Permanently excluded: deepfakes/face-swaps of real people, adult/JAV scrapers, NSFW training scrapes, autonomous social posting, sexualized persona.
- Founder-gated next steps: wire a real NSFW image classifier behind the founder gate, select a licensed avatar/TTS vendor, stand up the human-review queue for rendered cuts.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: human-gated, disclosed synthetic presenter is a trust/credibility architecture — mirrors the "every pick public, every result posted" posture applied to a virtual presenter.
- OTHER: NSFW-defensive detection is a platform-hygiene capability, not prediction signal.
## Engine-actionable? (yes/no + one-line what)
no — brand/media production governance with no prediction-engine signal; note the consent-gating pattern as reference for any future automated content surface.
