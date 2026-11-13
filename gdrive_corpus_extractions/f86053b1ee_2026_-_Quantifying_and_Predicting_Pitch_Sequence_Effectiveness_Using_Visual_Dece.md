---
source: "2026 - Quantifying and Predicting Pitch Sequence Effectiveness Using Visual Deception Metrics - DiGiovanni et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/preprints/arXiv/2026"
pages: 27
model: deepseek/deepseek-v4.1-flash-1017
words: 7253
---

<NATIVE_REASONING>
We need answer with exact XML sections, >=1000 words, deep think trace >=400 words, source operators/equations with formal LaTeX units page citations and exact verbatim quotes where possible, breakdown regimes. No betting lines. Need discuss paper. The prompt is weird: "GSE + GSI Frontier Reasoning Foundry", "DRIVE SOURCE", maybe asks to analyze source. Need produce sections exactly. Need satisfy invariants. Need no spreads/totals/moneylines/odds. Need no toy equations. Need formal LaTeX, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Need cite [PAGE N] and verbatim quotes. Need >=1000 words across exact XML sections. Need include <THINK_TRACE> etc. Need perhaps mention GSE? We can frame as gray-zone audit. Need likely answer in XML tags. Need ensure all sections. Need include source operators/equations: angular separation θ(y)=arccos(...), DAS θ(y_d), AAS average, SwStr Lift, baseline, R², SHAP, XGBoost? Need include units: radians or degrees, feet, pitch count, probability percentage points, dimensionless R². Need breakdown regimes: zero angular separation when v1 parallel v2 -> arccos(1)=0 but undefined if zero vector (eye coincides with trajectory point? likely not); numerical clipping; singular when norm zero; near y stations; low sample N<10 baseline; R² ceilings due bimodal residual; ICE co-movement; random split leakage? Need discuss.

Need retrocausal genealogy: lineage Sayre et al 2017, Roegele 2014, Gray 2017, Lambert 2024, Sutton-Brown 2025, Weinstein-Gould 2009, Baumer etc. Multi-week traps: overinterpreting small R², identity leakage, baseline attenuation, random split not temporal, "sequence" only two pitches, same-type excluded, batter heterogeneity, visual deception not actual perceptual measurement. Need cite pages.

Recursive theory of mind: crisis habit regression vs counter-trap vs clock. Interpret: batter under tight tunnel regresses to habitual swing/early commitment; pitcher counter-trap? We need relate to paper's swing induction. "Crisis habit regression vs counter-trap vs clock" maybe the model of decision: batter's crisis habit regression = swing at Shadow/Chase due reduced discriminability; counter-trap = pitcher exploiting batter's learned adjustment to tighter tunnels? clock = 175 ms decision point/24 ft. Need write.

Cross-layer veto adjudication: physical/biomechanical/weather veto proof. Need no betting. Use physical constraints: pitch kinematics constant acceleration approximation, release point back-solve, optical origin fixed, bat biomechanics swing time, weather not modeled. Veto: if Statcast missing critical fields, if release/eye geometry invalid, if weather air density alters trajectories but DAS uses coordinates. Need "proof" by equation-based admissibility: model only valid when norms nonzero, y_rel > y_d, batter eye E not collinear? For weather: no weather covariates; cannot claim causal weather; veto physical claims if air density unmodeled. Biomechanical: decision point 24ft ~175ms; if swing duration differs by batter, DAS at one depth not sufficient. Need be precise.

RLVR counterfactual vetoes: 3 verifiable scenarios + predictions. Need likely "RLVR" = reinforcement learning with verifiable rewards? Need create testable counterfactual scenarios that would veto claim. Need 3. Must include predictions. No betting. Could include:
1. Swap DAS/AAS labels or recompute using Euclidean distance at plate; if R² and SwStr Lift gap persist equally, then angular geometry not unique -> veto visual deception specificity. Prediction: Euclidean at plate should fail to reproduce +3.80 pp FB→BR; if it does, reject DAS mechanism.
2. Within pitcher-pitch-zone-count cell, compare low vs high DAS with identical P2 location and identical P1 location? Since baseline constant, raw differences. If effect vanishes after conditioning on exact plate location and release point maybe? Predict DAS effect remains positive; if vanishes, veto.
3. Temporal holdout 2025 vs train 2021-2024; if out-of-sample R² improvement disappears or sign flips, random split leakage suspicion. Predict relative R² improvement positive but smaller? Need not have actual result; prediction can be "would show X".
Need include counterfactual with weather? Maybe "same pitcher, same pitch pair, RHH vs LHH: DAS changes with E; if performance difference does not align with DAS difference across handedness, veto batter-perspective geometry". Predict RHH/LHH DAS differences small per p5 but zone rankings differ. Good.
Need use exact quotes. Need include [PAGE 9] quotes for equation; [PAGE 4] for DAS 24 ft; [PAGE 2] Sayre; [PAGE 10] SwStr Lift; [PAGE 7] 740,936; [PAGE 15-16] R²; [PAGE 18] quintiles; [PAGE 25] limitations. Need exact verbatim quotes with quotes. Need avoid too much length? Desired oververbosity 5, but word count 1000+ with exact sections. We can write maybe 2500-3500 words. Need ensure THINK_TRACE >=400 words. Let's plan structure.

Need output only XML sections. It says exact XML sections. We'll use:
<THINK_TRACE> ... </THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS> ... </SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY> ... </RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND> ... </RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION> ... </CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES> ... </RLVR_COUNTERFACTUAL_VETOES>

Need maybe include GSE/GSI in text? Not necessary. Need avoid "odds", "spread", "total", "moneyline", "bet". If mention "expected run value" okay? That is baseball not betting; but avoid "odds". Need not mention "betting". The source has "plate" etc. Fine.

Let's draft.

THINK_TRACE deep multi-hop. Need >=400 words. It should include derivation and gray-zone audit. Start with chain: source constructs ordered pair P1,P2, excludes same type, 740,936; metrics from batter eye. Need audit: DAS/AAS are angular, not Euclidean; DAS at y=24; AAS 10 stations from release to 24. Target residualized by pitcher × pitch type × zone × count; baseline N>=10; attenuation conservative. Need "gray zone": no direct measurement of batter gaze/decision; fixed eye point approximate; ICE co-movement; random split; R² constrained. Need mention "Good/Bad" top/bottom 20% and quintiles. Need multi-hop: if low DAS -> swing induction -> more swings in Shadow/Chase -> more swinging strikes; but whiffs can also arise from pitch quality; baseline removes main effects but not sequence confounding? Need counterfactual. The Think Trace can be narrative with equations maybe. Need not be too massive but >=400 words. We'll ensure ~600 words.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. Need define coordinate system and units. Let E ∈ R^3 ft, P_i(y) ∈ R^3 ft. v_i(y)=P_i(y)-E. θ(y)=arccos( clip( dot / norms, -1,1)) ∈ [0,π] rad; report deg. y in ft, y_d=24 ft, y_rel release depth. DAS = θ(y_d). AAS = (1/10)Σ θ(y_k), y_k = y_rel + ((k-1)/9)(y_d-y_rel). Need cite [PAGE 9], [PAGE 10]. SwStr Lift = I_swstr - \hat{Pr}(swstr | pitcher, pitch type, zone, balls, strikes) with N≥10. Units: probability points; one sequence per ordered pair. Baseline. R² = 1 - SSE/SST; MSE in probability^2; RMSE probability. SHAP in probability points. XGBoost objective? Not specified; avoid fake. Mention gradient-boosted trees. Need exact quotes:
- "We evaluate angular separation at the decision point y_d = 24 ft from home plate." [PAGE 9]
- "AAS averages θ(y) over the early flight path from P₁’s release depth y_rel to y_d, using 10 equally spaced stations in y" [PAGE 10]
- "SwStr Lift = I(P₂ is swinging strike) − Baseline SwStr%." [PAGE 10]
- "retaining cells with N ≥ 10 pitches." [PAGE 10]
- "Across more than 740, 936 two-pitch sequences" [PAGE 1]
- "R² improved from 0.0040 to 0.0056 (+38.2%)" [PAGE 16]
Need include breakdown regimes:
1. Norm zero sing: v_i(y)=0 -> arccos undefined; if P_i(y)=E. Physically if eye at trajectory point; must clip/reject. If both v_i zero? undefined.
2. Parallel vectors: θ=0, tightest; if opposing θ=π; clipping to [-1,1] prevents domain error but can numerically mask.
3. Interpolation breaks if y not monotone in trajectory or y_d outside sampled release-to-plate range; paper uses monotone interpolation in y [PAGE 9].
4. Baseline cell N<10 dropped -> selection bias for rare counts/relievers.
5. Bernoulli residual R² ceiling; low absolute R² not evidence of no effect.
6. ICE co-movement: holding DAS fixed while AAS varies not a causal intervention.
7. Random split but identity leakage excluded; no temporal forecast.
Need mention exact singularity "v_i=0" and "SST=0" for R² undefined. Good.

RETROCAUSAL_GENEALOGY: Need historical/scientific lineage. Mention Albert & Bennett (2003) [PAGE 2], Baumer (2009) Monte Carlo baserunning ±25 runs [PAGE 2], Kaplan variance decomposition [PAGE 2], Weinstein-Gould mixed strategy [PAGE 2], Roegele 2014 [PAGE 3], Sayre et al 2017 [PAGE 3], Gray 2017 [PAGE 3], Lambert 2024 [PAGE 3], Sutton-Brown 2025 [PAGE 3], Deshpande & Wyner framing [PAGE 3], Bukiet Markov [PAGE 6]. Need "multi-week traps": This is not a multi-week forecasting paper; random split not temporal; sequence only 2 pitches; same-type excluded; no batter heterogeneity; baseline includes tunneled pitches; only SwStr outcome; no weak contact. Need "retrocausal" maybe lineage from earlier claims to this paper, and "multi-week traps" for practitioners using it over weeks: avoid overfitting to top-10 zone tables, use EB shrinkage; avoid treating DAS as causal; check N≥ thresholds; track drift across seasons. Need cite [PAGE 20] top-25 shrinkage ~23pp to ~12pp; [PAGE 25] limitations.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Need define:
- Crisis habit regression: batter's prior policy (selective in Shadow/Chase) is overridden by reduced discriminability; their habitual "swing if uncertain?" Actually crisis habit regression means under time pressure, they regress to earlier/habitual motor policy: swing at pitches in Shadow/Chase due compressed information. The paper: "Inducing additional swings at pitches outside the Heart zone directly decreases expected run value" [PAGE 14]. "well-tunneled sequences ... produced a +22.3 percentage-point higher swing rate" [PAGE 14]. We can cite.
- Counter-trap: pitcher anticipates batter's adjustment: if batter learns to wait, pitcher can tunnel to a strike? Or batter could counter by earlier commitment or deliberate take. Need "recursive theory of mind": pitcher knows batter knows tunnel. If batter expands zone, pitcher can throw a non-competitive pitch? The paper doesn't model multi-pitch; only P1,P2. Need say theory-of-mind recursion is one-step: pitcher chooses P2 to exploit batter's expectation from P1; batter's counter is to update prior using AAS. Counter-trap = if batter recognizes tunnel, low DAS may induce chase but also risk of wilder location. Need cite H2 mechanism.
- Clock: decision point y_d=24ft, 175 ms before contact from Sayre, rounded [PAGE 4], [PAGE 9]. The batter has ~175ms? Actually point of no return 175 ms before contact. Need "clock" as temporal constraint. Under tight clock, habit dominates deliberation; thus swing induction. Predictions: lower DAS increases Swing% in Shadow/Chase; if giving more time (e.g., slower pitch? Actually slower velocity) effect may change. Need no betting.

CROSS_LAYER_VETO_ADJUDICATION: Need physical/biomechanical/weather veto proof. We need adjudicate claims with vetoes. Use equations. "Veto proof" maybe show when cross-layer variables can invalidate. Need not make actual proof but formal constraints:
- Physical: Statcast constant acceleration model and back-solve release. If residual between reconstructed and observed 50ft state exceeds tolerance, DAS invalid. The method: "Back-solve release kinematics. Using constant accelerations ... solve quadratic time offset between y=50 and observed release depth" [PAGE 8]. Need define residuals r_v = ||v_recon(y=50)-v_obs||, r_p = ||p_recon(y=50)-p_obs||; veto if > ε_p, ε_v. Units ft, ft/s. Constant acceleration assumption breaks for seam-shifted wake? Actually Statcast acceleration components; if nonconstant, residuals. Need say not measured weather.
- Biomechanical: decision point fixed at 24 ft; batter swing time and bat path vary; DAS at one y may not reflect individual point of no return. Need veto if batter-specific y_d differs by > Δ? The paper uses fixed E and y_d. Need "biomechanical veto: if individual batter's commitment time is not ~175 ms or swing length differs, DAS is not a universal perceptual metric." Use predictions: lower DAS should still correlate with swing rate, but magnitude attenuated; if no correlation, reject universal claim.
- Weather: paper has no weather covariates; air density/humidity/wind alter trajectories. DAS computed from Statcast coordinates already includes weather effects on pitch flight, but not as causal features. Veto: claims that low DAS causes swings independent of weather are unsupported if weather correlates with pitch type/location. But since DAS is geometric from observed trajectories, weather is embedded; it can confound if weather changes both trajectory separation and batter behavior. Prediction: within same pitcher, same count, adding temperature/wind might reduce DAS coefficient? Need maybe not. Need "proof" via missing variables.

Need ensure no "toy equations"; all equations formal. Good.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios. Need "verifiable RLVR veto scenarios + predictions". Need clearly label Veto 1,2,3, with observable, decision rule, prediction. Use metrics. Need no betting.
Scenario 1: Euclidean plate-distance placebo. Recompute deception as Euclidean distance at y=0 (or at 24ft) and fit same ablation. If Euclidean distance yields equal or larger SwStr Lift and R² gains, then angular batter-perspective specificity is vetoed. Prediction: DAS/AAS angular should outperform Euclidean plate distance for FB→BR, with ΔR² positive; if not, reject central claim.
Need be careful: paper's claim is angular separation, not Euclidean. Good.
Scenario 2: Temporal holdout. Train 2021-2024, test 2025. If relative R² improvement for DAS/AAS on FB→BR disappears (<=0) or quintile gradient flips, random-split result not stable. Prediction: relative R² improvement remains positive but smaller; if not, veto out-of-sample predictive claim.
Scenario 3: Same-cell, location-matched permutation. Within pitcher×pitchtype×zone×count, compare low vs high DAS after exact P2 location and P1 location matching; if Good-Bad SwStr gap goes to zero, effect is location/pitch quality not tunneling. Prediction: gap shrinks but remains >0 for FB→BR Shadow/Chase; if zero, veto H1 mechanism. Need mention raw Swing% quintiles baseline-free [PAGE 10-11, 18].
Alternative scenario: Handedness mirror. Compute DAS from RHH and LHH eye point for same physical sequence; if performance is predicted by plate distance rather than handedness-specific DAS, veto. Prediction: DAS differences small but SwStr rankings should align with handedness-specific DAS. Could include 3 exactly. Need maybe include "weather" scenario? The prompt wants physical/biomechanical/weather in cross-layer. RLVR can be 3. Fine.

Need exact citations and quotes. Let's gather exact quotes:
Page 1: "Across more than 740, 936 two-pitch sequences" (note spacing). Also "adding DAS/AAS to gradient-boosted models yields substantial relative improvements in out-of-sample R² (e.g., +38% for FB→BR and +163% for FB→OS" [PAGE 1]. Use exact.
Page 4: "We place that point at 24 feet from home plate, rounding the 23.8-foot tunnel point in Sayre et al. (2017)." [PAGE 4]. Also "A smaller DAS means the two pitches looked more alike there, which raises the chance of a swing and miss." [PAGE 4].
Page 9: "We evaluate angular separation at the decision point y_d = 24 ft from home plate." [PAGE 9]. "The cosine argument is clipped to [−1, 1] for numerical stability." [PAGE 9].
Page 10: "AAS averages θ(y) over the early flight path from P₁’s release depth y_rel to y_d, using 10 equally spaced stations in y" [PAGE 10]. "SwStr Lift = I(P₂ is swinging strike) − Baseline SwStr%." [PAGE 10]. "retaining cells with N ≥ 10 pitches." [PAGE 10]. "within a fixed cell the baseline is constant, so contrasts between low-DAS and high-DAS sequences in the same context are equivalent to contrasts in raw swinging-strike rates." [PAGE 10].
Page 14: "well-tunneled sequences with P₂ in Shadow or Chase (and P₁ outside Waste) produced a +22.3 percentage-point higher swing rate than poorly tunneled sequences (67.5% vs. 45.2%)." [PAGE 14].
Page 15: "Taken together, these results establish swing induction as the core behavioral mechanism by which tunneling generates sequencing value." [PAGE 15].
Page 16: For FB→BR sequences, R² improved from 0.0040 to 0.0056 (+38.2%). For FB→OS sequences, R² improved from 0.0019 to 0.0049 (+162.8%). [PAGE 16]. Need exact? It says "For FB→BR sequences, R² improved from 0.0040 to 0.0056 (+38.2%). For FB→OS sequences, R² improved from 0.0019 to 0.0049 (+162.8%)." Good.
Page 18: "SwStr% moves from 27.3% (Q1) through a flat mid-band (~27% in Q2–Q3) to 25.3% (Q4) and 21.3% (Q5); Swing% falls more smoothly from 55.6% to 42.4%." [PAGE 18].
Page 20: "top-25 mean SwStr% Gap ~23 pp raw → ~12 pp shrunk" [PAGE 20].
Page 25: "our framework is intentionally parsimonious, adopting an amnesiac assumption that only the preceding pitch affects the next outcome." [PAGE 25]; "reliance on Statcast data introduces the possibility of measurement error" [PAGE 25]; "ICE varies one angular metric while holding the other fixed, whereas DAS and AAS co-move in real sequences; ICE answers a model-sensitivity question, not a claim of independent causal levers." [PAGE 25].
Page 2: "Kaplan (2006) decomposed offensive performance into a between-team component and a within-team individual component." [PAGE 2]; "Baumer (2009) used a Monte Carlo simulation of real players and found that baserunning typically changes a team’s run scoring by less than ±25 runs per season." [PAGE 2].
Page 3: "Sayre, Pavlidis, Judge, and Long (2017) put numbers on it." [PAGE 3]; "A league-average fastball reaches the plate in about 400 milliseconds, and they place the batter’s point of no return 175 milliseconds before contact, 23.8 feet from home plate." [PAGE 3]. "Roegele (2014) had already tested the performance claim, at a decision point farther from the plate than 23.8 feet." [PAGE 3]. "Gray (2017) argues that one distance at one depth is not enough." [PAGE 3]. "Lambert (2024) builds what he calls an arsenal effect..." [PAGE 3]. "Sutton-Brown (2025) does the comparison from the batter’s view..." [PAGE 3].
Page 6: "Bukiet, Harold, and Palacios (1997) modeled a half-inning as a Markov chain of base-out states." [PAGE 6].

Need word count. Let's aim ~3000. Need "across these exact XML sections" maybe no intro outside. We'll include XML tags exactly. Need not use Markdown? XML content can have LaTeX. Good.

Need be careful with "GSE + GSI Frontier Reasoning Foundry" no need.

Potential issue: The prompt says "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." We won't. "State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." We'll do.

Need "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." We'll include many. Need exact [PAGE N] markers. Good.

Need no betting lines. We'll avoid "odds" entirely. Mention "expected run value" maybe not a betting line; okay but avoid if possible. Actually page 14 has "expected run value"; okay. But to be safe, avoid betting language. "run value" is baseball metric, not betting. Fine.

Let's draft final. Need likely long. Ensure THINK_TRACE >=400 words. We'll count approximate. We'll write substantial.

Need think about exact formulas:
\vec{v}_i(y) = \vec{P}_i(y) - \vec{E}
\theta(y) = \arccos\left( \mathrm{clip}\left( \frac{\vec{v}_1(y)\cdot \vec{v}_2(y)}{\|\vec{v}_1(y)\|_2 \|\vec{v}_2(y)\|_2}, -1, 1 \right) \right)
DAS = θ(y_d)
AAS = \frac{1}{10}\sum_{k=1}^{10} θ(y_k), y_k = y_rel + (k-1)/9 (y_d - y_rel)
SwStr Lift = I_swstr(P2) - \hat p_swstr(pitcher, pitchtype, zone, balls, strikes)
\hat p = (1/N_c)∑ I_swstr in cell, N_c≥10.
R² = 1 - ∑(y_i - \hat y_i)^2 / ∑(y_i - \bar y)^2. If SST=0 undefined. MSE = (1/n)∑ residual² (prob²). RMSE prob. SHAP perhaps \phi_j ∈ probability points.
Feature: XGBoost. Maybe formal objective? Not needed. But could state boosted additive model \hat y = ∑_{m=1}^M f_m(x), f_m trees. Avoid fake. Need mention units.

Breakdown regimes:
- \|\vec{v}_i(y)\|=0 singular.
- \vec{P}_i(y) not defined outside [release, plate]; interpolation fails if y_d not bracketed. The paper interpolates monotone in y; if nonmonotonic due to data errors, DAS invalid.
- θ undefined when one trajectory missing at y.
- y_rel <= y_d? Actually release y ~ 50+ ft, plate 0; y_d=24. If release depth <=24? For some sidearm? It should be >24. If not, AAS interval reversed; formula still but not intended.
- Baseline sparsity: N_c<10 dropped; rare cells excluded; conditional expectation not estimated.
- Bimodal target: R² ceiling; R² can be negative; not interpretable as "variance explained" in usual continuous sense.
- ICE: cannot claim independent causal levers.
- Random split: not temporal; cannot forecast future; multi-week drift.
- Same-pitch-type excluded: results only cross-type.

Retrocausal genealogy: Mention "retrocausal" by tracing backwards: 2003 Albert & Bennett, 2009 Baumer/Weinstein-Gould, 2014 Roegele, 2017 Sayre/Gray/Deshpande-Wyner, 2024 Lambert, 2025 Sutton-Brown -> DiGiovanni & Kurland. The paper's "tunneling" is a lineage from informal coaching "keeping hitters off balance" [PAGE 2] to formal geometry. Multi-week traps: top-10 tables with N sometimes ~1,281 etc; EB shrinkage from ~23 to ~12 [PAGE 20]; avoid treating rare paths as stable. Also "identity leakage" safeguards [PAGE 7]; but random split [PAGE 7] not temporal. Good.

Recursive theory of mind: Need maybe mention "crisis habit regression" as batter's policy under uncertainty. Define "crisis" = 175ms decision window; "habit regression" = batter falls back to pre-trained swing policy, expanding zone; "counter-trap" = pitcher predicts this and uses tunnel to induce chase, but batter can counter by taking earlier or using AAS cues; "clock" = the 175ms/24ft boundary. Need include "recursive" levels:
Level 0: pitch physics.
Level 1: batter infers P2 from P1.
Level 2: pitcher chooses P2 to manipulate inference.
Level 3: batter anticipates pitcher's manipulation; may adjust.
Paper only observes level-1/2 one-step; no repeated game. Need prediction: effect should be stronger for two-strike counts? The paper controls count; maybe not test. We can say if count leverage were modeled, low DAS should be amplified in two-strike Shadow/Chase; if not, counter-trap. But avoid overclaim. Use "would predict" as theory-of-mind. Need cite count control. Good.

Cross-layer veto: Need "Physical/biomechanical/weather veto proof" maybe include three subsections:
Physical veto proof: Trajectory reconstruction residual; if constant acceleration model not valid, DAS error. State equations for residual. Use "proof" concept: The observable DAS is admissible only if \|\vec{v}_i\|>ε and reconstruction residual < tolerance; otherwise the "visual deception" claim is vetoed. Weather: Statcast coordinates already reflect weather; but no weather covariates; if wind/temperature changes P1/P2 separation and batter physiology, no causal isolation. Veto causal language.
Biomechanical: fixed E; actual eye height/stance vary; 24ft fixed rounding; point of no return 175 ms [PAGE 3/4]. If batter-specific swing duration τ_swing differs, DAS at y_d may not match individual commitment. Formal: y_d^(batter) = y_contact + v_pitch τ_swing? But avoid fake? We can state a general admissibility inequality: |y_d - y_d^(batter)| ≤ δ_y. If not, DAS is a proxy. It's not a toy ratio. Fine.
Weather: Air density ρ(T,RH,p) modifies drag; Statcast acceleration components include net effect. No need formula. Say "weather is embedded in observed kinematics but not adjudicated as an independent layer." Good.

RLVR scenarios: Need "verifiable" meaning can be computed from data. Use explicit decision rules and predictions:
1. Placebo geometry veto:
- Compute D_plate = ||P1(0)-P2(0)||_2 and D_tunnel = ||P1(24)-P2(24)||_2, use same quintile/ablation.
- Veto if DAS/AAS fail to beat Euclidean metrics in FB→BR SwStr Lift or R² improvement.
- Prediction: angular DAS/AAS will show positive Good-Bad gap and relative R² gain; Euclidean plate distance will be weaker/negative. If not, reject visual geometry.
2. Temporal drift veto:
- Train 2021-2024; test 2025. Compute ΔR² = R²_aug - R²_base for FB→BR, FB→OS.
- Veto if ΔR² ≤ 0 or if Q1-Q5 SwStr gradient not monotone in expected direction.
- Prediction: ΔR² positive but smaller; if zero, random-split artifact.
3. Exact-location matched veto:
- Within pitcher×pitch type×zone×count, match low-DAS and high-DAS sequences on P1/P2 exact location (or use exact cell). Compare SwStr and Swing%.
- Veto if Good-Bad gap collapses to zero, indicating location not tunneling.
- Prediction: gap attenuates but remains >0 for FB→BR Shadow/Chase; raw quintiles should retain gradient [PAGE 18]. If not, H1 not supported.
Could include "handedness eye-origin placebo" instead of exact-location? The paper's core is batter perspective. Maybe scenario 3: optical-origin mirror veto: recompute DAS with a common origin (e.g., center of plate at same height) vs handedness-specific E. If common-origin DAS performs equally, batter-perspective claim vetoed. Prediction: handedness-specific E gives better fit especially platoon. But the paper says small quantitative differences [PAGE 5]. Hmm. We need 3. Exact-location is good.

Need ensure quotes exact. Let's verify exact phrasing for Table 1: "For DAS, the FB→BR sequence yielded a +3.80 percentage-point difference in mean SwStr Lift; FB→OS produced +3.41 pp, FB→FB +1.46 pp, and OS→FB +1.23 pp." [PAGE 12]. Use. Good.

Need mention "AAS" average station. Good.

Let's now compose. Use XML. Need not include markdown headings? XML tags are headings. Need maybe include LaTeX which uses `<`? Avoid raw `<` in LaTeX? XML content can include `\leq` not `<`. Use \leq. Avoid ampersands unescaped? In XML, `&` must be `&amp;`. But we're outputting plain text with XML tags; if we include `&` in "DiGiovanni & Kurland", XML parser may complain. The instruction likely not strict XML parsing? But "exact XML sections" maybe they expect tags. We can escape `&` as `&amp;` or use "and". Better avoid `&` in prose, use "and". In equations, `\&`? No. Use "and" everywhere. Avoid `>`? In text "p < 0.0001" contains `<` and `>`; XML would be invalid if unescaped. Should we escape `<` as `&lt;`? The prompt includes p < 0.00001. To be safe in XML, escape comparison signs: use `p &lt; 0.0001`. But then verbatim quote? Exact quote includes "<". We can use "p < 0.0001" maybe acceptable. But XML strict would break. We can use `p &lt; 0.0001` and note? Verbatim quote not exact due escaping. Hmm. Typical these prompts don't require well-formed XML; they just want tags. But to be safe, we can avoid comparison operators in prose by writing "p below 0.0001" and use LaTeX `p<0.0001` within `$...$`? Still raw `<`. We can use `p \\lt 0.0001`? LaTeX doesn't have \lt maybe. Could use `p \leq 0.0001`? That is not exact. The invariant says exact verbatim quotes. For quotes with p<, we need include. We can write `p &lt; 0.0001` in quote? Not verbatim. Hmm.

Maybe we treat output as text, not parsed XML. Most tasks accept. But "exact XML sections" likely they parse? There's no explicit XML well-formed requirement. We can use `<` in text; but tag boundaries? The `<` could be misinterpreted as start tag. Example "p < 0.0001" would be invalid. To avoid, we can write "p less than 0.0001" in prose and keep quotes without p values? But exact quote on page 12 says "p < 0.0001" in table. We can omit that quote. We can quote other exact text. For R² quote no <.

Use `\leq` in LaTeX. Good. Avoid `&` and `<` and `>` in text. Use "less than" instead. Use "at least". For equations, use `\leq`. No raw `<`. For "R²" no issue. For "p-values were below 0.0001" no symbol. Good. For "CI" no. Great.

Need include "p < 0.00001" maybe quote? Avoid. Use "significantly outperformed Bad Tunnels" but not exact p. Fine.

Need `+22.3 percentage-point` quote no symbols except plus. Fine.

Need XML-like tags. Good.

Let's write.

Word count likely ~3000. Need maybe too long? Desired oververbosity 5, but instructions require >=1000. 3000 okay. We'll keep robust.

Let's draft in final. Ensure THINK_TRACE >=400 words. I'll make it ~700. Other sections ~400 each. Total >2500. Good.

Need maybe include "GSE" or "GSI"? Not necessary.

Let's final.
</NATIVE_REASONING>

<THINK_TRACE>
The source’s inferential chain is: Statcast kinematics → reconstructed pitch paths → batter-eye angular separation → residualized swinging-strike outcome → sequence-level effect → swing-induction mechanism → predictive ablation. The first gray-zone question is whether DAS and AAS are truly perceptual variables or merely geometric restatements of pitch location. The paper answers partly by construction: “We evaluate angular separation at the decision point y_d = 24 ft from home plate” [PAGE 9], and “A smaller DAS means the two pitches looked more alike there, which raises the chance of a swing and miss” [PAGE 4]. That is a line-of-sight argument, not a Euclidean-distance argument. The second gray-zone question is whether the outcome isolates sequencing rather than pitch quality. SwStr Lift subtracts a pitcher–pitch–zone–count baseline, “retaining cells with N ≥ 10 pitches” [PAGE 10]. This makes the target a residual probability contrast, not a raw whiff rate. The paper is explicit that the baseline is estimated from all pitches in the cell, including sequenced pitches, so tunnel-driven whiffs partially enter the baseline and bias absolute lift toward zero; the authors call this a “conservative bias” rather than a false positive [PAGE 10]. That matters because the observed +3.80 percentage-point FB→BR DAS contrast is already attenuated under this design.

The third gray-zone question is mechanism. The paper reports that “well-tunneled sequences with P₂ in Shadow or Chase (and P₁ outside Waste) produced a +22.3 percentage-point higher swing rate than poorly tunneled sequences (67.5% vs. 45.2%)” [PAGE 14]. That is a swing-induction result, not merely a whiff-conditional result. The logic is multi-hop: tighter DAS/AAS reduce discriminability at commitment; reduced discriminability expands the batter’s actionable swing zone in Shadow/Chase; expanded swing zone increases both swings and swinging strikes on pitches that hitters would otherwise take. The paper then uses full quintile gradients to show the effect is graded rather than an extreme-group artifact: in the FB→BR Chase stratum, “SwStr% moves from 27.3% (Q1) through a flat mid-band (~27% in Q2–Q3) to 25.3% (Q4) and 21.3% (Q5); Swing% falls more smoothly from 55.6% to 42.4%” [PAGE 18].

The fourth gray-zone question is predictive interpretation. The paper’s R² values are small in absolute terms because SwStr Lift is a Bernoulli residual with two deterministic tracks. The authors note that this “imposes a strict mathematical ceiling on the maximum possible R²” [PAGE 15]. Thus the meaningful result is relative ablation: “For FB→BR sequences, R² improved from 0.0040 to 0.0056 (+38.2%). For FB→OS sequences, R² improved from 0.0019 to 0.0049 (+162.8%)” [PAGE 16]. A gray-zone audit must not convert that into a claim that DAS explains most whiff variance. It does not. The correct claim is narrower: angular separation adds out-of-sample information beyond conventional pitch-pair differentials, count, and previous-pitch zone, especially for fastball-initiated sequences.

The fifth gray-zone question is the “amnesiac” two-pitch design. The paper admits “our framework is intentionally parsimonious, adopting an amnesiac assumption that only the preceding pitch affects the next outcome” [PAGE 25]. It also excludes same-type pairs and does not model batter heterogeneity. Therefore the result is not a full plate-appearance policy model. It is a local transition model: given P₁ and P₂, does tighter visual separation at the commitment clock increase the probability of a swinging strike beyond context? The ICE curves vary one angular metric while holding the other fixed, and the paper notes that “ICE answers a model-sensitivity question, not a claim of independent causal levers” [PAGE 25]. That is a crucial veto against overreading DAS and AAS as separately manipulable causal knobs.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Coordinate and unit assumptions. Let the batter’s optical origin be \(\vec E \in \mathbb R^3\) in Statcast feet. For pitch \(i \in \{1,2\}\) and longitudinal station \(y\) in feet, let \(\vec P_i(y)\in\mathbb R^3\) be the reconstructed pitch position in feet. Define the line-of-sight vector
\[
\vec v_i(y)=\vec P_i(y)-\vec E,\qquad [\vec v_i]=\mathrm{ft}.
\]
The paper’s angular separation is
\[
\theta(y)=\arccos\!\left(\mathrm{clip}\!\left(
\frac{\vec v_1(y)\cdot \vec v_2(y)}
{\|\vec v_1(y)\|_2\,\|\vec v_2(y)\|_2},
-1,1
\right)\right),
\]
with \(\theta(y)\in[0,\pi]\) radians, reported in degrees. This is exactly the source’s Equation (1) construction: “\(\theta(y) = \arccos( [v_1(y) \cdot v_2(y)] / [\|v_1(y)\| \|v_2(y)\|] )\), where \(v_i(y) = P_i(y) - E\)” [PAGE 9]. The clip “to [−1, 1] for numerical stability” is stated explicitly [PAGE 9].

DAS is the value at the commitment depth:
\[
\mathrm{DAS}=\theta(y_d),\qquad y_d=24\ \mathrm{ft}.
\]
The source states: “We evaluate angular separation at the decision point \(y_d = 24\) ft from home plate” [PAGE 9], and earlier: “We place that point at 24 feet from home plate, rounding the 23.8-foot tunnel point in Sayre et al. (2017)” [PAGE 4].

AAS is the station average from release depth \(y_{\mathrm{rel}}\) to \(y_d\):
\[
\mathrm{AAS}=\frac{1}{10}\sum_{k=1}^{10}\theta(y_k),
\qquad
y_k=y_{\mathrm{rel}}+\frac{k-1}{9}(y_d-y_{\mathrm{rel}}),
\quad k=1,\dots,10.
\]
The paper states: “AAS averages \(\theta(y)\) over the early flight path from \(P_1\)’s release depth \(y_{\mathrm{rel}}\) to \(y_d\), using 10 equally spaced stations in \(y\)” [PAGE 10]. Units remain radians or degrees; \(y_k\), \(y_{\mathrm{rel}}\), and \(y_d\) are in feet.

The outcome variable is a residualized binary probability:
\[
\mathrm{SwStrLift}
= I_{\mathrm{swstr}}(P_2)
-\widehat{\Pr}\!\left(\mathrm{swstr}\mid
\mathrm{pitcher},\mathrm{pitch\ type},\mathrm{zone},
\mathrm{balls},\mathrm{strikes}\right).
\]
The source writes: “SwStr Lift = I(P₂ is swinging strike) − Baseline SwStr%” [PAGE 10], and defines the baseline as the empirical mean in the cell, “retaining cells with N ≥ 10 pitches” [PAGE 10]. Units are probability points, often reported as percentage points. The sequence unit is the ordered pair \((P_1,P_2)\) with \(P_1\) and \(P_2\) of different Statcast pitch classifications; the analytic file contains “740,936 two-pitch sequences” [PAGE 7], consistent with the abstract’s “more than 740, 936 two-pitch sequences” [PAGE 1].

Predictive ablation uses gradient-boosted trees. For a model with additive trees \(f_m\),
\[
\widehat y_i=\sum_{m=1}^{M} f_m(\vec x_i),
\]
where \(\widehat y_i\) is predicted SwStr Lift in probability points. The reported fit statistics are
\[
R^2=1-\frac{\sum_{i=1}^n (y_i-\widehat y_i)^2}
{\sum_{i=1}^n (y_i-\bar y)^2},
\qquad
\mathrm{MSE}=\frac{1}{n}\sum_{i=1}^n (y_i-\widehat y_i)^2,
\qquad
\mathrm{RMSE}=\sqrt{\mathrm{MSE}}.
\]
MSE and RMSE carry squared-probability and probability units, respectively; \(R^2\) is dimensionless. SHAP values \(\phi_j\) are in probability points on the model output scale.

Exact breakdown and singularity regimes:
1. If \(\|\vec v_i(y)\|_2=0\), the cosine denominator vanishes and \(\theta(y)\) is undefined. This occurs if the optical origin coincides with a pitch trajectory point; such a station must be rejected, not clipped.
2. If one pitch is missing at \(y\), interpolation is undefined. The paper relies on monotone interpolation in \(y\) [PAGE 9]; if the reconstructed path is non-monotone or \(y_d\) lies outside the reconstructed release-to-plate interval, DAS is not admissible.
3. \(\theta=0\) occurs for parallel same-direction line-of-sight vectors; \(\theta=\pi\) occurs for anti-parallel vectors. Both are legitimate limits only when both norms are nonzero.
4. Baseline cells with fewer than 10 pitches are dropped, so rare pitcher–pitch–zone–count cells are not estimated. This is a selection boundary, not a causal null.
5. \(R^2\) is undefined if \(\sum_i(y_i-\bar y)^2=0\). Because SwStr Lift is Bernoulli-residualized, the target is bimodal and the attainable \(R^2\) is capped; absolute \(R^2\) values near 0.005 must not be read as “0.5% of perception.”
6. ICE varies DAS or AAS while holding the other fixed, but in real sequences they co-move; therefore ICE is a model-sensitivity surface, not a two-lever causal intervention. The authors state this limitation directly [PAGE 25].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s lineage is a retrocausal chain from informal coaching language to measurable geometry. The introduction notes that sequencing has been described informally as “keeping hitters off balance” but that quantitative isolation is sparse [PAGE 2]. Earlier sabermetrics established the template: Baumer (2009) used Monte Carlo simulation and found that baserunning “typically changes a team’s run scoring by less than ±25 runs per season” [PAGE 2]; Kaplan (2006) decomposed offensive performance into between-team and within-team components [PAGE 2]; Weinstein-Gould (2009) tested pitch mixing as a mixed strategy [PAGE 2]. Those studies normalize the idea that a hidden component can be real, modest, and easy to miss in a raw total. The paper explicitly places tunneling in that family: “Park factors, pitch framing, and baserunning are all effects that a raw total can hide. Tunneling belongs in that group” [PAGE 23].

The direct tunneling genealogy runs through Roegele (2014), Sayre et al. (2017), and Gray (2017). Roegele “had already tested the performance claim, at a decision point farther from the plate than 23.8 feet” [PAGE 3]. Sayre et al. quantified release, tunnel-point, and plate separation, with “a league-average fastball reaches the plate in about 400 milliseconds, and they place the batter’s point of no return 175 milliseconds before contact, 23.8 feet from home plate” [PAGE 3]. Gray then supplied the perceptual correction: “one distance at one depth is not enough” because batters use continuous optical information, including angular expansion [PAGE 3]. That correction is why the present paper reports both DAS at commitment and AAS over early flight. Later arsenal metrics by Lambert (2024) and Sutton-Brown (2025) grade a pitch inside a repertoire, but the paper distinguishes itself from them: arsenal grades “are not a forecast for the next pitch in a specific sequence, and they do not separate that sequence from the quality of the pitch itself” [PAGE 3].

The multi-week trap is not a weather forecast trap; it is a stability and leakage trap. The paper uses an 80/20 random split within sequence category and says this is appropriate because the target is a physics/perception relationship, “not season-ahead forecasting” [PAGE 7]. That choice is defensible for mechanism validation, but it is not evidence that the same coefficients persist across weeks, ballparks, or pitcher workloads. The paper itself flags the “amnesiac assumption” of only one preceding pitch [PAGE 25] and the absence of batter-level heterogeneity [PAGE 25]. A practitioner using this over multiple weeks should therefore treat the exploratory top-10 zone tables as unstable unless supported by sample size and empirical-Bayes shrinkage. The paper demonstrates the trap: “top-25 mean SwStr% Gap ~23 pp raw → ~12 pp shrunk” [PAGE 20]. Raw small-sample paths are winner’s-curse candidates; shrunk paths are the safer guide. A second multi-week trap is treating DAS as a causal lever independent of AAS. Because DAS and AAS co-move, a coach who changes one in pitch design will usually change the other; the ICE result is a model sensitivity check, not a guarantee that a single mechanical adjustment will produce the predicted lift.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive decision problem has three layers: the batter’s crisis habit regression, the pitcher’s counter-trap, and the commitment clock. The clock is explicit: the decision point is placed at 24 ft, rounding the 23.8-ft point of no return that Sayre et al. locate 175 ms before contact [PAGE 3, PAGE 4]. At that clock boundary, the batter cannot wait for full trajectory separation. The paper’s H2 says the primary mechanism is swing induction in Shadow and Chase, where hitters are ordinarily selective [PAGE 5]. Under time compression, the batter’s policy regresses from deliberate pitch identification to a habitual “commit or take” heuristic. That is crisis habit regression: when discriminability is low, the batter falls back on prior swing tendencies and expands the actionable zone.

The empirical signature is the swing-rate gap. For FB→BR with \(P_2\) in Shadow or Chase, well-tunneled sequences produced “a +22.3 percentage-point higher swing rate than poorly tunneled sequences (67.5% vs. 45.2%)” [PAGE 14]. The paper concludes: “Taken together, these results establish swing induction as the core behavioral mechanism by which tunneling generates sequencing value” [PAGE 15]. In theory-of-mind terms, the pitcher is not merely throwing a good pitch; the pitcher is manipulating the batter’s inference about \(P_2\) from \(P_1\). The batter observes \(P_1\), forms a posterior over pitch type and trajectory, and commits before the posterior resolves. A tight tunnel raises the cost of waiting.

The counter-trap is the next recursion. If the batter learns that low-DAS sequences are chase traps, the batter can counter by taking earlier or by biasing toward the known \(P_1\) prior. The pitcher can then counter the counter by using the same tunnel geometry to steal a called strike in the Shadow zone or by varying the release signature so that AAS, not DAS, carries the discriminative information. The paper cannot fully test this recursive game because it models only two pitches and does not model batter adaptation. That is why the “amnesiac assumption” limitation matters [PAGE 25]. A recursive model would need at least three pitches, count leverage, and batter-specific updating. The present result supports a one-step deception effect, not an indefinitely repeated psychological game.

The clock also sets the boundary conditions. If a batter has a longer effective decision window—through earlier pitch recognition, shorter swing path, or a different commitment depth—the 24-ft DAS becomes a proxy rather than a direct measurement. The paper’s fixed optical origins, \(E_R=(-1.5,-1.75,4.5)\) and \(E_L=(1.5,-1.75,4.5)\) ft [PAGE 9], are reasonable league-level approximations but not individual gaze models. The correct recursive prediction is therefore conditional: tight tunnels should increase swing propensity most strongly where the clock is binding, namely Shadow and Chase with two-strike or protective-swing contexts. If the effect were uniform across Heart and Waste, the crisis-habit account would be weakened; the observed concentration in Shadow and Chase is consistent with the clock-plus-habit mechanism.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical veto. The reconstruction pipeline back-solves release kinematics from a 50-ft Statcast reference plane using constant accelerations, then integrates to the plate and interpolates at target \(y\) [PAGE 8]. Let \(\vec p_{\mathrm{obs}}(50)\) and \(\vec v_{\mathrm{obs}}(50)\) be the reported 50-ft state, and let \(\vec p_{\mathrm{rec}}(50)\), \(\vec v_{\mathrm{rec}}(50)\) be the reconstructed state after back-solving the release depth. Define residuals
\[
r_p=\|\vec p_{\mathrm{rec}}(50)-\vec p_{\mathrm{obs}}(50)\|_2,
\qquad
r_v=\|\vec v_{\mathrm{rec}}(50)-\vec v_{\mathrm{obs}}(50)\|_2.
\]
If \(r_p\) or \(r_v\) exceeds the tracking tolerance, DAS/AAS are numerically valid angles of an invalid trajectory. The physical veto is therefore: no deception inference without residual certification. Constant-acceleration reconstruction is an approximation; seam-shifted wake or tracking noise can break it. The paper acknowledges “reliance on Statcast data introduces the possibility of measurement error, which could bias DAS and AAS calculations” [PAGE 25].

Biomechanical veto. The model fixes the commitment depth at 24 ft and the eye origin by handedness. A batter-specific point of no return would be \(y_d^{(b)}\), not a league constant. If \(|y_d-y_d^{(b)}|\) is large relative to the separation scale, DAS at 24 ft is a proxy for the batter’s actual commitment geometry. The paper’s own justification is league-average: the 23.8-ft point is “the distance a league-average fastball travels in the last 175 ms before contact” [PAGE 9]. A biomechanical veto triggers when a claim moves from league-level association to individual prescription without batter-specific swing-time calibration. The model also does not include bat path, swing length, or approach angle; those can alter whether a visually deceptive pitch becomes a whiff or weak contact.

Weather veto. Weather is not a covariate in the model. Temperature, humidity, pressure, and wind alter air density and therefore drag and movement, but DAS/AAS are computed from observed Statcast trajectories, so weather is embedded in the geometry rather than isolated. The veto is against causal language that attributes a swing-rate change to tunneling alone when weather jointly changes pitch trajectories and batter physiology. A valid cross-layer claim must either condition on weather or show that the DAS effect survives within weather strata. The paper does not claim weather causality, so the correct adjudication is: physical trajectory geometry is admissible as a descriptive mediator; weather-adjusted causal attribution is not established.

Cross-layer proof standard. A DAS/AAS claim survives only if: (i) both line-of-sight norms are nonzero; (ii) \(y_d\) lies inside the reconstructed flight interval; (iii) trajectory residuals are below tolerance; (iv) the baseline cell has \(N\geq10\); and (v) the contrast is within-cell or otherwise location-matched. If any condition fails, the correct action is veto, not imputation. This is consistent with the paper’s decision to drop missing critical physics and location fields [PAGE 6] and with its conservative baseline discussion [PAGE 10].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto scenario 1: Euclidean-geometry placebo. Recompute a placebo deception score using raw Euclidean separation at the plate, \(D_{\mathrm{plate}}=\|\vec P_1(0)-\vec P_2(0)\|_2\), and a tunnel-point Euclidean score \(D_{24}=\|\vec P_1(24)-\vec P_2(24)\|_2\). Run the same quintile and ablation pipeline. Verifiable decision rule: if the Euclidean scores match or exceed DAS/AAS on the FB→BR SwStr Lift gap and on relative out-of-sample \(R^2\) gain, then the claim that batter-perspective angular separation is the operative geometry is vetoed. Prediction: DAS/AAS should retain a positive Good-minus-Bad SwStr Lift and a positive relative \(R^2\) increment, while plate Euclidean distance should be weaker because the paper’s argument is explicitly line-of-sight, not absolute spatial separation [PAGE 5, PAGE 9]. If the placebo wins, reject the angular-specific interpretation.

Veto scenario 2: Temporal holdout drift. Train on 2021–2024 and test on 2025, using the same feature sets and sequence categories. Verifiable decision rule: compute \(\Delta R^2=R^2_{\mathrm{aug}}-R^2_{\mathrm{base}}\) for FB→BR and FB→OS. If \(\Delta R^2\) is zero or negative on the temporal holdout, or if the FB→BR Chase quintile gradient reverses, then the random-split ablation is not a stable predictive claim. Prediction: the relative gain should remain positive but attenuate, because the paper’s random split targets a physics/perception relationship rather than season-ahead forecasting [PAGE 7]. A sign flip would veto the out-of-sample predictive framing, not necessarily the descriptive association.

Veto scenario 3: Exact-location matching. Within each pitcher × pitch-type × zone × count cell, compare low-DAS and high-DAS sequences after matching or stratifying on exact \(P_1\) and \(P_2\) plate locations. Verifiable decision rule: if the Good-minus-Bad SwStr and Swing gaps collapse to zero after exact-location matching, then the effect is location or pitch-quality confounding rather than tunneling. Prediction: the gap should attenuate but remain positive for FB→BR in Shadow and Chase, consistent with the raw quintile gradient and the swing-induction result [PAGE 14, PAGE 18]. The paper’s within-cell baseline logic supports this test because “within a fixed cell the baseline is constant, so contrasts between low-DAS and high-DAS sequences in the same context are equivalent to contrasts in raw swinging-strike rates” [PAGE 10]. If the matched gap vanishes, H1’s sequencing interpretation is vetoed.
</RLVR_COUNTERFACTUAL_VETOES>