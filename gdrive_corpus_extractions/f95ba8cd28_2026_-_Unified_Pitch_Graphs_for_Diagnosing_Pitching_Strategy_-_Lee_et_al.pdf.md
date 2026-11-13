---
source: "2026 - Unified Pitch Graphs for Diagnosing Pitching Strategy - Lee et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/preprints/arXiv/2026"
pages: 10
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3892
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about Unified Pitch Graphs (UPG) for diagnosing pitching strategy in baseball. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_TO MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to write a comprehensive analysis covering all these sections. Let me plan:

THINK_TRACE: Deep multi-hop derivation & gray-zone audit. Need to discuss:
- How UPG preserves exact pitch events vs discrete pitch types
- The mathematical formulation: event e_i = (s_i, r_i, c_i, o_i)
- Trajectory reconstruction r_i(t) = r_0,i + v_0,i t + 1/2 a_i t^2 [PAGE 3]
- Semantic hierarchy: pitch type -> trajectory strata T-, T0, T+ via z_i = u_k^T eq_i [PAGE 3]
- Transition weights w_{p,τ,r}^{uv} = sum indicator [φ_r(v_{i-1})=u, φ_r(v_i)=v] [PAGE 4]
- Path definition π_i^{(m,r)} = (φ_r(v_{i-m+1}), ..., φ_r(v_i)) [PAGE 4]
- Support-adaptive variable-order selection: ρ_i = first (m,r) ∈ R s.t. n(π) ≥ n_min, g(π) ≥ g_min [PAGE 4]
- Backoff from fine/long sequences when evidence insufficient, retaining exact event lineage
- Coverage increase 18.9% -> 94.9%, R² 0.495 -> 0.685 [PAGE 1, 6]
- Gray zones: observational not causal, post-pitch annotations excluded from event identity, support thresholds arbitrary, frozen reference distribution before diagnostic window
- Breakdown regimes: partial season 2026* shorter window causes stable fraction drop sharply [PAGE 6]

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown.
- List all equations with page numbers
- Define units: feet for trajectory, mph for velocity (Statcast), seconds for time, dimensionless for R², counts for support
- Exact equations from paper
- Breakdown of variables

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
- Lineage: PITCHf/x and Statcast [PAGE 2], pitch tunneling [10], pitch sequence graph/motif studies [13,14], next-pitch prediction [4,5,8,18], MDP/game-theoretic [11,16], pitch-value/outcome models [6]
- Related to variable-order Markov models [3,15], Rissanen [15]
- Multi-week traps: temporal scope - rolling windows vs seasons, conservative in short windows (2026* partial season), stable repeated vs limited evidence vs episodic [PAGE 6]
- The trap of conflating retrospective associations with causal/future-performance claims (explicitly disclaimed throughout)

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- This section seems to be about modeling the pitcher's mind, crisis habits, counter-traps, clock (game context/time pressure)
- Need to connect UPG's context attributes (count, handedness, base-out state, inning, score) to pitcher cognition
- Crisis habit regression: under pressure, pitchers revert to backbone pitches (e.g., Misiorowski FF backbone 63%)
- Counter-trap: batters anticipating patterns, pitcher adapting sequence (deception, tunneling)
- Clock: game situation, inning, score, pitch count fatigue
- UPG excludes post-pitch outcomes from event identity, treating outcomes as annotations only - this is a theory-of-mind boundary: the model doesn't assume pitcher knows future outcomes

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical layer: exact trajectory reconstruction, continuous execution preserved
- Biomechanical: UPG does NOT fully explain biomechanical process (release height, arm slot, spin rate, spin axis, spin efficiency may determine feasibility) [PAGE 8 Discussion]
- Weather: not explicitly in paper, but game context includes inning, score, base-out; weather not mentioned as variable
- Veto proof: what can veto a diagnosis? Lack of support (n_min, g_min), single-game dominance (Figure 4 leave-one-game-out), short observation window (2026*), observational nature (no causal claim)
- Cross-layer: event layer exact, semantic layer adaptive, temporal layer rolling windows/seasons

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. Need to create 3 counterfactual veto scenarios based on the paper.
- Scenario 1: Insufficient support veto - if n(π) < n_min or g(π) < g_min, veto fine path, backoff to suffix/pitch type. Prediction: held-out coverage drops below 94.9% if thresholds raised.
- Scenario 2: Single-game dominance veto - leave-one-game-out test in Figure 4. If removing highest-support game destroys top-ten membership or outcome direction, veto motif as "stable repeated". Prediction: in partial 2026*, stable fraction drops sharply.
- Scenario 3: Discrete-collapse veto - if nominally identical pitch-type sequence has distinct physical executions (Figure 2A-B), veto discrete SGT representation. Prediction: SGT/pitch mix AUROC ~0.50 in controlled execution-only change vs UPG ~0.99 [PAGE 7].

Need to ensure >= 1000 words total. THINK_TRACE alone >= 400 words.

No betting lines. No toy equations.

Let me draft carefully with page citations [PAGE N].

Word count check: I'll aim for substantial depth.

Let me write the response.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper defines the i-th pitch event as e_i = (s_i, r_i, c_i, o_i), where s_i is nominal pitch identity, r_i continuous physical execution, c_i pre-pitch context, and o_i post-pitch annotations [PAGE 2]. The first multi-hop derivation is that event identity must exclude o_i: batter response, contact quality, and run-value change are stored separately as annotations and never determine event identity or semantic membership [PAGE 3]. This creates a strict representational boundary: the graph is built from pre-pitch state and physical execution only, so any inference about “effectiveness” is a post-hoc annotation layer, not a generative component of the motif itself.

The second hop concerns trajectory reconstruction. UPG reconstructs three-dimensional flight from Statcast kinematic measurements using r_i(t) = r_0,i + v_0,i t + (1/2) a_i t^2 [PAGE 3]. The curve is sampled at fixed locations along the flight path. Because release conditions, velocity, movement, and plate location remain continuous and attached to the exact event, two pitches sharing the same nominal label (e.g., SL → SL → FF in the same zone/count cell) can remain distinguishable by their physical realizations [PAGE 5, Figure 2A-B]. The gray zone here is that “distinct physical executions” are only operationally distinct if the trajectory substates and location regions pass the support-adaptive filter; otherwise they collapse into the same reported motif at coarser resolution.

The third hop is semantic stratification. Within pitch type k, UPG computes z_i = u_k^T eq_i, where u_k is the first principal direction of the within-type trajectory distribution and eq_i is the standardized sampled trajectory [PAGE 3]. Frozen reference tertiles define T-, T0, T+. The standardization, projection, and thresholds are estimated before the diagnostic window and held fixed, giving strata consistent meaning across time but explicitly describing relative within-type variation, not quality or effectiveness [PAGE 3]. A breakdown regime appears if the reference distribution is re-estimated inside the evaluation window: strata would cease to be comparable across time, and the “consistent meaning” claim fails.

The fourth hop is aggregate transition weight: w_{p,τ,r}^{uv} = Σ_{i∈T_{p,τ}} I[φ_r(v_{i-1}) = u, φ_r(v_i) = v] [PAGE 4]. Changing r changes physical resolution; changing τ changes temporal scope. Because aggregate nodes retain references to constituent events, a season-level pattern can be localized to games, PAs, and individual trajectories [PAGE 4]. The gray zone is that this lineage is only as reliable as the graph’s immutability: if events are re-ingested or re-labeled after motif discovery, the drill-down chain breaks.

The fifth hop is support-adaptive variable-order selection. Candidate paths span m = 2 to 4 consecutive pitches within a PA: π_i^{(m,r)} = (φ_r(v_{i-m+1}), ..., φ_r(v_i)) [PAGE 4]. Each candidate must satisfy n(π) ≥ n_min and g(π) ≥ g_min, where n is occurrence count and g is distinct supporting games [PAGE 4]. The selected representation is ρ_i = first (m,r) ∈ R satisfying both constraints; if none, the target pitch type is the fallback [PAGE 4]. This is the core statistical backoff: longer paths and trajectory-refined states reduce recurrence, so the procedure trades descriptive detail for support. The paper reports held-out path coverage rising from 18.9% to 94.9% and execution reconstruction R² from 0.495 to 0.685 [PAGE 1, 6]. The breakdown regime is explicit: in partial 2026* (shorter observation window), the stable-repeated motif fraction drops sharply and most motifs become “limited evidence” [PAGE 6]. UPG becomes more conservative when recurrence evidence is limited, rather than over-interpreting short windows.

Gray-zone audit: (1) UPG is observational, not causal; outcomes may depend on unobserved factors such as batter anticipation, pitcher fatigue, umpire decisions, catcher coordination, and game-specific plans [PAGE 8]. (2) The paper explicitly disclaims future-performance prediction: recurrence or held-out consistency does not establish causal effects or guarantee future persistence [PAGE 1, 5, 8]. (3) Support thresholds n_min and g_min are hyperparameters; changing them alters the motif population without changing the stored graph, so reported “supported” patterns are threshold-dependent. (4) The controlled change-localization study holds pitch type/zone/count fixed while altering continuous execution at a known boundary; UPG achieves near-perfect discrimination while pitch mix and SGT remain at chance [PAGE 7, Figure 6A]. This validates the representation’s sensitivity to execution-level change but says nothing about whether such changes are strategically optimal under opposing-batter adaptation.

Total THINK_TRACE word count is well above 400 words.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX equations, units, page citations, and breakdown.

1. Pitch event definition [PAGE 2]
   e_i = (s_i, r_i, c_i, o_i)
   s_i ∈ nominal pitch identity (categorical, e.g., FF, SL, SI, CH, CU, FC, FS, ST)
   r_i ∈ continuous physical execution (release conditions, velocity [ft/s or mph], movement [inches], reconstructed 3-D trajectory [ft], plate location [ft])
   c_i ∈ pre-pitch context (count, handedness matchup, base-out state, inning, score situation)
   o_i ∈ post-pitch annotations (batter response, contact quality, run-value change) — excluded from event identity and semantic state

2. Plate appearance sequence [PAGE 2]
   P = (e_1, e_2, ..., e_T), T variable across plate appearances

3. Directed sequence edge [PAGE 3]
   e_seq_i = (v_{i-1}, v_i) for consecutive valid pitches within the same PA
   Edge descriptors: changes in velocity, release position, trajectory, late-flight separation, plate location
   Invalid intermediate observations break the sequence (no artificial adjacency)

4. 3-D trajectory reconstruction [PAGE 3]
   r_i(t) = r_{0,i} + v_{0,i} t + (1/2) a_i t^2
   Units: position [ft], velocity [ft/s], acceleration [ft/s²], time [s]
   Sampled at fixed locations along flight path for compact representation

5. Within-type trajectory projection [PAGE 3]
   z_i = u_k^T eq_i
   u_k = first principal direction of within-type trajectory distribution for pitch type k
   eq_i = standardized sampled trajectory under historical reference distribution
   Output: scalar projection z_i; frozen reference tertiles define strata T⁻, T⁰, T⁺

6. Aggregate transition weight [PAGE 4]
   w_{p,τ,r}^{uv} = Σ_{i∈T_{p,τ}} I[φ_r(v_{i-1}) = u, φ_r(v_i) = v]
   T_{p,τ} = valid within-PA transitions by pitcher p in temporal scope τ
   φ_r = map exact event v_i to semantic state at resolution r
   Weight units: dimensionless count of transitions

7. Variable-order path [PAGE 4]
   π_i^{(m,r)} = (φ_r(v_{i-m+1}), ..., φ_r(v_i)), m ∈ {2, 3, 4}
   Paths never cross PA boundaries

8. Support-adaptive selection [PAGE 4]
   ρ_i = first (m,r) ∈ R such that n(π_i^{(m,r)}) ≥ n_min AND g(π_i^{(m,r)}) ≥ g_min
   n(·) = occurrence support (dimensionless count)
   g(·) = number of distinct supporting games (dimensionless count)
   Fallback: target pitch type if no multi-pitch candidate supported

9. Evaluation metrics [PAGE 1, 6]
   Held-out path coverage: 18.9% (fixed coarse-4) → 94.9% (adaptive variable)
   Execution reconstruction: R² = 0.495 → 0.685 (dimensionless coefficient of determination)
   AUROC for controlled execution-only change: pitch mix ≈ 0.50, SGT ≈ 0.50, multiscale UPG ≈ 0.99 [PAGE 7, Figure 6A]
   False-change rate near 0 for UPG in controlled study [PAGE 7]

10. Breakdown / singularity regimes
    - Partial season 2026*: shorter observation window causes stable-repeated motif fraction to drop sharply; most motifs labeled “limited evidence” [PAGE 6]
    - If n_min or g_min raised beyond observed support, all fine paths back off to pitch-type resolution, losing execution discrimination
    - If reference distribution for z_i strata is re-estimated inside the diagnostic window, cross-time comparability breaks [PAGE 3]
    - UPG cannot detect causes outside pitch-tracking data (batter anticipation, fatigue, umpire, catcher, game plan) [PAGE 8]

Units summary: spatial [ft], temporal [s], velocity [ft/s], acceleration [ft/s²], counts dimensionless, R² dimensionless, AUROC dimensionless [0,1].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week traps.

The paper situates UPG within four lineages [PAGE 2]. First, pitch prediction and strategic decision modeling estimate next pitch type or location from tendencies, batter information, count, and previous pitches [4, 5, 8, 18]; reinforcement-learning, Markov-decision, and game-theoretic approaches model pitch selection as a sequential decision problem [11, 16]. These target prediction or optimization rather than retrospective organization of observed execution. Second, pitch-sequence graph and motif studies capture pitch order through transition structures and directed graphs, but states are commonly nominal pitch labels or discrete categories that merge physically different realizations [2, 13, 14]. Third, trajectory and outcome analysis via PITCHf/x and Statcast characterizes release position, velocity, movement, location, and flight [7, 9], while pitch-tunneling analyses examine how consecutive pitches converge and diverge [10]; pitch-level models estimate effectiveness from type, execution, location, and game state [6]. Fourth, the support-adaptive variable-order logic echoes variable-order Markov models and universal data compression [3, 15], where longer contexts fragment statistical support.

The multi-week trap is explicit in the temporal-scope design. UPG organizes events across plate appearances, games, rolling windows, and seasons [PAGE 4]. Figure 4 demonstrates the trap: leave-one-game-out retention of top-ten motifs is high across full seasons, but in partial 2026* the stable-repeated fraction drops sharply and most motifs become limited evidence [PAGE 6]. A multi-week analyst might be tempted to treat a two-week hot streak as a stable repertoire signature; UPG’s support-adaptive backoff and confidence-aware reporting (supported / uncertain / abstain in Table 2) block that inference by requiring recurrence across multiple distinct games [PAGE 4, 5]. The temporal trap has two directions: (a) over-extrapolating from a short window (2026* partial season), and (b) assuming season-level stationarity across a multi-year span when Ohtani’s record shows a clear interruption after 2023 and a reorganized return style [PAGE 8, Figure 8]. UPG’s rolling windows use only completed games within the window [PAGE 4], which enforces a causal ordering of information availability but does not validate future persistence.

A second genealogical trap is the conflation of retrospective association with causal or future-performance claims. The paper repeats this disclaimer across the abstract, introduction, discussion, and conclusion [PAGE 1, 5, 8, 9]. Related work in counterfactual sequence optimization [17] estimates the impact of pitch sequences on season-level statistics, but UPG explicitly does not claim superiority as a predictive architecture or causal identification tool [PAGE 2, 8]. The historical lineage therefore terminates in a diagnostic, not prescriptive, posture: UPG generates evidence about observable execution and strategy, but biomechanical or pose-tracking integration would be required to prescribe mechanical changes [PAGE 8].

Multi-week trap synthesis: any analyst using UPG across a rolling 3- or 4-week window must check (i) whether motifs satisfy g_min distinct supporting games, (ii) whether leave-one-game-out retention holds, and (iii) whether the diagnostic window is long enough to avoid the “limited evidence” regime seen in 2026*. Failure to check these produces false confidence in episodic patterns.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock.

Recursive theory of mind in pitching concerns what the pitcher believes the batter believes about the next pitch, iterated across the plate appearance. UPG’s context attributes c_i include count, handedness matchup, base-out state, inning, and score situation [PAGE 2], but the model treats these as conditioning attributes rather than default semantic-state components [PAGE 3]. This is a deliberate theory-of-mind boundary: the graph records what was thrown and under what context, but does not model the pitcher’s belief state about the batter’s anticipation, nor the batter’s belief about the pitcher’s sequence tendencies.

Crisis habit regression: under high-leverage context (late innings, close score, runners in scoring position), pitchers may regress to a narrow backbone. The player-style table shows Misiorowski built 63% of his attack around a concentrated high-velocity fastball–slider backbone with leading path FF–FF–FF at 28.8% path concentration [PAGE 8, Table 3]. In a crisis count (e.g., 0-2 or 3-2), the support-adaptive mechanism may back off long, deceptive sequences to the pitch-type fallback if the fine path lacks g_min distinct games [PAGE 4]. The observable signature is a collapse of path diversity toward coarse, high-support transitions—exactly the kind of regression UPG can detect at the graph level without labeling it “choking.”

Counter-trap: batters and opposing coaches observe recurring motifs and adjust. Because UPG separates motif existence from outcome effectiveness [PAGE 5], a motif can be recurrent yet have unstable outcome direction (Table 2: Bryce Elder SI–SL–SL repeats but outcome association does not remain stable, decision “Uncertain”) [PAGE 6]. This is the counter-trap in operational form: the pitcher’s sequence structure repeats, but the batter has neutralized the outcome payoff, so UPG downgrades the effectiveness claim while retaining the structural motif. A counter-trap is confirmed when outcome-direction retention fails after leave-one-game-out removal [PAGE 6, Figure 4B].

Clock: inning, score, and base-out state constitute the temporal pressure layer [PAGE 2]. The clock constrains feasible sequences because a trailing pitcher in the 9th may not afford a 4-pitch deceptive tunnel; the support-adaptive backoff naturally reflects this because short, high-support paths dominate in constrained game states [PAGE 4, Figure 3C: most validation paths reported at coarse orders 2–4]. However, UPG does not model fatigue explicitly; the discussion notes pitcher fatigue and condition are unobserved factors that may determine which shapes and sequences are feasible [PAGE 8]. The clock therefore enters as a conditioning attribute c_i, not as a dynamical state variable, which is a limitation if the analysis targets within-game mechanical degradation.

Recursive synthesis: the pitcher selects e_i given c_i and e_{i-1}; the batter selects a response given perceived π_i^{(m,r)}; UPG observes both sides only through pitch-level annotations o_i excluded from event identity. The model can identify that FF–SL–FF recurs with stable outcome direction for Misiorowski [PAGE 7, Figure 5], but it cannot assert whether the recurrence persists because the batter fails to adapt or because the pitcher hides the sequence effectively. That counterfactual requires an opponent model outside UPG’s scope.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto proof.

Cross-layer adjudication asks which layers of evidence can veto a proposed diagnostic claim, and under what conditions.

Event layer (exact pitch events): This is the foundational layer. Each pitch remains an exact event with continuous execution r_i and pre-pitch context c_i [PAGE 3]. No veto at this layer occurs unless an observation is invalid, in which case the sequence breaks rather than inducing artificial adjacency [PAGE 3]. Veto condition: missing or corrupted Statcast kinematic measurements prevent trajectory reconstruction r_i(t) = r_{0,i} + v_{0,i}t + (1/2)a_i t^2 [PAGE 3], and the event is excluded from sequence edges.

Semantic layer (trajectory strata and location regions): Strata T⁻, T⁰, T⁺ are defined by frozen reference tertiles of z_i = u_k^T eq_i [PAGE 3]. Veto condition: if a candidate trajectory-refined path fails n(π) ≥ n_min or g(π) ≥ g_min, the support-adaptive mechanism backs off to the next shorter suffix or pitch-type fallback [PAGE 4]. The fine-grained evidence is not deleted, but the aggregate claim is weakened [PAGE 5]. A veto at this layer means the reported motif is “coarse only,” and any inference about within-type movement differences is unsupported.

Temporal layer (PAs, games, rolling windows, seasons): Temporal nodes organize the same events without creating new physical observations [PAGE 4]. Veto condition: leave-one-game-out removal destroys top-ten membership or outcome-direction agreement (Figure 4B) [PAGE 6], or the observation window is too short (partial 2026*), in which case most motifs are labeled limited evidence rather than stable repeated [PAGE 6]. A season-level claim vetoed by single-game dominance cannot be localized confidently.

Physical/biomechanical veto: UPG characterizes how a pitch travels and is deployed but does not fully explain the biomechanical process that produced the trajectory [PAGE 8]. Release height, arm slot, deception, spin rate, spin axis, spin efficiency, and pitcher-specific physical constraints determine feasibility [PAGE 8]. Therefore, any UPG diagnosis recommending a mechanical change (e.g., “throw more T+ sliders”) is vetoed at the biomechanical layer unless paired with pose-tracking or biomechanical data. UPG generates evidence about observable execution, not mechanical prescription.

Weather veto: The paper’s context variables c_i include count, handedness matchup, base-out state, inning, and score [PAGE 2], but weather variables (temperature, humidity, wind, air density) are not listed as context or execution variables [PAGES 2–8]. Because aerodynamic movement depends on air density and wind, and Statcast movement metrics are implicitly weather-conditioned, any cross-season or cross-stadium trajectory comparison is vetoed at the weather layer unless environmental covariates are controlled. The paper holds trajectory standardization and thresholds fixed before the diagnostic window [PAGE 3], but does not adjust for weather, so inter-station or inter-season trajectory-stratum comparisons carry an uncontrolled weather confound.

Final veto adjudication rule: A diagnostic claim is published only if (i) the path passes support-adaptive thresholds n_min and g_min across distinct games [PAGE 4], (ii) leave-one-game-out retention holds [PAGE 6], (iii) the claim is framed as observational, not causal or predictive [PAGE 1, 8], and (iv) no biomechanical or weather veto is invoked without external data. If any condition fails, the claim is downgraded to “event-level example” or “abstain” [PAGE 6, Table 2].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR (reinforcement learning from verifiable rewards) veto scenarios with counterfactual predictions. No betting lines are referenced.

Scenario 1: Insufficient-support veto.
Setup: A pitcher exhibits a candidate fine trajectory-refined 4-pitch path π^(4, fine) with n(π) = n_min - 1 and g(π) = g_min (meets game support but one occurrence short). The UPG selector must back off to π^(3, fine) or pitch-type fallback per Eq. 6 [PAGE 4].
Counterfactual veto: If the system instead promoted π^(4, fine) despite n(π) < n_min, the held-out path coverage would fall below the reported 94.9% baseline [PAGE 6, Figure 3A], and execution reconstruction R² would not reach 0.685 [PAGE 6, Figure 3B].
Verifiable prediction: Re-running the selector with n_min incremented by 1 on the 300-pitcher 2025 evaluation population will reduce supported held-out paths below 94.9% and increase the fraction of paths resolved at pitch-type resolution (coarse orders 2–4 in Figure 3C) [PAGE 6].

Scenario 2: Single-game dominance veto (leave-one-game-out).
Setup: A top-10 motif derives 50% of its support from one game. Removing that game collapses top-ten membership, per Figure 4B retention test [PAGE 6].
Counterfactual veto: If the system labeled this motif “stable repeated” rather than “limited evidence,” the diagnostic would be an artifact of a single outlier game rather than a cross-game recurrence pattern.
Verifiable prediction: Across full seasons, the share of top motifs classified as “stable repeated” will remain substantial, but in partial 2026* the stable fraction will drop sharply and most motifs will be labeled “limited evidence,” matching Figure 4A [PAGE 6]. A system that ignores this veto will over-call stable motifs in short windows by a margin equal to the difference between full-season and 2026* stable fractions.

Scenario 3: Discrete-collapse veto (controlled execution-only change).
Setup: Pitch type, zone, and count are held fixed while continuous execution distribution changes at a known game boundary; pitch mix and SGT remain at chance (AUROC ≈ 0.50), while multiscale UPG achieves near-perfect discrimination (AUROC ≈ 0.99) [PAGE 7, Figure 6A].
Counterfactual veto: If the system used only pitch mix or SGT, it would fail to detect the change (false-change rate near 0.5 random guessing), missing an execution-level shift invisible to coarse summaries.
Verifiable prediction: On the controlled-change benchmark, any representation lacking trajectory-refined semantic strata will have AUROC indistinguishable from 0.50 and false-change rate near maximum, whereas UPG with φ_r trajectory substates will maintain AUROC ≥ 0.97 and localization precision P@3 = 1.00 for changed dimensions and supporting PAs [PAGE 7, Figure 6A-B].
</RLVR_COUNTERFACTUAL_VETOES>