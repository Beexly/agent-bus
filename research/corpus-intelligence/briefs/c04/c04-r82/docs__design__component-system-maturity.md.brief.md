# docs/design/component-system-maturity.md
## What it is (1-2 sentences)
A doctrine document defining a 5-level UI component maturity model (Level 0 Sketch → Level 4 Deprecated) for Sports OS, governing when components may ship to production, with claim-governance and accessibility gates at promotion. It is a design-system governance doc, not sports modeling research.
## Key metrics/methods (formulas where given, else "not specified")
- Level 2 (Beta) requires: TypeScript strict, WCAG 2.1 AA, ≥80% statement coverage for core logic + an integration test, claim-governance clearance, subscription-tier gating tested server-side.
- Level 3 (Stable) requires: ≥90% test coverage, automated claim-governance scanner test, visual regression baseline, error boundary, skeleton/loading and empty states, ≥3 production usage instances with zero open P1+.
- Render-time performance targets: Pick card <50ms first render (LCP <100ms); Evidence drawer <100ms open; Signal ticker <30ms update; Confidence score display <20ms; Settlement badge <10ms; Page-level data grid <200ms initial (LCP <500ms).
- Forbidden terms list for pick-content claim tests: 'guaranteed', 'lock', 'sure thing', '100%', "can't miss", 'sharp money', 'locks', 'free winner'; also banned app-wide: casino green (#00A651), "Lock"/"guaranteed" copy, `dangerouslySetInnerHTML` with AI content, client-only subscription checks (L2+).
## Data sources named
None (design-system doctrine; industry references: Atlassian, Radix/shadcn, Carbon, Vercel/Next.js).
## Findings (numbers and facts, not vibes)
- Demotion rule: a Level 3 component drops to Level 2 if a claim-governance violation is found in its output, a P1 accessibility regression appears, or subscription gating proves bypassable.
- Claim-governance automated test is required at Level 2+ for any component surfacing pick/intelligence content; task not complete until all user-facing components are ≥Level 2 and registered.
- Task-completion criteria: no user-facing Level 0/Level 1 components; all Level 2+ subscription-gated components validated server-side.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Component-level claim-governance tests with forbidden-terms list → TRUST-SIGNAL
- Pick-card <50ms render / confidence display <20ms targets → OTHER (site performance)
- Maturity registry schema → OTHER
## Engine-actionable? (yes/no + one-line what)
No — site design-system governance; the only engine-relevant residue is the forbidden-claims terms list, already codified in the guard pipeline per LAUNCH_RUNBOOK LQ11.
