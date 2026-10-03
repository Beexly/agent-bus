# docs/product/cockpit-studio-spec.md
## What it is (1-2 sentences)
Page spec for `/cockpit/studio` — the operator-only workspace (Phase 3) for Galaxy Studio asset generation: operator picks a game or slate, picks templates, generates copy via the Claude API, reviews compliance flags, and exports. NOT a public surface; Pro/Elite subscribers never access it.

## Key metrics/methods (formulas where given, else "not specified")
- 8 template cards: Fan Explainer, Fantasy Angle, Betting Education, X Thread, TikTok/Reels Script, Newsletter Block, Sponsor-Safe Blurb, YouTube Title Ideas. Each carries status badge `not generated` / `green` / `yellow` / `red`.
- Compliance flags panel: offending spans highlighted; click-to-expand shows triggering rule + suggested fix + regenerate-with-stronger-instruction. Red blocks export.
- 5 lenses: FANTASY / FAN / BETTOR / CREATOR / ANALYST; BETTOR is operator-workspace default. Lens is per-session, not persistent.
- Cost surface: yellow alert at 50% budget, orange at 80%, red at 100%, hard cap at 150%. Example in spec: studio month-to-date $147 / $500 budget (29%) — yellow. Slate-wide batch refuses to start if it would exceed budget mid-flight.
- Generation history is immutable; regeneration creates new entries (restore/diff available).
- 11 acceptance criteria; hard refusals: NO publish-to-Twitter/Discord buttons, NO bulk "publish all", NO auto-export to third-party platforms, NO override of compliance red flags.

## Data sources named
- Game context read from the Intelligence Graph: example values shown — Edge Index 2.7, 73% confidence "SOLID", Evidence grade "A", 12/14 books reporting.
- Cost monitoring spec (`docs/product/claude-api-cost-monitoring-spec.md`) for the left-rail cost surface.
- Compliance scanner result (rules source not in this file).

## Findings (numbers and facts, not vibes)
- Batch generation triggers parallel Claude API calls subject to cost budget.
- Export panel supports copy-to-clipboard per template, markdown download (bundle or per-template), and a separate `citations.json` with the EvidenceRef list per asset.
- Slate mode (`/cockpit/studio/slate/[dateKey]`) applies selected templates to checked games with a progress queue (X of Y games).
- Phase 3 is copy-paste only; Slack/Gmail draft routing deferred to Phase 4+.
- Open items: OPEN-CKP-STUDIO-1 (shareable session URL between operators, default yes); OPEN-CKP-STUDIO-2 (approve-all-and-queue-for-distribution, default NO — generation is operator-pull).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Compliance red-flag gating of published assets → OTHER (platform brand-safety ops).
- Citations-from-local-evidence requirement per asset → OTHER (evidence discipline, not a football signal).
- The 5-lens framing (fantasy/bettor/fan/creator/analyst emphasis) → OTHER (product surface framing, no game content).
- No QB, coaching, OL, or scheme content in this file.

## Engine-actionable? (yes/no + one-line what)
No — product UI spec for operator tooling; no engine signals or calibration content.
