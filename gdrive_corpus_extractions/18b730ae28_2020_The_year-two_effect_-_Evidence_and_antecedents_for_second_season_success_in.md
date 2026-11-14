---
source: "2020 The year-two effect - Evidence and antecedents for second season success in NCAA division I football - N. David Pifer and Matt R. Huml.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 30
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5352
---

<NATIVE_REASONING>
The user wants a deep analytical response based on the provided academic paper about the Year-Two Effect in NCAA Division I football. They've given me strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. Must state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.

I need to write a comprehensive response that analyzes the paper through these specific lenses. The paper is about the Year-Two Effect in NCAA football coaching. I need to treat this as a GSE + GSI Frontier Reasoning Foundry task - essentially doing frontier-level reasoning about this research.

Key facts from the paper:
- 11 seasons (2007-2017), 114 FBS programs, N=1,254, n=114, T=11
- Two-way fixed effects panel regression
- Y2 effect: WIN% improves ~10.42 percentage points (Table 5), SRS improves ~3.54 points
- Recruiting improves ~8.516 spots (negative coefficient because lower rank number = better)
- Offensive turnovers decrease ~0.229 per game in Y2
- Effect strongest when replacing fired-for-performance coach: Y2 WIN% +13.42%, SRS +4.93 points
- Regression to the mean variable: coefficient -0.459, highly significant
- Within R^2 values: 0.058 (WIN%), 0.059 (SRS), 0.072 (FRRk), etc.
- Mean changes table (Table 4): Y1 -1.84%, Y2 +5.76%, Y3 +1.48%, Y4 +2.13%, Y5 -4.16%, 6+ -2.48%

Now let me structure each section carefully.

<THINK_TRACE>: >=400 words. Deep multi-hop derivation & gray-zone audit. I need to trace the causal chains, identify confounders, gray zones (selection bias, survivorship, regression to mean, fixed effects assumptions, endogeneity of coaching changes, etc.). Multi-hop means connecting multiple variables: firing reason -> talent regression -> recruiting class maturation -> scheme installation -> turnover reduction -> WIN% improvement. Gray-zone audit: where does the paper's inference break? Within-estimator wipes out between-school variation; tenure is endogenous to performance (coaches fired after bad years); the panel is unbalanced in reality though they say balanced N=1,254; recruiting rankings are ordinal not interval; SRS includes SOS so controlling for SOS while using SRS as outcome creates mechanical correlation; turnover outcome measured per game but season length varies; etc.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX. Units. Page citations. Breakdown. I need to reproduce equations from the paper or formalize them. The paper has Equation (1): y_it = X'_it β + e_i + h_t + u_it. Equation (3) with changes. Equation (4) recruiting. Equation (5) penalties/turnovers. Equation with REG_MEAN. I'll write them in LaTeX with exact variables and units (percentage points, SRS points, turnover per game, recruiting rank spots). Page citations: Table 4 [PAGE 51], Table 5 [PAGE 52], Table 6 [PAGE 53], Table 7 [PAGE 54], Table 8 [PAGE 55], Table 9 [PAGE 56], Table 10 [PAGE 57], abstract [PAGE 45], etc. Need to check page numbers from the text. The text shows page headers: 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60. So:
- Abstract: page 45
- Table 1: page 49
- Table 2: page 50
- Table 3: page 51
- Table 4: page 51
- Equation 3 discussion: page 51-52
- Table 5: page 52
- Equation 4: page 52-53
- Table 6: page 53
- Equation 5: page 53-54
- Table 7: page 54
- Table 8: page 55
- Table 9: page 56
- Table 10: page 57
- Conclusion: page 57-58

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps. Trace the idea from media cliché (Emerson 2017, Pollack quote) through Connelly 2016, Hokanson 2008, Dohrn et al. 2015, Maxcy 2013, Huml et al. 2019. "Multi-week traps" likely refers to temporal traps: the 3-year average regression window, the 5-year contract extension cliff, the week-to-week noise vs season-level signal, the "sweet spot" being an artifact of contract cycles. Also the retro-causal aspect: we label it Year-Two Effect because we look backward from success and attribute it to year two; survivorship bias (coaches who make it to year two are already survivors).

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. This is about the coach's/players' psychology and strategic interaction. Crisis habit regression: under pressure, coaches/players regress to prior habits unless year two provides stability. Counter-trap: opponents adapt to year-one schemes, so year two improvement might be opponent adaptation lag or the new coach's scheme catching opponents off-guard the second time. Clock: the 4-year contract extension window, the 5-year cliff, the recursive expectation that administrators fire after year 3-4 if no improvement, creating a self-fulfilling timeline.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. This section should examine what could veto the Year-Two Effect across physical layers: player physiology (freshmen to sophomores, physical maturation), biomechanical (scheme fit, technique reps), weather (SOS changes, conference changes, home/away), roster attrition, transfer portal (not in 2007-2017 era but relevant), injuries. The paper controls for SOS and NEWCONF but doesn't model injuries, weather, or roster continuity. Veto proof means: under what conditions does the effect definitely not hold? E.g., if a coach replaces a retired coach but inherits a roster with no depth at QB, the year-two effect is vetoed by physical layer constraints.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some evaluation framework. I need to create 3 counterfactual veto scenarios that are verifiable (falsifiable) with predictions. Examples:
1. If a second-year coach inherits a roster where the senior/junior classes (recruited by prior coach) have negative rank changes (worse talent), the Y2 WIN% effect should be attenuated or reversed. Prediction: coefficient on Y2 interacts negatively with ΔSRRk and ΔJRRk.
2. If strength of schedule increases by >1 SD (approx 2.5 points) in year two, the Y2 SRS improvement should be nullified because SRS mechanically incorporates SOS. Prediction: Y2 coefficient in SRS model becomes insignificant when ΔSOS > +2.5.
3. If a coach is hired after a non-performance firing (scandal/legal), the Y2 effect should vanish (Table 8 shows REP_FIRED_NONPERF Y2 p=0.8871). Verifiable veto: programs firing coaches for NCAA violations show no year-two WIN% lift (p>0.10) and recruiting rankings do not improve (ΔFRRk not significant).

Word count: >=1000 words total across all sections. THINK_TRACE alone >=400 words.

I need to be careful about betting lines: absolutely no mention of spreads, totals, moneylines, odds. The paper doesn't discuss betting anyway, but I must avoid it.

Toy equations: No fake ratios. I'll use real equations from the paper or formalized versions with proper units.

Citations: [PAGE N] markers and verbatim quotes.

Let me draft this carefully.

Structure:
- Start directly with the XML sections. No intro outside sections.
- Each section substantive.

THINK_TRACE (>=400 words):
Multi-hop derivation:
Hop 1: Coaching turnover is not random. 59% of coaches replace someone fired for performance (page 58). This creates a negative performance shock at t-1.
Hop 2: Negative shock triggers regression to the mean. REG_MEAN coefficient -0.459 (Table 10, page 57). If prior WIN% was 1 SD below 3-year mean (~-0.199), expected rebound is +0.091 (9.1 percentage points).
Hop 3: Recruiting class maturation. First-year recruiting drops (Table 6: Y1 FRRk +3.701 rank spots = worse), second-year recruiting improves by 8.516 spots (better). By year two, the coach's own recruits are sophomores (SORk) and juniors (JRRk) and can contribute.
Hop 4: Scheme installation and turnover reduction. Y2 offensive turnovers drop by 0.229 per game (Table 7, page 54). Over 12 games, ~2.7 fewer turnovers.
Hop 5: WIN% outcome. Raw mean Y2 change +5.76% (Table 4, page 51). Fixed effect Y2 coefficient +0.1042 (10.42 percentage points) controlling for SOS, NEWCONF, JRRk, SRRk (Table 5, page 52).

Gray-zone audit:
- Endogeneity of tenure: coaches are observed in year two only if they survived year one. Survival is performance-dependent (Holmes 2011, cited page 48). This is selection on the dependent variable.
- Ordinal recruiting ranks treated as interval. A move from 100 to 90 is not equivalent to 10 to 0.
- SRS outcome includes SOS as a component, yet SOS change is a regressor. Mechanical endogeneity: SRS = margin + SOS adjustment; if SOS changes, SRS changes mathematically.
- Within estimator eliminates all between-program variation. Cannot tell if Year-Two Effect is universal or driven by subset (e.g., Group of Five vs Power Five).
- Panel claims balanced N=1,254 but note 16 programs excluded (page 49 note 2), and coaching changes are irregular. The "balanced panel" is season-level, not coach-spell balanced.
- REG_MEAN absorbs much of Y2: coefficient drops from 0.1042 (Table 5) to 0.0790 (Table 10), showing ~24% attenuation.

Need to hit 400 words. Let's expand.

SOURCE_OPERATORS_AND_EQUATIONS:
Write formal LaTeX.

Equation (1) general:
y_{it} = X_{it}'\beta + e_i + h_t + u_{it}, t \in \{1,...,T\}, i \in \{1,...,N\}

Where y_{it} outcome (ΔWIN% or ΔSRS), X includes tenure dummies Y1-Y5, ΔSOS, ΔNEWCONF, ΔJRRk, ΔSRRk, e_i school fixed effect, h_t season fixed effect, u_{it} idiosyncratic error.

Within estimator:
\ddot{y}_{it} = \ddot{X}_{it}'\beta + \ddot{u}_{it}, where \ddot{z}_{it} = z_{it} - \bar{z}_{i.} - \bar{z}_{.t} + \bar{z}_{..}

Equation (3):
ΔWIN\%_{it} or ΔSRS_{it} = β_0 + β_1 Y1 + β_2 Y2 + β_3 Y3 + β_4 Y4 + β_5 Y5 + β_6 ΔSOS + β_7 NEWCONF + β_8 ΔJRRk + β_9 ΔSRRk + e_i + h_t + u_{it}

Table 5 results (page 52):
Y2 coefficient for WIN%: \hat{\beta}_{Y2} = 0.1042, S.E. = 0.0217, t = 4.9230, p < 0.001. Units: percentage points (proportion 0.1042 = 10.42 pp).
Y2 coefficient for SRS: \hat{\beta}_{Y2} = 3.5429, S.E. = 0.7144, t = 4.9590, p < 0.001. Units: SRS points (points better than average per game).

Equation (4) recruiting:
ΔFRRk_{it} = β_0 + β_1 Y1 + ... + β_5 Y5 + β_6 NEWCONF + β_7 (WIN\%_{t-1} - WIN\%_{t-2}) + e_i + h_t + u_{it}
Note: lower rank number = better talent, so negative coefficient = improvement. Table 6 (page 53): Y2 = -8.516 (S.E. 1.579, p<0.001), meaning ~8.5 rank spots improvement.

Equation (5) discipline:
ΔPENYDSPG_{it} and ΔOTOVPG_{it} models. Table 7 (page 54): Y2 for OTOVPG = -0.229 (S.E. 0.065, t=-3.509, p=0.0005). Units: turnovers per game. Over 12-game season: 12 × 0.229 ≈ 2.75 fewer turnovers.

Table 10 REG_MEAN (page 57):
ΔWIN\%_{it} = ... + β_REG REG_MEAN_{it} + ...
REG_MEAN_{it} = WIN\%_{t-1} - (WIN\%_{t-2} + WIN\%_{t-3} + WIN\%_{t-4})/3
\hat{\beta}_{REG} = -0.4590, S.E. = 0.0285, t = -16.077, p < 0.001.
Interpretation: for every +1 percentage point prior-season WIN% exceeded 3-year average, current season WIN% falls by 0.459 pp.

Breakdown: Within R^2 values: WIN% model 0.058, SRS 0.059, FRRk 0.072, PENYDSPG 0.007, OTOVPG 0.019. Low explanatory power for discipline models.

RETROCAUSAL_GENEALOGY:
Historical lineage: Media cliché (Emerson 2017, page 45; Pollack quote page 46). Examples: Stoops (7-5 to 13-0), Snyder (1-10 to 5-6), Saban (7-6 to 12-2), Richt (8-4 to 13-1) (page 45-46). Academic antecedents: Connelly 2016 (SB Nation, adjusted points per game; Y2 +3.0 pp but confounded by regression), Hokanson 2008 (case analysis, schemes/attitudes), Dohrn et al. 2015 (revenue tiers: mid-revenue shows Y2 significance, high-revenue none, low-revenue consistent), Maxcy 2013 (first season worse, effect wears off by second; recruiting drop then rebound), Huml et al. 2019 (facilities and recruiting; Y2 control significant).
Multi-week traps:
- Trap 1: The 3-year mean window (REG_MEAN) looks backward and mechanically creates a "year two" rebound because coaches are hired after bad years (t-1 low), so t and t+1 naturally regress upward regardless of coaching quality.
- Trap 2: Contract clock (4-5 year extensions, page 58). Administrators observe year two as a checkpoint; if improvement occurs, they extend; if not, they fire. This creates a survivorship filter: only coaches who show year-two improvement survive to year three-four, making the effect appear persistent.
- Trap 3: Week-to-week variance aggregated to season. SRS and WIN% are season-level averages; a single lucky close game in year two can move WIN% by 0.083 (1/12), mimicking an effect.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: Under firing-threat crisis (performance-based dismissal), players and coaches revert to prior habits under stress. Year one is crisis mode (new system, uncertainty). Year two allows habit consolidation: the coach's crisis response becomes the default. The model shows penalties unchanged (Table 7, page 54), so discipline isn't the mechanism; rather, turnovers fall because scheme familiarity reduces decision errors under pressure.
Counter-trap: Opponents learn year-one tendencies via tape. In year two, the coach has a full offseason to adjust to opponent adaptations; conversely, opponents have more film on the new coach, which could neutralize the effect. The fact that Y2 still improves suggests scheme installation outpaces opponent adaptation.
Clock: The recursive administrator-coach interaction. Expectation of year-two improvement creates a self-fulfilling prophecy: administrators give year-two leeway, buyouts are structured around year 2-3, coaches recruit specifically for year-two payoff (Table 6 shows recruiting improves in year two). This creates a temporal discounting where year one is treated as a sunk cost.

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer: Roster continuity and maturation. Freshmen (FRRk) in year one become sophomores (SORk) in year two. Physical development (strength, speed) is bounded by biomechanical limits; a roster with no upperclassmen depth cannot overcome a year-two coaching effect via physical maturation alone. Veto condition: if ΔSRRk and ΔJRRk show upperclass talent degradation (worse ranks), physical layer caps improvement.
Biomechanical: Scheme fit. Offensive turnovers depend on QB-receiver timing, offensive line cohesion. These require repetition reps. If a second-year coach changes scheme again (e.g., new coordinator), the biomechanical reps reset. Veto: coordinator turnover in year two negates OTOVPG decline.
Weather/conference: ΔSOS and NEWCONF controlled (Table 5), but weather variance within conference (e.g., northern road games in November) not modeled. SRS incorporates SOS, so a harder schedule mechanically depresses WIN% but inflates SRS contextually. Veto: ΔSOS > +1.0 (harder schedule) should reduce ΔWIN% by β=-0.0134 per SOS point (Table 5).
Judgment: The effect is veto-proof only when (1) roster upperclass talent is stable or improving, (2) scheme continuity exists, and (3) schedule difficulty does not increase sharply. Table 8/9 (pages 55-56) show the effect vanishes for non-performance firings (scandal/legal), indicating a contextual veto: if the prior regime's collapse was not performance-based, there is no talent vacuum or motivation shock to leverage.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable veto scenarios + predictions.

Veto Scenario 1: Upperclass talent drain.
Setup: Identify school-coach spells where ΔSRRk > +20 (senior class got much worse, i.e., rank number increased) OR ΔJRRk > +20 from year one to year two.
Prediction: The Y2 coefficient on ΔWIN% should be statistically indistinguishable from zero (|t| < 1.96) or negative. The paper's main effect (β_Y2 = 0.1042) should attenuate by >50% in this subsample. Verifiable via re-running Table 5 on restricted sample.
Veto Scenario 2: Schedule difficulty shock.
Setup: Spells where ΔSOS > +2.51 (one standard deviation from Table 2, page 50).
Prediction: In the SRS model, because SRS mechanically includes SOS, the raw Y2 SRS coefficient (3.5429) should be offset by β_SOS × ΔSOS = 0.4196 × 2.51 ≈ +1.05 points (wait, sign: Table 5 SRS model SOS coefficient is +0.4196, meaning harder schedule leads to higher SRS? That seems odd because SRS = margin + SOS adjustment; actually if opponents are better, SRS might be higher for same margin. But WIN% coefficient on SOS is -0.0134. So for WIN%, harder schedule lowers wins. Prediction: ΔWIN% Y2 effect should be reduced by at least 0.0134 × 2.51 ≈ 0.034 (3.4 percentage points), bringing 10.42 pp down to ~7 pp, possibly below significance if combined with other controls.
Veto Scenario 3: Non-performance succession.
Setup: Coaches replacing a predecessor fired for non-performance (NCAA violations, legal issues) per Table 8/9 coding (REP_FIRED_NONPERF).
Prediction: Based on Table 8 (page 55), Y2 coefficient = -0.0122 (S.E. 0.0855, p=0.8871) and Table 9 Y2 = 0.7855 (S.E. 2.8881, p=0.7857). Verifiable veto: no significant WIN% or SRS improvement in year two; recruiting rankings should not improve (no significant Y2 in recruiting model for this subsample). The Year-Two Effect is contextually vetoed when succession is not performance-driven.

Make sure no betting lines mentioned.

Word count check: I'll aim for ~1500-2000 words total to be safe.

Let's write it out. Need verbatim quotes with [PAGE N]. Let me find exact quotes I can use.

Page 45 abstract: "this study found support for the Year-Two Effect’s existence, particularly in situations where coaches were replacing a prior coach that had been fired for on-field performance reasons."
Page 46 Pollack: "It [the Year-Two Effect] definitely happens a lot... It’s confidence. It’s familiarity with the coach. It’s knowing expectations and rules" (Emerson, 2017, para. 6).
Page 46 availability heuristic footnote.
Page 51 Table 4 mean changes.
Page 52 Table 5.
Page 53 Table 6: "During a coach’s second season, the team’s national recruiting rankings were expected to improve by approximately eight to nine spots from the prior season..."
Page 54 Table 7: "teams with second-year head coaches will commit nearly 0.23 fewer offensive turnovers per game than they did the prior season, a value that averages out to nearly three fewer turnovers over the length of an entire regular season."
Page 58: "Over 230 coaching changes occurred during the sampled timeframe, and the mean and median lengths of service were 5.87 and 4 seasons, respectively."
Page 58: "Indeed, 59% of the head coaches in the sample took over for coaches who had resigned or been fired due to their team’s inability to perform on the field."

I need to cite pages accurately. The page numbers in the text are clear: abstract on page 45, etc.

Now, I'll compose the final output with exactly the six XML sections in order. No extra text outside. Make sure THINK_TRACE >=400 words.

Let me write carefully.

One concern: The user says "STRICT INVARIANTS" and lists XML sections. I should output exactly those sections, nothing else.

Let's draft.

THINK_TRACE content (approx 450-500 words):

I'll write multi-hop derivation and gray-zone audit.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX blocks, units, citations.

RETROCAUSAL_GENEALOGY: Historical lineage and multi-week traps.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios + predictions.

Let's ensure I don't mention odds, spreads, etc.

Also "verbatim quotes" - I should quote directly from the text with [PAGE N].

Proceeding to write.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper’s causal chain runs through five sequential hops. Hop 1: succession is non-random. Page 58 states, “59% of the head coaches in the sample took over for coaches who had resigned or been fired due to their team’s inability to perform on the field.” Because the prior regime was removed for poor performance, the inherited win percentage at t−1 is depressed below the program’s steady state. Hop 2: that depression triggers mechanical regression. Table 10 on page 57 isolates REG_MEAN = WIN%_{t−1} − [(WIN%_{t−2} + WIN%_{t−3} + WIN%_{t−4}) / 3] and estimates \hat{β}_{REG} = −0.4590 (t = −16.077, p < .001). Interpretation: for every one percentage point that the prior season’s win percentage exceeded the three-year average, the current season’s win percentage falls by 0.459 points, and vice versa. A team one standard deviation below its mean (SD ≈ 0.199 from Table 2, page 50) is therefore predicted to rebound by roughly 0.091 win percentage points purely through statistical mean reversion, before any coaching effect is added.

Hop 3: recruiting class maturation. Page 53 reports that in a coach’s second season, “the team’s national recruiting rankings were expected to improve by approximately eight to nine spots from the prior season,” while year one typically sees a decline of three to four spots (Table 6). Because lower rank numbers denote better talent, the negative year-two coefficient (−8.516) represents talent acquisition. The upperclassmen recruited in year one become sophomores and juniors in year two, entering the contribution window.

Hop 4: decision-error reduction. Page 54 states that teams with second-year head coaches “will commit nearly 0.23 fewer offensive turnovers per game than they did the prior season,” or roughly 2.75 fewer turnovers over a twelve-game season. Penalties are unchanged (Table 7, page 54), so the mechanism is not broad discipline but scheme-specific ball security.

Hop 5: outcome realization. Table 4 on page 51 shows raw mean year-two win-percentage change of +5.76%, while Table 5 on page 52, controlling for schedule, conference, and returning talent, yields \hat{β}_{Y2} = 0.1042 (≈10.42 percentage points, p < .001) for ΔWIN% and \hat{β}_{Y2} = 3.5429 SRS points for ΔSRS. The effect is strongest after performance-based firings: Table 8 on page 55 gives REP_FIRED_PERF (Y2) = 0.1342 for ΔWIN% and 4.9328 SRS points (Table 9, page 56).

Gray-zone audit. (1) Endogenous survival: a coach is observed in year two only if retained after year one, and retention is performance-dependent (Holmes 2011, cited page 48). This is selection on the outcome variable. (2) Ordinal ranks treated as interval: a move from rank 100 to 90 is not equivalent to rank 10 to rank 0, yet ΔFRRk enters linearly. (3) Mechanical overlap: SRS is constructed partly from strength of schedule, yet ΔSOS is a regressor in the ΔSRS model (Table 5, page 52), creating partial endogeneity. (4) The within estimator strips all between-program heterogeneity; the result cannot distinguish whether the year-two effect is universal or confined to, say, Group of Five programs with larger salary-response elasticity (Dohrn et al. 2015, page 48). (5) Regression to the mean absorbs much of the effect: the year-two coefficient falls from 0.1042 (Table 5) to 0.0790 (Table 10), a ~24% attenuation, indicating that the “effect” is partly a statistical artifact of hiring after bad seasons.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal specification from page 51 (Equation 1):

\[
y_{it} = X_{it}'\beta + e_i + h_t + u_{it}, \quad t \in \{1,\ldots,T\}, \; i \in \{1,\ldots,N\}
\]

where \(y_{it}\) is the season-to-season change in an outcome (\(\Delta WIN\%\) in percentage points, or \(\Delta SRS\) in rating points), \(X_{it}'\) is a \(K \times 1\) vector of predictors, \(e_i\) is the school fixed effect, \(h_t\) is the season fixed effect, and \(u_{it}\) is the idiosyncratic error. The within transformation is \(\ddot{z}_{it} = z_{it} - \bar{z}_{i\cdot} - \bar{z}_{\cdot t} + \bar{z}_{\cdot\cdot}\).

Equation 3 (page 51), primary performance model:

\[
\Delta y_{it} = \beta_0 + \sum_{k=1}^{5} \beta_k Y_{k,it} + \beta_6 \Delta SOS_{it} + \beta_7 NEWCONF_{it} + \beta_8 \Delta JRRk_{it} + \beta_9 \Delta SRRk_{it} + e_i + h_t + u_{it}
\]

Units: \(\Delta WIN\%\) is proportion (e.g., 0.1042 = 10.42 percentage points); \(\Delta SRS\) is points relative to an average team (0.0 = average); \(\Delta SOS\) is points above/below average opponent strength; recruiting ranks are ordinal national positions (lower = better talent).

Table 5 estimates (page 52):

For \(y = \Delta WIN\%\): \(\hat{\beta}_{Y2} = 0.1042\), \(SE = 0.0217\), \(t = 4.9230\), \(p < 0.001\). For \(y = \Delta SRS\): \(\hat{\beta}_{Y2} = 3.5429\), \(SE = 0.7144\), \(t = 4.9590\), \(p < 0.001\). Within \(R^2 = 0.058\) (WIN%) and \(0.059\) (SRS).

Equation 4 (page 52), recruiting model:

\[
\Delta FRRk_{it} = \beta_0 + \sum_{k=1}^{5} \beta_k Y_{k,it} + \beta_6 NEWCONF_{it} + \beta_7 (WIN\%_{t-1} - WIN\%_{t-2}) + e_i + h_t + u_{it}
\]

Because the outcome is a rank (lower = better), negative coefficients indicate improvement. Table 6 (page 53): \(\hat{\beta}_{Y1} = 3.701\) (rank worsens), \(\hat{\beta}_{Y2} = -8.516\) (\(SE = 1.579\), \(p < 0.001\), ≈8.5 spots better).

Equation 5 (pages 53–54), discipline model:

\[
\Delta y_{it} = \beta_0 + \sum_{k=1}^{5} \beta_k Y_{k,it} + \beta_6 \Delta SOS_{it} + \sum_{c \in \{FR,S O, JR, SR\}} \beta_c \Delta Rk_{c,it} + e_i + h_t + u_{it}
\]

Table 7 (page 54): for \(\Delta OTOVPG\) (turnovers per game), \(\hat{\beta}_{Y2} = -0.229\) (\(SE = 0.065\), \(t = -3.509\), \(p = 0.0005\)). Units: turnovers per game; over a 12-game season, \(12 \times 0.229 \approx 2.75\) fewer turnovers. For \(\Delta PENYDSPG\), all tenure coefficients are insignificant (\(|t| < 1.0\)).

Regression-to-the-mean augmentation (page 57, Table 10):

\[
REG\_MEAN_{it} = WIN\%_{t-1} - \frac{WIN\%_{t-2} + WIN\%_{t-3} + WIN\%_{t-4}}{3}
\]

\[
\Delta WIN\%_{it} = \cdots + \beta_{REG} REG\_MEAN_{it} + e_i + h_t + u_{it}
\]

\(\hat{\beta}_{REG} = -0.4590\), \(SE = 0.0285\), \(t = -16.077\), \(p < 0.001\). Holding all else constant, a one-percentage-point positive deviation from the three-year mean predicts a 0.459-percentage-point decline in the following season.

Breakdown regimes: The model assumes strict exogeneity of tenure timing conditional on fixed effects; it breaks down when coaching changes are triggered by mid-season crises not captured by annual observables. Within \(R^2\) values below 0.08 for most models indicate that the majority of season-to-season variance remains idiosyncratic.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The Year-Two Effect originated as a media truism rather than an empirical law. Page 45 documents its popular citation after Kirby Smart’s Georgia improved from 8–5 to 13–2, and page 46 quotes ESPN analyst David Pollack: “It [the Year-Two Effect] definitely happens a lot… It’s confidence. It’s familiarity with the coach. It’s knowing expectations and rules” (Emerson, 2017). The paper traces historical exemplars: Bob Stoops at Oklahoma (7–5 to 13–0 across 1999–00), Bill Snyder at Kansas State (1–10 to 5–6 across 1989–90), Nick Saban at Alabama (7–6 to 12–2 across 2007–08), and Mark Richt at Georgia (8–4 to 13–1 across 2001–02) (pages 45–46).

Academic lineage precedes the present study. Connelly (2016) found second-year coaches improved by 3.0 adjusted points per game but noted that teams with poor past performance tend to improve regardless of tenure—a regression artifact the current paper formally models. Hokanson (2008) offered case-based speculation about new schemes and optimism but lacked peer-reviewed rigor. Dohrn, Lopez, and Reinhardt (2015) found new coaches improved FBS performance overall, but the year-two effect was strongest specifically in mid-revenue programs, not high- or low-revenue tiers. Maxcy (2013) showed replacements for retired or fired coaches underperform in year one, with significance fading by year two, and documented a recruiting drop followed by a year-two rebound. Huml et al. (2019) found that a coach-in-second-season dummy significantly predicted recruiting improvements, tying facilities and stability to talent acquisition.

Multi-week traps embedded in this lineage. Trap A is the three-year lookback window used to construct REG_MEAN (page 57). Because coaches are typically hired after subpar seasons, the window is anchored on a depressed \(t-1\) observation, guaranteeing an upward mechanical drift in \(t\) and \(t+1\) that masquerades as a coaching effect. Trap B is the contract clock: page 58 reports mean and median coaching tenures of 5.87 and 4 seasons, with nearly 25% of departures occurring after year four. Administrators treat year two as a contractual checkpoint; coaches who survive to year three are a selected sample of those who already demonstrated year-two improvement, creating survivorship feedback. Trap C is temporal aggregation: season-level \(WIN\%\) and \(SRS\) conceal week-to-week variance. A single close-game swing in year two moves win percentage by \(1/12 \approx 0.083\), enough to mimic a structural break without any underlying regime change in coaching quality.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression posits that under the threat of dismissal, coaches and players regress to prior habits under stress unless a stable second year allows new habits to consolidate. Page 54 shows penalties are unaffected by tenure (\(\Delta PENYDSPG\) coefficients all insignificant), ruling out generalized discipline as the mechanism. Instead, offensive turnovers fall by 0.229 per game in year two (Table 7), consistent with scheme-specific repetition: quarterbacks and ball carriers accumulate reps in the new system, reducing decision errors under pressure. The first year is crisis mode—new staff, uncertain roles, split loyalties between old and new regimes; by year two, the coach’s crisis response becomes the default habit.

The counter-trap is opponent adaptation. Opponents accumulate film on the new coach’s tendencies during year one. In year two, the coach has had a full offseason to adjust to those adaptations, but opponents also possess more data. The persistence of the year-two WIN% and SRS gains despite this information accumulation implies that scheme installation and player familiarity outpace opponent learning. If opponent adaptation dominated, the year-two coefficient should attenuate or reverse as more film becomes available; Table 5 shows the opposite.

The clock is the recursive administrator-coach expectation loop. Page 58 notes over 230 coaching changes in the sample and that initial contracts and buyout clauses rarely extend beyond year four because improvements are rarer from year five onward. If administrators expect year-two improvement, they grant year-two leeway and structure bonuses around that benchmark; coaches, anticipating this, allocate recruiting and scheme-installation resources to produce a year-two payoff (Table 6 confirms recruiting rankings improve significantly in year two). This creates a self-fulfilling temporal discounting: year one is treated as a sunk cost, year two as the evaluation window, and years three-four as the extension or firing decision node. The effect is therefore partly an institutional artifact of contract design, not solely a product of on-field coaching competence.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: roster continuity and biological maturation. Year-two improvement depends on freshmen (FRRk) from year one maturing into contributing sophomores (SORk) and juniors (JRRk). Physical development is bounded by biomechanical limits—strength, speed, and recovery do not scale linearly with coaching tenure. If the upperclass roster inherits degraded talent (ΔSRRk or ΔJRRk showing worse national ranks), the physical layer caps improvement regardless of coaching quality. Table 5 controls for ΔJRRk and ΔSRRk, but cannot offset a roster with no playable depth at quarterback or offensive line.

Biomechanical layer veto: scheme continuity and repetition reps. Offensive turnovers depend on QB-receiver timing, offensive-line cohesion, and ball-security drills, all requiring high-volume, task-specific repetition. If a second-year coordinator change forces a scheme overhaul, the repetition clock resets and the year-two turnover reduction is vetoed. The paper does not observe coordinator stability, so the OTOVPG finding (Table 7, page 54) assumes scheme continuity.

Weather and scheduling layer: ΔSOS and NEWCONF are controlled in Table 5 (page 52), but within-conference weather variance (e.g., November road games in cold climates) is unmodeled. SRS mechanically incorporates opponent strength, so a harder schedule raises SRS contextually while depressing WIN%. The WIN% coefficient on ΔSOS is −0.0134 (Table 5), meaning a one-point increase in schedule difficulty reduces expected win percentage by 1.34 points. A schedule shock exceeding one standard deviation (ΔSOS > 2.51 from Table 2, page 50) would mechanically subtract roughly 3.4 percentage points from year-two gains, partially vetoing the effect.

Contextual veto from succession type: Table 8 (page 55) and Table 9 (page 56) show the year-two effect vanishes when the predecessor was fired for non-performance reasons (scandal, legal issues): REP_FIRED_NONPERF (Y2) yields ΔWIN% = −0.0122 (\(p = 0.8871\)) and ΔSRS = 0.7855 (\(p = 0.7857\)). Without a performance-based talent vacuum or motivation shock, there is no “floor” to rebound from, and the year-two effect is contextually vetoed. The effect is veto-proof only when (1) upperclass talent is stable or improving, (2) scheme continuity preserves repetition reps, and (3) schedule difficulty does not increase sharply.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable reinforcement-learning veto scenarios with counterfactual predictions.

Veto Scenario 1: Upperclass talent drain. Restrict the panel to coach-spells where the senior or junior recruiting class deteriorates by more than 20 national rank spots from year one to year two (ΔSRRk > 20 or ΔJRRk > 20). Counterfactual prediction: the year-two coefficient on ΔWIN% should fall to statistical indistinguishability from zero (\(|t| < 1.96\)) or turn negative, attenuating the main Table 5 estimate (\(\hat{\beta}_{Y2} = 0.1042\)) by more than 50%. If the physical roster cannot contribute, the coaching effect cannot manifest on the field.

Veto Scenario 2: Schedule difficulty shock. Restrict to spells where strength of schedule increases by more than one standard deviation (ΔSOS > 2.51, from Table 2 on page 50). Counterfactual prediction: in the ΔWIN% model, the year-two gain should be reduced by at least \(0.0134 \times 2.51 \approx 0.034\) (3.4 percentage points), bringing the expected improvement from 10.42 pp to approximately 7 pp, likely below conventional significance when combined with fixed-effect noise. In the ΔSRS model, the mechanical SOS component should partially offset the coaching coefficient, exposing endogeneity in using SRS as a pure coaching outcome.

Veto Scenario 3: Non-performance succession. Restrict to coaches replacing predecessors fired for non-performance reasons (NCAA violations, legal issues) as coded in Table 8 and Table 9. Counterfactual prediction: year-two ΔWIN% and ΔSRS coefficients remain insignificant (\(p > 0.10\)), and the recruiting model (Equation 4 analog) shows no significant year-two improvement in national recruiting rankings. The Year-Two Effect is vetoed when succession is not triggered by on-field failure, because there is no depressed baseline from which to regress and no urgency to install a new scheme quickly.
</RLVR_COUNTERFACTUAL_VETOES>