---
source: "2024 - Boot It A Pragmatic Alternative To Build Up Play - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/Hudl StatsBomb/Research Competitions/2024"
pages: 16
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4818
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about soccer tactics ("Boot It: A Pragmatic Alternative To Build Up Play") using a very specific format with strict invariants.

 Let me break down the requirements:

 1. ZERO BETTING LINES - never mention spreads, totals, moneylines, or odds.
 2. ZERO TOY EQUATIONS - no fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
 3. >= 1,000-word depth across these exact XML sections:
    - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
    - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
    - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
    - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
    - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
    - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

 Source text provided is 19 pages (marked 1-19 in the text).

 I need to:
 - Reference specific pages with [PAGE N] markers
 - Use verbatim quotes where appropriate
 - Create formal LaTeX equations
 - Avoid betting language entirely
 - Maintain the persona of "GSE + GSI Frontier Reasoning Foundry"

 Let me carefully extract information from the source text:

 Key facts:
 - Paper: "Boot It: A Pragmatic Alternative To Build Up Play" by Cascioli, Goldsmith, Stradiotti, Van Roy, Robberechts, Wouters, Davis (KU Leuven + RBFA)
 - Pages: 1-19 (based on footer numbers)
 - Data: StatsBomb 360 event stream data, SPADL representation
 - Backward pass definition: angle < -5/6 * π or > 5/6 * π [PAGE 2]
 - Training: 1,466,942 passes (351,247 backward), 63,414 throw-ins (31,300 pressured) [PAGE 3]
 - Validation: 20% random sample [PAGE 3]
 - Test: 504,962 passes (118,395 backward), 21,851 throw-ins from Serie A 2022/23 and 2023/24 [PAGE 3]
 - Elementary analysis: goals within 10 actions [PAGE 4]
 - Table 1: scoring probabilities by location bins [PAGE 4]
   - 0-21m: throw-in 0.01%, pass 0.18%
   - 21-42m: throw-in 0.09%, pass 0.20%
   - 42-63m: throw-in 0.17%, pass 0.33%
   - 63-84m: throw-in 0.16%, pass 0.73%
   - 84-105m: throw-in 0.34%, pass 2.06%
 - Game state value: P_score(S,t,k) and P_concede(S,t,k) [PAGE 5]
 - xG combined formula: 1 - product(1 - xG_i) [PAGE 6]
 - XGBoost hyperparameters: max depth {3,5,7}, learning rate {1e-2, 0.1, 0.3}, estimators {50,100,200}, patience 10 [PAGE 6]
 - Open play features: action type, time, origin/destination, body part, team, goal difference, outplayed players, ball interceptability [PAGE 7]
 - Table 2: Open play offensive AUC 0.790, LogLoss 0.043, Brier 0.008; Defensive AUC 0.763, LogLoss 0.010, Brier 0.001 [PAGE 7]
 - Throw-in features: start/end location, time, time since previous action, pressure indicator [PAGE 8]
 - Table 3: Throw-in offensive AUC 0.727, LogLoss 0.027, Brier 0.004; Defensive AUC 0.744, LogLoss 0.008, Brier 0.001 [PAGE 8]
 - Simulation: backward pass snapshot replaced by clearance + throw-in [PAGE 8]
 - Goal kicks > 40m as proxy for clearance length; 32,392 observed goal kicks [PAGE 9]
 - Throw-in time sampled from distribution [PAGE 9-10]
 - Throw-in end location sampled from historical within 10m tolerance [PAGE 10]
 - Always pressured assumption, also 50% and 75% [PAGE 10]
 - Use cases: top ten Serie A 2023/24 teams [PAGE 11]
 - Figure 5: Inter Milan-AC Milan example [PAGE 11]
 - Figure 6: distributions [PAGE 12]
 - Figure 7: defensive third, booting vs passing, difference ~1.08 PV [PAGE 12]
 - One goal ≈ one expected point [PAGE 12]
 - Figure 8: six bins by x-location [PAGE 13]
 - Table 4: pressing fractions [PAGE 14]
   - Defensive third: 50% +0.73, 75% +0.91, 100% +1.08
   - Middle third: 50% -0.90, 75% -0.38, 100% +0.13
   - Offensive third: 50% -10.88, 75% -10.65, 100% -10.41
 - Table 5: policies [PAGE 15]
   - Defensive third: Observed -0.17, Naive +0.91, Learned +1.00
   - Middle third: Observed +5.77, Naive +5.90, Learned +7.71
   - Offensive third: Observed +13.18, Naive +2.78, Learned +13.27
 - Learned policy accuracy: 82% on 2023/24 Serie A [PAGE 15]
 - Related work: Reep & Benjamin 1968 [PAGE 16-17], Charles Reep [PAGE 16]

 Now let me structure the response.

 THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit.
 - Discuss the causal inference problem: backward pass as counterfactual vs booting simulation
 - Gray zones: simulation assumes throw-in always pressured (100%), but real world pressure varies
 - The goal kick proxy for clearance length introduces distributional shift
 - Selection bias: observed backward passes are not random; they're choices made under pressure
 - The "always booting" policy is obviously suboptimal; mixed policy needed
 - xG labeling for sparse goal events (rare events problem)
 - Backward pass angle definition threshold at 5/6 * π (150 degrees) - arbitrary cutoff?
 - Pressured throw-in definition: immediate steal OR first/second pass under pressure, exception for long ball first pass
 - 10-action window for scoring probability
 - Multi-hop: if booting is better in defensive third, why don't teams do it? Coordination, pressing intensity, psychological factors, set-piece organization time

 SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown.
 - Define state value function V(S,t) = P_score(S,t,k) - P_concede(S,t,k) [PAGE 5]
 - Combined xG: XG_seq = 1 - ∏(1 - xG_i) [PAGE 6]
 - Backward pass classifier: θ ∈ [-π, -5π/6) ∪ (5π/6, π] [PAGE 2]
 - Pressured throw-in indicator: I_pressure = 1{steal immediately} ∨ 1{first/second pass under pressure ∧ first pass not long} [PAGE 3]
 - Binning function: B(x) = floor(x / 21) for x ∈ [0,105] giving 5 bins of 21m each [PAGE 4]
 - XGBoost hyperparameter grid H = {max_depth ∈ {3,5,7}, η ∈ {10^-2, 10^-1, 0.3}, N_estimators ∈ {50,100,200}} [PAGE 6]
 - Feature vector dimensions: open play (VAEP + 360: outplayed count, interceptability counts at r=3m,5m) [PAGE 7]; throw-in (4 features) [PAGE 8]
 - Clearance length L ~ f_goal_kick(l | l > 40m) [PAGE 9]
 - Throw-in delay Δt ~ f_delay(Δt) [PAGE 9-10]
 - End location y_end ~ Uniform{N: ||start - N_start|| < 10m} [PAGE 10]
 - PV difference ΔPV = PV_boot - PV_pass [PAGE 12-15]
 - Units: xG (dimensionless probability [0,1]), PV (expected goals difference), meters, seconds, actions (count), AUC (dimensionless), LogLoss (nats), Brier Score (dimensionless MSE)

 RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
 - Charles Reep & Benjamin (1968) "Skill and Chance in Association Football" - direct play vs possession [PAGE 16-17]
 - Hughes & Franks (2005) critiqued Reep's conclusions [PAGE 16]
 - VAEP (Decroos et al. 2019) [PAGE 3, 7, 16]
 - Robberechts et al. un-xPass (2023) [PAGE 6, 7, 17]
 - McKinley throw-in analysis [PAGE 3, 16]
 - Dona & Swartz causal throw-ins [PAGE 16]
 - Markov decision processes (Sandholtz & Bornn 2020; Van Roy et al. 2023) [PAGE 16]
 - TacticAI (Wang et al. 2024) [PAGE 16]
 - Multi-week traps: overfitting to single season (Serie A 2023/24), temporal distribution shift between training (2020 Euros, 2022 WC, various leagues) and test (Serie A), league-specific pressing cultures

 RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
 - Crisis habit regression: under pressure, teams regress to "boot it" habit from pre-2000s era described in intro [PAGE 1]
 - Counter-trap: opponent anticipates boot, sets press higher, negates throw-in advantage
 - Clock: time elapsed since previous action matters for throw-in value (time to reorganize press) [PAGE 8]
 - Game-theoretic mixed strategy: 82% accuracy policy means 18% exploitability; minimax implications [PAGE 15]
 - The "boot it" shout from sidelines as social/crisis heuristic [PAGE 1]

 CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
 - Physical: goal kick >40m proxy assumes similar biomechanics to outfield clearance; goalkeeper vs outfield player kicking mechanics differ [PAGE 9]
 - Biomechanical: maximum kicking distance varies by player; simulation uses population distribution not individual capability
 - Weather: wind affects long ball trajectory and throw-in location; not in feature set [PAGE 10 mentions y-location weight null]
 - Pitch dimensions: 105m x 68m implied by bins (0-21m etc.) [PAGE 4]
 - Veto: if pitch is wet/windy, long clearance variance increases, making simulation invalid; if goalkeeper takes goal kicks vs outfield player clearance, different kinematic chains
 - Surface: grass wear affects bounce and roll after ball goes out; not modeled

 RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
 RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. I'll interpret as verifiable counterfactual veto scenarios.
 1. Veto: Pressing failure. If pressure fraction < threshold, booting value collapses. From Table 4: at 50% pressure, middle third ΔPV = -0.90 (veto triggered), defensive third still +0.73. Prediction: below ~60% press success in middle third, passing dominates.
 2. Veto: Pitch location. Offensive third: booting ΔPV = -10.41 to -10.88 (massive veto). Prediction: never boot in offensive third regardless of pressure.
 3. Veto: Individual clearance capacity. If player's max kick distance < simulated goal-kick distribution (>40m), simulation overestimates field position gain. Prediction: for players below 75th percentile kicking power, backward pass PV exceeds simulated boot PV by margin ε.

 Need to ensure >= 1000 words total across sections. THINK_TRACE alone needs >= 400 words.

 Let me also make sure I cite pages correctly. The source has page numbers at bottom: **1**, **2**, **3**, **4**, **5**, **6**, **7**, **8**, **9**, **10**, **11**, **12**, **13**, **14**, **15**, **16**, **17**, **18**, **19**.

 Verbatim quotes to use:
 - "BOOT IT!" [PAGE 1]
 - "Up until the early 2000s..." [PAGE 1]
 - angle < −5/6 * π or > 5/6 * π [PAGE 2]
 - "1,466,942 passes (of which 351,247 are backward passes) and 63,414 throw-ins (of which 31,300 are pressured)" [PAGE 3]
 - "0.34%" vs "0.18%, 0.20%" [PAGE 4]
 - "0.790|0.043|0.008" etc [PAGE 7]
 - "1.08" [PAGE 12]
 - "82% accuracy" [PAGE 15]

 No betting lines: I must avoid "odds", "spread", "moneyline", "total". I can talk about probabilities, expected value, xG, possession value.

 Let me draft the response carefully.

 Word count check:
 - THINK_TRACE: need 400+ words
 - Total: need 1000+ words

 I'll write substantial content for each section.

 For LaTeX equations:
 \mathcal{V}(S, t) = P_{\text{score}}(S, t, k) - P_{\text{concede}}(S, t, k)
 \text{XG}_{\text{seq}} = 1 - \prod_{i=1}^{n} (1 - \text{xG}_i)
 \theta_{\text{pass}} \in [-\pi, -\frac{5\pi}{6}) \cup (\frac{5\pi}{6}, \pi]
 B(x) = \left\lfloor \frac{x}{21} \right\rfloor, \quad x \in [0, 105] \text{ m}
 \Delta \text{PV} = \text{PV}_{\text{boot}} - \text{PV}_{\text{pass}}
 \mathbb{I}_{\text{pressured}} = \mathbb{1}\{\text{steal}\} \lor \left( \mathbb{1}\{\text{pass}_{1,2} \text{ under pressure}\} \land \neg \mathbb{1}\{\text{pass}_1 \text{ long}\} \right)
 L \sim f_{\text{goal kick}}(l \mid l > 40 \text{ m})
 \Delta t \sim f_{\text{delay}}(\Delta t)
 y_{\text{end}} \sim \mathcal{U}\{n : \|s - s_n\|_2 < 10 \text{ m}\}

 Let's write it out.

 Structure:
 1. THINK_TRACE
 2. SOURCE_OPERATORS_AND_EQUATIONS
 3. RETROCAUSAL_GENEALOGY
 4. RECURSIVE_THEORY_OF_MIND
 5. CROSS_LAYER_VETO_ADJUDICATION
 6. RLVR_COUNTERFACTUAL_VETOES

 I need to make sure the XML tags are exact as specified.

 Let me draft THINK_TRACE first (~500 words):

 The core identification problem in Cascioli et al. [PAGE 1-19] is the comparison of an observed backward pass with a counterfactual clearance-to-throw-in sequence that never actually occurred in that match state. The authors justify this asymmetry by noting that “booting” is rare in the data and often forced rather than chosen [PAGE 8], so they orient the simulation from backward passes outward. This creates a multi-hop derivation chain: (i) classify backward pass via angular threshold θ ∈ [−π, −5π/6) ∪ (5π/6, π] [PAGE 2]; (ii) value the resulting open-play game state with XGBoost on xG labels [PAGE 6-7]; (iii) simulate clearance length using goal kicks > 40 m as a power proxy [PAGE 9]; (iv) sample throw-in delay and end location from historical distributions [PAGE 9-10]; (v) value the pressured throw-in game state [PAGE 8]; (vi) subtract possession values to obtain ΔPV [PAGE 12-15].

 Gray-zone audit: The backward-pass classifier uses a 150-degree cone that treats any pass behind the ball as “no progressive option,” but this conflates tactical patience with technical inability or miscommunication [PAGE 2]. The pressured-throw-in definition requires either an immediate steal or pressure on the first/second pass, with a long-ball exception [PAGE 3]; this label is noisy because “under_pressure” is an event-stream attribute that may not capture coordinated pressing intensity [PAGE 3]. The elementary binning assumes scoring within the next 10 actions [PAGE 4], which truncates the value of slow territorial buildup that pays off beyond the horizon. The goal-kick proxy for clearance length mixes goalkeeper biomechanics with outfield-player clearances [PAGE 9], introducing a systematic bias because goalkeepers typically strike from a stationary tee-like setup while outfield clearances occur under duress. The assumption that the throw-in is always pressured [PAGE 10] is the strongest structural veto: Table 4 shows the middle-third advantage collapses at 50% pressing (−0.90 PV) and only emerges at 100% (+0.13 PV) [PAGE 14], meaning the strategy’s value is conditional on defensive coordination that the model does not control.

 The paper’s own remedy—a learned mixed policy with 82% test accuracy [PAGE 15]—acknowledges that “always booting” is suboptimal, but the policy is trained on ratings generated by the same models being validated, creating a circularity risk. Multi-week traps include temporal distribution shift: training spans Euro 2020, World Cup 2022, Bundesliga, Premier League, LaLiga [PAGE 3], while testing isolates Serie A 2023/24 [PAGE 12-15], a league with distinct pressing cultures and pitch dimensions. The 105 m × 68 m pitch implied by the 21 m bins [PAGE 4] may not hold for all stadiums, breaking the bin boundaries.

 SOURCE_OPERATORS_AND_EQUATIONS (~300 words):

 Formal state-value operator [PAGE 5]:
 \mathcal{V}(S, t) = P_{\text{score}}(S, t, k) - P_{\text{concede}}(S, t, k)
 where P are probabilities over the next k actions [PAGE 5]. Units: expected goals difference (dimensionless, xG scale).

 Combined sequence xG label [PAGE 6]:
 \text{XG}_{\text{seq}} = 1 - \prod_{i=1}^{n} (1 - \text{xG}_i)
 Units: dimensionless probability [0, 1].

 Backward-pass angular filter [PAGE 2]:
 \theta \in [-\pi, -\tfrac{5\pi}{6}) \cup (\tfrac{5\pi}{6}, \pi]
 Units: radians. Breakdown: passes exactly perpendicular (±π/2) are excluded; the 150° threshold is arbitrary and not validated.

 Pressured-throw-in indicator [PAGE 3]:
 \mathbb{I}_{\text{pressured}} = \mathbb{1}\{\text{immediate steal}\} \lor \left( \mathbb{1}\{\text{pass}_{1:2} \text{ under pressure}\} \land \neg \mathbb{1}\{\text{pass}_1 \text{ long}\} \right)
 Units: binary {0,1}.

 Location bins [PAGE 4]:
 B(x) = \lfloor x / 21 \rfloor, \quad x \in [0, 105] \text{ m}, \quad |B| = 5
 Table 1 values: scoring probability in percent within 10 actions [PAGE 4].

 XGBoost hyperparameter grid [PAGE 6]:
 \mathcal{H} = \{ \text{max\_depth} \in \{3,5,7\}, \ \eta \in \{10^{-2}, 0.1, 0.3\}, \ N \in \{50,100,200\} \}, \quad \text{patience} = 10
 Evaluation metrics: AUC (dimensionless), LogLoss (nats), Brier Score (dimensionless MSE) [PAGE 7-8].

 Simulation kernel [PAGE 9-10]:
 L \sim f_{\text{goal kick}}(l \mid l > 40 \text{ m}), \quad \Delta t \sim f_{\text{delay}}(\Delta t), \quad y_{\text{end}} \sim \mathcal{U}\{n : \|s - s_n\|_2 < 10 \text{ m}\}
 Units: meters, seconds.

 Aggregated possession value difference [PAGE 12-15]:
 \Delta \text{PV} = \text{PV}_{\text{boot}} - \text{PV}_{\text{pass}}, \quad \text{unit: xG over a season}
 Table 4 and Table 5 report \Delta \text{PV} by pitch third and pressing fraction [PAGE 14-15].

 RETROCAUSAL_GENEALOGY (~200 words):

 Lineage traces to Charles Reep and Benjamin (1968), who argued most goals follow fewer than five passes, erroneously favoring direct play [PAGE 16-17]. Hughes and Franks (2005) corrected this observational fallacy [PAGE 16]. The paper inherits VAEP (Decroos et al., 2019) and un-xPass (Robberechts et al., 2023) for action and state valuation [PAGE 3, 6-7, 16-17]. Throw-in literature (McKinley; Dona and Swartz; Monte; Bransen et al.) previously treated throw-ins only offensively [PAGE 3, 16]; this work is the first to model intentionally conceding possession for an opponent throw-in [PAGE 16]. Markov decision process approaches (Sandholtz and Bornn, 2020; Van Roy et al., 2023) struggled with sparse data and rich context [PAGE 16], motivating the XGBoost tabular choice here [PAGE 6].

 Multi-week traps: Training data spans 2020–2024 across six competitions [PAGE 3]; testing on Serie A 2023/24 [PAGE 12-15] risks league-specific pressing and tactical drift over a single season. Reep’s error of extrapolating from aggregate counts to tactical prescription [PAGE 16] is echoed if coaches adopt “always boot in defensive third” without the learned policy’s contextual gating [PAGE 15]. The paper’s conclusion that build-up is “excessively demonized” [PAGE 16] reverses a two-decade trend, creating a recency-bias trap where contrarianism overrides context.

 RECURSIVE_THEORY_OF_MIND (~200 words):

 Crisis habit regression: The intro describes the sideline shout “BOOT IT!” as a pre-2000s defensive reflex [PAGE 1]. Under modern pressing, defenders may regress to this habit precisely when possession retention is most valuable, creating a crisis-induced suboptimality. Counter-trap: If a team publicly adopts the booting policy, opponents adjust by pressuring throw-ins less aggressively (knowing the ball is conceded) or by positioning to win the second ball immediately. The model’s value collapses as pressure probability drops; Table 4 shows the middle-third edge vanishes at 50% pressing [PAGE 14]. Clock: Throw-in delay Δt is an explicit feature because the time to reorganize a press alters state value [PAGE 8-9]. A quick throw-in nullifies the regrouping benefit cited in the introduction [PAGE 1]. Recursive depth: The learned policy (82% accuracy) [PAGE 15] implies opponents can exploit the 18% of misclassified states; a game-theoretic mixed strategy with randomization is required to prevent counter-adaptation.

 CROSS_LAYER_VETO_ADJUDICATION (~200 words):

 Physical veto: Clearance length is proxied by goalkeeper goal kicks > 40 m [PAGE 9]. Goalkeepers kick from a static placement with a different kinematic chain than an outfield player clearing under pressure; biomechanical equivalence is unproven. If the kicking player is below the 75th percentile of striking power, the simulated throw-in ends too far upfield, inflating PV_boot. Weather veto: Wind and precipitation alter long-ball trajectory and bounce after touchline exit; neither wind speed nor surface condition appears in the feature set [PAGE 7-8]. The y-location (touchline proximity) is explicitly null-weighted by the model [PAGE 10], which is only valid if wind does not systematically push the ball toward the far touchline. Physical pitch dimensions: bins assume 105 m length [PAGE 4]; non-standard pitch lengths break bin boundaries. Veto adjudication: Any match with sustained wind > 15 km/h, extreme pitch wear near touchlines, or a goalkeeper taking an outfield clearance should invalidate the booting recommendation unless the model is retrained with those covariates.

 RLVR_COUNTERFACTUAL_VETOES (~200 words):

 Veto 1 (Pressing failure): Counterfactual—pressure fraction p < 0.60 in the middle third. From Table 4 [PAGE 14], ΔPV at p=0.50 is −0.90; at p=0.75 is −0.38; at p=1.00 is +0.13. Prediction: below p ≈ 0.60, the booting option is dominated by backward passing; a verifiable veto trigger is observed pressure rate < 60% on opponent throw-ins over a 5-match window.

 Veto 2 (Pitch region): Counterfactual—ball in offensive third. Table 4 [PAGE 14] shows ΔPV ≈ −10.41 to −10.88 across all pressure levels. Prediction: booting from the offensive third is never optimal; the veto is absolute and independent of pressing intensity or weather.

 Veto 3 (Individual kicking capacity): Counterfactual—outfield player’s maximum clearance distance < simulated goal-kick draw (median > 40 m, right-tail distribution) [PAGE 9]. Prediction: for players whose in-season observed long-pass completion beyond 40 m is below league median, the simulated boot overstates field position by ≥ 15 m; PV_pass exceeds PV_boot by margin ε > 0.01 xG. Verification: compare simulated clearance end locations against the player’s actual long-pass distribution over 3 matches.

 Total word count should be well over 1000.

 Let me check each section length roughly. THINK_TRACE is around 450 words. SOURCE_OPERATORS around 250. Others 200 each. Total ~1300+. Good.

 Make sure no betting terms. I used "expected value", "probability", "xG", "possession value". No spreads, totals, moneylines, odds. Good.

 Make sure page citations are exact format [PAGE N]. Good.

 Let me review the source text for exact quotes I might want to include verbatim in THINK_TRACE or elsewhere:
 - "BOOT IT!" [PAGE 1]
 - "Up until the early 2000s, this was a common refrain..." [PAGE 1]
 - "angle is <−5/6 * π or > 5/6 * π" [PAGE 2]
 - "1,466,942 passes (of which 351,247 are backward passes)..." [PAGE 3]
 - "one goal corresponds to approximately one expected point" [PAGE 12]
 - "82% accuracy" [PAGE 15]

 I'll include some of these.

 Double-check: The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." I have page markers throughout.

 Let me write the final output.
</NATIVE_REASONING>

<THINK_TRACE>
The core identification problem in Cascioli et al. is the comparison of an observed backward pass with a counterfactual clearance-to-throw-in sequence that never actually occurred in that match state. The authors justify this asymmetry by noting that “booting” is rare in the data and often forced rather than chosen [PAGE 8], so they orient the simulation from backward passes outward. This creates a multi-hop derivation chain: (i) classify backward pass via angular threshold θ ∈ [−π, −5π/6) ∪ (5π/6, π] [PAGE 2]; (ii) value the resulting open-play game state with XGBoost on xG labels [PAGE 6–7]; (iii) simulate clearance length using goal kicks greater than 40 meters as a power proxy [PAGE 9]; (iv) sample throw-in delay and end location from historical distributions [PAGE 9–10]; (v) value the pressured throw-in game state [PAGE 8]; (vi) subtract possession values to obtain ΔPV [PAGE 12–15].

Gray-zone audit: The backward-pass classifier uses a 150-degree cone that treats any pass behind the ball as “no progressive option,” but this conflates tactical patience with technical inability or miscommunication [PAGE 2]. The pressured-throw-in definition requires either an immediate steal or pressure on the first or second pass, with a long-ball exception [PAGE 3]; this label is noisy because the “under_pressure” attribute may not capture coordinated pressing intensity [PAGE 3]. The elementary binning assumes scoring within the next 10 actions [PAGE 4], which truncates the value of slow territorial buildup that pays off beyond the horizon. The goal-kick proxy for clearance length mixes goalkeeper biomechanics with outfield-player clearances [PAGE 9], introducing systematic bias because goalkeepers typically strike from a stationary placement while outfield clearances occur under duress. The assumption that the throw-in is always pressured [PAGE 10] is the strongest structural veto: Table 4 shows the middle-third advantage collapses at 50 percent pressing (−0.90 PV) and only emerges at 100 percent (+0.13 PV) [PAGE 14], meaning the strategy’s value is conditional on defensive coordination that the model does not control.

The paper’s own remedy—a learned mixed policy with 82 percent test accuracy [PAGE 15]—acknowledges that “always booting” is suboptimal, but the policy is trained on ratings generated by the same models being validated, creating a circularity risk. Multi-week traps include temporal distribution shift: training spans Euro 2020, World Cup 2022, Bundesliga, Premier League, and LaLiga [PAGE 3], while testing isolates Serie A 2023/24 [PAGE 12–15], a league with distinct pressing cultures. The 105-meter pitch length implied by the 21-meter bins [PAGE 4] may not hold for all stadiums, breaking bin boundaries. Finally, the sideline shout “BOOT IT!” described in the introduction [PAGE 1] represents a pre-2000s defensive reflex; modern defenders may regress to this habit precisely when possession retention is most valuable, creating crisis-induced suboptimality that the model does not explicitly correct for.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal state-value operator [PAGE 5]:

\mathcal{V}(S, t) = P_{\text{score}}(S, t, k) - P_{\text{concede}}(S, t, k)

where P are probabilities over the next k actions [PAGE 5]. Units: expected goals difference (dimensionless, xG scale).

Combined sequence xG label [PAGE 6]:

\text{XG}_{\text{seq}} = 1 - \prod_{i=1}^{n} (1 - \text{xG}_i)

Units: dimensionless probability in [0, 1]. Breakdown: evaluates to one minus the probability that no shot in the sequence ends in a goal.

Backward-pass angular filter [PAGE 2]:

\theta \in [-\pi, -\tfrac{5\pi}{6}) \cup (\tfrac{5\pi}{6}, \pi]

Units: radians. Breakdown: passes exactly perpendicular (\pm \pi/2) are excluded; the 150-degree threshold is arbitrary and not validated against pass difficulty.

Pressured-throw-in indicator [PAGE 3]:

\mathbb{I}_{\text{pressured}} = \mathbb{1}\{\text{immediate steal}\} \lor \left( \mathbb{1}\{\text{pass}_{1:2} \text{ under pressure}\} \land \neg \mathbb{1}\{\text{pass}_1 \text{ long}\} \right)

Units: binary \{0, 1\}. Dataset counts: 1,466,942 passes (351,247 backward) and 63,414 throw-ins (31,300 pressured) [PAGE 3].

Location bins [PAGE 4]:

B(x) = \lfloor x / 21 \rfloor, \quad x \in [0, 105] \text{ m}, \quad |B| = 5

Table 1 scoring probabilities within 10 actions: 0–21 m throw-in 0.01% vs pass 0.18%; 84–105 m throw-in 0.34% vs pass 2.06% [PAGE 4].

XGBoost hyperparameter grid [PAGE 6]:

\mathcal{H} = \{ \text{max\_depth} \in \{3,5,7\}, \ \eta \in \{10^{-2}, 0.1, 0.3\}, \ N \in \{50,100,200\} \}, \quad \text{patience} = 10

Evaluation metrics: AUC (dimensionless), LogLoss (nats), Brier Score (dimensionless MSE) [PAGE 7–8]. Open play offensive model: AUC 0.790, LogLoss 0.043, Brier 0.008 [PAGE 7].

Simulation kernel [PAGE 9–10]:

L \sim f_{\text{goal kick}}(l \mid l > 40 \text{ m}), \quad \Delta t \sim f_{\text{delay}}(\Delta t), \quad y_{\text{end}} \sim \mathcal{U}\{n : \|s - s_n\|_2 < 10 \text{ m}\}

Units: meters for clearance length L and tolerance; seconds for delay \Delta t.

Aggregated possession value difference [PAGE 12–15]:

\Delta \text{PV} = \text{PV}_{\text{boot}} - \text{PV}_{\text{pass}}, \quad \text{unit: xG over a season}

Table 4: defensive third ΔPV +0.73 (50% pressing), +0.91 (75%), +1.08 (100%) [PAGE 14]. Table 5 defensive third: observed −0.17, naive boot-only +0.91, learned policy +1.00 [PAGE 15]. One goal corresponds to approximately one expected league point [PAGE 12].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage begins with Charles Reep and Benjamin (1968), who argued most goals follow fewer than five passes, leading to the mistaken conclusion that direct play should dominate possession-based styles [PAGE 16–17]. Hughes and Franks (2005) corrected this observational fallacy by analyzing passing sequences, shots, and goals [PAGE 16]. The present work inherits VAEP (Decroos et al., 2019) and un-xPass (Robberechts et al., 2023) for action and state valuation [PAGE 3, 6–7, 16–17]. Prior throw-in literature—McKinley, Dona and Swartz, Monte, and Bransen et al.—treated throw-ins only from an offensive standpoint [PAGE 3, 16]; Cascioli et al. are the first to model intentionally conceding possession to gain an opponent throw-in in advanced areas [PAGE 16]. Markov decision process approaches (Sandholtz and Bornn, 2020; Van Roy et al., 2023) struggled with sparse data and rich contextual information [PAGE 16], motivating the tabular XGBoost choice here [PAGE 6].

Multi-week traps: Training data spans 2020–2024 across six competitions [PAGE 3], while testing isolates Serie A 2023/24 [PAGE 12–15], risking league-specific pressing and tactical drift over a single season. Reep’s error of extrapolating aggregate counts into tactical prescription [PAGE 16] is echoed if coaches adopt “always boot in the defensive third” without the learned policy’s contextual gating [PAGE 15]. The paper’s conclusion that modern build-up play is “excessively demonized” [PAGE 16] reverses a two-decade trend, creating a recency-bias trap where contrarianism overrides context-specific validation.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: The introduction describes the sideline shout “BOOT IT!” as a pre-2000s defensive reflex when defenders had little passing responsibility [PAGE 1]. Under modern counter-pressing, defenders may regress to this habit precisely when patient retention is most valuable, generating crisis-induced suboptimality. Counter-trap: If a team publicly adopts the booting policy, opponents adjust by pressuring throw-ins less aggressively or by positioning to win the second ball immediately. The model’s value collapses as pressure probability drops; Table 4 shows the middle-third edge vanishes at 50 percent pressing (−0.90 PV) [PAGE 14]. Clock: Throw-in delay \Delta t is an explicit feature because the time to reorganize a press alters state value [PAGE 8–9]. A quick throw-in nullifies the regrouping benefit cited in the introduction [PAGE 1]. Recursive depth: The learned policy achieves 82 percent accuracy on the 2023/24 Serie A test season [PAGE 15], implying opponents can exploit the 18 percent of misclassified states. A game-theoretic mixed strategy with randomization is required to prevent counter-adaptation; the paper’s custom policy moves in this direction but remains trained on model-generated ratings, creating a fixed-point risk.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical veto: Clearance length is proxied by goalkeeper goal kicks longer than 40 meters [PAGE 9]. Goalkeepers kick from a static placement with a different kinematic chain than an outfield player clearing under pressure; biomechanical equivalence is unproven. If the kicking player is below the 75th percentile of striking power, the simulated throw-in ends too far upfield, inflating PV_boot. Weather veto: Wind and precipitation alter long-ball trajectory and bounce after touchline exit; neither wind speed nor surface condition appears in the feature set [PAGE 7–8]. The y-location (touchline proximity) is explicitly null-weighted by the model [PAGE 10], which is valid only if wind does not systematically push the ball toward the far touchline. Physical pitch dimensions: bins assume 105-meter length [PAGE 4]; non-standard pitch lengths break bin boundaries. Veto adjudication: Any match with sustained wind above 15 km/h, extreme pitch wear near touchlines, or a goalkeeper executing an outfield clearance should invalidate the booting recommendation unless the model is retrained with those covariates.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto 1 (Pressing failure): Counterfactual—pressure fraction p < 0.60 in the middle third. From Table 4 [PAGE 14], ΔPV at p = 0.50 is −0.90; at p = 0.75 is −0.38; at p = 1.00 is +0.13. Prediction: below p ≈ 0.60, the booting option is dominated by backward passing; a verifiable veto trigger is observed pressure rate below 60 percent on opponent throw-ins over a five-match window.

Veto 2 (Pitch region): Counterfactual—ball in the offensive third. Table 4 [PAGE 14] shows ΔPV ≈ −10.41 to −10.88 across all pressure levels. Prediction: booting from the offensive third is never optimal; the veto is absolute and independent of pressing intensity or weather.

Veto 3 (Individual kicking capacity): Counterfactual—outfield player’s maximum clearance distance is less than the simulated goal-kick draw (right-tail distribution above 40 meters) [PAGE 9]. Prediction: for players whose in-season observed long-pass completion beyond 40 meters is below league median, the simulated boot overstates field position by at least 15 meters; PV_pass exceeds PV_boot by margin ε > 0.01 xG. Verification: compare simulated clearance end locations against the player’s actual long-pass distribution over three matches.
</RLVR_COUNTERFACTUAL_VETOES>