# docs/ops/archive/prompts/DESIGN_ORCHESTRATION_2026.md
## What it is (1-2 sentences)
Creative director's orchestration call for the GSE "best website of 2026" push (dated 2026-07-08), resolving the tension between Claude Design's static mockups and the already-cinematic live site into a "cinematic where it earns attention, editorial-calm everywhere else" thesis, with tool-by-tool orchestration (Claude Code, Claude Design, Higgsfield, Codex).
## Key metrics/methods (formulas where given, else "not specified")
not specified — design/ops document; concrete assets cited: 21-component motion library, ~40 reduced-motion-guarded keyframes, 3.6s cinematic cold-open, 8-12s Higgsfield hero loop spec (1920x1080 + 9:16 crop, H.264 + WebM, palette strictly #05070B/#080A0F base, #00E5FF dominant, #7B61FF and #FF38C7 glints).
## Data sources named
The live GSE Next.js site itself (Playwright screenshots over landing/pricing/picks/dashboard in stub mode), Claude Design's four static HTML specs (Landing/Pricing/Picks/Dashboard), Higgsfield-generated ambient hero loop, pricing via `getCurrentPricingPhase()`.
## Findings (numbers and facts, not vibes)
- Live visual audit (Playwright, 2026-07-08): the site was "already clean, professional, cinematic, and CLEAR — not stale"; a flagged "empty purple box" was a screenshot artifact of `Reveal` + IntersectionObserver starting at opacity:0, verified before any fix (discipline: "don't fix phantoms").
- Verdict: applying Claude Design's static mockups wholesale would REGRESS the site into flat pages; Claude Design limited to component-scoped refinements (Brief A) and Higgsfield ambient hero loop (Brief B).
- The 2026 frontier named is INTERACTIVITY + community, not more visual polish (live board pulse, hover-to-reveal reasoning, "your read vs the model", streak/participation surfaces).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: honesty copy preserved as guardrail ("losses shown graded, illustrative footnotes, 'passing is a position'"); price ladder with "You are here" anchor on pricing page; Picks page shows honest slate stats + "gate collecting" empty state framed as discipline.
- OTHER: guardrails for any 2026 public surface — server-side paywall untouched, WCAG-tuned tokens preserved, every motion prefers-reduced-motion guarded, LCP/perf budgeted (poster-first + lazy).
## Engine-actionable? (yes/no + one-line what)
No — design/ops doc, but confirms "honesty preserved (losses shown graded)" as the standing trust-surface doctrine any public proof surface must keep.
