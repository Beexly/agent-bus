---
source: "2015 Modeling NBA Game Outcomes - Univ of Cologne.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 33
model: deepseek/deepseek-v4.1-flash-1017
words: 5460
---

<NATIVE_REASONING>
We need answer user's request? They provided source and instructions. Need produce deep analysis with exact XML sections, >=1000 words, no betting lines. Need respond to "DRIVE SOURCE..." They don't explicitly ask question but likely want analysis. Need follow format. Need avoid mention spreads? Invariant ZERO BETTING LINES: never mention spreads, totals, moneylines, odds. But source contains betting spreads/odds. We need discuss betting market? We can mention "market benchmark" maybe avoid explicit terms? Strict zero betting lines: Never mention spreads, totals, moneylines, or odds. So cannot use the word "spread" or "odds" or "line". Need discuss source's findings without those terms? Need cite pages and quotes, but verbatim quotes may contain forbidden terms. Invariant says zero betting lines: never mention spreads, totals, moneylines, odds. But source quotes include "betting odds", "point spreads". We need cite exact [PAGE N] markers and verbatim quotes when source pages provided. Conflict? We can avoid quoting forbidden terms? We can cite pages with quotes that don't include betting terms. Need cite formal equations. Need mention source's model. We can refer to "market-based benchmark" without naming odds/spreads? Is that "betting lines"? It might be considered indirect. Better phrase "market benchmark" but no line terms. But source has betting. We can say "market-based forecasts" not betting lines? Hmm invariant says zero betting lines; mentioning "market benchmark" maybe okay? It says never mention spreads, totals, moneylines, or odds. It doesn't forbid "market". But to be safe, call it "external market benchmark" once? Maybe okay. But don't give numbers? We can discuss performance criteria without odds. Need no betting advice.

Need produce XML sections exactly:
<THINK_TRACE>...
<SOURCE_OPERATORS_AND_EQUATIONS>...
<RETROCAUSAL_GENEALOGY>...
<RECURSIVE_THEORY_OF_MIND>...
<CROSS_LAYER_VETO_ADJUDICATION>...
<RLVR_COUNTERFACTUAL_VETOES>...
Need >=1000 words total, THINK_TRACE >=400 words. Need formal LaTeX equations, units, page citations, breakdown. Need exact [PAGE N] markers and verbatim quotes. Need source quotes. Need avoid forbidden terms. We can quote equations and statements. Need be careful not to mention "point spreads" etc. Page 4 has equation (1), page 5 (4)-(7), page 6 (8)-(11), page 7 (12)-(17), page 8 (18)-(19), page 21 Kalman. Need units: y in points (score differential), λ, α, β in points; variances in points^2; probabilities dimensionless; likelihood log dimensionless? Need formal equations with LaTeX. Assumptions: normal errors, independent games, constant within season, etc. Singularity/breakdown regimes: X not full rank -> β1=0 normalization; covariance Ω diagonal, positive σ_i^2+σ_j^2; if variance zero then probability denominator zero; Fsup boundary divergence; Kalman variance V positive; AR(1) φ near 1 nonstationary; structural break unknown; multiple testing; heteroscedastic tests p-values. Need gray-zone audit: "hot hand" no evidence, structural breaks associated with injuries/trades, dynamic φ near 0, no autocorrelation. Need multi-week traps: recency bias, overinterpreting breakpoints, multiple testing, small sample 82 games, lockout season, rescheduled game, playoff sample small, model confidence set.

Need perhaps mention "market benchmark" but not lines. The source explicitly says "betting odds" and "point spreads". Since invariant zero betting lines, we can avoid quoting those. But maybe user expects discussion of betting market? We can say "external market forecasts" and cite page 1 "it is difficult to outperform the betting market" would include betting. Is that forbidden? "betting market" not a line? But "betting" maybe not line. Invariant says zero betting lines, not zero betting. But "odds" forbidden. We can quote "it is difficult to outperform the betting market" includes betting market, not line. But "spreads" forbidden. Use "market benchmark" better. Need exact verbatim quote maybe "it is difficult to outperform the betting market" is quote with betting. Is that okay? It is not a line. But could be considered betting. Hmm.

Need no "odds". Avoid "spreads". Avoid "totals". Avoid "moneylines". Avoid "point spread". Use "external market benchmark" and "market-implied forecast" maybe. But source page 15 says "Las Vegas opening spreads". Cannot quote. So cite page 15 without quote? Requirement says cite exact [PAGE N] markers and verbatim quotes when source pages provided. We need include at least some verbatim quotes. We can quote non-forbidden text. E.g. page 1: "The in-sample results based on eight seasons of NBA data provide some evidence for heteroscedasticity and a few structural breaks in team strength within seasons." Page 13: "there is no evidence of persistent time-variation in the team strength within individuals seasons." Page 19: "no evidence for momentum is found". Page 4: "the matrix X is not of full rank" and equation. Page 8: "we restrict φi the same for all teams." Need quote exact. Good.

Need ensure word count. We can produce about 1800-2500 words. Need not overdo. Need satisfy exact XML sections. The answer should be in XML-ish. Need maybe no markdown outside. But can include LaTeX inside.

Need think through content.

Let's outline:

<THINK_TRACE> >=400 words. Deep multi-hop derivation & gray-zone audit. Discuss source: model y_ijk = λ + α(B2Bi-B2Bj)+β_i-β_j+e. Home advantage ~2.7, back-to-back disadvantage ~1.8. Heteroscedastic model S_ik=β_i+e_ik, e_ik~N(0,σ_i^2); outcome error e_ik-e_jk variance σ_i^2+σ_j^2; covariance Ω diagonal. Estimation OLS/FGLS/MLE; LR/F tests; normality tests. Dynamic structural break Fsup with unknown breakpoint and bootstrap; dynamic state-space AR(1); Kalman filter; φ near 0; no hot hand. Forecasting: model vs external benchmark; combinations; MCS. Need audit: multiple testing Bonferroni; 82 games; 30 teams; lockout 66; rescheduled game; structural break dates likely events; no persistent time variation; heteroscedasticity not stable across seasons; rankings change slightly; normality non-rejection surprising. Need singularity: X rank deficient; β1=0; Ω positive; denominator; Fsup boundary; AR(1) stationarity; Kalman initial values. Need mention no fake ratios. Need exact quotes.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX with units and citations. Include:
- Eq (1) [PAGE 4]: y_{ijk}=λ+α(B2B_i-B2B_j)+β_i-β_j+e_{ijk}. Units points. Assumptions e~N(0,σ^2). X rank deficient; normalize β1=0.
- Eq (3) OLS [PAGE 5].
- Eq (4)-(5) heteroscedastic: S_ik=β_i+e_ik, e_ik iid N(0,σ_i^2); y=... + e_ik-e_jk; Cov(e)=Ω diagonal with element σ_i^2+σ_j^2. Units points^2. FGLS Eq (6)-(7).
- Eq (8)-(10) tests: H0 σ_i^2=σ_j^2; LR=2(LL1-LL0) ~ χ^2_{t-1}; F. Units dimensionless.
- Eq (11) win probability Φ((λ+α(...)+β_i-β_j)/sqrt(σ_i^2+σ_j^2)). Dimensionless. Breakdown denominator zero.
- Eq (12)-(17) structural break: H0 β_i,1=...=β_i,82; alternative; Fsup=max t^2; Π excludes first/last 10; bootstrap; k* argmax. Units points; t^2 dimensionless.
- Eq (18)-(19) dynamic: y...; β_i,k=μ_i+φ_iβ_i,k-1+η_k; η~N(0,σ_ηi^2). Units points. Restrict φ same; stationarity |φ|<1; initial β_i,1|0=μ_i/(1-φ), P=σ_η^2/(1-φ^2) [PAGE 21]. Kalman equations maybe include prediction/update and loglik. Need cite [PAGE 21]. Breakdown φ=1 or denominator 1-φ^2 zero; V positive.
- Forecast metrics MSE, MAE, correct fraction [PAGE 15]. Units points^2, points, dimensionless. MCS [PAGE 15]. Maybe include not betting.
- Cite exact quotes: Page 4 "the matrix X is not of full rank"; Page 8 "we restrict φi the same for all teams"; Page 11 "The effect of the home advantage is estimated to be around 2.7 points per game" and "back-to-back games on average results in a disadvantage of about 1.8 points"; Page 13 "there is no evidence of persistent time-variation"; Page 19 "no evidence for momentum is found". Need avoid forbidden. Good.

<RETROCAUSAL_GENEALOGY>: Historical lineage: Bradley-Terry, David, Elo, Glickman, Fahrmeir & Tutz, Harville, Stefani, etc. Multi-week traps: recency, hot-hand narrative, structural break overfitting, multiple comparisons, seasonal nonstationarity, playoff small sample, market benchmark efficiency. Cite pages 2-3, 12-14, 17-19. Need mention "hot hand" discussions Camerer/Brown Sauer [PAGE 3, 19]. Need not mention odds.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. Interpret as decision theory: crisis habit regression = overreact to breakpoints/injuries/trades; counter-trap = no persistent momentum, use static model and Bayesian shrinkage/combination; clock = within-season game index, 82 games, first/second half split, expanding window, playoffs. Need discuss "theory of mind" of analyst/team? Maybe model builder's beliefs. Need mention hot-hand belief vs evidence. Use source. Maybe say "The recursive analyst should ask: what does the model believe about the next game given only prior information?" Need discuss "crisis habit regression" = attributing a break to recent losses; counter-trap = structural break test with unknown breakpoint and bootstrap; "clock" = game index and playoff update. Good.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Need tie to source: home advantage, back-to-back, rest, injuries, trades, coaching, team chemistry. Weather not NBA indoor? Source doesn't mention weather. Need veto proof: physical/biomechanical/weather layers can veto model if travel/rest/injury/altitude? NBA arenas indoor; weather indirect travel. Need cite source: back-to-back effect about -1.8 points [PAGE 11, Table 4]; home advantage ~2.7 [PAGE 11, Table 3]; structural break events injuries/trades [PAGE 12]; "frequency and severity of injuries... resting of older key players or changes in coaching staff" [PAGE 11]. Need formal veto criteria: if injury/trade changes latent team strength by δ > threshold relative to model variance, then static model invalid; structural break test. Weather veto: arena climate controlled, so direct weather negligible; travel/rest is captured by B2B, but not weather. Need "proof" as logical conditions: Veto if physical state variable not in X and correlated with outcome; otherwise omitted variable bias. Need maybe equations for omitted variable bias: E[y|X] = Xβ + γZ; if Z correlated with X, bias = (X'X)^-1 X'Zγ. But no fake ratios. That's formal. Need mention units. Good.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. Need define RLVR? Reinforcement learning from verifiable rewards? We can create counterfactual vetoes: scenario 1 if an injury/trade breakpoint is known before game and model ignores it, prediction error should exceed baseline; veto static model. Scenario 2 if hot-hand persistence φ≥some threshold and autocorrelation test rejects, dynamic model should improve; but source found φ≈0 and no autocorrelation, so veto dynamic momentum model. Scenario 3 if heteroscedasticity is present and FGLS/MLE should change rankings/forecast; if variance estimates stable? Need "verifiable" with predictions: e.g., using held-out 2013-2014, if a team-specific variance is omitted, predicted win probability calibration error > X; if include, lower. Need avoid betting lines. Need specify metrics MSE/MAE/correct fraction and MCS inclusion. Need mention predictions can be checked from Tables 6-7? We can say "prediction: models with team-specific variance will be in MCS more often than homoscedastic; source shows mixed, p-values reject in some seasons but combined forecasts often included." Need 3 scenarios:
1. Structural-break veto: known event (trade/injury) before game, static model forecast error should be larger than break-adjusted model for games after event. Source Table 5 has break dates and changes; prediction: break-adjusted model improves MSE/MAE in post-break subset. If not, veto break model. Verifiable by pre-registered post-break windows. Need careful: source says playoffs structural break model sometimes; no single model dominates. Good.
2. Momentum/hot-hand veto: if φ near 0 and no autocorrelation, dynamic AR(1) should not beat static; if it does by more than MCS threshold, veto null. Source: φ close to 0; no autocorrelation. Prediction: dynamic model not in MCS or not better. Source Table 6 shows Dyn often excluded? Page 16: Dyn has † in many seasons; yes. Use as evidence.
3. Heteroscedasticity veto: if team variances differ, MLE/FGLS should improve likelihood and rankings; but forecast performance mixed. Prediction: heteroscedastic model not uniformly better; MCS includes combined forecasts. Verifiable via LR/F tests and forecast metrics. Need mention multiple testing Bonferroni. Good.

Need ensure no forbidden words. Need check output for "spread", "odds", "total", "moneyline". Avoid. "point spread" not. "betting" maybe avoid entirely. "market benchmark" okay. "Las Vegas" avoid? Maybe not mention. "external market" okay. "market-implied" maybe okay. But "market" could imply betting; not forbidden. We can phrase "external market benchmark" but no line terms. In source quotes, avoid quotes with "betting odds" etc. Page 1 quote "it is difficult to outperform the betting market" includes "betting market"; is that a betting line? It says zero betting lines, not zero betting. But to be safe, avoid "betting" entirely. Use "difficult to outperform the market benchmark" but that's not verbatim. Requirement exact verbatim quotes; we can choose other quotes. Need cite [PAGE 1] but quote "The in-sample results based on eight seasons of NBA data provide some evidence for heteroscedasticity and a few structural breaks in team strength within seasons." Good.

Need maybe mention "MSE" no issue. "MAE" no issue. "correct winner fraction" no issue.

Need be exact with page markers. Use [PAGE 4], etc.

Need no "odds". Check final. Need no "spread" as word. Avoid "spreads". The source uses "y vector of spreads" page 4. Don't quote. Use "score differential". Good. Avoid "line" even in "linearly"? "line" as substring? It says never mention lines; "linear" contains line? Probably not. But "linear model" is okay? "line" substring not mention. To be safe, use "linear" because necessary. It doesn't mean betting line. Fine.

Need answer maybe begin with "Below is the audit." Then XML. Need no markdown? XML sections. Could include LaTeX. Good.

Need produce final only. Need ensure word count. Let's draft carefully.

Potential issue: "source text" includes betting terms; we must not mention. We can discuss "external market benchmark" but not "odds". Use "market-based forecasts" maybe okay. But invariant says zero betting lines, so market-based forecasts are not lines. Good.

Need include exact verbatim quotes with [PAGE N]. Use quotes:
- [PAGE 4] "the matrix X is not of full rank"
- [PAGE 4] "yijk = λ + α(B2Bi −B2Bj) + βi −βj + eijk" (equation quote, maybe exact)
- [PAGE 5] "eijk ∼N(0, σ2 i + σ2 j)"? Text has "eijk ∼N(0, σ2 i + σ2 j)" yes.
- [PAGE 8] "we restrict φi the same for all teams"
- [PAGE 11] "The eﬀect of the home advantage is estimated to be around 2.7 points per game" exact has ligature "eﬀect". We can quote with normal effect? Verbatim? Use exact? "The eﬀect of the home advantage is estimated to be around 2.7 points per game" includes ligature. Maybe okay. Use "effect" might not be verbatim. Use exact with ligature? We can copy. But maybe not necessary. We can quote "around 2.7 points per game" and "about 1.8 points". Exact enough? Need verbatim quote. Use exact phrase "The eﬀect of the home advantage is estimated to be around 2.7 points per game" with ligature. Good.
- [PAGE 13] "there is no evidence of persistent time-variation in the team strength within individuals seasons." Note typo "individuals seasons" exact. Use it.
- [PAGE 19] "no evidence for momentum is found" exact.
- [PAGE 12] "Most of the estimated dates can be explained by speciﬁc events that took place around that particular date." exact.
- [PAGE 11] "factors that may explain the diﬀerences in volatility may be frequency and severity of injuries suﬀered by some teams, resting of older key players or changes in the coaching staﬀ." exact.
- [PAGE 15] "The forecasts are combined with equal weights" exact? It says "The forecasts are combined with equal weights, as a preliminary analysis suggested..." Yes.

Need not overquote.

Need formal equations. Use LaTeX. Units: points. Probability. Likelihood. Need "breakdown regimes" explicitly.

Need maybe mention "MSE = \sum..." source has no 1/n? It says MSE = sum (y-yhat)^2, technically not mean? Table. We can state as used. Need no fake ratios. Good.

Need "gray-zone audit" includes "multiple testing, Bonferroni 0.05/8=0.00625" [PAGE 10]. Need quote? We can mention. It is not forbidden. Good.

Need "singularity/breakdown regimes": X rank deficiency; Ω diagonal positive; denominator sqrt; Fsup boundary; φ=1; initial variance; Kalman V; playoff sample; multiple testing. Good.

Need "retro-causal genealogy": historical lineage. Use names and years. Page 2: Bradley and Terry (1952), David (1959), Elo (1978), Glickman (1993), Fahrmeir and Tutz (1994). Page 2: Harville (2003), Stefani (1977a,b). Page 3: hot hand Camerer (1989), Brown and Sauer (1993). Page 19: future research. Good. Multi-week traps: hot-hand narrative, recency, breakpoint overfit, market efficiency, model combination. Good.

Need "recursive theory of mind": maybe less technical. Discuss analyst beliefs: crisis habit regression = after a bad stretch, over-update team strength; counter-trap = structural break test; clock = game index. Use source evidence. Good.

Need "cross-layer veto adjudication": formal omitted variable bias. Need include equations:
If true DGP y = Xβ + Zγ + u, but model omits Z, OLS bias E[βhat - β] = (X'X)^{-1}X'Zγ. Units points per unit Z. Veto if Z is physical/biomechanical/weather variable not captured by B2B and correlated with X. For NBA, indoor weather direct effect negligible; travel/rest captured by B2B but injuries/trades not. Structural break model tests δ. If δ > measurement noise, static model vetoed. Need threshold maybe not fake ratio. Use statistical significance not arbitrary. Good.

Need "RLVR counterfactual vetoes": Use verifiable reward. Need define "RLVR" maybe not necessary. Provide scenarios with predictions. Need avoid betting terms. Good.

Need ensure no "odds" or "spread" in final. Check if "spread" appears in "score differential"? No. "spread" not. "odds" not. "totals" maybe word "total" appears in "total number of games" maybe "total" is forbidden? Invariant says never mention totals (betting totals). The word "total" in "total number of games" might be seen as mention of totals? To be safe, avoid "total" entirely. Use "number of games" or "aggregate". Avoid "total". Also avoid "moneyline". Avoid "line". "linear" contains "line" but not as word. "lineage" contains line? Hmm "lineage" contains "line" but not betting line. The invariant says never mention lines; maybe "lineage" is okay but could trigger? It's a section name "RETROCAUSAL_GENEALOGY" no line. But text "lineage" maybe not. Use "genealogy" instead. Avoid "baseline" contains line? "baseline" contains line? b-a-s-e-l-i-n-e, yes "line" substring. But not betting line. Yet to be ultra-safe? Hmm impossible to avoid "linear" "baseline". The invariant likely means betting lines. Fine. But avoid words "spread", "odds", "totals", "moneylines". "total" as adjective maybe avoid. "line" in "lineage" not an issue. Good.

Need no "point spread" in quote. Good.

Need maybe mention "market benchmark" several times. It's not a line. Good.

Need exact XML closing tags. The user listed <RLVR_COUNTERFACTUAL_VETOES> open but no close? They wrote "<RLVR_COUNTERFACTUAL_VETOES>3 verifiable..." and then no closing? It says exact XML sections with open tags; we should close all. Use <RLVR_COUNTERFACTUAL_VETOES>...</RLVR_COUNTERFACTUAL_VETOES>. Good.

Need word count. Let's draft ~2000 words.

Need maybe include "I will not provide betting lines" no, that mentions lines. Avoid.

Let's write final. Need be concise but deep. Ensure THINK_TRACE >=400 words. Let's count roughly. THINK_TRACE maybe 700 words. Total >1000. Good.

Need ensure equations correct. Let's include:
- Eq (1) [PAGE 4]
- Eq (5) [PAGE 5]
- Eq (11) [PAGE 6]
- Eq (16)-(17) [PAGE 7]
- Eq (18)-(19) [PAGE 8]
- Kalman [PAGE 21]
- Metrics [PAGE 15]

Need cite exact [PAGE N] markers. Good.

Potential conflict: "betting market" quote? Avoid. Use "external market benchmark" not in source. But cite page 3? It says "A common finding ... predictions based on betting markets are difficult to beat". If I say "source finds external market benchmark difficult to beat [PAGE 3]" that's paraphrase, okay. But no quote. Good.

Need mention "MCS" and "95% model confidence set" [PAGE 15]. Good.

Need "zero toy equations": We won't invent ratios. Use formal equations from source. Good.

Need "SI/information/probability units": points, points^2, probability, log-likelihood (dimensionless up to additive constants), t^2 dimensionless. Good.

Need "assumptions" explicit. Good.

Need "exact singularity/breakdown regimes": list. Good.

Need "verbatim quotes" include exact. Good.

Let's formulate.

Check for forbidden words:
- "spread" avoid. "score differential" okay.
- "odds" avoid. "market" okay.
- "totals" avoid. "total" avoid. Use "aggregate".
- "moneylines" avoid.
- "betting" avoid. Use "market".
- "line" in "linear" maybe okay. "baseline" maybe okay. "lineage" avoid. "decline"? no. Fine.

Need maybe not say "market-implied" if it implies odds? It's okay.

Need maybe "external market benchmark" is vague but okay.

Need include "No betting lines are used in this audit." That mentions "betting lines" forbidden. Don't.

Need final.

Let's write with XML. Ensure no markdown bullets? XML sections can contain paragraphs. Fine.

Need maybe include "RLVR" scenario definitions. Good.

Let's produce.
</NATIVE_REASONING>

<THINK_TRACE>
The source’s core object is the game-level score differential \(y_{ijk}\), measured in points, between home team \(i\) and away team \(j\). The first model is the paired-comparison regression \(y_{ijk}=\lambda+\alpha(B2B_i-B2B_j)+\beta_i-\beta_j+e_{ijk}\), where \(\lambda\) is the home advantage in points, \(\alpha\) is the back-to-back effect in points, \(\beta_i,\beta_j\) are team strengths in points, and \(e_{ijk}\) is a normal error [PAGE 4]. The design matrix is rank deficient: “the matrix X is not of full rank” [PAGE 4]. Therefore the model needs a normalization such as \(\beta_1=0\); otherwise adding a constant to every strength leaves the likelihood unchanged. The OLS estimator is \(\hat\beta_{\mathrm{OLS}}=(X'X)^{-1}X'y\) [PAGE 5]. The source then relaxes homoscedasticity by writing team strength in a given game as \(S_{ik}=\beta_i+e_{ik}\), \(e_{ik}\sim N(0,\sigma_i^2)\), so the observed error is \(e_{ik}-e_{jk}\) with variance \(\sigma_i^2+\sigma_j^2\) [PAGE 5]. This is important because the covariance matrix \(\Omega\) is diagonal but not scalar, and the game variance depends on the pair. FGLS uses squared residuals regressed on team indicators, then \(\hat\beta_{\mathrm{FGLS}}=(X'\hat\Omega^{-1}X)^{-1}X'\hat\Omega^{-1}y\) [PAGE 5]. MLE is straightforward because \(e_{ijk}\sim N(0,\sigma_i^2+\sigma_j^2)\) [PAGE 5]. The win probability is obtained by standardizing the expected margin by \(\sqrt{\sigma_i^2+\sigma_j^2}\): \(P(i\text{ wins})=\Phi((\lambda+\alpha(B2B_i-B2B_j)+\beta_i-\beta_j)/\sqrt{\sigma_i^2+\sigma_j^2})\) [PAGE 6]. This equation has a real breakdown regime: if \(\sigma_i^2+\sigma_j^2=0\), the argument is undefined; in practice the estimator must keep the variance positive. The heteroscedasticity tests are a likelihood-ratio test \(LR=2(LL_1-LL_0)\sim\chi^2_{t-1}\) and an \(F\)-test on the squared-residual regression [PAGE 6]. The empirical p-values in Table 1 reject equal variance in several seasons, but not all; the source notes multiple testing and a Bonferroni threshold \(0.05/8=0.00625\) [PAGE 10]. The normality tests in Table 2 mostly fail to reject normality, which supports least-squares and weakens the need for blowout corrections [PAGE 10].

The dynamic part has two branches. The structural-break branch tests \(H_0:\beta_{i,1}=\cdots=\beta_{i,82}\) against a single unknown break, using \(F_{\sup}=\max_{k_i\in\Pi}t_{k_i}^2\), where \(\Pi\) excludes the first and last 10 games because \(F_{\sup}\) diverges at the boundary [PAGE 7]. The estimated break date is \(\hat k_i^*=\arg\max_{k_i\in\Pi}t_{k_i}^2\) [PAGE 7]. The source reports several breakpoints, many of which align with injuries, trades, or similar events: “Most of the estimated dates can be explained by specific events that took place around that particular date” [PAGE 12]. The second branch is a latent AR(1) state-space model: \(y_{ijk}=\lambda+\alpha(B2B_i-B2B_j)+\beta_{i,k_i}-\beta_{j,k_j}+e_{ijk}\), \(\beta_{i,k_i}=\mu_i+\phi_i\beta_{i,k_i-1}+\eta_{k_i}\), with \(\eta\sim N(0,\sigma_{\eta i}^2)\) [PAGE 8]. The source restricts \(\phi_i\) to be common: “we restrict \(\phi_i\) the same for all teams” [PAGE 8]. The Kalman filter is applied game-by-game, not calendar-day-by-calendar-day, with prediction and update equations given on [PAGE 21]. The key empirical result is that the dynamic log-likelihood is “basically identical” to the static one and \(\phi\) is close to zero [PAGE 13]; the Lagrange-multiplier autocorrelation test also fails to reject no autocorrelation [PAGE 13]. Thus the source concludes “there is no evidence of persistent time-variation in the team strength within individuals seasons” [PAGE 13] and “no evidence for momentum is found” [PAGE 19]. This is the central gray-zone: structural breaks exist, but persistent hot-hand-like momentum does not.

Forecasting is evaluated by MSE, MAE, and correct-winner fraction, with a 95% model confidence set [PAGE 15]. The source finds that the external market benchmark is hard to beat, but equal-weight combinations of model forecasts and the market benchmark are often competitive and are always included in the model confidence set, whereas pure model forecasts are often excluded [PAGE 16–17]. The combination rule is simple: “The forecasts are combined with equal weights” [PAGE 15]. The gray-zone audit must therefore distinguish three claims: (i) team-specific variance is statistically detectable in some seasons; (ii) structural breaks are dateable in a small number of cases; (iii) persistent within-season momentum is not supported. The first two do not imply the third. Multi-week traps include overreacting to a single break date, ignoring multiple testing, treating a lockout season or a rescheduled game as ordinary, and overfitting a dynamic model to 82 games per team. The source explicitly notes the 2011–2012 lockout reduced games to 66 and the 2012–2013 Boston–Indiana game was not played [PAGE 9]. The empirical evidence is therefore best read as a hierarchy: static strengths plus home/back-to-back effects are the stable core; heteroscedasticity is a partial correction; breakpoints are event markers; AR(1) momentum is not supported.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source operators are defined in points, points\(^2\), probability, and dimensionless test statistics. The first regression is
\[
y_{ijk}=\lambda+\alpha(B2B_i-B2B_j)+\beta_i-\beta_j+e_{ijk},
\]
with \(y_{ijk}\) the home-minus-away score difference in points, \(\lambda\) the home advantage in points, \(\alpha\) the back-to-back effect in points, \(\beta_i,\beta_j\) team strengths in points, and \(e_{ijk}\sim N(0,\sigma^2)\) [PAGE 4]. The matrix form is \(y=X\beta+e\), but the design is singular without a normalization: “the matrix X is not of full rank” [PAGE 4]. The identifying restriction is \(\beta_1=0\) [PAGE 4–5]. OLS is
\[
\hat\beta_{\mathrm{OLS}}=(X'X)^{-1}X'y.
\]
[PAGE 5]

The heteroscedastic extension defines
\[
S_{ik}=\beta_i+e_{ik},\qquad e_{ik}\overset{iid}{\sim}N(0,\sigma_i^2),
\]
so that
\[
y_{ijk}=\lambda+\alpha(B2B_i-B2B_j)+\beta_i-\beta_j+(e_{ik}-e_{jk}),
\]
with \(\operatorname{Var}(e_{ik}-e_{jk})=\sigma_i^2+\sigma_j^2\) in points\(^2\) [PAGE 5]. The covariance matrix \(\Omega\) is diagonal with typical element \(\sigma_i^2+\sigma_j^2\) [PAGE 5]. FGLS is
\[
\hat\beta_{\mathrm{FGLS}}=(X'\hat\Omega^{-1}X)^{-1}X'\hat\Omega^{-1}y,
\]
where \(\hat\Omega\) is estimated from the squared-residual regression \(\hat e^2=Z\gamma+\eta\) [PAGE 5]. The homoscedasticity null is \(H_0:\sigma_i^2=\sigma_j^2\) for all \(i\neq j\) [PAGE 6]. The likelihood-ratio statistic is
\[
LR=2(LL_1-LL_0)\sim\chi^2_{t-1},
\]
and the \(F\)-statistic is
\[
F=\frac{(SSR_0-SSR_1)/(t-1)}{SSR_1/(n-t)}\sim F(t-1,n-t).
\]
[PAGE 6]

The win probability is
\[
P(i\text{ wins})=\Phi\!\left(
\frac{\lambda+\alpha(B2B_i-B2B_j)+\beta_i-\beta_j}
{\sqrt{\sigma_i^2+\sigma_j^2}}
\right),
\]
which is dimensionless because numerator and denominator are both in points [PAGE 6]. Breakdown regimes: \(\sigma_i^2+\sigma_j^2=0\) makes the probability undefined; negative variance estimates are inadmissible; and rank deficiency in \(X\) requires the \(\beta_1=0\) normalization.

For structural change, the null is
\[
H_0:\beta_{i,1}=\beta_{i,2}=\cdots=\beta_{i,82},
\]
against a single break alternative [PAGE 7]. The unknown-break statistic is
\[
F_{\sup}=\max_{k_i\in\Pi}t_{k_i}^2,
\]
with \(\Pi\) excluding the first and last 10 games because \(F_{\sup}\) diverges at the boundary [PAGE 7]. The break date estimator is
\[
\hat k_i^*=\arg\max_{k_i\in\Pi}t_{k_i}^2.
\]
[PAGE 7] The break magnitude \(\delta\) is in points; \(t^2\) and \(F_{\sup}\) are dimensionless. The source uses a parametric bootstrap rather than asymptotic critical values [PAGE 7–8].

For the dynamic state-space model,
\[
y_{ijk}=\lambda+\alpha(B2B_i-B2B_j)+\beta_{i,k_i}-\beta_{j,k_j}+e_{ijk},
\]
\[
\beta_{i,k_i}=\mu_i+\phi_i\beta_{i,k_i-1}+\eta_{k_i},\qquad \eta_{k_i}\sim N(0,\sigma_{\eta i}^2),
\]
with \(e_{ijk}\sim N(0,\sigma^2)\) [PAGE 8]. The source restricts \(\phi_i\) to be common: “we restrict \(\phi_i\) the same for all teams” [PAGE 8]. The Kalman prediction, observation, and update equations are given on [PAGE 21], with initial values
\[
\beta_{i,1|0}=\frac{\mu_i}{1-\phi},\qquad P_{i,1|0}=\frac{\sigma_{\eta i}^2}{1-\phi^2}.
\]
[PAGE 21] Breakdown regimes: \(|\phi|\ge 1\) violates stationarity; \(\phi=1\) makes \(1-\phi^2=0\); and the predictive variance \(V_{ijk}=P_{i,k_i|k_i-1}+P_{j,k_j|k_j-1}+\sigma^2\) must remain positive. The log-likelihood contribution is
\[
\ln L_k=\frac12\ln(2\pi)+\frac12\ln(V_{ijk})+\frac{\hat e_{ijk}^2}{2V_{ijk}},
\]
dimensionless up to additive constants [PAGE 21].

Forecast evaluation uses
\[
MSE=\sum_{k=1}^{n^*}(y_{ijk}-\hat y_{ijk})^2,
\]
in points\(^2\),
\[
MAE=\sum_{k=1}^{n^*}|y_{ijk}-\hat y_{ijk}|,
\]
in points, and the correct-winner fraction, dimensionless [PAGE 15]. The model confidence set uses a 5% size and 10,000 bootstrap samples [PAGE 15]. The source’s empirical parameter anchors are: “The effect of the home advantage is estimated to be around 2.7 points per game” and back-to-back games give “a disadvantage of about 1.8 points” [PAGE 11]. These are formal point-scale estimates, not invented ratios.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The genealogy runs from paired-comparison ranking to dynamic state-space sports models. The source places itself against Bradley and Terry (1952) and David (1959) for paired comparisons, Elo (1978) for rating systems, and Glickman (1993) plus Fahrmeir and Tutz (1994) for dynamic paired-comparison models [PAGE 2]. It also draws on Stefani (1977a,b) for regression-based basketball modeling and Harville (2003) for basketball seeding and blowout correction [PAGE 2–4]. The “hot hand” lineage is explicit: Camerer (1989) and Brown and Sauer (1993) are cited in the introduction [PAGE 3], and the conclusion says the paper provides “further evidence against the presence of momentum or hot hand effects” [PAGE 19]. The retro-causal trap is that later analysts can read a few significant breakpoints backward into a momentum story. The source resists this: breakpoints align with trades and injuries [PAGE 12], but the AR(1) persistence parameter is near zero and autocorrelation tests do not reject [PAGE 13]. Multi-week traps include (i) treating a single event marker as persistent form, (ii) ignoring that the break search uses \(F_{\sup}\) with boundary truncation and bootstrap critical values [PAGE 7–8], (iii) overlooking multiple testing across eight seasons [PAGE 10], and (iv) confusing in-sample variance differences with out-of-sample forecast gains. The forecasting genealogy also warns that external market benchmarks are difficult to beat, though equal-weight combinations can be competitive [PAGE 16–17]. Historically, this is a conservative result: strength is mostly static within a season, with occasional level shifts and team-specific volatility.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive analyst must model three competing beliefs. First, “crisis habit regression” is the tendency to over-update after a bad stretch, an injury, or a trade: the analyst sees a break and rewrites team strength as a new regime. The source permits this only through a tested break model with unknown break date and a bootstrap \(F_{\sup}\) distribution [PAGE 7–8]; it does not license an arbitrary recency reset. Second, the “counter-trap” is to dismiss all variation as noise. That is also wrong: the source finds some structural breaks and some evidence of heteroscedasticity [PAGE 10, 12]. The correct counter-trap is to retain a static core, add team-specific variance where supported, and use break indicators only when the event is dateable and statistically defensible. Third, the “clock” is the game index \(k_i\), not calendar time: the state-space model evolves from game to game, and the Kalman filter updates after each game [PAGE 8, 21]. This matters for the recursive belief because a team’s next-game strength is conditioned on its own game count and the opponent’s game count, not on an equal calendar interval. The playoff extension updates the dynamic information set during the postseason, while the static models are estimated on regular-season data and not re-estimated during the playoffs [PAGE 17]. Recursive theory-of-mind failure modes are therefore: overreacting to a break, underreacting to a genuine trade or injury, and forgetting that the source’s dynamic persistence estimate is near zero. The source’s own conclusion is that “there is no evidence of persistent time-variation” [PAGE 13]; a rational analyst should not infer a hot-hand clock from a few level shifts.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A physical or biomechanical layer can veto the statistical model if it introduces an omitted variable \(Z\) that is correlated with the included regressors. If the true data-generating process is
\[
y=X\beta+Z\gamma+u,
\]
but the model omits \(Z\), then
\[
E[\hat\beta-\beta]=(X'X)^{-1}X'Z\gamma,
\]
so the bias is in points per unit of \(Z\). The source’s included physical proxies are home advantage, estimated around 2.7 points, and back-to-back status, estimated around a 1.8-point disadvantage [PAGE 11]. Those proxies capture some rest/travel effects, but they do not capture injuries, suspensions, trades, or coaching changes. The source itself lists “frequency and severity of injuries suffered by some teams, resting of older key players or changes in the coaching staff” as possible volatility explanations [PAGE 11]. The structural-break model is the formal veto channel: if an event changes team strength by \(\delta\) in points and the break test is significant, the constant-strength model is vetoed for that team-window [PAGE 7, 12]. Weather is a weak direct veto in an indoor league; the stronger weather-adjacent channel is travel and scheduling, which the back-to-back term only partially captures. The adjudication rule should be: if the physical event is known before the forecast and is large relative to residual variance, the static model is vetoed; if the event is unknown or statistically indistinguishable from noise, the static model survives. The source’s break table provides the audit trail: dates such as injuries and trades are the physical/biomechanical layer, while the AR(1) null result prevents turning those events into a persistent momentum layer [PAGE 12–13].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
1. Structural-break veto. Counterfactual: for a team with a dateable trade or injury, the static model should have larger post-event forecast error than a break-adjusted model over a pre-registered post-event window. Prediction: the break-adjusted model should lower MSE and MAE on that subset; if it does not, the break model is vetoed. The source reports break dates and changes in points, e.g., Miami on 07.01.2007 with change 8.1302 and Washington on 15.03.2012 with change 9.1682 [PAGE 14]. Verifiable check: compare Table 5 event windows against out-of-sample errors from Tables 6–7. If the break-adjusted model is not better and not in the 95% model confidence set, the structural-break explanation is rejected for that window.

2. Momentum/hot-hand veto. Counterfactual: if persistent momentum exists, the AR(1) state-space model should have \(\phi\) bounded away from zero, positive autocorrelation in static residuals, and better forecast accuracy than the static model. Prediction: the dynamic model should enter the model confidence set and reduce MSE/MAE. The source instead finds \(\phi\) close to zero, dynamic and static log-likelihoods “basically identical,” and no autocorrelation rejection [PAGE 13]. Verifiable check: if a future sample produces \(\hat\phi\) near zero and the dynamic model is excluded from the confidence set, the momentum hypothesis is vetoed. The source’s Table 6 marks the dynamic model with a dagger in several seasons, which is consistent with this veto [PAGE 16].

3. Heteroscedasticity veto. Counterfactual: if team-specific variances are real and forecast-relevant, the heteroscedastic MLE/FGLS model should improve likelihood and should not be systematically excluded from the confidence set. Prediction: the heteroscedastic model should beat the homoscedastic model in seasons where the LR/F tests reject equal variance, especially 2008–2009, 2009–2010, and 2013–2014 [PAGE 10]. Verifiable check: use the reported p-values and the forecast table; if the heteroscedastic model is not better in those seasons and is often excluded, the practical forecasting value of the variance correction is vetoed even if the in-sample test rejects. The source’s mixed forecast results and the frequent inclusion of combined forecasts support this conditional veto [PAGE 16–17].
</RLVR_COUNTERFACTUAL_VETOES>