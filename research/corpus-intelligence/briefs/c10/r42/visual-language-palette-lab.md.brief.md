# design/visual-language-palette-lab.md
## What it is (1-2 sentences)
Operator/designer reference for applying the Galaxy Sports Edge palette in practice: color role map, glow/shadow doctrine, surface-depth layering, typography pairings, off-brand patterns, and a pre-merge design-review checklist — extending `DESIGN.md` tokens and `apps/web/styles/design-tokens.css`.
## Key metrics/methods (formulas where given, else "not specified")
Exact tokens: `--plasma: #FF2DD6` (primary accent), `--orbital-cyan: #00E5FF` (data signal), `--ultraviolet: #7A5CFF` (intelligence layer), `--carbon: #0D1117` (page bg), `--eclipse: #11161F` (card surface), `--ash: #8B95A3` (secondary text), `--silver: #E2E8F0` (body text). Quantity rule: plasma ≤2 times per screen. Depth layers: carbon → eclipse → eclipse+4% white → eclipse+8% white (no fourth layer). Glow: box-shadow 20–40% opacity, never text-shadow on data. Type: JetBrains Mono = numbers/data only; Syne/Big Shoulders Display (public pick cards), Space Grotesk (cockpit), Instrument Serif (Almanac essays), Inter 400 (body).
## Data sources named
None (design system). Sources: design-tokens.css, brand.ts, R&D Batch 0–6 visual analysis, DESIGN.md philosophy set (Bloomberg, F1, NASA, Apple, Perplexity, Linear, Vercel, Stripe).
## Findings (numbers and facts, not vibes)
- Glow is earned by data significance, not decoration: appropriate for confidence ≥85, live odds-movement alerts, new T1 signal in ticker, primary CTA on conversion screen; inappropriate for decorative hover states, static cards, navigation without unseen content, body text. (TRUST-SIGNAL)
- Off-brand patterns (flagged in review): sportsbook green, lock/padlock emoji, fire emoji/hot-streak counters, glassmorphism with colored blur, animated confidence counting up, dense crypto-dashboard layouts, win/loss celebration without settlement, red/green at full saturation in public views (muted semantic variants instead). (TRUST-SIGNAL)
- Review checklist: only DESIGN.md colors, plasma ≤2, glows earned, monospace for data only, three-layer depth, no forbidden patterns, pick claims pass claim governance, mobile breakpoint at 375px. (OTHER)
- Codex audits: hardcoded hex outside design-tokens.css = P2 design drift; >2 plasma elements = P3. (OTHER)
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
Tagged inline: claim/glow-honesty rules are TRUST-SIGNAL; layout specs OTHER. No on-field intelligence.
## Engine-actionable? (yes/no + one-line what)
no — Design-system reference for web surfaces; nothing actionable for the prediction engine itself (the glow-confidence-≥85 and no-animated-counters rules support output-honesty at the UI layer only).
