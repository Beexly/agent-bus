---
source: "2019 - DeepQB Deep Learning with Player Tracking to Quantify Quarterback Decision-Making and Performance - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2019"
pages: 13
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5921
---

<NATIVE_REASONING>
The user wants a deep analysis of the DeepQB paper (Burke, ESPN Analytics, MIT Sloan 2019). I need to produce output with exact XML sections:

<THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Constraints:
- Zero betting lines: never mention spreads, totals, moneylines, or odds.
- Zero toy equations: no fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
- Cite exact [PAGE N] markers and verbatim quotes since source pages provided.
- >= 1,000-word depth across sections.

I need to be careful: The source text provided is a markdown rendering of a PDF with page markers embedded ("2019 Research Papers Competition Presented by: 1", "2", etc.). I should cite [PAGE 1] through [PAGE 13] corresponding to those page breaks. The text has page footers like "2019 Research Papers Competition Presented by: 1" etc. I'll map content to pages.

Let me map content roughly:

Page 1: Title, author Brian Burke, abstract, Introduction start.
Page 2: Related Research.
Page 3: Approach start, Data section.
Page 4: Architecture, Learning, footnote about drops.
Page 5: Results start, Variant 1 target probability 59.8%, completion 74% vs 55%.
Page 6: Variant 1 continued, YPA insight (7.8 vs 8.0), Variant 2 expected yards.
Page 7: Table 1 top/bottom 5, Figure 5, YPA above expected, correlation r=-0.30, selection bias Rodgers.
Page 8: Variant 3 pass outcomes, calibration, throw-aways excluded, Table 2 (empty in text but referenced), passing accuracy, interception discussion, Figure 7, Table 3 accuracy above expected.
Page 9: Table 4 interception probabilities, insight interceptions due to inaccurate throws/random error.
Page 10: Variant 4 transfer learning, Brees cyber-Brees 64%.
Page 11: Table 5 alignment with cyber-Brees, interpretation Brees targets RBs.
Page 12: Limitations and Future Development, Summary start.
Page 13: Summary end, References.

Wait, looking at the text, page breaks appear as:
"2019 Research Papers Competition Presented by: 1" then content then "2" etc. Actually the format is page footer then next page number. Let me just use the page numbers visible: 1 through 13. I'll cite key quotes with page numbers.

Key verbatim quotes to use:
- "correctly identifying the targeted receiver in 60% of cross-validated cases" [PAGE 1] (abstract says 60%, results say 59.8% [PAGE 5]).
- "When passers target the predicted receiver, passes are completed 74% of the time, compared to 55% when the QB targets any other receiver." [PAGE 1]
- "Model input is a snapshot of player configuration at the time of pass release..." [PAGE 2]
- "There are four variants..." [PAGE 2-3]
- "Training and validation data consists of every targeted pass attempt with from the 2016 and 2017 NFL regular and post-seasons." [PAGE 3]
- "Player position, velocity, acceleration, and orientation is provided at 10Hz..." [PAGE 3]
- "Overall, 45,501 pass attempts were used to train, and validate the models." [PAGE 3]
- "Training (n=24,414) and validation (n=10,464) data were built as a 70%/30% split..." [PAGE 3]
- "The test data was built from the 2018 regular season through week 12 (n=10,623)." [PAGE 3]
- "The general model consists of a four-layer network... input layer of 230 nodes... dense hidden layer of 256 neurons... second dense hidden layer of 128 neurons..." [PAGE 4]
- "The orientation of the quarterback was deliberately excluded... 'cheating'..." [PAGE 4]
- "The model predicts the actual target with an accuracy of 59.8% – three times the naïve estimate for a one-in-five proposition." [PAGE 5]
- "Further, when quarterbacks target the receiver as predicted by DeepQB, the completion rate is 74%. This compares to a completion rate of 55%..." [PAGE 5]
- "Yards Per Attempt (YPA) when quarterbacks target the predicted receiver is significantly lower than when he targets another receiver (7.8 vs 8.0 YPA)." [PAGE 6]
- "the typical (league average) quarterback is most likely too cautious in his reads." [PAGE 6]
- "For each play, quarterback decision-making can be assessed by determining whether the quarterback targeted the receiver with the maximum expected yardage." [PAGE 6]
- Table 1 [PAGE 7]
- "there is a weak negative correlation between the 'typicality' of a quarterback's targeting decisions and the value he adds above the potential provided by his receivers(r=-0.30)." [PAGE 7]
- "Aaron Rodgers may attempt more unorthodox, aggressive targeting because he can..." [PAGE 7]
- Variant 3 [PAGE 8]
- "Considering just completions and incompletions, the model appears well-calibrated..." [PAGE 8]
- Table 3 [PAGE 8]
- Table 4 [PAGE 9]
- "Because expected interception rates... are lower than the actual interception rates of high-interception quarterbacks, it follows that interceptions in the NFL are primarily a result of inaccurate throws and random sample error rather than bad targeting decisions." [PAGE 9]
- Variant 4 transfer learning [PAGE 10]
- "Overall accuracy specific to Brees' 2018 pass attempts rose to 64%." [PAGE 10]
- Table 5 [PAGE 11]
- Limitations [PAGE 11-12]
- Summary [PAGE 12-13]

Now formal equations. I need to state formal LaTeX equations with units and assumptions and breakdown regimes. Since this is a paper about neural networks, I can formalize:

Variant 1: Multiclass classification over K=5 eligible receivers.
Let x_t ∈ R^{230} be the input feature vector at pass release time t_r. The network f_θ: R^{230} → Δ^{K-1} (probability simplex). p̂_k = softmax(z_k)_k = exp(z_k)/Σ_j exp(z_j), where z = W_L ... W_1 x + biases. Cross-entropy loss L = -Σ_k y_k log p̂_k. Accuracy = (1/N) Σ 1[argmax p̂ = y]. Reported 0.598 on test set [PAGE 5]. Baseline naïve = 1/5 = 0.20. Three times baseline. Units: dimensionless probability. Breakdown: if p̂ uniform, entropy H = log 5 ≈ 1.609 nats; model must reduce conditional entropy H(Y|X). Singularity: if offenses perfectly conceal intent and defenses perfectly cover all receivers, mutual information I(Y;X) → 0 and accuracy → 0.20 (chance). The paper notes intent concealment [PAGE 1, 5].

Variant 2: Expected yards regression. For each receiver k, ŷ_k = E[Yards | x, target=k] ∈ R (units: yards). Quarterback value added ΔYPA = YPA_actual - E[YPA | x] [PAGE 6]. Proportion of maximum expected YPA targeted: ρ = ŷ_{targeted} / max_k ŷ_k [PAGE 6]. Units: dimensionless ratio [0,1] if ŷ_k ≥ 0; can exceed 1 or be negative if expected yards can be negative (sacks? but targeted passes only). Breakdown: selection bias—aggressive QBs can attempt unorthodox throws because they have skill; cannot separate skill from opportunity [PAGE 7]. Also Variant 2 separates expected yards from interception probability, so high-interception targets may appear more lucrative than net expected utility [PAGE 11].

Variant 3: Outcome probabilities over C=3 classes {complete, incomplete, interception}. q_c = P(outcome=c | x, targeted receiver). Calibration: P(outcome=c | q_c ≈ p) ≈ p. Expected completion rate completion_above = actual completion - E[completion | x] [PAGE 8]. Mean interception probability λ̄ = (1/N) Σ q_interception [PAGE 9]. Units: probability (dimensionless). Breakdown: low base rate of interceptions → noisy absolute counts; throw-away passes excluded (technically attempts without targeted receiver) [PAGE 8]. Game situation (time/score) not accounted for [PAGE 9].

Variant 4: Transfer learning. Lower layers frozen trained on all QBs: θ_lower fixed. Higher layers fine-tuned on single QB i: θ_upper^(i) trained on D_i. Brees accuracy 64% vs 59.8% general [PAGE 10]. Breakdown: sample size per QB insufficient to train from scratch; risk of overfitting; alignment table shows best QBs least aligned with cyber-Brees, suggesting experimental artifact or scheme/role differences (Brees targets RBs/check-downs) [PAGE 11].

Data: N_train=24,414, N_val=10,464, N_test=10,623 (2018 through week 12) [PAGE 3]. Total 45,501 [PAGE 3]. Tracking at 10 Hz [PAGE 3]. RFID chips in shoulder pads [PAGE 3]. Input dimension 230 nodes [PAGE 4]. Architecture 230-256-128-output [PAGE 4]. ReLU activations, batch normalization, dropout [PAGE 4]. Mirror augmentation (lateral symmetry) [PAGE 4].

Information theory: naïve estimate one-in-five = 0.20; model 0.598; information gain. Completion rate conditional: P(complete | target=argmax p̂) = 0.74 vs P(complete | target≠argmax) = 0.55 [PAGE 5]. Difference 0.19. YPA conditional: 7.8 vs 8.0 [PAGE 6].

Now I need to write >=1000 words total across sections. Each section should be substantial.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit >=400 words. I'll derive the information-theoretic implications, the caution/aggression tradeoff, the YPA paradox, selection bias, the interception base-rate fallacy, transfer learning limits, etc. Gray zones: mirror augmentation vs handedness, snapshot at release vs progression reads, duress binary variable, two nearest defenders limitation, receiver talent not fully accounted, expected yards vs interception not combined, throw-aways excluded, 2018 only through week 12, small per-QB samples.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown. Include equations for softmax, cross-entropy, expected yards, ΔYPA, ρ, calibration, interception probability, transfer learning. Cite pages. State SI/information/probability units. Exact singularity/breakdown regimes.

RETROCAUSAL_GENEALOGY: Historical lineage: Cervone et al [1] basketball expected points (Markov), Wang & Zemel [2] basketball play recognition, Le et al [3] soccer deep imitation LSTM, Harmon et al [4] basketball CNN shot prediction, Lucey et al [5] soccer shot probability CRF, Mehrasa et al [6] basketball/hockey 1D CNN trajectories, Hochstedler [7] football Voronoi tessellation 224 plays [PAGE 2]. Burke's own EPA [10], pass-rush stats [9]. Multi-week traps: 2016-2017 train, 2018 test through week 12 only—early-season sample, small per-QB n (>=80 attempts filter), rookies highly typical (Allen, Darnold, Rosen) [PAGE 7], week 12 cutoff means late-season dynamics/cold weather not captured.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is more of a football/game theory framing. Quarterback reads in progression (primary, secondary, alternate) [PAGE 11]. Model snapshot at release penalizes QBs who follow progression but read opens later [PAGE 11]. Crisis habit regression: under duress binary variable, QBs regress to check-downs/safe reads [PAGE 6, 11]. Counter-trap: defense conceals, offense conceals; model tries to read intent [PAGE 5]. Clock: 10 Hz tracking, near real-time API [PAGE 3]; snapshot at release ignores pre-release development [PAGE 11]; time/score not in model [PAGE 9]. Need to discuss recursive theory of mind: QB models defense modeling QB, etc.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Shoulder orientation from RFID [PAGE 3]. QB shoulder orientation excluded as cheating [PAGE 4]. Pass rush duress binary only—limitation [PAGE 11]. Receiver size/strength not accounted [PAGE 11]. Weather not mentioned in paper—veto: outdoor games, wind, precipitation affect passing but not in inputs [PAGE 3 inputs: down, distance, yard line, duress, play-action; no weather]. Biomechanical: release time, throwing velocity not in inputs [PAGE 2]. Physical: field orientation, lateral symmetry augmentation vs handedness [PAGE 4].

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or just verifiable scenarios. I'll frame as counterfactual vetoes:
1. Weather veto: If wind speed > threshold or precipitation, model's expected yards/target probabilities degrade because tracking geometry doesn't capture aerodynamics; prediction: out-of-sample error increases in Week 10-12 cold/windy games vs dome/early season.
2. Pass-rush granularity veto: Binary duress insufficient; if pressure hits QB before release but model sees open receiver, it will recommend targeted receiver that QB cannot physically reach; prediction: model overestimates completion probability under high pressure, especially for less mobile QBs.
3. Progression/timing veto: Snapshot at release misses route development; QB correctly progresses to secondary read that opens after release; model flags as missed open receiver; prediction: model penalizes systematic progression QBs (e.g., Brees? or west coast) and rewards hold-and-wait QBs; mislabels good process as error.

I must ensure no betting lines. No mention of spreads, totals, moneylines, odds. I can mention probabilities but not betting odds.

I need to ensure total words >= 1000. I'll write generously.

Let me draft each section carefully with page citations.

Word count planning:
- THINK_TRACE: ~450-550 words.
- SOURCE_OPERATORS_AND_EQUATIONS: ~350-450 words.
- RETROCAUSAL_GENEALOGY: ~250-350 words.
- RECURSIVE_THEORY_OF_MIND: ~250-350 words.
- CROSS_LAYER_VETO_ADJUDICATION: ~250-350 words.
- RLVR_COUNTERFACTUAL_VETOES: ~200-300 words.
Total ~1800+. Good.

Let's write.

Need to be careful with verbatim quotes and page markers. The source text page numbers: I see footers like "2019 Research Papers Competition Presented by: 1" then "2" etc. Actually the format is page footer then page number on next line? Let's just use [PAGE 1] etc. corresponding to the numbered pages in the document.

Quotes:
- [PAGE 1]: "correctly identifying the targeted receiver in 60% of cross-validated cases. When passers target the predicted receiver, passes are completed 74% of the time, compared to 55% when the QB targets any other receiver."
- [PAGE 1]: "Although mental abilities are important for every position, quarterback is unique in that psycho-cognitive abilities rival physical abilities in regards to successful performance."
- [PAGE 2]: "Model input is a snapshot of player configuration at the time of pass release..."
- [PAGE 2]: "Variant 1 estimates the probability the quarterback will target each of the five eligible receivers..."
- [PAGE 3]: "Player position, velocity, acceleration, and orientation is provided at 10Hz..."
- [PAGE 3]: "Overall, 45,501 pass attempts were used to train, and validate the models."
- [PAGE 3]: "The test data was built from the 2018 regular season through week 12 (n=10,623)."
- [PAGE 4]: "The general model consists of a four-layer network... An input layer of 230 nodes... dense hidden layer of 256 neurons... second dense hidden layer of 128 neurons..."
- [PAGE 4]: "The orientation of the quarterback was deliberately excluded from the inputs... 'cheating'..."
- [PAGE 5]: "The model predicts the actual target with an accuracy of 59.8% – three times the naïve estimate for a one-in-five proposition."
- [PAGE 5]: "Further, when quarterbacks target the receiver as predicted by DeepQB, the completion rate is 74%. This compares to a completion rate of 55%..."
- [PAGE 6]: "Yards Per Attempt (YPA) when quarterbacks target the predicted receiver is significantly lower than when he targets another receiver (7.8 vs 8.0 YPA)."
- [PAGE 6]: "the typical (league average) quarterback is most likely too cautious in his reads."
- [PAGE 6]: "For each play, quarterback decision-making can be assessed by determining whether the quarterback targeted the receiver with the maximum expected yardage."
- [PAGE 7]: "there is a weak negative correlation between the 'typicality' of a quarterback's targeting decisions and the value he adds above the potential provided by his receivers(r=-0.30)."
- [PAGE 7]: "Aaron Rodgers may attempt more unorthodox, aggressive targeting because he can..."
- [PAGE 8]: "Considering just completions and incompletions, the model appears well-calibrated..."
- [PAGE 8]: "This is substantially due to the exclusion of deliberate 'throw-away' passes from the data..."
- [PAGE 9]: "Because expected interception rates... are lower than the actual interception rates of high-interception quarterbacks, it follows that interceptions in the NFL are primarily a result of inaccurate throws and random sample error rather than bad targeting decisions."
- [PAGE 10]: "Overall accuracy specific to Brees' 2018 pass attempts rose to 64%."
- [PAGE 11]: "Receiver talents and skills are not fully accounted for. Although aspects of receiving such as route running and speed can be captured by the model, other aspects such as the size and strength of receivers is a factor..."
- [PAGE 11]: "All variants of the model currently rely solely on a binary 'QB duress' variable..."
- [PAGE 11]: "Limiting the picture to the two nearest defenders to each receiver was another modeling decision..."
- [PAGE 11]: "This model may be penalizing a quarterback who makes the correct read in the planned progression..."
- [PAGE 2]: Hochstedler Voronoi, 224 plays.

Now equations:

Let x ∈ ℝ^{230} be the feature vector at pass release [PAGE 4]. For Variant 1:
p̂ = softmax(f_θ(x)), f_θ: ℝ^{230} → ℝ^5.
L_CE(θ) = - (1/N) Σ_{n=1}^N Σ_{k=1}^5 y_{nk} log p̂_{nk}.
Accuracy = (1/N_test) Σ 1[argmax_k p̂_{nk} = y_n] = 0.598 [PAGE 5].
Baseline p_chance = 1/5 = 0.20.
Conditional completion: P(C=1 | T = argmax p̂) = 0.74 vs P(C=1 | T ≠ argmax p̂) = 0.55 [PAGE 5].
YPA conditional: E[Y | T=argmax] = 7.8 vs E[Y | T≠argmax] = 8.0 [PAGE 6].

Variant 2:
ŷ_k(x) = E[Yards | x, target=k], ŷ_k ∈ ℝ (yards).
ΔYPA_i = YPA_i(actual) - (1/N_i) Σ_{n∈i} ŷ_{overall}(x_n) [PAGE 6].
ρ_i = ŷ_{targeted}(x) / max_k ŷ_k(x), ρ ∈ [0,1] if nonnegative; breakdown if ŷ_k can be negative (sacks, though targeted passes exclude sacks? Actually targeted pass attempts only) [PAGE 6].
Correlation r = -0.30 between typicality and value added [PAGE 7].

Variant 3:
q = softmax(g_φ(x)) over {complete, incomplete, interception}, q ∈ Δ^2.
Calibration: P(Y=c | q_c ≈ p) → p.
λ̄_i = (1/N_i) Σ q_interception(x_n) [PAGE 9].
Expected completion above: C_abv = C_actual - E[C | x, targeted] [PAGE 8].

Variant 4:
θ_lower frozen from all QBs; θ_upper^(i) fine-tuned on D_i (single QB). Acc_i = 0.643 for Brees [PAGE 10, Table 5].

Units: probabilities dimensionless; yards in yards; frequency 10 Hz; counts dimensionless; correlation r dimensionless; cross-entropy in nats (natural log).

Breakdown regimes:
- If I(Y; X | concealment) → 0 (offense perfectly hides, defense perfectly covers), p̂ → uniform, accuracy → 0.20 [PAGE 5].
- If interception base rate → 0, absolute int count noisy; need probability estimates [PAGE 9].
- If per-QB sample n_i too small, Variant 4 overfits; transfer learning mitigates but cannot fully separate scheme from individual [PAGE 10, 11].
- If duress is binary and pressure arrives after snapshot but before arrival, model mis-specifies constraint [PAGE 11].
- Lateral symmetry augmentation assumes handedness invariance; breaks for right/left-handed QBs throwing on the run [PAGE 4].

Now writing the sections. I'll avoid mentioning betting. I'll use "probability" not "odds."

Let's produce final answer. Ensure XML tags exactly as specified. No extra text outside.

Check: ">= 1,000-WORD DEPTH across these exact XML sections". I'll make each section thick.

I will now compose.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The core analytic chain in DeepQB begins with the claim that quarterback psycho-cognitive processing rivals physical attributes in importance [PAGE 1], yet prior methods could not separate individual quarterback impact from teammates, scheme, and opponents [PAGE 1]. The paper’s first hop is representational: reduce each pass play to a snapshot at release time, x ∈ ℝ²³⁰, comprising receiver/defender position, velocity, acceleration, orientation, quarterback position and velocity (orientation excluded to prevent target leakage), play metadata (down, distance, yard line), and binary duress/play-action flags [PAGE 2-4]. The second hop is architectural: a 230-256-128-output feedforward network with ReLU, batch normalization, and dropout, trained with mirror augmentation under the lateral-symmetry assumption [PAGE 4]. The third hop is inferential: Variant 1 maps x to a distribution over five eligible receivers and achieves 59.8% target-prediction accuracy, three times the one-in-five naïve baseline [PAGE 5]. The fourth hop is conditional-outcome analysis: targeting the model’s preferred receiver coincides with a 74% completion rate versus 55% otherwise, yet expected yards per attempt on those same plays is lower (7.8 vs 8.0) [PAGE 5-6]. The paper resolves this paradox by positing league-average quarterback excessive caution—safer reads at the expense of efficiency [PAGE 6].

Gray-zone audit reveals several fracture points. First, the snapshot-at-release assumption conflicts with the progression-read pedagogy of the position: quarterbacks are taught to sequence primary, secondary, and alternate reads, so a receiver who opens after the quarterback’s scheduled step may be labeled “missed” by a release-time model even when process was correct [PAGE 11]. Second, mirror augmentation assumes lateral symmetry of target selection, which breaks down with quarterback handedness and on-the-run mechanics [PAGE 4]. Third, the binary duress variable cannot capture pressure timing, rush lane, or blocker displacement; a receiver geometrically open at release may be unreachable if pressure collapses before ball arrival [PAGE 11]. Fourth, Variant 2 estimates expected yardage separately from interception probability, so high-interception targets can appear more lucrative than their risk-adjusted net value [PAGE 11]. Fifth, receiver size, strength, and contested-capture ability are not fully represented, though route running and speed enter via tracking [PAGE 11]. Sixth, weather variables are absent entirely from the input vector despite outdoor stadium exposure [PAGE 2-3]. Seventh, the test set is restricted to 2018 through week 12 (n=10,623), a non-stationary early/mid-season window that excludes late-season cold-weather dynamics and playoff intensity [PAGE 3]. Eighth, per-quarterback samples are too small for standalone training, forcing transfer learning in Variant 4 and leaving open whether individual accuracy gains reflect cognition, scheme, or receiver deployment (e.g., Brees targeting running backs by design) [PAGE 10-11]. Ninth, throw-away passes are excluded from calibration, which inflates completion metrics relative to true attempt-level accuracy [PAGE 8]. Tenth, the weak negative correlation (r=-0.30) between targeting “typicality” and value added suggests aggressive, skillful quarterbacks may look atypical because they can execute unorthodox reads, introducing selection bias that the observational design cannot fully untangle [PAGE 7].

These gray zones imply that DeepQB measures decision-making conditional on a constrained feature set, not decision-making simpliciter. The model’s information-theoretic ceiling is bounded by offensive concealment and defensive coverage: if intent is perfectly hidden and no receiver is disproportionately open, mutual information I(Target; X) approaches zero and accuracy collapses toward the 0.20 chance baseline [PAGE 5]. The paper’s strongest causal-sounding claim—that interceptions are primarily inaccurate throws and random error rather than bad targeting—rests on comparing modeled interception probabilities against actual rates, but it does not account for time/score risk context, which materially alters optimal aggressiveness [PAGE 9].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX equations, units, page citations, and breakdown regimes.

Define the pass-release feature vector:
x_n ∈ ℝ²³⁰, n = 1,...,N [PAGE 4].
Inputs include receiver position, velocity, acceleration, orientation; two nearest defenders per receiver; quarterback position and velocity (orientation excluded); down, distance to gain, yard line; binary QB duress; binary play-action flag [PAGE 2-4].
Sampling frequency: 10 Hz RFID tracking from Next Gen Stats [PAGE 3].
Dataset: N_total = 45,501 targeted pass attempts from 2016–2017 NFL regular and post-seasons [PAGE 3]. Train/validation split: n_train = 24,414, n_val = 10,464 (70/30) [PAGE 3]. Test set: 2018 regular season through week 12, n_test = 10,623 [PAGE 3].

Variant 1 — target selection (multiclass classification, K = 5):
Network mapping f_θ: ℝ²³⁰ → ℝ⁵, output logits z = f_θ(x).
Posterior over receivers: p̂_k = exp(z_k) / Σ_{j=1}⁵ exp(z_j), p̂ ∈ Δ⁴ (probability simplex, dimensionless).
Loss: L_CE(θ) = −(1/N) Σ_{n=1}^N Σ_{k=1}⁵ y_{nk} log p̂_{nk}, units: nats.
Decision rule: T̂_n = argmax_k p̂_{nk}.
Reported test accuracy: (1/n_test) Σ 1[T̂_n = T_n] = 0.598 [PAGE 5].
Naïve baseline: p_chance = 1/5 = 0.20 (dimensionless). Relative gain: 0.598 / 0.20 ≈ 2.99× [PAGE 5].
Conditional completion rates: P(C=1 | T = T̂) = 0.74 vs P(C=1 | T ≠ T̂) = 0.55 [PAGE 5]. Difference: ΔP = 0.19 (dimensionless).
Conditional yards per attempt: E[Y | T = T̂] = 7.8 yards vs E[Y | T ≠ T̂] = 8.0 yards [PAGE 6].
Breakdown/singularity: If offensive concealment and defensive coverage drive I(Target; X | concealment) → 0, then p̂ → uniform and accuracy → 0.20 [PAGE 5].

Variant 2 — expected yards (regression per receiver):
For each receiver k: ŷ_k(x) = E[Yards | x, target = k], ŷ_k ∈ ℝ, units: yards [PAGE 6].
Quarterback value added: ΔYPA_i = YPA_i(actual) − (1/N_i) Σ_{n∈i} ŷ_overall(x_n), units: yards per attempt [PAGE 6].
Targeting efficiency ratio: ρ_i = ŷ_{T_n}(x_n) / max_k ŷ_k(x_n), dimensionless [0,1] if ŷ_k ≥ 0 [PAGE 6].
Example from paper: max available expected yards 9.0, targeted receiver 7.5 → ρ = 7.5/9.0 ≈ 0.83 [PAGE 6].
Reported correlation between targeting typicality and value added: r = −0.30 (dimensionless Pearson) [PAGE 7].
Breakdown: Selection bias—aggressive passers may attempt unorthodox throws because they possess the physical skill to complete them, confounding decision quality with execution capability [PAGE 7]. Variant 2 omits interception risk, so high-mean-interception targets can appear more lucrative than their risk-adjusted utility [PAGE 11].

Variant 3 — pass outcomes (triclass classification):
q = softmax(g_φ(x)) over C = {complete, incomplete, interception}, q ∈ Δ², dimensionless probabilities [PAGE 8].
Calibration condition: P(Y = c | q_c ≈ p) → p for each class c [PAGE 8].
Expected completion rate above model: C_abv,i = C_actual,i − E[C | x, targeted] [PAGE 8].
Mean interception probability for quarterback i: λ̄_i = (1/N_i) Σ_{n∈i} q_interception(x_n), dimensionless [PAGE 9].
Example values: Foles λ̄ = 1.23% vs actual 1.2%; Winston λ̄ = 2.28% vs actual 5.4% [PAGE 9].
Breakdown: Interceptions are a low-base-rate event; absolute counts are noisy, and modeled probability is a more stable estimand [PAGE 9]. Throw-away attempts are excluded from the outcome data, which biases completion-rate calibration upward relative to all dropbacks [PAGE 8]. Time and score (game state) are not inputs, so risk-optimal targeting varies by situation unmodeled [PAGE 9].

Variant 4 — individual quarterback transfer learning:
Lower-layer weights θ_lower trained on all quarterbacks and frozen; upper-layer weights θ_upper^(i) fine-tuned on quarterback i’s own pass attempts D_i [PAGE 10].
Brees-specific accuracy: Acc_Brees = 64.3% on his 2018 attempts vs 59.8% general model [PAGE 10, Table 5].
Breakdown: Per-quarterback sample sizes are insufficient to train from scratch; transfer learning shares intuitive physics (gravity, distance, motion geometries) but risks attributing scheme/receiver effects to individual cognition [PAGE 10-11]. Table 5 shows elite passers (e.g., Brady 46.1%, Rodgers-adjacent Mahomes 49.2%) are least aligned with cyber-Brees, while some lower-performing passers align best, indicating experimental instability or systematic scheme differences (Brees’ running-back check-down design) [PAGE 11].

Architecture and regularization:
Layers: input 230 → dense 256 (ReLU) → batch norm + dropout → dense 128 (ReLU) → batch norm + dropout → output (activation variant-dependent) [PAGE 4].
Hyperparameters selected by grid search; early stopping on validation performance [PAGE 5].
Mirror augmentation: training set reflected about the field’s longitudinal axis, assuming target-selection invariance under lateral symmetry; drawback is quarterback handedness, particularly throws on the run [PAGE 4].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week traps.

DeepQB sits at the end of a short causal chain in sports tracking analytics. The paper explicitly acknowledges that prior public work applied neural networks and machine learning to basketball, soccer, and hockey tracking, but not meaningfully to football [PAGE 2]. The immediate intellectual ancestors are: Cervone et al [1], who built a Markov-model expected-point framework on NBA optical tracking and compared player contribution to actual outcomes [PAGE 2]; Wang and Zemel [2], who used feed-forward and recurrent networks on basketball optical data for play-type recognition [PAGE 2]; Le et al [3], who used deep imitation learning with LSTMs to mimic soccer defender movement and stressed meaningful role representations [PAGE 2]; Harmon et al [4], who converted basketball tracking into multi-channel images for a CNN combined with a feed-forward network to predict shot making [PAGE 2]; Lucey et al [5], who used conditional random fields on soccer tracking to estimate shot success probability for team-level assessment [PAGE 2]; and Mehrasa et al [6], who applied 1D convolutional networks to basketball and hockey trajectories for play recognition and team classification [PAGE 2]. The single football-specific precursor is Hochstedler [7], who used Voronoi tessellation on only 224 plays to partition field ownership by nearest player and assess receiver openness via area size and defender proximity [PAGE 2]. DeepQB can be read as Hochstedler’s geospatial intuition scaled by deep learning: relative positions and angles replace tessellated area, and a learned classifier replaces heuristic openness scoring [PAGE 2, 4].

Brian Burke’s own prior work forms a retrograde causal loop within the paper: reference [9] is his ESPN pass-rusher/pass-blocker statistics, which DeepQB plans to integrate for a more complete pass-protection picture [PAGE 11]; reference [10] is his Expected Points and Expected Points Added framework, which DeepQB will eventually adopt as the consensus utility function to replace raw expected yardage [PAGE 11]. Thus the paper’s future development section explicitly cites its own lineage as necessary to fix Variant 2’s failure to combine yardage expectation with interception probability [PAGE 11].

Multi-week traps are embedded in the data protocol. Training uses 2016–2017 regular and post-seasons; testing uses only 2018 regular season through week 12 [PAGE 3]. This creates a temporal mismatch: early-season offensive continuity, weather regimes, and quarterback-coach chemistry differ from late-season and postseason conditions, yet no out-of-sample test beyond week 12 is reported. The quarterback table in Variant 2 filters to passers with at least 80 attempts, which privileges starters and excludes injury replacements and bench switches that cluster later in the season [PAGE 7]. Rookie quarterbacks (Allen, Darnold, Rosen) appear highly “typical” in targeting decisions, while Mayfield is the exception [PAGE 7]; this may reflect limited playbook progression or small-sample convergence to safe reads rather than mature decision-making, a trap for any cross-season generalization. The week-12 cutoff also excludes December cold and January playoff stakes, meaning the model’s claimed near-real-time viability [PAGE 1] has not been verified under high-leverage, adverse-weather conditions.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and clock.

Recursive theory of mind in DeepQB operates at three nested levels. Level zero is the quarterback’s internal model of the defense: given receiver and defender geometries at release, where should the ball go? Level one is DeepQB’s model of that quarterback: given the same snapshot, what would a typical passer target? Level two is the defense’s model of the quarterback’s model: coverage disguises and pre-snap movement designed to prevent any single receiver from becoming a disproportionately rewarding target [PAGE 1, 5]. The paper notes that offenses conceal intent by design while defenses avoid allowing open receivers, which makes the 59.8% prediction accuracy notable [PAGE 5]. This is a counter-trap structure: DeepQB attempts to invert offensive concealment using tracking geometry alone.

Crisis habit regression appears in the duress modeling. All variants currently rely solely on a binary “QB duress” variable to represent pass-rush constraint [PAGE 11]. Under crisis pressure, quarterbacks regress to habit—check-downs, early progression exits, or throw-aways. The paper finds league-average quarterbacks are “too cautious,” favoring safer reads at the expense of efficiency [PAGE 6]. This caution may be a rational crisis habit: a binary duress flag cannot distinguish a clean pocket from imminent collapse, so the model may recommend targets that are geometrically open but chronologically unreachable. The 74% vs 55% completion split [PAGE 5] reflects that model-aligned targets are lower-risk, while the lower YPA (7.8 vs 8.0) [PAGE 6] reveals the efficiency cost of that risk aversion.

The clock problem is twofold. First, tracking data arrive at 10 Hz via near-real-time API [PAGE 3], but the model consumes only a single snapshot at pass release [PAGE 2]. Route concepts develop continuously; a receiver open at stem may be covered by release, and vice versa. Because quarterbacks are taught progression reads—primary, secondary, alternate—a model anchored at release may penalize correct process when the open window arrives after the quarterback’s scheduled read step [PAGE 11]. Future variants may require LSTM-style continuous assessment through the play [PAGE 11]. Second, game clock and score are absent from inputs [PAGE 8-9], so the model cannot distinguish a third-quarter check-down from a two-minute-drill desperation target. Interception analysis explicitly concedes that time and score have a large influence on optimum risk level yet are unaccounted for [PAGE 9]. Thus DeepQB’s theory of mind is acausal with respect to game state: it evaluates geometry without knowing how much time remains or what the scoreboard demands.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto proofs.

Physical layer veto: RFID chips in shoulder pads record position, velocity, acceleration, and orientation at 10 Hz [PAGE 3]. Shoulder orientation is available and useful for pass dynamics, but quarterback shoulder orientation is deliberately excluded from inputs because it would correlate strongly with intended target direction and constitute “cheating” [PAGE 4]. This is a necessary information-theoretic veto: including release orientation would leak the label. However, it also discards a biomechanical cue—quarterback release mechanics and throwing-arm angle—that could separately estimate ball velocity and placement, not merely target choice.

Biomechanical layer veto: Receiver talents and skills are not fully accounted for. Route running and speed enter through tracking, but receiver size, strength, and contested-catch ability influence reception probability and yardage and are absent [PAGE 11]. A model may assign high expected yards to a receiver whom a smaller defensive back cannot cover, yet if the actual receiver lacks strength to win at the catch point, the prediction fails. Similarly, quarterback throwing velocity, release time, and arm strength are not in the 230-node vector; only position and velocity are included [PAGE 2-4]. A receiver may be geometrically open but require a throw outside the quarterback’s physical capability under duress.

Weather layer veto: The input vector contains down, distance, yard line, duress, and play-action [PAGE 2], but no weather variables—wind speed, precipitation, temperature, or stadium type (dome vs outdoor) [PAGE 2-3]. DeepQB claims near-real-time live-game applicability [PAGE 1], yet an outdoor game in November with crosswind and precipitation changes passing aerodynamics, ball grip, and receiver footing without altering tracked player geometry. Any deployment in such conditions lacks a physical covariate shift correction, constituting a veto on out-of-sample environmental generalization until weather is integrated.

Pass-protection layer veto: Limiting defensive inputs to the two nearest defenders per receiver was a tractability choice [PAGE 11]. Review suggested the model can still piece together a relatively complete picture, but future versions should include all eleven defenders and their inter-relationships [PAGE 11]. Until then, a free rusher from an unmodeled angle can invalidate the release-time snapshot: a receiver may be open at release but the quarterback is hit before delivery, a scenario the binary duress variable cannot resolve [PAGE 11].

These vetoes are not failures of the paper but boundary conditions: DeepQB quantifies decision-making within a constrained physical and informational envelope. Any claim that it isolates quarterback skill “separate and apart from receivers and defense” [PAGE 1] is bounded by these omitted layers.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR (reinforcement learning from verifiable rewards) counterfactual veto scenarios with predictions.

Veto scenario 1 — Weather-induced geometry decay. Counterfactual: hold quarterback, receiver routes, and defensive coverage fixed, but introduce wind speed above 15 mph or precipitation. Verifiable reward signal: model’s expected-yards and target-probability outputs remain unchanged because weather is not an input [PAGE 2-3], while actual completion and yardage deteriorate aerodynamically. Prediction: In 2018 weeks 10–12 outdoor games with measured wind/precipitation, DeepQB’s Variant 2 expected-yardage error (|actual YPA − expected YPA|) will be significantly higher than in dome or calm-weather games, and Variant 1 target-selection accuracy will drop below the 59.8% test-set mean [PAGE 3, 5]. This is directly verifiable by merging game-day weather records with the 2018 test set.

Veto scenario 2 — Pass-rush timing veto. Counterfactual: two plays with identical release-time snapshots and identical open-receiver geometry, but on play A pressure arrives after ball release and on play B pressure arrives before release (binary duress flag may be identical or mis-timed). Verifiable reward signal: Variant 3 completion/interception probabilities will be identical across A and B because the model cannot distinguish pressure onset relative to release [PAGE 11]. Prediction: Play B will exhibit materially lower completion probability and higher interception or sack-adjacent incompletion rates than play A; DeepQB will systematically overestimate completion probability under late-arriving pressure, especially for quarterbacks with below-average mobility. Verifiable by charting pressure arrival time versus release time in the 2018 test film.

Veto scenario 3 — Progression-read timing veto. Counterfactual: a quarterback follows a scripted progression (primary → secondary → alternate) and correctly throws to the secondary read that opens after his primary read’s window closes, at the moment of release. Verifiable reward signal: Because the model is a release-time snapshot, it sees the primary receiver as covered at release and the secondary as the actual target; however, if the model’s “open receiver” assessment is based on who *should* have been targeted given the full release-time geometry, it may flag the quarterback for not throwing to a receiver who was open earlier but is now covered [PAGE 11]. Prediction: Quarterbacks with disciplined, progression-based offenses (e.g., West-Coast systems) will be systematically underrated in target-prediction accuracy and “value added” metrics relative to quarterbacks who hold the ball for late-breaking deep targets, even when the former’s process is correct. Verifiable by comparing Variant 1 errors against play-by-play route-tree annotations for progression-specific passers in the 2018 sample.
</RLVR_COUNTERFACTUAL_VETOES>