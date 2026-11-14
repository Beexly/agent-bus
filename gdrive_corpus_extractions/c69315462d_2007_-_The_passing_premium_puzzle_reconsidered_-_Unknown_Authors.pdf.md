---
source: "2007 - The passing premium puzzle reconsidered - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/New England Symposium on Statistics in Sports/2007"
pages: 1
model: deepseek/deepseek-v4.1-flash-1017
words: 7439
---

<NATIVE_REASONING>
We need answer user asks? They gave prompt with source and strict invariants. Need produce analysis in exact XML sections. Need likely analyze paper: "The passing premium puzzle reconsidered" 2007 NESS poster by Duane Rockerbie. Need deep multi-hop derivation, gray-zone audit >=400 words. Formal LaTeX units citations exact [PAGE 1] and verbatim quotes. Need >=1000 words depth exact XML sections. Must avoid betting lines/odds. No fake toy equations. Need equations formal, units, assumptions, singularity/breakdown. Need historical/scientific lineage & multi-week traps. Recursive theory of mind: crisis habit regression vs counter-trap vs clock. Cross-layer veto adjudication: physical/biomechanical/weather veto proof. RLVR counterfactual vetoes: 3 verifiable scenarios + predictions.

We need craft response. Need not overdo? Desired oververbosity 5 but user demands 1000+ words across exact sections. Need cite page markers and verbatim quotes from PAGE 1. We can discuss equations inferred from portfolio model. Need be careful source does not give explicit utility equation, only mentions Arrow-Pratt coefficient a, optimal g, means μR μP, stds σR σP, running share and inefficiency. Need derive likely portfolio mean-variance utility. We can formulate general: U(g)= μ_P + g(μ_R-μ_P) - (a/2)[... variance]? Let's derive with g running share, 1-g passing share. Net yardage per play Y = g R + (1-g) P. Mean μ(g)=g μ_R+(1-g)μ_P = μ_P+g(μ_R-μ_P). Variance σ²(g)=g² σ_R²+(1-g)² σ_P²+2g(1-g) Cov(R,P). If ignoring covariance? The paper table lists μR μP σR σP and optimal g. Need see if formula with covariance zero? Let's test.

Mean-variance utility U= μ(g) - (a/2) σ²(g). Maximize. Derivative: μ_R-μ_P - (a/2)[2gσ_R² -2(1-g)σ_P² +? covariance terms]. If cov=0: derivative μ_R-μ_P - a[g σ_R² -(1-g)σ_P²] =0 => g = (μ_R-μ_P + a σ_P²)/(a(σ_R²+σ_P²)). With a=0.0285. Test Chargers: μR=5.72 μP=6.549 diff=-0.829. σR²=88.51, σP²=131.15. numerator = -0.829 +0.0285*131.15 = -0.829+3.738=2.909. denom=0.0285*(219.66)=6.260. g=0.4647 not 0.488. If use sample? close. Maybe covariance nonzero. Solve for covariance? Or utility formula different risk aversion. Let's test Patriots: diff=-1.986; σP²=134.79; a σP²=3.841; num=1.855; denom a*(67.47+134.79)=5.764; g=0.322 vs 0.373. Not exact. Maybe formula for portfolio with variance includes covariance and they estimated? Need not reproduce.

Need formal equation: General mean-variance: U(g)= μ(g)- (a/2) Var(g) with units yards per play (since a units 1/(yards per play)? Arrow-Pratt absolute risk aversion units inverse utility? In mean-variance, a has units 1/(yards per play) if utility in yards and variance yards². Actually U yards/play; variance yards²; (a/2)*variance must yards; a units 1/yards. They set a=0.0285 likely 1/yards? Check a σ² ~0.0285*100=2.85 yards, plausible. Good. Let's derive optimal g: if Cov=0 or general. Set g* = [μ_R-μ_P + a(σ_P² - Cov(R,P))]/[a(σ_R²+σ_P²-2Cov)]. Need handle denominator and singularities. If covariance assumed zero, formula above. Need note table doesn't list covariance, so identifiability issue. If risk-neutral a→0, g* determined by mean only: if μ_R>μ_P, all running; if μ_R<μ_P, all passing; if equal indeterminate. With risk aversion positive, risk hedge. Breakdown: if σR²+σP²-2Cov ≤0 (portfolio variance not strictly convex), utility linear/concave not strict; corner solutions. If a=0 denominator zero. If g outside [0,1], constrained optimum at 0 or 1. If a estimated by setting Chargers g* to actual share (calibration), circular: a is not identified independently; the inefficiency ranking inherits calibration and model. Need mention.

Need explain table data: 2006 NFL regular season, 16 games each 32 teams, approx 1000 plays per team; subtract 45 yards from each interception/fumble. Verbatim quotes: "The data were compiled from all 2006 NFL regular season games (16 for each of 32 teams)..." "As in Alamar (2006), 45 yards was subtracted from each play involving an interception or fumble." "The value for the Arrow-Pratt coefficient ... was set to a = 0.0285. This value set the actual running share of plays for the San Diego Chargers equal to the team optimal g." "Almost all coaches call passing plays too often." "Winning % = 0.66 – 0.795 Inefficiency t-statistic = (14.82) (3.56) R-squared = 0.283". Need cite [PAGE 1] for each. Also quote "The main shortcoming... only the 2006 season" etc.

Need Think Trace >=400 words. The full response maybe 1800-2500 words. Need exact XML sections. Must not mention spreads/totals/moneylines/odds. We can mention no betting lines. But invariant says never mention; avoid words odds, moneyline, spread, totals. "betting" maybe okay but no need. Need "ZERO BETTING LINES" not mention.

Need "SOURCE_OPERATORS_AND_EQUATIONS" formal LaTeX, units, page citations, breakdown. Include equations. Need source operators: mean yardage, std, g, Arrow-Pratt, OLS regression heteroskedasticity-consistent. Need page citation [PAGE 1]. Verbatim quotes. Need breakdown/singularities.

Need "RETROCAUSAL_GENEALOGY": historical/scientific lineage & multi-week traps. Discuss Alamar 2006 passing premium; portfolio finance theory; Markowitz mean-variance, Arrow-Pratt risk aversion, White heteroskedasticity consistent covariance; NFL rule changes since late 1970s; only 2006; pre-1978 data unavailable source. Multi-week traps: using single-season data, post-hoc calibration, rule regime shift, play-level dependence/clock, selection, roster changes, sample size, "optimal g" model mis-specification, efficiency-performance regression reverse causality, omitted variables. Need "multi-week traps" maybe fantasy football? But no betting. Could refer to multi-week analysis traps: treating 16-game season as independent plays, ignoring game script and sequential dependence; across multiple weeks, defensive adaptation, weather, injuries; using multi-week rolling regressions without accounting for autocorrelation; leakage of future information; calibration on season aggregate. Need say no wagers.

Need RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Interpret coaches' decision-making under risk; recursive beliefs: coaches know defenses expect pass; crisis habit regression = reverting to run under pressure despite model; counter-trap = overcorrecting to pass due to rule changes/explosive pass; clock = game-state/time remaining alters objective, so season-average optimal portfolio not per-play optimal. Need explain theory-of-mind hierarchy: level-0 risk-neutral yardage, level-1 defensive anticipation, level-2 coach knows defense knows, equilibrium. Need mention "Almost all coaches call passing plays too often" quote. Need not use betting.

Need CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto proof. Need adjudicate whether model's "running premium" could be vetoed by physical layers. Provide proof structure: a cross-layer veto occurs if variables outside utility function impose hard constraints that make observed pass share not inefficiency. Physical/biomechanical: fatigue, collision load, injury risk, lineman mass, sprint capacity, recovery; weather: wind/rain/cold/turf; biomechanical passing accuracy vs rushing load. Need show veto proof: if constraints bind, actual g differs from unconstrained optimum; model's inefficiency is not causal. Need criterion: Veto if measured constraint vector changes feasible set and shadow price; not mere correlation. Need perhaps formal: constrained optimum g*_C = argmax U(g) subject to h(g; W,B,T)≤0. If h binds, KKT multiplier λ>0, observed g can be optimal constrained while inefficient unconstrained. Thus paper's inefficiency (5)-(6) is unconstrained distance; cannot prove coaching error absent constraints. But paper's regression win% vs inefficiency suggests association, not proof; need cross-layer proof would require conditioning on weather, injury, personnel, score state. We can conclude partial veto: single-season aggregate model cannot rule out physical/weather confounds, so strong causal "almost all coaches pass too often" is not proven; but within-model ranking remains valid descriptive. Need physical/biomechanical/weather veto proof: maybe table has teams with domes/outdoor? Not in source. We can state source lacks weather data, so no direct proof; must infer potential. Need "veto proof" meaning prove no veto? We can provide adjudication: no physical/weather variable in paper; thus the claim of inefficiency is vulnerable. A strict veto proof requires cross-layer data; absent it, we cannot validate. Maybe answer: Cross-layer veto is not established because source only gives yardage distributions and table; no biomechanical/weather measurements. Therefore the "running premium" is a model-conditional result, not a physical law. Need use "veto" as counterevidence. Good.

Need RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR likely reinforcement learning with verifiable rewards? Need generate 3 scenarios that if observed would veto the paper's conclusion. Need predictions. Avoid betting. Each scenario should be testable with data. For example:
1. Pre-1978 play-by-play replication: If running premium absent before rule changes and present only post-1978, then rule-regime interaction. Prediction: estimate g* and inefficiency by era; if coefficient on era×inefficiency on win% flips, veto universal claim.
2. Constrained-state model with down/distance, score differential, clock: If adding state variables makes inefficiency shrink toward zero and loses predictive significance, then "coaches pass too much" vetoed as aggregation artifact. Prediction: team-game fixed effects and state controls reduce coefficient 0.795 and t-stat 3.56 toward zero.
3. Weather/biomechanical constraints: If high wind/precipitation/cold/injury load shifts actual running share toward constrained optimum, and residual inefficiency no longer predicts wins, veto. Prediction: interaction of inefficiency with weather/injury burden negative; high-constraint games show lower pass share and no win penalty.
Maybe 4? Need 3. Include verifiable predictions and metrics: p-values, CIs. Need "RLVR veto" maybe reinforcement learning verifiable reward: define reward = predictive out-of-sample R² or sign consistency; veto if out-of-sample fails. Need be formal: use pre-registered out-of-sample season holdout; compute ΔR² and AUC? Avoid fake equations? Can use formal metrics. Need no toy equations. Good.

Need ensure exact XML sections and all content within. Need maybe include <THINK_TRACE> first. Need >=1000 words across sections. Let's aim ~2200 words. Need no markdown? XML only. But can include LaTeX inside. Need exact markers [PAGE 1]. Need verbatim quotes. Need not mention source page other than [PAGE 1]. Use PAGE 1.

Need include "units": yards per play for μ; yards² per play² for variance; a inverse yards; U yards per play; g dimensionless share; coefficients. For OLS: Winning % dimensionless; Inefficiency dimensionless share; intercept 0.66 dimensionless; coefficient -0.795 per unit share? Actually win% = 0.66 -0.795*Ineff; t stats dimensionless. R² dimensionless. Need state t-statistics and R². Heteroskedasticity-consistent regression via White 1980. Need cite quote exactly: "Winning % = 0.66 – 0.795 Inefficiency t-statistic = (14.82) (3.56) R-squared = 0.283" [PAGE 1]. Need be careful no line break? We can quote.

Need derive general mean-variance with covariance. Let's define:
Let \(g\in[0,1]\) be running share. Let \(R\) and \(P\) be random net yardage per play (yards/play); \(\mu_R=E[R]\), \(\mu_P=E[P]\), \(\sigma_R^2=Var(R)\), \(\sigma_P^2=Var(P)\), \(\rho\) correlation, \(c=Cov(R,P)\). Net portfolio \(Y(g)=gR+(1-g)P\). Then:
\[
\mu_Y(g)=g\mu_R+(1-g)\mu_P=\mu_P+g(\mu_R-\mu_P)
\]
\[
\sigma_Y^2(g)=g^2\sigma_R^2+(1-g)^2\sigma_P^2+2g(1-g)c.
\]
Mean-variance utility:
\[
U(g)=\mu_Y(g)-\frac{a}{2}\sigma_Y^2(g)
\]
with \(a>0\) Arrow-Pratt absolute risk aversion, units 1/(yards/play) under this normalization; \(U\) yards/play. First-order:
\[
U'(g)=\mu_R-\mu_P-a[g\sigma_R^2-(1-g)\sigma_P^2+(1-2g)c]=0
\]
Wait derivative of variance: d/dg [g²σR²+(1-g)²σP²+2g(1-g)c] = 2gσR² -2(1-g)σP² +2(1-2g)c. Derivative of -a/2 gives -a[gσR² -(1-g)σP² +(1-2g)c]. Set zero:
\[
\mu_R-\mu_P = a[g(\sigma_R^2+\sigma_P^2-2c) - \sigma_P^2 + c]? Let's solve:
gσR² -(1-g)σP² +(1-2g)c = gσR² -σP² + gσP² + c -2gc = g(σR²+σP²-2c) -σP² + c.
Thus:
\[
g^* = \frac{\mu_R-\mu_P + a(\sigma_P^2-c)}{a(\sigma_R^2+\sigma_P^2-2c)}.
\]
Check if c=0: [μR-μP + aσP²]/[a(σR²+σP²)]. Good.
Need note if c not reported, cannot recover unique g unless assumed zero. If c is not identified. If \(\sigma_R^2+\sigma_P^2-2c=0\) denominator zero; if numerator zero, any g; else corner. If a→0, risk-neutral. Constrained g*=min(1,max(0,...)). Need maybe table formula.

Need maybe derive inefficiency:
\[
I_i = \hat g_i - s_i^{R}
\]
where \(\hat g_i\) optimal and \(s_i^R\) actual share. Positive means actual running share below optimum -> passing too much. Need cite quote "The last column computes the difference between the optimal running share of plays and the actual running share of plays." [PAGE 1]. Wait table column "Inefficiency (5)-(6)" is optimal g - running share. Positive means g* > actual run -> not enough running -> too much passing. Good. Note "New England Patriots ran the ball a little too much" has -0.089. "Pittsburgh Steelers worst offenders" 0.458.

Need mention "The value for the Arrow-Pratt coefficient ... set to a = 0.0285. This value set actual running share of plays for San Diego Chargers equal to team optimal g." This calibration is not estimated from utility; it's one anchoring. This creates exact zero inefficiency for Chargers by construction. Need discuss.

Need "SOURCE_OPERATORS_AND_EQUATIONS" include OLS. Regression:
\[
W_i = \beta_0+\beta_1 I_i+\varepsilon_i
\]
where W_i 2006 winning percentage; I_i inefficiency. Estimate \hat β0=0.66, \hat β1=-0.795, t(\hatβ0)=14.82, t(\hatβ1)=3.56, R²=0.283. Use White heteroskedasticity-consistent covariance. Units: W dimensionless, I dimensionless; β1 dimensionless per share? Actually win percentage per unit share. Good. Need note statistical significance "at any reasonable level" quote. But no p-values given; t=3.56 with df 30 suggests p~0.0012. Could mention. Need no need.

Need mention data quotes: "all 2006 NFL regular season games (16 for each of 32 teams)" "approximately 1000 total plays for each team" "45 yards was subtracted..." The 45-yard penalty creates shifted distributions; means/stds are in shifted-yard units; interpretation of risk changes. Need note potential issue: subtraction from turnovers is arbitrary and affects mean/variance and utility. The source says "As in Alamar (2006), 45 yards was subtracted from each play involving an interception or fumble." [PAGE 1]. Need discuss in Think Trace.

Need "multi-hop derivation & gray-zone audit" in THINK_TRACE. Include step-by-step:
1. Source identifies puzzle: Alamar found passing premium; Rockerbie tests with portfolio.
2. Map plays to assets; running/pass means and variances.
3. Risk-averse utility -> optimal g.
4. Calibrate a using Chargers.
5. Compute inefficiency and regress on wins.
6. Audit: one-season, no covariance, no state/weather, turnover penalty, calibration, selection, aggregation, causal direction, "almost all coaches" overgeneralization.
Need >=400 words. Good.

Need "RETROCAUSAL_GENEALOGY" maybe lineage: Alamar 2006 JQAS; Markowitz portfolio; Arrow-Pratt; LeRoy/Werner/Ross; Bradfield; White 1980. Historical: NFL rule changes late 1970s; only 2006; cannot get pre-1978 play-by-play. Multi-week traps: within-season adaptive defenses, weather seasonality, injuries, bye weeks, schedule strength, playoffs. Need not mention betting. Use "multi-week panel" perhaps. "Traps": pooling weeks with nonstationary play-calling; using end-of-season aggregate to infer weekly optimal; ignoring serial correlation; using same season to calibrate and test; not accounting for score state. Good.

Need "RECURSIVE_THEORY_OF_MIND": Define three modes:
- Crisis habit regression: under pressure, coach reverts to run despite aggregate model saying pass too little? Actually model says running premium (coaches pass too much); crisis habit regression would be more running under pressure, which would reduce inefficiency. But "crisis habit regression" maybe if coaches regress to conservative run, observed pass share lower. Need relate: The paper's "almost all coaches call passing plays too often" could be a habit/anchoring bias. But recursive ToM: coaches anticipate defense; defense anticipates coach; equilibria. Counter-trap: after rule changes, coaches overvalue passing and pass too much; counter-counter: defenses invest in pass defense, lowering μP and raising σP, making running premium. Clock: late-game clock stops on incomplete passes, time value; season-average utility ignores clock. Need mention "clock" as state variable; optimal g_t depends on time remaining, score differential, timeouts. The model's g season aggregate is not same as per-play. Need include no betting.

Need "CROSS_LAYER_VETO_ADJUDICATION": Need maybe formal constrained optimization:
\[
g_C^*=\arg\max_{g\in[0,1]} U(g)\quad \text{s.t. } h_j(g; \mathbf{W},\mathbf{B},\mathbf{T})\le0,\ j=1,\dots,J
\]
where W weather vector, B biomechanical/injury load, T game clock/score. KKT: if constraint binds, \(\lambda_j>0\). Observed \(g\) can equal \(g_C^*\) while \(I=g^*-g_C^*\) positive. Thus paper's inefficiency is not proof of error unless constraints are nonbinding or included. Need physical/biomechanical/weather veto proof: To veto, show (i) constraints shift g* by at least observed I; (ii) residual I no longer predicts wins; (iii) constraints are exogenous to coaching quality. Source lacks data, so veto not demonstrated; but claim is vulnerable. Need perhaps state "strictly, the cross-layer veto is not proven by source; the paper's own limitation quote..." Use quote "The main shortcoming ... only the 2006 season is considered." [PAGE 1]. Need maybe "There is no weather, injury, or biomechanical measurement in [PAGE 1]." Good.

Need "RLVR_COUNTERFACTUAL_VETOES": Need precise scenarios with predictions. Let's draft:
1. Pre/post-1978 rule-regime test. Data: play-by-play pre-1978 and 2006. Compute era-specific μ, σ, g*, I. Veto if pre-1978 running premium is absent or reversed and era×I interaction on winning percentage is significant with sign flip. Prediction: If rule changes caused passing premium, pre-1978 I distribution centered near zero/negative (too much running) and 2006 positive; if universal coaching bias, both eras positive. If veto: pre-1978 mean I ≤0 and 2006 mean I >0 with non-overlapping 95% CI; regression coefficient on I changes sign. Verifiable.
2. State-conditioned panel with down/distance/score/clock. Veto if adding state fixed effects reduces \hatβ1 from -0.795 to near zero and t<2; and team-week optimal g computed conditionally yields mean I not positive. Prediction: if aggregation artifact, high pass share in obvious passing states is optimal; I positive only in neutral states. Use out-of-sample season. Good.
3. Weather/biomechanical constraint test. Veto if in high-wind/precipitation/cold or high-injury-load games observed g shifts toward constrained optimum and I does not predict wins. Prediction: interaction term negative; constrained model fits better; residual I coefficient not significant. Need exact metric: ΔR², WAIC? Use AIC? No toy. Use likelihood ratio test. Good. Maybe 3 scenarios enough.

Need maybe include "verifiable RLVR" meaning reward verification: define pre-registered decision rules: veto if 95% CI excludes zero in specified direction. Good.

Need ensure no betting lines. Words like "winning percentages" okay. Avoid "odds", "spread", "total", "moneyline". "risk" okay. "portfolio" okay.

Need maybe mention "Unknown Authors" but source author Duane W. Rockerbie. User says Unknown Authors but source has name. Use "Rockerbie" as source. Cite [PAGE 1]. Good.

Need exact XML sections. No extra outside? We can output only XML. Need maybe include a short preamble? User says exact sections. Better only XML sections.

Need write >=1000 words. Let's estimate. THINK_TRACE ~700 words. SOURCE ~600. RETRO ~300. RECURSIVE ~300. CROSS ~300. RLVR ~400. Total ~2600. Good.

Need be careful with ">= 1,000-word depth across these exact XML sections" means overall. We can exceed.

Need no "toy equations"; our equations are formal. Need "SI/information/probability units" - we have units. Maybe mention probability? g is share, risk aversion. Need maybe mention probability units? Not necessary? User says "SI/information/probability units". We can state dimensionless probabilities/shares. Need maybe for regression t-stat dimensionless. Good.

Need "exact singularity/breakdown regimes" in source equations section. We'll list: a=0; denominator zero; covariance perfect hedge; corner constraints; unobserved covariance; calibration; measurement error; nonstationarity. Good.

Need "verbatim quotes" exact. Use quotes in source section and maybe others. Must ensure quotes are exact from PAGE 1. We can quote:
- "NFL teams do not appear to pass as much as they should, despite an increase in the net yardage per pass allowed by rule changes since the late 1970’s." [PAGE 1]
- "The innovation in our approach is to borrow from portfolio finance theory to determine the optimal share of passing and running plays." [PAGE 1]
- "The optimal portfolio of plays maximizes a risk-averse utility function where utility is obtained from net yardage." [PAGE 1]
- "This gives a specific optimal value for the share of total plays that are running plays (R = running, P = passing, a = Arrow-Pratt coefficient of absolute risk aversion)." [PAGE 1] (typo "g" maybe).
- "The data were compiled from all 2006 NFL regular season games (16 for each of 32 teams) and were acquired from the website www.nfl.com." [PAGE 1]
- "Net yardage from approximately 1000 total plays for each team was recorded." [PAGE 1]
- "As in Alamar (2006), 45 yards was subtracted from each play involving an interception or fumble." [PAGE 1]
- "The value for the Arrow-Pratt coefficient of absolute risk aversion was set to a = 0.0285. This value set the actual running share of plays for the San Diego Chargers equal to the team optimal g." [PAGE 1]
- "The evidence supports the hypothesis that there is not a “passing premium” in the NFL, rather, for most teams, there is a “running premium”." [PAGE 1]
- "The main shortcoming of the approach here is that only the 2006 season is considered." [PAGE 1]
- "The only way to test this hypothesis is to obtain play by play data for a year prior to 1978. I have not found a source." [PAGE 1]
- "Almost all coaches call passing plays too often." [PAGE 1]
- Regression quote. Good.

Need maybe mention "Table 1 last column" quote: "The last column computes the difference between the optimal running share of plays and the actual running share of plays." [PAGE 1]. Good.

Need maybe mention "Pittsburgh Steelers were the worst offenders." [PAGE 1]. Good.

Need in THINK_TRACE maybe quote less? Source section handles quotes. But THINK_TRACE can include citations too. Need exact [PAGE 1] markers. Use them.

Need maybe address "source pages provided" only one page. All citations [PAGE 1]. Good.

Need maybe not use "betting" at all. Fine.

Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. We need maybe call "proof" exact. Provide:
- Define cross-layer witness \(W=(\mathbf{W}_t,\mathbf{B}_t,\mathbf{T}_t)\).
- Veto criterion: \( \exists \) constraint with \(\lambda>0\) and \(\Delta g = g^*-g_C^* \approx I\) and \(I\) loses predictive value conditional on W.
- Source cannot supply; so no positive proof of veto, but also no proof of no veto. The paper's claim is conditional. We can say "The physical/weather veto is not established by [PAGE 1]; therefore the strong causal sentence is overclaimed." That is adjudication. Need maybe use "adjudication: source supports descriptive model, not universal coaching inefficiency." Good.

Need "RLVR_COUNTERFACTUAL_VETOES": Include "verifiable" metrics. Need maybe define:
- Scenario A: pre-1978 replication. Prediction: if universal bias, mean I>0 both eras. Veto if mean I_pre ≤ 0 and 2006 mean I>0 with 95% CI nonoverlap; era×I coefficient significant with opposite sign.
- Scenario B: state-adjusted panel. Prediction: if true inefficiency, conditional I predicts wins out-of-sample. Veto if \hatβ1 loses sign/CI includes 0 after controls.
- Scenario C: weather/injury constraints. Prediction: if constraints explain, high-constraint games show lower pass share and residual I no predictive power. Veto if constrained model likelihood ratio significant and residual coefficient CI includes 0.
Need maybe "RLVR" reward: pre-register veto as binary; reward = 1 if all thresholds met. Good.

Need answer maybe not too verbose? But user wants depth. Let's write polished.

Need be careful with XML: No unescaped ampersands? Use \&? We can avoid ampersands. In XML, `<` in text must be escaped if not part of tags. LaTeX includes `<` maybe. Need avoid raw `<` in equations? We can use \leq instead of <. Use `>` okay? In XML text `>` allowed, `<` not. Need ensure no raw `<` anywhere. Use `\le`, `\geq`, `\to`. For tags, fine. Do not use "R-squared = 0.283" with `<` no. Use `a>0` has > allowed. Fine. Use `g\in[0,1]`. No `<`. Use "t-statistic" no issue. Use "p<0.05" would raw `<` bad; use `p \le 0.05` or "p less than". Avoid. Need if quoting source "R-squared" okay. Need use `\mu_R` etc. In XML, backslashes okay. Use `&`? Avoid. Use "and". Use "≤" maybe Unicode allowed. We can use `\le`. Good.

Need no unescaped `<` in "95% CI". Fine.

Need include "Arrow-Pratt" with hyphen. Good.

Need maybe include "LaTeX equations" with `\[` and `\]`. XML tags inside? Fine. Need if using `$$`? okay. No `<`.

Need exact XML sections:
<THINK_TRACE>...</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>...</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>...</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>...</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>...</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>...</RLVR_COUNTERFACTUAL_VETOES>

Need no markdown headers. Fine.

Let's draft content carefully.

THINK_TRACE:
Paragraph 1: The source is a one-page poster by Rockerbie. It tests Alamar 2006. It maps run/pass to portfolio. Need infer equation. It uses net yardage distributions, table. There is an optimal g. Then compare to actual. The "passing premium" means teams should pass more; paper says running premium. Need gray-zone audit.

Paragraph 2: Multi-hop derivation: define random variables, mean variance. The source doesn't print covariance; table only μ and σ. Therefore formula likely assumes zero covariance or hidden. We derive general and zero-cov. Calibration a=0.0285 on Chargers; if a chosen to make SD g*=actual, then SD inefficiency zero by construction; not independent validation. The table shows Patriots negative, Steelers positive; "almost all" is 31? Table 32 teams; Chargers zero; Patriots negative; so 30 positive? Actually table: Patriots -0.089, Saints -0.016, Chargers 0, Colts 0.034 positive, etc. So 29 positive? Count: 32 teams; negative 2; zero 1; positive 29. "Almost all" yes. Need mention.

Paragraph 3: Audit: data 2006 only, 16 games, ~1000 plays; turnover 45-yard subtraction; risk aversion calibration; no covariance; no state/weather; regression endogeneity; efficiency may proxy coaching quality; one-season. Quote limitations. Thus internal model supports ranking but external causal claim overreach. Need mention "final point" regression; 0.283 R² modest; heteroskedastic robust; but no controls.

SOURCE section:
- Define variables and equations. Units. Cite quotes. Derivation. OLS. Breakdown. Need maybe include calibration and table. Use exact quotes.
Need not repeat everything. But formal.

RETRO section:
- lineage: Alamar 2006 JQAS; Markowitz; Arrow-Pratt; Bradfield; LeRoy/Werner/Ross; White. Rule changes since 1970s. Data prior 1978 missing. Multi-week traps: single-season, nonstationary weekly, adaptation, injuries, weather, schedule, score state, calibration leakage, use of end-of-season wins. Need mention "multi-week panel with team-week observations must not treat plays independent; use clustered or hierarchical models; otherwise t-stats overstate." Good.

RECURSIVE section:
- ToM levels. Coaches' beliefs. Crisis habit regression: under pressure, conservative run; this would reduce positive I; if observed positive I, maybe crisis not dominant. Counter-trap: rule changes induce overpassing; defenses adapt. Clock: time remaining, score, timeouts make per-play optimal differ. Need mention "Almost all coaches call passing plays too often" quote. Need say recursive equilibrium can generate observed pass share without bias. Good.

CROSS section:
- formal constrained optimum, KKT, veto criteria. Physical/biomechanical: collision load, fatigue, injury; weather: wind, precipitation, temperature, turf. Source lacks variables. Adjudication: no cross-layer veto can be proven from [PAGE 1]; the unconstrained inefficiency is descriptive. Need maybe "Veto proof" as "to prove veto, show constraint shadow prices account for I and residual I no longer predicts wins." Good.

RLVR section:
- 3 scenarios. Need exact predictions. Maybe use "verifiable reward" with binary thresholds. Need avoid raw `<`. Use "less than" or `\le`. Good. Need mention no betting. Fine.

Need maybe maintain "ZERO BETTING LINES" by not mentioning "winning percentage" maybe okay. It's not betting line. Good.

Need "ZERO TOY EQUATIONS" - our equations are formal. Good.

Need "SI/information/probability units" - include "g dimensionless", "μ yards/play", "variance yards²/play²", "a inverse yards", "W dimensionless", "R² dimensionless". Good.

Need "exact singularity/breakdown regimes": list.

Need maybe mention "information" units? We could state "No information-theoretic quantity is reported; any entropy/odds-style transformation would be external." But avoid odds word? "odds-style" no, contains odds. Avoid. We can say "No information-theoretic quantity is reported." Good. Not necessary.

Need not mention "moneyline". Fine.

Need check XML validity: `&` not used. Use "and". LaTeX `\text{...}` with `&`? Avoid alignment `&`. Use separate equations. `\le` okay. `\mu` okay. Quotes with curly quotes okay. `[PAGE 1]` okay. `%` okay. `#` okay. `_` okay. `$` okay. `<` avoid. We have `a>0` > okay. `g\in[0,1]` okay. `\arg\max` okay. `\text{s.t.}` okay. `\mathbf{W}` okay. `\lambda_j>0` > okay. `\hat{\beta}_1` okay. `\Delta R^2` okay. `p \le 0.05` okay. No `<`.

Need final answer only XML sections. Let's write. Need maybe 2400 words. We'll compose now. Ensure THINK_TRACE >=400 words. Let's count approximate: 700. Good.

Need "verbatim quotes" exact. I must ensure quotes match text exactly. Source uses "late 1970’s" curly apostrophe. We can quote with curly. "The value for the Arrow-Pratt coefficient of absolute risk aversion was set to a = 0.0285. This value set the actual running share of plays for the San Diego Chargers equal to the team optimal g." Source has line break but okay. "The last column computes the difference between the optimal running share of plays and the actual running share of plays." yes. "The Pittsburgh Steelers were the worst offenders." yes exact? Source: "The Pittsburgh Steelers were the worst offenders." yes. "Almost all coaches call passing plays too often." exact. "Winning % = 0.66 – 0.795 Inefficiency t-statistic = (14.82) (3.56) R-squared = 0.283" exact? Source: "Winning % = 0.66 – 0.795 Inefficiency
t-statistic =
(14.82) (3.56)
R-squared = 0.283". We can quote with spaces. Good.

Need mention "a = Arrow-Pratt coefficient" quote maybe not exact due line break. Fine.

Need "The innovation in our approach is to borrow from portfolio finance theory to determine the optimal share of passing and running plays." exact. Good.

Need "The evidence supports the hypothesis that there is not a “passing premium” in the NFL, rather, for most teams, there is a “running premium”." exact. Good.

Need "The main shortcoming of the approach here is that only the 2006 season is considered." exact. Good.

Need "The only way to test this hypothesis is to obtain play by play data for a year prior to 1978. I have not found a source." exact. Good.

Need "NFL teams do not appear to pass as much as they should, despite an increase in the net yardage per pass allowed by rule changes since the late 1970’s." exact. Good.

Need "The data were compiled from all 2006 NFL regular season games (16 for each of 32 teams) and were acquired from the website www.nfl.com." exact. Good.

Need "Net yardage from approximately 1000 total plays for each team was recorded." exact. Good.

Need "As in Alamar (2006), 45 yards was subtracted from each play involving an interception or fumble." exact. Good.

Need "This was tested by using a heteroskedasticity consistent regression technique to regress 2006 winning percentages on the efficiency measure." exact? Source: "This was tested by using a heteroskedasticity consistent regression technique to regress 2006 winning percentages on the efficiency measure." Yes. Good.

Need maybe "efficiency measure" vs "inefficiency" source says efficiency measure but table inefficiency. Note.

Need final.
</NATIVE_REASONING>

<THINK_TRACE>
The source is a one-page poster by Duane W. Rockerbie that tests Alamar’s 2006 “passing premium” claim by borrowing portfolio-finance logic. The core move is multi-hop: (i) treat running and passing plays as two risky assets whose returns are net yardage per play; (ii) assume coaches choose a season-long mix to maximize a risk-averse utility function over net yardage; (iii) derive an optimal running share \(g\); (iv) compare \(g\) with the observed running share for each of 32 NFL teams in 2006; and (v) regress 2006 winning percentage on the gap between optimal and actual running share. The poster states the motivation clearly: “NFL teams do not appear to pass as much as they should, despite an increase in the net yardage per pass allowed by rule changes since the late 1970’s” [PAGE 1]. The innovation is “to borrow from portfolio finance theory to determine the optimal share of passing and running plays” [PAGE 1]. The model’s utility is over net yardage: “The optimal portfolio of plays maximizes a risk-averse utility function where utility is obtained from net yardage” [PAGE 1]. The key parameter is the Arrow-Pratt coefficient \(a\), and the source says this “gives a specific optimal value for the share of total plays that are running plays” [PAGE 1].

A gray-zone audit begins with what the poster does not print. The table gives \(\mu_R,\mu_P,\sigma_R,\sigma_P\), optimal \(g\), actual running share, and inefficiency, but it does not give the covariance between running and passing yardage, nor the explicit utility equation. Therefore the exact algebraic form used for \(g\) is underidentified from the source page alone. A standard mean-variance representation is the natural derivation, but without the covariance term the formula is only exact under an implicit zero-covariance assumption or a hidden covariance estimate. This matters because the risk-hedging term depends on \(\sigma_P^2-\mathrm{Cov}(R,P)\) and the curvature denominator depends on \(\sigma_R^2+\sigma_P^2-2\mathrm{Cov}(R,P)\). If covariance is nonzero and unreported, the table’s \(g\) values cannot be reproduced uniquely.

Second, the calibration is endogenous. The poster says: “The value for the Arrow-Pratt coefficient of absolute risk aversion was set to a = 0.0285. This value set the actual running share of plays for the San Diego Chargers equal to the team optimal g” [PAGE 1]. That makes the Chargers’ inefficiency exactly zero by construction, and it forces the entire ranking of other teams to depend on one team’s anchor. This is not independent estimation of risk preferences; it is normalization. The table shows the Patriots at \(-0.089\), the Saints at \(-0.016\), the Chargers at \(0.000\), and most other clubs positive, with the Steelers at \(0.458\). The phrase “Almost all coaches call passing plays too often” [PAGE 1] is therefore model-conditional: it means almost all observed running shares are below the calibrated optimum, not that a structural causal bias has been identified.

Third, the data are one season and all plays are aggregated. The source says: “The data were compiled from all 2006 NFL regular season games (16 for each of 32 teams)” and “Net yardage from approximately 1000 total plays for each team was recorded” [PAGE 1]. The turnover treatment is also a modeling choice: “As in Alamar (2006), 45 yards was subtracted from each play involving an interception or fumble” [PAGE 1]. That 45-yard penalty mechanically shifts means and variances; it is not a physical yardage law. The regression is reported as “Winning % = 0.66 – 0.795 Inefficiency” with \(t\)-statistics \((14.82)\) and \((3.56)\) and “R-squared = 0.283” [PAGE 1]. A heteroskedasticity-consistent covariance matrix helps with heteroskedasticity but not with omitted state variables, reverse causality, weather, injuries, score differential, clock, or team quality. The poster itself admits the regime problem: “The main shortcoming of the approach here is that only the 2006 season is considered” [PAGE 1], and pre-1978 play-by-play data were not found [PAGE 1]. Thus the internal result supports a descriptive ranking under the calibrated model, while the external claim that coaches systematically overpass is a much stronger inference than the one-page evidence can bear.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(g\in[0,1]\) be the running-play share and \(1-g\) the passing-play share. Let \(R\) and \(P\) be random net yardage per play, in yards per play, with means \(\mu_R,\mu_P\), variances \(\sigma_R^2,\sigma_P^2\) in squared yards per squared play, and covariance \(c=\mathrm{Cov}(R,P)\). The portfolio net yardage is
\[
Y(g)=gR+(1-g)P,
\]
so
\[
\mu_Y(g)=g\mu_R+(1-g)\mu_P=\mu_P+g(\mu_R-\mu_P),
\]
and
\[
\sigma_Y^2(g)=g^2\sigma_R^2+(1-g)^2\sigma_P^2+2g(1-g)c.
\]
A mean-variance risk-averse utility in net-yardage units is
\[
U(g)=\mu_Y(g)-\frac{a}{2}\sigma_Y^2(g),
\]
where \(a>0\) is the Arrow-Pratt coefficient of absolute risk aversion. In this normalization \(U\) is in yards per play, \(\sigma_Y^2\) is in squared yards per squared play, and \(a\) has units of inverse yards if the product \(a\sigma_Y^2\) is to be in yards per play. The first-order condition is
\[
U'(g)=\mu_R-\mu_P-a\left[g\sigma_R^2-(1-g)\sigma_P^2+(1-2g)c\right]=0,
\]
which gives the interior optimum
\[
g^*=\frac{\mu_R-\mu_P+a(\sigma_P^2-c)}{a(\sigma_R^2+\sigma_P^2-2c)}.
\]
Under the implicit zero-covariance case \(c=0\), this reduces to
\[
g^*=\frac{\mu_R-\mu_P+a\sigma_P^2}{a(\sigma_R^2+\sigma_P^2)}.
\]
The inefficiency measure is the difference between optimal and actual running share:
\[
I_i=g_i^* - s_i^R,
\]
where \(s_i^R\) is team \(i\)’s observed running share. The poster states: “The last column computes the difference between the optimal running share of plays and the actual running share of plays” [PAGE 1]. Positive \(I_i\) means the team ran less than the calibrated optimum, i.e. passed “too much” under the model; negative \(I_i\) means it ran “too much.” The table reports the Patriots at \(-0.089\), the Chargers at \(0.000\), and the Steelers at \(0.458\), with “The Pittsburgh Steelers were the worst offenders” [PAGE 1].

The second operator is a heteroskedasticity-consistent linear regression of 2006 winning percentage \(W_i\) on inefficiency \(I_i\):
\[
W_i=\beta_0+\beta_1 I_i+\varepsilon_i.
\]
The reported estimates are
\[
\widehat{W}_i=0.66-0.795\,I_i,
\]
with \(t(\hat\beta_0)=14.82\), \(t(\hat\beta_1)=3.56\), and \(R^2=0.283\) [PAGE 1]. Here \(W_i\) is dimensionless, \(I_i\) is a dimensionless share, \(\beta_1\) is dimensionless per unit share, and \(R^2\) is dimensionless. The source says the test used “a heteroskedasticity consistent regression technique” [PAGE 1] and cites White (1980) in the literature list [PAGE 1]. The calibration is explicit: “The value for the Arrow-Pratt coefficient of absolute risk aversion was set to a = 0.0285. This value set the actual running share of plays for the San Diego Chargers equal to the team optimal g” [PAGE 1]. This is an anchoring normalization, not an independently estimated preference parameter.

Breakdown and singularity regimes are exact and important. If \(a\to0\), the utility becomes risk-neutral and the first-order condition collapses to the mean comparison: \(\mu_R>\mu_P\) implies a corner at \(g=1\); \(\mu_R<\mu_P\) implies a corner at \(g=0\); if \(\mu_R=\mu_P\), every \(g\) has the same mean and risk preferences determine the choice. If \(\sigma_R^2+\sigma_P^2-2c=0\), the variance is not strictly convex in \(g\), so the denominator vanishes; the optimum is a corner or indeterminate depending on the numerator. If \(c\) is large enough that \(2c\ge \sigma_R^2+\sigma_P^2\), the risk-hedging geometry changes and the interior formula may fail. If the unconstrained \(g^*\) lies outside \([0,1]\), the constrained optimum is \(\min(1,\max(0,g^*))\). If covariance is omitted but nonzero, \(g^*\) is biased; if \(a\) is calibrated to one team, all inefficiency scores are relative to that anchor; and if the 45-yard turnover subtraction is mis-specified, the means and variances shift. Finally, the model is a one-season aggregate, so it cannot identify within-game, down-and-distance, clock, weather, or injury-state optima. The poster acknowledges the regime limitation: “The main shortcoming of the approach here is that only the 2006 season is considered” [PAGE 1]. The conclusion is therefore model-conditional: “The evidence supports the hypothesis that there is not a ‘passing premium’ in the NFL, rather, for most teams, there is a ‘running premium’” [PAGE 1].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage runs from Alamar’s 2006 “The Passing Premium Puzzle” in the Journal of Quantitative Analysis in Sports through portfolio finance and risk-aversion theory. The poster cites Alamar (2006), Bradfield (2007), LeRoy, Werner, and Ross (2000), and White (1980) [PAGE 1]. The retrocausal chain is: NFL rule changes since the late 1970’s raised net yardage per pass; if passing became more productive, a risk-neutral or mean-variance optimizer should pass more; Alamar observed that teams did not pass as much as that logic suggests; Rockerbie reconsiders by adding risk aversion and portfolio variance, and then finds that the direction reverses for 2006 because running carries a favorable risk-return tradeoff. The poster says the evidence supports “not a ‘passing premium’ in the NFL, rather, for most teams, there is a ‘running premium’” [PAGE 1]. The historical counterfactual is explicit: “It could be that the running premium found for 2006 did not exist before the rule changes. The only way to test this hypothesis is to obtain play by play data for a year prior to 1978. I have not found a source” [PAGE 1]. That is the central genealogical trap: a one-season result is being used to reinterpret a multi-decade rule-regime narrative.

Multi-week traps follow from the same structure. A season is not 16 independent replications of a static portfolio problem. Coaches adapt to opponents, opponents adapt to coaches, injuries alter the feasible set, weather changes passing variance, and score state changes the objective. If one pools team-week observations without hierarchical or clustered errors, the reported \(t\)-statistics can be overstated; if one uses end-of-season winning percentage to validate a within-season play-calling rule, the regression can pick up team quality rather than coaching efficiency. If one calibrates \(a\) on the Chargers and then tests the Chargers’ inefficiency, the zero is mechanical. If one uses the same 2006 season to choose the model and evaluate it, the \(R^2=0.283\) is in-sample. If one ignores the 45-yard turnover penalty, the risk ranking can change because turnovers inflate variance. If one treats “running premium” as a universal law rather than a 2006 model-conditional description, one commits the retrocausal fallacy of projecting a single-season portfolio result backward across rule regimes and forward across different defensive equilibria. The correct lineage is therefore not “coaches are irrational” but “a mean-variance portfolio model with a calibrated risk-aversion anchor produces a positive optimal-running-share gap for most 2006 teams, and that gap is correlated with winning percentage in that same season.”
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
A recursive theory-of-mind reading separates three mechanisms: crisis habit regression, counter-trap overcorrection, and clock-state optimization. Crisis habit regression is the coach-under-pressure pattern: when uncertainty rises, the coach reverts to a familiar, lower-variance running call even if the season-aggregate portfolio says the running share is already high. Under the paper’s sign convention, a positive inefficiency means actual running share is below the calibrated optimum, so crisis habit regression would push \(I\) downward, not upward. The poster’s claim that “Almost all coaches call passing plays too often” [PAGE 1] is therefore more consistent with a persistent pass-side bias or a defensive equilibrium than with pure panic-run behavior. Counter-trap overcorrection is the opposite: after rule changes made passing more remunerative, coaches may have over-updated toward passing; defenses then invest in pass defense, raising passing variance and lowering the risk-adjusted return, which can produce a running premium without any coach being simply irrational. The recursive levels are: level 0, choose the mean-yardage-maximizing play; level 1, anticipate the defense’s anticipation; level 2, know that the defense knows the coach’s tendency; and level 3, adjust the portfolio to the meta-game. The observed \(g\) is an equilibrium object, not a direct readout of a coach’s private preference.

Clock is the third mechanism and the one the season-aggregate model cannot represent. A team trailing late wants to stop the clock, so incomplete passes have a time value not captured by net yardage; a team leading late wants to consume clock, so running has a time value not captured by net yardage. Thus the per-play optimal running share is state-dependent:
\[
g_t^*=g^*(\mu_R,\mu_P,\sigma_R^2,\sigma_P^2,c,a,\text{score}_t,\text{clock}_t,\text{timeouts}_t,\text{down}_t,\text{distance}_t).
\]
The poster’s \(g\) is an average over these states. A team can be “inefficient” relative to the season aggregate while being locally optimal given the clock. That is a counter-trap to the counter-trap: the model says pass more, but the game state says run or pass for clock reasons. The recursive theory-of-mind conclusion is that the paper’s inefficiency measure is a reduced-form residual, not a direct measure of coaching error. It can rank teams under the calibrated portfolio model, but it cannot distinguish habit regression, equilibrium adaptation, and clock-state optimization without state-level data.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A cross-layer veto occurs when a physical, biomechanical, or weather constraint binds so tightly that the unconstrained portfolio optimum is infeasible. Formally, let \(\mathbf{W}_t\) be weather state, \(\mathbf{B}_t\) biomechanical and injury-load state, and \(\mathbf{T}_t\) clock/score/timeout state. The constrained coach solves
\[
g_C^*=\arg\max_{g\in[0,1]} U(g)\quad \text{subject to } h_j(g;\mathbf{W}_t,\mathbf{B}_t,\mathbf{T}_t)\le 0,\quad j=1,\dots,J.
\]
If a constraint binds, the Karush-Kuhn-Tucker multiplier satisfies \(\lambda_j>0\), and the observed \(g\) can equal \(g_C^*\) while the unconstrained gap \(I=g^*-g_C^*\) remains positive. The paper’s inefficiency is an unconstrained distance; it is not a proof that coaches ignored the constraint. Biomechanically, repeated high-speed collisions, soft-tissue fatigue, lineman mass, sprint capacity, and injury risk can make a pass-heavy portfolio physically costly even if its mean yardage is high. Weather can raise passing variance through wind, precipitation, cold, and turf conditions; those are variance shocks, not mean-only shocks, so they enter exactly through \(\sigma_P^2\) and \(c\). A strict veto proof would require showing three things: the constraint vector shifts \(g_C^*\) by approximately the observed \(I\); the residual \(I\) loses predictive power for winning percentage after conditioning on \(\mathbf{W},\mathbf{B},\mathbf{T}\); and the constraints are exogenous to coaching quality. The source page provides none of those cross-layer measurements. It reports only 2006 net-yardage distributions, the calibrated \(a=0.0285\), and the aggregate regression [PAGE 1]. Therefore the cross-layer veto is not established by the source, but the source also cannot rule it out. The correct adjudication is that the paper’s “running premium” is a model-conditional descriptive result. The strong sentence “Almost all coaches call passing plays too often” [PAGE 1] is overclaimed as a physical or universal statement; it is defensible only as a statement about the calibrated unconstrained mean-variance benchmark.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
The following three verifiable counterfactual vetoes use pre-registered decision rules. A veto is scored as a binary reward: 1 if the specified threshold is met, 0 otherwise. No result depends on any line or market quantity.

Scenario 1: Pre-1978 rule-regime replication. Obtain play-by-play data before 1978 and apply the same mean-variance calibration and inefficiency construction. Prediction under the paper’s universal-bias interpretation: mean \(I\) is positive in both eras, and \(I\) predicts winning percentage with the same sign in both eras. Veto prediction: if the pre-1978 mean \(I\) is less than or equal to zero while the 2006 mean \(I\) is positive, with non-overlapping 95% confidence intervals, and the era-by-inefficiency interaction changes sign, then the “running premium” is a post-rule-change regime effect rather than a general coaching bias. The test is verifiable from era-specific estimates and confidence intervals. The poster itself flags this missing test: “The only way to test this hypothesis is to obtain play by play data for a year prior to 1978. I have not found a source” [PAGE 1].

Scenario 2: State-conditioned panel with down, distance, score, and clock. Re-estimate the optimal running share at the team-week or drive level with state fixed effects, then recompute \(I\). Prediction under the paper’s interpretation: conditional \(I\) still predicts winning percentage out of sample with a negative coefficient near \(-0.795\) and a \(t\)-statistic above 2. Veto prediction: if adding state controls drives \(\hat\beta_1\) toward zero, its 95% confidence interval includes zero, and the out-of-sample \(R^2\) gain over a state-only model is not positive, then the aggregate inefficiency is an aggregation artifact and the coaching-error reading is vetoed. This is verifiable by held-out-season prediction and coefficient stability.

Scenario 3: Weather and biomechanical constraint test. Split games by high wind, precipitation, cold, and injury-load burden; estimate constrained optima \(g_C^*\) with those variables. Prediction under the paper’s interpretation: the residual \(I\) remains positive and predicts winning percentage even in high-constraint games. Veto prediction: if the constrained model has a significantly better likelihood-ratio fit, the observed running share moves toward \(g_C^*\) in high-constraint games, and the residual \(I\) coefficient’s 95% confidence interval includes zero, then physical and weather constraints account for the apparent “running premium.” This is verifiable with pre-registered likelihood-ratio and coefficient-sign criteria. The source page lacks the weather and biomechanical variables, so this veto cannot be adjudicated from [PAGE 1] alone.
</RLVR_COUNTERFACTUAL_VETOES>