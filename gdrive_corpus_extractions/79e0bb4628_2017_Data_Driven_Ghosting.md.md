---
source: "2017 Data Driven Ghosting.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 15
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5401
---

<NATIVE_REASONING>
The user wants me to analyze the provided source text "2017 Data Driven Ghosting.md" (15 pages) and produce a response following strict invariants:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

No betting lines. No toy equations.

I need to treat this as GSE + GSI Frontier Reasoning Foundry. The source is a paper on data-driven ghosting using deep imitation learning in soccer.

Let me structure the response carefully.

First, understand the paper:
- Title: Data-Driven Ghosting using Deep Imitation Learning
- Authors: Hoang M. Le, Peter Carr, Yisong Yue, Patrick Lucey (Caltech, Disney Research, STATS LLC)
- 15 pages (the markdown shows pages 1-15 essentially)
- Core idea: Use deep imitation learning (LSTM-based) to generate "ghost" player trajectories (what a league-average or specific team would have done) given attacking play, to evaluate defensive positioning.
- Data: 100 games, ~17400 sequences, ~3 million frames at 10 fps, avg length 170 frames (~17 seconds). Only opposition in control of ball. Defensive sequence terminated by goal, out of play, dead-ball, or defensive regains possession after 2 consecutive touches.
- Preprocessing: role alignment via centroid positions, Hungarian algorithm, mixture of Gaussians, average formation 4-4-2. Input vector: absolute coordinates, relative polar coordinates (distance/angle) to ball, goal, role; closest 3 positions duplicated; team identity vector. Feature dimension 399 per role per frame (Appendix, page 12).
- Model: LSTM, two hidden layers, 512 hidden units each. Maps history to next position.
- Problem: Error compounding in sequential prediction. Solution: imitation learning (DAgger-like? They describe Phase 1 and Phase 2). Phase 1: single player model per role, scheduled sampling style (k=1..T, iterate). Phase 2: multi-agent joint training.
- EGV: Expected Goal Value from Lucey et al. 2015 [3]. Used to evaluate ghosting performance. League average EGV 474 vs actual goals 494 (open play). Team-specific ghosts via domain adaptation (team identity vector). 61.8% correlation between EGV from ghosting styles and actual goals conceded. Team F example (4-5-1 pressing).
- Case study: Fulham vs Swansea (Figure 1/7). Actual goal ~69.1% EGV. League average ghost ~71.8%. Manchester City ghost ~41.7%. So MC style would have reduced EGV from ~69-71% to ~42%.
- Deviations: average deviation ~4 meters across all players. Defenders <3m. Forwards higher variance. Out-of-position ratio via 80-20 rule.

Now I need to write the six XML sections with >=1000 words total, think trace >=400 words.

Constraints:
- No betting lines whatsoever.
- No toy equations (no Force/Fatigue fake ratios). Use formal LaTeX. Units: meters, seconds, frames per second, probability (EGV in [0,1] or percent), dimensionless correlation.
- Cite [PAGE N] markers. The source text has page numbers embedded (1, 2, ... 15). I should reference them like [PAGE 1], [PAGE 2], etc. Verbatim quotes where appropriate.

Let's draft each section.

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words).
I need to derive the system formally, discuss assumptions, error propagation, the imitation learning objective, EGV relationship, breakdown regimes. Gray zones: role assignment ambiguity, nominal vs dominant role, initialization dependence, goalkeeper not modeled, EGV doesn't capture shot termination, correlation not causation, team identity vector as style transfer (domain adaptation) but no explicit style loss, small sample (100 games, third of season), 20 teams anonymous A-T, open-play shots only 6020 events, 10-second segments, real-time constraint, 399-dimensional input, LSTM capacity 512x2, T=50 horizon in algorithm, scheduled sampling with k. Multi-hop: tracking -> role alignment -> state representation -> LSTM imitation -> counterfactual ghost -> EGV evaluation -> team style attribution -> defensive effectiveness inference.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, citations.
Define state s_t, action a_t (position at t+1), feature vector dimension 399 [PAGE 12]. LSTM hidden layers 512 [PAGE 4]. Sequences: N=17400 [PAGE 2]. Frames: 3 million at 10 fps [PAGE 2]. Avg length 170 frames = 17 s [PAGE 2]. Termination conditions [PAGE 2, Appendix PAGE 11]. Role alignment via Hungarian algorithm [PAGE 3, Appendix PAGE 11]. Formation 4-4-2 [PAGE 3, Appendix PAGE 11]. Deviation ~4 m mean [PAGE 5]. Defenders <3 m [PAGE 5]. EGV metric [3] cited [PAGE 6]. EGV 474 vs 494 [PAGE 7]. 61.8% correlation [PAGE 8]. Case study EGV 69.1% actual/LAG, 41.7% MCG [PAGE 1, PAGE 9]. T=50 [Appendix PAGE 13]. Phase 1/2 algorithm [PAGE 13-14]. Breakdown regimes: error compounding when rollout deviates [PAGE 4], initialization only first frame [PAGE 6], goalkeeper excluded [PAGE 9], EGV cannot model shot termination [PAGE 8].

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps.
Lineage: WAR [1], EPV [2], EGV [3], hockey expected goal [4], tennis shot prediction [5], ghosting Raptors/ESPN Lowe 2013 [6], Atari [7], Go [8], imitation learning Abbeel & Ng [9], Ross & Bagnell [12,13], style transfer Gatys et al. [15], formation discovery Bialkowski et al. [16]. Multi-week traps: overfitting to single-season tracking data, anonymized teams A-T hiding relegation/promotion effects, confusing correlation (61.8%) with causal defensive quality, small N for team-specific styles, role-alignment instability across weeks as formations shift, ignoring pre-shot build-up (shot events in isolation) [PAGE 8].

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
This is more abstract. Crisis habit regression: teams regress to habitual defensive shapes under pressure; counter-trap: ghost model anticipates opponent adaptation (if defender ghosts proactively challenge, attacker changes passing lanes); clock: 17-second sequences, 10 fps, T=50 rollout horizon, real-time inference. Discuss how the LSTM models opponent's anticipated moves (theory of mind: modeling what teammates/opposition will do). The paper says model captures "how multiple players in each team jointly behave from one frame to the next" [PAGE 4]. Crisis habit: bottom team (relegation) both defensive and offensive players drift far from average [PAGE 6]. Counter-trap: MCG #2 rushed back deeper, covering Red #9 [PAGE 9]. Clock: sequence termination, 10-second segments [PAGE 6], 170 frames [PAGE 2].

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
Physical: pitch dimensions not specified, but 3-4 meter deviations meaningful relative to pitch scale (~100m x 65m). Biomechanical: player positions at 10 fps, velocities/accelerations derivable but not explicitly modeled in input? Input includes position and velocity (Appendix page 12 says absolute position and velocity). Weather: not mentioned in paper, so veto due to absent weather covariates means model cannot adjust for rain/wind; this is a limitation. Veto: any conclusion about defensive style must be vetoed if pitch/weather not controlled because tracking data lacks those covariates. Also goalkeeper not modeled [PAGE 9], which is a physical layer veto for shot-stopping.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning Verifiable? Or just counterfactual vetoes. Need 3 scenarios that are verifiable (falsifiable) with predictions.
1. Veto: If we retrain on only the back line (defenders + keeper) and freeze forwards, the EGV reduction from MCG style should disappear for shots where the initial threat comes from forward positioning failure. Prediction: correlation between ghost-style EGV and actual goals drops below 61.8% (e.g., <0.40) because forward defensive variance is a major component [PAGE 5].
2. Veto: If we remove the team identity vector and use pure LAG for all teams, the 61.8% correlation with actual goals conceded should collapse because team-specific defensive style signal is removed [PAGE 7-8]. Prediction: correlation near zero or statistically insignificant.
3. Veto: If we extend the rollout horizon beyond the observed 17-second average sequence length (e.g., 30 seconds / 300 frames) without re-initialization, error compounding should cause mean deviation to exceed the naive 20-30 meter range mentioned [PAGE 5], violating the ~4 m average claim. Prediction: mean deviation > 20 m within 300 frames due to exposure bias.

Need to ensure total words >= 1000. Think trace >=400.

No betting lines. No toy equations.

Let's count roughly. I'll write substantial content.

I need to be careful about verbatim quotes. I can quote short phrases and cite pages.

Let's draft.

---

THINK_TRACE (>=400 words):

Start: The paper constructs a closed-loop counterfactual engine...

Multi-hop:
1. Raw tracking data: 100 games, 3 million frames at 10 Hz [PAGE 2].
2. Segmentation into defensive sequences (~17400), termination rules [PAGE 2, Appendix PAGE 11].
3. Role alignment: centroid-based dominant role, Hungarian algorithm, Gaussian mixtures, 4-4-2 average [PAGE 3, Appendix PAGE 11].
4. State feature vector: absolute + polar coordinates, closest 3 neighbors, team identity, dimension 399 [PAGE 3-4, Appendix PAGE 12].
5. LSTM: 2 layers x 512 units, maps history to next position [PAGE 4].
6. Imitation learning to fix compounding error: Phase 1 single-agent scheduled sampling (k=1..T, T=50) [PAGE 13]; Phase 2 multi-agent joint rollout [PAGE 14].
7. Ghost initialization: actual defensive positions at frame 0, then autoregressive rollout while attackers/ball fixed [PAGE 6].
8. Evaluation: EGV [3] summed over 6020 open-play shots [PAGE 7-8].
9. Team style: domain adaptation via team identity vector [PAGE 7-8].

Gray zones:
- Role alignment conflates nominal and dominant role; a center back acting as midfielder is relabeled, which may erase tactical intent.
- Initialization dependence: ghosts start from actual positions, so if the actual defender is already out of position, the ghost inherits that error; only the subsequent behavior is counterfactual [PAGE 6].
- Goalkeeper excluded [PAGE 9], so shot-stopping and rebound control are exogenous.
- EGV estimates shot probability but cannot model the ghost terminating the possession before a shot [PAGE 8].
- Correlation 61.8% is not causal; team F's 4-5-1 pressing is inferred from the same data used to evaluate it, risking circularity.
- Sample: one third of season (~100 games), anonymous teams A-T, no cross-season validation.
- 399-D input with 512-unit LSTM may memorize rather than generalize given 3 million frames but high-dimensional spatiotemporal variability.

Breakdown regimes:
- Error compounding: standard regression fails over long spans; naive approaches 20-30 m error vs ghosting ~4 m mean [PAGE 5]. Breakdown when rollout horizon T exceeds training exposure or distribution shifts.
- Small deviation threshold: 80-20 rule for out-of-position; arbitrary percentile cutoff [PAGE 6].

OK.

SOURCE_OPERATORS_AND_EQUATIONS:

Define:
- \(\mathcal{D} = \{(s_t, a_t)\}_{t=0}^T\), \(T=50\) [Appendix PAGE 13].
- State \(s_t \in \mathbb{R}^{399}\) [Appendix PAGE 12].
- Action \(a_t = p_{t+1} \in \mathbb{R}^2\) (position in meters on pitch).
- LSTM: \(h_t = \text{LSTM}(h_{t-1}, s_t; \theta)\), \(\hat{a}_t = f_{\text{out}}(h_t)\). Two hidden layers, 512 units each [PAGE 4].
- Loss: \(\mathcal{L} = \sum_{i=0}^{k-1} \| a'_{t+i} - a_{t+i} \|^2_2\) (implied by SGD on prediction vs ground truth) [PAGE 13-14]. Units: meters squared for position loss; probability units for EGV.
- EGV: \(V(s) \in [0,1]\), probability of goal from state \(s\) [PAGE 6, reference [3]]. Season totals: \(\sum V \approx 474\) expected vs 494 actual open-play goals [PAGE 7].
- Case study: \(V_{\text{actual}} \approx 0.691\), \(V_{\text{LAG}} \approx 0.718\), \(V_{\text{MCG}} \approx 0.417\) [PAGE 1, PAGE 9]. (69.1%, 71.8%, 41.7%).
- Correlation: \(\rho \approx 0.618\) between team-style EGV and actual goals conceded [PAGE 8].
- Deviation: \(\bar{d} \approx 4\) m [PAGE 5]; defenders \(<3\) m [PAGE 5]; naive baselines 20-30 m [PAGE 5].
- Frame rate: \(f_s = 10\) Hz; mean sequence \(170\) frames \(= 17\) s [PAGE 2]. Total frames \(\approx 3 \times 10^6\) [PAGE 2].
- Role assignment cost: Hungarian algorithm minimizing distance to 10 Gaussian role distributions [Appendix PAGE 11]. Permutation burden without ordering: \((10!)^2\) [Appendix PAGE 11].

Breakdown/singularity:
- If rollout horizon \(H \gg 170\) frames without re-initialization, exposure bias causes divergence; paper notes naive methods suffer 20-30 m errors [PAGE 5].
- If team identity vector is removed, domain adaptation collapses to league average [PAGE 7].
- If goalkeeper dynamics are included, state dimension and action space change; current model excludes keeper [PAGE 9].

RETROCAUSAL_GENEALOGY:

Lineage:
- Discrete outcome metrics: WAR [1], EPV [2], EGV [3], hockey [4], tennis [5] all answer "how vs league average" [PAGE 1].
- Ghosting origin: Toronto Raptors, STATS SportVU, Zach Lowe 2013 ESPN/Grantland [6] [PAGE 1].
- Deep imitation: Atari [7], Go [8] [PAGE 1-2]. Apprenticeship/inverse RL [9]; no-regret reductions [12,13]; trajectory preferences [14].
- Style transfer analogy: Gatys et al. [15] applied to team identity vector [PAGE 7].
- Formation discovery: Bialkowski et al. [16] centroid clustering [PAGE 3, Appendix PAGE 11].

Multi-week traps:
- Single-season snapshot (~100 games) cannot separate stable style from tactical noise or opponent schedule [PAGE 2].
- Anonymized teams A-T obscure relegation/promotion and roster churn; bottom team (relegation) drifts far from average in both defensive and offensive players [PAGE 6].
- Correlation trap: 61.8% correlation does not imply ghost style causes lower goals; shot quality, luck, and finishing confound [PAGE 8].
- Shot isolation trap: EGV computed on 10-second segments preceding shots ignores pre-shot defensive organization [PAGE 8].
- Role-alignment drift: over weeks, a player's dominant role may shift (center back to midfielder), breaking the fixed 4-4-2 ordering assumption [PAGE 3, Appendix PAGE 11].
- Initialization trap: ghosts inherit actual frame-0 positions; if the real defense is already broken, the counterfactual only fixes subsequent motion, not the initial error [PAGE 6].

RECURSIVE_THEORY_OF_MIND:

- Theory of mind in the model: each LSTM conditions on "recent history of actions from all players" and maps to own next position, effectively modeling teammates and opposition jointly [PAGE 4]. This is recursive: player j's predicted action updates the state for all other roles j' in Phase 2 [PAGE 14].
- Crisis habit regression: under pressure, teams regress to habitual shapes. The paper notes top and bottom teams are outliers in out-of-position frequency [PAGE 5-6]. Bottom/relegation team shows both defensive and offensive players drifting far from average—suggesting crisis habits degrade structural discipline across lines [PAGE 6].
- Counter-trap: In the Fulham/Swansea case, LAG#8 proactively challenges the dribbler, drawing defenders and opening a pass to Red#10; MCG#5 and LAG#5 recover to contest, but MCG#2 rushes back deeper to cover Red#9 on the rebound [PAGE 9]. The ghost model implicitly simulates how the attacker will exploit over-aggression (the counter-trap): if the ghost steps out, the attacker passes behind.
- Clock: sequences average 170 frames / 17 seconds [PAGE 2]; shot segments are 10 seconds [PAGE 6]; algorithm rollout horizon T=50 [PAGE 13]. The 10 Hz clock means a 50-step rollout covers only 5 seconds of simulated future beyond initialization, yet the paper claims robustness over arbitrarily long sequences via imitation learning [PAGE 5]. Tension: T=50 in training vs 170-frame sequences at inference implies the model must generalize beyond its training rollout horizon.

CROSS_LAYER_VETO_ADJUDICATION:

Physical layer: Pitch geometry unspecified in text; 3-4 m deviations are interpretable only relative to pitch scale (~100x65 m standard). A 4 m error is ~4% of pitch length, meaningful for defensive spacing but not decisive by itself.
Biomechanical layer: Input includes position and velocity [Appendix PAGE 12], enabling acceleration inference at 10 Hz, but no explicit biomechanical constraints (e.g., max sprint speed, turning radius) are enforced in the LSTM. Thus ghosts may propose kinematically infeasible trajectories if the training data contains them; no physical veto layer is described.
Weather layer: Absent. No temperature, precipitation, wind, or pitch condition covariates appear in the state vector [PAGE 3-4, Appendix PAGE 12]. Any claim that team style explains defensive performance must be vetoed when weather confounds are uncontrolled (e.g., rainy matches compressing space).
Goalkeeper exclusion: Keepers are highlighted but not modeled [PAGE 9]. Since rebounds and shot-stopping determine goal outcomes, the ghost EGV omits a major physical layer. Veto: any conclusion about shot prevention must treat keeper behavior as exogenous.
Veto adjudication: A defensive-style attribution is admissible only if (a) pitch and weather are held constant or shown uncorrelated with team identity, (b) keeper actions are either modeled or shown independent of defensive ghost style, and (c) deviations remain within biomechanically plausible ranges (<3 m for defenders per paper) [PAGE 5]. The paper satisfies (c) partially but leaves (a) and (b) open.

RLVR_COUNTERFACTUAL_VETOES:

Need 3 verifiable veto scenarios + predictions.

Scenario 1 (Team identity ablation): Retrain/remove team identity vector; evaluate all 6020 open-play shots with pure LAG. Veto condition: if correlation between style-specific EGV and actual goals conceded falls below statistical significance (e.g., |rho| < 0.20 or p > 0.05), the claimed 61.8% style effect is vetoed. Prediction: correlation collapses toward 0.0–0.15 because the identity vector is the sole conduit for team-specific spatial style [PAGE 7-8].

Scenario 2 (Forward-line freeze): Hold forward/midfield ghosts at actual positions and only allow back-line ghosts to counterfactually move. Veto condition: if EGV reduction for high-danger shots (e.g., initial EGV > 0.60) disappears relative to full ghosting, forward defensive variance is a necessary cause. Prediction: full-model EGV gap (~0.69 to ~0.42 in the case study) shrinks by at least 50%, because forwards show the highest deviation from average (>3 m, increasing upfield) [PAGE 5].

Scenario 3 (Long-horizon exposure): Roll out ghosts for 300 frames (30 s at 10 Hz) without re-initialization, beyond the mean 170-frame sequence. Veto condition: if mean positional deviation exceeds 20 m, the imitation-learning error-compounding control has broken down and the ~4 m average claim does not extrapolate. Prediction: mean deviation > 20 m within 300 frames, matching the naive baseline failure mode the paper seeks to avoid [PAGE 4-5].

All predictions are falsifiable with the published data pipeline.

Need to check word count. I'll aim for ~1500+ words total across sections. Think trace alone ~500-600 words.

No mention of betting. Check: none.

No toy equations. Equations are formal LaTeX with units. Check.

Citations [PAGE N]. Check.

Verbatim quotes? I'll include a few short quotes to satisfy "verbatim quotes" where source pages provided. E.g., "average level of deviation across all players and teams is about ~4 meters" [PAGE 5]. "61.8% correlation" [PAGE 8]. "approximately 17400 sequences" [PAGE 2]. "dimension 399" [Appendix PAGE 12]. "two hidden layers of networks with 512 hidden units in each layer" [PAGE 4]. "T=50" [PAGE 13].

Let's write carefully. Make sure XML tags are exact.

One thing: The prompt says "STRICT INVARIANTS" and ">= 1,000-WORD DEPTH across these exact XML sections". So total across all sections must be >=1000 words. I'll make it comfortably over.

Also, "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I should quote verbatim some text and include [PAGE N]. I'll include several.

Let's compose final output.
</NATIVE_REASONING>

<THINK_TRACE>
The paper constructs a closed-loop counterfactual engine for soccer defense by chaining together tracking segmentation, role alignment, deep imitation learning, and expected-goal evaluation. The first hop is raw telemetry: approximately 100 games from one professional league, segmented into defensive situations where the opposition controls the ball, yielding roughly 17400 attacking-defending sequences and about 3 million frames at 10 frames per second, with an average sequence length of roughly 170 frames (17 seconds) [PAGE 2]. A defensive sequence ends when a goal is conceded, the ball leaves play, a dead-ball event occurs, or the defending team regains possession after two consecutive touches [PAGE 2; Appendix, PAGE 11].

The second hop is representation. Because learning a permutation-invariant policy over 22 players and a ball would require a data burden scaling by (10!)², the authors perform role alignment: each player’s dominant role is extracted from centroid positions during a segment, regardless of nominal position, and roles are assigned via a Hungarian algorithm matching to a mixture of Gaussian role distributions, producing an average 4-4-2 formation [PAGE 3; Appendix, PAGE 11]. The state vector at each frame combines absolute coordinates, relative polar coordinates (distance and angle) to the ball, goal, and role, duplicated features for the three nearest positions, and a team-identity vector, for a total dimension of 399 per role per frame [PAGE 3–4; Appendix, PAGE 12].

The third hop is the dynamics model. Each of the 10 outfield roles is modeled by an LSTM with two hidden layers of 512 units, mapping recent history of all players’ actions to the modeled player’s next position [PAGE 4]. Standard supervised sequence prediction is rejected because error compounds over long temporal spans; naive baselines suffer errors frequently in the 20–30 meter range, whereas the ghosting method holds mean deviation to about 4 meters [PAGE 5]. To control this, the authors use imitation learning in two phases: Phase 1 learns single-role models via scheduled rollout over horizon T=50, and Phase 2 performs joint multi-agent rollout where each role’s predicted action updates the state for all other roles [PAGE 13–14; Appendix].

The fourth hop is counterfactual evaluation. For each of 6020 open-play shot events, the ghost is initialized with actual defensive positions at frame 0, attackers and ball are held fixed, and the ghost unrolls autoregressively; at the end, Expected Goal Value (EGV) is computed [PAGE 6]. The league-average ghost yields a season EGV of 474 versus 494 actual open-play goals [PAGE 7]. Team style is injected solely through the team-identity vector, producing a 61.8% correlation between team-style EGV and actual goals conceded [PAGE 8]. In the Fulham–Swansea example, actual and league-average ghost EGV are approximately 69.1% and 71.8%, while a Manchester City-styled ghost drops EGV to roughly 41.7% [PAGE 1; PAGE 9].

Gray-zone audit: (1) initialization dependence—ghosts inherit actual frame-0 defensive positions, so if the real defense is already broken, the counterfactual repairs only subsequent motion [PAGE 6]; (2) goalkeeper exclusion—keepers are shown but not modeled, so rebound and shot-stopping physics are exogenous [PAGE 9]; (3) EGV cannot model a ghost terminating the possession before a shot, limiting its causal claim [PAGE 8]; (4) role alignment conflates nominal and dominant tactical roles, potentially erasing intent when a center back acts as a midfielder [PAGE 3]; (5) the 61.8% correlation is associational, and team F’s 4-5-1 pressing is inferred from the same data used to evaluate it, risking circularity [PAGE 8]; (6) the sample is one third of a season (~100 games) with anonymized teams A–T, offering no cross-season or roster-churn validation [PAGE 2; PAGE 6]; (7) the 399-dimensional input with 512-unit LSTMs may memorize spatiotemporal idiosyncrasies rather than generalize [PAGE 4].

Breakdown/singularity regimes: exposure bias dominates if the rollout horizon greatly exceeds the 170-frame mean without re-initialization, reverting toward the 20–30 meter naive error regime [PAGE 4–5]; removing the team-identity vector collapses domain adaptation to league average [PAGE 7]; adding goalkeeper dynamics changes state and action dimensionality and is outside the current model [PAGE 9]. These regimes define where the paper’s formal guarantees weaken and where external veto layers become necessary.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let a sequence be \(\mathcal{D} = \{(s_t, a_t)\}_{t=0}^{T}\) with training rollout horizon \(T = 50\) [Appendix, PAGE 13]. The state feature vector for role \(j\) at frame \(t\) is \(s_t^{(j)} \in \mathbb{R}^{399}\), comprising absolute position and velocity, relative polar coordinates (distance in meters, angle in radians) toward the ball, the defending goal, and the role centroid, plus duplicated features for the three closest positions and a team-identity one-hot vector [PAGE 3–4; Appendix, PAGE 12]. The action is the next-frame position \(a_t^{(j)} = p_{t+1}^{(j)} \in \mathbb{R}^{2}\) measured in meters on the pitch.

Each role’s LSTM computes \(h_t^{(j)} = \mathrm{LSTM}(h_{t-1}^{(j)}, s_t^{(j)}; \theta^{(j)})\) across two hidden layers of 512 units each, emitting \(\hat{a}_t^{(j)} = f_{\mathrm{out}}(h_t^{(j)})\) [PAGE 4]. The imitation objective, applied via stochastic gradient descent over rollout segments \(i = 0,\dots,k-1\), minimizes position error \(\mathcal{L} = \sum_{i=0}^{k-1} \| a'_{t+i} - a_{t+i} \|_2^2\), with units of meters squared [PAGE 13–14]. In Phase 2, predicted action \(a'^{(j)}_{t+i}\) updates \(s^{(j)}_{t+i+1}\) and \(s^{(j')}_{t+i+1}\) for all other roles \(j'\), enacting coupled multi-agent dynamics [PAGE 14].

Expected Goal Value is a probability \(V(s) \in [0,1]\) estimated from player and ball configuration [PAGE 6; ref. [3]]. Season-level aggregation over \(N = 6020\) open-play shots gives league-average ghost EGV \(\sum V \approx 474\) versus 494 actual conceded goals [PAGE 7]. The case-study values are \(V_{\text{actual}} \approx 0.691\), \(V_{\text{LAG}} \approx 0.718\), and \(V_{\text{MCG}} \approx 0.417\) [PAGE 1; PAGE 9]. Team-style correlation with actual goals conceded is \(\rho \approx 0.618\) [PAGE 8]. Positional deviation metrics: league mean \(\bar{d} \approx 4\) m; central defenders \(<3\) m; naive non-imitative baselines 20–30 m [PAGE 5]. Sampling rate \(f_s = 10\) Hz; mean sequence \(170\) frames \(\approx 17\) s; total frames \(\approx 3 \times 10^6\) [PAGE 2]. Role assignment solves a minimum-cost Hungarian assignment over 10 Gaussian role distributions, avoiding the \((10!)^2\) permutation burden [Appendix, PAGE 11].

Singularity conditions: if unrolled re-initialization is suppressed beyond \(H \gg 170\) frames, compounding exposure bias is expected to drive mean deviation past 20 m [PAGE 4–5]; if the team-identity vector is ablated, style-specific EGV and its correlation to conceded goals should vanish [PAGE 7–8]; if goalkeeper dynamics are introduced, the state-action space expands and the current model’s exclusion of keepers becomes a structural singularity [PAGE 9].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage begins with discrete outcome metrics that answer “how does this player or team compare to league average?”—WAR in baseball [1], EPV in basketball [2], EGV in soccer [3], expected goal value in hockey [4], and shot prediction in tennis [5] [PAGE 1]. The paper explicitly positions itself against this discrete-event paradigm, arguing for fine-grained analysis of how teams create time and space [PAGE 1]. The direct antecedent is the 2013 ESPN/Grantland article by Zach Lowe describing the Toronto Raptors’ “ghosting” software on STATS SportVU data, which required substantial manual annotation but made defensive positioning measurable and viewable for the first time [PAGE 1; ref. [6]].

Methodologically, the authors adapt deep imitation learning from Atari [7] and Go [8] [PAGE 1–2], grounding it in apprenticeship/inverse reinforcement learning [9], efficient reductions for imitation learning [12], no-regret online learning reductions [13], and trajectory-preference learning [14]. The team-style manipulation is framed as an analog of neural style transfer from Gatys et al. [15], where the team-identity vector extracts spatial arrangement and aggressiveness in the same way artistic style is transferred between images [PAGE 7]. Formation discovery leans on Bialkowski et al. [16], using centroid clustering and Gaussian mixtures to recover an average 4-4-2 from data rather than imposing a formation [PAGE 3; Appendix, PAGE 11].

Multi-week traps embedded in this lineage: (1) Single-season tracking data (~100 games, one third of a season) cannot separate stable defensive style from schedule strength, opponent quality, or tactical noise [PAGE 2]. (2) Anonymizing teams as A–T hides relegation, promotion, and roster churn; the relegated bottom team shows both defensive and offensive players drifting far from league average, suggesting crisis-driven structural decay rather than a coherent style [PAGE 5–6]. (3) The 61.8% correlation between ghost-style EGV and actual goals conceded is correlational; luck, finishing, and shot quality remain confounders, and the authors themselves note EGV does not capture ghosts terminating the shot opportunity altogether [PAGE 8]. (4) Shot-event isolation means the 10-second pre-shot window ignores how defenses organize long before the shooting chance arises [PAGE 8]. (5) Role alignment assumes a stable dominant role across a segment, but over weeks a player may shift from center back to midfielder, destabilizing the fixed 4-4-2 ordering and the Hungarian assignment cost [PAGE 3; Appendix, PAGE 11]. (6) Frame-0 initialization means the ghost inherits whatever defensive error already exists; the counterfactual is only as deep as the moment of initialization [PAGE 6].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The model implements a machine theory of mind: each LSTM conditions on the recent history of actions from all players and maps that history to the modeled player’s next position, effectively representing how teammates and opposition will move jointly from one frame to the next [PAGE 4]. Phase 2 makes this recursive explicit: role \(j\)’s predicted action updates the state feature vector for role \(j\) and for every other role \(j'\), so each agent’s counterfactual trajectory is conditioned on the simulated trajectories of the others [PAGE 14].

Crisis habit regression appears in the team-level variance analysis. The top and bottom teams in goals conceded are both outliers in out-of-position frequency [PAGE 5–6]. For the relegated bottom team, both dominantly defensive and offensive players drift far from the league average, indicating that under crisis conditions habitual structural discipline collapses across lines rather than remaining isolated to the back line [PAGE 6]. The ghost model captures this by learning a league-average recovery policy that, in some cases, beats the actual team’s crisis positioning—e.g., QPR’s ghost player #8 proactively closed a passing lane that the real defenders #5 and #8 surrendered by dropping too deep [PAGE 5].

The counter-trap is visible in the Fulham–Swansea breakdown. League-average ghost #8 proactively challenges the dribbler Red#6, which in reality drew in Blue#5 and opened an uncontested pass to Red#10; this illustrates how over-aggressive ghosting can spring the attacker’s trap [PAGE 9]. Conversely, Manchester City ghost #2 rushes back deeper into the backline earlier than the actual Blue#2, covering Red#9 on the rebound and contesting the open net—demonstrating that the counter-trap to over-aggression is disciplined depth recovery [PAGE 9]. The ghost thus simulates not just what the defense should do, but how the attack will exploit specific defensive over-commitments.

The clock imposes hard bounds. Sequences average 170 frames (17 s) at 10 Hz [PAGE 2]; shot-analysis windows are 10 seconds [PAGE 6]; and the imitation algorithm’s rollout horizon is T=50 frames (5 s) [Appendix, PAGE 13]. There is a temporal mismatch: training rollouts cover only half the mean sequence length, yet the paper claims robustness over arbitrarily long sequences through mistake-recovery training [PAGE 4–5]. This creates a “horizon pressure” where crisis events unfolding beyond 50 frames must be handled by generalization rather than direct imitation exposure.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The paper never specifies pitch dimensions, so the claimed ~4 m mean deviation and <3 m defender deviation must be interpreted relative to an assumed standard pitch (~100 m × 65 m) [PAGE 5]. A 4 m error is roughly 4% of pitch length—tactically meaningful for defensive shape but not decisive by itself. Biomechanical layer: the state vector includes absolute position and velocity, allowing inference of acceleration at 10 Hz [Appendix, PAGE 12], but no explicit kinematic constraints (maximum sprint speed, turning radius, acceleration limits) are encoded in the LSTM. Ghosts could therefore propose kinematically infeasible trajectories if such trajectories appear in training data; no biomechanical veto layer is described. Weather layer: absent entirely. No temperature, precipitation, wind, or pitch-condition covariates appear in the 399-dimensional input [PAGE 3–4; Appendix, PAGE 12]. Any attribution of defensive performance to team style must be vetoed if weather systematically covaries with team identity (e.g., home matches in rainy conditions compressing space).

Goalkeeper exclusion is a physical-layer veto: keepers are highlighted but not modeled [PAGE 9]. Because rebound control and shot stopping directly determine whether a shot becomes a goal, the EGV calculation treats keeper behavior as exogenous. A conclusion that a team’s ghost “prevents” goals is therefore incomplete unless keeper independence from defensive ghost style is established.

Veto adjudication rule: a team-style defensive attribution is admissible only if (a) pitch and weather conditions are held constant or shown uncorrelated with the team-identity vector, (b) goalkeeper actions are modeled or demonstrated independent of defensive ghost positioning, and (c) positional deviations remain within the paper’s validated range (defenders <3 m, league mean ~4 m) [PAGE 5; PAGE 9]. The paper partially satisfies (c) but leaves (a) and (b) open, so cross-layer vetoes remain active for any causal claim about defensive efficiency.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 (Team-identity ablation): Remove the team-identity vector and evaluate all 6020 open-play shots with the pure league-average ghost. Veto condition: if the correlation between style-specific EGV and actual goals conceded falls below statistical significance (|rho| < 0.20 or p > 0.05), the claimed 61.8% style effect is vetoed. Prediction: correlation collapses toward 0.0–0.15 because the identity vector is the only conduit for team-specific spatial arrangement and aggressiveness [PAGE 7–8].

Scenario 2 (Forward-line freeze): Hold forward and midfield ghosts at their actual frame-0 positions and permit only back-line ghosts to counterfactually reposition. Veto condition: if the EGV reduction for high-danger shots (initial EGV > 0.60) disappears relative to full ghosting, forward defensive variance is a necessary causal component. Prediction: the full-model gap seen in the case study (~0.69 to ~0.42) shrinks by at least 50%, because attack-oriented positions show the largest deviation from average (>3 m, increasing upfield) [PAGE 5].

Scenario 3 (Long-horizon exposure): Roll out ghosts for 300 frames (30 s at 10 Hz) without re-initialization, beyond the mean 170-frame sequence and beyond the T=50 training horizon. Veto condition: if mean positional deviation exceeds 20 m, the imitation-learning error-compounding control has broken down and the ~4 m average claim does not extrapolate. Prediction: mean deviation exceeds 20 m within 300 frames, reverting to the naive baseline failure regime the paper explicitly seeks to avoid [PAGE 4–5]. All three scenarios are falsifiable using the published data pipeline and tracking frames.
</RLVR_COUNTERFACTUAL_VETOES>