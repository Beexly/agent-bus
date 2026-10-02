# docs/media/video-brief-pipeline.md
## What it is (1-2 sentences)
Doctrine document defining the video brief template and approval gates for Galaxy Sports Edge video content (Methodology Explainers, Almanac Companions, Investor Demos, Social Clips). Status is "Doctrine only — no automated video production; all video output requires operator creation and review."
## Key metrics/methods (formulas where given, else "not specified")
- Claim governance pre-check: no win-rate claims without ≥30 settled picks, a defined window, and a model version; no confidence scores without "not a guarantee" context; no sharp-money claims without Tier 1/2 source backing.
- Win-rate claims require ≥30 settled picks (n≥30 threshold).
- Social clips: 90-second maximum, 30–60 sec optimal per platforms.
- "Entertainment purposes only" disclaimer required on pick content.
- Approval gates: Methodology Explainer/Almanac Companion/Social Clip = Operator at all gates; Investor Demo = Owner at all gates; no auto-publish to any platform ever.
## Data sources named
- `docs/media/media-studio-workflow.md`, `docs/design/obs-inspired-scene-system.md`, `docs/audit/media-automation-risk-policy.md`, `docs/brain/claim-governance.md` (cross-references, not data feeds).
## Findings (numbers and facts, not vibes)
- Four content categories with lengths: Methodology Explainer 2–5 min; Almanac Companion 5–15 min; Investor Demo 3–8 min; Social Clip 30–90 sec. [OTHER]
- Forbidden: "lock"/"guaranteed" language; past win-rate claims without ≥30 settled picks; tout-adjacent vocabulary on social (locks, guaranteed, fire, sure thing); AI voiceover without disclosure; AI-generated sports footage of any kind. [TRUST-SIGNAL]
- Screen recordings of the Sports OS cockpit must blur/redact internal source IDs and reliability scores. [TRUST-SIGNAL]
- Codex audit requirements: no video production library installed without owner approval; no upload API wired to any endpoint; any auto-upload capability = P0 report. [TRUST-SIGNAL]
- NOTE (standing GSE rule context): current GSE production video policy uses real game footage, seconds-long transformative edits, telestrated and commentary-led — this file only governs briefs, not footage. [OTHER]
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- The governance thresholds (n≥30 for win-rate claims, "not a guarantee" on confidence scores) are honesty rails for any engine output that ever touches public surfaces. [TRUST-SIGNAL]
- No player/coach/scheme intelligence content is specified in this file. [OTHER]
## Engine-actionable? (yes/no + one-line what)
No — this is a media-production doctrine document; it specifies claim governance, not engine inputs, metrics, or wiring.
