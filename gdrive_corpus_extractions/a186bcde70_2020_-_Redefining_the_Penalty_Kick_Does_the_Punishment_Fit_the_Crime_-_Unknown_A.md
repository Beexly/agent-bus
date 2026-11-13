---
source: "2020 - Redefining the Penalty Kick Does the Punishment Fit the Crime - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/Carnegie Mellon Sports Analytics Conference/2020"
pages: 14
model: baidu/ernie-5.5-flash-preview:free
words: 5237
---

<NATIVE_REASONING>
Let me work through what's being asked here. The user has provided a research paper source from the Carnegie Mellon Sports Analytics Conference 2020 titled "Redefining the Penalty Kick: Does the Punishment Fit the Crime?" by Bria Cratty & Jack de la Parra.

The instructions establish a role as "GSE + GSI Frontier Reasoning Foundry" with strict invariants:
1. Zero betting lines
2. Zero toy equations — must use formal LaTeX equations, SI/information/probability units, assumptions, singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-word depth across specific XML sections.

The user has provided 14 pages of source text and wants a deep reasoning analysis.

Let me think about whether I can do this legitimately. This is a legitimate request to analyze a sports analytics research paper about soccer/football penalty kicks. There's nothing harmful here. It's a technical/analytical task.

Let me think about the content. The paper is about:
- Penalty kicks in soccer convert at ~75.86% (22/29 PKs in 2018 World Cup)
- Regular play shots within the 18-yard box convert at ~11.81% (111/940)
- They want to redefine penalty kick to make it "more fair"
- They build a Generalized Additive Model (GAM) with Beta family, logit link
- Response: StatsBomb Expected Goals (xG)
- Predictors: distance to closest defender, angle to goal, distance to goal (all k=9 splines), defenders behind ball (k=3)
- Prediction for current PK: 74%
- Conclusion: Create "The Penalty Arc" — 18 yards from goal, outside marks at 50°, if fouled outside arc bring to closest mark, if fouled in arc place on arc at horizontal location of foul

Now I need to produce the analysis in the exact XML sections requested, with >= 1,000 words total, formal LaTeX equations, page citations, breakdown regimes, etc.

Let me be careful about the invariants:
- ZERO betting lines: I won't mention spreads/totals/moneylines/odds. Good.
- ZERO toy equations: I must state formal LaTeX with units, assumptions, singularities. When source pages provided, cite [PAGE N] and verbatim quotes.
- >= 1,000 words across the exact XML sections.

The sections:
1. <THINK_TRACE> — Deep multi-hop derivation & gray-zone audit (>=400 words)
2. <SOURCE_OPERATORS_AND_EQUATIONS> — Formal LaTeX, units, page citations, breakdown
3. <RETROCAUSAL_GENEALOGY> — Historical/scientific lineage & multi-week traps
4. <RECURSIVE_THEORY_OF_MIND> — Crisis habit regression vs counter-trap vs clock
5. <CROSS_LAYER_VETO_ADJUDICATION> — Physical/biomechanical/weather veto proof
6. <RLVR_COUNTERFACTUAL_VETOES> — 3 verifiable RLVR veto scenarios + predictions

This is a self-consistent analytical framework. It's essentially a structured reasoning exercise about a sports analytics paper. I can engage with this substantively and honestly.

Let me think about the actual content deeply so I produce genuine analysis, not filler.

The GAM with Beta family, logit link:
- The response is expected goals, which is a probability p ∈ (0,1), hence Beta regression is appropriate (Beta distribution defined on (0,1)).
- Logit link: g(p) = log(p/(1-p))
- The model: logit(μ_i) = β0 + f1(distance to goal) + f2(angle to goal) + f3(distance to closest defender) + f4(defenders behind ball)
- where f_j are smoothing splines with k knots (k=9 for first three, k=3 for defenders behind ball).

Wait, actually GAM with Beta family — the response variable in mgcv (R package) `gam` with family=betar or the `betar` family. Actually in mgcv you can use `family = betar`. The response is a proportion/y in (0,1).

Actually, StatsBomb xG is itself a continuous quantity in (0,1), so using it as a Beta response makes sense.

The EDF (effective degrees of freedom) for the smoothing splines are bounded by k-1 for a thin plate or cubic regression spline (with the -1 for identifiability/centering).

Let me think about the boundary issues. For a penalty kick, the kicker is 12 yards (11 meters) from goal, centered. Distance to goal ~ 11m. Angle to goal is maximal. Defenders behind ball = 0 typically (all field players must be outside the box and behind the ball). Distance to closest defender is large (~9.15m for the wall, but on a PK there's no wall except during... actually no, on a PK all players except kicker and GK are outside the penalty area, at least 9.15m from the ball, and behind the ball). So distance to closest defender is large.

The problem the authors note: the model "Not predicting correctly for PK" (PAGE 8) when using only distance to goal, angle to goal, and distance to closest defender. Adding "defenders behind ball" helped. PAGE 9: exponential relationship for defenders behind ball, not captured linearly, k=9 not needed (so k=3 sufficient).

Prediction for current PK: 74% (PAGE 10), calibrated to ~75% (PAGE 7 "Calibrate model to ~75%").

The new proposal: "The Penalty Arc" — arc 18 yards from goal, outside marks at 50° (PAGE 13). If fouled outside arc → brought into closest mark. If fouled inside arc → placed on arc at horizontal location of foul.

The idea: moving the PK spot back from 12 yards to 18 yards and at wider angles would reduce the xG (expected goals) below 75%, making it "fairer" — i.e., closer to a coin-flip or a meaningful challenge rather than a near-automatic score.

Let me think about physics. The goal is 7.32m wide (8 yards) and 2.44m high (8 feet). Penalty spot is 11m (12 yards) from goal line. 

At 11m, the angle subtended by the goal is large. At 18 yards (16.46m), the goal subtends a smaller angle, and the target area from the kicker's perspective shrinks.

The probability of scoring relates to:
- The angular size of the goal (target)
- The reaction time of the keeper
- Ball flight time

Let me do some formal math.

Goal width: W = 7.32 m. Goal height: H = 2.44 m.
Penalty spot distance from goal line: d.

The horizontal angular width of the goal as seen from distance d (centered): 
θ = 2 · arctan((W/2)/d) = 2 · arctan(3.66/d)

At d = 11m: θ = 2·arctan(3.66/11) = 2·arctan(0.3327) = 2·18.4° = 36.8°
At d = 16.46m (18 yards): θ = 2·arctan(3.66/16.46) = 2·arctan(0.2223) = 2·12.53° = 25.06°

Solid angle of the goal mouth: Ω ≈ (W·H)/d² for small angles (approximation), or more precisely the solid angle subtended by a rectangle.

Ball flight time: for a shot at speed v, time t = d/v (ignoring drag/curve). 
A hard penalty ~ 25-30 m/s. Say v = 28 m/s.
At d=11m: t ≈ 0.39s
At d=16.46m: t ≈ 0.59s

More flight time gives the keeper more reaction time. Human reaction time ~ 0.2-0.25s, plus dive time. A keeper who commits early to a direction covers roughly... let me think about keeper coverage.

The keeper can cover a certain fraction of the goal. Research (e.g., Chiapponi et al., Bar-Eli's work on penalty psychology) suggests keepers dive and the distribution of shots. There's the "keeper's dilemma."

Actually, let me focus on what the paper does and the reasoning framework.

Let me think about the Beta regression breakdown. Beta distribution:
f(y; α, β) = [Γ(α+β)/(Γ(α)Γ(β))] · y^(α-1) · (1-y)^(β-1), for y ∈ (0,1)

Reparameterized with mean μ and precision φ:
α = μφ, β = (1-μ)φ
E[Y] = μ, Var[Y] = μ(1-μ)/(1+φ)

logit link: η = log(μ/(1-μ)) = Xβ (with smooth terms)

Singularity/breakdown: Beta undefined at y=0 and y=1. StatsBomb xG values can be exactly 0 or 1 in edge cases, which would break the Beta likelihood (log-likelihood → -∞). Common fix: transform y' = (y(n-1)+0.5)/n (Smithson & Verkuilen) or use zero-one-inflated Beta.

Also the precision φ: as φ → 0, the distribution becomes bimodal (U-shaped, mass at 0 and 1). As φ → ∞, it becomes degenerate (point mass at μ). For xG modeling, low φ means high uncertainty.

Let me also think about extrapolation breakdown. The current PK spot (11m, angle ~max, 0 defenders behind) is at the extreme edge of the open-play data (1638 observations of non-PK shots). This is exactly why the model "not predicting correctly for PK" (PAGE 8). The new proposed spot at 18 yards might be even further into extrapolation territory, or might actually be more within the range of open-play data. Actually 18 yards is farther than most open-play shots... no wait, open play shots happen at all distances. 18 yards out is a common shooting distance in open play, so the model may be better calibrated there. Interesting point.

Hmm, but at 18 yards from the center, the "defenders behind ball" would be nonzero in open play but zero in the proposed reconfigured scenario if it's still a set piece. This is a gray zone.

Let me think about the calibration. They calibrated to ~75% (PAGE 7). Prediction for current PK = 74% (PAGE 10). Empirical = 75.86% (PAGE 3). These are close, good calibration.

The k=9 for distance/angle and k=3 for defenders behind ball: k is the basis dimension for the smoothing spline. In mgcv, k sets the maximum degrees of freedom; the actual EDF is estimated and ≤ k-1 (minus 1 for the intercept/centering constraint). So k=9 allows up to 8 EDF for each of the first three smooths. k=3 for defenders behind ball allows up to 2 EDF, appropriate for a simpler (near-monotonic exponential) relationship. PAGE 9: "K value of 9 not needed" for defenders behind ball — they reduced to k=3.

GCV/UBRE/REML used for smoothness selection typically.

Now the reasoning framework sections. Let me be genuine.

Let me write ~1,000+ words. Let me aim for maybe 1,400-1,800 words to be safe, distributed across sections with THINK_TRACE ≥ 400 words.

Let me draft.

I should cite verbatim quotes with [PAGE N] markers. Let me collect verbatim quotes:
- PAGE 3: "Scoring Percentage 75.86%" and "Regular Play Scoring within the Box" "11.81%"
- PAGE 5: "Re-configure the penalty kick to make for a more fair penalty kick opportunity"
- PAGE 7: "Calibrate model to ~75% for current penalty kick distance and angle" and "Find a new location and angle with reduced expected goals"
- PAGE 8: "Beta family, logit link", "1638 observations", "Not predicting correctly for PK", "Considered adding defenders behind ball variable to the model", "Decide between linear or smoothed term"
- PAGE 9: "Seems to have an exponential relationship", "Not captured linearly", "K value of 9 not needed", "Smoothing Spline More Appropriate for Defenders Behind Ball"
- PAGE 10: "Response: Statsbomb Expected Goals", "Distance to closest defender, k = 9", "Angle to goal, k = 9", "Distance to goal, k = 9", "Defenders Behind Ball, k= 3", "Prediction for Current PK: 74%"
- PAGE 13: "Arc 18 yards from goal, outside marks at 50°", "If fouled outside arc, brought into closest mark", "If fouled in arc, placed on arc at horizontal location of the foul"

Good, I have solid verbatim material.

Now let me make sure the LaTeX equations are formal and honest, with units.

1. Beta density and reparameterization.
2. Logit link GAM.
3. Smoothing spline / basis expansion with penalty (roughness penalty, EDF).
4. Goal angular width and solid angle.
5. Ball flight time vs keeper reaction time.
6. Penalty/GCV for smoothing parameter.

Let me write the physical geometry with units:
- W_goal = 7.32 m
- H_goal = 2.44 m
- d_current = 11 m (12 yd)
- d_proposed = 16.458 m (18 yd)
- Angular width θ = 2 arctan((W/2)/d)
- Solid angle Ω = 4 arcsin( sin(...)... ) — actually for a rectangle it's more complex. Let me give the small-angle approximation Ω ≈ (W·H)/d² and note breakdown when d is not ≫ W,H.

At d=11: Ω ≈ (7.32·2.44)/121 = 17.86/121 = 0.1476 sr
At d=16.46: Ω ≈ 17.86/271 = 0.0659 sr
Ratio ≈ 0.446, i.e., the goal subtends less than half the solid angle from 18 yards vs 11 yards. This supports reduced scoring.

Ball flight time t = d/v with v ≈ 25-30 m/s:
At 11m, v=28: t=0.393s
At 16.46m, v=28: t=0.588s
Δt ≈ 0.195s more time for keeper.

But wait — a farther shot also gives a keeper more time to react. Reaction+movement. Human visual reaction ~0.2s, then dive. The keeper covers roughly the goal if reaction time < flight time. If flight time increases by ~0.2s, that's a meaningful fraction.

Keeper reach: an elite keeper diving covers ~2.5-3m laterally in ~0.6-0.7s. 

Let me also think about the "power vs placement" tradeoff: at longer distance, the ball arrives slower (or kicker must hit harder reducing accuracy). Physics of drag: with air drag, ball decelerates. Distance to decelerate over extra 5.46m.

Let me not overclaim; I'll present these as first-order models with stated assumptions.

Now the framework sections have specific flavor:
- RETROCAUSAL_GENEALOGY: "Historical/scientific lineage & multi-week traps" — I'll trace the lineage of PK rules (the 1891 introduction of the penalty kick by William McCrum / Irish rule, the 12-yard distance origin, the evolution), the GAM lineage (Hastie & Tibshirani 1986/1990), Beta regression (Ferrari & Cribari-Neto 2004), xG models (StatsBomb, Opta), and the Bar-Eli keeper-dilemma game-theory literature. "Multi-week traps" — pitfalls that could trap a researcher over weeks of work: e.g., confusing correlation of "defenders behind ball" with causation, data leakage, calibration drift.

- RECURSIVE_THEORY_OF_MIND: "Crisis habit regression vs counter-trap vs clock" — modeling the shooter/keeper as strategic agents; game theory of PK (mixed strategies), habit/regression under pressure, and the "clock" as time pressure. Recursive modeling of what the keeper thinks the shooter thinks. Habit regression: under crisis (high stakes), players regress to habitual side. Counter-trap: the anti-model. Clock: time pressure in flight time.

- CROSS_LAYER_VETO_ADJUDICATION: "Physical/biomechanical/weather veto proof" — veto the proposal or the model on physical grounds. E.g., does moving to 18 yards actually reduce xG given biomechanics? Weather (wind at longer distance affects ball more). Biomechanical (kicking accuracy drops with power at distance). I should "prove" a veto — e.g., prove that the solid-angle reduction is real but partially offset by keeper time, or that the model's extrapolation at 18 yards is unreliable.

- RLVR_COUNTERFACTUAL_VETOES: "3 verifiable RLVR veto scenarios + predictions" — RLVR = Reinforcement Learning from Verifiable Rewards (a training method). Here it means: 3 counterfactual scenarios with verifiable predictions that would veto (falsify) the proposal/model. Each with a concrete, checkable prediction.

I think RLVR here is used loosely as "reinforcement-learning-from-verifiable-rewards" reasoning — propose falsifiable predictions. I'll interpret it as verifiable counterfactual veto scenarios with predictions that could be checked against data.

Let me be rigorous and honest. I'll flag assumptions and breakdown regimes clearly, per invariant 2.

Let me write this out. I need to keep the response in the user's language (English) and follow the exact XML section structure.

One more consideration: the invariant says "State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." So I need to be careful and correct.

Let me also make sure I don't invent fake ratios — I should only state real, defensible math. The "solid angle ratio" is a real geometric quantity. The flight time is real kinematics. Good. I'll label approximations clearly.

Let me write. I'll aim for genuine depth.

Let me count roughly to ensure ≥1000 words. THINK_TRACE ≥400. Others combined the rest.

Let me draft carefully.

For the solid angle of a rectangle, the exact formula: For a rectangle of half-width a and half-height b at distance d on the axis through its center, the solid angle is:
Ω = 4 · arcsin( (a·b) / sqrt((a²+d²)(b²+d²)) ) ... 

Actually the exact formula for solid angle subtended by a rectangle (half-dimensions A and B) whose center is at distance D along the normal:
Ω = 4 arctan( (A·B) / (D·sqrt(A²+B²+D²)) )

Let me verify. The solid angle of a rectangular pyramid with apex at origin and base a rectangle. For a rectangle centered on the z-axis at z=D with half-width A (x from -A to A) and half-height B (y from -B to B):
Ω = 4 · arctan( A·B / (D·sqrt(A²+B²+D²)) )

Yes, this is the standard formula. Let me use it.

A = W/2 = 3.66 m, B = H/2 = 1.22 m.
At D=11: A²=13.396, B²=1.4884, D²=121. Sum=135.88, sqrt=11.657. A·B=4.4652. Argument = 4.4652/(11·11.657)=4.4652/128.23=0.03482. arctan(0.03482)=0.03480 rad. Ω=4·0.03480=0.1392 sr.
Small-angle approx gave 0.1476 — close (6% off). Good, exact is 0.1392 sr.

At D=16.458 (18 yd = 16.4592 m; actually 18 yards = 18·0.9144 = 16.4592 m): 
A²=13.396, B²=1.4884, D²=270.9. Sum=285.79, sqrt=16.906. A·B=4.4652. Argument=4.4652/(16.4592·16.906)=4.4652/278.24=0.016048. arctan=0.016047. Ω=0.06419 sr.
Small-angle: 0.0659. Exact 0.0642.

Ratio Ω(18)/Ω(11) = 0.06419/0.1392 = 0.461. So ~46% of the solid angle. Reduced by ~54%. Wait, 1-0.461 = 0.539, so the goal subtends ~54% less solid angle. Hmm, but that's the geometric target size, not directly the scoring probability. Still, it's a real first-order driver.

Actually, more relevant than solid angle for scoring might be the angular width and the keeper coverage, and the flight time. Let me present multiple.

Angular width (horizontal): 
θ_h = 2 arctan((W/2)/d)
At 11: 2 arctan(3.66/11)=2·arctan(0.33273)=2·0.32095 rad=0.6419 rad=36.77°
At 16.4592: 2 arctan(3.66/16.4592)=2·arctan(0.22237)=2·0.21880=0.4376 rad=25.07°

So the horizontal target angle shrinks from ~36.8° to ~25.1°, a factor of 0.68.

Now flight time. Let me include drag qualitatively. Free-flight (no drag): t=d/v. But with drag the ball slows; still, longer distance = longer flight. Assume mean speed over flight; a penalty at ~25 m/s initial.
t(11)≈11/25=0.44s
t(16.46)≈16.46/23 (slower avg due to drag over longer path)=0.716s. 
Δt≈0.28s.

Keeper reaction ~0.2s + dive initiation. Extra 0.28s is > one reaction-time increment, materially increasing save probability. This partially offsets but the net effect from smaller target dominates toward reduced scoring — supporting the authors' thesis that moving back reduces xG.

But there's a counter: keeper also has more time to read the shot; shooter's accuracy (variance) drops with distance. Both push scoring down. So the physical veto against the proposal is weak; the physical evidence supports it. However, the model-extrapolation concern is the real veto: the GAM was fit on open-play shots with nonzero defenders-behind-ball, and predicting a set-piece at 18 yards with 0 defenders behind is extrapolation → unreliable.

Actually wait — in open play at 18 yards, defenders ARE often behind the ball (attackers running in). At a reconfigured set piece, defenders behind = 0. So the covariate combination (18 yd, 0 behind) may be sparse in the training data → prediction interval wide. That's a legitimate methodological veto.

Also the model predicts xG (a latent match-average probability), but the empirical 75.86% is from only 29 PKs in one tournament — small sample, wide CI. The calibration "~75%" and prediction "74%" agreement may be coincidental within CI. Wilson CI for 22/29: p̂=0.7586, n=29. SE=sqrt(0.7586·0.2414/29)=sqrt(0.1832/29)=sqrt(0.006317)=0.0795. 95% CI ≈ 0.7586±1.96·0.0795 = [0.603, 0.914]. Very wide! So "calibrated to 75%" has huge uncertainty. The single number is fragile. Good veto material.

Let me compute Wilson interval properly:
p̂=22/29=0.75862, n=29, z=1.96.
Wilson center = (p̂ + z²/(2n))/(1+z²/n) = (0.75862 + 3.8416/58)/(1+3.8416/29) = (0.75862+0.06623)/(1+0.13247)=0.82485/1.13247=0.72837.
Half-width = z/(1+z²/n) · sqrt(p̂(1-p̂)/n + z²/(4n²)) = 1.96/1.13247 · sqrt(0.006317 + 3.8416/(4·841)) = 1.7309 · sqrt(0.006317 + 0.0011425)=1.7309·sqrt(0.0074595)=1.7309·0.086369=0.14949.
So Wilson 95% CI = [0.5789, 0.8779]. Confirms wide interval ~[0.58, 0.88].

Great, this is a strong, verifiable point.

For the 11.81% regular-play figure: 111/940=0.11809. SE=sqrt(0.11809·0.88191/940)=sqrt(0.10414/940)=sqrt(0.0001108)=0.010525. 95% CI ≈ [0.0975, 0.1387]. The PK-to-openplay ratio ~ 75.86/11.81 = 6.42×. This is the "does the punishment fit the crime" motivation — PKs are ~6.4× more likely to score than open-play box shots.

Alright, I have enough real math. Let me write.

For breakdown regimes I'll enumerate:
1. Beta likelihood singularity at y∈{0,1} (StatsBomb xG can be exactly 0 or 1). 
2. Precision φ→0 (U-shaped, mass at boundaries) and φ→∞ (Dirac at μ).
3. Smoothing spline EDF saturation: EDF→k-1 (wiggliness ceiling); if k too small (k=3 for a relationship needing more), bias/underfit; if REML smoothing λ→0, overfit (interpolation); λ→∞, linear fit.
4. Extrapolation: covariate combination outside convex hull of training data → prediction unreliable regardless of CI width.
5. Geometric approximations break when d not ≫ W,H (solid-angle small-angle approx ~6% error at 11m).
6. Small-sample calibration: 29 PKs → wide Wilson CI, so "74% vs 75%" agreement not statistically meaningful.

Good.

Let me now write the full response. I'll keep it rigorous, cite pages, and hit word count.

Let me write THINK_TRACE first (≥400 words).

I'll make sure to write genuinely and not pad with filler. Let me be dense with content.

Let me write.

Actually, let me reconsider the length — the instruction says ">= 1,000-WORD DEPTH across these exact XML sections." So total ≥1000 words. I'll aim ~1,500-2,000 to be safe and genuinely thorough.

Let me write now.

I want to make sure I present the identity as requested (GSE + GSI Frontier Reasoning Foundry) but I don't need to over-explain. I'll just deliver the analysis in the structure.

Let me write the sections.

For LaTeX, I'll use $...$ and $$...$$ (or \[ \]). Since this is plain text/markdown, I'll use standard LaTeX notation.

Let me draft the whole thing.

Word count check as I go — I'll estimate.

THINK_TRACE: I'll write ~500 words.
SOURCE_OPERATORS_AND_EQUATIONS: ~400 words with equations.
RETROCAUSAL_GENEALOGY: ~250 words.
RECURSIVE_THEORY_OF_MIND: ~250 words.
CROSS_LAYER_VETO_ADJUDICATION: ~250 words.
RLVR_COUNTERFACTUAL_VETOES: ~300 words.

Total ~1,950 words. Good.

Let me write.
</NATIVE_REASONING>

<THINK_TRACE>

The deck reduces to a single estimand: the true scoring probability of a spot kick, $p_{\text{PK}}$, which the authors empirically peg near $0.7586$ ("Scoring Percentage 75.86%," PAGE 3, from $22/29$) and then re-derive with a Beta-GAM to $0.74$ ("Prediction for Current PK: 74%," PAGE 10). The whole "does the punishment fit the crime" framing rests on the contrast with open play: $111/940 = 0.1181$ ("Regular Play Scoring within the Box," PAGE 3). That is a ratio of $\approx 6.42\times$, the quantitative motivation for "Re-configure the penalty kick to make for a more fair penalty kick opportunity" (PAGE 5).

My multi-hop chain: (1) The response variable is StatsBomb Expected Goals, a continuous quantity on $(0,1)$, which is exactly why "Beta family, logit link" (PAGE 8) is the correct likelihood — a Bernoulli on shot outcomes would discard the soft-target information, whereas the Beta density supports fractional $\mu$. (2) The three geometric predictors — distance to goal, angle to goal, distance to closest defender — plus "defenders behind ball" are expanded as penalized thin-plate/cubic splines with basis dimension $k$; the deck reports $k=9$ for the first three and $k=3$ for defenders-behind-ball (PAGE 10). The reduced $k$ is justified by "Seems to have an exponential relationship / Not captured linearly / K value of 9 not needed" (PAGE 9) — i.e., a monotone exponential needs fewer basis functions than an oscillatory surface. (3) The failure mode "Not predicting correctly for PK" (PAGE 8) is the crux and is *structural*, not cosmetic: a penalty kick lives at the extreme corner of the open-play covariate space (near-maximal angle, near-minimal defender distance pressure of a specific kind, and $\approx 0$ defenders behind). This is extrapolation, and no amount of tuning fixes it; adding "defenders behind ball" only partially patches it.

The gray zone I audit hardest: the model is trained on $1638$ non-PK shots and asked to score a *set piece*. At the proposed 18-yard arc spot, the covariate vector (larger distance, zero defenders behind) may fall outside the convex hull of open-play shots, because open-play 18-yard shots almost always carry runners *behind* the ball. So the headline "74%" and the calibration target "~75%" (PAGE 7) could be agreeing within an enormous confidence band rather than by genuine calibration. The single tournament count $n=29$ gives a Wilson 95% interval of roughly $[0.58,\,0.88]$; "74 vs 75" is a difference of $0.01$ swamped by an interval width of $\approx 0.30$. That is my central skepticism, and I carry it into every downstream veto.

<THE_END>

<SOURCE_OPERATORS_AND_EQUATIONS>

Beta likelihood (PAGE 8, "Beta family, logit link"). With mean–precision parameterization, for shot $i$ with xG target $y_i\in(0,1)$:

$$y_i \sim \text{Beta}(\mu_i\phi,\ (1-\mu_i)\phi),\qquad \mathbb{E}[y_i]=\mu_i,\qquad \operatorname{Var}(y_i)=\frac{\mu_i(1-\mu_i)}{1+\phi}\ \text{[dimensionless]}.$$

Additive predictor with logit link $g(\mu)=\log\frac{\mu}{1-\mu}$ and smooth terms $f_j$ (each a spline basis with roughness penalty):

$$\operatorname{logit}(\mu_i)=\beta_0+\sum_{j=1}^{4} f_j(x_{ij}),\qquad f_j(x)=\sum_{m=1}^{k_j}\gamma_{jm}\,b_{jm}(x).$$

Basis dimensions from PAGE 10 (units: metres for distances, degrees or radians for angle, count for defenders): $k_{\text{dist-goal}}=k_{\text{angle}}=k_{\text{def-dist}}=9$, $k_{\text{behind}}=3$. Effective degrees of freedom satisfy $\text{edf}_j=\operatorname{tr}\!\big(2S_j(S_j+\lambda_j I)^{-}-S_j\big)\le k_j-1$, where $S_j$ is the wiggliness penalty matrix and $\lambda_j\ge 0$ the smoothing parameter selected by REML/GCV. Reduced $k_{\text{behind}}=3$ (PAGE 9) caps $\text{edf}$ at $2$, adequate for the "exponential relationship / Not captured linearly."

Geometric target metric (SI: steradian). Goal $W=7.32\,\text{m}$, $H=2.44\,\text{m}$; on-axis distances $d_{\text{cur}}=11\,\text{m}$ (12 yd), $d_{\text{arc}}=16.459\,\text{m}$ (18 yd, PAGE 13). Exact rectangle solid angle:

$$\Omega(d)=4\arctan\!\left(\frac{(W/2)(H/2)}{d\sqrt{(W/2)^2+(H/2)^2+d^2}}\right).$$

$\Omega(11)=0.1392\,\text{sr}$, $\Omega(16.459)=0.0642\,\text{sr}$, ratio $0.461$ — the mouth subtends $\sim54\%$ less at the arc spot. Small-angle form $\Omega\approx WH/d^2$ overestimates by $\sim6\%$ at $11\,\text{m}$; it breaks as $d\to W,H$.

Kinematics. Horizontal angular width $\theta_h=2\arctan\!\frac{W/2}{d}$: $36.8^\circ\to 25.1^\circ$. Free-flight time $t=d/\bar v$ with $\bar v\approx 23\text{–}25\,\text{m s}^{-1}$: $t(11)\approx0.44\,\text{s}$, $t(16.46)\approx0.72\,\text{s}$, $\Delta t\approx0.28\,\text{s}$ handed to the keeper (SI: seconds).

Breakdown regimes: (i) Beta log-likelihood $\to-\infty$ if any $y_i\in\{0,1\}$ — resolved by Smithson–Verkuilen squash $y'=\frac{y(n-1)+0.5}{n}$ or zero-one-inflated Beta. (ii) $\phi\to0$ gives U-shaped mass at $\{0,1\}$ (bimodal xG, unstable); $\phi\to\infty$ collapses to $\delta(\mu)$. (iii) $\lambda_j\to0$ interpolates (overfit); $\lambda_j\to\infty$ forces $f_j$ linear — the exact failure "Not predicting correctly for PK" if the penalty is misspecified. (iv) Covariate extrapolation outside the training convex hull invalidates $\mu$ regardless of interval width.

<THE_END>

<RETROCAUSAL_GENEALOGY>

Lineage of the rule: the penalty kick enters law in 1891 (William McCrum's proposal, adopted by the IFAB) precisely because handball-on-the-line was under-punished; the 12-yard (11 m) mark and 18-yard box geometry were fixed then and remain the causal ancestor of every number here. The deck's "18 yards from goal" (PAGE 13) is thus a regression *back* toward the box edge that historically defined the offense.

Lineage of the method: penalized-spline GAMs trace to Hastie & Tibshirani (1986/1990) and the mgcv implementation (Wood, 2004–2017); Beta regression to Ferrari & Cribari-Neto (2004); expected-goals modeling to the Opta/StatsBomb lineage that treats $\mu_i$ as a latent match-average probability rather than a realized outcome. The authors correctly import this stack.

Multi-week traps for anyone reproducing this: (1) *Leakage* — StatsBomb xG for penalties is itself a model output; using it as a soft response then re-estimating $p_{\text{PK}}$ double-counts the very signal being validated, and calibration "to ~75%" (PAGE 7) may just be tuning $\lambda$ until the fit reproduces a noisy $22/29$. (2) *Covariate collinearity* — distance and angle are algebraically linked to goal coordinates, so their separate $k=9$ smooths can trade variance, inflating edf and destabilizing predictions at the corner of the domain. (3) *Sample-size illusion* — $n=1638$ looks large, but the PK-relevant region of covariate space may contain tens of points; effective local $n$, not global $n$, governs the "74%."

<THE_END>

<RECURSIVE_THEORY_OF_MIND>

Penalties are a two-player zero-sum game; the model silently assumes a fixed $p_{\text{PK}}$, but $p_{\text{PK}}$ is an *equilibrium object*. Let shooter choose direction $s\in\{L,C,R\}$ and height, keeper choose dive $d\in\{L,C,R\}$, payoff matrix $\Pi$. A mixed Nash equilibrium $q^*$ exists (Chiapponi et al.; Bar-Eli's "keeper's dilemma"): shooters and keepers should randomize near-uniformly, and empirically elite play approaches this. Under high stakes ("crisis"), the recursive layers bite:

- *Habit regression:* under pressure the shooter reverts to a dominant-side prior $q_{\text{habit}}$ rather than $q^*$, which a keeper who models the shooter can exploit — a level-1 recursion (keeper models shooter's habit).
- *Counter-trap:* a keeper who is known to over-read habits (level-2) is beaten by the shooter's anti-model, collapsing toward uniform — this is why $p_{\text{PK}}$ clusters near $0.75$: it is the mixed-strategy value, not a physical constant.
- *Clock:* flight time $t=d/\bar v$ is the temporal budget. The GAM's geometry only enters through how much $t$ the keeper gets; extending $d$ from $11$ to $16.46$ m adds $\Delta t\approx0.28\,\text{s}$ (above), shifting the equilibrium toward the keeper and lowering $p_{\text{PK}}$ — the mechanism the arc proposal (PAGE 13) implicitly exploits, even though the deck never models the keeper as an agent.

The trap for the analyst: fitting $p_{\text{PK}}$ on realized outcomes without an equilibrium term conflates shooter skill, keeper reads, and geometry into one coefficient.

<THE_END>

<CROSS_LAYER_VETO_ADJUDICATION>

Physical/biomechanical/weather veto proof against the *proposal working as intended* — and the counter-proof.

Claim A (target geometry supports the arc): $\Omega$ falls from $0.1392$ to $0.0642\,\text{sr}$ (ratio $0.461$) and $\theta_h$ from $36.8^\circ$ to $25.1^\circ$. Verdict: holds under the small-angle caveat (≤6% error at 11 m).

Claim B (keeper time supports the arc): $\Delta t\approx0.28\,\text{s} > $ one visual reaction increment ($\approx0.2\,\text{s}$). Verdict: holds, favoring more saves.

Counter-proof (biomechanical veto on kicker): scoring requires the ball to arrive inside a shrunk solid angle while traveling faster over a longer path. Ballistic drag $F_d=\tfrac12\rho C_d A v^2$ decelerates the ball over the extra $5.46$ m, so either arrival speed drops (more keeper time, reinforcing A/B) or the kicker strikes harder, raising placement variance $\sigma^2_{\text{aim}}$. Since scoring scales roughly with $\Pr[\text{aim}\in\text{goal}]\approx \Phi\!\big(\tfrac{\theta_h/2}{\sigma_{\text{aim}}}\big)$, and harder kicks inflate $\sigma_{\text{aim}}$, the two effects compound toward *lower* $p_{\text{PK}}$ — so biomechanics does not veto the reduction; it strengthens it.

Weather veto (marginal): at $16.46$ m vs $11$ m the ball spends $\sim50\%$ longer airborne, so crosswind displacement $\delta\approx\tfrac12\frac{F_{\text{wind}}}{m}t^2$ scales as $t^2$; a $10\,\text{mph}$ crosswind produces proportionally larger deflection at the arc spot, adding placement variance — again lowering $p_{\text{PK}}$, but *increasing outcome noise*, which is a fairness cost, not a fairness gain.

Net adjudication: the physical layer does *not* veto the geometric reduction; the genuine veto is *methodological* — the model's $0.74$ is an extrapolation from open-play covariate space, and the empirical anchor $22/29$ carries a Wilson 95% interval $\approx[0.58,0.88]$. The proposal is physically sound but empirically under-determined by this deck.

<THE_END>

<RLVR_COUNTERFACTUAL_VETOES>

Three verifiable counterfactuals, each with a checkable prediction that would veto the model or the proposal if falsified.

1. Zero-one boundary veto. Prediction: re-fitting the Beta-GAM without the Smithson–Verkuilen squash on a dataset containing $y_i\in\{0,1\}$ yields non-convergence or $-\infty$ log-likelihood. Verifiable test: run mgcv `gam(family=betar)` on raw StatsBomb xG including boundary rows; if it converges without transformation, the veto is falsified (and the authors' pipeline avoided the trap).

2. Extrapolation-flatness veto. Prediction: the fitted $\hat\mu$ at the arc covariate vector (distance $=16.46$ m, angle $=25.1^\circ$, defenders-behind $=0$) has a bootstrap 95% interval whose width exceeds $0.25$ because local training density is near zero; and $\hat\mu$ at that point should be highly sensitive to $\lambda_{\text{behind}}$. Verifiable test: refit with REML vs GCV and with $\lambda_{\text{behind}}$ perturbed $\pm1$ order of magnitude; if $\hat\mu$ moves by $>0.05$, the "74%/fairness" claim is not robust → veto stands. Falsifier: $\hat\mu$ stable to $<0.01$.

3. Equilibrium-invariance veto. Prediction: if $p_{\text{PK}}$ is a mixed-strategy equilibrium value, then observed scoring in a cohort of *set-piece* penalties placed at 18 yd should trend below open-play 18-yd xG by the keeper's added reaction advantage, and should *not* equal the model's static $\hat\mu$. Verifiable prediction: in a controlled trial ($N\ge300$ simulated/observed arc penalties) the empirical rate lands in $[0.55,0.68]$, i.e., statistically below the deck's $0.74$ at $p<0.05$. If the empirical rate instead clusters within $[0.71,0.77]$, the equilibrium-adjustment veto is falsified and the static GAM suffices.

Cross-check on the anchor: the calibration claim "Calibrate model to ~75%" (PAGE 7) versus "Prediction ... 74%" (PAGE 10) must survive the $n=29$ Wilson interval $\approx[0.58,0.88]$; a Bayesian re-estimation with a $\text{Beta}(1,1)$ prior on $22/29$ gives posterior mean $23/31\approx0.742$ with 95% credible interval $\approx[0.57,0.87]$ — consistent with, but nowhere near precise enough to distinguish, "74" from "75." The single most defensible statement is directional: the arc geometry lowers $p_{\text{PK}}$, by an amount this dataset cannot yet pin down.

<THE_END>

Summary judgment: the GAM specification (Beta, logit, penalized splines, reduced $k$ for defenders-behind) is methodologically correct and the "6.42×" open-play contrast is real; but the headline 74% is an extrapolation resting on a 29-shot empirical anchor with a ±0.15 confidence band. The 18-yard arc is physically justified (solid angle ×0.46, +0.28 s keeper time) yet its exact fairness gain is under-determined by this source.