---
source: "2025 - Transformer-Based Baseball Modeling for Pitch Outcome Prediction and Strategy Optimization - Declan.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2025"
pages: 19
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 6756
---

<NATIVE_REASONING>
The user wants a deep, multi-hop reasoning analysis of the provided research paper. I need to produce output in specific XML sections with strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-word depth across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.

Important: The source text provided is Markdown extracted from a PDF with page markers in the text (1, 2, ... 23). I need to cite exact [PAGE N] markers and verbatim quotes.

Let me structure this carefully.

First, understand the paper:
- Title: Transformer-Based Baseball Modeling for Pitch Outcome Prediction and Strategy Optimization - Declan
- MIT SSAC 2025 Research Paper Competition
- 23 pages (source text shows up to page 23)
- Model: Transformer encoder, 12 layers, ~800k parameters, input sequences of 400 consecutive pitches, each pitch 87-dim feature vector.
- Tasks: Pitch result (10 classes), Hit location (9 classes), continuous features (launch angle, exit velocity, hit coords) - but continuous were found less accurate and not used in final outputs.
- Loss: 0.7(L_PitchResult + L_HitLocation) + 0.3 L_Continuous (cross entropy + MSE). The text has garbled notation but the meaning is clear.
- Data: Statcast via pybaseball, 2015-2024 MLB. Train/val 2015-2022, test 2023-2024.
- Sequences grouped by batter, chronological by game date, at-bat number, pitch number. Sliding window 400 pitches, 1-pitch overlap.
- Sub-token masking on final pitch: outcome dims masked (result, hit location, launch speed, hit coords), unmasked: velocity, spin, release point.
- Baselines: Historical average (2022 distribution), XGBoost on individual pitches without sequential context.
- Metrics: Top-4 precision. Results tables for pitch outcomes and hit locations.
- Player adaptability: Aaron Judge (power) and Luis Arraez (contact), Tables 3-6.
- Optimal Pitch Selection Framework: Simulate all feasible pitch type x zone combinations (13 zones), append as 400th pitch, score S = w1*sum(P_desired_outcome) + w2*sum(P_desired_location) - w3*sum(P_undesired_outcome) - ... (garbled LaTeX). Case study: Ohtani vs Cole (scenarios 1-3), Ohtani vs Santos.

Now, constraints:
- No betting lines. I must avoid "odds", "spreads", "totals", "moneylines". I can talk about probabilities, precision, run value, expected counts, but not betting odds.
- No toy equations. I must use real formal LaTeX. I can reproduce the paper's loss and score equations but must clean them up formally and state assumptions, units, breakdown regimes.
- Citations: [PAGE N] markers. The source text has page numbers embedded like "1", "2", ... "23" at various points. I should cite them.

Let's map content to pages:
- Page 1: Title, Intro start. "Baseball 20251439" maybe page header. Text starts page 1.
- Page 2: Related Work continues? Actually text: after intro page 1, page 2 has Related Work and Methods start.
- Page 3: Methods 3.1 Data, Figure 1 mention.
- Page 4: Sequence Modeling 3.2, Model Architecture 3.3 start.
- Page 5: Architecture details, Figure 2 mention, ~800k params, 24-dim output.
- Page 6: Figure 2, Model Training 3.4 start.
- Page 7: Single Pitch Prediction 3.4.1, Sub-Token Masking 3.4.2, Loss Function 3.4.3 (garbled equation).
- Page 8: Training Procedure 3.4.4, Results 4 start.
- Page 9: Top-K Precision 4.1, rationale, results Table 1.
- Page 10: Table 1 discussion, Table 2 hit locations.
- Page 11: Table 2 discussion, Model Adaptability 4.2 start, Table 3 Aaron Judge.
- Page 12: Table 3 continued? Actually Table 3 rows split across 11-12. Text discussion Judge.
- Page 13: Table 4 Luis Arraez, discussion.
- Page 14: Table 5 Judge hit locations, discussion.
- Page 15: Table 6 Arraez hit locations, discussion, Optimal Pitch Selection Framework 4.3 start.
- Page 16: Framework details, Equation 1 Pitch Score, Case Study start Scenario 1.
- Page 17: Scenario 1 continued (Cole recommendations), Figure 3 mention, Scenario 2 start.
- Page 18: Scenario 2 continued (Santos), Scenario 3 start.
- Page 19: Scenario 3 continued, Figure 6, Figure 7 mention.
- Page 20: Conclusion 5, Future Work 5.1 start.
- Page 21: Future Work continued, References 6 start.
- Page 22: References continued, Appendix A start.
- Page 23: Appendix B and C tables.

I need to be careful: The prompt says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I should reference [PAGE 7] etc.

Now the sections:

<THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
Need to do deep derivation. Multi-hop: connect data -> architecture -> masking -> loss -> metrics -> case study -> limitations. Gray-zone audit: where the paper is ambiguous, where garbled LaTeX occurs, where "roughly 800,000 parameters" is vague, where continuous features are included but discarded, where top-4 precision doesn't tell calibration, where the "playerless" pitcher limitation is acknowledged but not fixed, where 13 zones are arbitrary, where averaging continuous features for simulation may break realism, where sliding window with 1-pitch overlap creates massive data leakage / near-duplicate sequences (this is a critical gray zone: sequences shifting by 1 pitch means 399/400 overlap, causing severe autocorrelation and over-optimistic validation if not handled by player/game splits). Also, test set 2023-2024 but analysis mostly 2023. The model is "playerless" regarding pitcher (future work admits this). The sub-token masking replaces continuous with global mean, which may create distribution shift at inference if the true pitch characteristics differ? No, unmasked features are observed. But masking outcome with global mean for continuous might bias attention. Also, top-4 precision with class imbalance: for rare events like Triple, all models get 0. The historical baseline "randomly sampling 4 events" is a weird baseline for top-4 precision (expected value depends on distribution). The paper says "historical average baseline in this case makes predictions by randomly sampling 4 events using the historical distribution" - this is a stochastic baseline, not a deterministic mean distribution, which makes comparison slightly unfair or at least odd. The loss function notation is corrupted in the PDF extraction; we cannot recover exact weights from the garbled text beyond 0.7 and 0.3. The equation for pitch score S is also garbled. These are gray zones.

>=400 words in THINK_TRACE. I'll aim for ~600-800 words.

<SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.
Need to write formal LaTeX equations:
- Input feature vector: x_t ∈ R^87. Standardized continuous, one-hot categorical.
- Sequence: X = [x_{t-399}, ..., x_t] ∈ R^{400 × 87}. Sliding window stride 1.
- Positional encoding: PE(pos, 2i) = sin(pos/10000^{2i/d_model}), PE(pos, 2i+1) = cos(...). (Vaswani).
- Transformer encoder: 12 layers, multi-head self-attention: Attn(Q,K,V) = softmax(QK^T / sqrt(d_k)) V. Residual + LayerNorm.
- Final pitch handling: h_T = TransformerEncoder(X)_{-1}; z = [h_T; W x_t + b] maybe concatenation. Then FC layers ReLU.
- Output: ŷ ∈ R^{24}. Categorical: pitch result p_result ∈ Δ^{9} (10 classes, so simplex dimension 9), hit location p_loc ∈ Δ^{8} (9 classes). Continuous: launch angle, exit velocity, coords (but discarded).
- Loss: L = 0.7 (CE_result + CE_loc) + 0.3 MSE_cont. Units: CE in nats (or bits if log2, but PyTorch CrossEntropyLoss uses natural log -> nats), MSE in (units)^2 e.g., (mph)^2 for exit velocity, (degrees)^2 for launch angle, (feet)^2 for coords.
- Sub-token masking: M(x_t) where outcome dimensions replaced by global mean μ or zero + mask indicator.
- Pitch score: S(pitch) = w_1 ∑_{e∈D} P(e|pitch, context) + w_2 ∑_{l∈L*} P(l|...) - w_3 ∑_{u∈U} P(u|...) ... maybe also hit location penalty. The paper's equation is garbled but describes weighted combination. I'll formalize it cleanly and state assumptions: weights adjustable, probabilities from softmax output, simplex constraints.
- Breakdown regimes: class imbalance -> Triple top-4 precision = 0 for all models (support too small). Rare events (Hit by Pitch, Triple) have high variance. Continuous predictions less accurate, not used. 400-pitch window best among 200/400/600; breakdown if sequence length < 400 for new players (cold start). Pitcher embeddings absent -> cannot condition on pitcher identity, only repertoire averages. 13 zones arbitrary granularity. Simulation assigns average velocity/spin per pitch type; breaks down if pitcher tipping pitches or using non-average velocities in high-leverage situations.

Citations: [PAGE 3] for 87-dim, [PAGE 4] for 400 sequence, [PAGE 5] for 12-layer/800k/24-dim, [PAGE 7] for loss/masking, [PAGE 9] for top-4, [PAGE 15] for framework/equation, [PAGE 16] for scenario weights, [PAGE 20] for future work pitcherless, etc.

<RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.
Lineage: Vaswani et al. 2017 Attention is All You Need [PAGE 21 ref, introduced page 4]. Heaton & Mitra 2021/2023 transformer player embeddings [PAGE 2]. Melville et al. 2023 game theory + RNN OptimusPitch [PAGE 2]. Traditional sabermetrics and "hard in, soft away" heuristic [PAGE 1]. Statcast/pybaseball [PAGE 3]. Crawshaw 2020 multi-task learning survey [PAGE 21 ref].
Multi-week traps: The model trains on 2015-2022 and tests on 2023-2024. A multi-week trap would be distribution shift over a season: batter adjustments, pitcher injuries, mechanical changes, new pitch introductions (e.g., sweeper popularity), sticky substances enforcement, baseball aerodynamic changes. The 400-pitch context window captures recent form but not multi-week trend breaks. If a batter changes stance mid-season, the sliding window mixes pre- and post-adjustment pitches, creating label-context mismatch. The model doesn't explicitly model time-decay or regime change. The test set is 2023-2024 but case studies use 2023 only (Appendix A/B/C are 2023). Multi-week trap: evaluating on a single season may overstate generalization to 2024 or playoffs where contexts differ (high leverage, bullpen games, expanded rosters). Also, train/test split by year, not by game, means temporal leakage is avoided at macro level but the 1-pitch stride means near-identical sequences appear in both training and validation if not grouped properly (the paper doesn't explicitly state sequences are kept within player and not leaked across split; since split is by year, sequences from 2022 train and 2023 test are disjoint by time, but within 2023 test, sequences overlap by 399 pitches, so test examples are highly correlated, inflating effective sample size and variance estimates).

<RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.
This section is about strategic interaction: pitcher and batter adapting to each other. Crisis habit regression: under pressure (e.g., 0-2 count, runner on first), pitchers revert to habitual pitches (fastball away) and batters revert to habitual swings. Counter-trap: anticipating the regression, the pitcher throws something unexpected (e.g., breaking ball low when batter expects fastball up). Clock: game state clock (inning, count, outs, base runners) forces strategic deadlines.
Apply to model: The model conditions on previous 399 pitches (batter's recent history) but not on pitcher's recent history or explicit game-theoretic equilibrium. In Scenario 2 (0-2), model recommends low fastballs for Cole because Ohtani strikes out low and Cole's fastball is effective. But if Ohtani knows Cole loves low fastballs in 0-2 (from scouting), he may sit on it; the model doesn't model Ohtani's counter-adaptation to the model's own recommendation. This is a recursive theory-of-mind failure: the model predicts P(outcome | pitch, context) but the context doesn't include "the batter knows I am using this model." Crisis habit regression: in Scenario 3 (runner on first, ground ball for DP), high-inside cutters aim to jam batter. If batter regresses to crisis habit (protecting plate, swinging at anything near), jamming works. But if batter counter-traps by cheating on the inside cutter, he might pull it or take ball. The clock (inning, outs) changes the value of a DP vs. a walk; the model's loss doesn't incorporate run expectancy or win probability explicitly, only outcome probabilities.
Also, "playerless" pitcher: the model doesn't know the pitcher is Cole vs Santos except via pitch features and averages. So recursive mind-reading of pitcher identity is missing. Future work [PAGE 20] acknowledges this.

<CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.
Cross-layer vetoes: factors that can invalidate model recommendations regardless of statistical prediction.
Physical: Pitcher fatigue over a game/season. Velocity and spin rate inputs are historical averages per pitch type [PAGE 15], so if Cole is fatigued in the 7th inning, his average velocity is wrong; the model recommends based on stale physics. Biomechanical: Release point consistency, arm slot, UCL health. The model uses release point coordinates as input [PAGE 3], but a pitcher altering release point to hide tipping or compensate for injury changes the mapping. Weather: Air density affects spin and movement; cold/humid conditions change exit velocity and hit distance. Statcast captures actual conditions per pitch, but the simulation framework assigns average velocity/spin and doesn't adjust for current temperature/humidity/pressure/wind. Field dimensions: Fenway's Green Monster vs. Coors Field elevation affect hit location probabilities; model's hit location classes are fielder positions, not park-adjusted. The recommended changeup to zone 4 [PAGE 18] may induce a ground ball in the model but in high altitude the ball carries, turning a would-be out into a hit. Umpire strike zone variability: zones are discrete 13 locations [PAGE 14], but actual called strike zone varies by umpire, count, and catcher framing. The model treats zones as deterministic.

<RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning via Verified Rewards? Or some verification framework. I need 3 verifiable veto scenarios with predictions. These should be counterfactual: if X happens, the model's recommendation should be vetoed. And predictions of what happens if not vetoed.

Scenario 1: Pitcher fatigue veto. If Cole's fastball velocity in the current game is >2.5 mph below his seasonal average (used for simulation), veto the low fastball recommendation for Ohtani at 0-2. Prediction: Without veto, model recommends low fastball [PAGE 17]; actual outcome will be elevated hard contact or ball because velo is down and Ohtani can catch up; with veto, recommend breaking ball down or away.

Scenario 2: Weather/park veto. If game is at Coors Field (density altitude high) and the model recommends a changeup up in the zone for a ground ball [PAGE 18], veto because carry reduces ground-ball rate and increases fly-ball/home-run probability. Prediction: model's predicted hit location heatmap concentrates infield [PAGE 19], but counterfactual at Coors yields more outfield flies and lower DP probability.

Scenario 3: Batter model-exposure veto / recursive adaptation. If Ohtani has seen the model's prior recommendations in a series (e.g., scout report says Cole is throwing low fastballs in 0-2), veto the low fastball because the batter has counter-adjusted (sitting dead-red low). Prediction: model's strikeout probability assumes naive batter response; counterfactual yields higher contact rate and lower whiff rate. Alternatively, use the "Hit by Pitch" or "Triple" zero support veto: if predicted event class has zero training support in the relevant context window (e.g., Triple = 0 for all models [PAGE 10]), veto any strategy that depends on Triple prediction. Prediction: top-4 precision = 0 means the model cannot rank triples; any pitch selection optimized to induce/avoid triples is unverifiable and should be vetoed.

Need 3 verifiable scenarios + predictions. I'll phrase them clearly.

Word count: Must be >= 1,000 words across sections. THINK_TRACE >= 400. I'll ensure all sections combined exceed 1000. THINK_TRACE alone maybe 600. Others maybe 150-250 each. Total should be well over 1000.

No betting lines: I won't mention odds, spreads, etc. I'll mention probabilities, precision, run value.

No toy equations: I'll only use real formal LaTeX. I won't invent Force/Fatigue ratios. I'll use proper notation.

Let's draft carefully.

Structure:
```xml
<THINK_TRACE>
...
</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>
...
</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>
...
</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>
...
</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>
...
</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>
...
</RLVR_COUNTERFACTUAL_VETOES>
```

I need to cite [PAGE N] and verbatim quotes where possible.

Let's write THINK_TRACE first. Aim ~700 words.

Key points:
- Data pipeline: Statcast 2015-2024 via pybaseball [PAGE 3]. Train/val 2015-2022, test 2023-2024.
- Sequence construction: grouped by batter, ordered by game date, at-bat, pitch number [PAGE 4]. Sliding window 400, stride 1. This creates N-399 sequences per batter with N pitches. With stride 1, adjacent sequences overlap by 399 pitches (99.75% overlap). This is a gray zone: effective sample size is much smaller than raw count; standard i.i.d. assumptions violated; validation accuracy may be inflated if sequences from same game/player leak across folds (not explicitly addressed).
- Feature vector: 87-dim [PAGE 3]. Continuous standardized, categorical one-hot. Masked final pitch outcome dims [PAGE 7].
- Architecture: 12-layer transformer encoder [PAGE 5], sinusoidal positional encoding [PAGE 4], residual+norm [PAGE 5], final pitch residual concatenation [PAGE 5], ~800k parameters [PAGE 5] (rough estimate, gray zone). Output 24-dim: 10-class pitch result, 9-class hit location, continuous discarded [PAGE 5].
- Loss: 0.7(CE_result + CE_loc) + 0.3 MSE [PAGE 7]. Garbled LaTeX in source; exact formulation not recoverable from text.
- Metrics: Top-4 precision [PAGE 9]. Chosen because Ball/Strike dominate [PAGE 9]. Rare classes (Triple) get 0 across all models [PAGE 10].
- Baselines: Historical average random sample of 4 events [PAGE 9], XGBoost no sequence [PAGE 8].
- Results: Transformer beats XGBoost on Singles (97% vs 86%), Doubles (43% vs 30%), HR (34% vs 23%) [PAGE 9-10]. Player adaptability: Judge HR 25.6 predicted vs 32 actual; Arraez singles 100.42 vs 116 actual [PAGE 11-12].
- Framework: simulate pitch type x 13 zones [PAGE 14-15], score S weighted [PAGE 15], case study Ohtani/Cole/Santos [PAGE 16-19].
- Limitations acknowledged: pitcher context missing [PAGE 20], grouped event categories reduce granularity [PAGE 20], continuous features not useful [PAGE 5].

Gray zones to audit:
1. Garbled equations mean exact loss weights and score function are not precisely stated in extracted text.
2. "Roughly 800,000 parameters" lacks exact count and architectural hyperparameters (heads, d_model, d_ff).
3. 1-pitch stride causes extreme sequence overlap; no mention of blocking by game or player for validation.
4. Sub-token masking replaces continuous outcomes with global mean [PAGE 7]; at inference, if the pitch is a hit, exit velocity/launch angle are unknown anyway (masked), but using global mean during training may bias representations for extreme hitters.
5. "Playerless" pitcher: model cannot condition on pitcher identity, only aggregated pitch features [PAGE 15, 20].
6. Test set 2023-2024 but case studies and tables mostly 2023; no 2024-specific breakdown.

I'll write this in narrative form.

Now SOURCE_OPERATORS_AND_EQUATIONS. Formal LaTeX.

Let's define:
- Let \(t\) index pitches for a fixed batter.
- Raw feature vector \(x_t \in \mathbb{R}^{87}\).
- Standardized continuous: \(\tilde{x}_t = (x_t - \mu)/\sigma\).
- Sequence: \(X = [x_{t-399}, ..., x_t] \in \mathbb{R}^{400 \times 87}\).
- Positional encoding (Vaswani): \(PE_{(pos,2i)} = \sin(pos/10000^{2i/d})\), \(PE_{(pos,2i+1)} = \cos(...)\).
- Attention: \(\text{Attn}(Q,K,V) = \text{softmax}(QK^T/\sqrt{d_k})V\).
- Encoder output for last pitch: \(h_T = \text{TransformerEncoder}(X)_T \in \mathbb{R}^{d}\).
- Final pitch raw features passed through linear: \(g_T = W x_t + b\).
- Concatenation: \(c_T = [h_T; g_T] \in \mathbb{R}^{2d}\).
- MLP: \(o = \text{ReLU}(W_2 \text{ReLU}(W_1 c_T + b_1) + b_2) \in \mathbb{R}^{24}\).
- Outputs: \(\hat{p}^{\text{result}} = \text{softmax}(o_{1:10}) \in \Delta^9\), \(\hat{p}^{\text{loc}} = \text{softmax}(o_{11:19}) \in \Delta^8\), continuous \(\hat{y}_{\text{cont}} = o_{20:24}\) (unused).
- Loss: \(\mathcal{L} = 0.7 [\mathcal{H}(y^{\text{result}}, \hat{p}^{\text{result}}) + \mathcal{H}(y^{\text{loc}}, \hat{p}^{\text{loc}})] + 0.3 \cdot \text{MSE}(y^{\text{cont}}, \hat{y}^{\text{cont}})\). Units: cross-entropy in nats (natural log per PyTorch [PAGE 21 ref]); MSE in \((\text{mph})^2\), \((\text{deg})^2\), \((\text{ft})^2\).
- Masking: For final pitch, outcome dims replaced: continuous with global mean \(\mu_{\text{cont}}\); categorical one-hot zeroed and mask bit activated. Unmasked: velocity, spin, release point remain.
- Pitch score: \(S = w_1 \sum_{e \in \mathcal{D}} \hat{P}(e | \text{pitch}, X) + w_2 \sum_{\ell \in \mathcal{L}^*} \hat{P}(\ell | ...) - w_3 \sum_{u \in \mathcal{U}} \hat{P}(u | ...) - w_4 \sum_{m \in \mathcal{M}} \hat{P}(m | ...)\). The paper's Equation 1 is garbled [PAGE 15], so this is a formal reconstruction with assumptions: weights sum not constrained, probabilities from model softmax, \(\mathcal{D}\) desired events, \(\mathcal{U}\) undesired events, \(\mathcal{L}^*\) desired locations, \(\mathcal{M}\) undesired locations.
- Breakdown regimes: (a) class-support collapse: Triple top-4 = 0 for all models [PAGE 10]; (b) cold start: batter with <400 pitches cannot form a full sequence; (c) distribution shift: pitcher fatigue/weather not modeled; (d) simulation assumes average velocity/spin per pitch type [PAGE 15], invalid under non-stationary pitcher mechanics.

Citations throughout.

RETROCAUSAL_GENEALOGY:
- Lineage: Vaswani 2017 [PAGE 4, 21]; Heaton & Mitra 2021 player embeddings [PAGE 2]; Heaton & Mitra 2023 contextual event embeddings, 64-dim [PAGE 2]; Melville et al. 2023 game theory + RNN OptimusPitch [PAGE 2]; traditional heuristics "hard in, soft away" [PAGE 1]; multi-task learning survey Crawshaw 2020 [PAGE 21].
- Multi-week traps: Seasonal drift (batter mechanical changes, pitcher velo changes, new pitch adoption). The model uses 400-pitch window but no explicit time decay; old pitches weighted equally with recent. If a batter changes approach in week 5, pitches from week 1 still influence context equally. Train/test split by year [PAGE 3] avoids temporal leakage at year boundary but not within-season regime shifts. Case study uses 2023 data [PAGE 16, Appendices A-C 2023]; no 2024 validation, so multi-week generalization to late-season or playoffs untested. Overlapping test sequences (stride 1) create pseudo-replication; variance of top-4 precision is underestimated.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: Under high leverage (0-2, runner on first), pitchers revert to highest-trust pitch (Cole fastball [PAGE 17 Appendix B]); batters revert to protective swings.
- Counter-trap: If batter knows pitcher's crisis habit, he can sit on it. Model recommends low fastballs for Ohtani at 0-2 [PAGE 17] because Ohtani Ks low and Cole's fastball is strong [Appendix B]. But if Ohtani anticipates low fastball, he may cheat, turning a predicted strikeout into contact. The model lacks a second-order belief state: P(outcome | pitch, context, batter believes pitcher will use model recommendation).
- Clock: Inning, outs, count, base occupancy impose deadlines. Scenario 3 wants ground ball for DP [PAGE 18]. But the clock (e.g., bottom 9th, 2 outs) changes the value of a DP vs. walk vs. HR. The loss function does not include run expectancy or win probability; it only optimizes outcome probability. Thus in late-game crisis, the model may recommend a high-risk pitch that maximizes DP probability but also maximizes HR risk, without weighing the clock-dependent asymmetry.
- Playerless pitcher [PAGE 20]: The model cannot infer that Gregory Santos relies on slider (Appendix C) except through pitch features. So recursive modeling of pitcher identity is absent; the simulation uses averages, not the pitcher's actual crisis tendencies.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical veto: Pitcher fatigue changes velocity/spin; simulation uses historical averages [PAGE 15]. If current-game velo deviates >X, recommendation invalid.
- Biomechanical veto: Release point, arm slot, injury. Input includes release point [PAGE 3], but a mid-game mechanical tweak invalidates the mapping.
- Weather veto: Air density, temperature, wind alter ball flight and exit velocity; hit location classes assume average park conditions. Coors vs. Fenway.
- Park veto: 13 discrete zones [PAGE 14]; actual strike zone is umpire-dependent and count-dependent. The model treats zone as deterministic.
- Veto hierarchy: If any physical/weather layer disagrees with the statistical recommendation, veto. Example: low fastball recommendation at 0-2 [PAGE 17] vetoed if Cole's velo is down 3 mph due to fatigue.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable veto scenarios + predictions.

Scenario 1 (Velocity/Fatigue veto):
- Condition: Gerrit Cole's average 4-seam fastball velocity in the current game is more than 2.0 mph below his 2023 seasonal average used in simulation [PAGE 15, Appendix B].
- Veto: Reject model's low fastball recommendation for Ohtani at 0-2 [PAGE 17].
- Counterfactual prediction: If not vetoed, the lower observed velocity increases Ohtani's contact probability and reduces whiff rate; expected outcome shifts from strikeout toward foul ball or in-play contact, contrary to model's high strikeout probability. If vetoed and replaced with slider/breaking ball down, whiff probability should rise relative to the fatigued fastball.
- Verifiable: Compare Cole's in-game fastball velo (Statcast) to seasonal average; track actual outcome of low fastballs vs. model prediction.

Scenario 2 (Park/Weather veto):
- Condition: Game at Coors Field with high density altitude (low air density) and model recommends a changeup to zone 4 to induce ground ball for double play [PAGE 18].
- Veto: Reject because reduced drag increases carry; ground-ball rate declines and fly-ball/home-run probability rises.
- Counterfactual prediction: Model's hit-location heatmap concentrates infield [PAGE 19]; counterfactual at Coors shifts contact toward outfield, especially left/center, reducing double-play probability and increasing expected bases. The model's park-agnostic hit-location softmax cannot capture this.
- Verifiable: Compare actual batted-ball launch angle and landing zone for changeups at Coors vs. model-predicted hit location distribution.

Scenario 3 (Recursive / model-exposure veto):
- Condition: Shohei Ohtani faces Gerrit Cole in a series after a scouting report circulates that Cole is throwing low fastballs in 0-2 counts (per model recommendations [PAGE 17]); Ohtani has had ≥3 prior plate appearances in the series showing this pattern.
- Veto: Reject low fastball recommendation because the batter has counter-adapted (second-order theory of mind).
- Counterfactual prediction: Model assumes naive batter response conditioned only on prior pitch sequence [PAGE 4]; actual strikeout probability on low fastball drops below model prediction, while contact rate and hard-contact rate rise. The model cannot represent the batter's knowledge of the pitcher's strategy.
- Verifiable: Track Ohtani's results on 0-2 low fastballs in games after the scout report vs. before; compare to model's predicted strikeout probability.

Alternative Scenario 3 (Zero-support veto):
- Condition: Target event is Triple. All models have top-4 precision = 0 for Triple [PAGE 10].
- Veto: Reject any pitch-selection decision that depends on inducing or avoiding triples.
- Counterfactual prediction: Since support is zero, predicted probability is uncalibrated; any strategy optimizing triple avoidance/induction has no verifiable signal.
- Verifiable: The table itself verifies 0.00 precision.

I'll use these three: Velocity/Fatigue, Park/Weather, Recursive/Model-exposure. All verifiable.

Word count check:
THINK_TRACE: I'll write ~700 words.
SOURCE_OPERATORS_AND_EQUATIONS: ~250 words.
RETROCAUSAL_GENEALOGY: ~200 words.
RECURSIVE_THEORY_OF_MIND: ~250 words.
CROSS_LAYER_VETO_ADJUDICATION: ~200 words.
RLVR_COUNTERFACTUAL_VETOES: ~250 words.
Total ~1850 words. Good.

Need to ensure no mention of "odds", "spread", "total", "moneyline". I will avoid those words entirely.

Need verbatim quotes and [PAGE N]. Let me find exact quotes I can use.

From source:
- [PAGE 3]: "Each pitch is thus represented as an 87-dimensional feature vector..."
- [PAGE 4]: "Sequences of 400 consecutive pitches are then extracted for each player using a sliding window with a one-pitch overlap."
- [PAGE 5]: "In total, our model uses roughly 800,000 parameters. The model outputs a 24-dimensional vector..."
- [PAGE 7]: "The total loss is defined as: ... L = 0.7(L_PitchResult + L_HitLocation) + 0.3 L_Continuous" (garbled but the numbers are there).
- [PAGE 9]: "The choice of k = 4 is motivated by the class imbalance inherent in baseball pitch outcomes."
- [PAGE 10]: Table 1 shows Triple 0 across all models.
- [PAGE 14]: "we use 13 different strike zone locations, Figure 3."
- [PAGE 15]: Equation 1 pitch score description.
- [PAGE 16]: "The top three pitches recommended by the model are knuckle curveballs delivered to zones 2, 5, and 3..."
- [PAGE 17]: "The model recommends low fastballs delivered to zones 7, 8, and 9..."
- [PAGE 18]: "the model recommends cutters delivered to zones 3 and 12, or a changeup to zone 4..."
- [PAGE 19]: Figure 7 heatmap.
- [PAGE 20]: "Our current approach focuses primarily on the batter's historical pitch sequence, effectively being 'playerless' from the pitcher's perspective."
- [PAGE 20]: Future work about grouped events.
- [PAGE 21]: References.

I'll cite these.

Now, one concern: The user says "PAGES: 19" at top but the source text has 23 pages. I'll cite based on the page numbers visible in the source text (1-23). I'll reference the visible page numbers.

Let's write.

Ensure LaTeX is formal. No toy equations.

I'll write now.
</NATIVE_REASONING>

<THINK_TRACE>
The paper constructs a transformer that ingests a 400-pitch sequence per batter, where each pitch is an 87-dimensional feature vector comprising standardized continuous measurements (velocity, spin rate, exit velocity, launch angle, hit coordinates, release point) and one-hot-encoded categorical variables (pitch result, pitch type, hit location, game state, handedness, zone). The sequences are grouped by batter and ordered chronologically by game date, at-bat number, and pitch number, then extracted with a sliding window of 400 pitches and a one-pitch stride [PAGE 4]. This stride choice creates a gray zone: adjacent sequences overlap by 399 of 400 pitches (99.75% overlap), so test-set examples are not independent draws. If the validation split does not block at the game or season level, reported top-4 precision will be optimistically biased because near-duplicate sequences appear on both sides of the split. The paper trains on 2015–2022 and tests on 2023–2024 [PAGE 3], which avoids cross-year leakage but leaves within-season regime shifts unexamined.

The architecture is a 12-layer transformer encoder with sinusoidal positional encodings, residual connections, and layer normalization [PAGE 4–5]. A distinctive residual branch preserves the raw features of the final pitch, concatenates them with the encoder output for that position, and passes the result through two ReLU fully connected layers [PAGE 5]. The parameter count is stated only as “roughly 800,000” [PAGE 5], an imprecision that prevents exact replication of capacity and VC-dimension arguments. The output is 24-dimensional: a 10-class pitch-result distribution, a 9-class hit-location distribution, and continuous auxiliary outputs (launch angle, exit velocity, hit coordinates) that the authors ultimately discard because they are “less accurate and ultimately not useful for practical applications” [PAGE 5].

Training uses sub-token masking on the final pitch: outcome dimensions (pitch result, hit location, launch speed, hit coordinates) are obscured—continuous values replaced by global means, categorical one-hots zeroed with a mask bit activated—while pitch-specific observables (velocity, spin, release point) remain visible [PAGE 7]. The loss is a weighted sum: 0.7 times the cross-entropy terms for pitch result and hit location, plus 0.3 times MSE for the continuous auxiliaries [PAGE 7]. The extracted LaTeX for this loss is garbled in the PDF, so the exact index sets and normalization conventions are not recoverable verbatim from the text; this is a second gray zone. Evaluation uses top-4 precision, motivated by class imbalance because Ball and Strike dominate [PAGE 9]. The transformer leads XGBoost on Singles (97% vs 86%), Doubles (43% vs 30%), and Home Runs (34% vs 23%), while both models assign zero top-4 precision to Triples [PAGE 9–10], revealing a support-collapse regime for extremely rare events.

Player adaptability is demonstrated on Aaron Judge (power) and Luis Arraez (contact), using 2023 season pitches after training only on pre-2023 data [PAGE 11–12]. The transformer better captures Judge’s home-run tendency (25.60 predicted vs 32 actual) and Arraez’s contact profile (100.42 predicted singles vs 116 actual; 37.96 predicted strikeouts vs 25 actual) [PAGE 11–12]. The optimal pitch selection framework simulates every feasible pitch type × strike-zone combination (13 zones) by appending each candidate as the 400th pitch and scoring via a weighted combination of desired and undesired outcome probabilities [PAGE 14–15]. Case studies with Shohei Ohtani versus Gerrit Cole and Gregory Santos produce zone-specific recommendations (knuckle curveballs to zones 2, 5, 3; low fastballs to zones 7, 8, 9; cutters to zones 3 and 12; changeup to zone 4) [PAGE 16–18]. However, the model is explicitly “playerless” from the pitcher’s perspective [PAGE 20]: it cannot condition on pitcher identity, only on aggregated pitch features, and the authors flag pitcher embeddings and finer event granularity as future work [PAGE 20]. These gaps, plus the absence of park, weather, fatigue, and umpire strike-zone conditioning, define the boundary beyond which the model’s recommendations should not be treated as deterministic.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(x_t \in \mathbb{R}^{87}\) denote the feature vector for pitch \(t\), with continuous components standardized to zero mean and unit variance and categorical components one-hot encoded [PAGE 3]. A sequence for a fixed batter is \(X = [x_{t-399}, x_{t-398}, \dots, x_t] \in \mathbb{R}^{400 \times 87}\), extracted with stride one [PAGE 4].

Positional encoding follows the sinusoidal convention \(PE_{(pos,2i)} = \sin\bigl(pos/10000^{2i/d_{\text{model}}}\bigr)\) and \(PE_{(pos,2i+1)} = \cos\bigl(pos/10000^{2i/d_{\text{model}}}\bigr)\) [PAGE 4; Vaswani et al. 2017, referenced on PAGE 21]. Each transformer layer computes multi-head self-attention \(\operatorname{Attn}(Q,K,V) = \operatorname{softmax}(QK^{T}/\sqrt{d_k})V\) with residual connections and layer normalization [PAGE 5].

The final-pitch residual branch applies a linear map \(g_T = W x_t + b\) to the raw features of the last pitch and concatenates them with the encoder output \(h_T = \operatorname{TransformerEncoder}(X)_T\): \(c_T = [h_T; g_T] \in \mathbb{R}^{2d_{\text{model}}}\). A two-layer ReLU MLP produces \(o \in \mathbb{R}^{24}\). The categorical outputs are softmax distributions \(\hat{p}^{\text{result}} = \operatorname{softmax}(o_{1:10}) \in \Delta^{9}\) and \(\hat{p}^{\text{loc}} = \operatorname{softmax}(o_{11:19}) \in \Delta^{8}\); continuous auxiliary outputs \(o_{20:24}\) are trained but discarded [PAGE 5].

The loss function, reconstructed from the garbled extraction on [PAGE 7], is
\[
\mathcal{L} = 0.7\bigl[\mathcal{H}(y^{\text{result}},\hat{p}^{\text{result}}) + \mathcal{H}(y^{\text{loc}},\hat{p}^{\text{loc}})\bigr] + 0.3\,\operatorname{MSE}(y^{\text{cont}},\hat{y}^{\text{cont}}),
\]
where \(\mathcal{H}\) denotes cross-entropy in nats (natural logarithm, consistent with PyTorch CrossEntropyLoss [PAGE 21]) and MSE carries units of \((\text{mph})^{2}\) for exit velocity, \((\text{deg})^{2}\) for launch angle, and \((\text{ft})^{2}\) for hit coordinates.

Sub-token masking replaces outcome-related continuous features with their global mean \(\mu^{\text{cont}}\) and zeroes categorical one-hots while activating a mask indicator bit [PAGE 7]. Unmasked observables remain velocity, spin rate, and release point.

The pitch score for a simulated candidate \(p\) appended as the 400th pitch is formally
\[
S(p) = w_1\sum_{e\in\mathcal{D}}\hat{P}(e\mid p,X) + w_2\sum_{\ell\in\mathcal{L}^{*}}\hat{P}(\ell\mid p,X) - w_3\sum_{u\in\mathcal{U}}\hat{P}(u\mid p,X) - w_4\sum_{m\in\mathcal{M}}\hat{P}(m\mid p,X),
\]
where \(\mathcal{D}\) is the desired event set, \(\mathcal{U}\) the undesired event set, \(\mathcal{L}^{*}\) desired hit locations, \(\mathcal{M}\) undesired hit locations, and \(w_i\) adjustable non-negative weights [PAGE 15; Equation 1 garbled in source]. The probabilities come from the model’s softmax outputs conditioned on the batter’s recent 399-pitch context [PAGE 14–15].

Breakdown regimes: (a) support collapse—Triple top-4 precision is 0.00 for Historical, XGBoost, and Transformer alike [PAGE 10]; (b) cold start—batters with fewer than 400 career pitches cannot populate a full sequence [PAGE 4]; (c) non-stationary pitcher physics—the simulation assigns average velocity and spin per pitch type rather than in-game observed values [PAGE 15]; (d) missing pitcher identity—the model cannot condition on the current pitcher except through pitch-feature averages [PAGE 15, 20].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage runs from Vaswani et al. (2017), “Attention is All You Need,” which supplies the transformer backbone and sinusoidal positional encoding [PAGE 4, 21], to Heaton and Mitra’s 2021 transformer-based player embeddings describing MLB player impact over plate-appearance sequences [PAGE 2], and their 2023 contextual event embeddings using 64-dimensional vectors to capture short- and long-term impact [PAGE 2]. Melville et al. (2023) introduced a game-theoretic pitch-sequencing model and the OptimusPitch RNN, explicitly minimizing expected run value via equilibrium strategies under varying batter information sets [PAGE 2]. The present paper deliberately departs from that game-theoretic equilibrium approach in favor of direct single-pitch prediction [PAGE 2], and it contrasts with heuristic “hard in, soft away” pitching philosophies [PAGE 1]. Data sourcing follows Statcast via pybaseball [PAGE 3], and the multi-task objective echoes Crawshaw’s survey of deep multi-task learning [PAGE 21].

A multi-week trap lies in the temporal aggregation. Training on 2015–2022 and testing on 2023–2024 [PAGE 3] hides within-season drift: a batter may alter stance or approach in week five, yet the 400-pitch window weights April and September pitches equally absent any explicit time-decay kernel. The case studies and appendices are anchored to 2023 (Ohtani strikeout rates by zone, Cole and Santos run values by pitch type) [PAGE 16, 22–23], so generalization to the 2024 second half, playoff leverage conditions, or new pitch arsenals (e.g., sweeper adoption) remains unverified. Furthermore, the one-pitch stride means the 2023–2024 test set contains massive near-replication: 399 of 400 pitches overlap between consecutive sequences [PAGE 4]. This pseudo-replication shrinks the effective sample size and understates the variance of top-4 precision estimates, a classic temporal evaluation trap that the paper does not address.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes the tendency of pitchers and batters to revert to highest-trust patterns under leverage: Gerrit Cole leaning on his four-seam fastball in high-value counts [PAGE 17, Appendix B], and batters adopting protective swings when behind in the count. The counter-trap is the second-order response: if Shohei Ohtani anticipates Cole’s crisis habit—low fastballs in a 0-2 count, as recommended by the model [PAGE 17]—he can cheat on that location, converting a predicted strikeout into contact. The model’s first-order conditioning \(P(\text{outcome} \mid \text{pitch}, \text{recent 399 pitches})\) [PAGE 4] contains no state variable for “batter believes the pitcher is following this model’s recommendation,” so it cannot simulate the recursive loop in which the recommendation itself alters the batter’s prior.

The clock layer—inning, outs, count, base occupancy—imposes strategic deadlines that reshape payoff asymmetry. In Scenario 3, the model seeks a ground ball to infield positions for a double play with a runner on first, assigning weights 0.4 to field out, 0.3 to infield hit location, and 0.3 to avoiding hits [PAGE 18]. But with two outs in the bottom of the ninth, a walk may be preferable to a risky ground ball that could become an error or extra-base hit; the loss function optimizes categorical outcome probability only, not run expectancy or win probability conditioned on the clock. Thus the model may recommend a high-variance cutter up and inside [PAGE 18] that maximizes double-play probability while ignoring the clock-dependent cost of a home run.

Because the model is “playerless” from the pitcher’s perspective [PAGE 20], it cannot perform recursive mind-reading of the pitcher’s identity. It recommends a slider for Gregory Santos in Scenario 2 [PAGE 17] because Santos’s repertoire is slider-heavy [Appendix C, PAGE 23], but this enters only through averaged pitch features, not through a learned pitcher embedding that captures how Santos actually behaves under crisis pressure. The absence of a pitcher state variable breaks the symmetry of the pitcher–batter game: the model adapts to the batter’s recent history but treats the pitcher as a static distribution of averages.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical veto: The pitch-selection simulator assigns each candidate pitch average historical velocity and spin rate for that pitch type [PAGE 15]. If Gerrit Cole’s in-game fastball velocity is depressed by fatigue, injury, or temperature, the low-fastball recommendation for Ohtani at 0-2 [PAGE 17] is physically invalid because the input distribution no longer matches the training-conditioned mapping.

Biomechanical veto: Release-point coordinates are model inputs [PAGE 3], but mid-game mechanical adjustments—changed arm slot, altered release to compensate for discomfort, or intentional tipping—shift the conditional mapping from features to outcome. A recommended cutter to zones 3 and 12 [PAGE 18] presumes Cole’s release point is consistent with the historical average used in simulation.

Weather veto: Air density, temperature, humidity, and wind alter ball flight, exit velocity carry, and hit distance. The hit-location softmax over nine fielder positions [PAGE 5] is park- and weather-agnostic. A changeup to zone 4 intended to induce a ground ball [PAGE 18] may produce a carrying fly ball at Coors Field’s low air density, invalidating the infield-concentrated heatmap shown in Figure 7 [PAGE 19].

Umpire/park veto: The framework discretizes the strike zone into 13 locations [PAGE 14], but the actual called zone varies by umpire, count, catcher framing, and park dimensions. The model’s zone recommendations assume a deterministic strike-zone mapping that does not exist in practice.

Veto hierarchy: Any cross-layer disagreement—fatigued velocity, adverse weather, or umpire-specific zone compression—overrides the statistical recommendation. The model has no internal consistency check for these layers, so external veto logic is required before deploying a simulated pitch in a live game situation.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto scenario 1 (velocity/fatigue). Condition: Cole’s observed four-seam fastball velocity in the current game is more than 2.0 mph below the seasonal average used to simulate pitches [PAGE 15, Appendix B PAGE 22]. Veto: Reject the model’s low-fastball recommendation to zones 7, 8, 9 for Ohtani at 0-2 [PAGE 17]. Counterfactual prediction: Without the veto, reduced velocity raises Ohtani’s contact probability and lowers whiff rate; the realized outcome distribution shifts from strikeout toward foul balls and in-play contact relative to the model’s predicted strikeout probability. With the veto and substitution of a breaking ball down, the whiff rate should exceed the fatigued-fastball baseline. Verifiable via Statcast velocity logs and pitch-by-pitch outcomes.

Veto scenario 2 (park/weather). Condition: Game at Coors Field with high density altitude; model recommends changeup to zone 4 to induce a ground ball for a double play [PAGE 18]. Veto: Reject because reduced drag increases carry, shifting contact from ground balls to fly balls and elevating home-run probability. Counterfactual prediction: The model’s predicted hit-location heatmap concentrates on infield positions [PAGE 19]; at Coors, the same changeup should produce a measurable shift toward outfield landing zones and lower double-play frequency than predicted. Verifiable by comparing actual launch angles and landing zones for changeups at Coors against the model’s park-agnostic hit-location distribution.

Veto scenario 3 (recursive model exposure). Condition: Ohtani faces Cole in a series after a scouting report circulates that Cole is throwing low fastballs in 0-2 counts per the model’s recommendations [PAGE 17], and Ohtani has had at least three prior plate appearances exhibiting this pattern. Veto: Reject the low-fastball recommendation because the batter has counter-adapted; the model’s first-order sequence conditioning lacks a batter-believes-pitcher-is-using-model state. Counterfactual prediction: Actual strikeout probability on low fastballs falls below the model’s prediction, while contact and hard-contact rates rise, because Ohtani sits on the anticipated location. Verifiable by comparing Ohtani’s 0-2 low-fastball outcomes before versus after series exposure to the reported pattern.
</RLVR_COUNTERFACTUAL_VETOES>