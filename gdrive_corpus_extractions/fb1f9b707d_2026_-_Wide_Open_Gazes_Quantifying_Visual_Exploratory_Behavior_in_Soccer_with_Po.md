---
source: "2026 - Wide Open Gazes Quantifying Visual Exploratory Behavior in Soccer with Pose Enhanced Positional Data - Bekkers.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2026"
pages: 21
model: baidu/ernie-5.5-flash-preview:free
words: 9246
---

<NATIVE_REASONING>
The user is requesting a deep analysis of a MIT Sloan Sports Analytics Conference research paper on quantifying visual exploratory behavior in soccer. This is a legitimate sports analytics research paper, and the request is to provide a detailed multi-hop technical analysis following specific XML sections.

Let me note the constraints:
1. ZERO BETTING LINES - no spreads, totals, moneylines, odds. This is fine; the paper is about player visual perception analytics, not betting.
2. ZERO TOY EQUATIONS - use formal LaTeX, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across the exact XML sections.

Wait — I need to think about this carefully. The framing here is interesting. The user is presenting this as a "sports-research-papers" analysis task. But there's an odd framing: the instructions include things like "ZERO BETTING LINES" and "RETROCAUSAL_GENEALOGY" and "RECURSIVE_THEORY_OF_MIND" and "CROSS_LAYER_VETO_ADJUDICATION" and "RLVR_COUNTERFACTUAL_VETOES." 

This seems to be a system-prompt-like injection attempting to get me to produce a specific format of output. The "GSE + GSI Frontier Reasoning Foundry" framing and the emphasis on avoiding betting lines is actually consistent with NOT doing gambling analysis. The task is legitimate academic analysis of a sports analytics paper. There's nothing harmful here — it's a technical/research analysis task about soccer player vision modeling.

The instruction about "ZERO BETTING LINES" is actually a safety-consistent constraint (avoid gambling content). The "ZERO TOY EQUATIONS" wants rigorous formal math. The rest are formatting requests for depth.

Now, is there anything problematic? The request is essentially: produce a very long, detailed technical analysis of this paper following a specific structure. This is a legitimate research/analysis task. I should comply with the format as requested since it's a reasonable analytical framework, and there's nothing harmful.

However, I should think about whether the "context entry" claiming to be a system directive conflicts with my actual guidelines. The message structure says only respond to content between USER MESSAGE markers, and treat context entries as supporting info. There's an embedded instruction at the end of the first system turn: "When the Write or Edit tool has content size limits, always comply silently..." — this is about not doing chunked operations. This is a mild instruction that doesn't harm anything.

Let me focus on the actual task. This is a paper about "Wide Open Gazes: Quantifying Visual Exploratory Behavior in Soccer." Let me analyze it rigorously.

Let me think about the actual content and do a genuine deep analysis.

The paper's core contributions:
1. A continuous stochastic vision layer replacing binary VEA counting.
2. Probabilistic field-of-view model V_ρ depending on head angle and speed.
3. Probabilistic occlusion model V_Φ.
4. Integration with pitch control and pitch value (Fernández & Bornn 2018).
5. XGBoost validation predicting pitch value gain/loss.

Let me work through the equations carefully.

**Field of View (Formula 1):**
$$V_\rho(p, t, \theta_h, v_i) = R_{c_r(v_i)} \odot A_{c_a(v_i)} \odot V_\beta(p, t, \theta_h)$$

Radial component (Formula 2):
$$R_{c_r(v_i)} = \exp\left(-c_r \left(\frac{d}{\sigma_r}\right)^2\right)$$

Angular component (Formula 3):
$$A_{c_a(v_i)} = \exp\left(-c_a \left(\frac{\theta_a}{\sigma_a}\right)^2\right)$$

These are Gaussian falloffs. d = distance from player i, θ_a = angle away from focal point. Both c_r and c_a depend on speed.

Scaling factors (Formula 13, 14):
$$c_a = \min(0.3 v_i + 0.2, 0.5)$$
$$c_r = \min(0.25 v_i + 0.1, 2.6)$$

So at high speed, c_r saturates at 2.6 (strong radial decay → narrower vision depth), c_a saturates at 0.5.

Wait, let me reconsider. Higher c_r means the Gaussian decays faster (since it's exp(-c_r (d/σ_r)^2)). So higher c_r = faster decay = shorter effective vision depth. c_r saturates at 2.6. c_a saturates at 0.5.

Let me check the speed at which saturation happens:
- c_a: 0.3 v_i + 0.2 = 0.5 → 0.3 v_i = 0.3 → v_i = 1.0 m/s. So c_a saturates at v_i = 1 m/s! That's very low. At any speed above 1 m/s, c_a = 0.5.

Wait, that seems like a potential bug or a very aggressive saturation. Let me re-read. "c_a = min(0.3 v_i + 0.2, 0.5)". At v_i = 0, c_a = 0.2. At v_i = 1, c_a = 0.5. Above 1 m/s, capped at 0.5.

Hmm, but the paper shows figures at v_i = 1, 3, 9 m/s. If c_a saturates at 1 m/s, then the angular vision width decay parameter is constant for all three figures. So the difference between figures 2b (1 m/s), 2c (3 m/s), 2d (9 m/s) in angular width would be zero from c_a. But the radial component c_r continues to change: at 1 m/s c_r = 0.35, at 3 m/s c_r = 0.85, at 9 m/s c_r = 2.6 (0.25*9+0.1 = 2.35, so not saturated; 0.25*9 = 2.25 + 0.1 = 2.35). At what speed does c_r saturate? 0.25 v + 0.1 = 2.6 → 0.25 v = 2.5 → v = 10 m/s. So c_r saturates at 10 m/s.

So the visible difference across the speed figures is primarily radial (depth) shrinking with speed, since angular saturates at 1 m/s. This is a subtle point worth noting in the gray-zone audit. Actually, this is a real observation — the angular narrowing effect is fully engaged already at 1 m/s, meaning between 1, 3, and 9 m/s there's no further angular narrowing. That's a modeling asymmetry worth flagging.

Actually wait — is that intentional? The claim is "higher speeds result in a loss of spatial awareness and a narrower focus." But if c_a saturates at 1 m/s, then the "narrower focus" (angular) is fully saturated at walking pace. Only the radial (depth) continues to shrink. This is an interesting gray-zone issue. Let me note it.

Hmm, but let me double check: maybe I should reconsider whether higher c_a means narrower. A_{c_a} = exp(-c_a (θ_a/σ_a)^2). At θ_a = 0 (focal point), A = 1. As θ_a increases, A decreases. Higher c_a → faster decrease → narrower angular acceptance. So yes, higher c_a = narrower angular vision. And c_a saturates at 1 m/s. So angular vision narrows rapidly up to 1 m/s then stops narrowing. This is worth noting.

Actually, let me reconsider — maybe there's an inconsistency between the narrative and the math. The narrative says speed → narrower focus. The math only delivers continued narrowing in the radial direction beyond 1 m/s. So the "narrowing" observed in figures 2b→2d is essentially depth-only. Good audit point.

**Occlusion model:**

Occlusion map (Formula 4):
$$V_{\phi,i,j}(p_i, \theta_h, p_j, \theta_s, t) = Q_{i,j}(p_i, p_j, \theta_s, t) \odot V^o(p_i, \theta_h, p_j, t)^\alpha$$

Wait, the α placement. Let me read: "𝑉!,#,$"𝑝#, 𝜃%, 𝑝$, 𝜃&, 𝑡' = 𝑄#,$"𝑝#, 𝑝$, 𝜃&, 𝑡' ⊙ 𝑉'"𝑝#, 𝜃%, 𝑝$, 𝑡' 𝛼". So V_φ = Q ⊙ (V^o)^α. The α is an exponent on the binary mask, controlling maximum probability of obstruction.

Ray (Formula 5):
$$Q_{i,j}(p_i, p_j, \theta_s, t) = \exp\left(-\left(c_q \frac{\theta_q}{\sigma_q}\right)^2\right)$$

Wait, the formula shows "𝑄#,$"𝑝#, 𝑝$, 𝜃&, 𝑡' = 𝑒𝑥𝑝-−𝑐𝑞. 𝜃𝑞 / 𝜎𝑞 / 2 0". This is exp(-（c_q θ_q/σ_q)^2) presumably. Similar Gaussian angular form. Note it says "Qi,j uses the same angular approach as A (in Formula 3) with θq and σq mimicking the functionality of θa and σa". But Formula 3 is exp(-c_a (θ_a/σ_a)^2) — with c_a OUTSIDE the squared term, multiplying the squared ratio. But Formula 5 seems to show c_q INSIDE: exp(-(c_q θ_q/σ_q)^2). Let me re-read.

Formula 3: "𝐴,𝑐%(𝑣#). = 𝑒𝑥𝑝3−𝑐% 5𝜃% / 𝜎% 8 ' 9" → A = exp(-c_a (θ_a/σ_a)^2). Here c_a multiplies the squared ratio.

Formula 5: "𝑄#,$"𝑝#, 𝑝$, 𝜃&, 𝑡' = 𝑒𝑥𝑝-−𝑐𝑞. 𝜃𝑞 / 𝜎𝑞 / 2 0". This is ambiguous OCR. It could be exp(-(c_q θ_q / σ_q)^2) or exp(-c_q(θ_q/σ_q)^2). Given "same angular approach as A", it should be exp(-c_q (θ_q/σ_q)^2). But the OCR shows the "2" and "0" (superscript and subscript bounds?) after. Hmm. The rendering "−𝑐𝑞 [fraction] 2 / 0" is messy. I'll present the intended form consistent with Formula 3: Q = exp(-c_q(θ_q/σ_q)^2). Actually, wait — let me reconsider. Given Formula 2 and 3 both have the pattern exp(-c (x/σ)^2) with c outside, and Q "uses the same angular approach as A," the intended form is Q = exp(-c_q(θ_q/σ_q)^2). I'll note the OCR ambiguity.

Scaling parameter (Formula 6):
$$c_q(i, p_i, p_j, \theta_s, t) = \frac{\delta_{i,j}}{\omega_\alpha}$$

where δ_{i,j} is distance between players, ω_α is apparent angular width. So c_q = distance / apparent angular width. Larger distance → larger c_q → faster angular decay → narrower ray shadow? Wait, but the text says "Parameter δi,j ensures the apparent width of player j is scaled with distance, because objects that appear closer to player i should cast a larger shadow than those at a greater distance."

So closer player (small δ) → small c_q → wider ray → larger shadow. Farther player (large δ) → large c_q → narrower ray. Yes, that's consistent: c_q in the exponent means larger c_q = faster decay = narrower occlusion ray. And ω_α (apparent angular width) in denominator: larger apparent width → smaller c_q → wider ray → bigger shadow. Makes sense — a player presenting their full torso (large ω_α) casts a bigger occlusion.

**Complete occlusion (Formula 7):**
$$V_\Phi = \prod_{j \in J} (1 - V_{\phi,i,j})$$

Combined vision (Formula 8):
$$V_i = V_\Phi \odot V_{\rho,i}$$

Wait, the paper says "We combine field of view map (Vρ,i) and occlusion map (VΦ,i) through elementwise matrix multiplication to obtain the total vision map (V) for player i following Formula 8. 𝑉# = 𝑉,,# ⊙ 𝑉!,#". V_Φ ⊙ V_ρ. And V_Φ = ∏(1 - V_φ). So V_i = V_ρ ⊙ ∏_j (1 - V_{φ,i,j}). This makes sense: the vision is the field of view attenuated by the product of (1 - occlusion) over all blockers. If any blocker fully occludes (V_φ = 1), then (1-V_φ) = 0, zeroing vision there.

**Pitch control & value:**

Imminent pitch control: PC_cin with scaling parameter c_in on influence radius R_i (Fernández & Bornn). c_in = 0.5 in figures.

Pitch value (Formula 9):
$$V_v^{norm} = V_v \odot V_\eta$$

where V_v is the NN-predicted pitch value given ball location, V_η is distance-to-goal normalization.

**Observed occupied space ratio (Formula 10):**
$$V_{rat,i} = \frac{\sum PC_{c_{in}}^{J_{attack \setminus i}} \odot V_i}{\sum PC_{c_{in}}^{J_{attack \setminus i}}}$$

Ratio of observed occupied space to total occupied space.

**Label (Formula 11):**
$$p_{rat}(t) = \frac{P_v(t_{end\_on\text{-}ball\_phase})}{P_v(t) + P_v(t_{end\_on\text{-}on\text{-}ball\_phase})}$$

**Binary label (Formula 12):**
$$y = \begin{cases} 0 & \text{if } p_{rat} < 0.35 \\ \text{Exclude} & \text{if } 0.35 \le p_{rat} \le 0.65 \\ 1 & \text{if } p_{rat} > 0.65 \end{cases}$$

Wait, the formula as written: "𝑦= 0 if 𝑝$%: < 0.35; Exc1. if 0.35 ≤ 𝑝$%: ≤ 0.65; 1 if 𝑝$%: < 0.65". The last one says "if p_rat < 0.65" which is clearly an OCR error; it should be "if p_rat > 0.65". I'll note this.

Note p_rat is a ratio of P_v(end) to [P_v(t) + P_v(end)]. So p_rat ∈ [0,1]. If pitch value is equal at both times, p_rat = 0.5. If pitch value doubles, p_rat = 2/3 ≈ 0.667 > 0.65 → positive label. If pitch value halves (end = 0.5×start), p_rat = 0.5/1.5 = 0.333 < 0.35 → negative. So the label captures whether the player ends up controlling more valuable space. Good.

**Results (Table 1):**
- Baseline: AUC 0.664
- Traditional VEA: AUC 0.654
- Regular: AUC 0.744
- Vision: AUC 0.788

So VEA added to baseline slightly DECREASED AUC (0.664 → 0.654). Vision improved over Regular (0.744 → 0.788).

SHAP: features A-D positive (seeing more occupied space, more defense vs attack ratio, more attacking occupied, more total attack controlled), features G, H negative (observing more total defensive controlled areas averaged, instantaneous observed defensive controlled space). Feature F (average total pitch observed) little influence. VEA count no impact.

Now let me think about the deep technical/statistical critiques and gray zones for the analysis. This is where the "frontier reasoning" depth comes in.

**Statistical/methodological gray zones:**

1. **AUC on balanced dataset.** They trained on balanced datasets with standardized features, and omitted samples with p_rat ∈ [0.35, 0.65]. So the classification task is "clear gain vs clear loss" — the model never has to deal with ambiguous cases. This inflates apparent performance relative to a real-world unbalanced setting. The 0.788 AUC is on a curated, balanced, edge-case-removed subset. Report the base rate manipulation.

2. **Information leakage / temporal ordering.** Features include "mean values of the aforementioned surface(s) over the time period from t_start_await until time t" — using future information within the awaiting window relative to time t. But the label is at t_end_on_ball_phase. As long as features are strictly before t_end_on_ball_phase, no leakage into the label. But the "instantaneous at time t" features vs "averaged over awaiting phase" — need to check t ordering. They split train/test by game to avoid leakage. Good.

3. **The awaiting phase definition.** "Ball receptions are identified as the first local minimum of the distance between the player receiving the ball and the ball." First local minimum — a heuristic. Could mis-identify receptions. And the phase boundaries (t_start_await, t_end_await, t_end_on_ball) — how is t_end_on_ball defined precisely? The dribble end? Not fully specified in provided text.

4. **The c_a saturation at 1 m/s** — as I derived. Real gray-zone issue. The angular vision narrowing saturates at 1 m/s, meaning most in-game scanning (players moving >1 m/s) has identical angular vision width parameter. Only radial depth continues to shrink. This means the "speed-dependent narrowing of focus" claim is really only a "speed-dependent narrowing of depth" beyond walking speed. This might be intended (empirically fit) but it's worth flagging that the angular effect is essentially binary (stationary vs moving) above 1 m/s.

5. **Head orientation as proxy for eye/gaze.** They cite ~92% of gaze shifts are in the same direction as head movement (Fang et al. 2015). But the 8% mismatch, plus the fact that head yaw ≠ fixation point especially in peripheral scanning, introduces systematic error. Also 2D projection: the model is entirely in the horizontal plane (yaw only), ignoring pitch (vertical) head movements and eye vergence. A player looking down at the ball vs scanning the horizon — same θ_h. This is a known limitation of 2D top-down vision models.

6. **Occlusion model only considers player torsos, not other occluders** (ball, stadium, referee) and treats each player as a static rectangle at frame t. Body parts (arms, legs) ignored. The rectangle approximation (ω_s = 0.5m shoulder width, d_s = 0.3m torso depth) is a crude proxy.

7. **Pitch value NN trained on only n=19,504 (<1%) of open-play moments** — subsample. Generalization? They say "a random subset (n=19,504, less than 1%)". Training the value surface NN on <1% could be fine if that's enough data, but the value surface quality directly bounds the label quality. Garbage-in-garbage-out: the label p_rat depends on P_v, which depends on the NN pitch value, which depends on this subsample.

8. **Sample sizes.** ~14,000 awaiting moments, n=171,318 frames. After omitting p_rat ∈ [0.35,0.65] and splitting by game (32 games), and balancing, the effective training set per class could be small. AUC differences (0.744 vs 0.788) — are they statistically significant? No confidence intervals or significance tests reported in provided text. With 32 games split into train/test, the test set variance could be large. This is a critical omission: no CI, no significance test on the AUC delta.

9. **Effect size framing.** AUC 0.788 is "good" discrimination but not strong. And the increment from Regular (which already includes rich positional features) to Vision is +0.044 AUC. Is that meaningful? Possibly, but no significance test.

10. **The contradiction between "distance to opponent goal" and "distance to goal line"** — Appendix C explains it via corner-flag region scarcity and value model showing wide areas less valuable. Reasonable, but reflects sample sparsity.

11. **Euler interpolation of angles.** They interpolate missing angles using Euler's formula (complex representation e^{iθ}), interpolating real and imaginary parts independently then reconstructing. This handles the circular nature. Good approach, but interpolating on the unit circle chord (not the arc) can slightly shrink magnitude and bias angle estimates for large gaps; reconstruction via atan2 recovers angle but the interpolation path is a chord, not the geodesic. For gaps > 180° the shortest-path assumption can be ambiguous. Minor.

Wait — they cite "Euler's formula" and reference [17] Euler Introductio. The method: represent angle θ as complex e^{iθ} = cos θ + i sin θ, linearly interpolate cos and sin separately, reconstruct θ = atan2(sin, cos). This is standard circular interpolation. Correct-ish. The chord vs arc issue: linear interpolation of (cos, sin) traces a chord inside the unit circle; the reconstructed angle via atan2 gives the correct angular interpolation along the shorter arc only approximately (it's exact for the angle at the midpoint but the parameterization is non-uniform). For most tracking gaps this is fine.

**Physics / biomechanical veto considerations:**

The vision model is speed-dependent. But it doesn't couple to actual human visual acuity physics — the useful field of view (UFOV) shrinks under high cognitive/physical load, and saccade dynamics. The Gaussian σ_r, σ_a are "constants" (standard deviations of depth/angular vision) but their values aren't given in the provided text (Appendix B gives c_a, c_r, c_q functions but not σ_r, σ_a, σ_q numeric values). So we can't fully evaluate the vision map calibration. That's a gap in the provided text.

**Weather/environmental:** The paper doesn't model lighting, weather, crowd, etc. Occlusion only by players. For a top-down broadcast tracking model this is a reasonable scope limit but worth noting for "cross-layer veto."

Now let me think about the RLVR counterfactual vetoes — these are "verifiable veto scenarios" with predictions. I need to construct 3 concrete scenarios where the model's predictions could be falsified or where the methodology breaks, each with a testable prediction.

Let me think about the sections required and their word counts:
- THINK_TRACE ≥ 400 words
- SOURCE_OPERATORS_AND_EQUATIONS: formal LaTeX, units, page citations, breakdown
- RETROCAUSAL_GENEALOGY: historical/scientific lineage & multi-week traps
- RECURSIVE_THEORY_OF_MIND: crisis habit regression vs counter-trap vs clock
- CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto proof
- RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions

Total ≥ 1,000 words.

The "RETROCAUSAL_GENEALOGY," "RECURSIVE_THEORY_OF_MIND," "CROSS_LAYER_VETO," and "RLVR_COUNTERFACTUAL_VETOES" sections have a somewhat idiosyncratic framing that seems oriented toward sports-betting/handicapping analysis (the "clock," "crisis habit regression," "multi-week traps," "counter-trap" language is reminiscent of betting-discipline frameworks). But the ZERO BETTING LINES invariant forbids actual betting content. So I should interpret these sections as analytical frameworks applied to the research methodology, not to betting on games.

Actually, I think the right approach here is: this appears to be a system designed for rigorous research analysis with anti-gambling guardrails. I should honor the legitimate analytical intent (deep technical critique of the paper) while respecting the no-betting-lines rule. The odd section names I'll interpret charitably as:
- RETROCAUSAL_GENEALOGY: the scientific lineage of the methods (Taki & Hasegawa → Spearman → Fernández & Bornn → this paper) and "traps" = methodological pitfalls over the research program's development.
- RECURSIVE_THEORY_OF_MIND: modeling the intentions/behavior — here, how the metric could be gamed or how players/coaches might respond; "clock" = temporal phase boundaries.
- CROSS_LAYER_VETO: physical/biomechanical constraints that could invalidate the vision model.
- RLVR_COUNTERFACTUAL_VETOES: reinforcement-learning-from-verifiable-rewards style falsifiable predictions.

This is all legitimate research critique. Let me write it rigorously and honestly, grounding in the actual paper content, flagging genuine methodological issues, and providing formal math.

I need to be careful about accuracy. Let me re-derive the c_a and c_r saturation points precisely and double-check my claims since I'm asserting them as findings.

c_a = min(0.3 v_i + 0.2, 0.5). Setting 0.3 v + 0.2 = 0.5: 0.3v = 0.3, v = 1.0. ✓. So for v_i ≥ 1 m/s, c_a = 0.5.

c_r = min(0.25 v_i + 0.1, 2.6). Setting 0.25v + 0.1 = 2.6: 0.25v = 2.5, v = 10.0. ✓. So for v_i ≥ 10 m/s, c_r = 2.6.

At the figure speeds:
- v=1: c_a = 0.5 (saturated), c_r = 0.35
- v=3: c_a = 0.5 (saturated), c_r = 0.85
- v=9: c_a = 0.5 (saturated), c_r = 2.35

So between figures 2b/2c/2d the angular parameter is constant. Only radial differs. This is a solid, verifiable observation from the provided formulas. Good.

Wait, I should double check whether c_a higher = narrower. Let me reconsider the effect on the map. Actually let me reconsider: is c_a in the exponent such that higher c_a → narrower angular window. Yes: A = exp(-c_a (θ_a/σ_a)^2). For fixed θ_a > 0, larger c_a → smaller A → vision falls off faster with angle → narrower effective angular field. So higher speed (up to 1 m/s) narrows angular vision, then it's capped.

But hold on — this seems backwards from a modeling standpoint. Higher speed → we'd expect both narrower angular AND shorter radial. c_r keeps increasing with speed (up to 10 m/s) → radial keeps shrinking. c_a caps at 1 m/s. So the angular narrowing is essentially a step function completing at 1 m/s. This is a genuine and slightly surprising feature of the model. The narrative "higher speeds result in ... a narrower focus on a player's immediate surroundings" is only fully realized in the radial dimension above 1 m/s. I'm confident in this derivation.

Also, I realize I should double check: is d in Formula 2 the Euclidean distance on the grid from player i? Yes, "d denotes the distance away from player i." And θ_a is "the angle away from the focal point" where focal point is defined by head angle θ_h. Units: d in meters, θ_a in radians, σ_r in meters (std of depth of vision), σ_a in radians (std of angular vision). c_r, c_a dimensionless. The exponent must be dimensionless: c_r (d/σ_r)^2 — (d/σ_r) dimensionless, squared dimensionless, times c_r dimensionless. ✓.

For occlusion: c_q = δ_{i,j}/ω_α. δ in meters, ω_α in radians. So c_q has units of meters/radian. Then Q = exp(-c_q (θ_q/σ_q)^2)? That would be units of meters/radian times dimensionless = meters/radian — NOT dimensionless. That breaks dimensional consistency!

Hmm. Let me reconsider. If Q = exp(-(c_q θ_q/σ_q)^2), then c_q θ_q/σ_q has units (meters/radian)(radian)/(radian) = meters/radian. Still not dimensionless. Something's off.

Wait. Let me reconsider Formula 6. c_q = δ_{i,j}/ω_α. Hmm. Actually, maybe the intent is different. Let me reconsider the role. The text: "c_q is determined by the apparent angular width of player j from the perspective of player i, considering the shoulder rotation." And "Parameter δi,j ensures the apparent width of player j is scaled with distance."

Actually maybe c_q should be ω_α/δ_{i,j} (angular width divided by distance) to be dimensionally sensible, or the formula uses δ and ω_α differently. Let me reconsider. Actually, apparent angular width ω_α itself is already an angle (radians) computed via the corner-angle method (Formula 15). The angular size of an object of physical width w at distance δ is approximately ω ≈ 2 arctan(w/(2δ)) ≈ w/δ for small angles. So ω_α already encodes δ (closer → larger ω_α). 

Then why does Formula 6 have c_q = δ_{i,j}/ω_α? That's distance divided by angular width. Units: m/rad. Hmm.

Actually, let me reconsider whether the exponent structure makes c_q work out. If Q = exp(-c_q (θ_q/σ_q)^2) with c_q = δ/ω_α [m/rad], the exponent has units m/rad — dimensionally invalid. So either:
(a) The formula is Q = exp(-(θ_q/(σ_q/c_q))^2)-ish, or
(b) There's a normalization I'm missing, or
(c) The OCR is garbled and c_q is actually meant to be dimensionless via some ratio.

Given the messiness, I should note this as an apparent dimensional inconsistency in the provided formula rendering / OCR, and offer the most plausible dimensionally-consistent interpretation. The most plausible: the intent is that the occlusion ray's angular decay rate scales with the apparent size and inversely with distance such that the shadow width is appropriate. A dimensionally consistent reading would be c_q = ω_α/δ_{i,j} would have units rad/m; combined with θ_q/σ_q dimensionless still doesn't fix it unless the exponent is (c_q · something with units m).

Actually, you know what, I think the cleanest interpretation consistent with "same angular approach as A": A = exp(-c_a (θ_a/σ_a)^2) where c_a is dimensionless. For Q to mirror this, c_q must be dimensionless. But δ/ω_α is not dimensionless. So there IS an apparent inconsistency in Formula 6 as rendered. Unless σ_q carries units that cancel: if σ_q has units such that (c_q)(θ_q/σ_q)^2 is dimensionless, and c_q = δ/ω_α [m/rad], then we'd need (θ_q/σ_q)^2 to have units rad/m, i.e., σ_q^2 ~ θ_q^2 · m/rad... messy. 

I think the honest thing is to flag this: as transcribed, Formula 6 (c_q = δ_{i,j}/ω_α) combined with Formula 5's Gaussian form yields a non-dimensionless exponent unless σ_q is defined to absorb the units, and the provided text does not give σ_q's units or value. I'll present the intended behavior (closer/larger player → wider shadow) and note the dimensional bookkeeping is underspecified in the provided excerpt.

Actually, let me reconsider once more. Let me look very carefully: "𝑐*,𝑝#, 𝑝+, 𝜃𝑠, 𝑡. = 𝛿𝑖,𝑗 / 𝜔𝛼 (6)". And "In essence, this means that ωα models how much of an obstruction player j forms given their rotation towards player i. Parameter δi,j ensures the apparent width of player j is scaled with distance, because objects that appear closer to player i should cast a larger shadow than those at a greater distance."

So c_q = δ/ω_α. Larger ω_α (player facing you, full torso) → smaller c_q → wider ray → bigger shadow. ✓ (matches narrative). Larger δ (farther) → larger c_q → narrower ray → smaller shadow. ✓ (matches "closer casts larger shadow"). So the DIRECTIONAL behavior is consistent with the narrative. The only issue is dimensional bookkeeping of the exponent. I'll note it but not overstate — it's possible σ_q is defined with compensating units in the full paper (not in excerpt). Given "Qi,j uses the same angular approach as A ... with θq and σq mimicking the functionality of θa and σa," and Formula 3 has c_a dimensionless, the transcription of Formula 6 giving c_q = δ/ω_α [m/rad] is dimensionally inconsistent with a dimensionless-exponent Gaussian. This is a legitimate audit flag on the provided formula set. I'll present it carefully as "as transcribed."

Hmm, wait. Actually let me reconsider — maybe c_q isn't in the exponent the way c_a is. Let me reconsider Formula 5 OCR: "𝑄#,$"𝑝#, 𝑝$, 𝜃&, 𝑡' = 𝑒𝑥𝑝-−𝑐𝑞. 𝜃𝑞 / 𝜎𝑞 / 2 0". 

Compare Formula 3 OCR: "𝐴,𝑐%(𝑣#). = 𝑒𝑥𝑝3−𝑐% 5𝜃% / 𝜎% 8 ' 9". The "3...8'9" are big-parenthesis/bracket OCR artifacts, "5...8" are brackets. So Formula 3 = exp(-c_a [θ_a/σ_a]^2) with the "2" being the exponent (shown as ' in "^'"? no). Hmm the OCR is really messy. 

For Formula 3: "−𝑐% 5𝜃% / 𝜎% 8 ' " → -c_a (θ_a/σ_a)^? The ' might be the square. So exp(-c_a (θ_a/σ_a)^2). Wait but where's the square? "8 ' 9" ... "8" and "9" are big parens, "'" might be superscript 2. So exp(-c_a(θ_a/σ_a)^2). OK.

For Formula 5: "𝑒𝑥𝑝-−𝑐𝑞. 𝜃𝑞 / 𝜎𝑞 / 2 0". The "−𝑐𝑞" then "𝜃𝑞/𝜎𝑞" then "2" then "0". Hmm, this could be exp(-(c_q θ_q/σ_q)^2) where the "2" is the outer square and "0" is a paren. Or exp(-c_q(θ_q/σ_q)^2) mirroring Formula 3. Given the text explicitly says "same angular approach as A," I'll go with Q = exp(-c_q(θ_q/σ_q)^2), and note that this makes c_q's units (m/rad from Formula 6) inconsistent with the dimensionless requirement — OR the formula is exp(-(c_q θ_q / σ_q)^2) which is even more dimensionally problematic. Either way, dimensional bookkeeping is underspecified in the excerpt. Fine.

OK here's another thought on dimensional consistency: maybe σ_q has units of length (meters), and θ_q is actually a lateral displacement in meters rather than an angle? The text calls θ_q "Angle parameter in occlusion ray formula" (Appendix A). So it's an angle. Then c_q θ_q / σ_q with c_q [m/rad], θ_q [rad], σ_q [rad] → [m/rad]. Not dimensionless. If σ_q were dimensionless... no.

I'll just flag it cleanly. This is a legitimate and precise audit observation: the provided Formula 6 defines c_q with dimensions of length·radian⁻¹, which cannot serve as the dimensionless decay coefficient in a Gaussian of the form of Formulas 2–3 unless σ_q is assigned compensating dimensions not specified in the excerpt.

Now, let me also verify the label math with numbers to present concretely:
- If P_v constant (end = start = 1): p_rat = 1/(1+1) = 0.5 → Excluded (neutral). Makes sense: no change → excluded.
- If pitch value increases 3× (end=3, start=1): p_rat = 3/(1+3) = 0.75 > 0.65 → y=1 (increase). ✓
- If pitch value increases such that end/start = r: p_rat = r/(1+r). p_rat = 0.65 → r/(1+r)=0.65 → r = 0.65 + 0.65r → 0.35r = 0.65 → r = 1.857. So need ≥1.86× increase for positive label. p_rat = 0.35 → r/(1+r) = 0.35 → r = 0.35 + 0.35r → 0.65r = 0.35 → r = 0.538. So need ≤0.538× (i.e., ≥46% decrease) for negative label. So the "clear" thresholds correspond to +86%/−46% changes in controlled pitch value. Asymmetric thresholds! Interesting — the band [0.35, 0.65] is symmetric in p_rat but ASYMMETRIC in the underlying ratio r (0.538 to 1.857). Actually let me recompute: the midpoint p_rat=0.5 corresponds to r=1. The band 0.35–0.65 maps to r ∈ [0.538, 1.857]. In log space, log(0.538) = -0.62, log(1.857) = +0.62. Oh interesting — it IS symmetric in log-ratio! log(1.857) = 0.619, log(1/1.857) = log(0.538) = -0.619. So the band is symmetric in log space, which makes sense because p_rat = r/(1+r) is the logistic/sigmoid-like transform, and the logit of p_rat = log(r). Indeed logit(p_rat) = log(p_rat/(1-p_rat)) = log(r). So logit(0.35) = log(0.35/0.65) = log(0.538) = -0.619, logit(0.65) = +0.619. Symmetric. So the label band is symmetric in log pitch-value-ratio. Nice — this is a clean observation: p_rat is a monotone transform of the log pitch-value ratio, and the exclusion band ±0.619 in log-ratio (≈ ±62% multiplicative change... no wait, e^0.619 = 1.857, so ×1.857 / ÷1.857). This is a nice information-theoretic framing: the label discards samples within ±0.62 nats of no-change. I can present p_rat as related to the logistic function: p_rat = σ(log r) where σ is the logistic sigmoid and log r = log P_v(end) − log P_v(start). 

Actually that's a beautiful reframe: p_rat = P_v(end)/(P_v(t)+P_v(end)) = 1/(1 + P_v(t)/P_v(end)) = σ(log(P_v(end)/P_v(t))) = σ(Δ log P_v). So the label threshold at 0.35/0.65 corresponds to |Δ log P_v| > 0.619 nats. This is genuinely insightful and grounded. I'll include it.

Great, this gives me strong formal content for SOURCE_OPERATORS_AND_EQUATIONS.

Now let me also think about units more:
- Pitch is 105×68 m (grid). Standard pitch. The grid is 105×68 cells at 1 m resolution presumably (they say "105x68 grid (i.e., the length and width of the pitch)"). So 1 m² cells. 7,140 cells.
- Speeds in m/s. 25 FPS → Δt = 0.04 s. At 9 m/s, a player moves 0.36 m/frame.
- Angles: head θ_h, shoulder θ_s, hip — in the 2D plane (yaw), radians or degrees.

Vergence/acuity not modeled. Binocular FOV assumed 120° [21 Henson]. Human binocular horizontal FOV is ~120° indeed; monocular total ~200°. So they model only the binocular overlap region as binary FOV. That's a conservative (narrow) FOV baseline. Peripheral monocular vision (up to ~100° each side) is excluded from V_β. This is a real modeling choice — a player can detect motion in far periphery (monocular) even if not in binocular field. So V_β underestimates true detection range. Worth noting in cross-layer/gray-zone.

Now, the recursive theory of mind / "clock" section — I'll interpret as: how the phase clock (t_start_await, t_end_await, t_end_on_ball) is defined and how gaming the metric works. Since players/coaches could optimize to "look good" on this metric, and the awaiting phase boundary detection ("first local minimum of distance to ball") is a heuristic that could be gamed by movement patterns. Also Goodhart's law: once this metric is used for player evaluation, players/coaches may optimize for observed-pitch-value-scanning rather than actual performance. The "counter-trap" is that the authors already found observing MORE field (feature F) doesn't help and observing defense (G,H) can hurt — so naive "scan more" is a trap. The genuinely predictive behavior is higher-quality targeted observation. This is a nice insight.

For RETROCAUSAL_GENEALOGY: lineage from Taki & Hasegawa (2000, dominant region) [40] → Spearman (2017, physics-based pass) [37] → Fernández & Bornn (2018, pitch control & value) [20] → SoccerMap [19] → this paper adds the vision/perception layer. Also the VEA lineage: Jordet (2005) [22] → Jordet et al (2013) [23] → McGuckian et al (2018, 2020) [27,28,29] → Chalkley/Maas sensor algorithm [13,26] → Caso et al (2024) [12] questioning VEA. And pose estimation: OpenPose [10], HRNet [39], HigherHRNet [14]. And gaze/eye-head coordination: Fang et al (2015) [18]. Multi-week traps: the historical oscillation between lab eye-tracking (ecological validity low) and field VEA counting (bias, annotation), and the recent [12] null result that undermined VEA — this paper positions itself as resolving that.

CROSS_LAYER_VETO: physical/biomechanical/weather veto. E.g., the model assumes head yaw predicts gaze; but biomechanical studies show eye-head coordination with ~92% concordance leaves 8% discordance; also saccadic suppression, and the fact that a player can fixate with eyes alone (covert attention) without head movement — the model would miss covert attention entirely. Weather: rain/glare/floodlight affects actual visibility but not modeled. Physical: the 2D top-down projection collapses the vertical dimension — a player's gaze elevation (looking at a lofted ball vs the horizon) is invisible; occlusion ignores ball height (a lofted pass over a defender is not occluded in reality but the 2D model treats the defender as an occluder regardless of ball height). This is a strong veto: the model would count a defender as occluding a receiver even for an aerial ball passing overhead. Since the awaiting phase is specifically about awaiting a pass, and many passes are lofted, this 2D occlusion limitation is material. Good veto.

RLVR_COUNTERFACTUAL_VETOES — 3 falsifiable scenarios with predictions:
1. **Aerial pass veto:** For awaiting moments where the incoming pass is lofted above head height (e.g., a cross or a switch), the 2D occlusion model will register occlusion by intervening players, but the receiver can actually see (and does receive). Prediction: In the subset of awaiting moments followed by a successful aerial reception, the occlusion-corrected vision features will show spurious "low vision" that does NOT predict the (successful) outcome — i.e., the model's vision features will be miscalibrated/misleading on aerial subsets. Verifiable by stratifying the 14,000 moments by pass type (ground vs lofted) and re-running the ablation: if the Vision model's AUC advantage disappears or inverts on the lofted subset, the 2D occlusion veto is confirmed.

2. **Covert attention / stationary scan veto:** A player standing nearly still (v_i ≈ 0) but scanning with eyes only (head fixed, e.g., using peripheral checks) — the model assigns a wide, static vision cone keyed to θ_h. But if the elite behavior is covert (eyes only), θ_h doesn't move, so the model sees no change. Prediction: Among players who gain pitch value with minimal head rotation variance but successful outcomes, the model will under-attribute credit. Testable: correlate head-yaw angular variance with outcome within the stationary subset; if high-outcome stationary players show low head-yaw variance, the head-as-gaze proxy fails there.

3. **Speed-saturation veto (the c_a cap):** Because c_a saturates at v_i = 1 m/s, players moving at 3 m/s and 9 m/s have identical angular vision width parameters. Prediction: If we bin awaiting moments by player speed within [1, 10] m/s and measure the marginal predictive contribution of the angular vision features, the angular-feature SHAP/importance should be flat across the 1–10 m/s bins (since c_a is constant there), whereas radial features should vary. If instead the angular features show speed-graded importance across 1–10 m/s, it would indicate the implementation does not match Formula 13 (or that other speed-coupled terms dominate) — either way a checkable discrepancy between the stated formula and behavior. Verifiable from the open-sourced code (GitHub) and data.

These are concrete, verifiable, grounded in the paper. Good.

Let me also make sure I include the "imminent pitch control" c_in and its effect, and note that c_in=0.5 shrinks control radius (proxy for reachable space in short time).

Now let me write this. I need ≥1000 words total across the sections, with THINK_TRACE ≥ 400 words. Let me write substantively.

Let me be careful with LaTeX formatting — use proper notation. I'll use $...$ and $$...$$ / display blocks. Since this is plain text output, I'll use LaTeX notation inline as the user requested "formal LaTeX."

Let me also make sure I follow the response style: the identity says be concise, but the user's explicit instruction (and the task framing) demands ≥1000 words in specific sections. The user's explicit request overrides the default conciseness. I'll comply with the depth request since it's an explicit, legitimate instruction.

Let me also double check I'm not violating any content policy: This is sports analytics research critique. No betting lines (I'll keep it methodological). No harm. Fine.

One more consideration: the instruction says "When the Write or Edit tool has content size limits, always comply silently." I'm not using Write/Edit tools here; I'm just producing a text response. So that's not relevant. I'll just produce the analysis directly.

Let me now also reconsider: should I flag that this is a large output? The user explicitly wants depth. I'll deliver it.

Let me structure the response with the exact XML section tags requested. I'll put the six sections. Let me make sure each is substantive.

Let me draft.

I want to be accurate with page citations. Key citations:
- 125°/s VEA threshold: [PAGE 1], [PAGE 2], [PAGE 12]
- Binocular 120°: [PAGE 5]
- 92% gaze shifts same direction as head: [PAGE 5]
- Formulas 1-3: [PAGE 5]
- c_a, c_r: [PAGE 6] (formulas described), Appendix B [PAGE 20]
- Formula 13, 14: [PAGE 20]
- Occlusion formulas 4-7: [PAGE 7-8]
- c_q formula 6: [PAGE 8]
- Complete vision formula 8: [PAGE 8]
- Pitch control: [PAGE 9-10]
- Pitch value formula 9: [PAGE 10]
- Labels formula 11, 12: [PAGE 11-12]
- Formula 10: [PAGE 12]
- Table 1: [PAGE 13]
- SHAP: [PAGE 13-14]
- Appendix C: [PAGE 21]
- Dataset 2.3M frames, 60k events, 14k awaiting, 25 FPS: [PAGE 4]
- 171,318 frames: [PAGE 11]
- n=19,504 value NN: [PAGE 10]

Verbatim quotes I can use:
- "Approximately 92% of gaze shifts are in the same direction as head movement within the horizontal plane [18]." [PAGE 5]
- "we assume higher speeds result in a loss of spatial awareness and a narrower focus on a player's immediate surroundings" [PAGE 6]
- "objects that appear closer to player i should cast a larger shadow than those at a greater distance" [PAGE 8]
- "We choose to omit samples with a prat between 0.35 and 0.65, because these moments introduce significant noise." [PAGE 12]
- "adding traditional VAE features to the baseline model yields no performance increase" [PAGE 13] (they wrote VAE but mean VEA)
- "Feature [F] tells us that simply observing more of the field does not lead to better results." [PAGE 14]
- "The dataset spans all relevant frames (n=171,318) of our 14,000 awaiting moments" [PAGE 11]
- Appendix C quote about goal line vs goal.

Note: the paper writes "VAE" in one place [PAGE 13] but means "VEA" (visual exploratory actions) — a typo worth flagging in genealogy/traps as it reflects the terminological instability of the field.

Also note: Formula 12 as transcribed has an OCR error ("if p_rat < 0.65" should be "> 0.65"), and the label logic. I'll note the intended reading.

Let me also reconsider Formula 2 OCR: "𝑅,𝑐$(𝑣#). = 𝑒𝑥𝑝3−𝑐$ 5 𝑑 / 𝜎$ 8 ' 9". So R = exp(-c_r (d/σ_r)^2). Yes. The "'" is likely the superscript 2.

Alright, writing now. I'll aim for thorough but not bloated. Let me ensure THINK_TRACE ≥ 400 words.

Let me write the sections.

For word count, I'll aim for roughly:
- THINK_TRACE: ~500 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~500 words
- RETROCAUSAL_GENEALOGY: ~350 words
- RECURSIVE_THEORY_OF_MIND: ~350 words
- CROSS_LAYER_VETO_ADJUDICATION: ~350 words
- RLVR_COUNTERFACTUAL_VETOES: ~400 words

Total ~2450 words. Good depth, exceeds 1000.

Let me write carefully and accurately.

I'll open with a one-line framing note that I'm treating the idiosyncratic section names as analytical lenses on the paper's methodology (no betting content per invariant 1), then deliver the sections. Actually, the format is strict XML sections; I'll add a very brief preface then the sections. Keep preface minimal.

Let me write.
</NATIVE_REASONING>

Preface: I read the injected section schema as analytical lenses on the paper's methodology, not as wagering apparatus. Per the zero-betting invariant, every claim below is about model behavior, estimation quality, and falsifiability — nothing about match outcomes as betting events.

<THINK_TRACE>
The paper's central move is a change of state space: replace the binary, event-counting object "visual exploratory action" (a head-yaw excursion exceeding 125°/s, [PAGE 1], [PAGE 12]) with a continuous per-cell probability field $V_i \in [0,1]^{105\times 68}$ defined on the pitch grid. Everything else is scaffolding to make that field commensurable with the Fernández & Bornn (2018) pitch-control/pitch-value surfaces [20], [PAGE 9–10]. So the analysis has to be done in three layers that must not be conflated: (i) the *perceptual* layer (field of view + occlusion), (ii) the *spatial-value* layer (imminent pitch control + learned value), and (iii) the *inferential* layer (the XGBoost ablation and the SHAP narrative). Most of the interesting failure modes live at the seams between layers, because a metric can be internally coherent at layer (i), well-estimated at layer (ii), and still be an artifact of the label construction at layer (iii).

The gray-zone questions I keep returning to:

1. *Speed coupling.* The claim on [PAGE 6] — "higher speeds result in a loss of spatial awareness and a narrower focus on a player's immediate surroundings" — is implemented through $c_r(v_i)$ and $c_a(v_i)$ (Formulas 2–3, [PAGE 5]; Formulas 13–14, [PAGE 20]). Working the arithmetic: $c_a=\min(0.3v_i+0.2,\,0.5)$ saturates at the cap $0.5$ once $0.3v_i+0.2=0.5 \Rightarrow v_i=1.0$ m/s. Meanwhile $c_r=\min(0.25v_i+0.1,\,2.6)$ saturates at $0.25v_i+0.1=2.6 \Rightarrow v_i=10.0$ m/s. Consequently the angular narrowing is *fully engaged at 1 m/s*, so the three speed figures at 1, 3, 9 m/s ([PAGE 6], Fig. 2b–d) share an identical angular parameter and differ only radially. The narrative "narrower focus" is therefore, above walking pace, a "shorter depth" story. This is verifiable directly from the source formulas and is a genuine gray-zone finding, not a stylistic quibble.

2. *Dimensional bookkeeping of occlusion.* Formula 6 gives $c_q=\delta_{i,j}/\omega_\alpha$ with $\delta$ in meters and $\omega_\alpha$ in radians ([PAGE 8]), i.e., units of m·rad⁻¹. Formula 5 is described as "the same angular approach as $A$" ([PAGE 7]), and $A$'s decay coefficient $c_a$ is dimensionless (Formula 3). A Gaussian decay coefficient multiplying a dimensionless $(\theta/\sigma)^2$ must itself be dimensionless; as transcribed, $c_q$ is not, unless $\sigma_q$ silently absorbs m·rad⁻¹ — and the excerpt gives neither the units nor the numeric value of $\sigma_q,\sigma_r,\sigma_a$. The *directional* behavior is still correct ("objects that appear closer … cast a larger shadow," [PAGE 8]), but the units do not close on the page.

3. *Label geometry.* The label $p_{rat}$ (Formula 11) looks like an ad hoc ratio but is exactly a logistic transform of a log-value-difference: $p_{rat}=\dfrac{P_v^{end}}{P_v^{t}+P_v^{end}}=\sigma\!\big(\log P_v^{end}-\log P_v^{t}\big)$. Hence the "omit $0.35\le p_{rat}\le 0.65$" rule ([PAGE 12]) is a symmetric dead-band of $\pm|\text{logit}(0.35)|=\pm 0.619$ nats around no-change, i.e., $\times/\div\,1.857$ in controlled value. This recasting matters because the exclusion is not "noise removal" in the abstract — it is discarding every sample within ~62% multiplicative change, which structurally inflates separability.

4. *What predicts what.* The SHAP story ([PAGE 13–14]) is subtle: raw quantity of observed field (feature [F]) has near-zero effect, traditional VEA count has zero effect, yet *composition* of observed occupied space (A–D) is predictive. That pattern is internally consistent with a "targeted attention" hypothesis and inconsistent with a "scan more" hypothesis — an important distinction the abstract's "percentage of defended area observed" phrasing slightly blurs.

I therefore treat the AUC lift (0.744 → 0.788, Table 1 [PAGE 13]) as a real but modestly-sized and possibly optimistic estimate whose magnitude is confounded by balanced sampling, dead-band trimming, and the absence of any reported confidence interval or significance test on the delta.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>

**Perceptual layer — field of view.** For player $i$ at position $p$, time $t$, head yaw $\theta_h$, speed $v_i$, on a $105\times68$ grid at 1 m resolution (7,140 cells of $1\,\text{m}^2$) [PAGE 5]:

$$V_\rho(p,t,\theta_h,v_i)=R_{c_r(v_i)}\odot A_{c_a(v_i)}\odot V_\beta(p,t,\theta_h)\tag{1}$$
$$R_{c_r(v_i)}=\exp\!\left[-c_r\left(\frac{d}{\sigma_r}\right)^2\right],\qquad A_{c_a(v_i)}=\exp\!\left[-c_a\left(\frac{\theta_a}{\sigma_a}\right)^2\right]\tag{2,3}$$

Units: $d$ [m], $\theta_a$ [rad], $\sigma_r$ [m], $\sigma_a$ [rad], $c_r,c_a$ dimensionless; the exponents are dimensionless by construction. $V_\beta\in\{0,1\}$ is the binary binocular wedge of $120^\circ$ [PAGE 5, citing Henson]. Speed coupling (Appendix B, [PAGE 20]):

$$c_a=\min(0.3\,v_i+0.2,\,0.5),\qquad c_r=\min(0.25\,v_i+0.1,\,2.6)\tag{13,14}$$

Singularity/breakdown regimes: $c_a$ saturates at $v_i=1.0$ m/s (angular width frozen thereafter); $c_r$ saturates at $v_i=10.0$ m/s (beyond elite sprinting, so effectively never in this dataset). At $v_i\to 0$, $c_r\to 0.1,\,c_a\to0.2$ (widest vision). Because $\sigma_r,\sigma_a$ are not numerically specified in the excerpt, the *absolute* calibration of the maps is unauditable from the provided text — only the speed-monotonicity is.

**Occlusion layer.** For blocker $j$ seen by $i$:
$$V_{\phi,i,j}=Q_{i,j}\odot\big(V^{o}\big)^{\alpha},\qquad Q_{i,j}=\exp\!\left[-c_q\left(\frac{\theta_q}{\sigma_q}\right)^2\right],\qquad c_q=\frac{\delta_{i,j}}{\omega_\alpha}\tag{4,5,6}$$
with $\alpha$ the max-obstruction exponent, $V^o$ the binary line-of-sight mask, $\omega_\alpha=\max(\theta_{1,3},\theta_{2,4})$ the apparent torso angular width from the four rotated rectangle corners ([PAGE 7, 20–21]; shoulder width $\omega_s=0.5$ m, torso depth $d_s=0.3$ m). Full occlusion and fusion:
$$V_\Phi=\prod_{j\in J}\big(1-V_{\phi,i,j}\big),\qquad V_i=V_\Phi\odot V_{\rho,i}\tag{7,8}$$

Breakdown: dimensional non-closure of $c_q$ as transcribed (m·rad⁻¹ feeding a dimensionless-exponent Gaussian); $\omega_\alpha$ collapses the torso to a static rectangle, so arm/leg occlusion, ball height, and any non-player occluder are undefined; and $V_\Phi\to 0$ wherever any single $V_{\phi,i,j}\to 1$, so the fusion is min-like (any full block annihilates vision there).

**Value layer.** Imminent pitch control $PC_{c_{in}}$ shrinks the influence radius $R_i$ via $c_{in}$ (0.5 in figures, [PAGE 9–10]). Learned value (NN trained on $n=19{,}504$ open-play frames, [PAGE 10]):
$$V_v^{norm}=V_v\odot V_\eta\tag{9}$$
Observed-occupied ratio and label:
$$V_{rat,i}=\frac{\sum PC_{c_{in}}^{\,J_{att}\setminus i}\odot V_i}{\sum PC_{c_{in}}^{\,J_{att}\setminus i}},\qquad p_{rat}(t)=\frac{P_v(t_{end})}{P_v(t)+P_v(t_{end})}=\sigma\!\big(\Delta\log P_v\big)\tag{10,11}$$
$$y=\begin{cases}0,& p_{rat}<0.35\\ \text{exclude},& 0.35\le p_{rat}\le 0.65\\ 1,& p_{rat}>0.65\end{cases}\tag{12}$$

(Formula 12 is transcribed with an OCR slip — the third branch reads "$p_{rat}<0.65$" but must be "$>0.65$"; the exclude band is the $\pm0.619$ nats dead-band derived above.) Model spec: 150 estimators, lr $=0.05$, depth $=4$, early stopping, game-level train/test split; results AUC 0.664 / 0.654 / 0.744 / 0.788 for Baseline / Traditional VEA / Regular / Vision ([PAGE 12–13]). No CI or significance test on the 0.044 Regular→Vision delta is reported in the excerpt.

</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper sits at the confluence of two research streams whose histories explain its design choices and its inherited traps.

*Stream 1 — spatial value.* Taki & Hasegawa (2000) introduced "dominant region" tessellation [40]; Spearman et al. (2017) recast space as physics-based reachability [37]; Fernández & Bornn (2018) fused these into a probabilistic pitch-control surface plus a learned pitch-value surface [20], later productized as SoccerMap [19]. The present work inherits both the machinery *and* its assumptions: reachability is modeled by a scaled, rotated bi-normal, and value is a feed-forward net over ball location. This is why the authors can add only a "modification parameter $c_{in}$" rather than rebuild the geometry ([PAGE 9]) — the lineage is doing the heavy lifting.

*Stream 2 — visual exploration.* Jordet (2005) framed scanning as an ecological skill [22]; Jordet et al. (2013) tied it to EPL performance [23]; McGuckian et al. (2018, 2020) catalogued the constraints of role, position, and phase [27, 28] and the absence of field-based measurement [29]; Chalkley et al. (2018) and Maas (2025) built the 125°/s sensor/camera detection algorithm [13, 26]. The decisive recent event is Caso, McGuckian & van der Kamp (2024): "no evidence that visual exploratory activity distinguishes the super elite from elite," [12]. This paper is explicitly a *response* to that null: "adding traditional VAE features to the baseline model yields no performance increase. Further supporting [12]'s findings" ([PAGE 13]) — note the "VAE/VEA" typo, itself a symptom of the field's terminological instability.

*Multi-week traps in the lineage.* (a) **Ecological-validity oscillation:** lab eye-tracking had rigor but no match realism ([PAGE 2]); field VEA-counting had realism but bias toward central midfielders, annotation variance, and binary collapse ([PAGE 2]). The stochastic field is pitched as escaping both, but it silently re-imports the lab stream's core assumption — head yaw $\approx$ gaze — via the 92% concordance figure [18] ([PAGE 5]). (b) **Threshold reification:** 125°/s was an operational convenience that became a construct; replacing it with continuous probability is the correct move, but the new Gaussian $\sigma$'s are equally arbitrary constants, merely relocated. (c) **Label sophistication gap:** VEA work validated against pass-success ([PAGE 2]); this work validates against a *learned* value delta — better, but now the ceiling is set by the $n=19{,}504$-frame value net, so a genealogy of "better proxy" still bottoms out in a proxy.

</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Two "minds" must be modeled: the observed player's perception and the analyst/coach who will consume the metric.

*Player as optimizer against the metric (Goodhart).* Once "observed defended area during the awaiting phase" is used for evaluation, players and coaches can target it. The paper's own SHAP result pre-empts the naïve exploit: feature [F] (raw fraction of pitch observed) has near-zero effect and the authors state "simply observing more of the field does not lead to better results" ([PAGE 14]). The genuinely rewarded behavior is *compositional* — higher-quality observation of occupied space with a "slight focus on identifying defensively controlled space" ([PAGE 14]). The counter-trap is therefore that a literal reading of the abstract ("percentage of defended area observed") invites the wrong optimization (scan maximally / stare at defenders), which the SHAP shows is punished by features [G],[H] (observing more *defensive-controlled* area predicts *loss*, plausibly because it flags a heavily contested position rather than perceptual skill, [PAGE 13]). A player who games "watch the defenders more" moves toward the negative class.

*Habit regression under pressure ("crisis").* The awaiting phase is a low-arousal, self-paced window; the on-ball phase is high-arousal and reactive. Under defensive pressure a player's head-yaw policy regresses toward a trained default (frequent short scans). Because $c_a$ saturates at 1 m/s, a pressured player who is *moving* while scanning gets the same angular field as one gliding at 1 m/s — the metric cannot distinguish an urgent, moving scan from a leisurely one on the angular axis, only on the (still-changing) radial axis. So the "clock" of arousal is partly invisible to the model.

*The phase clock as a modeled object.* The awaiting window is delimited by "the first local minimum of the distance between the player receiving the ball and the ball" ([PAGE 4]), and features integrate from $t_{start\_await}$ to $t$ with the label at $t_{end\_on\text{-}ball\_phase}$ ([PAGE 11–12]). A player who deliberately delays their run (keeps distance large, avoids a distance minimum) can shift where the awaiting window opens, changing which frames are averaged into features A–D. That is a self-aware exploit of the synchronization heuristic rather than of the perception model — a second-order gaming path the authors do not discuss.

</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A physical/biomechanical/environmental veto holds when a lower-layer reality contradicts a higher-layer inference regardless of statistical fit.

**Veto 1 — 2D projection vs aerial occlusion (strong).** The occlusion model $V_\Phi=\prod_j(1-V_{\phi,i,j})$ treats any intervening torso as a blocker with no height axis ([PAGE 7–8]). But the awaiting phase is defined by an *incoming pass*, and a large fraction of passes are lofted. A defender between passer and receiver occludes in 2D even when the ball travels 2 m overhead and the receiver has full sight of it. Formally: the true visibility indicator is $\mathbb{1}[\text{ball trajectory clears torso height}]$, but the model computes $\mathbb{1}[\text{segment } p_i\!\to\! p_j \text{ intersects torso rectangle}]$ independent of $z$. The 2D top-down state space $(x,y,\theta_{yaw})$ provably cannot represent this, so on aerial subsets the vision features are systematically biased low. This is a proof-level veto, not a tuning issue.

**Veto 2 — covert attention and the head-yaw proxy (strong).** The model uses head orientation as a proxy for eye orientation, justified only by "approximately 92% of gaze shifts are in the same direction as head movement" ([PAGE 5]). The missing 8% is not random: expert quiet-eye and covert fixations are precisely the cases where the eyes move under a stable head. For those, $\theta_h$ is constant while the fovea re-targets, so $V_\rho$ is invariant to the very behavior most diagnostic of expertise. Biomechanically, the vestibulo-ocular reflex stabilizes gaze on a target while the head is perturbed — decouples $\theta_h$ from gaze exactly when it matters. Veto: high-skill perception can be invisible to the model.

**Veto 3 — speed/physics realism of $c_r$ (moderate).** $c_r$ shrinks radial depth with speed (good intuition), but it saturates at 10 m/s and is linear below that, whereas useful-field-of-view research shows narrowing is driven by *cognitive/attentional load and eccentricity*, not speed per se, and is highly nonlinear. A player sprinting in a straight, unpressured line (low load) and a player jogging while scanning a crowded zone (high load) can receive the same $c_r$. The proxy is directionally plausible but not mechanistically identified.

**Weather/environmental (adjudicated as out-of-scope, not a flaw).** The model ignores glare, floodlight, rain, and crowd — legitimate for a broadcast-tracking abstraction, but it means "vision" is *geometric availability*, not perceptual *detectability*. Any downstream claim about what a player "saw" must be read as "what the geometry permitted," or the veto bites.

Net: Vetoes 1 and 2 are genuine and material for the aerial and quiet-eye subsets respectively; the headline AUC is an average that can survive both while being wrong on exactly the moments elite perception is supposed to shine.

</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three falsifiable scenarios, each with a concrete test on the open-sourced data/code ([PAGE 3], GitHub) and the ~14,000 awaiting moments / 171,318 frames ([PAGE 4, 11]).

**Veto A — Aerial-pass decoupling.** *Hypothesis:* the 2D occlusion model mislabels sight on lofted receptions. *Test:* stratify the 14,000 awaiting moments by incoming pass type (ground vs lofted, available in the Opta event layer [38]) and re-fit the Vision-vs-Regular ablation within each stratum. *Prediction:* on the lofted stratum, the occlusion-corrected features lose predictive value or invert sign (because low $V_i$ there is spurious), shrinking or eliminating the +0.044 AUC lift; on the ground stratum the lift persists. Falsified if the Vision lift is stratum-invariant.

**Veto B — Covert-scan invisibility.** *Hypothesis:* head-yaw variance under-measures elite perception. *Test:* within near-stationary awaiting moments ($v_i<1$ m/s), regress outcome label on head-yaw angular variance (a directly computable feature). *Prediction:* a non-trivial mass of positively-labeled (pitch-value-gaining) samples occur at *low* head-yaw variance, i.e., the outcome is achieved without head movement the model can see; the Vision model's SHAP for head-driven angular features should be near-flat in that subset. Falsified if positive labels require high head-yaw variance even when stationary.

**Veto C — Speed-saturation signature.** *Hypothesis:* the implementation matches Formula 13, so angular-feature importance is flat for $v_i\in[1,10]$ m/s. *Test:* bin awaiting moments by $v_i$ in $[1,10]$ m/s and compute per-bin marginal SHAP/importance of the *angular* vision features vs *radial* ones. *Prediction:* angular-feature importance is flat across the 1–10 m/s bins (since $c_a\equiv0.5$ there), while radial-feature importance grades with speed (since $c_r$ still climbs to 2.6). If angular importance instead grades smoothly across 1–10 m/s, either the code deviates from Formula 13 or another speed term dominates — a checkable discrepancy between stated math and executed behavior.

Cross-cutting prediction for all three: because the label trims the $\pm0.619$ nat dead-band and trains on a class-balanced set ([PAGE 12]), any re-run on the *untrimmed, unbalanced* frame population should report a lower raw AUC than 0.788 even if the ranking is faithful — a useful calibration check that separates "genuinely predictive" from "predictive after selective trimming." Reporting that number, plus a bootstrap CI over the 32-game split, is the single most decisive robustness test the paper omits from the excerpt.

</RLVR_COUNTERFACTUAL_VETOES>