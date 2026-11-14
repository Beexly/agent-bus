---
source: "2011 Moral Hazard in Long Term Guaranteed Contracts - NBA.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 12
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3166
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about moral hazard in long-term guaranteed contracts in the NBA. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user provided pages but the text seems to go up to page 8 (though the header says PAGES: 12). Let me check the content. The source text has page markers implicitly: "1", "2", "3", "4", "5", "6", "7", "8" appear. But the user said PAGES: 12. I should work with what's provided. The text ends at page 8 (references). Maybe pages 9-12 are missing or appendices not included. I should note this as a limitation/audit point.

Key content from the paper:
- Contract year effect: performance increases in final year of contract.
- Fixed effects regression: performance in final year ~10% higher than year prior.
- Non-linear: third-to-last year falls additional 5%, no significant differences beyond 4 years remaining.
- Experience interaction: effect reduced for experienced players; approaches zero for >10 years experience.
- Table 1: FE regressions of ln(Efficiency). Column (2): Years remaining -0.0870**, Years remaining squared 0.0106**, Experience -0.1026*, Team-specific experience 0.0655**, Salary 0.0033**, Total duration 0.0310*. Column (3) interaction: Years remaining ! experience 0.0167** [6.6].
- Table 2 Panel A: First year -0.0694**, Last year 0.0645*. Panel B: First year of subsequent contract relative to last year of prior: -0.1598**.
- Data: 2,260 player-year observations, 654 players, unbalanced panel. NBA efficiency index and PER robustness.
- Theoretical model: 3-period principal-agent game, risk-neutral principal, risk-averse agent, Bayesian updating of ability.
- Richard Jefferson example: opted out of $14M/year to re-sign for 4 years $38.8M (less per year but more guaranteed).
- Berri and Krautman [2006] found only 1% decrease in first year.

I need to avoid betting lines entirely. No odds, spreads, etc.

Structure:
THINK_TRACE: Deep derivation, gray-zone audit. Must be >=400 words. I'll discuss the identification strategy, fixed effects vs OLS, the nonlinearity, experience interaction, selection bias in Panel B, survivorship bias, Bayesian learning mechanism, risk aversion vs effort tradeoff, the Jefferson anecdote as wage concession, and the limitation that pages 9-12 are not provided in the source text (only up to page 8). Also discuss the multitasking issue (Holmstrom-Milgrom) and why bonuses are rare.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations. I need to write out the production function, the utility maximization, the fixed effects specification, the coefficients from tables. Units: log efficiency (dimensionless log points), years (dimensionless count), experience (years), salary (dollars), performance index points. Breakdown regimes: p<0.05, p<0.01. Cite page markers [PAGE 1] through [PAGE 8]. Verbatim quotes where appropriate.

RETROCAUSAL_GENEALOGY: Historical lineage: Holmstrom 1979/1982 career concerns, Gibbons & Murphy 1992, Dewatripont et al 1999, Holmstrom & Milgrom 1987/1991 multitasking, Berri & Krautmann 2006. Multi-week traps: contract year effect misinterpretation, small sample bias, survivorship bias.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is about the player's strategic thinking: does the player regress to habitual low effort after signing (crisis habit regression), does the team anticipate and counter-trap (offer shorter contracts or backload), and the clock (contract expiration deadline). The paper says teams perfectly anticipate effort, so no systematic fooling.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. This section is odd for an economics paper, but I need to interpret it as: what physical/biomechanical factors could veto the moral hazard mechanism? E.g., age-related decline, injury risk, cumulative fatigue, roster chemistry, coaching changes. Weather is less relevant for indoor NBA but travel/fatigue could matter. I need to show these are controlled or orthogonal to the contract-year mechanism.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or just verifiable scenarios. I'll create 3 counterfactual veto scenarios that are testable:
1. If a player signs a truly fully guaranteed contract with no future negotiation (e.g., final career contract or no-trade/no-cut with retirement), effort should drop to zero in model, but in reality injury/age may prevent. Prediction: players with no future contract incentive show flat/no contract-year spike.
2. If a player has >10 years experience, interaction term should nullify contract-year effect. Prediction: no significant difference between penultimate and final year for veterans.
3. If team commits to reweighting early periods (renegotiation-proof commitment device), effort should be constant. Prediction: teams that publicly emphasize early-contract performance in extension negotiations should see flatter within-contract effort profiles.

Need to ensure >=1000 words total across sections. I'll aim for substantial depth in each.

Let's draft carefully.

Word count estimate:
THINK_TRACE: ~500 words
SOURCE_OPERATORS_AND_EQUATIONS: ~400 words
RETROCAUSAL_GENEALOGY: ~300 words
RECURSIVE_THEORY_OF_MIND: ~300 words
CROSS_LAYER_VETO_ADJUDICATION: ~300 words
RLVR_COUNTERFACTUAL_VETOES: ~300 words
Total ~2100 words. Good.

Need to cite pages. The text has explicit page numbers: 1, 2, 3, 4, 5, 6, 7, 8. I'll cite [PAGE 1] etc. The user said PAGES: 12 but only text up to page 8 is provided. I'll note the audit gap in THINK_TRACE.

Let's write formal LaTeX.

Production function from text: output = unobserved ability + effort + random individual specific shock.
Let $y_{it} = \theta_i + e_{it} + \epsilon_{it}$.

Fixed effects model: $\ln(Eff_{it}) = \alpha_i + \beta_1 YR_{it} + \beta_2 YR^2_{it} + \beta_3 Exp_{it} + \beta_4 (YR_{it} \times Exp_{it}) + \gamma X_{it} + \delta_t + \lambda_{team} + u_{it}$.

From Table 1 column (2): $\hat\beta_1 = -0.0870^{**}$, $\hat\beta_2 = 0.0106^{**}$.
From Table 1 column (3): interaction $\hat\beta_4 = 0.0167^{**}$ [t=6.6].
From Table 2 Panel A: First year coefficient -0.0694**, Last year 0.0645*.
Panel B: -0.1598** (first year of subsequent relative to last year prior).

I'll compute marginal effects: at YR=1 (final year), derivative wrt YR? Actually YR is years remaining. Final year means YR=1? Wait: if years remaining = 1, that's final year. Penultimate means YR=2. The text says effort in penultimate year is 7% lower than final year. Let's verify with coefficients: For YR=1 vs YR=2: ln(Eff)|YR=1 - ln(Eff)|YR=2 = $\beta_1(1-2) + \beta_2(1^2 - 2^2) = -\beta_1 -3\beta_2 = -(-0.0870) -3(0.0106) = 0.0870 - 0.0318 = 0.0552 \approx 5.5\%$. The text says 7% lower for penultimate than final. Close enough (maybe using different baseline or approximation). Third-to-last (YR=3) vs penultimate (YR=2): difference = $\beta_1(3-2) + \beta_2(9-4) = \beta_1 + 5\beta_2 = -0.0870 + 0.053 = -0.034 \approx -3.4\%$, text says 5% lower. Hmm. Maybe they evaluate at different points. I'll just report what the text says verbatim and note the coefficients.

Actually the text says: "effort in the penultimate year of his contract is 7% lower than effort in the final year... effort in the player's third-to-last year of the contract is 5% lower than in his penultimate contract year, and effort in his fourth-to-last contract year is an additional 2% lower". I'll quote that.

No betting lines. No fake ratios.

Let's compose. I must be careful to include all XML tags exactly.

I'll start writing now.
</NATIVE_REASONING>

<THINK_TRACE>
The central identification problem in Sen & Rice (2011) is separating the causal contract-year effect from time-invariant unobserved heterogeneity (innate ability, position, physical frame) and from selection into contract length. The authors address this with a fixed-effects (within-player) panel of 2,260 player-year observations drawn from 654 NBA players observed from 1999 onward [PAGE 4]. Because 90% of players appear multiple times, player fixed effects $\alpha_i$ absorb all time-invariant ability, leaving only within-player variation across contract years to identify the moral hazard coefficient [PAGE 4]. The baseline OLS specification (Table 1, column 4) fails to detect adverse effort incentives, which the authors interpret as evidence that unobserved heterogeneity is a first-order source of bias [PAGE 4].

A gray zone lies in the functional form. Table 1 column (2) enters years remaining ($YR$) and its square ($YR^2$). The reported coefficients are $\hat\beta_{YR}=-0.0870^{**}$ and $\hat\beta_{YR^2}=0.0106^{**}$ [PAGE 4, Table 1]. This implies diminishing marginal moral hazard as the contract horizon lengthens: the largest effort drop occurs in the initial movement away from the termination date. Verbatim, the paper states that effort in the penultimate year is 7% lower than in the final year, third-to-last is 5% lower than penultimate, and fourth-to-last is an additional 2% lower; beyond four years remaining the effects are not statistically significant [PAGE 4]. The nonlinearity means a linear specification would understate early-contract shirking and overstate late-contract shirking relative to the true profile.

The experience interaction in column (3) ($\hat\beta_{YR\times Exp}=0.0167^{**}$, $t=6.6$) implies that the adverse effort effect of remaining contract years is attenuated for veterans [PAGE 4]. Comparative statics: a player with two years of experience in the penultimate year performs ~15% below his final-year self, while a six-year veteran shows only ~8% [PAGE 4]. For players with just over 10 years of experience, within-contract effort fluctuations approach zero [PAGE 4]. The theoretical mechanism is Bayesian learning: the more observations the team has, the more precisely ability is known, so a single period's output moves the posterior belief little, weakening the incentive to manipulate output for future wages [PAGE 3]. A secondary channel is the present discounted value of future wages, which shrinks as career horizon shortens [PAGE 4].

Panel B of Table 2 introduces a selection/survivorship concern: it restricts to 714 player-years for which both the final year of the old contract and the first year of the new contract are observed [PAGE 5]. It finds a 15.98% log-point drop in productivity in the first year of a successor contract relative to the final year of the prior contract [PAGE 5, Table 2]. The authors acknowledge that if only players with positive random output shocks survive to re-sign, the subsequent reversion to the mean mechanically inflates the post-contract drop [PAGE 5]. This is a classic survivor-bias gray zone: the estimated -17% may partly reflect statistical regression rather than pure effort withdrawal.

Another gray zone is the Richard Jefferson anecdote (opting out of ~$14M/year to re-sign for 4 years/$38.8M), offered as evidence of per-period wage concessions for security [PAGE 3]. The paper does not empirically test the wage concession; it treats it as anecdotal consistency with the model's risk-aversion tradeoff [PAGE 3].

Finally, the source text provided ends at page 8 (references). The user header indicates PAGES: 12, but pages 9-12 (likely appendices, robustness tables, or additional figures) are absent from the supplied markdown. This truncation is an audit limitation: any claims about pages 9-12 cannot be verified from the provided source.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Production function (theoretical, [PAGE 2]): 
\[
y_{it} = \theta_i + e_{it} + \epsilon_{it}, \quad \epsilon_{it} \sim (0,\sigma^2_\epsilon)
\]
where $y_{it}$ is output, $\theta_i$ is unobserved inherent ability, $e_{it}$ is effort, and $\epsilon_{it}$ is a mean-zero individual-specific shock. Output units are index points (NBA efficiency or PER); effort is latent.

Bayesian ability updating ([PAGE 2]): the team forms posterior belief $\mu_{it} = E[\theta_i \mid \mathcal{F}_{t-1}]$ updated after each period; wages are set on expected output over the contract span using maximum incentive-compatible effort.

Fixed-effects estimating equation (Table 1, column 3 analogue, [PAGE 4]):
\[
\ln(\text{Eff}_{it}) = \alpha_i + \beta_1 YR_{it} + \beta_2 YR_{it}^2 + \beta_3 Exp_{it} + \beta_4 (YR_{it}\times Exp_{it}) + \gamma X_{it} + \delta_t + \lambda_{team} + u_{it}
\]
Dependent variable: natural log of NBA efficiency index (dimensionless log-points). $YR$ = years remaining in current contract (count, years). $Exp$ = professional experience (years). Salary in dollars; total duration in years. Team dummies and $T-1$ year dummies included [PAGE 5, Table 1 note].

Table 1 fixed-effects coefficients ([PAGE 4, Table 1]):
- Column (2): $YR$: $-0.0870^{**}$ ($t=-3.5$); $YR^2$: $0.0106^{**}$ ($t=3.5$).
- Column (3): $YR\times Exp$: $0.0167^{**}$ ($t=6.6$).
- Column (2) controls: Experience $-0.1026^{*}$; Team-specific experience $0.0655^{**}$; Salary $0.0033^{**}$; Total duration $0.0310^{*}$.

Table 2 fixed-effects coefficients ([PAGE 5, Table 2]):
- Panel A (full sample, N=2,260): First year of contract $-0.0694^{**}$; Last year of contract $0.0645^{*}$.
- Panel B (consecutive contracts, N=714): First year of subsequent contract relative to last year of prior: $-0.1598^{**}$ ($t\approx -3.4$).

Breakdown / significance regimes: * denotes $p<0.05$; ** denotes $p<0.01$ [PAGE 5, Table 1 note]. The contract-year effect is statistically indistinguishable from zero beyond four years remaining [PAGE 4], and within-contract effort fluctuations approach zero for players with just over 10 years of experience [PAGE 4].

Data dimensions: unbalanced panel, 654 players, 2,260 player-year observations, mean spell 3.5 years (max 13), at least part of 2 contracts (max 5), mean entry age 25 with ~4 years experience [PAGE 4]. Robustness check uses Hollinger PER [PAGE 1 abstract, PAGE 4 data section].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper's intellectual lineage descends directly from Holmstrom's career-concerns framework (1982/1999), in which effort is motivated by the market's Bayesian updating of worker ability, and from Gibbons & Murphy (1992), who embed career concerns in optimal incentive contracting [PAGE 8, References]. Dewatripont et al. (1999) on information structures and canonical moral hazard under incomplete contracts (Cantor 1988; Harris & Holmstrom 1984) supply the contracting-theory foundation [PAGE 8]. The Holmstrom & Milgrom (1987, 1991) multitasking result is invoked to explain why the NBA relies on fixed-wage guarantees rather than performance bonuses: multidimensional output (scoring, defense, teamwork) means bonus engineering for one task distorts others [PAGE 6].

The immediate empirical antecedent is Berri & Krautmann (2006), "Shirking on the court," which used a smaller NBA sample and found only a 1% output decrease in the first contract year [PAGE 5]. Sen & Rice extend this with a larger panel (654 players vs. a smaller subset), player fixed effects, and a nonlinear years-remaining specification, locating the effect primarily in the contract's terminal year rather than uniformly across early years [PAGE 5].

Multi-week traps: (1) Treating the contract-year effect as a stable, time-invariant trait of individual players rather than a within-person, contract-phase phenomenon; (2) Extrapolating the -17% post-signing drop (Panel B) to all players despite survivorship selection; (3) Assuming the effect is linear in contract duration when the paper shows strong nonlinearity concentrated in the final two years; (4) Applying the result to veterans without the experience interaction, which nullifies the effect beyond ~10 years of service. Each trap reverses the sign or magnitude of predicted effort if the conditioning set (experience, years remaining, survivorship) is ignored.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The model posits a recursive theory of mind between player and team. The player reasons: "If I exert effort now, the team updates its belief about my ability upward, raising my next contract wage." The team reasons: "The player knows I am updating, so he will strategically inflate effort near expiry; I should anticipate this and offer a wage reflecting expected, not peak, effort." The paper's equilibrium conclusion is that teams are not repeatedly fooled—they perfectly anticipate the effort profile over the contract [PAGE 7].

Crisis habit regression vs counter-trap vs clock: A player with an ingrained low-effort habit (crisis habit regression) might shirk in early contract years and fail to ramp up even when the contract-year clock arrives, breaking the predicted effort curve. The counter-trap is the team's response: offering shorter contracts, backloading, or using non-guaranteed years to restore incentives; however, the NBA's fixed-wage structure and player risk aversion make long guarantees Pareto efficient despite shirking, because players accept per-period wage concessions for security [PAGE 3]. The clock is the contract expiration date, which is common knowledge and creates the discontinuity in marginal benefit of effort. For veterans, the clock's present value is low (short remaining wage stream) and the belief precision is high (many observations), so the recursive incentive collapses to near zero [PAGE 4]. The failure mode is a mis-specified clock: if a player believes he will not be re-signed regardless of output (e.g., due to age or injury), the contract-year incentive vanishes even in the final year, producing flat effort despite $YR=1$.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather layer: The paper controls for player fixed effects (height, weight, position, draft slot, college, birth date are time-invariant) [PAGE 4], but time-varying physical layers can veto the moral hazard mechanism. (1) Age-related biomechanical decline: performance naturally falls with age; if contract timing correlates with age (younger players sign longer deals), age could confound effort. The model includes experience and total duration, and fixed effects absorb level age, but within-player aging across a multi-year contract is not explicitly modeled [PAGE 4]. (2) Injury and cumulative fatigue: a player suffering a degenerative injury in year 2 of a 4-year deal cannot exert contract-year effort in year 4 regardless of incentives; this is a hard biomechanical veto. The random shock $\epsilon_{it}$ captures some of this, but systematic injury spells correlated with contract phase would bias estimates. (3) Weather/travel: NBA games are indoors, so weather is not a direct game-condition veto; however, travel load and back-to-backs vary by team and season and are absorbed by team and year dummies [PAGE 5]. These physical vetoes are orthogonal to the contract-year mechanism only insofar as injury and age are uncorrelated with years remaining conditional on player and year fixed effects. The paper does not test this orthogonality explicitly, leaving a residual identification risk.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 (No future contract): A player signs the final contract of his career with no expectation of renegotiation (e.g., a one-year deal at age 38 with retirement imminent). The model predicts zero future-wage benefit from effort, so $e_{it}$ should collapse to the cost-minimizing level and no contract-year spike should appear. Verifiable prediction: In the subsample of players in their last observed NBA season with no subsequent contract, the coefficient on Last year of contract should be statistically indistinguishable from zero, and Panel B's post-signing drop should not occur because there is no subsequent contract. If a spike persists, non-contractual motives (pride, legacy, teammate effects) dominate.

Scenario 2 (Veteran nullification): A player with 11+ years of experience (where within-contract fluctuations approach zero per the paper) signs a multi-year deal. The interaction $\beta_4(YR\times Exp)$ predicts the contract-year slope should be statistically and economically indistinguishable from zero. Verifiable prediction: Regress $\ln(\text{Efficiency})$ on years remaining for the veteran subsample ($Exp > 10$); the $YR$ and $YR^2$ coefficients should be insignificant, and the first/last-year dummies in Table 2 should lose significance. A persistent spike in this group would falsify the Bayesian-learning attenuation mechanism.

Scenario 3 (Commitment reweighting): A team credibly commits—via a renegotiation-proof extension clause—to weight early-contract performance more heavily in the next negotiation, reversing the usual incentive gradient. The model suggests such a scheme could induce constant high effort but is rarely observed because it is not renegotiation-proof and reduces insurance value [PAGE 6]. Verifiable prediction: Identify teams/players that publicly tie extensions to early-contract performance (e.g., option years triggered by year-1 or year-2 output). For those contracts, within-contract efficiency should be flat across years (no terminal spike), whereas matched contracts without such clauses should show the standard 10% terminal-year premium. If the committed group still spikes, the commitment device is not binding or players do not believe it.
</RLVR_COUNTERFACTUAL_VETOES>