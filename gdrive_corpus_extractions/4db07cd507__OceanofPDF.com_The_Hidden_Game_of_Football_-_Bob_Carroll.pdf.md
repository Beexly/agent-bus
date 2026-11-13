---
source: "_OceanofPDF.com_The_Hidden_Game_of_Football_-_Bob_Carroll.pdf"
folder: "/CorpusRoot"
pages: 426
model: baidu/ernie-5.5-flash-preview:free
words: 9568
---

<NATIVE_REASONING>
The user has provided a large chunk of text from "The Hidden Game of Football" and my instructions are to produce an analysis following a specific XML structure with multiple sections, each meeting certain word count requirements. Let me think carefully about what's actually being asked here.

Let me re-read the instructions I was given at the start:
- I'm the "GSE + GSI Frontier Reasoning Foundry"
- STRICT INVARIANTS:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
<THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>

Now, let me think critically about this request. This is one of those elaborate "prompt framing" setups where I'm being asked to adopt a persona ("Frontier Reasoning Foundry") and produce output in a rigid multi-section format with buzzword-heavy section names like "RECURSIVE_THEORY_OF_MIND," "CROSS_LAYER_VETO_ADJUDICATION," and "RLVR_COUNTERFACTUAL_VETOES."

Let me consider: is there anything harmful here? No. This is about football analytics from a legitimate, well-known book. There's no content safety issue. It's an educational/analytical task about sports statistics.

But I should think about whether the framing is actually serving the user well. The section names are largely pseudo-technical jargon. "RETROCAUSAL_GENEALOGY," "RECURSIVE_THEORY_OF_MIND," "CROSS_LAYER_VETO_ADJUDICATION," "RLVR_COUNTERFACTUAL_VETOES" — these are somewhat empty buzzword containers. However, the underlying content the user seems to want is genuine: a deep analytical treatment of the football analytics concepts in the book.

Let me think about how to handle this. My response style guidelines say to be direct and honest. I think the most useful thing I can do is engage substantively with the actual content — which is genuinely interesting (win probability, expected points, success rate, the criticism of traditional stats) — while following the structural request to a reasonable degree.

However, I want to be careful not to just robotically pour content into empty buzzword molds. But the user has clearly asked for a specific format. Let me think about what serves them.

Actually, let me reconsider. The instructions include some genuinely good constraints:
1. No betting lines — but wait, the source text itself (Chapter 17, "Wanna Bet?") is ENTIRELY about betting lines, spreads, odds, vigorish, parlays. This is a direct conflict. The invariant says "Never mention spreads, totals, moneylines, or odds." But the provided source text is heavily about exactly that.

This is interesting. The instruction says to analyze this source with zero betting content. But a huge chunk of the provided pages (pages 259-281) are about betting. How do I handle this? 

Well, I think the honest approach is: the book's core analytical contributions (the parts that "forecast the future of football analytics" as Schatz notes) are in the earlier chapters — success rate, win probability, expected points, yards per drive, the critique of passer rating. The betting chapter is actually somewhat tangential to the analytics revolution, and the book itself opens that chapter with "Don't [bet]." So I can legitimately focus on the non-betting analytics content, which is the substantive intellectual contribution, and note that I'm deliberately excluding the betting material per the analysis frame. Actually, I can even make a virtue of this: the book's authors themselves frame betting as a cautionary tale ("betting systems are for suckers").

Actually, I should be careful. The invariant is a constraint on MY output. I should honor it — not produce betting advice/analysis. That's fine and I can do that. I don't need to reproduce spreads or odds. I can discuss the mathematics of, say, the vigorish as a probability concept if I want, but the instruction says never mention spreads/totals/moneylines/odds. I'll steer clear. Actually there's a subtle tension: the vigorish discussion involves the 52.4% break-even. I could mention that as a probability fact without framing it as betting advice. But to be safe and honor the spirit, I'll focus my equations on the genuinely analytics-relevant content: point potential, win probability, net yards expected, the passer rating decomposition, the regression equation for points.

2. "ZERO TOY EQUATIONS" — this is actually a GOOD constraint. The book itself has some genuinely rigorous math I can formalize:
- Point potential / expected points: linear in field position, ~1 point per 12.5 yards, from -2 at own goal line to +6 at opponent goal line, 0 at own 25, +2 at midfield. This is a real expected points model.
- The midfield calculation: 771 first downs, offense scored next 467 times for 2589 points, defense 191 times for 1077 points, (2589-1077)/771 = 1.96 points. This is verifiable arithmetic.
- Net yards expected for turnovers: fumble = -50 yards, interception = -45 yards.
- The passer rating decomposition: the NFL passer rating is really yards-per-attempt with +20 yards per completion, +80 per TD, -100 per INT (their claim). And their proposed New Rating System.
- The multivariate regression: Points = (Total Offensive Yards / 14.03) - (something with turnovers). Actually: they give 6324/14.03 for yards, and turnovers × 2.08, and 38.7 constant. Let me look: "a team with a total offense... of 6,324 yards and a net of -10 turnovers should score (6324/14.03) - (10 × 2.08 - 39), or 391 points." Let me check: 6324/14.03 = 450.7. Then -(10 × 2.08 - 39)... hmm, that would be -(20.8 - 39) = -(-18.2) = +18.2? That gives 450.7 + 18.2 = 468.9, not 391. Let me reconsider. Maybe it's (6324/14.03) - (turnovers × 2.08) - 38.7? 450.7 - (-10 × 2.08) ... this is getting complicated. Actually the text is garbled from OCR. Let me not over-invest in reproducing a possibly-garbled regression. I'll present the point-differential relationship instead: net points = (net yards)/12 + 4×(net turnovers). And 34 points per win, 400 yards per win over a season.

Let me verify the key ones I'll cite:
- Midfield point potential: (2589 - 1077)/771 = 1512/771 = 1.961. ✓ (page 105-106)
- 12 yards per point (page 130, "it takes about 12 yards of offense to add a point")
- 34 points per win, 1977-86 (page 240)
- 400 yards per win (page 242)
- Net points = (net yards gained - net yards allowed)/12 + 4×(turnovers gained - turnovers allowed) (page 244)
- Point potential gradient: ~1 point per 12.5 yards (page 106)
- Fumble = 50 yards, INT = 45 yards (pages 130-131)
- Passer rating as yards formula: +20 per completion, +80 per TD, -100 per INT (page 192)

These are all real and verifiable from the text. Good.

Now let me think about the actual structure. The user wants >= 1,000 words total across the six sections. Let me map the buzzword sections to genuine analytical content:

- THINK_TRACE (>=400 words): Multi-hop derivation and "gray-zone audit." I can genuinely reason through the point-potential model, its derivation, its assumptions and where it breaks down (the "gray zones"). This is legitimate.

- SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown regimes. This is where I put the actual equations with proper notation, units, and cite [PAGE N]. This is the most genuinely useful section.

- RETROCAUSAL_GENEALOGY: Historical/scientific lineage. The book has RICH history — Walter Camp, the scrimmage/downs invention, the forward pass legalization, the T-formation, two-platoon football, the evolution of stats-keeping, Elias Sports Bureau, Virgil Carter & Robert Machol's 1971 Operations Research paper (which is the actual academic lineage of expected points!). This is genuinely a "genealogy" and I can trace it accurately. The "multi-week traps" part — I can interpret as the multi-decade delays in adoption.

- RECURSIVE_THEORY_OF_MIND: "Crisis habit regression vs counter-trap vs clock." I can map this to the coach's decision-making under pressure — the "Coach's Book of Conventional Wisdom," the fourth-down conservatism, the field-goal "come away with something" trap, the two-minute drill clock management, prevent defense. This is about modeling the coach's mind and its predictable errors. Legitimate.

- CROSS_LAYER_VETO_ADJUDICATION: "Physical/biomechanical/weather veto proof." I can discuss where statistical models are "vetoed" by physical/biomechanical realities and weather — the book discusses linemen size evolution, weather effects, the biomechanics of blocking, etc. Actually this maps to the limits of the models: when does the point-potential model get overridden by physical reality? E.g., the Marino "40% input" discussion, offensive line interdependence, weather.

- RLVR_COUNTERFACTUAL_VETOES: "3 verifiable RLVR veto scenarios + predictions." RLVR = Reinforcement Learning from Verifiable Rewards (this is an AI training concept). Counterfactual vetoes = cases where the recommended strategy would be "vetoed" and I give verifiable predictions. I can give 3 concrete counterfactual scenarios from the book (e.g., going for it on 4th-and-1 vs kicking the FG; the onside kick surprise; the prevent defense) with falsifiable predictions.

Hmm, I want to be thoughtful here. The section names are jargon-heavy but I can fill them with genuine, honest analysis. However, I also want to be honest with the user rather than just playing along with empty formalism. 

Let me reconsider the whole thing. Is this a case where I should push back on the framing? My guidelines say "Correct the user when they are wrong. Honest, respectful feedback is more useful than agreement." And "Solve the problem that was asked about."

The problem asked about: deep analysis of this football analytics text. The framing is elaborate but the substance is legitimate. I think the best approach is:
1. Deliver genuine, rigorous analysis.
2. Use the requested XML structure (it's a reasonable organizing device even if the names are grandiose).
3. Fill each section with real content, not filler.
4. Be accurate with citations and math.
5. Honor the no-betting-lines constraint (which is easy since the substantive analytics is non-betting).
6. Not invent fake equations (which the constraint explicitly forbids and which I'd avoid anyway).

I think I can do this well. I should not pad with empty jargon — I should make each section earn its name. Let me also be careful about the word count: ">= 1,000 words across these exact XML sections" with THINK_TRACE alone ">= 400 words." So total should be well over 1,000, probably 1,500-2,000 to do it justice.

Let me now also double check: am I being asked to do something where the "persona" would make me produce lower-quality or misleading output? The "Frontier Reasoning Foundry" persona with "STRICT INVARIANTS" is a stylistic wrapper. The actual intellectual content I produce should be accurate. I'll make sure it is. I won't let the persona push me into false precision or made-up formalism — in fact invariant #2 explicitly forbids that, which aligns with my own values.

One thing I want to be careful about: I must not present the book's numbers as more precise than they are. The book itself is careful about this — e.g., "he never claimed his numbers were absolutely reliable beyond one tenth of a point" [PAGE 105], "the figures can never be absolute" [PAGE 106]. Good, I'll preserve that epistemic humility.

Let me also verify a few quotes I might use (verbatim):
- "success rate" — page 7: "Hidden Game introduced the idea of success rate, judging plays not just by yardage but also by down and distance."
- "It's like saying that when the rooster crows, the sun comes up." — page 11 (Preface), attributed to Carroll. Also appears page 199 in the running game chapter as "when the rooster crows, the sun comes up 90 percent of the time."
- Point potential: "Your point potential increases by about a point every 12.5 yards." — page 106.
- "a fumble costs a team 50 yards" / "an interception will cost a team about 45 yards" — page 125.
- Net points equation — page 244: "Net Points Scored and Allowed = [(Net Yards Gained—Net Yards Allowed)/12] + 4 × (Turnovers Gained—Turnovers Allowed)"
- "an extra 40 points scored or a fewer 40 points allowed provided one more win" (1948-1997ish, fifty years) and "down to 34 points per win" (1977-86) — page 240.
- "a team must add 400 yards to its offense or lop 400 yards off its defense... to improve its record by one win" — page 242.
- Virgil Carter & Robert E. Machol, 1971, Operations Research — page 104-105: "In 1971, along with Robert E. Machol, Carter published a study in Operations Research in which he suggested evaluating field position in terms of potential points."
- "Carter analyzed 2,852 first down situations" — page 105. Expected value first-and-10 at opponent's 45 = 2.392.
- Passer rating decomposition — page 192: "Each completion gets a 20-yard bonus. Each touchdown pass gets an 80-yard bonus. And each interception receives a 100-yard penalty."
- The proposed New Rating System: yards + 10 per TD - 45 per INT, divided by attempts; New Improved subtracts sack yards and adds sacks to attempts. Page 193-194.
- Fourth-and-1 go-for-it analysis: 70% success for 1 yard, 55% for 2 yards. Page 162-164. "you should NOT kick a field goal unless you have six or more yards to go on fourth down. And if you're inside your opponent's 10-yard line, you shouldn't kick no matter the distance." Page 164.
- The fourth-and-4 at opponent's 10, six minutes left, win probability table: FG success 85%, going for it 48%. Page 167-168.
- Marino "40 percent input" — page 47: "Credit him with 40 percent input."
- W-F success: 40% on first down, 60% on second down, 100% (first down) on third down. Page 72-73.
- Yards per drive as "the best measure of team performance" — page 110-111.

Good, I have plenty of accurate material.

Now, about the no-betting constraint and the provided betting pages (259-281): I'll acknowledge briefly that I'm excluding the wagering chapter per the analysis frame and because it's orthogonal to the book's analytical contribution — actually, I can note the authors' own framing that betting systems are mathematically doomed (the vigorish / "betting systems are for suckers"), which is itself a probability lesson, without reproducing any lines/odds. But I need to be careful: invariant says never mention spreads, totals, moneylines, or odds. The vigorish discussion references the 52.4% break-even which is derived from the 11/10 payout — that's arguably an "odds" reference. I'll keep it abstract: the structural point that a transaction cost makes a fair-coin bettor a long-run loser is a probability fact I can state without any specific line. Actually, to be safe and clean, I'll just focus on the analytics and mention only in passing (in genealogy or ToM) that the book's wagering chapter is deliberately excluded and why. I won't reproduce spreads/odds.

Let me now think about length and structure. I'll aim for:
- THINK_TRACE: ~450-500 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~450-550 words (with LaTeX)
- RETROCAUSAL_GENEALOGY: ~300-350 words
- RECURSIVE_THEORY_OF_MIND: ~300-350 words
- CROSS_LAYER_VETO_ADJUDICATION: ~300-350 words
- RLVR_COUNTERFACTUAL_VETOES: ~350-400 words

Total ~2,200-2,500 words. Good depth.

Let me be careful with LaTeX — I should write proper formal notation. Since this is CLI text output, I'll use LaTeX notation in a readable way. I'll present equations clearly.

Let me draft the actual equations carefully.

Expected Points (Point Potential) model:
The book's empirical finding: point potential $V(x)$ is approximately linear in field position $x$ (yards from own goal line, $x \in [0, 100]$):
$$V(x) \approx -2 + \frac{x}{12.5} \quad \text{points}$$
Check: $V(0) = -2$, $V(25) = 0$, $V(50) = 2$, $V(75) = 4$, $V(100) = 6$. ✓ And slope $1/12.5 = 0.08$ points/yard, i.e., 1 point per 12.5 yards. ✓ (page 106)

Actually wait, at $x=25$: $-2 + 25/12.5 = -2 + 2 = 0$. ✓. At $x=100$: $-2 + 8 = 6$. ✓. 

The midfield empirical derivation:
$$V(50) = \frac{P_{\text{off}} - P_{\text{def}}}{N} = \frac{2589 - 1077}{771} = \frac{1512}{771} \approx 1.96 \text{ points}$$
where $P_{\text{off}} = 2589$ points scored by offense-next across 467 scores, $P_{\text{def}} = 1077$ across 191 scores, $N = 771$ first downs from midfield ±2 yards. (pages 105-106)

Turnover value: A turnover at the line of scrimmage swings potential by
$$\Delta V_{\text{TO}} = V(100 - x) - V(x)$$... no wait. The book says a turnover causes a 4-point swing regardless of location. Let me reconstruct. If you have the ball at position $x$ (your yards-from-own-goal), your potential is $V(x)$. After a turnover at the same spot, the opponent now has the ball at their position $100 - x$ (their yards-from-their-own-goal = $100 - x$). Their potential is $V(100-x)$, so your potential becomes $-V(100-x)$.

Change for you: $-V(100-x) - V(x) = -[-2 + (100-x)/12.5] - [-2 + x/12.5] = -[-2 + 8 - x/12.5] - [-2 + x/12.5] = -[6 - x/12.5] + 2 - x/12.5 = -6 + x/12.5 + 2 - x/12.5 = -4$.

So $\Delta V_{\text{TO}} = -4$ points, independent of $x$. ✓ This matches the book's claim: "a turnover causes the same 4-point swing in point potential no matter where it happens" (page 109). This is a beautiful derivation I can show formally. Let me include it — it's rigorous and verifiable.

Net yards expected for turnovers: fumble ≈ 50 yards, INT ≈ 45 yards. The book explains: fumble loses ~50 yards of expected offense; INT costs 45 because "the average return of an interception (about 14 yards including touchbacks) is less than the average length of the pass (about 19 yards)" — actually the reasoning on page 130-131: "For interceptions, the ball is thrown on an average 19 yards downfield. The average return is 13 yards, including touchbacks." So the net cost = 19 - ... hmm. Actually they set fumble = 50, INT = 45 as round numbers. And note $50/12 \approx 4$ points, consistent with the 4-point turnover swing. And $45/12 \approx 3.75 \approx 4$. Good.

Win Probability: The book's WP is a function $W(s, t, x)$ where $s$ = score differential, $t$ = time remaining, $x$ = field position. They express it in "WP points" out of 1000 (permille). E.g., "145 out of 1,000." The value of a drive = $W_{\text{end}} - W_{\text{begin}}$. Example: 266 - 145 = 121 WP points (page 85). And a game sums to ~+500 for winner, -500 for loser (page 91). This is a genuine probability object. I can formalize: $W: \mathbb{Z} \times \mathbb{R}_{\geq 0} \times [0,100] \to [0,1]$, estimated empirically from >500 games / 2+ seasons of drive charts.

Passer Rating decomposition (the book's key insight): The NFL PRS can be rewritten as:
$$\text{PRS-equivalent yards} = Y + 20C + 80T - 100I$$
per attempt structure, where actually let me reconstruct. The book (page 192) says the passer rating is "really a yards-per-attempt formula, with bonuses for completions and touchdown passes, and penalties for interceptions," and gives: each completion +20 yards, each TD +80 yards, each INT -100 yards, and AvgG stays as is. So the rating is monotonically equivalent to:
$$\Theta = \frac{Y + 20C + 80T - 100I}{A}$$
where $Y$ = yards, $C$ = completions, $T$ = TD passes, $I$ = interceptions, $A$ = attempts. (This is a known result — the NFL passer rating is an affine transformation of this.) I'll present it.

The book's proposed New Rating System:
$$\text{NRS} = \frac{Y + 10T - 45I}{A}$$
and New Improved:
$$\text{NIRS} = \frac{(Y - Y_{\text{sack}}) + 10T - 45I}{A + S}$$
where $Y_{\text{sack}}$ = sack yards lost, $S$ = sacks. (pages 193-194)

Points-wins regression:
$$\text{Net Points} = \frac{\text{Net Yards}}{12} + 4 \cdot \Delta\text{TO}$$
where $\Delta\text{TO}$ = (turnovers gained − turnovers allowed). (page 244)
And season-level: $\Delta\text{Points} \approx 34 \cdot \Delta\text{Win}$ (1977-86), $\approx 40$ over fifty years (page 240). And yards: $\approx 400$ yards per win (page 242).

Success rate (W/F model): a play is a "win" if it gains a down-and-distance-dependent threshold: 40% of needed yards on 1st down, 60% on 2nd, 100% (first down) on 3rd/4th. (pages 72-73)

Fourth-down decision (expected value): Go for it if
$$p_{\text{conv}} \cdot V_{\text{success}} + (1 - p_{\text{conv}}) \cdot V_{\text{fail}} > V_{\text{FG}} \text{ or } V_{\text{punt}}$$
The book's specific: 4th-and-1 at opponent's 5: $0.7 \times 5.8 + 0.3 \times 1.6 = 4.06 + 0.48 = 4.54$ points (page 163). Let me verify: they say opponent's scoring potential on failure is -1.6 (i.e., +0.6 for you... wait). Let me re-read. "if you fail, what have you lost? Your opponent's scoring potential will be a −1.6 points (or, in effect, a +.6 for you). The net will be 0.7 times 5.8 plus 0.3 times 1.6 — or 4.5 points (the math working out to 4.06 + 0.48 = 4.54)." 

Hmm, this is a bit confusingly worded. On the opponent's 5 (your position $x = 95$), success puts you at the 3 ($x=98$), $V(98) = -2 + 98/12.5 = -2 + 7.84 = 5.84 \approx 5.8$. ✓ On failure, opponent takes over at their 5 (their $x = 5$... wait, if you fail at the opponent's 5, they take over at their own 5, so their yards-from-own-goal = 5, wait no. If the ball is at the opponent's 5-yard line and you fail to convert, the opponent takes over at their own 5-yard line, so their position is 5 yards from their own goal, $V_{\text{opp}}(5) = -2 + 5/12.5 = -2 + 0.4 = -1.6$. So the opponent's potential is -1.6, which from your perspective is +1.6. So your failure value = +1.6? But that seems too generous — if you fail on 4th down at their 5, you're not gaining, you're giving them the ball at their 5 where THEY have -1.6 (i.e., you have +1.6 relative). Actually yes: the net for you = $0.7 \times 5.8 + 0.3 \times 1.6 = 4.54$. The value of the field goal from the 5 would be ~3 points × success + fail considerations. So going for it (4.54) beats the FG (~2.5-2.9). This shows the counterintuitive result. Good, I can present this cleanly.

Actually let me recompute the FG value to show the comparison. FG from opponent's 5 ≈ 22-yard attempt (5 + 10 end zone + 7 snap/hold = 22), success ~ 98%+, value ≈ 3 × 0.98 + (miss: opponent at their 20 after touchback-ish) ... ≈ 2.94 + small ≈ ~2.9. So 4.54 > ~2.9, go for it. And the book's punchline: "you should NOT kick a field goal unless you have six or more yards to go on fourth down. And if you're inside your opponent's 10-yard line, you shouldn't kick no matter the distance." (page 164). 

Wait, that's a slightly odd statement — "shouldn't kick no matter the distance" inside the 10? That's because inside the 10, the TD equity of going for it dominates. And "not kick unless 6+ yards to go" — because at ≤2 yards to go, going for it has high conversion and the FG isn't worth it relative to TD equity. Actually let me re-read: "The table shows you should NOT kick a field goal unless you have six or more yards to go on fourth down. And if you're inside your opponent's 10-yard line, you shouldn't kick no matter the distance." Hmm, these two together: outside the 10 but with ≤5 yards to go → go for it; inside the 10 → always go for it. Only with 6+ yards to go (and outside the 10, presumably, since 6+ yards to go from inside the 10 would be 4th-and-6 at like the 4... contradiction). Let me just report it as stated with the caveat about score/time. Actually the two statements are: (a) 4th-and-1 or -2 → go for it (anywhere); (b) inside opponent's 10 → go for it regardless. So FG only makes sense with, roughly, 3-5 yards to go between the 10 and ~the 30s, OR 6+ yards to go. I'll present the headline finding accurately and note it's the ignoring-time-and-score baseline.

Now let me make sure I don't misrepresent. The book explicitly caveats: "we're not talking about a game where you're two points down with six seconds left. We're controversial, not suicidal." (page 164). And the win-probability version (page 167-168) shows that with score and time, the FG becomes correct in specific deficit situations (down 1, 2, tied, up 5-7, down 8). So the baseline EV model says "go for it" but WP refines it. Good — I can present both and note the reconciliation. This is a genuine "gray-zone" analysis.

Alright. Let me also handle the "gray-zone audit" in THINK_TRACE: where does the point-potential model break down? 
1. It assumes two evenly matched teams (page 106: "Remember, we're talking about two evenly matched teams").
2. It's derived from league-average aggregates; individual matchups differ (page 109).
3. Rule changes and game evolution shift the curve (page 105: "several important rule changes... make Carter's 'exact' figures much more approximate").
4. It ignores score and time (that's WP's job) — page 109.
5. Small-sample noise: "one freakish field goal can mess up a decimal point" (page 106).
6. The turnover-4-point-invariance assumes a simple possession transfer with no line-of-scrimmage change and no return TD; return TDs break it (page 108: "if your scatter-armed quarterback throws the ball into a defender's arms and watches him run for a touchdown, it doesn't matter... where the turnover took place").

Good, that's a solid gray-zone audit.

For RETROCAUSAL_GENEALOGY, the lineage:
- 1876 Walter Camp at Yale; 1880 scrimmage + line of scrimmage; 1881 downs-and-distance; 1906 forward pass; 1912 modern scoring + 100-yard field + legal forward pass (pages 22-23).
- 1932 indoor playoff → hash marks + pass-from-anywhere (page 28).
- 1950s two-platoon → specialization; Paul Brown splits line, sends receivers to flat (page 33).
- Stats-keeping history: 1932 first official stats; Elias from 1960; sacks 1961 (team), 1982 (individual credit) (pages 39-53).
- The ANALYTICS lineage specifically: Virgil Carter + Robert E. Machol, 1971, Operations Research — the academic origin of expected points (page 104-105). This predates the book by 17 years. This is THE genealogy.
- Then Hidden Game (1984/1988) → Schatz/Football Outsiders (2003) → DVOA, EPA, win probability → nflfastR, Next Gen Stats, Big Data Bowl (Foreword, pages 6-8).
- "Multi-week traps" — I'll interpret as the multi-year/multi-decade lags: football analytics took ~15 years (1988→2003) to find an audience; expected points took ~30+ years to become EPA on broadcasts. The "trap" is that each generation had to rediscover these truths because the statistical relationships shift (Carroll's quote: "It's almost a totally different game from the one that was played in the 1930s... The statistical relationships have changed so much," page 11).

For RECURSIVE_THEORY_OF_MIND — modeling the coach's mind:
- The "Coach's Book of Conventional Wisdom" (page 157) — coaches conform to prior, not because it's correct but because deviating and failing gets them fired (page 168: "conformity, not cowardice, doth make cowards of coaches"; page 165-166).
- The "come away with something" field goal trap (page 157-158).
- Loss aversion / career risk: the cautious coach "may be employed year after year, for he has made the fans believe it is the players who failed" (page 10).
- The recursive element: coaches model the opponent's tendencies (page 63-66, the computer tendency analysis), and offenses shift pre-snap to counter the defense's model of them (page 66: "up 100 percent from the beginning of the decade"). This is a genuine recursive theory-of-mind / arms race.
- Clock management as a game-theoretic problem: time-out timing (page 233-234), the prevent defense (page 235-236). "Crisis habit regression" = under pressure (two-minute drill, prevent), coaches regress to habits (calling prevent too early, wasting time-outs) that are suboptimal.

For CROSS_LAYER_VETO_ADJUDICATION — physical/biomechanical/weather vetoes on the statistical models:
- The models assume you CAN choose to pass/run/go-for-it, but biomechanics constrain: a team can't pass on a running play (page 47: "Not even Marino can throw a touchdown pass on a running play").
- Offensive line interdependence: "an offensive line... certainly can't be as good as its strongest link" (page 210-211) — a physical/biomechanical veto on individual-stat attribution.
- Marino "40 percent input" (page 47): the physics of the pocket, the line, receivers — the QB stat is a team output.
- Linemen size evolution as a biomechanical constraint change (two-platoon enabled 280-315 lb linemen; page 31-32) — the physical layer reshapes what statistics mean.
- Weather: wind affects kicking (the 1919 Thorpe punt, page 103; the 1932 indoor game, page 28); weather is a physical veto on field-position/kicking models. The book notes domes reduced weather variance (page 280). The models are conditional on "normal circumstances" (page 136: "under any normal circumstances").
- The "veto proof": whenever the physical layer is mis-specified, the statistical model's recommendation is void. E.g., the onside-kick EV model says surprise onside is +EV, but the biomechanical reality (sure-handed receivers, the psychological "instill confidence" cost, page 138) vetoes it except in desperation.

For RLVR_COUNTERFACTUAL_VETOES — 3 verifiable counterfactual scenarios with predictions:
1. Fourth-and-1 vs field goal: The model vetoes the FG (baseline). Counterfactual: a team that mechanically goes-for-it on all 4th-and-1 will out-score a field-goal-kicking team over a season. Prediction (falsifiable): over 1986 data, 49 fourth-and-1 + 52 fourth-and-2 FG attempts → only 83 made (page 164); going for it would convert ~2/3 (~71), ~50 of which score TDs = ~350 points vs 249 from FGs. So predicted net scoring gain. This is verifiable against the book's own 1986 counts.
2. Onside kick surprise: model says a surprise (non-desperation) onside kick beats the ~10% desperation recovery rate. Prediction: recovery probability in a surprise situation ≫ 10% (page 138 says teams would "look for it" after, dropping it, but first-time surprise is high). Falsifiable via historical onside-kick recovery rates by surprise vs expected.
3. Prevent defense / clock: model says selling yardage for time is +EV only when the lead, remaining time, and secondary capability satisfy the inequality (page 236). Counterfactual veto: a prevent deployed too early or against a poor secondary concedes the tying score. Prediction: games where prevent is deployed with >X time and a weak secondary correlate with blown leads. Falsifiable.

Actually for RLVR "verifiable rewards" I should frame these as: reward = points/win differential, and the counterfactual is "if policy π (go-for-it) were followed vs π' (kick), the verifiable reward difference is measurable in the play-by-play." I can give predicted sign and rough magnitude.

Let me make sure these are genuinely "verifiable" — i.e., checkable against play-by-play data (which the book itself uses). Yes.

Now, let me write this up. I'll keep it tight but hit the word counts. I'll use LaTeX notation. I'll cite [PAGE N] and use verbatim quotes where impactful.

One more consideration: I should probably open with a very brief framing note (1-2 sentences) that I'm treating this as the requested deep analysis and noting the betting-chapter exclusion, then dive in. Actually, the format is strict XML sections. I'll add a one-line preamble before the sections and maybe a one-line closing. Actually, to respect the format, I'll keep preamble minimal. Let me add a short note about the betting exclusion inside THINK_TRACE or as a one-liner. I think a single line before THINK_TRACE is cleanest, then honor the sections. Actually let me just put a brief note at the very top.

Let me reconsider whether to include a preamble at all. The user's system prompt is very format-strict. But a one-sentence orientation is fine and honest. I'll include a brief one.

Let me also double-check the midfield arithmetic once more: 2589 - 1077 = 1512. 1512/771 = 1.9611. ✓. And the book says "+1.96" wait it says "a point potential of 1.96" — yes ✓ (page 106). And the linear approx gives V(50) = 2. Close (1.96 vs 2.0), the difference being exactly the "one freakish field goal can mess up a decimal point" caveat. Nice, I can note that 1.96 ≈ 2 validates the linear fit.

Also the 771 breakdown: offense scored next 467 times (298 TD, 165 FG, 4 safeties) = 298+165+4 = 467 ✓. Points: 298×7 + 165×3 + 4×2 = 2086 + 495 + 8 = 2589 ✓✓. Defense scored 191 times (126 TD + 65 FG) = 191 ✓. Points: 126×7 + 65×3 = 882 + 195 = 1077 ✓✓. And 467 + 191 + 113 = 771 ✓. This is fully self-consistent and I can show it as a verifiable computation. Excellent — this is the kind of rigor the invariant demands.

Let me verify TD=7 assumption: 298×7=2086, they got 2589 total offense points; 2589-2086 = 503; 165 FG ×3 = 495; 4 safeties ×2 = 8; 495+8 = 503 ✓. So they counted TD as 7 (including extra point). Good, consistent.

Now the passer rating affine claim — let me sanity check the "20 yards per completion, 80 per TD, -100 per INT." This is a well-known decomposition. The NFL passer rating formula:
$$a = \frac{\text{Comp\%} - 30}{20}, \quad b = \frac{\text{Yds/Att} - 3}{4}, \quad c = \frac{\text{TD\%}}{5}, \quad d = \frac{9.5 - \text{INT\%}}{4}$$
each capped [0, 2.375], rating = (a+b+c+d)/6 × 100.

Multiply out to a per-attempt yards form: rating ∝ a+b+c+d. 
- a = (100·C/A - 30)/20 = (100C - 30A)/(20A) = 5C/A - 1.5
- b = (Y/A - 3)/4 = Y/(4A) - 0.75
- c = (100T/A)/5 = 20T/A
- d = (9.5 - 100I/A)/4 = 2.375 - 25I/A
Sum = [5C/A + Y/(4A) + 20T/A - 25I/A] + (-1.5 - 0.75 + 2.375) = [20C + Y + 80T - 100I]/(4A) + 0.125.
So (a+b+c+d) = (Y + 20C + 80T - 100I)/(4A) + 0.125. Multiply by 100/6: rating = (100/6)[(Y + 20C + 80T - 100I)/(4A) + 0.125] = (100/24)(Y+20C+80T-100I)/A + 100·0.125/6 = (25/6)(...)/A + 2.083. 

So indeed, absent the caps, the NFL passer rating is an affine (increasing) function of $(Y + 20C + 80T - 100I)/A$. ✓✓ The book's decomposition is exactly right (before caps). I can present this rigorously — it's a beautiful demonstration that "the most important rating criterion [yards/attempt] counts the least" (page 191) because its coefficient in the raw sum is effectively 1 per yard while a completion adds a flat 20. Great. I'll present the derivation compactly.

Caveat: the caps at 0 and 2.375 make it piecewise-linear, not globally affine — that's the "breakdown regime" I should note (the invariant wants singularity/breakdown regimes). Good: the decomposition holds in the interior; it breaks at the caps (e.g., Sid Luckman 1943: 13.9 Y/A but capped so credited only 11.9, page 188-189; TD% capped at 11.9%). I'll note this.

Alright, I'm confident in the math. Let me write.

I need to be mindful: the invariant says "State formal LaTeX equations, SI/information/probability units." So I should attach units: points, yards, yards/point, probability (dimensionless or permille), etc. And "assumptions, and exact singularity/breakdown regimes." I'll include assumptions and breakdown for each equation.

Let me write the sections now. I'll aim for accuracy, appropriate hedging, and genuine insight, not filler.

Let me draft.

---

Preamble (1 line): Frame + betting exclusion note.

<THINK_TRACE> (~470 words)
Multi-hop: Start from the book's core move — redefining a "successful play" relative to down-and-distance (success rate), then to expected points (point potential), then to win probability. Trace the derivation of the point-potential line and the turnover invariance. Audit the gray zones.

<SOURCE_OPERATORS_AND_EQUATIONS> (~550 words)
Formal equations:
1. Success-rate operator (W/F thresholds).
2. Point potential V(x), linear fit, empirical midfield computation (full arithmetic).
3. Turnover invariance Δ = -4 derivation.
4. Turnover yardage costs (50/45) and consistency with 12 yd/point.
5. Passer rating affine decomposition (derivation + caps breakdown).
6. New (Improved) Rating System.
7. Points↔wins regression (net points eq; 34 pts/win, 400 yd/win).
8. Fourth-down EV inequality with the 4th-and-1 at the 5 worked example.
9. Win probability W(s,t,x) definition + drive value.
Each with units, assumptions, breakdown.

That's a lot; I'll be economical. Maybe combine some. I'll present ~6-7 numbered operators with units + breakdown each. Keep it rigorous but not bloated.

<RETROCAUSAL_GENEALOGY> (~330 words)
Lineage: Camp 1880/1881 → forward pass → two-platoon → Elias 1960 → Carter & Machol 1971 Operations Research (the academic root of EP) → Hidden Game 1988 → Football Outsiders 2003 → DVOA/EPA → nflfastR/Next Gen. Carroll's "statistical relationships have changed so much" as the recurring trap. The "multi-week/month" traps = the ~15-year and ~30-year adoption lags; each generation re-derived the same truths.

<RECURSIVE_THEORY_OF_MIND> (~330 words)
Model the coach. Conventional-wisdom prior; conformity over correctness because the payoff is job security (asymmetric career risk). The "come away with something" FG trap; the hurry-kermel clock misuse; prevent defense early deployment. Recursive layer: tendency-charting arms race, pre-snap shifting up 100%. Crisis = clock/prevent where habits regress to loss-averse defaults. Counter-trap = the analytically-correct aggressive play that gets you fired when it fails (Noll, Meyer examples).

<CROSS_LAYER_VETO_ADJUDICATION> (~330 words)
Physical/biomech/weather vetoes:
- "Not even Marino can throw a TD on a running play" — call constraint.
- OL interdependence: "can't be as good as its strongest link" — vetoes individual attribution.
- Marino "40 percent input" — QB stat is team output.
- Two-platoon size evolution (280-315 lb) — biomech regime change shifts stat meaning.
- Weather/wind (Thorpe punt, domes) — vetoes kicking/position models; models conditional on "normal circumstances."
- Onside kick: EV says go, but biomechanical sure-handedness + psychological cost vetoes.
Proof structure: model recommendation is valid only within its physical envelope; outside, void.

<RLVR_COUNTERFACTUAL_VETOES> (~380 words)
Reward = verifiable points/win differential from play-by-play. Three counterfactuals:
1. Universal 4th-and-1 go-for-it vs FG. Numbers from 1986 (49+52 attempts, 83 made = 82%; go-for-it ~2/3 ≈ 71 conv, ~50 TD = 350 pts vs 249 FG pts). Prediction: +~100 pts/season to rule-follower; sign +, magnitude ~ order 10^2. Verifiable against play-by-play.
2. Surprise onside kick vs desperation. Base rate 10% (4/40, 1986); surprise first-mover ≫ 10%. Prediction: surprise recovery > 30% on first attempt. Falsifiable via recovery-by-expectation dataset.
3. Prevent-too-early veto. Inequality: concede only if (lead ≥ f(time, secondary)). Prediction: prevent deployed with large time remaining AND below-median secondary completion-allowed correlate with tying drives; measurable blown-lead rate.
Each with the falsification condition.

Closing: 1-2 lines.

Let me write it out now, being careful with LaTeX rendering in plain text (I'll use standard $...$ and $$...$$ and \( \) where helpful; since output is plain text, I'll write LaTeX inline with backslashes which is fine).

Word count check: I'll make sure each section is substantial. Let me write generously but not padded.

I realize I should double check one number: "an extra 40 points scored or a fewer 40 points allowed provided one more win over the course of a season" — over fifty years; "down to 34 points per win" for 1977-86. And offensive/defensive split: 36 and 32, averaging 34. (page 240-241). Good.

And "400 yards" — 12 × 34 = 408 ≈ 400 (page 242). ✓

Let me write. I'll keep quotes short and exact.

Verbatim quotes I'll use (verified in provided text):
- "judging plays not just by yardage but also by down and distance" (p7)
- "It's like saying that when the rooster crows, the sun comes up." (p11)
- "Your point potential increases by about a point every 12.5 yards." (p106)
- "a turnover causes the same 4-point swing in point potential no matter where it happens" (p109) — let me check exact wording: "Remember, a turnover causes the same 4-point swing in point potential no matter where it happens, so why condemn your offense to failure..." (p109). ✓
- "one freakish field goal can mess up a decimal point" (p106)
- "we're talking about two evenly matched teams" (p106)
- "Not even Marino can throw a touchdown pass on a running play." (p47)
- "an offensive line is only as strong as its weakest link, but it certainly can't be as good as its strongest link." (p210-211) — exact: "It may be an overstatement... to say that an offensive line is only as strong as its weakest link, but it certainly can't be as good as its strongest link." ✓
- "conformity, not cowardice, doth make cowards of coaches." (p168)
- "It's almost a totally different game from the one that was played in the 1930s and '40s and even the '50s" and "The statistical relationships have changed so much." (p11)
- "Under the present system... Rather than a way to equalize competition, the draft tends to preserve the status quo." (p254) — maybe not needed.
- Carter: "In 1971, along with Robert E. Machol, Carter published a study in Operations Research in which he suggested evaluating field position in terms of potential points." (p104-105)
- "he never claimed his numbers were absolutely reliable beyond one tenth of a point." (p105)
- "the odds of scoring on a particular possession are not very good" / "It's an even-money bet." (p106)
- Marino "Credit him with 40 percent input." (p47)

I think I have enough. Let me write the final response.

I'll be careful: the invariant #1 says never mention spreads/totals/moneylines/odds. I must avoid those words even when discussing the excluded betting chapter. I'll say "the wagering chapter (Ch. 17) is excluded per the analysis frame" without detailing. Good. I also should avoid the word "odds" — hmm, "odds" is common. The invariant specifically lists "spreads, totals, moneylines, or odds." I'll avoid "odds" as a betting term. I can use "probability" instead. Actually "even-money bet" is a quote — that references betting but is a probability statement. To be safe I might avoid quoting "It's an even-money bet" and instead paraphrase as "a 50/50 probability." Let me avoid betting terminology throughout to honor invariant #1 cleanly. I'll say "probability" / "likelihood" / "expected value."

Also avoid "point spread" etc. Fine.

Let me finalize. I'll write the equations with units clearly.

Actually, for the fourth-down example, the book uses "potential scoring" (expected points). Let me present the go-for-it EV inequality in expected-points terms:

Go for it iff:
$$p\,V(x_{\text{succ}}) + (1-p)\,[-V(100 - x_{\text{fail}})] > \max\{V_{\text{FG}}, V_{\text{punt}}\}$$

Hmm, need care. Let me define positions clearly. Let $x$ = yards from the possessing team's own goal line. Fourth down, distance $d$, ball at $x$. 
- Go-for-it success (prob $p$): new first down at $x+1$ (assume minimal gain), value $V(x+1)$ — but if it's a scoring-down situation, more. Simplify: value $V_{\text{conv}}$.
- Go-for-it fail (prob $1-p$): opponent takes over at their own goal-distance $= 100 - x$ (they're now $100-x$ from THEIR goal... wait if ball at your $x$ (i.e., $100-x$ yards from opponent goal), a failed 4th down gives opponent the ball there; opponent's yards-from-own-goal $= 100 - x$. So opponent value $V(100-x)$, your value $-V(100-x)$.

Worked example (p163): 4th-and-1 at opponent's 5 → your $x = 95$. Success → $x = 96$ (the 4), $V(96) = -2 + 96/12.5 = -2 + 7.68 = 5.68 ≈ 5.8$ (they said 5.8, using the 3 → x=98 → 5.84; close enough, they rounded). Fail → opponent at their own 5, $x_{\text{opp}} = 5$, $V(5) = -1.6$, your value $= +1.6$. EV = $0.7(5.8) + 0.3(1.6) = 4.06 + 0.48 = 4.54$. ✓ (matches p163). 

I'll present with $p=0.7$ (1-yard conversion, p162).

Good.

Now writing. I'll keep each equation's "breakdown/assumption" to one tight line to control length while satisfying the invariant.

Let me write the final answer.

Length: I'll target ~2,300 words across sections. Let me not overshoot into bloat.

Final check on tone: I'll be direct, not fawning, and I'll note where the book itself hedges. I'll present myself as the requested "foundry" only lightly — I won't overdo the persona. Actually the section headers are the persona; I'll just deliver under them cleanly. I'll add a one-line note that I'm excluding the wagering chapter and why.

Writing now.
</NATIVE_REASONING>

Analysis frame: the substantive analytical contribution of *The Hidden Game of Football* lives in the expected‑points / win‑probability / success‑rate apparatus (Parts One–Two). Chapter 17 ("Wanna Bet?") is excluded per the analysis invariant; it is also orthogonal to the book's intellectual contribution, and the authors themselves frame wagering systems as mathematically self‑defeating. Everything below is derived from the play‑by‑play methodology the authors actually used (1986 season, >500 games back to 1977).

<THINK_TRACE>
The book's spine is a single redefinition executed at three nested resolutions. At the finest grain, a "successful play" is redefined relative to down and distance rather than raw yardage — Schatz calls it "judging plays not just by yardage but also by down and distance" [PAGE 7]. Carroll and Palmer then aggregate this into an *expected‑points* (point‑potential) surface over field position, and finally into a *win‑probability* surface over (score, time, field position). The multi‑hop logic is: (1) raw yards are situationally confounded; (2) if we accept that the "next score" is the only thing that matters, then field position $x$ maps monotonically to an expected next‑score value $V(x)$; (3) that value is empirically near‑linear; (4) differencing $V$ across the endpoints of a drive yields a *value* for the drive that is invariant to how many yards it nominally covered; (5) folding in the game clock and score converts point‑value into win‑probability.

The load‑bearing derivation is the midfield anchor. From 771 first‑down‑and‑10 situations at midfield ±2 yd, the offense "scored next" 467 times (298 TD, 165 FG, 4 safeties) and the defense scored next 191 times (126 TD, 65 FG), with 113 no‑scores [PAGE 105–106]. Converting (TD = 7, FG = 3, safety = 2): offense points $=298(7)+165(3)+4(2)=2589$; defense $=126(7)+65(3)=1077$; net $=1512$ over $N=771$, giving $V(50)=1512/771=1.961$ points. The stated linear law $V(x)\approx-2+x/12.5$ predicts $V(50)=2.00$. The residual $0.039$ is exactly the noise floor the authors flag: "one freakish field goal can mess up a decimal point" [PAGE 106].

Gray‑zone audit — where the apparatus is *not* valid, by the authors' own caveats: (a) it presumes "two evenly matched teams" [PAGE 106]; individual matchups shift the curve and shrink samples. (b) It is a league‑average surface; rule changes and "the evolution of the game" continuously de‑calibrate it, so Carter's 1971 figures became "much more approximate" [PAGE 105]. (c) It is deliberately time‑ and score‑blind; the point‑potential surface is a *component* whose output is the *input* to the win‑probability model [PAGE 109]. (d) The turnover invariance (§2, below) holds only for a *clean possession transfer at the line of scrimmage with no return score*; a pick‑six or fumble‑six breaks it entirely [PAGE 108]. (e) Small‑sample instability: single long returns or one blocked kick can dominate a season rate, which is why the authors add "+YARDS" normalizations and drop each returner's longest run [PAGE 140–142]. The honest reading is that these are *conditional expectations*, not predictions — Carroll's rooster aphorism ("It's like saying that when the rooster crows, the sun comes up," [PAGE 11]) is the causal warning against reading $V(x)$ or a 100‑yard‑rushing correlation as a lever.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>

**(1) Success‑rate operator.** For a play on down $k$ needing $g$ yards, define the "win" indicator
$$W = \mathbb{1}\!\left[\Delta y \ge \tau_k\, g\right],\quad \tau_1=0.40,\ \tau_2=0.60,\ \tau_{3,4}=1.00.$$
Units: dimensionless; $\Delta y$ in yards. *Assumption:* a first down is the terminal sub‑goal on 3rd/4th, so $\tau=1$. *Breakdown:* kneel‑downs and clock‑killers are excluded from the denominator or the rushing average is polluted [PAGE 74].

**(2) Point potential (expected points).** With $x$ = yards from own goal line, $x\in[0,100]$:
$$V(x)\approx -2 + \frac{x}{12.5}\quad[\text{points}],\qquad \frac{dV}{dx}=0.08\ \text{points/yd}.$$
Anchored empirically at $V(50)=1512/771=1.961$. *Units:* points. *Assumption:* even matchup, next‑score accounting. *Breakdown regime:* tails ($x\lesssim5$ or $x\gtrsim95$) where safety/goal‑line discreteness dominates and linearity fails.

**(3) Turnover invariance.** Let a turnover occur at your position $x$ with no line change and no return score. Opponent then holds the ball at their own $100-x$, so your value becomes $-V(100-x)$:
$$\Delta V_{\text{TO}} = -V(100-x) - V(x) = -\Big[6-\tfrac{x}{12.5}\Big] - \Big[-2+\tfrac{x}{12.5}\Big] = -4\ \text{points},$$
independent of $x$ — "a turnover causes the same 4‑point swing in point potential no matter where it happens" [PAGE 109]. *Breakdown:* any return touchdown, or a spot change, voids the cancellation.

**(4) Turnover yardage cost & point consistency.** Fumble $\approx 50$ yd, interception $\approx 45$ yd [PAGE 130–131]; with $\kappa\approx 12$ yd/point [PAGE 130], $50/12\approx4.2\approx|\Delta V_{\text{TO}}|$, so the yard‑penalty and the point‑potential models agree.

**(5) Passer‑rating affine decomposition (interior regime).** The NFL PRS components are $a=\frac{100C/A-30}{20},\ b=\frac{Y/A-3}{4},\ c=\frac{100T/A}{5},\ d=\frac{9.5-100I/A}{4}$. Summing:
$$a+b+c+d=\frac{Y+20C+80T-100I}{4A}+0.125,\qquad \text{PRS}=\frac{100}{6}(a+b+c+d).$$
So, absent caps, PRS is a strictly increasing affine map of $\dfrac{Y+20C+80T-100I}{A}$: **+20 yd/completion, +80 yd/TD, −100 yd/INT** [PAGE 192]. This proves the authors' claim that yard‑per‑attempt — "the single most important statistic" — "counts the least," since a completion adds a flat 20 yd regardless of distance [PAGE 191–193]. *Units:* yards. *Breakdown regime:* each of $a,b,c,d$ is clamped to $[0,2.375]$, so the map is only *piecewise* affine; e.g., Luckman's 1943 13.9 yd/att is credited only 11.9 because $b$ saturates [PAGE 188].

**(6) Proposed rating systems** [PAGE 193–194]:
$$\text{NRS}=\frac{Y+10T-45I}{A},\qquad \text{NIRS}=\frac{(Y-Y_{\text{sack}})+10T-45I}{A+S}.$$
*Units:* yards/attempt. *Change vs (5):* TD bonus 80→10, INT penalty 100→45, sack yards charged and sacks added to attempts.

**(7) Points↔wins transfer.** Net scoring differential:
$$\Delta P=\frac{\Delta Y_{\text{net}}}{12}+4\,\Delta\text{TO}\quad[\text{points}],$$
with $\Delta\text{TO}=$ (gained − allowed) [PAGE 244]. Season scale: $\Delta P\approx 34\,\Delta\text{Win}$ (1977–86) [PAGE 240]; equivalently $\approx400$ net yards per win ($12\times34=408$) [PAGE 242]. *Assumption:* independence of yardage and turnovers; *breakdown:* the 16‑game sample makes the fit only ~two‑thirds correlational [PAGE 245].

**(8) Fourth‑down expected‑value test.** Go for it iff
$$p\,V(x{+}1)+(1-p)\big[-V(100-x)\big] \;>\; \max\{V_{\text{FG}},\,V_{\text{punt}}\}.$$
Worked case, 4th‑and‑1 at opponent's 5 ($x=95,\ p=0.70$): $0.7(5.8)+0.3(1.6)=4.54$ points, exceeding the field‑goal value $\approx2.9$ [PAGE 162–163]. *Breakdown:* baseline ignores time/score; see (9).

**(9) Win probability.** $W:\ \mathbb{Z}\times\mathbb{R}_{\ge0}\times[0,100]\to[0,1]$, estimated from >500 games; reported in permille. Drive value $=W_{\text{end}}-W_{\text{begin}}$ (e.g., $266-145=121$ WP‑points [PAGE 85]); a full game sums to $\approx\pm500$ [PAGE 91]. This is the *refinement* that overrides the time‑blind rule (8): with 6:00 left and down 2 at the opponent's 10, the FG becomes correct because $0.85(76.2)+0.15(24.2)=68.4>52.3$ [PAGE 167–168].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage is explicitly incremental‑hardware‑first, statistics‑later. Camp's scrimmage and line of scrimmage (1880) and downs‑and‑distance (1881) created discrete possessions; the legal forward pass (1906, freed in the pros by 1934) and unlimited substitution/two‑platoon football (WWII–late 1940s) created both specialization and the size inflation (280–315 lb linemen, e.g., Les Bingaman) that make modern statistics incomparable to the 1930s [PAGE 22–34]. Carroll's warning is the through‑line: "It's almost a totally different game… The statistical relationships have changed so much" [PAGE 11].

The *analytic* genealogy proper begins in 1971, when Virgil Carter and Robert E. Machol "published a study in Operations Research in which he suggested evaluating field position in terms of potential points," analyzing 2,852 first‑down situations and stating an expected value of 2.392 at the opponent's 45 — while conceding the numbers were not "absolutely reliable beyond one tenth of a point" [PAGE 104–105]. This is the academic root of Expected Points Added; *Hidden Game* (1984/1988) is its popularization, adding the drive‑chart and win‑probability layers.

The multi‑week (really multi‑year) traps are adoption lags, not analytic gaps. Foreword timeline: *Hidden Game* (1988) → Football Outsiders (2003) → DVOA built on success‑rate → Brian Burke (2007) → nflfastR (play‑by‑play to 1999) → Next Gen Stats chips (2016) → Big Data Bowl and "rushing yardage over expected" [PAGE 6–8]. The recurring trap is re‑derivation: because the underlying relationships drift (rule changes: goalposts to the end line in 1974; the 1978 blocker‑hands liberalization; sacks first charted 1961, individually credited only 1982 [PAGE 50–53]), each cohort that reads only raw totals rediscovers confounds — most famously the "when X rushes 100 yards his team wins Y%" fallacy, which reverses cause and effect [PAGE 199–200]. The book's counter‑move is to always re‑fit $V(x)$ and $W$ to a recent window rather than trust a fixed historical table.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Modeling the coach is the book's behavioral core, and it is a theory‑of‑mind problem with an asymmetric payoff. The coach operates a strong prior — "The Coach's Book of Conventional Wisdom" [PAGE 157] — not because it is correct but because its *failure modes protect the coach*: "the cautious coach who calls for the punt or plays for the tie may be employed year after year, for he has made the fans believe it is the players who failed" [PAGE 10]. The authors' summary is exact: "conformity, not cowardice, doth make cowards of coaches" [PAGE 168]. So the equilibrium is not "coach is irrational" but "coach maximizes survival, and survival rewards the minimax‑regret (kick the field goal) over the expected‑value‑maximal (go for it) choice."

Crisis‑habit regression appears at the clock layer. In the two‑minute drill, coaches under‑use time‑outs before the warning: a defensive time‑out saves ~30 s versus ~12 s on offense, yet ~39 of 167 available were burned early and 28 were never used [PAGE 233–234]. The prevent defense is the same pathology: "sell yardage for time" is correct only inside a narrow (lead, time, secondary‑capability) region; deployed "too early" or against a secondary that cannot keep the ball in bounds, it concedes the tying score [PAGE 235–236]. These are habits that regress under pressure precisely when analytic control matters most.

The recursive layer is the tendency arms race. Both sides chart tendencies; offenses then pre‑snap shift to defeat the defense's model of them — shifting "up 100 percent from the beginning of the decade" [PAGE 66]. This is a mutual theory‑of‑mind loop: I model your model of my formation. The counter‑trap is career‑terminal: Noll's 4th‑and‑1 go‑for‑it (which the model endorses) is publicly branded a "gamble," and Ron Meyer's identical, correct call is blamed for a loss decided by later, unrelated plays [PAGE 165–166]. The coach who follows the reward signal (expected points) is punished by the *narrative* reward signal (hindsight). Any model of coaching behavior must therefore price in this principal‑agent wedge between win probability and coach employment.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A statistical recommendation is valid only inside the physical envelope that generated it; outside that envelope it is void. The book supplies clean veto cases.

*Biomechanical — call availability.* No expectation over "pass vs run" is meaningful if the chosen action is physically unrealizable in the situation: "Not even Marino can throw a touchdown pass on a running play" [PAGE 47]. The point‑potential model conditions on the play actually run; it cannot recommend an infeasible action.

*Biomechanical — attribution.* Offensive‑line output is irreducibly collective: an OL "certainly can't be as good as its strongest link" [PAGE 210–211]. This vetoes any attempt to credit a single lineman from team rushing average; the individual statistic does not exist as an independent quantity.

*Biomechanical — QB value as team output.* Marino's record is credited at "40 percent input" [PAGE 47] because pocket integrity, receiver separation, and the running game co‑determine the passing line. The physics of time‑to‑throw (pressure) sets the ceiling on what any completion‑based metric can attribute to the passer.

*Regime shift — body mass.* Two‑platoon football moved linemen from ~215 lb to 280–315 lb [PAGE 31–32]. This is a genuine change of physical regime that re‑scales rushing averages and sack rates, so cross‑era statistical comparison is vetoed unless re‑normalized (hence Per‑Scheduled‑Game and league‑average‑delta corrections [PAGE 204–206]).

*Weather — kicking and field position.* Field‑position and kicking expectations are conditioned on "normal circumstances" [PAGE 136]. Wind vetoes them: Thorpe's 95‑yd wind‑caught punt decided the 1919 Canton–Massillon game [PAGE 103], and the 1932 indoor playoff (field "ten yards too narrow and twenty yards too short") forced the hash‑mark innovation [PAGE 28]. Domes compress this variance but do not remove it [PAGE 280].

*Counter‑example veto — surprise onside kick.* The expected‑value layer says an unexpected onside recovery at ~midfield is worth ~2 points and can beat the ~10% desperation recovery base rate [PAGE 138]. But the physical‑psychological layer vetoes routine use: receiving units field their surest hands when they expect it, and a called surprise onside signals "these guys are better than us," imposing a morale cost the EV model does not carry. Proof structure: whenever the physical envelope (feasibility, attribution, regime, weather, opponent adaptation) is mis‑specified, the recommendation is null, regardless of its in‑model optimality.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Reward signal = verifiable points/win differential computed from play‑by‑play. Each counterfactual states the policy, the predicted sign/magnitude, and the falsification condition.

**Veto 1 — universal 4th‑and‑1 go‑for‑it vs field goal.** Policy $\pi$: always go for it on 4th‑and‑1/‑2 outside obvious clock states; policy $\pi'$: kick. In 1986, 49 fourth‑and‑1 plus 52 fourth‑and‑2 field‑goal attempts produced only 83 makes (≈82%) [PAGE 164]. Under $\pi$, $p\approx0.70$ implies ≈71 conversions, of which the authors estimate ≈50 would end in touchdowns → $50\times7=350$ points versus $83\times3=249$ points from $\pi'$, plus superior opponent field position on failures. **Prediction:** over a season, $\pi$ yields a net scoring gain of order $10^2$ points (sign $+$). **Falsifier:** if a full‑season counterfactual replay shows $\pi$ net points $\le \pi'$ once opponent post‑failure field position is priced, the veto is overturned.

**Veto 2 — surprise (non‑desperation) onside kick.** Base rate: 4 of 40 onside kicks recovered in 1986 (10%), essentially all in expected/desperation states [PAGE 138]. Policy: attempt a *first‑time, unexpected* onside. **Prediction:** first‑attempt surprise recovery probability $\gg 10\%$ (target $>30\%$), because the receiving unit is not staffed for it; recovery collapses after the first use as opponents adapt. **Falsifier:** a surprise‑tagged onside dataset showing recovery $\le$ the desperation base rate refutes the counterfactual.

**Veto 3 — prevent defense deployed early / against a weak secondary.** The prevent is +EV only inside the region where it "cut off half the sideline throws and appl[ies] some small pressure" and the remaining time is shorter than the opponent's minimum scoring path (sideline completions at ~6 s/play vs middle throws at ~16–20 s/play) [PAGE 236]. Policy $\pi_{\text{early}}$: deploy prevent with large time remaining and/or a below‑median completion‑allowed secondary. **Prediction:** games matching $\pi_{\text{early}}$ show a measurably elevated rate of tying/go‑ahead drives conceded in the final period relative to matches where prevent is deferred. **Falsifier:** if blown‑lead rate under $\pi_{\text{early}}$ is statistically indistinguishable from the deferred‑prevent baseline, the veto fails.

All three rewards are verifiable against the same play‑by‑play substrate the authors used, and all three carry an explicit reversal condition, so none is an unfalsifiable claim.
</RLVR_COUNTERFACT