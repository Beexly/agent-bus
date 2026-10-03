# reasoning/ol-drag-calibration.md
## What it is (1-2 sentences)
A fitted calibration table for offensive-line drag on team scoring: how much starting-tackle and interior-OL absence costs a team in points versus what that opponent usually allows, with standard errors, shrinkage ("used points"), and final multipliers.

## Key metrics/methods (formulas where given, else "not specified")
- Sample: 1069 team-weeks in 2024 and 2025.
- Outcome: points scored minus what that opponent usually allows (within-team comparison, each team compared with itself).
- Shrinkage rule: "A coefficient noisier than 7 points is pulled toward zero." Zeroing rule: "A coefficient inside one standard error, or a positive one, is stored as zero."
- Input definition: not the questionable tag — whether the starting tackle practiced. Doubtful is pooled with out.
- Fitted table:
  - tackle_out: games=129, points=−2.65, se=0.91, used points=−2.61, multiplier=−0.1132
  - tackle_dnp: games=87, points=−1.77, se=1.20, used points=−1.72, multiplier=−0.0746
  - tackle_limited: games=154, points=−1.17, se=0.90, used points=−1.15, multiplier=−0.0498
  - interior_out: games=105, points=+0.95, se=0.98, used points=+0.00, multiplier=+0.0000
  - backup_tackle_out: games=37, points=−0.52, se=1.58, used points=+0.00, multiplier=+0.0000
- No explicit formula for the multiplier column is stated (INFERENCE: likely used-points divided by a league-average score baseline ~23, i.e. −2.61/23 ≈ −0.1135, but the file does not state this — UNCERTAIN).

## Data sources named
- 2024 and 2025 team-week scoring vs opponent defensive baselines (no named vendor)
- Practice participation (tackle practiced or not)

## Findings (numbers and facts, not vibes)
- Starting tackle OUT costs −2.65 points (se 0.91, n=129 team-weeks); the fitted/used value is −2.61 with multiplier −0.1132. Effect is ~2.9 se from zero — the strongest OL signal in the file.
- Starting tackle DNP: −1.77 points (se 1.20, n=87); used −1.72, multiplier −0.0746.
- Starting tackle limited: −1.17 points (se 0.90, n=154); used −1.15, multiplier −0.0498.
- interior_out: +0.95 points (se 0.98, n=105) — positive and inside one se → stored as zero (+0.00). The interior-OL absence effect does not survive the zeroing rule.
- backup_tackle_out: −0.52 (se 1.58, n=37) — inside one se → zeroed.
- 154 team-weeks of tackle_limited is the largest sample cell; 37 backup_tackle_out is the smallest.
- Doubtful pooled with out; questionable tag is NOT the input — practice participation is.
- File contract: "The next week reads this file" — this is a stored artifact consumed weekly by the prediction pipeline.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **OL:** This is the OL lane's flagship calibration artifact — a graded tackle-absence cost ladder (−2.65 / −1.77 / −1.17 by severity) with se bounds and a shrinkage rule, read weekly by the pipeline. Program served: calibration/sizing and the OL trust-target intake (injury-availability texts feed the tackle-practiced input).
- **TRUST-SIGNAL:** The zeroing discipline (inside-one-se or positive → stored zero) is a calibration safeguard: it prevents the engine from crediting interior/backup-OL absence effects that do not exist (interior_out was +0.95, i.e. positive noise). Serves calibration/sizing.
- **OTHER:** The input choice (practice participation over injury tags) is a methodological finding for the tracking lane: questionable tags are noise, practice DNP is signal. Serves the tracking lane / trust-target intake.

## Engine-actionable? (yes/no + one-line what)
Yes — weekly-read artifact with concrete per-severity tackle-absence costs (−2.61/−1.72/−1.15 points) and multipliers, zeroing interior/backup effects.
