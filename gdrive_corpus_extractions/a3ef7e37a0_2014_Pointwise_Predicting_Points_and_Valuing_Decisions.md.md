---
source: "2014 Pointwise Predicting Points and Valuing Decisions.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 12
model: nvidia:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3502
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about "Pointwise: Predicting Points and Valuing Decisions in Real Time with NBA Optical Tracking Data" from 2014 by Cervone et al.

I need to follow strict invariants:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important notes:
- The source text provided is from pages 1-9 apparently (looks like pages 1-9 based on footer markers "2014 Research Paper Competition Presented by: 1" through "9"). Wait, the text shows page footers: page 2, page 3, page 4, page 5, page 6, page 7, page 8, page 9. Page 1 doesn't have a visible footer in the excerpt but the title page is page 1.
- I must cite exact [PAGE N] markers. I need to infer page numbers from the text. The document seems to be 9 pages based on the provided text ending at page 9. But the user says PAGES: 12. Hmm. The provided text only goes up to page 9. I should cite only pages that are actually visible in the source text: pages 1-9. The user says PAGES: 12 but only provided text up to page 9. I should cite pages I can see.
- I must use verbatim quotes where citing.
- No betting lines.
- No fake toy equations. Use formal LaTeX.

Let me structure the response:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words).
- Discuss EPV as conditional expectation: E[points | spatial configuration at time t].
- Markovian assumption: decision depends only on current spatial configuration.
- Macrotransitions (passes, shots, turnovers) vs microtransitions (movements).
- Competing risks for macrotransition probabilities.
- Coarsened court space as homogeneous Markov chain.
- EPVA formula: sum over touches of [EPV_player(t) - EPV_replacement(t)].
- Shot satisfaction formula: EPV_realized_shot - EPV_conditional_pass.
- Gray zones: equations are garbled in source text (missing actual math due to PDF extraction), Markov assumption may fail in set plays, sampling bias (only 13 arenas, half coverage), replacement level defined as league-average not true replacement, computational cost (several hours, hundreds of processors, 4TB memory), Dwight Howard corner 3 as overfitting example.
- Multi-hop: tracking data -> spatial config -> decision probabilities -> future path distribution -> conditional expectation -> point value -> player metrics -> strategic inference.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown.
- Define EPV(t) = E[S_T | X_t] where S_T is terminal points, X_t is spatial state at time t. Units: points (dimensionless expected count).
- Macro/micro split: EPV(t) = sum_a P(a | X_t) * EPV(t + delta_t | action a). Units: points.
- Competing risks: hazard lambda_k(t | X_t) for event k in {pass, shot, turnover}.
- Markov chain on coarsened court cells.
- EPVA = sum_{touches i} [EPV_i(end) - EPV_i(start)] or specifically difference from league average baseline.
- Shot Satisfaction = EPV(shot realized) - EPV(pass counterfactual).
- Cite pages: [PAGE 1] abstract, [PAGE 2] model definition, [PAGE 3] Markov footnote, [PAGE 4] EPVA, [PAGE 5] shot satisfaction, [PAGE 6] discussion, [PAGE 7] appendix data, [PAGE 8] figures, [PAGE 9] tables.
- Breakdown regimes: Markovian assumption breaks down for scripted set plays (pick-and-roll), sampling bias when half arenas lack cameras, overfitting with rare behaviors (Dwight Howard corner 3), continuous-time discretization requires small time windows.

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps.
- Lineage: microeconomics utility, chess analogy, baseball WAR [10], football/run value [6,7], competing risks survival analysis [3,4], spatial statistics [5], INLA [8,9], factorized point process intensities [11].
- Multi-week traps: small-sample EPVA rankings unstable due to only 11-17 games observed for some players (Table 1 note), season-long shot satisfaction needs 500 touches minimum but still biased by arena coverage, replacement-level defined as league average not marginal replacement, EPV-added sum zero by definition (footnote 3) creating residual-like interpretation.
- Historical context: 2012-13 SportVU only in half arenas, full coverage 2013-14.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- This is a bit abstract. Need to interpret in context of the paper. Crisis habit regression: under pressure (e.g., Spurs down 2 with <10 sec), players regress to habitual decisions. Parker drives then passes. Counter-trap: defense anticipates the high-EPV option and shuts it down. Clock: shot clock/game clock pressure changes decision space.
- Discuss how EPV captures dynamic value but not psychological crisis regression unless modeled. Counter-trap: defense lowers EPV of highest-value options, forcing suboptimal choices. Clock: endgame possessions (Spurs/Cavaliers example) compress time, altering macrotransition hazards.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- Physical: court dimensions, hoop height, ball physics constrain microtransitions.
- Biomechanical: player shooting percentages vary by location (Chris Paul range, Rubio restricted area), physical fatigue not modeled (paper ignores it).
- Weather: indoor sport, no weather veto. But arena lighting/camera calibration could affect tracking.
- Veto proof: EPV model assumes Markov property; physical constraints (defender between passer and receiver) are covariates. Biomechanical limits (shooting range) enter via player-specific random effects.
- No weather because indoor controlled environment.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning from Verifiable Rewards? Or some verification framework. I need to create 3 verifiable counterfactual veto scenarios based on the paper.
- Scenario 1: Markov assumption veto. If a possession runs a scripted pick-and-roll, EPV estimated under Markov assumption misprices the possession because current state doesn't capture the designed sequence. Prediction: EPV error correlated with presence of pick-and-roll; testable by comparing EPV predictions on iso vs pick-and-roll possessions.
- Scenario 2: Sampling bias veto. Table 1 rankings (Chris Paul +3.48, Ricky Rubio -3.33) are biased because players observed only in away/home subset of arenas. Prediction: re-ranking with full 2013-14 coverage changes top/bottom 10 membership by >30%.
- Scenario 3: Replacement-level veto. EPVA compares to league-average player in same situation, not true replacement. Prediction: a player with high usage but average decision quality gets inflated EPVA relative to a low-usage efficient player; testable by simulating replacement lineups.

Word count check: Need >=1000 words total across sections. THINK_TRACE alone >=400 words.

Let me draft carefully, ensuring no betting language. Use "points" not "odds". No spreads/totals/moneylines.

Citations: I need to use [PAGE N] format. Let's map:
- Title/Abstract: Page 1 (no footer visible but it's the first page).
- Page 2 footer visible.
- Page 3 footer visible.
- Page 4 footer visible.
- Page 5 footer visible.
- Page 6 footer visible.
- Page 7 footer visible.
- Page 8 footer visible.
- Page 9 footer visible.

I will cite [PAGE 1] for abstract and intro, [PAGE 2] for EPV definition and possession model, [PAGE 3] for Markov footnote and Spurs example, [PAGE 4] for EPVA, [PAGE 5] for shot satisfaction, [PAGE 6] for discussion, [PAGE 7] for appendix data, [PAGE 8] for figures, [PAGE 9] for tables.

Formal LaTeX equations:
EPV(t) = \mathbb{E}[S \mid \mathcal{X}_t]
where S is terminal points scored (units: points), \mathcal{X}_t is spatial configuration.

Macro/micro:
EPV(t) = \sum_{a \in \mathcal{A}} P(a \mid \mathcal{X}_t) \, \mathbb{E}[EPV(t') \mid a, \mathcal{X}_t]

Competing risks:
\lambda_k(t \mid \mathcal{X}_t) = \lim_{\Delta t \to 0} \frac{P(T \in [t, t+\Delta t), K=k \mid T \ge t, \mathcal{X}_t)}{\Delta t}

EPVA:
\mathrm{EPVA} = \sum_{i=1}^{N} \left[ \mathrm{EPV}^{\text{player}}_i(t_{\text{end}}) - \mathrm{EPV}^{\text{league-avg}}_i(t_{\text{start}}) \right]
(Actually from text: difference across touches; footnote says sum of changes is zero by definition, so they compare to replacement baseline).

Shot Satisfaction:
\mathrm{SS} = \frac{1}{N_{\text{shots}}} \sum_{j} \left[ EPV(\text{shot realized}) - EPV(\text{pass counterfactual at same } t) \right]

Units: points per game (EPVA), points per shot attempt (shot satisfaction).

Breakdown regimes: Markov assumption fails for choreographed sequences; sampling bias with partial arena coverage; small-sample overfitting (Dwight Howard corner 3); continuous-time discretization requires \Delta t small enough that multiple macrotransitions don't occur in one window.

I will write the response now, ensuring each XML section is present and content is substantial.

Word count estimation:
THINK_TRACE: aim ~450 words.
SOURCE_OPERATORS_AND_EQUATIONS: ~300 words.
RETROCAUSAL_GENEALOGY: ~200 words.
RECURSIVE_THEORY_OF_MIND: ~200 words.
CROSS_LAYER_VETO_ADJUDICATION: ~150 words.
RLVR_COUNTERFACTUAL_VETOES: ~200 words.
Total ~1500 words. Good.

Need to be careful: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." I won't invent any. All equations are from the paper conceptually, formalized in LaTeX.

Let's write.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's central object is expected possession value (EPV), defined as a conditional expectation over terminal possession outcomes given the instantaneous spatial state of the court. Formally, if \(\mathcal{X}_t\) denotes the full-resolution configuration of all ten players, referees, and the ball at time \(t\) during a possession, and \(S\) is the number of points scored by the offense by the end of that possession, then \(\mathrm{EPV}(t) = \mathbb{E}[S \mid \mathcal{X}_t]\). The unit is expected points, a dimensionless probability-weighted count. Because basketball possessions are continuous in space and time, the authors decompose the ballhandler's options into macrotransitions—passes, shots, and turnovers that consume several seconds—and microtransitions—ball movements that evolve instantaneously. The possession model thus factorizes EPV at time \(t\) as a weighted sum over possible next actions: \(\mathrm{EPV}(t) = \sum_{a \in \mathcal{A}} P(a \mid \mathcal{X}_t) \, \mathbb{E}[\mathrm{EPV}(t') \mid a, \mathcal{X}_t]\), where \(t'\) is the state after action \(a\) completes or after an infinitesimal microtransition.

A gray-zone audit must flag three structural vulnerabilities. First, the model is explicitly Markovian: the decision at time \(t\) depends only on \(\mathcal{X}_t\), not on the history of the possession. The authors acknowledge this loses efficiency when offenses execute choreographed sequences such as pick-and-rolls, because the current spatial configuration does not encode the designed multi-step play. Second, the data are sampled unevenly: during the 2012-13 season SportVU cameras covered only 13 of 29 arenas, so players such as Chris Paul and LeBron James were observed primarily in away games, introducing selection bias into EPVA rankings that the authors themselves note could be eliminated only with full 2013-14 coverage. Third, model fitting is computationally extreme—several hours on hundreds of processors with over four terabytes of memory—raising overfitting risks for rare spatiotemporal motifs, exemplified by the "Dwight Howard corner 3" anomaly.

The derivation chains tracking coordinates to event hazards via competing risks. For each discrete event type \(k \in \{\text{pass, shot, turnover}\}\), the instantaneous macrotransition probability is governed by a hazard \(\lambda_k(t \mid \mathcal{X}_t)\), estimated with spatially smoothed random effects for individual player tendencies. The court is coarsened into cells and treated as a homogeneous Markov chain to compute continuation values after a macrotransition. Microtransitions are recovered from macrotransition components under local space-time smoothness assumptions. Player value is then not the raw sum of EPV changes—which is zero by definition, much like regression residuals—but the difference between a player's EPV trajectory and a league-average replacement baseline, aggregated over touches as EPV-added over replacement (EPVA), measured in points per game. Shot satisfaction similarly contrasts realized shot EPV with the counterfactual EPV of passing at the same instant, measured in points per shot attempt.

The multi-hop path is therefore: optical coordinates \(\rightarrow\) spatial state \(\mathcal{X}_t \rightarrow\) competing-risk decision hazards \(\rightarrow\) distribution over future possession paths \(\rightarrow\) conditional point expectation \(\rightarrow\) player-level decision metrics \(\rightarrow\) strategic inference about shot selection, passing value, and defensive scheme design.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and units:

1. **EPV definition** (page 2, §1): \(\mathrm{EPV}(t) = \mathbb{E}[S \mid \mathcal{X}_t]\), where \(S \in \{0,1,2,3\}\) is terminal points scored and \(\mathcal{X}_t\) is the spatial configuration at time \(t\). Units: expected points (dimensionless). Verbatim: "EPV is a conditional expectation – the expected number of points the offense will score, given the spatial configuration of the players and ball at time during the possession" [PAGE 2].

2. **Macro/microtransition decomposition** (page 2): \(\mathrm{EPV}(t) = \sum_{a \in \mathcal{A}} P(a \mid \mathcal{X}_t) \, \mathbb{E}[\mathrm{EPV}(t') \mid a, \mathcal{X}_t]\), where \(\mathcal{A} = \{\text{pass, shot, turnover}\} \cup \{\text{micro-movements}\}\). The source renders this algebra with missing glyphs due to PDF extraction, but the semantic operator is a law of total expectation over actions.

3. **Competing-risk hazard** (page 2): \(\lambda_k(t \mid \mathcal{X}_t) = \lim_{\Delta t \to 0} \frac{\Pr(T \in [t, t+\Delta t), K=k \mid T \ge t, \mathcal{X}_t)}{\Delta t}\) for event \(k\). Units: inverse seconds (s\(^{-1}\)). Situational covariates include defender positioning between ballhandler and teammate; spatially smoothed random effects capture individual tendencies [PAGE 2].

4. **Markov chain on coarsened court** (page 2): court space is discretized into cells and modeled as a homogeneous Markov chain, a technique common in baseball and football analytics [PAGE 2]. Breakdown regime: valid only if macrotransitions are rare within a single \(\Delta t\) window; if multiple discrete events can occur in one window, the coarsened chain is misspecified.

5. **EPVA** (page 4): \(\mathrm{EPVA} = \sum_{i=1}^{N_{\text{touches}}} \left( \mathrm{EPV}^{\text{player}}_i - \mathrm{EPV}^{\text{league-avg}}_i \right)\), aggregated per game. Units: points per game. Chris Paul: +3.48; Ricky Rubio: -3.33 [PAGE 4, TABLE 1 on PAGE 9]. Verbatim: "Of all NBA players in 2012-13, Chris Paul had the highest EPVA at +3.48 per game" [PAGE 4].

6. **Shot satisfaction** (page 5): \(\mathrm{SS} = \frac{1}{N_{\text{shots}}} \sum_{j} \left( \mathrm{EPV}(\text{shot realized}) - \mathrm{EPV}(\text{pass counterfactual at } t_j) \right)\). Units: points per shot attempt. Carmelo Anthony averages +0.053 [PAGE 5].

Breakdown regimes and singularities:
- **Markov failure**: when offenses run scripted sequences (pick-and-rolls), \(\mathcal{X}_t\) omits play-design history, so EPV is systematically mispriced for set plays [PAGE 6].
- **Sampling bias**: 2012-13 coverage spanned only 13 arenas; home/away splits distort player comparisons [PAGE 1 appendix, PAGE 7].
- **Overfitting singularity**: rare behaviors such as a corner 3 by a non-shooter can corrupt spatially smoothed random effects if regularization is insufficient [PAGE 2].
- **Continuous-time discretization**: macrotransition probabilities are instantaneous; if \(\Delta t\) is too coarse, competing risks overlap and the likelihood is undefined without event-ordering assumptions.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The EPV framework descends from three lineages. First, microeconomic decision theory: the authors explicitly analogize EPV to utility, calling it "a new microeconomics for the NBA" and framing each possession as a high-speed chess match where the decisive move may precede the terminal shot by several actions [PAGE 1]. Second, sports win-probability and run-value models: Markovian approaches from American football and baseball are cited as precedent, though the authors note applying them to continuous-time, continuous-space basketball is novel [PAGE 2, footnote 2]; baseball's WAR provides the conceptual template for replacement-level comparison in EPVA [PAGE 4, footnote 4]. Third, statistical methodology: competing-risks survival analysis from Cox [3] and Prentice et al. [4], spatial statistics from Ripley [5], INLA and SPDE methods from Rue et al. [8,9], and factorized point-process intensities from Miller et al. [11].

Multi-week traps emerge from the temporal structure of the data. Because SportVU covered only half the league's arenas in 2012-13, a player's EPVA estimate is conditioned on a non-random subset of venues; Table 1's footnote warns that Paul and James were observed in only 11 and 17 games respectively, and that their in-sample shooting splits diverge from season averages [PAGE 9]. Consequently, a multi-week evaluation built on these rankings risks overfitting venue-specific defensive spacing rather than stable player decision quality. Shot satisfaction requires a minimum of 500 touches, but even that threshold does not correct for the fact that some teammates appear in the data only intermittently, biasing the value of passing options [PAGE 5, TABLE 2]. The replacement baseline is defined as league-average, not true marginal replacement, so EPVA conflates role and decision quality; a high-usage player facing difficult options may rank below a low-usage player in trivially easy situations. Finally, because EPV changes sum to zero within a possession by definition, EPVA is a residual-like statistic whose sign depends entirely on the chosen baseline, making week-to-week rankings unstable without a fixed counterfactual [PAGE 4, footnote 3].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes the tendency of players under temporal pressure to revert to ingrained decision patterns rather than compute the spatially optimal action. The Spurs' final possession against Cleveland—down by 2 with under 10 seconds—illustrates this: Tony Parker drove into the paint, collapsing defenders, and kicked to Kawhi Leonard for an open 3 [PAGE 3]. Parker's drive increased EPV twice, first by penetrating and second by passing, yet a conventional boxscore credits only the assist. Under a crisis-habit model, Parker's penetration is not random; it is a high-probability habit under deadline pressure that manipulates defensive positioning and thereby raises the EPV of the subsequent pass.

A counter-trap operates when the defense recognizes the highest-EPV option and systematically removes it, forcing the offense into lower-value branches. EPV can be used to "design a defense that consistently shuts off the highest EPV options to systematically lower an opponent's EPV" [PAGE 6]. Recursive theory of mind enters because the offense anticipates the defensive counter-trap: if the defense takes away the corner 3, the ballhandler's EPV surface shifts toward mid-range shots or drives, changing the competing-risk hazards \(\lambda_k(t \mid \mathcal{X}_t)\). The model as specified assumes Markovian decisions, so it does not explicitly represent this second-order anticipation unless the spatial configuration \(\mathcal{X}_t\) encodes defender intent.

Clock pressure is the exogenous constraint that truncates the possession tree. As the shot clock or game clock winds down, the set of feasible macrotransitions shrinks; low-EPV, low-risk actions (safe passes that reset the clock) may dominate high-EPV, high-variance actions (contested early shots). EPV is calculated continuously and responds to major events, but the paper does not model clock state as a covariate in the hazard function; time enters only implicitly through possession phase. Thus, endgame EPV surfaces may be mispriced because the model lacks an explicit clock-absorption boundary condition.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: Basketball is played on a fixed court with bounded dimensions, a 10-foot rim, and standardized ball physics. Microtransitions are constrained by maximum acceleration, passing lanes defined by line-of-sight and defender interception cones, and shot-release geometry. These are physical vetoes: no EPV estimate can assign value to a pass through a defender or a shot from outside the court. The model incorporates defender position as a covariate in competing-risk hazards, partially satisfying physical constraints [PAGE 2].

Biomechanical layer: Player-specific shooting efficiency varies by location and contest level. Chris Paul is more valuable than league average at long-range because he is an above-average shooter from that range and can penetrate [PAGE 4]; Ricky Rubio is less valuable near the basket despite high league-average EPV there because his shooting percentage in the restricted area is poor [PAGE 4]. Biomechanical limits enter via spatially smoothed random effects for individual tendencies [PAGE 2], but fatigue is not modeled. The paper ignores fouls and focuses on half-court possessions, so end-of-game fatigue and bonus situations are exogenous vetoes not represented in the state space [PAGE 2].

Weather layer: The NBA is an indoor, climate-controlled sport; there is no meteorological veto. The only environmental factor is arena-level camera calibration and SportVU coverage, which was uneven in 2012-13 [PAGE 7]. Lighting or camera angle inconsistencies could inject measurement error into \(\mathcal{X}_t\), but this is a data-quality veto rather than a weather veto.

Adjudication: Any EPV-derived decision metric must pass a veto screen—if the proposed action violates physical court boundaries, biomechanical capability, or observed arena coverage, its EPV is set to undefined or zero. The Markovian assumption is the strongest theoretical veto: when offensive actions form a designed sequence rather than a state-dependent response, EPV loses efficiency [PAGE 6].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios:

1. **Markov veto on scripted plays**: Counterfactual—replace all pick-and-roll possessions with isolated 1v1 situations while holding \(\mathcal{X}_t\) fixed at the moment of ball-screen initiation. Verifiable prediction: EPV estimated under the Markov assumption will systematically overestimate the value of the ball-handler's drive because the current spatial configuration omits the screener's future roll trajectory; the residual error \(\mathrm{EPV}_{\text{Markov}} - \mathrm{EPV}_{\text{true}}\) will be positively correlated with pick-and-roll frequency and negatively correlated with isolation frequency. This is falsifiable by comparing EPV predictions against actual points scored on play-type-stratified possessions.

2. **Sampling-bias veto on venue-stratified EPVA**: Counterfactual—recompute 2012-13 EPVA rankings using only games from arenas with SportVU coverage versus a holdout set of games from uncovered arenas (via boxscore proxies). Verifiable prediction: the top-10 and bottom-10 EPVA lists in Table 1 will exhibit greater than 30% membership turnover between the covered-venue subset and the full-season estimate; Chris Paul's +3.48 and Ricky Rubio's -3.33 will not remain stable because both were observed primarily in away games [PAGE 9]. Failure to observe this turnover would indicate the sampling bias is negligible, contradicting the authors' own caveat.

3. **Baseline veto on replacement definition**: Counterfactual—shift EPVA from a league-average baseline to a true marginal replacement baseline (e.g., the 100th-ranked player at each position) while holding player decision data fixed. Verifiable prediction: players with high usage but average decision quality (e.g., high-volume, mid-efficiency scorers) will experience a larger EPVA decline than low-usage efficient players; the rank correlation between the two EPVA specifications will fall below 0.7. This tests whether EPVA measures decision quality or merely role volume, since the sum of EPV changes within a possession is zero by definition and the baseline determines all signs [PAGE 4, footnote 3].
</RLVR_COUNTERFACTUAL_VETOES>