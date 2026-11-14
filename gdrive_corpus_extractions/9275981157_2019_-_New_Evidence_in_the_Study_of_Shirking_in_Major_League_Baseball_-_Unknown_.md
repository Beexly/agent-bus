---
source: "2019 - New Evidence in the Study of Shirking in Major League Baseball - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2019"
pages: 21
model: deepseek/deepseek-v4.1-flash-1017
words: 8179
---

<NATIVE_REASONING>
We need answer user. Need craft with required XML sections exact. Need use source pages cite [PAGE N] and verbatim quotes. Need >=1000 words overall, THINK_TRACE >=400 words. Need no betting lines/odds. Need no toy equations. Formal LaTeX, units, assumptions, breakdown singularities. Need deep derivation, gray audit, retrocausal genealogy, recursive ToM, cross-layer veto adjudication, RLVR counterfactual vetoes 3 verifiable scenarios + predictions. Need likely critique paper. Need be careful source has equations garbled due text. Need reconstruct accurately. Need cite exact pages and quotes. Need include every required section. Need mention no spreads/totals/moneylines/odds. But can discuss predictions maybe no betting.

Need analyze paper. It's 2019 MIT Sloan paper by Richard Paulsen. Title "New Evidence in the Study of Shirking in Major League Baseball". Key model: utility U_i = U_i(C_pt e_t?, e_t). Need parse text. Page 4: "The utility function for player i is of the form 𝑈𝑖=𝑈𝑖𝐶𝑝𝑡𝑒𝑡, 𝑒𝑡, where 𝐶 is the present discounted value of consumption and 𝑒𝑡 is effort in time t." likely U_i = U_i(C(p_t(e_t)), e_t). Consumption C depends on performance p_t, performance p_t depends on effort. Career infinite, discount ρ. C = c_t + ρ c_{t+1}+... Salary s_t. Future salary s_{t+n}=β_{t+n}+α^{n-1}(e_t+μ_t) maybe actually α^{n-1}. They simplify C=S+β+(αρ)^n/(1-αρ) μ_t + (αρ)^n/(1-αρ) e_t. Utility U_t = S+β+... μ +(αρ)^n/(1-αρ) e_t - e_t^2. FOC derivative: ∂U/∂e_t = (αρ)^n/(1-αρ) - 2e_t =0? Source text says "∂∂𝑒𝑡𝑈𝑡=(𝛼𝜌)𝑛1−𝛼𝜌𝑒𝑡−2𝑒𝑡=0." That seems missing coefficient? It has (αρ)^n/(1-αρ) e_t? Hmm if utility term was (αρ)^n/(1-αρ)e_t, derivative is (αρ)^n/(1-αρ) - 2e_t. Source text: "∂∂𝑒𝑡𝑈𝑡=(𝛼𝜌)𝑛1−𝛼𝜌𝑒𝑡−2𝑒𝑡=0." It may be formatting lost: \frac{(\alpha\rho)^n}{1-\alpha\rho}e_t - 2e_t? That would have e_t in first term and derivative of quadratic? impossible. Solving gives e_t=(αρ)^n / [2(1-αρ)]. Yes source says "Solving for effort gives 𝑒𝑡=(𝛼𝜌)𝑛2(1−𝛼𝜌)." So FOC is (αρ)^n/(1-αρ) - 2e_t=0. So use correct.

Need identify singularity: denominator 1-αρ. If αρ→1 from below, effort explodes? But model: n years remaining, effort decreases with n if 0<αρ<1 because (αρ)^n decreasing in n. But denominator singular at αρ=1; if αρ>=1, present value divergent/infinite, model breakdown. Also finite career relaxation makes effort decreasing in remaining career length. Bounded shirking due reputation/noise μ_t ± μ_t. Need mention units: effort abstract utility/index; WINS wins (dimension wins), YEARSLEFT years, coefficient wins/year, salary millions inflation-adjusted base 2010, age years, experience years. α discount factor on past performance in salary per season? dimensionless; ρ discount factor dimensionless; n years; μ_t performance shocks in wins; β salary units? C consumption units maybe millions. Utility arbitrary cardinal utils; disutility e_t^2 in utils. The model's derivative unit: utils per effort unit.

Need evaluate empirical: fixed effects with WINS, years left coefficient -0.070* (SE .038) in main; free-agent -0.115** (.048); nonpitchers offense -0.075**, defense 0.010 n.s.; pitchers 0.057 n.s. Need citations pages. Need quote exact. Need note table note has significant typo: "** indicating p > 0.05" but likely p<0.05. We can quote? Might mention source typo. Need not overdo.

Need address multiple hypotheses and rival explanations. Need culprit: selection, age, tenure, new team, expected improvement, salary. The paper argues fixed effects controls time-invariant ability, but not time-varying team effects, age curves, health, contract option, service time, league. Need "gray-zone audit": observational, contract data 2010-2017, Cot's, restricted non-pitchers ≥3 yrs, 1,829 contract-years, 535 players, average 3.4 seasons. Then free agents 1,019/323. Pitchers 1,679/522. Need sample selection and unbalanced panel. Fixed effects cannot solve reverse causality (teams sign expected improvers? salary control only free agents) nor time-varying unobserved health. Need discuss measurement: WINS from Baseball-Reference, correlation ~0.7 with Fangraphs 2017. Use WINS not standard WAR.

Need "retrocausal genealogy": historical/scientific lineage and multi-week traps. Discuss principal-agent moral hazard: Ross 1973, Holmstrom 1979; shirking in MLB literature Lehn 1982, Krautmann 1990, Scoggins 1993, Krautmann & Solow 2009, Hakes & Turner 2008, Krautmann & Donley 2009, Berri & Krautmann 2005/06, Cantor 1988; contract length and work effort. Tenure literature Carmichael etc. Multi-week traps: payroll/contract-year dataset only from 2009 contracts; using contract-year observations; repeated player observations; clustering on player; small multi-year cells; 9+ only 5; 4+ years only 19? Need no betting. "multi-week traps" likely from prompt expects "historical/scientific lineage & multi-week traps" in sports context? We can discuss "trap" as analytical traps that accumulate over multi-week/multi-season observation windows. Need mention not weekly betting. Hmm.

Need "recursive theory of mind": crisis habit regression vs counter-trap vs clock. Interpret as modeling player/team/analyst nested beliefs. Need relate to shirking: player knows team can't observe effort; player believes team forms expectations from past performance; team knows player may shirk; analyst knows selection. Crisis habit regression = repeated behavior under guaranteed contract? counter-trap = reputation/playing time caps shirking; clock = final contract year urgency. Need formal-ish? Could include expected utility and Bayesian signal. Need cite pages 5 and 8: "desire to earn future contracts may cause players to want to shirk without being caught to avoid developing a reputation as a shirker"; "If shirking ... bounded ... plateau"; "players may want to avoid gaining reputation as a shirker ... could hurt chances of receiving multi-year contracts"; "professional athletes enjoy playing sport ... reduced playing time". Need link to recursive beliefs.

Need "cross-layer veto adjudication": physical/biomechanical/weather veto proof. Need argue physical/mechanical/weather cannot rescue/overthrow. This is not a sports prediction, but paper: lack of pitcher shirking due monitoring/spring training; nonpitcher offensive vs defensive observability. Physical/biomechanical: injuries, fatigue, aging, mechanics, weather could produce performance decline early contract. But fixed effects age, age squared, experience; not injury. Weather: home stadium/new team; Pollard home field advantage; controls new team and tenure. Need adjudicate: weather as external layer cannot explain differential offense/defense pattern? It could affect offense globally, but year fixed effects absorb league-season weather? Not park/player-specific. Physical layer: pitchers have higher injury/fatigue; if physical decline drives early contract drop, pitchers should show it, but they don't (coefficient positive n.s.). Nonpitchers defense not significant; offense significant. Physical injury would likely affect both offense and defense? Maybe not (hitting vs fielding). But shirking more plausible due observability. Need "veto proof": to veto shirking interpretation, alternative must produce (i) negative years-left effect only for nonpitchers, (ii) offense but not defense, (iii) not pitchers, (iv) survive controls new team/tenure/salary, (v) survive player fixed effects. No physical/weather mechanism in source meets all. Weather/ballpark affects both teams and is partly absorbed by year/league/position? Actually home stadium could affect player's home games; new team control. Weather can't explain within-player across contract years unless systematic correlation with contract length. Need mention no weather variables in paper, no biomechanical data; thus these are "unmodeled" but not "proof" in a strict causal sense. We can state "paper does not prove absence; it provides adjudication under assumptions." Need be honest.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. Need define RLVR? Reinforcement Learning from Verifiable Rewards? The prompt asks "3 verifiable RLVR veto scenarios + predictions." We need design counterfactual tests that would veto the paper's shirking claim if observed. Should be concrete, verifiable. Need no betting. Examples:
1. Injury/health shock audit: collect transaction/injury list (IL) and biomechanical pitch/hit tracking; if early-contract WINS decline disappears after controlling for injured-list days, exit velocity, sprint speed, or if injury rates rise with years remaining for nonpitchers. Prediction under shirking: injury/IL control shouldn't absorb coefficient; coefficient remains negative ~ -0.07 WINS/year, offense-specific. If it absorbs → veto.
2. Observability/effort direct measures: Statcast plate discipline/swing decisions, sprint effort, defensive jumps, catcher framing? If offensive effort proxies (chase rate, swing at bad pitches, sprint speed) do not worsen with years remaining, but output does, or if defensive effort measures worsen similarly, then shirking observability story fails. Prediction under shirking: bad-pitch swing rate increases, pitch count/PA? Wait "swinging more frequently at bad pitches" = chase rate; "longer at-bats require effort" so maybe fewer pitches per PA; batting practice unavailable. Defensive effort (sprint speed, burst) no effect. If both offense and defense effort metrics decline, or neither, veto.
3. Contract/team expectation placebo: use pre-signing trajectory and option years/guaranteed money; if multi-year players with flat pre-signing trajectory still show decline, supports shirking. But if decline predicted by pre-signing improvement slope or team salary backloading (team expected improvement) and controlling for pre-signing performance trend removes effect, veto. Or use "new team" players vs re-signers; if decline only new team and not re-signers, adjustment. Need three scenarios with predictions.

Need maybe include "RLVR" as reinforcement learning verifiable reward: define test set and reward. Could say "veto condition V1..." Need verifiable predictions e.g., "Coefficient on YEARSLEFT in WINS fixed-effects model remains <0 at 5% one-sided; offense WINS negative; defense WINS confidence interval excludes? etc." Need avoid p > .? Include exact thresholds? We can use model estimates. For veto: if 95% CI includes zero or sign flips after adding injury control; or if interaction terms. Need not invent too much.

Need cite exact quotes and pages. Need use verbatim quotes within sections. Need ensure [PAGE N] markers. Need likely quote from page 5: "as the number of years remaining on the contract, n, increases, effort in time t decreases. This is the shirking hypothesis." Page 8: "If players shirk, this coefficient is expected to be negative." Page 9: results. Page 16: "Players are found to shirk in their offensive performance, but not in defensive performance." Actually page 18-19. Let's quote exact.

Need format with XML tags exactly. Need include all sections. Maybe include title? The output should only sections? User asks "DRIVE SOURCE..." Then invariants. Need answer as analysis. We'll produce XML-ish with sections. Need ensure >=1000 words. We can be around 2500-3500 words. Desired oververbosity 5. Need not too long but enough. Need include equations in LaTeX.

Need be precise: "ZERO BETTING LINES" - no mention of betting, spreads, totals, moneylines, odds. But "predictions" might be okay not betting. Avoid words "odds". We can mention "no betting lines are used" maybe but invariant says zero betting lines never mention. Better not mention at all.

Need "SOURCE_OPERATORS_AND_EQUATIONS": formal LaTeX, units, page citations, breakdown. Need reconstruct utility. Let's derive.

Let C_t present discounted consumption. Let p_t = e_t + μ_t (wins). Salary for future season t+k:
s_{t+k} = β_{t+k} + α^{k-1} p_t = β_{t+k}+α^{k-1}(e_t+μ_t). (Page 4; source text garbles exponent). Discount consumption by ρ. With n remaining guaranteed years:
C = s_t + ... + ρ^{n-1} s_{t+n} + ρ^n β_{t+n+1} + α^n(e_t+μ_t)+... . Sum from k=n to ∞ of ρ^k α^{k?} maybe. Let's compute: Future salary at t+n uses past performance p_t discounted by α^{n-1}? Wait source says s_{t+n}=β_{t+n}+α^{n-1}(e_t+μ_t). Then C = s_t + ... + ρ^{n-1} s_{t+n} + ρ^n β_{t+n+1} + α^n(e_t+μ_t)+... . Hmm source simplified C=S+β+ (αρ)^n/(1-αρ) μ_t + (αρ)^n/(1-αρ) e_t. Let's derive: contributions from performance at t to salary at t+m for m≥n? If salary at t+n has α^{n-1}; but in C discounted by ρ^{n-1}? Then term ρ^{n-1} α^{n-1}? That is (αρ)^{n-1}? But source has (αρ)^n/(1-αρ). Maybe indexing off. We don't need exact; cite source's simplified form. We can quote source equation and note a one-index discrepancy. But maybe avoid alleging. Use as presented: 
\(C=S+\beta+\frac{(\alpha\rho)^n}{1-\alpha\rho}\mu_t+\frac{(\alpha\rho)^n}{1-\alpha\rho}e_t\).
Then
\(U_t=S+\beta+\frac{(\alpha\rho)^n}{1-\alpha\rho}\mu_t+\frac{(\alpha\rho)^n}{1-\alpha\rho}e_t-e_t^2\).
FOC:
\[
\frac{\partial U_t}{\partial e_t}=\frac{(\alpha\rho)^n}{1-\alpha\rho}-2e_t=0
\]
so
\[
e_t^*=\frac{(\alpha\rho)^n}{2(1-\alpha\rho)}.
\]
But wait if n increases, (αρ)^n decreases if αρ<1, so effort decreases. Good. Units: effort in abstract index; α and ρ dimensionless discount factors in (0,1). For 0<αρ<1, derivative ∂e/∂n = ln(αρ) e_t^* <0. Singularity at αρ=1; for αρ≥1 non-summable PV and solution not defined (or sign changes). Also if n→0 then e*→1/[2(1-αρ)]? That's not zero; but model's final year n=0? If n=0 there is no guaranteed contract, effort from future salary? Actually n remaining years; n=0 final? Their n maybe number of years remaining after current? But prediction: final year highest. Our formula with n=0 gives positive effort, n increasing lowers. Good.

Bounded shirking: if noise μ ∈ [-μ_t, μ_t], performance must be at least p_t - μ_t? Source: "If the noise on performance, μ, falls between −μ_t and +μ_t, player performance must be at least p_t−μ_t. Therefore, shirking behavior will increase with contract length but may reach a maximum and level off." [PAGE 5]. This implies piecewise:
\(p_t = e_t+\mu_t\), team expected level \(p_t^E\). Shirking unbounded? Max shirk e_t ≥ e_min = p_t^E - \bar{\mu}? Need not formalize too much. Can represent
\[
e_t^*=\min\left\{\frac{(\alpha\rho)^n}{2(1-\alpha\rho)}, \bar e_t\right\}
\]
or shirking max. But avoid inventing fake. It's okay derived from source's bound. Units still effort.

Empirical equation:
\[
PERFORMANCE_{it}=\beta_0+\beta_1 YEARSLEFT_{it}+\beta_2 ONEYEAR_{it}+\beta_X X_{it}+\alpha_i+\lambda_t+\varepsilon_{it}
\]
and dummy version. Need cite page 8-9. Coefficient units: WINS per year. The paper reports each additional year remaining causes performance fall by about 0.07 WINS [PAGE 9]. Mean WINS 1.48 [PAGE 7], so effect ~4.7% of mean per year. But be careful "sizeable impact relative to mean" source page 9. Need note standard error .038, only p<0.1 in main spec; free-agent -0.115**. The nonlinear dummies: -0.305*** for 2 years, -0.297* 3, -0.209 n.s. 4+ relative final year. Need mention. Offensive -0.075**, defensive 0.010 n.s. Pitchers years left 0.057 n.s. Need exact.

Need "breakdown regimes": singular at αρ=1; small sample cells; multicollinearity; fixed effects cannot identify for one-year contracts? ONEYEAR dummy? Actually fixed effects with ONEYEAR and YEARSLEFT? For one-year contracts YEARSLEFT=1, ONEYEAR=1. For multi-year final year YEARSLEFT=1, ONEYEAR=0. So ONEYEAR compares one-year contract players to final-year multi-year. Player FE? Some players switch. Could be collinearity? Not exactly. Need mention "one-year contract" indicator within FE may be identified by switchers. Need mention finite sample.

Potential issue: the paper says "causal" but observational. Need "gray-zone audit" says identification is not fully causal; fixed effects is conditional independence assumption:
\[
\mathbb{E}[\varepsilon_{it}\mid YEARSLEFT_{it}, X_{it}, \alpha_i,\lambda_t]=0
\]
not proven. Time-varying unobserved ability/health/team incentives can bias. Need include as formal assumption.

Need "retrocausal genealogy": Maybe "retrocausal" means tracing current conclusion back through lineage. We'll say the paper's causal claim is genealogically anchored in principal-agent moral hazard and earlier shirking literature; it reverses usual final-year "contract year" studies. Need cite page 1 intro and page 20-21 refs. Need mention O'Neill 2013 final year. Need "multi-week traps": in sports research, using short windows (multi-week) to infer shirking can conflate slumps, injuries, schedule, weather. The paper uses season-level data 2010-2017, not weekly. But "multi-week traps" from prompt maybe requires historical/scientific lineage & multi-week traps. We'll include: "The trap is not a betting line; it is a measurement trap: multi-week windows are too short relative to the noise μ_t and too correlated with schedule/weather/injury; the paper's season-level WINS reduces but does not eliminate this." Need mention source doesn't analyze within-season multi-week windows; thus any weekly inference would be extrapolation. Good.

Need "RECURSIVE_THEORY_OF_MIND" detailed. Need model nested beliefs. Player's type (ability, effort cost, reputation weight); player chooses e_t; team observes p_t with noise and forms posterior about effort/ability; future salary depends on posterior. Player anticipates team's posterior and analyst anticipates team's anticipation. Shirking "without being caught" page 5. Reputation as shirker page 8. Playing time limit page 8. "crisis habit regression" maybe we can define: under guaranteed contract, low effort becomes habit and performance regresses; counter-trap: reputation/playing time; clock: final year. Need answer in terms of three mechanisms:
- Crisis habit regression: early multi-year shirking persists and depresses offense; if habit, effect should be monotonic and maybe grow over weeks. But paper's dummies show plateau (2/3/4+ similar ~ -0.3 relative final), not monotone growth; that's more consistent with bounded shirking/reputation cap than ever-worsening habit. Good.
- Counter-trap: player avoids observable defense; shirks offense. Team responds with playing time/bench; hence capped. Evidence: offense negative, defense null; pitchers null due monitoring. 
- Clock: final contract year effort rises because future salary weights recent performance; paper's final-year baseline. Need note one-year contract coefficient +0.294** in main FE? Wait Table 3 Column 2 One Year Contract 0.294** (0.118). That's odd: one-year contract positive relative final-year? In model ONEYEAR dummy indicates one-year contract, compared to multi-year final year. It may be positive with FE, maybe because one-year contract players also in contract year? Actually one-year contract is final year, so why difference? It controls for YEARSLEFT=1, so ONEYEAR is increment. Positive means one-year contract players perform better than final-year multi-year, conditional. Hmm. But paper's narrative says positive selection, negative coefficient on one-year in no FE; with FE becomes positive significant? Table 3 col2 One Year Contract 0.294** (0.118). They don't discuss? They discuss "one-year contract indicator" in Table 4 positive 0.246*. Could be due selection? Hmm. We can mention not central.

Need "CROSS_LAYER_VETO_ADJUDICATION": Provide "physical/biomechanical/weather veto proof". We need possibly define layers: Layer 0 contract/incentive; Layer 1 physical/biomechanical; Layer 2 weather/environment. Veto proof: To veto shirking, lower-layer mechanism must be (i) temporally aligned with contract years, (ii) player-specific and not absorbed by FE/year, (iii) selectively affect nonpitcher offense not defense, (iv) spare pitchers. The paper's controls new team/tenure/salary and age/experience. Weather and biomechanics are not directly measured; however, they don't have a unique signature. Age is controlled; injuries not. The strongest cross-layer alternative is age/injury decline, but final-year multi-year players are older (mean 32.37) vs two+ (30.96) [PAGE 7-8]. Wait if final year older and performance lower? Table 2 shows final year WINS 1.54, two+ 2.07. Actually final year older and lower than two+; age could explain lower final year. But regression controls age quadratically and FE. The paper's year-left effect negative means more years left lower performance relative final. If age was causing final-year decline, that would work opposite? Let's parse: final year players older (32.37) and lower WINS (1.54) than two+ years (30.96, 2.07). Age would predict lower final year, which would make final year baseline lower and more years left relatively higher (positive), not negative. The negative years-left effect after age control means early years lower than expected. So age cannot easily explain. Good point. Need mention. But physical injury could be higher in early contract? Maybe if team signs injured? Not likely. Weather/new team: new team control. Pitchers: physical workload higher, so if biomechanical fatigue drove effect, pitchers should be more affected, but they show null. Nonpitcher offense vs defense: weather affects both; if rain/wind suppresses offense, it would affect both teams and be absorbed by year fixed effects? Not fully but not contract-correlated. New stadium control. Therefore cross-layer veto not supported.

Need maybe include "Physical/biomechanical/weather veto proof" with "proof" as conditional: Under paper's assumptions, the observed pattern is not uniquely explained by physical/biomechanical/weather; to veto, need an alternative that predicts same interaction pattern. The proof is "likelihood ratio" style: P(pattern|shirking) high; P(pattern|weather) low; P(pattern|biomechanical) moderate for pitchers but opposite. Need cite source pages 15-17: pitchers "report to the team for Spring Training about a week sooner" [PAGE 15-16] and "pitcher’s game is under greater control by the catcher and manager" [PAGE 17]. Need quote.

Need "RLVR_COUNTERFACTUAL_VETOES": Need 3 verifiable scenarios with predictions. We can define "veto" as conditions that would falsify. Use exact variables. Need include "RLVR" maybe "reinforcement-learning verifiable reward" but if unknown, just label. We'll write:
- V1 Health/Biomechanics Absorption: Add IL days, sprint speed, exit velocity, pitch velocity/spin (for pitchers) to FE model. Prediction under shirking: β1 remains negative (e.g., ≤ -0.05 WINS/year, 95% CI excludes 0) and offense-specific; defensive WINS null; pitcher WINS null. Veto if β1 attenuates to zero or sign flips when health/IL is added, or if injury/IL days rise with years remaining for nonpitchers.
- V2 Observability Direct-Effort Test: Use pitch-level plate discipline and effort metrics: chase rate on pitches outside zone, pitches per PA, swing decisions, sprint speed on max-effort runs, defensive jumps. Prediction under shirking: offensive effort proxies worsen with years left (higher chase, fewer pitches/PA), while defensive effort proxies unchanged; no pitcher effect. Veto if offense effort proxies do not co-move with negative WINS or if defensive effort proxies decline equally.
- V3 Contract-Expectation/Selection Placebo: Pre-signing performance trajectory and guaranteed salary/option structure; compare players re-signing vs new team. Prediction under shirking: negative years-left effect appears even among same-team re-signers and conditional on pre-signing trend; salary control does not eliminate. Veto if effect concentrated in new-team or high-pre-trend improvers, or disappears with pre-signing trajectory/option-year controls. Need mention paper already controls new team/tenure and salary; V3 extends with pre-signing slope/option years. Good.

Need maybe include predictions equations: β1<0 and β1_off<0, β1_def=0, β1_pitcher=0. We can write thresholds using paper estimates? Need not too strict, but verifiable. Use "one-sided 5%" maybe. Need no betting. Fine.

Need "THINK_TRACE" >=400 words. Need include multi-hop derivation and gray-zone audit. We can write ~700 words. Need cite pages with quotes. Must be deep. Explain from source: Paper's model. Identification. Alternative explanations. Evidence. Gray zones. Need mention page 3 research question quote. Need page 1 quotes. Need page 9 results. Need page 6 sample. Need page 7 summary stats. Need page 10 free agents. Need page 13 table 5. Need page 15 table 6. Need page 16 table 7. Need page 17-18 table 8. Need page 18 conclusion. Need exact quotes. Keep not too long but enough.

Need ensure no "betting". Words like "line" could be misconstrued? The invariant says never mention spreads, totals, moneylines, odds. We can use "linearly" okay. Avoid "line" in betting context. "betting" not mention. "no betting lines" not include. Fine.

Need perhaps include "SOURCE_OPERATORS_AND_EQUATIONS" formal with units and breakdown. Need cite "PAGE 4" "PAGE 5" etc. Need quote verbatim. Good.

Let's draft. Need use XML tags exact. Could include additional title outside? To satisfy, maybe start directly with <THINK_TRACE>. Need all sections. Need maybe use markdown inside tags? Fine.

Need satisfy ">=1,000-word depth across these exact XML sections" all sections combined >1000. We'll target 2800. THINK_TRACE >=400. Need be concise but detailed.

Need formulate "retrocausal genealogy" with historical lineage and multi-week traps. Use citations. "Retrocausal" maybe weird. We'll define: "Trace the conclusion backward: the coefficient -0.07 is not a standalone fact; it is the terminal node of a lineage..." Good.

Need "multi-week traps": Use "multi-week aggregation trap" and "contract-year aggregation trap." Need no betting. Include: The source uses season-level contract-year observations, not multi-week, so any multi-week claim is extrapolation. The noise term μ_t [PAGE 4] is seasonal; multi-week windows would have lower signal-to-noise. So the trap is "short-window overinterpretation of slumps as shirking" and "seasonal aggregation hiding within-season timing." The paper's dummies don't estimate within-season. Good.

Need "recursive theory of mind": "crisis habit regression vs counter-trap vs clock." Let's interpret:
- Crisis habit regression: player under long contract forms low-effort habit, performance declines; if unchecked, monotonic with years left. The paper finds non-monotonic plateau (2,3,4+ coefficients -0.305, -0.297, -0.209 n.s.) [PAGE 9-10], so pure habit regression is not supported; bounded shirking more likely.
- Counter-trap: player's awareness that team/manager can observe defense and monitor pitchers caps shirking; team's awareness player may shirk leads to monitoring; player anticipates and shirks less observable offense. Evidence offense/defense split and pitchers null.
- Clock: final-year incentive to perform for next contract; yields highest final-year performance; one-year contract dummy? Need careful. The model predicts effort increases as n→0. The clock mechanism is the baseline final year. It is the "future salary weights recent performance" [PAGE 2 and 4]. Good.

Need "cross-layer veto adjudication": We can structure as "Veto tests in order." Include physical: age/experience controls; final-year players older but lower WINS, so age cannot explain negative years-left; injury not controlled (gray zone). Biomechanical: pitchers more monitored and earlier spring training; if mechanics/fatigue drove decline, pitchers should show it but no [PAGE 17-18]. Weather: new stadium/new team controls and tenure; Pollard home advantage [PAGE 12]; weather not in model so remaining uncertainty. Need "proof" maybe "veto not sustained." Use "Under the paper's own identification assumptions, the lower-layer veto is not established; it is at best an unmeasured confound for injury, which is a reason for caution, not a refutation." Good.

Need "SOURCE_OPERATORS_AND_EQUATIONS": Need mention "equation appears garbled in extracted text" perhaps? We can state "Reconstructed from the prose; the extraction drops superscripts." But source text is given; maybe don't blame. Need be formal. For utility, source line: "𝑈𝑖=𝑈𝑖𝐶𝑝𝑡𝑒𝑡, 𝑒𝑡". We can write:
\[
U_i = U_i\big(C(p_t(e_t)), e_t\big)
\]
with \(C\) in consumption units (inflation-adjusted millions, base 2010 if salary), \(p_t\) in WINS, \(e_t\) in effort index, and \(\partial U/\partial C>0,\partial U/\partial e_t<0\). Page 4.
Salary:
\[
s_{t+n}=\beta_{t+n}+\alpha^{\,n-1}(e_t+\mu_t)
\]
where \(s\) is salary (millions, base 2010), \(\mu_t\) performance shock in wins, \(\alpha\in(0,1)\) team discount on past performance, \(n\) years remaining. Page 4. But source's C simplified:
\[
C=S+\beta+\frac{(\alpha\rho)^n}{1-\alpha\rho}\mu_t+\frac{(\alpha\rho)^n}{1-\alpha\rho}e_t.
\]
Units mismatch: S+β in consumption units; terms (αρ)^n/(1-αρ) times performance in wins. For coherence, α should map performance to salary/consumption; maybe α has units salary per win. We can note "α is a salary-loading factor with units of salary per WINS if S and β are in salary units." But source treats as discount. Hmm. To avoid unit confusion, say "the paper treats α and ρ as dimensionless discount factors in the reduced form; a dimensionally explicit version would scale α to salary units per WINS." But that might be too critical. Need units exact. We'll state "In the paper's reduced form α is dimensionless; the reduced-form term therefore carries salary/consumption units only through S and β, so the equation is best read as an index equation. A dimensional interpretation requires α to have units of salary per WINS." That's formal and shows audit.

Utility:
\[
U_t=S+\beta+\frac{(\alpha\rho)^n}{1-\alpha\rho}\mu_t+\frac{(\alpha\rho)^n}{1-\alpha\rho}e_t-e_t^2.
\]
FOC as above. Units: U in utils; \(e_t^2\) in utils, so e_t in sqrt(utils). Maybe effort index arbitrary. The derivative first term in utils per effort. Fine.

Breakdown:
- \(0<αρ<1\): \(\partial e_t^*/\partial n = \ln(\alpha\rho) e_t^* <0\) (since ln<0), shirking prediction.
- \(αρ=1\): denominator zero; infinite present value; no finite optimum. Singularity.
- \(αρ>1\): sum diverges; model not defined; sign flips not economically meaningful.
- \(n=0\): final contract year baseline \(e^*=1/[2(1-αρ)]\). Wait if n=0, (αρ)^0=1. But if n=0 no years remaining? The paper's "n remaining years" perhaps n=1 final. But formula with n=0 maybe. Avoid. Maybe say "as n falls, effort rises; the limiting baseline depends on n=0 or n=1 indexing." 
- Bounded shirking: if noise band \([-\bar\mu_t,+\bar\mu_t]\), observed performance \(p_t=e_t+\mu_t\) must be at least \(p_t^E-\bar\mu_t\); this truncates shirking and can produce plateau. Page 5.

Need mention "the empirical equation is not the structural utility equation; it is reduced form." Good.

Need "SOURCE_OPERATORS_AND_EQUATIONS" also mention "YEARSLEFT coefficient -0.070* (0.038) WINS/year main; -0.115** free agents; offense -0.075**, defense 0.010; pitchers 0.057" [PAGE 9, 10, 16, 17-18]. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" maybe include table? Not necessary. But can list.

Need "RLVR_COUNTERFACTUAL_VETOES" exactly 3. Use numbered. Need "predictions" under shirking. Good.

Need be careful with "odds" word. Don't use. "p <" is fine. "p > 0.05" typo? We can mention significance symbols. Avoid "odds ratio." Fine.

Need final answer should be only sections. Let's craft with enough depth.

Let's plan words:
THINK_TRACE ~700.
SOURCE_OPERATORS ~700.
RETROCAUSAL ~350.
RECURSIVE ~500.
CROSS_LAYER ~500.
RLVR ~500.
Total ~3200. Good.

Need include quotes exactly. Let's pick exact quotes:
- Page 1: "Professional sports are an ideal environment to study this potential for shirking because players commonly have contracts with guaranteed salary, contract data is publicly available, and while effort is not directly observable, performance is."
- Page 3: "Does signing Major League Baseball players to contracts that are multiple years in length cause players to shirk in the early years of such contracts?"
- Page 4: "Player performance in time t will be assumed to be a linear function of effort in time t, 𝑒𝑡, and a random error term, 𝜇𝑡."
- Page 5: "as the number of years remaining on the contract, n, increases, effort in time t decreases. This is the shirking hypothesis."
- Page 5: "shirking behavior will increase with contract length but may reach a maximum and level off."
- Page 8: "If players shirk, this coefficient is expected to be negative."
- Page 9: "each additional year remaining causes player performance to fall by about 0.07 WINS."
- Page 10: "performance is at its highest in the final year of the contract and at a comparable lower level in all other years."
- Page 12: "players may be more likely to shirk on offensive than on defense."
- Page 15: "Pitchers are also expected to report to the team for Spring Training about a week sooner than are non-pitchers."
- Page 16: "The impact of years remaining on defensive WINS is small and generally statistically insignificant."
- Page 17: "the coefficient on years left is positive, but not-significant." (pitchers)
- Page 18: "Players are found to shirk in their offensive performance, but not in defensive performance." Is this exact? Page 18-19 conclusion: "Players are found to shirk in their offensive performance, but not in defensive performance." Yes page 18? Actually text on page 18 says "Players are found to shirk in their offensive performance, but not in defensive performance." Let's cite [PAGE 18].
- Page 19: "Pitchers, who less freedom in being able to shirk, are not found to exhibit a negative relationship..." typo. We can quote or not.

Need page 6 sample quote: "1,829 contract-year observations, 1,068 of which come from players in the first year of a new contract." [PAGE 6]
- Page 7 summary: "The mean value of WINS is 1.48." [PAGE 7]
- Page 7: final year mean age 32.37? It's table, can cite [PAGE 7-8].

Need "gray-zone audit" mention: fixed effects cannot control time-varying unobserved ability; coefficient only -0.070 with SE 0.038, p<0.1; main specification weak. The free agent stronger. The nonlinear dummy 4+ not significant. The paper's causal language is stronger than design. But evidence pattern compelling. Need not be overly harsh. This is good.

Need "retrocausal genealogy" maybe include "This paper is in lineage: Ross (1973), Holmstrom (1979), Cantor (1988), Lehn (1982), Krautmann (1990), Scoggins (1993), Krautmann & Solow (2009), Hakes & Turner (2008), Krautmann & Donley (2009), Berri & Krautmann (2005/06), O'Neill (2013), Pollard (2002), Krautmann (2018), Gross & Link (2017)." cite page 20-21. Good.

Need "multi-week traps": historical/scientific lineage & multi-week traps. Use "multi-week windows" but source uses season-level. State "The source does not test multi-week within-season effort; any multi-week inference is outside the paper. The trap: if one takes a hot/cold four-week window as shirking, μ_t noise and schedule/weather confound. The paper's season-level WINS and fixed effects reduce this, but cannot recover weekly effort; the coefficient is a contract-year average." Good.

Need "cross-layer veto" maybe mention "weather" not explicitly measured in source. Need not invent data. Say "No weather variables appear in the source; the only environmental control is new team/tenure and year FE, plus Pollard citation." [PAGE 12]. Good.

Need "RLVR" maybe if not familiar: "RLVR = reinforcement-learning/verifiable-reward audit" but keep. Need "counterfactual vetoes" maybe "If ... then the shirking interpretation is vetoed." Good.

Need ensure no "moneylines" etc. We won't.

Let's now compose final. Need include XML tags exactly. We can use LaTeX. Need not use tables maybe. We'll include bullets. Need ensure THINK_TRACE first. Let's write.

Potential issue: "SOURCE_OPERATORS_AND_EQUATIONS" should state "exact singularity/breakdown regimes." We'll explicitly label "Breakdown regimes." Good.

Potential issue: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." We don't. Good.

Potential issue: "ZERO BETTING LINES" but "linearly" okay. "lineage" okay. Avoid "line" as betting. Fine.

Potential issue: ">=1,000-word DEPTH across these exact XML sections" Our answer likely >3000 words. Good.

Need make citations exact [PAGE N]. We use multiple. Good.

Let's draft final.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s claim is not simply “older players decline” or “long contracts are bad.” Its multi-hop argument is: guaranteed multi-year contracts weaken the connection between current effort and current pay; effort is noisy and unobservable while performance is observed; future pay depends on recent observed performance; therefore a player with more contract years remaining has less incentive to exert current effort, so performance should be lower early in the contract and higher near its end. The source states this research question directly: “Does signing Major League Baseball players to contracts that are multiple years in length cause players to shirk in the early years of such contracts?” [PAGE 3].

The first inferential step is principal-agent moral hazard. The paper quotes the standard conditions: “effort is not directly observable, performance is” [PAGE 1], and later: “Player performance in time t will be assumed to be a linear function of effort in time t, e_t, and a random error term, μ_t” [PAGE 4]. That noise term is the key wedge: the team cannot contract on effort because observed performance is \(e_t+\mu_t\). The second step is intertemporal incentive. Since future salary depends on recent observed performance, the player discounts future pay by \(\rho\) and the team discounts past performance by \(\alpha\). The reduced-form FOC yields effort decreasing in \(n\), the number of years remaining: “as the number of years remaining on the contract, n, increases, effort in time t decreases. This is the shirking hypothesis” [PAGE 5]. The third step is selection. Better players get multi-year contracts, so a naive regression of performance on years left is upward biased. The paper’s own descriptive table confirms this: one-year-contract players have mean WINS 0.97, multi-year players 1.89, and players with two or more years left 2.07 [PAGE 7]. That is why the paper turns to player fixed effects.

The fourth step is empirical identification. The estimating equation is
\[
PERFORMANCE_{it}=\beta_0+\beta_1 YEARSLEFT_{it}+\beta_2 ONEYEAR_{it}+\beta_X X_{it}+\alpha_i+\lambda_t+\varepsilon_{it},
\]
with WINS as the performance measure and player and year fixed effects [PAGE 8]. The coefficient of interest is \(\beta_1\); “If players shirk, this coefficient is expected to be negative” [PAGE 8]. In the main non-pitcher sample, the fixed-effects estimate is \(-0.070\) WINS per year remaining, SE \(0.038\), and the paper says “each additional year remaining causes player performance to fall by about 0.07 WINS” [PAGE 9]. The free-agent-only sample sharpens this to \(-0.115\), SE \(0.048\) [PAGE 10]. The nonlinear dummy specification finds performance “at its highest in the final year of the contract and at a comparable lower level in all other years” [PAGE 10]. That is the core empirical object.

The fifth step is adjudicating rival explanations. A new team could impose adjustment costs: new stadium, new pitchers, new coaches. The paper controls for a new-team dummy, its interactions, and tenure; the years-left coefficients remain negative and significant [PAGE 12-13]. A team could sign players it expects to improve, mechanically producing a negative years-left slope. The paper controls for salary among free-agent-eligible players; the years-left coefficient remains \(-0.098\), SE \(0.047\), in the linear specification [PAGE 14]. The third step is pattern evidence. If players shirk in less observable ways, they should shirk on offense more than defense: “players may be more likely to shirk on offensive than on defense” [PAGE 12]. The data show offensive WINS \(-0.075\), SE \(0.033\), significant, while defensive WINS is \(0.010\), SE \(0.016\), insignificant; “The impact of years remaining on defensive WINS is small and generally statistically insignificant” [PAGE 16]. Pitchers, who are more closely controlled by catcher/manager and report earlier to Spring Training, should shirk less; the pitcher years-left coefficient is positive and insignificant [PAGE 17]. The conclusion is that players “shirk in their offensive performance, but not in defensive performance” [PAGE 18].

The gray-zone audit is where caution is required. First, the main fixed-effects estimate is only significant at the 10% level in the full non-pitcher sample; the free-agent sample is stronger. Second, the design does not directly observe effort, injuries, biomechanics, sleep, travel, or weather. Player fixed effects absorb time-invariant ability, but not time-varying health or motivation. Third, the “causal” language is stronger than the observational design strictly permits; identification requires the untested conditional-independence assumption that, conditional on controls and fixed effects, years-left is uncorrelated with time-varying unobservables. Fourth, the source uses season-level contract-year observations, not within-season multi-week windows, so any weekly interpretation would be an extrapolation. Fifth, the paper’s evidence is a pattern of heterogeneity—offense but not defense, non-pitchers but not pitchers—which is consistent with shirking but not a direct effort measurement. Still, the pattern is not easily generated by generic aging, weather, or new-team adjustment, because those mechanisms do not naturally produce offense-only, non-pitcher-only declines after age, tenure, new-team, and salary controls. The paper is best read as a strong reduced-form case, not a structural proof of effort.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source’s formal model is a principal-agent intertemporal utility model. Let \(C\) be present discounted consumption, \(p_t\) current observed performance, \(e_t\) effort, and \(\mu_t\) a performance noise term. The source writes the player’s utility as \(U_i=U_i(C(p_t(e_t)),e_t)\), with \(C\) increasing in expected future consumption and utility decreasing in effort [PAGE 4]. The units are: \(p_t\) in WINS; \(e_t\) in an abstract effort index; \(\mu_t\) in WINS; salary/consumption in inflation-adjusted millions of dollars with base year 2010 [PAGE 8 note]; utility in cardinal utils.

The salary-generating equation is
\[
s_{t+n}=\beta_{t+n}+\alpha^{\,n-1}(e_t+\mu_t),
\]
where \(s_{t+n}\) is salary in season \(t+n\), \(n\) is years remaining, \(\alpha\) is the team’s discount/loading on past performance, and \(\beta_{t+n}\) captures other determinants of future salary [PAGE 4]. The source’s reduced-form present-value expression is
\[
C=S+\beta+\frac{(\alpha\rho)^n}{1-\alpha\rho}\mu_t
+\frac{(\alpha\rho)^n}{1-\alpha\rho}e_t,
\]
where \(S\) is the present value of guaranteed salaries and \(\beta\) is the portion of future salary value not dependent on current effort [PAGE 4-5]. With quadratic effort cost,
\[
U_t=S+\beta+\frac{(\alpha\rho)^n}{1-\alpha\rho}\mu_t
+\frac{(\alpha\rho)^n}{1-\alpha\rho}e_t-e_t^2.
\]
The first-order condition is
\[
\frac{\partial U_t}{\partial e_t}
=\frac{(\alpha\rho)^n}{1-\alpha\rho}-2e_t=0,
\]
so
\[
e_t^*=\frac{(\alpha\rho)^n}{2(1-\alpha\rho)}.
\]
This is the source’s closed-form effort solution [PAGE 5]. For \(0<\alpha\rho<1\), \(\partial e_t^*/\partial n=\ln(\alpha\rho)e_t^*<0\), so more years remaining lowers effort. That is the shirking prediction. The singularity is explicit: at \(\alpha\rho=1\), the denominator \(1-\alpha\rho\) is zero and the present value diverges; for \(\alpha\rho>1\), the infinite sum is not economically meaningful in this reduced form. Thus the model breaks down at and above \(\alpha\rho=1\). The source also notes that a finite career relaxes the infinite-horizon assumption without changing the key prediction [PAGE 5 note 7].

The model’s second breakdown regime is unbounded shirking. The source bounds it by reputation and observability: if noise \(\mu\) lies in \([-\mu_t,+\mu_t]\), performance must be at least \(p_t-\mu_t\), so “shirking behavior will increase with contract length but may reach a maximum and level off” [PAGE 5]. Operationally, the empirical model is
\[
PERFORMANCE_{it}=\beta_0+\beta_1 YEARSLEFT_{it}
+\beta_2 ONEYEAR_{it}+\beta_X X_{it}
+\alpha_i+\lambda_t+\varepsilon_{it},
\]
and the nonlinear version replaces \(YEARSLEFT\) with dummies for two, three, and four-or-more years left [PAGE 8-9]. The coefficient units are WINS per year remaining. The source reports \(\beta_1=-0.070\), SE \(0.038\), in the main non-pitcher fixed-effects specification [PAGE 9]; \(-0.115\), SE \(0.048\), in the free-agent-only sample [PAGE 10]; offensive WINS \(-0.075\), SE \(0.033\), and defensive WINS \(0.010\), SE \(0.016\) [PAGE 16]; pitcher WINS \(0.057\), SE \(0.070\), insignificant [PAGE 17]. The nonlinear estimates are \(-0.305\), \(-0.297\), and \(-0.209\) for two, three, and four-or-more years left, relative to the final year [PAGE 9-10], which the paper interprets as a plateau rather than a strictly linear decline.

Assumptions and breakdowns: the fixed-effects estimate requires conditional independence of \(\varepsilon_{it}\) from \(YEARSLEFT_{it}\) after \(\alpha_i\), \(\lambda_t\), and \(X_{it}\). It also requires enough within-player variation in years left; the sample is an unbalanced panel of 1,829 contract-year observations for 535 non-pitchers, average 3.4 seasons [PAGE 6]. The model’s causal interpretation breaks if time-varying injury, team incentives, option years, or pre-signing improvement trends correlate with contract length. The source’s own caveats include the alternative new-team adjustment and expected-improvement stories [PAGE 11-14]. The small cells for long contracts—only 19 contracts of 5 years, 8 of 6 years, 9 of 7 years, 8 of 8 years, and 5 of 9+ years—make the nonlinear tail estimates fragile [PAGE 6 table 1].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s conclusion has a clear scientific lineage: Ross (1973) and Holmstrom (1979) on principal-agent moral hazard; Cantor (1988) on work effort and contract length; Lehn (1982), Krautmann (1990), Scoggins (1993), Krautmann and Solow (2009), Hakes and Turner (2008), Krautmann and Donley (2009), and Berri and Krautmann (2005/06) on shirking in MLB; O’Neill (2013) on final-year performance; Pollard (2002) on new-stadium home advantage; and Krautmann (2018) and Gross and Link (2017) on extensions and options [PAGE 20-21]. The paper’s contribution is retrocausal in the sense that it reads the current coefficient backward through that lineage: earlier studies found negative years-left relationships but did not convincingly separate shirking from selection, new-team adjustment, or expected improvement [PAGE 3, 11]. This paper adds fixed effects and then adds diagnostic heterogeneity—offense versus defense, non-pitchers versus pitchers—to reverse-engineer the mechanism [PAGE 12, 15-17].

The historical trap is the “selection-as-shirking” trap. Before fixed effects, the source’s own naive coefficient on years left is positive, \(0.135\), SE \(0.038\) [PAGE 9], because multi-year contracts go to better players. The fixed-effects reversal is the paper’s central move. The second historical trap is the “new-team adjustment” trap: a player signing a multi-year deal with a new club may struggle in a new stadium and against new pitchers. The source controls new team, new-team interactions, and tenure; the negative years-left coefficients remain [PAGE 12-13]. The third trap is “expected improvement”: teams may sign players they expect to improve, which mechanically yields a negative years-left slope. The source controls salary among free agents and still finds a negative years-left coefficient [PAGE 14]. These are not decorative controls; they are genealogical corrections to prior claims.

The multi-week trap is different. The source is season-level, not multi-week. Its noise term \(\mu_t\) is a seasonal performance shock; within a multi-week window, the signal-to-noise ratio is lower, and schedule, weather, travel, and slumps can mimic effort changes. The paper does not estimate within-season weekly effort, so any claim that a player “shirked last week” would exceed the source. The correct genealogical lesson is that the paper’s coefficient is a contract-year average, not a weekly effort meter. The source’s own bounded-shirking argument—reputation and fear of reduced playing time—also implies that short-window effort fluctuations may be capped or reversed [PAGE 5, 8]. Thus the historical lineage supports a seasonal, contract-year interpretation; it does not license a multi-week behavioral diagnosis.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive structure is: player chooses effort; player knows the team cannot observe effort but can observe noisy performance; player knows the team knows the player may shirk; player therefore chooses a shirking level that is hidden inside the noise band. The source states that “the desire to earn future contracts may cause players to want to shirk without being caught to avoid developing a reputation as a shirker” [PAGE 5]. That is first-order theory of mind. The team, in turn, anticipates shirking and monitors observable dimensions—defense, pitcher usage, spring-training reporting—so the player anticipates monitoring and shifts shirking toward less observable offense. The paper’s evidence is exactly this recursive pattern: offensive WINS declines significantly, defensive WINS does not [PAGE 16], and pitchers—whose game is “under greater control by the catcher and manager”—do not show the negative years-left relationship [PAGE 17]. The source concludes that players “shirk in their offensive performance, but not in defensive performance” [PAGE 18].

Three mechanisms compete. First, “crisis habit regression”: under a guaranteed contract, low effort becomes habitual and performance deteriorates monotonically with years remaining. The paper’s nonlinear pattern does not support a simple ever-worsening habit: two, three, and four-or-more years left are all lower than the final year, but the coefficients are \(-0.305\), \(-0.297\), and \(-0.209\), not steadily increasing in magnitude, and the four-plus coefficient is insignificant [PAGE 9-10]. That looks more like a bounded shirking plateau than an unchecked habit spiral. Second, the “counter-trap”: reputation and playing-time risk cap shirking. The source explicitly says players may avoid a “reputation as a shirker” and may fear “reduced playing time” [PAGE 8]. This counter-trap explains why shirking is not unlimited and why it concentrates in less observable offense. Third, the “clock”: the final contract year is the performance benchmark because future salary responds to recent performance. The model’s comparative static is that effort rises as \(n\) falls [PAGE 5], and the empirical specification uses the final year as the omitted baseline [PAGE 9]. The clock is not a separate behavioral story; it is the incentive gradient that makes the final year the high-effort reference point.

Recursively, the player’s best response depends on the team’s posterior about effort, the team’s posterior depends on the player’s anticipated best response, and the analyst’s inference depends on both. The paper’s fixed effects remove time-invariant player type, but they do not solve the full strategic game. The pattern evidence—offense-only, non-pitcher-only—is the paper’s way of showing that the player’s hidden-action margin is real. The weakest link is that the source does not directly observe the player’s belief about monitoring; it infers that belief from the offense/defense and pitcher/non-pitcher contrasts. That is a plausible but indirect test.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The cross-layer veto question is whether physical, biomechanical, or weather mechanisms can explain the same coefficient pattern and thereby veto the shirking interpretation. The paper’s design already absorbs some lower-layer variation: player fixed effects absorb time-invariant physique and ability; age and age-squared control the aging curve; experience controls service time; year fixed effects absorb league-wide season shocks; position dummies absorb position-specific baselines [PAGE 8, 9]. The descriptive table shows final-year multi-year players are older—mean age 32.37—than players with two or more years left—mean age 30.96—yet their mean WINS is lower, 1.54 versus 2.07 [PAGE 7-8]. That is important: a simple age-decline story would predict lower performance for the older final-year group, which would push the years-left coefficient in the opposite direction from the estimated negative effect. After age controls, the negative years-left coefficient is therefore not easily attributed to aging.

Biomechanical veto: if early-contract performance loss were driven by fatigue, injury, or mechanical decline, pitchers—who carry heavy throwing loads and are closely monitored—should be at least as vulnerable as non-pitchers. The paper argues the opposite: “the pitcher’s game is under greater control by the catcher and manager” and “Pitchers are also expected to report to the team for Spring Training about a week sooner than are non-pitchers” [PAGE 15-16]. The pitcher years-left coefficient is positive and insignificant [PAGE 17], not negative. That does not prove pitchers never shirk, but it weakens a generic biomechanical explanation for the non-pitcher result. The offense/defense split is also awkward for a pure biomechanical story: a physical decline could hurt both hitting and fielding, yet defensive WINS is “small and generally statistically insignificant” [PAGE 16].

Weather/environment veto: weather and park effects can change offense, but they are not naturally tied to contract years remaining. The source does not include weather variables; its environmental controls are new team, tenure, and year fixed effects, plus the Pollard (2002) new-stadium argument [PAGE 12]. A weather mechanism would have to correlate systematically with contract length and selectively affect non-pitcher offense rather than defense. The paper’s new-team and tenure controls are designed to absorb the most obvious environmental adjustment channel, and the years-left coefficients remain negative [PAGE 12-13]. Weather could add noise, but it does not have the right signature to veto the shirking pattern.

The honest adjudication is therefore conditional: physical, biomechanical, and weather mechanisms are not established as the driver of the paper’s pattern, but the source does not directly measure injuries or weather. The strongest remaining cross-layer challenge is unobserved time-varying health, especially for non-pitchers. That is a genuine gray zone, not a refutation. To veto the shirking interpretation, a cross-layer mechanism would need to predict the full interaction pattern—negative years-left for non-pitcher offense, null for defense, null for pitchers—after age, experience, tenure, new team, and salary controls. The source’s evidence does not supply such a mechanism.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
V1. Health/biomechanics absorption veto. Add verifiable injury-list days, games missed, sprint speed, exit velocity, and pitcher workload/velocity/spin to the fixed-effects model. Under the shirking hypothesis, the years-left coefficient should remain negative for non-pitcher WINS, especially offensive WINS, and should remain null for defensive WINS and pitcher WINS. Prediction: the coefficient stays at or below roughly \(-0.05\) WINS per year remaining with a confidence interval excluding zero, while injury and biomechanical controls absorb little of the offense-specific effect. Veto condition: if the negative years-left coefficient attenuates to zero or flips sign once injury days and biomechanical measures are included, or if injury/IL days rise monotonically with years remaining among non-pitchers, then the shirking interpretation is vetoed in favor of a health/mechanical explanation.

V2. Direct observability/effort veto. Use pitch-level and tracking data to test the paper’s proposed hidden-action margin: outside-zone swing rate, pitches per plate appearance, swing decisions, sprint speed on max-effort baserunning, and defensive jump/burst metrics. Under the paper’s theory, offensive effort proxies should worsen with years remaining—more chasing, shorter at-bats, less patience—while defensive effort proxies should not worsen, and pitchers should show no such pattern. Prediction: the years-left coefficient on offensive WINS is negative while the years-left coefficient on defensive WINS is near zero; the offensive effort proxies move in the shirking direction; the pitcher sample remains null. Veto condition: if offensive effort proxies do not co-move with the negative offensive WINS coefficient, or if defensive effort proxies decline just as much, or if pitchers show the same effort decline, then the offense-only hidden-shirking story fails.

V3. Contract-expectation/selection placebo veto. Exploit pre-signing performance trajectories, option years, guaranteed money, and re-signing versus new-team status. Under shirking, the negative years-left effect should survive controls for pre-signing trend and should appear among same-team re-signers as well as new-team signers; the effect should not be concentrated only among players whose teams had strong pre-signing improvement expectations. Prediction: the years-left coefficient remains negative after adding a pre-signing performance slope and option-year controls, and the new-team interaction does not explain the result. Veto condition: if the negative years-left effect disappears once pre-signing trajectory is controlled, or if it is concentrated entirely in new-team signers or players with option/backloaded contracts, then the paper’s “team expected improvement” alternative is effectively confirmed and the shirking interpretation is vetoed.
</RLVR_COUNTERFACTUAL_VETOES>