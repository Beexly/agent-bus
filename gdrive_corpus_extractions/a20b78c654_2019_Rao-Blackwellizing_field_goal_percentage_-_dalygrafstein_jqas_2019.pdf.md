---
source: "2019 Rao-Blackwellizing field goal percentage - dalygrafstein_jqas_2019.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 11
model: deepseek/deepseek-v4.1-flash-1017
words: 6667
---

<NATIVE_REASONING>
We need answer to user. Need follow strict invariants. We have source text pages. Need produce >=1000 words across exact XML sections. Need zero betting lines. Need formal LaTeX equations, units, page citations, exact quotes. Need sections:
<THINK_TRACE> >=400 words deep multi-hop derivation & gray-zone audit.
<SOURCE_OPERATORS_AND_EQUATIONS> formal LaTeX, units, page citations, breakdown.
<RETROCAUSAL_GENEALOGY> historical/scientific lineage & multi-week traps.
<RECURSIVE_THEORY_OF_MIND> crisis habit regression vs counter-trap vs clock.
<CROSS_LAYER_VETO_ADJUDICATION> physical/biomechanical/weather veto proof.
<RLVR_COUNTERFACTUAL_VETOES> 3 verifiable RLVR veto scenarios + predictions.

We need likely respond as GSE+GSI frontier reasoning foundry. Need synthesize from paper. Need be careful: source is sports stats, not betting. We can discuss shooting metrics, variance reduction. Need cite exact [PAGE N] markers and verbatim quotes. Need perhaps discuss equations: Beta-Bernoulli, Beta-Binomial marginal, RB estimator, logistic regression with shot factors, Bayesian regression, shrinkage formula, MSE inequality, units: inches, degrees/radians, probabilities dimensionless, counts, variance maybe probability^2 or counts^2. Need breakdown regimes: when free throws Bernoulli no improvement; when 2-point limited trajectory; when sample size low; when shot probabilities estimated imperfectly inequality not guaranteed; when trajectory too far raw removed assign 0/1; when fewer than 30% games RB lower RMSE; >40% raw better full sample etc.

Need multi-hop derivation & gray-zone audit in THINK_TRACE >=400 words. We can include formal reasoning. Need no fake ratios. Need "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." So avoid fake ratios. Use real equations. Maybe mention no physical force/fatigue ratio. Need zero betting lines: do not mention spread/total/moneyline/odds. We can mention prediction error, not odds. Need "SI/information/probability units". We can use probability dimensionless, inches, feet, radians/degrees, counts, games, attempts, mean absolute error in probability units, RMSE in probability units, log loss nats? Brier probability^2. Need exact singularity/breakdown regimes.

Need maybe "DRIVE SOURCE" is PDF; pages 11. We can quote exact snippets. Need citations exact [PAGE 1], [PAGE 2], etc. Need maybe answer in XML only? User asks exact XML sections. We should output only those XML sections likely. Need >=1000 words total. THINK_TRACE >=400. Other sections can be moderate. Desired oververbosity 5 but strict requires depth. Need ensure no betting terms. Avoid "odds" entirely? Invariant says never mention spreads, totals, moneylines, or odds. We can say "no betting lines" maybe that mentions? Better avoid word "odds". Don't mention "betting" maybe okay but avoid. Need no "line" in betting sense; "line" in regression okay but maybe safe. Use "trajectory" etc.

Need include "Rao-Blackwellizing field goal percentage" paper. Need formal equations.

Let's plan structure.

First THINK_TRACE:
- State source question: estimating player shooting skill θ from Bernoulli makes/misses vs trajectory-conditioned probabilities p_i.
- Derivation:
  - Raw FG θhat = 1/N sum X_i.
  - Model X_i ~ Bern(p_i), p_i ~ Beta(θv,(1-θ)v). Marginal Beta-Binomial with likelihood proportional θ^Xi(1-θ)^(1-Xi). Thus θ inference same under Bernoulli and expected Beta-Binomial. p_i sufficient for θ because joint factors Π(X_i,p_i|θ,v)=Π(X_i|p_i)Π(p_i|θ,v); given p_i, X_i independent of θ. Then RB estimator θhat_RB=E(θhat|p)=1/N sum p_i. Rao-Blackwell MSE inequality.
  - But p_i unknown; estimated p_i via shot factors D, LR, A. Need logistic model. Need Bayesian quadratic trajectory fit to reduce noise. Need note estimated p_i breaks exact inequality: "Using an estimate of ^θRB means that the inequality above does not necessarily hold" [PAGE 2].
- Multi-hop: trajectory fit -> shot factors -> logistic probability -> average -> shrinkage -> prediction.
- Gray-zone audit:
   - If p_i are true, MSE reduction exact. If estimated noisy, no formal guarantee; empirical results show improvement.
   - If free throws are Bernoulli, no improvement because makes/misses sufficient; paper says "If a player’s free throw attempts perfectly follow a Bernoulli distribution the number of makes and misses becomes a sufficient statistic for FT% and Rao-Blackwellizing would give no improvement" [PAGE 9].
   - 2-point limited: only 21,890 out of 73,925 two-point shots probabilities estimated; remaining assigned 1/0 [PAGE 8]. Partial RB.
   - Shot factors noisy: GMZ >90% in Noah but estimated GMZ only 85.2% [PAGE 4]; model less precise.
   - sample size: RB lower RMSE when <30% games, biggest low sample; raw becomes better >40% full sample [PAGE 7].
   - shrinkage prior B(3.5,6.5), adds 10 league-average shots; formula.
   - discrimination meta-metric: RB-3P 0.548 vs raw 0.432; RB-TS 0.804 vs raw 0.713 [PAGE 9].
- Need no fake ratios. Good.

SOURCE_OPERATORS_AND_EQUATIONS:
List formal equations with LaTeX and page citations. Need "operators" maybe terms.
- Bernoulli/Beta-Bernoulli:
\(X_i\sim \mathrm{Bern}(p_i),\quad p_i\sim \mathrm{Beta}(\theta v,(1-\theta)v)\)
units dimensionless probability, v concentration dimensionless? Actually Beta parameters positive dimensionless. θ true FG% dimensionless [0,1]. N count.
- Marginal likelihood:
\(\Pi(X_i\mid\theta,v)\propto \frac{\int_0^1 p_i^{X_i+\theta v-1}(1-p_i)^{(1-\theta)v-X_i}\,dp_i}{B(\theta v,(1-\theta)v)}\propto \theta^{X_i}(1-\theta)^{1-X_i}\)
Need exact quote includes (1−Xi + (1−θ)v) in exponent. Better exact:
\[
\Pi(X_i|\theta,v)\propto \int_0^1 \frac{p_i^{X_i+\theta v-1}(1-p_i)^{(1-\theta)v-X_i}}{B(\theta v,(1-\theta)v)}dp_i
\propto \frac{B(X_i+\theta v,1-X_i+(1-\theta)v)}{B(\theta v,(1-\theta)v)}
\propto \theta^{X_i}(1-\theta)^{(1-X_i)}
\]
[PAGE 2].
- Raw and RB:
\(\hat\theta= \frac1N\sum X_i\)
\(\hat\theta_{RB}=E(\hat\theta|p_1,\ldots,p_N)= \frac1N\sum p_i\)
- MSE inequality:
\(\mathrm{MSE}(\hat\theta_{RB})\le \mathrm{MSE}(\hat\theta)\)
- Trajectory quadratic:
\(E(Z_i)=\beta_0+\beta_1x_i+\beta_2y_i+\beta_3x_i^2+\beta_4y_i^2+\beta_5x_iy_i\)
Units: Z height feet, x,y feet, β units appropriate. [PAGE 3].
- Bayesian regression prior:
\(\rho(\beta|\sigma^2,z,X)\sim N(u_0,\sigma^2\Lambda_0^{-1})\), \(\rho(\sigma^2|z,X)\sim IG(a_0,b_0)\), update \(u_n=(X^TX+\Lambda_0)^{-1}(\Lambda_0u_0+X^TX\hat\beta)\), \(\Lambda_n=(X^TX+\Lambda_0)\) [PAGE 3-4].
- Logistic:
\(P(S_i=1)=\sigma(\beta_0+\beta_1\hat D_i+\beta_2\hat{LR}_i+\beta_3\hat A_i+\beta_4\hat D_i^2+\beta_5\hat{LR}_i^2+\beta_6\hat A_i^2+\beta_7\hat D_i\hat{LR}_i+\beta_8\hat D_i\hat A_i+\beta_9\hat{LR}_i\hat A_i)\)
where σ(x)=exp(x)/(1+exp(x)); units D/LR inches or feet? Paper uses inches for shot factors? Page 3 says depth 9 inches, entry angle angle. Page 5 says highest at 11 inches depth, 0 inches LR. Figure 2 says feet? Actually page 4 figure caption says left/right and depth measurements given as distance in feet in relation to centre, depth centre 0.75 feet. Page 3 says adjust front rim depth 0, center depth 9 inches. Page 4 says mean depth 11′′. We can say paper reports depth and left-right in inches in text, with Figure 2 in feet; be precise: "depth and left-right are lengths (reported in inches in text and feet in Fig. 2); entry angle radians/degrees." Avoid confusion.
- Shrinkage:
\(\hat\theta_{\text{Shrunk-RB}}=\frac{3.5+\hat\theta\hat v}{3.5+6.5+\hat\theta\hat v+(1-\hat\theta)\hat v}\)
Need note formula uses \hat v? The paper says \(\hat\theta_{\text{Shrunk-RB}} = \frac{3.5+\hat\theta \hat v}{3.5+6.5+\hat\theta\hat v+(1-\hat\theta)\hat v}\). Need exact. Units dimensionless. Prior B(3.5,6.5), "adding 10 league-average shots" [PAGE 6].
- Errors: MAE and RMSE in probability units. Table 2 values: Raw 3P 0.0790, Grand mean 0.0620, RB 0.0590, Shrunk raw 0.0689, Shrunk RB 0.0572; FT raw 0.0809, grand 0.0834, RB 0.0713, shrunk raw 0.0702, shrunk RB 0.0691; 2P raw 0.0549, grand 0.0486, RB 0.0502, shrunk raw 0.0440, shrunk RB 0.0428; TS raw 0.0467, grand 0.0436, RB 0.0408, shrunk raw 0.0417, shrunk RB 0.0379 [PAGE 6]. Need cite.
- Misclassification: Bayesian 0.204, Brier 0.160, log loss 0.491; OLR 0.246, 0.176, 0.528 [PAGE 5].
- Discrimination: 0.432 raw 3P, 0.548 RB-3P, 0.713 raw TS, 0.804 RB-TS [PAGE 9].
- Breakdown regimes:
  * Exact RB guarantee if p_i known and sufficiency holds; estimated p_i no guarantee [PAGE 2].
  * Perfect Bernoulli FT: no gain [PAGE 9].
  * Low trajectory info / 2PT: partial RB [PAGE 8].
  * Noisy shot factor estimates: GMZ discrepancy [PAGE 4].
  * Sample size: <30% games RB lower RMSE; >40% raw better on full sample [PAGE 7].
  * Biased priors: single set priors not player-specific; small bias [PAGE 7].
  * trajectory predictions far from raw removed and assigned 1/0 [PAGE 5].
Need "singularity/breakdown regimes" exact. Use these.

RETROCAUSAL_GENEALOGY:
- Historical/scientific lineage:
  - Rao-Blackwell theorem from Blackwell 1947? Rao 1945? Paper doesn't cite but can mention. But no source pages for that. Need maybe not cite page? We can state lineage: Rao-Blackwellization; Skellam 1948 Beta-Binomial; Efron & Morris 1977 Stein/empirical Bayes; Brown 2008 batting averages; Franks et al. 2016 meta-analytics; Marty and Lucey 2017 Noah Shot; Marty 2018. Cite pages where references appear [PAGE 10-11]. Need exact quotes? "Skellam 1948" [PAGE 2]. "Efron and Morris 1977" [PAGE 6]. "Brown 2008" [PAGE 6]. "Franks et al. 2016" [PAGE 9]. "Marty and Lucey 2017" [PAGE 4]. "Marty 2018" [PAGE 9].
- Multi-week traps:
  - Regression to mean: LeBron 2015-16 raw 30.9% vs RB 34.7%; predicted revert; actual 36.3 and 36.7 in next seasons [PAGE 9]. Trap: treating a low-sample raw dip as real skill change. Multi-week: early-season overreaction; needs 750 3PA to stabilize [PAGE 1]. 
  - Shot factor estimation noise: tracking data noisy; OLR depth variance larger; Bayesian better. Trap: using ordinary least squares without priors.
  - Free throw serial correlation (Arkes 2010) but smaller than contextual effects; trap: assuming hot-hand? Page 8-9. 
  - 2-point bank shots and close shots lack trajectory; trap: assuming full RB across all shot types.
  - Meta-metric stability not computed due insufficient seasons; trap: overclaiming season-to-season stability [PAGE 9].
Need avoid betting. Good.

RECURSIVE_THEORY_OF_MIND:
- "Crisis habit regression vs counter-trap vs clock." This is weird. Need interpret: In crisis, agents regress to habit (raw FG% habit), counter-trap (overcorrect to RB without checking estimated p), clock (sample size/time). Need align with paper. Discuss player evaluation under small samples: coaches/fans use raw FG% habit; counter-trap is to over-trust RB-FG% without accounting for estimated p bias and shot-type coverage; clock is stabilization horizon (750 3PA, <30% games). Need maybe "recursive theory of mind" means modeling evaluator's model of player's model. We can say evaluator believes player skill θ; player's shots have latent p_i; analyst estimates p_i; evaluator may confuse p_i with θ. Need mention LeBron example: raw 30.9% suggests decline; RB 34.7% and CI (0.321,0.374) suggest no appreciable decline; actual returns 36.3/36.7. This is counter-trap: not to conclude "clutch" or "choke" from raw. Clock: 750 attempts for 3P stabilization; RB helps earlier but not infinite. Need mention "crisis habit regression" as under pressure people revert to raw counting stats. Counter-trap: use RB but audit shot factor model and shrinkage. Clock: sample size. Use formal probabilities. Maybe mention "recursive" because evaluator's prior on θ influenced by observed makes/misses and by model of p_i. Need not overdo.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical/biomechanical/weather veto proof. Need relate to paper: physical/biomechanical: entry angle, depth, left-right; shot trajectory is physical layer. Weather: outdoor? NBA indoor; weather not applicable. Need veto proof: If trajectory data insufficient, or shot is bank shot/close to basket, model cannot estimate p_i; assign 1/0; veto RB claim. If shot factor measurement precision below Noah GMZ, veto strong physical inference. Biomechanical: player height/shooting style priors differ; single prior can bias; veto player-specific trajectory model if too few shots. Weather: indoor NBA, no weather layer; if outdoor, wind/rain would add unmodeled covariates and break sufficiency? But paper no weather. Need "Physical/biomechanical/weather veto proof" maybe from GSI? We can state no weather variable in source, so weather layer is not evidenced; any weather claim would be unsupported. Need cite pages: SportVu optical tracking X,Y,Z 25 times per second [PAGE 3]; data noisy especially height [PAGE 3]; quadratic fit [PAGE 3]; Bayesian priors [PAGE 3-4]; GMZ [PAGE 4]; 2-point bank shots [PAGE 8]; free throws homogeneous [PAGE 8]; single set priors due height/style [PAGE 7]. 
- Veto proof: RB-FG% requires p_i sufficient given D,LR,A; if physical measurement fails (ball occluded, height noise), p_i estimate unreliable; if shot intentionally off backboard, assumption shooters aim center fails [PAGE 3]; if bank shots, insufficient/inaccurate trajectory [PAGE 8]. Biomechanical: prior fixed at player release and hoop; individual height/style priors needed but not feasible due few shots [PAGE 7]. Weather: no outdoor weather in NBA; no source support. Need mention "physical veto" not a betting veto. 
- Maybe "cross-layer" means physical layer (trajectory), biomechanical layer (shooter), environmental/weather. We need adjudicate which vetoes. Provide proof with exact quotes and page citations. Good.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable RLVR veto scenarios + predictions. RLVR = reinforcement learning from verifiable rewards? Need define? We can create counterfactual scenarios where a claim would be vetoed by verifiable source conditions. Need not betting. Need predictions. Three scenarios:
1. Claim: "RB-FG% always has lower MSE than raw FG% for every player and shot type." Veto: estimated p_i breaks inequality; free throw Bernoulli gives no improvement; 2PT partial. Prediction: On a synthetic perfect Bernoulli FT sequence with no trajectory signal, RB estimate equals raw up to estimation noise and cannot beat raw; if p_i estimated with error, MSE may be higher. Verifiable by computing MSE on holdout. Cite [PAGE 2], [PAGE 9].
2. Claim: "Shot trajectory factors fully capture defender distance and shot location, so adding those to RB improves classification." The paper says adding shot-distance and nearest-defender distance as dimensions to RB-FG% did not improve classification [PAGE 10]. Prediction: adding them yields no improvement / possible overfit; classification remains ~79.6% vs 61% contextual. Veto if someone asserts improvement.
3. Claim: "RB-FG% eliminates need for sample size; it works equally at all sample fractions." Veto: RMSE lower only <30% games; raw better >40% full sample [PAGE 7]; biggest improvements low sample. Prediction: at 5-30% games RB lower RMSE; at >40% raw may win; at full season RB better overall estimate per paper? Wait paper says "Because we are comparing these estimators to raw FG% on the full sample, the raw estimator becomes better if we calculate RMSE using more than 40% of games. However, even full-season shooting numbers are highly variable... Thus RB-FG% is a better overall estimate on any size of data, but for small sample sizes it is a better estimate of end-of-season FG% than FG% itself." Need parse. Actually statement: raw becomes better if calculate RMSE using >40% games. But "RB-FG% is a better overall estimate on any size of data" contradictory? Maybe they mean overall estimate on any size? We need quote exact. Could use: Figure 6 and sentence. Prediction: RMSE crossover around 30-40% games; use RB for early season, not claim universal.
Alternative scenario: "LeBron 2015-16 30.9% proves permanent decline." Veto: RB 34.7%, CI (0.321,0.374), actual 36.3/36.7 next seasons. Prediction: future 3P% reverts near prior average. This is verifiable from paper. Good.
Need 3 verifiable RLVR veto scenarios. Could use LeBron, free throws, sample size. Need "predictions" maybe with exact numbers.

Need ensure word count. We can write ~1800-2500 words. Need XML sections. Need exact quotes and page citations. Need no "odds". Need no fake ratios. Need "SI/information/probability units". We can mention "nats" for log loss? Log loss is information units nats if natural log; paper doesn't specify. Better say "log loss (information units; paper reports 0.491)" without asserting nats. Brier score probability^2? Brier is mean squared probability error, dimensionless probability^2. MAE/RMSE dimensionless probability. Counts are attempts/games. Angles radians/degrees. Lengths inches/feet. Beta parameters dimensionless. v is concentration-like positive dimensionless? Actually Beta parameters α=θv, β=(1−θ)v; v dimensionless precision. Need not call it concentration? It is. Good.

Need be careful with "MSE inequality" if p_i sufficient for θ. It says "Because under the Beta-Binomial model pi is sufficient for θ, by the Rao-Blackwell Theorem we have: MSE(^θRB) ≤ MSE(^θ)" [PAGE 2]. Good.

Need "SOURCE_OPERATORS_AND_EQUATIONS" include exact page citations. Need maybe quote exact lines:
- PAGE 1 abstract: "Via the Rao-Blackwell theorem, we propose a shot-make probability model that conditions probability estimates on shot trajectory information, thereby reducing the variance of the new estimator relative to standard FG%."
- PAGE 2: "Thus the RB-FG% is simply the conditional expectation of raw FG% given these shot-make probabilities pi."
- PAGE 2: "Using an estimate of ^θRB means that the inequality above does not necessarily hold."
- PAGE 5: "The Rao-Blackwell inequality indicates the framework detailed in Section 2 holds regardless of the choice of shot probability model, given the model provides reasonable estimates of shot probabilities."
- PAGE 6: "We end up applying a prior distribution to each player’s first half 3-point shooting of the form B(3.5, 6.5), in essence adding 10 league-average shots to ^θ and ^θRB."
- PAGE 7: "RB-FG% has a lower RMSE than FG% when calculated using less than 30% of games, and the biggest improvements occur with low sample sizes."
- PAGE 7: "the raw estimator becomes better if we calculate RMSE using more than 40% of games."
- PAGE 9: "If a player’s free throw attempts perfectly follow a Bernoulli distribution the number of makes and misses becomes a sufficient statistic for FT% and Rao-Blackwellizing would give no improvement in prediction accuracy."
- PAGE 9: LeBron raw 30.9%, RB 34.7%, CI (0.321,0.374), actual 36.3%/36.7%.
- PAGE 10: "adding shot-distance and nearest-defender distance as dimensions to RB-FG% did not improve classification."
- PAGE 4: "Using our estimated shot factors, we found shots in this GMZ are made only 85.2% of the time. This suggests that despite the Bayesian model, our shot factor estimates are still less precise than those gathered by the Noah system."
- PAGE 3: "we first restrict our analysis to 3-point shots as these shots have the most trajectory information and we can assume all shooters are attempting to hit the centre of the basket (no shot attempts purposely off the backboard)."
- PAGE 8: "Many 2-point shots are taken close to the basket or intended as bank-shots, resulting in insufficient or inaccurate trajectory information."
- PAGE 7: "We only use a single set of priors to estimate shot factors in our Bayesian regression, but each player should have their own set of priors due to differences in height and shooting style."
Need exact quotes. Good.

Need maybe mention "PAGE 1" for 750 3PA. "it takes roughly 750 3-point attempts before a player’s shooting percentage stabilizes" [PAGE 1]. Good.

Need "multi-week traps" in RETROCAUSAL. We can include "early-season overreaction"; "tracking noise"; "free throw hot hand"; "2PT coverage"; "stability not computed". Multi-week: perhaps weeks 1-4 overreact to raw FG; weeks 5-8 overcorrect to RB; week 9+ shrink. We can describe timeline. But no betting. Fine.

Need "RECURSIVE_THEORY_OF_MIND" crisis habit regression vs counter-trap vs clock. We can make table-like prose:
- Crisis habit regression: evaluator under uncertainty reverts to raw FG% because it is familiar; paper says raw is poor predictor, worse than grand mean for 3P (Table 2) [PAGE 6]. This is habit.
- Counter-trap: after learning RB, evaluator over-trusts RB-FG% as if p_i known; but p_i estimated and inequality not guaranteed [PAGE 2]; shot factor GMZ only 85.2% vs 90% [PAGE 4]; single prior bias [PAGE 7]. Counter-trap is to treat RB as truth without model audit.
- Clock: time/sample size. 750 attempts stabilization [PAGE 1]; RB lower RMSE <30% games, raw better >40% [PAGE 7]; shrink adds 10 shots [PAGE 6]. Need use clock as sample-size clock. 
- Recursive ToM: evaluator models player θ, player's shot p_i, analyst's estimator. If evaluator ignores p_i, attributes noise to θ. If evaluator ignores θ, overfits p_i. Correct recursion: θ -> p_i -> X_i; E(θhat|p)=θhat_RB; shrink toward population. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. We can include "Physical layer veto": tracking data noisy; if ball height noise or trajectory too far, assign 1/0; no RB probability. "Biomechanical layer veto": entry angle/depth/left-right are physically measured; but priors generic not individual; player height/style need individual priors; if insufficient shots, no individual model. "Weather layer veto": NBA indoor; source has no weather variable; any weather-based claim is unsupported. "Adjudication": physical measurement quality vetoes RB; biomechanical heterogeneity vetoes universal prior; weather no veto because no evidence. Need "proof" via quotes. Good.

Need "RLVR_COUNTERFACTUAL_VETOES": We can label Scenario A, B, C. Need predictions. Use exact numbers. Need maybe "RLVR" as verifiable reward: claim is rewarded only if it survives holdout MSE, classification, or CI check. We can say "RLVR check" with source-derived threshold. Need no betting. Good.

Need ensure total >=1000 words. We can write ~2000. Need not mention "I". Need output only XML. Let's draft carefully.

Potential issue: The user says "DRIVE SOURCE: ... PAGES: 11 SOURCE TEXT". They likely expect analysis. Need not mention "PDF". Good.

Need no fake ratios. We won't mention Force/Fatigue. Good.

Need "SI/information/probability units" in equations. We'll include unit notes. Good.

Need "exact singularity/breakdown regimes" maybe use "breakdown regimes" in SOURCE_OPERATORS. Good.

Need avoid "odds" word. Check final for "odds". We'll not use. "betting" not use. "line" in "lineage" okay. "spread" maybe avoid? We might use "spread" in "variance" no. Avoid "total" as betting? We need use "total attempts" maybe "total" is normal. Invariant says never mention totals. Hmm "total attempts" is not betting total but word "total" could be okay? To be safe, avoid "total" except maybe "sum". Use "aggregate" instead. Avoid "spread" entirely. "moneyline" no. "odds" no. Good.

Need maybe include "zero betting lines" not mention. Fine.

Let's compose final.

Need exact XML tags. Use CDATA? Not necessary. LaTeX in XML can have `<`? We need escape `<` in inequalities as `&lt;`? In XML text, `<` must be escaped. We can write `\le` not `<`. For equations, use `\le` and `\mathrm{MSE}`. Avoid raw `<` character. But `&` in LaTeX? Use `\&`? In XML, ampersand must be escaped. We can avoid ampersands. Use `\text{and}`. For `\hat\theta` okay. For tags, no issue. Need if using `<` in text like "less than 30%" use words. Avoid raw ampersand. Use "and" not &. Good.

Need use "Rao-Blackwellized" spelling. Good.

Need quote exact: "Rao-Blackwellizing field goal percentage". Good.

Let's draft.

THINK_TRACE:
Start with multi-hop derivation. Include equations maybe. Need >=400 words. We can be detailed.

Potential final length ~3000 words. That's okay.

Need not overdo but satisfy. Let's write.

Check units:
- MAE/RMSE values in probability units (dimensionless, 0-1).
- Brier score probability^2.
- log loss information units (paper doesn't state base; report as paper's unit).
- Beta parameters dimensionless.
- depth/left-right in inches or feet; entry angle degrees or radians.
- x,y,z feet; time 25 Hz.
- N counts.

Need cite table page. Page 6 table. Good.

Need "source operators" maybe "operators" as "conditional expectation operator E(·|p)" and "Rao-Blackwellization operator". We can mention.

Potential issue: equation for Beta-Binomial exponent: paper has \((1-p_i)^{(1-\theta)v-X_i}\). That seems odd. But quote exact. We'll present as paper. Good.

Need "MSE inequality" exact. Good.

Need "discrimination" values. Good.

Need "Shrunk-RB formula" exact: paper uses \(\hat v\) maybe. We'll write \(\hat v\) as paper. Good.

Need "logistic regression" equation exact. Use \(\hat{LR}_i\). Good.

Need "Bayesian regression" prior and updates. Good.

Need "breakdown regimes" list. Good.

Need "Retrocausal genealogy" maybe "retrocausal" means tracing back from observed outcomes to prior models. Include LeBron as retrocausal check. Good.

Need "multi-week traps": perhaps "Week 1-4: raw FG overreaction; Week 5-8: RB overtrust; Week 9+: shrinkage and meta-metric audit." This is not source but derived. Good. Use "multi-week" not betting. Good.

Need "RLVR counterfactual vetoes" exact predictions:
- Scenario 1: Claim "RB-FG% always lowers MSE for free throws." Veto: perfect Bernoulli FT no improvement [PAGE 9]. Prediction: on FT data where p_i is constant, difference in holdout MSE between RB and raw is zero within sampling error; estimated RB can be worse due p_i estimation noise. Verifiable by MSE.
- Scenario 2: Claim "Adding defender distance and shot location to RB improves classification." Veto: paper says did not improve [PAGE 10]. Prediction: classification remains ~79.6% and additional covariates fail to reduce misclassification. 
- Scenario 3: Claim "LeBron's 2015-16 30.9% proves permanent decline." Veto: RB 34.7%, CI (0.321,0.374), actual 36.3%/36.7%. Prediction: future 3P% near prior 36.5% (2010-2015) rather than 30.9%. Good.
Need maybe include "verifiable" by checking confidence interval and next seasons. Good.

Need maybe "RLVR" as "verifiable reward if claim survives source constraints." Good.

Need "predictions" for each. Good.

Need no "odds". Check.

Let's write final. 

</NATIVE_REASONING>

<THINK_TRACE>
The source’s central multi-hop derivation is a variance-reduction argument, not a claim that trajectory data magically reveals a player’s “true” skill. Start with the raw estimator. For shot \(i\), let \(X_i\in\{0,1\}\) be a make indicator, \(N\) the number of attempts, and \(\theta\in[0,1]\) the player’s latent shooting percentage. The raw field-goal percentage is
\[
\hat\theta=\frac{1}{N}\sum_{i=1}^{N}X_i .
\]
The paper then replaces the simple Bernoulli model with a Beta-Bernoulli hierarchy:
\[
X_i\sim\mathrm{Bern}(p_i),\qquad p_i\sim\mathrm{Beta}\bigl(\theta v,(1-\theta)v\bigr),
\]
where \(p_i\in[0,1]\) is the shot-specific make probability and \(v\) is a positive dimensionless precision parameter [PAGE 2]. Marginalizing out \(p_i\) gives a Beta-Binomial likelihood proportional to \(\theta^{X_i}(1-\theta)^{1-X_i}\), so inference for \(\theta\) is unchanged at the marginal level [PAGE 2]. The key sufficiency step is the factorization
\[
\Pi(X_i,p_i\mid\theta,v)=\Pi(X_i\mid p_i)\Pi(p_i\mid\theta,v),
\]
which implies that, conditional on \(p_i\), \(X_i\) is independent of \(\theta\). Therefore \(p_i\) is sufficient for \(\theta\), and the Rao-Blackwellized estimator is the conditional expectation
\[
\hat\theta_{RB}=E(\hat\theta\mid p_1,\ldots,p_N)=\frac{1}{N}\sum_{i=1}^{N}p_i .
\]
The paper states this directly: “Thus the RB-FG% is simply the conditional expectation of raw FG% given these shot-make probabilities \(p_i\)” [PAGE 2]. Under the model, the Rao-Blackwell theorem gives
\[
\mathrm{MSE}(\hat\theta_{RB})\le \mathrm{MSE}(\hat\theta)
\]
[PAGE 2]. That inequality is the formal core.

But the derivation has a gray zone. The true \(p_i\) are unknown. The paper estimates them from optical tracking data by fitting a quadratic trajectory model, extracting three shot factors—depth, left-right accuracy, and entry angle—and then passing those factors through a logistic shot-make model [PAGE 3, PAGE 5]. This creates a chain: noisy ball coordinates \(\to\) fitted trajectory \(\to\) estimated shot factors \(\to\) estimated make probability \(\to\) average RB estimator. The source explicitly warns that using estimated probabilities weakens the theorem: “Using an estimate of \(\hat\theta_{RB}\) means that the inequality above does not necessarily hold” [PAGE 2]. The empirical results are therefore an audit of whether the estimated version still reduces prediction error, not a proof that it must.

The gray-zone audit has several regimes. First, if a player’s free throws are truly Bernoulli with constant make probability, then makes and misses are sufficient, and Rao-Blackwellization cannot improve prediction; the paper says exactly that: “If a player’s free throw attempts perfectly follow a Bernoulli distribution the number of makes and misses becomes a sufficient statistic for FT% and Rao-Blackwellizing would give no improvement in prediction accuracy” [PAGE 9]. Second, two-point shots are only partially Rao-Blackwellized because many are close to the basket or intended bank shots, producing “insufficient or inaccurate trajectory information” [PAGE 8]. Third, shot-factor estimation is noisy: the Noah system’s Guaranteed Make Zone is over 90%, but the paper’s estimated factors make that zone only 85.2%, showing that “our shot factor estimates are still less precise than those gathered by the Noah system” [PAGE 4]. Fourth, sample size matters: RB-FG% has lower RMSE when calculated using less than 30% of games, with the biggest improvements at low sample sizes, while “the raw estimator becomes better if we calculate RMSE using more than 40% of games” [PAGE 7]. Fifth, shrinkage adds a Beta prior \(B(3.5,6.5)\), “in essence adding 10 league-average shots to \(\hat\theta\) and \(\hat\theta_{RB}\)” [PAGE 6]. The correct interpretation is therefore conditional: RB-FG% is a variance-reduction device when trajectory information is informative and the probability model is reasonably accurate; it is not an unconditional replacement for raw counting statistics.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source defines the raw and Rao-Blackwellized operators in probability units. Let \(N\) be the number of shot attempts, \(X_i\in\{0,1\}\) a make indicator, \(\theta\in[0,1]\) the latent field-goal percentage, \(p_i\in[0,1]\) the shot-specific make probability, and \(v\) a positive dimensionless Beta precision parameter. The raw estimator is
\[
\hat\theta=\frac{1}{N}\sum_{i=1}^{N}X_i \qquad \text{(FG%)}
\]
and the RB estimator is
\[
\hat\theta_{RB}=E(\hat\theta\mid p_1,\ldots,p_N)=\frac{1}{N}\sum_{i=1}^{N}p_i \qquad \text{(RB-FG%)}
\]
[PAGE 2]. Both are dimensionless probabilities in \([0,1]\).

The Beta-Bernoulli model is
\[
X_i\sim\mathrm{Bern}(p_i),\qquad p_i\sim\mathrm{Beta}\bigl(\theta v,(1-\theta)v\bigr).
\]
The marginal Beta-Binomial likelihood is written as
\[
\Pi(X_i\mid\theta,v)\propto
\int_0^1
\frac{p_i^{X_i+\theta v-1}(1-p_i)^{(1-\theta)v-X_i}}
{B(\theta v,(1-\theta)v)}\,dp_i
\propto
\frac{B(X_i+\theta v,\,1-X_i+(1-\theta)v)}
{B(\theta v,(1-\theta)v)}
\propto
\theta^{X_i}(1-\theta)^{1-X_i},
\]
where \(B(\cdot)\) is the beta function [PAGE 2]. This shows that inference for \(\theta\) is the same under the Bernoulli and expected Beta-Binomial models. The sufficiency factorization is
\[
\Pi(X_i,p_i\mid\theta,v)=\Pi(X_i\mid p_i)\Pi(p_i\mid\theta,v),
\]
so, given \(p_i\), \(X_i\) is independent of \(\theta\), and \(p_i\) is sufficient for \(\theta\) [PAGE 2]. The Rao-Blackwell inequality is
\[
\mathrm{MSE}(\hat\theta_{RB})\le \mathrm{MSE}(\hat\theta)
\]
[PAGE 2]. The breakdown condition is explicit: when \(p_i\) is replaced by an estimate, “the inequality above does not necessarily hold” [PAGE 2].

The trajectory model uses a quadratic height fit. Let \(Z_i\) be the ball height, \(x_i,y_i\) the tracking coordinates, and \(\beta_j\) the regression coefficients:
\[
E(Z_i)=\beta_0+\beta_1x_i+\beta_2y_i+\beta_3x_i^2+\beta_4y_i^2+\beta_5x_iy_i .
\]
Lengths are in feet for the tracking coordinates and height; the ball is tracked 25 times per second [PAGE 3]. The Bayesian regression uses a conjugate Normal prior
\[
\rho(\beta\mid\sigma^2,z,X)\sim N\bigl(u_0,\sigma^2\Lambda_0^{-1}\bigr),
\qquad
\rho(\sigma^2\mid z,X)\sim IG(a_0,b_0),
\]
with updates
\[
u_n=(X^TX+\Lambda_0)^{-1}(\Lambda_0u_0+X^TX\hat\beta),
\qquad
\Lambda_n=(X^TX+\Lambda_0)
\]
[PAGE 3]. Four pseudo-data points are used: two at the shooter’s release location at 7 feet and two at the hoop center at 10 feet [PAGE 4].

The shot-make probability model is a logistic regression over depth \(\hat D_i\), left-right distance \(\hat{LR}_i\), and entry angle \(\hat A_i\):
\[
P(S_i=1)=\sigma\left(
\beta_0+\beta_1\hat D_i+\beta_2\hat{LR}_i+\beta_3\hat A_i+
\beta_4\hat D_i^2+\beta_5\hat{LR}_i^2+\beta_6\hat A_i^2+
\beta_7\hat D_i\hat{LR}_i+\beta_8\hat D_i\hat A_i+\beta_9\hat{LR}_i\hat A_i
\right),
\]
where \(\sigma(x)=\exp(x)/(1+\exp(x))\), \(S_i\in\{0,1\}\) is a make indicator, and \(i\) indexes 3-point shots from the 2014–2015 season (\(N=47{,}631\)) [PAGE 5]. Depth and left-right are lengths; the text reports examples in inches, while Figure 2’s caption reports distance in feet with the hoop center at 0.75 feet [PAGE 3, PAGE 4]. Entry angle is an angle, reported in degrees in Figure 3 and radians in Figure 2 [PAGE 4, PAGE 5]. Probabilities are dimensionless.

The shrinkage estimator is
\[
\hat\theta_{\text{Shrunk-RB}}
=
\frac{3.5+\hat\theta\hat v}
{3.5+6.5+\hat\theta\hat v+(1-\hat\theta)\hat v},
\]
using a \(B(3.5,6.5)\) prior, “in essence adding 10 league-average shots to \(\hat\theta\) and \(\hat\theta_{RB}\)” [PAGE 6]. The paper reports mean absolute prediction errors in probability units: for 3-point shots, raw 0.0790, grand mean 0.0620, RB 0.0590, shrunk raw 0.0689, shrunk RB 0.0572; for free throws, raw 0.0809, grand mean 0.0834, RB 0.0713, shrunk raw 0.0702, shrunk RB 0.0691; for 2-point shots, raw 0.0549, grand mean 0.0486, RB 0.0502, shrunk raw 0.0440, shrunk RB 0.0428; for true-shooting percentage, raw 0.0467, grand mean 0.0436, RB 0.0408, shrunk raw 0.0417, shrunk RB 0.0379 [PAGE 6]. Misclassification, Brier score, and log loss are reported for the Bayesian regression covariates as 0.204, 0.160, and 0.491, versus 0.246, 0.176, and 0.528 for ordinary linear regression [PAGE 5]. Brier score is in probability-squared units; log loss is an information-unit loss; misclassification is a dimensionless rate.

Breakdown and singularity regimes are explicit in the source. Exact MSE dominance requires known \(p_i\); estimated \(p_i\) voids the guarantee [PAGE 2]. Perfect Bernoulli free throws make Rao-Blackwellization useless because makes and misses are sufficient [PAGE 9]. Two-point shots are only partially covered: probabilities are estimated for 21,890 of 73,925 two-point shots, with remaining probabilities assigned 1 or 0 [PAGE 8]. Noisy shot factors reduce precision: the Noah Guaranteed Make Zone is over 90%, but the estimated zone is only 85.2% [PAGE 4]. Tracking trajectories too far from raw data are removed and assigned probability 1 or 0 [PAGE 5]. Sample-size crossover is reported: RB-FG% has lower RMSE using less than 30% of games, while raw becomes better using more than 40% of games in that comparison [PAGE 7]. The estimator is also not fully player-specific: “We only use a single set of priors to estimate shot factors in our Bayesian regression, but each player should have their own set of priors due to differences in height and shooting style” [PAGE 7].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage runs from classical sufficient statistics and Rao-Blackwellization to Beta-Binomial modeling, empirical Bayes shrinkage, and modern optical tracking. The paper invokes Skellam 1948 for the Beta-Binomial marginal equivalence [PAGE 2], Efron and Morris 1977 for shrinkage [PAGE 6], Brown 2008 for in-season batting-average prediction [PAGE 6], Franks et al. 2016 for meta-analytic discrimination and stability [PAGE 9], and Marty and Lucey 2017 plus Marty 2018 for shot-factor and practice-session trajectory work [PAGE 4, PAGE 9]. The retrocausal lesson is that the observed make/miss sequence is a coarse projection of a richer physical process: the ball’s depth, left-right deviation, and entry angle at the rim. The paper’s “retrocausal” check is the LeBron James example. Raw 2015–2016 3P% was 30.9%, which would suggest a real decline; the RB estimate was 34.7% with a 90% confidence interval of (0.321, 0.374), implying no appreciable decline, and his next two seasons returned 36.3% and 36.7% [PAGE 9]. That is a direct test of whether a low raw percentage was signal or small-sample noise.

Multi-week traps follow from this genealogy. The first trap is early-season raw-percentage overreaction: the paper notes that it takes roughly 750 3-point attempts before 3P% stabilizes [PAGE 1]. A four-to-eight-week sample is far below that horizon, so treating a cold streak as a permanent skill change is a habit regression. The second trap is overcorrecting to RB-FG% as if \(p_i\) were known. The theorem’s inequality is exact only for true \(p_i\); estimated probabilities can introduce bias, and the paper warns that the inequality “does not necessarily hold” once estimates are used [PAGE 2]. The third trap is assuming uniformity across shot types. Free throws are relatively homogeneous, and if they are Bernoulli then Rao-Blackwellization gives no improvement [PAGE 9]. Two-point shots often lack usable trajectory information because of close-range attempts and bank shots [PAGE 8]. The fourth trap is ignoring tracking noise: ordinary linear regression produces much larger depth variance than Bayesian regression, and the estimated Guaranteed Make Zone is only 85.2% made versus the Noah system’s over-90% zone [PAGE 4]. The fifth trap is overclaiming stability. The paper calculates discrimination but explicitly does not calculate the stability meta-metric because there are not enough seasons of trajectory data [PAGE 9]. A multi-week evaluation should therefore use RB-FG% as an early-sample stabilizer, then audit model coverage, shot-type mix, and shrinkage before treating it as a permanent skill estimate.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive problem is that three agents are nested: the player has latent skill \(\theta\), each shot has a latent make probability \(p_i\), and the analyst observes only \(X_i\) plus noisy trajectory proxies. A naive evaluator collapses the recursion by treating \(X_i\) as a direct readout of \(\theta\). That is the crisis habit regression: under uncertainty, the evaluator reverts to raw FG% because it is familiar and countable. The paper shows the cost: for 3-point shots, raw FG% has mean absolute prediction error 0.0790, worse than the league-wide grand mean at 0.0620, while RB-FG% is 0.0590 and shrunk RB is 0.0572 [PAGE 6]. In other words, the habitual statistic is not merely noisy; it can be less predictive than a constant.

The counter-trap is the opposite error: after learning about Rao-Blackwellization, the evaluator treats \(\hat\theta_{RB}\) as a direct skill measurement and ignores the estimation layer. But the paper’s own theorem is conditional on the true \(p_i\). With estimated \(p_i\), the MSE inequality is not guaranteed [PAGE 2], shot-factor precision is below the Noah system’s dedicated hardware [PAGE 4], and the Bayesian trajectory model uses one shared prior even though “each player should have their own set of priors due to differences in height and shooting style” [PAGE 7]. The counter-trap is therefore to over-trust the RB number without auditing trajectory coverage, shot-type mix, and shrinkage.

The clock is sample size. The paper gives a stabilization horizon of roughly 750 3-point attempts [PAGE 1], and its RMSE comparison shows RB-FG% has lower RMSE when calculated using less than 30% of games, with the biggest improvements at low sample sizes, while raw becomes better using more than 40% of games in that comparison [PAGE 7]. Shrinkage adds a \(B(3.5,6.5)\) prior, effectively adding 10 league-average shots [PAGE 6]. A sound recursive theory of mind therefore updates in three clocks: the shot clock of the individual possession, the multi-week clock of early-season evaluation, and the season-length clock of stabilization. It should ask: Is the evaluator reacting to \(X_i\), to \(p_i\), or to \(\theta\)? The LeBron example shows why this matters: raw 30.9% suggested decline, RB 34.7% with interval (0.321, 0.374) suggested no appreciable decline, and later seasons at 36.3% and 36.7% vindicated the RB read [PAGE 9]. The correct mental model is hierarchical: \(\theta\) generates a distribution of \(p_i\), \(p_i\) generates makes and misses, and the evaluator must not mistake the middle layer for the top layer or the top layer for a single observation.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The physical layer veto is strong. RB-FG% depends on estimating depth, left-right accuracy, and entry angle from optical tracking data, but the data are noisy, “especially in measuring the height of the ball” [PAGE 3]. The paper fits a quadratic trajectory model and uses the point where the ball crosses 10 feet as the basket-plane location [PAGE 3]. If the fitted trajectory is too far from the raw tracking data, the shot is removed and assigned probability 1 or 0 rather than a modeled probability [PAGE 5]. That is a physical veto: without usable trajectory information, the RB estimate is not actually trajectory-conditioned. The paper also restricts its main analysis to 3-point shots because they have the most trajectory information and because it assumes “all shooters are attempting to hit the centre of the basket (no shot attempts purposely off the backboard)” [PAGE 3]. Bank shots and close-range two-point attempts violate that assumption and often produce “insufficient or inaccurate trajectory information” [PAGE 8]. The physical veto therefore applies whenever the ball’s rim-plane geometry cannot be measured with enough precision to distinguish a rim-out, air ball, or unintentional bank.

The biomechanical layer veto is about shooter heterogeneity. The paper uses a single set of priors for the Bayesian trajectory regression, but acknowledges that “each player should have their own set of priors due to differences in height and shooting style” [PAGE 7]. It also says that specifying individual priors and separate trajectory models is difficult because most players take too few shots to obtain accurate parameter estimates [PAGE 7]. This is a biomechanical veto against universal trajectory priors: a 7-foot center and a 6-foot guard do not release the ball from the same height or angle, and a single prior can bias the estimated shot factors. The veto is not total—the empirical results still show improvement—but it blocks any claim that the estimator is fully player-specific. The paper’s own precision check reinforces this: the Noah system’s Guaranteed Make Zone is over 90%, while the estimated zone is only 85.2% made, so “our shot factor estimates are still less precise than those gathered by the Noah system” [PAGE 4].

The weather layer has no evidentiary support in this source. The data are from NBA games tracked by SportVu, with \(X,Y\) coordinates for players and \(X,Y,Z\) coordinates for the ball 25 times per second [PAGE 3]. There is no outdoor weather variable, no wind, no rain, and no temperature covariate in the model. A weather-based veto or a weather-based enhancement would therefore be an unmodeled layer. The only environmental variables discussed are contextual basketball factors such as defender distance and shot location, and the paper reports that adding shot-distance and nearest-defender distance as dimensions to RB-FG% “did not improve classification” [PAGE 10]. Cross-layer adjudication is thus: physical tracking failure vetoes RB conditioning; biomechanical heterogeneity vetoes a universal prior; weather claims are vetoed as unsupported by the source. The RB estimator survives only inside the measured trajectory-and-shot-factor layer.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Claim “RB-FG% always lowers MSE for free throws because Rao-Blackwellization always reduces variance.” Verifiable veto: the paper states that if free throws perfectly follow a Bernoulli distribution, the number of makes and misses is sufficient and “Rao-Blackwellizing would give no improvement in prediction accuracy” [PAGE 9]. Prediction: on a constant-probability free-throw sequence with no informative trajectory signal, the holdout MSE difference between RB and raw should be zero within sampling error; if estimated \(p_i\) are noisy, RB can be worse. The claim is vetoed unless the data show a non-Bernoulli shot-factor signal.

Scenario 2: Claim “Adding defender distance and shot location to RB-FG% improves shot-make classification beyond trajectory factors.” Verifiable veto: the paper reports that predicted make probabilities based on trajectory information classify shots correctly 79.6% of the time, higher than the 61% classification rate using nearest defender distance and shot location, and that “adding shot-distance and nearest-defender distance as dimensions to RB-FG% did not improve classification” [PAGE 10]. Prediction: a model with RB probabilities plus defender-distance and shot-location dimensions should fail to reduce misclassification below the trajectory-only model on the paper’s holdout comparison; the added contextual variables are redundant once depth, left-right, and entry angle are conditioned.

Scenario 3: Claim “LeBron James’s 30.9% 3-point shooting in 2015–2016 proves a permanent decline in skill.” Verifiable veto: the paper estimates his 2015–2016 RB-FG% at 34.7% with a 90% confidence interval of (0.321, 0.374), concluding “LeBron did not have an appreciable decline in 3-point shooting ability,” and reports that his 3P% returned to 36.3% and 36.7% in 2016–2017 and 2017–2018 [PAGE 9]. Prediction: future 3P% should revert toward his prior high-level range rather than remain at 30.9%; a verifiable check is whether the next-season estimate falls inside or near the RB interval. The claim is vetoed by the RB interval and the observed reversion.
</RLVR_COUNTERFACTUAL_VETOES>