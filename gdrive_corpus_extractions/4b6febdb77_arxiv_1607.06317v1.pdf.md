---
source: "arxiv_1607.06317v1.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 18
model: baidu/ernie-5.5-flash-preview:free
words: 8696
---

<NATIVE_REASONING>
We need answer to user's request. Need produce final >=1000 words with exact XML sections. User provided drive source arXiv PDF pages. They ask implicitly? The prompt says "DRIVE SOURCE... PAGES... SOURCE TEXT..." No explicit question, but likely wants analysis according to Foundry with sections. We must follow invariants: no betting lines, no toy equations, formal LaTeX, SI/information/probability units, assumptions, exact singularity/breakdown regimes. When source pages provided, cite exact [PAGE N] markers and verbatim quotes. Need >=1000 words across exact XML sections: THINK_TRACE, SOURCE_OPERATORS_AND_EQUATIONS, RETROCAUSAL_GENEALOGY, RECURSIVE_THEORY_OF_MIND, CROSS_LAYER_VETO_ADJUDICATION, RLVR_COUNTERFACTUAL_VETOES. Need likely analyze paper: joint multicut segmentation/tracking. Need include formal equations from source: Eq 1 objective, cycle inequalities, logit costs, low-level z, logistic Eq2, detection edge Eq5, cross-level Eq3/4, Eq6. Need breakdown regimes: APX-hard, heuristic KL, non-overlap, zero probability logits? Need cite pages and verbatim quotes maybe exact short quotes. Need no betting lines. Ensure not mention odds. Need not use fake ratios. We can use equations from source. Need maybe discuss applications as high-level, low-level nodes. Need maybe "Multi-week traps" in retro-causal genealogy? Could be historical lineage and multi-week traps maybe research traps. Need ensure >=1000 words total? It says >=1,000-WORD DEPTH across these exact XML sections. Need each section maybe 170+ words. THINK_TRACE >=400. Let's plan.

We must ensure final only XML sections? User says across exact XML sections. Probably include exactly these tags. We can include content inside. No extra outside. Need maybe not include markdown headings besides XML tags.

Need deep derivation and gray-zone audit in THINK_TRACE >=400 words. SOURCE_OPERATORS_AND_EQUATIONS formal. Retro genealogy. Recursive theory of mind: crisis habit regression vs counter-trap vs clock. Cross-layer veto adjudication: physical/biomechanical/weather veto proof. RLVR counterfactual vetoes: 3 verifiable scenarios + predictions.

Need adhere zero betting lines: no odds, spreads, totals, moneylines. Could mention probabilities? Yes allowed formal probability. Avoid betting terms.

Need no toy equations: Use exact formal equations. Could define assumptions. Need SI/information/probability units. For variables: nodes dimensionless? Edges costs log-odds, dimensionless log probability. Distances normalized by bounding box, dimensionless. Optical flow? velocities pixels/frame? SI maybe m/s? But source uses pixels. We can state units: pixel, frame, seconds if frame rate known. Need exact singularity/breakdown regimes: p=0/1 logits infinite, Eq 4 piecewise thresholds, empty intersection? APX-hard, cycle inequalities exponential, KL local optimum. Also physical vetoes: impossible trajectory due to optical flow occlusions, bounding box no template, detection suppression factor 20 crude, static object over-segmentation? Need maybe "physical/biomechanical/weather veto proof" maybe apply to pedestrian tracking? Could say if trajectory discontinuity beyond physical plausible motion, cross-layer vetoes. Need not invent ratios. Could use equations for veto predicates? Formal inequalities.

Need include source page citations [PAGE 4] etc. Need verbatim quotes? "min ..."? Need exact quotes maybe short: "decompose the graph into connected components" [PAGE 4], "APX-hard" [PAGE 4/6], "logit(pe)" etc. Could cite exact page markers and quote.

Need think about potential hidden request: They gave source text; maybe wants a report. We'll deliver analysis of the paper. Need maybe no external citations beyond source. We can cite [PAGE 1] etc.

Let's draft sections.

THINK_TRACE: Explain reasoning: joint graph, multicut optimization, three edge sets. Derive objective. Discuss gray zones: parameter heuristics, detection quality, threshold sigma, logit mapping, cycle constraints, heuristic solver. Need >=400 words. We can count roughly. Aim 600.

SOURCE_OPERATORS_AND_EQUATIONS: List equations in LaTeX. Eq 1 objective, MC set, cycle inequalities, logit, z low-level, logistic, detection-edge, normalized distances, cross-level template/cut prob, Eq6. Include units and assumptions and breakdown. Cite pages. Need exact quotes maybe. Use formal.

RETROCAUSAL_GENEALOGY: Historical lineage: graph partitioning, multicut, correlation clustering, motion trajectory segmentation, tracking-by-detection, spectral clustering, higher-order potentials. Multi-week traps: assuming higher-order needed, relying only local cues, ignoring detection pairwise, over-segmentation of static objects due unannotated, NMS sparsity. Cite pages: [PAGE 2] "Attractive and repulsive pairwise terms" etc. Need maybe "multi-week traps" as project traps.

RECURSIVE_THEORY_OF_MIND: Model agents/researchers: crisis habit regression: fallback to independent trackers/segmenters; counter-trap: joint graph; clock: inference complexity/APX-hard, solver speed, runtime. Discuss beliefs about evaluator, benchmarks. Need exact.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Use layers: optical flow consistency, bounding box templates, motion distance, temporal overlap. Formal veto: if forward-backward flow inconsistency marks occlusion, trajectory ends [PAGE 5]. If template value <=0.5 and normalized distance > sigma, p=1 [PAGE 6]. Physical: pedestrians have height/width templates, walking direction; if point outside template and distant, veto. Weather? Maybe not in source; can discuss video degradation? Need proof: no evidence to overrule. Could formulate logical veto: if d_sp > sigma and template low, cut probability 1. If mask covers <20% or >60%, detection discarded [PAGE 9]. Need cite.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable scenarios + predictions. RLVR maybe Reinforcement Learning with Verifiable Rewards? Counterfactual vetoes. Need scenarios: (1) Faster R-CNN detection with low IoU; if IoU <=0.7 and dsp <=1.2, p_high=0.5 neutral; predicted no detection edge attraction; maybe false negatives? (2) Sparse 2D MOT detections after NMS, if no tracklet pregrouping and factor 20, graph underweighted; predicted MOTA improvement modest and false positives increase. (3) Static object detected consistently but unannotated; if detector produces stable bounding boxes, joint model segments static car causing over-segmentation and precision drop. Need verifiable with source table/figures. Predictions: if remove high-level detection edges for LSDA, performance close to JointMulticut [PAGE 11]; for faster R-CNN, contribution significant. If mask covers less than 20% or >60%, discarded [PAGE 9]. If p=logit(0.5)=0 neutral. Need exact. Use formal predictions maybe inequalities.

Need ensure word count. Let's draft robustly.

Potential issue: ">= 1,000-WORD DEPTH across these exact XML sections" Means total at least 1000 words, maybe each? It says across these exact XML sections. Need total >1000. We can make ~2000. Ensure THINK_TRACE >=400.

Need not mention "GSE + GSI Frontier Reasoning Foundry"? Maybe not.

Need ensure no fake ratios. Avoid "force/fatigue". Use only source equations.

Need maybe cite exact [PAGE N] markers in every section? The invariant says when source pages are provided, cite exact [PAGE N] markers and verbatim quotes. So include citations. Maybe not every sentence but enough. Need exact verbatim quotes. We'll include quotes in SOURCE_OPERATORS and other sections. Ensure quotes exact? Need copy from provided text. Need be careful with special characters? Use exact. Examples:
[PAGE 4] "decompose the graph into connected components" (exact? source: "that decompose the graph into connected components." yes)
[PAGE 4] "APX-hard" appears "making the optimiza tion problem APX-hard [42]." Could quote "APX-hard".
[PAGE 4] "logit(pe) = log pe 1−pe" but text broken. Could quote "logit(pe) = log pe 1−pe"? Better avoid if not exact. We can paraphrase but need verbatim quotes when citing. Include short quotes: "binary edge labeling problem" [PAGE 4], "trivial solutions are avoided" [PAGE 4].
[PAGE 5] "maximum motion diﬀerence" [PAGE 5]
[PAGE 5] "1 + exp(−z)" maybe Eq2. Could quote? Not necessary.
[PAGE 6] "spatio-temporal center position" [PAGE 6]
[PAGE 6] "application dependent threshold σ" [PAGE 6]
[PAGE 7] "finding the optimal solution is not necessary" [PAGE 7]
[PAGE 9] "if such a mask covers less than 20% of its bounding box or more than 60% of the whole image area" [PAGE 9] exact? Provided: "Thus, if such a mask covers less than 20% of its bounding box or more than 60% of the whole image area, the respective detections are not used as nodes in our graph." Yes.
[PAGE 10] "static, consistently detected objects" maybe [PAGE 10] "static, consistently detected objects like the car ..." exact? It says: "Additionally, static, consistently detected objects like the car in the ﬁrst part of the sequence are segmented as well." Use quote.
[PAGE 11] "pairwise information we currently employ between the bounding boxes is quite weak" exact? Source: "implying that the pairwise information we currently employ between the bounding boxes is quite weak." yes.
[PAGE 12] "without applying any Non-Maximum Suppression" [PAGE 12]
[PAGE 15] "detections for all sequences are provided after Non-Maximum suppression" [PAGE 15]
[PAGE 15] "Assuming that about 20 bounding boxes have been suppressed for every true detection" exact? yes.
[PAGE 15] "crude heuristic" exact? "We are aware that this is a crude heuristic." yes.

Need no external knowledge. Could use known terms but grounded.

Let's compose final.

Need check XML validity. Tags exactly: <THINK_TRACE> ... </THINK_TRACE> etc. Content may include < >? LaTeX with < maybe not; avoid raw <. Use \langle. Also ampersands? XML might require escaping but likely okay. Use plain.

Need include LaTeX. In XML text, okay. Need maybe no unescaped < except tags. Use "less than" words or \&lt;? Avoid. For inequalities, use $<$? In XML content, < starts tag; safer avoid raw <. Use LaTeX without < or escape. Use \le? For < use \textless? But inside LaTeX we can use \leq for less than? For strict, use < but risky. Use words or use \lt. We can write $y_e \le ...$ okay. For strict inequalities, use $d_{sp} > \sigma$ no <. For if mask covers less than, quote text contains less not symbol. For equations, avoid <. For p=... use cases. For $f_1 = M_I/M_U$ no <. For $d_1$ and $d_2$ no more than 3 frames? Use \le 3? Use "no more than 3" in prose.

Need include equations with cases; can use array. No raw <. Need use \le for ≤. Good.

Need count words. Let's draft with substantial length.

Potential issue: "SOURCE_OPERATORS_AND_EQUATIONS" maybe long with equations. Fine.

Let's begin.

THINK_TRACE: Need >=400 words. I'll write around 650.

Detailed content:
- Read source, identify problem: joint segmentation/tracking as multicut.
- Derivation: graph G=(V,E), partition into components. Edge labels y. Min sum costs. Feasible MC. Cycle inequalities. Cost as logit probability. Low-level costs from motion, color, spatial. High-level from IoU/distance. Cross-level from template/distance.
- Gray-zone audit: training small, hand-set parameters; thresholds; σ large; detection quality affects; p=0.5 neutral; infinite logits at 0/1; solver heuristic; benchmark annotation sparse causing static object penalty.
Need cite pages and quotes.

Let's ensure no raw < in "less than". Use "below". For equations, okay.

SOURCE_OPERATORS_AND_EQUATIONS:
1. Graph and objective Eq1.
2. Feasible set and cycle inequalities.
3. Logit cost relation.
4. Low-level cost z and logistic.
5. High-level detection edges Eq5.
6. Cross-level normalized distance Eq3 and template probability Eq4.
7. Detection-tracklet edge Eq6.
8. Units and breakdown: costs dimensionless log-odds, distances normalized by width/height dimensionless, positions in pixels/frames, confidences probability [0,1]. Breakdowns: p_e in {0,1} logits diverge; empty cycles; APX-hard; heuristic not optimal; detection mask thresholds. Include citations. Need maybe exact quotes.

RETROCAUSAL_GENEALOGY:
- lineage: image segmentation multicut, motion segmentation, tracking. Cite pages. Historical: minimum cost multicut applied to image segmentation [PAGE 3], motion segmentation [PAGE 3], pedestrian tracking [PAGE 3], spectral clustering [PAGE 3], higher-order [PAGE 2]. Multi-week traps: believing higher-order necessary; relying only local trajectories; forgetting repulsive cross-level terms; ignoring detector localization; benchmark annotation bias. Cite pages: [PAGE 2] "While it is impossible to tell two rotational or scaling motions apart from only pairs of trajectories" exact? yes. [PAGE 3] "we do not make use of any higher order motion models". [PAGE 10] static car over-segmentation. [PAGE 11] weak high-level pairwise for LSDA.

RECURSIVE_THEORY_OF_MIND:
- model researcher beliefs, crisis habit regression: when data scarce, return to separate models or hand-tuned parameters. Counter-trap: joint graph forces consistency. Clock: solver runtime, APX-hard, KL heuristic. Benchmark clock? Need discuss temporal constraints: tracklets length 5 [PAGE 12], detection NMS [PAGE 15], sparse sampling 8 pixel distance [PAGE 10/13]. The "clock" could be temporal sampling and inference latency.

CROSS_LAYER_VETO_ADJUDICATION:
- physical/biomechanical/weather veto proof. Need formal. Layer 1: optical flow consistency veto: forward-backward inconsistency => trajectory end [PAGE 5]. Layer 2: spatial template veto: Eq4: if template <=0.5 and normalized distance > sigma, p=1. Layer 3: detector mask veto: covers less than 20% or more than 60% discard [PAGE 9]. Layer 4: physical scale: pedestrian template scaled to bounding box, walking direction flip [PAGE 12]. Weather? Source no weather; can state no explicit weather operator; any weather-induced appearance corruption enters via detector score and template; if confidences fall below thresholds 0.47/0.97, nodes omitted [PAGE 9]. Need proof: veto is monotone: as d_sp increases beyond sigma, p_ehl becomes 1; no positive evidence can override because piecewise assignment. Could include logical proof. Also "biomechanical" via walking direction and shape template. Use formal predicates.

RLVR_COUNTERFACTUAL_VETOES:
- Need 3 verifiable scenarios + predictions.
Scenario A: Remove high-level detection-detection edges for LSDA; source says performance close [PAGE 11], so prediction F-measure change small. Verify by comparing Table 1 JointMulticut LSDA vs MCe+det LSDA: 80.7617 vs 80.7634? Actually source: MCe + det. (LSDA) 80.7617, JointMulticut LSDA 80.7634, tiny difference. Use exact. Prediction: if LSDA detection pairwise weak, ΔF ≈ 0.0017 percentage? Wait table values percent: 80.7617 vs 80.7634, difference 0.0017 percentage points? Very small. Need no invented. We can say observed difference is 0.0017 in F-measure units as reported. But is that a ratio? It's performance metric. Allowed. Maybe not toy equation. Scenario B: Faster R-CNN better localization; removing high-level edges MCe+det f.R-CNN F=81.41 vs Joint 82.44, drop 1.03. Prediction: if detection boxes localized well, high-level edges improve. Verify [PAGE 10]. Scenario C: static object detected; joint model segments static car causing over-segmentation. Quote [PAGE 10]. Prediction: with consistent static detections, O count may increase but precision penalized; verify marple6. Or sparse MOT: NMS detections require factor 20; prediction MOTA improvement but FP increase: source Table 4 JointMulticut FP 10,580 vs Choi 7,762; MOTA 35.6 vs 33.7; FN 28,508 vs 32,547. Use as verifiable. Need 3. Could use: (1) LSDA pairwise weak; (2) Faster R-CNN pairwise significant; (3) NMS sparse benchmark factor 20 leads higher FP. Need predictions. Include exact numbers? It's allowed, not betting. Use from source.

Need ensure "RLVR" maybe define: counterfactual veto scenarios verifiable from reported results. We can label.

Need avoid odds. Terms like "probability" okay. Avoid "bet", "odds", "line". "logit" okay.

Let's draft final with sections. Need ensure total >1000. Let's write.

Check for raw less-than in text: I must avoid "<". In equations, use \le. For quotes with less than? If quoting source: "less than 20%" no symbol. Fine. For XML, content may contain &? Use &amp;? We can avoid ampersand. Use "and". For LaTeX align? no raw &. Use array with no &. Need maybe use \begin{cases} ... \end{cases} with &? In LaTeX cases uses &; if raw & in XML content maybe okay but can be parsed as entity? To be safe, avoid & in equations? Could use separate equations or text. But we need equations. In XML, & should be escaped as &amp; if literal. Could avoid cases with & by using separate conditional equations in prose. But formal equations can use \begin{cases} with &? It may be okay but to be safe, avoid ampersands. Use \begin{cases} 1 - T ... & \text{if } ... \end{cases} contains &. Could write as piecewise with \begin{cases} ... \end{cases} and no &: use \begin{cases} 1 - T... \\ 1 \\ 0.5 \end{cases} with conditions in text? Not rigorous. Could use LaTeX with \text{if} and no alignment? For cases, need alignment but can use matrix without &: \begin{cases} a \\ b \\ c \end{cases} and then conditions listed separately. That's okay.

Need raw vertical bars? okay. Use |. Use ^. Use _. Use \backslash? okay.

Need maybe include [PAGE N] markers. Good.

Let's compose carefully.

Potential issue with verbatim quotes containing special Unicode e.g. diﬀerence, ﬁnding. We can copy but not necessary. Need exact? Use short quotes. Ensure quotes from source exactly? Let's copy some:
- "decompose the graph into connected components" from PAGE 4: exact? Source: "that decompose the graph into connected components." yes.
- "binary edge labeling problem" PAGE 4 exact.
- "APX-hard" PAGE 4 exact.
- "trivial solutions are avoided" PAGE 4 exact.
- "maximum motion diﬀerence" PAGE 5 exact? source: "maximum motion diﬀerence". Use diﬀerence? Could use normal difference? Verbatim should exact. Use "maximum motion diﬀerence" with ligature? Provided has "diﬀerence" with ligature? It displays "diﬀerence" maybe U+FB00? We can copy: "diﬀerence". But may not matter. Use simple "difference"? If not exact? Maybe okay. We can quote "maximum motion difference"? The source text has "diﬀerence" due ligature. Hard. Could avoid.
- "spatio-temporal center position" exact? source: "spatio-temporal center position". yes.
- "application dependent threshold σ" exact? source: "application dependent threshold σ". yes.
- "finding the optimal solution is not necessary" exact? source: "ﬁnding the optimal solution is not necessary". Use "finding" maybe ligature. Could quote "optimal solution is not necessary" exact? source: "ﬁnding the optimal solution is not necessary". We can quote substring "optimal solution is not necessary".
- "if such a mask covers less than 20% of its bounding box or more than 60% of the whole image area" exact? yes.
- "static, consistently detected objects" exact? source: "static, consistently detected objects". yes.
- "pairwise information we currently employ between the bounding boxes is quite weak" exact? source: "pairwise information we currently employ between the bounding boxes is quite weak". yes.
- "without applying any Non-Maximum Suppression" exact? source: "without applying any Non-Maximum Suppression." yes.
- "detections for all sequences are provided after Non-Maximum suppression" exact? source: "detections for all sequences are provided after Non-Maximum suppression." yes.
- "Assuming that about 20 bounding boxes have been suppressed for every true detection" exact? source: "Assuming that about 20 bounding boxes have been suppressed for every true detection". yes.
- "crude heuristic" exact. yes.

Need maybe cite pages for equations: Eq1 [PAGE 4], cycle inequalities [PAGE 4], logit [PAGE 4], low-level z [PAGE 5], Eq2 [PAGE 5], Eq3/4 [PAGE 6], Eq5 [PAGE 9], Eq6 [PAGE 12], 2D MOT matching [PAGE 15].

Need maybe formal units: positions in pixels, frames; time in frame index or seconds if fps known; distances normalized by width/height dimensionless; IoU dimensionless area ratio; costs log-odds dimensionless. Template values probability [0,1]. Optical flow? Large displacement optical flow [PAGE 5]. Motion distance maybe max difference in optical flow? Could state if velocities in pixels/frame, distance dimensionless after combination? Actually d_m from optical flow difference maybe pixels/frame? Source says motion distances from maximum motion difference. Could state units depend on feature normalization; combined nonlinearly to z. We can be careful: d_m has displacement units (pixels or optical-flow units), d_c color distance in color-space units, d_s_p spatial normalized dimensionless. But z mapped to logit. Since source doesn't specify exact units, we state assumptions. Need formal. Good.

Need breakdown regimes: p_e=0 or 1 => logit ±∞, numerical divergence; cycle inequalities exponential; APX-hard; KL heuristic local minima; thresholds create discontinuities; σ controls spatial gate; detection confidence thresholds; sparse trajectories. Good.

Let's write final now. Ensure word count. We'll make sections lengthy.

Check for any "odds" accidentally: "log-odds" is term? Invariant zero betting lines: Never mention spreads, totals, moneylines, or odds. "log-odds" contains odds? It says never mention odds. Better avoid word "odds" entirely. Use "logit" and "logarithmic probability ratio" but not odds. The source says logit. Avoid "odds". Use "logit cost". Do not say log-odds. Use "log probability ratio"? Maybe ratio okay? No betting. But "odds" banned. Avoid. "logit" is fine. "probability" fine.

Need avoid "line" as betting line? Could say "lineage" okay? It contains line but not betting line. Fine. "deadline"? no.

Need no "spread" as statistics? Could avoid. Use "dispersion" maybe. No totals? "totals" maybe not. Avoid "total"? It might be okay but betting totals. To be safe, avoid "total" maybe. Use "overall".

Need no "moneylines". fine.

Let's ensure equations don't include \frac{pe}{1-pe} maybe okay, not odds. It's probability ratio. But logit formula includes fraction. That's formal.

Need maybe use "APX-hard" as source. Good.

Let's draft final.

Potential problem: In SOURCE_OPERATORS, if using $y_e \le ...$ no raw <. Good. Use \forall C \in cycles(G), \forall e \in C: y_e \le \sum ...$. Good.

Need avoid raw >? XML okay? '>' is okay in text, but can be okay. Use $>$ okay. No need escape. But raw & not. Avoid &.

Equations:
1) $\min_{y\in\{0,1\}^E} \sum_{e_{high}\in E_{high}} c_{e_{high}} y_{e_{high}} + ...$
No &.
2) cycle.
3) $c_e = \operatorname{logit}(p_e) = \ln(p_e/(1-p_e))$.
4) $z = \max(\bar\theta_0 + \theta_1 d_m + \theta_2 d_c + \theta_3 d_{sp}, \theta_0 + \theta_1 d_m)$.
5) $p_e = 1/(1+\exp(-z))$.
6) high edge: Use cases without &: Could write:
$p_{ij}^{high} = \begin{cases} 1 - \frac{1}{1+\exp(20(0.7 - \mathrm{IoU}(v_i^{high}, v_j^{high})))} \\ 1 / (1+\exp(5(1.2 - d_{sp}(v_i^{high}, v_j^{high})))) \\ 0.5 \end{cases}$
But conditions not aligned. Add text: first branch if IoU > 0.7; second if d_sp > 1.2; third otherwise. Source's second branch actually if d_sp > 1.2. Good. Need note first branch only if IoU > 0.7. Good.
7) cross-level distance Eq3: $d_{sp}(v_i^{high}, v_j^{low}) = 2 \left\| ( (x_i^{high}-x_j^{low}(t))/w_i^{high}, (y_i^{high}-y_j^{low}(t))/h_i^{high}) \right\|$ for $t=t_i^{high}$. Source has 2 times norm of vector. Good.
8) template cut: If template >0.5: $1 - T$; if d_sp > sigma: 1; otherwise 0.5. Use cases.
9) Eq6: sum logit. Good.
10) 2D MOT feature $f_e = (f_1, \min Conf, f_1 \min Conf, f_1^2, (\min Conf)^2)$ with $f_1=M_I/M_U$. Source has minConf2 maybe squared. Good.

Need mention assumptions: detections not too sparse, template available, common lifetime for motion distances, etc.

Now final. Ensure word count. Let's estimate: THINK_TRACE maybe 700, SOURCE 700, others 400 each -> total >2500. Good.

Double-check no "betting" terms: "benchmark" contains bench not betting. okay. "odds" absent. "totals" absent. "spread" absent. "moneylines" absent.

Need maybe "counterfactual veto" okay.

Let's write final in XML. Ensure no markdown outside. Use plain text inside. Need maybe escape less than in text? We use "less than" in quote, no symbol. In equations, use \le not <. In prose, avoid <. For "if $p_e=0$" no <. Good. For "if template value is not above 0.5" avoid <. In source quote: "less than 20%" okay.

Need maybe use "above" for >. Good.

Let's produce final.

</NATIVE_REASONING>

<THINK_TRACE>
The source defines a single combinatorial optimization problem that simultaneously assigns identities to detections and clusters point trajectories into moving-object segments. The reasoning chain begins with the graph object. The graph is undirected, with two node types: high-level detection nodes and low-level trajectory nodes. The graph contains three edge families: detection-to-detection, trajectory-to-trajectory, and detection-to-trajectory. The optimization labels every edge as cut or uncut. A feasible labeling is not arbitrary; it must decompose the graph into connected components. Therefore, the solver is not merely classifying edges independently; it is searching over partitions of the graph. This is the central conceptual move: tracking and motion segmentation are both recast as one partitioning problem.

The derivation proceeds through the cost model. The objective is a sum of pairwise costs over all three edge families. The feasible set is the multicut set. The source explicitly states that feasible solutions are exactly all partitionings of the graph and that the optimization is a “binary edge labeling problem” [PAGE 4]. The source also states that the feasible set can be characterized by cycle inequalities and that this makes the problem “APX-hard” [PAGE 4]. That hardness statement matters because it forces a gap between the formal ideal and the deployed inference method. The paper acknowledges that optimal solving is not required for many applications and uses a Kernighan-Lin-style heuristic [PAGE 7]. The gray-zone audit therefore must separate three layers: the mathematical multicut objective, the probabilistic interpretation of edge costs, and the engineering approximations used to make the model tractable.

The probabilistic interpretation is explicit: if an edge has cut probability, then the edge cost is the logit of that probability. The source states that the logit function generates real-valued costs such that “trivial solutions are avoided” [PAGE 4]. This is important. A naive binary cost model could collapse to all-cut or all-uncut solutions if costs are not centered correctly. The logit transform centers the decision at probability one-half and maps probabilities near zero or one to large-magnitude costs. The gray-zone issue is that if a probability is exactly zero or one, the logit diverges. In a discrete solver, this can be handled by saturation or clipping, but the formal model has a singularity there.

The low-level edge potential is built from motion, color, and spatial distances. The source says motion distances are computed from the maximum motion difference between two trajectories during their common lifetime [PAGE 5]. The combined low-level cost is a nonlinear max of two linear forms. The resulting scalar is mapped through a logistic function to a cut probability [PAGE 5]. This means low-level decisions depend on relative ordering of trajectories and on parameter choices. The gray-zone issue is that trajectories without temporal overlap cannot use the same lifetime-based motion distance directly; the source says spatial distances are also used for trajectories without temporal overlap [PAGE 5]. Thus, the low-level graph mixes heterogeneous evidence under one edge-cost convention.

The high-level edge potential is built from detection geometry and localization quality. For the motion segmentation dataset, the paper uses bounding-box intersection-over-union and normalized spatial distance. The detection-detection edge probability is a piecewise function: if intersection-over-union is above a threshold, use a logistic function of intersection-over-union; else if normalized spatial distance is above a threshold, use a logistic function of distance; otherwise use a neutral probability of one-half [PAGE 9]. This piecewise structure creates a gray zone: near thresholds, the edge assignment can switch abruptly. The source admits that parameters were set to produce reasonable results on the training set and that further optimization might improve results [PAGE 9]. This is a classic source of brittleness.

The cross-level edge potential is the bridge between low-level trajectories and high-level detections. The paper uses normalized spatial distance between a detection center and a trajectory point, scaled by detection width and height [PAGE 6]. It also uses a template value when available. If the template says the trajectory lies inside the object with value above one-half, the cut probability is reduced; if the trajectory lies outside the normalized spatial radius, the cut probability becomes one; otherwise it is neutral [PAGE 6]. This is a strong logical veto: a trajectory far outside the detection gate is treated as definitely not belonging to that detection, at least for that pairwise edge. The gray-zone issue is the threshold parameter, called an “application dependent threshold σ” [PAGE 6]. A large sigma weakens the veto; a small sigma makes it brittle under localization error.

The paper’s experimental logic reinforces the reasoning chain. On FBMS59, the joint model improves motion segmentation over trajectory-only multicut and higher-order motion models [PAGE 10, PAGE 11]. On pedestrian tracking, the joint model improves motion segmentation metrics and tracking recall, though false positives can increase [PAGE 13, PAGE 14]. The authors also observe that for LSDA detections, detection-to-detection pairwise information is weak, while for better-localized faster R-CNN detections, high-level pairwise terms contribute significantly [PAGE 11]. This means the value of the joint model is not uniform across detectors. The graph is only as useful as the detection nodes and pairwise potentials inserted into it. If detections are noisy, high-level edges may add little or may even harm localization by forcing incorrect component merges.

A final gray-zone issue is benchmark annotation bias. The FBMS59 annotations emphasize moving objects. When the joint model segments a static but consistently detected object, the benchmark may penalize it as over-segmentation even though the model is physically sensible. The source explicitly notes that static, consistently detected objects like a car can be segmented and that this causes over-segmentation on the benchmark because those objects are not annotated [PAGE 10]. Thus, an apparently worse precision score can correspond to a richer segmentation than the ground truth admits. The reasoning audit must therefore separate algorithmic error from annotation bias.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source formalizes the problem as a minimum-cost multicut over an undirected graph. The graph is written as \(G = (V, E)\), with node set \(V = \{V_{\text{high}}, V_{\text{low}}\}\) and edge set \(E = \{E_{\text{high}}, E_{\text{low}}, E_{\text{hl}}\}\) [PAGE 3]. High-level nodes represent detections; low-level nodes represent point trajectories [PAGE 3]. The optimization is the binary edge-labeling problem in Eq. 1:

\[
\min_{y \in \{0,1\}^E}
\sum_{e_{\text{high}} \in E_{\text{high}}} c_{e_{\text{high}}} y_{e_{\text{high}}}
+
\sum_{e_{\text{low}} \in E_{\text{low}}} c_{e_{\text{low}}} y_{e_{\text{low}}}
+
\sum_{e_{\text{hl}} \in E_{\text{hl}}} c_{e_{\text{hl}}} y_{e_{\text{hl}}}
\]

subject to \(y \in MC\), where \(MC\) is the set of feasible multicuts [PAGE 4]. The source states that feasible solutions are exactly all partitionings of the graph and that the feasible set can be defined by cycle inequalities [PAGE 4]:

\[
\forall C \in \text{cycles}(G), \quad \forall e \in C:
\quad
y_e \le \sum_{e' \in C \setminus \{e\}} y_{e'}.
\]

This constraint encodes the requirement that a connected component cannot have exactly one cut edge in a cycle. The source states that this makes the optimization “APX-hard” [PAGE 4]. The objective and feasible set are dimensionless in the sense that costs are abstract additive penalties, but the paper assigns them a probabilistic interpretation. If \(p_e\) is the probability that edge \(e\) is cut, the source uses

\[
c_e = \operatorname{logit}(p_e)
=
\ln\left(\frac{p_e}{1-p_e}\right).
\]

This is a logarithmic probability ratio in natural-log units. The source says the logit function generates real-valued costs such that “trivial solutions are avoided” [PAGE 4]. The breakdown regime is explicit: if \(p_e = 0\) or \(p_e = 1\), the logit diverges to \(-\infty\) or \(+\infty\). In numerical implementation, probabilities must be clipped or saturated.

Low-level trajectory edges use motion, color, and spatial evidence. The source says motion distances are computed from the maximum motion difference between two trajectories during their common lifetime [PAGE 5]. The combined low-level scalar is

\[
z :=
\max(
\bar{\theta}_0 + \theta_1 d_m + \theta_2 d_c + \theta_3 d_{sp},
\;
\theta_0 + \theta_1 d_m
).
\]

Here \(d_m\) is a motion distance, \(d_c\) is a color distance, and \(d_{sp}\) is a spatial distance. The source then maps \(z\) to a cut probability using the logistic function:

\[
p_e =
\frac{1}{1 + \exp(-z)}.
\]

The source labels this as Eq. 2 [PAGE 5]. The units of \(d_m\) depend on the underlying motion representation, but the model treats them as scalar distances combined by learned or hand-set parameters. The spatial distance can be interpreted in pixel units or normalized units depending on implementation. The breakdown regime includes trajectories with no temporal overlap: the common-lifetime motion distance is unavailable, so the source says spatial distances are used instead [PAGE 5]. This changes the semantic meaning of the low-level edge.

High-level detection edges are based on intersection-over-union and normalized spatial distance. The normalized spatial distance between two detections is written as

\[
d_{sp}(v_i^{\text{high}}, v_j^{\text{high}})
=
2
\left\|
\begin{pmatrix}
\frac{x_i^{\text{high}} - x_j^{\text{high}}}
{w_i^{\text{high}} + w_j^{\text{high}}}
\\[6pt]
\frac{y_i^{\text{high}} - y_j^{\text{high}}}
{h_i^{\text{high}} + h_j^{\text{high}}}
\end{pmatrix}
\right\|.
\]

The source gives this formula on PAGE 9. The detection-detection pseudo cut probability is piecewise:

\[
p_{ij}^{\text{high}} =
\begin{cases}
1 - \frac{1}{1 + \exp\left(20 \cdot (0.7 - \operatorname{IoU}(v_i^{\text{high}}, v_j^{\text{high}}))\right)}
\\[6pt]
\frac{1}{1 + \exp\left(5 \cdot (1.2 - d_{sp}(v_i^{\text{high}}, v_j^{\text{high}}))\right)}
\\[6pt]
0.5
\end{cases}
\]

The first branch applies if \(\operatorname{IoU} > 0.7\). The second branch applies if \(d_{sp} > 1.2\). The third branch applies otherwise [PAGE 9]. Intersection-over-union is dimensionless. Normalized spatial distance is dimensionless because translation is divided by summed width or height. The breakdown regime is threshold-driven: near the decision boundaries, small localization changes can switch branches.

Cross-level edges use a normalized spatial gate and optional template evidence. The normalized spatial distance between a detection and a trajectory at the detection’s temporal position is

\[
d_{sp}(v_i^{\text{high}}, v_j^{\text{low}})
=
2
\left\|
\begin{pmatrix}
\frac{x_i^{\text{high}} - x_j^{\text{low}}(t)}
{w_i^{\text{high}}}
\\[6pt]
\frac{y_i^{\text{high}} - y_j^{\text{low}}(t)}
{h_i^{\text{high}}}
\end{pmatrix}
\right\|
\quad
\text{for }
t = t_i^{\text{high}}.
\]

The source gives this as Eq. 3 on PAGE 6. The cross-level cut probability is

\[
p_{ij}^{\text{hl}} =
\begin{cases}
1 - T_i^{\text{high}}(x_j^{\text{low}}(t), y_j^{\text{low}}(t))
\\[6pt]
1
\\[6pt]
0.5
\end{cases}
\]

The first branch applies if the template value is above \(0.5\). The second branch applies if \(d_{sp}(v_i^{\text{high}}, v_j^{\text{low}}) > \sigma\). The third branch applies otherwise [PAGE 6]. The threshold \(\sigma\) is called an “application dependent threshold” [PAGE 6]. The template value is treated as a probability-like quantity in the interval from zero to one. The breakdown regime occurs when the template is unavailable or poorly aligned. Then the model relies more heavily on the spatial gate.

For pedestrian tracking, the paper computes tracklet-trajectory edges by summing logits over detections inside a tracklet. If \(p(bb_x^k, v_j^{\text{low}})\) is the cut probability between the \(k\)-th bounding box of a tracklet and a trajectory node, the edge cost is

\[
c_{ij}^{\text{hl}}
=
\sum_{k=1}^{5}
\operatorname{logit}\left(p(bb_x^k, v_j^{\text{low}})\right).
\]

The source gives this as Eq. 6 on PAGE 12. This assumes a tracklet length of five detections [PAGE 12]. The units of each logit term are natural-log probability-ratio units. The breakdown regime includes cases where the bounding boxes are missing, occluded, or poorly localized. If any inner probability is exactly zero or one, the corresponding logit diverges unless clipped.

For the 2D MOT 2015 benchmark, detections are already sparse because the benchmark provides detections after Non-Maximum suppression [PAGE 15]. The paper therefore uses detections directly as nodes. Pairwise detection features are computed from matched keypoints using Deep Matching. For two detections, the source defines \(M_U = |M_{d_1} \cup M_{d_2}|\) and \(M_I = |M_{d_1} \cap M_{d_2}|\). Then

\[
f_1 = \frac{M_I}{M_U},
\]

and the pairwise feature vector is

\[
f_e =
\left(
f_1,
\;
\min Conf,
\;
f_1 \cdot \min Conf,
\;
f_1^2,
\;
(\min Conf)^2
\right).
\]

The source defines this on PAGE 15. The quantity \(f_1\) is dimensionless. The detection confidence is a score in the interval from zero to one, though the source uses task-specific thresholds such as 0.47 for LSDA and 0.97 for faster R-CNN [PAGE 9]. Because the benchmark suppresses detections, the authors weight trajectory-detection links by a factor of twenty, assuming about twenty suppressed boxes per true detection [PAGE 15]. They call this a “crude heuristic” [PAGE 15]. This is a breakdown-prone operator: if the true suppression count differs from twenty, the graph may underweight or overweight cross-level evidence.

The source also imposes mask-based rejection rules. For LSDA selective-search masks, a detection is discarded if the mask covers less than 20% of its bounding box or more than 60% of the whole image area [PAGE 9]. These are geometric sanity constraints. They are dimensionless area fractions. Their breakdown regime includes legitimate objects that are very small or very large, or masks that fail to cover the object body because of outline-only proposals.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage of the source can be reconstructed from three older traditions: multicut graph partitioning, trajectory-based motion segmentation, and detection-based multi-target tracking. The multicut tradition is older than the paper. The source cites minimum-cost multicuts for image segmentation and says such formulations have been mainly applied to image segmentation [PAGE 3]. It also cites applications to motion segmentation and pedestrian tracking [PAGE 3]. The key retro-causal insight is that the paper does not invent a new combinatorial primitive from scratch; it imports a known graph-partitioning primitive and applies it to a joint high-level-low-level graph.

The motion-segmentation lineage is centered on grouping point trajectories. The source says many related approaches cast motion segmentation as grouping dense point trajectories [PAGE 3]. It distinguishes pairwise affinity methods from higher-order motion models [PAGE 3]. The paper’s claim is that it does not need higher-order motion models because detection information can carry much of the same disambiguation [PAGE 2, PAGE 3]. This is a direct genealogical move: older trajectory-only methods needed higher-order terms to separate articulated or coherent motion, but the joint model replaces some of that need with detection nodes and detection-trajectory edges.

The tracking lineage is centered on linking detections over time. The source discusses network-flow approaches, integer linear programming, MAP estimation, and continuous optimization [PAGE 3]. It notes that many tracking approaches reduce complexity by non-maximum suppression or pre-grouping detections into tracklets [PAGE 3]. The paper’s relation to this lineage is that it avoids explicit disjoint-path machinery and instead uses a clustering multicut. The source says the clustering nature of minimum-cost multicuts avoids the explicit non-maximum suppression step that is crucial in disjoint path formulations [PAGE 3]. This is important: the genealogy is not merely incremental; the paper claims a structural simplification.

The closest intellectual ancestor is the two-granularity tracking work that classifies detectlets in a graphical model while also performing trajectory clustering [PAGE 2]. The source says the key difference is that the present paper casts both motion segmentation and multi-target tracking as clustering problems, allowing direct optimization of minimum-cost multicuts [PAGE 2]. This genealogy explains why the graph has two node granularities. It also explains why the model can provide identity labels and segmentations at the same time.

There are several multi-week traps embedded in this lineage. The first trap is to assume that higher-order motion models are always necessary. The source explicitly argues against this, saying that with sufficiently complex detection models even articulated motion can be disambiguated and that pairs of detection bounding boxes contain enough points to distinguish motion [PAGE 2]. The trap is that if detection quality is poor, the assumption fails. The model may then lose the very disambiguation it was supposed to gain from high-level nodes.

The second trap is to assume that local trajectory cues are sufficient for motion segmentation. The source says purely local cues can lead to over-segmentation for articulated motion and cannot separate coherently moving objects [PAGE 2]. The joint model tries to escape this trap by adding detection nodes. But the escape is conditional: detections must be reliable enough. If detections are noisy, the graph may still over-segment or merge incorrectly.

The third trap is to treat detection-to-detection pairwise terms as universally valuable. The source reports that for LSDA detections, the pairwise information between bounding boxes is quite weak [PAGE 11]. This is a retro-causal lesson: a model component that helps for one detector may be nearly inert for another. A researcher who assumes all high-level edges help will misinterpret ablations.

The fourth trap is benchmark annotation bias. The FBMS59 benchmark emphasizes moving objects. The source says static, consistently detected objects can be segmented by the joint model, but because they are not annotated this causes over-segmentation in benchmark evaluation [PAGE 10]. The trap is to treat a benchmark score as a direct measure of physical correctness. In this case, the model may be discovering valid structure that the annotation ignores.

The fifth trap is sparse detection regimes. In the 2D MOT 2015 benchmark, detections are provided after Non-Maximum suppression and are too sparse for tracklet pre-grouping [PAGE 15]. The paper compensates by weighting cross-level links by a factor of twenty, but calls this a crude heuristic [PAGE 15]. The genealogical trap is to assume that the same graph construction used for dense trajectory datasets will transfer unchanged to sparse detection benchmarks. It does not; the operators must be adapted.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
A recursive theory-of-mind audit asks how different agents would interpret the evidence, how their beliefs would change under pressure, and how time constraints force habits. In this source, the agents are the vision researchers who designed the model, the benchmark evaluators, and the solver designers. Each has a different belief model and a different clock.

The researcher agent believes that joint modeling is better than modular separation. The source argues that low-level point trajectories help high-level tracking and high-level detections help low-level motion segmentation [PAGE 1, PAGE 2]. This belief is recursive because it assumes that the other task’s evidence is informative even when local evidence is ambiguous. For example, if two pedestrians overlap partially, trajectory motion may disambiguate identity; if articulated motion over-segments, detection boxes may stabilize the component. The recursive belief is that the joint graph can resolve contradictions that neither task-specific model resolves alone.

Under crisis conditions, the habit regression is to return to simpler task-specific pipelines. If the joint solver becomes unstable, a researcher may revert to trajectory-only motion segmentation or detection-only tracking. This is a crisis habit because it is easier to debug. The source’s counter-trap is the joint multicut formulation itself: it forces consistency by making both tasks share one feasible partition. However, the counter-trap has its own failure mode. If the graph is poorly constructed, the joint model can produce a globally consistent but locally wrong partition. In other words, the joint model can satisfy the multicut constraints while still merging or splitting physical objects incorrectly.

The benchmark evaluator agent has a different theory of mind. It cares about measurable metrics: precision, recall, F-measure, extracted objects, tracking recall, precision, false alarms, mostly tracked, partly tracked, mostly lost, fragmentation, identifiers, and MOTA-style metrics [PAGE 10, PAGE 13, PAGE 14, PAGE 15]. The evaluator’s belief is that annotated moving objects define the ground truth. This belief is valid for the benchmark but incomplete for physical scene understanding. The source acknowledges that static objects can be segmented but not annotated, causing over-segmentation [PAGE 10]. The evaluator’s clock is the annotation schema: only annotated entities count. The joint model’s clock is the graph partition: any consistent component can be output. These clocks conflict when the model discovers valid static structure that the benchmark ignores.

The solver designer agent has a computational clock. The multicut problem is APX-hard [PAGE 4]. The source says finding the optimal solution is not necessary for many real-world applications and uses the Kernighan-Lin heuristic for speed and robustness [PAGE 7]. This is a recursive belief: the designer believes a fast approximate partition is sufficient for vision tasks. The crisis habit is to reduce graph size or remove edges. The counter-trap is to keep the graph rich enough to preserve cross-level evidence. The source’s experimental ablations reflect this tension. When detection-detection edges are omitted, performance may barely change for LSDA but drop for faster R-CNN [PAGE 10, PAGE 11]. This means the solver designer cannot know which edges matter without evaluating the detector-specific graph statistics.

The clock also appears in temporal sampling. The source reports sparse trajectory sampling at an 8-pixel distance for motion segmentation [PAGE 10, PAGE 13]. In pedestrian tracking, tracklets have length five [PAGE 12]. In 2D MOT 2015, detections are sparse after Non-Maximum suppression [PAGE 15]. These temporal choices define what evidence exists. If the clock samples too sparsely, trajectories may miss object motion; if tracklets are too short, identity evidence may be weak; if detections are too sparse, cross-level links must be reweighted. The recursive theory-of-mind audit therefore shows that the model’s beliefs are not only about pixels and boxes; they are about the temporal resolution of the evidence.

A deeper recursive issue is self-consistency. The joint model assumes that if a detection and a trajectory belong to the same component, they should be physically compatible. But the optimization only sees edge costs, not physical dynamics. The model can therefore create a component that is graph-consistent but biomechanically implausible if the edge costs are misleading. The recursive counter-trap is to add stronger physical or template constraints. The source already uses pedestrian shape templates and walking-direction flipping for pedestrian sequences [PAGE 12]. This is a partial counter-trap: it injects prior knowledge about human shape. But the prior is still a template, not a full physical simulation. The model can still fail under unusual poses, occlusion, or detector localization error.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The cross-layer veto adjudication must decide whether evidence from one layer can override evidence from another layer when they conflict. The source provides several explicit veto operators. These are not metaphorical; they are encoded in piecewise equations and preprocessing rules.

The first veto layer is optical-flow consistency. The source says trajectory termination is decided by consistency between forward and backward optical flow; in case of large inconsistencies, a point is assumed to be occluded in one of the two frames [PAGE 5]. This is a physical veto on trajectory continuity. If forward and backward flow disagree beyond a tolerance, the trajectory is not allowed to continue silently. The formal implication is that the low-level node set is filtered before graph construction. A trajectory that violates temporal consistency is either truncated or terminated. This protects the graph from phantom correspondences.

The second veto layer is spatial gating between detections and trajectories. The cross-level cut probability becomes one if the normalized spatial distance exceeds a threshold sigma [PAGE 6]. This is a hard repulsive veto. If a trajectory lies outside the detection’s spatial gate, the model treats it as definitely not belonging to that detection for that edge. The source says this large threshold accounts for uncertainty in bounding-box localization when sigma is set to two for the FBMS59 experiments [PAGE 10]. For pedestrian tracklets, the source uses sigma equal to 1.2 [PAGE 12]. The veto is therefore parameter-dependent. A larger sigma weakens the veto; a smaller sigma strengthens it but increases sensitivity to localization error.

The third veto layer is template support. If a template value is above one-half, the cut probability is reduced by one minus the template value [PAGE 6]. If the template value is not above one-half and the spatial distance is within the gate, the edge is neutral with probability one-half. If the spatial distance is outside the gate, the cut probability is one. This creates a hierarchy: template support can soften the attraction, but spatial gating can impose a hard cutoff. The physical interpretation is that a point inside a plausible object mask is more likely to belong to the object, while a point far outside the bounding-box gate is unlikely to belong.

The fourth veto layer is mask geometry. The source discards detections whose masks cover less than 20% of the bounding box or more than 60% of the whole image area [PAGE 9]. This veto is geometric. It prevents degenerate masks from becoming unreliable high-level nodes. The formal condition is an area-fraction veto:

\[
A_{\text{mask}} / A_{\text{box}} < 0.20
\quad
\text{or}
\quad
A_{\text{mask}} / A_{\text{image}} > 0.60
\quad
\Rightarrow
\quad
\text{reject detection node}.
\]

The first ratio measures whether the mask covers enough of the box. The second ratio measures whether the mask leaks to the image boundary. The source says selective-search masks sometimes only cover object outlines or leak to image boundaries [PAGE 9]. This veto protects the graph from mask artifacts.

The fifth veto layer is pedestrian shape and walking direction. For pedestrian tracking, the source computes an average pedestrian shape template and flips it according to walking direction inferred from tracklets [PAGE 12]. This is a biomechanical veto: a trajectory should not be assigned to a pedestrian detection if the trajectory lies outside a plausible human shape placed in the detection box. The source describes edges between trajectories and tracklets as inserted if the trajectory either hits a bounding-box template or passes sufficiently far outside the bounding box [PAGE 13]. This means the cross-level graph encodes both attraction to plausible shape and repulsion from outside the gate.

A formal adjudication proof can be stated as follows. Suppose a trajectory node and detection node coexist in a common frame. Let \(T\) be the template value and \(d_{sp}\) be the normalized spatial distance. If \(T > 0.5\), the model assigns a cut probability below one-half, meaning attraction. If \(d_{sp} > \sigma\), the model assigns cut probability one, meaning repulsion. If neither condition holds, the model assigns neutral probability one-half. Therefore, the hard spatial veto dominates the neutral case but does not necessarily dominate the template-attraction case unless the template value is low. In the source’s piecewise rule, the template branch is evaluated first if the template value is above one-half; the spatial-distance branch is evaluated otherwise [PAGE 6]. Thus, the adjudication order matters. If template support is strong, the model may allow a trajectory that is not extremely close to the detection center. If template support is absent, the spatial gate becomes the dominant veto.

The weather veto is not explicit in the source. There is no explicit weather operator. However, weather-induced degradation can enter through detection confidence and optical-flow consistency. If detection confidences fall below the LSDA or faster R-CNN thresholds, detections are not used as high-level nodes [PAGE 9]. If optical flow becomes inconsistent, trajectories are terminated [PAGE 5]. Therefore, weather effects are mediated by detector and flow robustness. The source does not provide a direct meteorological veto, so any claim of a weather-specific override would be unsupported by the text.

The final cross-layer veto adjudication is that physical plausibility is enforced through three mechanisms: temporal flow consistency, spatial gating, and template support. These are not probabilistic soft constraints alone; some are hard piecewise rules. The model’s behavior is therefore not a smooth Bayesian fusion of all layers. It contains explicit cutoffs. The breakdown regimes are exactly the regions where thresholds are miscalibrated: if sigma is too small, valid trajectories are repelled; if sigma is too large, invalid trajectories are accepted; if the template is wrong, shape evidence becomes misleading; if mask geometry is rejected too aggressively, true objects may disappear from the graph.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
The following three counterfactual veto scenarios are verifiable from the source text and its reported results. They test whether the joint model’s components would be accepted or rejected under controlled changes.

Scenario 1: Remove detection-to-detection high-level edges for LSDA detections. The counterfactual is that if LSDA bounding-box pairwise information is weak, then removing those edges should not materially reduce motion segmentation performance. The source verifies this. It reports that for LSDA detections, the result without pairwise terms between detections is pretty close to the full Joint Multicut model [PAGE 11]. The reported training-set F-measure values are 80.7617% for the model with detections but without detection-detection edges and 80.7634% for the full Joint Multicut model [PAGE 10]. The difference is negligible in the reported metric. Prediction: if LSDA detection localization is weak, detection-detection edges are near-neutral. The veto condition is that high-level pairwise terms fail to improve the partition when bounding boxes are poorly localized. This scenario predicts that any method claiming large gains from detection-detection edges alone for LSDA-like detections would be suspect.

Scenario 2: Remove detection-to-detection high-level edges for faster R-CNN detections. The counterfactual is that if faster R-CNN detections are better localized, then removing detection-detection edges should reduce performance. The source verifies this. It says that for better-localized faster R-CNN detections, the high-level pairwise terms contribute significantly to the overall performance of the joint model [PAGE 11]. The training-set F-measure drops from 82.44% for the full Joint Multicut model with faster R-CNN to 81.41% for the model with detections but without detection-detection edges [PAGE 10]. The drop is larger than in the LSDA case. Prediction: if detections are accurate and localized, detection-detection edges are not neutral; they provide useful repulsive or attractive structure. The veto condition is that a joint model without high-level pairwise terms will underperform when detections are strong enough to support reliable geometric relations.

Scenario 3: Transfer the dense-graph construction to a sparse benchmark where detections are provided after Non-Maximum suppression. The counterfactual is that if detections are sparse, the cross-level link weighting must change. The source verifies this in the 2D MOT 2015 experiments. It says detections for all sequences are provided after Non-Maximum suppression and are too sparse for tracklet pre-grouping [PAGE 15]. The authors therefore use detections directly as nodes and weight trajectory-detection links by a factor of twenty, assuming about twenty suppressed boxes per true detection [PAGE 15]. They call this a crude heuristic [PAGE 15]. The reported result improves overall MOTA compared with the compared state-of-the-art method, but false positives increase. The source reports 10,580 false positives and 28,508 false negatives for JointMulticut, compared with 7,762 false positives and 32,547 false negatives for the compared method [PAGE 15]. Prediction: if sparse detections are underweighted, recall suffers; if cross-level links are overweighted, false positives rise. The verifiable veto is that the same dense-graph weighting used for dense detection sequences is not directly transferable to sparse detection benchmarks without recalibration.

A fourth optional counterfactual, also verifiable, concerns static objects. If a static object is consistently detected, the joint model may segment it even though the FBMS59 ground truth does not annotate it. The source says static, consistently detected objects like the car in the marple6 sequence are segmented as well, and that this causes over-segmentation on the FBMS59 benchmark evaluation [PAGE 10]. Prediction: if the benchmark only rewards moving-object annotations, the joint model may receive a precision penalty for discovering valid static components. The veto condition is that benchmark precision can reject a physically plausible segmentation because the annotation schema excludes static structure.

These scenarios form a verifiable test suite. They check whether high-level edges help under good detection localization, whether they are weak under poor detection localization, and whether cross-level weighting must be adapted when detections become sparse. The source’s own ablations and benchmark notes provide direct evidence for each veto.
</RLVR_COUNTERFACTUAL_VETOES>