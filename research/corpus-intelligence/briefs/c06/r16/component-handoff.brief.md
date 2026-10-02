# brand/component-handoff.md
## What it is (1-2 sentences)
Engineering/design handoff documenting every launch-pass component of the Galaxy Sports Edge web app: purpose, dependencies, and locked brand-safety rules for future contributors — from the SignalPreviewQueue and AnnotatedSampleSignal to the color-token system and the SEO-oriented tout-comparison/FAQ/changelog pages.
## Key metrics/methods (formulas where given, else "not specified")
- SignalPreviewQueue: 8 anonymized rows, state cycles SCORING / GATED / PUBLISHED on a 1s tick; no team names, no scores, no real odds; sport pool = SUPPORTED_SPORTS (NFL/NCAAF/NBA/NCAAB/MLB/NHL/MLS).
- AnnotatedSampleSignal: 6 labeled callouts (sport+matchup code, grade chip, selection+line, factor trail, Edge Index, variance line); variance line required verbatim: "A 71-confidence signal still loses ~29 of 100. Treat as one input." — never strip it.
- ToutComparison: 6 rows × 3 columns (Dimension / Galaxy / Typical tout); never names a specific competitor; negative-state CheckMark uses `--alert` color (WCAG 1.4.1).
- InteractiveGalaxy: one primary cyan orbit, one secondary ultraviolet orbit, one signal traveler on a 28-second lap, magenta pulse every 7 seconds, three fixed reference stars (replaces a 3,600-particle Three.js galaxy).
- Color tokens (Brand Use Pack §4 aligned): --carbon #0D1117, --obsidian #050608, --ion-blue #00E5FF, --ultraviolet #7A5CFF, --ion-white #F6F7FA, --plasma-glow #FF66E0; --fg-muted moved from --ion-2 (#5E6878) to --ion-1 (#98A3B5), restoring WCAG AA contrast across meta labels.
- Forbidden customer copy: "lock", "guaranteed", "sure thing" — enforced by `apps/web/lib/trust-claims.ts` registry in CI; no public win-rate before `PERFORMANCE_STATS_ENABLED=true`; footer wordmark at ~18% opacity max.
- Cadence target: add a changelog entry every ship of substance; when weekly cadence holds, swap the hardcoded `ENTRIES` array for a DB-backed collection.
## Data sources named
None (design/engineering handoff). Files referenced live in `apps/web/`, `docs/brand/`, `docs/email-sequences/`, `docs/launch-prep/`, `social/`, plus `CODEX_HANDOFF_2.md`.
## Findings (numbers and facts, not vibes)
- Brand-safety rules are locked per component: every row labeled "Preview · not a live pick"; every promise in StartInSixty auditable in code (free entitlements, Stripe refund config, hq@ inbox routing); SubscribeButton isolates the only client-side piece so `/pricing` stays server-rendered for SEO.
- Canonical surfaces: Performance H1 stays "Calibration Report" (canonical name); one consolidated inbox `hq@galaxysportsedge.com` (never support@/legal@); magenta reserved for live state, Eclipse Gate callouts, and one hero vignette — never decorative wash.
- SEO: ToutComparison reused on `/vs/tout-services` targeting "transparent sports picks vs tout services"; FAQ page has FAQPage JSON-LD over 5 sections; preserve "tout services"/"transparent sports picks"/"anti-tout" in headings if rewritten.
- 5-email founder welcome flow in `docs/email-sequences/welcome-flow.md`; 30-day campaign plan + founder outreach onepager in `docs/launch-prep/`.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the variance-line requirement, no-public-win-rate-before-flag rule, banned certainty language, and "Calibration Report" as the canonical performance surface are the user-facing trust doctrines.
- OTHER: brand/design engineering, not engine intelligence.
## Engine-actionable? (yes/no + one-line what)
No — component/design handoff; the only engine-adjacent item is the variance-line doctrine, which governs public confidence display rather than modeling.
