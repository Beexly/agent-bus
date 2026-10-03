# product/board-page-spec.md
## What it is (1-2 sentences)
The Phase 2 build specification for the `/board` page — Galaxy Sports Edge's public "operations theater" showing live engine state, today's published picks, the Pass List (evaluated-but-not-published games), and a live calibration chart. Phase 1 ships preview stubs; Phase 2 wires real data; acceptance is a 10-point v0 checklist.

## Key metrics/methods (formulas where given, else "not specified")
No formulas. Quantitative parameters specified:
- Auto-refresh every 30s client-side via polling (NOT websockets — master plan Part 4 rule 9); edge cache 30s.
- `/api/board/passes` query params: `sport`, `gateReason`, `limit` (default 50, max 200), `offset`.
- Calibration bands: e.g. "60-65%" with `bandMidpoint`, `actualWinRate` (null when sample < threshold), `sampleSize`; bootstrap state renders empty with warningMessage until `PERFORMANCE_STATS_ENABLED=true`.
- Acceptance criteria: 10 items including mobile layout at 390px, tap targets 44px+, banned-vocabulary scan = zero hits on rendered HTML, Edge Index visible to FREE tier while confidence number is gated to PRO+.
- SEO metadata: Title "Today's Board — Galaxy Sports Edge"; Description "Every game the model evaluated today, with the picks we published and the picks we gated. Transparent factor scoring. Most days, fewer than five picks."; SportsEvent schema per Published Today row.

## Data sources named
- Endpoints: `/api/board/state` (BoardState: scoringNow, publishedToday, gatedToday, modelVersion, composedAt ISO, refreshIntervalSeconds), `/api/board/passes` (PassListResponse with total, passes, filters), `/api/calibration` (bands, diagonal, sampleSize, lastUpdated, bootstrapState, warningMessage).
- Intelligence Graph (`projectForSurface(node, 'PUBLIC_BOARD', viewer)`) enforces tier projection: FREE sees Gate Cam + Published Today rows with Edge Index but `confidence: null`; PRO adds confidence number + factor breakdown links; ELITE adds early-access annotations + draft Model Journal entries.
- Code locations: `apps/web/app/board/page.tsx`, components in `apps/web/components/marketing/` (`GateCam`, `PublishedTodayDetail`, `PassList`, `LiveCalibration`, `EdgeIndexExplainer`).
- Cross-references: master plan Part 4 rule 9 (no websockets); `/methodology` page; `/room/[gameId]` Game Rooms.

## Findings (numbers and facts, not vibes)
- Page structure (top to bottom): Live State Strip → Gate Cam (3 columns: SCORING NOW / PUBLISHED TODAY / GATED TODAY) → Published Today Detail (rows: matchup, pick, line, edge index, confidence tier-gated, pre-mortem preview, room link) → Pass List (rows: matchup, gate reason, evidence health, edge index, room link; filter chips by sport and gate reason, multi-select) → Live Calibration Chart (confidence band X, actual win rate Y, perfect-calibration diagonal overlay, "Updated: [timestamp]. Sample: N settled picks.") → Edge Index explainer + `/methodology` link.
- **Tier projection:** FREE tier sees Gate Cam fully, Published Today rows with Edge Index but NO confidence number and no factor-breakdown link; sees full Pass List; sees Live Calibration in bootstrap state until canonical mode. PRO adds confidence + factor links. ELITE adds early-access annotations + draft Model Journal entries.
- **Bootstrap state:** Gate Cam renders with LAST REFRESH showing BOOTSTRAP MODE; Published Today empty; Pass List renders games scored but gated for bootstrap-only signals; calibration empty state "Building calibration history. N settled picks collected."; top banner: "The engine is in bootstrap mode. Canonical mode unlocks when N settled picks land."
- **Public/private doctrine consequence (INFERENCE):** This spec predates the 2026-09-28 HARD doctrine that the public website shows ONLY projections and rankings. It exposes Edge Index publicly to FREE tier, gate reasons, evidence-health grades, and factor breakdown links to PRO+ — all of which the doctrine now requires pulled behind the fence. The spec's SEO line ("transparent factor scoring", "Most days, fewer than five picks") and acceptance criterion 9 (banned-vocabulary scan) survive, but the tier-exposure rules in this spec are stale relative to the doctrine.
- Open items (owner: Codex): OPEN-BOARD-1 Pass List default sort (default: start time ascending, Edge Index as column sort); OPEN-BOARD-2 "yesterday" tab with one-day lookback (default: yes); OPEN-BOARD-3 refresh cadence under heavy-day load.
- Authorship/ownership: spec by Claude, code owned by Codex; tier projection via Intelligence Graph.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **TRUST-SIGNAL (mechanism — but doctrine-flagged):** The Pass List (games evaluated and gated, with gate reason + evidence health + edge index) was designed as a trust surface — public evidence that the engine says no most days. Under the 2026-09-28 public/private doctrine, the mechanism still serves the trust-target intake lane, but gate reasons and evidence-health grades are internal-only; the public surface keeps only projections/rankings. CONTRADICTION: this spec's FREE-tier exposure of Edge Index + evidence health contradicts the 9/28 doctrine.
- **OTHER (calibration display):** The Live Calibration chart (confidence band vs actual win rate + perfect diagonal, "Sample: N settled picks") is the natural public face of the 2026-09-13 calibration baseline — it would have rendered the 80–89 bucket's 0.497 realized-vs-84.0-confidence gap in real time. Canonical display is env-gated (`PERFORMANCE_STATS_ENABLED=true`), bootstrap until then.
- **OTHER (pre-mortem pipeline):** Published Today rows carry a pre-mortem preview — depends on M-3.2 (`Pick.preMortemContent/At/Version`) from the migration sequence; the board's Game Room "What Would Change Our Mind" panel is the same dependency.

## Engine-actionable? (yes/no + one-line what)
No — stale relative to the 2026-09-28 public/private doctrine; flag it for a doctrine-conformance re-audit before any Phase 2 build proceeds.
