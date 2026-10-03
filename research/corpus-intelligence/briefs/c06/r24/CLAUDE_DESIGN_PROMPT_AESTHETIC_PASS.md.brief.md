# ops/archive/prompts/CLAUDE_DESIGN_PROMPT_AESTHETIC_PASS.md
## What it is (1-2 sentences)
A self-contained design prompt for a Claude/Code session to elevate the GSE site's aesthetics (Next.js 14, Tailwind) without breaking functionality, honesty, the paywall, or WCAG AA.
## Key metrics/methods (formulas where given, else "not specified")
- Design tokens: orbitalCyan #00E5FF, ionMagenta #FF38C7, softUltraviolet #7B61FF, electricBlue #2A6BFF, nebulaPurple #A855F7; SIGNAL_FADE gradient; surface scale void #05070B → titanium #211A33; WCAG-AA-tuned text tokens (text-ion 13.83:1 on carbon).
- Accessibility bars: contrast AA, visible focus rings, icon-only aria-labels, tap targets ≥ 44px, prefers-reduced-motion respected.
## Data sources named
- Prices come from `getCurrentPricingPhase()` (lib/pricing/pricing-phases.ts) — never hardcoded.
## Findings (numbers and facts, not vibes)
- Priority order is revenue-funnel-first: landing → pricing → picks (pick card as the product) → dashboard → shared chrome → trust surfaces (/performance, /clv, /accountability, /calibration) → cockpit.
- Hard constraints: never change server-side logic/data fetching/paywall; never alter honesty copy or invent claims (calibrated-confidence framing only); TypeScript-strict; run typecheck+lint+build+tests per view; before/after Playwright screenshots per view.
- Brand theses: cosmic/observatory identity; "prove it, don't assert it"; empty/loading/error/locked states are where trust is won or lost.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: calibrated-confidence framing only, no win guarantees/fabricated stats, trust-surface ordering, locked-state design as upgrade rationale.
- OTHER: design-system governance, pricing-integrity rule (no hardcoded prices).
## Engine-actionable? (yes/no + one-line what)
No — design-only prompt with no engine/data signal; archive reference.
