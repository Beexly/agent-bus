---
source: "2025 - A Run Expectancy Approach to Lead Distance Optimization in Major League Baseball - Dodson et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Wharton Sports Analytics Journal/2025"
pages: 15
model: deepseek/deepseek-v4.1-flash-1017
words: 7704
---

<NATIVE_REASONING>
We need answer as GSE+GSI frontier reasoning foundry. Must adhere strict invariants. User gave drive source pages and asks? They just provide source and instructions. We need produce analysis with exact XML sections >=1000 words total, THINK_TRACE >=400. No betting lines/odds (avoid "odds" even though source uses odds; can say exponentiated coefficients? Invariant says never mention spreads totals moneylines or odds. We can say "multiplicative effect on logit scale" or "exp(beta)"? "odds" word prohibited. Avoid. Need cite exact [PAGE N] markers and verbatim quotes from source. Need formal LaTeX equations, units, assumptions, singularity/breakdown regimes. Must include >=3 verifiable RLVR veto scenarios + predictions. Need discuss physical/biomechanical/weather veto proof. Cross-layer veto adjudication. Recursive theory of mind: crisis habit regression vs counter-trap vs clock. Retrocausal genealogy historical/scientific lineage & multi-week traps. Need deep multi-hop derivation & gray-zone audit.

We must not invent toy equations. We can formalize from paper: xRuns = 0.20 1{SB} -0.45 1{CS} -0.45 1{PK}, logistic models, conditional probabilities. Units: lead L ft, sprint s ft/s, pop p s, Threat θ per 100 IP (Net Bases Prevented scaled). xRuns units runs. Logistic inverse logit. Optimize bounded support. Breakdown regimes: L outside observed support, perfect separation, collinearity intent/L, sparse PK/CS events, independence assumption, no intent, context averaged linear weights, pitch independence, sample selection called pitches. Singularity: argmax at boundary if xRuns monotone; no interior turning point; model extrapolation; exp coefficients huge; logistic saturation P→0/1 causing gradient vanish; finite data separation; co-movement L with intent (endogeneity), etc.

Need discuss source citations exact. We can quote from pages. Need page markers like [PAGE 4 of 15]. Verbatim quotes exact.

Need word count >1000. Let's draft thorough but not too huge? Desired oververbosity 5, but requirements heavy. Need include all sections exact XML tags. Ensure no betting lines. Avoid "odds". Source includes "odds" but we can quote? Invariant says never mention odds. If quote includes "odds", that violates? Better avoid quoting sentences with "odds". Use quotes that don't include odds. We can paraphrase multiplicative effects. But exact verbatim quote can be chosen without odds. Need cite exact [PAGE N]. Use quotes from abstract, methodology, results, limitations.

Need structure:

<THINK_TRACE> >=400 words. Multi-hop derivation: process nested: once runner on first, PO attempt, PK|PO, ATT|¬PO, SB|ATT. Let L lead. X=(θ,p,s). Equations. Derive P(PK)=P(PK|PO)P(PO). P(ATT|L,X)=P(ATT|¬PO,X)(1-P(PO|L,θ)). P(SB)=P(SB|ATT,L,X)P(ATT|L,X). P(CS)=[1-P(SB|ATT,L,X)]P(ATT|L,X). Expected xRuns. For fixed X, optimize. The derivative dE/dL = 0.20 dP_SB/dL -0.45 dP_CS/dL -0.45 dP_PK/dL. Need derive derivative expressions maybe using logistic derivative σ'(z)=σ(z)(1-σ(z)). Break down: L* interior if derivative crosses. If no crossing, boundary. The paper says "well-defined maximum" [PAGE 11]. Observed mean +0.19, steal attempts +0.67 [PAGE 6/7]. Case study PCA 11.46 lead, L*=10.37, deviation 1.09 [PAGE 7]. Need audit: mean deviation cannot be interpreted as causal overaggression because intent unobserved; selection; L observed with measurement; conditional expectation linear weights context averaged; no game state. Also "we intentionally exclude primary lead L" [PAGE 4?] quote. Need mention.

<SOURCE_OPERATORS_AND_EQUATIONS> Formal LaTeX. Include all equations and assumptions, units, page citations. Breakdown regimes exact. Cite pages: abstract [PAGE 1], data [PAGE 3-4], equations [PAGE 4-5], tables [PAGE 6-7], results [PAGE 7], limitations [PAGE 12]. Need quote exact: "A runner’s primary lead off first base creates leverage to steal second but also exposure to pickoffs." [PAGE 1]. "We map stage probabilities to expected runs via fixed linear weights (+0.20 for a successful steal; -0.45 for caught stealing or picked off)" [PAGE 1]. "we restrict to the state with a runner on first and second/third empty." [PAGE 3]. "we intentionally exclude the primary lead L and treat P(ATT | ¬PO, θ, p, s) as the runner’s baseline green-light probability" [PAGE 4]. "using R’s optimize() function over a bounded domain L restricted to the observed support of leads in our data." [PAGE 5]. "All interpretations below are associative (not causal)" [PAGE 5]. "This distribution is approximately normal and is centered at +0.19 ft." [PAGE 6]. "higher mean deviation from our estimated optimal lead (+0.67 ft)." [PAGE 7]. "In our sample, the Philadelphia Phillies and St. Louis Cardinals exhibit the largest mean absolute deviations..." [PAGE 13]. Could use.

Need mention "Threat, θ (per 100 IP): ... θ = 100 NBP/IP" [PAGE 3-4]. Actually formula appears "θ = 100 NBP IP" likely \frac{100 NBP}{IP}. Quote exact maybe "Baseball Savant’s Net Bases Prevented ... scaled to 100 innings pitched, θ = 100 NBP IP ; higher values indicate better control of the running game." [PAGE 3-4]. We can write \theta = 100 \times \mathrm{NBP}/\mathrm{IP}. Units NBP per 100 IP? Need state.

Need exact logistic equations. In formal LaTeX:
P(PO\mid L,\theta)=\operatorname{logit}^{-1}(\alpha_0+\alpha_1 L+\alpha_2\theta)
P(PK\mid PO,L,\theta)=...
P(ATT\mid\neg PO,\theta,p,s)=...
P(SB\mid ATT,L,\theta,p,s)=...
Then derived:
P(PK\mid L,\theta)=P(PK\mid PO,L,\theta)P(PO\mid L,\theta)
P(ATT\mid L,X)=P(ATT\mid\neg PO,\theta,p,s)(1-P(PO\mid L,\theta))
P(SB\mid L,X)=P(SB\mid ATT,L,X)P(ATT\mid L,X)
P(CS\mid L,X)=(1-P(SB\mid ATT,L,X))P(ATT\mid L,X)
E[xRuns\mid L,X]=0.20P(SB)-0.45P(CS)-0.45P(PK)
L* = argmax over L in observed support.
Need units: xRuns runs; L ft; s ft/s; p s; theta NBP per 100 IP; coefficients per unit. Logit argument dimensionless. Note exp coefficients multiplicative on logit scale, not probability.

Assumptions: binary events independent conditional? They model nested conditional events; each pitch independent? Paper says limitation: "Our model also treats each pitch as independent" [PAGE 12]. Need cite. "linear weights ... context-averaged" [PAGE 12]. "we do not observe intent to steal" [PAGE 12]. Need mention.

Breakdown regimes:
- L outside observed support: polynomial/logistic extrapolation invalid; argmax may be boundary; paper restricts.
- Sparse PK/CS: rare events cause separation, unstable coefficients (Table 3 intercept -10.958, SE 0.699; Table 5 intercept -12.2, SE 2.219) and large SE; predictions near 0.
- L-intent simultaneity/endogeneity: if intent co-moves with L, P(ATT) misspecified; observed deviation reflects intent not suboptimal lead. Paper says "lead distance L may co-move with intent" [PAGE 12].
- Context averaging: fixed weights not state-specific; Table 1 shows state variations (0.237 vs -0.588) [PAGE 2]; use of fixed +0.20/-0.45 can misrank. Quote "substituting in context-dependent expected run calculations from a table like Table 1 would yield situation-specific recommendations" [PAGE 12].
- Independence of pitches: serial adaptation; repeated measures; clustered by runner/pitcher/catcher; CI issues.
- Selection: only pickoffs and sample of called pitches; under-represents swing outcomes [PAGE 12].
- Model saturation: logit probabilities near 0/1; gradient small; derivative zero at extremes; L* may not be unique.
- Logistic coefficients: exp(beta) per foot etc. Need not mention odds. Use "logit-scale shift".
- "Threat" coefficient negative in PO attempt model but positive in PK success and negative in ATT and SB; multi-hop net effect ambiguous. Important audit: θ increases? PO attempt decreases (β2=-0.0125) but PK|PO increases (β2=0.1763); steal attempt decreases (-0.0969); SB|ATT decreases (-0.0603). Thus total effect on xRuns not simple; can create nonmonotone. Also pop time p appears only stages ATT and SB; longer p increases ATT and SB (positive coefficients), which seems counterintuitive? Wait longer pop time = slower catcher, should increase attempt and success. Yes. Sprint speed s positive ATT (0.6153) and weak SB (0.0770 p=0.0814). Lead positive PO attempt and PK|PO, positive SB|ATT; tradeoff. Need mention. In pickoff attempt model, higher Threat (better hold) associated with lower throw-over? That's odd; but maybe Threat is net bases prevented, not attempt propensity. Need audit: "higher values indicate better control of running game" [PAGE 4]; coefficient -0.0125 means better Threat associated with lower PO attempt probability holding lead fixed, while PK|PO positive. This can be counterintuitive and suggests Threat proxy conflates attempt suppression and success. Need gray-zone.

<RETROCAUSAL_GENEALOGY> Historical/scientific lineage and multi-week traps. Discuss Deadball, 1930s-50s, Brock/Henderson, Wills 1962 [PAGE 1-2]. Bill James two-thirds rule [PAGE 2]. Sabermetrics linear weights, Table 1 FanGraphs RE24 [PAGE 2]. Turocy game theory [PAGE 2-3], Kagan physics [PAGE 3], Lindbergh tracking [PAGE 3]. The present paper nested logistic + optimization. Multi-week traps: (1) treating associative coefficients as causal; (2) assuming lead independent of intent; (3) using fixed linear weights as universal; (4) extrapolating optimal lead beyond observed support; (5) aggregating team/runners with small samples; (6) ignoring repeated measures and selection. Need "retrocausal genealogy" means trace how ideas from past shape current model and traps. We can mention "two-thirds breakeven" is not directly used in model but informs intuition. Avoid betting lines? "break even" maybe okay? It's not betting line? But to be safe, use "two-thirds success heuristic" not odds. Bill James argued steal must succeed about two-thirds. That's not betting line. Fine.

<RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock. Need interpret: recursive theory of mind—runner/pitcher/catcher strategic beliefs. Crisis habit regression: under pressure, runner reverts to habitual lead/steal aggression; counter-trap: defense anticipates runner's optimal lead and manipulates hold/pickoff; clock: pitch clock, counts, game state. Need connect to model: unobserved intent, green light, nested decision. Discuss if runner uses model L*, pitcher knows and adjusts θ/PO, causing Stackelberg/leader-follower; simultaneous move inspection game Turocy. The paper's model is not game-theoretic optimization with strategic response; it treats X fixed. Recursive ToM: runner believes pitcher won't throw over; pitcher believes runner will go; catcher pop time. Crisis habit regression: observed +0.67 on steal attempts may reflect intent, not habit; under pressure runners may take larger leads or freeze. Counter-trap: defense may allow larger lead to bait pickoff; model's P(PO|L) may be nonstationary under strategic response. Clock: pitch clock affects timing, lead, pitcher cadence; not in data. Need mention "multi-week traps" maybe in genealogy. In ToM: "clock" as temporal cadence; "crisis habit regression" as behavior under high-leverage. Need be careful not invent data. Frame as hypotheses/audit, not claims. Cite paper limitations: "pitchers and runners adapt within at-bats and games" [PAGE 12]. Quote exact. "we do not observe intent to steal" [PAGE 12]. Good.

<CROSS_LAYER_VETO_ADJUDICATION> Physical/biomechanical/weather veto proof. Need show veto conditions that override model recommendation. Physical: sprint speed s, acceleration, slide deceleration; Kagan [PAGE 3] says sprint speed and initial acceleration most strongly affect success, modest effects primary lead. Biomechanical: lead stance, first-step quickness, crossover, pickoff dive back; hamstring/ankle; fatigue; surface. Weather: wind, rain, temperature affect traction, ball carry, catcher grip, pitcher footing; not in model. Veto proof: if any layer violates assumptions, L* invalid. Need formal veto predicates. Could define V_phys = {L* | s < threshold?} but no data. Avoid fake equations? Formal predicates with assumptions okay: If measured sprint speed is below model support or injury status changes, veto. But "no toy equations"—formal equations okay if well-defined. We can define indicator veto conditions:
V_phys = 1 if (s ∉ S_support) or (surface friction μ < μ_min) or (weather precipitation > threshold) or (medical restriction). But thresholds not provided; we can say thresholds must come from domain data, not invented. Maybe express as Boolean conditions with unspecified domain-specific thresholds, not fake ratios. Need "proof": show model assumes L affects only via probabilities and fixed X; if physical layer changes first-step or slide, the mapping L→P(SB|ATT) is non-invariant; if weather changes p or θ measurement, X misclassified; if biomechanical constraint prevents executing L*, argmax infeasible. Thus veto. Cite Kagan [PAGE 3] "sprint speed and initial acceleration most strongly affect success, with comparatively modest effects attributed to the primary lead." That supports physical veto: if acceleration is limiting, lead optimization is second-order. Need quote exact.

Could include "weather" not in paper; note absent covariate, so any weather regime outside training distribution is a distribution-shift veto. Need "proof" via support: model is valid only within observed support and conditional on X; weather changes surface and ball grip, altering p and PK/SB probabilities; since p is average pop time and θ is season-scaled, not game-specific, the model cannot condition on weather. Therefore veto.

<RLVR_COUNTERFACTUAL_VETOES> 3 verifiable RLVR veto scenarios + predictions. Need RLVR = reinforcement learning with verifiable rewards? We can define scenarios with verifiable outcomes. Need avoid betting. Scenarios:
1. Intent-label audit: If we obtain pitch-level green-light/intent labels, re-estimate ATT model including intent. Prediction: coefficient on L in ATT becomes nonzero? But paper intentionally excludes L. Veto if including intent changes L* distribution or mean deviation. Verifiable: compare out-of-sample log-loss/calibration and L* sign. Prediction: mean +0.67 ft on steal attempts shrinks toward +0.19 or lower after conditioning on intent; if not, model's "unobserved intent" explanation is falsified. Need be precise: "The +0.67 ft gap will attenuate by at least 50% when intent is controlled" maybe. Verifiable with dataset. That's a prediction.
2. Support extrapolation stress test: Fit on observed L support, evaluate L* outside support. Prediction: xRuns(L) becomes monotone or boundary solution; L* hits boundary; calibration degrades. Veto if >some% of L* at boundary or bootstrap CI crosses boundary. Verifiable.
3. Context-dependent weights: Replace fixed +0.20/-0.45 with RE24 state-specific values from Table 1. Prediction: L* shifts; some sign reversals; mean deviation changes. Veto if ranking of optimal leads/teams changes beyond bootstrap. Verifiable.
4. Physical/weather shift: Stratify by precipitation/wind/temperature or sprint speed support. Prediction: coefficients on L and p differ; L* unstable. Veto if interaction significant and calibration fails.
Need exactly 3? "3 verifiable RLVR veto scenarios + predictions." We can do 3 or more. Include "veto trigger", "test", "prediction". Need formal maybe.

Need ensure total word count >=1000. Our answer likely >3000 words. Need no "odds". Avoid "moneyline". Avoid "spread" maybe not. Could say "betting" no. Avoid even "odds" in quotes. The source quote "odds" must avoid. We can quote "a one-foot larger lead is associated with roughly 20% higher..." but original says "higher odds". If quote exact includes odds, prohibited. We can paraphrase and use quotes without odds. Need exact verbatim quotes; choose ones without odds.

Need cite exact [PAGE N of 15] markers. Use [PAGE 4 of 15]. Include quotes with quotation marks. Need ensure quote exact from source. Let's verify quotes:
- PAGE 1: "A runner’s primary lead off first base creates leverage to steal second but also exposure to pickoffs." Exact.
- PAGE 1: "We map stage probabilities to expected runs via fixed linear weights (+0.20 for a successful steal; -0.45 for caught stealing or picked off) and optimize over lead distance to obtain a context-specific optimal lead L∗." Exact. Use maybe.
- PAGE 3: "we restrict to the state with a runner on first and second/third empty." Exact.
- PAGE 4: "we intentionally exclude the primary lead L and treat P(ATT | ¬PO, θ, p, s) as the runner’s baseline green-light probability of stealing 2nd base." Exact (has symbols). Good.
- PAGE 5: "using R’s optimize() function over a bounded domain L restricted to the observed support of leads in our data." Exact.
- PAGE 5: "All interpretations below are associative (not causal), conditional on the included covariates and model specification." Exact.
- PAGE 6: "This distribution is approximately normal and is centered at +0.19 ft." Exact.
- PAGE 7: "This distribution is also approximately normal, but with a higher mean deviation from our estimated optimal lead (+0.67 ft)." Exact.
- PAGE 11: "yielding an xRuns(L) profile with a well-defined maximum." Exact? PAGE 11: "Our results capture the central trade-off in lead-taking: increasing lead length raises the probability of a successful steal, but also increases pickoff risk, yielding an xRuns(L) profile with a well-defined maximum." Yes.
- PAGE 12: "we do not observe intent to steal on a given pitch, and lead distance L may co-move with intent." Exact.
- PAGE 12: "Our model also treats each pitch as independent, though we know pitchers and runners adapt within at-bats and games." Exact.
- PAGE 12: "we map outcomes to expected runs using context-averaged linear weights for ease, though the true value of a steal depends on game state." Exact.
- PAGE 12: "our data includes only pickoffs and a sample of called pitches, under-representing swing outcomes." Exact.
- PAGE 3: "He finds that sprint speed and initial acceleration most strongly affect success, with comparatively modest effects attributed to the primary lead." Exact from Kagan summary.
- PAGE 2: "Bill James argued that a steal must succeed about two-thirds of the time to break even" Exact? It says "Bill James argued that a steal must succeed about two-thirds of the time to break even – a "rule of thumb"..." Fine, but "break even" not betting line? It's about success. Could use. No odds.
- PAGE 2: "stealing second base with 0 outs and no one else on base is worth 1.068 −0.831 = 0.237 runs, while being caught stealing in the same situation is worth 0.243 −0.831 = −0.588 runs" Exact. Use to show context weights.
- PAGE 3: "The mixed-strategy equilibrium implies a near-linear relationship between attempt frequency and success rate" exact.
- PAGE 3: "That study, however, does not jointly model runner, pitcher, and catcher pop time, nor does it connect the full decision sequence..." exact.
- PAGE 7 case: "our model produces an optimal lead estimate (L∗) of 10.37 ft. PCA’s lead exceeds this estimate by 1.09 feet" exact.
- PAGE 13: "In our sample, the Philadelphia Phillies and St. Louis Cardinals exhibit the largest mean absolute deviations..." exact.

Need maybe mention "Threat" formula exact. PAGE 3-4: "Pitcher "Threat," θ (per 100 IP): Baseball Savant’s Net Bases Prevented (Baseball Savant, nd) scaled to 100 innings pitched, θ = 100 NBP IP ; higher values indicate better control of the running game." The line break weird. We can just define θ=100 NBP/IP and cite [PAGE 3-4]. Need not quote.

Need formal equations. Let's ensure no "odds" word. We can say "logit-scale coefficient". Avoid "probability of success vs failure". Fine.

Need "singularity/breakdown regimes" exact. Use term "singularity" in logistic? A logistic model has no singularity unless separation; but we can state breakdown/singularity regimes: perfect separation -> MLE diverges; zero events -> infinite coefficient; derivative root fails; argmax at boundary; collinearity; non-identifiability if intent omitted; support boundary. Need formal: if for a subset all y=1 or y=0 separated by covariate, likelihood has no finite maximizer; coefficients → ±∞; fitted probabilities saturate. That's a true singularity. Also if L and intent perfectly co-move, cannot separate effects. Good.

Need maybe include "LaTeX equations, SI/information/probability units". Use \mathrm{ft}, \mathrm{s}, \mathrm{ft\,s^{-1}}, \mathrm{runs}. "Information units" maybe mention logit is dimensionless; expected runs in runs; probabilities dimensionless. Good.

Need "ZERO TOY EQUATIONS: Never invent fake ratios". Our equations are from source. Fine. Avoid inventing arbitrary thresholds/ratios. If mention thresholds, say domain-calibrated, not defined.

Need "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." Avoid "odds" entirely. Check final answer for "odds". Also maybe "over/under" no. "bet" no? "break even" contains "bet"? No, but avoid. "Betting" no. "line" appears in "linear", "baseline", "lineage", "lead" not betting. "spreads" no. "totals" no. "moneyline" no. "odds" no. Ensure not quote source with "odds". We can quote Table 2? No.

Need "GSE + GSI Frontier Reasoning Foundry" maybe no need. We just output sections.

Need answer with exact XML sections. Put only sections? Could include a short intro? The instructions require exact XML sections. We can output the sections only. Must have >=1000 words. Need THINK_TRACE >=400 words. We'll make ~600. Other sections maybe 500 each. Total ~3000.

Let's plan final:

<THINK_TRACE>
Paragraph 1: define target: optimize primary lead L for runner on first, 2/3 empty. Multi-hop derivation. Start from paper's nested sequence. State variables/units. Then derive conditional probabilities step-by-step. Use LaTeX. Connect to xRuns. Show derivative condition. Explain why L* interior requires balance. Mention coefficients signs: L raises PO and PK|PO, raises SB|ATT; Threat etc. Then audit gray zones: observed +0.19, +0.67; cannot infer causal overaggression because intent omitted; selection; fixed weights; independence; support. Also mention case study. Use quotes. Need >=400 words. We'll make 5 paragraphs.

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal definitions and equations with citations. Include assumptions list. Include breakdown regimes. Include quotes. Use LaTeX. Need page citations. Maybe 800 words.

<RETROCAUSAL_GENEALOGY>
Historical lineage and traps. 500 words.

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression vs counter-trap vs clock. 500 words.

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof. 500 words.

<RLVR_COUNTERFACTUAL_VETOES>
3 scenarios. 600 words.

Need ensure word count. Let's write carefully.

Potential issue: "SI/information/probability units" — include in source section. "Information" maybe "logit is dimensionless (nats if interpreted as log-odds, but avoid odds word!)." Can't say log-odds. Say "logit z is dimensionless; it is the natural-log ratio of event probability to complement probability." Is "ratio of event probability to complement" okay? It avoids word odds. Could say "logit link, dimensionless." But "information units" maybe use "nats" if entropy. Not necessary. Maybe mention "logit scale is dimensionless; probabilities are dimensionless; xRuns in runs." Good.

Avoid "odds" word even in "log-odds". Use "logit scale". Fine.

Need cite exact page markers. Use [PAGE 4 of 15] etc.

Let's draft final with exact XML. Need not wrap in markdown? XML tags okay. Use LaTeX $...$ within.

Potential issue: "RLVR" maybe define? We can say "reinforcement-learning-with-verifiable-rewards-style vetoes". That's okay. No betting.

Need "counterfactual vetoes" formal. Scenario 1:
Veto V1: Intent-label intervention. Test: acquire pitch-level intent label G∈{0,1}; fit ATT model with G and possibly L; compare held-out log-loss and Brier score and L* distribution. Prediction: The +0.67 ft mean deviation on steal attempts attenuates substantially (at least 50%) when G is included; if not, the "unobserved intent" explanation is rejected. Veto trigger: if including G changes L* by > bootstrap 95% interval or improves calibration. This is verifiable.
Scenario 2: Support-boundary stress. Test: refit on random 80% and evaluate L* on held-out 20%; count boundary optima; perturb L support by ±0.5 ft. Prediction: L* becomes boundary/monotone for non-negligible fraction; xRuns curve flat near max. Veto if boundary fraction > pre-registered threshold. No fake threshold? We can say pre-registered threshold, not invent. Good.
Scenario 3: Context-weight substitution. Test: replace fixed weights with RE24 state-specific from Table 1; recompute L*. Prediction: sign/magnitude shifts; teams/runners ranking changes. Veto if ranking instability. Verifiable.
Maybe Scenario 4: Physical/weather strat. But requirement 3; can include 4. Need exactly 3? "3 verifiable RLVR veto scenarios" at least 3. Do 3.

Need "predictions" include quantitative? We can say "mean deviation shrinks by at least half" but that's a prediction not equation. It's okay. "boundary optima occur in >5%" maybe threshold invented. Avoid fake threshold? Pre-registered threshold okay. Better not specify arbitrary. Say "pre-registered nontrivial fraction." But verifiable requires threshold. We can state "pre-registered threshold (e.g., any boundary share above the support-calibration tolerance)"—not a fake ratio. Maybe fine.

Need "CROSS_LAYER_VETO_ADJUDICATION" proof. Use formal veto predicate:
Let \mathcal{D} be training distribution. Model gives \hat L^*(X). A cross-layer veto is any condition C such that either (i) X∉supp(\mathcal{D}_X), (ii) L^*∉supp(\mathcal{D}_L), (iii) the physical execution set \mathcal{A}(runner, surface, weather) does not contain L^*, or (iv) the outcome mapping P(SB|ATT,L,X) is not invariant under layer change. Then \hat L^* is inadmissible. This is formal. Then physical: Kagan quote. Biomechanical: first-step acceleration and slide; if L* requires acceleration outside athlete's capacity, veto. Weather: precipitation/wind/temp not in X; distribution shift; if p and θ are season averages, game-time weather effects unmodeled. Proof: The model's conditional probabilities are P(·|L,X) with X=(θ,p,s); if weather W alters P but W not in X, then P(·|L,X) is a marginal over W, not conditional; an L* maximizing marginal may not maximize conditional in a specific W. That's a proof sketch. Need no invented numeric thresholds.

Need "RECURSIVE_THEORY_OF_MIND": discuss levels:
- Level 0: runner chooses L to maximize xRuns given fixed X.
- Level 1: pitcher observes/anticipates L and chooses PO/hold; model's P(PO|L,θ) is average response, not best response.
- Level 2: runner anticipates pitcher anticipation; may choose L to induce/trap; defense may bait. Turocy game theory [PAGE 2-3] is two-player inspection game. The paper doesn't solve equilibrium; it estimates associative response.
- Crisis habit regression: under pressure, runner may default to habitual lead/steal; observed +0.67 may reflect intent or crisis habit; cannot distinguish.
- Counter-trap: defense may allow large lead to increase PK success; model's positive PK|PO with L (0.5844) and PO with L (0.1863) means larger L is double-edged. But if pitcher strategically baits, P(PO|L) changes.
- Clock: pitch clock, count, inning, game state omitted; timing cadence. Paper included pitch context but models not using? It says each observation includes pitch context, but models predictors only L, θ, p, s. So clock/game state omitted. Thus recursive ToM and clock are unmodeled. Need cite "Each observation includes pitch context (inning, date, home/away, count, outs)" [PAGE 3] but model equations don't include them. Good audit. Quote maybe "Each observation includes pitch context (inning, date, home/away, count, outs)" [PAGE 3]. Then "model predictors only L, θ, p, s" from equations [PAGE 4]. This shows omitted variables.

Need "RETROCAUSAL_GENEALOGY" multi-week traps:
- Deadball to power era to Brock/Henderson/Wills. The model's lead optimization is a modern descendant of steal valuation. 
- Bill James two-thirds heuristic: a success-rate threshold, not a lead recommendation. Trap: conflating success threshold with optimal lead.
- Linear weights and RE24: context-averaged vs state-specific. Trap: using +0.20/-0.45 as universal; Table 1 shows variation.
- Turocy game theory: mixed-strategy equilibrium; trap: treating estimated P(ATT) as equilibrium response.
- Kagan physics: lead modest effect; trap: overinvesting in lead while acceleration/sprint dominate.
- Lindbergh tracking: outliers and pitcher tendency; trap: pooling player types without interactions.
- Present nested logistic: trap: associational coefficients; support restriction; unobserved intent.
- "multi-week traps" maybe refers to long-term repeated behavior/habit over weeks; mention data aggregation over season can mask within-game adaptation; a multi-week trap is treating season-average θ and p as game-specific constants; player learning over weeks changes behavior; model static. Need state "multi-week" explicitly: over multiple weeks, pitchers adjust hold patterns, runners adjust leads, catchers adjust; a static cross-sectional model can be retrocausally contaminated if used to prescribe without re-estimation. Good.

Need "Crisis habit regression vs counter-trap vs clock" in ToM. We'll make clear.

Need "Source operators and equations" include "nested sequence" and "conditional probability laws". Also "objective and optimization". Include "lead deviation d_i". Include "case study". Include "assumptions".

Potential issue: The paper uses "odds" in results; we must not mention. We can state coefficients as "logit-scale slopes": α1=0.1863 ft^-1 etc. Use table values. Good.

Let's write final. Need ensure no word "odds". Check: "logit" okay. "probability" okay. "success rate" okay. "baseline" okay. "linear" okay. "lineage" okay. "lead" okay. "threshold" okay. "breakdown" okay. "bet" no.

Need maybe avoid "over/under" no. "spread" appears? "spread" not. "moneyline" not. "totals" not. "odds" not. Good.

Let's compose.

Need exact XML tags with content. Use paragraphs inside. The final answer can be long. Ensure THINK_TRACE >=400 words. I'll count roughly.

Let's prepare final.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s target is a conditional expected-runs optimization for the base state with a runner on first and second/third empty. The first hop is to accept the paper’s nested event tree rather than collapse all outcomes into a single steal-success probability. The tree is: pickoff attempt \(PO\); pickoff success \(PK\mid PO\); steal attempt \(ATT\mid \neg PO\); steal success \(SB\mid ATT\). The primary lead \(L\) enters the first two stages and the last stage, while catcher pop time \(p\), pitcher Threat \(\theta\), and runner sprint speed \(s\) enter selected stages. The second hop is to compose the conditional probabilities correctly:
\[
P(PK\mid L,\theta)=P(PK\mid PO,L,\theta)P(PO\mid L,\theta),
\]
\[
P(ATT\mid L,X)=P(ATT\mid \neg PO,\theta,p,s)\,[1-P(PO\mid L,\theta)],
\]
\[
P(SB\mid L,X)=P(SB\mid ATT,L,X)P(ATT\mid L,X),
\]
\[
P(CS\mid L,X)=[1-P(SB\mid ATT,L,X)]P(ATT\mid L,X).
\]
The third hop is to substitute these into the fixed linear-weight payoff:
\[
\mathrm{xRuns}(L,X)=0.20P(SB\mid L,X)-0.45P(CS\mid L,X)-0.45P(PK\mid L,X).
\]
The fourth hop is the first-order condition. Because each stage uses a logit link, the derivative of each probability with respect to \(L\) is a product of the logit slope and \(\sigma(z)(1-\sigma(z))\). An interior optimum requires
\[
0.20\,\frac{\partial P(SB)}{\partial L}
-0.45\,\frac{\partial P(CS)}{\partial L}
-0.45\,\frac{\partial P(PK)}{\partial L}=0,
\]
with a negative second derivative at the root. If the derivative does not cross zero inside the observed support, the argmax is a boundary point, not a “well-defined maximum.” The paper does report a well-defined maximum for the PCA case and says the profile has “a well-defined maximum” [PAGE 11 of 15], but that is an empirical result for a bounded support, not a theorem for all \(L\).

The gray-zone audit begins with the fact that the paper intentionally excludes \(L\) from the steal-attempt equation: “we intentionally exclude the primary lead L and treat P(ATT | ¬PO, θ, p, s) as the runner’s baseline green-light probability of stealing 2nd base” [PAGE 4 of 15]. This is a defensible identification move, but it means \(L\) affects attempt probability only through pickoff risk. If intent to steal co-moves with \(L\), the composition above is misspecified. The authors acknowledge this: “we do not observe intent to steal on a given pitch, and lead distance L may co-move with intent” [PAGE 12 of 15]. Therefore the reported mean deviation of \(+0.19\) ft and the larger \(+0.67\) ft on steal attempts [PAGE 6 of 15; PAGE 7 of 15] cannot be read as causal proof that runners are over-aggressive. The \(+0.67\) ft gap is explicitly interpreted as “very likely indicative of intent to steal” [PAGE 7 of 15], which is plausible but not identified by the model.

A second gray zone is the optimization support. The paper uses “R’s optimize() function over a bounded domain L restricted to the observed support of leads in our data” [PAGE 5 of 15]. This prevents wild extrapolation, but it also means \(L^*\) can be a support boundary. A boundary optimum is not a physical optimum; it is the best point inside the observed data envelope. The PCA case reports \(L^*=10.37\) ft against an observed 11.46 ft lead, a \(+1.09\) ft deviation [PAGE 7 of 15]. That is useful as an in-sample diagnostic, but it is not a validated prescription outside the support.

A third gray zone is the payoff scale. The paper maps outcomes with fixed weights \(+0.20\), \(-0.45\), \(-0.45\) [PAGE 1 of 15; PAGE 4 of 15], while also showing that state-specific run expectancy varies substantially: stealing second with zero outs and no other runner is worth \(1.068-0.831=0.237\) runs, while being caught is worth \(0.243-0.831=-0.588\) runs [PAGE 2 of 15]. The paper itself says it uses “context-averaged linear weights for ease, though the true value of a steal depends on game state” [PAGE 12 of 15]. Thus the optimal lead is optimal for a convenient average payoff, not necessarily for the exact base-out-inning state. A final audit point is dependence: “Our model also treats each pitch as independent, though we know pitchers and runners adapt within at-bats and games” [PAGE 12 of 15]. That independence assumption affects standard errors and any claim of stable \(L^*\) across repeated matchups.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source defines the target population narrowly: “we restrict to the state with a runner on first and second/third empty” [PAGE 3 of 15]. The outcome operator is a fixed linear-weight expected-runs functional. With indicator \(\mathbf{1}\{A\}\in\{0,1\}\), the paper writes
\[
\mathrm{xRuns}=0.20\cdot \mathbf{1}\{SB\}-0.45\cdot \mathbf{1}\{CS\}-0.45\cdot \mathbf{1}\{PK\},
\]
with units of runs; the coefficients \(0.20\) and \(-0.45\) are runs per event [PAGE 4 of 15]. The abstract states the same mapping: “We map stage probabilities to expected runs via fixed linear weights (+0.20 for a successful steal; -0.45 for caught stealing or picked off)” [PAGE 1 of 15].

The covariates and units are: primary lead \(L\) in feet; runner sprint speed \(s\) in feet per second; catcher pop time \(p\) in seconds; pitcher Threat \(\theta\) in Net Bases Prevented per 100 innings, \(\theta=100\,\mathrm{NBP}/\mathrm{IP}\), where higher values indicate better control of the running game [PAGE 3 of 15–PAGE 4 of 15]. The logit link is dimensionless. The four fitted operators are
\[
P(PO\mid L,\theta)=\operatorname{logit}^{-1}(\alpha_0+\alpha_1L+\alpha_2\theta),
\]
\[
P(PK\mid PO,L,\theta)=\operatorname{logit}^{-1}(\beta_0+\beta_1L+\beta_2\theta),
\]
\[
P(ATT\mid \neg PO,\theta,p,s)=\operatorname{logit}^{-1}(\gamma_0+\gamma_1\theta+\gamma_2p+\gamma_3s),
\]
\[
P(SB\mid ATT,L,\theta,p,s)=\operatorname{logit}^{-1}(\delta_0+\delta_1L+\delta_2\theta+\delta_3p+\delta_4s),
\]
as given in the paper’s Equations 2–5 [PAGE 4 of 15]. The conditional-probability composition is
\[
P(PK\mid L,\theta)=P(PK\mid PO,L,\theta)P(PO\mid L,\theta),
\]
\[
P(ATT\mid L,X)=P(ATT\mid \neg PO,\theta,p,s)\,[1-P(PO\mid L,\theta)],
\]
\[
P(SB\mid L,X)=P(SB\mid ATT,L,X)P(ATT\mid L,X),
\]
\[
P(CS\mid L,X)=[1-P(SB\mid ATT,L,X)]P(ATT\mid L,X),
\]
with \(X=(\theta,p,s)\) [PAGE 4 of 15]. Taking conditional expectations gives
\[
\mathrm{xRuns}(L,X)=0.20P(SB\mid L,X)-0.45P(CS\mid L,X)-0.45P(PK\mid L,X).
\]
The optimization is
\[
L^*=\arg\max_{L\in\mathcal{L}}\mathrm{xRuns}(L),
\]
where \(\mathcal{L}\) is “a bounded domain L restricted to the observed support of leads in our data” [PAGE 5 of 15]. Lead deviation is
\[
d_i\equiv L_i^{\mathrm{obs}}-L_i^*,
\]
so \(d_i>0\) means a longer-than-model-optimal lead and \(d_i<0\) a shorter-than-model-optimal lead [PAGE 6 of 15].

The reported coefficient estimates are associative: “All interpretations below are associative (not causal), conditional on the included covariates and model specification” [PAGE 5 of 15]. On the logit scale, the pickoff-attempt model has \(\hat\alpha_1=0.1863\ \mathrm{ft}^{-1}\) and \(\hat\alpha_2=-0.0125\) per Threat unit [PAGE 6 of 15]. The pickoff-success-given-attempt model has \(\hat\beta_1=0.5844\ \mathrm{ft}^{-1}\) and \(\hat\beta_2=0.1763\) per Threat unit [PAGE 6 of 15]. The steal-attempt-given-no-pickoff model has \(\hat\gamma_1=-0.0969\) per Threat unit, \(\hat\gamma_2=1.1298\ \mathrm{s}^{-1}\), and \(\hat\gamma_3=0.6153\ \mathrm{s}/\mathrm{ft}\) [PAGE 6 of 15]. The steal-success-given-attempt model has \(\hat\delta_1=0.0769\ \mathrm{ft}^{-1}\), \(\hat\delta_2=-0.0603\) per Threat unit, \(\hat\delta_3=5.2134\ \mathrm{s}^{-1}\), and \(\hat\delta_4=0.0770\ \mathrm{s}/\mathrm{ft}\) with \(p\approx0.08\) [PAGE 7 of 15]. These are logit-scale slopes, not probability changes; the probability effect is state-dependent through \(\sigma(z)(1-\sigma(z))\).

Assumptions and breakdown regimes:
1. **Support restriction.** The model is valid only for \(L\in\mathcal{L}_{\mathrm{obs}}\). If \(L^*\) is at a boundary, or if the xRuns curve is monotone on \(\mathcal{L}_{\mathrm{obs}}\), the argmax is a support artifact. The paper’s own procedure restricts \(L\) to observed support [PAGE 5 of 15].
2. **Unobserved intent / endogeneity.** \(L\) may co-move with intent to steal; the paper states this explicitly [PAGE 12 of 15]. If intent is omitted, \(P(ATT\mid L,X)\) and the composed \(P(SB\mid L,X)\) are not structural. The \(+0.67\) ft steal-attempt gap [PAGE 7 of 15] is therefore a diagnostic, not a causal effect.
3. **Perfect separation / sparse events.** The pickoff-success and steal-success stages are rare-event models with large negative intercepts, e.g. \(-10.9581\) and \(-12.2005\) [PAGE 6 of 15; PAGE 7 of 15]. If a covariate separates successes from failures, the logistic likelihood has no finite maximizer; coefficients diverge and fitted probabilities saturate at 0 or 1. This is the formal singularity regime.
4. **Context-averaged payoff.** Fixed \(+0.20/-0.45\) weights are not state-specific; Table 1 shows different values by base-out state [PAGE 2 of 15]. The paper concedes that “the true value of a steal depends on game state” [PAGE 12 of 15].
5. **Independence and selection.** The paper treats each pitch as independent and notes that “our data includes only pickoffs and a sample of called pitches, under-representing swing outcomes” [PAGE 12 of 15]. Clustering by runner, pitcher, catcher, game, and count is unmodeled.
6. **Measurement and proxy validity.** Threat is a season-scaled Net Bases Prevented proxy, not a pitch-level hold/throw tendency. Its coefficients have different signs across stages, so the net multi-stage effect on xRuns is not sign-identified by any single table.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s lineage runs from Deadball-era baserunning through sabermetric run expectancy to tracking-era microdata. The source describes the historical swing: Deadball teams relied on advancing runners, the home-run rise reduced steals, and the 1960s–1980s revival was led by figures such as Lou Brock, Rickey Henderson, and Maury Wills, whose 1962 season is called “a turning point in baserunning” [PAGE 1 of 15–PAGE 2 of 15]. That history matters because it explains why the lead is treated as a strategic object rather than a fixed athletic habit. In the Deadball environment, a larger lead had different opportunity costs than in a power era; in the modern environment, the lead is a lever that trades steal probability against pickoff exposure.

The sabermetric layer is Bill James’s success heuristic and linear weights. The paper says James argued that a steal must succeed about two-thirds of the time to justify the attempt [PAGE 2 of 15]. That heuristic is not a lead-optimization rule; it is a success-rate boundary. A retrocausal trap is to import the two-thirds heuristic directly into lead selection and assume that any lead producing a success probability above that boundary is automatically optimal. The present model does not do that; it uses a run-value payoff. But the trap remains in interpretation: a lead can raise steal success while also raising pickoff risk, so success-rate logic alone is insufficient.

The next lineage is run expectancy and RE24. The paper’s Table 1 gives state-specific values and shows that a steal and a caught-stealing have different values depending on outs and occupied bases [PAGE 2 of 15]. The paper’s fixed \(+0.20/-0.45\) weights are a simplification of that state-dependent structure. The multi-week trap is to treat the fixed weights as universal and then compare teams or runners across a season as if all observations had the same payoff. A second multi-week trap is to use season-average Threat and pop time as if they were game-specific constants; over weeks, pitchers change hold patterns, catchers heal or fatigue, and runners adapt. The paper acknowledges adaptation: “pitchers and runners adapt within at-bats and games” [PAGE 12 of 15]. A static cross-sectional fit can therefore be retrocausally contaminated when used prospectively without re-estimation.

The game-theoretic lineage is Turocy’s two-player inspection game, where the runner chooses whether to go and the defense allocates attention; the paper summarizes that the mixed-strategy equilibrium implies “a near-linear relationship between attempt frequency and success rate” [PAGE 3 of 15]. The present model is not an equilibrium model; it estimates average conditional responses. The trap is to interpret \(\hat P(ATT\mid \neg PO,\theta,p,s)\) as a best response. It is a conditional association, not a strategic equilibrium.

The physics lineage is Kagan’s kinematic study. The paper reports that Kagan “finds that sprint speed and initial acceleration most strongly affect success, with comparatively modest effects attributed to the primary lead” [PAGE 3 of 15]. That is a crucial retrocausal caution: lead optimization is second-order relative to acceleration and top speed. A multi-week trap is to overfit lead recommendations while ignoring athlete-specific acceleration, slide technique, and injury status. The tracking lineage is Lindbergh’s work on primary/secondary leads, sprint speed, and pitcher tendencies; the paper notes that Lindbergh does not jointly model runner, pitcher, and catcher pop time or connect the full decision sequence to expected runs [PAGE 3 of 15]. The present paper’s contribution is therefore a composition of previously separate layers: history, run expectancy, game theory, physics, and tracking. The genealogical audit says the model is strongest as a within-support diagnostic and weakest as a universal prescription.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The model is a level-0 optimizer: for fixed \(X=(\theta,p,s)\), the runner chooses \(L\) to maximize \(\mathrm{xRuns}(L,X)\). A recursive theory of mind adds level-1 and level-2 reasoning. At level 1, the pitcher and catcher anticipate the runner’s lead and choose hold patterns, pickoff timing, and pitch selection. At level 2, the runner anticipates the defense’s anticipation and may choose a lead that induces a throw-over or disguises intent. The paper’s estimated pickoff equations are average responses, not best responses. The source itself situates the problem near a game-theoretic tradition: Turocy models the steal decision as a two-player inspection game [PAGE 2 of 15–PAGE 3 of 15]. But the present nested logistic model does not solve for equilibrium; it estimates conditional probabilities. That distinction is the central recursive-theory-of-mind caveat.

**Crisis habit regression.** Under high leverage, a runner may regress to a habitual lead or habitual steal aggression rather than execute the model’s \(L^*\). The data cannot distinguish “too large because the runner is over-aggressive” from “too large because the runner has a green light and is preparing to go.” The paper says the \(+0.67\) ft gap on steal attempts is “very likely indicative of intent to steal” [PAGE 7 of 15]. Recursive theory of mind would add a second hypothesis: crisis habit regression. A runner who is anxious about being picked off may shorten the lead; a runner who is committed to going may lengthen it. Both are intent-conditioned behaviors. Because intent is unobserved [PAGE 12 of 15], the model’s deviation diagnostic is a reduced-form mixture of intent, habit, and strategic response.

**Counter-trap.** A counter-trap occurs when the defense deliberately permits a larger lead to bait a pickoff or to change the runner’s belief about the pitcher’s hold. The model’s coefficients are compatible with a double-edged lead: \(L\) is positively associated with pickoff attempts (\(\hat\alpha_1=0.1863\)) and with pickoff success given an attempt (\(\hat\beta_1=0.5844\)), while also positively associated with steal success given an attempt (\(\hat\delta_1=0.0769\)) [PAGE 6 of 15; PAGE 7 of 15]. If the defense strategically baits, then \(P(PO\mid L,\theta)\) is not invariant to the runner’s beliefs. The estimated curve could be a mixture over defensive regimes. A counter-trap audit would stratify by pitcher hold type, count, and recent throw-over history; the paper does not do this.

**Clock.** The paper says each observation includes pitch context such as inning, date, home/away, count, and outs [PAGE 3 of 15], but the fitted equations use only \(L,\theta,p,s\) [PAGE 4 of 15]. Thus the clock—both the pitch clock and the within-at-bat timing of the runner’s lead—is not in the model. A pitcher’s cadence, a runner’s secondary lead, and the catcher’s transfer time can change the effective \(p\) and the effective pickoff risk. Recursive theory of mind says the runner’s lead is a timed signal: too early and the pitcher can throw over; too late and the runner cannot get a good jump. The model’s static \(L\) collapses that timing dimension. A prospective use of \(L^*\) should therefore be vetoed when pitch-clock cadence, count, or game state changes the runner’s timing incentives outside the fitted distribution.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A cross-layer veto is any condition under which the model’s recommendation \(\hat L^*(X)\) is inadmissible even if the logistic fit is numerically stable. Formally, let \(\mathcal{D}\) be the training distribution and let \(\mathcal{A}(\text{runner},\text{surface},\text{weather})\) be the set of physically executable leads. The recommendation is vetoed if any of the following holds: \(X\notin\operatorname{supp}(\mathcal{D}_X)\); \(\hat L^*\notin\operatorname{supp}(\mathcal{D}_L)\); \(\hat L^*\notin\mathcal{A}\); or the outcome map \(P(SB,CS,PK\mid L,X)\) is not invariant under a layer change that is omitted from \(X\). This is not a new ratio; it is a support-and-invariance condition.

**Physical veto.** Kagan’s kinematic result is the clearest physical veto: “sprint speed and initial acceleration most strongly affect success, with comparatively modest effects attributed to the primary lead” [PAGE 3 of 15]. If a runner’s acceleration profile or top speed is outside the fitted support, the model’s \(P(SB\mid ATT,L,X)\) is an extrapolation. The lead cannot compensate for a first-step deficit without changing the slide and the jump. Therefore a physical veto applies when \(s\) is outside the observed sprint-speed range, when the runner has an injury or fatigue state that changes acceleration, or when the surface friction prevents the modeled first step. The proof is invariance failure: the model conditions on \(s\) but not on acceleration, slide deceleration, or surface; two runners with the same \(s\) can have different \(P(SB\mid ATT,L,X)\), so \(L^*\) is not identified at the physical layer.

**Biomechanical veto.** The lead is a posture and a movement preparation, not just a scalar distance. A runner’s ability to dive back on a pickoff depends on hip rotation, ankle mobility, and reaction time; a runner’s ability to explode to second depends on crossover and first-step mechanics. The paper’s \(L\) is measured in feet but the model does not include these biomechanical covariates. A biomechanical veto applies when the recommended lead requires a back-dive or first-step pattern outside the athlete’s safe range, or when a medical restriction limits maximal effort. The proof is feasibility: \(\hat L^*\in\mathcal{A}\) is a necessary condition for the argmax to be actionable. If \(\hat L^*\notin\mathcal{A}\), the constrained optimum is a boundary of \(\mathcal{A}\), not the unconstrained \(L^*\).

**Weather veto.** Weather is not in \(X=(\theta,p,s)\). Rain, wind, temperature, and field condition can change catcher grip, pitcher footing, ball carry, and runner traction. Because the model uses season-scaled Threat and average pop time, a game-time weather shift is a distribution shift. The proof is conditional-expectation failure: if \(W\) is weather and \(W\notin X\), then the fitted \(P(\cdot\mid L,X)\) is a marginal over \(W\). An \(L^*\) that maximizes the marginal need not maximize \(P(\cdot\mid L,X,W)\) in a specific weather regime. A weather veto applies when precipitation, wind, or temperature is outside the training distribution or when the game-time catcher/pitcher/runner state is materially different from the season averages. In that regime, the model’s recommendation is a prior, not a prescription.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
The following are reinforcement-learning-with-verifiable-rewards-style counterfactual vetoes: each has a test, a measurable prediction, and a falsification condition. They are designed to be checked against held-out data or a prospective dataset, not asserted from the current fit.

**Veto 1: Intent-label intervention.** Test: obtain pitch-level intent-to-steal labels \(G\in\{0,1\}\) and refit the attempt stage with \(G\) included, e.g. \(P(ATT\mid \neg PO,\theta,p,s,G)\), then recompute \(L^*\) and the deviation distribution. Prediction: if the paper’s interpretation is correct, conditioning on \(G\) should substantially attenuate the \(+0.67\) ft mean deviation on steal attempts [PAGE 7 of 15] toward the all-situations \(+0.19\) ft mean [PAGE 6 of 15]. A reasonable verifiable prediction is that at least half of the \(+0.67\) ft gap disappears when intent is controlled; if the gap remains essentially unchanged, the “unobserved intent” explanation is falsified. Veto trigger: if including \(G\) changes \(L^*\) beyond the bootstrap interval or improves held-out calibration (log score or Brier score) while leaving the gap intact, the original model is vetoed as an intent-confounded diagnostic.

**Veto 2: Support-boundary stress test.** Test: refit the full nested model on random training splits and evaluate \(L^*\) on held-out observations; also perturb the lead support by a small amount and count boundary optima. Prediction: because the paper restricts optimization to observed support [PAGE 5 of 15], a nontrivial share of observations will have \(L^*\) at or near a support boundary, and the xRuns curve will be nearly flat near the maximum. Veto trigger: if the boundary share exceeds a pre-registered tolerance, or if the sign of \(d_i=L_i^{\mathrm{obs}}-L_i^*\) flips for a material share of observations under support perturbation, then the reported “optimal” lead is a support artifact rather than an identified interior optimum.

**Veto 3: Context-weight substitution.** Test: replace the fixed \(+0.20/-0.45\) payoff with state-specific run-expectancy differences from a table like the paper’s Table 1 [PAGE 2 of 15] and recompute \(L^*\) and the team/runner deviation rankings. Prediction: the optimal lead and the deviation rankings will shift, especially in base-out states where the caught-stealing penalty is much larger than the fixed \(-0.45\). The paper itself says “the true value of a steal depends on game state” and that context-dependent calculations “would yield situation-specific recommendations” [PAGE 12 of 15]. Veto trigger: if the ranking of most aggressive or most conservative runners, such as the Appendix examples [PAGE 13 of 15], reverses under context-dependent weights beyond bootstrap error, then the fixed-weight \(L^*\) is not a stable prescription.

A fourth optional audit is a physical/weather stratification: refit by sprint-speed support, precipitation, wind, and temperature; prediction is that the lead slope and pop-time slope change across strata. If those interactions are material and held-out calibration degrades, the cross-layer veto in the previous section is activated. Together these vetoes keep the model within its proper role: an interpretable, within-support diagnostic of the lead trade-off, not a universal causal prescription.
</RLVR_COUNTERFACTUAL_VETOES>