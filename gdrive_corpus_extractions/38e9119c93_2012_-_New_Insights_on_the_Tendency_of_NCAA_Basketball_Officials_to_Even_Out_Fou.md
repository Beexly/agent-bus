---
source: "2012 - New Insights on the Tendency of NCAA Basketball Officials to Even Out Foul Calls - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/journals/Journal of Quantitative Analysis in Sports/2012"
pages: 20
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 8144
---

<NATIVE_REASONING>
The user wants a deep analysis of a specific research paper about NCAA basketball referee bias (foul calling "evening out" tendency). I need to produce output with exact XML sections:

1. `<THINK_TRACE>` - Deep multi-hop derivation & gray-zone audit (>=400 words).
2. `<SOURCE_OPERATORS_AND_EQUATIONS>` - Formal LaTeX, units, page citations, breakdown.
3. `<RETROCAUSAL_GENEALOGY>` - Historical/scientific lineage & multi-week traps.
4. `<RECURSIVE_THEORY_OF_MIND>` - Crisis habit regression vs counter-trap vs clock.
5. `<CROSS_LAYER_VETO_ADJUDICATION>` - Physical/biomechanical/weather veto proof.
6. `<RLVR_COUNTERFACTUAL_VETOES>` - 3 verifiable RLVR veto scenarios + predictions.

Constraints:
- ZERO BETTING LINES: No spreads, totals, moneylines, odds (in betting sense). Wait, the paper talks about "odds" in the statistical/probability sense. The constraint says "Never mention spreads, totals, moneylines, or odds." This is tricky because the paper is literally about odds ratios. I need to be careful: I can discuss probability/statistical odds in the academic sense? The constraint says "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." This likely means no betting odds. But "odds" appears in the paper as statistical odds. I should avoid using "odds" in a betting context, but the paper uses "odds of a foul on the home team." I think the constraint is about betting lines, so I should avoid betting terminology. However, to be safe, I might need to avoid the word "odds" entirely? The instruction says "Never mention spreads, totals, moneylines, or odds." That's absolute. But the source text is full of "odds". Hmm. I need to navigate this. I can refer to "log-odds" as statistical quantities? The constraint says never mention odds. I think I should interpret it as betting odds, but to be strictly compliant, I might avoid the word "odds" or use euphemisms like "logit response" or "probability ratio." Actually, looking carefully: "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." Since this is a sports research paper analysis, and betting lines are explicitly forbidden, I will avoid all gambling terminology. I can discuss "statistical likelihood ratios" or "model coefficients" without using the word "odds." But the paper's coefficient is exp(beta). I can call it "multiplicative effect on the home-team foul probability ratio" or similar. I will avoid the word "odds" where possible, or if I must reference the paper, I'll quote it but maybe say "[statistical odds ratio]"? The constraint is strict. I'll try to avoid the word entirely and use "probability ratio" or "likelihood multiplier."

Wait, the user explicitly wants formal LaTeX equations. The paper uses logistic regression: logit(pi) = ... I can write that. I need to cite exact [PAGE N] markers. The source text has page numbers embedded: 1, 2, 3... up to 21. I should cite like [PAGE 7], [PAGE 14], etc.

Word count: >= 1,000-word depth across sections. THINK_TRACE >= 400 words.

Let's plan each section.

**THINK_TRACE**: Multi-hop derivation. Start from the paper's core claim: foul differential (home - visitor) negative coefficient means as visitor fouls accumulate relative to home, probability of home foul increases (evening out). Anderson & Pierce (2009) logistic regression: 12.5% increase. Noecker & Roback GLMM: 19.9%. Then expanded model with interactions: foul.diff * score.diff mitigates effect when home leading by 20 (10.8% vs losing by 20 45.1%). 2009-10 data: time.left interaction, foul type interactions (offensive strongest 31.7%, personal 25.5%, shooting 18.7%). Random effects: game variance 0.185, home team 0.078, visiting 0.043 in 2009-10. Gray zones: referee-level analysis non-significant because individual foul-call attribution missing (only crew known). BLUPs have huge prediction intervals. Exclusion of second half to avoid intentional fouls may introduce censoring bias. Discretionary vs nondiscretionary fouls based on Price et al (2009) NBA findings applied to college. Need to audit assumptions: independence of random effects, linearity of logit in foul.diff, exclusion of technical fouls (n=26), first-half-only data, score differential computed home minus visitor. Multi-week trap: if one models this as static bias, misses time-decay within half and score-state modulation; over a multi-week slate, teams with high foul propensity (DePaul, Virginia, Seton Hall, Indiana) may appear systematically disadvantaged in later games if schedulers or markets anchor on season averages rather than time-decayed within-game effects. Gray zone: causal direction—does foul differential cause next foul, or does playing style cause both? Confounding by team aggression not fully controlled. Need >=400 words.

**SOURCE_OPERATORS_AND_EQUATIONS**: Formal LaTeX. Define variables:
- $y_{ij} \in \{0,1\}$ indicator foul $j$ in game $i$ is on home team.
- $\pi_{ij} = P(y_{ij}=1 | \cdot)$.
- $\text{foul.diff}_{ij} = F_{H,i}(t_{ij}) - F_{V,i}(t_{ij})$ (home minus visitor cumulative fouls before the call).
- $\text{score.diff}_{ij} = S_{H,i}(t_{ij}) - S_{V,i}(t_{ij})$.
- $lead.home_{ij} = \mathbb{1}\{score.diff > 0\}$.
- $foul.num_{ij}$ chronological foul index.
- $time.left_{ij}$ minutes remaining in half.
- Foul type indicators: offensive, personal, shooting (shooting reference?).
- Conferences: big10, acc (Big East reference).

Anderson & Pierce logistic (fixed effects only) from Table 4 col 1:
$$ \log\left(\frac{\pi_{ij}}{1-\pi_{ij}}\right) = \beta_0 + \beta_1 \text{foul.diff}_{ij} + \beta_2 \text{score.diff}_{ij} + \beta_3 lead.home_{ij} + \beta_4 big10_i + \beta_5 acc_i + \epsilon_{ij} $$
Units: logit dimensionless. Coefficients: $\hat\beta_1 = -0.118$ (SE 0.0153), $\hat\beta_2 = 0.009$ (0.006), $\hat\beta_3 = 0.252$ (0.096). [PAGE 7, TABLE 4 col 1]

GLMM (col 2):
$$ \text{logit}(\pi_{ijk}) = \mathbf{x}_{ijk}^\top \boldsymbol\beta + \varepsilon_i + \eta_{k(i)} + \nu_{m(i)} $$
where $i$=game, $k$=home team, $m$=visiting team. Random effects $\sim N(0, \sigma^2)$. Variances: Game 0.053, Visiting 0.042, Home 0.036. [PAGE 9, TABLE 5]. Coefficient $\hat\beta_1 = -0.182$ (SE 0.017). [PAGE 9-10]

Expanded 2004-05 (col 3):
$$ \text{logit}(\pi_{ijk}) = \dots + \beta_1 \text{foul.diff} + \beta_2 \text{score.diff} + \beta_3 lead.home + \beta_6 foul.num + \beta_7 (\text{foul.diff} \times \text{score.diff}) + \beta_8 (foul.num \times lead.home) + \dots $$
Coefficients: foul.diff -0.238 (0.019), score.diff 0.031 (0.008), lead.home 0.499 (0.136), interaction foul.diff*score.diff 0.007 (0.002), foul.num*lead.home -0.033 (0.013). [PAGE 10, TABLE 4]. Interpretation: at score.diff = -20 (home losing by 20), marginal effect of foul.diff is $-0.238 + 0.007(-20) = -0.378$? Wait sign: foul.diff is home minus visitor. If visiting team commits another foul, foul.diff decreases by 1 (more negative). The coefficient is negative, so a decrease in foul.diff (visitor fouling more) increases logit. Let's be precise: $\partial \text{logit} / \partial (\text{foul.diff}) = -0.238 + 0.007 \times \text{score.diff}$. If home losing by 20, score.diff = -20, derivative = -0.238 - 0.14 = -0.378. A one-unit decrease in foul.diff (visitor foul relative to home) changes logit by $+0.378$, multiplier $\exp(0.378) \approx 1.46$, i.e., 46% increase (paper says 45.1%). If home winning by 20, score.diff=+20, derivative = -0.238 + 0.14 = -0.098, decrease in foul.diff changes logit by +0.098, multiplier $\approx 1.10$ (10.8%). Tie: derivative -0.238, multiplier $\exp(0.238) \approx 1.268$ (26.8%). [PAGE 11]

Time effect: fouls on home team less likely as half progresses, especially when winning. Interaction foul.num * lead.home = -0.033. First foul vs 11th foul: paper says lead makes it 59.5% more likely at first foul, 15.2% at 11th. Let's verify roughly: lead.home coefficient 0.499 at foul.num maybe centered? Interaction -0.033 per foul. If foul.num is raw count, at foul 1 vs 11 difference 10 * -0.033 = -0.33. exp(0.499) = 1.647 (64.7%) maybe close to 59.5 depending centering. At foul 11: 0.499 - 10*0.033 = 0.169, exp=1.184 (18.4%). Paper says 59.5% and 15.2%. Perhaps foul.num centered or scaled. I'll cite paper's numbers directly. [PAGE 11]

2009-10 model (col 4):
$$ \text{logit}(\pi_{ijk}) = \dots + \beta_1 \text{foul.diff} + \beta_2 \text{score.diff} + \beta_3 lead.home + \beta_9 time.left + \beta_{10} offensive + \beta_{11} personal + \beta_{12} (\text{foul.diff} \times offensive) + \beta_{13} (\text{foul.diff} \times personal) + \beta_{14} (\text{foul.diff} \times time.left) + \beta_{15} (lead.home \times time.left) + \dots $$
Coefficients: foul.diff -0.172 (0.034), score.diff 0.034 (0.008), lead.home -0.150 (0.175), time.left -0.009 (0.008), offensive -0.081 (0.110), personal 0.067 (0.064), foul.diff*offensive -0.103 (0.053), foul.diff*personal -0.056 (0.032), foul.diff*time.left -0.009 (0.003), lead.home*time.left 0.026 (0.012). [PAGE 10, TABLE 4]. Random effects: Game 0.185, Visiting 0.043, Home 0.078. [PAGE 10, TABLE 5]. Time decay: effect of foul.diff decreases by 0.9% per extra minute? Paper says coefficient -0.009 on interaction, interpreted as 0.9% decrease per minute. At time.left=10 (midway), shooting foul odds increase 29.5% per visiting foul; at time.left=0, 18.7%. [PAGE 14]. Foul type at end of half: shooting 18.7%, personal 25.5%, offensive 31.7%. [PAGE 14]. Probabilities: tied score, visitor +5 fouls: shooting 64.7%, personal 72.2%, offensive 74.0% at end of half; midway shooting 72.3%. [PAGE 14].

Breakdown/singularity: Logistic model breaks down if perfect separation (e.g., a team never fouled in certain differential range). GLMM assumes random effects normal; with only 34-39 teams, variance estimates unstable. BLUP prediction intervals extremely large [PAGE 16-17]. Referee analysis underpowered: 47 referees, 88 games, three referees per game, no call-level attribution [PAGE 12-13]. Second-half exclusion creates left-censoring of end-of-game strategic fouling [PAGE 3]. Technical fouls excluded (n=26) [PAGE 5].

Units: logits are dimensionless; time in minutes; score in points; foul count dimensionless. Probabilities unitless [0,1]. Multiplicative effects are percent changes (dimensionless ratios minus 1).

**RETROCAUSAL_GENEALOGY**: Lineage: Fehr et al (2008) fairness in children; Wallace et al (2007) heritability; Greer (1983) crowd noise; Nevill & Holder (1999); Nevill et al (2002) crowd noise experimental; Moskowitz & Wertheim (2011) Scorecasting; Pedowitz (2008) Donaghy report; Plessner & Betsch (2001) sequential effects soccer penalties; Schwarz (2011) Bundesliga; Anderson & Pierce (2009) original NCAA foul differential; Price et al (2009) NBA discretionary turnovers/fouls dose-response. Multi-week traps: If a model assumes referee evening-out is constant across a season, it ignores within-half decay (time.left interaction) and score-state modulation (foul.diff*score.diff). Over a multi-week slate, early-game whistle disparities may predict later-game whistle disparities not because of team propensity but because of in-game correction. Teams flagged as foul-prone via BLUPs (DePaul, Virginia, Seton Hall, Indiana) have large intervals; betting on regression to mean based on season average is a trap because random effects are conditional modes with high uncertainty [PAGE 16]. Also, the 2004-05 vs 2009-10 comparison shows persistence but changing moderators: score interaction present in 2004-05, absent in 2009-10; time and foul type matter in 2009-10. A model trained on 2004-05 and applied to 2009-10 would mis-specify moderators. Multi-week trap: assuming stationarity across seasons.

**RECURSIVE_THEORY_OF_MIND**: Crisis habit regression: referees under pressure (crowd, close game, betting scandal context) regress to fairness-appearance heuristic: call foul on team with fewer prior fouls to restore balance. Counter-trap: a team can exploit this by strategically committing early fouls (especially discretionary/offensive? actually offensive fouls are by offense; but personal fouls on defense) to induce referee to call more fouls on opponent later. However, if trailing team commits intentional fouls in second half, excluded. In first half, trailing team might foul to stop clock? Not really in college first half. But visiting team accumulating fouls early may trigger home-team whistle later. Clock: effect strongest early in half (time.left interaction), decays as half ends. So a team wanting to benefit should create differential early, not late. Crisis habit regression: when game is close and late, referees might avoid even-out to not influence outcome? Actually paper finds effect decreases toward end of half; perhaps because end-of-half calls are more salient/scrutinized. Recursive ToM: referees anticipate that fans/players expect balance; players anticipate referees expect balance; teams may adjust aggression accordingly, creating a second-order bias where the team behind in fouls plays more physically knowing they are "due" a call, which then generates more fouls on them, etc. The model doesn't capture team strategy response. Need to discuss crisis habit regression vs counter-trap vs clock in this section.

**CROSS_LAYER_VETO_ADJUDICATION**: Physical/biomechanical/weather veto proof. Since this is indoor basketball, weather veto is null (climate-controlled arenas). Physical layer: court dimensions, hoop height, ball physics don't affect foul calling directly; however, physicality of play (defensive contact, charging/blocking biomechanics) determines foul incidence. Veto: any claim that referee bias explains foul differential must rule out team-level playing style (aggressiveness) as confounder. Random effects for team partially absorb this, but BLUP intervals large. Biomechanical layer: offensive fouls (charges) require judging defender position and offensive player trajectory—high subjectivity, strongest foul.diff interaction [PAGE 14]. Shooting fouls (contact in act of shooting) more objective, weakest interaction [PAGE 14]. This supports the "discretion" mechanism: where biomechanical judgment is ambiguous (charge vs block), foul-differential correction has more room to operate. Weather: indoor, no wind/precipitation/temperature effect on ball grip or referee vision; veto any weather-based explanation for NCAA indoor games. Arena crowd noise could affect referees (Nevill et al 2002), but model lacks crowd size/noise covariates; that's an omitted-variable veto, not a physical weather veto.

**RLVR_COUNTERFACTUAL_VETOES**: 3 verifiable veto scenarios + predictions. RLVR = Reinforcement Learning via Verifiable Rewards? Or just "verifiable counterfactual vetoes." I'll create three scenarios where the model's prediction can be falsified or vetoed.

Scenario 1: Score-state veto. Counterfactual: In 2009-10 data, the paper found no foul.diff * score.diff interaction. Veto: If in a held-out 2010-11 season a significant interaction reappears (home losing by 20 amplifies foul.diff effect beyond 2004-05 magnitude), then the 2009-10 null interaction is not a stable structural parameter but sample-specific. Prediction: held-out season shows interaction coefficient near zero for shooting fouls but positive for offensive fouls when home trailing by >15 points.

Scenario 2: Time-decay veto. Counterfactual: Model predicts foul.diff effect decays by 0.9% per minute (coefficient -0.009 on foul.diff*time.left). Veto: In a subset of games where referees are known to be rotated (e.g., same crew calls consecutive games), if the decay slope is not significantly different from zero in the first 5 minutes but strongly negative only in last 5 minutes, the linear time interaction is mis-specified. Prediction: piecewise model shows flat effect for first 8 minutes, then sharp drop after minute 8 of half.

Scenario 3: Foul-type discretion veto. Counterfactual: Offensive fouls show strongest differential effect (31.7%). Veto: If video review (post-hoc objective assessment) shows that offensive fouls called when visitor has +5 differential are no more likely to be incorrect than when home has +5 differential, then the evening-out effect is not driven by subjectivity but by actual differential in physical play. Prediction: review accuracy for offensive fouls does not vary with foul differential; any observed differential effect disappears when restricting to clear-cut contact (e.g., shooter clearly airborne).

Each needs verifiable prediction.

Word count: Need >=1000 total. I'll aim for ~1300-1500 words. THINK_TRACE ~500 words. Others ~200-250 each.

Must cite exact [PAGE N] markers. Use verbatim quotes where appropriate? Instruction says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I should include some verbatim quotes with page citations.

Let's gather exact page references:
- Page 1: Abstract, intro start.
- Page 2: Intro continued, Price et al 2009, three parts.
- Page 3: Data sources, 2004-05 dataset details, first halves only.
- Page 4: Exploratory, Table 1, Figure 1.
- Page 5: Table 2, Table 3, Figure 2 description.
- Page 6: Figure 2 image text.
- Page 7: Figure 3, 3.2.1 Original model, equation image text, foul.diff 12.5%.
- Page 8: Figure 4, 3.2.2 GLMM, Table 4 header.
- Page 9: Figure 5, Table 4 full, Table 5 full, GLMM structure.
- Page 10: GLMM results, 19.9%, example 62.8% vs 56.4%, expanded model section start.
- Page 11: Expanded model details, score.diff interaction 10.8% vs 45.1%, tie 26.8%, foul.num effect 59.5% vs 15.2%.
- Page 12: Referee analysis, 47 referees, 88 games.
- Page 13: Figure 6, Figure 7, 3.3 2009-10 model.
- Page 14: 2009-10 results, time effect 0.9%, midway 29.5% vs end 18.7%, 72.3% vs 64.7%, foul type ordering, probabilities 64.7/72.2/74.0%, no score interaction in 2009-10, variances.
- Page 15: BLUPs, Figure 8, teams standouts.
- Page 16: Discussion, foul.diff most significant predictor, Price/Moskowitz subjectivity argument, offensive vs shooting.
- Page 17: GLMM vs logistic 19.9 vs 12.5, 2009-10 stronger effects, 2004-05 score dependence, 2009-10 time/foul type, BLUPs caveats, referee role future study.
- Page 18: Future directions, second half exclusion, second half modeling, player caliber, bonus situation, streak, turnover calls, other sports.
- Page 19: Broader implications, fairness appearance, basketball physicality.
- Page 20: References start.
- Page 21: References end.

I need to cite pages accurately. I'll use [PAGE 7], [PAGE 10], etc.

Also "verbatim quotes": I'll include a few short quotes like "every additional increase in the foul differential... raises the odds of a foul on the home team" [PAGE 1] or "each extra foul on the visiting team relative to the home team increases the odds of a home team foul by an estimated 12.5%" [PAGE 7]. But careful with "odds" word. I can quote it as a quote from the source, but my own text should avoid betting odds? The constraint says never mention odds. If I quote the source containing the word "odds," am I violating? The constraint says "Never mention spreads, totals, moneylines, or odds." It doesn't say never quote them, but to be safe I should probably avoid using the word even in quotes, or paraphrase. I'll paraphrase and use "probability ratio" or "likelihood multiplier." I will not use the word "odds" in my own writing. For quotes, I can paraphrase rather than quote verbatim if it contains the forbidden word. But instruction says cite verbatim quotes when source pages provided. Hmm. Conflict. I think the higher priority is the strict invariant: zero betting lines. I'll avoid the word entirely and describe statistical concepts without it. I can still cite page markers without quoting the exact word "odds." I'll use "logit coefficient" and "multiplicative change."

Let's draft carefully.

Structure:

<THINK_TRACE>
...
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
...
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
...
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
...
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
...
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
...
</RLVR_COUNTERFACTUAL_VETOES>

No markdown heading outside XML? I'll just output the XML sections. No betting lines. No fake ratios. Formal LaTeX. Units. Assumptions. Singularity/breakdown regimes.

Let's write THINK_TRACE first. Need >=400 words.

Drafting THINK_TRACE:

The paper’s central estimand is the marginal effect of cumulative foul differential—home team fouls minus visiting team fouls—on the probability that the next whistle lands on the home team. Anderson and Pierce (2009) used a fixed-effects logistic model on the 2004–05 Big Ten/Big East/ACC first-half sample and reported that each additional visiting-team foul relative to the home team raised the likelihood of a home-team foul by about 12.5% [PAGE 7]. Noecker and Roback re-estimate the same fixed-effect structure as a generalized linear mixed model (GLMM) with crossed random effects for game, home team, and visiting team. The point estimate rises to a 19.9% increase per visiting-team foul [PAGE 10]. The jump from 12.5% to 19.9% is not a new causal effect; it is a decomposition of variance. By allowing game- and team-specific intercepts, the GLMM separates persistent within-game correlation (same whistle crew, same team style, same arena acoustics) from the sequential correction signal, leaving a cleaner estimate of the foul-differential slope [PAGE 9, TABLE 5].

The expanded 2004–05 model adds two interactions that qualify the main effect. First, foul.diff × score.diff: as the home team’s lead grows, the evening-out response to a visiting foul weakens. At a 20-point home lead the per-foul multiplier collapses to roughly 10.8%; at a 20-point home deficit it balloons to roughly 45.1%; in a tie game it sits near 26.8% [PAGE 11]. This means the referee correction is state-dependent: it is strongest when the home team is trailing and most in need of keeping the game close, and weakest when the home team is comfortably ahead. Second, foul.num × lead.home: the home-lead advantage in receiving the next whistle decays as the half progresses. A home lead makes a home-team foul about 59.5% more likely on the first foul of the half but only about 15.2% more likely by the 11th foul [PAGE 11]. The 2009–10 replication confirms persistence of the main foul-differential effect but drops the score-differential interaction and instead finds a significant foul.diff × time.left term: the correction weakens by about 0.9% per minute remaining in the half [PAGE 14]. It also finds a foul-type gradient consistent with Price et al. (2009): offensive fouls, the most discretionary, show the largest foul-differential response (31.7%), personal fouls intermediate (25.5%), and shooting fouls, the most objective, the smallest (18.7%) [PAGE 14].

Gray-zone audit: (1) The data are censored to first halves only to avoid end-of-game intentional fouling; this trades ecological validity for internal validity and may truncate the very late-game correction behavior the theory predicts [PAGE 3]. (2) Referee-level analysis is underpowered because the data record the three-person crew, not the individual official who made each call; with 47 referees across 88 Big Ten games, the referee × foul.diff interaction is not statistically significant even though Figure 6 shows wide heterogeneity in point estimates [PAGE 12-13]. (3) BLUP team effects for 2009–10 identify DePaul, Virginia, Seton Hall, and Indiana as foul-prone, but the paper explicitly notes the prediction intervals are extremely large [PAGE 15-16]. (4) The model does not observe team-level aggression directly; team random effects absorb some of it, but a team that plays physically and a referee who corrects for foul differential are observationally confounded unless style is measured independently [PAGE 16]. (5) Technical fouls (n=26) are dropped, which is defensible but removes a rare, highly subjective category [PAGE 5]. A multi-week trap is to treat the 19.9% or 18.7% coefficients as season-stationary parameters; the 2004–05 versus 2009–10 comparison shows the moderator set changes (score interaction present in the earlier season, time/foul-type interaction in the later), so a model trained on one season and applied to another will mis-specify the correction surface [PAGE 10, PAGE 14].

Word count check: roughly 400+ words. Good.

Now SOURCE_OPERATORS_AND_EQUATIONS. Need formal LaTeX, units, citations, breakdown, singularity/breakdown.

Define notation:
- $i \in \{1,\dots,N_g\}$ game index; $j$ foul index within game; $t_{ij}$ time remaining.
- $F^H_{i}(t), F^V_{i}(t)$ cumulative foul counts. $\Delta F_{ij} = F^H_i(t_{ij}) - F^V_i(t_{ij})$ (dimensionless count).
- $\Delta S_{ij} = S^H_i(t_{ij}) - S^V_i(t_{ij})$ (points).
- $L_{ij} = \mathbb{1}\{\Delta S_{ij} > 0\}$.
- $n_{ij}$ chronological foul number (dimensionless).
- $\tau_{ij}$ minutes left in half (minutes).
- $T^{off}_{ij}, T^{per}_{ij}$ indicators for offensive/personal foul; shooting is reference.
- $\pi_{ij} = P(Y_{ij}=1 | \mathcal{F}_{ij})$ where $Y_{ij}=1$ if foul $j$ in game $i$ is on home team.

Model 1 (Anderson & Pierce fixed effects):
$$ \operatorname{logit}(\pi_{ij}) = \beta_0 + \beta_1 \Delta F_{ij} + \beta_2 \Delta S_{ij} + \beta_3 L_{ij} + \beta_4 \mathbb{1}\{\text{Big Ten}\} + \beta_5 \mathbb{1}\{\text{ACC}\} + \epsilon_{ij} $$
$\hat\beta_1=-0.118$ (SE 0.0153), $\hat\beta_2=0.009$ (0.006), $\hat\beta_3=0.252$ (0.096). [PAGE 7, TABLE 4 col 1]

Assumptions: independent foul calls conditional on covariates; linear logit in $\Delta F$; no overdispersion; correct conference reference (Big East). Breakdown: complete separation if any $\Delta F$ stratum has all home or all visiting fouls; small counts in tails of $\Delta F$ distribution are dropped (5-or-fewer rule in loess plots) [PAGE 4-5].

Model 2 (GLMM):
$$ \operatorname{logit}(\pi_{ijk}) = \mathbf{x}_{ijk}^\top \boldsymbol\beta + \varepsilon_i + \eta_{k(i)} + \nu_{m(i)} $$
$\varepsilon_i \sim N(0,\sigma^2_G)$, $\eta_k \sim N(0,\sigma^2_H)$, $\nu_m \sim N(0,\sigma^2_V)$, all independent. [PAGE 9]
Original-as-GLMM variances: Game 0.053, Visiting 0.042, Home 0.036 [PAGE 9, TABLE 5]. $\hat\beta_1=-0.182$ (SE 0.017) [PAGE 9-10]. AIC drops from 5641 to 5632 [PAGE 10].

Model 3 (Expanded 2004-05):
$$ \operatorname{logit}(\pi_{ijk}) = \dots + \beta_1 \Delta F + \beta_2 \Delta S + \beta_3 L + \beta_6 n + \beta_7(\Delta F \times \Delta S) + \beta_8(n \times L) + \varepsilon_i+\eta_k+\nu_m $$
Coefficients: $\Delta F$ -0.238 (0.019), $\Delta S$ 0.031 (0.008), $L$ 0.499 (0.136), $\Delta F \times \Delta S$ 0.007 (0.002), $n \times L$ -0.033 (0.013) [PAGE 10, TABLE 4 col 3].
Marginal $\Delta F$ slope: $\partial \operatorname{logit}/\partial \Delta F = -0.238 + 0.007\Delta S$. At $\Delta S=-20$: -0.378 → per-visiting-foul multiplier $\exp(0.378) \approx 1.45$ (paper reports 45.1%); at $\Delta S=+20$: -0.098 → $\exp(0.098) \approx 1.10$ (10.8%); at $\Delta S=0$: -0.238 → $\exp(0.238) \approx 1.27$ (26.8%) [PAGE 11].

Model 4 (2009-10):
$$ \operatorname{logit}(\pi_{ijk}) = \dots + \beta_1 \Delta F + \beta_2 \Delta S + \beta_3 L + \beta_9 \tau + \beta_{10}T^{off} + \beta_{11}T^{per} + \beta_{12}(\Delta F \times T^{off}) + \beta_{13}(\Delta F \times T^{per}) + \beta_{14}(\Delta F \times \tau) + \beta_{15}(L \times \tau) + \varepsilon_i+\eta_k+\nu_m $$
Coefficients: $\Delta F$ -0.172 (0.034), $\Delta S$ 0.034 (0.008), $L$ -0.150 (0.175), $\tau$ -0.009 (0.008), $T^{off}$ -0.081 (0.110), $T^{per}$ 0.067 (0.064), $\Delta F \times T^{off}$ -0.103 (0.053), $\Delta F \times T^{per}$ -0.056 (0.032), $\Delta F \times \tau$ -0.009 (0.003), $L \times \tau$ 0.026 (0.012) [PAGE 10, TABLE 4 col 4].
Variances: Game 0.185, Visiting 0.043, Home 0.078 [PAGE 10, TABLE 5].
Time decay: effect of one additional visiting foul on home-team whistle probability is strongest early and decays by 0.9% per minute (coefficient -0.009 on interaction). Midway ($\tau=10$): shooting-foul response 29.5%; end ($\tau=0$): 18.7% [PAGE 14]. Foul-type at end of half: shooting 18.7%, personal 25.5%, offensive 31.7% [PAGE 14].

Singularity: random-effects variance near zero collapses GLMM to fixed-effects logistic; with only 34–39 teams, $\sigma^2_H,\sigma^2_V$ estimates are noisy and BLUP intervals are wide [PAGE 15-16]. Logistic model fails under separation; GLMM fails under non-normal random effects or insufficient group count.

Units: logits dimensionless; $\Delta F$ count; $\Delta S$ points; $\tau$ minutes; probabilities unitless. All effects are conditional on first-half play and Big Ten/Big East/ACC regular-season plus NCAA tournament games [PAGE 3].

Need to avoid "odds" word. I used "multiplier" and "likelihood" and "probability." Good. I used "probability ratio" implicitly. I won't use "odds."

RETROCAUSAL_GENEALOGY:

Lineage starts with evolved-fairness literature: Fehr et al. (2008) on egalitarianism in young children and Wallace et al. (2007) on ultimatum-game heritability, cited in the introduction to argue fairness preference is genetic but the *appearance* of fairness may be more functionally important for group peace [PAGE 1-2]. This psychological layer is instantiated in sports officiating by Greer (1983) and Nevill & Holder (1999), who attribute home advantage to crowd influence on officials rather than team performance, and Nevill et al. (2002), who show crowd noise alters videotaped foul judgments [PAGE 2]. Moskowitz & Wertheim (2011) generalize this across baseball, football, soccer, and basketball, noting that bias diminishes under external monitoring (QuesTec, instant replay), implying conscious or subconscious impression management [PAGE 2]. The Pedowitz (2008) NBA referee-scandal report explicitly describes referees maintaining awareness of substantial imbalances in foul calls against teams, directly motivating the even-out hypothesis [PAGE 2]. Sequential-decision precursors include Plessner & Betsch (2001) on soccer penalty kicks and Schwarz (2011) on Bundesliga penalties, showing previous calls influence current ones [PAGE 2]. Anderson & Pierce (2009) transport this to NCAA foul differentials; Price et al. (2009) extend it to the NBA with a discretion dose-response (discretionary vs. nondiscretionary turnovers and fouls) [PAGE 2-3].

Multi-week traps: The 2004–05 and 2009–10 samples are five years apart and show non-stationary moderators. The score-differential interaction exists in 2004–05 but disappears in 2009–10, while time-left and foul-type interactions emerge only in the later season [PAGE 10, PAGE 14]. Treating the foul-differential coefficient as a fixed season-long parameter is therefore a multi-week specification trap. A second trap is BLUP-based team ranking: DePaul, Virginia, Seton Hall, and Indiana appear most foul-prone in 2009–10, yet their prediction intervals are extremely large, so regressing team foul propensity to the season mean over a multi-week slate overstates confidence [PAGE 15-16]. A third trap is crew-level inference: because call-level referee identity is unobserved, one cannot distinguish a stable referee bias from a game-level or matchup-level artifact; over multiple weeks, a “referee effect” may actually be a schedule-evening artifact [PAGE 12-13].

RECURSIVE_THEORY_OF_MIND:

Crisis habit regression: referees under crowd pressure and scandal salience (Donaghy/Pedowitz context) regress from call-by-call accuracy to an appearance-of-fairness heuristic: whistle the team with fewer cumulative fouls to restore symbolic balance [PAGE 1-2]. This is a first-order theory of mind: the referee models fans and players as expecting balanced foul counts and acts to satisfy that expectation. Counter-trap: a coaching or player strategy that anticipates this heuristic can invert the incentive. If the visiting team intentionally accrues early fouls—particularly discretionary personal fouls—the model predicts an elevated probability of subsequent home-team whistles [PAGE 11, PAGE 14], which the visiting team can exploit only if the home team cannot adjust its physicality in response. In practice, the team trailing in fouls may play more physically because it expects corrective whistles, generating more fouls on itself and creating a self-fulfilling cycle that the differential-only model cannot untangle from true style differences [PAGE 16]. Clock structure moderates the recursion: the correction is strongest at the opening of the half and decays toward halftime (foul.diff × time.left = -0.009 per minute), so any strategic exploitation must frontload the differential in the first minutes of the half rather than late [PAGE 14]. The lead interaction adds a second clock layer: when the home team leads, the correction weakens as foul number increases (foul.num × lead.home = -0.033), meaning a leading home team’s whistle protection erodes over the half, while a trailing home team faces amplified correction when behind by 20 points (45.1% per visiting foul versus 10.8% when leading by 20) [PAGE 11]. A recursive model would therefore need team aggression, referee expectation, and score-state as simultaneous equations; the current GLMM estimates only the reduced-form foul-differential slope.

CROSS_LAYER_VETO_ADJUDICATION:

Physical layer: games are indoors; temperature, wind, and precipitation are controlled, so weather-based vetoes (e.g., ball grip, referee vision impairment) are null for NCAA basketball [PAGE 3]. Court geometry and rim height are constant, so they cannot explain differential foul calling. Biomechanical layer: foul incidence is generated by player contact. Offensive fouls require judging whether the defender established legal guarding position and whether the offensive player initiated illegal contact—a high-ambiguity biomechanical judgment—whereas shooting fouls involve contact in the act of shooting and are more visually salient [PAGE 2, PAGE 14]. The model’s finding that the foul-differential effect is largest for offensive fouls (31.7%), smaller for personal (25.5%), and smallest for shooting fouls (18.7%) is consistent with a discretion mechanism: where biomechanical judgment is ambiguous, corrective calling has more operating room [PAGE 14]. Veto: any explanation that attributes the entire foul-differential effect to team playing style must account for why the effect scales with referee subjectivity rather than purely with contact volume. Statistical layer: team random effects absorb persistent style differences, but BLUP intervals are extremely large (DePaul, Virginia, Seton Hall, Indiana flagged as foul-prone) [PAGE 15-16], so a team-style veto is only partial; the model cannot fully separate physical aggression from referee correction without independent contact tracking. Omitted-variable veto: crowd size, partisan density, and proximity to court are known moderators of referee bias in soccer (Buraimo et al. 2010; Dohmen 2008) but are absent from the NCAA model [PAGE 18]. Weather veto is not applicable; crowd/acoustics veto is pending data.

RLVR_COUNTERFACTUAL_VETOES:

Scenario 1 (Score-state specification veto). Counterfactual: hold out the 2010–11 season from the same conferences. Fit the 2009–10 model (no foul.diff × score.diff interaction). Prediction: if a held-out season shows a significant positive foul.diff × score.diff interaction—specifically, that when the home team trails by 15+ points the visiting-foul multiplier exceeds the tie-game multiplier by more than 10 percentage points—then the 2009–10 null interaction is a sample artifact, not a stable structural parameter. Veto condition: the interaction term’s 95% interval excludes zero in the held-out season.

Scenario 2 (Time-decay functional-form veto). Counterfactual: within the 2009–10 first-half data, split games into early (first 8 minutes) and late (last 8 minutes) subsets. The linear model predicts a constant decay rate of 0.9% per minute across the entire half (coefficient -0.009 on foul.diff × time.left) [PAGE 14]. Prediction: if the early-subset foul.diff coefficient is statistically indistinguishable from the late-subset coefficient, the linear time interaction is mis-specified; the true process is likely a step function or threshold near the media-timeout structure rather than a smooth decay. Veto condition: likelihood-ratio test favors a piecewise model with a breakpoint at minute 8 over the linear interaction (p < 0.05).

Scenario 3 (Discretion/objectivity veto via video review). Counterfactual: obtain video review classifications for a random sample of offensive fouls called in 2009–10, coded as “clear” versus “ambiguous” contact. The discretion hypothesis predicts the foul.differential effect should be concentrated in ambiguous calls [PAGE 14]. Prediction: if video review shows no difference in review-reversal rates between ambiguous offensive fouls called when the visitor leads in fouls versus when the home team leads, then the differential effect reflects actual contact differences, not corrective subjectivity. Veto condition: reversal rates are equal across differential strata (difference < 2 percentage points, p > 0.10).

Need to make sure total words >= 1000. Let's estimate: THINK_TRACE ~430. SOURCE_OPERATORS ~500. RETRO ~250. RECURSIVE ~250. CROSS ~250. RLVR ~250. Total ~1930. Good.

Check no betting lines. I did not use spreads, totals, moneylines, or odds. I used "multiplier," "probability ratio," "likelihood." Wait I used "multiplier" which is fine. I avoided "odds." Did I say "likelihood multiplier"? Yes, fine.

Citations: I used [PAGE N] format. Good.

LaTeX: included.

Verbatim quotes: I didn't include verbatim quotes because they'd contain "odds" maybe. But I can include short quotes without the forbidden word. Let's add a couple to satisfy instruction. For example: "the probability of the next foul being called on the visiting team can reach as high as 0.70" [PAGE 2]. That doesn't contain odds. Also "fairness is an evolved genetic trait" [PAGE 1]. I'll weave them in.

Let's add to THINK_TRACE or RETRO a verbatim quote.

In RETROCAUSAL_GENEALOGY: The introduction states that fairness may be "an evolved genetic trait" [PAGE 1] and that officials face pressure to create "an appearance of fairness" [PAGE 1]. Anderson and Pierce found that "the probability of the next foul being called on the visiting team can reach as high as 0.70" [PAGE 2]. These are verbatim.

I should ensure no fake ratios. I computed exp(0.378) approx 1.45, etc. These are derivations, not fake ratios. Fine.

Check singularity/breakdown regimes: included.

Now I'll assemble final output. Only XML sections. No extra text.

Double-check page numbers against source text. The text shows page numbers at top/bottom: 1,2,3...21. I cited PAGE 1,2,3,4,5,7,9,10,11,12,13,14,15,16,18. Those seem consistent with the provided text. PAGE 8 has Table 4 header and GLMM section start but I cited PAGE 9 for table values, which is fine because Table 4 spans 8-9 but the coefficients are shown on page 10? Actually the text shows Table 4 on page 10? Let's see: page 8 ends with Table 4 header and variable names. Page 9 shows the full Table 4 rows and Table 5. Page 10 shows text. Actually the provided text:
- Page 8: ends with "Table 4: Model coefficients..." header and first rows? Let's look. Page 8 text: "...Table 4: Model coefficients and standard errors for models of 2004-05 fouls and 2009-10 fouls, with standard errors in parentheses and significance indicated with asterisks." Then the table rows seem to start on page 9? Wait page 9 text shows the table rows: "Intercept -0.332..." etc. And Table 5. Then page 10 text discusses GLMM results. So coefficients are on page 9. I cited PAGE 9 and PAGE 10. Good.

Page 7 has original model discussion and 12.5%. Page 11 has expanded model interpretation 10.8/45.1/26.8 and 59.5/15.2. Page 14 has 2009-10 results and time decay. Page 15 has BLUPs and Figure 8. Page 16 has discussion of standouts. Page 18 has future directions and omitted variables. Good.

I will not mention page numbers that don't exist.

One more check: The invariant says "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." I won't.

Let's write final.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s central estimand is the marginal effect of cumulative foul differential—home team fouls minus visiting team fouls—on the probability that the next whistle lands on the home team. Anderson and Pierce (2009) used a fixed-effects logistic model on the 2004–05 Big Ten/Big East/ACC first-half sample and reported that each additional visiting-team foul relative to the home team raised the likelihood of a home-team foul by about 12.5% [PAGE 7]. Noecker and Roback re-estimate the same fixed-effect structure as a generalized linear mixed model (GLMM) with crossed random effects for game, home team, and visiting team. The point estimate rises to a 19.9% increase per visiting-team foul [PAGE 10]. The jump from 12.5% to 19.9% is not a new causal effect; it is a variance decomposition. By allowing game- and team-specific intercepts, the GLMM separates persistent within-game correlation (same whistle crew, same team style, same arena acoustics) from the sequential correction signal, leaving a cleaner estimate of the foul-differential slope [PAGE 9, TABLE 5].

The expanded 2004–05 model adds two interactions that qualify the main effect. First, foul.diff × score.diff: as the home team’s lead grows, the evening-out response to a visiting foul weakens. At a 20-point home lead the per-foul multiplier collapses to roughly 10.8%; at a 20-point home deficit it balloons to roughly 45.1%; in a tie game it sits near 26.8% [PAGE 11]. This means the referee correction is state-dependent: strongest when the home team is trailing and most in need of keeping the game close, weakest when the home team is comfortably ahead. Second, foul.num × lead.home: the home-lead advantage in receiving the next whistle decays as the half progresses. A home lead makes a home-team foul about 59.5% more likely on the first foul of the half but only about 15.2% more likely by the 11th foul [PAGE 11]. The 2009–10 replication confirms persistence of the main foul-differential effect but drops the score-differential interaction and instead finds a significant foul.diff × time.left term: the correction weakens by about 0.9% per minute remaining in the half [PAGE 14]. It also finds a foul-type gradient consistent with Price et al. (2009): offensive fouls, the most discretionary, show the largest foul-differential response (31.7%), personal fouls intermediate (25.5%), and shooting fouls, the most objective, the smallest (18.7%) [PAGE 14].

Gray-zone audit: (1) The data are censored to first halves only to avoid end-of-game intentional fouling; this trades ecological validity for internal validity and may truncate the very late-game correction behavior the theory predicts [PAGE 3]. (2) Referee-level analysis is underpowered because the data record the three-person crew, not the individual official who made each call; with 47 referees across 88 Big Ten games, the referee × foul.diff interaction is not statistically significant even though Figure 6 shows wide heterogeneity in point estimates [PAGE 12–13]. (3) BLUP team effects for 2009–10 identify DePaul, Virginia, Seton Hall, and Indiana as foul-prone, but the paper explicitly notes the prediction intervals are extremely large [PAGE 15–16]. (4) The model does not observe team-level aggression directly; team random effects absorb some of it, but a team that plays physically and a referee who corrects for foul differential are observationally confounded unless style is measured independently [PAGE 16]. (5) Technical fouls (n=26) are dropped, which is defensible but removes a rare, highly subjective category [PAGE 5]. A multi-week trap is to treat the 19.9% or 18.7% coefficients as season-stationary parameters; the 2004–05 versus 2009–10 comparison shows the moderator set changes (score interaction present in the earlier season, time/foul-type interaction in the later), so a model trained on one season and applied to another will mis-specify the correction surface [PAGE 10, PAGE 14].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(i\in\{1,\dots,N_g\}\) index games, \(j\) index fouls within a game, and \(t_{ij}\) denote minutes left in the first half. Define cumulative foul counts \(F^H_i(t)\), \(F^V_i(t)\) and scores \(S^H_i(t)\), \(S^V_i(t)\). The key covariate is foul differential \(\Delta F_{ij}=F^H_i(t_{ij})-F^V_i(t_{ij})\) (dimensionless count, home minus visitor). Score differential \(\Delta S_{ij}=S^H_i(t_{ij})-S^V_i(t_{ij})\) is measured in points. Lead indicator \(L_{ij}=\mathbb{1}\{\Delta S_{ij}>0\}\). Chronological foul number \(n_{ij}\) is dimensionless. Foul-type indicators \(T^{off}_{ij}\) and \(T^{per}_{ij}\) mark offensive and personal fouls; shooting fouls are the reference category. The binary response is \(Y_{ij}=1\) if foul \(j\) in game \(i\) is whistled on the home team, with \(\pi_{ij}=P(Y_{ij}=1\mid\mathcal{F}_{ij})\).

Anderson–Pierce fixed-effects logistic model [PAGE 7, TABLE 4 col. 1]:
\[
\operatorname{logit}(\pi_{ij})=\beta_0+\beta_1\Delta F_{ij}+\beta_2\Delta S_{ij}+\beta_3L_{ij}+\beta_4\mathbb{1}\{\text{Big Ten}\}+\beta_5\mathbb{1}\{\text{ACC}\}+\epsilon_{ij}.
\]
Estimates: \(\hat\beta_1=-0.118\) (SE 0.0153), \(\hat\beta_2=0.009\) (SE 0.006), \(\hat\beta_3=0.252\) (SE 0.096). Assumptions: conditionally independent foul calls, linear logit in \(\Delta F\), no overdispersion, Big East as conference reference. Breakdown: complete separation if any \(\Delta F\) stratum contains only home or only visiting fouls; sparse tails of the \(\Delta F\) distribution are excluded from graphical smoothing (5-or-fewer rule) [PAGE 4–5].

GLMM restatement [PAGE 9]:
\[
\operatorname{logit}(\pi_{ijk})=\mathbf{x}_{ijk}^{\top}\boldsymbol{\beta}+\varepsilon_i+\eta_{k(i)}+\nu_{m(i)},
\]
with \(\varepsilon_i\sim N(0,\sigma_G^2)\) for game \(i\), \(\eta_k\sim N(0,\sigma_H^2)\) for home team \(k\), \(\nu_m\sim N(0,\sigma_V^2)\) for visiting team \(m\), all independent. Original-as-GLMM variances: game 0.053, visiting team 0.042, home team 0.036 [PAGE 9, TABLE 5]. The foul-differential coefficient becomes \(\hat\beta_1=-0.182\) (SE 0.017); AIC improves from 5641 to 5632 [PAGE 10].

Expanded 2004–05 model [PAGE 10, TABLE 4 col. 3]:
\[
\operatorname{logit}(\pi_{ijk})=\cdots+\beta_1\Delta F+\beta_2\Delta S+\beta_3L+\beta_6 n+\beta_7(\Delta F\times\Delta S)+\beta_8(n\times L)+\varepsilon_i+\eta_k+\nu_m.
\]
Estimates: \(\Delta F=-0.238\) (0.019), \(\Delta S=0.031\) (0.008), \(L=0.499\) (0.136), \(\Delta F\times\Delta S=0.007\) (0.002), \(n\times L=-0.033\) (0.013). Marginal foul-differential slope: \(\partial\operatorname{logit}/\partial\Delta F=-0.238+0.007\Delta S\). At \(\Delta S=-20\): slope \(-0.378\), per-visiting-foul multiplier \(\exp(0.378)\approx1.45\) (paper: 45.1%); at \(\Delta S=+20\): slope \(-0.098\), multiplier \(\approx1.10\) (10.8%); at \(\Delta S=0\): slope \(-0.238\), multiplier \(\approx1.27\) (26.8%) [PAGE 11]. Home-lead decay: first foul multiplier \(\exp(0.499)\approx1.65\) (paper frames as 59.5%); by the 11th foul the lead effect is attenuated by \(10\times0.033=0.33\) on the logit scale (paper: 15.2%) [PAGE 11].

2009–10 model [PAGE 10, TABLE 4 col. 4]:
\[
\operatorname{logit}(\pi_{ijk})=\cdots+\beta_1\Delta F+\beta_2\Delta S+\beta_3L+\beta_9\tau+\beta_{10}T^{off}+\beta_{11}T^{per}
+\beta_{12}(\Delta F\times T^{off})+\beta_{13}(\Delta F\times T^{per})+\beta_{14}(\Delta F\times\tau)+\beta_{15}(L\times\tau)+\varepsilon_i+\eta_k+\nu_m,
\]
where \(\tau\) is minutes left in the half. Estimates: \(\Delta F=-0.172\) (0.034), \(\Delta S=0.034\) (0.008), \(L=-0.150\) (0.175), \(\tau=-0.009\) (0.008), \(T^{off}=-0.081\) (0.110), \(T^{per}=0.067\) (0.064), \(\Delta F\times T^{off}=-0.103\) (0.053), \(\Delta F\times T^{per}=-0.056\) (0.032), \(\Delta F\times\tau=-0.009\) (0.003), \(L\times\tau=0.026\) (0.012). Random-effect variances: game 0.185, visiting team 0.043, home team 0.078 [PAGE 10, TABLE 5]. Time decay: effect weakens by 0.9% per minute; at \(\tau=10\) the shooting-foul response is 29.5% per visiting foul, falling to 18.7% at \(\tau=0\) [PAGE 14]. Foul-type ordering at end of half: shooting 18.7%, personal 25.5%, offensive 31.7% [PAGE 14]. Conditional probabilities cited: tied score, visitor +5 fouls, end of half yields home-team foul probabilities of 64.7% (shooting), 72.2% (personal), 74.0% (offensive); midway through the half the shooting-foul case is 72.3% [PAGE 14].

Units: logits are dimensionless; \(\Delta F\) is a count; \(\Delta S\) is points; \(\tau\) is minutes; all probabilities are unitless in [0,1]. Inference is restricted to first halves of Big Ten, Big East, and ACC regular-season games plus NCAA tournament games [PAGE 3]. Singularity regimes: GLMM collapses to fixed-effects logistic if \(\sigma_G^2,\sigma_H^2,\sigma_V^2\to0\); with only 34–39 teams the BLUP intervals are extremely wide and rank-ordering teams by foul propensity is unstable [PAGE 15–16]. Logistic fixed-effects estimation fails under separation; GLMM inference is fragile if random effects are non-normal or group counts are insufficient.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage begins with evolutionary and developmental psychology: Fehr et al. (2008) and Wallace et al. (2007) are cited for the claim that fairness is "an evolved genetic trait," while the introduction immediately qualifies this by arguing that "creating an appearance of fairness is more highly valued than actually behaving fairly" [PAGE 1]. This psychological layer is transplanted to sports officiating by Greer (1983) and Nevill and Holder (1999), who locate home advantage in crowd influence on officials rather than team performance, and by Nevill et al. (2002), who show crowd noise alters videotaped foul judgments [PAGE 2]. Moskowitz and Wertheim (2011) generalize the pattern across baseball, football, soccer, and basketball, noting that bias diminishes under external monitoring such as QuesTec and instant replay, which implies conscious or subconscious impression management [PAGE 2]. The Pedowitz (2008) NBA referee-scandal report supplies the closest organizational precedent: referees reportedly maintained "an awareness of substantial imbalances in foul calls against teams" and called approximately equal fouls on each side to appear objective [PAGE 2]. Sequential-decision precursors include Plessner and Betsch (2001) on soccer penalty kicks and Schwarz (2011) on Bundesliga penalties, demonstrating that previous calls influence current ones [PAGE 2]. Anderson and Pierce (2009) transport this to NCAA foul differentials, finding that "the probability of the next foul being called on the visiting team can reach as high as 0.70" [PAGE 2]. Price et al. (2009) extend the logic to the NBA with a discretion dose-response: discretionary turnovers and discretionary fouls (e.g., offensive) show stronger sequential dependence than nondiscretionary categories [PAGE 2–3].

Multi-week traps follow from non-stationarity across the two samples. The 2004–05 model contains a significant foul.diff × score.diff interaction; the 2009–10 model does not, replacing it with foul.diff × time.left and foul-type interactions [PAGE 10, PAGE 14]. Treating the foul-differential coefficient as a fixed season-long parameter is therefore a multi-week specification trap: a model trained on 2004–05 and deployed on 2009–10 would omit time decay and foul-type moderation while retaining a spurious score interaction. A second trap is BLUP-based team ranking: DePaul, Virginia, Seton Hall, and Indiana are flagged as most foul-prone in 2009–10, yet their prediction intervals are extremely large, so regressing team foul propensity to the season mean over a multi-week slate overstates confidence [PAGE 15–16]. A third trap is crew-level inference: because call-level referee identity is unobserved and only the three-person crew is recorded, one cannot distinguish a stable referee bias from a game-level or matchup-level artifact; over multiple weeks, an apparent "referee effect" may be a schedule-evening artifact [PAGE 12–13].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes referees retreating from call-by-call accuracy to an appearance-of-fairness heuristic under crowd pressure and scandal salience: whistle the team with fewer cumulative fouls to restore symbolic balance [PAGE 1–2]. This is a first-order theory of mind—the referee models fans and players as expecting balanced foul counts and acts to satisfy that expectation. The counter-trap is strategic exploitation: if a visiting team intentionally accrues early fouls, the model predicts an elevated probability of subsequent home-team whistles [PAGE 11, PAGE 14], which the visiting team can exploit only if the home team cannot adjust its physicality in response. In practice, the team trailing in fouls may play more physically because it expects corrective whistles, generating more fouls on itself and creating a self-fulfilling cycle that the differential-only model cannot untangle from true style differences [PAGE 16]. Clock structure moderates the recursion: the correction is strongest at the opening of the half and decays toward halftime (foul.diff × time.left = -0.009 per minute), so any strategic exploitation must frontload the differential in the first minutes of the half rather than late [PAGE 14]. A second clock layer enters through the lead interaction: when the home team leads, its whistle protection erodes as foul number increases (foul.num × lead.home = -0.033), while a trailing home team faces amplified correction when behind by 20 points (45.1% per visiting foul versus 10.8% when leading by 20) [PAGE 11]. A fully recursive model would need team aggression, referee expectation, and score-state as simultaneous equations; the current GLMM estimates only the reduced-form foul-differential slope and cannot identify whether teams are responding to anticipated referee correction.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: games are indoors, so temperature, wind, and precipitation are controlled; weather-based vetoes (ball grip, referee vision impairment) are null for NCAA basketball [PAGE 3]. Court geometry and rim height are constant and cannot generate differential foul calling. Biomechanical layer: foul incidence is generated by player contact. Offensive fouls require judging whether the defender established legal guarding position and whether the offensive player initiated illegal contact—a high-ambiguity biomechanical judgment—whereas shooting fouls involve contact in the act of shooting and are more visually salient [PAGE 2, PAGE 14]. The observed foul-type gradient—offensive 31.7%, personal 25.5%, shooting 18.7%—is consistent with a discretion mechanism: where biomechanical judgment is ambiguous, corrective calling has more operating room [PAGE 14]. Veto: any explanation that attributes the entire foul-differential effect to team playing style must account for why the effect scales with referee subjectivity rather than purely with contact volume. Statistical layer: team random effects absorb persistent style differences, but BLUP intervals are extremely large (DePaul, Virginia, Seton Hall, Indiana flagged as foul-prone) [PAGE 15–16], so a team-style veto is only partial; the model cannot fully separate physical aggression from referee correction without independent contact tracking. Omitted-variable veto: crowd size, partisan density, and proximity to court are known moderators of referee bias in soccer (Buraimo et al. 2010; Dohmen 2008) but are absent from the NCAA model [PAGE 18]. Weather veto: not applicable. Crowd/acoustics veto: pending data, because the model includes conference indicators but no arena noise or attendance covariates.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 (Score-state specification veto). Counterfactual: hold out the 2010–11 season from the same conferences and fit the 2009–10 model, which imposes no foul.diff × score.diff interaction. Prediction: if the held-out season shows a significant positive interaction—specifically, that when the home team trails by 15 or more points the visiting-foul multiplier exceeds the tie-game multiplier by more than 10 percentage points—then the 2009–10 null interaction is a sample artifact, not a stable structural parameter. Veto condition: the held-out interaction term’s interval excludes zero.

Scenario 2 (Time-decay functional-form veto). Counterfactual: within 2009–10 first-half data, split games into early (first 8 minutes) and late (last 8 minutes) subsets. The linear model predicts a constant decay rate of 0.9% per minute across the entire half (coefficient -0.009 on foul.diff × time.left) [PAGE 14]. Prediction: if the early-subset foul.diff coefficient is statistically indistinguishable from the late-subset coefficient, the linear time interaction is mis-specified; the true process is likely a step function or threshold near media-timeout structure rather than a smooth decay. Veto condition: a likelihood-ratio test favors a piecewise model with a breakpoint at minute 8 over the linear interaction (p < 0.05).

Scenario 3 (Discretion/objectivity veto via video review). Counterfactual: obtain video-review classifications for a random sample of 2009–10 offensive fouls, coded as clear versus ambiguous contact. The discretion hypothesis predicts the foul-differential effect should concentrate in ambiguous calls [PAGE 14]. Prediction: if review-reversal rates do not differ between ambiguous offensive fouls called when the visitor leads in fouls versus when the home team leads, then the differential effect reflects