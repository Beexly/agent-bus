# design/GALAXY_2026_PUBLIC_WORLD.md
## What it is (1-2 sentences)
Single source of truth (doctrine) for the Galaxy Sports Edge (GSE) + Galaxy Sports Network (GSN) public experience: thesis, visual metaphor system, semantic color rules, world modules, homepage chapter architecture, trust-safe copy rules, and QA checklist. Thesis: "The market is full of noise. Galaxy turns it into signal."
## Key metrics/methods (formulas where given, else "not specified")
not specified (palette usage ratio: ~80% void/nebula dark, ~10% cyan, ~6% magenta, ~3% white, ~1% amber/red; motion rules: hover ≤200ms, ambient ≥8s loops; semantic color map: cyan = verified signal, magenta = volatility/distortion, amber = caution, red = hard gate).
## Data sources named
None as engine data sources; governance references: `apps/web/lib/trust-claims.ts` (banned-claim registry), `lib/brand.ts` (HELPLINE, CLOSING_LINE), `lib/gsn/beex-weekly.ts` (weekly podcast draft).
## Findings (numbers and facts, not vibes)
- 10 world modules with routes: Galaxy Twin/Observatory `/observatory`, Board `/board`, Trend Lab `/trends`, No-Bet Gate (board gating + home), Decision Autopsy `/performance/losses`, Parlay MRI `/parlay-mri`, GSN/Airwave `/gsn`, `/airwave`, Academy `/academy`, Receipts Ledger `/performance`, `/vault`, `/ledger`, Cost of Noise calculator (home chapter).
- 10-chapter homepage order is doctrine: Hero → Galaxy Twin → Signal vs noise → Market Mirage → No-Bet Gate → Decision Autopsy → Parlay MRI → GSN/Airwave → Cost of Noise calculator → Receipts.
- Owner doctrine (2026-06-11, law over anything conflicting): no vendor/connector/API names on public surfaces — render `publicLabel` codenames from `lib/data-sources/catalog.ts` (e.g. "Play-by-play substrate"); real names + license attribution live ONLY on `/integrations` and `/nflverse`. Voice: first-person plural; the word "AI" does not appear on public surfaces ("the engine", "our models", "the desk"). Airwave and Studio are internal, never linked from public nav. Contests is standalone; The Beat is the casual-browse surface feeding scores.
- Banned claims (tests enforce): "guaranteed", bare "lock", "sure thing", "risk-free", "easy money", "can't lose", "verified track record", "thousands of bettors", "trusted by serious bettors"; also avoid "beat the books", "AI predicts every winner", fake testimonials/performance/live odds/invented matchups.
- QA checklist: `npx tsc --noEmit` clean; targeted vitest suites; reduced-motion kill-switch stays; keyboard operability; mobile first screen thesis + CTA without scroll; no new dependencies/package-lock changes for visual work.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: banned-claim registry as copy law; illustrative visuals always labeled; empty board presented as discipline not failure; calibration and losses public; conversion promise is decision quality, never outcomes; no-bet gate as a first-class output; every public row shows inputs, freshness, gate status.
## Engine-actionable? (yes/no + one-line what)
yes — enforce the trust-claims banned list and vendor-name masking on any public surface that renders model outputs.
