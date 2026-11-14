---
source: "2025 - Talk and poster abstracts - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/New England Symposium on Statistics in Sports/2025"
pages: 23
model: nvidia:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4917
---

<NATIVE_REASONING>
The user wants a deep analytical response based on the provided source text (NESSIS 2025 talk and poster abstracts). I need to produce output with exactly these XML sections:

1. <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
2. <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
3. <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
4. <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
5. <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
6. <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Constraints:
- Zero betting lines: never mention spreads, totals, moneylines, or odds.
- Zero toy equations: no fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
- When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
- >= 1,000-word depth across sections.

Let me carefully map source pages. The text shows page numbers 1 through 21 embedded in the source. I should cite these as [PAGE N] where N corresponds to the printed page numbers visible in the source text (1-21). Note the source says PAGES: 23 but the visible page markers go up to 21. I will cite exactly what's visible.

Key papers to reference:
- Bajons & Kook, rMetrics (p. 1)
- Baumer & Susnea, Reward Systems/Fairness (p. 1)
- Chayka et al., Skating Speed (p. 2)
- Diao, Chess streaks (p. 2)
- Harringer & Bajons, xPV (p. 2-3)
- Hu, FG Attempts (p. 3-4)
- Jenkins, Tackling Causality (p. 4)
- Matabuena, Digital Health (p. 4-5)
- Michels et al., Football Coverages (p. 5)
- Nguyen & Yurko, NFL CoD (p. 6)
- Osborne & Levine, HR Park Effects (p. 6-7)
- Pipping et al., Paradox of Blown Leads (p. 7)
- Uribe et al., Penalty Kick (p. 7-8)
- Yurko & Benz, College Football Volatility (p. 8)
- Zhu et al., Ball path curvature free throws (p. 9)
- Awosoga et al., Clustering Aging Curves (p. 10)
- Barbosa & Sahasrabudhe, League-Normalized Plus-Minus (p. 10)
- Brahme, NBA Production Curves (p. 11)
- Damani, NFL Partial Membership Clustering (p. 12)
- Davila, GARCH NBA Consistency (p. 12)
- Dickman et al., F1 Sponsor (p. 13)
- Eberhard & Miller, Wind Ultimate Frisbee (p. 13-14)
- Faberman, BOE Coaches (p. 14)
- Gebauer et al., Dynamic Rating Pass Rushers (p. 15)
- Gong, RAPM Stabilization (p. 15-16)
- Hahami, Hustle Plays RAPM (p. 16)
- Hannig & Thomas, Quantile Cube Female Soccer (p. 16)
- He, Transfer Portal (p. 16-17)
- Unknown, NHL Russian Skaters (p. 17)
- Millington & Powers, Comps-Based Tree Interpretability (p. 18)
- Niu et al., Causal Role of Timeouts (p. 18)
- Sezgin et al., Furosemide Horses (p. 19)
- Spivey et al., Pressing xT (p. 19-20)
- Stuart et al., T20 Cricket Leagues (p. 20)
- Zhang & Dong, Attention-Based Winning Patterns (p. 20-21)

Now I need to construct a coherent narrative. The user didn't ask a specific question beyond "DRIVE SOURCE" and the abstracts. Since this is a "Frontier Reasoning Foundry" task, I should treat the source as raw material and generate a rigorous analytical dossier. I need to invent/derive a central analytical question? Probably I should synthesize across abstracts. The sections suggest themes: causal inference, fairness/reward, weather effects, player evaluation, tracking data, time series/state-space, etc.

I should avoid betting lines entirely. No mention of odds/spreads/totals/moneylines. Note that the source itself mentions "public betting odds" in the furosemide paper (p. 19). I must NOT repeat that as a betting line? The invariant says "Never mention spreads, totals, moneylines, or odds." The source says "controlling for public betting odds". I can mention the variable exists in the source but perhaps avoid emphasizing it as a betting line? Better to paraphrase as "market-implied win probabilities" or just say "controlling for market-implied probabilities" to avoid the word "odds". Actually, the invariant says never mention odds. So I should not write "betting odds". I'll say "controlling for market-implied outcome probabilities" and cite [PAGE 19]. Or just say "controlling for pre-race market probabilities". I must be careful.

Also "zero toy equations": no Force/Fatigue. Use real LaTeX. I can derive:
- Score test connection from rMetrics: $S(\theta_0) = U(\theta_0)^T I(\theta_0)^{-1} U(\theta_0)$ under parametric assumptions.
- Residualized metrics: $\tilde{Y} = Y - \hat{\mu}(X;\hat{\theta})$, then player effect $\tau_i$ estimated via semiparametric model.
- CATE for tackling: $\tau(x) = E[Y(1) - Y(0) | X=x]$ with doubly robust objective.
- Win probability max: Brownian motion via Donsker, $M = \max_{0 \le t \le T} W_t$, distribution related to reflection principle.
- GARCH consistency: $\sigma_t^2 = \omega + \alpha r_{t-1}^2 + \beta \sigma_{t-1}^2$.
- Bayesian state-space team strength: $\theta_{t} = \theta_{t-1} + \epsilon_t$, $\epsilon_t \sim N(0, \sigma^2_{transfer,NIL})$.
- von Mises for turn angle: $f(\theta | \mu, \kappa) = \frac{e^{\kappa \cos(\theta - \mu)}}{2\pi I_0(\kappa)}$.
- GLMM for home runs: $Y_{gj} \sim Poisson(\lambda_{gj})$, $\log \lambda_{gj} = \dots$
- xPV: pitch control $PC(x,t)$ and pitch value $PV(x)$, pass value $\Delta PV$.
- Fairness incompatibility: calibration, separation, sufficiency cannot all hold (Kleinberg et al. 2016).
- Timeout ATE: $\hat{\tau} = 0.272$ points, CI.
- Furosemide: odds ratio 1.55 but I'll phrase as "55% increase in odds of finishing in the money" without saying "odds" maybe? The invariant says never mention odds. But the source says "odds of finishing in the money by 55%". I can say "increases the likelihood of finishing in the money by 55% on average" and cite [PAGE 19]. That avoids the word odds. Good.

I need to ensure >=1000 words across sections. Let's aim for roughly 200-250 words per section minimum, total >1000.

Structure:

<THINK_TRACE>: Multi-hop derivation. Connect rMetrics residualization -> semiparametric player effects -> xPV passing -> tracking data -> causal CATE tackling -> coverage prediction -> turn angle -> pass rush dynamic rating. Gray-zone audit: selection bias in aging curves, collinearity in RAPM, unmeasured confounding in timeout causal inference, behavioral deviation in penalty kicks, stationarity breakdown in GARCH, etc. Must be >=400 words.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX with units and page citations. Exact singularity/breakdown regimes. Include verbatim quotes with [PAGE N]. Example: "In roughly half of evenly matched games..." [PAGE 7]. "Optimization utility is estimated as 3.12 times as important..." [PAGE 8]. "ATE of 0.272 points (95% CI: 0.076 to 0.468...)" [PAGE 18]. "volatility constant = 65.9201" vs "0.00002" [PAGE 12]. "von Mises distribution" [PAGE 6]. etc.

<RETROCAUSAL_GENEALOGY>: Historical lineage: Neyman-Rubin causal model -> Rubin causal model -> Jenkins multi-agent transformer CATE; Kleinberg et al. 2016 fairness incompatibility -> Baumer/Susnea reward fairness; Donsker invariance principle -> Pipping blown leads; GARCH Engle/Bollerslev -> Davila NBA consistency; FPCA -> Awosoga aging curves; von Mises directional stats -> Nguyen/Yurko CoD. Multi-week traps: roster volatility (transfer portal/NIL) over weeks; aging curve selection bias; stabilization points requiring thousands of possessions (Gong p.15-16) meaning early-season RAPM is noise; penalty kick behavioral drift across a season; timeout efficacy variation across teams; home run park effects requiring 2010-2024 data (15 seasons) [PAGE 6-7].

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. Model coach/player as recursive agents. When a team is losing (crisis), coaches regress to habitual timeout calls (Niu p.18). Counter-trap: opponent anticipates timeout and adjusts. Clock: two-minute net point differential outcome window. Also penalty kick taker: game-theoretic optimum vs behavioral optics (Uribe p.7-8), recursion of defender anticipating shooter's risk aversion. Passing xPV: defender anticipates passer's decision (Harringer p.2-3). Coaching BOE: media overrates championship coaches, recursive inference about superstar vs coach (Faberman p.14).

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Wind in ultimate frisbee (Eberhard p.13-14) vetoes throw completion models; ball path curvature terminal vs max (Zhu p.9) vetoes early-motion coaching; skating speed/edge control (Chayka p.2) physical layer; digital health wearables multilevel functional time series (Matabuena p.4-5) fatigue; free throw biomechanics. Veto proof: if weather covariate not included, player contribution metrics are biased; if curvature not modeled, shooting proficiency misattributed.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or just "verifiable counterfactual vetoes". I'll define three scenarios where a proposed metric/policy would be vetoed by counterfactual evidence.
1. Timeout calling during 7-0 runs: veto scenario if ATE not robust to unmeasured confounding (lineup quality BPM measured with error). Prediction: under positivity violation (teams never call timeouts in certain score margins), IPTW weights explode; estimated ATE reverses sign.
2. rMetrics residualized player evaluation: veto if semiparametric player effect not identified due to collinearity (lineup fixed effects). Prediction: with high collinearity, residualized score variance inflated; player rankings unstable across split-half samples.
3. Wind in ultimate: veto if GAM excludes wind-speed interaction with distance. Prediction: completion probability for long throws biased upward in high-wind games; player efficiency rankings reorder by >10% when wind covariates added.

Need exact page citations throughout. Let's draft carefully with word counts.

I will aim for:
- THINK_TRACE: ~450 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~300 words
- RETROCAUSAL_GENEALOGY: ~300 words
- RECURSIVE_THEORY_OF_MIND: ~250 words
- CROSS_LAYER_VETO_ADJUDICATION: ~250 words
- RLVR_COUNTERFACTUAL_VETOES: ~250 words
Total ~1800 words. Good.

Need to ensure no toy equations. All equations must be formal. I'll cite page numbers where the concept appears.

Let's write.

Important: The invariant says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I must include quotes and [PAGE N]. I'll include several verbatim quotes.

Also "STRICT INVARIANTS: 1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." I will not use those words. If referring to furosemide paper, I'll say "increases the likelihood of finishing in the money by 55% on average" [PAGE 19], avoiding "odds". Actually the source says "odds of finishing in the money by 55%". I'll paraphrase carefully: "increases a two-year-old’s likelihood of finishing in the money by 55% on average" and not use the word odds. Or "increases the probability...". The source says odds ratio 1.55 but I can say "likelihood". To be safe, I will not write "odds" anywhere.

Also "ZERO TOY EQUATIONS": I will not invent Force/Fatigue. All equations real.

Let's compose.

Draft THINK_TRACE:

Start with rMetrics: actual vs expected outcome, score test statistic under parametric models, residualized extension for ML uncertainty. Equation: $U(\theta_0)$, Fisher info. Then xPV extends to passing with pitch control and pitch value models. CATE tackling by Jenkins uses potential outcomes framework: $Y_i(1), Y_i(0)$ at frame level. Coverage classification by Michels uses XGBoost + HMM entropy. Turn angle von Mises by Nguyen/Yurko. Blown leads by Pipping: Brownian motion maxima via Donsker. Gray zones: selection bias in aging curves (Cavan et al. 2025 extension), collinearity in RAPM stabilization, unmeasured confounding in timeouts (lineup quality measured by BPM has error), behavioral deviation in penalty kicks (risk aversion), nonstationarity in GARCH volatility constants (Haliburton 65.9201 vs Eubanks 0.00002). Multi-hop: tracking data granularity (AHL 85k-105k puck positions, 800k-1M player positions) enables frame-level causal inference but introduces high-dimensional confounding; balancing via MMD/adversarial techniques. Breakdown regimes: parametric assumption violation in rMetrics invalidates score test; positivity violation in IPTW timeouts; collinearity near singularity in RAPM.

Need word count. Let's write around 450 words.

SOURCE_OPERATORS_AND_EQUATIONS: Formal block. Include quotes:
[PAGE 1]: "when using parametric models to estimate the expected outcome, these metrics are directly related to score test statistics."
[PAGE 7]: "In roughly half of evenly matched games, the team that ends up losing is, at some stage, a heavy favorite to win."
[PAGE 8]: "Optimization utility is estimated as 3.12 times as important on margin as behavioral utility..."
[PAGE 12]: "Tyrese Haliburton ... (volatility constant = 65.9201), while ... Drew Eubanks ... (volatility constant = 0.00002)"
[PAGE 6]: "we consider a von Mises distribution for the frame-level turn angle"
[PAGE 18]: "ATE of 0.272 points (95% CI: 0.076 to 0.468, p = 0.007)"

Equations:
- Score test: $S(\theta_0) = U(\theta_0)^\top \mathcal{I}(\theta_0)^{-1} U(\theta_0) \overset{d}{\to} \chi^2_q$
- Residualized outcome: $\tilde{Y}_i = Y_i - \hat{\mu}(X_i; \hat{\theta})$, player effect $\tau_i$ in $Y_{it} = X_{it}\beta + \tau_i + \varepsilon_{it}$
- CATE: $\tau(x) = E[Y(1)-Y(0)\mid X=x]$, doubly robust $\hat{\tau}_{DR} = \frac{1}{n}\sum [ \frac{T_i Y_i}{\hat{e}(X_i)} - \frac{(1-T_i)Y_i}{1-\hat{e}(X_i)} - (\frac{T_i}{\hat{e}(X_i)} - \frac{1-T_i}{1-\hat{e}(X_i)})\hat{\mu}(X_i) ]$
- Win prob max: $M_T = \max_{0\le t\le T} W_t$, reflected Brownian, $\Pr(M_T \ge m) = 2(1-\Phi(m/\sqrt{T}))$
- GARCH: $\sigma_t^2 = \omega + \alpha r_{t-1}^2 + \beta \sigma_{t-1}^2$
- von Mises: $f(\theta;\mu,\kappa) = \frac{\exp\{\kappa\cos(\theta-\mu)\}}{2\pi I_0(\kappa)}$
- GLMM home runs: $Y_{gj}\sim Poisson(\lambda_{gj}), \log \lambda_{gj} = \beta_0 + b_{park} + b_{batter} + b_{pitcher}$
- State-space: $\theta_t = \theta_{t-1} + \eta_t, \eta_t \sim N(0, \sigma^2(\text{transfers}, \text{NIL}))$

Units: points (NBA), probability [0,1], radians (turn angle), counts (home runs), seconds/frames, xPV in expected goals or expected threat dimensionless. Breakdown: score test invalid under misspecification; DR estimator requires positivity $0<e(x)<1$; RAPM singular when collinearity matrix near singular; GARCH requires covariance stationarity $\alpha+\beta<1$.

RETROCAUSAL_GENEALOGY: Lineage from Neyman-Rubin, Rubin CATE, Kleinberg fairness 2016, Donsker 1951, Engle GARCH 1982, FPCA. Multi-week traps: NIL/transfer portal week-to-week volatility (Yurko & Benz p.8), early season RAPM instability before stabilization (Gong p.15), penalty kick behavioral drift across tournament (Uribe p.7-8), home run park rankings need 15 seasons (Osborne p.6), fatigue accumulation across matches (Matabuena p.4).

RECURSIVE_THEORY_OF_MIND: Crisis habit regression: coach calls timeout out of habit after 7-0 run (Niu p.18). Counter-trap: opposing offense anticipates timeout and changes play. Clock: outcome measured over next two minutes net point differential. Penalty kick shooter recurses against goalkeeper's expectation of risk aversion; shooter values optics (Uribe p.7-8). xPV passer vs defender anticipatory positioning (Harringer p.2-3; Jenkins p.4). BOE coach: media overrates championship coaches because recursive attribution error superstar vs system (Faberman p.14).

CROSS_LAYER_VETO_ADJUDICATION: Physical layer: skating acceleration/top speed/edge control (Chayka p.2) determines zone entry; if not modeled, defensive style conclusions invalid. Biomechanical: terminal curvature more predictive than max curvature (Zhu p.9) vetoes coaching focus on early forward motion. Weather: wind shifts throw selection to shorter throws, completion probability decays with distance (Eberhard p.13-14) vetoes context-free player evaluation. Physiological: wearable multilevel functional time series (Matabuena p.4-5) fatigue; VO2 max prediction. Veto proof: any metric omitting these layers is not invariant to environmental/biomechanical state.

RLVR_COUNTERFACTUAL_VETOES: Three scenarios.
1. Timeout IPTW: If unmeasured confounding (e.g., player fatigue not captured by BPM) violates ignorability, veto. Prediction: estimated ATE 0.272 points attenuates to zero or reverses when fatigue proxy included.
2. rMetrics/ranking: If collinearity in lineup design matrix approaches singularity, veto residualized player effect. Prediction: split-half correlation of EPM/RAPM drops below 0.4 for lineups with >70% repeated co-occurrence.
3. Ultimate wind: If GAM omits wind-speed × throw-distance interaction, veto completion model. Prediction: high-wind long-throw completion overestimated by >5 percentage points; player efficiency rankings reshuffle by >5%.

Need word counts. Let's write carefully.

I'll now produce final answer. Ensure XML tags exactly. No markdown outside? User asked for XML sections. I'll output just the XML sections.

Let's draft with attention to word count and formatting.

Word count estimation: I'll write generously.

Check for any banned words: spread, total, moneyline, odds. I will avoid "odds". I might say "probability" or "likelihood". Good.

Let's write.
</NATIVE_REASONING>

<THINK_TRACE>
The abstract set permits a multi-hop derivation that begins with inferential foundations and ends at frame-level causal adjudication. Bajons and Kook’s rMetrics framework [PAGE 1] establishes that when expected outcomes are estimated parametrically, player-evaluation residuals are directly related to score test statistics, written formally as $S(\theta_0)=U(\theta_0)^{\top}\mathcal{I}(\theta_0)^{-1}U(\theta_0)\overset{d}{\to}\chi^2_q$. This is significant because it bridges flexible prediction with valid uncertainty quantification: raw residuals $\tilde{Y}_i=Y_i-\hat{\mu}(X_i;\hat{\theta})$ can be embedded in semiparametric player-effect models $Y_{it}=X_{it}\beta+\tau_i+\varepsilon_{it}$, where $\tau_i$ is the player-specific causal contribution. Harringer and Bajons extend this logic to soccer passing via expected pass value [PAGE 2-3], decomposing pass value into a pitch-control likelihood $PC(x,t)$ and a pitch-value surface $PV(x)$, such that each pass carries a counterfactual value increment $\Delta PV$. Jenkins then pushes to frame-level American football defense [PAGE 4], defining tackling as a binary treatment with Expected Points Added as outcome and estimating Conditional Average Treatment Effects $\tau(x)=E[Y(1)-Y(0)\mid X=x]$ using multi-agent Transformers, MMD balancing, and doubly robust objectives.

Gray-zone audits emerge at every hop. First, rMetrics’ validity collapses under parametric misspecification: if the conditional mean model is wrong, the score-test linkage fails and residualized uncertainty intervals are not calibrated. Second, Jenkins’ CATE requires positivity, $0<e(x)<1$ for the defender-level propensity $e(x)$; in sparse tracking regions (e.g., rare blitz alignments) the doubly robust objective becomes unstable. Third, Michels et al. [PAGE 5] predict man/zone coverage using XGBoost plus hidden Markov model entropy, yet pre-snap motion features can introduce post-treatment bias if motion itself is strategically chosen in response to coverage. Fourth, Gong’s RAPM stabilization analysis [PAGE 15-16] shows identifiability decays with lineup collinearity and noise-to-talent variance; early-season plus-minus estimates lie near a singularity regime where thousands of possessions are required for reliability. Fifth, Niu et al.’s timeout causal study [PAGE 18] estimates an ATE of 0.272 points over a two-minute window, but inverse probability weighting depends on measured lineup quality via Box Plus-Minus, which is itself an estimated, error-prone covariate; unmeasured fatigue or substitution patterns violate ignorability.

Further traps include Pipping et al.’s blown-lead paradox [PAGE 7]: win-probability paths are anchored by observed outcomes, so post-hoc maxima of losing teams are outcome-conditioned and biased unless recast as Brownian motions via Donsker’s invariance principle. Uribe et al. [PAGE 7-8] document behavioral deviation in penalty kicks: optimization utility is estimated as 3.12 times behavioral utility, yet takers remain risk-averse, valuing on-target conversion over pure goal maximization. Davila’s GARCH consistency metrics [PAGE 12] reveal extreme heterogeneity—Haliburton’s volatility constant 65.9201 versus Eubanks’ 0.00002—implying that season-level consistency rankings are nonstationary and sensitive to variance recursions $\sigma_t^2=\omega+\alpha r_{t-1}^2+\beta\sigma_{t-1}^2$ only when $\alpha+\beta<1$. These dependencies imply that any player-evaluation pipeline that ignores residual structure, collinearity, environmental state, or behavioral risk aversion produces rankings that are not invariant across game states.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and exact page citations:

rMetrics score-test linkage [PAGE 1]: “when using parametric models to estimate the expected outcome, these metrics are directly related to score test statistics.” Let $\theta\in\mathbb{R}^p$, score vector $U(\theta_0)=\nabla_{\theta}\ell(\theta_0)$, Fisher information $\mathcal{I}(\theta_0)=-E[\nabla^2_{\theta}\ell(\theta_0)]$. Statistic $S(\theta_0)=U(\theta_0)^{\top}\mathcal{I}(\theta_0)^{-1}U(\theta_0)$ is asymptotically $\chi^2_q$ with units of dimensionless deviance. Breakdown: misspecified $\mu(X;\theta)$ invalidates the pivot; residualized ML extension requires cross-fitting or sample splitting to avoid overfitting bias in $\tilde{Y}_i=Y_i-\hat{\mu}(X_i;\hat{\theta})$.

Blown leads [PAGE 7]: “In roughly half of evenly matched games, the team that ends up losing is, at some stage, a heavy favorite to win.” Win-probability paths $\{W_t\}_{t\in[0,T]}$ are recast via Donsker’s invariance principle as scaled Brownian motions. Maximum attained by eventual loser: $M_T=\max_{0\le t\le T}W_t$. Reflection principle gives $\Pr(M_T\ge m)=2\{1-\Phi(m/\sqrt{T})\}$ for standardized bridge; units are probability mass on $[0,1]$. Singularity: as relative team strength $\to 0$, the distribution degenerates and the “paradox” probability approaches $1/2$.

Penalty kick behavioral utility [PAGE 8]: “Optimization utility is estimated as 3.12 times as important on margin as behavioral utility from estimated indifference sets.” Model: hybrid objective $U_{shot}=3.12\cdot U_{opt}+1\cdot U_{beh}$ over goal-area partition; estimated explanatory share $\approx 85.2\%$ of shot-location variance. Risk aversion enters as concave partition-dependent shot-volume in conversion-rate. Breakdown: if the indifference-set geometry is nonconvex, the 3.12 margin weight is not identified.

Turn angles [PAGE 6]: “we consider a von Mises distribution for the frame-level turn angle.” Density $f(\theta;\mu,\kappa)=\frac{\exp\{\kappa\cos(\theta-\mu)\}}{2\pi I_0(\kappa)}$, $\theta$ in radians, concentration $\kappa\ge0$. Player random effects enter $\kappa_{ij}=g(Z_{ij}\gamma+b_j)$ for ball carrier $i$ nested in position $j$. Breakdown: $\kappa\to0$ yields uniform turning (no directional persistence); $\kappa\to\infty$ collapses to deterministic angle, losing variability information needed to identify “shifty” carriers.

Home-run park GLMM [PAGE 6-7]: “The Poisson distribution provides a good fit to counts observed in the 2010 to 2024 seasons, involving more than 2.5 million plate appearances.” Unit: counts per game-matchup. Model $\log\lambda_{gj}=\beta_0+b^{park}_g+b^{batter}_{b}+b^{pitcher}_{p}+\beta^\top H_{gj}$, $H$ handedness matchup. Personnel effects use “elsewhere” measures from other parks to avoid endogeneity. Breakdown: rare park-handedness cells produce infinite standard errors for log-intensity ratios; adjusted means require positive exposure in all cells.

Timeout causal effect [PAGE 18]: “ATE of 0.272 points (95% CI: 0.076 to 0.468, p = 0.007) and ATT of 0.310 points (95% CI: 0.115 to 0.505, p = 0.002).” Units: net point differential over the two minutes following a 7-point run. Estimand $\tau=E[Y(1)-Y(0)\mid T=1]$ via propensity-score IPTW. Breakdown: positivity violation if certain score margins never receive timeouts; weights $w_i=T_i/\hat e(X_i)+(1-T_i)/\{1-\hat e(X_i)\}$ explode as $\hat e(X_i)\to\{0,1\}$.

NBA consistency GARCH [PAGE 12]: “Tyrese Haliburton ... (volatility constant = 65.9201), while ... Drew Eubanks ... (volatility constant = 0.00002).” Units: squared points per game. Recursion $\sigma_t^2=\omega+\alpha r_{t-1}^2+\beta\sigma_{t-1}^2$ with stationarity condition $\alpha+\beta<1$. Breakdown: if $\alpha+\beta\ge1$, variance is explosive and consistency rankings are not comparable across seasons.

Tracking data granularity [PAGE 2]: “Each game contains approximately 85,000–105,000 puck positions and 800,000–1,000,000 player positions.” Units: spatial observations per game at $\sim$10–25 Hz. Enables defensive-style xGA estimation at 5v5 and 5v4, and offensive zone-entry success as function of acceleration, top-end speed, edge control. Breakdown: alignment error between tracking frames and event timestamps induces measurement error in causal skating attributes.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage traces from the Neyman–Rubin potential-outcomes framework through Rubin’s causal model to Jenkins’ frame-level CATE for tackling [PAGE 4], where the treatment is a defender-level tackle decision and the outcome is Expected Points Added. The multi-agent Transformer architecture inherits sequential confounding control from structural time-series causal inference and representation balancing from domain-adversarial neural networks. Baumer and Susnea’s fairness analysis [PAGE 1] descends from Kleinberg et al. (2016)’s incompatibility theorem: calibration, separation, and sufficiency cannot jointly hold except in trivial cases; applied to sports reward systems, this implies no points, dollars, or playing-time allocation can satisfy all stakeholder fairness notions simultaneously.

Pipping et al.’s blown-lead theory [PAGE 7] connects Donsker’s 1951 invariance principle to modern win-probability graphics, showing that calibrated paths are Brownian bridges anchored at 0 and 1 by the observed outcome. The historical trap is retrospective: analysts condition on the final result and then describe the loser’s maximum win probability as if it were an ex ante anomaly, when under exchangeability roughly half of evenly matched contests produce a loser-side peak above 66.7%. This recurs week-to-week in broadcast narratives of “blown leads” and “comebacks.”

Davila’s GARCH consistency work [PAGE 12] inherits from Engle (1982) and Bollerslev (1986), but the sports application introduces a multi-week trap: volatility constants estimated over one NBA season are not portable because player roles, minutes, and usage shift under coaching crises and injuries. Gong’s RAPM stabilization [PAGE 15-16] extends Collins’ reliability theory to adjusted plus-minus, revealing that high-variance outcomes require thousands of possessions; a trap exists for analysts who interpret early-season RAPM differences as talent differences when the design matrix is nearly singular due to repeated lineups.

Yurko and Benz’s college-volatility state-space model [PAGE 8] models between-season innovation variance as a function of transfers and NIL rule changes, creating a multi-week trap in roster construction: teams embracing transfer-portal volatility (e.g., Colorado under Deion Sanders) exhibit systematically different team-strength variance than reluctant programs (e.g., Iowa, Clemson), so preseason strength priors must be inflated by transfer influx. Osborne and Levine’s park-effect GLMM [PAGE 6-7] requires 15 seasons (2010–2024) and over 2.5 million plate appearances to separate ballpark from personnel effects; a short-window analysis confuses park friendliness with roster composition.

Uribe et al.’s penalty-kick behavioral study [PAGE 7-8] links game-theoretic shot-location optimization to prospect-theoretic risk aversion: the 3.12 margin weight implies takers recursively anticipate goalkeeper positioning while overweighting the avoidance of missing entirely. Across a tournament, this creates a drift trap where observed shot volumes move away from the Nash equilibrium partition as optical concerns accumulate. Finally, Matabuena’s digital-health functional models [PAGE 4-5] descend from functional data analysis and multilevel mixed models, with the trap that irregular, sparse wearable sampling across days and sessions induces informative missingness correlated with fatigue and competition load.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Model the coach as a recursive agent operating under crisis-habit regression. Niu et al. [PAGE 18] find that calling a timeout during an opponent’s 7-0 run produces a small but significant ATE of 0.272 points over the next two minutes, with team-level heterogeneity. The crisis habit is the reflexive timeout call to “stop the run.” The counter-trap is the opposing offense’s recursive anticipation: if the offense expects a timeout, it may alter substitution, tempo, or play design during the stoppage, converting the coach’s intervention into a predictable set piece that the offense can exploit. The clock is the fixed two-minute net point differential window; the estimated effect is short-horizon momentum disruption rather than durable scoring improvement, consistent with the authors’ conclusion that the primary benefit is interrupting the run.

A second recursive loop appears in penalty-taking [PAGE 7-8]. The shooter models the goalkeeper as anticipating a performance-optimal placement; the goalkeeper models the shooter as risk-averse and likely to avoid missing the target entirely. The shooter’s estimated hybrid utility—optimization weighted 3.12 times behavioral—means the shooter recursively second-guesses the goalkeeper’s expectation of risk aversion, producing shot volumes that deviate from the classical non-negative volume–conversion relationship into a strong negative empirical relationship. The clock here is the single kick: no sequential adjustment, so the recursion collapses into one-shot Bayesian persuasion over partition choice.

In passing evaluation [PAGE 2-3], xPV makes passers and defenders recursive opponents: the passer values expected threat of a pass; the defender anticipates the pass location via pitch control and adjusts velocity and angular mismatch. Harringer et al. show that comparing actual xPV to alternative passing options quantifies offensive decision-making, while defenders are evaluated by prevented xPt. The counter-trap is that a defender who successfully denies high-xPV lanes forces the passer into lower-value options, making the passer’s observed xPV low not because of poor decision-making but because of defensive recursion.

Faberman’s BOE coaching metric [PAGE 14] exposes a third recursion: media rankings overrate championship-winning coaches because they underrate superstar effects (LeBron James, Stephen Curry). The recursive theory of mind is that observers attribute team outcomes to the coach, while the coach’s true contribution is the residual of player performance relative to age-adjusted expectation. The counter-trap is that a coach inheriting a superstar may appear brilliant under BOE simply because the superstar’s aging curve is flatter than average; the clock is the season-length win-total horizon, where small differences determine playoff seeding.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: Chayka et al. [PAGE 2] use AHL tracking data (85k–105k puck positions, 800k–1M player positions per game) to show that skating acceleration, top-end speed, and edge control determine offensive-zone entry success and clean entries. Veto: any defensive-impact metric that omits skating-style covariates cannot separate aggressive pressure from passive containment; shot suppression and xGA differences at 5v5 versus 5v4 are confounded by unmeasured skating quality.

Biomechanical layer: Zhu et al. [PAGE 9] fit Bezier curves to NBA free-throw ball tracking and find that terminal curvature—not max curvature—explains most between-player variance. Veto: coaching interventions targeting “smoothness at the beginning of forward motion” are biomechanically mis-specified; shooting-proficiency models that use only release angle or initial velocity without terminal curvature omit the dominant physical predictor and will misattribute performance to the wrong motion phase.

Weather layer: Eberhard and Miller [PAGE 13-14] integrate UFA play-by-play with weather records and show that higher wind speed shifts throw selection away from medium-distance attempts toward shorter throws while long-throw frequency stays roughly constant; completion probability decays with distance under wind. Veto: any ultimate-frisbee player-efficiency model lacking wind-speed $\times$ throw-distance interaction terms is not invariant across weather regimes and will overvalue long-throw attempts in calm games while undervaluing short-throw consistency in wind.

Physiological layer: Matabuena [PAGE 4-5] models wearable physiological time series as functional multilevel data with different sampling frequencies, applied to VO2 max prediction and fatigue monitoring. Veto: player-load metrics that aggregate raw accelerometer counts without functional alignment and multilevel random effects conflate within-athlete day-to-day variation with between-athlete capacity, producing biased readiness signals during competition periods.

Veto proof: Because each layer operates on distinct units—radians per frame (turn angle), expected-goals value (xPV/T), points per two minutes (timeout ATE), wind speed m/s (ultimate), oxygen ml/kg/min (VO2 max)—a metric that passes at one layer fails at another unless cross-layer adjustments are explicit. For instance, Jenkins’ frame-level defensive CATE [PAGE 4] must condition on the physical skating layer [PAGE 2] because a defender’s frame position is a function of acceleration and edge control; omitting this produces a biased treatment effect for tackling. Similarly, Michels’ coverage classifier [PAGE 5] must condition on pre-snap motion entropy because motion is chosen after the coverage is set; ignoring the temporal order makes the HMM state sequences post-treatment and invalidates coverage-probability comparisons.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Timeout IPTW positivity collapse. The estimated ATE of 0.272 points [PAGE 18] relies on inverse-probability weights with measured confounders including BPM-based lineup quality. Verifiable veto: if, in held-out seasons, certain score-margin-by-quarter cells have zero timeouts (positivity $e(x)=0$), the stabilized weights become infinite and the DR objective is undefined. Prediction: under a simulated positivity violation where timeouts are withheld when trailing by >12 points in the 4th quarter, the estimated ATE attenuates from 0.272 to within $[-0.05, 0.05]$ points and the 95% CI covers zero, indicating the original effect was driven by extrapolation.

Scenario 2: rMetrics residualized ranking under collinearity. Bajons and Kook’s residualized player effects [PAGE 1] require valid score-test inference under parametric assumptions; Gong [PAGE 15-16] shows RAPM-type estimators are unstable when lineups exhibit high collinearity. Verifiable veto: if the split-half correlation of EPM/RAPM for a player falls below 0.4 because the player co-occurs with the same teammates in >70% of possessions, the player-specific effect $\tau_i$ is not identifiable. Prediction: for NBA bench players with repeated lineup bundles, the residualized ranking reshuffles by more than 50 percentile positions between odd- and even-game splits, whereas star players with varied lineups remain within 10 percentiles.

Scenario 3: Ultimate frisbee wind omitted-variable bias. Eberhard and Miller [PAGE 13-14] show wind alters throw selection and completion probability nonlinearly with distance. Verifiable veto: if a GAM for throw completion omits the wind-speed $\times$ distance interaction, the model is misspecified under high-wind conditions. Prediction: in games with mean wind speed above the 75th percentile, the omitted-interaction model overestimates long-throw (>35m) completion probability by at least 5 percentage points; consequently, player efficiency rankings reorder such that at least 15% of high-volume long-throw specialists drop below short-throw possession players once wind covariates are included.
</RLVR_COUNTERFACTUAL_VETOES>