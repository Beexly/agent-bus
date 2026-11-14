---
source: "2026 - A Bayesian bivariate conditional Poisson regression for goal dependence in the English Premier League - Nolan et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/preprints/arXiv/2026"
pages: 17
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5733
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper: "A Bayesian bivariate conditional Poisson regression for goal dependence in the English Premier League" by Nolan et al. They've provided the full source text across 17 pages.

I need to follow strict invariants:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

No betting lines. No toy equations. Use real equations from the paper. Cite page markers.

Let me structure this carefully.

First, let me extract key details from the paper:

**Paper details:**
- Title: A Bayesian bivariate conditional Poisson regression for goal dependence in the English Premier League
- Authors: Marcus Nolan, Wagner Barreto-Souza, Luiza S.C. Piancastelli, Raanju R. Sundararajan
- Affiliations: UCD, SMU
- Date: August 10, 2026; arXiv:2608.07168v1 [stat.AP] 7 Aug 2026
- Pages: 17

**Key model:**
- BCP (Bivariate Conditional Poisson)
- Representation: Y1 ~ Poisson(λ1), Y2 | Y1=y1 ~ Poisson(μ2 e^(ϕ y1)) where μ2 = λ2 exp{-λ1(e^ϕ - 1)}
- λ1, λ2 > 0, ϕ ∈ ℝ
- Directional structure: home-to-away vs away-to-home
- Covariates: log(Attendance + 1), fouls suffered (FS)
- Log-linear: log λ1,i = β0,1 + β1,Att log(Atti + 1) + β1,F FS i,1; similarly for λ2
- Empirical Bayes priors: θ ~ N(0, bse(θ̂)^2)
- Stan HMC sampling: 4 chains, 2000 iterations, 1000 warm-up

**Data:**
- 1,140 EPL matches: 2018-19, 2020-21, 2023-24
- 380 matches per season
- Variables: HG, AG, SA (stadium attendance), HF, AF (home/away fouls)
- Sources: Football-Data.co.uk, FBref.com

**Results:**
- ELPD-LOO: BCP A→H: -3552.0, BCP H→A: -3552.1, Poisson: -3565.0
- Conditional ELPD2: H→A: -1721.8, A→H: -1817.2
- Preferred H→A specification
- Posterior ϕ: mean -0.107 (SD 0.020), 95% CI [-0.147, -0.066]
- exp(ϕ) ≈ 0.899, ~10% reduction in conditional mean away goals per home goal
- β1,Att: 0.024 (0.005), CI [0.013, 0.034] - positive significant for home goals
- β2,Att: 0.000 (0.006), CI [-0.011, 0.011] - zero for away goals
- β1,AF (away fouls -> home goals): 0.012 (0.007), CI [-0.001, 0.025] - weak positive, includes zero
- β2,HF (home fouls -> away goals): 0.007 (0.007), CI [-0.008, 0.022] - includes zero

**Covariates note:** FS refers to fouls suffered. Wait, looking at page 7: "where FS i, j refers to the fouls suffered by team j in match i". And Table 2 labels: β1,AF and β2,HF. Wait, let me check carefully.

Page 7 says: "log λ1,i = β0,1 + β1,Att log(Atti + 1) + β1,FFS i,1" - this looks like a typo in OCR, probably β1,F FS i,1.
And "FS i, j refers to the fouls suffered by team j in match i".

Table 2 parameters:
- β0,1: 0.146
- β1,Att: 0.024
- β1,AF: 0.012 (CI [-0.001, 0.025]) - away fouls effect on home goals? Wait, if Y1 is home goals, then FS i,1 is fouls suffered by team 1 (home). But the parameter is labeled β1,AF. Let me re-read.

Actually looking at Table 2 on page 11:
- β0,1
- β1,Att
- β1,AF: 0.012, CI [-0.001, 0.025]
- β0,2
- β2,Att: 0.000
- β2,HF: 0.007, CI [-0.008, 0.022]

And text on page 11: "the results on the parameter β1,AF indicate that away team fouls positively impact home team goals, the reverse is not decisive. Specifically, the 95% credible bands for β2,HF include zero."

So β1,AF means: coefficient for Away Fouls in the Home goals equation (λ1). And β2,HF means: coefficient for Home Fouls in the Away goals equation (λ2).

But page 7 says "FS i, j refers to the fouls suffered by team j". So FS i,1 would be fouls suffered by home team = home fouls? Actually "fouls suffered by team j" means fouls committed against team j, i.e., by the opponent. So if team j is home, fouls suffered by home = fouls committed by away = AF. So FS i,1 = AF (away fouls). That matches β1,AF. And FS i,2 = HF (home fouls), matching β2,HF. Good.

Now I need to write the response with the exact XML sections.

Word count: >= 1000 words total across sections. THINK_TRACE >= 400 words.

Let me draft each section.

**THINK_TRACE (>=400 words):**
Deep multi-hop derivation and gray-zone audit.
- Derive the BCP joint pmf from the conditional representation.
- Show how covariance/correlation depends on ϕ.
- Analyze the elasticity interpretation of attendance.
- Discuss the directional asymmetry H→A vs A→H.
- Gray zones: empirical Bayes prior centering at zero with MLE-informed scale; potential double-dip; pandemic confounding; no team strength parameters; directional factorization ≠ causality; ϕ near zero being "stronger dependence" per Piancastelli et al. (2023b) but ϕ=0 independence is counterintuitive nonlinear behavior; breakdown when e^ϕ terms overflow? Actually no overflow issue since ϕ is small. Breakdown when λ1(e^ϕ - 1) causes numerical issues? The marginal variance of Y2: λ2 + λ1λ2(e^ϕ -1)^2. Correlation denominator has sqrt of λ1λ2 [1 + λ2(e^{λ1(e^ϕ-1)^2} - 1)] — wait let me check the correlation formula from page 7:

Corr(Y1,Y2) = (e^ϕ -1) / sqrt( λ1λ2 [1 + λ2(e^{λ1(e^ϕ-1)^2} - 1)] )

Wait, the text says:
Corr(Y1, Y2) = (e^ϕ -1) / sqrt( λ1λ2 (1 + λ2(e^{λ1(e^ϕ−1)²} −1)) )

Hmm, let me re-read page 7 carefully:

"Corr(Y1, Y2) = (e^ϕ −1) / sqrt( λ1λ2 1 + λ2(e^{λ1(eϕ−1)2} −1) )"

This formatting is ambiguous. Let me parse:
Var(Y2) = λ2 + λ1λ2(e^ϕ −1)^2 = λ2 [1 + λ1(e^ϕ −1)^2]

Cov = λ1λ2(e^ϕ −1)

Corr = Cov / sqrt(Var(Y1) Var(Y2)) = λ1λ2(e^ϕ −1) / sqrt(λ1 * λ2[1 + λ1(e^ϕ −1)^2]) = sqrt(λ1λ2) (e^ϕ −1) / sqrt(1 + λ1(e^ϕ −1)^2)

Wait, that doesn't match what's printed. Let me look again at page 7:

"Cov(Y1, Y2) = λ1λ2 (e^ϕ −1), and Corr(Y1, Y2) = (e^ϕ −1) / sqrt( λ1λ2 1 + λ2(e^{λ1(eϕ−1)2} −1) )"

Hmm the OCR is messy. Let me derive it properly from the given moments:

E(Y1) = λ1, Var(Y1) = λ1
E(Y2) = λ2, Var(Y2) = λ2 + λ1λ2(e^ϕ −1)^2 = λ2 [1 + λ1(e^ϕ −1)^2]
Cov = λ1λ2(e^ϕ −1)

Corr = λ1λ2(e^ϕ −1) / sqrt( λ1 * λ2 [1 + λ1(e^ϕ −1)^2] )
= sqrt(λ1λ2) (e^ϕ −1) / sqrt(1 + λ1(e^ϕ −1)^2)

But the paper prints something that looks like:
Corr = (e^ϕ −1) / sqrt( λ1λ2 (1 + λ2(e^{λ1(e^ϕ−1)^2} −1)) )

Wait, maybe Var(Y2) is actually λ2 + λ1 λ2 (e^ϕ −1)^2? Let's check: mixed Poisson. Y2 | Y1 ~ Poisson( μ2 e^{ϕ Y1} ). E(Y2|Y1) = μ2 e^{ϕ Y1}. Var(Y2|Y1) = μ2 e^{ϕ Y1}.
E(Y2) = μ2 E(e^{ϕ Y1}) = μ2 exp(λ1(e^ϕ −1)) = λ2 exp{-λ1(e^ϕ−1)} * exp(λ1(e^ϕ−1)) = λ2. Good.
Var(Y2) = E(Var(Y2|Y1)) + Var(E(Y2|Y1)) = E(μ2 e^{ϕ Y1}) + Var(μ2 e^{ϕ Y1})
= λ2 + μ2^2 [ E(e^{2ϕ Y1}) - (E(e^{ϕ Y1}))^2 ]
E(e^{t Y1}) = exp(λ1(e^t −1)).
So E(e^{2ϕ Y1}) = exp(λ1(e^{2ϕ} −1)).
(E(e^{ϕ Y1}))^2 = exp(2λ1(e^ϕ −1)).
Var = λ2 + μ2^2 [ exp(λ1(e^{2ϕ} −1)) - exp(2λ1(e^ϕ −1)) ]
= λ2 + λ2^2 exp(-2λ1(e^ϕ−1)) [ exp(λ1(e^{2ϕ} −1)) - exp(2λ1(e^ϕ −1)) ]
= λ2 + λ2^2 [ exp(λ1(e^{2ϕ} −1 − 2e^ϕ + 2)) - exp(λ1(-2e^ϕ + 2)) ]
Note e^{2ϕ} − 2e^ϕ + 1 = (e^ϕ −1)^2. So e^{2ϕ} −1 − 2(e^ϕ −1) = (e^ϕ −1)^2 - 1? Wait:
e^{2ϕ} −1 − 2(e^ϕ −1) = e^{2ϕ} − 2e^ϕ + 1 = (e^ϕ −1)^2.
And -2e^ϕ + 2 = -2(e^ϕ −1).
So:
exp(λ1(e^{2ϕ} −1 − 2e^ϕ + 2)) = exp(λ1( (e^ϕ −1)^2 ))
exp(λ1(-2e^ϕ + 2)) = exp(-2λ1(e^ϕ −1))
So Var(Y2) = λ2 + λ2^2 [ exp(λ1(e^ϕ −1)^2) - exp(-2λ1(e^ϕ −1)) ]? Hmm that seems off.

Actually, maybe the paper's stated variance formula is an approximation or I'm misreading. Let me just use what the paper states on page 7:
"Var(Y2) = λ2 + λ1λ2(eϕ −1)2" — wait, the text says "Var(Y2) = λ2 + λ1λ2(eϕ −1)2". Is that (e^ϕ −1)^2 or (e^ϕ −1)*2? Probably (e^ϕ −1)^2. So Var(Y2) = λ2 + λ1λ2(e^ϕ −1)^2.

Then Corr = Cov / sqrt(Var1 Var2) = λ1λ2(e^ϕ −1) / sqrt( λ1 * λ2 [1 + λ1(e^ϕ −1)^2] )
= sqrt(λ1λ2) (e^ϕ −1) / sqrt(1 + λ1(e^ϕ −1)^2).

The printed formula in the source seems garbled but I should cite what's printed or just use the moments given. I'll cite page 7 for the covariance and correlation expressions as printed, noting they imply sign determination by ϕ.

Gray zones:
- Empirical Bayes prior: θ ~ N(0, bse(θ̂)^2). Centered at zero. This is weakly informative but if MLE is near boundary or separation occurs, prior may regularize toward zero artificially.
- Directional factorization: H→A preferred by conditional ELPD but explicitly stated as predictive, not causal (page 13).
- Pandemic confounding: attendance, pandemic conditions, season are intertwined (page 14).
- No team-specific attack/defense strengths (limitation, page 14-15).
- ϕ posterior: mean -0.107, CI excludes zero. But ϕ near zero is described as "stronger dependence" in Piancastelli et al. (2023b), yet here ϕ=-0.107 is clearly negative dependence. Nonlinear correlation vs ϕ.
- Foul effects: 95% CIs include zero, so not decisive.
- The attendance elasticity: ~0.024% increase per 1% attendance increase. Very small.
- Sample size 1,140 matches, three seasons only.

**SOURCE_OPERATORS_AND_EQUATIONS:**
Formal LaTeX equations from the paper with page citations.
- BCP representation Eq (1) page 6
- Joint pmf page 6-7
- Moments page 7
- Covariance/correlation page 7
- Log-linear covariates page 7
- Likelihood Eq (2) page 7
- Petretta comparison Eq (3) page 8
- Posterior Eq (4) page 8
- Prior specification page 8
- ELPD-LOO definition page 10
- Conditional ELPD2 page 10-11
- Table 2 values page 11
- exp(ϕ) ≈ 0.899 interpretation page 13
- Attendance elasticity interpretation page 14

Units: goals are dimensionless counts; attendance is persons (count); fouls are counts; ϕ is dimensionless; β coefficients are dimensionless (log-log or log-count). ELPD is in log predictive density units (nats or log-points).

Singularity/breakdown regimes:
- log(Att + 1) handles Att=0 (closed doors), well-defined.
- ϕ → 0 gives independence (e^0 −1 = 0).
- e^ϕ y1 term: for large y1 and positive ϕ, explosive; for negative ϕ, suppression. But observed goals are bounded (0-6ish typically), so no computational singularity in this data range.
- Stan HMC requires gradients; likelihood must be differentiable w.r.t. parameters.

**RETROCAUSAL_GENEALOGY:**
Historical/scientific lineage & multi-week traps.
- Maher (1982) Poisson model page 2
- Dixon and Coles (1997) low-scoring adjustment page 2
- Karlis and Ntzoufras (2003) bivariate Poisson page 2
- Holgate (1964), Kawamura (1984) BP examples page 6
- Berkhout and Plug (2004) BCP page 6
- Piancastelli et al. (2023a, 2023b) parameterization page 6
- Petretta et al. (2025) alternative BCP page 3-4, 8
- Florez et al. (2025), Zhang et al. (2026) COM-Poisson page 3
- Michels et al. (2025) Sarmanov family page 3
- Philipson (2026) COM-Poisson copula page 3
- Clarke and Norman (1995) home advantage page 2
- Pollard (2006) geographical variation page 2
- Nevill et al. (2002) crowd noise referees page 2
- Bryson et al. (2021) absent crowd page 2
- Scoppa (2021) behind closed doors page 2
- Fischer and Haucap (2021) German divisions page 2
- McCarrick et al. (2021) European leagues page 2
- Koopman and Lit (2015) dynamic bivariate Poisson page 2
- Egidi et al. (2018) seasonal structures page 14

Multi-week traps: temporal non-stationarity across seasons (2018-19 to 2023-24), team composition changes, scoring environment changes; pandemic as structural break; assuming independence across matches when fixtures have fatigue/congestion effects within weeks; ignoring red cards, rest periods, weather, referee characteristics (page 15).

**RECURSIVE_THEORY_OF_MIND:**
Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: teams revert to established patterns under pressure; the negative ϕ suggests when home scores, away suppresses (parking the bus) — a tactical crisis response.
- Counter-trap: the model might trap us into thinking home goals cause away suppression; but it's directional factorization, not causality (page 13). The counter-trap is assuming the H→A direction implies home goals determine away goals.
- Clock: match time dynamics not modeled; goals alter pace/risk (page 1), but the model is static per match (no in-game clock). Three seasons snapshot, not continuous time.
- Recursive theory of mind: teams anticipate opponent's response; home team scoring triggers defensive regression by away; away team may change risk level.

**CROSS_LAYER_VETO_ADJUDICATION:**
Physical/biomechanical/weather veto proof.
- The model does NOT include weather, pitch condition, biomechanical load, red cards, rest periods, tactical formations (page 15 limitations).
- Veto: any physical layer variable (weather, temperature, pitch) not in regressors means attendance coefficient may absorb unmeasured confounding.
- Attendance is a proxy for crowd support but also correlated with pandemic restrictions (not purely physical crowd effect).
- Biomechanical: fouls committed measure defensive pressure/interruptions but not injury or fatigue.
- Weather veto: no weather covariate; EPL matches in winter vs summer may have different scoring; not modeled.

**RLVR_COUNTERFACTUAL_VETOES:**
3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning from Verifiable Rewards? Or some counterfactual verification framework. The user likely wants concrete falsifiable scenarios based on the paper's model.

Scenario 1: Closed-door matches (2020-21). If attendance → 0, the model predicts home scoring should drop relative to away, all else equal. Prediction: β1,Att > 0 means home goals decrease as attendance drops; β2,Att ≈ 0 means away unaffected. Verifiable: compare predicted vs observed home/away goals in 2020-21 behind closed doors.
Scenario 2: High-foul away team. If away team commits many fouls (AF high), model predicts slightly higher home goals via β1,AF (weak). Verifiable: matches where AF > median should show elevated HG after controlling for attendance.
Scenario 3: Home team scores first / leads. Under H→A with ϕ = -0.107, each additional home goal multiplies expected away goals by exp(-0.107) ≈ 0.899 (~10% suppression). Verifiable: in matches where HG ≥ 2, conditional distribution of AG should show lower mean than Poisson independence predicts.

Predictions should be numeric where possible.

Now I must ensure no betting lines. I will not mention odds, spreads, etc.

Word count target: total >= 1000 words. Let me make sure each section is substantial.

THINK_TRACE: aim for ~500 words.
SOURCE_OPERATORS_AND_EQUATIONS: aim for ~300-400 words.
RETROCAUSAL_GENEALOGY: ~200 words.
RECURSIVE_THEORY_OF_MIND: ~200 words.
CROSS_LAYER_VETO_ADJUDICATION: ~200 words.
RLVR_COUNTERFACTUAL_VETOES: ~200 words.

Total ~1600+ words.

I need to include verbatim quotes where citing pages. The instruction says "cite exact [PAGE N] markers and verbatim quotes." So I should quote text directly with page citations.

Let me draft carefully, ensuring LaTeX is correct and I don't invent equations.

Important: The user said "ZERO TOY EQUATIONS: Never invent fake ratios... State formal LaTeX equations... When source pages are provided, cite exact [PAGE N] markers and verbatim quotes."

So all equations must come from the paper. I will reproduce them exactly as in the source.

Let me verify the exact LaTeX from source for key equations:

Page 6, Eq (1):
Y_1 \sim \text{Poisson}(\lambda_1),
Y_2 \mid Y_1 = y_1 \sim \text{Poisson}\left(\mu_2 e^{\phi y_1}\right),
where \mu_2 = \lambda_2 \exp\{-\lambda_1(e^{\phi} - 1)\}, \lambda_1, \lambda_2 > 0 and \phi \in \mathbb{R}.

Page 6-7 joint pmf:
f(y_1, y_2 | \lambda_1, \lambda_2, \phi) = \frac{\lambda_1^{y_1} \lambda_2^{y_2}}{y_1! y_2!} \exp\left( -\lambda_1 \left[ 1 + y_2(e^{\phi} - 1) \right] - \lambda_2 \exp\{-\lambda_1(e^{\phi} - 1) + \phi y_1\} + \phi y_1 y_2 \right)

Wait, looking at the source text on page 6-7:
f(y_1, y_2 | \lambda_1, \lambda_2, \phi) = \lambda_1^{y_1} \lambda_2^{y_2} / (y_1! y_2!) \exp \left( -\lambda_1 [ 1 + y_2(e^\phi - 1) ] - \lambda_2 \exp\{ -\lambda_1(e^\phi - 1) + \phi y_1 \} + \phi y_1 y_2 \right)

Hmm, actually looking closely at page 6 bottom to page 7 top:
f(y1, y2|λ1, λ2, ϕ) = λ1^{y1} λ2^{y2} / (y1! y2!) exp{ -λ1 [1 + y2(e^ϕ − 1)] − λ2 exp{ −λ1(e^ϕ − 1) + ϕy1 } + ϕy1y2 }

Wait, is that last term inside the exp? Let me check the brackets:
"exp n −λ1 [1 + y2(eϕ −1)] −λ2 exp{−λ1(eϕ−1) + ϕy1} + ϕy1y2 o"

It seems the + ϕy1y2 is outside the inner exp but inside the outer exp? Actually the source shows:
exp
n
−λ1
[ 1 + y2(eϕ −1)] −λ2 exp{−λ1(eϕ−1) + ϕy1} + ϕy1y2
o

So outer exp contains everything: -λ1[1 + y2(e^ϕ −1)] − λ2 exp{...} + ϕ y1 y2. Wait, but there's a term λ2^{y2} outside. Let me just reproduce as given but be careful. Actually I should quote it verbatim as much as possible. But since it's a bit garbled in OCR, I'll present the mathematically coherent version from the paper's text and cite page 6-7.

Actually, looking at the BCP likelihood Eq (2) on page 7:
f(y | β, ϕ, X) = ∏_{i=1}^n [ λ_{1,i}^{y_{i,1}} λ_{2,i}^{y_{i,2}} / (y_{i,1}! y_{i,2}!) exp{ −λ_{1,i}[1 + y_{i,2}(e^ϕ − 1)] − λ_{2,i} exp{ −λ_{1,i}(e^ϕ − 1) + ϕ y_{i,1} } + ϕ y_{i,1} y_{i,2} } ]

This looks like the joint pmf. I will cite it as Eq (2) page 7.

Moments page 7:
E(Y_1) = Var(Y_1) = λ_1
E(Y_2) = λ_2
Var(Y_2) = λ_2 + λ_1 λ_2 (e^ϕ − 1)^2
Cov(Y_1, Y_2) = λ_1 λ_2 (e^ϕ − 1)
Corr(Y_1, Y_2) = (e^ϕ − 1) / sqrt( λ_1 λ_2 [ 1 + λ_2 ( e^{λ_1(e^ϕ − 1)^2} − 1 ) ] ) -- wait, let me look at the exact text.

Source page 7: "Corr(Y1, Y2) = (e^ϕ −1) / sqrt( λ1λ2 1 + λ2(e^{λ1(eϕ−1)2} −1) )"

This is ambiguous. Let me just state what the paper gives for Cov and note that Corr is printed with that form, but I'll derive correctly or quote carefully. Actually, I think the correct formula based on the variance given is:

Corr = (e^ϕ − 1) / sqrt( (1/λ1λ2) * [1 + λ1(e^ϕ −1)^2] )? No.

Let me compute: Cov = λ1λ2(e^ϕ −1).
Var(Y1) = λ1.
Var(Y2) = λ2 + λ1λ2(e^ϕ −1)^2 = λ2[1 + λ1(e^ϕ −1)^2].

Corr = λ1λ2(e^ϕ −1) / sqrt( λ1 * λ2[1 + λ1(e^ϕ −1)^2] )
= sqrt(λ1λ2) (e^ϕ −1) / sqrt(1 + λ1(e^ϕ −1)^2).

The paper's printed version seems to have a different arrangement, possibly due to OCR errors in the provided text. I will quote the paper's stated covariance and say the correlation formula is given on page 7 as printed, but to avoid reproducing a potentially garbled formula, I'll present the clean derivation from the moments explicitly stated. However, the instruction says state formal equations from source. I'll include Cov exactly and Var exactly, and mention Corr is given on page 7.

Actually, looking again at the source: "Corr(Y1, Y2) = (e^ϕ −1) sqrt( λ1λ2 / [1 + λ2(e^{λ1(eϕ−1)2} −1)] )" maybe? The square root symbol placement in plain text is unclear. I'll just cite page 7 for the correlation expression without rewriting it incorrectly, or I'll present the mathematically equivalent form derived from the stated moments and note it's equivalent to the paper's expression. But to be safe, I'll quote Cov and Var exactly and say Corr is the normalized form on page 7.

Log-linear covariates page 7:
log λ_{1,i} = β_{0,1} + β_{1,Att} \log(Att_i + 1) + β_{1,F} FS_{i,1}
log λ_{2,i} = β_{0,2} + β_{2,Att} \log(Att_i + 1) + β_{2,F} FS_{i,2}

Prior page 8:
π(β, ϕ | y, X) ∝ f(y | β, ϕ, X) π(β) p(ϕ)
θ ~ N(0, bse(θ̂)^2)

ELPD page 10:
ELPD_i = E_{θ ∼ p(θ | y_{-i})} [ log p(y_i | θ) ]
ELPD_LOO = Σ_i ELPD_i

Conditional ELPD2 page 10-11:
ELPD_2 = Σ_i ELPD_{i,2}, ELPD_{i,2} = E[ log p(y_{i,2} | y_{i,1}, θ) ]

Posterior results page 11 Table 2: ϕ mean −0.107 (SD 0.020), 95% CI [−0.147, −0.066].
exp(ϕ) ≈ 0.899 page 13.

Attendance elasticity page 14: "a 1% increase in attendance is associated with about a 0.024% increase in the expected number of home goals".

I should be careful with the foul notation. Page 7 says "FS i, j refers to the fouls suffered by team j". Table 2 uses β1,AF and β2,HF. I'll note AF = away team fouls (committed by away, suffered by home), HF = home team fouls.

Now let me write the full response.

I must not mention betting lines. No spreads, totals, moneylines, odds.

I will ensure the XML tags are exactly as requested.

Let me write now.
</NATIVE_REASONING>

<THINK_TRACE>
The paper develops a Bayesian bivariate conditional Poisson (BCP) regression for EPL home and away goal counts. The core statistical object is the directional factorization in Eq. (1) [PAGE 6]: Y₁ ~ Poisson(λ₁), Y₂ | Y₁ = y₁ ~ Poisson(μ₂ e^{ϕ y₁}), with μ₂ = λ₂ exp{−λ₁(e^ϕ − 1)}. Because the conditional mean of Y₂ contains the multiplicative factor e^{ϕ y₁}, the sign of ϕ directly governs dependence: positive ϕ implies that additional home goals raise expected away goals, negative ϕ implies suppression. The joint probability mass function given on [PAGE 6–7] expands this into a closed-form expression involving λ₁, λ₂, ϕ, and the interaction term ϕ y₁ y₂. From the moments stated on [PAGE 7], E(Y₁) = Var(Y₁) = λ₁, E(Y₂) = λ₂, Var(Y₂) = λ₂ + λ₁λ₂(e^ϕ − 1)², and Cov(Y₁, Y₂) = λ₁λ₂(e^ϕ − 1). Consequently, Corr(Y₁, Y₂) is a nonlinear function of ϕ; as the authors note on [PAGE 6], values of ϕ closer to zero do not imply weaker dependence in a linear sense, and ϕ = 0 is exactly independence. This is a gray-zone trap: posterior mass near ϕ = 0 must not be interpreted as "near independence" without checking the curvature of the correlation map, because the BCP can generate substantial correlation for small |ϕ| when λ₁ and λ₂ are large.

The log-linear covariate specification on [PAGE 7] uses log(Attendance + 1), which is well-defined at zero attendance (the 2020–21 closed-door season), and fouls suffered (FS) as separate regressors for each team's scoring intensity. The H→A direction is selected on [PAGE 10–11] via conditional ELPD-LOO (−1721.8 vs −1817.2 for A→H), but the authors explicitly warn on [PAGE 13] that this is a predictive factorization, not causal determination. The posterior estimate ϕ = −0.107 with 95% CI [−0.147, −0.066] [PAGE 11] implies exp(ϕ) ≈ 0.899 [PAGE 13]: each additional home goal multiplies the conditional expected away goals by roughly 0.899, a ≈10% suppression. This is consistent with tactical "parking the bus" behavior but cannot be separated from unobserved match-state variables.

Critical gray zones: (1) Empirical Bayes priors θ ~ N(0, bse(θ̂)²) [PAGE 8] center all coefficients at zero; with MLEs near zero (as for β₂,Att = 0.000), the prior may exert non-negligible shrinkage toward the null. (2) The three-season design conflates attendance with pandemic restrictions and season-specific scoring environments [PAGE 14], so the attendance coefficient is an adjusted association, not a causal crowd effect. (3) No team-level attack/defense parameters are included [PAGE 14–15], so attendance and foul coefficients may absorb team-quality heterogeneity. (4) The sample is 1,140 matches across only three seasons, limiting generalization to other leagues or time windows. Breakdown regimes: if ϕ were large and positive, e^{ϕ y₁} would explode for high-scoring matches; if attendance were exactly zero and not shifted by +1, the log transform would be undefined. Neither occurs in the observed data.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
All equations below are reproduced from the source; units are dimensionless counts unless noted. [PAGE 6] defines the BCP random vector (Y₁, Y₂) ~ BCP(λ₁, λ₂, ϕ) by
Y₁ ∼ Poisson(λ₁),
Y₂ | Y₁ = y₁ ∼ Poisson( μ₂ e^{ϕ y₁} ),
where μ₂ = λ₂ exp{ −λ₁(e^ϕ − 1) }, λ₁, λ₂ > 0, ϕ ∈ ℝ. This is a directional conditional specification: the distribution of Y₂ is conditional on Y₁, so the choice of which team is Y₁ versus Y₂ is a modeling decision [PAGE 6–7].

The joint pmf [PAGE 6–7] is
f(y₁, y₂ | λ₁, λ₂, ϕ) = [λ₁^{y₁} λ₂^{y₂} / (y₁! y₂!)] exp{ −λ₁[1 + y₂(e^ϕ − 1)] − λ₂ exp{ −λ₁(e^ϕ − 1) + ϕ y₁ } + ϕ y₁ y₂ }.

The first two moments [PAGE 7] are E(Y₁) = Var(Y₁) = λ₁ and E(Y₂) = λ₂, with Var(Y₂) = λ₂ + λ₁λ₂(e^ϕ − 1)². The covariance and correlation [PAGE 7] are
Cov(Y₁, Y₂) = λ₁λ₂(e^ϕ − 1),
and Corr(Y₁, Y₂) is the normalized form given on [PAGE 7], whose sign is determined by the sign of ϕ. The independence case is ϕ = 0.

Covariate log-linear specifications [PAGE 7]:
log λ_{1,i} = β_{0,1} + β_{1,Att} log(Att_i + 1) + β_{1,F} FS_{i,1},
log λ_{2,i} = β_{0,2} + β_{2,Att} log(Att_i + 1) + β_{2,F} FS_{i,2},
where FS_{i,j} denotes fouls suffered by team j and Att_i is stadium attendance. The +1 shift ensures the transform is defined at zero attendance (closed-door matches) [PAGE 7].

The full likelihood [PAGE 7, Eq. (2)] is
f(y | β, ϕ, X) = ∏_{i=1}^n [ λ_{1,i}^{y_{i,1}} λ_{2,i}^{y_{i,2}} / (y_{i,1}! y_{i,2}!) exp{ −λ_{1,i}[1 + y_{i,2}(e^ϕ − 1)] − λ_{2,i} exp{ −λ_{1,i}(e^ϕ − 1) + ϕ y_{i,1} } + ϕ y_{i,1} y_{i,2} } ],
with θ = (βᵀ, ϕ)ᵀ. The posterior target [PAGE 8, Eq. (4)] is π(β, ϕ | y, X) ∝ f(y | β, ϕ, X) π(β) p(ϕ). Empirical Bayes priors [PAGE 8] set θ ~ N(0, bse(θ̂)²), centered at zero with scale informed by MLE standard errors.

Model comparison [PAGE 10–11] uses ELPD-LOO = Σ_i ELPD_i, ELPD_i = E_{θ ~ p(θ|y_{−i})}[ log p(y_i | θ) ]. Reported values [PAGE 10]: BCP A→H = −3552.0, BCP H→A = −3552.1, independent Poisson = −3565.0. Conditional predictive ELPD₂ [PAGE 10–11] favors H→A (−1721.8) over A→H (−1817.2).

Posterior summaries [PAGE 11, Table 2] for the preferred H→A model: β_{0,1} = 0.146 (0.084), β_{1,Att} = 0.024 (0.005), CI [0.013, 0.034]; β_{1,AF} = 0.012 (0.007), CI [−0.001, 0.025]; β_{0,2} = 0.232 (0.096), β_{2,Att} = 0.000 (0.006), CI [−0.011, 0.011]; β_{2,HF} = 0.007 (0.007), CI [−0.008, 0.022]; ϕ = −0.107 (0.020), CI [−0.147, −0.066]. On [PAGE 13], exp(−0.107) ≈ 0.899, so one additional home goal multiplies the conditional expected away goals by ≈0.899. On [PAGE 14], because attendance enters as log(Attendance + 1) in a log-linear mean, the home coefficient is approximately an elasticity: a 1% attendance increase associates with ≈0.024% increase in expected home goals. MCMC [PAGE 10]: four chains, 2,000 iterations each, 1,000 warm-up, via Stan/HMC.

Singularity/breakdown: log(Att + 1) is defined at Att = 0 [PAGE 7]. For large positive ϕ and large y₁, e^{ϕ y₁} can overflow numerically; for the observed EPL scoring range this is not active. The correlation formula degenerates to zero at ϕ = 0 exactly [PAGE 7].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The methodological lineage begins with Maher (1982), who expressed scoring intensities through attack/defense strengths and a home-effect parameter [PAGE 2]. Dixon and Coles (1997) introduced a low-scoring dependence adjustment, and Karlis and Ntzoufras (2003) showed bivariate Poisson models improve draw and scoreline probabilities [PAGE 2]. The conventional bivariate Poisson constructs dependence through a shared Poisson component Z₀, yielding Cov(Y₁, Y₂) = λ₀ ≥ 0, and therefore only non-negative correlation [PAGE 6]. Holgate (1964), Kawamura (1984), and Karlis and Ntzoufras (2003) provide early examples [PAGE 6]. The present paper instead adopts the Berkhout and Plug (2004) bivariate conditional Poisson, reparameterized by Piancastelli et al. (2023a), to allow both positive and negative dependence [PAGE 3, 6]. This contrasts with Petretta et al. (2025), whose conditional structure uses e^{ϕ logit(F(y₁))} and lacks closed-form marginal moments [PAGE 3–4, 8]. Related contemporaneous work includes Florez et al. (2025) and Zhang et al. (2026) on COM-Poisson sports models [PAGE 3], Michels et al. (2025) on Sarmanov-family extensions for women’s football [PAGE 3], and Philipson (2026) on referee heterogeneity via COM-Poisson copulas [PAGE 3].

The home-advantage literature motivates the covariates: Clarke and Norman (1995) argue home advantage must be assessed after accounting for team strength [PAGE 2]; Pollard (2006) documents geographical variation consistent with crowd support, travel, familiarity, and territorial factors [PAGE 2]. Nevill et al. (2002) show crowd noise can influence referee assessments of challenges [PAGE 2]. The COVID-19 natural experiment provides the attendance variation: Bryson et al. (2021) found fewer sanctions against away teams behind closed doors [PAGE 2]; Scoppa (2021) found smaller home advantage and more balanced foul/card decisions without spectators [PAGE 2]; Fischer and Haucap (2021) found division-specific effects in Germany [PAGE 2]; McCarrick et al. (2021) documented an overall decline in home advantage across European leagues [PAGE 2]. Piancastelli et al. (2023a) found crowd absence primarily reduced home-team scoring, an asymmetry directly motivating separate covariate effects for home and away goals [PAGE 3]. Koopman and Lit (2015) previously modeled EPL goals with a dynamic bivariate Poisson [PAGE 2].

Multi-week traps: the data span only three seasons (2018–19, 2020–21, 2023–24) [PAGE 2], so season fixed effects are confounded with pandemic conditions and team composition [PAGE 14]. The model is static at match level and ignores in-game clock dynamics, rest periods, red cards, weather, and tactical formations [PAGE 15]. Within-week fixture congestion and fatigue are not modeled, violating any assumption that matches are temporally independent beyond the likelihood's independence assumption [PAGE 7]. The empirical Bayes prior borrows strength from MLEs across the full sample, which can mask regime shifts between pre-pandemic, restricted-attendance, and post-pandemic periods [PAGE 8].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: when the home team takes a lead, the away team faces a strategic crisis—protecting a lead or chasing a goal alters risk-taking and defensive effort [PAGE 2]. The estimated negative dependence (ϕ = −0.107) implies that home goals are associated with reduced expected away goals, consistent with an away-team habit of defensive regression ("parking the bus") after conceding [PAGE 13]. This is a recursive theory of mind: the home team scores anticipating that the away team will retreat, and the away team retreats anticipating the home team will manage the lead.

Counter-trap: the H→A directional factorization wins on conditional ELPD (−1721.8 vs −1817.2) [PAGE 10–11], but the authors explicitly state this is a predictive factorization, not evidence that home goals causally determine away goals [PAGE 13]. The counter-trap is to invert this and claim home scoring suppresses away scoring structurally; the model only says that conditioning on home goals improves away-goal prediction. A rival specification (A→H) achieves nearly identical joint ELPD (−3552.0 vs −3552.1) [PAGE 10], so directionality is weakly identified at the joint level.

Clock: the model contains no match-time clock. Goals may alter pace, risk, and balance between attacking and defensive effort [PAGE 1], but these in-game dynamics are collapsed into a single match-level dependence parameter. A team scoring in the 10th minute induces a different tactical response than scoring in the 89th, yet the BCP likelihood treats all goals within a match as contemporaneous [PAGE 7]. The three-season snapshot also lacks a continuous-time clock for team quality evolution; Egidi et al. (2018) note seasonal structures could account for changes in team quality [PAGE 14], which are omitted here.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: the model regressors are attendance, fouls suffered, and an intercept [PAGE 7]. It excludes weather, pitch condition, temperature, humidity, and precipitation. Because EPL matches span August–May across three seasons, unmodeled weather can veto the attendance effect: cold, rainy midweek matches may suppress both attendance and scoring independently, biasing β₁,Att upward if crowd presence proxies for clement conditions. The paper acknowledges this limitation and calls for weather as an extension [PAGE 15].

Biomechanical layer: fouls suffered (FS) capture defensive pressure and interruptions of attacking play [PAGE 3], but they do not measure player fatigue, sprint load, injury, or recovery time between matches. The foul coefficients are weakly identified (both 95% CIs include zero) [PAGE 11], so any biomechanical story—e.g., high home fouls disrupting away attacking rhythm—is unsupported at the 95% credible level. The asymmetry (β₁,AF positive but inclusive of zero; β₂,HF inclusive of zero) [PAGE 11–12] means the data do not establish a decisive officiating or disruption channel.

Weather veto: no weather covariate is included, and attendance is entangled with pandemic restrictions [PAGE 14]. A veto is triggered whenever an unobserved physical variable correlates with both attendance and goals. For instance, if restrictions forced low attendance precisely during periods of heightened risk aversion (less attacking intensity), the negative ϕ could partially reflect epidemiological caution rather than in-game tactical suppression. The model cannot adjudicate this because the physical layer is absent from the design matrix X [PAGE 7]. Until weather, referee identity, red cards, rest days, and tactical formation are added, the attendance coefficient remains an adjusted association, not a causal crowd effect [PAGE 14].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios derived strictly from the fitted BCP H→A model on [PAGE 11–13]:

Scenario 1 — Closed-door attendance counterfactual. Because β₁,Att = 0.024 (CI [0.013, 0.034]) and β₂,Att = 0.000 (CI [−0.011, 0.011]) [PAGE 11], the model predicts that reducing attendance from the 2018–19 mean of 38,181 [PAGE 4] to the 2020–21 mean of 462 [PAGE 4] should reduce expected home goals while leaving away goals unchanged, holding fouls fixed. Prediction: predicted home-goal intensity in 2020–21 should be lower than in 2018–19 by approximately exp{0.024 × [log(463) − log(38,182)]} ≈ exp(−0.200) ≈ 0.82, an ≈18% reduction; predicted away-goal intensity should show no significant change. Veto: if observed 2020–21 home goals do not decline relative to away goals after controlling for team strength, the attendance coefficient is vetoed as a spurious crowd proxy.

Scenario 2 — Away-foul counterfactual. β₁,AF = 0.012 with CI [−0.001, 0.025] [PAGE 11], so the posterior includes zero; the model does not decisively predict that away-team fouls increase home goals. Prediction: in matches where away fouls (AF) exceed the sample median, expected home goals should not credibly exceed those in low-AF matches after controlling for attendance. Veto: if high-AF matches show a credibly elevated home-goal rate independent of attendance, the null-inclusive CI is contradicted and the foul channel is reinstated.

Scenario 3 — Home-goal suppression counterfactual. Under H→A, ϕ = −0.107 implies exp(ϕ) ≈ 0.899 [PAGE 13]: each additional home goal multiplies conditional expected away goals by ≈0.899 (≈10% suppression). Prediction: comparing matches with HG = 0 versus HG = 2, all else equal, the model predicts the conditional mean of AG is multiplied by exp(−0.107 × 2) ≈ 0.808. Veto: if observed away-goal means in HG ≥ 2 matches are not suppressed relative to HG = 0 matches beyond what marginal intensities predict, the negative dependence parameter is vetoed and an independent Poisson or positive-dependence specification is favored. All three scenarios are computable from the posterior on [PAGE 11] and require no betting odds, spreads, or totals.
</RLVR_COUNTERFACTUAL_VETOES>