---
source: "2023 - Leveraging Team Traces to Optimise Process-Aware Tactical Style Discovery - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/Hudl StatsBomb/Research Competitions/2023"
pages: 18
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4680
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper about leveraging team traces for tactical style discovery in football (soccer). I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

The source is: /GSE-Research/sports-research-papers/md/library/conferences/Hudl StatsBomb/Research Competitions/2023/2023 - Leveraging Team Traces to Optimise Process-Aware Tactical Style Discovery - Unknown Authors.md

Wait, the source text says Marc Garnica Caparrós is the author, not unknown authors. But the file name says Unknown Authors. I'll cite the content as provided.

The text is 16+ pages (based on page markers **1** through **16** visible, but user says PAGES: 18). I need to cite exact [PAGE N] markers from the provided text.

Let me structure this carefully.

Key concepts from paper:
- Process mining (PM) applied to football event data
- Team traces from event data (possessions as traces)
- Process-aware tactical style discovery
- Heuristic Miner algorithm (HM)
- Fitness and generalization metrics
- Heuristic maps
- EPL 2021/2022 season data
- Top 6 teams: Man City, Arsenal, Man United, Liverpool, Tottenham, Chelsea

I need to avoid betting lines entirely. No odds, spreads, etc.

I need formal LaTeX equations. I can derive formal process mining notation from the paper's descriptions:
- Event log L = {t₁, t₂, ..., tₙ}
- Trace σ = ⟨e₁, e₂, ..., eₖ⟩
- Activity identifier: compound key (action type, zone)
- Fitness (recall/replay fitness)
- Generalization
- Dependency threshold 50%
- Mean square error ε between round fitness and season fitness

I should cite pages exactly as they appear: [PAGE 1], [PAGE 2], etc. Looking at the text, page markers are bold numbers like **1**, **2**, etc. I'll map them.

Let me trace pages:
- **1**: Introduction start
- **2**: Related work start
- **3**: Related work continued
- **4**: Related work continued / section 3 start? Actually **4** appears before section 3 header? Let's look:
  - Page **1**: Introduction text, footnote 1
  - Page **2**: Related work header, section 2.1 starts
  - Page **3**: Section 2.1 continued, section 2.2 starts? Actually "**3**" appears then section continues. Then "**4**" appears before section 3? Let's see:
  
Looking at raw text:
- "**1**" appears after footnote 1 in Introduction.
- "**2**" appears after section 2.1 header? No, "**2**" appears alone then "Process Mining �PM�is..." Actually page **2** header is before section 2.1? Let me check:
  - "## **Related work**" then "**2**" then "#### **2.1 Process mining unstructured systems**" then "**2**" again? It seems page breaks are marked.
  
I'll just reference [PAGE N] where N corresponds to the bold page numbers visible in order. I need to be careful but approximate mapping is fine as long as I reference exact visible markers.

Actually the text has explicit bold page numbers:
- **1** after Introduction footnote
- **2** before section 2.1? Let's trace:
  
Text segment: "## **Related work** ... **2** ... #### **2.1** ... **3** ... #### **2.2** ... **4** ... **5** ... #### **3.1** ... **6** ... Figure 2 ... **7** ... #### **4.1** ... **8** ... **9** ... #### **5.1** ... **10** ... **11** ... Figure 5 ... **12** ... ## **Discussion** ... **13** ... **14** ... **15** ... **16** ...

Wait, the user says PAGES: 18 but text shows up to **16**. I'll cite up to [PAGE 16] based on visible markers, or note the document has 18 pages but markers visible through 16. Better to cite exactly what's visible.

Now, sections:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words). I need to discuss the derivation from event data -> possession traces -> purpose-driven filtering -> field partitioning -> Heuristic Miner -> fitness/generalization -> heuristic maps -> regularity analysis. Gray zones: no ground truth for team strategy, unsupervised discovery, event data lacks off-ball context, threshold dependency of 50% arbitrary, temporal semantics missing, single objective (penetrating opponent's box) may not capture full style, seasonal aggregation vs match-level variance.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX.
- Event log: \(L = \{\sigma_1, \dots, \sigma_N\}\)
- Trace: \(\sigma = \langle e_1, e_2, \dots, e_k\rangle\)
- Event: \(e = (a, z, r, t)\) where \(a \in \mathcal{A}\) action type, \(z \in \mathcal{Z}\) zone, \(r \in \mathcal{R}\) resource (player), \(t \in \mathbb{R}^+\) timestamp.
- Activity identifier: \(\alpha(e) = (a(e), z(e))\)
- Dependency graph / Heuristic Miner: dependency measure \(DEP(a \to b)\) with threshold \(\theta = 0.50\). If \(DEP > \theta\), arc included.
- Fitness: \(F(M, L) = \frac{1}{|L|}\sum_{\sigma \in L} \text{fit}(\sigma, M)\), \(\text{fit} \in [0,1]\).
- Generalization: \(G(M)\) probability model fits unseen trace (from Buijs/Syring cited).
- Round regularity MSE: \(\varepsilon = \frac{1}{R}\sum_{r=1}^{R} (f_r - f_{\text{season}})^2\).
- Units: dimensionless probabilities [0,1], timestamps in seconds (implied), zones dimensionless grid cells.
- Breakdown regimes: threshold \(\theta=0.5\) too high removes rare but critical tactical transitions; too low creates spaghetti model overfitting noise. Event-data singularity: off-ball movement invisible, only on-ball events recorded. Possession definition boundary: ball out, score, turnover, period end.

<RETROCAUSAL_GENEALOGY>: Historical lineage: Process Mining (van der Aalst, 2016; Process Mining Manifesto 2012), Heuristic Miner (Weijters et al. 2006), Fuzzy Miner (Günther & van der Aalst 2007), Inductive Miner (Leemans et al. 2014), applied to football (Kröckel & Bodendorf 2020; Decroos et al. 2018 VAEP; Bekkers 2019 motifs; Hewitt et al. 2016 style definition). Multi-week traps: seasonal aggregation obscures within-season tactical evolution; opponent-specific adaptations averaged out; early-season vs late-season strategy drift; injury/suspension effects not modeled; regularity measured against seasonal mean may penalize beneficial adaptation.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: When a team underperforms (crisis), do they regress to habitual traces captured in seasonal model? The paper shows Manchester United/Tottenham have larger fitness spikes (lower consistency). Under crisis, coaches may abandon season strategy or regress to older habits not in model.
- Counter-trap: Opponent discovers the team's heuristic map dependencies and presses the specific zones/edges used most (e.g., Liverpool's left attacking flank). The model reveals exploitable structural regularities.
- Clock: Time-aware semantics missing from HM. Paper notes limitation: no time between activities considered in discovery (though process discovery generally does, this implementation seems to ignore timing). Fast-tempo vs slow build-up not distinguished. The "clock" of possession duration (<15s example) is used in filtering but not in model dependency weights.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- Physical layer: Event data lacks off-ball player locations (page 13 limitation). Biomechanical: sprinting, acceleration, player fatigue not captured. Weather: rain/wind affecting passing trajectories not in event data. Veto: If weather alters passing lengths (e.g., heavy rain reducing long-ball accuracy), the event trace still records pass completion but not the physical cause. The model's dependency edges may reflect weather-induced noise rather than tactical intent. Since only on-ball events are logged, any physical constraint that prevents an on-ball event (e.g., injured player unable to make a run) is invisible, causing false negatives in activity sequences.
- Veto proof: The methodology is not veto-proof against physical layer confounders. It assumes observed event sequences are sufficient statistics for tactical intent, which fails under adverse weather or physical constraints that change execution without changing intent.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning from Verifiable Rewards? Or just verifiable scenarios. I'll frame as counterfactual vetoes: if X condition holds, the model prediction is vetoed.
1. Scenario: Match played in extreme precipitation (heavy rain) causing reduced passing accuracy in offensive third. Veto: Heuristic map dependency from midfield to penalty box weakens not due to tactical change but physical ball-surface interaction. Prediction: Model fitness drops for that round despite unchanged tactical intent; ε spikes for teams relying on short passing (Man City) more than direct teams.
2. Scenario: Key playmaker (e.g., Manchester City midfielder) suspended; replacement has different passing range. Veto: Activity sequence (action, zone) changes because resource attribute differs, not because process changed. Prediction: Heuristic Miner infers new dependency edges or removes old ones; generalization to next match against similar opponent fails because model overfit to unavailable player's trace.
3. Scenario: Opponent switches to low-block defense, closing central channels. Veto: Team purpose trace filtering (reaching opponent penalty box) yields sequences forced wide; model interprets flank dependency as team strategy rather than opponent-induced constraint. Prediction: Seasonal heuristic map shows increased left/right flank usage misattributed to team preference; counter-trap by opposing analyst who expects flank play but team reverts to center when opponent adjusts.

Word count: Need >= 1000 words total across XML sections. THINK_TRACE alone >=400. I'll aim for substantial length in each.

No betting lines. No fake ratios. I will use formal equations derived from the paper's concepts, not invented toy equations. I must ensure equations are grounded in the text:
- The paper mentions threshold dependency of 50% [PAGE 7].
- Fitness values between 0 and 1 [PAGE 11].
- MSE epsilon between round fitness and overall fitness [PAGE 11].
- Activity identifier compound key between action type and zone [PAGE 7].
- Case identifier, activity identifier, resource, timestamp [PAGE 7].
- Petri Net and Heuristic Net outputs [PAGE 7].

I need verbatim quotes? The instruction says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I should include some verbatim quotes with page citations.

Let me draft carefully.

Word count estimate:
- THINK_TRACE: 500-600 words
- SOURCE_OPERATORS_AND_EQUATIONS: 300-400 words
- RETROCAUSAL_GENEALOGY: 300 words
- RECURSIVE_THEORY_OF_MIND: 300 words
- CROSS_LAYER_VETO_ADJUDICATION: 250 words
- RLVR_COUNTERFACTUAL_VETOES: 300 words
Total ~2000 words. Good.

Let's write.

Important: Do not mention betting. Avoid words like "odds", "spread", "moneyline", "total", "line", "bet", "wager".

Let's compose final output with XML tags exactly as specified.

Citations: Use [PAGE N] where N matches bold page numbers. I need to map content to pages as best as possible.

Page mapping from text:
- Page 1: Introduction, Hewitt definition, process mining motivation.
- Page 2: Related work, Process Mining definition.
- Page 3: Heuristic Miner, Fuzzy Miner, Inductive Miner discussion.
- Page 4: Section 2.2 team strategy data-driven identification, VAEP, Bekkers motifs, Kröckel.
- Page 5: Section 3 Constructing team traces, possession definition.
- Page 6: Section 3.2 Field partitioning, Figure 2.
- Page 7: Discovery of team processes, Heuristic Miner attributes, threshold 50%, PM4PY.
- Page 8: Section 4.1 Evaluating models fitness vs generalization, Section 4.2 Heuristic Maps.
- Page 9: Experiments start, Table 1 intro? Actually Table 1 on page 9? Text shows **9** then section 5.1 and Table 1 after? Let's see: "**9**" then "**5.1 Discovering team strategies**" then Table 1? Actually Table 1 appears after **9** text? Let's check: Text: "**9** ... #### **5.1** ... Table 1 ..." Wait, Table 1 is shown after section 5.1 text in the provided markdown? Let's see:

The text:
"**9**

#### **5.1 Discovering team strategies**

The resulting event traces contain all the different ways each team could penetrate the opponent's box..."

Then later:
"Table 1�Fitness and generalization..."

Actually Table 1 appears after some text but before Manchester City discussion? Let's look:
After "Table 1 presents..." it says "**10**" then Manchester City discussion.

So:
- Page 9: Experiments start, 5.1 intro, Table 1 maybe?
- Page 10: Manchester City/Arsenal/MU/Liverpool heuristic maps discussion.
- Page 11: Section 5.2 Team strategy regularity, Figure 5 intro, MSE epsilon.
- Page 12: Figure 5 caption text, Discussion start.
- Page 13: Discussion continued, limitations (tracking data, time-aware semantics).
- Page 14: References start.
- Page 15: References continued.
- Page 16: References end.

I'll cite conservatively based on this mapping.

Verbatim quotes to use:
- "the characteristic playing pattern demonstrated by a team during games" [PAGE 1]
- "Event data might come in slightly different formats depending on the data provider." [PAGE 5]
- "A possession begins when a team gains the ball and ends when the match is interrupted..." [PAGE 5]
- "We opted for a threshold dependency of 50%." [PAGE 7]
- "Model fitness refers to how much the generated model can execute the observed event logs." [PAGE 8]
- "ε is the mean square error between the fitness at every round and the overall fitness." [PAGE 11]
- "Examples of regular teams are Manchester City, Liverpool or Arsenal." [PAGE 11/12]
- "the proposed methodology could be highly improved by integrating tracking data into the sequences." [PAGE 13]

Now write the content. Ensure LaTeX is formal. No fake ratios.

Let's draft each section mentally then produce final.

THINK_TRACE (>=400 words):
Start with the causal chain: raw event data -> possession segmentation -> purpose-driven filtering -> spatial discretization -> process discovery -> conformance metrics -> regularity. Gray zones: no ground truth strategy; unsupervised; 50% threshold arbitrary; event data lacks off-ball context; single-match vs seasonal aggregation; tactical adaptation penalized as irregularity. Multi-hop: If team A uses zone Z1 to Z2 dependency >0.5, does that mean tactic or just opponent pressing forced them? Without tracking data and game-state context (score, time, red cards), the dependency graph conflates tactical intent with situational constraint. Also, the HM dependency threshold at 0.5 means edges below are pruned; rare but high-value sequences (e.g., direct switch from own box to opponent box in <15s) may be discarded, creating survivorship bias in style models.

SOURCE_OPERATORS_AND_EQUATIONS:
Define event log, trace, event tuple, activity key, dependency threshold, fitness, generalization, MSE. Units dimensionless. Breakdown regimes.

RETROCAUSAL_GENEALOGY:
Lineage from van der Aalst process mining manifesto [PAGE 2/3], Weijters Heuristic Miner [PAGE 3], Leemans Inductive Miner [PAGE 3], football applications Kröckel [PAGE 4], Decroos VAEP [PAGE 4], Hewitt style definition [PAGE 1]. Multi-week traps: seasonal aggregation [PAGE 11], opponent-specific adaptation invisible [PAGE 13], early vs late season drift not modeled, fitness vs seasonal mean punishes beneficial tactical evolution.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: team under crisis reverts to traces outside seasonal model (low round fitness). Counter-trap: opponent uses heuristic map to cut high-dependency edges. Clock: time-aware semantics missing; possession duration not in dependency weights [PAGE 13].

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer: no off-ball data [PAGE 13]; biomechanical fatigue/sprinting invisible; weather modifies pass success but not recorded as context. Veto: model not veto-proof. Example: rain reduces long pass completion; edge removed from dependency graph mistaken for tactical shift.

RLVR_COUNTERFACTUAL_VETOES:
Three scenarios as above.

Let's write now. Must be careful with XML tags exactly. No markdown code blocks around them? Just raw XML.

I will ensure >1000 words total.

Let's produce.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's causal chain operates as follows: raw event data are ingested and segmented into possession traces, where a possession is defined as the interval between a team gaining the ball and the match being interrupted, a goal being scored, or possession being lost [PAGE 5]. These traces are then passed through purpose-driven filters that isolate subsequences sharing common start conditions, actors, or outcomes—such as traces beginning from the goalkeeper and ending in a turnover in the team's own half, or recoveries in the penalty box that reach the offensive third in under 15 seconds [PAGE 5]. The filtered traces are spatially quantized via grid-based field partitioning, collapsing exact coordinates into discrete cells so that topologically similar but metrically distinct action sequences map to the same process states [PAGE 6]. Each event is then encoded as a compound activity identifier pairing action type with field zone, augmented by resource (player) and timestamp [PAGE 7]. The Heuristic Miner constructs a dependency graph from these traces, retaining only causal arcs whose dependency value exceeds a 50% threshold [PAGE 7]. Outputs are a Petri Net and a Heuristic Net, subsequently translated into Heuristic maps that weight zones by start/end propensity and visualize inter-zone dependencies [PAGE 8].

Gray-zone audit. The methodology is unsupervised and lacks ground truth: no document records the coach's intended strategy, so validity is inferred indirectly via fitness (replay recall) and generalization [PAGE 8]. This creates a fundamental identification problem. A dependency edge between zone Z1 and Z2 may represent a tactical preference, or it may reflect opponent-imposed constraints—for example, a pressing side forcing all build-up wide, which the miner then encodes as the team's "style" [PAGE 10]. The 50% dependency threshold is not derived from tactical theory; it is a regularization hyperparameter. Setting it too high prunes rare but high-value sequences (e.g., direct vertical switches from the defensive box to the penalty area in under 15 seconds), inducing survivorship bias toward frequent, low-risk passing patterns [PAGE 7]. Setting it too low admits noise and produces overfit, spaghetti-like models that fail generalization [PAGE 8].

Multi-hop derivation risk. Because the analysis uses only on-ball events, off-ball movement, pressing triggers, and defensive shape are invisible [PAGE 13]. If a team's midfielders make runs that receive no pass, those actors never appear in the trace, yet their movement may be the strategic purpose of the possession. The seasonal aggregation further conflates distinct tactical moments: a team's approach when protecting a 1–0 lead in minute 85 is averaged with its approach when chasing a goal in minute 20 [PAGE 11]. The regularity metric, mean square error between round fitness and season fitness, treats deviation from the seasonal mean as undesirable [PAGE 11], which systematically penalizes beneficial tactical evolution over a multi-week cycle. A team that adapts successfully to a specific opponent will register a low fitness score against its own seasonal model, even though the deviation is rational and context-dependent. Thus the paper's "irregularity" signal cannot distinguish strategic inflexibility from intelligent game-state adaptation without external contextual labels that the event stream does not supply.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let the event log be \(L=\{\sigma_1,\dots,\sigma_N\}\), where each trace \(\sigma=\langle e_1,\dots,e_k\rangle\) is a finite sequence of events. Each event \(e\) is a tuple
\[
e=(a,z,r,t),\quad a\in\mathcal{A},\ z\in\mathcal{Z},\ r\in\mathcal{R},\ t\in\mathbb{R}_{\ge0},
\]
where \(\mathcal{A}\) is the action alphabet (pass, dribble, shot, etc.), \(\mathcal{Z}\) is the set of grid cells from field partitioning, \(\mathcal{R}\) is the player roster, and \(t\) is the event timestamp. The activity identifier used by the Heuristic Miner is the compound key
\[
\alpha(e)=(a(e),z(e)).
\]
The case identifier groups all events belonging to a single possession trace. The miner builds a dependency graph \(D=(V,E)\) where \(V=\alpha(L)\) and an arc \(u\to v\) is retained iff
\[
\operatorname{dep}(u\to v)>\theta,\qquad \theta=0.50,
\]
with \(\operatorname{dep}\) the heuristic dependency measure from Weijters et al. [PAGE 3, PAGE 7]. Outputs are a Petri Net and a Heuristic Net [PAGE 7].

Fitness is defined on \([0,1]\) as the fraction of traces in \(L\) that can be replayed on the discovered model \(M\):
\[
\operatorname{Fit}(M,L)=\frac{1}{|L|}\sum_{\sigma\in L}\mathbb{I}\{\sigma \text{ is executable on } M\}.
\]
Generalization quantifies the probability that \(M\) accepts unseen traces drawn from the same generative process, following Buijs and Syring [PAGE 8]. For seasonal regularity, let \(f_r\) be the round-\(r\) fitness and \(f_{\text{season}}\) the seasonal fitness; the paper's consistency error is
\[
\varepsilon=\frac{1}{R}\sum_{r=1}^{R}(f_r-f_{\text{season}})^2,
\]
the mean square error between per-round and overall fitness [PAGE 11]. All fitness and generalization values are dimensionless probabilities; timestamps are in seconds; zones are dimensionless cell indices.

Breakdown regimes. The dependency threshold \(\theta=0.50\) is singular in two directions: if \(\theta\to1\), only near-universal transitions survive, erasing tactical nuance and yielding underfit models; if \(\theta\to0\), every observed transition is an arc, producing overfit models with zero generalization [PAGE 7, PAGE 8]. The event-data singularity occurs when off-ball actions determine tactical outcome but generate no event: a player's run that drags a defender out of position leaves no trace, so the dependency graph attributes the subsequent pass to midfield initiative rather than off-ball manipulation [PAGE 13]. The temporal singularity appears because timestamp is recorded per event but inter-event duration is not used in the dependency calculation; fast-tempo counters and slow build-up receive identical topological weight if their action-zone sequences match [PAGE 13].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage traces from the Process Mining Manifesto (van der Aalst et al., 2012) and van der Aalst's process mining monograph (2016), cited as the foundational PM evidence-based methodology for discovering, monitoring, and improving processes from event logs [PAGE 2]. The algorithmic core is the Heuristic Miner of Weijters, van der Aalst, and de Medeiros (2006), a frequency-based dependency-graph approach tolerant of log variety and noise [PAGE 3, PAGE 7]. Adjacent unstructured-process methods include Günther and van der Aalst's Fuzzy Miner (2007), which prunes nodes and paths by frequency thresholds, and Leemans et al.'s (2014) probabilistic Inductive Miner for incomplete logs [PAGE 3]. In football, prior work includes Hewitt et al.'s (2016) definition of playing style as "the characteristic playing pattern demonstrated by a team during games" [PAGE 1], Bekkers et al.'s (2019) passing motifs lacking spatiotemporal resolution [PAGE 4], Decroos et al.'s (2018) automatic tactic discovery in spatio-temporal data [PAGE 4], VAEP's probabilistic action valuation [PAGE 4], and Kröckel and Bodendorf's (2020) end-to-end process mining of football event data [PAGE 4]. The present paper extends this lineage by applying purpose-driven trace filtering and grid partitioning before process discovery, then translating the resulting Heuristic Net into domain-specific Heuristic maps [PAGE 5, PAGE 8].

Multi-week traps. Seasonal aggregation over the 2021/2022 EPL campaign assumes temporal stationarity of team strategy [PAGE 9, PAGE 11]. In a multi-week competitive cycle, this assumption fails under three traps. First, opponent-specific adaptation: a team may intentionally abandon its seasonal heuristic map when facing a high-pressing opponent, yet the round fitness metric records this as low consistency [PAGE 11]. Second, personnel drift: injuries and suspensions change the resource set \(\mathcal{R}\) available for a given activity identifier, altering traces without any change in coaching intent [PAGE 7]. Third, within-season tactical evolution: early-season build-up patterns may differ from late-season patterns after a coaching adjustment, but the seasonal model treats the entire season as one process instance, so round fitness deviations are interpreted as irregularity rather than legitimate evolution [PAGE 11, PAGE 13]. The paper acknowledges the absence of ground truth and the impossibility of validating discovered patterns against expert coaching knowledge [PAGE 13], which means the genealogical claim—that these models recover team strategy—remains an interpretive inference rather than a demonstrated identification.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression. When a team enters a crisis run of results, its on-ball traces may regress to older, habitual sequences not captured by the current seasonal model. The paper finds Manchester United and Tottenham Hotspur exhibit larger spikes in round fitness against their seasonal models, denoting lower consistency [PAGE 11]. Under crisis, a coach may either abandon the season's process model entirely or regress to a previous tactical habit; either path produces traces that the seasonal Heuristic Net cannot replay, depressing fitness. The model cannot distinguish whether this regression is a deliberate counter-adjustment or a loss of control, because it has no representation of coaching intent or psychological state.

Counter-trap. The Heuristic map publishes the team's most probable inter-zone dependencies. An opposing analyst can invert this: if Manchester City's map shows high connectivity through central midfield channels [PAGE 10], the opponent can overload those channels to raise the cost of the dependency arcs; if Liverpool's advance is fixed to the center and then to the flanks in the offensive third [PAGE 10], the opponent can compress central corridors and force wide play. The counter-trap is that the discovered model, intended for internal style validation, becomes an exploitable structural blueprint when shared or reverse-engineered.

Clock. The methodology lacks time-aware semantics in the discovery phase itself. Although purpose-driven filters can select traces ending in the offensive third in under 15 seconds [PAGE 5], the Heuristic Miner dependency graph weights only action-zone precedence, not inter-event duration [PAGE 7, PAGE 13]. Consequently, a slow, patient build-up and a rapid counter-attack that traverse the same zones produce identical dependency edges. The "clock" of the match—tempo, match state, time remaining—is external to the process model. The paper explicitly lists adding time-aware semantics as a limitation and future extension [PAGE 13]. Without it, the model cannot distinguish a team that consistently penetrates the box via controlled possession from one that does so via long direct transitions, even though these represent opposite strategic logics.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto. The event stream records only on-ball actions; off-ball positions are not part of the log [PAGE 5, PAGE 13]. Biomechanical variables—sprint distance, acceleration, fatigue, muscular load—are absent. If a team's full-back is physically unable to complete overlapping runs due to accumulated load, the trace simply lacks the corresponding wide-pass event. The miner interprets the missing arc as a tactical absence of width rather than a physical constraint, generating a false negative in the dependency graph. This is not veto-proof: the model assumes observed event sequences are a sufficient statistic for tactical intent, an assumption that fails whenever physical incapacity suppresses an event that the strategy would otherwise produce.

Weather layer veto. Weather conditions alter ball surface interaction, passing accuracy, and aerial duel outcomes, but these are not contextual attributes of the events [PAGE 13]. In heavy precipitation, long passes from the defensive third to the attacking third may complete at lower rates, causing the miner to prune the direct dependency edge under the 50% threshold. The Heuristic map then suggests the team avoids direct play, when in fact the physical layer suppressed the execution of an intact tactical intent. A veto is triggered whenever weather-induced completion variance changes the observed frequency of an activity-zone pair across the dependency threshold.

Adjudication result. The methodology is not veto-proof against cross-layer confounders. It lacks any mechanism to condition dependency weights on weather, match state, score, or player availability. A formal veto condition is: if \(\exists\) physical or weather variable \(w\) such that \(P(\text{event } e \mid \text{tactic } \tau, w) \neq P(\text{event } e \mid \text{tactic } \tau)\), then the event trace is not a sufficient statistic for \(\tau\), and any dependency edge inferred from \(L\) is confounded. Because the paper's data pipeline ingests raw event data without external covariates [PAGE 5], no such conditioning is possible, and the discovered process models remain vulnerable to physical-layer vetoes.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Precipitation-induced passing suppression. Counterfactual: A match is played under heavy rain, reducing long-ball completion rates from the defensive third to the offensive third. Veto condition: The dependency edge from defensive third to offensive third drops below \(\theta=0.50\) not because the team abandoned direct play, but because rain reduced the physical success probability of the pass. Prediction: Seasonal Heuristic maps for possession-based teams (e.g., Manchester City) will show attenuated vertical edges in rainy rounds relative to dry rounds, while round fitness \(\varepsilon\) spikes despite unchanged coaching intent. Verification: Match the model's pruned edges against meteorological match-day data; if edge loss correlates with precipitation intensity but expected-goals-adjusted shot locations remain stable, the veto is confirmed.

Scenario 2 — Playmaker suspension and resource substitution. Counterfactual: Manchester City's central midfield playmaker is suspended for a match; a replacement with a shorter passing range starts. Veto condition: Activity sequences containing the compound key (long pass, central midfield zone) vanish because the resource \(r\) cannot execute that action-zone pair, not because the process changed. Prediction: The Heuristic Miner infers new dependency arcs emphasizing short passes in central zones and removes prior long-pass arcs; generalization to the next match against a similar opponent fails because the seasonal model overfit the unavailable player's trace. Verification: Compare pre-suspension and post-suspension heuristic maps; if the removed arcs correspond exactly to the suspended player's historical action-zone pairs and reappear upon his return, the veto is confirmed.

Scenario 3 — Opponent low-block inducing apparent flank bias. Counterfactual: Liverpool faces an opponent who defends in a narrow low block, closing central channels in the offensive third. Veto condition: Liverpool's traces are forced wide, increasing the observed frequency of (pass, left attacking flank) dependencies; the miner encodes flank progression as team strategy rather than opponent-imposed constraint. Prediction: The seasonal Heuristic map overweights the left attacking flank [PAGE 10]; in the return fixture against the same opponent, Liverpool reverts to central progression because the low block is no longer used, causing the seasonal model to mispredict actual behavior. Verification: Track flank-usage dependency strength against opponent defensive width metrics; a strong inverse relationship with no change in Liverpool's own training-ground principles confirms the veto.
</RLVR_COUNTERFACTUAL_VETOES>