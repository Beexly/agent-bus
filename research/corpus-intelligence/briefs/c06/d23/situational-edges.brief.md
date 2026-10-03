# reasoning/situational-edges.md
## What it is (1-2 sentences)
A walk-forward (earlier-weeks-only) 2025 regular-season test of three situational signals against home-team wins, with an entry rule (|r| > 0.03 in the useful direction) that decides which signals enter the game "tilt"; only the pressure matchup qualifies.
## Key metrics/methods (formulas where given, else "not specified")
- Method: walk-forward — a team enters a game with only earlier weeks; correlation is Pearson r with the home team winning.
- Entry rule: a signal is allowed into the tilt only if r is above 0.03 in the direction that makes the signal useful. Otherwise the number is kept on the row and the family stays dark.
- Pressure matchup: home pressure created minus pressure allowed, minus the same net for the away team, where pressure = qb_hits / dropbacks. Games=250, r=0.24135296163107084 → enters the tilt (yes).
- Fourth-down go rate: (passes + runs) / (passes + runs + punts + field goals) on fourth down. Games=255, r=-0.01363209458605604 → does NOT enter (no).
- Special-teams EPA: mean EPA on the posteam's kickoffs, punts, field goals, and extra points. Games=256, r=-0.0647853105170034 → does NOT enter (no).
- Deliberate design notes: special-teams EPA "correlated the wrong way and was not sign-flipped"; fourth-down go rate is recorded but "is not treated as 'more aggressive is better.'"
## Data sources named
- 2025 regular season game data (walk-forward), via play-by-play (EPA source implied; qb_hits, dropbacks, punts, field goals, extra points). No named external feed beyond the season frame.
## Findings (numbers and facts, not vibes)
- Only one of three signals qualifies: pressure matchup r=+0.2414 (by far the strongest, and the only one above the 0.03 entry bar).
- Fourth-down go rate r=-0.0136: effectively zero — aggressive fourth-down going does not predict home wins.
- Special-teams EPA r=-0.0648: negative — directionally wrong for a "more ST EPA is better" story; deliberately not sign-flipped into the model.
- Sample sizes: 250–256 games, consistent full-season scale.
- Precision of reported r values is full float (e.g., 0.24135296163107084), indicating raw computed output pasted into the doc.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Pressure matchup live (r=+0.2414, highest situational r in the doc): OL, QB-BEHAVIOR (INFERENCE: home pass-rush edge vs. QB under pressure)
- Fourth-down go rate dark (-0.0136): COACHING (INFERENCE: coaching aggressiveness measured and found non-predictive; explicitly not glorified)
- Special-teams EPA dark (-0.0648): TRUST-SIGNAL (INFERENCE: model discipline — a wrong-way correlation is kept dark rather than flipped)
- Entry rule (r>0.03 in the useful direction) and "families stay dark" design: TRUST-SIGNAL (INFERENCE: anti-overfit gating culture)
## Engine-actionable? (yes/no + one-line what)
Yes — pressure matchup (home-minus-away net qb_hits/dropbacks) is the only situational signal that enters the tilt; fourth-down go rate and ST EPA are recorded but held dark.
