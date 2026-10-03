# props/research/2026-09-24/td-props-usage-prompts.md
## What it is (1-2 sentences)
Six of eight @thelocktalk anytime-TD usage-analysis prompts (recovered verbatim from Instagram posts 2026-09-24/25; 2 still gated behind ManyChat phone buttons), plus wiring rules for feeding their verdicts into GSE's anytime-TD probability model.
## Key metrics/methods (formulas where given, else "not specified")
The six analysts: (1) THE GOAL LINE — who gets the ball inside the 5 (verdict: real goal line role / shared / not the guy); (2) THE RED ZONE — player's real share inside the 20 vs general workload (verdict: real scoring role / situational only / volume without finishing work); (3) THE SCRIPT READ — likely game flow effect on scoring chances (verdict: script helps / hurts / neutral); (4) THE LONG SCORE — goal line scorer vs distance scorer (verdict: goal line / distance / both); (5) THE SOFT SPOT — which position the defense gives up TDs to (verdict: target for his position / neutral / bad matchup); (6) THE QB VULTURE — QB sneak/designed-run cannibalization of short TDs (verdict: QB is a real threat / minor factor / not an issue).
Standing rules: never guarantee a result; follow the usage, not the name; judge the situation, not just the talent; a lead is not a signal until the data supports it.
## Data sources named
@thelocktalk Instagram posts (instagram.com/p/Db8uyZTlW83/, instagram.com/p/DcykhfnFfq3/); evidence-first-intelligence-spine.md (referenced, not in file list).
## Findings (numbers and facts, not vibes)
- 6 of 8 prompts recovered verbatim; 2 remain gated (ManyChat buttons don't render in IG web; requires phone tap by owner).
- Calibration gate: Brier is RED (0.2478 vs ≤0.22 floor) — prompts can enter shadow mode immediately; they cannot drive published probabilities until S4 gates pass.
- Wiring constraints: red-zone/goal-line shares must be computed point-in-time (prior games only, no peeking); compare usage-derived probability against the anytime-TD market price — edge only when the usage model disagrees with the market AND walk-forward tests support it.
- Every TD recommendation needs an evidence card: what usage, when known, from where, how fresh, what the market priced, whether the signal improved OOS decisions.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: THE QB VULTURE — QB sneak/designed-run TD cannibalization of skill players.
- SCHEME: THE SCRIPT READ — game script (lead/close/trailing) effect on scoring role; THE LONG SCORE — distance vs goal-line scoring repeatability ("a player who only scores from distance needs a broken play, not a play call").
- TRUST-SIGNAL: usage-not-name doctrine; point-in-time computation; market-baseline comparison; evidence card requirement.
- COACHING: red zone play calling (QB sneak usage removes goal line carries from backs entirely).
## Engine-actionable? (yes/no + one-line what)
Yes — the six usage verdicts plug directly into anytime-TD probability construction once the Brier gate clears (shadow mode now), with point-in-time share computation as the required implementation.
