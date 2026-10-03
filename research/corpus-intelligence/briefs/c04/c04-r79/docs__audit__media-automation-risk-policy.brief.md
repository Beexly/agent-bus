# docs/audit/media-automation-risk-policy.md

## What it is (1-2 sentences)
Binding Sports OS doctrine ("Source: Prompt 4 — Final Wave") governing risks of media automation — a five-tier automation risk classification, platform-specific risk registers (YouTube, TikTok/Instagram Reels/Shorts, X, Instagram), a ban on MoneyPrinter-style auto-upload video pipelines, AI-voice/persona disclosure rules, copyright requirements, and codex audit checks.

## Key metrics/methods (formulas where given, else "not specified")
Not specified — this is a governance/policy document, not a metrics document. It defines a qualitative automation risk classification: Manual (Low) → Draft-assisted (Medium) → Template-assisted (Medium-High) → Scheduled posting (High) → Fully automated (CRITICAL — FORBIDDEN). No formulas, thresholds, or numeric metrics are given.

## Data sources named
None — cross-references other policy documents rather than data sources: `docs/design/media-studio-doctrine.md` (approved media types), `docs/design/obs-inspired-scene-system.md` (scene production architecture), `docs/audit/prompt-leak-and-sensitive-source-policy.md` (sensitive source rules), `docs/media/youtube-automation-boundaries.md` (platform limits), `docs/product/twitter-bot-voice-spec.md` (Twitter bot voice spec).

## Findings (numbers and facts, not vibes)
- **Rule:** Fully automated media generation and posting is permanently forbidden — "Never permitted" under any circumstances; no auto-post, auto-upload, or auto-publish to any external platform.
- Platform registers: YouTube = operator-recorded/uploaded content only (no automated uploads); short-form = operator-created and operator-posted (future Galaxy Studio goal); X/Twitter = Twitter bot is an approved future channel, posting via API only of operator-reviewed content, no auto-posting of picks without operator review of each post; Instagram = manually posted brand graphics, no automation of follows/likes/comments/DMs.
- MoneyPrinter/MoneyPrinterTurbo-style pipeline (AI scripts → programmatic slides → AI voiceover → auto-upload to YouTube/TikTok) is FORBIDDEN for four stated reasons: claim governance bypass, fake persona risk, platform ToS, copyright.
- AI voice policy: may be used for methodology explainers and Model Journal audio summaries only with explicit disclosure; may NOT impersonate a real person (athlete, analyst, broadcaster) or create an undisclosed AI analyst persona or narrate picks implying confident human expertise. **Disclosure rule:** every AI-voiced content must carry visible/audible disclosure "AI-narrated content."
- Copyright table: sports team logos licensed or fair use for editorial (not commercial); league broadcast footage strict license (NFL/NBA/MLB aggressively enforce); player images case-by-case; background music CC or licensed (YouTube Content ID will match unlicensed music); stock imagery licensed; original AI-generated images only if model's commercial terms allow.
- Approval gates: any scheduled posting capability = Owner approval; any new content automation tool = Owner; AI voice = operator per piece with disclosure; sports footage = Owner + legal review; third-party music = operator verifies license before use; AI imagery = operator per image.
- Forbidden actions list includes: no auto-post endpoints; no unlicensed sports footage; no AI voice impersonation; no MoneyPrinter-style pipeline; no unlicensed music; no auto-generated pick content unreviewed by claim governance scanner; no content misleading users about AI authorship; no engagement automation.
- Codex audit requirements: (1) no auto-post/auto-upload endpoint in any API route; (2) no scheduled worker publishes without operator approval gate; (3) no AI voice synthesis library as a dependency without owner approval; (4) no sports footage in `public/` without documented license; (5) any auto-publish capability = P0 violation.
- Validation expectations: no auto-post endpoint exists in `apps/web/` or `workers/`; no scheduled task auto-publishes without operator review; all AI-voiced content includes disclosure metadata; copyright clearance documented.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: claim governance scanner reviewing all pick content before publication; false-claim propagation as the #1 stated automation risk (fabricated win rates, "lock" framing); mandatory AI-authorship disclosure as a trust posture; no content implying confident human expertise from AI narration.
- OTHER: copyright/legal exposure management (league DMCA enforcement); platform ToS compliance (YouTube auto-generated-content policy, X API rules, Instagram engagement-automation bans); brand safety (casino imagery, tout vocabulary, real-athlete deepfakes); approval-gate governance.

## Engine-actionable? (yes/no + one-line what)
No — it is a governance/policy document with no engine math or data, but its codex audit rules (no auto-post endpoints; auto-publish capability = P0 violation; no auto-posting of picks without operator review) are hard constraints on any public-facing engine surface — INFERENCE: consistent with the standing rule that nothing posts to @GalaxySportsHQ without human approval.
