# docs/reasoning/week3-signal-ledger.md
## What it is (1-2 sentences)
The week-3 engine signal ledger: per-team injury adjustments for charted skill players (2269 signals total, 141-160 per game, median game total 43.5) and the full 30-team offensive-line practice-status multiplier table, with the OL fit derived from 2024-2025 data.
## Key metrics/methods (formulas where given, else "not specified")
- Total: posted number on the game file; no player prop price present, so agreement = opportunity + total + team edge. "A book prop is not invented."
- Injury rule: a starting tackle who is OUT, or who did not practice, lowers the skill players. A questionable tag with a full practice does not.
- OL multiplier (2024-2025 fit, "not a 4 percent guess"): starting tackle OUT = -11.3% (multiplier 0.887); did not practice = -7.5% (0.925); limited = -5.0% (0.950); full practice = no change; backup guard not in the fit.
- Week 3 applications: BAL 0.887 (tackle out), KC 0.887 (tackle out), MIN 0.925 (tackle did not practice), NE 0.950 (tackle limited), NYG 0.950 (tackle limited); all other 25 teams 1.000.
- Injury table (team | out player | status | next-up | work | applied | run rate | total | team edge | lineup): e.g., HOU/Nico Collins OUT → Xavier Hutchinson, work 7.49 applied 3.00; SF/Demarcus Robinson OUT → Deebo Samuel, work 2.88 applied 2.88, lineup True; DEN/Jonah Coleman OUT → J.K. Dobbins, work 2.89 applied 2.89, lineup True; LA/Puka Nacua DOUBTFUL → Davante Adams, work 3.44 applied 1.37; MIA/Jaylen Wright DOUBTFUL → De'Von Achane, work 0.25 applied 0.10; others listed similarly (Rico Dowdle, Caleb Douglas, Brenen Thompson, Barion Brown).
- INFERENCE: "applied" appears to be a fraction of "work" reflecting injury-status weighting (e.g., OUT players get larger applied fractions than DOUBTFUL ones), but the exact applied/work rule is not specified in the file.
## Data sources named
Game files with posted totals (source not named), 2024-2025 fit for the OL multiplier; no external data sources named.
## Findings (numbers and facts, not vibes)
- 2269 signals this week; per game 141 to 160; median game total on the slate 43.5.
- Only 2 of the 9 listed injury rows are "lineup True": SF (Robinson→Samuel) and DEN (Coleman→Dobbins).
- Team edges listed per row (e.g., MIA -0.157 on both rows, LAC -0.308, SF +0.100, NO +0.077).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Empirically fitted OL multipliers (-11.3% / -7.5% / -5.0%) by tackle practice status — OL (replace heuristic guesses with the fitted values).
- "A questionable tag with a full practice does not" lower skill players; practice-status > status-tag — TRUST-SIGNAL (practice participation is the honest signal, not the label).
- 2269 charted-player signals/week and the no-invented-props rule — TRUST-SIGNAL (volume metric + honesty constraint: never invent a book prop).
## Engine-actionable? (yes/no + one-line what)
Yes — the fitted OL multipliers (0.887 / 0.925 / 0.950) and the practice-status-over-tag rule are directly usable as wired adjustment values in any OL/trench adjustment layer.
