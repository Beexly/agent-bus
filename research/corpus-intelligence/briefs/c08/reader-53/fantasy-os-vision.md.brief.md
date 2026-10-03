# docs/fantasy-os-vision.md
## What it is (1-2 sentences)
Galaxy Fantasy's north-star vision doc for a "decision-intelligence OS for your roster": a spatial League Twin (digital twin of roster/league) and a GM Ledger + Process Grade (pre-committed, Merkle-recorded decisions graded on process, not luck), plus table-stakes fantasy tools (draft, waiver, lineup, trade, DFS MRI, best ball), all built to glass-box doctrine gates (illustrative data only, real money founder-gated, Studios never auto-publishes).
## Key metrics/methods (formulas where given, else "not specified")
not specified — no formulas given. Concept-level: projection = brightness, volatility = halo, usage/role = size in the League Twin; GM decisions committed to a tamper-evident SHA-256 Merkle record pre-game, then graded on process vs. outcome. Build-status table: 19 rows (League Twin BUILT; GM Ledger BUILT; 9 tools BUILT; Sleeper read-only sync live; DFS contest / Squares / Survivor NOT BUILT). Test counts named: 8 (league-twin), 6 (gm-ledger), 11 (academy), 6 (autonomy), 21 (draft), 5 (waivers), 6 (lineup), 6 (trade), 22 (dfs-optimizer), 16 (bestball), 7 (scheme), 10 (props), 9 (contests paper), 9 (host), 6 (dk-import), 8 (free-trial).
## Data sources named
No live projections/ADP source wired (illustrative pool only until a real source is connected); Sleeper read-only (GET-only) league sync live at `/fantasy/connect`; DK CSV import for DFS salaries.
## Findings (numbers and facts, not vibes)
- Vision captured 2026-06-04; build status verified 2026-08-15 at commits `ec8acddc` and `f9c5ff5d`.
- Both first-of-a-kind systems (League Twin, GM Ledger + Process Grade) BUILT and tested.
- Real-money/chance surfaces (DFS contest, Squares, Survivor) NOT BUILT by doctrine design.
- 15 tool surfaces listed; GM Autopilot has L2–L4 `founderGated` in code — proposes/records, never autonomous account writes.
- GM Ledger uses a real SHA-256 Merkle root with inclusion proof and tamper detection.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- League Twin as a spatial digital twin of roster/league, where injury/scheme change is an "impact-event shockwave" — SCHEME
- Scheme & Coaching Intelligence tool (coaching changes cascading through fantasy values) — COACHING, SCHEME
- GM Ledger pre-committed process-graded decisions / calibrated GM Rating — TRUST-SIGNAL
- Contest/betting trust posture (no auto-publish, no real-money without founder gate) — TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
yes — wire the scheme/coaching-change impact-propagation concept into the engine's coaching-change handling (injury/scheme change as re-pricing "shockwaves" through affected fantasy values), and adopt the process-grade framing (grade decisions on process at decision time, not outcomes) for engine calibration hygiene.
