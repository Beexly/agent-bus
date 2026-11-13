---
source: "2026 - A Fairness Audit of the Duckworth-Lewis-Stern Method Format-Specific and Gender-Differential Bias, with an Interpretable Calibration Layer f - Roy.pdf"
folder: "/GSE-Research/sports-research-papers/library/preprints/arXiv/2026"
pages: 16
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5592
---

<NATIVE_REASONING>
The user wants a deep analysis of the provided research paper about DLS bias in cricket. I need to follow strict invariants:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to write a comprehensive response. Let me plan each section.

THINK_TRACE (>=400 words): Deep multi-hop derivation and gray-zone audit. I need to trace the logic:
- DLS models cumulative resources Z(u,w) as function of overs remaining u and wickets lost w.
- Target revision proportional to resources consumed.
- Synthetic interruption sampling: 30 points per innings, b in [5*6, ni - 5*6], 5 overs context/remainder.
- 233,550 examples total: 140,160 train, 24,300 val, 69,090 test.
- Bias e = r_hat_DLS - r.
- Per-bucket mean bias ranges -111 to +26 ODI, -19 to +25 T20I (137-run span).
- Gender gap: ODI male +1.51, female +7.63, gap +6.13 training.
- Clustered bootstrap: match-level resampling (2,000 resamples), CI [+3.70, +10.07], p<0.001.
- Bucket-matched gap +8.34 unweighted, +9.64 weighted.
- T20I gap +0.51, CI [-1.10, +2.12], p≈0.27.
- DLS-Cal: r_hat_DLS-Cal = r_hat_DLS + Δ(x), x in R^18, MLP [18,128,128,64,1], GELU, dropout 0.25, Huber δ=10, AdamW η=10^-3, weight decay 10^-4, batch 512, cosine annealing, 50 epochs patience 8.
- Gender-aware: separate male/female models.
- WFR_k(M) = (1/N) Σ 1[|r_hat_M,i - r_i| > k].
- Real rain-affected: 417 matches, ODI mean bias -11.1, T20I +8.7.
- Limitations: synthetic supervision, proprietary ICC table, female model 32,760 examples vs male 107,400, plateau at 75-100% (0.03 runs change).

Gray zones: causal vs associational, synthetic vs operational distribution shift, proprietary table discrepancy, small women's real-match sample (~1,290 examples), WFR proxy not outcome-grounded, CAP-Net cold-start, no weather/dew/toss features, temporal scoring evolution.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations.
- Z(u,w) cumulative resources.
- Z0 baseline innings total (G50 for ODI).
- Target revision proportionality: revised target = linear function of resource fraction.
- e_i = r_hat_DLS,i - r_i.
- Mean bias = (1/N) Σ e_i.
- MAE = (1/N) Σ |e_i|.
- RMSE = sqrt((1/N) Σ e_i^2).
- Gender gap = female mean bias - male mean bias.
- Bucket-matched gap: average over cells of (female bias - male bias).
- Bootstrap: draw M matches with replacement, pool synthetic examples, B=2,000 replicates, percentile CI 2.5th/97.5th.
- DLS-Cal: r_hat_DLS-Cal = r_hat_DLS + Δ(x), x ∈ R^18.
- Huber loss δ=10.
- WFR_k(M) = (1/N) Σ 1[|r_hat_M,i - r_i| > k].
- α blend: α·CRR + (1-α)·baseline, α=0.7.
- DLS variants Z0: ODI 245, T20 145; recalibrated ODI 246.1, T20 142.9.

Units: runs (dimensionless count), overs (dimensionless count but time-like), wickets (dimensionless count 0-10), probability units for bootstrap p-values, CI in runs.

Breakdown/singularity: when overs remaining < 5 or < 15 (T20 filter), when wickets = 10 (innings over, Z=0 singularity), when bucket n<30 (suppressed cells), when gender cell sparse (Associate women's ODI only 270 examples), when α<0.5 (baseline weighted above observed rate, not intended regime), when real-match Cricsheet doesn't encode exact stoppage points.

RETROCAUSAL_GENEALOGY: Historical lineage.
- Duckworth & Lewis [7] 1998 JORS, introduced G50, resource method.
- Stern [13] 2016 JORS, extended to modern scoring rates (T20).
- Duckworth, Lewis, Stern [6] 2019 Significance, two decades.
- Bhattacharya, Gill, Swartz [3] 2011 JORS, ODI-calibrated curves inappropriate for T20.
- McHale & Asif [10] 2013 EJOR, arc-tangent DLMA.
- Asif et al. [2] 2021 PLoS ONE, 1,764 ODIs.
- Zia et al. [14] 2022 PeerJ CS, player-aware compensation.
- Abbas & Haider [1] 2021 arXiv, XGBoost/PSO for outcome classification.
- Chakwate et al. [4] 2020 arXiv, Bi-LSTM win probability.
- Guo et al. [8] 2017 ICML, neural calibration.
- Niculescu-Mizil & Caruana [11] 2005 ICML, reliability diagrams.
- Hochreiter & Schmidhuber [9] 1997 Neural Computation, LSTM.
- Rushe [12] Cricsheet.
- Multi-week traps: temporal split train up to 31 Dec 2022, val 2023, test 2024-Mar 2026; rolled temporal windows 2021-2025 holdout; scoring-rate evolution means training bias doesn't equal test bias; female learning curve plateau at 75-100% data; ICC annually updated proprietary table means reconstruction drift.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- This is more abstract. Crisis habit regression: under pressure (rain interruption), officials revert to legacy DLS because it's the ICC standard (institutional habit), even when biased. Counter-trap: DLS-Cal/gender-aware calibration appears to fix bias but may overfit to synthetic distribution, creating new failure modes in real interruptions (distribution shift). Clock: temporal evolution of scoring rates (T20 death overs hitting has evolved), 2002-2026 date range, annual DLS table updates, rolled windows 2021-2025.
- Need to discuss how different agents (ICC, teams, batters) model each other. Batters may change strategy knowing DLS targets (counter-trap: if teams know DLS under-predicts collapse scenarios, they may play more aggressively or conservatively to exploit). Crisis habit regression: administrators stick with single table because separate women's table lacks data (6.4).

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical: cricket ball dynamics, boundary dimensions, ball type (men's vs women's), venue geography, dew, toss (not features, Section 6.5).
- Biomechanical: batter quality ignored by DLS (Zia et al. [14] critique), wicket-fall distributions differ by gender, player embeddings cold-start (<50 balls), CAP-Net underperformance due to cold-start.
- Weather veto: rain interruption not uniformly distributed over overs (Section 2.2 limitation), real interruptions shaped by weather/scheduling/venue geography, synthetic sampling may not match operational distribution (Section 5.4 limitation), Cricsheet doesn't encode exact stoppage points (Section 5.4).
- Veto proof: conditions under which findings are vetoed: if real-match gender sample too small (~1,290 women's ODI examples) to resolve gender gap separately (Section 5.4); if proprietary ICC table differs by >few runs (but order of magnitude smaller than gender gap, Section 3.1); if α<0.5 regime (Section 4.1); if bucket n<30 (Figure 1/2 suppression).

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning via Verifiable Rewards? Or just verifiable scenarios. I need 3 counterfactual veto scenarios with predictions.

Scenario 1: Real-match operational instant vs synthetic sampling. If Cricsheet encoded exact DLS stoppage points and we evaluated at the operational revised-target instant rather than over distribution of match states within real rain-affected matches, would the ODI under-prediction (-11.1 runs) persist or reverse? Prediction: It likely persists in direction but magnitude shrinks because synthetic sampling over-covers mid-innings states where under-prediction is severe; operational instants cluster in specific weather-driven windows.

Scenario 2: Gender-blind vs gender-aware DLS-Cal under counterfactual equal data. If women's ODI training examples were upsampled to match men's (107,400 vs 32,760), would gender-aware DLS-Cal female residual bias (+0.65) converge to gender-blind male bias (-3.47) or remain positive? Prediction: residual bias would remain slightly positive (+1 to +2 runs) because the underlying scoring/resource structure differs, not just sample size; learning curve plateau at 75-100% (0.03 runs change) suggests data ceiling.

Scenario 3: T20-specific DLS table under counterfactual modern death-overs scoring. If a T20-specific resource table recalibrated on 2024-2026 death-overs hitting replaced the ODI-calibrated T20 curve, would WFR5 T20 drop below DLS-Cal's 79.0%? Prediction: Yes, WFR5 T20 would drop by >5 percentage points because current T20 bias is concentrated in death overs (+25.1 runs at 5-10 overs remaining, 6 wickets lost), and format-specific recalibration directly attacks that cell.

I must ensure no betting lines. No mention of odds, spreads, etc.

Word count: Need >=1,000 words total across sections. THINK_TRACE alone >=400 words.

Let me draft carefully with exact page citations and verbatim quotes where appropriate.

Page citations from source:
- Page 1: Abstract, intro, Z(u,w), Bhattacharya et al [3], McHale and Asif [10], Asif et al [2], Zia et al [14].
- Page 2: Cricsheet [12], Abbas and Haider [1], Chakwate et al [4], Niculescu-Mizil and Caruana [11], Guo et al [8].
- Page 3: Dataset 8,150 matches, 30 samples per innings, 233,550 examples, synthetic interruption sampling limitation.
- Page 4: Table 1 terminology, DLS reconstruction bilinear interpolation, overall bias +4.79, per-bucket -111 to +26 ODI, -19 to +25 T20I, ANOVA F=527.16, KW H=9,797.69, T20 F=1,540.14 H=9,609.67, worst buckets.
- Page 5: Table 2 gender bias, ODI male +1.51 female +7.63 gap +6.13, bucket example men -32.4 women -6.3 gap +26.1, clustered bootstrap CI [+3.70, +10.07], p<0.001.
- Page 6: Figure 2, bootstrap procedure B=2,000, percentile CI, bucket-matched gap +8.34 unweighted +9.64 weighted, sign test 55/59 cells, CI [+5.32, +12.29] and [+3.77, +10.26], T20 gap +0.51 CI [-1.10, +2.12] p≈0.27, implementation robustness second impl gap +7.80.
- Page 7: Interpretation association not causal, mechanisms, team strength Section 3.4, era Section 5.6.
- Page 8: Team-strength stratification Full Member gap +6.72 CI [+3.38, +10.04], 97.5% women's ODI Full Member-only, DLS variants notation Z(u,w), Z0, D1/D2/D3, α=0.7 blend, α sweep robustness.
- Page 9: ML baselines M1-M5, DLS-Cal equation (1), x∈R^18, MLP [18,128,128,64,1], Huber δ=10, AdamW η=10^-3 weight decay 10^-4 batch 512 cosine, 50 epochs patience 8, converges 19-25, hyperparameter search.
- Page 10: Gender-aware DLS-Cal, WFR equation (2), k∈{3,5,10,15}, Table 3 master results, DLS original RMSE 37.41, canonical 28.92, stacking 21.49, DLS-Cal WFR5 ODI 83.0%.
- Page 11: Table 4 ablation, DLS-Cal bias reduction ODI 31% T20 18.8%, Figure 3.
- Page 12: Real rain-affected 417 matches, ODI -11.1 RMSE 45.8, T20 +8.7 RMSE 25.1, ±5-run ±1-wicket perturbation, Table 5 test split gender, DLS canonical female +6.19 CI [+5.89,+6.49], gender-aware female +0.65 CI [+0.39,+0.91].
- Page 13: Temporal splits 2021-2025 holdout, gap positive 4/5 windows, mean +6.20, 2021 +15.11 CI [+5.45,+26.07], 2023 -0.39 [-9.45,+8.94], Figure 4 reliability diagrams, WFR5 by interruption phase.
- Page 14: Discussion gender finding implications, ICC single table, interpretability vs accuracy, CAP-Net cold-start 4,707 players <50 balls, policy considerations, governance process.
- Page 15: Limitations synthetic supervision, proprietary table, female model 32,760 vs male 107,400, learning curve plateau 0.03 runs, weather venue dew toss not features.
- Page 16: Future work, conclusion, references.

Now write the response. Must be formal, no betting lines. Include exact XML tags.

Let me make sure THINK_TRACE is >=400 words. I'll write substantial content.

I need to be careful: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." I will only use equations from the paper or standard statistical definitions clearly labeled.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's central inferential chain rests on a substitution: because DLS operationally sets a revised chase target as a linear function of the resource fraction, auditing first-innings "runs remaining" from synthetic interruption points is treated as an audit of the resource-estimation component that the target is proportional to. This coincidence holds only under DLS's governing assumption—that expected runs scale proportionally with resources consumed at a constant expected scoring rate per unit resource—and diverges precisely where that proportionality fails. The authors explicitly qualify this on page 3: "They diverge precisely where that proportionality fails. We therefore interpret our results as an audit of the resource-estimation component that the revised target is proportional to, and we qualify claims about chase targets accordingly." This is the first gray zone: the audit measures residual bias in a synthetic counterfactual world, not operational target-setting error directly. The closest operational approximation is the held-out real rain-affected set in Section 5.4 (page 12), comprising 417 Cricsheet matches flagged as D/L-decided, where ODI mean bias is −11.1 runs (RMSE 45.8) and T20I mean bias is +8.7 runs (RMSE 25.1). However, Cricsheet does not encode exact stoppage points, so evaluation occurs over the distribution of match states within real rain-affected matches rather than at the operational revised-target instant.

The synthetic sampling design (page 3) draws 30 random interruption points per first innings at b ∈ [5·6, n_i − 5·6], requiring at least five overs of context and five overs of remainder. This yields 233,550 examples (140,160 train, 24,300 validation, 69,090 test). The supervision target is actual runs scored in the post-interruption window. A distribution-shift gray zone is explicit: real interruptions are not uniformly distributed over overs but are shaped by weather, scheduling, and venue geography, so the sampled match-state distribution need not match the operational one. Section 5.4 attempts to validate transfer, but the real-match subset is too small (~1,290 women's ODI examples) to resolve the gender gap separately—precisely why the gender analysis relies on the full synthetic corpus.

Bias is defined as e_i = r̂_DLS,i − r_i (page 4, Table 1). Overall training mean error is +4.79 runs (median +7.98), indicating systematic over-prediction. Per-bucket mean bias spans −111 to +26 runs in ODI and −19 to +25 runs in T20I, a 137-run total span. The worst ODI buckets are (45–50 overs remaining, 5 wickets lost) at −74.4 runs (n = 586) and (25–30 overs remaining, 6 wickets lost) at −40.7 runs (n = 138); the worst T20 buckets are (5–10 overs remaining, 6 wickets lost) at +25.1 runs (n = 1,822) and (10–15 overs remaining, 5 wickets lost) at +23.9 runs (n = 621). These map onto two known theoretical failures: over-prediction of T20 death overs and under-prediction of ODI collapse scenarios, empirically validating Bhattacharya et al. [3] (page 1).

The gender-differential finding uses a single resource table Z(u, w) across genders. On the training split (page 5, Table 2), ODI mean bias is +1.51 runs for men and +7.63 runs for women, a gap of +6.13 runs. A within-bucket example at (20–25 overs remaining, 6 wickets lost) shows men's bias −32.4 runs versus women's −6.3 runs, a +26.1-run within-bucket gap. Because the 30 samples per innings share match, teams, venue, and trajectory, inference uses a match-level block bootstrap: draw M matches uniformly with replacement, pool all synthetic examples from drawn matches, B = 2,000 replicates, percentile 95% CI (page 6). The ODI gender gap CI is [+3.70, +10.07] runs, with bootstrap probability of a non-positive gap below 0.001. Bucket-matching across 59 cells with ≥30 examples in both genders yields an unweighted gap of +8.34 runs and a min-n weighted gap of +9.64 runs; both exceed the naive marginal gap, making the marginal estimate conservative. A sign test finds women's bias exceeding men's in 55 of 59 matched cells. The bucket-matched CI is [+5.32, +12.29] (unweighted) and [+3.77, +10.26] (min-n weighted), with clustered p < 0.001. For T20I, the gap is +0.51 runs with CI [−1.10, +2.12] and p ≈ 0.27—indistinguishable from zero under clustered inference, superseding a naive Welch ANOVA result (F = 6.96, p = 0.008) that was significant only due to ~150,000 samples.

A team-strength confound is tested on page 8: among Full-Member-only ODI matches the gap is +6.72 runs (CI [+3.38, +10.04]), essentially unchanged; 97.5% of women's ODI examples already come from Full-Member-only matches, so Associate fixtures cannot drive the effect. Temporal stability (page 13) shows the gap positive in four of five yearly holdout windows (mean +6.20), individually significant in the 2021 window (+15.11, CI [+5.45, +26.07]), with one window (2023) marginally negative (−0.39, CI [−9.45, +8.94]).

DLS-Cal (page 9) outputs r̂_DLS-Cal = r̂_DLS + Δ(x), where x ∈ ℝ^18 comprises the DLS prediction, the empirical per-bucket bias prior, and 16 enriched features. Architecture: 4-layer MLP [18, 128, 128, 64, 1], GELU, dropout 0.25, 27,265 parameters; final layer initialized to zero so Δ = 0 at training start. Trained with Huber loss (δ = 10), AdamW (η = 10⁻³, weight decay 10⁻⁴), batch 512, cosine annealing, up to 50 epochs with patience 8 (converges 19–25 epochs). The gender-aware variant trains separate male and female models and routes by gender at inference. Win-Flip Rate (page 10): WFR_k(M) = (1/N) Σ 1[|r̂_M,i − r_i| > k], reported at k ∈ {3, 5, 10, 15}, stratified by format and interruption phase. It is a proxy for outcome-flipping, not a direct measurement.

Limitations and breakdown regimes: synthetic supervision approximates true DLS use; genuinely interrupted matches number only ~310 in the corpus (page 14). The ICC's annually updated resource table is proprietary, so reconstructions may differ by a few runs—an order of magnitude smaller than the gender gap (page 4). The female DLS-Cal model trains on 32,760 examples versus 107,400 for males (page 14), and the learning curve plateaus between 75% and 100% of female data (test RMSE changes by only 0.03 runs), indicating a data ceiling. Weather, venue, dew, and toss are not features (page 14). Cells with fewer than 30 examples are suppressed in bias maps (pages 4–5). The α blend in DLS canonical (α = 0.7) is explicitly not valid for α < 0.5, where the format baseline would outweigh observed in-match rate (page 8).

Key quantitative anchors for verification: ODI gender gap +6.13 (training), +8.34/+9.64 (bucket-matched); test-split female bias under gender-aware DLS-Cal +0.65 runs (CI [+0.39, +0.91]) versus +6.19 under DLS canonical (CI [+5.89, +6.49]); ODI absolute bias reduction 31% (33.74 → 23.29 mean |bias|); T20I reduction 18.8% (20.58 → 16.71); DLS-Cal WFR5 ODI 83.0%, best among evaluated methods; real-match ODI bias −11.1, T20I +8.7.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and equations from the source, with units and page citations.

Cumulative resource function (page 1; page 8 notation):
Z(u, w), u = overs remaining (dimensionless count), w = wickets lost (dimensionless count, 0 ≤ w ≤ 10).

Baseline innings total (page 8):
Z₀; for ODIs Z₀,ODI = 245 (original), 246.1 (recalibrated); for T20Is Z₀,T20 = 145 (original), 142.9 (recalibrated). Units: runs.

DLS target revision proportionality assumption (page 3):
Revised target is a linear function of the resource fraction; expected runs ∝ resources consumed, constant expected scoring rate per unit resource. Breakdown regime: wherever proportionality fails, the audit no longer measures operational target-setting error directly.

Prediction error (page 4, Table 1):
e_i = r̂_DLS,i − r_i, units: runs (predicted minus actual remaining runs).

Signed mean bias (page 4):
b̄ = (1/N) Σᵢ e_i, units: runs; may cancel across states.

Mean absolute bias (page 4):
MAE = (1/N) Σᵢ |e_i|, units: runs.

RMSE:
RMSE = sqrt((1/N) Σᵢ e_i²), units: runs.

Per-bucket mean bias:
Signed mean of e_i within an (overs-remaining bucket, wickets-lost) cell. Observed range: ODI [−111, +26] runs; T20I [−19, +25] runs; total span 137 runs (page 4).

Gender gap (page 4; page 5):
Δ_gender = (female mean bias) − (male mean bias), at matched states. Training-split ODI: +7.63 − (+1.51) = +6.13 runs. Within-bucket example (20–25 overs remaining, 6 wickets lost): −6.3 − (−32.4) = +26.1 runs (page 5).

Match-level block bootstrap (page 6):
Resampling unit = match, not synthetic example. For M matches, draw M matches uniformly with replacement and pool all synthetic examples belonging to drawn matches. B = 2,000 replicates. Two-sided 95% CI = [2.5th, 97.5th percentiles] of replicate values. Significance summarized as bootstrap probability gap ≤ 0; reported < 0.001 when no replicate crosses zero. Units: runs for CI; probability units for p-values.

Bucket-matched gap aggregation (page 6):
Unweighted average across qualifying cells; min-n weighted average where weight = min(n_male, n_female) per cell. ODI estimates: +8.34 runs unweighted, +9.64 runs min-n weighted. 95% CIs: [+5.32, +12.29] and [+3.77, +10.26]; sign test: women > men in 55 of 59 cells.

T20I marginal gap (page 6):
+0.51 runs; match-clustered 95% CI [−1.10, +2.12] runs; bootstrap p(gap ≤ 0) ≈ 0.27. Standard error ≈ 0.82 runs under normal approximation SE = (CI_high − CI_low)/(2 × 1.96).

DLS variants (page 8):
(D1) DLS original: Z₀,ODI = 245, Z₀,T20 = 145.
(D2) DLS recalibrated Z₀: Z₀,ODI = 246.1, Z₀,T20 = 142.9 (empirical mean innings total over training period only).
(D3) DLS canonical: projection = α · CRR + (1 − α) · baseline, α = 0.7 selected on validation. Implementation choice; α < 0.5 is outside the intended regime because the format baseline would weight above the observed in-match rate.

DLS-Cal calibration layer (page 9):
r̂_DLS-Cal = r̂_DLS + Δ(x), x ∈ ℝ¹⁸.
x includes: DLS prediction, empirical training-set per-bucket bias prior, and 16 enriched features (XGBoost-Plus set).
Architecture: 4-layer MLP widths [18, 128, 128, 64, 1], GELU activations, dropout 0.25, 27,265 parameters total. Final layer initialized to zero ⇒ Δ = 0 at start of training.
Training objective: predict residual r − r̂_DLS using Huber loss δ = 10; AdamW η = 10⁻³, weight decay 10⁻⁴; batch size 512; cosine learning-rate annealing; up to 50 epochs, patience 8 on validation RMSE (converges 19–25 epochs). Hyperparameter search over hidden widths {[64], [128, 128, 64], [256, 128]}, dropout {0.1, 0.25, 0.4}, learning rate {3×10⁻⁴, 10⁻³, 3×10⁻³}, Huber δ ∈ {5, 10, 20}.

Gender-aware DLS-Cal (page 9):
Separate male-only and female-only models, same architecture/hyperparameters; inference routes examples to the gender-matching model.

Win-Flip Rate (page 10):
WFR_k(M) = (1/N) Σᵢ₌₁ᴺ 𝟙[|r̂_M,i − r_i| > k], k ∈ {3, 5, 10, 15}.
Units: dimensionless rate (probability-like thresholded error rate). Stratified by format and interruption phase (early < 33%, mid 33–67%, late > 67% of innings completed). Proxy for outcome-flipping; not a direct measurement of flipped chase outcomes (page 10).

Hypothesis tests (page 4):
ODI: ANOVA F = 527.16, Kruskal–Wallis H = 9,797.69. T20I: ANOVA F = 1,540.14, Kruskal–Wallis H = 9,609.67. Nominal p-values not relied upon because samples are non-independent within matches; effect sizes and match-clustered intervals are primary.

Breakdown / singularity regimes:
- Innings length filters: ODI first innings ≥ 30 overs; T20I ≥ 15 overs (page 3).
- Synthetic sampling window: b ∈ [5·6, n_i − 5·6], requiring ≥ 5 overs context and ≥ 5 overs remainder (page 3).
- Resource singularity: w = 10 (all wickets lost) implies Z(u, 10) = 0 and innings terminates; not audited as a remaining-runs state.
- Cell suppression: bias-map cells with fewer than 30 examples not shown (pages 4–5).
- Gender-cell sparsity: only 270 of 10,719 women's ODI examples involve an Associate side; Associate women's ODI sample too sparse for a separate gap (page 7).
- Proprietary table drift: ICC annually updated table may differ from reconstruction by a few runs; order of magnitude smaller than the +6.13-run gender gap (page 4).
- Real-match evaluation limit: Cricsheet does not encode exact stoppage points; real-match subset too small (~1,290 women's ODI examples) to resolve gender gap separately (page 12).
- Feature omission: weather, venue, dew, toss not represented (page 14).
- Female calibrator data ceiling: 32,760 female vs 107,400 male training examples; RMSE changes by only 0.03 runs between 75% and 100% female subsample (page 14).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The DLS method enters the historical record via Duckworth and Lewis [7] (1998, Journal of the Operational Research Society), introducing G₅₀ as the baseline innings total for ODIs and a resource-proportional target-reset mechanism (page 1; page 7). Stern [13] (2016) extended the methodology to modern scoring rates, producing the DLS formulation used by the ICC since 1999 (page 1). Duckworth, Lewis, and Stern [6] (2019) review two decades of the method. The paper's audit directly engages three prior critiques. Bhattacharya, Gill, and Swartz [3] (2011) argued that DLS resource curves were calibrated on ODI scoring patterns and may be inappropriate for T20; the current work quantifies this as T20 death-overs over-prediction (+25.1 runs at 5–10 overs remaining, 6 wickets lost) (pages 1, 4). McHale and Asif [10] (2013) proposed the arc-tangent DLMA functional form for better fit; Asif et al. [2] (2021) compared DLS and DLMA on 1,764 ODIs (page 1). Zia et al. [14] (2022) argued DLS treats every wicket equivalently, ignoring batter quality, and proposed player-aware compensation via career ratings (page 1). The present paper's finding that DLS under-predicts ODI collapse scenarios (−74.4 runs at 45–50 overs remaining, 5 wickets lost) operationalizes the wicket-distribution critique.

Data infrastructure is supplied by Cricsheet [12], hosting ball-by-ball YAML for over 8,000 international matches (page 2). Prior machine-learning framings are methodologically distinct: Abbas and Haider [1] (2021) compared DLS against XGBoost and particle-swarm-optimized resource tables for match-outcome classification; Chakwate et al. [4] (2020) used Bi-LSTMs for win-probability prediction; neither targets revised-target prediction directly (page 2). Calibration methodology follows Niculescu-Mizil and Caruana [11] (2005) reliability diagrams, with modern neural calibration reviewed by Guo et al. [8] (2017) (page 2). LSTM foundations trace to Hochreiter and Schmidhuber [9] (1997) (page 16).

Multi-week temporal traps are built into the design. The temporal split (page 3) trains through 31 December 2022, validates on 2023, and tests on 2024–March 2026 to prevent future leakage. Section 5.6 (page 13) re-estimates the ODI gender gap with each year 2021–2025 held out in turn; the gap is positive in four of five windows (mean +6.20 runs), individually significant only in the largest-sample window (2021: +15.11, CI [+5.45, +26.07]), with one window (2023) marginally negative (−0.39, CI [−9.45, +8.94]). Per-window intervals are wide because women's ODI fixtures are sparse in any single year. Scoring-rate evolution between training and test periods shifts absolute magnitudes (e.g., Table 2 vs Table 5), so the directional finding—not the absolute level—is the stable invariant. The ICC's annually updated proprietary resource table introduces a further temporal trap: reconstruction drift relative to official figures is acknowledged as a few runs, below the gender-gap magnitude but non-zero (page 4). The female calibrator's learning curve plateaus between 75% and 100% of available data (RMSE change 0.03 runs), suggesting that even with the full 2002–2026 historical record, the women's sample has reached an information ceiling absent new fixtures (page 14).
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: Under rain interruption, match officials and governing bodies face high-stakes, time-compressed decisions. The institutional habit is to revert to the published ICC DLS table because it is the official standard, audited or not. This is a crisis habit regression—under pressure, agents fall back on the legacy method even when the paper documents structured, state-dependent bias spanning a 137-run range (page 4). The risk is asymmetric: batters in the second innings do not control the interruption, but chase targets set under biased resource estimation alter required run rates and risk-taking incentives, creating a feedback loop where teams may adapt their batting approach to anticipated DLS miscalibration.

Counter-trap: DLS-Cal and gender-aware calibration appear to resolve the documented bias, but they introduce a second-order trap. The calibration layer is trained on synthetically sampled interruption points whose distribution need not match operational interruptions (page 3). If teams or broadcasters reverse-engineer the state-attributable correction Δ(x), they could infer which match states are systematically under- or over-corrected and adjust in-innings aggression accordingly. A gender-aware calibrator that reduces women's ODI residual bias from +6.19 to +0.65 runs (page 12) might be gamed if opposition captains believe the revised target is systematically softer or harder at specific (overs, wickets) states, particularly late-innings high-wicket states where residual structure remains (page 14). The interpretability of DLS-Cal—a published DLS output plus a small, state-attributable correction (page 10)—is a governance asset but also makes the correction surface observable and potentially exploitable.

Clock: The temporal dimension is scored in matches, not minutes. The corpus spans 27 June 2002 to 5 March 2026 (page 3), capturing two decades of scoring-rate evolution, particularly T20 death-overs hitting that diverges from ODI-calibrated resource curves (pages 1, 4). The clock operates at three granularities: (i) intra-innings, where overs remaining u and wickets lost w define the state; (ii) inter-season, where the ICC updates the proprietary table annually and the authors enforce training-only feature computation to avoid leakage (page 3); (iii) multi-year, where rolled holdout windows 2021–2025 test whether the gender finding is an artifact of a single era (page 13). The clock also implies non-stationarity: DLS-Cal hyperparameters selected on 2023 validation data may degrade as scoring rates evolve, motivating online seasonal recalibration as future work (page 14). The theoretical breakdown is that a static calibration layer cannot track a drifting target distribution; the paper's remedy—online learning each season—is acknowledged but not implemented.

Recursive modeling of agents: The ICC models teams as passive recipients of revised targets; teams model the ICC's method as fixed. DLS-Cal disrupts this by making the correction explicit and state-conditioned. If the ICC adopts gender-aware calibration, women's teams may update their expectations of revised targets downward in collapsed states, while men's teams face essentially unchanged calibration (−3.47 vs −3.53 bias on test men's data, page 12). The recursive equilibrium question—whether batters exploit known DLS-Cal corrections by altering run-rate trajectories—is left unexamined and constitutes a genuine gray zone in the theory of mind.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The sport's physical substrate imposes constraints DLS does not represent. Ball type, boundary dimensions, venue geography, dew, and toss are omitted features (page 14). Women's ODI scoring rates and wicket-fall distributions differ markedly from men's (page 2), and the paper acknowledges team-strength distributions, era, scheduling, venue, boundary dimensions, ball type, innings-length distributions, and data coverage as uncontrolled mechanisms for the gender association (page 7). A physical veto applies if boundary dimensions or ball aerodynamics differ systematically between men's and women's venues such that the same resource table cannot produce comparable scoring expectations; the paper controls for team strength and era but not these physical confounds.

Biomechanical / player layer: DLS treats every wicket equivalently (page 1), ignoring batter quality—a critique formalized by Zia et al. [14]. The paper's own CAP-Net v2 fails partly because 4,707 unique players appear in the corpus, but the long tail comprises players with fewer than 50 balls of recorded play, so embeddings memorize rather than generalize (page 13). A biomechanical veto triggers if player-aware resource compensation is required to close residual bias in late-innings high-wicket states (Figure 3, right column, page 10); DLS-Cal's feature set lacks individual batter strike rates and bowler skill, so the correction remains a population average. The player-embedding cold-start is a hard data-capacity bound: no amount of architectural depth compensates for <50 balls per tail player.

Weather / interruption layer: The most severe veto is operational. Genuine rain interruptions are too few (~310 matches) to train on directly; synthetic sampling assumes uniformity over overs that real weather, scheduling, and venue geography violate (page 3). Cricsheet does not encode exact stoppage points, so the real-match evaluation (417 D/L-decided matches, page 12) integrates over a distribution of states rather than measuring the operational revised-target instant. If real interruption times cluster in phases where synthetic coverage is thin—e.g., abrupt mid-innings storms versus the uniform synthetic grid—the ODI under-prediction (−11.1 runs on real matches) and T20I over-prediction (+8.7 runs) may not transfer pointwise. Section 5.4's ±5-run and ±1-wicket perturbation grid shows ODI bias moving smoothly from −9.7 to +2.0 runs (page 12), indicating stability to realistic state variation, but this does not validate the exact stoppage-time distribution.

Veto adjudication summary: The gender finding survives match-level clustered inference, Full-Member stratification, and temporal holdouts (pages 5–7, 13), so a team-strength or single-era veto is rejected. However, a real-operational veto remains: because the gender gap cannot be resolved on the small real rain-affected women's ODI subsample (~1,290 examples, page 12), the claim that women's chase targets are systematically several runs higher rests on synthetic-state extrapolation. The paper is transparent about this, but the veto is not fully discharged. Similarly, the proprietary ICC table discrepancy is bounded to a few runs—below the gender gap—so a table-drift veto is rejected for the primary finding but remains relevant for operational deployment at the few-run level.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with falsifiable predictions.

Veto Scenario 1 — Operational instant vs. synthetic distribution. Counterfactual: If Cricsheet encoded exact DLS stoppage points and evaluation were restricted to the operational revised-target instant within real rain-affected matches (rather than integrating over all match states within those 417 matches), would the documented ODI under-prediction (−11.1 runs, page 12) persist in sign and magnitude? Verifiable condition: Re-run Section 5.4 on exact stoppage states when data becomes available. Prediction: The sign (negative ODI bias, positive T20I bias) persists because the structural resource-curve mismatch is format-level, but the magnitude shrinks by roughly 30–50% because synthetic sampling over-covers mid-innings collapse states where under-prediction is most severe (−74.4 runs at 45–50 overs remaining, 5 wickets lost, page 4), whereas real stoppages are weather-conditioned and not uniformly distributed over overs (page 3). If the sign flips or ODI bias falls within ±2 runs of zero, the synthetic-audit-to-operational-transfer claim is vetoed.

Veto Scenario 2 — Equalized gender sample size. Counterfactual: If women's ODI training examples were upsampled or reweighted to match the male sample size (107,400 vs. 32,760 examples, page 14), would the gender-aware DLS-Cal female residual bias (+0.65 runs, CI [+0.39, +0.91], page 12) converge to the male gender-blind bias (−3.47 runs, page 12)? Verifiable condition: Train gender-aware DLS-Cal on balanced gender samples and compare female residual bias. Prediction: Residual bias remains positive, approximately +1.0 to +2.5 runs, and does not converge to male bias. Justification: the learning curve already plateaus between 75% and 100% of female data (RMSE change 0.03 runs, page 14), indicating a data ceiling; the residual gap reflects structural scoring-resource differences (wicket-fall distributions, scoring rates), not sample size alone. If female bias falls to within ±0.2 runs of male bias under equal data, the structural-gender claim is vetoed.

Veto Scenario 3 — T20-specific resource table under modern death-overs scoring. Counterfactual: If a T20-specific resource table, recalibrated on 2024–2026 death-overs hitting, replaced the ODI-calibrated T20 curve in DLS canonical, would WFR5 on T20I drop below DLS-Cal's 79.0% (Table 3, page 10)? Verifiable condition: Refit Z(u, w) for T20Is using only post-2023 matches and recompute WFR5 at k = 5. Prediction: WFR5 T20I drops by more than 5 percentage points (below ~74%) because current T20I bias is concentrated in death-overs cells—+25.1 runs at 5–10 overs remaining, 6 wickets lost (page 4)—and format-specific recalibration directly attacks those cells. DLS-Cal's 18.8% bias reduction on T20I (page 10) is a learned patch on a misspecified curve; a dedicated T20 table removes the misspecification at the source. If WFR5 T20I remains above 79.0% after recalibration, the death-overs structural-mismatch explanation is vetoed.
</RLVR_COUNTERFACTUAL_VETOES>