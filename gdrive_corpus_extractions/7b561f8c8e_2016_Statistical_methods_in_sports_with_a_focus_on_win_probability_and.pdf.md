---
source: "2016 Statistical methods in sports with a focus on win probability and.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 71
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4761
---

<NATIVE_REASONING>
The user wants me to act as the GSE + GSI Frontier Reasoning Foundry and analyze a 71-page source PDF (Dennis Lock's 2016 dissertation on statistical methods in sports, win probability, and performance evaluation). They provided the full source text across pages 1-71.

Strict invariants:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds. Wait, the source text itself mentions "Las Vegas point spread" many times. The invariant says NEVER mention spreads, totals, moneylines, or odds. This is tricky because the source text literally uses "Spread" as a predictor variable. However, the instruction is strict: "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." I must comply with this invariant even if the source mentions it. I should not mention spreads/betting lines. I need to refer to "pre-game team quality differential" or similar neutral terms instead of "spread". I must avoid the word "spread" entirely if it refers to betting lines. Actually the source uses "Spread" as "Las Vegas pre-game point spread". I should probably refer to it as "pre-game team quality differential" or just avoid it. But I need to cite page markers and verbatim quotes from source pages. If I quote text containing "Spread", I might violate. I can paraphrase and use brackets to replace? The instruction says "Never mention spreads...". I will avoid using the word "spread" or any betting terminology. I can say "pre-game expected scoring margin" or similar. I need to be careful.

2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.

3. >= 1,000-WORD DEPTH across exact XML sections:
<THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to produce a comprehensive analysis following these sections. Total depth >= 1000 words across sections. THINK_TRACE alone >=400 words.

Let me plan content:

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit.
- Discuss the three-chapter structure: RF win probability (NFL), extension to NHL/NBA + Wins Added, informative missingness for FG kickers.
- Multi-hop: how WP estimation feeds into ∆WP, which feeds into coaching decisions, which feeds into missingness mechanism for kicker attempts, which feeds into adjusted FG%.
- Gray zones: observational data confounding (coach decision not random), independence violation (sequential plays within game), nodesize tuning, extrapolation risk for kickers with few long attempts, shrinkage towards zero vs towards shift-count mean, calibration bins (r=0.998 etc.), MSE decreasing by quarter, variable importance permutation method, interactions between success probability and importance.
- No betting lines terminology.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown.
- Cite exact pages with [PAGE N].
- Verbatim quotes where possible.
- Equations: Random forest regression tree splitting criterion: sum of squared errors ∑∑(yi - ȳk)^2. Win probability estimate as average of terminal node responses. ∆WP = WP(Field Goal Made) - WP(Facing Fourth Down) [PAGE 56]. IM model: yik|θik ~ Bernoulli(θik), Φ(θik) = x'ikβ + z'ikvk, vk ~ N(0, Σv) [PAGE 53]. Missingness: mik|πik ~ Bernoulli(πik), Φ(πik) = ω'ikα where ωik = (1, x'ikβ + z'ikvk, w'ik)' [PAGE 53]. Wins Added hierarchical model: ∆WPi = H + XHi β - XVi β + εi [PAGE 40]. βj iid ~ N(0, σ²/λ), εi ~ N(0, σ²). Adjusted FG% definition [PAGE 52]. Performance metrics: MAE, MSE table [PAGE 50]. Calibration correlation r values [PAGE 38]. Variable importance permutation: average increase in squared error [PAGE 22].
- Units: probability [0,1], seconds, yards, shifts count, posterior credible intervals.
- Breakdown regimes: nodesize=5 default too small for sequential dependence; separate forests by second decreased performance; extrapolation beyond observed distance range (Hartley 2 kicks >50 yards); shrinkage parameter λ=100; breakdown when missingness not at random (NMAR) vs MAR.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
- Lindsey (1961) baseball progress of score [PAGE 15]. Stern (1994) Brownian motion soccer [PAGE 33]. Burke's Advanced NFL Stats empirical binning [PAGE 15]. Breiman (2001) random forests [PAGE 16]. Liaw & Wiener (2002) R package [PAGE 18]. Buttrey et al. (2011) NHL scoring rates [PAGE 15]. Pettigrew (2015) NHL shooters win probabilities [PAGE 40]. Deshpande & Jensen (2016) NBA impact [PAGE 40]. Copas & Farewell (1998) enthusiasm to respond [PAGE 41]. Little & Rubin (2002) MAR/NMAR [PAGE 54]. Multi-week traps: retraining after each week [PAGE 29], coach-kicker confounding across all three seasons [PAGE 55], season-to-season nonstationarity, momentum discounting papers [PAGE 28].

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- This section seems to ask for a game-theoretic / recursive theory of mind: what does the coach think the opponent thinks, etc. "Crisis habit regression" = under pressure, coaches revert to conservative habits (kicking FG even when it lowers WP). "Counter-trap" = using WP to identify when declining penalty or going for it is better. "Clock" = time remaining as state variable, nonlinear value of score (AdjustedScore with γ=1/2).
- Discuss crisis habit regression: coaches kick FGs despite WP decrease [PAGE 16, 58]. Counter-trap: random forest baseline suggests accepting penalty or going for 4th down [PAGE 16]. Clock: WP changes little until 4th quarter [PAGE 21]; AdjustedScore(γ) = Score/(Seconds+1)^γ, γ=1/2 selected [PAGE 19]. Recursive theory of mind: coach's decision depends on perceived kicker success prob which depends on missingness indicator; the coach models the kicker, the analyst models the coach's model.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical layer: kick distance 17 yards + line of scrimmage to goal line [PAGE 55]. Surface: grass vs synthetic vs mix [PAGE 55]. Precipitation: clear, rain, snow [PAGE 55]. Weather veto: snow/rain indicators negative but wide CIs [PAGE 57]; synthetic positive [PAGE 57]. Biomechanical: kicker-specific intercepts and slopes z'ik = (1, dik) [PAGE 56]. Janikowski 102/105 on grass, 95/105 clear [PAGE 56]; Hartley 16/44 grass, all clear dome [PAGE 56]. Veto: conditions with few observations cannot reliably determine sign (wide CIs) [PAGE 57]. Physical constraints: longest attempt 76 yards [PAGE 54]; fourth down only; made FG must not decrease WP [PAGE 54].

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning from Verifiable Rewards? Or just verifiable scenarios. I'll interpret as verifiable counterfactual veto scenarios where the model would be vetoed or corrected.
1. Scenario: Kicker with <3 attempts >50 yards (Hartley had 2). SLR requires dangerous extrapolation [PAGE 61]. Veto: Do not compare long-range accuracy without IM/HPR shrinkage; prediction: IM will show Janikowski dominates Hartley at 50 yards (0.73 vs 0.58) [PAGE 63].
2. Scenario: Coach declines FG when ∆WP near zero or negative; missingness is NMAR. Veto: Ignoring missing attempts biases kicker ability [PAGE 41]. Prediction: IM posterior standard deviations lower than HPR/SLR (Table 4.2) [PAGE 50].
3. Scenario: Sequential observations within same game violate independence. Veto: Separate forests by second/down decreased performance or no improvement [PAGE 28-29]. Prediction: nodesize=200 (NFL) mitigates but does not eliminate; test accuracy remains high (r=0.998 NFL) [PAGE 38].

Word count: Need >=1000 words total. THINK_TRACE >=400. I'll write substantial content in each.

Important: No betting lines. I must avoid "spread", "moneyline", "total", "odds". The source has "Spread". I will refer to it as "pre-game team quality differential" or "pre-game expected margin" and if quoting, I might need to avoid quoting the word or use [pre-game quality differential] in brackets. But the instruction says cite verbatim quotes. I can quote small snippets that don't contain the forbidden word, or paraphrase. I'll avoid the word entirely.

Let's draft carefully.

THINK_TRACE:
Start with the dissertation's architecture. Chapter 2: random forest regression on NFL play-by-play, n=430,168 plays, p=10 predictors, response binary win indicator for offense [PAGE 17]. Tuning: nodesize=200, m=2, 500 trees [PAGE 19]. Calibration: binned estimated WP vs actual proportion, r=0.998 [PAGE 20]. MSE by quarter decreasing 0.201->0.107 [PAGE 20]. Variable importance via permutation: increase in squared error; Score most important overall, Spread (pre-game differential) most important in Q1 [PAGE 22-23]. ∆WP for coaching decisions [PAGE 16].

Chapter 3: extends to NHL (face-offs), NBA (substitutions). Uniform RF approach. Performance correlations r_NHL=0.996, r_NFL=0.998, r_NBA=0.997 [PAGE 38]. Wins Added hierarchical model: ∆WP shift = home advantage + player indicators + error [PAGE 40]. Shrinkage λ=100 [PAGE 41]. LeBron James example: Cleveland WA 25.8 vs Miami 11.5 [PAGE 42]. Adjusted hierarchical shrinkage towards shift-count mean α0 + α1(Sj) [PAGE 42-43].

Chapter 4: informative missingness. Kicker attempts missing not at random because coach decision relates to success probability [PAGE 50-51]. IM model: probit link, latent variables, Bernoulli response and missingness [PAGE 53]. Covariates: distance, precipitation, surface, ∆WP importance, interaction [PAGE 56]. Results: IM lower MAE/MSE than HPR/SLR [PAGE 50-51]. Adjusted FG% compares all kickers on same 2011 kick set [PAGE 52]. Hartley vs Janikowski: raw similar, adjusted diverges due to attempt distance distribution [PAGE 62-63].

Gray zones: observational confounding; independence violation (150 sequential plays per game) [PAGE 18, 28-29]; attempts limited to <=76 yards [PAGE 54]; extrapolation risk; wide credible intervals for snow/rain/mixed surface [PAGE 57]; shrinkage choices.

This will be >400 words.

SOURCE_OPERATORS_AND_EQUATIONS: Include LaTeX blocks and citations.

RETROCAUSAL_GENEALOGY: Lineage from Lindsey 1961, Stern 1994, Burke empirical, Breiman RF, Copas & Farewell, Little & Rubin. Multi-week traps: retraining weekly [PAGE 29], coach-kicker combo confounding [PAGE 55], season nonstationarity.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression (conservative FG kicks despite WP loss), counter-trap (WP baseline for 4th down, penalty decline), clock (AdjustedScore gamma=1/2, Q4 importance). Recursive levels: kicker -> coach -> analyst -> coach's belief about kicker.

CROSS_LAYER_VETO_ADJUDICATION: Physical: distance definition [PAGE 55], 76-yard cap [PAGE 54]. Biomechanical: kicker-specific slopes [PAGE 56], Janikowski vs Hartley surfaces [PAGE 56]. Weather: precipitation coefficients and CIs [PAGE 57]. Veto proof: wide CIs mean cannot veto grass vs synthetic conclusively for snow etc.

RLVR_COUNTERFACTUAL_VETOES: Three scenarios with verifiable predictions.

Now word count. I need to ensure total >=1000. THINK_TRACE ~500. SOURCE_OPERATORS ~400. Others ~200 each. Total should exceed 1500. Good.

Let's write.

Be careful with XML tags exactly as specified. No markdown code blocks? I can use LaTeX inline.

Also, the user said "DRIVE SOURCE: /GSE-Research/..." but provided text. I should treat as provided.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The dissertation under analysis is Dennis Lock’s 2016 Iowa State University Ph.D. thesis, “Statistical methods in sports with a focus on win probability and performance evaluation,” spanning 71 pages and three substantive papers. The architecture is sequential and multiplicative: Chapter 2 constructs a random-forest regression estimator for in-game NFL win probability (WP) before every play; Chapter 3 generalizes that estimator to the NHL and NBA and derives a Wins Added (WA) player metric from WP shifts; Chapter 4 uses the WP-derived importance of a made field goal as an input to an informative-missingness model for NFL field-goal kicker accuracy. Each layer feeds the next, creating a closed analytic loop in which estimated WP generates ∆WP, ∆WP generates coaching-decision benchmarks, and the coach’s observable decision to attempt or withhold a kick becomes a missingness indicator that informs kicker evaluation.

The first layer relies on 430,168 pre-play observations from 2,928 games (2001–2011 training; 2012 test), with p = 10 predictors and a binary response equal to 1 if the offensive team ultimately won [PAGE 17]. The random forest uses regression trees rather than classification trees because terminal-node predictions are proportions (empirical win frequencies) rather than hard 0/1 votes [PAGE 19]. Tuning selected nodesize = 200 (versus the R default of 5) and m = 2 candidate predictors per split, with 500 trees per forest [PAGE 19]. A derived covariate, AdjustedScore(γ) = Score / (Seconds + 1)^γ, was cross-validated over γ ∈ {0, 0.1, 0.5, 1, 1.5, 2}; γ = 1/2 minimized misclassification, reflecting the a priori fact that a fixed lead is more valuable as clock time dwindles [PAGE 19].

Performance is assessed without direct observation of true in-game WP. The method bins test-set plays by estimated WP and compares bin centers to observed win proportions; calibration correlations are r = 0.998 (NFL), r = 0.996 (NHL), and r = 0.997 (NBA) [PAGE 20, 38]. Test-set mean squared error declines monotonically by quarter (0.201, 0.177, 0.143, 0.107), consistent with information accumulation [PAGE 20]. Variable importance is computed by permutation: for each predictor, values are randomly shuffled, WP is re-predicted, and the average increase in squared error is recorded [PAGE 22]. Score difference dominates overall importance (0.13653), while the pre-game team-quality differential is most important in the first quarter (0.05361) before fading to near irrelevance by the fourth quarter (0.00459) [PAGE 22–23]. This temporal decay of pre-game information is a gray zone: the forest treats roughly 150 sequential plays per game as independent, an assumption the author acknowledges is violated and for which several adjustments (momentum terms, per-second forests, per-down forests) were tried without improving test accuracy [PAGE 18, 28–29].

Chapter 3 extends the forest to 141,937 NHL face-offs and 70,550 NBA substitutions, with test-set calibration similarly tight [PAGE 36–38]. The Wins Added metric models the change in WP over each substitution shift as ∆WPi = H + XHi β − XVi β + εi, where βj ~ iid N(0, σ²/λ) with λ = 100 chosen by cross-validation and shrinkage-trace plots [PAGE 40–41]. The hierarchical shrinkage pulls low-shift players toward the population mean, but an extended version shrinks toward α0 + α1(Sj), where Sj is shift count, because coaching playing-time decisions themselves convey information about player quality [PAGE 42–43]. LeBron James exemplifies the distinction between raw quality and contextual importance: his WA was 25.8 in Cleveland (2009–10) versus 11.5 in Miami (2010–11) [PAGE 42].

Chapter 4 introduces the Informative Missingness (IM) model. The response yik is Bernoulli with probit link Φ(θik) = x′ikβ + z′ikvk, vk ~ N(0, Σv); the missingness indicator mik is Bernoulli with Φ(πik) = ω′ikα, where ωik includes the linear predictor, the importance of a made kick ∆ik = WP(Field Goal Made) − WP(Facing Fourth Down), and their interaction [PAGE 53, 56]. Because coaches withhold attempts when perceived success probability or kick importance is low, missingness is not missing at random (NMAR); analyzing only observed kicks would overrate short-distance specialists and underrate long-distance volumetickers [PAGE 41]. The dataset excludes attempts where a made field goal would reduce WP and caps distance at 76 yards (the NFL record) [PAGE 54]. Model comparison shows IM achieves lower posterior standard deviations and lower test-set MAE/MSE than separate logistic regressions (SLR) and hierarchical probit regression (HPR) [PAGE 50–51]. Adjusted FG% averages each kicker’s estimated success probability over a common 2011 kick slate, revealing that raw FG% leaders such as John Carney can be heavily flattered by short-distance attempt selection, whereas high-volume long-distance kickers such as Sebastian Janikowski are validated [PAGE 52, 62–63].

Gray-zone audit: (1) observational confounding means coach decisions are not experimentally assigned, so WP-based coaching advice is correlational baseline, not causal proof [PAGE 26]; (2) the 76-yard cap and fourth-down-only inclusion criterion truncate the support of the kick-distance covariate, limiting extrapolation beyond observed ranges [PAGE 54]; (3) wide credible intervals for snow, rain, and mixed-surface coefficients (e.g., snow β3 mean −0.076, interval [−0.511, 0.371]) mean weather effects are not reliably signed [PAGE 57]; (4) the shrinkage parameter λ = 100 is user-specified and the shift-count adjustment α1 = 1.8×10⁻⁶ has a narrow credible interval [1.3×10⁻⁶, 2.4×10⁻⁶], so player rankings are sensitive to prior choices [PAGE 41–43]; (5) retraining weekly is proposed for future deployment, but season-to-season nonstationarity in kicker rosters and coaching aggressiveness introduces drift risk [PAGE 29, 55].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
**Random-forest splitting operator (regression trees, Chapters 2–3).**  
For a candidate predictor x and cut point c, the sum of squared errors is  
\[
SSE(x,c)=\sum_{k=1}^{2}\sum_{i\in N_k}(y_i-\bar y_k)^2,
\]  
where \(N_1=\{i:x_i\le c\}\), \(N_2=\{i:x_i>c\}\), and \(\bar y_k\) is the mean response in node k. The split minimizing SSE is chosen; recursion stops when nodesize limits are met [PAGE 17–18]. The forest prediction for a target play is the average of terminal-node response proportions over all trees, equivalent to a weighted average of historical outcomes where weights are induced by terminal-node co-membership [PAGE 18–19].

**Tuning and units.**  
NFL: n = 430,168 plays, p = 10 predictors, nodesize = 200, m = 2, J = 500 trees [PAGE 17, 19]. NHL: 141,937 face-offs, nodesize = 200 [PAGE 36]. NBA: 70,550 substitutions, nodesize = 200 [PAGE 36–37]. Response \(Y\in\{0,1\}\); win probability \(\widehat{WP}\in[0,1]\). Time in seconds; distance in yards; score in points.

**Calibration operator.**  
Test plays are binned by estimated WP in 0.05 increments; the bin center is regressed against the observed proportion of wins. Correlations: NFL r = 0.998, NHL r = 0.996, NBA r = 0.997 [PAGE 20, 38]. Test-set MSE by NFL quarter: Q1 0.201, Q2 0.177, Q3 0.143, Q4 0.107 [PAGE 20].

**Variable-importance operator.**  
For predictor k, permute its values in the test set, re-predict WP, and compute  
\[
VI_k(i)=SE^{\text{perm}}_k(i)-SE^{\text{orig}}(i),
\]  
averaged over 100 repetitions and all plays [PAGE 22]. NFL overall importance (top entries): Score 0.13653; pre-game quality differential 0.02462; Seconds 0.00657 [PAGE 22].

**Change-in-win-probability operator (Chapter 2 coaching analysis and Chapter 4 missingness input).**  
\[
\Delta ik = WP_{ik}(\text{Field Goal Made}) - WP_{ik}(\text{Facing Fourth Down})
\]  
[PAGE 56]. Large positive \(\Delta ik\) indicates a high-leverage kick; this variable enters the missingness model as the first component of \(w_{ik}\) [PAGE 56].

**Wins Added hierarchical model (Chapter 3).**  
For shift i,  
\[
\Delta WP_i = H + XH_i\beta - XV_i\beta + \varepsilon_i,
\]  
with \(\beta_j\stackrel{\text{iid}}{\sim}N(0,\sigma^2/\lambda)\), \(\varepsilon_i\sim N(0,\sigma^2)\), \(\lambda=100\) [PAGE 40–41]. Wins Added for player j: \(WA_j=\hat\beta_j\times(\text{total shifts of j})\) [PAGE 41]. Example: LeBron James Cleveland 2009–10: \(\hat\beta_j=0.0144\), shifts = 1,794, WA = 25.8; Miami 2010–11: \(\hat\beta_j=0.0064\), shifts = 1,828, WA = 11.5 [PAGE 42].

**Informative Missingness model (Chapter 4).**  
Response: \(y_{ik}\mid\theta_{ik}\sim\text{Bernoulli}(\theta_{ik})\), \(\Phi(\theta_{ik})=x'_{ik}\beta+z'_{ik}v_k\), \(v_k\sim N(0,\Sigma_v)\) [PAGE 53]. Missingness: \(m_{ik}\mid\pi_{ik}\sim\text{Bernoulli}(\pi_{ik})\), \(\Phi(\pi_{ik})=\omega'_{ik}\alpha\), \(\omega_{ik}=(1,\ x'_{ik}\beta+z'_{ik}v_k,\ w'_{ik})'\) [PAGE 53]. Kicker-specific distance slope: \(z'_{ik}=(1,d_{ik})\) [PAGE 56]. Distance definition: \(d_{ik}=17\) yards plus line-of-scrimmage to goal-line distance [PAGE 55].

**Inference and comparison metrics.**  
Posterior means and 95% credible intervals for \(\beta\) and \(\alpha\) [PAGE 57]. Posterior standard deviations averaged over kickers: IM intercept 0.223 vs HPR 0.324 vs SLR 0.590; IM distance coefficient 0.008 vs HPR 0.015 vs SLR 0.024 [PAGE 50]. Test-set MAE/MSE: IM 0.256 / 0.136; HPR 0.261 / 0.139; SLR 0.261 / 0.142 [PAGE 50].

**Adjusted FG% operator.**  
For each kicker k, estimate success probability for every 2011 kick as if taken by k, then average [PAGE 52]. Top adjusted FG%: S. Janikowski 0.888 (raw 0.857); N. Novack 0.887 (raw 0.794) [PAGE 62]. Hartley vs Janikowski at 25 yards on grass, no precipitation: Janikowski 0.99 [0.96,1.00] vs Hartley 0.95 [0.89,0.99]; at 50 yards: Janikowski 0.73 [0.67,0.79] vs Hartley 0.58 [0.44,0.71]; adjusted FG% difference 0.09 [0.02,0.18] [PAGE 63].

**Exact breakdown/singularity regimes.**  
- Default randomForest nodesize = 5 is too small for dependent sequential plays; nodesize = 200 was required [PAGE 19, 28].  
- Separate forests by game-second or by down decreased performance or yielded no improvement; per-quarter momentum terms did not help [PAGE 28–29].  
- SLR extrapolation is dangerous when a kicker has few observations in a distance region (Hartley: 2 attempts > 50 yards) [PAGE 61].  
- Weather coefficient credible intervals include zero for snow and mixed surface; signs cannot be reliably determined [PAGE 57].  
- The IM model assumes the missingness mechanism depends on the linear predictor and kick importance; if a coach’s withholding decision depends on unobserved private practice information unrelated to \(\Phi(\theta_{ik})\), the exponentiated missingness model is misspecified [PAGE 41, 53].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The statistical lineage traces from early empirical win-probability work to modern machine-learning and missing-data theory. Lindsey (1961) modeled the progress of the score in baseball, establishing that win probability is a dynamic, state-dependent object [PAGE 15]. Stern (1994) introduced a Brownian-motion formulation for soccer score progression, representing one formal statistical modeling branch [PAGE 33]. Brian Burke’s pre-2014 Advanced NFL Stats metric used subjective empirical binning on field position, time remaining, and score difference, with ad hoc first-down conversion adjustments [PAGE 15]. Lock and Nettleton (2014), the published antecedent of Chapter 2, replaced subjective bins with a random forest of regression trees and added a pre-game team-quality differential so that pre-game WP need not equal 0.50 for both teams [PAGE 15–16]. Breiman (2001) supplies the random-forest foundation; Liaw and Wiener (2002) supply the R implementation; adaptive-nearest-neighbor interpretations come from Lin and Jeon (2006) and Xu et al. (2014) [PAGE 16, 18, 30].

Chapter 3’s cross-sport generalization draws on Buttrey et al. (2011) for NHL scoring rates and on Deshpande and Jensen (2016) and Pettigrew (2015) for NBA player impact via win probabilities [PAGE 33, 40]. The Wins Added metric is explicitly framed as an extension of Adjusted +/- from 82games.com, substituting change in win probability for change in point differential and adding hierarchical shrinkage [PAGE 42].

Chapter 4’s missing-data genealogy begins with Little (1982) on nonresponse bias and the Little–Rubin (2002) taxonomy distinguishing missing at random (MAR) from not missing at random (NMAR) [PAGE 40, 54]. Copas and Farewell (1998) model “enthusiasm to respond” in surveys via propensity scores; Lock et al. reframe this as “enthusiasm to attempt” a field goal [PAGE 41, 49]. Lipsitz and Ibrahim (1996) and Ibrahim (1990) provide the missing-response indicator framework extended here through a joint probit specification for response and missingness [PAGE 40]. The exponential-dispersion formulation follows Jørgensen (1987) [PAGE 53].

Multi-week traps embedded in the source: (1) the author proposes retraining the NFL forest after each week to incorporate newly completed games [PAGE 29], which creates a nonstationary training distribution as rosters, coaching schemes, and kicker rosters churn; (2) coach–kicker combinations that persist across all three seasons (2009–2011) confound kicker ability with coach aggressiveness, so the author declines to model coach-specific effects [PAGE 55]; (3) momentum effects were examined via end-of-quarter WP predictors and rejected, yet the sequential dependence of plays within a game remains unmodeled [PAGE 28]; (4) the 76-yard distance cap equals the longest NFL attempt on record, so the model has no empirical support for kicks beyond that boundary and must extrapolate if such distances ever occur [PAGE 54]; (5) shrinkage parameter λ = 100 and the shift-count prior α1 are tuning choices whose credibility intervals are narrow but prior-dependent, making cross-season player rankings sensitive to specification [PAGE 41–43].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive theory of mind embedded in this dissertation operates on three levels: the kicker’s estimated success probability, the coach’s decision to attempt or withhold based on that probability and kick importance, and the analyst’s model of the coach’s decision process.

Level 0 (kicker): The kicker’s latent success probability \(\theta_{ik}\) is modeled with kicker-specific intercept and slope on distance, \(z'_{ik}v_k\) where \(z'_{ik}=(1,d_{ik})\) [PAGE 56]. This is the biomechanical layer.

Level 1 (coach): The coach observes conditions, distance, score, time, and private information (e.g., practice performance) and decides \(m_{ik}=0\) (attempt) or \(m_{ik}=1\) (withhold). The missingness model \(\Phi(\pi_{ik})=\omega'_{ik}\alpha\) includes \(\Phi(\theta_{ik})\), kick importance \(\Delta ik\), and their interaction [PAGE 56]. The negative coefficient on the linear predictor in the missingness equation (\(\alpha_2=-1.055\)) means higher estimated success probability reduces the chance of withholding; the negative coefficient on importance (\(\alpha_3=-3.044\)) and the interaction (\(\alpha_4=-7.376\)) mean that as leverage rises, the coach increasingly conditions the attempt decision on estimated success [PAGE 57].

Level 2 (analyst/crisis habit regression): The analyst does not observe \(y_{ik}\) when \(m_{ik}=1\), so standard methods regress to the mean of observed attempts only. This produces crisis habit regression: coaches under pressure revert to conservative habits—kicking field goals even when \(\Delta WP<0\)—and the observed sample is truncated toward high-confidence, low-distance kicks [PAGE 16, 41]. The counter-trap is the WP baseline: Figure 2.7 shows that for a team trailing 14–10 facing fourth and 3 at the opponent’s 10, kicking is preferable early but going for the first down dominates with roughly ten minutes or less remaining [PAGE 16]. The analyst’s recursive move is to treat the coach’s withholding decision as data: missing attempts are not ignorable, and the IM model borrows information from \(m_{ik}\) to correct kicker estimates.

The clock layer is encoded through AdjustedScore(\(\gamma\)) = Score / (Seconds+1)^\(\gamma\) with \(\gamma=1/2\), which makes a fixed lead more valuable as seconds expire [PAGE 19]. Empirically, win probability is nearly flat over time until the fourth quarter for tied or close scores [PAGE 21]. Thus the recursive loop closes: clock state modulates kick importance \(\Delta ik\), \(\Delta ik\) modulates the coach’s attempt probability, attempt probability modulates observed missingness, and missingness informs the kicker’s latent ability. A counter-counter-trap would be a coach who deliberately withholds high-leverage long kicks to preserve a “clutch” reputation or to manage kicker fatigue; such reputational motives, if uncorrelated with \(\Phi(\theta_{ik})\), would violate the missingness assumption and bias \(\alpha\) [PAGE 41].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: Kick distance is defined as 17 yards plus the distance from the line of scrimmage to the goal line [PAGE 55]. The dataset is restricted to fourth-down situations with distance no greater than 76 yards, matching the longest attempt in NFL history [PAGE 54]. Attempts where a made field goal would reduce estimated win probability are excluded, because such withholdings are sound strategy rather than evidence of kicker doubt [PAGE 54]. These are hard physical and strategic vetoes on the support of the data.

Biomechanical layer: Kicker-specific random effects \(v_k\) allow each kicker to have an individual intercept and distance slope [PAGE 56]. The data reveal stark heterogeneity: Sebastian Janikowski attempted 102 of 105 kicks on grass and 95 of 105 in clear conditions; Garret Hartley attempted only 16 of 44 on grass and all 44 in clear conditions (dome) [PAGE 56]. John Carney’s average attempt distance was 32.3 yards; Janikowski’s was 41.0 [PAGE 56]. This surface- and distance-conditioning means any cross-kicker comparison that ignores the attempt distribution is biomechanically invalid.

Weather layer: Precipitation categories are clear, rain, and snow; surface categories are grass, synthetic, and mix [PAGE 55]. Estimated effects are negative for snow (−0.076) and rain (−0.132) relative to clear, positive for synthetic (+0.105) and mix (+0.039) relative to grass [PAGE 57]. However, credible intervals for snow [−0.511, 0.371], rain [−0.296, 0.035], and mixed surface [−0.218, 0.299] are wide and include zero, so the sign of weather and surface effects cannot be reliably adjudicated from this dataset [PAGE 57]. The veto here is epistemic: absence of evidence under rare conditions is not evidence of no effect.

Veto proof summary: The IM model passes physical vetoes by restricting to fourth-down, ≤76-yard, non-WP-decreasing opportunities [PAGE 54]; it passes biomechanical vetoes by including kicker-specific distance slopes and observing heterogeneous attempt surfaces [PAGE 56]; it fails weather vetoes statistically because credible intervals are too wide to sign snow, rain, or mixed-surface coefficients [PAGE 57]. Any operational deployment must therefore treat weather-adjusted kicker comparisons as provisional pending more observations in adverse conditions.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 (Extrapolation veto, verifiable).  
Setup: Garret Hartley has only 2 attempts beyond 50 yards in the training data [PAGE 61]. A separate logistic regression (SLR) must extrapolate to estimate his 50-yard success probability. Veto: Block any long-range kicker comparison that relies on SLR for kickers with sparse long-distance attempts. Prediction: The IM model will yield Janikowski 50-yard success probability 0.73 [0.67, 0.79] versus Hartley 0.58 [0.44, 0.71], with the credible interval for Hartley reflecting high uncertainty; the difference 0.15 [0.02, 0.30] excludes zero [PAGE 63]. Verification: Re-fit SLR on Hartley’s observed subset only; the 50-yard point estimate should lie outside the IM credible interval or exhibit extreme posterior variance.

Scenario 2 (Missingness mechanism veto, verifiable).  
Setup: Analyst ignores withheld attempts and fits HPR on observed kicks only, implicitly assuming MAR. Veto: Reject any kicker ranking that does not condition on the coach’s attempt decision, because \(\alpha_2=-1.055\), \(\alpha_3=-3.044\), and \(\alpha_4=-7.376\) are all significantly non-zero [PAGE 57]. Prediction: IM posterior standard deviations will be strictly lower than HPR for both intercept (0.223 vs 0.324) and distance coefficient (0.008 vs 0.015), and IM test-set MAE/MSE will be lower (0.256/0.136 vs 0.261/0.139) [PAGE 50]. Verification: Compute posterior standard deviations from HPR draws omitting \(m_{ik}\); confirm they exceed IM values and that HPR calibrated MAE exceeds IM on held-out games.

Scenario 3 (Sequential-dependence veto, verifiable).  
Setup: A downstream model treats the ~150 plays within an NFL game as independent observations, violating the forest’s independence assumption [PAGE 18]. Veto: Block deployment of a per-second or per-down random forest on single-game data because separate forests by second decreased performance and per-quarter momentum terms yielded no improvement [PAGE 28–29]. Prediction: A correctly regularized forest with nodesize = 200 will retain NFL calibration r = 0.998 and quarterly MSE decline (0.201 → 0.107) [PAGE 20, 38]; a naive independent-play forest without nodesize inflation will overfit game-specific sequences and show inflated in-sample accuracy with degraded out-of-sample test MSE. Verification: Train two forests, one with nodesize = 5 and one with nodesize = 200, on identical 2001–2011 training data; the nodesize = 5 forest will exhibit lower training error but higher 2012 test-set MSE.
</RLVR_COUNTERFACTUAL_VETOES>