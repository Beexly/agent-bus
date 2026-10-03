# calibration-proposals/2026-09-28-short-week-road-deficit-backtest.md

## What it is (1-2 sentences)
A backtest write-up (2026-09-28) testing the live `short-week-road-deficit` signal (`packages/prediction-engine/src/signals/situational/short-week-road-deficit.ts`) — whose docstring claims road teams on 4 days rest underperform their baseline spread by **-1.85 to -2.30 points** and the code ships as a **-1.75 point** spread penalty — against 2,622 settled NFL regular-season games (2015–2024) from nflverse `games.csv`. The measured effect is **-0.471 vs +0.063 control (raw differential -0.534, Welch t = -0.53)**: not statistically distinguishable from zero; the shipped magnitude is 3.3x the point estimate.

## Key metrics/methods (formulas where given, else "not specified")
- Corpus: nflverse `games.csv` (CC-BY 4.0), n = 2,622 settled NFL REG games, 2015–2024; builder `scripts/ops/build-backtest-corpus.mjs`; test `src/backtest/short-week-road-deficit.backtest.test.ts`. Rest days READ from source's own `home_rest`/`away_rest` columns (not derived locally). `isDivisionRivalry` joined from `teams_colors_logos.csv` `team_division` — real membership lookup. Corpus intentionally NOT committed; builder regenerates. Dropped rows counted and printed, never silent: 1 of 2,623 dropped (missing spread line).
- Shipped signal constants: spread penalty **-1.75 points** (code), plus **-0.65** over 1500 miles of travel, **-0.50** when opponent rested normally; emitted via `spreadPointAdjustment` in `signal-registry-extensions.ts` — live in output.
- Measurement: side playing on ≤4 days rest graded against the **closing** spread; control = all games where both teams had >4 days rest.

| group | n | mean vs closing spread | sd |
|---|---|---|---|
| short week (≤4 days rest) | 157 | **-0.471** | 12.206 |
| control (>4 days rest) | 2,465 | **+0.063** | 12.815 |

- Raw differential: **-0.534 points. Welch t = -0.53.** Not statistically distinguishable from zero. |t| = 0.53 over n=157.
- Shipped penalty is **3.3x** the point estimate (1.75 / 0.534 ≈ 3.28).
- Note: the backtest README pointed at a `schedules.csv` URL that now 404s (asset renamed to `games.csv`); used the URL verified resolving on 2026-09-28.

## Data sources named
- nflverse/nflverse-data `games.csv` (CC-BY 4.0) — 2015–2024; `home_rest`/`away_rest` columns; `spread_line` (positive when home team favored — sign convention explicitly documented); `teams_colors_logos.csv` `team_division` for rivalry join.
- Internal: `packages/prediction-engine/src/signals/situational/short-week-road-deficit.ts`, `signal-registry-extensions.ts`, total-signal spec rule 6 (rule must prove itself in backtest before touching a live projection), law 3 (rescale is a founder decision).

## Findings (numbers and facts, not vibes)
- The docstring's "Empirical Domain Characteristics" claim: road teams on 4 days rest underperform baseline spread by -1.85 to -2.30 points, with a **34% increase in 4th-quarter explosive plays**. The backtest supports neither at face value: the spread claim's point estimate is -0.534 (≈1/3.3 of shipped), and the 34%-explosive-plays claim is **not testable from this corpus** — recorded as UNSUPPORTED (not refuted); needs a play-level source.
- The effect points the claimed direction (sign is not the problem): short-week teams do underperform (-0.471 vs +0.063). The verdict: "not backwards — roughly a third of the claimed size, and the claimed size is not real."
- A closing line is a near-perfect market estimate: a genuine 1.75-point rest edge would show up as a large t, not sub-1. The measurement is shaped so the only way to pass is for the measurement to come out wherever it comes out (raw margin, nothing added).
- **Bug 1 — self-confirming backtest:** the first version added `spreadPointAdjustment` to the observed margin then compared groups — returns ~-1.77 BY CONSTRUCTION ("confirmed" the -1.75 perfectly). Deliberately not done: measuring raw margin only.
- **Bug 2 — sign error exposed by the control:** first raw run used `margin + line`; nflverse `spread_line` is positive when home favored, must be subtracted. Produced impossible control mean of **-3.483** (closing lines average ~0 by construction) — this is why a control group exists; the write-up records the mistake.
- Deliberate non-action: the magnitude is NOT being changed. Lowering -1.75 to -0.53 or dropping the signal = changing live output on one backtest; per law 3 and the backtest-or-cut discipline, rescale is a founder decision. This document is the evidence for it.
- Recommendation for the decider (three honest options): (a) rescale penalty to measured effect and widen the interval; (b) demote the signal to an unweighted logged observation; (c) widen the corpus (play-level, more seasons) and re-measure. Option (c) most supported — n=157 with |t|=0.53 cannot distinguish "small real effect" from "no effect."

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **SCHEME**: This is the calibration program's exemplar discipline — situational/rest signals (short week, travel, rest differentials) must prove themselves against closing lines in a real backtest before touching live projections (total-signal spec rule 6). The 3.3x magnitude inflation finding is the template for auditing every other shipped situational constant; any signal whose docstring asserts "empirical" numbers without this provenance is suspect. Serves calibration/sizing and the scheme/tracking lane.
- **TRUST-SIGNAL**: The honest-reporting of the two bugs (self-confirming backtest, sign error) plus the deliberate refusal to rescale on one backtest (law 3, founder decision) is the calibration lane's procedural spine: the measurement discipline (raw margin only, control group as error-detector, dropped-row counting) is reusable for every future signal audit.
- **COACHING**: The -0.50 "opponent rested normally" component is a coaching-preparation differential claim; the same measurement harness can isolate it. The rest/travel mechanics interact with coaching tendencies (rest-day management) — the harness is the path to measuring those separately. Serves coaching tendencies via the calibration harness.
- **OTHER**: UNCERTAIN — the "34% increase in 4th-quarter explosive plays" claim is UNSUPPORTED, not refuted; it needs play-level data. Any fatigue/explosive-play model built on that number today has no corpus behind it.
- **OTHER**: The sign-convention note (nflverse `spread_line` positive = home favored, must subtract) is a concrete wiring fact for the tracking lane's nflverse ingestion — a wrong sign doesn't crash, it silently inverts; the control-group check is the guard.

## Engine-actionable? (yes/no + one-line what)
Yes — the n=157/-0.534/Welch-t=-0.53 result with the 3.3x inflation ratio is founder-ready evidence to rescale or demote the shipped -1.75 short-week penalty, and the raw-margin+control-group harness is reusable for every situational signal audit.
