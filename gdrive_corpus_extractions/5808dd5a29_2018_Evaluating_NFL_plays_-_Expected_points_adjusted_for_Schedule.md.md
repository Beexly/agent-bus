---
source: "2018 Evaluating NFL plays - Expected points adjusted for Schedule.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 12
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5343
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper about evaluating NFL plays with expected points adjusted for schedule. They've provided the full text of a 12-page paper.

I need to output a response with these exact XML sections:
1. `<THINK_TRACE>` - Deep multi-hop derivation & gray-zone audit (>=400 words)
2. `<SOURCE_OPERATORS_AND_EQUATIONS>` - Formal LaTeX, units, page citations, breakdown
3. `<RETROCAUSAL_GENEALOGY>` - Historical/scientific lineage & multi-week traps
4. `<RECURSIVE_THEORY_OF_MIND>` - Crisis habit regression vs counter-trap vs clock
5. `<CROSS_LAYER_VETO_ADJUDICATION>` - Physical/biomechanical/weather veto proof
6. `<RLVR_COUNTERFACTUAL_VETOES>` - 3 verifiable RLVR veto scenarios + predictions

Constraints:
- ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
- ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
- Cite exact [PAGE N] markers and verbatim quotes where source pages provided.
- >= 1,000-word depth across sections.

Let me analyze the source text carefully:

Key points from the paper:
- Paper: "Evaluating NFL plays: Expected points adjusted for schedule" by Pelechrinis, Winston, Sagarin, Cabot (2018)
- Core concept: Expected Points (EP) models adjusted for opponent strength/schedule
- WCS model (Winston, Cabot, Sagarin): infinite horizon zero-sum stochastic game, state = <Down, Yards-to-Go, Field Position>, 19,799 possible states, but only ~4,972-4,989 states appear per season (sparsity problem)
- Example: state <4, 4, 7> value = -2.575 (page 3)
- Example play value: v1 = -0.014 (1st & 10 own 23), v2 = 0.109 (2nd & 6 own 27 after 4-yard gain), play value = 0.123 points (page 3)
- Optimization problem 2: constrained optimization to find offensive/defensive ratings
- Predicted point margin: p̂_i = mrush + roi + rdi + ε_i (though the exact equation formatting got mangled in the source, it's a linear additive model)
- Constraints: weighted averages of roi and rdi across teams equal 0 (normalized by number of plays)
- Adjusted value for offense: v - rdi (subtract defensive ability)
- Adjusted value for defense: v - roi (subtract offensive ability)
- Example: Cowboys vs Patriots, unadjusted 0.40, Patriots rdB = -0.05 (better than average), adjusted offense = 0.45; Cowboys roA = +0.10, adjusted defense = 0.30 (page 4)
- Impact: average absolute discrepancy 0.06 points/offensive play, 0.07 points/defensive play (p<0.001) (page 5)
- 130 plays/game * 16 games * 0.06 = 124.8 points/season ~ 3.8 wins (using 33 points = 1 win from Appendix C) (page 5)
- Passing vs Rushing: 2016 runs averaged 0.069 ppp, passes 0.26 ppp (page 7)
- Std dev: rushing 0.89, passing 1.48 (page 7)
- 3rd & <=5 from shotgun: rushing 0.2 ppp, passing 0.16 ppp (page 7)
- Special teams: Cardinals 40 points below average cost ~1.2 wins; Chiefs punt return 40 points above average (page 6)
- Appendix C: linear regression point differential vs wins: intercept 7.9, slope 0.03, so 1 win ≈ 33 points (page 12)
- Appendix B: critiques Football Outsiders adjustment as possibly single-iteration vs their multi-iteration optimization (page 12)

Now I need to structure this into the required XML sections with proper depth.

Important: No betting lines. I must avoid spreads, totals, moneylines, odds. I can discuss point differentials and wins (Appendix C does this), but not betting odds.

Let me draft each section.

THINK_TRACE (>=400 words): Deep multi-hop derivation and gray-zone audit.
- Trace how raw expected points (WCS) become play values via state differences
- Trace how play values become team ratings via constrained optimization
- Trace how ratings adjust individual plays bidirectionally (offense gets v - rdi, defense gets v - roi)
- Gray zones: state sparsity (19,799 possible vs ~5,000 observed), observational data/game plan endogeneity, shotgun formation surprise effect, special teams field position confounding, normalization constraints, single-season vs multi-season ratings stability, replacement level assumptions in WAR extension
- Multi-hop: Carter & Machol (1971) -> Hidden Game linear EP -> WCS stochastic game -> this paper's schedule adjustment -> WAR/draft evaluation extensions

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations.
- Define state space S = {<d, y, f>} | d ∈ downs, y ∈ yards-to-go, f ∈ field position, |S| = 19,799 [PAGE 3]
- Observed states per season ~4,972 (2014), 4,989 (2015), 4,966 (2016) [PAGE 3]
- State value v(s) = expected point margin [points]
- Play value Δv = v(s_end) - v(s_start) [points/play]
- Example v1 = -0.014, v2 = 0.109, Δv = 0.123 [PAGE 3]
- Optimization: p̂_i = μ_rush + roi + rdi + ε_i [points/play] where μ is league average [PAGE 4]
- Constraints: Σ_j (noj/N) roi_j = 0, Σ_j (ndj/N) rdi_j = 0 [PAGE 4]
- Adjusted offense: v_adj,off = v_raw - rdi_defense [points] [PAGE 4]
- Adjusted defense: v_adj,def = v_raw - roi_offense [points] [PAGE 4]
- Example: v=0.40, rdi_Patriots=-0.05 → 0.45; ro_Cowboys=+0.10 → 0.30 [PAGE 4]
- Discrepancy: 0.06 pts/offensive play, 0.07 pts/defensive play, p<0.001 [PAGE 5]
- Seasonal compounding: 130 plays/game × 16 games × 0.06 = 124.8 points ≈ 3.8 wins [PAGE 5]
- Win conversion: Appendix C regression: wins = 7.9 + 0.03 × point differential → 1 win ≈ 33.3 points [PAGE 12]
- Passing vs rushing: μ_pass = 0.26, μ_rush = 0.069 [points/play, 2016] [PAGE 7]
- σ_rush = 0.89, σ_pass = 1.48 [points/play] [PAGE 7]
- Shotgun 3rd & ≤5: rush 0.20, pass 0.16 [points/play] [PAGE 7]
- Breakdown/singularity: sparse states require regularization or simulation (Pro Quarterback game used historically); optimization may be underdetermined if teams don't play balanced schedules; normalization assumes league-average baseline; WCS assumes stationary transition probabilities within season

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
- Lineage: Carter & Machol [5] (1971) Operations Research on football; Carroll/Palmer/Thorn [4] Hidden Game (1989); WCS [8,9] stochastic game 1983/2012; Yurko et al. [10] multinomial logistic regression; Burke [1] next-score grouping
- This paper's innovation: bidirectional adjustment (offense and defense get different adjusted values on same play)
- Multi-week traps: schedule strength accumulates unevenly; early-season ratings based on small samples; opponent ratings themselves depend on your rating (simultaneous equation / fixed-point problem); injuries mid-season violate stationarity; playoff scheduling not regular-season balanced
- Historical trap: yards/pass attempts ignore context; points allowed ignores offense-driven short fields (pick-6, fumble) [PAGE 6]

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- This is more abstract/theoretical. I need to interpret "crisis habit regression" as teams regressing to conservative play-calling under pressure, "counter-trap" as defenses anticipating tendencies, "clock" as game-state/time constraints.
- Coaches under crisis (late game, trailing) regress to habitual run/pass ratios; defenses counter-trap by keying on formations (shotgun = pass expectation); clock management changes state values non-linearly near end of halves.
- Observational data problem: play calling is adaptive, so EP values are endogenous to game state; the "surprise" run from shotgun works because defense expects pass (game theory / mixed strategies from WCS [PAGE 3,7])
- Risk aversion: passing higher variance (σ=1.48 vs 0.89) means sustained drives favor rushing despite lower mean [PAGE 7]

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical layer: field position (yard line) is physical geometry; state space includes field position as continuous/discrete physical variable; weather not explicitly modeled in paper but affects transition probabilities
- Biomechanical: player personnel (Ezekiel Elliott, LeVeon Bell, Paul Perkins mentioned) affects raw play value; ratings are team-level not player-level (WAR extension requires player ratings not available) [PAGE 4,10]
- Weather veto: paper does not adjust for weather, turf, altitude, temperature; these are exogenous vetoes that can confound opponent strength adjustment (e.g., cold weather games, dome vs outdoor)
- Physical singularity: goal-line states and touchback states have outsized frequency (touchback ~5x second most frequent) creating estimation leverage points [PAGE 3]

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
Need 3 verifiable counterfactual veto scenarios with predictions. RLVR = Reinforcement Learning Verifiable Rewards? Or some framework. I'll interpret as verifiable counterfactual conditions where the model's prediction would be vetoed/broken.

Scenario 1: State sparsity singularity. If a state (down, distance, field position) has < threshold observations, WCS value estimate has high variance. Veto: plays in rare states (e.g., 4th & 20 from own 1-yard line) should be excluded or regularized; prediction: adjusted values for rare states will show high volatility week-to-week and fail out-of-sample stability tests.

Scenario 2: Endogeneity / game-plan adaptation. If offense runs same play every time, efficiency drops [PAGE 7]. Veto: if a team becomes predictable (>X% run from shotgun), the model's EP values for that formation will decay; prediction: shotgun rushing EP will converge toward passing EP or below as defenses adjust, invalidating static state values.

Scenario 3: Schedule strength simultaneity. Offensive and defensive ratings are solved jointly; if one team's schedule is extremely unbalanced (e.g., plays many top defenses early), ratings may not converge or may reflect opponent rating errors. Veto: teams with SOS in top/bottom decile will show largest raw-vs-adjusted discrepancies; prediction: absolute adjustment discrepancy will correlate with schedule strength deviation (r > 0.3), and teams facing below-average defenses will see downward adjusted offense revisions.

I need to make sure total word count across sections is >= 1,000 words. I'll aim for substantial depth in each.

Word count plan:
- THINK_TRACE: ~300-400 words (need >=400 for this section alone per instructions: ">=400 words")
Wait, the instruction says: ">= 1,000-WORD DEPTH across these exact XML sections: <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words)."

This could mean the THINK_TRACE section itself must be >=400 words, OR the total across all sections must be >=1000 with THINK_TRACE being one of them. The phrasing "(>=400 words)" specifically modifies THINK_TRACE. So THINK_TRACE >= 400 words, and total >= 1,000 words across all sections.

Let me make sure THINK_TRACE is at least 400 words. I'll write it thoroughly.

Also need to cite [PAGE N] markers. The source text has page numbers embedded in the text flow. I can reference them as [PAGE 3], [PAGE 4], etc. based on the page numbers visible in the document (3, 4, 5, 6, 7, 12, etc.). The text shows page breaks with numbers like "3", "4", "5" etc. I'll cite accordingly.

Let me carefully map citations:
- Page 3: WCS model details, 19,799 states, 4,972/4,989/4,966 states, state <4,4,7> = -2.575, play value example v1/v2/0.123
- Page 4: Optimization problem, p̂_i equation, constraints, adjusted values v - rdi and v - roA, Cowboys/Patriots example (0.40 → 0.45 offense, 0.30 defense)
- Page 5: Average absolute discrepancy 0.06 offense / 0.07 defense, p<0.001, 130 plays/game, 124.8 points, 3.8 wins
- Page 6: Special teams, pick-6/fumble critique, Cardinals 40 points below average / 1.2 wins, Chiefs 40 points above average punt return
- Page 7: Passing vs rushing means (0.069 vs 0.26), shotgun 3rd & <=5 (0.20 rush vs 0.16 pass), std devs (0.89 vs 1.48)
- Page 12: Appendix C, regression intercept 7.9, slope 0.03, 33 points = 1 win

Now let's write. I'll be careful to avoid any betting terminology. No "spread", "total", "moneyline", "odds", "line", "handicap". I can talk about point differentials and expected points, but not betting.

Let me draft THINK_TRACE first with ~450 words.

THINK_TRACE content:
Start with the epistemological chain: raw play value comes from state differences in a zero-sum stochastic game. The state space is huge but sparse. Then the adjustment layer: team ratings are latent variables inferred from observed play values via constrained least-squares-like optimization. Then the bidirectional feedback: same raw play yields two adjusted values depending on whether you're crediting offense or defense. Gray zones: sparsity means many states are never observed; normalization forces league average to zero which may not hold for all subsets; observational endogeneity means play calling depends on defensive expectations; special teams confounding by field position; stationarity assumption across a season ignores injuries and tactical evolution.

I'll write it out.

SOURCE_OPERATORS_AND_EQUATIONS: LaTeX heavy.
Define:
- \(\mathcal{S} = \{ \langle d, y, f \rangle \}\) with \(|\mathcal{S}| = 19{,}799\)
- \(v(s) \in \mathbb{R}\) [points], expected margin
- \(\Delta v_i = v(s_i^{\text{end}}) - v(s_i^{\text{start}})\) [points/play]
- Example from page 3: \(v_1 = -0.014\), \(v_2 = 0.109\), \(\Delta v = 0.123\)
- Optimization: \(\hat p_i = \mu_{\text{rush}} + ro_i + rd_i + \epsilon_i\)
- Constraints: \(\sum_j \frac{noj}{N} ro_j = 0\), \(\sum_j \frac{ndj}{N} rd_j = 0\)
- Adjustment: \(v^{\text{adj}}_{\text{off}} = v - rd_{\text{def}}\), \(v^{\text{adj}}_{\text{def}} = v - ro_{\text{off}}\)
- Season aggregate: \(130 \times 16 \times 0.06 = 124.8\) points; \(\approx 3.8\) wins at 33 pts/win
- Win conversion: \(\text{wins} = 7.9 + 0.03 \times \text{PD}\) so \(1/\text{slope} \approx 33.3\)
- Passing/rushing: \(\mu_{\text{pass}} = 0.26\), \(\mu_{\text{rush}} = 0.069\); \(\sigma_{\text{pass}} = 1.48\), \(\sigma_{\text{rush}} = 0.89\)
- Breakdown regimes: sparse-state singularity (\(n(s) < n_{\min}\)); non-convexity or underdetermination if schedule graph disconnected; normalization bias if subset averages ≠ 0

RETROCAUSAL_GENEALOGY:
Trace: Carter & Machol 1971 [5] -> Hidden Game [4] linear approximation -> WCS [8,9] stochastic game/LP -> Yurko [10] regression -> Burke [1] next-score -> this paper's opponent adjustment -> proposed WAR extension [page 10] and college prospect evaluation [page 10].
Multi-week traps: schedule imbalance accumulates non-linearly; early season rating error propagates; opponent rating is a function of your rating (simultaneity); playoff schedules are not balanced so regular-season ratings may not transfer; bye weeks and injuries break stationarity.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: under pressure (late game, trailing), coaches revert to habitual run/pass mixes rather than EP-optimal mixes. Counter-trap: defenses key on formations (shotgun implies pass), making surprise runs more efficient (0.20 vs 0.16 on 3rd & <=5). Clock: end-of-half/end-of-game states have non-linear value because terminal payoff changes the zero-sum recursion; the infinite-horizon assumption of WCS breaks down near clock expiration. Observational endogeneity: play choice is adaptive, so EP is not exogenous to defensive alignment.

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer: field position and yardage are geometric; goal-line and touchback states have outsized frequency [page 3]. Biomechanical: team-level ratings mask individual player contribution; WAR extension requires player ratings (PFF or internal) not available [page 10]. Weather/exogenous: paper does not model weather, turf, altitude; these are veto conditions that can confound opponent strength (e.g., cold, wind, elevation affect transition probabilities independent of defensive rating). Veto proof: if weather or field conditions systematically favor one unit, the opponent-strength adjustment will misattribute environmental variance to team rating.

RLVR_COUNTERFACTUAL_VETOES:
Three scenarios:
1. Sparse-state veto: If \(n(s) < 5\) for a state, WCS \(v(s)\) is regularized/simulated rather than observed. Prediction: adjusted play values in rare states (e.g., 4th & long deep in own territory) will exhibit week-to-week instability exceeding 0.1 points/play and fail out-of-sample RMSE tests.
2. Predictability veto: If offense run rate from shotgun exceeds threshold (e.g., >60%), defensive counter-adaptation collapses the rush-pass EP differential. Prediction: shotgun rush EP on 3rd & <=5 will drop from +0.20 to ≤0.10 within 3 weeks of heavy usage.
3. Schedule imbalance veto: If a team's opponent defensive rating deviates >1 SD from league mean, the raw-to-adjusted gap should exceed the league average 0.06-0.07. Prediction: teams in the top/bottom decile of schedule strength will show average absolute discrepancy >0.10 points/play, and their adjusted ratings will regress toward mean in the subsequent season.

Each with verifiable prediction. Good.

Now check word counts. I need to write enough.

Let me write the full response now. I'll make sure THINK_TRACE is well over 400 words.

I should also double-check I'm not mentioning any betting terms. Words like "point differential" are fine. "Odds" is banned. "Spread" banned. "Moneyline" banned. "Total" banned in betting context. I'll avoid all.

Let's write.

Structure:
<THINK_TRACE>
...
</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>
...
</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>
...
</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>
...
</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>
...
</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>
...
</RLVR_COUNTERFACTUAL_VETOES>

I'll include verbatim quotes where useful with [PAGE N].

Let's ensure the THINK_TRACE is >=400 words. I'll write about 500.

Let's draft carefully.

One thing: The instruction says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I should include [PAGE N] and some quotes.

Let's write the content now.
</NATIVE_REASONING>

<THINK_TRACE>
The derivation chain in Pelechrinis, Winston, Sagarin, and Cabot (2018) proceeds through three nested epistemological layers, each with its own gray-zone failure mode. Layer one is the raw expected-points (EP) state space. The authors adopt the WCS (Winston-Cabot-Sagarin) infinite-horizon zero-sum stochastic game, where the state is defined as the triplet <Down, Yards-to-Go, Field Position>, yielding 19,799 theoretically possible states [PAGE 3]. Because an NFL season contains only roughly 40,000 plays, most states are rarely or never observed; the empirical census identifies only 4,972, 4,989, and 4,966 appearing states across the 2014–2016 seasons [PAGE 3]. This sparsity creates a singularity regime: state values for rare configurations must be extrapolated, regularized, or simulated rather than estimated directly from play-by-play frequencies. The play value itself is a first difference, Δv = v(s_end) − v(s_start) [points/play]. The paper’s worked example moves from v1 = −0.014 (1st and 10, own 23) to v2 = 0.109 (2nd and 6, own 27 after a 4-yard gain), producing Δv = 0.123 points [PAGE 3].

Layer two is the schedule-strength adjustment. The authors treat each raw play value as the score of a single-play zero-sum contest between an offensive unit rating (ro) and a defensive unit rating (rd), with the prediction equation p̂_i = μ_rush + ro_i + rd_i + ε_i [points/play], where μ_rush is the league-average constant [PAGE 4]. The critical constraint is that the play-weighted team averages of ro and rd are both normalized to zero across the league [PAGE 4]. This is a simultaneous fixed-point problem: every team’s offensive rating depends on the defensive ratings of its opponents, and vice versa. The authors emphasize that this is not a one-pass average but an iterative re-calculation resembling a large system of equations, which they contrast with non-public adjustment approaches that may only perform a single iteration [PAGE 12, Appendix B].

Layer three is bidirectional play re-valuation. The same raw play v produces two distinct adjusted values: for the offense, v_adj,off = v − rd_defense; for the defense, v_adj,def = v − ro_offense [PAGE 4]. The worked Cowboys–Patriots example shows a raw 0.40-point rush becoming 0.45 for the offense when the Patriots’ rush defense is better than average (rd = −0.05), but only 0.30 from the defensive standpoint when the Cowboys’ offense is above average (ro = +0.10) [PAGE 4]. This rational split means a play can be simultaneously “good” for one unit and “less good” for the other.

Gray-zone audit: (1) State sparsity means many states are estimated, not observed, so the WCS value function carries simulation uncertainty that the paper does not propagate into the adjustment optimization. (2) The normalization constraint forces league-average ro and rd to zero, but subsets (e.g., red-zone only, shotgun only, dome teams only) need not average to zero, risking subset-specific bias. (3) Observational endogeneity: play calling is adaptive; if an offense becomes predictable, defensive counters alter the very transition probabilities that generate state values [PAGE 7]. (4) Special teams confounding: net punting yardage depends on starting field position, which is an offensive outcome, not solely a special-teams outcome [PAGE 6]. (5) Stationarity assumption: team ratings are treated as constant across a season despite injuries, bye weeks, and tactical evolution, which can violate the simultaneous-equation assumption in multi-week panels. These gray zones define where the model’s adjusted point values are robust and where they require external vetoes.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal notation and extracted operators:

State space:
\[
\mathcal{S} = \{ \langle d, y, f \rangle \}, \quad |\mathcal{S}| = 19{,}799 \text{ states} \quad \text{[PAGE 3]}
\]
where \(d \in \{\text{down}\}\), \(y \in \{\text{yards-to-go}\}\), \(f \in \{\text{field position}\}\).

Empirical support per season:
\[
|\mathcal{S}_{\text{obs}}| \in \{4{,}972, 4{,}989, 4{,}966\} \quad \text{for 2014--2016} \quad \text{[PAGE 3]}
\]
Prominent state frequency: touchback state appears approximately \(5\times\) more often than the second most frequent state [PAGE 3].

State value:
\[
v(s) \in \mathbb{R} \quad [\text{points}]
\]
is the expected point margin by which the offensive team will beat the defensive team from state \(s\) if the score is tied [PAGE 3]. Example: \(v(\langle 4, 4, 7 \rangle) = -2.575\) [PAGE 3].

Play value operator:
\[
\Delta v_i = v(s_i^{\text{end}}) - v(s_i^{\text{start}}) \quad [\text{points/play}]
\]
Worked example: \(v_1 = -0.014\), \(v_2 = 0.109\), hence \(\Delta v = 0.123\) [PAGE 3].

Adjustment optimization (rushing illustration; identical for passes, punts, etc.):
\[
\hat{p}_i = \mu_{\text{rush}} + ro_i + rd_i + \epsilon_i \quad [\text{points/play}]
\]
where \(\mu_{\text{rush}}\) is the league-average points per rush, \(ro_i\) is offensive rushing ability, \(rd_i\) is defensive rushing ability, and \(\epsilon_i\) is the error term [PAGE 4]. Sign convention: positive \(ro\) = above-average offense; positive \(rd\) = below-average (worse than average) defense [PAGE 4].

Constraints (weighted by play counts \(noj\), \(ndj\); total rushing plays \(N\)):
\[
\sum_j \frac{noj}{N} \, ro_j = 0, \qquad \sum_j \frac{ndj}{N} \, rd_j = 0 \quad \text{[PAGE 4]}
\]

Bidirectional adjustment operators:
\[
v^{\text{adj}}_{\text{off}} = v - rd_{\text{defense}} \quad [\text{points}]
\]
\[
v^{\text{adj}}_{\text{def}} = v - ro_{\text{offense}} \quad [\text{points}]
\]
[PAGE 4]. Numerical example: raw \(v = 0.40\), Patriots \(rd = -0.05\) (better than average), Cowboys \(ro = +0.10\):
\[
v^{\text{adj}}_{\text{Cowboys off}} = 0.40 - (-0.05) = 0.45, \qquad
v^{\text{adj}}_{\text{Patriots def}} = 0.40 - 0.10 = 0.30 \quad \text{[PAGE 4]}
\]

Empirical impact:
\[
\overline{|\Delta v^{\text{raw}} - \Delta v^{\text{adj}}|} = 0.06 \text{ pts/offensive play}, \quad
0.07 \text{ pts/defensive play}, \quad p < 0.001 \quad \text{[PAGE 5]}
\]
Seasonal compounding at 130 plays/game:
\[
130 \times 16 \times 0.06 = 124.8 \text{ points/season} \approx 3.8 \text{ wins} \quad \text{[PAGE 5]}
\]
using the Appendix C conversion of approximately 33 points per win [PAGE 5, PAGE 12].

Win-conversion regression (Appendix C):
\[
\widehat{\text{wins}} = 7.9 + 0.03 \times (\text{point differential})
\]
so \(1 \text{ win} \approx 1/0.03 \approx 33.3\) points [PAGE 12].

Passing vs. rushing moments, 2016 [PAGE 7]:
\[
\mu_{\text{pass}} = 0.26 \text{ pts/play}, \qquad
\mu_{\text{rush}} = 0.069 \text{ pts/play}
\]
\[
\sigma_{\text{pass}} = 1.48 \text{ pts/play}, \qquad
\sigma_{\text{rush}} = 0.89 \text{ pts/play}
\]
Shotgun formation, 3rd down, \(\le 5\) yards to go:
\[
\text{rush} = 0.20 \text{ pts/play}, \qquad
\text{pass} = 0.16 \text{ pts/play} \quad \text{[PAGE 7]}
\]

Special teams impact [PAGE 6]:
Cardinals special teams performed 40 points below average, costing \(\approx 1.2\) wins; Chiefs punt-return unit performed 40 points above average.

Breakdown and singularity regimes:
1. Sparse-state singularity: states with \(n(s) < n_{\min}\) lack empirical transitions; WCS values require simulation (historically Pro Quarterback game) or regularization, and the paper does not specify the propagation of this uncertainty into the adjustment layer [PAGE 3, Appendix A].
2. Schedule-graph underdetermination: if the opponent graph is disconnected or severely unbalanced, the simultaneous ro/rd system may not identify unique ratings.
3. Normalization bias: the zero-mean constraint applies league-wide; subsets (red zone, shotgun, specific gaps) need not average to zero, so adjusted values for subsets can inherit subset-specific baseline error [PAGE 8].
4. Stationarity violation: team ratings are assumed fixed across the season; mid-season injuries, personnel changes, and tactical adaptation break the fixed-point assumption.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The historical lineage runs from operations-research foundations to the present schedule-adjustment framework, with explicit multi-week traps at each generational handoff.

Carter and Machol [5] (1971) initiated expected-point thinking by assigning point value to field-position states via averaging the next scoring event [PAGE 3]. Carroll, Palmer, and Thorn [4] (1989) attempted a linear function mapping down-and-distance to value [PAGE 3]. The WCS model [8,9] upgraded this to an infinite-horizon zero-sum stochastic game solved by linear programming over the 19,799-state space [PAGE 3]. More recent alternatives include Yurko et al. [10], who used multinomial logistic regression on play-by-play data, and Brian Burke [1], who grouped similar states and used next-score outcomes [PAGE 3]. The current paper’s contribution is not the raw EP model but the opponent-strength adjustment layer, which previous approaches—including non-public defense-adjusted metrics [PAGE 12, Appendix B]—do not implement with a public, iterative optimization.

Multi-week traps embedded in this lineage:

Trap A — Schedule accumulation: the paper notes that during 2015–2016 the easiest schedule was 4 points per game easier than the toughest, a 64-point seasonal gap worth approximately 2 wins [PAGE 4]. Because schedule strength compounds over 16 games, early-season rating errors propagate into later opponent ratings. If Team A faces a weak rushing defense in Weeks 1–4, its early ro estimate is inflated; those inflated ratings then serve as inputs for opponents’ rd estimates in Weeks 5–8, transmitting error forward through the schedule graph.

Trap B — Simultaneity and endogeneity: offensive and defensive ratings are solved jointly, so each team’s rating is a function of its opponents’ ratings. This creates a recursive dependency where a single mis-specified team (e.g., due to a season-ending injury in Week 3) can bias the ratings of every team on its schedule. The optimization assumes stationarity over the full season, but NFL rosters and game plans are not stationary across weeks.

Trap C — Playoff non-transferability: regular-season schedules are uneven by design; playoff matchups are not drawn from the same opponent distribution. A team’s regular-season adjusted rating may not transfer to the postseason because the quality and style of opposition change discontinuously.

Trap D — College-to-NFL projection: the authors suggest applying the framework to NCAA play-by-play to evaluate draft prospects, noting that college football exhibits even higher unevenness in schedule strength [PAGE 10]. This is a severe extrapolation trap: college offensive systems, player maturity, and defensive schemes differ systematically from the NFL, so college adjusted EP values may not project linearly to NFL expected points.

The paper also anticipates a football WAR extension requiring player-level ratings (e.g., Pro Football Focus or internal scales 1–100), which are unavailable to the authors [PAGE 10]. Without those ratings, the lineage stops at team-unit evaluation and cannot yet descend to individual player replacement value.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The model implicitly assumes that play values are exogenous to defensive alignment, but the source text repeatedly describes a recursive game-theoretic loop in which offense, defense, and game clock co-determine observed expected points.

Crisis habit regression: under pressure—late-game, trailing, or in obvious passing situations—coaches tend to regress to habitual run/pass mixes rather than the EP-optimal mix. The paper notes that if a team calls the same play every time, efficiency should drop [PAGE 7]. This is a behavioral regression to the mean under cognitive load: the play-caller’s crisis habit becomes predictable, and the EP value of that habitual play decays because the defense keys on it.

Counter-trap: defenses execute the mirror response. The shotgun formation is “typically indicative of a passing play” [PAGE 7], so defenses play pass-oriented alignments. When the offense instead runs from shotgun on 3rd and less than 5 yards, it gains 0.20 points on average versus 0.16 for passing [PAGE 7]. This is a counter-trap payoff: the run succeeds precisely because the defense over-committed to the pass expectation. However, the advantage is temporary; if the offense overuses shotgun runs, the defense updates its prior and the counter-trap collapses, eroding the EP differential.

Clock boundary: the WCS model is an infinite-horizon zero-sum stochastic game [PAGE 3], which implicitly assumes no terminal clock. In actual NFL games, end-of-half and end-of-game states are finite-horizon and non-stationary; the value of a state near clock expiration includes terminal payoff (win/loss/tie) that is not captured by expected margin alone. The infinite-horizon recursion therefore breaks down as a veto condition in the final minutes of each half, where clock management dominates state value.

Risk recursion: passing has higher mean (0.26 vs 0.069 pts/play in 2016) but higher variance (σ = 1.48 vs 0.89) [PAGE 7]. A team optimizing for sustained drives may prefer lower-variance rushing despite lower mean EP, because drive success probability is concave in per-play variance. This introduces a recursive risk preference: the EP-optimal single play is not necessarily the drive-optimal sequence, and the model does not resolve this multi-play dynamic programming problem.

Recursive theory-of-mind summary: offense chooses play \(i\) anticipating defense \(d\) anticipates offense’s formation \(f\), all conditioned on clock \(t\). The observed raw play value \(\Delta v_i\) is an equilibrium outcome of this recursion, not an exogenous parameter. The schedule adjustment layer assumes these equilibrium values can be additively decomposed into team ratings, but if the recursion itself shifts week-to-week (crisis habits, counter-traps, clock regimes), the additive ratings absorb non-stationary game-theoretic noise.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The state variable \(f\) (field position) is a geometric quantity measured in yards. The paper identifies the touchback state as a high-leverage physical boundary condition—appearing roughly \(5\times\) more frequently than the second most common state [PAGE 3]. Goal-line states similarly concentrate value because small yardage changes near the end zone produce large EP swings. These physical boundaries create estimation leverage points where sparse data (few goal-line stands per season) can disproportionately affect team ratings.

Biomechanical/personnel layer: The optimization yields team-unit ratings (rush offense, rush defense, punt return, etc.), not player-level ratings [PAGE 4]. The paper explicitly discusses LeVeon Bell versus Paul Perkins as examples of why allowing 0.5 points on a rush is context-dependent [PAGE 9], yet the model cannot separate individual runner quality from offensive-line or defensive-front quality without player-level data. The proposed WAR extension requires player ratings on a 1–100 scale that are unavailable to the authors [PAGE 10]. Therefore any player-level inference from team adjusted EP is a vetoed extrapolation unless external player ratings are integrated.

Weather and environmental layer: The source text makes no adjustment for weather, temperature, wind, precipitation, turf type, or altitude [PAGES 3–12]. These are exogenous physical variables that alter transition probabilities (e.g., wind reduces passing completion and yards-per-attempt; cold affects ball handling; altitude affects aerobic recovery and kicking distance). Because the optimization attributes all deviation from league average to team ratings \(ro\) and \(rd\), weather-driven variance is misattributed to opponent strength if weather correlates with schedule (e.g., late-season cold-weather road games). This is a cross-layer veto: if a team’s schedule is biased toward extreme weather environments, its adjusted ratings will absorb environmental effects rather than pure defensive/offensive ability.

Veto proof conditions: The adjusted-point framework is robust only when (a) state observation counts exceed the sparsity threshold, (b) the schedule graph is sufficiently connected to identify simultaneous ro/rd, (c) play-calling is not so predictable that defensive counters invalidate stationary transition probabilities, and (d) weather and field conditions are either randomized across schedules or explicitly modeled. Where any condition fails, the raw-to-adjusted discrepancy (league average 0.06–0.07 points/play [PAGE 5]) understates the true measurement error for affected subsets.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with falsifiable predictions:

Veto Scenario 1 — Sparse-state singularity.
Condition: A game situation \((d, y, f)\) is observed fewer than \(n_{\min} = 10\) times in a season, so its WCS state value \(v(s)\) relies on simulation or interpolation rather than empirical transition frequencies.
Veto: Plays initiated in such rare states are excluded from the adjustment optimization or regularized toward the league mean, because the raw \(\Delta v\) has high sampling variance.
Prediction: Adjusted play values for rare states (e.g., 4th down and 20+ yards from the own 1–10 yard line) will exhibit week-to-week volatility exceeding 0.10 points per play and will fail out-of-sample root-mean-squared-error stability tests relative to plays in well-populated states.

Veto Scenario 2 — Predictability endogeneity (crisis habit regression).
Condition: An offense uses shotgun formation on 3rd and \(\le 5\) yards at a run rate above an adaptation threshold (e.g., > 60% shotgun runs over a rolling 3-game window), making its tendency exploitable.
Veto: The model’s observed shotgun-rush EP advantage (0.20 vs 0.16 pass [PAGE 7]) is treated as non-stationary; the rush value is decayed or the pass value is inflated until the defensive counter-trap re-equilibrates.
Prediction: Within three weeks of sustained heavy shotgun-run usage, the observed expected points for shotgun rushing on 3rd and \(\le 5\) will decline to \(\le 0.10\) points per play, erasing the current surprise advantage, while passing EP in the same state rises or remains stable.

Veto Scenario 3 — Schedule-strength simultaneity failure.
Condition: A team’s season-long opponent defensive rush rating lies in the top or bottom decile of league deviation (|opponent rd| > 1 league SD), meaning it faces systematically extreme opposition.
Veto: The raw-to-adjusted discrepancy for that team’s offensive plays should exceed the league-average absolute discrepancy of 0.06–0.07 points/play [PAGE 5], and its team rating should regress toward the league mean in the subsequent season if schedule strength normalizes.
Prediction: Teams in the schedule-strength top/bottom decile will show mean absolute raw-vs-adjusted discrepancy greater than 0.10 points per play, and their Year N+1 adjusted offensive ratings will correlate with Year N ratings at \(r < 0.60\), indicating that Year N ratings were contaminated by schedule strength rather than persistent unit ability.
</RLVR_COUNTERFACTUAL_VETOES>