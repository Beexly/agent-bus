---
source: "2019 - New Evidence in the Study of Shirking in Major League Baseball - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2019"
pages: 22
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5431
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper about shirking in Major League Baseball using the GSE + GSI Frontier Reasoning Foundry framework. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to carefully read the source text provided. It's 22 pages (though the markdown seems to cover pages 1-21 based on the footer markers). Let me extract key information:

Paper: "New Evidence in the Study of Shirking in Major League Baseball" by Richard Paulsen, Northeastern University, MIT Sloan Sports Analytics Conference 2019, Baseball Track Paper ID 13244.

Key sections:
- Introduction: principal-agent, moral hazard, shirking. MLB ideal because guaranteed salary, public contract data, effort not observable but performance is. Uses player fixed-effects. Alternative explanations: new team adjustment, teams signing players expected to improve.
- Theory and Model: Utility maximization. U_i = U(C_pt, e_t). C = c_t + ρc_t+1 + ρ²c_t+2 + ... Performance p_t linear in effort e_t + random error μ_t. Salary beyond contract: s_{t+n} = β_{t+n} + α_{n-1}(e_t + μ_t). Simplified C = S + β + (αρ)^n/(1-αρ) μ_t + (αρ)^n/(1-αρ) e_t. Utility U_t = S + β + ... - e_t². FOC: ∂U/∂e_t = (αρ)^n/(1-αρ) - 2e_t = 0 → e_t = (αρ)^n / [2(1-αρ)]. Prediction: as n increases, effort decreases (shirking hypothesis). Finite career extension. Bounded shirking discussion.
- Data and Empirical Strategy: Cot's Baseball Contracts, 2010-2017. Non-pitchers with 3+ years MLB service. 1,829 contract-year observations, 1,068 first year of new contract. 535 unique players, avg 3.4 seasons. Table 1 contract lengths. Performance: WINS (WAR) from Baseball-Reference. Controls: age, experience, league, position. Table 2 descriptive stats.
- Results: Table 3 fixed effects. Without FE: Years Left coefficient positive 0.135***. With FE linear: -0.070*. Each additional year remaining causes performance to fall by about 0.07 WINS. Non-linear: 2 years left -0.305***, 3 years left -0.297*, 4+ years left -0.209. Performance highest in final year, comparable lower level in other years.
- Table 4: free agency eligible only (6+ years service). N=1,019, 323 players. Years Left -0.115**.
- Section 5: Evidence of shirking. Alternative explanations: new team adjustment, team expectations of improvement.
- Table 5: New team controls. Years left remains negative and significant. Interaction terms mostly not significant except 2 years left * new team positive and significant.
- Table 6: Salary control (team expectation of improvement). Service > 6 only. N=1,019. Years Left -0.098**. Salary coefficient -0.058**.
- Table 7: Offensive vs Defensive WINS. Years Left: Off. WINS -0.075**, Def. WINS 0.010 (insignificant). 2 Years Left Off: -0.245**, Def: -0.053. 3 Years Left Off: -0.324**, Def: 0.012. 4+ Off: -0.259, Def: 0.071. Consistent with shirking on less observable offense.
- Table 8: Pitchers. Years Left without FE: 0.520***. With FE: 0.057 (insig). Non-linear specs insignificant. Pitchers less able to shirk.
- Conclusion: Inverse relationship between years remaining and performance. Policy implications for guaranteed contracts.

I need to map pages. The source text has page markers like "2019 Research Papers Competition Presented by: 1", "2", etc. Let me track:
- Page 1: Title, intro start
- Page 2: Intro continued, footnotes
- Page 3: Intro continued, Section 2 start
- Page 4: Theory model equations
- Page 5: Theory continued, Data start
- Page 6: Data continued, Table 1, WINS definition
- Page 7: Table 2 descriptive stats
- Page 8: Empirical strategy equations
- Page 9: Results Table 3
- Page 10: Table 3 notes, Table 4 start
- Page 11: Table 4 continued, Section 5 start
- Page 12: Section 5.1, Table 5
- Page 13: Table 5 continued, team expectation alternative
- Page 14: Table 6
- Page 15: Section 5.2 shirking evidence, offense/defense
- Page 16: Table 7 offensive/defensive
- Page 17: Pitchers, Table 8 start
- Page 18: Table 8 continued, Conclusion start
- Page 19: Conclusion continued
- Page 20: References start
- Page 21: References continued

Wait, looking at the text, the page footers appear as:
- Page 1: after title block
- Page 2: after footnote 4
- Page 3: after Section I intro roadmap
- Page 4: after equation and footnote 7
- Page 5: after footnote 8
- Page 6: after Table 1 and WINS discussion
- Page 7: after Table 2
- Page 8: after empirical strategy equations
- Page 9: after Table 3 (first part)
- Page 10: after Table 3 notes and Table 4 header
- Page 11: after Table 4 notes and Section 5 start
- Page 12: after Table 5 header
- Page 13: after Table 5 and salary discussion
- Page 14: after Table 6
- Page 15: after Section 5.2 start
- Page 16: after Table 7
- Page 17: after pitchers discussion and Table 8 start
- Page 18: after Table 8 and Conclusion start
- Page 19: after Conclusion
- Page 20: after References start
- Page 21: end of references

Actually let me look more carefully at the page breaks in the provided text:

The text shows:
"...2019 Research Papers Competition Presented by: 1" after the title block and intro beginning.
"...2019 Research Papers Competition Presented by: 2" after footnote 4 text.
"...2019 Research Papers Competition Presented by: 3" after the roadmap paragraph.
"...2019 Research Papers Competition Presented by: 4" after footnote 7.
"...2019 Research Papers Competition Presented by: 5" after footnote 8 and before Data section? Wait, looking:
"Consequently, the data employed in this study for the primary analysis consists of yearly player data from the 2010 to 2017 seasons." then page 5 marker.
Then Page 5 continues with sample restrictions.
"...2019 Research Papers Competition Presented by: 6" after Table 1 and start of WINS discussion.
"...2019 Research Papers Competition Presented by: 7" after Table 2.
"...2019 Research Papers Competition Presented by: 8" after empirical equations.
"...2019 Research Papers Competition Presented by: 9" after Table 3 first part.
"...2019 Research Papers Competition Presented by: 10" after Table 3 rest and Table 4 start.
"...2019 Research Papers Competition Presented by: 11" after Table 4 notes and Section 5 start.
"...2019 Research Papers Competition Presented by: 12" after Table 5 header.
"...2019 Research Papers Competition Presented by: 13" after Table 5 notes and team expectation discussion.
"...2019 Research Papers Competition Presented by: 14" after Table 6.
"...2019 Research Papers Competition Presented by: 15" after Section 5.2 discussion of pitchers spring training.
"...2019 Research Papers Competition Presented by: 16" after Table 7.
"...2019 Research Papers Competition Presented by: 17" after pitchers sample description and Table 8 start.
"...2019 Research Papers Competition Presented by: 18" after Table 8 and Conclusion start.
"...2019 Research Papers Competition Presented by: 19" after Conclusion.
"...2019 Research Papers Competition Presented by: 20" after References start.
"...2019 Research Papers Competition Presented by: 21" at end.

Okay, I have a good mapping. Now I need to write the response with the exact XML sections.

Important: No betting lines. No toy equations. Use formal LaTeX. Cite [PAGE N]. Verbatim quotes where possible.

Let me plan each section:

**THINK_TRACE (>=400 words):**
Deep multi-hop derivation:
1. Start from principal-agent problem (Ross 1973, Holmstrom 1979).
2. Moral hazard requires: effort unobservable/costly to monitor, production noisy, effort costly, output observable.
3. MLB setting: guaranteed contracts mean salary fixed during contract term, so marginal utility of current effort via current salary is zero; only future contract value provides incentive.
4. Model: infinite horizon discounted utility. U_t = S + β + [(αρ)^n/(1-αρ)](μ_t + e_t) - e_t². Here n = years remaining. The coefficient on e_t in the consumption term is (αρ)^n/(1-αρ). FOC yields e_t* = (αρ)^n / [2(1-αρ)]. ∂e*/∂n < 0 because 0 < αρ < 1. So effort declines as n rises. This is the shirking prediction.
5. Gray-zone audit: The paper's fixed-effects identification relies on within-player variation in years remaining. But years remaining is mechanically determined by contract signing date and length. Players self-select into multi-year contracts (positive selection). FE controls for time-invariant ability but not time-varying selection (e.g., if teams sign players they expect to improve, or if injury risk correlates with contract length). The finite-career truncation means the infinite-series formula overstates effort for players near retirement; breakdown regime is n approaching remaining career length or αρ → 1 (non-discounting). Also, the bounded shirking argument implies non-monotonicity/reputation constraints not captured by the quadratic FOC.
6. Empirical results: Without FE, β_YEARSLEFT = +0.135 (positive selection). With FE, β_YEARSLEFT = -0.070* (p<0.1). Non-linear: 2 years left -0.305***, 3 years -0.297*, 4+ -0.209. This plateau suggests bounded shirking/reputation constraints. Free-agent subsample: -0.115**. Offense vs defense: offense -0.075**, defense +0.010 (null). Pitchers: null effect (0.057 insig).
7. Multi-hop causal chain: contract length → years remaining n → marginal return to effort via future salary → optimal effort e_t* → observed WINS. Alternative paths (new team adjustment, expected improvement) tested via Table 5 (new team interactions) and Table 6 (salary controls). Both fail to explain away the effect.
8. Gray zones: clustering on player with only 535 players and 1,829 observations; robust SEs clustered may be okay but few clusters. One-tailed vs two-tailed discrepancies in Table 4/6. WINS measurement error (Baseball-Reference WAR) attenuates coefficients but differential measurement across contract years could bias.

**SOURCE_OPERATORS_AND_EQUATIONS:**
Formal LaTeX equations from the paper with units and page citations.
- Utility: U_t = S + β + [(αρ)^n/(1-αρ)](μ_t + e_t) - e_t² [PAGE 4]
- FOC: ∂U_t/∂e_t = (αρ)^n/(1-αρ) - 2e_t = 0 [PAGE 4]
- Optimal effort: e_t* = (αρ)^n / [2(1-αρ)] [PAGE 4]
- Consumption stream: C = c_t + ρc_{t+1} + ρ²c_{t+2} + ... [PAGE 3-4]
- Salary beyond contract: s_{t+n} = β_{t+n} + α_{n-1}(e_t + μ_t) [PAGE 4]
- Main regression: PERFORMANCE_it = β_0 + β_1 YEARSLEFT_it + β_2 ONEYEAR_it + X_it + α_i + λ_t + ε_it [PAGE 8]
- Non-linear regression with dummies [PAGE 8]
- Results: β_1 = -0.070 (SE 0.038) linear FE [PAGE 9]; β_2YEARSLEFT = -0.305 (0.118), β_3YEARSLEFT = -0.297 (0.170), β_4+ = -0.209 (0.187) [PAGE 9]
- Free agent subsample: β_1 = -0.115** (0.048) [PAGE 10]
- New team interactions [PAGE 12]
- Salary control: β_1 = -0.098** (0.047), Salary = -0.058** (0.025) [PAGE 14]
- Offense/defense: Off WINS β_YEARSLEFT = -0.075** (0.033); Def WINS = 0.010 (0.016) [PAGE 16]
- Pitchers: β_YEARSLEFT = 0.057 (0.070) insig [PAGE 17]
Units: WINS is dimensionless wins above replacement. Years remaining: count variable in years. Age: years. Salary: millions of 2010 USD. Experience: years of MLB service. N=1,829 contract-year obs; 535 players; avg 3.4 seasons/player [PAGE 5-6].
Breakdown/singularity: αρ → 1 causes denominator (1-αρ) → 0, effort explodes (model breakdown). n beyond remaining career length invalidates infinite horizon assumption [footnote 7, PAGE 4].

**RETROCAUSAL_GENEALOGY:**
Historical lineage:
- Ross (1973) principal-agent; Holmstrom (1979) moral hazard and observability.
- Cantor (1988) work effort and contract length.
- Lehn (1982), Krautmann (1990), Scoggins (1993), Krautmann (1993) early MLB shirking mixed results.
- Krautmann & Solow (2009), Hakes & Turner (2008), Krautmann & Donley (2009), Berri & Krautmann (2005) recent mixed results.
- O'Neill (2013) final-year contract performance increase.
- Tenure literature: Carmichael (1988), McPherson & Shapiro (1999), Holley (1977), Levin & Stephan (1991), Faria & McAdam (2015), Hansen (2009), Jacob (2013), Jones (2015), Ichino & Riphahn (2005), Scoppa (2010).
Multi-week traps: The paper covers 2010-2017 seasons. Multi-week trap could be early-season shirking vs late-season contract-year effort. The model predicts effort rises as n→0 (final year). The empirical result shows performance highest in final year and lower plateau in earlier years. This creates a "contract-year trap" where teams overpay based on final-year spike. Another trap: selecting players based on multi-year contract performance without adjusting for the n-decline, leading to systematic overvaluation of early-contract years and undervaluation of final-year walk years.

**RECURSIVE_THEORY_OF_MIND:**
Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: Under job security (guaranteed contract), players regress to low-effort habits because marginal cost of effort is borne now while benefit is deferred and discounted. The "crisis" is the approaching contract expiration (n small), which triggers effort reallocation.
- Counter-trap: Teams anticipating shirking may backload contracts, add options, or use shorter deals. But if all teams face same incentive, the market price of wins already discounts expected shirking; however, teams may still overpay for certainty. The counter-trap is that players who do not shirk (high effort types) are indistinguishable from shirkers ex ante, causing adverse selection.
- Clock: The clock is years remaining n. As n ticks down, marginal return to effort increases via α_n discounting. The model's clock is infinite horizon but finite career truncates it. Players near retirement (small remaining career length) have weaker future salary incentives, so effort declines with age independent of n. The paper controls age and age-squared.
- Recursive ToM: Team thinks player will shirk early → offers shorter contract → player knows shorter contract means less shirking window → exerts more early effort → team observes high effort → offers longer contract → player shirks. This is a fixed-point problem. The equilibrium contract length balances the shirking discount against the risk of losing the player.

**CROSS_LAYER_VETO_ADJUDICATION:**
Physical/biomechanical/weather veto proof.
- Physical layer: Baseball performance (WINS) is bounded by biomechanical limits (bat speed, pitch velocity, reaction time). A player cannot shirk below replacement level without being benched; the minimum effort is constrained by playing time decisions. The manager controls defensive substitutions and pinch-hitting, creating a floor on observable shirking.
- Biomechanical layer: Pitchers have less discretion because catcher/manager call pitches and manager removes pitcher; non-pitchers can choose swing decisions (patience vs. chasing bad pitches) which are less observable. This maps to offense vs defense results: offensive WINS affected (-0.075**), defensive WINS null (0.010). Veto: if weather or stadium factors (e.g., Coors Field) differentially affect offense/defense across contract years, could bias. But year fixed effects and league controls absorb broad environmental variation.
- Weather veto: Weather affects run scoring and defensive opportunities, but because WINS is park/league adjusted and year FEs included, weather is largely differenced out. However, if players in contract years happen to play in more favorable weather years, that's a correlation not addressed.
- Adjudication: The paper vetoes alternative explanations via Table 5 (new team interactions: only 2-years-left*new team significant, others not) and Table 6 (salary control: effect remains -0.098**). The physical veto is that defensive effort is more observable and monitored, so shirking concentrates in offense. The pitcher null result (Table 8) is a specificity veto: where monitoring is tight (pitchers), no shirking effect found.

**RLVR_COUNTERFACTUAL_VETOES:**
3 verifiable RLVR veto scenarios + predictions.
1. Veto: Re-estimate Table 3 using FanGraphs WAR instead of Baseball-Reference WAR. Prediction: sign and significance of β_YEARSLEFT should remain negative and roughly similar magnitude (-0.05 to -0.10 wins per year). If coefficient flips positive or becomes insignificant, the result is measure-specific and vetoed.
2. Veto: Restrict sample to players who did NOT change teams (stayers only). Prediction: β_YEARSLEFT remains negative; if it becomes zero, the new-team adjustment story (Table 5) is actually the driver and the paper's conclusion is vetoed.
3. Veto: Include lagged performance (t-1 WINS) as control to address mean reversion/injury recovery. Prediction: β_YEARSLEFT attenuates but remains negative; if it drops to zero, the effect is regression to the mean after injury years that coincided with contract signing, vetoing shirking interpretation.
Also mention counterfactual predictions: under pure shirking, defensive WINS should not decline with years remaining; observed null for defense supports shirking. Under pure age/decline, both offense and defense would decline; observed pattern (offense only) rejects pure aging.

Now I need to write this all out with proper XML tags, ensuring >=1000 words total and THINK_TRACE >=400 words.

Let me check word counts as I draft. I need to be thorough.

Also important: No betting lines. I won't mention any betting terms.

Let me write carefully with page citations. I'll reference pages based on the footers I identified.

Let me draft.

THINK_TRACE: I'll write ~500+ words.

SOURCE_OPERATORS_AND_EQUATIONS: Include LaTeX blocks.

RETROCAUSAL_GENEALOGY: Lineage and traps.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression, counter-trap, clock.

CROSS_LAYER_VETO_ADJUDICATION: Physical, biomechanical, weather veto.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.

Let's ensure I use [PAGE N] format.

Double-check page numbers from text:
- PAGE 3: theory model intro, consumption stream equation.
- PAGE 4: simplified C equation, utility equation, FOC, effort solution, footnote 7 about infinite horizon relaxation.
- PAGE 5: footnote 8 about quadratic assumption, data start, sample restrictions (1,829 obs, 1,068 first year, 535 players, 3.4 seasons).
- PAGE 6: Table 1 contract lengths, WINS data source.
- PAGE 7: Table 2 descriptive stats.
- PAGE 8: empirical equations linear and non-linear.
- PAGE 9: Table 3 results (first spec positive 0.135***, FE -0.070*, non-linear specs).
- PAGE 10: Table 3 notes, Table 4 results (-0.115**).
- PAGE 11: Table 4 notes, Section 5 start.
- PAGE 12: Table 5 header and results.
- PAGE 13: Table 5 notes, team expectation discussion.
- PAGE 14: Table 6 results (-0.098**, salary -0.058**).
- PAGE 15: Section 5.2 discussion of offense vs defense observability, pitchers spring training.
- PAGE 16: Table 7 offense/defense results.
- PAGE 17: pitcher sample description (1,679 obs, 522 players), Table 8 start (0.520*** without FE, 0.057 with FE insig).
- PAGE 18: Table 8 notes, Conclusion start.
- PAGE 19: Conclusion end.
- PAGE 20: References start.

I'll use these.

One thing: The prompt says "VERBATIM QUOTES" when source pages are provided. I should include a few short verbatim quotes with page citations.

Let me write now.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's core identification problem is a classic principal-agent moral hazard setup (Ross 1973; Holmstrom 1979). Because MLB contracts are effectively guaranteed (footnote 4, [PAGE 2]), a player's salary during the contract term is fixed and does not vary with current effort. The only channel through which current effort affects consumption is via future salary negotiations after the contract expires. The model on [PAGE 3]-[PAGE 4] formalizes this: the present discounted value of consumption is C = c_t + ρc_{t+1} + ρ²c_{t+2} + …, and post-contract salary in period t+n is s_{t+n} = β_{t+n} + α_{n-1}(e_t + μ_t), where α is the team's discounting of past performance and n is years remaining. After simplification, C = S + β + [(αρ)^n / (1 - αρ)](μ_t + e_t). Utility is U_t = C - e_t² (quadratic disutility). The first-order condition ∂U_t/∂e_t = (αρ)^n/(1-αρ) - 2e_t = 0 yields e_t* = (αρ)^n / [2(1-αρ)]. Because 0 < αρ < 1, ∂e_t*/∂n < 0: each additional year remaining strictly reduces optimal effort. This is the shirking hypothesis.

The gray-zone audit begins with identification. Player fixed effects (α_i) remove time-invariant ability, addressing positive selection into multi-year contracts. However, fixed effects do not remove time-varying selection: teams may sign players they expect to improve, or players may enter contracts during injury-recovery years followed by mean-reverting performance. The paper addresses these in Tables 5 and 6. Table 5 ([PAGE 12]) interacts a new-team dummy with years-remaining dummies; only the two-years-left interaction is positive and significant, while the main years-left coefficients remain negative and significant. Table 6 ([PAGE 14]) controls for salary in a free-agent-eligible subsample; β on years left remains -0.098** (SE 0.047), and salary itself enters at -0.058** (SE 0.025), indicating that expected improvement is already priced in and does not drive the result.

A second gray zone is functional form and bounded shirking. The quadratic utility assumption (footnote 8, [PAGE 5]) produces a closed-form interior solution, but the paper itself notes shirking may be bounded by reputation concerns: players shirk only up to a maximum before plateauing. The non-linear results ([PAGE 9]) support this: performance is highest in the final year and roughly flat (about 0.3 wins lower) across two, three, and four-plus years remaining. This violates a strictly linear shirking model and is consistent with a reputation-constrained effort ceiling. A third gray zone is the infinite-career assumption (footnote 7, [PAGE 4]); for players near retirement, the infinite series overstates future salary stakes, so effort should decline with age independent of n. The regressions control for age and age-squared, but the interaction of remaining career length with n is not modeled. Finally, measurement error in Baseball-Reference WINS is likely classical and attenuating, but if WAR error correlates with contract status (e.g., scorers more attentive in contract years), the -0.070 estimate could be biased either direction. The pitcher null result ([PAGE 17], β = 0.057, insig) acts as a specificity test: where monitoring is tight (pitcher pitch selection, manager removal, earlier spring training), no shirking effect appears, strengthening the causal interpretation for non-pitchers.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Theoretical model equations (verbatim structure from [PAGE 3]-[PAGE 4]):

Consumption stream:
\[
C = c_t + \rho c_{t+1} + \rho^2 c_{t+2} + \dots
\]

Post-contract salary:
\[
s_{t+n} = \beta_{t+n} + \alpha_{n-1}(e_t + \mu_t)
\]
Units: salary in inflation-adjusted millions of 2010 USD; e_t = effort (latent, units normalized by model); μ_t = iid performance noise; α, ρ ∈ (0,1) discount factors; n = years remaining on contract (count, years).

Simplified present value of consumption:
\[
C = S + \beta + \frac{(\alpha\rho)^n}{1-\alpha\rho}\mu_t + \frac{(\alpha\rho)^n}{1-\alpha\rho}e_t
\]
where S = present value of guaranteed salaries and β = effort-independent portion of future salary value.

Utility:
\[
U_t = S + \beta + \frac{(\alpha\rho)^n}{1-\alpha\rho}\mu_t + \frac{(\alpha\rho)^n}{1-\alpha\rho}e_t - e_t^2
\]
Units: utility in consumption-equivalent units; e_t² is quadratic disutility of effort.

First-order condition and solution:
\[
\frac{\partial U_t}{\partial e_t} = \frac{(\alpha\rho)^n}{1-\alpha\rho} - 2e_t = 0
\quad\Rightarrow\quad
e_t^* = \frac{(\alpha\rho)^n}{2(1-\alpha\rho)}
\]
Breakdown/singularity regime: as αρ → 1, denominator → 0 and e_t* explodes (model non-stationary); for finite careers, the infinite-horizon sum overstates effort when remaining career length is short (footnote 7, [PAGE 4]).

Main empirical specification ([PAGE 8]):
\[
\text{PERFORMANCE}_{it} = \beta_0 + \beta_1 \text{YEARSLEFT}_{it} + \beta_2 \text{ONEYEAR}_{it} + \mathbf{X}_{it} + \alpha_i + \lambda_t + \varepsilon_{it}
\]
PERFORMANCE = WINS (Wins Above Replacement, dimensionless wins above replacement-level player); YEARSLEFT = years remaining on contract; ONEYEAR = dummy for one-year contract; **X** = age, age-squared, experience (MLB service years), league dummy, position dummies; α_i = player fixed effect; λ_t = year fixed effect; ε_{it} = error. β_1 expected negative under shirking.

Non-linear specification ([PAGE 8]):
\[
\text{PERFORMANCE}_{it} = \beta_0 + \beta_1 \text{TWOYEARSLEFT}_{it} + \beta_2 \text{THREEYEARSLEFT}_{it} + \beta_3 \text{FOURPLUSYEARSLEFT}_{it} + \beta_4 \text{ONEYEAR}_{it} + \mathbf{X}_{it} + \alpha_i + \lambda_t + \varepsilon_{it}
\]

Key coefficient estimates ([PAGE 9]-[PAGE 10], [PAGE 14], [PAGE 16]-[PAGE 17]):
- Full sample, no FE: β_YEARSLEFT = +0.135*** (SE 0.038) → positive selection into multi-year contracts.
- Full sample, player FE: β_YEARSLEFT = -0.070* (SE 0.038) → each extra year remaining reduces WINS by ~0.07.
- Non-linear FE: β_2YEARSLEFT = -0.305*** (SE 0.118); β_3YEARSLEFT = -0.297* (SE 0.170); β_4+ = -0.209 (SE 0.187).
- Free-agent-eligible subsample (6+ years service), FE: β_YEARSLEFT = -0.115** (SE 0.048), N = 1,019, players = 323 ([PAGE 10]).
- New-team interaction ([PAGE 12]): main years-left remains -0.068* (spec 1) and -0.087** (spec 3); only 2YEARSLEFT × NEWTEAM is positive and significant (+0.415*, SE 0.220).
- Salary control ([PAGE 14]): β_YEARSLEFT = -0.098** (SE 0.047); β_SALARY = -0.058** (SE 0.025), salary in millions 2010 USD.
- Offense vs defense ([PAGE 16]): Off. WINS β_YEARSLEFT = -0.075** (SE 0.033); Def. WINS β_YEARSLEFT = +0.010 (SE 0.016, insignificant). Non-linear offense: 2YEARSLEFT = -0.245** (SE 0.099); 3YEARSLEFT = -0.324** (SE 0.145). Defense coefficients all small and insignificant (-0.053, +0.012, +0.071).
- Pitchers ([PAGE 17]): no FE β_YEARSLEFT = +0.520*** (SE 0.079); with FE β_YEARSLEFT = +0.057 (SE 0.070, insignificant); N = 1,679, players = 522.

Sample construction ([PAGE 5]-[PAGE 6]): contract years 2010-2017; non-pitchers with 3+ years MLB service; N = 1,829 contract-year observations; 1,068 first-year-of-contract observations; 535 unique players; mean 3.4 seasons per player. WINS from Baseball-Reference.com; salary and contract data from Cot's Baseball Contracts; controls from Baseball-Databank.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The theoretical lineage runs from Ross (1973) on the economic theory of agency and Holmstrom (1979) on moral hazard and observability, through Cantor (1988) on work effort and contract length, to the MLB-specific shirking literature. Early MLB studies—Lehn (1982), Krautmann (1990), Scoggins (1993), Krautmann (1993)—found mixed results with generally poor identification ([PAGE 2], footnote 3). More recent work—Krautmann and Solow (2009), Hakes and Turner (2008), Krautmann and Donley (2009), Berri and Krautmann (2005)—also produced mixed findings and insufficiently addressed selection into multi-year contracts ([PAGE 2], footnote 3). O'Neill (2013) examined final-year contract behavior and found a performance increase in walk years, which complements this paper's focus on early-contract shirking ([PAGE 9], footnote 13). The broader tenure literature—Carmichael (1988), McPherson and Shapiro (1999), Holley (1977), Levin and Stephan (1991), Faria and McAdam (2015) for professors; Hansen (2009), Jacob (2013), Jones (2015) for teachers; Ichino and Riphahn (2005), Scoppa (2010) for employment protection—establishes the pattern that job security reduces effort or increases absenteeism ([PAGE 2], footnote 2).

Multi-week traps embedded in the contract cycle: The model's clock is n, years remaining. As n declines toward zero, the marginal return to effort rises because current performance weighs more heavily in the next contract negotiation. This creates a within-season "contract-year trap": teams that evaluate players using raw, unadjusted performance will systematically overvalue final-year walk-year spikes (high effort, low n) and undervalue early-contract suppression (low effort, high n). A second trap is the selection/valuation loop: teams offer multi-year contracts to high-ability players (positive selection), then observe declining performance within the contract and may misattribute it to aging or decline rather than incentive-driven effort reduction, leading to premature non-tenders or trade discounting of players who are merely in the shirking phase. A third trap involves roster construction across weeks of a season: if a manager knows a player is in year one of a five-year deal, optimal playing-time allocation might deliberately reduce that player's leverage in high-leverage defensive or pinch-running situations, mechanically depressing WINS independently of effort. The paper partially addresses this through position and league controls, but does not model in-game strategic substitution as a function of contract status.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: Under guaranteed multi-year contracts, the player's default habit regresses to low effort because the marginal benefit of current effort is deferred, discounted by ρ, and attenuated by performance noise μ_t. The "crisis" is the approaching expiration of the contract (n → 0), which sharply raises the marginal return to effort and triggers an effort reallocation toward the final year. The regression results confirm this: performance is highest in the final year and roughly 0.3 wins lower in all earlier years ([PAGE 9]).

Counter-trap: Teams anticipating shirking may attempt to counter by shortening contract lengths, adding performance incentives, option years, or backloading salaries. However, if all teams face identical player incentives, the market price of a win already embeds an expected shirking discount. The counter-trap is that teams cannot observe effort types ex ante; a high-effort player and a shirker look identical at signing. This generates adverse selection: teams that offer longer contracts to secure talent systematically attract players with higher shirking propensities conditional on ability, or at least induce shirking behavior post-signing. The paper's policy implication ([PAGE 18]-[PAGE 19]) is that teams should "think twice" before multi-year commitments, precisely because the counter-trap cannot be fully priced away.

Clock dynamics: The model's infinite-horizon clock is truncated by finite career length. Effort depends on n relative to remaining career years; for older players near retirement, the future salary stake is small regardless of n, so age and age-squared controls are necessary but potentially insufficient if remaining-career length interacts with contract years remaining. The paper's age controls enter linearly and quadratically ([PAGE 9], [PAGE 12]), but no interaction between years remaining and proximity to retirement is estimated. Recursive theory of mind: Team 1 thinks Player X will shirk in years 2-4 of a 5-year deal → offers 3 years instead → Player X knows the shirking window is compressed → exerts higher early effort → Team 1 observes strong early performance → offers 5 years anyway to avoid losing him → Player X reverts to shirking. This is a fixed-point problem in contract length and effort equilibrium; the data show the reduced-form outcome (negative β on years left) but not the equilibrium contract offer strategy that would sustain or unravel it.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: Baseball performance is bounded by biomechanical and game-structural constraints. A position player cannot reduce effort below the level required to remain in the lineup without the manager benching him; playing time itself is a monitor. Defensive shirking is particularly constrained because fielding opportunities are discrete, observable, and subject to immediate managerial substitution (pinch runners, defensive replacements). This physical monitoring floor explains why defensive WINS show no contract-years effect (β = +0.010, SE 0.016, insig, [PAGE 16]), while offensive WINS decline significantly (β = -0.075**, SE 0.033, [PAGE 16]). Offensive actions—pitch selection, at-bat length, batting practice intensity—are less directly observable and thus lie above the physical veto threshold.

Biomechanical layer veto: Pitchers are subject to tighter monitoring than position players: catchers call pitches, managers remove pitchers from games, and pitchers report to spring training roughly one week earlier than non-pitchers, reducing offseason preparation shirking ([PAGE 15]). Consistent with this, the pitcher sample yields no significant years-remaining effect with player fixed effects (β = +0.057, SE 0.070, insig, [PAGE 17]), whereas non-pitchers show -0.070*. This specificity veto rejects a general age/decline story, because aging would affect pitchers and position players similarly; instead, the effect appears only where discretion over effort is high.

Weather/environment layer veto: WINS is park- and league-adjusted by construction ([PAGE 6]), and year fixed effects absorb season-wide weather and run-scoring environments ([PAGE 8], [PAGE 12]). However, if players signing multi-year contracts systematically join teams in hitter-friendly parks or benefit from favorable weather in early-contract years, the estimate could be biased upward (toward zero or positive). The new-team controls in Table 5 ([PAGE 12]) partially absorb stadium-change effects, and the years-left coefficient remains negative and significant after interacting new-team dummies, suggesting weather/stadium changes do not explain the result.

Adjudication: The alternative explanations are vetoed as follows. (1) New-team adjustment: rejected because controlling for new-team status and interactions leaves the main effect intact ([PAGE 12], Table 5). (2) Expected improvement: rejected because controlling for salary in the free-agent subsample leaves the effect intact and salary itself is negative ([PAGE 14], Table 6). (3) Pure aging/decline: rejected because the effect is present for offense but not defense, and absent for pitchers ([PAGE 16]-[PAGE 17]). The surviving explanation is effort shirking concentrated in less observable offensive dimensions during high-years-remaining periods.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto Scenario 1 — Alternate performance measure: Re-estimate Table 3 ([PAGE 9]) using FanGraphs WAR (fWAR) instead of Baseball-Reference WINS as the outcome. Because fWAR uses different fielding and baserunning adjustments, classical measurement error differences could alter the coefficient. Verifiable prediction: β_YEARSLEFT with player fixed effects should remain negative and statistically significant at the 10% level, with magnitude between -0.04 and -0.10 wins per year. If the coefficient becomes positive, insignificant, or exceeds -0.02 in magnitude, the Baseball-Reference-specific result is vetoed as a measure artifact rather than a behavioral shirking signal.

Veto Scenario 2 — Stayers-only sample: Restrict the sample to players who never changed teams during 2010-2017 (drop all new-team observations) and re-run the player fixed-effects regression. This isolates within-team contract cycles from the new-team adjustment story tested in Table 5 ([PAGE 12]). Verifiable prediction: β_YEARSLEFT remains negative and significant (roughly -0.05 to -0.08). If the coefficient falls to zero or becomes positive, the new-team/stadium-adjustment channel—not shirking—is the true driver, vetoing the paper's causal claim.

Veto Scenario 3 — Lagged-performance control: Add lagged WINS_{t-1} and a disability-list indicator as controls to address mean reversion and injury-recovery confounding. Players signing multi-year contracts may do so after down years followed by natural rebound, which would mechanically create a negative years-remaining pattern unrelated to effort. Verifiable prediction: β_YEARSLEFT attenuates but remains negative (e.g., from -0.070 to approximately -0.04 to -0.06). If it drops below -0.01 and loses significance, the effect is regression-to-the-mean from injury/off-year contract signing, vetoing the shirking interpretation.

Counterfactual consistency check: Under a pure shirking model, defensive WINS should be unaffected by years remaining because defensive effort is observable and monitored; under a pure aging model, both offensive and defensive WINS should decline with years remaining (and with age). The observed pattern—offensive decline (β = -0.075**) with defensive null (β = +0.010, insig)—selectively falsifies the aging null and supports the shirking alternative ([PAGE 16]).
</RLVR_COUNTERFACTUAL_VETOES>