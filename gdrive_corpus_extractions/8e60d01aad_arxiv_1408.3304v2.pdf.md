---
source: "arxiv_1408.3304v2.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 12
model: baidu/ernie-5.5-flash-preview:free
words: 9198
---

<NATIVE_REASONING>
We need answer user's request. Need produce final with exact XML sections >=1000 words total? User says >=1,000-WORD DEPTH across exact XML sections. Sections: THINK_TRACE >=400 words, others probably need substantial. Need obey invariants: zero betting lines (irrelevant), zero toy equations. Use formal LaTeX equations, SI/information/probability units, assumptions, singularity/breakdown regimes. Source pages provided; cite exact [PAGE N] markers and verbatim quotes. Need likely analyze the paper On Pairwise Costs for Network Flow Multi-Object Tracking. Need not use outside? Could use source only. Need perhaps mention no source pages? They provided source text with pages. Need cite exact markers and quotes. Need produce at least 1000 words, maybe 2500-4000. Need all XML tags exactly: <THINK_TRACE> ... </THINK_TRACE> etc. Need no other sections? Probably just these. Need ensure no betting lines. Need no fake ratios. Formal LaTeX equations okay. Need units. Need discuss formal math: min-cost network flow ILP Eq 1, IQP Eq 2, LOCAL(Q), Frank-Wolfe rounding Eq 6, suboptimality certificate ~10^-3 normalized objective. Breakdowns: NP-hard quadratic assignment [PAGE 4], total unimodularity broken by LOCAL(Q) [PAGE 6], fractional LP, Hamming rounding suboptimal. Need maybe quantify complexity? We can derive variables/constraints. Need SI/information/probability units? Maybe costs are negative log probabilities? The paper says MAP objective [PAGE 3]. We can state if costs are negative log-likelihood in nats (or bits if log2). Detection confidence c_i negative detection confidence [PAGE 3], c_ij negative correspondence strength. Could discuss units: objective dimensionless normalized 0 to 1 [PAGE 6]. Pairwise Q entries units? If objective normalized, Q dimensionless; if probabilities, Q in nats or bits. Need exact assumptions. Singularity/breakdown regimes: Q not PSD? transformed to PSD via diagonal; if FLOW_K total unimodular gives integral vertices; with LOCAL(Q) violates TU; LP fractional; if K > feasible detections? flow infeasible? If overlap threshold, co-occurrence consistency; if Q dense scales bad; if Frank-Wolfe linearization at fractional z* maybe local? It's convex relaxation global lower bound? Need be careful: They say global solution to relaxed problem provides lower bound [PAGE 5]. For convex QP? The IQP with Q made PSD is convex quadratic; relaxation over FLOW_K (integral polytope?) If Q PSD, minimizing convex over polytope, global optimum. But integer restriction makes NP-hard? Wait convex quadratic over binary variables is not necessarily NP-hard? With PSD? Binary quadratic with PSD can be polynomial? Actually unconstrained binary quadratic with PSD? Not generally? But their transformation maybe still IQP can encode QAP? They cite NP-hard. Need not challenge. But maybe note: Eq (2) with integer z and sparse Q can encode quadratic assignment, NP-hard [PAGE 4]. The relaxation removing integrality yields convex if Q PSD or LP if linearized.

Need maybe historical lineage: min-cost flow tracking, k-shortest paths, push-relabel, successive shortest paths, greedy NMS, Butt Collins Lagrangian, CRF, Milan continuous energy, Frank-Wolfe. Multi-week traps: forgetting total unimodularity, greedy NMS non-reversible, rounding by nearest integer infeasible, Hamming vs Frank-Wolfe.

Recursive theory of mind: crisis habit regression vs counter-trap vs clock. Need maybe frame as an adversarial analyst? Could discuss model's habit to hallucinate equations or overclaim global optimality; counter-trap is cite certificates; clock is temporal evaluation Δt. Need maybe not too meta? But section requires Crisis habit regression vs counter-trap vs clock. Could discuss tracking under crisis: detector failure, occlusion; regression to greedy NMS; counter-trap convex relaxation + FW rounding; clock re-detection measure Δt. Use recursive theory of mind: competing hypotheses, opponent? Maybe "adversary" could be detector noise.

Cross-layer veto adjudication: physical/biomechanical/weather veto proof. Need connect to paper? Maybe no weather in paper. Need formal proof: If physical constraints violate (objects cannot occupy same space) or detector boxes inconsistent due to occlusion/weather, pairwise terms adjust. Need cite: each detection belongs to at most one track, enforcing two objects cannot occupy same space [PAGE 3]. Overlap penalty discourages overlapping detections [PAGE 4]. Co-occurrence handles missing detections [PAGE 4]. Weather? Source doesn't mention weather. Need avoid inventing. Could say no explicit weather in source; veto only if detector degradation causes inconsistent signals; formalize detection probability under adverse conditions. Need maybe use generic weather as sensor degradation not in source? Invariants say formal equations, assumptions. We can include caveat: source has no weather measurements; weather enters only as likelihood degradation. Need maybe not overdo.

RLVR counterfactual vetoes: 3 verifiable RLVR veto scenarios + predictions. RLVR? Probably Reinforcement Learning with Verifiable Rewards? Need create three scenarios where counterfactual violates known constraints and should be vetoed. Need predictions. Could be: 1) Rounded solution not in FLOW_K; 2) overlap term with negative weight causing all detections discouraged? From Case6 negative detection weight [PAGE 10]; 3) Hamming rounding worse than FW; or physical overlap two objects same box beyond occlusion. Need make verifiable. Need include predictions with metrics maybe suboptimality certificate values from Table 2. Could use exact values. Need cite [PAGE 10]. Need maybe RLVR as reward model? We can define.

Need ensure word count. Let's plan sections.

THINK_TRACE (>=400 words). We can write ~700-900. Deep multi-hop derivation: start with variables, constraints, objective; transform Q to PSD; local polytope; relaxation; rounding; certificate; evaluation. Audit gray zones: NP-hard, lower bound, normalization, units, assumptions, page citations. Need exact quotes. Use citations like [PAGE 3] "The MAP optimization problem can be cast as the following integer linear program (ILP):" etc. Need verbatim quotes. We can quote short snippets. Need ensure exact punctuation? From source has some weird characters. Use quotes as given.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations, units, page citations, breakdown. Need include Eq 1, Eq 2, Q transformation, LOCAL(Q), Eq 6, certificate. Units: dimensionless normalized objective, or nats/bits. Assumptions. Singularity/breakdown regimes. Need cite pages. Could be ~1000 words.

RETROCAUSAL_GENEALOGY: lineage and traps. ~500 words.

RECURSIVE_THEORY_OF_MIND: ~500.

CROSS_LAYER_VETO_ADJUDICATION: ~500.

RLVR_COUNTERFACTUAL_VETOES: ~500. Total maybe >3000. Need no extra text outside XML? Probably just XML sections. Need ensure each section closed.

Need think about exact invariants: ZERO BETTING LINES: no spreads totals moneylines odds. Avoid words like odds? Could use "likelihood ratio" not betting. Avoid "bet". Maybe "veto" okay. ZERO TOY EQUATIONS: Never invent fake ratios. We will not invent. State formal LaTeX equations from paper. Need if we introduce equations, ensure not fake. Could derive total unimodularity? Maybe not. Need exact units. For probability: If c_i = -log p(detection selected | model), units nats if natural log. The paper doesn't explicitly say negative log probability, but says MAP objective [PAGE 3], negative detection confidence. We can state assumption: If interpreting costs as MAP, c_i = -ln P(...), Q entries = -ln interaction potentials, units nats. If normalized, dimensionless. That's okay not fake? Need mark as interpretation. Formal LaTeX with units.

Need cite exact [PAGE N] markers. The user says PAGES: 12, source text has markers. We should cite [PAGE 1], etc. Use exact quotes maybe with line? Need verbatim quotes. Use source text quotes. For equations, quote: "min x P i cixi + P ij∈E cijxij" but formatting lost. Better use LaTeX from paper? Need cite [PAGE 3] "The MAP optimization problem can be cast as the following integer linear program (ILP):" and equation. We can write equation from source. Need verbatim quote for key claims: "These linear constraints have the property of being totally unimodular [2]." [PAGE 3]. "Unfortunately, the above formulation can encode the quadratic assignment problem which is NP-hard to optimize in general [18]." [PAGE 4]. "In our experiments, we obtained small suboptimality certiﬁcates (≈10−3) for our returned integer solutions" [PAGE 6]. Need exact weird ﬁ? Use as in source? Could normalize? Verbatim maybe include ligature? Better copy from source: "certiﬁcates"? It uses ﬁ ligature. We can quote exactly with ligatures? Maybe okay. Need ensure exact page markers.

Need perhaps include table values: Case1 FW 4.7e-03 Ham 1.4e-02; Case6 FW 1.0e-01 Ham 1.3e-01 [PAGE 10]. Use for counterfactuals.

Need maybe mention runtime and scales: TownCenter LP 5 million variables vs PETS 50 thousand [PAGE 11]. Breakdown regime: scaling. Need cite.

Potential issue: User wants ">= 1,000-WORD DEPTH across these exact XML sections" maybe each section? Could mean total. We'll ensure each section substantial. THINK_TRACE >=400 explicitly. Others maybe not specified but need overall 1000. We'll make total ~3000.

Need not mention "I". Fine.

Let's draft in analysis then final.

Detailed content:

THINK_TRACE:
- Identify problem: tracking-by-detection, variables z_i detection and z_ij connection, K tracks.
- Eq (1) min-cost flow. Constraints FLOW_K: conservation, K flow, binary. Total unimodular -> LP integral. cite page 3.
- Pairwise costs: z_i z_j, Q sparse. Eq (2). NP-hard due QAP [PAGE 4]. Need convex relaxation.
- Modeling examples: overlap q^ov_ij x_i x_j for ov >= o_thres, q>0 [PAGE 4]. Co-occurrence negative cost -q^co_ij z_i^h z_j^b for consistent [PAGE 4]. Assumptions: threshold 0.5, body top 25% [PAGE 4].
- Optimization: make Q PSD by diagonal Q_ii^new = sum_{j≠i}|Q_ij^old|, linear coefficient c_i - Q_ii^new + Q_ii^old; because z_i^2 = z_i [PAGE 5]. Or LP with u_ij, LOCAL(Q) [PAGE 5]. LOCAL(Q) constraints: 0≤u≤1, u≤z_i, u≤z_j, z_i+z_j≤1+u. Relaxation violates total unimodularity, fractional possible [PAGE 6].
- Rounding: Hamming closest Euclidean distance, linear due binary; objective agnostic. FW rounding solves min (c+(Q+Q^T)z*)^T z over FLOW_K [PAGE 6]. Lower bound from relaxed LP; certificate = integer objective - lower bound; normalized 0-1, ~1e-3 [PAGE 6]. Hamming 3-4 worse [PAGE 6]. Table values [PAGE 10].
- Evaluation: re-detection measure Δt, AP; MOTA insufficient; TownCenter MarchingRally results [PAGE 7,8]. Gray zones: normalized objective, costs units, assumptions about detector quality, correspondence KLT ratio [PAGE 6-7], overlap threshold, co-occurrence consistency.
- Multi-hop: If detector duplicates overlap, overlap penalty resolves; if head missing, co-occurrence uses edge-box intersection; if LP fractional, FW uses gradient to choose flow; if parameters degenerate e.g., negative detection weight, objective suppresses detections [PAGE 10].

Need 400+ words. We'll write ~700.

SOURCE_OPERATORS_AND_EQUATIONS:
Start with notation. Use LaTeX.
Equation 1:
\[
\min_{x} \sum_i c_i x_i + \sum_{ij\in E} c_{ij}x_{ij}
\]
subject to ... from [PAGE 3]. Need maybe exact constraints:
0≤x_i≤1, 0≤x_ij≤1
\sum_{i:ij\in E} x_{ij}=x_j=\sum_{i:ji\in E}x_{ji}
\sum_i x_i^t = K = \sum_i x_{si}
x∈FLOW_K, integer.
Need note dummy source/sink.
Units: c_i = negative detection confidence. If MAP, c_i = -ln p_i, c_ij=-ln p_corr, units nats; if log2, bits. Q entries dimensionless if objective normalized; otherwise nats.
Pairwise IQP:
\[
\min_z c^Tz+z^TQz, z∈FLOW_K, z∈{0,1}^n.
\]
Q sparse, Q_{ij} nonzero for pairs in Q. Breakdown: NP-hard [PAGE 4].
PSD transform:
Q^new_{ii}=sum_{j≠i}|Q^old_{ij}|, linear coefficient c_i - Q^new_{ii}+Q^old_{ii}. Because z_i^2=z_i. Q_new PSD. [PAGE 5].
LP local:
min c^T z + q^T u, z∈FLOW_K, 0≤u_ij≤1, u_ij≤z_i, u_ij≤z_j, z_i+z_j≤1+u_ij, (z,u)∈LOCAL(Q). [PAGE 5].
Breakdown: LOCAL(Q) violates total unimodular, LP fractional; need rounding [PAGE 6].
Frank-Wolfe rounding:
Given z*, solve min_z (c+(Q+Q^T)z*)^T z s.t. z∈FLOW_K. [PAGE 6]. This is linearization. Certificate:
\[
\Delta = F(\hat z)-L_{relax}
\]
where L_relax global lower bound; if objective normalized to [0,1], dimensionless; empirical ≈10^-3 [PAGE 6]. Need maybe if Q PSD? lower bound? They say relaxed LP solution provides lower bound [PAGE 6]. Need caveat: for minimization of convex? Usually lower bound if relaxation feasible superset and objective underestimator? For LP relaxation exact? For IQP? Need not overcomplicate. But exact: The LP relaxation optimum is lower bound on integer optimum if integer feasible set subset relaxed and objective same; but if linearization? They use LP relaxation of (5), exact objective for u=z_i z_j when integer; relaxed u can be less? Constraints allow u ≤ min(z_i,z_j) and u≥ z_i+z_j-1. For binary u = product. Relaxed optimum min over larger set gives lower bound. Yes.
Overlap cost:
q^ov_{ij} x_i x_j if ov(box_i,box_j)≥o_thres, q>0 [PAGE 4].
Co-occurrence:
-q^co_{ij} z_i^h z_j^b if consistent [PAGE 4].
Re-detection AP maybe no equation? Could formalize precision recall? But maybe not necessary. Could include Jaccard: IoU = |B∩G|/|B∪G| [PAGE 7]. Units dimensionless [0,1]. Overlap threshold o_thres=0.5 [PAGE 4].
Breakdown regimes:
- If K exceeds number of source-supported paths, FLOW_K infeasible.
- If all c_i negative? From Case6 negative detection weight discourages detections unless high connection [PAGE 10]. Actually if c_i negative (since minimizing, negative cost rewards selecting) but paper says presence of negative weight actually “discourages” any detections from being picked unless connected to edges with extremely high connection strength. Wait if objective includes multiplicative constant? Detection confidence parameter -1.0? They say negative weight discourages detections unless connected. We can cite but not derive too much.
- Dense Q -> variable blowup; TownCenter 5M vs PETS 50k [PAGE 11].
- If LP fractional due LOCAL(Q), naive rounding invalid; Hamming may be 3-4 worse [PAGE 6].

Need include assumptions and exact singularity/breakdown. Good.

RETROCAUSAL_GENEALOGY:
- Historical lineage: network flow [2] Ahuja et al., Zhang et al. [29], Pirsiavash greedy [22], Berclaz k-shortest [5], Butt Collins Lagrangian [8], Milan CRF/continuous [20,19], Choi Savarese [9], Frank-Wolfe Jaggi [12], Wainwright Jordan MRF local polytope [24]. Need cite pages.
- Trap: assuming linear costs enough; greedy NMS early decisions non-reversible [PAGE 2,4]. Trap: modifying graph for pairwise terms non-trivial [PAGE 2]. Trap: online appearance training erroneous when objects close [PAGE 2]. Trap: using Hamming rounding because standard, but objective agnostic [PAGE 6,10]. Multi-week traps: if implementer starts from min-cost flow and sees TU, may think any linear constraints preserve integrality; LOCAL(Q) breaks it. If using Frank-Wolfe, need ensure each step min-cost flow; if solver changes, certificate lost. If evaluating only MOTA at Δt=0, misses long-term overlap; paper says difference measured only at Δt=0 not visible [PAGE 7].

RECURSIVE_THEORY_OF_MIND:
Need phrase: crisis habit regression vs counter-trap vs clock.
- Crisis: crowded scene, occlusions, detector duplicates/failures. Habit regression: fall back to greedy NMS or basic NF because simpler; this loses global interactions [PAGE 4].
- Counter-trap: model opponent (crowd/confuser) by pairwise overlap and co-occurrence; convex relaxation + FW rounding; use certificate to avoid overclaiming. Recursive theory: tracker's belief about other objects' occupancy; overlap term penalizes simultaneous selection of overlapping boxes, akin to exclusive occupancy; co-occurrence expects head-body consistency.
- Clock: evaluation over Δt; tracker must maintain identity over time; re-detection measure. Use Table 1 IDs, FM; MOTA. Could discuss ID switches and fragmentation. Need cite [PAGE 7,8].
- Maybe formulate belief state: z posterior over flows; Q encodes pairwise potentials; at each Δt, AP. Need not fake ratio. Could use probability: P(z|video) ∝ exp(-F(z)) with F = c^T z + z^T Q z; if normalized, exp in natural units. This is formal but maybe not in paper. Need state assumption. Use units: F in nats if c,Q negative log potentials. Could be okay. Need avoid fake ratio. 
- Counterfactual: if one track switches, overlap term and co-occurrence should veto; if head missing, edge co-occurrence recovers. Clock catches if error persists beyond Δt.

CROSS_LAYER_VETO_ADJUDICATION:
Need physical/biomechanical/weather veto proof. Could formalize layers: physical (non-overlap of objects), biomechanical (head-body geometry), weather (sensor likelihood). Need proof of veto:
Physical: if two selected detections i,j have bounding boxes overlap ≥ o_thres and correspond to distinct objects, physical exclusive volume says not allowed unless occlusion ambiguity. In optimization, overlap cost q>0 adds penalty. If q large enough, any solution selecting both will be dominated by alternative selecting one, assuming detection/correspondence costs finite. Need formal: Let F(z) objective. For pair i,j with overlap cost q, if z_i=z_j=1, extra q; if switching one off reduces flow feasibility? Need not prove fully. But can state under assumptions q > max possible gain from joint selection? Actually if q sufficiently high, veto. But paper uses grid search, not guarantee. We can present conditional proof: if q ≥ |Δ unary/correspondence gain|, then overlap selection is not optimal. Need avoid toy equation? It's formal. Could write:
For two feasible solutions z and z' identical except z'_i=0 and flow rerouted, if F(z)-F(z') = q^ov_{ij} + Δ_unary + Δ_pairwise_other. If q^ov_{ij} > -Δ_other, then z' lower cost. This is not fake ratio; it's an inequality. Need units same as objective. Good.
Biomechanical: head must be above body; body top 25% overlap with head box [PAGE 4]. Co-occurrence negative cost encourages joint selection. If head detection missing, edge intersects interpolated body box [PAGE 4]. Proof: if head variable absent but body edge crosses head box, pairwise term adds negative cost, increasing likelihood. If physically impossible (head not near body), consistency condition false, no reward; thus veto.
Weather: source no weather. We can say no explicit weather variable; if weather degrades detector p, c_i increases (less negative) in nats; if severe, flow may prefer no detection if dummy source/sink allow? Actually K fixed; may select false detections. Need state breakdown: if weather makes correspondence KLT unreliable, c_ij loses meaning; model breaks. We can derive sensor model: p(detection_i | weather w) = p0 exp(-λ a(w)), cost c_i=-ln p. But that's an introduced equation; is it toy? It's formal assumption, not fake. Need cite no source? We can label as extrapolation. The invariant says state assumptions. Could say source does not model weather; any weather veto is a meta-layer with assumption. Need not cite page. But user asks cross-layer weather veto proof. We can include formal weather degradation equation but state not from source. Need maybe avoid because source pages only? But can use source plus external? They provided source; likely need rely on source. But section explicitly asks weather; we can say source contains no weather; therefore weather veto is conditional: if weather only changes detection likelihood, the optimization will absorb it through c_i; if it breaks KLT correspondence, the model has no valid c_ij and must be vetoed. That's safe.

RLVR_COUNTERFACTUAL_VETOES:
Define RLVR: verifiable reward: constraints, objective certificate, metrics. Three scenarios:
1. Non-flow rounded solution: predicted if rounding ignores FLOW_K, reward zero. Counterfactual: output z with conservation violation. Verifiable by constraint check. Prediction: any such candidate will be vetoed; FW rounding solves min-cost flow and always gives integer solution [PAGE 6].
2. Overlap with negative/too small penalty in crowded MarchingRally: If q_ov=0.0007 (Case2) vs best 0.0223, prediction lower AP and more overlap; cite Table 2? Table gives certificate only; Figure 4 says re-detection worse. Need verifiable: compare AP at Δt; predict Case2 lower than Case1. Source says Case2 very low overlap term encourages criss-cross; Figure 4. Could use.
3. Hamming rounding instead of FW: Table 2 shows worse certificates; predict worse tracking accuracy. Values Case1 1.4e-2 vs 4.7e-3; Case6 1.3e-1 vs 1.0e-1. Source says Hamming generally 3 to 4 times worse [PAGE 6]. Prediction: for same z*, FW lower suboptimality and higher re-detection AP.
Alternatively weather counterfactual: if head detector fails and no co-occurrence term, TownCenter AP lower; source says co-occurrence improves over head baseline by >20% AP [PAGE 8]. Could be one of three. Need 3 verifiable. We can include: 1 flow feasibility, 2 co-occurrence ablation, 3 rounding. But need counterfactual veto scenarios. Maybe choose:
- Veto A: Candidate track set violates FLOW_K or unit capacity. Prediction: rejected.
- Veto B: Head-only tracker under occlusion without co-occurrence; prediction lower AP than NF+co-occurrence by >20% in TownCenter [PAGE 8].
- Veto C: Hamming rounding or negative detection weight Case6; prediction worse certificate/accuracy.
Need "verifiable RLVR veto scenarios + predictions". Include exact metrics.

Need ensure no word "odds". Avoid. "probability" okay.

Need maybe include "certificate" with accent? Use certiﬁcates maybe ligature. Fine.

Need final only XML. Need check word count. Let's estimate. We can write long. Need maybe 400 words THINK_TRACE. We'll count roughly.

THINK_TRACE draft ~800:
"The derivation begins..." Let's write in final with citations.

Need be careful with XML content containing < >? LaTeX with < maybe okay? In XML, unescaped < inside text could be invalid? The user likely expects text not strict XML? But tags are XML-like. If we include LaTeX with < maybe could break. Avoid literal < except tags? In equations use \le not <. For text, avoid "<" or use "less than". If need "10^-3" okay. Use &? In XML, & must be escaped. We can avoid ampersands or use "and". But LaTeX align uses &; if raw & might be problematic. Since output likely not parsed strict, but to be safe avoid align with &. Use equations separate. Use \begin{aligned}? contains &. Avoid. Use simple display. Use no &.

Need quotes with apostrophes okay. Use double quotes inside? Fine.

Need exact page citations. Use [PAGE 3]. Good.

Potential issue: The source text has equations malformed; but we can reconstruct from paper. Need not verbatim equation? User says cite exact page markers and verbatim quotes when source pages provided. We can quote text verbatim and equations as formal. Need maybe quote enough.

Let's compose final with sections.

Need maybe ensure THINK_TRACE >=400 words. Let's count rough:
Paragraph 1 180, paragraph 2 200, paragraph 3 250 = 630. Good.

SOURCE_OPERATORS maybe 900. Genealogy 500. ToM 500. Veto 600. RLVR 600. Total ~3700. Good.

Need include no "betting". Good.

Let's draft final carefully.

Detailed final:

<THINK_TRACE>
Deep multi-hop derivation... 
- "The paper’s operator stack is..." 
- Cite [PAGE 1] "tracking-by-detection" etc.
- Eq 1 etc.
- Gray-zone audit: integer vs relaxed, total unimodular, LOCAL breaks, certificate normalized.

Need maybe mention exact quote: [PAGE 3] "These linear constraints have the property of being totally unimodular [2]." and [PAGE 6] "the additional linear constraints from LOCAL(Q) essentially violate the total unimodularity property". Good.

SOURCE_OPERATORS:
Use bullet lists? Fine.
Equations:
1. Flow polytope.
2. Pairwise IQP.
3. PSD diagonalization.
4. Local polytope.
5. Frank-Wolfe rounding.
6. Pairwise costs.
7. Re-detection overlap.
Need units:
- If c,Q in nats, objective in nats; if normalized, dimensionless.
- Jaccard dimensionless.
Breakdown regimes:
- Infeasibility if K too high.
- Fractional LP due LOCAL.
- Dense Q scaling.
- Negative weights.
- Correspondence failure.

Need cite pages. Use [PAGE 4] quote "Unfortunately, the above formulation can encode the quadratic assignment problem which is NP-hard to optimize in general [18]." Good.
[PAGE 5] quote "As z2 i = zi for binary variables, this transformation sill yields an (equiv- alent) IQP." typo sill? We'll quote maybe with [sic]? Not needed.
[PAGE 6] quote "The solution of the LP relaxation of (5) can have fractional components because the additional linear constraints from LOCAL(Q) essentially violate the total unimodularity property". Good.
[PAGE 6] quote "In our experiments, we obtained small suboptimality certiﬁcates (≈10−3) for our returned integer solutions". Need exact: source says "certiﬁcates (≈10−3)" maybe no space. Use as given.

RETROCAUSAL:
- lineage: Zhang et al [29], Pirsiavash [22], Butt Collins [8], Milan [20], Frank-Wolfe [12], Wainwright Jordan [24]. Cite pages.
- traps.

RECURSIVE:
- define belief F(z). Use probability: P(z|video) ∝ exp(-F(z)), F in nats. Is this formal? Could include in this section. Need not too much.
- crisis habit regression, counter-trap, clock.

CROSS_LAYER:
- physical layer: exclusive detection. Formal inequality. Need not use fake ratio. Use objective difference.
Let's formulate:
Let z be feasible flow. Suppose i,j overlap and q^ov_ij>0. Let z' be feasible after removing i and rerouting flow. If
\[
F(z)-F(z') = q^{ov}_{ij} + \Delta_{unary+linear} + \Delta_{other\ pairwise}
\]
and q^{ov}_{ij} > -\Delta_{...}, then z is dominated. Units same as objective. This is a proof schema. Need maybe not too formal? Good.
- biomechanical head-body: consistency condition [PAGE 4]. If head missing, edge intersects box, negative cost. 
- weather: no source; conditional. If weather changes c_i, costs adjust; if KLT fails, c_ij invalid, veto.

RLVR:
Define verifiable reward: R = 0 if constraints fail; else negative objective; plus certificate. Scenarios:
1. Flow feasibility counterfactual: candidate with split detection assigned to two tracks. Verification: flow conservation. Prediction: veto; FW always returns integer solution [PAGE 6].
2. Co-occurrence ablation in TownCenter: head-only vs NF+pairwise. Source says >20% AP improvement [PAGE 8]. Prediction: head-only lower AP; IDs higher.
3. Rounding or overlap penalty: Hamming vs FW; Table 2. Prediction: Hamming worse certificate and AP; Case1 values. Or negative overlap Case2. Need three. Could include both? Need exactly 3. Let's make 3:
1 flow feasibility
2 overlap penalty too low in MarchingRally (Case2) -> lower AP, more overlap; source says Case2 encourages criss-cross [PAGE 10].
3 Hamming rounding -> worse certificate and accuracy [PAGE 10].
But co-occurrence important. Maybe include co-occurrence instead of overlap? Need 3 verifiable. Could combine overlap and rounding? Let's choose:
Veto 1: flow infeasibility/fractional naive rounding.
Veto 2: co-occurrence removed in TownCenter head/body (verifiable by AP drop >20% [PAGE 8]).
Veto 3: Hamming rounding instead of Frank-Wolfe (verifiable by suboptimality certificates Table 2 and Figure 4 [PAGE 10]).
That covers. Could mention overlap as physical veto in cross-layer. Good.

Need predictions:
1. Any candidate not satisfying FLOW_K receives zero reward; prediction 100% veto. FW solves min-cost flow [PAGE 6].
2. If co-occurrence term omitted, TownCenter AP lower than NF+pairwise by >20% relative? Source: "there is more than 20% improvement in AP over the head baseline" [PAGE 8]. Prediction exact: AP_head-only < AP_NF+pairwise; gap >20 percentage points? It says more than 20% improvement, maybe absolute AP? Need cautious: "more than 20% improvement in AP" not necessarily points. We can say verifiable sign and magnitude reported. 
3. Hamming rounding: predicted certificate 3-4 times worse; table Case1 1.4e-2 vs 4.7e-3; re-detection accuracy worse. Good.

Need maybe use "RLVR" not defined? Define as verifiable reward. Good.

Potential issue: The final answer should not mention "analysis". Good.

Let's write final. Need ensure no raw ampersands. In LaTeX, use \text{...} with spaces, no &. Use \quad. Use no <. Use \le. Use \approx. Use \Delta. Use \top. Use \mathbb? okay.

Check for & in text: "biomechanical/weather" no. "head and body" no. In LaTeX, if use \begin{aligned} with & avoid. Use separate equations.

Need XML sections: maybe no root. Fine.

Let's produce final. Ensure word count. Need maybe 4000. Good.

Double-check citations:
[PAGE 1] "tracking-by-detection" and NP-hard? Actually NP-hard page 4. Use.
[PAGE 2] "greedily eliminating the overlapping detections" etc.
[PAGE 3] Eq 1 and total unimodular.
[PAGE 4] pairwise examples and NP-hard.
[PAGE 5] PSD and LOCAL.
[PAGE 6] fractional, FW rounding, certificate.
[PAGE 7] re-detection.
[PAGE 8] results.
[PAGE 10] Table 2, Case6.
[PAGE 11] runtime variables.

Need exact quote: "The solution of the LP relaxation of (5) can have fractional components because the additional linear constraints from LOCAL(Q) essentially violate the total unimodularity property" from page 6. Good.
"In our experiments, we obtained small suboptimality certiﬁcates (≈10−3) for our returned integer solutions" page 6. Good.
"We also observed that Hamming rounding generally produced a suboptimality that was around 3 to 4 times worse than the solution produced by Frank-Wolfe rounding." page 6. Good.
"there is more than 20% improvement in AP over the head baseline" page 8. Good.
"Case2 is a very low value for the overlap term encouraging tracks to criss-cross each other" page 10. Good.

Need no external citations? Fine.

Let's write final now.
</NATIVE_REASONING>

<THINK_TRACE>
The derivation must be anchored to the exact optimization operators in the supplied paper, not to a colloquial tracking narrative. The paper starts from “tracking-by-detection” [PAGE 1] and then formalizes detection selection and inter-frame linking as a min-cost network flow integer linear program [PAGE 3]. The primitive decision vector contains unary detection indicators \(x_i\in\{0,1\}\) and pairwise connection indicators \(x_{ij}\in\{0,1\}\). The flow constraints enforce conservation, unit track count \(K\), and the semantic that a connection can be active only when its endpoint detections are active. The key structural fact is that the pure linear flow polytope is totally unimodular, so the linear relaxation is integral: “These linear constraints have the property of being totally unimodular [2]” [PAGE 3]. That fact is the baseline against which every pairwise extension must be audited.

The paper then adds quadratic terms \(z_i z_j\) because unary costs alone cannot express interaction effects such as mutual exclusion of overlapping detections or co-occurrence of heterogeneous detections [PAGE 4]. The formal object becomes the integer quadratic program
\[
\min_z c^\top z + z^\top Q z
\quad\text{s.t.}\quad z\in \mathrm{FLOW}_K,\; z\text{ integer},
\]
with sparse \(Q\) [PAGE 4]. This immediately creates a complexity gray zone: the paper states, “Unfortunately, the above formulation can encode the quadratic assignment problem which is NP-hard to optimize in general [18]” [PAGE 4]. Therefore the derivation cannot claim exact global integer optimality after adding arbitrary pairwise terms. It must instead track three layers: (i) the exact combinatorial problem, (ii) the convex or linear relaxation, and (iii) the integer rounding certificate.

The relaxation layer has two main formal branches. The first is quadratic: if \(Q\) is not positive semidefinite, the paper uses the diagonalization trick
\[
Q^{\text{new}}_{ii}=\sum_{j\ne i}|Q^{\text{old}}_{ij}|,
\]
and replaces the linear coefficient of \(z_i\) by
\[
c_i - Q^{\text{new}}_{ii} + Q^{\text{old}}_{ii}.
\]
The paper notes, “As \(z_i^2=z_i\) for binary variables, this transformation sill yields an (equivalent) IQP” [PAGE 5]. This is a crucial non-toy algebraic move: it preserves the integer optimum under binary semantics while making the continuous relaxation convex. The second branch is the linear local-polytope relaxation:
\[
0\le u_{ij}\le 1,\quad u_{ij}\le z_i,\quad u_{ij}\le z_j,\quad z_i+z_j\le 1+u_{ij},
\]
for each quadratic pair, producing \(\mathrm{LOCAL}(Q)\) [PAGE 5]. For binary variables, these constraints force \(u_{ij}=z_i z_j\), but after relaxation they no longer preserve total unimodularity. The paper explicitly states, “The solution of the LP relaxation of (5) can have fractional components because the additional linear constraints from LOCAL(Q) essentially violate the total unimodularity property” [PAGE 6]. This is the principal breakdown regime: the clean integral min-cost flow structure is lost precisely when pairwise costs are introduced.

The rounding layer is then evaluated by an optimality certificate. Let \(z^\star\) be the relaxed global solution and let \(\hat z\) be an integer flow returned by rounding. The relaxed optimum is a lower bound, so the suboptimality certificate is the gap between the integer objective and that lower bound. The paper reports, “In our experiments, we obtained small suboptimality certiﬁcates (≈10−3) for our returned integer solutions” [PAGE 6], after normalizing the objective between 0 and 1. This is not a proof of global integer optimality; it is an empirical certificate that the rounded integer solution is near the relaxation bound. The gray-zone audit therefore distinguishes “globally optimal relaxed problem” from “near-optimal integer solution with certificate.”

The two pairwise operators must also be audited separately. The overlap penalty is
\[
q^{\text{ov}}_{ij}x_i x_j
\]
for pairs satisfying \(\mathrm{ov}(\mathrm{box}(x_i),\mathrm{box}(x_j))\ge o_{\text{thres}}\), with \(q^{\text{ov}}_{ij}>0\) [PAGE 4]. This penalizes simultaneous selection of overlapping detections, approximating a non-greedy non-maximum suppression inside the global flow. The co-occurrence operator is
\[
-q^{\text{co}}_{ij}z_i^h z_j^b
\]
when head and body variables are consistent, with the negative sign encouraging joint selection [PAGE 4]. Consistency includes direct box overlap or intersection of a head detection box with an edge connecting body detections, which is designed for missing detections [PAGE 4]. These operators are not decorative: they change the feasible integer optimum by encoding mutual exclusion and cross-signal agreement.

Finally, the evaluation layer must be audited with the paper’s own temporal metric. The authors argue that standard MOTA is insufficient and propose a re-detection measure over interval \(\Delta t\), where subtracks are judged true or false based on overlap with ground truth [PAGE 7]. This matters because a tracker can look acceptable at \(\Delta t=0\) while failing over longer temporal intervals. The paper notes that for MarchingRally, “for the intervals of 40 frames or more, our algorithm outperforms the baseline by over 20% AP” [PAGE 8]. Thus the full causal chain is: detection and correspondence costs define unary flow; sparse pairwise costs encode interactions; convex or linear relaxation supplies a lower bound; Frank-Wolfe rounding returns an integer flow; certificate bounds suboptimality; re-detection AP validates temporal robustness.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The formal operators below are stated with units, assumptions, and breakdown regimes. The source paper does not always state logarithmic units, but because tracking-by-detection is described as a MAP estimation problem [PAGE 1, PAGE 3], a standard interpretation is that costs are negative log-probabilities. Under that interpretation, if natural logarithms are used, \(c_i\), \(c_{ij}\), and entries of \(Q\) have units of nats. If base-2 logarithms are used, the units are bits. If the objective is normalized to the interval \([0,1]\), as the paper does for certificate reporting [PAGE 6], then the numerical objective is dimensionless. The Jaccard overlap used in the paper is also dimensionless and lies in \([0,1]\).

1. Base min-cost flow integer linear program.

The paper gives the following ILP [PAGE 3]:
\[
\min_x \sum_i c_i x_i + \sum_{ij\in E} c_{ij}x_{ij}
\]
subject to
\[
0\le x_i\le 1,\quad 0\le x_{ij}\le 1,
\]
\[
\sum_{i:\, ij\in E}x_{ij}=x_j=\sum_{i:\, ji\in E}x_{ji},
\]
\[
\sum_i x_i^t = K = \sum_i x_{si},
\]
\[
x\in \mathrm{FLOW}_K,\quad x_i,x_{ij}\in\mathbb{Z}.
\]

Assumptions and semantics:
- \(x_i=1\) means detection \(i\) is selected in a track [PAGE 3].
- \(x_{ij}=1\) means detections \(i\) and \(j\) are connected in nearby frames [PAGE 3].
- \(c_i\) is the cost of selecting detection \(i\), interpreted as negative detection confidence [PAGE 3].
- \(c_{ij}\) is the negative correspondence strength between detections \(i\) and \(j\) [PAGE 3].
- \(K\) is the number of tracks, enforced by dummy source and sink variables [PAGE 3].

Breakdown regime:
- If \(K\) exceeds the number of feasible source-to-sink paths, \(\mathrm{FLOW}_K\) is infeasible.
- If \(E\) is pruned too aggressively, true connections may be excluded, causing broken tracks.
- If costs are not calibrated as negative log-probabilities, the MAP interpretation becomes only heuristic, though the optimization remains well defined.

Integrality property:
The paper states that the linear flow constraints are totally unimodular [PAGE 3]. Therefore the linear relaxation of the pure unary flow problem has integral vertices, and solving it as an LP is a tight relaxation.

2. Pairwise integer quadratic program.

The paper’s quadratic extension is [PAGE 4]:
\[
\min_z c^\top z + z^\top Q z
\]
subject to
\[
z\in \mathrm{FLOW}_K,\quad z\text{ integer}.
\]

Here \(z\) collects both detection variables \(x_i\) and connection variables \(x_{ij}\). The matrix \(Q\) is sparse, with nonzero entries only for selected pairs of joint decisions. The paper states, “Unfortunately, the above formulation can encode the quadratic assignment problem which is NP-hard to optimize in general [18]” [PAGE 4]. This is the exact computational singularity: arbitrary sparse quadratic interactions on binary flow variables can encode NP-hard combinatorial structure.

3. Convexification by diagonal regularization.

If \(Q\) is not positive semidefinite, the paper defines
\[
Q^{\text{new}}_{ii}=\sum_{j\ne i}|Q^{\text{old}}_{ij}|,
\]
and replaces the linear coefficient of \(z_i\) with
\[
c_i - Q^{\text{new}}_{ii} + Q^{\text{old}}_{ii}.
\]
The equivalence uses the binary identity
\[
z_i^2=z_i.
\]
The paper cites positive semidefiniteness of \(Q^{\text{new}}\) and states that the relaxation becomes convex [PAGE 5].

Assumption:
- This transformation preserves the objective on binary points, but the continuous relaxation may change curvature. The relaxed optimum remains a valid lower bound for the binary problem if the transformed objective is equivalent on integer points and the feasible set is unchanged.

Breakdown regime:
- If numerical precision is insufficient, diagonal dominance may be weak and interior-point solvers may struggle.
- If \(Q\) is extremely dense, the sparsity advantage disappears and the QP becomes expensive.

4. Linearization with local consistency variables.

The equivalent ILP introduces variables \(u_{ij}\) for each quadratic pair:
\[
u_{ij}=z_i z_j.
\]
The paper’s constraints are [PAGE 5]:
\[
0\le u_{ij}\le 1,\quad \forall ij\in Q,
\]
\[
u_{ij}\le z_i,\quad u_{ij}\le z_j,
\]
\[
z_i+z_j\le 1+u_{ij}.
\]
The objective becomes
\[
\min_{z,u} c^\top z + q^\top u
\]
subject to
\[
z\in \mathrm{FLOW}_K,
\]
and the local consistency constraints above, with \((z,u)\in \mathrm{LOCAL}(Q)\).

For binary \(z_i,z_j\), these constraints imply:
- If \(z_i=0\) or \(z_j=0\), then \(u_{ij}=0\).
- If \(z_i=z_j=1\), then \(u_{ij}=1\).

The paper connects \(\mathrm{LOCAL}(Q)\) to a projected local marginal consistency polytope for a discrete Markov random field [PAGE 5, citing Wainwright and Jordan].

Breakdown regime:
The paper states, “The solution of the LP relaxation of (5) can have fractional components because the additional linear constraints from LOCAL(Q) essentially violate the total unimodularity property” [PAGE 6]. Therefore the LP relaxation is no longer guaranteed integral. This is the central relaxation breakdown after adding pairwise terms.

5. Frank-Wolfe rounding operator.

Given the relaxed solution \(z^\star\), the paper’s Frank-Wolfe-style rounding solves [PAGE 6]:
\[
\min_z \left(c + (Q+Q^\top)z^\star\right)^\top z
\]
subject to
\[
z\in \mathrm{FLOW}_K.
\]

This is a linear min-cost flow problem because the objective has been linearized at \(z^\star\). The paper emphasizes that each Frank-Wolfe step reduces to a min-cost network flow problem and that the rounded iterate is integer [PAGE 5, PAGE 6].

Certificate:
Let \(F_{\text{int}}(\hat z)\) be the objective of an integer feasible solution and let \(F_{\text{relax}}^\star\) be the global relaxed optimum. The suboptimality certificate is
\[
\Delta = F_{\text{int}}(\hat z)-F_{\text{relax}}^\star.
\]
If the objective is normalized to \([0,1]\), then \(\Delta\) is dimensionless. The paper reports empirical certificates of approximately \(10^{-3}\) [PAGE 6].

Breakdown regimes:
- If the relaxed solution is highly fractional, the linearization may point to a poor vertex.
- If \(Q\) is ill-conditioned, the gradient direction may be noisy.
- If the flow constraints are modified away from a true network flow structure, the rounding step may no longer be efficiently solvable.

6. Pairwise overlap operator.

For detections with overlap at least \(o_{\text{thres}}\), the overlap penalty is
\[
q^{\text{ov}}_{ij}x_i x_j,
\]
with
\[
\mathrm{ov}(\mathrm{box}(x_i),\mathrm{box}(x_j))\ge o_{\text{thres}},
\]
and \(q^{\text{ov}}_{ij}>0\) [PAGE 4]. The overlap threshold is set to \(0.5\) in the experiments [PAGE 4]. For body boxes, only the top 25% region is considered when computing overlap or intersection [PAGE 4].

Interpretation:
- The term is positive, so minimizing the objective discourages joint selection of overlapping detections.
- It acts as a global, non-greedy substitute for local non-maximum suppression.
- It can tolerate overlap when tracks intersect if the global cost tradeoff justifies it, but it penalizes persistently overlapping duplicate detections.

7. Co-occurrence operator.

For head and body variables, the paper uses
\[
-q^{\text{co}}_{ij}z_i^h z_j^b
\]
when \(z_i^h\) and \(z_j^b\) are consistent [PAGE 4]. The negative sign encourages joint selection. Consistency is defined in two ways: direct overlap of head and body boxes, or intersection of a head box with an edge connecting body detections, including interpolated body edges over skipped frames [PAGE 4].

Interpretation:
- The term rewards cross-signal agreement.
- It increases robustness to missing head or body detections.
- It is difficult to minimize greedily because head and body tracks must be optimized simultaneously [PAGE 4].

8. Re-detection evaluation operator.

The paper proposes a re-detection measure over temporal interval \(\Delta t\). For detections \(A_t\) and \(B_{t+\Delta t}\) assigned to the same track, the pair is checked against ground truth overlap on frames \(t\) and \(t+\Delta t\) [PAGE 7]. Overlap is measured by Jaccard similarity:
\[
\mathrm{IoU}(B,G)=\frac{|B\cap G|}{|B\cup G|}.
\]
This is dimensionless and bounded in \([0,1]\). At \(\Delta t=0\), the measure reduces to standard object detection evaluation [PAGE 7].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The technical lineage of the paper is a chain of attempts to preserve global optimality while adding interaction terms. The oldest node is the min-cost network flow formulation of multi-object tracking, where tracks are encoded as unit flows in a graph of detections and connections. The paper situates this in prior work using linear programming, push-relabel methods, successive shortest paths, and dynamic programming [PAGE 2]. The crucial historical assumption was that pairwise or higher-order dependencies break the clean linear flow structure. The paper states, “To ensure globally optimal and efficient solutions, previous methods have often restricted the cost to unary terms over all edges” [PAGE 2]. This is the first genealogical trap: unary-only models are tractable but cannot represent interactions such as exclusion or co-occurrence.

A second lineage branch is greedy post-processing. The paper notes that dependencies were enforced by greedy approaches, “such as greedily eliminating the overlapping detections after each step of a sequential selection of distinct tracks in [22]” [PAGE 2]. The paper criticizes this because “This non-global optimization approach, however, cannot recover from early suboptimal decisions” [PAGE 2]. The multi-week trap here is seductive: greedy non-maximum suppression is simple, fast, and often visually plausible, but it creates path dependence. If an early detection is wrongly retained or suppressed, later track selection cannot repair the error.

A third lineage branch is graph modification. Butt and Collins modify the network structure and use Lagrangian methods [PAGE 2]. The paper says this works for particular costs but generalizing to new pairwise costs “would require appropriate modifications of the graph structure which is non-trivial in general” [PAGE 2]. The trap is architectural: if every new interaction requires a new graph gadget, the method becomes brittle. The paper’s contribution is to keep the base flow graph and add pairwise costs through a generic optimization layer.

A fourth lineage branch is learned affinity or CRF-based association. Brendel et al. and Milan et al. select tracklets and connect them with learned distances or CRFs [PAGE 2]. The paper warns that online appearance training can fail “when objects move very close to each other” [PAGE 2]. This is a multi-week trap for practitioners: if appearance models are trained online in dense crowds, identity embeddings can collapse when people overlap. The paper’s response is not better embedding learning but structural pairwise costs that robustify the optimizer.

A fifth lineage branch is higher-order MRF relaxation. The paper’s local consistency constraints are connected to the local marginal polytope for discrete MRFs [PAGE 5]. This imports a known relaxation technology, but also imports a known weakness: local consistency does not guarantee global integral solutions. The paper explicitly identifies the resulting fractionalization: “the additional linear constraints from LOCAL(Q) essentially violate the total unimodularity property” [PAGE 6]. The genealogical trap is to assume that any linear relaxation of a combinatorial problem inherits total unimodularity. It does not. The flow polytope alone is integral; the flow-plus-local-polytope is not.

A sixth lineage branch is Frank-Wolfe optimization. The paper uses a Frank-Wolfe style rounding heuristic because each linear minimization over the flow polytope is efficient [PAGE 5, PAGE 6]. The historical value of Frank-Wolfe here is not merely optimization; it is that the linear subproblem retains the network flow structure. This preserves scalability and always produces an integer iterate. The trap is to replace this subproblem with a generic LP or QP solver and lose the flow-specific integrality advantage.

The retro-causal audit therefore says: the paper is not inventing a new tracking architecture from scratch. It is resolving a recurring historical conflict between tractability and interaction modeling. The clean flow model is tractable but interaction-blind. Greedy interaction is cheap but path-dependent. Graph modification is expressive but brittle. Learned CRFs are flexible but hard to certify. The paper’s genealogy is a controlled insertion of quadratic costs into the flow model, followed by a certified rounding procedure that prevents the optimizer from becoming a black box.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
A recursive theory-of-mind analysis treats the tracker as an agent maintaining beliefs over multiple object hypotheses while anticipating detector failures, occlusions, and crowd-induced ambiguity. In this framing, the optimization objective is a negative log posterior. If
\[
F(z)=c^\top z+z^\top Qz
\]
is measured in nats, then an associated Gibbs posterior can be written as
\[
P(z\mid \text{video}) \propto \exp(-F(z)).
\]
This equation is not a new empirical claim; it is the probabilistic interpretation of the paper’s MAP formulation [PAGE 1, PAGE 3]. The recursive issue is that the tracker must reason not only about the current detection but about future identity continuity. The clock is therefore not a decorative temporal index; it is a core epistemic variable.

Crisis habit regression:
Under crowded-scene crisis, the cheapest cognitive habit is to regress to local suppression. The paper describes this habit as greedy NMS: “independent decisions produced by NMS for each object and frame often become suboptimal in crowded scenes where multiple objects may occupy the same spatial neighborhood” [PAGE 4]. The recursive failure mode is that each object-level decision assumes the other object’s decision is already fixed. In dense crowds, those assumptions are mutually dependent. If tracker A suppresses a box that actually belongs to person B, tracker B may later select the wrong continuation. The habit regression is local optimization disguised as global tracking.

Counter-trap:
The paper’s counter-trap is to make the mutual dependency explicit through pairwise costs. The overlap term
\[
q^{\text{ov}}_{ij}x_i x_j
\]
penalizes joint selection of overlapping detections [PAGE 4]. The co-occurrence term
\[
-q^{\text{co}}_{ij}z_i^h z_j^b
\]
rewards consistent head-body selection [PAGE 4]. In theory-of-mind terms, the optimizer is no longer asking only “Is this detection plausible?” It is asking “Is this detection plausible given the simultaneous selection of competing or complementary detections?” This is a recursive belief update: the value of selecting one variable depends on the selection state of another variable.

The counter-trap also includes an epistemic safeguard. Because the pairwise problem is NP-hard in integer form [PAGE 4], the paper does not claim exact integer global optimality. It computes a relaxed lower bound and a rounded integer solution, then reports a certificate [PAGE 6]. This is a recursive honesty mechanism: the model knows that its integer output may be suboptimal and quantifies the possible gap. The paper reports small certificates, approximately \(10^{-3}\), under normalized objective scaling [PAGE 6]. The counter-trap is therefore not “trust the greedy decision” but “optimize the interaction globally in relaxation, then certify the integer projection.”

The clock:
The clock is represented by \(\Delta t\) in the re-detection measure. The paper argues that a meaningful evaluation should be task-related, such as detecting the location of a given person after \(\Delta t\) frames [PAGE 7]. This addresses a recursive failure that short-horizon metrics hide: a tracker may have low immediate localization error but still switch identities over time. The paper observes that in dense crowd videos, tracks may have low localization error while being incorrect due to switches, and low ID-switch error can result from many broken tracks [PAGE 7]. The clock therefore forces the tracker to be evaluated as a temporal belief-maintenance system, not as a frame-wise box predictor.

The recursive interaction between counter-trap and clock is explicit in the experiments. For MarchingRally, the overlap term improves long-horizon re-detection, and the paper states, “for the intervals of 40 frames or more, our algorithm outperforms the baseline by over 20% AP” [PAGE 8]. For TownCenter, the co-occurrence term improves noisy head tracks by leveraging body detections, and the paper states, “there is more than 20% improvement in AP over the head baseline” [PAGE 8]. These are not cosmetic gains; they show that the counter-trap changes the tracker’s temporal belief trajectory.

A deeper recursive risk is parameter-induced belief collapse. In the supplementary material, Case 6 uses a negative detection-confidence weight, and the paper notes that this “discourages” detections unless connected to edges with extremely high connection strength, resulting in poor performance [PAGE 10]. This is a theory-of-mind failure mode: the tracker’s belief over object presence becomes overly dependent on linkage evidence, causing it to reject valid but weakly connected detections. The clock exposes this because broken or delayed tracks degrade re-detection AP over nonzero \(\Delta t\).

Thus the recursive audit is: crisis induces greedy local suppression; the counter-trap introduces pairwise interaction and certified rounding; the clock tests whether the resulting beliefs survive temporal displacement. The paper’s method is stable only when the pairwise weights, flow constraints, and rounding certificate are jointly respected. If any one is ignored, the tracker regresses to a brittle habit.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The cross-layer veto adjudication separates physical, biomechanical, and weather-related constraints, then checks whether the paper’s operators can enforce or fail to enforce them. The paper’s core physical constraint is already encoded in the flow model: each detection belongs to at most one track, and “two objects cannot occupy the same space” [PAGE 3]. This is the baseline physical veto. However, detectors can produce multiple overlapping boxes for the same object or for different objects in close proximity. The overlap pairwise cost is the paper’s explicit veto operator for such cases.

Physical veto proof schema:
Let \(z\) be a feasible integer flow, and suppose detections \(i\) and \(j\) overlap sufficiently:
\[
\mathrm{ov}(\mathrm{box}(x_i),\mathrm{box}(x_j))\ge o_{\text{thres}}.
\]
The overlap term adds
\[
q^{\text{ov}}_{ij}x_i x_j
\]
with \(q^{\text{ov}}_{ij}>0\) [PAGE 4]. Suppose there exists an alternative feasible flow \(z'\) identical to \(z\) except that one of the overlapping detections is removed or rerouted. Let \(\Delta_{\text{other}}\) be the change in all other unary, correspondence, and pairwise costs caused by that rerouting. Then
\[
F(z)-F(z') = q^{\text{ov}}_{ij} + \Delta_{\text{other}}.
\]
If
\[
q^{\text{ov}}_{ij} > -\Delta_{\text{other}},
\]
then \(z'\) has lower objective value and \(z\) is dominated. This is not a fake ratio; it is an exact inequality in the same units as the objective. If the objective is in nats, \(q^{\text{ov}}_{ij}\) and \(\Delta_{\text{other}}\) are in nats. If the objective is normalized, they are dimensionless. The veto is conditional: a sufficiently large overlap penalty can veto jointly selected overlapping detections, but only if rerouting remains flow-feasible and does not incur a larger competing cost.

Biomechanical veto:
The head-body co-occurrence term encodes a coarse biomechanical regularity: head detections should be spatially consistent with body detections. The paper says head and body variables are consistent if their boxes overlap more than the threshold, or if a head detection box intersects an edge connecting body detection boxes [PAGE 4]. The latter case handles missing detections by interpolation along an edge. The formal reward is
\[
-q^{\text{co}}_{ij}z_i^h z_j^b,
\]
which lowers the objective when head and body selections agree [PAGE 4].

A biomechanical veto occurs when the consistency predicate is false. If a head detection is far from any plausible body edge or box, the co-occurrence reward is not granted. Therefore the optimizer cannot use the co-occurrence term to justify anatomically implausible head-body pairings. The veto is not a hard geometric proof of human pose; it is a sparse pairwise consistency constraint. Its strength depends on the overlap threshold, the body-box region used, and the allowed temporal edge length. The paper specifies that for body boxes only the top 25% region is considered when computing overlap or looking at intersection [PAGE 4]. This is a modeling assumption that approximates the head-body contact region, but it is not a full biomechanical skeleton model.

Weather veto:
The supplied source text does not contain an explicit weather variable, weather sensor model, or weather-dependent likelihood term. Therefore any weather veto must be stated conditionally. If weather affects tracking only by changing detector confidence, then the effect can be absorbed into the unary costs \(c_i\). Under the negative log-probability interpretation,
\[
c_i = -\ln p(d_i\mid \text{video}),
\]
so degraded detection likelihood increases \(c_i\), making the detection less attractive. If weather also degrades correspondence, then the pairwise connection costs \(c_{ij}\) become unreliable. The paper defines correspondence strength using KLT tracks: “The strength of correspondence between two detections is the ratio of their common KLT tracks and the total number of KLT tracks passing through both detections” [PAGE 7]. If weather causes KLT failure, this correspondence measure loses validity.

The formal breakdown condition is:
\[
p(d_i\mid \text{video}) \to 0
\]
or
\[
p(\text{correspondence}_{ij}\mid \text{video}) \to 0.
\]
In log-cost units, the corresponding costs diverge to \(+\infty\). In a correctly specified probabilistic model, this would veto selection of the affected detection or connection. In the paper’s actual implementation, however, there is no explicit weather layer; the veto is only as good as the detector and KLT correspondence inputs. If weather produces false detections with high confidence, the optimizer may still select them unless overlap, co-occurrence, or flow constraints penalize them. Thus the weather veto is conditional: the model can veto weather-induced inconsistency only when the inconsistency changes the costs or violates the pairwise consistency predicates.

Layer interaction:
The physical layer enforces exclusivity through flow conservation and overlap penalties. The biomechanical layer enforces cross-signal plausibility through co-occurrence. The weather layer is not explicitly represented in the source and must be treated as an upstream corruption of unary and correspondence costs. The cross-layer veto is valid when all three layers agree: a candidate track must satisfy flow conservation, not incur excessive overlap penalty, and not rely on implausible head-body co-occurrence or corrupted correspondence. If any layer is missing or mis-specified, the veto proof becomes conditional rather than absolute.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
The following RLVR-style counterfactual vetoes use verifiable rewards based on explicit constraints, objective certificates, and reported experimental metrics. The reward is zero or negative if a candidate violates hard constraints; otherwise it is evaluated by objective value, certificate, and tracking metrics. The three scenarios below are verifiable from the paper’s formal constraints and reported results.

Veto 1: Flow-infeasible or non-integer rounding candidate.

Scenario:
A candidate tracker output assigns a detection to two tracks, violates flow conservation, or returns fractional variables without a valid integer flow projection.

Verification test:
Check whether the candidate satisfies
\[
z\in \mathrm{FLOW}_K
\]
and whether all variables are binary or properly rounded to a valid flow. The paper’s base constraints require
\[
\sum_{i:\, ij\in E}x_{ij}=x_j=\sum_{i:\, ji\in E}x_{ji}
\]
and
\[
\sum_i x_i^t = K = \sum_i x_{si}
\]
[PAGE 3]. Any violation is hard-infeasible.

Prediction:
The candidate receives a hard veto. The paper’s Frank-Wolfe rounding is specifically designed to avoid this failure because it solves
\[
\min_z \left(c+(Q+Q^\top)z^\star\right)^\top z
\quad\text{s.t.}\quad z\in \mathrm{FLOW}_K,
\]
which is a min-cost network flow problem and therefore returns an integer flow [PAGE 6]. The paper also states that, unlike prior work, “our approach will always give some integer solution (by solving a simple min-cost network flow problem)” [PAGE 6]. Therefore a counterfactual candidate that claims a pairwise solution but violates flow feasibility must be rejected.

Veto 2: Co-occurrence ablation in TownCenter head-body tracking.

Scenario:
A counterfactual tracker removes the co-occurrence term and uses head detections alone, despite the presence of noisy head detections and more precise body detections.

Verification test:
Compare re-detection AP for the head baseline against the full model with the co-occurrence term. The paper states that in TownCenter, “adding a co-occurrence term to the network flow formulation also provides a significant improvement over the baselines” [PAGE 7], and later, “there is more than 20% improvement in AP over the head baseline” [PAGE 8].

Prediction:
The head-only counterfactual is vetoed for TownCenter if the evaluation uses the paper’s re-detection measure. The expected ordering is:
\[
\mathrm{AP}_{\text{NF + co-occurrence}} > \mathrm{AP}_{\text{head baseline}},
\]
with the paper reporting a margin exceeding 20% AP [PAGE 8]. The counterfactual is especially vulnerable at larger \(\Delta t\), because head detections are noisy and prone to identity errors when bodies are not used to disambiguate. The veto is verifiable by re-running the TownCenter experiment with the co-occurrence term disabled and measuring re-detection AP across \(\Delta t\).

Veto 3: Hamming rounding instead of Frank-Wolfe rounding.

Scenario:
A counterfactual optimizer obtains the same relaxed solution \(z^\star\) but rounds by minimizing Euclidean distance to \(z^\star\), i.e. Hamming rounding, instead of using the Frank-Wolfe linearization.

Verification test:
Compare suboptimality certificates and tracking accuracy. The paper’s Hamming rounding solves a linear program over \(\mathrm{FLOW}_K\) using the distance linearization, but the paper notes that “the closest point in Euclidean norm does not necessarily yield a good objective value (as the search was agnostic to the objective)” [PAGE 6]. The paper further states, “We also observed that Hamming rounding generally produced a suboptimality that was around 3 to 4 times worse than the solution produced by Frank-Wolfe rounding” [PAGE 6].

The supplementary table provides concrete certificate values for MarchingRally [PAGE 10]:
- Case 1: Frank-Wolfe certificate \(4.7\times 10^{-3}\), Hamming certificate \(1.4\times 10^{-2}\).
- Case 2: Frank-Wolfe \(8.7\times 10^{-6}\), Hamming \(9.3\times 10^{-3}\).
- Case 3: Frank-Wolfe \(4.3\times 10^{-3}\), Hamming \(1.0\times 10^{-1}\).
- Case 6: Frank-Wolfe \(1.0\times 10^{-1}\), Hamming \(1.3\times 10^{-1}\).

Prediction:
The Hamming-rounding counterfactual is vetoed whenever Frank-Wolfe rounding yields a smaller certificate and better re-detection accuracy. The paper confirms that Frank-Wolfe rounding “systematically yields better re-detection accuracy than Hamming rounding” [PAGE 10]. Therefore, for the same relaxed solution, a candidate that uses Hamming rounding and claims equivalent tracking quality should be rejected unless it can produce a matching certificate and AP curve. The verifiable prediction is:
\[
\Delta_{\text{Hamming}} > \Delta_{\text{Frank-Wolfe}}
\]
in the reported cases, and
\[
\mathrm{AP}_{\text{Frank-Wolfe}}(\Delta t) \ge \mathrm{AP}_{\text{Hamming}}(\Delta t)
\]
across the evaluated temporal intervals.
</RLVR_COUNTERFACTUAL_VETOES>