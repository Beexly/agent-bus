---
source: "2024 - Match Phases in Practice - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/Hudl StatsBomb/Research Competitions/2024"
pages: 8
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4083
---

<NATIVE_REASONING>
The user wants a deep analytical response based on the provided source document ("Match Phases in Practice" by Ghezzi and Sotudeh). The response must follow strict invariants:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. Must state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to write a comprehensive analysis of the source document, treating it as sports science/analytics research. I must not invent betting lines. I must use formal LaTeX equations where appropriate, cite page numbers from the source (the document has pages 1-13 visible in the text), and include verbatim quotes where citing.

Let's map pages:
- Page 1: Title, intro, related work up to "1 FC Lugano > 2 ETH Zürich **1**"
- Page 2: Data section, phase definitions start
- Page 3: Phase definitions continued, footnotes, Figure 1
- Page 4: Unknown phases, comparison, Figure 2
- Page 5: Applications, opposition analysis, Table 1, Figure 3
- Page 6: Figure 4, post-match reports, Figure 5
- Page 7: Ad-hoc queries, Figure 6, Figure 7, Figure 8
- Page 8: Conclusion, acknowledgement, references start
- Page 9-13: References continued

Actually looking at the text markers:
- "**1**" appears after intro/related work.
- "**2**" appears after phase definitions intro.
- "**3**" appears after footnotes 3-6 on phase definitions page.
- "**4**" appears after Unknown phases/Comparison.
- "**5**" appears after Figure 2 caption.
- "**6**" appears after Opposition analysis text? Wait, let's trace carefully.

The text has page numbers embedded as bold numbers:
- **1** after Introduction/Related Work.
- **2** after Phase Definitions intro paragraph.
- **3** after Phase Definitions rules + footnotes + Figure 1 caption.
- **4** after Unknown phases / Comparison section + Figure 2 caption? Wait, text says "**4**" after Comparison section and Figure 2 caption.
- **5** after Figure 2 caption? Actually text: "Figure 2. Identified phases... **5**"
- **6** after Opposition analysis / Figure 3 caption.
- **7** after Figure 4 caption.
- **8** after Figure 5 caption? Actually text: "Figure 5 depicts Lugano's match... **8**"
- **9** after ad-hoc queries Figure 6/7? Text: "**9**"
- **10** after Figure 8 caption? Text: "**10**"
- **11** after References start? Text: "**11**"
- **12** References continued.
- **13** References end.

So page citations should be [PAGE 1] through [PAGE 13] based on these markers.

Key content to analyze:
- Match phase identification framework using StatsBomb 360 data.
- Main phases: in possession, out of possession, set pieces.
- Sub-phases in possession: Counterattack, Consolidate, Buildup, Progression, Finishing.
- Sub-phases out of possession: Regroup, Counterpress, High Block, Low Press, Low Block, Mid Press, Mid Block, Unidentified.
- Set Piece: For/Against, first five frames with play_pattern From Corner/Free Kick/Thrown in.
- Data issues: misclassified possession team, multiple events per timestamp.
- Unknown phases: ~10.5% missingSB + ~5% non-compliant = 16% unknown, reduced to 12% with interpolation rule (if time between two known consecutive phases <= 3 seconds, label in-between unknown frames to one of those known phases).
- Comparison with FIFA 2022 World Cup reports, but non-comparable due to denominator difference (FIFA reports % relative to in/out of possession time, not entire match).
- Applications: opposition analysis, post-match reports, ad-hoc queries.
- Examples: St. Gallen lowest Buildup, highest Finishing; FC Lugano preference for progression and mid-block; FC Winterthur low block when winning; Lugano and Sion increase Buildup when winning.
- Euclidean distance for deviation from average match-phase behavior.

Now structure the response:

<THINK_TRACE> (>=400 words)
- Deep multi-hop derivation: trace from data ingestion to phase assignment to interpolation to applications.
- Gray-zone audit: ambiguities in counterpress definition (within 5 seconds of open play turnover), missing freeze-frames, subjective phase boundaries, the 3-second interpolation heuristic, FIFA comparability issue, "unidentified" category, freeze-frame dependency on TV footage.
- Use formal reasoning, no toy equations.

<SOURCE_OPERATORS_AND_EQUATIONS>
- Formal LaTeX definitions.
- Let $\mathcal{E}$ be event set, $\mathcal{F}$ freeze-frames.
- Phase mapping function $\Phi: \mathcal{E} \times \mathcal{F} \to \mathcal{P}$ where $\mathcal{P}$ is phase set.
- Define sets: $\mathcal{P}_{in} = \{Buildup, Progression, Finishing, Counterattack, Consolidate\}$, etc.
- Ball thirds partition: $T_1, T_2, T_3$.
- Player count conditions: $N_{attacking\_third} \ge 4$, etc.
- Interpolation operator $\mathcal{I}$: if $t_{k+1} - t_k \le 3\text{ s}$ then fill unknown.
- Units: seconds (s), frames, percentage of match time (%), player count (dimensionless count).
- Breakdown regimes: missing freeze-frames (missingSB), multiple events per timestamp, misclassified possession team, subjective validation.
- Cite pages: [PAGE 2] for data issues, [PAGE 3] for phase definitions, [PAGE 4] for unknown phases, [PAGE 4-5] for comparison, etc.
- Verbatim quotes from source.

<RETROCAUSAL_GENEALOGY>
- Historical lineage: Pioli 2003, Wade 1967, Garganta & Pinto 1994, Oliveira 2012, FIFA 2022/2023, Harkins 2017, Decroos et al. 2017, Worville 2019, Bauer et al. 2023.
- Multi-week traps: temporal misalignment, phase lag, scoreline context omission, tracking data latency, over-reliance on open-play classification after set pieces (5-frame rule).
- Cite pages: [PAGE 1] for related work, [PAGE 3] for FIFA explainable approach, etc.

<RECURSIVE_THEORY_OF_MIND>
- Crisis habit regression: teams reverting to low block when winning (Winterthur), or increasing buildup when winning (Lugano, Sion) — counter-intuitive habit regression under pressure.
- Counter-trap: opponent pressing strategies (Servette high block/counterpress vs Lugano low block).
- Clock: match time indexing, 3-second interpolation window, 5-frame set piece window, 10-second pause (Decroos), 5-second counterpress window (StatsBomb glossary).
- No betting lines.

<CROSS_LAYER_VETO_ADJUDICATION>
- Physical/biomechanical/weather veto proof: although paper doesn't discuss weather, we can discuss physical load contextualization (SciSports 2021), player count visibility from TV footage (freeze-frame limitations), biomechanical implications of pressing vs blocking.
- Veto conditions: missing freeze-frame $\to$ missingSB; insufficient visible players $\to$ unidentified; timestamp collisions $\to$ priority list.
- Cite [PAGE 2], [PAGE 3], [PAGE 4].

<RLVR_COUNTERFACTUAL_VETOES>
- 3 verifiable RLVR (Reinforcement Learning from Verifiable Rewards?) counterfactual veto scenarios + predictions.
- Scenario 1: Freeze-frame missing for >3s between known phases $\to$ veto interpolation, predict phase mislabeling.
- Scenario 2: Counterpress tag within 5s of turnover but ball in attacking third $\to$ veto Consolidate vs Finishing conflict.
- Scenario 3: Set piece 5th frame transition $\to$ veto open-play reclassification, predict boundary error.
- Each with formal condition and prediction.

Word count: Need >= 1000 words total across sections. I'll aim for substantial depth in each.

Important: No mention of betting. No fake ratios like Force/Fatigue. Use real LaTeX.

Let's draft carefully.

Page citations: The source text has page markers **1** through **13**. I will cite as [PAGE 1], [PAGE 2], etc.

Verbatim quotes:
- "Match phases are the primary means by which match time is indexed and divided into valuable units for coaches." [PAGE 1]
- "if the time between two known consecutive phases is 3 seconds or less, label any in-between unidentified phase or missingSB frame to one of those known phases." [PAGE 4]
- "approximately 10.5% of frames remained unlabeled due to missing freeze-frames... around 5% were non-compliant... total of 16% unknown phases." [PAGE 4]
- "FIFA reported the percentage of each sub-phase not over the entire match duration, but rather in relation to the time spent in and out of possession phases. This difference in reporting makes their findings non-comparable with ours." [PAGE 4]
- "According to StatsBomb's glossary, a counterpress event is defined as a pressing action occurring within five seconds of an open play turnover." [PAGE 3]
- "After the fifth frame, the possession was classified as a normal open-play scenario..." [PAGE 3]

Now write the content. I need to be careful that equations are formal, not toy. Use sets, functions, indicator variables, time intervals.

Let's start composing.

THINK_TRACE: I'll discuss the pipeline: raw events -> freeze-frame assignment -> possession determination (not StatsBomb's possession_team but on-ball team) -> play_pattern check -> counterpress check -> ball third -> sub-phase. Then out-of-possession logic tree. Then set piece 5-frame rule. Then unknown phase interpolation. Then application layer (opposition analysis, post-match, ad-hoc). Gray zones: subjective phase boundaries, the "on-ball team" vs StatsBomb possession_team discrepancy corrected via kickoff rule, missing freeze-frames dependent on TV broadcast, 3-second interpolation heuristic is ad-hoc, FIFA denominator mismatch. Also the Euclidean distance for ad-hoc queries.

SOURCE_OPERATORS_AND_EQUATIONS: Define $\Omega$ sample space of frames. $\phi(f) \in \mathcal{P}$. Define $\mathbb{1}[\cdot]$. Time $t \in \mathbb{R}^+$ seconds. Pitch thirds $Z_1, Z_2, Z_3$. Player count $n_{team,Z}$. Conditions. Interpolation $\hat{\phi}(f)$. Breakdown: if freeze-frame missing $\to$ missingSB; if rules fail $\to$ unidentified; if $|\Delta t| > 3$ s $\to$ remains unknown.

RETROCAUSAL_GENEALOGY: Cite Pioli 2003 [PAGE 1], Wade 1967 [PAGE 1], Garganta & Pinto 1994 [PAGE 1], Oliveira 2012 [PAGE 1], FIFA 2022a/2022b/2022c [PAGE 1, 4], Harkins 2017 [PAGE 2], Decroos 2017 [PAGE 2], Worville 2019 [PAGE 2], Bauer 2023 [PAGE 2], FIFA High Performance 2023 [PAGE 1, 2]. Multi-week traps: phase drift over a season, scoreline-dependent strategy shifts (Figure 4 [PAGE 7]), deviation from seasonal average (Figure 7 [PAGE 9]), set-piece-to-open-play boundary (5 frames [PAGE 3]).

RECURSIVE_THEORY_OF_MIND: Crisis habit regression: when winning, some teams drop to low block (Winterthur [PAGE 6]), others build up more (Lugano, Sion [PAGE 6]). This is habit regression under scoreline stress. Counter-trap: Servette's high block/counterpress vs Lugano's low block [PAGE 7]. Clock: 3s interpolation [PAGE 4], 5s counterpress [PAGE 3], 5-frame set piece [PAGE 3], 10s pause Decroos [PAGE 2]. No betting.

CROSS_LAYER_VETO_ADJUDICATION: Physical layer: player count from TV footage (visible players), biomechanical load differs by phase (pressing vs block), weather not in paper but implicit in broadcast quality/freeze-frames. Veto: missing freeze-frame $\to$ missingSB; timestamp collision $\to$ priority list; misclassified possession $\to$ kickoff correction rule. Cite [PAGE 2], [PAGE 3].

RLVR_COUNTERFACTUAL_VETOES: Three scenarios.
1. $\Delta t_{known} > 3$ s with unknown frames between $\to$ veto interpolation, predict residual unknown phase persistence.
2. Set piece frame 6+ misclassified as open play because play_pattern no longer set piece but players still in set-piece formation $\to$ veto open-play reclassification, predict boundary phase error.
3. Counterpress event tagged but on-ball team in Finishing third $\to$ conflict between Consolidate (counterpress) and Finishing (third zone); veto one, predict misassignment.

Predictions must be verifiable (e.g., check against video, check phase distribution shift).

Ensure no betting terms. Ensure word count.

Let's write it out fully. I need to monitor word count. I'll write generously.

Let's begin.
</NATIVE_REASONING>

<THINK_TRACE>
The source document presents a deterministic, rule-based framework for segmenting association football match time into coach-relevant phases using StatsBomb 360 data. The derivation proceeds through multiple hops: first, raw event and freeze-frame data are ingested from the Swiss Super League (2022–2023) and the 2022 Men’s World Cup open data [PAGE 2]. Second, two data-quality defects are corrected: misclassified possession teams are repaired via a kickoff-triggered rule comparing the scoring team to the possession_team at the start of the next possession, and timestamp collisions are resolved by retaining only the highest-priority event per timestamp [PAGE 2]. Third, each event is assigned to exactly one of three macro-phases—in possession, out of possession, or set piece—using the on-ball team rather than StatsBomb’s possession_team designation, because phase assignment occurs independently per frame [PAGE 3, footnote 5].

The in-possession sub-phase logic is a cascading decision tree: if play_pattern equals “From Counter,” the label is Counterattack; else if the on-ball team is under Counterpress, the label is Consolidate; otherwise the ball’s vertical third determines Buildup (first third), Progression (second third), or Finishing (third third) [PAGE 3]. The out-of-possession logic is a nested conditional: Counterattack by the on-ball team implies Regroup for the opponent; an explicit StatsBomb Counterpress tag implies Counterpress; otherwise player counts in attacking, first, and second thirds trigger High Block (≥4 players in attacking third), Low Press/Low Block (≥6 players in first third, split by pressure tag), Mid Press/Mid Block (≥4 players in second third, split by pressure tag), or Unidentified [PAGE 3]. Set pieces are confined to the first five frames of “From Corner,” “From Free Kick,” or “From Thrown in,” after which open-play rules resume [PAGE 3].

Gray-zone audits reveal several fragility points. Approximately 10.5% of frames are missingSB due to absent freeze-frames, and roughly 5% are non-compliant with the pre-specified rules, yielding 16% unknown phases initially [PAGE 4]. An interpolation heuristic reduces this to 12%: if the time between two known consecutive phases is ≤3 seconds, intervening unknown frames inherit one of the bounding phases [PAGE 4]. This 3-second window is an operational assumption with no stated error bound; it can smear phase boundaries during tactical substitutions, injuries, or stoppages. The counterpress definition relies on StatsBomb’s glossary—pressing within five seconds of an open-play turnover—creating a hard temporal singularity at exactly 5.0 seconds [PAGE 3, footnote 6]. The comparison with FIFA’s 2022 World Cup reports is invalidated by a denominator mismatch: FIFA reports sub-phase percentages relative to in-/out-of-possession time, not total match duration, making the two distributions non-comparable [PAGE 4]. Finally, “Unidentified” remains a sink state for rule failures, and the framework’s explanatory power is bounded by TV-footage visibility rather than full optical tracking [PAGE 3]. These gray zones must be treated as structural uncertainties, not as modeling noise.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let $\mathcal{F}$ denote the set of match frames indexed by time $t \in \mathbb{R}^{+}$ measured in seconds (s). Let $\mathcal{E}$ be the set of on-ball events after excluding non-ball actions such as “Foul Won” and “Player On” [PAGE 3, footnote 3]. Define the phase space
\[
\mathcal{P} = \{ \text{Buildup, Progression, Finishing, Counterattack, Consolidate, Regroup, Counterpress, High Block, Low Press, Low Block, Mid Press, Mid Block, Unidentified, Set Piece For, Set Piece Against, missingSB} \}.
\]
The phase assignment operator is a frame-wise map $\Phi : \mathcal{F} \to \mathcal{P}$. For in-possession frames, define the pitch partition into thirds $Z_1, Z_2, Z_3 \subset \mathbb{R}^2$ and the play-pattern attribute $p \in \mathcal{P}_{\text{pattern}}$. The in-possession mapping is
\[
\Phi(f) =
\begin{cases}
\text{Counterattack}, & p(f) = \text{``From Counter''},\\
\text{Consolidate}, & \text{Counterpress}(f) = \text{true},\\
\text{Buildup}, & \text{ball}(f) \in Z_1 \land \neg \text{Counterpress}(f) \land p(f) \neq \text{``From Counter''},\\
\text{Progression}, & \text{ball}(f) \in Z_2 \land \neg \text{Counterpress}(f) \land p(f) \neq \text{``From Counter''},\\
\text{Finishing}, & \text{ball}(f) \in Z_3 \land \neg \text{Counterpress}(f) \land p(f) \neq \text{``From Counter''}.
\end{cases}
\]
For out-of-possession frames, let $n_{A}(f)$ be the number of visible defenders in their attacking third, $n_{1}(f)$ in their first third, and $n_{2}(f)$ in their second third [PAGE 3]. The out-of-possession operator is
\[
\Phi(f) =
\begin{cases}
\text{Regroup}, & \Phi_{\text{on-ball}}(f) = \text{Counterattack},\\
\text{Counterpress}, & \text{StatsBomb tag } = \text{Counterpress},\\
\text{High Block}, & n_{A}(f) \ge 4,\\
\text{Low Press}, & n_{1}(f) \ge 6 \land \text{under pressure}(f) = \text{true},\\
\text{Low Block}, & n_{1}(f) \ge 6 \land \text{under pressure}(f) = \text{false},\\
\text{Mid Press}, & n_{2}(f) \ge 4 \land \text{under pressure}(f) = \text{true},\\
\text{Mid Block}, & n_{2}(f) \ge 4 \land \text{under pressure}(f) = \text{false},\\
\text{Unidentified}, & \text{otherwise}.
\end{cases}
\]
Set pieces are defined by the indicator $\mathbb{1}_{\text{SP}}(f) = 1$ if $p(f) \in \{ \text{``From Corner''}, \text{``From Free Kick''}, \text{``From Thrown in''} \}$ and the frame index within the set-piece sequence $k \le 5$ [PAGE 3]. For $k > 5$, the frame reverts to open-play rules.

The unknown-phase set $\mathcal{U} \subset \mathcal{F}$ initially satisfies $|\mathcal{U}| / |\mathcal{F}| = 0.16$, decomposed as $0.105$ missingSB plus $0.05$ rule-noncompliance [PAGE 4]. The interpolation operator $\mathcal{I}$ is
\[
\Phi_{\text{interp}}(f) =
\begin{cases}
\Phi(f_{a}) \text{ or } \Phi(f_{b}), & \exists f_{a}, f_{b} \text{ known such that } t_{a} < t < t_{b},\; t_{b} - t_{a} \le 3\text{ s},\; \Phi(f) \in \{ \text{unidentified, missingSB} \},\\
\Phi(f), & \text{otherwise},
\end{cases}
\]
reducing the unknown fraction to $0.12$ [PAGE 4]. Units are seconds for time, dimensionless counts for player numbers, and percentages (%) of total match duration for phase prevalence.

Breakdown regimes: (i) missing freeze-frames induce missingSB and depend on broadcast camera coverage rather than physical events [PAGE 3, footnote 4]; (ii) multiple events per timestamp are collapsed by an unstated priority list, risking phase aliasing [PAGE 2]; (iii) possession-team misclassification is corrected only via the “From Kick Off” after a goal rule, leaving other phases exposed to attribution error [PAGE 2]; (iv) the 3-second interpolation window has no sensitivity analysis and may bridge genuinely distinct tactical states [PAGE 4]; (v) formal validation is rejected as meaningless because phases are subjective [PAGE 4], so no confidence intervals or p-values are reported.

Verbatim evidence: “approximately 10.5% of frames remained unlabeled due to missing freeze-frames... around 5% were non-compliant... total of 16% unknown phases” [PAGE 4]; “if the time between two known consecutive phases is 3 seconds or less, label any in-between unidentified phase or missingSB frame to one of those known phases” [PAGE 4]; “FIFA reported the percentage of each sub-phase not over the entire match duration, but rather in relation to the time spent in and out of possession phases. This difference in reporting makes their findings non-comparable with ours” [PAGE 4].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage traces from coaching manuals to automated event logic. Pioli (2003) is cited for the principle that coaches deploy customized arrangements per phase [PAGE 1]. Wade (1967) establishes the three-level partition of attack, defense, and preparation/transition [PAGE 1]. Garganta and Pinto (1994) offer the binary offense/defense view [PAGE 1], while Oliveira (2012) subdivides transition into attack-to-defense and defense-to-attack [PAGE 1]. Set pieces enter the canon via The Coaches’ Voice (2021), noting their outsized goal yield [PAGE 1]. Spatial subdivision appears in Bangsbo and Peitersen (2000), Boomstra (2022), and SFV (2017) through thirds and tactical zones [PAGE 1].

On the event-data side, Harkins (2017) defines sequences as consecutive on-ball events bounded by defensive actions, stoppages, or shots [PAGE 2]; Decroos et al. (2017) introduce a 10-second pause or possession switch as a phase delimiter [PAGE 2]; Worville (2019) and STATS LLC (2020) fragment sequences by field location and surrounding actions [PAGE 2]. The tracking era is represented by Bauer, Anzer, and Shaw (2023), who propose CNNs on labeled tracking visualizations—a black-box alternative rejected by the authors in favor of an explainable, FIFA-aligned rule set [PAGE 2]. FIFA’s own documents (FIFA 2022a, 2022b, 2022c; High Performance Team of FIFA 2023; Parlak 2023) supply the conceptual vocabulary of “Enhanced Football Intelligence” phases [PAGE 1, 2, 4].

Multi-week traps emerge from this lineage. First, phase definitions are club-specific; a rule set validated at FC Lugano may not transfer to a team with a different block height philosophy without recalibrating the player-count thresholds ($n_A \ge 4$, $n_1 \ge 6$, $n_2 \ge 4$) [PAGE 3]. Second, seasonal aggregation masks scoreline-dependent regime shifts: Figure 4 shows FC Winterthur adopting a low block when winning while Young Boys’ low-block percentage is stable, and Lugano/Sion increasing buildup when winning [PAGE 6]. A model trained on season averages will misread these within-match adaptations. Third, the 5-frame set-piece rule creates a boundary trap: after frame 5, possession is reclassified as open play even if players remain in set-piece formations, generating systematic phase-label drift at corners and free kicks [PAGE 3]. Fourth, the 3-second interpolation window can erase genuine tactical transitions that occur during stoppages longer than 3 seconds, biasing longitudinal phase-duration statistics [PAGE 4]. These are not one-off errors; they compound across a multi-week microcycle when coaches use phase percentages for opposition analysis and load contextualization [PAGE 5, 6].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression refers to a team’s tendency to revert to familiar defensive structures under scoreline pressure. The source documents this explicitly: FC Winterthur adopts a low block when winning, whereas Lugano and Sion increase their Buildup percentage when winning [PAGE 6]. This is not random noise but a recursive theory-of-mind loop: each coach anticipates the opponent’s crisis habit (e.g., sitting deep) and selects a counter-structure (e.g., more buildup to bypass a low block). The opponent, in turn, regresses to its own crisis habit, creating a fixed-point tactical attractor that phase percentages can capture but not resolve causally.

The counter-trap is visible in the Lugano–Servette match of April 15, 2023: Lugano records high Buildup and Low Block percentages, while Servette counters with higher Finishing, High Block, and Counter Press [PAGE 7]. Servette’s strategy is a counter-trap to Lugano’s buildup preference, attempting to force turnovers in advanced areas. The phase framework labels these as distinct states (Buildup vs. Finishing; Low Block vs. High Block/Counterpress), but the labels themselves do not encode the intentional depth—they are observables of a recursive game where each team models the other’s phase distribution.

Clock structure is imposed by three hard temporal boundaries in the source. The counterpress window is exactly five seconds after an open-play turnover [PAGE 3, footnote 6]; set-piece classification expires after five frames [PAGE 3]; unknown-phase interpolation is permitted only when bounding known phases are separated by at most three seconds [PAGE 4]. These clocks are not neutral; they segment continuous play into discrete decision epochs that may or may not align with biological or tactical reaction times. A coach observing a counterpress at 4.9 seconds and one at 5.1 seconds sees two different phases despite an indistinguishable physical event—a clock-induced singularity with no stated tolerance band.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The framework depends on visible player counts from TV footage freeze-frames, not full optical tracking [PAGE 3, footnote 4]. This creates a physical visibility veto: if fewer than the threshold number of players are visible in a third because of camera angle, zoom, or occlusion, the rule may default to Unidentified or misclassify a High Block as Mid Block. Biomechanically, pressing phases (Counterpress, High Press) impose different acceleration and deceleration loads than block phases (Low Block, Mid Block); SciSports (2021) is cited for contextualizing physical load by phase [PAGE 5], yet the paper does not integrate heart-rate, GPS, or inertial data, so the phase labels are biomechanically agnostic. Weather is not discussed in the source, but broadcast-quality freeze-frames are implicitly weather- and stadium-dependent; heavy rain or snow could degrade player visibility and increase missingSB rates beyond the observed 10.5% [PAGE 4].

Veto conditions: (1) Missing freeze-frame $\to$ missingSB; no phase may be assigned [PAGE 3, footnote 4]. (2) Multiple events at one timestamp $\to$ retain only the highest-priority event; all others are vetoed to prevent duplicate phase assignment [PAGE 2]. (3) Misclassified possession team $\to$ corrected only if the scoring team matches the possession_team at the next kickoff; otherwise the original, potentially erroneous, attribution stands [PAGE 2]. (4) Rule noncompliance $\to$ Unidentified; no fallback to nearest neighbor unless the 3-second interpolation condition holds [PAGE 4]. (5) Set-piece frame $k>5$ $\to$ veto of set-piece label, forced reversion to open-play rules even if the formation persists [PAGE 3].

These vetoes are structural, not statistical. They do not produce probability distributions; they produce hard exclusions that reduce the labeled frame pool. Any downstream metric—average phase percentage [PAGE 5], Euclidean deviation from seasonal mean [PAGE 9]—is conditioned on this vetoed sample and inherits its selection bias.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 (Interpolation boundary veto). Condition: two known phases $P_a$ and $P_b$ are separated by $\Delta t > 3$ s, with one or more intervening frames labeled missingSB or Unidentified. Veto: do not apply the 3-second interpolation operator $\mathcal{I}$; leave the intervening frames as unknown. Verifiable prediction: the fraction of unknown phases in matches with frequent stoppages (injuries, substitutions, VAR reviews) will remain closer to the initial 16% than to the interpolated 12%, and phase-duration histograms will show a deficit in the 3–6 s gap band relative to matches with continuous play.

Scenario 2 (Set-piece-to-open-play reclassification veto). Condition: at frame $k=6$ of a corner or free kick, the play_pattern attribute no longer reads “From Corner”/“From Free Kick,” but the attacking team retains ≥4 players in the opponent’s penalty area. Veto: do not reclassify to Buildup/Progression/Finishing; retain a set-piece or set-piece-derived label until the ball leaves the final third. Verifiable prediction: matches with high set-piece volume will show an artificial spike in Finishing or Progression immediately after frame 5; removing those frames will reduce the Finishing percentage for set-piece-heavy teams and increase the measured set-piece time share.

Scenario 3 (Counterpress–Finishing conflict veto). Condition: a frame is tagged Counterpress (pressing within 5 s of turnover) while the ball is in the attacking third $Z_3$. Veto: do not assign Consolidate solely because of the counterpress tag; require an additional spatial or temporal condition (e.g., ball outside $Z_3$ or possession duration > 2 s) before overriding Finishing. Verifiable prediction: teams that win high turnovers in the final third will exhibit an anomalously high Consolidate percentage under the original rules; after the veto, their Finishing percentage will rise and their Counterattack-to-Consolidate transition rate will fall, aligning better with video-annotated pressing sequences.
</RLVR_COUNTERFACTUAL_VETOES>