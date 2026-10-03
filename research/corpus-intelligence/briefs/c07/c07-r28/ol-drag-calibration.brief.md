# reasoning/ol-drag-calibration.md
## What it is (1-2 sentences)
A fitted offensive-line absence calibration on 1,069 team-weeks (2024–2025) measuring points lost when a starting tackle is out, DNP, or limited, with noise-shrunk "used points" and multipliers for the weekly adjustment file.
## Key metrics/methods (formulas where given, else "not specified")
Outcome: points scored minus what that opponent usually allows (each team compared with itself); coefficients noisier than 7 points pulled toward zero. Input is whether the starting tackle practiced (doubtful pooled with out; a questionable tag alone is not input). Fitted table:
- tackle_out: 129 games, −2.65 pts (se 0.91) → used −2.61, multiplier −0.1132
- tackle_dnp: 87 games, −1.77 pts (se 1.20) → used −1.72, multiplier −0.0746
- tackle_limited: 154 games, −1.17 pts (se 0.90) → used −1.15, multiplier −0.0498
- interior_out: 105 games, +0.95 (se 0.98) → used +0.00, multiplier +0.0000 (positive → zeroed)
- backup_tackle_out: 37 games, −0.52 (se 1.58) → used +0.00, multiplier +0.0000 (inside one se → zeroed)
## Data sources named
Team practice/injury participation data (starting tackle practice status), 2024–2025, n=1,069 team-weeks.
## Findings (numbers and facts, not vibes)
- A starting tackle out costs −2.61 used points (se 0.91, 129 games); DNP −1.72 (se 1.20, 87 games); limited −1.15 (se 0.90, 154 games).
- Interior OL out (+0.95, se 0.98) and backup tackle out (−0.52, se 1.58) are zeroed — one is positive, the other inside one se. Only tackle statuses carry weight.
- Practice-participation status, not the official injury tag, is the input.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OL: starting-tackle absence drag fitted and ready — −2.61/−1.72/−1.15 used points by out/DNP/limited; interior and backup-tackle absences zeroed.
- TRUST-SIGNAL: the shrinkage discipline (coefficients inside one se, or positive, stored as zero) is the same honesty rule as the gap board.
## Engine-actionable? (yes/no + one-line what)
Yes — publishable weekly OL adjustment multipliers (−0.1132/−0.0746/−0.0498 by tackle status) fed by practice-participation data; next week reads this file.
