---
source: "2017 Possession Sketches Mapping NBA Strategies.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 14
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3518
---

<NATIVE_REASONING>
The user wants me to act as the GSE + GSI Frontier Reasoning Foundry and produce a deep analysis based on the provided source text (the "Possession Sketches: Mapping NBA Strategies" paper). I must strictly follow the invariants:

1. ZERO BETTING LINES: No spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to write at least 1000 words total across these sections, with THINK_TRACE alone being >=400 words.

The source text is pages 1-12 roughly (provided text includes page markers like page 1, page 2, etc. though some are implicit). Let me trace page numbers from the text:
- Page 1: Abstract, Introduction start.
- Page 2: Methods start, Data and preprocessing, Figure 1.
- Page 3: Action Templates, Figure 2.
- Page 4: Possession Model, Figure 3.
- Page 5: Analysis start, Figure 4.
- Page 6: Figure 5, Basketball Topics continued.
- Page 7: Possession Map Exploration.
- Page 8: Between Team Nearest Neighbors, Corner Threes, Figure 6.
- Page 9: Discussion, Figure 7.
- Page 10: References.
- Page 11: Appendix A.1.
- Page 12: Appendix A.2.

Actually looking at the text, there are explicit page footers like "1", "2", etc. Let me be careful with citations. I'll cite [PAGE 1] through [PAGE 12] as appropriate based on the text flow.

Key content to extract:
- N = 190,000 possessions from 2014-2015 NBA season [PAGE 2].
- Segmentation at sustained low-velocity (>0.25 seconds below threshold of 0.1 feet per second) [PAGE 2].
- Average segment 2.25 seconds, interior 95 percentiles 0.6 to 7.96 seconds [PAGE 2].
- Roughly 4.5 million segment observations [PAGE 2].
- V = 250 Bezier curves, each template B_v(t): [0,1] -> R^2 [PAGE 3, PAGE 11 Appendix].
- P = 10 control points [PAGE 12 footnote].
- Pair-actions vocabulary: vi, vj in {1,...,V}, vi=vj allowed, plus with/without ball -> 2*V actions [PAGE 4].
- Pair-actions appearing in at least 100 possessions -> ~25,000 unique pair-actions [PAGE 4].
- K = 100 topics [PAGE 5].
- Sparsity: average only 8 of 100 entries non-zero [PAGE 6].
- t-SNE visualization [PAGE 6, reference [10] on page 10].
- LDA data generating process [PAGE 11-12 Appendix].
- Stochastic variational inference [9] [PAGE 4, PAGE 12].

Now for the sections:

THINK_TRACE: Deep multi-hop derivation & gray-zone audit. Need >=400 words. I should discuss the derivation from raw trajectories to action templates to possession sketches, the mathematical assumptions, potential gray zones (e.g., bag-of-pair-actions ignores temporal ordering, t-SNE local distance preservation issues, low-velocity segmentation threshold sensitivity, sparsity implications, etc.).

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. I need to write out:
- Trajectory x^(j,n)
- Segmentation condition: sustained low velocity > 0.25s below 0.1 ft/s
- Bezier curve B_v(t; theta_v), theta_v in R^(P x 2), P=10
- Mixture model: x ~ sum pi_v N(B_v(t), Sigma_v) or similar
- Pair-action vocabulary size: (2V)^2 roughly, filtered by count >= 100 -> ~25,000
- LDA: pi^(n) ~ Dir(alpha), phi_k ~ Dir(beta), z_{n,m} ~ Categorical(pi^(n)), w_{n,m} ~ Categorical(phi_z)
- Sparsity: 8/100 non-zero
- Units: seconds, feet, feet per second, dimensionless counts, KL divergence.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps. LDA lineage (Blei et al. 2003, Griffiths & Steyvers 2004), Bezier curves from computer graphics/animation, EPV models (Cervone et al.), topic modeling in NBA, etc. Multi-week traps: overfitting to a single season (2014-2015), roster changes, coaching changes, scheme evolution across weeks.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is more abstract/metacognitive. I need to interpret "crisis habit regression" as teams falling back to habitual plays under pressure, "counter-trap" as defensive adjustments exploiting the modeled habits, "clock" as shot clock / game clock constraints interacting with the possession model. Theory of mind: offense modeling defense modeling offense.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Physical: court dimensions, player speed limits. Biomechanical: acceleration/deceleration, low-velocity cut detection threshold may misclassify slow screens as cuts. Weather: indoor arena, minimal weather, but HVAC/air density negligible. Veto conditions where model breaks down.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR (Reinforcement Learning via Verifiable Rewards?) veto scenarios + predictions. I should invent concrete counterfactuals:
1. If low-velocity threshold raised from 0.1 ft/s to 0.3 ft/s, segment count drops, template V=250 becomes under-segmented, topic coherence degrades. Prediction: KL divergence between weave and non-weave increases by >X.
2. If pair-action minimum support raised from 100 to 1000 possessions, vocabulary drops from ~25,000 to much smaller, rare but strategic actions (e.g., specific corner three setups) are vetoed. Prediction: t-SNE map loses separation between drive-and-kick vs baseline-cut clusters.
3. If K=100 reduced to K=10, sparsity constraint violated, possession sketches become dense and uninterpretable. Prediction: average non-zero entries rises from 8 to near 10, nearest-neighbor weave recall drops below 50%.

Must ensure no betting lines. Must ensure word count.

Let me start drafting. I need to be careful with page citations. The text has page footers. I'll reference them as [PAGE 1], [PAGE 2], etc.

Word count check: I'll aim for roughly 200-250 words per section to exceed 1000 total, with THINK_TRACE being the longest (~500 words).

Let's draft carefully.

THINK_TRACE (>=400 words):
Start with raw data: 190,000 possessions, 2014-2015 NBA. Segment by low velocity. The gray zone: threshold of 0.1 ft/s for >0.25s. This is arbitrary; screens, post-ups, and free-throw preparation all generate low velocity but are semantically distinct. Multi-hop: segment -> Bezier template -> action label (1 of 250) -> pair-action (simultaneous pair of two players' actions) -> bag of pair-actions -> LDA topic (1 of 100) -> possession sketch (sparse 100-d vector). Gray zones: bag-of-pair-actions discards temporal order (a screen then cut vs cut then screen become identical if simultaneous? Actually they count simultaneous pairs, so sequence is largely lost). t-SNE preserves local distances but global structure is distorted. Sparsity: 8/100 non-zero means most topics inactive; could indicate underfitting or true sparsity. Scalable inference via stochastic variational inference introduces optimization noise. Breakdown: if a possession has fewer segments than expected, pair-action counts become noisy; if a player is out of frame (tracking error), action templates misassign.

SOURCE_OPERATORS_AND_EQUATIONS:
Write LaTeX.
- Player trajectory: $\mathbf{x}^{(j,n)} = \{ (x_t, y_t) \}_{t=1}^{T_{j,n}}$
- Low velocity cut: $\exists \Delta t > 0.25\,\text{s}$ such that $\|\dot{\mathbf{x}}\|_2 < 0.1\,\text{ft/s}$
- Segment: $\mathbf{x}^{(j,n,s)}$, $s=1,\dots,S$, average duration $\bar{\tau}=2.25\,\text{s}$, 95% range $[0.6, 7.96]\,\text{s}$
- Bezier template: $B_v(t;\theta_v) = \sum_{p=0}^{P} \binom{P}{p}(1-t)^{P-p}t^p \theta_{v,p}$, $\theta_v \in \mathbb{R}^{P\times 2}$, $P=10$, $t\in[0,1]$
- Mixture: $p(\mathbf{x} \mid v) = \mathcal{N}(B_v(t); \Sigma_v)$, $\pi_v$ mixture weights
- Action label: $v \in \{1,\dots,250\}$
- Ball state: $b \in \{0,1\}$, augmented action space $2V=500$
- Pair-action: $(a_i, a_j) \in \{1,\dots,500\}^2$, support filter: count $\ge 100$ possessions -> $|\mathcal{V}_{\text{pair}}| \approx 25{,}000$
- LDA: $\boldsymbol{\pi}^{(n)} \sim \text{Dir}(\boldsymbol{\alpha})$, $\phi_k \sim \text{Dir}(\boldsymbol{\beta})$, $z_{n,m} \sim \text{Cat}(\boldsymbol{\pi}^{(n)})$, $w_{n,m} \sim \text{Cat}(\phi_{z_{n,m}})$, $M_n$ fixed pair-actions per possession
- Possession sketch: $\hat{\boldsymbol{\pi}}^{(n)} \in \Delta^{99}$ (100-simplex), sparsity: $\|\hat{\boldsymbol{\pi}}^{(n)}\|_0 \approx 8$
- Units: seconds, feet, ft/s, dimensionless probabilities, KL divergence in nats for Figure 5b.

RETROCAUSAL_GENEALOGY:
Lineage: LDA [Blei, Ng, Jordan 2003] [PAGE 10 ref], topic models [Blei 2012] [PAGE 10], Bezier curves from computer graphics/animation [PAGE 3], EPV stochastic process [Cervone et al. 2014] [PAGE 8 refs], defensive metrics [Franks et al. 2015] [PAGE 10], play classification neural nets [Wang & Zemel 2016] [PAGE 10]. Multi-week traps: single-season stationarity trap (2014-2015 only), coaching mid-season adjustments, player injuries/trades altering action vocabulary, playoff vs regular season intensity, opponent-specific scouting causing strategic drift across weeks.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: under pressure (late clock, close score), offense regresses to highest-frequency topics (dominant eigenvectors of LDA). Defense, possessing the same possession sketches, anticipates this regression and sets counter-traps (e.g., switching on high screens). Clock interaction: shot clock winds down -> low-velocity segments increase (stalling), segmentation cuts more frequently, action templates become distorted by end-of-clock desperation moves not represented in V=250 dictionary learned on full-season data. Theory-of-mind recursion: offense models defense modeling offense's sketch -> second-order topic shift.

CROSS_LAYER_VETO_ADJUDICATION:
Physical veto: court dimensions 94x50 ft; Bezier curves in R^2 assume flat court, no out-of-bounds constraints in template fitting. Biomechanical: max human acceleration ~3-4 m/s^2; low-velocity threshold 0.1 ft/s (~0.03 m/s) cannot distinguish a deliberate screen from a tracking glitch or a player tying shoe. Weather: indoor, climate-controlled; air density $\rho \approx 1.2\,\text{kg/m}^3$ constant, negligible drag on ball over possession timescales, so weather veto is null but HVAC microclimates could affect ball bounce (not modeled). Adjudication: if $\|\dot{\mathbf{x}}\| < 0.1$ ft/s due to injury stoppage, segment boundary creates spurious action template; veto condition: possession contains whistle/stoppage not in tracking data.

RLVR_COUNTERFACTUAL_VETOES:
Three scenarios:
1. Veto: raise low-velocity threshold from 0.1 ft/s to 0.3 ft/s. Prediction: segment count decreases by ~30-40%, templates merge (e.g., cut and stand become indistinguishable), topic sparsity breaks ($\|\pi\|_0$ rises from 8 to >15), weave-play nearest-neighbor recall drops from ~100% to <60%.
2. Veto: raise pair-action support from 100 to 1,000 possessions. Prediction: vocabulary shrinks from ~25,000 to <5,000, rare corner-three baseline-cut actions eliminated, t-SNE clusters for Rockets vs Spurs corner threes overlap completely (loss of cluster separation).
3. Veto: reduce LDA topics K from 100 to 10. Prediction: average non-zero entries per possession approaches 10 (dense), interpretability lost, distance between weave and non-weave plays in KL divergence falls below within-weave variance, making Figure 5b distributions indistinguishable.

I need to ensure no betting lines. None present.

Word count: Let's estimate. THINK_TRACE ~500. SOURCE ~250. RETROCAUSAL ~150. RECURSIVE ~150. CROSS ~150. RLVR ~150. Total ~1350. Good.

Need to include verbatim quotes where citing pages. I'll include a few.

Let's write it out.
</NATIVE_REASONING>

<THINK_TRACE>
The derivation proceeds through four nested representations, each introducing a gray zone where the basketball semantics can detach from the statistical object. Raw input is the 2014–2015 NBA player-tracking database: over N = 190,000 possessions [PAGE 2]. Each possession is a continuous trajectory x^(j,n) for offensive player j. The first operator is segmentation at moments of sustained low velocity: the paper defines a cut when speed remains below 0.1 feet per second for more than 0.25 seconds [PAGE 2]. This threshold is the first gray zone. A screen, a post-up, a player resetting his feet, and a tracking dropout all satisfy ||ẋ||₂ < 0.1 ft/s for >0.25 s, yet they are semantically opposite actions. Because the algorithm splits at every sustained low-velocity moment, a single coherent offensive motion—such as a slow post move—can be fractured into multiple segments, while a quick defensive scramble that briefly slows may merge distinct actions. The resulting segments average 2.25 seconds, with interior 95 percentiles from 0.6 to 7.96 seconds, yielding roughly 4.5 million segment observations [PAGE 2].

The second operator clusters these segments into V = 250 action templates, each a Bezier curve B_v : [0,1] → R² parameterized by P = 10 control points [PAGE 3; PAGE 11]. The gray zone here is the fixed dictionary size. The model assumes every human movement on an NBA court lies near one of 250 prototypical curves. Rare or novel actions—unusual cuts, injury-avoidance shuffles, or unconventional end-of-shot-clock heaves—are forced into the nearest template, generating systematic misassignment error. The template model also assumes deviations are Gaussian around the Bezier center with covariance Σ_v, an assumption unlikely to hold for bimodal movements such as a cut that can terminate at either elbow.

The third operator constructs pair-actions. Each segment is labeled with one of 2V = 500 ball-state-augmented actions (with/without ball), and a possession becomes a bag of simultaneous pairs (v_i, v_j) [PAGE 4]. Pairs appearing in fewer than 100 possessions are discarded, leaving roughly 25,000 unique pair-actions [PAGE 4]. This is a severe information bottleneck: the bag-of-pair-actions representation discards temporal order entirely. A screen-then-cut and a cut-then-screen, if simultaneous counts overlap, collapse into the same sufficient statistic. Moreover, the “simultaneous” window is defined by segment overlap in time, not by causal interaction, so two players moving independently but concurrently can generate a spurious pair-action.

The fourth operator fits LDA with K = 100 topics over the pair-action corpus, producing a possession sketch π̂^(n) ∈ Δ^(99) [PAGE 4; PAGE 5]. The sketch is sparse: on average only 8 of 100 topic entries are non-zero [PAGE 6]. This sparsity is desirable for interpretability but creates a breakdown regime: possessions with few segments yield unstable pair-action counts, and the Dirichlet prior can push genuinely mixed strategies toward a single dominant topic. Finally, t-SNE projects the 100-dimensional sketches to 2D for visualization [PAGE 6]. t-SNE preserves local distances but distorts global geometry, so two clusters appearing adjacent in Figure 5a may be far apart in the true 100-D simplex, and vice versa. The entire pipeline assumes stationarity across the 2014–2015 regular season; roster changes, coaching adjustments, and playoff intensity shifts violate this assumption across multi-week windows.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let a player trajectory be **x**<sup>(j,n)</sup> = {(x_t, y_t)}<sub>t=1</sub><sup>T<sub>j,n</sub></sup>, measured in feet on the court plane.

Segmentation operator: cut at sustained low velocity
∃ Δt > 0.25 s such that ||ẋ(t)||₂ < 0.1 ft/s [PAGE 2].
Resulting segments **x**<sup>(j,n,s)</sup>, s = 1, …, S, with mean duration τ̄ = 2.25 s and interior 95% range [0.6, 7.96] s [PAGE 2].

Action template (Bezier curve):
B_v(t; θ_v) = Σ<sub>p=0</sub><sup>P</sup> C(P,p) (1−t)<sup>P−p</sup> t<sup>p</sup> θ<sub>v,p</sub>, t ∈ [0,1], B_v : [0,1] → R² [PAGE 3; PAGE 11],
θ_v ∈ R<sup>P × 2</sup>, P = 10 control points [PAGE 12 footnote], v ∈ {1, …, 250} [PAGE 3].
Cluster likelihood: p(**x** | v) = N(B_v(t); Σ_v), with mixture weights π_v.

Ball-state augmentation: b ∈ {0,1} (“without”/“with” ball) [PAGE 4 footnote], yielding 2·V = 500 possible player-actions.

Pair-action vocabulary: (a_i, a_j) ∈ {1, …, 500}², support filter count ≥ 100 pregnancies, |𝒱_pair| ≈ 25,000 [PAGE 4].

Possession model (LDA): π̄<sup>(n)</sup> ~ Dir(α), φ_k ~ Dir(β), z<sub>n,m</sub> ~ Cat(π̄<sup>(n)</sup>), w<sub>n,m</sub> ~ Cat(φ_{z<sub>n,m</sub>}) [PAGE 11–12], with M_n pair-actions per possession and K = 100 topics [PAGE 5].

Possession sketch: π̂<sup>(n)</sup> ∈ Δ<sup>99</sup> (100-simplex), empirical sparsity ‖π̂<sup>(n)</sup>‖₀ ≈ 8 non-zero entries [PAGE 6].

Distance metric: KL divergence between topic distributions (units: nats), used to separate weave vs. non-weave Warriors possessions [PAGE 6; Figure 5b].

Breakdown/singularity regimes: (i) ||ẋ||₂ < 0.1 ft/s due to stoppage/injury creates spurious segment boundaries; (ii) M_n too small makes pair-action counts dominated by sampling noise; (iii) α too small forces degenerate one-topic sketches; (iv) t-SNE perplexity mismatch collapses global structure.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s intellectual lineage runs from Latent Dirichlet Allocation [Blei, Ng, Jordan 2003; Blei 2012] [PAGE 10 references], through Bezier-curve functional clustering borrowed from computer graphics and animation [PAGE 3], to basketball-specific expectation-maximization over player-tracking data. It sits adjacent to possession-value stochastic processes (Cervone et al., “Pointwise,” 2014; multiresolution EPV, arXiv:1408.0777) [PAGE 8 references], defensive spatial statistics (Franks et al., 2015) [PAGE 10], and neural play classification (Wang & Zemel, 2016) [PAGE 10]. The genealogy matters because each ancestor carries a failure mode that becomes a multi-week trap when applied prospectively.

First, stationarity trap: the model is fit on a single season (2014–2015) of 190,000 possessions [PAGE 2]. NBA strategy drifts week-to-week via coaching adjustments, trades, injuries, and opponent-specific scouting. A topic dictionary learned in November may misrepresent March actions because the 250-template vocabulary was never re-estimated under new strategic regimes.

Second, the playbook-archaeology trap: LDA discovers recurrent co-occurrence, not causality. A “topic” that frequently precedes a corner three [PAGE 7] may be a correlation artifact of floor spacing rather than a causal engine. Across weeks, defenses will adapt to high-loading topics, causing Goodhart-style decay: once a strategy is identified by possession sketches, opponents schematize against it, and the topic’s predictive power collapses.

Third, the tracking-data trap: optical tracking introduces missing frames and identity switches. If a player’s trajectory drops out for several seconds, low-velocity segmentation may trigger falsely, inflating S and corrupting pair-action counts. Because the model scales via stochastic variational inference [9] [PAGE 4], these errors propagate through the global topic posterior rather than remaining local.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes the offensive tendency, under temporal or score pressure, to collapse the sparse possession sketch onto its highest-probability topic. Because π̂<sup>(n)</sup> averages only 8 non-zero entries [PAGE 6], a team under shot-clock stress does not explore the full 100-topic simplex; it regresses to the dominant eigenvector of its historical action co-occurrence—typically a pick-and-roll or high-screen curl pattern already embedded in the dictionary.

The counter-trap is the defensive recursion: if the defense knows the offense’s sketch is sparse and pressure-predictable, it can overplay the modal topic. For example, if topic 3 loads onto “cut to basket while teammate camps in corner” [PAGE 5], the defense can sink into the corners and bump the cutter, forcing the offense off its sketch support. The offense must then activate secondary topics, increasing ‖π̂<sup>(n)</sup>‖₀ beyond the baseline of 8 and degrading execution fluency because those topics were rarely rehearsed in the training distribution.

The clock interacts with both layers. The shot clock imposes a hard deadline on the possession-length random variable (5–24 seconds) [PAGE 2]. As the clock winds down, low-velocity events become rarer (players hurry), so segmentation cuts shift and segments shorten. This distorts the Bezier-template likelihood because the action dictionary was learned on segments averaging 2.25 seconds with 95% range up to 7.96 seconds [PAGE 2]. End-of-clock desperation actions fall outside V = 250 and are misclustered, creating a systematic censoring bias: the model under-represents exactly the possessions where crisis habit regression is most relevant.

Second-order theory of mind: the offense models the defense modeling the offense’s sketch. This recursion can shift mass from topic k to topic k′ mid-possession, but the current bag-of-pair-actions formalism has no mechanism to encode time-varying topic transitions [PAGE 8 future work]. The model therefore treats a possession as a static mixture, even though basketball is a dynamic game of nested counter-predictions.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The court is a fixed 94 × 50 ft rectangle. Bezier templates B_v : [0,1] → R² assume unconstrained Euclidean motion [PAGE 3]. A template may place a player out of bounds or through the stanchion with non-zero probability because the Gaussian deviation N(B_v(t); Σ_v) has support over all R². Veto condition: any segment whose fitted Bezier curve exits [0,94] × [0,50] ft is physically inadmissible and should be rejected before clustering.

Biomechanical layer: Maximum human acceleration is roughly 3–4 m/s² (~10–13 ft/s²). The low-velocity threshold of 0.1 ft/s (~0.03 m/s) is below typical tracking noise and cannot distinguish a deliberate screen from a player pausing to tie a shoe, a referee collision, or a tracking dropout [PAGE 2]. Veto condition: sustained low velocity lasting >0.25 s without corresponding game-event metadata (whistle, substitution, timeout) generates a segmentation singularity that corrupts the pair-action count vector.

Weather layer: NBA arenas are climate-controlled indoor environments. Air density ρ ≈ 1.2 kg/m³ is effectively constant across possessions, and drag on a basketball over a 24-second possession is negligible relative to player-scale forces. Weather therefore imposes no veto on the possession-sketch model itself. However, HVAC microclimates can alter ball bounce and grip, which indirectly affects player trajectories; since the model does not include ball physics or environmental covariates [PAGE 4], this is an unmodeled confounder rather than a direct veto.

Adjudication hierarchy: Physical vetoes (out-of-bounds templates) are absolute and should be applied pre-clustering. Biomechanical vetoes (spurious low-velocity cuts) require event-data fusion to resolve; without whistle metadata they are irreducible within the current pipeline. Weather vetoes are null for the model as specified but motivate future extensions that include environmental state variables.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto Scenario 1 — Raise low-velocity threshold from 0.1 ft/s to 0.3 ft/s.
Rationale: fewer segments qualify as sustained low velocity, so S decreases and long heterogeneous motions merge into single segments. Prediction: the 250-template dictionary becomes under-segmented; distinct actions (cut vs. stand) collapse into shared Bezier clusters. Possession sketch sparsity degrades: average ‖π̂<sup>(n)</sup>‖₀ rises from 8 to >15 non-zero topics [PAGE 6], and weave-play nearest-neighbor recall in the Warriors t-SNE map drops from near 100% to below 60% because intra-topic distances inflate [PAGE 6; Figure 5b].

Veto Scenario 2 — Raise pair-action support filter from 100 to 1,000 possessions.
Rationale: rare but strategically diagnostic pair-actions are discarded. Prediction: |𝒱_pair| shrinks from ~25,000 to under 5,000 [PAGE 4]. Rare corner-three setup patterns—such as baseline cuts into the shooting corner [PAGE 7; Figure 7]—are pruned. The t-SNE map of Rockets vs. Spurs corner-three possessions loses cluster separation: the right-pane baseline-cut cluster and left-pane drive-and-kick cluster overlap completely, eliminating the structural variation the model was designed to expose.

Veto Scenario 3 — Reduce LDA topic count from K = 100 to K = 10.
Rationale: over-aggressive dimensionality reduction forces distinct strategies to share topics. Prediction: the sparsity constraint breaks; average non-zero entries per possession approaches the topic count (≈10) rather than the empirical baseline of 8 [PAGE 6]. Interpretability collapses: topic distributions become diffuse mixtures of unrelated pair-actions. KL divergence between weave and non-weave Warriors possessions falls below the within-weave variance, rendering the two distributions in Figure 5b statistically indistinguishable and defeating the possession-similarity use case [PAGE 6].
</RLVR_COUNTERFACTUAL_VETOES>