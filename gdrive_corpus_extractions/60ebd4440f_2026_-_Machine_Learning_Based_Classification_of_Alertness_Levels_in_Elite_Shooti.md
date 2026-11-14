---
source: "2026 - Machine Learning Based Classification of Alertness Levels in Elite Shooting Athletes Using Heart Rate Variability - Lu et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Journal of Sports Science and Medicine/2026"
pages: 11
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4036
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about machine learning classification of alertness levels in elite shooting athletes using HRV. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

No betting content allowed. This is about sports science research analysis.

Let me carefully extract key details:

Paper: Lu et al. (2026), Journal of Sports Science and Medicine 25, 476-486.
- 83 national-level shooting athletes (48 male, 35 female), mean age 18.4 ± 2.5 years, mean mass 62.3 ± 9.1 kg, height 168.7 ± 7.4 cm.
- 9 International Master of Sport, 25 National Master of Sport, 49 national first-grade.
- 47 10m air rifle, 36 10m air pistol.
- Training experience 5.8 ± 2.3 years, weekly volume 28.6 ± 4.2 hours.
- 60-minute PVT protocol, six 10-minute blocks, 80 trials per block.
- Sub-optimal alertness defined as RT > 500 ms (attentional lapse).
- 480 valid PVT epochs obtained; 168 positive cases (sub-optimal).
- Sample size: Obuchowski's method, α=0.05, power=80%, minimum 54 positive events needed for AUC 0.75.
- Binary classification: Optimal (Top 40%, mean RT < 273.98 ms) vs Sub-optimal (Bottom 40%, mean RT ≥ 319.60 ms). 240 epochs each, balanced 1:1.
- Wait, supplementary table says 480 epochs total? 240 high + 240 low = 480. But earlier said 168 positive cases out of 480. That seems inconsistent unless the binary framework excluded middle 20% (moderate). Indeed three-class: High 240 (40%), Moderate 120 (20%), Low 240 (40%). Binary uses only top 40% and bottom 40%, excluding middle 20%, giving 480 epochs? Wait: 83 athletes × 6 blocks = 498 possible epochs. 480 valid. If binary uses top 40% and bottom 40% of 480, that's 192 + 192 = 384, not 240+240. But supplementary tables say 240 each for binary. Hmm, perhaps they used all 480 and classified into 5 levels of 120 each, then binary took High (levels 0+1? No, supplementary table 1: High alertness <250.05 (120), Higher alertness 250.05~273.983 (120), Moderate 273.983~294.658 (120), Lower 294.658~319.6 (120), Low ≥319.6 (120). Total 600? Wait 5 × 120 = 600. But they said 480 valid epochs. Maybe the supplementary tables are illustrative or from a different split? Actually Table 1 says 480 valid epochs. Supplementary tables say 120 each × 5 = 600. That's inconsistent. But I should report what's written and note inconsistency as gray zone.

- Algorithms: SVM, RF, XGBoost, AdaBoost.
- Best: AdaBoost binary: Accuracy 0.75, Precision 0.74, Recall 0.75, Specificity 0.75, NPV 0.75, F1 0.73, AUC 0.77.
- Three-class AdaBoost: Accuracy 0.53, AUC 0.67.
- Features: VLF% most critical (SHAP), then SD2/SD1 ratio, DFA alpha2. Elevated VLF% associated with lower alertness.
- HRV recorded with Polar V800, 1000 Hz sampling, band-pass 0.5-35 Hz, Kubios HRV Premium 3.5, artifact correction "Medium" <2% corrected RR intervals.
- Frequency bands: VLF 0.01-0.04 Hz, LF 0.04-0.15 Hz, HF 0.15-0.40 Hz.
- Nonlinear: SD1, SD2, SD2/SD1, ApEn, SampEn, DFA alpha1, alpha2.
- Testing 08:00-09:30 morning, pre-training.
- Limitations: no external validation, no sleep objective measure, no menstrual cycle control, no calibration curves, single sport, young sample.

Now I need to write the response with the exact XML sections.

Important: No betting lines. No toy equations. Use formal LaTeX. Cite [PAGE N].

Let me draft each section.

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words). I need to reason through the methodology, identify inconsistencies (e.g., 168 positive events vs binary balanced 240/240; 480 epochs vs supplementary 600), the definition of sub-optimal as RT>500ms vs binary split at top/bottom 40%, the SHAP interpretation of VLF% as systemic vs cognitive, the ceiling effect argument, the subject-level cross-validation to prevent leakage, etc.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations for AUC, accuracy, F1, Pearson correlation, Obuchowski sample size maybe, HRV frequency bands, SHAP values, etc. Units: ms, Hz, s, %, dimensionless ratios. Page citations. Breakdown regimes: when VLF% interpretation breaks down (non-cognitive influences), when binary classification breaks down (middle 20% excluded), when model generalizes (external cohort missing).

<RETROCAUSAL_GENEALOGY>: Historical lineage: PVT (Dinges & Powell 1985; Basner & Dinges 2011), HRV standards (Malik et al. 1996), Laborde et al. 2017 neurovisceral integration, Zhou & Zhang 2022 SVM vigilance, Xie & Ma 2025 sliding window, Quintana et al. 2016 GRAPH, Collins et al. 2024 prediction models. Multi-week traps: circadian drift, menstrual cycle variability across weeks, training load accumulation, detraining, device calibration drift.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression (athlete under stress reverting to habitual aiming/trigger patterns), counter-trap (coach over-relying on HRV model ignoring subjective state), clock (diurnal/circadian, 08:00-09:30 testing, 60-minute task, block progression).

<CROSS_LAYER_VETO_ADJUDICATION>: Physical layer (Polar V800 1000 Hz, Kubios artifact correction <2%, bandpass 0.5-35 Hz), biomechanical (shooting quasi-isometric, 10m air rifle/pistol, minimal metabolic demand), weather veto (not studied directly but grant mentions high-temp/high-humidity; HRV affected by thermoregulation which confounds VLF%). Need to be careful not to invent.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable veto scenarios + predictions. E.g., (1) external cohort validation on different sport/time-of-day -> accuracy drops below 0.70; (2) inclusion of middle 20% moderate class -> binary AUC collapses to three-class ~0.67; (3) uncontrolled sleep/menstrual cycle confounds -> VLF% SHAP importance attenuates. Predictions should be specific and verifiable.

Word count: Need >=1000 words total across sections. THINK_TRACE alone >=400 words. Let me ensure each section is substantial.

Let me write carefully with LaTeX.

LaTeX examples:
- Accuracy: \(\text{Accuracy} = \frac{TP + TN}{TP + TN + FP + FN}\)
- F1: \(F_1 = 2 \cdot \frac{\text{Precision} \cdot \text{Recall}}{\text{Precision} + \text{Recall}}\)
- AUC: \(\text{AUC} = \int_0^1 TPR(FPR^{-1}(u)) \, du\) or Mann-Whitney U interpretation.
- Pearson: \(r = \frac{\sum (x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum (x_i - \bar{x})^2 \sum (y_i - \bar{y})^2}}\)
- Obuchowski: not a simple formula, but I can reference it without inventing.
- SHAP: \(\phi_i = \sum_{S \subseteq N \setminus \{i\}} \frac{|S|! (|N|-|S|-1)!}{|N|!} [f(S \cup \{i\}) - f(S)]\)
- VLF band: \(f \in [0.01, 0.04] \, \text{Hz}\), LF \([0.04, 0.15]\), HF \([0.15, 0.40]\).
- SD2/SD1 ratio dimensionless.
- RT threshold: \(RT > 500 \, \text{ms}\).

Citations: [PAGE 1], [PAGE 2], etc.

Let me ensure no fake ratios like Force/Fatigue. All equations must be real and grounded.

I'll write now, making sure to hit word count. I'll aim for roughly 200-300 words per section except THINK_TRACE which needs 400+. Total well over 1000.

Let's compose.

THINK_TRACE: I'll discuss the multi-hop logic: HRV -> autonomic modulation -> vigilance -> ML classification. Gray zones: inconsistent epoch counts (480 valid vs supplementary 600), the definition mismatch between sub-optimal (RT>500ms, 168 epochs) and binary bottom 40% (240 epochs), the claim of perfectly balanced binary dataset vs 3-class moderate exclusion, the VLF% causal ambiguity (thermoregulation/hormonal vs cognitive), subject-level CV preventing leakage but limited n=83, no calibration. I'll audit each.

SOURCE_OPERATORS_AND_EQUATIONS: Formal definitions, units, page citations, breakdown regimes.

RETROCAUSAL_GENEALOGY: Lineage from Dinges/Powell PVT, Malik HRV standards, Laborde neurovisceral, Zhou & Zhang SVM, Xie & Ma sliding window, Quintana GRAPH, Collins prediction model standards. Multi-week traps: circadian phase, menstrual cycle, training load, acute illness, sleep debt accumulation, device drift.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression = under pressure athlete reverts to over-controlled aiming (conscious processing), flipping autonomic signature. Counter-trap = coach treats model output as ground truth, overrides athlete's felt readiness. Clock = 08:00-09:30 testing window, 60-min PVT, block 1 vs block 6 fatigue, diurnal HRV.

CROSS_LAYER_VETO_ADJUDICATION: Physical layer veto if Polar V800 signal quality < threshold or artifact correction >2%. Biomechanical layer veto if shooting event not quasi-isometric or metabolic demand high (not applicable to 10m air pistol/rifle). Weather veto: high temp/humidity affects thermoregulation -> VLF% confound (study funded by high-temp/high-humidity grant but didn't test it). Cite pages.

RLVR_COUNTERFACTUAL_VETOES: Three scenarios:
1. External validation cohort (different age/sex/sport/time-of-day): prediction AUC < 0.70, vetoes deployment.
2. Inclusion of middle 20% (moderate alertness) as noisy class: binary framework collapses, AUC reverts toward three-class ~0.67 (from Table 6, AdaBoost three-class AUC 0.67).
3. Uncontrolled sleep/menstrual confounds: VLF% SHAP importance drops below SD2/SD1, model loses interpretability and predictive stability. Predictions: under scenario 1, sensitivity/specificity fall below 0.70; scenario 2, F1 < 0.60; scenario 3, calibration Brier score > 0.25.

Need to avoid betting language entirely.

Let's write. I'll keep it professional and precise.

Check word count mentally. THINK_TRACE ~500 words. SOURCE ~300. RETRO ~250. THEORY ~250. VETO ~250. RLVR ~200. Total ~1750. Good.

Let's ensure every page citation corresponds to actual content:
- Page 1: abstract, hypothesis AUC > 0.70.
- Page 2: methods, sample size, participants, data collection.
- Page 3: PVT task details, HRV acquisition.
- Page 4: ML setup, Table 1, Table 2.
- Page 5: Table 3, Table 4, Table 5, Table 6, Table 7, binary split.
- Page 6: model results (continued? Actually page 6 contains Table 7? Let's check: Page 6 starts with "Lu et al. 479" wait no. Let's re-read page markers.

Page 4 ends with Table 2 partially? Wait:
Page 4 content: Table 2 continues? Actually page 4 shows "Table 2. Changes in time-domain features..." then ends. Page 5 starts with Table 2 continuation? No, page 5 starts with "Nonlinear feature changes" and Table 4. Wait, let's map:

Page 1: Abstract, Introduction start.
Page 2: Methods, Sample size, Participants, Inclusion/exclusion, Data collection start.
Page 3: Alertness task, ECG acquisition, Alertness labeling.
Page 4: ML and performance evaluation, Statistical analysis, Results, PVT test, Table 1, Table 2 start.
Page 5: Table 2 continued? Actually page 5 shows Table 2 time-domain features (rows Mean RR to TINN). Then Nonlinear feature changes, Table 4, Correlation analysis Table 5, Alertness classification text, Table 6, Figure 2 text, Model development, Table 7.
Page 6: Model interpretability SHAP, Discussion start, Figure 5, Figure 6.
Page 7: Discussion continued, key theoretical contribution, VLF interpretation.
Page 8: Discussion continued, accuracy context, practical perspective, limitations start.
Page 9: Limitations continued, Conclusion, Acknowledgements, References start.
Page 10: References continued.
Page 11: References end, Key points, Author biography, Supplementary Tables 1-3.

I need to be careful with citations. I'll cite broadly where content appears.

Actually looking again:
- Page 5 contains Table 5 (correlation), Table 6 (performance), Table 7 (binary metrics).
- Page 6 contains SHAP discussion, Figures 5-6.
- Page 11 contains Supplementary Tables 1-3.

I'll cite accordingly.

Let's write the final response.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper’s causal chain runs from sustained attentional demand (60-minute PVT) to reaction-time degradation, then to autonomic nervous system signatures captured via HRV, and finally to a machine-learning decision boundary separating optimal from sub-optimal alertness. First hop: the behavioral ground truth is operationalized two ways. Operation A defines a sub-optimal epoch as any PVT trial with RT > 500 ms, the canonical attentional-lapse threshold (Basner and Dinges, 2011; Dinges and Powell, 1985). Operation B defines the binary classification target by splitting the distribution of mean block RT into top 40% (optimal, mean RT < 273.98 ms) and bottom 40% (sub-optimal, mean RT ≥ 319.60 ms), explicitly discarding the middle 20% (“moderate”) to avoid boundary confusion [PAGE 3] [PAGE 5]. These are not equivalent: a lapse-based definition (RT > 500 ms) yielded 168 positive epochs out of 480 valid blocks, whereas the binary balanced design uses 240 optimal and 240 sub-optimal epochs [PAGE 2] [PAGE 5]. The supplementary tables imply five equal strata of 120 epochs each (600 total), which conflicts with the stated 480 valid epochs [PAGE 11]; this is a gray-zone inconsistency that threatens the claimed 1:1 balance unless epochs were dropped or reweighted without disclosure.

Second hop: feature engineering extracts time-domain (SDNN, RMSSD, etc.), frequency-domain (VLF 0.01–0.04 Hz, LF 0.04–0.15 Hz, HF 0.15–0.40 Hz, total power, LF/HF), and nonlinear (SD1, SD2, SD2/SD1, ApEn, SampEn, DFA α1/α2) indices from Polar V800 RR intervals sampled at 1000 Hz and cleaned in Kubios HRV Premium 3.5 with “Medium” artifact correction (<2% corrected beats) [PAGE 3]. Third hop: recursive feature elimination with Random Forest reduces dimensionality, then SVM, RF, XGBoost, and AdaBoost compete under subject-level 5-fold cross-validation and grid-search tuning optimized on AUC [PAGE 4]. Fourth hop: SHAP decomposition identifies VLF% and SD2/SD1 as the top predictors, with elevated VLF% driving sub-optimal predictions [PAGE 6] [PAGE 7].

Gray-zone audit. (1) Ecological validity vs. statistical power: the authors justify n = 83 via Obuchowski’s method requiring ≥54 positive epochs for AUC 0.75 at 80% power, yet report 168 positive lapse epochs and an observed binary AUC of 0.77 [PAGE 2]. The post-hoc power claim is circular because the observed AUC was used to declare power “inherently greater” than 80%. (2) Interpretability vs. causality: SHAP ranks VLF% highest, but the authors themselves concede VLF reflects thermoregulatory, hormonal, and respiratory rhythms rather than isolated cognitive vigilance (Quintana et al., 2016; Laborde et al., 2017) [PAGE 7] [PAGE 8]. Thus VLF% is a systemic correlate of the quasi-isometric shooting state, not a direct cognitive-alertness index. (3) Ceiling effect: elite athletes’ stable autonomic regulation compresses variance, making 75% accuracy more impressive than it appears against sleep-deprived adults (89% in Xie and Ma, 2025), but it also limits sensitivity to micro-fluctuations [PAGE 8]. (4) External validity: no external cohort, no calibration curves, no learning curves, no sex/menstrual stratification, and testing confined to 08:00–09:30 [PAGE 8] [PAGE 9]. The model is a discrimination tool, not a calibrated probability estimator.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, and breakdown regimes.

Behavioral labeling (sub-optimal lapse):
\[
\mathbb{I}(\text{sub-optimal}) = \mathbb{I}(RT > 500~\text{ms})
\]
with typical alert RT reference window \(200\text{--}300~\text{ms}\) [PAGE 2].

Binary target definition (block-level mean RT, \(\overline{RT}_b\)):
\[
y = 
\begin{cases}
0 \;(\text{optimal}) & \text{if } \overline{RT}_b < 273.98~\text{ms} \\
1 \;(\text{sub-optimal}) & \text{if } \overline{RT}_b \ge 319.60~\text{ms} \\
\text{excluded} & \text{if } 273.98 \le \overline{RT}_b < 319.60
\end{cases}
\]
giving \(N_{\text{optimal}} = 240\), \(N_{\text{sub-optimal}} = 240\), class ratio \(1:1\) [PAGE 5] [PAGE 11].

Classification performance (independent 7:3 test split):
\[
\text{Accuracy} = \frac{TP+TN}{TP+TN+FP+FN}, \quad
\text{Precision} = \frac{TP}{TP+FP}, \quad
\text{Recall} = \frac{TP}{TP+FN}, \quad
F_1 = 2\frac{\text{Precision}\cdot\text{Recall}}{\text{Precision}+\text{Recall}}
\]
Dimensionless proportions in \([0,1]\). Best model: AdaBoost binary — Accuracy 0.75, Precision 0.74, Recall 0.75, Specificity 0.75, NPV 0.75, \(F_1 = 0.73\), \(\text{AUC} = 0.77\) [PAGE 6] [PAGE 7]. Three-class AdaBoost: Accuracy 0.53, \(\text{AUC} = 0.67\) [PAGE 6].

Pearson correlation between HRV feature \(x\) and PVT RT \(y\):
\[
r = \frac{\sum_i (x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum_i (x_i - \bar{x})^2 \sum_i (y_i - \bar{y})^2}}, \quad p < 0.05 \text{ significant}
\]
Significant negative correlations of SDNN (\(r=-0.177\), \(p<.0001\)), RMSSD (\(r=-0.275\) for fastest 10% RT), and SD1 (\(r=-0.280\)) with speed metrics [PAGE 5] Table 5.

Frequency-domain HRV bands (Kubios HRV Premium 3.5):
\[
\text{VLF}: f \in [0.01, 0.04]~\text{Hz}, \quad
\text{LF}: f \in [0.04, 0.15]~\text{Hz}, \quad
\text{HF}: f \in [0.15, 0.40]~\text{Hz}
\]
Total power in \(\text{ms}^2\); normalized units dimensionless [PAGE 3] Table 3.

Nonlinear Poincaré descriptors:
\[
\text{SD1} \text{ (short-term variability, ms)}, \quad
\text{SD2} \text{ (long-term variability, ms)}, \quad
R = \frac{\text{SD2}}{\text{SD1}} \text{ (dimensionless ratio)}
\]
SD2 rose \(55.33 \to 60.34~\text{ms}\); \(R\) rose \(2.16 \to 2.35\) across Blocks 1–6 [PAGE 5] Table 4.

SHAP additive explanation for AdaBoost output \(f\):
\[
f(x) = \phi_0 + \sum_{i=1}^{M} \phi_i, \quad
\phi_i = \sum_{S \subseteq N \setminus \{i\}} \frac{|S|!(|N|-|S|-1)!}{|N|!}\big[f(S \cup \{i\}) - f(S)\big]
\]
where \(\phi_i\) is the attribution of feature \(i\). VLF% had the largest \(|\phi_i|\), followed by SD2/SD1 and DFA \(\alpha_2\) [PAGE 6] Figure 5.

Sample-size logic (Obuchowski, correlated data):
\(\alpha = 0.05\), power \(= 0.80\), expected \(\text{AUC} = 0.75\), positive event rate \(35\%\), minimum positive events \(N_{\text{pos}} \ge 54\) [PAGE 2]. Breakdown: achieved 168 lapse-positive epochs but binary analysis used the middle-20% exclusion scheme, so the a priori event count does not directly map to the final balanced \(240/240\) design.

Exact breakdown/singularity regimes: (i) SHAP attribution to VLF% breaks down when thermoregulatory/hormonal confounds dominate slow autonomic oscillations, making VLF% a systemic rather than cognitive marker [PAGE 7]; (ii) binary classification breaks down if the excluded middle 20% (“moderate”) is reintroduced — the three-class framework showed moderate-class recall as low as 0.02 and AUC collapse from 0.77 to 0.67 [PAGE 6]; (iii) subject-level cross-validation prevents intra-subject leakage but cannot validate cross-population generalization with \(n=83\) single-sport athletes [PAGE 4] [PAGE 8].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage plus multi-week traps.

Lineage. The behavioral anchor is the Psychomotor Vigilance Task, formalized by Dinges and Powell (1985) and validated for sleep-loss sensitivity by Basner and Dinges (2011), with RT > 500 ms as the canonical attentional-lapse criterion later operationalized by Van Dongen et al. (2003) and Reifman et al. (2018) [PAGE 2]. HRV measurement follows Malik et al. (1996) standards for spectral bands and interpretation, implemented here via Kubios HRV Premium 3.5 with Polar V800 1000 Hz acquisition [PAGE 3]. The neurovisceral integration framework (Laborde et al., 2017) links vagal tone and autonomic flexibility to cognitive resource allocation under precision-sport pressure [PAGE 7]. Prior ML vigilance work includes Zhou and Zhang (2022), who used SVM for HRV-based vigilance classification, and Xie and Ma (2025), who applied sliding-window HRV machine learning to real-time vigilance tracking in sleep-deprived adults reporting 89% accuracy [PAGE 1] [PAGE 8]. Reporting standards invoke Quintana et al. (2016) GRAPH guidelines and Collins et al. (2024) clinical prediction-model evaluation, both cited by the authors to contextualize limitations [PAGE 8] [PAGE 9].

Multi-week traps. (1) Circadian drift: all testing occurred 08:00–09:30 to suppress diurnal HRV and alertness variation, but the model’s validity outside this window is untested; across weeks, phase shifts in training or travel would invalidate morning-only norms (Boudreau et al., 2013; Vitale et al., 2019) [PAGE 2] [PAGE 8]. (2) Menstrual-cycle variability: 35 female athletes were included without cycle-phase tracking; across a 28-day cycle, autonomic regulation and HRV shift meaningfully, introducing within-athlete variance that a static model cannot absorb (Dubol et al., 2021) [PAGE 2] [PAGE 8]. (3) Training-load accumulation: mean weekly volume was 28.6 ± 4.2 hours; over multi-week mesocycles, accumulated fatigue alters baseline HRV and vigilance, potentially moving athletes across the 273.98/319.60 ms boundary without true alertness-state change [PAGE 2] [PAGE 5]. (4) Sleep debt: only self-reported sleep disorders were excluded; no objective PSQI/actigraphy baseline was obtained, so day-to-day sleep variability confounds both HRV and PVT performance [PAGE 2] [PAGE 9]. (5) Device and protocol drift: Polar V800 sensor contact and Kubios artifact-correction thresholds could vary across longitudinal deployments, silently changing feature distributions.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and clock.

Crisis habit regression. Under competitive stress, an elite shooter may regress from automatic, well-learned aim-and-trigger execution to conscious, step-wise control (reinvestment), increasing aiming fluctuation and delaying trigger release [PAGE 1]. Autonomic response to this regression is not a clean sympathetic spike; the paper documents a “ceiling effect” where elite athletes maintain stable physiology with minimal variance, so crisis manifests as subtle micro-decrements in RT rather than gross HRV collapse [PAGE 8]. The model captures this via slow autonomic markers (VLF%, SD2/SD1) rather than acute stress reactivity, which means it indexes regulatory adaptability, not momentary arousal [PAGE 7].

Counter-trap. The primary counter-trap is for coaching staff to treat the AdaBoost output as ground-truth readiness and override the athlete’s subjective state or skip behavioral verification. Because the model is discriminative, not calibrated (no calibration curves, Brier scores, or Platt scaling), its probability outputs are unreliable for binary go/no-go decisions [PAGE 9]. A second counter-trap is over-weighting VLF% SHAP importance as if it were a causal vigilance biomarker, when VLF% is heavily determined by thermoregulation and hormonal rhythms unrelated to central cognitive state [PAGE 7]. A third counter-trap is temporal overreach: deploying a model trained exclusively on 08:00–09:30 pre-training sessions to evening or post-competition contexts where circadian and homeostatic pressure differ [PAGE 2] [PAGE 8].

Clock. The experimental clock has three layers: (a) diurnal clock — fixed morning testing window (08:00–09:30) to control circadian HRV and alertness rhythms [PAGE 2]; (b) task clock — six consecutive 10-minute PVT blocks totaling 60 minutes, designed to mirror match pacing in 10-meter air rifle/pistol events [PAGE 3]; (c) fatigue clock — RT slowed significantly across blocks (mean RT Block 1 = 272.99 ms vs Block 6 = 297.80 ms; slowest 10% RT rose \(397.12 \to 492.49~\text{ms}\), \(F = 7.51\), \(p < .001\)) while fastest 10% RT was stable (\(F = 0.88\), \(p > .05\)), indicating vigilance decay concentrated in lapses rather than preserved peak speed [PAGE 4] Table 1. The model’s predictive clock is therefore aligned to a narrow pre-competition readiness assessment, not real-time in-competition use, especially because electronic devices are restricted during formal competition [PAGE 8].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto proof.

Physical layer veto. The signal chain is Polar V800 ECG at 1000 Hz, band-pass filtered 0.5–35 Hz, artifact-corrected in Kubios HRV Premium 3.5 with “Medium” threshold, maintaining <2% corrected RR intervals per participant per epoch [PAGE 3]. Veto condition: if corrected RR proportion exceeds the accepted quality threshold or if signal integrity degrades (e.g., poor electrode contact, movement artifact), frequency-domain and nonlinear metrics — particularly VLF% and SD2/SD1 — become distorted and the model output must be vetoed [PAGE 3] [PAGE 9].

Biomechanical layer veto. Shooting here is 10-meter air rifle (n = 47) and 10-meter air pistol (n = 36): low-metabolic, quasi-isometric precision tasks demanding top-down cognitive control with minimal somatic load [PAGE 2] [PAGE 7]. Veto condition: applying this model to high-metabolic or dynamic sports (e.g., biathlon with skiing, running events, team sports) invalidates the autonomic signature because HRV would be confounded by exercise intensity, respiration, and thermoregulation rather than vigilance alone [PAGE 7].

Weather/environmental layer veto. The study was funded under a high-temperature/high-humidity performance grant (25Y42800301), yet no environmental manipulation or thermal-stress analysis was performed [PAGE 10]. Because VLF% is explicitly influenced by thermoregulatory rhythms (Quintana et al., 2016; Laborde et al., 2017) [PAGE 7], hot/humid conditions would elevate VLF% through non-cognitive pathways, potentially producing false sub-optimal alerts. Veto condition: any deployment in high-temperature/high-humidity environments without concurrent thermal and hydration monitoring invalidates VLF%-based predictions; the model is only vetted for temperate indoor morning conditions [PAGE 10] [PAGE 7].

Adjudication rule: a prediction is released only if (1) signal quality <2% artifact correction, (2) sport context matches quasi-isometric precision shooting, (3) ambient conditions are temperate and consistent with the 08:00–09:30 protocol, and (4) the output is used as discriminative triage, not calibrated probability.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR veto scenarios and predictions.

Veto scenario 1 — External-cohort generalization failure.
Counterfactual: train on the Shanghai elite cohort (n = 83, mean age 18.4 years, mixed-sex, 08:00–09:30) and test on an independent external cohort of different age, sex distribution, sport, or time of day.
Verification: require held-out AUC ≥ 0.70 and sensitivity/specificity ≥ 0.70 on the external set.
Prediction: AUC drops below 0.70 (likely toward 0.60–0.65), with sensitivity falling below 0.65 because the “ceiling effect” of elite autonomic regulation does not transfer to less-stable populations; the model is vetoed for deployment outside the original demographic [PAGE 8] [PAGE 9].

Veto scenario 2 — Reintroduction of the excluded middle class.
Counterfactual: instead of the binary top-40%/bottom-40% split, classify all epochs into the three-class framework (High/Moderate/Low) including the moderate band \(273.98 \le \overline{RT} < 319.60~\text{ms}\).
Verification: require multiclass macro-F1 ≥ 0.60 and moderate-class recall ≥ 0.30.
Prediction: based on the reported three-class results (moderate recall 0.02–0.15, F1 0.05–0.22; AdaBoost Accuracy 0.53, AUC 0.67), macro-F1 falls below 0.50 and moderate recall remains near 0.10; the binary framework’s apparent superiority is an artifact of class exclusion, and the model is vetoed for fine-grained alertness triage [PAGE 6] Table 6.

Veto scenario 3 — Uncontrolled sleep and menstrual-cycle confounds.
Counterfactual: add objective baseline sleep (actigraphy/PSQI) and menstrual-cycle phase as covariates or stratification factors in a follow-up cohort.
Verification: require VLF% SHAP importance to remain the top predictor after adjusting for sleep duration and cycle phase, and require calibration Brier score ≤ 0.25.
Prediction: VLF% SHAP attribution falls below SD2/SD1 or DFA \(\alpha_2\) once slow autonomic variance from thermoregulation, sleep debt, and hormonal phase is partitioned out; calibration deteriorates (Brier score > 0.25) because the model was never calibrated; the model is vetoed as a causal alertness biomarker and restricted to correlational screening [PAGE 7] [PAGE 9].
</RLVR_COUNTERFACTUAL_VETOES>