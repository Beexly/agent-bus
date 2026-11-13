---
source: "2026 - When the Strike Zone Becomes Algorithmic Umpire Judgment and Player Challenge Decisions under AI Review - Lee et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/preprints/arXiv/2026"
pages: 31
model: baidu/ernie-5.5-flash-preview:free
words: 6370
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about the Automated Ball-Strike (ABS) challenge system in MLB, using the "GSE + GSI Frontier Reasoning Foundry" framework. The instructions specify a particular format with XML sections, formal LaTeX equations, page citations, and at least 1,000 words across the required sections.

Let me note the strict invariants:
1. ZERO BETTING LINES - no spreads, totals, moneylines, odds. This is fine, the paper doesn't have any.
2. ZERO TOY EQUATIONS - use formal LaTeX, SI/information/probability units, assumptions, singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-word depth across the exact XML sections listed.

The required sections:
- <THINK_TRACE> (>=400 words) - Deep multi-hop derivation & gray-zone audit
- <SOURCE_OPERATORS_AND_EQUATIONS> - Formal LaTeX, units, page citations, breakdown
- <RETROCAUSAL_GENEALOGY> - Historical/scientific lineage & multi-week traps
- <RECURSIVE_THEORY_OF_MIND> - Crisis habit regression vs counter-trap vs clock
- <CROSS_LAYER_VETO_ADJUDICATION> - Physical/biomechanical/weather veto proof
- <RLVR_COUNTERFACTUAL_VETOES> - 3 verifiable RLVR veto scenarios + predictions

This is a legitimate analytical task — analyzing an academic paper on human-AI interaction in sports officiating. There's no betting involved (the invariant explicitly forbids betting lines, and I'll respect that). The paper is about signal detection theory, psychophysics of umpire judgment, and player challenge decisions.

Let me carefully work through the actual content of the paper so my analysis is grounded in the real equations and findings, with proper citations.

Key equations from the paper:

Equation (1) - Reference zone geometry [PAGE 8]:
$$R^{top}_b = 0.535 h_b, \quad R^{bot}_b = 0.270 h_b, \quad R_{side} = W, \quad W = 8.5\text{ in}$$

Equation (2) - Ball radius expansion [PAGE 8]:
$$\tilde{R}^{top}_b = R^{top}_b + \rho, \quad \tilde{R}^{bot}_b = R^{bot}_b - \rho, \quad \tilde{R}_{side} = R_{side} + \rho$$
where ρ = 1.45 inches.

Equation (3) - Signed distances [PAGE 8]:
$$d^{top}_i = \tilde{R}^{top}_{b(i)} - z_i$$
$$d^{bot}_i = z_i - \tilde{R}^{bot}_{b(i)}$$
$$d^{ins}_i = \tilde{R}_{side} - s_i x_i$$
$$d^{out}_i = \tilde{R}_{side} + s_i x_i$$
where s_i = -1 for right-handed hitters and s_i = +1 for left-handed hitters.

Equation (4) - Edge sample [PAGE 9]:
$$B_e = \{i : |d^e_i| \le b, \min_{o \perp e} d^o_i > c_o\}$$
with b = 3.0 inches, c = 3.7 inches.

Equation (5) - Psychophysical logistic model [PAGE 9]:
$$\Pr(y_i = 1) = \text{logit}^{-1}\left(\frac{d^e_i + \alpha}{\sigma}\right)$$

Equation (6) & (7) - Adjustment term [PAGE 10]:
$$\Pr(y_i = 1) = \text{logit}^{-1}\left(\frac{d^e_i + \alpha}{\sigma} + A_i\right)$$
$$A_i = \lambda \Delta Z_{b(i)} + \rho_R R^c_i + \boldsymbol{\gamma}^\top \tilde{X}_i + \boldsymbol{\tau}^\top T_i$$

Equation (8) & (9) - Linear logistic form and recovery [PAGE 11]:
$$\text{logit}\,\Pr(y_i = 1) = \beta_0 + \beta_d d^e_i + A_i$$
$$\alpha = \frac{\beta_0}{\beta_d}, \quad \sigma = \frac{1}{\beta_d}$$

Equation (10) - Challenge exposure indicators [PAGE 12]:
$$A^{own,v,s}_i = \mathbb{1}[o_i > F^{v,s}_{g_i, e_i}]$$
$$A^{oth,v,s}_i = \mathbb{1}[o_i > \min_{e \ne e_i} F^{v,s}_{g_i, e}]$$

Equation (11), (12) - Event models [PAGE 13]:
$$\eta_i = a_{c_i} + \beta_d d_i + x_i^\top \gamma + \sum_{m,v,s} \tau_{m,v,s} A^{m,v,s}_i$$
$$\eta_i = a_{c_i} + \beta_d d_i + x_i^\top \gamma + \sum_{m,v,s} A^{m,v,s}_i (\tau_{m,v,s} + \delta_{m,v,s} d_i)$$

Equation (13), (14) - Contrasts [PAGE 13]:
$$C_{m,s} = \tau_{m,ov,s} - \tau_{m,up,s}$$
$$\Delta_{own}(s) = \frac{C_{own,s}}{\beta_d}, \quad \Delta_{targeted}(s) = \frac{C_{own,s} - C_{oth,s}}{\beta_d}$$

Equation (15) - Transition width contrast [PAGE 14]:
$$\sigma_{m,v,s} = \frac{1}{\beta_d + \delta_{m,v,s}}, \quad \Delta_{\sigma,m}(s) = \sigma_{m,ov,s} - \sigma_{m,up,s}$$

Equation (16), (17) - Condition-specific [PAGE 18]:
$$\eta_i = \eta^{(0)}_i + \sum_{g \ne g_0} G_{ig}(\tau_g + \delta_g d_i)$$
$$\sigma_g = \frac{1}{\beta_d + \delta_g}$$

Equation (18) - Miscall rates [PAGE 18]:
$$r_{wide} = \frac{N(\text{outside-zone pitch called strike})}{N(\text{outside-zone pitches})}, \quad r_{tight} = \frac{N(\text{inside-zone pitch called ball})}{N(\text{inside-zone pitches})}$$

Equation (19), (20) - Challenge margin [PAGE 23]:
$$d_i = \min\{W' + x_i, W' - x_i, top_i - z_i, z_i - bot_i\}, \quad W' = W + \rho$$
$$m_i = \begin{cases} -d_i & \text{if original call was strike} \\ +d_i & \text{if original call was ball} \end{cases}$$

Key empirical findings:
- 4,114,256 called pitches from 2015-2026, 8,447 challenges in 2026, 141 umpires [PAGE 1, 3]
- 4.28 challenges per game, at least one in 98.7% of games, 4,525 (53.6%) overturned [PAGE 2]
- 1,974 games through August 24, 2026 [PAGE 2]
- 8,283 challenged pitches in final sample [PAGE 7]
- Band sample: 842,456 pitches [PAGE 9]
- b = 3.0 inches band, spans 2.34 to 4.26 transition widths σ, median 2.95 [PAGE 8]
- c = 3.7 inches corner threshold, cell-specific 1.13 to 3.66 [PAGE 9]
- Within-game sample: 59,076 pitches, 7,040 game-by-edge cells [PAGE 14]
- Next-game: 25,938 pitches [PAGE 14]
- Challenge opportunities: 146,725, actual challenges 7,381, 5.03% usage [PAGE 24]

RQ1 findings [PAGE 14-17]:
- α (boundary) shifted inward in 2026, departure at whole-zone, bottom, inside, outside with p<0.05; top edge within range p>0.05
- σ (transition width) remained consistent with pre-adoption trend, p>0.05 throughout
- After "too tight" ruling, outward movement p=0.014; "too wide" inward movement p=0.145 (not significant)
- Next game: p=0.996 (too tight), p=0.670 (too wide) - no persistence

RQ2 findings [PAGE 19-23]:
- Count-dependent ordering remains (3-0 widest, 0-2 tightest) but all shift inward
- 3-0, 0-0, 3-2 beyond 95% PI; 0-2 near lower bound
- Player status: batter status groups converge, all three α below forecast p<0.05; pitcher similar
- Pitch type: overall miscall rates lower for all six types (16.2% curveball to 29.0% sinker reductions)
- Wide-side errors: reductions 32.8% to 50.5%, all six significant p<0.05
- Tight-side: mixed, only changeup significant +36.1% p<0.05
- Table 1 data [PAGE 22]

RQ3 findings [PAGE 24-26]:
- Challenge rates rise with geometric severity but well below one
- Batting side 0.19-0.30 (1-3 inches into overturnable region), fielding side 0.31-0.65
- Challenge decisions track observable information (p̂^O) more than geometry (p̂^G)
- p̂^G range ~0.06, p̂^O range ~0.21
- Remaining inventory: modest effect, curves separate only at upper end
- Walk-forward procedure for out-of-sample prediction [PAGE 24]

Wang et al. [64] on zone development - reference [PAGE 4, 8]
Flannagan et al. [13] psychophysics model [PAGE 3, 5, 9]
KBO ABS introduced 2024 [PAGE 1]
MLB challenge-based ABS 2026 [PAGE 1]

Now, the "gray-zone audit" and gray zones. Let me think about what the interesting gray zones are:

1. The confounding between the new zone definition and the review system (explicitly noted [PAGE 3]). They handle this with a common spatial reference.

2. The non-randomized nature of overturn vs upheld comparison [PAGE 12]. They're careful to say this is "differential response" not "isolated causal effect."

3. The observability gap for players: m_i is available to analyst but not player [PAGE 24]. p̂^O vs p̂^G.

4. The interpretation of α and σ as criterion and sensitivity requires the response model assumptions to hold. The paper is careful [PAGE 5, 6]: "they do not uniquely identify an underlying cognitive mechanism."

5. The wide-side vs tight-side asymmetry: an inward boundary shift mechanically reduces wide-side errors and can increase tight-side errors. This is a "holding the pitch-location distribution fixed" argument [PAGE 19].

Let me think about the singularity/breakdown regimes for the equations:

- Equation (9): α = β_0/β_d and σ = 1/β_d. Breakdown when β_d → 0 (division by zero). β_d → 0 means the strike probability is independent of pitch location — no spatial sensitivity. This is a genuine singularity. As β_d → 0+, σ → +∞. As β_d → 0-, σ → -∞ (negative transition width is meaningless, indicating model breakdown / non-monotonicity).

- Equation (5): logit^{-1} saturates at 0 and 1 as d^e_i → ±∞. For d → +∞, Pr → 1; d → -∞, Pr → 0.

- The band b = 3.0 inches and the corner threshold: if bands are too narrow, small-cell estimation problems. They note cells have "fewer than eight calls on average" [PAGE 13].

- Conditional logistic: conditioning on number of strike calls within cell removes intercept. Breakdown: if a cell has all strikes or all balls (no variation in outcome), the conditional likelihood contribution is degenerate — that cell drops out. This is a real breakdown regime.

- Equation (18): r_wide and r_tight are proportions; Wilson intervals. Breakdown when denominators are small. They retain cells with at least 209 pitches [PAGE 18].

- Equation (19): d_i = min{...} — the min function has non-differentiable kinks at boundaries (corners of the zone). At corners, the gradient is undefined.

Let me think about signal detection theory mapping. In SDT, for a yes/no task with two distributions, d' (sensitivity) is the separation between signal and noise distributions in standard-deviation units, and c (criterion) is the placement of the decision threshold. Here the psychophysical model maps:
- σ (transition width) ↔ sensitivity (smaller σ = sharper = higher sensitivity). In logistic terms, β_d = 1/σ is the slope, analogous to 1/(SD·√2) type relationships.
- α (boundary displacement) ↔ criterion (where the 50% point sits).

Actually let me connect σ to a proper SDT d'. In a logistic psychometric function P(correct or "strike") = logit^{-1}((d+α)/σ), the slope at the 50% point is 1/(4σ) (derivative of logit^{-1} at 0 is 1/4, times 1/σ). The relationship between the logistic and the Gaussian: logistic with scale σ approximates a cumulative Gaussian with SD = σ·√3/π. So sensitivity could be expressed as separation. But I should be careful not to invent — the paper just says "smaller σ indicates greater spatial sensitivity." I can note the formal mapping but flag it as an approximation.

Actually, let me relate to d'. If we think of the internal decision variable as pitch location with some perceptual noise of SD σ_p, and the umpire calls strike when internal estimate exceeds a criterion, then the psychometric function is Φ((d + α)/σ_p) with a cumulative Gaussian, or logit^{-1}((d+α)/σ) with logistic. The 0.27 to 0.73 range over ±σ is noted [PAGE 9]: "moving from −σ to +σ around the 50-percent point changes the fitted strike probability from approximately 0.27 to 0.73." Let me verify: logit^{-1}(1) = e/(1+e) = 0.731. logit^{-1}(-1) = 1/(1+e) = 0.269. Yes, that's correct. So the ±σ interval spans 0.27 to 0.73, which is the logistic analog of a ±1 SD interval. Good, I can verify this.

Now let me think about the information-theoretic units for the challenge-decision part (RQ3). The paper compares p̂^G (geometry-aware overturn probability) and p̂^O (observable-information overturn probability). We could quantify "how much information about overturn is captured by observable cues" using mutual information I(overturn; observable) vs I(overturn; geometry). The fact that challenge rates span only 0.06 against p̂^G but 0.21 against p̂^O means the players' behavior is more strongly coupled to the observable-information sigma-algebra than the geometric one. This is a genuine information-theoretic statement. I should be careful and precise: challenge rate as a function of predicted probability — a steeper slope with p̂^O means dP(challenge)/d p̂^O > dP(challenge)/d p̂^G.

Also the "many overturnable calls unchallenged" — from Figure 9(a), batting 0.19-0.30 and fielding 0.31-0.65 even at 1-3 inches into overturnable region. So the challenge policy is far from the "challenge all overturnable calls" oracle. The efficiency gap: expected correct challenges left on the table.

Let me think about the RLVR (Reinforcement Learning from Verifiable Rewards) counterfactual vetoes. RLVR is a technique where models are trained on tasks with verifiable/checkable rewards. Here I think the framing is: treat the umpire (and player) as agents being "rewarded" by the ABS oracle (verifiable feedback), and construct counterfactual scenarios where the observed behavior would differ, generating testable predictions. Let me construct 3 verifiable veto scenarios:

1. If umpires were purely responding to verifiable ABS feedback (like an RLVR-trained agent maximizing agreement with the oracle), then post-overturn adjustments should persist and generalize (because the reward signal is consistent). But the data show no persistence into next game (p=0.996, p=0.670). This vetoes the "slow perceptual recalibration / implicit learning" hypothesis and supports "explicit, rapidly-decaying working-memory adjustment." Prediction: if we gave umpires full ABS feedback on every pitch (like KBO), persistence would emerge. Falsifiable.

2. If players were expected-value maximizers over verifiable overturn outcomes, they would challenge all calls with p̂^G above the break-even threshold (where value of challenge > value of retained challenge). But challenge rates are 0.19-0.65 even deep in overturnable region. This vetoes the pure geometric EV-maximizer. Prediction: challenge rate should correlate with p̂^O not p̂^G, and should not jump discontinuously at the p̂^G break-even.

3. The break-even for a challenge: with 2 challenges and retention-on-success, the dynamic programming value. Abramitzky et al. [1] modeled this. Under optimal play, a challenge is taken when the expected benefit exceeds the option value of the retained challenge. The modest inventory effect [PAGE 26] vetoes strong conservation. Prediction: as game state (leverage) changes, challenge threshold shifts.

Let me be careful and construct verifiable predictions.

Now the CROSS_LAYER_VETO_ADJUDICATION - "Physical/biomechanical/weather veto proof." This is where I need to check whether the observed umpire boundary shift could be explained by physical/biomechanical/weather factors rather than the AI review. This is exactly the confounding the paper addresses:
- Measurement plane change (front vs midpoint) [PAGE 7-8]: handled by trajectory reconstruction.
- Batter height geometry: handled with R^c_i centering [PAGE 10].
- Ballpark/weather/environment: handled with game-by-edge conditional fixed effects (a_{c_i}) [PAGE 13].
- Pitch type / motion (curveball perceived break) [PAGE 23]: Shapiro et al. [56].

The "veto proof" would be: can any physical/biomechanical/weather explanation account for the wide-side miscall reduction (32.8%-50.5%)? The paper argues it's the inward boundary shift. Let me construct a proof that physical factors are vetoed:
- The within-game conditional logistic removes all game-level (ballpark, weather) confounds by conditioning on game-by-edge cells. So weather/park cannot explain the within-game post-overturn Δ_own.
- The pitch-type analysis shows the wide-side reduction is uniform across all six pitch types — if it were a biomechanical/motion-perception effect, it should be pitch-type-specific. The uniformity vetoes a pitch-specific physical explanation.

Good. Let me structure this.

Now, the "weather veto" — baseball is played in various conditions; temperature affects ball flight (a warm day, thinner air, ball carries). But this affects the actual pitch trajectory, which is measured by tracking, not the umpire's judgment. And the conditional FE removes game-level weather. Also the reference zone is defined by batter height, independent of weather.

Let me also address the "gray-zone audit" — areas of genuine uncertainty:
1. The α/σ → criterion/sensitivity mapping is model-dependent.
2. The overturn-upheld contrast is non-randomized.
3. Observable information is operationalized narrowly (the models p̂^O — what's in them? The paper says "information available when the challenge decision is made" but doesn't fully enumerate — this is a gray zone).
4. The persistence test has wide next-game CIs — can't rule out small carryover.

Let me now also think about "multi-hop derivation." I should derive something. E.g., derive the total effect of an inward α shift on wide vs tight miscall rates.

Consider the fitted psychometric function P(strike | d) = logit^{-1}((d+α)/σ). The wide-side miscall rate is r_wide = P(strike | d < 0, outside) averaged over the outside-pitch distribution; tight-side r_tight = P(ball | d > 0, inside) = 1 - P(strike | d>0). 

If α decreases (inward shift, boundary moves toward center, i.e., fewer strikes called for a given d... wait let me check sign). From [PAGE 9]: "fitted strike probability equals 0.5 at d^e_i = −α, so α > 0 indicates that the called boundary lies outside the common reference." So α > 0 means umpire calls strikes for pitches outside the reference (generous). An inward shift means α decreases. As α decreases, for a fixed outside pitch (d < 0), (d + α)/σ decreases, so P(strike) decreases → r_wide decreases. For a fixed inside pitch (d > 0), P(strike) decreases → P(ball) = 1 - P(strike) increases → r_tight increases. 

This matches [PAGE 19]: "an inward boundary shift should reduce wide-side errors while tending to increase tight-side errors." And the data show wide-side reductions (32.8%-50.5%) with tight-side flat/mixed. So the observed pattern is consistent with an inward α shift plus possibly some sharpening (σ decrease). The curveball case: σ departs significantly (0.94 vs 1.00, p<0.05) but retains largest σ — so curveball gets both the inward shift AND a slight sharpening, but tight-side errors rise (+8.1%), meaning the inward shift dominates. The changeup: tight-side +36.1% significant — large inward shift concentrated, wide-side -50.5% (largest wide reduction) — so changeup has the biggest inward shift. This is a nice multi-hop consistency check.

Let me formalize the Jacobian: ∂r_wide/∂α < 0 and ∂r_tight/∂α > 0, both holding the pitch-location distribution f(d) fixed. The magnitudes depend on the density of pitches near each edge and σ.

Now let me write this all up. I need to hit >= 1,000 words total across the sections, with THINK_TRACE >= 400 words. Let me be thorough and rigorous. Let me aim for substantial depth in each.

Let me make sure I cite page markers and verbatim quotes. Let me gather good verbatim quotes:

- [PAGE 1]: "The Automated Ball-Strike challenge system that Major League Baseball adopted in 2026 offers a distinctive setting for studying human AI interaction in which umpires make every ball and strike call, while players can selectively ask an automated system to publicly overturn those decisions."

- [PAGE 3]: "changes in 2026 must be interpreted with caution, since the introduction of challenge-based ABS also brought a new operational definition of the strike zone. A change in umpire calling patterns could therefore be associated with the new review system, the change in the zone used to evaluate pitches, or both."

- [PAGE 8]: "A pitch is ruled a strike when any part of the ball intersects the zone. Accordingly, we expand each geometric edge by the radius of the baseball, 𝜌= 1.45 inches."

- [PAGE 9]: "The fitted strike probability equals 0.5 at 𝑑𝑒𝑖= −𝛼, so 𝛼> 0 indicates that the called boundary lies outside the common reference, while 𝛼< 0 indicates that it lies inside." and "moving from −𝜎to +𝜎around the 50-percent point changes the fitted strike probability from approximately 0.27 to 0.73."

- [PAGE 12]: "It is not randomized, however, since overturned and upheld challenges may differ in pitch location and in the circumstances that led players to challenge. Accordingly, we interpret the contrast as a differential response following corrective versus non-corrective review rather than as an isolated causal effect of feedback."

- [PAGE 13]: "Each cell contains fewer than eight calls on average, making direct estimation of thousands of cell-specific intercepts prone to small-cell estimation problems."

- [PAGE 16]: "Most reviewed-edge confidence intervals still include zero, so the data provide clearer evidence about the direction and spatial concentration of the response than its precise magnitude at any single edge."

- [PAGE 19]: "Holding the pitch-location distribution fixed, an inward boundary shift should reduce wide-side errors while tending to increase tight-side errors. A sharper transition, by contrast, can reduce disagreement on both sides."

- [PAGE 24]: "Since 𝑚𝑖is derived from tracked pitch location, it is available to the analyst but not directly to the player making the challenge decision."

- [PAGE 25]: "Between one and three inches into the overturnable region, batting-side rates range from approximately 0.19 to 0.30, while fielding-side rates range from approximately 0.31 to 0.65."

- [PAGE 25]: "Challenge rates nevertheless remain well below one even when 𝑝̂𝑂is high, indicating that observable information alone does not explain every unchallenged error."

- [PAGE 27]: on KBO feedback channels.

Let me write this out now. I'll keep the tone analytical and precise. I need to respect the invariant of no betting lines — I will not mention odds/spreads/etc. (This paper has none anyway.) I should note this is a research analysis, not a betting context, which aligns naturally.

Let me also double check the logit derivative claim. d/dx logit^{-1}(x) = logit^{-1}(x)(1 - logit^{-1}(x)). At x=0, = 0.5·0.5 = 0.25. Chain rule with (d+α)/σ: dP/dd = (1/σ)·P(1-P). At d=-α, P=0.5, so slope = 1/(4σ). Good. And over ±σ: at d+α = +σ, x=1, P = e^1/(1+e^1) = 2.718/3.718 = 0.731; at x=-1, P=0.269. Verified.

Now for the mutual information framing in RQ3, let me be careful. I'll frame it as: the observed challenge-rate curve C(p) = P(challenge | predicted overturn prob = p). The "coupling" or responsiveness is dC/dp integrated. Against p̂^G the total span is ~0.06; against p̂^O it's ~0.21. So the slope ratio is roughly 3.5×. I can say the behavior's mutual information with observable cues exceeds that with geometry. But strictly, span of C over the range of p is a coarse proxy, not exactly mutual information. I'll be precise and call it a responsiveness proxy / a monotone coupling, and note that a full information-theoretic decomposition would require the joint distribution. Good — that's a gray-zone caveat.

Let me also mention units carefully: distances in inches (SI-ish, though baseball uses inches), probabilities dimensionless, α and σ in inches, β_d in per-inch (logit units per inch), β_0 dimensionless (logit). Logit is dimensionless (log-odds). σ in inches. The adjustment terms: λ (logit per inch of zone discrepancy), ρ_R (logit per inch of batter geometry residual), γ (logit per covariate), τ (logit per treatment). All in log-odds units since they add to the logit scale. Good.

Let me write the final answer. I'll aim for depth. Let me count roughly — THINK_TRACE ~500, SOURCE_OPERATORS ~500, RETROCAUSAL ~350, RECURSIVE_TOM ~350, CROSS_LAYER_VETO ~400, RLVR ~450. That's ~2,550 words, well above 1,000.

Let me write it.
</NATIVE_REASONING>

<THINK_TRACE>

The paper's inferential spine is a single measurement decision that cascades into every downstream estimate: putting twelve seasons on one spatial plane and one reference geometry so that a change in umpire judgment cannot masquerade as a change in the ruler. Verbatim, [PAGE 3] warns that "changes in 2026 must be interpreted with caution, since the introduction of challenge-based ABS also brought a new operational definition of the strike zone. A change in umpire calling patterns could therefore be associated with the new review system, the change in the zone used to evaluate pitches, or both." The multi-hop chain is: (hop 1) reconstruct every pre-2026 pitch to the midpoint plane because "Through 2025, pitch coordinates were reported at the front plane of home plate, whereas the 2026 season coordinates are reported at the midpoint plane" [PAGE 7]; (hop 2) freeze the 2026 ABS geometry as the reference for all seasons (Eq. 1); (hop 3) inflate edges by the ball radius ρ = 1.45 in because "A pitch is ruled a strike when any part of the ball intersects the zone" [PAGE 8]; (hop 4) express each pitch as a signed distance to its nearest edge (Eq. 3); (hop 5) fit the psychometric logistic (Eq. 5) and read out two orthogonal quantities, boundary location α and transition width σ.

The gray-zone audit centers on identifiability. The authors are disciplined about the SDT mapping: they repeatedly state that α and σ "support interpretations in terms of criterion and sensitivity" but "do not uniquely identify an underlying cognitive mechanism" [PAGE 6]. That is the correct epistemic stance. α (inches, outward displacement of the 50% crossover) is a behavioral criterion proxy; σ (inches, transition width) is a sensitivity proxy. Neither is a latent psychological constant. A second gray zone is the overturn-versus-upheld contrast, which is explicitly non-randomized: "overturned and upheld challenges may differ in pitch location and in the circumstances that led players to challenge. Accordingly, we interpret the contrast as a differential response following corrective versus non-corrective review rather than as an isolated causal effect of feedback" [PAGE 12]. So Δown and Δtargeted are associational, not causal. A third gray zone is statistical power: with 7,040 game-by-edge cells over 59,076 pitches, cells average under eight calls, and "Most reviewed-edge confidence intervals still include zero" [PAGE 16]; the same thinness widens the next-game intervals enough that "smaller carryover effects cannot be ruled out" [PAGE 17].

The deepest multi-hop check is the coupling between RQ1's α shift and RQ2's pitch-type miscall decomposition. An inward α (α decreasing) mechanically lowers fitted strike probability at fixed d, so wide-side miscalls fall and tight-side miscalls rise, holding the pitch-location distribution fixed — exactly the identity stated at [PAGE 19]. The pitch-type table (Table 1, [PAGE 22]) then becomes a falsification test: if the boundary story is right, wide-side reductions should dominate and be roughly uniform across pitch types, and tight-side rates should be flat-to-rising. The data conform: wide-side reductions span 32.8% to 50.5% with all six pitch types significant, while tight-side rates are mixed and only the changeup rises significantly (+36.1%). The changeup's signature (largest wide drop, -50.5%; significant tight rise) implies it absorbs the largest inward shift, whereas the curveball, whose σ departs significantly (0.94 vs 1.00) yet stays the widest, retains the smallest miscall reduction (-16.2%, non-significant) — consistent with the residual motion-perception account citing Shapiro et al. [56] at [PAGE 23]. This triangulation is the paper's strongest internal-validity argument.

On the player side the key gray zone is the observability gap: "Since mᵢ is derived from tracked pitch location, it is available to the analyst but not directly to the player making the challenge decision" [PAGE 24]. The geometry-aware probability p̂ᴳ is therefore an oracle the player cannot condition on; the observable-information probability p̂ᴼ is the decision-relevant one. The finding that challenge rates span ~0.21 across p̂ᴼ but only ~0.06 across p̂ᴳ is a statement that player behavior lives in the observable-information σ-algebra, not the geometric one. The residual "well below one even when p̂ᴼ is high" [PAGE 25] flags a remaining unexplained component — bounded attention, framing value, or heterogeneous private thresholds — which the paper correctly declines to over-identify.

</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>

Reference geometry (Eq. 1, [PAGE 8]), all in inches, scaled by batter height h_b:
$$R^{top}_b = 0.535\,h_b,\quad R^{bot}_b = 0.270\,h_b,\quad R_{side}=W=8.5\ \text{in}.$$

Ball-radius inflation (Eq. 2, [PAGE 8]) with ρ = 1.45 in (verbatim: "expand each geometric edge by the radius of the baseball"):
$$\tilde R^{top}_b = R^{top}_b+\rho,\quad \tilde R^{bot}_b = R^{bot}_b-\rho,\quad \tilde R_{side}=R_{side}+\rho.$$

Signed distance to edge e (Eq. 3, [PAGE 8]), positive interior, with handedness sign s_i = −1 (RHH) / +1 (LHH):
$$d^{top}_i=\tilde R^{top}_{b(i)}-z_i,\ d^{bot}_i=z_i-\tilde R^{bot}_{b(i)},\ d^{ins}_i=\tilde R_{side}-s_ix_i,\ d^{out}_i=\tilde R_{side}+s_ix_i.$$

Edge sample (Eq. 4, [PAGE 9]): $B_e=\{i: |d^e_i|\le b,\ \min_{o\perp e} d^o_i > c_o\}$ with band b = 3.0 in (spanning 2.34–4.26 estimated σ, median 2.95 [PAGE 8]) and single corner threshold c = 3.7 in (cell-specific 1.13–3.66). Applying these leaves the band sample of 842,456 pitches, four mutually disjoint edge sets.

Core psychometric operator (Eq. 5, [PAGE 9]):
$$\Pr(y_i=1)=\operatorname{logit}^{-1}\!\Big(\tfrac{d^e_i+\alpha}{\sigma}\Big).$$

Verification of the stated calibration (no toy ratio): the logistic derivative is $\frac{d}{dx}\operatorname{logit}^{-1}(x)=\operatorname{logit}^{-1}(x)\big(1-\operatorname{logit}^{-1}(x)\big)$, equal to 1/4 at x = 0, giving boundary slope $\partial_d P = \frac{1}{4\sigma}$. At d^e_i+α = ±σ, $\operatorname{logit}^{-1}(\pm1)=\{0.731,0.269\}$, matching the verbatim "approximately 0.27 to 0.73" [PAGE 9]. Units: α, σ, d in inches; the logit argument is dimensionless; slope β_d carries units logit·in⁻¹.

Adjusted model (Eqs. 6–7, [PAGE 10]):
$$A_i=\lambda\,\Delta Z_{b(i)}+\rho_R R^c_i+\boldsymbol\gamma^\top\tilde X_i+\boldsymbol\tau^\top T_i,$$
where ΔZ absorbs the season-specific official-edge discrepancy, R^c_i is season-centered batter geometry, X̃ contains 11 count indicators + 3 handedness indicators + inning half + umpire indicators, and T are treatment terms (log-odds units each).

Estimation recovery (Eqs. 8–9, [PAGE 11]): fit $\operatorname{logit}\Pr(y_i=1)=\beta_0+\beta_d d^e_i+A_i$, then
$$\alpha=\frac{\beta_0}{\beta_d},\qquad \sigma=\frac{1}{\beta_d}.$$

Breakdown regime (invariant 2): Eq. 9 has a genuine singularity at β_d → 0, i.e., strike probability independent of pitch location. As β_d → 0⁺, σ → +∞ (a flat psychometric curve, undefined criterion because α = β_0/β_d diverges unless β_0 → 0 jointly). For β_d < 0 the model implies P increasing toward the outside of the zone — non-monotone and physically inadmissible, so σ < 0 signals specification failure rather than a measurable transition. Newton's method (per season-edge) can fail to converge in thin tails; the band restriction b = 3.0 in and corner threshold c = 3.7 in are precisely the guards that keep β_d bounded away from 0. Inference uses a two-way cluster sandwich (umpire × batter) with delta-method SEs and 1.96·se intervals.

Event-level operators. Exposure indicators (Eq. 10, [PAGE 12]):
$$A^{own,v,s}_i=\mathbb 1[o_i>F^{v,s}_{g_i,e_i}],\quad A^{oth,v,s}_i=\mathbb 1[o_i>\min_{e\ne e_i}F^{v,s}_{g_i,e}],$$
with v ∈ {ov, up}, s ∈ {tight, wide}. The shift and slope models (Eqs. 11–12, [PAGE 13]) add τ (curve shift, logit units) and δ (slope change, logit·in⁻¹). Contrasts (Eqs. 13–14):
$$C_{m,s}=\tau_{m,ov,s}-\tau_{m,up,s},\quad \Delta_{own}(s)=\frac{C_{own,s}}{\beta_d},\quad \Delta_{targeted}(s)=\frac{C_{own,s}-C_{oth,s}}{\beta_d}.$$
Transition-width contrast (Eq. 15): $\sigma_{m,v,s}=1/(\beta_d+\delta_{m,v,s})$, $\Delta_{\sigma,m}(s)=\sigma_{m,ov,s}-\sigma_{m,up,s}$ — same β_d → 0 (or δ = −β_d) singularity.

Conditional-likelihood breakdown regime: conditioning on per-cell strike totals removes intercept a_c, but a game-by-edge cell with all-strike or all-ball outcomes contributes a degenerate conditional term and drops from the likelihood — the mechanism behind the thin 8-calls-per-cell caution [PAGE 13].

Condition-specific miscall operators (Eq. 18, [PAGE 18]): $r_{wide}=N(\text{outside called strike})/N(\text{outside})$, $r_{tight}=N(\text{inside called ball})/N(\text{inside})$, with Wilson intervals; breakdown when denominators are small, guarded by the ≥209-pitch cell floor.

Challenge-margin operator (Eqs. 19–20, [PAGE 23]): $d_i=\min\{W'+x_i,\ W'-x_i,\ top_i-z_i,\ z_i-bot_i\}$, W′ = W+ρ; then m_i = −d_i if the call was a strike, +d_i if a ball. Breakdown regime: the min operator is non-differentiable at zone corners (kink lines where the active constraint switches), so a gradient-based challenge-intensity model must smooth or sub-select near corners.

</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>

The measurement model is a direct descendant of Flannagan, Mills, and Goldstone's psychophysics of home-plate calls [13, PAGE 3/5/9], which itself sits on Green & Swets' signal detection theory [18] and Hautus/Macmillan/Creelman's detection-theory canon [23]. The lineage is: SDT separates criterion from sensitivity → Flannagan operationalizes this as boundary location and transition width for umpires → Lee et al. re-index both quantities to per-edge signed distance so α and σ become inch-scaled. Crucially, the authors refuse to inherit Flannagan's center-of-zone parameterization; [PAGE 9] states "Whereas Flannagan et al. model pitch location using distance from the center of the strike zone, our formulation measures signed distance from each individual edge." That reparameterization is what makes a corner-aware, four-edge decomposition possible.

The zone-definition genealogy is Wang et al. [64]: seven years of KBO/ABS experimentation showing the operational zone was calibrated to "established calling practices," not a naive projection of the rulebook (cited [PAGE 4, 8]). The KBO full-ABS deployment of 2024 [33] and the KBO contextual-bias audit [34] are the immediate methodological ancestors, and Almog et al.'s Hawk-Eye tennis result [2] — a shift toward calling balls in after automated review — is the closest behavioral precedent, motivating the "does accuracy improve while error type changes" question [PAGE 5].

The multi-week (and multi-season) traps are the crux of the retro-causal risk. Trap one is the trend trap: 2015–2025 α and σ were already drifting, so a naive 2025-vs-2026 diff would misattribute the pre-existing slope to ABS. The defense is the 2015–2025 forecast with 50%/95% prediction intervals and equal season weighting [PAGE 11], justified because "residual year-to-year variation in these series is substantially larger than the estimation error." Trap two is the plane trap: comparing raw coordinates across the front/midpoint convention change would fabricate a boundary shift; the trajectory reconstruction to the midpoint plane [PAGE 7–8] closes it. Trap three is the zone-definition trap (ΔZ term) — the reference is held fixed while the official edge is entered separately, so the 2026 zone redefinition cannot be silently absorbed into α. Trap four, the persistence trap: attributing a next-game carryover without opening-window restriction would confound new feedback with old; the design restricts to "pitches before the first overturn of the new game" [PAGE 14].

</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>

Model the umpire as an agent who knows players observe and can overturn calls. The recursive layer: umpire believes players will challenge egregious misses; therefore the reputational cost of a public overturn is concentrated on visibly wrong calls, not marginal ones. Under this belief, the rational short-run response to an overturn is a local, explicit criterion nudge near the corrected edge — a working-memory correction — not a deep recalibration. The data are consistent with exactly this: within-game "too tight" → outward movement with p = 0.014, and next-game opening-window p = 0.996 (too tight) / 0.670 (too wide) [PAGE 17]. The interpretation is an explicit, rapidly decaying adjustment (Taylor/Krakauer/Ivry explicit-vs-implicit distinction [62]; Smith et al. dual-rate adaptation [58]) rather than slow perceptual recalibration (Goldstone/Watanabe/Sagi [51,53,65]).

Habit regression: a veteran umpire's pre-2026 calling habit (the historically wide boundary at 3–0) is the attractor. The counter-trap is to read the 2026 inward shift as evidence the habit was overwritten; the correct reading is that the habit's relative ordering survives (3–0 still widest, 0–2 still tightest) while its absolute level drops. This is regression-toward-the-algorithm at the level of α, not replacement of the count-conditioned policy. Verbatim, count "ordering remains visible in 2026" and "all four displayed counts shift inward" [PAGE 20].

Player-side ToM: the fielding side challenges more than the batting side deep in the overturnable region (0.31–0.65 vs 0.19–0.30 [PAGE 25]). A second-order model says catchers/pitchers hold a private belief about the umpire's residual bias (they see framing and location cues the batter cannot) and act on it, whereas the batter's belief is noisier. This is the observable-information asymmetry the paper flags but cannot fully decompose. The clock layer: the two-challenge inventory with retention-on-success sets a depleting clock; the modest inventory effect (curves separate "only at the upper end" of p̂ᴼ [PAGE 26]) implies the marginal option value of a retained challenge is small relative to the evidence gradient for most of the probability range — players are evidence-driven, not inventory-hoarding, except near-certain overturns.

</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>

Claim under adjudication: the 2026 inward α shift and the wide-side miscall collapse are artifacts of physical/biomechanical/weather layers, not of algorithmic review. I prove veto of each alternative.

Physical/measurement layer (front-vs-midpoint plane). A pitch's tracked (x,z) differs by plane; if uncorrected, this masquerades as a judgment change. Veto proof: coordinates are reconstructed to the midpoint plane for all pre-2026 seasons and 2026 is native-midpoint [PAGE 7–8], placing all seasons on "the same measurement plane." The plane term is deterministic given measured velocity/acceleration and cancels in the season contrast, so it cannot generate a 2026-specific α departure. Vetoed.

Biomechanical/batter-geometry layer. Vertical edges scale with h_b; if umpires mis-scale, apparent α moves. Veto proof: R^c_i (season-centered batter-geometry residual) is an explicit regressor (Eq. 7, [PAGE 10]), and ΔZ absorbs the official-edge discrepancy, so height-driven boundary motion is partialed out of α. Vetoed.

Environmental/weather/ballpark layer. Temperature and altitude change carry and thus the true pitch trajectory and the empirical (d) distribution. Veto proof 1: the within-game event model uses game-by-edge conditional fixed effects a_{c_i}, and "Ballpark characteristics, environmental conditions, and other factors shared within a cell" are differenced out of the conditional likelihood [PAGE 13]. So the post-overturn Δown cannot be a park/weather effect. Veto proof 2: the reference zone is defined by batter height alone (Eq. 1), independent of air density. Vetoed for the event layer.

Biomechanical/pitch-motion layer (the hardest). Curveballs have distinctive perceived-break dynamics (Shapiro et al. [56]); if a physical motion-perception effect drove miscalls, the 2026 pattern should be pitch-type-specific. Veto proof: the wide-side miscall reduction is uniform in sign across all six Statcast pitch types (32.8%–50.5%, all p < 0.05, Table 1 [PAGE 22]) — a common inward α shift predicts exactly this sign-uniformity, whereas a motion-perception account predicts heterogeneity keyed to pitch kinematics. The one significant σ departure is the curveball (0.94 vs 1.00, p < 0.05), and it is the residual, not the driver: it retains the largest σ and the smallest overall reduction. So biomechanics explains at most a residual, not the level shift. Vetoed as the primary cause.

Net adjudication: every physical/biomechanical/weather channel is either differenced out (event FE), parameterized out (ΔZ, R^c_i), or sign-inconsistent with a common α shift (pitch-type uniformity). The algorithmic-review + zone-redefinition explanation survives, with the caveat the authors themselves impose — the season-level comparison "identifies a departure from the pre-adoption pattern rather than a causal effect of reviewability" [PAGE 12].

</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>

Treat the ABS overturn as a verifiable reward: an overturn is a ground-truth penalty on the umpire's call, an uphold is confirmation. This is the officiating analog of RLVR, where feedback is checkable rather than human-preference-based. Three counterfactuals, each falsifiable with the paper's own operators.

Veto 1 — "Umpires are RLVR-style learners that integrate verifiable reward into persistent policy." Prediction under the RLVR hypothesis: a verifiable penalty (overturn) should shift subsequent policy monotonically and persist, because the reward is consistent and repeated. Observed: within-game outward movement after "too tight" (p = 0.014) but next-game opening-window p = 0.996 (too tight) and p = 0.670 (too wide) [PAGE 17]; Δσ near zero at both horizons. This vetoes the persistent-policy hypothesis. Corollary prediction: if the reward stream were densified to full ABS (KBO-style, every pitch ruled [PAGE 27]), the persistence horizon should lengthen. Verifiable: re-run the next-game opening-window contrast under KBO full-ABS data (Lee et al. [33] pipeline).

Veto 2 — "Players are geometric expected-value maximizers over the verifiable overturn oracle." Prediction under EV-max: challenge rate should track p̂ᴳ and jump toward one once p̂ᴳ clears the break-even implied by the two-challenge DP (Abramitzky et al. optimal-challenge benchmark [1]). Observed: challenge rate spans only ~0.06 across p̂ᴳ but ~0.21 across p̂ᴼ [PAGE 25], and stays far below one (0.19–0.65) even 1–3 inches inside the overturnable region. This vetoes the geometric-EV-maximizer. Corollary prediction: challenge rate is a steeper monotone function of p̂ᴼ than of p̂ᴳ; a regression of challenge on both should load essentially all weight on p̂ᴼ. Verifiable out-of-sample via the paper's walk-forward fit [PAGE 24].

Veto 3 — "Remaining inventory (a depleting challenge clock) strongly governs challenge use." Prediction under strong-conservation: holding p̂ᴼ fixed, challenge rate with one challenge left should be markedly below the two-challenge rate. Observed: curves nearly overlap except at the top of the p̂ᴼ range, where two-challenge teams challenge somewhat more [PAGE 26]; inventory effect "small relative to the overall increase in challenge use with observable overturn probability." This vetoes strong conservation. Corollary prediction: the inventory gap should widen only in high-leverage late innings; if it does not, inventory is a near-null covariate. Verifiable by interacting inventory with inning leverage in Eq. 19's binning.

Aggregate RLVR verdict: the umpire behaves like an agent receiving sparse, non-persistent verifiable feedback (explicit working-memory correction, not policy gradient integration), and the player behaves like a boundedly-informed decision-maker whose policy loads on the observable-information σ-algebra rather than the geometric oracle. The system's correction reach is therefore jointly capped by umpire memory decay and by the fraction of overturnable calls players actually surface — the paper's central "selective review" thesis, expressed as a verifiable-reward argument. All three vetoes are testable against KBO full-ABS panels, the walk-forward challenge model, and an inventory×leverage interaction, respectively.

</RLVR_COUNTERFACTUAL_VETOES>