---
source: "2017 Bhostgusters - Realtime Interactive Play Sketching with Synthesized NBA Defenses.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 11
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5491
---

<NATIVE_REASONING>
The user wants me to analyze a specific research paper: "Bhostgusters: Realtime Interactive Play Sketching with Synthesized NBA Defenses" (2017). They've provided the full markdown text across 11 pages (actually extends to page 13 with appendix).

I need to follow strict invariants:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important constraints:
- No betting lines whatsoever.
- No fake toy equations. Must use formal LaTeX, proper units (SI/information/probability), assumptions, exact breakdown regimes.
- Cite exact page markers [PAGE N] and verbatim quotes from source.
- Must be >=1000 words total across sections.
- Each section has minimum word count for THINK_TRACE (>=400 words).

Let me carefully extract facts from the source text to ground everything:

Paper: Bhostgusters: Realtime Interactive Play Sketching with Synthesized NBA Defenses. Basketball Track Paper 5718. 2017.

Key facts:
- Data: STATS SportVU player tracking from 2016-2017 NBA season. [PAGE 3] (Section 2.1 Data)
- 30,764 possessions, average duration 12.64 seconds. [PAGE 3]
- Possessions: ten 2D trajectories (players) and one 3D trajectory (ball). [PAGE 3]
- Metadata: game clock, shot clock, player fouls, number of in-game seconds logged by each player. [PAGE 3]
- Filtered out jump balls, free throws, game delays. [PAGE 3]
- Model: two-layer LSTM per role. Five distinct two-layer LSTMs (one for each role). [PAGE 3]
- Training phases: pre-training (predict next timestep 80ms given true current positions), single-policy training (rollout predicting multiple timesteps given true positions of others), joint-policy training (all five together, using predictions of other four). [PAGE 3]
- Context features: elapsed time on court (fatigue proxy), fouls conceded. [PAGE 4]
- Ensemble: 10 different models, training procedure run 10 times. [PAGE 4]
- Prediction error evaluated over first 2s (twice training rollout time). [PAGE 4]
- San Antonio team-specific: error decreases from 8.22ft/player to 6.59ft/player. [PAGE 4]
- Contextual features increase error (model too complex for half season data). [PAGE 4]
- 10 team-specific models for each of four teams (SAS, GSW, DAL, LAL) = 40 models. Evaluated on 25 possessions. [PAGE 4]
- Expected Points Model (EPM): parsimonious regression based on shot location, ball state, distances to two nearest defenders. [PAGE 6]
- Ball state: vanilla gradient boosting classifier, ~2000 frames manually labeled. [PAGE 6]
- EPM: league average expectations consistent with other models; deep red = 1.3 pts/attempt, dark blue = 0.5 pts/attempt. [PAGE 7]
- Sketching: routes defined as ordered set of segments, each segment ordered (x,y) locations with metadata. [PAGE 8]
- Timing inference: linear interpolation per segment (not per route) to guarantee feasible solutions. Empirically derived values for dribbling, passing, shooting velocities. [PAGE 8-9]
- Editing: extract routes from trajectories by dropping timing, re-sampling fixed spatial resolution (every half foot). [PAGE 9]
- Roles: center, point guard, shooting guard, small forward, power forward. Hungarian algorithm for linear assignment. Templates inverted for offense/defense. Weighted combination via sigmoid based on centroid. [PAGE 12 Appendix A.1]
- Features: 247 dimensions, global cartesian (x,y) and relative polar (r, cosθ, sinθ), one-hot team identity, context features (score, game clock, shot clock), player-specific attributes (fouls committed, cumulative on-court time). [PAGE 12 Appendix A.2]
- Game evolution: 3-point shot introduced 1980. 2012-13 avg 20 three pointers, 2016-17 avg 27, Houston Rockets almost 40 per game. [PAGE 12 Appendix A.3]

Now I need to structure the response.

Section 1: <THINK_TRACE> (>=400 words)
Deep multi-hop derivation & gray-zone audit.
I should discuss:
- The epistemic chain from raw SportVU trajectories to ghosted defense to expected points.
- The multi-agent imitation learning breakdown: pre-training → single-policy rollout → joint-policy cooperative training.
- Gray zones: the paper admits contextual features increase error because model too complex for half season of data; the 80ms timestep vs 2s evaluation horizon; role assignment via Hungarian algorithm assumes static templates; ball state classifier only ~2000 frames; linear interpolation per segment assumes constant velocity within segments; fatigue modeled only as cumulative on-court time (not actual physiological fatigue); fouls as discrete count not continuous risk; ensemble dispersion grows ~0.16ft/s; singularity/breakdown when possession involves rebound preparation (errors grow); novel sketches may produce bizarre EPM expectations.

Section 2: <SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX, units, page citations, breakdown.
Need to define:
- Trajectory space: $\mathcal{T} = \{ \tau_i \}_{i=1}^{10} \cup \{ \tau_b \}$, $\tau_i \subset \mathbb{R}^2 \times \mathbb{T}$, $\tau_b \subset \mathbb{R}^3 \times \mathbb{T}$.
- LSTM policy: $\pi_\theta^{(r)}: \mathcal{H}_t \times \mathcal{F}_{ctx} \to \mathbb{R}^2$ for role $r \in \{PG, SG, SF, PF, C\}$.
- Pre-training: minimize $\mathbb{E}[\| \hat{x}_{t+1} - x_{t+1} \|_2]$ at $\Delta t = 80$ ms.
- Joint training: condition on $\hat{x}^{(j)}$ for $j \neq i$.
- Error metric: $E = \frac{1}{N}\sum \| \hat{x}_{def} - x_{def} \|_2$ in ft/player.
- Specific values: 8.22 ft/player generic → 6.59 ft/player SAS-specific. Contextual features increased error (not quantified numerically).
- Ensemble: $M=10$ models, dispersion $\approx 0.16$ ft/s growth.
- EPM: $\hat{EP} = f(\text{shot location}, \text{ball state}, d_{def1}, d_{def2})$; gradient boosting classifier for ball state on $\sim 2000$ frames; units pts/attempt.
- Feature vector dimension $D=247$.
- Roles: Hungarian algorithm solves linear assignment; sigmoid-weighted template mixing $w = \sigma(\text{centroid})$.
- Timing: linear interpolation per segment; velocities empirically derived; re-sampling every 0.5 ft.
- Breakdown regimes: >2s prediction horizon; rebound scramble; insufficient data for context features; non-realistic sketches causing bizarre EPM; role template inversion failure in small-ball/stretch-4 lineups.

Section 3: <RETROCAUSAL_GENEALOGY>
Historical/scientific lineage & multi-week traps.
- Bill Walsh look-up table [1] (NFL, 70s) → fixed context table impractical in basketball due to continuous dynamics.
- Toronto Raptors ghosting 2013 [7] rule-based (x,y) where defenders should have been.
- Le et al. SSAC 2017 [5] soccer ghosting via deep imitation learning; lacked fidelity/context/fatigue.
- Le et al. ICML 2017 [8] Coordinated Multi-Agent Imitation Learning.
- Pointwise [10] Cervone et al. 2014 MIT Sloan; more complex EPM may generate bizarre expectations for unrealistic sketches.
- FiveThirtyEight Morris [9] expected points.
- Lucey et al. CVPR 2013 [13] roles/templates.
- Multi-week traps: fatigue accumulates over week (cumulative on-court time is a proxy but not same as multi-week load management); foul trouble accumulates across games; team defensive schemes evolve over season (3PT rate increase from 20 to 27 per game 2012-13 to 2016-17); model trained on 2016-17 half season may not generalize to playoff adjustments.

Section 4: <RECURSIVE_THEORY_OF_MIND>
Crisis habit regression vs counter-trap vs clock.
- This is about coach/defense recursive modeling. Coach sketches offense → model predicts defense → coach evaluates EP → adjusts sketch. But defense also models offense recursively.
- Crisis habit regression: under pressure (shot clock winding down, close score), coaches revert to instinct (Brad Stevens example) rather than system; the tool tries to replace instinct with objective look-up but basketball is continuous so no fixed table.
- Counter-trap: defense knows offense is using ghosting? Not exactly, but if offense optimizes against ghosted defense, defense adapts; joint training attempts to capture cooperative behaviors (switching, weak-side help) but it's a Stackelberg-like leader-follower where offense commits first via sketch.
- Clock: game clock, shot clock, 80ms timestep, 12.64s possession average, 2s prediction window, 48-minute fatigue clock (manipulated in Fig 3). Full game = 48 min. Small forward fatigue clock changed to ~48 minutes causes fallback.

Section 5: <CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof.
- Physical: court dimensions, basketball physics (3D ball trajectory), player speed limits; linear interpolation per segment may violate max acceleration/velocity if segment too short/time too long.
- Biomechanical: fatigue proxy = cumulative on-court time; at ~48 minutes (full game) defender falls back; center with 5 fouls stays low; these are hard constraints/vetoes (foul trouble, physiological fatigue).
- Weather: indoor sport, no weather veto per se, but arena conditions (not discussed). However, I should note that since indoor, weather is not a layer, but court/tracking noise is.
- Veto proof: if sketch requires player to traverse distance faster than physically possible given inferred velocities, the linear-interpolation-per-segment guarantees feasibility of pass-receive timing but not necessarily biomechanical plausibility of sprint vs jog. The paper says per-route linear timing often results in infeasible plays (pass ends in empty space); per-segment fixes ball-player synchronization but not human speed limits.

Section 6: <RLVR_COUNTERFACTUAL_VETOES>
3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning via Verifiable Rewards? Or some framework. I need to create 3 counterfactual veto scenarios that are verifiable (can be tested/falsified) with predictions. No betting lines.
Scenario 1: Fatigue veto. If a defender's cumulative on-court time > 40 minutes and offensive route forces a closeout, the ghost should fall back rather than close out aggressively. Prediction: EP increases by at least X (but no fake ratios; I can say qualitatively expected points increases because closeout is weaker). Actually I should not invent fake numbers. I can state prediction directionally and specify measurable outcome: distance between ghost shooter and defender will be larger by >1 ft compared to non-fatigued condition.
Scenario 2: Foul trouble veto. Defender with 5 fouls stays low; does not contest aggressively. Prediction: ghost center will maintain verticality / lower center of mass, measured by y-coordinate remaining below baseline threshold; offensive expected points for post-up increases relative to 0-foul condition.
Scenario 3: Timing infeasibility veto. Sketch requires pass and catch-and-shoot where ball segment duration < receiver travel time per linear interpolation. The system's per-segment linear timing should reject or resample; if forced, ghost defense will not be in position because offensive timing violates empirically derived pass velocity. Prediction: possession will be flagged as infeasible or ghost defenders will be out of position >2 ft from expected help locations.

Need to ensure >=1000 words total. THINK_TRACE alone >=400. Let's aim for substantial length.

Also strict: cite exact [PAGE N] markers. Since source text shows page numbers in comments like "1", "2", "3" etc. I need to map content to pages. Let's identify page markers from source:

- Page 1: Title, Intro start, Figure 1, footnote 1. Ends with "1" page number.
- Page 2: Intro continues, System overview, footnote 2. Ends with "2".
- Page 3: Section 2 Data-Driven Ghosting, 2.1 Data, 2.2 Deep Multi-Agent. Ends with "3".
- Page 4: 2.2 continued, 2.3 Results. Ends with "4".
- Page 5: Figure 2 caption. Ends with "5"? Actually text shows page 5 marker after Figure 2. Then Figure 3 caption.
- Page 6: Figure 3 continued? Then 2.4 Expected Points. Ends with "6".
- Page 7: Figure 4 caption, Figure 5 caption. Ends with "7".
- Page 8: Section 3 Sketching, 3.1 Inferring Timing. Ends with "8".
- Page 9: Figure 6 caption, 3.1 continued, 3.2 Editing. Ends with "9".
- Page 10: Section 4 Summary, References start. Ends with "10".
- Page 11: References continued. Ends with "11".
- Page 12: Appendix A.1 Roles, A.2 Features, A.3 Game Evolution. Ends with "12".
- Page 13: Appendix A.4 Ghosting Response to Sketch. Ends with "13".

The user said PAGES: 11 but source extends to 13. I'll cite up to 13 where relevant.

Need verbatim quotes? Invariant says "cite exact [PAGE N] markers and verbatim quotes." So I should include some verbatim quotes with page markers.

Let's draft carefully.

Word count: I need to ensure total across all sections >=1000 words. Let's plan:

THINK_TRACE: ~500 words.
SOURCE_OPERATORS_AND_EQUATIONS: ~400 words.
RETROCAUSAL_GENEALOGY: ~300 words.
RECURSIVE_THEORY_OF_MIND: ~250 words.
CROSS_LAYER_VETO_ADJUDICATION: ~250 words.
RLVR_COUNTERFACTUAL_VETOES: ~250 words.
Total ~1950 words. Safe.

Now write in the required XML sections exactly.

Important: Do not mention betting lines. Avoid "spread", "total", "moneyline", "odds", "bet", "wager". Also avoid "probability units" weirdness? It's fine to mention probability but not betting odds.

Let's write.

For THINK_TRACE:
- Start with the epistemic chain: raw SportVU → role assignment → LSTM policies → ghosted defense → EPM → sketch evaluation.
- Multi-hop: Timing inference depends on empirically derived velocities; if velocities wrong, entire animation and ghost response is wrong. Context features (fatigue/fouls) were added but increased error due to optimization difficulty with half-season data (verbatim quote needed). Ensemble of 10 models to handle stochastic gradient descent variance. Error measured over first 2s (twice training rollout). Dispersion grows ~0.16ft/s. Breakdown when players prepare for rebound (errors grow). Role templates inverted for offense/defense; Hungarian algorithm assignment assumes role templates; stretch-4/small-ball evolution noted as beyond scope but acknowledged.
- Gray zones: ball-state classifier trained on only ~2000 manually labeled frames; fatigue modeled as cumulative seconds not actual physiological state; EPM parsimonious by design to avoid bizarre expectations on unrealistic sketches; yet novel sketches by definition may be unrealistic, creating a self-defeating loop.

Include verbatim quotes:
[PAGE 3] "In total, the training data consists of 30,764 possessions, with an average duration of 12.64 seconds."
[PAGE 4] "The addition of contextual features increases the error. We conjecture that the model becomes too complex to optimize with only half a season of training data."
[PAGE 4] "Introducing a team specific feature significantly increases the accuracy of the ghosts (error decreases from 8.22ft/player to 6.59ft/player)."
[PAGE 8] "Unfortunately, applying linear timing to each route often results in infeasible plays."

For SOURCE_OPERATORS_AND_EQUATIONS:
Define formal notation.

Let $\mathcal{P} = \{p_1,\dots,p_{10}\}$ be the set of player trajectories and $b$ the ball trajectory.
Each possession $\tau \in \mathcal{D}$ where $|\mathcal{D}| = 30,764$ [PAGE 3], $\bar{d} = 12.64$ s.

Role-conditioned policy:
$\pi^{(r)}_{\theta}: (\mathcal{S}_t, \mathbf{c}_t) \mapsto \hat{\mathbf{x}}_{t+1}^{(r)} \in \mathbb{R}^2$, $r \in \{\text{PG, SG, SF, PF, C}\}$.
$\mathbf{c}_t \in \mathbb{R}^{247}$ includes cartesian/polar features, one-hot team, score, game clock, shot clock, fouls, on-court time [PAGE 12].

Pre-training loss at $\Delta t = 80$ ms:
$\mathcal{L}_{pre} = \mathbb{E}_{\tau \sim \mathcal{D}} \left[ \| \hat{\mathbf{x}}_{t+\Delta t} - \mathbf{x}_{t+\Delta t} \|_2^2 \right]$ [PAGE 3].

Joint policy training:
$\hat{\mathbf{x}}_{t+1}^{(i)} = \pi^{(i)}(\mathcal{S}_t, \{\hat{\mathbf{x}}_{t}^{(j)}\}_{j \neq i}, \mathbf{c}_t)$.

Error metric ft/player:
$E = \frac{1}{N_{test}} \sum_{k=1}^{N_{test}} \| \hat{\mathbf{x}}_{def}^{(k)} - \mathbf{x}_{def}^{(k)} \|_2$, units feet.
Generic league: $8.22$ ft/player; SAS-specific: $6.59$ ft/player [PAGE 4].

Ensemble dispersion: $\approx 0.16$ ft/s growth with sequence length [PAGE 4 / Figure 4 text on page 7? Actually page 7 text describes Figure 4. I'll cite [PAGE 7] for the description].

EPM:
$\widehat{EP} = g(\mathbf{x}_{shot}, s_{ball}, d_1, d_2)$, units pts/attempt; $g$ parsimonious regression [PAGE 6].
Ball state classifier: gradient boosting, $\sim 2,000$ labeled frames [PAGE 6].

Timing:
Per-segment linear interpolation. Route $R_i = \{s_{i,1}, \dots, s_{i,K}\}$, each segment $s$ has $(x,y)$ and metadata. Duration estimated from ball route using empirical dribble/pass/shoot velocities [PAGE 8-9].
Re-sampling for editing: fixed spatial resolution every $0.5$ ft [PAGE 9].

Breakdown regimes:
- $t_{horizon} > 2$ s: precision decays [PAGE 4].
- Rebound preparation: errors grow [PAGE 7].
- Context feature overload: optimization failure with half-season data [PAGE 4].
- Unrealistic sketches: bizarre EPM expectations [PAGE 6].

For RETROCAUSAL_GENEALOGY:
- Walsh look-up table [1] NFL 1970s; fixed table impractical in continuous basketball [PAGE 1].
- Brad Stevens instinct [2,3] [PAGE 1].
- Eberhardt quote on difficulty of drawing plays [4] [PAGE 1].
- Raptors ghosting 2013 rule-based [7] [PAGE 2].
- Le et al. soccer ghosting SSAC 2017 [5] [PAGE 1-2]; lacked context/fatigue.
- Le et al. ICML 2017 multi-agent imitation [8] [PAGE 3].
- Pointwise [10] complex EPM [PAGE 6].
- FiveThirtyEight Morris [9] league average EP [PAGE 6].
- Lucey et al. roles/templates [13] [PAGE 12].
- Multi-week traps: fatigue and fouls accumulate over week/month; model uses cumulative on-court time as proxy [PAGE 4,12]; 3PT rate shift 20 → 27 per game from 2012-13 to 2016-17 [PAGE 12], meaning defensive schemes drift; model trained on 2016-17 half season may not capture playoff adjustments later in same season or next season.

For RECURSIVE_THEORY_OF_MIND:
- The tool creates a leader-follower recursion: offense sketches (commits), defense ghost responds, EP evaluated, offense revises. But the actual defense is also adapting to the offense's tendencies (counter-trap).
- Crisis habit regression: under shot clock/game clock pressure, coaches regress to instinct (Brad Stevens, "look-up table" is impossible because continuous) [PAGE 1]. The system attempts to supply an objective look-up equivalent in realtime.
- Counter-trap: if an offense repeatedly sketches the same play to exploit a ghosted weakness, a real defense would adjust; joint-policy training models cooperation (switching, help) but does not model an opponent actively counter-adapting to the sketched play itself. This is a one-level recursion, not a fixed point.
- Clock: 80ms timestep [PAGE 3], 12.64s mean possession [PAGE 3], 2s evaluation window [PAGE 4], 48-minute fatigue clock manipulation [PAGE 5 Figure 3], game clock/shot clock as context features [PAGE 12]. The clock is both an input constraint and an evaluation boundary.

For CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: court boundaries, ball physics (3D trajectory), passing/shooting velocities. Per-route linear timing caused infeasible plays (pass to empty space); per-segment interpolation fixes synchronization but not max velocity/acceleration [PAGE 8].
- Biomechanical layer: fatigue proxy (on-court seconds) causes defenders to fall back at ~48 minutes [PAGE 5 Figure 3]; 5-foul center stays low [PAGE 5]; these act as hard constraints/vetoes on defensive aggression. The model does not model actual muscle fatigue, injury risk, or load management across a week.
- Weather: indoor sport; no weather layer exists in the data. However, arena-to-arena tracking calibration is not discussed; this is a silent veto risk if SportVU calibration varies.
- Veto adjudication: if any layer returns "infeasible" (e.g., required speed > empirical max), the sketch is flagged or re-timed; otherwise ghost response proceeds. There is no explicit veto mechanism described in the paper, only the timing feasibility guarantee for ball-player sync [PAGE 8-9].

For RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable veto scenarios + predictions. Make them testable.

Scenario 1: Fatigue-induced closeout veto.
Condition: Defender assigned to close out on a corner shooter has cumulative on-court time > 42 minutes (near full game).
Veto rule: The model should suppress aggressive closeout; ghost defender increases distance to shooter by at least 1.0 ft relative to the same defender at < 10 minutes on court, all else equal.
Verification: Compare ghost defender position at shot time across fatigue-manipulated simulations (as in Figure 3 [PAGE 5]). Prediction: EPM output for that shot will be higher (more points) because contest is weaker; no numeric EP delta invented, only directional.

Scenario 2: Foul-trouble rim protection veto.
Condition: Ghost center has accumulated 5 personal fouls.
Veto rule: Center shall not leave feet or contest at the rim; maintains verticality with y-coordinate below a hard-coded low-post threshold.
Verification: Observe ghost center trajectory during a post-up or drive; prediction: center stays in restricted area/lower vertical position compared to 0-foul analogue [PAGE 5 Figure 3]; offensive expected points in the paint rises relative to non-fouled state.

Scenario 3: Temporal infeasibility veto on sketch export.
Condition: A sketched pass segment length $L$ and inferred ball velocity $v_{pass}$ imply travel time $t_{ball} = L/v_{pass}$, but receiver route segment requires arrival time $t_{recv} < t_{ball} - \epsilon$.
Veto rule: The per-segment linear timing engine must either reject the sketch or insert a wait segment; it cannot animate a catch before the ball arrives.
Verification: Construct a sketch where player 3 runs to catch-and-shoot location but ball is animated faster (as described in Figure 6 critique [PAGE 8]); prediction: without per-segment timing, receiver arrives after shot; with veto, timing is adjusted so pass and reception are synchronized, eliminating the empty-space catch failure mode.

All predictions are directional and verifiable via the system's own logging; no betting lines.

Now check word counts. I'll write generously.

Also ensure no fake equations like Force/Fatigue. All equations are formal and tied to paper.

Let's write the final response.
</NATIVE_REASONING>

<THINK_TRACE>
The epistemic chain in this paper moves from raw STATS SportVU tracking to role-conditioned defensive ghosts, then to expected-points evaluation of coach-sketched offenses. The first hop is data reduction: 30,764 possessions from the 2016-2017 NBA season, each consisting of ten 2-D player trajectories and one 3-D ball trajectory, with mean possession length 12.64 seconds [PAGE 3]. Possessions involving jump balls, free throws, and delays are excluded. The second hop is role assignment: players are not modeled by identity but by role (point guard, shooting guard, small forward, power forward, center), assigned via a Hungarian-algorithm solution to a linear assignment problem using offense/defense templates that are inversions of one another and blended with a sigmoid weighted by player centroid [PAGE 12]. The third hop is the deep multi-agent imitation model: five distinct two-layer LSTMs, one per role, trained in three phases—pre-training on the next 80 ms timestep given true positions, single-policy rollout conditioned on true positions of other players, and joint-policy rollout conditioned on the predictions of the other four roles to learn switching and weak-side help [PAGE 3].

The fourth hop adds context: score, game clock, shot clock, fouls, and cumulative on-court time (a fatigue proxy) are appended to a 247-dimensional feature vector that mixes global cartesian coordinates with relative polar coordinates $(r,\cos\theta,\sin\theta)$ [PAGE 12]. Here lies a gray zone the paper explicitly admits: adding these contextual features increased prediction error, with the authors conjecturing the model is too complex to optimize on only half a season of data [PAGE 4]. Team specificity helps—San Antonio-specific error drops from 8.22 ft/player to 6.59 ft/player—but context hurts [PAGE 4]. An ensemble of 10 models is trained to average out stochastic gradient descent variance, with inter-model dispersion growing roughly 0.16 ft/s as sequence length extends [PAGE 7 discussion of Figure 4]. Evaluation is deliberately windowed to the first 2 seconds—twice the training rollout time—because precision decays with horizon and because rebound-preparation situations make errors grow rather than shrink [PAGE 4, PAGE 7].

The final hop is the expected-points model (EPM), a parsimonious regression on shot location, ball state, and distances to the two nearest defenders, with ball state inferred by a gradient-boosting classifier trained on only about 2,000 manually labeled frames [PAGE 6]. The authors avoid more complex EPMs because unrealistic user sketches could generate bizarre expectations [PAGE 6]. This is itself a recursive vulnerability: the tool is built for novel sketches, yet its evaluation metric is regularized against novelty. Additional gray zones include fatigue as cumulative seconds rather than physiological state, fouls as a discrete count instead of continuous risk, linear interpolation per segment that synchronizes ball and player but does not guarantee biomechanical speed limits, and the absence of any modeling of opponent counter-adaptation to a repeatedly sketched play.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let a possession be $\tau \in \mathcal{D}$, where $|\mathcal{D}| = 30,764$ and mean duration $\bar d = 12.64$ s [PAGE 3]. The state at frame $t$ includes ten player positions $\mathbf{x}_t^{(i)} \in \mathbb{R}^2$ and one ball position $\mathbf{x}_t^{(b)} \in \mathbb{R}^3$ [PAGE 3]. Roles $r \in \{PG, SG, SF, PF, C\}$ are assigned by solving a linear assignment problem via the Hungarian algorithm, blending offense and defense templates whose relative influence is governed by a sigmoid of the player-position centroid [PAGE 12].

Each role is governed by a policy LSTM
$$
\pi_{\theta}^{(r)} : \big(\mathcal{S}_t,\,\mathbf{c}_t\big) \mapsto \hat{\mathbf{x}}_{t+1}^{(r)} \in \mathbb{R}^2,
$$
where $\mathcal{S}_t$ is the observed state of all agents and $\mathbf{c}_t \in \mathbb{R}^{247}$ is the context feature vector: cartesian and polar features $(x,y,r,\cos\theta,\sin\theta)$, one-hot team identity, game clock, shot clock, score, fouls committed, and cumulative on-court time [PAGE 12].

Pre-training minimizes one-step error at $\Delta t = 80$ ms:
$$
\mathcal{L}_{\text{pre}} = \mathbb{E}_{\tau\sim\mathcal{D}}\!\left[ \big\| \hat{\mathbf{x}}_{t+\Delta t} - \mathbf{x}_{t+\Delta t} \big\|_2^2 \right] \quad \text{[PAGE 3]}.
$$
Joint training replaces true teammate positions with predictions:
$$
\hat{\mathbf{x}}_{t+1}^{(i)} = \pi_{\theta}^{(i)}\!\left(\mathcal{S}_t,\,\{\hat{\mathbf{x}}_t^{(j)}\}_{j\neq i},\,\mathbf{c}_t\right) \quad \text{[PAGE 3]}.
$$

Prediction error is measured in feet per player over the first 2 s:
$$
E = \frac{1}{N_{\text{test}}}\sum_{k=1}^{N_{\text{test}}} \big\| \hat{\mathbf{x}}_{\text{def}}^{(k)} - \mathbf{x}_{\text{def}}^{(k)} \big\|_2 \quad \text{units: ft/player [PAGE 4]}.
$$
Empirical results: league-average generic ghost $E = 8.22$ ft/player; San Antonio team-specific ghost $E = 6.59$ ft/player; adding player-context features increased $E$ [PAGE 4]. Ensemble dispersion grows at approximately $0.16$ ft/s with sequence length [PAGE 7].

The expected-points operator is
$$
\widehat{EP} = g\!\left(\mathbf{x}_{\text{shot}},\,s_{\text{ball}},\,d_1,\,d_2\right) \quad \text{units: pts/attempt [PAGE 6]},
$$
where $g$ is parsimonious by design and $s_{\text{ball}}$ is classified by a vanilla gradient-boosting classifier on $\sim 2{,}000$ labeled frames [PAGE 6].

Sketch-to-trajectory timing uses per-segment linear interpolation rather than per-route interpolation to guarantee that passes connect passer to receiver [PAGE 8-9]. Segment durations are estimated from empirically derived dribbling, passing, and shooting velocities [PAGE 8-9]. Route extraction for editing drops time and re-samples at a fixed spatial resolution of 0.5 ft [PAGE 9].

Breakdown/singularity regimes: (i) prediction horizon beyond 2 s, where precision decays [PAGE 4]; (ii) rebound scramble, where errors grow instead of shrink [PAGE 7]; (iii) contextual feature overload causing optimization failure on half-season data [PAGE 4]; (iv) unrealistic sketches producing bizarre EPM outputs [PAGE 6]; (v) role-template mismatch in stretch-four / small-ball lineups, acknowledged as beyond scope [PAGE 12].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s intellectual ancestry begins with Bill Walsh’s fixed “look-up table” for NFL play selection based on yardage, time, and game context [1], which the authors cite as the archetype of heat-of-the-moment decision support [PAGE 1]. They reject a fixed table for basketball because the game is continuous and dynamic; instead, coaches like Brad Stevens rely on instinct and experience to build play variations [2,3] [PAGE 1]. The difficulty of that intuition is quantified by Eberhardt’s observation that anticipating defensive matching, screen play, and removal of options under severe time pressure is “very tough” [4] [PAGE 1].

The direct methodological ancestor is data-driven ghosting: first introduced by the Toronto Raptors in 2013 as rule-based algorithms indicating where defenders should have been rather than where they were [7] [PAGE 2]; then advanced by Le et al. at SSAC 2017 using deep imitation learning on soccer tracking data to hallucinate “ghost” defenders [5] [PAGE 1-2]. The Bhostgusters authors identify three shortcomings in Le et al.: insufficient fidelity, absence of game context (score, fatigue), and no modeling of dynamic factors such as player fatigue [PAGE 2]. They import the ICML 2017 coordinated multi-agent imitation learning framework [8] to address multi-agent coordination [PAGE 3]. Expected-points evaluation descends from Morris’s FiveThirtyEight work [9] and Cervone et al.’s POINTWISE [10], but the authors deliberately choose a simpler regression to avoid bizarre expectations on synthetic sketches [PAGE 6]. Role templates derive from Lucey et al.’s CVPR 2013 work on adversarial team behaviors [13] [PAGE 12].

Multi-week traps emerge from features the model includes but cannot fully capture. Cumulative on-court time is used as a fatigue proxy, yet true fatigue accrues across games and travel over a week, not merely within a single contest [PAGE 4, PAGE 12]. Foul trouble similarly accumulates across games, changing defensive aggression longitudinally in a way the per-possession model resets [PAGE 5, PAGE 12]. Scheme drift is documented in Appendix A.3: from 2012-13 to 2016-17, league average three-point attempts rose from 20 to 27 per game, with Houston near 40, causing defenders to guard the corner three much more aggressively in the later season [PAGE 12]. A model trained on the first half of 2016-17 may therefore miss playoff adjustments later in the same season, creating a temporal validity cliff that the paper does not quantify.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The system imposes a leader–follower recursion: the coach sketches an offensive route (commits), the ghosted defense responds (follows), expected points are computed, and the coach revises the sketch. This is a one-level Stackelberg-like loop, but it stops short of modeling the defense’s counter-response to the offense’s revised plan. If an offense repeatedly sketches the same action to exploit a ghosted weakness, a real defense would adjust its rotations; the joint-policy LSTMs learn cooperative behaviors such as switching on screens and weak-side help [PAGE 3], but they do not model an opponent actively counter-trapping a known sketch.

Crisis habit regression is central to the paper’s motivation. Under shot-clock and game-clock pressure, coaches regress to instinct because no fixed look-up table can cover continuous basketball [PAGE 1]. Bhostgusters attempts to replace instinct with an objective, real-time surrogate. The clock operates at multiple layers: the 80 ms LSTM timestep [PAGE 3], the 12.64 s mean possession length [PAGE 3], the 2 s prediction evaluation window [PAGE 4], and the manipulated fatigue clock shown in Figure 3, where a small-forward ghost at ~48 minutes falls back while a fresh ghost closes out [PAGE 5]. Game clock and shot clock are explicit context features [PAGE 12], so temporal scarcity is both an input constraint and an evaluation boundary.

The recursive vulnerability is that the model assumes the defense’s behavior is a function of the offensive sketch and game context, not of the offense’s knowledge that it is being ghosted. In a crisis, a coach may revert to habit exactly when the system’s context features (fatigue, fouls, clock) are most volatile, and the ensemble’s 0.16 ft/s dispersion means the ghosted defense is itself a distribution, not a single deterministic counter [PAGE 7]. The system therefore provides a point estimate of a stochastic response during the very moments when variance is highest.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The court is a bounded Euclidean domain; the ball is tracked in 3-D [PAGE 3]. Passing and shooting velocities are empirically derived constants used to time segments [PAGE 8-9]. A hard physical veto occurs if a sketched segment demands a traversal faster than the empirically observed velocity ceiling. The paper notes that naïve per-route linear timing produces infeasible plays—e.g., a pass arriving in empty space because the receiver was animated too quickly or slowly [PAGE 8]. Per-segment interpolation fixes passer–receiver synchronization but does not by itself enforce human acceleration or speed limits.

Biomechanical layer: Fatigue enters only as cumulative on-court seconds [PAGE 12], and fouls enter as a discrete count [PAGE 12]. Figure 3 demonstrates the veto-like effect: at ~48 minutes on court, the small-forward ghost falls back instead of closing out, and the center covers for him; with 5 fouls, the center stays low and does not contest aggressively [PAGE 5]. These are hard constraints on defensive aggression derived from game rules (foul limit) and a physiological proxy (time on court), but the model does not model muscle state, injury risk, or multi-game load management.

Weather layer: Basketball is indoor, so meteorological vetoes (wind, precipitation, temperature) do not exist in the data. A silent veto risk remains in cross-arena SportVU calibration, which the paper does not address; if tracking noise varies by venue, the 247-dimensional feature vector’s spatial terms may be systematically biased without any documented correction.

Veto adjudication: The paper describes no explicit “veto” flag, only a feasibility guarantee for ball–player timing via per-segment linear interpolation [PAGE 8-9]. If any layer returns infeasible—most conspicuously, a pass whose flight time conflicts with receiver arrival time—the animation cannot be generated as sketched. Otherwise the ghost proceeds. Because the EPM is intentionally parsimonious to avoid bizarre outputs on unrealistic sketches [PAGE 6], there is an implicit output veto: the model is designed to be robust rather than precise for novel inputs, trading sensitivity for generalization.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Fatigue closeout veto. Construct two simulations identical except for the defending small forward’s cumulative on-court time: Condition A at 8 minutes, Condition B at 46 minutes. The offensive sketch ends in a corner catch-and-shoot. Veto rule: if on-court time exceeds 42 minutes, the ghost defender must not execute an aggressive closeout; instead it increases defender–shooter separation by at least 1.0 ft relative to Condition A, all else equal. Verification: reproduce the Figure 3 fatigue manipulation [PAGE 5] and measure Euclidean distance at shot time. Prediction: Condition B yields a larger defender–shooter gap and a higher EPM output for that shot because the closeout is weaker; no numeric EP delta is asserted.

Scenario 2 — Foul-trouble rim veto. Construct two simulations identical except the ghost center has 0 versus 5 accumulated personal fouls. The offensive sketch runs a post-up or drive to the rim. Veto rule: with 5 fouls, the ghost center shall not leave its feet or contest vertically above a low-post y-coordinate threshold; it must maintain a low defensive stance. Verification: inspect ghost center trajectory during the possession as in Figure 3 [PAGE 5]. Prediction: the 5-foul ghost remains in the restricted area with lower vertical displacement than the 0-foul ghost, and the offensive expected points in the paint increase relative to the non-fouled analogue; no magnitude is fabricated.

Scenario 3 — Temporal infeasibility veto. Design a sketch in which the ball’s pass segment length $L$ and empirically derived pass velocity $v$ imply flight time $t_{ball}=L/v$, while the receiver’s route segment requires arrival at $t_{recv} < t_{ball} - \epsilon$. Veto rule: the timing engine must reject or retime the sketch; it may not animate a catch before the ball arrives. Verification: replicate the Figure 6 failure mode where player 3 reaches the catch location only after the ball has already been received and shot [PAGE 8]. Prediction: under per-segment linear timing with the veto active, pass and reception are synchronized and no empty-space catch occurs; without the veto, the receiver arrives late and the ghosted defense is evaluated against an impossible offensive timeline, invalidating the EPM comparison.
</RLVR_COUNTERFACTUAL_VETOES>