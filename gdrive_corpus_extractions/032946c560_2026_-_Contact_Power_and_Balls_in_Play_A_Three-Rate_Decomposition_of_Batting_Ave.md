---
source: "2026 - Contact, Power, and Balls in Play A Three-Rate Decomposition of Batting Average and the Disappearance of the .400 Hitter - Albert.pdf"
folder: "/GSE-Research/sports-research-papers/library/preprints/arXiv/2026"
pages: 14
model: deepseek/deepseek-v4.1-flash-1017
words: 7101
---

<NATIVE_REASONING>
We need answer user asks: DRIVE SOURCE given. Need produce GSE+GSI Frontier Reasoning Foundry output with exact XML sections, >=1000 words, zero betting lines, zero toy equations, cite [PAGE N] and verbatim quotes where source pages provided. Need analyze paper, deep multi-hop derivation, gray-zone audit. Need perhaps identify traps: "Contact, Power, and Balls in Play" Albert 2026 preprint. Need discuss formal LaTeX equations, units, assumptions, exact singularity/breakdown regimes. Need sections:
<THINK_TRACE> >=400 words deep multi-hop derivation & gray-zone audit.
<SOURCE_OPERATORS_AND_EQUATIONS> Formal LaTeX, units, page citations, breakdown.
<RETROCAUSAL_GENEALOGY> Historical/scientific lineage & multi-week traps.
<RECURSIVE_THEORY_OF_MIND> Crisis habit regression vs counter-trap vs clock.
<CROSS_LAYER_VETO_ADJUDICATION> Physical/biomechanical/weather veto proof.
<RLVR_COUNTERFACTUAL_VETOES> 3 verifiable RLVR veto scenarios + predictions.

Need avoid betting lines. No spreads/totals/moneylines/odds. Can mention sports analytics without betting. Need probably answer with a "drive source analysis" not directly user question? The source is a paper. Need synthesize. Need include exact quotes and page markers. Need maybe note no weather/biomechanical data in source, so veto proof must rely on source's limitations: BABIP defense, park, baseball environmental; no biomechanics/weather details; cannot validate weather veto from source. Cross-layer veto adjudication: physical/biomechanical/weather veto proof. Need state "veto" if claims exceed paper evidence. Could formulate: physical layer = at-bat event tree, disjoint sets; biomechanical = contact/power skill proxies only; weather = absent, park/environment confound noted. "Veto proof" means no layer can rescue a claim not identified by paper; e.g., BABIP talent correlation intervals include zero; cannot assert BABIP skill. Need maybe "weather veto: no weather variable in model; any weather-based prediction is outside identified covariance and therefore vetoed unless exogenous data supplied." Need cite [PAGE 12] limitations: "home-run rates depend on parks and on the baseball itself, so part of what we call power is environmental." [PAGE 12]. "BABIP reflects both contact quality and defense; batted-ball tracking data could separate the two." [PAGE 12]. This supports cross-layer.

Need formal equations. Use exact equations from paper:
BA = c{h+(1-h)b}=cf, f = h+(1-h)b. c=(AB-SO)/AB, h=HR/(AB-SO), b=(H-HR)/(AB-SO-HR). [PAGE 2-3].
Var(log BA)=Var(log c)+Var(log f)+2Cov(log c, log f). [PAGE 4].
Var(log f) approx 1/fbar^2[(1-bbar)^2 Var(h)+(1-hbar)^2 Var(b)+2(1-bbar)(1-hbar)Cov(h,b)]. [PAGE 4].
Random effects: AB_i-SO_i ~ Bin(AB_i,c_i); logit(c_i)=mu_c+u_i; HR_i ~ Bin(AB_i-SO_i,h_i); logit(h_i)=mu_h+v_i; H_i-HR_i ~ Bin(AB_i-SO_i-HR_i,b_i); logit(b_i)=mu_b+w_i; (u,v,w)^T ~ N3(0,Sigma). [PAGE 5-6].
Reliability: tau_i^2 = 1/{n p_hat(1-p_hat)}; w_i=sigma^2/(sigma^2+tau_i^2). [PAGE 7].
Shrinkage: theta_hat_i = Sigma (Sigma+T_i)^{-1} z_i. [PAGE 7].
Cov approximation: Cov(c,f) ≈ (1-bbar) Cov(c,h)+(1-hbar) Cov(c,b). [PAGE 10].
Need units: rates dimensionless proportions; logits dimensionless; variances in squared logit/natural-log units; n counts at-bats; covariance units squared log-odds? Actually Cov(c,f) on rate scale (proportion^2); log variance dimensionless (squared log proportion). Reliability dimensionless. Profile intervals dimensionless. Need mention no SI units because sports rates are dimensionless; maybe "dimensionless proportion (equivalently, fraction of at-bats)" and "variance in nats^2? Natural log of dimensionless ratio; logit also dimensionless". Need be precise: log BA natural log of dimensionless proportion, variance dimensionless (squared natural-log units, nats^2 if using natural log). Logit log(p/(1-p)) dimensionless. Sampling variance tau^2 dimensionless on logit scale. Cov(c,f) proportion^2. Need formal assumptions and singularity/breakdown regimes:
- Identity exact when AB>0 and denominators positive; h denominator AB-SO >0; b denominator AB-SO-HR >0. If AB-SO=0 (all strikeouts), h undefined, f undefined; if AB-SO-HR=0 (all non-strikeouts are HR), b undefined. If AB=0 undefined. The paper adds 1/2 to success/failure counts for zero HR finite [PAGE 7].
- Binomial conditional independence assumption: disjoint at-bat sets; if at-bat classification not disjoint or AB includes sacrifices etc? Paper notes b omits sacrifice flies from denominator [PAGE 2]; at-bats exclude walks/HBP/sacrifices [PAGE 12]. Breakdown if denominator zero or if events not nested/disjoint.
- Random-effects normality on logit; Laplace approximation; single-season fit; correlations near boundary? Sigma must be positive definite; profile intervals; if variance component near zero, correlation undefined/unstable. ρ intervals for cb and hb include zero [PAGE 6]. Breakdown for small n, separation, zero HR.
- Var(log f) linearization singular when fbar=0 or h+... near zero; if hbar=1 or bbar=1? Approx terms vanish; if f near zero log undefined. For baseball f not near zero. Also if bbar=1 (all balls in play hits) then coefficient (1-bbar)=0; if hbar=1 all non-K HR; unrealistic.
- Cov approximation singular if cbar fbar=0 when dividing. Paper divides by cbar fbar [PAGE 11]. If cbar or fbar zero undefined.
- Historical noise correction: subtract average sampling variance; if observed variance less than sampling variance, negative talent variance possible; paper uses average, not per-player; breakdown in small n/decade sparse. 2020 drops out due no 300 AB [PAGE 5]. 300 AB threshold truncation [PAGE 12].
- Reliability: p_hat 0 or 1 -> tau infinite/undefined; they add 1/2 to counts [PAGE 7]. w_i bounded 0-1 if sigma^2>0; if sigma^2=0 reliability zero? Actually if no talent variance, w=0; correlation undefined.
- Shrinkage matrix invertible if Sigma+T_i positive definite; if T_i singular? T_i diag positive if n>0; if n=0 undefined. If Sigma singular (perfect correlation) inverse issue; model estimate not boundary maybe.
- Trivariate model conditional independence: if at-bat sets overlap due HR included in H? Need note H includes HR, but H-HR and HR disjoint; AB-SO includes HR and balls in play; nested decomposition ensures disjoint. If data has missing SO (Negro Leagues excluded) cannot compute c/h/b [PAGE 3].
- Historical: excludes Negro Leagues due incomplete strikeout records [PAGE 3]; selection bias. The paper's historical claims are associational, not causal: "establishes when... not why" [PAGE 12].
Need maybe mention "no betting lines" not mention. Fine.

Need produce >=1000 words across exact XML sections. We can write maybe 1800-2500 words. Desired oververbosity 5. We need include >=400 words in THINK_TRACE. Need all sections. Need not include extra outside sections? Could include only XML. Need ensure exact XML tags. No markdown? XML okay. Need not mention betting. Need cite pages and verbatim quotes. Need use quotes from source exactly with [PAGE N]. Need ensure quotes are verbatim. Let's collect exact quotes:

Page 1 abstract: "Batting average factors exactly as BA = c {h + (1 −h) b}, where c is the rate of avoiding a strikeout, h is the home-run rate among non-strikeout at-bats, and b is batting average on balls in play (BABIP)." [PAGE 1]
"Over 19 consecutive-season pairs the median year-to-year correlation is 0.86 for c, 0.74 for h and 0.41 for b; batting average (0.44) is no more repeatable than BABIP." [PAGE 1]
"talent correlation between contact and power of -0.67 (95% profile interval -0.75 to -0.57)" [PAGE 1]
"negative covariance between c and f, which was near zero in the dead-ball era, explains why batting averages have become less dispersed, and so why no one has hit .400 since 1941." [PAGE 1]
Page 2: "An at-bat ends in a strikeout or it does not; a non-strikeout at-bat is a home run or a ball in play; and a ball in play is a hit or an out." [PAGE 2]
"Whether a ball in play falls for a hit depends also on fielders, parks and chance." [PAGE 2]
"Because ch = HR/AB and c(1−h)b = (H −HR)/AB," [PAGE 2-3] Need maybe quote "BA = H/AB = c {h + (1 −h) b} = c f, f = H/(AB −SO) = h + (1 −h) b" [PAGE 3] exact? Page 3 shows:
BA = H
AB = c {h + (1 −h) b} = c f,
f =
H
AB −SO = h + (1 −h) b,
(2)
Exactly. Could format equation.
"Among the 2025 hitters the identity holds to within 1e-16; 3 of them hit no home runs." [PAGE 3]
"All data come from the Lahman database..." [PAGE 3]
"the 20,357 American, National and Federal League player-seasons from 1901 to 2019 with at least 300 at-bats and a recorded strikeout total; the Negro Leagues, recently added to the database, are excluded because their strikeout records are incomplete." [PAGE 3]
Page 4: "At the two-factor level the correlation between c and f is -0.40 (-0.50 to -0.29)." [PAGE 4]
"Taking logarithms of (2) gives log BA = log c + log f, so the cross-sectional variance decomposes exactly as" [PAGE 4]
"In 2025 the three terms are 0.0072, 0.0095 and -0.0066, summing to 0.0102." [PAGE 4]
"Subtracting the average binomial variance p(1 −p)/n from each observed variance removes 66% of the variance of b but only 21% of that of h, after which the home-run and BABIP terms account for 55% and 65% of the total." [PAGE 4]
Page 5: "A rate that measures ability should be repeatable." [PAGE 5]
"The 2020 season, in which almost no one reached 300 at-bats, drops out, leaving 19 pairs with a median of 183 hitters each." [PAGE 5]
"Contact and home-run rates repeat closely (r = 0.82 and 0.73); BABIP barely does (r = 0.28)." [PAGE 5]
"the composite is no more repeatable than its noisiest component." [PAGE 5]
Page 6: "Given the abilities, the three binomial outcomes are conditionally independent because they are determined by disjoint sets of at-bats." [PAGE 6]
"The estimated correlation between contact and home-run abilities is ˆρch = −0.67, noticeably stronger than the raw correlation of -0.53." [PAGE 7? Actually 5.2 starts page 7. Need cite [PAGE 7].)
"Sampling noise inflates the variance of each observed rate without changing their covariance, so observed correlations are attenuated toward zero (Spearman, 1904); the model removes that attenuation." [PAGE 7]
Page 7: "we add 1/2 to success and failure counts so that a season with no home runs remains finite." [PAGE 7]
"the reliability is 0.91 for contact, 0.76 for home runs and 0.30 for BABIP." [PAGE 7]
"Judge’s observed .384 becomes an estimated ability of 0.308, close to the league mean of 0.299, and Aranda’s .414 becomes 0.326." [PAGE 7]
Page 8: "Gould (1986, 1996) argued that .400 disappeared not because hitters became worse but because the distribution of batting averages narrowed: as play improved and the talent pool deepened, the distance between ordinary and exceptional hitters shrank, trimming both tails." [PAGE 8]
"The standard deviation of batting average among qualifiers did fall, from 0.037 in the 1900s to 0.030 in the 1940s (about 19%), and has been nearly constant since (0.029 in the 2010s; Figure 5a)." [PAGE 8]
Page 9: "Strikeout avoidance did not homogenize. Its talent variance on the log scale grew by a factor of about 4.6 from the 1900s to the 2010s." [PAGE 9]
"The talent variance of finishing roughly halved (ratio 0.50), consistent with Gould’s picture of a converging talent pool." [PAGE 9]
"The two factors were essentially uncorrelated in the dead-ball era (talent correlation 0.09), while since the 1960s the observed correlation has stayed between -0.38 and -0.31 (talent correlation -0.53 in the 2010s)." [PAGE 9]
"Combining the 2010s talent variances of log c and log f with the 1900s covariance gives 0.0132, essentially the dead-ball level." [PAGE 9]
"Gould’s account is therefore incomplete: a .400 season requires excellence in both c and f at once, and the modern game rarely produces that combination." [PAGE 9]
Page 10: "The correlation between contact and home runs was close to zero in the 1900s (-0.04), when home runs were rare, fell to -0.40 in the 1920s as the home run entered the game, and reached -0.58 by the 2010s." [PAGE 10]
"The home-run term accounts for 76% of Cov(c, f) in the 1960s and 80% in the 2010s, and for more than all of it from the 1920s through the 1950s, when the BABIP term was slightly positive." [PAGE 10]
Page 10-11: "In the 1900s the average qualifying hitter homered in about one of every 200 non-strikeout at-bats (¯h = 0.005), and home runs accounted for only 1% of the variation in finishing rates; finishing was essentially BABIP. By the 2010s the mean home-run rate was about nine times higher (¯h = 0.045), and home runs accounted for 25% of that variation (40% once sampling noise is removed)." [PAGE 10-11? The text spans page 10 to 11. Page 10 ends "Over the century the talent variance of h" and page 11 starts with figure? Wait page 10 has section 6.3 starting and text: "In the 1900s the average qualifying hitter homered..." at bottom of page 10? Page 10 text after table: "In the 1900s the average qualifying hitter homered in about one of every 200 non-strikeout at-bats (¯h = 0.005), and home runs accounted for only 1% of the variation in finishing rates; finishing was essentially BABIP. By the 2010s the mean home-run rate was about nine times higher (¯h = 0.045), and home runs accounted for 25% of that variation (40% once sampling noise is removed). Over the century the talent variance of h" then page 11 starts? Actually page 11 begins with figures then section 6.4? The provided page 11 starts "Contact vs finishing..." figure caption then 6.4. Wait page 10 ended with "Over the century the talent variance of h" and page 11 starts with figure 6, then "grew about 33-fold..." Maybe quote spans page 10-11: "grew about 33-fold, while that of b fell to 0.64 of its 1900s level. Power became a second, growing dimension along which hitters differ, and it is the dimension that trades off against contact." [PAGE 11]. But exact page split ambiguous. Use [PAGE 10-11]? They asked exact [PAGE N] markers; can use [PAGE 10] or [PAGE 11] only? Better use [PAGE 10] for first quote and [PAGE 11] for latter. Need careful.

Page 11: "Roughly three-quarters of the reduced dispersion of modern batting-average talent is attributable to the trade-off between avoiding strikeouts and hitting home runs." [PAGE 11]
Page 12: "The historical analysis establishes when the contact–power trade-off emerged, not why." [PAGE 12]
"BABIP reflects both contact quality and defense; batted-ball tracking data could separate the two." [PAGE 12]
"home-run rates depend on parks and on the baseball itself, so part of what we call power is environmental." [PAGE 12]
"at-bats exclude walks, hit-by-pitches and sacrifices, so the rates describe the at-bat outcomes that enter batting average rather than all plate appearances." [PAGE 12]
"the 300-at-bat threshold selects hitters whose teams kept playing them, which may truncate the lower tails of the rates." [PAGE 12]
"the model is fit to one season at a time; a model with player effects shared across seasons, or a fully Bayesian fit with priors on Σ (Gelman and Hill, 2007), would give sharper estimates and full posterior uncertainty for the correlations." [PAGE 12]
Page 14 appendix: "In 2025 the approximation is within 5.2% of the exact value. Across the twelve decades from the 1900s to the 2010s the relative error has median 0.9% and maximum 2.4%." [PAGE 14]
"Approximation (7), divided by ¯c ¯f, reproduces the exact 2010s value of Cov(log c, log f) to four decimal places (-0.0033 versus -0.0033)." [PAGE 14]
"Noise corrections subtract the average binomial sampling variance from each observed variance: p(1 −p)/n on the rate scale, with n = AB for c, AB −SO for h and AB −SO −HR for b, and (1 −p)/(np) on the log scale. Covariances are not corrected, because the three rates are computed from disjoint sets of at-bats and their sampling errors are independent." [PAGE 14]

Need include "exact singularity/breakdown regimes". We can state:
1. Algebra singularities: AB=0; AB=SO; AB=SO+HR. Also H<HR impossible; if data errors cause.
2. Log transform singularities: BA=0 -> log undefined; c=0; f=0; b? log f if f=0. In MLB sample none. For small samples zero HR: h=0 finite but logit(h) -inf; they add 1/2 counts.
3. Variance decomposition exact only for positive BA; with zero hits log BA = -inf. Covariance term can make Var(log BA) negative if linearization or noise correction misapplied; exact identity ensures observed nonnegative.
4. Linearization singular when fbar→0 or cbar fbar→0; approximation error grows; paper reports 5.2% 2025, median 0.9%, max 2.4% across decades [PAGE 14].
5. Random-effects model: Sigma positive definite; if sigma_b→0 correlation undefined; profile intervals; if n small, Laplace approximation poor; if perfect separation/no HR, penalization needed. Conditional independence requires disjoint at-bat sets; if denominator not nested/disjoint, model mis-specified.
6. Historical noise correction: negative talent variance if sampling variance exceeds observed; decade grouping small n; exclusion of Negro Leagues and 300 AB threshold selection.
7. Causal breakdown: observational covariance not causal; "when not why" [PAGE 12]; environmental confounds [PAGE 12]; no weather/biomechanics variables. This is cross-layer veto.

Need maybe discuss "crisis habit regression vs counter-trap vs clock" in RECURSIVE_THEORY_OF_MIND. This is a weird section. Need interpret: "Crisis habit regression" maybe from GSE/GSI prompt? It asks: "Crisis habit regression vs counter-trap vs clock." Need produce a theory-of-mind/decision analysis around the paper? Maybe analyze how an analyst/model might react to crisis (e.g., .400 disappearance, BABIP noise) by regressing to habits (overweight batting average, narratives), counter-trap (overcorrecting to power/contact trade-off), and clock (historical era/time). Need define:
- Crisis habit regression: when seeing .400 vanish, analyst regresses to old habit of treating BA as monolithic skill/luck or "talent convergence" (Gould). The paper counters: contact variance grew, finishing variance halved; covariance drives narrowing [PAGE 9]. Habit regression would ignore decomposition.
- Counter-trap: overcorrecting by treating BABIP as pure noise or contact-power trade-off as immutable law. Paper says BABIP reliability 0.30, not zero; talent correlations with b weak and intervals include zero [PAGE 6-7]; historical correlation emerged over decades, not always [PAGE 10]; causal why unknown [PAGE 12]. Counter-trap would over-shrink BABIP or assert universal trade-off.
- Clock: era/time dependence; dead-ball vs modern; 2020 season drops; 19 pairs; single-season model; multi-week traps: use 2025 cross-section as eternal; ignore era; confuse observed attenuation with talent; use 300 AB threshold.
Need maybe mention "recursive theory of mind" = modeling other analysts/modelers beliefs. Could write: A rational analyst should represent three competing internal models: (i) habit model BA=skill+luck; (ii) counter-trap model all BABIP noise/all contact-power fixed; (iii) clock model parameters drift by era. The paper's evidence adjudicates: use three-rate decomposition, era-specific covariance, and uncertainty intervals. "Crisis habit regression" could be "when .400 disappears, regression to Gould's convergence story" but paper says incomplete. "Counter-trap" = "if contact-power trade-off explains 72%, then every low-contact power hitter must have low BABIP" but ρhb=-0.23 interval includes zero and average shift only 0.004 [PAGE 7]. "Clock" = "2025 is one season; historical decade estimates; 2020 missing; single-season model." Multi-week traps: overreact to one season; ignore profile intervals; treat 0.30 reliability as zero; treat 0.67 correlation as causal; use 300 AB truncation. Need include in RECURSIVE_THEORY_OF_MIND.

Need CROSS_LAYER_VETO_ADJUDICATION: "Physical/biomechanical/weather veto proof." Need define layers:
- Physical/event layer: exact nested at-bat tree. Veto if a claim violates denominator disjointness, e.g., attributing BABIP to power without separating HR, or using plate appearances as at-bats. Source says at-bats exclude walks/HBP/sacrifices [PAGE 12]; b differs from conventional BABIP by omitting sacrifice flies [PAGE 2]. So any model that mixes plate appearances and at-bats is vetoed.
- Biomechanical layer: contact rate and HR rate are skill proxies; source has no exit velocity/launch angle; BABIP reflects contact quality and defense [PAGE 12]. Veto if asserting biomechanical mechanism from correlations alone; no batted-ball tracking. The contact-power correlation -0.67 is talent correlation from random effects [PAGE 6-7], not a biomechanical law. It cannot adjudicate swing path or injury. Veto claims about "bat speed causes BABIP" absent tracking.
- Weather/environment layer: no weather variables; HR rates depend on parks and baseball [PAGE 12]. Veto any weather attribution; cannot separate park/weather/baseball from power. Historical covariance could be confounded by era environment; paper says "when not why" [PAGE 12]. Weather veto proof: if a claim says a specific weather event changed BA/BABIP, source lacks data and model; therefore veto; need external weather join at game/player level and hierarchical model. Also "physical" could include park dimensions; no data.
Need maybe "veto proof" means prove no layer can override identified statistical result. Use "veto" as "claim rejected". Could present a table? XML text okay. Need no markdown table maybe okay but simpler prose.

Need RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = reinforcement learning with verifiable rewards? Need create counterfactual scenarios with clear prediction and falsification. Need no betting. Could formulate:
1. Zero-HR season: If a hitter has HR=0 and AB-SO>0, h=0; logit(h) undefined/infinite. The paper's 1/2-count correction yields finite estimate. Prediction: without correction model fails/separates; with correction h estimate shrinks near league mean and reliability lower. Veto if code produces NaN/Inf or claims exact zero talent. Test on 2025 3 no-HR hitters [PAGE 3] and add 1/2 counts [PAGE 7].
2. BABIP-only noise counterfactual: Set σ_b=0 in model (5), refit. Prediction: reliability for b becomes 0; Judge's BABIP estimate shrinks fully to league mean; but observed b variance still 66% noise [PAGE 4]; if model with σ_b=0 predicts same or better out-of-sample? Actually prediction: σ_b=0 yields worse fit? Need verifiable: compare AIC/likelihood or out-of-sample 2024-2025 correlation; paper says b reliability 0.30, not zero [PAGE 7]. Veto scenario: if someone claims BABIP is pure noise, counterfactual σ_b=0 should fit worse and fail to reproduce 0.41 median year-to-year correlation and 0.30 reliability. Prediction: estimated σ_b>0 with interval (0.053,0.100) [PAGE 6]; pure-noise model rejected by likelihood ratio or interval excluding 0. But paper's interval for σ_b (0.053,0.100) excludes zero. Good.
3. Causal contact-power counterfactual: Remove HR channel from 2010s covariance as paper: set (1-bbar)Cov(c,h)=0; prediction Var(log BA) talent becomes 0.0112, 72% of gap from actual 0.0059 to dead-ball 0.0132 [PAGE 11]. Veto if alternative decomposition (e.g., BABIP channel) recovers more; test by recomputing Eq (7) with decade data; if BABIP term removal recovers <72%, contact-power claim holds. Need maybe "prediction: exact 2010s Cov(log c, log f) -0.0033; HR term removal gives -0.0007 and Var 0.0112" [PAGE 11, PAGE 14]. Good.
Could also use "weather confound" counterfactual but need 3 scenarios. Need "verifiable RLVR veto scenarios" maybe each has state/action/reward? Could define:
- Scenario A: denominator singularity (AB=SO or AB=SO+HR). Prediction: identity undefined; any model imputing 0 or 1 without correction fails invariance; correct code returns NA or uses penalized counts. Test with synthetic player AB=10 SO=10 HR=0; c=0, h undefined. Veto if output finite h without flag.
- Scenario B: σ_b=0 pure noise. Prediction: likelihood worsens; reliability 0; contradicts 0.30 and 0.41. Veto pure-noise claim.
- Scenario C: remove contact-HR covariance. Prediction: Var(log BA) 0.0112; 72% gap; if not reproduced, claim false. Veto claims attributing narrowing primarily to BABIP/talent convergence.
Need maybe include "RLVR" as "verifiable reward" by exact numeric checks. Could state "Each scenario is a unit test with a predicted numeric or logical outcome; failure vetoes the claim." Good.

Need ensure >=1000 words. We'll write robustly. Need "ZERO TOY EQUATIONS": don't invent fake ratios like Force/Fatigue. We can use only source equations. No invented ratios? We need not invent. We can define "reliability" from source. We can mention "72%" etc. No fake equation. Avoid "causal score" etc. Good.

Need "ZERO BETTING LINES": avoid words "odds", "spread" maybe "spread" appears in source? Source uses "spread of talent"; but user says never mention spreads, totals, moneylines, or odds. Does "spread" as statistical dispersion count? They said betting lines: "spreads, totals, moneylines, or odds." To be safe, avoid word "spread" entirely? But source uses "spread" in "spread of talent" and "spread of contact ability". The invariant says never mention spreads; maybe they mean betting spreads. But to be safe, avoid "spread" word, use "dispersion" or "variation". Avoid "odds" too. "log-odds" is statistical, but contains odds. Hmm invariant says never mention odds; but log-odds is formal. Could use "logit" instead of "log-odds". Avoid "odds" entirely. Avoid "moneyline", "total". "Totals" maybe "total variance"; avoid "total"? The invariant specifically betting lines; but safe avoid "total" as noun? We can say "sum" instead of total. Avoid "spread" word. Need mention "variance decomposition" not "spread". Good.

Need "exact singularity/breakdown regimes" formal. Use "undefined" etc.

Need maybe mention paper's AI disclosure? Not necessary but could in genealogy? Maybe "AI collaboration disclosure [PAGE 13]" if relevant? Not needed.

Need answer only XML sections. Ensure each section present exactly. Word count likely >1000. Need maybe 2000 words. Let's draft.

Structure:

<THINK_TRACE>
- Multi-hop: start from identity BA=H/AB. Decompose event tree. Define c,h,b. Show exact algebra: H=HR+(H-HR); AB=(AB-SO)+(SO). Then H/AB = c[h+(1-h)b]. Check units. Then discuss variance decomposition log. Then random effects. Then historical. Gray-zone audit: what is identified vs assumed; sampling noise correction; attenuation; conditional independence; selection; causal. Need >=400 words. Include quotes and page cites. Need maybe 600-800 words.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
- List equations with LaTeX and units/assumptions/breakdown. Include exact citations. Maybe 600 words.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
- Historical lineage: Efron-Morris empirical Bayes, Brown, Bickel, Albert 2005/2016, McCracken, Tango, Gould, Spearman attenuation, Lord-Novick reliability, lme4 Laplace. Multi-week traps: treating 2025 as universal, ignoring era, confounding attenuation, overinterpreting correlation, 2020 drop, 300 AB threshold, Negro Leagues exclusion. 300 words.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
- Crisis habit regression vs counter-trap vs clock. 300 words.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
- Physical/biomechanical/weather veto. 300 words.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
- 3 scenarios with predictions. 300 words.
</RLVR_COUNTERFACTUAL_VETOES>

Need total maybe 2200 words. Good.

Let's ensure all quotes are verbatim. Need use "ˆρ" maybe not exact. Use ρ_hat. Use "BA = c {h + (1 −h) b}" with spaces. Fine.

Let's write carefully. Avoid "spread" word. Use "dispersion". Avoid "odds". Use "logit". Avoid "betting". Good.

Need maybe "source pages provided" cite exact [PAGE N]. We can cite multiple. Use page markers in each section.

Let's draft in final. Need no markdown? XML tags and text, can use LaTeX. Fine.

Need mention "SI/information/probability units": We'll state rates are dimensionless proportions; logit/log natural dimensionless; variance of log proportion in squared natural-log units (nats^2); covariance in proportion^2. Probability units are dimensionless in [0,1]. Counts in at-bats. No SI units apply. This satisfies.

Need mention "exact singularity/breakdown regimes" in SOURCE section. Good.

Need "formal LaTeX equations" use display math? In XML text, LaTeX inline okay. Could use \[ \]? XML not issue. But tags parse? If answer not parsed, fine. Use `\( \)`? We can use LaTeX plain. Need avoid `<` in text? Could use "less than" rather than <. XML tags maybe no issue if not parsed. But to be safe, avoid raw ampersands? We can use "and". Use "95%". Fine.

Need maybe include "AB-SO-HR > 0" not raw `<`. Use "positive". Good.

Let's compose final.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s central move is algebraic before it is statistical. Start from the box-score identity \(BA=H/AB\). The event tree is exhaustive and nested: an at-bat ends in a strikeout or it does not; a non-strikeout at-bat is a home run or a ball in play; a ball in play is a hit or an out [PAGE 2]. That gives three denominators: \(AB\) for contact avoidance, \(AB-SO\) for finishing, and \(AB-SO-HR\) for balls in play. The decomposition is not a model; it is an identity: \(BA=c\{h+(1-h)b\}=cf\), with \(c=(AB-SO)/AB\), \(h=HR/(AB-SO)\), \(b=(H-HR)/(AB-SO-HR)\), and \(f=H/(AB-SO)=h+(1-h)b\) [PAGE 2-3]. The paper states “the identity holds to within 1e-16” among 2025 hitters [PAGE 3]. This exactness matters because every later variance statement is anchored to a known accounting identity, not to a regression.

The first multi-hop step is the logarithmic variance decomposition. Since \(BA=cf\), \(\log BA=\log c+\log f\), so \(\operatorname{Var}(\log BA)=\operatorname{Var}(\log c)+\operatorname{Var}(\log f)+2\operatorname{Cov}(\log c,\log f)\) [PAGE 4]. In 2025 the three terms are 0.0072, 0.0095, and -0.0066, summing to 0.0102 [PAGE 4]. The negative covariance is not a nuisance; it is the object of historical interest. A second hop linearizes \(f=h+(1-h)b\) to attribute \(\operatorname{Var}(\log f)\) to home runs, BABIP, and their overlap [PAGE 4]. The paper reports that the approximation is within 5.2% in 2025 and has median relative error 0.9% and maximum 2.4% across the twelve decades [PAGE 14]. That is an audited approximation, not a hidden assumption.

The third hop separates observed variation from sampling noise. Subtracting the average binomial variance \(p(1-p)/n\) removes 66% of the variance of \(b\) but only 21% of that of \(h\) [PAGE 4]. This is why the raw cross-section can overstate BABIP as a “skill” and understate power. The random-effects model then formalizes the nested binomial structure: \(AB_i-SO_i\sim\operatorname{Bin}(AB_i,c_i)\), \(HR_i\sim\operatorname{Bin}(AB_i-SO_i,h_i)\), and \(H_i-HR_i\sim\operatorname{Bin}(AB_i-SO_i-HR_i,b_i)\), with logits \(\mu_c+u_i\), \(\mu_h+v_i\), and \(\mu_b+w_i\), where \((u_i,v_i,w_i)^\top\sim N_3(0,\Sigma)\) [PAGE 5-6]. The paper explicitly justifies conditional independence: “Given the abilities, the three binomial outcomes are conditionally independent because they are determined by disjoint sets of at-bats” [PAGE 6]. The estimated contact–power talent correlation is \(\hat\rho_{ch}=-0.67\) with profile interval \((-0.75,-0.57)\); BABIP correlations are weak and their intervals include zero [PAGE 6]. The attenuation logic is also explicit: sampling noise inflates each observed variance but not the covariance, so observed correlations are attenuated toward zero [PAGE 7].

The historical hop converts the covariance into a counterfactual. Gould argued that .400 disappeared because batting-average dispersion narrowed as the talent pool deepened [PAGE 8]. The paper agrees that the standard deviation fell from 0.037 in the 1900s to 0.030 in the 1940s and has been near 0.029 since [PAGE 8], but it disagrees with the mechanism. Contact talent variance grew by about 4.6 times, finishing talent variance roughly halved, and the two factors were essentially uncorrelated in the dead-ball era before becoming strongly negative [PAGE 9]. Combining 2010s talent variances with the 1900s covariance returns 0.0132, essentially the dead-ball level [PAGE 9]. The contact–home-run channel accounts for 76% of \(\operatorname{Cov}(c,f)\) in the 1960s and 80% in the 2010s [PAGE 10]; removing it gives a 2010s talent variance of 0.0112, 72% of the way from the actual value to the dead-ball counterfactual [PAGE 11]. The gray-zone audit is that this is a covariance decomposition, not a causal proof: the paper itself says the historical analysis establishes “when the contact–power trade-off emerged, not why” [PAGE 12].

The main gray zones are therefore: denominator singularities, logit boundaries, attenuation, selection via the 300-at-bat threshold, exclusion of Negro Leagues due incomplete strikeout records [PAGE 3], single-season model fitting [PAGE 12], and environmental confounding from parks and the baseball itself [PAGE 12]. None of these invalidates the exact identity; they bound what can be inferred from the identity. The correct reading is: use the three-rate decomposition as an accounting and reliability framework, use the random-effects correlations as noise-corrected associations, and use the historical covariance as an era-specific decomposition rather than a universal law.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source uses dimensionless rate variables because batting average, contact rate, home-run rate, BABIP, and finishing rate are proportions of counts. Counts are in at-bats; log and logit transforms are dimensionless; variances of log proportions are in squared natural-log units; variances and covariances of rates are in proportion-squared units. No SI unit applies. Probability values lie in \([0,1]\).

**1. Exact three-rate identity.** For \(AB>0\), \(AB-SO>0\), and \(AB-SO-HR>0\):
\[
c=\frac{AB-SO}{AB},\qquad
h=\frac{HR}{AB-SO},\qquad
b=\frac{H-HR}{AB-SO-HR},
\]
\[
BA=\frac{H}{AB}=c\{h+(1-h)b\}=cf,\qquad
f=\frac{H}{AB-SO}=h+(1-h)b.
\]
The paper states: “Batting average factors exactly as BA = c {h + (1 −h) b}” [PAGE 1], and “BA = H/AB = c {h + (1 −h) b} = c f” [PAGE 3]. The denominators are disjoint: \(HR/AB=ch\) and \((H-HR)/AB=c(1-h)b\) [PAGE 2-3]. Assumption: the at-bat event tree is exhaustive and nested as described [PAGE 2]. Breakdown regimes: \(AB=0\); \(AB-SO=0\) (all at-bats are strikeouts, so \(h\) and \(f\) are undefined); \(AB-SO-HR=0\) (all non-strikeout at-bats are home runs, so \(b\) is undefined); or data errors with \(H<HR\). The paper notes that its \(b\) differs from conventional BABIP “only in omitting sacrifice flies from the denominator” [PAGE 2], and that at-bats exclude walks, hit-by-pitches, and sacrifices [PAGE 12]. Any model that mixes plate appearances with at-bats breaks the identity.

**2. Exact logarithmic variance decomposition.**
\[
\operatorname{Var}(\log BA)
=
\operatorname{Var}(\log c)
+
\operatorname{Var}(\log f)
+
2\operatorname{Cov}(\log c,\log f).
\]
This follows from \(\log BA=\log c+\log f\) [PAGE 4]. In 2025 the terms are 0.0072, 0.0095, and -0.0066, summing to 0.0102 [PAGE 4]. Assumption: positive \(BA\), \(c\), and \(f\), so logarithms are defined. Breakdown: \(BA=0\), \(c=0\), or \(f=0\) gives undefined logarithms; the identity still holds on the rate scale, but the variance decomposition does not. The negative covariance means observed batting-average dispersion is 39% smaller than under independence in 2025 [PAGE 4].

**3. Linearized finishing variance.**
\[
\operatorname{Var}(\log f)
\approx
\frac{1}{\bar f^{2}}
\left[
(1-\bar b)^2\operatorname{Var}(h)
+
(1-\bar h)^2\operatorname{Var}(b)
+
2(1-\bar b)(1-\bar h)\operatorname{Cov}(h,b)
\right].
\]
The paper gives this approximation about \(\bar h,\bar b,\bar f\) [PAGE 4]. The three 2025 terms are 0.0029, 0.0080, and -0.0008, with shares 29%, 80%, and -8%; the sum is within 5.2% of exact \(\operatorname{Var}(\log f)\) [PAGE 4]. Across decades the median relative error is 0.9% and the maximum 2.4% [PAGE 14]. Breakdown: \(\bar f\to 0\) makes the factor \(1/\bar f^2\) singular; \(\bar b=1\) or \(\bar h=1\) degenerates individual terms; strong nonlinearity or extreme means degrades the first-order expansion.

**4. Trivariate binomial random-effects model.**
\[
AB_i-SO_i\sim\operatorname{Bin}(AB_i,c_i),\quad
\logit(c_i)=\mu_c+u_i,
\]
\[
HR_i\sim\operatorname{Bin}(AB_i-SO_i,h_i),\quad
\logit(h_i)=\mu_h+v_i,
\]
\[
H_i-HR_i\sim\operatorname{Bin}(AB_i-SO_i-HR_i,b_i),\quad
\logit(b_i)=\mu_b+w_i,
\]
\[
(u_i,v_i,w_i)^\top\sim N_3(0,\Sigma).
\]
This is model (5) [PAGE 5-6]. Assumptions: conditional binomial outcomes, logit-normal random effects, unstructured positive-definite \(\Sigma\), and conditional independence from disjoint at-bat sets [PAGE 6]. The paper fits by maximum likelihood with the Laplace approximation in lme4 and uses profile-likelihood intervals for variance components [PAGE 6]. Breakdown: \(\Sigma\) must be positive definite; if a variance component is near zero, the corresponding correlation is weakly identified or undefined; if a rate has zero successes, the logit is at a boundary, which is why the paper adds \(1/2\) to success and failure counts “so that a season with no home runs remains finite” [PAGE 7]. Small \(n\), separation, and single-season fitting make the Laplace approximation and correlation intervals fragile [PAGE 12].

**5. Reliability and trivariate shrinkage.**
\[
\tau_i^2=\frac{1}{n\hat p(1-\hat p)},\qquad
w_i=\frac{\sigma^2}{\sigma^2+\tau_i^2},
\]
\[
\hat\theta_i=\Sigma(\Sigma+T_i)^{-1}z_i.
\]
The sampling variance formula and reliability ratio are given on [PAGE 7]; the shrinkage estimator is equation (6) [PAGE 7]. Units: \(\tau_i^2\) and \(\sigma^2\) are logit-scale variances; \(w_i\) is dimensionless in \([0,1]\); \(z_i\) is a vector of observed logits minus means; \(T_i=\operatorname{diag}(\tau_{i,c}^2,\tau_{i,h}^2,\tau_{i,b}^2)\). Assumptions: normal approximation to the binomial likelihood on the logit scale, positive trials, and positive-definite \(\Sigma+T_i\). Breakdown: \(\hat p=0\) or \(1\) makes \(\tau_i^2\) infinite or undefined without continuity correction; \(n=0\) is undefined; if \(\Sigma\) is singular, the inverse in equation (6) fails. The paper reports mean reliabilities of 0.91 for contact, 0.76 for home runs, and 0.30 for BABIP [PAGE 7].

**6. Contact–finishing covariance attribution.**
\[
\operatorname{Cov}(c,f)
\approx
(1-\bar b)\operatorname{Cov}(c,h)
+
(1-\bar h)\operatorname{Cov}(c,b).
\]
This is equation (7) [PAGE 10]. Dividing by \(\bar c\bar f\) approximates \(\operatorname{Cov}(\log c,\log f)\); the paper reports that for the 2010s it gives -0.0033, matching the exact value [PAGE 11], and that approximation (7) reproduces the exact 2010s value to four decimal places [PAGE 14]. Breakdown: \(\bar c\bar f=0\) makes the division singular; the approximation is a covariance attribution, not a causal identification statement. The paper’s own limitation is decisive: “The historical analysis establishes when the contact–power trade-off emerged, not why” [PAGE 12].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage runs through empirical Bayes and reliability theory. Batting average was a running example for Efron and Morris and for Brown’s in-season empirical Bayes work [PAGE 1]; the paper’s shrinkage equation reduces to James–Stein shrinkage when \(\Sigma\) is diagonal [PAGE 7]. Bickel used a two-factor version of the identity to explain why .400 became hard [PAGE 2], and Albert’s earlier work modeled hitting rates separately and recombined component forecasts [PAGE 2]. The new contribution is the joint three-rate structure: the paper asks how the abilities are correlated once sampling noise is removed, and how that correlation changed historically [PAGE 2]. McCracken’s argument that pitchers have little control over hits on balls in play underlies the BABIP-as-luck tradition [PAGE 2], while Gould supplies the historical puzzle: .400 disappeared as batting-average dispersion narrowed [PAGE 8]. The paper refines Gould by showing that contact variance grew, finishing variance halved, and the negative contact–finishing covariance did the narrowing work [PAGE 9]. The statistical genealogy also includes Spearman attenuation [PAGE 7] and Lord–Novick reliability [PAGE 7].

Multi-week traps follow from that genealogy. The first trap is to treat the 2025 cross-section as a permanent law: the 2025 contact–power correlation is -0.67 [PAGE 6], but the historical correlation was near zero in the 1900s and only became strongly negative later [PAGE 10]. The second trap is to ignore attenuation: the raw contact–power correlation is -0.53, while the noise-corrected talent correlation is -0.67 [PAGE 7]; using the raw value understates the trade-off. The third trap is to overcorrect in the opposite direction and treat BABIP as pure noise: its single-season reliability is 0.30, not zero [PAGE 7], and its talent standard deviation interval is (0.053, 0.100) [PAGE 6]. The fourth trap is selection: the 300-at-bat threshold may truncate lower tails [PAGE 12], the 2020 season drops out because almost no one reached 300 at-bats [PAGE 5], and the Negro Leagues are excluded because strikeout records are incomplete [PAGE 3]. The fifth trap is causal overreach: parks and the baseball itself make part of “power” environmental [PAGE 12], and BABIP reflects contact quality and defense [PAGE 12]. The correct multi-week posture is to keep the exact identity fixed, re-estimate era-specific covariance terms, and treat correlations as noise-corrected associations rather than immutable causal parameters.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
A recursive analyst should model three competing internal habits. **Crisis habit regression** is the reflex to explain the disappearance of .400 by a single story: either hitters became worse or talent converged. The paper blocks that reflex: contact talent variance grew by about 4.6 times, finishing talent variance roughly halved, and the negative covariance between the factors did most of the narrowing [PAGE 9]. The habit model also treats batting average as one binomial proportion, but the paper shows it is a composite whose noisiest component, BABIP, is no more repeatable than the composite itself [PAGE 1, PAGE 5]. **Counter-trap** is the overcorrection: “BABIP is noise, therefore ignore it,” or “contact and power always trade off, therefore every low-contact power hitter must have low BABIP.” The paper’s own estimates resist that: BABIP reliability is 0.30, not 0 [PAGE 7]; \(\hat\rho_{cb}=-0.22\) and \(\hat\rho_{hb}=-0.23\) have intervals that do not clearly exclude zero [PAGE 6]; and the correlation terms shift the average BABIP estimate by only 0.004 [PAGE 7]. The contact–power trade-off is strong, but it is era-dependent, not a universal deterministic law [PAGE 10]. **Clock** is the time-sensitive model: parameters must be indexed by era, season, and sample. The 2020 season drops out of the repeatability analysis [PAGE 5], the historical covariance changes by decade [PAGE 9-10], and the model is fit to one season at a time [PAGE 12]. A recursive theory of mind should therefore hold three beliefs simultaneously: the exact identity is timeless; the reliability hierarchy is fairly stable in the modern sample; and the covariance structure is historically contingent. The counter-trap is to let either the habit model or the counter-trap model become a clock-free absolute. The paper’s gray-zone discipline is to let the identity veto denominator errors, let the reliability estimates veto “all noise” or “all skill” claims, and let the era-specific covariance veto universal causal stories.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
**Physical/event-layer veto.** The exact identity vetoes any claim that mixes at-bats with plate appearances or double-counts home runs. The paper defines \(b\) with denominator \(AB-SO-HR\) and notes that its \(b\) omits sacrifice flies [PAGE 2]; it also notes that at-bats exclude walks, hit-by-pitches, and sacrifices [PAGE 12]. A model that uses plate appearances as the denominator, or that counts home runs both in \(h\) and in \(b\), violates the disjoint-set structure that justifies conditional independence [PAGE 6]. That is a physical accounting veto, not a modeling preference.

**Biomechanical-layer veto.** The paper has no exit velocity, launch angle, bat speed, or injury variable. It explicitly says “BABIP reflects both contact quality and defense; batted-ball tracking data could separate the two” [PAGE 12]. Therefore any biomechanical claim that a specific swing change caused a specific BABIP change is outside the identified model. The contact–power correlation \(\hat\rho_{ch}=-0.67\) [PAGE 6] is a noise-corrected talent association between rates, not a biomechanical mechanism. A biomechanical layer can only be admitted with batted-ball tracking or physical measurement; otherwise the claim is vetoed as unmeasured mechanism.

**Weather/environment-layer veto.** The paper has no weather, park, or baseball-construction variable in the model. It warns that “home-run rates depend on parks and on the baseball itself, so part of what we call power is environmental” [PAGE 12]. Thus a weather attribution for a change in home-run rate or BABIP is vetoed unless external game-level weather and park data are joined and modeled. The historical covariance result is especially vulnerable: the paper says it establishes “when the contact–power trade-off emerged, not why” [PAGE 12]. Weather or environmental change could be part of the “why,” but the source cannot adjudicate it. The cross-layer proof is therefore negative: no physical, biomechanical, or weather layer can rescue a claim that the source does not identify. The source identifies the accounting identity, the reliability hierarchy, the noise-corrected correlations, and the era-specific covariance decomposition; it does not identify causal mechanism, weather effects, or biomechanical pathways.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
**Scenario 1: Denominator singularity test.** Take a synthetic hitter with \(AB=10\), \(SO=10\), \(HR=0\). Then \(c=0\) and \(AB-SO=0\), so \(h\) and \(f\) are undefined. Prediction: a correct implementation must return undefined or apply an explicitly stated continuity correction; it must not silently impute a finite home-run rate. The paper’s own practice is to add \(1/2\) to success and failure counts “so that a season with no home runs remains finite” [PAGE 7]. Veto rule: if a pipeline outputs a finite \(h\) for this case without flagging the boundary, the pipeline is invalid. A second test with \(AB=10\), \(SO=0\), \(HR=10\) gives \(AB-SO-HR=0\), so \(b\) is undefined; the same veto applies.

**Scenario 2: Pure-noise BABIP counterfactual.** Set \(\sigma_b=0\) in model (5), meaning BABIP ability has zero variance. Prediction: the fitted model should assign zero reliability to \(b\), shrink every hitter’s BABIP fully to the league mean, and fit worse than the estimated model with \(\hat\sigma_b=0.078\) and interval (0.053, 0.100) [PAGE 6]. The observed data also predict this veto: BABIP’s median year-to-year correlation is 0.41 and its single-season reliability is 0.30 [PAGE 1, PAGE 7], while subtracting sampling noise removes 66% of its variance but leaves nonzero talent variance [PAGE 4]. Veto rule: a claim that BABIP is “pure noise” is rejected if the \(\sigma_b=0\) model fails likelihood comparison, fails to reproduce the 0.30 reliability, or cannot reproduce the observed 2024–2025 BABIP correlation of 0.28 [PAGE 5].

**Scenario 3: Contact–power covariance removal.** Reproduce the 2010s counterfactual by setting the home-run term in equation (7) to zero while keeping the BABIP term. Prediction: \(\operatorname{Cov}(\log c,\log f)\) moves from the exact 2010s value of -0.0033 to about -0.0007, and the talent-scale variance of \(\log BA\) becomes 0.0112, which is 72% of the way from the actual 2010s value 0.0059 to the dead-ball covariance counterfactual 0.0132 [PAGE 11, PAGE 14]. Veto rule: if removing the BABIP channel instead recovers most of the gap, or if the home-run removal does not reproduce approximately 0.0112 and 72%, then the paper’s attribution to the contact–power channel is falsified for that decade. This is a verifiable numerical counterfactual because the paper supplies the exact 2010s values and the approximation’s four-decimal agreement [PAGE 14].
</RLVR_COUNTERFACTUAL_VETOES>