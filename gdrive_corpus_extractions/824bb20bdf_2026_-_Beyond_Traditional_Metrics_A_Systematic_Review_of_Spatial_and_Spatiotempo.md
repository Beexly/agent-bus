---
source: "2026 - Beyond Traditional Metrics A Systematic Review of Spatial and Spatiotemporal Indicators in 5-on-5 Basketball - Liu et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Journal of Sports Science and Medicine/In Press/2026"
pages: 20
model: deepseek/deepseek-v4.1-flash-1017
words: 7539
---

<NATIVE_REASONING>
We need answer to user. Need produce GSE + GSI Frontier Reasoning Foundry with exact XML sections, >=1000 words depth, zero betting lines, no fake equations, cite pages exact [PAGE N] and verbatim quotes when source pages provided. Need analyze document. Need likely "DRIVE SOURCE" asks? They gave source. Need respond in required format. We must include THINK_TRACE >=400 words deep multi-hop derivation & gray-zone audit. SOURCE_OPERATORS_AND_EQUATIONS formal LaTeX, units, page citations, breakdown. RETROCAUSAL_GENEALOGY. RECURSIVE_THEORY_OF_MIND. CROSS_LAYER_VETO_ADJUDICATION. RLVR_COUNTERFACTUAL_VETOES 3 scenarios + predictions. Must avoid betting lines and no toy equations. Need be careful not mention spreads/totals/moneylines/odds. We can discuss basketball performance only. Need probably summarize paper. No specific question beyond drive source. We need produce rigorous audit of source. Need cite exact [PAGE N] markers and verbatim quotes. Could include quotes from source. Need >=1000 words. Need formal LaTeX equations using real definitions from paper, not invented. Source has definitions: spatial indicators vs spatiotemporal; measurement approaches; relative phase; team spatial center and stretch index; spatial relative field-goal efficiency empirical Bayes smoothing; attacker-defender ratio; expected possession value; intrinsic dimension; density-functional fluctuation theory; defensive effects. Need formal equations for some? We can state as source-defined constructs without inventing formulas. However instruction asks "Formal LaTeX, units, page citations, breakdown." We can define equations that are explicit or general definitions. Need avoid inventing fake ratios. We can use definitions from source: e.g., stretch index as mean distance of players from team spatial center; team spatial center as geometric center. We can formalize:
Let positions r_i(t) in meters in court-referenced coordinates. Team centroid c(t) = (1/n) Σ r_i(t), n=5 for on-court team? But source says team spatial center geometric center each team; stretch index mean distance of players from center. This is standard. Units m. Need note source did not specify formula, so this is formalization consistent with metric definition [PAGE 8]. But maybe "formal LaTeX" okay. Need exact singularity/breakdown regimes. For centroid no singular except n=0; stretch index nonnegative. Relative phase:
φ_ij(t)=? relative phase between longitudinal/lateral displacement trajectories. Could define φ = arctan2(...)? Risk invent. Better state qualitative: dyadic relative phase θ_ij(t) ∈ S^1, units radians; in-phase θ≈0 mod 2π; anti-phase θ≈π mod 2π; transitional otherwise. Source page 8 says relative phase quantifies in-phase, anti-phase, transitional. No exact formula. Formal equation for relative phase from two phase signals: Δφ = φ_i - φ_j mod 2π if phase estimates available. This is not fake; standard. Need note source does not supply extraction algorithm. Good.

EPV: expected points remaining in possession, units points. EPV(t)=E[points remaining | state_t]. Source page 9. Not invented. Intrinsic dimension: latent dimensionality, dimension count (unitless). ID estimate via Bayesian mixture model. DFFT player-density fields etc.

Defensive shot frequency effect and shot efficiency effect: model-based estimates of how defender alters opponent shot frequency and success across court regions. Units: frequency effect maybe per unit area/time? Source no units. We can state unitless/log-scale or probability difference; source not explicit. Must be careful.

Need CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto proof. Basketball indoor; weather veto? Need discuss physical/biomechanical/weather veto. Paper excludes biomechanical/physiological/workload-only studies [PAGE 4]. So cross-layer veto: physical/biomechanical variables cannot be substituted for spatial tactical metrics without validation; weather mostly irrelevant indoor, but environmental conditions (court surface, tracking calibration) not included. Need "veto proof": e.g., no biomechanical or weather variables in included indicators; DFFT density fields exclude height/leaping ability [PAGE 10]; that limits physical interpretation. We need make veto adjudication.

RETROCAUSAL_GENEALOGY: historical/scientific lineage & multi-week traps. Need discuss evolution from event/box score to positional tracking, Goldsberry 2012, Bourbousson 2010, Franks 2015, Cervone 2016, etc. Multi-week traps: interpreting open shot as offensive quality, team spread as spacing, model-derived outputs as tactical labels, conflating state vs sequence, overgeneralizing from one match/season. Need cite.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This sounds like betting/crisis? But we can adapt to basketball analysts/coaches under pressure. Need avoid betting. Discuss how analysts/coaches under time pressure revert to box-score/outcome habits; counter-trap is to overcorrect to spatial metrics as truth; clock is shot-clock/possession phase and decision timing. Need mention "clock" as shot clock and possession phase. Recursive theory of mind: coach thinks analyst thinks player etc. Need no betting. Could mention crisis habit regression: late-clock forced shots misread as poor offense; counter-trap: over-interpret open shots as good process; clock: shot clock pressure and phase. Need cite page 2 quote about same successful shot etc. Page 1 or 2: "The same successful shot may reflect a well-organized possession ... or it may result from an individual solution late in the shot clock." [PAGE 2]. Great.

RLVR_COUNTERFACTUAL_VETOES: need 3 verifiable RLVR veto scenarios + predictions. RLVR = reinforcement learning with verifiable rewards? Need provide scenarios where a proposed claim is vetoed by source. Need predictions: testable. Must be verifiable. Avoid betting lines. Could be:
1. Claim "A high stretch index proves effective spacing." Veto: source says stretch index describes expansion but may reflect disconnected players; need possession phase/ball location/opponent. Prediction: Adding phase/action labels to stretch index will reduce false positives by X? Need verifiable but no fake numbers? We can predict direction, not exact. Maybe "expert-coded possession labels will show mixed labels for high stretch index; high stretch index alone will not separate effective spacing from disconnected movement." Verifiable via expert coding.
2. Claim "Low defender distance always indicates good defense." Veto: source says short defender-shooter distance may be effective closeout or late reaction; need closeout timing/help context. Prediction: adding closeout timing and help-defense labels changes classification; low distance alone has low agreement with expert defensive quality.
3. Claim "EPV increase is tactical effectiveness." Veto: EPV is model-estimated expected points remaining; tactical meaning depends on state definitions, transitions, spatial info. Prediction: different state/transition definitions produce divergent EPV trajectories for same possession; EPV alone fails expert tactical judgment.
Need mention RLVR reward can be computed from annotations. Good.

Need include SOURCE_OPERATORS_AND_EQUATIONS. Need exact page citations and quotes. We can quote multiple exact phrases. Need ensure verbatim quotes accurate. Let's collect key quotes:

[PAGE 1] Abstract: "spatial indicators were defined as location-based measures captured at a given moment, such as shot location, defender distance, or team spacing. Spatiotemporal indicators were defined as measures that capture movement or changes in spatial configuration over time, such as dyadic coordination, team expansion, or changes in possession value." Great.
[PAGE 2] "The same successful shot may reflect a well-organized possession in which the defense has been displaced, or it may result from an individual solution late in the shot clock. Similarly, a completed pass may help maintain an offensive advantage, but it may also be made primarily to release pressure after the initial option has been denied." Great.
[PAGE 2] "location-based analysis is better understood as a way of representing tactical behavior rather than as direct evidence of tactical effectiveness." Great.
[PAGE 2] "possession context refers to the situational conditions within a possession that shape how an indicator should be interpreted. These conditions include the phase of play, action type, player-ball relations, defensive pressure, and the surrounding sequence of actions before and after the measured event." Great.
[PAGE 4] eligibility: "Studies in which the derived variables were used only for biomechanical, physiological, or workload-monitoring purposes and were not interpreted in relation to basketball performance or tactical behavior." excluded. Great.
[PAGE 4] "Studies based entirely on simulated data, conceptual examples, or algorithmic demonstrations without application to real match data." excluded. Good.
[PAGE 5] measurement approach: "state-based when indicators were derived from discrete events or single time points, sequence-based when they were derived from trajectories or time windows, and mixed when both approaches were used" [PAGE 5].
[PAGE 5] Results: 759 records, 16 studies. Good.
[PAGE 7] classification: "Of the 16 included studies, five used a state-based approach, eight used a sequence-based approach, and three used a combined state- and sequence-based approach." [PAGE 7].
[PAGE 7] Table 3 maybe not needed.
[PAGE 8] Table 4 Bourbousson: "Dyadic relative phase: the phase relationship between two players’ longitudinal or lateral displacement trajectories, used to quantify in-phase, anti-phase, or transitional coordination between player dyads." [PAGE 8]. 
[PAGE 8] "Team spatial center and stretch index: the geometric center of each team and the mean distance of players from that center, used to quantify team displacement, expansion, and contraction." [PAGE 8].
[PAGE 8] "These indicators describe team movement and spacing, but they should not be read as direct evidence of tactical effectiveness without information on possession phase and action context." [PAGE 8].
[PAGE 8] Shortridge: "Spatial relative field-goal efficiency: empirical Bayes-smoothed shooting efficiency at court-specific locations, used to estimate location-adjusted shooting performance." [PAGE 8].
[PAGE 9] Cervone: "Expected possession value: model-estimated expected points remaining in a possession, derived from multiresolution stochastic modeling of player movement and discrete game events." [PAGE 9].
[PAGE 9] Franks: "Defensive shot frequency effect and defensive shot efficiency effect: model-based estimates of how a defender alters opponent shot frequency and shot success across court regions." [PAGE 9].
[PAGE 10] Santos-Fernandez: "Intrinsic dimension: a Bayesian mixture-model estimate of the latent dimensionality of player-tracking data, used to quantify movement complexity and dependence in offensive sequences and shot-chart patterns." [PAGE 10].
[PAGE 10] Barron: "Density-functional fluctuation theory indicators: player-density fields, location-preference parameters, player–player interaction terms, and player-gravity estimates inferred from NBA tracking data." [PAGE 10].
[PAGE 10] Jiao: "Possession-level spatiotemporal indicators: ball kinematics, offensive and defensive team spatial structure, shooter-specific spatial variables, and contextual variables calculated for set-play possessions." [PAGE 10].
[PAGE 11] Table 5 boundary: "These indicators describe the immediate shot condition, but not the full possession process that produced it. Stronger tactical interpretation requires information on the preceding pass, dribble, screen, or defensive rotation." [PAGE 11].
[PAGE 11] Interactional: "These indicators show how players were related in space and time, but they cannot determine on their own whether the relation reflected planned execution, defensive breakdown, or late-possession adaptation." [PAGE 11].
[PAGE 11] Collective: "These indicators characterize collective structure, but their tactical meaning depends on possession phase, ball location, opponent organization, and sequence outcome." [PAGE 11].
[PAGE 11] Model-derived: "These indicators provide model-based summaries rather than direct tactical labels. Their interpretation depends on model inputs, state definitions, segmentation rules, and validation evidence." [PAGE 11].
[PAGE 15] "The main issue for future work is therefore not whether models should become more complex, but whether that complexity helps answer a recognizable tactical question." [PAGE 15].
[PAGE 15] Limitations: "many studies reported what an indicator was associated with, such as shot outcome, spacing, or possession value, but provided less detail about the exact possession phase or action sequence in which the indicator was observed." [PAGE 15].
[PAGE 16] future: compare indicators against expert-coded tactical judgments. [PAGE 15-16].
[PAGE 18] Key points: "Many indicators function as descriptive proxies whose tactical meaning depends on modelling assumptions, contextual reference, and the extent to which opponent behavior is explicitly considered." [PAGE 18]. 
"Progress in spatial analyses of basketball tactics is more likely to come from clearer links between indicator definitions and tactical questions than from further expansion of available metrics." [PAGE 18].

Need maybe mention reporting completeness: STROBE and TRIPOD; κ values. Good to cite [PAGE 3] for methods and [PAGE 4] for appraisal. Need maybe include source operators and equations with page citations. Formal LaTeX:

Define court-referenced position \(\mathbf r_i(t)=(x_i(t),y_i(t))\in \mathbb R^2\) in meters, \(i=1,\dots,n\), \(n=5\) for on-court team. Team spatial center:
\[
\mathbf c(t)=\frac{1}{n}\sum_{i=1}^{n}\mathbf r_i(t), \quad [\mathbf c]=\mathrm{m}.
\]
Stretch index:
\[
S(t)=\frac{1}{n}\sum_{i=1}^{n}\|\mathbf r_i(t)-\mathbf c(t)\|_2, \quad [S]=\mathrm{m}.
\]
This is source-consistent. Note source defines as "mean distance of players from that center" [PAGE 8]. Breakdown: n=0 undefined; n=1 S=0; small S compact, large S expanded but not tactical quality; mirrored by aggregation masking roles. Unit m. Need exact singularity: n=0 undefined, n=1 degenerate zero; if tracking gaps, c and S biased.

Relative phase:
\[
\Delta\phi_{ij}(t)=[\phi_i(t)-\phi_j(t)] \bmod 2\pi,\quad [\Delta\phi]=\mathrm{rad}.
\]
In-phase \(\Delta\phi\approx0\pmod{2\pi}\), anti-phase \(\Delta\phi\approx\pi\pmod{2\pi}\), transitional otherwise. Source [PAGE 8]. Breakdown: phase extraction from noisy trajectories; matched player-opponent dyads; not tactical purpose; small samples. Good.

EPV:
\[
\mathrm{EPV}(t)=\mathbb E[\text{points remaining in possession}\mid \mathcal F_t],\quad [\mathrm{EPV}]=\mathrm{points}.
\]
Source [PAGE 9]. Breakdown: model-dependent state definition, transition kernels, event segmentation; computational complexity. Not a tactical label.

Intrinsic dimension:
\[
d_{\mathrm{ID}}(t)\in\mathbb N \text{ or } \mathbb R_{\ge0}
\]
latent dimensionality estimate; unitless. Source [PAGE 10]. Breakdown: fixed mixture components, temporal dependence not fully modeled, no measurement-noise component. Not specifying action. Good.

Spatial relative field-goal efficiency:
\[
\mathrm{SRE}(\mathbf s)=\text{empirical-Bayes-smoothed FG\% at court location }\mathbf s
\]
unit probability or percentage; source [PAGE 8]. Breakdown: shot-location only, no defensive pressure/pass sequence/possession context; smoothing prior. Good.

Defensive shot frequency/efficiency effect:
\[
\Delta f_D(\mathbf s),\ \Delta p_D(\mathbf s)
\]
model-based estimates of how defender alters opponent shot frequency and shot success across court regions; units: frequency effect (shot frequency scale, e.g., shots per unit area per unit time if specified; source does not give explicit units) and probability difference. Source [PAGE 9]. Breakdown: inferred defensive assignments, team strategy confound; not isolated ability.

DFFT density:
\[
\rho(\mathbf r)=\sum_i \text{Gaussian density field?}
\]
Source says player-density fields, two-dimensional Gaussian density fields. We can formalize \(\rho(\mathbf r)\ge0\) with units m^{-2} if normalized. But source doesn't give exact equation. We can state "density field on court plane, units m^{-2} if normalized; source does not report normalization." Avoid inventing. Player gravity estimates inferred; no height/leaping. Good.

Maybe include "attacker-to-defender ratio":
\[
R_A(t)=\frac{N_A(t)}{N_D(t)}
\]
but denominator zero singular. Source defines "attacker-to-defender ratio within seven predefined court areas" [PAGE 8]. Units dimensionless. Breakdown: \(N_D=0\) undefined; small cell counts; does not identify tactical actions. But this is a ratio; is it "toy equation"? It's source-defined. We can include but caution not fake. It's fine. Need not overdo.

Need "SOURCE_OPERATORS_AND_EQUATIONS" includes formal LaTeX, units, page citations, breakdown. Need maybe "operators" as measurement approach state vs sequence. We can define state operator \(\mathcal S_t\) and sequence operator \(\mathcal Q_{[t_1,t_2]}\)? Could be formal but not fake? We can describe:
State-based indicator \(I_t = g(\{\mathbf r_i(t),\mathbf b(t)\})\) at single time/event.
Sequence-based \(I_{[t_1,t_2]}=h(\{\mathbf r_i(t),\mathbf b(t)\}_{t\in[t_1,t_2]})\).
Units depend on g/h. This is a formal definition from source classification [PAGE 5]. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. Need state "weather veto is nearly inert for indoor regulation basketball but not zero: arena environment and tracking calibration could affect data quality; source does not include weather as indicator. Physical/biomechanical veto: the review explicitly excludes biomechanical/physiological/workload-only variables [PAGE 4], and Barron model excludes height/leaping ability [PAGE 10]. Therefore any claim that spatial indicator is a direct physical/biomechanical measure is vetoed. Veto proof: inclusion criteria require tactical relevance and location data; physical-only studies excluded. Also DFFT model omits height/leaping. Weather: no outdoor weather variable; indoor court-referenced data. If weather affects arena (humidity? court condensation) not in source; cannot infer. So veto: no cross-layer substitution. Need mention "physical/biomechanical/weather veto proof" maybe prove no layer can override spatial tactical interpretation without explicit data. We can phrase.

Need "RETROCAUSAL_GENEALOGY" historical/scientific lineage & multi-week traps. Need mention lineage: event/box-score metrics from Hughes & Bartlett 2002, Kubatko 2007, Oliver 2004; early positional constraints; Goldsberry 2012 shot charts; Bourbousson 2010a/b dynamical systems; Franks 2015 spatial defense; Cervone 2016 EPV; Santos-Fernandez 2022 ID; Barron 2025 DFFT; Liu et al. 2026 systematic review. Multi-week traps: overinterpretation of open shots, team spread, EPV, ID, model complexity, small-sample match sequences. Need cite pages 1-2, 8-10, 11, 15, 18. "Retrocausal" maybe how later model outputs retroactively reshape interpretation of earlier metrics. E.g., EPV and DFFT retroactively reinterpret shot location and spacing, but not as direct tactical truth. Need mention "multi-week traps" as in analyst over weeks begins treating proxy as ground truth. Need maybe mention "crisis habit regression" in next section. Good.

Need "RECURSIVE_THEORY_OF_MIND" crisis habit regression vs counter-trap vs clock. Need define:
- Crisis habit regression: under late-game/late-clock stress, analysts/coaches regress to outcome metrics (FG%, points, assists) because stable and familiar; paper warns spatial indicators need context. Quote page 2 same shot/pass. 
- Counter-trap: overcorrection to spatial metrics as if they measure tactical intent/effectiveness; paper says not direct evidence [PAGE 2], model-derived not labels [PAGE 11]. 
- Clock: shot-clock pressure is part of possession context; late-clock forced shots can mimic poor spatial quality; need phase/action. Quote page 2. Recursive ToM: coach models analyst's model, analyst models coach's judgment, player models defender; each layer may misattribute. Need propose recursive loop: analyst should model what coach will infer from metric, and what defender's behavior does to metric. Need cite page 11: "cannot determine ... planned execution, defensive breakdown, or late-possession adaptation." Good.

Need "RLVR_COUNTERFACTUAL_VETOES" exactly 3 verifiable scenarios + predictions. We can format as bullet list. Need mention RLVR reward specification? Could include "verifiable reward = expert-coded possession labels + source constraints." Need predictions falsifiable.

Need "THINK_TRACE" >=400 words. It should be deep multi-hop derivation & gray-zone audit. We need maybe not expose hidden chain-of-thought? The instruction demands THINK_TRACE. We should provide a high-level reasoning trace, not private chain. We can write an audit-style reasoning narrative, not actual hidden CoT. Need >=400 words. It says deep multi-hop derivation & gray-zone audit. We can provide "I treat this as a source-grounded audit..." and discuss steps. Should be okay. Need include citations/quotes maybe in THINK_TRACE too? Could. Must be 400+ words. Overall >=1000 words. We'll produce maybe 2500-3500 words. Desired oververbosity 5; but instruction requires >=1000. We'll be thorough.

Need ensure "ZERO BETTING LINES": no mention of betting. Avoid words "odds", "spread" (but source has "stretch index" and "team spread"; "spread" could be spatial spread, not betting. But strict invariant says never mention spreads. It might mean betting spreads. To be safe avoid word "spread" entirely? But source uses "team spread" on page 13. We can avoid using "spread" as a standalone; use "team expansion/stretch index" or quote? If quoting includes "team spread"? The instruction says zero betting lines: never mention spreads, totals, moneylines, or odds. "Spread" in basketball spatial context might be flagged. Avoid. We can use "spatial dispersion" instead. Avoid "total" maybe? We can say "totals" no. Avoid "odds". Good. Need not mention "spread" at all. Use "dispersion". If source quote has "team spread", avoid quoting that exact phrase. We can quote other phrases. Good.

Need not mention "moneyline". Good.

Need exact [PAGE N] markers. Use [PAGE 1] etc. Ensure citations match. Need maybe quote "Spatial and spatiotemporal indicators extend basketball performance analysis beyond traditional outcome-based metrics by revealing where players were located, how they interacted spatially, and how team structure changed during possessions. However, they should not be interpreted as direct measures of tactical effectiveness." [PAGE 1]. Great.

Need mention "PAGE 1" has abstract. Good.

Potential issue: Source says published online 01 June 2026 after accepted 23 June 2026 (inconsistent dates). Not relevant. Could mention gray-zone: date inconsistency? It might be a source quality issue. But not necessary. Maybe mention in THINK_TRACE as gray-zone audit? The paper says Received 26 January 2026 / Accepted 23 June 2026 / Published online 01 June 2026 [PAGE 1], which is chronologically inconsistent (published before accepted). Could be a data quality gray-zone. But maybe not needed. It is a source anomaly. Could mention as gray-zone audit: bibliographic metadata has an internal date inconsistency; does not affect content but warrants caution. But user wants deep audit. Good point. But don't overfocus.

Need "GSE + GSI Frontier Reasoning Foundry" maybe answer should be formatted in XML sections exactly. We can start with maybe "Source-grounded audit of Liu et al. (2026)." Then XML sections. They specified exact XML sections. Need include all six. We can include no extra headings outside? Fine. Need maintain valid XML? If quotes contain ampersands? Avoid or escape. We can use &amp; if needed. But exact XML sections means tags. We'll avoid ampersands. Use "and". Need ensure no unescaped <. Use LaTeX with < maybe in math? XML text with `<` may break. Better avoid `<` in text. Use \(\le\) not <. In LaTeX, use \leq. Good. Use \(n=5\). No less-than signs. Use "greater than" words. Avoid ampersand. Use "and". Good.

Need include formal LaTeX equations; in XML text, LaTeX with backslashes okay. Need maybe use \[...\] inside. That's fine.

Need "SOURCE_OPERATORS_AND_EQUATIONS" with equations. Need not use < or &.

Let's draft sections.

THINK_TRACE: Need >=400 words. Write in first person? "The audit proceeds in five hops." Include source constraints. Need not reveal chain-of-thought? We can present "Derivation audit" with explicit premises and conclusions. That's okay. We should not say "I thought..." too much. It is a "trace" but high-level. We'll write ~600 words. Include:
1. Identify unit of analysis: regulation 5-on-5, court-referenced location data, spatial/spatiotemporal indicators; excludes small-sided/simulated [PAGE 2-4].
2. Distinguish measurement approach state vs sequence [PAGE 5]; classification 5/8/3 [PAGE 7].
3. Map indicator families to inference strength: local, interactional, collective, defensive, model-derived [PAGE 11]. The paper's central thesis: indicators represent tactical behavior, not direct tactical effectiveness [PAGE 2].
4. Gray zones: open shot ambiguity; team expansion; EPV model assumptions; ID complexity; DFFT density; defensive assignments. Quotes.
5. Reporting transparency issues: STROBE/TRIPOD, missing validation, limitations [PAGE 4, 6, 15]. Date inconsistency maybe.
6. Conclusion: any claim must include possession phase, action type, defender proximity, offense/defense context, state/sequence, model assumptions. Good.

SOURCE_OPERATORS_AND_EQUATIONS: Need include equations and breakdown. Write subheadings maybe bold within XML? It's fine. Need include "Operators" state vs sequence. Then equations:
- State/sequence operator
- Team center and stretch index
- Relative phase
- Attacker-defender ratio (optional)
- Spatial relative field-goal efficiency
- EPV
- Defensive effects
- Intrinsic dimension
- DFFT density field.
Need maybe not too many equations to keep clarity. Include units and breakdown for each. Use exact quotes. Need cite pages.

Let's construct carefully:

"Source-defined operator: state-based \(I_t = g(\{\mathbf r_i(t),\mathbf b(t)\}_{i=1}^{5})\), sequence-based \(I_{[t_1,t_2]} = h(\{\mathbf r_i(t),\mathbf b(t)\}_{t\in[t_1,t_2]})\). Source classifies state-based as discrete events/single time points and sequence-based as trajectories/time windows [PAGE 5]. Units depend on g/h; this review does not supply a universal unit."

Team center:
\[
\mathbf c_A(t)=\frac{1}{5}\sum_{i\in A}\mathbf r_i(t), \quad [\mathbf c_A]=\mathrm{m}
\]
Stretch:
\[
S_A(t)=\frac{1}{5}\sum_{i\in A}\|\mathbf r_i(t)-\mathbf c_A(t)\|_2,\quad [S_A]=\mathrm{m}
\]
Source quote [PAGE 8]. Breakdown: n=0 undefined; n=1 zero; tracking gaps; aggregation masks roles; high S not quality. Good.

Relative phase:
\[
\Delta\phi_{ij}(t)=[\phi_i(t)-\phi_j(t)]\bmod 2\pi,\quad [\Delta\phi]=\mathrm{rad}
\]
Source quote [PAGE 8]. Breakdown: phase extraction noisy; in-phase not tactical purpose; small sequences. Good.

Attacker-defender ratio:
\[
R(t)=\frac{N_A(t)}{N_D(t)},\quad [R]=1
\]
Source [PAGE 8]. Breakdown: \(N_D=0\) undefined; local count only; does not identify creation. Good.

Spatial relative FG efficiency:
\[
\mathrm{SRE}(\mathbf s) = \Pr(\mathrm{make}\mid \mathrm{shot\ at\ }\mathbf s,\ \mathrm{empirical\ Bayes\ smoothing})
\]
Units probability or percentage. Source [PAGE 8]. Breakdown: one NBA season, no defensive pressure/pass sequence. Good.

EPV:
\[
\mathrm{EPV}(t)=\mathbb E[P_{\mathrm{remaining}}\mid \mathcal F_t],\quad [\mathrm{EPV}]=\mathrm{points}
\]
Source [PAGE 9]. Breakdown: model state definitions, transitions, segmentation, computational complexity. Good.

Defensive effects:
\[
\Delta f_D(\mathbf s),\quad \Delta p_D(\mathbf s)
\]
source [PAGE 9]. Units: frequency effect on shot frequency; probability effect on shot success; exact scale not specified. Breakdown: inferred assignments, team strategy confound. Good.

Intrinsic dimension:
\[
d_{\mathrm{ID}}= \text{latent dimensionality estimate},\quad [d_{\mathrm{ID}}]=1
\]
Source [PAGE 10]. Breakdown: fixed mixture components, no measurement noise, temporal dependence not fully modeled. Good.

DFFT:
\[
\rho(\mathbf r,t)\geq 0,\quad [\rho]=\mathrm{m}^{-2}\ \text{if normalized}
\]
Source [PAGE 10]. Breakdown: two-dimensional Gaussian density fields; player-specific limited to high-minute players; no height/leaping. Good.

Need "exact singularity/breakdown regimes" maybe for each. Good.

RETROCAUSAL_GENEALOGY: Write ~300-400 words. Mention lineage. Need "multi-week traps" maybe list 5 traps. Cite.

RECURSIVE_THEORY_OF_MIND: ~300 words. Mention crisis habit regression, counter-trap, clock. Good.

CROSS_LAYER_VETO_ADJUDICATION: ~300 words. Need physical/biomechanical/weather veto proof. Good.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios. Each with claim, veto, prediction. ~400 words.

Need overall >=1000; likely >3000.

Need ensure no "spreads" word. In RETROCAUSAL maybe avoid "team spread". Use "team expansion". In CROSS maybe "weather" okay. Avoid "total". "Totals" not. Good.

Need be mindful "odds" word not appear. "moneylines" not. "spread" not. Good.

Need "basketball" okay. "shot" okay.

Potential issue: user requests "Crisis habit regression vs counter-trap vs clock." We can use exact phrase "clock" and "shot clock". Good.

Need "RLVR" maybe explain "RLVR-style verifier". We can say "For each scenario, a verifiable reward can be built from expert-coded possession labels, tracking-derived variables, and model diagnostics." Good.

Need maybe mention "No new data" from source? Not necessary.

Need include "SOURCE_OPERATORS_AND_EQUATIONS" page citations exact. Good.

Let's compose final answer. Need ensure XML tags exactly as specified. We can use line breaks. No markdown headings outside. Inside tags, we can use paragraphs and bullets. Must be valid XML? Bullets with hyphens okay. Need escape "&" if any. Avoid "&". Use "and". Avoid `<` in text. Use "greater than" not >? In XML text, > is okay. But use \geq. Good.

Need be careful with "≤" maybe okay; but no need. We can use LaTeX.

Need no "spread" substring? The word "widespread" contains "spread" but not betting. To be safe avoid "widespread". Use "common". Avoid "spread" altogether. Check draft: "team spread" not use. "spatial dispersion" okay. "stretch index" okay. Good.

Need no "total" as betting. Avoid "total". Use "whole". "total of 759" maybe source says total; but "total" could be interpreted as betting total? The invariant says never mention totals. Avoid "total". Say "759 records were identified" not "a total of". Good.

Need no "line" as betting? "lineage" okay? "line" can be betting line. But "lineage" not "line". "one line" avoid. Good.

Need maybe "multi-week traps" phrase. Good.

Let's draft. Use formal tone.

Need maybe include "STROBE-based framework" and "TRIPOD-informed" citations [PAGE 3-4]. Good.

Let's write final.
</NATIVE_REASONING>

<THINK_TRACE>
The audit begins by fixing the source’s unit of analysis rather than importing an external one. Liu et al. restrict the review to “standard, regulation 5-on-5 basketball” and to studies using “court-referenced player and/or ball location data during match play” [PAGE 1]. They deliberately exclude small-sided games, drills, 3-on-3 formats, and simulated tasks because “changes in player number, court use, task goals, decision options, and defensive organization can alter the spatial relations from which these indicators are derived” [PAGE 2]. This is the first gray-zone veto: a spatial metric from a modified task cannot be transferred to regulation 5-on-5 without evidence that the relational constraints are preserved.

The second hop is definitional. The paper defines spatial indicators as “location-based measures captured at a given moment, such as shot location, defender distance, or team spacing,” and spatiotemporal indicators as “measures that capture movement or changes in spatial configuration over time, such as dyadic coordination, team expansion, or changes in possession value” [PAGE 1]. This distinction is not cosmetic. It determines whether an indicator is a state snapshot or a sequence summary. The review later formalizes this as state-based measurement from “discrete events or single time points,” sequence-based measurement from “trajectories or time windows,” and mixed measurement when both are used [PAGE 5]. Among the 16 included studies, “five used a state-based approach, eight used a sequence-based approach, and three used a combined state- and sequence-based approach” [PAGE 7]. Therefore any comparative claim must first align the measurement operator: a single-event defender distance and a possession-long coordination metric are not interchangeable evidence.

The third hop maps indicator families to inferential strength. The review organizes indicators into individual/local, interactional, collective, defensive-impact, and model-derived/complexity categories [PAGE 11]. The central interpretive rule is stated in the abstract: spatial and spatiotemporal indicators reveal “where players were located, how they interacted spatially, and how team structure changed during possessions,” but “they should not be interpreted as direct measures of tactical effectiveness” [PAGE 1]. The body repeats the rule more strongly: “location-based analysis is better understood as a way of representing tactical behavior rather than as direct evidence of tactical effectiveness” [PAGE 2]. This is the master constraint for all downstream claims.

The fourth hop is a gray-zone audit of each family. Local indicators describe the “immediate shot condition, but not the full possession process that produced it” [PAGE 11]. Interactional indicators “show how players were related in space and time, but they cannot determine on their own whether the relation reflected planned execution, defensive breakdown, or late-possession adaptation” [PAGE 11]. Collective indicators “characterize collective structure, but their tactical meaning depends on possession phase, ball location, opponent organization, and sequence outcome” [PAGE 11]. Model-derived indicators “provide model-based summaries rather than direct tactical labels,” and their interpretation depends on “model inputs, state definitions, segmentation rules, and validation evidence” [PAGE 11]. The audit therefore cannot accept a one-variable causal claim such as “more space equals better offense” or “closer defender equals better defense.” The paper’s own example is decisive: “The same successful shot may reflect a well-organized possession in which the defense has been displaced, or it may result from an individual solution late in the shot clock” [PAGE 2].

The fifth hop concerns reporting transparency. The review uses STROBE-based and adapted TRIPOD-informed appraisals, but explicitly says these appraisals were not used “to exclude studies, rank study quality, or weight findings quantitatively” [PAGE 4]. Reporting was less consistent for bias, study size, validation, limitations, and generalizability [PAGE 6]. The limitations section adds that many studies reported “what an indicator was associated with, such as shot outcome, spacing, or possession value,” but gave less detail about “the exact possession phase or action sequence in which the indicator was observed” [PAGE 15]. This is a structural weakness for tactical inference, because the missing variable is often the one that assigns meaning to the spatial pattern.

A final gray-zone audit item is bibliographic: the first page lists “Received: 26 January 2026 / Accepted: 23 June 2026 / Published (online): 01 June 2026” [PAGE 1], an internal date ordering anomaly. This does not invalidate the content, but it is a reminder that source metadata should be checked separately from substantive claims. The overall derivation is therefore: regulation 5-on-5 context first; measurement operator second; indicator family third; possession and action context fourth; model assumptions fifth; and only then a tactical inference. Any claim that skips one of these hops is underdetermined by the source.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The review’s measurement operators can be written without inventing new basketball ratios. Let \(\mathbf r_i(t)=(x_i(t),y_i(t))\) be the court-referenced position of player \(i\) at time \(t\), in metres, and let \(\mathbf b(t)\) be the ball position when available. A state-based indicator is a function of a single time point or discrete event:
\[
I_t = g\bigl(\{\mathbf r_i(t)\}_{i=1}^{5},\mathbf b(t)\bigr),
\]
where the unit of \(I_t\) is inherited from \(g\). A sequence-based indicator is a function over a time window:
\[
I_{[t_1,t_2]} = h\bigl(\{\mathbf r_i(t),\mathbf b(t)\}_{t\in[t_1,t_2]}\bigr).
\]
The source defines state-based measurement as derived “from discrete events or single time points,” sequence-based measurement as derived “from trajectories or time windows,” and mixed measurement as both [PAGE 5]. There is no universal unit for \(I\); the unit must be stated for each indicator. The breakdown regime is operator mismatch: comparing a state snapshot to a sequence summary as if they were the same evidence.

For team spatial center and stretch index, the source defines them as “the geometric center of each team and the mean distance of players from that center, used to quantify team displacement, expansion, and contraction” [PAGE 8]. A consistent formalization for an on-court team \(A\) with five players is:
\[
\mathbf c_A(t)=\frac{1}{5}\sum_{i\in A}\mathbf r_i(t),\qquad [\mathbf c_A]=\mathrm{m},
\]
\[
S_A(t)=\frac{1}{5}\sum_{i\in A}\left\|\mathbf r_i(t)-\mathbf c_A(t)\right\|_2,\qquad [S_A]=\mathrm{m}.
\]
The source does not print these exact equations, but this is the direct metric definition it reports. Breakdown regimes: the centroid is undefined if no tracked players are present; the stretch index is degenerate at zero for a one-player set; tracking gaps bias both quantities; and team-level aggregation can mask individual roles. The source warns that these indicators “describe team movement and spacing, but they should not be read as direct evidence of tactical effectiveness without information on possession phase and action context” [PAGE 8].

Dyadic relative phase is defined as “the phase relationship between two players’ longitudinal or lateral displacement trajectories, used to quantify in-phase, anti-phase, or transitional coordination between player dyads” [PAGE 8]. If \(\phi_i(t)\) and \(\phi_j(t)\) are the extracted phase signals in radians, then:
\[
\Delta\phi_{ij}(t)=\bigl[\phi_i(t)-\phi_j(t)\bigr]\bmod 2\pi,\qquad [\Delta\phi]=\mathrm{rad}.
\]
In-phase coordination corresponds to \(\Delta\phi_{ij}\approx 0 \pmod{2\pi}\), anti-phase to \(\Delta\phi_{ij}\approx \pi \pmod{2\pi}\), and transitional coordination otherwise. Breakdown regimes: phase extraction from noisy trajectories is not specified in the source; the metric describes coupling but “does not specify the tactical purpose of the coupling or whether the observed relation was beneficial for either team” [PAGE 8]; and the Bourbousson studies used six sequences from one professional match, so the tactical context was not fully linked to the observed phase patterns [PAGE 8].

The court-area occupation ratio is defined through “the number of attackers, the number of defenders, and the attacker-to-defender ratio within seven predefined court areas during offensive sequences” [PAGE 8]. A compact formalization is:
\[
R(t)=\frac{N_A(t)}{N_D(t)},\qquad [R]=1.
\]
Breakdown regimes: \(N_D(t)=0\) makes the ratio undefined; small local counts make the ratio unstable; and the source states that these measures “describe local numerical distribution, but they do not identify the tactical actions that created the numerical pattern” [PAGE 8].

Spatial relative field-goal efficiency is “empirical Bayes-smoothed shooting efficiency at court-specific locations, used to estimate location-adjusted shooting performance” [PAGE 8]. Formally, for court location \(\mathbf s\):
\[
\mathrm{SRE}(\mathbf s)=\Pr\bigl(\mathrm{make}\mid \mathrm{shot\ at\ }\mathbf s,\ \mathrm{empirical\ Bayes\ smoothing}\bigr),
\]
with units of probability or percentage. Breakdown regimes: the source notes that the metric describes “where shooting efficiency is higher or lower,” but “do not show how the shot location was created within the possession” [PAGE 8]; defensive pressure, passing sequence, and possession context were not directly included in the Shortridge et al. study [PAGE 8].

Expected possession value is “model-estimated expected points remaining in a possession, derived from multiresolution stochastic modeling of player movement and discrete game events” [PAGE 9]. Formally:
\[
\mathrm{EPV}(t)=\mathbb E\bigl[P_{\mathrm{remaining}}\mid \mathcal F_t\bigr],\qquad [\mathrm{EPV}]=\mathrm{points},
\]
where \(\mathcal F_t\) is the model’s information state at time \(t\). Breakdown regimes: the source reports “high computational complexity; reliance on high-quality optical tracking data; and model assumptions about possession states, transition kernels, and event segmentation” [PAGE 9]. EPV is not a tactical label; its meaning depends on how the model defines states, transitions, and relevant spatial information.

Defensive shot frequency and shot efficiency effects are “model-based estimates of how a defender alters opponent shot frequency and shot success across court regions” [PAGE 9]. They can be written as court-region functions:
\[
\Delta f_D(\mathbf s),\qquad \Delta p_D(\mathbf s),
\]
where \(\Delta f_D\) is on a shot-frequency scale and \(\Delta p_D\) is a probability-scale change in shot success. The source does not report a universal unit for the frequency effect. Breakdown regimes: the effects depend on “inferred defensive assignments” and should be interpreted “within the team defensive context, rather than as fully isolated individual defensive ability” [PAGE 9].

Intrinsic dimension is “a Bayesian mixture-model estimate of the latent dimensionality of player-tracking data, used to quantify movement complexity and dependence in offensive sequences and shot-chart patterns” [PAGE 10]. It is a dimension estimate:
\[
d_{\mathrm{ID}}=\widehat{\dim}_{\mathrm{latent}}(\text{tracking data}),\qquad [d_{\mathrm{ID}}]=1.
\]
Breakdown regimes: “fixed number of mixture components; temporal dependence not fully modeled; no measurement-noise component; and need for validation in larger samples” [PAGE 10]. The source also states that ID “does not specify which tactical action or player decision produced the observed complexity” [PAGE 10].

Density-functional fluctuation theory uses “player-density fields, location-preference parameters, player–player interaction terms, and player-gravity estimates inferred from NBA tracking data” [PAGE 10]. A minimal field notation is:
\[
\rho(\mathbf r,t)\geq 0,\qquad [\rho]=\mathrm{m}^{-2}\ \text{if normalized},
\]
but the source does not print a normalization equation. Breakdown regimes: “player influence was represented through two-dimensional Gaussian density fields; player-specific analysis was limited to selected high-minute players; and physical attributes such as height or leaping ability were not directly included in the model” [PAGE 10]. Therefore the density field cannot be treated as a biomechanical or physical-ability measurement.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The genealogy runs from event-count and box-score analysis to court-referenced spatial representation. The review begins with the older lineage: event counts, efficiency ratios, and possession-based metrics “describe game outcomes and key actions,” but provide “limited information about the spatial and temporal conditions under which actions are generated” [PAGE 1]. It then identifies the early positional-data bottleneck: “Early research using player and ball positional data was limited by the difficulty of collecting reliable movement data,” and only a small number of studies examined “the spatiotemporal rhythm and interaction structure of basketball” [PAGE 1]. The causal sequence is therefore not simply “better tracking produces better tactics.” It is: data acquisition improves; spatial representation becomes possible; interpretation becomes the new bottleneck.

The scientific lineage has distinct branches. Goldsberry’s shot-location work is cited as showing that “spatial information can complement traditional statistics when assessing shot quality” [PAGE 1]. Bourbousson et al. extended the dynamical-systems branch by analyzing “spatiotemporal coordination from player trajectories and identifying dynamic coupling within and between teams” [PAGE 2]. Franks et al. moved defensive analysis into spatial modeling through court-region effects on shot frequency and shot success [PAGE 9]. Cervone et al. moved possession analysis into stochastic value modeling through expected possession value [PAGE 9]. Santos-Fernandez et al. moved tracking analysis toward complexity via intrinsic dimension [PAGE 10]. Barron et al. moved player interaction toward density-functional fluctuation theory and player gravity [PAGE 10]. Liu et al. then retroactively reorganize these branches into indicator families and interpretive boundaries [PAGE 11].

The retrocausal trap is that later model outputs can make earlier descriptive metrics appear more explanatory than they are. A shot-location map can be re-read through EPV as if it measured possession value; a team-shape metric can be re-read through density fields as if it measured tactical control; an intrinsic-dimension estimate can be re-read as if it measured tactical complexity. The source resists this retrocausal inflation: model-derived indicators “provide model-based summaries rather than direct tactical labels” [PAGE 11], and “the main issue for future work is therefore not whether models should become more complex, but whether that complexity helps answer a recognizable tactical question” [PAGE 15].

Multi-week traps follow from repeated exposure to a proxy. Week 1: an analyst sees that open shots have higher shooting efficiency and begins using defender distance as a quality metric. Week 2: the analyst treats a high defender distance as proof of good offensive creation. Week 3: the analyst uses team expansion as proof of effective spacing. Week 4: the analyst treats EPV movement as tactical intent. Week 5: the analyst treats intrinsic dimension as tactical sophistication. The source blocks each step: local indicators do not explain “how that state was created” [PAGE 11]; collective indicators depend on “possession phase, ball location, opponent organization, and sequence outcome” [PAGE 11]; EPV depends on “model inputs, state definitions, segmentation rules, and validation evidence” [PAGE 11]; and ID “does not specify which tactical action or player decision produced the observed complexity” [PAGE 10]. The correct long-run habit is to pair each metric with the possession phase, action type, defender response, and sequence outcome before making a tactical claim.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression appears when time pressure or late-game uncertainty pushes analysts and coaches back to outcome metrics because those metrics are stable and socially legible. The source gives the exact mechanism: “The same successful shot may reflect a well-organized possession in which the defense has been displaced, or it may result from an individual solution late in the shot clock” [PAGE 2]. Under crisis, the result is retained and the spatial process is discarded. That is a regression to the box score, not a resolution of the tactical question.

The counter-trap is the opposite overcorrection: treating the spatial indicator as if it were the tactical explanation. The paper warns that location-based analysis is “a way of representing tactical behavior rather than as direct evidence of tactical effectiveness” [PAGE 2]. It also warns that interactional indicators cannot determine whether a relation reflected “planned execution, defensive breakdown, or late-possession adaptation” [PAGE 11]. The counter-trap is therefore the analyst who says “the defender was far away, so the offense created a good shot” without asking whether the defender was recovering, whether help defense was late, whether the shot came after a broken play, or whether the shot clock forced the attempt.

The clock is both literal and interpretive. Literally, the shot clock is part of possession context, and the source names “shot-clock pressure” as one of the conditions under which full-game actions unfold [PAGE 2]. Interpretively, the clock is the phase boundary that assigns meaning: transition, early offense, half-court offense, late-clock, and end-of-possession states are not equivalent. The review’s possession context definition includes “the phase of play, action type, player-ball relations, defensive pressure, and the surrounding sequence of actions before and after the measured event” [PAGE 2]. A late-clock forced shot and an early-clock open shot may share defender distance, but they do not share tactical meaning.

Recursive theory of mind adds three layers. The coach models the analyst’s metric; the analyst models the coach’s tactical judgment; the player models the defender’s likely recovery. A metric that ignores any layer becomes a false mental-state attribution. For example, a short defender-shooter distance may indicate an “effective closeout” in one possession and a “late reaction after the defense has already been compromised” in another [PAGE 14]. The same observed relation supports different mental-state explanations. The source’s future-direction proposal is therefore psychologically sound: compare indicators against “expert-coded tactical judgments and possession outcomes,” including whether a possession reflected “successful spacing, a missed defensive rotation, or a late-clock forced shot” [PAGE 15]. That is the counter-trap discipline: use the metric to ask a better question, not to announce the answer.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The physical-layer veto is explicit in the inclusion criteria. Studies were excluded when derived variables were used “only for biomechanical, physiological, or workload-monitoring purposes and were not interpreted in relation to basketball performance or tactical behavior” [PAGE 4]. Therefore a spatial indicator from this review cannot be converted into a biomechanical claim without a separate validation bridge. The bridge is absent in the source.

The biomechanical veto is reinforced by the density-functional model. Barron et al. represented player influence through “two-dimensional Gaussian density fields,” limited player-specific analysis to “selected high-minute players,” and did not directly include “physical attributes such as height or leaping ability” [PAGE 10]. This is important: the density field is a spatial-interaction representation, not a physical-capacity measurement. A high player-gravity estimate cannot be read as vertical leap, mass, strength, or acceleration. Those variables were not in the model.

The weather veto is nearly inert for indoor regulation basketball, but it is not logically zero. The source deals with court-referenced player and ball location during match play, not outdoor environmental conditions. No weather variable appears in the indicator families [PAGE 11]. Therefore weather cannot be used to explain a spatial metric unless the study explicitly measured arena environment, court surface, or tracking conditions. The review does not provide that evidence. The correct adjudication is: weather is a non-admissible layer for this source.

A further cross-layer veto concerns model outputs. Expected possession value is measured in points [PAGE 9], intrinsic dimension is a latent-dimension estimate [PAGE 10], and defensive shot-frequency effects are model-based court-region functions [PAGE 9]. These are not physical measurements, not biomechanical measurements, and not weather measurements. They are model-derived summaries whose interpretation depends on “model inputs, state definitions, segmentation rules, and validation evidence” [PAGE 11]. Cross-layer substitution is therefore vetoed: a model output cannot be used as proof of a physical mechanism, and a physical variable cannot be used to explain a tactical spatial pattern without an explicit measurement model. The source’s own boundary is decisive: collective indicators depend on “possession phase, ball location, opponent organization, and sequence outcome” [PAGE 11], not on an unmeasured physical or environmental layer.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
For each scenario, a verifiable reward can be built from expert-coded possession labels, tracking-derived variables, and model diagnostics. The reward should penalize tactical claims that exceed the source’s stated interpretive boundary.

Scenario 1. Claim: “A high stretch index proves effective offensive spacing.” Veto: the source defines stretch index as mean player distance from the team spatial center and warns that it “should not be read as direct evidence of tactical effectiveness without information on possession phase and action context” [PAGE 8]. Prediction: when possessions are expert-coded as “effective spacing” versus “disconnected movement,” high stretch index values will appear in both classes; a classifier using stretch index alone will show weak agreement with expert tactical labels, while a model adding possession phase, ball location, and defender organization will improve agreement. This is verifiable by comparing expert-coded labels against stretch-index-only and context-augmented models.

Scenario 2. Claim: “A short defender-shooter distance proves effective defense.” Veto: the source states that a short defender-shooter distance “may indicate an effective closeout in one possession, whereas in another it may simply reflect a late reaction after the defense has already been compromised” [PAGE 14]. Prediction: adding closeout timing and help-defense context will change the expert classification of defensive quality; low defender distance alone will not separate effective closeouts from late recoveries. This is verifiable through frame-by-frame coding of closeout initiation, defender recovery path, and help position.

Scenario 3. Claim: “An increase in expected possession value proves tactical effectiveness.” Veto: EPV is “model-estimated expected points remaining in a possession” [PAGE 9], and its tactical meaning depends on “model inputs, state definitions, segmentation rules, and validation evidence” [PAGE 11]. Prediction: two EPV models with different state definitions and transition kernels will produce divergent value trajectories for the same possession; expert tactical judgments will not align uniformly with either trajectory. This is verifiable by re-estimating EPV under alternative state and transition specifications and comparing the resulting trajectories to expert-coded possession quality. The veto is not that EPV is useless; it is that EPV alone is not a tactical verdict.