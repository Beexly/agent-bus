---
source: "2026 - HoopMind A Real-Time Neural Game-Tree System for Opponent-Aware Possession Planning - Gong et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/preprints/arXiv/2026"
pages: 1
model: nvidia:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4160
---

<NATIVE_REASONING>
The user wants me to analyze a source paper about HoopMind, a basketball game-tree system. I need to produce a structured response with specific XML sections, each meeting certain requirements. Let me parse the constraints:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. Must use formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.

The source text is provided (1 page, abstract only). I need to cite [PAGE 1] markers and use verbatim quotes from the provided text. Since only 1 page is provided, all citations are [PAGE 1].

I need to be careful not to invent fake equations. I can use formal equations related to the paper's content (expectimax, MLP, shot value, calibration, game tree, branch-and-bound pruning, data alignment) as long as they are formally correct and not "toy equations" like Force/Fatigue. I should state assumptions and breakdown regimes.

Since the source is only an abstract (PAGE 1), I should not hallucinate details beyond what's in the abstract. I can derive formalism based on what's described: ShotNet MLP, depth-limited expectimax, branch-and-bound pruning, five public sources, 4.23M shots over 21 seasons, 99.5%-100% alignment, held-out season, zone-rate baseline, logistic baseline, calibrated probabilities, scouting planner, simulator in browser.

I must avoid betting lines entirely. No mention of odds, spreads, etc. I can mention probabilities but not betting odds.

Word count: >= 1000 words total across sections. THINK_TRACE alone >= 400 words.

Let me draft each section.

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. Need >=400 words. Discuss data fusion pipeline, alignment 99.5-100%, pitfalls, ShotNet MLP, expectimax search, branch-and-bound, real-time constraint, offline training vs online inference, browser-based simulator, public data limitations, gray zones: matchup tracking alignment errors, biometric data missingness, shot location quantization, play-by-play feed discrepancies, held-out season temporal leakage, calibration vs discrimination, branch-bound optimality gap under depth limits, browser compute constraints. Multi-hop: from raw public feeds -> aligned per-shot dataset -> shot value function -> game tree -> expectimax -> pruning -> decision. Gray-zone audit: where assumptions break.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX. Define dataset D = {(x_i, y_i, ...)}. Alignment rate A = N_aligned / N_total in [0.995, 1.00]. ShotNet: f_\theta: X -> [0,1] or expected points e(x) = sum_k p_k * v_k. Calibration: P(Y=1 | f(x)=p) = p. Expectimax: V(s) = max_{a in A_off} E_{b ~ pi_def} [ V(s') ] or similar with chance nodes for defense. Depth-limited: V_d(s) = ... if d=0 then shot value else expectimax. Branch-and-bound pruning condition: if UB < LB prune. Complexity O(b^d) worst case, pruning reduces. Assumptions: Markov possession, opponent stationary policy within possession, shot value independent of game state except features, perfect alignment. Breakdown regimes: depth d too small -> myopia; branch-bound error epsilon when bounds loose; browser JS float32 vs offline float64; alignment <99.5% causes label noise. Cite [PAGE 1] for quotes.

<RETROCAUSAL_GENEALOGy>: Historical lineage: expectimax from game theory (von Neumann, minimax), Shannon chess, Deep Blue, MCTS (AlphaGo), basketball shot value (Kirk Goldsberry, Expected Points), neural MLP, temporal difference. Multi-week traps: roster changes, injuries, coaching adjustments, opponent scouting adaptation, fatigue accumulation across weeks, schedule strength, back-to-backs. Since paper is abstract-level, note transferable pitfalls for joining NBA shot and play-by-play feeds across seasons.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. Offense models defense as best response (theory of mind). Defense anticipates offense's expectimax choice. Crisis habits: under clock pressure, teams revert to iso or predictable sets. Counter-trap: defense over-adjusts to scouted tendencies, offense exploits via secondary option. Clock: shot clock as time constraint in game tree, end-of-possession recursion. The paper's depth-limited search mirrors bounded rationality.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Basketball is indoor, weather veto minimal (arena HVAC, travel). Physical: court dimensions, rim height, shot clock 24s. Biomechanical: release velocity, player height, fatigue, injury. Veto rules: if biomechanical feature missing -> veto shot value prediction; if alignment <99.5% -> veto data row; if branch-bound gap > tolerance -> veto real-time claim and fall back to baseline. Weather: not applicable indoor, but travel across time zones as proxy.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or just verifiable scenarios. Need 3 scenarios where system should be vetoed. Example: (1) Alignment failure >0.5% on a specific feed pair -> veto prediction, fallback to zone baseline. Prediction: calibrated error increases by delta. (2) Depth limit d causes branch-and-bound to prune the optimal branch in crunch time (last 5 seconds) -> veto real-time output, use heuristic. Prediction: suboptimality gap > 0.1 expected points. (3) Browser-based simulator runs on client device with variable compute -> if frame budget exceeded -> veto simulation fidelity, reduce tree depth. Prediction: decision latency >100ms vs <50ms target. Each must be verifiable and include prediction.

Need to ensure no betting lines. No mention of odds/spreads/totals/moneylines.

Need verbatim quotes and [PAGE 1] citations. Let's pull exact phrases from source:
- "we fuse five public sources into one per-shot dataset of 4.23M shots over 21 seasons"
- "Alignment across them is 99.5% to 100%"
- "We also report two data pitfalls that are easy to miss"
- "We then model a half-court possession as a sequential game"
- "Shot values come from ShotNet, an embedding multilayer perceptron (MLP)"
- "On a held-out season it beats a zone-rate baseline and a logistic baseline, and its probabilities are well calibrated"
- "A depth-limited expectimax search then solves the offensive decision tree, with branch-and-bound pruning to keep it real time"
- "All training runs offline, so the online system stays light"
- "A scouting planner and a playable simulator both run in a single browser page"
- "Public-data shot-value model with a game-tree planner; the data-fusion pitfalls are the transferable part for anyone joining NBA shot and play-by-play feeds"

I'll cite these with [PAGE 1].

Now ensure total word count >=1000. Let's aim for roughly 1500-1800 words total. THINK_TRACE >=400.

Let's write carefully.

I need to ensure LaTeX equations are formal, not toy. Use proper notation.

Structure:

<THINK_TRACE>
... derivation ...
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

Check for betting lines: none.

Check for toy equations: none. Use expectimax, MLP, calibration, alignment rate.

Let's draft content.

THINK_TRACE (>=400 words):

Start: The source text is a single abstract page [PAGE 1]. The research program fuses five public sources into a per-shot dataset of 4.23M shots over 21 seasons [PAGE 1]. Multi-hop derivation: (1) raw ingestion: shot locations, two play-by-play feeds, official matchup tracking, player biometrics. (2) alignment: 99.5% to 100% [PAGE 1]. (3) label construction: shot value via ShotNet MLP embedding [PAGE 1]. (4) sequential game: half-court possession as sequential game [PAGE 1]. (5) expectimax with branch-and-bound [PAGE 1]. Gray zones: two unnamed data pitfalls [PAGE 1]; alignment not perfect; held-out season temporal validity; branch-and-bound pruning introduces suboptimality; browser-based real-time constraint means limited compute; probabilities well calibrated but calibration can degrade under distribution shift; zone-rate and logistic baselines are simple, so "beats" may reflect low bar; public data may lack defensive positioning granularity; player biometrics may be incomplete or noisy; matchup tracking alignment errors propagate to shot value. Offline training vs online light: assumes stationarity between training and deployment seasons. Breakdown: if opponent adapts within game, the static ShotNet value is stale; if depth limit truncates before end of shot clock, endgame decisions are myopic; if browser JS numeric precision differs from offline training float64, calibrated probabilities drift.

Need to hit 400 words. Let's expand.

SOURCE_OPERATORS_AND_EQUATIONS:
Define dataset \mathcal{D} = \{ (\mathbf{x}_i, y_i, t_i, m_i) \}_{i=1}^{N}, N=4.23M [PAGE 1]. Alignment operator \mathcal{A}: \mathrm{src}_k \to \mathrm{aligned}, rate r \in [0.995, 1.00] [PAGE 1]. ShotNet: f_\theta: \mathcal{X} \to \Delta^{K-1} over shot outcome classes, or expected value \hat{v}(\mathbf{x}) = \sum_{k} p_k(\mathbf{x}) v_k. Calibration: \mathbb{P}(Y=1 \mid f_\theta(\mathbf{x})=p) = p. Baselines: zone-rate and logistic [PAGE 1]. Expectimax: V_d(s) = \begin{cases} \hat{v}(s) & d=0 \\ \max_{a \in \mathcal{A}_{off}} \mathbb{E}_{b \sim \pi_{def}} [ V_{d-1}(s') ] & d>0 \end{cases}. Branch-and-bound: prune node n if UB(n) < LB - \epsilon. Complexity O(b^d) unpruned. Assumptions: Markov possession, stationary defense within possession, shot value separable from game clock except via depth, perfect feed alignment. Breakdown regimes: d < d_min leads to myopic endgame; alignment r < 0.995 introduces label noise \eta; browser float32 vs offline float64 causes calibration drift; two unmentioned pitfalls [PAGE 1] likely concern play-by-play feed timestamp mismatches and biometric missingness. Cite [PAGE 1] throughout.

RETROCAUSAL_GENEALOGY:
Lineage: expectimax from von Neumann minimax (1928), Shannon (1950) game tree, chess programs, AlphaGo MCTS but expectimax is deterministic backup with chance nodes. Basketball shot value: expected points from shot location, Goldsberry, shot quality models. Neural MLP embedding: representation learning. Multi-week traps: roster turnover, injuries, coaching changes, opponent scouting adaptation (the defense studies the offense's planner), schedule fatigue, back-to-backs, load management. Since system uses public data over 21 seasons [PAGE 1], cross-season distribution shift is a trap; a model trained on 2004-2024 may misfire on 2025 pace-and-space rules. Data-fusion pitfalls transferable to anyone joining NBA shot and play-by-play feeds [PAGE 1].

RECURSIVE_THEORY_OF_MIND:
Offense builds a model of defense (pi_def) inside expectimax. Defense recursively models offense's expectimax choice. Crisis habit regression: under shot-clock pressure (late clock), teams regress to isolation or pick-and-roll habits; offense's tree depth must account for this non-stationary pi_def(t). Counter-trap: if defense over-adjusts to scouted tendencies, offense can exploit via secondary branch; branch-and-bound may prune this branch if bound too tight. Clock: 24-second shot clock imposes hard horizon; depth-limited search must map tree depth to remaining seconds. End-of-possession recursion: last possession of quarter/game changes utility (score differential), but paper models half-court possession generically; veto needed for end-game.

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer: court dimensions fixed (94x50 ft), rim 10 ft, shot clock 24s. Weather: indoor arena, negligible direct weather; indirect via team travel across time zones (circadian) not modeled. Biomechanical: player height, wingspan, release speed, vertical jump; if biometrics missing from feed -> veto shot value for that player. Alignment: if feed alignment drops below 99.5% [PAGE 1] for matchup tracking vs shot location -> veto row. Real-time: if branch-and-bound cannot return within frame budget (e.g., 100ms in browser) -> veto real-time claim, fallback to zone-rate baseline [PAGE 1]. Offline-online stationarity: if training season distribution differs from deployment season by more than tolerance -> veto probabilities until recalibration.

RLVR_COUNTERFACTUAL_VETOES:
Three scenarios:
1. Data alignment failure: On a given night, official matchup tracking feed drops alignment with shot locations to 98.2% (<99.5% threshold [PAGE 1]). Veto: exclude affected shots from ShotNet inference; serve zone-rate baseline. Prediction: expected calibration error rises from <0.01 to >0.03 on affected subset; discrimination (AUC) drops by at least 0.02.
2. Search horizon truncation: Possession enters final 4 seconds of shot clock; depth-limited expectimax with d=4 cannot reach terminal shot-value leaf before clock expires; branch-and-bound prunes the high-variance but high-value drive-and-kick branch because UB estimate is loose. Veto: suppress planner output, default to coach scripted set. Prediction: offensive expected points on such possessions falls below the zone-rate baseline by at least 0.05 points per possession; turnover rate rises by >2%.
3. Client compute overload: Browser-based simulator runs on a low-end client device; JavaScript event loop exceeds 50ms frame budget because tree branching factor b is large. Veto: reduce depth d by 1 or switch to shallow MLP-only recommendation. Prediction: decision latency spikes from median <30ms to >200ms; simulator frame rate drops below 30fps; planner recommendation switches from expectimax to one-step greedy, decreasing predicted possession value by ~0.03 expected points.

Need to ensure no betting lines. "Expected points" is fine, not betting. "Probabilities" fine. No odds.

Need word count. Let's estimate. THINK_TRACE ~450. SOURCE_OPERATORS ~350. RETROCAUSAL ~250. RECURSIVE ~250. CROSS_LAYER ~200. RLVR ~200. Total ~1700. Good.

Need citations [PAGE 1] and verbatim quotes. Include several verbatim quotes.

Need formal LaTeX units: probability dimensionless, expected points in points, time in seconds, alignment rate dimensionless [0,1], N count dimensionless.

Breakdown regimes: explicitly state.

Let's write final output with XML tags exactly. No markdown outside? The user wants the sections. I'll output just the XML sections.

Ensure THINK_TRACE >=400 words. Let's count roughly as I write.

I will write in a formal analytical tone.

Let's proceed.
</NATIVE_REASONING>

<THINK_TRACE>
The provided source is a single abstract page [PAGE 1] describing HoopMind, a real-time neural game-tree system for opponent-aware possession planning in professional basketball. The multi-hop derivation proceeds as follows. Hop one: raw data ingestion. The authors fuse five public sources into one per-shot dataset of 4.23M shots over 21 seasons [PAGE 1]; the sources are shot locations, two play-by-play feeds, official matchup tracking, and player biometrics [PAGE 1]. Hop two: alignment. They report alignment across these sources of 99.5% to 100% [PAGE 1], meaning nearly every shot record can be joined across feed schemas, timestamps, and player identifiers, but the residual 0–0.5% misalignment constitutes a non-trivial label-noise floor when N is in the millions. Hop three: shot-value estimation. Shot values come from ShotNet, an embedding multilayer perceptron (MLP) [PAGE 1], mapping player, location, and matchup features to a probability distribution over shot outcomes; on a held-out season it beats a zone-rate baseline and a logistic baseline, and its probabilities are well calibrated [PAGE 1]. Hop four: sequential game formulation. A half-court possession is modeled as a sequential game [PAGE 1], and a depth-limited expectimax search solves the offensive decision tree, with branch-and-bound pruning to keep it real time [PAGE 1]. Hop five: deployment. All training runs offline, so the online system stays light [PAGE 1]; a scouting planner and a playable simulator both run in a single browser page [PAGE 1].

Gray-zone audit: (1) The abstract explicitly states “We also report two data pitfalls that are easy to miss” [PAGE 1] but does not specify them in the text provided; any downstream system that ignores those two unnamed pitfalls risks silent corruption of the joined dataset, particularly when merging play-by-play feeds with shot coordinates. (2) Held-out season validation assumes temporal stationarity across seasons; rule changes, pace adjustments, and roster turnover can break the i.i.d. assumption between the held-out season and the deployment season. (3) Branch-and-bound pruning introduces an optimality gap that is unquantified in the abstract; if the bound is loose, the real-time constraint may select a suboptimal branch precisely in high-leverage end-of-clock situations. (4) Browser-based execution constrains numeric precision (typically float32 in JavaScript) relative to offline training (typically float64), which can drift calibrated probabilities away from the reported calibration [PAGE 1]. (5) The offense models the defense via an expected defensive response, but no adaptive counter-model of the defense’s recursion is described, creating a theory-of-mind depth mismatch when an opponent adjusts within a game. (6) “Public data” is presented as the equalizer [PAGE 1], yet official matchup tracking and biometrics may have selective missingness or latency that varies by arena and broadcaster, violating the 99.5–100% alignment claim in operational settings. These gray zones define the singularity regimes where the system’s formal guarantees break down.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let the aligned per-shot dataset be \mathcal{D} = \{ (\mathbf{x}_i, y_i, t_i, m_i) \}_{i=1}^{N}, where N = 4.23 \times 10^6 shots span 21 seasons [PAGE 1]; \mathbf{x}_i \in \mathcal{X} denotes the shot and matchup feature vector, y_i \in \{0,1\} the made/missed outcome (or shot-value class), t_i the possession timestamp, and m_i the matchup identifier. The alignment operator \mathcal{A} joins the five public sources [PAGE 1] with alignment rate r \in [0.995, 1.00] [PAGE 1], a dimensionless probability in information-theoretic units.

ShotNet is an embedding MLP, f_{\theta}: \mathcal{X} \to \Delta^{K-1}, producing a categorical distribution over K shot outcomes. The expected shot value is \hat{v}(\mathbf{x}) = \sum_{k=1}^{K} p_k(\mathbf{x}) v_k, where p_k(\mathbf{x}) = [f_{\theta}(\mathbf{x})]_k and v_k \in \mathbb{R} is the point value of outcome k (units: points). Calibration requires \mathbb{P}(Y=1 \mid f_{\theta}(\mathbf{x})=p) = p for all p \in [0,1], dimensionless probability units. Baselines are a zone-rate baseline and a logistic baseline [PAGE 1]; ShotNet “beats” both on a held-out season and is “well calibrated” [PAGE 1], but the abstract reports no AUC, Brier score, or expected-calibration-error numerics.

Possession planning uses depth-limited expectimax. For state s at search depth d:
V_d(s) = 
\begin{cases}
\hat{v}(s), & d = 0 \quad \text{(leaf: ShotNet leaf value)}\\
\max_{a \in \mathcal{A}_{\mathrm{off}}(s)} \; \mathbb{E}_{b \sim \pi_{\mathrm{def}}(\cdot \mid s,a)} \left[ V_{d-1}(s') \right], & d > 0,
\end{cases}
where \mathcal{A}_{\mathrm{off}} is the offensive action set, \pi_{\mathrm{def}} is the defensive response model, and s' = T(s,a,b) is the transition function. Units: V_d(s) is in expected points; d is dimensionless node depth. Branch-and-bound prunes node n when \mathrm{UB}(n) < \mathrm{LB} - \epsilon, with \epsilon > 0 a dimensionless tolerance. Worst-case complexity is O(b^d) for branching factor b; pruning reduces average-case complexity but introduces a bounded suboptimality gap proportional to the looseness of \mathrm{UB}(n).

Assumptions: (A1) Markov possession: s captures all decision-relevant state. (A2) \pi_{\mathrm{def}} is stationary within a possession. (A3) Shot value \hat{v} is separable from game-clock pressure except through the depth cutoff d. (A4) Feed alignment remains in [0.995, 1.00] [PAGE 1]. Breakdown regimes: (R1) d too small relative to shot-clock horizon produces myopic end-of-possession decisions. (R2) r < 0.995 injects alignment noise \eta into matchup features, biasing \theta. (R3) Offline float64 training versus browser float32 inference shifts calibrated probabilities by \delta_{\mathrm{cal}}. (R4) The two unnamed data pitfalls [PAGE 1], if triggered, corrupt labels silently. (R5) Opponent within-game adaptation invalidates the fixed \pi_{\mathrm{def}}.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage of HoopMind traces through three historical layers. Layer one is game-theoretic search: expectimax descends from von Neumann’s minimax theorem (1928) and Shannon’s chess game-tree formalization (1950), where chance nodes model opponent or randomness and max nodes model the agent; branch-and-bound pruning is a classic operations-research device for reducing exponential search trees. Layer two is basketball shot-value modeling: from early expected-points frameworks tied to shot location (e.g., spatial shot-quality research) to modern neural embeddings, ShotNet continues the tradition of estimating outcome probabilities from public spatial data rather than proprietary tracking. Layer three is systems deployment: offline training with a light online inference path mirrors the separation used in production recommender systems and game AI, where heavy models are trained in batch and a shallow search runs at inference time under latency constraints.

Multi-week traps arise because the paper relies on public data aggregated over 21 seasons [PAGE 1]. First, cross-season distribution shift: NBA playing style, rule emphasis, and three-point volume have evolved materially across two decades; a model trained on early-2000s data may misprice modern pace-and-space possessions. Second, roster and coaching turnover: within a single season, trades, injuries, and coaching changes alter \pi_{\mathrm{def}} and offensive habit structures, violating stationarity assumption (A2) over multi-week windows. Third, opponent adaptation: because the planner is opponent-aware, a savvy defensive coaching staff can invert the offense’s expectimax by taking away the branch the planner favors, forcing a regression to secondary options. Fourth, schedule-induced fatigue and load management: back-to-backs, road travel, and rest protocols change player biometrics and matchup quality in ways that public shot and play-by-play feeds may not capture at alignment rates near 100% [PAGE 1]. The transferable warning is explicit: “the data-fusion pitfalls are the transferable part for anyone joining NBA shot and play-by-play feeds” [PAGE 1], meaning that any multi-week deployment must re-validate alignment and pitfall handling each time a feed schema or scorer crew changes.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
HoopMind embeds a first-order theory of mind inside the offensive planner: the offense assumes a defensive policy \pi_{\mathrm{def}} and computes a best response via expectimax. Recursion breaks down when the defense itself models the offense’s planner. Crisis habit regression describes the tendency of offenses, under shot-clock pressure (late seconds of the 24-second clock), to revert to high-frequency habits such as isolation or early pick-and-roll rather than executing the deeper branches of the game tree. If the offense’s depth limit d truncates before the crisis horizon, the planner cannot see the regression coming and will over-value branches that require clean, early execution.

The counter-trap operates in the opposite direction: if the defense over-adjusts to scouted offensive tendencies, it leaves a secondary branch under-defended. A depth-limited expectimax with tight branch-and-bound bounds may prune that secondary branch prematurely if its upper bound is estimated conservatively, causing the offense to walk into the counter-trap. The clock is the hard constraint mapping search depth to physical time: each expectimax node consumes compute, and the 24-second shot clock plus the 8-second half-court violation impose a real-time horizon. End-of-possession recursion further complicates the model: the utility of the last possession of a quarter or game depends on score differential and timeouts, yet the abstract describes a generic half-court possession [PAGE 1] without end-game state augmentation. Therefore, a full recursive theory-of-mind model would require (i) time-varying \pi_{\mathrm{def}}(t_{\mathrm{clock}}), (ii) adaptive depth allocation that expands search near crisis seconds, and (iii) end-game utility functions beyond per-shot expected value. The paper’s depth-limited, browser-based design implicitly assumes bounded rationality on both sides, but it does not specify how deep the defense’s recursion goes or how the offense detects when its own model of the defense has been counter-modeled.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: basketball is played indoors on fixed court dimensions (94 ft \times 50 ft; rim at 10 ft) with a 24-second shot clock. Weather has negligible direct effect because the arena envelope isolates play; indirect effects (team travel across time zones, circadian disruption) are not in the public shot/play-by-play fusion [PAGE 1] and therefore constitute an exogenous veto risk if the model is applied without travel/load covariates.

Biomechanical layer: player biometrics are one of the five fused sources [PAGE 1]. Veto rule V_bio: if a shooter’s biometric feature vector is missing or fails alignment with shot location and matchup tracking at the [PAGE 1] alignment threshold, suppress ShotNet output for that player and fall back to the zone-rate baseline [PAGE 1]. Physical veto rule V_phys: if the computed shot location falls outside court bounds or the shot-clock timestamp implies a physically impossible release interval (e.g., two shots from the same matchup within 0.2 seconds), veto the row as feed corruption.

Data-alignment veto rule V_align: because alignment is reported as 99.5% to 100% [PAGE 1], any observed batch alignment below 0.995 between official matchup tracking and shot locations triggers a veto of the affected join; the system cannot claim calibrated shot values on misjoined data. Compute veto rule V_compute: the online system must stay light because training is offline [PAGE 1], and the planner/simulator run in a single browser page [PAGE 1]. If branch-and-bound cannot return within the client frame budget (e.g., >100 ms), veto the real-time game-tree output and serve the shallow MLP-only recommendation or zone-rate baseline [PAGE 1]. Stationarity veto rule V_stat: if the held-out-season distribution [PAGE 1] diverges from the deployment season by more than a pre-set divergence tolerance, veto the calibrated probabilities until recalibration on recent data. These veto rules are composable: any triggered veto forces degradation to the most conservative available predictor rather than silent propagation of a broken assumption.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Alignment collapse on matchup tracking. On a given game night, official matchup tracking fails to align with shot locations at the reported 99.5–100% band [PAGE 1]; measured alignment drops to 98.2%. VRF (verifiable reward function): batch alignment rate r_batch. Veto condition: r_batch < 0.995. Action: veto ShotNet inference for affected matchups; serve zone-rate baseline [PAGE 1]. Verifiable prediction: expected calibration error on the affected subset increases from <0.01 to >0.03, and Brier-score skill relative to the zone-rate baseline becomes negative by at least 0.005.

Scenario 2 — Horizon truncation in crunch time. A possession enters the final 4 seconds of the shot clock. The depth-limited expectimax with depth d cannot reach a ShotNet leaf before clock expiry, and branch-and-bound prunes a high-variance drive-and-kick branch because its upper-bound estimate is loose relative to a conservative pick-and-roll bound. VRF: search horizon in seconds vs. remaining shot-clock time. Veto condition: max reachable depth d_max corresponds to > remaining seconds, or branch-and-bound gap \Delta = \mathrm{UB} - \mathrm{LB} > \epsilon_{\mathrm{crunch}} at the root. Action: veto planner output; default to coach scripted set. Verifiable prediction: offensive expected points on vetoed crunch-time possessions fall below the zone-rate baseline by at least 0.05 points per possession, and live turnover rate rises by >2% relative to non-vetoed possessions.

Scenario 3 — Client compute overload in the browser simulator. The playable simulator runs in a single browser page [PAGE 1] on a low-end client device; the JavaScript event loop exceeds the frame budget because the offensive branching factor b is large and depth d is high. VRF: decision latency and frame rate. Veto condition: median planner latency > 50 ms or simulator frame rate < 30 fps. Action: veto full expectimax; reduce depth by one or switch to one-step greedy MLP recommendation. Verifiable prediction: latency spikes from median <30 ms to >200 ms, and the degraded recommendation lowers predicted possession value by approximately 0.03 expected points relative to the unpruned depth-d search.
</RLVR_COUNTERFACTUAL_VETOES>