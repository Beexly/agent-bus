---
source: "2023 - A causal approach for detecting team-level momentum in NBA games - Weimer, Steinert-Threlkeld, Coltin.md"
folder: "/GSE-Research/sports-research-papers/md/library/journals/Journal of Sports Analytics/2023"
pages: 22
model: deepseek/deepseek-v4.1-flash-1017
words: 7902
---

<NATIVE_REASONING>
We need answer with required XML sections, deep, >=1000 words total. Need use source pages? Source text no [PAGE N] markers. Need cite exact [PAGE N]? The prompt says when source pages provided cite exact markers and verbatim quotes. But source text lacks page markers. We can cite section names / no page markers? We must not invent page citations. Need perhaps note that no [PAGE N] markers are present in provided extraction, so cite section headings and verbatim quotes. Need avoid betting lines. User asks about source on NBA momentum. Need produce frontier reasoning foundry, zero betting lines. Need include formal LaTeX equations, units, assumptions, singularity/breakdown regimes. We need integrate source operators and equations. Since equations lost, need reconstruct? We can state extraction says equations lost; formalize the operational definitions with LaTeX, but mark as reconstruction from prose. Need be careful not pretend exact equation. Need include Poisson regression, propensity score, treatment effect, percentage conversion, Monte Carlo, matched design, AIC bootstrap. Need explain causal assumptions: SUTVA, unconfoundedness/exogeneity of TV timeout, overlap, consistency, no hidden treatment variation; matching on observables; hidden bias from non-substitution strategy. Units: points per 3 minutes game time, counts, probability, log points, percent. Need singularity/breakdown regimes: sparse long runs n=48; positivity failure; no overlap; treatment variation due coach timeouts; time-window dilution; post-treatment substitution mediation; "momentum" threshold; game-context; TV timeout schedule and quarter interactions; measurement of points not per-possession. Need RETROCAUSAL_GENEALOGY: lineage hot hand Gilovich et al 1985, Miller & Sanjuro 2018 finite sequence bias, Bocskocsky shot selection, Arkes/Martinez, Munoz et al, Morgulev, Schilling, Assis, Gibbs, Permutt, Roane, TV timeout natural experiment, causal inference in sports (Yam/Lopez, Price). Multi-week traps: overinterpreting 11.2%; 0.56 points not win probability; threshold p-hacking; time-window; substitution mediator; coach timeout confounded; selection bias; null Monte Carlo limited; small n long runs; lost equations; notational data; extrapolation to other sports; "momentumed team should not substitute" causal claim from matched regression; TV timeout not perfectly exogenous? Need discuss.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Need interpret as in sports decision-making? Crisis habit regression: coaches/fans default to "call timeout to stop run"; paper says TV timeouts exogenous reduce scoring 11.2%, so belief partially supported but mechanism includes stoppage and substitution. Counter-trap: if momentum team substitutes, larger negative effect (16.1%) than timeout; so coaches of momentum team should avoid substitutions during TV timeout. Clock: TV timeout schedule predetermined, 100s, first stoppage after 9-min mark etc; three-minute outcome window max until next break; clock boundaries. Need recursive ToM: coaches model opponent momentum, referee/TV schedule, players' psychology, analysts; crisis habit regression = attributing runs to momentum and using timeouts reflexively; counter-trap = the timeout may help defense but harming own continuity if you're momentum team; clock = mandatory TV breaks impose exogenous pauses, so strategizing around them. Need include "zero betting lines."

CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto proof. Need connect sports: physical fatigue, biomechanics of shooting, travel, injuries, weather not relevant indoor NBA. Need veto proof: TV timeout 100s pause could allow physiological recovery (anaerobic alactic/lactic? Basketball intermittent), hydration, coaching; biomechanical reset of shooting; indoor weather controlled, so weather veto is non-operative. Need state "physical/biomechanical/weather veto proof" perhaps evaluate whether physical layers could explain observed effect instead of momentum. Need show substitution counts proxy strategy; fatigue not directly measured; but effect persists without substitutions and in first TV timeouts, garbage/crunch subsets. Need formalize veto conditions: If fatigue recovery time constant τ_f ~ 100 s and treatment alters recovery, then effect could be physiological not "momentum"; cannot fully rule out without player tracking. Biomechanical: shooting touch reset; not measured. Weather: NBA indoor, no direct weather exposure; travel/arena climate possible but not in source. Need "proof" via cross-layer veto: the effect cannot be attributed solely to substitutions because no-sub model still -0.068 (6.57%); cannot be purely mean reversion because run-size coefficient near zero; cannot be solely coach strategy because no-sub and subsets; but cannot veto physiological reset or non-substitution tactical changes. Need perhaps "veto proof" as audit: if any layer fully explains outcome, source claim is vetoed; evidence only partially vetoes substitution/mean-reversion/strategy proxies; does not veto fatigue/psychology. Need be exact.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = reinforcement learning with verifiable rewards? Need produce 3 scenarios that would falsify/veto the paper claim, with predictions. Must be verifiable. Examples:
1. Exogenous pause-only manipulation without substitutions: if randomly inserted 100-s pause at same game states and no substitutions, momentumed team scoring decrease should replicate ~6.57% not full 11.2%; if no decrease, veto. Prediction: treatment effect on points next 3 min negative, IRR ~0.934 (6.57% lower) in no-sub sample; if IRR ≥1 or CI includes 1, veto "pause causes momentum stop."
2. Substitution mediation test: within TV timeouts, randomize momentum team substitutions vs no substitution; if momentum-team substitution does not reduce subsequent points more than timeout alone (expected IRR -0.176 vs -0.068? Need compare), veto "don't sub momentum team" recommendation. Prediction: substitution coefficient negative and larger magnitude than timeout-only; if not, veto.
3. TV timeout exogeneity/positivity test: verify TV timeout assignment independent of run state conditional on schedule covariates; if TV timeout probability depends on score/run beyond rule schedule or if matching overlap fails, veto causal claim. Prediction: propensity score overlap and covariate balance; if systematic imbalance in unobserved proxies or no overlap for long runs, causal estimate invalid. Or Monte Carlo negative control replication: simulate independent scoring with same matching; if simulated TV timeout shows nonzero effect, veto methodology. But they did that. Need 3 verifiable RLVR veto scenarios + predictions. Could include "long-run sparse sample" n=48. RLVR maybe reward verification: pre-register metrics and thresholds. Need include predictions with numbers.

Need overall >=1000 words. Likely 2500-3500. Need XML only or can have preamble? They ask exact XML sections. We should produce exactly those sections, maybe no extra. Need include [PAGE N]? There are no page markers. Could write "No [PAGE N] markers are present in the supplied extraction; citations below use section headings and verbatim quotes from the supplied text." This is important to satisfy not inventing. But they demanded cite exact [PAGE N] markers when source pages provided. Here pages: 22 but no markers. We can state limitation. Need maybe not use [PAGE N] because none. Could cite "PAGES: 22" as metadata not page markers. Need not fabricate. Use verbatim quotes with quotation marks from source. Good.

Need integrate formal equations. Need formulate equations for momentum indicator: \(m_i = \mathbf{1}[p_u \ge 6]\). Units: points. Run threshold 6,10,15. Outcome \(Y_i(t)\) points in next t minutes. Treatment \(D_i=1\) TV timeout. Matching propensity \(e(X_i)=P(D_i=1|X_i)\) logistic. Match each treated to nearest control. Estimator: Poisson log link \(\log E[Y_i|D_i,X_i] = \beta_0 + \beta_1 D_i + \beta_2 R_i + \beta_3 S_i^M + \beta_4 S_i^O\). \(Y_i\) count points in 3 min. \(\beta_1\) log-point change; IRR \(e^{\beta_1}\). They quote \(e^{-.119}-1=-.112\). Causal ATE under assumptions. Need include potential outcomes \(Y_i(1),Y_i(0)\). \(ATE = E[Y_i(1)-Y_i(0)|m_i=1]\). Matching identifies if \(Y_i(1),Y_i(0) \perp D_i | X_i\), overlap \(0<e(X)<1\), SUTVA, consistency. Also no hidden treatment variation (all TV timeouts same? 100s). Need note "matching all timeouts likely violates hidden variation assumption" quote.

Need "singularity/breakdown regimes":
- Positivity/overlap failure for long runs: n=48, run≥15, coefficient -0.368 (30.79%) with SE 0.129; sparse cells; if n→small, variance →∞; PSM discards unmatched; estimates unstable.
- Misclassification/threshold: \(m_i\) at 6; if threshold too low, includes noise; if too high, selection into rare events and low power.
- Time-window breakdown: \(t=3\) min chosen because max until next break; effect decays with t; no significant effect 3-4 min; if t→∞, treatment effect diluted to zero because other events dominate; if t→0, effect larger (~4x first minute) but high variance.
- Substitution as post-treatment mediator: including \(S_i\) as control changes estimand from total effect to direct effect; if substitution is affected by treatment, coefficient \(\beta_1\) is not total causal effect. They say TV timeout effect between substitutions. Need mention.
- Exogeneity breakdown: if TV timeout timing depends on game state (e.g., first stoppage after 9-min mark, unless voluntary timeout) or if coaches anticipate TV timeout and alter play before it; if unobserved strategy changes correlated with treatment, unconfoundedness fails.
- "Momentum" construct breakdown: unanswered points within game; not same as hot hand; team-level; outcome points not per-possession; no adjustment for possession count, pace, opponent quality, score margin except robustness subsets; if pace differs, points count confounded. Need mention.
- "No substitutions" sample 4,644 vs 5,148? Wait Table 4 observations 4,644, effect -0.068. The text says 6.57% fewer points, 41% smaller than TV timeouts with substitutions (Table 3). But Table 3 -0.119 is 11.2%; 6.57% is about 41% smaller. They attribute 59% to stoppage and rest strategy. But no-sub sample still includes TV timeouts where no substitutions, but Table 3 with substitutions includes substitution controls. Need not overstate.

Need cite exact quotes:
- Abstract: "TV timeouts cause an 11.2% decline in the number of points that the team with momentum subsequently scores."
- "momentumed teams score 0.56 fewer points on average during the 3 minutes after a TV timeout as compared to matched teams that do not experience a timeout."
- "Since TV timeouts occur at points exogenous to momentum, they enable the measurement of the effect of pauses in the game separate from the effect of strategy changes."
- "The occurrence of a TV timeout during a run, however, is not sufficient to test momentum because coaches can change strategy during the timeout in ways that may affect subsequent scoring."
- "If coaches change strategy during TV timeouts, any resulting decrease in points scored for the momentumed team could be due to the concurrent change in strategy and not the interruption of momentum."
- "After TV timeouts in which neither team substitutes a player, 6.57% fewer points are scored, an effect about 41% smaller than TV timeouts with substitutions (Table 3)."
- "The momentumed team substituting a player negatively affects a run and does so more than the TV timeout. It reduces subsequent points by about 16% (e^-.176-1=-0.161)."
- "An implication of this result is that coaches of momentumed teams should not substitute players during a TV timeout."
- "the coefficient on the size of the current run is.001, and it is not statistically significant" Wait table says -0.002, text says .001; quote exact? The text: "The coefficient on the size of the current run is.001, and it is not statistically significant in any regression." That seems inconsistent with table. We can quote and note table shows -0.002. Need maybe avoid or mention inconsistency. This is a gray-zone audit. Good.
- "the 6 and 10 point models fit the data better than the models using 15 point runs" etc.
- "only 11.85% of runs are of six or more unanswered points"; "only 8.47% of runs of six points or more are of more than 10 points."
- "TV timeouts decrease subsequent scoring for runs of 17 points or fewer."
- "no significant relationship between the TV timeout and points scored between the next three and four minutes."
- "Results from this analysis are largely similar, though the effect size of coaches’ timeouts is slightly larger on average."
- "The difference was not significant."
- "A potential limitation of this paper is that TV timeouts may not be exogenous to gameplay change."
- "we are aware of no readily available source of notational data."
- "Monte Carlo simulation where the true momentum effect is known... zero momentum effect... null result on the variable subsequent TV timeout confirms..."
- "Appendix B negative binomial... substantively identical"
- "Appendix C... first TV timeouts... garbage time... crunch time... results do not change."
- "Appendix D... 60 seconds... to four minutes... point estimate steadily decreases as more post-treatment time is included"
- "Appendix E coaches' timeouts... effect size slightly larger"
Need not use all.

Need mention "zero betting lines" no odds. Avoid words "betting lines" except maybe quote? Source includes "betting lines" in background. The invariant says never mention spreads, totals, moneylines, or odds. "betting lines" might be close; we should avoid. Don't quote that part. Good.

Need avoid "toy equations" like Force/Fatigue. Use formal equations. Need units and assumptions. We can include a table? XML can include prose. Use LaTeX.

Need word count. Let's draft with sections. Need at least 400 in THINK_TRACE. Overall >=1000; likely 3000.

Potential issue: "RLVR" maybe in context of reinforcement learning verifiable rewards; we can frame as "RLVR-style counterfactual veto tests" with pre-registered verifiable outcomes. Good.

Let's structure:

<THINK_TRACE>
- State no page markers; no equations. Multi-hop derivation:
  1 construct: momentum indicator \(m_i\) threshold 6; treatment \(D_i\) TV timeout; outcome \(Y_i\) points next 3 min; matching propensity; Poisson.
  2 causal chain: TV timeout -> pause -> momentum dissipation -> fewer points; confounding paths: coach strategy, substitutions, mean reversion, fatigue, opponent quality, pace, score context.
  3 estimand: total effect vs direct effect; substitution as mediator. Table 3 controls substitution, so \(\beta_1\) is conditional/direct-ish; Table 4 no-sub isolates pause+non-sub strategy.
  4 evidence audit: main -0.119 log points = 11.2%; 0.56 points; no-sub -0.068 = 6.57%; substitution by momentum team -0.176 = 16.1%; opposing -0.077 = 7.41%; long runs.
  5 gray-zone: table/text inconsistency run-size coefficient; 15+ n=48; matching all timeouts hidden variation; TV timeout exogeneity; no notational data; outcome points not possessions; no direct mechanism; Monte Carlo limited.
- Need >=400 words. This can be ~700.

<SOURCE_OPERATORS_AND_EQUATIONS>
- Formal LaTeX and units. Include equations:
\(m_i=\mathbf{1}\{p_{u,i}\ge \tau\}\), \(\tau=6,10,15\) points.
\(Y_i(t)=\) points by momentumed team in \((T_i,T_i+t]\), \(t=180\) s game time (3 min).
\(D_i=1\) TV timeout immediately after scoring event.
\(e(X_i)=P(D_i=1|X_i)=\frac{\exp(X_i^\top\gamma)}{1+\exp(X_i^\top\gamma)}\).
\(j(i)=\arg\min_{j:D_j=0} |\hat e(X_i)-\hat e(X_j)|\).
Poisson: \(Y_i|D_i,X_i\sim\mathrm{Poisson}(\lambda_i)\), \(\log \lambda_i=\beta_0+\beta_1D_i+\beta_2R_i+\beta_3S_i^M+\beta_4S_i^O\).
IRR \(e^{\beta_1}\); percent \(100(e^{\beta_1}-1)\).
Main: \(\hat\beta_1=-0.119\), SE .012, IRR .888, -11.2%; \(\hat\lambda\) difference 0.56 points per 3 min.
Assumptions: SUTVA, consistency, unconfoundedness \(Y_i(1),Y_i(0)\perp D_i|X_i\), overlap, correct propensity model, no hidden treatment variation, matching quality; Table A1 balance.
Breakdown regimes: positivity failure long runs n=48; threshold; time window; post-treatment mediation; exogeneity violation; outcome count not pace-adjusted; lost equations; no page markers. Include quotes with citations section headings.

<RETROCAUSAL_GENEALOGY>
- Lineage: Gilovich et al 1985 hot hand skepticism; Kahneman; Miller & Sanjuro finite sequence bias; Bocskocsky shot selection; Arkes & Martinez season momentum; Munoz et al; Morgulev et al beliefs; Schilling/Morgulev no team momentum; Permutt/Roane descriptive timeouts; Assis/Gibbs causal coach timeouts no effect/slight negative; TV timeout natural experiment; causal inference in sports Yam/Lopez, Price. Multi-week traps: overfit threshold, time window, post-treatment controls, extrapolate to strategy recommendations, "momentum" vs "hot hand", source extraction missing equations. Need cite quotes. Maybe mention "retrocausal" as lineage from older hot-hand debate to current causal design. "Multi-week traps" maybe "long-horizon traps" in research: using coach timeouts as treatment, controlling for post-treatment substitutions, selecting run thresholds, interpreting 0.56 as win probability. Need include.

<RECURSIVE_THEORY_OF_MIND>
- Coaches' crisis habit regression: default "timeout stops run"; paper partially validates but shows TV timeout exogenous; counter-trap: if you're momentum team, substituting during TV timeout is worse (-16.1%) than timeout alone; so avoid sub. Clock: TV timeout 100s, scheduled first stoppage after 9-min mark in second quarter unless voluntary timeout; three-minute window. Recursive ToM: coaches anticipate opponent's timeout, analysts anticipate coach behavior, players anticipate pause; mandatory TV timeout can serve as unplanned reset. Need discuss "crisis habit regression vs counter-trap vs clock" explicitly. Use "regression" as habit regression (fallback behavior). Mention no betting.

<CROSS_LAYER_VETO_ADJUDICATION>
- Physical: 100s pause can alter fatigue/arousal; not measured; no-sub result still negative so substitution not sole. Biomechanical: shooting touch, warm-up, arousal; no tracking data. Weather: NBA indoor; weather veto non-operative; arena climate/travel not measured. Cross-layer veto proof: to veto paper, need show a physical/biomechanical/weather variable that (a) correlates with TV timeout, (b) predicts points, (c) explains all effect; none in source. Evidence: no-sub 6.57%, subsets, negative binomial, Monte Carlo. But unobserved notational data remains. Need state "proof" is conditional, not absolute. Include exact quotes.

<RLVR_COUNTERFACTUAL_VETOES>
- Three scenarios with verifiable predictions:
1. Pause-only randomized insertion at matched game states, no substitutions, 100s. Prediction: \(\hat\beta_1\approx -0.068\) log points (6.57% decrease), 95% CI excludes 0; if \(\hat\beta_1\ge0\) or CI includes 0, veto "pause alone stops momentum." This is verifiable via play-by-play + video substitution coding.
2. Substitution mediation counterfactual: randomize momentum team substitution during TV timeout. Prediction: substitution coefficient \(\hat\beta_{S^M}\approx -0.176\), IRR .839, ~16.1% reduction, larger than TV timeout-only; if no extra reduction or sign flips, veto recommendation. Need be careful: Table 3 substitution coefficient is -0.176 per substitution? It says number substitutions made, range 0-5; coefficient per substitution? It says "substituting a player" but variable is count. We can state per additional substitution. Prediction: per additional momentum-team substitution, IRR \(e^{-0.176}=0.839\), ~16.1% fewer points; if CI includes 1 or effect not larger than timeout, veto.
3. Exogeneity/overlap/negative-control audit: reconstruct TV timeout assignment from NBA rule schedule and test \(D_i\perp\) run state/score conditional on schedule; replicate Monte Carlo null. Prediction: no residual association between TV timeout and pre-treatment run size/score beyond schedule; propensity overlap; simulated null \(\hat\beta_1\approx0.002\) with SE 0.022, CI includes 0. If residual association or simulated null nonzero, veto causal interpretation. Need include "verifiable" thresholds.

Need also maybe mention "RLVR" reward: success if metric crosses threshold. Good.

Need be mindful of XML parse: Use no unescaped `<` in text? In XML, use &lt; for <. We can use LaTeX with < maybe problematic. Better escape `<` as `&lt;` or avoid. Use \(p_u \ge 6\) no `<`. Use `\le` maybe okay. Use `\ge`. Avoid `<` signs. Use "less than" words. In XML, ampersands need escape if any. Avoid `&`. Use "and" not ampersand. Use `&lt;` if needed. Need escape `>`? Not necessary except `]]>`; but safe. Use `\geq` etc. Avoid `&` in "AIC and log-likelihood". Good. Use `%` okay. Use `$` okay. Use quotes okay. Need use `\mathbf{1}`. Fine.

Need exact XML sections. Could include a header note inside THINK_TRACE about page markers. That's okay.

Need word count. Let's draft in final. Ensure not too short. We need maybe 3000 words. Need not include a preamble. Let's produce only XML sections. But XML with LaTeX backslashes okay. Need no markdown? Fine.

Let's write with depth.

Potential issue: "PAGES: 22" but no [PAGE N]. We can say "The supplied extraction contains no [PAGE N] markers; therefore I do not fabricate page numbers. Citations are to section headings and verbatim text." This is transparent. Include in THINK_TRACE and SOURCE_OPERATORS. The instruction "when source pages are provided, cite exact [PAGE N] markers" but none present. Good.

Need "verbatim quotes" exact. Ensure quotes match source. We can use several exact. Need not overquote.

Need discuss "equations lost" and formalizations are reconstructions. In SOURCE: "The source header states: 'EQUATIONS ARE LOST (MathJax does not survive text extraction) and figures/appendices are absent. Consult the publisher page for any formula.'" That's a quote from header? It's comment, not paper. Use as source metadata. Good.

Need maybe include "No betting lines" not mention.

Need formal units: "points per 3 minutes of game clock" not real time? The outcome is game time. TV timeout lasts 100 seconds real time; game clock stopped. Need clarify: 100 seconds is real-time break; outcome is 3 minutes of game time. This is important. The source says "each TV timeout lasted 100 seconds" and "three minutes of game time subsequent". Use units: seconds real time for break, minutes game clock for outcome, points count. Good.

Need "singularity/breakdown regimes" exact: We can label "Breakdown regimes" and include equations for variance? Maybe:
- For Poisson, \(Var(Y_i)=\lambda_i\); overdispersion leads to negative binomial. If \(\phi>1\), Poisson SE too small; they check NB.
- Sparse long-run: \(n=48\), \(\hat\beta=-0.368\), SE .129; CI approx [-0.621,-0.115]? Compute 1.96*0.129 = .253; CI [-.621,-.115]. IRR .692; -30.8%. Good. We can state approximate. For main -0.119 SE .012 CI [-.143,-.095]; IRR [0.867,0.909]; percent [-13.3,-9.1]? Actually e^-0.143=.867, e^-0.095=.909; percent -13.3 to -9.1. Good. For no-sub -0.068 SE .013 CI [-.093,-.043]; IRR [0.911,0.958]; percent -8.9 to -4.2. Approx. Need not overdo.

Need "matching discards unmatched" and "Table A1 balance". Good.

Need "AIC bootstrap" maybe mention.

Need "retrocausal genealogy" multi-week traps: maybe "the 30-year hot-hand reversal" and "future research with notational data". Good.

Need "Recursive theory of mind" maybe formalize? Not necessary but can include mini equations? The section requirement not formal. Could include:
\(B_c(\text{timeout stops run})\) coach belief; \(B_p\) player belief; recursive: \(B_c^{(k+1)}=f(B_c^{(k)}, B_{\text{opp}}, \text{clock})\). But avoid toy. Could be okay but not needed. We can discuss.

Need "CROSS_LAYER_VETO_ADJUDICATION" "physical/biomechanical/weather veto proof" - maybe include a "veto matrix" with conditions. We can write in prose.

Need "RLVR_COUNTERFACTUAL_VETOES" 3 scenarios. Good.

Let's draft carefully.

Need include exact [PAGE N]? Since none, no. But maybe "PAGES: 22" not page-specific. We can say "No [PAGE N] markers appear in the supplied text; page-level citation is impossible without fabrication." This satisfies.

Potential issue: The source text has "momentumed" typo. Quotes preserve. Fine.

Need avoid "odds" word. Source has "betting lines" but we won't quote. Avoid "spread." Good.

Need avoid "moneyline." Good.

Let's compose final. Use XML tags exactly. Ensure no unescaped ampersand. Use "and" instead of &. In LaTeX, `\top` okay. Use `\perp` okay. Use `\mathrm{Poisson}`. Use `\hat{e}`. Use `\geq`. Good. Avoid `<` entirely. Use "less than". Use `>`? XML text can contain >. Fine.

Need word count likely 3500. Let's write.
</NATIVE_REASONING>

<THINK_TRACE>
The supplied extraction contains no [PAGE N] markers; therefore I do not fabricate page-level citations. I cite section headings and verbatim phrases from the supplied text. The source header also states that “EQUATIONS ARE LOST (MathJax does not survive text extraction) and figures/appendices are absent.” Any equation below is therefore a reconstruction from the prose and tables, not a claim that the original typeset formula has been recovered.

The paper’s causal chain is: a team accumulates unanswered points, which operationalizes team-level momentum; a mandatory TV timeout interrupts that run; after the pause, the momentumed team scores fewer points than a matched momentumed team whose run is not interrupted by any timeout. The abstract states the headline: “TV timeouts cause an 11.2% decline in the number of points that the team with momentum subsequently scores.” The main estimate is also expressed in count units: “momentumed teams score 0.56 fewer points on average during the 3 minutes after a TV timeout as compared to matched teams that do not experience a timeout.” The design is a natural experiment because “TV timeouts occur at points exogenous to momentum,” which “enable[s] the measurement of the effect of pauses in the game separate from the effect of strategy changes.” That exogeneity claim is the load-bearing assumption. If TV timeout assignment is correlated with unobserved coach strategy, fatigue, foul trouble, lineup quality, score margin, or pace, the causal interpretation fails.

The estimand needs careful separation. Let \(D_i=1\) if a TV timeout occurs immediately after scoring event \(i\), and \(Y_i(t)\) be points scored by the momentumed team in the next \(t\) minutes of game clock. The paper’s main \(t\) is 3 minutes. The operational momentum indicator is \(m_i=\mathbf{1}\{p_{u,i}\geq \tau\}\), where \(p_{u,i}\) is uninterrupted points and \(\tau\) is 6 in the main model, with 10 and 15 as robustness thresholds. The matching step pairs treated runs with control runs using propensity scores from a logistic model. The outcome model is Poisson with a log link. The main coefficient on \(D_i\) is \(-0.119\), and the paper converts this to a percentage: \(e^{-0.119}-1=-0.112\), or 11.2% fewer points. The reported 0.56-point gap is the expected count difference over three minutes of game time, not a per-possession rate and not a win-probability effect.

The most important gray-zone issue is post-treatment adjustment. The paper controls for substitutions by the momentumed team and by the opposing team. Substitutions can be affected by the timeout itself; if so, the coefficient on the TV timeout is not a clean total effect. The paper acknowledges this by estimating a no-substitution model: “After TV timeouts in which neither team substitutes a player, 6.57% fewer points are scored, an effect about 41% smaller than TV timeouts with substitutions (Table 3).” It then attributes roughly 59% of the full effect to stoppage of play and the remainder to strategy changes. That decomposition is plausible but not definitive, because “strategy” is proxied by substitution counts, and the authors admit “a coach could change strategy during a TV timeout without substituting players by altering how their team plays.” The paper’s own limitation section says: “A potential limitation of this paper is that TV timeouts may not be exogenous to gameplay change.” It also says “we are aware of no readily available source of notational data.” Thus the causal claim is strongest for the pause-plus-substitution bundle and weaker for a pure “momentum dissipation” mechanism.

A second gray-zone issue is the substitution result. The paper states: “The momentumed team substituting a player negatively affects a run and does so more than the TV timeout. It reduces subsequent points by about 16% \((e^{-.176}-1=-0.161)\).” The practical implication is stated directly: “coaches of momentumed teams should not substitute players during a TV timeout.” This is a conditional regression implication, not a randomized coaching trial. The substitution variable is a count from zero to five, so the coefficient should be read per additional substitution under the model’s linear-in-log specification. If substitutions are endogenous to injury, foul trouble, or matchup logic, the recommendation could be confounded.

A third gray-zone issue is precision and sparse long runs. The run-15 model has \(n=48\), coefficient \(-0.368\), and standard error \(0.129\); the paper itself says the 30.79% effect “should be interpreted cautiously given the small sample size.” The distribution is thin: “only 11.85% of runs are of six or more unanswered points,” and “only 8.47% of runs of six points or more are of more than 10 points.” The result “TV timeouts decrease subsequent scoring for runs of 17 points or fewer” is therefore a bounded empirical statement, not an unbounded dose-response law. The time-window result also degrades: the point estimate “steadily decreases as more post-treatment time is included,” and there is “no significant relationship between the TV timeout and points scored between the next three and four minutes.” That is exactly what a decaying causal effect should look like, but it also means the 11.2% figure is window-dependent.

The paper’s negative control is useful: a Monte Carlo simulation with “zero momentum effect” yields a null TV-timeout coefficient of \(0.002\) with standard error \(0.022\). That supports the claim that the matching pipeline does not manufacture an effect from selection alone. But the simulation does not simulate substitutions, unobserved strategy, fatigue, or notational changes; it is a check on the sampling/matching machinery, not on every confounder. The source also notes a table-text inconsistency: the text says “The coefficient on the size of the current run is.001,” while Table 3 reports \(-0.002\) for the run-size coefficient in the main model. Both are near zero and non-significant, so the substantive conclusion is unchanged, but it is a reminder that the extraction is imperfect and the original typeset equations should be consulted.

The correct audit posture is therefore: the paper provides strong evidence that a mandatory TV timeout during a run predicts fewer subsequent points in a matched sample; it provides moderate evidence that a pause-alone component exists because the no-substitution model remains negative; it provides weaker evidence for a pure team-level “momentum” mechanism because strategy, fatigue, arousal, and notational changes are not fully measured; and it provides only conditional support for coaching recommendations because substitutions are not randomized. The paper’s strongest claim is causal-in-design, not mechanistic: random assignment into a mandatory break is credible, but the exclusion restriction that the break affects scoring only through momentum is not directly tested.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source’s equations are not recoverable from the extraction. The header says: “EQUATIONS ARE LOST (MathJax does not survive text extraction) and figures/appendices are absent.” The following formalization is a reconstruction from the prose, tables, and section headings.

**1. Momentum indicator.** Let \(p_{u,i}\) be the number of uninterrupted points scored by team \(i\) immediately before scoring event \(i\). The paper’s main threshold is six points. A reconstructed indicator is
\[
m_i=\mathbf{1}\{p_{u,i}\geq \tau\},\qquad \tau\in\{6,10,15\}\ \text{points}.
\]
Units: points. The source says: “Initially, this threshold is set at six unanswered points or more.” It justifies six as “two or three made baskets” and reports that “only 11.85% of runs are of six or more unanswered points.”

**2. Treatment.** Let
\[
D_i=\mathbf{1}\{\text{a TV timeout occurs immediately after scoring event }i\}.
\]
The treatment is binary. The source says TV timeouts are “mandatory” and “occur at predetermined times, independent of the score or flow of the game.” The paper also notes that “each TV timeout lasted 100 seconds” in the seasons analyzed; that is 100 seconds of real time, while the outcome window is measured in game-clock minutes. The hidden-treatment-variation assumption matters because the paper says matching on all timeouts “likely violates the hidden variation assumption in the matching framework,” since coaches’ timeouts are “likely fundamentally different from TV timeouts.”

**3. Outcome.** Let
\[
Y_i(t)=\text{points scored by the momentumed team in the next }t\text{ minutes of game time}.
\]
The main \(t=180\) seconds, i.e. 3 minutes of game clock. Units: points per 3 minutes of game time. The source says three minutes is used because it is “the maximum amount of time that could elapse between the end of a TV timeout and the start of another break in play.” The paper also tests 60, 70, 80 seconds through 4 minutes in Appendix D.

**4. Propensity-score matching.** Let \(X_i\) be matching covariates: run size by the momentumed team, substitutions by the momentumed team, substitutions by the opposing team, and treatment status. The propensity score is reconstructed as
\[
e(X_i)=P(D_i=1\mid X_i)
=\frac{\exp(X_i^\top\gamma)}{1+\exp(X_i^\top\gamma)}.
\]
Each treated observation is matched to a control observation by nearest propensity score:
\[
j(i)=\arg\min_{j:D_j=0}\left|\hat e(X_i)-\hat e(X_j)\right|.
\]
Unmatched observations are discarded. Units: propensity is a probability on \([0,1]\). The source says matching creates “two groups of observations, momentumed teams interrupted by a TV timeout and uninterrupted momentumed teams, that are identical on all observables except for the occurrence of the TV timeout.” Table A1 is cited as a covariate-balance test with “no statistically significant difference.”

**5. Poisson outcome model.** The reconstructed main model is
\[
Y_i\mid D_i,X_i\sim\mathrm{Poisson}(\lambda_i),
\qquad
\log \lambda_i=
\beta_0+\beta_1D_i+\beta_2R_i+\beta_3S_i^{M}+\beta_4S_i^{O}.
\]
Here \(R_i\) is run size in points, \(S_i^{M}\) is substitutions by the momentumed team, and \(S_i^{O}\) is substitutions by the opposing team. Units: \(\lambda_i\) is expected points per 3 minutes of game clock; \(\beta_1\) is a log-point change. The incidence-rate ratio is
\[
\mathrm{IRR}=e^{\beta_1},
\qquad
\text{percent change}=100\left(e^{\beta_1}-1\right)\%.
\]
The source reports \(\hat\beta_1=-0.119\), standard error \(0.012\), and \(e^{-0.119}-1=-0.112\), i.e. an 11.2% decline. The opposing-substitution coefficient is \(-0.077\), giving \(e^{-0.077}-1=-0.0741\), about a 7.41% decline. The momentum-team substitution coefficient is \(-0.176\), giving \(e^{-0.176}-1=-0.161\), about a 16.1% decline. The paper says: “The momentumed team substituting a player negatively affects a run and does so more than the TV timeout.”

**6. Causal assumptions.** The matching interpretation requires:
\[
\text{SUTVA: }Y_i=Y_i(D_i),
\]
\[
\text{Consistency: }Y_i=Y_i(1)\ \text{if }D_i=1,\quad Y_i=Y_i(0)\ \text{if }D_i=0,
\]
\[
\text{Unconfoundedness: }\{Y_i(0),Y_i(1)\}\perp D_i\mid X_i,
\]
\[
\text{Overlap: }0<e(X_i)<1.
\]
The source’s key exogeneity claim is: “Since TV timeouts occur at points exogenous to momentum, they enable the measurement of the effect of pauses in the game separate from the effect of strategy changes.” The source also warns: “The occurrence of a TV timeout during a run, however, is not sufficient to test momentum because coaches can change strategy during the timeout in ways that may affect subsequent scoring.” If unconfoundedness fails because coaches anticipate TV timeouts or because unobserved strategy correlates with the break, the estimate is not causal.

**7. Estimand separation.** The total effect is
\[
\mathrm{ATE}=E[Y_i(1)-Y_i(0)\mid m_i=1].
\]
But if substitutions \(S_i\) are affected by \(D_i\), then controlling for \(S_i\) shifts the estimand toward a direct effect:
\[
E[Y_i(d,s)-Y_i(0,s)]
\]
rather than the total effect \(E[Y_i(d,S_i(d))-Y_i(0,S_i(0))]\). This is why the no-substitution model matters. The source reports: “After TV timeouts in which neither team substitutes a player, 6.57% fewer points are scored, an effect about 41% smaller than TV timeouts with substitutions (Table 3).” That sentence is the paper’s own decomposition: roughly 59% of the full effect is attributed to stoppage and the remainder to strategy changes, under the substitution proxy.

**8. Singularity and breakdown regimes.**
- **Positivity/overlap breakdown.** Long-run models are sparse: the run-15 model has \(n=48\), \(\hat\beta_1=-0.368\), standard error \(0.129\), and an approximate 30.79% decline. As cell counts go to zero, matching variance diverges and the estimate becomes unstable. The paper says the 30.79% effect “should be interpreted cautiously given the small sample size \((n=48)\).”
- **Threshold-selection breakdown.** A threshold that is too low includes noise; a threshold that is too high selects rare runs and destroys power. The paper tests 6, 10, and 15 and reports that “the 6 and 10 point models fit the data better than the models using 15 point runs.” The result “TV timeouts decrease subsequent scoring for runs of 17 points or fewer” is bounded by sparse data beyond that range.
- **Time-window breakdown.** As \(t\to\infty\), the treatment effect is diluted by other game events; as \(t\to0\), variance rises. The source reports the point estimate “steadily decreases as more post-treatment time is included” and “no significant relationship between the TV timeout and points scored between the next three and four minutes.”
- **Post-treatment mediation breakdown.** If \(S_i\) is a mediator, controlling for it changes the causal question. The substitution coefficient \(-0.176\) should not be read as an unconfounded coaching effect without randomization.
- **Exogeneity breakdown.** If TV timeout timing is anticipated or correlated with unobserved strategy, fatigue, foul trouble, or score context, the exclusion restriction fails. The paper’s limitation section states: “A potential limitation of this paper is that TV timeouts may not be exogenous to gameplay change.”
- **Measurement breakdown.** The outcome is points in a fixed game-clock window, not points per possession. Pace, possession count, opponent quality, and score margin are not fully modeled; the robustness subsets for first TV timeouts, garbage time, and crunch time reduce but do not eliminate this concern.
- **Extraction breakdown.** The equations are absent from the supplied text, so the formal likelihood, propensity implementation, and Appendix tables cannot be checked line by line. No [PAGE N] markers are present; page-level citation would be fabrication.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s lineage runs from the hot-hand skepticism of Gilovich, Vallone, and Tversky (1985) through the finite-sequence correction of Miller and Sanjuro (2018a) to the present team-level causal design. The source summarizes the old consensus: Gilovich, Vallone, and Tversky “made the then-groundbreaking claim that the hot hand is an illusion resulting from the human tendency to see patterns where none exist.” It also quotes Kahneman’s summary: “the hot hand is a massive and widespread cognitive illusion” (2011, p.115). The retrocausal reversal is important: later work identified “flaws in previous literature and suggested that the hot hand exists.” Two lines of critique are named: Bocskocsky, Ezekowitz, and Stein (2014) and Csapo et al. (2015) attributed missing serial correlation to shot-selection effects; Miller and Sanjuro (2018a) identified a finite-sequence bias in which “the subsequent proportion of successes (made shots) after a streak of successes will be less than the expected proportion.” The paper positions itself after that reversal but shifts the unit from individual shooting to team-level unanswered points.

The team-level lineage includes Arkes and Martinez (2011) and Munoz, Chen, and Thomas (2019), who found serial correlations in win-loss records, and Morgulev et al. (2020), who showed that fans, players, and coaches have “quantifiable beliefs in the size of the momentum effect” that are not supported by existing literature. The skeptical team-level line includes Morgulev, Azar, and Bar-Eli (2019) and Schilling (2019), both of whom “conclude that scoring runs implied by ‘momentum’ are illusory.” The timeout literature is the immediate ancestor: Roane et al. (2004) and Permutt (2011) were descriptive and correlational; the source says they “fell short of conclusive proof since they failed to sufficiently account for confounding factors.” Gibbs, Elmore, and Fosdick (2022) criticized Permutt for failing to account for “the bias attributed to the coach’s right to choose when to call, or not call, a timeout.” Assis, Assunção, and Vaz-de-Melo (2020) and Gibbs, Elmore, and Fosdick (2022) then used causal inference with coaches’ timeouts; the former “found that timeouts have no causal effect on performance,” and the latter “found a slight negative effect.” The present paper’s retrocausal move is to replace endogenous coaches’ timeouts with mandatory TV timeouts, thereby breaking the coach’s self-selection into treatment.

The multi-week or long-horizon traps are clear. First, the hot-hand debate shows how a 30-year consensus can reverse when a selection bias is found; the present paper tries to avoid that trap with a Monte Carlo negative control, but the simulation does not model substitutions or notational strategy. Second, the timeout literature shows the trap of using a treatment that is chosen by the same agent whose behavior is being studied. Third, the run-threshold literature shows the trap of selecting a definition after seeing the data; the paper tests 6, 10, and 15 and uses AIC bootstraps, but the main estimate remains threshold-dependent in magnitude. Fourth, the strategy literature shows the trap of controlling for post-treatment variables; the paper’s substitution controls are useful but shift the estimand. Fifth, the practical-coaching literature shows the trap of turning a matched regression into a universal rule: “coaches of momentumed teams should not substitute players during a TV timeout” is an implication, not a randomized trial. Sixth, the source extraction itself is a trap: equations and appendices are missing, so a reader cannot verify the exact propensity model, the Poisson likelihood, or the balance tables. The paper’s own conclusion is appropriately bounded: it “challenge[s] the conclusion of Morgulev, Azar, and Bar-Eli (2019) and of Schilling (2019)” but does not claim to identify the full psychological mechanism.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The coaching mind in this paper operates under a crisis habit regression: when an opponent runs off unanswered points, the default action is to call timeout to “stop momentum.” The paper’s introduction states the twin assumptions: “a) momentum exists, and b) it can be stopped by timeouts.” That habit is not irrational in the paper’s world, because the main estimate says a mandatory TV timeout is followed by an 11.2% decline in the momentumed team’s scoring. But the paper also shows that the habit is under-specified: the timeout bundle includes a 100-second pause, substitutions, possible tactical changes, and psychological reset. The no-substitution model still finds “6.57% fewer points,” so the pause alone has a component. The full 11.2% is larger, which means the coaching mind’s habitual “call timeout” may work partly through lineup changes rather than through momentum interruption alone.

The counter-trap is the momentum team’s own bench. The paper finds that “the momentumed team substituting a player negatively affects a run and does so more than the TV timeout,” with about a 16.1% reduction. The recursive implication is uncomfortable: the team that has momentum may harm itself by making a normal substitution during the mandatory break. A coach who models only the opponent’s momentum will call timeout; a coach who models the recursive structure must also model whether his own substitution destroys the continuity that created the run. The source draws the practical conclusion: “coaches of momentumed teams should not substitute players during a TV timeout.” That is a counter-trap because the conventional instinct to “change something” during a break can be worse than doing nothing.

The clock layer constrains both minds. TV timeouts are not arbitrary: the source says a TV timeout “would be called at the first stoppage in play following the nine-minute mark in the second quarter, unless either team had already voluntarily called a timeout in that quarter.” Each TV timeout lasted 100 seconds. The outcome window is three minutes of game time because that is “the maximum amount of time that could elapse between the end of a TV timeout and the start of another break in play.” The clock therefore creates a natural experiment and a strategic rhythm: coaches know a mandatory break is coming, players know it is coming, and analysts can exploit the schedule. The recursive theory of mind is: Coach A believes Coach B will use the break to stop A’s run; Coach B believes A will anticipate the break and may substitute; both know the TV schedule is exogenous, so neither can fully select into the pause. The paper’s design exploits that shared knowledge rather than trying to measure it directly.

The weakest recursive link is the player’s mind. The paper does not measure arousal, confidence, attention, or “psychological recovery.” It cites Hartigh and Gernigon (2018), who found that pauses benefit table-tennis players “by providing a chance to psychologically recover from negative momentum,” but the NBA analysis is observational matching, not a psychological assay. The recursive model should therefore separate three layers: the coach’s strategic layer (substitutions, matchups), the player’s psychophysiological layer (arousal, fatigue, shooting touch), and the game-clock layer (mandatory breaks). The paper identifies a reduced-form effect at the coach-plus-clock layer and provides suggestive evidence that the clock-only component is negative. It does not identify the player’s internal state. A coach who over-updates from the 11.2% figure to a strong psychological theory would be committing the same habit regression in a new form.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The cross-layer veto question is whether a physical, biomechanical, or weather layer can fully explain the observed TV-timeout effect and thereby veto the momentum interpretation. The paper’s design controls some layers and leaves others open. On the physical layer, a 100-second real-time break can allow partial recovery from fatigue, alter hydration, reduce arousal, or change the pacing of substitutions. The paper does not measure player tracking, heart rate, workload, or sleep. It does measure substitutions as a proxy for strategy and finds that the no-substitution model remains negative: “After TV timeouts in which neither team substitutes a player, 6.57% fewer points are scored.” That vetoes the claim that substitutions alone explain the entire effect. It does not veto a fatigue-recovery mechanism, because fatigue can change without a substitution. The paper’s robustness subsets—first TV timeouts, excluding garbage time, excluding crunch time—reduce the concern that coaches are using breaks differently in unusual game states, but they do not measure physiological recovery.

On the biomechanical layer, a pause can reset shooting touch, free-throw routine, or motor coordination. The paper has no notational data on defensive assignments, player speed, or movement. The limitation section is explicit: “Future research could measure non-substitution strategic changes with notational analysis data. Notational analysis data such as defensive assignments or player speed would allow for testing of these other changes, but we did not pursue it.” The authors also say “we are aware of no readily available source of notational data.” A biomechanical veto would require showing that a specific movement or touch variable changes at the TV timeout and predicts the subsequent points decline. That evidence is absent. The paper’s Monte Carlo negative control does not address biomechanics because the simulation has no bodies.

On the weather layer, the NBA is an indoor league; direct weather exposure is not a plausible game-level treatment. Arena climate, travel, and scheduling density could matter, but the paper does not model them and the source does not present weather data. The weather veto is therefore non-operative for this study: there is no measured weather exposure that could absorb the TV-timeout coefficient. The stronger cross-layer veto is unobserved team strategy: a coach can change defensive assignments or pick-and-roll coverage during a TV timeout without substituting. The paper acknowledges this: “a coach could change strategy during a TV timeout without substituting players by altering how their team plays, such as by changing defensive assignments or pick and roll assignments.” If those changes are correlated with the TV timeout and strongly predict scoring, the 11.2% estimate is a bundle effect, not a pure momentum effect.

The adjudication should be stated as a conditional proof. The paper successfully vetoes three alternative explanations: pure mean reversion, because “the coefficient on the size of the current run” is near zero and non-significant; substitutions alone, because the no-substitution model remains negative; and a spurious matching artifact, because the Monte Carlo simulation with “zero momentum effect” yields a null coefficient of \(0.002\) with standard error \(0.022\). The paper does not fully veto fatigue recovery, arousal/psychological reset, or non-substitution tactical changes. Those layers remain open and would require player-tracking, notational, or video-coded data. The correct conclusion is therefore not “momentum is proved physically”; it is “a mandatory pause plus the observable substitution bundle causes a scoring decline, and the pause-only component is negative in the no-substitution sample.” The cross-layer veto is partial, not absolute.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
The following three RLVR-style counterfactual vetoes are verifiable against play-by-play, video-coded substitutions, and reconstructed NBA timeout rules. Each has a pre-specified prediction and a veto condition.

**Veto 1: Pause-only manipulation.** Construct a counterfactual sample of momentum runs matched on run size, score margin, period, and lineup continuity, then insert a 100-second stoppage with no substitutions by either team at the same game state. The paper’s no-substitution estimate predicts a negative pause-only effect:
\[
\hat\beta_{D}\approx -0.068,\qquad
\mathrm{IRR}\approx e^{-0.068}=0.934,
\]
i.e. about 6.57% fewer points in the next 3 minutes of game clock. The 95% interval from the reported standard error \(0.013\) is approximately \([-0.093,-0.043]\), which excludes zero. Prediction: a randomized or quasi-randomized pause-only intervention should reproduce a negative coefficient in the range of \(-0.04\) to \(-0.10\) log points. Veto condition: if the pause-only estimate is non-negative, or if its confidence interval includes zero, then the claim that “stoppage of play” alone reduces momentum is vetoed. This test is verifiable with play-by-play and video coding of substitutions; it does not require betting markets or proprietary tracking.

**Veto 2: Momentum-team substitution mediation.** Randomize or video-code a counterfactual in which the momentumed team makes zero versus one additional substitution during the TV timeout, holding the opponent’s substitutions and the pause duration fixed. The paper’s Table 3 estimate predicts a per-additional-substitution effect of
\[
\hat\beta_{S^M}\approx -0.176,\qquad
\mathrm{IRR}\approx e^{-0.176}=0.839,
\]
i.e. about 16.1% fewer subsequent points. The paper says this effect is “more than the TV timeout,” and the practical implication is “coaches of momentumed teams should not substitute players during a TV timeout.” Prediction: the substitution coefficient should be negative, larger in magnitude than the pause-only coefficient, and stable when the outcome window is shortened to the first minute. Veto condition: if the momentum-team substitution coefficient is near zero, positive, or statistically indistinguishable from the TV-timeout coefficient, then the recommendation is vetoed. A second verifiable check is whether the substitution effect survives when the outcome is measured immediately after play resumes; if it disappears entirely, the “continuity” mechanism is unsupported.

**Veto 3: Exogeneity and negative-control audit.** Reconstruct TV-timeout assignment from the NBA rulebook schedule—e.g. the first stoppage after the nine-minute mark in the second quarter unless a voluntary timeout has already occurred—and test whether \(D_i\) is associated with pre-treatment run size, score margin, foul count, or lineup quality after conditioning on the scheduled break. The paper’s exogeneity claim predicts no residual association beyond the rule. Its Monte Carlo negative control predicts that a simulated independent-scoring world with the same matching pipeline yields
\[
\hat\beta_{D}\approx 0.002,\qquad \mathrm{SE}\approx 0.022,
\]
with a confidence interval that includes zero. Prediction: in the real data, propensity-score overlap should be adequate for the 6- and 10-point thresholds, and covariate balance should show “no statistically significant difference” as in Table A1. Veto condition: if TV timeout assignment is predictable from run state or score beyond the published schedule, or if the simulated null produces a non-zero TV-timeout coefficient with a confidence interval excluding zero, then the causal interpretation is vetoed. This is the most important RLVR veto because it tests the design’s load-bearing assumption rather than the downstream coaching implication.
</RLVR_COUNTERFACTUAL_VETOES>