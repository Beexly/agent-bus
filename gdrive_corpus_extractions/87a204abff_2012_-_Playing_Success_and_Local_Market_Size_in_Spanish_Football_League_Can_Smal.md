---
source: "2012 - Playing Success and Local Market Size in Spanish Football League Can Small Cities Dream of Winning Teams - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Journal of Quantitative Analysis in Sports/2012"
pages: 23
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5469
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper: "Playing Success and Local Market Size in Spanish Football League: Can Small Cities Dream of Winning Teams?" by Sanchez Santos, Dopico, and Castellanos (2012). The user has provided the full text across 23 pages.

Constraints:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to produce an analysis that respects these exact XML section names and content requirements. Let me plan each section.

**THINK_TRACE (>=400 words)**: Deep multi-hop derivation & gray-zone audit. I need to trace the causal chain: local market size -> revenue -> talent acquisition -> playing success. I need to audit gray zones: multicollinearity between operating revenues and market size, endogeneity (does success cause market size growth?), proxy validity (2001 census data vs 1995-2007 performance), beta vs fractional logit choice, marginal effects evaluated at means vs other points, AIC selection, threshold calculations (y=0.93, 0.88, 0.61), etc. Must be >=400 words.

**SOURCE_OPERATORS_AND_EQUATIONS**: Formal LaTeX equations from the paper. I need to reproduce:
- Beta model PDF: f(y/μ,Φ) = [y^(μΦ-1)(1-y)^((1-μ)Φ-1)] / B(μΦ, (1-μ)Φ) (need to fix the OCR'd equation on page 12). Actually looking at page 12: f(y/μ,Φ) = ... y μ·Φ-1 (y-1)(1-μ) Φ-1 ... The OCR is messy. I should state the standard beta PDF correctly but note it's from [PAGE 12].
- Logistic transformation for μ: μ = 1/(1+exp(-xβ)) or similar (implied by logistic transformation to ensure 0<μ<1).
- PABP = OP - PP (Equation 2, page 16).
- Marginal effects ∂y/∂x_i.
- Playing success index: y_i = (sum_{t=1995}^{2007} rank_points_{i,t}) / 492, where rank_points assigned 0 to 41.
- Threshold values: y = 0.93, 0.88, 0.61 corresponding to Champions League, UEFA Cup, First Division.
- Table values: Adjusted town population M.E. = 0.2113***, meaning 1% increase in market size raises performance by ~0.21%.
- Coefficients: Market size 0.9703*** for adjusted town population Model 1.
- Constant 25.0343***.
- Managerial change -0.6740**, Foundation year -0.0154***.
- AIC values.
- Control variables: team payroll (proxy: operating revenues), managerial change (avg coaches per season), foundation year.

Must include SI/information/probability units: y ∈ [0,1] proportion, market size in thousands (Table 4), log scale for proxies, population counts, etc.

Exact singularity/breakdown regimes: OLS breakdown for bounded dependent variable (impossible predictions out of [0,1], non-normal errors, heteroskedasticity approaching zero at boundaries, per page 12 citing Buis 2006). Beta distribution breaks down at y=0 or y=1 (cannot handle proportions exactly 0 or 1, per page 12). Fractional logit handles 0 or 1. Multicollinearity if operating revenues included (page 11). Small sample preference for beta per Kieschnick and McCullough (page 11). Sample: 61 teams, 12 seasons (1995-1996 to 2006-2007).

**RETROCAUSAL_GENEALOGY**: Historical/scientific lineage & multi-week traps. Lineage: Rottenberg (1956), El-Hodiri & Quirk (1971), Sloane (1971), Scully (1974), Noll (1974), Zimbalist (1992), Quirk & Fort (1992), Szymanski (2003), Burger & Walters (2003), Bradbury (2007), Papke & Wooldridge (1996), Kieschnick & McCullough (2003), Késenne (2007), Krautmann (2009), Garcia del Barrio & Szymanski (2009). Multi-week traps: promotion/relegation as open entry (Szymanski 2003), no franchise relocation, win-maximization vs profit-maximization, European Superleague rationale. "Multi-week traps" likely means temporal traps across seasons — the index averages 12 seasons, masking short-term volatility; managerial churn; foundation year age effect; thresholds are long-term structural, not week-to-week.

**RECURSIVE_THEORY_OF_MIND**: Crisis habit regression vs counter-trap vs clock. This is a strange section title but I need to interpret it in context. "Crisis habit regression" = teams reverting to mean under market-size pressure when in crisis (relegation battle). "Counter-trap" = small-market teams overperforming (Villarreal, Deportivo). "Clock" = the 12-season index / long-term structural clock vs short-term seasonal variance. Theory of mind: what do fans/owners expect? Predicted performance (PP) sets expectations; PABP measures relative efficiency. Crisis habit regression: when a big-market team underperforms (Atletico, Malaga), they regress toward predicted? Or small-market teams cannot sustain? Need to discuss recursive beliefs: fans expect success based on market size; clubs invest based on expected revenue; this creates self-fulfilling or self-defeating prophecies. Clock: the 492-point max over 12 seasons is a structural clock; relegation/promotion operates on a seasonal clock.

**CROSS_LAYER_VETO_ADJUDICATION**: Physical/biomechanical/weather veto proof. This is a weird section for a sports economics paper, but I need to interpret it as "what would veto the causal claim?" Physical layer: stadium capacity, travel distances, climate (not in paper). Biomechanical: player fatigue, injury (not in paper). Weather: not in paper. Since the paper doesn't cover these, I should state that the model is silent on these layers and thus they are exogenous vetoes not controlled for. But the prompt says "veto proof" — perhaps I need to adjudicate what would falsify the market-size claim. Physical/biomechanical/weather factors are omitted variables; if they correlate with market size (e.g., big cities have better facilities, warmer climate attracts players), they could confound. I should note the paper controls for foundation year, managerial change, revenue proxy (but drops due to multicollinearity), but does NOT control for stadium quality, climate, altitude, travel load, or biomechanical/injury load. These are veto layers: if a small-city team in a favorable climate with modern stadium overperforms, the market-size coefficient is biased upward? Actually if big cities have better facilities, omitting facilities attributes that effect to market size. I need to be careful: "veto proof" might mean demonstrating that the analysis is NOT veto-proof because these layers are unmodeled. I'll state exact omissions and conditions under which the causal claim breaks down.

**RLVR_COUNTERFACTUAL_VETOES**: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. I need to create 3 counterfactual veto scenarios that are verifiable (falsifiable). Predictions for each. No betting lines. Examples:
1. If a small-market team (below 437.03 thousand threshold) sustains First Division status for >5 consecutive seasons without exceeding payroll parity, the market-size determinism hypothesis is vetoed. Prediction: teams like Eibar/Numancia (small markets) have intermittent but not sustained success; PABP decays to mean within 3 seasons.
2. If a big-market team (above threshold) with managerial stability (avg coaches =1) and old foundation year still falls below predicted performance by >10 points for 3 consecutive seasons, the win-max utility model is vetoed; prediction: Atletico Madrid/Málaga show this but are exceptions explained by idiosyncratic ownership crises.
3. If the marginal effect of log(adjusted town population) becomes statistically insignificant (p>0.05) when stadium capacity or climate variables are added, the omitted-variable bias veto activates; prediction: coefficient on market size will attenuate by >30% because operating revenues (75% payroll) are collinear with market size.

Need to ensure total word count >= 1000 words across sections. Each section should be substantive. No betting terms (spread, total, moneyline, odds). Use "probability", "proportion", "likelihood" if needed but avoid betting context.

Citations: Use [PAGE N] markers. Verbatim quotes where appropriate.

Let's draft carefully.

**THINK_TRACE**:
Start with the structural causal model. Population -> drawing potential -> revenue -> talent -> success. But endogeneity: success also increases market size (bandwagon). Gray zones: (1) Census 2001 vs performance 1995-2007 — population may lag or lead success; (2) operating revenues dropped due to multicollinearity with market size (page 11), so payroll channel is absorbed into market size coefficient; (3) marginal effects evaluated at sample means only (page 14), nonlinearity means effects differ at other points; (4) beta vs fractional logit AIC selection; (5) Table 3 thresholds use y=0.93, 0.88, 0.61 but these are the lowest observed indices, not theoretically derived; (6) sample of 61 teams includes second division, ranking across divisions may be noisy despite Hall et al. (2002) justification; (7) linked population data includes tourists, may inflate market size for seasonal cities. Multi-hop derivation: write equations. Audit: where assumptions break.

Word count: aim for ~450-500 words.

**SOURCE_OPERATORS_AND_EQUATIONS**:
List formal LaTeX.
- Playing success index: \( y_i = \frac{1}{492} \sum_{t=1995-96}^{2006-07} r_{i,t} \), where \( r_{i,t} \in \{0,1,...,41\} \) assigned by rank order across 42 teams (last in Segunda to first in Primera). \( y_i \in [0,1] \). [PAGE 8-9]
- Beta PDF: \( f(y|\mu,\phi) = \frac{y^{\mu\phi-1}(1-y)^{(1-\mu)\phi-1}}{B(\mu\phi,(1-\mu)\phi)} \), \( 0<y<1 \), \( \mu>0, \phi>0 \). Variance greatest near \( \mu=0.5 \). Mean linked via logistic: \( \mu = \frac{1}{1+e^{-\mathbf{x}\boldsymbol{\beta}}} \). [PAGE 11-12]
- Fractional logit (Papke & Wooldridge 1996) handles \( y \in \{0,1\} \). [PAGE 12]
- PABP: \( \text{PABP}_i = \text{OP}_i - \text{PP}_i \). [PAGE 16, Eq 2]
- Marginal effect: \( \frac{\partial y}{\partial x_i} \), evaluated at means. For adjusted town population, M.E. = 0.2113***. [PAGE 14-15]
- Thresholds: for \( y \in \{0.93, 0.88, 0.61\} \), market size thresholds = {3,751.83, 2,100.65, 437.03} thousand inhabitants. [PAGE 19-20, Table 4, footnote 11]
- Coefficients: adjusted town population Model 1: constant 25.0343***, market size 0.9703*** (0.1798), managerial change -0.6740** (0.3010), foundation year -0.0154*** (0.0045). AIC = -0.9362. [PAGE 14]
- Units: population in thousands (Table 4); market size proxies logged [PAGE 9]; proportion unitless [0,1]; time span 12 seasons; 61 teams.
- Breakdown/singularity: OLS invalid for bounded proportion [PAGE 12]; beta breaks at boundaries y=0 or y=1 [PAGE 12]; multicollinearity if operating revenues included [PAGE 11]; small sample favors beta [PAGE 11].

**RETROCAUSAL_GENEALOGY**:
Lineage from Rottenberg (1956) through Szymanski (2003) to Bradbury (2007). Cite specific pages where references are mentioned (pages 3-6, 20-21). Multi-week traps: promotion/relegation as open entry (Szymanski 2003, page 5); no relocation (page 5); win-max vs profit-max (Késenne 2007, page 4-5); the 12-season index smooths weekly variance but creates a "structural clock" that may mislabel teams in transition (e.g., newly promoted teams); relegation threat creates crisis-driven managerial churn (Grusky 1963, page 14). The paper's policy implication: European Superleague (page 2-3, 21). Multi-week trap: if success is sticky over 12 seasons, then short-term counter-traps (small-market overperformance) are treated as noise; conversely, big-market dominance is treated as structural. This is a temporal aggregation trap.

**RECURSIVE_THEORY_OF_MIND**:
Crisis habit regression: teams in relegation crisis fire managers (managerial change negative effect), regressing toward lower performance. Counter-trap: small-market teams like Villarreal (PABP +46.77) sustain overperformance by defying predicted level. Clock: 492-point max over 12 seasons is a deterministic clock; PP is the expectation set by market size; fans calibrate demand to PABP not absolute OP (page 20-21). Recursive beliefs: owners invest expecting revenue from wins; fans attend expecting wins based on city size; if PABP is negative for big markets (Atletico -7.24), cognitive dissonance; if positive for small markets, bandwagon effects may endogenously grow market size, violating exogeneity assumption (page 3: market size treated as exogenous). I need to discuss theory of mind: what do agents believe about others' beliefs? Big-market clubs believe they can buy talent; small-market clubs believe they cannot; this belief equilibrium sustains dominance. Counter-trap breaks it when a small-market club invests anyway.

**CROSS_LAYER_VETO_ADJUDICATION**:
Physical layer: stadium capacity, training facilities, altitude (e.g., teams at elevation), travel distance. Not in model. If big cities have better stadiums, market size coefficient is upward biased (omitted variable). Biomechanical: player workload, injury rates, recovery (not modeled); small-market squads may have thinner rosters, more injuries; this is a mechanistic pathway from market size to success via player health. Weather: climate affects player attraction (e.g., coastal vs inland), match-day attendance; not controlled. Veto proof? The model is NOT veto-proof because these are unmodeled. However, the inclusion of foundation year proxies historical facility/fan loyalty accumulation; operating revenues proxy payroll but dropped due to collinearity. Exact veto condition: if a small-market team with inferior facilities but superior sports science (biomechanical layer) outperformspredicted, the pure market-size channel is falsified for that case. Weather veto: if a cold-climate small city outperforms a warm-climate big city, weather confounds.

**RLVR_COUNTERFACTUAL_VETOES**:
3 scenarios, verifiable, predictions.
1. Threshold persistence veto: Select teams with adjusted town population < 437.03 thousand (First Division threshold). Verifiable: track 3 consecutive seasons in Primera. Prediction: under pure market-size determinism, probability of sustained Primera > 3 seasons is near zero; counterfactual prediction: Eibar/Numancia-type clubs will cycle down within 2 seasons unless PABP > +10 persists.
2. Managerial stability veto: Big-market teams with foundation year < 1930 and managerial change = 1. Verifiable: observe if OP < PP - 5 for 3 consecutive seasons. Prediction: if yes, win-max model vetoed; expect Atletico Madrid/Málaga to remain outliers, not systematic.
3. Omitted variable veto: Re-estimate Model 1 adding stadium capacity (seats) and mean annual temperature. Verifiable: coefficient on log(market size) drops by >30% or becomes insignificant (p>0.05). Prediction: attenuation expected because operating revenues (75% payroll) are collinear with market size and stadium quality.

Need to ensure no betting lines. Words like "probability" are fine in statistical context, not betting.

Now, check word counts. I'll write generously to ensure >1000 total.

Let's compose the response with exact XML tags.

Make sure to include verbatim quotes with [PAGE N]. Example: "team revenues are directly related to the club's win percentage and to the size of the market from which it draws fans" [PAGE 5]. Or "the advantage of big-market teams results in substantial dominance by a very small group of clubs" [PAGE 2].

Also formal LaTeX.

Let's draft.

Potential issues:
- The beta equation on page 12 is OCR garbled. I will present the standard form and attribute to page 12, noting it models heteroskedasticity. That's fine.
- Need to mention SI units: population in thousands, proportion unitless, seasons count dimensionless.

Let's write.

I'll start with THINK_TRACE.

---

THINK_TRACE draft:

The paper posits a chain: local market size (exogenous, fixed by geography) determines drawing potential, which determines private revenue, which in a win-maximizing league determines talent acquisition and hence playing success. Multi-hop: (1) Census 2001 provincial/town population → adjusted market size [PAGE 9]; (2) market size → operating revenue (collinear, dropped) → player payroll (~75% of expenditure) [PAGE 10-11]; (3) payroll → win percentage → playing success index \(y_i \in [0,1]\) constructed from 12 seasons of rank points (max 492) [PAGE 8-9]. Gray zones abound. First, endogeneity: the paper treats market size as exogenous [PAGE 3], but sporting success expands fan base and retail sales (bandwagon), so \(y\) may Granger-cause market size, violating strict exogeneity. Second, population data (2001 census) are mid-sample while performance spans 1995-2007; demographic shifts are ignored [PAGE 10]. Third, operating revenues were excluded due to multicollinearity with market size [PAGE 11], meaning the market-size coefficient absorbs the payroll channel and cannot be interpreted as a pure geographic effect. Fourth, marginal effects are reported only at sample means [PAGE 14-15], yet the beta model is nonlinear; effects at the tails (\(y\to0\) or \(y\to1\)) differ. Fifth, Table 4 thresholds use the lowest observed success indices (\(y=0.93,0.88,0.61\)) as normative targets, not equilibrium values [PAGE 20, footnote 11]. Sixth, linked population includes non-residents (tourists), inflating market size for seasonal cities [PAGE 9]. Seventh, the sample mixes Primera and Segunda; although Hall et al. (2002) justify cross-division comparison [PAGE 8], ranking points assigned 0-41 across 42 teams may compress meaningful performance differences. Breakdown regimes: OLS is invalid because the dependent variable is bounded and heteroskedastic at boundaries [PAGE 12]; beta regression cannot accommodate \(y=0\) or \(y=1\) exactly [PAGE 12]; small samples favor beta over fractional logit per Kieschnick & McCullough (2003) [PAGE 11]. These gray zones imply that the estimated 0.21% performance elasticity to 1% market size [PAGE 15] is an upper-bound partial effect under omitted-variable and endogeneity bias.

Word count check: roughly 250 words. Need more. I'll expand on each gray zone and multi-hop derivation.

I'll make it longer.

---

SOURCE_OPERATORS_AND_EQUATIONS draft: formal LaTeX block.

---

RETROCAUSAL_GENEALOGY draft: lineage and traps.

---

RECURSIVE_THEORY_OF_MIND draft: crisis habit regression vs counter-trap vs clock.

---

CROSS_LAYER_VETO_ADJUDICATION draft: physical/biomechanical/weather.

---

RLVR_COUNTERFACTUAL_VETOES draft: 3 scenarios.

Let's ensure total > 1000 words. I'll write each section thoroughly.

No mention of odds, spreads, totals, moneylines. Check carefully.

Use "probability" only in statistical sense, not betting. Avoid "favorite", "underdog" in betting sense? Those are okay but maybe avoid to be safe. I'll avoid gambling lexicon entirely.

Let's write final output.

Need to ensure exact XML section names are used, no extra attributes.

I will include [PAGE N] citations liberally.

Let's write now.

One thing: The prompt says "VERBATIM QUOTES". I'll include a few short quotes with page markers.

Quote examples:
[PAGE 5]: "team revenues are directly related to the club's win percentage and to the size of the market from which it draws fans"
[PAGE 2]: "the advantage of big-market teams results in substantial dominance by a very small group of clubs"
[PAGE 12]: "impossible predictions (out of the range 0-1), non-normal errors, heteroskedasticity and nonlinear effects"
[PAGE 11]: "the beta regression is preferred" for small samples.

Let's draft carefully.

Word count estimation: THINK_TRACE ~500, SOURCE ~300, RETRO ~300, RECURSIVE ~300, CROSS ~250, RLVR ~250. Total ~1900. Good.

Let's produce.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's structural causal chain runs through four linked hops: (i) local market size is treated as exogenous because team location fixes the proximate population from which a club draws attendance, media audience, and private revenue [PAGE 3]; (ii) revenue earns depend on drawing potential, so strong-drawing areas generate stronger teams on average [PAGE 4]; (iii) in a win-(utility)-maximizing league such as the Spanish league (per García del Barrio and Szymanski, 2009), most additional income is spent on player talent to raise the win percentage [PAGE 4-5]; and (iv) playing success is observed as a long-term index \(y_i \in [0,1]\) built from 12 seasons of rank points (maximum 492 points), which smooths short-term noise but freezes a team's structural position across the 1995–2007 window [PAGE 8-9]. This chain implies that big-city advantage is not a single-match phenomenon but a cumulative, recursive revenue-talent-success loop.

Gray-zone audit reveals multiple points where the inference can break down. First, exogeneity is doubtful: the authors themselves acknowledge the bandwagon channel, by which success enlarges the market [PAGE 5], yet they regress success on market size without instrumenting for reverse causality. A club that overperforms may endogenously grow its local market, violating the strict exogeneity assumption and biasing the market-size coefficient upward. Second, the population data derive from the 2001 Census while the performance window runs from 1995–1996 to 2006–2007 [PAGE 9-10]; demographic change during the panel is ignored, so a city that expanded or contracted mid-sample is mis-measured. Third, operating revenues were dropped from the regressions because they are closely related to market size and would induce multicollinearity [PAGE 10-11]; since payroll is roughly 75% of total expenditure [PAGE 10], the market-size coefficient effectively absorbs the payroll/talent channel and cannot be interpreted as a pure geographic effect. Fourth, marginal effects are reported only at sample means [PAGE 14-15], but the beta model is nonlinear and heteroskedastic, with variance greatest near \(\mu = 0.5\) [PAGE 12]; effects at the boundaries (\(y \to 0\) or \(y \to 1\)) are not identified by the reported averages. Fifth, Table 4's threshold values use the lowest observed success indices (\(y = 0.93, 0.88, 0.61\)) as if they were normative guarantees [PAGE 20, footnote 11], which is a descriptive, not equilibrium, calibration. Sixth, the linked population proxy includes non-residents such as seasonal tourists [PAGE 9], inflating market size for coastal or holiday cities and potentially misassigning drawing potential. Seventh, mixing Primera and Segunda teams into one rank-ordered index (0 to 41 across 42 teams) may compress meaningful interdivisional performance differences despite the authors' reliance on Hall et al. (2002) to justify cross-division comparison [PAGE 8].

Breakdown regimes are explicit in the text: OLS is contravened for a bounded proportion because it generates impossible predictions outside [0,1], non-normal errors, heteroskedasticity that vanishes at the boundaries, and nonlinear effects [PAGE 12, citing Buis, 2006]; the beta distribution cannot accommodate proportions exactly equal to 0 or 1, whereas the fractional logit can [PAGE 12]; and for small samples the beta regression is preferred over fractional logit per Kieschnick and McCullough (2003) [PAGE 11]. The reported elasticity—that a 1% increase in adjusted town population raises performance by roughly 0.21% [PAGE 15]—should therefore be read as a partial, sample-mean association under omitted-variable and potential endogeneity bias, not as a structural causal effect robust to all layers of the system.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and equations extracted from the manuscript:

1. Playing success index (dependent variable), defined over \(T = 12\) seasons from 1995–1996 to 2006–2007:
\[
y_i = \frac{1}{492} \sum_{t=1}^{12} r_{i,t}, \qquad r_{i,t} \in \{0,1,\dots,41\}, \qquad y_i \in [0,1].
\]
Each season, teams are ordered from last in Segunda División to first in Primera División and assigned sequential points from 0 to 41; 492 = \(41 \times 12\) is the maximum possible score [PAGE 8-9]. Unit: dimensionless proportion.

2. Beta regression mean model (Model 1), with logistic link ensuring \(0<\mu<1\):
\[
\mu_i = \frac{1}{1+\exp(-\mathbf{x}_i^\top\boldsymbol{\beta})}, \qquad
f(y_i \mid \mu_i,\phi) = 
\frac{y_i^{\mu_i\phi - 1}(1-y_i)^{(1-\mu_i)\phi - 1}}
{B(\mu_i\phi,(1-\mu_i)\phi)}, \quad 0<y_i<1,\ \mu_i>0,\ \phi>0.
\]
The variance is greatest when the mean proportion is near 0.5, modeling heteroskedasticity [PAGE 11-12]. The OCR'd equation image on [PAGE 12] corresponds to this standard beta density with location \(\mu\) and scale \(\phi\).

3. Fractional logit alternative (Model 2), following Papke and Wooldridge (1996), which handles \(y_i \in \{0,1\}\) exactly unlike the beta distribution [PAGE 12].

4. Performance above/below predicted (Equation 2):
\[
\text{PABP}_i = \text{OP}_i - \text{PP}_i,
\]
where OP is observed performance and PP is predicted performance from the beta model with managerial change fixed at 1 and foundation year fixed at the sample average (1930) [PAGE 16]. Unit: index points on the [0,100] observed-performance scale used in Table 3.

5. Marginal effect operator for nonlinear models:
\[
\frac{\partial y}{\partial x_j} \bigg|_{\bar{\mathbf{x}}},
\]
evaluated at sample means [PAGE 14-15]. Key estimates for adjusted town population (Model 1): market-size coefficient \(0.9703^{***}\) (standard error 0.1798); marginal effect \(0.2113^{***}\), interpreted as a 1% market-size increase raising performance by approximately 0.21% [PAGE 14-15]. Managerial change coefficient \(-0.6740^{**}\) (SE 0.3010); foundation year coefficient \(-0.0154^{***}\) (SE 0.0045). AIC for this specification: \(-0.9362\) [PAGE 14].

6. Threshold values from Table 4 (Model 1, adjusted town population, in thousands of inhabitants):
\[
\begin{array}{l|c}
\text{Playing success level} & \text{Local market size threshold} \\
\hline
\text{UEFA Champions League appearance} & 3{,}751.83 \\
\text{UEFA Cup appearance} & 2{,}100.65 \\
\text{Keep on First Division} & 437.03
\end{array}
\]
Calculated for \(y = 0.93, 0.88,\) and \(0.61\), respectively [PAGE 19-20, Table 4 and footnote 11]. Unit: thousands of inhabitants (adjusted town population).

7. Control variables: team payroll proxied by operating revenues (dropped due to multicollinearity with market size) [PAGE 10-11]; managerial change measured as the average number of coaches per season over the sample [PAGE 11]; foundation year as age control [PAGE 11]. SI/information units: population counts in thousands; market-size proxies entered in logarithmic form [PAGE 9]; coefficient standard errors in parentheses; significance at 1% (***) and 5% (**) [PAGE 14].

Singularity/breakdown conditions: beta log-likelihood is singular at \(y_i=0\) or \(y_i=1\) [PAGE 12]; OLS breaks down for bounded dependent variables because conditional expectation must be nonlinear and variance heteroskedastic, approaching zero at boundaries [PAGE 12]; multicollinearity arises if operating revenues are included alongside market size [PAGE 11]; small-sample inference favors beta over fractional logit [PAGE 11].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The theoretical lineage begins with Rottenberg (1956), El-Hodiri and Quirk (1971), and Walker (1986), who established that disparity in drawing potential yields stronger teams in strong-drawing areas on average [PAGE 3]. Noll (1974), Quirk and Fort (1992), Szymanski (2003), and Zimbalist (1992) extended this to revenue and sporting performance, with Zimbalist identifying population as the most significant explanatory variable in total team revenue equations [PAGE 3]. Scully (1974) formalized the profit-maximizing mechanism: marginal revenue from an additional win is higher in larger cities, so big-market clubs bid more for talent [PAGE 5]. Burger and Walters (2003) found that in MLB the largest markets obtain up to six times more marginal revenue per victory than the smallest markets [PAGE 5]. Sloane (1971) and Késenne (2007) provided the utility-maximization counterpart, showing that win-maximizing leagues produce more unequal talent distribution than profit-maximizing leagues, with big-market clubs relatively more dominant [PAGE 4-5]. Papke and Wooldridge (1996) and Kieschnick and McCullough (2003) supplied the econometric tools for bounded proportion outcomes [PAGE 11-12]. Bradbury (2007) offered the closest precedent: an OLS model of MLB wins on metropolitan population, finding the big-market advantage slight [PAGE 8]. The present study extends Bradbury to Spanish football, substitutes nonlinear beta and fractional logit models for OLS, uses four market-size proxies, and adds controls for managerial change and foundation year [PAGE 8].

Multi-week traps arise from the temporal structure of the data and league institutions. Promotion and relegation constitute an open-entry system: any Spanish team can theoretically reach the top division, and no credible threat of franchise relocation exists because every city has a local club with entry potential [PAGE 5]. Yet the dependent variable averages 12 seasons of performance into a single index [PAGE 8-9], creating a long-term structural clock that masks weekly or seasonal volatility. A small-market club enjoying a two-season overperformance cycle is absorbed into the same \(y_i\) as a consistently mediocre club; conversely, a big-market club in temporary decline retains a high historical index. This temporal aggregation trap risks mislabeling transitional teams. Managerial churn introduces a second trap: coaching changes are common between and during seasons [PAGE 11], and the negative coefficient on managerial change [PAGE 14] suggests crisis-driven firing regresses performance downward, reinforcing the market-size hierarchy rather than disrupting it. Finally, the authors' policy conclusion—a cross-national European Superleague to equalize population differences [PAGE 2-3, 21]—is itself a retro-causal institutional proposal: it assumes that league design can override the geographically rooted revenue-talent loop that the model estimates as historically persistent.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive theory of mind here concerns what clubs, fans, and owners believe about one another's expectations, and how those beliefs stabilize or destabilize the market-size hierarchy. The model constructs predicted performance (PP) solely from local market size [PAGE 16], which functions as the socially shared expectation of what a city "deserves" in sporting terms. Fans calibrate demand and satisfaction not to absolute observed performance but to the gap PABP = OP – PP [PAGE 20-21]; this explains why aggregate demand is not adversely affected even under dominance by a few clubs, because supporters in small markets recalibrate expectations downward while big-market fans expect dominance [PAGE 21].

Crisis habit regression operates when a team falls below its predicted level. Big-market clubs with negative PABP (e.g., Atlético Madrid at −7.24, Málaga at −19.60, Murcia at −41.44) experience a crisis of relative underperformance [PAGE 17-18]. The model's negative coefficient on managerial change [PAGE 14] implies that such crises trigger coach replacements, which on average are associated with further performance losses, producing a regression toward—or even below—the market-size prediction. This is the crisis habit: underperforming relative to market size induces managerial instability, which depresses performance further, reinforcing the perception that the club is underachieving given its city.

The counter-trap is the small-market club that sustains PABP well above zero: Villarreal (+46.77), Deportivo A Coruña (+35.94), Real Sociedad (+30.06), Celta Vigo (+22.26), and Numancia (+15.25) [PAGE 17]. These clubs defy the recursive belief that small cities cannot dream of winning teams. Because their success is not attributable to market size [PAGE 17], they break the self-fulfilling loop in which small-market owners refuse to invest because they expect to lose, and fans expect little because the market is small. However, the counter-trap is unstable: if the small-market club's overperformance endogenously expands its local market (bandwagon effect) [PAGE 5], it eventually transitions into the big-market category, after which the regression logic applies to it too.

The clock is the 492-point maximum over 12 seasons [PAGE 8-9]. PP is read off this clock as a time-invariant structural endowment, while OP accumulates season by season. The recursive tension is that the clock says big markets should dominate every season, whereas the seasonal clock of promotion and relegation [PAGE 5] allows annual deviations. When a small-market team is relegated despite a positive historical PABP, or a big-market team avoids relegation despite negative PABP, agents update their beliefs about the fairness of the market-size hierarchy. The paper's evidence that small-market teams retain "regular opportunities for success" [PAGE 2] suggests the counter-trap recurs often enough to maintain fan interest, but not often enough to overturn the structural dominance encoded in PP.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The econometric claim that local market size causally determines playing success is not veto-proof across physical, biomechanical, and weather layers; these are omitted from the model and can act as confounders or independent vetoes.

Physical layer: stadium capacity, training facilities, and urban transport infrastructure are not regressors [PAGE 10-11]. If big cities possess systematically superior stadiums and training grounds, the market-size coefficient is upward biased because it captures facility quality as well as population. The authors note that operating revenues, stadium size, and income would create multicollinearity if included [PAGE 11], which means the model deliberately admits this physical-layer confounding into the market-size estimate. Veto condition: a small-market team with a modern, high-capacity stadium (e.g., a recently built municipal arena) that persistently outperforms its PP would falsify the claim that population alone determines the revenue-talent channel.

Biomechanical layer: player workload, injury incidence, recovery time, and squad depth are unmodeled. Big-market clubs can afford larger squads and sports-science staff, reducing per-player fatigue and injury risk; small-market clubs rely on thinner rotations. This is a mechanistic pathway from market resources to match-day performance that is distinct from the static revenue-talent story in the paper. Veto condition: if a small-market club sustains a low injury burden and high squad availability through sports-science investment while outperforming PP, the pure market-size mechanism is insufficient to explain the outcome.

Weather layer: climate, altitude, and seasonal tourism affect match-day attendance, player attraction, and training conditions [PAGE 9 notes linked population includes seasonal residents]. Coastal or warm-climate cities may draw larger seasonal populations and more visiting fans, inflating the market-size proxy independently of resident drawing potential. Veto condition: if a cold-climate, inland small city outperforms a warm-climate big city after controlling for population, weather is a confounding veto. The paper uses 2001 Census data and treats population as stable year-on-year [PAGE 10], ignoring seasonal climate-driven population swings.

Adjudication: the model is veto-proof only within its own informational layer—market size, managerial change, and foundation year—because it explicitly excludes revenue, stadium size, income, and other controls due to collinearity [PAGE 11]. Across physical, biomechanical, and weather layers, the model is not veto-proof. The estimated market-size effect should therefore be interpreted as a reduced-form association that bundles geographic population with unmeasured facility, climate, and athlete-health advantages correlated with city size.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable reinforcement-learning-from-verifiable-rewards (RLVR) counterfactual veto scenarios, each with a falsifiable prediction. No betting lines are referenced.

Veto Scenario 1 — Threshold persistence. Select all teams with adjusted town population below the First Division threshold of 437.03 thousand inhabitants [PAGE 20]. Verifiable condition: track whether any such team remains in Primera División for three consecutive seasons without its adjusted town population rising above threshold. Prediction under the market-size determinism hypothesis: sustained Primera membership for a sub-threshold city is statistically near-impossible because PP < 0.61 for the entire period. Counterfactual prediction: historically, Eibar, Numancia, and similar small-market clubs cycle between divisions; if any sub-threshold team maintains Primera status for >3 seasons while its PABP remains positive, the veto activates and the hypothesis that 437.03 thousand is a hard guarantee floor is rejected.

Veto Scenario 2 — Managerial stability in big markets. Identify big-market teams (adjusted town population above 2,100.65 thousand, the UEFA Cup threshold [PAGE 20]) with foundation year before 1930 and managerial change fixed at 1 (one coach per season). Verifiable condition: observe whether observed performance falls more than 5 index points below predicted performance for three consecutive seasons. Prediction under the win-maximizing utility model: stable, old, big-market clubs should not persistently underperform their market-size prediction because they can re-invest revenue in talent. Counterfactual prediction: Atlético Madrid (PABP −7.24) and Málaga (PABP −19.60) [PAGE 17-18] are outliers explained by idiosyncratic ownership crises; if multiple stable big-market clubs simultaneously show OP < PP − 5 for three consecutive seasons, the utility-maximization mechanism is vetoed and the market-size coefficient is not structural.

Veto Scenario 3 — Omitted physical variable. Re-estimate Model 1 (beta, adjusted town population) adding stadium capacity (seats) and mean annual temperature as covariates. Verifiable condition: compare the market-size coefficient and its standard error before and after inclusion. Prediction from the original paper: operating revenues were dropped because they are collinear with market size [PAGE 10-11]; stadium capacity and climate are likely similarly collinear with city size. Counterfactual prediction: if the coefficient on log(adjusted town population) attenuates by more than 30% or loses significance at the 5% level, the veto activates, showing that the original market-size effect was driven by omitted physical-layer variables rather than by population per se.
</RLVR_COUNTERFACTUAL_VETOES>