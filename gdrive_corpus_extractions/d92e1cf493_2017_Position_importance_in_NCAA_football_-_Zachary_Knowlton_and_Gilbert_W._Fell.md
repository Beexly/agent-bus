---
source: "2017 Position importance in NCAA football - Zachary Knowlton and Gilbert W. Fellingham.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 12
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3622
---

<NATIVE_REASONING>
The user wants a deep reasoning response based on the provided source paper: "Position importance in NCAA football" by Knowlton and Fellingham (2017). They provided the full text (pages 119-127, so 9 pages actually though they said pages 12, maybe counting differently).

Strict invariants:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to be careful:
- No betting lines at all.
- No fake ratios. Use formal LaTeX equations from the paper or standard ones, cite pages. The paper uses expected points E(Pts), change in expected points ΔE(Pts), Bayesian hierarchical model equations (Eq 1-9 though not fully shown in text, I can reference them generally or reconstruct formally based on description). I should not invent equations not in paper unless clearly labeled as general formalism, but better to stick to what's in the paper and cite pages.
- Need exact [PAGE N] markers. The text has page numbers embedded: 119, 120, 121, 122, 123, 124, 125, 126, 127. I should cite like [PAGE 122] etc.
- Word count >= 1000 across sections, with THINK_TRACE >= 400 words.

Structure:
<THINK_TRACE>
Deep multi-hop derivation & gray-zone audit. Need >=400 words. Discuss the paper's methodology, data limitations, Bayesian hierarchical model, expected points model, importance score definition (mean/sd from Miskin et al. 2010), issues with coach grading calibration, missing games, defensive 2-point vs offensive 3-point scale, singularity/breakdown regimes (missing positions modeled by specific βjd, players playing multiple positions, small sample per position, non-identifiability issues, etc.). Gray zones: proprietary player grades not published, position grouping (OL grouped, TE grouped with IWR), defensive rotations causing empty positions, QB variability due to dependence on teammates and multiple QBs. Also discuss the exact breakdown: variance priors gamma mean 2 variance 1, E(Pts) range -2 to 5, etc.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX. I can write out the sampling model as described:
For play i, response ΔE(Pts)_i ~ Normal(μ_i, σ_y^2)
μ_i = β_0k + Σ_j β_jk x_ij (maybe sum over players on field)
x_ij ∈ {0,1,2} offense, {0,1} defense.
Hierarchical: β_jk ~ Normal(θ_z, ξ_z^2) where z is position of player j.
Priors: θ_z ~ Normal(0, 2) (mean zero variance two), ξ_z^2 ~ Gamma(...), σ_y^2 ~ Gamma(mean 2, variance 1).
Importance score IS = mean / sd (from Miskin et al. 2010).
Expected points E(Pts) from White and Berry (2002) tiered polychotomous regression, built on FBS 2005-2013.
ΔE(Pts) = E(Pts)_after - E(Pts)_before.
Example from page 122: from own 20 (E=0.22) to own 35 (E=1.49), ΔE=1.27.
Cite pages: [PAGE 121] for model description, [PAGE 122] for expected points example and grading scales, [PAGE 123] for priors and IS table, etc.
Breakdown/singularity: when two defensive positions empty each play, specific βjd; missing games cause unbalanced panels; coach miscalibration; QB dependence causing high variance (sd 1.34 vs mean 0.26).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical/scientific lineage: White & Berry (2002) NFL QB tiered polychotomous regression; Kovash & Levitt (2009) change in expected points; Page et al. (2007) NBA position importance; Florence et al. (2008), Heiner et al. (2014), Miskin et al. (2010), Thomas et al. (2009) skill importance in volleyball/soccer. Multi-week traps: season-long aggregation hides game-to-game non-stationarity (Table 3 and 4 show β0 varies wildly by opponent: offense β0 from 0.56 Boise State to -2.83 Cincinnati; defense β0 from 0.55 SJSU to -2.86 Fresno State). Using full season posterior can mask within-season regime shifts. Importance score IS = mean/sd can be unstable when sd near zero or mean near zero (e.g., θNose mean -0.22, sd 0.50, IS -0.44; θLE mean -0.10 sd 0.22 IS -0.45). Also defensive grades on 2-point scale vs offensive 3-point scale makes cross-side comparison invalid. Multi-week trap: recruiting based on full-season importance may overfit to 2015 BYU scheme and opponent strength.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression vs counter-trap vs clock. This section is a bit abstract but should relate to coaching decision-making under pressure. Crisis habit regression: under pressure, coaches revert to conventional wisdom (QB most important). Counter-trap: the data shows defensive BoundCB, Mike, RE can be more important by IS than offensive skill positions; if a coach overcorrects and devalues QB because of variability, that's a counter-trap. Clock: game-by-game β0_o and β0_d show non-stationarity; in-game adjustments matter more than season-long static rankings. Need to discuss recursive theory of mind: coaches think about what opponent thinks about their position importance; if opponent knows BYU's BoundCB is critical, they may target that side, changing the value of executing assignment. Crisis habit regression: after a loss (Mizzou), coaches may over-index on single-game posteriors (Fig 4-7) and regress to conservative play-calling. Counter-trap: assuming importance scores are transferable across opponents when Table 3/4 show opponent-specific intercepts.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof. The paper is purely statistical/coaching grades, no physical/biomechanical/weather data. Veto: any conclusion about position importance is vetoed if it ignores physical constraints not in model: e.g., RE importance may be confounded with offensive tackle quality (left vs right), weather affecting passing and thus QB/WR value, field turf affecting defensive back coverage. Since model uses coach assignment grades, not player tracking or biomechanical load, it cannot adjudicate whether a position's high θ is due to intrinsic importance or scheme alignment. Also missing games (Nebraska, UCLA, etc.) create selection bias; if those games were played in different weather or against different offensive styles, the full-season posterior is not transportable. The veto proof: no physical layer in source, so all causal claims about biomechanical importance are vetoed absent external data.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or just counterfactual vetoes. Need 3 scenarios that are verifiable (can be checked against data or logic) and predictions.
Scenario 1: Re-estimate model excluding QB plays where receiver drops pass. Prediction: QB posterior mean θQB decreases and sd decreases, because current high variance attributed to receiver dependence.
Scenario 2: Re-estimate defensive model using only games where all 13 defensive positions were graded (excluding Wagner, Utah). Prediction: BoundCB IS ranking changes (maybe drops) because small sample (sd 0.20) and missing games bias toward 2015 opponents faced.
Scenario 3: Pool offensive and defensive importance scores directly despite different grading scales (0-2 vs 0-1). Prediction: this yields spurious ranking where offense appears systematically more important because x_ij has larger range; vetoed by scale mismatch.
Or scenario 3: Using full-season IS to guide recruiting for a team running a different defensive front (e.g., 4-3 instead of 3-4). Prediction: RE/Mike/BoundCB rankings will not transfer because position definitions are scheme-specific.
Need to phrase as verifiable vetoes: if X condition holds, then veto Y conclusion.
Predictions: what will happen if you run the counterfactual.

Word count: Need >=1000 total. THINK_TRACE >=400. I'll aim for roughly:
THINK_TRACE: 500
SOURCE_OPERATORS_AND_EQUATIONS: 250
RETROCAUSAL_GENEALOGY: 200
RECURSIVE_THEORY_OF_MIND: 200
CROSS_LAYER_VETO_ADJUDICATION: 150
RLVR_COUNTERFACTUAL_VETOES: 200
Total ~1500. Good.

No betting lines. No fake ratios. Formal LaTeX only. Cite pages.

Let's draft carefully.

Important: The user said "PAGES: 12" but source text shows pages 119-127 (9 pages). I will cite the page numbers visible in text: [PAGE 119] through [PAGE 127]. That's fine.

Let's ensure I use exact [PAGE N] markers. I'll reference [PAGE 122] for expected points example, [PAGE 123] for tables and priors, etc.

Also note: The paper mentions Equations 1-9 but doesn't fully display them in the extracted text. I can write formal LaTeX based on the textual description and cite [PAGE 121-123] where the model is described. I should avoid claiming to quote equations that aren't there; instead say "as specified in Equations 1–9 on [PAGE 121–123]..." and then give the formal structure consistent with the description. That's acceptable as formal LaTeX not a toy equation.

Need to avoid odds/spreads/moneylines. The paper mentions winning/losing but not betting. Fine.

Let's write.

THINK_TRACE section: deep derivation. I'll discuss:
- The response variable ΔE(Pts) is a first-difference of expected points.
- Expected points model from White & Berry (2002) using tiered polychotomous regression on FBS 2005-2013.
- Sampling model: normal likelihood because response is expected value.
- Player grades: offense 3-point, defense 2-point (binary plus/minus -> 0/1).
- Hierarchical structure: players nested within positions; position means θ_z and variances ξ_z^2.
- Importance score IS = E(θ_z)/sd(θ_z) from Miskin et al. 2010.
- Gray zones: proprietary grades, missing games, calibration, grouping OL and TE/IWR, defensive rotations with empty positions modeled by specific βjd, QB dependency and multiple QBs causing high variance, non-identifiability of intercept β0k vs position effects, scale incompatibility between offense/defense.
- Singularity/breakdown: when sd(θ_z) -> 0, IS blows up; when mean ~0, IS unstable; missing positions each play create missing-data structure; small N for Nickel/XB (sd small but IS high maybe due to small sd).
Word count target >400.

SOURCE_OPERATORS_AND_EQUATIONS: LaTeX block with definitions. Cite pages. Units: expected points (points), grades dimensionless ordinal scale, θ_z in points per play per grade unit. Breakdown regimes.

RETROCAUSAL_GENEALOGY: lineage and multi-week traps.

RECURSIVE_THEORY_OF_MIND: crisis habit regression etc.

CROSS_LAYER_VETO_ADJUDICATION: physical vetoes.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.

Let's ensure no "toy equations". All equations should be formal and tied to paper.

I'll now produce the final answer.
</NATIVE_REASONING>

<THINK_TRACE>
The paper constructs a Bayesian hierarchical linear model in which the response for each play i is the change in expected points, ΔE(Pts)_i, derived from White and Berry (2002) and Kovash and Levitt (2009). The expected-points surface E(Pts) is estimated from NCAA FBS play-by-play data spanning 2005–2013 [PAGE 121], and the play-level value is the difference between post-play and pre-play expected points. On [PAGE 122], the authors give a concrete illustration: moving from 1st-and-10 on the own 20 (E(Pts)=0.22) to 1st-and-10 on the own 35 (E(Pts)=1.49) yields ΔE(Pts)=1.27. This response is modeled with a normal likelihood because ΔE(Pts) is itself an expected value, not a binary outcome.

The explanatory variables are coaches’ assignment grades. Offensive players receive x_ij ∈ {0,1,2}; defensive players receive x_ij ∈ {0,1}, where the defensive minus/plus scale was converted to zero/one [PAGE 122]. For play i within side k ∈ {offense, defense}, the sampling mean is a linear combination of an intercept β_0k and player-specific coefficients β_jk weighted by their grades x_ij. Because multiple players appear on a play, the model sums over the players on the field for that play. The intercept β_0k represents the expected ΔE(Pts) when no position completes its assignment [PAGE 124–125].

A second hierarchical layer nests players j within positions z. Each player coefficient β_jk is drawn from Normal(θ_z, ξ_z^2), where θ_z is the average positional impact and ξ_z^2 captures position-level variability [PAGE 122–123]. Hyperpriors are assigned so that θ_z ~ Normal(0, 2) and the variance parameters receive gamma priors calibrated to mean 2 and variance 1, consistent with the observed range of E(Pts) from roughly −2 to +5 [PAGE 123]. Position importance is summarized by the importance score IS_z = E(θ_z) / sd(θ_z), borrowed from Miskin et al. (2010) [PAGE 123].

Gray-zone audit: (1) The player-level grades are proprietary and not published, so only posterior position means and standard deviations are reported [PAGE 123]. (2) Five offensive games and two defensive games were not graded, producing an unbalanced panel [PAGE 119, 123]. (3) The offensive and defensive grading scales differ (three-point vs. binary), so θ_z magnitudes are not directly comparable across sides of the ball [PAGE 122]. (4) Offensive linemen are pooled into a single OL position, and tight ends are merged with inside receivers, which masks intra-position heterogeneity [PAGE 120]. (5) The defense rotates 13 positions with two positions empty each play; empty positions are modeled with specific β_jd terms, and two-way players receive separate coefficients per position [PAGE 121]. (6) Quarterback variability is large (sd = 1.34 vs. mean = 0.26), which the authors attribute to teammate dependence and the presence of two quarterbacks of differing skill [PAGE 124]. (7) Game-specific intercepts β_0o range from 0.56 (Boise State) to −2.83 (Cincinnati), and defensive intercepts β_0d range from 0.55 (SJSU) to −2.86 (Fresno State), indicating strong non-stationarity across opponents [PAGE 124–125, Tables 3–4]. Singularity/breakdown regimes include IS_z exploding as sd(θ_z) → 0, unstable inference when E(θ_z) ≈ 0, and non-identifiability if position effects are collinear with scheme-specific formation usage.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal specification consistent with the text on [PAGE 121–123]:

Let i index plays, k ∈ {o,d} index side of ball, and j index players on play i.

Response:
ΔE(Pts)_i | μ_i, σ_y^2 ∼ Normal(μ_i, σ_y^2), with units of expected points per play.

Sampling model:
μ_i = β_0k + Σ_{j ∈ players on play i} β_{jk} x_{ij}

where x_{ij} ∈ {0,1,2} for offense and x_{ij} ∈ {0,1} for defense [PAGE 121–122].

Hierarchical prior:
β_{jk} | θ_z, ξ_z^2 ∼ Normal(θ_z, ξ_z^2), where z = position(player j).

Position sets: offense z ∈ {QB, RB, WR, IWR, OL}; defense z ∈ {RE, Nose, LE, Mike, Buck, Sam, Will, FieldCB, BoundCB, Kat, FS, Nickel, XB} [PAGE 123].

Hyperpriors:
θ_z ∼ Normal(0, 2) [PAGE 123].
σ_y^2 ∼ Gamma(parameterization giving mean 2, variance 1) [PAGE 123].
ξ_z^2 ∼ Gamma(mean 2, variance 1) [PAGE 123].

Expected-points operator from White and Berry (2002) tiered polychotomous regression on FBS 2005–2013 [PAGE 121]:
E(Pts) = f(down, distance-to-go, field-position)
ΔE(Pts) = E(Pts)_{post-play} − E(Pts)_{pre-play}

Example [PAGE 122]: E(Pts)=0.22 at own 20, 1st-and-10; E(Pts)=1.49 at own 35, 1st-and-10; therefore ΔE(Pts) = 1.27.

Importance score [PAGE 123, following Miskin et al. 2010]:
IS_z = E(θ_z) / sd(θ_z)

Table 1 offensive posteriors [PAGE 123]: θ_QB = 0.26 (sd 1.34, IS 0.19); θ_RB = 0.15 (sd 1.05, IS 0.14); θ_WR = 0.11 (sd 1.01, IS 0.11); θ_OL = 0.06 (sd 0.66, IS 0.09); θ_IWR = 0.05 (sd 0.79, IS 0.06).
Table 2 defensive posteriors [PAGE 123]: θ_BoundCB = 0.54 (sd 0.20, IS 2.70); θ_Mike = 0.34 (sd 0.17, IS 1.96); θ_RE = 0.51 (sd 0.32, IS 1.61); θ_Kat = 0.21 (sd 0.40, IS 0.53); θ_FS = 0.27 (sd 0.52, IS 0.52); θ_FieldCB = 0.20 (sd 0.71, IS 0.28); θ_Nickel = 0.16 (sd 0.20, IS 0.80); θ_Buck = 0.10 (sd 0.26, IS 0.38); θ_Will = −0.09 (sd 0.53, IS 0.17); θ_Sam = −0.10 (sd 0.52, IS −0.19); θ_XB = −0.15 (sd 0.39, IS −0.39); θ_Nose = −0.22 (sd 0.50, IS −0.44); θ_LE = −0.10 (sd 0.22, IS −0.45).

Breakdown/singularity regimes: IS_z is undefined at sd(θ_z) = 0 and numerically unstable when |E(θ_z)| ≪ sd(θ_z). The defensive model contains two empty positions per play, requiring separate β_jd indicators for unused formations [PAGE 121]. Missing games induce selection bias because ungraded opponents are not missing at random [PAGE 119, 123]. The binary defensive grade compresses information relative to the three-point offensive grade, violating scale invariance for cross-side θ_z comparison [PAGE 122].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The methodological lineage runs from White and Berry (2002), who used tiered polychotomous regression to rank NFL quarterbacks by points created, to Kovash and Levitt (2009), who converted expected points into play-level effectiveness via ΔE(Pts), and Page et al. (2007), who rated NBA positions by contribution to point margin. Knowlton and Fellingham extend this to all 22 football positions using coach-generated assignment grades rather than box scores [PAGE 119–120]. The importance score IS_z = mean/sd is imported from Miskin et al. (2010), who applied it to volleyball skills, part of a broader Fellingham-group research stream on skill importance in volleyball [Florence et al., 2008; Miskin et al., 2010] and soccer [Heiner et al., 2014; Thomas et al., 2009] [PAGE 119].

Multi-week trap: The full-season posterior treats the 2015 BYU season as a single stationary regime. Tables 3 and 4 demonstrate that this is false. The offensive intercept β_0o swings from +0.56 against Boise State to −2.83 against Cincinnati, and the defensive intercept β_0d swings from +0.55 against SJSU to −2.86 against Fresno State [PAGE 124–125]. A recruiting or personnel decision based on the season-level IS ranking implicitly assumes that the opponent distribution and scheme context of 2015 will repeat, which is a multi-week overfitting trap. Additionally, Figures 4–7 show that defensive positions are more tightly clustered in the win over Boise State than in the loss to Missouri, indicating that posterior concentration is outcome-contingent rather than position-intrinsic [PAGE 124–125]. Because five offensive games and two defensive games were never graded [PAGE 119], the season model conditions on a non-random subset of opponents, so the historical lineage from White and Berry (2002) is corrupted by selection bias when transported to a different schedule or a different defensive front (e.g., moving from a 3–4 to a 4–3 alignment redefines which defensive position is “RE” and thus invalidates the θ_RE estimate).
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: After a loss such as the Missouri game (β_0d = −2.65 vs. −1.86 in the Boise State win), coaches face pressure to explain defensive failure. The default habit is to regress to the conventional quarterback-centric narrative or to blame the most visible position. The model counters this by showing BoundCB, Mike, and RE as the top three defensive importance scores [PAGE 123–125]. A coach in crisis may overcorrect by demoting the QB in practice resource allocation because θ_QB has high variance (sd = 1.34), thereby falling into a counter-trap: confusing estimator variance with low structural importance. The QB’s high variance is partly mechanical—receiver drops and offensive-line breakdowns are not under QB control—so reducing QB reps based on posterior variance would punish the position for noise generated by teammates [PAGE 124].

Recursive theory of mind: If the opposing offensive coordinator infers from film or scouting that BYU’s BoundCB is the highest-value defensive position (IS = 2.70), they will target the boundary side with deep shots and extra receivers, which changes the strategic value of BoundCB assignment execution in real time. The static θ_BoundCB estimate does not encode this opponent adaptation. Likewise, if opponents know BYU’s Mike calls the defensive play [PAGE 125], they can use pre-snap motion to force Mike into communication errors, making the Mike position’s importance endogenous to opponent belief. Clock: The game-specific β_0k intercepts operate on a shorter clock than the season posterior. A coach who sets the weekly game plan using only Table 2 season-level IS values ignores the within-week intercept shift captured in Table 3–4, effectively playing last week’s equilibrium against this week’s opponent. The correct recursive response is to update position weights game-by-game rather than anchoring on the full-season posterior.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The source contains no physical, biomechanical, or weather variables; it is purely a coach-grade expected-points regression. Consequently, any causal claim that a position is “physically” or “biomechanically” important is vetoed by absence of evidence. For example, θ_RE = 0.51 (sd 0.32, IS 1.61) [PAGE 123] may reflect the quality of the opposing offensive left tackle more than the intrinsic value of the right end; the paper explicitly notes this result “may also indicate that the LT is more important than the RT on the offensive line,” but cannot test it because offensive linemen are pooled into a single OL position [PAGE 125]. Weather and field conditions are absent from the model, yet E(Pts) and passing-game efficiency are sensitive to precipitation, wind, and turf; a passing-heavy week would mechanically inflate θ_QB and θ_WR relative to a run-heavy week, confounding the posterior with environmental regime. Because defensive grades are binary while offensive grades are ternary, cross-layer comparison of defensive θ_BoundCB against offensive θ_QB is vetoed on measurement grounds: the scales are not commensurate [PAGE 122]. Missing games (Nebraska, UCLA, Wagner, Utah State, Utah for offense; Wagner, Utah for defense) [PAGE 119] likely correlate with travel, altitude, or weather differences, so the season posterior is not transportable to venues outside the graded subset. Physical veto proof: without player-tracking load data, injury status, or weather covariates, no conclusion about biomechanical durability or environmental robustness can be drawn from this model alone.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto scenario 1: Re-estimate the offensive model after removing all plays in which the coach-graded QB completed an assignment but a receiver dropped the pass. Verifiable condition: if drop plays are identifiable in the BYU coaching film, then the subset model is computable. Prediction: E(θ_QB) will decrease and sd(θ_QB) will shrink substantially relative to 0.26 and 1.34 [PAGE 123], because the current QB variance is partly driven by receiver outcomes outside QB control [PAGE 124]. Veto: any ranking that crowns QB as “most important” using the full-season model without this drop-play robustness check is invalid.

Veto scenario 2: Re-estimate the defensive model using only games where all 13 defensive positions received grades (excluding Wagner and Utah, which were ungraded for defense [PAGE 119]). Verifiable condition: compare posterior IS_z for BoundCB, Mike, and RE in the full model versus the complete-case model. Prediction: θ_BoundCB (mean 0.54, sd 0.20, IS 2.70 [PAGE 123]) is estimated from a thin sample with a small standard deviation; removing games will widen sd(θ_BoundCB) and likely reduce IS_BoundCB below θ_RE or θ_Mike. Veto: naming BoundCB the single most important defensive position without complete-case sensitivity analysis is an overfit to missing-not-at-random game exclusions.

Veto scenario 3: Pool offensive and defensive θ_z into a single importance ranking despite the offensive grade scale {0,1,2} and defensive grade scale {0,1}. Verifiable condition: regress ΔE(Pts) on grade for both sides and test whether the scale ranges produce statistically different coefficient magnitudes for equal positional impact. Prediction: offensive θ_z values will appear systematically inflated because a one-unit grade change spans a larger portion of the offensive scale than the defensive binary scale; this will spuriously rank QB, RB, and WR above defensive positions. Veto: any cross-side “most important position” claim that does not rescale grades to a common unit interval is invalid.
</RLVR_COUNTERFACTUAL_VETOES>