---
source: "2016 Optimal Defensive Disruption Soccer.md"
folder: "/GSE-Research/sports-research-papers/md/Soccer"
pages: 10
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3972
---

<NATIVE_REASONING>
The user wants me to analyze a specific soccer research paper ("The Pressing Game: Optimal Defensive Disruption in Soccer" by Bojinov and Bornn) following strict formatting requirements:

1. ZERO BETTING LINES - no spreads, totals, moneylines, odds
2. ZERO TOY EQUATIONS - formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes, cite exact [PAGE N] markers and verbatim quotes when source pages provided
3. >= 1,000 WORD DEPTH across exact XML sections:
   - <THINK_TRACE> (>=400 words)
   - <SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES> (3 verifiable RLVR veto scenarios + predictions)

The source text appears to be pages 1-8 of the PDF. I need to cite exact [PAGE N] markers. Let me map out what page each section appears on based on the source text markers:

Looking at the text:
- Page 1: Abstract, Introduction start, Figure 1 caption
- Page 2: Section 2 (Season Average Disruption Surface), Equation (1) mention, GLSR model, INLA fitting, Figure 2 mention
- Page 3: Figure 3, footnotes 1 and 2, Section 3 start
- Page 4: Section 3 continued, Figure 4 mention, Section 3.1 Burnley
- Page 5: Section 3.2 Manchester City, Section 3.3 Sunderland, Section 3.4
- Page 6: Section 4 (The Pochettino Effect), Figure 5 mention, footnote 3
- Page 7: Section 5 Conclusions, Acknowledgements
- Page 8: References

Wait, looking carefully at the page markers in the text:
- "2016 Research Papers Competition Presented by: 1" - Page 1
- "2016 Research Papers Competition Presented by: 2" - Page 2
- "2016 Research Papers Competition Presented by: 3" - Page 3
- "2016 Research Papers Competition Presented by: 4" - Page 4
- "2016 Research Papers Competition Presented by: 5" - Page 5
- "2016 Research Papers Competition Presented by: 6" - Page 6
- "2016 Research Papers Competition Presented by: 7" - Page 7
- "2016 Research Papers Competition Presented by: 8" - Page 8

Equations: The text mentions Equation (1) but the actual LaTeX for Equation (1) seems to be missing/broken in the OCR (there's a "where" but the equation itself appears to be missing or garbled). Similarly for the team-specific models. I need to reconstruct formal LaTeX based on what's described, but note that the exact equation images weren't captured in OCR.

Actually, looking at the source:
- Page 2: "we define the conditional probability of a disruption at location s ... to be" then there's a gap where equation (1) should be, then "where σ(x) = e^x/(1+e^x)." So Equation (1) is:
  P(Y(s) = 1 | X^Atk, X^Def, s) = σ(α + X^Atk_i β^Atk + X^Def_i β^Def + Z(s))
  
  I should reconstruct this formally with assumptions.

- Page 3: Team disruption surface model and offensive control surface model equations are missing in OCR but described textually.

Let me structure the response:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words). Need to discuss:
- The GLSR model structure
- Binary disruption definition (interceptions, tackles, clearances, blocks vs completed passes/touches)
- One-hot encoding for 20 EPL teams
- Matérn GP spatial component
- INLA approximate Bayesian inference
- Empirical Bayes approximation for hyper-parameters
- Gray zones: OCR missing actual equation LaTeX, proxy definition of disruption vs continual control, approximate empirical Bayes assuming similar smoothness/range across teams, flipped pitch coordinate system, single season vs subset analysis limitations, manager effect confounded with roster changes (footnote 3 says Pochettino bought 6 players none became first team regulars, but still possible tactical vs player confounding)

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown. I'll write out Equation (1) and the team-specific extensions formally, cite pages [PAGE 2], [PAGE 3], etc. Include units: probability [0,1], pitch coordinates in meters (likely 105x68 or normalized), Matérn hyperparameters smoothness ν and range ρ (no units specified but distance units).

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps. Discuss spatial statistics lineage (Banerjee et al. [1], Diggle et al. [3], Rasmussen [9]), INLA (Rue et al. [10]), soccer analytics lineage (Sally & Anderson [11]), Prozone data, EPL 2012-2015. Multi-week traps: small sample within-season subsets, manager tenure effects, roster churn confounding tactical shifts, home/away covariate omission (mentioned in conclusions as future work).

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. Discuss how teams regress to crisis habits (Burnley low control, Sunderland low disruption), counter-traps (Stoke pressing Man City high control surface), managerial adaptation clock (Pochettino effect persistence across Southampton/Spurs, Hughes at Stoke).

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Discuss physical pitch dimensions, biomechanical limits of pressing (player fatigue not modeled), weather not in model (home/away suggested as extension), red cards, substitutions not modeled. The model assumes stationarity within season.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some verification framework. I'll interpret as verifiable counterfactual veto scenarios where the model's prediction would be vetoed by physical/tactical constraints. Example:
  1. If Burnley attempts high press in final third despite low control surface → veto due to possession retention inability → prediction: turnover in dangerous area, shot against.
  2. If Sunderland attempts to build from back against high pressing opponent → veto due to below-average disruption surface in own zone → prediction: loss of possession in defensive third.
  3. If Man City sits deep against low-block opponent → veto due to passive defensive strategy and high final-third control → prediction: opponent counters into space behind high defensive line? Actually Man City pressed passively, so if they try to press high it's out of character → prediction: disruption surface drops, possession lost in midfield.

Need to ensure >= 1000 words total across all sections. Let me draft carefully.

Also must avoid any betting lines. No mentions of odds, spreads, etc.

Let me write out the formal equations:

Page 2 Equation (1):
Let Y(s) ∈ {0,1} be binary disruption indicator at spatial location s ∈ S ⊂ ℝ² (pitch coordinates, flipped so attacking team shoots left-to-right).
P(Y(s)=1 | X^Atk_i, X^Def_i, s) = σ(α + (X^Atk_i)^T β^Atk + (X^Def_i)^T β^Def + Z(s))
where σ(x) = e^x/(1+e^x), logistic link.
X^Atk_i ∈ {0,1}²⁰, X^Def_i ∈ {0,1}²⁰ one-hot encoded for EPL teams.
Z(s) ~ GP(0, Matérn(·; ν, ρ)) with smoothness ν and range ρ.
Posterior mean of Z(s) = disruption surface (DS).

Page 3 Team-specific:
Disruption: logit P(Y(s)=1 | ...) = α + X^Def_i β^Def + V_j^D(s) (note: text says α, X^Def and Z(s) defined previously, plus V_j^D(s). Wait, looking at text: "where α, Xij^Def and Z(s) were defined in the previous section, and V_j^D(s) is a two dimensional GP..." Actually looking at page 3 text: "Firstly, we define the individual team disruption surfaces model as [equation missing] where α, Xij^Def and Z(s) were defined in the previous section, and V_j^D(s) is a two dimensional GP..."

Wait, it says Z(s) but then V_j^D(s)? Let me re-read: "where α, Xij^Defand<sup>_Z_(</sup><sup>**s**) were de󰅮ined in the previous section, and</sup><sup>_V_</sup> _j_<sup>_D_(</sup><sup>**s**) is a two dimensional GP..."

This is garbled OCR. But conceptually:
Team j disruption surface: DS_j(s) = E[V_j^D(s) | data] where model includes team j defensive coefficient plus spatial GP V_j^D(s).
Control surface: CS_j(s) = E[V_j^A(s) | data] where model includes team j attacking coefficient plus spatial GP V_j^A(s).

Empirical Bayes: hyperparameters (ν, ρ) for each team's GP set to mode of posterior from Z(s) in Eq (1). Assumption: smoothness and correlation range similar across teams.

I'll present these formally with citations to pages where described.

Word count target: I need at least 1000 words across sections. Let me allocate roughly:
- THINK_TRACE: 450 words
- SOURCE_OPERATORS_AND_EQUATIONS: 250 words
- RETROCAUSAL_GENEALOGY: 150 words
- RECURSIVE_THEORY_OF_MIND: 150 words
- CROSS_LAYER_VETO_ADJUDICATION: 150 words
- RLVR_COUNTERFACTUAL_VETOES: 150 words
Total ~1300 words.

Let me write.

Important: cite exact [PAGE N] markers. The text has page numbers embedded like "2016 Research Papers Competition Presented by: 1" etc. I'll cite [PAGE 1], [PAGE 2], etc.

Also need verbatim quotes where useful.

Let's draft.

THINK_TRACE content:
- Start with the core inferential problem: binary spatial classification of disruption vs control.
- The GLSR extends GLM with spatial random effect Z(s).
- Outcome definition gray zone: disruption = interceptions, tackles, clearances, blocks; control proxy = completed passes and touches. This is an operational definition, not a direct measure of pressure.
- One-hot encoding for 20 teams means 40 team coefficients plus intercept. High dimensional but n is large (event data across 3 EPL seasons).
- Matérn covariance: smoothness ν controls differentiability, range ρ controls spatial decay. INLA used for approximate Bayesian inference with vague Gaussian hyperpriors.
- Gray zone 1: Actual LaTeX of Equation (1) and team-specific equations missing from OCR; reconstructed from textual description. Risk of sign error or missing offset.
- Gray zone 2: Approximate empirical Bayes forces all team GPs to share hyperparameters from full-season Z(s). Assumption: smoothness/range stationary across teams and seasons. Text says posterior is "tightly centered around the mode, which is roughly the same across different seasons" [PAGE 3]. If violated, team surfaces over-smoothed or under-smoothed.
- Gray zone 3: Pitch flipped so goalkeepers protect their goal [PAGE 4, PAGE 6]. Coordinate system is team-relative, not absolute. Comparing surfaces across teams requires mental re-flipping; risk of left/right wing confusion (e.g., Man City left wing favored by Agüero [PAGE 5]).
- Gray zone 4: Manager effect confounded with roster. Pochettino bought 6 players, none first-team regulars [PAGE 6, footnote 3], but still possible unmeasured player quality changes. Stoke under Hughes changed style [PAGE 4, PAGE 6].
- Gray zone 5: No home/away, score state, red card, or weather covariates. Conclusions explicitly list home/away as future extension [PAGE 7].
- Multi-hop: If team j has low DS_j(s) in own penalty box and high shots against (Sunderland [PAGE 5]), then opponent possession in that zone has high continuation probability. Counter-trap: pressing high against Man City's high final-third CS can disrupt control [PAGE 5, Stoke example [PAGE 5]].

SOURCE_OPERATORS_AND_EQUATIONS:
Write formal LaTeX blocks with citations.

RETROCAUSAL_GENEALOGY:
- Spatial stats: Banerjee, Carlin, Gelfand [1], Diggle et al. [3] model-based geostatistics, Rasmussen [9] GPs.
- INLA: Rue, Martino, Chopin [10]; Lindgren et al. [8] SPDE-GMRF link.
- Soccer analytics: Sally & Anderson [11] "The Numbers Game"; Prozone EPL event data 2012/13-2014/15 [PAGE 1, PAGE 2].
- Multi-week traps: season-long averages hide within-season tactical drift; manager changes mid-season; subset fitting (e.g., Ivanović position change [PAGE 4]) relies on empirical Bayes hyperparameter transfer which may break if sample small.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: Burnley regresses to low-control habit in final third [PAGE 4]; Sunderland regresses to low-disruption in own zone [PAGE 5].
- Counter-trap: Opponent anticipates Burnley's inability to retain possession outside opponent's box [PAGE 4], presses there to force turnover.
- Clock: Pochettino's high-pressing signature persists across clubs (Southampton 2013/14, Spurs 2014/15) [PAGE 6]; tactical change without roster overhaul [PAGE 6, footnote 3]. Hughes at Stoke shifts from avoidance to pressing over seasons [PAGE 4, PAGE 6].

CROSS_LAYER_VETO_ADJUDICATION:
- Physical: pitch dimensions fixed; Matérn range ρ in meters of pitch space. If ρ > pitch length, spatial effect degenerates to intercept-only (singularity).
- Biomechanical: Pressing requires sprinting and deceleration; not modeled. Fatigue accumulates over 90+ minutes; season-average DS assumes stationary pressing intensity. Veto: late-game pressing intensity likely lower than season average.
- Weather: not in model; rain affects ball speed and tackle success. Home/away omitted [PAGE 7].
- Veto proof: The model yields posterior mean surfaces, not real-time adaptive advice. Pre-match cartography must be vetoed if opponent changes formation or key player absent (e.g., Agüero side preference [PAGE 5]).

RLVR_COUNTERFACTUAL_VETOES:
3 scenarios:
1. Scenario: Burnley instructed to press high in attacking third to force turnovers. Veto: Burnley control surface below average outside opponent penalty box; David Jones/Danny Ings ~half league average retention in threatening positions [PAGE 4]. Prediction: turnover in final third leads to counter-attack, shot against; high press fails because retention coefficient cannot support sustained pressure.
2. Scenario: Sunderland builds out from back against pressing opponent. Veto: Sunderland disruption surface almost entirely below average in own zone [PAGE 5]; left back van Aanholt underperforming relative to disruption need [PAGE 5]. Prediction: loss of possession in defensive third, high-quality shot against.
3. Scenario: Manchester City adopts passive defensive block against low-block opponent, ceding midfield. Veto: Man City disruption surface indicates passive strategy, not heavily pressing [PAGE 5]; control surface strongest in final third [PAGE 5]. Prediction: if they surrender midfield possession, they cannot transition quickly enough to exploit final-third control; opponent gets shots against despite Man City offensive talent.

Wait, I need to make sure these are "verifiable RLVR veto scenarios". RLVR likely means Reinforcement Learning Verifiable Rewards or similar. But since I don't know exactly, I'll frame them as verifiable counterfactuals where the model's surface implies a veto on a proposed tactical action, with a testable prediction.

Let me now write the full response with proper XML tags and formatting. I need to ensure no betting lines. Check: no odds, spreads, moneylines, totals.

Word count check: I'll aim for generous length in each section.

Let me compose carefully.
</NATIVE_REASONING>

<THINK_TRACE>
The central inferential object is a binary spatial classification: at each pitch location s ∈ ℝ² (flipped so the attacking team shoots left-to-right and the goalkeeper protects their goal [PAGE 4]), Y(s)=1 denotes a disruption (interception, tackle, clearance, block) and Y(s)=0 denotes continual control (completed pass or touch) [PAGE 2]. The model is a generalized linear spatial regression (GLSR) with logistic link σ(x)=eˣ/(1+eˣ) [PAGE 2]. The linear predictor contains an intercept α, one-hot attacking-team indicators Xᵢᴬᵗᵏ ∈ {0,1}²⁰ with coefficients βᴬᵗᵏ, one-hot defending-team indicators Xᵢᴰᵉᶠ ∈ {0,1}²⁰ with coefficients βᴰᵉᶠ, and a spatial Gaussian process Z(s) with Matérn covariance. The posterior mean of Z(s) is the season-average disruption surface (DS) [PAGE 2]. Inference uses INLA with vague Gaussian hyperpriors [PAGE 2].

Gray-zone audit begins with the missing OCR: the actual LaTeX for Equation (1) and the team-specific surface equations are absent from the provided text [PAGE 2–3], so they must be reconstructed from verbal description. A sign error or omitted offset in that reconstruction would invert the meaning of βᴰᵉᶠ versus βᴬᵗᵏ. The team-level extension introduces separate GPs Vⱼᴰ(s) and Vⱼᴬ(s) for each team j, but computational cost is managed via approximate empirical Bayes: every team’s Matérn hyperparameters (smoothness ν, range ρ) are fixed to the mode of the posterior obtained from Z(s) in Equation (1) [PAGE 3]. The paper justifies this by noting the posterior is tightly centered and roughly constant across seasons [PAGE 3], but this is a strong stationarity assumption. If a team’s pressing style has a different spatial correlation length than the league average, its surface will be over-smoothed or under-smoothed, biasing the cartography.

A second gray zone is the operational definition of disruption. The paper equates disruption with four event types and continual control with completed passes plus touches [PAGE 2]. This conflates successful defensive pressure with mere ball recovery; a tackle that immediately loses possession back to the attacker is coded the same as one that starts a counter-attack. Coordinates are team-relative rather than absolute [PAGE 4, PAGE 6], which introduces a mental-reversal hazard when comparing left-wing versus right-wing tendencies across opponents (e.g., Manchester City’s left-wing bias tied to Agüero [PAGE 5]).

Managerial attribution is another gray zone. Pochettino’s Southampton and Spurs surfaces show high disruption [PAGE 6], yet he signed six players before 2014/15, none of whom became first-team regulars [PAGE 6, footnote 3]. The paper argues surface shifts are tactical rather than roster-driven, but unmeasured player-quality changes remain a confounder. Stoke’s transformation under Hughes is cited as a manager effect [PAGE 4, PAGE 6], again without isolating personnel from scheme.

Multi-hop derivation: Sunderland conceded roughly 700 shots, ~200 above the league average, and its disruption surface is below average especially in its own zone [PAGE 5]. Therefore opponent possession in Sunderland’s defensive third has a high continuation probability. A rational opponent should funnel possession into Sunderland’s own half rather than contest the midfield. Conversely, Manchester City’s control surface is highest in the final third, so a high press against City’s possession phases can force turnover before City reaches its dominant zone; Stoke executed exactly this in August 2014 [PAGE 5]. The chain is: surface anomaly → implied possession topology → exploitable pressing trigger → verified historical precedent.

Breakdown regimes: (i) the empirical Bayes hyperparameter transfer collapses when subset samples are too small (e.g., a single defender’s appearances [PAGE 4]); (ii) the binary disruption definition fails when a tackle does not end the attacking sequence; (iii) season-average surfaces ignore within-season tactical drift and fatigue; (iv) omitted covariates include home/away, score state, red cards, and weather—explicitly flagged as future work [PAGE 7].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let s ∈ S ⊂ ℝ² denote pitch coordinates in meters, with the pitch flipped so the defending goalkeeper protects their goal [PAGE 4]. The conditional disruption probability from Equation (1) on [PAGE 2] is reconstructed as:

Pr(Y(s)=1 ∣ Xᵢᴬᵗᵏ, Xᵢᴰᵉᶠ, s) = σ( α + (Xᵢᴬᵗᵏ)ᵀβᴬᵗᵏ + (Xᵢᴰᵉᶠ)ᵀβᴰᵉᶠ + Z(s) ), σ(x) = eˣ/(1+eˣ).

Here Y(s) ∈ {0,1} is unitless (probability on [0,1]); Xᵢᴬᵗᵏ and Xᵢᴰᵉᶠ are one-hot vectors of dimension 20 for the 20 EPL teams [PAGE 2]; α is the global intercept; βᴬᵗᵏ, βᴰᵉᶠ ∈ ℝ²⁰ are offensive control and defensive disruption coefficients; Z(s) ∼ GP(0, C_Matérn(·;ν,ρ)) with smoothness ν (dimensionless, controls differentiability) and range ρ (meters, controls spatial decay length) [PAGE 2]. The season-average disruption surface DS(s) = E[Z(s) ∣ data] [PAGE 2].

Team-specific surfaces on [PAGE 3] are modeled by adding team-specific GPs:

Disruption surface for team j: DSⱼ(s) = E[Vⱼᴰ(s) ∣ data], with logit-linear predictor α + (Xᵢᴰᵉᶠ)ᵀβᴰᵉᶠ + Vⱼᴰ(s).
Control surface for team j: CSⱼ(s) = E[Vⱼᴬ(s) ∣ data], with logit-linear predictor α + (Xᵢᴬᵗᵏ)ᵀβᴬᵗᵏ + Vⱼᴬ(s).

Vⱼᴰ(s), Vⱼᴬ(s) are independent two-dimensional GPs with Matérn covariance. Approximate empirical Bayes sets each team’s (ν, ρ) to the posterior mode from Z(s) in Equation (1), assuming cross-team stationarity of smoothness and correlation range [PAGE 3]. Positive DSⱼ indicates pressing above league average; negative indicates passive defense [PAGE 3]. Positive CSⱼ indicates above-average possession retention [PAGE 3]. All coefficient effects shift the surface up or down on the log-odds scale [PAGE 2]. No betting odds, spreads, or implied probabilities appear in the source.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s statistical genealogy traces to model-based geostatistics (Diggle, Tawn, Moyeed [3], cited [PAGE 7]) and hierarchical spatial modeling (Banerjee, Carlin, Gelfand [1], cited [PAGE 7]), with Gaussian-process foundations from Rasmussen [9]. Computation relies on INLA (Rue, Martino, Chopin [10]) and the SPDE–GMRF link (Lindgren, Rue, Lindström [8]), all cited [PAGE 7]. The soccer-analytics lineage follows Sally & Anderson’s The Numbers Game [11], cited [PAGE 7], and the Prozone EPL event-data archive for 2012/13, 2013/14, and 2014/15 [PAGE 1].

Multi-week traps emerge from this lineage. Season-level surfaces assume tactical stationarity over a nine-month campaign, yet managerial mid-season adjustments and roster churn invalidate the pooled hyperparameter assumption. The paper itself demonstrates manager effects by contrasting Pochettino’s Southampton (2013/14) and Tottenham (2014/15) disruption surfaces against non-Pochettino years [PAGE 6], and Stoke’s stylistic shift under Hughes across seasons [PAGE 4, PAGE 6]. The recursive trap is that surface changes attributed to a manager may actually reflect unmeasured player turnover; Pochettino’s 2014/15 signings did not become first-team regulars [PAGE 6, footnote 3], which weakly supports the tactical-attribution claim but does not prove it. Another trap is small-sample subset fitting: the authors note the model can be fit to games where a specific player (e.g., Ivanović) plays out of position [PAGE 4], but empirical-Bayes hyperparameter transfer from full-season Z(s) may break down when the subset contains too few events to identify team-specific spatial roughness.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis-habit regression: Burnley’s control surface lies almost entirely below league average, with a major dip outside the opponent’s penalty box; regulars David Jones and Danny Ings retained possession in threatening positions at roughly half the league-average rate [PAGE 4]. Under pressure, Burnley regresses to this low-control habit, surrendering possession precisely where retention is most valuable. Sunderland exhibits the defensive mirror: its disruption surface is below average in its own defensive zone, so under sustained attack it regresses to passive defending and concedes high volumes of shots (~700 against, ~200 above league average) [PAGE 5].

Counter-trap: An opponent facing Burnley should force possession into Burnley’s weak final-third retention zone, knowing its midfielders and forwards cannot hold the ball under pressure. Against Sunderland, an opponent should invade the defensive third rather than settle for long-range shots, because Sunderland’s disruption surface cannot generate turnovers in its own zone [PAGE 5]. Manchester City presents the inverse counter-trap: its control surface dominates the final third [PAGE 5], so pressing City high—before it reaches that zone—exploits the drop-off; Stoke’s August 2014 win at the Etihad used exactly this high-pressing trigger [PAGE 5].

Clock: Managerial tactical identity persists across club moves faster than roster turnover. Pochettino’s high-pressing signature appears at Southampton in 2013/14 and Tottenham in 2014/15, with surfaces well above seasonal average in both [PAGE 6]. Hughes’s Stoke shifted from possession avoidance to pressing and control over multiple seasons [PAGE 4, PAGE 6]. The clock implication is that a newly appointed manager’s surface may shift within weeks of appointment even with the same roster, so pre-season cartography decays quickly after a managerial change.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The pitch domain S is bounded (regulation dimensions), and the Matérn range ρ has units of meters. If ρ exceeds the pitch length, the GP covariance becomes nearly constant and Z(s) degenerates to a spatial intercept, nullifying the surface’s localizing power. Biomechanical layer: Pressing is an intermittent high-intensity action requiring repeated sprints and decelerations; the model contains no fatigue or minute-dependent covariate, so season-average DS(s) cannot represent late-game pressing decay. Weather layer: Temperature, precipitation, and wind alter ball roll and tackle success probability, yet are absent; home/away is explicitly listed as a missing covariate in the conclusions [PAGE 7].

Veto proof: Any pre-match tactical prescription derived from DS(s) or CS(s) must be vetoed if (a) the opponent changes formation in a way that reallocates defensive responsibility across pitch regions not captured by team-level one-hot encoding; (b) a key pressing trigger (e.g., Agüero’s left-wing preference for City [PAGE 5]) is absent due to injury or substitution; or (c) match state forces a trailing team to abandon its season-average pressing profile and chase the game, invalidating the stationarity assumption. The surfaces are posterior means, not real-time adaptive policies; they describe tendencies, not constraints.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Burnley high press in the final third. Proposed action: instruct Burnley to press high up the pitch to force turnovers near the opponent’s goal. Veto: Burnley’s control surface is below average outside the opponent’s penalty box, and Jones/Ings retain possession at about half the league-average rate in threatening positions [PAGE 4]. A high press requires sustained possession to reorganize defensively if the press is broken; Burnley cannot satisfy that precondition. Verifiable prediction: turnover in the final third leads directly to a counter-attack and a shot against Burnley; high-pressing minutes will correlate with increased shots against, not decreased.

Scenario 2 — Sunderland build-out from the back. Proposed action: Sunderland plays short passes from its goalkeeper into its own defensive third to evade pressing. Veto: Sunderland’s disruption surface is almost entirely below average, particularly in its own zone, and Patrick van Aanholt underperforms relative to the disruption required [PAGE 5]. Sunderland cannot reliably win the ball back if the short build-up is intercepted. Verifiable prediction: possession loss inside Sunderland’s defensive third, generating a high-quality shot against within three passing sequences.

Scenario 3 — Manchester City passive low block. Proposed action: City deliberately surrenders midfield possession and defends deep against a low-block opponent, relying on its final-third control to counter. Veto: City’s disruption surface indicates a passive defensive strategy that does not heavily press [PAGE 5], while its control surface peaks in the final third [PAGE 5]. Ceding midfield forfeits the territorial precondition for using that final-third control. Verifiable prediction: opponent gains sustained possession in midfield, takes more shots against City than City’s season-average disruption surface would suggest, and City’s shot volume drops below its control-surface potential.
</RLVR_COUNTERFACTUAL_VETOES>