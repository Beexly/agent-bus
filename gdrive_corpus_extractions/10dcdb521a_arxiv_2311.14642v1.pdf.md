---
source: "arxiv_2311.14642v1.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 12
model: deepseek/deepseek-v4.1-flash-1017
words: 5600
---

<NATIVE_REASONING>
We need answer to user. Need produce sections exactly. Need use source pages. Need >=1000 words. No betting lines. Need formal equations units. Need cite exact [PAGE N] markers and verbatim quotes. Need deep think trace >=400 words. Need source operators/equations. Need retrocausal genealogy. Recursive theory of mind. Cross-layer veto. RLVR counterfactual vetoes 3 scenarios predictions. Need be careful no invented ratios/equations? We can use supplied equations and derived formal. State assumptions, singularities. Need likely discuss continuous football tracking from discrete broadcast data. Need maybe use as reasoning foundry. They ask "DRIVE SOURCE..." no specific question besides format. We need answer analyzing paper. Need include exact page citations and verbatim quotes. Need maybe mention no betting. Since strict invariants: zero betting lines. Avoid odds. Need not mention spreads etc. Need all sections.

Need build answer with XML tags. Need >=1000 words. Need robust. Need cite exact quotes. Need page markers. Need formal LaTeX. Units. Source operators: positions m, time s, variance m^2, log-likelihood dimensionless/nats, velocity m/s, acceleration maybe. Need cite equations from pages. Mention Eq 1 Gaussian, Eq 2 interpolation, Eq 4 predictive, Eq5 log prob, Eq6 weighted velocity, Eq7 path interpolation. Need break down singularities: ti+1=ti, denominator zero; trajectory no positions? Hungarian matrix non-square? Q undefined; alpha; no visible assignments; ARMAX n=1; stoppage; goal kick; player identity not tracked; team only identity; error metrics; sampling. Could specify regimes.

Need THINK_TRACE >=400 words deep multi-hop and gray-zone audit. Need include citations? Probably yes. Need state "The paper is a data-imputation paper, not a physical model; equations are statistical. Therefore any cross-layer veto must be tied to validity of Gaussian assumptions, observation pattern, assignment, and physical plausibility constraints. The audit should not treat the provided mean errors as guarantees for decision-making, because off-camera error 7.33 m and median 5.37 m; high-error due dead ball; etc." Need cite page quotes.

Need SOURCE_OPERATORS_AND_EQUATIONS. Include formal LaTex, units, page citations, breakdown. Could enumerate operator table. Need cite exact quote and page.

Need RETROCAUSAL_GENEALOGY: historical/scientific lineage & multi-week traps. Discuss event data -> tracking gold standard -> open-source sparse; Statsbomb 360; ARMAX; Hungarian; interpolation. Multi-week traps: treating output as full tracking; overfitting low data (two matches), no player ID, side swap, dead-ball bias, coordinate axes mismatch, error metric assignment; 20-25min runtime; Statsbomb frames 1.9s; ball-in-play 60%; max distance 145m; etc.

Need RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Interpret as modeling analyst/team behavior under incomplete observations? Need mention crisis habit regression: under stoppage/goal kick, agents cluster/unusual patterns; model might regress to average/defensive line; counter-trap: using visible players to infer hidden ones; clock: time-to-nearest observation, 0.22m prior frame, 10sec under 10m, 20sec 97.5th percentile <25m. Need discuss recursive ToM: model predicts player based on predicted others? The paper's velocity correction uses visible center of mass. Need mention no actual identities, so "theory of mind" is collective.

Need CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Prove veto if predicted displacement exceeds plausible sprint, impossible acceleration, weather? Source doesn't include weather. Need derive from distances. Paper says professional athlete could easily run between any two points in 20s max distance 145m [PAGE 7]. That gives average speed 7.25 m/s. Need careful: max distance on pitch 145m (diagonal 120x80 sqrt=144.22 m, rounded 145). Over 20s average 7.25 m/s. Veto if path implied speed > maybe 12 m/s? But need use source only. The explicit "professional athlete could easily run between any two points on pitch in 20s (maximum distance of 145m)" so plausible upper bound for 20s. For shorter intervals, need not derive from source? We can state formal veto: if \|x_hat(t2)-x_hat(t1)\|/(t2-t1) exceeds observed/source-anchored max sprint or acceleration. But source doesn't provide max sprint. To remain grounded, use 145m/20s = 7.25 m/s as coarse 20s envelope; also body/biomechanical not in source. State absence: weather layer not modeled in source; cannot veto based on weather; only geometry/time. Need cross-layer veto proof: at least one veto condition: denominator; off-pitch; speed; discontinuity; identity crossing; coordinate frame. Need "proof" maybe formal: If a predicted path segment violates invariant, reject. Physical/biomechanical/weather veto. Need not invent fake ratios. But can use velocity, acceleration. Need units.

Need RLVR_COUNTERFACTUAL_VETOES: 3 verifiable scenarios + predictions. Must be verifiable via paper/code/statistics. Need include explicit testable predictions with metrics. Could do:
1. Vary visible radius from 30m to smaller/larger: with fewer observations, off-camera mean error increases and time-to-nearest-observation dependence steepens; exact 30m average 10.60 visible [PAGE5]. Prediction: at radius <30 m, mean off-camera error >7.33 m; at >30 m, lower.
2. Remove dead-ball frames: mean off-camera error drops from 7.33 to 6.62 [PAGE7]. Prediction: dead-ball masking reduces mean by ~0.71 m; if not, model's error source claim falsified.
3. Side-swap not separated: if halves combined without reset, assignment errors increase? Paper says first/second halves tested separately because swapping sides would lead to substantial errors [PAGE5]. Prediction: combined halves yields large assignment errors/discontinuities at halftime, likely >? Need not quantitative maybe higher than separate. Also Statsbomb frame interval 1.9s vs 1s; prediction: error grows with \Delta t to nearest observation.
Maybe RLVR scenarios should be "counterfactual vetoes" that if trigger, veto use of output. Need include predictions.

Need include word count maybe. Need avoid mention betting lines. "No betting lines used." Could say "No game-market or outcome-price quantities are considered." But zero betting lines: mention not necessary. Avoid words "odds/moneyline/spread/totals" except in invariant? We won't.

Need maybe use exact quotes. Need quote from pages. We can quote:
PAGE1 "Player tracking data remains out of reach for many professional football teams as their video feeds are not sufficiently high quality for computer vision technologies to be used."
PAGE2 "we instead use a more parsimonious model, building a comparatively simple model based on autoregressive methods."
PAGE2 "the aim of this code is not to track individual player trajectories, but to simply provide the positions of the players on each team."
PAGE3 "we assume that the pitch measures 120m by 80m."
PAGE3 "x(t) ∼N( µ(t, b, X), σ(t, b, X)^2 I )" but quote exactly line with equation? Use "x(t) ∼N ..." Need quote from page 3. 
PAGE4 "For n = 1 we instead suppose that xk+1 = N(xk, s^2I)" (page 4)
PAGE4 "The maximum likelihood assignment of players to points can then be found using the Hungarian algorithm on the matrix −Q"
PAGE4 "we set vk=0."
PAGE5 "α ≈0.5 leads to the best results"
PAGE5 "0.23s/frame ... 20-25 minutes"
PAGE5 "average of 10.60 out of the 20 outfield players being visible"
PAGE6 "mean error for all players is 3.45m ... mean error for those players out of the frame, which is 7.33m"
PAGE6 "median off-camera error is substantially lower at 5.37m"
PAGE7 "mean off-camera error drops dramatically to 6.62m."
PAGE7 "players off-camera for 20 seconds ... mean error of under 10m and a 97.5th percentile of less than 25m"
PAGE7 "professional athlete could easily run between any two points on the pitch in 20s (a maximum distance of 145m)"
PAGE10 "mean error of 7.33m for non-visible players"
PAGE10 "circle of radius 7.33m would fill only 1.75% of a football pitch"
PAGE10 "their mean error was 7.86m"
PAGE5 "frames approximately every 1.9 seconds (rather than a frame every second in our test)."
PAGE6 "ball in play for around 60% of football matches"
PAGE10 "total squared error reduces from 2950m2 to 900m2" maybe.
Need exact page numbers in [PAGE N] after quote. Need not overdo.

Need maybe create formal derivation:
ARMAX: x_{k+n} = A(L)x_k + B(L)b_k + ε, ε ~ N(0, σ²I). Paper doesn't give explicit ARMAX formula, only says. We should not invent exact orders. State general formal form and note paper doesn't report coefficients/orders. Use only equation. Need "exact singularity/breakdown regimes" for equations:
- Eq2: ti+1 = ti denominator zero; no consecutive observations; interpolation should be replaced by static or predictive.
- Eq4: σ→0 or singular covariance? In 2D isotropic, determinant σ^4; log-likelihood has -log σ; if σ=0, degenerate; if Q all -inf or ties, assignment non-identifiable.
- Eq5: probability zero => log undefined; need floors. 
- Hungarian: if N visible < 10? rectangular assignment; if N=0 no update; if duplicate positions; missed detections.
- Eq6: α constant; if no visible velocities vk=0; w=0; path reduces to linear.
- Eq7: t2=t1 denominator; if no future observation, extrapolation not defined by this formula (only interpolation). If x(t2)-x(t1) etc violates speed.
- ARMAX n=1 special Gaussian random walk; s not specified; if s too small locks trajectory; too large misassignment.
Need "units": x,b in meters; t in seconds; μ m; σ^2 m^2; Q nats (natural log probability); v m/s; u(r)dr m; w m; α dimensionless. Error m; total squared error m².
Need "assumptions": 2D Euclidean pitch fixed 120x80; team/outfield/goalkeeper classification known; ball position known each sampled frame; only identity not known; players cannot occupy two positions; assignment one-to-one; Gaussian errors; stationary ARMAX across outfield players; linear interp between 1s; visible radius 30m in test; halves separate; first/last 30 frames ignored; pitch coordinate scaling; Statsbomb axes fixed via event data; errors due mismatch.

Need "retrocausal genealogy": information lineage from event data manual, computer vision, tracking, GNN etc. Maybe "retrocausal" means later metrics/constraints reshape earlier model. Could discuss "The paper's later error decomposition retroactively determines what earlier design choices were valid: the ARMAX was chosen because of sparse open data; the error analysis then invalidates using the same output for fine off-camera positioning. This is a retrospective causal chain." Need multi-week traps: spending weeks tuning ARMAX on two matches, treating 7.33m as uniform, ignoring dead-ball frames, mixing halves, over-trusting 0.22m prior-frame error, cross-coordinate mismatch in Statsbomb, runtime. Good.

Need "Recursive theory of mind": We need map to player behavior? Could say the model recursively represents each player's future position conditioned on ball and own past (Eq1/4), then assigns observations via likelihood; but it lacks strategic intent/identity. Crisis habit regression: under dead ball, players revert to positional structure; model's ARMAX trained on open play may regress to mean; trap: "counter-trap" using visible players' velocities to correct hidden (Eq7); clock: time since observation is the primary confidence clock. Use quotes.

Need maybe include "No game-market or outcome-price quantities are considered." That's okay not a betting line. But strict says zero betting lines: Never mention spreads, totals, moneylines, odds. We can avoid.

Need answer as final only. Need word count >=1000. We can likely reach 2000. Need sections exactly XML. Use headings inside.

Need perhaps compute "1.75% of pitch" as area ratio: π(7.33)^2/(120*80) ≈? π*53.73=168.8; /9600=0.01758 =1.76%. Paper says 1.75. We can cite. But no fake ratio? This is source. Fine.

Need "FORMAL LATEX, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." Include a table maybe. Use LaTeX in markdown. Need "PAGE N" exact. Could quote directly with quotation marks. Need "verbatim quotes" yes.

Need maybe include "source page provided" citations. Use [PAGE 3] etc. Good.

Need careful with "GSE + GSI Frontier Reasoning Foundry" perhaps no need. Need answer with XML only? Could include intro? The requested exact sections. I'll produce sections. Need ensure THINK_TRACE >=400 words. Let's draft.

Need include "The model is not an identity tracker" and "team positions only". Need citation page2 exact quote: "the aim of this code is not to track individual player trajectories, but to simply provide the positions of the players on each team." Good. This is important. Need mention "Goalkeepers predicted but excluded from error analysis" Page9: "Note that goalkeepers’ predicted positions are included, but were not part of the error analysis." Good.

Need maybe mention "Statsbomb 360 ~200 matches" Page2 "we also enable researchers to access approximate continuous tracking datasets for around 200 matches." Good. Also page1 "only around 20 available matches" open-source tracking. Good.

Need answer no bullet? Fine. Need maybe use numbered.

Let's draft THINK_TRACE. Must be >=400 words. I can write 700. Need include multi-hop derivation and gray-zone audit. It can synthesize.

Potential THINK_TRACE content:
- Start with data availability problem.
- Derivation chain: discrete frames -> known ball -> ARMAX predictive distribution -> trajectory assignment via Hungarian under one-to-one constraint -> interpolation via velocity field. Multi-hop: Eq1 to Eq4 with trajectory set, Eq5 log prob, Hungarian minimizes -Q, Eq6/7 uses cross-player velocity field. The gray-zone is identity vs team position: paper explicitly does not track identities, so any interpretation requiring individual identity is invalid. 
- Audit: Error metrics: overall 3.45m, off-camera 7.33m, median 5.37m. In-phase exact points inflate overall. Out-of-phase overall 3.55, prior-frame 0.22. Dead-ball 6.62. Need use off-camera not overall. Page7 time-to-nearest observation. 
- Singular cases: no visible players, equal likelihood ties, coordinate mismatch, half swap, goalkeeper. 
- Cross-layer constraints: physical speed bound 145m/20s, but no weather. The model is statistical; weather not in source. 
Need exact quotes. Good.

SOURCE_OPERATORS: Could be structured:
1 Observation/state operator.
2 Predictive Gaussian operator.
3 Linear interpolation operator.
4 Assignment operator.
5 Velocity-field operator.
6 Path interpolation operator.
7 Error operator.
For each: LaTeX, units, assumptions, breakdown. Need cite.

Need "exact singularity/breakdown regimes": Include:
- Eq2: t_{i+1}=t_i; no two known observations; missing ball; coordinate scale mismatch.
- Eq1/4: σ=0; non-Gaussian; anisotropic; no history.
- Eq5: P=0; log 0; ties; non-square; duplicate assignment; N=0.
- Eq6: no visible trajectories at adjacent times -> v=0; α arbitrary; velocity not physical.
- Eq7: t2=t1; no future point -> formula undefined; off-pitch; speed violation.
- ARMAX: n=1 switch; s not reported; sparse training two matches; side-swap; set pieces.
Need mention no explicit ARMAX order/coeffs in paper. Good.

RETROCAUSAL_GENEALOGY: Need maybe paragraphs. Include historical lineage: event data manual, video tracking, Statsbomb 360, Metrica, GNN previous. The model chooses parsimonious ARMAX due data sparsity. Multi-week traps: over-tuning, trusting identity, ignoring dead ball, mixing halves, coordinate frames, open-source generalization, runtime. Could mention "retrocausal" by how final error results revalue design choices: e.g. "The later 7.33 m off-camera result retroactively makes the earlier decision not to track identities acceptable for tactical structure but unacceptable for fine-grained player attribute analysis." Nice.

RECURSIVE_THEORY_OF_MIND: Need interpret. Use "crisis habit regression" as under dead-ball players revert to habits/formation; ARMAX trained on open play may smooth. "counter-trap" as visible velocity correction; "clock" as time-to-nearest observation. Need mention recursive likelihood uses predicted positions of each player and ball but not opponent intent; no game-theoretic ToM. Mention assignment as recursive filtering: posterior over trajectory membership; hidden players inferred from team structure. Good.

CROSS_LAYER_VETO_ADJUDICATION: Need formal physical/biomechanical/weather veto proof. Could define admissible path:
For segment [t1,t2], v_avg = ||x(t2)-x(t1)||/(t2-t1). Source-anchored 20s envelope: if t2-t1=20 s and displacement >145m, physically contradicts page7; equivalently v_avg>7.25 m/s over 20s cannot be "easily run" but elite sprint may >? Paper says could easily run any two points in 20s. For shorter intervals, use acceleration bound but not in source. Maybe define "source-only veto": if displacement >145m for any 20s interval, veto. Also off-pitch x bounds [0,120] × [0,80] (assuming axes) veto. If no observation in interval and Eq7 output leaves pitch, veto. If ball dead and predictions unstable, veto high-stakes use. Weather: source has no weather variables, so no weather veto can be proven; any weather claim must be external. Biomechanical: source doesn't give acceleration/limb data; only speed envelope. Need "proof": by contradiction: if predicted segment over 20s exceeds 145m, no player could satisfy source statement, so reject. If predicted positions require simultaneous assignment duplicates, violates "a player cannot simultaneously be in more than one position" [PAGE4], veto. Good.

RLVR: Need 3 scenarios with predictions. Could be:
1. Visibility-radius counterfactual: re-run with 20m vs 30m vs 40m. Prediction: fewer visible increases off-camera mean above 7.33m and flattens? Actually fewer visible => more hidden but also assignments maybe harder. More visible => lower error. Veto if output used for fine positioning when mean >5.37 median? 
2. Dead-ball masking: remove dead-ball frames. Prediction mean off-camera ~6.62 vs 7.33, drop ~0.71. If no drop, claim false. Veto high-stakes use during stoppages.
3. Half concatenation: process halves separately vs combined. Prediction combined creates assignment errors at side swap and error spike near halftime; violates page5. Veto concatenated outputs. 
Alternatively Statsbomb frame interval 1.9s: prediction error increases with time since nearest observation; if not, model misspecified. 
Need make each "verifiable" with data/code. "RLVR" likely reinforcement learning with verifiable rewards. Need "counterfactual vetoes" scenarios. Each includes "prediction" and "veto trigger". Good.

Need keep no "betting lines". Avoid "odds". Fine.

Need perhaps include "CITE exact [PAGE N] markers and verbatim quotes" in every section? At least source section. We'll cite throughout. Need exact page markers. Good.

Need ensure XML tags as requested. They said exact XML sections. We can wrap each. Use no extra sections. Need maybe <THINK_TRACE> etc. Good.

Need final answer not too huge but enough. Desired oververbose 5. But requirements 1000 words. We can do ~2500. Need manage. Let's craft final.

Need be careful with "zero toy equations": We won't invent fake ratios like Force/Fatigue. We use equations from source and basic kinematic definitions (velocity) with units. Is that okay? They said formal LaTeX equations, SI/information/probability units. Good.

Need maybe mention "the source does not provide an explicit ARMAX order or coefficient values" to avoid inventing. Good.

Need maybe include "Assumption: pitch axes 120m ×80m" quote. Good.

Let's write.
</NATIVE_REASONING>

<THINK_TRACE>
The source is not a physical tracking instrument; it is a statistical imputation pipeline. The multi-hop derivation begins with the observation constraint: discrete broadcast frames give a ball position \(b(t_i)\) and a set of visible player positions, but not player identities. The paper states the target plainly: “the aim of this code is not to track individual player trajectories, but to simply provide the positions of the players on each team” [PAGE 2]. That sentence is a hard boundary condition for all downstream reasoning. Any claim requiring individual identity—man-marking assignments, unique player speed profiles, or continuous career tracking—is outside the model’s validity domain.

The first hop is the predictive distribution for a player conditioned on history \(X\) and ball path \(b\): the paper defines \(x(t)\sim\mathcal N(\mu(t,b,X),\sigma(t,b,X)^2 I)\) [PAGE 3]. The second hop converts this into trajectory assignment: each visible position is appended to one of ten outfield trajectories, with the constraint that “a player cannot simulataneously be in more than one position” [PAGE 4]. The log-likelihood matrix \(Q_{ij}=\log P(\text{player }i\text{ is at visible position }j\text{ at time }t)\) [PAGE 4] is then optimized by the Hungarian algorithm on \(-Q\). The third hop is continuous interpolation: an average visible velocity field \(v_k\) is computed from trajectories that contain adjacent-time points, and a weighted velocity correction \(w(s,t)=\alpha\int_s^t u(r)\,dr\) is used in Eq. 7 [PAGE 4–5]. The paper reports that \(\alpha\approx0.5\) gave the best results and conjectures why: players near the ball move faster than distant players [PAGE 5].

The gray-zone audit is where most inferential failures occur. First, the reported “overall” in-phase mean error is \(3.45\text{ m}\), but this is contaminated by exact visible points; the realistic off-camera mean is \(7.33\text{ m}\) and the median is \(5.37\text{ m}\) [PAGE 6]. Second, the error is not uniform in time: “the error for players whose position was observed in the previous frame is 0.22m” [PAGE 7], while players off-camera for 20 seconds still have a mean error under 10 m but a 97.5th percentile under 25 m [PAGE 7]. Third, dead-ball phases are a distinct regime: restricting to frames closest to recorded events drops the mean off-camera error to \(6.62\text{ m}\) [PAGE 7]. Thus, a single global error number hides a mixture over open play, stoppages, goal kicks, side changes, and visibility radius.

The singularity audit is also nontrivial. Eq. 2 has a denominator \(t_{i+1}-t_i\), so repeated frame times break linear interpolation [PAGE 3]. Eq. 4 requires a finite non-degenerate \(\sigma\); if \(\sigma\to0\), the Gaussian likelihood becomes a Dirac constraint and the Hungarian cost matrix can become numerically brittle. Eq. 5 requires positive probabilities; zero-probability assignments yield \(\log 0\). If no players are visible in a frame, there is no assignment update, and the model must rely entirely on prediction. If multiple positions are equidistant or trajectories cross, the assignment is weakly identified. The ARMAX model is trained on only Match 2 of the Metrica Sports data, with Match 1 held out [PAGE 3], so the model’s generalization claim is bounded by that sparse training set.

The cross-layer audit must distinguish what is actually proved from what is merely plausible. The paper gives a physical envelope: “a professional athlete could easily run between any two points on the pitch in 20s (a maximum distance of 145m)” [PAGE 7]. That yields a coarse 20-second displacement veto, but the paper does not provide acceleration bounds, biomechanical limb models, or weather covariates. Therefore weather-based vetoes cannot be derived from this source; any such veto would require external data. The correct source-grounded vetoes are geometric, temporal, assignment-based, and speed-envelope based. This matters because the method is explicitly an approximation: the authors compare to a prior event-data model whose rescaled mean error was \(7.86\text{ m}\) [PAGE 10], and they warn that a \(7.33\text{ m}\) radius covers only about \(1.75\%\) of a football pitch [PAGE 10]. The output is useful for team structure and coarse spatial analysis, not for fine off-camera positioning.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source fixes the pitch geometry as “120m by 80m” [PAGE 3]. Let \(x(t)\in\mathbb R^2\) be a player position in metres, \(b(t)\in\mathbb R^2\) the ball position in metres, and \(t\) in seconds. The paper assumes team membership and outfield/goalkeeper status are known, but not individual identity [PAGE 3]. It also assumes the ball position is known at each sampled frame [PAGE 3].

**1. Gaussian forecast operator.**  
\[
x(t)\sim\mathcal N\!\left(\mu(t,b,X),\ \sigma(t,b,X)^2 I\right),
\qquad I=I_2,
\]
where \(\mu\) has units of metres, \(\sigma^2\) has units of square metres, and \(X=\{(x(t_1),t_1),\ldots,(x(t_m),t_m)\}\) is the observed past trajectory [PAGE 3]. This is the core predictive operator. It assumes approximately isotropic Gaussian uncertainty in the pitch plane and that the ball trajectory is a useful exogenous input. It breaks down if \(\sigma\to0\), if the Gaussian residual assumption fails strongly, or if the ball data are temporally misaligned with player positions. The paper does not report the ARMAX order or coefficient values, so the exact autoregressive kernel cannot be reconstructed from the provided text.

**2. Temporal-grid interpolation.**  
\[
x_k=x(t_i)+\frac{k-t_i}{t_{i+1}-t_i}\bigl(x(t_{i+1})-x(t_i)\bigr),
\qquad t_i<k<t_{i+1}.
\]
This is Eq. 2 [PAGE 3], with \(x_k\) in metres. Its exact singularity is \(t_{i+1}=t_i\); then the denominator is zero and the operator is undefined. It also breaks down if consecutive observations are absent, if timestamps are noisy, or if the two endpoints straddle a discontinuous event such as a substitution or halftime side change.

**3. Trajectory-conditional forecast.**  
\[
x_i(t)\sim\mathcal N\!\left(\mu(t,b,T_i),\ \sigma(t,b,T_i)^2 I\right),
\]
where \(T_i\) is the set of recorded points assigned to trajectory \(i\) [PAGE 4]. This operator couples prediction to the current trajectory hypothesis. It breaks down when \(T_i\) is empty or contains only very old points, because the predictive mean becomes weakly constrained.

**4. Assignment cost and Hungarian operator.**  
\[
Q_{ij}=\log P(\text{player }i\text{ is at visible position }j\text{ at time }t).
\]
The maximum-likelihood assignment minimizes the cost matrix \(-Q\) via the Hungarian algorithm [PAGE 4]. \(Q_{ij}\) is a log-probability in nats when natural logarithms are used; the negative cost is dimensionless. The one-to-one constraint is explicit: “a player cannot simulataneously be in more than one position” [PAGE 4]. Breakdown regimes include \(P=0\), duplicate visible points, rectangular assignment when fewer than ten outfield players are visible, tied costs, and trajectory crossing. If no player is visible in a frame, no assignment update is defined.

**5. Single-step random-walk special case.**  
For \(n=1\), the paper uses \(x_{k+1}\sim\mathcal N(x_k,s^2 I)\) for some constant \(s\) [PAGE 4]. This prevents “inaccurate estimates causing incorrect trajectory assignment” for players such as central defenders with smaller ball response [PAGE 4]. The constant \(s\) is not numerically specified in the provided text. The operator breaks down if \(s\) is too small—locking a trajectory to a stale point—or too large—permitting implausible jumps.

**6. Velocity field and weighted correction.**  
Let \(v_k\) be the average known velocity at time \(k\), with units of metres per second. If no trajectories contain points at both \(k\) and \(k+1\), the paper sets \(v_k=0\) [PAGE 4]. Then
\[
w(s,t)=\alpha\int_s^t u(r)\,dr,
\]
where \(u\) is a linear interpolation of the velocities, \(w\) has units of metres, and \(\alpha\) is dimensionless; the paper reports \(\alpha\approx0.5\) as best [PAGE 5]. Breakdown occurs when the visible velocity sample is empty, when \(u\) is discontinuous across a stoppage, or when \(\alpha\) is tuned to a regime that differs from the target match.

**7. Continuous path interpolation.**  
For a trajectory with observed positions at \(t_1\) and \(t_2\) and no observations in \((t_1,t_2)\),
\[
x_i(t)=x_i(t_1)+w(t_1,t)
+\frac{t-t_1}{t_2-t_1}\left(x_i(t_2)-x_i(t_1)-w(t_1,t_2)\right).
\]
This is Eq. 7 [PAGE 5]. It has the same singularity \(t_2=t_1\). It is an interpolation operator, not a forecasting operator beyond the last observation. It can produce off-pitch or biomechanically implausible paths if the velocity field is corrupted by dead-ball clustering, if the nearest observations are far apart, or if the assigned trajectory is wrong.

**8. Error operators.**  
The paper reports mean error in metres, median error in metres, and total squared error in square metres. Examples include \(3.45\text{ m}\) overall in-phase mean, \(7.33\text{ m}\) off-camera mean, \(5.37\text{ m}\) off-camera median [PAGE 6], \(3.55\text{ m}\) out-of-phase overall mean, \(0.22\text{ m}\) for players observed in the previous frame [PAGE 7], and a reduction from \(2950\text{ m}^2\) to \(900\text{ m}^2\) before a goal kick [PAGE 10]. These are evaluation statistics, not guarantees; they are sensitive to the Hungarian matching used to compare estimated and true positions [PAGE 6].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage is a chain from event data to tracking data to approximate tracking. Event data is manual and sufficiently small to be produced from broadcast video, whereas tracking data is the “gold standard” but access is limited [PAGE 1]. Open-source tracking is extremely sparse: the paper says there are “only around 20 available matches” [PAGE 1], and it uses two Metrica Sports matches, reserving Match 1 for testing and Match 2 for training [PAGE 3]. The later availability of Statsbomb 360 changes the practical scope: the authors provide code for “around 200 matches” of discrete broadcast data [PAGE 2]. That is a retrocausal shift in the data economy: a method designed under two-match scarcity becomes relevant to a larger corpus, but its validation remains anchored to the small Metrica sample.

The modeling genealogy is equally revealing. The natural modern approach would be a Graph Neural Network, as in prior work, but the authors explicitly choose a “more parsimonious model, building a comparatively simple model based on autoregressive methods” because of sparse open-source training data [PAGE 2]. The later error analysis retroactively justifies part of that choice: the model is useful for coarse team structure, but the \(7.33\text{ m}\) off-camera mean and \(5.37\text{ m}\) median [PAGE 6] mark the limit of fine-grained claims. The final discussion even warns that analyses requiring high accuracy “has the potential to produce misleading results” [PAGE 11]. Thus the genealogy is not “simple model replaces tracking”; it is “simple model occupies a middle ground between event data and full tracking.”

Multi-week traps follow from that genealogy. A team could spend weeks tuning the ARMAX component on the two available matches and mistake in-sample smoothness for generalizable tracking. It could concatenate first and second halves without resetting, despite the paper testing them separately “as the players swapping sides during the interval would lead to substantial errors” [PAGE 5]. It could treat the \(0.22\text{ m}\) prior-frame error [PAGE 7] as representative, when that number is dominated by recently observed players. It could ignore dead-ball frames, even though the paper reports that event-adjacent frames reduce off-camera mean error to \(6.62\text{ m}\) [PAGE 7]. It could treat Statsbomb 360 frame intervals of about \(1.9\text{ s}\) [PAGE 5] as equivalent to the one-second test grid, when the error grows with time to nearest observation [PAGE 7]. It could also mishandle coordinate axes: the paper notes that Statsbomb measures x coordinates from the defending team’s goal line, so axes are not fixed, and some frames return errors due to ball-position disagreements [PAGE 10]. These are not minor implementation details; they are lineage traps that can invalidate downstream spatial conclusions.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_ME<RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>
The model’s “theory of mind” is collective and probabilistic, not strategic. It represents each player’s future position through a Gaussian conditioned on that player’s own history and the ball, and then recursively updates trajectory membership through the likelihood matrix \(Q\) [PAGE 3–4]. It does not represent intent, deception, or individual identity; the paper explicitly says it provides “the positions of the players on each team,” not individual trajectories [PAGE 2]. Therefore the relevant recursive reasoning is about hidden-state inference: given visible players, infer hidden players; given hidden players, maintain team structure; given team structure, assign future visible points.

Crisis habit regression appears in dead-ball and set-piece phases. The paper identifies a 3-minute stoppage after a foul where players move in “unusual patterns” and many are grouped closely together [PAGE 10]. In such a crisis regime, a model trained on open-play movement can regress toward average positional structure or toward the defensive line initialization. The paper acknowledges that initialization errors are possible but “generally insubstantial” [PAGE 4]. The counter-trap is the velocity correction in Eq. 7: rather than trusting only linear interpolation, the model borrows the visible centre-of-mass velocity field, with \(\alpha\approx0.5\) [PAGE 5]. This is a recursive social prior—hidden players are assumed to move in relation to visible players—but it is not a game-theoretic prior about opponent intentions.

The clock is the dominant confidence variable. Error is “highly correlated with the amount of time between the prediction and the nearest observation” [PAGE 7]. Players observed in the previous frame have \(0.22\text{ m}\) error [PAGE 7], while players off-camera for 20 seconds have mean error under 10 m and a 97.5th percentile under 25 m [PAGE 7]. The recursive trap is to confuse structural correctness with positional correctness: Figure 3b keeps the overall team shape roughly correct even when two players have been off-camera for at least 22 seconds [PAGE 9], but the individual positions are “reasonably inaccurate” [PAGE 9]. A counter-trap is to downweight any downstream metric that depends on precise off-camera location when the clock since nearest observation is large.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The source supports a geometric and temporal veto layer, but not a full biomechanical or weather layer. The pitch is fixed at \(120\text{ m}\times80\text{ m}\) [PAGE 3]. A source-grounded physical envelope is given by the statement that a professional athlete “could easily run between any two points on the pitch in 20s (a maximum distance of 145m)” [PAGE 7]. Therefore, for any predicted segment spanning 20 s, a displacement greater than 145 m is a veto:
\[
\Delta t=20\text{ s},\qquad \|\hat x(t+20)-\hat x(t)\|>145\text{ m}\ \Rightarrow\ \text{reject}.
\]
Equivalently, the coarse average-speed envelope is \(145/20=7.25\text{ m s}^{-1}\) over that 20 s window. This is not a sprint bound for shorter intervals; the source does not provide acceleration or force data, so a stricter biomechanical veto would require external assumptions.

A second veto is geometric: if the interpolated path exits the pitch rectangle \([0,120]\times[0,80]\) in metres, reject or flag. A third veto is assignment-based: if the Hungarian solution assigns two visible positions to the same trajectory in the same frame, it violates the paper’s explicit constraint that “a player cannot simulataneously be in more than one position” [PAGE 4]. A fourth veto is observational: if a frame has no visible outfield players, the model has no new assignment information, and any high-stakes inference should be labeled prediction-only rather than observation-corrected.

Weather is not modeled in the source. The paper contains no rain, wind, temperature, or surface variables, so no weather veto can be proved from this text alone. Biomechanical detail is also absent: there are no joint-angle, acceleration, or force-plate data. The admissible cross-layer proof is therefore limited to pitch geometry, time-to-nearest-observation, assignment uniqueness, and the 145 m/20 s envelope. Any stronger physical veto must be imported from an external biomechanics or weather dataset and stated as an additional assumption.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
**Scenario 1: Visibility-radius counterfactual.** Re-run the evaluation with visible-radius thresholds smaller and larger than the paper’s 30 m. The paper reports that 30 m yields “an average of 10.60 out of the 20 outfield players being visible” [PAGE 5], and the off-camera mean error is \(7.33\text{ m}\) [PAGE 6]. Prediction: reducing the visible radius below 30 m will increase the off-camera mean error above \(7.33\text{ m}\) and increase the upper tail; increasing it will lower the off-camera mean. Veto trigger: if a claimed deployment uses a visibility regime with fewer visible players but reports the same \(7.33\text{ m}\) mean without revalidation, reject the claim. This is verifiable by re-running the released code on Match 1 with altered visibility masks.

**Scenario 2: Dead-ball masking counterfactual.** Remove frames classified as dead-ball or event-adjacent. The paper reports that using only in-phase frames closest to recorded events drops the mean off-camera error “dramatically to 6.62m” from \(7.33\text{ m}\) [PAGE 7]. Prediction: masking dead-ball frames will reduce mean off-camera error by roughly \(0.7\text{ m}\) and shrink the high-error tail. Veto trigger: if a downstream model uses stoppage-time positions for fine spatial claims, veto that use unless the \(6.62\text{ m}\) regime is independently revalidated. This is verifiable against the provided event data and the released interpolation code.

**Scenario 3: Half-concatenation counterfactual.** Process the two halves as one continuous trajectory stream rather than separately. The paper states that the halves are tested separately “as the players swapping sides during the interval would lead to substantial errors” [PAGE 5]. Prediction: concatenating halves will create a side-swap discontinuity and increase assignment errors near the halftime boundary relative to separate-half processing. Veto trigger: if a pipeline concatenates halves without a reset or side-swap correction, reject its continuous tracking output. This is verifiable by comparing separate-half and concatenated-half runs on Match 1 using the same Hungarian error metric described on [PAGE 6].
</RLVR_COUNTERFACTUAL_VETOES>