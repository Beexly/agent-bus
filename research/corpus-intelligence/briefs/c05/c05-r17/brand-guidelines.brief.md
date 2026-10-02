# brand/brand-guidelines.md
## What it is (1-2 sentences)
The single source of truth for the Galaxy Sports Edge brand (owner: Garrett Baxley): voice, five operating principles, banned language with replacements, preferred vocabulary, color system, typography, logo, surfaces, social handles, and build-time brand-safety tests.
## Key metrics/methods (formulas where given, else "not specified")
Not specified — no formulas or metrics; this is a brand/voice spec. Color tokens: Obsidian Black #050608, Ion White #F6F7FA, Orbital Cyan #00E5FF, Ion Magenta #FF2DD6, Soft Ultraviolet #7A5CFF, Steel Gray #1A1D23. Type: Exo 2 (display/body), Inter (alt body), JetBrains Mono (code/telemetry), all via Google Fonts. Five pillars: Intelligence, Precision, Advantage, Discipline, Results.
## Data sources named
None. Technical constants live in `apps/web/lib/brand.ts` and `apps/web/styles/design-tokens.css`; enforcement tests: `homepage-content.test.ts`, `public-copy-scanner.test.ts`, `metadata-banned-phrases.test.ts`, `trust-claims.test.ts`, `no-fake-percentages.test.ts`, `content-templates-scan.test.ts`.
## Findings (numbers and facts, not vibes)
- Tagline: "Find the signal before the market moves." Closer: "We detect. You decide." Monogram: GSE. Core promise (verbatim): "If I can't show my work, I don't publish."
- Person: first-person singular ("I built this"), not "we"; tone calibrated/technical, like Linear or Stripe, not ESPN or a sportsbook ad. Note: MEMORY's current approved X bio uses "we"-framed human-team language ("Every pick public. Every result posted.") — this guideline says "I", a documented tension (INFERENCE: guideline likely predates the approved team-framing bio).
- Banned terms (never customer-facing): guaranteed, lock/lock of the day, sure thing, risk-free, easy money, can't lose, verified track record, thousands of bettors, trusted by serious bettors, guaranteed profit/winning, free money. "Money-back guarantee" (noun form) is allowed.
- Preferred vocabulary: signal (not pick/play/wager), Signal Feed (/picks), Galaxy IQ (/methodology), Edge Map (/observatory), The Vault (/vault), Calibration Report (/performance — gated until honest), Eclipse Gate (/eclipse-gate), Edge Index (confidence), Market Gravity (/market-gravity), Orbit View (/orbit), Cockpit (internal), /responsible-play.
- Social handles as of this doc: X @GalaxySportsAI, Instagram galaxysportsedge, Threads @galaxysportsedge, Facebook galaxysportsedge. Note: MEMORY records Garrett's X account as @GalaxySportsHQ (confirmed 2026-09-10 screenshot) — doc's @GalaxySportsAI appears stale relative to memory.
- Contact: hq@galaxysportsedge.com (matches MEMORY's existing YouTube channel account).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: banned-language + no-fake-percentages enforcement is the public-face twin of the claim-governance doctrine; the Calibration Report is "gated until honest," matching the 30-settled-picks rule.
- OTHER: brand doctrine only; no engine signal.
## Engine-actionable? (yes/no + one-line what)
No — brand doctrine, not engine signal; the only action is reconciling the @GalaxySportsAI handle (stale vs MEMORY's @GalaxySportsHQ) and the I/we person tension before writing new copy.
