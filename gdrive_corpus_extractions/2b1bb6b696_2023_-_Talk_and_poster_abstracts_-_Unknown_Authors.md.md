---
source: "2023 - Talk and poster abstracts - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/New England Symposium on Statistics in Sports/2023"
pages: 19
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 6875
---

<NATIVE_REASONING>
The user wants me to analyze a source document (NESSIS 2023 abstracts) and produce a response following very strict formatting invariants:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. Must state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

The source text is 19 pages of abstracts from NESSIS 2023. I need to mine this for substantive analytical content and build a rigorous reasoning trace. Since there are no "betting lines" in the source, I must avoid inventing any. I must focus on the statistical/methodological content of the abstracts.

Key abstracts to leverage:
- Carl Morris contributions (Bayesian multiparameter inference) - page 1
- STRAIN: Defensive pass rush, player tracking, continuous-time within-play level, distance between rusher and QB and rate of reduction - page 1
- Visualizations - page 1
- Weighted curve clustering for pass rush routes - page 2
- Fourth down decision making: EP, WP, selection bias, overfitting, autocorrelation, catalytic prior, bootstrapping - page 2
- NFL Ghosts: pass defense, YAC, conditional density estimation, "ghosts" - page 3
- Yellow fever: referee consistency, Conway-Maxwell-Poisson copula, yellow cards - page 3
- Home field advantage soccer: causal inference, hierarchical causal model, EPL 2020-21 - page 4
- Contextualized Generative Ghosting Model: VRNN, CNNs, space-control heatmaps - page 4
- Women's college volleyball: Markov chain, multinomial regression, random effects - page 5
- Bayesian two-stage framework for NBA rebounding - page 6
- MLB plate discipline: BART, three-step framework, run expectancy - page 6
- Darts handicap: MDP, dynamic credits - page 7
- Knee movement patterns: multilevel functional regression, intra-class correlation - page 7
- Olympic medal projections: ensemble learning, Monte Carlo, Brier scores - page 8
- Shot Selection Efficiency: basketball, correlation between volume and expected points - page 9
- Bayesian golf performance: strokes gained, population priors - page 9
- Whiff rate: GWR, spatial heterogeneity - page 9
- Defensive spin moves: gradient boosting, NFL Big Data Bowl - page 10
- Competing risks MLB draft - page 11
- Home advantage American football: STAN, Bayesian linear regression, ELPD LOO - page 11
- Blocking is a Drag: HMM, fluid dynamics, hierarchical Bayesian linear model - page 12
- QB outcomes: XGBoost, graph neural network, CPOE - page 12
- Devon Allen disqualification: GLMM, reaction time 0.1s threshold - page 13
- Off-the-ball runs soccer/NFL route running: nearest neighbors, fingerprints - page 13
- Causal effect of legalized sports betting on fan aggression: DiD - page 14
- Predicting prospect projection hockey: point shares, NHLe, Wilson Method - page 14
- Regularized ordinal regression college football: complementary units, elastic penalty - page 15
- Deep Possession soccer: ball acceleration, touches - page 16
- Age-conditioned average treatment effects: load management, ACTE - page 16
- Downhill races Boston Marathon: net drop, qualifying times - page 17
- Judges' scores bias: order bias, difficulty bias, median score - page 17
- Attacking tendencies setter rotation volleyball - page 18

I need to construct a deep multi-hop derivation. Let's think about what "multi-hop" means here: connecting concepts across abstracts. For example:
- Carl Morris's Bayesian shrinkage -> Bayesian two-stage NBA rebounding -> Bayesian golf performance -> hierarchical causal model for home advantage -> STAN/ELPD LOO model comparison -> Conway-Maxwell-Poisson copula for referee counts.
- Player tracking: STRAIN continuous-time -> weighted curve clustering B´ezier -> spin moves gradient boosting -> blocking fluid dynamics/HMM -> QB XGBoost -> Deep Possession ball acceleration -> ghosting VRNN/CNN -> NFL Ghosts CDE.
- Causal inference: home field advantage soccer -> legalized sports betting DiD -> load management ACTE -> competing risks MLB draft -> ordinal regression college football.

Units: pages are cited as [PAGE N]. Since the provided markdown has page numbers embedded (1, 2, ... 19), I can cite those. The source text shows page breaks. I need to cite exact [PAGE N] markers and verbatim quotes.

I must avoid toy equations. So I should write real equations like:
- STRAIN as function: $S(t) = f(d(t), \dot{d}(t))$ where $d(t)$ is distance in meters, $\dot{d}(t)$ in m/s.
- EP/WP: $EP(s) = \mathbb{E}[Points | state s]$, $WP(s) = \mathbb{P}(Win | state s)$.
- Conway-Maxwell-Poisson: $P(Y=y | \lambda, \nu) = \frac{\lambda^y}{(y!)^\nu Z(\lambda, \nu)}$.
- GLMM for reaction time: $g(\mathbb{E}[Y_{ij}]) = X\beta + u_j$, $u_j \sim N(0, \sigma^2_u)$.
- Markov chain volleyball: state space $\mathcal{S}$, transition $P(s_{t+1} | s_t, a_t, \theta)$.
- B´ezier preprocessing: $B(t) = \sum_{i=0}^n \binom{n}{i}(1-t)^{n-i}t^i P_i$.
- MDP for darts: $(S, A, P, R, \gamma)$.
- Causal DiD: $Y_{it} = \alpha + \delta Treat_i \times Post_t + \lambda_i + \theta_t + \epsilon_{it}$.
- ACTE: $\tau(a) = \mathbb{E}[Y(1) - Y(0) | Age=a]$.
- Hierarchical causal model HFA: potential outcomes $Y_i(1), Y_i(0)$.

Breakdown regimes: small counts underdispersion (CMP), autocorrelation inflating WP standard errors, skill gap too large for darts head-start infeasibility, reaction time threshold singularity at 0.1s, net drop threshold 3000 feet, proportional odds assumption relaxation.

Word count: >=1000 words total across sections, THINK_TRACE >=400 words.

Let's draft carefully.

Structure:
<THINK_TRACE>
- Multi-hop derivation: Connect Morris Bayesian epistemology to modern player tracking and causal inference.
- Gray-zone audit: Where abstracts overclaim (stability over time, predictability), identifiability limits (ghost defenders, attribution), selection bias in EP/WP, autocorrelation.
- No betting lines.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
- List each abstract with page, formal operators, equations, units, assumptions, breakdown.
- Cite verbatim quotes with [PAGE N].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
- Lineage: Carl Morris (Empirical Bayes, James-Stein) -> modern shrinkage in sports (rebounding, golf, EP/WP).
- Materials science strain rate -> STRAIN -> fluid dynamics blocking -> pass rush routes.
- Ghosting: NFL Ghosts CDE -> Contextualized Generative Ghosting VRNN -> Deep Possession.
- Multi-week traps: week-to-week correlation stability claims (spin moves, STRAIN) vs autocorrelation/overfitting warnings (Brill & Wyner).
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
- Crisis habit regression: coaches reverting to conservative fourth-down despite analytics; referees under scrutiny (yellow cards); load management age curves.
- Counter-trap: uncertainty quantification bootstrapping fourth down makes fewer decisions obvious; causal HFA shows offensive not defensive/referee.
- Clock: reaction time 0.1s threshold singularity (Devon Allen), downhill marathon net drop 3000ft, darts skill gap infeasibility.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
- Physical/biomechanical: knee movement multilevel functional regression, ICC reliability, HIIT vs MICR, gender differences.
- Weather: downhill races Boston Marathon net drop, elevation.
- Veto proof: small counts underdispersion CMP, spatial heterogeneity whiff rate GWR vs global parametric confounding.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
- 3 verifiable scenarios + predictions.
</RLVR_COUNTERFACTUAL_VETOES>

I need to ensure >=1000 words. Let's aim for ~1500-1800 words total.

Important: No mention of spreads, totals, moneylines, odds. The word "odds" might appear in source (expected points, win probability). I should avoid using "odds" in a betting sense. "Win probability" is fine as it's a statistical model output, not a betting line. I must not mention betting odds.

Let's write.

Page citations: I need to map abstracts to pages based on the provided text. The text shows page numbers at bottom: 1, 2, 3... up to 18 visible, but prompt says PAGES: 19. I'll cite pages as they appear in the text.

Verbatim quotes:
- [PAGE 1] "It is a directly-observed statistic as a function of two features: the distance between the pass rusher and QB, and the rate at which this distance is being reduced." (STRAIN)
- [PAGE 2] "selection bias, overfitting, ignoring autocorrelation, and ignoring uncertainty quantification." (Brill & Wyner)
- [PAGE 3] "bivariate Conway-Maxwell-Poisson copula model" (Philipson)
- [PAGE 4] "home field advantage resides more heavily in offensive statistics than it does in defensive or referee statistics." (Hu)
- [PAGE 5] "We estimate the probability of each team winning the point, which changes on each contact." (Powers et al.)
- [PAGE 6] "B´ezier curves" (Bajons & Hornik) actually on page 2. Let's check: Weighted Curve Clustering is page 2. Blocking is Drag page 12. Devon Allen page 13. etc.

I need to be careful with page numbers. Let's reconstruct page mapping from the source text:

Page 1: Contributions of Carl Morris; Here Comes the STRAIN; When Data Meets Reality; A Weighted Curve Clustering Approach (starts page 2? Actually the text shows "2" after Visualizations abstract, then Weighted Curve Clustering starts. Let's look: The text has page number "1" after Visualizations? Actually:

- Oral Presentation Abstracts start.
- Carl Morris abstract.
- STRAIN abstract.
- When Data Meets Reality... then "1" appears. So page 1 contains Morris, STRAIN, Visualizations.
- Then "A Weighted Curve Clustering Approach" starts after page 1 marker? Actually the text shows:
```
### _†_ E-mail: _ztchen@seas.harvard.edu_ 

Augmented sports videos... 

1 

## **A Weighted Curve Clustering Approach...
```
So page 1 ends after Visualizations. Page 2 starts with Weighted Curve Clustering.
- Page 2: Weighted Curve Clustering; Analytics have some humility (starts page 2, continues to page 3? "2" appears after EP/WP intro). Actually:
```
## **Analytics, have some humility...
Expected points (EP) and win probability (WP) are value functions...
2 
```
So page 2 has Weighted Curve Clustering and start of Analytics. Page 3 has rest of Analytics and NFL Ghosts? Let's see:
```
...fourth down decision itself. We find that decision making changes substantially...
3 
## **NFL Ghosts...
```
Wait the text shows "2" after the EP/WP intro paragraph, then continues "are widely used today..." then "3" before NFL Ghosts? Actually looking closely:

```
## **Analytics, have some humility: a statistical view of fourth down decision making**

Ryan Brill and Abraham Wyner, University of Pennsylvania 


Expected points (EP) and win probability (WP) are value functions fundamental to strategic ingame decision making and player evaluation in American football. The EP and WP functions which 

2 
```
So page break after "which". Then page 2 continues? Actually the "2" is likely the page number at bottom of page 1 or top of page 2. In the markdown, page numbers appear as standalone lines. Let's assume:
- Page 1: Morris, STRAIN, Visualizations.
- Page 2: Weighted Curve Clustering, Analytics (start).
- Page 3: Analytics (continuation), NFL Ghosts.
- Page 4: Yellow fever, Home field advantage soccer, Contextualized Generative Ghosting (start).
- Page 5: Ghosting (continuation), Estimating individual contributions volleyball.
- Page 6: Volleyball (continuation?), Bayesian two-stage NBA rebounding, Evaluating plate discipline MLB.
- Page 7: Plate discipline (continuation?), Darts, Knee movement patterns.
- Page 8: Knee movement (continuation?), Improving Medal Projections.
- Page 9: Medal projections (continuation?), Poster: Shot Selection Efficiency, Bayesian Golf, Assessing Spatial Heterogeneity Whiff Rate.
- Page 10: Whiff Rate (continuation?), Quantifying Defensive Spin Moves.
- Page 11: Spin Moves (continuation?), Competing Risks MLB Draft, Comprehensive Survey Home Advantage American football (start).
- Page 12: Home Advantage (continuation), Blocking is a Drag, Evaluating outcomes passing plays QB (start).
- Page 13: QB (continuation), On Devon Allen's Disqualification, Leveraging PFF Data soccer/NFL (start).
- Page 14: PFF Data (continuation), Causal Effect Legalized Sports Betting, Predicting Prospect Projection Hockey.
- Page 15: Hockey (continuation?), Regularized Ordinal Regression College Football.
- Page 16: Ordinal Regression (continuation?), Deep Possession Soccer, Age-Conditioned Average Treatment Effects.
- Page 17: Age-Conditioned (continuation?), Effect of Downhill Races Boston Marathon, Using discrepancy judges scores.
- Page 18: Judges scores (continuation?), Attacking Tendencies Setter Rotation Volleyball.

The prompt says PAGES: 19 but text shows up to 18. I'll cite pages as they appear and maybe [PAGE 19] if needed but not fabricate. I'll stick to visible page numbers.

I will cite [PAGE N] for each quote.

Now, let's draft the content with high depth.

THINK_TRACE (>=400 words):
Need deep multi-hop derivation and gray-zone audit.
- Hop 1: Morris's Bayesian multiparameter inference (shrinkage toward group mean) underpins modern partial pooling in sports (NBA rebounding, golf strokes gained, EP/WP models).
- Hop 2: Player tracking transforms discrete events into continuous fields: STRAIN uses distance and its derivative; weighted curve clustering uses B´ezier to equalize trajectory length; spin moves use gradient boosting; blocking uses fluid dynamics/HMM. These are layers of the same physical inference problem: infer latent intent/pressure from noisy spatiotemporal observations.
- Hop 3: Causal layer: EP/WP models suffer selection bias/autocorrelation; Brill & Wyner propose catalytic prior and bootstrapped decisions. Hu uses hierarchical causal model for HFA. Gong uses DiD for betting legalization. Nakamura-Sakai uses ACTE for load management. Gerber uses competing risks for MLB draft.
- Gray-zone audit: claims of "stability over time" (STRAIN, spin moves) conflict with Brill & Wyner's warning that autocorrelation inflates standard errors and overfitting plagues EP/WP. "Predictability of pressure" does not imply causal attribution; ghost defenders and NFL Ghosts rely on conditioning sets that may omit confounders. Small count data (yellow cards) underdispersed; CMP copula handles it but identifiability of referee vs team heterogeneity is weak.
- No betting lines.

SOURCE_OPERATORS_AND_EQUATIONS:
For each relevant abstract, formal LaTeX.
- STRAIN: $S(t) = \mathcal{F}(d(t), \dot{d}(t))$, $d: [0,T] \to \mathbb{R}_{\ge0}$ meters, $\dot{d}$ m/s. Multilevel model: $S_{ij} = \mu + \alpha_i + \beta_j + \epsilon_{ij}$.
- Brill & Wyner: $EP(s) = \mathbb{E}[R_{rem} | s]$, $WP(s) = \mathbb{P}(Win | s)$. Catalytic prior. Bootstrap resampling of plays to get $\text{se}_{boot}(\hat{WP})$. Breakdown: autocorrelation $\rho \neq 0$ inflates variance by factor $\approx (1+\rho)/(1-\rho)$.
- Philipson CMP: $P(Y=y|\lambda,\nu) = \frac{\lambda^y}{(y!)^\nu Z(\lambda,\nu)}$, underdispersion $\nu > 1$. Bivariate copula for home/away yellow cards.
- Hu HFA causal: Potential outcomes $Y_i(1), Y_i(0)$; hierarchical estimators for league/team ATE.
- Bajons & Hornik: B´ezier $B(u) = \sum_{k=0}^n {n \choose k}(1-u)^{n-k}u^k P_k$. Weighted K-means objective $\min \sum_w \|C - X_w\|^2$.
- Powers volleyball: Markov chain state $s_t \in \mathcal{S}$, transition $P(s_{t+1}|s_t, a_t)$. Point probability $p_t = \mathbb{P}(\text{win point} | s_t)$. Multinomial regression with random effects.
- Kiriazis rebounding: Bayesian two-stage, conditional rebounding rate $\lambda_{ij}$, not linearly additive.
- Yee plate discipline: BART for $P(\text{strike}|\text{take})$, $P(\text{contact}|\text{swing})$, run expectancy $V(outcome)$.
- Walker darts: MDP $(S,A,P,R,\gamma)$. Dynamic credits. Breakdown: skill gap $\Delta \theta$ too large makes head-start infeasible.
- Matabuena knee: multilevel functional regression $Y_{ijk}(t) = \mu(t) + \alpha_i(t) + \beta_{ij}(t) + \epsilon_{ijk}(t)$. Functional ICC.
- Bhuva medal: ensemble $\bar{y}_i = \frac{1}{mn}\sum_{k=1}^m\sum_{l=1}^n \hat{y}_{ikl}$, Monte Carlo placement, Brier score.
- Ehrlich shot selection: correlation $\rho = \text{corr}(v_b, e_b)$ weighted by frequency.
- Gianchandani golf: strokes gained $SG$, population priors $\theta_g \sim N(\mu_pop, \sigma^2_pop)$.
- Leonard whiff: GWR $\hat{\beta}(u,v) = (X^T W(u,v) X)^{-1} X^T W(u,v) y$. Spatial heterogeneity.
- Jin spin moves: gradient boosting $F(x) = \sum_m \gamma_m h_m(x)$. Week-to-week correlation.
- Benz home advantage: STAN Bayesian paired comparison, ELPD via LOO-CV.
- Brahme blocking: HMM from Franks et al. 2015; fluid dynamics pass rush; hierarchical Bayesian linear model.
- Morgan QB: XGBoost target $Y \in \{\text{comp, inc, int, scramble, sack}\}$. CPOE critique.
- Fiore/Yan reaction time: GLMM $g(\mu_{ij}) = X\beta + u_j$, $u_j \sim N(0,\sigma^2_u)$. Threshold singularity at $\tau=0.1$s, observed 0.099s.
- Gong DiD: $Y_{it} = \alpha + \delta (Treat_i \times Post_t) + \lambda_i + \theta_t + \epsilon_{it}$.
- Dudley hockey: point shares translation, Wilson Method for sparse leagues.
- Skripnikov college football: regularized ordinal regression, elastic penalty, partial proportional odds.
- Mackowiak soccer: ball acceleration peaks $a(t) = \|\ddot{x}_{ball}(t)\|_2$.
- Nakamura-Sakai ACTE: $\tau(a) = \mathbb{E}[Y(1)-Y(0)|Age=a]$.
- Ward marathon: net drop $\Delta z \ge 3000$ ft. Adjustment: women 3-5 min faster, men 1-3 min faster.
- McGee diving: median score ability $\tilde{S}_d$, order bias and difficulty bias.
- Floyd volleyball: setter rotation, sets to front/back court.

Breakdown regimes: small N (Olympic best mark), autocorrelation, proportional odds violation, threshold discontinuity, infeasible head-start, underdispersion.

RETROCAUSAL_GENEALOGY:
- Morris -> Empirical Bayes -> James-Stein shrinkage -> modern partial pooling (NBA, golf, EP/WP).
- Strain rate continuum mechanics -> STRAIN (NFL tracking) -> fluid dynamics blocking (Brahme) -> weighted curves (Bajons).
- Ghosting: NFL Ghosts CDE (Yurko & Pelechrinis) -> Contextualized Generative Ghosting VRNN (Gu et al.) -> Deep Possession (Mackowiak).
- Multi-week traps: STRAIN and spin move abstracts tout week-to-week stability over 2021 season (8 weeks) but Brill & Wyner show autocorrelation inflates SE; short windows overstate stability.
- Home advantage longitudinal decline (Benz) vs causal EPL (Hu): different eras/leagues, retro-causal confounding by rule changes, travel, empty stadiums.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: Under pressure, coaches punt on fourth down despite WP analytics; referees face scrutiny and may converge toward mean card counts (Philipson); load management leads to rest patterns that regress to age norms.
- Counter-trap: Brill & Wyner's bootstrapped fourth-down procedure reveals fewer "obvious" decisions, inducing analytic paralysis; Hu's causal HFA shows offensive bias, so defensive adjustments are misdirected.
- Clock: Reaction time 0.1s hard cutoff creates cliff-edge disqualification (Allen 0.099s); marathon net drop 3000 ft is a physical threshold for qualification advantage; darts head-start infeasible beyond skill gap; these are hard boundaries where continuous models hit singularities.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical/biomechanical: Knee trajectories across MICR/HIIT, multilevel ICC reliability; if ICC low, session-to-session noise vetoes cross-session comparison.
- Weather/environment: Downhill net drop $\ge 3000$ ft alters qualifying time distribution; must veto flat-course comparisons without adjustment.
- Veto proof: GWR whiff rate reveals spatial heterogeneity that global parametric models confound; small-count yellow card data underdispersed, Poisson vetoed, CMP required. Passing play QB model: XGBoost vs GNN; tracking-based CPOE ignores scramble/sack outcomes, creating selection bias veto.

RLVR_COUNTERFACTUAL_VETOES:
Three scenarios:
1. If a coach applies Brill & Wyner's bootstrapped fourth-down model to a high-autocorrelation game state (e.g., shotgun formation with persistent pressure), the model vetoes the "obvious" punt because WP SE inflation crosses decision threshold. Prediction: punt rate decreases by >15% in borderline 4th-and-short scenarios, but only if bootstrap samples preserve within-game autocorrelation structure.
2. If a sportsbook (not odds, but risk model) uses a global Poisson model for yellow cards in Big 5 leagues post-COVID, the CMP underdispersion ($\nu > 1$) and referee heterogeneity veto equidispersion assumption. Prediction: home/away card count variance is underdispersed by factor $\approx 1/\nu$ relative to Poisson; closed-door seasons reduce home advantage dilution parameter to near zero.
3. If a darts handicap system uses fixed head-start for skill gap $\Delta \theta > \theta_{crit}$, the MDP feasibility constraint vetoes the head-start because end-of-game imbalance dominates. Prediction: dynamic credits achieve balance where static head-starts fail; match length distribution shifts right as weaker player uses credit at decisive leg.

Make sure no betting terms.

Word count check: I'll need to write enough. Let's compose.

Need to ensure XML sections are exact.

Let's write now.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

Hop 1 — Bayesian shrinkage epistemology. Carl Morris's pioneering work in Bayesian multiparameter inference (page 1) establishes the intellectual substrate for nearly every partial-pooling model in this volume. Morris's empirical Bayes logic—shrinking noisy individual estimates toward a group mean to reduce mean squared error—reappears in the Bayesian two-stage NBA rebounding model (page 6), the Bayesian golf strokes-gained model with population-based priors (page 9), and the hierarchical causal model for English Premier League home advantage (page 4). The through-line is the same: individual athletic signals are weak, so estimation borrows strength across players, teams, or leagues. The breakdown regime is identifiability: when the number of observations per unit is small (Olympic best-mark sports, page 8; diving judges, page 17), the prior dominates and the posterior inherits the prior's assumptions rather than the data's signal.

Hop 2 — Continuous-time spatiotemporal inference. Player tracking converts discrete football events into continuous fields. STRAIN (page 1) defines pressure as a directly observed statistic $S(t) = \mathcal{F}(d(t), \dot{d}(t))$ where $d(t)$ is rusher–QB distance in meters and $\dot{d}(t)$ is its time derivative in m/s. This is conceptually adjacent to the fluid-dynamics pass-rush model in "Blocking is a Drag" (page 12) and to weighted B´ezier curve clustering of rush routes (page 2), where trajectories of unequal play duration are standardized before clustering. The same physical layer recurs in soccer ghosting: NFL Ghosts (page 3) models receiver YAC and "ghost" defender position via high-dimensional conditional density estimation; "Contextualized Generative Ghosting Model" (page 4) uses a conditional Variational Recurrent Neural Network to predict space-control heatmaps; "Deep Possession" (page 16) identifies ball touches from peaks in horizontal ball acceleration magnitude. These are nested approximations of a latent field—player intent and pressure—observed through noisy, sparse tracking.

Hop 3 — Causal and decision-theoretic layer. Brill and Wyner (page 2) attack expected points (EP) and win probability (WP) for selection bias, overfitting, ignored autocorrelation, and missing uncertainty quantification; they propose a catalytic prior and bootstrap the fourth-down decision itself. Hu (page 4) uses a hierarchical causal model to identify league- and team-level average treatment effects of home advantage in the EPL. Gong (page 14) uses difference-in-differences to assess legalized sports betting and fan aggression. Nakamura-Sakai (page 16) constructs age-conditioned average treatment effects (ACTE) for load management. Gerber (page 11) applies competing risks to MLB draft outcomes. These form a single causal graph: treatment (rest, home field, rule change, betting legalization) is confounded by selection, team quality, and temporal trend; identification requires exclusion restrictions or credible parallel-trends assumptions.

Gray-zone audit. Multiple abstracts assert stability or predictability over short windows that conflict with Brill and Wyner's warning that autocorrelation significantly inflates WP standard errors and that overfitting plagues EP models (page 2). STRAIN claims "great predictability of pressure and stability over time" applied to the first eight weeks of the 2021 NFL season (page 1); spin moves claim week-to-week correlation over the 2021 season (page 10). Eight weeks is a gray zone: too short to separate true skill from schedule and game-state noise, yet long enough to publish rankings. Similarly, "NFL Ghosts" acknowledges difficulty in extending to continuous-time assessment and sensitivity to conditioned moments (page 3), which is a non-identifiability warning for defender attribution. The yellow-card model confronts underdispersed small counts and within-game dependence, motivating a bivariate Conway-Maxwell-Poisson copula rather than a naive Poisson (page 3). No betting lines, spreads, totals, or moneylines are invoked anywhere; all probability statements refer to statistical win-probability or event models, not wagering odds.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, page citations, and verbatim quotes.

Page 1 — Carl Morris (Jim Albert). No equation in abstract; conceptual operator is empirical Bayes shrinkage $\hat{\theta}_i^{EB} = (1-B)\bar{y}_i + B\mu$ with shrinkage factor $B$ borrowing strength across parameters. No verbatim equation provided.

Page 1 — STRAIN (Nguyen, Yurko, Matthews). Quote: "It is a directly-observed statistic as a function of two features: the distance between the pass rusher and QB, and the rate at which this distance is being reduced." Formalization: $S(t) = \mathcal{F}(d(t),\dot{d}(t))$, $d:[0,T]\to\mathbb{R}_{\ge0}$ in meters (m), $\dot{d}(t) = dd/dt$ in meters per second (m/s). Multilevel play-level model: $S_{ij} = \mu + \alpha_i + \beta_j + \epsilon_{ij}$, where $\alpha_i$ is rusher effect, $\beta_j$ is play/context effect, $\epsilon_{ij}\sim N(0,\sigma^2)$. Breakdown: assumes distance and derivative are sufficient statistics for pressure; ignores blocker identity and coverage duration.

Page 2 — Weighted Curve Clustering (Bajons, Hornik). Preprocessing with B´ezier curves: $B(u) = \sum_{k=0}^{n}\binom{n}{k}(1-u)^{n-k}u^k P_k$, $u\in[0,1]$, control points $P_k\in\mathbb{R}^2$. Weighted K-means objective: $\min_{\mathcal{C}}\sum_{w}\sum_{i\in C_w}\|X_i - \bar{X}_{C_w}\|_W^2$, where weights $w(t)$ are probabilities of pressuring the QB from gradient boosted trees. Units: trajectory length normalized to unit interval; weights dimensionless probabilities $[0,1]$. Breakdown: route clustering quality degrades if weight model is misspecified or if B´ezier smoothing removes sharp, decision-relevant cuts.

Page 2 — Analytics, have some humility (Brill, Wyner). Quote: "selection bias, overfitting, ignoring autocorrelation, and ignoring uncertainty quantification." Operators: $EP(s) = \mathbb{E}[R_{rem}\mid s]$, $WP(s) = \mathbb{P}(\text{Win}\mid s)$ for game state $s$. Mitigation: catalytic prior for overfitting; bootstrap resampling of fourth-down decisions to quantify uncertainty. Autocorrelation inflation: if plays within a game have lag-1 autocorrelation $\rho$, effective sample size $n_{eff}\approx n(1-\rho)/(1+\rho)$, so standard errors are inflated by $\sqrt{(1+\rho)/(1-\rho)}$ relative to iid assumption. Breakdown regime: $\rho\to1$ makes WP standard errors unbounded; bootstrap validity requires exchangeable blocks, violated by non-stationary game states.

Page 3 — NFL Ghosts (Yurko, Pelechrinis). Two components: (1) receiver YAC conditional density $p(y\mid x_{catch}, \theta_{rec}, \theta_{ctx})$; (2) ghost defender 2D position density $q(g\mid x_{catch}, \theta_{ctx})$. Modeled with non-parametric high-dimensional conditional density estimation. Performance metric: difference in expected points or probability of first down/touchdown between observed defender and ghost distribution. Breakdown: ghost defender conditioning set may omit unmeasured confounders (coverage scheme, receiver route depth); continuous-time assessment acknowledged as difficult.

Page 3 — Yellow fever (Philipson). Quote: "bivariate Conway-Maxwell-Poisson copula model to analyse the data." PMF: $P(Y=y\mid\lambda,\nu) = \frac{\lambda^y}{(y!)^\nu Z(\lambda,\nu)}$, $y\in\mathbb{N}_0$, $\lambda>0$, $\nu>0$. Underdispersion when $\nu>1$; equidispersion (Poisson) at $\nu=1$; overdispersion when $\nu<1$. Bivariate copula couples home and away yellow-card counts $Y_H,Y_A$ with dependence parameter. Covariates: home advantage, Covid closed-door indicator, league, referee random effect, team random effect. Breakdown: small counts from 2018–2022 Big 5 leagues produce sparse referee-by-cell counts; referee vs. team heterogeneity is weakly identified without strong prior structure.

Page 4 — Home field advantage soccer (Hu). Hierarchical causal model; potential outcomes $Y_i(1),Y_i(0)$ for home vs. away. League-level and team-level average treatment effects identifiable under unconfoundedness conditional on covariates. Eleven summary statistics for offensive, defensive, and referee performance. Finding: HFA resides more heavily in offensive statistics; lower-ranked teams retain higher HFA. Breakdown: causal identification requires no unmeasured time-varying confounders (stadium atmosphere, travel fatigue, referee assignment) correlated with home status.

Page 4 — Contextualized Generative Ghosting (Gu, De Silva, Caine, Smith). Conditional VRNN predicts sequences of space-control heatmaps $H_t\in\mathbb{R}^{h\times w}$ from game context $c$; contextual CNN maps heatmaps to player trajectories $\tau_t\in\mathbb{R}^{2p}$. Benchmark ghosts generated for real-life evaluation. Loss combines heatmap reconstruction and trajectory likelihood. Breakdown: requires large contextual datasets; deep generative models may average out rare but decisive tactical movements.

Page 5 — Women's college volleyball (Powers, Stancil, Consiglio). Quote: "We estimate the probability of each team winning the point, which changes on each contact." Markov chain state $s_t\in\mathcal{S}$ defined by contact sequence and rotation context. Point win probability $p_t = \mathbb{P}(\text{team wins point}\mid s_t)$. Attribution: change in $p_t$ on contact assigned to player(s) responsible. Adversarial contacts modeled by multinomial regression with player random effects and context fixed effects (set origin location). Strength of schedule adjusted at individual player level. Breakdown: Markov assumption ignores longer-run volley dependencies; rotation context discrete states may be sparse for substitution patterns.

Page 6 — Bayesian two-stage NBA rebounding (Kiriazis, Genest, Leblanc). Conditional rebounding rate $\lambda_{ij}$ for player $i$ in lineup context $j$. Not linearly additive on response scale (unlike APM). Two-stage Bayesian model with rebounding-specific regularization heuristics. Simulation study on 2020–21 NBA data; predictions for 2021–22. Breakdown: binary rebound outcomes with lineup dependence create non-ignorable missingness in counterfactual rebounding opportunities.

Page 6 — Plate discipline (Yee, Deshpande). Three-step BART framework: (i) $P(\text{called strike}\mid\text{take})$, (ii) $P(\text{contact}\mid\text{swing})$, (iii) expected runs $V(o)$ following pitch outcome $o\in\{\text{swing\&miss, called strike, foul, ball, hit}\}$. Optimal decision: swing iff $\mathbb{E}[V\mid\text{swing}] > \mathbb{E}[V\mid\text{take}]$ with uncertainty propagation. Case study: Mike Trout 2019. Breakdown: umpire-specific strike-zone random effects required; selection bias because swings are not randomly assigned to pitches.

Page 7 — Darts handicap MDP (Walker, Fernandes, Chan). MDP tuple $(\mathcal{S},\mathcal{A},P,R,\gamma)$. States encode legs, sets, and player skill; actions include dart target and credit usage. Existing head-start handicaps fail competitive balance when end-of-game imbalance dominates. Dynamic credits allow deterministic selection of a single dart outcome at any point. Feasibility theorem: dynamic credits balance regardless of skill difference $\Delta\theta$. Breakdown: if $\Delta\theta$ exceeds physical skill ceiling, no within-game mechanism can overcome deterministic outcome gaps without violating game rules.

Page 7 — Knee movement functional regression (Matabuena, Karas, et al.). Multilevel functional model $Y_{ijk}(t) = \mu(t) + \alpha_i(t) + \beta_{ij}(t) + \epsilon_{ijk}(t)$ for knee location trajectory over subsecond time $t$ in seconds (s), $i$ participant, $j$ session, $k$ step. Functional intra-class correlation coefficient (ICC) for reliability across sessions. MICR vs HIIT comparison; gender covariate. Breakdown: low functional ICC implies session-to-session measurement noise vetoes cross-session inference; vectorial low-dimensional embedding may discard biomechanically relevant high-frequency phase information.

Page 8 — Olympic medal projections (Bhuva, Webb). Ensemble of $m\times n$ supervised predictions for athlete $i$ across $m$ Olympic Games and $n$ models per game. Athlete distribution parameterized by mean and variance of predictions; Monte Carlo simulations yield medal probabilities. Calibration plots and Brier scores used for evaluation. Breakdown: small number of pre-Olympic competitions yields high variance; stacking across games assumes stationarity of sport-specific performance dynamics.

Page 9 — Shot Selection Efficiency (Ehrlich, Sanders). Measure: frequency-weighted correlation between expected proportional volume $v_b$ and expected points $e_b$ across shooting bins $b$: $\rho_{SE} = \text{corr}_f(v_b, e_b)$. Input to NBA payroll/performance model. Finding: shot selection efficiency is a source of wins not fully priced into player payroll. Breakdown: expected points per bin estimated from historical shot values; defensive pressure and shot clock state not explicitly modeled.

Page 9 — Bayesian golf performance (Gianchandani, Strasser). Strokes gained $SG$ as performance metric. Population-based priors $\theta_g \sim N(\mu_{pop},\sigma^2_{pop})$ for golfer $g$ skill-level population. Posterior updates individual strengths/weaknesses. Breakdown: population prior misspecification (wrong skill-level peer group) biases individual diagnosis; strokes gained requires hole-level baseline data unavailable for most amateurs.

Page 9 — Whiff rate GWR (Leonard). Geographically weighted regression: $\hat{\beta}(u,v) = [X^T W(u,v) X]^{-1} X^T W(u,v) y$ for pitch coordinates $(u,v)$. Whiff defined as swing-and-miss. Global parametric model confounded by pitch location; GWR captures spatial heterogeneity. Breakdown: bandwidth selection trades bias vs. variance; edge effects at strike-zone boundary.

Page 10 — Defensive spin moves (Jin). Gradient boosting model $F(x) = \sum_{m=1}^{M}\gamma_m h_m(x)$ to evaluate spin-move rushers. Spin move metric correlated with traditional pass rushing metrics; week-to-week correlation over 2021 season demonstrated. Breakdown: identification system reliant on tracking data quality; gradient boosting feature importance may reflect scheme usage rather than individual technique.

Page 11 — Competing risks MLB draft (Gerber). Competing risks: reach MLB vs. retire before MLB. Time-to-event $T$ with cause-specific hazards $\lambda_1(t)$ (MLB arrival) and $\lambda_2(t)$ (retirement). Draft day factors as covariates. Breakdown: censoring by minor league assignment is informative; competing risks subdistribution hazards require non-informative censoring conditional on covariates.

Page 11 — Home advantage American football (Benz, Bliss, Lopez). STAN Bayesian linear paired-comparison models: $y_{ht} = \alpha + \delta_h(t) + \epsilon_{ht}$ where $\delta_h(t)$ is home advantage trend (constant, linear, or time-varying). Model comparison via expected log pointwise predictive density (ELPD) with leave-one-out cross-validation (LOO-CV). Data: nearly two decades NFL, NCAA, high school. Finding: HFA declining in professional/collegiate over 20 years; heterogeneous across states in high school. Breakdown: LOO-CV assumes exchangeable games; conference realignment and scheduling changes violate exchangeability across time.

Page 12 — Blocking is a Drag (Brahme, Mehta). Hidden Markov Model adapted from Franks et al. (2015) to assign offensive line pass-blocking responsibilities. Fluid dynamics model for pass-rushing plays. Hierarchical Bayesian linear model identifies top pass rushers and offensive linemen. Breakdown: fluid-dynamics analogy assumes continuous pressure field; HMM state space must be discretized, losing sub-state nuance.

Page 12 — QB outcomes (Morgan). XGBoost classifier target $Y\in\{\text{completion, incompletion, interception, scramble, sack}\}$. Features: yardline, down, distance, tracking-derived pressure, separation, route running. Comparison with graph neural network. Finding: Mahomes generates more completions than expected and lower sack rates than expected; tracking-based CPOE on attempted passes only misses scrambles/sacks. Breakdown: classification conflates decision quality with execution; graph neural network requires relational inductive bias that may not generalize across offensive schemes.

Page 13 — Devon Allen reaction time (Fiore, Yan). Quote: reaction time 0.099 s, 0.001 s faster than allowed 0.1 s barrier. GLMM: $g(\mu_{ij}) = X\beta + u_j$, $u_j\sim N(0,\sigma^2_u)$ with random venue effect $j$. Signed-rank test for clustered data comparing same athlete across competitions. Breakdown: 0.1 s threshold is a discontinuity singularity; measurement error around the cutoff creates discontinuous disqualification risk without corresponding performance discontinuity.

Page 13 — Off-the-ball runs soccer/NFL (Schram, Probst, Breslin). Nearest-neighbor frame matching across sports. Feature "fingerprint" from player positions and velocities. Supervised learning with labeled NFL routes and soccer off-the-ball runs. Breakdown: field dimensions and player densities differ; nearest neighbor in feature space does not imply tactical equivalence.

Page 14 — Causal effect of legalized sports betting (Gong, Wang). Difference-in-differences: $Y_{it} = \alpha + \delta(Treat_i\times Post_t) + \lambda_i + \theta_t + \epsilon_{it}$. Data: American Gaming Association legal landscape, NIBRS crime incidents, game-level info, Bureau of Economic Analysis. Breakdown: parallel trends assumption may fail if states legalize betting in response to pre-existing crime or fan aggression trends.

Page 14 — Hockey prospect projection (Dudley, Pohlkamp-Hartt). Kubatko point shares for offensive and defensive value. NHLe equivalency; league-pair translation factors; Wilson Method for sparse leagues via intermediary (AHL). Breakdown: translation factors estimated from players who switch leagues, a selected sample; defensive value attribution in lower leagues may use different scorekeeping standards.

Page 15 — Regularized ordinal regression college football (Skripnikov). Drive-by-drive data 2014–2020. Ordinal regression with elastic penalty for variable selection; partial relaxation of proportional odds assumption. Unpenalized components for strength of schedule and home-field adjustment. Surrogate residuals for diagnostics. Breakdown: offensive/defensive complementarity (turnovers, field position) may be endogenous; ordinal scoring categories coarsen actual point differential.

Page 16 — Deep Possession soccer (Mackowiak). Horizontal ball acceleration magnitude $a(t) = \|\ddot{x}_{ball}(t)\|_2$; touches identified at acceleration peaks. Spatial maps of touch frequency/location. Breakdown: tracking noise in ball position creates false acceleration peaks; dribble vs. touch distinction requires sub-possession segmentation not specified.

Page 16 — Age-conditioned ATE load management (Nakamura-Sakai, Macdonald). Conditional Expectation Function for age curves; Age-Conditioned Treatment Effect $\tau(a) = \mathbb{E}[Y(1)-Y(0)\mid Age=a]$ for rest days between games. Applied across multiple sports and performance metrics. Breakdown: age is a proxy for unobserved cumulative load and injury history; treatment (rest) is not randomly assigned conditional on age.

Page 17 — Downhill Boston Marathon (Ward, Albrecht, Hammerling, Smith). Net drop $\Delta z = z_{start}-z_{finish}$; focus $\Delta z \ge 3000$ ft. Stratify by sex and age. Finding: net drop $\ge 3000$ ft increases proportion of qualifying times. Suggested adjustments: women's qualifying times 3–5 minutes faster, men's 1–3 minutes faster for downhill courses. Breakdown: elevation change interacts with temperature, wind, and course surface; net drop ignores elevation profile variance (rolling vs. monotonic descent).

Page 17 — Judges' scores bias (McGee, Downey). Measure of diver ability: median score across meets/dives $\tilde{S}_d$. Data: 674 meets, 5250 divers, 2017–2022. Test order bias and difficulty bias by comparing scores to $\tilde{S}_d$, dive difficulty, and order. Breakdown: median ability measure assumes performance stationarity over 2017–2022; nationalistic bias not separately identified from order/difficulty.

Page 18 — Attacking tendencies setter rotation (Floyd, Wright). ncaawvbR package; 2021–2022 NCAA play-by-play. Frequency of sets to front/back court attackers conditioned on setter court position. Breakdown: rotation data without substitution ignores libero and defensive specialist interactions; setter location confounded with serve-receive formation.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage plus multi-week traps.

The deepest lineage runs from Carl Morris's Bayesian multiparameter inference (page 1) into modern partial pooling. Morris's empirical Bayes shrinkage—borrowing strength across parameters to reduce mean squared error—is the formal ancestor of the Bayesian two-stage NBA rebounding model (page 6), the golf strokes-gained hierarchical priors (page 9), and the hierarchical causal home-advantage model (page 4). In each, noisy individual estimates are shrunk toward a group mean; the retro-causal move is that today's estimates condition on tomorrow's population structure, effectively using the whole to judge the part.

A second lineage is continuum mechanics. STRAIN borrows strain-rate language from materials science: pressure is a function of distance and its time derivative (page 1). This recurs in "Blocking is a Drag," which models pass rush through fluid dynamics (page 12), and in weighted B´ezier route clustering (page 2), where trajectories are geometrically regularized before pattern extraction. The shared abstraction is that athletic intent is a continuous field observable only through discrete, noisy samples.

A third lineage is ghosting and counterfactual simulation. NFL Ghosts introduces "ghost" defenders via conditional density estimation (page 3); Contextualized Generative Ghosting models space-control heatmaps with a conditional VRNN and maps them to trajectories with a CNN (page 4); Deep Possession extracts touches from ball-acceleration peaks (page 16). These form a progression from explicit statistical ghosts to deep generative benchmarks, all attempting to answer: what would an average defender/attacker have done in this exact context?

Multi-week traps. Two abstracts explicitly claim stability over the 2021 NFL season—STRAIN (first eight weeks, page 1) and spin moves (week-to-week correlation, page 10)—while Brill and Wyner warn that autocorrelation significantly inflates win-probability standard errors and that EP/WP models overfit (page 2). Eight weeks is a gray zone: long enough to publish rankings, too short to separate persistent skill from schedule, game-state, and opponent-strength noise. A related trap is the home-advantage longitudinal claim: Benz et al. document a 20-year decline in NFL/NCAA HFA (page 11), whereas Hu's causal EPL analysis (page 4) finds offensive-biased HFA in a single season. Retro-causal confounding—rule changes, travel density, empty-stadium periods, and officiating emphasis—means the two findings are not directly commensurable without a unified identification strategy across leagues and eras.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and clock.

Crisis habit regression. Under pressure, decision-makers regress to salient habits. Coaches facing fourth down revert to punting despite WP models suggesting otherwise; Brill and Wyner find that analysts overstate how obvious fourth-down decisions are (page 2). Referees under intense scrutiny (Big 5 yellow-card data, page 3) may regress toward the mean card count to avoid appearing biased, creating artificial consistency. Load management (page 16) induces coaches to rest players according to age-curve expectations, regressing individual fatigue states onto population age norms.

Counter-trap. The counter-trap is analytic paralysis induced by uncertainty quantification. Brill and Wyner's bootstrapped fourth-down procedure shows far fewer decisions are obvious than analysts claim (page 2); if coaches fully internalize this, they may freeze in borderline situations. Hu's causal finding that HFA is offense-heavy, not defense- or referee-heavy (page 4), creates a counter-trap for defensive coordinators who over-adjust to perceived home-field referee effects that are statistically weak.

Clock. Hard thresholds create clock-like singularities. Devon Allen's 0.099 s reaction time vs. the 0.1 s disqualification barrier (page 13) is a discontinuity where measurement error determines eligibility; the GLMM and clustered signed-rank test must model venue effects because the threshold is not a smooth performance boundary. The Boston Marathon downhill analysis (page 17) imposes a 3,000 ft net-drop clock: below it, no adjustment; above it, qualifying standards shift by minutes. Darts handicap feasibility (page 7) has a skill-gap clock: beyond a critical $\Delta\theta$, static head-starts become infeasible because end-game imbalance dominates. These are all regimes where continuous athletic performance is forced through a discrete decision boundary, producing veto-worthy singularities.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof.

Physical layer. Knee movement functional regression (page 7) delivers a veto condition: if the functional intra-class correlation coefficient across MICR and HIIT sessions is low, session-to-session biomechanical noise vetoes any cross-session comparison of training load or gender effects. The multilevel structure $Y_{ijk}(t) = \mu(t)+\alpha_i(t)+\beta_{ij}(t)+\epsilon_{ijk}(t)$ explicitly separates participant, session, and step variance; without high ICC, $\alpha_i$ is inseparable from $\epsilon$.

Weather/environment layer. The downhill marathon study (page 17) establishes an environmental veto: courses with net drop $\Delta z\ge3000$ ft produce systematically different qualifying-time distributions. Comparing downhill qualifiers to flat-course qualifiers without the proposed 1–5 minute adjustments confounds course physics with athlete fitness. The veto is absolute: net drop is a physical treatment, not a covariate to be ignored.

Statistical vetoes. GWR whiff-rate analysis (page 9) vetoes global parametric pitch-location models because coefficient estimates are confounded by unmodeled spatial structure; local bandwidth must match the spatial scale of pitch movement. The yellow-card CMP copula (page 3) vetoes equidispersed Poisson modeling when counts are underdispersed ($\nu>1$) and within-game dependent. The QB outcome classifier (page 12) vetoes tracking-only CPOE because it conditions on attempted passes and omits scrambles and sacks, creating selection bias in completion evaluation. Each veto is grounded in a stated breakdown regime: low ICC, $\nu\neq1$, and conditioning on a post-treatment selection event (pass attempt), respectively.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with predictions.

Scenario 1 — Autocorrelated fourth-down veto. If a coaching staff applies Brill and Wyner's bootstrapped WP framework to a high-autocorrelation game state (e.g., persistent shotgun pressure on a mobile quarterback), the bootstrap standard error for WP difference between punting and going for it crosses the indifference threshold. The veto fires because Brill and Wyner document that autocorrelation significantly inflates WP standard errors (page 2), rendering the "obvious" punt statistically unsupported. Prediction: in simulated 4th-and-short boundary cases with within-game play autocorrelation $\rho\ge0.3$, the model flips the optimal decision from punt to go-for-it in $>15\%$ of bootstrap replications relative to an iid WP model, and observed NFL punt rates in those cells decline by a corresponding margin in seasons adopting uncertainty-aware protocols.

Scenario 2 — Underdispersed yellow-card Poisson veto. If an analyst models Big 5 European football yellow cards with a standard Poisson GLM rather than Philipson's bivariate Conway-Maxwell-Poisson copula (page 3), the equidispersion assumption is vetoed by underdispersion ($\nu>1$) and small-count dependence. The Poisson model overstates the variance of home–away card-count differences and misallocates referee heterogeneity. Prediction: fitting the CMP to 2018–2022 data yields $\hat\nu>1$ with variance inflation factor $<1$ relative to Poisson; during closed-door pandemic seasons, the home-advantage dilution parameter on yellow cards converges toward zero, a pattern a Poisson model would attribute to noise rather than structural referee-behavior change.

Scenario 3 — Darts head-start infeasibility veto. If a darts handicap system assigns a fixed head-start to a weaker player when skill difference $\Delta\theta$ exceeds the critical threshold identified by Walker et al. (page 7), the MDP feasibility constraint vetoes the head-start because end-of-game imbalance cannot be overcome by deterministic dart outcomes. The counterfactual replaces static head-starts with dynamic credits usable at any point. Prediction: for $\Delta\theta>\theta_{crit}$, static head-starts produce win probabilities for the weaker player bounded away from 0.5 regardless of head-start size, whereas dynamic credits achieve competitive balance exactly; in simulated matches, the weaker player's win rate under dynamic credits remains within $\pm2\%$ of 0.5 across all skill gaps, while static head-starts diverge below 30% for large gaps.
</RLVR_COUNTERFACTUAL_VETOES>