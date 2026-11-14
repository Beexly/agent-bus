---
source: "2017 Possession Sketches - Mapping NBA Strategies.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 13
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4379
---

<NATIVE_REASONING>
The user wants a deep analysis of the provided research paper "Possession Sketches: Mapping NBA Strategies" (2017). They've provided the full text across 13 pages (though the markdown seems to cover pages 1-12 based on the footer markers).

I need to follow STRICT INVARIANTS:
1. ZERO BETTING LINES: No spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. Must state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE> (>=400 words)
   - <SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES> (3 verifiable RLVR veto scenarios + predictions)

Let me carefully parse the source text for page citations. The text has page footers like:
- Page 1: after intro start
- Page 2: after Figure 1
- Page 3: after Figure 2
- Page 4: after Figure 3 / LDA intro
- Page 5: footnote about vocabulary
- Page 6: Figure 4, footnote 2
- Page 7: Figure 5, Figure 6 start
- Page 8: Figure 6 continued, Figure 7 start
- Page 9: Figure 7 continued
- Page 10: Discussion, References start
- Page 11: References continued
- Page 12: Appendix A.1, A.2
- Page 13: probably end of appendix (not shown in text but user says 13 pages)

Actually looking at the text, I see page markers like "2017 Research Papers Competition Presented by: 1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12". So pages 1-12 are visible, and user says PAGES: 13. I'll cite what I can see and note page 13 if needed (maybe appendix continues). But I should stick to exact [PAGE N] markers from the provided text.

Key formal content to extract:
- Segmentation: low-velocity moments > 0.25 seconds below threshold 0.1 feet per second. Cut trajectories into segments. Average 2.25 seconds, interior 95% range 0.6 to 7.96 seconds. Roughly 4.5 million segment observations from N = 190,000 possessions (2014-2015 NBA season). [PAGE 2]
- Action templates: V = 250 discrete actions. Each template is a Bezier curve B(t): [0,1] -> R^2. Parameterized by theta_v in R^{P x 2}, P = 10 control points. [PAGE 3, PAGE 12]
- Possession model: LDA with K = 100 topics. Vocabulary of pair-actions (v_i, v_j) where v_i, v_j in {1,...,V} and v_i = v_j (actually text says v_i = v_j but probably means v_i != v_j? Wait: "where each 'word' in the vocabulary is a unique pair of of the V actions, (vi, vj) for vi, vj ∈{1,...,V} and vi = vj." That looks like a typo in the paper; likely means vi ≠ vj or maybe including self-pairs. I should quote verbatim and note the singularity/ambiguity.)
- LDA details: K topics phi_k, each distribution over actions. Possession-specific proportions pi^(n). M_n total actions present in possession n (fixed constant). Stochastic variational inference [9]. [PAGE 12]
- Sparsity: on average only 8 of 100 entries non-zero. [PAGE 6]
- t-SNE visualization of 100-dimensional topic vectors to 2D. [PAGE 7]
- Warriors map: over 6,000 possessions. Weave plays: 40 hand-labeled. Average distance between weave plays much smaller than weave vs non-weave. Nearest neighbor of each weave play is most often itself a weave play. [PAGE 7]
- Corner threes: Warriors, Rockets, Spurs. [PAGE 8-9]

Now for the sections:

THINK_TRACE: Deep multi-hop derivation & gray-zone audit (>=400 words). I need to discuss the method's logical dependencies, potential failure modes, gray zones (e.g., the pair-action vocabulary ignores temporal order beyond simultaneity, the v_i = v_j ambiguity, low-velocity segmentation threshold sensitivity, t-SNE local vs global distance preservation, sparsity implying each possession only uses ~8% of strategy dictionary, etc.).

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown. I'll write out:
- Segmentation rule: cut when v(t) < 0.1 ft/s for > 0.25 s.
- Segment count: N_poss = 190,000; segments ~4.5e6; mean duration 2.25 s; 95% range [0.6, 7.96] s.
- Bezier template: B_v(t; theta_v) = sum_{p=1}^{P} theta_{v,p} * DP_p(t), theta_v in R^{10x2}, t in [0,1], output in R^2 (feet presumably, since velocity in ft/s).
- Clustering: mixture of V=250 Bezier curves. Each segment assigned integer v in {1,...,250}.
- Pair-action vocabulary: words are pairs (v_i, v_j), v_i, v_j in {1,...,V}, with the text stating v_i = v_j (likely typo for != or inclusive). Possession n represented as count vector c^(n) in N^{V x V} or flattened.
- LDA: K=100 topics. phi_k in simplex over pair-actions (dimension V^2 or V(V+1)/2). pi^(n) ~ Dirichlet(alpha). z_mn ~ Categorical(pi^(n)). w_mn ~ Categorical(phi_{z_mn}). M_n fixed.
- Inference: stochastic variational inference (Hoffman et al. 2013).
- Dimensionality reduction: t-SNE mapping R^100 -> R^2 preserving local distances.
- Sparsity: mean 8 non-zero entries out of 100.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps. LDA lineage: Blei et al. 2003, Griffiths & Steyvers 2004. Trajectory clustering from computer graphics (Bezier curves, animation/videogame design). EPV models Cervone et al. 2014. Counterpoints Franks et al. 2015. Chalkboarding Sha et al. 2016. Multi-week traps: if an analyst treats a possession sketch topic as stable across weeks, but offensive sets evolve; the "weave" cluster might dissolve as opponents scout it; the low-velocity segmentation may break down in fast-break vs half-court contexts across weeks.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is a bit abstract but relates to how teams/players regress to habits under crisis (end of clock, close game), how the model captures this, and counter-traps (defenses anticipating the "weave" etc.). The possession sketch ignores temporal information (trade-off), so it cannot capture end-of-clock breakdown from "weave" to something else (mentioned in future work). Coaches adjust (counter-trap) to topics. Players have crisis habits (e.g., Harden drive-and-kick). The model's static snapshot may miss in-possession regime switches.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Indoor basketball, weather is null (controlled environment). Physical: court dimensions standard (94x50 ft), rim height 10 ft. Biomechanical: low-velocity threshold 0.1 ft/s is below normal walking (~3-4 ft/s), so cuts detect stops/screens. However, fatigue may alter movement templates across a game (4 quarters), but model treats all possessions equally; no player-specific fatigue state. Veto: if a player is injured or fatigued, their Bezier template distribution shifts, violating the shared dictionary assumption. Weather veto: not applicable (indoor), but arena humidity/temperature could affect shoe grip minimally—outside model scope.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or just verifiable scenarios. I'll frame as counterfactual interventions that would falsify the model's assumptions.
1. Veto: Shuffle the temporal order of pair-actions within a possession while preserving counts. Prediction: If LDA topics still fit equally well (same perplexity/held-out likelihood), then temporal co-occurrence structure is spurious; the model is only capturing marginal action frequencies, not sequential strategy.
2. Veto: Apply the model to a single team's possessions vs. the full league dictionary trained on all teams. Prediction: Cross-team nearest neighbors (Figure 6) will degrade; team-specific action templates (e.g., Spurs' motion vs. Warriors' pace) will not align under a shared V=250 dictionary, indicating the shared vocabulary imposes a false commonality.
3. Veto: Perturb the low-velocity segmentation threshold from 0.1 ft/s to 0.5 ft/s or 0.01 ft/s. Prediction: The number of segments per possession and average duration will shift outside the 0.6–7.96 s interior 95% range; action templates will fragment or merge, and the "weave" cluster in Figure 5a will disperse, showing segmentation is a critical singularity point.

Word count: Need >=1000 words total across sections. THINK_TRACE alone >=400. I'll aim for substantial depth.

Let me draft carefully, ensuring no betting lines. No mentions of odds, spreads, etc. This is purely analytical.

I need to include verbatim quotes with [PAGE N]. Let me find exact quotes:
- Page 2: "At sustained moments of low velocity ( > .25 seconds below a threshold of .1 feet per second), we cut the possession"
- Page 2: "The resulting short segments are on average 2.25 seconds (the interior 95 percentiles ranges from 0.6 to 7.96 seconds). Applying this preprocessing step to the full 2014-2015 regular season creates a data set of roughly 4.5 million segment observations."
- Page 2: "We analyze a database of player-tracks from the 2014-2015 season of the NBA. The data are organized into over N = 190 , 000 possessions"
- Page 3: "Each template can be thought of as a cluster center in a clustering model — each trajectory segment is centered around a cluster with some deviation. We specify each template as a Bezier curve – a tool commonly used to model movement in the computer graphics community – which specifies a function B ( t ) that maps time to a two-dimensional point, B : [0 , 1] → R2 ."
- Page 3: "Figure 2 depicts a sampling of learned templates resulting from fitting a mixture of V = 250 Bezier curves"
- Page 4: "We use Latent Dirichlet Allocation (LDA) [2], a topic model for unsupervised structure discovery in a corpus of text documents."
- Page 4: "In this work, we use a vocabulary of pair-actions, where each “word” in the vocabulary is a unique pair of of the V actions, ( vi, vj ) for vi, vj ∈{ 1 , . . . , V } and vi = vj ." (verbatim, note the likely typo)
- Page 6: "Sparsity We also notice that each possession topic vector is quite sparse — on average only 8 of the 100 entries are non-zero (on average)."
- Page 7: "Figure 5 visualize all warriors possessions in 2014-2015."
- Page 7: "We hand-label 40 weave plays in the 2014-2015 season"
- Page 7: "The average distance between the known weave plays is much smaller than the average distance between weave and non-weave plays. In fact, the nearest neighbor of each weave play is most often itself a weave play"
- Page 8: "We first sub-select the 2014-2015 data to possessions that include corner three-point shots for three teams: the Warriors, the Rockets, and the Spurs."
- Page 12: "More control points allow for more flexibility in fitting shapes — we use 10 control points in our experiments"
- Page 12: "where Mn is the total number of actions present in possession n (a fixed constant)."

I'll use these.

Structure:
<THINK_TRACE> ... >=400 words ... </THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS> ... </SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY> ... </RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND> ... </RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION> ... </CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES> ... </RLVR_COUNTERFACTUAL_VETOES>

No markdown heading conflicts needed but I'll just use the XML tags.

Let's write.

THINK_TRACE: Discuss derivation chain:
1. Raw tracks -> segmentation via low velocity. Gray zone: threshold 0.1 ft/s for >0.25s. Why this value? Not derived from biomechanics, chosen empirically. If a player slows but doesn't stop (e.g., lingering off-ball), segment boundary may cut mid-action. Sensitivity analysis absent.
2. Segments -> Bezier templates via EM on 4.5M segments. Gray zone: V=250 fixed, not inferred; P=10 control points fixed. Singularity if action set is non-stationary across season (coaching changes).
3. Pair-action bag: ignores order, only simultaneity. Gray zone: text says v_i = v_j which is mathematically odd (probably means != or diagonal allowed). This breaks the "pair" intuition if self-pairs dominate.
4. LDA K=100: each possession is mixture over topics. Sparsity: mean 8/100 non-zero. Gray zone: Dirichlet prior alpha not reported; sparse output may be artifact of prior rather than basketball reality.
5. t-SNE: local distances preserved, global not. Gray zone: nearest neighbor in 2D may not be nearest in 100D; Figure 6 cross-team similarity could be a projection artifact.
6. Multi-hop: from raw pixels to strategy topics involves at least 5 lossy compressions. Each is a potential veto point.

I'll make sure it's >400 words.

SOURCE_OPERATORS_AND_EQUATIONS: List equations in LaTeX.

RETROCAUSAL_GENEALOGY: LDA (Blei 2003, 2012), Bezier/graphics, EPV (Cervone), Chalkboarding (Sha 2016). Multi-week traps: opponent adjustment, roster changes, fatigue drift.

RECURSIVE_THEORY_OF_MIND: Crisis habits: end-of-shot-clock, close games. Counter-trap: defense learns weave. Clock: shot clock, game clock. The model's static bag-of-pair-actions cannot represent "started out in a weave but broke down" (future work, page 10). Recursive ToM: offense expects defense to expect weave, so runs counter-action; model sees only the final pair-action bag, not the mental iteration.

CROSS_LAYER_VETO_ADJUDICATION: Physical: standard court 94x50 ft, velocity ft/s. Biomechanical: 0.1 ft/s threshold ~ stationary; normal movement >1 ft/s. Veto if player is injured/fatigued (template drift). Weather: indoor, null set; no weather veto. Arena altitude? Not in paper.

RLVR_COUNTERFACTUAL_VETOES: Three scenarios as above.

Let's write it out fully now, watching word count.

I need to be careful: The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." The source text includes page footers. I'll cite [PAGE 2], [PAGE 3], etc.

I'll produce the final response now.
</NATIVE_REASONING>

<THINK_TRACE>
The derivation chain in “Possession Sketches” is a sequence of five lossy compressions, each introducing a gray-zone vulnerability that the paper does not stress-test. First, raw NBA optical tracking trajectories from the 2014–2015 season (N = 190,000 possessions [PAGE 2]) are segmented at “sustained moments of low velocity ( > .25 seconds below a threshold of .1 feet per second)” [PAGE 2]. This threshold is an engineering choice, not a biomechanical derivation: 0.1 ft/s is roughly one-tenth of a casual walking pace, so a defender sliding laterally at 0.8 ft/s or an offensive player “camping” in the corner with micro-adjustments will trigger a cut, while a slow post-up pivot at 0.08 ft/s may be merged into the previous segment. The paper reports segment durations averaging 2.25 seconds with an interior 95-percentile range of 0.6 to 7.96 seconds [PAGE 2], but provides no sensitivity analysis for the 0.1 ft/s / 0.25 s threshold. If the threshold shifts, the segment count (~4.5 million [PAGE 2]) and the template dictionary change, meaning all downstream inferences are conditional on an unreported hyperparameter.

Second, each segment is modeled as one of V = 250 Bezier-curve templates, B_v(t) : [0,1] → R² [PAGE 3], fit by expectation-maximization with P = 10 control points [PAGE 12]. The fixed cardinality V = 250 is not inferred via Bayesian nonparametrics, despite the paper’s own future-work section suggesting exactly that extension [PAGE 10]. If offensive structures drift across the season (e.g., a coaching change in January), the shared dictionary becomes a singularity: templates trained on November data may misrepresent February possessions, but the model has no mechanism to detect regime change.

Third, the possession representation collapses each play into a “bag of simultaneous pair-actions” [PAGE 4], where a word is a pair (v_i, v_j) with v_i, v_j ∈ {1,…,V} and the paper literally states “and v_i = v_j” [PAGE 4]. Verbatim, this is likely a typographical error for v_i ≠ v_j, but as written it collapses the pair vocabulary into either ordered pairs including self-pairs or an ambiguous diagonal-inclusive set. Because the representation is a bag, temporal order within a possession is discarded; a drive-then-kick and a kick-then-drive produce identical counts if the same pair-actions overlap simultaneously. This is a structural blind spot for sequential scouting queries.

Fourth, Latent Dirichlet Allocation with K = 100 topics maps each possession to a sparse 100-dimensional topic-loading vector [PAGE 6]. Sparsity is pronounced: “on average only 8 of the 100 entries are non-zero” [PAGE 6]. Whether this sparsity reflects genuine basketball parsimony or an artifact of the Dirichlet prior is unknowable from the text because alpha is never reported. Finally, t-SNE projects the 100-dimensional sketches to 2D for visualization [PAGE 7], preserving local distances but explicitly not guaranteeing global geometry [PAGE 7]. The cross-team nearest neighbor in Figure 6 [PAGE 8] could therefore be a projection artifact rather than a true high-dimensional structural match. Each compression is a veto point: segmentation thresholding, fixed dictionary size, pair-action bagging, LDA prior specification, and t-SNE locality. The paper’s strongest empirical claim—that weave plays cluster together with smaller intra-cluster distances than weave-to-non-weave distances [PAGE 7]—survives these compressions, but the model cannot yet distinguish whether a possession “started out in a ‘weave’ set, but broke down into a different sequence” [PAGE 10], which is exactly the failure mode that matters most in late-clock execution.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
**Segmentation operator.** Let x^(j_n) ∈ R² denote the smoothed trajectory of offensive player j in possession n. Define speed v(t) = ||dx/dt||₂ in feet per second. A cut is inserted at time t* when v(t) < 0.1 ft/s for a sustained duration Δt > 0.25 s [PAGE 2]. This partitions x^(j_n) into S segments {x^(j_n,1), …, x^(j_n,S)}. Across the 2014–2015 regular season, N = 190,000 possessions yield approximately 4.5 × 10⁶ segment observations; mean segment duration = 2.25 s, interior 95% range [0.6 s, 7.96 s] [PAGE 2].

**Action-template operator.** Each template is a Bezier curve B_v(t; θ_v) = Σ_{p=1}^{P} θ_{v,p} · DP_p(t), where θ_v ∈ R^(P×2), P = 10 control points, t ∈ [0,1], and B_v maps to R² (court coordinates in feet) [PAGE 3, PAGE 12]. A mixture of V = 250 Bezier components is fit to the segment set; each segment is assigned a discrete action label v ∈ {1, …, 250} [PAGE 3].

**Pair-action vocabulary.** For a possession, at each moment enumerate all unique simultaneous pairs of active player actions. A “word” is (v_i, v_j), v_i, v_j ∈ {1, …, V}; the manuscript states “and v_i = v_j” [PAGE 4], which is either a typo for v_i ≠ v_j or an admission that self-pairs are included. The possession is represented as a count vector c^(n) ∈ ℕ^(V×V) flattened over pair-action types.

**Possession topic model (LDA).** K = 100 topics. Each topic k is a distribution φ_k over the pair-action vocabulary. Possession n has latent proportions π^(n) over topics. For each of M_n actions (fixed constant) [PAGE 12]: draw topic z_mn ~ Categorical(π^(n)), then draw pair-action w_mn ~ Categorical(φ_{z_mn}). Global topics Φ and possession-specific π^(n) are inferred by stochastic variational inference [9] [PAGE 12]. Sparsity diagnostic: mean non-zero entries per possession topic vector = 8 out of 100 [PAGE 6].

**Visualization operator.** t-SNE maps the 100-dimensional simplex vector π^(n) to R², emphasizing preservation of local distances while not guaranteeing global distance fidelity [PAGE 7].

**Breakdown regimes / singularities.** (i) Segmentation singularity: if velocity threshold or sustained-duration window is altered, segment durations exit [0.6 s, 7.96 s], fragmenting or merging templates and invalidating the V = 250 dictionary alignment. (ii) Dictionary singularity: V = 250 fixed; non-stationary offensive schemes across the season violate the shared-action assumption. (iii) Temporal erasure singularity: bag-of-pair-actions cannot distinguish drive-then-kick from kick-then-drive when simultaneous overlap counts match. (iv) Projection singularity: t-SNE nearest neighbors in R² need not be nearest neighbors in the 100-D topic simplex.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s intellectual lineage is explicitly anchored in three domains. First, the topic-model layer descends from Latent Dirichlet Allocation (Blei, Ng, Jordan, 2003) and probabilistic topic models (Blei, 2012; Griffiths & Steyvers, 2004), cited as references [1], [2], and [8] [PAGE 10–11]. The authors adapt LDA from documents to basketball by treating possessions as documents and pair-actions as words [PAGE 4]. Second, the action-template layer borrows from computer graphics and animation: Bezier curves are described as “a tool commonly used to model movement in the computer graphics community,” and the paper’s framing explicitly references techniques common in “animation and videogame design” [PAGE 1, PAGE 3]. Third, the evaluation context engages the expected-possession-value literature: Cervone et al. (2014) EPV and Pointwise models [PAGE 10, refs [3],[4]], and defensive spatial analysis by Franks et al. (2015) “Counterpoints” [PAGE 10, ref [6]], plus Chalkboarding’s spatiotemporal query paradigm (Sha et al., 2016) [PAGE 10, ref [12]]. The authors position Possession Sketches as more global and data-driven than Chalkboarding’s point-wise trajectory similarities [PAGE 10].

Multi-week traps emerge directly from this genealogy. Because the dictionary of V = 250 Bezier templates and the K = 100 LDA topics are estimated once over the full 2014–2015 season, the model assumes offensive structure is stationary across weeks. In reality, NBA teams install and abandon sets on a weekly scouting cycle: a “weave” play that clusters tightly in November (Figure 5a [PAGE 7]) becomes a target for defensive counter-schemes in December, degrading the very cluster coherence the t-SNE map displays. The paper acknowledges this limitation in future work: the static possession sketch “ignores much of the temporal information in each possession” and cannot identify possessions that “started out in a ‘weave’ set, but broke down into a different sequence” [PAGE 10]. A multi-week deployment would therefore require rolling-window re-estimation of templates and topics, or a Bayesian nonparametric extension that infers V dynamically, neither of which is present in the 2017 manuscript.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Recursive theory of mind enters at the coach–player–defense strata. The possession sketch model treats each offense as emitting a bag of pair-actions drawn from topics, but it does not model the iterative expectations that generate those actions. In crisis situations—late shot clock, close game, end of quarter—players regress to high-frequency habits. For a ball-dominant initiator, the crisis habit may be a drive into the paint with a kick to a weak-side corner shooter [PAGE 8, left-pane corner-three cluster]. The defense, running a second-order model, anticipates that habit and traps the drive or sinks to the corner. The offense, anticipating the trap, executes a counter-action (e.g., a baseline cut toward the corner instead of a drive-and-kick [PAGE 9, right-pane cluster]). Possession Sketches can distinguish these two corner-three-generating structures post hoc via t-SNE clusters [PAGE 8–9], but because the model is a static bag of simultaneous pair-actions with no in-possession temporal dynamics, it cannot register the clock-dependent regression from “weave” to breakdown within a single possession [PAGE 10].

A counter-trap arises when the defensive coaching staff uses the same topic-map logic: if the “weave” topic is identifiable in the shared 100-dimensional space, the defense can pre-rotate to the pair-actions with highest probability under that topic [PAGE 4]. The offense’s recursive response is to inject low-probability pair-actions or to dilute topic loadings so the possession sketch falls outside the weave cluster. Because each possession sketch is sparse (mean 8 of 100 topics active [PAGE 6]), a small number of deliberate off-script actions can materially alter the topic vector, making the possession harder to classify. The clock operates as the external forcing function: as shot-clock time declines, the feasible action set shrinks, the probability mass concentrates on a fewer topics, and the sparse sketch becomes more predictable—exactly when the defense’s counter-trap is most dangerous. The paper’s framework captures the resulting structure only after the fact; it does not model the real-time clock-pressure recursion that generates it.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
**Physical layer.** NBA games occur indoors on standardized courts; velocity is measured in feet per second [PAGE 2]. There is no weather variable in the optical tracking data, so the weather veto set is null. The physical veto is instead geometric: the low-velocity segmentation threshold of 0.1 ft/s operates on a court where normal basketball movement (jogging, sliding, cutting) typically exceeds 1–3 ft/s. A stationary screen-setter or a player “camping out” in the corner [PAGE 8] sits below threshold and generates a segment boundary; any physical rule change altering court dimensions or the 3-second lane violation would shift low-velocity dwell times and break the segmentation operator’s calibration.

**Biomechanical layer.** The Bezier templates assume each action can be approximated by P = 10 control points over t ∈ [0,1] [PAGE 12]. This smoothness assumption vetoes abrupt, discontinuous movements: a player colliding, tripping, or being fouled produces a trajectory discontinuity that a single Bezier segment cannot represent without large deviation variance Σ_v. The clustering model includes per-action covariance Σ_v learned by maximum likelihood [PAGE 12], but if a key player is injured or fatigued, their individual trajectory distribution shifts away from the league-wide template mixture. Because the dictionary is shared across all players [PAGE 3], player-specific fatigue or injury introduces a covariate-shift veto: the same action label v may correspond to measurably different biomechanics for a fatigued versus fresh player, yet the model assigns both to the same template.

**Weather layer.** Null set. All 2014–2015 NBA regular-season possessions analyzed are indoors [PAGE 2]; humidity, temperature, and precipitation do not enter the tracking data or the segmentation/topic operators. No weather-based veto is applicable.

**Adjudication.** The model is valid only when (a) low-velocity dwell behavior is stationary across the sample, (b) actions are sufficiently smooth for 10-control-point Bezier approximation, and (c) no player-specific biomechanical drift invalidates the shared V = 250 dictionary. Violation of (a) triggers segmentation singularity; violation of (b) triggers template misfit; violation of (c) triggers covariate shift. None of these are tested in the source text.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
**Veto Scenario 1 — Temporal-order ablation.** Counterfactual: preserve each possession’s pair-action count vector c^(n) but randomly permute the temporal order in which pair-actions occur within the possession. Refit or re-evaluate the LDA topic model on the temporally scrambled corpus. Prediction: if held-out topic likelihood or weave-cluster coherence (as measured by average intra-weave distance vs. weave-to-non-weave distance in Figure 5b [PAGE 7]) does not degrade significantly, then the model’s topics are capturing only marginal pair-action frequencies, not sequential offensive structure. The “weave” cluster’s distinctiveness would collapse, falsifying the claim that possession sketches encode strategy beyond co-occurrence counts.

**Veto Scenario 2 — Single-team dictionary transfer.** Counterfactual: train the V = 250 Bezier action-template mixture exclusively on Golden State Warriors possessions (over 6,000 possessions [PAGE 7]), then apply that Warriors-specific dictionary to encode and cluster Brooklyn Nets or Chicago Bulls possessions without retraining. Prediction: cross-team nearest neighbors like the Chicago–Brooklyn pair in Figure 6 [PAGE 8] will disappear; the shared-topic space will no longer align structurally dissimilar teams. If cross-team similarity collapses, the league-wide V = 250 dictionary is imposing a false common ontology, and team-specific offensive languages are being forcibly compressed into a single latent space.

**Veto Scenario 3 — Segmentation-threshold perturbation.** Counterfactual: replace the sustained-low-velocity cut rule (v < 0.1 ft/s for > 0.25 s [PAGE 2]) with two extreme alternatives: (a) v < 0.5 ft/s and (b) v < 0.01 ft/s. Recompute segment durations and the 4.5-million-segment dataset. Prediction: under (a), average segment duration will rise above 2.25 s and the interior 95% range will shift above [0.6 s, 7.96 s], merging distinct actions and coarsening templates; under (b), segment duration will fall below 0.6 s, over-fragmenting trajectories and inflating V effective beyond 250. In either case, the t-SNE Warriors map (Figure 5a [PAGE 7]) will no longer show tight weave clustering because the action vocabulary itself has changed. This demonstrates that the reported strategic structure is conditional on an unreported, unvalidated segmentation singularity.
</RLVR_COUNTERFACTUAL_VETOES>