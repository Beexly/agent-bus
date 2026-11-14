---
source: "2015 College deviance and the effects on NFL amateur draft selection - Analyzing the Personal Conduct Policy - Michael Palmera, Quinlan Duhanb and Brian P. Soebbing.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 20
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 6117
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper about NFL draft selection and college deviance. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user provided a source document that appears to be from pages 121-132 (Journal of Sports Analytics 1 (2015) 121–132). The user says "PAGES: 20" but the content shows pages 121-132. I need to cite exact [PAGE N] markers. Looking at the text, there are page numbers embedded: 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132. However, the user said "PAGES: 20" which might mean the source has 20 pages or they want me to treat it as 20 pages. But the actual content shows page numbers 121-132. I should cite based on the visible page markers in the text.

Let me structure the response:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words). Need to discuss:
- The counterintuitive finding: deviance improves draft position (negative coefficient on log draft position).
- Mechanisms: Tagliabue era vs Goodell era.
- Interaction term insignificance.
- Position-specific effects (defensive skill players flip sign under Goodell).
- Measurement error in deviance (Factiva media mentions, not actual incidents).
- Selection bias (only drafted players, undrafted with criminal records excluded per Pager 2003 limitation).
- Endogeneity: talent overrides character concerns (Bukowski quote).
- Omitted variable bias: severity/type of misconduct not captured.
- Gray zones: media attention vs actual deviance, aggressive behavior as desired trait, risky worker theory.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations from the paper, units, page citations, breakdown.
- Equation 1: log(Overall Pick_ij) = a_ij + β1 Awards + β2 AllAmerican + β3 Age + β4 NonD1FBS + β5 NonBCSAQ + β6 CombinePart + β7 Deviance + β8 Goodell + β9 Deviance*Goodell + team FE + ε
- Equation 2: combine participants with Height, Weight, 40yd, Bench, Vertical, Shuttle added, estimated separately by position.
- Dependent variable: ln(Overall Pick), where lower number = better draft position.
- Coefficients: Deviance = -0.044 (p=0.053), meaning ~4.4% improvement in draft position per additional media mention.
- Goodell = +0.085 (p=0.002), meaning draft position worsened by ~8.5% under Goodell era main effect.
- Interaction Deviance*Goodell = +0.018 (p=0.597), insignificant.
- Table 3 defensive skill: Deviance*Goodell = +0.106 (p=0.037? need to check table). Looking at the garbled table, for Def Skill row: Deviance*Goodell coef 0.106, p-value 0.037? Wait the table is messy. Let me parse carefully.

Table 3 is garbled but from text: "the deviance variable is negative and significant for both the offensive and defensive skill position players... Examining the interaction variable, this variable is insignificant for all positions except for defensive skill position players. For the defensive skill position players, there is a positive and significant increase in draft position meaning each additional mention in the newspaper leads to a lower draft position."

Wait, the text says "positive and significant increase in draft position meaning each additional mention... leads to a lower draft position." Since dependent variable is log pick number, positive coefficient = higher pick number = worse draft position (later). So defensive skill players under Goodell: deviance hurts draft position.

From Table 2:
- Deviance: -0.044, robust SE 0.023, p=0.053
- Goodell: 0.085, robust SE 0.027, p=0.002
- Deviance*Goodell: 0.018, robust SE 0.034, p=0.597
- R^2 = 0.227, n=4,061, VIF=2.680

Summary stats Table 1:
- Overallpk mean 4.551 (log scale), stnd dev 0.960
- Deviance mean 0.117, stnd dev 0.872, max 19
- Goodell mean 0.438

Units: log(pick number), dimensionless count for deviance, dummy for Goodell.

Breakdown regimes: p=0.053 for main deviance is marginally significant at 10% but not 5%. Interaction p=0.597 is null.

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps.
- Tagliabue 1989-2006, policy 2000.
- Goodell appointed 2006, modified April 2007.
- Literature: Ambrose 2007, Bukowski 2001, Marks 2008, Mahone Jr 2008.
- Weir & Wu (2014): arrested and charged = half round later; arrested not charged = almost one round earlier.
- Dohrmann 2011: 7% of SI top 25 players had legal trouble, 40% serious.
- Benedict & Yaeger 1998: 21% arrested/indicted.
- Stair et al. 2008: arrests negatively affect winning percentage OR aggression helps performance.
- Bollinger & Hotchkiss 2003: risky workers earn higher wages.
- Pager 2003: criminal record closes doors.
- Multi-week traps: policy change April 2007 mid-draft cycle? Draft is April. Goodell modified in April 2007, so 2007 draft may be transitional. The Goodell dummy is 2007-2013, but policy change was April 2007 (same time as draft). This creates a temporal misclassification: players drafted in April 2007 may have been evaluated under the old policy or new policy depending on exact timing. Also, media coverage lag: deviance measured 365 days prior to draft.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- Teams' recursive reasoning: "If Goodell punishes more, I should draft deviant players earlier to avoid punishment? Or avoid them?"
- Crisis habit regression: Under Tagliabue, slow punishment meant teams could overlook deviance (talent wins). Under Goodell, swift punishment creates uncertainty.
- Counter-trap: Teams may draft deviant defensive skill players earlier under Goodell because they expect the league to suspend them, creating roster churn and compensatory picks? Or the opposite: avoid them.
- Clock: Draft clock, 365-day deviance window, April 2007 policy modification, player eligibility timeline (final year of college to draft).

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- This is tricky because the paper is about draft selection, not on-field performance. But I can discuss:
  - Physical layer: Combine measurements (height, weight, 40yd, bench, vertical, shuttle) act as vetoes on deviance signal. If combine performance is poor, deviance doesn't matter; player not drafted.
  - Biomechanical: Position-specific valuation (defensive skill risk aversion due to giving up 7 points).
  - Weather: Not in paper, but could note external validity: no weather variables.
  - Veto proof: The combine variables act as hard constraints; deviance effect is conditional on clearing combine thresholds. Sample restricted to combine participants in Eq 2 (n=1,632 vs 4,061).
  - Position grouping reclassification 2007-2008 (PFR change) creates measurement break.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
Need 3 verifiable scenarios.
1. If a defensive skill player has 1 deviance mention in 2006 (Tagliabue) vs 2008 (Goodell), predict draft position change. Based on Table 2 main effect -0.044 and interaction +0.018 (insignificant), but Table 3 defensive skill interaction is significant positive. So under Goodell, defensive skill deviance increases log pick by ~0.106 (worse draft position). Prediction: Under Goodell, defensive skill players with deviance are drafted later; under Tagliabue, earlier or neutral.
2. If a player from non-D1-FBS school with deviance: NonD1FBS coefficient +0.195 (worse draft). Deviance -0.044. Combined effect might cancel partially. Veto: school quality vetoes deviance signal.
3. If a player fails to participate in combine: Combine Part coefficient -0.214 (worse draft). This is a strong veto: non-participation moves player ~21% later in log picks, overwhelming small deviance effect.

I need to ensure no betting lines. The paper discusses draft position, not betting. Good.

Word count: Need >=1000 words total across sections. THINK_TRACE alone >=400 words.

Let me write carefully with exact page citations. The text has page numbers like 121, 122, etc. I will cite [PAGE 121], [PAGE 122], etc. Verbatim quotes should be included where relevant.

Let me draft each section.

THINK_TRACE: 
- Start with the central paradox: why would newspaper mentions of misconduct improve draft position?
- Multi-hop: Deviance count (Factiva search terms) -> media visibility -> team evaluation -> draft position.
- The coefficient interpretation: dependent variable is ln(Overall Pick). Negative coefficient = lower pick number = earlier selection. Deviance coefficient -0.044 means ~4.4% earlier pick per article [PAGE 127-128].
- Gray zone 1: Measurement error. Deviance is not actual incidents but media mentions. Search terms include "arrest, suspension, drugs..." [PAGE 125-126]. Some incidents get no media attention. Severity not separated.
- Gray zone 2: Selection bias. Only drafted players (n=4,061). Undrafted players with criminal records excluded [PAGE 130, citing Pager 2003]. This truncates the left tail of the risk distribution.
- Gray zone 3: Talent override. Bukowski quote "Talent wins games; it also buys second chances" [PAGE 129]. Teams may rationally overlook deviance if projected on-field productivity is high.
- Gray zone 4: Policy regime shift. Tagliabue policy required conviction/plea before punishment, slow and ineffective [PAGE 124]. Goodell modified April 2007 to punish even without conviction [PAGE 124]. Yet interaction term insignificant in pooled model [PAGE 127].
- Position heterogeneity: defensive skill players flip sign under Goodell [PAGE 129]. Defensive backs/linebackers' mistakes cost 7 points, so teams avoid risk [PAGE 129].
- Combine participation: coefficient -0.214 [PAGE 127], meaning participants drafted ~21% later? Wait, negative coefficient on log pick means lower pick number = earlier draft. But text says "participating in the NFL Combine led to a significant decrease in overall draft selection, meaning that the player was draft lower in the draft." Wait, decrease in log overall pick means lower pick number = earlier. But the text says "decrease in overall draft selection, meaning that the player was draft lower in the draft." That seems contradictory unless they mean decrease in the quality (later round). Let me check: Table 2 Combine Part coef = -0.214, p<0.001. Negative coefficient means lower Overall Pick number = earlier selection. But the text on page 130 says "participating in the NFL Combine led to a significant decrease in overall draft selection, meaning that the player was draft lower in the draft." That seems like an error in the paper or my reading. Wait: if dependent variable is log pick number, and lower pick number = better (earlier), then a negative coefficient means earlier selection (better). But the text says "draft lower" meaning worse? Let's re-read page 130: "The results from this variable in Table 2 shows that participating in the NFL Combine led to a significant decrease in overall draft selection, meaning that the player was draft lower in the draft." Hmm. If "decrease in overall draft selection" means the number decreased (earlier), but they interpret "draft lower" as later rounds? Actually in draft terminology, "lower draft position" can be ambiguous: lower number = earlier (better), lower in the order = later (worse). The paper earlier states: "Since the lower (higher) the number means the higher (lower) the draft position, the interpretation of a negative (positive) and significant coefficient means that the player’s draft position improved (declined)." [PAGE 128]. So negative coefficient = improved draft position = earlier. But then on page 130 they say combine participation led to decrease in overall draft selection meaning drafted lower. That might be a mistake in the paper or they mean the coefficient is negative so the log pick decreased, which means earlier (better). Wait, they say "meaning that the player was draft lower in the draft" which would mean worse. But mathematically negative coefficient on log pick means smaller pick number = earlier pick = better. Unless they think lower number = later? No, earlier they explicitly said lower number = higher draft position (better). This is an internal inconsistency/gray zone worth noting.

Actually wait: combine participants are typically top prospects. Why would they be drafted later? Maybe because non-participants are injury risks or character risks who fall? Or maybe the paper's interpretation is wrong. Let's look at page 130: "While this result is not surprising given the NFL would invite some of the top draftees to the combine, players have the ability to voluntarily not participate in the combine due to personal choice or injury. Thus, participating in the combine does provide benefit to those players." So they claim combine participation is beneficial. But coefficient is negative (-0.214) on log pick. Negative means lower pick number = earlier selection = beneficial. So they should say "draft higher" (better). But they wrote "draft lower". This is a sign error in prose or terminology confusion. I will note this as a gray zone/interpretation hazard.

Actually, wait. Let's check: Overall Pick mean 4.551 on log scale. exp(4.551) ≈ 94.7. So average pick ~95. If combine part coef is -0.214, then exp(-0.214) ≈ 0.807, so picks are ~19% earlier. That's a big benefit. So the paper's prose saying "draft lower" is likely a mistake; they mean lower number = earlier. I will flag this.

SOURCE_OPERATORS_AND_EQUATIONS:
Write LaTeX for Equation 1 and 2. Cite pages 125-126.
Equation 1:
\ln(\text{Overall Pick}_{ij}) = \alpha_{ij} + \sum_{k=1}^{6} \beta_k \text{Position}_{kij} + \beta_7 \text{Awards}_{ij} + \beta_8 \text{AllAmerican}_{ij} + \beta_9 \text{Age}_{ij} + \beta_{10} \text{NonD1FBS}_{ij} + \beta_{11} \text{NonBCSAQ}_{ij} + \beta_{12} \text{CombinePart}_{ij} + \beta_{13} \text{Deviance}_{ij} + \beta_{14} \text{Goodell}_{ij} + \beta_{15} (\text{Deviance} \times \text{Goodell})_{ij} + \sigma_j + \epsilon_{ij}

Wait, the paper shows team fixed effects σ. Actually in text: "where σ represents team fixed effects". The equation might be:
\ln(\text{Overall Pick}_{ij}) = \mathbf{X}_{ij}\boldsymbol{\beta} + \sigma_{team} + \epsilon_{ij}

I'll write it formally.

Units: \ln(\text{pick}) dimensionless; Deviance is count [0,19] (mean 0.117, SD 0.872); Goodell dummy {0,1}; Age in years [20,29]; Height inches [65,80]; Weight lbs [166,386]; 40yd seconds [4.21,5.68]; Bench reps [2,45]; Vertical inches [21,45]; Shuttle seconds [3.75,5.26].

Breakdown: p=0.053 for Deviance (marginal at α=0.10, insignificant at α=0.05). Interaction p=0.597 (null). R^2=0.227. VIF=2.680 (no multicollinearity). Sample n=4,061.

RETROCAUSAL_GENEALOGY:
- Lineage: Noll 2003 (commissioner as CEO), Ambrose 2007 (conduct policies), Bukowski 2001 (league as internal stakeholder), Marks 2008 (legality outside CBA), Mahone Jr 2008 (Goodell modification).
- Weir & Wu 2014 (2005-2009 drafts; arrested+charged = half round later; arrested not charged = one round earlier).
- Dohrmann 2011 (7% of SI top 25 had legal trouble; 40% serious).
- Benedict & Yaeger 1998 (21% arrested/indicted 1996-97).
- Temporal trap: Goodell modified policy April 2007 [PAGE 123-124]. The NFL Draft occurs in late April. The Goodell dummy includes 2007 draft, but the policy change happened in April 2007, potentially after evaluations or during the draft window. This creates a regime misclassification for the 2007 draft class [PAGE 123].
- Multi-week: Deviance measured 365 days prior to draft [PAGE 125]. A November 2006 incident affects April 2007 draft under Tagliabue policy; same incident in 2008 under Goodell. But media attention may lag or lead actual behavior.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: Under Tagliabue, slow punishment (conviction required) meant teams faced little league-imposed cost for drafting deviant players, so they reverted to talent-maximizing habits [PAGE 124].
- Counter-trap: Under Goodell, swift punishment creates draft-day uncertainty. Teams face a second-order belief problem: "If I draft him, will Goodell suspend him?" For defensive skill positions, where one error costs 7 points [PAGE 129], teams avoid the risk, flipping the deviance coefficient positive under Goodell [PAGE 129].
- Clock: The 365-day window, draft clock, and April 2007 policy change interact. Players whose deviance occurs close to the draft may benefit from recency bias under Tagliabue (media salience without league penalty) but suffer under Goodell (immediate enforcement salience).

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: Combine participation dummy (coef -0.214) and combine metrics act as hard gates. Players who skip combine due to injury or choice are systematically different [PAGE 130]. Eq 2 restricts to combine participants (n=1,632), creating a selected subsample [PAGE 126].
- Biomechanical layer: Position-specific valuation. Defensive skill players' off-field risk maps to on-field risk (giving up 7 points) [PAGE 129]. Offensive linemen show opposite/insignificant deviance results [PAGE 129].
- Weather: No weather variables in model; external validity limited to indoor draft evaluation process, not game-day conditions.
- Veto proof: The reclassification of PFR positions between 2007-2008 [PAGE 125] creates a measurement break in position dummies. This is a structural break that vetoes cross-year comparability unless grouped as the authors did.
- Sign inconsistency: Page 130 prose says combine participation leads to being "draft lower," but Table 2 coefficient is negative (-0.214), which mathematically means earlier selection (lower pick number) [PAGE 127-128]. This prose/math mismatch is a veto hazard for interpretation.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable scenarios + predictions.

Scenario 1: Defensive skill player with 1 deviance mention, drafted 2006 (Tagliabue) vs 2008 (Goodell).
- Verifiable: Use Table 2 coefficients. Tagliabue: Δln(pick) = -0.044 → ~4.4% earlier pick. Goodell: main effect -0.044 + interaction +0.018 (insignificant) ≈ -0.026 (net still earlier but attenuated). However Table 3 defensive skill interaction is significant positive [PAGE 129]. Prediction: Under Goodell, defensive skill deviance increases log pick by ~0.106 (≈11% later pick), reversing the Tagliabue advantage. Veto: If the player also has elite combine metrics (40yd < 4.40, vertical > 35"), the combine premium may veto the deviance penalty.

Scenario 2: Non-D1-FBS school player with deviance.
- Verifiable: NonD1FBS coef +0.195 [PAGE 127] (~21% later pick). Deviance -0.044 (~4% earlier per mention). Net effect for 1 mention: +0.151 (~16% later). Veto: School quality dominates deviance; small deviance count cannot overcome the non-FBS penalty unless deviance count is very high (e.g., 5 mentions: -0.22 vs +0.195, net earlier). Breakdown regime: deviance count > ~4.5 mentions needed to offset non-FBS stigma.

Scenario 3: Combine non-participant with deviance.
- Verifiable: Combine Part coef -0.214 [PAGE 127] (~19% earlier for participants). Non-participants therefore drafted ~19% later. This dwarfs deviance effect (-4.4% per mention). Prediction: A deviant player who skips the combine is vetoed from early rounds regardless of deviance signal; teams cannot evaluate physical layer, so character signal becomes uninformative or negative due to unobserved injury/character risk. Breakdown: if CombinePart=0, the model cannot identify the deviance coefficient reliably because the sample is selected on participation.

I need to ensure total word count >=1000. Let me write expansively.

Also, I must not mention betting lines. I won't.

Citations: Use [PAGE N] exactly as page numbers appear in text.

Let's write.

Structure:
<THINK_TRACE>...</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>...</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>...</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>...</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>...</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>...</RLVR_COUNTERFACTUAL_VETOES>

No other text outside these tags? The user said "across these exact XML sections". I should output only these sections, or at least include them. I'll output just the sections to be safe.

Let's draft content now, ensuring depth.

Word count estimate:
THINK_TRACE: ~500 words.
SOURCE_OPERATORS: ~350 words.
RETROCAUSAL: ~250 words.
RECURSIVE: ~250 words.
CROSS_LAYER: ~250 words.
RLVR: ~250 words.
Total ~1850. Good.

Let's write carefully.
</NATIVE_REASONING>

<THINK_TRACE>
The central empirical paradox in Palmera, Duhan, and Soebbing (2015) is that an increase in newspaper-detected deviance in the 365 days before the NFL Draft is associated with an *earlier* selection, not a later one [PAGE 127–128]. The dependent variable is the natural logarithm of overall pick number; because a lower pick number denotes a higher (better) draft position, the negative coefficient on Deviance (–0.044, robust standard error 0.023, p = 0.053) implies that each additional media mention moves a player approximately 4.4 percent earlier in the draft order [PAGE 127]. This is counterintuitive relative to the league’s stated deterrence goals under the Personal Conduct Policy, and it demands a multi-hop causal audit rather than a surface reading.

First hop: measurement construction. Deviance is not a count of arrests, convictions, or suspensions. It is a count of Factiva newspaper articles matching predetermined search terms—arrest, suspension, drugs, violence, off-field, misconduct, cheating, alcohol, scandal, fight, assault, battery—filtered by human review to confirm the player committed the act [PAGE 125–126]. The variable therefore measures *media-visible deviance*, not total deviance. Incidents that attract no press coverage are omitted by construction, and the measure does not separate a misdemeanor from a felony or a violent act from a substance violation [PAGE 130]. This introduces classical measurement error on the dependent variable’s right-hand side and creates a gray zone: teams may be responding to salience, not to actual risk.

Second hop: selection bias. The sample comprises 4,061 drafted players from 1999 through 2013 [PAGE 126]. The authors explicitly acknowledge they cannot observe undrafted players whose talent was sufficient but whose character or legal issues closed the door [PAGE 130], citing Pager (2003) on criminal records as an employment barrier [PAGE 130]. This truncates the left tail of the risk distribution. If the most deviant players never enter the sample at all, the estimated coefficient among the drafted is a lower bound on the true penalty of misconduct, or it can even sign-flip if teams rationally gamble on high-talent, high-visibility risks.

Third hop: the talent-override mechanism. The authors offer four interpretations for the positive drafting response to deviance [PAGE 129]. The most economically grounded is Bukowski’s (2001) observation that “[t]eams wanted to win, so they overlooked all of the negative consequences that came with this talent. Talent wins games; it also buys second chances” [PAGE 129]. This is consistent with Bollinger and Hotchkiss’s (2003) risky-worker hypothesis: employers may pay a premium—or in this case draft earlier—for workers whose productivity distribution has upside variance [PAGE 129]. A second mechanism is that the Deviance variable may proxy for aggression, a trait Welch (1997) linked to certain football positions and on-field violence [PAGE 123].

Fourth hop: the policy regime shift and its null interaction. The original Tagliabue-era Personal Conduct Policy (2000) required conviction or a plea equivalent before league punishment, making it slow and largely ineffective [PAGE 124]. Goodell’s April 2007 modification allowed discipline without conviction and promised quicker, harsher penalties [PAGE 124]. Yet the pooled interaction Deviance × Goodell is statistically insignificant (coefficient +0.018, robust standard error 0.034, p = 0.597) [PAGE 127]. This null result in Equation 1 masks position-level heterogeneity: in Equation 3 (position-specific combine subsamples), the interaction is insignificant for offensive line, defensive line, and offensive skill, but positive and significant for defensive skill players [PAGE 129]. For defensive backs and linebackers, additional deviance mentions under Goodell lead to a *later* draft position—a reversal of the Tagliabue-era pattern [PAGE 129]. The authors rationalize this by noting defensive skill errors can directly yield seven points, so teams have less tolerance for off-field risk at those positions [PAGE 129].

Gray-zone audit: (1) The prose on page 130 claims combine participation led to a “decrease in overall draft selection” meaning the player was “draft lower,” yet Table 2 reports Combine Part = –0.214 (p < 0.001) [PAGE 127], and page 128 defines a negative coefficient as an *improved* (earlier) draft position [PAGE 128]. The sign language in the prose conflicts with the model’s own definition [PAGE 128–130]. (2) The deviance coefficient p = 0.053 is only marginally significant at the 10 percent level and insignificant at 5 percent, so the headline “deviance improves draft position” rests on a borderline result [PAGE 127]. (3) Pro Football Reference reclassified positions between 2007 and 2008, forcing the authors to collapse positions into six groups [PAGE 125]; this measurement break may obscure position-specific deviance effects. (4) The Goodell dummy includes the 2007 draft, but the policy was modified in April 2007, contemporaneous with the draft itself [PAGE 123–124], creating a temporal misclassification for that class. These gray zones mean the result should be read as evidence of team behavioral adjustment under policy uncertainty, not as a clean causal estimate of deviance’s effect on draft capital.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The study estimates two ordinary least squares specifications with team fixed effects and White robust standard errors [PAGE 126]. Equation 1 models the full sample of 4,061 selections [PAGE 126]:

\ln(\text{Overall Pick}_{ij}) = \mathbf{X}_{ij}\boldsymbol{\beta} + \sigma_{\text{team}(i)} + \varepsilon_{ij}

where i indexes the player and j indexes draft year. The vector \mathbf{X}_{ij} contains six position dummy variables relative to Special Teams (Quarterback, Offensive Skill, Offensive Line, Defensive Line, Defensive Skill), cumulative major college awards (Awards), cumulative All-American honors (All American), age at draft in years (Age), non-Division I-FBS school dummy (NonD1FBS), non-BCS automatic-qualifying conference dummy (NonBCSAQ), combine participation dummy (Combine Part), the deviance count (Deviance), the Goodell-era dummy (Goodell), and their interaction (Deviance × Goodell) [PAGE 125–126]. Deviance is a non-negative integer count of Factiva media mentions in the 365 days prior to the draft, with sample mean 0.117, standard deviation 0.872, and maximum 19 [PAGE 126, Table 1]. Goodell equals 1 for the 2007–2013 drafts and 0 otherwise [PAGE 126].

Equation 2 restricts to NFL Combine participants and adds physical and performance covariates, estimated separately for Offensive Line, Defensive Line, Offensive Skill, and Defensive Skill (the Quarterback group lacked sufficient observations) [PAGE 126]:

\ln(\text{Overall Pick}_{ij}) = \mathbf{X}_{ij}\boldsymbol{\beta} + \beta_h \text{Height}_{ij} + \beta_w \text{Weight}_{ij} + \beta_{40} \text{40yd}_{ij} + \beta_b \text{Bench}_{ij} + \beta_v \text{Vertical}_{ij} + \beta_s \text{Shuttle}_{ij} + \sigma_{\text{team}(i)} + \varepsilon_{ij}

Units are SI-compatible where applicable: Height in inches [65, 80], Weight in pounds [166, 386], 40-yard dash in seconds [4.21, 5.68], Bench press repetitions [2, 45], Vertical jump in inches [21, 45], Shuttle run in seconds [3.75, 5.26] [PAGE 126, Table 1]. The dependent variable \ln(\text{Overall Pick}) is dimensionless; because lower pick numbers indicate earlier selection, negative coefficients imply improved draft position and positive coefficients imply declined draft position [PAGE 128].

Key estimates from Table 2 [PAGE 127]: Deviance = –0.044 (robust SE 0.023, p = 0.053); Goodell = +0.085 (robust SE 0.027, p = 0.002); Deviance × Goodell = +0.018 (robust SE 0.034, p = 0.597); R^2 = 0.227; n = 4,061; average VIF = 2.680 [PAGE 127]. The marginal effect of one additional deviance article is approximately 4.4 percent earlier selection (\exp(-0.044) \approx 0.957) [PAGE 128]. The Goodell main effect implies roughly 8.9 percent later selection under the modified policy (\exp(0.085) \approx 1.089), ceteris paribus [PAGE 127]. Breakdown regimes: the Deviance coefficient is insignificant at conventional \alpha = 0.05 (p = 0.053); the interaction is a precise null (p = 0.597); multicollinearity is ruled out by VIF < 3; and the QB position group is excluded from Equation 2 due to insufficient observations [PAGE 126].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s intellectual lineage begins with Noll’s (2003) characterization of the league commissioner as chief executive officer, which establishes the normative basis for league-conduct governance [PAGE 123]. Ambrose (2007) traces Personal Conduct Policies across North American leagues and the commissioner’s role in their development [PAGE 123]; Bukowski (2001) argues the league is the optimal internal stakeholder to punish off-field misconduct [PAGE 123]; Marks (2008) examines the policy’s legality and its enactment outside collective bargaining [PAGE 123–124]; and Mahone Jr. (2008) details Goodell’s 2007 modification [PAGE 124]. The historical regime break is precise: Paul Tagliabue served from the 1989–1990 season through 2005–2006 and created the original policy in 2000; Roger Goodell was appointed in 2006 and modified the policy in April 2007 [PAGE 123–124]. Because the NFL Draft is held in late April, the 2007 draft class straddles the policy modification, yet the Goodell dummy codes all of 2007–2013 as treated [PAGE 123–124, 126]. This creates a temporal misclassification trap: players evaluated in January–March 2007 operated under Tagliabue’s conviction-required standard, while those evaluated after the April modification faced Goodell’s discretionary standard, but the regression assigns the entire 2007 cohort to the post-treatment regime.

The deviance exposure window—365 days prior to the draft [PAGE 125–126]—generates a multi-week alignment problem. An incident in November 2006 affects the April 2007 draft under the old policy; an identical incident in November 2007 affects the April 2008 draft under the new policy. Media salience, however, need not coincide with the incident date; a scandal breaking in February 2007 may dominate draft-week coverage more than one from August 2006, even though both fall inside their respective 365-day windows. This asynchrony means the regressor measures media-cycle exposure as much as behavioral risk.

The study extends Weir and Wu (2014), who examined 2005–2009 drafts and found that players arrested and charged were selected about half a round later, while players arrested but not charged were drafted nearly one full round earlier [PAGE 122–123]. Palmera et al. lengthen the window to 1999–2013 and add the commissioner-regime interaction, which Weir and Wu could not estimate [PAGE 122]. Supporting context includes Benedict and Yaeger’s (1998) finding that 21 percent of sampled NFL players in 1996–1997 had been arrested or indicted for at least one serious crime [PAGE 122], and Dohrmann’s (2011) Sports Illustrated investigation showing roughly 7 percent of preseason top-25 college players had legal trouble, with 40 percent of incidents classified as serious [PAGE 123]. The literature also contains competing mechanisms: Stair et al. (2008) predicted more team arrests would lower winning percentage through suspensions and distraction, but alternatively linked arrests to aggression that could raise on-field performance [PAGE 123]. Bollinger and Hotchkiss (2003) provide the risky-worker wage premium logic the authors import to explain why teams might draft deviant players earlier [PAGE 129]. Pager (2003) supplies the selection-bias warning that criminal records can close employment doors entirely, which the authors acknowledge as a limitation because their sample conditions on being drafted [PAGE 130].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive theory of mind here concerns how NFL general managers model one another’s response to the Personal Conduct Policy, and how that second-order belief regresses across policy regimes. Under Tagliabue, the original policy required conviction or its equivalent before league discipline, and it was “not invoked often” with “little effect on the negative publicity” [PAGE 124]. Teams therefore faced low expected league-imposed cost for drafting a player with college deviance. The recursive habit was to regress toward talent maximization: “If the league will not punish him quickly, and if other teams are overlooking character concerns, I should draft the most talented available player regardless of off-field noise.” This produces the negative Deviance coefficient—teams rationally exploit the under-enforcement regime by selecting deviant players earlier, either because they undervalue the risk or because they interpret media visibility as a proxy for aggression [PAGE 129].

Goodell’s April 2007 modification changes the recursive equilibrium. The commissioner can now punish players who are not convicted, making the expected cost of drafting a deviant player uncertain and front-loaded [PAGE 124]. A general manager must now model not only the player’s talent but also the league’s disciplinary reaction function and the reactions of rival teams. The counter-trap emerges: if a team suspects rivals will avoid deviant defensive skill players under Goodell, there may be a contrarian incentive to draft them earlier and absorb the suspension risk. However, the data show the opposite for defensive skill positions—the interaction is positive and significant, meaning each additional mention pushes the player later in the draft under Goodell [PAGE 129]. The authors attribute this to positional risk asymmetry: defensive backs and linebackers whose off-field behavior signals poor judgment may be more likely to make on-field errors that directly concede seven points, so teams systematically shy away [PAGE 129].

The clock structure reinforces this recursion. The 365-day deviance window means a player’s final college season is evaluated immediately before draft eligibility. Under Tagliabue, late-season incidents had limited time to trigger league discipline before the draft, so teams could draft on talent with deferred risk. Under Goodell, the same incidents can trigger immediate league action during the pre-draft process, compressing the decision clock and raising the salience of character. The recursive regression is therefore regime-dependent: in the Tagliabue era, teams regress to talent habits and overlook deviance; in the Goodell era, defensive skill teams counter-trap away from deviance, while offensive and defensive linemen show no significant adjustment [PAGE 129]. The policy change did not uniformly alter behavior across positions, indicating that teams’ theory of mind is position-contingent rather than league-wide.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Three layers can veto or condition the deviance–draft-position relationship. The physical layer is the NFL Combine. Equation 2 is estimated only on combine participants (1,632 of 4,061 observations), and Table 2 reports Combine Part = –0.214 (p < 0.001) [PAGE 127]. Because the dependent variable is logged pick number, a negative coefficient means earlier selection; combine participation is associated with roughly a 19 percent earlier pick (\exp(-0.214) \approx 0.807) [PAGE 127–128]. Non-participation due to injury or personal choice therefore acts as a hard physical veto: teams cannot observe biomechanical outputs (40-yard dash, bench press, vertical, shuttle) and likely discount the player’s draft stock regardless of any deviance signal. Notably, the prose on page 130 describes this as being “draft lower,” which conflicts with the model’s own definition that a lower pick number is a better (earlier) position [PAGE 128]; this sign-language inconsistency is itself a veto hazard for interpretation.

The biomechanical layer is position-specific. Table 3 shows deviance is negative and significant for offensive skill and defensive skill players under the pooled Tagliabue-era logic, but insignificant for offensive and defensive linemen [PAGE 129]. Under Goodell, the Deviance × Goodell interaction flips positive and significant only for defensive skill players [PAGE 129]. The authors explain that defensive skill mistakes can directly cost seven points, so teams have less tolerance for off-field risk at those positions [PAGE 129]. Offensive linemen, by contrast, show no significant deviance effect, suggesting that physical projection and pass-protection technique veto character concerns at that position. Weight improves draft selection across all four position groups in Equation 2 [PAGE 129], and height matters for offensive skill, defensive line, and offensive line [PAGE 129]. These physical covariates can override a small deviance coefficient: a one-standard-deviation weight increase (46 lbs) produces a far larger draft-position shift than a single deviance article (–0.044 log points) [PAGE 126–127].

The weather/external layer is absent from the model—no game-day climate, stadium, or travel variables are included—but it matters for external validity. The draft evaluation process occurs indoors and is mediated by film, combine metrics, and media reports; the model does not account for how weather-dependent on-field performance might interact with character risk. A veto-proof assessment therefore requires recognizing that the identified deviance effect is conditional on the combine and scouting layers having already cleared the player. The Pro Football Reference position reclassification between 2007 and 2008 [PAGE 125] constitutes a structural measurement break: defensive backs were split into cornerbacks, strong safeties, and free safeties, and the authors collapse all positions into six groups to maintain consistency. This grouping vetoes fine-grained position comparisons across the pre- and post-2008 divide unless the analyst accepts the authors’ aggregation assumptions.

Finally, the deviance measure itself is not veto-proof. It counts media articles matching search terms rather than adjudicated incidents, and it does not weight severity [PAGE 125–126, 130]. A player with one highly publicized arrest receives the same unit count as a player with one minor allegation, and unpublicized incidents are zero by construction. This measurement regime means the estimated coefficient is best interpreted as the effect of *salient media deviance* on draft position, not the effect of true deviance.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Defensive skill player with one deviance mention, comparing Tagliabue (2006 draft) to Goodell (2008 draft). Verifiable inputs: Table 2 Deviance = –0.044 and Goodell interaction = +0.018 (insignificant in pooled model), but Table 3 Defensive Skill interaction is positive and significant [PAGE 127, 129]. Prediction: Under Tagliabue, one mention shifts log pick by approximately –0.044, or 4.4 percent earlier. Under Goodell, for defensive skill players, the position-specific interaction reverses the sign; using the Table 3 defensive skill point estimate (positive and significant, with the deviance main effect negative), the net effect is a later draft position relative to the Tagliabue era [PAGE 129]. Veto: if the same player records a sub-4.40-second 40-yard dash or a vertical jump above 35 inches, the combine premium may veto the deviance penalty and restore an early-round grade.

Scenario 2: Non-Division I-FBS player with deviance mentions. Verifiable inputs: NonD1FBS = +0.195 (roughly 21.5 percent later pick), Deviance = –0.044 per mention [PAGE 127]. Prediction: One deviance mention yields a net log-pick change of +0.151, or approximately 16 percent later selection; the school-quality stigma dominates the deviance signal. Breakdown regime: the deviance effect offsets the NonD1FBS penalty only when Deviance exceeds roughly 4.5 mentions (0.195 / 0.044 ≈ 4.43), at which point the net coefficient turns negative. Veto: playing at a non-FBS school is a structural veto; small deviance counts cannot overcome it unless the player also produces elite combine metrics.

Scenario 3: Combine non-participant with deviance. Verifiable inputs: Combine Part = –0.214 (participants drafted ~19 percent earlier), and Equation 2 is estimated only on participants (n = 1,632 vs. 4,061) [PAGE 126–127]. Prediction: A deviant player who declines combine participation is vetoed from early rounds; the absence of physical data makes the deviance signal uninformative or negative because teams cannot separate character risk from injury risk. The model cannot reliably identify the deviance coefficient for Combine Part = 0 because Equation 2 excludes them entirely and Equation 2’s restrict to participants means the full-sample deviance estimate is identified overwhelmingly by players who chose to expose their physical layer. Counterfactual test: if a future draft class shows deviant combine non-participants being drafted at similar rates to deviant participants, that would falsify the physical-veto layer and suggest teams are using alternative evaluation channels (private pro days, film) to bypass the combine gate.
</RLVR_COUNTERFACTUAL_VETOES>