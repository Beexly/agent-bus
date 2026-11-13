---
source: "2024 - Noisy Judgments A probability surface-based analysis of umpiring variability - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2024"
pages: 20
model: deepseek/deepseek-v4.1-flash-1017
words: 7309
---

<NATIVE_REASONING>
We need answer to user. Need follow GSE + GSI Frontier Reasoning Foundry. Need produce >=1000 words across exact XML sections. Need analyze PDF "Noisy Judgments: A probability surface-based analysis of umpiring variability". Need no betting lines. Need cite [PAGE N] markers and verbatim quotes. Need formal LaTeX equations, units, assumptions, exact singularity/breakdown regimes. Need source operators/equations. Need deep multi-hop derivation and gray-zone audit >=400 words in THINK_TRACE. Need retrocausal genealogy, recursive theory of mind, cross-layer veto, RLVR counterfactual vetoes 3 verifiable scenarios + predictions. Need zero betting lines. Need be careful no mention spreads/totals/moneylines/odds. "odds" maybe avoid word? Strict invariant says never mention spreads, totals, moneylines, or odds. The source has "odds" but we should not mention. Avoid "odds" entirely. Need maybe say probability ratio? Avoid "odds" term. Need no toy equations. Need formal equations.

Need interpret "DRIVE SOURCE" maybe task is to analyze source. Need not solve sports prediction? It's research paper. Need identify operators: probability surface, sigmoid fit, grid cells, strike%, IOU, FISZ, sampling sensitivity, 2-strike bias, etc. Need formal LaTeX with units. Need exact page citations and verbatim quotes. Need breakdown regimes. Need perhaps derive probability surface from Bernoulli cell data, weighted least squares, gradient descent. Need mention sigmoid functional form Eq 2 but text doesn't show equation due extraction? It says Equation 2 but not shown in source text. We can state "Equation 2 is absent from extracted text; I can reconstruct generic form" maybe. Need cite. Need avoid inventing exact equation? Invariant: state formal LaTeX equations, units, assumptions, exact singularity/breakdown regimes. We can present formal generic version and label as reconstruction due missing glyphs. Need be precise: Equation 1 exact: Strike% = N(strikes)/(N(strikes)+N(balls))? Source has garbled: "𝑆𝑡𝑟𝑖𝑘𝑒 % = 𝑁("#$%&'") )("#$%&'") + )(,-..") (1)" We can write \(S_{ij}=N_{ij}^{S}/(N_{ij}^{S}+N_{ij}^{B})\). Need cite [PAGE 5]. Eq 2 not visible. Source says "two sigmoids in x direction and two in y direction... eight free parameters... full function ... Equation 2" [PAGE 6]. Could formulate:
\(P(x,z)=\sigma_x^+ (x;\alpha_{xL},\beta_{xL})\cdot \sigma_x^-? \) Need avoid fake? It says two sigmoids in each dimension account for rise and fall. Could write product of left/right logistic gates:
\(P(x,z)= [\sigma(x;\alpha_{xL},\beta_{xL})-\sigma(x;\alpha_{xR},\beta_{xR})] [\sigma(z;\alpha_{zB},\beta_{zB})-\sigma(z;\alpha_{zT},\beta_{zT})]\)? But that yields? Need maybe not exact. Since equation missing, say "the extracted PDF omits the rendered Equation 2; I do not hallucinate it. The operator is constrained to be a product/difference of four logistic sigmoids with eight parameters, as stated." But user asks formal LaTeX. We can provide "general admissible form" and caveat. Need include exact page quotes.

Need not mention betting. Need "crisis habit regression vs counter-trap vs clock" in recursive theory of mind. Need discuss umpire behavior as recursive: umpire internal prior, catcher framing, pitcher/batter adaptation, league feedback, automated zone. "Crisis habit regression" maybe when 2-strike count pressure makes umpire regress to narrower zone? Need counter-trap = catcher framing inducing larger zone? Clock = time series/cohort adaptation and measurement system. Need include.

Need cross-layer veto: physical/biomechanical/weather veto proof. Need cite source? Paper doesn't discuss weather/biomechanics heavily. Need state no weather variables in source; veto proof is absence of evidence, so can't claim weather effect. Need formal veto criteria: if pitch location measurement error > effect size, etc. Need use units. Need "physical/biomechanical/weather veto proof" maybe prove that source cannot identify weather/biomechanical causes because model doesn't include them; only observational surface. Need say cross-layer veto: lack of variables vetoes causal claims. Need exact breakdown: sample cell counts small, missing data, height normalization, truncated fit, no umpire changes assumption, no pitch-tracking system change. Need cite pages.

Need RLVR counterfactual vetoes: 3 verifiable scenarios + predictions. Need define RLVR? Reinforcement Learning with Verifiable Rewards? Need maybe counterfactual veto scenarios: if we perturb data or model, prediction fails. Need 3 verifiable scenarios: 1) Shuffle ball/strike labels within cells at fixed N: surface should flatten/increase uncertainty; if not, model overfits. 2) Remove all 2-strike pitches: if 2-strike bias is sampling artifact, red point should fall within blue envelope; but paper says outlier [PAGE 14]. Prediction. 3) Replace Statcast top/bottom with constant height normalization: LHB/RHB area shift? Need. Or hold out season and predict IOU. Need verifiable. Need ensure no betting.

Need ">=1000-word depth" across exact XML sections. Need probably 2000+ words. Need include all sections exactly. Need ensure THINK_TRACE >=400 words. Need include citations [PAGE N] with verbatim quotes. Need not overdo. Need maybe mention source title. Need "Unknown Authors" but source says 193964. Need no issue.

Need structure:
<THINK_TRACE> ... >=400 words. Deep multi-hop derivation & gray-zone audit. Include reasoning steps: data -> grid -> Bernoulli -> heteroscedastic errors -> sigmoid surface -> fit -> alpha edge -> rectangle -> IOU -> sensitivity -> subgroup inference. Gray-zone audit: assumptions, missing Eq 2, Eq 1 garbled, unknown exact cost function, no weather, no biomechanics, no umpire changes, sample thresholds, 2-strike probability astronomical but Gaussian tail caution, multiple comparisons, cohort confounding, height normalization, pitcher/catcher starts entire game assumption. Need cite quotes.

<SOURCE_OPERATORS_AND_EQUATIONS> Formal LaTeX. Need list:
- Grid binning operator \(G: (x,z)\to cell\)
- Strike fraction \(S_{ij}\)
- Bernoulli variance \(v_{ij}=S(1-S)/N\), \(N=N_S+N_B\). Heteroscedastic weight \(w_{ij}=1/v_{ij}\) or \(N/(S(1-S))\). Need caveat if S=0/1 singular; use Laplace smoothing or binomial interval. Exact singularity/breakdown regimes: N=0, S=0/1 -> weights infinite; sparse cells; grid resolution 1 cm x 1 cm; pitch measurement error; height normalization. 
- Sigmoid \(s(u;\alpha,\beta)=1/(1+e^{-\beta(u-\alpha)})\). Units: u cm, alpha cm, beta cm^{-1}. Surface \(P(x,z;\theta)\) with 8 params. Because Eq 2 omitted, present admissible product-difference. Need maybe no fake? We can state "not verbatim; extracted source omits equation." But need formal. Maybe:
\(P(x,z;\theta)=\left[s(x;\alpha_{xL},\beta_{xL})-s(x;\alpha_{xR},\beta_{xR})\right]\left[s(z;\alpha_{zB},\beta_{zB})-s(z;\alpha_{zT},\beta_{zT})\right]\), clipped to [0,1]. But if alpha left < right and beta positive, difference may not be product? Let's test: For x far left, s_L ~0? Need define s ascending. Want gate between xL and xR. If s_L = sigmoid increasing at left edge, s_R = sigmoid increasing at right edge, then s_L - s_R? At x<< left, both ~0 diff 0; between, s_L ~1, s_R~0 diff 1; right, both ~1 diff 0. Yes. Product for z similarly. So \(P=(s_L-s_R)(s_B-s_T)\) if s_B is bottom edge ascending and s_T top edge ascending. But source says two sigmoids in each dimension account for rise and fall; likely product of sigmoids? Actually if product of two sigmoids: at far left one low, far right other low, between high. But product \(s_L (1-s_R)\) is equivalent. Need present as "admissible gated-logistic representation consistent with prose, not verbatim." Since exact equation missing. Good.
- Weighted RMS cost: \(C(\theta)=\sqrt{\frac{1}{M}\sum_{ij} w_{ij}(S_{ij}-P(x_i,z_j;\theta))^2}\), with \(w_{ij}\) inverse variance; singular when N=0 or S=0/1. But source says "normalized distances ... before summing them" and "RMS" [PAGE 6]. Good.
- IOU \(IOU = |Z_{ump}\cap Z_{MLB}|/|Z_{ump}\cup Z_{MLB}|\), unitless [PAGE 12].
- Aspect ratio \(A=W/H\), unitless [PAGE 11].
- FISZ \(FISZ_c = Area(Z_{ump,c}) - Area(Z_{ump,avg})\) cm^2 [PAGE 17].
- Sensitivity distribution: bootstrap \( \hat \theta_b = F(D_b)\), b=1..B; envelope quantiles. 
- Two-strike bias test: \(D_{2S}\) vs bootstrap \(D_{all}\) at same n; p from empirical CDF. Source says 1 in 10^104? Actually "1 chance in 10104" likely 10^104? Need quote exactly? It says "roughly 1 chance in 10104" maybe formatting missing superscript. We can quote "roughly 1 chance in 10104" [PAGE 14] and interpret as printed superscript ambiguity? Need not use odds term. Avoid "odds". Use "probability under fitted Gaussian of \(10^{-104}\)" maybe if 10^104. But source text "10104" maybe missing superscript. Better quote verbatim and say "the superscript is flattened in extraction; treat as printed." Avoid "odds" word. 
- Units and assumptions.

<RETROCAUSAL_GENEALOGY> Historical/scientific lineage: PITCHf/x 2007, Carruth 2012 50% contour ellipse, Roegele 2013 grid 1-inch squares, Ben-Porat 2019 superellipse, Umpire Scorecards EUZ 2021 KDE Bayes, this paper 2024; build probability surface. Also signal detection/psychophysics, psychometric function (sigmoid), item response? Need cite pages 1-2 and refs. Multi-week traps: tracking system change PITCHf/x to Statcast/TrackMan 2017; RetroSheet 2023 unavailable; rulebook not changed; lefty strike disappearance 2017; cohort adaptation; 2-strike bias consistent; sample thresholds. Need mention "multi-week traps" maybe data leakage, time drift, cohort effects, 2023 missing, rule changes? Need formal causal genealogy: measurement instrument -> prior surface -> edge extraction -> evaluation -> feedback. Need avoid betting.

<RECURSIVE_THEORY_OF_MIND> Crisis habit regression vs counter-trap vs clock. Need discuss umpire under 2-strike count: pressure/regression to narrower high/low zone. Counter-trap: catcher framing and pitcher reputation can induce larger zone; model must avoid attributing to catcher what is umpire baseline. Clock: time series and cohort adaptation; lefty strike vanishes 2017. Need cite [PAGE 14-18]. Need mention recursive beliefs: umpire models pitcher/catcher/batter; batter models zone; league models umpires; automated zone target. Need formal? Could include simple Bayesian recursion? Need not too many equations. Maybe:
\(P_t(U|H_t, C_t, B_t, count)\) where H history, C catcher, B batter; counterfactual \(do(C=baseline)\). Need not fake? It's formal. Need discuss "crisis habit regression" = under high leverage 2-strike, behavior shifts to habit (narrow top/bottom) despite official target. "counter-trap" = framing-induced strike zone (FISZ) can make catcher look good if umpire's prior is broad; need within-umpire baseline. "clock" = season/tenure cohort updating. Need mention automated pitch calls as recursive policy target.

<CROSS_LAYER_VETO_ADJUDICATION> Physical/biomechanical/weather veto proof. Need state paper does not measure weather, pitcher biomechanics, catcher biomechanics. Therefore any causal claim from strike-zone surface to those layers is vetoed. Need formal veto criterion: effect size must exceed measurement uncertainty and be identified after controls. We can cite height normalization [PAGE 4], pitch tracking change [PAGE 2 footnote], missing data [PAGE 3 footnote], umpire change assumption [PAGE 3], catcher full-game assumption [PAGE 17 footnote]. Need "physical" layer: 3D prism vs 2D rectangle, center-of-mass cross-section [PAGE 4], width 50.6 cm [PAGE 4]. Need "biomechanical": stance changes, height normalization; Judge 6'7" perception [PAGE 18-19]; Soto stance [PAGE 18]. "weather": absent; cannot adjudicate. Need exact breakdown: no weather covariates, no release-point, no pitch tunneling, no catcher receiving mechanics. Use "veto proof" maybe as proof of non-identifiability: if model omits W, then \(P(Y|X)\) not \(P(Y|do(X))\). Need formal:
\( \Delta_{causal} = E[Y|do(W=w)] - E[Y] \) not estimable when W unobserved and correlated with X. 
Need exact singularity/breakdown: if cell count N=0; if height normalization denominator zero? Statcast top/bottom missing; if top=bottom. Need mention.

<RLVR_COUNTERFACTUAL_VETOES> 3 verifiable RLVR veto scenarios + predictions. Need define RLVR: Reinforcement Learning with Verifiable Rewards maybe not necessary; "verifiable reward" scenarios. Need three:
1. Label-shuffle null test: randomly permute ball/strike labels within each 1 cm cell preserving N. Prediction: fitted surface should approach flat 0.5? Actually if permute labels within each cell, strike fraction remains same per cell, surface unchanged. Better shuffle labels across cells preserving global count? Need design verifiable: redistribute labels across grid cells preserving each cell N but assign \(N_S\) from global distribution? Hmm. Need "counterfactual veto": if model is valid, randomizing labels across cells should destroy spatial structure and produce near-constant/ill-defined surface; if it still yields paper's strike zone, model has leakage. Prediction: fitted area near arbitrary/random and IOU low. But need precise. Could say shuffle cell strike labels \(S_{ij}\) among occupied cells while preserving N_{ij}; fit should fail to recover 57.7 cm width or 3,156 cm^2 area; if it does, veto. Verifiable. 
2. Remove 2017+ seasons: If lefty strike disappearance is due to cohort replacement vs adaptation? Paper says cohorts move together and new umpires adapt [PAGE 13]. Counterfactual: fit pre-2017 only and hold out post-2017; if post-2017 zone shifts are predicted by pre-2017 cohort trajectories, adaptation; if not, replacement/measurement. Prediction: if measurement system change (PITCHf/x to Statcast 2017) drives it, pre-2017 model will not predict 2017+; if adaptation, cohort trajectories predict. Need "prediction" maybe sign: lefty shift should continue/disappear. 
3. 2-strike bias: Fit on 0-1 strike pitches only, evaluate 2-strike pitches held out. Prediction: 2-strike zone area should be smaller by ~400 cm^2 in 2008 and remain outside bootstrap envelope; if not, bias is artifact. Source gives exact [PAGE 14]. 
Need maybe include "verifiable" with metrics and thresholds: IOU, area cm^2, bootstrap 95% interval. Need no betting. Need mention "RLVR" as reward verification. Good.

Need ensure no "odds". Avoid word entirely. Need no "betting lines". Need not mention sports betting. Good.

Need word count >=1000. We can write ~3000. Need exact XML sections. Need not include extra sections? "across these exact XML sections" likely use exact tags. We can include only those tags maybe. Need include all six. Good.

Need maybe mention source is page 20 unknown authors. Need no outside sources? Fine.

Need include "verbatim quotes" with exact [PAGE N] markers. Need choose quotes:
- "A measurement is only as good as its instrument." [PAGE 1]
- "The official strike zone is therefore a 3-dimensional pentagonal prism. Pitch location data, however, is measured at the point the center mass of the ball crosses the front of home plate" [PAGE 4]
- "The width of the official strike zone–as measured by the center of mass of a baseball–is the width of home plate + 2 * (the radius of a baseball) = 43.2 + (2 * 3.7) = 50.6 cm." [PAGE 4]
- "we gridded the data into 1 cm by 1 cm square cells" [PAGE 5]
- "utilizing the heteroscedastic errors present in each cell location during the fitting process is necessary to mitigate noise introduced by small(er) sample sizes" [PAGE 5]
- "two sigmoids in the x direction and two in the y direction" [PAGE 6]
- "eight free parameters" [PAGE 6]
- "The alpha parameters are positional terms that define where the value of the surface is 0.5" [PAGE 6]
- "The best-fit surface gives us a strike zone 57.7 cm wide–7.1 cm wider than the official MLB zone width" [PAGE 7]
- "the strike zone narrowed nearly 14%, from 63 to 54 cm" [PAGE 11]
- "The 'lefty strike' largely disappears starting with the 2017 season." [PAGE 11]
- "the bottom of the strike zone ... dropped by nearly 9 cm—more than 16%" [PAGE 11]
- "the 2-strike bias is very, very real" [PAGE 14]
- "more than 400 cm2 smaller" [PAGE 14]
- "Umpires who started at the same time move together as cohorts" [PAGE 13]
- "new additions to the umpire corps are generally adapting to the existing zone rather than driving the changes" [PAGE 13]
- "Jose Molina has the largest FISZ" [PAGE 17]
- "The bottom of Aaron Judge’s strike zone sits at 42.8 cm" [PAGE 18]
- "his 6’7” frame probably distorts the umpire’s perception from a crouched position" [PAGE 18-19]
- "Using the best-fit strike zone from across the umpire corps as the target for a ‘robot umpire’ would preserve the zone as it’s currently called" [PAGE 19]
- "Umpire changes within a game occur only under exceptional circumstances" [PAGE 3]
- "we assume the catcher that starts the game plays the entire game" [PAGE 17 footnote 5]
- "MLB changed its pitch tracking system from PITCHf/x to Statcast/TrackMan starting with the 2017 season" [PAGE 2 footnote 1]
- "RetroSheet data on umpires for the 2023 season is not yet available" [PAGE 2 footnote 2]
Need not overcite but good.

Need mention Eq 1 source garble; quote? "Strike % = N(strikes)/(N(strikes)+N(balls))" [PAGE 5]. Good.

Need maybe include exact singularity regimes in equations section:
- Cell empty: \(N_{ij}=0\) -> S undefined and weight undefined; fix by excluding cell or hierarchical smoothing.
- \(S=0\) or 1 -> binomial variance zero -> inverse variance weight infinite; use Wilson/Laplace or beta-binomial; otherwise cost can be dominated by deterministic cells.
- Sparse cells after subgrouping (umpire x batter handedness x count): sample thresholds 1,000 pitches for umpires, 100 for batters/pitchers [PAGE 3]; below threshold surface unstable (Figure 8) [PAGE 10].
- Height normalization: top/bottom missing or top<=bottom -> division by zero; source uses mean top 104 cm bottom 49 cm [PAGE 4]. Normalized z \(z' = (z - z_b)/(z_t-z_b)\). Wait source says proportional scaled. Need equation \(z' = 49 + (z - z_b)(104-49)/(z_t-z_b)\)? Actually average top 104, bottom 49. If pitch is 25% of reported zone above bottom, adjusted z-value 25% above bottom. So \(z' = z_b^{avg} + (z - z_b)/(z_t - z_b) * (z_t^{avg}-z_b^{avg})\). With \(z_b^{avg}=49\), \(z_t^{avg}=104\). Units cm. Singular if \(z_t=z_b\). Good.
- Grid x coordinate? no normalization? 
- IOU denominator zero if union empty; not likely.
- 2-strike bootstrap Gaussian tail: if empirical distribution non-Gaussian, extreme p quoted may be model-dependent; but source says "if you were to fit a gaussian" [PAGE 14]. Mention gray zone.

Need ensure "no toy equations" - our equations are formal. Good.

Need maybe not use "odds" in RLVR? Use "probability" and "chance" maybe source quote includes "1 chance" but not odds. Fine. Avoid "moneyline" etc. Good.

Need maybe include "SI/information/probability units" in equations. Use cm, cm^2, cm^{-1}, probability dimensionless, nats? Information? We can include Bernoulli log-likelihood in nats? Maybe:
\(\ell(\theta)=\sum_{ij}[N^S_{ij}\log P_{ij}+N^B_{ij}\log(1-P_{ij})]\) in nats. This is formal. Good. But source uses weighted RMS, not MLE. We can include as equivalent likelihood and state source uses custom weighted RMS. Need no fake? It's a standard alternative; cite source says custom cost. Mark as "diagnostic, not verbatim." Good.

Need maybe include "information units" for entropy: \(H(S)=-S\log_2 S-(1-S)\log_2(1-S)\) bits. But maybe unnecessary. However invariant says SI/information/probability units. We can include nats/bits for Bernoulli entropy. Good.

Need "exact singularity/breakdown regimes" maybe in equations section and cross-layer. Good.

Need "multi-hop derivation" in THINK_TRACE. Need maybe 500 words. Let's draft.

Need maintain XML only? The final answer should be XML sections. No markdown? We can use XML tags with text. Need include LaTeX within. Good.

Need not include "odds" word. Check all text for "odds". Avoid. Source quote "odds" maybe not use. Good. "betting" no. "spread" no? Invariant says never mention spreads, totals, moneylines, or odds. "spread" as in variability? Hmm "spread" could be interpreted. Avoid word "spread" entirely? It says never mention spreads. Use "dispersion" or "variation". Avoid "spread" in final. Also avoid "total" maybe "totals" as betting; word "total" appears in equations? Avoid "total" if possible? The invariant specifically betting lines; but to be safe avoid "spread", "total", "moneyline", "odds". "Total" might appear in "total of eight" but avoid. Use "sum of eight". Avoid "over/under". Good.

Need not mention "lines" as betting? "line" could be geometric. Fine.

Need include "source pages provided" citations. Good.

Need maybe mention "Unknown Authors" not necessary.

Need final with tags. Need maybe include "THINK_TRACE" with >=400 words. Let's write extensive.

Potential issue: The instruction ">= 1,000-WORD DEPTH across these exact XML sections" maybe each section? It says across sections. We can exceed. THINK_TRACE >=400. Good.

Let's draft carefully.

Start:

<THINK_TRACE>
The paper's inferential chain is... 
Step 1: data. Statcast 10.5M pitches, 5,307,386 called [PAGE 2]. Retrosheet joins umpire. Assumption umpire doesn't change [PAGE 3].
Step 2: geometry. Official zone 3D prism; data center of mass at front plate; flatten. width 50.6 cm [PAGE 4]. Height normalization average top 104 bottom 49 [PAGE 4].
Step 3: gridding 1 cm cells [PAGE 5]. Eq1 strike fraction. Each cell Bernoulli.
Step 4: heteroscedastic errors. Sparse cells. Weighted fit.
Step 5: sigmoid surface 2 sigmoids x 2 y, 8 params [PAGE 6]. Alphas are 0.5 positions [PAGE 6]. Beta steepness.
Step 6: optimize via gradient descent scipy; custom cost normalizes distances then RMS [PAGE 6].
Step 7: extract rectangular zone from alphas. Overall 57.7 cm wide, shifted 1.6 cm left, 56.1 cm tall [PAGE 7].
Step 8: validation LHB/RHB area nearly equal 3156 vs 3146; LHB shift 3.9 cm outside [PAGE 8-9]. Sensitivity 100 resamples down to 1000 pitches; variability decreases with n [PAGE 10]. Time series 63->54 cm width; bottom drops 9 cm [PAGE 11]. IOU 70-90%, cluster 84% [PAGE 12]. Cohort adaptation [PAGE 13]. 2-strike bias [PAGE 14]. FISZ [PAGE 17]. Pitcher/batter effects [PAGE 17-18]. Robot zone [PAGE 19].
Gray-zone audit: Eq2 missing from extracted text; don't hallucinate exact functional form. Eq1 garbled; reconstructed. Cost function not fully specified. Gaussian tail for 2-strike p is model-based; multiple comparisons across seasons/handedness? Paper says consistent across all data [PAGE 15]. Height normalization uses Statcast top/bottom; no measurement error propagation. Pitch tracking change 2017 ignored [PAGE 2]. Umpire change assumption. Catcher full game. Sample thresholds. No weather/biomechanics. IOU against official zone presumes official target, but paper says official definition unchanged [PAGE 14]. Need not overstate causality. 
</THINK_TRACE>

Need "gray-zone audit" enough.

<SOURCE_OPERATORS_AND_EQUATIONS>
Need formal.

Define grid cell \(C_{ij}=[x_i,x_i+\Delta x)\times[z_j,z_j+\Delta z)\), \(\Delta x=\Delta z=1\) cm [PAGE 5]. Let \(N^S_{ij}\), \(N^B_{ij}\). \(S_{ij}=...\). Units dimensionless. Bernoulli variance. Weight. If \(N=0\) undefined; if \(S=0,1\) variance zero. Need smoothing. 
Height normalization equation \(z' = 49 + (z-z_b)/(z_t-z_b)(104-49)\). cm. Singular \(z_t=z_b\), missing. 
Sigmoid: \(s(u;\alpha,\beta)=[1+e^{-\beta(u-\alpha)}]^{-1}\), \(\alpha\) cm, \(\beta\) cm^{-1}. Admissible surface:
\(P(x,z;\theta)=\mathrm{clip}_{[0,1]}\{(s(x;\alpha_{xL},\beta_{xL})-s(x;\alpha_{xR},\beta_{xR}))(s(z;\alpha_{zB},\beta_{zB})-s(z;\alpha_{zT},\beta_{zT}))\}\).
Need note exact Eq 2 not extracted, this is consistent with prose [PAGE 6]. If using product logistic maybe. Need define \(\theta=(\alpha_{xL},\beta_{xL},\alpha_{xR},\beta_{xR},\alpha_{zB},\beta_{zB},\alpha_{zT},\beta_{zT})\).
Cost:
\(C(\theta)=\sqrt{\frac{1}{M}\sum_{ij}w_{ij}(S_{ij}-P_{ij})^2}\), \(w_{ij}=1/\hat v_{ij}\), \(\hat v_{ij}=S_{ij}(1-S_{ij})/N_{ij}\) or smoothed. Unitless. Singular. Log-likelihood in nats:
\(\ell=\sum N^S\log P+N^B\log(1-P)\). Entropy \(H_2(S)\) bits. 
Strike zone rectangle from alphas:
\(Z_{ump}=\{(x,z): \alpha_{xL}\le x\le \alpha_{xR}, \alpha_{zB}\le z\le \alpha_{zT}\}\). Width \(W=\alpha_{xR}-\alpha_{xL}\), height \(H=\alpha_{zT}-\alpha_{zB}\), area \(A=WH\) cm^2, aspect \(A_r=W/H\). IOU. FISZ.
Bootstrap: \(\hat\theta^{(b)}=F(D^{(b)}_n)\), empirical interval. 2-strike test \(T=Area(D_{2S})-Area(D_{0/1})\); source says 2008 2-strike "more than 400 cm2 smaller" [PAGE 14]. 
Breakdown regimes list.

Need include quotes. Good.

<RETROCAUSAL_GENEALOGY>
Need historical lineage with citations. PITCHf/x 2007 [PAGE 2]. Carruth 2012, Roegele 2013 1-inch grid, Ben-Porat 2019 superellipse, Umpire Scorecards EUZ KDE Bayes [PAGE 2]. This paper extends. Retrocausal: current probability surface reinterprets prior binary contour methods; measurement instrument lineage. Multi-week traps: 2017 tracking change, 2023 RetroSheet missing, rulebook unchanged, lefty strike disappearance, cohort adaptation, 2-strike bias stable, sample size. Need mention "retrocausal genealogy" as how later full-surface method can retro-explain earlier 50% contours as alpha-level contours; earlier "ellipse" and "superellipse" are coarser projections. Need cite quotes. Good.

<RECURSIVE_THEORY_OF_MIND>
Need "crisis habit regression vs counter-trap vs clock." Discuss:
- Crisis habit regression: 2-strike count = high-pressure state; umpire's learned habit narrows top/bottom; source says "The 2-strike bias is primarily a bias against high and low strikes" [PAGE 16].
- Counter-trap: catcher framing. If umpire baseline already broad, FISZ attributes to catcher? Need "Framing-Induced Strike Zone" [PAGE 17]. Counter-trap is reciprocal: catcher models umpire; pitcher models catcher; batter models zone; analyst must not confuse induced zone with umpire baseline. Jose Molina largest FISZ [PAGE 17].
- Clock: season/tenure cohort adaptation [PAGE 13]; lefty strike disappears 2017 [PAGE 11]; automated zone target [PAGE 19]. Recursive beliefs: umpire updates from league feedback; cohorts. Formal maybe Bayesian update:
\(P_{t+1}(U)=P_t(U)+\eta \cdot \delta_{cohort}\)? Hmm not necessary. But maybe include simple recursive belief equation:
\(b_{t+1}^{U}(Z)= (1-\eta)b_t^{U}(Z)+\eta \ell(Z|H_t,C_t,B_t,count)\). No need. Need avoid toy. Could state qualitative.

Need "counter-trap" maybe in adversarial ML sense: If you optimize robot target to current umpire surface, catchers/pitchers adapt and trap the model; need counterfactual. Good.

<CROSS_LAYER_VETO_ADJUDICATION>
Need formal veto proof. State layers:
Physical: 2D center-of-mass cross-section, width 50.6 cm, 3D prism [PAGE 4]; model cannot see spin, seam, movement, weather. 
Biomechanical: batter stance/height normalization [PAGE 4]; Judge 6'7" [PAGE 18-19]; Soto stance [PAGE 18]; catcher receiving mechanics absent; pitcher arsenals [PAGE 17]. 
Weather: no variables in source; cannot adjudicate. 
Veto criterion: If \(\Delta_{obs}\) <= \(u_{meas}\) or omitted variable W correlated with treatment, causal claim vetoed. In formal terms:
\(\mathbb{E}[Y|X]-\mathbb{E}[Y]\) vs \(\mathbb{E}[Y|do(X)]\); need \(Y\perp W|X\). Not satisfied. 
Need cite missing data [PAGE 3 footnote], tracking change [PAGE 2 footnote], umpire change [PAGE 3], catcher full game [PAGE 17 footnote]. 
Breakdown regimes: thin cells, top=bottom, missing location/umpire, subgroup thresholds. 
Need "proof" maybe "The paper only identifies a descriptive probability surface; any biomechanical/weather explanation is underdetermined." Good.

<RLVR_COUNTERFACTUAL_VETOES>
Need three scenarios with predictions. 
1. Spatial label permutation null:
- Construct \(D^\pi\) by permuting \(N^S_{ij}\) across occupied cells while holding \(N_{ij}\) fixed; fit same pipeline. Verifiable reward: recovery of width 57.7 cm? Actually if permuted, surface should not recover. Prediction: \(W\) near unconstrained/0, IOU near 0? Need precise. Maybe "fitted surface will fail the paper's structural invariants: area will not be within the reported 3,146–3,156 cm^2 band [PAGE 8], and LHB shift 3.9 cm [PAGE 9] will vanish." If it does recover, veto the pipeline as leakage/overfit. 
2. Pre/post-2017 holdout:
- Fit on 2008-2016, predict 2017-2022 zone centroids. If 2017 tracking change or cohort replacement drives lefty shift, pre-2017 model won't predict post-2017; if adaptation, cohort trajectories predict. Prediction: post-2017 lefty shift should shrink toward zero; source says "largely disappears starting with 2017" [PAGE 11]. If holdout shows no shrinkage, veto measurement-change explanation? Hmm. Need verifiable. 
3. 2-strike bias out-of-sample:
- Fit 0-1 strike pitches; evaluate area on 2-strike pitches. Prediction: 2-strike zone smaller by >400 cm^2 in 2008 and outside 95% bootstrap envelope; if not, bias is artifact. Source: "more than 400 cm2 smaller" [PAGE 14]. 
Need include metrics and thresholds. Good.

Need final no extra outside. Ensure word count maybe 3500. Need avoid "odds". Check final. Let's write polished. Need in XML, use escaped? LaTeX has < >? In XML, we must escape < and >? Since final is XML-like, text containing \(...\) with < could break? The evaluator may not parse XML strictly. But to be safe use \lt, \gt or avoid < in equations? We can use \(\alpha_{xL} \le x \le \alpha_{xR}\). Use \le not <. Good. Use \(\mathrm{clip}_{[0,1]}\). Avoid raw <. Use \Delta. Good.

Need use [PAGE N] markers exactly. Good.

Need include "verbatim quotes" with quotes. Good.

Need no "spread" word. Check. "dispersion" yes. "sum" not total. Avoid "total" maybe. Use "sum of eight". Good. "overlap" fine. "line" geometric fine. "bet" no. "odds" no. "spread" no. "totals" no. "moneylines" no. Good.

Need maybe "probability surface" not "odds". Good.

Need "SI/information/probability units" yes.

Potential issue: The phrase "1 chance in 10104" includes "chance" not odds. Fine.

Need exact quote from page 14: "the 2-strike bias is very, very real." Good.
Need exact quote from page 13: "Umpires who started at the same time move together as cohorts" maybe capitalization. Good.
Need exact quote from page 19: "Using the best-fit strike zone from across the umpire corps as the target for a ‘robot umpire’ would preserve the zone as it’s currently called" Good.

Need maybe mention "Equation 2 omitted" in source operators. Good.

Need maybe mention "unknown authors" not needed.

Need final now.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s inferential chain must be reconstructed step by step rather than accepted as a single claim. First, the data layer: Statcast supplies “the precise location of 10.5 million pitches” and “Approximately half of those pitches—or 5,307,386—were called either a ball or a strike” [PAGE 2]. Umpire identity is joined from RetroSheet under the stated assumption that “The umpire does not change within the game” [PAGE 3]. Second, the geometry layer: the official zone is a “3-dimensional pentagonal prism,” but pitch data are measured where “the center mass of the ball crosses the front of home plate,” so the analysis flattens it to a rectangle [PAGE 4]. The horizontal official width is explicitly \(43.2+2(3.7)=50.6\) cm [PAGE 4]. Height is normalized because batters have different stances; the source uses average top 104 cm and bottom 49 cm [PAGE 4]. Third, the grid layer: data are binned into “1 cm by 1 cm square cells” [PAGE 5], and each cell’s strike fraction is the ratio in Equation 1 [PAGE 5]. Fourth, the uncertainty layer: the paper explicitly warns that cell-level samples are heteroscedastic and that “utilizing the heteroscedastic errors present in each cell location during the fitting process is necessary to mitigate noise introduced by small(er) sample sizes” [PAGE 5]. Fifth, the surface layer: the fitted form has “two sigmoids in the x direction and two in the y direction” and “eight free parameters” [PAGE 6]. The alpha terms define where the surface equals 0.5, and the beta terms define steepness [PAGE 6-7]. Sixth, the optimization layer: gradient descent via scipy is used with a custom cost that normalizes distances before computing RMS error [PAGE 6]. Seventh, the extraction layer: a rectangle is read from the alpha positions; the collective fit is “57.7 cm wide–7.1 cm wider than the official MLB zone width” and shifted “1.6 cm to the left” [PAGE 7]. Eighth, validation: LHB and RHB areas are nearly identical, 3,156 vs. 3,146 sq. cm, while the LHB midpoint shifts 3.9 cm outside [PAGE 8-9]. Ninth, sensitivity: 100 random fits per sample size show decreasing variation as \(n\) rises, down to 1,000-pitch samples [PAGE 10]. Tenth, time series: width narrows “nearly 14%, from 63 to 54 cm,” and the “lefty strike” largely disappears after 2017 [PAGE 11]. Eleventh, evaluation: IOU between each umpire’s fitted rectangle and the official zone clusters around 84 percent, with a range of 70 to 90 percent [PAGE 12]. Twelfth, behavior: the 2-strike zone is “more than 400 cm2 smaller” in 2008 and remains an outlier [PAGE 14]. Thirteenth, player effects: Jose Molina has the largest FISZ [PAGE 17], and Aaron Judge’s bottom zone sits at 42.8 cm [PAGE 18].

The gray-zone audit is where the analysis must be cautious. The extracted source does not render Equation 2; the prose states the structure but not the exact algebra [PAGE 6]. Therefore one must not invent the missing equation and then pretend it is verbatim. Equation 1 is also typographically garbled in extraction, but its meaning is clear: strike fraction is called strikes divided by called strikes plus called balls [PAGE 5]. The custom cost function is described only as normalizing distances between data and candidate surface before summing RMS errors [PAGE 6]; the exact normalization is not in the extracted text. The 2-strike test depends on fitting a Gaussian to a bootstrap histogram: the source says “If you were to fit a gaussian distribution to the blue histogram,” then reports an extreme tail value [PAGE 14]. That is a model-based tail statement, not a distribution-free proof. There are also design limits: pitch-tracking changed from PITCHf/x to Statcast/TrackMan in 2017, and the paper says “we ignore those measurement effects” [PAGE 2, footnote 1]. RetroSheet 2023 umpire data were unavailable [PAGE 2, footnote 2]. Catcher analysis assumes the starting catcher plays the entire game [PAGE 17, footnote 5]. Height normalization depends on Statcast’s reported top and bottom; if those are missing or degenerate, the transformed \(z\) is undefined. Subgroup fits impose 1,000-pitch umpire thresholds and 100-pitch batter/pitcher thresholds [PAGE 3]. The paper’s own sensitivity study warns that small samples place “limits on the strengths of any conclusions based on small subsets of the data” [PAGE 9-10]. Finally, the model identifies a descriptive probability surface, not a causal mechanism: weather, release mechanics, catcher receiving technique, and pitch design are not covariates in the source. That absence is a veto against strong physical/biomechanical/weather attribution. The right conclusion is that the paper provides a strong descriptive instrument and a defensible null-testing framework, but not a fully identified causal model of why the surface has its shape.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source defines a spatial probability operator on a 1 cm by 1 cm grid: \(C_{ij}=[x_i,x_i+\Delta x)\times[z_j,z_j+\Delta z)\), with \(\Delta x=\Delta z=1\ \mathrm{cm}\) [PAGE 5]. Let \(N^{S}_{ij}\) and \(N^{B}_{ij}\) be called strikes and called balls in cell \((i,j)\). Equation 1 is, in reconstructed form,
\[
S_{ij}=\frac{N^{S}_{ij}}{N^{S}_{ij}+N^{B}_{ij}},\qquad S_{ij}\in[0,1],
\]
where the source states the strike percentage as called strikes divided by called strikes plus called balls [PAGE 5]. The cell count is \(N_{ij}=N^{S}_{ij}+N^{B}_{ij}\). Under a Bernoulli model, the cell variance is
\[
v_{ij}=\frac{S_{ij}(1-S_{ij})}{N_{ij}},
\]
which is dimensionless. The inverse-variance weight is \(w_{ij}=1/v_{ij}=N_{ij}/[S_{ij}(1-S_{ij})]\). This is the formal expression of the source’s statement that “utilizing the heteroscedastic errors present in each cell location” is necessary [PAGE 5]. Exact breakdown regimes: \(N_{ij}=0\) gives undefined \(S_{ij}\) and \(v_{ij}\); \(S_{ij}=0\) or \(S_{ij}=1\) gives zero Bernoulli variance and infinite inverse-variance weight unless smoothing or interval estimation is used. The paper’s grid is therefore mathematically well-behaved only where cells are occupied and not deterministic after smoothing.

Height normalization is a piecewise affine map. With reported bottom \(z_b\) and top \(z_t\), and average frame \(z_b^{\mathrm{avg}}=49\ \mathrm{cm}\), \(z_t^{\mathrm{avg}}=104\ \mathrm{cm}\) [PAGE 4],
\[
z'=z_b^{\mathrm{avg}}+\frac{z-z_b}{z_t-z_b}\left(z_t^{\mathrm{avg}}-z_b^{\mathrm{avg}}\right).
\]
Units are cm. Exact breakdown: \(z_t-z_b=0\), or missing top/bottom, makes \(z'\) undefined. This matters because the source says each batter’s zone is normalized into the average height frame [PAGE 4].

The fitted surface is described as having “two sigmoids in the x direction and two in the y direction” and “eight free parameters” [PAGE 6]. A sigmoid can be written
\[
s(u;\alpha,\beta)=\frac{1}{1+\exp[-\beta(u-\alpha)]},
\]
where \(u\) and \(\alpha\) are in cm and \(\beta\) is in \(\mathrm{cm}^{-1}\). The alpha parameters are “positional terms that define where the value of the surface is 0.5—or a 50% chance to be called a strike” [PAGE 6]. Because the rendered Equation 2 is absent from the extracted text, the following is an admissible gated-logistic representation consistent with the prose, not a verbatim transcription:
\[
P(x,z;\theta)=\mathrm{clip}_{[0,1]}\left\{
\left[s(x;\alpha_{xL},\beta_{xL})-s(x;\alpha_{xR},\beta_{xR})\right]
\left[s(z;\alpha_{zB},\beta_{zB})-s(z;\alpha_{zT},\beta_{zT})\right]
\right\},
\]
with
\[
\theta=(\alpha_{xL},\beta_{xL},\alpha_{xR},\beta_{xR},\alpha_{zB},\beta_{zB},\alpha_{zT},\beta_{zT}).
\]
The source states that the two sigmoids in each dimension “account for the rise and then fall of the strike probability” [PAGE 6]. The exact singularity here is a parameter degeneracy: if two alpha terms coincide or if a beta term goes to zero, the gate collapses or becomes flat, and the fitted “edge” is not identified.

The source’s custom cost is a weighted RMS-style objective. A formal representation is
\[
C(\theta)=\sqrt{\frac{1}{M}\sum_{ij}w_{ij}\left(S_{ij}-P(x_i,z_j;\theta)\right)^2},
\]
where \(M\) is the number of occupied cells and \(w_{ij}\) is an inverse-uncertainty weight. The paper says the optimizer “normalized distances between the data points and a candidate fitted surface before summing them” and used RMS between data and successive fitted surfaces [PAGE 6]. A diagnostic Bernoulli log-likelihood, in nats, is
\[
\ell(\theta)=\sum_{ij}\left[N^{S}_{ij}\log P_{ij}+N^{B}_{ij}\log(1-P_{ij})\right],
\]
with \(P_{ij}=P(x_i,z_j;\theta)\). The binary entropy in bits is
\[
H_2(S)=-S\log_2 S-(1-S)\log_2(1-S).
\]
These are information-unit diagnostics; the source’s actual optimizer is the weighted RMS procedure, not a claim of exact MLE.

The fitted rectangle is extracted from the alpha positions:
\[
Z_{\mathrm{ump}}=\{(x,z):\alpha_{xL}\le x\le \alpha_{xR},\ \alpha_{zB}\le z\le \alpha_{zT}\}.
\]
Then width \(W=\alpha_{xR}-\alpha_{xL}\) cm, height \(H=\alpha_{zT}-\alpha_{zB}\) cm, area \(A=WH\) in \(\mathrm{cm}^2\), and aspect ratio \(A_r=W/H\), dimensionless. The source reports the collective fit as 57.7 cm wide and 56.1 cm tall [PAGE 7]. The IOU operator is
\[
\mathrm{IOU}=\frac{|Z_{\mathrm{ump}}\cap Z_{\mathrm{MLB}}|}{|Z_{\mathrm{ump}}\cup Z_{\mathrm{MLB}}|},
\]
dimensionless, as defined in Equation 3 [PAGE 12]. The source reports IOU from 70 to 90 percent with clustering near 84 percent [PAGE 12]. Breakdown occurs if the union has zero area, which is not a practical concern for fitted rectangles but is a formal denominator singularity.

The sensitivity operator is a bootstrap-style refit. For data subset \(D\) and sample size \(n\), draw \(D^{(b)}_n\), fit \(\hat\theta^{(b)}=F(D^{(b)}_n)\), \(b=1,\dots,B\). The empirical envelope of \(A(\hat\theta^{(b)})\) gives the sampling-noise band [PAGE 10]. The 2-strike test compares the observed area \(A(D_{2S})\) to the refit distribution \(A(D^{(b)}_{n_{2S}})\) from all counts at the same sample size [PAGE 14]. The source reports the 2008 two-strike zone “more than 400 cm2 smaller” [PAGE 14]. The FISZ operator is
\[
\mathrm{FISZ}_{c}=A(Z_{\mathrm{ump},c})-A(Z_{\mathrm{ump,avg}}),
\]
in \(\mathrm{cm}^2\), where \(c\) indexes catcher [PAGE 17]. Jose Molina’s FISZ is reported as roughly 3,400 cm2, “more than 300 cm2 larger than the average strike zone for the season” [PAGE 17]. Exact breakdown regimes for all these operators include: sparse grid cells after subgrouping; deterministic cells with \(S=0\) or \(1\); missing pitch location or umpire identity [PAGE 3, footnote 4]; height-normalization denominator zero; and rectified alpha parameters that fail to produce a closed rectangle.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage is explicit. PITCHf/x in 2007 made pitch-by-pitch location public [PAGE 2]. Carruth in 2012 defined the zone as the area with at least a 50% strike probability and found an approximately elliptical best fit [PAGE 2]. Roegele in 2013 used “a grid of one by one inch squares” and defined the zone as grid squares where more than 50% of pitches were strikes; the resulting zones were “more rectangular than Carruth’s ellipses” [PAGE 2]. Ben-Porat in 2019 used a superellipse approximation [PAGE 2]. The Umpire Scorecards team used kernel density estimation and Bayes’s Theorem to derive an Estimated Umpire Zone as “the 50% contiguous contour line of the probability strike function” [PAGE 2]. This paper’s probability surface is therefore a retrocausal generalization: earlier “50% contour” methods are special slices of the same underlying object. The full surface contains the contour, but also the steepness, the alpha edges, the beta transitions, and the cell-level uncertainty.

The genealogy also exposes multi-week and multi-season traps. First, the measurement instrument changes: “MLB changed its pitch tracking system from PITCHf/x to Statcast/TrackMan starting with the 2017 season,” and the paper says “we ignore those measurement effects” [PAGE 2, footnote 1]. A researcher who treats 2008-2022 as one homogeneous measurement regime can mistake instrument drift for umpire adaptation. Second, the “lefty strike” is not static: it “largely disappears starting with the 2017 season” [PAGE 11]. That is a regime change that must be modeled, not averaged away. Third, the source says umpire cohorts “move together as cohorts” and that “new additions to the umpire corps are generally adapting to the existing zone rather than driving the changes” [PAGE 13]. This is a cohort-clock process: tenure and season are entangled. Fourth, the 2-strike bias is described as “consistent through time and changing strike zones” [PAGE 15], so a short-window study can either miss it or overstate its magnitude. Fifth, the 2023 RetroSheet umpire data were unavailable [PAGE 2, footnote 2], which is a recency trap for replication. Sixth, the official rulebook definition is treated as fixed across the data, so IOU comparisons are anchored to a stable target [PAGE 14]. The retrocausal lesson is that later surface methods can reinterpret earlier contour methods, but they can also retroactively absorb measurement changes and cohort effects unless those are separated by explicit clock variables.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The umpire is not a passive ruler; the umpire is an agent modeling the pitcher, catcher, batter, count, and game context. The paper’s strongest behavioral result is the 2-strike bias: the two-strike zone is smaller, and the source says “The 2-strike bias is primarily a bias against high and low strikes” [PAGE 16]. In recursive terms, the count is a crisis cue. Under crisis, the umpire’s habit regression is to tighten the top and bottom of the zone rather than to invent a new rule. The source reports the 2008 two-strike fitted area as “more than 400 cm2 smaller” than the all-count refit distribution [PAGE 14]. That is a habit-regression signature: the instrument does not become random; it becomes more conservative on the most contestable vertical edges.

The counter-trap is catcher framing. The paper defines the Framing-Induced Strike Zone as the difference between the umpire’s average zone and the zone observed with a particular catcher [PAGE 17]. Jose Molina has the largest FISZ, with a zone “more than 300 cm2 larger than the average strike zone for the season” [PAGE 17]. The recursive trap is that the catcher is also modeling the umpire: the catcher’s receiving position, glove path, and timing are actions designed to shift the umpire’s perception. If an analyst attributes the whole enlarged zone to catcher skill without controlling for umpire identity, season, batter handedness, and count, the analyst confuses a counterfactual intervention with a baseline prior. The correct counter-trap test is within-umpire: compare the same umpire with and without the catcher, not only the catcher’s raw zone to a league average.

The clock is the slow recursive layer: season, tenure, cohort, and policy. The source shows that “Umpires who started at the same time move together as cohorts” and that new umpires adapt to the existing zone rather than driving change [PAGE 13]. The lefty strike’s disappearance after 2017 [PAGE 11] is a clock effect that can be produced by cohort replacement, adaptation, measurement change, or all three. The automated-pitch discussion adds a final recursion: “Using the best-fit strike zone from across the umpire corps as the target for a ‘robot umpire’ would preserve the zone as it’s currently called” [PAGE 19]. That is a policy feedback loop. If players know the robot target is the historical human surface, they will adapt their approach to that surface, which then changes the data used to update the target. A static recursive model will be trapped; a proper model needs a clock variable and counterfactual intervention logic.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The physical-layer veto begins with geometry. The official zone is a “3-dimensional pentagonal prism,” but the data are measured at “the point the center mass of the ball crosses the front of home plate,” so the paper flattens the problem to a rectangle [PAGE 4]. The horizontal official width is explicitly 50.6 cm after adding baseball radius [PAGE 4]. This means the surface cannot directly adjudicate seam orientation, spin-induced movement, or 3D plate coverage; it adjudicates the center-of-mass crossing distribution. Any claim that a fitted edge is caused by a specific pitch-design physical mechanism is underidentified unless release, movement, and seam data are added.

The biomechanical-layer veto is equally strong. Height normalization uses Statcast top and bottom and maps each batter into an average frame with bottom 49 cm and top 104 cm [PAGE 4]. The source itself notes that Aaron Judge’s “6’7” frame probably distorts the umpire’s perception from a crouched position” [PAGE 18-19]. It also notes that Juan Soto’s zone is nearly 5 cm taller and suggests “Soto’s wider/lower stance in his 2-strike approach” [PAGE 18]. These are biomechanical hypotheses, not identified mechanisms. Catcher receiving mechanics are also not measured; the catcher analysis assumes “the catcher that starts the game plays the entire game” [PAGE 17, footnote 5]. Therefore a FISZ difference cannot be cleanly decomposed into catcher skill, umpire prior, pitcher arsenal, and game state without additional layers.

The weather-layer veto is a non-identification proof: the source contains no weather covariates, no temperature, humidity, wind, or precipitation variables. A model that omits weather cannot estimate a weather effect. Formally, the observed conditional surface is \(\mathbb{E}[Y\mid X]\), not \(\mathbb{E}[Y\mid do(X)]\). If an omitted variable \(W\) is correlated with \(X\), then
\[
\mathbb{E}[Y\mid X]-\mathbb{E}[Y]\neq \mathbb{E}[Y\mid do(X)]-\mathbb{E}[Y].
\]
The source’s own caveats reinforce this: “A small fraction of data records were incomplete, missing pitch position information and/or details about the umpire” [PAGE 3, footnote 4]; pitch-tracking effects are ignored [PAGE 2, footnote 1]; and umpire changes within a game are treated as exceptional [PAGE 3]. The cross-layer veto is therefore: no physical, biomechanical, or weather causal claim is licensed unless the effect survives measurement-error propagation, height-normalization sensitivity, cohort/season controls, and omitted-variable checks. The paper passes as a descriptive probability-surface instrument; it does not pass as a causal biomechanics or weather model.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: spatial-label permutation null. Construct \(D^{\pi}\) by permuting the cell strike counts \(N^{S}_{ij}\) across occupied cells while holding each cell’s \(N_{ij}\) fixed, then refit the same pipeline. Verifiable prediction: the fitted rectangle should fail to recover the reported structure—width near 57.7 cm, area near the 3,146-3,156 sq. cm band, and the 3.9 cm LHB midpoint shift [PAGE 7-9]. If the pipeline still recovers those values, the surface is reading leakage or overfitting rather than spatial signal. This is a direct reward-check on the model’s structural claims.

Scenario 2: pre-2017 to post-2017 holdout. Fit on 2008-2016 and predict the 2017-2022 zone centroid and width, especially the lefty-strike shift. Verifiable prediction: if the post-2017 change is driven by cohort adaptation, the pre-2017 cohort trajectory should predict a shrinking lefty shift; if it is driven by the PITCHf/x-to-Statcast measurement change, the pre-2017 fit should fail out-of-sample. The source gives a sharp target: the lefty strike “largely disappears starting with the 2017 season” [PAGE 11], and cohorts “move together as cohorts” [PAGE 13]. A holdout that shows no shrinkage or a discontinuous jump at 2017 would veto a pure-adaptation explanation; a holdout that shows smooth cohort tracking would veto a pure-measurement explanation.

Scenario 3: two-strike bias out-of-sample. Fit the surface on 0-or-1-strike pitches only, then evaluate held-out 2-strike pitches. Verifiable prediction: in 2008 the 2-strike fitted area should be more than 400 cm2 smaller than the matched bootstrap distribution [PAGE 14], and the effect should remain outside the empirical envelope across seasons [PAGE 15]. If the held-out two-strike surface is statistically indistinguishable from the 0-or-1-strike surface, the claimed crisis-habit regression is vetoed. If it is smaller but only on the vertical edges, the source’s mechanism claim—“primarily a bias against high and low strikes” [PAGE 16]—is supported. These three counterfactuals are verifiable because each has a pre-registered metric: area in \(\mathrm{cm}^2\), IOU, centroid shift in cm, and bootstrap-envelope inclusion or exclusion.
</RLVR_COUNTERFACTUAL_VETOES>