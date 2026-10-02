# design/redesign-2026-09/sitemap-route-mapping.md
## What it is (1-2 sentences)
Route-to-destination mapping of all 236 `page.tsx` files under `apps/web/app` into 9 destinations (Today, Record, How it works, Fantasy, Stats, Utility rail, Footer-only, Internal, Home) as input for the founder's redesign brief. Purpose for each route was derived from `metadata.title`, first `<h1>`, `Shell title`, or code comments — not full reads; no performance numbers appear anywhere in the document.
## Key metrics/methods (formulas where given, else "not specified")
not specified (no formulas or performance numbers)
## Data sources named
None (repo code; founder brief `8970241d-claudedesignprompt.md` §4 as the IA authority).
## Findings (numbers and facts, not vibes)
- 236 routes: Today 8, Redirect/merge 19, How it works 21, Fantasy 20, Stats 68, Utility rail 4, Footer-only 20, Internal 75 (`/admin/*` 40, `/cockpit/*` 35), Home 1.
- Record absorbs 17 routes: brief §4.2 names 9 (`/performance`, `/calibration`, `/clv`, `/proof`, `/ledger`, `/verify`, `/accountability`, `/performance/losses`, `/kill-ledger`); 5 more added by judgment call from app code comments (`/changelog`, `/track`, `/track/platform`, `/glass-ledger`, `/vault`) plus 3 child routes.
- 10 open decisions: `/age-verify` (age gate removed per brief §10 — delete, redirect, or keep dormant); `/content-lab` ungated but reads internal; `/deck` is "illustrative, not live"; `/embed/edge-index/[gameId]` widget placement; `/cipher` puzzle-page fit; Record's 5 added routes need human confirmation; `/intelligence/*` split between Stats and Fantasy; `/watchlist` vs `/stats/watchlist` duplicate; utility-rail Search has no page at all (design-phase gap); `/vs/tout-services` SEO landing page.
- Mobile nav: 5-tab bottom bar (Today, Record, How it works, Fantasy, Stats); utility rail in a sheet (Pricing, Sign in/Account, Search).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: site IA only — note the 75 internal routes (admin/cockpit) that must never appear in public nav, aligning with the public/private surface doctrine.
## Engine-actionable? (yes/no + one-line what)
no — IA documentation, not an engine input; only relevance is confirming which routes are internal-only under the fencing doctrine.
