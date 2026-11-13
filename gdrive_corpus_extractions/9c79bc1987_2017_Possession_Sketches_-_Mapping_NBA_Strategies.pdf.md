---
source: "2017 Possession Sketches - Mapping NBA Strategies.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 12
model: baidu/ernie-5.5-flash-preview:free
words: 8204
---

<NATIVE_REASONING>
We need answer user's request. They provided a source paper and want a deep reasoning foundry with specific XML sections, >=1000 words, zero betting lines, zero toy equations, formal LaTeX equations, SI/information/probability units, assumptions, singularities, cite exact [PAGE N] markers and verbatim quotes. Need produce final with XML sections exactly: THINK_TRACE, SOURCE_OPERATORS_AND_EQUATIONS, RETROCAUSAL_GENEALOGY, RECURSIVE_THEORY_OF_MIND, CROSS_LAYER_VETO_ADJUDICATION, RLVR_COUNTERFACTUAL_VETOES. Must not mention betting lines. Need maybe analyze paper as if mapping NBA strategies, perhaps for reasoning drive? User says DRIVE SOURCE: ... PAGES 12, SOURCE TEXT. Likely wants a reasoning report grounded in source. Need satisfy invariants. No spreads/totals/moneylines/odds. Avoid toy equations. Use formal equations from paper if possible: B_v(t; θ_v) = θ_v^T D_P(t), D_P(t)=binom(P,p)t^p(1-t)^{P-p}. Segmentation low velocity > .25 s below .1 feet/sec. Y_n,d counts pair actions. LDA generative model: phi_k ~ Dir_V(alpha0), pi^(n) ~ Dir_K(alpha), Y_{n,:} ~ Mult(M_n, p=sum pi_k phi_k). Need mention units: seconds, feet per second, probabilities (dimensionless), nats/bits if KL divergence. t-SNE minimizes KL divergence? Source Figure 5a y-axis KL-div from 0 to .18. Need perhaps mention KL divergence in nats? Could say if natural log, nats; often KL in nats, can convert to bits by /ln 2. Need exact citations. Need >= 1000 words across sections. We must include THINK_TRACE >=400 words. Need total >1000. Let's aim ~2500 words. Must not invent fake ratios like Force/Fatigue. We can use equations from source. Could derive velocity threshold, segment counts, pair vocabulary size. Need exact singularity/breakdown regimes. For example velocity threshold: if smoothing yields false cuts; if no sustained low velocity, entire possession one segment, pair-action bag loses simultaneity; if zero velocity for >? threshold .1 fps, cut; if all players stationary, many cuts? The model breaks down when actions longer than segment distribution, or pair co-occurrence ignores temporal order. LDA bag-of-pair-actions ignores temporal structure [PAGE 5? PAGE 10?]. V=250 actions, K=100 topics, average 8 nonzero topics [PAGE 7]. Need include t-SNE breakdown: high-dimensional distances not globally preserved, local only [PAGE 7 footnote]. KL divergence: if distance distributions overlap, model cannot distinguish weave. Nearest neighbor may fail if clusters overlap. Bezier curve model breakdown if trajectory has abrupt change not captured by smooth curve, control points insufficient, heteroscedastic noise. Multinomial assumption: fixed total actions M_n, independence? Need discuss. LDA generative process equations: p = sum_k pi_k phi_k. Need define Y_{n,d} = # times pair d appears. Need discuss vocabulary size: V=250 unique actions, pair-actions d=(v_i,v_j), v_i != v_j. If ordered pairs? Source says unique pair of actions vi,vj and vi != vj, could be unordered? It says pair d=(v1,v2); maybe ordered? Could note ambiguity. Number of possible pair vocabulary at most V(V-1)/2 if unordered, or V(V-1) if ordered. Need not invent? It is math. Could state under source's notation. But if source says unique pair, likely unordered; we can formalize assumption. Need mention if include same action pair? It excludes vi=vj, so no self-simultaneity. Breakdown: if two players perform same action simultaneously, representation discards it.

Need perhaps apply to some current basketball strategy analysis? The user didn't specify a particular team/match. They just provide source. We need produce a foundry report maybe about using Possession Sketches to map NBA strategies. Need not use live data. Could frame as methodological audit and analytic operator for decoding strategies. Need include "crisis habit regression vs counter-trap vs clock" in RECURSIVE_THEORY_OF_MIND. This is about NBA strategies? Need discuss teams' habits, regression to mean, counter-traps, game clock. No betting. We can discuss tactical clock: 24-second shot clock, possession duration 5-24 seconds [PAGE 2]. Crisis habit: late clock may force late-clock actions, model trained on normal possessions may misread. Counter-trap: opponent overloading corner threes etc. Need be careful no odds.

Need SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown. Include equations and assumptions. Need exact quotes with page markers. Need maybe quote: "sustained moments of low velocity (> .25 seconds below a threshold of .1 feet per second)" [PAGE 3]. "V = 250 Bezier curves" [PAGE 3]. "bag of simultaneous pair-actions" [PAGE 5]. "K = 100 topic possession model" [PAGE 6]. "average only 8 of the 100 entries are non-zero" [PAGE 7]. "t-SNE" [PAGE 7]. "pair-actions" etc. Need exact [PAGE N] markers. We can quote short verbatim. Must not fabricate page numbers. The provided text has [PAGE x of 12]. We'll cite [PAGE 3], etc. Need ensure exact quote includes weird ligatures? Use clean. We can quote: "sustained moments of low velocity (> .25 seconds below a threshold of .1 feet per second)" [PAGE 3]. Actually page 3 text: "At sustained moments of low velocity (> .25 seconds below a threshold of .1 feet per second), we cut the possession" yes. "V = 250 Bezier curves" page 3: "mixture of V = 250 Bezier curves". "bag of simultaneous pair-actions" page 5: "we use a vocabulary of pair-actions" and "bag of simultaneous pair-actions". "K = 100 topic possession model" page 6 caption: "result of fitting a K = 100 topic possession model". "average only 8 of the 100 entries are non-zero" page 7. "t-SNE [10] to visualize" page 7. "over N = 190,000 possessions" page 2. "4.5 million segment observations" page 3. "average 2.25 seconds ... 0.6 to 7.96 seconds" page 3. Need use units.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit >=400 words. Need describe derivation: from trajectories to segments, actions, pair-actions, topics, sketches, similarity. Include assumptions and gray zones: segmentation cut thresholds; pair simultaneity; bag-of-words temporal loss; LDA independence; t-SNE local distances; model interpretation. Need no equations? Could include but not too much. Need multi-hop.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps. Discuss LDA [2], Bezier curves from computer graphics [PAGE 3], topic modeling [PAGE 4], EM [PAGE 12], stochastic variational inference [PAGE 5/12], t-SNE [PAGE 7/11], prior basketball analytics: EPV [4,3], neural play classification [13], chalkboarding [12]. Multi-week traps: over-reliance on labels like weave; team strategy changes; data season; model vocabulary not updated; tracking data preprocessing drift. Need maybe "retro-causal" means how future results alter understanding of past? Could phrase as lineage and traps that make analysts misread later games. Need not overdo.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Need analyze strategic adversaries. Maybe discuss if a team uses corner three actions; opponent can counter by closing out, but model sees co-occurrence. Clock: 24s shot clock and possession segments 5-24s. Crisis: late-clock, teams regress to high-frequency habits; model prior topic loadings may overpredict; counter-trap: opponent forces away from topic; need causal inference. Could include formal Bayesian belief update? Maybe use source LDA generative. We can define posterior over topics given sketch? Need not toy. Could include Bayes: p(z|w) ∝ p(w|z)p(z) with LDA? But source uses variational inference. Could state. Need avoid fake ratios. Use probabilities, nats.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Need veto scenarios where model output cannot override physical constraints. E.g., player cannot teleport, segment duration must align with velocity threshold, indoor NBA no weather? But weather can affect travel/scheduling/fatigue not in-game? Need prove physical veto: if predicted action requires instantaneous jump beyond tracking noise, veto. Use velocity threshold and Bezier smoothness. Biomechanics: max acceleration, jump height? Could cite not source? Need not cite external. But formal: position x_j(t) in feet, velocity derivative, if model says cut while speed below .1 ft/s for >.25s, contradiction. If possession segment duration > 24 sec? Source says possession-length e.g. 5-24 seconds [PAGE 2]. If prediction requires >24s without shot clock reset, veto. Weather: NBA indoor, but external weather can affect arena travel? Maybe veto if analyzing outdoor? But source NBA. Could say weather veto is inapplicable to on-court spatiotemporal operators, except arena conditions not in model. Need physical proof. Use SI units: feet per second, seconds. Need no fake equations. Maybe use formal constraints:
- Position continuity: ||x_j(t+Δt)-x_j(t)|| ≤ v_max Δt + ε. If predicted jump > v_max Δt + ε, veto.
- Segmentation condition: cut if velocity below 0.1 ft/s for >0.25 s [PAGE 3]; if segment contains velocity above threshold continuously, no cut; if model assumes action change, veto.
- Court boundary: x in [0,94] ft, y [0,50] ft (NBA dimensions? Not in source; could be external. Is it okay? Might need not cite source. But formal physical court. Could state assumption. Need avoid unsupported? We can say assuming standard NBA court. But source doesn't provide dimensions. Maybe no need exact dimensions. Use generic bounds.
- Shot clock: possession must end ≤24 s; source says possession-length e.g. 5-24 second [PAGE 2]. If predicted strategy requires 30s, veto.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. Need RLVR? Reinforcement learning with verifiable rewards? Need create scenarios where a proposed strategy/model inference is vetoed by verifiable data. Could be: 1) Teleportation veto: possession sketch predicts immediate corner three after drive with no segment; verify trajectory discontinuity; prediction: nearest-neighbor will misclassify due to pair count. 2) Simultaneity vocabulary veto: if two players execute same action simultaneously, pair-action excludes vi=vj; verify count unchanged; prediction: model topic weights insensitive to duplicated same-action co-occurrence. 3) Bag temporal order veto: weave starts then breaks down; sketch same if pair counts same; verify swapped order leaves Y_n unchanged; prediction: t-SNE distance near zero despite different sequence. Need include predictions and verification. Maybe also 4) t-SNE cluster false: global geometry not preserved; verify pairwise distances in 100-d vs 2-d. But need exactly 3. Need formal predictions. Need no betting.

Need final in XML sections. Ensure >=1000 words. Let's draft long. Need avoid markdown? Could use XML tags. Inside can have LaTeX. Need ensure no forbidden betting terms. Do not mention odds, spread, total, moneyline. The word "total" appears maybe "total number of actions" from source? Invariant says never mention spreads, totals, moneylines, or odds. Does "total" count as totals? It says totals likely betting. But to be safe, avoid word "total"? Source quote includes "total number of actions"? We can avoid quoting that. We can say "normalization count M_n". Avoid "totals". Avoid "odds". Avoid "spread" except maybe "distribution"? Could "spread" as verb? Invariant zero betting lines: Never mention spreads, totals, moneylines, or odds. Better avoid exact words "spread", "total", "odds", "moneyline". Use "dispersion", "normalizer", "counts", "probabilities". Do not mention "betting". Need be careful with "pair-actions"? okay.

Need maybe cite exact [PAGE N] with verbatim quotes. In SOURCE_OPERATORS... include many. Could have bullet list.

Need word count: aim 2500. Let's estimate. THINK_TRACE 700, SOURCE 800, RETRO 450, RTM 500, CROSS 450, RLVR 550 = 3450. Good.

Need ensure no fake ratios. Avoid Force/Fatigue. We can use KL divergence but not ratio? KL is formal. Source Figure 5a has KL-div. Use it. No made-up ratio. We can mention "fraction" maybe? Is fraction a ratio? It is a probability proportion; okay if source says has ball freq = .03. But invariant says never invent fake ratios (Force/Fatigue). Formal equations okay. We can use proportions. Maybe avoid new ratio.

Need perhaps include exact LaTeX equations. Use align. Need units. For LDA, phi_k is categorical over V actions (or pair vocabulary?). In appendix: phi_k ~ Dir_V(alpha0), each topic distribution over actions. But earlier topics over pairs of actions [PAGE 6]. There is slight inconsistency: LDA over pair-action vocabulary, but appendix says Dir_V. Need note. Actually [PAGE 6] says topic distribution over pairs of actions, but [PAGE 12] says ϕ_k ~ Dir_V(α0). Maybe V is pair vocabulary? They might conflate. We can state formalization: Let D be pair-action vocabulary size; if unordered D = V(V-1)/2; if ordered D = V(V-1). The source writes Dir_V but conceptually topic over pair-action words. Need cite. Could say "The appendix notation uses V; in the possession sketch the observed words are pair-actions, so interpret V there as the pair-action vocabulary cardinality under the model’s indexing [PAGE 5], [PAGE 12]." This is careful. Need not overcomplicate. But SOURCE_OPERATORS should include equations.

Need mention segmentation smoothed first difference. Could formalize:
Let smoothed velocity v_j(t) = ||d/dt x_j(t)|| after smoothing. Cut set C_j = {t: v_j(t) < 0.1 ft/s continuously for at least 0.25 s}. Segment boundaries at endpoints of low-velocity intervals. Source says detect moments of low velocity by inspecting smoothed first difference [PAGE 2-3]. Use units.

Action templates: B_v(t; θ_v) = θ_v^T D_P(t), t∈[0,1]. Control points P=10 [PAGE 12]. D_P vector? The source formula has weird missing parentheses: D_P(t) = (binom(P,p) t^p(1-t)^{P-p}) for p=0,...,P-1. Need write properly. But Bezier usually Bernstein basis p=0..P. Source says P control points and p=0,...,P-1; maybe off by one. Need quote but formalize. Could note indexing assumption.

Segment likelihood: x_{js,t} ~ N(B_v(t,θ_v), Σ_v) [PAGE 12]. t normalized to [0,1]. Units: location in feet, covariance in ft^2. Need mention. z_js action type. EM weighted least squares [PAGE 12].

Pair-action counts: Y_{n,d} = # times pair d=(v_i,v_j) appears in possession n [PAGE 5]. d indexes pair vocabulary. M_n = sum_d Y_{n,d}. LDA: p = sum_k π_k^(n) φ_k. Y_{n,:} ~ Mult(M_n, p) [PAGE 12]. Need define φ_k distribution over pair-action vocabulary. π^(n) topic proportions, sparse average 8/100 nonzero [PAGE 7].

Similarity: possession sketch θ_n = π^(n) maybe. KL divergence D_KL(p||q)=Σ_i p_i log(p_i/q_i), units nats if natural log, bits if log2. Source t-SNE KL-div axis [PAGE 7]. t-SNE minimizes KL between high-dimensional and low-dimensional affinities, but local only. Need mention.

Breakdown regimes:
- If low-velocity threshold too high, cuts inside continuous movement; if too low, no cuts; if velocity smoothing misses pauses, segment boundaries wrong.
- If segment length distribution outside 0.6-7.96 s interior 95 percentile [PAGE 3], template unreliable.
- If pair simultaneity not well-defined due to timing, counts unstable.
- If V too small, actions merge; if too large, sparse counts and overfitting.
- If K too large, topics fragment; if too small, merge strategies; average 8 nonzero [PAGE 7].
- If possession has only one player action? Pair counts zero; sketch undefined/empty.
- If two actions same, pair excludes vi=vj [PAGE 5], losing information.
- Temporal order ignored; weave start/breakdown same bag [PAGE 10 future work].
- t-SNE cannot preserve global distances; footnote [PAGE 7].

Need maybe mention "singularities" exact: zero counts cause log(0) in KL undefined; empty pair vocabulary; M_n=0. Use limit smoothing.

Need RETROCAUSAL_GENEALOGY: lineage: computer graphics Bezier [PAGE 3], topic models LDA [PAGE 4], EM Dempster [PAGE 11/12], SVI Hoffman [PAGE 5,12], t-SNE [PAGE 7,11], basketball EPV [PAGE 10], neural classification [PAGE 10]. Multi-week traps: seasonal drift, roster changes, coaching changes, model trained on 2014-2015 [PAGE 2], applying to current season without re-fit; label contamination (weave plays hand-labeled 40 [PAGE 7]); nearest neighbor similarity can be confounded by common actions; model may rediscover league average not team-specific strategy.

RECURSIVE_THEORY_OF_MIND: Need model opponents modeling you. Use Bayes. Maybe formal:
Let H_t be hidden tactical state, A_t actions, C_t clock, O_t opponent adaptation. Generative LDA approximates p(A_pair | topic). In game, p(topic | clock, score, opponent defense) changes. Recursive belief: agent i chooses strategy to maximize expected possession value conditional on opponent's posterior over its topic loadings. But no betting. We can state no odds. Crisis habit regression: under low clock, distribution over actions collapses to high-probability frequent actions (habit). Counter-trap: opponent intentionally induces low-likelihood actions by denying high-frequency pairs, shifting posterior. Clock: 24s; source possession lengths 5-24s [PAGE 2]. Late clock: M_n small? Actually number of pair counts maybe lower if fewer simultaneous actions; LDA multinomial with small M_n high variance. Need mention small sample counts cause unstable topic loadings. If shot clock expires, possession ends; actions after 24s invalid. Use SI: seconds. Predictions: late-clock possessions load more on simple high-frequency topics? But need formal not toy. Could say posterior variance of π^(n) scales inversely with M_n under multinomial-Dirichlet; if M_n small, posterior diffuse. That's formal. Need no fake ratio? This is Bayesian variance, okay. Could include formula Var? Maybe not necessary. Could say entropy H(π) higher.

CROSS_LAYER_VETO_ADJUDICATION: Need physical veto proof. Could define layers: trajectory physics, biomechanical capacity, environmental/weather, tactical clock. Veto if model inference violates hard constraint. Proof style:
Proposition: If a proposed action sequence requires player j to move from x(t0) to x(t1) with average speed > v_max, veto. Because observed smoothed velocity v(t)=||dx/dt|| and cut threshold .1 ft/s [PAGE 3], any inferred cut inside interval with v≥.1 for >.25 violates segmentation. If Bezier template B_v has bounded derivative (control points), acceleration bound; if inferred jump not within ellipse Σ_v, veto under Gaussian noise.
Weather: NBA indoors, no rain/wind; but arena humidity/temperature not in source; veto weather-based causal claim. If travel delays from weather cause fatigue, not observable in tracking; veto as direct on-court operator.
Need exact quotes maybe "sustained moments of low velocity (> .25 seconds below a threshold of .1 feet per second)" [PAGE 3], "possession-length (e.g. 5-24 second)" [PAGE 2]. Need mention shot clock 24? Source says 5-24 second; enough.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios with verification and prediction. Need maybe define RLVR: counterfactual reasoning where a proposed strategy is vetoed by verifiable constraints. Scenario 1: Teleport cut veto. Scenario 2: Same-action co-occurrence invisibility. Scenario 3: Temporal-order invariance. Each with formal test, prediction, units. Need include expected result. Could also include t-SNE global distance false positive. But 3 enough. Need "verifiable RLVR veto scenarios + predictions". Use bullet.

Need ensure no mention of "totals" as betting. Could use "normalization constant". Avoid "total". In equations, maybe "M_n" no word. If quoting source includes "total number of actions" avoid. If need, say "normalizing count".

Need maybe not mention "odds" even in "odds ratio". Avoid.

Need check for forbidden words: spread? I might write "dispersion". totals? avoid. moneyline? no. odds? no. betting? maybe no. The user invariant says never mention spreads, totals, moneylines, or odds. Could mention "no betting lines"? Better not. Avoid word "totals" entirely. Use "summation". But in equation "total" maybe not. Need be careful with "totaling"? Use "count". Also "odds" could appear in "odds of"? avoid. "spread" could appear as "distribution"? Not exact. Avoid "spread" word. "bet" avoid. "line" maybe okay? But "lines" maybe? Invariant says spreads, totals, moneylines, odds. Avoid "line" perhaps. Use "boundary".

Need final with XML tags. The content inside can be plain. Need no additional commentary. Need ensure sections exactly. Could include LaTeX inside. Need no markdown? It's okay.

Let's craft final carefully.

Potential issue: The paper source has "pair-actions" but topic model appendix says Dir_V. Need articulate.

Let's draft.

THINK_TRACE: 400+ words. Start: This trace reconstructs operator chain from raw tracks to strategic sketch. Multi-hop. Discuss assumptions and gray zones. Include citations. Need not too many equations? Fine.

SOURCE_OPERATORS_AND_EQUATIONS: Formal equations, units, citations, breakdown. Need many details. Let's include:
1. Possession/segment definitions.
2. Segmentation condition.
3. Bezier template.
4. Gaussian observation.
5. Pair-action count.
6. LDA generative.
7. Similarity/KL/t-SNE.
8. Breakdown table maybe. Need exact quotes.

Need maybe include [PAGE 1] for abstract? Use [PAGE 2] for N=190,000. [PAGE 2] says over N=190,000 possessions. [PAGE 3] for 4.5 million. [PAGE 3] for V=250. [PAGE 5] for pair-action. [PAGE 6] for K=100. [PAGE 7] for sparsity and t-SNE. [PAGE 12] for equations.

Need include exact quote with [PAGE]. E.g.
- [PAGE 2]: "over N = 190,000 possessions".
- [PAGE 3]: "roughly 4.5 million segment observations".
- [PAGE 3]: "sustained moments of low velocity (> .25 seconds below a threshold of .1 feet per second)".
- [PAGE 3]: "mixture of V = 250 Bezier curves".
- [PAGE 5]: "bag of simultaneous pair-actions".
- [PAGE 6]: "K = 100 topic possession model".
- [PAGE 7]: "on average only 8 of the 100 entries are non-zero".
- [PAGE 7]: "t-SNE [10] to visualize".
- [PAGE 12]: equations.

Need maybe quote "interpretable" [PAGE 2]. Fine.

RETROCAUSAL_GENEALOGY: multi-week traps. Need maybe 350 words.

RECURSIVE_THEORY_OF_MIND: 400 words.

CROSS_LAYER_VETO_ADJUDICATION: 400 words.

RLVR: 500 words.

Total likely >3000. Good.

Need ensure equations are formal LaTeX. Use $$ ... $$. In XML, okay. Need maybe escape < >? Use LaTeX inside; no issue.

Need mention SI/information/probability units. Include in SOURCE and others.

Potential issue: "SI" for basketball feet? SI would meters. Source uses feet. We can say source uses feet and seconds; convert to SI: 1 ft = 0.3048 m, velocity threshold 0.1 ft/s = 0.03048 m/s; duration .25 s. Could include. Need not but good. Use SI units: positions in feet but SI conversion. We can state all times in s, velocities ft/s and m/s, covariance ft^2/m^2. Probabilities dimensionless. KL in nats/bits. Good.

Need formal singularity regimes: zero vocabulary, M_n=0, KL log zero. Include.

Let's write final. Need be mindful no "total". Search mentally: "total" might appear in phrase "total count". Avoid. Use "aggregate count". In LDA source "total number of actions" avoid. Use M_n as normalizing count.

Need maybe avoid "sum" as "totals"? It's okay. Invariant likely betting. But to be safe, avoid word "total" entirely. Use "aggregate" or "normalizer". But equation uses \sum. Fine. Avoid "odds".

Let's draft final now. Ensure word count >1000. Use long paragraphs.

Double-check no betting terms: I will not use spread, totals, moneylines, odds. Avoid "line" maybe. Use "3-point line"? Source has "3-point line". That's not betting line. It's court line. Invariant says never mention spreads, totals, moneylines, or odds. "line" alone okay but maybe avoid "betting line". We can mention "three-point boundary" instead of line. But source quotes "3-point line". If quote includes line, okay? It is not betting. But to be safe, avoid "line" except "boundary". But exact quote might need "3-point line" if citing. We can avoid that quote.

Need maybe not mention "corner three"? okay.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The derivation chain in this source is a multi-stage reduction from continuous spatiotemporal tracking data to a discrete strategic summary. The first hop is segmentation: a player trajectory is not treated as one monolithic path, but as a sequence of shorter movement episodes. The paper specifies that these episodes are cut where there are “sustained moments of low velocity (> .25 seconds below a threshold of .1 feet per second)” [PAGE 3]. This is a critical gray-zone operator because the threshold converts a continuous signal into a discrete event. If the threshold is too low, genuine pauses may be missed and unrelated movements may be fused into one segment. If the threshold is too high, ordinary decelerations may be over-segmented, creating artificial action boundaries. The smoothing step before differencing adds another gray zone: smoothing can suppress true micro-pauses or create false pauses, depending on the temporal kernel and tracking noise. Thus the action vocabulary is not merely “learned”; it is conditioned by an engineering choice about what counts as a movement boundary.

The second hop maps each short segment to a discrete action. The paper says the method fits a “mixture of V = 250 Bezier curves” to the processed trajectory segments [PAGE 3]. This means each segment is assigned to one of 250 latent movement templates. The Bezier representation is formal: a template maps normalized time to a two-dimensional court location, and each observed point is modeled as a Gaussian perturbation around that template [PAGE 12]. The gray zone here is geometric expressiveness versus overfitting. Bezier curves are smooth and compact, but they may not capture abrupt evasive movements, contact-induced deviations, or ball-screen negotiations unless enough control points are used. The paper notes that it uses ten control points in its experiments [PAGE 12], which is an assumption about the smoothness and dimensionality of player movement. If an actual movement contains a sharp reversal inside a short interval, the template may average over incompatible sub-movements, producing a cluster center that represents no real action.

The third hop converts single-player actions into a possession-level representation. Instead of preserving the full temporal order, the method uses a “bag of simultaneous pair-actions” [PAGE 5]. Each “word” is a pair of actions occurring together, and a possession becomes a count vector over those pair-actions. This is a major abstraction. It preserves co-presence structure, such as a drive co-occurring with a weak-side stationary presence, but it discards sequence, timing, and causal order. The paper explicitly acknowledges this later as future work: the current possession sketch “ignores much of the temporal information in each possession” [PAGE 10]. Therefore, two possessions can be judged similar even if one begins with a weave and later collapses into a different structure, while the reverse begins with the collapse and later becomes a weave. The model sees shared co-occurrences, not necessarily shared causal strategy.

The fourth hop applies Latent Dirichlet Allocation to the pair-action count vectors. Each possession is represented as a distribution over strategies, and each strategy is a distribution over pair-actions. The source says this yields a “K = 100 topic possession model” [PAGE 6]. The output is a possession sketch: a sparse vector in which, “on average only 8 of the 100 entries are non-zero” [PAGE 7]. This sparsity is meaningful because it implies that a possession is described by a small number of recurring tactical themes rather than a diffuse mixture of all possible themes. However, the gray-zone question is whether the topics correspond to actual coaching intentions or merely to recurring statistical co-occurrences. A topic may combine actions that often happen together because of league-wide geometry, not because a coach designed them together.

The fifth hop is visualization and nearest-neighbor reasoning. The paper uses t-SNE to project the 100-dimensional possession sketches into two dimensions for exploration [PAGE 7]. This is useful, but not a literal metric embedding of strategy. The source itself cautions that t-SNE emphasizes local distances and that distant points may be misleadingly arranged [PAGE 7]. Thus, a visual cluster can support hypothesis generation, but it cannot alone prove that two possessions are strategically identical. The stronger evidence comes from the underlying sketch distance, such as KL divergence or another probability-space distance, and from external verification against hand-labeled plays. The paper tests this by examining “weave” possessions and showing that weave plays tend to cluster near one another [PAGE 7]. Even there, the gray zone remains: clustering can reflect shared surface actions without guaranteeing shared intent, and it can miss tactical variants that use the same high-level action vocabulary in a different temporal order.

A further multi-hop issue is that the model is trained on the 2014-2015 NBA season [PAGE 2], with over 190,000 possessions and roughly 4.5 million segment observations [PAGE 2], [PAGE 3]. Any later use of the vocabulary assumes that the action dictionary remains stable. If league strategy changes, if players change teams, or if defensive rules alter spacing, the old vocabulary may still be mathematically valid but strategically stale. The model can therefore mistake historical habit for current intention. The deep trace is not simply “trajectories become actions, actions become topics”; it is “thresholded movement becomes smooth templates, smooth templates become co-occurrence counts, co-occurrence counts become sparse topic loads, and topic loads become visual or nearest-neighbor hypotheses.” Each transformation introduces a potential failure mode, and the strongest reasoning requires tracking the assumptions at every hop.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source provides a formal operator chain from raw tracking coordinates to a possession-level topic representation. The notation below preserves the paper’s variables while making units, assumptions, and breakdown regimes explicit.

1. Possession and segment indexing  
For possession \(n\), player \(j\), and segment \(s\), the observed trajectory segment is denoted \(x^{(n)}_{j,s}\). The paper analyzes “over N = 190,000 possessions” from the 2014-2015 season [PAGE 2]. Positions are in court-length units, with feet used in the source. In SI units, \(1\ \text{ft} = 0.3048\ \text{m}\). Time is measured in seconds, denoted \(\text{s}\).

2. Segmentation by sustained low velocity  
The segmentation rule uses the smoothed first difference of the trajectory to estimate velocity. The source states: “At sustained moments of low velocity (> .25 seconds below a threshold of .1 feet per second), we cut the possession” [PAGE 3]. Formally, let \(v_j(t)\) be the smoothed speed of player \(j\) at time \(t\). A low-velocity interval is a maximal interval \([a,b]\) such that

\[
v_j(t) < 0.1\ \text{ft/s}
\quad \text{for all } t \in [a,b],
\]

and the interval length satisfies

\[
b-a > 0.25\ \text{s}.
\]

In SI units, the threshold is approximately

\[
0.1\ \text{ft/s} \approx 0.03048\ \text{m/s}.
\]

Breakdown regime: if the smoothing kernel is too narrow, sensor noise may produce false cuts; if too wide, real pauses may disappear. If no interval satisfies the rule, the entire possession remains one segment. If every tiny deceleration satisfies the rule, the segment set fragments. The source reports that resulting segments average 2.25 seconds, with an interior 95 percentile range from 0.6 to 7.96 seconds [PAGE 3]. Segments outside this empirical range are not automatically invalid, but they are less representative of the learned action dictionary.

3. Action templates as Bezier curves  
Each action template is a function from normalized time to two-dimensional court position:

\[
B_v : [0,1] \to \mathbb{R}^2.
\]

The paper fits “V = 250 Bezier curves” to the processed trajectory segments [PAGE 3]. The template equation is

\[
B_v(t;\theta_v) = \theta_v^\top D_P(t),
\]

where \(\theta_v \in \mathbb{R}^{P \times 2}\) contains control-point parameters and \(P\) is the number of control points. The paper uses 10 control points in its experiments [PAGE 12]. The Bernstein-type basis is written as

\[
D_P(t) =
\left[
\binom{P}{p} t^p (1-t)^{P-p}
\right]_{p=0}^{P-1}.
\]

Assumption: time within each segment is normalized to \([0,1]\), so duration information is not encoded in \(t\) itself; duration enters separately through segment-length histograms [PAGE 4]. Breakdown regime: if a movement has discontinuous velocity changes, a smooth Bezier template may underfit. If \(P\) is too small, distinct actions merge; if \(P\) is too large, noise may be modeled as movement structure.

4. Gaussian observation model for trajectory points  
The source specifies

\[
z^{(n)}_{js} \sim \text{Pr(action} \mid \pi),
\]

\[
x^{(n)}_{js,t} \sim \mathcal{N}\left(B_v(t,\theta_v), \Sigma_v\right),
\]

where \(z^{(n)}_{js}\) is the latent action label for segment \(s\), and \(x^{(n)}_{js,t}\) is the observed location at normalized time \(t\) [PAGE 12]. The covariance \(\Sigma_v\) has units of squared length, e.g. \(\text{ft}^2\) or \(\text{m}^2\). The model learns parameters by maximum likelihood using expectation-maximization updates that exploit the linear structure of Bezier curves; the maximization step can be computed by weighted least squares, and expectation steps can operate in parallel across segments [PAGE 12]. Breakdown regime: if tracking noise is non-Gaussian, heavy-tailed, or correlated across nearby players, the Gaussian covariance may underestimate uncertainty. If the number of examples for an action is small, its template and covariance are unstable.

5. Pair-action vocabulary and possession count vector  
The possession representation is not a sequence of single actions but a “bag of simultaneous pair-actions” [PAGE 5]. Let \(V\) be the number of base actions, with \(v_i, v_j \in \{1,\dots,V\}\) and \(v_i \neq v_j\). A pair-action is \(d = (v_i,v_j)\). The source defines

\[
Y_{n,d} = \text{# times action pair } d = (v_1,v_2) \text{ appears in possession } n.
\]

The vector \(Y_{n,:}\) is the possession’s word-count vector. If pairs are treated as unordered, the maximum vocabulary size is

\[
D = \binom{V}{2} = \frac{V(V-1)}{2}.
\]

If ordered pairs are intended, the maximum is

\[
D = V(V-1).
\]

The source’s notation does not fully resolve this distinction, but the conceptual object is a co-occurrence count over simultaneous action pairs. The normalizing count for possession \(n\) is

\[
M_n = \sum_d Y_{n,d}.
\]

Breakdown regime: if two players perform the same action simultaneously, the condition \(v_i \neq v_j\) removes that pair from the vocabulary. Thus identical simultaneous actions are invisible to the possession sketch. If \(M_n = 0\), no pair-action occurred and the possession sketch is undefined unless regularized.

6. LDA generative model for possession sketches  
The source uses Latent Dirichlet Allocation to describe each possession as a mixture of strategies [PAGE 4]. The appendix gives the generative process:

\[
\phi_k \sim \text{Dir}_V(\alpha_0), \quad k = 1,\dots,K,
\]

\[
\pi^{(n)} \sim \text{Dir}_K(\alpha), \quad n = 1,\dots,N,
\]

\[
Y_{n,:} \sim \text{Mult}\left(M_n, p = \sum_k \pi^{(n)}_k \phi_k\right).
\]

Here \(\phi_k\) is a probability distribution over the action vocabulary, \(\pi^{(n)}\) is the possession-specific topic-proportion vector, and \(p\) is the induced probability vector over observed pair-action counts. Probabilities are dimensionless. The paper fits “K = 100 topic possession model” [PAGE 6]. It also reports that each possession topic vector is sparse, with “on average only 8 of the 100 entries are non-zero” [PAGE 7].

Breakdown regime: the multinomial assumption treats pair-action counts as exchangeable draws from a fixed categorical distribution. This ignores sequential dependency, defensive adaptation, and clock pressure. If \(M_n\) is small, the multinomial observation is noisy and the posterior over \(\pi^{(n)}\) is diffuse. If \(K\) is too small, distinct strategies merge; if \(K\) is too large, topics fragment and become less interpretable.

7. Possession similarity and KL divergence  
A possession sketch is the topic-loading vector \(\pi^{(n)}\). Similarity can be assessed using a probability-space divergence. The source’s t-SNE visualization uses a KL-divergence axis [PAGE 7]. For two discrete probability vectors \(p\) and \(q\),

\[
D_{\mathrm{KL}}(p \parallel q)
=
\sum_i p_i \log \frac{p_i}{q_i}.
\]

If natural logarithms are used, the unit is nats; if base-2 logarithms are used, the unit is bits. The source does not specify the logarithm base, so the unit should be stated whenever reporting numerical values. Breakdown regime: if any \(p_i > 0\) while \(q_i = 0\), the divergence diverges unless additive smoothing or an information-geometry regularization is used. If \(p\) and \(q\) are sparse topic vectors, small numerical changes in zero entries can strongly affect interpretation.

8. t-SNE projection and its limits  
The paper uses t-SNE to visualize the sparse 100-dimensional possession sketches in two dimensions [PAGE 7]. t-SNE is not a metric embedding; it preserves local neighbor structure more faithfully than global distances. The source itself notes that points farther apart may be arranged in ways that do not reflect exact 100-dimensional distances [PAGE 7]. Therefore, a visual cluster is evidence of local similarity, not proof of global equivalence.

9. Model-scale breakdown regimes  
- Segmentation singularity: if no low-velocity interval exceeds 0.25 s, the possession remains unsegmented, and the action model must represent an entire possession as one template.  
- Pair vocabulary singularity: if \(V\) is too small, many distinct movements collapse into the same action; if \(V\) is too large, pair-action counts become sparse and statistically unstable.  
- Temporal-order singularity: because the representation is a bag, two possessions with identical simultaneous pair counts but different causal order receive identical sketch vectors.  
- Topic sparsity boundary: if a possession has fewer than two distinct simultaneous actions, pair-action counts may be zero or nearly zero, making the topic posterior weak.  
- Inference breakdown: stochastic variational inference is used for scale [PAGE 5], [PAGE 12], but if local optima or poor initialization occur, the inferred topics may be arbitrary or unstable.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s lineage is interdisciplinary: it combines basketball tracking, functional data analysis, computer-graphics curve modeling, topic modeling, and scalable Bayesian inference. The action-template layer descends from the use of Bezier curves in animation and videogame design, as the source explicitly notes when describing the template function \(B:[0,1]\to \mathbb{R}^2\) [PAGE 3]. This is important because it means the movement model is not a biomechanical simulator; it is a compact geometric prior. Bezier curves are chosen because they are flexible, concise, and easy to fit [PAGE 12], not because they encode muscle activation, joint torque, or contact forces. A retro-causal reading of this lineage warns analysts not to interpret smooth curves as physical explanations of why a player moved. They are descriptive primitives.

The second lineage is topic modeling. The source draws on Latent Dirichlet Allocation [PAGE 4] and related probabilistic topic-model literature [PAGE 4], [PAGE 10]. LDA originated in document modeling, where words co-occur inside documents and topics reveal latent themes. The paper transfers this by treating player actions as words and possessions as documents. The retro-causal trap is that topic models often reveal corpus-level regularities, not intentional narratives. If a topic contains a drive, a corner presence, and a weak-side cut, it may be strategically meaningful, but it may also be a geometric consequence of floor spacing. The model can mistake league-wide structure for team-specific intention.

A third lineage comes from scalable Bayesian inference. The source uses expectation-maximization for the action-template model [PAGE 12] and stochastic variational inference for the large possession corpus [PAGE 5], [PAGE 12]. This matters because the method is designed for season-scale data: over 190,000 possessions and about 4.5 million segments [PAGE 2], [PAGE 3]. The retro-causal hazard is that scalability can obscure uncertainty. Variational inference provides an approximation; if the approximation error is not audited, downstream visualizations may appear more definitive than they are.

A fourth lineage is basketball analytics prior work. The paper contrasts itself with pointwise trajectory similarity [PAGE 10], multiresolution stochastic process models for possession outcomes [PAGE 10], and neural-network play classification [PAGE 10]. It claims a more data-driven and global decomposition of possessions [PAGE 10]. This lineage creates a multi-week trap: if an analyst uses Possession Sketches as a replacement for causal possession-value models, they may mistake descriptive similarity for expected value. The paper itself notes that its approach could be used within an EPV model but is primarily exploratory [PAGE 10].

The multi-week traps are especially relevant for longitudinal strategy analysis. First, roster turnover can change the meaning of an action cluster. A cut action may be common for one player and rare for another, but the vocabulary is global. Second, coaching changes can alter temporal sequencing without changing simultaneous pair-action counts. The bag representation will miss that. Third, hand-labeled examples, such as the 40 weave plays used for validation [PAGE 7], are small and can create confirmation bias. Fourth, t-SNE maps can suggest stable neighborhoods that are artifacts of perplexity, initialization, or stochastic optimization. A retro-causal audit therefore asks: would this conclusion survive re-fitting the vocabulary, re-estimating topics with a different \(K\), re-running t-SNE with multiple seeds, or testing the same hypothesis in a later season? If not, the apparent strategy may be a historical artifact rather than a robust tactical operator.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
A recursive theory-of-mind layer is necessary because basketball possessions are not merely generated by a team’s own habits; they are responses to an opponent’s anticipated response. The source models possession structure as co-occurrence over pair-actions [PAGE 5], but a strategic opponent can deliberately alter those co-occurrences. If Team A frequently loads onto a topic containing drive-and-corner co-actions, Team B may deny the corner presence, force the drive left, or switch the screen coverage. The observed possession may then load onto a different topic even though the initial offensive call was the same. Therefore, the model’s posterior over topics is not only a description of offense; it is a noisy signal filtered through defensive counter-play.

Crisis habit regression is the tendency for teams under clock pressure to revert to high-frequency actions. The source’s possession-length examples are 5-24 seconds [PAGE 2], and the shot-clock environment compresses decision time. Under a small remaining clock, the number of observable pair-action events \(M_n\) may be lower, or the sequence may be truncated. In the LDA generative model,

\[
Y_{n,:} \sim \text{Mult}\left(M_n, p = \sum_k \pi^{(n)}_k \phi_k\right),
\]

a smaller \(M_n\) increases sampling noise in the observed pair-action vector. The posterior over \(\pi^{(n)}\) becomes less certain. If the model is then used to infer “habit,” it may simply be reacting to low information. A robust analysis should therefore condition on clock, score state, timeout state, and possession-ending type, not merely on topic loading.

Counter-trap behavior is the inverse of habit regression. An opponent may intentionally induce a low-probability topic to make the offense appear unusual. For example, if a team usually creates corner attempts after a drive, the defense may force the ball handler to pass earlier, before the corner action becomes simultaneous. In the pair-action representation, the drive and corner presence may no longer co-occur as a word. The possession sketch changes even though the offensive concept was attempted. This is a recursive modeling problem: the offense knows the defense knows the offense’s topic distribution, and the defense knows the offense knows that the defense knows it.

A formal way to express this is to treat the observed sketch as a noisy observation of latent strategic intent under defensive adaptation. Let \(S_t\) be the latent offensive strategy, \(D_t\) the defensive adaptation, and \(Y_t\) the observed pair-action counts. Then

\[
p(Y_t \mid S_t, D_t)
\]

is not stationary. The source’s LDA model approximates a marginal version:

\[
p(Y_t) \approx \sum_k p(S_t=k) p(Y_t \mid S_t=k),
\]

but in live play the relevant object is conditional on \(D_t\). If \(D_t\) is unobserved, the inferred topic may be biased. Recursive reasoning requires asking: what would the opponent do if they believed this possession loads onto topic \(k\)? If the opponent’s best response changes the action co-occurrence, the model’s interpretation of topic \(k\) is incomplete.

Clock enters as a hard temporal constraint. The source describes possessions in the range of seconds, with example possession lengths of 5-24 seconds [PAGE 2]. If a possession is near the end of the clock, late-clock actions may be compressed, rushed, or incomplete. The bag-of-pair-actions representation may record a partial co-occurrence pattern that looks like a coherent strategy but is actually a truncated emergency sequence. The recursive trap is to interpret late-clock sparsity as strategic simplicity. A better inference treats clock pressure as a covariate that changes the generative process: late-clock possessions may have lower \(M_n\), fewer simultaneous pairs, higher topic posterior variance, and greater regression toward frequently observed emergency actions.

The final recursive audit is this: if the model says a possession belongs to a topic, ask whether that topic would still be inferred after accounting for defensive counter-traps, clock pressure, and truncation. If the answer is no, the model has captured a surface pattern, not a stable strategic operator.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and environmental constraints can veto a model-based strategic interpretation even when the statistical model assigns high posterior probability to it. The source provides several hard constraints that can be used as veto layers.

First, the segmentation threshold imposes a kinematic constraint. The paper cuts segments at “sustained moments of low velocity (> .25 seconds below a threshold of .1 feet per second)” [PAGE 3]. Therefore, if a proposed interpretation says a player changed action inside a movement interval where the smoothed speed remained above 0.1 ft/s for the entire interval, the interpretation is vetoed. Formally, suppose a proposed cut occurs at time \(t_c\) inside an interval where

\[
v_j(t) \geq 0.1\ \text{ft/s}
\quad \text{for all } t \in [a,b],
\]

with \(b-a > 0.25\ \text{s}\). The source’s segmentation rule would not place a cut there. Any downstream claim that a new action begins at \(t_c\) lacks support from the stated preprocessing operator.

Second, the Bezier template model imposes a smoothness and covariance constraint. Each observed segment point is modeled as

\[
x^{(n)}_{js,t} \sim \mathcal{N}\left(B_v(t,\theta_v), \Sigma_v\right).
\]

If a proposed action requires a trajectory point that lies many covariance units away from every learned template, the interpretation is physically implausible under the model. A Mahalanobis distance,

\[
\Delta^2 =
\left(x - B_v(t,\theta_v)\right)^\top
\Sigma_v^{-1}
\left(x - B_v(t,\theta_v)\right),
\]

can be used as a veto diagnostic. If \(\Delta^2\) is extremely large for the best template, the segment is not well explained by the learned action vocabulary. The unit of position is length, e.g. feet or meters, and \(\Sigma_v^{-1}\) has units of inverse squared length.

Third, court-boundary and continuity constraints veto impossible trajectories. If a possession sketch implies that a player simultaneously occupies two distant locations, or moves across the court in less time than physical speed allows, the sketch is invalid as a literal play description. A simple continuity constraint is

\[
\|x_j(t+\Delta t) - x_j(t)\|
\leq
v_{\max}\Delta t + \epsilon,
\]

where \(v_{\max}\) is a plausible maximum speed and \(\epsilon\) absorbs tracking noise. If the inferred action template requires movement beyond this bound, veto. This does not depend on tactical interpretation; it is a basic spatiotemporal feasibility condition.

Fourth, the possession-length constraint provides a clock-based veto. The source describes possession-length trajectories as short segments such as 5-24 seconds [PAGE 2]. If a proposed strategy requires more continuous offensive structure than the possession duration supports, the interpretation is suspect. For example, if a sketch is inferred from a 6-second possession but the interpretation assumes a long, multi-phase weave that would normally require more time, the model may be overreading a truncated sequence. The veto is not that the strategy is impossible in the abstract; it is that the evidence within the possession is too short to support that claim.

Fifth, weather is largely a veto layer for indirect inference, not for direct on-court geometry. NBA games are indoor, so rain, wind, and outdoor court friction are not direct operators in the source’s tracking model. Weather can affect travel, fatigue, or scheduling, but the paper’s possession-sketch model does not observe those variables. Therefore, any claim that a team’s topic distribution changed because of weather is vetoed unless external data are introduced. The source’s variables are spatial trajectories, segment labels, pair-action counts, and topic proportions; weather is outside the model’s causal layer.

A consolidated veto proof is as follows. Suppose the model infers that possession \(n\) strongly loads onto topic \(k\). The inference is physically admissible only if: (1) the segment boundaries satisfy the 0.25-second low-velocity rule at 0.1 ft/s [PAGE 3]; (2) the observed trajectory points are plausible under the Gaussian Bezier template model [PAGE 12]; (3) player positions remain continuous and within plausible court bounds; (4) the possession duration supports the inferred sequence; and (5) no external environmental factor is invoked without independent evidence. If any condition fails, the topic loading may remain statistically present, but it cannot be accepted as a valid physical or biomechanical explanation of the possession.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Below are three verifiable RLVR-style veto scenarios. Each scenario proposes a possible model-based strategic claim, states the formal veto test, and gives a prediction. The tests are counterfactual in the sense that they ask whether the claim would survive a controlled perturbation or an independent verification.

1. Teleport-cut veto  
Claim: A possession sketch indicates that a player changed from a stationary corner action to a baseline cut at the basket without any intervening segment.  
Formal veto test: Let the proposed transition occur between times \(t_0\) and \(t_1\). The model must show either a segment boundary or continuous movement connecting the two locations. If the smoothed velocity in the source was below 0.1 ft/s for less than 0.25 s and no cut was detected, but the proposed action requires a new movement template, the claim is vetoed.  
Verifiable prediction: If the tracker data are replayed with the stated threshold, the segmentation will not produce a boundary between the stationary and cut actions. The pair-action count vector \(Y_{n,d}\) will either omit the proposed transition or assign it to a longer segment that includes both phases. Therefore, a topic interpretation that depends on a precise transition timing will be unstable.  
Prediction in plain terms: The nearest-neighbor possession may still appear similar because both contain drive or corner co-actions, but frame-level verification will show that the exact transition was not resolved by the segmentation operator.

2. Same-action simultaneity veto  
Claim: Two players performed the same cut simultaneously, and this fact should strongly increase the possession’s similarity to other possessions where both players cut together.  
Formal veto test: The source’s pair-action vocabulary uses pairs \((v_i,v_j)\) with \(v_i \neq v_j\) [PAGE 5]. If two players both perform action \(v\), the pair \((v,v)\) is excluded. Therefore, the count vector \(Y_{n,d}\) cannot encode identical simultaneous actions.  
Verifiable prediction: If the tracking data are perturbed so that one player’s action label changes from \(v\) to a nearby action \(v'\), the pair-action count can change substantially because \((v,v')\) enters the vocabulary. If both remain \(v\), the count does not encode that co-occurrence. Thus, the model will be insensitive to the symmetric case and sensitive to the asymmetric case.  
Strategic implication: A claim that “two players cutting together is a signature of this possession” is vetoed unless the action labels are distinct. The model can detect complementary co-occurrence better than identical co-occurrence.

3. Temporal-order invariance veto  
Claim: A possession is identified as a weave because it has a particular sequence: pass, cut, re-screen, drive, kick-out. A second possession has the same pair-action inventory but in reverse order. The model should distinguish them.  
Formal veto test: The possession representation is a bag of simultaneous pair-actions [PAGE 5]. The count vector \(Y_{n,:}\) is invariant to permutations of the underlying sequence as long as the simultaneous pair counts remain the same. Therefore, if two possessions have identical \(Y_{n,:}\), their LDA topic posterior will be identical under the model.  
Verifiable prediction: If one temporally reorders a possession without changing the simultaneous pair counts, the inferred sketch \(\pi^{(n)}\) should remain unchanged up to inference noise. The source itself notes that the current possession sketch “ignores much of the temporal information in each possession” [PAGE 10].  
Strategic implication: Any claim that the model distinguishes a well-executed weave from a broken-down possession with the same simultaneous actions is vetoed. The model can distinguish temporal order only if that order changes the pair-action counts, for example by changing which actions are simultaneous.

These vetoes are not merely technical; they define the boundary between what the Possession Sketch model can legitimately claim and what it cannot. It can claim that two possessions share recurring simultaneous interaction patterns. It cannot, without additional temporal or causal modeling, claim that they share the same tactical sequence, intent, or success mechanism. The source’s own future-work section acknowledges this limitation by noting that a future project could describe the time-varying nature of possession strategies and identify possessions that started in one structure but broke down into another [PAGE 10].
</RLVR_COUNTERFACTUAL_VETOES>