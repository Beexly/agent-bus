# docs/ops/PRODUCT_BOARD_SURFACES.md
## What it is (1-2 sentences)
The status board for GSE product surfaces: which boards are live-gated, dark, or design-preview, with the source-of-truth code path and ops probe.
## Key metrics/methods (formulas where given, else "not specified")
Not specified — status table, no formulas.
## Data sources named
SoT code: `apps/web/lib/product/board-surfaces.ts`; ops probe: `GET /api/ops/public-surface-truth` → `productBoards`; `lib/public/dark-reason.ts`.
## Findings (numbers and facts, not vibes)
- STATKING: dark_by_law (default) — `/stats/*` requires STATS_PUBLIC + rights before marketing live data. [OTHER]
- HELM: design_preview (`design-preview/helm-homepage.html` only); PICKPILOT: design_preview (retired brand → GSE archive); CLUBHOUSE: scene_chrome (fantasy scene, not a product). [OTHER]
- GSE_BOARD: live_gated — `/board` when LIVE_BOARD opens; GSE_PICKS: live_gated — `/picks` + `/api/picks`; GSE_COCKPIT: live_public — operator always-on. rankingP sort is **required** on all three live code paths (already wired). [TRUST-SIGNAL]
- Law: do not market design-preview as live product; do not flip STATS_PUBLIC without a rights memo; dark reasons `rights_incomplete` / `design_preview`. [OTHER]
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
The rankingP-required-on-live-paths rule is TRUST-SIGNAL (ranking power is the metric that decides what the public sees); the rest is OTHER (product-surface status).
## Engine-actionable? (yes/no + one-line what)
No — product-surface status doc; rankingP is referenced as a requirement but this file contains no method or threshold.
