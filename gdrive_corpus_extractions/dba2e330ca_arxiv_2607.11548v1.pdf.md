---
source: "arxiv_2607.11548v1.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 10
model: deepseek/deepseek-v4.1-flash-1017
words: 8918
---

<NATIVE_REASONING>
We need answer user asks likely wants analysis of source under GSE GSI frontier. Need produce exact XML sections, >=1000 words. Need no betting lines. Need use source citations [PAGE N] quotes verbatim. Need formal LaTeX equations, units, assumptions, singularity breakdown regimes. Need retrocausal genealogy, recursive theory of mind crisis habit regression vs counter-trap vs clock, cross-layer veto adjudication physical/biomechanical/weather veto proof, RLVR counterfactual vetoes 3 verifiable scenarios + predictions. Must be research analysis not betting. Need interpret paper. Need maybe derive equations from source and audit gray zones. Need cite pages and verbatim quotes. Need discuss imputation, metrics, biases, causal online, long occlusion. Need avoid invented fake ratios. We can use equations from source exact. State formal operators and equations. Units SI, probability, information. Need assumptions and singularity/breakdown regimes.

Need think deeply. Let's plan sections.

THINK_TRACE >400 words. Need multi-hop derivation and gray-zone audit. We can reason: Source is paper about training-free off-screen player imputation for broadcast spatial football analytics. Key quantities: hidden zone pitch-control MAE pp, control-share error pp, median position error m, viewport width W m, visible count, occlusion gap s. We should audit issue: "pitch control" computed on 3m grid arrival-time model with sigmoid contest, zero velocities. We can derive why visible-only baseline distorts: hidden players absent from control map, so control in hidden zone assigned to visible team (since no opponents), team share error. B4 role-anchored centroid voting: each visible player votes for full-team centroid by subtracting role offset; offsets EMA against voted centroid. Need equation: \hat c(t)=1/|V_t| sum (p_i(t)-off_i(t^-)), off_i(t) <- EMA[p_i(t)-\hat c(t)], hidden j imputed \hat c(t)+off_j. Need discuss B4 reduces subset bias if offsets stable and voters representative, exact cancellation requires stable offsets and conditionally representative voters [PAGE 5]. Need quantify improvements: B0 hidden control MAE 25.1-26.9 pp, share error 11.1-13.4 pp; B4 hidden 12.2-13.8 pp, share 4.5-4.7 at W=44; 28-48% of B0 across W 36-60; median position B4 9.7-11.6m. Need note game 3 held-out. Need note B2/B3V edge B4 share error by 0.3pp in game3, CI [-0.4,+1.3] includes zero. Need note B5 fixed template bad. Need note B3E mismatch. Need note short occlusion ≤9.6s B4 median 3.3-8.9m; >9.6s 15.6-16.9m; 50-57% hidden samples >9.6s. Need note downstream SCI changes +15.6→+32.8 and -10.9→+4.7 flipping class; no ground truth. Need note limitations: simulated viewport pans no zoom/tilt; three matches single provider; no velocity; identity fragmentation; OCR coverage ~45%; ghosts top up to 11; hyperparameters round values; no GPU. Need cite.

Need formal equations. Source gives:
- EMA ball pan: α=0.06 per frame at 25 fps. Could state b_t = (1-α) b_{t-1}+α b_t^{obs}? Source only says exponentially smoothed ball position α=0.06 per frame. We can state as standard EMA with α, but be careful "formal LaTeX equations, units, assumptions" not fake ratios. We can label as interpretation. Need not invent equations? We can use source equations and formalize definitions. It's okay to define metrics with LaTeX. Need state units. We can define:
Let P be pitch set, grid cells g on 3 m grid. For frame t, control map C_t^A(g) ∈ [0,1] maybe control probability (dimensionless). MAE_hidden = (1/|G_h(t)|) sum |C_t^A(g)-C_t^{A,GT}(g)| maybe average over frames. But source doesn't give exact formula. Could state "operationalized as" and label. Need not be exact? But requirement says formal LaTeX equations. We can use source equations exactly plus metric definitions as standard. Need cite page for metrics. We should include exact quotes. Need cite [PAGE 3] for pitch control on 3m grid, [PAGE 4] for B4 equation, [PAGE 7] for occlusion table. Quotes verbatim. Need cite exact page markers.

Need "breakdown/singularity regimes": For B4, singularity when |V_t|<3? Source: recursion seeded from visible mean until three offset-bearing players available; when fewer than three voters, falls back B2 then B1. So |V_t| or offset-bearing players <3 triggers fallback, not mathematical singularity. Also exact cancellation fails if offsets not stable or voters not conditionally representative. Breakdown regimes: initial cold-start never-observed players absent from control maps; long occlusion >9.6s error 15.6-16.9m; extreme viewport W=36m error higher (B4 share 5.5-6.6 vs W=60 2.4-2.8), visible 13.0-13.1; B5 fixed template negative result; B3E reference mismatch; real GSR identity fragmentation; zoom/tilt not simulated; velocity-free control. Singularities: if visible set empty |V_t|=0 then centroid undefined; if offsets uninitialized for hidden j then B1 fallback; if all players hidden no votes. Also if team centroid not identifiable due to team assignment errors. Need state.

Need "information units" maybe discuss entropy? We can include information-theoretic view: each visible player observation reduces uncertainty of full-team centroid; role offsets convey mutual information. But must be formal and not toy. We can define conditional entropy H(X_hidden | V_t, O) etc. But avoid overdoing. Need "units SI/information/probability units": Use m, s, pp, probability [0,1], bits/nats for entropy. We can state "if one models positions as random variables, the imputation problem is conditional expectation \hat p_j = E[p_j | V_t, O_{≤t}] and B4 approximates it by \hat c + off_j; no calibrated uncertainty is reported." That is formal. Could mention "information" not measured.

Need "RETROCAUSAL_GENEALOGY": Historical/scientific lineage & multi-week traps. Need discuss lineage: Spearman pitch control [13,14], Graph Imputer Omidshafiei [10], MIDAS [3], TranSPORTmer [2], Everett [4], Penn ARMAX [11], ghosting [7,15], SoccerNet-GSR [12], FOOTPASS [9], camera calibration [5,6], BoT-SORT [1]. "Retrocausal genealogy" maybe trace how current method would be interpreted in past: from visible-only GSR to imputation; from bidirectional 9.6s to online unbounded; from proprietary to open; from trajectory fidelity to downstream metrics. Multi-week traps: benchmark contamination, held-out game 3, hyperparameter freeze, "look-ahead" leakage, camera viewport simulation mismatch, track identity fragmentation, SCI thresholds not externally validated, post hoc? Source says windows flagged before spatial analysis, only flagged. Need mention traps: evaluating only visible players (GS-HOTA), comparing to Graph Imputer numbers despite protocol mismatch, conflating B2 vs B3 due to confound, using fixed template B5, assuming exact cancellation, using frame-level bootstrap (autocorrelation), no zoom/tilt, single provider, no velocity-aware control, real footage non-redistributable. Need maybe multi-week traps: "retrocausal" means decisions that look good now but future data invalidate; e.g., selecting B4 on games 1-2 then held-out game3 share error loses to B2/B3V by 0.3pp, so leaderboard overfit trap. Also "the interpretive text written after seeing results" [PAGE 3]. Need cite.

Need "RECURSIVE_THEORY_OF_MIND": Crisis habit regression vs counter-trap vs clock. This is odd. Need map to paper? "Crisis habit regression" maybe when pipeline under occlusion regresses to visible-only B0 habit; "counter-trap" is overtrusting imputation as truth; "clock" is occlusion gap/time and online causality. Need explain recursive theory of mind: analyst/model must model what downstream metric "believes" about hidden players; the camera/operator points where ball is; the imputer must infer team intent/roles; the downstream verdict class sees ghosts. Need discuss three failure modes:
- Crisis habit regression: under narrow viewport/long occlusion, pipeline reverts to B0 ignore, or B1 last-seen, because simple; produces systematic ceding hidden half; source says "team whose defenders sit off-screen silently cedes control of hidden half" [PAGE 1].
- Counter-trap: treating imputed ghosts as verified identities/ground truth; B4-inspired ghosts with 20s lifetime and retire rules; real GSR identity fragmentation; no claim imputed scores more accurate [PAGE 8]; SCI sensitivity only. Need not let "ghost" become "fact".
- Clock: causal online constraint; no future; occlusion gap; 9.6s boundary; 50-57% beyond; clock is both temporal and decision clock (match clock windows). Need discuss recursive ToM: camera pans with ball (ball-led attention), players' roles relative to team centroid; each visible player votes for centroid based on prior offset; this is like recursive belief: "I think the team centroid, given what each visible player thinks its role offset is." B4 self-consistent bootstrap. Need mention "three-voter threshold" as quorum; fallback when insufficient consensus. This is like theory of mind with limited agents. Need no betting.

Need "CROSS_LAYER_VETO_ADJUDICATION": Physical/biomechanical/weather veto proof. Need apply to football analytics: validate imputed positions against physical constraints (speed/acceleration), biomechanics (human locomotion limits), weather (wind/rain affects ball/pan? camera? pitch). Source does not include weather. Need state veto proof: if imputed ghost requires impossible velocity/acceleration or violates pitch boundaries/offside? Need use physical constraints. We can define veto: for consecutive imputed positions \hat p_j(t), \hat p_j(t+Δ), speed v=||Δp||/Δt. Human sprint max ~10 m/s? Is that acceptable? We can state a conservative physical bound (e.g., elite sprint speed ~10 m/s, acceleration ~5 m/s²) as a veto, but source doesn't provide. Need be careful: "proof" maybe derive that B4 can violate because role anchor + centroid can jump when camera pans and voted centroid changes; velocity blending only B3/B3V, B4 no velocity extrapolation. So vetos: (1) speed/acceleration veto: reject ghost path if v > v_max or a > a_max, fallback B1/B2 or mark uncertain. Need not specify exact thresholds? We can say "use sport-science bounds as tunable veto constants; source does not calibrate them." Need state assumptions. (2) pitch boundary/geometry veto: ghost must lie within pitch polygon and team formation; if outside, clamp/reject. (3) weather/visibility veto: rain/snow/wind can degrade camera calibration and tracking; no weather data in source; impose abstention if calibration residual or track quality low. Need "weather veto proof" maybe show source has no weather variables so can't prove weather robustness. Need use "cross-layer" physical (kinematics), biomechanical (locomotion), environmental (weather). We can formalize:
V_phys = {v_k ≤ v_max, a_k ≤ a_max, p∈P, |z|?} 
V_bio = {energy? gait?} not necessary.
V_weather = {calibration error e_cal ≤ ε, visibility score ≥ τ, wind?}. 
Adjudication: if any veto fails, do not use ghost for SCI; flag or fallback. Need cite source limitations [PAGE 8-9] for no zoom/tilt, velocity-free, identity fragmentation. Need maybe "proof" that B4 can fail physical veto: because B4 uses centroid + stored role offset; if voted centroid jumps due to subset change (e.g., players enter/leave), hidden ghost jumps by same amount; no kinematic smoothing in B4. Source says B3 uses velocity extrapolation, B4 does not. Thus physical veto is necessary. Need cite [PAGE 4-5]. Good.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning with Verifiable Rewards? Need propose counterfactual veto tests with predictions. Need "verifiable" meaning can run on open benchmark and check. Need 3 scenarios. Need include predictions with metrics. Maybe:
1. Shuffle/withhold role offsets for hidden players (ablate B4 to B2) or randomize offsets; prediction B4 hidden-zone MAE degrades toward B2 14.3-15.7? Wait B2 hidden 14.3-15.7; B4 12.2-13.8. Share error B2 4.4-6.2 vs B4 4.5-4.7. Prediction: offset randomization increases share error and position error; if offsets are permuted across players, B4 loses advantage. Verifiable via code.
2. Voter quorum counterfactual: force fallback when |V_t|<3? Already. Or vary threshold from 3 to 1/5; prediction: 1 voter unstable, 5 voters fewer frames; B4 performance non-monotonic; maybe share error increases at 1. Need be precise.
3. Long-occlusion cutoff: evaluate only >9.6s; prediction B4 median position error 15.6-16.9m and share error maybe? Table only position. Need predict no improvement over B0? Actually B0 no position error. Could compare to B1/B2. For >9.6s B4 position 15.6-16.9m; likely B1 worse? Table 1 overall B1 17.9-19.6; B2 12.5-13.6; B4 9.7-11.6. For long occlusion B4 15.6-16.9. Prediction: learned long-horizon model would beat B4 if trained; training-free floor. Verifiable by stratifying. Another scenario: viewport width W=36 vs 60: prediction B4 share error 5.5-6.6 at 36 vs 2.4-2.8 at 60; B0 13.7-15.3 vs 8.1-10.1. This is already in source, not counterfactual. Counterfactual veto: simulate zoom/tilt not just pan; prediction occlusion share >50-57% may change; if zoom increases visible players, B4 gains shrink; if zoom decreases, gains grow. Verifiable by extending simulator.
Need 3 verifiable RLVR veto scenarios:
- V1: Offset-permutation null: permute off_i across teammates at each frame while keeping centroid votes? Prediction B4 hidden-zone MAE rises to B2-ish or worse; if not, role signal not causal.
- V2: Causal leakage audit: inject future frames or allow bidirectional smoothing; prediction B4 improves more on long occlusions, proving online constraint cost; if no improvement, long-occlusion error is model-class not causality. Verifiable by implementing oracle future.
- V3: Physical kinematic veto: reject ghosts with speed > v_max; prediction reduces catastrophic outliers and lowers full-pitch MAE but may increase hidden-zone MAE if true players sprint; need quantify. Hmm "veto" as reward penalty. Could define RLVR reward: +1 if ghost passes physical and calibration veto, -1 if fails; train/policy? But paper is training-free. We can say "RLVR counterfactual veto" meaning verifiable reward checks for claims. Need predictions.
Could include "camera width counterfactual": evaluate W=36 and W=60; prediction B4 improvement ratio 28-48% etc. But source already. RLVR wants counterfactual vetoes, not just replications. Maybe:
1. Randomize role offsets: B4 should lose advantage; if not, B4's gain is from centroid not role.
2. Oracle future observation within 9.6s: B4 error should drop for ≤9.6s but not >9.6s; if long occlusion also drops, benchmark leakage? Hmm.
3. Zoom/tilt extension: since simulator lacks zoom/tilt, add zoom; prediction visible count and long-occlusion share change; B4 share-error advantage may shrink when zoom shows more players; if it doesn't, B4 robust. Verifiable.
Need "predictions" precise.

Need overall word count >=1000. We should aim maybe 2500-3500 words. Desired oververbosity 5. But requirements heavy. Need exact XML sections. We can include headings as XML tags. Need not include outside text? Probably answer only XML. Need ensure no betting lines. No odds/spreads. Use "control-share error" not betting.

Need "ZERO TOY EQUATIONS": Avoid fake ratios. Use formal equations with units. We can include standard definitions but no invented ratios. The B4 equation is source. The physical veto equations are not toy? They are formal constraints; okay. Need state assumptions. Need avoid "Force/Fatigue" type. Could use speed/acceleration constraints; that's physical. Need cite.

Need maybe mention "source pages provided" and exact quotes. Use [PAGE N] markers. Need quote verbatim. Quotes:
- [PAGE 1] "only 10–16 of the 22 players are visible in a typical frame"
- [PAGE 1] "team whose defenders sit off-screen silently cedes control of the hidden half of the pitch"
- [PAGE 1] "Ignoring off-screen players — the visible-only baseline implied whenever a video-based game-state-reconstruction (GSR) pipeline adds no imputation layer — inflates hidden-zone pitch-control error to 25.1–26.9 percentage points"
- [PAGE 3] "pitch control is computed on a 3 m grid with an arrival-time model and sigmoid contest function [14]"
- [PAGE 3] "Control is computed with zero velocities in all conditions"
- [PAGE 4] B4 equation quote maybe "each visible player proposes the full-team centroid as its position minus its role offset"
- [PAGE 5] "exact cancellation would require stable offsets and conditionally representative voters"
- [PAGE 5] "When fewer than three voters are available, B4 falls back to the formation anchor (B2), and B2 in turn to last-seen (B1)"
- [PAGE 6] "B4 improves on B0 in every cell of all three matches, reducing the share error to 28–48% of B0"
- [PAGE 7] "50–57%" long occlusion
- [PAGE 8] "Absent full-pitch ground truth for broadcast footage we make no claim that the imputed scores are more accurate"
- [PAGE 8] "Visible-only spatial verdicts can move by 15.6–17.2 SCI points"
- [PAGE 9] "The simulated viewport pans but does not zoom or tilt"
- [PAGE 9] "learned imputers remain preferable when future context and training data are available"
Need not overquote.

Need maybe include Table 1 values. Need ensure units: pp = percentage points; m; s; W m; fps. "Control map" probability dimensionless; MAE in pp because control expressed percent. If control in [0,1], MAE dimensionless; paper reports pp. State "we follow paper's pp reporting; equivalently 0.251-0.269 in probability units if control is fractional." Good.

Need "information units" maybe mention entropy in bits/nats if used. Could include:
H(P_j(t)|V_t,O_{≤t}) is conditional differential entropy of hidden position (units: log m, bits if discretized). B4 approximates conditional mean; it does not report calibrated variance. This is formal. But maybe unnecessary. Requirement says "SI/information/probability units"; we can explicitly state all units. Include in SOURCE_OPERATORS_AND_EQUATIONS: "Positions m; time s; control probability [0,1] or pp; entropy bits/nats if discretized." Good.

Need "multi-hop derivation" in THINK_TRACE: maybe derive from camera viewport to bias. Let's draft.

THINK_TRACE:
- Step 1: observation operator M_t: full state X_t ∈ R^{22×2} to visible subset V_t. B0 uses M_t X_t with hidden set H_t absent. Pitch control operator C: R^{22×2}->[0,1]^G. Error e_B0 = ||C(X_t)-C(M_t X_t)||. Because C nonlinear and hidden players contest grid cells, absence shifts control to visible team. The paper quantifies 25.1-26.9 pp hidden-zone MAE and share error 11.1-13.4.
- Step 2: B4 estimates hidden positions via centroid + role offset. The visible centroid is biased: \bar p_V = \bar p_all + bias(V_t). B4 votes to estimate \hat c. If off_i stable, \hat c = c + average bias? Actually if p_i = c + off_i + ε_i, then p_i - off_i = c + ε_i; average ε. Bias removed if off_i accurate. But off_i estimated against voted centroid self-consistently. Exact cancellation needs stable offsets and representative voters [PAGE 5]. Under subset bias, voters may not be representative (e.g., defenders off-screen). So B4 attenuates, not eliminates.
- Step 3: Position error propagates to control map and share. At W=44, B4 hidden MAE 12.2-13.8 vs B0 25.1-26.9; share 4.5-4.7 vs 11.1-13.4. At W=36, B4 share 5.5-6.6 vs B0 13.7-15.3; at W=60 2.4-2.8 vs 8.1-10.1. The gain absolute largest at narrow viewport. But B4 not uniformly best: game3 B2/B3V edge share by 0.3pp with CI includes zero. Long occlusion >9.6s B4 median 15.6-16.9m; 50-57% samples. Downstream SCI flips one window; no ground truth.
- Gray-zone audit: The benchmark uses simulated viewport, three matches single provider, no zoom/tilt, zero velocities, identity fragmentation, OCR ~45%, ghosts capped at 11, role offsets restart on fragmented tracks, thresholds not externally validated, no full-pitch ground truth for broadcast. So claims are sensitivity/benchmark not universal. The "held-out" game3 was specified before evaluation but text written after. The B3 vs B2 confound corrected by B3E/B3V; B3E reference mismatch. Need mention "the closest learned prior work" 9.6s; paper doesn't claim superiority. Good.

SOURCE_OPERATORS_AND_EQUATIONS:
Need formalize. Use LaTeX. Include:
Definitions:
- t ∈ {1,...,T}, Δt=0.2 s at 5 fps evaluation; source tracking 25 fps but evaluate at 5 fps [PAGE 3]. Alpha=0.06 per frame at 25 fps. 
- p_i(t) ∈ R^2 m, team centroid c(t)=1/22 sum? But B4 uses visible. Define \bar p_V(t)=1/|V_t| sum_{i∈V_t} p_i(t). Off_i(t) m.
- B4 equation exact:
\[
\hat c(t)=\frac1{|V_t|}\sum_{i\in V_t}(p_i(t)-off_i(t^-)), \quad off_i(t)\leftarrow EMA[p_i(t)-\hat c(t)] \ (i∈V_t),
\]
hidden \hat p_j(t)=\hat c(t)+off_j(t^-).
- EMA: off_i(t)= (1-\beta) off_i(t^-)+β(p_i(t)-\hat c(t)), β=0.1 per 5 fps step; time constant τ_EMA = -Δt/ln(1-β)? Actually for EMA with β=0.1 per 0.2s, effective time constant ≈ Δt/β? We can compute not necessary. Could state β=0.1. If deriving time constant, use \tau=-Δt/\ln(1-\beta) ≈ 1.9 s? Let's calculate: ln(0.9)=-0.10536, Δt=0.2, τ=1.898s. Is that useful? It is derived, not source. Could mention as approximate if interpreting as exponential kernel. But avoid because source only says EMA weight 0.1. We can state "β=0.1 per 5-fps evaluation step" [PAGE 4]. For B1, w=e^{-Δt/τ}, τ=8s. For B3 velocity blend e^{-Δt/1.5s}. Good.
- Ball pan: b_t^smooth = (1-α)b_{t-1}^smooth+α b_t^obs, α=0.06 per 25fps frame. Units m; effective time constant τ_pan=- (1/25)/ln(0.94) ≈ 0.323s? Let's compute: ln(0.94)=-0.061875, Δt=0.04, τ=0.646s. Wait -0.04/-0.0619=0.646. Could mention but not necessary. The source says α=0.06 per frame at 25 fps. We can just state.
- Metrics: hidden-zone MAE:
\[
\mathrm{MAE}_{hidden}=\frac{1}{|T||G_h(t)|}\sum_t\sum_{g∈G_h(t)} |C_t(g)-\tilde C_t(g)| \quad [\mathrm{pp}]
\]
where C_t control probability (fractional) and reported ×100 pp. Need be cautious: paper's exact aggregation not given. We can say "schematically; paper reports mean absolute error over grid cells and frames." That's acceptable? Maybe formal but not exact. Need not overclaim. We can define "operational definition as reported" with note.
- Control-share error:
\[
\mathrm{Err}_{share}=\frac1T\sum_t |s_A(t)-\tilde s_A(t)| \quad [\mathrm{pp}]
\]
where s_A(t) = team A control share. Source says "mean absolute per-frame deviation of the single headline number 'team A controls x% of the pitch'." Good.
- Median position error: median over hidden (frame,player) pairs where observed earlier. Units m.
- Occlusion gap Δt_occ = t - t_last_obs [s].
- Information/probability: C∈[0,1] probability-like; entropy H in bits if discretized. State no calibrated uncertainty reported.
- Assumptions: causal; no future; no offline training; per-team separate; visible set nonempty; offsets initialized; control zero velocities; viewport full height; pan only; 3m grid; 5fps; players on pitch.
- Singularity/breakdown regimes: |V_t|=0 centroid undefined; fewer than 3 offset-bearing voters -> B2 fallback; hidden player never observed -> no position score and absent control maps; offsets unstable or nonrepresentative -> bias not cancelled; long occlusion >9.6s error 15.6-16.9m; narrow W=36m highest error; B5 fixed template bad; B3E reference mismatch; real GSR track fragmentation; zoom/tilt absent; weather/calibration not modeled. Good.

Need cite page numbers after equations. Use exact quotes.

RETROCAUSAL_GENEALOGY:
Need ~300-500 words. Discuss lineage:
- Pre-history: Spearman pitch control and pass probability [13,14] define spatial metric; ghosting [7,15] counterfactual; Graph Imputer [10] learned off-screen; MIDAS [3], TranSPORTmer [2], Everett [4], Penn [11] adjacent. SoccerNet-GSR [12], FOOTPASS [9], calibration [5,6], BoT-SORT [1]. The paper's retrocausal move: evaluate imputation by downstream metrics, not trajectory; open benchmark; training-free floor. "Retrocausal genealogy" maybe ask historical/scientific lineage and multi-week traps. We can frame as "If read backwards from 2026, the paper is a correction to a habit: GSR metrics scored visible players only, so imputation was invisible in evaluation." Quote [PAGE 1] "GS-HOTA scores only the players that are visible". "The one closely related study... 105 proprietary... bidirectional... 9.6-second windows" [PAGE 2]. The paper's benchmark reframes. Multi-week traps:
1. Leaderboard trap: B4 best overall but game3 B2/B3V edge share by 0.3pp; if selecting on game3 you'd overfit; CI includes zero.
2. Protocol trap: comparing B4 to Graph Imputer despite different temporal info/training; paper explicitly says not directly comparable [PAGE 7].
3. Simulation trap: pan-only viewport no zoom/tilt; real broadcast occlusion stats may differ [PAGE 9].
4. Metric trap: zero-velocity control, so magnitudes apply only to position-only variant [PAGE 3]; velocity-aware open.
5. Identity trap: role offsets keyed to track IDs; fragmentation restarts offset [PAGE 8]; OCR ~45%.
6. Threshold trap: SCI +12/+4 bins set internal not externally validated [PAGE 8].
7. Statistical trap: block bootstrap within-match, not match-to-match; three matches single provider [PAGE 4,9].
Need mention "interpretive text written after seeing all results" [PAGE 3] as transparency but risk. Good.

RECURSIVE_THEORY_OF_MIND:
Need ~300-400 words. Explain three heuristics:
- Crisis habit regression: under poor observation, pipeline defaults to B0/B1 (visible-only/last-seen) because it is simple and "honest"; but it systematically cedes hidden half. This is a habit regression under crisis (narrow viewport W=36; long occlusion >9.6s). Prediction: B0 share error 13.7-15.3 at W=36 vs 8.1-10.1 at W=60. The more crisis, the more habit hurts. Counter-trap: imputation can overconfidently fill hidden space; B4 ghosts may be treated as identities; but source says no claim more accurate; SCI changes 15.6-17.2 points and flips one class; this is sensitivity, not validation. Need a "clock": online causal clock, occlusion gap; 9.6s boundary; 50-57% beyond; match clock windows 11:58-12:32 and 72:48-73:45. Recursive ToM: the camera operator attends to ball; visible players vote for team centroid based on their own role beliefs; B4 is a recursive belief update: each player's offset is relative to the voted centroid, and the voted centroid is computed from offsets. The three-voter threshold is a quorum; below it, the model falls back to a simpler belief (B2/B1). The analyst must model the downstream consumer's belief: SCI verdict class. Need discuss "crisis habit regression vs counter-trap vs clock" as three competing controls:
1. Habit regression = B0/B1 default under uncertainty.
2. Counter-trap = treating imputed ghosts as ground truth; need abstention/veto.
3. Clock = causal online constraint and occlusion duration; no future; long occlusions.
Need maybe "recursive theory of mind" means model of model: GSR pipeline's belief about players, imputer's belief about team centroid, downstream metric's belief about space. We can state "the correct recursion is not 'fill all ghosts'; it is 'condition on what the camera could see and what roles imply, then propagate uncertainty'." The paper doesn't include uncertainty; that's a gap. Good.

CROSS_LAYER_VETO_ADJUDICATION:
Need ~300-400 words. Formal veto constraints. Physical: kinematics. Define for imputed trajectory \hat p_j(t_k):
\[
v_k = \frac{\|\hat p_j(t_k)-\hat p_j(t_{k-1})\|}{t_k-t_{k-1}}, \quad a_k = \frac{\|v_k-v_{k-1}\|}{t_k-t_{k-1}}
\]
Veto if v_k > v_max or a_k > a_max or \hat p_j outside pitch polygon P. Need state v_max/a_max are tunable sport-science constants; source does not calibrate them, so use conservative bounds and report abstention rates. Biomechanical: human locomotion limits; no teleport; role anchor can jump when voted centroid changes due to voters entering/leaving. B4 has no velocity extrapolation (B3/B3V do). So physical veto is not redundant. Weather: calibration residual and visibility; rain/wind/snow can degrade camera calibration, tracking, ball detection; source has no weather layer. Veto if calibration error e_cal > ε or track quality q < τ_q; abstain from SCI. "Cross-layer veto proof": We can prove necessity by counterexample: Suppose at t^- a set of voters is left-biased, at t a right-side player enters, \hat c jumps by δ; B4 hidden ghost jumps by δ even if true player stationary. Then speed v=δ/Δt may exceed v_max. Since B4 lacks kinematic state, only a cross-layer veto catches it. Similarly, if camera calibration drifts, all ghosts shift; physical boundary veto catches some but not all. Weather can cause ball-led pan lag changes; source alpha fixed 0.06; real rain/wind may alter ball tracking not human motion. Need cite source: "The simulated viewport pans but does not zoom or tilt" [PAGE 9]; "Control is computed with zero velocities" [PAGE 3]; "Identity fragmentation... role offsets keyed to track identities" [PAGE 8]. Good.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 scenarios with predictions. Define RLVR as verifiable reward/veto. Maybe:
V1 Offset-permutation null (role-signal veto). Counterfactual: keep B4 centroid voting but permute off_i among visible teammates before voting and imputation; or replace off_i with shuffled offsets. Prediction: if role offsets are causal, hidden-zone MAE should degrade from 12.2-13.8 pp toward or beyond B2 14.3-15.7 pp; median position error should rise from 9.7-11.6 m toward B2 12.5-13.6 m; share error should rise from 4.5-4.7 pp toward 4.4-6.2 pp. If not, B4's gain is from centroid averaging only. Verifiable by code.
V2 Causal-leakage oracle (clock veto). Counterfactual: allow B4 to see future frames within 9.6s (bidirectional) on the same benchmark. Prediction: improvements concentrate in ≤9.6s occlusion bins (already 3.3-8.9m) and little in >9.6s (15.6-16.9m); if long-occlusion error drops sharply, then the training-free online floor is not causal or benchmark leaks. Or conversely if no drop, long occlusion is irreducible by temporal context. Need precise: "Prediction: oracle future reduces ≤9.6s median by ≥20% but >9.6s by <10%." Is that inventing? It's a prediction, okay. But maybe not derived. We can phrase as expected direction, not exact. RLVR requires predictions; can be directional. 
V3 Viewport/calibration veto (environmental/geometry). Counterfactual: extend simulator with zoom/tilt and calibration noise; apply physical/calibration veto that rejects ghosts with v>vmax or outside pitch. Prediction: without veto, B4 share error increases at W=36 under calibration noise; with veto, full-pitch MAE improves but hidden-zone coverage drops (abstention). Specifically, B4's 28-48% share-error advantage over B0 should persist at W=44 under mild calibration noise; under severe noise it should shrink and veto rate should rise. Verifiable by benchmark. Need include "if B4's advantage disappears under mild noise, its deployment claim is vetoed." Good.
Maybe V4? Need exactly 3. We can include 3.

Need "RLVR counterfactual vetoes" maybe use reward:
R = 1 if scenario prediction matches measured metric difference; 0 otherwise. But not necessary. Could state "Each scenario is a verifiable reward: pass/fail against pre-registered metric direction." Good.

Need ensure XML tags exact. The user says exact XML sections: <THINK_TRACE>...</THINK_TRACE>, etc. We can use those tags. Need no markdown outside? We can put all inside. Use LaTeX within XML. Fine.

Need word count >=1000. Our answer likely ~3000. Need be concise but deep. Need no betting lines. Avoid words "odds", "spread", "moneyline", "total". We can use "control-share" but not betting total. "Totals" forbidden? Avoid "total" maybe use "full" instead. But "total" appears in math? We can avoid. No betting lines.

Need maybe mention "GSE + GSI Frontier Reasoning Foundry" not necessary.

Need citations exact [PAGE N]. Use quotes with quotation marks. Need ensure verbatim quotes exactly. Let's verify quotes:
- "only 10–16 of the 22 players are visible in a typical frame" [PAGE 1] exact.
- "team whose defenders sit off-screen silently cedes control of the hidden half of the pitch" [PAGE 1] exact.
- "Ignoring off-screen players — the visible-only baseline implied whenever a video-based game-state-reconstruction (GSR) pipeline adds no imputation layer — inflates hidden-zone pitch-control error to 25.1–26.9 percentage points" [PAGE 1] exact. Note em dash.
- "pitch control is computed on a 3 m grid with an arrival-time model and sigmoid contest function [14]" [PAGE 3] exact.
- "Control is computed with zero velocities in all conditions" [PAGE 3] exact.
- "each visible player proposes the full-team centroid as its position minus its role offset" [PAGE 4] exact? Page 4 says "each visible player proposes the full-team centroid as its position minus its role offset" yes.
- "exact cancellation would require stable offsets and conditionally representative voters" [PAGE 5] exact.
- "When fewer than three voters are available, B4 falls back to the formation anchor (B2), and B2 in turn to last-seen (B1)" [PAGE 5] exact.
- "B4 improves on B0 in every cell of all three matches, reducing the share error to 28–48% of B0" [PAGE 6] exact.
- "50–57%" [PAGE 7] exact but quote "50–57%" only.
- "Absent full-pitch ground truth for broadcast footage we make no claim that the imputed scores are more accurate" [PAGE 8] exact? Page 8: "Absent full-pitch ground truth for broadcast footage we make no claim that the imputed scores are more accurate; the point is a sensitivity result." Yes.
- "Visible-only spatial verdicts can move by 15.6–17.2 SCI points" [PAGE 8] exact.
- "The simulated viewport pans but does not zoom or tilt" [PAGE 9] exact.
- "learned imputers remain preferable when future context and training data are available" [PAGE 9] exact? Page 9: "Finally, learned imputers remain preferable when future context and training data are available — our contribution is..." Yes.
- "GS-HOTA [12]) scores only the players that are visible" [PAGE 1] exact? Page 1: "The GSR evaluation protocol itself (GS-HOTA [12]) scores only the players that are visible". Good.
- "105 proprietary Premier League tracking matches" [PAGE 2] exact? Page 2: "105 proprietary Premier League tracking matches". Good.
- "bidirectional model that consumes future observations inside 9.6-second windows" [PAGE 2] exact.
- "50–57% of hidden-player observations" [PAGE 1] exact? Page 1: "50–57% of hidden-player observations under the simulated viewport, however, lie beyond that regime". Good.
- "the reported magnitudes therefore apply to this position-only control variant" [PAGE 3] exact.
- "role offsets are keyed to track identities, so a fragmented track restarts its offset estimate" [PAGE 8] exact? Page 8: "Role offsets are keyed to track identities, so a fragmented track restarts its offset estimate — the operational layer is B4-inspired rather than the benchmarked algorithm verbatim." Good.

Need maybe mention "1000-word depth" no explicit word count. Fine.

Let's draft carefully.

Potential issue: "THINK_TRACE" must be >=400 words. We'll make ~700. Other sections also substantial. Total >2500.

Need use "percentage points" units. In equations, if control fraction c∈[0,1], MAE in fraction; paper reports pp = 100×fraction. State that. Good.

Need "information units" maybe in SOURCE_OPERATORS: "If one discretizes hidden positions, conditional entropy H(P_j(t)|V_t,O_{≤t}) is in bits or nats; the paper reports no entropy/uncertainty, only point errors." Good.

Need "singularity/breakdown regimes" exact phrase. Include bullet list.

Need "gray-zone audit" in THINK_TRACE. Include "what would falsify".

Need "cross-layer veto proof" maybe use "proof sketch" not formal theorem. Good.

Need no "betting". Avoid "verdict" is okay; not betting. "control-share" okay. "odds" avoid. "moneyline" avoid. "spread" avoid. "total" maybe avoid except "total team"? Use "full-team" instead. "Totals" not present.

Need answer only XML? We can start directly with <THINK_TRACE>. No intro. Good.

Let's write in detail.

THINK_TRACE draft:
"Multi-hop derivation. Let X_t∈R^{22×2}... The camera applies masking operator M_t... B0 computes C(M_t X_t)... Because C is nonlinear and hidden players contest cells, omission is not random missing data; it is covariate shift in the contest. The paper's numbers..." 
Need mention "hidden-zone MAE 25.1-26.9 pp" and "share error 11.1-13.4 pp" [PAGE 1]. 
"B4's estimator is a fixed-point/self-consistent bootstrap: \hat c = average(p_i - off_i), off_i = EMA(p_i - \hat c). If p_i = c + off_i + ε_i, then \hat c = c + average ε_i; hidden \hat p_j = c + off_j + average ε_i. Bias cancels only if off_i stable and voters representative; source explicitly says exact cancellation requires that [PAGE 5]. The subset bias in \bar p_V is attenuated by voting because each player subtracts its own role offset before averaging; but if the visible subset is conditionally unrepresentative (all defenders hidden), the average ε_i is not zero."
"Metric propagation: control map is sigmoid contest on 3m grid; position error enters arrival time; missing hidden players means zero contest from them, so B0 assigns control to visible team. B4 restores ghost contest. At W=44, hidden MAE 12.2-13.8 vs 25.1-26.9; share 4.5-4.7 vs 11.1-13.4; median position 9.7-11.6. At W=36 share 5.5-6.6 vs 13.7-15.3; at W=60 2.4-2.8 vs 8.1-10.1. Long occlusion >9.6s 15.6-16.9m and 50-57% samples. Downstream SCI flips one window but no ground truth."
"Gray-zone audit: The held-out game3 is only one match; B2/B3V edge B4 share by 0.3pp with CI including zero; B4 best position all matches. The benchmark is simulated pan-only, no zoom/tilt; zero velocities; single provider; three matches; identity fragmentation; thresholds internal; no full-pitch broadcast ground truth. The paper's modest claim is a floor, not superiority. Falsifiers: if offset permutation doesn't degrade B4, role anchoring is not causal; if oracle future doesn't help long occlusion, error is irreducible; if calibration/kinematic veto doesn't reduce catastrophic ghosts, physical layer not needed." Good.

SOURCE_OPERATORS:
Use equations and bullets. Need not be too long but complete.

Let's write equations:
\[
b_t=(1-\alpha)b_{t-1}+\alpha b_t^{\rm obs},\quad \alpha=0.06\ {\rm frame^{-1}},\ 25\ {\rm fps}
\]
Actually α per frame dimensionless. State units. Viewport \(V_t(W)=\{i: |x_i(t)-b_t|\le W/2\}\) full height. Source says width-W window spanning full pitch height. Good. This is formal and from source.
\[
\bar p_V(t)=\frac{1}{|V_t|}\sum_{i\in V_t}p_i(t)
\]
\[
\hat c(t)=\frac{1}{|V_t|}\sum_{i\in V_t}(p_i(t)-off_i(t^-)),\quad
off_i(t)= (1-\beta)off_i(t^-)+\beta(p_i(t)-\hat c(t)),\ \beta=0.1
\]
\[
\hat p_j(t)=\hat c(t)+off_j(t^-),\quad j\notin V_t
\]
B1:
\[
\hat p_j(t)=w p_j(t_{\rm last})+(1-w)\bar p_V(t),\quad w=e^{-\Delta t/\tau},\ \tau=8\,{\rm s}
\]
B3 velocity blend:
\[
\hat p_j(t)= (1-\lambda)[\hat c(t)+off_j(t^-)] + \lambda[p_j(t_{\rm last})+v_j(t_{\rm last})(t-t_{\rm last})],\quad \lambda=e^{-\Delta t/1.5{\rm s}}
\]
Wait source says B3 uses EMA offsets applied at plain visible centroid and constant-velocity extrapolation blended into anchor with weight e^{-Δt/1.5s}. We can present as formal. But maybe not necessary. Include B1 and B4 only. B3 not needed. But maybe B1 for fallback.
Metrics:
\[
\mathrm{MAE}_{H} = \frac{1}{|T|}\sum_t \frac{1}{|G_H(t)|}\sum_{g\in G_H(t)} |C_t(g)-\tilde C_t(g)|
\]
Units: if C fractional, dimensionless; reported ×100 pp. 
\[
\mathrm{Err}_{share} = \frac{1}{|T|}\sum_t |s_A(t)-\tilde s_A(t)|
\]
pp.
\[
\mathrm{MedErr}_{pos} = \operatorname{median}_{(t,j): j\notin V_t, \exists t'<t} \|\hat p_j(t)-p_j(t)\|
\]
m.
\[
\Delta t_{occ}(t,j)=t-t_{\rm last}(j)
\]
s.
Information: \(H(P_j(t)|V_t,O_{\le t})\) in bits/nats; not reported.

Assumptions: causal; online; no future; no offline training; per-team; |V_t|>0; offsets initialized; zero velocities; 3m grid; 5fps; pan only; full height; players on pitch; team assignment correct. 
Breakdown: |V_t|=0 undefined; <3 voters fallback; never observed not scored; offset instability; nonrepresentative voters; long occlusion; narrow W; B5 fixed; B3E mismatch; fragmented tracks; zoom/tilt; weather/calib; velocity-aware open.

RETROCAUSAL_GENEALOGY: historical. Mention "retrocausal" as reading the paper's claims backward into prior methods. Use quotes. Multi-week traps bullet list.

RECURSIVE_THEORY_OF_MIND: Use three named. Need maybe "crisis habit regression" is not in paper; define as our interpretation. "Counter-trap" etc. Use paper evidence.

CROSS_LAYER_VETO: Use equations. 
Physical veto:
\[
V_{\rm phys}(j,t_k)= \mathbf 1\{ \|\hat p_j(t_k)-\hat p_j(t_{k-1})\| \le v_{\max}\Delta t_k,\ \|\Delta v\| \le a_{\max}\Delta t_k,\ \hat p_j(t_k)\in \mathcal P\}
\]
Need be precise: first condition is displacement ≤ v_max Δt; second acceleration ≤ a_max Δt. Actually \(\|\hat v_k-\hat v_{k-1}\| \le a_{\max}\Delta t_k\). Good. 
Biomechanical: v_max/a_max conservative; no exact values from source. Weather: \(V_{\rm calib}=\mathbf1\{e_{\rm calib}\le \epsilon_{\rm calib}\}\), \(V_{\rm vis}=\mathbf1\{q_{\rm track}\ge q_{\min}\}\). 
Adjudication: ghost allowed for SCI only if all vetoes pass; else abstain/fallback. 
Proof sketch: B4 centroid can jump when voter set changes; no velocity state; source says B4 no velocity? Actually B3 has velocity; B4 not. Thus kinematic veto necessary. Calibration drift shifts all ghosts; boundary/physical catches some; weather/visibility should trigger abstention. Source lacks weather and zoom/tilt; so cannot claim environmental robustness.

RLVR: three scenarios. Need be clear "counterfactual veto" = if scenario fails, claim vetoed. 
Scenario 1: Offset permutation. Prediction values. 
Scenario 2: Oracle future 9.6s. Prediction: improvement concentrated short regime; long regime remains 15.6-16.9m. If long regime improves substantially, online constraint is not the binding limit; if no short improvement, Graph Imputer protocol advantage is not temporal context. Hmm.
Scenario 3: Zoom/tilt + calibration noise + kinematic veto. Prediction: mild noise preserves B4's 28-48% share-error advantage; severe noise raises veto/abstention and shrinks advantage; if advantage persists without veto, physical veto unnecessary. 
Need "3 verifiable RLVR veto scenarios + predictions" exactly three bullets. Good.

Need ensure not too verbose but meet depth.

Let's compose final. Use XML tags. Need no markdown? XML tags with content can include LaTeX. Fine.

Potential issue: "≥1,000-word depth across exact XML sections" They may parse sections. Need include all tags. Good.

Let's write final answer. 
Need be careful with "exact singularity/breakdown regimes" in SOURCE section. Use phrase.
Need avoid "toy equations". The physical veto equations are not toy; they are constraints. The metric equations are standard. Fine.

Let's now produce. 

</NATIVE_REASONING>

<THINK_TRACE>
Multi-hop derivation and gray-zone audit. Let the full on-pitch state at time \(t\) be \(X_t\in\mathbb{R}^{22\times 2}\) in metres, and let the broadcast camera induce a masking operator \(M_t\) that returns only the visible subset \(V_t\). The paper’s visible-only baseline B0 is effectively \(C(M_tX_t)\), where \(C\) is the pitch-control operator. Because pitch control is a nonlinear contest over a 3 m grid—computed “with an arrival-time model and sigmoid contest function [14]” [PAGE 3]—the omission of hidden players is not random missingness. It changes the contest itself: cells that should be contested by off-screen defenders are assigned to the visible team. The paper quantifies this as “hidden-zone pitch-control error to 25.1–26.9 percentage points” and “mean absolute control-share error of 11.1–13.4 points” [PAGE 1]. The causal chain is therefore: camera pan \(\rightarrow\) biased visible subset \(\rightarrow\) absent hidden contestants \(\rightarrow\) inflated visible-team control in the hidden zone \(\rightarrow\) distorted team control share \(\rightarrow\) distorted downstream possession-quality verdict.

B4’s estimator is a self-consistent bootstrap. Each visible player votes for the full-team centroid by subtracting its running role offset:
\[
\hat c(t)=\frac{1}{|V_t|}\sum_{i\in V_t}\bigl(p_i(t)-off_i(t^-)\bigr),
\]
then the offsets are updated against that voted centroid with an EMA, and a hidden player is placed at \(\hat c(t)+off_j\). The paper describes this as “each visible player proposes the full-team centroid as its position minus its role offset” [PAGE 4]. If \(p_i(t)=c(t)+off_i+\varepsilon_i(t)\), then \(\hat c(t)=c(t)+\frac{1}{|V_t|}\sum\varepsilon_i(t)\), and the hidden imputation is \(\hat p_j(t)=c(t)+off_j+\bar\varepsilon(t)\). The visible-subset bias is attenuated because each player’s own offset is removed before averaging; but “exact cancellation would require stable offsets and conditionally representative voters” [PAGE 5]. When defenders are disproportionately off-screen, the voters are not conditionally representative, so B4 attenuates rather than eliminates the bias. This is the mathematical gray zone: B4 is not an unbiased estimator in general; it is a bias-reduction heuristic under role stability and partial voter representativeness.

The metric propagation is consistent with the numbers. At \(W=44\) m, B0 leaves hidden-zone control MAE at 25.1–26.9 pp and share error at 11.1–13.4 pp; B4 reduces these to 12.2–13.8 pp and 4.5–4.7 pp, with median position error 9.7–11.6 m. At the hardest simulated viewport \(W=36\) m, B4’s share error is 5.5–6.6 pp versus B0’s 13.7–15.3 pp; at \(W=60\) m it is 2.4–2.8 pp versus 8.1–10.1 pp. The paper summarizes: “B4 improves on B0 in every cell of all three matches, reducing the share error to 28–48% of B0” [PAGE 6]. But B4 is not uniformly best: in held-out game 3, B2/B3V edge it on share error by 0.3 pp, and the paired block-bootstrap interval includes zero [PAGE 5]. The long-occlusion regime is the main residual: B4’s median position error is 15.6–16.9 m for gaps \(>9.6\) s, and “50–57%” of hidden-player samples lie beyond 9.6 s [PAGE 7]. The downstream SCI case study is a sensitivity result, not ground-truth validation: “Absent full-pitch ground truth for broadcast footage we make no claim that the imputed scores are more accurate” [PAGE 8]. Gray-zone audit: the benchmark is three matches from one provider, pan-only viewport, zero-velocity control, simulated rather than real zoom/tilt, and real GSR has identity fragmentation. The correct reading is a training-free floor and a distortion benchmark, not a claim of superiority over learned bidirectional imputers.

<SOURCE_OPERATORS_AND_EQUATIONS>
Definitions and units. Positions \(p_i(t)\in\mathbb{R}^2\) are in metres; time is in seconds; evaluation is at 5 fps (\( \Delta t=0.2\) s) from 25 fps tracking [PAGE 3]. Control \(C_t(g)\in[0,1]\) is a probability-like contest value on a 3 m grid; the paper reports MAE in percentage points, i.e. \(100\times\) the fractional error. If hidden positions are discretized, conditional entropy \(H(P_j(t)\mid V_t,O_{\le t})\) would be in bits or nats; the paper reports point errors, not calibrated uncertainty.

Viewport and pan operator. The simulated camera follows an exponentially smoothed ball position:
\[
b_t=(1-\alpha)b_{t-1}+\alpha b_t^{\mathrm{obs}},\qquad \alpha=0.06\ \text{per 25-fps frame},
\]
and the visible set is a width-\(W\) window spanning full pitch height, with \(W\in\{36,44,52,60\}\) m [PAGE 3]. At \(W=44\) m the viewport shows 14.6–15.0 players on average, close to the “12.8 ± 3.7 of 22” reported for the prior learned work [PAGE 7].

B4 operator. With \(V_t\) the visible players, \(p_i(t)\) position, and \(off_i(t^-)\) the pre-update role offset in metres:
\[
\hat c(t)=\frac{1}{|V_t|}\sum_{i\in V_t}\bigl(p_i(t)-off_i(t^-)\bigr),
\qquad
off_i(t)\leftarrow \mathrm{EMA}\bigl[p_i(t)-\hat c(t)\bigr],\quad i\in V_t,
\]
\[
\hat p_j(t)=\hat c(t)+off_j(t^-),\qquad j\notin V_t.
\]
The EMA weight is 0.1 per 5-fps evaluation step [PAGE 4]. The recursion is “seeded from the visible mean until three offset-bearing players are available”; below that quorum, B4 falls back to B2, and B2 to B1 [PAGE 4–5]. B1 is last-seen with decay:
\[
\hat p_j(t)=w\,p_j(t_{\mathrm{last}})+(1-w)\bar p_V(t),\qquad
w=e^{-\Delta t/\tau},\quad \tau=8\ \mathrm{s}.
\]
B3 adds constant-velocity extrapolation blended with weight \(e^{-\Delta t/1.5\,\mathrm{s}}\) [PAGE 4].

Metrics. The hidden-zone control MAE is schematically
\[
\mathrm{MAE}_{H}=\frac{1}{|T|}\sum_t\frac{1}{|G_H(t)|}\sum_{g\in G_H(t)}
\bigl|C_t(g)-\tilde C_t(g)\bigr|,
\]
reported in pp; \(G_H(t)\) are grid cells outside the viewport. The control-share error is the mean absolute per-frame deviation of the headline share:
\[
\mathrm{Err}_{\mathrm{share}}=\frac{1}{|T|}\sum_t\bigl|s_A(t)-\tilde s_A(t)\bigr|,
\]
in pp. Median position error is
\[
\mathrm{MedErr}_{\mathrm{pos}}=
\operatorname{median}_{(t,j):\,j\notin V_t,\ \exists t'<t}
\|\hat p_j(t)-p_j(t)\|,
\]
in metres, over hidden players observed at least once earlier. Occlusion gap is
\[
\Delta t_{\mathrm{occ}}(t,j)=t-t_{\mathrm{last}}(j)\quad[\mathrm{s}].
\]
These definitions follow the paper’s stated metric construction [PAGE 3–4].

Assumptions. The method is causal/online, uses only current-match observations, no offline training, no GPU, and per-team separate offsets [PAGE 4]. Control is computed “with zero velocities in all conditions” [PAGE 3], so the reported magnitudes apply to the position-only control variant; velocity-aware control is open [PAGE 3, 9]. The viewport pans but “does not zoom or tilt” [PAGE 9]. Team assignment and track identity are assumed adequate in the benchmark, though real GSR has fragmentation and “jersey-number OCR coverage ≈45%” [PAGE 8].

Singularity and breakdown regimes. (i) \(|V_t|=0\): the centroid is undefined; B4 cannot vote. (ii) Fewer than three offset-bearing voters: the quorum fails, so B4 falls back to B2, then B1 [PAGE 5]. (iii) A hidden player never observed earlier: no position error is scored, but the player remains absent from every partial-observation control map, so the map metrics retain a cold-start penalty [PAGE 3]. (iv) Offset instability or conditionally nonrepresentative voters: exact bias cancellation fails [PAGE 5]. (v) Long occlusion \(>9.6\) s: B4 median error rises to 15.6–16.9 m [PAGE 7]. (vi) Narrow viewport \(W=36\) m: share error rises to 5.5–6.6 pp, still below B0 but worse than wide viewports [PAGE 6]. (vii) Fixed template B5: position error 20.7–22.7 m and share error 6.9–10.3 pp, consistent with within-half role drift [PAGE 5–6]. (viii) B3E’s reference mismatch: offsets estimated against the voted centroid but applied at the visible centroid misplace players [PAGE 5–6]. (ix) Real-broadcast GSR: fragmented tracks restart offsets; ghosts are B4-inspired, not the benchmarked algorithm verbatim [PAGE 8]. (x) Weather/calibration: not modeled in the source; no weather variable or calibration-residual veto is reported.

<RETROCAUSAL_GENEALOGY>
Read backwards, the paper is a correction to a measurement habit. The lineage begins with pitch-control and physics-based spatial models [13, 14], passes through counterfactual “ghosting” for coaching evaluation [7, 15], and reaches learned off-screen imputation in the Graph Imputer [10]. The Graph Imputer is the closest prior work, but it was trained on “105 proprietary Premier League tracking matches” with a “bidirectional model that consumes future observations inside 9.6-second windows” [PAGE 2]. The current paper’s retrocausal move is to ask what happens if the evaluation protocol itself is the source of the distortion: “The GSR evaluation protocol itself (GS-HOTA [12]) scores only the players that are visible” [PAGE 1]. That reframes imputation from a trajectory-fidelity problem into a downstream-metric problem. Adjacent learned work—MIDAS [3], TranSPORTmer [2], Everett et al. [4], Penn et al. [11]—shares the imputation target but differs in observation regime, training requirement, or temporal sparsity. The open benchmark and training-free ladder are the paper’s historical correction: they make the invisible remainder scorable.

Multi-week traps. First, leaderboard overfitting: B4 is best overall on the decision-relevant metrics, but in held-out game 3 B2/B3V edge it on share error by 0.3 pp, with a paired interval that includes zero [PAGE 5]. A team that selected B4 on game 3 alone would overfit noise. Second, protocol-comparison trap: the paper explicitly refuses direct numeric comparison to the Graph Imputer because temporal information, masking, aggregation, and training data differ [PAGE 7]. Third, simulation trap: the viewport is pan-only, while real broadcast zooms and tilts; “real-broadcast occlusion statistics (including the 50–57% long-occlusion share) may differ” [PAGE 9]. Fourth, metric trap: zero-velocity control isolates imputation but does not validate velocity-aware control [PAGE 3, 9]. Fifth, identity trap: real ghosts are keyed to track identities, and a fragmented track restarts its offset estimate [PAGE 8]. Sixth, threshold trap: the SCI bins \(+12/+4\) were set in earlier internal work but “not externally validated” [PAGE 8]. Seventh, statistical trap: the block bootstrap quantifies within-match temporal uncertainty, “not match-to-match variation” [PAGE 4], and the benchmark uses three matches from a single provider [PAGE 9]. Eighth, interpretive trap: games 1–2 were used for development and game 3 was held out, but “the interpretive text was, of course, written after seeing all results” [PAGE 3]. These are not fatal; they define the scope of the claim. The paper’s own position is modest: “learned imputers remain preferable when future context and training data are available” [PAGE 9].

<RECURSIVE_THEORY_OF_MIND>
The recursive problem is not merely “where is the hidden player?” It is “what does the camera believe, what does the visible subset believe about the team centroid, and what will the downstream metric believe about the hidden zone?” The camera operator attends to the ball; the visible players are a biased sample of the team; each visible player’s role offset is a belief about its displacement from the team centroid; B4 aggregates those beliefs into a voted centroid, then reuses the same offsets to place hidden players. This is a recursive belief update with a quorum: below three offset-bearing voters, the system falls back to a simpler belief (B2), then to last-seen (B1) [PAGE 5]. The recursion is useful only while role offsets are stable and the visible voters are conditionally representative; otherwise the system can become confidently wrong.

Crisis habit regression. Under the hardest observation regime—narrow viewport, long occlusion—the pipeline’s habit is to regress to B0 or B1: either ignore the hidden players or hold their last positions. That habit is operationally simple and superficially “honest,” but it systematically cedes the hidden half of the pitch to the visible team. The paper’s opening image is exact: “the team whose defenders sit off-screen silently cedes control of the hidden half of the pitch” [PAGE 1]. The numbers show the habit is worst precisely when observation is poorest: at \(W=36\) m, B0 share error is 13.7–15.3 pp; at \(W=60\) m it is 8.1–10.1 pp [PAGE 6]. Crisis habit regression is therefore not a neutral default; it is a biased prior.

Counter-trap. The opposite failure is to treat imputed ghosts as verified identities. B4-inspired ghosts in the real pipeline fade over a 20 s lifetime, top the team up to eleven players, and are retired when a new track appears within 3 m of the prediction [PAGE 8]. Those are sensible operational heuristics, but they are not identity verification. The paper is explicit that the broadcast case study is a sensitivity result, not an accuracy claim: “Absent full-pitch ground truth for broadcast footage we make no claim that the imputed scores are more accurate” [PAGE 8]. Visible-only verdicts move by “15.6–17.2 SCI points,” enough to flip one window from “dead junk” to “weak progression” [PAGE 8]. The counter-trap is to read that flip as truth rather than as evidence that the verdict is framing-sensitive.

Clock. The clock has two meanings. First, causal time: B4 uses no future observations; the Graph Imputer’s 9.6 s bidirectional windows are a different protocol [PAGE 2, 7]. Second, occlusion duration: B4’s median position error is 3.3–8.9 m for gaps \(\le 9.6\) s but 15.6–16.9 m beyond 9.6 s, and 50–57% of hidden samples lie beyond that boundary [PAGE 7]. The match clock also matters in the case study: window 1 spans 11:58–12:32 and window 2 spans 72:48–73:45 [PAGE 8]. A correct recursive theory of mind must therefore propagate three things together: the camera’s attentional bias, the imputer’s role-based belief, and the downstream consumer’s verdict clock. The paper supplies the first two and a sensitivity check on the third; it does not supply calibrated uncertainty, which is the missing recursive layer.

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical veto. For any imputed ghost trajectory \(\hat p_j(t_k)\), define discrete speed and acceleration:
\[
v_k=\frac{\|\hat p_j(t_k)-\hat p_j(t_{k-1})\|}{t_k-t_{k-1}},\qquad
a_k=\frac{\|v_k-v_{k-1}\|}{t_k-t_{k-1}}.
\]
A conservative physical veto is
\[
V_{\mathrm{phys}}(j,t_k)=\mathbf{1}\{v_k\le v_{\max},\ a_k\le a_{\max},\ \hat p_j(t_k)\in\mathcal P\},
\]
where \(\mathcal P\) is the pitch polygon in metres. The constants \(v_{\max}\) and \(a_{\max}\) are sport-science bounds, not values calibrated in the source; they should be set conservatively and reported with abstention rates. The necessity is structural: B4 has no velocity state, and its ghost position is \(\hat c(t)+off_j\). If the voter set changes—say a wide player enters and the voted centroid jumps by \(\delta\)—the ghost jumps by \(\delta\) even if the true player is stationary. The paper’s B3/B3V variants add velocity extrapolation, but B4 itself does not [PAGE 4–5]. A kinematic veto is therefore not redundant; it catches exactly the centroid-jump failure mode that role anchoring can create.

Biomechanical layer. Human locomotion limits rule out teleportation and extreme direction reversals within short \(\Delta t\). The veto should be applied to the ghost’s path, not to the underlying visible track, because the ghost is a synthetic composition of team centroid and stored role offset. If the ghost violates \(v_{\max}\) or \(a_{\max}\), the correct adjudication is not to “smooth it” silently but to mark the frame uncertain, fall back to B1/B2, or exclude the ghost from the downstream SCI. This is consistent with the paper’s fallback architecture: B4 already falls back when the voter quorum is insufficient [PAGE 5].

Weather/calibration layer. The source contains no weather variable and no calibration-residual veto. Real broadcast calibration can drift with camera motion, occlusion, and lighting; rain, snow, and wind can degrade ball detection and tracking. A cross-layer veto should therefore include
\[
V_{\mathrm{calib}}=\mathbf{1}\{e_{\mathrm{calib}}\le \epsilon_{\mathrm{calib}}\},\qquad
V_{\mathrm{vis}}=\mathbf{1}\{q_{\mathrm{track}}\ge q_{\min}\},
\]
where \(e_{\mathrm{calib}}\) is a calibration residual and \(q_{\mathrm{track}}\) a track-quality score. If either fails, the pipeline should abstain from spatial verdicts or widen uncertainty; it should not let a calibration shift become a ghost shift. The paper’s own limitations support this: the simulated viewport “does not zoom or tilt” [PAGE 9], control is velocity-free [PAGE 3], and real GSR has track fragmentation and incomplete jersey OCR [PAGE 8]. The cross-layer proof is therefore a proof of necessity, not of sufficiency: physical, biomechanical, and calibration vetoes can catch some catastrophic ghosts, but the source does not provide the weather/calibration data needed to validate them empirically.

<RLVR_COUNTERFACTUAL_VETOES>
Each scenario is a verifiable reward/veto: run the counterfactual on the open benchmark, compare the pre-registered metric direction, and veto the claim if the direction fails.

1. Offset-permutation null. Counterfactual: keep B4’s centroid-voting arithmetic but permute \(off_i\) across teammates before the vote and before imputation, destroying role identity while preserving offset magnitudes. Prediction: if role anchoring is causal, hidden-zone MAE should degrade from B4’s 12.2–13.8 pp toward B2’s 14.3–15.7 pp or worse; median position error should rise from 9.7–11.6 m toward B2’s 12.5–13.6 m; share error should rise from 4.5–4.7 pp toward 4.4–6.2 pp. If performance is unchanged, B4’s gain is from centroid averaging, not role information, and the “role-anchored” claim is vetoed.

2. Causal-leakage oracle. Counterfactual: give B4 future observations inside a 9.6 s window, mimicking the Graph Imputer protocol [PAGE 2, 7], while keeping the same benchmark and metrics. Prediction: the largest improvement should appear in the \(\le 9.6\) s occlusion bin, where B4 already reaches 3.3–8.9 m median error; the \(>9.6\) s bin should remain near 15.6–16.9 m unless the model class, not causality, is the binding limit. If long-occlusion error collapses under oracle future, the online constraint is doing real damage and the training-free floor is not a fair causal floor; if short-occlusion error does not improve, the prior work’s protocol advantage is not primarily temporal context. Either direction is a verifiable veto on a strong causal interpretation.

3. Zoom/tilt plus calibration-noise veto. Counterfactual: extend the simulator beyond pan-only to include zoom/tilt and inject calibration noise, then apply the physical and calibration vetoes above. Prediction: under mild noise, B4’s 28–48% share-error advantage over B0 at \(W=44\) m should persist; under severe noise, the veto/abstention rate should rise and the advantage should shrink, especially at \(W