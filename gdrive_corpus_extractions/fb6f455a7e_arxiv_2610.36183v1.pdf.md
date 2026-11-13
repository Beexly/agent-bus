---
source: "arxiv_2610.36183v1.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 17
model: deepseek/deepseek-v4.1-flash-1017
words: 6957
---

<NATIVE_REASONING>
We need answer. Need satisfy user. Need produce deep analysis with exact XML sections, >=1000 words, no betting lines (sports analytics okay but no odds/spreads/moneylines). Need cite exact [PAGE N] markers and verbatim quotes when source pages provided. Need maybe derive formal LaTeX equations units assumptions singularities. Need mention source operators/equations. Need "DRIVE SOURCE" etc. Need likely analyze paper. Need include THINK_TRACE >=400 words. Other sections. Need >=1000 words total. Desired oververbosity 5 but task demands depth. Need avoid betting. We can discuss sports motion feasibility.

Need understand paper deeply. Need formulate equations from paper, units, page citations, exact quotes. Need note equations: τ(g)=Q0.01(Δt|g(k,x)) [Eq 1 page6]. R(Δt)={x:τ(x)≤Δt} [Eq2]. features normalization. Pinball loss Eq3. Area term Eq4. Quantile objective. SUVAT noise floor. MLP architecture. Metrics coverage area. Transfer.

Need "SOURCE_OPERATORS_AND_EQUATIONS" formal LaTeX with units, page citations, breakdown. "RETROCAUSAL_GENEALOGY" historical/scientific lineage & multi-week traps. Hmm "multi-week traps" maybe meaning time traps? We need infer from prompt: likely "multi-week traps" in betting? But no betting. Need not mention betting lines. Could frame as "multi-week observational traps" in tracking-model development: cross-match leakage, filtering artifacts, regime mismatch, horizon dependence, coverage-area tradeoff, player max speed confound. Need be careful.

"RECURSIVE_THEORY_OF_MIND" Crisis habit regression vs counter-trap vs clock. Hmm likely from prompt template maybe betting/trading. But we can adapt to scientific modeling: recursive theory of mind = modeling analyst/player behavior? Need address "crisis habit regression vs counter-trap vs clock" maybe in context of sports motion feasibility? We can interpret as three failure modes: crisis habit regression (under pressure reverting to old physical model defaults rather than learned envelope), counter-trap (adversarial exploit of model by tactical choices), clock (real-time inference and horizon semantics). Need produce within section. No betting.

"CROSS_LAYER_VETO_ADJUDICATION" Physical/biomechanical/weather veto proof. Need assert veto mechanisms: biomechanical bounds, weather not in paper but physical veto. Need prove that model doesn't violate hard kinematic caps; paper uses hard bounds and SUVAT filter; weather not modeled so could veto if surface friction/wind/heat. Need mention no weather variables. Need cite page 6-8. Need "proof" as in logical: if model output τ < SUVAT floor then sample filtered; but at inference no such check? Need discuss. Need maybe scenario where weather vetoes transfer, etc. Need use exact quotes.

"RLVR_COUNTERFACTUAL_VETOES" 3 verifiable RLVR veto scenarios + predictions. Need define RLVR? Reinforcement learning with verifiable rewards? Need craft 3 scenarios that would veto model claims, with predictions. Need verifiable. E.g., 1) synthetic teleport artifact injected at fast tail; expected predicted floor drops and monotonicity/area worsens unless filter retrained; paper says filter off loosens area by up to 31% and monotonicity violations rise from 1.4% to 23.4%. Predict. 2) cross-sport transfer: feed basketball checkpoint to NFL; area will exceed destination two-segment (paper Table 3 36.5 vs 20.0? Wait NFL test: Basketball train area 36.5 vs Two-segment 20.0. Predict area inflation. 3) real-time latency: full pitch map at 157,080 rows; on RTX A5000 2.4 ms; if hardware slower or batch larger, drops below 25-30 fps. Predict. Need no betting.

Need use "RLVR" maybe "Reinforcement Learning with Verifiable Rewards". We can define. Need include verifiable veto criteria and predictions. Maybe "veto" = counterfactual test that falsifies claim. Need mention exact equations and page citations.

Need include "THINK_TRACE" deep multi-hop derivation & gray-zone audit >=400 words. We need ensure section content >=400 words. Total >=1000 words. We can write maybe 1800-2500 words. Need XML exact. Need no fabricated page citations beyond source. Need verbatim quotes exact. Need use [PAGE N] markers. Need be cautious: quotes must be exact. Use quotes from text. Need ensure quote text exact. Let's collect exact quotes:

Page1 abstract: "We study time-to-arrival (TTA) in sports: the shortest plausible time a player needs to reach an arbitrary location on the pitch given their current kinematic state, estimated as the lower envelope of observed locomotion times." [PAGE 1]
Page2: "The key modeling choice is to estimate a low envelope of arrival times rather than the mean: a player may dawdle to any location, so the upper tail is uninformative, but the floor on how quickly they can plausibly arrive is sharply defined and is exactly the quantity downstream space models need." [PAGE 2]
Page2: "We estimate this floor at τ = 0.01 rather than a looser quantile, since the target quantity is a feasibility bound (the player could be there in time)." [PAGE 2]
Page6: "We predict the minimum time that a football player needs to reach an arbitrary location on the pitch, given their current kinematic state k = (p, v, a), where p is the position, v the velocity and a the acceleration." [PAGE 6]
Page6: "τ(g) = Q0.01(∆t | g(k, x)) , (1)" exact.
Page6: "R(∆t) = { x : τ(x) ≤∆t }." exact maybe.
Page6: "Intent, fatigue, tactical constraints and obstacles all act in the conservative direction." [PAGE 6]
Page7: Table 1 features. Need quote "d/120 distance to target (m) Dnorm = 120" etc maybe exact? We can cite table.
Page7: "At τ = 0.01, over-prediction is penalized 99× more heavily than under-prediction, pushing the estimate toward the lower envelope so the model learns how quickly a player can arrive." [PAGE 9] Wait page9 has Eq3 and this quote. Yes page9.
Page8: "The filter is deliberately conservative: it removes only 0.3% of extracted samples, and its caps (8 m/s2, 9 m/s) are stricter than the independent physical clipping bounds..." [PAGE 7? Actually page7/8? Text page7 bottom to page8 top. It appears on page7? Let's check source: PAGE 7 includes Section 3.4 Sample extraction... SUVAT noise floor... ends "Because the τ = 0.01 objective learns from the fastest realizations, a single teleport artifact at a given geometry can drag the predicted floor below what is physically achievable." Then Page 8 starts "clipping bounds of Supplementary Section A.1, so it discards only samples already implausible under a model-free criterion. Retraining with the filter off, or with its caps widened to the model-free clipping bounds leaves the fitted floor unchanged and only degrades regularity: matched-coverage areas loosen by up to 31% and 12–17% respectively, and monotonicity violations (Section 4.4) rise from 1.4% to 23.4% of rays." So quote "matched-coverage areas loosen by up to 31% ... monotonicity violations ... rise from 1.4% to 23.4% of rays." [PAGE 8] Actually page 8. Need cite [PAGE 8] for that quote. For caps 8 m/s2, 9 m/s on page 7? It says "its caps (8 m/s2, 9 m/s) are stricter than the independent physical" at end page7? Let's see page 7 text: after filter "The filter is deliberately conservative: it removes only 0.3% of extracted samples, and its caps (8 m/s2, 9 m/s) are stricter than the independent physical" then page 8 "clipping bounds..." So quote spans pages 7-8. Cite [PAGE 7] and [PAGE 8]. Good.

Page9: "At τ = 0.01, over-prediction is penalized 99× more heavily than under-prediction, pushing the estimate toward the lower envelope so the model learns how quickly a player can arrive." [PAGE 9]
Page9: Eq3 exact.
Page9: "Because the surface is translation/rotation-invariant, its area can be evaluated on a fixed heading-frame grid G (25 × 25 nodes at 4 m spacing spanning ±48 m, the origin node excluded, |G| = 624)" [PAGE 9]
Page9: Eq4.
Page11: "the model that covers the same fraction of actually-reached points with the smallest area is the tighter one." [PAGE 10? Actually page10 text: "the model that covers the same fraction of actually-reached points with the smallest area is the tighter one." [PAGE 10] Wait page 10 includes evaluation methodology. Yes [PAGE 10].
Page11 Table2 area @99 etc.
Page11: "Both MLPs beat every physics baseline on MAE and pinball, by a wide margin." [PAGE 11]
Page12: "Across all distance bands, both MLPs outperform both baselines by a substantial margin." [PAGE 12]
Page13: "On 5,000 held-out states the predicted sublevel sets are a single connected region containing the player in 100% of the 25,000 state×horizon cases examined, and are star-shaped in 100% of 80,000 audited rays at every canonical horizon." [PAGE 13]
Page13: "Radial monotonicity is violated on 1.4% of rays, all of them at τ > 4 s and beyond 20 m from the player, with a median dip of 16 ms — far outside the operating range of the reachable-area metric." [PAGE 13]
Page13: real-time "On an NVIDIA RTX A5000 GPU this pass takes 2.4 ms, i.e., ∼420 frames per second, an order of magnitude above the 25–30 fps a tracking system samples at." [PAGE 13]
Page14 Table3 cross-sport. Need quote maybe "Cross-sport transfer is markedly asymmetric." [PAGE 12] or page 14. Actually page12 says "Cross-sport transfer is markedly asymmetric." [PAGE 12]. Page14 table. Good.

Need "RETROCAUSAL_GENEALOGY" historical/scientific lineage & multi-week traps. Need discuss from Taki & Hasegawa dominant region, Fujimura & Sugihara resistive force, Efthimiou Voronoi, Renkin motion models, Anzer & Bauer reachable hulls, Koenker & Bassett quantile regression, Savitzky-Golay. Need cite pages. Multi-week traps: (i) treating kernel density/occupancy as feasibility; (ii) fitting global parameters and validating downstream outcomes; (iii) label leakage across matches/players; (iv) horizon-dependent parameter drift; (v) teleport artifacts at fast tail; (vi) transfer label regime mismatch. Need maybe "multi-week" is weird; we can phrase "multi-week experimental traps" or "multi-week development traps". Need not mention betting.

Need "RECURSIVE_THEORY_OF_MIND" Crisis habit regression vs counter-trap vs clock. Need address "crisis habit regression" in model development: under distribution shift, practitioners regress to fixed closed-form habits. "counter-trap": adversary/opponent can exploit learned lower envelope? Wait TTA is physical feasibility not behavioral prediction; but downstream models may use it. Need explain counter-trap: if you optimize to exploit predicted reachable areas, you may mistake feasibility for intent; the model says "could be there" not "will be there"; using it as if it predicts choice is a trap. Clock: horizon/time semantics; τ is lower envelope conditional on state and target; area at horizon; real-time inference. Need also theory of mind: recursive modeling of player's own future choices? The model intentionally discards intent, fatigue, tactical constraints. Need mention "Intent, fatigue, tactical constraints and obstacles all act in the conservative direction" [PAGE 6]. This is key: lower quantile is conservative; if intent etc., actual time >= floor. So counter-trap: don't interpret fast arrival as tactical commitment. Clock: horizon ∆t in seconds; area set depends on ∆t; monotonicity violations at τ>4s beyond 20 m; operating range. Need discuss.

"CROSS_LAYER_VETO_ADJUDICATION" Physical/biomechanical/weather veto proof. Need formalize. We can define veto as any hard constraint outside learned features that makes τ_pred(x) < τ_phys(x). Since model trained on stats and filtered with SUVAT caps, but no explicit biomechanical individual fatigue/injury, weather, surface. Paper uses hard kinematic bounds in track cleaning [PAGE 6], SUVAT noise filter [PAGE 7-8]. Need state conditions: if observed sample violates speed/accel bounds, excluded. If predicted τ below SUVAT with caps 8 m/s² and 9 m/s, it is outside physically plausible under that capped model, so treat as veto; at inference, need a post-hoc check τ_pred ≥ τ_SUVAT(k,x). But paper only uses SUVAT for training filter, not inference. Need note gap. Weather veto: no meteorological variable in six features [PAGE 7 Table1]; wet/icy pitch, wind, heat reduce max acceleration/speed. The model's constants Vnorm=12 m/s, Anorm=10 m/s² are normalization/clipping thresholds, not weather-adjusted. Thus if environment reduces effective μ or vmax, predictions are optimistic; veto by replacing caps with weather-specific vmax(weather), a_max(weather). Biomechanical veto: per-player max speed feature improves [PAGE 11], but injury/fatigue not modeled. If player's instantaneous max speed below population, profile feature only 99th percentile over training matches, not current fatigue. Predict: adding weather caps should reduce reachable area at 99% coverage; violation check should catch. Need "proof" maybe logical proof: Model output is lower quantile of observed locomotion under training distribution D. For deployment distribution D' with stricter physical constraints C', if support of D' is subset of D but model doesn't condition on C', then Q0.01(Δt|g) ≤ Q0.01(Δt|g,C')? Actually stricter constraints increase minimum time, so predicted floor underestimates. Thus τ_pred ≤ τ_true. Need formal: Let A = {x: τ_pred(x) ≤ h}. If true feasible set A' = {x: τ_true(x) ≤ h} with τ_true ≥ τ_pred pointwise, then A' ⊆ A; coverage on actual reached points may still be okay? Wait if actual reached by player under constraints, actual Δt ≥ τ_true? Hmm. For feasibility, if τ_pred underestimates, it may mark unreachable as reachable (false positives). Coverage = fraction of actual reached points with τ_pred≤h; underestimation doesn't hurt coverage but area too large? Actually if τ_pred lower, sublevel set larger, area larger. But if true constraints stricter, true reachable set smaller; model area overestimates. Need veto if area inflation relative to physics. But for safety, if τ_pred < τ_true, false positive reachability. Need state.

Need "RLVR_COUNTERFACTUAL_VETOES" 3 verifiable scenarios + predictions. Need include exact metrics and predictions. Maybe:
1. Teleport-artifact injection: add synthetic 10 m jump at fast tail. Prediction: without SUVAT filter, fitted τ floor drops; matched-coverage area loosens up to 31% and monotonicity violations rise 1.4%→23.4% [PAGE 8]. Veto criterion: if area loosens >12-17% or monotonicity >5%, reject. Verifiable by retraining with filter off.
2. Cross-sport transfer area check: score basketball-trained checkpoint on NFL test. Prediction: MAE 1.284 s vs NFL two-segment 1.608 s (beats point error) but area 36.5 m² vs 20.0 m² at 99% coverage (looser) from Table 3 [PAGE 14]. Veto criterion: if transferred checkpoint area > destination physics baseline even when point error better, do not claim better feasibility. Verifiable.
3. Real-time latency: full 157,080-row batch on RTX A5000 2.4 ms ~420 fps [PAGE 13]. Veto if measured latency > 1/25 s = 40 ms or batch throughput <25 fps. Prediction: on 10× slower GPU or CPU, pass >24 ms? Actually 2.4 ms*10=24 ms still <40; 20×=48 ms >40. We can predict if hardware ≥17× slower then fails 25 fps. Verifiable. Need maybe include "clock" scenario. Good.

Need ensure no betting lines. The paper is sports, but we don't mention odds.

Need include citation markers exact [PAGE N]. Need maybe include equations with units. Need formal LaTeX. Need include singularity/breakdown regimes. In SOURCE_OPERATORS_AND_EQUATIONS: list equations, units, assumptions, breakdown. Need mention singularities:
- Eq1 conditional quantile at τ=0.01. Assumptions: enough samples per geometry; stationarity; labels self-supervised; state-target pairs; no intent. Breakdown: sparse geometry / extrapolation; teleport artifacts; distribution shift; quantile crossing? Actually quantile regression can have crossing across quantiles but only one quantile. 
- Eq2 duality: sublevel set. Breakdown if τ not monotone radially/star-shaped; paper audits 1.4% violations beyond 20 m and τ>4s [PAGE 13]. Singularity at x=p: d=0; they exclude origin node in area grid [PAGE 9] and discard degenerate near-zero-distance samples [PAGE 7]. Also θ undefined at d=0; angle pair cos/sin avoids 2π discontinuity [PAGE 7]. 
- Eq3 pinball: τ=0.01 asymmetric; units seconds? L has units seconds? Since τ dimensionless times y difference seconds. MAE seconds. Pinball values ~0.028 s. Break down if y<ŷ penalty 0.99? Wait Eq3: if y≥ŷ: τ(y-ŷ); if y<ŷ: (1-τ)(ŷ-y). At τ=0.01, under-prediction (ŷ<y) penalized 0.01; over-prediction (ŷ>y) penalized 0.99. The text says "over-prediction is penalized 99× more heavily than under-prediction" yes. Need be precise: if y≥ŷ (prediction below truth) penalty 0.01; if y<ŷ (prediction above truth) penalty 0.99. So over-prediction penalized 99×. 
- Eq4 area: L_area dimensionless? Sum sigmoid over grid / |G|, dimensionless [0,1]. β=0.25 s sets sharpness. λ=0.01; L_total units? Lτ seconds plus λ dimensionless. Dimensionally mixed but treated as objective; could mention since λ small. Actually Lτ units seconds, Larea dimensionless; λ has units? Not specified. This is a gray-zone: dimensionally inconsistent unless λ carries units or Lτ normalized. The paper doesn't specify. We should note as audit issue. Good.
- MLP 6→64→64→1 ReLU Softplus [PAGE 8]. Inputs normalized by hard bounds [PAGE 7 Table1]. Breakdown for inputs beyond bounds: clipping thresholds? They say same constants serve as clipping thresholds and feature scales [PAGE 7]. So beyond 12 m/s speed clipped? Good.
- SUVAT filter: caps 8 m/s², 9 m/s. Removes 0.3%. If filter off area loosens 31%, monotonicity 23.4% [PAGE 8]. This is a key operator.
- Coverage area: coverage fraction; area m² at 99% coverage. Eq? Could formalize C(Δt)=1/N sum 1[τ_pred(x_i)≤Δt]; A(Δt)=∫ 1[τ_pred(x)≤Δt] dx. [PAGE 10-11]. Units m². Need cite.
- Real-time: 157,080 rows; 2.4 ms; 420 fps [PAGE 13]. Batch size 22 players × 7,140 cells = 157,080. Units.

Need "THINK_TRACE" deep multi-hop derivation and gray-zone audit. Need write 400+ words. Can include reasoning chain: from feasibility to quantile to duality to coverage-area to transfer to audit. Need mention gray zones: lower quantile vs minimum; finite sample; label self-supervision; teleport artifacts; area loss dimension; weather; cross-sport label regime; real-time. Need be thorough.

Need "RETROCAUSAL_GENEALOGY" maybe ~250 words. "multi-week traps" maybe mention development traps over multi-week campaigns: leakage, filter tuning, metric gaming, overfitting to one sport, ignoring horizon. Need be meaningful.

Need "RECURSIVE_THEORY_OF_MIND" ~250 words. Interpret as recursive modeling: model predicts physical possibility, not intention; downstream analysts may recursively infer opponent's belief about reachability. Need discuss crisis habit regression: under distribution shift, default to hand-set Gaussian/closed-form; counter-trap: using feasibility as intent predictor; clock: horizon and real-time. Need be precise.

Need "CROSS_LAYER_VETO_ADJUDICATION" ~250 words. Physical/biomechanical/weather veto proof. Use formal inequalities.

Need "RLVR_COUNTERFACTUAL_VETOES" ~250 words with 3 scenarios.

Need total >1000 words. We can aim 2000 words. Need avoid too much. Let's draft.

Need include exact quote citations. We need be accurate with page numbers. Let's verify page numbers for each quote:

Page 1 abstract quote yes.
Page 2 key modeling quote yes.
Page 2 τ=0.01 quote yes.
Page 6 problem formulation quote yes.
Page 6 Eq1 yes.
Page 6 Eq2 yes.
Page 6 "Intent, fatigue..." yes last sentence of 3.1? On page 6: "Intent, fatigue, tactical constraints and obstacles all act in the conservative direction." Yes.
Page 7 Table 1 and angle encoding. Quote "The angle is always encoded as the pair (cos θ, sin θ), never as a raw angle, which would introduce a 2π discontinuity." [PAGE 7]
Page 7 sample extraction: "For every usable state frame we emit training tuples (k, x∆t, ∆t), where x∆t indicates the player’s smoothed position ∆t seconds later." [PAGE 7] Could cite.
Page 7 SUVAT: "Because the τ = 0.01 objective learns from the fastest realizations, a single teleport artifact at a given geometry can drag the predicted floor below what is physically achievable." [PAGE 7]
Page 8 filter quote: "The filter is deliberately conservative: it removes only 0.3% of extracted samples, and its caps (8 m/s2, 9 m/s) are stricter than the independent physical clipping bounds..." Actually spans page7-8. We can quote only page8 part: "Retraining with the filter off, or with its caps widened to the model-free clipping bounds leaves the fitted floor unchanged and only degrades regularity: matched-coverage areas loosen by up to 31% and 12–17% respectively, and monotonicity violations (Section 4.4) rise from 1.4% to 23.4% of rays." [PAGE 8] Exact? Source: "Retraining with the filter off, or with its caps widened to the model-free clipping bounds leaves the fitted floor unchanged and only degrades regularity: matched-coverage areas loosen by up to 31% and 12–17% respectively, and monotonicity violations (Section 4.4) rise from 1.4% to 23.4% of rays." Yes [PAGE 8].
Page 9 Eq3 quote and Eq4. Page 9 says "At τ = 0.01, over-prediction is penalized 99× more heavily than under-prediction, pushing the estimate toward the lower envelope so the model learns how quickly a player can arrive." yes.
Page 9 area grid quote yes.
Page 10 coverage-area quote: "Any model reaches coverage 1.0 by inflating its reachable set to the whole pitch, so we never rank models on coverage or on area in isolation. Instead, we tune every model to a matched coverage and compare the resulting mean reachable area at that shared operating point: the model that covers the same fraction of actually-reached points with the smallest area is the tighter one." [PAGE 10]
Page 11 Table 2 and quote "Both MLPs beat every physics baseline on MAE and pinball, by a wide margin." [PAGE 11]
Page 12 Fig3 and quote "Across all distance bands, both MLPs outperform both baselines by a substantial margin." [PAGE 12]
Page 12 cross-sport quote: "Cross-sport transfer is markedly asymmetric." [PAGE 12] yes.
Page 13 structural audit quote yes.
Page 13 real-time quote yes.
Page 14 Table3. We can cite [PAGE 14] for specific values.
Page 14 conclusion quote maybe "A fixed closed-form motion model is therefore not necessary to produce a physically plausible, well-calibrated reachable-area estimate." [PAGE 14] yes.

Need maybe mention "not betting" no need.

Need ensure XML sections exact names. User specified exact XML sections. We must output only those? Probably can include preamble? They want exact sections. We can start with <THINK_TRACE> directly. Need include all sections. No markdown? XML with LaTeX. Fine.

Need maybe include "SOURCE_OPERATORS_AND_EQUATIONS" contains formal LaTeX, units, page citations, breakdown. Use bullets. Need include exact equations. Need include "PAGE" markers. Need "verbatim quotes" as quotes. Need not cite every equation? We can.

Need "THINK_TRACE" >=400 words. Let's write around 550 words. Need include "gray-zone audit". Good.

Let's compose carefully.

Potential issue: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." So avoid fake ratios. Use only paper equations. If I introduce veto inequality, it's formal and justified, not fake ratio. Use definitions. Avoid inventing "Force/Fatigue". Good.

Need "SI/information/probability units" include s, m, m/s, m/s², m², dimensionless τ, probability coverage. Good.

Need "exact singularity/breakdown regimes" include d=0, θ undefined, extrapolation beyond training horizons [0.10,8.0] s, beyond 20 m and >4 s monotonicity, cross-sport label regime, weather not modeled, dimension mismatch in L. Good.

Need maybe "multi-week traps" exactly phrase. We'll use "multi-week development traps". Good.

Need "Crisis habit regression vs counter-trap vs clock" exactly phrase in section. Good.

Need "Physical/biomechanical/weather veto proof." Use "veto proof" with formal. Good.

Need "3 verifiable RLVR veto scenarios + predictions." Use numbered.

Let's draft.

Need maybe mention "DRIVE SOURCE" no need. Could include in SOURCE section? Not necessary.

Need be careful with "TTA" abbreviation. Good.

Let's formulate formal equations:

Eq1:
\[
\tau(g)=\mathcal Q_{0.01}\left(\Delta t \mid g(k,x)\right),\quad k=(p,v,a)
\]
Units: τ, Δt seconds; g dimensionless normalized geometry (d/Dnorm, v/Vnorm, ax/Anorm, ay/Anorm, cosθ, sinθ). Dnorm=120 m, Vnorm=12 m/s, Anorm=10 m/s². [PAGE 6-7]
Eq2:
\[
R(\Delta t)=\{x:\tau(x)\le \Delta t\}
\]
Units: R subset pitch m²; Δt s. Breakdown: if τ non-monotone, sublevel set may not be star-shaped; paper audits 1.4% violations [PAGE 13]. At x=p (d=0) origin excluded from grid [PAGE 9]; degenerate near-zero-distance samples discarded [PAGE 7].
Eq3:
\[
L_\tau(\hat y,y)=
\begin{cases}
\tau(y-\hat y), & y\ge \hat y,\\
(1-\tau)(\hat y-y), & y<\hat y,
\end{cases}
\quad \tau=0.01
\]
Units seconds (since τ dimensionless). Asymmetry 99× [PAGE 9]. Breakdown: if labels contain teleports below physical floor, quantile lower tail is corrupted; SUVAT filter [PAGE 7-8].
Eq4:
\[
L_{\rm area}=\operatorname{mean}_{k,h\in\{3,5\}}\frac{1}{|G|}\sum_{x\in G}\sigma\left(\frac{h-\hat\tau_k(x)}{\beta}\right),\quad \beta=0.25\,s,\quad |G|=624
\]
Dimensionless. λ=0.01; total L = Lτ + λLarea. Gray zone: Lτ seconds + λ dimensionless; paper does not state λ units or normalization. Breakdown: sigmoid soft count; β controls sharpness; if β too large, area term blurs horizon; if too small, gradients vanish. Good.
Coverage:
\[
C(\Delta t)=\frac1N\sum_i \mathbf1[\tau_{\rm pred}(x_i)\le \Delta t]
\]
dimensionless probability. Area:
\[
A(\Delta t)=\int_{\rm pitch}\mathbf1[\tau_{\rm pred}(x)\le \Delta t]\,dx
\]
m². Matched coverage comparison [PAGE 10-11]. Good.

SUVAT filter:
\[
\Delta t_{\rm obs}\ge \Delta t_{\rm SUVAT}(k,x), \quad a_{\max}=8\,m/s^2,\ v_{\max}=9\,m/s
\]
discard otherwise. Removes 0.3%; filter off area loosens up to 31%; monotonicity 1.4→23.4% [PAGE 8]. Good.

Need "SOURCE_OPERATORS_AND_EQUATIONS" maybe mention MLP architecture 6→64→64→1 ReLU Softplus [PAGE 8], input features [PAGE 7 Table1], Savitzky-Golay [PAGE 6]. Good.

Need "RETROCAUSAL_GENEALOGY" cite historical lineage: Taki & Hasegawa [46] dominant region, Fujimura & Sugihara [18] resistive force, Renkin [35] catalog, Anzer & Bauer [2] reachable hull, Koenker & Bassett [23] quantile regression, Savitzky-Golay [37]. Page 3, page 15-16 references. Need exact quotes? "Taki and Hasegawa [46] introduced a dominant-region idea using a constant-acceleration motion model, and Fujimura and Sugihara [18] refined the locomotion law with a resistive-force model that caps speed smoothly." [PAGE 3] Good. "Renkin et al. [35] provided the most systematic treatment we build on: they cataloged a family of motion models..." [PAGE 3] Good. "Anzer and Bauer [2] occupy an intermediate position we benchmark against directly: they estimate reachable regions directly from tracking data, as per-speed convex hulls of observed displacements, without committing to any closed-form equation of motion." [PAGE 3] Good. Multi-week traps: (1) occupancy vs feasibility [PAGE 2 quote about kernel density not feasibility], (2) fixed global parameters [PAGE 5 "horizon-dependent parameters of [30] show a fixed functional form cannot serve all horizons"], (3) teleport artifact [PAGE 7], (4) cross-sport label regime [PAGE 12-13], (5) area coverage gaming [PAGE 10]. Good.

Need "RECURSIVE_THEORY_OF_MIND" discuss crisis habit regression vs counter-trap vs clock. Use quotes. "Intent, fatigue, tactical constraints and obstacles all act in the conservative direction." [PAGE 6]. "The target is not where a player is expected to go but how fast they could plausibly get somewhere" [PAGE 6]. Use these. Crisis habit regression: when distribution shifts, modelers revert to fixed closed-form/global params. Paper says fixed closed-form not necessary [PAGE 14]. Counter-trap: downstream may treat feasibility as intent; recursive ToM: opponent's choice is not same as capability; using τ floor as if it predicts action is trap. Clock: horizon ∆t, real-time 2.4ms, 25-30 fps; monotonicity beyond 4s/20m. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" formal proof. Use definitions:
Let F_D be training distribution, C_D physical constraints. Model estimates q_{0.01}(Δt|g). For deployment constraint C' stricter than C (e.g., wet pitch reduces a_max or v_max, injury reduces v_max), true arrival time τ_{C'}(k,x) ≥ τ_C(k,x) ≥? Actually if constraints stricter, minimum time increases: τ_{C'} ≥ τ_C. If model doesn't condition on C', τ_pred ≈ τ_C. Then τ_pred ≤ τ_C' (optimistic). So reachable set predicted R_pred(h) = {τ_pred≤h} contains true R_{C'}(h) = {τ_C'≤h}; false-positive area. Veto if any x has τ_pred(x)<τ_SUVAT^{C'}(x). This is a formal veto. Weather not in features [PAGE 7 Table1] so no conditioning. Biomechanical: per-player vmax feature [PAGE 11] but not fatigue/injury; profile is 99th percentile over training matches [PAGE 8]. Need cite. "We augment the input with each player’s maximum speed, estimated as the 99th percentile of that player’s cleaned, state-valid speeds pooled over the 45 training matches only." [PAGE 8] Good.
Proof: if C' stricter, τ_SUVAT^{C'} > τ_SUVAT; no inference-time filter; model may output below. Veto. Good.

Need "RLVR_COUNTERFACTUAL_VETOES" Maybe describe RLVR = reinforcement learning with verifiable rewards? We can say "Under an RLVR-style verifier, a claim survives only if a reproducible counterfactual test with a pre-registered metric fails to falsify it." That's safe. Three scenarios with predictions. Need include exact numbers. Good.

Need maybe include "no betting lines" not mention. Good.

Let's write with XML. Need ensure total word count >1000. I'll write ~2200 words. Need no markdown? XML sections okay. Use LaTeX. Need maybe avoid "PAGE" inside quotes? Use [PAGE N] after quotes.

Need be precise: In THINK_TRACE, include "multi-hop derivation" chain. Let's write.

Potential issue: The user said "DRIVE SOURCE: ... PAGES: 17 SOURCE TEXT:" They want analysis. We provide.

Let's produce final.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s central move is a change of estimand, not merely a change of model class. The naive target is “where will this player go?” or “what is the typical arrival time to x?” The paper instead asks for the conditional lower envelope: “how quickly could this player plausibly reach x from state k=(p,v,a)?” This is why the first equation is a quantile statement rather than a mean regression: \(\tau(g)=Q_{0.01}(\Delta t\mid g(k,x))\), with \(g\) a heading-normalized geometry [PAGE 6]. The derivation chain is: raw tracking → smoothed position/velocity/acceleration → heading-frame target representation → self-supervised future-position labels → SUVAT plausibility screen → pinball regression at \(\tau=0.01\) → reachable-area duality → matched-coverage area evaluation → cross-sport transfer audit. Each link changes the interpretation. The smoothing and finite-difference step [PAGE 6] creates the kinematic state; the heading transform removes absolute pitch position and orientation, leaving six normalized features: \(d/120\), \(\cos\theta\), \(\sin\theta\), \(v/12\), \(a_x/10\), \(a_y/10\) [PAGE 7, Table 1]. The label for a state is the player’s own smoothed position \(\Delta t\) seconds later, so the model is trained self-supervised on observed locomotion rather than on hand-labeled “intent” [PAGE 7]. The quantile loss then selects the fast tail of the conditional label distribution, and the reachable-area identity \(R(\Delta t)=\{x:\tau(x)\le\Delta t\}\) lets a time predictor be scored as an area predictor [PAGE 6].

The gray-zone audit begins with the word “minimum.” The model does not observe a counterfactual minimum; it estimates a 1st-percentile envelope from finite samples. The paper explicitly distinguishes “the conditional lower envelope of arrival times” from “a per-observation minimum” [PAGE 6]. That is defensible only if many observations share similar kinematic geometry and if the fast tail is not corrupted by tracking artifacts. The authors address the artifact problem with a SUVAT plausibility filter: samples with observed \(\Delta t<\Delta t_{\mathrm{SUVAT}}\) are discarded, using caps \(8\,\mathrm{m/s^2}\) and \(9\,\mathrm{m/s}\) [PAGE 7–8]. This is a noise screen, not a physical prior, because retraining with the filter off leaves the fitted floor unchanged but loosens matched-coverage areas by up to 31% and raises monotonicity violations from 1.4% to 23.4% of rays [PAGE 8]. That is a crucial audit point: the filter improves regularity, not the estimated floor. A second gray zone is dimensional: the pinball loss has units of seconds, while the area term is a dimensionless soft count; the total objective is \(L=L_\tau+\lambda L_{\mathrm{area}}\) with \(\lambda=0.01\), but the paper does not state units or normalization for \(\lambda\) [PAGE 9]. This is a formal looseness, though not necessarily a practical failure. A third gray zone is geometric: the model has no explicit monotonicity constraint, so the sublevel-set interpretation is audited empirically. The paper reports 100% connected sublevel sets and 100% star-shaped rays in the audited cases, but radial monotonicity is violated on 1.4% of rays, all at \(\tau>4\) s and beyond 20 m, with a median dip of 16 ms [PAGE 13]. That is outside the main reachable-area operating range, but it is a real breakdown regime. A fourth gray zone is distribution shift: cross-sport transfer is asymmetric, and transferred checkpoints can beat destination physics on point error while producing looser reachable areas, which the authors attribute to “a mismatch in label regime” rather than representation failure [PAGE 12–13; PAGE 14]. Finally, the model deliberately discards intent, fatigue, tactical constraints, and obstacles; the paper argues these “all act in the conservative direction” [PAGE 6]. That is plausible for feasibility, but it means the output is a capability bound, not a behavioral forecast.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The primary operator is conditional lower-quantile regression:
\[
\tau(g)=\mathcal Q_{0.01}\!\left(\Delta t \mid g(k,x)\right),\qquad k=(p,v,a),
\]
where \(\tau\) and \(\Delta t\) are in seconds, \(p\) is position in metres, \(v\) is velocity in \(\mathrm{m\,s^{-1}}\), and \(a\) is acceleration in \(\mathrm{m\,s^{-2}}\) [PAGE 6]. The paper states: “We predict the minimum time that a football player needs to reach an arbitrary location on the pitch, given their current kinematic state \(k = (p, v, a)\)” [PAGE 6]. The target is the 1st percentile because “the target quantity is a feasibility bound (the player could be there in time)” [PAGE 2]. The geometry \(g\) is heading-normalized: \(d/120\), \(\cos\theta\), \(\sin\theta\), \(v/12\), \(a_x/10\), \(a_y/10\), with normalizers \(D_{\rm norm}=120\,\mathrm{m}\), \(V_{\rm norm}=12\,\mathrm{m\,s^{-1}}\), \(A_{\rm norm}=10\,\mathrm{m\,s^{-2}}\) [PAGE 7, Table 1]. The angle is encoded as \((\cos\theta,\sin\theta)\) to avoid a \(2\pi\) discontinuity [PAGE 7].

The duality operator is
\[
R(\Delta t)=\{x:\tau(x)\le \Delta t\},
\]
with \(R\) in \(\mathrm{m^2}\) and \(\Delta t\) in seconds [PAGE 6]. This identity is the bridge from arrival time to reachable area. Breakdown regimes: at \(x=p\), \(d=0\) and \(\theta\) is undefined; the origin node is excluded from the area grid [PAGE 9], and degenerate near-zero-distance samples are discarded [PAGE 7]. The sublevel-set interpretation also breaks if \(\tau\) is not radially monotone; the paper audits 1.4% ray violations at \(\tau>4\) s and beyond 20 m [PAGE 13].

The pinball objective is
\[
L_\tau(\hat y,y)=
\begin{cases}
\tau(y-\hat y), & y\ge \hat y,\\
(1-\tau)(\hat y-y), & y<\hat y,
\end{cases}
\qquad \tau=0.01,
\]
with \(y,\hat y\) in seconds and \(\tau\) dimensionless [PAGE 9]. The paper notes: “At \(\tau = 0.01\), over-prediction is penalized 99× more heavily than under-prediction, pushing the estimate toward the lower envelope so the model learns how quickly a player can arrive” [PAGE 9]. The breakdown risk is label contamination in the fast tail: “a single teleport artifact at a given geometry can drag the predicted floor below what is physically achievable” [PAGE 7]. The SUVAT screen discards samples with \(\Delta t_{\rm obs}<\Delta t_{\rm SUVAT}\), using \(a_{\max}=8\,\mathrm{m\,s^{-2}}\), \(v_{\max}=9\,\mathrm{m\,s^{-1}}\); it removes only 0.3% of samples [PAGE 7–8]. With the filter off, matched-coverage areas loosen by up to 31% and monotonicity violations rise from 1.4% to 23.4% of rays [PAGE 8].

The area-aware term is
\[
L_{\rm area}=\operatorname{mean}_{k,\;h\in\{3,5\}}
\frac{1}{|G|}\sum_{x\in G}
\sigma\!\left(\frac{h-\hat\tau_k(x)}{\beta}\right),
\qquad \beta=0.25\,\mathrm{s},\quad |G|=624,
\]
where \(G\) is a \(25\times25\) heading-frame grid at 4 m spacing spanning \(\pm48\) m, origin excluded [PAGE 9]. \(L_{\rm area}\) is dimensionless; \(\beta\) sets sigmoid sharpness; total loss is \(L=L_\tau+\lambda L_{\rm area}\), \(\lambda=0.01\) [PAGE 9]. The formal gray zone is that \(L_\tau\) has seconds units while \(L_{\rm area}\) is dimensionless; the paper does not define \(\lambda\)’s units or a normalization. The learned model is a \(6\to64\to64\to1\) MLP with ReLU hidden units and Softplus output; the profile variant appends a normalized per-player maximum speed, estimated as the 99th percentile of cleaned state-valid speeds over the 45 training matches only [PAGE 8]. Evaluation uses coverage
\[
C(\Delta t)=\frac{1}{N}\sum_i \mathbf 1[\tau_{\rm pred}(x_i)\le\Delta t]
\]
(dimensionless probability) and reachable area
\[
A(\Delta t)=\int_{\rm pitch}\mathbf 1[\tau_{\rm pred}(x)\le\Delta t]\,dx
\]
(in \(\mathrm{m^2}\)), compared at matched coverage because “the model that covers the same fraction of actually-reached points with the smallest area is the tighter one” [PAGE 10]. Table 2 reports the MLP at MAE \(2.596\pm0.005\) s, RMSE \(3.193\pm0.004\) s, pinball \(0.02800\pm0.00001\), and area \(31.6\,\mathrm{m^2}\) at 99% coverage, versus the best physics baseline’s MAE \(2.883\) s and area \(34.1\) or \(35.0\,\mathrm{m^2}\) depending on the model [PAGE 11]. Real-time inference evaluates 22 players over 7,140 pitch cells, i.e. 157,080 rows, in 2.4 ms on an RTX A5000, about 420 fps [PAGE 13].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage runs from closed-form dominant regions to fitted motion models to learned feasibility envelopes. The paper traces the oldest strand to Taki and Hasegawa, who “introduced a dominant-region idea using a constant-acceleration motion model,” and Fujimura and Sugihara, who “refined the locomotion law with a resistive-force model that caps speed smoothly” [PAGE 3]. Renkin et al. then “cataloged a family of motion models (constant speed, constant acceleration, capped acceleration, two-segment) and validated them against tracking by a reachable-area score” [PAGE 3]. Anzer and Bauer occupy the data-driven middle ground: “they estimate reachable regions directly from tracking data, as per-speed convex hulls of observed displacements, without committing to any closed-form equation of motion” [PAGE 3]. The quantile-regression ancestry is Koenker and Bassett’s regression quantiles [PAGE 15], and the tracking-smoothing ancestry is Savitzky–Golay filtering [PAGE 6, PAGE 16]. The paper’s retrocausal claim is that a learned lower envelope can replace the hand-set arrival-time layer that downstream pitch-control, pass-probability, off-ball-value, and pressing models inherit [PAGE 4–5].

The multi-week development traps are clear. First is the occupancy-versus-feasibility trap: kernel-density or Gaussian-influence models score a location because players are often there or often choose it, not because anyone could reach it in time; the paper says these outputs are “a density or a behavioral commitment likelihood, not a feasibility bound” [PAGE 2]. Second is the fixed-global-parameter trap: a closed-form motion model with a handful of constants cannot serve all horizons, and the paper notes that “the horizon-dependent parameters of [30] show a fixed functional form cannot serve all horizons” [PAGE 5]. Third is the tracking-artifact trap: because the \(\tau=0.01\) objective learns from the fastest realizations, teleport artifacts sit exactly in the tail that matters [PAGE 7]. Fourth is the coverage–area gaming trap: any model can reach coverage 1.0 by inflating its reachable set to the whole pitch, so the only meaningful comparison is at matched coverage [PAGE 10]. Fifth is the cross-sport label-regime trap: American-football pass plays are “short, explosive, straight-line sprints, with faster arrival times at matched distance and speed than continuous-possession football or basketball play,” so a transferred checkpoint can win on point error while losing on area [PAGE 12–13; PAGE 14]. These are not one-off bugs; they are multi-week experimental traps because each one can look like progress on a single metric.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive theory-of-mind issue is that the model answers a capability question, while downstream users often want an intention question. The paper is explicit: “The target is not where a player is expected to go but how fast they could plausibly get somewhere; that is, the lower envelope of observed locomotion” [PAGE 6]. A defender or attacker may recursively reason about what an opponent believes about reachability, but the model itself does not represent beliefs, preferences, or tactical commitment. “Intent, fatigue, tactical constraints and obstacles all act in the conservative direction” [PAGE 6], so the learned floor is a lower bound on plausible arrival time, not a prediction of the chosen action.

Crisis habit regression appears when distribution shift or noisy tracking pushes analysts back to the familiar closed-form dominant-region or Gaussian-kernel habit. That habit is interpretable but commits in advance to a fixed functional form; the paper argues that “a fixed closed-form motion model is therefore not necessary to produce a physically plausible, well-calibrated reachable-area estimate” [PAGE 14]. The counter-trap is to treat the feasibility envelope as an intent predictor: if a location is inside the 1st-percentile reachable set, that means “the player could be there,” not “the player will go there.” Using the area as a behavioral commitment likelihood recreates the exact occupancy-versus-feasibility confusion the paper criticizes [PAGE 2]. The clock trap is horizon semantics: \(\tau(x)\) is a time, \(R(\Delta t)\) is a horizon-dependent set, and the area comparison is performed at \(\Delta t\in\{1,2,3,4,5\}\) s and coverage levels 90/95/99% [PAGE 11, PAGE 13]. Real-time inference is fast—2.4 ms for 157,080 rows, about 420 fps versus 25–30 fps tracking [PAGE 13]—but the clock also exposes the model’s breakdown: radial monotonicity violations occur at \(\tau>4\) s and beyond 20 m [PAGE 13]. So the recursive discipline is: use the model as a fast capability oracle inside its audited horizon and distance range, not as a mind-reading clock.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A cross-layer veto is justified when an external physical, biomechanical, or environmental constraint makes the learned arrival time optimistic. Formally, let the training constraint set be \(C\), and let deployment constraint set be \(C'\) with stricter caps, e.g. lower effective \(v_{\max}\) or \(a_{\max}\). Then the true minimum arrival time satisfies \(\tau_{C'}(k,x)\ge \tau_C(k,x)\). If the model is not conditioned on \(C'\), its prediction \(\tau_{\rm pred}\approx\tau_C\) can satisfy \(\tau_{\rm pred}(x)<\tau_{C'}(x)\), so the predicted reachable set \(\{x:\tau_{\rm pred}(x)\le h\}\) contains the true reachable set and produces false-positive reachability. The veto test is therefore \(\tau_{\rm pred}(x)<\tau_{\rm SUVAT}^{C'}(x)\) for any queried \(x\), with \(C'\) supplied by the deployment layer.

Physical veto proof: the paper cleans tracks by excluding frames that violate “hard kinematic bounds on speed, acceleration or frame-to-frame velocity change” [PAGE 6], and it screens labels with SUVAT caps \(8\,\mathrm{m/s^2}\) and \(9\,\mathrm{m/s}\) [PAGE 7–8]. Those are training-time filters, not an inference-time certificate. If a query lies outside the training geometry or beyond the audited horizon, the model has no explicit constraint preventing a below-physical output. Biomechanical veto proof: the profile MLP appends a per-player maximum speed estimated as the 99th percentile over training matches [PAGE 8], and this improves MAE and pinball [PAGE 11], but it does not encode current fatigue, injury, or neuromuscular state. A player returning from injury or in late-match fatigue can have an effective \(v_{\max}\) below the training profile, which increases true arrival time and vetoes the learned floor. Weather veto proof: the six features of Table 1 contain no wind, precipitation, surface friction, or temperature variable [PAGE 7]; wet or icy ground, strong wind, or heat stress can reduce effective acceleration and top speed. The model’s normalizers \(V_{\rm norm}=12\,\mathrm{m/s}\), \(A_{\rm norm}=10\,\mathrm{m/s^2}\) are fixed normalization/clipping constants, not weather-conditioned physical caps [PAGE 7]. Therefore any weather layer that lowers \(a_{\max}\) or \(v_{\max}\) must override the learned surface, or the model will overstate reachable area and understate arrival time.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Under an RLVR-style verifier, a claim survives only if a reproducible counterfactual test with a pre-registered metric fails to falsify it. Three verifiable veto scenarios follow.

1. Teleport-artifact injection at the fast tail. Counterfactual: retrain the quantile MLP with the SUVAT plausibility filter disabled, then inject or retain synthetic position jumps that create observed \(\Delta t<\Delta t_{\rm SUVAT}\). Verifiable prediction: the fitted floor should remain similar, but matched-coverage reachable areas should loosen by up to 31%, and radial monotonicity violations should rise from 1.4% to 23.4% of rays [PAGE 8]. Veto criterion: if area inflation exceeds the pre-registered 12–17% band or monotonicity violations exceed 5%, reject the claim that the filtered model is a regular feasibility envelope.

2. Cross-sport area-transfer veto. Counterfactual: score the basketball-trained checkpoint on the NFL held-out split and compare its 99%-coverage area against the destination’s own fitted two-segment baseline. Verifiable prediction from Table 3: the basketball checkpoint has MAE \(1.284\) s versus the NFL two-segment \(1.608\) s, so it wins on point error, but its area is \(36.5\,\mathrm{m^2}\) versus \(20.0\,\mathrm{m^2}\), so it loses on area [PAGE 14]. Veto criterion: if a transferred checkpoint’s reachable area exceeds the destination physics baseline even when its MAE is lower, the claim “the transferred model is a tighter feasibility model” is falsified; the correct conclusion is label-regime mismatch, as the paper states [PAGE 12–13].

3. Real-time clock veto. Counterfactual: run the full 22-player, 7,140-cell pitch map, i.e. 157,080 rows, on the deployment hardware and measure latency against the 25–30 fps tracking clock. Verifiable prediction: on an RTX A5000 the pass takes 2.4 ms, about 420 fps [PAGE 13]. Veto criterion: if measured latency exceeds \(1/25\,\mathrm{s}=40\,\mathrm{ms}\) or throughput falls below 25 maps per second, the online claim is falsified. A hardware platform roughly 17× slower than the A5000 would cross the 40 ms boundary, so the prediction is directly testable by substitution.
</RLVR_COUNTERFACTUAL_VETOES>