# docs/ops/2026-08-21-gym-session-status.md
## What it is (1-2 sentences)
A 2026-08-21 autonomous session status report covering what was shipped, what's ready for founder merge, one CI blocker (T12), data-sourcing decisions, and four frozen-spec math fixes awaiting owner approval.

## Key metrics/methods (formulas where given, else "not specified")
- NHL goal-model correction: NHL should use Poisson, not NB2 — NHL goal dispersion ≈ 1.01 over 52,540 team-matches (this changes the build; owner-gated, pointer only).
- ESPN scoreboard fix: explicit `limit=1000` on both ESPN scoreboard clients (PR #446) — busy dates (CFB Saturdays, multi-league soccer) silently truncated boards; `espn-results-client` is the settlement scores path.

## Data sources named
- Soccer: `football-data.co.uk` = free CSVs with real closing columns (Bet365/Pinnacle close/Max/Avg + closing O/U + Asian handicap), 2021/22–2025/26, ~22–25 leagues — removes The Odds API for the entire soccer leg.
- Register-now list (not yet applied): football-data.co.uk, Retrosheet, footballcsv, schochastics, openfootball, martj42, OpenLigaDB-with-caveat.
- MoneyPuck flagged "already cleared" but is non-commercial → hard blocker.
- US majors (MLB/NFL/NBA/NHL): no free closing-line source exists; every "free" one traces to excluded SBR ($5,000 ToS) — settled as licensed-vendor decision; trial SportsGameOdds (free tier, built-in settlement) as diversification off The Odds API.
- Neon prod DB string exposed and still needs rotation.

## Findings (numbers and facts, not vibes)
- PR #446 shipped (data-ingestion 297/297 tests green, tsc 0): explicit `limit=1000` on both ESPN scoreboard clients; previously truncated CFB Saturday / multi-league soccer boards and left completed games without final scores on the settlement path.
- #442 (ledger guard) already merged; main green. #441 (build-worker segfault fix): Build and Test green; only red is the pre-existing T12 import-boundary guard, red on every PR because it's red on main.
- T12: the AI-transport import-boundary guard reports 8 violations on main; #433 fixes 4; the remaining 4 need an owner decision (3 config predicates with google-oauth relocation drag + genesis-kernel evidence manifest; 1 new OPERATOR_SCRIPT_ALLOWLIST entry for `api.cerebras.ai` smoke script).
- NHL/Poisson reclassification (dispersion ≈1.01, 52,540 team-matches) is a frozen-spec change requiring owner approval before any freeze/fire.
- Deliberately not touched: MVE fire (one-shot, irreversible), sealed `.github` (watchdog "ok"→"healthy", `needs: test` gate), exposed Neon prod string, source-rights-registry classifications.
- Optional next pass teed up: one orchestrated GitHub pass for soccer/settlement breadth only — will NOT close US closing lines.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- NHL Poisson reclassification vs NB2 (OTHER — distribution-model choice, not QB/coaching)
- Soccer closing-line data solved free (Bet365/Pinnacle close columns) (OTHER)
- US closing lines remain licensed-vendor-only decision (OTHER)
- ESPN settlement-path truncation bug (OTHER)

## Engine-actionable? (yes/no + one-line what)
Yes — NHL goal-model correction (Poisson over NB2 at dispersion ≈1.01) is a direct spec change for the NHL leg, pending owner approval.
