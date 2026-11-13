---
source: "2023 - Optimal Rest Days for Pitchers Maximizing Performance and Wins - Zilberman et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Wharton Sports Analytics Journal/2023"
pages: 19
model: deepseek/deepseek-v4.1-flash-1017
words: 9239
---

<NATIVE_REASONING>
We need answer to user. They provide drive source paper and ask? Actually no explicit question besides all instructions. Need produce research analysis in required XML sections, >=1000 words, no betting lines, formal equations units citations page markers verbatim quotes. Need analyze "Optimal Rest Days for Pitchers..." Perhaps frontier reasoning foundry asks deep multi-hop derivation & gray-zone audit. Need include source operators/equations, retrocausal genealogy, recursive theory of mind (crisis habit regression vs counter-trap vs clock), cross-layer veto adjudication (physical/biomechanical/weather veto proof), RLVR counterfactual vetoes 3 verifiable scenarios + predictions. Must avoid betting lines. Need cite exact [PAGE N] markers and verbatim quotes when source pages provided. Need formal LaTeX equations SI/information/probability units, assumptions, singularity/breakdown regimes. Zero betting lines. No fake ratios. >=1000 words across exact XML sections. Need perhaps mention no betting lines. Need discuss paper math: FIP, ERA correlation, rest days, adjusted excess FIP, win estimates via Pythagorean. Need ensure all sections present. Need likely a "brief" but >=1000. Desired oververbose 5. Need include exact quotes. Need "SOURCE_OPERATORS_AND_EQUATIONS" with formal LaTeX units. Need no invented fake ratios. Equations must be from source or derived legitimate: FIP formula not explicitly given in source but known? Need careful: source only mentions FIP, not formula. We can state source does not specify formula; but we can use FIP as performance metric (runs/9 innings, lower better). Need formal equation for FIP maybe standard: \(FIP = \frac{13 HR + 3(BB+HBP) - 2 K}{IP} + C\). Since not in source, cite? The instruction says source pages provided cite exact. We can label standard sabermetric identity not from source? Need avoid fake. Maybe state source does not define constant; paper reports FIP values. Unit: earned runs per 9 innings? FIP is ERA-scaled, runs per 9 innings (run/9 IP). Could use. Need equations for excess FIP: \(E_{i,d} = FIP_{i,d} - \overline{FIP}_i\) from [PAGE 10] "Subtract FIPDoR from career average FIP". Then quality adjustment. Need careful sign. Page 10 says "Subtract FIPDoR from career average FIP a. Derive the excess FIP produced at each level of rest". So \(E = \overline{FIP}_{career} - FIP_{d}\). But page 11 shows "Career average FIP - FIPDoR4,5,6 = Excess FIP vs career". Page 12 table shows adjusted excess. Page 13 total adjusted excess. Need define q. Page 12: "Multiply the beta (regression coefficients) for each value of rest days by corresponding subset... Subtract for specific DoR and quality categories by average for each quality category..." Hmm. Need formalize. We can state source describes two-stage adjustment but does not publish exact regression design matrix or coefficients. Use \(E_{d,q}^{adj} = E_{d,q} - \bar E_{q}\). Then total \(T_d = \bar E_d^{career} + \bar E_d^{quality}\). However source table values: career avg excess FIP [0,0.01,0.04], quality adjusted [0.077,-0.042,-0.036], total [0.077,-0.032,0.004]. Their sum for d=5: 0.01 + -0.042 = -0.032; d=6: 0.04 + -0.036 = 0.004. Yes. d=4: 0 +0.077=0.077. Good. So formal.

Win conversion: "Excess FIP x average MLB starter innings pitched" gives earned runs? Page 14 table: 4: excess FIP 0.042778? Hmm total adjusted excess FIP from page 13 for 4 is 0.077, but page 14 excess FIP column? It shows 0.042778 for 4, -0.017778 for 5, 0.002222 for 6. Hmm discrepancy: Page 13 total adjusted excess FIP: 0.077, -0.032, 0.004. Page 14 "Excess FIP" values differ maybe due different scaling? Let's compute if multiply by average MLB starter IP? It says Excess FIP x average MLB starter innings pitched. Table: Days 4: Earned runs adjustment * 5/9 innings pitched? Let's parse page 14:
Days of rest | Earned runs Adjustment * 5/9 innings pitched | MLB Average Runs scored (2015-2022) | Runs against after adjusted | Win Percentage | Multiplied by 162 Games
4 | 0.042778 | 4.5 | 4.560 | 0.4934 | 79.9292
5 | -0.017778 | 4.5 | 4.475 | 0.5028 | 81.4492
6 | 0.002222 | 4.5 | 4.503 | 0.4997 | 80.9440
"Excess FIP x average MLB starter innings pitched" beneath table.
Maybe 0.077 *? 5/9? 0.077 * (5/9)=0.042777. Yes. So "Excess FIP x average MLB starter innings pitched" then *5/9? The row says earned runs adjustment *5/9 IP. The excess FIP is per 9 IP; to convert to runs per start? Maybe multiply by 5/9? Wait if FIP excess = runs per 9 IP, average starter IP = 5? Earned runs per start = excess FIP * IP/9 = excess *5/9. Yes. They used average starter innings pitched = 5? Source page 14: 0.077 * 5/9 = 0.04278. For 5: -0.032*5/9=-0.01778. For 6: 0.004*5/9=0.00222. Good. So average starter IP = 5 innings. Unit: innings. Good.

Then Pythagorean win formula: Bill James. Standard: \(W\% = \frac{R^2}{R^2 + RA^2}\) or exponent 1.83? Source says Bill James' Pythagorean Win Formula; page 14 uses? Let's test: R=4.5, RA=4.560. If exponent 2: 4.5^2/(4.5^2+4.560^2)=20.25/(20.25+20.7936)=20.25/41.0436=0.4934. Yes exponent 2. Good. So \(p = R^2/(R^2+RA^2)\). Wins over 162 = 162p. Good.

Need discuss correlation r=0.51 FIP vs 0.33 ERA. Unitless. Maybe correlation of performances at different rest intervals? Source: "The correlation between FIP performances at different rest day intervals is 0.51, which is higher than the correlation for ERA, which is 0.33." This is dimensionless Pearson r. Need note no p-values/CI. Data 2015-2022 Statcast, 6000 starts. Page 15. Need exact quote "Examined the FIP of 6,000 starting pitching performances and grouped them by days of rest." [PAGE 15].

Need discuss "5 days optimal" adjusted excess FIP -0.032 lower better, versus 4 0.077, 6 0.004. Win estimates: 5 days => 81.4492 wins, 4 =>79.9292, 6=>80.9440. Difference 1.52 and 0.51. Need verify: 81.4492-79.9292=1.52. 81.4492-80.944=0.5052 ~0.51. Good.

Need discuss limitations: not enough data for <4 days, high variability [PAGE 7]. Focus 4,5,6. Statcast era 2015-2022. Injuries null factor due Bradbury quote. Possible decrease in pitcher quality adding additional pitchers to rotation. Need quote page 17: "there exists little evidence to show that the days of rest affect future injury among adults [athletes]." Actually source says "JC Bradbury, a sabermetrician, wrote, “there exists little evidence to show that the days of rest affect future injury among adults [athletes].”" Need exact.

Need "retrocausal genealogy": historical/scientific lineage & multi-week traps. Discuss five-man rotation norm, mental bias akin aversion to underhanded free throws [PAGE 3], Scherzer 2017 NLDS [PAGE 2], Pythagorean wins Bill James, FIP sabermetrics. Multi-week traps: if team adopts six-man rotation, rotation size changes, player quality dilution, workload redistribution, playoff usage, injury confounding. Need "retrocausal" maybe trace how conclusion flows backward from data choices and from historical norms. Need mention "source paper is retrospective observational, not causal; 'optimal' is conditional on model." The "multi-week traps" as time-scale: rest day effects may be acute vs cumulative; multi-week scheduling, off-days, doubleheaders, travel, weather, pitch counts. Need no betting lines.

Need "recursive theory of mind": crisis habit regression vs counter-trap vs clock. Interpret: decision-makers under crisis regress to habit (five-man rotation), counter-trap is "do opposite" (throw short rest like Scherzer) or over-adjust to six-man; clock is in-season schedule and playoffs. Need discuss coach/manager/player beliefs, incentives, organizational inertia. Need cite Scherzer. Formal? Not necessarily. Need include recursive beliefs: manager believes pitcher needs rest, pitcher believes manager lacks confidence, front office believes fans expect ace. Counter-trap: using short rest in playoffs because ace "wants ball"; overusing bullpen. Clock: regular season 162 games vs postseason elimination, rest days. Need maybe "recursive theory of mind" is not in source; can frame as inference from case. Need avoid unsupported claims? We can label as interpretive.

Need "cross-layer veto adjudication": physical/biomechanical/weather veto proof. Need state what can veto the model: biomechanical load (pitch count, intensity, recovery), physical injury status, weather/travel, roster constraints. Source only adjusts FIP for career and quality, not pitch counts, weather, injury. Need cite page 18 questions. "How do pitchers’ pitch counts vary when they are on different amounts of rest and does it affect their performance?" and "Does not consider possible decrease in pitcher quality when adding additional pitchers to the rotation." Also injuries null. Need provide veto proof: If injury rate or biomechanical recovery contradicts, the 1.52 win estimate cannot be implemented. Need formal "veto criterion" maybe: if \(E[I_{d=5}] - E[I_{d=4}] > \Delta W_{5,4}/...\) Hmm must avoid fake ratios? Could use decision rule: implement if expected wins gain exceeds expected injury cost in wins. But units. Need not invent ratio? We can state "veto if expected injury-adjusted wins under 5 days are not greater than under 4 days." Equation: \(E[W_5] - E[W_4] - L_5 + L_4 > 0\), where L is expected lost wins due injury in wins. That's legitimate. Need units wins. Good. Physical/biomechanical/weather veto proof: source doesn't provide pitch count, velocity, weather, travel; these are omitted variables. Page 18 asks pitch counts. Page 17 injury null. Need "proof" perhaps demonstrate by contradiction: If 5-day rest only works because it selects healthier pitchers or easier schedule, then adjusted FIP does not identify causal effect. But source adjusts for career quality and pitcher quality groups; not for weather/travel/injury. Need cite page 10 "teams tend to provide more rest to poorer players and play better players more frequently." They adjust for quality. But no weather. Need say no cross-layer veto data in source; therefore veto adjudication must remain conditional. Need not overclaim.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. RLVR = reinforcement learning with verifiable rewards? Need create counterfactual scenarios with verifiable predictions. Must avoid betting lines. Should be "veto scenario": If X observed, model claim is vetoed/falsified. Need 3 verifiable scenarios. Examples:
1. Prospective randomized/ish rotation experiment or natural experiment: teams assigned 5-day vs 4-day rest with balanced quality, pitch counts, weather. Prediction: 5-day cohort wins ~1.52 more per 162 than 4-day; if not and CI includes zero, veto. Need specify metric: difference in Pythagorean wins, starter FIP, etc. Verifiable.
2. Pitch-count mediation test: stratify by pitch count and rest; if 5-day advantage disappears after conditioning on pitch count/innings, veto causal claim? Prediction: adjusted excess FIP for 5 remains lower at matched pitch counts. If not, veto.
3. Injury/roster feasibility: six-man rotation increases required starters; if replacement-level starters make 5-day rotation team worse by >1.52 wins or injury burden, veto implementation. Prediction: team with rotation depth above threshold gains; below threshold loses. Need define threshold maybe using projected WAR? But avoid fake. Could use "if adding sixth starter reduces average starter quality enough to offset 1.52 wins." Verifiable.

Need maybe include "predictions" with specific numbers from source: 5-day wins 81.45 vs 79.93 vs 80.94. For scenarios: 
- If matched cohort shows 5-day minus 4-day win rate not in [0.5,2.5]? Hmm use source estimate 1.52. 
- If adjusted excess FIP ordering not \(T_5 < T_6 < T_4\)? Source says T5=-0.032, T6=0.004, T4=0.077. Prediction: \(T_5 < T_6 < T_4\). Veto if ordering reverses or CI includes zero.
- If pitch count adjusted model eliminates effect. 
Need "verifiable RLVR vetoes" maybe include "reward function" and "veto condition" with observable data. Need not mention betting.

Need also "THINK_TRACE" >=400 words deep multi-hop derivation & gray-zone audit. Need be careful: "THINK_TRACE" could imply private chain-of-thought. We should not provide private chain-of-thought. But we can provide concise reasoning trace / derivation summary, not hidden CoT. The section is required. Need satisfy with "audit trace" not internal monologue. We can say "This is a high-level audit trace, not private chain-of-thought." But user requested exact XML. Need include. We can provide transparent derivation. Need >=400 words. The overall >=1000 words. Need count roughly. Need ensure exact XML sections all present. Could include only those sections, no extraneous? Need maybe include a short intro? They said exact XML sections. We can include only those XML tags. Need no betting lines. Need cite pages.

Need formulate formal equations. Need units. Need assumptions and breakdown regimes. Need source page citations. Need exact verbatim quotes. Ensure quotes exact. Let's gather exact quotes:

PAGE 2: "During the 2017 NLDS, the Washington Nationals used Max Scherzer as a starter in game 3. However, two days later in game 5, Scherzer was brought in from the bullpen in the 5th inning of a 4-3 game..." and "Scherzer proved to be a disaster, allowing 4 runs and costing his team the elimination game, as well as their season." Need exact? Text has ellipsis. Use quote segments.

PAGE 3: "Five-man rotations have been the regular season norm for decades. This long-standing standard may lead to a mental bias, similar to the aversion to underhanded free throws in basketball." and "Are teams following the norm because it is the norm, or because it is correct?"

PAGE 5: "The correlation between FIP performances at different rest day intervals is 0.51, which is higher than the correlation for ERA, which is 0.33." and "FIP focuses on what the pitcher can control, and removes confounding factors like defensive plays by fielders and ballpark dimensions, providing a better estimate of pitcher performance."

PAGE 6: "Giving a starting pitcher 1,2,3 or 7 days of rest between starts diminishes their performance." and table values. "Too many or too little days of rest are home to largely negative outliers"

PAGE 7: "There is not enough data to make proper assumptions about pitcher starts with less than 4 days of rest. This creates higher variability, making it unreliable to use as a predictor." and "The research will focus on pitching with 4, 5, or 6 days of rest between starts"

PAGE 10: "Subtract FIPDoR from career average FIP" "Derive the excess FIP produced at each level of rest" "Categorize players into three groups based on percentiles and adjust for career performance." "Given that teams tend to provide more rest to poorer players and play better players more frequently."

PAGE 11: "Once adjusted for career average performance, 4 days of rest stands out as the lowest" Hmm lower FIP better but table says median excess FIP 0,0.01,0.04 so 4 is lowest. But then quality adjustment changes. Need note.

PAGE 12: "After adjusting for the quality of pitcher, we can see that 5 days of rest produces the best results…." and table.

PAGE 13: total adjusted excess FIP table.

PAGE 14: "Teams that have their pitchers pitch with 5 days of rest between starts should gain an average of…." "1.52 more wins per season than teams playing their pitchers with 4 days of rest." "0.51 more wins per season than teams playing their pitchers with 6 days of rest between starts." "Derived using Bill James’ Pythagorean Win Formula" and "Excess FIP x average MLB starter innings pitched"

PAGE 15: "Examined the FIP of 6,000 starting pitching performances and grouped them by days of rest." "Created Adjusted Excess FIP by adjusting for the pitchers’ individual averages and for grouped pitcher quality." "Used Bill James’ Pythagorean Win Formula to calculate wins."

PAGE 16: "The four day rest rotation (five man) and the six day rest rotation (seven man) produce an inferior number of wins compared to a five day rest rotation (six man)." "By switching from the traditional four to a five day rest rotation, teams can add an average of 1.52 wins per season."

PAGE 17: "there exists little evidence to show that the days of rest affect future injury among adults [athletes]." "We are not barring the potential for there to be varying injury levels as a result of differing numbers of rest days." "Therefore, for the purposes of this experiment, we viewed injuries as a null factor."

PAGE 18: "How do pitchers’ pitch counts vary when they are on different amounts of rest and does it affect their performance?" "Should different strategies be employed in the playoffs?" "Data only includes the Statcast era (using 2015 -2022)" "Does not consider the possible decrease in pitcher quality when adding additional pitchers to the rotation."

Need cite [PAGE N] exactly.

Need formal LaTeX equations. Let's design.

Define:
- \(FIP_{i,s,d}\) = FIP for pitcher \(i\), start \(s\), rest days \(d\). Units: earned runs per 9 innings (ERA-scaled; lower better). Source reports FIP values and uses lower-better direction [PAGE 9].
- \(\overline{FIP}_i\) = career average FIP for pitcher \(i\), units same.
- \(E_{i,d} = \overline{FIP}_i - FIP_{i,d}\). Units runs/9 IP; positive means worse than career? Wait if FIP lower better, \(\overline{FIP} - FIP_d\): if FIP_d lower than career (better), E positive. But source table page 11 says median excess FIP for 4 days 0, 5 0.01, 6 0.04. If positive = worse? Let's check: They say "Better FIP = lower FIP"; "Once adjusted for career average performance, 4 days of rest stands out as the lowest" with median excess FIP 0 for 4, 0.01 for 5, 0.04 for 6. If excess = career avg - DoR FIP, lower FIP at 4 would produce positive excess (better). But table shows 4=0 lowest. Hmm maybe excess = FIP_DoR - career? Let's analyze. Page 10 says "Subtract FIPDoR from career average FIP" = career - DoR. If DoR FIP lower than career, positive. But page 11 says 4 days stands out as lowest with excess 0. That suggests maybe excess = FIP_DoR - career? But text says subtract FIPDoR from career. Could be "lowest" means lower FIP? Let's not overinterpret sign. We need formalize in a way consistent with page 12-13 values and "better FIP = lower FIP". In page 12, quality adjusted excess: 4=0.077, 5=-0.042, 6=-0.036. They say 5 best. Lower is better, so -0.042 lower than 0.077 and -0.036. That matches lower excess = better. Thus positive excess is worse. Page 11 median excess: 4=0, 5=0.01, 6=0.04; lower 4 better. So excess likely \(FIP_d - \overline{FIP}\) (positive worse). But page 10 says "Subtract FIPDoR from career average FIP" which would be opposite. Could be a typo or they define FIPDoR - career? Need perhaps define as "excess FIP relative to career with sign convention positive = worse, as inferred from [PAGE 9] and [PAGE 12]" and quote page 10 verbatim but note sign ambiguity. Good. We can state:
Let \(E_{i,d}=FIP_{i,d}-\overline{FIP}_i\) under the paper's displayed lower-is-better convention; this is "excess FIP" where positive means worse than career. The source's instruction says "Subtract FIPDoR from career average FIP" [PAGE 10], which would flip the sign; because all subsequent tables and conclusion use lower-is-better and 5-day negative value as best [PAGE 12], the operative sign convention is \(FIP_d - \overline{FIP}\) or equivalently the negative of the literal instruction. Need be precise. Is that okay? It highlights gray-zone.

Alternatively define \(E = \overline{FIP} - FIP_d\) and then "better = higher" but page says lower better. Hmm. Need avoid confusion. We can write:
\[
\Delta_{i,d}=FIP_{i,d}-\overline{FIP}_i
\]
and call it "excess FIP (positive = worse)" consistent with tables [PAGE 11-13]. Then note source wording [PAGE 10] could imply opposite; audit flag. Good.

Quality adjustment:
Let \(Q_i \in \{G,A,B\}\) be quality bin. \(\bar \Delta_{d,Q}\) average. Then \(A_{d,Q}=\bar\Delta_{d,Q}-\bar\Delta_Q\), where \(\bar\Delta_Q\) is average across rest days within quality bin? Source page 12: "Subtract for the specific DoR and quality categories by the average for each quality category" -> yes. Then aggregate over quality bins with weights \(w_Q\) (proportion of starts or pitchers? source says "Multiply beta ... by corresponding subset" maybe regression coefficients). We can write:
\[
T_d = \bar\Delta_d + \sum_Q w_Q A_{d,Q}
\]
But page 13 total = career avg excess + quality adjusted excess (unweighted? values). For d=5: 0.01 + (-0.042) = -0.032. For d=6: 0.04 + (-0.036)=0.004. For d=4: 0 +0.077=0.077. So yes. \(w_Q\) not shown. Could write simply \(T_d=\bar\Delta_d + A_d\) where \(A_d\) is displayed quality-adjusted excess. Need avoid fake weights. Use displayed values.

Win conversion:
\[
\Delta R_d = T_d \cdot \frac{\bar{IP}_{start}}{9}
\]
where \(\bar{IP}_{start}=5\) innings? Source page 14: "Earned runs Adjustment * 5/9 innings pitched" and "Excess FIP x average MLB starter innings pitched". So \(\bar{IP}=5\) IP/start. Units: runs per start. Then \(RA_d = \bar{R}_{MLB} + \Delta R_d\), with \(\bar{R}_{MLB}=4.5\) runs/game (source table). Then Pythagorean:
\[
p_d = \frac{\bar R^2}{\bar R^2 + RA_d^2}
\]
with exponent 2 as implied by table. Wins \(W_d=162 p_d\). Source table gives values. Need cite [PAGE 14]. Need note \(\bar R=4.5\) is "MLB Average Runs scored (2015-2022)" [PAGE 14]. Unit runs per game. Win percentage dimensionless. Wins per 162 games. Difference \(W_5-W_4=1.5200\), \(W_5-W_6=0.5052\). Good.

Correlation: \(r_{FIP}=0.51\), \(r_{ERA}=0.33\) dimensionless [PAGE 5]. Need maybe "not variance explained; \(r^2=0.2601\) and 0.1089, but source does not report \(r^2\)." Is that a fake ratio? It's mathematical. Fine. But maybe don't need.

Need "breakdown regimes": 
- \(d<4\): high variability, insufficient data [PAGE 7].
- \(d\ge 7\): negative outliers [PAGE 6].
- Small sample per pitcher/rest cell; selection bias: teams give more rest to poorer players [PAGE 10].
- Confounding omitted: pitch counts, weather, injury, rotation depth [PAGE 17-18].
- Model singularity? Not mathematical singularity but inference breakdown when data sparse, selection nonrandom, or when six-man rotation dilutes quality. Need state exact regimes. Use "breakdown regime" not fake.
- Also Pythagorean exponent? Source doesn't state exponent; table implies exponent 2. If exponent differs, win estimates shift. Need note.
- FIP constant? Source doesn't give; comparisons use within-sample FIP.

Need "SOURCE_OPERATORS_AND_EQUATIONS" include "Operators" maybe map: grouping, subtract, percentile categorize, regression coefficients, multiply, subtract, Pythagorean. Need include formal. Need page citations/verbatim. Need breakdown.

Need "RETROCAUSAL_GENEALOGY": historical/scientific lineage & multi-week traps. Need mention:
- 2017 NLDS Scherzer short rest [PAGE 2] is motivating case.
- Five-man rotation norm [PAGE 3], mental bias.
- Sabermetric lineage: FIP vs ERA [PAGE 5], Bill James Pythagorean [PAGE 14], JC Bradbury injury quote [PAGE 17], Statcast era [PAGE 18].
- Multi-week traps: 
  1. Rest-day effect is estimated on starts, but rotation decisions occur over weeks/months; scheduling off-days, travel, weather, doubleheaders create non-random rest. A team could "add rest" but actually alter rotation quality.
  2. Six-man rotation adds starts by worse pitchers; source explicitly omits decrease in pitcher quality [PAGE 18].
  3. Injury latency: rest might affect injury over multi-week horizons; source treats injuries as null [PAGE 17]. If injury risk accumulates, short-term FIP gains can be reversed.
  4. Playoff usage: Scherzer case shows crisis overrides regular-season optimization [PAGE 18 question "Should different strategies be employed in the playoffs?"]. 
Need "retrocausal" maybe "the conclusion is retrocausally constructed by prior choices: FIP chosen because r=0.51; excluding <4 days because sparse; adjusting for quality because teams sort rest by quality; using Pythagorean because wins are outcome." Good.

Need "RECURSIVE_THEORY_OF_MIND": Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: under playoff crisis, manager reverts to "ace available now" and short rest, as Scherzer. The paper says Nationals overlooked need for rest [PAGE 3]. This is a habit/mental bias, not evidence.
- Counter-trap: overcorrection to six-man rotation or rigid 5-day schedule; can dilute rotation and ignore in-game leverage. The paper warns six-day rotation inferior [PAGE 16] and omits quality decrease [PAGE 18].
- Clock: regular season 162 games vs postseason elimination; rest days are not independent of calendar. Need model two clocks: acute recovery clock (days) and season workload clock (weeks/months). Recursive ToM: manager models pitcher's recovery, pitcher models manager's confidence, front office models fan/media pressure. Need maybe use "belief state" equations? Not necessary, but maybe formal? Could define belief but not required. Need include source citations. Need avoid unsupported psychological claims beyond interpretive.

Need "CROSS_LAYER_VETO_ADJUDICATION": Physical/biomechanical/weather veto proof.
- Define "veto" as layer-specific condition that nullifies implementation even if FIP model says 5 days optimal.
- Physical: injury status and recovery; source treats injuries null [PAGE 17] but admits potential variation. Veto if injury-adjusted wins not greater.
- Biomechanical: pitch counts, intensity, velo, delivery; source asks pitch counts [PAGE 18]. Veto if effect disappears at matched pitch count or if 5-day rest requires higher per-start load? Actually 5-day rest between starts may allow more pitches? Need not.
- Weather/travel: heat, rain delays, travel; not in source. Veto if 5-day schedule systematically exposes pitchers to harsher conditions or if weather confounds rest assignment. Need "proof" maybe by omitted-variable argument: The estimated \(T_d\) is conditional on no weather effects. If weather/travel affects FIP and is correlated with rest days, \(E[T_d]\) biased. Need equation:
\[
FIP_{i,s} = \alpha_d + \beta X_{i,s} + \gamma Z_{i,s} + \epsilon_{i,s}
\]
where X pitch count, Z weather/travel, but source estimates only \(\alpha_d\) plus career/quality adjustments. If \(\text{Cov}(d, Z)\neq0\) and \(\gamma\neq0\), omitted-variable bias. Units: FIP runs/9, coefficients. This is a formal audit. It's not fake; it's standard regression. Need include.
- "Veto proof": There is no layer-specific data in paper to prove safety; therefore the only defensible claim is conditional. The paper itself says "may influence how teams may apply the data discovered" [PAGE 17]. Need quote.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 scenarios. Need maybe "RLVR" = reward learning with verifiable rewards? We can define "verifiable veto" as a falsifiable test with observable data and a pre-registered decision rule. Need include predictions. Need avoid betting. Use equations maybe.
Scenario 1: Pre-registered matched-cohort comparison. Data: starts 2015-2022 or prospective. Match on pitcher quality, opponent? Hmm opponent not in source but can match. Outcome: Pythagorean wins or run prevention. Prediction: \(W_5-W_4 \in [0.5,2.5]\) wins/162? Actually source says 1.52. Veto if difference ≤0 or CI includes 0. Need specify "verifiable reward": estimated difference and CI. Good.
Scenario 2: Pitch-count/load stratified replication. Prediction: \(T_5<T_6<T_4\) after conditioning on pitch count and innings. Veto if ordering not preserved or if 95% CI for \(T_5-T_4\) includes 0. Need use "95%" maybe no source but test. Good.
Scenario 3: Rotation-depth counterfactual. Prediction: Teams with replacement-level sixth starter lose more than 1.52 wins; teams with above-average depth gain. Veto if adding sixth starter's quality drop exceeds 1.52 wins across all depth strata. Need maybe formal: Let \(\Delta Q_6\) be wins lost from replacing 5th starter with 6th. If \(\Delta Q_6 > 1.52\) then six-man rotation veto. Source says does not consider decrease [PAGE 18]. Good.

Need "3 verifiable RLVR veto scenarios + predictions" maybe each with "Veto if" and "Prediction from paper". Need include exact numbers.

Need overall >=1000 words. XML sections. Need maybe word count ~2000. Need no betting lines. Avoid mention "odds", "spread", "moneyline", "totals". Ensure not in text. Avoid "bet". Good.

Need be cautious with "ZERO TOY EQUATIONS" - don't invent fake ratios. Our equations are standard/from paper. Need label assumptions. Good.

Need "SOURCE_OPERATORS_AND_EQUATIONS" include "Formal LaTeX, units, page citations, breakdown." Good.

Need "THINK_TRACE" maybe 500 words. Need not include hidden chain-of-thought. We can phrase "Audit trace (high-level, not private CoT)". Good.

Need answer only XML sections. Let's draft carefully.

Potential issue: The user didn't explicitly ask a question. Maybe they expect analysis of source. We can provide the required sections. Good.

Let's outline:

<THINK_TRACE>
- State scope: paper estimates rest-day effect on FIP; not direct injury/weather.
- Multi-hop: 1) choose FIP over ERA due r 0.51 vs 0.33; 2) group by DoR; 3) raw FIP suggests 5/6 similar, 4 lower? Wait raw table: 4=4.24 (0.27% worse? Actually FIP lower better; average? 4=4.24, 5=4.19, 6=4.22. 5 best raw, 6 second, 4 third. Median FIP 4=4.46, 5=4.35,6=4.35. But after career adjustment 4 stands out lowest (0,0.01,0.04) meaning 4 best? Then quality adjustment flips to 5 best. Need explain sign.
- 4) adjust career and quality; 5) convert to runs via 5/9; 6) Pythagorean to wins.
- Gray-zone audit: sample size <4 days; selection bias teams give rest to poorer; no pitch count/weather/injury; sign ambiguity; Pythagorean exponent not stated; 1.52 wins small relative to CI unknown; no CI/p-values; "optimal" not causal.
- Need mention no betting lines. Good.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
- Eq1 FIP comparison and correlation.
- Eq2 raw table maybe not equation.
- Eq3 excess FIP.
- Eq4 quality adjustment.
- Eq5 total adjusted.
- Eq6 win conversion.
- Eq7 Pythagorean.
- Eq8 omitted variable bias for veto.
- Assumptions and breakdown regimes.
- Quotes and citations.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
- Historical lineage. Multi-week traps. 
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
- crisis habit, counter-trap, clock. Use subheadings maybe.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
- Physical, biomechanical, weather. Veto proof. Equations. 
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
- 3 scenarios with predictions and veto conditions. 
</RLVR_COUNTERFACTUAL_VETOES>

Need ensure all exact XML tags. No markdown maybe okay inside. Use LaTeX. Need include page markers [PAGE N]. Verbatim quotes exact. Need not overdo.

Need check word count. We can write substantial. Let's draft around 2500 words? Desired oververbosity 5, but requirement >=1000. We can make ~1800. Need deep. Let's write.

Need avoid "odds" entirely. "No betting lines" not necessary to mention. Avoid words "bet", "wager", "line", "spread", "total", "moneyline". "line" can appear in "lineage", "outline", "baseline" maybe okay? Strict zero betting lines means don't mention betting lines; "lineage" is okay? It contains "line" but not betting. Better avoid "line" if possible? "lineage" required by section name RETROCAUSAL_GENEALOGY, not line. We can use "lineage" perhaps okay. "baseline" maybe avoid. "outlier" okay.

Need formal units:
- FIP unit: runs per 9 innings (R/9 IP). Actually FIP is ERA-like; "earned runs per nine innings" maybe not exactly earned; use "runs per 9 innings (ERA-scaled)". Source doesn't define. Good.
- \(T_d\) same unit R/9.
- \(\Delta R_d\) runs per start.
- \(p_d\) dimensionless probability [0,1].
- \(W_d\) wins per 162 games.
- \(r\) dimensionless correlation.
- \(\bar{IP}\) innings per start (IP/start).
- \(RA\) runs per game.
- \(L\) wins.
- Regression coefficients units: FIP per unit X. Good.

Need cite page 6 raw table values: 4 days FIP 4.24, 5 4.19, 6 4.22; FIP % diff from average: 0.27%, 1.32%, 0.72%. Wait page 6 table says 4 -> 0.27%, 5 ->1.32%, 6->0.72%. But if average ~4.25, 5=4.19 lower, % diff from average maybe +1.32% better? They use FIP % diff from average perhaps negative worse? Table: 1 day 5.18 -17.88% (worse), 2 4.59 -7.46, 3 4.55 -6.56, 4 4.24 0.27, 5 4.19 1.32, 6 4.22 0.72, 7+ 4.40 -3.51. So positive = better (lower FIP) despite lower FIP. So % diff = (average - FIP)/average. Not important. Need maybe avoid raw table.

Need note "median FIP 4=4.46, 5=4.35, 6=4.35" [PAGE 9]. After career adjustment "median excess FIP 4=0, 5=0.01, 6=0.04" [PAGE 11]. After quality "avg excess FIP adjusted for pitcher quality: 4=0.077, 5=-0.042, 6=-0.036" [PAGE 12]. Total adjusted: 4=0.077, 5=-0.032, 6=0.004 [PAGE 13]. Need explain sign: lower is better, so 5 best. But page 11 says 4 lowest (0) before quality; after quality 5 best. Good.

Need "FIP % diff from average" maybe not use.

Need exact quote "Better FIP = Lower FIP" [PAGE 9]. Use.

Need "benchmark of 4.23/4.36" page 8? Could mention not needed.

Need "Predicted FIP6 = 1.9094 + 0.5474 * FIP5" and "Predicted FIP5 = 1.7274 + 0.6083 * FIP4" [PAGE 8]. These are regression equations from source. Could include as source operators. Need maybe include them? They show additional day of rest. Good to include for completeness. Unit FIP. They are source equations. Need note benchmarks. Eq:
\[
\widehat{FIP}_{5}=1.7274+0.6083\,FIP_4,\quad \widehat{FIP}_{6}=1.9094+0.5474\,FIP_5
\]
with benchmarks 4.36 and 4.23 [PAGE 8]. Units R/9. This is exact. Good. Need include. This may be "operators". Nice.

Need "r=0.51 and r=0.33" page 5. Good.

Need "6000 starts" page 15. Good.

Need "Statcast era 2015-2022" page 18. Good.

Need "five-man rotation (4 days rest), six-man (5 days), seven-man (6 days)" page 16. Good.

Need "1.52 more wins per season than 4 days; 0.51 more than 6 days" page 14/16. Good.

Need "Bill James Pythagorean Win Formula" page 14. Good.

Need "JC Bradbury" page 17. Good.

Need "injury null factor" page 17. Good.

Need "Questions for Further Research" page 18. Good.

Need "weather" not in source. We can say source contains no weather variable. Good.

Need "biomechanical" not in source. We can say source does not measure. Good.

Need "cross-layer veto proof" maybe "The source's own limitation language is the proof that no cross-layer veto has been cleared." Use quote "this may influence how teams may apply the data discovered" [PAGE 17]. Good.

Need "RLVR" maybe define as "verifiable reward veto": each scenario has observable outcome and precommitted falsification. Good.

Need no "probability" units? Include.

Let's write final. Need not include analysis. Use final. Ensure XML tags exactly. Need maybe not include markdown bullets? XML with text okay. Need present.

Need ensure ">= 1,000-word depth" across sections. We can make ~2200. Good.

Let's compose.

Potential problem: "THINK_TRACE" may be interpreted as asking for chain-of-thought. We can write "High-level audit trace (summary, not private chain-of-thought)". That should be okay. Need >=400 words in that section. Let's write 500.

Let's count roughly. THINK_TRACE ~550. SOURCE ~700. RETRO ~350. RECURSIVE ~300. CROSS ~400. RLVR ~400. Total ~2700. Good.

Need exact quotes. Ensure quote marks. Use "FIP focuses on what the pitcher can control, and removes confounding factors like defensive plays by fielders and ballpark dimensions, providing a better estimate of pitcher performance." exact. Good.

Need "The correlation between FIP performances at different rest day intervals is 0.51, which is higher than the correlation for ERA, which is 0.33." exact. Good.

Need "Giving a starting pitcher 1,2,3 or 7 days of rest between starts diminishes their performance." exact. Good.

Need "There is not enough data to make proper assumptions about pitcher starts with less than 4 days of rest. This creates higher variability, making it unreliable to use as a predictor." exact. Good.

Need "The research will focus on pitching with 4, 5, or 6 days of rest between starts" exact. Good.

Need "Once adjusted for career average performance, 4 days of rest stands out as the lowest" exact [PAGE 11]. Good.

Need "After adjusting for the quality of pitcher, we can see that 5 days of rest produces the best results…." exact with ellipsis? Use quote. Good.

Need "Teams that have their pitchers pitch with 5 days of rest between starts should gain an average of…." exact. Good.

Need "1.52 more wins per season than teams playing their pitchers with 4 days of rest." exact. Good.

Need "0.51 more wins per season than teams playing their pitchers with 6 days of rest between starts." exact. Good.

Need "Examined the FIP of 6,000 starting pitching performances and grouped them by days of rest." exact. Good.

Need "The four day rest rotation (five man) and the six day rest rotation (seven man) produce an inferior number of wins compared to a five day rest rotation (six man)." exact. Good.

Need "By switching from the traditional four to a five day rest rotation, teams can add an average of 1.52 wins per season." exact. Good.

Need "there exists little evidence to show that the days of rest affect future injury among adults [athletes]." exact. Good.

Need "We are not barring the potential for there to be varying injury levels as a result of differing numbers of rest days." exact. Good.

Need "Therefore, for the purposes of this experiment, we viewed injuries as a null factor." exact. Good.

Need "How do pitchers’ pitch counts vary when they are on different amounts of rest and does it affect their performance?" exact. Good.

Need "Does not consider the possible decrease in pitcher quality when adding additional pitchers to the rotation." exact. Good.

Need "Should different strategies be employed in the playoffs?" exact. Good.

Need "Data only includes the Statcast era (using 2015 -2022)" exact. Good.

Need "Five-man rotations have been the regular season norm for decades. This long-standing standard may lead to a mental bias, similar to the aversion to underhanded free throws in basketball." exact. Good.

Need "Are teams following the norm because it is the norm, or because it is correct?" exact. Good.

Need "Scherzer proved to be a disaster, allowing 4 runs and costing his team the elimination game, as well as their season." exact. Good.

Need "During the 2017 NLDS, the Washington Nationals used Max Scherzer as a starter in game 3. However, two days later in game 5, Scherzer was brought in from the bullpen in the 5th inning of a 4-3 game..." exact? Include ellipsis. Good.

Need "The Nationals overlooked Scherzer’s need for rest days to return to peak performance." exact. Good.

Need "The correlation between FIP performances at different rest day intervals is 0.51, which is higher than the correlation for ERA, which is 0.33." exact. Good.

Need "Better FIP = Lower FIP" exact? Page 9 has "Better FIP = Lower FIP" with bullet. Good.

Need "Excess FIP x average MLB starter innings pitched" exact. Good.

Need "Derived using Bill James’ Pythagorean Win Formula" exact. Good.

Need "MLB Average Runs scored (2015-2022)" exact. Good.

Need "Earned runs Adjustment * 5/9 innings pitched" exact. Good.

Need "Median Excess FIP" table values. Good.

Need "Total Adjusted Excess FIP" table. Good.

Need "Quality Adjusted Excess FIP" table. Good.

Need "Career Avg. Excess FIP" table. Good.

Need "avg. excess FIP adjusted for pitcher quality" table. Good.

Need "Median FIP" table. Good.

Need "Days of Rest" table. Good.

Need "Combined FIP" table. Good.

Need "FIP % diff. from average" table. Good.

Need "Too many or too little days of rest are home to largely negative outliers" exact. Good.

Need "Predicted FIP6 = 1.9094 + 0.5474 * FIP5" exact. Good.

Need "Predicted FIP5 = 1.7274 + 0.6083 * FIP4" exact. Good.

Need "Benchmark of 4.23" and "Benchmark of 4.36" exact. Good.

Need "Additional day of rest graphed" exact. Good.

Need "Break graphs down into numbers" maybe not.

Need "Multiply the beta (regression coefficients) for each value of rest days by the corresponding subset (number of days of rest and quality of pitcher)." exact. Could include in operator mapping. Good.

Need "Subtract for the specific DoR and quality categories by the average for each quality category…" exact. Good.

Need "Finds the excess FIP after adjusting for pitcher quality" exact. Good.

Need "After adjusting for the quality of pitcher, we can see that 5 days of rest produces the best results…." exact. Good.

Need "After adjusting for quality, 5 DoR is strongest" exact. Good.

Need "Categorize players into three groups based on percentiles and adjust for career performance." exact. Good.

Need "Given that teams tend to provide more rest to poorer players and play better players more frequently." exact. Good.

Need "Derive the excess FIP produced at each level of rest" exact. Good.

Need "Subtract FIPDoR from career average FIP" exact. Good.

Need "Career average FIP - FIPDoR4,5,6 = Excess FIP vs career" exact. Good. This quote includes "1" at end? Ignore.

Need sign ambiguity. Good.

Need "What was the process?" maybe not.

Need "A solution which MLB teams can implement to increase their average wins per season." exact. Good.

Need "The potential limitation of injuries" exact. Good.

Need "Further Limitations" exact. Good.

Need "Questions for Further Research" exact. Good.

Need "Data only includes the Statcast era (using 2015 -2022)" exact. Good.

Need "Does not consider the possible decrease in pitcher quality when adding additional pitchers to the rotation." exact. Good.

Need "How do pitchers’ pitch counts vary when they are on different amounts of rest and does it affect their performance?" exact. Good.

Need "Should different strategies be employed in the playoffs?" exact. Good.

Need "Sources" not needed.

Need no betting lines. Good.

Let's write final now.
</NATIVE_REASONING>

<THINK_TRACE>
High-level audit trace (summary, not private chain-of-thought). The paper’s inference chain is: choose FIP over ERA because FIP is more stable across rest intervals, group starting-pitcher performances by days of rest, discard the sparse short-rest cells, adjust the remaining 4/5/6-day cells first for each pitcher’s career average and then for pitcher-quality bins, convert the resulting FIP differences into runs per start using average starter innings, then convert runs to win percentage with Bill James’ Pythagorean formula. The key numerical path is: raw FIP makes 5 and 6 days look similar and 4 days slightly worse; the career-average adjustment makes 4 days look lowest; the quality adjustment reverses the ranking so that 5 days has the best—i.e., lowest—adjusted excess FIP; that result is then projected to about 81.45 wins per 162 for 5-day rest versus 79.93 for 4-day and 80.94 for 6-day rest [PAGE 12][PAGE 13][PAGE 14]. The paper’s own headline is therefore not a raw descriptive fact but a model-dependent post-adjustment estimate: “By switching from the traditional four to a five day rest rotation, teams can add an average of 1.52 wins per season” [PAGE 16].

The gray-zone audit matters because several steps are not fully identified in the source. First, the source says “There is not enough data to make proper assumptions about pitcher starts with less than 4 days of rest. This creates higher variability, making it unreliable to use as a predictor” [PAGE 7], so any claim about 1–3 days rests outside the estimated domain. Second, the paper explicitly acknowledges selection: “Given that teams tend to provide more rest to poorer players and play better players more frequently” [PAGE 10]. That means naive rest-day comparisons are confounded by pitcher quality; the paper tries to repair this with career and quality-bin adjustments, but the exact regression specification, coefficients, standard errors, and confidence intervals are not printed. Third, the sign convention around “excess FIP” is a genuine audit flag: the source says “Subtract FIPDoR from career average FIP” [PAGE 10], but the displayed tables and the conclusion use lower-is-better FIP and treat the negative 5-day quality-adjusted value as best [PAGE 9][PAGE 12]. A reader must therefore treat the tables’ operative sign convention as the authoritative one, not the literal wording, or the direction of the argument flips. Fourth, the win conversion relies on an average starter workload of 5 innings—shown in the row “Earned runs Adjustment * 5/9 innings pitched” [PAGE 14]—and on a Pythagorean exponent that is not explicitly written but is implied by the table’s arithmetic. Fifth, injuries are deliberately nulled: “Therefore, for the purposes of this experiment, we viewed injuries as a null factor” [PAGE 17], even though the paper concedes “We are not barring the potential for there to be varying injury levels as a result of differing numbers of rest days” [PAGE 17]. Sixth, pitch count, weather, travel, and rotation-depth effects are not modeled; the paper itself asks “How do pitchers’ pitch counts vary when they are on different amounts of rest and does it affect their performance?” and admits it “Does not consider the possible decrease in pitcher quality when adding additional pitchers to the rotation” [PAGE 18]. Thus the defensible claim is conditional: within the 2015–2022 Statcast-era sample, after the paper’s quality adjustments, 5-day rest is associated with a small projected win gain, not that every team should mechanically switch to a six-man rotation.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The paper’s central performance variable is FIP, used because “FIP focuses on what the pitcher can control, and removes confounding factors like defensive plays by fielders and ballpark dimensions, providing a better estimate of pitcher performance” [PAGE 5]. The reported selection correlation is dimensionless Pearson \(r\): “The correlation between FIP performances at different rest day intervals is 0.51, which is higher than the correlation for ERA, which is 0.33” [PAGE 5]. Let \(FIP_{i,s,d}\) be pitcher \(i\)’s FIP in start \(s\) with \(d\) days of rest; its unit is runs per 9 innings, ERA-scaled, and lower is better: “Better FIP = Lower FIP” [PAGE 9]. The paper also reports two source regression identities: \(\widehat{FIP}_{5}=1.7274+0.6083\,FIP_{4}\) with “Benchmark of 4.36,” and \(\widehat{FIP}_{6}=1.9094+0.5474\,FIP_{5}\) with “Benchmark of 4.23” [PAGE 8]. Units are FIP runs per 9 innings; the intercepts and slopes are empirical regression coefficients, not physical constants.

The first adjustment operator is an excess-FIP construction. The source describes it as “Subtract FIPDoR from career average FIP” and “Derive the excess FIP produced at each level of rest” [PAGE 10]. Because the tables use lower-is-better and call \(-0.042\) the best quality-adjusted value [PAGE 12], the operative sign convention in the displayed results is best represented as
\[
\Delta_{i,d}=FIP_{i,d}-\overline{FIP}_{i},
\]
where \(\overline{FIP}_{i}\) is pitcher \(i\)’s career-average FIP and \(\Delta_{i,d}\) is “excess FIP” in runs per 9 innings, with positive values worse. The paper then says “Categorize players into three groups based on percentiles and adjust for career performance” [PAGE 10]. Let \(Q_i\in\{G,A,B\}\) index the good/average/bad quality bins. The quality-adjusted excess for rest level \(d\) and quality bin \(Q\) is
\[
A_{d,Q}=\overline{\Delta}_{d,Q}-\overline{\Delta}_{Q},
\]
where \(\overline{\Delta}_{d,Q}\) is the mean excess FIP for that rest-and-quality cell and \(\overline{\Delta}_{Q}\) is the corresponding quality-bin mean across rest levels; the source describes this as “Subtract        for the specific DoR and quality categories by the average for each quality category” and “Finds the excess FIP after adjusting for pitcher quality” [PAGE 12]. The displayed total adjusted excess is then
\[
T_d=\overline{\Delta}_{d}+A_d,
\]
where \(\overline{\Delta}_{d}\) is the career-average excess for rest level \(d\) and \(A_d\) is the displayed quality-adjusted excess. The source’s table gives \(T_4=0.077\), \(T_5=-0.032\), and \(T_6=0.004\) [PAGE 13], with units runs per 9 innings and lower better. This is why the paper says “After adjusting for the quality of pitcher, we can see that 5 days of rest produces the best results….” [PAGE 12].

The win conversion is:
\[
\Delta R_d=T_d\cdot\frac{\bar{IP}_{\text{start}}}{9},
\]
where \(\Delta R_d\) is the runs-per-start adjustment, \(\bar{IP}_{\text{start}}\) is average starter innings per start (the table uses \(5/9\) innings, i.e., 5 innings per start), and \(T_d\) is in runs per 9 innings [PAGE 14]. The adjusted runs against are
\[
RA_d=\bar{R}_{\text{MLB}}+\Delta R_d,
\]
with \(\bar{R}_{\text{MLB}}=4.5\) “MLB Average Runs scored (2015-2022)” in runs per game [PAGE 14]. Bill James’ Pythagorean win percentage is then
\[
p_d=\frac{\bar{R}_{\text{MLB}}^2}{\bar{R}_{\text{MLB}}^2+RA_d^2},
\]
dimensionless in \([0,1]\), and wins per 162 games are
\[
W_d=162\,p_d.
\]
The source table reports \(W_4=79.9292\), \(W_5=81.4492\), and \(W_6=80.9440\) wins per 162 [PAGE 14]. Hence \(W_5-W_4=1.5200\) and \(W_5-W_6=0.5052\), matching the claims “1.52 more wins per season than teams playing their pitchers with 4 days of rest” and “0.51 more wins per season than teams playing their pitchers with 6 days of rest between starts” [PAGE 14]. The data base is “6,000 starting pitching performances” grouped by days of rest [PAGE 15], and the paper’s conclusion is that “The four day rest rotation (five man) and the six day rest rotation (seven man) produce an inferior number of wins compared to a five day rest rotation (six man)” [PAGE 16].

Breakdown regimes and assumptions: (i) \(d<4\) is outside the reliable domain because “There is not enough data to make proper assumptions about pitcher starts with less than 4 days of rest” [PAGE 7]; (ii) \(d\ge7\) is flagged as an outlier region: “Too many or too little days of rest are home to largely negative outliers” [PAGE 6]; (iii) the estimated 4/5/6-day comparison assumes that career-average and three-bin quality adjustments absorb the nonrandom assignment of rest, despite the explicit warning that “teams tend to provide more rest to poorer players and play better players more frequently” [PAGE 10]; (iv) the win projection assumes \(\bar{IP}_{\text{start}}=5\), \(\bar{R}_{\text{MLB}}=4.5\), Pythagorean exponent 2, and no injury/pitch-count/weather/rotation-depth mediation [PAGE 14][PAGE 17][PAGE 18]. If any of those assumptions fails materially, the numerical ordering \(T_5<T_6<T_4\) can weaken or reverse. The source itself limits the era to “the Statcast era (using 2015 -2022)” [PAGE 18].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s motivation is built backward from a crisis case rather than forward from a clean experimental design. The opening case is Max Scherzer in the 2017 NLDS: “During the 2017 NLDS, the Washington Nationals used Max Scherzer as a starter in game 3. However, two days later in game 5, Scherzer was brought in from the bullpen in the 5th inning of a 4-3 game...” and “Scherzer proved to be a disaster, allowing 4 runs and costing his team the elimination game, as well as their season” [PAGE 2]. The authors then infer organizational bias: “Five-man rotations have been the regular season norm for decades. This long-standing standard may lead to a mental bias, similar to the aversion to underhanded free throws in basketball” and ask, “Are teams following the norm because it is the norm, or because it is correct?” [PAGE 3]. That is the retrocausal genealogy: an observed playoff failure is used to question a longstanding regular-season convention, and the convention is then tested with FIP rather than with direct biomechanical or injury data.

The scientific lineage is sabermetric and Pythagorean. FIP is preferred to ERA for stability and controllability [PAGE 5]; Bill James’ Pythagorean formula supplies the bridge from run prevention to wins [PAGE 14]; and JC Bradbury is invoked for the injury null: “there exists little evidence to show that the days of rest affect future injury among adults [athletes]” [PAGE 17]. The statistical lineage is observational and retrospective: 6,000 starts, grouped by rest days, with career and quality adjustments [PAGE 15]. The multi-week traps are therefore substantial. First, rest days are assigned by managers over weeks of rotation scheduling, off-days, doubleheaders, travel, and weather; if healthier or better pitchers are more likely to receive 5 days while poorer pitchers receive 4 or 6, the adjusted estimate is still vulnerable to unmeasured workload and health sorting. Second, a six-man rotation changes not just rest but the identity of the sixth starter; the paper explicitly does not consider “the possible decrease in pitcher quality when adding additional pitchers to the rotation” [PAGE 18]. Third, injury latency is multi-week or multi-month: nulling injuries for the experiment [PAGE 17] is not proof that a full-season or multi-season switch is neutral. Fourth, playoff strategy is a different clock; the paper asks “Should different strategies be employed in the playoffs?” [PAGE 18], which is exactly where the Scherzer case arose. Thus the historical lineage supports a conditional regular-season rotation hypothesis, not a universal law that five days is always best in every calendar context.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: under elimination pressure, the manager’s belief model collapses toward availability and ace status. The Scherzer case is the archetype: the Nationals used him on short rest and “The Nationals overlooked Scherzer’s need for rest days to return to peak performance” [PAGE 3]. The recursive belief is: the manager believes the ace gives the best chance now; the pitcher believes the manager expects him to answer the call; the front office believes the fan/media environment demands the ace; and each layer reinforces the other until rest-day evidence is overridden. That is habit regression, not optimization.

Counter-trap: the opposite failure is to overcorrect mechanically to a six-man rotation or to treat 5 days as a rigid command. The paper’s own result is narrow: “After adjusting for the quality of pitcher, we can see that 5 days of rest produces the best results….” [PAGE 12], and “The four day rest rotation (five man) and the six day rest rotation (seven man) produce an inferior number of wins compared to a five day rest rotation (six man)” [PAGE 16]. A counter-trap would be to ignore rotation depth, opponent, pitch count, and postseason leverage because the average estimate says 5 days. The paper warns that adding a sixth starter may reduce quality [PAGE 18], so the counter-trap is real: the average treatment effect is not a universal roster rule.

Clock: there are at least three clocks. The acute recovery clock is measured in days between starts; the season workload clock is measured in weeks and months; the playoff clock is elimination-based and can compress decisions. The paper estimates a regular-season 162-game projection [PAGE 14] but asks whether playoff strategy should differ [PAGE 18]. A manager who uses the regular-season 5-day estimate inside a playoff elimination game is conflating clocks. The recursive theory-of-mind conclusion is: the safe decision rule is not “always 5 days,” but “5 days when the pitcher’s recovery, workload, and roster depth are in the modeled regime; short rest only under explicit crisis rules with load monitoring; and playoff usage governed by a separate decision model.”
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A cross-layer veto is a condition outside the FIP-rest model that can nullify implementation even if the paper’s adjusted FIP ordering is correct. The physical layer is injury and recovery. The paper treats injuries as null “for the purposes of this experiment” [PAGE 17] but admits “We are not barring the potential for there to be varying injury levels as a result of differing numbers of rest days” [PAGE 17]. A defensible veto rule is: implement 5-day rest only if the injury-adjusted expected win difference is positive,
\[
E[W_5]-E[W_4]-L_5+L_4>0,
\]
where \(W_d\) is wins per 162 and \(L_d\) is expected lost wins from injury/roster disruption under rest level \(d\), both in wins. If the left side is nonpositive, the physical layer vetoes the paper’s 1.52-win projection.

The biomechanical layer is pitch count, intensity, and delivery load. The source does not include pitch count in its model and explicitly asks, “How do pitchers’ pitch counts vary when they are on different amounts of rest and does it affect their performance?” [PAGE 18]. A regression audit would write
\[
FIP_{i,s}=\alpha_d+\beta X_{i,s}+\gamma Z_{i,s}+\varepsilon_{i,s},
\]
where \(\alpha_d\) is the rest-day effect in runs per 9 innings, \(X_{i,s}\) is pitch count or innings load, \(Z_{i,s}\) is a weather/travel vector, and \(\varepsilon_{i,s}\) is error. The paper effectively estimates a version of \(\alpha_d\) without \(X\) and \(Z\). If \(\gamma\neq0\) and rest days are correlated with \(X\) or \(Z\), the omitted-variable bias can be larger than the small \(T_5-T_4=0.109\) runs-per-9 difference implied by \(0.077-(-0.032)\) [PAGE 13]. The weather/travel layer is similarly absent: heat, rain delays, travel, and park conditions can affect both FIP and manager rest choices. The paper offers no weather variable, so there is no cross-layer proof that the 5-day estimate survives weather confounding.

The veto proof is therefore negative: the source has not cleared the physical, biomechanical, or weather layers. Its own limitation language says varying injury levels “may influence how teams may apply the data discovered” [PAGE 17], and its further-limitations section notes that the analysis “Does not consider the possible decrease in pitcher quality when adding additional pitchers to the rotation” [PAGE 18]. Thus the only safe adjudication is conditional: the FIP model supports a 5-day regular-season hypothesis within the 2015–2022 Statcast sample [PAGE 18], but a team must veto or modify that rule if injury, pitch-count, weather, or depth data show a countervailing win cost larger than the modeled 1.52-win gain.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
1. Matched-cohort replication veto. Pre-register a comparison of starts with 4, 5, and 6 days of rest matched on pitcher career FIP, quality bin, pitch count, opponent run environment, and home/away or travel context. The paper’s prediction is \(W_5-W_4\approx1.52\) wins per 162 and \(W_5-W_6\approx0.51\) wins per 162 [PAGE 14]. Verifiable veto: if the matched-cohort estimate of \(W_5-W_4\) is nonpositive or its uncertainty interval includes zero, the paper’s 1.52-win claim is vetoed as a general rotation rule. A secondary prediction is the ordering \(T_5<T_6<T_4\) in adjusted excess FIP [PAGE 13]; if that ordering reverses under matching, the adjustment pipeline is not robust.

2. Pitch-count/load mediation veto. Stratify or regress FIP on rest days with explicit pitch-count and innings-pitched controls, using the paper’s own question as the test: “How do pitchers’ pitch counts vary when they are on different amounts of rest and does it affect their performance?” [PAGE 18]. Prediction: the negative 5-day quality-adjusted excess \(T_5=-0.032\) remains lower than \(T_4=0.077\) and \(T_6=0.004\) after load controls [PAGE 13]. Verifiable veto: if the 5-day advantage disappears—e.g., if the controlled \(T_5-T_4\) estimate crosses zero or changes sign—then the effect is not a rest-day effect but a workload/selection effect. This veto is directly checkable with play-by-play pitch counts and the same Statcast-era data.

3. Rotation-depth counterfactual veto. Model the six-man rotation as replacing some starts by the fifth starter with starts by a sixth starter of lower quality. The paper explicitly does not consider “the possible decrease in pitcher quality when adding additional pitchers to the rotation” [PAGE 18]. Prediction: teams with above-average rotation depth should gain near the paper’s 1.52-win estimate, while teams whose sixth starter is sufficiently worse should lose wins. Verifiable veto: if the projected quality drop from the sixth starter exceeds 1.52 wins per 162 in the relevant depth stratum, then a universal switch to 5-day rest is vetoed for that team. The test is observable from projected starter quality, innings distribution, and the team’s actual win total; the paper’s own regular-season projection table provides the 79.9292, 81.4492, and 80.9440 win benchmarks to compare against [PAGE 14].
</RLVR_COUNTERFACTUAL_VETOES>