# docs/reasoning/drive-start-calibration.md
## What it is (1-2 sentences)
A calibration record for drive-start field position as a predictor: first snap of each drive from nflverse play-by-play, using 2025 as the prior and 2026 weeks 1–2 as the observation, shrunk with k=12 drives. The file declares this "the MOVE-37 residue that survived ablation: field position, not `sin√min`."
## Key metrics/methods (formulas where given, else "not specified")
- First snap of each drive from nflverse pbp; 2025 = prior; 2026 weeks 1–2 = observation; shrinkage with k=12 drives.
- Signed helper: (away start − home start) / 4, where lower yardline_100 = closer to the end zone.
- Calibration result: r vs 2025 home win = +0.186; slope = +0.0647; se = 0.0208; n = 272; status = LIVE.
## Data sources named
- nflverse play-by-play (pbp) for drive-start first snaps.
## Findings (numbers and facts, not vibes)
- Drive-start field position survived the MOVE-37 ablation; the `sin√min` component did not — field position is the residue.
- On 272 drives: correlation with 2025 home-win outcome r = +0.186; estimated slope +0.0647 with standard error 0.0208 (~3.1 SE from zero, statistically notable by construction of the reported numbers — INFERENCE: this significance read is mine, the file does not state it).
- Shrinkage constant k=12 drives applied to the weeks 1–2 2026 observation against the 2025 prior.
- The signal is flagged LIVE, not experimental.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Field position as a game-outcome residue: game-state driver rather than a QB behavior pattern — OTHER
- INFERENCE (marked as such): persistent drive-start advantage/loss could reflect punting/coverage/special-teams and offensive-scheme efficiency, but the file makes no coaching/scheme claim — COACHING/SCHEME (inference only)
## Engine-actionable? (yes/no + one-line what)
yes — a LIVE, quantified field-position term (r=+0.186, slope +0.0647, se 0.0208, n=272, shrinkage k=12) with an explicit signed helper formula is directly usable as a calibrated prior in the game-outcome model.
