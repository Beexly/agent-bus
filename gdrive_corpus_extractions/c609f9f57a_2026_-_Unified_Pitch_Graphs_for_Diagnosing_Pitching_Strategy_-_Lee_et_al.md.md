---
source: "2026 - Unified Pitch Graphs for Diagnosing Pitching Strategy - Lee et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/preprints/arXiv/2026"
pages: 22
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4030
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about Unified Pitch Graphs (UPG) for diagnosing pitching strategy in baseball. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user provided a source text that seems to be pages 1-10 of a 22-page document? The markdown says PAGES: 22 but the text appears to go up to page 10 (references). Let me check - the text ends at page 10 with references. But the user says PAGES: 22. However, I can only work with what's provided. I need to cite exact [PAGE N] markers based on the provided text. Looking at the text, page numbers appear at bottom: "1", "2", "3", "4", "5", "6", "7", "8", "9", "10". The provided text seems to contain pages 1-10. But user says PAGES: 22. I should cite based on what's visible, but note that only pages 1-10 are in the provided excerpt? Actually, looking carefully, the text includes "Conference'17" headers which look like a template artifact, and page numbers 1-10. Since the user explicitly says PAGES: 22, but only ~10 pages of text are provided, I must cite exact page markers from the provided text. I should not fabricate page 11-22 citations. I'll cite [PAGE 1] through [PAGE 10] as they appear in the text.

Wait, actually I need to check if there are page markers embedded. The text has:
- Page 1: Abstract, Introduction, contributions end with "1" at bottom
- Page 2: Background, Table 1, Problem formulation, ends with "2"
- Page 3: System Design, Figure 1, Section 3.1, 3.2, ends with "3"
- Page 4: Section 3.2 continued, 3.3, 3.4, ends with "4"
- Page 5: Section 3.5, Figure 3 caption, Section 4, 4.1, 4.2 starts, ends with "5"
- Page 6: Figure 2 caption, Section 4.2 continued, 4.3, ends with "6"
- Page 7: Section 4.4, Figure 4, Figure 5 caption, Table 2, ends with "7"
- Page 8: Section 4.5, Figure 6 caption, Section 4.6, Figure 7, ends with "8"
- Page 9: Figure 8, Figure 9, Table 3, ends with "9"
- Page 10: Discussion, Conclusion, References, ends with "10"

So only pages 1-10 are provided despite "PAGES: 22". I must cite only pages I can verify from the text. I'll use [PAGE N] where N is the printed page number at the bottom of each section.

Now let me plan each section:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words). I need to derive the mathematical structure of UPG, analyze gray zones (e.g., support-adaptive backoff thresholds, trajectory strata, observational vs causal claims, bootstrap uncertainty, etc.).

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown. I need to reproduce equations (1)-(6), define variables with units, cite pages.

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps. Connect to PITCHf/x, Statcast, Markov models, variable-order Markov, pitch tunneling, etc. Multi-week traps = issues with using short windows, non-stationarity, partial seasons (2026*), etc.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. This is about pitcher/batter strategic adaptation - how pitchers regress to habits under crisis, how batters counter-adapt, temporal discounting ("clock" - count, inning, game clock).

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. What invalidates UPG findings? Biomechanical constraints (release point consistency), weather (air density affecting trajectory), physical limits of pitch tunneling, etc.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some counterfactual framework. I need to create 3 veto scenarios where UPG's claims would be falsified, with predictions.

Important constraints:
- No betting lines whatsoever.
- No fake toy equations. All equations must be from the paper or formally stated with assumptions.
- Cite exact page markers and verbatim quotes when source pages are provided.
- Total >= 1000 words across sections. THINK_TRACE alone >= 400 words.

Let me draft carefully.

THINK_TRACE (>=400 words):
- Derive event representation e_i = (s_i, r_i, c_i, o_i)
- Plate appearance P = (e_1, ..., e_T)
- Sequence edge e_seq_i = (v_{i-1}, v_i)
- Trajectory reconstruction r_i(t) = r_0,i + v_0,i t + 1/2 a_i t^2
- Standardized trajectory eq_i, projection z_i = u_k^T eq_i
- Trajectory strata T-, T0, T+ from frozen reference tertiles
- Aggregate transition weight w_{p,τ,r}^{uv} = sum indicator
- Path π^{(m,r)}_i = (φ_r(v_{i-m+1}), ..., φ_r(v_i))
- Support-adaptive selection ρ_i = first (m,r) in R satisfying n >= n_min and g >= g_min
- Gray zones: n_min and g_min not numerically specified in provided text? Let me check. The paper mentions n_min and g_min but I don't see specific values in the extracted text. I must not invent them. I can state they are hyperparameters whose exact values are not disclosed in pages 1-10.
- Bootstrap uncertainty by pitcher-cluster.
- Observational not causal.
- R^2 improvement 0.495 to 0.685, coverage 18.9% to 94.9%.
- Gray-zone: partial 2026 season (2026*) shorter observation window leads to "limited evidence" classification.
- Gray-zone: outcome variables excluded from event identity but used in diagnostic reporting after motif definition; potential for post-hoc rationalization.
- Gray-zone: trajectory strata estimated before diagnostic window and held fixed - stationarity assumption.

SOURCE_OPERATORS_AND_EQUATIONS:
- List equations with LaTeX.
- Variables with units: time t in seconds (implied by kinematic equation), position in feet (Statcast catcher-view x in ft, height z in ft), velocity in ft/s (implied), acceleration in ft/s^2 (implied). The paper uses catcher-view x (ft) and Height z (ft) in figures.
- Cite pages for each equation: Eq (1) page 3, Eq (2) page 3, Eq (3) page 3, Eq (4) page 4, Eq (5) page 4, Eq (6) page 4.
- Breakdown of event fidelity, support-adaptive resolution, multi-scale traceability.

RETROCAUSAL_GENEALOGY:
- Lineage: PITCHf/x (2006ish), Statcast, Kagan & Nathan [7], Lee et al. 2025 ABS case study [9], pitch tunnels Long et al. [10], graph embeddings Prasad [14], Park et al. 2026 [13], Takamido & Nakamoto 2026 counterfactual optimization [17].
- Multi-week traps: rolling windows only completed games; partial season 2026* (through July 3) has shorter window; stability requires repeated games; Ohtani interruption after 2023; non-stationarity across seasons; fatigue not observed.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: under pressure (high-leverage counts), pitchers revert to backbone pitches (e.g., Misiorowski FF-heavy).
- Counter-trap: batters adapt to repeated motifs; UPG detects recurrence but not causal effectiveness; outcome direction may not validate (Elder example).
- Clock: count, inning, base-out state, score situation as conditioning attributes; temporal scope (PA, game, rolling window, season); no game clock but game state acts as clock.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical veto: Statcast reconstruction error; invalid intermediate observations break sequence; continuous execution not biomechanics (release height, arm slot, spin not fully modeled).
- Biomechanical veto: UPG does not explain biomechanical process; two physically similar trajectories may arise from different mechanics; cannot prescribe mechanical changes.
- Weather veto: air density, temperature, humidity affect flight; not mentioned as covariates in UPG; trajectory strata are within-type relative, not absolute weather-adjusted.
- Veto proof: what would invalidate a motif claim? Single-game drive (Figure 4 addresses by leave-one-game-out), shuffling destroys recurrence (Figure 2C), discrete collapse (Figure 2A-B).

RLVR_COUNTERFACTUAL_VETOES:
- 3 verifiable veto scenarios:
  1. If support-adaptive backoff thresholds n_min/g_min are set too high, held-out coverage collapses back toward 18.9% and R^2 drops toward 0.495; prediction: varying n_min from 1 to 50 will show coverage-R^2 tradeoff curve.
  2. If trajectory strata thresholds are re-estimated within the diagnostic window (not frozen), stratification leaks future information; prediction: held-out R^2 will inflate artificially but fail on truly held-out seasons.
  3. If outcome annotations o_i are included in event identity φ_r, motifs become outcome-contaminated; prediction: change localization AUROC drops from near 1.0 (controlled) to chance because the representation encodes outcomes rather than pre-pitch execution.
- Each with verification method and predicted outcome.

Word count: Need >= 1000 total, THINK_TRACE >= 400. I'll aim for substantial depth.

I must be careful not to mention betting lines. No spreads, totals, moneylines, odds. I can mention "probability" in a statistical sense but not betting odds.

I must not invent fake ratios. I can use the paper's reported metrics (R^2, coverage percentages) but not create new ratios like "force/fatigue".

Let me write the response now.
</NATIVE_REASONING>

<THINK_TRACE>
The paper defines a plate appearance as a variable-length ordered interaction P = (e_1, ..., e_T), where each pitch event e_i = (s_i, r_i, c_i, o_i) decomposes into nominal pitch identity s_i, continuous physical execution r_i, pre-pitch context c_i, and post-pitch annotations o_i [PAGE 2]. The canonical graph G_{p,τ} = (V_evt ∪ V_sem ∪ V_time, E_seq ∪ E_sem ∪ E_time) preserves exact events while organizing them across semantic and temporal resolutions [PAGE 2]. The first derivation step is the directed sequence edge e_seq_i = (v_{i-1}, v_i) for consecutive valid pitches within a PA [PAGE 3, Eq. 1]. Invalid intermediate observations break the sequence rather than inducing artificial adjacency, which means missing Statcast observations generate topological discontinuities rather than imputed transitions [PAGE 3].

Continuous execution is reconstructed from kinematic measurements as r_i(t) = r_{0,i} + v_{0,i}t + (1/2)a_i t^2 [PAGE 3, Eq. 2], sampled at fixed locations along the flight path. Within each pitch type k, the standardized sampled trajectory eq_i is projected onto the first principal direction u_k of the within-type trajectory distribution, yielding z_i = u_k^T eq_i [PAGE 3, Eq. 3]. Frozen reference tertiles of z_i define three trajectory strata T^-, T^0, T^+ [PAGE 3]. Crucially, standardization, projection, and thresholds are estimated before the diagnostic window and held fixed, imposing a stationarity assumption: within-type trajectory variation is assumed stationary across the analysis period. If the pitcher’s mechanical baseline shifts mid-window, the strata become misaligned and the semantic hierarchy loses interpretability.

The aggregate transition weight for scope τ and resolution r is w_{p,τ,r}^{uv} = Σ_{i∈T_{p,τ}} I[φ_r(v_{i-1}) = u, φ_r(v_i) = v] [PAGE 4, Eq. 4], where T_{p,τ} contains valid within-PA transitions. Longer paths of length m are defined as π^{(m,r)}_i = (φ_r(v_{i-m+1}), ..., φ_r(v_i)) [PAGE 4, Eq. 5], never crossing PA boundaries. The support-adaptive selection ρ_i = first_{(m,r)∈R} {n(π^{(m,r)}_i) ≥ n_min, g(π^{(m,r)}_i) ≥ g_min} [PAGE 4, Eq. 6] balances descriptive detail against statistical support, but the exact values of n_min and g_min are not numerically specified in pages 1–10, creating a gray zone: without published thresholds, the 18.9% → 94.9% coverage gain and R^2 0.495 → 0.685 improvement cannot be externally replicated or stress-tested against alternative thresholds.

Gray-zone audit: (1) Post-pitch outcomes o_i are excluded from event identity and semantic state construction but examined after motif definition [PAGE 3, PAGE 5], which risks post-hoc rationalization if researchers iterate on motif selection after observing outcome associations. (2) Uncertainty is estimated by pitcher-cluster bootstrap [PAGE 5], but partial-season 2026* data (through July 3) yields shorter observation windows, causing the stable fraction of top motifs to drop sharply and most motifs to be labeled “limited evidence” [PAGE 6]. (3) The representation is explicitly observational and non-causal; recurrence or held-out consistency does not establish causal effects or guarantee future persistence [PAGE 5, PAGE 7]. (4) Biomechanical determinants (release height, arm slot, spin rate, spin efficiency) are acknowledged as unobserved [PAGE 9], so UPG cannot distinguish whether two similar trajectories arose from the same mechanical process or different compensations.

</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and equations from the source text:

Event definition (plate appearance): P = (e_1, e_2, ..., e_T), T varies across plate appearances [PAGE 2].
Pitch event: e_i = (s_i, r_i, c_i, o_i), where s_i is nominal pitch identity, r_i is continuous physical execution, c_i is pre-pitch context (count, handedness matchup, base-out state, inning, score situation), and o_i is post-pitch annotation (batter response, contact quality, run-value change) [PAGE 2].

Directed sequence edge for consecutive valid pitches i−1 and i within the same PA:
e_seq_i = (v_{i−1}, v_i) [PAGE 3, Eq. 1].
Units: graph-theoretic (dimensionless adjacency); edge preserves observed pitch order and pairwise execution descriptors (Δvelocity, Δrelease position, Δtrajectory, late-flight separation, Δplate location).

Three-dimensional trajectory reconstruction from Statcast kinematic measurements:
r_i(t) = r_{0,i} + v_{0,i} t + (1/2) a_i t^2 [PAGE 3, Eq. 2].
Units: position in feet (ft), time in seconds (s), velocity in ft/s (implied by kinematic form), acceleration in ft/s² (implied). Catcher-view coordinates: x (ft) horizontal, z (ft) height, as shown in Figures 2, 5, 7–9 [PAGE 5–8].

Within-type trajectory standardization and projection: Let eq_i denote the standardized sampled trajectory of pitch i under a historical reference distribution. For pitch type k, u_k is the first principal direction of the within-type trajectory distribution:
z_i = u_k^T eq_i [PAGE 3, Eq. 3].
Units: z_i is a standardized projection score (dimensionless relative within-type coordinate). Frozen reference tertiles of z_i define trajectory strata T^−, T^0, T^+ [PAGE 3]. Assumption: strata estimated before diagnostic window and held fixed; they describe relative within-type variation, not pitch quality or effectiveness [PAGE 3].

Aggregate transition weight for pitcher p, temporal scope τ, semantic resolution r:
w_{p,τ,r}^{uv} = Σ_{i∈T_{p,τ}} I[φ_r(v_{i−1}) = u, φ_r(v_i) = v] [PAGE 4, Eq. 4].
Units: count dimension (dimensionless integer). Changing r alters physical resolution; changing τ alters temporal scope [PAGE 4].

Length-m path ending at pitch i under semantic resolution r:
π^{(m,r)}_i = (φ_r(v_{i−m+1}), ..., φ_r(v_i)) [PAGE 4, Eq. 5].
Paths considered: two to four consecutive pitches within a PA; paths never cross PA boundaries [PAGE 4].

Support-adaptive variable-order selection over ordered candidate set R:
ρ_i = first_{(m,r)∈R} [ n(π^{(m,r)}_i) ≥ n_min ∧ g(π^{(m,r)}_i) ≥ g_min ] [PAGE 4, Eq. 6].
Units: n(·) is occurrence support (count), g(·) is number of distinct supporting games (count). n_min and g_min are thresholds; exact numerical values are not reported in pages 1–10.

Reported evaluation metrics:
Held-out path coverage: 18.9% (fixed order-four coarse) → 94.9% (support-adaptive variable) [PAGE 5, Figure 3A].
Held-out execution reconstruction R²: 0.495 → 0.685 [PAGE 5, Figure 3B].
Controlled change detection: pitch mix and SGT remain at chance (~0.50 AUROC), multiscale UPG achieves near-perfect discrimination (~0.97–1.00 AUROC, false-change rate ~0.04–0.16) [PAGE 7, Figure 6A].
Localization precision P@3 for changed dimensions and supporting PAs: 0.77–1.00 [PAGE 7, Figure 6B].

Breakdown:
- Event fidelity: one-to-one correspondence with observed pitches; continuous trajectory and plate location remain attached; post-pitch outcomes excluded from event identity [PAGE 3].
- Support-adaptive resolution: trajectory-refined representation considered before pitch-type counterpart at each path length; if unsupported, backs off to shorter suffix; final fallback is target pitch type [PAGE 4].
- Multi-scale traceability: aggregate nodes retain references to constituent events and sequence edges; season-level patterns localizable to games, PAs, and individual trajectories [PAGE 4, PAGE 6].
- Breakdown regime: when detailed multi-pitch paths lack sufficient repeated support (n < n_min or g < g_min), the model backs off rather than elevating nearly unique executions into stable strategy patterns [PAGE 4]. Partial 2026* windows produce “limited evidence” classifications because recurrence support is insufficient [PAGE 6].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The historical lineage of UPG traces through several distinct scientific traditions. PITCHf/x and Statcast enabled detailed characterization of release position, velocity, movement, location, and pitch flight [PAGE 3, ref. 7], establishing the continuous physical layer that UPG preserves at event resolution. Pitch-tunneling analysis examines how consecutive pitches converge and diverge through flight [PAGE 3, ref. 10], providing the pairwise execution intuition behind UPG’s sequence-edge descriptors (changes in velocity, release position, trajectory, late-flight separation, plate location) [PAGE 3]. Directed graph representations of pitch sequences capture order via transition structures, recurring motifs, and graph embeddings [PAGE 3, refs. 2, 13, 14], but these commonly collapse states to nominal pitch labels or discrete categories, merging physically distinct realizations [PAGE 3]. Markov decision processes and game-theoretic approaches model pitch selection as sequential decision problems [PAGE 3, refs. 11, 16], while counterfactual sequence optimization estimates strategy impact on season-level statistics [PAGE 9, ref. 17]. UPG positions itself against this lineage as a retrospective diagnostic representation rather than a predictive or causal architecture: it does not claim superiority as a predictive model, and prediction/post-execution modeling are used only as auxiliary evaluations [PAGE 2].

Multi-week traps emerge from the temporal structure of the data. The evaluation uses 3.94 million MLB Statcast regular-season pitches from 2021 through July 3, 2026, with the partial 2026 season denoted 2026* [PAGE 5]. Rolling-window analyses use only completed games available within the corresponding window [PAGE 4], and representation dictionaries, trajectory transformations, and support thresholds are estimated on earlier data and frozen before evaluation [PAGE 5]. The partial 2026* bar in Figure 4 reflects a shorter observation window, where the stable fraction of high-support motifs drops sharply and most motifs are labeled limited evidence [PAGE 6]. This is intended behavior: UPG becomes more conservative when recurrence evidence is limited [PAGE 6]. However, this creates a multi-week trap for analysts: a motif detected in a short window (e.g., a two-week rolling window in mid-2026) may fail the distinct-supporting-games criterion g ≥ g_min and be backed off to a coarser representation, hiding context-conditioned adaptation that only becomes visible over longer temporal scopes. Shohei Ohtani’s case illustrates longitudinal non-stationarity: a clear interruption after 2023 followed by a return with visibly reorganized style, where four-seam usage rises, cutter usage largely disappears, and dominant three-pitch paths shift [PAGE 8, Figure 8]. Because UPG does not model biomechanical production directly and does not observe pitcher fatigue and condition [PAGE 9], a reorganization observed across weeks may reflect unobserved physical constraints rather than strategic intent, and the framework cannot distinguish these regimes without external pose-tracking or biomechanical data.

</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: Under high-leverage context (late-inning, high-base-out states, close score), pitchers are hypothesized to regress to high-support backbone motifs rather than execute fine-grained trajectory-refined paths. Jacob Misiorowski’s style exemplifies this: an unusually concentrated high-velocity fastball–slider backbone (FF share 55%, leading path FF–FF–FF at 28.8%, effective repertoire 3.02) [PAGE 8, Table 3]. In crisis states, support-adaptive backoff will favor coarse, short suffixes because fine, long paths lack repeated support, meaning the observed sequence under pressure collapses toward the pitcher’s most recurrent coarse motif. This is not necessarily optimal; it is the statistically safest representation under evidence scarcity.

Counter-trap: Batters adapt to recurring ordered subsequences. Figure 2C shows that shuffling pitch order within each PA reduces recurrence for three-pitch, four-pitch, and context-conditioned paths, proving that longer ordered subsequences recur in non-random ways [PAGE 5]. However, a motif that recurs but has weak or unstable outcome differences remains a recurring strategy pattern without a strong effectiveness claim [PAGE 5]. Bryce Elder’s SI–SL–SL motif repeats (55 occurrences, 22 games) but its outcome association does not remain stable in validation (+5.2 discovery vs −2.5 validation), so the system retains the motif while downgrading the claim [PAGE 7, Table 2]. The counter-trap is that a batter who learns the motif can negate its effectiveness, causing the outcome-direction retention to fail leave-one-game-out tests even while the structural motif remains visible [PAGE 6, Figure 4B].

Clock: Game context acts as the temporal clock. Count, handedness matchup, base-out state, inning, and score situation are conditioning attributes rather than default semantic-state components [PAGE 3], which prevents state-space fragmentation but means temporal adaptation is examined through drill-down rather than being encoded into every path identity. Yamamoto’s handedness-conditioned reorganization (four-seam and splitter emphasis vs LHB; sinker and slider prominence vs RHB) shows context-conditioned adaptation at the temporal scope of matchup [PAGE 8, Figure 9]. The “clock” here is not a game clock but the sequence of game states within and across PAs; UPG organizes events across PAs, games, rolling windows, and seasons [PAGE 4], so a motif’s temporal distribution can be inspected monthly or game-by-game [PAGE 6, Figure 5]. The recursive theory of mind is therefore: pitcher selects motif → batter anticipates based on ordered history → pitcher backoffs to coarser support-safe representation under crisis → batter updates anticipation → motif outcome association destabilizes → UPG downgrades evidentiary claim without deleting fine-grained event lineage.

</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical veto: The trajectory reconstruction r_i(t) = r_{0,i} + v_{0,i}t + (1/2)a_i t^2 assumes constant acceleration over sampled flight locations [PAGE 3, Eq. 2]. Statcast measurement error in release conditions, spin, or aerodynamic forces invalidates the exact-event claim if reconstructed 3D trajectories deviate from physical reality. Invalid intermediate observations break the sequence rather than inducing artificial adjacency [PAGE 3], so missing data create topological vetoes: a PA with one invalid pitch cannot support longer paths crossing that point, forcing backoff to shorter suffixes.

Biomechanical veto: UPG explicitly does not explain the biomechanical process that produced a trajectory [PAGE 9]. Release height, arm slot, deception, spin rate, spin axis, spin efficiency, and pitcher-specific physical constraints determine feasible pitch shapes and sequences [PAGE 9]. Two events with identical z_i trajectory-stratum projection may arise from different mechanical compensations. Therefore UPG cannot prescribe mechanical changes or validate whether an execution change was intentional, a drift due to fatigue, or an injury adaptation. Veto proof: any coaching prescription derived solely from UPG motifs without biomechanical confirmation is invalid.

Weather veto: Trajectory strata T^−, T^0, T^+ are estimated from a historical reference distribution and held fixed [PAGE 3]. Air density, temperature, humidity, and wind alter flight but are not covariates in the semantic hierarchy. A pitch classified as T^+ in cool April air may be physically different from one classified T^+ in warm July air despite identical standardized projection, because the reference distribution does not condition on weather. Veto proof: cross-season or cross-climate comparisons of trajectory strata are confounded unless weather is added to c_i context or strata are re-estimated within homogeneous weather strata (which would itself fragment support).

Veto adjudication outcomes:
- Single-game artifact veto: Figure 4’s leave-one-game-out test shows top-10 retention and outcome-direction retention largely persist after removing the highest-support game across full seasons [PAGE 6], passing this veto. Partial 2026* fails it (stable fraction drops sharply), so short-window claims are vetoed.
- Discrete-collapse veto: Figure 2A–B shows nominally identical SL–SL–FF sequences with same zone/count cell but visibly different trajectories [PAGE 5], validating the need for continuous execution. Discrete pitch-mix and SGT representations are vetoed for execution-level diagnosis.
- Causal veto: UPG does not claim causal identification or future-performance forecasting [PAGE 2, PAGE 7, PAGE 9]. Any inference that a motif “caused” whiffs or favorable contact is vetoed because unobserved factors (batter anticipation, umpire decisions, catcher coordination) may confound outcome pathways [PAGE 9].

</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
RLVR Veto Scenario 1 — Threshold-collapse falsification.
Setup: Vary n_min and g_min in Eq. 6 across held-out 2025 games while holding trajectory strata frozen. Verification: measure supported path coverage and held-out execution R² as functions of threshold strictness. Prediction: As n_min increases from 1 to 50 and g_min from 1 to 10, coverage collapses monotonically from 94.9% back toward 18.9%, and R² degrades from 0.685 toward 0.495. If coverage remains above 80% at n_min ≥ 20, the claimed support-adaptive trade-off is falsified because the representation would not be fragmenting enough to require backoff.

RLVR Veto Scenario 2 — Stratum leakage falsification.
Setup: Re-estimate trajectory standardization, projection u_k, and tertile thresholds within the diagnostic window instead of freezing them before evaluation [PAGE 3]. Verification: compare held-out R² between frozen-stratum UPG and re-estimated-stratum UPG on truly held-out 2026* games. Prediction: Re-estimated strata will inflate in-window R² above 0.685 but will fail to generalize to 2026*, dropping below the frozen baseline. If re-estimated strata outperform frozen strata on held-out 2026*, the stationarity assumption is falsified and within-type trajectory variation is non-stationary within the window.

RLVR Veto Scenario 3 — Outcome contamination falsification.
Setup: Include post-pitch annotations o_i (whiff, contact quality, run-value change) in event identity φ_r so that motifs are partially defined by outcomes. Verification: rerun the controlled execution-change detection (Figure 6A) where pitch type, zone, and count are fixed but execution distribution shifts at a known game boundary. Prediction: Pitch mix and SGT remain at chance (~0.50 AUROC), but outcome-contaminated UPG will also drop to chance (~0.50 AUROC, false-change rate near 0.5) because the representation encodes post-pitch outcomes rather than pre-pitch execution. If outcome-contaminated UPG still achieves near-perfect discrimination (~0.97–1.00 AUROC), then the change signal is not execution-localized and the causal separation of structure from effectiveness is falsified.

</RLVR_COUNTERFACTUAL_VETOES>