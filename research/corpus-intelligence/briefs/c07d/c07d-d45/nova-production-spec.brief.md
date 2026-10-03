# nova-production-spec.md
## What it is (1-2 sentences)
The production and brand-safety spec for Nova, Galaxy Studios' virtual presenter: a synthetic, human-gated broadcast host shipped with brand safety enforced in code (content-safety engine + publish-readiness gating), currently a stylized brand avatar rather than a photoreal likeness.

## Key metrics/methods (formulas where given, else "not specified")
- No formulas. Code-enforced mechanisms: `scanText` in `lib/safety/content-safety.ts` categorizes every script across 7 categories (sexual, hate, violence, self-harm, PII, profanity, overclaim) → `safe | review | block`. Image/video moderation is an interface that **fails closed to human review** until a real NSFW classifier is wired behind the founder gate.
- `assessPublishReadiness(broadcast, ctx)` in `lib/fantasy/host.ts` gates publish on four checks: **disclosure present · brand-safety pass · likeness consent on file · named human approver**. Defaults fail the consent + human gates, so nothing is ever publish-ready autonomously.
- Quantitative status: content-safety engine built & tested with **8 tests**; publish-readiness gating covered by a **host suite**; readiness panel surfaced in `/fantasy/studio`.

## Data sources named
- Voice: licensed TTS / neural voice from a consented voice actor or an enterprise voice vendor with commercial rights (consent on file required).
- Face/body: a licensed virtual-presenter avatar from enterprise digital-human vendors used by news/brands, OR a consented real on-camera talent (consent on file required). Explicitly NOT scraped or synthesized real people; no deepfakes/face-swap.
- Scenes: branded virtual sets (sideline, clubhouse, draft) as licensed/owned backdrops.
- No specific vendor named — selection criteria listed (commercial + likeness rights, SFW-only ToS, content-moderation hooks, watermark/disclosure support) but marked "not endorsements."

## Findings (numbers and facts, not vibes)
- Nova's draw is "credibility + charisma, never sex appeal" — SFW/brand-safe is a non-negotiable principle across training, reference, output, and styling.
- Every output states she is a synthetic presenter — baked into `HOST_DISCLOSURE` (FTC + platform policy + honesty rationale).
- Human-gated: "The AI drafts; a human approves before anything publishes. Nova never posts or replies on her own."
- Vendor-selection gate: consent must be on file for voice, face/body, and likeness; keys and contracts are human-managed; integration happens behind the founder gate.
- Hard refusals: will not build adult/JAV scrapers, NSFW training scrapes, deepfake/face-swap of real people, autonomous social posting, or any sexualized persona. NSFW detector models used only **defensively**.
- Founder-gated next steps (not yet done): wire a real NSFW image classifier behind the gate; select a licensed avatar/TTS vendor; stand up the human-review queue for rendered cuts.
- Visual-pipeline stages (voice → face/body → render → scenes → publish) each carry an explicit gate (consent, brand-safety pass, disclosure, human approver).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Serves the media/production program rather than a prediction lane: Nova is the delivery vehicle for Galaxy Studios broadcast content, and the spec's disclosed-synthetic + human-approved posture is itself a TRUST-SIGNAL adjacency — followers are told plainly she is synthetic, mirroring the "every pick public, every result posted" honesty doctrine.
- [OTHER] The "overclaim" category in `scanText` connects to the same claim-governance lane as the fine-tuning governance doc — the content-safety layer must catch certainty language before publication, serving the calibration/sizing program by keeping published confidence language honest.
- [OTHER] No QB-behavioral, coaching, OL, scheme, or trust-signal mechanics in this file; it is purely a production/brand-safety spec with no numbers on presenter performance or audience effects.

## Engine-actionable? (yes/no + one-line what)
No — production/brand-safety spec with no prediction content; nearest actionable item is wiring the real NSFW image classifier behind the founder gate (founder-gated, not engine work).
