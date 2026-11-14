---
source: "2019 - Choke or Shine Quantifying Soccer Players' Abilities to Perform Under Mental Pressure - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2019"
pages: 23
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 6467
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about quantifying soccer players' abilities to perform under mental pressure. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user provided pages 1-25 (the text says PAGES: 23 but the content goes up to page 25). The source text has page markers embedded like "2019 Research Papers Competition Presented by: 1", "2", etc. up to 25. I should cite [PAGE N] where N corresponds to the printed page number.

Let me carefully structure this.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit (>=400 words).
- Need to derive how pressure = pre-game + in-game.
- Pre-game uses Gradient Boosted Ranking Trees from expert pairwise rankings.
- In-game uses Binomial scoring intensities modeled via temporal stochastic process (PyMC3 ADVI).
- Performance metrics: Contribution Rating CR = V(s_j) - V(s_i). Decision Rating DR = ECR|s_i,a_i - ECR|s_i. Execution Rating ER = [o_i+] - P(o_i+).
- Pressure classification: top 20% high, middle 60% normal, bottom 20% low.
- Gray zones: pairwise expert ranking lacks ground truth (Appendix A.1, page 21-22); model agreement 73.91% vs inter-expert 79.79%; event data lacks tracking data so precise player locations unknown; pressure and fatigue correlation Pearson r=0.136 (weak, page 18); sample size constraints: at least 900 minutes total, 180 in each high/low pressure (page 9); in-game model trained only on EPL, LaLiga, Bundesliga 2014/2015-2017/2018 (page 5); pre-game model trained on 330 pairwise rankings from 170 games (page 21); action success model validation on 2016/2017 seasons (page 23); Binomial assumption for goals may break down in low-scoring soccer (page 5); time frames T=100 percentages of game (page 5).
- Multi-hop: pressure metric -> label situation -> aggregate metrics per player per pressure level -> compare high vs low -> inform acquisition/training/tactics/lineups.
- Gray-zone audit: the pressure metric is relative ranking, not absolute cardinal scale; percentile cutoffs (20/60/20) are arbitrary thresholds; small sample for some players (e.g., Bonucci 201 high-pressure minutes, page 14); Neymar's 472 high-pressure minutes vs 997 low-pressure (page 16); Liverpool recruitment analysis omits Salah due to too few high-pressure minutes (page 17); "choke or shine" is inferred from observational data, not causal identification.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown.
- Pressure(g, x_t) = Pressure_pre-game(g) × Pressure_in-game(x_t). Wait, the text shows multiplication juxtaposition: "Pressure(g, x_t) = Pressure_pre-game(g) Pressure_in-game(x_t)" (page 2). It's written without explicit operator but implies combination/multiplication. I should state exactly as in text but note it's a combination.
- Pre-game features: team ambition (clustering into 4 groups), game importance (Elo-based simulation, Kendall-Stuart tau-c), recent performance (points last 5 games, deviation from expected via Elo), game context (location, rivalrousness, attendance, coach tenure).
- In-game: T=100 time frames, y_{t+1,home} ~ Binomial(theta_{t,home}), y_{t+1,away} ~ Binomial(theta_{t,away}) (page 5). Scoring intensities estimated via temporal stochastic process, PyMC3 ADVI (page 5).
- Win probability derived from distribution over future goals and current score.
- In-game pressure = sum of increase in win probability and increase in tie probability if team scores at time t (page 4).
- CR(s_i, a_i, o_i) = V(s_j) - V(s_i) (page 7). Units: goal-value contribution (dimensionless expected goal differential).
- ECR|s_i,a_i = P(o_i+) · CR(s_i, a_i, o_i+) + P(o_i-) · CR(s_i, a_i, o_i-) (page 8).
- DR(s_i, a_i) = ECR|s_i,a_i - ECR|s_i (page 8).
- ER(a_i, o_i) = [o_i+] - P(o_i+) (page 8). [o_i+] is indicator 1 if success else 0.
- ECR|s_i = [P(g_{i+1+}|s_i) - P(g_{i+1}|s_{i-1})] - [P(g_{i+1-}|s_i) - P(g_{i-}|s_{i-1})] (page 24, Appendix A.4). Note text has typo P(g_{i+}|s_{i-1}) but I'll cite as given.
- Pressure bins: High = top 20%, Normal = middle 60%, Low = bottom 20% (page 9).
- Aggregations: avg CR per 90, avg CR per 90 per action type, percentile rank CR per 90, avg DR, avg ER per action type, percentile rank ER per action type (page 9).
- Minimum minutes: 900 total, 180 in each high and low pressure (page 9).
- Fatigue check: Pearson r = 0.136 between performance in high-pressure and last quarter excluding high-pressure (page 18).
- Calibration: pre-game model agreement 73.91% vs inter-expert 79.79% (page 21); in-game calibration max deviation 9.61%, typically within 2.5% (page 22); action success AUC-PR examples (page 23); ECR MSE baseline vs model (page 24).
- Breakdown/singularity: Binomial model assumes independent scoring intensities; breaks down if scoring events are not conditionally independent given state or if stoppage time handling via T=100 frames misaligns with actual clock; event data lacks tracking so spatial context approximated; Gradient Boosted Ranking Trees max_depth=6, n_estimators=50 (page 21).

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
- Lineage: Baumeister 1984 choking under pressure (Journal of Personality and Social Psychology) [1]; Gucciardi & Dimmock 2008 conscious processing/depleted attentional resources [10]; Hill et al. 2010 choking in sport review [11]; NBA clutch definitions (games within 5 points with 5 mins left) and baseball runners in scoring position (Related Work, page 19); openWAR baseball [2]; NBA optical tracking Cervone et al. 2014 [6]; Decroos et al. 2018 "Actions Speak Louder Than Goals" [7] for contribution rating; Spearman "Beyond Expected Goals" [20]; Lahvička 2015 Monte Carlo match importance [13]; Phelps et al. 2015 pairwise comparison vs Likert [18].
- Multi-week traps: The paper analyzes 2016/2017 and 2017/2018 plus partial 2018/2019 up to Nov 11, 2018 (page 9). Multi-week trap: early-season pressure vs late-season pressure conflation; Everton example pressure mounts after game 6, manager sacked after game 9, then abates (page 2-3). A player's high-pressure performance in October may reflect squad crisis, not innate clutch trait. Liverpool recruitment 2017/2018 onward (page 17). Neymar Barcelona and PSG (page 16). The "clutch" label may be a retrospective narrative fitted to small samples (Ghezzal 358 high-pressure minutes, Bonucci 201). Survivor bias: players who get subbed off in tense games never accumulate high-pressure minutes. Transfer window timing: Leicester signed Ghezzal Aug 5, 2018 after analysis cutoff (page 10). Multi-week trap: using a single season's pressure ranking to evaluate a player whose role/tactics changed mid-season.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: Under pressure, players regress to habitual decisions. Neymar makes more low/average decisions, fewer high-rated decisions; executions improve (page 16). Dwyer commits more needless fouls in box under pressure (page 11). Manchester United dribbles more under pressure but contribution declines; crossing increases contribution (page 12). Throw-ins: decision ratings increase under pressure, execution same (page 13).
- Counter-trap: Opponents anticipate the player's pressure-induced habits. If Manchester United dribbles under pressure, opponents can compress space; if Liverpool's throw-in behavior shifts under pressure, opposing manager adjusts defensive organization (page 13). Managerial meta-cognition: Leicester deciding whether to buy Aouar/Shaqiri vs Ghezzal based on pressure performance (page 9-10).
- Clock: In-game pressure model uses T=100 time frames; pressure mounts as time winds down in close games (page 2-4). Fatigue vs pressure confound addressed via last-quarter comparison (page 18). The clock creates non-stationarity: feature importance varies non-linearly over time, hence temporal stochastic process (page 5). Crisis moments cluster late in close games, so high-pressure minutes are temporally autocorrelated, violating i.i.d. assumptions in standard performance aggregation.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical layer: Event data lacks tracking; precise player locations unknown (page 8). This vetoes exact spatial modeling of pressure (e.g., defensive pressure from nearby opponents not directly measured). Weather is not in features list (page 2-3, 5); no temperature, precipitation, wind, pitch condition. This is a veto: pressure metric cannot account for weather-induced biomechanical degradation (e.g., wet ball affecting execution rating independently of mental pressure). Biomechanical fatigue: fatigue analysis uses last quarter contribution, but no direct biomechanical load (sprints, accelerations, heart rate) because event data doesn't capture it (page 5, 18). Pearson r=0.136 suggests mental pressure distinct from end-game fatigue, but without tracking data, biomechanical fatigue is proxied crudely by time.
- Weather veto: no weather features in pre-game (location, rivalry, attendance, coach tenure) or in-game (goals, cards, goal difference, Elo, attacking passes, duels won). Therefore, a rainy cold night in Stoke vs dry night in Madrid could shift execution ratings independent of mental pressure; the model would misattribute this to pressure.
- Physical veto proof: The paper explicitly states event data is widely available unlike tracking data (page 1). Thus all spatial pressure (opponent proximity) is latent. Any claim about "execution under pressure" is confounded by unobserved physical pressure (defensive intensity) unless the success model implicitly captures it via historical context. But since execution rating = observed outcome - predicted success probability, and predicted success uses action features including locations of previous actions (page 8), some defensive context is encoded historically but not real-time opponent tracking.
- Adjudication: The paper does not control for weather, pitch state, or biomechanical load; thus high-pressure execution differences could be vetoed by unobserved physical covariates. However, the weak correlation with fatigue (r=0.136) partially mitigates the temporal fatigue veto but not the weather or spatial pressure veto.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
Need 3 verifiable scenarios with predictions. RLVR = Reinforcement Learning via Verifiable Rewards? Or just verifiable scenarios. I'll frame as counterfactual vetoes: if X were true, the paper's conclusion would be falsified.

Veto 1: Weather confound. Prediction: If we re-run the analysis adding match-day precipitation and temperature as covariates, the estimated pressure effect on execution rating for shots (e.g., Mahrez, Aouar) will shrink by >50% or become statistically indistinguishable from zero for at least one of the three Leicester candidates. Verifiable: obtain weather data for EPL/LaLiga/Bundesliga matches 2016-2018, re-estimate ER conditional on pressure and weather.

Veto 2: Tracking data / defensive pressure confound. Prediction: If player tracking data (opponent distance at action onset) is added, the "high-pressure" decision rating decline for Neymar will be partially explained by increased defensive pressure (closer defenders) rather than mental pressure; specifically, the partial correlation between mental pressure score and DR, controlling for nearest-defender distance, will drop below 0.05. Verifiable: use tracking data subset, compute nearest defender distance, re-run DR vs pressure.

Veto 3: Temporal non-stationarity / small-sample selection. Prediction: If we restrict to players with >500 high-pressure AND >500 low-pressure minutes and require pressure situations to be balanced across match minutes (not clustered in last 10 minutes), the correlation between high-pressure contribution and team success (e.g., Liverpool signings) will attenuate; the observed "Liverpool buys clutch players" effect will not survive a leave-one-season-out cross-validation (2016/17 vs 2017/18) with p > 0.10. Verifiable: split by season, recompute Figure 11, test stability of sign of difference (high - low) for each signing.

Need to ensure no betting lines. No spreads, totals, moneylines, odds. The paper mentions win probability but that's not betting odds; it's model-derived probability. I can mention win probability but not betting odds.

Word count: >=1000 words total across sections. THINK_TRACE >=400 words. Let's aim for ~200+ words in each of the other sections to safely exceed 1000.

Citations: Use [PAGE N] markers. The printed page numbers are visible in text. Let's map key content:
- Page 1: intro, use cases, methodology outline.
- Page 2: pressure factors, Pressure = pre × in-game.
- Page 3: Figure 1 Everton, pre-game pressure.
- Page 4: in-game pressure, Figure 2 Everton-Watford, pressure = increase in win prob + tie prob if score.
- Page 5: in-game model, T=100, Binomial, features, ADVI, EPL/LaLiga/Bundesliga 2014/15-2017/18.
- Page 6: three aspects, table examples, Figure 3 Silva.
- Page 7: CR formula, Decroos et al.
- Page 8: DR, ECR chosen action, ECR across all actions features.
- Page 9: ER formula, pressure bins top 20/mid 60/bottom 20, aggregations, minutes thresholds (900 total, 180 each), leagues and seasons.
- Page 10: Mahrez, replacements, Ghezzal, minutes.
- Page 11: Dwyer fouls, Figure 5.
- Page 12: Man United dribble vs cross, 1818 high-pressure minutes, 19.41 to 43.88.
- Page 13: throw-ins, Klopp, Figure 7, Liverpool throw-in coach.
- Page 14: Figure 8 Juventus defenders, PSG midfielders, Chelsea strikers, minutes listed.
- Page 15: Neymar, Figure 9, 997 low, 472 high.
- Page 16: MLS, Figure 10 Davies/Adams/Barco, minutes.
- Page 17: Liverpool recruitment, Figure 11, Salah omitted.
- Page 18: fatigue, Figure 12, Pearson r=0.136.
- Page 19: related work, NBA, baseball, cognitive sciences.
- Page 20: references start.
- Page 21: Appendix A.1 pre-game evaluation, 330 pairwise rankings, 170 games, 483 validation, 73.91% vs 79.79%, Gradient Boosted Ranking Trees max_depth 6, n_estimators 50.
- Page 22: Appendix A.2 in-game model, 4232 games, 70-30 split, calibration max deviation 9.61%.
- Page 23: Appendix A.3 action success, 2430 games train, 2.96M actions, validation 2404 games 2.92M actions, Table A.1 AUC-PR.
- Page 24: Appendix A.4 ECR next action, MSE table.
- Page 25: end.

I need to cite exact [PAGE N] markers. I'll reference the printed page numbers as they appear in the source text (e.g., [PAGE 2], [PAGE 9]).

Now, word count management.

THINK_TRACE: I'll write a long multi-hop derivation.
- Start with pressure decomposition.
- Derive how performance metrics combine.
- Trace through the causal chain: pressure label -> metric aggregation -> player comparison -> club decision.
- Gray-zone audit: arbitrary 20/60/20 thresholds, no ground truth for pre-game, event data limitations, sample size, temporal clustering, correlation vs causation, fatigue confound partially addressed.
- Word count target: ~450-550 words.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX blocks and breakdown.
- Word count target: ~250-300 words.

RETROCAUSAL_GENEALOGY: Lineage and multi-week traps.
- Word count target: ~200-250 words.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- Word count target: ~200-250 words.

CROSS_LAYER_VETO_ADJUDICATION: Veto proof.
- Word count target: ~200-250 words.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios + predictions.
- Word count target: ~200-250 words.

Total will be well over 1000.

Need to ensure no toy equations. I must not invent fake ratios. I'll only use equations from the paper. I will explicitly label assumptions and breakdown regimes.

Let's draft carefully.

Important: The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." I should include verbatim quotes where useful, with [PAGE N]. Since the text is provided, I can quote short phrases.

Let's write.

THINK_TRACE:
(Derivation)
The paper constructs total pressure as a product/combination of pre-game and in-game components [PAGE 2]. Pre-game pressure is a learned rank from expert pairwise comparisons [PAGE 2]. In-game pressure is defined as the sum of the increase in win probability and tie probability if the possessing team scores at time t [PAGE 4]. This is operationalized via a Binomial scoring-intensity model over T=100 temporal frames [PAGE 5]. The performance side has three layers: contribution rating CR = V(s_j) - V(s_i) [PAGE 7]; decision rating DR = ECR|s_i,a_i - ECR|s_i [PAGE 8]; execution rating ER = [o_i+] - P(o_i+) [PAGE 8]. Actions are bucketed into high/normal/low pressure by percentile (top 20 / middle 60 / bottom 20) [PAGE 9]. The multi-hop inference is therefore: raw event stream -> game-state win-probability model -> pressure percentile -> action-level CR/DR/ER -> per-90-minute aggregation conditional on pressure bin -> player/team comparison -> acquisition/training/tactic/lineup prescription.

Gray-zone audit: (1) No ground-truth pressure label exists; the pre-game ranker relies on 19 experts and 330 pairwise judgments, achieving 73.91% agreement versus 79.79% inter-expert [PAGE 21], implying irreducible label noise of roughly 6 percentage points. (2) Event data lacks tracking, so precise player locations and defensive proximity are unobserved [PAGE 8]; the model approximates spatial context via previous action locations, not real-time opponent geometry. (3) The 20/60/20 pressure binning is an arbitrary cardinalization of an ordinal ranker; a situation at the 19th and 21st percentile is treated as categorically different despite negligible rank distance. (4) Sample floors are low: 900 total minutes and only 180 minutes in each extreme bin [PAGE 9]; Bonucci has 201 high-pressure minutes [PAGE 14], Ghezzal 358 [PAGE 10], Neymar 472 [PAGE 16], making individual "clutch" labels statistically fragile. (5) Pressure and fatigue co-vary late in matches; the authors counter with a weak Pearson r=0.136 between high-pressure contribution and last-quarter contribution excluding high-pressure situations [PAGE 18], but this does not rule out biomechanical confounds within high-pressure minutes themselves. (6) The in-game Binomial model assumes independent scoring intensities per frame [PAGE 5]; in low-scoring soccer, a single goal radically changes state, so the Binomial approximation may break down precisely in the high-pressure, close-game regimes the paper studies.

That's good, ~400 words.

SOURCE_OPERATORS_AND_EQUATIONS:
Write formal equations with units and page citations.

Pressure:
P(g, x_t) = P_pre(g) · P_in(x_t) [PAGE 2], dimensionless index; combination operator not explicitly specified but juxtaposition implies multiplicative or joint score.

Pre-game features [PAGE 2-3]: team ambition (k-means into 4 clusters using prior results, transfer value, loan spending, Football Manager reputation); game importance (Elo simulation, Kendall-Stuart tau-c between game result and final outcome); recent performance (last-5-game points, Elo deviation); game context (home/away, rivalry, attendance, coach tenure). Model: Gradient Boosted Ranking Trees, max_depth=6, n_estimators=50 [PAGE 21]. Validation: 73.91% vs inter-expert 79.79% [PAGE 21].

In-game [PAGE 4-5]: T=100 frames; y_{t+1,home} ~ Binomial(θ_{t,home}), y_{t+1,away} ~ Binomial(θ_{t,away}); θ estimated via temporal stochastic process with PyMC3 ADVI [PAGE 5]; trained on 4232 games EPL/LaLiga/Bundesliga 2014/15–2017/18, 70–30 temporal split [PAGE 22]; win/tie probabilities derived from convolution of future-goal distributions with current score. In-game pressure = ΔP(win | score) + ΔP(tie | score) [PAGE 4]. Calibration max deviation 9.61%, typically within 2.5% [PAGE 22].

Performance [PAGE 7-8]: CR(s_i,a_i,o_i) = V(s_j) - V(s_i), units of expected goal value; ECR|s_i,a_i = P(o_i+)·CR(s_i,a_i,o_i+) + P(o_i-)·CR(s_i,a_i,o_i-) [PAGE 8]; DR(s_i,a_i) = ECR|s_i,a_i - ECR|s_i [PAGE 8]; ER(a_i,o_i) = [o_i+] - P(o_i+), [o_i+] ∈ {0,1} [PAGE 8]; ECR|s_i = [P(g_{i+1+}|s_i) - P(g_{i+}|s_{i-1})] - [P(g_{i+1-}|s_i) - P(g_{i-}|s_{i-1})] [PAGE 24].

Pressure bins: High top 20%, Normal middle 60%, Low bottom 20% of global pressure ranking [PAGE 9]. Aggregations: avg CR per 90, avg CR per 90 per action type, percentile rank CR per 90, avg DR, avg ER per action type, percentile rank ER per action type [PAGE 9]. Eligibility: ≥900 total minutes, ≥180 minutes in high and ≥180 in low [PAGE 9]. Fatigue check: Pearson r = 0.136 [PAGE 18].

Breakdown/singularity: Binomial independence assumption fails if goals arrive in clusters (set-piece rebounds, red-card power plays); T=100 frame discretization misaligns with stoppage time; event-data spatial approximation vetoes exact defensive-pressure conditioning; small-n bins invalidate asymptotic inference for individual players.

Word count ~300.

RETROCAUSAL_GENEALOGY:
Historical lineage: Baumeister (1984) choking under pressure and self-consciousness [PAGE 19, ref 1]; Gucciardi & Dimmock (2008) conscious processing vs depleted attention [PAGE 19, ref 10]; Hill et al. (2010) review of choking in sport [PAGE 19, ref 11]; NBA clutch definitions (within 5 points, 5 minutes left) and baseball runners in scoring position as hand-labeled pressure [PAGE 19]; openWAR baseball [PAGE 19, ref 2]; Cervone et al. (2014) NBA optical tracking decision valuation [PAGE 19, ref 6]; Decroos et al. (2018) action-value foundation for CR [PAGE 7, ref 7]; Lahvička (2015) Monte Carlo match importance [PAGE 19, ref 13]; Phelps et al. (2015) pairwise comparison vs Likert [PAGE 19, ref 18].

Multi-week traps: The dataset spans 2016/2017, 2017/2018, and partial 2018/19 through Nov 11 [PAGE 9]. A multi-week trap is that pressure is non-stationary within a season: Everton's pressure mounts after game 6, peaks at relegation zone, then abates under Allardyce [PAGE 2-3]. A player evaluated in October "high-pressure" minutes may be reacting to a managerial crisis, not possessing a stable clutch trait. Liverpool's recruitment analysis covers signings since 2017/18 [PAGE 17], but tactical systems change across windows; Van Dijk's high-pressure minutes at Southampton may not transfer to Klopp's system. The Leicester case uses data only until end of 2017/18 [PAGE 10], yet Ghezzal signed Aug 5, 2018 [PAGE 10], outside the analysis window—a lookahead/timing trap. Survivor bias: players substituted out of tense games never accrue high-pressure minutes, so the "high-pressure" sample is enriched for coaches' trusted players, endogenizing the treatment.

Word count ~220.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: Under high mental pressure, players regress to habitual but suboptimal action schemas. Neymar's contribution falls from very high to average; the decline is driven by poorer decision-making (more low/average decisions, fewer high-rated), while execution improves for all action types [PAGE 16]. Dwyer commits significantly more needless fouls inside the opponent's box under pressure, most with negative decision ratings [PAGE 11]. Manchester United doubles dribble frequency under pressure (19.41 to 43.88 per 90) but dribble contribution declines for all offensive players except Rashford [PAGE 12].

Counter-trap: Opponents and managers can second-order anticipate these regressions. If United dribbles under pressure, opponents compress the dribbler; if Leicester throws forward more under low pressure and into the box under high pressure, the opposing manager adjusts defensive organization [PAGE 13]. The acquisition use case is itself a recursive theory of mind: Leicester models whether Aouar or Shaqiri will "level up" under pressure, anticipating that Ghezzal will choke [PAGE 10].

Clock: The in-game model discretizes the match into T=100 frames [PAGE 5], and pressure explicitly mounts as time winds down in close games [PAGE 2-4]. This temporal embedding means high-pressure minutes are autocorrelated near match end, creating a clock confound: late-game decisions are made under both pressure and fatigue. The authors attempt to separate them by correlating high-pressure performance with last-quarter performance excluding high-pressure minutes, finding r=0.136 [PAGE 18], but the clock still couples the two in the actual high-pressure sample.

Word count ~210.

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer veto: The paper relies exclusively on event data, explicitly noting that precise player locations are unknown [PAGE 8]. Consequently, defensive pressure (opponent proximity, pressing intensity) is not directly measured; it is only approximated through historical action contexts in the success model [PAGE 8]. A veto arises: an action classified as "poor execution under mental pressure" may actually be poor execution under intense physical defensive pressure, which the model cannot disentangle.

Biomechanical fatigue veto: No sprint, acceleration, or load data are available because tracking data is not used [PAGE 1]. The fatigue proxy is contribution in the last quarter of the game [PAGE 18]. The weak Pearson r=0.136 suggests the pressure metric is not identical to end-game fatigue, but it does not rule out within-high-pressure-minute biomechanical degradation (e.g., a tired defender in the 85th minute of a close game).

Weather veto: Neither the pre-game feature set [PAGE 2-3] nor the in-game feature set [PAGE 5] includes temperature, precipitation, wind, or pitch condition. Execution ratings for shots and passes are biomechanically sensitive to ball-surface interaction; a rainy night at Stoke could depress execution independently of mental pressure, leading to misattribution.

Adjudication: The paper does not control for weather, pitch state, or real-time defensive proximity. Therefore any cross-layer claim that "Player X chokes under mental pressure" is veto-proof only if one accepts that unobserved physical covariates are orthogonal to the pressure score. Given that pressure itself rises late in close games—precisely when fatigue and weather exposure accumulate—the orthogonality assumption is not established. The analysis is robust to gross fatigue confounding (r=0.136) but not to fine-grained biomechanical or meteorological vetoes.

Word count ~220.

RLVR_COUNTERFACTUAL_VETOES:
1. Weather confound veto. Scenario: Re-estimate execution ratings for shots and crosses adding match-day precipitation (mm) and temperature (°C) as covariates. Prediction: For at least one of Mahrez, Aouar, or Shaqiri, the high-pressure vs low-pressure execution differential will shrink by >50% or cross the null (p > 0.05), because cold/wet conditions independently degrade ball-striking and the original model misattributes this to mental pressure. Verifiable: join EPL/LaLiga/Bundesliga event data with public weather records for 2016–2018 and re-run the ER decomposition [PAGE 8, PAGE 5].

2. Spatial defensive-pressure veto. Scenario: On a tracking-data subsample, compute nearest-defender distance at action onset and re-estimate decision ratings conditional on both mental pressure and defensive proximity. Prediction: The partial correlation between the paper's pressure score and Neymar's decision rating will fall below |0.05| once nearest-defender distance is controlled, indicating that observed "poor decisions under pressure" are largely reactions to tighter defensive marking rather than mental choke [PAGE 16, PAGE 8]. Verifiable: use available tracking data for a subset of matches, merge with event stream, and re-run DR regression.

3. Temporal selection / small-sample veto. Scenario: Restrict analysis to players with ≥500 high-pressure and ≥500 low-pressure minutes, and require pressure situations to be stratified across match minutes (not concentrated in the final 10 minutes). Then perform leave-one-season-out validation (2016/17 vs 2017/18) on the Liverpool recruitment signature (Figure 11). Prediction: The sign of (high-pressure contribution − low-pressure contribution) will flip for at least two of the seven Liverpool signings, and the claim that "Liverpool buys clutch players" will not replicate at p < 0.10 in both seasons [PAGE 17, PAGE 9]. Verifiable: subset the event data by season, recompute Figure 11, and test stability of the high-minus-low contrast.

Word count ~210.

Total words: THINK_TRACE ~430, SOURCE ~300, RETRO ~220, RECURSIVE ~210, CROSS ~220, RLVR ~210 = ~1590. Good.

Now ensure XML sections exactly as specified. No markdown outside? I'll just output the XML sections. No betting lines. Check: I mention "win probability" but not betting odds, spreads, moneylines, totals. Fine.

Check verbatim quotes: I should include a few verbatim quotes with [PAGE N]. Let me add some.

In THINK_TRACE: "The low-scoring nature of soccer complicates building a win probability model" [PAGE 5]. "we model the predicted number of goals ... as independent Binomial distributions" [PAGE 5]. "Pressure mounts when scoring increases the chance of a favorable match outcome" [PAGE 4].

In SOURCE: quote formulas as in text.

Make sure to not exceed context. Fine.

Let's write final output.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper constructs total pressure as a joint score combining pre-game and in-game components: Pressure(g, x_t) = Pressure_pre-game(g) · Pressure_in-game(x_t) [PAGE 2]. The pre-game component is not a directly observed category; no labeling exists, so the authors collect pairwise judgments from soccer experts and fit a Gradient Boosted Ranking Trees ranker (max_depth: 6, n_estimators: 50) [PAGE 21]. The in-game component is defined operationally as the sum of the increase in win probability and the increase in tie probability if the ball-possessing team scores at time t [PAGE 4]. Because "the low-scoring nature of soccer complicates building a win probability model" [PAGE 5], they do not model win-draw-loss directly. Instead they split each match into T = 100 temporal frames and model future goals for home and away teams as independent Binomial distributions: y_{t+1,home} ~ Binomial(θ_{t,home}) and y_{t+1,away} ~ Binomial(θ_{t,away}) [PAGE 5]. The θ scoring intensities are estimated via a temporal stochastic process using PyMC3 ADVI on EPL, LaLiga, and Bundesliga games from 2014/2015 through 2017/2018 [PAGE 5, PAGE 22].

The performance side has three machine-learned layers. Contribution rating CR(s_i, a_i, o_i) = V(s_j) − V(s_i), where V(s) is the game-state value reflecting goal likelihood [PAGE 7]. Decision rating DR(s_i, a_i) = ECR|s_i,a_i − ECR|s_i, contrasting the chosen action's expected contribution against the expected contribution across all possible actions [PAGE 8]. Execution rating ER(a_i, o_i) = [o_i+] − P(o_i+), where [o_i+] is an indicator for success [PAGE 8]. Actions are then bucketed into high-pressure (top 20%), normal-pressure (middle 60%), and low-pressure (bottom 20%) situations based on a global ranking of all match situations [PAGE 9].

The multi-hop inference chain is therefore: raw event stream → game-state win-probability model → situation-level pressure percentile → action-level CR/DR/ER → per-90-minute aggregation conditional on pressure bin → player/team comparison → club decision (acquisition, training, tactics, lineups).

Gray-zone audit: (1) Label noise is irreducible; the pre-game ranker achieved 73.91% agreement with annotators versus 79.79% inter-expert agreement [PAGE 21], leaving roughly a six-point gap of expert disagreement baked into every pressure label. (2) Event data lacks tracking, so precise player locations and real-time defensive proximity are unobserved [PAGE 8]; spatial context is approximated via previous action locations rather than opponent geometry. (3) The 20/60/20 binning arbitrarily cardinalizes an ordinal ranker: situations at the 19th and 21st percentiles are treated as categorically distinct despite negligible rank distance. (4) Eligibility requires only 900 total minutes and 180 minutes in each extreme bin [PAGE 9]; Bonucci has 201 high-pressure minutes [PAGE 14], Ghezzal 358 [PAGE 10], and Neymar 472 [PAGE 16], making individual "clutch" or "choke" labels statistically fragile. (5) Pressure and fatigue co-vary late in matches; the authors counter with a weak Pearson r = 0.136 between high-pressure contribution and last-quarter contribution excluding high-pressure situations [PAGE 18], but this does not rule out biomechanical confounds within high-pressure minutes themselves. (6) The Binomial independence assumption [PAGE 5] may break down exactly in the close, late-game regimes where pressure is highest, because goals arrive in clusters (set-piece rebounds, red-card situations) and T = 100 frame discretization misaligns with stoppage time.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, page citations, and breakdown regimes.

Pressure composition [PAGE 2]: P(g, x_t) = P_pre-game(g) · P_in-game(x_t). Dimensionless index; the combination operator is implied by juxtaposition rather than explicitly specified.

Pre-game features [PAGE 2–3]: (i) Team ambition: k-means clustering into four groups using prior-season results, transfer value of top-20 players, loan spending, and Football Manager reputation score. (ii) Game importance: Elo-based season simulation with Kendall–Stuart tau-c association between each possible game result (win/draw/loss) and final league outcomes such as relegation or championship [PAGE 3]. (iii) Recent performance: points over last five games and deviation from Elo-expected performance. (iv) Game context: home/away, rivalry, attendance, coach tenure. Model: Gradient Boosted Ranking Trees [PAGE 3]. Validation: 330 pairwise rankings from 170 games; 483 validation pairs from 20 diverse games; model agreement 73.91% vs inter-expert 79.79% [PAGE 21].

In-game model [PAGE 4–5]: For game state at time t, future goals are modeled as independent Binomials y_{t+1,home} ~ Binomial(θ_{t,home}), y_{t+1,away} ~ Binomial(θ_{t,away}), where θ represents scoring intensity in the t-th time frame [PAGE 5]. T = 100 time frames correspond to percentages of game duration to handle variable stoppage time [PAGE 5]. Features include goals scored, goal difference, yellow/red cards, Elo-rating difference, average attacking passes over previous 10 frames, and average duels won over previous 10 frames [PAGE 5]. Training data: 4,232 games from EPL, LaLiga, Bundesliga, 2014/2015–2017/2018, 70–30 temporal train-test split [PAGE 22]. Win/tie probabilities are derived by convolving predicted future-goal distributions with the current score. Calibration: maximum deviation 9.61%, typically within 2.5% of ideal [PAGE 22]. Breakdown regime: Binomial independence fails if goals cluster (set pieces, red cards); T = 100 discretization misaligns with actual clock time.

Performance metrics [PAGE 7–8, PAGE 24]: CR(s_i, a_i, o_i) = V(s_j) − V(s_i), units of expected goal-state value [PAGE 7]. ECR|s_i,a_i = P(o_i+) · CR(s_i,a_i,o_i+) + P(o_i−) · CR(s_i,a_i,o_i−) [PAGE 8]. DR(s_i,a_i) = ECR|s_i,a_i − ECR|s_i [PAGE 8]. ER(a_i,o_i) = [o_i+] − P(o_i+), [o_i+] ∈ {0,1} [PAGE 8]. ECR|s_i = [P(g_{i+1+}|s_i) − P(g_{i+}|s_{i−1})] − [P(g_{i+1−}|s_i) − P(g_{i−}|s_{i−1})] [PAGE 24]. Action-success probabilities come from Gradient Boosted Trees classifiers trained per action type on 2,430 games / 2.96 million actions, validated on 2,404 games / 2.92 million actions [PAGE 23]; AUC-PR examples: Pass 0.9561 vs base 0.8265, Shot 0.3689 vs base 0.1094, Cross 0.5397 vs base 0.3144 [PAGE 23].

Pressure bins and aggregation [PAGE 9]: High = top 20%, Normal = middle 60%, Low = bottom 20% of global situation ranking. Aggregations: average contribution rating per 90 minutes; average contribution rating per 90 minutes per action type; percentile rank contribution rating per 90 minutes; average decision rating; average execution rating per action type; percentile rank execution rating per action type. Execution ratings are never aggregated across action types because distributions differ (e.g., shot vs pass) [PAGE 9]. Eligibility: ≥900 total minutes, ≥180 minutes in high-pressure and ≥180 in low-pressure situations [PAGE 9]. Fatigue check: Pearson r = 0.136 between high-pressure contribution and last-quarter contribution excluding high-pressure situations [PAGE 18, PAGE 22].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage plus multi-week traps.

The paper's intellectual genealogy traces to the cognitive-sport psychology literature on choking: Baumeister (1984) on self-consciousness and paradoxical incentive effects [PAGE 19, ref 1]; Gucciardi and Dimmock (2008) on conscious processing versus depleted attentional resources [PAGE 19, ref 10]; Hill et al. (2010) review of choking in sport [PAGE 19, ref 11]. Operationally, it builds on hand-labeled clutch definitions in the NBA (games within five points with five minutes left) and baseball (runners in scoring position), extending them with in-game win-probability models [PAGE 19]. The action-valuation engine inherits from Decroos et al. (2018), "Actions Speak Louder Than Goals," which supplies the contribution-rating foundation CR = V(s_j) − V(s_i) [PAGE 7, ref 7]. Related components include Lahvička's (2015) Monte Carlo match-importance simulation [PAGE 19, ref 13] and Phelps et al.'s (2015) pairwise-comparison-versus-Likert methodology [PAGE 19, ref 18], which justify the expert ranker used for pre-game pressure.

Multi-week traps: The dataset spans 2016/2017, 2017/2018, and partial 2018/2019 through November 11, 2018 [PAGE 9]. A central multi-week trap is intra-season non-stationarity: Everton's pressure mounts after game six, peaks around the relegation zone and managerial sacking after game nine, then abates under Allardyce [PAGE 2–3]. A player judged in October "high-pressure" minutes may be responding to a club crisis rather than exhibiting a stable clutch trait. Liverpool's recruitment analysis covers signings since 2017/18 [PAGE 17], but tactical systems and roles change across transfer windows, so Van Dijk's high-pressure minutes at Southampton may not port to Klopp's system. The Leicester acquisition case uses data only through the end of 2017/18 [PAGE 10], yet Ghezzal signed on August 5, 2018 [PAGE 10], outside the analysis window—a lookahead/timing mismatch. Survivor bias also operates: players substituted out of tense games never accrue high-pressure minutes, so the high-pressure sample is endogenously enriched for coaches' trusted players, confounding the treatment variable itself.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and clock structure.

Crisis habit regression: Under high mental pressure, players regress to habitual but suboptimal action schemas. Neymar's average contribution per 90 falls from very high under low pressure (997 minutes) to average under high pressure (472 minutes), driven by poorer decision-making—more low/average-rated decisions, fewer high-rated ones—while execution improves for all action types [PAGE 16]. Dom Dwyer commits significantly more needless fouls inside the opponent's penalty box under pressure, and most carry negative decision ratings because they simply surrender possession [PAGE 11]. Manchester United attempts far more dribbles under pressure (1818 high-pressure minutes; dribble frequency more than doubles from 19.41 to 43.88 per 90), yet dribble contribution declines for all offensive players except Rashford [PAGE 12].

Counter-trap: Opponents and managers can second-order anticipate these regressions. If United dribbles under pressure, opponents can compress space around the dribbler; if Leicester throws forward more in low pressure and into the box in high pressure, the opposing manager adjusts defensive organization accordingly [PAGE 13]. The acquisition use case is itself a recursive theory of mind: Leicester models whether Aouar or Shaqiri will "level up" under pressure while anticipating that Ghezzal will choke [PAGE 10].

Clock: The in-game model discretizes each match into T = 100 frames [PAGE 5], and pressure explicitly mounts as time winds down in close games because a goal then has outsized impact on the expected outcome [PAGE 2–4]. This temporal embedding autocorrelates high-pressure minutes near match end, creating a clock confound: late-game decisions are made under both mental pressure and accumulated fatigue. The authors attempt to separate the two by correlating high-pressure performance with last-quarter performance excluding high-pressure minutes, finding r = 0.136 [PAGE 18], but the clock still couples pressure and fatigue within the actual high-pressure sample, so any individual "clutch" estimate remains temporally confounded.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto adjudication.

Physical layer veto: The paper relies exclusively on event data, explicitly conceding that precise player locations on the pitch are unknown [PAGE 8]. Defensive pressure—opponent proximity, pressing intensity, spatial crowding—is therefore not directly measured; it is only approximated through historical action contexts in the success model [PAGE 8]. This creates a veto: an action coded as "poor execution under mental pressure" may actually be poor execution under intense physical defensive pressure, which the model cannot disentangle.

Biomechanical fatigue veto: No sprint, acceleration, or mechanical-load data exist because tracking data is not used [PAGE 1]. The fatigue proxy is contribution in the last quarter of each game [PAGE 18]. The weak Pearson r = 0.136 suggests the pressure metric is not identical to end-game fatigue, but it does not rule out within-high-pressure-minute biomechanical degradation (for example, a fatigued defender in the 85th minute of a one-goal game).

Weather veto: Neither the pre-game feature set [PAGE 2–3] nor the in-game feature set [PAGE 5] includes temperature, precipitation, wind, or pitch condition. Execution ratings for shots, passes, and crosses are biomechanically sensitive to ball-surface interaction; a cold, wet match could depress execution independently of mental pressure, leading to systematic misattribution.

Adjudication: The paper does not control for weather, pitch state, or real-time defensive proximity. Therefore any cross-layer claim that "Player X chokes under mental pressure" is veto-proof only if one accepts that unobserved physical covariates are orthogonal to the pressure score. Because pressure itself rises late in close games—precisely when fatigue and weather exposure accumulate—the orthogonality assumption is not established. The analysis is robust to gross fatigue confounding (r = 0.136) but remains exposed to fine-grained biomechanical and meteorological vetoes.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR counterfactual veto scenarios with predictions.

Veto 1 (weather confound): Scenario—Re-estimate execution ratings for shots and crosses adding match-day precipitation (mm) and temperature (°C) as covariates. Prediction—For at least one of Mahrez, Aouar, or Shaqiri, the high-pressure versus low-pressure execution differential will shrink by more than 50% or cross the null (p > 0.05), because cold/wet conditions independently degrade ball-striking and the original model misattributes this to mental pressure. Verifiable—Join EPL, LaLiga, and Bundesliga event data with public weather records for 2016–2018 and re-run the execution-rating decomposition [PAGE 8, PAGE 5].

Veto 2 (spatial defensive-pressure confound): Scenario—On a tracking-data subsample, compute nearest-defender distance at action onset and re-estimate decision ratings conditional on both the paper's mental-pressure score and defensive proximity. Prediction—The partial correlation between pressure score and Neymar's decision rating will fall below |0.05| once nearest-defender distance is controlled, indicating that observed "poor decisions under pressure" are largely reactions to tighter defensive marking rather than mental choke [PAGE 16, PAGE 8]. Verifiable—Use available tracking data for a subset of matches, merge with the event stream, and re-run the decision-rating regression.

Veto 3 (temporal selection / small-sample veto): Scenario—Restrict analysis to players with at least 500 high-pressure and 500 low-pressure minutes, and require pressure situations to be stratified across match minutes rather than concentrated in the final 10 minutes. Then perform leave-one-season-out validation (2016/17 versus 2017/18) on the Liverpool recruitment signature (Figure 11). Prediction—The sign of (high-pressure contribution − low-pressure contribution) will flip for at least two of the seven Liverpool signings, and the claim that "Liverpool buys clutch players" will not replicate at p < 0.10 in both seasons [PAGE 17, PAGE 9]. Verifiable—Subset the event data by season, recompute Figure 11, and test stability of the high-minus-low contrast.
</RLVR_COUNTERFACTUAL_VETOES>