---
source: "2024 - Evaluating plate discipline in Major League Baseball with Bayesian Additive Regression Trees - Yee et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Journal of Quantitative Analysis in Sports/2024"
pages: 16
model: baidu/ernie-5.5-flash-preview:free
words: 7733
---

<NATIVE_REASONING>
We need answer to user. They provided a PDF source text and instructions. Need produce a structured answer with exact XML sections, >=1000 words. STRICT INVARIANTS: zero betting lines, no odds/spreads/totals/moneylines. ZERO TOY EQUATIONS: never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. When source pages provided, cite exact [PAGE N] markers and verbatim quotes.

User says DRIVE SOURCE etc. Likely wants output in exact XML sections:
<THINK_TRACE>...</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>...</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>...</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>...</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>...</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>...</RLVR_COUNTERFACTUAL_VETOES>
Need >=1000 words total? It says >=1,000-WORD DEPTH across these exact XML sections. Need likely each? It says across sections. Also THINK_TRACE >=400 words. Need final only XML. Need no betting lines. Need formal equations, units, page citations, quotes.

Need analyze paper deeply. Need maybe discuss BART, expected runs, decision theory, uncertainty propagation. Need include equations from source: Equation (1), (2), optimal decision, RE24, BayesREx eq 3 maybe. Need not invent fake equations. Can derive formal equations. Need SI/information/probability units: probabilities dimensionless [0,1], runs as expected counts, MSE/Brier dimensionless squared error? Brier score in squared probability units, runs per pitch. Entropy? Could include information units maybe bits for uncertainty? But avoid fake ratios. We can mention posterior probability, credible intervals. Need exact singularity/breakdown regimes: e.g., E[R|swing,outcome] undefined if no data; BART breakdown if too many categories, extrapolation, location only etc. Decision boundary singular at EVdiff=0? x_optimal undefined at exactly zero by convention take. Also partial pooling breaks with empty bins? Need formal.

Need retrocaudal genealogy: lineage of plate discipline metrics, run expectancy, BART, umpire framing, EAGLE, decision theory. Multi-week traps? Probably traps in interpreting metrics, lookahead, confounded comparisons, uncertainty.

RECURSIVE_THEORY_OF_MIND: batter, pitcher, umpire, catcher modeling; crisis habit regression vs counter-trap vs clock. Need maybe talk about batter cognitive heuristics, count leverage, two-strike aggression, umpire bias, pitcher targeting. Need no betting.

CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto proof. Need veto any recommendation that violates physics/biomechanics/weather? Since no game outcome prediction? We can state vetoes for models ignoring pitch trajectory timing, batter reaction time, location precision, human motor constraints, weather effects (temperature, humidity, wind) if not in data. Need proof via source: models condition on location at front edge, not full trajectory [PAGE 13], but no pitch type/velocity/spin [PAGE 13]. So cross-layer veto if model recommends swinging at pitches not physically reachable? Need not predict specific games. Could veto claims that xR_optimal decision is physically executable if contact probability low? Actually model includes contact probability. Need mention weather not included in Statcast features, assumptions of conditional independence may fail in extreme weather.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR? Probably Reinforcement Learning with Verifiable Rewards? Need propose three veto scenarios where model should be vetoed? Verifiable counterfactuals: If a batter takes pitch with called strike probability high but xR_optimal says swing? Need predictions. Could design: (1) If location outside zone but high strike probability due umpire/catcher framing, traditional metric vetoes swing but BART says swing; prediction: posterior EVdiff >0 and credible interval excluding zero. (2) Two outs low leverage: low-and-away pitch with negative EVdiff near zero; model high certainty but tiny effect; veto penalizing batter; prediction posterior mean EVdiff ~0 and CI overlaps zero. (3) If contact probability near zero or called strike probability certain, decision boundary should not depend on personnel; prediction sensitivity analysis: swapping personnel doesn't change x_optimal beyond uncertainty. Need RLVR? verifiable rewards maybe use logged counterfactual outcomes? We can say if actual outcome distribution in bin contradicts predicted posterior. Need include predictions.

Need cite exact [PAGE N] markers and verbatim quotes. Need use quotes exactly? Source text includes weird characters. Need quote short exact strings. Need ensure citations. We can cite [PAGE 1] etc. Need maybe quote: "we determine the optimal swing/take decision using the expected number of runs" [PAGE 3]. "E[R|..., swing] = sum outcome ..." [PAGE 4]. "EVdiff = ..." [PAGE 4]. "xR_optimal" [PAGE 4]. "We fit our strike probability model using all 380,654 pitches" [PAGE 3]. "BARTxR" [PAGE 2/3]. "E[R|C, P, L, swing, outcome] = E[R|C, swing, outcome]" [PAGE 6]. "BARTxR was more accurate than RE24 by 0.009 runs per pitch" [PAGE 7]. "batters made the xR_optimal decision 69.4%" [PAGE 10]. Need quotes exact maybe from provided text.

Need ensure no betting lines. Avoid "odds" word? Strict says never mention spreads, totals, moneylines, or odds. Avoid all these terms. Can use probabilities but not odds. Don't say betting.

Need final with XML tags. Need total >1000 words. THINK_TRACE >=400. Let's plan sections.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit >=400 words. Need trace: from paper question, decision under uncertainty, decomposition, BART, uncertainty propagation, case study, limitations. Gray zones: EVdiff near zero, low leverage, personnel confounded, location only, no trajectory, run expectancy assumption, aggregate metrics confounded. Maybe include equations. Need word count around 600.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown. Need include equations:
- s = swing indicator, c contact, k strike? Use paper notation.
- p_strike(C,P,L) = P(strike=1|C,P,L,swing=0)
- p_contact(C,P,L) = P(contact=1|C,P,L,swing=1)
- r_o(C,swing,outcome) = E[R|C,swing,outcome] under assumption.
- E[R|C,P,L,swing=1] = p_contact * E[R|C,swing=1,contact=1] + (1-p_contact)*E[R|C,swing=1,contact=0]
- E[R|C,P,L,swing=0] = p_strike * E[R|C,swing=0,strike=1] + (1-p_strike)*E[R|C,swing=0,strike=0]
- EVdiff = difference.
- x_optimal sign.
- Bayesian posterior: p(θ|data), posterior samples. Probability swing optimal = P(EVdiff>0|data).
- BART: f(x)=sum_{t=1}^m g(x; T_t, M_t), maybe from known BART? Source says approximates unknown functions with sums of binary regression trees [PAGE 5]. Can state generic, not invent. Units: probability dimensionless, runs expected count, MSE squared units. Breakdown regimes: no data for bins, empty outcome branches, EVdiff=0, extreme categorical dimensionality > data, extrapolation outside observed locations, strong confounding by pitch distribution, assumption E[R|C,P,L,...] = E[R|C,...] fails if personnel affects run expectancy (e.g., catcher framing changes gstate? Actually outcome is included; but maybe baserunner advancement?); if count/outs not measured? Need exact singularity/breakdown: Equation (1) requires probabilities sum to 1 and all outcome conditional expectations finite; if outcome unobserved or NA, term undefined. EVdiff decision boundary non-differentiable at 0. BART posterior collapse if prior too strong or data sparse.

RETROCAUSAL_GENEALOGY: historical/scientific lineage & multi-week traps. Need discuss traditional plate discipline [PAGE 4], RE24 [PAGE 3], Bayesball? umpire framing [PAGE 2], BART [PAGE 5], EAGLE concurrent [PAGE 5]. Multi-week traps: chasing metrics, assuming called strikes equal balls, ignoring count leverage, overreacting to home run, conflating optimal decision with outcome, ignoring uncertainty, Simpson confounding by pitch selection, temporal instability Table 1. Need cite page.

RECURSIVE_THEORY_OF_MIND: crisis habit regression vs counter-trap vs clock. Need maybe model mental states: batter expects strike zone, umpire biases, catcher framing, pitcher sequencing. Habit regression: batters under pressure revert to heuristics (swing at borderline, take inside?). Counter-trap: advanced teams may use model to identify pitcher exploitable decisions. Clock: pitch timing, batter decision window before location fully known [PAGE 13]. Need maybe formal: batter decision at time t < t_plate; info set I_t subset of L; model using full L has information asymmetry. Need discuss.

CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto proof. Need adjudicate cross-layer vetoes. Maybe list veto proofs:
1. If recommended swing at pitch requires contact outside human motor capacity given trajectory, veto; but model already includes contact probability from historical data; still if location/velocity not included, cannot prove physically possible. Use source: did not control for pitch-related factors like type, velocity, or spin [PAGE 13]. Thus any claim of universal optimal swing across physical pitch types is vetoed unless conditional on trajectory.
2. If model uses exact front-edge location for batter decision but batter decides before plate, violates cognitive timing [PAGE 13]. Veto prescriptive claim that batter can condition on exact L; replacement use partial trajectory or timing.
3. Weather: Statcast game-state does not include temperature/wind/altitude? Source doesn't mention. Need say under assumption of exchangeability conditional on C,P,L, if weather alters ball flight or run environment, out-of-sample prediction can break; veto extrapolation to unrepresented weather regimes. Need formal: require P(R|C,P,L,swing,outcome,W) = P(R|C,swing,outcome) for weather W; source assumption excludes W. If W not independent, bias.
Need maybe proof by counterexample: same location, different wind, contact/run outcome distribution changes; model would be misspecified. No equations fake? We can write bias: Δ = E[R|C,swing=1] - E[R|C,swing=1,W]; if nonzero, x_optimal may change.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. Need define RLVR? Maybe "verifiable counterfactual replay". Need three scenarios:
1. Framing borderline take: pitch just outside but catcher framing high. Traditional says take; BART says swing. Veto if posterior probability P(EVdiff>0|data) < 0.5? Prediction: if true p_strike high and contact not too low, E[R|swing]>E[R|take]; observed future similar pitches should have swing EVdiff positive with 90% credible interval maybe exclude zero. Need measurable.
2. Two-out low-leverage low-away: model says swing with high certainty but EVdiff near zero. Veto any metric that labels take as costly. Prediction: posterior mean EVdiff in [-0.01,0.01] runs/pitch, CI includes zero, runs lost minimal. Source says low leverage [PAGE 11]. Use exact maybe 0.01 from Kevan Smith [PAGE 1] and runs added differences small.
3. Personnel marginal effect: if BART(C,P,L) strike/contact probabilities differ by player identity after location, but run expectancy model ignores P,L. Veto counterfactual claims that personnel strongly changes run value beyond outcome. Prediction: swapping pitcher/catcher/umpire while holding C,L, and gstate changes EVdiff only through strike/contact probabilities; if contact/strike probabilities similar, x_optimal unchanged. Verifiable via ablation: set P to marginal, see change less than posterior noise. Or if data sparse, posterior uncertainty expands.
Need include predictions with units.

Need ensure final is >=1000 words. Could be ~2000. Need no prohibited terms. Check "odds" avoid. "totals" avoid maybe in generic? User says never mention spreads, totals, moneylines, or odds. Avoid word "total" maybe? "law of total expectation" contains total. Strict says never mention totals? It says ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds. But source has "law of total expectation". If we use "total expectation" may be considered word total? It says totals maybe betting totals. To be safe avoid "total" except maybe equation? But "law of total expectation" is formal; but strict says never mention totals? Could be interpreted as betting lines. But to be safe, avoid word "totals" and maybe "total". Use "law of iterated expectation"? But source says law of total expectation. Need formal. Could use "sum over outcomes" instead. But equation uses sum. Avoid "total". Also avoid "odds". Avoid "spread". Avoid "money line". Use "run expectancy".

Need mention "totals" maybe no. Use "sum".

Need exact XML sections. Ensure no markdown outside? Probably just XML.

Need citations [PAGE N] and verbatim quotes. We can embed quotes in quotation marks. Need exact. Need maybe page numbers correspond provided. Good.

Let's draft.

Potential issue: source notation uses weird characters for C,P,L? In text it shows blank for maybe calligraphic? It says Given the game-state information , personnel , and location . We can define C,P,L ourselves but source uses maybe ,,? Actually text: Given the game-state information , personnel , and location . Those are control chars? We can say C, P, L as aliases. Need formal.

Need include "BART" equation? Source says BART approximates unknown functions with sums of binary regression trees [PAGE 5]. We can state f(x)=Σ_{j=1}^m g(x;T_j,M_j). Is this invented? It's standard BART. But ZERO TOY EQUATIONS: never invent fake ratios. Standard formal is okay? Need perhaps mark as canonical BART form, not source exact. But they want formal LaTeX. Could include from BART literature. Need cite [PAGE 5] for sum of trees. Need not fake. BART equation is standard, not fake. Use units.

Need BayesREx equation from [PAGE 6]: 
\tilde R_i \sim N(\beta_{g(i)}, \sigma^2), etc. Need include priors. Use exact from source:
\beta \sim N(0, \tau_\beta^2)
\tau_\beta \sim half-t_7
\sigma^2 \sim Inverse-Gamma(\nu/2, \nu\lambda/2)
\beta_{g(i)} \sim N(\bar\beta, \tau_\beta^2)
\tilde R_i \sim N(\beta_{g(i)}, \sigma^2)
Need mention standardized runs. Units: \tilde R_i dimensionless standardized; invert to runs via mean/sd. Breakdown if bins sparse, posterior dominated by prior; but large data makes concentrated [PAGE 7].

Need include data sizes: 380,654 taken pitches, 341,725 swung, 2,853,912 runs model [PAGE 3]. Units pitches. Could mention information units? For uncertainty, posterior probability, credible interval. Could mention entropy in bits optional but not necessary? Strict says SI/information/probability units. Could say probabilities dimensionless, credible intervals dimensionless, expected runs count per pitch, Brier/MSE dimensionless squared-probability or standardized-run squared. If mention information, use bits for entropy of decision uncertainty: H = -p log2 p - (1-p) log2(1-p), but maybe that is toy? It's formal. Could include as diagnostic, not used by paper. But avoid fake? It is okay but not necessary. Need maybe include probability units and run units. SI: runs are counts, dimensionless; time maybe seconds for decision window. Could include decision time t_b < t_home. Units seconds. Maybe physical.

Need ensure no "odds". Search mentally.

Let's produce final with sections. Need word count. Let's estimate. THINK_TRACE 700, SOURCE 700, RETRO 400, ToM 400, CROSS 450, RLVR 500 = 3150. Good.

Need maybe include exact quotes: 
- "We introduce a three-step framework to determine at which pitches Major League batters should swing." [PAGE 1]
- "we determine the optimal swing/take decision using the expected number of runs" [PAGE 3]
- "E[R|C,P,L,swing] = ∑ outcome ..." Need quote with LaTeX? Source text line. Could quote "𝔼[R| , , , swing] = ...". But exact maybe hard. Use quote snippets.
- "We ﬁt our strike probability model using all 380,654 pitches" [PAGE 3]
- "we assume that given the game context, swing decision, and outcome, personnel and pitch location have no predictive effect on expected runs" [PAGE 6] (need exact? Source: "we assume that given the game context, swing decision, and outcome, personnel and pitch location have no predictive effect on expected runs." yes)
- "On average, BARTxR was more accurate than RE24 by 0.009 runs per pitch" [PAGE 7]
- "batters made the xR_optimal decision 69.4 % of the time" [PAGE 10]
- "we only considered two possible outcomes following a swing decision, a miss or contact" [PAGE 13]
- "we did not control for pitch-related factors like type, velocity, or spin" [PAGE 13]
- "the exact location information is unavailable to the batter" maybe quote: "one could reasonably argue that such precise location information is unavailable to the batter" [PAGE 13].

Need maybe avoid weird ligatures. Quotes from provided have "fi" as "ﬁ"? We can use normal? Verbatim maybe exact? It says verbatim quotes. Use text as provided, maybe with "ﬁ"? To be safe copy exact snippets including "ﬁ"? But readability. Could quote exact from user: "We introduce a three-step framework to determine at which pitches Major League batters should swing." has no ligature. "We ﬁt our strike probability model using all 380,654 pitches that were taken during the 2019 season" includes ﬁ. Use exact? I can include "We ﬁt our strike probability model using all 380,654 pitches that were taken during the 2019 season" [PAGE 3]. Good. "E[R" with math maybe not exact. Could avoid quote for equations? Need cite page. But requirement: When source pages are provided, cite exact [PAGE N] markers and verbatim quotes. It might mean when using source text, include citations and quotes. We'll include many quotes.

Need no betting line terms. Avoid "score" maybe okay. "score differential" source. Not betting.

Need final. Ensure XML valid: no unescaped ampersands? In XML, & should be escaped. But we can use plain text; maybe not strict XML parser? Need avoid & or use "and". In LaTeX, use \&? Could be problematic. Use "and" instead. For equations with & align? Avoid. Use simple. Use backslashes. XML tags. Need no unescaped < except tags? LaTeX may have < in text like \sigma< 1. Need escape as &lt; or avoid. In final, if we write \sigma < 1, the < could be interpreted as tag. Use \sigma < 1 with spaces? Still <. Better write \sigma \lt 1? But LaTeX? Could use "less than". Or escape &lt;. We can write \sigma < 1? In XML, < illegal. Use \sigma \le 0.1? Hmm. We can avoid < in equations. For half-t positive axis, no <. For EVdiff ≤ 0, use \le not <. For conditional probabilities, avoid <. Use \mathrm{P}(...) > 0? The > is okay? XML allows > generally, but < not. Use \le, \ge. For p in [0,1]. Good.

Need ampersands in align? Avoid. Use display equations with line breaks no &.

Need exact quotes with percent sign okay.

Let's draft final. Need maybe check word count. I'll write substantial.

Potential issue: "RLVR" maybe need expand. We'll define as "verifiable replay learning veto" maybe. The prompt says RLVR_COUNTERFACTUAL_VETOES. Use that.

Need maybe include "SI units". Runs are dimensionless count, probabilities dimensionless, Brier score squared probability, time seconds. Maybe mention "information units: nats or bits if entropy diagnostic; paper uses posterior probabilities and credible intervals, not raw odds." Avoid odds. Good.

Need ensure THINK_TRACE >=400. Let's make it ~550.

Detailed THINK_TRACE:
- start with decision node: batter chooses swing s∈{0,1} before outcome.
- information set includes count, outs, baserunners, score, personnel, location.
- Need evaluate expected runs conditional on s.
- Paper decomposes via sum over outcomes.
- For swing: contact vs miss; for take: called strike vs ball.
- Estimates: BART probit for strike/contact; BARTxR for expected runs.
- Uncertainty propagation: independent models because disjoint data; multiply/sum posterior draws.
- Decision rule sign EVdiff; if near zero uncertain.
- Gray zones: location only vs full trajectory; personnel partial pooling; run expectancy assumption; low leverage; confounding by pitch distributions; model not robot batters.
- conclusion.

SOURCE_OPERATORS:
Define variables: s, c, k, o, R, C,P,L, G? Use C game state, P personnel, L location.
Equations:
p_S(C,P,L) = P(k=1 | C,P,L, s=0)
p_C(C,P,L) = P(c=1 | C,P,L, s=1)
μ_{s,o}(C)=E[R|C,s,o] under assumption.
E_swing = p_C μ_{1,1} + (1-p_C) μ_{1,0}
E_take = p_S μ_{0,1} + (1-p_S) μ_{0,0}
EVdiff = E_swing - E_take
x_opt = 1 if EVdiff > 0 else 0.
Posterior: P(EVdiff^{(m)} > 0 | data) approx proportion.
BART f = sum tree. Probit: p = Φ(f). Units. Data sizes. BayesREx equation.
Breakdown: if no data in bin, posterior prior; if p_C or p_S at 0/1, decision insensitive; if μ infinite invalid; if categories high-dimensional, sparsity; if C,P,L not independent etc.

Need maybe include Brier: Brier = mean((p_hat-y)^2), dimensionless. RE24 error in runs per pitch.

RETROCAUSAL_GENEALOGY:
Lineage: traditional O-Swing, Z-Swing [PAGE 4]; flaws [PAGE 2]; umpire framing [PAGE 2]; run expectancy RE24 [PAGE 3]; BART [PAGE 5]; EAGLE concurrent [PAGE 5]; uncertainty [PAGE 5]. Multi-week traps: early season small sample, player quality running wOBA [PAGE 3], temporal correlation moderate [PAGE 11], confusing outcome with decision (Smith home run [PAGE 1]), low leverage metrics [PAGE 11], confounding pitch mix [PAGE 10].

RECURSIVE_THEORY_OF_MIND:
Batter mental model: expected strike zone, count, pitcher tendencies. Umpire: biases, previous calls, framing. Catcher: framing. Model recursively estimates these. Crisis habit regression: two strikes, under pressure, regress to swing at borderline; counter-trap: pitcher exploits batter model by throwing low-away with two strikes? Clock: decision before plate, model uses plate location not available; need partial trajectory. Formal info set at t.

CROSS_LAYER_VETO_ADJUDICATION:
Need proof style. Vetoes:
1. Physical reach/contact veto: if no trajectory/velocity/spin, model cannot certify swing decision across physical regimes. Quote page 13. Formal: need conditional independence of R given C,s,o from trajectory X; if P(R|C,s,o,X) ≠ P(R|C,s,o), biased.
2. Cognitive timing veto: exact plate location not available to batter; quote page 13. If decision time t_b < t_plate, then L_t unavailable; using L_t full violates info set. Replacement with predicted location at t_b.
3. Weather/environment veto: if W affects ball flight/run scoring and not in model, conditional independence fails; e.g., high altitude, wind, temperature. Need not mention specific if source not include. Formal: require P(R|C,s,o,W)=P(R|C,s,o). If not, cross-layer veto.

RLVR_COUNTERFACTUAL_VETOES:
Three scenarios. Need verifiable predictions.
1. Framing edge pitch: pitch just outside, high catcher framing, count neutral. Traditional says take, model says swing. Veto if P(EVdiff>0|data) < 0.5? Actually veto scenario where a rule says always take; prediction: posterior probability >0.5 and expected runs difference positive? Need maybe "veto the always-take heuristic". Predictions: for similar pitches, p_strike > threshold? But no threshold invented? We can say if p_strike high enough to make E_take large; model should output P(swing optimal) > 0.5, credible interval of EVdiff maybe positive. Use source example Smith: 12.3% called strike, 83.1% contact, EVdiff mean 0.01 with CI [-0.04,0.08] [PAGE 1]. For a more extreme framing pitch, prediction could be positive. Need not make numeric threshold? Could say if p_strike approaches 0.5? But avoid fake thresholds. We can phrase: If p_strike rises while contact probability and conditional runs remain fixed, E_take increases by (μ_called_strike - μ_ball) Δp_strike; thus a small increase in p_strike can flip x_opt. This is derivative, not fake. Prediction: sign of derivative equals μ_strike - μ_ball. Good. Verifiable by data.
2. Low leverage two-out low-away: model high certainty swing but EVdiff near zero. Veto penalizing take. Prediction: posterior mean EVdiff close to zero and credible interval includes zero; runs lost near zero. Source says low-and-away pitches with two outs and few baserunners [PAGE 10], expected runs similar positive/negative [PAGE 10]. Use.
3. Personnel swap ablation: If x_opt changes when swapping catcher/umpire/batter holding C,L, it must be through p_strike or p_contact, not run conditional expectations because run model assumes personnel no effect [PAGE 6]. Prediction: if posterior probabilities differ less than credible width, x_opt distribution unchanged; if outcome conditional expectation changes due to gstate only. Veto any claim that personnel directly changes run value beyond outcome. Verifiable by ablation.

Need maybe include "RLVR" reward: actual logged outcomes can verify predicted probabilities via Brier/log score? But no odds. Use log loss maybe. Information units: log loss in nats/bits. Could include. But maybe too much.

Need ensure no "totals". Use "sum". In final, search for "total" maybe not. "law of total expectation" avoid. Use "iterated expectation".

Need no "odds". Search. no.

Need no "spread". no.

Need no "moneyline". no.

Need maybe "score" okay.

Let's write final. Ensure XML tags closed. Need no analysis. Use final. already done. Now final.

Double-check prohibited: "totals" maybe if I write "posterior totals" no. Avoid. "total impact" maybe source? Avoid. "expected runs added over an entire season" okay. "sum".

Need exact XML sections. Use <THINK_TRACE> etc.

Let's draft final now. Ensure word count. Use LaTeX with \mathrm. Use 	ext. Need no &.

Potential issue in XML: using backslashes okay. Using [ ] okay. Using quotes okay. Use apostrophes okay.

Let's produce.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s central decision problem is a pre-outcome decision under uncertainty: the batter chooses a binary action, swing or take, before observing the pitch outcome. The source frames the normative target as expected runs, not observed success. This matters because a home run can make a swing look retrospectively brilliant even if the pre-pitch expected-run difference was tiny. The authors explicitly motivate this with Kevan Smith’s 2019 home run, asking whether the swing was correct before the result was known [PAGE 1]. The model therefore evaluates the decision, not the outcome.

The derivation proceeds through three estimation layers. First, the model estimates the probability that a taken pitch is called a strike, conditional on game state, personnel, and pitch location. Second, it estimates the probability of contact conditional on a swing, again using game state, personnel, and location. Third, it estimates expected runs after each possible post-decision state: called ball, called strike, contact, or miss. The authors fit separate Bayesian nonparametric models because the data sets are disjoint: taken pitches, swung pitches, and historical pitches used for run expectancy [PAGE 3]. The paper states, “We ﬁt our strike probability model using all 380,654 pitches that were taken during the 2019 season” and “we ﬁt our contact probability model using all 341,725 pitches at which batters swung in the 2019 season” [PAGE 3]. The run-expectancy model uses “all 2,853,912 pitches thrown between 2015 and 2018” [PAGE 3].

The decision rule is obtained by comparing expected runs under swing and take. The source says the optimal decision is determined “using the expected number of runs” and that the sign of the expected-run difference determines whether to swing [PAGE 3, PAGE 4]. The key gray zone is not whether the equation is valid, but whether the inputs are identified from the available data. The run-expectancy layer makes a strong simplification: conditional on game context, swing decision, and outcome, personnel and pitch location are assumed not to affect expected runs [PAGE 6]. This is weaker than RE24’s assumption that only outs and base runners matter, but it is still a substantive modeling choice. It allows the model to avoid an enormous cross-classification of batters, pitchers, catchers, umpires, locations, and game states, which would otherwise exceed the number of observed pitches [PAGE 6].

Uncertainty propagation is central. Because the component models are fit to disjoint data, posterior draws can be multiplied and summed across outcome branches to produce posterior draws of expected runs under swing and take. The paper states that this enables “natural uncertainty propagation” so that the analysis can “not only determine the optimal swing/take decision but also quantify our confidence in that decision” [PAGE 1]. This prevents a naive overreaction to point estimates. A pitch with a tiny positive expected-run difference should not be treated as a strong indictment of a take decision if the posterior distribution straddles zero. The case study shows exactly this pattern: Trout swung at many borderline pitches where the model was uncertain, and the authors decline to label those as clearly bad decisions [PAGE 9].

A second gray zone is the difference between decision optimality and practical batter cognition. The model conditions on the pitch location as it crosses the front edge of home plate, but the source acknowledges that “such precise location information is unavailable to the batter” because the batter must decide earlier [PAGE 13]. This creates a cross-layer gap between an omniscient decision model and a human decision process operating with partial information. The model is therefore best interpreted as an ex post benchmark, not a literal cognitive mechanism, unless it is extended to partial trajectories or earlier-time information.

A third gray zone is confounding in aggregate metrics. The paper warns that “such comparisons are confounded by differences in pitch situations across players” [PAGE 10]. A batter who sees more high-leverage or favorable pitches may look better or worse for reasons unrelated to skill. The authors also find that traditional metrics and their xR_optimal metric are correlated but not identical, with a correlation of about 0.750 [PAGE 11]. This suggests that conventional strike-zone heuristics capture much of the signal but miss contextual nuance.

Overall, the paper’s strength is the clean mapping from intermediate probability models to an expected-run decision rule, with Bayesian uncertainty propagation. Its main vulnerabilities are the simplifying assumption that post-outcome run expectancy does not depend on personnel or location, the binary contact outcome, and the mismatch between full plate-crossing location and the batter’s earlier decision time.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(s \in \{0,1\}\) denote the batter’s decision, with \(s=1\) for swing and \(s=0\) for take. Let \(c \in \{0,1\}\) denote contact conditional on swinging, and let \(k \in \{0,1\}\) denote a called strike conditional on taking. Let \(C\) denote game-state information, \(P\) denote personnel information, and \(L\) denote pitch location at the front edge of home plate. Let \(R\) denote the number of runs scored by the batting team in the remainder of the half-inning after the pitch. The source defines the expected-run decomposition as \(\mathbb{E}[R \mid C,P,L,s]\), computed by summing over outcomes [PAGE 4]. The source writes this as “\(\mathbb{E}[R|, , , swing] = \sum outcome \mathbb{P}(outcome|, , , swing) \times \mathbb{E}[R|, , , swing, outcome]\)” [PAGE 4].

The strike-probability operator is
\[
p_{\mathrm{strike}}(C,P,L)
=
\mathrm{P}(k=1 \mid C,P,L,s=0).
\]
This is dimensionless and lies in \([0,1]\). The contact-probability operator is
\[
p_{\mathrm{contact}}(C,P,L)
=
\mathrm{P}(c=1 \mid C,P,L,s=1).
\]
This is also dimensionless and lies in \([0,1]\). The source fits these as BART models with probit links [PAGE 6]. In probit form, if \(f_{\mathrm{strike}}\) and \(f_{\mathrm{contact}}\) are latent BART scores, then
\[
p_{\mathrm{strike}} = \Phi(f_{\mathrm{strike}),
\qquad
p_{\mathrm{contact}} = \Phi(f_{\mathrm{contact}),
\]
where \(\Phi\) is the standard normal cumulative distribution function.

The run-expectancy layer is simplified by the assumption
\[
\mathbb{E}[R \mid C,P,L,s,outcome]
=
\mathbb{E}[R \mid C,s,outcome].
\]
The source states this as “we assume that given the game context, swing decision, and outcome, personnel and pitch location have no predictive effect on expected runs” [PAGE 6]. Define
\[
\mu_{1,1}(C) = \mathbb{E}[R \mid C,s=1,c=1],
\]
\[
\mu_{1,0}(C) = \mathbb{E}[R \mid C,s=1,c=0],
\]
\[
\mu_{0,1}(C) = \mathbb{E}[R \mid C,s=0,k=1],
\]
\[
\mu_{0,0}(C) = \mathbb{E}[R \mid C,s=0,k=0].
\]
Each \(\mu\) has units of expected runs per remaining half-inning. The expected runs conditional on swinging are
\[
\mathbb{E}[R \mid C,P,L,s=1]
=
p_{\mathrm{contact}}(C,P,L)\,\mu_{1,1}(C)
+
\left[1-p_{\mathrm{contact}}(C,P,L)\right]\mu_{1,0}(C).
\]
The expected runs conditional on taking are
\[
\mathbb{E}[R \mid C,P,L,s=0]
=
p_{\mathrm{strike}}(C,P,L)\,\mu_{0,1}(C)
+
\left[1-p_{\mathrm{strike}}(C,P,L)\right]\mu_{0,0}(C).
\]
The expected-run difference is
\[
\mathrm{EVdiff}
=
\mathbb{E}[R \mid C,P,L,s=1]
-
\mathbb{E}[R \mid C,P,L,s=0].
\]
The source defines this exactly as “EVdiff = \(\mathbb{E}[R|, , , swing = 1]-\mathbb{E}[R|, , , swing = 0]\)” [PAGE 4]. The optimal decision is
\[
xR_{\mathrm{optimal}}
=
\begin{cases}
1, & \mathrm{EVdiff} > 0,\\
0, & \mathrm{EVdiff} \le 0.
\end{cases}
\]
This is the decision rule shown in the source [PAGE 4].

The Bayesian uncertainty operator is the posterior probability that swinging is optimal:
\[
\mathrm{P}(xR_{\mathrm{optimal}}=1 \mid \text{data})
=
\mathrm{P}(\mathrm{EVdiff} > 0 \mid \text{data}).
\]
With posterior draws \(\mathrm{EVdiff}^{(m)}\), \(m=1,\dots,M\), this is estimated as
\[
\widehat{\mathrm{P}}(xR_{\mathrm{optimal}}=1)
=
\frac{1}{M}\sum_{m=1}^{M} \mathbf{1}\left[\mathrm{EVdiff}^{(m)} > 0\right].
\]
This is dimensionless. The credible interval for \(\mathrm{EVdiff}\) is formed from posterior quantiles, for example the 5% and 95% quantiles for a 90% interval [PAGE 5].

The BART operator is a sum-of-trees function approximator. The source says BART works “by approximating unknown functions with sums of binary regression trees” [PAGE 5]. A canonical formal representation is
\[
f(x)
=
\sum_{j=1}^{m} g(x; T_j, M_j),
\]
where \(T_j\) is the \(j\)-th tree structure and \(M_j\) contains its leaf parameters. The number of trees is \(m\). This representation is used for strike probability, contact probability, and run expectancy.

The hierarchical run-expectancy benchmark in the source is given as
\[
\bar{\beta} \sim N(0,\tau_{\bar{\beta}}^2),
\]
\[
\tau_{\beta} \sim \text{half-}t_7,
\]
\[
\sigma^2 \sim \text{Inverse-Gamma}\left(\frac{\nu}{2},\frac{\nu\lambda}{2}\right),
\]
\[
\beta_{g(i)} \sim N(\bar{\beta},\tau_{\beta}^2),
\]
\[
\tilde{R}_i \sim N(\beta_{g(i)},\sigma^2).
\]
This is the source’s Bayesian RE model [PAGE 6]. Here \(i\) indexes a pitch, \(g(i)\) indexes a bin defined by count, outs, or base-runner configuration, and \(\tilde{R}_i\) is standardized runs [PAGE 6]. The standardized scale is dimensionless; conversion back to runs requires multiplying by the run standard deviation and adding the run mean. The source sets the prior so that \(\mathrm{P}(\sigma < 1)\) is about 90% and uses \(\tau_{\bar{\beta}}^2=100\) [PAGE 6].

Validation metrics include Brier score, which is mean squared error for probabilistic predictions. If \(p_i\) is predicted probability and \(y_i \in \{0,1\}\), then
\[
\mathrm{Brier}
=
\frac{1}{n}\sum_{i=1}^{n}(p_i-y_i)^2.
\]
This has units of squared probability and is dimensionless. Run-expectancy error is measured in squared runs per pitch when not standardized; the source reports that BARTxR was better than RE24 by “0.009 runs per pitch” and better than RE288 by “0.007 runs per pitch” [PAGE 7].

Breakdown regimes are precise. First, if any outcome branch has no observed data, the corresponding conditional expectation is not identified and the posterior reverts to the prior. Second, if \(p_{\mathrm{strike}}\) or \(p_{\mathrm{contact}}\) is exactly zero or one, the corresponding branch dominates and the decision becomes insensitive to the other branch. Third, if \(\mathrm{EVdiff}=0\) exactly, the decision rule assigns take by convention, but the economic difference is null; this is a boundary singularity, not a meaningful advantage. Fourth, if personnel categories become too sparse, partial pooling becomes dominant and player-specific effects may be weakly identified. Fifth, if the assumption \(\mathbb{E}[R \mid C,P,L,s,outcome]=\mathbb{E}[R \mid C,s,outcome]\) fails, then expected-run estimates are biased because omitted personnel or location effects correlate with outcomes. Sixth, if the model is applied to pitch trajectories or game states outside the observed support, extrapolation is not justified. Seventh, if pitch type, velocity, spin, or weather alter contact or run outcomes but are omitted, the conditional independence assumptions become misspecified [PAGE 13].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage begins with traditional plate-discipline metrics, especially O-Swing% and Z-Swing%, which classify batters by how often they swing inside or outside the strike zone [PAGE 4]. The paper criticizes these metrics because they “implicitly assume that all batters should always swing at (resp. take) pitches inside (resp. outside) the strike zone” [PAGE 1]. This assumption ignores umpire behavior, catcher framing, count leverage, and pitch difficulty. The source notes that umpires “do not adhere strictly to the official strike zone” and can be influenced by catcher framing, player status, previous calls, and league monitoring [PAGE 2]. This lineage explains why a simple strike-zone rule can systematically penalize batters who swing at pitches that are slightly outside the rulebook zone but likely to be called strikes.

A second lineage is run expectancy. The paper relates its BARTxR model to RE24, which “computes the average number of runs scored within bins deﬁned by the number of outs and conﬁguration of baserunners” [PAGE 3]. BARTxR generalizes this by using a flexible regression model and by conditioning on broader game-state information. The source reports that BARTxR outperforms RE24 and related variants in cross-validation, with an average improvement of “0.009 runs per pitch” over RE24 [PAGE 7]. This places the paper inside the run-expectancy tradition while moving from discrete binning to Bayesian nonparametric regression.

A third lineage is Bayesian additive regression trees. The source credits BART to Chipman, George, and McCulloch and describes BART as an “off-the-shelf” modeling tool that captures nonlinearities and interactions without requiring the user to pre-specify a parametric form [PAGE 5]. This matters because strike probability and contact probability are likely nonlinear functions of location, count, personnel, and game state. The authors use flexible BART models for strike probability and contact probability, and they use BARTxR for expected runs [PAGE 2, PAGE 6].

A fourth lineage is uncertainty-aware decision analysis. The paper contrasts itself with EAGLE, which also uses tree-based estimates but does not propagate uncertainty from intermediate strike, contact, and run-expectancy models [PAGE 5]. The authors emphasize that “we do not wish to penalize batters for making suboptimal decisions when there is considerable uncertainty about what the optimal decision even is” [PAGE 5]. This is a key historical correction: decision evaluation should not treat every point estimate as equally certain.

Several multi-week traps recur in this domain. The first trap is outcome bias. Kevan Smith hit a home run, but the model finds only a 61.4% chance that swinging increased expected runs and only about 0.01 runs on average [PAGE 1]. A multi-week review process must not confuse a successful outcome with a correct decision. The second trap is small-sample overreaction. Player quality is estimated with running wOBA, and early-season estimates are noisy [PAGE 3]. The third trap is metric confounding. Aggregate plate-discipline metrics depend on the pitches a batter actually sees, so cross-player comparisons can be distorted by pitch mix [PAGE 10]. The fourth trap is temporal instability. The source finds moderate year-to-year correlations, with xR_optimal decision rates correlating around 0.714 to 0.735 across seasons [PAGE 11]. This means a multi-week or multi-season evaluation should not assume perfect stability. The fifth trap is low-leverage overemphasis. The paper warns that batters facing many low-leverage pitches have fewer opportunities to gain or lose expected runs, so raw expected-runs-added metrics can mislead unless adjusted for leverage [PAGE 11].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The model implicitly builds a recursive theory of mind around four agents: batter, pitcher, catcher, and umpire. The batter’s decision depends on beliefs about the probability of a called strike and the probability of making contact. The pitcher’s incentives depend on inducing swings at difficult pitches or obtaining called strikes. The catcher’s incentives include framing pitches near the boundary. The umpire’s incentives include consistency, reputation, and possible biases documented in the source [PAGE 2]. The paper’s Bayesian structure is useful because it treats these agents as sources of uncertainty rather than as deterministic rules.

In crisis habit regression, a batter under high leverage may regress to a learned heuristic: protect the plate with two strikes, expand the zone, or avoid a called strike. The source notes that “batters may be more aggressive on pitches thrown with two strikes to avoid striking out while looking” [PAGE 2]. This is not irrational; it reflects a different objective function from pure expected runs. If the batter is highly loss-averse around strikeouts, the model’s expected-run optimum may diverge from the batter’s psychological optimum. The paper acknowledges that batters are “not robots” and may consider more than expected runs, such as home-run maximization in a record chase [PAGE 12].

In a counter-trap, a pitching team may exploit the batter’s model. If a batter is known to take borderline pitches outside the zone but swing at pitches inside the zone, pitchers may target the batter’s uncertainty boundary. The paper suggests that teams can identify “pitch locations where a batter consistently makes suboptimal swing decisions” and that pitchers can target those locations [PAGE 12]. This creates an adversarial loop: the batter’s decision policy becomes known, and the pitcher updates location selection accordingly. The recursive model must therefore distinguish between a static optimal decision and a dynamic equilibrium where pitcher behavior responds to batter behavior.

The clock layer is especially important. The batter does not observe the final plate-crossing location at the moment of decision. The source explicitly says that “insofar as batters decide to swing or take the pitch before it reaches home plate, one could reasonably argue that such precise location information is unavailable to the batter” [PAGE 13]. Formally, let \(t_{\mathrm{dec}}\) be the batter’s decision time and \(t_{\mathrm{plate}}\) the plate-crossing time. The model conditions on \(L\) at \(t_{\mathrm{plate}}\), but the batter’s information set at \(t_{\mathrm{dec}}\) is smaller. A more realistic cognitive model would condition on the pitch trajectory up to \(t_{\mathrm{dec}}\), not the final location. This is a recursive timing problem: the batter must infer the final location from early trajectory, pitcher history, and count context, while the model currently evaluates the decision with perfect terminal location.

The umpire and catcher add another recursive layer. If the batter believes the catcher frames well, the batter’s perceived called-strike probability rises. If the batter believes the umpire is strict on low pitches, the batter’s perceived value of taking a low pitch falls. The BART strike model can capture these effects through personnel predictors, but the batter’s subjective beliefs may not match the model’s posterior. Thus the model can identify what the batter should do under estimated probabilities, but it cannot fully identify what the batter believes at the moment of decision unless those beliefs are explicitly modeled.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A cross-layer veto occurs when a recommendation from the statistical decision layer violates a physical, biomechanical, cognitive, or environmental constraint not represented in the model. The first veto is the physical pitch-identity veto. The model conditions on location, game state, and personnel, but the source says the authors “did not control for pitch-related factors like type, velocity, or spin” [PAGE 13]. Therefore, if two pitches have the same terminal location but different velocity or spin, the model may treat them as exchangeable when they are not. Formally, the model assumes
\[
\mathrm{P}(R \mid C,P,L,s,outcome)
=
\mathrm{P}(R \mid C,s,outcome).
\]
If trajectory variables \(X\), such as pitch type, velocity, spin, or movement, affect contact or run outcome, then the correct condition is
\[
\mathrm{P}(R \mid C,P,L,X,s,outcome).
\]
If \(X\) is omitted and correlated with location or personnel, the expected-run estimate is biased. Veto proof: any prescriptive claim that a swing is optimal solely because of terminal location must be blocked unless the model conditions on the relevant physical trajectory variables or demonstrates that those variables are ignorable conditional on the included predictors.

The second veto is the biomechanical reaction-time veto. A swing decision requires motor planning before the ball reaches the plate. The model uses the location at the front edge of home plate, but the batter must decide earlier. The source acknowledges that “such precise location information is unavailable to the batter” [PAGE 13]. Let \(L_t\) be the estimated pitch location available at decision time \(t_{\mathrm{dec}}\), while the model uses \(L_{t_{\mathrm{plate}}}\). If
\[
L_{t_{\mathrm{dec}}} \neq L_{t_{\mathrm{plate}}},
\]
and the batter cannot observe the difference, then the model’s information set is too rich. Veto proof: a recommendation that assumes the batter can condition on \(L_{t_{\mathrm{plate}}}\) is not executable. The statistically valid replacement is to evaluate the decision using the information available at \(t_{\mathrm{dec}}\), or to use a trajectory model that predicts the location distribution at decision time.

The third veto is the environmental weather veto. The model includes game-state and personnel information but not weather, altitude, temperature, wind, or humidity. If weather changes ball flight, contact quality, or run scoring, then the conditional independence assumption fails across weather regimes. Let \(W\) denote weather and environmental state. The model requires
\[
\mathrm{P}(R \mid C,P,L,s,outcome,W)
=
\mathrm{P}(R \mid C,P,L,s,outcome)
\]
for weather to be ignorable. If this equality fails, then expected-run estimates are regime-dependent. Veto proof: any claim that the decision rule applies unchanged across all environments is blocked unless the model either includes \(W\) or demonstrates that \(W\) is independent of the relevant outcome branches conditional on the included variables. This is especially important for extreme environments where pitch movement or carry changes substantially.

The fourth veto is the run-expectancy structural veto. The model assumes that, after conditioning on game context, swing decision, and outcome, personnel and location do not affect expected runs [PAGE 6]. This may fail if certain personnel combinations change base-runner advancement, double-play probability, or hit quality in ways not captured by the outcome label. For example, if contact with a particular pitcher leads to different batted-ball distributions even after conditioning on the binary contact outcome, the assumption is violated. Veto proof: if a personnel-specific or location-specific residual predicts runs after conditioning on \(C,s,outcome\), then the simplified run-expectancy layer must be rejected or extended.

The fifth veto is the sparse-data extrapolation veto. The paper notes that accounting for all combinations of batters, umpires, and catchers would require “over 10 million bins, far exceeding the number of pitches in our dataset” [PAGE 6]. Therefore, if a counterfactual requires a personnel combination with little or no support, the posterior may be dominated by partial pooling. Veto proof: any high-confidence decision claim for an unobserved or extremely sparse personnel combination is blocked unless posterior uncertainty is explicitly reported and the decision remains stable under prior sensitivity checks.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
The following are three verifiable RLVR-style counterfactual veto scenarios. “Verifiable” means that the veto can be tested against logged pitch data, posterior predictive checks, or ablation experiments.

Scenario 1: Borderline take pitch with high framing probability.  
A traditional heuristic says take any pitch outside the rulebook strike zone. The source criticizes this because umpires do not strictly follow the rulebook and because catcher framing can influence calls [PAGE 2]. Suppose a pitch is just outside the lower corner, but the catcher has strong framing and the umpire’s historical called-strike probability is high. The counterfactual veto blocks the unconditional rule “take because the pitch is outside the zone.”  
Formal prediction: if \(p_{\mathrm{strike}}(C,P,L)\) is sufficiently high and \(\mu_{0,1}(C)\) exceeds \(\mu_{0,0}(C)\), then taking becomes more valuable. The derivative of expected runs with respect to called-strike probability is
\[
\frac{\partial \mathbb{E}[R \mid C,P,L,s=0]}{\partial p_{\mathrm{strike}}}
=
\mu_{0,1}(C)-\mu_{0,0}(C).
\]
If this derivative is positive, increasing the probability of a called strike increases the value of taking. The model should therefore output a posterior probability \(\mathrm{P}(\mathrm{EVdiff}>0 \mid \text{data})\) that can exceed 0.5 even for a pitch outside the rulebook zone.  
Verifiable prediction: among pitches with similar location, count, and game state, the subset with higher estimated called-strike probability should show a higher posterior probability that taking is optimal, holding contact probability and run expectancy fixed. If the data show no such relationship, the model’s strike-probability layer is suspect.

Scenario 2: Two-out, low-leverage, low-and-away pitch.  
The source finds that low-and-away pitches can appear differently depending on outs and base runners. It says that such pitches occur “when there are two outs and few baserunners” and that the expected runs from positive and negative outcomes are similar in those contexts [PAGE 10]. A naive evaluator might penalize a batter for taking a low-and-away pitch if the model labels swing optimal, even when the expected-run difference is nearly zero.  
Formal prediction: for two-out, few-baserunner states, the posterior mean of \(\mathrm{EVdiff}\) should be close to zero, and the credible interval should often include zero. The expected runs lost by taking such a pitch should be approximately
\[
\max(0,-\mathrm{EVdiff}),
\]
which is near zero when \(|\mathrm{EVdiff}|\) is near zero.  
Verifiable prediction: if we stratify pitches by leverage, defined as the magnitude of \(\mathrm{EVdiff}\), the distribution of runs lost should be concentrated near zero for low-leverage pitches. If a metric assigns large penalties to takes in these states, the metric is vetoed unless it can show that the posterior credible interval excludes zero and the magnitude is practically meaningful.

Scenario 3: Personnel ablation veto.  
Suppose a counterargument claims that a particular catcher, umpire, or batter changes the expected-run value of a swing decision directly, beyond changing strike or contact probabilities. Under the paper’s run-expectancy assumption, personnel and location do not directly affect expected runs after conditioning on game state, swing decision, and outcome [PAGE 6]. Therefore, any personnel effect must operate through \(p_{\mathrm{strike}}\), \(p_{\mathrm{contact}}\), or the game-state transition induced by the outcome.  
Formal prediction: if we replace personnel \(P\) with a marginal or alternate personnel profile while holding \(C\) and \(L\) fixed, the change in expected runs should be decomposable as
\[
\Delta \mathbb{E}[R \mid s=1]
\approx
\Delta p_{\mathrm{contact}}\left(\mu_{1,1}-\mu_{1,0}\right),
\]
\[
\Delta \mathbb{E}[R \mid s=0]
\approx
\Delta p_{\mathrm{strike}}\left(\mu_{0,1}-\mu_{0,0}\right).
\]
If the alternate personnel profile produces a large change in expected runs while \(p_{\mathrm{strike}}\), \(p_{\mathrm{contact}}\), and the outcome-conditional run values remain effectively unchanged, the claim is vetoed under the model’s stated assumptions.  
Verifiable prediction: an ablation that swaps catcher or umpire identity should change \(\mathrm{EVdiff}\) only to the extent that the strike or contact probability posterior changes. If the posterior probability of swinging changes by more than posterior uncertainty while the intermediate probabilities do not change, the model or the implementation is inconsistent.

Additional RLVR check: all three veto scenarios require reporting uncertainty. A decision should not be treated as a hard veto or hard endorsement when \(\mathrm{P}(\mathrm{EVdiff}>0 \mid \text{data})\) is near 0.5. The source’s own case study shows this: Smith’s swing had only a 61.4% posterior probability of increasing expected runs and an average effect of about 0.01 runs, with a 90% credible interval of \([-0.04,0.08]\) [PAGE 1]. That example demonstrates why verifiable counterfactual vetoes must include posterior intervals, not merely point predictions.
</RLVR_COUNTERFACTUAL_VETOES>