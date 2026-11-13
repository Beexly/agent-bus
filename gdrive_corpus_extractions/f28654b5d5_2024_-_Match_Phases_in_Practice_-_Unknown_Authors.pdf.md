---
source: "2024 - Match Phases in Practice - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/Hudl StatsBomb/Research Competitions/2024"
pages: 13
model: deepseek/deepseek-v4.1-flash-1017
words: 8839
---

<NATIVE_REASONING>
We need answer to user. Need produce structured XML sections with >=1000 words, deep derivation, cite pages exact quotes. Need address "DRIVE SOURCE" Maybe they want analysis based on paper. Need zero betting lines; no odds. Need formal LaTeX, units, assumptions, exact singularity/breakdown regimes. Must include sections exactly. Need >=1000-word depth. Need cite [PAGE N] markers and verbatim quotes. Need maybe discuss match phases framework. No sports betting lines. Need avoid mention spreads etc. Need no fake ratios. Need formal equations. Need source operators/equations based on paper: phase assignment rules. Could formalize as deterministic mapping from event attributes/freeze-frame player counts/ball location to phase labels. Units: time seconds, percentage match time dimensionless, counts players, field thirds. Since paper doesn't provide equations, we can state formalization as our reconstruction, not from source. Cite page quotes. Need exact singularity/breakdown regimes: when freeze-frame missing, multiple events timestamp, possession team misclassification, unknown phases, 3s interpolation. Need maybe include equations:
Let frames t indexed at event timestamps (or event frames) with Δt. For event e_t: p_t = play_pattern, b_t = ball location in third, n_att^team(t), n_first^team(t), n_second^team(t), pressure_t ∈ {0,1}, counterpress_t, setpiece_t, onball team o_t. Phase assignment for on-ball:
if setpiece and frame index k≤5: SetPieceFor/Against
else if p_t=From Counter: Counterattack
else if under Counterpress: Consolidate
else Buildup if b∈first third, Progression second, Finishing third.
Out of possession:
if o_t phase = Counterattack -> Regroup
else if counterpress tag -> Counterpress
else if n_att_without ≥ 4 -> High Block
else if n_first_without ≥ 6 -> Low Press if pressure else Low Block
else if n_second_without ≥ 4 -> Mid Press if pressure else Mid Block
else Unidentified.
Set piece first five frames with play_pattern in set. Need "frames" exact: paper says "first five frames with a play_pattern..." after fifth frame normal open play. Note frames are event frames, not video frames? Need not overinterpret. We can define F_t set piece indicator.

Interpolation: unknown phases. Let U_t unknown; if exists known t1<t<t2 consecutive known with t2-t1 ≤3 seconds, label to one of those known phases. Paper doesn't specify which if two known phases differ. Need note ambiguity: "to one of those known phases" [PAGE 4]. This is non-deterministic/underspecified. Need exact breakdown regime: when Δt=0 multiple events; collapse via priority list. When missing freeze-frames (~10.5%) and non-compliant ~5% =16%, reduces to 12%. Need maybe equation unknown fraction after interpolation:
U_0/N ≈ 0.16, U_1/N ≈ 0.12. Could formalize:
U_0 = MissingSB ∪ Unidentified. |MissingSB|/N ≈ 0.105, |noncompliant|/N ≈ 0.05, so |U_0|/N ≈ 0.155 ≈ 0.16. After gap-fill |U_1|/N ≈ 0.12. Need state rounding.

Need compare with FIFA: not directly comparable due denominator difference. Quote footnote 7: "FIFA reported the percentage of each sub-phase not over the entire match duration, but rather in relation to the time spent in and out of possession phases. This difference in reporting makes their findings non-comparable with ours." [PAGE 4]. This is critical. Need discuss no formal validation because subjective [PAGE 4]. Also data sources [PAGE 2].

Need RETROCAUSAL_GENEALOGY: lineage from Garganta & Pinto 1994 offense/defense, Wade 1967 attack/defense/preparation, Oliveira 2012 transition, set pieces Coaches' Voice 2021, segmentation by lines/block heights and thirds, StatsBomb 360, FIFA EFI, black-box CNN Bauer et al. 2023, graph CNN Campos 2021, self-supervised Singh 2020, Fassmeyer et al. 2021. Need discuss multi-week traps: denominator mismatch, event-level vs frame-level, freeze-frame missingness, timestamp collisions, possession team correction, TV footage visible players not full tracking, set-piece 5-frame truncation, interpolation ambiguity, label subjectivity, missing SB 10.5%, unknown 16->12.

Need RECURSIVE_THEORY_OF_MIND: "Crisis habit regression vs counter-trap vs clock." We need interpret in context. This section likely from sports reasoning benchmark: crisis habit regression (team reverts to habits under losing/winning), counter-trap (opposition baiting pressing etc), clock (game state/time). Need use paper findings: Figure 4 losing vs winning scenarios: Winterthur low block when winning, Young Boys low block unchanged, Lugano and Sion increase buildup when winning [PAGE 8]. Need discuss coaches' phase principles, scoring context. Need no betting. We can discuss "crisis habit regression" as teams under match status revert to habitual block; "counter-trap" as counterpress/counterattack; "clock" as match phase duration and set-piece frames. Need maybe not mention "betting". We can mention scoreline context, not betting. Need recursive theory of mind: coach/analyst beliefs about opponent phase propensities; model opponent model; using phase percentages as behavioral priors. Need counterfactual: if team winning, low block vs buildup. Need avoid "clock" as in game clock; set piece five frames; 3-sec interpolation. Need mention "clock" as temporal indexing.

Need CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto proof. Paper lacks physical/biomechanical/weather data. Need adjudicate: any phase-label claim vetoed if it requires physical load, biomechanics, weather not in source. We can say no physical/biomechanical/weather variables in StatsBomb 360 open data as described; visible players/positions, event attributes only. Thus cannot infer fatigue, injury, sprint load, surface, wind. Need formal veto conditions: if claim depends on variable not in source, veto. "Physical veto": if proposed phase label derives from fatigue or load, invalid under this framework. "Biomechanical": if derives from body orientation or gait, not available. "Weather": not available. Need proof via quotes: data are StatsBomb 360 and event datasets [PAGE 2]; phases assigned from "freeze-frame" [PAGE 3]; rules use play_pattern, player counts, pressure, counterpress, thirds [PAGE 3]. No weather. Need exact breakdown: TV footage partial tracking, missing frames, visible players count; occlusion can cause undercount of players in thirds. That's biomechanical/physical? It's visibility. Need note if player count threshold 4/6 is sensitive to visibility; if invisible players, n underestimates and classification changes. That's a cross-layer veto: physical occlusion vetoes high/low block claims. Need formal inequality:
If true count N_true ≥ threshold but visible N_vis < threshold, then rule assigns lower block. Veto if N_vis < threshold ≤ N_true. This is exact. Need mention no full optical tracking, unlike FIFA [PAGE 4]. Thus cannot validate threshold counts with full tracking.

Need RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = reinforcement learning from verifiable rewards? Need craft scenarios where answer is checked against source. Need three counterfactuals:
1. Denominator mismatch veto: If a report compares percentage of sub-phase in this paper with FIFA post-match report directly, veto. Prediction: source footnote says non-comparable [PAGE 4]; if comparison claims equality/ranking, invalid. Verification: check denominator: paper over entire match duration vs FIFA relative to in/out possession.
2. Missing freeze-frame interpolation: If an analyst claims a frame labeled after gap-fill is directly observed, veto. Prediction: frame was MissingSB or Unidentified and gap-filled only if adjacent known phases within ≤3 s [PAGE 4]; direct-observation claim false. Verification: flag unknown before gap-fill and gap duration.
3. Set-piece cutoff: If a phase at sixth frame after corner/free kick/throw-in is labeled Set Piece, veto. Prediction: paper uses first five frames only; after fifth frame normal open play [PAGE 3]. Verification: frame index k>5.
Need maybe add multiple events timestamp: if two events same timestamp assigned different phases, veto due priority list [PAGE 2]. But need exactly 3. Could include as one? They ask 3 verifiable RLVR veto scenarios. We can include denominator, gap-fill, set-piece. Maybe mention timestamp in scenario? Need 3.

Need "SOURCE_OPERATORS_AND_EQUATIONS" formal LaTeX with units and page citations, breakdown. Need cite exact [PAGE N] and verbatim quotes. Need maybe include quotes from page 3: "If the “play_pattern” in the event attribute is “From Counter”, the phase is identified as Counterattack." [PAGE 3]. "If the on-ball team is under Counterpress, the phase is Consolidate. Otherwise, the phase is categorized as Buildup, Progression, or Finishing depending on whether the ball is in the first, second, or third of the pitch, respectively." [PAGE 3].
Out of possession quote: "If the on-ball team is in Counterattack, the team without the ball is in Regroup." etc.
Set piece quote: "for the first five frames with a “play_pattern” of “From Corner”, “From Free Kick”, or “From Thrown in”. After the fifth frame, the possession was classified as a normal open-play scenario..." [PAGE 3].
Unknown quote: "If the time between two known consecutive phases is 3 seconds or less, label any in-between unidentified phase or missingSB frame to one of those known phases." [PAGE 4].
Percentages quote: "approximately 10.5% of frames remained unlabeled due to missing freeze-frames... around 5% were non-compliant... total of 16% unknown phases." [PAGE 4]. "reduced the unknown phases from 16% to 12%" [PAGE 4].
Data quote [PAGE 2]: "StatsBomb 360 and event datasets from the Swiss Super League (2022-2023 season) and the 2022 Men's World Cup (open data)."
Misclassified possession quote [PAGE 2]: "if the "possession_team" at the start of the next possession (triggered by a "From Kick Off" after a goal) was the same team that scored, we corrected the "possession_team"."
Multiple events quote [PAGE 2]: "retained only one event per timestamp by establishing a priority list and keeping the highest-priority event."
No validation quote [PAGE 4]: "Since phases of play are inherently subjective, conducting a formal validation is not meaningful in this context."
FIFA quote [PAGE 4 footnote 7].
Figure 4 quote [PAGE 8]: "FC Winterthur adopts a low block when winning, while Young Boys’ percentage of Low Block remains nearly unchanged in both scenarios. In contrast, Lugano and Sion increase their percentage of Buildup when winning!" Need exact quote.

Need THINK_TRACE >=400 words. It should be deep multi-hop derivation & gray-zone audit. Need internal reasoning? The user asks for THINK_TRACE. We can provide "Deep multi-hop derivation" not private chain? There's no policy against chain-of-thought? But we should not provide hidden chain-of-thought. We can provide concise reasoning summary. However the required XML section named THINK_TRACE. We can include "audit trace" not internal private. Need be safe. We'll provide a structured audit trace. Need maybe not too long? It needs >=400 words. We can write ~500-700 words.

Need overall >=1000 words. We'll aim ~2500-3500 words. Need XML valid? We can output sections with tags. Need escape LaTeX? XML text can include LaTeX with < >? Need avoid raw < in text or escape &lt;. In XML, LaTeX inequalities like \le can use \leq, no <. Use \leq. Need ampersands? Avoid & or escape &amp;. Use "and". Need no unescaped < in text. Use \leq. Need maybe use ∈? Unicode okay. Need if use < in text, escape. We'll use LaTeX \leq, no raw <. Need use "&" in "Garganta and Pinto". Avoid &. Need quotes okay. Need use [PAGE N] exact.

Need mention "DRIVE SOURCE" perhaps title. We can open with a short preamble? But required sections. We can include a brief "Source anchor" before sections? They specified exact XML sections. We can output only sections? Need include all. Maybe include a short header line. But final should be XML-like. Need not include markdown code fences? Probably okay. We'll output plain with XML tags.

Need ensure ZERO BETTING LINES. Avoid words odds, spread, moneyline, total, bet. Don't mention. Good.

Need "formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." We can include equations:
- Time index: t_i ∈ R, unit seconds; Δt_ij = t_j - t_i seconds.
- Frame set F = {f_i}, N = |F|, unit frames.
- Phase label mapping L: F × {home,away} -> P. P finite set.
- On-ball team o(f) ∈ {H,A}. For each frame f, freeze-frame visibility V(f) subset players, count n_X^a(f) = |{p ∈ V(f): team(p)=a, zone(p)=X}|, unit players.
- Ball zone z(f) ∈ {1,2,3} thirds, unit ordinal zone.
- Indicators: C(f) ∈ {0,1} from play_pattern = From Counter; P(f) pressure; K(f) counterpress; S(f) set piece; q(f) frame index since set piece.
- Set piece: if S(f)=1 and q(f) ≤ 5: label SetPieceFor/Against. After q>5: normal open play.
- On-ball phase:
\[
L_o(f)=
\begin{cases}
\text{SetPieceFor/Against} & S(f)=1 \land q(f)\leq5\\
\text{Counterattack} & S(f)=0 \land C(f)=1\\
\text{Consolidate} & S(f)=0 \land C(f)=0 \land K(f)=1\\
\text{Buildup} & ... z=1\\
\text{Progression} & ... z=2\\
\text{Finishing} & ... z=3
\end{cases}
\]
Need maybe note paper's order: set piece separate. The paper says main phases include set pieces; then in possession rules. Need order maybe set piece first. Fine.
- Out-of-possession:
\[
L_{\bar o}(f)=
\begin{cases}
\text{Regroup} & L_o(f)=\text{Counterattack}\\
\text{Counterpress} & K(f)=1\\
\text{High Block} & n_{att}^{\bar o}(f)\geq4\\
\text{Low Press} & n_{first}^{\bar o}(f)\geq6 \land P(f)=1\\
\text{Low Block} & n_{first}^{\bar o}(f)\geq6 \land P(f)=0\\
\text{Mid Press} & n_{second}^{\bar o}(f)\geq4 \land P(f)=1\\
\text{Mid Block} & n_{second}^{\bar o}(f)\geq4 \land P(f)=0\\
\text{Unidentified} & \text{otherwise}
\end{cases}
\]
Need order: high block first, else low first, else mid second. Good.
- Unknown fraction:
\[
u_0 = \frac{|M \cup U|}{N} \approx 0.105+0.05=0.155 \approx 0.16
\]
\[
u_1 = \frac{|U_{\text{after}}|}{N} \approx 0.12
\]
Units dimensionless. Note not exact due rounding and overlap? We should say approximate and union not additive if overlap; paper says approximately 10.5% missing + around 5% non-compliant leading total 16, so approximate.
- Gap fill operator:
\[
G(t)= \{t': t_1 < t' < t_2, t_2-t_1 \leq 3\,\text{s}, L(t_1),L(t_2) \in \text{Known}\}
\]
assign to one of known. Ambiguity if L(t1) != L(t2). Need define nondeterministic set-valued.
- Distance metric:
\[
d(m,\bar{})=\sqrt{\sum_{p\in P} (x_{m,p}-\bar{x}_p)^2}
\]
where x percentages dimensionless. This is Euclidean distance mentioned page 9. Need not fake, it's in paper. Units dimensionless or percentage points. We can cite [PAGE 9]: "we can use the Euclidean distance to calculate the difference between the average of phase percentages over the season and each individual match." Good.

- Exact singularity/breakdown regimes:
1. N=0? No frames; undefined. But not source.
2. Δt=0 timestamp collision: multiple events same timestamp; priority list needed; without it duplicate phase assignments. Breakdown at |E(t)|>1.
3. Missing freeze-frame: |V(f)|=0 -> MissingSB, not phase identifiable; if V(f) lacks players, counts underthreshold; label may be Unidentified or misclassified.
4. Non-compliant rules: no branch -> Unidentified.
5. Gap fill Δt≤3 s only; if Δt>3 s unknown remains. If endpoints differ, ambiguity.
6. Set-piece q=5 boundary: q≤5 set piece; q>5 open play. At q=6 normal. Need exact.
7. Third boundary: ball exactly on boundary between first/second or second/third; paper doesn't specify boundary inclusion. Breakdown/ambiguous. Need mention.
8. Player count threshold boundaries n=4/6; if exactly threshold, rule applies (at least). If visibility undercounts, misclass.
9. Possession team correction: if misclassified and no next kickoff same team, correction may not apply; phase assignment may be wrong.
10. Denominator mismatch with FIFA: not singularity but comparability breakdown.
Need include "assumptions": event timestamp is frame proxy; freeze-frame visibility sufficient; thresholds valid; pressure/counterpress tags reliable; set-piece window fixed 5 frames; scoreline not in phase rules but used in analysis.

Need "RETROCAUSAL_GENEALOGY" historical/scientific lineage & multi-week traps. Need 300+ words maybe. Include lineage and traps. "Retrocausal" means tracing current framework back to earlier ideas. We can say the paper's phase taxonomy is not invented ex nihilo; it retroactively assembles earlier coaching lineages. Cite pages. Multi-week traps: repeated data collection over season, phase percentages aggregation; if denominator changes or missingness nonstationary, season averages biased. Need "multi-week traps" likely for sports betting? But no betting. We can discuss weekly analysis traps: denominator drift, label drift, opponent adaptation. Need avoid betting. Good.

Need "RECURSIVE_THEORY_OF_MIND" crisis habit regression vs counter-trap vs clock. Need 250+ words. Discuss coaches' beliefs. Use Figure 4. Need formal maybe not necessary. But can include clear comparison:
- Crisis habit regression: under losing, team reverts to habitual low block or buildup. Paper says Lugano/Sion increase buildup when winning, Winterthur low block when winning, Young Boys unchanged [PAGE 8]. This shows direction is not universal; coach/team-specific habit. A model assuming all teams park low block when winning is vetoed by source.
- Counter-trap: opponent in counterattack triggers Regroup; counterpress tag triggers Counterpress; this is a recursive loop: Team A's counterattack label forces Team B's regroup; Team B's counterpress label affects Team A consolidate. Need resolve order? Paper defines on-ball first? It says for each event use freeze-frame to assign phases to both teams; out-of-possession if on-ball team in Counterattack then Regroup; phase is Counterpress if tagged. Potential circularity: on-ball phase Consolidate if under Counterpress; out-of-possession Counterpress if tagged. But if counterpress tag true, on-ball is Consolidate and opponent Counterpress; no circularity because counterpress tag independent. Need mention.
- Clock: set-piece five-frame window and 3-second interpolation. "Clock" as temporal segmentation. Recursive ToM: analysts model opponent modeling them; if opponent knows you label low block, they may counter-trap with high press? But no physical. Need maybe "counter-trap" means opponent induces a phase label? We can state in source terms: counterattack and counterpress are the mechanism; a team can bait an opponent into a counterattack by conceding possession, then counterpress. But source doesn't say baiting. We can mark as inference/hypothesis not source claim. Need be careful: "counter-trap" maybe not in paper. We can frame as "phase-level counter-trap hypothesis" and state it's not directly tested. Need prediction.

Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. Need 300+ words. Include formal proof:
Let claim C require variable q not in D_source. If q ∉ D_source, then C cannot be adjudicated by this framework. Data D_source = StatsBomb 360 and event datasets [PAGE 2]; phase rules use play_pattern, freeze-frame, player counts, pressure, counterpress, thirds, set-piece frames [PAGE 3]. No weather, no force plate, no GPS, no biomechanical orientation. Therefore physical load, fatigue, ground reaction force, wind, rain, temperature claims are vetoed. If a phase claim uses visible player counts, occlusion can cause error. Define true count N_true and visible N_vis. If N_vis < threshold ≤ N_true, rule labels lower block but true state meets higher block. Veto if N_vis < threshold ≤ N_true. Need mention "TV footage" [PAGE 11] or "number of visible players and their locations from TV footage" [PAGE 11]. Quote: "the number of visible players and their locations from TV footage" [PAGE 11]. That supports occlusion. Need "FIFA utilized in-stadium full optical tracking" [PAGE 4], while paper uses StatsBomb 360 partial tracking. So physical/biomechanical cross-layer cannot be validated. Weather not in data. Need maybe "biomechanical" includes body orientation; freeze-frame may show positions but not force. Good.

Need "RLVR_COUNTERFACTUAL_VETOES" 3 scenarios with predictions. Need maybe format each with "Scenario", "Veto condition", "Prediction", "Verification". Use exact page citations and quotes.

Need ensure total word count. Let's draft with all sections.

Need think about "Unknown Authors" in source title. The paper has authors Edoardo Ghezzi and Hadi Sotudeh. Could mention. Not necessary.

Need maybe mention "GSE + GSI Frontier Reasoning Foundry" no need.

Need use "SI/information/probability units". We can include "dimensionless", "seconds", "players", "frames", "percentage points". Information units? Maybe entropy? We can introduce phase distribution entropy? Not in paper. But requirement says SI/information/probability units. We can include optional "phase distribution probability p_k = T_k/T_total" dimensionless; entropy H = -Σ p_k log2 p_k in bits. But paper doesn't use entropy. Is that inventing? It's a formal operator not in source. The invariant says no toy equations; formal equations okay if assumptions. But maybe avoid adding entropy because not source. However user explicitly asks SI/information/probability units. We can state "probability p_p = T_p/T in [0,1] dimensionless; information content -log2 p_p in bits (not used by paper, only unit convention)". Hmm could be considered extraneous. We can mention units for percentages and probabilities. But not necessary? They ask "Formal LaTeX, units". We'll include "All phase shares are probabilities p_p ∈ [0,1] dimensionless; if reported as percentages, multiply by 100 and use percentage points." That satisfies probability units. Information units: "No information-theoretic quantity is defined in the source; any bits claim is external and vetoed unless separately derived." That's good. Need include in SOURCE_OPERATORS section maybe.

Need avoid raw "<" in XML. Use \leq. Use "≤" maybe okay but XML is fine with unicode. But safer use \leq in LaTeX. In prose "less than" not <. Use "greater than or equal" words. Avoid ampersand. Use "and". Use "R" no issue. Use "∈" okay. Use "|" okay. Use "→" okay.

Need maybe use "PAGE 1 of 13" markers? User says cite exact [PAGE N] markers. We'll use [PAGE 1], etc. Good.

Need "verbatim quotes" exact. Need preserve quote punctuation. We'll use quotes exactly as source. Need avoid altering. For page 3 quote: "If the “play_pattern” in the event attribute is “From Counter”, the phase is identified as Counterattack." Exact. Another: "If the on-ball team is under Counterpress, the phase is Consolidate." Wait source has footnote 6 marker after Counterpress? It says "If the on-ball team is under Counterpress6, the phase is Consolidate." We can quote without footnote marker? Verbatim? Hmm. Use exact with superscript? We'll quote "If the on-ball team is under Counterpress, the phase is Consolidate." That omits superscript 6 but okay? Maybe exact quote should include footnote marker? We can include [footnote 6 omitted]. But user wants verbatim. We can quote exact with "Counterpress6"? That might look odd. Use shorter exact fragments to avoid footnote. e.g., "the phase is Consolidate." [PAGE 3]. Or "the phase is categorized as Buildup, Progression, or Finishing depending on whether the ball is in the first, second, or third of the pitch, respectively." Exact. Good.

Need page 2 quote: "retained only one event per timestamp by establishing a priority list and keeping the highest-priority event." Exact? Source: "we retained only one event per timestamp by establishing a priority list and keeping the highest-priority event." We'll include "we retained..." exact.

Need page 4 quote: "approximately 10.5% of frames remained unlabeled due to missing freeze-frames in StatsBomb's 360 data (we call them missingSB). Additionally, around 5% were non-compliant with our pre-specified rules, leading to a total of 16% unknown phases." Exact? Source has line breaks; we can quote. Good.
Quote: "If the time between two known consecutive phases is 3 seconds or less, label any in-between unidentified phase or missingSB frame to one of those known phases." Exact. Good.
Quote: "This method reduced the unknown phases from 16% to 12%, demonstrating its effectiveness." Exact.
Quote: "Since phases of play are inherently subjective, conducting a formal validation is not meaningful in this context." Exact.
Quote: "FIFA reported the percentage of each sub-phase not over the entire match duration, but rather in relation to the time spent in and out of possession phases. This difference in reporting makes their findings non-comparable with ours." Exact? Source: "FIFA reported the percentage of each sub-phase not over the entire match duration, but rather in relation to the time spent in and out of possession phases. This difference in reporting makes their findings non-comparable with ours." Yes.

Page 8 quote: "FC Winterthur adopts a low block when winning, while Young Boys’ percentage of Low Block remains nearly unchanged in both scenarios. In contrast, Lugano and Sion increase their percentage of Buildup when winning!" Exact.

Page 9 quote: "To answer this question, we can use the Euclidean distance to calculate the difference between the average of phase percentages over the season and each individual match." Exact? Source: "To answer this question, we can use the Euclidean distance to calculate the difference between the average of phase percentages over the season and each individual match." Yes.

Page 11 quote: "the number of visible players and their locations from TV footage" exact? Source: "rules involving the ball's location on the field, StatsBomb’s event data attributes, and the number of visible players and their locations from TV footage." Good.

Need maybe mention "10.5% missing freeze-frames" and "5% non-compliant" in unknown. Good.

Need "exact singularity/breakdown regimes": We can have a subsection with enumerated list. Need use "singularity" maybe mathematical singularities: N=0, Δt=0, threshold equality? We'll include.

Need "CROSS_LAYER_VETO_ADJUDICATION" proof: We can write "Theorem (source-domain veto). Let C be a claim requiring variable v. If v ∉ D, then C is not verifiable under this source. Proof: D = ...; all phase rules are functions of ...; v not in that set; therefore no rule maps v to label; any claim invoking v is external." Good.

Need "RLVR" maybe define "Reinforcement Learning from Verifiable Rewards" or "reinforcement-learning verifiable reward". We can say "RLVR-style verifiable reward check". Each scenario has a binary reward: 1 if source-consistent, 0 if violated. Good.

Need maybe include "counterfactual veto" predictions with "if X then reward=0". Good.

Need "THINK_TRACE" >=400 words. Let's draft ~600 words. Need not expose hidden chain? We can frame as "Audit trace: source-to-claim derivation". It will be a summary. That's okay.

Need ensure all sections have word counts. Let's compose.

Potential issue: The paper's phase order: "If the on-ball team is under Counterpress, the phase is Consolidate. Otherwise, the phase is categorized as Buildup, Progression, or Finishing depending on whether the ball is in the first, second, or third of the pitch, respectively." It doesn't mention set piece order in in-possession. We can define set piece first because separate. Good.

Potential issue: "High Block" rule: "If the without-the-ball team has at least four players in their attacking third, it is classified as a High Block." Note "their attacking third" means the opponent's defensive third? Need phrase. We'll use "attacking third" as source. In formal variables: n_att^{\bar o}. Good.
"Else if the without-the-ball team has at least six players in their first third of the field, it is Low Press if the event is under pressure and Low Block otherwise." Good.
"Else if the without-the-ball team has at least four players in their second third of the field, it is Mid Press if the event is under pressure and Mid Block otherwise." Good.
"In all other scenarios, it is labeled as Unidentified." Good.

Need maybe "Counterpress if tagged in Statsbomb’s event data." Source spelling "Statsbomb" not StatsBomb. We can quote exact? We'll use "StatsBomb" in prose.

Need "Set Piece For or Set Piece Against depending on which team is taking it" [PAGE 3]. Good.

Need "first five frames with a “play_pattern” of “From Corner”, “From Free Kick”, or “From Thrown in”." Exact? Source: "for the first five frames with a “play_pattern” of “From Corner”, “From Free Kick”, or “From Thrown in”." Yes.

Need "After the fifth frame, the possession was classified as a normal open-play scenario, and each subsequent frame was labeled according to the rules described earlier." Exact. Good.

Need "This adjustment was crucial for accurately evaluating more frames as open-play and reducing the number allocated to set piece categories." Exact. Good.

Need "Data" quotes. Good.

Need "Related work" lineage. Use page 1 quotes:
"one can look only at offense and defense" [PAGE 1]. "The next level is to expand it to 1) attack 2) defense and 3) preparation (transition)" [PAGE 1]. "The transition phase can be divided into attack to defense and vice versa" [PAGE 1]. "set-pieces are considered a separate phase by some coaches because a significant number of goals are scored from them" [PAGE 1]. "The major difference among these approaches is how the in and out-of-possession phases are segmented into smaller sub-phases based on references such as (attack, midfield, and defense) lines and block heights ... or pitch tactical zones ... first, middle, and last third" [PAGE 1]. Good.

Need "multi-week traps": Use paper applications: season-long averages and per-match deviations. If missingness varies by match, season average biased. If phase definitions drift across weeks due to updates, comparisons invalid. If opponent adaptation over weeks, average behavior not stationary. If set-piece five-frame cutoff interacts with competition data. Good.

Need "RECURSIVE_THEORY_OF_MIND" maybe include formal counterfactual:
If team W is winning, predicted low-block share L_W(win) vs L_W(lose). Source says not universal. The "crisis habit regression" model predicts L_W(win) > L_W(lose) for Winterthur; Young Boys no change; Lugano/Sion Buildup(win) > Buildup(lose). Need mention "crisis habit regression" as a hypothesis, not source. The counter-trap model predicts opponent's Counterattack label increases own Regroup and Counterpress; a trap is when a team intentionally concedes a counterattack-coded event to trigger opponent's Regroup? Hmm. Maybe "counter-trap" as "the opponent's counterpress tag forces on-ball Consolidate, so the team that baits counterpress can trap the press." Need not overdo.

Need "clock": set-piece window 5 frames, interpolation 3 seconds. The "clock" in recursive ToM: teams manage game state and time; but source only uses phase shares, not scoreline in phase rules. Scoreline figures are post-hoc. We can say "the paper's clock is event-time, not competitive clock; it does not model stoppage time or game state within phase assignment." Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather. We can include "weather veto proof" as:
Assume a claim C: "Team A's low block is caused by heavy rain." The source has no rain variable. The phase label L_A(f)=Low Block can be computed without rain [PAGE 3]. Therefore the causal claim cannot be identified; it is vetoed. Same for "fatigue caused Regroup" or "biomechanical orientation caused Counterpress." The only admissible physical/biomechanical claim is about visible player counts/locations from TV footage, which are proxies not forces. Occlusion can cause count error. Use inequality proof. Good.

Need "RLVR_COUNTERFACTUAL_VETOES" maybe include "reward=1 if source-consistent, 0 if veto". Good.

Need "ZERO BETTING LINES" no mention. Good.

Need maybe "odds" not mention. Good.

Need "Source Operators" title exact. We'll output:

<SOURCE_OPERATORS_AND_EQUATIONS>
...
</SOURCE_OPERATORS_AND_EQUATIONS>

Need XML escaping: Use "and" not "&". In LaTeX, \text{Set Piece For/Against} contains slash okay. "≤" use \leq. "≥" use \geq. "∈" okay. "∪" okay. "∅" okay. "→" okay. "×" okay. Quotes with curly okay. Avoid "&" in "Garganta and Pinto". Avoid "StatsBomb’s" apostrophe okay. Avoid "<" in text. Use "less than" words or \leq. Avoid ">"? XML allows > but we can use \geq. Good.

Need if using "PAGE 1 of 13" no issue.

Need "word count" not exact but enough.

Let's draft final. We can include a short intro? The required sections exact. Maybe no intro. But need maybe state "Source anchor: Ghezzi and Sotudeh, Match Phases in Practice, 13 pages." Could be before THINK_TRACE. But final should be the XML sections. We can include a brief line then sections. The user says ">=1,000-WORD DEPTH across these exact XML sections". We can output sections. Maybe include an initial "Source anchor" not a section? Could be okay. But exact XML sections maybe only those. I'll start directly with <THINK_TRACE>.

Need ensure THINK_TRACE is >=400 words. Let's write ~650 words.

THINK_TRACE content: "Audit trace. Step 1: Source domain. The paper uses StatsBomb 360 and event data from Swiss Super League and 2022 Men's World Cup [PAGE 2]. It is not full tracking; FIFA comparison uses in-stadium full optical tracking [PAGE 4]. Step 2: Unit of analysis. It assigns phases to each event frame, not possessions. Quote [PAGE 3] 'For each event in the processed data, we use its freeze-frame to assign phases to both teams.' Step 3: Rule extraction. On-ball branches: set piece, counter, counterpress, thirds. Out-of-possession branches: regroup, counterpress, high block, low press/block, mid press/block, unidentified. Quote. Step 4: Missingness. 10.5% missingSB + 5% noncompliant = 16%; gap-fill ≤3s reduces to 12%. Step 5: Data hygiene. Possession team correction and timestamp dedup. Step 6: Gray zones. Boundary equality, threshold visibility, interpolation endpoint ambiguity, set-piece frame boundary. Step 7: Comparability. FIFA denominator mismatch. Step 8: Validation. No formal validation because subjective. Step 9: Applications. Opposition analysis, post-match, ad-hoc queries; scoreline Figure 4. Step 10: Veto logic. Claims requiring weather, force, biomechanics are outside source. RLVR checks. This is not hidden reasoning but audit." Good.

Need maybe "deep multi-hop derivation" includes "If A then B then C" chain. Good.

Now final. Ensure not too verbose but enough. Let's produce.

Potential issue: The user requested ">= 1,000-WORD DEPTH across these exact XML sections" maybe they expect only these sections. We'll include all. Good.

Need "RETROCAUSAL_GENEALOGY" maybe 350 words. "RECURSIVE_THEORY_OF_MIND" 300. "CROSS_LAYER" 350. "RLVR" 300. Total >2000. Good.

Let's write final carefully.
</NATIVE_REASONING>

<THINK_TRACE>
Audit trace, not private chain-of-thought. Step 1: source-domain identification. The paper is explicitly built from “StatsBomb 360 and event datasets from the Swiss Super League (2022-2023 season) and the 2022 Men's World Cup (open data)” [PAGE 2]. That means the admissible primitive variables are event attributes, freeze-frame visible-player counts and locations, ball position in pitch thirds, pressure/counterpress tags, and set-piece play patterns. Step 2: unit-of-analysis identification. The paper does not primarily assign phases to possessions; it assigns them to event frames: “For each event in the processed data, we use its freeze-frame to assign phases to both teams” [PAGE 3]. Therefore any claim about “possession-level phase” must be treated as an aggregation over frames, not as a direct source label. Step 3: on-ball rule extraction. The paper branches on “play_pattern” equal to “From Counter” for Counterattack, on being “under Counterpress” for Consolidate, and otherwise on ball location in the first, second, or third of the pitch for Buildup, Progression, or Finishing [PAGE 3]. Step 4: out-of-possession rule extraction. The paper maps opponent Counterattack to Regroup, explicit counterpress tags to Counterpress, then uses player-count thresholds: at least four in the attacking third for High Block, at least six in the first third for Low Press or Low Block depending on pressure, at least four in the second third for Mid Press or Mid Block depending on pressure, and otherwise Unidentified [PAGE 3]. Step 5: set-piece rule extraction. Set Piece For or Set Piece Against is assigned “for the first five frames” of Corner, Free Kick, or Thrown in play patterns; “After the fifth frame, the possession was classified as a normal open-play scenario” [PAGE 3]. Step 6: missingness audit. The paper reports “approximately 10.5% of frames remained unlabeled due to missing freeze-frames” and “around 5% were non-compliant with our pre-specified rules, leading to a total of 16% unknown phases” [PAGE 4]. The gap-fill rule is only for “3 seconds or less” between known consecutive phases and labels the in-between unknown frame “to one of those known phases” [PAGE 4], reducing unknown phases “from 16% to 12%” [PAGE 4]. Step 7: data-hygiene audit. The paper corrects misclassified possession teams using the next “From Kick Off” after a goal and deduplicates multiple events at the same timestamp by retaining “only one event per timestamp by establishing a priority list and keeping the highest-priority event” [PAGE 2]. Step 8: comparability audit. The FIFA comparison is explicitly denominator-incompatible: “FIFA reported the percentage of each sub-phase not over the entire match duration, but rather in relation to the time spent in and out of possession phases. This difference in reporting makes their findings non-comparable with ours” [PAGE 4, footnote 7]. Step 9: validation audit. The paper states: “Since phases of play are inherently subjective, conducting a formal validation is not meaningful in this context” [PAGE 4]. Thus any claim of ground-truth phase accuracy is outside the source’s own validity claim. Step 10: cross-layer audit. The paper’s rules use “the number of visible players and their locations from TV footage” [PAGE 11], not full optical tracking, GPS, force plates, weather stations, or biomechanical sensors. Therefore physical, biomechanical, and weather causal claims are not identifiable from this source and must be vetoed unless separately evidenced. Step 11: gray-zone audit. The exact breakdown regimes are: zero visible freeze-frame, timestamp collision with more than one event, player-count threshold equality, ball exactly on a third boundary, set-piece frame index equal to five versus six, interpolation gap equal to three seconds versus greater than three seconds, and differing known labels at the two interpolation endpoints. Step 12: RLVR audit. A verifiable reward must check the source’s denominator, frame index, and missingness status before accepting a phase claim. The deep derivation is therefore: source data → frame-level freeze-frame → deterministic branch mapping → unknown-set reduction → aggregation by phase share → application claim. Any leap that skips a branch, changes the denominator, or imports an absent physical variable breaks the derivation chain.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal reconstruction of the paper’s phase-assignment operators. All symbols are defined only for the source’s admissible domain: StatsBomb 360 and event data [PAGE 2].

Let \(F=\{f_i\}_{i=1}^{N}\) be the processed event-frame set, with \(N\) measured in frames. Let \(t_i\) be the timestamp of frame \(f_i\), measured in seconds. Let
\[
\Delta t_{ij}=t_j-t_i \quad [\mathrm{s}]
\]
be the elapsed time between frames. Let \(a\in\{H,A\}\) index the two teams. Let \(o(f)\in\{H,A\}\) be the on-ball team, defined by the paper’s action-on-ball convention rather than StatsBomb’s possession-team field [PAGE 3, footnote 5]. Let \(\bar o(f)\) be the other team.

Define the visible-player set \(V(f)\) from the freeze-frame. For team \(a\) and pitch third \(z\in\{1,2,3\}\), define
\[
n_{z}^{a}(f)=\left|\{p\in V(f): \operatorname{team}(p)=a,\ \operatorname{third}(p)=z\}\right| \quad [\mathrm{players}].
\]
Let \(b(f)\in\{1,2,3\}\) be the ball’s pitch third, measured as an ordinal zone, not a continuous length. Let \(C(f)\in\{0,1\}\) be the indicator that “play_pattern” is “From Counter” [PAGE 3]. Let \(K(f)\in\{0,1\}\) be the counterpress indicator, where the paper says “a counterpress event is defined as a pressing action occurring within five seconds of an open play turnover” [PAGE 3, footnote 6]. Let \(P(f)\in\{0,1\}\) be the pressure indicator. Let \(S(f)\in\{0,1\}\) be the set-piece indicator for “From Corner”, “From Free Kick”, or “From Thrown in” [PAGE 3]. Let \(q(f)\in\mathbb{N}\) be the frame index since the set-piece start.

The on-ball phase operator \(L_o(f)\) is reconstructed as
\[
L_o(f)=
\begin{cases}
\text{SetPieceFor/Against} & S(f)=1 \ \text{and}\ q(f)\leq 5,\\
\text{Counterattack} & S(f)=0 \ \text{and}\ C(f)=1,\\
\text{Consolidate} & S(f)=0 \ \text{and}\ C(f)=0 \ \text{and}\ K(f)=1,\\
\text{Buildup} & S(f)=0 \ \text{and}\ C(f)=0 \ \text{and}\ K(f)=0 \ \text{and}\ b(f)=1,\\
\text{Progression} & S(f)=0 \ \text{and}\ C(f)=0 \ \text{and}\ K(f)=0 \ \text{and}\ b(f)=2,\\
\text{Finishing} & S(f)=0 \ \text{and}\ C(f)=0 \ \text{and}\ K(f)=0 \ \text{and}\ b(f)=3.
\end{cases}
\]
This follows the paper’s wording: “If the “play_pattern” in the event attribute is “From Counter”, the phase is identified as Counterattack”; “the phase is Consolidate”; “Otherwise, the phase is categorized as Buildup, Progression, or Finishing depending on whether the ball is in the first, second, or third of the pitch, respectively” [PAGE 3]. The set-piece branch is placed first because the paper treats set pieces as a separate main phase and defines Set Piece For or Set Piece Against “for the first five frames” [PAGE 3].

The out-of-possession operator \(L_{\bar o}(f)\) is reconstructed as
\[
L_{\bar o}(f)=
\begin{cases}
\text{Regroup} & L_o(f)=\text{Counterattack},\\
\text{Counterpress} & K(f)=1,\\
\text{High Block} & n_{\mathrm{att}}^{\bar o}(f)\geq 4,\\
\text{Low Press} & n_{1}^{\bar o}(f)\geq 6 \ \text{and}\ P(f)=1,\\
\text{Low Block} & n_{1}^{\bar o}(f)\geq 6 \ \text{and}\ P(f)=0,\\
\text{Mid Press} & n_{2}^{\bar o}(f)\geq 4 \ \text{and}\ P(f)=1,\\
\text{Mid Block} & n_{2}^{\bar o}(f)\geq 4 \ \text{and}\ P(f)=0,\\
\text{Unidentified} & \text{otherwise}.
\end{cases}
\]
This matches the source’s ordered rules: “If the on-ball team is in Counterattack, the team without the ball is in Regroup”; “The phase is Counterpress if tagged in Statsbomb’s event data”; “If the without-the-ball team has at least four players in their attacking third, it is classified as a High Block”; “Else if the without-the-ball team has at least six players in their first third of the field, it is Low Press if the event is under pressure and Low Block otherwise”; “Else if the without-the-ball team has at least four players in their second third of the field, it is Mid Press if the event is under pressure and Mid Block otherwise”; “In all other scenarios, it is labeled as Unidentified” [PAGE 3].

Set-piece operator. The source says set pieces are assigned “for the first five frames” and “After the fifth frame, the possession was classified as a normal open-play scenario” [PAGE 3]. Thus the exact boundary is
\[
q(f)\leq 5 \Rightarrow \text{SetPieceFor/Against},\qquad
q(f)>5 \Rightarrow \text{open-play branch}.
\]
The boundary at \(q=5\) versus \(q=6\) is a hard breakdown point for any claim about set-piece duration.

Unknown-phase operator. Let
\[
U_0 = M \cup U_{\mathrm{nc}},
\]
where \(M\) is the MissingSB set and \(U_{\mathrm{nc}}\) is the non-compliant-rule set. The paper reports
\[
\frac{|M|}{N}\approx 0.105,\qquad
\frac{|U_{\mathrm{nc}}|}{N}\approx 0.05,\qquad
\frac{|U_0|}{N}\approx 0.16,
\]
with all shares dimensionless probabilities in \([0,1]\), or percentage points after multiplication by 100 [PAGE 4]. The gap-fill operator is
\[
G(f)=\{f: t_1<t_f<t_2,\ t_2-t_1\leq 3\,\mathrm{s},\ L(t_1),L(t_2)\in\mathrm{Known}\},
\]
and any in-between MissingSB or unidentified frame is labeled “to one of those known phases” [PAGE 4]. After this operator, the paper reports
\[
\frac{|U_1|}{N}\approx 0.12.
\]
This is a reduction, not an elimination: 12% remains unknown after gap-fill [PAGE 4].

Aggregation and distance operator. For a phase \(p\), define the time share
\[
\pi_p=\frac{T_p}{T_{\mathrm{total}}}\in[0,1],
\]
where \(T_p\) and \(T_{\mathrm{total}}\) are measured in seconds. The paper reports percentages of match time by phase and sub-phase [PAGE 6]. For the ad-hoc query on match deviation, the paper states: “we can use the Euclidean distance to calculate the difference between the average of phase percentages over the season and each individual match” [PAGE 9]. Thus
\[
d(m,\bar{\pi})=\sqrt{\sum_{p\in P}\left(\pi_{m,p}-\bar{\pi}_p\right)^2},
\]
with units of percentage points or dimensionless share units depending on whether \(\pi\) is stored as a fraction or percentage. This equation is source-supported only as the stated Euclidean distance, not as a novel metric.

Assumptions. The equations assume: (A1) event timestamps are a valid frame index; (A2) freeze-frame visible-player counts are sufficient proxies for the rule thresholds; (A3) pressure and counterpress tags are reliable; (A4) pitch thirds are well-defined; (A5) the set-piece window is exactly five frames; (A6) gap-fill endpoints are known phases within 3 s. Each assumption has a breakdown regime.

Exact singularity and breakdown regimes.
1. \(N=0\): phase shares \(\pi_p\) are undefined; any percentage claim is invalid.
2. \(\Delta t_{ij}=0\): multiple events share a timestamp. The paper handles this by retaining “only one event per timestamp by establishing a priority list and keeping the highest-priority event” [PAGE 2]. Without deduplication, two phase labels can be assigned to the same instant.
3. \(V(f)=\varnothing\): freeze-frame missing; the frame is MissingSB, not a valid phase observation [PAGE 3, footnote 4; PAGE 4].
4. \(n_z^{a}(f)\) exactly equals a threshold: the rule uses “at least”, so equality triggers the branch [PAGE 3]. If visible-player occlusion makes \(n_z\) smaller than the true count, the branch can be wrong.
5. Ball exactly on a third boundary: the paper does not specify boundary inclusion; the label is ambiguous at \(b(f)\) exactly on a first/second or second/third boundary.
6. \(q(f)=5\) versus \(q(f)=6\): set-piece versus open-play boundary; this is exact and non-negotiable in the source [PAGE 3].
7. \(t_2-t_1=3\) s versus \(t_2-t_1>3\) s: only the former is admissible for gap-fill [PAGE 4]. At exactly 3 s the rule applies; above 3 s the unknown remains.
8. Endpoint ambiguity in gap-fill: if \(L(t_1)\neq L(t_2)\), the instruction “to one of those known phases” does not specify which one [PAGE 4]. This is an underspecified, set-valued regime.
9. Denominator mismatch: comparing this paper’s match-duration shares with FIFA’s in-possession/out-of-possession-relative shares is invalid; the paper itself says the findings are “non-comparable” [PAGE 4, footnote 7].
10. Information units: the source defines no entropy or mutual-information quantity; any “bits” claim is external and must be separately derived, not attributed to this paper.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s taxonomy is retroactively assembled from several coaching and analytics lineages. At the coarsest level, it inherits the offense/defense split: the authors note that “one can look only at offense and defense” [PAGE 1]. It then inherits the three-phase coaching tradition: “The next level is to expand it to 1) attack 2) defense and 3) preparation (transition)” [PAGE 1]. It also inherits the transition split: “The transition phase can be divided into attack to defense and vice versa” [PAGE 1]. Set pieces enter as a separate phase because “set-pieces are considered a separate phase by some coaches because a significant number of goals are scored from them” [PAGE 1]. The sub-phase vocabulary is equally genealogical: the major difference among prior approaches is “how the in and out-of-possession phases are segmented into smaller sub-phases based on references such as (attack, midfield, and defense) lines and block heights” or “pitch tactical zones” such as “the first, middle, and last third” [PAGE 1]. The paper’s Buildup, Progression, Finishing, High Block, Mid Block, Low Block, and pressing categories are therefore not invented from nothing; they are a computational formalization of coaching-language categories.

The analytics lineage runs from event-only sequence definitions to synchronized tracking. The paper cites Harkins 2017 for sequences, Decroos et al. 2017 for pauses and possession switches, Worville 2019 and STATS LLC 2020 for field-location phase breaks, and Seidenschwarz et al. 2020 for similar methods [PAGE 2]. It explicitly says “Event data alone is insufficient for accurate match phase identification” and contrasts its explainable approach with black-box CNN or graph approaches [PAGE 2]. That lineage matters because the paper’s novelty is not the idea of phases; it is the rule-based, frame-level operationalization for StatsBomb 360.

Multi-week traps in this genealogy are real. First, season-long aggregation can hide nonstationary missingness: if MissingSB is higher in certain stadiums, broadcast styles, or competitions, the 12% residual unknown is not randomly distributed. Second, phase definitions can drift across weeks if analysts tune thresholds or set-piece windows; the paper fixes five frames and 3 seconds, so any mid-season change breaks comparability. Third, opponent adaptation over weeks can change phase shares without changing the underlying rules; a low block share may fall because opponents stop attacking in the same way, not because the team changed its principles. Fourth, the FIFA comparison is a trap because the denominator differs: “FIFA reported the percentage of each sub-phase not over the entire match duration, but rather in relation to the time spent in and out of possession phases” [PAGE 4, footnote 7]. A multi-week report that mixes these denominators will produce false trends. Fifth, the paper’s scoreline analysis shows team-specific direction: “FC Winterthur adopts a low block when winning, while Young Boys’ percentage of Low Block remains nearly unchanged in both scenarios. In contrast, Lugano and Sion increase their percentage of Buildup when winning!” [PAGE 8]. A generic “winning teams park the bus” prior is therefore historically and empirically unsafe across teams.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive layer is about coach and analyst beliefs over phase behavior. The source gives a concrete counterexample to a simple opponent model. Figure 4 is described as showing “Low Block and Build-up in losing vs winning scenarios” [PAGE 7], and the text says: “FC Winterthur adopts a low block when winning, while Young Boys’ percentage of Low Block remains nearly unchanged in both scenarios. In contrast, Lugano and Sion increase their percentage of Buildup when winning!” [PAGE 8]. This is not one universal crisis habit. It is a team-specific habit regression: Winterthur’s winning-state behavior regresses toward low block; Young Boys’ does not; Lugano and Sion move toward buildup. Any recursive model that assumes “opponent will always drop low when leading” is vetoed by the source’s own multi-team comparison.

The counter-trap layer is encoded in the rules. If the on-ball team is in Counterattack, the without-ball team is in Regroup [PAGE 3]. If the without-ball team has a counterpress tag, it is in Counterpress [PAGE 3]. On-ball, if the team is under Counterpress, it is in Consolidate [PAGE 3]. These three labels form a feedback grammar: a counterattack pushes the opponent into Regroup; a counterpress response pushes the on-ball team into Consolidate. A “counter-trap” hypothesis would say that a team can intentionally invite an opponent’s counterpress so that its own Consolidate shape becomes the platform for a second action. The paper does not test intent, so this remains a hypothesis, not a source finding. What the paper does establish is the label dependency: Counterattack and Counterpress are not free-floating descriptors; they trigger the opponent’s phase branch.

The clock layer is event-time, not narrative-time. Set pieces are cut at the first five frames; after the fifth frame the possession is “classified as a normal open-play scenario” [PAGE 3]. Unknown phases are gap-filled only when the interval is “3 seconds or less” [PAGE 4]. Thus the clock has two hard discontinuities: \(q=5\) versus \(q=6\), and \(\Delta t=3\) s versus \(\Delta t>3\) s. A recursive theory of mind that ignores these clocks will misread set-piece persistence and will treat interpolated frames as directly observed. The correct recursive stance is: the analyst models the coach’s phase principles; the coach models the opponent’s phase tendencies; both are constrained by the source’s frame-level clock and visibility limits. Any claim about “crisis habit” must therefore be team-conditioned, scoreline-conditioned, and clock-conditioned, not universal.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Source-domain veto theorem. Let \(D\) be the set of variables the source actually uses. From the paper, \(D\) includes event attributes, freeze-frame visible-player counts and locations, ball third, pressure, counterpress, set-piece play pattern, and frame index [PAGE 2; PAGE 3]. The source does not include weather, temperature, wind, rain, surface friction, GPS load, force-plate data, muscle fatigue, gait, body orientation, or ground reaction force. Therefore any claim \(C\) whose truth depends on a variable \(v\notin D\) is not adjudicable under this framework. This is not a stylistic preference; it is a domain proof. The phase label is a function of the rule variables listed above. If \(v\) is absent from the function’s domain, no change in \(v\) can be identified from the label alone.

Physical veto. A claim such as “Team A entered Low Block because of fatigue” is vetoed. The source can compute Low Block from “at least six players in their first third of the field” and pressure status [PAGE 3]. It cannot measure fatigue. The same applies to “Regroup was caused by physical load” or “Counterpress intensity dropped because of accumulated sprint distance.” Those are cross-layer causal claims requiring variables outside \(D\). The paper’s own applications are phase shares, opposition analysis, post-match reports, and ad-hoc queries [PAGE 6; PAGE 11], not load diagnosis.

Biomechanical veto. A claim such as “the defender’s body orientation caused the Counterpress label” is vetoed unless the orientation is part of the visible freeze-frame and the claim is only about visible position, not force or joint load. The paper uses “the number of visible players and their locations from TV footage” [PAGE 11]. That is a positional proxy, not a biomechanical sensor. The exact occlusion failure is: let \(N_{\mathrm{true}}\) be the true number of players in a third and \(N_{\mathrm{vis}}\) the visible count. If
\[
N_{\mathrm{vis}}<\theta\leq N_{\mathrm{true}},
\]
where \(\theta\in\{4,6\}\) is the rule threshold, the rule assigns a lower-block or lower-press branch even though the true count meets the higher branch [PAGE 3]. This is a formal veto condition for any claim that a visible count proves the true defensive structure. The paper itself notes missing freeze-frames and uses MissingSB [PAGE 3, footnote 4; PAGE 4], so visibility is an explicit limitation.

Weather veto. A claim such as “rain caused the low block” is vetoed because no weather variable appears in the data description [PAGE 2] or the rule set [PAGE 3]. The paper’s comparison to FIFA is also not a weather-controlled experiment: FIFA used “in-stadium full optical tracking data” while the paper used StatsBomb 360 [PAGE 4]. That difference is a data-generating-process difference, not a weather measurement. Therefore weather, surface, and atmospheric claims cannot be adjudicated by this source.

Adjudication rule. A phase claim is admissible only if it can be rewritten as a statement over \(D\): ball third, visible player counts by third, pressure, counterpress, set-piece frame index, and timestamp gap. If the claim needs an unobserved physical, biomechanical, or weather variable, the correct verdict is “veto, not falsified.” The source can support “the label was Low Block under the visible-count rule”; it cannot support “the team was physically forced into Low Block by fatigue or weather.”
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
RLVR-style verifiable reward convention: reward \(=1\) only if the claim is entailed by the source’s stated variables, denominators, and frame indices; reward \(=0\) if the claim violates a source boundary.

Scenario 1: Denominator-mismatch veto. Counterfactual claim: “Our StatsBomb phase share for Buildup is directly comparable to FIFA’s post-match Buildup share.” Veto condition: the claim compares a match-duration share with a share computed relative to in-possession or out-of-possession time. Source proof: “FIFA reported the percentage of each sub-phase not over the entire match duration, but rather in relation to the time spent in and out of possession phases. This difference in reporting makes their findings non-comparable with ours” [PAGE 4, footnote 7]. Prediction: any ranking or equality claim that mixes these denominators receives reward \(=0\); a corrected claim must restate both denominators explicitly. Verification: parse the denominator of each reported percentage before comparison.

Scenario 2: Gap-fill-as-observation veto. Counterfactual claim: “This frame was directly observed as Low Block.” Veto condition: the frame was MissingSB or Unidentified before gap-fill, and its label was assigned only because two known phases were within 3 seconds. Source proof: “If the time between two known consecutive phases is 3 seconds or less, label any in-between unidentified phase or missingSB frame to one of those known phases” [PAGE 4]. Prediction: if the pre-gap-fill status is MissingSB or Unidentified, the direct-observation claim receives reward \(=0\); the admissible claim is “gap-filled to one of the adjacent known phases.” Verification: check the pre-gap-fill label and \(\Delta t\) against the 3-second boundary. A second sub-veto applies if the two known endpoints have different labels, because the source says “to one of those known phases” without specifying which [PAGE 4].

Scenario 3: Set-piece-frame-cutoff veto. Counterfactual claim: “The sixth frame after a corner is still Set Piece For.” Veto condition: the frame index since the set piece is greater than five. Source proof: set pieces are defined “for the first five frames with a “play_pattern” of “From Corner”, “From Free Kick”, or “From Thrown in””; “After the fifth frame, the possession was classified as a normal open-play scenario” [PAGE 3]. Prediction: any claim that labels \(q=6\) as set piece receives reward \(=0\); the admissible label is the open-play branch computed from the normal rules. Verification: count frames from the set-piece start and check \(q\leq 5\) versus \(q>5\). A related sub-veto applies to timestamp collisions: if two events share a timestamp, the source retains only the highest-priority event [PAGE 2], so a claim that both events independently define phases at that instant receives reward \(=0\).
</RLVR_COUNTERFACTUAL_VETOES>