---
source: "2018 Interactive Play Sketching with Synthesized NBA Defenses.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 13
model: deepseek/deepseek-v4.1-flash-1017
words: 8664
---

<NATIVE_REASONING>
We need answer user. Need produce >=1000 words exact XML sections. Need analyze source. No betting lines. Need cite [PAGE N] markers verbatim quotes. Need formal LaTeX equations, units, assumptions, singularity/breakdown regimes. Need sections exact. Need discuss source operators/equations. Need derived equations from paper? It has LSTM, imitation learning, expected points. Need no fake ratios. We can formulate loss, coordinate prediction, dispersion, expected points regression. Need avoid inventing "fake ratios". We can define notation and equations grounded. Need mention breakdown regimes: variable length, rollout compounding, context feature complexity, linear timing infeasible unless per-segment, joint training assumptions, role assignment inversion. Need source citations exact quote. Need >=400 words think trace. Whole >=1000 words. Desired oververbosity 5. Need likely 2000+ words. Need rigorous.

Need parse paper details:
- Title Bhostgusters: Realtime Interactive Play Sketching with Synthesized NBA Defenses. Authors.
- Uses STATS SportVU 2016-17, training 30,764 possessions avg 12.64 sec.
- 5 distinct two-layer LSTMs one per role. Role-specific policy. Training phases: pre-training next timestep 80ms true current positions; single-policy rollout with true others; joint-policy uses other models predictions. Context features elapsed time proxy fatigue, fouls. Feature vector 247 dims. Includes global cartesian and relative polar, one hot team, score, game clock, shot clock, fouls, cumulative on court time.
- Prediction error first 2s, team-specific SAS improves 8.22 ft/player to 6.59 ft/player. Context features increase error due model complexity with half season. Ensemble 10 models. Dispersion approx 0.16 ft/s. Ensemble lower absolute error.
- Expected points on-ball model: parsimonious regression features shot location, ball state, distances to two nearest defenders. Expected points heatmap 1.3 pts/attempt deep red and 0.5 dark blue. Compare ghosts and true defenders similar expected points.
- Sketching: routes ordered segments with metadata; linear interpolation timing; per-route linear can infeasible; per-segment linear feasible; ball route velocities empirical typical dribbling/passing/shooting velocities; propagate temporal constraints.
- Editing trajectories to routes by sampling every half foot.
- Appendix roles: learn template from data, Hungarian assignment, weighted combo defense/offense based on sigmoid centroid. 3pt evolution 2012-13 20 attempts vs 2016-17 27; HOU almost 40. 16-17 ghosts guard corner three more aggressively.
Need include exact quotes with page markers. Use [PAGE 1], etc. Need verbatim quotes. We can quote short phrases. Need cite exact markers and verbatim quotes. Ensure quote exact from text. Some odd spacing but can quote.

Need structure exact XML:
<THINK_TRACE>...</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>...</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>...</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>...</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>...</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>...</RLVR_COUNTERFACTUAL_VETOES>

Need satisfy "GSE + GSI Frontier Reasoning Foundry" maybe no specific GSE? Need answer with technical audit. Maybe title.

Need no betting lines.

Need "multi-week traps" in genealogy. "Historical/scientific lineage & multi-week traps." Need discuss lineage: Toronto Raptors ghosting 2013, Le et al SSAC 2017 soccer, Le et al ICML 2017 coordinated multi-agent imitation, Walsh lookup table, Brad Stevens, current expected points, POINTWISE, role templates. Multi-week traps: training-test season shift 2012-13 to 2016-17 (game evolution), context overfit, ensemble vs single, per-route timing, role inversion, expected points simplicity vs bizarre expectations, tracking data dependence, sketch ambiguity, realtime UI, data leakage? Need not betting.

Need "RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock." This is odd. Need interpret: In crisis, model reverts to habit (league-average/default) vs counter-trap (exploiting ghost model) vs clock (game/shot clock pressure). Need discuss recursive modeling of opponent modeling. Use source: ghosting predicts how defense reacts, coaches can sketch to bust ghosted defenses; but if defense knows model? Recursive ToM: level-0 generic league average, level-1 team-specific, level-2 counter-ghost, level-3 defense anticipates counter. Clock features shot clock, game clock. Crisis habit regression: under late clock/tired/foul trouble, policy may regress to mean/generic behavior or training prior; context feature manipulation (fatigue ~48 min, 5 fouls) shows behavior shifts. Counter-trap: user can edit pass to different teammate and see defense reaction; over-reliance can be counter-exploited by adaptive defender. Need equation? Maybe not in that section but can mention. Need no fake ratios. Could define recursive policies as best response: $\pi_D^{(k+1)}=\arg\min_\pi \mathbb{E}[L_D(\pi,\pi_O^{(k)})]$. This is formal, not fake ratio. Fine. But source operators section already. Need keep exact.

Need "CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof." For basketball indoor no weather? Need discuss veto proof: model only tracking; lacks biomechanical constraints, fatigue physiology, injury, limb reach, collision, ball physics, weather not applicable indoor. But paper uses elapsed time proxy fatigue, fouls, on-court time; no explicit biomechanics; linear interpolation may violate acceleration/velocity; physics veto: ball pass speed etc empirical; per-segment timing feasible for ball-player rendezvous but not biomechanical feasibility. Need proof from paper: "player fatigue clock changed to ~48 minutes" etc. "falls back" etc. Weather veto: NBA indoor, weather not direct input; travel/arena? But no weather features. Need adjudication: veto if generated ghost path requires impossible acceleration/deceleration, collision, out-of-bounds? Paper has no explicit collision/kinematic constraints. Need state physical layer vetoes predictions if outside court or violates max speed/acceleration. But source doesn't provide max speed values; can define inequality check with unknown thresholds from domain. Need avoid fake equations? Not fake; formal constraints. Use units m/s, m/s^2. Need cite source for linear interpolation and empirical velocities. "we infer the missing timing information using linear interpolation" [PAGE 9]. "using empirically derived values for typical dribbling, passing, and shooting velocities" [PAGE 9]. Veto proof: linear interpolation creates piecewise constant velocity? Actually linear position interpolation yields piecewise linear path, with instantaneous velocity discontinuities at segment boundaries; acceleration undefined/infinite at knots; can cause "infeasible plays" [PAGE 9]. Need cite. Weather: indoor NBA, no weather variable in 247-dim features? Paper lists context features score, game clock, shot clock, fouls, on-court time [PAGE 12]; no weather. So weather veto not applicable/direct; but environmental arena conditions could affect tracking? Not modeled. Need state.

Need "RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions." RLVR? Reinforcement learning with verifiable rewards? Need 3 scenarios with predictions. Need grounded in paper and verifiable. Must avoid betting. Scenarios:
1. Replace per-segment timing with per-route linear timing in sketch with pass and catch-and-shoot; predicate: ball arrives before receiver at target? Paper says player 3 would only get correct location by end, ball pass already received and shot taken [PAGE 9]. Veto: generated animation has pass endpoint not coincide with receiver within tolerance. Prediction: feasibility violation; expected points invalid; not scored as successful ghosting.
2. Evaluate context-feature model on half-season data: paper says context features increase error [PAGE 4]. Predicate: test error with context > team-only baseline? Prediction: if training data limited, context model fails to improve; veto if claimed superior. Need exact values: team specific 6.59 ft/player vs context increased error? Paper only says context features increases error, no exact. Veto if context model not beat 6.59? Careful: context addition increases error vs team-specific? It says "Introducing a team specific feature significantly increases accuracy... The addition of contextual features increases the error. We conjecture..." So baseline team specific 6.59; context error >? We can predict context > 6.59 ft/player on N=93 SAS possessions. Verifiable.
3. Season-shift role/template? Train 2012-13 model, test 2016-17; 3pt attempts 20 vs 27; 16-17 ghosts guard corner three more aggressively [PAGE 13]. Counterfactual: if model trained 2012-13 is used to ghost 2016-17 corner three without recalibration, predicted defender distance to corner shooter should be larger/less aggressive than 16-17 ghosts. Veto if no difference or opposite. Verifiable via distance to corner 3. Or ensemble vs single: single model absolute error > ensemble average [PAGE 4/7]. Scenario: evaluate single LSTM vs 10-model ensemble on 25 possessions; veto if single lower error. Prediction ensemble lower absolute error. Need 3. Need "verifiable RLVR veto scenarios + predictions" maybe each has reward predicate and veto. Need include units ft/player.

Need "SOURCE_OPERATORS_AND_EQUATIONS" with formal LaTeX, units, page citations, breakdown. Need include:
- Role index $r\in\{1,...,5\}$, player positions $p_i(t)=(x_i,y_i)\in \mathbb{R}^2$ in ft, ball $b(t)\in\mathbb{R}^3$ maybe. Possession trajectories. Time discretization $\Delta t=0.08$ s (80 ms) from paper [PAGE 3]. We can define.
- Policy LSTM: $h_t^{(r)}=f_\theta^{(r)}(h_{t-1}^{(r)}, x_t^{(r)}; \theta^{(r)})$, $ \hat{p}_{t+1}^{(r)}=\mu_\theta^{(r)}(h_t^{(r)})$, units ft. For joint: inputs include other policies' predictions. Need cite.
- Pre-training loss: $\mathcal{L}_{\text{pre}}^{(r)}(\theta)=\frac{1}{T}\sum_{t=1}^{T}\|\hat{p}_{t+1}^{(r)}-p_{t+1}^{(r)}\|_2^2$ units ft^2. But paper maybe not explicit MSE; "discrepancy ... computed over entire trajectory". We can state formal representation, not necessarily exact. Need mark as formalization. Use "operationalization" to avoid claiming exact.
- Rollout loss: $\mathcal{L}_{\text{roll}}^{(r)}(\theta)=\frac{1}{T}\sum_{t=1}^{T}\|\hat{p}_{t}^{(r)}-p_{t}^{(r)}\|_2$? They report error ft/player. Could use L2 distance. Units ft. Need not fake. This is standard. Cite "discrepancy between predicted and actual location ... computed over entire trajectory" [PAGE 3]. Use $\mathcal{L}_{\text{roll}}^{(r)} = \frac{1}{T}\sum_t \|\hat p_t^{(r)} - p_t^{(r)}\|_2$ (ft). Or MSE. Need maybe expected absolute error. Fine.
- Ensemble average: $\bar{p}_t^{(r)}=\frac{1}{M}\sum_{m=1}^M \hat{p}_{t,m}^{(r)}$, $M=10$, units ft. Dispersion: $D_t^{(r)}=\frac{1}{M}\sum_m \|\hat p_{t,m}^{(r)}-\bar p_t^{(r)}\|_2$ ft; paper says average dispersion approx 0.16 ft/s. Could define growth rate: $\frac{dD}{dt}\approx 0.16\,\mathrm{ft\,s^{-1}}$ [PAGE 7]. Need careful: "average dispersion between models, grows with sequence length (approximately 0.16ft/s)" [PAGE 7]. Good.
- Expected points: $E[\text{points}\mid s,b,d_1,d_2]$; regression $\hat{\mu}(z)=\sum_{k=1}^K \alpha_k \phi_k(z)$ or gradient boosting? They say parsimonious regression model based on few features (shot location, ball state, distances to two nearest defenders). Could define $ \hat{E}(z)=g_\psi(s, b, d_1, d_2)$ with units pts/attempt. Range from heatmap 0.5 to 1.3 pts/attempt [PAGE 8]. Break down if z outside training support or sketch unrealistic; paper says complex models may generate bizarre expectations if sketched play not realistic [PAGE 6]. Need cite.
- Timing inference: routes $R_j=\{(s_{j,k})\}$ segments, positions linear interpolation $p_j(t)= (1-\lambda)p_{j,k}+\lambda p_{j,k+1}$, $\lambda=(t-t_k)/(t_{k+1}-t_k)\in[0,1]$, units ft; velocity $v=\Delta p/\Delta t$ ft/s. Per-segment constraints: ball pass segment end time equals receiver arrival? Need formal feasibility: for pass from player A to B over interval $[t_a,t_b]$, require $\|b(t_b)-p_B(t_b)\|_2 \le \epsilon$ (ft) and ball trajectory endpoints. But paper says per-segment linear timing guarantees feasible e.g. pass always goes from one player to another. Need cite. Break down: per-route linear can violate because pass ends in empty space [PAGE 9]. Need mention singularities: $\Delta t_k=0$ (zero-duration segment) makes velocity undefined/infinite; repeated identical points; role assignment degenerate when centroid template ambiguous; LSTM rollout error compounding; expected points extrapolation. Good.
- Role assignment: Hungarian algorithm $\sigma^*=\arg\min_{\sigma\in S_5}\sum_i C_{i,\sigma(i)}$ with costs from role templates; weighted combo offense/defense via sigmoid centroid. Units? costs in ft^2 maybe. Cite [PAGE 12]. Break down if stretch-4/small ball evolving template [PAGE 12 footnote 7]. Good.
- Feature vector 247 dimensions [PAGE 12]. Could mention normalization? Not necessary.

Need "RETROCAUSAL_GENEALOGY" ~ maybe 300 words. Historical/scientific lineage:
- Bill Walsh 1970s lookup table [PAGE 1], Brad Stevens instinct [PAGE 1], Toronto Raptors 2013 ghosting [PAGE 3], Le et al SSAC 2017 soccer [PAGE 1, PAGE 3], Le et al ICML 2017 coordinated multi-agent imitation [PAGE 11 ref 8], role templates from Lucey et al CVPR 2013 [PAGE 11 ref 13], expected points Morris FiveThirtyEight and POINTWISE [PAGE 11 refs 9,10], sketching notation Hooptactics [PAGE 11 ref 11], Fluid Inking [PAGE 11 ref 12]. Game evolution 3pt 1980, 20 vs 27 attempts, HOU almost 40 [PAGE 13].
- Multi-week traps: 1) source says model trained and validated on data dating back to 2012-13 [PAGE 3 footnote], appendix tests 2012-13 model on 2016-17 [PAGE 13]; season drift can make historical ghost policy stale. 2) context fatigue/fouls added but increases error with half season [PAGE 4]; multi-week data collection needed. 3) ensemble vs single; stochastic SGD. 4) role template evolving due stretch-4/small ball [PAGE 12 footnote]. 5) user sketching interface can edit real tracking; risk of post hoc overfitting/what-if. 6) expected points parsimonious vs complex models bizarre expectations [PAGE 6]. Need "retrocausal" maybe how future tools reshape past data: 2016-17 ghosts compared to 2012-13; current model retroactively reinterprets old possessions; "Monday morning quarterback" [PAGE 2]. Use quote. Need mention "multi-week traps" explicitly.

Need "RECURSIVE_THEORY_OF_MIND" ~ 300 words. Crisis habit regression vs counter-trap vs clock. Need be careful not to overdo. Recursive ToM:
- Level 0: generic league average ghost (baseline). Level 1: team-specific ghost (SAS/GSW/DAL/LAL) reduces error to 6.59 ft/player. Level 2: offensive coach sketches to "bust ghosted defenses" [PAGE 2]. Level 3: defense adapts to known counter; but ghost model is trained on historical behavior, not strategic best response. Under crisis (late clock, fatigue, foul trouble), policy may regress to habit/league-average or training prior; context feature manipulation shows tired SF falls back and center covers, 5-foul center stays low [PAGE 6]. Counter-trap: if opponent learns your ghost tendencies, they can design actions that exploit model's predicted overreaction; but system is not game-theoretic equilibrium. Clock: game clock/shot clock in features [PAGE 12]; expected points time series [PAGE 8]; as clock decreases, action space shrinks and predictions may become more deterministic or more error-prone? Paper says precision decays with time [PAGE 4]. Need distinguish sequence time vs game clock. Crisis habit regression: under high fatigue/fouls, model may lean on learned habit; not necessarily optimal. Counter-trap: user editing existing tracking to see alternate decisions [PAGE 10] can be overused; model's defense is not a counterfactual equilibrium. Need maybe include formal recursive best response equation in this section? It's okay, but equations requested in source operators. We can include one formal expression with no fake ratio. Use $\pi_D^{(k+1)} = \arg\min_{\pi_D} \mathbb{E}_{a\sim\pi_O^{(k)}}[\ell_D(\pi_D,a)]$. Units? loss in ft^2 or points. Fine. Need cite source? It's an abstract formalization, not from paper. Mark as "formal ToM recursion (not claimed by paper)". Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" ~ 300 words. Physical/biomechanical/weather veto proof. Need concrete:
- Physical: court boundaries, ball 3D, player positions 2D; no collision or limb model. Source: "Possessions consist of ten 2D trajectories ... and one 3D trajectory (the ball)" [PAGE 3]. Veto if ghost positions outside court or overlap impossible. But paper doesn't give court dimensions; NBA court 94x50 ft known. Is that external? We can mention standard NBA court but not source. Need maybe avoid exact if not in source. Use $x\in[0,L_x], y\in[0,L_y]$ with known court. Formal. Veto if $\hat p_t\notin \mathcal{C}$. This is a valid physical constraint. Need not cite source for court dimensions. But maybe source uses ft. Fine.
- Biomechanical: linear interpolation "often results in infeasible plays" [PAGE 9]; velocities from empirical values; no max acceleration. Veto if required speed/acceleration exceeds athlete envelope; but source lacks exact thresholds. We can state thresholds must be separately calibrated; proof is that linear timing can create discontinuous velocity at segment boundaries, so a biomechanical veto layer is necessary. Use formula: $a_k = (v_{k+1}-v_k)/\Delta t_k$; if $\Delta t_k\to0$, $a_k\to\infty$ singular. This is formal singularity. Units ft/s^2. Cite [PAGE 9] for linear interpolation and infeasible plays. 
- Weather: NBA indoor; source feature vector lacks weather; context features are score, game clock, shot clock, fouls, cumulative on-court time [PAGE 12]. Therefore weather cannot be a direct veto; only indirect arena/travel not modeled. Need state "weather veto is not supported by source; do not inject." If outdoor? No.
- Cross-layer adjudication: If ghost passes statistical eye test but violates physical constraints, physical veto overrides. If expected points high but pass timing infeasible, veto. If context model error increases, statistical veto against claiming context improvement. Need "proof" maybe use logical argument and source quotes. Need say "Proof sketch: paper's own generation pipeline uses linear interpolation and empirical velocities; it does not solve constrained dynamics; therefore it cannot certify biomechanical feasibility." Cite [PAGE 9]. Good.

Need "RLVR_COUNTERFACTUAL_VETOES" ~ 300 words. 3 scenarios with predictions and veto conditions. Need exact verified from source.
Scenario 1: Timing feasibility veto. Counterfactual: use per-route linear timing instead of per-segment on Fig 6 play. Source predicts player 3 reaches catch-and-shoot only by end, ball pass already received and shot taken [PAGE 9]. Prediction: pass endpoint distance to receiver > tolerance; animation shot before receiver arrival. Veto: reject sketch animation if $\|b(t_{\text{shot}})-p_3(t_{\text{shot}})\|_2 > \epsilon$ or $t_{\text{receive}}<t_{\text{arrive}}$. Reward: feasibility=0. This is verifiable from generated tracking.
Scenario 2: Context feature generalization veto. Counterfactual: add fatigue/fouls features, train on half-season. Source: team-specific error 6.59 ft/player vs context increases error [PAGE 4]. Prediction: context model test error > 6.59 ft/player on SAS N=93 first 2s, or no statistically reliable improvement. Veto: do not claim context improves accuracy if not. Need exact "half a season" quote. Use [PAGE 4]. 
Scenario 3: Ensemble vs single model / season drift. Counterfactual: compare single LSTM vs 10-model ensemble on 25 possessions; source: "ensemble averages have lower absolute error than single models" [PAGE 4], and dispersion grows ~0.16 ft/s [PAGE 7]. Prediction: ensemble absolute error lower. Veto if single lower or ensemble dispersion >? Hmm prediction. Or season drift scenario: train 2012-13, test 2016-17 corner 3; source: 2016-17 ghosts guard corner three more aggressively than 2012-13 [PAGE 13]. Counterfactual: use 2012-13 model to ghost 2016-17 corner 3. Prediction: predicted defender distance to corner shooter larger (less aggressive) than 2016-17 model. Veto if distance not larger. This is more interesting and verifiable. Need perhaps include ensemble as one and season drift as another. We need 3 total. Choose timing, context, season-shift. Or ensemble. Need "RLVR" maybe reward model. Include "verifiable reward predicate" for each. Good.
Could mention no betting.

Need maybe include "Source operators and equations" exact quotes. Let's draft with citations. Need keep word count >1000. We'll produce about 2500 words maybe. Need exact XML tags. Avoid markdown? XML sections with text. We can use LaTeX. Need no betting lines. No "spread" etc. Need avoid "odds". Okay.

Need ensure quotes verbatim. Let's collect exact quotes:
PAGE 1:
- "Having readily available analysis for “heat-of-the-moment” decisions, however, is critical to in-game success."
- Bill Walsh "look-up table" specified which play to run, depending on yardage, time, game-context [1].
- "Due to the continuous and dynamic nature of basketball, having a fixed look-up table of plays is not practical."
- quote: "The perfect [play] is part preparation, part matchup(s), part advance scouting work and a large part of spontaneous creativity. How tough is it to draw up a set/action in a small amount of time? Consider that a coach must anticipate how the defense will match up, how it will play screens and what (or who) it will try and take away. So, it's a rhetorical question, kids. It is very tough."
- "What if a coach didn’t have to rely solely on intuition, but instead could see instantly how the defending team is likely to respond" 
- "neural networks trained via deep imitation learning can model the defensive tendencies of soccer teams." 
- "A key drawback of their approach was that the model lacked sufficient fidelity to make realistic predictions." 
PAGE 2:
- "We explicitly model numerous contextual features and illustrate our ability to make accurate predictions..."
- "Whiteboards are still the de facto method for sketching plays at every level of basketball"
- "Although sketches imply temporal information, no timing data is explicitly defined. As a result, it is impossible to generate ghost responses to a sketched play directly..."
- "we estimate the tracking data that would be recorded if players carried out the sketched play."
- "Coaches can sketch plays and instantly see how the opposition is likely to respond."
- "simulating alternate offensive decisions using real game data and discovering whether these “what if” scenarios can bust the ghosted defenses."
PAGE 3:
- "The concept of “ghosting” was first introduced by the Toronto Raptors in 2013 [7]."
- "At SSAC 2017, Le et al. [5] presented ghosting models learned directly from a season of professional soccer data using deep imitation learning."
- "The data-driven approach has many useful qualities, but it lacks sufficient fidelity to make realistic predictions. The context of the game is not taken into account, and dynamic factors like player fatigue are not considered."
- "we use STATS SportVU player tracking from the 2016-2017 NBA season."
- "In total, the training data consists of 30,764 possessions, with an average duration of 12.64 seconds."
- "The complete architecture consists of five distinct two-layer LSTMs (one for each role). Each two-layer LSTM acts as a role-specific policy: determining where the player fulfilling the specified role should go next."
- "Pre-training consists of predicting where a player will move in the next timestep (80ms) given the true current positions of all players."
- "This procedure (rollout) allows each policy to learn how to plan into the future and how to recover if out of position."
- "Finally, all five policies are trained together."
PAGE 4:
- "This joint training allows the policies to learn cooperative behaviors such as switching on a screen or providing weak-side help."
- "context features such as elapsed time on court (a proxy for fatigue) and fouls conceded were added as additional input features"
- "We manipulate these features (see Fig. 3) to observe their effect on prediction (e.g. artificially making a player tired or being close to fouling out)."
- "Because we determine the parameters of the LSTMs using stochastic gradient descent ... different runs ... slightly different models. Therefore, we run the training procedure 10 times and produce an ensemble of 10 different models"
- "we are trying to predict the behavior of inherently stochastic agents"
- "For simplicity, we compute the prediction error over the first 2s (twice the training rollout time) for all models."
- "Introducing a team specific feature significantly increases the accuracy of the ghosts (error decreases from 8.22ft/player to 6.59ft/player). The addition of contextual features increases the error. We conjecture that the model becomes too complex to optimize with only half a season of training data."
- "Notably, ensemble averages have lower absolute error than single models"
PAGE 6:
- Figure 3 caption: "Small forward ghost (player fatigue clock ~6 minutes) closes out ... (middle) Small forward ghost (player fatigue clock changed to ~48 minutes... falls back and ghost center ... covers ... (right) Ghost center (with 5 fouls) stays low and the tired small forward ghost is slow closing out the shooter."
- Expected points: "simple on-ball model of expected points (EPM), similar to [9]." Features "shot location, ball state, and the distances to the two nearest defenders"
- "More complex models, such as [10], could be substituted, but these may generate bizarre expectations if the sketched play is not realistic."
- Fig 5 description: "Red corresponds to high values of expected points (deep red = 1.3pts/attempt and dark blue = 0.5pts/attempt)." That's PAGE 8 actually. Need page marker.
PAGE 7:
- "The average dispersion between models, grows with the sequence length (approximately 0.16ft/s)" 
- "Ghosts constructed from an ensemble average (red) have lower absolute errors than individual models (blue)."
PAGE 8:
- Fig 5 quote exact. "Red corresponds to high values of expected points (deep red = 1.3pts/attempt and dark blue = 0.5pts/attempt)."
- "While the ghosts do not necessarily occupy the same positions as the true defenders, they play comparable defense."
PAGE 9:
- "Sketches lack explicit temporal information."
- "In order to generate tracking data from a sketch, we infer the missing timing information using linear interpolation."
- "Unfortunately, applying linear timing to each route often results in infeasible plays. A pass, for example, may end in empty space because the intended receiver was animated either too quickly or too slowly."
- "If per-route linear timing were applied to the example sketched play in Figure 6, player 3 would only get to the correct catch-and-shoot location by the end of the play. Meanwhile, the ball would be animated such that the pass would already have been received and the shot taken."
- "Applying linear timing per segment (instead of per route) guarantees a feasible solution—e.g. a pass will always go from one player to another."
- "We estimate the duration of the sketched play by analyzing the route of the ball using empirically derived values for typical dribbling, passing, and shooting velocities."
- "Once the beginning and ending times of each ball segment are determined, the temporal constraints of dribbles are propagated to the player segments..."
PAGE 10:
- "However, the reverse process (extracting routes from trajectories) is straightforward: drop the timing information and re-sample each trajectory using a fixed spatial resolution (e.g. sampling every half foot)."
- "Because sketches can be generated directly from tracking data, a user can edit any offensive play that was run in any game."
PAGE 12:
- Roles: "We learn the template of roles directly from data [13]."
- "For each possession, we infer the role being fulfilled by each player by solving a linear assignment problem using the Hungarian algorithm."
- "Unlike soccer, the template in basketball does not simply translate up and down the court (see Fig. 7). Instead, the role templates are inversions of each other, depending on whether the team is setup for offense or defense."
- "In practice, we use a weighted combination of defense/offense templates where the proportional influence of each model is governed by a sigmoid distribution based on the centroid of the player positions."
- Features: "we handcraft features that contain both the global cartesian coordinates (x, y) and relative polar coordinates (r, cosθ, sinθ)."
- "In addition to a “one hot” encoding of team identity, we compute additional context features that describe the state of the game (score, game clock, shot clock) and player-specific attributes (fouls committed, cumulative “on court” time)."
- "The resulting feature vector is 247 dimensions"
- footnote: "it is clear that this template is evolving as NBA teams increasingly utilize stretch-4s and small ball lineups."
PAGE 13:
- "Since the introduction of the the 3 point shot in 1980, the game of basketball has changed."
- "On average, the 2012-13 NBA season had 20 three point field goals attempted, while the 2016-17 NBA season had 27 three pointers attempted [14], with the Houston Rockets attempting almost 40 three pointers per game [14] in the 2016-17 NBA season."
- "Using data from 2012-13 season, we generated a model to predict defensive behavior and ran it on a test set from the 2016-17 season."
- "Fig. 8 clearly shows the ghosts from the 16-17 season model guard the corner three much more aggressively."
Need "PAGE 13" marker.

Need maybe mention "N=93" SAS test possessions. Good.

Need exact markers [PAGE N] not [PAGE N of 13]? User says cite exact [PAGE N] markers. We'll use [PAGE 1], [PAGE 2], etc.

Need no "betting lines". Avoid "line" as betting; can mention "look-up table" okay. "line" in quote? It's fine. But no spreads/totals/moneylines/odds. We can mention "no betting lines are used" maybe not necessary? The invariant says never mention spreads, totals, moneylines, or odds. We can avoid those words entirely. Don't mention "odds". Good.

Need answer with exact sections. Let's draft carefully.

Need maybe include title? Could start directly with <THINK_TRACE>. No extra text? It's okay.

Need ensure sections exact and not missing. User says exact XML sections. We'll include exactly six tags. The tags names include "RLVR_COUNTERFACTUAL_VETOES" not "VETOES>"? User wrote `<RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.` missing closing? We'll close properly. Need no extra XML? Fine.

Need word count. Let's write robust.

Potential issue: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." We must not use fake ratios. Equations we use are formal from ML/physics. Avoid invented ratios like Force/Fatigue. Fine.

Need "State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." In source operators, include units in prose: ft, s, ft/s, ft/s^2, points/attempt, nat? Information units? Maybe mention entropy? Could include cross-entropy for ball state classifier? Paper says vanilla gradient boosting classifier trained on ~2000 frames for ball state [PAGE 6]. Could formalize classifier loss with cross-entropy in nats? It uses gradient boosting not explicit. We can include if needed. "information/probability units" not necessarily all equations. We can mention probability units dimensionless, cross-entropy nats if natural log. But maybe no need. To satisfy, include $\mathcal{L}_{CE}=-\sum_c y_c \ln \hat q_c$ with units nats (if natural log) or bits if log2. But paper says classifier; not core. Could include as optional. Need not overdo. But "information/probability units" maybe want units stated. We'll state probabilities dimensionless; expected points points/attempt. Good.

Need "assumptions" in source section. List:
A1 possession segmentation filters jump balls/free throws/delays [PAGE 3].
A2 role identity via Hungarian templates [PAGE 12].
A3 Markov/RNN sufficiency: next move depends on history encoded in LSTM and current features; no explicit strategic equilibrium.
A4 linear interpolation timing per segment; empirical velocities.
A5 expected points regression local validity; complex models may generate bizarre expectations [PAGE 6].
A6 stochastic policies: ensemble of 10.
A7 training/test temporal drift.

Need "singularity/breakdown regimes":
- $\Delta t_k=0$ timing singular.
- Per-route linear timing infeasible pass endpoints.
- LSTM rollout divergence/error growth; precision decays with time [PAGE 4].
- Context feature overparameterization with half-season [PAGE 4].
- Role assignment inversion ambiguity and small-ball evolution [PAGE 12].
- Expected points extrapolation outside training support [PAGE 6].
- Ensemble dispersion growth 0.16 ft/s [PAGE 7].
- Data shift 2012-13 vs 2016-17 [PAGE 13].
Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. We can make a table? XML text can include list. Need no markdown table? Fine.

Need "RLVR counterfactual vetoes" 3 scenarios. Let's write with "Scenario 1", "Verifiable reward predicate", "Prediction", "Veto". Ensure no betting.

Need maybe mention "RLVR" means reinforcement learning with verifiable rewards; but not necessary. Use "verifier check". Avoid "reward" maybe okay. We can say "reward signal". Not betting.

Need ensure "multi-hop derivation & gray-zone audit (>=400 words)" in THINK_TRACE. We'll write ~500-600 words. Need "gray-zone audit" explicitly. Multi-hop: source -> model -> timing -> expected points -> UI -> evaluation -> failure. Need no equations? Could include some. Good.

Let's draft in final. Need maintain desired oververbosity 5 but requirements high. We'll produce maybe 3000 words. Ensure no forbidden terms. Let's compose.

Need check quotes exact: "the model lacked sufficient fidelity to make realistic predictions" [PAGE 1]. "The context of the game is not taken into account, and dynamic factors like player fatigue are not considered." [PAGE 3]. Good.

Need mention "Bhostgusters" title. Good.

Need exact "PAGE 12" for 247 dims. Good.

Need "PAGE 11" references? We can cite [PAGE 11] for refs. Good.

Need "PAGE 3 footnote" says "The model has been trained and validated on data dating back to the 2012-13 season. See appendix for additional results." We can cite [PAGE 3]. Good.

Need "PAGE 10" summary. Good.

Need "PAGE 8" expected points heatmap. Good.

Potential issue: source text page 12 says "weighted combination of defense/offense templates where proportional influence ... sigmoid distribution based on centroid." We can formalize role cost. Need not exact. We'll include.

Need answer.
</NATIVE_REASONING>

<THINK_TRACE>
The source is not a betting document and contains no market-derived quantities; it is a human–computer interaction plus imitation-learning paper. The multi-hop reconstruction is: (1) the paper begins from the coaching problem of “heat-of-the-moment” play design, contrasting Bill Walsh’s fixed “look-up table” with basketball’s continuous dynamics [PAGE 1]; (2) it adapts data-driven ghosting from soccer, where Le et al. used deep imitation learning to hallucinate defensive tracking [PAGE 1] and [PAGE 3]; (3) it represents each possession as ten 2D player trajectories plus one 3D ball trajectory, with game-clock, shot-clock, fouls, and cumulative on-court time metadata [PAGE 3]; (4) it instantiates five two-layer LSTM role policies, trained by pre-training, single-policy rollout, and joint-policy rollout [PAGE 3]; (5) it adds context features, including elapsed on-court time as a fatigue proxy and fouls [PAGE 4]; (6) it evaluates coordinate prediction error and precision, finding that team-specific ghosts reduce error from “8.22ft/player to 6.59ft/player” while contextual features increase error under half-season training [PAGE 4]; (7) it wraps the ghost in a sketching interface that converts routes into tracking via linear interpolation, then per-segment timing constraints [PAGE 9]; and (8) it scores the resulting hallucinated tracking with a parsimonious on-ball expected-points model based on shot location, ball state, and distances to the two nearest defenders [PAGE 6]. The gray-zone audit is where the source’s own language matters. The paper admits the prior soccer ghost “lacked sufficient fidelity to make realistic predictions” [PAGE 1], and that game context and fatigue were missing [PAGE 3]. Its fix is not a full biomechanical simulator; it is a learned policy plus handcrafted context features. Therefore a ghost can pass an “eye test” while still violating timing, reach, collision, or acceleration constraints. The sketch-to-tracking step is especially exposed: “Although sketches imply temporal information, no timing data is explicitly defined” [PAGE 2], so the system estimates tracking under the sketch. Linear interpolation per route “often results in infeasible plays” [PAGE 9]; per-segment interpolation “guarantees a feasible solution—e.g. a pass will always go from one player to another” [PAGE 9], but this guarantee is about ball–receiver rendezvous, not about biomechanical plausibility. The expected-points layer is deliberately parsimonious because more complex models “may generate bizarre expectations if the sketched play is not realistic” [PAGE 6]. Thus the audit must separate statistical realism, temporal feasibility, physical feasibility, and strategic validity. The paper’s own ensemble result is also a gray zone: stochastic gradient descent produces “slightly different models,” so they train 10 models and ensemble them [PAGE 4]; ensemble averages have lower absolute error than single models [PAGE 4], and dispersion grows at “approximately 0.16ft/s” [PAGE 7]. That growth is a measurable uncertainty signal, not a guarantee of calibrated strategic uncertainty. Finally, the appendix’s season-shift experiment is a retrocausal warning: a 2012-13 model tested on 2016-17 data shows that 2016-17 ghosts “guard the corner three much more aggressively” [PAGE 13]. The model is therefore historically situated; old data can retroactively misdescribe current defensive habits. These are the multi-hop failure paths I adjudicate below.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Notation and assumptions. Let a possession be indexed by \(p\). A player trajectory is \( \mathbf{p}_{i}(t)\in\mathbb{R}^{2}\) in feet, and the ball is \( \mathbf{b}(t)\in\mathbb{R}^{3}\) in feet, with time \(t\) in seconds [PAGE 3]. The source states: “Possessions consist of ten 2D trajectories (one for each player) and one 3D trajectory (the ball)” [PAGE 3]. The model uses \( \Delta t=0.08\,\mathrm{s} \) because pre-training predicts “the next timestep (80ms)” [PAGE 3]. Role policies are indexed by \(r\in\{1,\dots,5\}\), since “The complete architecture consists of five distinct two-layer LSTMs (one for each role)” [PAGE 3].

Role-policy operator. For role \(r\), an LSTM hidden state \( \mathbf{h}_{t}^{(r)} \) and input feature vector \( \mathbf{x}_{t}^{(r)}\in\mathbb{R}^{247} \) produce the next-position estimate:
\[
\mathbf{h}_{t}^{(r)}=f_{\theta^{(r)}}\!\left(\mathbf{h}_{t-1}^{(r)},\mathbf{x}_{t}^{(r)}\right),\qquad
\hat{\mathbf{p}}_{t+1}^{(r)}=\mu_{\theta^{(r)}}\!\left(\mathbf{h}_{t}^{(r)}\right),
\]
with \( \hat{\mathbf{p}}_{t+1}^{(r)} \) in feet. The 247-dimensional feature vector is stated in the appendix: “The resulting feature vector is 247 dimensions” [PAGE 12]. Inputs include “global cartesian coordinates (x, y) and relative polar coordinates (r, cosθ, sinθ),” plus “score, game clock, shot clock” and “fouls committed, cumulative ‘on court’ time” [PAGE 12]. The unit of the Cartesian coordinates is feet; clocks are seconds or game-clock units; fouls are counts; probabilities are dimensionless.

Pre-training loss. A formal mean-squared displacement loss for the one-step prediction is
\[
\mathcal{L}_{\mathrm{pre}}^{(r)}(\theta)
=\frac{1}{T}\sum_{t=1}^{T}
\left\|\hat{\mathbf{p}}_{t+1}^{(r)}-\mathbf{p}_{t+1}^{(r)}\right\|_{2}^{2},
\]
with units \(\mathrm{ft}^{2}\). This formalizes the paper’s statement that pre-training “consists of predicting where a player will move in the next timestep (80ms) given the true current positions of all players” [PAGE 3]. It is a representation of the learning objective, not a claim that the authors published this exact loss formula.

Rollout loss. For a rollout of length \(T\), a displacement error in feet is
\[
\mathcal{L}_{\mathrm{roll}}^{(r)}(\theta)
=\frac{1}{T}\sum_{t=1}^{T}
\left\|\hat{\mathbf{p}}_{t}^{(r)}-\mathbf{p}_{t}^{(r)}\right\|_{2},
\]
in \(\mathrm{ft}/\mathrm{player}\) when averaged across players. The paper says “The discrepancy between the predicted and actual location of the specified role are computed over the entire trajectory and used to update the weights” [PAGE 3]. Evaluation uses “the first 2s (twice the training rollout time)” [PAGE 4]. The reported team-specific improvement is from “8.22ft/player to 6.59ft/player” [PAGE 4].

Joint-policy operator. In joint training, each policy conditions on the other four policies’ predictions rather than true defender positions: “each model uses the predictions of the other four models, rather than the true defender positions” [PAGE 4]. Formally, for role \(r\),
\[
\hat{\mathbf{p}}_{t+1}^{(r)}
=\mu_{\theta^{(r)}}\!\left(
\mathbf{h}_{t}^{(r)},
\{\hat{\mathbf{p}}_{t}^{(s)}\}_{s\neq r}
\right),
\]
with all positions in feet. The purpose is cooperative behavior: “switching on a screen or providing weak-side help” [PAGE 4]. Breakdown regime: joint rollout can compound errors because all five policies feed on each other’s hallucinations; the paper notes precision decays with time because “we are trying to predict the behavior of inherently stochastic agents” [PAGE 4].

Ensemble operator. With \(M=10\) independently trained models, the ensemble position is
\[
\bar{\mathbf{p}}_{t}^{(r)}
=\frac{1}{M}\sum_{m=1}^{M}\hat{\mathbf{p}}_{t,m}^{(r)}
\quad [\mathrm{ft}].
\]
The paper states: “we run the training procedure 10 times and produce an ensemble of 10 different models” [PAGE 4]. The dispersion across models can be written
\[
D_{t}^{(r)}
=\frac{1}{M}\sum_{m=1}^{M}
\left\|\hat{\mathbf{p}}_{t,m}^{(r)}-\bar{\mathbf{p}}_{t}^{(r)}\right\|_{2}
\quad [\mathrm{ft}],
\]
and the reported growth rate is “approximately 0.16ft/s” [PAGE 7]. Breakdown regime: \(D_t\) grows with sequence length, and “Ghosts constructed from an ensemble average (red) have lower absolute errors than individual models (blue)” [PAGE 7]. The ensemble reduces variance but does not eliminate model bias.

Expected-points operator. The paper uses “a simple on-ball model of expected points (EPM), similar to [9]” with features “shot location, ball state, and the distances to the two nearest defenders” [PAGE 6]. A formal regression representation is
\[
\widehat{\mathrm{EP}}
=g_{\psi}\!\left(\mathbf{s},\,b,\,d_{1},\,d_{2}\right)
\quad [\mathrm{points}/\mathrm{attempt}],
\]
where \(\mathbf{s}\) is shot location in feet, \(b\) is ball state (a categorical state), and \(d_1,d_2\) are distances in feet to the two nearest defenders. The heatmap range is stated as “deep red = 1.3pts/attempt and dark blue = 0.5pts/attempt” [PAGE 8]. The paper explicitly warns that more complex models “may generate bizarre expectations if the sketched play is not realistic” [PAGE 6]. Breakdown regime: expected points is a local interpolation/regression over realistic tracking states; outside the training support or after infeasible sketch timing, the scalar \(\widehat{\mathrm{EP}}\) is not a valid adjudication of play quality.

Sketch timing operator. A route is an ordered set of segments; the paper states that “Each route is defined as an ordered set of segments” [PAGE 8]. For a segment with endpoints \(\mathbf{q}_{k},\mathbf{q}_{k+1}\) in feet and times \(t_k<t_{k+1}\), linear interpolation is
\[
\mathbf{p}(t)=(1-\lambda)\mathbf{q}_{k}+\lambda\mathbf{q}_{k+1},
\qquad
\lambda=\frac{t-t_k}{t_{k+1}-t_k}\in[0,1],
\]
with position in feet and velocity
\[
\mathbf{v}_{k}=\frac{\mathbf{q}_{k+1}-\mathbf{q}_{k}}{t_{k+1}-t_k}
\quad [\mathrm{ft}/\mathrm{s}].
\]
The paper says “we infer the missing timing information using linear interpolation” [PAGE 9]. Exact singularity: if \(t_{k+1}-t_k\to 0\), then \(\|\mathbf{v}_{k}\|\to\infty\) and the segment’s acceleration at the knot is undefined; a practical verifier must reject or regularize zero-duration or near-zero-duration segments. The paper’s per-segment constraint is not a full dynamics solver: “Applying linear timing per segment (instead of per route) guarantees a feasible solution—e.g. a pass will always go from one player to another” [PAGE 9]. That guarantee is a rendezvous/constraint-propagation guarantee, not a biomechanical guarantee. The ball timing uses “empirically derived values for typical dribbling, passing, and shooting velocities” [PAGE 9].

Role-assignment operator. Roles are inferred by linear assignment: “we infer the role being fulfilled by each player by solving a linear assignment problem using the Hungarian algorithm” [PAGE 12]. Formally,
\[
\sigma^{*}=\arg\min_{\sigma\in S_{5}}
\sum_{i=1}^{5}C_{i,\sigma(i)},
\]
where \(C_{i,r}\) is a role-template cost, typically in \(\mathrm{ft}^{2}\) if squared distance is used. The paper notes basketball templates are inverted between offense and defense and are combined with “a weighted combination of defense/offense templates where the proportional influence of each model is governed by a sigmoid distribution based on the centroid of the player positions” [PAGE 12]. Breakdown regime: the template is evolving: “this template is evolving as NBA teams increasingly utilize stretch-4s and small ball lineups” [PAGE 12]. Ambiguous or inverted role assignments can therefore produce plausible-looking but mislabeled ghost policies.

Core assumptions. A1: possession segmentation excludes jump balls, free throws, and delays [PAGE 3]. A2: role identity, not player identity, is the modeling unit [PAGE 12]. A3: LSTM history plus 247-dimensional context is sufficient for next-move prediction; no explicit game-theoretic equilibrium is assumed. A4: sketch timing is recoverable by per-segment linear interpolation plus empirical ball velocities [PAGE 9]. A5: expected points is locally valid for realistic tracking states and can be parsimonious enough to generalize to novel sketches [PAGE 6]. A6: stochastic training is handled by a 10-model ensemble [PAGE 4]. A7: historical data may not transfer unchanged across seasons; the paper explicitly tests a 2012-13 model on 2016-17 data [PAGE 13].

Breakdown/singularity summary. (i) Zero-duration segment: velocity singular. (ii) Per-route rather than per-segment timing: pass can end in empty space, and the paper gives the exact failure: “player 3 would only get to the correct catch-and-shoot location by the end of the play. Meanwhile, the ball would be animated such that the pass would already have been received and the shot taken” [PAGE 9]. (iii) Long rollout: precision decays and dispersion grows [PAGE 4], [PAGE 7]. (iv) Context overparameterization: adding context “increases the error” with only half a season of data [PAGE 4]. (v) Season drift: 2016-17 ghosts guard the corner three more aggressively than 2012-13 ghosts [PAGE 13]. (vi) Expected-points extrapolation: complex models can generate “bizarre expectations” on unrealistic sketches [PAGE 6].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage is explicit. The paper opens with Bill Walsh’s 1970s “look-up table” for play selection by yardage, time, and game context [PAGE 1], then argues that basketball’s continuous dynamics make a fixed table impractical [PAGE 1]. It cites Brad Stevens as an example of instinctive variation [PAGE 1] and quotes the coaching problem: “The perfect [play] is part preparation, part matchup(s), part advance scouting work and a large part of spontaneous creativity” [PAGE 1]. The scientific line runs from the Toronto Raptors’ 2013 rule-based ghosting [PAGE 3] to Le et al.’s SSAC 2017 soccer ghosting by deep imitation learning [PAGE 1], [PAGE 3], then to Le et al.’s coordinated multi-agent imitation learning at ICML 2017 [PAGE 11]. Role templates come from Lucey et al.’s adversarial team-behavior work [PAGE 11], and the expected-points layer is positioned relative to Morris’s FiveThirtyEight work and Cervone et al.’s POINTWISE model [PAGE 11]. The sketching notation descends from Hooptactics play-diagram conventions and Fluid Inking gesture work [PAGE 11]. The appendix adds a game-evolution lineage: since the 1980 introduction of the three-point shot, attempts rose from “20 three point field goals attempted” in 2012-13 to “27 three pointers attempted” in 2016-17, with Houston “attempting almost 40 three pointers per game” [PAGE 13]. That is why a 2012-13 ghost model tested on 2016-17 data is shown to guard the corner three less aggressively than a 2016-17 ghost [PAGE 13]. Retrocausally, the newer model reinterprets old possessions: the same historical sketch or tracking sequence is assigned a different defensive meaning under a newer policy.

Multi-week traps. First, season-drift trap: the paper itself trains and validates on data “dating back to the 2012-13 season” [PAGE 3] but demonstrates that 2016-17 behavior differs in corner-three closeouts [PAGE 13]. A multi-week data collection that spans rule emphasis, shot-distribution change, or roster turnover can silently change the target policy. Second, context-feature trap: adding fatigue and fouls is intuitive, but the paper reports that “The addition of contextual features increases the error” and conjectures the model is “too complex to optimize with only half a season of training data” [PAGE 4]. More weeks of data may be necessary before context features generalize. Third, ensemble-vs-single trap: stochastic gradient descent creates model variation, so a single run can look better or worse by chance; the paper uses 10 runs and finds ensemble averages have lower absolute error [PAGE 4], [PAGE 7]. Fourth, role-template trap: small-ball and stretch-4 usage are explicitly said to evolve the template [PAGE 12]; a role model learned weeks ago may misassign roles in newer lineups. Fifth, sketch-editing trap: because “a user can edit any offensive play that was run in any game” [PAGE 10], the system invites post hoc “what if” exploration; that is powerful, but it can encourage overfitting to hypothetical edits rather than validated live behavior. Sixth, expected-points trap: the paper deliberately keeps the on-ball model parsimonious because complex models “may generate bizarre expectations if the sketched play is not realistic” [PAGE 6]. A multi-week evaluation that chases a richer expected-points model without checking sketch realism can produce confident but invalid scores.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The system is a recursive opponent-modeling device, but it is not a game-theoretic equilibrium solver. Level 0 is the “generic league average team” ghost; level 1 is a team-specific ghost; level 2 is the coach who sketches a play to “bust the ghosted defenses” [PAGE 2]; level 3 would be a defense that anticipates the coach’s counter-ghost behavior. The paper supports levels 0–2 directly: it compares “generic league average team, San Antonio, and San Antonio with player-context” [PAGE 4], and it says coaches can “instantly see how the opposition is likely to respond” [PAGE 2]. A formal best-response recursion for this ToM stack can be written as
\[
\pi_{D}^{(k+1)}
=\arg\min_{\pi_{D}}
\mathbb{E}_{\mathbf{a}\sim\pi_{O}^{(k)}}
\left[
\ell_{D}\!\left(\pi_{D},\mathbf{a}\right)
\right],
\]
where \(\ell_D\) may be expected points in points/attempt or squared positional error in \(\mathrm{ft}^{2}\). This is a formal representation of recursive best-response reasoning; the paper itself trains imitation policies, not this equilibrium recursion.

Crisis habit regression. Under fatigue or foul trouble, the policy can regress toward learned habits rather than produce a novel optimal response. The paper’s Figure 3 manipulation is the clearest evidence: with a small-forward fatigue clock at “~6 minutes,” the ghost closes out the shooter; with the clock changed to “~48 minutes, i.e full length of the game,” the small forward “falls back and the ghost center ... covers for him”; with the center at “5 fouls,” the center “stays low and the tired small forward ghost is slow closing out the shooter” [PAGE 6]. That is not a proof of choking; it is evidence that fatigue and foul context alter the policy’s habitual assignment. In a crisis, the model may default to a league-average or team-average pattern because the context-conditioned policy is under-trained; the paper’s own context-feature error increase is consistent with that risk [PAGE 4].

Counter-trap. The offensive user can edit a pass or route to exploit the ghost’s learned tendencies [PAGE 10]. But the ghost is trained on historical defensive behavior, not on the user’s counter-strategy. If a coaching staff repeatedly uses the tool to design the same counter, the opposing defense could in principle adapt, and the historical ghost would lag. The paper’s “what if” language is therefore best treated as counterfactual diagnosis, not as a hidden equilibrium: the tool asks “whether these ‘what if’ scenarios can bust the ghosted defenses” [PAGE 2], not whether the defense will adapt to being modeled.

Clock. The feature vector includes “game clock, shot clock” [PAGE 12], so time pressure is an explicit input. But there are two clocks: the game clock and the shot clock, plus the sequence time over which the LSTM rolls out. The paper reports that “predicted precision decays with time” [PAGE 4] because agents are stochastic. That is sequence-time decay, not necessarily game-clock panic. The expected-points time series in Figure 5b shows how the value changes over a possession [PAGE 8], but the paper does not establish a universal late-clock “habit regression” law. The safe adjudication is: clock variables are legitimate context features; crisis regression is a hypothesis supported by the fatigue/foul manipulation [PAGE 6], not a proven universal mechanism.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical veto. The source’s state is ten 2D player positions and one 3D ball position [PAGE 3]. A physical verifier should reject any ghost or sketch-generated trajectory that leaves the court region \(\mathcal{C}\subset\mathbb{R}^{2}\), intersects an impossible obstacle, or places the ball outside the court/hoop volume. Formally, for every generated player position \(\hat{\mathbf{p}}_{t}^{(r)}\),
\[
\hat{\mathbf{p}}_{t}^{(r)}\in\mathcal{C}
\quad\text{and}\quad
\mathbf{b}(t)\in\mathcal{B},
\]
where \(\mathcal{C}\) is the court polygon in \(\mathrm{ft}^{2}\) and \(\mathcal{B}\) is the allowed ball volume in \(\mathrm{ft}^{3}\). This is a necessary condition, not a sufficient one. The paper does not claim to solve collision avoidance; it models role policies and hallucinated tracking, so physical plausibility must be adjudicated outside the LSTM.

Biomechanical veto. The paper’s timing pipeline uses linear interpolation [PAGE 9], and linear position interpolation gives piecewise-constant velocity with instantaneous changes at segment knots. For a knot between velocities \(\mathbf{v}_{k-1}\) and \(\mathbf{v}_{k}\) over duration \(\Delta t_k\),
\[
\mathbf{a}_{k}
=\frac{\mathbf{v}_{k}-\mathbf{v}_{k-1}}{\Delta t_k}
\quad [\mathrm{ft}/\mathrm{s}^{2}].
\]
If \(\Delta t_k\to 0\), then \(\|\mathbf{a}_{k}\|\to\infty\): an exact singularity. Even when \(\Delta t_k>0\), the required acceleration may exceed a human biomechanical envelope. The paper itself admits that per-route linear timing “often results in infeasible plays” and that a pass “may end in empty space because the intended receiver was animated either too quickly or too slowly” [PAGE 9]. Per-segment timing “guarantees a feasible solution—e.g. a pass will always go from one player to another” [PAGE 9], but that is a ball–receiver rendezvous guarantee, not a guarantee that the player’s required speed, acceleration, deceleration, jump, or limb reach is humanly possible. A biomechanical veto should therefore reject sketches whose segment velocities or knot accelerations exceed calibrated athlete envelopes, even if the ball arrives at the right player at the right time.

Weather veto. The source is an indoor NBA tracking paper. Its context features are “score, game clock, shot clock” and “fouls committed, cumulative ‘on court’ time” [PAGE 12]; no weather variable is modeled. Therefore a direct weather veto is not supported by the source. If an external environment layer is added, it must be treated as an out-of-model covariate, not as something the paper’s ghost or expected-points model already accounts for. The correct adjudication is: weather cannot override a ghost prediction on the basis of this paper alone; the paper provides no weather coefficients, no outdoor venue assumption, and no environmental sensor input.

Cross-layer proof obligation. The source’s own expected-points model is “simple on-ball” and uses shot location, ball state, and distances to two nearest defenders [PAGE 6]. It is deliberately robust to novel sketches, but the authors warn that complex models “may generate bizarre expectations if the sketched play is not realistic” [PAGE 6]. Thus the veto order should be: (1) temporal feasibility, because per-route interpolation can produce a pass to empty space [PAGE 9]; (2) physical court/ball feasibility; (3) biomechanical speed/acceleration feasibility; (4) statistical validity of the ghost against held-out error and ensemble dispersion [PAGE 4], [PAGE 7]; (5) expected-points validity only if the sketch remains inside the realistic support described in [PAGE 6]. If a ghost passes the eye test but fails layers 1–3, the physical/biomechanical veto must dominate. That is the proof: the source generates timing by interpolation and empirical velocities, not by constrained dynamics, so it cannot certify biomechanical feasibility by construction.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: per-route linear timing counterfactual. Counterfactual: replace the paper’s per-segment timing with per-route linear timing on the Figure 6 sketch. The source predicts the exact failure: “player 3 would only get to the correct catch-and-shoot location by the end of the play. Meanwhile, the ball would be animated such that the pass would already have been received and the shot taken” [PAGE 9]. Verifiable reward predicate: compute the pass reception time \(t_{\text{rec}}\) and the receiver arrival time \(t_{\text{arr}}\); compute the shot-time ball–receiver distance \(\|\mathbf{b}(t_{\text{shot}})-\mathbf{p}_{3}(t_{\text{shot}})\|_2\). Prediction: per-route timing yields \(t_{\text{rec}}<t_{\text{arr}}\) and/or a nonzero shot-time distance, while per-segment timing yields a valid rendezvous within tolerance. Veto: reject the animation if \(t_{\text{rec}}<t_{\text{arr}}\) or if the pass endpoint distance exceeds a small \(\epsilon\) in feet. This is verifiable directly from the generated tracking.

Scenario 2: context-feature generalization counterfactual. Counterfactual: add fatigue/foul context features and claim improved ghost accuracy on the San Antonio test set. The source reports team-specific error of “6.59ft/player” after team-specific training, then says “The addition of contextual features increases the error” and conjectures overcomplexity with “only half a season of training data” [PAGE 4]. Verifiable reward predicate: evaluate the context model on the same \(N=93\) San Antonio defensive possessions over the first 2 s, in ft/player [PAGE 4]. Prediction: the context model’s mean displacement error is greater than 6.59 ft/player, or at minimum does not show a reliable improvement over the team-specific baseline. Veto: do not certify “context improves accuracy” if the measured held-out error is not lower than the team-specific baseline. This is a direct empirical veto, not a qualitative preference.

Scenario 3: season-drift corner-three counterfactual. Counterfactual: use a 2012-13-trained ghost model on 2016-17 corner-three possessions and compare it with the 2016-17 model. The source states that three-point attempts rose from 20 to 27 and that “Fig. 8 clearly shows the ghosts from the 16-17 season model guard the corner three much more aggressively” [PAGE 13]. Verifiable reward predicate: measure the ghost defender’s distance to the corner shooter at the shot-release frame, in feet, for matched 2016-17 possessions under both models. Prediction: the 2012-13 model produces a larger defender–shooter distance, i.e. less aggressive corner closeout, than the 2016-17 model. Veto: reject a claim of season-invariant defensive behavior if the 2012-13 ghost is not measurably farther from the corner shooter, or if the direction reverses. This is verifiable from generated tracking and is grounded in the paper’s own historical comparison [PAGE 13].
</RLVR_COUNTERFACTUAL_VETOES>