---
source: "2026 - Graph-to-Grid (G2G) Continuous-Coordinate Feature Painting for Soccer Pass Surfaces - G nay et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/preprints/arXiv/2026"
pages: 39
model: deepseek/deepseek-v4.1-flash-1017
words: 9111
---

<NATIVE_REASONING>
We need answer. Need interpret task: User gives drive source paper G2G. They expect GSE + GSI Frontier Reasoning Foundry with exact XML sections, >=1000 words, no betting lines, formal LaTeX, cite pages/verbatim quotes. Need produce analysis of paper. No explicit question except source. Need infer likely need "reasoning foundry" on sports research paper, maybe extract operators, equations, genealogy, theory of mind, cross-layer veto adjudication, RLVR counterfactual vetoes. We need comply. Need not mention betting lines/odds. Need formal equations SI/information/probability units assumptions exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes. Need >=400 words THINK_TRACE and >=1000 overall. Need sections exact XML tags. Need include source operators/equations formal LaTeX. Need RETROCAUSAL_GENEALOGY historical/scientific lineage & multi-week traps. RECURSIVE_THEORY_OF_MIND crisis habit regression vs counter-trap vs clock. CROSS_LAYER_VETO_ADJUDICATION physical/biomechanical/weather veto proof. RLVR_COUNTERFACTUAL_VETOES 3 verifiable scenarios + predictions.

Need avoid betting lines. Need maybe discuss "no betting lines" not mention spreads etc. We can mention no odds? Better avoid.

Need make answer substantial. Need cite exact page markers and verbatim quotes. We have pages. Need ensure quotes exact from source. Use quotes from paper. Need identify operators: bilinear scatter-add Eq (3), logistic BCE, softmax NLL, PE Eq(1), combined V Eq(2), attention Eq(4), calibration temp, bootstrap, sign-flip max-T. Units: nats (natural log probability), probability, meters, ms. Breakdown regimes: boundary clipping, coincident nodes, permutation invariance, differentiable almost everywhere kinks at cell boundaries, sparse supervision at k*. Singularity: Jacobian wrt e_i weight pattern; non-invertibility? If delta=0 or 1, weights boundary; underdetermined surface away from k*. Need formal.

Need be careful: "SI/information/probability units". NLL nats is information. Probabilities dimensionless. Distances meters. Timing ms. MSE etc units? reward dimensionless. Need state.

Need quote page 8 Eq 3 maybe quote exact fragment. Need cite [PAGE 8 of 39]? User says cite exact [PAGE N] markers. Use [PAGE 8] perhaps. Need exact verbatim quotes. We'll include quotes in SOURCE_OPERATORS. Need use quotes from pages. Need ensure quote exact. Examples:
[PAGE 1] "Dense pass surfaces give, for every pitch cell, whether a pass played there would arrive, whether the carrier would choose it, and what the possession would then be worth."
[PAGE 1] "we evaluate the interpolated form: each player’s features are scattered bilinearly onto the grid at the player’s measured coordinates, so the surface loss trains the per-player encoder end to end."
[PAGE 3] Table 1 "G2G −C, eight-fold CV over 64 matches ... −0.251 [−0.263, −0.239]" maybe. Need exact? Table formatting. Could quote "ahead in 64 of 64 matches".
[PAGE 8] "For each of the three groups ... the painted channel block S_g..." Could quote. Need include equation LaTeX matching.
[PAGE 9] "It is linear in the embeddings and its Jacobian with respect to e_i is the weight pattern itself, so the surface loss backpropagates through the grid into whatever network produced the embedding." Good.
[PAGE 9] "Positions are inputs here, and the map is differentiable in them almost everywhere, with kinks at cell boundaries." Exact.
[PAGE 10] "Away from observed endpoints the convolutional core supplies only its locality and weight-sharing biases, not an explicit smoothness constraint." Actually page 9? It is on page 9 under 4.5. Quote.
[PAGE 19] "Frozen, the raw-feature arm has better likelihood point estimates than G2G..." maybe.
[PAGE 33] "The G2G arm opened the test set twice." quote exact. Good for traps.
[PAGE 34] "No calibration-error comparison in any study survives correction." exact? Page 33: "Calibration is unresolved. No calibration-error comparison in any study survives correction." Quote.
[PAGE 30] "the G2G family is more noise-sensitive than the raster controls: by σ = 1 m G2G has lost 1.61 nats of selection NLL against the original’s 1.09." exact.
[PAGE 17] "the write carries three quarters of the gain, the learned content one quarter." exact? Page 17: "The tournament-wide reading is therefore sharper than the holdout’s: the write carries three quarters of the gain, the learned content one quarter." Good.
[PAGE 35] conclusion "The operator is standard bilinear scatter-add; the finding is that the interface, not what is written through it, carries most of the gain." exact.
[PAGE 2] "These results concern observed-endpoint prediction, not calibrated evaluation of hypothetical passes." exact from abstract page1? Page 1: "These results concern observed-endpoint prediction, not calibrated evaluation of hypothetical passes." yes.

Need answer likely not betting. Could frame as "adjudication of evidence". Need no fantasy equations. We can use formal equations from source or derived correctly. We must not invent fake ratios. But can define sensible derived quantities? Need "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." We can use formal equations and derived decompositions from paper. Avoid invented arbitrary ratios. Could define normalized effect? No, maybe not.

Need "GSE + GSI Frontier Reasoning Foundry" maybe expected rigorous audit, with "THINK_TRACE" deep multi-hop derivation. Need include "gray-zone audit". Need mention "multi-week traps" in genealogy: holdout reuse, adaptive analysis, provider shift, calibration, endpoint semantics, tracking noise, seeds. Need "clock" in recursive theory of mind: crisis habit regression vs counter-trap vs clock. We need interpret: In sports modeling, "crisis habit regression" = fallback to legacy raster habits under pressure? "counter-trap" = using paper's recommendation raw painting? "clock" = time/season/provider drift. Need explicitly discuss. Could tie to model selection and deployment: under distribution shift (provider boundary), frozen G2G loses selection likelihood; raw painting numerically ahead; retraining restores. "Crisis habit regression" = reverting to raster core/legacy SoccerMap under uncertainty; "counter-trap" = overfitting to provider-specific capture endpoint; "clock" = temporal/season/provider drift and multi-week evaluation. Need be precise.

Need CROSS_LAYER_VETO_ADJUDICATION physical/biomechanical/weather veto proof. Paper has no weather. Need adjudicate: physical layer: tracking error; biomechanical: pass endpoint and receiver capture; weather: absent/not modeled. We can say no weather variables, so weather veto cannot be proven from paper; only tracking noise and physical pitch geometry. Need "veto proof" maybe list conditions that would veto claims: if provider error > effect; if endpoint capture rule confounds; if calibration fails; if value metric. Need cite. Need avoid betting.

Need RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. Need construct scenarios with measurable predictions using paper's quantities. RLVR = reinforcement learning with verifiable rewards? Need counterfactual veto scenarios. Need 3: (1) endpoint provenance veto: re-score external Part B stratified by capture vs next-event; predict G2G-C margin shrinks/reverses on next-event stratum, as paper's post-hoc found +0.102 on 282 next-event rows [PAGE 20]. (2) tracking noise veto: inject per-coordinate Gaussian σ=1 m; predict G2G lead compresses from +0.52 to +0.090 ±0.025 and loses 1.61 nats [PAGE 30]; veto if provider RMSE comparable. (3) frozen provider-boundary veto: score frozen checkpoints across provider; predict G2G-C selection NLL +0.079, no selection advantage; raw painter +0.030 vs C not resolved; retraining restores −0.239 [PAGE 18/19]. Need predictions exact numbers and falsification criteria. Could include calibration-error veto? Need 3.

Need source operators and equations: include Eq3 with weights, Eq1 PE, Eq2 combined, Eq4 attention, BCE/softmax NLL, temperature scaling. Need units. Need breakdown regimes. Need cite pages. Need "exact singularity/breakdown regimes": 
- Eq3 bilinear weights: if δ,ε∈[0,1] weights sum to 1. At cell boundary δ=0 or 1 one neighbor weight zero; kink non-differentiable in position. When clipping at boundary, positional resolution lost in outer half-cell strips. Coincident nodes accumulate but weights sum to one per node? Actually if multiple nodes same group in same cell contributions add; sum weights per node one, but channel holds sum over nodes. If two nodes same group, contributions add. If node out of frame masked zero. 
- Eq3 linear in e_i; Jacobian ∂S_g[c,y,x]/∂e_i[c'] = δ_{cc'} Σ_{a,b} w_ab 1[...] ; rank deficient for 12-dim embedding? At each cell receives up to 4 nodes? Inversion impossible if multiple nodes map same cell? Actually surface to embeddings not invertible when nodes coincide or same cell contributions sum. 
- Softmax PS NLL: if target probability →0, NLL →∞; calibration temperature T; if T too low overconfidence; if T too high underconfidence. 
- PE Eq1: product over shots, if x_s clipped at 0.999, max; combined Eq2. 
- Attention Eq4: softmax over neighbors; if no neighbors? N= empty, undefined; fully connected graph up to 23 nodes, so okay; edge bias MLP. 
- Bootstrap/sign-flip: min adjusted p 2/256=0.0078, 2/128=0.0156; small clusters; sign exchangeability assumption. 
Need not overdo.

Need maybe answer with sections. Need include >=1000 words. Need likely around 2500-3500 words. Desired oververbosity 5. Need exact XML tags. No markdown? Can use LaTeX within. Need include sections exact. Need ensure XML tags are valid? They specified exact tags. Use them. No extra sections? We can include only these XML sections. Need maybe no preamble? But can have brief. Need not mention betting. Avoid words "odds", "spread", "moneyline", "totals". "No betting lines" no need.

Need be careful "verbatim quotes" exact. Use block quotes? Within XML. Need cite exact [PAGE N]. Use `[PAGE 8]` not `[PAGE 8 of 39]`? They said exact [PAGE N] markers. Use [PAGE 8]. Good.

Need "THINK_TRACE" >=400 words. We can write 600. Need "multi-hop derivation & gray-zone audit". Include reasoning chain: premise → operator → attribution → transfer → noise → inferential limits. Need mention zero-betting. Need not mention betting.

Need "SOURCE_OPERATORS_AND_EQUATIONS": formal LaTeX. Need cite page quotes. Need include assumptions, units, breakdown.

Need "RETROCAUSAL_GENEALOGY": historical/scientific lineage. From paper: SoccerMap, EPV, U-Net, PointPillars/VoxelNet/Lift-Splat-Shoot, SPLATNet, GraphCast, Deep Sets, Set Transformer, graph networks, GAT. Multi-week traps: holdout reuse Dwork, adaptive sequence, pre-specified commitments, provider boundary, tracking noise, endpoint semantics. Need cite pages 1,2,4,5,12,33,34,35. Need "retrocausal" maybe show how later design decisions were shaped by earlier results, and how claims are back-propagated. Multi-week traps: reused eight-match holdout, 13-study adaptive sequence, first G2G test opening quarantined, post-hoc stratification, calibration unresolved, external capture rule. Need explicit.

Need "RECURSIVE_THEORY_OF_MIND": crisis habit regression vs counter-trap vs clock. Need formal? Could include a "decision under uncertainty" but avoid fake ratios. Maybe use qualitative states. Need mention model of analyst/coach/reader: "what will deployer do under pressure?" Crisis habit regression: when provider shifts or noise rises, deployer reverts to raster-only core because frozen G2G loses selection NLL [PAGE 18]; but raw painting is cheaper and retains 3/4 gain [PAGE 17, 35]. Counter-trap: if deployer overfits to external capture endpoint, G2G margin may be artifact; paper's post-hoc shows capture stratum carries effect, next-event rows +0.102 spans zero [PAGE 20]; so counter-trap is treating capture-rule advantage as universal. Clock: multi-week/season lag: retraining restores −0.239; frozen loses +0.079; the clock is provider/season drift, not in-match clock. Need mention "the model's own clock" in tracking: 29.97 Hz, 6 s flight window, 15 s value window, 1 s finite difference; these are time scales. That might be "clock". Good.

Need "CROSS_LAYER_VETO_ADJUDICATION": physical/biomechanical/weather veto proof. Need no weather variables. Physical: pitch 105x68, grid 104x68 ≈1m, cell-centre coordinates clipping; tracking error several metres. Biomechanical: pass endpoint at receiver capture for external 91.2%, receiver within 1m; this can favor front end writing player positions. Weather: not modeled; no wind/rain/temperature; cannot adjudicate weather veto. Need say any weather claim is outside evidence. Veto proof: if σ_track ≥ effect scale (0.239 nats? Not directly comparable), provider boundary frozen flips sign; calibration unresolved. Need formal conditions? Could define "veto if X". Need not invent ratio. Use paper's reported thresholds. Maybe use "empirical veto conditions" with reported quantities: σ=1 m compresses lead to +0.090 ±0.025; σ=2 m completion ordering within noise; frozen G2G-C +0.079 [0.036,0.121] loses. That is proof. Weather absent = non-identifiable, not proven.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable. Need include predictions with exact numbers. Use "RLVR" maybe as "reward-verifiable veto tests". Need ensure each has: counterfactual intervention, verifier metric, predicted outcome, veto rule. Need cite. 
Scenario 1: endpoint-provenance counterfactual: Recompute Study 7 Part B rows stratified by capture vs next-event. Prediction: G2G-C selection NLL on capture stratum −0.266 [−0.323,−0.216] in 7/7; on 282 next-event rows +0.102 [−0.013,+0.247], 2/7. Veto: if next-event stratum is primary or >? then external interface effect not established; World Cup remains. 
Scenario 2: tracking-noise counterfactual: inject i.i.d. Gaussian σ=1 m per coordinate into both raster and graph. Prediction: G2G loses 1.61 nats vs original 1.09; lead over nearest control +0.090 ±0.025 (worst +0.050); at 2 m completion ordering within noise; D beats G2G 10/10. Veto if deployment provider error ≥1 m and objective completion/localization? Actually selection lead remains positive. Veto for completion ranking; not selection. 
Scenario 3: frozen provider-boundary + raw painter: score locked checkpoints on IDSSE. Prediction: G2G-C +0.079 [0.036,0.121] (C better), G2G-Draw +0.048 [0.023,0.070], adjusted p=0.062; raw painter Draw-C +0.030 [−0.021,0.084] no resolution; retrained G2G-C −0.239 [−0.285,−0.197] 7/7. Veto: if no retraining allowed, do not deploy G2G as selection-likelihood superior; use raster core or raw painter. 
Maybe include calibration as fourth? Need exactly 3. Could mention calibration in cross-layer.

Need "ZERO BETTING LINES" ensure not mention odds/spread/totals/moneyline. Avoid "bet" words. Sports data okay. "pass selection" not betting. Good.

Need "ZERO TOY EQUATIONS" avoid arbitrary ratios. But we might mention "three quarters" from paper; not equation invented. Fine.

Need maybe include "formal LaTeX equations" with units. Need write equations in LaTeX. Use `\mathrm{nat}`? NLL is nats. Use `\Delta \mathrm{NLL}`. Need state probabilities dimensionless, nats information. For Eq3, weights dimensionless; e_i dimensionless? Features normalized; embedding dimensionless. S_g channel values dimensionless. Need "SI" for positions meters; timing seconds/Hz/ms. Good.

Need mention "singularity" in formal: 
- Eq3 Jacobian w.r.t e_i: `\partial S_g[c,y,x]/\partial e_i[c'] = \delta_{cc'} \sum_{a,b} w_{ab}(\delta_i,\epsilon_i) \mathbf{1}[x=\bar u_i+a]\mathbf{1}[y=\bar v_i+b]`. If two nodes have same group and same coordinates, the map `{e_i} -> S_g` has rank ≤ number of occupied cells ×12, not invertible; coincident nodes' embeddings sum. Actually if same group and same cell, contributions add at same channels; cannot separate. At clipping boundary, weights collapse; outer half-cell strips lose resolution. At δ=0/1 or ε=0/1, derivative w.r.t position has kink; position gradient not defined exactly. 
- PS softmax: `p_\theta(k)= exp(z_k)/Σ_l exp(z_l)`, NLL `-log p_\theta(k*)`. If logits finite, probability positive; if overflows, numerical; temperature `T` with `p_T(k)=softmax(z/T)`. As T→0, NLL→0 for correct class, ∞ for incorrect? Actually if correct class highest, NLL→0; if not, ∞. T→∞ uniform, NLL→ln7072≈8.864 nats (uniform from Table 4). Good exact. Could mention uniform selection NLL 8.864 [PAGE 16]. 
- BCE at k*: `-[y log σ(z) + (1-y) log(1-σ(z))]`, if σ→0 and y=1, divergence. 
- PE Eq1: product over shots; if x_s clipped 0.999, range [-1,1]; combined Eq2. 
- Attention Eq4: softmax over neighbors; if N(i) empty, undefined; graph fully connected up to 23 nodes so not. 
- Bootstrap: min p floors. Good.

Need maybe mention "surface away from k* is extrapolation" as breakdown. Quote [PAGE 9]: "Away from observed endpoints the convolutional core supplies only its locality and weight-sharing biases, not an explicit smoothness constraint." Perfect.

Need "SOURCE_OPERATORS_AND_EQUATIONS" with quotes and equations. Need not too long but enough.

Need "THINK_TRACE" multi-hop. Include maybe 8 steps. Need "gray-zone audit": what's gray? 
- "Interface effect" measured on observed endpoints, not hypothetical passes [PAGE 1].
- "raw painting carries 3/4" but Draw trains PP/PS only? Table 2 says Draw trains PP/PS heads only. Need note: attribution for PE absent. 
- "learned increment" small, seed-sensitive on holdout but resolved in CV/tuned. 
- "external effect" confounded with capture endpoint. 
- "calibration" unresolved. 
- "frozen transfer" loses likelihood. 
- "no weather" etc.
Need maybe mention "parameter counts" and "wide control matched" to rule out capacity. Good.

Need "RETROCAUSAL_GENEALOGY": historical lineage:
- SoccerMap/EPV (2017-2021) dense surface
- U-Net (2015) and Overmeer 2025
- PointNet/Deep Sets/Set Transformer (2017-2019)
- VoxelNet/PointPillars/Lift-Splat-Shoot (2018-2020) entity-to-grid
- SPLATNet/bilateral grid/softmax splatting/differentiable surface splatting (2007-2020)
- GraphCast (2023) grid-mesh learned transfer
- GAT/Graph Networks (2018-2022)
- Statistical lineage: bootstrap, Holm, Westfall-Young, Dwork holdout reuse, Pineau reproducibility.
Need "retrocausal" show later evidence back-justifies earlier interface; earlier holdout exposure contaminates. Multi-week traps:
1. Reused eight-match holdout across 9 studies (paper says Studies 1,2,3,4,6,8,9,11,13 and 12B run on previously used holdout [PAGE 14]).
2. Thirteen-study adaptive sequence not corrected across sequence [PAGE 33].
3. G2G opened test twice; first aborted [PAGE 33].
4. Post-hoc external stratification [PAGE 20].
5. Calibration and value metrics unresolved [PAGE 33-34].
Need cite.

Need "RECURSIVE_THEORY_OF_MIND": Maybe write from perspectives:
- Deployer under crisis: provider shift/noise. Habit regression: fall back to raster-only C or original SoccerMap because frozen G2G loses selection likelihood at provider boundary [PAGE 18]. But that regression ignores raw painting cheaper and retains 3/4 gain [PAGE 17,35]; counter-trap: over-trust raw painting across provider because Draw-C frozen +0.030 interval spans zero [PAGE 19/20], so not resolved. 
- Analyst under publication pressure: might over-read "three quarters" as universal; paper says external capture confound [PAGE 20]; counter-trap is "capture rule artifact". 
- Clock: in-match 6s flight window, 15s value window, 1s velocity finite difference, 29.97 Hz tracking; multi-week season/provider drift is different clock. The model's clock is not trained for weather/season. 
Need mention "crisis habit regression vs counter-trap vs clock" exact terms. Could be:
  - Crisis-habit regression: when uncertainty spikes, operators revert to the legacy raster core; predicted by frozen transfer sign reversal.
  - Counter-trap: adopting G2G because it wins CV, then at deployment with new provider seeing worse selection; or adopting raw painter because it transfers frozen, then missing learned increment in-distribution.
  - Clock: the evaluation clock (holdout reuse/adaptive sequence) and physical clock (tracking frequency, windows) create stale evidence; retraining resets but not within multi-week tournament. 
Need maybe avoid "operators" ambiguous.

Need "CROSS_LAYER_VETO_ADJUDICATION": 
- Physical layer: field geometry 105x68, grid 104x68, cell ~1m, clipping; tracking error. 
- Biomechanical layer: receiver capture within 1m, pass endpoint; external 91.2% capture vs 0.21% World Cup; capture rule places endpoint at tracked player, which front end can exploit. 
- Weather layer: no weather variables or wind/rain; cannot prove weather robustness; any weather veto is unsupported. 
- Veto adjudication: 
  * Veto selection-likelihood superiority under provider shift if no retraining: paper's +0.079 favors C. 
  * Veto completion ranking under σ≥2m: ordering within noise; D ahead. 
  * Veto external general claim if capture stratum only: next-event +0.102 spans zero. 
  * Calibration veto: no calibration-error comparison survives. 
Need "proof" maybe "proof by reported intervals" not mathematical proof. Use "adjudication".

Need maybe mention "weather model" in paper as related work only: GraphCast is weather model, not soccer weather. The paper uses "graph weather models" as lineage [PAGE 2]. But no weather variables. Good.

Need "RLVR_COUNTERFACTUAL_VETOES" with "verifiable" maybe list predictions and acceptance. Need ensure no betting lines. Good.

Need final answer maybe around 3000 words. Need keep within desired oververbosity 5, but requirements need depth. We can produce ~2800 words. Need all exact XML tags. No markdown? XML tags can contain markdown/LaTeX. Fine.

Need include "source text" page quotes. Need exact quote check:
- PAGE 1: "Dense pass surfaces give, for every pitch cell, whether a pass played there would arrive, whether the carrier would choose it, and what the possession would then be worth." exact.
- PAGE 1: "We evaluate the interpolated form: each player’s features are scattered bilinearly onto the grid at the player’s measured coordinates, so the surface loss trains the per-player encoder end to end." Note source says "We evaluate" capital. Good.
- PAGE 1: "These results concern observed-endpoint prediction, not calibrated evaluation of hypothetical passes." exact.
- PAGE 8: "Each player and the ball is a node with nine features — normalised position, velocity, team and ball-role identity — on fixed physical scales, nothing fitted to the corpus." exact? Page 8: "Each player and the ball is a node with nine features — normalised position, velocity, team and ball-role identity — on fixed physical scales, nothing fitted to the corpus." yes.
- PAGE 8: "For each of the three groups g ∈ {attackers, defenders, ball} the painted channel block S_g ∈ R^{12×68×104} is" exact? Source has `g∈{attackers, defenders, ball}`. Good.
- PAGE 9: "It is linear in the embeddings and its Jacobian with respect to e_i is the weight pattern itself, so the surface loss backpropagates through the grid into whatever network produced the embedding." exact.
- PAGE 9: "Positions are inputs here, and the map is differentiable in them almost everywhere, with kinks at cell boundaries." exact.
- PAGE 9: "Away from observed endpoints the convolutional core supplies only its locality and weight-sharing biases, not an explicit smoothness constraint." exact? Page 9: "Away from observed endpoints the convolutional core supplies only its locality and weight-sharing biases, not an explicit smoothness constraint." yes.
- PAGE 10: "The graph branch’s full marginal cost over arm C is 45,454 parameters: 16,654 in the projector plus 28,800 that the 36 painted channels add to the core’s first convolution." exact? Page 10. Could use.
- PAGE 17: "The tournament-wide reading is therefore sharper than the holdout’s: the write carries three quarters of the gain, the learned content one quarter." exact.
- PAGE 18: "Frozen, the World Cup models find the external corpus harder by more than a nat of selection NLL each, and the shift does not treat the arms alike" exact? Page 18.
- PAGE 18: "On selection NLL G2G is level with both SoccerMap controls and behind arm C in every one of the seven matches" exact? Page 18: "On selection NLL G2G is level with both SoccerMap controls and behind arm C in every one of the seven matches, a contrast that clears the max-𝑇test in C’s favour". Good.
- PAGE 19: "What transfers. The front-end margin over the same core, G2G−C, is −0.239 nats on the external corpus and −0.251 on the 64-match cross-validation" exact? Page 19: "What transfers. The front-end margin over the same core, G2G−C, is −0.239 nats on the external corpus and −0.251 on the 64-match cross-validation of Sec. 6.1: trained on about three thousand passes from another provider..." Good.
- PAGE 20: "The effect is carried by the capture stratum: there G2G leads arm C by −0.266 nats [−0.323, −0.216] in all seven matches, while on the 282 next-event rows the point estimate turns round to +0.102, with an interval [−0.013, +0.247] that spans zero and two of seven matches favouring G2G" exact? Page 20: yes. Use.
- PAGE 30: "the G2G family is more noise-sensitive than the raster controls: by σ = 1 m G2G has lost 1.61 nats of selection NLL against the original’s 1.09." exact. Also "it compresses from +0.52 nats at σ = 0 to +0.090 ± 0.025 at 1 m (worst draw +0.050) before re-widening to +0.53 at 4 m." exact.
- PAGE 33: "The G2G arm opened the test set twice." exact. "The complete first-cycle block is printed in full" okay.
- PAGE 33: "Calibration is unresolved. No calibration-error comparison in any study survives correction." exact.
- PAGE 34: "No arm beats a constant-zero predictor on EPV MAE" exact? Page 34: "No arm beats a constant-zero predictor on EPV MAE" yes.
- PAGE 35: "The operator is standard bilinear scatter-add; the finding is that the interface, not what is written through it, carries most of the gain." exact.

Need maybe cite page 3 for numbers:
- Table 1: G2G-C eight-fold −0.251; tuned −0.292; external −0.239; Draw-C −0.186; G2G-Draw −0.065. Good.

Need "formal LaTeX" include:
Eq3:
\[
S_g[c,y,x]=\sum_{i\in g}\sum_{a,b\in\{0,1\}} w_{ab}(\delta_i,\epsilon_i)\mathbf{1}[x=\bar u_i+a]\mathbf{1}[y=\bar v_i+b]e_i[c],
\]
\[
w_{ab}(\delta,\epsilon)=\delta^a(1-\delta)^{1-a}\epsilon^b(1-\epsilon)^{1-b}.
\]
Coordinates:
\[
u_i=\mathrm{clip}(W x_i/105-1/2,0,W-1), \quad v_i=\mathrm{clip}(H y_i/68-1/2,0,H-1),
\]
with W=104,H=68. Good. Note physical position x_i,y_i in meters? The paper uses x_i/y_i physical positions; 105 and 68 pitch dimensions in meters. Good.
BCE:
\[
\mathcal{L}_{PP}=-\left[y\log\sigma(z_{k^*})+(1-y)\log(1-\sigma(z_{k^*}))\right].
\]
PS:
\[
\mathcal{L}_{PS}=-\log\frac{\exp(z_{k^*})}{\sum_{k=1}^{7072}\exp(z_k)}.
\]
PE Eq1:
\[
r=\left[1-\prod_{s\in S_{\text{own}}}(1-x_s)\right]-\left[1-\prod_{s\in S_{\text{opp}}}(1-x_s)\right]\in[-1,1].
\]
Combined:
\[
\hat V(k)=\hat p(k)\hat v_{\text{succ}}(k)+(1-\hat p(k))\hat v_{\text{miss}}(k).
\]
Attention:
\[
\alpha_{ij}=\mathrm{softmax}_{j\in\mathcal N(i)}\left(\frac{\langle q_i,k_j\rangle}{\sqrt{32}}+b(e_{ij})\right).
\]
Temperature:
\[
p_T(k)=\frac{\exp(z_k/T)}{\sum_l \exp(z_l/T)}.
\]
Maybe sign-flip:
\[
t=\frac{\overline d}{s_d/\sqrt{8}}, \quad p_{\max T}^{(j)}=\frac{1}{256}\sum_{\pi\in\{-1,+1\}^8}\mathbf{1}\{ \max_l |t_l(\pi)|\ge |t_j|\}.
\]
But this is formal and from paper. Include? Good. Units.

Need "assumptions" for operators:
- Bilinear weights assume δ,ε∈[0,1); clipping; coincident contributions; no per-node normalization? Actually per group. 
- Surface supervision only at k*; away is extrapolation. 
- PS softmax over 7,072 cells; NLL nats. 
- PP BCE at observed endpoint; calibration only at observed endpoints. 
- PE xG external; product approximate; 15s.
- Attention on fully connected graph up to 23 nodes; permutation equivariant. 
- Bootstrap assumes exchangeability for sign-flip; small cluster floors. 
Need "exact singularity/breakdown regimes" maybe explicitly:
1. `T→0`: PS NLL diverges for incorrect class; `T→∞`: uniform NLL `\ln 7072 = 8.864` nats [PAGE 16]. 
2. `σ(z)→0` with y=1 or `σ(z)→1` with y=0`: BCE diverges. 
3. `δ_i,ε_i` at cell boundary: position Jacobian kink; clipping outer half-cell strips loses resolution; coincident nodes make embedding-to-surface non-invertible. 
4. Sparse supervision: away from k* no label; no smoothness constraint; calibration not established. 
5. Attention: if neighborhood empty, softmax undefined; graph fully connected so not realized. 
6. Bootstrap: 8 clusters floor 2/256=0.0078; 7 clusters 2/128=0.0156; sign exchangeability assumption. 
Need mention all.

Need "SOURCE_OPERATORS_AND_EQUATIONS" may be long. Fine.

Need no "betting lines" but we can say "no line/odds" maybe avoid. Don't mention.

Need maybe answer begins directly with `<THINK_TRACE>`. Good.

Need check word count. Need overall >=1000. We'll aim ~2500. THINK_TRACE ~600. Others ~400 each. Total ~2500. Good.

Need "Deep multi-hop derivation & gray-zone audit (>=400 words)." We can ensure.

Need "GSE + GSI Frontier Reasoning Foundry" perhaps include "GSE/GSI" in think? Not necessary. But maybe mention "gray-zone audit". Good.

Potential issue: "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." We won't. But "odds" appears in "odds"? Avoid. "probability" okay. Don't use "bet". "expected" okay. 
Potential issue: "ZERO TOY EQUATIONS" We will not invent ratios. The "three quarters" is from paper, not equation. Good.
Potential issue: "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." We'll include many. Need exact quotes not paraphrase inside quotation marks. We'll ensure exact. For equations, quote fragments not necessarily all. Good.

Need maybe mention "source pages provided" and "PAGE" markers. Use `[PAGE 8]`.

Need craft.

Let's draft THINK_TRACE:
- Start: The paper's causal claim is interface effect: continuous-coordinate bilinear scatter-add of per-node features into pitch grid, trained through dense surface loss. 
- Chain: Eq3 writes 12-d embeddings into 36 channels; Jacobian is bilinear weight pattern; surface loss at k* backprop to encoder. This is not graph message passing per se; attribution steps C→D→G2G and Draw. 
- Evidence hierarchy: CV 64 matches −0.251; tuned −0.292; external retrained −0.239; all 64/7 ahead. Raw painting −0.186 CV, −0.225 tuned, −0.178 external; learned increment −0.065/−0.067/−0.061. 
- Gray zone: observed endpoint only, not hypothetical; PS whole surface shaped but PP/PE sparse; calibration unresolved; external endpoint capture 91.2% vs 0.21% and post-hoc stratum next-event +0.102 spans zero; tracking noise σ=1m compresses selection lead; frozen provider boundary flips; value MAE no arm beats zero; test opened twice; reused holdout. 
- Inference: max-T exact/floors; 64 clusters 10^-5; 8 clusters 2/256; 7 clusters 2/128; sign exchangeability assumption. 
- Conclusion: strongest claim is in-distribution selection with fixed provider and retraining; weakest is frozen transfer/calibration/value/weather. 
Need mention "multi-hop" maybe equations.

SOURCE_OPERATORS:
- Quotes and equations.
- Units and breakdown.

RETROCAUSAL_GENEALOGY:
- Historical lineage and traps. Use quotes.
- Multi-week traps.

RECURSIVE_THEORY_OF_MIND:
- crisis habit regression/counter-trap/clock.

CROSS_LAYER_VETO:
- physical/biomechanical/weather.

RLVR:
- 3 scenarios.

Need maybe include "adjudication" in cross-layer: "weather veto cannot be adjudicated; paper has no weather covariates." Good.

Need "RLVR_COUNTERFACTUAL_VETOES" maybe use enumeration. Include predicted exact values. Good.

Need "exact XML sections" no extra closing? Use exact tags. Need ensure `<RLVR_COUNTERFACTUAL_VETOES>` tag matches? User lists `<RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>` but there is missing `<`? Actually they wrote `<RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>` okay. Use same.

Need maybe no markdown headings outside. Fine.

Need include "verbatim quotes" exact. We can include blockquote inside XML? Fine.

Need be careful with `PAGE 3` quote "G2G −C, eight-fold CV..." table maybe not verbatim sentence. Use "ahead in 64 of 64 matches" exact. Good.

Need "PAGE 1" quote "Dense pass surfaces..." good.

Need "PAGE 8" quote "For each of the three groups..." maybe exact includes "𝑔∈{attackers, defenders, ball}" but we can quote without equation. Use exact "For each of the three groups ... the painted channel block ..." with ellipsis? Verbatim with ellipsis okay? Better quote exact small fragment: "This is the painting step." [PAGE 9]? Actually page 9: "This is the painting step. It is linear in the embeddings..." Good. Use exact.

Need "Page 9 quote: "It is linear in the embeddings and its Jacobian with respect to e_i is the weight pattern itself..." exact. Good.

Need "PAGE 10" quote "No advantage of G2G can be attributed to parameter count alone." exact? Page 10: "No advantage of G2G can be attributed to parameter count alone." yes. Use.

Need "PAGE 18" quote "Frozen, the World Cup models find the external corpus harder by more than a nat of selection NLL each, and the shift does not treat the arms alike" exact. Use.
Need "PAGE 18" quote "the raster-only core degrades most gracefully." exact? Page 18: "the raster-only core degrades most gracefully." yes. Good.
Need "PAGE 19" quote "The front-end margin over the same core, G2G−C, is −0.239 nats on the external corpus and −0.251 on the 64-match cross-validation" exact. Good.
Need "PAGE 20" quote "The effect is carried by the capture stratum..." exact. Use.
Need "PAGE 30" quote "the G2G family is more noise-sensitive than the raster controls..." exact. Use.
Need "PAGE 33" quote "The G2G arm opened the test set twice." exact. Use.
Need "PAGE 33" quote "Calibration is unresolved. No calibration-error comparison in any study survives correction." exact. Use.
Need "PAGE 35" quote "The operator is standard bilinear scatter-add; the finding is that the interface, not what is written through it, carries most of the gain." exact. Use.

Need maybe "PAGE 17" quote "The tournament-wide reading is therefore sharper than the holdout’s: the write carries three quarters of the gain, the learned content one quarter." exact. Use.

Need "PAGE 16" uniform NLL 8.864. Quote? Table 4 "Uniform over the grid 8.864". Good.

Need "PAGE 9" "Away from observed endpoints..." exact. Use.

Need "PAGE 9" "the map is differentiable in them almost everywhere, with kinks at cell boundaries." exact. Use.

Need "PAGE 8" "coordinates ... clip" exact? We can quote "The upper neighbours are clipped to the last valid indices. Coincident boundary contributions accumulate, so the weights still sum to one; clipping sacrifices positional resolution in the outer half-cell strips." Page 9 actually. Use exact quote. Good.

Need "PAGE 9" "Masked nodes contribute zero." exact. Good.

Need maybe "PAGE 10" "The graph branch’s full marginal cost..." exact. Use.

Need "PAGE 14" "Studies 1, 2, 3, 4, 6, 8, 9, 11 and 13 and Part B of Study 12 run on the previously used eight-match holdout and are not evaluations on new data." exact. Use. Good.

Need "PAGE 14" "Study 5 first scores 56 of the 64 matches as test cases" exact. Use maybe.

Need "PAGE 33" "The attribution ladder was first run post hoc." exact. Use.

Need "PAGE 33" "The replications reuse the holdout, and therefore do not cure adaptivity." exact. Use.

Need "PAGE 34" "No arm beats a constant-zero predictor on EPV MAE" exact. Use.

Need "PAGE 20" "the World Cup result, whose labels are almost entirely next-event, shows that the interface effect does not require that rule." exact? Page 20: "the World Cup result, whose labels are almost entirely next-event, shows that the interface effect does not require that rule." yes.

Need "CROSS_LAYER" weather: no quote. State absence.

Need "RLVR": use numbers. Need maybe not call "reward" if RLVR. Fine.

Need maybe mention "RLVR" in context "verifiable reward veto". Good.

Need final answer. Ensure XML sections no invalid ampersands? XML text can include `&` if unescaped? Better avoid ampersands? We may write "PP/PS" not ampersand. Use "and". But LaTeX has `&`? Avoid align environments with &. Use display equations without alignment. Use `\begin{aligned}`? `&` would need escape in XML? It's text; XML parser may treat `&` invalid. We should avoid raw ampersand. Use no `&` in equations. Use `\left[` etc. Use `\sum`. Avoid `&`. Use `\mathbf{1}`. Good. Avoid `<` in text? XML tags use <; equations with `<` could be parsed? If inside XML, `<` must be escaped. We need be careful: In XML text, `<` invalid. Use `\lt`? Better avoid `<` symbols. Use `\le`, `\ge` in LaTeX? `\le` no `<`. Avoid "p < 0.05"; use `p \le 0.05`? But `<` not allowed. Use `p \lt 0.05`? LaTeX `\lt` not standard? Use `p \leq 0.05`. Good. Avoid "σ=1 m" no issue. Avoid "G2G−C" uses minus okay. Avoid `>`? `>` is okay in XML text? `>` generally allowed except `]]>`. But `<` not. Avoid `<` entirely. Use `\le`, `\ge`. Avoid "−0.251 [−0.263, −0.239]" okay. Avoid `<5 m` use "within 5 m". Avoid "MSE difference +1.44 × 10−5, [−7.10 × 10−5, +7.71 × 10−5]" okay. Avoid "p<0.01" use "p \le 0.01" or "adjusted p below 0.01". Good.
Need avoid `&` in equations. Use separate equations. Good.
Need avoid raw `<` in text "less than". Use words. Good.
Need avoid `>`? We can use "greater than". Use `\ge` in LaTeX. Good.

Need XML tags contain LaTeX with `\{`? braces okay. Use `\mathbf{1}`. Good. `_` okay. `^` okay. `\` okay. No `<`.
Need avoid `&` in "R&D"? no.

Need "p < 0.05" change to "adjusted p below 0.05". Good.

Need ensure quotes with `“` and `”` okay. Apostrophes okay. `−` okay. `×` okay. `≈` okay. `≥` maybe not `<`; okay. But XML text with `≥` okay. Use `\ge` in LaTeX.

Need "SI/information/probability units": mention "nats", "dimensionless", "meters", "milliseconds", "Hz", "seconds". Good.

Need "formal LaTeX equations" no `&`. Use `\begin{array}{l}`? `&` no. Use separate display. Good.

Need "exact singularity/breakdown regimes": use `T \to 0` etc. Good.

Need maybe "softmax over 7,072 cells" with `\sum_{k=1}^{7072}`. Good.

Need final. Need not include citations in every sentence; enough.

Let's write. Need ensure THINK_TRACE >400 words. We'll make ~700. Other sections enough.

Need maybe mention "no betting lines" not needed. Ensure no "odds" word. Good.

Need answer in one message. Use XML. 
Need maybe at end no summary outside. Fine.

Let's compose carefully with exact quotes and no `<` in text. Use `\le` for less/equal. Avoid "under 0.05" okay.

Potential issue: In XML, `\le` includes no `<`. Good.
Potential issue: `\mathrm{NLL}` okay.
Potential issue: `\text{...}` okay.
Potential issue: `%` no.
Potential issue: `#` no.
Potential issue: `_` okay.
Potential issue: `\mathcal{N}` okay.
Potential issue: `\mathbb{R}` okay.
Potential issue: `\mathbf{1}` okay.

Need "PAGE 8" quote includes `R12×68×104` no `<`. Good.
Need "PAGE 3" table quote "−0.251 [−0.263, −0.239]" okay.
Need "PAGE 16" "8.864" okay.

Need "CROSS_LAYER_VETO" weather: "no weather covariates, no wind, rain, temperature, or surface state." Good. This is not in source but absence. Cite no page? State "the source provides no weather layer." Fine.

Need "biomechanical" maybe "receiver-capture within 1 m" quote? Page 6: "first frame where the ball comes within 1 m of the annotated receiver after ≥2 m of travel" exact. Use [PAGE 6]. Good.
Need "physical" quote grid 104x68 ≈1m cells [PAGE 7]. Good.
Need "tracking error" quote page 34 "Broadcast-derived positions carry provider-dependent error reaching several metres" exact? Page 34: "Broadcast-derived positions carry provider-dependent error reaching several metres (Crang et al., 2026; Mills et al., 2026)." Use. Good.

Need "RECURSIVE_THEORY_OF_MIND" quote "Frozen across a provider boundary the likelihood advantage is lost; injected tracking error compresses it." [PAGE 1] exact? Page 1 abstract: "Frozen across the provider boundary the likelihood advantage is lost; injected tracking error compresses it." Actually page 1: "Frozen across the provider boundary the likelihood advantage is lost; injected tracking error compresses it." Let's check: Abstract says "Frozen across the provider boundary the likelihood advantage is lost; injected tracking error compresses it." Page 1. Use exact. Good.

Need "RETROCAUSAL" quote "The original three-arm comparison is development history, not independent confirmation." [PAGE 3] exact? Page 3: "The original three-arm comparison is development history, not independent confirmation." yes. Use.
Need "Studies 1, 2, 3, 4, 6, 8, 9, 11 and 13 and Part B of Study 12 run on the previously used eight-match holdout and are not evaluations on new data." exact. Use.

Need "PAGE 12" Dwork? quote not necessary. Use citation. 
Need "PAGE 12" "The analysis is a hierarchical bootstrap" exact. Use.

Need "RLVR" scenario 1 includes "post-hoc analysis that no commitment record covers" [PAGE 20] exact? Page 20: "We therefore re-scored the locked Part B out-of-fold rows inside each stratum, a post-hoc analysis that no commitment record covers." exact. Use.
Need scenario 2 quote "Under independent noise G2G’s lead over the nearest control is positive in every draw at every level; it compresses from +0.52 nats at σ = 0 to +0.090 ± 0.025 at 1 m (worst draw +0.050) before re-widening to +0.53 at 4 m." exact. Use.
Need scenario 3 quote "Frozen across a provider boundary the likelihood advantage is lost" maybe.

Need "CROSS_LAYER" "the external margin may be partly a property of the capture rule" [PAGE 20] exact? Page 20: "Two readings survive: the external margin may be partly a property of the capture rule, and the World Cup result, whose labels are almost entirely next-event, shows that the interface effect does not require that rule." Exact. Use.

Need maybe "weather" not in paper, but GraphCast lineage is weather model. We can say "The only 'weather' in the source is GraphCast as a representation lineage, not a soccer covariate." [PAGE 2] quote "graph weather models (Lam et al., 2023)" exact? Page 2: "graph weather models (Lam et al., 2023)." Good. Use.

Need final now.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s core derivation is an interface argument, not a new graph operator. The chain is: (i) represent each player and ball as a 9-feature node; (ii) map each node to a 12-dimensional embedding; (iii) bilinearly scatter-add that embedding into a 36-channel pitch grid at the node’s measured continuous coordinates; (iv) concatenate those 36 painted channels to a raster stack; (v) train the whole path through a dense surface loss supervised at the observed endpoint cell \(k^*\). The paper states the premise plainly: “Dense pass surfaces give, for every pitch cell, whether a pass played there would arrive, whether the carrier would choose it, and what the possession would then be worth” [PAGE 1]. It then states the experimental object: “We evaluate the interpolated form: each player’s features are scattered bilinearly onto the grid at the player’s measured coordinates, so the surface loss trains the per-player encoder end to end” [PAGE 1]. That is the multi-hop causal path the evidence is meant to test.

The first hop is operator-level. Equation (3) is a bilinear scatter-add over the four surrounding cell centres. It is linear in the embedding \(e_i\); the Jacobian with respect to \(e_i\) is the bilinear weight pattern. The paper says: “It is linear in the embeddings and its Jacobian with respect to \(e_i\) is the weight pattern itself, so the surface loss backpropagates through the grid into whatever network produced the embedding” [PAGE 9]. The map is differentiable in position almost everywhere, with kinks at cell boundaries [PAGE 9]. This matters because the claimed mechanism is sub-cell placement, not just extra channels. If placement is quantised to nearest cells, the selection NLL penalty is \(+0.084\) for arm D and \(+0.093\) for G2G [PAGE 24]. If the grid is made four times finer, the raster core does not recover the gap and localisation worsens [PAGE 26]. If sub-cell offsets are added as raster features, they close only about a quarter of the gap [PAGE 25]. The operator and the write, not resolution alone, carry the signal.

The second hop is attribution. The full front end improves selection NLL over the same raster-only core by \(-0.251\) nats in eight-fold cross-validation over 64 matches, \(-0.292\) under per-arm tuning with five seeds, and \(-0.239\) after external retraining [PAGE 3]. Raw-feature painting with no learned encoder retains three quarters: \(-0.186\) in cross-validation, \(-0.225\) tuned, \(-0.178\) external [PAGE 3, PAGE 17]. The learned encoder plus message passing add \(-0.065\) to \(-0.067\) [PAGE 3]. The paper’s summary is explicit: “the write carries three quarters of the gain, the learned content one quarter” [PAGE 17]. The parameter-count control is also addressed: widening the raster core to within 0.25 percent of G2G’s parameter count does not explain the gain, and the paper states: “No advantage of G2G can be attributed to parameter count alone” [PAGE 10].

The gray zone begins where the supervision ends. The model is trained at one observed endpoint per pass. The paper states: “Away from observed endpoints the convolutional core supplies only its locality and weight-sharing biases, not an explicit smoothness constraint” [PAGE 9]. It also warns: “These results concern observed-endpoint prediction, not calibrated evaluation of hypothetical passes” [PAGE 1]. So the dense surface is not a validated counterfactual map. The PS head is the one whose softmax gradient touches every logit, but PP and PE are sparse-supervised. Calibration is unresolved: “No calibration-error comparison in any study survives correction” [PAGE 33]. Value is metric-dependent: “No arm beats a constant-zero predictor on EPV MAE” [PAGE 34]. The external corpus is confounded by endpoint provenance: its labels are 91.2 percent receiver captures, and the post-hoc next-event stratum gives \(+0.102\) with an interval spanning zero [PAGE 20]. The test record also has a reuse problem: “The G2G arm opened the test set twice” [PAGE 33], and nine holdout studies reuse the same eight matches [PAGE 14]. Finally, the inferential machinery has floors: 8-cluster sign-flip gives a smallest adjusted \(p\) of \(2/256=0.0078\), 7-cluster gives \(2/128=0.0156\), and the sign-exchangeability assumption is motivated but not guaranteed [PAGE 12, PAGE 33]. The strongest claim is therefore in-distribution selection-likelihood improvement under a fixed provider and retraining; the weakest claims are frozen transfer, calibration, value, and any physical or weather robustness.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The painted front end is defined by a per-node embedding \(e_i\in\mathbb{R}^{12}\) and a bilinear scatter-add. With node position in cell units \((u_i,v_i)\), lower cell \((\bar u_i,\bar v_i)=(\lfloor u_i\rfloor,\lfloor v_i\rfloor)\), fractional offsets \((\delta_i,\epsilon_i)=(u_i-\bar u_i,v_i-\bar v_i)\), and groups \(g\in\{\text{attackers},\text{defenders},\text{ball}\}\), the source gives

\[
S_g[c,y,x]
=
\sum_{i\in g}\sum_{a,b\in\{0,1\}}
w_{ab}(\delta_i,\epsilon_i)
\mathbf{1}[x=\bar u_i+a]
\mathbf{1}[y=\bar v_i+b]
e_i[c],
\]

\[
w_{ab}(\delta,\epsilon)
=
\delta^{a}(1-\delta)^{1-a}
\epsilon^{b}(1-\epsilon)^{1-b}.
\]

The paper calls this “bilinear weights over the four surrounding cell centres accumulated by scatter-add, \(3\times12=36\) channels in all” and says “This is the painting step” [PAGE 8, PAGE 9]. Coordinates are

\[
u_i=\operatorname{clip}\left(\frac{W x_i}{105}-\frac{1}{2},0,W-1\right),
\qquad
v_i=\operatorname{clip}\left(\frac{H y_i}{68}-\frac{1}{2},0,H-1\right),
\]

with \(W=104\), \(H=68\) [PAGE 9]. Units: \(x_i,y_i\) are metres on a \(105\times68\) pitch; \(u_i,v_i\) are cell indices; \(\delta_i,\epsilon_i\) and \(w_{ab}\) are dimensionless; \(S_g\) channels are dimensionless; the grid is \(12\times68\times104\).

The PP head is binary cross-entropy at the observed endpoint cell \(k^*\):

\[
\mathcal{L}_{PP}
=
-\left[
y\log\sigma(z_{k^*})
+
(1-y)\log(1-\sigma(z_{k^*}))
\right],
\]

where \(y\in\{0,1\}\) is the completion label and \(z_{k^*}\) is the logit at \(k^*\). The PS head is a 7,072-way softmax with \(k^*\) as target:

\[
\mathcal{L}_{PS}
=
-\log
\frac{\exp(z_{k^*})}{\sum_{k=1}^{7072}\exp(z_k)}.
\]

Units: probabilities are dimensionless; NLL and log-loss are in nats because the logarithm is natural. The paper reports selection NLL differences in nats, for example \(-0.251\) \([ -0.263, -0.239]\) for G2G minus C in cross-validation [PAGE 3]. A uniform PS surface has NLL \(8.864\) nats [PAGE 16].

The PE target is the signed 15-second expected-goal balance:

\[
r
=
\left[1-\prod_{s\in S_{\text{own}}}(1-x_s)\right]
-
\left[1-\prod_{s\in S_{\text{opp}}}(1-x_s)\right]
\in[-1,1],
\]

with \(x_s\) an expected-goal value clipped at \(0.999\). The combined surface is

\[
\hat V(k)
=
\hat p(k)\hat v_{\text{succ}}(k)
+
(1-\hat p(k))\hat v_{\text{miss}}(k).
\]

These are dimensionless reward units; MSE and MAE inherit squared and absolute reward units. The xG estimator is external and fitted on StatsBomb open data [PAGE 7].

The relational encoder uses edge-aware attention:

\[
\alpha_{ij}
=
\operatorname{softmax}_{j\in\mathcal N(i)}
\left(
\frac{\langle q_i,k_j\rangle}{\sqrt{32}}
+
b(e_{ij})
\right),
\]

with \(b\) a two-layer MLP on edge features, messages \(m_{ij}=\operatorname{MLP}_m([h_j;e_{ij}])\), and \(a_i=\sum_j\alpha_{ij}m_{ij}\) under a residual layer-normed update [PAGE 9]. The graph has up to 23 nodes and eight directed edge features. The encoder is permutation-equivariant and anonymous. The whole chain is differentiable from node features through message passing to the logit surface.

Temperature scaling is fitted on validation only:

\[
p_T(k)
=
\frac{\exp(z_k/T)}{\sum_l \exp(z_l/T)}.
\]

The paper says one scalar temperature per probabilistic head is fitted on validation only, binary for PP and spatial for PS; PE is left uncalibrated [PAGE 11]. This is “target-pixel calibration” because PP is trained and scored at the historically chosen destination cell [PAGE 11].

Assumptions and breakdown regimes are exact and important. First, Equation (3) assumes \(\delta,\epsilon\in[0,1]\) and clipping at the boundary. The paper states: “The upper neighbours are clipped to the last valid indices. Coincident boundary contributions accumulate, so the weights still sum to one; clipping sacrifices positional resolution in the outer half-cell strips” [PAGE 9]. At \(\delta=0\) or \(\delta=1\), one bilinear branch vanishes; at cell boundaries the position derivative has a kink because the map is “differentiable in them almost everywhere, with kinks at cell boundaries” [PAGE 9]. Coincident nodes in the same group and cell have additive contributions, so the embedding-to-surface map is not invertible there: multiple \(e_i\) can produce the same painted cell sum. Second, PS softmax is numerically stable only for finite logits; as \(T\to0\), NLL goes to zero for a correct argmax and diverges for an incorrect one; as \(T\to\infty\), the surface tends to uniform with NLL \(\ln 7072\approx8.864\) nats [PAGE 16]. Third, BCE diverges if \(\sigma(z_{k^*})\to0\) with \(y=1\) or \(\sigma(z_{k^*})\to1\) with \(y=0\). Fourth, sparse supervision means the surface away from \(k^*\) is an extrapolation, not a calibrated counterfactual; the source explicitly says no explicit smoothness constraint is supplied away from observed endpoints [PAGE 9]. Fifth, the attention softmax is undefined for an empty neighbourhood; in this design the graph is fully connected over up to 23 nodes, so that singularity is not realized in the reported runs [PAGE 9]. Sixth, the sign-flip max-\(T\) test assumes sign-exchangeability of paired match-level deltas; the 8-match floor is \(2/256=0.0078\), the 7-match floor is \(2/128=0.0156\), and the paper states the assumption “match grouping motivates but does not guarantee” [PAGE 12, PAGE 33].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage is a convergence of dense soccer surfaces, entity-to-grid interfaces, and set/graph encoders. SoccerMap and the EPV framework supply the dense pitch-cell output and the completion/selection/value decomposition; the paper calls SoccerMap “our architectural ancestor and control” [PAGE 4]. U-Net supplies a second dense core, and the paper reproduces the interface effect on “a canonical U-Net” [PAGE 26]. Outside soccer, VoxelNet, PointPillars, and Lift-Splat-Shoot establish the entity-to-grid pattern, but the paper distinguishes their placement: those systems “bin each entity to one cell or learn the transfer,” whereas this interface “writes at the measured continuous position” [PAGE 2]. SPLATNet, the bilateral grid, softmax splatting, and differentiable surface splatting establish fractional-weight splatting as machinery [PAGE 5]. Deep Sets and Set Transformer establish permutation-invariant set encoders; graph networks and graph attention establish relational encoders [PAGE 4, PAGE 5]. GraphCast supplies a learned grid-mesh transfer in weather modelling, which the paper uses as a representational contrast, not as a soccer weather covariate [PAGE 2]. The retrocausal point is that the later finding—“the interface, not what is written through it, carries most of the gain” [PAGE 35]—back-justifies a lineage that had already made entity-to-grid writes load-bearing in detection, perception, and forecasting. The paper’s novelty is not the operator but the pricing of the interface under a pre-specified multi-seed protocol.

The multi-week traps are documented rather than hidden. The original three-arm comparison is “development history, not independent confirmation” [PAGE 3]. The first attribution ladder was post hoc, and “two of the single-seed findings did not replicate and have been withdrawn” [PAGE 33]. The G2G arm opened the test set twice, the first cycle aborted by an automated integrity failure, and the log “cannot establish whether any first-cycle output was inspected” [PAGE 33]. Nine studies reuse the previously used eight-match holdout: “Studies 1, 2, 3, 4, 6, 8, 9, 11 and 13 and Part B of Study 12 run on the previously used eight-match holdout and are not evaluations on new data” [PAGE 14]. The paper names the mechanism: “The replications reuse the holdout, and therefore do not cure adaptivity” [PAGE 33]. The external study adds a provider-boundary trap: frozen G2G loses selection likelihood to the raster-only core in all seven external matches, while retraining restores the ordering [PAGE 18, PAGE 19]. The external endpoint rule is another trap: the corpus is 91.2 percent receiver captures, and the post-hoc next-event stratum gives \(+0.102\) with an interval spanning zero, so “the external margin may be partly a property of the capture rule” [PAGE 20]. The value and calibration traps are also explicit: no calibration-error comparison survives correction [PAGE 33], and no arm beats constant zero on EPV MAE [PAGE 34]. These are multi-week traps because they accumulate across sequential analyses, provider changes, and reuse of the same matches; the paper’s commitments and lock records reduce, but do not eliminate, the adaptive-reuse hazard.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive decision problem has three attractors. Crisis-habit regression is the deployer’s fallback under distribution shift: when the provider changes or tracking noise rises, the familiar raster-only core looks safer because “Frozen across the provider boundary the likelihood advantage is lost” [PAGE 1] and because, frozen, G2G is behind arm C on selection NLL in all seven external matches [PAGE 18]. The paper even says “the raster-only core degrades most gracefully” [PAGE 18]. That regression is rational for frozen selection likelihood, but it is incomplete: raw painting is cheaper than G2G and retains about three quarters of the gain in-distribution [PAGE 17, PAGE 35]. The second attractor is the counter-trap: over-trusting the learned front end because it wins cross-validation, then deploying it frozen across a provider boundary and discovering that the ordering reverses. The mirror counter-trap is over-trusting raw painting because it transfers frozen: on the external corpus, Draw minus C is \(+0.030\) with an interval spanning zero, so the frozen raw-painter advantage is not resolved [PAGE 19, PAGE 20]. The third attractor is the clock. There is an in-match clock—29.97 Hz tracking, a 6 s ball-flight window, a 15 s value window, and a 1 s finite-difference velocity window [PAGE 5, PAGE 6, PAGE 7]—and there is an evaluation clock—reused holdouts, thirteen adaptive studies, and a test set opened twice [PAGE 14, PAGE 33]. The in-match clock determines what the model can see; the evaluation clock determines how much the reported intervals can bear. A deployer who ignores the evaluation clock will read a cross-validation win as prospective confirmation; a deployer who ignores the in-match clock will read a dense surface as a live hypothetical-pass evaluator, contrary to the paper’s warning that the results concern “observed-endpoint prediction, not calibrated evaluation of hypothetical passes” [PAGE 1].

The counter-trap is sharpest in the external capture stratum. The paper’s post-hoc stratification says “The effect is carried by the capture stratum” and the next-event rows turn round to \(+0.102\) with an interval spanning zero [PAGE 20]. A coach or analyst who wants a provider-agnostic pass surface should therefore ask which endpoint rule produced the deployment labels, not just which model won the cross-validation. The paper’s own defence is that the World Cup labels are almost entirely next-event and still show the interface effect, so the effect does not require the capture rule [PAGE 20]. But the external study cannot separate the two, and the paper says so. The recursive theory of mind is therefore: the model’s author expects the reader to over-generalise from the in-distribution win; the reader expects the author to have selected the favourable holdout; the paper answers with commitments, lock records, full families, and explicit reuse disclosures. The correct response is not cynicism but conditional deployment: use raw painting where front-end parameter cost and provider stability matter; use the learned front end only where in-distribution selection likelihood is the objective and the provider is fixed [PAGE 2, PAGE 35].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical-layer veto. The pitch is \(105\times68\) m; the grid is \(104\times68\) cells, about 1 m per cell, with 7,072 cells [PAGE 7]. The painted write preserves sub-cell position up to bilinear interpolation, but clipping sacrifices resolution in the outer half-cell strips and the position map has kinks at cell boundaries [PAGE 9]. The physical tracking layer carries provider-dependent error: “Broadcast-derived positions carry provider-dependent error reaching several metres” [PAGE 34]. Under i.i.d. Gaussian per-coordinate tracking noise, “by \(\sigma=1\) m G2G has lost 1.61 nats of selection NLL against the original’s 1.09” [PAGE 30]. The selection lead compresses from \(+0.52\) nats at \(\sigma=0\) to \(+0.090\pm0.025\) at 1 m, worst draw \(+0.050\) [PAGE 30]. At \(\sigma=2\) m, completion ordering against controls is within draw-to-draw noise, and arm D beats G2G in 10 of 10 draws [PAGE 30]. Physical veto: if the deployment provider’s per-coordinate error is at or above the metre scale and the objective is completion or localisation-sensitive ranking, the G2G advantage is not proven; selection lead survives but compressed. The paper does not convert provider RMSE into expected advantage, and it explicitly says the perturbations are additional noise on measurements that already contain unknown error [PAGE 34].

Biomechanical-layer veto. The endpoint label is not the passer’s intent; it is the observed next endpoint. On the World Cup, 98.9 percent of admitted passes end at the next tracked possession event and only 0.21 percent at a receiver capture [PAGE 6]. On the external corpus the mix is inverted: 91.2 percent capture and 6.6 percent next event [PAGE 20]. The capture rule returns “the first frame where the ball comes within 1 m of the annotated receiver after \(\ge2\) m of travel” [PAGE 6]. That places an external endpoint within about one grid cell of a tracked player by construction. A front end that writes player features at continuous coordinates can exploit that label geometry. The paper’s own post-hoc split confirms the risk: G2G minus C is \(-0.266\) nats in the capture stratum, all seven matches, but \(+0.102\) on the 282 next-event rows with an interval spanning zero [PAGE 20]. Biomechanical veto: the external interface effect is not separated from the receiver-capture endpoint rule; it cannot be used as proof of provider-agnostic pass-surface superiority. The World Cup corpus, whose labels are almost entirely next-event, is the stronger test, but it is one tournament and one provider.

Weather-layer veto. The source contains no weather covariates, no wind, rain, temperature, or surface-state variables. The only “weather” in the paper is GraphCast as a graph-weather representation lineage [PAGE 2]. Therefore a weather-layer veto cannot be adjudicated from this evidence. Any claim that the painted surface is robust to rain, wind, heat, or pitch state is outside the paper’s design. The paper’s own limitations say the study is “retrospective prediction from supplied snapshots, not a validated live system” [PAGE 34]. Weather would add a distribution shift not measured by the injected Gaussian tracking noise, so it remains an unproven cross-layer risk rather than a proven veto. The defensible adjudication is: physical noise and endpoint provenance can veto strong deployment claims; weather cannot be evaluated at all with this source.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: endpoint-provenance counterfactual. Intervention: rescore the locked external Part B out-of-fold rows separately by endpoint provenance, as the paper does post hoc. Verifier: selection NLL difference G2G minus C by stratum. Prediction from the source: capture stratum \(-0.266\) \([ -0.323, -0.216]\) in all seven matches; 282 next-event rows \(+0.102\) \([ -0.013, +0.247]\), two of seven favouring G2G; boundary rows \(-0.128\) \([ -0.452, +0.278]\) [PAGE 20]. Veto rule: if the deployment corpus is