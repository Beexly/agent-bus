# docs/ops/archive/root-museum/SCRATCH_TO_PRIMARY_COPY_MANIFEST.md
## What it is (1-2 sentences)
A 2026-05-22 copy manifest: after Codex confirmed `docs/product/**` and `apps/web/lib/*/templates/` files were missing from the primary clone, Claude listed 5 priority tiers of files (template code, product specs, governance docs, forward-runway specs, fixtures/evals) for the owner to copy from scratch (`C:\Users\Garrett\Documents\Claude\Projects\AI Sports`) to primary (`C:\Users\Garrett\Sports`) before Codex wires Phase 3 surfaces against them.
## Key metrics/methods (formulas where given, else "not specified")
- Priority 1: 33+ TypeScript template files — compliance scanner rules (3-layer banned vocab + per-template overrides), pre-mortem templates (consensus, depth, line-movement, volatility, rest-advantage, schedule-stress, venue-form, cross-market, data-quality, compose, compare), Galaxy Studio 8 creator-asset kinds (fan-explainer, betting-education, x-thread, sponsor-safe, fantasy-angle, tiktok-reels-script, newsletter-block, youtube-titles), Twitter bot templates (pick-publication, slate-state-gated, settlement, post-mortem-thread), Discord bot embed templates, Model Court prompts (locked system prompt + 6 refusal templates + 3 mode-prelude builders), Model Journal Saturday drafting prompt, calibration-training weekly insight prompt.
- Priority 5: 18 eval files (Twitter bot 5, Studio 5, Discord bot 4, Model Court 4).
## Data sources named
None — this is a file-sync manifest.
## Findings (numbers and facts, not vibes)
- Conflict rule stated: if Codex's primary-clone pre-mortem implementation has a different type shape, resolve in favor of Codex's primary version (it's already in production); scratch files lock content/voice, not architecture.
- Recommended minimum: copy Priority 1 (template code) + Priority 2 (Phase 3 specs); Priorities 3-5 can wait or be re-implemented.
- Single most critical file named: `apps/web/lib/compliance-scanner/rules.ts`.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: Compliance-scanner as the single choke point wired into every AI-generated surface to block banned-vocabulary leaks — a centralized content-safety gate.
- OTHER: Pre-mortem template taxonomy (line-movement, volatility, rest-advantage, schedule-stress, venue-form, cross-market, data-quality) is a reusable checklist of signal dimensions that map onto engine signal categories.
## Engine-actionable? (yes/no + one-line what)
Partially — the pre-mortem signal-dimension taxonomy (rest advantage, schedule stress, venue form, cross-market, line movement, volatility) is directly usable as a signal-category checklist for the engine's adjustment layer, but this file itself adds no new parameters.
