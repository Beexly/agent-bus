# docs/models/qb-pressure-indices-proposal.md
## What it is (1-2 sentences)
Pre-build math proposal (tracker law: math first, owner approves here before code ships) defining two pressure-related indices — a QB pressure-sensitivity index and a team-level Protection Stress index — derived only from already-ingested datasets (`pfr_advstats`, `pbp`, `ftn_charting`). Explicitly display/analyst-use only in v1: "No pick-engine input in v1 — display + analyst use only until calibration says otherwise."
## Key metrics/methods (formulas where given, else "not specified")
- **Index 1 — QB Pressure Sensitivity:** `sensitivity = EPA/dropback (clean pockets) − EPA/dropback (pressured)`, from play-by-play joined to FTN per-play charting. Reported in EPA per dropback, season-to-date, REG only. Higher = more pressure-fragile.
  - Null guards: < 100 pressured dropbacks in window → null; < 95% of the QB's dropbacks matching an FTN row → null (partial join is a silent bias).
  - Stated weaknesses: FTN pressure calls are human charting (subjective at margins); sensitivity conflates QB and his line; EPA inherits opponent strength with no opponent adjustment in v1.
- **Index 2 — Protection Stress (team, weekly):** `stress = pressure_rate_allowed − league_expected_rate(blitz_rate_faced)`, where `league_expected_rate` is the season-to-date league linear regression of pressure rate on blitz rate, refit weekly. Positive = line gives up more pressure than its blitz exposure explains (losing one-on-ones).
  - Null guards: < 3 team games → null; league fit needs a batch of ≥32 team-weeks before any output (early-season → null, stated).
  - Stated weakness: blitz count ≠ rusher quality; a simple linear expectation can't see scheme — "v1 is a screen, not a verdict."
- Acceptance: owner approves the math; pure derivations + tests (clean/pressured split fixtures, join-coverage guard, blitz-regression null path); loader bounded + cached; tracker line moves in the same commit.
## Data sources named
- `pfr_advstats` (live in `lib/nflverse/pressure-coverage.ts`), `pbp`, and `ftn_charting` — all via nflverse. No new sources permitted.
## Findings (numbers and facts, not vibes)
- No measured numbers in this file — it is a proposal, not a result report.
- The proposal asserts two concrete thresholds baked into v1: the 100-pressured-dropback minimum for the QB index and the 95% join-coverage floor. [QB-BEHAVIOR]
- The proposal asserts the Protection Stress index is separated from blitz volume: a line losing one-on-ones is distinguished from a line facing extra rushers. [OL]
- v1 explicitly bars both indices from pick-engine input pending calibration — display/analyst use only, each value carrying the Stat Stability Grade and its weakness line. [TRUST-SIGNAL]
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB Pressure Sensitivity = per-QB degradation under pressure in EPA/dropback, with explicit null guards — a QB-behavior feature for pressure matchup modeling. [QB-BEHAVIOR]
- Protection Stress isolates OL one-on-one losses from blitz volume via a league regression baseline — an OL matchup feature. [OL]
- The "math proposal first, owner approves before code" pattern plus null-guard doctrine and the no-pick-input v1 rule are trust-signal process artifacts. [TRUST-SIGNAL]
## Engine-actionable? (yes/no + one-line what)
Yes — both formulas are fully specified, derivation-only-on-existing-data proposals with null guards and acceptance tests named; build exactly these two indices once the owner approves the math in-file.
