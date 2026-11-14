---
source: "2012 - Playing Success and Local Market Size in Spanish Football League Can Small Cities Dream of Winning Teams - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/journals/Journal of Quantitative Analysis in Sports/2012"
pages: 22
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4337
---

<NATIVE_REASONING>
The user wants a deep analysis of a specific research paper about Spanish football league playing success and local market size. They want me to act as the GSE + GSI Frontier Reasoning Foundry with strict invariants:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, some of these sections (CROSS_LAYER_VETO_ADJUDICATION about physical/biomechanical/weather) seem mismatched for a sports economics paper about market size and football success. But I must follow the format strictly. I need to adapt these sections to the content while keeping the XML tags exact.

The source text is 22 pages (pages 1-21 visible in text, probably page 22 is references end). I need to cite exact [PAGE N] markers. Looking at the text, page numbers appear at bottoms: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21. So I can cite [PAGE 1], [PAGE 6], etc.

Key content to extract:
- Abstract [PAGE 1]
- Introduction [PAGE 1]
- Analytical Framework [PAGE 2-4]
- Empirical Analysis [PAGE 5-11]
- Data and Variable Definitions [PAGE 6-8]
- Model Specifications [PAGE 9-10]
- Estimation Results [PAGE 10-13]
- Table 1 [PAGE 11-12]
- Table 2 [PAGE 12-13]
- Discussion [PAGE 13-17]
- Table 3 [PAGE 14-16]
- Figure 1 [PAGE 16]
- Figure 2 [PAGE 17]
- Table 4 [PAGE 18]
- Concluding Remarks [PAGE 18-19]
- References [PAGE 19-21]

Equations:
- Beta distribution: f(y; μ, Φ) = [Γ(Φ) / (Γ(μΦ)Γ((1-μ)Φ))] * y^(μΦ - 1) * (1-y)^((1-μ)Φ - 1), but the text doesn't give full formula, just mentions μ and Φ parameters [PAGE 9]. I should reconstruct formally but note it's from the paper's description. Actually, the paper says "where μ and Φ are, respectively, one location and one scale parameter (μ > 0, Φ > 0), B(·) is the beta function and 0 < y < 1." I can write the beta PDF formally.
- PABP = OP - PP [PAGE 13, equation (2)]
- Playing success index: score / 492, where 492 = 41 points/season * 12 seasons [PAGE 6]
- Marginal effects: ∂y/∂x_i [PAGE 11]
- Thresholds: y = 0.93, 0.88, 0.61 for Champions League, UEFA Cup, Keep in First Division [PAGE 18, footnote 11]

Towns/cities:
- Adjusted town population is best explanatory power (lowest AIC) [PAGE 11]
- Marginal effect of market size for adjusted town population: 0.2113*** [PAGE 12, Table 2]
- Interpretation: 1% increase in market size raises performance by ~0.21% [PAGE 11-12]
- Managerial change: negative significant [PAGE 11]
- Foundation year: negative significant (age effect) [PAGE 11]

Teams in Table 3 [PAGE 14-16]:
- Villarreal: OP 63.01, PP 16.24, PABP 46.77
- Deportivo A Coruña: 88.21, 52.27, 35.94
- Real Sociedad: 75.41, 45.35, 30.06
- Celta Vigo: 77.03, 54.78, 22.26
- Valencia: 91.46, 70.44, 21.02
- ...
- Barcelona: 96.54, 83.04, 13.51
- Real Madrid: 95.93, 87.24, 8.70
- Atlético Madrid: 74.59, 81.83, -7.24
- ...

Table 4 [PAGE 18]:
- UEFA Champions League appearance: 3,751.83 thousand (3.75 million)
- UEFA Cup appearance: 2,100.65 thousand
- Keep on First Division: 437.03 thousand

No betting lines. No toy equations. Need formal LaTeX.

Since this is a sports economics paper, CROSS_LAYER_VETO_ADJUDICATION about physical/biomechanical/weather is odd. I'll interpret it as cross-layer vetoes: economic/model layer vetoes (e.g., multicollinearity, omitted variable bias, bounded dependent variable), and note that physical/biomechanical/weather factors are exogenous to this market-size model but would constitute vetoes if introduced as unobserved confounders. I must not invent fake ratios.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR likely means Reinforcement Learning from Verifiable Rewards? Or some framework. I'll create 3 counterfactual veto scenarios based on the paper's logic:
1. If a small-market team (PP < 437.03k threshold) somehow sustained Champions League performance (y=0.93), the market-size model is vetoed; prediction: requires non-market revenue injection > X.
2. If managerial change coefficient became positive under win-maximization, the Grusky hypothesis is vetoed.
3. If foundation year loses significance when controlling for stadium capacity, the age effect is vetoed by cohort/venue confounding.

Need to ensure >=1000 words total across sections. THINK_TRACE >=400 words.

Let's draft carefully.

Structure:
<THINK_TRACE>
- Multi-hop derivation: market size -> revenue -> talent acquisition -> win percentage -> playing success index.
- Causal chain: local market size (log adjusted town population) -> drawing potential -> revenue -> payroll (75% of expenditure) -> talent -> performance.
- Nonlinearity: beta/fractional logit because y in (0,1); OLS violates bounded interval and heteroskedasticity [PAGE 10].
- Gray-zone audit: multicollinearity between operating revenues and market size [PAGE 8]; omitted variable bias if payroll excluded but correlated; proxy payroll by operating revenues [PAGE 8]; right-skewed proxies log-transformed [PAGE 7, footnote 2]; single-year data assumption [PAGE 8, footnote 6]; AIC selection [PAGE 11]; causal direction (performance -> revenue reverse causality) Hall et al. 2002 [PAGE 8 ref].
- Word count: aim ~500 words.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
- Dependent variable: playing success index y_i ∈ [0,1], y_i = S_i / 492, S_i = Σ_{t=1995}^{2007} rank_points_{it}, max 41 per season × 12 seasons = 492 [PAGE 6].
- Beta model: y_i ~ Beta(μ_i Φ, (1-μ_i) Φ), μ_i = logistic(x_i'β), Φ > 0 scale/precision [PAGE 9]. Variance = μ(1-μ)/(1+Φ) [implied, though paper doesn't state variance formula explicitly, but I can state formal beta variance]. Actually paper says variance greatest near 0.5 [PAGE 9]. I'll write formal LaTeX.
- Fractional logit: E[y|x] = Λ(x'β), estimated by QML [PAGE 9-10, Papke & Wooldridge 1996].
- PABP identity: PABP_i = OP_i - PP_i [PAGE 13, eq. 2].
- Marginal effect: ME_k = ∂E[y|x]/∂x_k evaluated at sample means [PAGE 11-12, Table 2].
- Units: market size in thousands (adjusted town population) [PAGE 18, Table 4]; performance index dimensionless proportion [0,1]; coefficients semi-elasticity because log market size [PAGE 7, footnote 2].
- Breakdown/singularity: y=0 or y=1 excluded from beta likelihood (open interval) but handled by fractional logit [PAGE 9]; multicollinearity if operating revenues included [PAGE 8]; linear probability model invalid due to heteroskedasticity and out-of-range predictions [PAGE 10].
- Citations: [PAGE 6], [PAGE 9], [PAGE 10], [PAGE 11], [PAGE 12], [PAGE 13], [PAGE 18].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
- Lineage: Rottenberg 1956 [PAGE 1 ref], Scully 1974 [PAGE 2], Sloane 1971 [PAGE 3], El Hodiri & Quirk 1971 [PAGE 1], Noll 1974 [PAGE 1], Quirk & Fort 1992 [PAGE 1], Szymanski 2003 [PAGE 1], Zimbalist 1992 [PAGE 1], Bradbury 2007 [PAGE 5], Burger & Walters 2003 [PAGE 2-3], Krautmann 2009 [PAGE 3], Késenne 2007 [PAGE 3], Papke & Wooldridge 1996 [PAGE 9], Kieschnick & McCullough 2003 [PAGE 9-10].
- Multi-week traps: small-market teams cannot relocate (open system, promotion/relegation) [PAGE 4]; trap of conflating revenue with payroll [PAGE 8]; trap of linear OLS on bounded proportion [PAGE 10]; trap of assuming predicted performance = entitlement [PAGE 18].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
- Crisis habit regression: when big-market teams underperform relative to prediction (Atlético, Málaga, Murcia), fans/owners may regress to crisis habits: firing coaches (managerial change), which has negative coefficient [-0.1468 to -0.1883] [PAGE 11-12], worsening performance.
- Counter-trap: small-market teams overperforming (Villarreal, Deportivo, Numancia) may trigger expectation inflation; if they then chase big-market payrolls, they violate zero-profit budget constraint and risk financial instability [PAGE 3-4].
- Clock: ten-year reference period 1995-1996 to 2006-2007 [PAGE 6]; long-term structural index vs short-term volatility; foundation year negative coefficient means older teams have advantage [PAGE 11], so new clubs face a time-invariant disadvantage that compounds across seasons.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
- Economic layer: market size coefficient positive and significant across all four proxies and both models [PAGE 10-11]. Veto if any proxy becomes insignificant under alternative specification.
- Data layer: multicollinearity between operating revenues and market size prevents including payroll directly [PAGE 8]; this is a veto on causal identification of payroll channel.
- Model layer: beta distribution cannot handle y ∈ {0,1}; fractional logit required for boundary observations (Vecindario, Pontevedra, Algeciras have OP=0.00 [PAGE 14-15]); using beta on zeros would be singular/breakdown [PAGE 9].
- Physical/biomechanical/weather layer: The paper's model is purely economic/geographic; it contains no biomechanical, weather, or physical performance variables. Any claim about match-day outcomes from this model is vetoed because the dependent variable is a decade-aggregated ranking proportion [PAGE 6], not per-game physics. Weather or injury shocks are averaged out in the 12-season index [PAGE 6], so short-term physical vetoes do not apply to the structural estimate but would invalidate single-season extrapolation.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable scenarios:
1. Veto: A team with adjusted town population below the First Division retention threshold (437.03 thousand) sustains a playing success index y ≥ 0.61 over a full 12-season cycle. Prediction: The market-size structural model is falsified; requires non-market revenue (e.g., owner subsidy, TV rights windfall) exceeding local drawing potential.
2. Veto: The managerial change coefficient turns positive and significant when the sample is restricted to utility-maximizing clubs with stable ownership. Prediction: Grusky's turnover hypothesis and the paper's negative managerial-change effect [-0.1468** for adjusted town population] are context-dependent, not structural [PAGE 11-12].
3. Veto: Foundation year loses statistical significance after adding stadium capacity and historical Serie A tenure as controls. Prediction: The "age effect" [-0.0034***] is a spurious proxy for infrastructure/cohort effects, not an independent loyalty accumulation channel [PAGE 11-12].
</RLVR_COUNTERFACTUAL_VETOES>

Now I need to make sure total words >= 1000. THINK_TRACE ~500. SOURCE_OPERATORS ~300. Others ~200 each. Should be fine.

Need to be careful: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." I won't invent ratios. All equations are from the paper or standard econometrics.

Also: "State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." I will include these.

"When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." I'll include verbatim quotes where useful.

No betting lines. None.

Let's write it out. I need to ensure XML sections are exactly as specified. I'll write comprehensive content.

Double-check page citations from text:
- Page 1: abstract, intro.
- Page 2: analytical framework, Scully quote.
- Page 3: Sloane, utility maximization.
- Page 4: promotion/relegation, open system, footnote 1 about Ciudad de Murcia.
- Page 5: empirical analysis, Bradbury adaptation.
- Page 6: data, playing success index, 492 points, 1995-2007, 61 teams, Hall et al. 2002.
- Page 7: independent variables, population proxies, log scale footnote 2, Spanish provinces = MSAs footnote 3.
- Page 8: market share, potential market, control variables, payroll proxy operating revenues, payroll 75% of expenditure, ratio operating expenses/income 1.08, multicollinearity, managerial change, foundation year.
- Page 9: model specs, beta model, μ and Φ, B(·), 0 < y < 1, heteroskedasticity, fractional logit Papke & Wooldridge.
- Page 10: Kieschnick & McCullough, Bradbury OLS unsuitable, conditional expectation nonlinear, heteroskedastic, impossible predictions.
- Page 11: estimation results, Table 1 start, local market size positive very significant (1%), managerial change negative, foundation year negative, AIC Model 1 best, adjusted town population best explanatory power.
- Page 12: Table 1 continued, Table 2 marginal effects.
- Page 13: Table 2 notes, discussion, PABP = OP - PP eq (2).
- Page 14: Table 3 start, Villarreal etc.
- Page 15: Table 3 continued, Atlético etc.
- Page 16: Figure 1 scatterplot.
- Page 17: Figure 2 groups, four groups.
- Page 18: Table 4 thresholds, y=0.93, 0.88, 0.61 footnote 11.
- Page 19: concluding remarks, references start.
- Page 20: references continued.
- Page 21: references end.

Great.

Let's compose final answer. Must be in English. Use LaTeX.

Word count check: I'll aim for roughly:
- THINK_TRACE: 500 words
- SOURCE_OPERATORS: 350 words
- RETROCAUSAL: 200 words
- RECURSIVE: 200 words
- CROSS_LAYER: 250 words
- RLVR: 150 words
Total ~1650 words. Good.

Make sure not to mention odds/spreads/moneylines/totals. None.

Let's write.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper’s causal chain runs from exogenous geography to on-field outcomes through a revenue–talent mechanism. Local market size is treated as exogenous because a club cannot choose its location; clubs are socially embedded in cities, and fans exhibit low mobility and high allegiance (Gerrard, 2006, cited on [PAGE 1]). The drawing potential of the local market determines home attendance, media audience, and private revenue. Because Spanish clubs approximate win maximization subject to a zero-profit budget constraint (García del Barrio and Szymanski, 2009, cited on [PAGE 4]), additional revenue is largely routed into player expenditure. Payroll is proxied by operating revenues because payroll averages around 75% of total expenditure and the operating-expense-to-operating-income ratio is 1.08 ([PAGE 8]). However, operating revenues are closely correlated with all four market-size proxies, so entering both creates multicollinearity and misspecification risk ([PAGE 8]). This is a first-order identification gray zone: the model cannot cleanly separate the market-size effect from the payroll channel because the revenue proxy is itself a function of market size.

The dependent variable is a decade-aggregated playing success index, not single-match results. For each season from 1995–1996 to 2006–2007, teams are ranked from last in Segunda División to first in Primera División and assigned points from 0 to 41. The ten-season sum is divided by 492 (41 points × 12 seasons), yielding a proportion y ∈ [0,1] ([PAGE 6]). This construction deliberately abstracts from short-term variance, injuries, and weather, which means the estimand is structural long-term strength rather than match-day volatility. A gray zone arises because winning percentage is ruled out as meaningless across divisions under promotion/relegation (Hall et al., 2002, [PAGE 6]), yet the ranking-to-points transformation imposes an ordinal cardinalization that may not reflect true performance differences between adjacent ranks.

Model choice is driven by the bounded dependent variable. OLS on a proportion violates the bounded conditional expectation and produces heteroskedastic errors that vanish at the boundaries ([PAGE 10]). The authors therefore estimate a beta ML model and a fractional logit QML model ([PAGE 9–10]). In the beta specification, y ~ Beta(μΦ, (1−μ)Φ) with μ = logistic(x′β) and Φ > 0; variance is greatest near μ = 0.5 ([PAGE 9]). Fractional logit extends to boundary values y ∈ {0,1}, which matter because several clubs in Table 3 record observed performance of exactly 0.00 (e.g., Vecindario, Pontevedra, Algeciras, [PAGE 14–16]); a pure beta likelihood is singular at those points. AIC selects Model 1 (beta) for every proxy, and adjusted town population delivers the best explanatory power ([PAGE 11]).

Marginal effects are semi-elasticities because market size enters in logs ([PAGE 7, footnote 2]). For adjusted town population, ∂y/∂log(market size) = 0.2113**, interpreted as a 1% market-size increase raising expected performance by roughly 0.21% ([PAGE 11–12, Table 2]). Managerial change carries a negative effect (about −0.1468 to −0.1883), consistent with Grusky’s turnover hypothesis ([PAGE 11–12]). Foundation year is negative and significant, implying an age effect: older clubs possess accumulated goodwill and fan loyalty ([PAGE 11]).

The counterfactual layer constructs predicted performance PP from market size alone, holding managerial change at one coach per season and foundation year at the sample mean 1930 ([PAGE 13]). The deviation PABP = OP − PP ([PAGE 13, eq. 2]) sorts clubs into four quadrants: big-market/poor (Atlético Madrid, Málaga, Murcia), big-market/good (Barcelona, Real Madrid, Valencia), small-market/poor (Burgos, Castellón, Toledo), and small-market/good (Villarreal, Deportivo, Eibar, Numancia, [PAGE 17]). Table 4 supplies market-size thresholds in thousands of adjusted town population: 437.03 to stay in Primera División, 2,100.65 for UEFA Cup, and 3,751.83 for UEFA Champions League, corresponding to success indices y = 0.61, 0.88, and 0.93 respectively ([PAGE 18, footnote 11]).

Gray-zone risks: (i) reverse causality between performance and revenue (Hall et al., 2002, cited [PAGE 8]); (ii) right-skewed market-size proxies requiring log transformation ([PAGE 7]); (iii) single-year census and La Caixa data assumed stable over the decade ([PAGE 8, footnote 6]); (iv) AIC-based model selection may favor in-sample fit over structural stability ([PAGE 11]); (v) the zero-profit budget constraint implies small-market clubs that overperform face pressure to spend beyond sustainable revenue, creating a financial-vs-sporting trap ([PAGE 3–4]).
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX, units, assumptions, and breakdown regimes.

1. Dependent variable (playing success index), dimensionless proportion on [0,1] ([PAGE 6]):
\[
y_i = \frac{S_i}{492}, \qquad S_i = \sum_{t=1995}^{2007} r_{it}, \qquad 492 = 41 \times 12,
\]
where \(r_{it} \in \{0,\dots,41\}\) is the sequential rank score of team \(i\) in season \(t\), ordered from last in Segunda División to first in Primera División. Assumption: the 1995–2007 window has fixed division sizes, yielding 61 teams. Breakdown: interdivisional winning-percentage comparisons are invalid under promotion/relegation ([PAGE 6]); short-term match outcomes are averaged out, so single-season physical or weather shocks do not enter the estimand.

2. Market-size proxies (log-transformed because right-skewed, [PAGE 7, footnote 2]): adjusted provincial population, adjusted town population, market share, potential market. Units for Table 4 thresholds: thousands of adjusted town population ([PAGE 18]). When multiple clubs share a province, population is split equally if in the same division, or by nationwide first-vs-second-division attendance ratio (one-third assumption for second-division clubs, footnote 5 on [PAGE 8]); town population is split by average stadium attendance over seven seasons ([PAGE 7]).

3. Beta regression (Model 1, ML, [PAGE 9]):
\[
y_i \sim \operatorname{Beta}(\mu_i\Phi,\,(1-\mu_i)\Phi), \qquad 0<y_i<1,\quad \mu_i>0,\ \Phi>0,
\]
\[
\mu_i = \frac{\exp(x_i^\top\beta)}{1+\exp(x_i^\top\beta)},
\]
with beta function \(B(\cdot)\). Variance is heteroskedastic and maximal near \(\mu_i = 0.5\) ([PAGE 9]). Singularity/breakdown: the beta likelihood excludes \(y_i\in\{0,1\}\); clubs with observed performance exactly zero cannot be modeled by beta alone.

4. Fractional logit (Model 2, QML, Papke and Wooldridge 1996, [PAGE 9–10]):
\[
E[y_i\mid x_i] = \Lambda(x_i^\top\beta) = \frac{1}{1+\exp(-x_i^\top\beta)},
\]
estimated by quasi-maximum likelihood; valid for proportions including boundary values.

5. OLS invalidity conditions ([PAGE 10]): conditional expectation must be nonlinear on a bounded interval; variance must be heteroskedastic, approaching zero as mean approaches 0 or 1. OLS yields impossible predictions outside [0,1], non-normal errors, and heteroskedasticity (Buis, 2006, cited [PAGE 10]).

6. Performance-above-below-predicted identity ([PAGE 13, eq. 2]):
\[
\operatorname{PABP}_i = \operatorname{OP}_i - \operatorname{PP}_i,
\]
where OP is observed playing success index scaled to the table’s 0–100 presentation and PP is predicted from the beta model with managerial change fixed at 1 and foundation year fixed at 1930 ([PAGE 13]).

7. Marginal effects ([PAGE 11–12, Table 2]):
\[
ME_k = \left.\frac{\partial E[y\mid x]}{\partial x_k}\right|_{\bar{x}}.
\]
For adjusted town population: market size \(ME = 0.2113^{***}\); managerial change \(ME = -0.1468^{**}\); foundation year \(ME = -0.0034^{***}\). Semi-elasticity interpretation: 1% market-size increase \(\Rightarrow \approx 0.21\%\) performance increase ([PAGE 11–12]).

8. Threshold values ([PAGE 18, Table 4; footnote 11]): minimum adjusted town population for success index \(y=0.61\) (stay in Primera División) is 437.03 thousand; for \(y=0.88\) (UEFA Cup) is 2,100.65 thousand; for \(y=0.93\) (UEFA Champions League) is 3,751.83 thousand.

9. Multicollinearity breakdown ([PAGE 8]): operating revenues (payroll proxy) are closely correlated with market size; including both risks misspecification. Payroll averages 75% of total expenditure; operating expense/income ratio is 1.08 ([PAGE 8]).

Exact page citations: [PAGE 1], [PAGE 2], [PAGE 3], [PAGE 4], [PAGE 5], [PAGE 6], [PAGE 7], [PAGE 8], [PAGE 9], [PAGE 10], [PAGE 11], [PAGE 12], [PAGE 13], [PAGE 14], [PAGE 15], [PAGE 16], [PAGE 17], [PAGE 18].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage plus multi-week traps.

The paper descends from the classical sports-economics lineage: Rottenberg (1956) on the player’s labor market ([PAGE 1, refs]); Scully (1974) linking team revenues to win percentage and market size ([PAGE 2]); El-Hodiri and Quirk (1971) on league talent distribution ([PAGE 1]); Noll (1974) and Quirk and Fort (1992) on market size as a determinant of revenue and performance ([PAGE 1]); Zimbalist (1992) identifying population as the most significant revenue explainer ([PAGE 1]); Sloane (1971) on the football club as utility maximizer ([PAGE 3]); Késenne (2007) on unequal talent distribution under win maximization ([PAGE 3]); Burger and Walters (2003) finding up to six times more marginal revenue per win in the largest MLB markets ([PAGE 2–3]); and Krautmann (2009) on big-city marginal revenue as the source of dominance ([PAGE 3]). The Spanish context invokes García del Barrio and Szymanski (2009) for win maximization under a zero-profit constraint ([PAGE 4]) and the promotion/relegation open-entry structure contrasted with closed North American franchises ([PAGE 4]).

Methodologically, the study adapts Bradbury’s (2007) MLB linear OLS approach to Spanish football, extending it with nonlinear beta and fractional logit specifications ([PAGE 5]). The choice of beta versus fractional logit follows Kieschnick and McCullough (2003), who recommend these models for proportions observed on (0,1) or [0,1], noting beta is preferred in small samples ([PAGE 9–10]). Papke and Wooldridge (1996) supply the fractional logit QML foundation ([PAGE 9]).

Multi-week traps embedded in the design:
(1) The relocation trap: unlike North American franchises, Spanish clubs cannot migrate to higher-revenue markets; every city retains its local club due to fan allegiance, so underperforming big-market clubs are stuck with their location and must rebuild through the divisions ([PAGE 4], footnote 1 noting the rare Ciudad de Murcia → Granada 74 CF relocation).
(2) The revenue–payroll conflation trap: because payroll data are unavailable, operating revenues proxy payroll, but revenues and market size are collinear, so the causal payroll channel cannot be isolated ([PAGE 8]).
(3) The short-run crisis trap: managerial changes are common between and during seasons ([PAGE 8]); clubs reacting to a bad week by firing a coach invoke a negative coefficient (−0.1468 to −0.1883), likely worsening the structural position ([PAGE 11–12]).
(4) The expectation trap: predicted performance from market size sets fan expectations; clubs below threshold (e.g., under 437.03 thousand for Primera survival) that overperform create pressure to spend beyond sustainable revenue, risking financial instability ([PAGE 18]).
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock.

Crisis habit regression: when big-market clubs underperform relative to market-size prediction—Atlético Madrid (OP 74.59 vs PP 81.83, PABP −7.24), Hércules (−43.97), Murcia (−41.44) ([PAGE 15])—owners and fans tend to regress to crisis habits: frequent managerial change. The model estimates managerial change as negatively and significantly associated with performance (ME −0.1468** for adjusted town population, [PAGE 12]), consistent with Grusky’s hypothesis that higher turnover predicts poorer performance ([PAGE 11]). Thus the recursive loop is: market-size disappointment → coach firing → lower expected performance → further disappointment.

Counter-trap: small-market clubs that overperform—Villarreal (PABP +46.77), Deportivo A Coruña (+35.94), Numancia (+15.25), Eibar (+10.26) ([PAGE 14])—generate inflated expectations. If such clubs attempt to sustain overperformance by raising payroll toward big-market levels, they violate the win-maximization subject to zero-profit constraint that characterizes the Spanish league ([PAGE 4]). The counter-trap is that overperformance relative to market size is not a license to outspend the local revenue base; doing so creates a financial fragility that the model does not capture because operating revenues and market size are collinear ([PAGE 8]).

Clock: the dependent variable aggregates 12 seasons (1995–1996 to 2006–2007) into a single long-run index ([PAGE 6]), so the clock is structural, not match-by-match. Foundation year carries a negative, very significant coefficient (ME −0.0034***, [PAGE 12]), meaning clubs founded earlier possess an accumulated time-invariant advantage in goodwill and fan loyalty ([PAGE 11]). Newer clubs therefore face a compounding disadvantage: each season they remain younger relative to incumbents, the age penalty persists, and the ten-year window cannot erase cohort effects. The recursion is that short-term tactical adjustments cannot overturn a decade-scale market-size and age structure.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof and cross-layer adjudication.

Economic layer: all four market-size proxies are positive and statistically significant at the 1% level in both beta and fractional logit models ([PAGE 10–11]). A veto trigger here would be any proxy losing significance under alternative functional forms or subsample splits; none is reported.

Data layer: multicollinearity between operating revenues and market size blocks direct payroll identification ([PAGE 8]). This is a veto on estimating the talent-acquisition channel separately from the market-size channel. The payroll proxy rests on payroll being 75% of total expenditure and an expense/income ratio of 1.08 ([PAGE 8]); if those shares shift, the proxy breaks down.

Model layer: beta regression requires \(0<y<1\) and cannot accommodate boundary observations ([PAGE 9]). Table 3 contains clubs with observed performance exactly 0.00 (Vecindario, Pontevedra, Algeciras, Univ. Las Palmas, Algeciras, [PAGE 14–16]); applying beta to these would produce a singular likelihood. Fractional logit is therefore the veto-proof alternative for boundary cases, though the authors report AIC favoring beta overall ([PAGE 11]).

Physical/biomechanical/weather layer: the paper’s estimand is a decade-aggregated ranking proportion, not per-match physical output. It contains no biomechanical load, injury, weather, or pitch-condition variables. Consequently, any inference about single-game outcomes, player fatigue, or weather-dependent match results is vetoed by construction: the 12-season index averages out such short-term physical variance ([PAGE 6]). Weather or injury shocks could veto single-season extrapolations from PP, but they do not invalidate the structural market-size coefficient because the dependent variable is a long-run strength index measured in dimensionless proportion units.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR veto scenarios and predictions.

Veto scenario 1 (small-market structural breach): A club with adjusted town population below the Primera División retention threshold of 437.03 thousand sustains a playing success index \(y \ge 0.61\) over a complete 12-season cycle. Prediction: the market-size structural model is falsified; the club must be receiving non-market revenue (owner subsidy, extraordinary broadcast windfall, or debt financing) that exceeds its local drawing potential, violating the exogeneity of market size.

Veto scenario 2 (managerial-change sign reversal): Restricting the sample to utility-maximizing clubs with stable ownership and no relegation threat, the managerial-change coefficient turns positive and statistically significant. Prediction: Grusky’s turnover hypothesis and the paper’s estimated negative marginal effect (−0.1468** to −0.1883**, [PAGE 11–12]) are context-dependent rather than structural; coach turnover would then be a response to, not a cause of, poor performance.

Veto scenario 3 (age-effect spuriousness): Adding stadium capacity, historical consecutive seasons in Primera División, and city fixed effects renders foundation year statistically insignificant. Prediction: the “age effect” (ME −0.0034***, [PAGE 12]) is a spurious proxy for infrastructure and cohort effects rather than an independent channel of accumulated fan loyalty; the market-size coefficient would remain positive but the foundation-year regressor should be dropped.
</RLVR_COUNTERFACTUAL_VETOES>