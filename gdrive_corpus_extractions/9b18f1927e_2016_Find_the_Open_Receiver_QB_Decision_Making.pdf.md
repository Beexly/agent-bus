---
source: "2016 Find the Open Receiver QB Decision Making.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 10
model: baidu/ernie-5.5-flash-preview:free
words: 4121
---

<NATIVE_REASONING>
The user wants a deep analysis of a specific academic paper on quarterback decision-making using geospatial analysis. Let me review the invariants carefully.

The system prompt sets up "GSE + GSI Frontier Reasoning Foundry" with strict invariants. This is a roleplay/framing for deep analysis. Let me follow the structure but ensure I:

1. ZERO BETTING LINES - no spreads, totals, moneylines, odds. This is fine since it's academic analysis.
2. ZERO TOY EQUATIONS - I should state formal LaTeX equations, SI units, assumptions, and breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across the exact XML sections.

Let me be careful about the content. This is a legitimate academic paper analysis. There's nothing harmful here. The framing about "counter-trap" and "crisis habit regression" is a bit unusual but essentially asks me to do analytical depth on sports analytics.

I need to be careful with one invariant: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." So I should only use equations that are actually derivable from the paper or that are mathematically honest. The paper gives us actual equations and definitions. Let me extract the real ones:

- Voronoi tessellation (traditional and predictive)
- Predictive tessellation: project position forward 2 frames (2/3 second)
- Zone integrity = projected distance to nearest defender
- Openness classification thresholds
- Expected payoff: P(CMP% for openness factor) * Expected Yards = Expected Payoff Yds
- Elusiveness = actual yardage - expected yardage
- Decision percentile classification

I should be rigorous and cite pages. Let me write this properly. I must maintain the exact XML section headers.

Let me make sure I don't fabricate equations. I should state formal LaTeX for things actually in the paper:

1. Traditional Voronoi: cell for player i = {x : d(x, p_i) ≤ d(x, p_j) ∀ j≠i}, Euclidean distance.

2. Predictive Voronoi: project position forward. p_i(t + Δt) = p_i(t) + v_i(t)·Δt, with Δt = 2/3 s. The paper assumes constant velocity (no acceleration). Then tessellate on projected positions.

3. Zone size = area of Voronoi cell in yards².

4. Zone integrity = min over defenders j of ||p_def,j(t+Δt) - p_rec(t+Δt)|| (projected distance to nearest defender).

5. Openness classification (verbatim from PAGE 4).

6. Expected gain = max y-value of receiver's predicted zone (the furthest downfield point).

7. Expected payoff = P(completion | openness) × Expected Yards.

8. Elusiveness = actual yards − expected yards, summed.

9. Decision percentile: rank target payoff among all options at that frame.

Now let me think about singularity/breakdown regimes for each:
- Voronoi degeneracies: coincident points, ties, boundary effects (field boundaries not handled — unbounded tessellation), collinear players.
- Constant-velocity assumption breaks down: real acceleration, route breaks, ball in flight time not modeled.
- The 3 Hz / 0.25 yard quantization: velocity estimation noise. If position quantization is 0.25 yd and frame interval is 1/3 s, velocity resolution is 0.25/(1/3) = 0.75 yd/s per frame difference. Actually the projection is over 2/3 s. Let me compute: velocity error propagates. Quantization noise amplification in finite differences.

Let me think about the velocity quantization carefully. Position measured to nearest 0.25 yard. So max quantization error ±0.125 yard. Velocity over a frame interval Δt = 1/3 s: v = (x_{t+1} - x_t)/Δt. Error in each position ±0.125, so error in difference up to ±0.25 yard (worst case), divided by 1/3 s = ±0.75 yd/s. When projecting forward 2/3 s, position error from velocity = 0.75 × 2/3 = ±0.5 yard plus the base position quantization ±0.125. So projected position uncertainty ~±0.6 yard. This matters for the integrity thresholds at 2 yards (well-defended boundary).

Information units: I could frame the decision as maximizing expected utility. The percentile ranking is an ordinal statistic.

Let me think about the "expected payoff" equation more. P(CMP%) values from Table 1: wide-open 71%, open 70%, defended 58%, well-defended 52%. These are the completion probabilities used. So expected payoff in yards = p_openness × expected_yards.

Actually there's a subtle inconsistency worth auditing: the openness classes are defined by OR conditions (zone area > X OR integrity > Y). The "or" means a receiver could be classified wide-open by area OR integrity. This creates non-monotonic / overlapping logic. Also the completion percentages for wide-open (71%) and open (70%) are nearly identical — only 1 percentage point apart despite different thresholds, while defended (58%) and well-defended (52%) drop more. That's a gray-zone audit point.

Also there's a subtle issue: expected payoff uses completion probability but NOT expected yards conditional on the openness in a joint way — it's a simple product assuming independence between completion probability and expected yardage. But expected yardage is the max y of the zone, which correlates with openness (bigger zone = more yards). So there could be double counting or the product might not equal true expected value. Let me note this.

Let me also compute the actual numbers to verify Table 3 percentages.
- Ideal: 92 plays, 40.5% (92/227? or 92/231?). 92/227 = 40.5%. 231 total minus 4 N/A = 227. So percentages of total plays use 227 denominator (excluding N/A). 92/227 = 0.4053 = 40.5% ✓. 
- Preferred: 80/227 = 35.2% ✓
- Neutral: 45/227 = 19.8% ✓
- Undesirable: 10/227 = 4.4% ✓
- Sum: 92+80+45+10 = 227 ✓. Ideal+Preferred = 172/227 = 75.8% ✓.

Table 1 completion percentages:
- Wide-open: 49/69 = 71.0% ✓
- Open: 49/70 = 70.0% ✓
- Defended: 39/67 = 58.2% ✓
- Well-defended: 11/21 = 52.4% ✓
- N/A: 0/4 = 0%
- Total: 148/231 = 64.1% ✓ (231 includes the 4 N/A? 69+70+67+21+4 = 231. Completions 49+49+39+11+0=148. 148/231=64.07%. But note the 4 N/A drag it down. Excluding N/A: 148/227 = 65.2%.)

Table 2 elusiveness:
- RB Herron 34 additional / 7 catches = 4.86 ✓
- RB Richardson 55/12 = 4.58 ✓
- RB Bradshaw 31/10 = 3.10 ✓
- TE Fleener 36/15 = 2.40 ✓
- WR Moncrief 9/4 = 2.25 ✓
- WR Wayne 60/27 = 2.22 ✓
- TE Doyle 8/5 = 1.60 ✓
- TE Allen 8/14 = 0.57 ✓
- WR Hilton 20/44 = 0.45 ✓
- WR Nicks -1/10 = -0.10 ✓
- All RB 120/29 = 4.14 ✓
- All TE 52/34 = 1.53 ✓
- All WR 88/85 = 1.04 ✓

Wait, let me check the position sums. RB: Herron 34 + Richardson 55 + Bradshaw 31 = 120 ✓ catches 7+12+10=29 ✓. TE: Fleener 36 + Doyle 8 + Allen 8 = 52 ✓ catches 15+5+14=34 ✓. WR: Moncrief 9 + Wayne 60 + Hilton 20 + Nicks -1 = 88 ✓ catches 4+27+44+10 = 85 ✓. Total catches 29+34+85 = 148 ✓. 

Good, the numbers are internally consistent. This is a verifiable audit.

Now the "Hilton 20 additional / 44 catches = 0.45" — Hilton was targeted a lot but low elusiveness. Interesting: Hilton has the most catches (44) but near-zero elusiveness, meaning he gains close to expected. Wayne has 60 additional yards over 27 catches.

Now let me think about the retro-causal genealogy: Voronoi tessellation history (Dirichlet 1850, Voronoi 1908), applied to sports via Goldsberry (NBA shot charts, "CourtVision"), Maheswaran et al. 2014 Sloan (rebounding), then Hochstedler extends to NFL. The predictive/space-occupation idea relates to "dominant regions" in soccer (Taki & Hasegawa, Fujimura & Kim 2005 "Dominant region in domain of two agents"). Also expected possession value / expected points models. The multi-week trap: if you backtest this over weeks, the constant velocity assumption systematically fails on play-action, screens, and deep routes.

Recursive theory of mind: QB modeling defender's read (Luck looks left to hold safety — Frame 5), defender reacting to QB's eyes, receiver adjusting. Multi-agent theory of mind. Counter-trap: a defense that baits the QB.

Cross-layer veto: biomechanical — a receiver can't actually reach the max-y point of his zone in the constant-velocity projection if he has to decelerate and change direction; ball flight time not modeled (a deep throw takes ~1.5-2 s during which everything changes); weather (wind affects deep throws). These are physical vetoes on the model's ideal-play assumption.

RLVR counterfactual vetoes: 3 verifiable scenarios where the model would mispredict, with testable predictions.

Let me now write this out at 1,000+ words across the exact sections. I need to be careful and rigorous, use real LaTeX, cite pages, and avoid toy equations.

Let me make sure I hit >=400 words in THINK_TRACE and the whole thing >=1000 words. I'll write thoroughly.

Let me be careful: the "SI/information/probability units" — yards (yd), seconds (s), yards² (yd²), yd/s for velocity. Probability dimensionless [0,1]. Completion percentage. I'll keep units explicit.

Let me write the sections.

One thing about the invariant "Never invent fake ratios (Force / Fatigue)" — I will only use equations grounded in the paper. Good.

Let me draft.

Actually, let me reconsider the velocity quantization math to be precise.

Position resolution: nearest 0.25 yard → uniform quantization, half-width Δ/2 = 0.125 yd. Quantization noise variance for uniform quantizer with step q=0.25: σ² = q²/12 = 0.0625/12 = 0.00521 yd², σ ≈ 0.0722 yd.

Velocity via central or forward difference over frame interval τ = 1/3 s: v = (x_{k+1} − x_k)/τ. Variance = 2σ²/τ² = 2(0.00521)/(0.1111) = 0.0937 → σ_v ≈ 0.306 yd/s. Hmm let me recompute: τ = 1/3, τ² = 1/9 = 0.1111. 2 × 0.00521 = 0.01042. /0.1111 = 0.0937. sqrt = 0.306 yd/s. 

Projection forward T = 2/3 s: predicted position error = base position σ (0.0722) plus T × σ_v = 0.6667 × 0.306 = 0.204 yd. Combined (independent): sqrt(0.0722² + 0.204²) = sqrt(0.00521 + 0.0416) = sqrt(0.0468) = 0.216 yd. Worst-case (not RMS): base 0.125 + 0.6667×(2×0.125/0.3333)= 0.125 + 0.6667×0.75 = 0.125 + 0.5 = 0.625 yd. So worst-case projected position error up to ±0.6 yard.

For zone integrity threshold at 2 yards (well-defended boundary), a 0.6 yd error is 30% of the threshold — significant near the boundary. Also nearest-defender distance is a min operator, which is non-smooth (kinks) where two defenders are equidistant — the classification can flip. Good breakdown point.

Now the boundary/edge effect: Voronoi cells of players near field boundary are unbounded; the paper must clip to field. The max-y expected gain point could be at the boundary of the clipped cell or the actual furthest point; if a receiver is near the sideline/end line, the "furthest downfield point in his zone" may be truncated. Also the field is finite (53.33 yd wide, 120 yd long including end zones), and the paper says base offense "between the 20 yard lines" so plays start there but can extend into end zones.

Let me also audit the OR-logic of openness classes. The classes use "or" so a receiver with huge area but tiny integrity (a defender right on top) could still be "wide-open" by area OR. Wait: wide-open = area > 200 OR integrity > 8. So if area = 250 but integrity = 1 yard (defender draped), the receiver is classified wide-open by the area criterion even though a defender is right there. That's a genuine modeling flaw: the OR makes it possible to be "wide-open" while tightly covered by a nearby defender. This is exactly what "zone integrity" was introduced to prevent (PAGE 4: "a defender may still be lurking nearby to ultimately break-up the intended pass"), yet the OR combination reintroduces the problem. Strong audit point. The AND or a combined score would be more consistent. This is a real logical inconsistency worth flagging with the verbatim quote.

Good, this is substantive.

Let me write it all now. I'll aim for depth and precision. I'll write the analysis in English (the source is English, user message is English).

Let me write approximately 1400-1800 words total to be safe.

I need the six exact section headers:
<THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>

Let me write.
</NATIVE_REASONING>

<THINK_TRACE>
The paper (Hochstedler, MIT/Telemetry Sports, 2016 MIT Sloan Research Papers Competition) builds a four-stage estimator chain: (1) discretize player geometry from video, (2) forecast geometry forward, (3) tessellate the forecast into per-receiver territory, (4) collapse territory + nearest-defender proximity into an ordinal openness label, then (5) weight a downfield-distance "expected gain" by a class-conditional completion probability to rank the QB's choice against alternatives. My job is to audit whether each transformation is dimensionally honest, whether the thresholds are internally consistent, and where the pipeline physically or informationally breaks.

Key facts I can verify directly. Sampling: 22 players, 3 frames per second (τ = 1/3 s), quantized to nearest 0.25 yd, 231 base-offense pass plays, 2014 Colts [PAGE 2]. "Base offense" is operationally defined: 1st & 2nd down, <15-point margin, >5 minutes remaining in a half, between the 20-yard lines [PAGE 2]. Projection horizon: two frames = 2/3 s at constant velocity, no acceleration [PAGE 3, PAGE 7]. The gray-zone audit starts here: three independent soft spots.

First soft spot — quantization-to-velocity noise amplification. Positions are rounded to q = 0.25 yd, so per-axis quantization error is uniform with σ_pos = q/√12 ≈ 0.072 yd, worst-case ±0.125 yd. Velocity is a finite difference v ≈ (x_{k+1} − x_k)/τ with τ = 1/3 s; error propagation gives σ_v = √(2σ_pos²)/τ ≈ 0.31 yd/s (RMS), worst-case 0.75 yd/s. Projecting T = 2/3 s forward, the predicted-position error is dominated by the velocity term: worst case ≈ 0.125 + (2/3)(0.75) ≈ 0.625 yd. The "well-defended" boundary sits at integrity < 2 yd [PAGE 4]; a ±0.6 yd error is ~30% of that gate, so classifications are unstable precisely where they matter most.

Second soft spot — the OR-combinator. Openness classes are defined with "or" [PAGE 4]: "Wide-open = zone area > 200 yards² or integrity > 8 yards." This is logically leaky. A receiver with a 250 yd² cell (huge territory) but a defender 0.5 yd away satisfies "wide-open" via the area clause while being physically draped. That directly contradicts the stated purpose of integrity — verbatim, "a defender may still be lurking nearby to ultimately break-up the intended pass" [PAGE 4] — because the disjunction lets area override a smothering defender. An AND gate, or a joint monotone score, would be self-consistent; the OR reintroduces the exact failure mode integrity was built to remove.

Third soft spot — the payoff factorization. PAGE 7 defines Expected Payoff Yds = P(CMP% for openness factor) × Expected Yards. This treats completion probability and expected yardage as independent factors indexed only by the ordinal class. But expected yardage is itself the max-y of the same predicted zone that produced the openness class [PAGE 4, PAGE 5]. Wide-open ⟹ large cell ⟹ large max-y. So the two multiplicands are strongly positively correlated through a shared latent (zone size), and their product is not the conditional expectation E[yards | class]; it is E[yards | class] scaled by a marginal completion rate that ignores yards-after-catch variance. The model therefore rewards big-cell throws super-linearly (large × large), which may explain why "ideal or preferred" decisions hit 75.8% [PAGE 7] — the metric partially rewards its own input.

I cross-checked the arithmetic and it is internally consistent (not fabricated): Table 1 rates 49/69=71%, 49/70=70%, 39/67=58.2%, 11/21=52.4%, total 148/231=64.1% [PAGE 4]. Table 3 denominators exclude the 4 N/A plays (227): 92/227=40.5%, 80/227=35.2%, cumulative ideal+preferred=172/227=75.8% [PAGE 7]. Table 2 sums reconcile by position: RB 34+55+31=120 additional yards / 29 catches = 4.14; WR 9+60+20+(−1)=88 / 85 = 1.04 [PAGE 6]. The wide-open→open completion gap is only 1 percentage point (71 vs 70) despite different thresholds — statistically these two top classes are barely separable at n≈70, a sample-size caveat the paper does not foreground.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
All quantities in SI-adjacent sports units: length in yards (yd), time in seconds (s), area in yd², velocity in yd·s⁻¹, probability dimensionless on [0,1].

1) Position and constant-velocity forecast. Let receiver $i$ have measured position $\mathbf{p}_i(t)=(x_i,y_i)$ in yd at frame $t$. Instantaneous velocity by forward difference over $\tau=1/3\,\text{s}$:
$$\mathbf{v}_i(t)=\frac{\mathbf{p}_i(t+\tau)-\mathbf{p}_i(t)}{\tau}.$$
Predictive projection over $T=2/3\,\text{s}$ [PAGE 3]:
$$\hat{\mathbf{p}}_i(t+T)=\mathbf{p}_i(t)+\mathbf{v}_i(t)\,T.$$
Assumption (stated limitation, PAGE 7): "projects instantaneous velocity as a constant (no acceleration)." Breakdown regime: any route with a break/cut/deceleration violates $\dot{\mathbf v}=0$; error grows as $\tfrac12\lVert\mathbf a\rVert T^2$.

2) Traditional Voronoi cell (baseline, PAGE 3): $V_i=\{\mathbf{x}:\lVert\mathbf{x}-\mathbf{p}_i\rVert_2\le\lVert\mathbf{x}-\mathbf{p}_j\rVert_2,\ \forall j\ne i\}$, Euclidean. Singular/degenerate regimes: coincident seeds $\mathbf p_i=\mathbf p_j$ (undefined bisector), collinear/cocircular seeds (measure-zero ties), and unbounded boundary cells for edge players (needs field clipping; not described).

3) Predictive cell: same definition evaluated on $\{\hat{\mathbf p}_k(t+T)\}$. Zone size $A_i=\operatorname{area}(V_i)$ in yd² [PAGE 3].

4) Zone integrity (PAGE 4): projected nearest-defender distance
$$d_i(t+T)=\min_{j\in \mathcal D}\lVert \hat{\mathbf p}_j(t+T)-\hat{\mathbf p}_i(t+T)\rVert_2 .$$
Breakdown: the $\min$ is non-differentiable on the set $\{$two defenders equidistant$\}$; classification can flip across that ridge. Combined with the σ≈0.6 yd forecast error above, the 2-yd well-defended gate is the least robust boundary.

5) Openness class $c_i\in\{$wide-open, open, defended, well-defended$\}$ (verbatim thresholds, PAGE 4): wide-open $=A_i>200 \lor d_i>8$; open $=A_i\in[100,200]\lor d_i\in[4,8]$; defended $=A_i\in[50,100]\lor d_i\in[2,4]$; well-defended $=A_i<50 \lor d_i<2$. Units: yd² and yd respectively. Logical flaw: the $\lor$ is non-monotone (a smothered receiver with a large cell reads "wide-open").

6) Expected gain (PAGE 4): the maximum downfield coordinate of the predicted cell,
$$G_i=\max_{\mathbf{x}\in V_i} y(\mathbf{x}),$$
in yd; e.g., Wayne's cell gives $G=+26$ yd at the decision frame [PAGE 5].

7) Expected payoff (PAGE 7): with class-conditional completion rate $p_{c}$ from Table 1,
$$U_i = p_{c(i)}\cdot G_i\quad[\text{yd}].$$
$p\in\{0.71,0.70,0.58,0.52\}$. Independence assumption between completion and yardage is the identified bias.

8) Decision percentile: rank $U_{\text{target}}$ within the play's option set; bins at 80/50/20 percentile → ideal/preferred/neutral/undesirable (PAGE 7). Ordinal statistic; ties and small option counts (often 2–5 eligible receivers) make percentiles coarse.

9) Elusiveness (PAGE 6): per receiver, summed residual $E=\sum_{\text{catches}}(y_{\text{actual}}-G)$, yd; reported as mean $E/\text{catches}$. RB 4.14 > TE 1.53 > WR 1.04 yd·catch⁻¹ [PAGE 6].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage is explicit and traceable. Voronoi's construction descends from Dirichlet (1850) and Voronoi (1908) tessellations of metric space — partition space by nearest seed. Its sports entry point is Kirk Goldsberry's NBA "CourtVision"/shot-zone work, itself cited here [PAGE 9, ref 4] and via Maheswaran et al., "The Three Dimensions of Rebounding" (MIT Sloan, 2014) [PAGE 9, ref 3], which used Voronoi area to apportion rebounding credit. Hochstedler's contribution is the transfer from static (basketball, "where a player stands") to predictive (football, "where a player will be") tessellation [PAGE 2]. A parallel lineage exists in soccer spatial analysis — Taki & Hasegawa's "dominant region" and Fujimura & Kim's dominant-region-with-velocity (2005) — which independently arrived at the same idea: inflate a player's territory by reachability-in-time rather than distance. The paper does not cite that soccer thread, a genealogical gap.

The multi-week trap lives in the constant-velocity assumption. Across a season (or a multi-week backtest), the estimator will systematically mis-price any concept whose value depends on acceleration or route breaks: play-action (buy time, receivers stem then break), slants/crossers (sharp cuts violate $\dot{\mathbf v}=0$), screens (deliberate deceleration), and deep posts (ball-flight time ≫ 2/3 s). Because error scales with $\lVert\mathbf a\rVert T^2$, these concepts accrue negative bias that accumulates week over week, masquerading as a stable "the model underrates X" signal when it is really a projection-horizon artifact. The empirical fingerprint — running backs dominating elusiveness (4.14 yd) — is partly real (YAC on the perimeter) but partly this artifact: RB routes are shorter and straighter near the line, so the constant-velocity cell is least wrong exactly where RBs operate, inflating their residual relative to WRs on breaking routes.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The play is a three-level theory-of-mind stack, and the paper captures only the top layer. Appendix I is explicit about Level-2 reasoning: "Luck looks left to hold off the free safety" (Frame 5) — the QB models the safety's model of the QB. The safety is running Level-2 (predict QB's throw) while Luck runs Level-3 (predict safety's prediction) to manipulate him. Frame 8: "With the corner staying true to his assignment, Luck observes Wayne's zone starting to open" — the QB waits for the defender's commitment to resolve before acting; this is optimal against a Level-(k−1) defender because information is extracted by inducing a commitment. Frame 9: Luck throws "just as his zone reaches its maximum," i.e., he times the throw to the argmax of $A_i(t+T)$ [PAGE 10].

Crisis-habit regression: the base-offense filter (>5 min left, <15-pt margin, between the 20s) [PAGE 2] deliberately excises garbage-time and clock-forced behavior, so the 75.8% ideal/preferred rate reflects non-crisis reads. That is a virtue for isolating decision skill but a trap for prediction: two-minute drills, backed-up situations, and blitz-heavy obvious-passing downs (all excluded) are exactly where QB habits regress toward checkdowns (lowest-variance option), collapsing the option set and inflating apparent "ideal" percentile scores because the comparison population shrinks.

Counter-trap vs clock: a defense that knows the estimator rewards big cells will bait — show a soft zone early (large $A_i$, tempting high $U_i$), then rotate a robber into the max-y point after the throw. The model, blind to Level-2 defender intent and to ball-flight time, will keep grading the bait throw as "ideal." The multi-week tell: a QB repeatedly "ideal" by this metric yet turnover-prone on those exact concepts is being out-modeled one level up, not making good decisions.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical vetoes on the "pure play" ideal (PAGE 4: "an ideal throw... matched with an ideal catch... ideal tackle").

Veto 1 — ball-flight time is not modeled. The forecast horizon is 2/3 s [PAGE 3], but a throw to Wayne's +26 yd point (PAGE 5) has flight time $t_f\approx \frac{\text{range}}{v_{\text{ball}}}$; at ~20 yd·s⁻¹ release speed a 26-yd throw spends >1.3 s airborne — roughly $2\times$ the projection horizon. Every defender and receiver re-optimizes during flight, so $G_i$ (max-y at release+$T$) is not the catch point. Verdict: upheld — the expected-gain map is systematically optimistic on intermediate/deep throws.

Veto 2 — kinematic reachability. The max-y vertex of a Voronoi cell can lie behind or lateral to a receiver; reaching it requires the instantaneous velocity $\mathbf v_i$ to point there and the receiver to sustain it. A cell vertex requiring a cut is biomechanically unreachable within the constant-velocity model (the paper even concedes no acceleration profiles, PAGE 7). The 21-yd actual vs +26 expected on Wayne (PAGE 4/5) is exactly this: "Luck slightly underthrows Wayne, causing Wayne to flatten out his route." Verdict: upheld — expected gain overstates attainable gain whenever the argmax vertex is off the current velocity vector.

Veto 3 — weather/environment. Wind materially alters deep-ball trajectory and range; the model has no wind/temperature term, so on high-wind days the max-y catch point is unreachable and $p_c$ (calibrated on all-weather aggregate) is mis-estimated. Field-surface traction changes cut quality (breaks the constant-velocity premise harder). Verdict: upheld as an unmodeled covariate that biases deep concepts.

Net: the geometric core (Voronoi area + nearest-defender distance) is sound and verifiable; the ideal-play expected-gain layer is physically optimistic and should be treated as an upper bound, not a point prediction.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three falsifiable scenarios where the pipeline mispredicts, each with a checkable prediction on the 2014 Colts data or a held-out season.

Veto A — OR-combinator misclassification. Prediction: among plays labeled "wide-open" by the area clause ($A>200$) but with integrity $<2$ yd, completion% will be materially below the 71% wide-open aggregate and closer to the well-defended 52% [PAGE 4]. If the paper's own frame data were re-tabulated splitting wide-open into area-qualified vs integrity-qualified, the integrity-qualified subset should show higher completion. Falsifier: no completion gap between the two subsets.

Veto B — acceleration-concept bias. Prediction: on routes with a documented break within 2/3 s of the throw (slants, crossers, digs), expected gain $G_i$ will exceed actual gain by a larger margin than on streaks/go-routes, because the constant-velocity cell extends past the post-cut position. Measurable as a route-type × (actual − expected) interaction in Figure 6's residuals [PAGE 5]. Falsifier: uniform residual across route types.

Veto C — option-set-shrinkage in forced situations. Prediction: rerun the percentile scoring including the excluded 3rd/4th-down, <5-min, and >15-pt plays; the "ideal+preferred" rate should rise (smaller option sets after clock/score pressure push the chosen checkdown toward a higher within-play percentile) even as true difficulty rises. This exposes the 75.8% figure [PAGE 7] as filter-dependent. Falsifier: percentile distribution invariant to situational filtering.

Cross-check anchor for all three: the printed aggregates reconcile arithmetically (Tables 1–3 verified above), so any of these vetoes failing would implicate the mapping from geometry to utility — not a data-entry error.
</RLVR_COUNTERFACTUAL_VETOES>

Bottom line: the geospatial core is a clean, verifiable extension of Dirichlet–Voronoi territory with a defensible predictive twist, and its headline statistics are internally consistent. The weak links are the disjunctive openness gate, the independence assumption in the payoff product, the missing ball-flight/acceleration/weather terms, and a completion-probability model that omits receiver depth from the line of scrimmage (its own stated limitation [PAGE 7]). Treat expected gain as an upper bound and the 75.8% decision-quality figure as filter-conditioned rather than absolute.