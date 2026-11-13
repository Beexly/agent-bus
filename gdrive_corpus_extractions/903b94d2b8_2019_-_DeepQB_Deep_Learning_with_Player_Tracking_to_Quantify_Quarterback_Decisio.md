---
source: "2019 - DeepQB Deep Learning with Player Tracking to Quantify Quarterback Decision-Making and Performance - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2019"
pages: 13
model: deepseek/deepseek-v4.1-flash-1017
words: 9405
---

<NATIVE_REASONING>
We need answer. Need follow user: "DRIVE SOURCE ..." They want frontier reasoning foundry. We must produce sections exact XML, >=1000 words total, THINK_TRACE >=400 words. Need no betting lines/odds. Need not invent fake ratios. Need formal LaTeX equations, units, assumptions, exact singularity/breakdown regimes. Cite [PAGE N] exact and verbatim quotes when source pages provided. Need source operators/equations. Need retrocausal genealogy, recursive theory mind, cross-layer veto adjudication physical/biomechanical/weather veto proof, RLVR counterfactual vetoes 3 verifiable scenarios + predictions. Need discuss DeepQB paper. Ensure no betting lines/moneylines/spreads/totals/odds. Avoid "odds" word? Invariant says never mention spreads totals moneylines odds. We can say probabilities, no betting. Don't mention odds. Need maybe no sports betting context. Need probably respond as analysis of paper. Need include equations derived from paper: target prediction accuracy p=0.598, baseline 0.2, lift ~2.99; completion rates 0.74 vs 0.55, YPA 7.8 vs 8.0; expected YPA difference; proportion max expected YPA; expected completion; mean interception probabilities. We can formalize. Need exact singularity/breakdown regimes: e.g. softmax denominator; calibration breakdown when throwaways excluded; mirror augmentation breaks handedness; snapshot at release excludes later openness; two nearest defenders limited; transfer learning sample size; interception low base rate Poisson noise; selection bias; feature vector ordering. Need units: position yards, velocity yards/s, acceleration yards/s^2, orientation radians/degrees, 10 Hz sampling (0.1 s), probability dimensionless [0,1], YPA yards/attempt, expected yards yards/attempt, completion rate dimensionless, int probability dimensionless. Need formal LaTeX equations. Use [PAGE N] markers and verbatim quotes. Need cite exact quotes. Need probably include page citations with exact quote. Use "..." verbatim from source.

Need satisfy "SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown." Need "ZERO TOY EQUATIONS" — avoid invented fake ratios. Formal equations only from paper or derived exact identities? We can define p_target etc. Fine.

Need "RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps." Need discuss lineage: tracking data, Cervone Pointwise, Wang/Zemel, Le ghosting, Harmon CNN, Lucey, Mehrasa, Hochstedler Voronoi, Keras/TensorFlow, NFL Next Gen Stats RFID, EPA. "Multi-week traps" maybe research traps: snapshot leakage, mirror augmentation, transfer learning, selection bias, throw-away exclusion, drops counted as completions, two-defender truncation, binary duress, target prediction vs decision quality, low base rate. Need multiple weeks? Could interpret as multi-week traps in research program. Need address.

Need "RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock." Need adapt to QB decision-making: model's recursive ToM? Compare actual target to predicted target, crisis habit regression (QB reverts to checkdown under duress), counter-trap (defense conceals, offense conceals intent), clock (snapshot at release, progression timing, LSTM future). Need not overdo. Need mention "crisis habit regression" as under pressure QB habits; "counter-trap" as model recommends deeper target while QB checks down; "clock" as pass release snapshot/time progression. Could use formal? Section not necessarily formal but can mention.

Need "CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof." Need explain vetoes: physical tracking RFID shoulder pads, orientation; biomechanical: QB orientation excluded to avoid cheating, handedness mirror augmentation caveat; weather: not in paper, so cannot adjudicate weather? Need "veto proof" maybe prove when cross-layer factors veto model inference. Need say no weather variables in DeepQB input, so weather effects are unmodeled latent confounders; model cannot veto on weather. Physical: pass rush binary duress only; biomechanical: receiver size/strength not accounted; QB handedness; orientation excluded. Weather: wind/rain/temperature absent. Need exact breakdown regimes: when weather alters ball flight/traction, model's snapshot features insufficient; when QB duress binary misses obscured passing lanes; when receiver size/strength matters; when handedness under rollouts breaks mirror symmetry. Need page quotes: "All variants of the model currently rely solely on a binary “QB duress” variable..." [PAGE 11]; "Receiver talents and skills are not fully accounted for..." [PAGE 12]; "The orientation of the quarterback was deliberately excluded..." [PAGE 5]; "The drawback is quarterback handedness, especially if he throws while on the run." [PAGE 5]; "play metadata ... down, distance, and yards to end zone" [PAGE 2]; no weather. Need "proof" as logical veto adjudication, not empirical.

Need "RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions." RLVR? Reinforcement Learning with Verifiable Rewards? Need propose 3 counterfactual veto scenarios that are verifiable. Need predictions. Could be:
1. Throw-away pass contamination veto: Include throw-away attempts or label them as no-target; predicted expected completion/calibration shifts; verifiable by recomputing calibration curves and target accuracy. Prediction: if throw-aways included without target label, target accuracy denominator and calibration degrades; model should be vetoed for accuracy claims on those plays. Need cite page 8 quote: "exclusion of deliberate 'throw-away' passes from the data..." [PAGE 8].
2. Pass-rush feature expansion veto: replace binary duress with full pass-protection features; if model's target prediction/expected yards changes for plays with obscured receivers, then binary duress was insufficient. Prediction: increased calibration and reduced false "QB error" labels on pressured plays. Cite [PAGE 11].
3. Temporal progression/LSTM veto: compare snapshot-at-release model vs continuous tracking; if QB follows progression and later-open receiver was not open at release, snapshot model falsely penalizes. Prediction: target prediction accuracy and decision-quality attribution change; specifically false negatives on progression throws. Cite [PAGE 12] quote. This is verifiable via play-level counterfactual: label intended progression from play design? Could be hard. Need "verifiable" maybe use model retraining with LSTM and compare. Prediction: reduce false penalty. Another scenario: mirror augmentation handedness veto: retrain without mirror augmentation or with handedness indicator; compare QB rollouts. Prediction: if left/right rollout plays show systematic asymmetry, augmentation is invalid for those. Cite [PAGE 5]. Need 3. Maybe include selection bias? Better 3 verifiable.

Need "THINK_TRACE" >=400 words. Need deep multi-hop derivation and gray-zone audit. Need total >=1000 words. We can make substantial.

Need exact XML sections. The whole response must include those exact tags. Need no extra? We can include intro? Better only the XML sections. But can include all sections. Need ensure ">= 1,000-word DEPTH across these exact XML sections" likely entire answer >1000. Need maybe 2500 words. Desired oververbosity 5. Need be thorough but not insane. We have token budget. Need include equations. Need LaTeX.

Need be careful: "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." Avoid the word "odds". Also avoid "betting". We can mention "probability" only. Avoid "line" maybe okay but not betting line; use "passing line"? Better avoid "line" as noun? No issue but safe.

Need cite exact [PAGE N] markers and verbatim quotes. Use quotes from source. Need not overquote; enough. Need ensure quotes exact. Let's collect exact quotes with page numbers:

Page 1: "The model performs well, correctly identifying the targeted receiver in 60% of cross-validated cases. When passers target the predicted receiver, passes are completed 74% of the time, compared to 55% when the QB targets any other receiver." [PAGE 1] Yes.

Page 2: "Model input is a snapshot of player configuration at the time of pass release, including receiver position, velocity, acceleration, and orientation, as well as those of the secondary." [PAGE 2]. "Hand-built features, specifically relative positions and angles of receivers with respect to other players, were engineered and used as inputs." [PAGE 2]. "Additionally, play metadata, (down, distance, and yards to the end zone) were fed to the network." [PAGE 2]. "Lastly, data from ESPN’s Video Analysis Tracking (VAT) project was used as inputs, specifically whether the quarterback was under duress from the pass rush and whether there was a play-action fake following the snap." [PAGE 2].

Page 3: "Overall, 45,501 pass attempts were used to train, and validate the models." [PAGE 3]. "Player position, velocity, acceleration, and orientation is provided at 10Hz" [PAGE 3]. "Training (n=24,414) and validation (n=10,464) data were built as a 70%/30% split of passes from the 2016 and 2017 NFL regular and post-seasons. The test data was built from the 2018 regular season through week 12 (n=10,623)." [PAGE 3]. "An input layer of 230 nodes" [PAGE 4? Actually page 4]. Need page 4: architecture. Page 4: "The general model consists of a four-layer network as depicted in figure 2: -An input layer of 230 nodes -A dense hidden layer of 256 neurons. -A second dense hidden layer of 128 neurons. -A dense output layer..." [PAGE 4]. "Batch normalization and dropout are employed between each dense layer to prevent overfitting" [PAGE 4]. "For each play, the the set of features associated with each of the five potential target receivers ... were ordered from shallowest to deepest downfield." [PAGE 4]. "Within each set of features for each receiver, the features associated with the two nearest defenders were included." [PAGE 4].

Page 5: "The orientation of the quarterback was deliberately excluded from the inputs. The orientation of the passer’s shoulders at the time of pass release would be “cheating” for this model’s purposes, as it would very often correlate strongly with the direction of the intended target." [PAGE 5]. "The training set was augmented with its mirror image plays, rotated about the longitudinal axis of the field of play, effectively increasing sample size." [PAGE 5]. "The drawback is quarterback handedness, especially if he throws while on the run." [PAGE 5].

Page 6: "The model predicts the actual target with an accuracy of 59.8% – three times the naïve estimate for a one-in-five proposition." [PAGE 6]. "when quarterbacks target the receiver as predicted by DeepQB, the completion rate is 74%. This compares to a completion rate of 55% when quarterbacks target any other receiver." [PAGE 6]. "However, the Yards Per Attempt (YPA) when quarterbacks target the predicted receiver is significantly lower than when he targets another receiver (7.8 vs 8.0 YPA)." [PAGE 6].

Page 7: "the typical (league average) quarterback is most likely too cautious in his reads." [PAGE 7]. "The theory that explains both results is that the typical quarterback favors a safer choice at the expense of optimum efficiency." [PAGE 7]. "Table 1 lists the results for all quarterbacks in 2018 (through week 12) with at least 80 pass attempts, along with the expected YPA predicted by the model." [PAGE 7]. "The YPA above/below expected column is the difference between actual and expected YPA." [PAGE 7]. "The proportion of maximum expected YPA targeted for each quarterback is also listed." [PAGE 7].

Page 8: "Notice that many of the rookies (Allen, Darnold, Rosen) are toward the right of the chart (highly typical), with Mayfield as the exception." [PAGE 8]. "there is a weak negative correlation between the “typicality” of a quarterback’s targeting decisions and the value he adds above the potential provided by his receivers(r=-0.30)." [PAGE 8]. "Unfortunately, we cannot escape the possibility of selection bias." [PAGE 8]. "Considering just completions and incompletions, the model appears well-calibrated (figure 6), although it rarely considers pass completions as highly improbable. This is substantially due to the exclusion of deliberate “throw-away” passes from the data, which are technically attempts but did not have a targeted receiver." [PAGE 8].

Page 9: "Passing accuracy is a widely misunderstood attribute, primarily because completion percentage is used ubiquitously as a proxy for accuracy." [PAGE 9]. "Completion percentage does not account for the difficulty of the throw, nor does it exclude “throw-away” pass attempts and receiver drops." [PAGE 9]. "Interceptions are events with a very low base rate and often involve tipped balls or other random factors." [PAGE 9]. "The absolute number of interceptions, or even interceptions per pass, will therefore be very noisy measures of a quarterback’s true propensity to throw them." [PAGE 9].

Page 10: "Because expected interception rates, based on the geometries of the receivers and defense, are lower than the actual interception rates of high-interception quarterbacks, it follows that interceptions in the NFL are primarily a result of inaccurate throws and random sample error rather than bad targeting decisions." [PAGE 10]. Good.

Page 11: "The base level of the network represent the fundamental relationships among positions and velocities—understanding and projecting the geometries of the players on the field, while the higher levels of the network represent the executive functions—choosing the passing target." [PAGE 11]. "All variants of the model currently rely solely on a binary “QB duress” variable to account for the constraints on the QB due to the pass rush." [PAGE 11]. "This modeling decision was made at the outset of the project to ensure tractability of the model" [PAGE 11]. "Some of the worst performing quarterbacks of the season are most aligned with the Brees model, while most of the best quarterbacks of the season are the least aligned. This should make one skeptical of these results." [PAGE 11].

Page 12: "Limiting the picture to the two nearest defenders to each receiver was another modeling decision made for the same reason." [PAGE 12]. "Receiver talents and skills are not fully accounted for." [PAGE 12]. "Although aspects of receiving such as route running and speed can be captured by the model, other aspects such as the size and strength of receivers is a factor in the probability of reception and the yardage estimate of each play." [PAGE 12]. "Future versions of this approach will incorporate concepts such as Expected Points Added (EPA)" [PAGE 12]. "The general model is based on a snapshot of the play at the time of pass release." [PAGE 12]. "Open receivers earlier in the development of a play may later become covered by the time of release if the quarterback fails to recognize them." [PAGE 12]. "This model may be penalizing a quarterback who makes the correct read in the planned progression..." [PAGE 12]. "Future variants of the DeepQB model may use techniques such as an LSTM network to assess passing outcomes on a continuous basis throughout the play." [PAGE 12].

Page 3 data: "Compared to the optical method of tracking currently used for basketball, hockey, and soccer, the RFID-based method has the advantage of recording player shoulder orientation, which is helpful for understanding the dynamics of a pass play." [PAGE 3]. Good.

Need formal equations. Let's plan:

Define play i, receiver j ∈ {1,...,5}. Feature vector x_i ∈ R^{230}. Model target probabilities:
\[
\hat{\pi}_{ij} = \frac{\exp(f_\theta(x_i)_j)}{\sum_{k=1}^{5}\exp(f_\theta(x_i)_k)}, \quad \hat{\pi}_{ij}\in[0,1], \sum_j \hat{\pi}_{ij}=1.
\]
Breakdown: if all logits equal, max entropy; if one logit dominates; numerically softmax stable with max subtraction; singularity? no singularity except underflow. But "exact singularity/breakdown regimes" maybe for ratios use denominator zero. For proportion of max expected YPA:
\[
\rho_i = \frac{\hat{y}_{i,a(i)}}{\max_j \hat{y}_{ij}}
\]
with units dimensionless; \(\hat{y}_{ij}\) yards per attempt? Actually expected yards on pass to receiver j. If max expected yards =0, \rho undefined (0/0). That's exact singularity. If max expected YPA negative? Expected yards likely nonnegative? Interceptions could negative? Paper variant 2 expected yards gained; likely nonnegative. But can mention if max denominator zero or negative, ratio not meaningful; use expected points instead. [PAGE 12] says future incorporate EPA.

Expected YPA above expected:
\[
\Delta \mathrm{YPA}_q = \mathrm{YPA}_q - \widehat{\mathrm{YPA}}_q
\]
units yards/attempt. Expected completion above expected:
\[
\Delta C_q = C_q - \hat{C}_q
\]
dimensionless. Interception probability:
\[
\hat{p}^{\text{int}}_{ij}\in[0,1]
\]
No fake ratios. Mean int prob. Low base rate: binomial standard error \( \sqrt{p(1-p)/n} \). That's not toy; formal. For p=0.02, n=80, SE ~0.0156; actual int rate noisy. Could mention.

Target accuracy lift:
\[
A = \frac{1}{N}\sum_i \mathbf{1}[\hat{j}_i=j_i] = 0.598
\]
Naive one-in-five = 0.2; lift = 2.99. This is a ratio of accuracy to baseline; not fake. Fine.

Completion contrast:
\[
\bar{C}_{\text{pred}} = 0.74, \quad \bar{C}_{\text{other}} = 0.55
\]
YPA:
\[
\bar{Y}_{\text{pred}} = 7.8,\quad \bar{Y}_{\text{other}}=8.0
\]
Need note these are paper values. [PAGE 6].

Model architecture: input 230, hidden 256, 128, output. ReLU. Batch norm/dropout. Units dimensionless. Training 45,501 pass attempts. 10Hz = 0.1 s sampling interval. RFID coordinates. Need page cites.

Cross-layer veto: Need define veto predicate maybe \(V_{\text{phys}}=1\) if unmodeled physical state changes target ranking. Formal:
\[
V_{\text{veto}}(i)= \mathbf{1}\left[\arg\max_j \hat{y}_{ij}(x_i) \neq \arg\max_j \hat{y}_{ij}(x_i, z_i)\right]
\]
where z_i are omitted physical/biomechanical/weather covariates. Exact breakdown: if z_i changes ranking or expected value beyond tolerance. Not fake; formal counterfactual. Use units. Mention if no z_i measured, cannot verify. Need "proof" maybe logical: absence of weather variables in input vector [PAGE 2,5] means weather is an omitted variable; if weather affects \(x_i\) or outcome, the model's conditional expectation is misspecified. Formal:
\[
\mathbb{E}[Y_i \mid x_i] \neq \mathbb{E}[Y_i \mid x_i, w_i]
\]
when \(w_i\) not independent. This is formal. Need cite no weather data? Source doesn't mention weather. We can say "the source never lists weather as an input [PAGE 2][PAGE 5]" but cannot quote absence. Need exact quote of inputs list. Good.

Biomechanical: orientation of QB excluded [PAGE 5]; shoulder orientation recorded by RFID [PAGE 3] but QB orientation excluded. Receiver size/strength not accounted [PAGE 12]. Pass rush binary duress [PAGE 11]. These are veto layers.

Recursive theory of mind: Need write about model's prediction as "expected target under typical QB"; actual target. Crisis habit regression: under duress, QB may check down; model might recommend deeper emerging target. Paper Figure 4 play (2): "Play (2) shows a check-down, although DeepQB recommends the deeper emerging target with p=.50." [PAGE 6]. That's exact quote. Good. Counter-trap: offense conceals intent by design, defense tries not to allow any single receiver open [PAGE 1/6]. Clock: snapshot at release, progression timing [PAGE 12]. Need mention recursive ToM: "Given picture presented to typical QB" [PAGE 5? Actually page 5: "In essence, the model answers the question, “Given the picture presented to a typical quarterback, who would he choose to target?”" [PAGE 5? Wait page 5 text says results 4.1 on page 5? The source shows page 5 has end of architecture and then 4 Results? Actually page 5 includes "4. Results" and "4.1. Variant 1: Target Probability" and "In essence, the model answers the question, “Given the picture presented to a typical quarterback, who would he choose to target?”" Wait page 5? The source text for page 5 ends at Figure 3? Let's check: PAGE 5 begins architecture continuation, then "4. Results" maybe not? Actually page 5 source includes architecture and then "4. Results" near bottom? Let's scroll: PAGE 5 text: "5 2019 ... that receiver appears first... Lastly, play information... The training set was augmented... 3.3. Learning... 4. Results... 4.1. Variant 1: Target Probability ... In essence, the model answers the question..." Wait yes page 5 includes section 4.1? The source shows PAGE 5 after "3.3 Learning" then "4. Results" then "4.1 Variant 1" then Figure 3? Actually the pasted page 5 ends with "Figure 3 The feature vector used as input for the general model." Wait I need check: In source, PAGE 5 starts "5 ... that receiver appears first..." then "Lastly, play information..." then "The training set..." then "3.3. Learning..." then "4. Results..." then "Results from each variant..." then "4.1. Variant 1: Target Probability..." then "The primary purpose..." then "target with an accuracy of 59.8%..."? Wait no, page 6 has "target with an accuracy of 59.8%". Let's re-read source: PAGE 5 ends with "Figure 3 The feature vector used as input for the general model." Actually after "3.3 Learning" maybe page 5 continues to "4. Results" and "4.1 Variant 1" and "The primary purpose..."? Let's check pasted: 
--- [PAGE 5 of 13] ---
5 
2019 ... 
that receiver appears first ... 
...
Lastly, play information was concatenated...
...
The training set was augmented...
...
3.3. Learning 
...
4. Results 
...
4.1. Variant 1: Target Probability 
...
The primary purpose of this variant is to verify...
In essence, the model answers the question, “Given the picture presented to a typical quarterback, who would he choose to target?” The model predicts the actual 
...
the proximity of defenders at the time of pass arrival are intentionally excluded...
Figure 3 The feature vector used as input for the general model. 
Wait I see in source: PAGE 5 ends with "Figure 3 The feature vector used as input for the general model." Then PAGE 6 starts "6 ... target with an accuracy of 59.8%..." So the question quote is actually on PAGE 5? Let's locate: It appears in source PAGE 5: "In essence, the model answers the question, “Given the picture presented to a typical quarterback, who would he choose to target?” The model predicts the actual" then page break to PAGE 6 "target with an accuracy..." Yes. So quote on [PAGE 5]. Good. We can cite [PAGE 5] for that quote. Need not exact page? Use [PAGE 5].

Need "retrocausal genealogy": Maybe "retrocausal" means tracing back from DeepQB to prior methods and future implications. Need mention lineage: Cervone et al [1] Pointwise expected point value per time segment; Wang & Zemel [2] FFN/RNN play classification; Le et al [3] LSTM ghosting and role representations; Harmon et al [4] CNN multi-channel; Lucey et al [5] conditional random field and strategic features; Mehrasa et al [6] 1D conv trajectories; Hochstedler [7] Voronoi tessellation; Keras [8]; Burke pass protection [9]; EPA [10]. Need "multi-week traps": e.g., 
- Week-scale trap 1: Snapshot leakage and progression penalty; model may label correct progression read as error. [PAGE 12]
- Week-scale trap 2: Binary duress and pass rush omitted; model may overstate decision quality when QB can't see open receiver. [PAGE 11]
- Week-scale trap 3: Two nearest defenders truncation and receiver skill omission; expected yards mis-specified. [PAGE 12]
- Week-scale trap 4: Interception low base rate and noisy actual rates; do not overfit. [PAGE 9]
- Week-scale trap 5: Transfer learning "cyber-Brees" misalignment; worst QBs align with Brees; skeptical. [PAGE 11]
- Week-scale trap 6: Mirror augmentation handedness. [PAGE 5]
Need "retrocausal genealogy" maybe historical/scientific lineage & multi-week traps. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" maybe include "Physical/biomechanical/weather veto proof." Need use formal equations for veto. We can structure bullets:
1. Physical veto: tracking is 10Hz RFID; orientation recorded but QB orientation excluded. Pass rush only binary duress. If a QB is obscured by rushers, model's feature vector cannot represent line-of-sight. Veto when \(\mathcal{I}_{\text{los}}=0\) and target ranking depends on it. Quote [PAGE 11] and [PAGE 5].
2. Biomechanical veto: receiver size/strength not accounted; QB handedness under rollout; mirror augmentation assumes lateral symmetry. If \(h_q\) (handedness) interacts with roll direction, then \(P(Y|T(x))=P(Y|x)\) fails. Quote [PAGE 5] and [PAGE 12].
3. Weather veto: no weather variables in input list. If weather \(w_i\) changes ball flight, traction, grip, then \(\mathbb{E}[Y|x] \neq \mathbb{E}[Y|x,w]\). The source does not provide weather covariates; so weather-specific claims are vetoed. Need exact quote of inputs list [PAGE 2] and [PAGE 5]. "Model input is a snapshot ... including receiver position, velocity, acceleration, and orientation, as well as those of the secondary." [PAGE 2]. "Lastly, play information ... down, distance to gain, and yard line" [PAGE 5? Actually page 5 says play information included down, distance to gain, and yard line of play. Page 2 says yards to end zone. Use [PAGE 5] for exact. No weather. Good.
Need "proof" maybe: "Proof of veto: If w_i is a cause of Y_i not screened off by x_i, then the model's conditional expectation is not the target causal quantity; any attribution to QB decision is confounded." Formal.

Need "RLVR_COUNTERFACTUAL_VETOES": Need 3 verifiable scenarios + predictions. Use "RLVR" as maybe "Reinforcement Learning with Verifiable Rewards" but we don't need define? Could phrase "Verifiable counterfactual veto tests". Need predictions. Ensure each has clear verification metric.
Scenario 1: Include throw-away passes. Verification: Recompute target accuracy and calibration on all attempts including throw-aways labeled as no-target/abstain. Prediction: model's target accuracy on all attempts falls relative to 59.8% and calibration for completions degrades; if it does not, the throw-away exclusion is not a material veto. Need exact quote [PAGE 8]. This is verifiable with data. 
Scenario 2: Replace binary duress with full pass-protection features (or add blocker/rusher geometry). Verification: Retrain Variant 1/2 with expanded features and compare play-level decisions on high-duress subset. Prediction: on plays where QB is obscured, model's target recommendations shift and false "QB error" labels decrease; if no shift, binary duress is sufficient. Cite [PAGE 11]. 
Scenario 3: Temporal/LSTM progression test: Use continuous tracking and progression labels; compare snapshot model's "missed open receiver" labels. Prediction: snapshot model over-penalizes QBs who follow progression; continuous model reduces false errors on plays where receiver becomes open after QB's progression step. Cite [PAGE 12]. Need verifiable via labeled progression or play design? Could use tracking to define openness at release vs earlier; but intended progression not always available. Alternative scenario: Mirror augmentation ablation by handedness. Verification: retrain with and without mirror augmentation, stratify by QB handedness and rollout direction. Prediction: if mirror augmentation harms rollout throws, error rates on rollout subset are higher with augmentation; if not, symmetry assumption holds. Cite [PAGE 5]. Which is more verifiable? Both. Need exactly 3. Maybe include 4? User asks 3. Do 3. Need "RLVR" maybe each with reward signal: verifiable outcome metric. Could label R1, R2, R3. Need "counterfactual vetoes" meaning if counterfactual test fails, veto model claim. We can write "Veto condition" and "Prediction".

Need "THINK_TRACE" deep multi-hop derivation and gray-zone audit >=400 words. Need write 500+ words. Include derivation of target accuracy lift, completion/YPA paradox, decision-quality metric, calibration, interception inference, selection bias. Need "multi-hop": from paper claims to metrics to caveats. Need "gray-zone audit": where claims are ambiguous: 60% vs 59.8%, 74/55, 7.8/8.0, target predicted vs actual; expected YPA proportion; r=-0.30; transfer learning. Need not mention betting. 
Need "formal LaTeX equations" in THINK_TRACE? It says section source operators for equations, but can include inline. Need at least formal LaTeX in source section. 
Need ">=1,000-word DEPTH" across exact XML sections. I can write ~2500 words. Need maintain exact XML tags. No markdown? XML tags plus text. Can use LaTeX inside. Fine.

Need decide final structure:
<THINK_TRACE> ... </THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS> ... </SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY> ... </RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND> ... </RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION> ... </CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES> ... </RLVR_COUNTERFACTUAL_VETOES>

Need ensure no "odds" word. Avoid "betting lines". I will not mention. Avoid "spread" maybe not. Avoid "total" maybe "total" as sum? It says never mention totals; avoid word "totals" but can use "sum"? Use "aggregate". Avoid "moneyline". Good.

Need exact quote "60% of cross-validated cases" vs "59.8%"—paper has both. We can note. Need not quote too much. Use exact quotes in quotes. Ensure page markers exactly [PAGE N]. Good.

Need "ZERO TOY EQUATIONS": We can include equations from paper or formal identity. No invented ratios like Force/Fatigue. Our equations are legitimate. Use "expected yards" etc. We should state assumptions and breakdown. For each equation maybe include units. Need "exact singularity/breakdown regimes": include for softmax numerical underflow? For proportion denominator zero. For calibration under throw-away exclusion. For binomial SE low base rate. For mirror augmentation symmetry. For snapshot progression. Good.

Let's draft.

Need maybe mention "player tracking at 10Hz" = sampling frequency \(f_s=10\,\mathrm{Hz}\), \(\Delta t=0.1\,\mathrm{s}\). Units: position m or yards? NFL uses yards likely. Paper says yards to end zone, expected yards. Tracking units not specified; we can say "field-coordinate distance in yards" assuming NFL. Need no fake. Use "position/velocity/acceleration/orientation" units: position in yards, velocity yd/s, acceleration yd/s^2, orientation rad or deg. Paper doesn't specify exact coordinate units; we can say "source does not state coordinate units; NFL tracking conventionally uses yards and yards/s". But formal units maybe "position (field units), velocity (field units·s^{-1})". To avoid inventing, say "in the source's field-coordinate units; if NFL Next Gen Stats uses yards, then yd, yd/s, yd/s^2". But paper says expected yards. Use "yards" for YPA. For velocity, source says 10Hz but not units. We can write "position \(r\), velocity \(v\), acceleration \(a\), orientation \(\theta\) with \(v\) in position-units·s^{-1}, a in position-units·s^{-2}, \theta in radians\)". That's formal and safe.

Need equation for input vector:
\[
x_i = [\phi(r_{i,1},v_{i,1},a_{i,1},\theta_{i,1},\{d_{i,1}^{(1)},d_{i,1}^{(2)}\}),\dots,\phi(r_{i,5},...), q_i, m_i, u_i, \alpha_i]
\]
Maybe too complex. Use general \(x_i\in\mathbb{R}^{230}\). Good.

Need "the order of inputs ... shallowest to deepest downfield" [PAGE 4]. "Within each set ... two nearest defenders" [PAGE 4]. Good.

Need "QB orientation deliberately excluded" [PAGE 5]. Good.

Need "the model is modular FFN" [PAGE 3]. Good.

Need "Variant 4 transfer learning: lower layer frozen, higher layers retrained" [PAGE 11]. Good.

Need "expected YPA above/below expected" [PAGE 7]. Good.

Need "proportion max expected YPA" example 7.5/9.0=83% [PAGE 7]. We can quote or describe. Equation.

Need "r=-0.30" [PAGE 8]. Good.

Need "interceptions primarily inaccurate throws and random sample error rather than bad targeting" [PAGE 10]. Good.

Need "selection bias" [PAGE 8]. Good.

Need maybe "calibration well-calibrated considering completions/incompletions" [PAGE 8]. Good.

Need "throw-away exclusion" [PAGE 8]. Good.

Need "drops counted as successful completions from passer's point of view" [PAGE 4 footnote]. Good quote. Use [PAGE 4]. "Passes classified as “drops” by ESPN’s VAT analysis are counted as successful completions from the passer’s point of view." [PAGE 4]. This is important for completion rate. Include.

Need "all inputs are as of time of pass release" [PAGE 4 footnote]. Good.

Need "defender proximity at time of pass arrival intentionally excluded" [PAGE 5 footnote]. Exact: "the proximity of defenders at the time of pass arrival are intentionally excluded, even if they would improve prediction accuracy." [PAGE 5]. Include.

Need "play-action fake" input [PAGE 2]. Good.

Need "down, distance, yards to end zone" [PAGE 2]. Good.

Need "10Hz near real time API" [PAGE 3]. Good.

Need "RFID shoulder orientation" [PAGE 3]. Good.

Need "two RFID chips in shoulder pads" [PAGE 3]. Good.

Need "test data 2018 through week 12 n=10,623" [PAGE 3]. Good.

Need "45,501 pass attempts" [PAGE 3]. Good.

Need "training n=24,414 validation n=10,464" [PAGE 3]. Good.

Need "Keras TensorFlow grid search" [PAGE 5]. Good.

Need "batch normalization dropout" [PAGE 4]. Good.

Need "relu" [PAGE 4]. Good.

Need "230 input, 256, 128" [PAGE 4]. Good.

Need "target accuracy 59.8% three times naive one-in-five" [PAGE 6]. Good.

Need "completion 74 vs 55" [PAGE 6]. Good.

Need "YPA 7.8 vs 8.0" [PAGE 6]. Good.

Need "typical QB too cautious" [PAGE 7]. Good.

Need "Table 1 top/bottom" maybe not necessary. Could mention Goff +2.1, Mahomes +2.0, Brees +1.9, etc. [PAGE 7]. Not needed.

Need "Brees cyber model 64.3%" [PAGE 11]. Good.

Need "Brady 46.1%" [PAGE 11]. Good.

Need "skeptical" quote [PAGE 11]. Good.

Need "interception table" maybe Foles 1.23% actual 1.2%, Winston 2.28% actual 5.4% [PAGE 10]. Good. Could include.

Need "interception probability mean top/bottom" [PAGE 10]. Good.

Need "expected interception rates lower than actual for high-interception QBs" [PAGE 10]. Good.

Need "expected completion rate" [PAGE 9]. Good.

Need "Brees expected compl 67.0 actual +15.0" [PAGE 9]. Good.

Need "Taylor -10.5" [PAGE 9]. Good.

Need "model rarely considers pass completions highly improbable due to throw-away exclusion" [PAGE 8]. Good.

Need "limitations: binary duress, two nearest defenders, receiver talents, interceptions separate from yards, snapshot, LSTM" [PAGE 11-12]. Good.

Need "future EPA" [PAGE 12]. Good.

Need "Cross-layer weather" no quote. We can say "The input inventory in [PAGE 2] and [PAGE 5] does not list weather, field surface, wind, temperature, precipitation, or ball-flight covariates." This is an inference from source. Good. Need "exact singularity/breakdown regimes": For weather, if \(w_i\) omitted, no exact singularity but model breakdown when \(P(Y|x,w)\neq P(Y|x)\). Good.

Need "RLVR" maybe "Reinforcement Learning with Verifiable Rewards" not in paper. Could use acronym as user did. Need not define? Maybe "RLVR-style". Good.

Need ensure ">= 1,000-word DEPTH" maybe total 2500. Need not too long. We'll write detailed but not insane. Token budget okay.

Need maybe include "The source says '60%' in abstract and '59.8%' in results; treat as rounding." Gray-zone audit. Good.

Need "multi-hop derivation" in THINK_TRACE:
- Step 1: Input representation x_i, model outputs categorical distribution over 5 receivers. Accuracy 0.598 vs 0.2 baseline gives lift. 
- Step 2: If predicted target has higher completion 0.74 vs 0.55 but lower YPA 7.8 vs 8.0, then completion rate alone is not sufficient; expected yards/EPA needed. 
- Step 3: Decision quality: proportion max expected yards. But if max expected yards denominator zero, undefined. Also if expected yards ignores interception, it may overvalue risky targets. 
- Step 4: Interception: expected int rates lower than actual for high-int QBs -> attribution to accuracy/random error; but low base rate and noise, selection bias. 
- Step 5: Transfer learning: cyber-Brees alignment inverse with performance; skeptical. 
- Step 6: Gray-zone: snapshot at release vs progression; binary duress; two defenders; receiver traits; mirror augmentation handedness; throw-away/drops; weather. 
Need mention "cross-validated" abstract vs test set. Good.

Need "SOURCE_OPERATORS_AND_EQUATIONS" maybe structured:
1. State and sampling:
\[
f_s=10\,\mathrm{Hz}, \Delta t=0.1\,\mathrm{s}
\]
2. Target model:
\[
\hat{\pi}_{ij} = \mathrm{softmax}(g_\theta(x_i))_j
\]
units dimensionless; assumptions; breakdown: throws where no target (throw-away) excluded; calibration shift; if two receivers identical features, symmetry; if QB orientation would leak target, excluded; if orientation excluded, model cannot use biomechanical cue.
3. Accuracy:
\[
A = \frac{1}{N}\sum_i \mathbf{1}[\hat{j}_i=j_i]
\]
with \(\hat{j}_i = \arg\max_j \hat{\pi}_{ij}\). \(A=0.598\), baseline 0.2.
4. Completion contrast:
\[
\bar C_{\text{pred}}=0.74, \bar C_{\text{other}}=0.55
\]
units dimensionless.
5. YPA:
\[
\bar Y_{\text{pred}}=7.8, \bar Y_{\text{other}}=8.0
\]
units yards/attempt.
6. Expected YPA difference:
\[
\Delta_q = Y_q - \hat Y_q
\]
units yards/attempt; assumption actual YPA and expected YPA same play set; breakdown if sample small, selection bias.
7. Proportion max:
\[
\rho_i = \hat Y_{i,a(i)}/\max_j \hat Y_{ij}
\]
dimensionless; exact singularity if denominator 0; negative expected yards invalid; if interceptions not in numerator, overvaluation.
8. Expected completion:
\[
\Delta C_q = C_q - \hat C_q
\]
dimensionless; breakdown: drops counted as completions [PAGE 4], throw-aways excluded [PAGE 8], receiver skill omitted [PAGE 12].
9. Interception:
\[
\hat p^{\text{int}}_{ij}
\]
and binomial SE:
\[
\mathrm{SE}(\hat p)=\sqrt{\hat p(1-\hat p)/n}
\]
dimensionless; breakdown low base rate; n small; actual rates noisy.
10. Veto predicate:
\[
V_i = \mathbf{1}[\arg\max_j \hat Y_{ij}(x_i) \neq \arg\max_j \hat Y_{ij}(x_i,z_i)]
\]
where z_i omitted variables; units dimensionless; exact breakdown if omitted variable changes ranking. Good.

Need page citations with quotes. Include [PAGE 1], [PAGE 2], etc. Good.

Need "formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." We'll explicitly state units for each. Use "dimensionless" for probabilities, "yards/attempt" for YPA. For information units maybe cross-entropy? The paper doesn't mention information units. We can mention "bits" in log loss? Not necessary? User says SI/information/probability units. We can include probability units. Maybe include entropy:
\[
H(\pi_i)=-\sum_j \pi_{ij}\log_2 \pi_{ij}
\]
in bits, max \(\log_2 5\approx2.322\) bits. This is a formal information unit. But not in paper. It's a derived metric. Is that a toy equation? It's standard. Could include as optional audit. It helps satisfy information units. But not necessary. Maybe include "categorical entropy \(H\) in bits" for model uncertainty; not a fake ratio. Use as audit metric. Good. Need not overdo.

Need "exact singularity/breakdown regimes": For entropy, if \(\pi=0\), \(0\log0=0\) by convention. For softmax, underflow. For proportion, denominator zero. For binomial, p=0 or 1. For correlation r=-0.30, if sample small. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" maybe include equations for omitted variable bias:
\[
\mathbb{E}[Y_i\mid x_i] = \int \mathbb{E}[Y_i\mid x_i,z_i]\,dF(z_i\mid x_i)
\]
If \(z_i\) not independent, model's conditional expectation is not causal. Formal. Good.

Need "RLVR_COUNTERFACTUAL_VETOES" maybe include each with "Verification" and "Prediction". Need no betting. Good.

Need maybe mention "weather veto proof" as "no weather variables in source's input inventory, so any weather-specific interpretation is not supported; it is not a proof that weather matters, but a proof that the model cannot adjudicate it." Need exact phrase "veto proof" maybe "The proof is structural: input set lacks w_i; therefore model cannot identify weather effects." Good.

Need "Crisis habit regression vs counter-trap vs clock" in RECURSIVE_THEORY_OF_MIND. Need define:
- Crisis habit regression: under duress \(u_i=1\), QB's policy \(\pi_q(a|x,u=1)\) regresses to safe checkdown; model's expected target may be deeper. Paper Figure 4 play (2) quote. 
- Counter-trap: offense conceals intent, defense denies open receiver [PAGE 1/6]; model's predicted target may be a decoy or checkdown; if model recommends deeper emerging target while QB checks down, attribution may be habit not error.
- Clock: snapshot at release \(t_r\); model ignores earlier/later openness. QB progression policy has temporal order. Model may penalize correct progression [PAGE 12]. The "clock" is pass release time and progression. Need LSTM future. Good.

Need "Recursive theory of mind" maybe "model is a theory-of-mind of typical QB: it predicts what QB would choose given picture. It is recursive because it evaluates QB's choice against model's belief about QB's belief." Formal:
\[
\hat{j}_i = \arg\max_j \hat{\pi}_j(x_i)
\]
Then decision error:
\[
e_i = \mathbf{1}[j_i \neq \hat{j}_i]
\]
But if QB has private information (progression, duress, receiver skill), \(e_i\) is not pure error. Need mention. Good.

Need "Retrocausal genealogy" maybe "retrocausal" means future developments retroactively reinterpret earlier metrics. We can write "DeepQB's later limitations retroactively determine which earlier tracking metrics were insufficient." Historical lineage. Good.

Need final answer should be in XML tags. Need include no markdown? We can use plain text with LaTeX. Fine.

Potential issue: "exact XML sections" means no extra text outside. We'll only include six tags. Good.

Need ensure word count. Let's estimate: THINK_TRACE ~600, SOURCE ~800, RETRO ~400, RECURSIVE ~350, CROSS ~450, RLVR ~450. Total ~3050. Good.

Need maybe not too long but okay. Let's write carefully.

Need include exact quotes with [PAGE N]. Use quotation marks. Ensure no typos in quotes. Use "the the" if quoting? Avoid. Use exact quotes only short.

Need "verbatim quotes" maybe multiple. Good.

Need "source pages provided" cite exact markers. We'll cite many.

Need "ZERO TOY EQUATIONS": Avoid "Force/Fatigue". We won't. Use only formal equations. Good.

Need no "odds" word. Check final. Avoid "betting". Avoid "spread" maybe no. "totals" maybe avoid. "moneyline" no. "line" maybe "line-of-sight" includes line but not betting line. Is that okay? It says never mention betting lines; "line-of-sight" not betting. But to be safe? "line-of-sight" is technical, not betting. Fine. But maybe "line" alone could trigger? It's okay. We can say "sightline" instead. Use "sightline" to avoid. Good.

Need "weather veto proof" include "wind, precipitation, temperature, field surface" not in input. Good.

Need "physical/biomechanical/weather veto proof" not "weather data" in paper. Good.

Need "RLVR" maybe use "verifiable reward signal" no issue.

Let's draft final.

Need include "Assumptions" and "Breakdown" in source section. Use bullets.

Need maybe mention "softmax denominator" exact singularity? Softmax denominator positive if finite logits; breakdown under overflow/underflow. Fine.

Need equation for entropy:
\[
H_i=-\sum_{j=1}^{5}\hat{\pi}_{ij}\log_2 \hat{\pi}_{ij}\ \text{bits}
\]
Assumption \(0\log_2 0=0\). Max \(\log_2 5\). Breakdown when probabilities saturate (0 or 1) and entropy=0; model confident but may be wrong. Good.

Need "information units" satisfied.

Need "SI units" for time: seconds. Sampling interval 0.1 s. Position/velocity/acceleration: use field coordinate units; if yards, yd/s, yd/s^2. Orientation radians. Good.

Need "probability units" dimensionless. Good.

Need "exact singularity/breakdown regimes" in source section: 
- \(\rho_i\) undefined if \(\max_j \hat Y_{ij}=0\) (0/0); if negative expected yards allowed, ratio invalid. 
- Softmax stable unless logits infinite; use max-subtraction. 
- Entropy convention.
- Binomial SE zero at p=0 or 1; low base rate.
- Correlation r with small n.

Need "CROSS_LAYER" formal:
\[
V_{\text{phys}}(i)=1 \iff \exists z_i\in Z_{\text{phys}}:\ \arg\max_j \mathbb{E}[Y_{ij}\mid x_i]\neq \arg\max_j \mathbb{E}[Y_{ij}\mid x_i,z_i]
\]
Similar for bio/weather. Good. Use units? Expected yards yards/attempt; indicator dimensionless. Good.

Need "RLVR" predictions maybe "metric changes by more than pre-registered tolerance \(\epsilon\)" with \(\epsilon\). That's formal. Use \(\epsilon=0.02\)? Avoid arbitrary? "pre-registered" okay. Maybe not specify exact. Prediction: target accuracy decreases, calibration error increases. Good.

Need final.
</NATIVE_REASONING>

<THINK_TRACE>
The DeepQB paper must be audited as a multi-stage inference chain, not as a single accuracy number. The first hop is representation: the model receives a 230-node vector built from a pass-release snapshot of five eligible receivers, their two nearest defenders, quarterback kinematics, and play metadata [PAGE 2][PAGE 4]. The paper states: “Model input is a snapshot of player configuration at the time of pass release, including receiver position, velocity, acceleration, and orientation, as well as those of the secondary” [PAGE 2]. The second hop is the target-selection operator: a feed-forward network outputs a categorical distribution over five receivers and predicts the argmax. The reported accuracy is “59.8% – three times the naïve estimate for a one-in-five proposition” [PAGE 6]. This is not merely a classification result; it is a claim that geometry plus metadata contains recoverable signal about quarterback choice. The third hop is outcome contrast: “When passers target the predicted receiver, passes are completed 74% of the time, compared to 55% when the QB targets any other receiver” [PAGE 1]. But the fourth hop creates the central paradox: “Yards Per Attempt (YPA) when quarterbacks target the predicted receiver is significantly lower than when he targets another receiver (7.8 vs 8.0 YPA)” [PAGE 6]. The paper resolves this by arguing “the typical quarterback favors a safer choice at the expense of optimum efficiency” [PAGE 7]. That resolution is plausible but not decisive: it depends on whether expected yards are properly separated from interception risk, receiver skill, and progression timing.

The fifth hop is decision-quality attribution. Variant 2 estimates expected yards for each receiver and compares actual target expected yards to the maximum available. The source gives the example that if maximum available expected yardage is 9.0 and the quarterback targets 7.5, the proportion is 7.5/9.0 = 83% [PAGE 7]. This is a formal metric, but it has a gray zone: the denominator can vanish, and the numerator can overvalue a target if interception probability is excluded. The paper admits future work should incorporate Expected Points Added because Variant 2 “addresses each pass play’s expected yards separately from interception chances” [PAGE 12]. The sixth hop is passing accuracy: Variant 3 compares actual completion rate to expected completion rate [PAGE 9]. This is better than raw completion percentage because “Completion percentage does not account for the difficulty of the throw, nor does it exclude ‘throw-away’ pass attempts and receiver drops” [PAGE 9]. Yet the model counts drops as completions “from the passer’s point of view” [PAGE 4] and excludes deliberate throw-aways [PAGE 8]. Thus the completion metric is internally coherent but not interchangeable with conventional completion percentage.

The seventh hop is interception inference. The paper reports mean interception probabilities and actual interception rates for top and bottom passers [PAGE 10], then concludes that because expected interception rates are lower than actual rates for high-interception quarterbacks, “interceptions in the NFL are primarily a result of inaccurate throws and random sample error rather than bad targeting decisions” [PAGE 10]. That is a strong attribution from a low-base-rate event. “Interceptions are events with a very low base rate and often involve tipped balls or other random factors” [PAGE 9], so actual interception rates are noisy and selection effects can dominate rankings. The eighth hop is transfer learning: the “cyber-Brees” model raises Brees-specific accuracy to 64% [PAGE 11], but the alignment table puts several weak passers near Brees and several strong passers far away; the paper itself says, “This should make one skeptical of these results” [PAGE 11]. The gray-zone audit therefore separates three claims: the model can predict targets above baseline; predicted targets have higher completion but lower YPA; and decision quality can be attributed at the quarterback level. The first is supported by the reported test set; the second is reported but requires reconciliation with risk and progression; the third is the most fragile because of omitted pass-rush geometry, receiver traits, throw-away handling, temporal snapshot limits, and selection bias.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Notation: for play \(i\), receiver \(j\in\{1,\dots,5\}\), input vector \(x_i\in\mathbb{R}^{230}\), target probability \(\hat{\pi}_{ij}\), expected yards \(\hat{Y}_{ij}\), and actual target \(a(i)\). Tracking is sampled at \(f_s=10\,\mathrm{Hz}\), so \(\Delta t=0.1\,\mathrm{s}\) [PAGE 3]. Position is in field-coordinate units; velocity has units of position-units\(\cdot\mathrm{s}^{-1}\); acceleration has units of position-units\(\cdot\mathrm{s}^{-2}\); orientation is in radians or degrees; probabilities and rates are dimensionless; YPA and expected yards are in yards per attempt.

1. Target-selection distribution. The final layer produces a categorical distribution:
\[
\hat{\pi}_{ij}=\frac{\exp(z_{ij})}{\sum_{k=1}^{5}\exp(z_{ik})},\qquad 
\hat{\pi}_{ij}\in[0,1],\quad \sum_{j=1}^{5}\hat{\pi}_{ij}=1.
\]
The predicted target is \(\hat j_i=\arg\max_j \hat{\pi}_{ij}\). Assumption: the five eligible receivers are exhaustive and mutually exclusive target classes. Breakdown regime: throw-away attempts have no targeted receiver and are excluded [PAGE 8], so the model is not calibrated for “no-target” decisions. Numerical breakdown occurs if logits are infinite; stable softmax uses max-logit subtraction. Model entropy is
\[
H_i=-\sum_{j=1}^{5}\hat{\pi}_{ij}\log_2\hat{\pi}_{ij}\ \text{bits},
\]
with \(0\log_2 0=0\); maximum is \(\log_2 5\approx2.322\) bits. Saturated \(\hat{\pi}_{ij}\in\{0,1\}\) gives \(H_i=0\), indicating confidence, not correctness.

2. Target accuracy and baseline lift. With \(N\) plays,
\[
A=\frac{1}{N}\sum_{i=1}^{N}\mathbf{1}[\hat j_i=a(i)].
\]
Reported \(A=0.598\) [PAGE 6]. The naïve one-in-five baseline is \(1/5=0.2\), so the reported lift is \(0.598/0.2=2.99\). Assumption: the test set is the 2018 regular season through week 12, \(n=10,623\) [PAGE 3]. Breakdown: if the class distribution is not balanced across the five target slots, the “one-in-five” baseline is not the correct chance baseline; the paper’s statement is a coarse reference, not a calibrated null model.

3. Completion contrast. Let \(\bar C_{\text{pred}}\) be completion rate when the actual target equals the predicted target, and \(\bar C_{\text{other}}\) otherwise. The paper reports
\[
\bar C_{\text{pred}}=0.74,\qquad \bar C_{\text{other}}=0.55
\]
[PAGE 1][PAGE 6]. Units: dimensionless. Assumption: “Passes classified as ‘drops’ by ESPN’s VAT analysis are counted as successful completions from the passer’s point of view” [PAGE 4]. Breakdown: the contrast cannot be interpreted as pure decision quality because receiver skill and throw difficulty are not fully modeled; the paper states, “Receiver talents and skills are not fully accounted for” [PAGE 12].

4. YPA contrast and the caution hypothesis. Let \(\bar Y_{\text{pred}}\) and \(\bar Y_{\text{other}}\) be yards per attempt in the same two conditions:
\[
\bar Y_{\text{pred}}=7.8,\qquad \bar Y_{\text{other}}=8.0
\]
[PAGE 6]. Units: yards per attempt. The paper explains the completion/YPA reversal by arguing “the typical quarterback favors a safer choice at the expense of optimum efficiency” [PAGE 7]. Assumption: YPA is a sufficient efficiency measure. Breakdown: YPA does not incorporate interception risk, down, distance, field position, or possession value; the paper explicitly notes future incorporation of Expected Points Added [PAGE 12].

5. Quarterback value above expected. For quarterback \(q\),
\[
\Delta\mathrm{YPA}_q=\mathrm{YPA}_q-\widehat{\mathrm{YPA}}_q,
\]
in yards per attempt. The source says “The YPA above/below expected column is the difference between actual and expected YPA” [PAGE 7]. Assumption: the expected YPA is generated from the same play distribution and receiver/defense configuration. Breakdown: small samples and selection bias are acknowledged: “Unfortunately, we cannot escape the possibility of selection bias” [PAGE 8].

6. Proportion of maximum expected yards. For actual target \(a(i)\),
\[
\rho_i=\frac{\hat Y_{i,a(i)}}{\max_{j\in\{1,\dots,5\}}\hat Y_{ij}},\qquad \rho_i\in[0,1]\ \text{when }\max_j\hat Y_{ij}>0.
\]
The paper’s example is \(7.5/9.0=83\%\) [PAGE 7]. Units: dimensionless. Exact singularity: if \(\max_j\hat Y_{ij}=0\), then \(\rho_i\) is \(0/0\) and undefined; if expected yards can be negative, the ratio is not interpretable as a proportion. Breakdown: the denominator ignores interception probability, so a high-\(\rho_i\) target can still be a poor risk choice.

7. Expected completion above expected. For quarterback \(q\),
\[
\Delta C_q=C_q-\hat C_q,
\]
dimensionless. The source reports expected completion rates and actual completion rate above expected [PAGE 9]. Assumption: the model’s completion probabilities are calibrated on the targeted-pass population. Breakdown: “Considering just completions and incompletions, the model appears well-calibrated … although it rarely considers pass completions as highly improbable. This is substantially due to the exclusion of deliberate ‘throw-away’ passes” [PAGE 8]. Thus calibration on targeted passes does not transfer to all attempts.

8. Interception probability and binomial noise. For each receiver target, Variant 3 estimates \(\hat p^{\text{int}}_{ij}\in[0,1]\). For an observed interception rate \(\hat p\) over \(n\) attempts, the binomial standard error is
\[
\mathrm{SE}(\hat p)=\sqrt{\frac{\hat p(1-\hat p)}{n}},
\]
dimensionless. Breakdown: at \(\hat p=0\) or \(\hat p=1\), the standard error is zero but the estimate is still fragile; at low base rates, ranking quarterbacks by raw interception counts is noisy. The paper states, “The absolute number of interceptions, or even interceptions per pass, will therefore be very noisy measures” [PAGE 9].

9. Omitted-variable veto predicate. Let \(z_i\) denote omitted physical, biomechanical, or weather covariates. A veto is triggered when
\[
V_i=\mathbf{1}\!\left[\arg\max_j \mathbb{E}[Y_{ij}\mid x_i]\neq \arg\max_j \mathbb{E}[Y_{ij}\mid x_i,z_i]\right].
\]
Units: indicator dimensionless; \(Y_{ij}\) in yards per attempt. Exact breakdown regime: if \(z_i\) changes the target ranking or the expected-yard ordering, the model’s decision attribution is not identified from \(x_i\) alone. This predicate is the formal basis for the cross-layer audit below.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
DeepQB’s lineage is a compression of sports-tracking epistemology. The paper cites Cervone et al. for a Markov framework assigning expected point value to time segments of a basketball possession [PAGE 2]; Wang and Zemel for feed-forward and recurrent play classification [PAGE 2]; Le et al. for “deep imitation learning” with LSTM networks to mimic soccer defenders [PAGE 2]; Harmon et al. for multi-channel pictorial representations classified by CNN [PAGE 2]; Lucey et al. for a conditional random field estimating shot success [PAGE 2]; Mehrasa et al. for one-dimensional convolutional trajectory models [PAGE 2]; and Hochstedler for Voronoi tessellation of receiver openness with only 224 plays [PAGE 2]. DeepQB retroactively reinterprets these as preconditions: tracking data must become a structured multi-agent state, then a learned policy or value function, then an attribution device. The NFL’s RFID system is the physical substrate: “two electronic RFID chips in each of the players’ shoulder pads” and “player position, velocity, acceleration, and orientation is provided at 10Hz” [PAGE 3]. That shoulder-orientation channel is why the paper can discuss biomechanics at all, even though quarterback orientation is deliberately excluded from inputs [PAGE 5].

The multi-week traps are research-program traps, not game-week claims. First, the snapshot trap: the model uses “a snapshot of the play at the time of pass release” [PAGE 12], while quarterback reads are taught “in a progression, from one primary receiver to a secondary, and then to an alternate” [PAGE 12]. A receiver open earlier can be covered at release, so the model “may be penalizing a quarterback who makes the correct read in the planned progression” [PAGE 12]. Second, the binary-duress trap: “All variants of the model currently rely solely on a binary ‘QB duress’ variable” [PAGE 11]. That compresses pass-rush geometry into one bit and can misattribute an obscured sightline to bad decision-making. Third, the two-defender trap: “Limiting the picture to the two nearest defenders to each receiver was another modeling decision” [PAGE 12]; a third defender can change the feasibility of a throw. Fourth, the receiver-trait trap: “Receiver talents and skills are not fully accounted for” [PAGE 12], including “the size and strength of receivers” [PAGE 12]. Fifth, the mirror-augmentation trap: the training set was mirrored about the longitudinal axis, but “The drawback is quarterback handedness, especially if he throws while on the run” [PAGE 5]. Sixth, the transfer-learning trap: the cyber-Brees model is “admittedly experimental,” and the paper warns that “Some of the worst performing quarterbacks of the season are most aligned with the Brees model, while most of the best quarterbacks of the season are the least aligned” [PAGE 11]. Each trap is multi-week because it is not a single bad play; it is a systematic bias in the research design that persists until the feature set, label set, or temporal resolution is changed.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
DeepQB builds a recursive theory-of-mind operator: it asks, “Given the picture presented to a typical quarterback, who would he choose to target?” [PAGE 5]. The model’s belief about the quarterback’s belief is \(\hat{\pi}_{ij}\); the quarterback’s actual choice is \(a(i)\). The gap \(\mathbf{1}[a(i)\neq\arg\max_j\hat{\pi}_{ij}]\) is only a decision error if the model’s belief state contains all relevant private information. It does not. Crisis habit regression appears when duress compresses the quarterback’s policy toward a safe check-down. Figure 4 play (2) is described as “a check-down, although DeepQB recommends the deeper emerging target with p=.50” [PAGE 6]. That is not automatically a quarterback error; it may be a rational habit under pressure, a progression rule, or a sightline constraint. The counter-trap is offensive concealment versus defensive denial: “the offense often conceals its intent by design, while defenses try not to allow any single receiver to be open” [PAGE 1]. A model trained on typical choices can mistake a deliberately designed decoy or check-down for a missed deeper read. The clock is the pass-release snapshot: the model sees \(t_r\), not the progression from \(t_0\) to \(t_r\). Because the paper warns that a correct early read can look like a missed open receiver at release [PAGE 12], the recursive audit must separate “QB chose against the model’s belief” from “QB chose according to a temporally ordered progression the model cannot see.” The correct counter-trap is not to overrule the quarterback with the model; it is to condition the model on progression, duress geometry, and sightline before assigning habit or error.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical veto. The tracking layer is 10 Hz RFID with shoulder orientation [PAGE 3], but the model’s input inventory is a release-time snapshot of receiver and secondary kinematics plus metadata and a binary duress flag [PAGE 2]. The paper states: “All variants of the model currently rely solely on a binary ‘QB duress’ variable to account for the constraints on the QB due to the pass rush” [PAGE 11]. Veto proof: if a passer’s sightline is physically obstructed by a rusher, the binary flag cannot represent the obstruction geometry. The model’s target ranking is then not identified from \(x_i\) alone, and \(V_i=1\) in the omitted-variable predicate whenever adding pass-rush geometry changes the ranking. The paper itself anticipates this: future versions “will use a more complete picture of pass protection” because “quarterbacks are sometimes not able to target open receivers due to being obscured by pass rushers” [PAGE 12].

Biomechanical veto. The paper deliberately excludes quarterback shoulder orientation: “The orientation of the quarterback was deliberately excluded from the inputs” because it would be “cheating” and “would very often correlate strongly with the direction of the intended target” [PAGE 5]. That is a defensible anti-leakage choice, but it means the model cannot adjudicate biomechanical throwing constraints. Mirror augmentation assumes lateral symmetry, yet “The drawback is quarterback handedness, especially if he throws while on the run” [PAGE 5]. Veto proof: if handedness and rollout direction interact, then the symmetry assumption \(P(Y\mid \mathcal{T}x)=P(Y\mid x)\) fails for those plays, and the model’s error attribution is biased. Receiver biomechanics are also omitted: “other aspects such as the size and strength of receivers is a factor in the probability of reception and the yardage estimate of each play” [PAGE 12]. Any claim that a low-probability target was a pure decision error is vetoed when receiver size, strength, catch radius, or contested-catch ability would change the expected outcome.

Weather veto. The source’s input inventory lists receiver and secondary position, velocity, acceleration, orientation, relative positions and angles, down, distance, yards to the end zone, duress, and play-action [PAGE 2][PAGE 5]. It does not list wind, precipitation, temperature, field surface, grip, or ball-flight covariates. Veto proof: if weather \(w_i\) affects ball flight or traction and is not screened off by \(x_i\), then \(\mathbb{E}[Y_i\mid x_i]\neq\mathbb{E}[Y_i\mid x_i,w_i]\). The model cannot adjudicate weather-specific deviations; it can only produce a conditional estimate under the unobserved weather distribution in training. This is a structural veto, not an empirical claim that weather always matters. It proves that any weather-sensitive interpretation of a DeepQB “error” is outside the model’s identified support.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
RLVR veto 1: throw-away contamination. Verification: recompute Variant 1 target accuracy and Variant 3 calibration on all pass attempts, explicitly adding a “no-target/throw-away” class or abstention label. The paper says the model “rarely considers pass completions as highly improbable” substantially because of “the exclusion of deliberate ‘throw-away’ passes from the data, which are technically attempts but did not have a targeted receiver” [PAGE 8]. Prediction: if throw-aways are included without an abstention label, target accuracy on the full attempt population falls below the reported 59.8% and completion calibration degrades; if adding an abstention class restores calibration, the original five-class model is vetoed for all-attempt claims but retained for targeted-pass claims. Veto condition: any claim that DeepQB evaluates quarterback decisions on every pass attempt without conditioning on targeted passes.

RLVR veto 2: pass-rush geometry expansion. Verification: retrain Variant 1 and Variant 2 with full pass-protection features—blocker and rusher positions, velocities, and sightline obstruction—instead of the binary “QB duress” input [PAGE 11]. Evaluate on the subset where the binary flag is 1 and a rusher is between the quarterback and a receiver. Prediction: model target recommendations shift on obscured-sightline plays, and false “QB error” labels decrease because the quarterback could not physically access the model’s preferred target. Veto condition: if the expanded model changes the ranking or expected-yard ordering on those plays, the binary-duress model is vetoed as a decision-quality attribution device for pressured passers.

RLVR veto 3: temporal progression and LSTM counterfactual. Verification: compare the release-snapshot model against a continuous-tracking model, such as an LSTM variant, on plays with labeled or reconstructed progression order. The paper warns that “Open receivers earlier in the development of a play may later become covered by the time of release” and that the snapshot model “may be penalizing a quarterback who makes the correct read in the planned progression” [PAGE 12]; it proposes LSTM networks “to assess passing outcomes on a continuous basis throughout the play” [PAGE 12]. Prediction: the snapshot model over-penalizes quarterbacks on progression throws where the earlier receiver was open before \(t_r\) but covered at release; the continuous model reduces those false errors. Veto condition: if the continuous model’s error labels diverge systematically from the snapshot model on progression plays, the snapshot model is vetoed for claims about “missed open receivers” unless it is conditioned on progression and release timing.
</RLVR_COUNTERFACTUAL_VETOES>