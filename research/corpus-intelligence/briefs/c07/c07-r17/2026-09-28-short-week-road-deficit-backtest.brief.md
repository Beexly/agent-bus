# calibration-proposals/2026-09-28-short-week-road-deficit-backtest.md
## What it is (1-2 sentences)
A backtest write-up (2026-09-28) of the live `short-week-road-deficit` situational signal: the shipped -1.75pt spread penalty was tested against 2,622 settled NFL games (2015–2024) from nflverse and failed to survive — the measured effect is -0.53 points with |t| = 0.53, not statistically distinguishable from zero.

## Key metrics/methods (formulas where given, else "not specified")
- Corpus: nflverse `games.csv` (CC-BY 4.0), 2,622 settled NFL REG games 2015–2024; builder `scripts/ops/build-backtest-corpus.mjs`; test `src/backtest/short-week-road-deficit.backtest.test.ts`.
- Measurement: raw margin vs closing spread for the side on ≤4 days rest; control = both teams >4 days rest.
- Results: short-week group n=157, mean vs closing spread **-0.471**, sd 12.206; control n=2,465, mean **+0.063**, sd 12.815; raw differential **-0.534**; Welch t = **-0.53**.
- Shipped penalty: -1.75 spread points (plus -0.65 over 1500 miles travel, -0.50 vs normally-rested opponent) — **3.3×** the point estimate; docstring claimed -1.85 to -2.30.

## Data sources named
nflverse/nflverse-data `games.csv`; `teams_colors_logos.csv` (team_division for isDivisionRivalry); rest days read from source `home_rest`/`away_rest` columns.

## Findings (numbers and facts, not vibes)
- The effect is not statistically distinguishable from zero (|t| = 0.53, n=157); the sign points the claimed way, so the issue is magnitude, not direction.
- The "34% increase in 4th-quarter explosive plays" docstring claim is UNSUPPORTED (not refuted) — not testable from this corpus; needs a play-level source.
- Two backtest-process bugs caught: (1) a self-confirming backtest that added the shipped adjustment to the observed margin (reproduced -1.77 by construction) — fixed to measure raw margin; (2) a sign error (`margin + line` instead of `margin - line`) exposed by the control group mean of -3.483 (impossible for closing lines).
- Deliberately NOT changed: rescale/drop is a founder decision per law 3 and backtest-or-cut discipline; options: rescale to measured effect, demote to unweighted logged observation, or widen corpus and re-measure (recommended — n=157, |t|=0.53 can't separate small-real from no-effect).
- Provenance: 1 of 2,623 rows dropped (missing spread line), counted not silently; corpus not committed (builder regenerates); the backtest README pointed at a 404'd `schedules.csv` URL — used the verified `games.csv` URL.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Short-week rest effect, travel-distance penalty, rest-differential penalty — COACHING-adjacent situational factor (rest/fatigue/game-planning); tagged OTHER (situational; no coach-specific claim) — could count as COACHING in the preparation/rest sense. TRUST-SIGNAL: the whole write-up is calibration honesty — no magnitude ships without backtest proof, self-confirming tests rejected, control groups required.

## Engine-actionable? (yes/no + one-line what)
yes — the -1.75 short-week penalty is unproven at 3.3× the measured effect; the founder-facing recommendation is to rescale to ~-0.5 or demote to an unweighted logged observation.
