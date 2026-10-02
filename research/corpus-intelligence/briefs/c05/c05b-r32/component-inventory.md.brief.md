# design/redesign-2026-09/component-inventory.md
## What it is (1-2 sentences)
A line-cited audit mapping the redesign brief's 12-component library list (from `8970241d-claudedesignprompt.md` §9) to what actually exists in `apps/web/components` — verdicts: reuse as-is (3), reuse with restyle (2), missing (7).

## Key metrics/methods (formulas where given, else "not specified")
- Not specified. Counts: `.design-sync/entry.tsx` re-exports 53 named components (50 `export {...}` statements, one ×3, two ×2) plus 21 `export type` statements.
- Verdicts: reuse as-is — Tabs, DataTable (tables), ToolPageSkeleton (skeleton). Reuse with restyle — PickCard (pick row; gating logic sound, needs palette restyle), EvidenceAuditDrawer (drawer; also needs the accessibility-audit focus-trap fix).
- Missing (7): Buttons (no `<Button>` component — only CSS classes `.btn-primary/.btn-secondary/.btn-ghost` + one-offs), Inputs (no shared Input; hand-rolled per site), Chart frame (four/five independent chart impls: CalibrationCurve, ReliabilityChart, BarChart, ScoreRing, HealthRing — no shared frame enforcing claim-title/axes-units/n/timestamp), Badge set (win/loss/void/push/stale/locked/verified fragmented across ≥8 places), Sheet (none), Toast (none), standalone Empty state (tables solved via DataTable's emptyTitle/emptyHint; non-table cases are bespoke blocks).

## Data sources named
- Codebase evidence only: `apps/web/components/**`, `apps/web/app/**`, `.design-sync/entry.tsx`; referenced docs: `accessibility-audit.md`, brief `8970241d-claudedesignprompt.md` §9.

## Findings (numbers and facts, not vibes)
- Of the 7 missing, 4 (Buttons, Badge set, Empty state, Chart frame) have working scattered pieces — the gap is unification into one component with a shared prop shape; 3 (Inputs, Sheet, Toast) have near-nothing.
- Drawer is the only drawer in the app (`role="dialog" aria-modal="true"`, Escape-to-close) but Tab is NOT constrained inside it — focus-trap fix owed.
- Every badge state renders text-plus-color (accessibility-audit color-only checks pass), but as seven-plus independent one-offs with no shared `variant`/`state` prop.
- PickCard already carries server-side tier gating ("locked, never a blur") matching the brief requirement; its ResultBadge/LockedValue are private to the file.
- No chart enforces the brief's contract: every chart gets a title stating the claim, axis labels with units, sample size, and timestamp.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Tier-gated PickCard ("locked, never a blur"), EvidenceAuditDrawer, calibration/reliability charts — TRUST-SIGNAL
- Missing shared ChartFrame (claim title, n, timestamp) is the gap that matters for honest proof visuals — TRUST-SIGNAL
- Everything else (buttons/inputs/sheet/toast/skeleton/tabs/tables) — OTHER

## Engine-actionable? (yes/no + one-line what)
No — a UI component audit; the ChartFrame gap is design-side, not model-side.
