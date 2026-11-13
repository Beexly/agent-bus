---
source: "2020 - Pulling Starters - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2020"
pages: 33
model: baidu/ernie-5.5-flash-preview:free
words: 10125
---

<NATIVE_REASONING>
We need answer user's request. They provide a drive source PDF path, pages 33, source text. They want likely a structured analysis with exact XML sections: THINK_TRACE, SOURCE_OPERATORS_AND_EQUATIONS, RETROCAUSAL_GENEALOGY, RECURSIVE_THEORY_OF_MIND, CROSS_LAYER_VETO_ADJUDICATION, RLVR_COUNTERFACTUAL_VETOES. Need >=1000-word depth. Strict invariants: zero betting lines (no spreads/totals/moneylines/odds). Zero toy equations; state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided. Need probably answer based on source paper. Need not mention betting. Need formal equations from paper: runs density f(t), bullpen g(t), expected runs E[R | pull at τ] = ∫_0^τ f(t) dt + g(τ)(1-τ). derivative f(τ)+g'(τ)(1-τ)-g(τ). second derivative f'(τ)+g''(τ)(1-τ)-2g'(τ). optimal f(τ*)+g'(τ*)(1-τ*)=g(τ*), proposition f(τ*)>g(τ*) if g'<0. Empirical LPM equation: Y_i = β_PS PS_i + β_X X_i + β_{PS×X}(PS_i × X_i) + γ W_i + δ FE_i + ε_i. MoY equation: PS_i = β_MoY MoY_i + β_X X_i + γ W_i + δ FE_i + ε_i. Preliminary Table 1 equation: PS_i = β_X X_i + β_W W_i + β_R R_i + δ FE_i + ε_i. Lucky runs GAM equation: RC_ij = s_h(handedness, x_i,z_i) + s_c(count,x_i,z_i) + s_s(season,x_i,z_i) + Σ_k pitch type effects + velocity + error? Need parse OCR garbled: "!"# = %&((#, *#) + %-((#, *#) + %.((#, *#) + ∑ 012# 3 145 + 65789:# + ;#." We'll reconstruct formal: RC_{i} = s_h(handedness, x_i, z_i) + s_c(count_i, x_i, z_i) + s_s(season_i, x_i, z_i) + Σ_m β_m PitchType_{im} + β_v Velocity_i + ε_i. Need units: runs per inning? Expected runs created per pitch, dimensionless expected runs, maybe SI unit "runs" (dimensionless count). Need breakdown regimes: f'(t)>0 assumption; if f'=0 or negative? g'<0, g''<0 WLOG. If g' = 0, proposition collapses? If g'(t)=0 then optimal f=g; no strict improvement. If f'(t)<0? second derivative? Need discuss. Also empirical breakdown: omitted variables, no randomization, linear probability model boundaries, separation? Fixed effects saturated 3*8*3=216 score-inning-baserunner-outs? Page 10 footnote says 3*8*3 total permutations. Need mention cluster by game [PAGE 10-11]. Treatment as good as random conditional controls but ambiguous [PAGE 2]. Need exact citations.

Need sections >=400 words each? The instruction: >= 1,000-WORD DEPTH across these exact XML sections: THINK_TRACE >=400, SOURCE... formal, RETROCAUSAL..., RECURSIVE..., CROSS_LAYER..., RLVR... So total likely >1500. Need ensure each maybe 200-400 but total >1000. Could make each ~250-350 words, total ~1700. Need include exact XML tags. No extra outside maybe. Need avoid betting terms. Also no fake ratios. We can use formal equations. Need mention no source pages? We have source text. Cite exact [PAGE N] and verbatim quotes. Need perhaps quote some. Need be careful with garbled OCR? Use exact quotes from provided text. Need not mention outside source except source. Could mention historical lineage (Romer, Ganeshapillai, etc.) from source. Need multi-week traps? Maybe in retro causal genealogy mention if user asks about pulling starters, pitfalls over multi-week sample: analytics trend, roster expansion, September callups, extra innings, seasonal fatigue, managerial quality. Need not invent data.

Need produce final only with XML sections. Need ensure no forbidden betting lines. Do not mention spreads/totals/moneylines/odds. Use probability maybe not odds. Avoid "betting" except source? Strict: never mention spreads, totals, moneylines, or odds. Could mention probability, win probability. Avoid "odds" word. Also avoid "lines"? Okay.

Need think through content.

User asks? They only provided prompt. Need produce the structured analysis. Likely should not say cannot. We need comply.

Need ensure formal LaTeX equations are correct. Let's derive carefully.

Model: t ∈ [0,1], starter runs density f(t) ≥ 0, f'(t)>0, f(0)=0. Expected runs starter from 0 to τ: ∫_0^τ f(s) ds. Bullpen average runs per unit time if called at τ: g(τ), with g'(τ)<0, g''(τ)<0 WLOG. If pulled at τ, bullpen used for (1-τ), expected bullpen runs = g(τ)(1-τ). Total expected runs: E[R|pull at τ] = ∫_0^τ f(s) ds + g(τ)(1-τ). Derivative: f(τ)+g'(τ)(1-τ)-g(τ). Set zero: f(τ*)+g'(τ*)(1-τ*)=g(τ*). Since g'<0, f(τ*)>g(τ*). Second derivative: f'(τ)+g''(τ)(1-τ)-2g'(τ). Since f'>0, g''<0, -2g'>0, not necessarily positive? The paper says weakly positive due assumptions? Actually f'>0, -2g'>0, g''<0 negative; they claim weakly positive maybe because g'' assumed not too negative? It says "with second derivative f'(τ) + g''(τ)(1-τ) − 2g'(τ), which is weakly positive". But if g'' is negative, can be negative. They said "It is technically useful and without loss of generality to assume g''(τ) < 0." Hmm second derivative could not be weakly positive. But maybe they define f and g such that? Need not challenge too much but note breakdown if convexity fails: interior optimum may be boundary or non-unique. In formal assumptions, if second derivative not positive, first-order condition may not be minimum. Need mention exact singularity/breakdown: if g'(τ*)=0, strict inequality fails; if f' negative or bullpen exhaustion not monotone, model breaks; if τ*=1 boundary, marginal condition inequality? At boundary, optimal pull at end maybe no current-inning improvement? Need discuss.

Marginal cost of delay: f(t)-g(t) if f≥g. Marginal benefit of delay: g'(t)(t-1) = -g'(t)(1-t)>0. Wait they write marginal benefit of delay (decrease in future runs) is g'(t)(t-1). Since g'<0 and t-1<0, product positive. Total marginal effect delay: [f(t)-g(t)] + g'(t)(t-1)? Let's see. If delay from pulling now to later, current inning runs increases by f-g (assuming f>g), future runs decreases by -g'(1-t)? The derivative of total runs wrt τ: f(τ)-g(τ)+g'(τ)(1-τ). Wait derivative earlier: f + g'(1-τ) - g = f-g+g'(1-τ). Since g'<0, g'(1-τ) negative. This derivative is total runs as function of τ; if negative, delay reduces total runs. At optimum zero. If f=g, derivative = g'(1-τ)<0, so increasing τ reduces total runs; current runs unchanged instant but future better. Good. Need articulate.

Empirical identification: LPM equation. Outcomes: Win_i binary, Runs_i binary. PS_i binary pulled starter at start of at bat i. X_i covariates interacted. W_i additional covariates. FE_i saturated score-inning-baserunner-outs. β_PS interpretation: positive means pulling increases win probability => starters pulled too late on average; negative means too soon; zero consistent optimal. But unconfoundedness assumption: unobservables randomly drive PS conditional on controls [PAGE 11]. Breakdown: if unobserved starter injury, hidden fatigue, strategic information correlated with PS and Y, β_PS biased. They assess via proxy removal [PAGE 16]. Need maybe mention Altonji selection on observables. Also LPM can predict outside [0,1], but marginal effects small near zero. Fixed effects 216 combinations? Need include units: probability percentage points. Coefficient β_PS units: probability change (dimensionless probability) per unit change in PS (0/1), interpreted as percentage-point marginal effect. Runs effect approx -0.02 (two percentage points) from page 17? Quote: "approximately two percentage points." Also confidence interval [-0.014, 0.018] [PAGE 17]. Need mention 99.3% between at bats [PAGE 3]. Opponent PS effect: +5.3 percentage points [PAGE 3-4]. Need include as auxiliary.

Need RLVR counterfactual vetoes: three verifiable scenarios. RLVR likely Reinforced Learning from Verifiable Rewards? Need propose counterfactual veto scenarios with predictions. Need ensure no betting. Examples:
1. If within-at-bat pull allowed or convention removed, optimal model predicts more mid-at-bat pulls when pitch-level information indicates f(t) > g(t) during an at-bat; observable: pitcher velocity/command deterioration within at bat leads to mid-at-bat replacement, but source says 99.3% between at bats and speculate convention [PAGE 3]. Veto: if data show no improvement in expected runs or win prob from mid-at-bat pulls, the within-at-bat counterfactual is not rewarded.
2. If recency bias absent, Last 3 Runs/Hits/Walks interactions with PS should not predict worse runs after controlling for luck; source finds Table 8 some marginal overreaction but insignificant/marginal [PAGE 20]. Verifiable veto: large sample shows positive coefficient on PS×Last3Runs for Runs with meaningful magnitude and not offset by luck => bias present; source's small/insignificant vetoes.
3. If managerial quality matters, MoY votes should correlate with PS timing or outcomes; source finds MoY no significant effect on PS, but positive on Win [PAGE 20]. Veto: high-quality managers systematically pull earlier/later and improve win probability conditional on situation; if not, average optimality holds.
Could include a fourth? Need 3. Need predictions and verifiable thresholds? We can specify exact predictions: β_PS≈0, CI includes 0; runs coefficient ≈ -0.02; opponent PS +0.053 but no outcome interaction; MoY β_MoY≈0 for PS. RLVR counter-factual vetoes: if an intervention changes rule (mid-at-bat pull) and observed win probability change > CI? Need no fake thresholds maybe use source CI.

Cross-layer veto adjudication: physical/biomechanical/weather veto proof. Need baseball physical constraints: pitcher fatigue, pitch count, velocity decline, rest days, bullpen depletion. Weather? Outdoor baseball: temperature, wind, precipitation can affect run environment and bullpen usage; if extreme weather changes run scoring, model's runs proxy may shift. Need prove veto: any decision analysis must respect physical constraints: pitcher cannot recover instantly, reliever warm-up time, roster limits, pitch count thresholds. Source includes Pitch Count and Recent Fastball [PAGE 11], Lag BP Pitch Ct [PAGE 12], bullpen quality/condition. Physical veto: if starter's recent fastball velocity drops or pitch count above baseline, optimal pull may be justified even if win probability marginal effect zero; source uses Recent Fastball: "average fastball thrown in the last six at bats minus average fastball velocity from the first four innings" [PAGE 11]. Need mention biomechanical risk: injury risk is unobserved, not in win model; cannot veto solely based on short-term win probability. Weather veto: wind direction, temperature, precipitation can alter hit probability and run expectancy; if not controlled, could confound. Source doesn't include weather controls, so breakdown: external validity veto if weather systematically affects close-inning run scoring. Need phrase as proof: Model's f(t), g(t) are conditional on environment; if weather changes, f and g shift; without weather covariates, β_PS may absorb environmental variation. But source uses season/month FE and home status, not game-level weather; thus physical/environmental veto remains. Need not overdo.

Recursive theory of mind: Crisis habit regression vs counter-trap vs clock. Need discuss manager decision in recursive beliefs: manager observes signal, updates about starter fatigue; omission bias favors leaving starter (commission pull is action). Habit regression: under pressure, default to convention (pull between at bats, due to 99.3%); counter-trap: overreaction to recent bad events; clock: game state (inning, score, outs, base runners) imposes temporal constraints; optimal stopping. Need model: belief state s_t, action a_t∈{stay,pull}; value function V(s,t). Maybe formal Bellman equation? Could add in SOURCE? But keep no toy equations? It's formal if defined. But user wants formal LaTeX. Could include Bellman: V_t(s)=max{stay: -E[R_stay|s,t]-C_future? pull: ...}. Need avoid fake ratios. But maybe not necessary. In Recursive section, we can mention qualitative with source. Need maybe include exact quotes: "The omission bias— the bias toward favoring errors of omission and not commission (in our context, pulling the starter) ... could lead starters to be generally left in games too long" [PAGE 1]. "We find essentially no significant evidence..." [PAGE 2]. "probability of pulling the starter increases by 5.3 percentage points when the opposition team has pulled their starter first" [PAGE 3-4]. Need quote exact.

Retro causal genealogy: Historical lineage: Romer 2006, Ganeshapillai & Guttag 2014, Carleton, Hakes & Sauer, sabermetrics, designated hitter 1973, NBA three point, NFL fourth down. Need multi-week traps: sample restrictions pre-September, 2016-17 trend, last two seasons earlier pulls, extra innings? Need mention if analyzing over multiple weeks, must control month/year, roster changes, trade deadline? Source excludes September due roster expansion and development [PAGE 5]. Also multi-week traps: recency effects from last three at bats [PAGE 13], managerial MoY 3-year moving average [PAGE 13], luck variables. Need mention exact source.

Need cite exact page markers for all claims. Use [PAGE 1] etc. Need verbatim quotes. Need maybe include quotes in each section. Ensure exact quotes from provided text. Need preserve typos? Use verbatim. Could quote short phrases.

Need final structure exactly tags. Could include headings? The tags themselves. Need no markdown outside? We can output:
<THINK_TRACE>
...
</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>
...
</SOURCE_OPERATORS_AND_EQUATIONS>
...

Need ensure word count >1000. Let's plan each section.

THINK_TRACE >=400 words: multi-hop derivation and gray-zone audit. Discuss paper's question: expert Bayesian updating under incentives; pulling starter as optimal stopping. Need connect theory to empirics: If optimal, current inning expected runs lower when pull, but win probability marginal effect zero due future bullpen cost. Gray-zone: lack randomization; treatment assignment endogenous; proxy controls; selection on observables; LPM. Also 99.3% between at bats puzzling; opponent conformity effect. Need mention exact equations? Maybe not too much but can. Need cite pages. Need deep multi-hop: from f'(t)>0 and g'(t)<0 to proposition; to empirical prediction; to regression; to null. Need mention if win prob zero average doesn't prove no mistakes; can mask offsetting biases, but subsamples small [PAGE 3]. Need discuss Abadie non-significance [PAGE 3 footnote 6? Actually footnote 6 page 3 says see Abadie]. Need mention confidence interval. Need gray zone: statistical non-significance not proof of optimality; informative null requires precise estimates. Need mention precise near-zero. Good.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX with units, assumptions, citations, breakdown. Include model equations and empirical equations. Need exact page citations and quotes. Need maybe list operators:
- f(t): starter runs density, units expected runs per unit normalized game time; assumption f'(t)>0, f(0)=0 [PAGE 5]. Quote: "We assume f'(t) > 0 ... normalize f(0) to 0." Need quote with LaTeX? Source text uses *2(+) etc OCR. We can quote plain? "We assume *2(+) > 0" but garbled. Could quote from clean phrase: "starters tire throughout the game, on average, or are more likely to see performance decline when facing the batting order multiple times" [PAGE 5]. Use equations reconstructed.
- g(t): bullpen average runs per unit time, g'(t)<0, g''(t)<0 WLOG [PAGE 6]. Quote: "we assume that the average runs per inning of bullpen usage (for the remainder of the game) declines when the bullpen is called on later in the game." Actually page 5-6. Need quote exact maybe "we assume that it is the average runs per inning of bullpen usage (for the remainder of the game) that declines when the bullpen is called on later in the game." [PAGE 6].
- Objective: E[R] = ∫ f + g(τ)(1-τ). Units runs. First-order and proposition.
- Breakdown: if g'≥0, proposition fails; if second derivative not positive, optimum may be boundary; if f/g discontinuous due reliever matchup, model changes; if τ=0/1 boundaries.
- Empirical LPM equation. Units: β probability. Fixed effects saturated. Treatment as good as random assumption. Quote: "we assume that unobservables randomly drive variation in the PS decision" [PAGE 11]. Estimate CI [-0.014, 0.018] [PAGE 17]; runs reduction approx two percentage points [PAGE 17]. Opponent PS +5.3 pp [PAGE 3-4]. 99.3% between at bats [PAGE 3].
- Lucky runs GAM maybe include: RC_i = s_h(hand, x,z)+s_c(count,x,z)+s_s(season,x,z)+Σ β_p Type_p+β_v v_i+ε_i, units expected runs created per pitch. Breakdown: extrapolation beyond strike zone grid, pitch type collinearity, measurement error. Quote: "semiparametric generalized additive model" [PAGE 29].
Need maybe include MoY equation: PS_i = β_MoY MoY_i + ... [PAGE 13].

RETROCAUSAL_GENEALOGY: historical/scientific lineage and multi-week traps. Need >200 words. Discuss lineage: baseball rules stable since DH 1973 [PAGE 3]; learning over careers of predecessors; sabermetrics before/after; Ganeshapillai & Guttag found 48% differences, 90% too late [PAGE 2]; current paper expands objective to wins and sample 2008-2017. Multi-week traps: seasonal trends in pull time, September roster expansion, postseason exclusion, last two seasons analytics shift, manager quality, bullpen rest, opponent decisions. Need mention exact quotes: "there was a steady downward trend in the mean time that starters were pulled from approximately 1970 through the early 2000s" [PAGE 3]. "we restrict our sample to pre-September games" [PAGE 5]. "There is evidence that analytics have affected decision-making in the last two seasons of our sample as starters are pulled somewhat earlier on average" [PAGE 2 footnote 5? Actually page 2 footnote 5]. Need multi-week trap: using moving averages for MoY 3-year [PAGE 13], last T events N=3 [PAGE 13], month/year FE [PAGE 12].

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Need discuss. Maybe model beliefs: manager's latent belief θ_t about starter's run density; action a_t. Crisis habit regression: under high-leverage close game, default to leave starter due omission bias [PAGE 1]; between at bat convention [PAGE 3]. Counter-trap: overreact to recent walks/hits/runs; source tests Last 3 variables [PAGE 13], finds little evidence but Table 8 marginal [PAGE 20]. Clock: outs/innings/base runners fixed effects; time normalization t; optimal waiting balances current vs future; clock imposes finite horizon and bullpen depletion. Need mention opponent conformity: manager may pull if opponent pulled, +5.3 pp, but no outcome effect [PAGE 4]. Need maybe formal? Could include recursive belief: E_t[R | info] with signal s_t, but not necessary. Need cite.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Need >200 words. Physical: pitcher fatigue, velocity, pitch count; bullpen rest; warm-up; injury risk. Source controls: Pitch Count and Recent Fastball [PAGE 11], Lag BP Pitch Ct and 2nd Lag [PAGE 12]. If physical signals indicate high injury or breakdown, win-probability model may not capture long-term cost; veto against using only win probability. Need weather: run environment affected by weather, park, wind, temp; source includes home status, year/month FE but not explicit weather [PAGE 12], so breakdown if weather correlates with PS and runs. Need formal: observed runs Y = true expected runs E[R|state, physical, weather] + noise. If weather W shifts f,g, omitted variable bias in β_PS if W affects both pull and outcome. Need cite: "The data include pitch location, type ... velocity" [PAGE 4] maybe not weather. Need say no weather covariates in empirical strategy. Need exact quote? Could quote "controlling for a large array of characteristics" [PAGE 10]? But physical/weather not in list. Need avoid claiming too strongly; source does not include weather, so veto as external validity.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable scenarios + predictions. Need maybe format enumerated. Each scenario: counterfactual, verifiable prediction, veto condition. Need no betting. Use source estimates. Examples:
1. Mid-at-bat information intervention: If managers could act on pitch-level fatigue within at-bat, optimal theory says expected current inning runs should fall and maybe win probability not worsen. Verifiable: pitch count/velocity decline within at-bat followed by replacement yields lower runs compared to matched stay. Veto: if 99.3% between-at-bat persists and no pitch-level improvement, convention dominates [PAGE 3]. Prediction: β_PS for between-at-bat pull remains near zero; Runs coefficient ≈ -0.02 [PAGE 17].
2. Recency-bias counterfactual: If managers overreact to recent non-lucky hits/walks, PS×Last3Runs should increase Runs with meaningful magnitude after controlling for lucky runs. Source finds "some evidence that recent hitting performance is overreacted to" but "significance ... somewhat marginal and magnitudes are small" [PAGE 20]. Veto if coefficient not significant or offset by Last3LuckyRuns. Prediction: near-zero interaction for Win; Runs interactions small.
3. Manager-quality counter-trap: If high-quality managers avoid bias, MoY should predict PS timing/outcomes. Source: "MoY has no significant effects on PS" but positive on Win [PAGE 20]. Veto if high MoY systematically pulls at different times and changes win probability; source refutes. Prediction: β_MoY≈0 in PS equation; β_MoY>0 in Win placebo.
Could also include opponent PS: counterfactual if opponent pull influences decision but not outcomes: +5.3pp decision effect, interaction insignificant [PAGE 4]. Could be third instead of manager quality. Need 3; maybe include opponent as one because exact source. But MoY is alternative. Let's choose three: mid-at-bat, recency/luck, opponent conformity/manager quality? Need 3. Could include opponent conformity: if opponent's pull causally influences, decisions +5.3pp, but no outcome interaction; veto if interaction with Win/Runs significant. But MoY also good. The prompt says crisis habit regression vs counter-trap vs clock; RLVR scenarios maybe align: habit (mid-at-bat), counter-trap (recency), clock (game-state/subsample). Need include clock scenario: high-leverage late innings vs early? Source subsamples by inning/outs/men/score; most insignificant; if clock traps produce bias, estimates should vary systematically by inning/score. Prediction: small/insignificant across situations; CI includes zero. Veto if large β_PS in specific state. That covers clock. Then maybe opponent conformity in text. Need exactly 3 verifiable scenarios. Let's make:
- Scenario A: Within-at-bat physical-information counterfactual (habit/convention). Predictions: 99.3% between at bats; no mid-at-bat effect; if allowed, run reduction but not necessarily win probability.
- Scenario B: Recency counter-trap counterfactual (luck vs deserved outcomes). Predictions: Last 3 Runs positive, Last 3 Lucky Runs negative; interactions small; no meaningful Win effect. Veto if large.
- Scenario C: Clock/game-state counterfactual (optimal stopping by state). Predictions: β_PS near zero in subsamples by score, inning, outs, men on; only small significant <4pp; runs reduction stronger with same-hand matchups maybe -0.041 [PAGE 20]. Veto if systematic state-dependent β_PS. This includes opponent? Could mention opponent as additional auxiliary: +5.3pp but no interaction. But need 3; maybe include opponent in Scenario C? Maybe not.

Need ensure no "betting lines" words. Avoid "odds" entirely. The source uses "win probability", okay. Avoid "betting". Also avoid "toy equations": our equations formal with units and assumptions. Need maybe state "SI/information/probability units". Use probability units, runs, normalized time. Information units? Could mention entropy? Not necessary but maybe "information units" if we discuss signals. We can state signals in bits? But not needed. The invariant says State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. We can include units for variables: t dimensionless normalized game clock, f(t) runs per unit t, g(t) runs per unit t, β probabilities. For information variables, maybe Last T Lucky Runs units expected runs (dimensionless runs). GAM response RC in expected runs per pitch. Could mention log-likelihood? Maybe not. But "SI/information/probability units" maybe need include if using information: manager's signal s_t has units of expected runs or bits? Could say all latent beliefs are probability distributions over f/g; no physical SI units except counts (runs, pitches, velocity mph). Velocity in miles per hour in source. Need mention mph. Good.

Need maybe include formal probability: Y_i ∈ {0,1}, E[Y_i|X] is probability. β_PS = ∂Pr(Y=1)/∂PS. Units: probability per binary switch. Good.

Need check exact page citations: Use [PAGE 1], [PAGE 2], etc. Need quote exact. Need maybe not over quote huge. But enough.

Potential issue: user says DRIVE SOURCE: path; SOURCE TEXT provided. They may expect analysis of source. We can mention path? Maybe not needed. Could include source identification. But final only sections.

Need ensure word count. Let's draft. Need maybe around 2000 words. Use concise but detailed.

Let's compose each section.

THINK_TRACE draft:
"The source treats pulling starter as optimal stopping under uncertainty..." Need >=400. Let's write ~550 words.

SOURCE_OPERATORS_AND_EQUATIONS ~800 words? Need formal. Could be long. Need total >1000; already enough. But ensure each section not too short. We'll make robust.

Need be careful with LaTeX in final. Use $$...$$? Fine. Need maybe no markdown? XML tags can contain LaTeX. Good.

Potential issue: source text OCR has garbled variables. We can reconstruct. Need maybe mention "reconstructed from OCR"? But maybe not. Use formal.

Need include exact quotes with page markers. Example:
[PAGE 5] "We assume f'(t) > 0" not exact because OCR. Could quote clean text: "starters tire throughout the game, on average" [PAGE 5]. For equation, not quote exact due OCR. Could quote "expected runs for the game when PS = 1 is equal to" [PAGE 6]. Need verbatim? The source text: "Consequently, expected runs for the game when !"#7 = 1 is equal to ∫*(+)/+ + 4(+̂)(1 −+̂)
#7
:." Garbled. We can quote as [PAGE 6] "expected runs for the game" maybe. But exact verbatim quotes required when source pages provided. We can quote exact phrases from provided text, not necessarily equations. Need avoid misquoting. Use short exact quotes:
- [PAGE 1] "Bayesian updating about an unobserved state of the world is hard."
- [PAGE 1] "The omission bias— the bias toward favoring errors of omission and not commission (in our context, pulling the starter)"
- [PAGE 2] "We find essentially no significant evidence that teams make such systematic mistakes in pulling starter decisions."
- [PAGE 3] "in 99.3% of cases starters pulled in our sample, this occurred in between, rather than during, at bats."
- [PAGE 3] "the probability of pulling the starter increases by 5.3 percentage points when the opposition team has pulled their starter first"
- [PAGE 5] "We assume *2(+) > 0" maybe not good. Use [PAGE 5] "starters tire throughout the game, on average".
- [PAGE 6] "the average runs per inning of bullpen usage (for the remainder of the game) declines when the bullpen is called on later in the game." exact? Provided: "we assume that it is the average runs per inning of bullpen usage (for the remainder of the game) that declines when the bullpen is called on later in the game." Yes.
- [PAGE 10] "Implicitly, we use !" = 0 observations as counterfactuals for !" = 1 observations" OCR. Use [PAGE 11] "we assume that unobservables randomly drive variation in the PS decision, and are not systematically correlated with both PS and Y." exact.
- [PAGE 17] "95% confidence interval for the marginal effect of !"? on win probability when other covariates are at their mean or baseline of [−0.014, 0.018]." Need quote with garbled? Could quote [PAGE 17] "yields a 95% confidence interval for the marginal effect of ... on win probability ... of [−0.014, 0.018]" but exact includes OCR. Maybe quote numbers: [PAGE 17] "[−0.014, 0.018]" is exact? It appears. Also "approximately two percentage points" exact.
- [PAGE 20] "MoY has no significant effects on PS." exact? Provided: "MoY has no significant effects on PS." Yes.
- [PAGE 20] "significance of these results is somewhat marginal and magnitudes are small." exact.
- [PAGE 29] "semiparametric generalized additive model" exact.

Need maybe include [PAGE 10] fixed effects: "there are 3 3 8 3 total permutations" [PAGE 10 footnote 18]. Quote exact: "there are 3 3 8 3 total permutations of these variables." Actually source: "there are 3 3 8 3 total permutations" maybe missing ×. Use [PAGE 10] "fully saturated set of score-inning-baserunner-outs fixed effects". Good.

Need maybe include source equations with variables. Let's define:
PS_i: binary treatment.
Y_i^W, Y_i^R.
X_i: vector starter/bullpen controls interacted with PS.
W_i: noninteracted controls.
FE_i: score-inning-baserunner-outs fixed effects.
Equation (1):
Y_i = β_PS PS_i + β_X X_i + β_{PS×X}(PS_i × X_i) + γ W_i + δ FE_i + ε_i. Wait original has β_X X_i and β_{PS×X}(PS_i × X_i). But X_i is covariates interacted? They denote D_i. Could write:
Y_i = β_{PS} PS_i + β_X X_i + β_{PS×X}(PS_i · X_i) + γ W_i + δ_{S(i)} + ε_i.
Units: Y binary; coefficients probability.
If include fixed effects saturated: δ_{s(i)} for 216 states? Need mention 3 score differences, 3 innings, 8 base states, 3 outs = 216. Actually 3*8*3=72? Wait 3*8*3=72. The text says 3 × 8 × 3 total permutations, that's 72. It says "there are 3 3 8 3 total permutations" maybe 3*8*3 = 72. Score differences: at most one run: -1,0,1 = 3. Innings: 6,7,8 = 3. Base-runner: 8. Outs: 3. 3*3*8*3 = 216? They listed three score differences, three innings, eight base-runner, three outs => 3*3*8*3=216. Footnote says "there are 3 3 8 3 total permutations" maybe first 3 score, second 3 innings, 8, 3 = 216. Yes. Need say 216 saturated cells. Good.

MoY equation:
PS_i = β_MoY MoY_i + β_X X_i + γ W_i + δ FE_i + ε_i. [PAGE 13].

Lucky runs GAM:
RC_{p} = s_h(H_p, x_p, z_p) + s_c(C_p, x_p, z_p) + s_s(S_p, x_p, z_p) + Σ_{k} α_k T_{pk} + α_v V_p + ε_p.
Where RC expected runs created by pitch p, x,z plate coordinates, H handedness, C count, S season, T pitch type, V velocity mph. Units: expected runs (runs), velocity mph. Assumptions: smooth functions estimated by penalized splines; linear pitch type/velocity conditional on spatial smooths. Breakdown: extrapolation outside training strike-zone/count/year; omitted umpire/ballpark; collinearity pitch type/velocity.

Need maybe include expected runs matrix for luck example: RE(start,end) - RE(start) + runs scored. Source page 29: "expected run contribution is equal to the ending run expectancy state ... minus the starting run expectancy state, plus the number of runs actually scored". Formal:
ΔRC_{p} = RE_{end}(b', o') - RE_{start}(b,o) + r_p.
Units runs. Good.

Need include proposition proof maybe:
Given objective J(τ) = ∫_0^τ f + g(τ)(1-τ). FOC J'(τ*) = 0. J'(τ) = f(τ)-g(τ)+g'(τ)(1-τ). Since g'<0, at FOC f(τ*)-g(τ*) = -g'(τ*)(1-τ*) >0 for τ*<1. If τ*=1, boundary; inequality may not hold with strict positive? At τ*=1, term zero, FOC f(1)=g(1); no future cost, so proposition may fail at boundary. Need mention singularity τ*=1. If g'(τ)=0, no strict improvement. If f not increasing, second-order may fail. Good.

Need include breakdown regimes:
- τ*=1: no remaining bullpen horizon, proposition strictness vanishes.
- g' = 0 or positive: future cost absent, pull when indifferent.
- f' ≤ 0 or nonconvex: objective may not be convex; multiple local optima.
- empirical: unobserved confounders; LPM outside [0,1]; small sample cells? They have large sample; but subsamples multiple testing.

RETROCAUSAL_GENEALOGY: Need mention multi-week traps. Could discuss "multi-week traps" as time-series confounds: If evaluating over multiple weeks, must account for seasonal trend in starter usage, September roster expansion, postseason exclusion, analytics adoption, opponent effects, bullpen rest. Source excludes postseason [PAGE 5 footnote 13] and pre-September [PAGE 5]. It includes month/year FE [PAGE 12]. It checks dropping last two seasons [PAGE 5]. Need mention Ganeshapillai & Guttag: 48% late close, 90% leaving too late [PAGE 2]. Current paper says those results potentially consistent with optimal due current-inning vs future tradeoff [PAGE 2]. Good.

RECURSIVE_THEORY_OF_MIND: Need maybe mention recursive beliefs: manager forms belief about f(t) from observed outcomes, but outcomes are noisy; omission bias makes default stay. Counter-trap overreacts to recent events; clock imposes state. Need maybe include formal belief updating? Could write: Let θ_t be latent fatigue state; observed signals s_t = {pitch count, velocity, batted-ball outcomes, luck}. Manager chooses a_t to minimize expected total runs: E[∫ f(s)|s_{1:t}] + expected bullpen cost. But if biased, uses heuristic. Source finds little evidence of systematic bias in win outcomes, but conformity in timing (opponent PS) and convention (between at bats). Need cite. Good.

CROSS_LAYER_VETO_ADJUDICATION: Need proof. Could structure as physical veto, biomechanical veto, weather veto. Use source controls and missing controls. Need exact quotes: [PAGE 11] "Pitch Count" and "Recent Fastball"; [PAGE 12] "Lag BP Pitch Ct, 2nd Lag BP Pitch Ct". Need say these are proxies, not full biomechanical state; injury risk is outside objective. Weather: source doesn't list weather; it controls home status, year, month [PAGE 12]. Therefore any analysis that vetoes pulling based solely on short-run win probability must be overridden if physical injury risk or weather-driven run environment changes. Need maybe formal:
Let true expected runs = J(τ; φ, ω), φ physical state, ω weather. Observed model estimates β_PS under omitted φ,ω. If Cov(PS,φ|controls)≠0 or Cov(PS,ω|controls)≠0, β_PS biased. Since φ includes fatigue/injury not fully observed, veto. Good.

RLVR_COUNTERFACTUAL_VETOES: Need 3. Make verifiable. Could use "RLVR" as reward verifiable counterfactual. Need no betting. Use predictions from source. Maybe each:
1. Convention/within-at-bat veto: Counterfactual: if mid-at-bat pulls were optimal, we should see them more than 0.7%; source observes 99.3% between at bats [PAGE 3]. Verifiable prediction: if pitch-level model identifies fatigue, mid-at-bat replacement should reduce expected current-inning runs relative to matched controls; if not, convention dominates. RLVR veto: no run-expectancy improvement => reject mid-at-bat counterfactual.
2. Recency/luck veto: Counterfactual: managers overreact to recent non-lucky events. Verifiable: PS × Last 3 Hits/Walks/Runs should predict higher Runs and perhaps lower Win with meaningful coefficients after controlling for Last 3 Lucky Runs. Source finds some evidence for Runs but "significance ... somewhat marginal and magnitudes are small" [PAGE 20]. Prediction: coefficients near zero; Last 3 Lucky Runs negative offset [PAGE 14, 20]. Veto if large.
3. Clock/state veto: Counterfactual: optimal stopping varies by game clock (inning, score, outs, men on). Verifiable: β_PS should differ systematically across subsamples. Source finds most insignificant; two <4 percentage points [PAGE 20], overall CI [-0.014,0.018] [PAGE 17]. Prediction: no large state-dependent effects; Runs reduction ~2 pp [PAGE 17]. Veto if a state shows large positive/negative β_PS after correction. Also opponent PS: decision effect +5.3 pp but no outcome interaction [PAGE 4]; include as auxiliary. Need maybe mention exact [PAGE 4] "we do not find significant interaction effects between the opposition’s decision and the team’s own decision on game outcomes." Good.

Need ensure no "totals" word? The invariant says never mention spreads, totals, moneylines, or odds. Avoid word "totals". I might use "total expected runs" because source uses. Is "totals" forbidden? It says spreads, totals, moneylines, or odds. "total expected runs" maybe not betting total but contains total. To be safe, avoid "totals" as standalone; can say "aggregate expected runs" or "sum of expected runs". But formal "total expected runs" maybe okay? Strict says zero betting lines: never mention spreads, totals, moneylines, or odds. The word "totals" could trigger. Use "sum" or "aggregate". Avoid "total". But source quote includes "total expected runs for the game"? Could avoid quoting that. Use "aggregate expected runs". In equations, E[R] not total. Avoid "total". Also avoid "odds". Use probability. Avoid "spread". Good.

Need check if "win probability" okay. Yes.

Need maybe not mention "betting". The user prompt includes "ZERO BETTING LINES" but we shouldn't mention betting? It says never mention spreads etc. Could avoid word betting. Fine.

Need ensure final no analysis. Use XML.

Let's draft final carefully. Need word count. I'll write long.

Potential issue: In SOURCE_OPERATORS, using "total" avoid. Use "aggregate".

Let's compose.

THINK_TRACE:
Need >=400. Let's write 600.

SOURCE_OPERATORS:
Need maybe 1000 alone? But total okay. Let's make detailed.

RETROCAUSAL_GENEALOGY: 400.

RECURSIVE: 400.

CROSS: 400.

RLVR: 500.

Total maybe 3000. Fine. Need not too excessive but okay.

Need ensure exact XML sections. No additional text outside. Good.

Double-check citations and quotes exact:
- [PAGE 1] "Bayesian updating about an unobserved state of the world is hard." exact.
- [PAGE 1] "The omission bias— the bias toward favoring errors of omission and not commission (in our context, pulling the starter)" exact? It continues. Use quote segment. There is an em dash and spaces. Fine.
- [PAGE 2] "We find essentially no significant evidence that teams make such systematic mistakes in pulling starter decisions." exact.
- [PAGE 3] "in 99.3% of cases starters pulled in our sample, this occurred in between, rather than during, at bats." exact? Provided: "in 99.3% of cases starters pulled in our sample, this occurred in between, rather than during, at bats." Yes.
- [PAGE 3] "the probability of pulling the starter increases by 5.3 percentage points when the opposition team has pulled their starter first" exact? It continues conditional. Use segment. Good.
- [PAGE 4] "we do not find significant interaction effects between the opposition’s decision and the team’s own decision on game outcomes." exact? Provided: "However, we do not find significant interaction effects between the opposition’s decision and the team’s own decision on game outcomes." Use with However maybe. Quote exact segment.
- [PAGE 5] "we restrict our sample to pre-September games" exact? Provided: "we restrict our sample to pre-September games to minimize the influence of both of these issues." Use segment.
- [PAGE 5] "starters tire throughout the game, on average" exact? Provided: "We assume *2(+) > 0 (starters tire throughout the game, on average, or are more likely to see performance decline..." Use exact segment.
- [PAGE 6] "the average runs per inning of bullpen usage (for the remainder of the game) that declines when the bullpen is called on later in the game." Exact? Provided: "we assume that it is the average runs per inning of bullpen usage (for the remainder of the game) that declines when the bullpen is called on later in the game." Use segment.
- [PAGE 10] "fully saturated set of score-inning-baserunner-outs fixed effects" exact? Provided: "and IJ? a fully saturated set of score-inning-baserunner-outs fixed effects (FEs)." Use.
- [PAGE 11] "we assume that unobservables randomly drive variation in the PS decision, and are not systematically correlated with both PS and Y." exact? Provided: "assume that unobservables randomly drive variation in the PS decision, and are not systematically correlated with both PS and Y." Use with assume? Quote exact segment maybe "unobservables randomly drive variation in the PS decision, and are not systematically correlated with both PS and Y". Good.
- [PAGE 17] "[−0.014, 0.018]" exact? It appears as [−0.014, 0.018]. Good. "approximately two percentage points" exact. Use.
- [PAGE 20] "MoY has no significant effects on PS." exact.
- [PAGE 20] "significance of these results is somewhat marginal and magnitudes are small." exact? Provided: "But again, the significance of these results is somewhat marginal and magnitudes are small." Use segment.
- [PAGE 29] "semiparametric generalized additive model" exact.
- [PAGE 29] "expected run contribution is equal to the ending run expectancy state – determined by men on base, the number of outs, and/or the count – minus the starting run expectancy state, plus the number of runs actually scored as a result of the play." exact? Provided. Use maybe shorter.
- [PAGE 12] "Pitch Count" etc. Could quote variable names.

Need ensure no fake equations. Good.

Potential issue: In source equation, g''<0 WLOG, but second derivative weakly positive. We can state "paper asserts weakly positive under its maintained assumptions; if not, breakdown". Need not challenge too much.

Need maybe include "SI units"? Baseball stats not SI. But velocity mph from source. We can say normalized time dimensionless, runs dimensionless count, velocity mph (non-SI but source unit), probability dimensionless. If need SI, convert velocity to m/s? Could state if SI required, mph × 0.44704 = m/s. But not necessary? Invariant says SI/information/probability units. Could include conversion: velocity V in mph; SI equivalent v_SI = 0.44704 V m s^{-1}. Nice. Runs are counts; probability dimensionless. Pitch count dimensionless. Expected runs dimensionless. Time t normalized to game duration; if physical time, t = elapsed innings/9? Actually normalized 0 to 1. Could define t dimensionless. Good.

Need include information units? Maybe mention signals reduce entropy in bits? Could define manager's information set F_t; conditional expectation E[f(t)|F_t]. But not necessary. To satisfy, we can state "information set F_t is a sigma-algebra; no physical units; uncertainty measured in probability." Maybe enough. Could mention "bits" for discrete signals? Hmm. Could include: If a discrete signal S_t is used, its informativeness can be measured by mutual information I(f(t); S_t | F_{t-1}) in bits. But source doesn't use. Is that a toy equation? It's formal. But maybe unnecessary. The invariant says SI/information/probability units, not necessarily include information theory. But to be safe, include a small formal note: "The manager's information set \mathcal F_t contains pitch count, velocity, base-out state; any signal's information value can be expressed in bits via mutual information, but the paper's empirical estimand is probability/run units, not bits." Good. No fake ratios.

Need avoid "toy equations". The mutual info is formal but not source? Could be okay but maybe extraneous. Better stick to source. But mention units.

Need maybe include "exact singularity/breakdown regimes" for empirical: when PS has no variation within FE cells? Since PS=1 at most one observation per game [PAGE 10], and FE saturated; if a cell has no variation, coefficient not identified. But large sample. Mention. Also if treatment effect heterogeneous and omitted interactions, β_PS is weighted average? Could mention. Need not too much.

Need check no prohibited words: "spread" no. "totals" avoid. "moneylines" no. "odds" no. "betting" no. "lines" maybe not. Use "line"? Avoid. "baseline" okay. "marginal effect" okay.

Let's write final. Ensure XML tags exactly. Need maybe no XML declaration. Good.

Double-check word count roughly. THINK_TRACE 550. SOURCE 1000. RETRO 450. RECURSIVE 450. CROSS 450. RLVR 600. Total 3500. Fine.

Let's draft in final. Use LaTeX with align. Ensure no weird unsupported. Good.

Potential issue: In SOURCE_OPERATORS, equation for J'' maybe I need be careful: J'(τ)=f(τ)+g'(τ)(1-τ)-g(τ). J''=f'(τ)+g''(τ)(1-τ)-2g'(τ). Yes.

Proof proposition: At FOC, f(τ*)-g(τ*) = -g'(τ*)(1-τ*). If g'<0 and τ*<1, positive. If τ*=1, zero. Good.

Empirical equation: If X_i includes variables interacted? Could write separate: Y_i = β_PS PS_i + X_i'β_X + (PS_i X_i)'β_{PSX} + W_i'γ + α_{s(i)} + ε_i. Good.

MoY equation: PS_i = β_MoY MoY_i + X_i'β_X + W_i'γ + α_{s(i)} + ε_i. Good.

Lucky runs GAM: RC_{p} = s_h(H_p, x_p,z_p)+s_c(C_p,x_p,z_p)+s_s(Y_p,x_p,z_p)+Σ_k β_{k}T_{pk}+β_v V_p+ε_p. Need define. Good.

Need include run expectancy contribution: ΔRE_p = RE(b_{t+1},o_{t+1}) - RE(b_t,o_t) + r_p. Units runs. Good.

Need maybe include "expected runs created for a given pitch" from source. Good.

Need ensure quotes not too long. Fine.

Let's produce final.
</NATIVE_REASONING>

<THINK_TRACE>
The source treats the managerial decision to pull a starting pitcher as a sequential Bayesian decision problem under uncertainty, but it does not reduce the problem to a simple “fresh pitcher is better” heuristic. The central analytical move is to separate current-inning expected runs from game-level expected runs. The paper’s formal model says that if a starter’s expected runs density is increasing over game time and the bullpen’s average future runs per inning decreases when used earlier, then the optimal pull time is not the point where starter and reliever are equally good in the current inning. Instead, the optimal pull occurs when the reliever is strictly better in the current inning by enough to compensate for the future cost of depleting the bullpen [PAGE 6]. This is the key gray-zone: a manager who pulls at indifference may look “safe” from a current-inning perspective but is not optimal from a game-level perspective.

The empirical strategy follows from this theoretical asymmetry. The authors estimate linear probability models for two outcomes: game win and allowing at least one run in the current inning. Their identifying assumption is conditional “as good as random” assignment of the pull decision after rich game-state and player-quality controls [PAGE 10], but they explicitly acknowledge the lack of true randomization: “we assume that unobservables randomly drive variation in the PS decision, and are not systematically correlated with both PS and Y” [PAGE 11]. This creates the main interpretive gray-zone: a precise zero coefficient is evidence consistent with optimality only if omitted confounders are small. The paper addresses this by removing proxy controls and showing coefficient stability, with the key win-probability estimate moving only within a narrow range [PAGE 16].

The source’s most important empirical result is not merely “managers are optimal,” but “the average marginal effect is precisely near zero.” The preferred win-probability confidence interval is [−0.014, 0.018] [PAGE 17], while the current-inning run probability effect is about negative two percentage points, consistent with the model’s prediction that pulls should improve current-inning pitching quality [PAGE 17]. This creates a subtle multi-hop inference: if pulling reduces current-inning runs but does not change win probability, then the average pull timing may be near the game-level optimum, because the current-inning benefit is offset by future bullpen cost. However, this inference is vulnerable to unobserved injury risk, weather, bullpen matchup details, and strategic motives not captured by the controls.

The paper also identifies two important regularity anomalies. First, “in 99.3% of cases starters pulled in our sample, this occurred in between, rather than during, at bats” [PAGE 3]. This is theoretically surprising because pitch-level information could justify mid-at-bat replacement, but the authors attribute much of this to convention. Second, the opponent’s pull decision changes own-team behavior: “the probability of pulling the starter increases by 5.3 percentage points when the opposition team has pulled their starter first” [PAGE 3]. Yet the authors find no significant outcome interaction from this conformity, suggesting that the decision is socially influenced but not necessarily outcome-changing [PAGE 4]. Overall, the paper’s deepest claim is not that managers are infallible, but that accumulated ecological learning, stable rules, and rich situational feedback may have reduced major systematic bias in this highly incentivized setting.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let normalized game time be \(t \in [0,1]\), dimensionless, where \(t=0\) is the start of the game and \(t=1\) is the end of regulation. Let the starter’s runs density be \(f(t)\), with units of expected runs per unit normalized game time. The source assumes starters fatigue or decline with repeated exposure: “starters tire throughout the game, on average” [PAGE 5]. Formally,

\[
f(t) \ge 0,\qquad f'(t) > 0,\qquad f(0)=0.
\]

Expected runs allowed by the starter from time \(0\) to a pull time \(\tau\) are

\[
R_{\text{starter}}(\tau)=\int_0^\tau f(s)\,ds,
\]

with units of runs.

Let \(g(\tau)\) denote the bullpen’s average expected runs per unit normalized game time if the bullpen is first called at time \(\tau\). The source assumes later bullpen usage has lower average quality because of fatigue and depletion: “the average runs per inning of bullpen usage (for the remainder of the game) that declines when the bullpen is called on later in the game” [PAGE 6]. Formally,

\[
g'(\tau)<0,
\]

and the paper also finds it useful to assume

\[
g''(\tau)<0
\]

without loss of generality for its exposition [PAGE 6]. If the bullpen is called at \(\tau\), it covers \((1-\tau)\) units of remaining game time, so expected bullpen runs are

\[
R_{\text{bullpen}}(\tau)=g(\tau)(1-\tau).
\]

The aggregate expected runs for the game under pull time \(\tau\) are therefore

\[
J(\tau)=\int_0^\tau f(s)\,ds+g(\tau)(1-\tau),
\]

with units of runs.

Differentiate:

\[
J'(\tau)=f(\tau)-g(\tau)+g'(\tau)(1-\tau).
\]

Set \(J'(\tau^*)=0\):

\[
f(\tau^*)+g'(\tau^*)(1-\tau^*)=g(\tau^*).
\]

Because \(g'(\tau^*)<0\) and \(1-\tau^*>0\) for an interior solution, this implies

\[
f(\tau^*)-g(\tau^*)=-g'(\tau^*)(1-\tau^*)>0.
\]

This is the paper’s Proposition 3.1: at the expected-runs minimizing pull time, the starter’s current runs density exceeds the bullpen’s average runs density [PAGE 6]. In probabilistic terms, if runs allowed proxy win probability, the optimal pull should produce a discontinuous improvement in current-inning run expectation, while leaving game-level win probability unchanged on the margin.

The second derivative is

\[
J''(\tau)=f'(\tau)+g''(\tau)(1-\tau)-2g'(\tau).
\]

The source describes this as weakly positive under its maintained assumptions, implying convexity of \(J(\tau)\) around the optimum [PAGE 6]. Breakdown regimes are exact and important:

1. If \(g'(\tau)=0\) over a region, the future-cost term vanishes and the strict proposition fails; the manager may be indifferent at \(f(\tau)=g(\tau)\).
2. If \(\tau^*=1\) is a boundary solution, then \(1-\tau^*=0\), so the strict inequality collapses to \(f(1)=g(1)\).
3. If \(f'(\tau)\le 0\) or \(g''(\tau)\) is sufficiently negative, \(J(\tau)\) may fail convexity, producing multiple local optima or corner solutions.
4. If reliever quality is matchup-specific rather than smooth, \(g(\tau)\) may have discontinuities, and the derivative-based argument becomes an approximation.

The empirical model is a linear probability model. For observation \(i\), define \(PS_i=1\) if the starter is pulled at the start of at-bat \(i\), otherwise \(0\). Let \(Y_i\) be either \(Win_i\) or \(Runs_i\), where \(Runs_i=1\) if at least one run is scored in the inning during or after the at bat. The baseline estimating equation is

\[
Y_i=\beta_{PS}PS_i+\beta_X X_i+\beta_{PS\times X}(PS_i\cdot X_i)+\gamma W_i+\alpha_{s(i)}+\varepsilon_i,
\]

where \(X_i\) are starter and bullpen characteristics interacted with \(PS_i\), \(W_i\) are non-interacted controls, and \(\alpha_{s(i)}\) is a saturated score-inning-baserunner-outs fixed effect [PAGE 10]. The fixed effect is described as “a fully saturated set of score-inning-baserunner-outs fixed effects” [PAGE 10]. Given the sample restrictions, the state space includes three score differences, three innings, eight base-runner configurations, and three out counts, yielding \(3\times 3\times 8\times 3=216\) saturated cells.

The coefficient \(\beta_{PS}\) has probability units: it is the marginal change in the probability of the outcome when \(PS_i\) switches from 0 to 1, holding covariates fixed. If \(\beta_{PS}>0\) for \(Win_i\), the source interprets this as evidence that starters are pulled too late; if \(\beta_{PS}<0\), too soon; if \(\beta_{PS}=0\), consistent with approximate optimality [PAGE 10]. The identifying assumption is conditional ignorability: “unobservables randomly drive variation in the PS decision, and are not systematically correlated with both PS and Y” [PAGE 11]. This is a selection-on-observables assumption, not a randomized experiment.

The preferred win-probability estimate is precisely near zero. The source reports a 95% confidence interval of \([−0.014, 0.018]\) [PAGE 17]. In probability units, this is a narrow interval around zero. The runs model yields a different prediction: pulling the starter reduces the probability of allowing at least one run in the inning by “approximately two percentage points” [PAGE 17]. This is exactly the theoretical pattern: current-inning run expectation improves, but game-win probability does not necessarily change because of future bullpen cost.

The alternative managerial-quality equation uses Manager of the Year voting, \(MoY_i\), as a proxy for decision quality:

\[
PS_i=\beta_{MoY}MoY_i+\beta_X X_i+\gamma W_i+\alpha_{s(i)}+\varepsilon_i
\]

[PAGE 13]. The source finds “MoY has no significant effects on PS” [PAGE 20], which is consistent with high-quality managers not systematically deviating from the average pull policy, though MoY does predict wins in a placebo-style check [PAGE 20].

The appendix constructs “lucky runs” using expected runs created by pitch. For a plate appearance or pitch transition, run contribution is

\[
\Delta RE = RE_{\text{end}}(b_{\text{end}},o_{\text{end}})-RE_{\text{start}}(b_{\text{start}},o_{\text{start}})+r,
\]

where \(RE\) is run expectancy in runs, \(b\) is base state, \(o\) is out state, and \(r\) is actual runs scored on the play. The source states that the expected run contribution is “the ending run expectancy state – determined by men on base, the number of outs, and/or the count – minus the starting run expectancy state, plus the number of runs actually scored as a result of the play” [PAGE 29].

The spatial “lucky” model is a “semiparametric generalized additive model” [PAGE 29]. A formal representation is

\[
RC_p=s_h(H_p,x_p,z_p)+s_c(C_p,x_p,z_p)+s_s(S_p,x_p,z_p)+\sum_k \beta_k T_{pk}+\beta_v V_p+\varepsilon_p,
\]

where \(RC_p\) is expected runs created by pitch \(p\), \(x_p,z_p\) are horizontal and vertical plate locations, \(H_p\) is batter/pitcher handedness context, \(C_p\) is ball-strike count, \(S_p\) is season, \(T_{pk}\) are pitch-type indicators, and \(V_p\) is velocity. Velocity is reported in miles per hour in the source; the SI equivalent is \(v_{\text{SI}}=0.44704\,V_p\ \mathrm{m\,s^{-1}}\). The breakdown regime is extrapolation outside the estimated strike-zone, count, season, and pitch-type support, plus measurement error in pitch classification.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s intellectual lineage is explicitly historical. It builds on Ganeshapillai and Guttag’s earlier finding that managers differ from estimated optimal pull choices in 48% of late close situations, with about 90% of mistakes being leaving the pitcher in too long [PAGE 2]. Finigan, Mills, and Stone extend that question by asking whether the objective should be current-inning run prevention or game winning. Their answer is that the earlier “too late” mistakes may be consistent with optimal behavior once future bullpen cost is considered [PAGE 2]. This is a retro-causal correction: a result that looks like bias under a current-inning objective can become optimal under a game-level objective.

The deeper lineage is baseball’s long institutional learning curve. The source notes that “there was a steady downward trend in the mean time that starters were pulled from approximately 1970 through the early 2000s, most of which occurred before the so-called ‘sabermetrics’ revolution” [PAGE 3]. This matters because it suggests that managerial learning is not merely an individual-career phenomenon. Norms, player specialization, bullpen construction, and inherited tactical conventions can transmit learning across generations. The stability of baseball rules reinforces this: the source points to the 1973 designated hitter rule as a major stability anchor [PAGE 3]. In other words, the environment was stable enough for slow institutional learning to accumulate.

A major multi-week trap is the seasonal trend in pitcher usage. The source observes that recent analytics may have shifted pull timing: “There is evidence that analytics have affected decision-making in the last two seasons of our sample as starters are pulled somewhat earlier on average than in the rest of the sample” [PAGE 2]. If an analyst pools multiple weeks or seasons without controlling for secular trend, a spurious “bias” can appear merely because the baseline usage pattern is moving. The authors address this with year fixed effects and month fixed effects [PAGE 12], and they check robustness by dropping the last two seasons [PAGE 5].

Another multi-week trap is roster expansion. The authors exclude September games: “we restrict our sample to pre-September games to minimize the influence of both of these issues” [PAGE 5]. September call-ups, expanded rosters, and non-competitive developmental usage can distort both the treatment and the outcome. They also exclude postseason games because “strategic decisions in these games are fundamentally different” due to the limited horizon [PAGE 5]. These exclusions are crucial for a genealogy of bias: postseason incentives, short-series leverage, and roster construction are not the same as regular-season learning.

A third trap is managerial quality measurement. The authors use Manager of the Year votes as a three-year moving average [PAGE 13]. This introduces a retro-causal smoothing problem: award voting may reflect past success, narrative, or market size, not only current decision quality. Their finding that MoY does not predict pull timing, but does predict wins in a placebo-style check, is therefore a useful but imperfect validation [PAGE 20].

Finally, the paper’s genealogy includes the “hot hand” and recency literature. The source cites the possibility that managers overreact to recent performance, including lucky runs, and constructs a pitch-location-based luck variable to test this [PAGE 13]. The multi-week trap here is that recent at-bat events can be correlated with true fatigue, injury, or matchup changes. If a manager reacts to a signal that is actually informative, the behavior may look biased to a naive evaluator. The source’s conclusion is cautious: experience likely reduces bias, but the amount of experience required can be large and context-dependent [PAGE 3].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The decision to pull a starter is recursive because the manager must model not only the current pitcher’s state, but also the future bullpen state, the opponent’s likely response, and the informational content of recent events. The source identifies several psychological channels: conformity, omission bias, inattention, recency bias, hot-hand bias, confirmation bias, and primacy bias [PAGE 1]. The most relevant for crisis decision-making is omission bias: “The omission bias— the bias toward favoring errors of omission and not commission (in our context, pulling the starter)” can make leaving the starter in the default action [PAGE 1]. Under pressure, the path of least regret is often to avoid the visible intervention.

A recursive model can be expressed as a belief-state problem. Let \(\theta_t\) be the latent physical state of the starter, including fatigue, injury risk, and command degradation. The manager observes signals \(S_t\), such as pitch count, velocity, recent batted-ball outcomes, walks, hits, and luck-adjusted outcomes. The manager chooses action \(a_t\in\{\text{stay},\text{pull}\}\). The ideal decision maker compares expected current runs and future bullpen cost:

\[
a_t^* = \arg\min_{a_t} \mathbb{E}\left[ R_{\text{current}}(a_t,\theta_t,S_t) + R_{\text{future}}(a_t,\theta_t,S_t)\mid \mathcal{F}_t \right],
\]

where \(\mathcal{F}_t\) is the manager’s information set. The source’s empirical analogue is the linear probability model, where the pull decision is regressed on situational and player-quality controls [PAGE 10].

Crisis habit regression occurs when high leverage pushes the manager toward the conventional default: leave the starter in until a clean stopping point. The strongest evidence for this is the between-at-bat regularity: “in 99.3% of cases starters pulled in our sample, this occurred in between, rather than during, at bats” [PAGE 3]. This is a habit or convention trap because pitch-level information could justify a mid-at-bat pull, but the managerial action space is constrained by ritualized stopping points. The recursive belief problem is truncated: even if \(\theta_t\) deteriorates sharply during an at-bat, the manager may not update the action until the at-bat ends.

The counter-trap is overreaction to recent outcomes. A manager may treat recent hits, walks, or runs as stronger evidence of fatigue than they really are. The source tests this with interactions of \(PS_i\) with last-three walks, hits, pitch count, runs, and lucky runs [PAGE 13]. It finds that the sign pattern can be rational if managers distinguish lucky from deserved outcomes: “the negative sign indicates that starters are less likely to be pulled when recent hitters got more lucky runs” [PAGE 14]. However, for outcomes, the authors find only marginal evidence of overreaction: “significance of these results is somewhat marginal and magnitudes are small” [PAGE 20]. Thus, the counter-trap is present but weak in this setting.

The clock trap is the temporal structure of baseball. The game clock is not continuous in the model’s empirical implementation; it is discretized into innings, outs, score state, and base-runner state. The saturated fixed effects absorb clock-level run expectancy [PAGE 10]. The theoretical clock is continuous \(t\in[0,1]\), but the observed decision occurs only at discrete stopping points. This mismatch creates a gray-zone: the model says optimal pull timing is continuous, but the institutional clock forces action into discrete at-bat boundaries.

Opponent conformity is another recursive layer. The manager observes the opposing manager’s decision and updates not only about the game state but also about social norms. The source finds that “the probability of pulling the starter increases by 5.3 percentage points when the opposition team has pulled their starter first” [PAGE 3]. Yet the outcome interaction is not significant: “we do not find significant interaction effects between the opposition’s decision and the team’s own decision on game outcomes” [PAGE 4]. This suggests that the opponent’s action is an informational or conformity signal, but not a large causal lever on win probability in the observed sample.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A cross-layer veto is required because the paper’s reduced-form win-probability model cannot, by itself, adjudicate physical, biomechanical, or environmental constraints that may make a pull optimal even when short-run win probability appears unchanged.

The first veto layer is biomechanical. The source controls for pitcher condition using “Pitch Count” and “Recent Fastball” [PAGE 11]. Pitch Count is defined relative to the starter’s average pitch count when pulled, and Recent Fastball is the recent fastball velocity relative to early-game velocity [PAGE 11]. These are proxies for fatigue, but they do not capture full injury risk. A pitcher can have stable velocity while accumulating microtrauma, altered mechanics, or elevated joint stress. If the true objective includes long-run health, then a pull that has zero short-run win-probability effect may still be correct. Conversely, leaving a pitcher in because win probability is unchanged could be physically negligent. Therefore, any model that vetoes a pull solely on the basis of \(\beta_{PS}\approx 0\) for wins is incomplete.

The second veto layer is bullpen physiology. The source includes “Lag BP Pitch Ct, 2nd Lag BP Pitch Ct” to control for recent bullpen workload [PAGE 12]. This is important because reliever quality is not fixed. A reliever who has pitched in the previous two days may be less effective, more injury-prone, or less available. The theoretical function \(g(\tau)\) is supposed to capture declining bullpen quality, but the empirical controls are coarse. If a manager pulls a starter to avoid overusing a starter with hidden injury risk, the model’s win-probability coefficient may not capture the benefit. This is a physical veto: the observed run environment is only one layer of the true objective function.

The third veto layer is weather and park environment. The source controls for home status, year fixed effects, and month fixed effects [PAGE 12], but it does not list game-level weather controls such as temperature, wind, precipitation, or humidity. Baseball run scoring is environmentally sensitive. Wind direction can change home-run probability; temperature can affect ball flight; precipitation can affect grip, command, and scheduling. If weather affects both the manager’s pull decision and run scoring, then omitted weather becomes a confounder. Formally, if the true expected runs function is

\[
J(\tau;\phi,\omega),
\]

where \(\phi\) is pitcher physical state and \(\omega\) is weather, and the empirical model estimates \(J(\tau)\) while omitting \(\omega\), then the estimated \(\beta_{PS}\) is biased if

\[
\operatorname{Cov}(PS_i,\omega_i\mid \text{controls})\neq 0.
\]

The source’s month and year fixed effects partially absorb seasonal climate patterns, but they do not fully absorb game-specific weather shocks. Therefore, a cross-layer veto says: do not conclude that a pull is globally optimal from win-probability invariance alone if physical health, bullpen rest, or weather may be systematically related to the decision.

A final veto concerns the objective function. The paper emphasizes that current-inning run prevention and game winning can diverge [PAGE 6]. But a real manager may also care about playoff positioning, player development, long-term health, and contract considerations. The source acknowledges that teams may have objectives beyond winning the current game, especially late in the season [PAGE 4]. Thus, the reduced-form win model is a partial-equilibrium veto, not a complete welfare proof. The correct adjudication is hierarchical: first, check whether physical or environmental constraints invalidate the observed run response; second, check whether the manager’s objective includes unobserved costs; third, only then interpret the near-zero win-probability coefficient as evidence of approximate optimality.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
1. Within-at-bat information counterfactual  
Counterfactual: if managers were fully responsive to pitch-level fatigue information, they would sometimes replace the starter during an at-bat when the starter’s velocity, command, or pitch quality deteriorates sharply. Verifiable prediction: under a pitch-level fatigue signal, mid-at-bat replacement should reduce expected current-inning runs relative to a matched control where the pitcher stays in. The source’s theoretical model supports this because current pitching quality should improve at the optimal pull time [PAGE 6]. However, the observed institution is overwhelmingly between-at-bat: “in 99.3% of cases starters pulled in our sample, this occurred in between, rather than during, at bats” [PAGE 3].  
RLVR veto: if a within-at-bat intervention does not produce a measurable reduction in expected runs or win probability after controlling for base-out state, pitch count, velocity, and hitter quality, the counterfactual is vetoed. The source’s own evidence vetoes the claim that managers already exploit most within-at-bat information; instead, it suggests convention dominates the action space.

2. Recency-bias counterfactual  
Counterfactual: if managers overreact to recent non-lucky events, then interactions between pull decisions and recent walks, hits, or runs should predict worse outcomes, especially higher current-inning run probability. Verifiable prediction: \(PS_i\times Last3Hits_i\), \(PS_i\times Last3Walks_i\), and \(PS_i\times Last3Runs_i\) should have positive and economically meaningful coefficients in the runs model, and possibly negative coefficients in the win model, after controlling for luck. The source finds some evidence of overreaction in the runs model, but immediately qualifies it: “