# product/board-page-spec.md
## What it is (1-2 sentences)
Phase 2 spec for the public `/board` page — one of Galaxy's three core public surfaces: three sections top to bottom (live engine state, what's published today, and the Pass List of everything evaluated but not published), plus a live calibration chart and an Edge Index explainer, free and transparent with tier projection enforced by the Intelligence Graph.
## Key metrics/methods (formulas where given, else "not specified")
- Live Gate Cam: 3 columns (SCORING NOW / PUBLISHED TODAY / GATED TODAY), auto-refresh every 30s via client-side polling (NOT websockets); `/api/board/state` edge-cached 30s.
- Pass List: `/api/board/passes` with `sport`, `gateReason`, `limit` (default 50, max 200), `offset`; filter chips sport + gate reason; default sort open (OPEN-BOARD-1).
- Calibration: `/api/calibration` returns `bands` (`bandLabel`, `bandMidpoint`, `actualWinRate` null when sample below threshold, `sampleSize`), perfect-calibration `diagonal`, `sampleSize`, `lastUpdated`, `bootstrapState`, `warningMessage`. Chart hand-built SVG or Recharts — no new charting dependency.
- Acceptance: 10 criteria incl. mobile 390px, 44px+ tap targets, banned-vocabulary scan zero hits, Edge Index visible to FREE, confidence number gated to PRO+.
- Tier projection: FREE sees Gate Cam, Published Today rows (Edge Index, no confidence, no factor links), full Pass List, bootstrap-state calibration. PRO adds confidence number + factor breakdown links. ELITE adds early-access annotations + draft Model Journal entries referencing today's picks. Enforced via `projectForSurface(node, 'PUBLIC_BOARD', viewer)`.
## Data sources named
- Endpoints: `/api/board/state`, `/api/board/passes`, `/api/calibration`. Composed from the Intelligence Graph. Canonical mode gated on `PERFORMANCE_STATS_ENABLED=true`.
- SEO: title "Today's Board — Galaxy Sports Edge"; description "…Most days, fewer than five picks."; SportsEvent structured data per Published Today row; OG image compositing the Live State Strip.
## Findings (numbers and facts, not vibes)
- Positioning facts: "Most days, fewer than five picks." Pass List explicitly renders what was gated and why (gate reason badge, evidence health grade, edge index, one-line reason text) — transparency is the product.
- Bootstrap state: banner "The engine is in bootstrap mode. Canonical mode unlocks when N settled picks land."; Pass List still renders games gated for bootstrap-only signals; calibration chart shows "Building calibration history. N settled picks collected."
- Empty published state copy: "Engine published zero picks today. See the Pass List for everything we considered."
- Open items: OPEN-BOARD-1 (Pass List default sort), OPEN-BOARD-2 (yesterday tab / one-day lookback), OPEN-BOARD-3 (30s refresh cadence tuning under load).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the Pass List (everything gated, with reasons), the live calibration chart vs. the perfect diagonal, bootstrap-state honesty, and the banned-vocabulary scan are all trust mechanics.
- OTHER: public product surface design, tier projection, SEO.
## Engine-actionable? (yes/no + one-line what)
Partial — the calibration endpoint's band shape (actualWinRate null when below sample threshold, bootstrap state) is the canonical public surface for calibration; wire it only from `eligibleForLearning` settled rows per the C12 floor, so the public chart never displays pre-floor numbers as real.
