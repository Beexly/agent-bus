---
source: "2016 NBA Offensive Plays using Neural Networks.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 9
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3844
---

<NATIVE_REASONING>
The user wants a deep reasoning response based on a research paper about classifying NBA offensive plays using neural networks. They have provided strict invariants:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

No betting lines. No toy equations. Must be formal.

I need to write a comprehensive analysis of the paper "Classifying NBA Offensive Plays Using Neural Networks" by Wang & Zemel (2016). The paper is 9 pages.

Let me structure this carefully.

**THINK_TRACE (>=400 words):**
Deep multi-hop derivation and gray-zone audit. I need to trace the logic:
- SportVU data at 25 fps, coordinates, unique player identifiers.
- Problem: raw coordinates are not sensible because (10,10) != 2x(5,5) in semantic signal. Need pictorial representation (footprints).
- Problem: footprint images lose temporal info. Solution: separate into time steps with fainter previous frames (shadows), add white noise to prevent memorization.
- RNN formulation: h_t = σ(W_in x_t + U h_{t-1} + b_in). Output Pr(y_t|x_1...x_t) = softmax(W_out h_t + b_out).
- Cost function: product of probabilities, argmax over theta.
- Player embedding: autoencoder based on shooting tendencies mapping to 10D embedding space. Resolve positions by coordinates and neighbors.
- Sequence prediction auxiliary task: minimize Euclidean distance ||x_t^n - x̂_t^n||_2. Joint optimization θ = argmax(w * Cost_seq + Cost_class).
- Anytime prediction: predict at any frame, not just end.
- Experimental setup: 2013-2014 season, 11 play classes, 7481 original, 1435 after filtering. 95 test, 1340 train/val in 10 batches. Balanced class distribution.
- Results: base-rate .137 top-1. NN .547 top-1, .779 top-3. RNN .656 top-1, .806 top-3. At T=.7 precision .900 recall .590.
- Transfer learning: 2014-2015 season, 327 labelled, 109 training. New model .336 top-1. Transfer .537 top-1. Fine-tune .619 top-1.
- Gray zones: 
  - "Unless the play breaks down due to time-outs, fouls, or ended prematurely" - human expert qualification.
  - Limited labelled sequences (1435) vs unlabelled abundance.
  - Memorization of uninformative coordinates/timeframes.
  - Player identifier confounding: same play with different players, position changes depending on lineup.
  - Transfer across seasons: plays evolve slightly, lineup changes.
  - Sequence prediction starts after 2 seconds.
  - Threshold T=.4 vs T=.7 tradeoffs.
  - "Distinguishing aspect can occur at different times" (HORNS early vs others late).
  - 25 fps raw, but sequential representation at 2.5 fps (Figure 2 says 4 seconds at 2.5 fps). Wait, page 2 says 25 fps, page 3 says 2.5 fps for sequential rep. Need to note this downsampling.

**SOURCE_OPERATORS_AND_EQUATIONS:**
Formal LaTeX equations with units, page citations.
- h_t = σ(W_in x_t + U h_{t-1} + b_in) [PAGE 3]
- Pr(y_t|x_1,...,x_t) = softmax(W_out h_t + b_out) [PAGE 4]
- Cost_class = ∏_{n=1}^N Pr(y_n|x_n) [PAGE 4] (actually should be sum of log likelihood, but paper writes product; I should cite verbatim and note units are dimensionless probability in [0,1]).
- θ = argmax_θ Cost_class [PAGE 4]
- x̂_{t+1} = F(x_1,...,x_t) [PAGE 5]
- Cost_seq = Σ_{n=1}^N Σ_{t=k+1}^T ||x_t^n - x̂_t^n||_2^2 [PAGE 5], units: pixels^2 or court-coordinate squared (SportVU coordinates). k = frame after 2 seconds.
- Joint: θ = argmax_θ (w * Cost_seq + Cost_class) [PAGE 5]. Note: paper says argmax but costs are to be minimized; this is a sign inconsistency in source. I should flag it as a gray zone/breakdown.
- Embedding: 10-dimensional embedding space [PAGE 4].
- Top-1 base-rate 13.7% = 0.137 [PAGE 6/7].
- T=.4 and T=.7 thresholds [PAGE 6].
- 25 fps [PAGE 2]; sequential at 2.5 fps [PAGE 3].
- 11 play classes [PAGE 6].
- 1435 sequences [PAGE 6].
- 95 test sequences [PAGE 6].

Breakdown regimes:
- When play breaks down due to timeouts, fouls, ended prematurely [PAGE 2].
- When model must predict before distinguishing features appear (anytime prediction) [PAGE 5/6].
- When transferring across seasons without fine-tuning [PAGE 7].
- When limited to 109 examples [PAGE 7].
- When threshold T=.7: precision high but recall drops to 59% [PAGE 7].

**RETROCAUSAL_GENEALOGY:**
Historical/scientific lineage & multi-week traps.
- Lineage: Hochreiter & Schmidhuber LSTM 1997 [PAGE 9, ref 4]. Goodfellow et al. Deep Learning [PAGE 9, ref 3]. Action recognition in video [PAGE 2, refs 1,2]. SportVU/STATS LLC NBA tracking data.
- Multi-week traps: 
  - Training on one season, testing next: representation drift, coaching changes, roster turnover.
  - Fine-tuning with only 109 examples (~1 month) may overfit to early-season noise.
  - "Transfer" model performed slightly worse than old dataset; plays evolved.
  - Human expert baseline: nearly perfect classification only when play doesn't break down; real games have breakdowns.
  - The paper's claim "roughly double the data a human expert needs" - abstraction gap between tracking dots and semantic playcall.

**RECURSIVE_THEORY_OF_MIND:**
Crisis habit regression vs counter-trap vs clock.
- This section is more interpretive but must stay formal. 
- Crisis habit regression: Under defensive pressure, teams revert to default sets (e.g., horns initial setup). RNN hidden state h_t accumulates evidence; under crisis, the dynamics may switch regimes.
- Counter-trap: Defense recognizes the playcall and adjusts; offense counters. The model sees only coordinates, not defensive intent explicitly (though defense is part of coordinates). The "distinguishing aspect can occur at different times" means early prediction traps (HORNS) vs late disambiguation.
- Clock: Shot clock 24 seconds (mentioned page 5), play can start at any time. Anytime prediction must operate under variable time-to-shot. Sequence prediction starts after 2 seconds. The clock imposes a hard deadline on inference latency.

**CROSS_LAYER_VETO_ADJUDICATION:**
Physical/biomechanical/weather veto proof.
- Physical: Court dimensions fixed, coordinates bounded. Player positions constrained by physics (max speed, acceleration). No weather (indoor). 
- Biomechanical: 5 players, ball 3D position. Human movement limits. Screens, cuts, drives have biomechanical signatures.
- Weather veto: Indoor arena, climate controlled, so weather is a null veto (no effect). 
- Veto conditions: If coordinates violate physical feasibility (e.g., player teleports > max speed between frames at 25 fps), veto the frame. If ball 3D position impossible, veto.
- Breakdown: timeouts, fouls, premature ends [PAGE 2].

**RLVR_COUNTERFACTUAL_VETOES:**
3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning Verifiable Rewards? Or just verifiable scenarios. I'll interpret as verifiable counterfactual veto scenarios for the model deployment.
1. Veto: Play breaks down due to timeout/foul/premature end. Prediction: model output should be suppressed ("don't-know") or flagged; precision at T=.7 is 90% but recall 59%, meaning 41% of breakdowns may force false positives if not vetoed.
2. Veto: Cross-season transfer without fine-tuning when roster turnover > X%. Prediction: top-1 drops from .656 (in-season) to .537 (transfer), so veto auto-labeling and route to human scout.
3. Veto: Early-frame inference before distinguishing features (t < setup time for late-developing plays). Prediction: RNN requires less evidence as training progresses (Figure 5), but at t=0 for non-HORNS plays, accuracy should be near base-rate .137; veto predictions below confidence threshold.

Need to ensure total words >= 1000 across sections. Each section should be substantial. THINK_TRACE >= 400 words.

No betting lines. No toy equations. Use real equations from paper. Cite [PAGE N].

Let me draft carefully, ensuring word count and strict XML tags.

Word count planning:
- THINK_TRACE: ~500 words.
- SOURCE_OPERATORS_AND_EQUATIONS: ~350 words.
- RETROCAUSAL_GENEALOGY: ~250 words.
- RECURSIVE_THEORY_OF_MIND: ~250 words.
- CROSS_LAYER_VETO_ADJUDICATION: ~200 words.
- RLVR_COUNTERFACTUAL_VETOES: ~200 words.
Total ~1750 words. Good.

Need to avoid saying "odds", "spread", "moneyline", "total". None of that.

Check equations for LaTeX formatting. Use proper LaTeX.

Let's write.

Important: cite exact page markers [PAGE N] and verbatim quotes where appropriate.

Let's produce the final answer.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's central derivation chain begins with the raw SportVU observation model: at 25 frames per second, each player emits an (x,y) coordinate and the ball emits a 3D position, tagged by a unique player identifier. The authors explicitly reject treating these raw tuples as model inputs because Euclidean magnitude in coordinate space does not map monotonically to semantic signal; (10,10) is numerically twice (5,5) but not twice as informative for a playcall. This is a representation-theoretic veto, not a statistical convenience. The first conversion is therefore a pictorial "footprint" image that collapses player trajectories into a static spatial layout, which the paper acknowledges destroys temporal ordering because relative motion and ball-shadow sequencing are flattened.

To recover time, the authors separate the footprint into discrete time steps, appending fainter "shadow" positions from previous frames and injecting uncorrelated white noise into every sequential input. The noise term is a regularization operator whose exact distributional parameters are not specified in the text; its role is to prevent the network from memorizing uninformative coordinates or timeframes rather than learning the play's generative dynamics. The recurrent state update is defined as h_t = σ(W_in x_t + U h_{t-1} + b_in), where h_t accumulates evidence over time. The paper states the algorithm is stationary across time, meaning the transition weights do not change with the game clock, but the accumulated hidden state does. This stationarity assumption is a gray zone: in live NBA games, defensive schemes, fatigue, and score-state can alter the effective dynamics of the same offensive set, yet the model holds W_in, U, and b_in fixed.

A second confounding layer is player identity versus court position. The same offensive play executed by different lineups produces different raw identifier sequences. The authors address this by training an autoencoder on shooting tendencies to map players into a 10-dimensional embedding space, then resolving each player's position from coordinates and embedding-space neighbors. This creates a dependency chain: if the embedding is trained on shooting tendencies that themselves shift across seasons or after coaching changes, the position resolution step can silently mislabel a player's role, corrupting the downstream RNN input. The paper does not quantify the error rate of this position-resolution module, which is a singularity risk when lineups change.

The auxiliary sequence-prediction task adds a second decoder minimizing ||x_t^n - x̂_t^n||_2^2 over coordinates, starting k frames after the 2-second mark. Joint optimization uses θ = argmax(w · Cost_seq + Cost_class). There is a sign inconsistency in the source: both Cost_seq and Cost_class are written as quantities to be maximized (Cost_class as a product of probabilities, Cost_seq as a sum of squared errors), yet Euclidean error must be minimized. This is a formal breakdown regime in the paper's notation that would invalidate gradient coupling if implemented literally.

Experimentally, the dataset contains 11 play classes drawn from 7,481 raw sequences, filtered to 1,435, with 95 held out as test and 1,340 split into 10 balanced batches. The base-rate top-1 accuracy is 0.137. The static NN achieves 0.547 top-1 and 0.779 top-3; the sequential RNN achieves 0.656 top-1 and 0.806 top-3. At threshold T = 0.7, the RNN yields precision 0.900 and recall 0.590. This precision-recall asymmetry means the model is safe to auto-label only when it is confident, but it will abstain on 41% of true plays; a scouting pipeline that relies on recall will miss plays unless human review fills the gap.

In transfer learning to the 2014-2015 season, the 'new' model trained on only 109 examples reaches 0.336 top-1, the direct 'transfer' model reaches 0.537, and 'fine-tune' reaches 0.619. The gap between in-season RNN (0.656) and fine-tune cross-season (0.619) is small but non-zero, indicating representation drift. The paper attributes this to plays evolving slightly and lineups changing, but offers no ablation separating roster turnover from schematic drift. Gray zones remain around what constitutes a "breakdown" (timeouts, fouls, premature ends), under which human experts themselves require moving dots rather than static outcomes, and the model's anytime-prediction behavior under shot-clock pressure, where the distinguishing frames for some plays occur only in the last seconds.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The formal operators and equations from the source are reproduced below with units, page citations, and breakdown conditions.

[PAGE 2] Raw observation: SportVU data provides each player's (x,y) coordinates and the ball's 3D position at 25 frames per second, plus a unique player identifier. Units: court spatial coordinates (feet or pixels, unstated), time in frames at f = 25 Hz.

[PAGE 2] Representation veto: " (10, 10) is twice of the value of (5,5) in the number system, but that does not mean (10,10) contains 2 times the signal for a certain playcall than that of (5,5)." This justifies the pictorial footprint representation over raw coordinate regression.

[PAGE 3] Sequential input downsampling: Figure 2 describes time evolving for 4 seconds at 2.5 frames per second, implying a temporal downsampling from the native 25 Hz to 2.5 Hz for the sequential model. Unit: frames per second (Hz).

[PAGE 3] RNN hidden-state transition:
h_t = σ(W_in x_t + U h_{t-1} + b_in)
where h_t ∈ R^d is the hidden state (dimension d unstated), x_t is the pictorial input at time t, σ is a nonlinear activation (sigmoid or ReLU), W_in, U, b_in are learned parameters. Units: dimensionless activation; W_in maps input dimension to hidden dimension, U maps hidden to hidden.

[PAGE 4] Conditional class distribution:
Pr(y_t | x_1, ..., x_t) = softmax(W_out h_t + b_out)
Output y_t ∈ {1, ..., K}, K = 11 play classes. Units: probability simplex, values in [0,1], Σ_y Pr = 1.

[PAGE 4] Classification cost (verbatim sign convention as printed):
Cost_class = ∏_{n=1}^N Pr(y_n | x_n)
θ = argmax_θ Cost_class
N = 1,340 training examples. Units: dimensionless probability product; note that maximizing a product of probabilities is equivalent to minimizing negative log-likelihood, but the source prints argmax without a log transform.

[PAGE 4] Player embedding: autoencoder maps each player to a 10-dimensional embedding space; neighbors share similar shooting tendencies (range, pre-shot movement). Unit: 10D real embedding space R^10.

[PAGE 5] Sequence-prediction target:
x̂_{t+1} = F(x_1, ..., x_t)
Predicts the (x,y) coordinate for timestep t+1. Units: same spatial coordinates as x.

[PAGE 5] Sequence cost:
Cost_seq = Σ_{n=1}^N Σ_{t=k+1}^T ||x_t^n - x̂_t^n||_2^2
where k is the frame after which prediction begins, set to 2 seconds from start. Units: squared spatial coordinate units (e.g., ft^2). Note: this is a minimization objective, yet the joint objective below prints argmax.

[PAGE 5] Joint objective:
θ = argmax_θ (w · Cost_seq + Cost_class)
w is a scalar weight. Breakdown regime: because Cost_seq is a sum of squared errors to be minimized and Cost_class is a probability product to be maximized, adding them under a single argmax without sign inversion or log-likelihood transformation is formally inconsistent; the relative scale of w is unstated, creating an unidentifiable tradeoff.

[PAGE 6] Data and base rates: 7,481 original sequences filtered to 1,435 across 11 classes; 95 test sequences; 1,340 train/validation sequences in 10 balanced batches. Top-1 base-rate = 0.137; top-3 base-rate = 0.390.

[PAGE 7] Thresholded operating points: precision/recall at T = 0.4 and T = 0.7. For the RNN at T = 0.7: precision = 0.900, recall = 0.590. At T = 0.4: precision = 0.727, recall = 0.918. Units: dimensionless ratios.

[PAGE 7] Transfer season: 327 labelled strategies in early 2014-2015; 109 examples available for training. Top-1 base-rate = 0.165; top-3 = 0.523. Results: new = 0.336, transfer = 0.537, fine-tune = 0.619 top-1 accuracy.

[PAGE 5/6] Anytime prediction and breakdown: prediction allowed at any frame; plays may break down due to time-outs, fouls, or premature endings, under which moving-dot classification remains the expert standard. Shot-clock is 24 seconds in the NBA, imposing a hard temporal deadline on inference latency.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The methodological lineage traces from Hochreiter and Schmidhuber's LSTM (1997), cited as reference [4] on [PAGE 9], through Goodfellow, Courville, and Bengio's deep-learning text (reference [3], [PAGE 9]), to video action recognition work by Liu, Luo, and Shah (CVPR 2009) and Kuehne et al. (ICCV 2011) cited on [PAGE 2]. The SportVU/STATS LLC tracking infrastructure and the Toronto Raptors' labeled offensive-play dataset ground the work in a specific institutional context: NBA regular-season games from 2013-2014, with labels supplied by team analysts Keith Boyarsky and Eric Khoury ([PAGE 9]).

A multi-week trap is embedded in the transfer experiment. The authors train on the 2013-2014 season and test on the first three months of 2014-2015, divided into three roughly monthly batches. The direct transfer model scores 0.537 top-1, below its in-season performance, and the authors state "most likely the plays have evolved slightly." This is a representation-drift trap: over a multi-week horizon, coaching adjustments, roster turnover, and opponent adaptation alter the distribution of offensive sets while the RNN weights remain stationary. Fine-tuning on 109 examples recovers to 0.619, but 109 sequences across 11 classes averages fewer than 10 examples per class, creating a few-shot overfitting trap where the model may memorize early-season noise rather than stable schematics.

Another retro-causal trap concerns the claim that the system labels sequences with "roughly double the data a human expert needs." Human experts achieve near-perfect classification on moving dots unless the play breaks down due to timeouts, fouls, or premature ends ([PAGE 2]). The model's 0.656 accuracy is strong relative to a 0.137 base rate, but it is not near-perfect, and the comparison to human data efficiency is confounded because experts bring prior knowledge of playbooks, defensive rotations, and contextual cues not present in the raw SportVU coordinate stream. The causal arrow runs from annotated expert labels to model supervision, so the model cannot exceed the granularity and consistency of those labels without introducing annotation bias as a hidden variable.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: under defensive pressure or shot-clock urgency, offensive teams tend to regress to default, high-frequency sets whose initial geometry is recognizable early (e.g., HORNS, which the paper notes is spotted from frame 1). The RNN's hidden state h_t accumulates evidence monotonically, but in a crisis the underlying play-generating process may switch regimes mid-possession. Because the transition weights W_in and U are time-stationary, the model cannot explicitly condition on a "crisis mode" variable; it can only reflect the crisis through accumulated coordinate deviations.

Counter-trap: the defense observes the same coordinates and may adjust mid-play, forcing the offense to counter-adjust. The model receives only offensive player positions and ball location; defensive intent is implicit in the spacing but not labeled. For plays whose distinguishing aspect occurs only in the last few frames, early inference is a trap: the model must either abstain or risk false positives. The anytime-prediction mechanism allows output at any frame, yet Figure 5 shows that early in training the model delays prediction to maximize evidence, while after learning it requires less time. This creates a recursive depth problem: the offense models the defense, the defense models the offense's model, and the RNN models neither explicitly—only the resulting coordinate trajectory.

Clock: the NBA shot clock is fixed at 24 seconds ([PAGE 5]), but a play can start at any time and setup duration varies with teammate readiness and defensive pressure ([PAGE 5/6]). Sequence prediction begins after 2 seconds ([PAGE 5]), and the model must produce classifications under variable inference deadlines. If a play develops slowly, waiting for late discriminative frames consumes shot-clock budget; if it develops early, waiting sacrifices nothing. The clock therefore imposes a real-time constraint on the evidence-accumulation horizon T in h_t, turning the RNN into a bounded-horizon filter rather than an offline classifier.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: the court geometry is fixed and bounded; player coordinates are constrained by human locomotion limits. At the native 25 Hz sampling rate ([PAGE 2]), any inter-frame displacement exceeding biomechanically plausible speed or acceleration should trigger a veto of that frame as sensor noise or identity-switch error. The paper does not specify such a physical plausibility filter, which is a veto gap: teleportation artifacts or SportVU identifier swaps could corrupt the sequence input and propagate through h_t.

Biomechanical layer: five offensive players and the ball generate screens, cuts, drives, and pick-and-rolls, each with characteristic kinematic signatures. The footprint and shadow representation captures these spatially, but does not encode limb-level biomechanics or physiological state (fatigue, injury). Because indoor NBA arenas are climate-controlled, weather is a null veto factor; temperature, humidity, wind, and precipitation do not vary inside the arena and therefore cannot modulate player movement distributions in this dataset.

Veto adjudication: a frame or sequence should be vetoed if (1) the play breaks down due to timeout, foul, or premature end ([PAGE 2]); (2) coordinates violate physical kinematic bounds between adjacent frames at 25 Hz; (3) player-position resolution via the 10D embedding fails because a lineup configuration was unseen in the embedding training data ([PAGE 4]); or (4) the model's maximum class probability falls below the deployed threshold T, forcing a "don't-know" output rather than a forced guess. The paper's precision-recall table shows that at T = 0.7 the RNN achieves 0.900 precision but only 0.590 recall ([PAGE 7]); this is empirical evidence that vetoing low-confidence predictions improves label purity at the cost of coverage, and any production system must define the acceptable abstention rate.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable reinforcement-learning-verifiable (RLVR) counterfactual veto scenarios with testable predictions:

Scenario 1 — Breakdown veto. Counterfactual: if a possession contains a timeout, foul, or premature end, veto all model output for that sequence and route to human review. Verifiable signal: SportVU raw data contains distinct markers for timeouts and in-bound plays ([PAGE 6]); transition offense is identifiable by nature. Prediction: the model's false-positive rate will drop because breakdown sequences are precisely those where human experts also struggle ([PAGE 2]); coverage will decrease proportionally to the frequency of breakdowns in the population, and precision at T = 0.7 should remain near 0.900 while recall falls below 0.590 on the filtered set.

Scenario 2 — Cross-season transfer veto. Counterfactual: if roster turnover between seasons exceeds a threshold or if no fine-tuning data from the new season is available, veto automatic play labeling and default to the previous season's transfer model only for scout triage, not final labels. Verifiable signal: 2014-2015 transfer model without fine-tuning achieves 0.537 top-1 versus 0.656 in-season RNN ([PAGE 7]); the 109-example fine-tune recovers to 0.619. Prediction: deploying the un-fine-tuned transfer model for automated scouting will produce a top-1 error rate of approximately 0.463, which is above the base-rate-meaningful utility threshold; a veto triggered by "no new-season fine-tuning examples" prevents systematic mislabeling of evolved sets.

Scenario 3 — Early-frame inference veto. Counterfactual: if inference is requested before the play's discriminative frames have elapsed (e.g., t < 2 seconds for non-HORNS plays whose setup is not yet visible), veto high-confidence output. Verifiable signal: HORNS is identifiable from frame 1, while other plays take nearly 4 seconds to reach setup ([PAGE 3]); Figure 5 shows the model requires less evidence as training progresses but still delays early in learning. Prediction: at t = 0 for late-developing plays, the model's output distribution will collapse toward the base rate of 0.137 top-1; any prediction above T = 0.7 in that window is likely overconfident memorization of coordinates rather than play understanding. A veto on predictions issued before the 2-second sequence-prediction start ([PAGE 5]) for non-initial-setup classes will reduce false positives at the cost of latency.
</RLVR_COUNTERFACTUAL_VETOES>