---
source: "openalex_W2059096325.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 7
model: baidu/ernie-5.5-flash-preview:free
words: 8310
---

<NATIVE_REASONING>
We need answer user's request. Need produce final with specified XML sections, >=1000 words total? User says >=1,000-WORD DEPTH across exact XML sections. Need likely satisfy with at least 1000 words overall. Also strict invariants: no betting lines. No toy equations. Must state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Source pages provided, cite exact [PAGE N] markers and verbatim quotes. Need likely analyze soccer role discovery paper, maybe for prediction? User only provided source and asked nothing explicit except format. We need generate analysis based on source. Must include XML sections exactly:
<THINK_TRACE>...</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>...</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>...</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>...</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>...</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>...</RLVR_COUNTERFACTUAL_VETOES>
Need maybe no other text outside. Need ensure >=1000 words. Need cite pages [PAGE 1], [PAGE 2] etc and verbatim quotes. Need formal LaTeX. Need discuss singularities/breakdowns: zero variance Gaussians, KL divergence infinite if Q=0 where P>0, entropy integrals, Hungarian assignment degeneracy, EM local minima, missing data, role non-identifiability, formation collapse, EMD normalization. Also information units: nats if natural log, bits if log base 2. Tracking data points: page 2 says ≈400,000,000; page 5 table says 480M? Need note discrepancy? Page 2 says ≈400M, page 5 Table says 480M. Use exact quotes. Page 5 says games 375, data points 480M. Page 2 says 380 games overall? Let's check: Page 4 says 20 teams home and away totaling 38 games for each team or 380 games overall. Five omitted => 375 games. Page 2 abstract says entire season ≈400,000,000 data points. Table says 480M. Could be data points include ball events? Page 5: over 1 million data-points per game, plus ball events. 375 games * ~1.28m? 480M. Need mention ambiguity. Need no betting. Need maybe retro-causal genealogy: from minimum entropy data partitioning [32][33], EM [34], Hungarian [35], EMD [36], role-based representation [11], earlier sports tracking. Multi-week traps: assuming static roles, ignoring substitutions/red cards, using raw identity, temporal aggregation, etc.

Need ensure word count >=1000. Let's estimate. Need maybe 2000 words to be safe. Sections each maybe 300 words = 1500. But THINK_TRACE >=400. Others maybe 200-300. Need exact XML tags. Need no Markdown outside? Could include LaTeX inside. Need ensure no betting lines. Fine.

Need maybe mention formal equations from paper:
P(x)= sum P(x|n)P(n) [PAGE 4]
KL(P||Q) = integral P log P/Q dx [PAGE 4]
V_n = -KL(P_n||P) [PAGE 4]
F* = arg min_F V [PAGE 4]
V = -H(x)+ sum P(n) H(x|n) [PAGE 4]
H(x)= -∫ P log P dx [PAGE 4]
F* = arg min_F sum H(x|n) [PAGE 4]
r_t = P_t x_t [PAGE 3]
EMD min sum d_qt f_qt subject to supplies/demands [PAGE 5]
Need units: P(x) probability density per m^2 if x in meters? Tracking coordinates likely unknown units but can be meters; SI if physical field positions in meters. Entropy units nats if natural log, bits if base 2. KL units same. EMD units ground distance units times flow units; if histograms normalized to probabilities (sum 1), EMD in meters (for 2D ground distance). If counts, event count*meter. Need discuss Gaussian role distributions: 2D Gaussians [PAGE 5 Fig 4]. Formal Gaussian maybe not in source? Can state implied by Fig 4: N(μ_n, Σ_n). Need be careful: source says drawn as 2D Gaussians. Formalize:
P_n(x)= N(x; μ_n, Σ_n), H = 1/2 log((2πe)^2 det Σ_n) in nats. Breakdown Σ singular, logdet -> -∞? Actually entropy of singular Gaussian -> -∞? For degenerate Gaussian with covariance determinant 0, differential entropy tends to -∞? Yes because density not finite w.r.t Lebesgue. Also KL infinite if support mismatch. EM singularities.

Need RLVR counterfactual vetoes: 3 verifiable scenarios + predictions. Must be verifiable? Could propose if substitution occurs before frame t, role assignment must adapt; if red card team reduced to 10, formation set N=11 breaks; if no overlap? Need physical/biomechanical/weather veto? Cross-layer veto adjudication: physical/biomechanical/weather veto proof. We need adjudicate physical vetoes maybe that tracking data requires visible players, field coordinates, no weather? Need prove? Need discuss physical constraints: positions bounded to pitch, velocities bounded, role uniqueness. Weather can affect pitch but not role alignment? Maybe if occlusions due to weather? Need not invent too much. Need formal proof of veto: If player positions lie outside pitch or velocity exceeds biomechanical limits, dataset is invalid; if missing frames exceed interpolation threshold, EM assignment cost not meaningful. Need include exact regimes.

Need no toy equations: use formal equations. Fine.

Need mention crisis habit regression vs counter-trap vs clock in RECURSIVE_THEORY_OF_MIND. Could discuss analysts/coaches may revert to identity-based means under time pressure, despite role method; counter-trap is role-based contextualization; clock: 90 min, 5 min sliding windows, 10 fps, convergence until EM stops. Need maybe recursive theory of mind about opponents modeling roles? The paper uses roles to compare teams; in crisis (e.g. scoreline?) no. We can talk about model assuming players have roles but opponents adapt; counterfactual: if opponent shifts formation, fixed template misassigns.

Need historical/scientific lineage and multi-week traps in RETROCAUSAL_GENEALOGY. Multi-week traps? Could mean long training / seasonal traps: seasonal aggregation masks in-game role swaps; multi-week injury/transfer changes distributions. Need cite.

Need think trace >=400 words. Need maybe include gray-zone audit: ambiguity 400M vs 480M, page citations.

Need ensure exact XML sections no extra. Could include line breaks. Need final only XML. Need count words. Let's draft around 2200 words. Need maybe count approximate. We'll produce thorough.

Potential structure:
<THINK_TRACE>
Paragraphs. Need >=400 words. We'll make ~700.
</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS> ~500.
RETROCAUSAL_GENEALOGY ~300.
RECURSIVE_THEORY_OF_MIND ~300.
CROSS_LAYER_VETO_ADJUDICATION ~350.
RLVR_COUNTERFACTUAL_VETOES ~400.
Total ~2550. Good.

Need verbatim quotes: include quotes from source in THINK_TRACE and SOURCE. Exact [PAGE N] markers. Need cite quotes. Use short quotes.

Let's plan content.

THINK_TRACE:
- Source: Bialkowski et al. 2014, role-based representation. Need infer query? It's likely analysis of source for reasoning. We need multi-hop derivation: from raw tracking to role representation.
- Page 2 abstract: ≈400M data points. Page 4: 375 games, page 5 table 480M. Gray-zone: discrepancy; likely abstract approximates per-player per-frame points? Let's compute: 375 games * 2 halves * maybe 45 min * 60 * 10 fps * 22 players? 45*60*10*22 = 594k per half, 1.188m per game, 445.5m. Plus ball events = 480m. Okay.
- Problem: identity representation x_t = [x1,y1,...,x11,y11]^T [PAGE 2], static fails due to interchanging [PAGE 2-3]. Role representation r_t = P_t x_t [PAGE 3]. Permutation matrix.
- Formal derivation: formation as set of PDFs; mixture; KL penalty; entropy objective; EM assignment.
- Gray zones: P(x|n) estimated from finite frames; 2D Gaussians assumption; role count N=10? Page 5: each formation consists of ten distinct role distributions because goalkeeper excluded? Need mention. Paper says ten roles. It excludes GK? Fig 9 includes 10 roles. Need cite [PAGE 5]. This is a modeling assumption.
- Breakdown: if P_n(x)=0 where P(x)>0, KL infinite; if covariance singular, Gaussian entropy diverges; if role labels non-identifiable due to symmetry, permutation ambiguity; EM local minima; Hungarian tie degeneracy.
- Need maybe derive EMD distance between formations as sum role-to-role distances [PAGE 5].
- conclude with veto.

SOURCE_OPERATORS_AND_EQUATIONS:
- Define domain D = {(t,i, x_{i,t}, y_{i,t})} in SI meters, frame rate f=10 Hz [PAGE 4]. Maybe units: time s, positions m.
- Identity vector x_t ∈ R^{2N}, N=11 [PAGE 2]. r_t = P_t x_t, P_t ∈ {0,1}^{2N×2N}? Actually permutation on player blocks. P_t orthogonal, det ±1? Need formal.
- Mixture eq (1): P(x)=∑ P(x|n)P(n)=1/N ∑ P_n(x). Assumptions equal priors P(n)=1/N.
- KL eq (2) in nats if ln, J = ∫... Units: nats (or bits). V_n = -KL. F* argmin.
- Derivation eq 5-9. Entropy eq 6. If Gaussian, H = 1/2 log((2πe)^2 det Σ) nats. Need note from Fig 4 uses 2D Gaussians [PAGE 5].
- EM: E-step cost matrix C_{i,n} = - log P_n(x_i) maybe plus role prior; assignment arg min ∑ C. Hungarian [PAGE 4, 35].
- M-step update μ_n, Σ_n.
- Convergence: objective non-increasing; fixed point; no global optimum guarantee.
- EMD: min_{f_{qt}≥0} ∑ d_{qt} f_{qt} s.t. ∑ f_{qt}=a_q, ∑ f_{qt}=b_t [PAGE 5]. Units: if a,b normalized histograms dimensionless, d meters => EMD meters.
- Breakdown regimes: support mismatch, zero density, singular covariance, n=N, identical roles, frame missing, player count mismatch, substitutions/red cards. Exact singularity: det Σ_n = 0, logdet -∞; KL ∞ if P>0, Q=0; Hungarian cost tie leads arbitrary permutation; if role distributions identical, EM objective flat.
- Data inventory: 375 games, 480M data points, 981K ball events, 43 events [PAGE 5]. Need mention 10 fps.

RETROCAUSAL_GENEALOGY:
- lineage: tracking -> alignment -> roles. [PAGE 3] related work: Intille & Bobick, codebooks; Lucey et al [11] manual roles; minimum entropy partitioning [32][33]; EM [34]; Hungarian [35]; EMD [36]. Multi-week traps: season aggregation hides role swaps, using starting lineup as fixed role, identity comparisons after transfers, ignoring substitutions/red cards. Need mention page 3 says breaks down with substitution, expulsion, comparing teams. Also page 6 formation cluster over half; long-term role distributions may mask short-term swaps; page 6-7 shows 5 min smoothing to ignore temporary swaps. Multi-week: seasonal fatigue/tactics changes; if model trained on season and applied to single match, prior P(n)=1/N may be wrong? Actually equal prior per role per half. Need maybe "multi-week traps" as temporal nonstationarity.

RECURSIVE_THEORY_OF_MIND:
- Analyst believes role reveals intent; coach believes role assignment captures tactics; opponent may exploit role regularity. Crisis habit regression: under time pressure, revert to mean position or identity; counter-trap: use per-frame permutation and short windows; clock: 10 fps, 45 min halves, 5-min sliding window [PAGE 6], EM convergence iterations. Need maybe formal belief hierarchy: P(player role|observation, model). If model assumes roles static, misreads dynamic swaps. If opponent knows clustering, may deform formation to create ambiguity. Need not too wild. Include prediction: role assignment distribution entropy changes with crisis? We can formalize H_t = H(P_n) etc. But no fake. Could say if role distribution is high entropy, role identity uncertain. Need maybe source: entropy objective. Recursive: model of analyst modeling coach modeling players. Crisis habit regression: broadcasters use possession duration [PAGE 6], but role representation adds where. Counter-trap: sliding 5-min windows. Clock: 5-min windows and 15/30/45 min snapshots [PAGE 7].

CROSS_LAYER_VETO_ADJUDICATION:
- Physical/biomechanical/weather veto proof. Need maybe define cross-layer: raw sensor layer, role layer, tactical layer, outcome layer. Veto if any lower layer invalid. Physical constraints: positions in pitch rectangle [0,L]×[0,W], velocities v=(x_t-x_{t-1}) f, acceleration bounds, no overlapping same role. If tracking reports impossible positions/velocities, veto. Biomechanical: human sprint speed ~ < 12 m/s? Source doesn't give, but formal? Need avoid unsupported? We can state typical elite soccer sprint velocities less than ~12 m/s, but as external assumption. Need exact breakdown: if implied speed > 12 m/s for sustained frames, tracking artifact. But maybe formal: v_i(t) = (x_i(t)-x_i(t-Δ))/Δ; require ||v|| ≤ v_max and acceleration ≤ a_max. If not, veto role assignment. Weather: not directly in paper but tracking data can be degraded by rain/occlusion? Need proof: if occlusion/missing data cause missing frames, role cost uses interpolated positions; if missing fraction > threshold, entropy estimates unreliable. Could say weather is not a semantic tactical layer but an observation-layer perturbation; if signal-to-noise low, veto. Need maybe cite source: tracking data Prozone [PAGE 4], 10 fps [PAGE 4]. No weather mention. We can say no weather operator in source; any weather claim is exogenous and must be vetoed unless data quality metrics prove validity. Need exact proof: Let O_t be observed positions; if occlusion indicator m_i(t)=0 and interpolation error ε > field scale, then posterior P_n(x|obs) not reliable. But source doesn't define. Need still formal. Need maybe "weather veto proof" as theorem: If Q is distribution of observed positions under weather and true position distribution P differs by total variation > δ, then KL cost bias > bound. But need not overdo. Could state under assumption of additive Gaussian noise, H increases by log etc. But no toy equations? Formal okay. Need not invent too much. We can state no weather model in source, so cannot be used to promote; only veto if physical layers fail.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable RLVR veto scenarios + predictions. RLVR maybe Reinforcement Learning with Verifiable Rewards? Need create scenarios with verifiable predictions. Must be 3. Each with setup, formal test, predicted outcome if source method valid, veto condition. Need no betting. Examples:
1. Substitution/red card veto: If a red card reduces team to 10 players before t, the 11-role assignment in Eq. (9) cannot assign all roles. Prediction: role assignment EM must either drop a role, merge roles, or fail; ground-truth annotations with red-card halves excluded [PAGE 5] ("excluding formations where players were sent off"). Verifiable by comparing assigned role count to active players. Veto if system reports 11 distinct roles for 10 active players with low uncertainty.
2. Role-swap counterfactual: Player starts LW then swaps to RW [PAGE 2]. Identity-mean model predicts touches cluster near original LW mean; role model predicts touch label transitions from LW to RW. Verifiable: using Fig 1/8. If event labels colored by role show swap, role model passes; if mean identity model cannot separate, veto for identity model. Prediction: role entropy within player lower than identity mean? Need precise: For swapped player, variance of role labels high but conditional on role distribution bimodal; role-specific heatmaps separated.
3. Formation clustering ground truth veto: If agglomerative EMD clustering yields >75.33% agreement with expert labels [PAGE 6], accept; if a cluster's majority label < chance or EMD distances violate metric properties, veto. More verifiable: Recompute confusion matrix; if Cluster 2 4-4-2 assignment frequency 50.37% but expert label not majority >50%, veto. Or if EMD normalization not sum-to-one, EMD constraints fail. Need maybe 3 scenario with cluster misclassification: Cluster 6 4-1-3-2 often classified as 4-4-2 and 4-3-3 [PAGE 6]. Prediction: If second striker slightly behind other striker, cluster distance to 4-4-2 and 4-2-3-1 small; if expert labels disagree, veto strict cluster label. Need verifiable by perturbation: shift ST backwards by δ; EMD changes continuously; cluster assignment may flip. If prediction fails, veto.

Need maybe include exact predictions with numeric thresholds? We can use source numbers: 20 teams, 375 games, 480M data points, 981K ball events, 43 events, 1411 formations, 75.33%, cluster frequencies. Use them. Need ensure "RLVR" maybe reward verification? Could define verifiable reward: classification accuracy against ground truth. Need no betting. Fine.

Need word count. Let's draft final carefully. Need maybe avoid unsupported claims. Use formal notation. Need include citations exact [PAGE N] and verbatim quotes. Need maybe quote exact phrases: “≈400,000,000 data points” [PAGE 2], “375” table? The table is on [PAGE 5], quote “Games 375”, “Data Points 480M”. Need exact from source: Table lines. Could quote “Data Points 480M” [PAGE 5]. Also “overall correct classiﬁcation rate of 75.33%” [PAGE 6]. “Cluster 2, which appears to be a 4-4-2, is the most common with approximately 50.37%” [PAGE 5]. Need preserve weird fi ligature? Can quote as in source: "overall correct classiﬁcation rate of 75.33%" with fi ligature? Use normal? Verbatim maybe should match. Could use code? We'll quote with normal "classification"? Strict verbatim? Better copy from source with ligature? It's okay maybe. Need exact [PAGE N] markers.

Need maybe include page 4: “We performed this procedure for each team and match half, excluding formations where players were sent off, resulting in the detection of 1411 formations.” [PAGE 5]. Good.

Need maybe include formal assumptions: x positions in meters, frames uniformly sampled at 10 Hz, roles have equal prior 1/N. Note source says normalize tracking data zero mean each frame and set attack left-to-right [PAGE 4]. Formal: translation removal: x' = x - centroid; rotation/reflection normalization to attack left-to-right. Could mention.

Need maybe discuss entropy H units: differential entropy can be negative; not a probability; requires density. Breakdown: if support unbounded Gaussian, H finite; if empirical histogram bins, H depends on bin size. Need include.

Potential issue: final answer must be >=1000 words across XML sections. Need maybe count approximate. I'll write lengthy. Need not include analysis in final. Let's draft in final with XML.

Need ensure no "odds", "spread", "total", "moneyline". Avoid word "betting". Fine.

Let's compose.

First section THINK_TRACE:
Maybe 800 words. Need ensure >=400. Let's write with paragraphs.

Draft:
<THINK_TRACE>
The source defines a pipeline from raw tracking to role-based alignment... etc.
Need mention multi-hop: raw -> identity -> role -> formation -> clusters -> tactical inference.
Gray-zone audit: data volume discrepancy; ten roles vs eleven; 2D Gaussians; exclusion sent off.
Need maybe include exact quotes:
Page 2: "≈400,000,000 data points".
Page 4: "380 games overall" and "Five of these games were omitted".
Page 5 table: "375", "480M".
Page 5: "ten distinct role probability distributions".
Page 6: "75.33%".
Need maybe discuss if 480M includes ball events. Page 4: "over 1 million data-points per game, in addition to the ball events" [PAGE 4]. 375*1m=375m; 480M seems maybe multiple players? Actually each frame every player = 22*? If over 1m per game? Let's compute: 10 fps * 90 min = 54k frames per match? 54k*22=1.188m per game. 375*1.28m=480m. Yes. Good. Abstract approximate. Fine.

Need maybe include "role representation allows multiple roles per match but only one per frame" [PAGE 3].

SOURCE_OPERATORS:
Need formal equations. Use display math. Need maybe include units. Need no fake ratios. Fine.

RETROCAUSAL:
Need historical lineage. Multi-week traps. Use citations. Need maybe mention "minimum entropy data partitioning" references [32][33] on [PAGE 4]. "Hungarian algorithm" [35] [PAGE 4]. EMD [36] [PAGE 5]. "Lucey et al., [11] who used a codebook of manually labelled roles" [PAGE 3]. Need maybe "Intille and Bobick" [PAGE 3]. Good.

RECURSIVE:
Need crisis habit regression vs counter-trap vs clock. Could formal belief levels. Need maybe include 5 min sliding window [PAGE 6]. Need "possession duration" [PAGE 6]. Use formal: short window W=5 min, role histogram over window. Crisis regression: under time pressure, use aggregate possession. Counter-trap: role-specific spatial context. Clock: 10 fps and 5 min windows. Good.

CROSS_LAYER_VETO:
Need proof. Let's formalize:
Layer L0 physical: positions p_i(t) ∈ [0,L]×[0,W]. Velocity v_i(t) = (p_i(t)-p_i(t-Δt))/Δt. If ||v|| > v_max or missing, veto. Layer L1 role: P_t must be permutation. If number active m_t ≠ 11, role set cardinality mismatch. Layer L2 formation: entropy objective. If density support mismatch, KL infinite. Weather: observation noise. If additive noise covariance Σ_w, observed density P_obs = P_true * N(0,Σ_w); entropy H(P_obs) ≥ H(P_true)+ 1/2 log det(2πe Σ_w)? Actually differential entropy of convolution? Not simple, but Gaussian noise increases entropy maybe. We can say if noise dominates field scale L_pitch, role Gaussians merge. Need formal condition: Mahalanobis separation Δμ^T Σ^{-1} Δμ ≤ χ² threshold -> non-identifiable. Weather veto if separation below threshold due to noise. But source doesn't have weather; we can say exogenous. Need maybe avoid too much unsupported. But request asks physical/biomechanical/weather veto proof. We'll include.

RLVR:
Need 3 scenarios. Make each with verifiable test and prediction. Need maybe use "RLVR" as reinforcement learning with verifiable rewards? Could define: A candidate downstream tactical model gets reward only if source-derived role features satisfy verifiable constraints. Counterfactual veto if reward fails. Need 3 scenarios. Good.

Need final no extra. Let's write. Ensure word count. We can make sections robust.

Need maybe mention "zero toy equations" - we won't. Need no fake ratio.

Let's produce final. Ensure XML tags exactly and no markdown headings outside.

Check word count roughly: THINK_TRACE maybe 800, SOURCE 700, RETRO 350, ToM 350, Veto 450, RLVR 550 = 3200. Good.

Need maybe avoid overclaim: "weather veto proof" not from source. We can explicitly say source contains no weather operator, so weather enters only as observation-layer covariate and must be vetoed unless data quality evidence. That's good.

Need ensure all exact page citations. Use [PAGE 2] etc.

Let's draft final now.
</NATIVE_REASONING>

<THINK_TRACE>
The source is a role-alignment paper, not a direct match-outcome model. The reasoning chain must therefore move from raw spatiotemporal observations to a probabilistic role representation, then to formation clustering, and only then to higher-level tactical claims. The paper’s central claim is stated early: “We present a ‘role-based’ representation that dynamically updates each player’s relative role at each frame” [PAGE 2]. The multi-hop derivation is: (1) raw player coordinates are logged at a high temporal rate; (2) identity-based ordering is brittle because players interchange positions; (3) a permutation matrix converts identity coordinates into role coordinates; (4) roles are discovered by minimizing overlap between role-specific spatial densities; (5) the overlap objective is equivalent to minimizing summed conditional entropy; (6) the resulting role distributions can be clustered by an optimal-transport distance; (7) the resulting clusters can be compared to expert formation labels.

A key gray-zone issue is the reported data volume. The abstract says “≈400,000,000 data points” [PAGE 2], while the dataset inventory on page 5 reports “Data Points 480M” [PAGE 5]. These are not necessarily contradictory. Page 4 says each half contains “the (x, y) position of every player at 10 frames-per-second” and that this “results in over 1 million data-points per game, in addition to the ball events” [PAGE 4]. With 375 games, full-player tracking at 10 Hz easily approaches hundreds of millions of coordinate points. The abstract’s figure is therefore a rounded descriptive estimate, while the table’s figure is a larger inventory count. The safe inference is not to treat either number as an exact sample size without unit definitions; the exact count depends on whether one counts coordinate scalars, frames, player-frames, ball events, or derived features.

Another gray zone is the number of roles. The paper defines a formation as “an arbitrarily ordered set of N roles {R1, R2, . . . , RN}” [PAGE 3], and the identity representation is given for “N = 11 players” [PAGE 2]. However, the formation-discovery section says each discovered formation has “ten distinct role probability distributions” [PAGE 5], and the role timeline in Fig. 9 lists ten field roles excluding goalkeeper [PAGE 7]. Thus the model is not treating all eleven players as symmetric role variables. The goalkeeper is effectively excluded from the discovered role set, or treated as a special non-role identity. Any downstream inference that assumes eleven discovered roles per team is inconsistent with the paper’s reported procedure.

A third gray zone is the probabilistic assumption behind role discovery. The paper says role distributions are “drawn as 2D gaussians” [PAGE 5], but the derivation itself is nonparametric in form: it defines densities \(P_n(x)\), entropy \(H(x)\), and Kullback–Leibler overlap. The Gaussian depiction is therefore an illustrative and implementation-friendly family, not a theorem. If the true role densities are multimodal, heavy-tailed, or contaminated by outliers, the Gaussian visual representation can hide structure or create artificial overlap. This matters because the EM procedure assumes each frame can be assigned a role using a cost based on role densities. If the density family is misspecified, the assignment can be confidently wrong.

A fourth gray zone is temporal scope. The paper’s formation discovery is performed per team and per match half: “We performed this procedure for each team and match half, excluding formations where players were sent off, resulting in the detection of 1411 formations” [PAGE 5]. This means the long-term formation representation is not a whole-season object; it is a half-match structural summary. The paper later uses shorter windows for visualization, such as “a sliding window of 5 minutes” [PAGE 6], and smoothing “to ignore temporary role swaps” [PAGE 7]. The same role vocabulary can therefore support multiple timescales, but the statistical object changes with the window length. A role density estimated over a full half has much lower temporal variance than a role assignment estimated over five minutes.

The strongest derivation in the source is the entropy equivalence. The paper starts with the team heatmap as a mixture:
“P(x) = \sum_{n=1}^{N} P(x|n)P(n)” [PAGE 4]. It then penalizes role distributions that overlap with the team distribution by using negative KL divergence:
“Vn = -KL(Pn(x)||P(x))” [PAGE 4]. Substituting this into the total cost gives an expression involving conditional entropy:
“V = -H(x) + \sum_{n=1}^{N} P(n)H(x|n)” [PAGE 4]. Because \(H(x)\) is constant with respect to the role partition, the optimization becomes:
“F* = arg min_F \sum_{n=1}^{N} H(x|n)” [PAGE 4]. This is the formal core of the method. It says that a good role set is one that makes each role’s spatial distribution as concentrated as possible, while preserving a one-to-one frame-level assignment. The paper then says the optimization is solved approximately by an EM-like procedure with Hungarian assignment:
“we assign role labels to the tracking data by formulating a cost matrix based on the log probability of each (x, y) position being assigned a particular role label and compute the optimal assignment using the Hungarian algorithm” [PAGE 4]. This is not a generic clustering claim; it is constrained clustering with a permutation constraint at each frame.

The main failure modes are also inferable from the equations. If a role density \(P_n(x)\) is zero where the team density \(P(x)\) is positive, the KL term becomes infinite. If a Gaussian role density has a singular covariance matrix, its differential entropy is not finite in the usual Lebesgue-density sense. If two roles have nearly identical distributions, the entropy objective becomes flat and the Hungarian assignment may arbitrarily swap labels. If the number of active players differs from the number of assigned roles, the permutation representation is invalid. These are not minor implementation details; they are exact breakdown regimes of the source’s own formalism.

The paper’s formation clustering step introduces another operator: Earth Mover’s Distance. The source gives the transportation formulation:
“min_{f_{qt} \ge 0} \sum_{q,t=1}^{D} d_{qt} f_{qt} s.t. \sum_{q=1}^{D} f_{qt} = a_t, \sum_{t=1}^{D} f_{qt} = b_q” [PAGE 5]. This is a formal optimal-transport distance between normalized role histograms. If the histograms are not normalized, or if the ground distance \(d_{qt}\) is not a metric on field coordinates, the resulting distances may not be comparable across formations. The paper uses EMD to group formations and then compares cluster labels to expert annotations, reporting “an overall correct classification rate of 75.33%” [PAGE 6]. That accuracy is meaningful only if the ground-truth labels are reliable and the cluster-to-label mapping is unambiguous. The paper itself notes confusion: “The most confusion is in Cluster 6 which appears to be a 4-1-3-2 formation … often being classified as a 4-4-2 and 4-3-3” [PAGE 6]. This is a gray zone because the model’s discrete role partition can blur formation boundaries when tactical spacing is continuous.

Overall, the source supports a cautious inference: role-based representation is a valid alignment layer for soccer tracking data when the active roster is complete, the tracking noise is bounded, the role densities are estimable, and the temporal window is specified. It does not support unrestricted claims about player quality, match outcome, or tactical dominance unless those higher-level quantities are separately defined and validated.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let the tracking domain be
\[
D=\{(t,i,x_{i,t},y_{i,t})\}
\]
where \(t\) is frame index, \(i\) indexes players, and \((x_{i,t},y_{i,t})\) are field coordinates. The source states that each half contains “the (x, y) position of every player at 10 frames-per-second” [PAGE 4]. If coordinates are in meters, then positions have SI unit \(\mathrm{m}\), time has unit \(\mathrm{s}\), and frame interval is \(\Delta t = 0.1\ \mathrm{s}\). If the source’s coordinate system is normalized to the pitch, the units are dimensionless fractions of pitch length and width; the formalism is unchanged, but all distance thresholds must be rescaled.

The identity representation is
\[
\mathbf{x}_t =
[x_{1,t},y_{1,t},x_{2,t},y_{2,t},\ldots,x_{11,t},y_{11,t}]^\top
\]
for \(N=11\) players [PAGE 2]. The role representation is
\[
\mathbf{r}_t = P_t \mathbf{x}_t
\]
where \(P_t\) is a frame-specific permutation operator [PAGE 3]. Formally, \(P_t\) maps player-identity coordinates into role-coordinate order. If \(P_t\) acts on player blocks rather than scalar coordinates, then \(P_t\) is an \(11\times 11\) permutation matrix on player indices and \(\mathbf{r}_t\in\mathbb{R}^{22}\). The paper states that “role assignment can be interpreted as applying a permutation matrix to the identity representation at each frame” [PAGE 3]. The constraint is that at each frame each player receives exactly one role and each role is assigned to at most one player.

The team spatial density is modeled as a mixture:
\[
P(x)=\sum_{n=1}^{N}P(x\mid n)P(n)
\]
and, under the paper’s equal-prior assumption,
\[
P(x)=\frac{1}{N}\sum_{n=1}^{N}P_n(x)
\]
where \(P_n(x)=P(x\mid n)\) is the role-specific density [PAGE 4]. If \(x\in\mathbb{R}^2\), then \(P(x)\) has units of inverse area, e.g. \(\mathrm{m}^{-2}\) if positions are in meters. The conditional entropy is
\[
H(x\mid n)=-\int P(x\mid n)\log P(x\mid n)\,dx
\]
and the team entropy is
\[
H(x)=-\int P(x)\log P(x)\,dx
\]
[PAGE 4]. If the logarithm is natural, entropy and KL units are nats; if base-2 logarithms are used, the units are bits. Differential entropy is not a probability; it can be negative and depends on the coordinate measure.

The overlap penalty is
\[
V_n=-\mathrm{KL}\left(P_n(x)\parallel P(x)\right)
\]
with
\[
\mathrm{KL}(P\parallel Q)=\int P(x)\log\frac{P(x)}{Q(x)}\,dx
\]
[PAGE 4]. The total cost is
\[
V=\sum_{n=1}^{N}P(n)V_n
\]
and the optimal formation is
\[
F^*=\arg\min_F V
\]
[PAGE 4]. Substituting the KL expression gives
\[
V=-\sum_{n=1}^{N}P(n)\int P(x\mid n)\log P(x\mid n)\,dx
+\sum_{n=1}^{N}P(n)\int P(x\mid n)\log P(x)\,dx
\]
which becomes
\[
V=-H(x)+\sum_{n=1}^{N}P(n)H(x\mid n)
\]
[PAGE 4]. With equal priors \(P(n)=1/N\),
\[
V=-H(x)+\frac{1}{N}\sum_{n=1}^{N}H(x\mid n)
\]
and, because \(H(x)\) is independent of the role partition,
\[
F^*=\arg\min_F \sum_{n=1}^{N}H(x\mid n)
\]
[PAGE 4]. This is the central optimization operator.

If each role density is approximated by a bivariate Gaussian,
\[
P_n(x)=\mathcal{N}(x;\mu_n,\Sigma_n)
\]
then
\[
H(x\mid n)=\frac{1}{2}\log\left((2\pi e)^2\det\Sigma_n\right)
\]
in nats for \(x\in\mathbb{R}^2\). This follows from the Gaussian representation “drawn as 2D gaussians” in the paper’s figures [PAGE 5]. The exact singularity regime is
\[
\det\Sigma_n=0
\]
in which case the density is degenerate with respect to two-dimensional Lebesgue measure and the differential entropy is not finite in the usual nondegenerate Gaussian sense. If \(\det\Sigma_n\) is very small but nonzero, entropy becomes strongly negative, causing the optimizer to over-concentrate roles. If \(\Sigma_n\) is very large, roles merge and the permutation assignment becomes ambiguous.

The KL term has an exact breakdown condition. If there exists a set \(A\) with positive \(P\)-measure such that
\[
P(x\in A)>0
\]
but
\[
Q(x\in A)=0
\]
then
\[
\mathrm{KL}(P\parallel Q)=+\infty
\]
In the role-discovery setting, if a role density assigns zero probability to locations where the team density has positive mass, the penalty diverges. Conversely, if two role densities are identical,
\[
P_i(x)=P_j(x)
\]
for \(i\neq j\), the entropy objective is invariant to swapping those roles, producing a permutation degeneracy. The Hungarian algorithm can solve the assignment exactly for a given cost matrix, but it cannot resolve a flat or tied cost landscape except by arbitrary tie-breaking. The source’s procedure therefore has an exact non-identifiability regime whenever role distributions are equal or nearly equal.

The EM-like procedure alternates:
1. E-step / assignment: compute cost
\[
C_{i,n}=-\log P_n(x_i)
\]
for player or detection \(i\) and role \(n\), then solve
\[
\pi_t^*=\arg\min_{\pi\in\mathcal{S}_N}\sum_i C_{i,\pi(i)}
\]
where \(\mathcal{S}_N\) is the set of one-to-one assignments [PAGE 4].
2. M-step / density update: recompute \(P_n(x)\), for example by updating Gaussian means and covariances:
\[
\mu_n=\frac{1}{|S_n|}\sum_{i\in S_n}x_i
\]
\[
\Sigma_n=\frac{1}{|S_n|}\sum_{i\in S_n}(x_i-\mu_n)(x_i-\mu_n)^\top
\]
where \(S_n\) is the set of points assigned to role \(n\).

The formation-clustering operator uses Earth Mover’s Distance. For normalized role histograms \(a\) and \(b\),
\[
\mathrm{EMD}(a,b)=\min_{f_{qt}\ge0}\sum_{q,t}d_{qt}f_{qt}
\]
subject to
\[
\sum_q f_{qt}=b_t,\qquad \sum_t f_{qt}=a_q
\]
[PAGE 5]. If \(a\) and \(b\) are normalized histograms, their entries are dimensionless probabilities; if the ground distance \(d_{qt}\) is Euclidean distance in meters, then EMD has units of meters. If histograms contain counts rather than probabilities, EMD has units of count-distance, e.g. player-frame meters. The paper sets the distance between formations equal to “the sum of the distances between corresponding roles” [PAGE 5], which assumes a correspondence between roles before comparison.

The dataset inventory gives exact scales: “Games 375”, “Data Points 480M”, and “Ball Events 981K” [PAGE 5]. The paper also states that ball events consist of “43 possible events (e.g. passes, shots, crosses, tackles etc.)” [PAGE 5]. These are useful verification anchors. If a downstream system claims to use the same dataset but reports a different number of games or ball events without accounting for omitted games, its data layer is suspect. The source itself says “Five of these games were omitted due to erroneous data ﬁles” [PAGE 4], so 380 originally scheduled team-games become 375 analyzed games [PAGE 5].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage of the paper is a move from trajectory logging to alignment-based multi-agent analysis. The introduction places sports tracking within a broader trajectory-data tradition, citing transportation, military, social, scientific, and hurricane-prediction applications [PAGE 2]. It then states the gap: “few methods for large-scale analysis of the tracking data have surfaced” [PAGE 2]. The paper’s historical pivot is not merely collecting more data; it is solving the alignment problem. The source explicitly contrasts identity-based representation with role-based representation: “the static assumption is not ideal as there is constant interchanging of positions” [PAGE 3]. This is the retro-causal hinge: earlier sports analytics often treated player identity as stable, but soccer’s continuous positional interchange makes identity alignment a poor causal primitive.

The direct intellectual ancestors are visible in the related-work section. The paper cites Intille and Bobick’s pre-aligned trajectories for American football [PAGE 3], codebook-based multi-agent recognition [PAGE 3], and role-based alignment by Lucey et al., which used “a codebook of manually labelled roles” [PAGE 3]. Bialkowski et al. also used role alignment for home advantage analysis, and Wei et al. clustered goal-scoring methods [PAGE 3-4]. The source distinguishes itself by saying: “our work differs as we learn this alignment directly from the data” [PAGE 4]. That sentence is the key retro-causal claim: manual role labels are replaced by minimum-entropy data partitioning.

The mathematical lineage is also explicit. The entropy-partitioning objective follows “the ideas of minimum entropy data partitioning” [PAGE 4], citing Roberts, Everson, and Rezek [32] and Lee and Choi [33]. The optimization uses the EM algorithm, citing Dempster, Laird, and Rubin [PAGE 4]. The assignment step uses the Hungarian algorithm, citing Kuhn [PAGE 4]. The formation comparison uses Earth Mover’s Distance, citing Rubner, Tomasi, and Guibas [PAGE 5]. This gives the paper a clean historical chain: information-theoretic partitioning, probabilistic latent assignment, combinatorial matching, and optimal transport.

There are also multi-week or multi-match traps embedded in the method’s own assumptions. The first trap is temporal aggregation. A season-long role distribution can look stable while individual players switch roles constantly. The paper shows this with the left-wing/right-wing example: “given we have a player who starts on the left-wing but then half way through the half he switches to the right wing” [PAGE 2]. If an analyst aggregates over too long a period, the swap disappears. The paper’s own mitigation is shorter windows: “Using a sliding window of 5 minutes on the role assigned player positions” [PAGE 6], and smoothing “to ignore temporary role swaps” [PAGE 7]. The multi-week trap is to mistake a long-window average for a stable tactical identity.

A second multi-week trap is roster instability. The source says identity-based representation “breaks down when there is a substitution, an expulsion of a player due to misconduct (i.e., red-card in soccer), or when comparing different teams” [PAGE 3]. Over multiple weeks, lineups change because of transfers, injuries, suspensions, and rotation. A model that persists role identities across weeks without re-estimation will conflate personnel change with role change. The paper avoids this partly by discovering formations per team and per match half [PAGE 5], but any cross-match longitudinal claim must re-estimate or explicitly model roster variation.

A third trap is formation-label drift. The paper compares discovered clusters to expert labels such as “4-4-2, 4-2-3-1, 4-3-3, 3-4-3, 4-1-4-1, or ‘other’” [PAGE 6]. These labels are coarse strategic descriptions. The paper notes that “the most confusion is in Cluster 6 which appears to be a 4-1-3-2 formation … often being classified as a 4-4-2 and 4-3-3” [PAGE 6]. Over multiple weeks, teams may move between these labels without changing their underlying role geometry. The retro-causal trap is to treat the expert label as ground truth for the latent spatial process, when the paper’s own role distributions are more granular than the label vocabulary.

The final retro-causal lesson is that the paper’s contribution is an alignment primitive, not a complete causal theory of match outcomes. It gives a way to compare players by role at each frame, and to compare formations by role distributions. But it does not directly define winning probability, fatigue, pressure, or adversarial intent. Those quantities must be introduced by later layers with separate evidence. The source’s safe lineage is: raw tracking → alignment → role densities → formation clusters → contextual player comparison.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive theory-of-mind issue in this source is not about explicit opponent modeling; it is about the modeler’s belief about what a player’s position means. Level 0 is the raw position: \(x_{i,t}\). Level 1 is the player identity: “this is player \(i\)”. Level 2 is the role representation: “player \(i\) is currently occupying role \(n\)”. Level 3 is the formation representation: “the team’s role set is \(F\)”. Level 4 is the tactical interpretation: “the team is using a 4-4-2-like structure”. The source’s main claim is that Level 2 is necessary for fair comparison because “a player to be assigned multiple roles throughout the match, but only one per frame” [PAGE 3]. Without Level 2, Level 3 and Level 4 become unstable.

Crisis habit regression occurs when an analyst, under time pressure, collapses Level 2 back into Level 1. The paper’s motivating example is exactly this failure: “Current analysis conducts the analysis based on his original position or ‘role’ (i.e., left-wing) which makes comparisons challenging” [PAGE 2]. In a live broadcast or rapid scouting setting, the habitual shortcut is to use starting position, jersey identity, or season-average position. The source’s counter-trap is the per-frame role permutation:
\[
r_t=P_t x_t
\]
[PAGE 3]. This forces the analyst to ask “where is this player relative to teammates now?” rather than “who is this player usually?” The recursive mind correction is: do not model the player as a fixed label; model the player as a sequence of frame-local assignments to a role set.

The clock matters because role assignment is temporally indexed. The source logs positions at “10 frames-per-second” [PAGE 4]. That gives a natural clock for within-match dynamics. But the formation-discovery object is per half: “for each team and match half” [PAGE 5]. The visualization layer then uses a five-minute sliding window [PAGE 6], and the smoothed role timeline uses five-minute smoothing to ignore temporary swaps [PAGE 7]. Thus the same data supports at least three temporal regimes: frame-level assignment, half-level formation estimation, and five-minute tactical visualization. A recursive model must specify which clock it is using. If it uses frame-level role swaps to infer half-level formation, it overreacts to temporary movements. If it uses half-level formation to infer frame-level role identity, it underreacts to tactical rotation.

A deeper recursive trap is adversarial. The paper says roles depend on “the tactics/strategy of the coach as well as the behavior of the adversarial (i.e., opposing) team” [PAGE 2]. If a coach knows that opponents cluster formations by role geometry, the coach may deliberately deform spacing to make role distributions overlap. In formal terms, the opponent may try to increase
\[
\sum_{n=1}^{N}H(x\mid n)
\]
by making role distributions less compact or more overlapping. This does not break the model mathematically, but it reduces separation. The modeler must then distinguish three hypotheses: (1) roles are genuinely ambiguous; (2) tracking noise has increased; (3) the team is intentionally compressing role separation. The source does not provide a unique test for intent, but it does provide the entropy and overlap operators needed to detect ambiguity.

The source also exposes a broadcast-level recursive shortcut. It notes that broadcasters show “the possession duration of both teams over the past 5 minutes” but that this “does not give any information about where this is happening” [PAGE 6]. The habit regression is to treat possession time as a one-dimensional dominance signal. The counter-trap is to condition possession on role geometry: which roles are occupying which zones while possession is held. The clock is the five-minute window. If possession rises but the team’s role distributions collapse into a narrow low-entropy cluster, the model should not infer dominance without checking spatial compression. If possession rises while role separation remains high and attacking roles advance, the evidence is stronger.

In summary, the recursive theory of mind here is: model the analyst’s tendency to freeze roles, model the coach’s tendency to manipulate role geometry, and model the opponent’s tendency to exploit role regularity. The source’s per-frame permutation, entropy objective, and multi-scale windows are the formal defenses against those regressions.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The cross-layer veto adjudication treats the source as a stack of layers. Layer 0 is physical tracking. Layer 1 is frame-level role assignment. Layer 2 is role-density formation estimation. Layer 3 is formation clustering. Layer 4 is tactical interpretation. A higher-layer claim is valid only if all lower layers pass formal consistency checks. If any lower layer fails, the higher-layer claim must be vetoed.

Layer 0 physical veto proof. Let \(p_{i,t}=(x_{i,t},y_{i,t})\) be the observed position of player \(i\) at frame \(t\). For a regulation soccer pitch, define the valid spatial domain
\[
\mathcal{P}=[0,L]\times[0,W]
\]
where \(L\) is pitch length and \(W\) is pitch width in meters. A necessary physical condition is
\[
p_{i,t}\in\mathcal{P}
\]
for all active players and frames. If any assigned player position lies outside \(\mathcal{P}\) by more than a sensor tolerance \(\epsilon_{\mathrm{loc}}\), the tracking layer is vetoed for that frame. The source’s normalization step says the authors “negate the effects of translation by normalizing the tracking data to have zero mean in each frame, and set teams to attack from left to right” [PAGE 4]. That normalization is valid only after raw positions have passed the physical bounds check. If normalization is applied to corrupt coordinates, it can hide impossible positions by centering them around zero.

Define implied velocity
\[
v_{i,t}=\frac{p_{i,t}-p_{i,t-1}}{\Delta t}
\]
with \(\Delta t=0.1\ \mathrm{s}\) for 10 Hz data [PAGE 4]. A biomechanical veto requires
\[
\|v_{i,t}\|\le v_{\max}
\]
for all frames, where \(v_{\max}\) is a domain-appropriate maximum human locomotion speed. If tracking produces impossible jumps, the role assignment should be vetoed because the cost matrix will assign roles based on nonexistent positions. A softer version is to allow short interpolation gaps, but if the fraction of missing or outlier frames exceeds a predeclared threshold \(\eta\), the role density estimates become unreliable. The source does not specify such a threshold, so any downstream use must declare one.

Layer 1 role-assignment veto proof. The source defines the role representation as a permutation of identity coordinates:
\[
r_t=P_t x_t
\]
[PAGE 3]. A valid permutation must satisfy:
1. one role per player per frame;
2. one player per role per frame;
3. active player count equals role count.

The paper excludes formations where players were sent off: “excluding formations where players were sent off” [PAGE 5]. This is a direct veto rule. If a red card reduces a team to ten active players, an eleven-role assignment is invalid unless the model explicitly merges, removes, or marks a missing role. If the model silently reports eleven roles, the permutation constraint is violated. Formally, let \(m_t\) be the number of active players. A valid role assignment requires
\[
m_t = |F_t|
\]
where \(F_t\) is the active role set. If \(m_t\neq |F_t|\), the assignment is invalid.

Layer 2 formation-density veto proof. The entropy objective
\[
F^*=\arg\min_F\sum_{n=1}^{N}H(x\mid n)
\]
[PAGE 4] assumes each role density is estimable. If a role has too few assigned frames, its empirical density is high variance. If a role density has support disjoint from the team density, the KL penalty diverges:
\[
\mathrm{KL}(P_n\parallel P)=+\infty
\]
If a Gaussian covariance is singular,
\[
\det\Sigma_n=0
\]
the role density is degenerate. If two role densities are identical,
\[
P_i(x)=P_j(x)
\]
the role labels are non-identifiable. These are exact breakdown regimes. A formation claim based on roles that are non-identifiable or degenerate must be vetoed.

Layer 3 clustering veto proof. The paper uses EMD between role histograms:
\[
\mathrm{EMD}(a,b)=\min_{f_{qt}\ge0}\sum_{q,t}d_{qt}f_{qt}
\]
with normalization constraints [PAGE 5]. For EMD to be a distance, the ground distance \(d_{qt}\) should satisfy metric properties, and the histograms should be normalized. If role histograms are not normalized, the transportation constraints no longer compare distributions on the same scale. If the ground distance is not Euclidean or otherwise meaningful on the normalized pitch, cluster distances may be arbitrary. The paper’s clustering result reports “Cluster 2 … approximately 50.37%” [PAGE 5] and “overall correct classification rate of 75.33%” [PAGE 6]. These are validation anchors, but they do not override lower-layer vetoes.

Weather veto proof. The source does not include a weather operator. It uses Prozone tracking data [PAGE 4] and does not model rain, wind, temperature, or pitch degradation. Therefore, weather cannot be used as a positive tactical operator in this source. It can only enter as an observation-layer perturbation. Suppose weather induces additional localization noise with covariance \(\Sigma_w\). The observed density becomes a convolution or noisy version of the true density. If the noise scale is small relative to role separation, role assignment is robust. If the noise scale is large enough that role distributions overlap, the entropy objective cannot distinguish roles. A formal veto condition is that the Mahalanobis separation between role means,
\[
\Delta_{ij}^2=(\mu_i-\mu_j)^\top\Sigma^{-1}(\mu_i-\mu_j)
\]
falls below a predeclared threshold. If weather-driven noise causes this condition, any formation claim from that period must be vetoed. Because the source provides no weather metadata, the conservative adjudication is: no weather-based tactical inference is allowed unless external data-quality evidence proves that the tracking layer remained valid.

The final cross-layer adjudication is therefore strict: the source supports role-based alignment and formation clustering only when physical tracking is valid, the permutation constraint is satisfied, role densities are nondegenerate, EMD normalization is correct, and no unobserved observation-layer perturbation has destroyed role separation. Any higher-level claim about player quality, tactical superiority, or match dominance must be vetoed if these lower-layer conditions fail.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
The following are three verifiable RLVR-style veto scenarios. In each case, the reward or validation signal is not a betting market or informal preference; it is a reproducible structural test derived from the source’s own operators.

Scenario 1: Red-card or substitution cardinality veto.
Setup: A team has a red card at minute \(t_0\). The active player count becomes ten. The source’s role representation assumes a one-to-one permutation for the role set. The paper explicitly excludes sent-off formations from formation discovery: “excluding formations where players were sent off” [PAGE 5].
Formal test: For each frame after \(t_0\), compute active player count \(m_t\). Let \(R_t\) be the set of roles assigned by the model. The model passes only if
\[
m_t = |R_t|
\]
or if the model explicitly represents a missing role with a special state.
Prediction: If the model continues to output eleven distinct active roles after the red card, the role-assignment layer is invalid. If the model drops, merges, or flags the missing role, the layer is admissible.
Veto condition: A downstream claim that uses eleven-role features after a red card without a missing-role state is vetoed.
Verifiable artifact: Frame-level active-player count and role-assignment table. The test can be rerun from tracking data and match event logs.

Scenario 2: Left-wing/right-wing swap veto.
Setup: The paper’s motivating example is a player who “starts in the left-wing position but changes half way through the half to the right-wing” [PAGE 2]. An identity-mean model predicts that the player’s touch heatmap will remain centered near the original left-wing mean. A role model predicts that the player’s role label will transition from LW to RW and that role-conditioned touch locations will separate.
Formal test: Let \(e_k\) be event locations for the target player. Let \(z_k\) be the assigned role at event time. Compute within-role variance and between-role mean separation. If the role model is valid, the event cloud should split into two role-conditioned components:
\[
\mathrm{Var}(x\mid z=\mathrm{LW}) + \mathrm{Var}(x\mid z=\mathrm{RW})
\]
should be substantially lower than the unconditioned variance
\[
\mathrm{Var}(x)
\]
and the role means should be spatially separated.
Prediction: The role representation should color the same player’s events as both left-wing and right-wing during different intervals, as illustrated by “the players playing left wing and right wing swap roles for part of the match” [PAGE 6]. The identity-mean representation should fail to represent the swap without post hoc segmentation.
Veto condition: If a model assigns the player only the starting role despite event locations crossing to the opposite flank, the role layer is vetoed for that player-half.
Verifiable artifact: Event locations, timestamps, assigned roles, and role-conditioned scatterplots.

Scenario 3: Formation-cluster EMD validation veto.
Setup: The paper discovers 1411 formations and clusters them using EMD between role distributions [PAGE 5]. It compares clusters to expert labels and reports “an overall correct classification rate of 75.33%” [PAGE 6]. It also reports cluster frequencies such as “Cluster 2 … approximately 50.37%” [PAGE 5].
Formal test: Recompute the EMD distance matrix between formation role histograms. Verify normalization:
\[
\sum_i a_i = 1,\qquad \sum_j b_j = 1
\]
and verify the transportation constraints from the source [PAGE 5]. Then recompute cluster assignments and the confusion matrix against expert labels. The model passes if the majority label in each cluster is stable under small perturbations of role centroids and if the overall agreement is near the reported benchmark.
Prediction: If the role distributions are valid, clusters corresponding to 4-4-2-like, 4-2-3-1-like, and 3-defender structures should remain separated under small perturbations. The paper already notes that “there is some confusion between the 4-4-2 and 4-2-3-1 formations when the second striker is positioned slightly behind the other” [PAGE 6]. Therefore, a small striker-depth perturbation should cause measurable EMD change but not necessarily a cluster flip.
Veto condition: If EMD distances violate normalization, if the ground distance is not meaningful on normalized field coordinates, or if cluster labels change drastically under negligible perturbation, the formation-clustering layer is vetoed.
Verifiable artifact: Role histograms, EMD distance matrix, cluster assignments, expert-label confusion matrix, and perturbation curves.

These three veto scenarios are verifiable because they rely on frame counts, role labels, spatial coordinates, normalized histograms, and reproducible clustering distances. They do not require unobserved tactical intent. They only require that the source’s own formal operators remain consistent under counterfactual changes: missing players, role swaps, and small geometric perturbations.
</RLVR_COUNTERFACTUAL_VETOES>