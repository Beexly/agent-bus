# docs/design/redesign-2026-09/README.md
## What it is (1-2 sentences)
Delegation plan for the September 2026 public front-end redesign: operating rule (cheap Sonnet subagents execute, expensive orchestrator only steers), the 4-phase Claude Design workflow, and open founder decisions.
## Key metrics/methods (formulas where given, else "not specified")
Not specified — process doc; states Phase 0 design-sync bundled 53 real components with clean render checks and authored preview cards (four Sonnet batches, orchestrator fold-in); Phase 1 brief inputs: sitemap of 236 pages (every page.tsx mapped to Today/Record/How it works/Fantasy/Stats/Utility/Footer/Internal), voice guide with 15 before/after pairs, design tokens with measured contrast, per-screen accessibility audit, component inventory
## Data sources named
None (internal process references: .design-sync/, claudedesignprompt.md outside the repo)
## Findings (numbers and facts, not vibes)
- 53 components bundled; render check clean on all 53
- 236 pages in the sitemap mapping
- Upload blocked pending founder authorization of claude.ai/design
- Audit findings: age gate sits on 6 screens (board, picks, performance, pricing, stats, fantasy), not just /fantasy — removing it is a founder decision; footer's "Replay intro" link contradicts brief §5; 7 of 12 brief component-library items don't exist as shared components (buttons, inputs, chart frame, badge set, sheet, toast, empty state)
- Every number rule: every screen's numbers must carry n and a timestamp, no AI framing, both themes AA, both breakpoints
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- "Every number has n and a timestamp" design rule is the same freshness trust primitive as PL7's calibration timestamp [TRUST-SIGNAL]
- No QB-BEHAVIOR/COACHING/OL/SCHEME content [OTHER]
## Engine-actionable? (yes/no + one-line what)
No — design delegation plan; intake only.
