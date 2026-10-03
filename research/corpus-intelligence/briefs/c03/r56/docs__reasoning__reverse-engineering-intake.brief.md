# docs/reasoning/reverse-engineering-intake.md
## What it is (1-2 sentences)
Intake log of the 12 ranked upgrades from the NFL Analytics Reverse-Engineering file (received 2026-09-26, nflverse as legal base), recording what was wired for the Week 3 engine reading versus measured-and-left-out.

## Key metrics/methods (formulas where given, else "not specified")
- Rank 1 opponent-adjusted efficiency: 2025 defensive EPA allowed = opponent prior, 2026 weeks 1–2 = observation. Wired.
- Rank 2 turnover regression: interceptions vs 2025 rate, shrunk, 5% of efficiency blend; fumble luck not separated. Wired.
- Rank 3 pass/rush split: pass residual 55%, rush residual 15%. Wired.
- Rank 4 explosive-play differential: pass plays of 20+ yards / attempts, 10% of blend. Wired.
- Rank 5 early-season shrinkage: 80 pass attempts and 40 carries of pull toward the 2025 prior. Wired.
- Rank 6 pressure/win-rate matchup: qb_hit per dropback (not charted pressure); 2025 walk-forward r = 0.241 on 250 games; enters the trench family. Wired.
- Rank 7 special-teams EPA: measured, walk-forward r = −0.065 → left out, not sign-flipped.
- Rank 9 fourth-down aggressiveness coaching prior: measured, walk-forward r = −0.014 on 255 games; rate stored, does not move the tilt.
- Rank 10 CPOE: 15% of efficiency blend, shrunk toward zero. Wired.
- Market price withheld; Brier, Kelly, Bradley-Terry kept as meters. Efficiency change feeds `on_field_efficiency` in the week-3 engine reading.

## Data sources named
The NFL Analytics Reverse-Engineering file (2026-09-26, license rules stand), nflverse (legal base). Grades, chart images, scraped leaderboards explicitly not republished.

## Findings (numbers and facts, not vibes)
- Wired for week 3 (8 of 12): opponent-adjusted efficiency, turnover regression (INT only), pass/rush split (55%/15%), explosive-play differential (20+ yd pass plays, 10%), early-season shrinkage (80 pass attempts / 40 carries pull to 2025 prior), pressure matchup via qb_hit per dropback (walk-forward r=0.241 on 250 games, enters trench family), CPOE (15%, shrunk toward zero), rest (already in schedule family).
- Measured and left out: special-teams EPA (r=−0.065, not sign-flipped), fourth-down aggressiveness coaching prior (r=−0.014 on 255 games — stored but does not move the tilt), wind/temperature for totals (roof only), travel and altitude (file calls effect near zero), PFF grades/SIS (paid, not licensed for redistribution).
- Fumble luck not yet separated from turnover regression.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME)
- qb_hit-per-dropback pressure matchup at walk-forward r=0.241 (250 games) — strongest measured pass-rush signal, wired into trench family. (OL)
- Fourth-down aggressiveness coaching prior r=−0.014 on 255 games — coaching decisions add no predictive tilt. (COACHING)
- CPOE at 15% of efficiency blend, shrunk toward zero. (QB-BEHAVIOR)
- Explosive plays defined as pass plays of 20+ yards over attempts, 10% of blend. (SCHEME)
- Special-teams EPA r=−0.065 deliberately not sign-flipped — honesty over signal-hunting. (TRUST-SIGNAL)

## Engine-actionable? (yes/no + one-line what)
Yes — eight wired upgrades form the week-3 `on_field_efficiency` reading; remaining gaps: fumble-luck separation, wind/temperature for totals, travel/altitude.
