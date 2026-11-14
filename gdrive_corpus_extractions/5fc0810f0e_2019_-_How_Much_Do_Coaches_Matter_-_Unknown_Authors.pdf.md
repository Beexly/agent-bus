---
source: "2019 - How Much Do Coaches Matter - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2019"
pages: 25
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 6060
---

<NATIVE_REASONING>
The user wants me to analyze a research paper titled "How Much Do Coaches Matter?" by Christopher R. Berry and Anthony Fowler (2019 MIT Sloan Sports Analytics Conference paper). They want me to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to produce a comprehensive analysis following these exact sections. Let me break down what each section should contain:

1. THINK_TRACE: Deep multi-hop derivation & gray-zone audit. Need to analyze the methodology, statistical assumptions, potential weaknesses, gray zones (e.g., endogenous retention, individual coach evaluation, small sample sizes, block permutation limitations). At least 400 words.

2. SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations from the paper (r-squared definition, RSS decomposition, permutation test logic, regression models, simulation setup), units (proportion of variance, p-values, seasons, teams), page citations with exact markers, breakdown of tables. Need to cite [PAGE N] markers and include verbatim quotes where appropriate.

3. RETROCAUSAL_GENEALOGY: Historical/scientific lineage (Grusky 1960, 1963; Gamson and Scotch 1964; Berri et al. 2009; Goff 2013; Berry and Fowler 2018 political leaders paper). Multi-week traps (regression to the mean, transition costs, serial correlation, endogenous retention, false discovery rate).

4. RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This seems to be about how coaches/teams adapt over time, crisis responses, recursive expectations, the "clock" of tenure length affecting inference. Need to discuss individual coach evaluation (Belichik, Walsh, Seifert, Paul Brown, Halas), early career noise vs long tenure signal.

5. CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. This is a bit tricky because the paper is about coaching effects generally, not specifically physical/biomechanical/weather. But I can interpret this as cross-layer validity checks: what would veto the coaching effect claims? Physical layer (player physiology, injury, weather), biomechanical (fatigue, pitch counts in baseball), weather (outdoor sports), and how the paper addresses or fails to address these. The paper residualizes for opponent quality, home field, year. But weather isn't explicitly controlled. Biomechanical: pitch counts in baseball mentioned as defensive strategy. I need to construct a veto adjudication framework.

6. RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR (Reinforcement Learning Verifiable Rewards? Or just counterfactual veto scenarios) veto scenarios + predictions. Need to propose 3 specific counterfactual scenarios that could falsify/veto the paper's conclusions, with verifiable predictions.

Word count: >= 1,000 words total across sections. THINK_TRACE alone >= 400 words.

Let me start drafting carefully, ensuring no betting lines (spreads, totals, moneylines, odds). The paper mentions "point margin", "wins/losses", "point spread" is not mentioned but "point margin" is okay? The invariant says never mention spreads, totals, moneylines, or odds. "Point margin" is not a betting line per se, it's the differential score. But "totals" might refer to over/under. The paper mentions "total points scored in the game" for college basketball. That's not a betting total in this context, it's an outcome variable. I should avoid framing it as betting. I'll be careful not to use "odds" or "spread" or "moneyline".

I need to cite exact [PAGE N] markers. The source text has page markers [PAGE 1 of 25] through [PAGE 25 of 25]. I should reference them like [PAGE 5], [PAGE 10], etc.

Let me outline the content:

THINK_TRACE (>=400 words):
- Multi-hop derivation of RIFLE: residualize game-team data -> aggregate to season-team -> regress on coach FE -> record R^2 -> permute coach identifiers as blocks -> recompute R^2 -> p-value = proportion of permuted R^2 > real R^2.
- Gray-zone audit: (1) block permutation preserves tenure distribution and serial correlation structure under null, but what if coach transitions are correlated with team trajectories beyond serial correlation? (2) Endogenous retention: Table 7 shows FDR close to .05 but CBB at .07. (3) Individual coach inference: low power early in tenure (first 4 seasons cannot reject null at .05). (4) Small number of coaches per team leads to coarse p-values (example with 1 team, 2 coaches, 3 seasons -> p can only be 0, 0.5, or 1). (5) R^2 difference vs effect size mapping is non-linear interpolation from Figure 2 simulations. (6) Post-treatment bias: player quality is potentially mediated by coach; RIFLE implicitly handles it but cannot separate roster construction from in-game tactics. (7) Multiple sports outcomes: p-hacking risk across many outcomes though they pre-specify some. Need to be rigorous.

SOURCE_OPERATORS_AND_EQUATIONS:
- Define residualized outcome: Y_{ist} = residual from regression of game-team outcome on opponent quality, year FE, home/away indicator. [PAGE 6]
- r^2 ≡ 1 - RSS/TSS. [PAGE 7]
- RSS = sum over coaches i and seasons t of (Y_it - Ybar_i)^2. [PAGE 7]
- Permutation: randomly permute coach identifiers within each team, keeping tenure as block. [PAGE 5-6]
- p-value = (1/B) sum_{b=1}^B 1[R^2_perm,b > R^2_real]. One-sided. [PAGE 5]
- Effect size mapping: simulate outcome = coach_effect + noise where coach_effect ~ N(0,1), noise scaled to achieve target R^2_prop. [PAGE 9-10]
- Endogenous retention simulation: Y_t = rho * Y_{t-1} + epsilon; turnover prob = intercept + slope * standardized lagged victory. [PAGE 12-13]
- Tables 1-6 values: list key prop estimates. MLB runs allowed .277; NFL fumbles .305; CFB points allowed .299; NBA points scored .319; CBB total points .393; NHL goals allowed .301.
- Units: proportion of variance (unitless, [0,1]); p-values (unitless probability); seasons (count); teams (count).
- Page citations for each.

RETROCAUSAL_GENEALOGY:
- Lineage: Grusky (1960, 1963) administrative succession; Gamson & Scotch (1964) scapegoating in baseball; Canella & Rowe (1995); Bradbury (2017) manager dummies; Berri et al. (2009) NBA coach dummies; Goff (2013) hierarchical random effects (8.5% MLB, 21% NFL variance); Berry & Fowler (2018) political leaders RIFLE.
- Multi-week traps: regression to the mean (coaching changes after bad years); transition costs (learning new system); serial correlation (lucky/unlucky streaks); endogenous retention (firing after poor performance); false positives from multiple testing (5% significance); small sample power (NFL victory modern era insignificant due to few games); small number of permutations with few coaches per team.
- Explain why null findings in succession studies don't imply interchangeability: average effect of changes can be zero while heterogeneity exists. [PAGE 3-4]

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: coaches hired after crisis (bad season) benefit from regression to mean; early success may be luck (Adam Walsh .412 first season, 62% of simulations produce as good). [PAGE 14-15]
- Counter-trap: long-tenure outliers (Belichik 17 seasons, residual victory .18, p=.0005; Paul Brown 5 seasons p=.008; George Halas 9pp above average over many seasons). [PAGE 14-15]
- Clock: tenure length as filtering mechanism; need 5 seasons for statistical significance in NFL; few observations per coach leads to failure to detect individual effects even if average effects exist. [PAGE 4, 14]
- Recursive theory of mind: teams infer coach quality from noisy outcomes; coaches infer job security from performance; this feedback creates endogenous retention. Stakeholders update beliefs recursively, but the signal-to-noise ratio is low early.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: player injury, aging, roster turnover. If team performance declines due to player aging coinciding with coach change, RIFLE might attribute to coach. However, block permutation accounts for serial correlation unrelated to coaches. But if aging is non-linear and coach changes happen at inflection points, veto risk remains.
- Biomechanical: pitch counts/arm fatigue in baseball (managerial defense strategy). [PAGE 10] This is a mechanism where coaches plausibly matter (runs allowed .277). Weather not explicitly residualized; home field advantage is, but weather-specific effects (cold NFL games, wind in baseball) are confounded with home/away and year.
- Veto proof: The paper controls opponent quality, home field, year. It does not control weather, injuries, or specific biomechanical load. A veto scenario: if a team's performance shift coincides with a coach change but is actually driven by a star player's injury recovery or weather pattern shift, RIFLE may falsely attribute to coach. However, since permutations preserve team-level time trends, pure team-specific trends are netted out. The residual veto is coach-change timing correlated with exogenous physical shocks.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable counterfactual veto scenarios + predictions.
1. Null simulation with endogenous retention: Already done in Table 7 (FDR close to .05). Counterfactual: increase slope of turnover-on-performance to -0.3 (stronger firing after bad years). Prediction: FDR should rise above .10, vetoing RIFLE validity in high-turnover settings.
2. Placebo outcome: permute coach identities but assign outcomes from a different sport/team where no coach overlap. Prediction: real R^2 difference should be indistinguishable from permuted distribution; if significant, indicates data leakage or confounding.
3. Mid-season coach change exclusion / within-season volatility: If coaching effects are real, outcomes should show a structural break at coach transition dates beyond what block permutation predicts. Prediction: In a subsample of teams with mid-season changes (rare per paper), the R^2 spike around transition dates should exceed permuted distribution; if not, effects are driven by between-season selection rather than in-season coaching.

Wait, the paper says coach rarely changes mid-season [PAGE 5]. So scenario 3 could be about synthetic mid-season changes.

Let me make sure each RLVR scenario is verifiable and has a clear prediction.

Now word count. I need to ensure total >= 1000 words. THINK_TRACE >= 400. I'll aim for roughly:
- THINK_TRACE: 500 words
- SOURCE_OPERATORS_AND_EQUATIONS: 350 words
- RETROCAUSAL_GENEALOGY: 300 words
- RECURSIVE_THEORY_OF_MIND: 300 words
- CROSS_LAYER_VETO_ADJUDICATION: 250 words
- RLVR_COUNTERFACTUAL_VETOES: 250 words
Total ~1950 words. Good.

Need to avoid toy equations. All equations must be formal from the paper. No invented ratios like Force/Fatigue.

Let me draft carefully.

Important: Use exact [PAGE N] markers. The text says [PAGE 1 of 25] etc. I'll cite as [PAGE 5], [PAGE 10], etc.

Include verbatim quotes? The invariant says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I should include some verbatim quotes with page citations.

Let's start writing.

THINK_TRACE:

Deep multi-hop derivation:
1. Residualization operator: For game-team observation g of team i in season t against opponent j, compute opponent quality O_{jt} as average outcome of team j in all games not against i. Regress Y_{igt} on O_{jt}, year FE, home indicator. Residuals \hat{e}_{igt} aggregated to season-team mean \bar{Y}_{it}. [PAGE 6]
2. Fixed-effect regression: \bar{Y}_{it} = \alpha_{c(i,t)} + \epsilon_{it}, where c(i,t) is coach of team i in season t. Record R^2_{real}. [PAGE 5-6]
3. Null generation: Permute coach identifiers within each team as blocks of contiguous tenure. For b=1,...,B, regress \bar{Y}_{it} on \alpha^{perm}_{c^b(i,t)} and record R^2_b. [PAGE 5-6]
4. Inference: p = B^{-1} \sum_b 1(R^2_b > R^2_{real}). One-sided because better coaches only increase fit. [PAGE 5]
5. Effect size calibration: Simulate Y^* = \lambda \eta_c + \sqrt{1-\lambda^2} \epsilon where \eta_c \sim N(0,1). Map observed \Delta R^2 = R^2_{real} - \overline{R^2_{perm}} to \lambda^2 via Figure 2 interpolation. [PAGE 9-10]

Gray-zone audit:
- Block permutation preserves serial correlation and overfitting degrees of freedom under null, but assumes coach transitions are exchangeable conditional on team. If a team hires a coach precisely because of an upward trajectory (endogenous retention correlated with trend, not just level), the permutation may not fully capture selection. [PAGE 12-13]
- Small-N permutation discreteness: 1 team, 2 coaches, 3 seasons yields only 2 permutations, p \in {0, 0.5, 1}. Asymptotic refinement requires many teams/coaches and variation in tenure lengths. [PAGE 7-8]
- Player quality is post-treatment. RIFLE implicitly attributes roster-quality variation coinciding with tenure to coach, but cannot disentangle drafting/trading from game management. [PAGE 8]
- Multiple outcomes across tables inflate family-wise error; no explicit correction reported beyond per-outcome tests. [PAGE 10-16]
- Individual coach inference is severely underpowered early: cannot reject null for any NFL coach with <=4 seasons. [PAGE 14-15]

I need to make sure this is >=400 words.

SOURCE_OPERATORS_AND_EQUATIONS:

Formal equations:
r^2 \equiv 1 - \frac{RSS}{TSS}. [PAGE 7]
RSS = \sum_i \sum_{t \in T_i} (Y_{it} - \bar{Y}_i)^2. [PAGE 7]
Permutation p-value: \hat{p} = \frac{1}{B} \sum_{b=1}^B \mathbb{1}\{R^2_{(b)} > R^2_{obs}\}. [PAGE 5]
Residualization: Y_{it} = \text{mean residual of game-team outcomes after regressing on opponent quality, year FE, home/away}. [PAGE 6]
Simulation DGP: Y^* = \text{coach effect} + \text{noise}, with coach effect \sim N(0,1), noise scaled so coach share = \lambda^2. [PAGE 9-10]
Endogenous retention: Y_t = \rho Y_{t-1} + \epsilon_t; P(turnover_t) = \text{intercept} + \text{slope} \times \text{std}(Y_{t-1}). [PAGE 12-13]

Units: proportion of variance explained (unitless, [0,1]); p-value (probability); seasons (discrete count); teams (count); years (calendar count).

Breakdown of tables: cite key values.
Table 1 MLB: Runs Allowed prop .277, p<.001; Runs Scored p=.058; Wasted Runs p=.240. [PAGE 24]
Table 2 NFL: Fumbles prop .305, p<.001; Passing proportion prop .049, p=.513. [PAGE 24]
Table 3 CFB: Points Allowed prop .299. [PAGE 24-25]
Table 4 NBA: Points Scored prop .319. [PAGE 25]
Table 5 CBB: Total Points prop .393. [PAGE 25]
Table 6 NHL: Goals Allowed prop .301. [PAGE 25]
Table 7 FDR: MLB .052, NFL .053, CFB .050, NBA .049, CBB .070, NHL .053. [PAGE 25]

Verbatim quotes:
- "Coaches explain about 20-30 percent of the variation in a team’s success" [PAGE 1]
- "A constant effect for each coach would mean that the outcome is shifted by the same amount for all observations within each coach..." [PAGE 7]
- "our false discovery rates are all close to the ideal of .05" [PAGE 13]

RETROCAUSAL_GENEALOGY:

Lineage:
- Grusky (1960, 1963) administrative succession and managerial succession. [PAGE 2]
- Gamson & Scotch (1964) scapegoating in baseball; found MLB managers little impact. [PAGE 2]
- Canella & Rowe (1995); Fabianic (1994); Smart et al. (2008); Smart & Wolfe (2003) null MLB. [PAGE 2]
- Koning (2003) Dutch Premier League null; De Paola & Scoppa (2012) Italian league null. [PAGE 2]
- Giambatista (2004) NBA worse after change; Rowe et al. (2005) NHL; Audas et al. (1997) English soccer; Fizel & D'Itri (1999) college basketball. [PAGE 2-3]
- Brown (1982) NFL within-season worse, between-season little. [PAGE 3]
- McTeer et al. (1995) four leagues little within-season effect. [PAGE 3]
- Adler et al. (2013) CFB mediocre teams worse after change; Dohrn et al. (2015) largest programs little difference, smaller programs temporary improvement. [PAGE 3]
- Bradbury (2017) MLB manager dummies little effect on hitters/pitchers. [PAGE 3]
- Berri et al. (2009) NBA coach dummies; 14/62 significant but indistinguishable. [PAGE 3]
- Goff (2013) hierarchical random effects; 8.5% MLB variance, 21% NFL variance. [PAGE 3]
- Berry & Fowler (2018) political leaders RIFLE predecessor. [PAGE 5]

Multi-week traps:
1. Regression to the mean: transitions after extreme years produce mechanical mean reversion. [PAGE 3-4]
2. Transition costs: players learning new system depress early tenure performance. [PAGE 4]
3. Serial correlation: team trends unrelated to coaches overlap with tenure. [PAGE 4-5]
4. Endogenous retention: firing after poor performance creates correlation between tenure and past outcomes. [PAGE 12]
5. Multiple testing / overfitting: many coach fixed effects inflate R^2 by chance. [PAGE 4]
6. Null average effect does not imply interchangeability: heterogeneity in changes cancels out. [PAGE 3-4]

RECURSIVE_THEORY_OF_MIND:

Crisis habit regression:
- Teams hire coaches after crises (bad seasons). Because performance mean-reverts, the new coach gets credit for regression. [PAGE 3-4]
- Early-career noise: Adam Walsh first season .412 residual victory; simulations show at least one coach achieves this 62% of the time under null. [PAGE 14-15]
- George Seifert first two seasons; 57% of simulations exceed. Later Panthers tenure was lackluster/atrocious. [PAGE 15]
- Conventional .05 threshold: no NFL coach rejects null with <=4 seasons; need 5 seasons (Paul Brown p=.008). [PAGE 15]

Counter-trap:
- Long-tenure outliers survive regression-to-the-mean skepticism. Belichik 17 seasons, avg residual victory .18; only 5/10,000 null simulations produce comparable record over 17 seasons; p=.0005. [PAGE 14-15]
- George Halas: many seasons, 9 percentage points above average. [PAGE 14]
- Upper frontier logic: look at coaches with many seasons and high records given tenure, not just best raw averages (which are biased toward short tenures). [PAGE 14]

Clock:
- Tenure length acts as a statistical clock: more seasons = more observations = lower standard error of coach effect. [PAGE 14-15]
- Few observations per coach causes failure to detect individual effects even when aggregate effects exist. [PAGE 4]
- Recursive expectations: management updates beliefs about coach quality; coach updates effort/risk-taking based on job security; this feedback loop generates endogenous retention and serial correlation in tenure-performance alignment. [PAGE 12-13]

CROSS_LAYER_VETO_ADJUDICATION:

This needs to address physical/biomechanical/weather vetoes.

Physical layer:
- Player aging/injury: If a team’s star player declines or gets injured coincident with a coach change, performance drops. RIFLE’s block permutation controls for team-specific linear time trends but not for non-linear physical decline timed with turnover. Veto condition: if \text{Cov}(\Delta \text{player health}_t, \text{coach change}_t) \neq 0 and health drives outcome, RIFLE overattributes to coach.
- Roster turnover: free agency/draft coincides with coaching changes; player quality changes are post-treatment but also exogenous to coach in some cases. RIFLE implicitly bundles roster effects into coach effect if they coincide with tenure. [PAGE 8]

Biomechanical:
- Baseball pitcher workload: managers decide when to pull starters, use relievers. This is a biomechanical fatigue-management layer. The paper finds MLB managers matter more for runs allowed (.277) than runs scored, plausibly due to pitching staff management. [PAGE 10] If pitch-count regulations or injury-list timing shift independently of coach, this is a confounder.
- NFL fumbles/penalties: coaches explain ~30% of fumbles and own penalties (.305/.293). Biomechanical discipline (tackling, blocking technique) is coach-mediated, but player conditioning and fatigue are physical layer inputs not explicitly modeled. [PAGE 24]

Weather:
- The paper residualizes for home field advantage and year but does not include weather covariates (temperature, precipitation, wind). Outdoor sports (NFL, MLB, NHL outdoors historically, CFB) have game-level weather effects aggregated to season-team residuals. If coach changes correlate with climate regimes (e.g., coaching hire after a cold stretch), veto risk exists, though unlikely systematic.
- Home-field residualization partially absorbs stadium/weather constants but not within-season weather variation.

Veto adjudication rule: A coaching effect is vetoed if (a) the permuted R^2 distribution overlaps the real R^2 at p > .05, or (b) an exogenous physical/biomechanical shock explains the residualized outcome shift contemporaneous with coach transition. Table 7 shows FDR near .05, so endogenous retention is not a veto. However, no weather/injury controls represent a residual veto layer.

RLVR_COUNTERFACTUAL_VETOES:

Need 3 verifiable counterfactual veto scenarios + predictions.

Scenario 1: Strengthened endogenous retention.
- Intervention: Re-run Table 7 Monte Carlo but set turnover slope to -0.30 (approx 4x observed NFL slope of -0.069) while keeping serial correlation at observed .416.
- Prediction: False discovery rate should exceed 0.10 (more than double ideal .05), vetoing RIFLE’s validity in high-turnover, high-accountability environments. If FDR remains near .05, the test is robust to stronger retention feedback.
- Verifiability: Reproducible with the paper’s Stata package “ssc install rifle” [PAGE 9] and simulation code described on [PAGE 12-13].

Scenario 2: Placebo outcome via cross-sport outcome swap.
- Intervention: Assign NBA season-team outcomes to NFL coach tenure structures (or vice versa) preserving block lengths and team count, ensuring no true coach-outcome correspondence.
- Prediction: Real \Delta R^2 should fall inside the central 95% of the permuted distribution (p > .05). A significant p-value would indicate algorithmic overfitting or data leakage rather than coach effects.
- Verifiability: Can be implemented by permuting outcome vectors across sport panels using the same block-permutation routine described on [PAGE 5-6].

Scenario 3: Synthetic mid-season transition break test.
- Intervention: Since coaches rarely change mid-season [PAGE 5], artificially insert a coach switch at mid-season for a random subset of teams, swapping the second-half coach identifier while leaving outcomes unchanged. Then test whether RIFLE detects a spurious coach effect driven solely by the artificial break.
- Prediction: If RIFLE is well-calibrated, the artificial break should not systematically inflate real \Delta R^2 beyond the permuted null because outcomes are unchanged; any consistent detection indicates the test conflates tenure segmentation with coaching quality. Alternatively, if real coaching effects operate through in-season adjustments, teams with genuine mid-season changes should show out-of-sample prediction breaks exceeding placebo breaks.
- Verifiability: Requires game-level data (paper starts from game-by-team then aggregates [PAGE 5]) and re-running the fixed-effect regression with the synthetic switch indicator.

Each scenario needs clear prediction. I'll phrase them carefully.

Now I need to assemble everything into the exact XML sections. No markdown outside? The user wants the sections. I'll provide them.

Word count check: I need to ensure >=1000 words total and THINK_TRACE >=400 words.

Let me draft the THINK_TRACE with enough words. I'll write substantial paragraphs.

Also ensure no betting lines: avoid "spread", "moneyline", "odds", "total" as betting term. The paper uses "total points" in CBB; I can say "combined points scored by both teams" or just "total points outcome" but not frame as betting. I'll avoid the word "totals" entirely to be safe, and avoid "odds".

Also no fake ratios. All equations from paper.

Let's write.

I will be careful to cite page numbers in brackets like [PAGE 5]. The text has [PAGE 5 of 25], I'll use [PAGE 5] for brevity but exact marker.

Let's compose the final response.

One thing: The invariant says "State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." I should explicitly mention breakdown regimes: e.g., p-value discreteness when few coaches per team; low power when few games per season (NFL victory modern era); endogeneity bias when turnover slope is high.

Now writing.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The RIFLE estimator proceeds through five sequential operators. First, game-team level outcomes are residualized against opponent quality, year fixed effects, and a home/away indicator; the residuals are then averaged to the season-team level to produce the outcome Y_it [PAGE 6]. Second, a regression of Y_it on a full set of coach fixed effects alpha_{c(i,t)} is run, and the r-squared statistic R^2_real is recorded [PAGE 5-6]. Third, coach identifiers are randomly permuted within each team, but each coach’s tenure is preserved as a contiguous block so that the distribution of tenure lengths and the degrees of freedom consumed by fixed effects remain identical to the real data [PAGE 5-6]. Fourth, for each of B permutations, the outcome is regressed on the permuted coach fixed effects and R^2_(b) is recorded. Fifth, the one-sided p-value is computed as the proportion of permutations where R^2_(b) exceeds R^2_real; the test is one-sided because genuine coach heterogeneity can only increase explanatory fit, not decrease it [PAGE 5].

The algebra of the test rests on the identity r^2 = 1 - RSS/TSS [PAGE 7]. Under the null of no coach effects, the total sum of squares TSS is invariant to coach permutation because the outcome vector itself is unchanged; only the residual sum of squares RSS varies with the assignment of tenure blocks to coach labels [PAGE 7]. When genuine coach effects exist, the real assignment groups seasons with similar coach-specific intercepts together, lowering RSS relative to permuted assignments that splice multiple coaches’ regimes into a single artificial coach, thereby raising r^2 [PAGE 7].

Gray-zone audit. (1) Small-N singularity: the paper’s own toy example shows that with one team, two coaches, and three seasons there are only two possible permutations, so the p-value can take only values in {0, 0.5, 1}; asymptotic refinement requires many teams, many coaches per team, and variation in lengths of service [PAGE 7-8]. (2) Post-treatment bundling: player quality is potentially a coach-mediated outcome (roster construction, development), so RIFLE implicitly attributes all player-quality variation coincident with a tenure to the coach without disentabling tactical in-game effects from personnel effects [PAGE 8]. (3) Endogenous retention: although Table 7 reports false discovery rates near .05 across settings, the CBB simulation reaches .07, and the method assumes turnover depends on lagged performance linearly; stronger non-linear firing rules could exceed the nominal rate [PAGE 13, 25]. (4) Multiple-outcome multiplicity: six sports and numerous outcomes are tested without an explicit family-wise error correction reported in the text [PAGE 10-16]. (5) Power asymmetry: NFL victory effects lose significance in the modern era because few games per season yield low power, while college sports enjoy high power from many teams and seasons [PAGE 11, 24]. (6) Effect-size mapping is non-linear: the observed difference Delta R^2 = R^2_real - average R^2_perm must be interpolated through Figure 2 simulations, meaning point estimates such as “28 percent of variation in runs allowed” rely on simulation calibration rather than direct identification [PAGE 9-10, 24]. These regimes define where the estimator breaks down: few coaches per team, short tenures, strong non-linear retention feedback, and unmodeled physical shocks timed with coaching transitions.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX, units, citations, and breakdown.

Residualization operator [PAGE 6]: For each game-team observation, regress the raw outcome on opponent quality (the opponent’s seasonal average in all other games), year fixed effects, and a home/away indicator; the season-team outcome Y_it is the mean residual for team i in season t.

Fixed-effect regression [PAGE 5-6]: Y_it = alpha_{c(i,t)} + epsilon_it, where c(i,t) indexes the coach of team i in season t. Record R^2_real from this regression.

R-squared definition [PAGE 7]: r^2 = 1 - RSS / TSS, where RSS = sum_i sum_{t in T_i} (Y_it - Ybar_i)^2 and TSS is the total sum of squares of the residualized outcome. TSS is identical across real and permuted data because the outcome vector is fixed; only RSS changes with coach permutation.

Null generation [PAGE 5-6]: Permute coach identifiers within each team as blocks of contiguous tenure, preserving each coach’s observed tenure length and the number of fixed effects. For b = 1,...,B, compute R^2_(b) from regressing Y_it on permuted coach fixed effects.

Inference [PAGE 5]: p_hat = (1/B) sum_{b=1}^B 1{ R^2_(b) > R^2_real }. One-sided because coach heterogeneity only increases fit.

Effect-size calibration [PAGE 9-10]: Simulate Y* = lambda * eta_c + sqrt(1 - lambda^2) * epsilon, with eta_c ~ N(0,1) coach effects and epsilon idiosyncratic noise. Vary lambda^2 (the proportion of variance attributable to coaches) and map the observed Delta R^2 = R^2_real - mean_b(R^2_(b)) to lambda^2 via linear interpolation of Figure 2.

Endogenous-retention simulation [PAGE 12-13]: Y_t = rho Y_{t-1} + epsilon_t; Pr(turnover_t) = intercept + slope * standardized(Y_{t-1}), with parameters estimated from each sport’s observed serial correlation and turnover-performance relationship.

Units: all proportion-of-variance and p-value quantities are unitless probabilities or shares in [0,1]; seasons and teams are discrete counts; years are calendar counts.

Table breakdown [PAGE 24-25]: MLB runs allowed prop = .277 (p < .001); runs scored p = .058; wasted runs p = .240 [Table 1]. NFL fumbles prop = .305 (p < .001); own penalties prop = .293 (p < .001); opponent penalties p = .744; passing share prop = .049 (p = .513) [Table 2]. College football points allowed prop = .299 (p < .001) [Table 3]. NBA points scored prop = .319 (p < .001) [Table 4]. College basketball total points prop = .393 (p < .001) [Table 5]. NHL goals allowed prop = .301 (p < .000) [Table 6]. False discovery rates under endogenous retention: MLB .052, NFL .053, CFB .050, NBA .049, CBB .070, NHL .053 [Table 7, PAGE 25].

Verbatim support [PAGE 1]: “coaches explain about 20-30 percent of the variation in a team’s success.” [PAGE 7]: “A constant effect for each coach would mean that the outcome is shifted by the same amount for all observations within each coach…” [PAGE 13]: “our false discovery rates are all close to the ideal of .05.”
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage plus multi-week traps.

The paper situates itself in a succession literature beginning with Grusky (1960, 1963) on administrative and managerial succession in formal organizations [PAGE 2]. Gamson and Scotch (1964) initiated the baseball scapegoating tradition, finding little managerial impact [PAGE 2]. Subsequent null results include Canella and Rowe (1995), Fabianic (1994), Smart et al. (2008), and Smart and Wolfe (2003) for MLB; Koning (2003) for the Dutch Premier League; and De Paola and Scoppa (2012) for Italian soccer [PAGE 2]. Negative or null succession effects were also reported for the NBA (Giambatista, 2004), NHL (Rowe et al., 2005), English professional soccer (Audas, Dobson, & Goddard, 1997), and college basketball (Fizel and D’Itri, 1999) [PAGE 2-3]. Brown (1982) found within-season NFL changes harmful but between-season changes inert; McTeer, White, and Persad (1995) extended null within-season findings across MLB, NBA, NFL, and NHL [PAGE 3]. Conditional studies revealed nuance: Adler et al. (2013) found mediocre college football teams worsened after coaching changes while the worst teams did not improve; Dohrn et al. (2015) found large programs largely unaffected and smaller programs temporarily improved [PAGE 3].

Individual-coach approaches also struggled. Bradbury (2017) used MLB manager dummies and found little effect on hitters or pitchers [PAGE 3]. Berri et al. (2009) studied 62 NBA coaches, found 14 statistically significant individual coefficients, but those coefficients were mutually indistinguishable [PAGE 3]. Goff (2013) used hierarchical random effects and estimated 8.5 percent of MLB win-rate variance and 21 percent of NFL win-rate variance attributable to managers/coaches [PAGE 3]. The methodological precursor to RIFLE is Berry and Fowler (2018), which applied randomization inference to political leaders and economic outcomes [PAGE 5].

Multi-week traps that prior literature fell into, and that RIFLE is designed to avoid: (1) regression to the mean—coaching changes follow extreme seasons, producing mechanical mean reversion unrelated to coach quality [PAGE 3-4]; (2) transition costs—players learning a new system depress early-tenure performance, biasing first-season estimates downward [PAGE 4]; (3) serial correlation—team-specific trends unrelated to coaches overlap with tenure windows and generate spurious coach-outcome correlation [PAGE 4-5]; (4) endogenous retention—poor performance triggers replacement, creating a correlation between tenure and past outcomes even absent true coach effects [PAGE 12]; (5) the fallacy of the null average—if some coaching changes improve performance and others worsen it, the average effect of change is zero despite real heterogeneity among coaches [PAGE 3-4]; and (6) overfitting from many coach fixed effects, which inflates r^2 by chance unless benchmarked against a permutation distribution that preserves the same degrees of freedom [PAGE 4].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and the tenure clock.

Crisis habit regression. Teams tend to replace coaches after poor seasons, so new coaches inherit regressing-to-the-mean rosters and schedules. Early-career success is therefore a weak signal of quality. The paper’s simulations show that Adam Walsh’s 1945 first-season residual victory of .412 is matched or exceeded by at least one coach in 62 percent of null simulations; Walsh subsequently lacked durability, coaching only one more lackluster season before exiting the professional ranks [PAGE 14-15]. George Seifert’s 1989-1990 first two seasons with the 49ers were similarly matched in 57 percent of null simulations; although Seifert later won Super Bowls, his Panthers tenure included lackluster and atrocious seasons, justifying skepticism about extrapolating from two years [PAGE 15]. Under a conventional .05 threshold, no NFL coach can be declared better than average using only the first four seasons [PAGE 15].

Counter-trap. Long-tenure outliers survive the regression-to-the-mean critique because they sustain high performance over many observations. Bill Belichik’s 17 New England Patriots seasons through 2016 produced an average residual victory of .18; only Paul Brown’s 1946 Cleveland Browns tenure exceeds it [PAGE 14]. In 10,000 null simulations calibrated to NFL serial correlation and endogenous retention, only five cases produced a 17-season coach with Belichik’s record, yielding p = .0005 against the null that he is average [PAGE 15]. George Halas, coaching more seasons than anyone else, remained nine percentage points above an average coach conditional on opponent quality and home field [PAGE 14]. The correct inference target is not the raw best average (which mechanically favors short tenures) but the upper frontier of high records conditional on tenure length [PAGE 14].

The tenure clock. Statistical power to detect an individual coach effect scales with the number of seasons observed. Because the NFL plays few games per season and coaches accumulate few observations early, the paper cannot reject the null for any coach with four or fewer seasons; significance becomes possible at five seasons, as with Paul Brown (p = .008) [PAGE 15]. This creates a recursive theory of mind: management updates beliefs about coach quality from noisy outcomes; coaches adjust effort and risk-taking based on perceived job security; and these feedback loops generate endogenous retention and serial correlation between tenure and performance. RIFLE’s block permutation respects the tenure clock by keeping each coach’s contiguous service block intact, thereby testing whether performance ebbs and flows coincide with coaching intervals rather than with arbitrary calendar reshuffling [PAGE 5-7].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto proof.

The paper residualizes for opponent quality, home field advantage, and year fixed effects, but it does not explicitly model weather, injuries, or biomechanical load. Three veto layers remain.

Physical layer. Player aging, injury, and roster turnover can shift team performance independently of the coach. If a star player’s decline or a key injury coincides temporally with a coaching change, RIFLE may attribute the resulting performance shift to the coach because the permutation null preserves team-level serial correlation but not non-linear physical decline timed precisely at turnover. Veto condition: if Cov(Δ player health_t, coach change_t) ≠ 0 and health drives the residualized outcome, the coach effect is confounded [PAGE 6-8].

Biomechanical layer. Baseball offers the clearest mechanism: managers control pitcher workload, bullpen deployment, and removal decisions—biomechanical fatigue management that plausibly explains why MLB managers affect runs allowed (prop = .277, p < .001) more than runs scored (p = .058) [PAGE 10, Table 1]. NFL fumbles (prop = .305) and own penalties (prop = .293) also show large coach effects, consistent with discipline and technique coaching, though player conditioning and fatigue remain physical-layer inputs outside the model [PAGE 11, Table 2]. If pitch-count regulations, injury-list timing, or conditioning regimens shift independently of the coach and coincide with tenure changes, this is a biomechanical confounder.

Weather layer. Outdoor sports (NFL, MLB, college football) are exposed to temperature, precipitation, and wind. The model absorbs stadium-constant effects through home-field residualization and year effects, but not within-season weather variation. If coaching turnover correlates with anomalous climate regimes—unlikely but not impossible—a weather veto could arise. No weather covariates appear in the residualizing regression described on [PAGE 6].

Adjudication rule. A coaching effect survives veto only if (a) the permuted r^2 distribution excludes the observed statistic at p < .05, and (b) no exogenous physical, biomechanical, or weather shock explains the contemporaneous residualized outcome shift. Table 7 shows endogenous retention alone does not veto the test (false discovery rates .049-.070) [PAGE 13, 25], but the absence of injury and weather controls leaves a residual veto layer unexamined.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios and predictions.

Scenario 1: Strengthened endogenous retention. Re-run the Table 7 Monte Carlo for the NFL but replace the observed turnover slope (-0.069) with a stronger feedback of -0.30, while holding serial correlation at .416 and the intercept at .234 [PAGE 12-13, 25]. Prediction: the false discovery rate should exceed .10, more than double the nominal .05, vetoing RIFLE’s validity in high-accountability hiring/firing environments. If the rate remains near .05, the test is robust to stronger retention feedback. Verifiable by replicating the simulation code described on [PAGE 12-13] using the Stata package “ssc install rifle” [PAGE 9].

Scenario 2: Placebo cross-sport outcome swap. Preserve NFL coach tenure blocks and team-season structure, but assign the outcome vector from NBA season-team points allowed (or another sport with no coach overlap) to the NFL coaching grid. Prediction: the real Delta R^2 should fall inside the central 95 percent of the permuted distribution (p > .05). A significant p-value would indicate algorithmic overfitting or data leakage rather than genuine coach effects. Verifiable by applying the block-permutation routine of [PAGE 5-6] to the swapped panel.

Scenario 3: Synthetic mid-season transition break. Because coaches rarely change mid-season [PAGE 5], artificially insert a coach switch at the midpoint of the season for a random subset of teams, swapping only the second-half coach identifier while leaving outcomes unchanged. Prediction: if RIFLE is well calibrated, the artificial break should not systematically inflate real Delta R^2 beyond the permuted null because the outcome path is unaltered. Consistent detection of an effect would indicate the test conflates tenure segmentation with coaching quality. Conversely, in a subsample with genuine mid-season changes, real in-season coaching effects should produce out-of-sample prediction breaks exceeding placebo breaks. Verifiable using game-by-team data prior to seasonal aggregation [PAGE 5] and re-running the fixed-effect regression with the synthetic switch indicator.
</RLVR_COUNTERFACTUAL_VETOES>