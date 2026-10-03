# docs/reasoning/airwave-week3.md
## What it is (1-2 sentences)
Airwave is GSE's media-intelligence "wire": a week-3 table scoring questionable/doubtful skill-player badness per team and deriving an "airwave edge" per game, plus a lane-status table for the audio/beat intake channels feeding it. It is explicitly uncalibrated — a prior of 0.05 weight, "not calibrated on a settled week yet."
## Key metrics/methods (formulas where given, else "not specified")
- Inputs: questionable and doubtful skill players only; outs already sit in availability so they are excluded from re-add. (INFERENCE: the airwave edge formula is not stated in the file; the values behave like home badness minus away badness scaled by ~0.833 — e.g. LAC at BUF: away 0.25, home 0.50 → edge −0.208 — but this is an observed pattern, not a stated formula. File states: not specified.)
- Weight: prior of 0.05. Calibration state: uncalibrated, not yet validated on a settled week.
## Data sources named
- ap_injury_wire (live), x_beat (live_corroboration), espn_975_houston (checked_no_claim), sportsradio_610 (checked_no_claim), sportstalk_790 (registered), siriusxm (schedule_only), reddit (fetch_failed), instagram (no_api), cbs (feed_reachable_no_claim), fantasypros (fetch_failed), dimers (shell_no_claim).
- SiriusXM audio was not captured; channels above are schedule-only, only for games the public schedule page listed.
## Findings (numbers and facts, not vibes)
- 15 week-3 games scored with away/home badness and airwave edge, e.g.: NYJ at DET away badness 0.80 / edge +0.667; KC at MIA home badness 0.95 / edge −0.792; LA at DEN away 0.85, home 0.15 / edge +0.583; five games scored 0.00/0.00/+0.000 (HOU at IND, NE at JAX, SEA at WAS, MIN at TB); ARI at SF home 0.15 / edge −0.125; LAC at BUF 0.25/0.50/−0.208; PHI at CHI 0.00/0.25/−0.208.
- Of 11 lanes: 2 live (ap_injury_wire, x_beat live_corroboration); 2 checked_no_claim; 1 registered; 2 fetch_failed (reddit, fantasypros); 1 no_api (instagram); 1 feed_reachable_no_claim (cbs); 1 shell_no_claim (dimers); siriusxm schedule_only.
- The wire covers questionable/doubtful skill players; outs are excluded because they already sit in availability.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Questionable/doubtful skill-player tracking as an availability edge input: player-availability intelligence, not a QB/coach behavior pattern — OTHER
- Lane status reveals which beat sources are live vs failed (reddit, fantasypros fetch failures; instagram no_api): intake-health monitoring — OTHER
- INFERENCE (marked as such): availability deltas on skill players could alter target concentration/trust-target distribution, but the file makes no such claim — QB-BEHAVIOR (inference only)
## Engine-actionable? (yes/no + one-line what)
no — intake-only with weight prior 0.05 and explicitly uncalibrated on a settled week; actionable only after calibration against settled outcomes.
