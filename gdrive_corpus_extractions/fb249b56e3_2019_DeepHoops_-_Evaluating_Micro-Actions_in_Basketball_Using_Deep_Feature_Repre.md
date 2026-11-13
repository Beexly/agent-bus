---
source: "2019 DeepHoops - Evaluating Micro-Actions in Basketball Using Deep Feature Representations - Sicilia, Pelechrinis, Goldsberry.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 16
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5498
---

<NATIVE_REASONING>
The user wants a deep reasoning response based on the provided source paper (DeepHoops). I need to produce output with exact XML sections:

1. `<THINK_TRACE>` - Deep multi-hop derivation & gray-zone audit (>=400 words).
2. `<SOURCE_OPERATORS_AND_EQUATIONS>` - Formal LaTeX, units, page citations, breakdown.
3. `<RETROCAUSAL_GENEALOGY>` - Historical/scientific lineage & multi-week traps.
4. `<RECURSIVE_THEORY_OF_MIND>` - Crisis habit regression vs counter-trap vs clock.
5. `<CROSS_LAYER_VETO_ADJUDICATION>` - Physical/biomechanical/weather veto proof.
6. `<RLVR_COUNTERFACTUAL_VETOES>` - 3 verifiable RLVR veto scenarios + predictions.

Constraints:
- ZERO BETTING LINES: No spreads, totals, moneylines, odds.
- ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
- >= 1,000-word depth across sections.

I need to analyze the paper thoroughly.

Key facts from the paper:
- DeepHoops evaluates micro-actions in basketball using deep feature representations of spatio-temporal data.
- Dataset: ~750 NBA games from 2016-17 regular season, optical tracking data, 25 Hz (every 0.04 seconds). [PAGE 1, 2]
- 134,000+ possessions. Each moment is 24-dimensional vector: 20 for player (x,y) coords (10 players), 3 for ball (x,y,z), 1 for shot clock. [PAGE 6]
- Possession i defined as sequence of moments x_t^(i). Players on court s_j^(i) one-hot encoded. [PAGE 6]
- Temporal window W_tau^(i) = (x_t^(i)) with {tau - (T + r) <= t <= tau - r}. T=128 moments (~5.12 seconds), r=16 moments (~0.64 seconds). [PAGE 6-7]
- Terminal actions L: FG Attempt, Shooting Foul, Non-Shooting Foul, Turnover, null. Null class out-weights others ~600 to 1. [PAGE 7]
- Baseline expected points beta_pi = 1.02. [PAGE 7]
- Value function nu: L -> R maps terminal action to points above expectation. Example: nu(FG Attempt) = 1.25 - 1.02 = 0.23. Turnover nu = -beta_pi = -1.02. Null nu = 0. [PAGE 7-8]
- Expected points: epsilon_pi(i)(tau) = beta_pi + E_{y~P(y)}[nu(y) | W_tau^(i), {s_j^(i)}]. [PAGE 8, Eq 2]
- Expected points added: Delta epsilon_pi(alpha,tau)(i) = epsilon_pi(i)(tau + epsilon) - epsilon_pi(i)(tau - epsilon), where epsilon > r. [PAGE 8, Eq 3]
- Architecture: stacked LSTM (3 layers, 32 cells each), player embedding d=8, dense layer 128 units, softmax output. Dropout 0.3 on dense, variational dropout 0.2 on LSTM. [PAGE 9-11]
- Loss: negative log-likelihood with downsampling. Downsampling parameter K. K=2 chosen best (BSS). [PAGE 10-11]
- Brier score, BSS. K=1 BS=0.4569, K=2 BS=0.3598, K=3 BS=0.3094, K=4 BS=0.2659. Wait, looking at Table 2: K=1 BS=0.4569, K=2 BS=0.3598, K=3 BS=0.3094, K=4 BS=0.2659. But text says "Performance is best for K = 2 (among the values examined). Epoch Time (in seconds) is lowest over all epochs." Wait, that seems contradictory because BS decreases as K increases (lower is better). Let me re-read carefully.

Page 12 Table 2:
K=1: BS=0.4569, BSref=0.6070, BSS=0.2472, Epoch Time=2180
K=2: BS=0.3598, BSref=0.4920, BSS=0.2686, Epoch Time=2929
K=3: BS=0.3094, BSref=0.4017, BSS=0.2299, Epoch Time=3552
K=4: BS=0.2659, BSref=0.3371, BSS=0.2114, Epoch Time=4200

Text says: "Performance is best for K = 2 (among the values examined). Epoch Time (in seconds) is lowest over all epochs." Wait, epoch time for K=1 is 2180, which is lower than K=2's 2929. But text says "Epoch Time (in seconds) is lowest over all epochs" referring to K=2? That seems odd. Actually reading: "DeepHoops outperforms the climatology (baseline) model in all cases. Performance is best for K = 2 (among the values examined). Epoch Time (in seconds) is lowest over all epochs." Maybe they mean among the values examined for the best trade-off? But K=1 has lower epoch time. However, BSS is highest for K=2 (0.2686 vs 0.2472 for K=1). So they pick K=2 based on BSS, not raw BS. They say "we pick K = 2." [PAGE 12]

Wait, but if BS is lower for K=4, why not pick K=4? Because BSS is lower? Actually BSS = 1 - BS/BSref. BSref changes with K? Why does BSref change? Climatology model assigns baseline probability. If downsampling changes class frequencies in training, maybe the climatology reference is computed on the downsampled distribution? Or maybe BSref is computed on the test set but with different class priors? Actually, the climatology model assigns every outcome its baseline probability. If the test set is fixed, BSref should be constant. But table shows different BSref for different K. That suggests BSref is computed on the downsampled training/validation distribution? Or maybe the reference probabilities are estimated from the downsampled data? The text says "Typically the Brier score of a model is compared to a climatology model which assigns to every outcome its baseline probability, i.e., the historical frequency of occurrences for each outcome." If downsampling changes the historical frequency in the training set, but test set is fixed... Hmm. Actually, maybe BSref is computed on the same downsampled data? That would be methodologically questionable but possible. Regardless, I should report what's in the paper.

Evaluation of micro-actions: 512 passes, 512 assists. epsilon = 21 (5 moment shift, fifth of a second). Over 72% of assists increase expected points. KS test rejects null at 0.1% level. [PAGE 12-13]

Reliability curves: well-calibrated. [PAGE 12]

Real-time application examples: Klay Thompson screen and pass, Kevin Durant drive and kick to Ian Clark. [PAGE 14-15]

Now, I need to write the response. Since the user didn't ask a specific question but provided a DRIVE SOURCE, I should provide a comprehensive analysis/framework using the required sections. The tone should be analytical, frontier reasoning, not betting-related.

Let me structure each section.

<THINK_TRACE>: >=400 words. Deep multi-hop derivation & gray-zone audit.
I need to derive the math, trace assumptions, identify gray zones (e.g., downsampling introduces selection bias, window length arbitrary, epsilon > r constraint, player embedding high-dimensional but d=8 small, league-average nu not lineup-specific, temporal locality assumption, null label dominance, softmax calibration vs proper scoring, etc.).

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, verbatim quotes.
Include Eq 1 (temporal window), Eq 2 (expected points), Eq 3 (expected points added), Eq 4 (softmax), Eq 5 (logits), Eq 6 (loss), Eq 7-11 (LSTM gates), Eq 12-14 (downsampled loss), Eq 15 (Brier), Eq 16 (BSS). Units: seconds, moments (0.04 s), points, dimensionless probabilities. Cite [PAGE N].

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps.
Lineage: Cervone et al. EPV (Markov chain), Hochreiter & Schmidhuber LSTM, Brier score, Cervone court realty, Yue et al. CRF, etc. Multi-week traps: overfitting to specific lineup embeddings, temporal non-stationarity across weeks (roster changes, injuries, fatigue), downsampling parameter drift, concept drift in nu(y) as league averages shift.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
This is more abstract. Crisis habit regression: teams revert to baseline plays under pressure. Counter-trap: defense anticipates the screen/pass. Clock: shot clock pressure (last element of x_t). The model conditions on players on court and shot clock. Recursive ToM: offense models defense's likely reaction, defense models offense's likely micro-action. DeepHoops captures this implicitly via trajectories but doesn't explicitly model opponent's belief state.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
Physical: court dimensions fixed, 24-dim vector, ball height z. Biomechanical: player speed limits, screen legality (moving screen), shooting mechanics (19 ft, 25 ft examples). Weather: indoor NBA, controlled climate, but arena humidity/temperature could affect ball grip (not in model). Veto proof: any prediction violating physical constraints (e.g., ball teleporting, player speed > human max) should be vetoed. The model uses raw trajectories; no explicit physics engine. Breakdown if tracking data missing (occlusion).

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning via Verifiable Rewards? Or just counterfactual vetoes. Need 3 scenarios where model output would be vetoed, with predictions.
1. Shot clock violation window: if tau near shot clock = 0 and no terminal action, model might still assign high FG probability due to trajectory; veto if clock expires without shot. Prediction: epsilon_pi drops to 0 at shot clock = 0 if no shot.
2. Illegal screen / moving screen: if O5 sets screen but moves (illegal), model may still value it positively; veto if referee calls illegal screen. Prediction: nu should be negative or reset, but model doesn't know referee calls.
3. Ball out of bounds before terminal action: if trajectory shows ball leaving court but labeled null; veto. Prediction: immediate turnover value -1.02.

Need to ensure no betting lines. No spreads, totals, moneylines, odds. Avoid "win probability" in betting sense. Expected points is fine (not odds).

Word count: Need >=1000 words total across sections. I'll aim for substantial depth.

Let's draft carefully.

I need to include verbatim quotes with [PAGE N] markers. Let's find good quotes.

Page 1: "How much is an on-ball screen worth? How much is a backdoor cut away from the ball worth?"
Page 2: "Optical tracking data provide a lens to the game that is much different from traditional player and team statistics."
Page 6: "Each of these moments are well-annotated with event descriptions when relevant (e.g., a pass occurred during moment (x(i)_tau ))."
Page 7: "The null class out-weights all other class labels roughly 600 to 1."
Page 7: "In our dataset, beta_pi = 1.02."
Page 8: Eq 2 and 3.
Page 9: Eq 4 softmax.
Page 10: Eq 7-11 LSTM.
Page 11: Eq 12-14 downsampling.
Page 12: Table 2 and BSS text.
Page 13: "Over 72% of assists increase the expected points."
Page 14: Figure 6 description.
Page 15: Figure 7 description.

I will now write the response. Need to be careful with LaTeX formatting inside XML. Use standard LaTeX.

Word count check: I'll write generously.

Let's begin.

Section 1: THINK_TRACE (>=400 words). I'll derive the expected points added operator, chain the assumptions, audit gray zones.

Section 2: SOURCE_OPERATORS_AND_EQUATIONS. List equations with citations.

Section 3: RETROCAUSAL_GENEALOGY.

Section 4: RECURSIVE_THEORY_OF_MIND.

Section 5: CROSS_LAYER_VETO_ADJUDICATION.

Section 6: RLVR_COUNTERFACTUAL_VETOES.

Make sure not to mention betting odds/spreads/totals/moneylines. Expected points is allowed.

Let's write.

THINK_TRACE content:
- Start from raw 24-dimensional moment x_t^(i) in R^24. Units: court coordinates in feet? Not specified but rectangular coordinates. Ball z in feet. Shot clock in seconds. Sampling interval Delta t = 0.04 s [PAGE 2]. T=128 moments => window length 5.12 s. r=16 moments => blind spot 0.64 s.
- The model conditions on W_tau^(i) defined by Eq 1. This creates a causal cone: only past information up to tau - r is used. This avoids look-ahead bias but imposes a hard truncation at the action onset.
- The null class imbalance 600:1 means the cross-entropy loss is dominated by null. Downsampling K controls the ratio. Loss Eq 14 averages over N(K+1) windows per batch. Gray zone: random downsampling each epoch introduces stochasticity in the gradient; the empirical distribution of null windows in training no longer matches test time, so calibrated probabilities may be epoch-dependent unless the downsampling distribution is preserved at inference (it isn't; inference uses full sequence).
- Expected points mapping nu: L -> R is league-average. Gray zone: nu(FG Attempt) = 0.23 assumes average points per shot 1.25, but this ignores shot location, defender distance, shooter identity. The player embedding attempts to capture shooter identity but nu is fixed globally. This is a singularity: when a possession ends in a high-value shot (e.g., open corner three by elite shooter), the global average underestimates conditional value.
- Expected points added Eq 3 requires epsilon > r. If epsilon <= r, the micro-action alpha may not be captured in W_{tau+epsilon}, causing aliasing. The authors set epsilon = 21 (0.84 s) for pass evaluation [PAGE 13]. Gray zone: choosing epsilon is arbitrary; too small misses the action, too large conflates subsequent actions.
- Calibration: Brier score and reliability curves. BSS best at K=2 per Table 2, though raw BS decreases monotonically with K. Gray zone: BSS depends on BSref which changes with K in the table, suggesting the climatology reference is recomputed under downsampling, which is methodologically non-standard; if BSref is fixed on the test distribution, K=4 would have lower BS and better calibration, contradicting the selection of K=2 based on training efficiency and BSS.
- Multi-hop derivation: from spatio-temporal input -> LSTM feature h(T) -> concatenated player embedding -> dense -> logits z -> softmax P(y|...) -> expectation over nu -> epsilon_pi -> finite difference Delta epsilon_pi. Each hop is differentiable except the downsampling and the finite difference (which is a post-hoc operator on model outputs).

Need >=400 words. I'll expand.

SOURCE_OPERATORS_AND_EQUATIONS:
List all equations with LaTeX.

RETROCAUSAL_GENEALOGY:
- Cervone et al. [4] EPV multi-resolution stochastic process. DeepHoops builds on it but replaces handcrafted states/transitions with raw trajectories and deep features. [PAGE 3, 5]
- LSTM lineage: Hochreiter & Schmidhuber [17], Gers et al. [12], Graves et al. [15]. Stacked LSTM [27].
- Brier score [2], BSS [13,25].
- Soccer analogues: Power et al. [28] pass risk/reward, Lucey et al. [21] shot prediction.
- Multi-week traps: roster turnover, injuries, coaching adjustments, opponent scouting adaptations. Player embeddings trained on 2016-17 may stale by 2017-18. The nu mapping based on league averages drifts as pace and three-point volume change. Downsampling K fixed at 2 may be suboptimal if class imbalance shifts.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: under shot-clock pressure (last element of x_t), offenses regress to isolation or pick-and-roll habits. DeepHoops sees shot clock but does not explicitly model "crisis mode" as a latent regime; it relies on the LSTM to encode it implicitly.
- Counter-trap: defense hedges screen (example: "What would be the value of epsilon_pi(t2) if X5 had hedged the screen better?" [PAGE 3]). The model is descriptive, not prescriptive for counterfactual defense; it can estimate what happened but not what would happen under an alternate defensive policy without retraining or intervention.
- Clock: shot clock is a state variable. As it winds down, P(Terminal) shifts. Recursive ToM: offense reads defense's likely switch/help, defense reads offense's likely cut/screen. DeepHoops conditions on joint trajectories, which implicitly encode this game tree, but the model does not maintain separate belief states for offense vs defense. It is a single-agent value function for the offense, not a Markov game solution.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: court bounds, ball physics, player speed. If tracking shows a player moving > 10 m/s (implausible), veto input. Ball z coordinate must be >= 0 and <= rim height + release arc. If window W includes frames after a whistle but labeled null, veto.
- Biomechanical: screen must be stationary (legal). If O5 moves into defender's path during screen, the action is an offensive foul (turnover or non-shooting foul). Model may still label window null if no immediate whistle, creating a labeling veto.
- Weather: indoor arena, temperature/humidity controlled, but ball pressure and shoe grip vary. Not in data; model assumes invariant physical context. Veto if arena conditions deviate (e.g., condensation, dead ball) — not detectable from tracking alone.
- Breakdown regime: occlusions causing missing coordinates, substitution mid-window (players on court s_j changes within W but model assumes fixed set), shot clock = 0 with no terminal action (shot clock violation = turnover, but may be mislabeled null if not annotated).

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable scenarios + predictions.
1. Shot clock expiration without release: Counterfactual: trajectory shows offense holding ball until shot clock hits 0. Model might still output non-null terminal probability based on player positioning. Veto: if clock reaches 0 and no shot/turnover recorded, force terminal action = Turnover (shot clock violation) with nu = -1.02. Prediction: epsilon_pi collapses to 0 at tau where clock=0 and ball not released.
2. Moving/illegal screen: Counterfactual: O5 sets a moving screen, illegal under rules. DeepHoops may value it positively if it leads to open shot. Veto: if referee whistle for offensive foul occurs within epsilon of screen, override Delta epsilon_pi to negative (possession lost or reset). Prediction: any Delta epsilon_pi > 0 associated with a screen followed by whistle within 2 seconds is invalidated; true value <= 0.
3. Ball out-of-bounds before terminal label: Counterfactual: ball trajectory exits court boundary during window but annotation remains null due to delayed whistle. Veto: if (x_ball, y_ball) outside court polygon at any t in W, force label Turnover and recompute epsilon_pi using nu(Turnover) = -beta_pi. Prediction: epsilon_pi drops by at least beta_pi (1.02) relative to pre-exit estimate; any positive expected points in an out-of-bounds window is a false positive.

Need to ensure predictions are concrete.

Now, word count. Let's write fully. I'll aim for ~1500+ words.

I must not mention betting lines. I will not.

Let's draft carefully with XML tags.

One concern: The user said "DRIVE SOURCE" and provided pages. I need to cite exact [PAGE N] markers. I'll do that.

Let's write now.

I'll include LaTeX equations properly.

Check for zero toy equations: I won't invent fake ratios. All equations from paper.

Check for units: moments (dimensionless count), seconds (s), points (pts), probabilities (dimensionless [0,1]), Hz (s^-1).

Breakdown regimes: K downsampling bias, epsilon > r singularity, null class dominance, global nu vs lineup-specific, fixed window length T=128.

Alright, writing.
</NATIVE_REASONING>

<THINK_TRACE>
The derivation chain begins with the raw observation tensor. Each possession \(i\) is a sequence of moments \(x^{(i)}_t \in \mathbb{R}^{24}\), sampled at 25 Hz (\(\Delta t = 0.04\) s) [PAGE 2, PAGE 6]. The first 20 dimensions encode the \((x,y)\) court coordinates of ten players; the next three encode the ball \((x,y,z)\); the final dimension is shot-clock time remaining [PAGE 6]. A causal temporal window is defined as \(W^{(i)}_\tau = (x^{(i)}_t)_{\tau-(T+r) \le t \le \tau-r}\), with \(T=128\) moments (\(\approx 5.12\) s) and blind spot \(r=16\) moments (\(\approx 0.64\) s) [PAGE 6, PAGE 7]. The blind spot enforces a strict anti-lookahead constraint: features immediately preceding time \(\tau\) are excised so that trivially indicative terminal cues (e.g., ball height mid-release) cannot leak into the prediction window [PAGE 6].

The first gray zone is the null-class imbalance. The label space \(L = \{\text{FG Attempt, Shooting Foul, Non-Shooting Foul, Turnover, null}\}\) is dominated by null at roughly a 600-to-1 ratio [PAGE 7]. The authors counter this with a downsampling scheme parameterized by \(K\): from each possession, \(K\) null windows are uniformly retained alongside the single terminal-action window, and all other null windows are discarded [PAGE 10, PAGE 11]. The batch loss becomes
\[
L = -\frac{1}{N(K+1)}\sum_{i=1}^{N}\left[L_i + L'_i\right],
\]
where \(L_i\) is the negative log-likelihood for the true terminal window and \(L'_i\) aggregates the \(K\) downsampled null windows [PAGE 11, Eq. 12–14]. Because the downsample is regenerated every epoch, the training distribution of null windows is stochastic and non-stationary with respect to the test distribution. This creates a calibration singularity: a model optimized under \(K=2\) may produce probability estimates that are well-calibrated against a downsampled reference but miscalibrated against the natural possession flow at inference, where every moment is observed. The paper reports Brier Skill Score (BSS) maximized at \(K=2\) while raw Brier score continues to fall as \(K\) increases [PAGE 12, Table 2]; this discrepancy implies that the climatology reference \(\mathrm{BS}_{\mathrm{ref}}\) is being recomputed under downsampling rather than held fixed on the empirical test distribution, which is a methodological gray zone.

The value attribution operator maps terminal labels to points above the league baseline \(\beta_\pi = 1.02\) via \(\nu: L \to \mathbb{R}\) [PAGE 7, PAGE 8]. For example, \(\nu(\text{FG Attempt}) = 1.25 - 1.02 = 0.23\) pts, \(\nu(\text{Turnover}) = -\beta_\pi = -1.02\) pts, and \(\nu(\text{null}) = 0\) [PAGE 7, PAGE 8]. Expected points at time \(\tau\) is the conditional expectation
\[
\epsilon_\pi(i)(\tau) = \beta_\pi + \mathbb{E}_{y\sim P(y)}[\nu(y) \mid W^{(i)}_\tau, \{s^{(i)}_j\}_{j=1}^{10}],
\]
with \(P(y)\) produced by a softmax over LSTM-processed features concatenated with learned player embeddings [PAGE 8, Eq. 2; PAGE 9, Eq. 4–5]. A second gray zone is that \(\nu\) is fixed at league average and is not lineup- or shot-location-conditioned; the player embedding attempts to absorb shooter identity into \(P(y)\), but the point value attached to a realized field-goal attempt remains global. Consequently, an open corner three by an elite shooter and a contested fadeaway by a poor shooter receive identical \(\nu\) upon realization, creating a conditional-value singularity that DeepHoops can only partially correct through the probability distribution \(P(y)\).

Expected Points Added (EPA) for micro-action \(\alpha\) at time \(\tau\) is the finite difference
\[
\Delta\epsilon_\pi(\alpha,\tau)(i) = \epsilon_\pi(i)(\tau+\varepsilon) - \epsilon_\pi(i)(\tau-\varepsilon), \quad \varepsilon > r,
\]
[PAGE 8, Eq. 3]. The constraint \(\varepsilon > r\) ensures the action lies inside the new window after the blind spot. The authors select \(\varepsilon = 21\) moments (\(0.84\) s) for pass/assist evaluation [PAGE 13]. If \(\varepsilon\) is too small, the micro-action is aliased out of the window; if too large, subsequent actions (e.g., a second pass or a defensive rotation) contaminate the attribution. There is no principled selection rule for \(\varepsilon\) in the text, making EPA sensitive to an arbitrary hyperparameter.

The network architecture is a stacked LSTM (3 layers, 32 cells each) processing \(W^{(i)}_\tau\), concatenated with an 8-dimensional player embedding, passed through a 128-unit dense layer, and mapped to logits \(z\) via \(z = W^\top g(W^{(i)}_\tau, \{s^{(i)}_j\};\Theta) + b\), followed by softmax [PAGE 9, PAGE 10]. Dropout (0.3 dense; 0.2 variational LSTM) and early stopping on Brier score are used [PAGE 11]. The recursive dependency is clear: raw trajectories \(\to\) LSTM hidden state \(h(T)\) \(\to\) joint representation \(\to\) logits \(\to\) outcome probabilities \(\to\) expected points \(\to\) EPA. Each hop is differentiable except the downsampling operator and the post-hoc finite difference, which introduces discontinuities in the attribution surface when \(\varepsilon\) crosses event boundaries.

Gray-zone audit summary: (1) downsampling stochastically alters the class prior each epoch, risking inference-time miscalibration; (2) \(\nu\) ignores shot geography and shooter quality, producing value compression; (3) \(\varepsilon\) is hand-tuned without sensitivity analysis; (4) the model assumes the five offensive and five defensive players are static across \(W\), though substitutions can occur mid-window; (5) the clock variable is included as a scalar but no explicit “shot-clock crisis” regime is modeled, so end-of-shot-clock possessions are treated as continuous rather than discontinuous decision nodes.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
All formal operators are extracted verbatim or near-verbatim from the source; units and page citations are specified.

Spatio-temporal moment:
\[
x^{(i)}_t \in \mathbb{R}^{24}, \quad \Delta t = 0.04\ \text{s} \ (25\ \text{Hz}).
\]
First 20 dims: \((x,y)\) for 10 players; next 3: ball \((x,y,z)\); last: shot-clock [PAGE 6].

Temporal window (Eq. 1) [PAGE 6]:
\[
W^{(i)}_\tau = \left(x^{(i)}_t\right)_{\{\tau-(T+r) \le t \le \tau-r\}}, \quad T=128\ \text{moments},\ r=16\ \text{moments}.
\]
Window length \(5.12\) s; blind spot \(0.64\) s.

Label set [PAGE 7]:
\[
L = \{\text{FG Attempt},\ \text{Shooting Foul},\ \text{Non-Shooting Foul},\ \text{Turnover},\ \text{null}\}.
\]
Null-to-other imbalance \(\approx 600:1\) [PAGE 7].

Baseline expected points [PAGE 7]:
\[
\beta_\pi = 1.02\ \text{pts per possession}.
\]

Value function \(\nu: L \to \mathbb{R}\) [PAGE 7–8]:
\[
\nu(\text{FG Attempt}) = 1.25 - 1.02 = 0.23\ \text{pts};\quad
\nu(\text{Turnover}) = -\beta_\pi = -1.02\ \text{pts};\quad
\nu(\text{null}) = 0.
\]

Expected points (Eq. 2) [PAGE 8]:
\[
\epsilon_\pi(i)(\tau) = \beta_\pi + \mathbb{E}_{y\sim P(y)}\!\left[\nu(y) \mid W^{(i)}_\tau,\ \{s^{(i)}_j\}_{j=1}^{10}\right].
\]

Expected Points Added (Eq. 3) [PAGE 8]:
\[
\Delta\epsilon_\pi(\alpha,\tau)(i) = \epsilon_\pi(i)(\tau+\varepsilon) - \epsilon_\pi(i)(\tau-\varepsilon), \quad \varepsilon > r.
\]
With \(\varepsilon = \delta + r\), this shifts \(\delta\) moments around the micro-action [PAGE 8].

Softmax class probability (Eq. 4) [PAGE 9]:
\[
P(y_i \mid W^{(i)}_\tau,\ \{s^{(i)}_j\}) = \frac{e^{z_i}}{\sum_{y_j \in L} e^{z_j}}.
\]

Logit computation (Eq. 5) [PAGE 9]:
\[
z = W^\top g(W^{(i)}_\tau,\ \{s^{(i)}_j\};\Theta) + b.
\]

Negative log-likelihood objective (Eq. 6) [PAGE 9]:
\[
\min_{W,b,\Theta}\ -\mathbb{E}\!\left[\sum_{y_j \in L} \mathbf{1}\{y_j\}\log P(y_j \mid W^{(i)}_\tau,\ \{s^{(i)}_j\})\right].
\]

Stacked LSTM cell equations (Eqs. 7–11) [PAGE 10]:
\[
i(t)_i = \sigma(b'_i + \sum_j U'_{i,j}x(t)_j + \sum_j W'_{i,j}h(t-1)_j)
\]
\[
f(t)_i = \sigma(bf_i + \sum_j U f_{i,j}x(t)_j + \sum_j W f_{i,j}h(t-1)_j)
\]
\[
c(t)_i = f(t)_i c(t-1)_i + i(t)_i \tanh(bc_i + \sum_j U c_{i,j}x(t)_j + \sum_j W c_{i,j}h(t-1)_j)
\]
\[
o(t)_i = \sigma(bo_i + \sum_j U o_{i,j}x(t)_j + \sum_j W o_{i,j}h(t-1)_j)
\]
\[
h(t)_i = o(t)_i \tanh(c(t)_i).
\]
3 layers, 32 cells each [PAGE 10].

Downsampled loss (Eqs. 12–14) [PAGE 11]:
\[
L_i = \sum_{y_j \in L} \mathbf{1}\{y_j\}\log P(y_j \mid W^{(i)}_\tau,\ \{s^{(i)}_j\})
\]
\[
L'_i = \sum_{k=1}^{K}\sum_{y_j \in L} \mathbf{1}\{y_j\}\log P(y_j \mid W^{(i)}_{t_{i,k}},\ \{s^{(i)}_j\})
\]
\[
L = -\frac{1}{N(K+1)}\sum_{i=1}^{N}(L_i + L'_i).
\]

Brier score (Eq. 15) [PAGE 11]:
\[
\mathrm{BS} = \frac{1}{N}\sum_{i=1}^{N}\sum_{r=1}^{R}(f_{i,r} - o_{i,r})^2,\quad f_{i,r},o_{i,r}\in[0,1].
\]

Brier Skill Score (Eq. 16) [PAGE 12]:
\[
\mathrm{BSS} = 1 - \frac{\mathrm{BS}}{\mathrm{BS}_{\mathrm{ref}}}.
\]

Empirical calibration results [PAGE 12, Table 2]: \(K=2\) selected; BSS \(=0.2686\); Brier scores decline with \(K\) but BSS peaks at \(K=2\), indicating reference-model dependence on downsampling.

Micro-action evaluation sample [PAGE 12–13]: 512 passes, 512 assists; \(\varepsilon = 21\) moments (\(0.84\) s); over 72% of assists increase expected points; Kolmogorov-Smirnov test rejects distributional equivalence at the 0.1% level.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
DeepHoops sits at the intersection of three historical lineages: possession-value Markov modeling, deep sequence learning, and spatial-sports analytics.

The direct theoretical ancestor is Cervone et al. [4], whose Expected Possession Value (EPV) used a multi-resolution stochastic process to predict basketball possession outcomes from optical tracking data [PAGE 3, PAGE 5]. DeepHoops explicitly extends this by removing the requirement to hand-define possession states and transitions, instead feeding raw trajectories into a deep network [PAGE 3]. However, the epistemic break is asymmetrical: Cervone’s EPV models the possession as a whole and is prospective (what will the offense do next?), whereas DeepHoops is a retrospective value-attribution tool conditioned on realized sequences [PAGE 3]. This retro-causal framing means DeepHoops assigns credit to micro-actions after the outcome is known, which is appropriate for player evaluation but dangerous for in-game decision support because it conditions on the terminal label distribution rather than simulating a counterfactual defense.

The recurrent component inherits the LSTM lineage from Hochreiter and Schmidhuber [17], refined by Gers et al. [12] to solve vanishing gradients, and deepened via stacked recurrent architectures [27] and speech applications [15] [PAGE 3, PAGE 9]. In sports, LSTMs had previously been applied to offensive play-call classification [32] [PAGE 3], but DeepHoops extends this to continuous-valued expected-points estimation across all terminal action classes, including fouls and turnovers.

The player-embedding module draws from NLP word embeddings [18] and basketball-specific autoencoders that embed shooting tendencies into latent space [32] [PAGE 4]. DeepHoops learns the embedding jointly with the classifier so that proximity in latent space reflects similarity in terminal-action distributions, not raw shooting statistics [PAGE 4].

Related spatial work includes court realty via Voronoi diagrams [5], defensive skill via spatial point processes [9,10], and shot-chart factorization [23,26]. Soccer analogues include pass risk/reward [28] and goal probability from strategic features [21], suggesting the architecture is sport-agnostic in principle [PAGE 5].

Multi-week traps emerge from this genealogy. First, roster volatility: player embeddings trained on 2016–17 data become stale when trades, injuries, or minute reallocations alter lineups; a latent vector learned for a player’s role in November may misrepresent that same player in April under a new coach. Second, tactical drift: league-wide three-point volume and pace shift between seasons, so the league-average \(\nu\) mapping (FG Attempt \(=0.23\) pts above baseline) drifts out of equilibrium. Third, adversarial adaptation: because DeepHoops is descriptive rather than game-theoretic, opposing defenses can “trap” the model by repeating formations that historically yield high \(\epsilon_\pi\) but are now intentionally baiting over-commitment. Fourth, the downsampling parameter \(K=2\) was fixed after a short hyperparameter sweep on one season; if class imbalance changes in a subsequent season (e.g., faster pace generates more null windows), the calibration lock-in at \(K=2\) becomes a silent failure mode.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
DeepHoops implicitly models a recursive theory of mind between offense and defense, but only as a compressed trajectory signal rather than an explicit belief-state recursion.

Crisis habit regression: The final dimension of each moment \(x_t\) is shot-clock time remaining [PAGE 6]. As the clock winds down, offensive habits regress toward isolation, pick-and-roll, or desperation actions. DeepHoops sees the clock value but does not declare a latent “crisis regime”; it relies on the stacked LSTM to encode time pressure implicitly. This is a breakdown regime: when shot-clock \(<5\) s, the distribution of terminal actions becomes bimodal (shot or turnover) yet the model still smooths over the continuous clock variable, potentially underestimating the discontinuity in decision-making.

Counter-trap: The paper poses the question, “What would be the value of \(\epsilon_\pi(\tau=t_2)\) if X5 had hedged the screen better?” [PAGE 3]. This is a counterfactual defensive intervention. DeepHoops can estimate the realized \(\epsilon_\pi\) after the screen and pass, but it cannot generate the alternate timeline where X5 hedges unless that exact defensive trajectory exists elsewhere in the dataset. The model’s theory of mind is therefore one-directional: it reads the offense’s value from the joint state, but it does not simulate the defense’s best response to a given offensive micro-action. A recursive counter-trap—where the offense anticipates the hedge, the defense anticipates the anticipation—is outside the representational capacity of a single softmax over terminal labels.

Clock: The shot clock functions as a countdown timer that couples the temporal window to strategic urgency. Because \(W\) excludes the last \(r=16\) moments before \(\tau\) [PAGE 6], the model never sees the immediate pre-action context in full resolution. In end-of-clock possessions, this blind spot can exclude the precise moment the offense commits to a shot, causing the model to attribute value to an earlier pass rather than the final decision under pressure. The recursion collapses: offense models defense, defense models offense, but DeepHoops models neither explicitly; it models the correlation structure of realized trajectories, which is a lower-fidelity proxy for intentionality.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Three layers can veto or invalidate DeepHoops outputs when physical, biomechanical, or environmental assumptions are violated.

Physical layer: The court is a fixed rectangular coordinate system; ball height \(z\) is bounded by the floor and the rim plus release arc [PAGE 6]. Any tracked trajectory showing a player velocity exceeding human sprint capacity (\(\approx 10\ \text{m/s}\)) or the ball teleporting across the court between adjacent \(0.04\)-s frames should trigger an input veto for sensor dropout or occlusion. Additionally, if a window \(W\) contains frames after a whistle but is labeled null because the terminal event was not annotated, the expected-points value is physically impossible (play is dead), and the output must be vetoed.

Biomechanical layer: Screens must be stationary to be legal; a moving screen is an offensive foul [PAGE 3 context, on-ball screen discussion]. DeepHoops values a screen by the change in \(\epsilon_\pi\) after the action [PAGE 8, Eq. 3], but the model has no rule-based filter for screen legality. If O5 sets an illegal moving screen and the offense scores, DeepHoops may assign positive EPA to the screen. A biomechanical veto requires referee-whistle annotation within \(\varepsilon\) of the screen; if an offensive foul is called, the true \(\Delta\epsilon_\pi\) must be capped at the value of a turnover (\(-\beta_\pi = -1.02\) pts) or reset, overriding the network’s positive estimate.

Weather/environment layer: NBA games are indoors under climate control, so exogenous weather is negligible [PAGE 2 context: indoor optical tracking]. However, ball pressure, floor humidity, and shoe grip vary by arena and can alter shooting mechanics and cutting traction. These variables are absent from the 24-dimensional input [PAGE 6]. A veto condition arises when arena conditions deviate materially from the training distribution (e.g., condensation causing slipping), because the player embeddings and LSTM weights have never seen such regimes. The breakdown condition is: any prediction made under non-standard physical conditions where \(\|x_t - \mathbb{E}[x_t]\|\) exceeds the training manifold should be flagged for human review rather than trusted.

Breakdown regime summary: occlusion-induced missing coordinates, in-window substitutions violating the fixed-player assumption \(\{s^{(i)}_j\}\), shot-clock expiration without a recorded terminal action (shot-clock violation is a turnover but may be unlabeled), and out-of-bounds ball trajectories mislabeled as null all constitute veto scenarios that the architecture cannot self-detect.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with explicit predictions:

Veto Scenario 1 — Shot-clock expiration without release. Counterfactual: the offense holds the ball until the shot clock reaches zero and no field-goal attempt, foul, or turnover is recorded in the annotation, yet the window remains labeled null. Veto rule: if shot-clock \(=0\) at \(\tau\) and no terminal action is annotated, force the label to Turnover and assign \(\nu=-1.02\) pts. Prediction: \(\epsilon_\pi(i)(\tau)\) collapses to \(0\) pts at the expiration moment because \(\epsilon_\pi = \beta_\pi + \mathbb{E}[\nu] = 1.02 - 1.02 = 0\). Any model output assigning positive expected points to a shot-clock-expired window is a false positive and must be vetoed.

Veto Scenario 2 — Illegal moving screen followed by whistle. Counterfactual: O5 sets a moving screen (illegal), O3 passes to O4 for an open shot, and a whistle blows within \(\varepsilon=21\) moments (\(0.84\) s). DeepHoops may compute \(\Delta\epsilon_\pi>0\) because the screen coincided with an open look. Veto rule: if an offensive-foul whistle is logged within the EPA window, override the positive attribution and assign the turnover/reset value. Prediction: the verified \(\Delta\epsilon_\pi\) for that screen is \(\le 0\), specifically at most \(-\beta_\pi\) if possession is lost, or \(0\) if the possession resets; any positive EPA assigned to a screened possession ending in an offensive-foul whistle is invalidated.

Veto Scenario 3 — Ball out-of-bounds before terminal label. Counterfactual: the ball trajectory exits the court boundary \((x,y)\) outside the official polygon during \(W\), but the window is labeled null because the out-of-bounds call is delayed. Veto rule: if ball coordinates leave the court bounds at any \(t \in [\tau-(T+r), \tau-r]\), force the label Turnover with \(\nu=-1.02\) pts and recompute \(\epsilon_\pi\). Prediction: \(\epsilon_\pi\) drops by at least \(1.02\) pts relative to the pre-exit estimate, because \(\nu(\text{Turnover}) = -\beta_\pi\) removes the baseline expectation entirely. Any \(\epsilon_\pi > 0\) in an out-of-bounds window is physically inconsistent and must be vetoed.
</RLVR_COUNTERFACTUAL_VETOES>