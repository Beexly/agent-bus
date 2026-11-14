---
source: "2021 Home sweet home - Quantifying home court advantages for NCAA basketball statistics - Matthew van Bommel, Luke Bornn, Peter Chow-White and Chuancong Gao.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 12
model: deepseek/deepseek-v4.1-flash-1017
words: 7522
---

<NATIVE_REASONING>
We need answer to user. Need produce GSE/GSI Frontier Reasoning Foundry with exact XML sections, >=1000 words, zero betting lines, no fake ratios. Need analyze source. Need include formal LaTeX equations, units, page citations, verbatim quotes, singularity/breakdown regimes. Need sections:
<THINK_TRACE> >=400 words deep multi-hop derivation & gray-zone audit.
<SOURCE_OPERATORS_AND_EQUATIONS> formal LaTeX, units, page citations, breakdown.
<RETROCAUSAL_GENEALOGY> historical/scientific lineage & multi-week traps.
<RECURSIVE_THEORY_OF_MIND> crisis habit regression vs counter-trap vs clock.
<CROSS_LAYER_VETO_ADJUDICATION> physical/biomechanical/weather veto proof.
<RLVR_COUNTERFACTUAL_VETOES> 3 verifiable RLVR veto scenarios + predictions.

Need likely interpret paper. No direct question, but user provided drive source and pages. Need deliver analysis. Must include exact [PAGE N] markers and verbatim quotes in source operators. Need ensure not mention betting lines/spreads/totals/moneylines/odds. Can mention "total count" stats? Is that forbidden? "totals" as betting line? Invariant says never mention spreads, totals, moneylines, or odds. Need avoid word "totals" maybe use "counts" or "statistic counts". Avoid "odds" even in phrase? Don't mention. Avoid betting context. Can mention probability, attendance, regression. No fake ratio. Formal equations are given from paper: RPI, RPI', home % increase, e^beta-1, Poisson/quasi-Poisson GLM. Need units: games, percent, counts, RPI dimensionless index, attendance spectators/game, possessions count, coefficients log-count units. Need breakdown regimes: equidispersion, low/high attendance cutoffs, neutral games removed, missing data, Bonferroni alpha, high-leverage top 0.1% possessions, residual underprediction. Need exact page cites and verbatim quotes.

Need think trace >=400 words. Could be 600. Need overall >=1000 words, likely 2500. Desired oververbosity 5. Need be precise, technical.

Let's draft with XML.

Need careful: "SOURCE_OPERATORS_AND_EQUATIONS" formal LaTeX, units, page citations, breakdown. Could include equations:
Home-away percent increase for statistic s, gender-division g, season t:
\[
\Delta^{HA}_{s,g,t} = 100 \times \frac{\bar{x}^{H}_{s,g,t}-\bar{x}^{A}_{s,g,t}}{\bar{x}_{s,g,t}}
\]
Units percent; x counts or percentages? For stats like FG% already percent; their formula says statistic value. For count stats, counts/game. For percentage stats, percentage points? Actually they call percent increase. Need define. Use j index statistic, maybe units percent relative to overall average. Page 3 gives: "subtracting the average away team statistic value from the average home team statistic value, and dividing the difference by the overall average statistic value in the filtered dataset." [PAGE 3]. This is relative percent, dimensionless *100.
Home-neutral and neutral-away analogous.
RPI:
\[
RPI = 0.25 WP + 0.50 OWP + 0.25 OOWP
\]
dimensionless. RPI' = Home RPI - Away RPI. Page 7.
Attendance t-tests: compare mean home advantage between low and high attendance bottom/top 25%. With matching 25 equal-width bins. Bonferroni alpha = 0.05/84=0.0006.
Regression:
\[
Y_{i s g} \sim \mathrm{QuasiPoisson}(\mu_{i s g}),\quad \log \mu_{i s g} = \beta_{0,s,g}+\beta_{H,s,g} H_i + \beta_{P,s,g} P_i + \beta_{R,s,g} RPI'_i + \sum_{k\in\{M,H\}}\beta_{A_k,s,g} A_{ik}
\]
Need maybe attendance grouped low, medium, high. H_i home indicator. P possessions. RPI'. Units: counts per game; beta log-count; exp(beta)-1 percent impact. The paper says "generalized Poisson regression model" but used quasipoisson to control over/under dispersion. Need avoid misstate: They select generalized Poisson for ability control both over and under dispersion; use glm quasipoisson. Note "Poisson regression" in table note. Could write "quasi-Poisson/generalized-Poisson log-link model" with dispersion parameter. Need cite.
Dispersion parameters 0.68 FGA to 3.01 FTA, reject equidispersion except DREB. Bonferroni alpha 0.05/11=0.0045. Percent impact eβ-1. 56 of 66 positive CI, 9 contain 0 (FGA, 3FGA, OREB), 1 negative men's D1 FGA. Table 4 values.
Need maybe table values: BLK men D1 25.41, women D3 11.86 etc. AST >11. FTA men D1 12.24, PF 7.58. Need include some.
Need "singularity/breakdown regimes": statistical breakdown:
- Missing/inconsistent data games removed; 11,930 removed from 153,570, final 141,640. Attendance analyses remove 5,847 missing attendance. Home-away models remove 23,856 neutral games. Breakdown when missing attendance not missing at random? Selection bias. 
- Low attendance bins with no high attendance observations set empty; matching may fail in sparse RPI' regions. If no overlap, causal estimand undefined; matching only within observed support. 
- Quasi-Poisson mean-variance: equidispersion null rejected except DREB; dispersion values; if overdispersion ignored, SEs invalid. 
- High leverage top 0.1% possessions underestimated; model extrapolation breakdown. 
- Multiple testing; Bonferroni. 
- Scorekeeper bias not directly measured; inferred from subjectivity; confounding by on-court performance, team strength, attendance. 
- Neutral location games not random; stronger teams and lower attendance except D1 higher attendance. 
- Attendance not randomized; home teams with higher attendance stronger; matching controls RPI' but not all confounders.
- Referee bias inferred from PF/FTA/PTS; PTS consequence. FT% no attendance impact.
Need "retrocausal genealogy": historical/scientific lineage, multi-week traps. Need discuss prior literature: Stefani 2008 travel/spectators/familiarity; Anderson & Pierce 2009 referees foul differential NCAA; Swartz & Arce 2014; van Bommel & Bornn 2017 NBA scorekeeper bias; Garicano et al. 2005 soccer referee bias with attendance; Moskowitz & Wertheim 2011; Harville & Smith 1994 neutral games; RPI history; Craggs, Bialik, Biderman, Moore. Multi-week traps: inferring causal home advantage from observational box scores; ignoring neutral games; aggregating across gender/division; treating subjective stats as objective; not correcting multiple comparisons; overinterpreting table ordering; assuming attendance causal without matching; season-level stability vs random; using FT% as referee bias? Need include. "Retrocausal" maybe lineage from past assumptions to present; traps that unfold over multi-week analysis. Need not overdo.

"Recursive theory of mind": crisis habit regression vs counter-trap vs clock. Need interpret as decision maker mental models: scorekeepers/referees; analysts. Crisis habit regression = under pressure default to home-biased judgment? Counter-trap = overcorrecting or using neutral games as clean control; clock = temporal stability across seasons, scorekeeping in real time, late-game? Need explain recursively: scorekeeper observes play, referee responds to crowd, analyst models both; each agent's bias becomes input to next layer. Need mention not fake equations. Need avoid betting. Could discuss "clock" as within-game time and multi-season time. Need maybe "crisis habit regression" refers agents regress to habitual home-favoring judgments under ambiguity; counter-trap is assuming all home advantage is bias; clock is stable five-season structure and real-time discretion. Need include. 
"Cross-layer veto adjudication": physical/biomechanical/weather veto proof. Need adjudicate whether physical/biomechanical/weather can veto inference. The paper doesn't examine weather, biomechanics, travel? It mentions travel, spectators, familiarity. Need state no direct physical/biomechanical/weather data in source. Cross-layer veto: physical performance improvements cannot explain AST/BLK subjective gap because scorekeeper discretion; cannot explain PF/FTA attendance effect? Physical/biomechanical factors could affect shooting, fatigue, travel, but not scorekeeper attribution of assists/blocks nor referee foul calls except via actual contact. Weather absent; no weather variables, so weather cannot adjudicate. Need "veto proof": if physical/biomechanical/weather caused entire home advantage, it would have to predict greater home advantage for objective stats than subjective; observed opposite. But BLK/AST could be affected by physical performance too (home team blocks more due to effort). However paper argues magnitude and subjectivity. Need be careful: "veto" not absolute; physical layer cannot veto scorekeeper/referee inference because those stats have documented discretion and attendance-specific PF/FTA. Weather cannot be tested; it is a missing confounder but not a proven veto. 
"RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. Need define RLVR? Probably Reinforcement Learning with Verifiable Rewards? Need produce counterfactual scenarios that would veto the paper's claims if observed, with predictions. Need no betting. Need 3 scenarios:
1. Neutral-site randomization/attendance assignment: If high attendance games at neutral locations? Actually need verifiable. Scenario: independent blind re-scoring of a stratified sample of AST/BLK by neutral scorekeepers without home/away labels. Prediction: home-away AST/BLK gap shrinks substantially/attenuates; if not, scorekeeper-bias hypothesis vetoed. Verifiable via re-scoring.
2. Referee assignment/attendance counterfactual: within same game/team/possession covariates, randomly assign officials? Hard. Or use neutral-site games with experimentally varied crowd size? Prediction: PF/FTA home advantage increases with attendance in matched RPI' bins; if no dose-response, attendance-referee bias vetoed. Verifiable via high/low attendance matched samples, maybe crowd restrictions. 
3. Scorekeeper team-strength correlation: If scorekeepers randomly swapped or blinded to team identity/strength, RPI'-home coefficient correlation (0.76) should attenuate; if not, bias-strength correlation vetoed. Or use independent automated tracking data for AST/BLK as ground truth; compare box score. Prediction: home advantage in automated AST/BLK smaller; if automated data show same 11-25% home advantage, scorekeeper-bias explanation vetoed. Need 3 scenarios with predictions.

Need include "RLVR" maybe "Reinforcement Learning with Verifiable Rewards" not necessary; just label. Need ensure each has verifiable predictions, counterfactual. Maybe table? XML okay.

Need include exact [PAGE N] markers and verbatim quotes. Need quote exact from source. Must be careful quotes exact, with page markers. Include:
[PAGE 1] "Between the 2011-2012 and 2015-2016 seasons, NCAA teams performed better at home compared to on the road in nearly all box score statistics across both genders and all three divisions."
[PAGE 2] "the teams of scorekeepers (or statisticians as they are sometimes referred) tracking box score statistics are not a neutral party but are employed by the home teams of NCAA games."
[PAGE 3] "There were 11,930 games with missing or inconsistent data and these games were removed" and "The average overall home boosts for statistics ranged from 0.9% (FGA) to 18.8% (BLK)" and "the average relative variance of the distribution of statistic home advantages across seasons is 0.15, compared to 0.80 for statistic distributions across gender-division combinations."
[PAGE 3] "AST and BLK, largely considered the most subjective statistics, have noticeably greater home advantages compared to the other more objective statistics"
[PAGE 3] "scorekeepers are “given broad discretion over two categories: assists and blocks” (Craggs, 2009)." Actually page 3. 
[PAGE 6] "men and higher divisions tend to see greater impact in the expected directions (home over neutral over away)" 
[PAGE 7] "PF and FTA: the two referee driven statistics." Wait page 9? Let's locate: Page 9 has "The two statistics which have significantly different home advantage means in the low attendance and high attendance subsets for the most division-gender combinations are PF and FTA: the two referee driven statistics." Yes [PAGE 9].
[PAGE 7] RPI formula quote.
[PAGE 7] "the two sided Kolmogorov–Smirnov (KS) test ... concludes the distributions of RPI′ in high attendance games are significantly different than those for low attendance games." 
[PAGE 9] "we perform 84 tests and thus use the Bonferroni correction to select a level of significance of α = 0.05/84 = 0.0006."
[PAGE 9] "FT% is not significantly impacted by attendance in any gender-division combination."
[PAGE 9] "the dispersion parameters across the 11 statistics range from 0.68 (FGA) to 3.01 (FTA)." and "we reject the null hypothesis of equidispersion for all statistics expect DREB." typo "expect" in source. Use [sic]? Verbatim quote with [sic]. 
[PAGE 9] "we select the generalized Poisson regression model for its ability to control for both over and under dispersion"
[PAGE 10] "convert the model coefficients, βj, to percent impact values ... through the transformation eβj −1."
[PAGE 10] "56 of the 66 total models produce fully positive 95% confidence intervals for the home court coefficient, 9 models (all for FGA, 3FGA, or OREB) produce confidence intervals containing 0, and only 1 model (men’s D1 FGA) produces a fully negative confidence interval"
[PAGE 10] "BLK and AST have a much greater home team advantage compared to the other statistics, with home teams receiving over a 11% boost for each gender-division combination and advantages stretching all the way to 25.4% for men’s D1."
[PAGE 11] "the RPI′ coefficients are highly correlated (0.76) with the home advantage coefficients."
[PAGE 11] "larger crowds have greater impacts on their decisions, specifically increasing their bias in favor of the home team."
[PAGE 11] "develop robust adjustment methods for correcting the biases and inconsistencies present in NCAA basketball."
Need maybe cite page 4 Fig 1? Not necessary.

Need answer structure: maybe start brief "No betting lines are used." But zero betting lines: don't mention. Avoid "total" word? The section title "SOURCE_OPERATORS..." okay. Avoid "odds". We can mention "counts" instead of "totals." If quoting source includes "total count" maybe quote "total count" from table? The invariant says never mention totals; but source has "total count of box score statistics". Maybe avoid quoting that phrase, or paraphrase. To be safe, no "totals". But source operators may need quote? We can quote "statistic totals" maybe contains totals. Avoid. Use "counts". Do not quote table title with "total count". Fine.

Need "no toy equations": Use actual equations from paper. No invented ratios like Force/Fatigue. We can define estimator equations from paper. Use formal LaTeX. Avoid inventing arbitrary ratios. But equations for home advantage are from paper. Good.

Need "exact singularity/breakdown regimes". Include explicit "Breakdown/singularity regimes" subsection in SOURCE_OPERATORS. Mention:
- Zero denominator: \(\bar{x}_{s,g,t}=0\) makes relative percent undefined; in basketball, FGA/3FGA etc could be zero in pathological game but team-level averages over season likely nonzero. This is a mathematical singularity. Need not invent? It's standard. The paper divides by overall average; if zero, undefined. But in basketball data rare. Include.
- Empty bins in matching: if no high attendance observations in bin, set empty; then support overlap fails; matched distribution not defined. 
- Quasi-Poisson log link has \(\mu>0\); zero expected counts on boundary; separation if perfect prediction; not in paper but formal. Could mention not observed. 
- Dispersion parameter 0? equidispersion; over/under. 
- RPI' matching: 25 bins equal width; sparse bins break.
- Multiple testing threshold.
Need not overdo.

Need "units" in equations:
- \(Y\) counts per team-game (dimensionless count, or count game^{-1} if rates).
- \(P\) possessions per game (count).
- Attendance \(A\) spectators per game.
- RPI and RPI' dimensionless in [0,1]? RPI weighted average of proportions; difference in [-1,1].
- \(\beta\) log-count per unit covariate; \(\exp(\beta)-1\) dimensionless proportional change.
- Home advantage percent dimensionless *100.
- Tests: p-values dimensionless.
- KS statistic dimensionless.
- t-test mean differences in statistic units.

Need "source operators" maybe list operators:
- Neutral-location subtraction operator decomposes HA into H-N + N-A.
- Matching operator.
- Regression operator.
- Percent impact transform.
Need write.

Need "THINK_TRACE" deep multi-hop derivation and gray-zone audit >=400 words. Need maybe 600. Should discuss derivation:
1. Start with observed home-away gap.
2. Decompose into home-neutral and neutral-away to separate home benefit vs away penalty.
3. Use subjectivity gradient: AST/BLK largest; objective stats FGA/3FGA/FT% smallest; this points to scorekeeper discretion.
4. Use gender/division ordering: men/higher divisions larger for most; but STL/TOV/FT%/FGA exceptions; not uniform.
5. Attendance: high attendance home teams stronger; need RPI' matching; KS shows imbalance; matching; t-tests; PF/FTA significant; PTS consequence; FT% not.
6. Regression: quasi-Poisson controls possessions, RPI', attendance; home coefficient remains; BLK/AST largest; PF/FTA remain; 56/66 positive CIs; FGA exceptions.
7. Gray zones: observational, no direct measurement of bias; scorekeeper bias inferred; referee bias inferred; neutral games not random; attendance not random; matching only RPI'; no weather/biomechanical data; multiple comparisons; high leverage possessions; season generalization; table sorting could be noise; subjective/objective classification not perfect; BLK can be physical; AST depends on teammate made shot; scorekeeper employed by home team; home/away labels in data. Need mention "causal claims are bounded".
Need "multi-hop derivation" not just summary.

Need "Recursive theory of mind" 400? Not specified but overall >=1000. Need include three concepts. Could be ~300 words.
Need "Cross-layer veto" ~250.
Need "RLVR" ~300.

Need ensure final answer only XML sections? The prompt says across these exact XML sections. We can output exactly with those tags. No extra preamble? Probably okay. Include no markdown? XML with LaTeX. Use escaped? XML tags with content; LaTeX okay. Avoid unescaped &? In XML, ampersand in "R&D" would be issue; avoid. Use "and". Use `<` in LaTeX? Could break XML. Need escape `<` as `&lt;` if used. Avoid inequalities or use `\le`? LaTeX backslash less-than not XML. `\le` okay no `<`. Avoid ampersand. Use \( \) okay. Use `>`? In text "greater than" okay. But XML content can have > fine. Use `&`? Avoid. Use `%` okay. Use quotes. Need no `&` in "Bonferroni adjusted α = 0.05/11". Fine. Use "and" not &. Avoid `&` in LaTeX alignment? We can avoid align environments with &. Use simple equations. Use `\begin{aligned}` requires &, avoid. Use separate equations.

Need include "PAGE N" exact markers. Use [PAGE 1] etc.

Potential issue: "RLVR_COUNTERFACTUAL_VETOES" tag missing closing slash? User wrote `<RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.` not closing. We should close `</RLVR_COUNTERFACTUAL_VETOES>`. Similarly all. Good.

Need word count >=1000. We'll write maybe 3000. Need check no forbidden words: "odds" avoid. "spreads" avoid. "totals" avoid. "moneylines" avoid. "betting" avoid. The word "total" could appear in "total models" if quote. Avoid. "over/under dispersion" includes "over" and "under" but not betting? It has "over/under" maybe could be perceived? It's statistical overdispersion/underdispersion. That's okay? Invariant says never mention spreads, totals, moneylines, or odds. "over/under" not those, but maybe avoid phrase "over/under" to be safe; say "overdispersion and underdispersion". Good.
Need avoid "home win probability advantages" from source? Not betting; probability. But could include. Fine.

Let's compose.

Detailed content:

<THINK_TRACE>
Paragraphs. Need mention "The source is observational; no randomized assignment." "Multi-hop derivation: observed gap -> decomposition -> subjectivity gradient -> human-bias hypothesis -> attendance dose-response -> regression." Include page cites. Gray-zone audit. >=400. Use exact quotes maybe. But source operators section has quotes; think trace can include cites. Good.

<SOURCE_OPERATORS_AND_EQUATIONS>
Subsections:
- Observed home-away operator
\[
\Delta^{HA}_{s,g,t}=100\frac{\bar x^{H}_{s,g,t}-\bar x^{A}_{s,g,t}}{\bar x_{s,g,t}}
\]
Quote [PAGE 3]. Units percent. Singularity if denominator zero.
- Decomposition operator:
\[
\Delta^{HA} = \Delta^{HN}+\Delta^{NA}
\]
where each analogous. Quote [PAGE 3] "Note that summing the home-neutral and neutral-away values for each statistic would reproduce the results of Fig. 1." [PAGE 3].
- RPI and RPI':
\[
RPI=0.25WP+0.50OWP+0.25OOWP,\quad RPI'=RPI_H-RPI_A
\]
Quote [PAGE 7]. Units dimensionless. 
- Matching operator: 25 equal-width bins, sample high attendance with replacement to match low counts. Quote [PAGE 8] maybe. Breakdown no overlap.
- Attendance test operator: two-sample t-tests low vs high; Bonferroni alpha. Quote [PAGE 9]. 
- Regression:
\[
Y_{i,s,g}\sim \mathrm{QuasiPoisson}(\mu_{i,s,g}), \quad \log \mu = \beta_0 + \beta_H H_i + \beta_P P_i + \beta_R RPI'_i + \beta_{A,M} A^{M}_i + \beta_{A,H} A^{H}_i
\]
Need define H indicator, P possessions, A low/medium/high dummies. Units counts per team-game; beta log-count. Percent impact:
\[
100(e^{\beta_j}-1)
\]
Quote [PAGE 10]. 
- Dispersion: dispersion parameters range 0.68 to 3.01; reject equidispersion except DREB; quasi-Poisson. Breakdown if ignored. 
- Results: BLK/AST; PF/FTA; 56/66; RPI correlation 0.76.
- Breakdown regimes bullet:
1 denominator zero.
2 missing data 11,930; final 141,640; attendance missing 5,847; neutral removed 23,856.
3 support failure in matching.
4 dispersion model misspecification; high leverage top 0.1% possessions.
5 multiple testing.
6 observational confounding.

Need maybe units table? Could include in prose.

<RETROCAUSAL_GENEALOGY>
Discuss lineage: traditional home advantage (Stefani 2008) travel/spectator/familiarity; referee bias (Anderson and Pierce 2009; Garicano et al. 2005; Moskowitz and Wertheim 2011); scorekeeper bias (van Bommel and Bornn 2017; Craggs 2009; Bialik 2014; Biderman 2009; Moore 2015); neutral games (Harville and Smith 1994); RPI. Multi-week traps: 
- Trap 1: treating neutral games as random; source says neutral games have slightly stronger teams and lower attendance except D1. Need cite [PAGE 3].
- Trap 2: comparing high vs low attendance without RPI' matching; high attendance teams stronger.
- Trap 3: multiple comparisons across 84 tests and 66 models.
- Trap 4: inferring all home advantage is bias; on-court performance real.
- Trap 5: treating gender/division order as universal; only some stats sorted.
- Trap 6: using FT% as referee evidence; no attendance effect.
- Trap 7: ignoring scorekeeper employment and discretion.
Need mention "retrocausal" means later model assumptions can retroactively explain earlier observed pattern; but don't overdo.

<RECURSIVE_THEORY_OF_MIND>
Define three:
- Crisis habit regression: under ambiguous, high-pressure, crowded conditions, scorekeepers/referees regress to home-favoring habitual judgments; source's large AST/BLK home boosts and attendance-linked PF/FTA.
- Counter-trap: analyst overcorrects by attributing all home advantage to bias or by using neutral games as clean; instead need decomposition and matching; source conclusions bounded.
- Clock: two clocks—real-time in-game discretion and five-season stability. Source says within combination home advantages relatively stable across seasons (relative variance 0.15 vs 0.80). The stable clock supports structural bias but not proof. 
Need mention recursive: referee bias changes fouls/free throws; scorekeeper bias changes box score; analysts use those stats to evaluate players; evaluations feed back into team strength/RPI and future scorekeeper bias; RPI' coefficient correlation 0.76 suggests feedback loop. Nice.

<CROSS_LAYER_VETO_ADJUDICATION>
Need physical/biomechanical/weather veto proof. Outline:
- Physical/biomechanical layer can affect shots, rebounds, blocks, fatigue, travel. Source does not measure biomechanics or weather; cannot directly test. But it cannot veto human-bias inference for AST/BLK because those require attribution discretion. It cannot fully veto referee inference because PF/FTA respond to attendance after RPI' matching; but physical contact could vary with crowd noise? Actually crowd noise may affect player communication, not referee. Weather absent. 
- Veto conditions: if all home advantage disappeared under neutral re-scoring or automated tracking, scorekeeper-bias hypothesis vetoed. If PF/FTA attendance effect vanished after controlling for possession, RPI', team fouls? It doesn't control for actual contact or foul-worthy events. Physical/biomechanical confound: home teams may play more aggressively at home, drawing more fouls. But paper's PF/FTA home advantage could be actual play style; attendance dose-response could be actual crowd affecting players. However source says referee decisions impacted by attendance. Need say "the physical layer is a partial confound, not a proven veto." 
- Weather: no weather variables; cannot adjudicate; any weather claim would be outside source. 
- Cross-layer proof: subjective-objective gradient, attendance dose-response, regression with possessions/RPI'/attendance. 
Need "proof" maybe not absolute; label "bounded adjudication".

<RLVR_COUNTERFACTUAL_VETOES>
Three scenarios:
1. Blinded re-scoring of AST/BLK: Random sample of games, independent scorekeepers blind to home/away and team strength, same video. Prediction: home-away relative advantage in AST/BLK falls substantially from ~11-25% and approaches objective-stat levels; if unchanged, scorekeeper-bias hypothesis vetoed. Verifiable with inter-rater agreement and CI.
2. Automated player-tracking ground truth: Use optical tracking to define assists/blocks independent of home scorekeeper. Prediction: automated AST/BLK home advantage lower than box-score advantage; if automated advantage matches box score, scorekeeper attribution bias vetoed. 
3. Attendance randomization/quasi-experiment (crowd restrictions or neutral-site attendance manipulation) with matched RPI': Prediction: PF and FTA home advantage increases with attendance; if no dose-response or reversed, referee-attendance bias vetoed. Need mention "same teams, same opponents, same possession covariates" maybe. 
Need include predictions with metrics. "RLVR" maybe "verifiable reward": define success/failure thresholds? Could state "pre-registered attenuation of at least 50%"? Is that invented? It's a prediction; okay not fake equation. But avoid arbitrary? Could use "substantial attenuation" and "95% CI excluding zero". Verifiable. Need maybe specify "the paper's reported 11.3% vs 3.8% home-neutral vs neutral-away AST gap" etc. Fine.
Need "3 verifiable RLVR veto scenarios + predictions" exactly. Use numbered list.

Need "no betting lines" check. Avoid "home win probability advantages" maybe not needed. Avoid "score" maybe okay. Avoid "total" word. Use "counts". "overdispersion" has "over" but okay. "underdispersion" okay. "high/low attendance" okay.

Need exact page citations. Let's ensure page numbers:
- Page 1 abstract quote.
- Page 2 scorekeeper employed.
- Page 3 data, home boosts, variance, subjectivity.
- Page 6 gender/division.
- Page 7 RPI, KS.
- Page 8 matching algorithm.
- Page 9 attendance results, dispersion, model.
- Page 10 percent impact, results.
- Page 11 correlation, conclusions.
Good.

Need write in XML, no markdown? Use paragraphs and equations. Fine.

Potential issue: In XML content, `\` okay. `%` okay. `[PAGE 3]` okay. `“` quotes okay. `’` okay. `−` maybe okay. `×` okay. `≤` is Unicode not XML special. `&` not. Use "and" not &. Avoid `<` in text; use `\lt`? Not needed. Use "less than" words. In LaTeX, `\beta_{H}` okay. `\mathrm{QuasiPoisson}` okay. `\mu` okay. Need escape `<` if using `\sim` no. Use `\in` no. Good. Use `\left` etc. No `&`.

Need maybe not use `\[`? It's okay. XML doesn't care. Need no unescaped `&`. Avoid "RPI' and home" uses and. Good.
Need close tags correctly.

Let's craft final with sufficient depth. Ensure THINK_TRACE >=400 words. I'll write ~600. Overall maybe 3000. Good.

Need maybe include "verbatim quotes" in SOURCE_OPERATORS. We have many exact quotes. Ensure not misquote. Let's copy exact:
- Page 1: "Between the 2011-2012 and 2015-2016 seasons, NCAA teams performed better at home compared to on the road in nearly all box score statistics across both genders and all three divisions." Yes.
- Page 2: "the teams of scorekeepers (or statisticians as they are sometimes referred) tracking box score statistics are not a neutral party but are employed by the home teams of NCAA games." Exact? Source: "Additionally, the teams of scorekeepers (or statisticians as they are sometimes referred) tracking box score statistics are not a neutral party but are employed by the home teams of NCAA games." Yes.
- Page 3: "The average overall home boosts for statistics ranged from 0.9% (FGA) to 18.8% (BLK)" exact. 
- Page 3: "the average relative variance of the distribution of statistic home advantages across seasons is 0.15, compared to 0.80 for statistic distributions across gender-division combinations." Exact.
- Page 3: "AST and BLK, largely considered the most subjective statistics, have noticeably greater home advantages compared to the other more objective statistics" exact (no period? okay).
- Page 3: "given broad discretion over two categories: assists and blocks" exact within quote.
- Page 6: "men and higher divisions tend to see greater impact in the expected directions (home over neutral over away)" exact.
- Page 7: "RPI = (WP × 0.25) + (OWP × 0.50) + (OOWP × 0.25)" exact? Source line break: "RPI = (WP × 0.25) + (OWP × 0.50) + (OOWP × 0.25)" yes. 
- Page 7: "the two sided Kolmogorov–Smirnov (KS) test ... concludes the distributions of RPI′ in high attendance games are significantly different than those for low attendance games." We can quote with ellipsis? Verbatim but ellipsis okay. Maybe exact full: "Across all gender-division combinations, the two sided Kolmogorov–Smirnov (KS) test, performed using the R function ks.test in the stats package (R Core Team, 2018), concludes the distributions of RPI′ in high attendance games are significantly different than those for low attendance games." Good.
- Page 9: "The two statistics which have significantly different home advantage means in the low attendance and high attendance subsets for the most division-gender combinations are PF and FTA: the two referee driven statistics." Exact.
- Page 9: "we perform 84 tests and thus use the Bonferroni correction to select a level of significance of α = 0.05/84 = 0.0006." Exact.
- Page 9: "FT% is not significantly impacted by attendance in any gender-division combination." Exact.
- Page 9: "the dispersion parameters across the 11 statistics range from 0.68 (FGA) to 3.01 (FTA)." Exact.
- Page 9: "we reject the null hypothesis of equidispersion for all statistics expect DREB." Exact has "expect" typo. Use [sic].
- Page 9: "we select the generalized Poisson regression model for its ability to control for both over and under dispersion" Exact? Source: "we select the generalized Poisson regression model for its ability to control for both over and under dispersion (Famoye, 1993)." yes.
- Page 10: "convert the model coefficients, βj, to percent impact values ... through the transformation eβj −1." Use exact? Source: "we can convert the model coefficients, βj, to percent impact values (the percent a statistic total is increased or decreased by the term corresponding to the coefficient) through the transformation eβj −1." Contains "total" forbidden? We can quote shorter: "convert the model coefficients, βj, to percent impact values ... through the transformation eβj −1." But ellipsis. Fine. Maybe avoid quote with total.
- Page 10: "56 of the 66 total models..." contains total. Avoid? We can quote "56 of the 66 ... models produce fully positive 95% confidence intervals for the home court coefficient" with ellipsis. But exact? Use paraphrase not quote. But need verbatim quotes. We have enough. Could quote without "total": "56 of the 66 total models produce..." forbidden word? "total" maybe not betting line but invariant says never mention totals. Better avoid. Use paraphrase: "The paper reports 56 of 66 models with fully positive 95% confidence intervals..." not quote. Fine.
- Page 10: "BLK and AST have a much greater home team advantage compared to the other statistics, with home teams receiving over a 11% boost for each gender-division combination and advantages stretching all the way to 25.4% for men’s D1." Exact.
- Page 11: "the RPI′ coefficients are highly correlated (0.76) with the home advantage coefficients." Exact.
- Page 11: "larger crowds have greater impacts on their decisions, specifically increasing their bias in favor of the home team." Exact.
- Page 11: "develop robust adjustment methods for correcting the biases and inconsistencies present in NCAA basketball." Exact.
Good.

Need maybe include quote [PAGE 7] "RPI′ = Home Team RPI −Away Team RPI" exact? Source: "RPI′ = Home Team RPI −Away Team RPI" yes.
Need "neutral and home court impacts" maybe.

Let's write final. Ensure tags.
</NATIVE_REASONING>

<THINK_TRACE>
The source is an observational, multi-season box-score study, so the central inference must be derived as a layered argument rather than a single causal estimate. First, the paper establishes a raw home-away discrepancy: [PAGE 1] states that “Between the 2011-2012 and 2015-2016 seasons, NCAA teams performed better at home compared to on the road in nearly all box score statistics across both genders and all three divisions.” The next move is decomposition. The authors use neutral-location games to split the raw home-away gap into a home-versus-neutral component and a neutral-versus-away component; [PAGE 3] notes that “summing the home-neutral and neutral-away values for each statistic would reproduce the results of Fig. 1.” This matters because a home benefit and an away penalty are not the same causal object: scorekeeper favoritism toward the home team should appear mainly in the home-neutral term, while travel or unfamiliarity should appear mainly in the neutral-away term.

Second, the paper uses a subjectivity gradient. The largest average home boosts are for assists and blocks: [PAGE 3] reports “The average overall home boosts for statistics ranged from 0.9% (FGA) to 18.8% (BLK),” and [PAGE 3] adds that “AST and BLK, largely considered the most subjective statistics, have noticeably greater home advantages compared to the other more objective statistics.” The institutional mechanism is that NCAA scorekeepers are employed by the home team: [PAGE 2] says “the teams of scorekeepers (or statisticians as they are sometimes referred) tracking box score statistics are not a neutral party but are employed by the home teams of NCAA games.” A former NBA scorekeeper is quoted on “given broad discretion over two categories: assists and blocks” [PAGE 3]. Thus the inference is not merely that home teams play better; it is that discretionary attribution varies by location.

Third, the paper checks gender and division orderings. [PAGE 6] concludes that “men and higher divisions tend to see greater impact in the expected directions (home over neutral over away).” But this is not uniform: several statistics reverse or fail to sort, so the gray-zone audit must treat ordering as evidence, not law. The paper itself emphasizes that only some statistics have perfect division or gender sorting.

Fourth, attendance is tested as a referee-pressure channel. High-attendance home teams are stronger, so raw comparisons are confounded. The authors compute RPI and RPI′ and show that high- and low-attendance distributions differ: [PAGE 7] states that the Kolmogorov–Smirnov test “concludes the distributions of RPI′ in high attendance games are significantly different than those for low attendance games.” They then match high-attendance games to low-attendance RPI′ bins. The key result is that personal fouls and free-throw attempts are the statistics most consistently sensitive to attendance: [PAGE 9] identifies “PF and FTA: the two referee driven statistics.” Points also move, but plausibly as a downstream consequence of free throws. Free-throw percentage does not respond to attendance: [PAGE 9] says “FT% is not significantly impacted by attendance in any gender-division combination.” This blocks a simple “crowd improves home shooting” story.

Fifth, the regression layer controls for possessions, RPI′, and attendance. Because count dispersion is not Poisson, the paper uses a generalized quasi-Poisson log-link model; [PAGE 9] reports dispersion from “0.68 (FGA) to 3.01 (FTA)” and rejects equidispersion except for DREB. The home coefficient remains positive for almost all statistics, with BLK and AST largest. [PAGE 10] states that “BLK and AST have a much greater home team advantage compared to the other statistics, with home teams receiving over a 11% boost for each gender-division combination and advantages stretching all the way to 25.4% for men’s D1.” The RPI′ and home coefficients are correlated at 0.76 [PAGE 11], suggesting scorekeeper behavior may also track team strength.

The gray-zone audit is substantial. The design is not randomized: neutral games are selected, attendance is not assigned, and scorekeeper/referee bias is inferred rather than directly observed. Missing-data removal is large: 11,930 games removed from 153,570, leaving 141,640 [PAGE 3]. Attendance analyses remove 5,847 games with missing attendance, and home-away models remove 23,856 neutral games [PAGE 3]. Multiple testing is handled with Bonferroni thresholds, but model specification, unobserved travel, weather, injury, and crowd composition remain confounders. The paper’s strongest claim is therefore bounded: after conditioning on possessions, RPI′, and attendance, a home-location coefficient persists, especially for discretionary and referee-linked statistics. The weakest claim would be that every home advantage is bias; the source does not support that. The correct reading is a structured decomposition with residual causal ambiguity.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source defines a relative home-away percent-increase operator for statistic \(s\), gender-division \(g\), and season \(t\):
\[
\Delta^{HA}_{s,g,t}
=
100
\frac{
\bar{x}^{H}_{s,g,t}-\bar{x}^{A}_{s,g,t}
}{
\bar{x}_{s,g,t}
}
\]
where \(\bar{x}^{H}\) is the mean home-team statistic, \(\bar{x}^{A}\) is the mean away-team statistic, and \(\bar{x}\) is the overall mean in the filtered gender-division-season data. Units: percent, dimensionless after multiplying by 100; for count statistics the underlying \(x\) is a count per team-game, and for percentage statistics the underlying \(x\) is already a percentage. The paper’s operational wording is [PAGE 3]: “subtracting the average away team statistic value from the average home team statistic value, and dividing the difference by the overall average statistic value in the filtered dataset.” The mathematical singularity is \(\bar{x}_{s,g,t}=0\); then the relative percent is undefined. In ordinary NCAA team-season data this is rare for the examined statistics, but it is the formal breakdown point.

The decomposition operator is:
\[
\Delta^{HA}_{s,g,t}
=
\Delta^{HN}_{s,g,t}
+
\Delta^{NA}_{s,g,t}
\]
where \(HN\) is home versus neutral and \(NA\) is neutral versus away, each computed with the same relative-percent logic. [PAGE 3] states: “Note that summing the home-neutral and neutral-away values for each statistic would reproduce the results of Fig. 1.” This operator separates a home-team benefit from an away-team penalty. Breakdown occurs when neutral games are not exchangeable with home or away games; the source itself notes that neutral games “tend to have slightly stronger teams participating (measured by rating percentage index) and slightly lower attendance, which the exception of D1 neutral location games, which tend to have notably higher attendance” [PAGE 3].

The team-strength operator is rating percentage index:
\[
RPI = (WP \times 0.25) + (OWP \times 0.50) + (OOWP \times 0.25)
\]
where \(WP\) is team winning percentage, \(OWP\) is opponents’ winning percentage, and \(OOWP\) is opponents’ opponents’ winning percentage. Units: dimensionless proportion-weighted index. The game-level relative strength term is:
\[
RPI' = RPI_{H} - RPI_{A}
\]
Units: dimensionless difference, bounded in principle by the RPI range. [PAGE 7] gives both forms verbatim: “RPI = (WP × 0.25) + (OWP × 0.50) + (OOWP × 0.25)” and “RPI′ = Home Team RPI −Away Team RPI.”

The matching operator is not a causal model; it is a support-alignment procedure. The authors “Define 25 equal width bins \(b_1, \ldots, b_{25}\) across the range of RPI′ for the low attendance distribution” and within each bin sample high-attendance observations with replacement until the low-attendance count is matched [PAGE 8]. Units: bins are RPI′ units; counts are games. Breakdown regimes: if a bin has no high-attendance observations, the matched set is empty; if high and low attendance have limited common RPI′ support, the matched distribution cannot represent the target distribution. This is an overlap failure, not a numerical singularity alone.

The attendance test operator compares mean home advantage in bottom-quartile and top-quartile attendance games:
\[
T_{s,g} =
\frac{
\bar{D}^{high}_{s,g}-\bar{D}^{low}_{s,g}
}{
\widehat{\mathrm{SE}}
}
\]
where \(D_i = x^{H}_i - x^{A}_i\) is the game-level home advantage in statistic \(s\), and \(\bar{D}^{high}\) and \(\bar{D}^{low}\) are matched-sample means. Units: statistic units for \(D\); the test statistic is dimensionless. The paper performs two-sample t-tests and applies a Bonferroni correction: [PAGE 9] says “we perform 84 tests and thus use the Bonferroni correction to select a level of significance of α = 0.05/84 = 0.0006.” Breakdown: the t-test assumes adequate matching and approximate normality of means; sparse bins and repeated random matching are handled by 1000 iterations, but unmeasured confounders remain.

The regression operator is a quasi-Poisson/generalized-Poisson log-link model for statistic counts:
\[
Y_{i,s,g}
\sim
\mathrm{QuasiPoisson}(\mu_{i,s,g})
\]
\[
\log \mu_{i,s,g}
=
\beta_{0,s,g}
+
\beta_{H,s,g} H_i
+
\beta_{P,s,g} P_i
+
\beta_{R,s,g} RPI'_i
+
\beta_{M,s,g} A^{M}_i
+
\beta_{U,s,g} A^{U}_i
\]
where \(Y\) is a team-game count, \(H_i\) is a home indicator, \(P_i\) is possessions, \(RPI'_i\) is the home-minus-away RPI difference, and \(A^{M}_i\) and \(A^{U}_i\) are medium- and high-attendance indicators relative to the low-attendance reference. Units: \(Y\) is count per team-game; \(P\) is possessions per game; attendance indicators are dimensionless; \(\beta\) coefficients are log-count changes per unit covariate. The paper selects this family because [PAGE 9] “we select the generalized Poisson regression model for its ability to control for both over and under dispersion,” and it reports dispersion from “0.68 (FGA) to 3.01 (FTA)” with rejection of equidispersion except DREB [PAGE 9]. Breakdown regimes: if dispersion is ignored, standard errors are wrong; if the log link is misspecified or if a possession extreme dominates leverage, coefficients can be unstable. The paper notes high-leverage games in the top 0.1% of possessions are underestimated [PAGE 9].

Coefficient interpretation uses:
\[
\mathrm{percent\ impact}_j
=
100(e^{\beta_j}-1)
\]
Units: percent change in expected count per unit covariate. [PAGE 10] describes conversion “through the transformation \(e^{\beta_j}-1\).” The reported pattern is that BLK and AST are largest; PF and FTA remain important after attendance controls; 56 of 66 models have fully positive 95% intervals, 9 contain zero, and one men’s D1 FGA interval is fully negative [PAGE 10]. The RPI′ coefficients correlate 0.76 with home coefficients [PAGE 11], which is evidence of a strength-linked pattern but not proof of scorekeeper causation.

Exact quoted evidence anchors: [PAGE 3] “The average overall home boosts for statistics ranged from 0.9% (FGA) to 18.8% (BLK)”; [PAGE 3] “AST and BLK, largely considered the most subjective statistics, have noticeably greater home advantages compared to the other more objective statistics”; [PAGE 9] “The two statistics which have significantly different home advantage means in the low attendance and high attendance subsets for the most division-gender combinations are PF and FTA: the two referee driven statistics”; [PAGE 9] “FT% is not significantly impacted by attendance in any gender-division combination”; [PAGE 11] “larger crowds have greater impacts on their decisions, specifically increasing their bias in favor of the home team.” Data-removal breakdown: 153,570 scraped games, 11,930 removed for missing or inconsistent data, final 141,640; 5,847 missing attendance removed for attendance analyses; 23,856 neutral games removed for home-away models [PAGE 3].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s lineage runs through three scientific traditions. The first is traditional home-advantage research emphasizing travel, spectator support, and home familiarity; the source cites Stefani (2008) for that view [PAGE 2]. The second is officiating-bias research: Anderson and Pierce (2009) on NCAA foul differentials, Garicano et al. (2005) on soccer referee favoritism under social pressure, and Moskowitz and Wertheim (2011) on referee explanations for home success [PAGE 2, PAGE 7]. The third is scorekeeper-bias research: van Bommel and Bornn (2017) on NBA box-score adjustment, plus journalistic evidence from Craggs (2009), Bialik (2014), Biderman (2009), and Moore (2015) that assists and blocks are discretionary [PAGE 3]. The neutral-location design has an older lineage in Harville and Smith (1994), but the source argues that neutral data had not previously been used to quantify home impact on box-score statistics [PAGE 2].

A retrocausal reading is useful: later modeling choices can make earlier summary patterns look more causal than they are. The raw home-away gap is real in the data, but the causal interpretation depends on decomposition, matching, and regression. Multi-week traps include: treating neutral games as a clean control despite their different team strength and attendance profile [PAGE 3]; comparing high- and low-attendance games without RPI′ matching, since stronger home teams draw larger crowds [PAGE 7]; ignoring multiple comparisons across 84 attendance tests and 66 regression models [PAGE 9, PAGE 10]; treating the gender/division ordering as universal when only some statistics sort perfectly [PAGE 6]; and overreading free-throw percentage as referee evidence even though [PAGE 9] reports no attendance effect. A further trap is assuming the home coefficient is entirely bias; the paper explicitly allows on-court performance and states that adjustment methods would need careful basketball assumptions [PAGE 11]. The historical lesson is that home advantage is a composite of physical performance, crowd pressure, institutional discretion, and selection into game locations, and the source’s contribution is to make the discretionary components measurable rather than to collapse them into one cause.

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression appears here as a decision-maker’s default under ambiguity. A scorekeeper who must decide whether a pass produced an assist, or whether a contested deflection is a block, faces a real-time judgment with social and institutional pressure; the home-team employment structure and the large AST/BLK home boosts are consistent with habitual home-favoring attribution [PAGE 2, PAGE 3]. A referee facing a large crowd faces a similar ambiguous judgment about contact; the attendance-linked PF and FTA results are consistent with habitual home-favoring whistle behavior [PAGE 9]. The counter-trap is the analyst’s overcorrection: attributing every home split to bias, or treating neutral games as a pristine counterfactual, would ignore selection and on-court performance. The source’s own guardrail is that neutral games differ in team strength and attendance and that regression controls only possessions, RPI′, and attendance [PAGE 3, PAGE 9]. The clock has two scales. The in-game clock is the real-time discretion window in which scorekeepers and referees act. The multi-season clock is the stability of the pattern: [PAGE 3] reports that “the average relative variance of the distribution of statistic home advantages across seasons is 0.15, compared to 0.80 for statistic distributions across gender-division combinations.” That stability supports a structural mechanism, not a one-season anomaly. Recursively, the outputs feed back: scorekeeper attributions shape box scores, box scores shape player and team evaluation, evaluation shapes RPI and team strength, and strength is correlated with home coefficients at 0.76 [PAGE 11]. The theory of mind must therefore include the analyst as a biased observer who can mistake a stable institutional pattern for a pure athletic effect, or mistake a physical effect for pure bias.

<CROSS_LAYER_VETO_ADJUDICATION>
The physical and biomechanical layer can affect shooting, rebounding, fatigue, travel, and contact, but it cannot fully veto the source’s human-bias inference. The strongest cross-layer argument is the subjectivity gradient: physical performance alone does not explain why assists and blocks have much larger home boosts than field-goal attempts and free-throw percentage, because assists and blocks require discretionary attribution [PAGE 3]. The referee layer is also not fully vetoed by physical contact: the attendance dose-response is specific to personal fouls and free-throw attempts after RPI′ matching, and free-throw percentage does not respond to attendance [PAGE 9]. That pattern is more consistent with whistle behavior than with a general crowd-driven physical improvement. Weather is not measured in the source; there are no weather variables, no temperature, wind, precipitation, or travel-weather interactions. A weather explanation is therefore an untested confounder, not a documented veto. The same applies to biomechanics: no kinematic, load, or injury data are provided. The cross-layer adjudication is bounded: physical and biomechanical factors may attenuate the size of the home coefficient, and weather may add noise, but they do not explain the subjective-statistic gradient or the attendance-linked referee-statistic pattern. A true veto would require blinded re-scoring or automated tracking to show that the AST/BLK gap disappears, or a crowd-assignment design to show that PF/FTA do not respond to attendance. Until then, the physical layer is a partial confounder, not a refutation.

<RLVR_COUNTERFACTUAL_VETOES>
1. Blinded re-scoring of assists and blocks. Counterfactual: a stratified random sample of games is re-scored by independent scorekeepers who are blind to home/away labels, team identity, and team strength, using the same video. Verifiable prediction: the home-away relative advantage in AST and BLK should attenuate substantially toward the objective-statistic range; if the blinded re-score reproduces the full 11% to 25% home advantage, the scorekeeper-bias explanation is vetoed for those statistics. The test can be verified with inter-rater agreement, confidence intervals, and a pre-registered attenuation threshold.

2. Automated player-tracking ground truth. Counterfactual: optical tracking or event-detection defines assists and blocks independently of the home scorekeeper. Verifiable prediction: automated AST and BLK home advantages should be smaller than the box-score advantages reported in the source, especially for men’s D1 and higher divisions; if automated data show the same large home advantage, the attribution-bias mechanism is vetoed and a physical/performance explanation gains priority. This is verifiable because the same games can be linked across box-score and tracking data.

3. Attendance-assignment or crowd-restriction quasi-experiment with RPI′ matching. Counterfactual: compare PF and FTA home advantages in high- versus low-attendance games for teams matched on RPI′, possessions, and opponent strength, ideally using exogenous crowd restrictions or neutral-site attendance variation. Verifiable prediction: PF and FTA home advantages should increase with attendance, while FT% should remain insensitive; if PF and FTA show no attendance dose-response, or if FT% moves with attendance instead, the referee-attendance-bias hypothesis is vetoed. Verification requires a pre-specified matched design and a Bonferroni-style correction across the examined statistics.
</RLVR_COUNTERFACTUAL_VETOES>