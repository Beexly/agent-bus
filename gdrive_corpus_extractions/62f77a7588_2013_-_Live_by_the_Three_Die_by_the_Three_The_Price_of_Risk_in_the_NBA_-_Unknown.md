---
source: "2013 - Live by the Three, Die by the Three The Price of Risk in the NBA - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2013"
pages: 18
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 6492
---

<NATIVE_REASONING>
The user wants a deep analysis of the provided research paper "Live by the Three, Die by the Three? The Price of Risk in the NBA" by Matthew Goldman and Justin M. Rao (2013 MIT Sloan Sports Analytics Conference paper). 

I need to follow strict invariants:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important constraints:
- No betting lines terminology.
- Must cite exact page markers [PAGE N] from the source text. The source text has page markers like "2013 Research Paper Competition Presented by:" followed by page numbers (1, 2, 3, etc.). I need to map content to these page numbers.
- Must state formal LaTeX equations with units, assumptions, breakdown regimes.
- Must be >= 1000 words total across sections.

Let me analyze the source text structure and page numbers:

Page 1: Title, abstract, beginning of Introduction, mentions footnote 1.
Page 2: Continuation of Introduction, mention of α, Figure 1 mention.
Page 3: Section 3 Modeling, usage curve, FOC, Proposition 1.
Page 4: Proposition 2, Proposition 3, Proposition 4, Section 4 Results.
Page 5: Section 4.1 Frequency, Table 1, discussion of β1, β2.
Page 6: Section 4.2 Efficiency, Table 2, discussion of β coefficients.
Page 7: Section 4.3 Rubber-band effect, clutch performance, Figure 2 discussion.
Page 8: Conclusion, beginning of references.
Page 9: References continued, Appendix 6.1 Figures, Appendix Figure 1 mention.
Page 10: Appendix 6.2 Model with defensive adjustment, constraints 1-5, FOCs.
Page 11: Proof of Proposition 2, Cramer's Rule, sign analysis.
Page 12: Proof of Proposition 3, comparative statics.
Page 13: Proof of Proposition 1 (baseline model), monopolist analogy.
Page 14: Appendix 6.4 Parametric model of win probability, CLT, Probit.
Page 18: End? Actually the text says PAGES: 18 but the content ends at page 14 in the provided text? Wait, looking at the source text, it seems to end at page 14 based on the visible page markers ("2013 Research Paper Competition Presented by: 14"). But the user said PAGES: 18. I should cite only pages present in the text (1-14 visible). Wait, let me look more carefully. The text shows page numbers 1 through 14 explicitly. I should cite exact [PAGE N] markers where available. I'll cite pages 1-14 as they appear.

Let me draft each section:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. I need to derive the theoretical model step by step, identify gray zones (e.g., defensive adjustment ambiguity, motivational term canceling out of FOC, garbage time exclusion, shot clock >14 exclusion, lineup fixed effects). Discuss singularity/breakdown regimes (α near 1.5, garbage time <5% win chance, end of quarter shots, fast breaks). Multi-hop: α definition → usage curve → FOC → Proposition 4 → empirical test → violation by leading team → rubber band effect → clutch quality interaction. Gray zones: The model allows motivational term to cancel from FOC but Proposition 4 still holds; defensive adjustment makes u3 ambiguous; trailing efficiency boost confounded with complacency vs motivation; parametric win probability assumes normal distribution of possession outcomes (CLT) which breaks down for small N (late game). Also the win value calculation uses nearby states which may have sparse data late in game.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX. I need to write out:
- α definition: WV3 = α * WV2. Nominal ratio 1.5.
- α as risk proxy footnote: p2=0.50, p3=0.33, expected nominal value 1 point each. Variance 3: 3²*0.33*0.66=1.96; variance 2: 2²*0.5*0.5=1. If α=1.7, expected utility 3: 0.33*1.7*WV2=0.561*WV2 vs 2: 0.5*WV2, so 3 is 12% more win value.
- Usage curve: φ(u3) average probability of success for 3-pointers when fraction u3 ∈ [0,1]. Downward sloping: dφ/du3 < 0, dβ/du2 > 0 (where β is 2pt success).
- Maximization problem: max_{u3} [α * φ(u3) * u3 + β(1-u3) * (1-u3)]? Actually from text: marginal returns. Left side: φ(u3) + φ'(u3)*u3. Right side similar for 2s.
- FOC: α[φ(u3) + u3φ'(u3)] = [β(1-u3) + (1-u3)β'(1-u3)?] Need to be careful. Text says: "The first order condition states that the marginal returns to 2-pointers and 3-pointers should be equal. The left side gives the marginal returns to shooting a 3-pointer. Shooting an extra 3-pointer returns the current average value α * φ(u3), but it also impacts the average value of all the other 3-pointers taken u3 by a degree given by the slope of the usage curve (φ'(u3))." So marginal value of 3s: α[φ(u3) + u3 φ'(u3)]. Similarly for 2s: [β(1-u3) + (1-u3) β'(1-u3)]? Actually text implies symmetric.
- Empirical usage equation: Prob(3PA_p) = β0 + β1 * α_p * 1{α_p ≤ 1.5} + β2 * α_p * 1{α_p > 1.5} + lineup FEs.
- Empirical efficiency equation: Expected points = β1 * 1{3PA_p} + β2 * α_p * 1{α_p ≤ 1.5} + β3 * α_p * 1{α_p > 1.5} + β4 * 1{3PA_p} * α_p * 1{α_p ≤ 1.5} + β5 * 1{3PA_p} * α_p * 1{α_p > 1.5} + lineup FEs.
- Probit win probability: P(win) = Φ((N(μ_h - μ_a) + margin)/sqrt(N(σ_h² + σ_a²))) roughly from CLT. Equation (8): Φ((Sh,N + N μ_h - Sa,N - N μ_a)/sqrt(N(σ_h² + σ_a²))).
- Impact of a point: derivative of (8) w.r.t. points.
- Proposition 4: as α increases, nominal value of 3's falls relative to nominal value of 2's.
- Units: points per shot, win probability dimensionless [0,1], α dimensionless ratio, time in minutes/possessions, score margin in points.
- Breakdown regimes: garbage time (<5% win chance), end-of-quarter, shot clock >14 (fast breaks), small N (CLT breakdown late game), α exactly 1.5 (risk neutral kink).

<RETROCAUSAL_GENEALOGY>: Historical lineage. Skinner (2011) "Scoring strategies for the underdog" [7]. Oliver (2004) "Basketball on paper" [5] usage curves. Goldman & Rao (2011) allocative/dynamic efficiency [2]. Goldman & Rao (2012) effort vs concentration [3]. Pope & Berger (2011) trailing by 1 at halftime wins more [1]. Kahneman & Tversky (1979) prospect theory/loss aversion [8]. Rick & Loewenstein (2008) hypermotivation [6]. Related paper [4] motivational loss aversion. Multi-week traps: teams that lead late and tighten up (risk aversion) allow comebacks; trailing teams exploit risk-loving behavior; clutch performance favors high-quality offense/defense, creating a "rich get richer" in close games. The "rubber band effect" means close games are more frequent than expected, so clutch skill is overvalued relative to baseline.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. Leading teams regress to crisis habits: as lead shrinks (α increases toward 1.5 from below), they should become more risk-neutral but instead become more risk-averse (shoot fewer 3s, higher efficiency on those 3s due to usage curve). This is a "tightening up" habit under pressure. Counter-trap: trailing teams correctly increase 3 usage and accept lower 3% (Proposition 4 holds), but the defense may not adjust fast enough (Proposition 3 ambiguity). Clock: as time remaining → 0, α diverges for trailing team (convexity in Appendix Fig 1), making variance valuable; leading team's α decreases (risk aversion should increase) but they over-correct. The recursive ToM: offense thinks defense will adjust to 3s, so offense varies attack; defense thinks offense will shoot more 3s, so defense allocates d3; if offense flexibility > defense flexibility, u3 rises. Leading teams fail this recursion because they misprice risk (β4 positive instead of negative).

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. This is tricky because the paper is about basketball shot selection, not physical/biomechanical/weather. However I can frame it as: 
- Physical layer: shot clock >14 possessions excluded (fast breaks have different biomechanical considerations—transition vs half-court). End-of-quarter shots excluded (desperation heaves, biomechanically different release mechanics, no defensive setup).
- Biomechanical: usage curve arises from shot clock constraints (24-second shot clock); to take more 3s, offense must accept lower quality opportunities on margin (footnote 3). This is a biomechanical/opportunity arrival constraint.
- Weather: indoor sport, no weather veto applicable; but the paper controls for home court in parametric model.
- Veto proof: The empirical design excludes garbage time (<5% win probability) because actions lack consequence; excludes fast breaks and end-of-quarter because strategic considerations differ. Lineup fixed effects (5-man offensive δ and defensive γ) veto substitution bias. The "veto" is that any observed efficiency change must survive these exclusions and fixed effects; Proposition 4 survives for trailing teams (β5 significantly negative), fails for leading (β4 positive).
- Breakdown: If defensive adjustment technology differs between leading/trailing, usage asymmetry (Table 1) cannot be solely attributed to suboptimal leading behavior. Motivational term cancels from FOC but Proposition 4 remains robust because it's about nominal efficiency gap, not usage.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or just verifiable scenarios. I need 3 counterfactual veto scenarios with predictions. Since no betting lines, frame as game-state counterfactuals:
1. Veto: If a leading team with α increasing (game getting closer) is forced to maintain constant 3-point usage (u3 fixed) rather than reducing it, then predicted nominal 3-point efficiency should NOT rise (no usage-curve movement), violating observed β4 > 0. Prediction: efficiency differential between 3 and 2 would remain flat or decline per Proposition 4, not increase.
2. Veto: If defensive adjustment capability is exogenously equalized (e.g., same defensive personnel and scheme regardless of score state), then leading team's reduction in 3 usage (β1 < 0) cannot be explained by defensive flexibility; it must be behavioral risk aversion. Prediction: β1 remains negative even when defense is held constant, confirming suboptimality.
3. Veto: In garbage time (win probability <5%), α should be undefined or near 1.5; the optimality condition (Proposition 4) should break down. Prediction: β5 should be statistically indistinguishable from zero in garbage-time subsample, and β1, β2 should lose significance because actions lack win-value consequences.
Need to include exact predictions and what would falsify the paper's claims.

Now word count: Need >=1000 words total. I'll aim for ~1500-1800 words across sections. Each section must be substantive.

Citations: Use [PAGE N] format. I need to map:
- Abstract: Page 1 (starts after title, before page number 1? Actually title page then "1" appears after abstract? Let's see: Text shows abstract, then "2013 Research Paper Competition Presented by:" then "1" at end of abstract section? Looking: After abstract text, there is "1Rick and Loewenstein..." then "2013 Research Paper Competition Presented by:" then "1". So abstract is page 1? Actually page number "1" appears after the footnote text. I'll cite abstract as [PAGE 1].
- Introduction start: [PAGE 1] continues to [PAGE 2].
- α definition and footnote 2: [PAGE 2].
- Section 3 and usage curve: [PAGE 3].
- Proposition 1: [PAGE 3].
- Proposition 2,3,4: [PAGE 4].
- Section 4.1 and Table 1: [PAGE 5].
- Section 4.2 and Table 2: [PAGE 6].
- Section 4.3 rubber band: [PAGE 7].
- Conclusion: [PAGE 8].
- Appendix: [PAGE 9]-[PAGE 14].

I'll cite specific pages for equations and quotes.

Verbatim quotes: I need to include some exact quotes with page citations.
Examples:
- "As time remaining decreases, the trailing team _should_ place an increasingly positive value on risk; the opposite holds for the leading team." [PAGE 1]
- "3-point attempts have roughly double the per-shot variance as 2-point attempts, but a team should be “risk neutral.”" [PAGE 1]
- "Proposition 4 _If we allow for a motivational impact of trailing and defensive adjustment, then as ↵ increases the nominal value of 3’s falls relative to the nominal value of 2’s._" [PAGE 4]
- "Leading teams shoot _fewer_ 3’s as their preference for risk increases and these 3’s have _higher_ point value." [PAGE 2] Actually this quote is on page 2 (Introduction continuation). Let me check: "Leading teams shoot fewer 3’s as their preference for risk increases and these 3’s have higher point value." appears in Introduction on page 2? Looking at text: After abstract, page 2 starts with "In order to optimize..." Then later: "Leading teams shoot fewer 3’s as their preference for risk increases and these 3’s have higher point value." Yes, page 2.
- "For an average team it’s harder to score in clutch moments, but very good offenses actually do better in the clutch and bad defenses get worse." [PAGE 8] (Conclusion) or [PAGE 7] (Section 4.3). It appears on page 7 in Section 4.3 discussion: "It is clear that on average teams do worse in clutch moments..." and page 8 conclusion. I'll cite [PAGE 7] for the plot description and [PAGE 8] for conclusion restatement.

Need to be careful: The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I must use [PAGE N] markers. The source text has page numbers embedded like "2013 Research Paper Competition Presented by: 1", "2013 Research Paper Competition Presented by: 2", etc. I'll reference those.

Now let's write. I must avoid betting terms entirely. No "spread", "total", "moneyline", "odds", "line", "bookmaker", "wager", "bet". Use "win probability", "point margin", "game state", etc.

Structure:
<THINK_TRACE> ... </THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS> ... </SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY> ... </RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND> ... </RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION> ... </CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES> ... </RLVR_COUNTERFACTUAL_VETOES>

I'll write each section with LaTeX. Need to ensure LaTeX is formal and correct.

Let's draft content mentally:

THINK_TRACE:
Start with the objective: win probability p(X). Define WV2 and WV3. α = WV3/WV2. Nominal 1.5. Risk neutrality early. As time decreases, trailing team's α > 1.5 (risk loving), leading team's α < 1.5 (risk averse). Gray zone 1: α is estimated parametrically via Probit with CLT assumption (Appendix 6.4). Breakdown when N (remaining possessions) is small; normal approximation poor late game. Gray zone 2: garbage time exclusion (<5% win chance) removes states where optimization is meaningless, but creates selection bias if teams intentionally foul etc. Gray zone 3: motivational term cancels from FOC (multiplicative on usage curves), yet Proposition 4 still requires nominal 3% to fall relative to 2% as α rises. This is robust because it doesn't depend on the motivational term's sign, only on the envelope theorem/usage curve slope. Gray zone 4: Defensive adjustment makes optimal u3 ambiguous (Proposition 3), so observed leading-team reduction in 3s could be defensive, not behavioral. However trailing team's increase in 3s plus fall in efficiency suggests offense flexibility > defense flexibility. Gray zone 5: The "motivating effect of losing" (β3 > β2 > 0) could be trailing-team motivation or leading-team complacency; data cannot distinguish (paper admits). Multi-hop: α ↑ → marginal value of 3s ↑ → u3 ↑ if no defense → but with defense, d3 ↑ → φ3 ↓ → nominal efficiency ↓ (Prop 2) → empirical β5 < 0 for trailing confirms. For leading: α ↑ (toward 1.5) should → risk neutral → u3 constant or slight ↑, but observed u3 ↓ (β1 < 0) and 3% ↑ (β4 > 0). This is a violation. Clock: fourth quarter α varies widely; trailing convexity in Appendix Fig 1. Breakdown regime: end-of-quarter shots excluded because they are desperation, not strategic shot selection.

Need >=400 words here.

SOURCE_OPERATORS_AND_EQUATIONS:
List equations with page citations.
1. Win value: WV_3 = α WV_2. Nominal α_0 = 1.5. Units: dimensionless ratio. [PAGE 1]-[PAGE 2].
2. Footnote 2 variance: Var_3 = 3^2 * 0.33 * 0.66 = 1.96; Var_2 = 2^2 * 0.5 * 0.5 = 1.0. If α=1.7, EU_3 = 0.33*1.7*WV_2 = 0.561 WV_2 vs EU_2 = 0.5 WV_2; 12% premium. [PAGE 2].
3. Usage curve: φ(u_3), u_3 ∈ [0,1], dφ/du_3 < 0. Average 2pt success β(u_2) with u_2 = 1-u_3, dβ/du_2 > 0 (equivalently dβ/du_3 < 0). [PAGE 3].
4. FOC (no defense): α[φ(u_3) + u_3 φ'(u_3)] = [β(u_2) + u_2 β'(u_2)]? Need to be careful. Text says marginal returns equal. Left side: current average value α φ(u_3) plus impact on all other 3-pointers u_3 φ'(u_3). Right side similar for 2-pointers. I'll write: α{φ(u_3) + u_3 φ'(u_3)} = Ψ(1-u_3) where Ψ is the marginal return to 2s. [PAGE 3].
5. Empirical usage: Pr(3PA_p = 1) = β_1 α_p 1{α_p ≤ 1.5} + β_2 α_p 1{α_p > 1.5} + δ_{Off_p} + γ_{Def_p} + ε_p. [PAGE 5].
6. Empirical efficiency: E[points_p] = β_1 1{3PA_p} + β_2 α_p 1{α_p ≤ 1.5} + β_3 α_p 1{α_p > 1.5} + β_4 1{3PA_p} α_p 1{α_p ≤ 1.5} + β_5 1{3PA_p} α_p 1{α_p > 1.5} + δ_{Off_p} + γ_{Def_p} + ε_p. [PAGE 6].
7. Proposition 4: ∂(nominal 3% − nominal 2%)/∂α < 0 for α > 1.5; robust to motivational term and defensive adjustment. [PAGE 4].
8. Parametric win probability (CLT): Pr(H wins) = Φ( [ (S_{h,N} + N μ_h) − (S_{a,N} + N μ_a) ] / sqrt[N(σ_h² + σ_a²)] ). [PAGE 14].
9. Marginal win value of a point: ∂Pr/∂S_h = φ(z) / sqrt[N(σ_h² + σ_a²)] where z is the standardized margin. [PAGE 14].
10. Breakdown/singularity: N → 0 (last possession) violates CLT normal approximation; α → ±∞ as time remaining → 0 for extreme margins; garbage time p(win) < 0.05 excluded. [PAGE 4]-[PAGE 5], [PAGE 14].

Need units and assumptions for each.

RETROCAUSAL_GENEALOGY:
Trace lineage: Skinner 2011 [7] underdog risk as ally; Oliver 2004 [5] usage curves; Goldman & Rao 2011 [2] allocative/dynamic efficiency; Goldman & Rao 2012 [3] effort vs concentration; Pope & Berger 2011 [1] halftime trailing by 1; Kahneman & Tversky 1979 [8] loss aversion; Rick & Loewenstein 2008 [6] hypermotivation. Goldman & Rao [4] motivational loss aversion (related). Multi-week traps: Over a season, teams that lead late and over-correct to 2s surrender win probability; trailing teams that hunt 3s create comeback opportunities. Because clutch moments are more frequent than expected (rubber band), teams with high baseline offensive efficiency gain disproportionately (slope 1.65, t=7.27 [PAGE 7]); defensive quality also matters (slope -1.09, t=4.20 [PAGE 7]). The trap: evaluating teams by regular-season efficiency ignores convexity in clutch; a mediocre offense that collapses in clutch (negative bonus) underperforms in close games, while great offenses expand their edge.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: Leading team as clock winds down should move α toward 1.5 (risk neutral). Instead, they regress to risk-averse crisis habit: fewer 3s, more 2s (Table 1 β1 = -0.105, t=-8.21 [PAGE 5]). This is a first-order belief error: they think defense will clamp down on 3s, so they preemptively abandon them, but the data show their 3s become *more* efficient (β4 > 0 [PAGE 6]), consistent with movement down a downward-sloping usage curve, not defensive adjustment. Counter-trap: Trailing team correctly increases 3 usage (β2 = 0.231, t=13.40 [PAGE 5]) and accepts lower 3% (β5 = -0.71, t=-5.92 [PAGE 6]). The offense varies attack faster than defense adjusts resources (Proposition 3 condition). Clock: In fourth quarter, α for trailing team spikes (Appendix Fig 1 Panel 2 [PAGE 2]/[PAGE 9]); the value of variance rises as possessions dwindlate. Leading team's α falls below 1.5, but they over-shoot risk aversion. Recursive depth: Offense L1 thinks "defense will guard 3s more"; Defense L2 thinks "offense will shoot more 3s"; if offense flexibility > defense flexibility, u3 rises. Leading teams fail at L1 because they misperceive their own risk preference, shooting fewer 3s precisely when the win value of 3s is becoming less punitive relative to nominal.

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer: Shot clock >14 excluded (fast breaks; biomechanically distinct transition opportunities, no half-court defensive set). End-of-quarter shots excluded (desperation heaves, release mechanics under time pressure, no defensive rebound positioning). Garbage time (<5% win probability) excluded because actions lack consequence. [PAGE 5].
Biomechanical layer: Usage curve downward slope arises from 24-second shot-clock opportunity arrivals; to increase u3, offense must accept lower-quality 3s on margin (footnote 3 [PAGE 3]). This is a physical constraint on shot quality distribution.
Weather layer: Indoor climate-controlled sport; home-court effect controlled parametrically in win-probability model [PAGE 14], so no weather veto needed.
Veto adjudication: Any claimed efficiency effect must survive lineup fixed effects (δ, γ) to veto substitution bias [PAGE 5]-[PAGE 6]. Proposition 4 survives for trailing (β5 < 0 across all three efficiency measures, p<0.0001 [PAGE 6]) but fails for leading (β4 > 0 [PAGE 6]). The leading-team violation is therefore not vetoed by defensive adjustment or sample selection; it is a behavioral mispricing of risk.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable counterfactual veto scenarios + predictions. I'll phrase as falsifiable tests.
Scenario 1: Forced usage invariance for leading teams. If a leading team (α ≤ 1.5) is experimentally constrained to hold u3 constant as α increases (game gets closer), the paper's mechanism predicts no increase in nominal 3-point efficiency, because the usage curve would not move. Observed β4 > 0 implies u3 fell; if u3 is held fixed and β4 remains positive, the efficiency gain is not usage-curve driven and the paper's explanation fails. Prediction: β4 → 0 under fixed-u3; falsifies if β4 remains significantly positive.
Scenario 2: Defensive adjustment equalization. If defensive personnel/scheme are held identical across leading and trailing states (e.g., same 5-man defensive unit, no substitutions), then the leading team's reduction in 3 usage (β1 < 0) cannot be attributed to superior defensive adjustment. Prediction: β1 remains significantly negative under constant defense, confirming behavioral risk aversion rather than strategic response. Falsifies if β1 becomes insignificant or positive.
Scenario 3: Garbage-time boundary. Restrict to p(win) < 0.05 (garbage time). The optimality condition (Proposition 4) should break down because actions lack win-value consequences and α is poorly defined. Prediction: β5 should be statistically indistinguishable from zero, and β1, β2 should lose significance. Falsifies if Proposition 4 holds strongly in garbage time, implying the effect is mechanical rather than strategic.

Need to ensure no betting terms. "p(win) < 0.05" is fine (probability, not odds).

Word count check: I'll write generously. Let's estimate:
THINK_TRACE: ~450 words.
SOURCE_OPERATORS: ~400 words.
RETROCAUSAL: ~300 words.
RECURSIVE: ~300 words.
CROSS_LAYER: ~250 words.
RLVR: ~250 words.
Total ~1950 words. Good.

Now I need to make sure I include verbatim quotes with [PAGE N]. Let me pick exact quotes:
1. [PAGE 1]: "As time remaining decreases, the trailing team _should_ place an increasingly positive value on risk; the opposite holds for the leading team."
2. [PAGE 1]: "3-point attempts have roughly double the per-shot variance as 2-point attempts, but a team should be “risk neutral.”"
3. [PAGE 4]: "Proposition 4 _If we allow for a motivational impact of trailing and defensive adjustment, then as ↵ increases the nominal value of 3’s falls relative to the nominal value of 2’s._"
4. [PAGE 5]: Table 1 values: β1 = -0.105 (t=-8.21), β2 = 0.231 (t=13.40). I can quote: "_β_ 1 is significantly _negative_ . When a leading team’s _↵_ increases, it shoots fewer 3-pointers" [PAGE 5].
5. [PAGE 6]: "Proposition 4 states that optimal response to changing incentives over risk requires that both coefficients are negative." and "β5 is significantly negative ( p < 0 . 0001 for the weighted average in all specifications)" [PAGE 6]. And "β 4 is estimated to be significantly positive (about 1/3 the magnitude of β 5). This is the wrong direction and is a violation of optimal shot selection." [PAGE 6].
6. [PAGE 7]: "the slope of the fitted line is 1.65 and highly significant ( t = 7.27)" [PAGE 7]. "for an average team it’s harder to score in clutch moments, but very good offenses actually do better in the clutch and bad defenses get worse" [PAGE 7] or [PAGE 8].
7. [PAGE 14]: parametric model equation (8) and derivative.

I need to be careful about verbatim quotes—must match source exactly. I'll copy short phrases exactly from the text provided.

Now write the final response in the required XML sections. No markdown outside XML? The user wants exact XML sections. I'll put everything inside the tags. I can use LaTeX inside.

Double-check: "ZERO BETTING LINES" — I will not use any betting terminology. I'll use "win probability," "point margin," "game state."

"ZERO TOY EQUATIONS" — All equations must be formal, from the paper, with units/assumptions/breakdown. No invented ratios like Force/Fatigue.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s core multi-hop derivation begins with the definition of win value: WV₂ and WV₃ are the increases in win probability from a made 2- or 3-point shot at game state X [PAGE 2]. The ratio α ≡ WV₃/WV₂ measures how the win value of a 3-pointer departs from its nominal 1.5× value relative to a 2-pointer. Early in the game α ≈ 1.5 (risk neutral); late in the game, α > 1.5 for the trailing team (risk loving, because variance creates large swings) and α < 1.5 for the leading team (risk averse) [PAGE 1]-[PAGE 2]. Footnote 2 formalizes the variance intuition: with p₂ = 0.50 and p₃ = 0.33, both shots have expected nominal value one point, but Var₃ = 3²·0.33·0.66 = 1.96 versus Var₂ = 2²·0.5·0.5 = 1.0; if α = 1.7, the 3-pointer yields 0.33·1.7·WV₂ = 0.561·WV₂ versus 0.5·WV₂ for the 2-pointer, a 12% win-value premium despite identical nominal expectation [PAGE 2].

The usage curve φ(u₃) links shot mix to efficiency: u₃ ∈ [0,1] is the fraction of attempts that are 3-pointers, φ is the average 3-point success rate, and downward sloping means dφ/du₃ < 0—shooting more 3s forces acceptance of lower-quality opportunities on the margin, a direct consequence of the 24-second shot-clock arrival process [PAGE 3]-[PAGE 3 footnote]. The no-defense first-order condition equates marginal returns: α{φ(u₃) + u₃φ′(u₃)} = marginal return to 2-pointers. An increase in α raises the left side; to restore equality, u₃ must rise because φ(u₃) + u₃φ′(u₃) must remain positive [PAGE 3]. Proposition 1 then states u₃ ↑, nominal 3-point value ↓, nominal 2-point value ↑, real 3-point win value ↑ as α rises [PAGE 3].

Gray-zone audit. Breakdown regime 1: the parametric win-probability model in Appendix §6.4 relies on the central limit theorem over N remaining possessions, which deteriorates as N → 0 in the final possessions; the normal approximation is singular near game end [PAGE 14]. Breakdown regime 2: garbage time is excluded at p(win) < 5% because actions lack consequential incentives, but this trims the very states where α is most extreme and may induce selection bias if substitution patterns change [PAGE 5]. Breakdown regime 3: end-of-quarter and shot-clock > 14 possessions are excluded as non-strategic, removing desperation heaves and transition plays whose biomechanics differ from half-court optimization [PAGE 5]. Gray zone 4: the multiplicative motivational term cancels from the first-order conditions, yet Proposition 4 remains valid because it concerns the nominal efficiency gap, not usage; this robustness is mechanical, not evidence that motivation is irrelevant [PAGE 4]. Gray zone 5: defensive adjustment makes optimal u₃ ambiguous (Proposition 3), so a leading team’s fall in 3-usage could reflect defensive flexibility rather than behavioral error; however, the trailing team’s simultaneous rise in u₃ and fall in 3% isolates offense-dominated flexibility [PAGE 4]-[PAGE 5]. The paper admits it cannot distinguish trailing-team motivation from leading-team complacency [PAGE 2], a causal identification limit that constrains any strong claim about the source of the efficiency boost.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
All quantities below are dimensionless unless noted; probabilities are unitless measures in [0,1]; α is a win-value ratio; efficiency is measured in points per shot or points per possession.

1. Win-value ratio: WV₃ = α·WV₂, with nominal benchmark α₀ = 1.5. When α > 1.5, the win value of a 3-pointer exceeds its nominal value; when α < 1.5, it is worth less. Assumption: win values are estimated from local state transitions or a Probit model conditioned on margin, time, and possession [PAGE 2]. Breakdown: α is undefined or unstable in garbage time where p(win) < 0.05 and is excluded [PAGE 5].

2. Variance and risk proxy (footnote 2): Var₃ = 3²·0.33·(1−0.33) = 1.96; Var₂ = 2²·0.5·(1−0.5) = 1.0. If α = 1.7, EU₃ = 0.33·1.7·WV₂ = 0.561·WV₂ versus EU₂ = 0.5·WV₂, implying a 12% win-value premium for the 3-pointer [PAGE 2]. Assumption: shot outcomes are Bernoulli with fixed success probabilities conditional on game state.

3. Usage curve: φ(u₃) = average 3-point success rate when fraction u₃ of attempts are 3-pointers; u₂ = 1 − u₃; downward slope: dφ/du₃ < 0 and dβ/du₂ > 0 (equivalently dβ/du₃ < 0) [PAGE 3]. Assumption: shot-quality arrivals are constrained by the 24-second shot clock; increasing u₃ requires accepting lower marginal 3-point quality [PAGE 3 footnote].

4. No-defense first-order condition: α[φ(u₃) + u₃φ′(u₃)] = marginal return to 2-pointers [PAGE 3]. The term u₃φ′(u₃) is the inframarginal externality: one additional 3-attempt lowers the average success rate of all u₃ 3-pointers.

5. Empirical usage equation (random-coefficient linear probability model, team-year fixed effects, lineup fixed effects δ for offense and γ for defense): Pr(3PAₚ = 1) = β₁·αₚ·1{αₚ ≤ 1.5} + β₂·αₚ·1{αₚ > 1.5} + δ_Offₚ + γ_Defₚ + εₚ [PAGE 5]. Units: β₁ and β₂ are changes in 3-point usage probability per unit change in α. Weighted average β₁ = −0.105 (t = −8.21); β₂ = 0.231 (t = 13.40) [PAGE 5].

6. Empirical efficiency equation: E[pointsₚ] = β₁·1{3PAₚ} + β₂·αₚ·1{αₚ ≤ 1.5} + β₃·αₚ·1{αₚ > 1.5} + β₄·1{3PAₚ}·αₚ·1{αₚ ≤ 1.5} + β₅·1{3PAₚ}·αₚ·1{αₚ > 1.5} + δ_Offₚ + γ_Defₚ + εₚ [PAGE 6]. Dependent variables: effective field goal %, true shooting %, and gross possession efficiency (points per possession including offensive rebounds and related free throws) [PAGE 6]. Proposition 4 requires β₄ < 0 and β₅ < 0: as α rises, nominal 3-point efficiency must fall relative to nominal 2-point efficiency [PAGE 4]. Results: β₅ = −0.71 (t = −5.92) for trailing teams, significantly negative across all three efficiency measures (p < 0.0001) [PAGE 6]; β₄ = +0.213 (t = 2.44) for leading teams, significantly positive—the wrong direction [PAGE 6].

7. Defensive-adjustment model: offense maximizes and defense minimizes win-probability gain subject to d₂ + d₃ = 1; usage curves become φ(u₃, d₃) and β(u₂, d₂), with defensive pressure lowering success (∂φ/∂d₃ < 0) and diminishing defensive returns (∂²φ/∂d₃² > 0) [PAGE 10]. Proposition 3: sign of du*₃/dα is ambiguous and depends on offensive attack flexibility versus defensive adjustment flexibility [PAGE 4].

8. Parametric win probability (CLT, Appendix §6.4): Pr(home wins) = Φ( [(Sₕ,ₙ + n·μₕ) − (Sₐ,ₙ + n·μₐ)] / √[n(σₕ² + σₐ²)] ) where n is remaining possessions, S are current scores, μ are points per possession, σ² are per-possession variances [PAGE 14]. Marginal win value of a point: ∂Pr/∂Sₕ = φ(z) / √[n(σₕ² + σₐ²)] where z is the standardized margin and φ is the standard normal PDF [PAGE 14]. Breakdown: CLT fails as n → 0 (last possessions), making α extrapolation singular in the final seconds.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s intellectual lineage begins with Skinner (2011) [7], who framed risk as an ally for the underdog, and Oliver (2004) [5], who introduced usage curves as downward-sloping relationships between shot frequency and success. Goldman and Rao (2011) [2] developed allocative and dynamic efficiency in NBA decision-making, establishing the empirical precedent for lineup-conditioned shot analysis. Goldman and Rao (2012) [3] extended this to effort versus concentration under pressure. The behavioral pillar is Pope and Berger (2011) [1], showing that a team trailing by one at halftime wins slightly more often than a team leading by one, which the authors connect to Kahneman and Tversky’s (1979) [8] loss aversion and Rick and Loewenstein’s (2008) [6] laboratory evidence on “hypermotivation” [PAGE 1]-[PAGE 2]. Goldman and Rao’s related paper [4] on motivational loss aversion supplies the mechanism for the trailing-team efficiency boost.

Multi-week trap: over a season, the “rubber band effect” implies close games occur more frequently than a risk-neutral model would predict [PAGE 7]-[PAGE 8]. Because clutch moments are thereby relatively frequent, teams are repeatedly exposed to states where α diverges from 1.5. A leading team that habitually tightens up—substituting 2-pointers for 3-pointers as the lead shrinks—systematically concedes win probability in precisely the high-leverage states that decide games. Meanwhile, trailing teams that correctly hunt 3-pointers generate comeback opportunities not because they are inherently better, but because they price risk correctly while leaders misprice it. The downstream consequence is a convexity in team quality: very good offenses improve in the clutch (slope 1.65, t = 7.27) while bad defenses deteriorate (slope −1.09, t = 4.20), so baseline advantages compound in close games [PAGE 7]. A team evaluated only on regular-season efficiency therefore overestimates its playoff close-game prospects if its offense is mediocre and underestimates them if its offense is elite; the historical lineage from prospect theory to NBA shot selection reveals that loss aversion is not merely psychological noise but a strategic variable that predicts systematic deviation from optimal risk allocation late in games.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: as a lead decreases, α for the leading team rises toward 1.5 (less risk averse, closer to risk neutral). Optimal behavior would imply the leading team becomes more willing to shoot 3-pointers, or at least does not sharply reduce them. Instead, teams regress to a crisis habit of risk aversion: β₁ = −0.105 (t = −8.21) shows that as α increases, leading teams shoot fewer 3-pointers [PAGE 5]. They “tighten up,” switching to 2-pointers even though the incentives call for greater risk neutrality [PAGE 2].

Counter-trap: the trailing team does the opposite. β₂ = 0.231 (t = 13.40) shows increased 3-point usage as α rises [PAGE 5], and β₅ = −0.71 (t = −5.92) confirms that nominal 3-point efficiency falls relative to 2-point efficiency, exactly as Proposition 4 requires [PAGE 6]. This is consistent with the offense having greater ability to vary its attack than the defense has to adjust defensive resources d₃ [PAGE 4]-[PAGE 5]. The counter-trap is that the leading team’s reduction in 3-usage is accompanied by higher 3-point efficiency (β₄ = +0.213, t = 2.44), which is exactly what a downward-sloping usage curve predicts when fewer 3s are taken: the marginal 3-point attempts that remain are higher quality [PAGE 6]. A naive observer might interpret the higher efficiency as “smart shot selection,” but the paper identifies it as a symptom of excessive risk aversion: the team is shooting so few 3s that only the very best remain, while the win value of the foregone 3-pointers is not properly internalized.

Clock: in the fourth quarter, α varies widely across game states; Appendix Figure 1 Panel 2 shows the trailing region becomes convex as possessions dwindle, meaning the marginal win value of variance rises sharply [PAGE 2]-[PAGE 9]. The leading team should become progressively more risk neutral as the game nears its end and the lead shrinks, but instead it becomes more risk averse, a first-order recursive error: at level-1 theory, the offense anticipates the defense will guard 3s more aggressively as α rises, so it preemptively abandons the 3-point shot; at level-2, the data show the leading team’s own 3s become more efficient when usage drops, implying defensive adjustment was not the binding constraint—the offense’s own habit was. Because the offense’s capacity to vary attack exceeds the defense’s capacity to adjust (Proposition 3 condition), the trailing team exploits this mispricing, and the clock amplifies the error: every possession the leading team spends on a low-variance 2-pointer instead of a correctly priced 3-pointer is a possession in which the trailing team’s risk-loving technology gains ground.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: the sample excludes fast breaks (shot clock > 14) and end-of-quarter shots because these possessions carry different strategic and biomechanical considerations than half-court, set-defense shot selection [PAGE 5]. Transition opportunities arise from defensive breakdowns and have distinct release mechanics, spacing, and defensive-rebound contours; including them would violate the ceteris paribus condition of the usage curve. Garbage time (p(win) < 5%) is also excluded because actions lack meaningful win-probability consequences, removing states where optimization is not operative [PAGE 5].

Biomechanical layer: the downward-sloping usage curve is physically grounded in the 24-second shot clock. To raise u₃, the offense must accept lower-quality 3-point opportunities on the margin, because high-quality 3-point looks arrive endogenously over the course of a possession [PAGE 3 footnote]. This is not a statistical artifact but a physical constraint on the distribution of shot-quality arrivals. Lineup fixed effects δ (offensive 5-man unit) and γ (defensive 5-man unit) veto substitution bias: without them, changes in 3-point usage could simply reflect teams substituting better 3-point shooters when trailing rather than changing shot selection within a fixed personnel group [PAGE 5]-[PAGE 6].

Weather layer: the sport is indoor and climate-controlled; home-court advantage is parametrically controlled in the win-probability model (Appendix §6.4), so no exogenous weather veto is required [PAGE 14].

Veto adjudication: any claimed efficiency effect must survive both the sample restrictions and the two-way lineup fixed effects. Proposition 4 survives for trailing teams: β₅ is significantly negative across effective field goal %, true shooting %, and gross possession efficiency (p < 0.0001 in all specifications) [PAGE 6]. It fails for leading teams: β₄ is significantly positive (about one-third the magnitude of β₅), a violation of optimal shot selection that is not explained by defensive adjustment, lineup substitution, or garbage-time contamination [PAGE 6]. Because the leading team shoots fewer 3s while those 3s become more efficient, the data reveal a movement down a downward-sloping usage curve driven by behavior, not by a defensive adjustment that would simultaneously lower efficiency. The leading-team violation therefore clears all physical, biomechanical, and sample-selection vetoes; it is a robust behavioral mispricing of risk.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto Scenario 1 — Fixed usage for leading teams. Counterfactual: exogenously constrain leading teams (α ≤ 1.5) to hold 3-point usage u₃ constant as α increases (game approaches a tie), thereby removing movement along the usage curve. Prediction under the paper’s mechanism: if u₃ is fixed, nominal 3-point efficiency should not rise, because β₄ > 0 is generated by fewer attempts selecting higher-quality marginal shots. If, under fixed-u₃, β₄ remains significantly positive, the usage-curve explanation is falsified and the leading-team efficiency gain must come from another source (e.g., defensive letup). Verifiable by re-estimating the efficiency regression on a subsample or experimental condition where shot mix is held constant.

Veto Scenario 2 — Defensive adjustment equalization. Counterfactual: hold defensive personnel and scheme identical across leading and trailing states (same defensive 5-man unit γ, no score-state-dependent substitutions). Prediction: if the leading team’s reduction in 3-usage (β₁ = −0.105, t = −8.21) were driven by superior defensive adjustment to 3-pointers, equalizing defense should eliminate or attenuate β₁. If β₁ remains significantly negative under constant defense, the reduction is behavioral risk aversion rather than a strategic response to defensive pressure, confirming the paper’s claim that leading teams misprice risk. Falsified if β₁ becomes statistically indistinguishable from zero or positive.

Veto Scenario 3 — Garbage-time boundary. Counterfactual: restrict estimation to garbage-time states where p(win) < 0.05, so α lacks well-defined win-value consequences and actions are not optimization-relevant. Prediction: Proposition 4 must break down; β₅ should be statistically indistinguishable from zero, and β₁, β₂ should lose significance because teams are not trading 2s and 3s to move win probability. If Proposition 4 holds strongly in garbage time, the effect is mechanical (e.g., driven by scoreboard mechanics rather than risk preferences) and the paper’s strategic interpretation is falsified. Verifiable by estimating Table 2 on the excluded garbage-time subsample.
</RLVR_COUNTERFACTUAL_VETOES>