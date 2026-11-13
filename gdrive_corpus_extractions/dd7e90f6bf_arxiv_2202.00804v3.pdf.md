---
source: "arxiv_2202.00804v3.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 21
model: deepseek/deepseek-v4.1-flash-1017
words: 7210
---

<NATIVE_REASONING>
We need answer user. Need synthesize source. They want GSE + GSI Frontier Reasoning Foundry with XML sections exact, >=1000 words depth, zero betting lines, formal equations, cite PAGE markers and verbatim quotes, assumptions, singularity breakdown. Need derive from source. Need likely produce deep multi-hop derivation, source operators/equations. This is about automatic event detection football tracking. Need not mention spreads/totals/moneylines/odds. No betting. Need provide >=1000 words across XML. Need maybe include equations: possession zone radius, duel zone, control frame, loss conditions, gain condition, shot/save decision variables, set piece triggers. Cite exact [PAGE N] and verbatim quotes. Need page references. Need maybe define SI units: m, s, Hz, angles, speed m/s, displacement m. Information/probability units? The paper deterministic, no probabilities except precision/recall percentages. We can state no probability calibrated. Could use indicator functions with dimensions dimensionless. Avoid toy equations fake ratios. Formal equations derived from text. Need exact singularity/breakdown regimes: dead ball/no ball data, z absent, occlusion, player swaps, hyperparameters, set piece ambiguities, last-minute goal uncertainty, free kick lacks trigger, etc.

Need structure exactly sections:
<THINK_TRACE> >=400 words deep multi-hop derivation & gray-zone audit
<SOURCE_OPERATORS_AND_EQUATIONS> formal LaTeX units page citations breakdown
<RETROCAUSAL_GENEALOGY> historical/scientific lineage & multi-week traps
<RECURSIVE_THEORY_OF_MIND> crisis habit regression vs counter-trap vs clock
<CROSS_LAYER_VETO_ADJUDICATION> physical/biomechanical/weather veto proof
<RLVR_COUNTERFACTUAL_VETOES> 3 verifiable RLVR veto scenarios + predictions.

Need align with source? "DRIVE SOURCE" maybe they expect analysis of PDF. We can use source as evidence. Need no betting lines. Need not discuss sports betting despite source mentions sports-betting in page 2; avoid. Need perhaps mention source says event data used for sports-betting but we omit due invariant. We can cite as no betting.

Need maybe "GSE + GSI Frontier" maybe wants answer in this XML. Need include word depth. We should produce substantial. Need not overdo but >1000 words. Desired oververbosity 5. Need exact XML sections perhaps no markdown outside. Need valid? Use XML-like tags with prose. Need include LaTeX in text. Fine.

Need ensure >=400 words in THINK_TRACE. Total >1000. Need cite each section with [PAGE N] and verbatim quotes. Use exact quotes from source. We need quote precise. Let's collect relevant verbatim quotes.

Page 1 abstract: "we propose a deterministic decision tree-based algorithm to automatically extract football events using tracking data" and "possession step..." "in most event categories the proposed methodology achieves +90% detection rate across different tournaments and tracking data providers." [PAGE 1]
Page 3: "a football match at 25 Hz contains roughly 3 million tracking data points, compared to 3K events." [PAGE 3] "deterministic decision tree-based algorithm that evaluates the changes in distance between the ball and the players to generate in-game events" [PAGE 3]
Page 4: two-step algorithm. [PAGE 4] quote "The first step is determining ball possession, which is the backbone..." "deterministic decision tree based on the Laws of the Game [54]..."
Page 5: output attributes, ball control values, event names. [PAGE 5] quotes.
Page 6: PZ DZ definitions, "radius Rpz" "Rdz ≥ Rpz"; "If both possession and duel conditions are triggered, the duel condition prevails." "control frame" "Savitzky-Golay filter ... second-order polynomial and a window of seven frames ... 0.25 s" [PAGE 6]
Page 7: loss conditions and gain condition. Quote "Player A loses possession at control frame f if..." and "d0_f0 · d1_fn < εθ" and "|v0_fi − v1_fi| > εv" and "if the ball has either changed direction or speed ... possession gain occurs at f0" [PAGE 7]
Page 8: set piece triggers quote: kickoff "all players are within their own halves (with a tolerance of εk1) and there is at least one player within εk2 of the center mark" etc. [PAGE 8]
Page 9: set piece events; quote "we examine if any of the set piece triggers are activated from an arbitrary intermediate frame d1 (d0 ≤ d1 ≤ dc) until the last dead ball frame dc, hereafter referred to as complete triggers." and "If none of the patterns are satisfied, the algorithm will assume a free kick as a default option." [PAGE 9]
Page 10: shots and saves definitions; quote "We define a shooting event as a possession loss by a player of the attacking team that is succeeded by a goal, a corner kick, a goal kick or a save." "saving event as a possession gain by the goalkeeper..." "blocked shots are not encompassed..." [PAGE 10]
Page 11: cross conditions; quote "origin in the cross zone, the next player in control (attacking or defending) needs to be within the active penalty area and there should be at least one attacking player in the active penalty area." [PAGE 11]
Page 12: hyperparameters chosen: "50 cm for provider A and 1 m for both provider B and provider C, whereas the radius of the duel zone were taken to be Rdz = 1 m for all providers" "mean computational wall time ... three minutes" [PAGE 12]
Page 12-13 precision/recall. Quote "supra 90% precision and recall in detecting passes" [PAGE 12] "shot precision was higher than recall (78 vs 53)" [PAGE 12]. Set piece "perfectly capture kickoffs and penalty kicks" [PAGE 12] "free kicks, which hold no specific pattern..." [PAGE 13]. Goals six mistakes. [PAGE 14]
Page 16 discussion "main limitation ... ball tracking data needs to be available" "absence of in-play/dead information" [PAGE 16].
Page 17 improvements and errors. [PAGE 17]
Need exact page citations for all.

Need write THINK_TRACE deep derivation: source is deterministic pipeline. Multi-hop: raw coordinates 25 Hz -> control frame via PZ/DZ -> loss/gain with thresholds -> event labels using laws -> validation. Need audit gray zones: R_pz/R_dz overlap, occlusion, no z, dead ball, free kick default, goal? uncertainty, kickoff repeat.

Need maybe formal operators:
Let \(\mathbf{x}_{p,t}=(x_{p,t},y_{p,t})\), \(\mathbf{x}_{b,t}\) in m. Sampled \(f_s=25\,Hz\), \(\Delta t=0.04\,s\). Distance \(r_{p,t}=\|\mathbf{x}_{b,t}-\mathbf{x}_{p,t}\|_2\) m. PZ indicator \(P_{p,t}=\mathbf{1}[r_{p,t}\le R_{pz}]\). DZ condition \(D_t=\mathbf{1}[\exists \text{ at least two opponents with } r_{p,t}\le R_{dz}]\)? The paper says DZ circular area around ball, such that if at least two opponents are within DZ. Need formal: \(D_t = 1[\#\{p: \|\mathbf{x}_{p,t}-\mathbf{x}_{b,t}\| \le R_{dz}\}\ge 2]\) maybe "at least two opponents" means two players of opposing teams? They say "if at least two opponents are within the DZ" might mean at least two opposing players? Actually "if at least two opponents are within the DZ, then we deem there is a duel situation." Could formalize at least two opposing players. Need note ambiguity: source doesn't define whether same team. But use as quote.

Control frame \(C_t = 1[P_t \lor D_t]\); if both, duel prevails. That's not equation? \(B_t \in \{dead, no possession, possession, duel\}\). Good.

Loss: at frame f for A, \(L_A(f) = 1[ r_{A,f+1}>R_{pz} \land \Delta s_f>\epsilon_s \land A \notin \mathcal{C}_{f_c}]\) where \(f_c>f\) first subsequent control frame. Note condition 2 "player A is not present on subsequent control frame fc > f where there is either possession or duel". Need formal. \(\Delta s_f = \|\mathbf{x}_{b,f+1}-\mathbf{x}_{b,f}\|\) m. But in source Fig 3a implies \(\Delta s_f = \|d^1_f\|\) maybe. Use as derived.

Gain: For control sequence \(f_0,...,f_n\) same player; \(G(f_0)=1[ \mathbf{d}^0_{f_0}\cdot \mathbf{d}^1_{f_n}<\epsilon_\theta \lor \exists i: |v^0_{f_i}-v^1_{f_i}|>\epsilon_v]\). Units: dot product of unit direction vectors? If d are direction vectors, dot dimensionless if unit. Source says direction vector. We can normalize. \(\epsilon_\theta\) dimensionless; speeds m/s; \(\epsilon_v\) m/s. Need mention source does not provide numeric epsilon values. We can call hyperparameters with units. No fake ratios.

Shot: \(S_{\text{shot}} = L_A(f) \land (goal \lor corner \lor goal kick \lor save)\). Save: \(G_{GK}(f) \land\) inside penalty area \(\land\) preceded by shot. Need formal indicator.

Set piece triggers formal with spatial predicates. Need maybe use \(\mathcal{P}\) player set, \(H\) own half, center mark etc. Don't need exact numeric laws except 9.15 m from penalty mark, penalty area. Cite page 8.

Set piece detection: complete trigger from d0 to dc. Tie hierarchy page 9 Fig 5. Default free kick. Good.

Precision/recall: formal \(P=TP/(TP+FP)\), \(R=TP/(TP+FN)\) dimensionless; source reports percentages. This is not fake. Cite page 12-13. Need avoid "odds".

Need CROSS_LAYER_VETO_ADJUDICATION physical/biomechanical/weather veto proof. Need connect to source: physical layer: 2D tracking, z missing, ball speed/direction, occlusion; biomechanical: limb tracking absent, center of mass; weather: not modeled. Need veto proof: if ball z absent, goal/crossbar cannot be adjudicated, last-minute goal? requires z. If weather affects ball trajectory? Not in source, so cannot prove. We should state no weather variable in source; therefore weather veto cannot be justified from source. But section should adjudicate: "Physical/biomechanical/weather veto proof" maybe they want a veto of model claims if physical constraints. Need write: The paper's physical layer is explicitly 2D, no z for all datasets; "Since the z-coordinate of the ball is not available for all datasets, we only use 2D ball information." [PAGE 3]. Thus any cross-layer claim requiring vertical ball state is vetoed. Biomechanical: no limb tracking, center-of-mass; events like tackles/duels not detected per page 5 and improvements page 17. Weather: not mentioned; cannot invoke. The veto proof is that source's deterministic rules are valid only under tracked ball/player coordinates and dead-ball boolean/absence; missing ball data or in-play/dead boolean is limitation [PAGE 16]. Good.

Need RECURSIVE_THEORY_OF_MIND: "Crisis habit regression vs counter-trap vs clock." Need interpret in context: crisis habit regression = analysts default to manual subjective event data? Counter-trap = auto-event false positives when ball near players but no touch, or default free kick; clock = timing/dead ball intervals, timestamp errors. Need discuss recursive model of analyst/system beliefs: algorithm assumes changes in direction/speed imply touch, but a player may not touch; manual annotator assumes event definitions; both can misattribute. "counter-trap" maybe avoid overfitting to manual benchmarks that are themselves imperfect. "clock" dead ball intervals, 25 Hz, 0.25 s smoothing, last-minute goals, repeated kickoffs. Need tie to source. Need citations. Maybe say theory of mind: in crisis, system regresses to default free kick when no pattern satisfied [PAGE 9] or classifies blocked shots as passes [PAGE 10,12]; counter-trap is to treat precision/recall as ground truth despite manual errors [PAGE 12]; clock trap is timestamp/period-end ambiguity and kickoff repetition [PAGE 9]. Need recursive: model of annotator, model of referee, model of players. Good.

Need RETROCAUSAL_GENEALOGY: historical/scientific lineage & multi-week traps. Describe lineage from manual event data Opta/StatsPerform, video event detection, tracking EPTS, optical systems, MIT Sports Lab/FIFA, laws of game. Multi-week traps: tuning hyperparameters per provider, cross-validation, z-coordinate, broadcast tracking, limb tracking. Need cite pages 2,3,17. "multi-week traps" maybe research traps over weeks: overfitting to one provider, ignoring manual annotation errors, assuming free kick pattern, dead-ball boolean. Need mention 2022 arXiv v3. Maybe not too much.

Need RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. Need "RLVR" maybe Reinforcement Learning with Verifiable Rewards? Need propose counterfactual scenarios that if observed veto model. Must be verifiable. Could be:
1. Ball crosses above crossbar but 2D projection crosses goal line; model labels goal? Page 14 says last-minute goal incorrectly detected for shot above crossbar could be corrected with z. Prediction: with only 2D, goal? false positive for above-crossbar shot; if z provided, veto. Test: sample with z ball below/above crossbar; expected label change.
2. Player near ball but no touch: ball trajectory and speed unchanged; algorithm no gain (false positive filtered) vs if hyperparameters too loose. Counterfactual: if \(\epsilon_\theta,\epsilon_v\) set to zero? Actually predict no possession gain when direction and speed unchanged. If model labels gain despite no change, veto. Use page 7 quote.
3. Set piece ambiguous near corner: throw-in close to corner mark wrongfully classified as corner kick [PAGE 10], or free kick near sideline as throw-in. Counterfactual: inject corner/sideline ambiguity; if source claims +90 all categories, prediction corner/throw-in confusion; verifiable by confusion matrix page 13. Need maybe predictions with precision/recall numbers? We can predict failure. Use no betting.

Could include 3 scenarios with explicit predictions:
- z-coordinate counterfactual: Add z; if ball above crossbar at goal line, source labels goal? in 2D; with z, should not. Veto if 2D-only claims all goals. Prediction: last-minute above-crossbar false goal (source page 14).
- occlusion/swapped players: If track swaps or ball missing after assist, goalscorer misidentified (source page 14: "ball goes missing after the assist was made (3) and the data reflects an inaccurate situation (3)"). Prediction: identity error not event existence. Veto any player-level attribution without QA.
- broadcast/tactical camera lower quality: Source says can be applied by augmenting PZ and tuning hyperparameters [PAGE 16-17], but if PZ enlarged, possession/duel boundary shifts; prediction: false possession and lost event precision. Need verifiable via re-run on lower-quality data. But to be "RLVR" maybe use reward verification: label correctness after perturbation. Good.

Need include "exact singularity/breakdown regimes" in SOURCE_OPERATORS_AND_EQUATIONS. Need list:
- \(r_{p,t}=0\)? Ball exactly on player? Not singularity in equations except direction vector undefined. Ah direction vector \(d^0,d^1\) is undefined when displacement zero (ball stationary). Dot product and speed finite differences singular/zero. Source handles static ball? Loss condition checks displacement threshold; gain requires change; but if \(\Delta s=0\), direction undefined. That's exact singularity. Mention: direction vector undefined for zero displacement, so dot-product test needs epsilon or skip. Good.
- \(R_{dz}=R_{pz}\) boundary; tie duel prevails. Non-differentiable discrete switches.
- No ball data -> dead ball assumption for Track160/Hawk-Eye [PAGE 3], but if ball data missing in-play, dead ball false.
- Missing z -> cannot resolve above crossbar.
- Set piece trigger overlap -> tie hierarchy; default free kick.
- Any temporal frame boundary f+1 beyond data, f-1 first frame -> finite difference undefined. Need edge frames.

Need "information/probability units": precision/recall dimensionless percentages; event counts; information? maybe not need. But user says "SI/information/probability units" in invariants. Include \(f_s=25\,\mathrm{Hz}\), \(\Delta t=0.04\,\mathrm{s}\), distances m, speeds m/s, angles dimensionless via dot product. For information maybe event data size: "roughly 3 million tracking data points, compared to 3K events" [PAGE 3]; can mention compression ratio? That is a ratio but not fake; source gives explicit comparison. But avoid toy equations. Could say information density: raw tracking \(N_t \approx 25 \times 90 \times 60 \approx 135000\) frames per match per stream? Actually per player and frame; page says 3 million points. Use source quote. Not need derive ratio. Probability: precision/recall. No calibrated probabilities. Deterministic labels are indicator variables. Good.

Need maybe mention "we do not benchmark player possession data as this is not currently collected by event data providers" [PAGE 12]. Important gray-zone: possession is unvalidated directly. Include.

Need answer likely as a single XML block. Need ensure tags not nested? Use exact section tags. We can use LaTeX inside. Need no markdown? XML text can include LaTeX with < >? Avoid raw < in equations because XML tag confusion? The response isn't parsed? But to be safe use \(\le\) not <. But we may use `<` in LaTeX. It's okay? Could use \(\lt\)? Better use \le, \ge. Avoid raw ampersand? Use "and". Use escaped? Not necessary maybe. But exact XML sections with text. Use no unescaped `<`. In LaTeX, `<` might be interpreted as tag. Use \lt or \le. Use \( \epsilon_\theta \). Fine.

Need include verbatim quotes with quotes. Quotes contain plus sign, percentages. Fine. Avoid raw &? No.

Need word count. We can write ~1800-2500 words. Let's draft carefully.

Need "GSE + GSI Frontier Reasoning Foundry" maybe mention in opening? No need. Ensure no betting. Source has "sports-betting" but we won't mention. If quoting page 2 includes? Avoid. Good.

Let's outline sections.

THINK_TRACE (>=400 words):
- Start: source is deterministic two-stage algorithm. Deep multi-hop:
  1 raw tracking at 25 Hz gives coordinates x,y per player/ball. 2 define r. 3 PZ/DZ to label control frames. 4 segment control intervals. 5 detect losses/gains using displacement/direction/speed thresholds. 6 map to events by laws: shots/saves/passes/crosses; set piece triggers and patterns. 7 benchmark with STS manual event data.
- Gray-zone audit: PZ/DZ thresholds not universal; provider-specific radii 50 cm vs 1 m; duel prevails; control frame only when possession/duel. Possession not benchmarked. Loss/gain use no z, so touch inference based on direction/speed; false positives filtered only if both unchanged. Set pieces lack free kick trigger; default. Kickoff repeat logic. Goal? uncertainty. Manual annotations imperfect; precision/recall can never be 100. Limitations: ball data required, in-play/dead boolean critical. Therefore any claim beyond 2D tracking and rule-based event classes is a category error. Compare timestamp etc.
- Need mention page quotes. Good.

SOURCE_OPERATORS_AND_EQUATIONS:
- Define variables.
- Equations with units and citations. Use blocks.
- Loss, gain, shot/save, cross, set pieces, precision/recall.
- Breakdown regimes. Include singularity.
- Quotes.

RETROCAUSAL_GENEALOGY:
- lineage: manual event data (Opta/StatsPerform) -> video event detection -> optical EPTS tracking -> FIFA/MIT deterministic auto-eventing. Source claims first tracking auto-eventing. Multi-week traps: provider-specific calibration, manual annotation noise, missing z, free kick default, dead-ball boolean, player occlusion. Need cite pages 2,3,17.

RECURSIVE_THEORY_OF_MIND:
- model of annotator, referee, player. Crisis habit regression: default free kick, blocked shot as pass, manual event data reliance. Counter-trap: treating >90% as universal; must segment by event and provider; cannot benchmark possession. Clock: 25 Hz, smoothing 0.25 s, dead ball intervals, last-minute goals, repeated kickoffs, timestamp errors. Need cite pages 6,9,10,12,13,14. Write.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical: 2D only; no z; ball tracking required; occlusion. Veto claims on aerial/goal/crossbar/throw-in height. Biomechanical: center-of-mass only; no limb; cannot detect tackles/duels/body part. Weather: no weather variables in source; no veto proof possible; if weather changes ball trajectory, the speed/direction gain rule may misattribute. But source doesn't model. Need say "weather cannot be adjudicated from source; absence of evidence is not proof." Cite relevant pages 3,5,16-17.
- Veto proof: any model assertion requiring unobserved z, limb, referee pose, audio whistle is vetoed by source's own limitation list. Good.

RLVR_COUNTERFACTUAL_VETOES:
- 3 scenarios:
1 above-crossbar 2D goal: Add z, test. Prediction: 2D-only labels goal?; z-corrected veto. Source page 14 quote. Verifiable.
2 unchanged trajectory near player: if d and v unchanged, no gain. Inject player near ball with constant speed/direction. Prediction: no possession gain; if gain, veto. Source page 7.
3 corner/sideline ambiguity: place throw-in near corner or free kick near sideline. Prediction: corner kick misclassification or throw-in misclassification; source page 10 lists. Verifiable by confusion matrix. Need maybe use "RLVR" verification: label reward based on ground truth; counterfactual must change label. Include expected rewards? No need. Could mention predictions precision/recall. Good.

Need include at least one exact quote per section? Invariants say when source pages provided, cite exact [PAGE N] markers and verbatim quotes. Probably each section should have at least one. We'll include.

Need avoid "betting lines". We can mention "we do not discuss any wagering or line-setting." But maybe no need. Avoid word odds. We can mention "no betting-related inference is used" but not necessary. The source mentions sports-betting on page 2; we won't quote.

Need answer with XML only. Use no markdown headers outside. Need maybe "THINK_TRACE" includes "GSE/GSI" no.

Need ensure word count >1000. Let's estimate. THINK_TRACE ~500. SOURCE ~700. Others ~300 each total ~2000. Good.

Need maybe include exact "verbatim quotes" with quotes. Use "..." exact. Ensure quote exact from source. Check exact wording:
Page 1: "we propose a deterministic decision tree-based algorithm to automatically extract football events using tracking data" exact. Good.
Page 3: "a football match at 25 Hz contains roughly 3 million tracking data points, compared to 3K events." exact? It says "–a football match at 25 Hz contains roughly 3 million tracking data points, compared to 3K events." We can quote substring.
Page 6: "If both possession and duel conditions are triggered, the duel condition prevails." exact. "Savitzky-Golay filter" maybe quote.
Page 7: "Player A loses possession at control frame f if the following conditions are both satisfied" exact. "if the ball has either changed direction or speed during a given control sequence [f0, fn] involving the same player, then a possession gain occurs at f0" exact maybe. Good.
Page 8: "all players are within their own halves (with a tolerance of ϵk1) and there is at least one player within ϵk2 of the center mark" exact. Need use ε not ϵ? Source uses ϵ. Use "ϵk1" maybe. Good.
Page 9: "If none of the patterns are satisfied, the algorithm will assume a free kick as a default option." exact.
Page 10: "We define a shooting event as a possession loss by a player of the attacking team that is succeeded by a goal, a corner kick, a goal kick or a save." exact. "blocked shots are not encompassed in these definitions" exact? Source: "Note that blocked shots are not encompassed in these definitions". Good.
Page 12: "The chosen possession zone radii were 50 cm for provider A and 1 m for both provider B and provider C, whereas the radius of the duel zone were taken to be Rdz = 1 m for all providers" exact. "mean computational wall time to execute the possession and event detection algorithm for a 90 minute match was three minutes." exact? Says "the mean computational wall time ... was three minutes." Good.
Page 12: "supra 90% precision and recall in detecting passes" exact. Page 13: "free kicks, which hold no specific pattern and were selected if no other spatial configuration was detected" exact? Source: "Finally, the worse results were for free kicks, which hold no speciﬁc pattern and were selected if no other spatial conﬁguration was detected, as explained in Fig. 5." Use without ligature. Good.
Page 14: "The incorrectly detected last-minute goal corresponded to a shot that went above the crossbar, which could be corrected with the ball z-coordinate." exact.
Page 16: "The main limitation of the algorithm is that ball tracking data needs to be available" exact. "The other limitation is the absence of in-play/dead information, which is critical for set piece detection." exact.
Page 17: "incorporating the z-coordinate of the ball" exact. "broadcast/tactical footage" maybe.

Need page citations [PAGE 1], etc. Use exact.

Need formal LaTeX. Be careful with XML: use \(...\) and \[...\]. The `<` in LaTeX? Use \lt. In text "f+1" no issue. Ampersand? Avoid.

Could include "indicator \(\mathbf{1}\)" no issue. Use \left\{ ... \right\}. Fine.

Need maybe not use raw `&` in align. Use `\begin{aligned}` no &. But in LaTeX align needs &; could avoid multi-line with separate equations. Or use `\begin{aligned}` with no alignment maybe. Use separate displays. Ampersand is XML special, avoid. Use `\quad`. Good.

Need "SI/information/probability units" — include a "Units ledger". Good.

Let's draft.

Need answer length. We can produce ~2200 words. Let's write robustly.

Potential issue: XML section tags with text containing `>`? LaTeX maybe `\ge` not >. Use words. Fine.

Need mention "No betting lines" not. 

Let's compose.

Start:

<THINK_TRACE>
... 
</THINK_TRACE>

Need >=400 words. We'll write 5 paragraphs.

Let's ensure not too terse. Include multi-hop derivation and audit.

Then source section with equations.

Let's craft formal equations:

Variables:
\( \mathbf{r}_{p,t}=(x_{p,t},y_{p,t}) \), \( \mathbf{b}_t=(x_{b,t},y_{b,t}) \), \(r_{p,t}=\|\mathbf{b}_t-\mathbf{r}_{p,t}\|_2\ \mathrm{m}\).
\(f_s=25\ \mathrm{Hz}\), \(\Delta t=1/f_s=0.04\ \mathrm{s}\).

PZ: \(\mathrm{PZ}_{p,t}=\mathbf{1}\{r_{p,t}\le R_{pz}\}\). DZ: \(\mathrm{DZ}_t=\mathbf{1}\{\#\{p\in\mathcal{P}: \|\mathbf{b}_t-\mathbf{r}_{p,t}\|\le R_{dz}\}\ge 2\}\). Source says "at least two opponents" so maybe \(\#\{p\in\mathcal{P}_{opp}\}\ge2\). But formalizing both? Use \(\mathcal{P}_{opp}\). Good.

Control frame: \(C_t = \mathbf{1}\{\mathrm{PZ}_t \lor \mathrm{DZ}_t\}\). If both, label duel. \(b_t^{control}\in\{\mathrm{dead},\mathrm{no\ possession},\mathrm{possession},\mathrm{duel}\}\).

Loss:
\[
L_A(f)= \mathbf{1}\{ r_{A,f+1}>R_{pz},\ \Delta s_f>\epsilon_s,\ A\notin\mathcal{C}(f_c),\ f_c>f\}
\]
where \(f_c\) first subsequent control frame, \(\Delta s_f=\|\mathbf{b}_{f+1}-\mathbf{b}_f\|_2\) m, \(\epsilon_s\) m. Need condition "where there is either possession or duel" and A not present. Good.

Gain:
Direction unit \( \hat{\mathbf{d}}^0_{f_0} = (\mathbf{b}_{f_0}-\mathbf{b}_{f_0-1})/\|\cdot\| \), \( \hat{\mathbf{d}}^1_{f_n} = (\mathbf{b}_{f_n+1}-\mathbf{b}_{f_n})/\|\cdot\| \). Dot product dimensionless. Speeds \(v^0_{f_i} = \|\mathbf{b}_{f_i}-\mathbf{b}_{f_i-1}\|/\Delta t\), etc. Gain:
\[
G_A(f_0) = \mathbf{1}\{ \hat{\mathbf{d}}^0_{f_0}\cdot\hat{\mathbf{d}}^1_{f_n}<\epsilon_\theta \ \lor\ \exists i\in[0,n]: |v^0_{f_i}-v^1_{f_i}|>\epsilon_v \}
\]
source uses \(d^0_{f0}\cdot d^1_{fn}<\epsilon_\theta\). Good.

Shot:
\[
S_A(f)=\mathbf{1}\{ L_A(f)=1 \land ( \mathrm{goal}\lor\mathrm{corner}\lor\mathrm{goal\ kick}\lor\mathrm{save}) \}
\]
Save:
\[
V_{GK}(f)=\mathbf{1}\{ G_{GK}(f)=1 \land \mathbf{r}_{GK,f}\in \mathrm{penalty\ area} \land \exists f'<f: S_A(f')=1 \}
\]
Cross:
\[
X_A(f)=\mathbf{1}\{ L_A(f)=1 \land \mathbf{b}_f\in \mathrm{cross\ zone} \land \mathbf{r}_{next,f_c}\in \mathrm{active\ penalty\ area} \land N_{att,active\ PA}\ge1 \}
\]
Need source says next player in control within active penalty area, at least one attacking player. Good.

Set piece trigger: use generic predicate \(T_s(d_0,d_c)=\mathbf{1}\{\exists d_1\in[d_0,d_c]: \mathrm{trigger}_s(d_1)=1\}\) and pattern \(P_s=\mathbf{1}\{\mathbf{r}_{executor,d_c+1}\in \mathrm{pattern\ zone}_s \land r_{executor,b,d_c+1}\le R_{pz}\}\). If multiple triggers, hierarchy; if no pattern, free kick default. Good.

Benchmark \(P=TP/(TP+FP)\), \(R=TP/(TP+FN)\) dimensionless. Cite.

Breakdown regimes:
- edge frames: \(f-1\) or \(f+1\) undefined; direction/speed undefined when \(\Delta s=0\); dot product requires nonzero displacement.
- \(R_{dz}=R_{pz}\), overlap; duel prevails discrete tie.
- missing ball -> dead ball assumption; missing ball in-play false dead.
- missing z -> above crossbar, throw-in height.
- occlusion/player swaps -> identity errors.
- set piece ambiguities and default free kick.
- manual annotations imperfect.
- hyperparameters provider-specific.
Need include page citations.

Need "information units": tracking data volume quote. "3 million tracking data points vs 3K events" [PAGE 3]. Good.

Need maybe "probability" not calibrated: precision/recall are empirical frequencies, not probabilities. Good.

Now other sections.

RETROCAUSAL_GENEALOGY: write ~300 words. Mention historical: manual Opta at end 20th century [PAGE 2]; video event detection goals/shots/cards [PAGE 2]; optical EPTS [PAGE 2]; first attempt tracking auto-event [PAGE 3]. Multi-week traps: provider A/B/C, hyperparameters, manual annotation 10-15% differences [PAGE 2]. Quote: "there may be substantial tagging differences (10-15%) among analysts" [PAGE 2]. That's a verbatim? Source: "hence there may be substantial tagging diﬀerences (10-15%) among analysts". Need spell differences. Use exact? We can quote with [sic]? Use "tagging differences (10-15%) among analysts" maybe exact except ligature. Good.

RECURSIVE_THEORY_OF_MIND: ~350 words. Crisis habit regression: when no pattern, default free kick. Counter-trap: blocked shots labeled passes, saves after deflection labeled pass+reception. Clock: 25 Hz, 0.25 s filter, dead ball intervals, period-end. Need quote "If none of the patterns are satisfied..." and "blocked shots..." and "last-minute goals". Good.

CROSS_LAYER_VETO_ADJUDICATION: ~300 words. Physical, biomechanical, weather. Quote page 3 "Since the z-coordinate of the ball is not available for all datasets, we only use 2D ball information." Exact? Source: "Since the z-coordinate of the ball is not available for all datasets, we only use 2D ball information." Yes. Page 16 limitations. Biomechanical: page 5 "Additional data streams, such as the z-coordinate of the ball, player limb tracking or video, may be leveraged to expand the automatically detectable events, for instance tackles, air/ground duels or dribbles." Exact? Source: "Additional data streams, such as the z-coordinate of the ball, player limb tracking or video, may be leveraged to expand the automatically detectable events, for instance tackles, air/ground duels or dribbles." Good. Weather no mention; state cannot adjudicate. Maybe source doesn't discuss weather; absence. Good.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios. Need cite. Write each with "Veto: ... Prediction: ...". Make verifiable.

Need ensure no "betting" term. Fine.

Let's now write final.
</NATIVE_REASONING>

<THINK_TRACE>
The source is not a probabilistic black-box model; it is a deterministic, rule-based pipeline whose causal chain runs from raw 2D tracking coordinates to possession labels, then to discrete event labels, then to set-piece labels, and finally to benchmark comparison against manually annotated events. The first multi-hop derivation is therefore: tracking data at 25 Hz gives player and ball positions in metres [PAGE 3]; the algorithm computes ball-to-player distances; a possession zone radius \(R_{pz}\) and a duel zone radius \(R_{dz}\) transform those distances into frame-level control states; loss and gain rules transform control-state changes into possession transitions; the Laws of the Game and spatial predicates transform those transitions into passes, crosses, shots, saves, receptions, interceptions, and set pieces. The paper states the design directly: “we propose a deterministic decision tree-based algorithm to automatically extract football events using tracking data” [PAGE 1]. The key gray-zone audit is that “possession” here is not a mental state or an official statistic; it is an operational label generated by a radius rule. The paper is explicit that “If both possession and duel conditions are triggered, the duel condition prevails” [PAGE 6]. That single priority rule matters because it changes the event grammar downstream: a frame that could be labelled a single-player possession becomes a duel, and a duel can then affect whether a loss is recorded and how the next control interval is interpreted. A second gray zone is that the possession layer is not directly benchmarked: “We do not benchmark player possession data as this is not currently collected by event data providers” [PAGE 12]. Thus the +90% headline applies to selected event categories, not to the internal possession truth. A third gray zone is touch inference. Because the ball’s vertical coordinate is unavailable in all datasets, the algorithm infers contact from changes in ball direction or speed; if neither changes, the control frames are treated as false positives [PAGE 7]. This is a physically motivated heuristic, not a direct observation of contact. A fourth gray zone is set-piece identification. Free kicks have no distinct trigger configuration, so when patterns fail the algorithm defaults: “If none of the patterns are satisfied, the algorithm will assume a free kick as a default option” [PAGE 9]. That default is a rational fallback under uncertainty, but it means free-kick labels are the residual class, not a positive spatial detection. A fifth gray zone is benchmarking. The paper warns that manual event data is itself imperfect, so “detection rate can never be 100%” [PAGE 12]. The correct interpretation is therefore conditional: given the provider-specific radii, given 2D ball data, given an in-play/dead-ball signal or its absence convention, and given the limited event vocabulary, the pipeline recovers many events with high precision and recall. It does not establish that the same thresholds generalize to broadcast tracking, limb-level events, aerial events, or referee-only events. The deepest audit is thus a boundary audit: the model is strong exactly where the ball is tracked, the event is a change of control, and the spatial pattern is visible in 2D; it is weak where the event requires vertical ball state, player identity under occlusion, limb contact, referee pose, or a set-piece type with no unique 2D signature.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(\mathbf{r}_{p,t}=(x_{p,t},y_{p,t})\) be player \(p\)'s centre-of-mass position in metres at frame \(t\), and let \(\mathbf{b}_t=(x_{b,t},y_{b,t})\) be the ball position in metres. The sampling rate is \(f_s=25\ \mathrm{Hz}\), so \(\Delta t=1/f_s=0.04\ \mathrm{s}\). The source records “a football match at 25 Hz contains roughly 3 million tracking data points, compared to 3K events” [PAGE 3]. The ball-to-player distance is
\[
r_{p,t}=\|\mathbf{b}_t-\mathbf{r}_{p,t}\|_2 \quad [\mathrm{m}].
\]
The possession-zone and duel-zone indicators are
\[
P_{p,t}=\mathbf{1}\{r_{p,t}\le R_{pz}\},
\]
\[
D_t=\mathbf{1}\{\#\{p\in\mathcal{P}_{\mathrm{opp}}: \|\mathbf{b}_t-\mathbf{r}_{p,t}\|_2\le R_{dz}\}\ge 2\}.
\]
The source defines the possession zone as “a circular area of radius Rpz around every player” and the duel zone as “a circular area of radius Rdz ≥ Rpz around the ball” such that “if at least two opponents are within the DZ, then we deem there is a duel situation” [PAGE 6]. A control frame is any frame with \(P_{p,t}\lor D_t\); if both are true, the duel label prevails. The output control state is therefore categorical, \(b_t^{\mathrm{control}}\in\{\mathrm{dead\ ball},\mathrm{no\ possession},\mathrm{possession},\mathrm{duel}\}\), matching the source’s attribute list [PAGE 5].

For a loss by player A at frame \(f\), the source gives two conditions: the ball is outside A’s possession zone at \(f+1\) and the ball displacement exceeds a threshold, and A is not present on the next control frame \(f_c>f\). In indicator form,
\[
L_A(f)=\mathbf{1}\{r_{A,f+1}>R_{pz},\ \Delta s_f>\epsilon_s,\ A\notin\mathcal{C}(f_c)\},
\]
where \(\Delta s_f=\|\mathbf{b}_{f+1}-\mathbf{b}_f\|_2\ [\mathrm{m}]\), \(\epsilon_s\ [\mathrm{m}]\), and \(f_c\) is the first subsequent control frame. This formalizes the source’s statement that “Player A loses possession at control frame f if the following conditions are both satisfied” [PAGE 7].

For a gain, the source uses the incoming direction \(\mathbf{d}^0_{f}\) and outgoing direction \(\mathbf{d}^1_{f}\), plus incoming and outgoing speeds \(v^0_f,v^1_f\ [\mathrm{m\,s^{-1}}]\). With unit-normalized directions \(\hat{\mathbf{d}}\), the gain rule over a control sequence \([f_0,f_n]\) is
\[
G_A(f_0)=\mathbf{1}\left\{\hat{\mathbf{d}}^0_{f_0}\cdot\hat{\mathbf{d}}^1_{f_n}\lt \epsilon_\theta\ \lor\ \exists i\in[0,n]: |v^0_{f_i}-v^1_{f_i}|>\epsilon_v\right\}.
\]
Here \(\epsilon_\theta\) is dimensionless and \(\epsilon_v\ [\mathrm{m\,s^{-1}}]\). The source states the operational meaning: “if the ball has either changed direction or speed during a given control sequence [f0, fn] involving the same player, then a possession gain occurs at f0” [PAGE 7]. The dot-product test is only defined when the displacement vectors are nonzero; if the ball is exactly stationary over the relevant frame, the direction vector is undefined and the equation has a removable-but-real singularity requiring a skip or epsilon convention.

A shooting event is defined as “a possession loss by a player of the attacking team that is succeeded by a goal, a corner kick, a goal kick or a save” [PAGE 10]. In indicators,
\[
S_A(f)=\mathbf{1}\{L_A(f)=1\ \land\ (\mathrm{goal}\lor\mathrm{corner}\lor\mathrm{goal\ kick}\lor\mathrm{save})\}.
\]
A saving event is “a possession gain by the goalkeeper of the defending team where they are located inside the penalty area, and is preceded by a shooting event” [PAGE 10]:
\[
V_{GK}(f)=\mathbf{1}\{G_{GK}(f)=1\ \land\ \mathbf{r}_{GK,f}\in\mathrm{penalty\ area}\ \land\ \exists f'<f:S_A(f')=1\}.
\]
The source also states that “blocked shots are not encompassed in these definitions” [PAGE 10], so blocked shots collapse into pass or interception labels. A cross requires “origin in the cross zone, the next player in control (attacking or defending) needs to be within the active penalty area and there should be at least one attacking player in the active penalty area” [PAGE 11]:
\[
X_A(f)=\mathbf{1}\{L_A(f)=1\ \land\ \mathbf{b}_f\in\mathrm{cross\ zone}\ \land\ \mathbf{r}_{\mathrm{next},f_c}\in\mathrm{active\ penalty\ area}\ \land\ N_{\mathrm{att,PA}}\ge 1\}.
\]
Set pieces are detected by trigger-plus-pattern predicates over a dead-ball interval \([d_0,d_c]\):
\[
T_s=\mathbf{1}\{\exists d_1\in[d_0,d_c]:\mathrm{trigger}_s(d_1)=1\},
\]
\[
P_s=\mathbf{1}\{\mathbf{r}_{\mathrm{executor},d_c+1}\in\mathrm{pattern\ zone}_s\ \land\ r_{\mathrm{executor},b,d_c+1}\le R_{pz}\}.
\]
The source lists concrete trigger examples, including kickoff: “all players are within their own halves (with a tolerance of ϵk1) and there is at least one player within ϵk2 of the center mark” [PAGE 8]. If multiple triggers are complete, a hierarchy breaks ties; if no pattern is satisfied, “the algorithm will assume a free kick as a default option” [PAGE 9]. Benchmarking is summarized by empirical precision and recall,
\[
\mathrm{Precision}=\frac{TP}{TP+FP},\qquad \mathrm{Recall}=\frac{TP}{TP+FN},
\]
both dimensionless. The source reports “supra 90% precision and recall in detecting passes” [PAGE 12], while also reporting lower shot recall and the weakest class as free kicks: “free kicks, which hold no specific pattern and were selected if no other spatial configuration was detected” [PAGE 13]. The radii are provider-specific: “50 cm for provider A and 1 m for both provider B and provider C, whereas the radius of the duel zone were taken to be Rdz = 1 m for all providers” [PAGE 12]. The exact breakdown regimes are: first or last frame where \(f-1\) or \(f+1\) is unavailable; zero displacement where direction is undefined; \(R_{dz}=R_{pz}\) where possession and duel labels tie; missing ball data where dead-ball is inferred; missing z where above-crossbar events are unresolved; occlusion and player swaps where identity fails; set-piece overlap where corner, throw-in, goal kick, or free kick are spatially ambiguous; and manual annotation noise where the benchmark itself is imperfect.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage is clear in the paper. Manual event data entered football analytics through commercial collection, and the source notes that event data “started to be collected by Opta Sports (now Statsperform) at the end of the 20th century” [PAGE 2]. That lineage created a vocabulary of passes, shots, cards, substitutions, and set pieces, but it also imported human definition drift: the paper warns of “substantial tagging differences (10-15%) among analysts” [PAGE 2]. The second lineage is computer-vision event detection from broadcast video, which focused on goals, shots, cards, substitutions, and some set pieces, mainly for highlight generation [PAGE 2]. The third lineage is optical Electronic Performance and Tracking Systems, which provide player and ball coordinates at high frequency [PAGE 2]. The source positions itself as the first attempt to use tracking data to automatically generate event data, stating that “to the best of our knowledge, this article represents the first attempt to use tracking data as a means to automatically generate event data” [PAGE 3]. The retrocausal lesson is that the present algorithm is a hybrid descendant: its event vocabulary comes from manual event data, its spatial logic comes from tracking-data analytics, and its rule structure comes from the Laws of the Game. Multi-week traps follow from that inheritance. A team can spend weeks tuning \(R_{pz}\), \(R_{dz}\), \(\epsilon_s\), \(\epsilon_\theta\), and \(\epsilon_v\) on one provider and then discover that the optimum is provider-specific; the paper itself uses different possession radii for providers A, B, and C [PAGE 12]. A second trap is treating manual event data as gold: the source explicitly says “manually collected event data is not without errors” [PAGE 12]. A third trap is ignoring the dead-ball channel: the algorithm needs either an in-play/dead-ball boolean or missing ball data to infer dead ball [PAGE 3], and the paper calls “the absence of in-play/dead information” a critical limitation [PAGE 16]. A fourth trap is assuming that adding z, limb tracking, or broadcast video is a minor upgrade; the paper lists those as research directions and notes that lower-quality tracking will require adjusted hyperparameters and dead-ball patterns [PAGE 17]. The historical trajectory therefore predicts a multi-week validation cycle, not a one-shot deployment: calibrate per provider, audit annotation noise, test set-piece edge cases, and separate event existence from player attribution.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive problem is that three minds are being modelled at once: the player’s physical action, the referee’s game-state decision, and the human annotator’s event definition. The algorithm’s crisis habit is to collapse uncertainty into a default. When no set-piece pattern is satisfied, it “will assume a free kick as a default option” [PAGE 9]. That is a regression to the residual class under crisis. The counter-trap is to mistake that default for positive evidence: a free-kick label can mean “the spatial pattern matched a free kick” or it can mean “no other pattern matched.” Similarly, blocked shots are a crisis case because the goalkeeper does not intervene; the source says “blocked shots are not encompassed in these definitions” [PAGE 10], and the results explain that blocked shots were labelled as passes in 70% of the 254 shot misclassifications [PAGE 12]. The algorithm is not “wrong” about possession loss; it is operating with an event ontology that lacks a blocked-shot class. The clock layer adds another recursive trap. The system runs at 25 Hz, uses a seven-frame Savitzky-Golay window corresponding to 0.25 s [PAGE 6], and must segment dead-ball intervals whose boundaries are defined by the tracking feed or by missing ball data [PAGE 3]. At the end of a period, the usual goal-to-kickoff one-to-one relation breaks; the paper adds a “goal?” dead-ball event for shot sequences at the end of the period because “discerning whether these sequences are actual goals using only 2D tracking data is complex” [PAGE 9]. It also handles repeated kickoffs by checking whether the ball reached a penalty area between kickoffs and, if not, relabelling the prior dead ball as a referee interruption [PAGE 9]. These are clock-aware counter-traps: do not force a goal-kickoff pair when the period clock has ended, and do not count a repeated kickoff as a new possession epoch. The recursive theory-of-mind conclusion is that the system should be evaluated at the level of its ontology, not only at the level of its confusion matrix. A human annotator may label a deflection as a save; the algorithm may label it as a defender’s pass followed by a goalkeeper reception [PAGE 10]. A human may label a shot as blocked; the algorithm may label it as a pass. A human may record an event at a slightly different timestamp; the paper notes annotated event times can be more than 10 s before or after the event [PAGE 17]. The correct counter-trap is to align definitions before counting errors, and the correct clock discipline is to treat frame-level thresholds, dead-ball intervals, period ends, and repeated kickoffs as explicit state variables rather than afterthoughts.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The physical layer veto is explicit in the source: “Since the z-coordinate of the ball is not available for all datasets, we only use 2D ball information” [PAGE 3]. Therefore any claim that the algorithm adjudicates above-crossbar shots, aerial duels, ball height at throw-ins, or three-dimensional goal-line geometry is vetoed by the source’s own input constraint. The paper concedes the point in its goal discussion: “The incorrectly detected last-minute goal corresponded to a shot that went above the crossbar, which could be corrected with the ball z-coordinate” [PAGE 14]. The biomechanical layer is similarly bounded. The input is centre-of-mass tracking; limb tracking is not present in the core pipeline. The paper says additional data streams “such as the z-coordinate of the ball, player limb tracking or video, may be leveraged to expand the automatically detectable events, for instance tackles, air/ground duels or dribbles” [PAGE 5]. Thus any claim about tackles, body part used for a pass, or limb-level contact is vetoed unless an additional sensor layer is supplied. The weather layer is not modelled at all in the source. There is no weather variable, no wind vector, no precipitation state, and no surface-condition parameter in the equations. The correct adjudication is therefore not “weather proves the model wrong”; it is “weather cannot be adjudicated from this source.” If weather changes ball speed or direction, the gain rule may attribute the change to player contact rather than environmental forcing, but that is a hypothesis requiring an external experiment. The source’s own limitation list supplies the general veto proof: “The main limitation of the algorithm is that ball tracking data needs to be available” and “The other limitation is the absence of in-play/dead information, which is critical for set piece detection” [PAGE 16]. Any cross-layer claim that requires missing ball data, missing dead-ball state, missing z, missing limb tracking, or missing referee pose is outside the proven domain. The admissible domain is 2D ball and player tracking with a dead-ball convention, a provider-calibrated possession radius, and an event vocabulary limited to control changes and spatially visible set pieces.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: vertical goal-line counterfactual. Take a shot whose 2D projection crosses the goal line but whose 3D ball height is above the crossbar. The source predicts that 2D-only logic can produce a false “goal?” or false goal-related event; it explicitly says the incorrectly detected last-minute goal “corresponded to a shot that went above the crossbar, which could be corrected with the ball z-coordinate” [PAGE 14]. Veto prediction: if a model claims 2D-only goal adjudication, the counterfactual with z should flip the label from goal to no-goal. Verifiable reward: exact match to the z-informed label. If the model does not flip, the model is using a non-source assumption.

Scenario 2: unchanged-trajectory possession counterfactual. Place a player within \(R_{pz}\) of the ball for several frames while the ball’s direction and speed remain constant. The source’s gain rule says that if “both the ball trajectory and speed are not altered during a control frame interval,” those control frames are “false positives” and are not included in the possession step [PAGE 7]. Veto prediction: the correct output is no possession gain, even though the player is near the ball. Verifiable reward: compare the predicted gain indicator to the source-rule indicator. If the model outputs a gain, it has violated the direction-and-speed test.

Scenario 3: set-piece spatial-ambiguity counterfactual. Place a throw-in near the corner mark, or a free kick near the sideline, or a free kick inside the goal area. The source lists exactly these as assumed errors: “throw-ins/free kicks occurring near the corner mark wrongfully classified as corner kicks,” “free kicks occurring near the sidelines wrongfully classified as throw-ins,” and “free kicks occurring within the goal area wrongfully classified as goal kicks” [PAGE 10]. Veto prediction: the confusion matrix should show corner-versus-throw-in and throw-in-versus-free-kick leakage under those geometries; the paper’s own set-piece results already show the weakest class as free kicks [PAGE 13]. Verifiable reward: inject the ambiguous geometry, hold the true label fixed, and require the predicted set-piece label to match the true label only when the pattern is satisfied. If the model claims perfect discrimination without z, referee pose, or video, it is contradicted by the source’s stated error modes.
</RLVR_COUNTERFACTUAL_VETOES>