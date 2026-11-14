---
source: "2012 - The Sensitivity of College Football Rankings to Several Modeling Choices - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Journal of Quantitative Analysis in Sports/2012"
pages: 44
model: deepseek/deepseek-v4.1-flash-1017
words: 5716
---

<NATIVE_REASONING>
We need answer to user. They provided DRIVE SOURCE and source text pages. They want GSE + GSI Frontier Reasoning Foundry with strict invariants and exact XML sections. Need produce >=1000 words across sections. Need analyze paper. Must not mention betting lines/odds. Need zero betting lines. Need formal LaTeX, units, page citations, exact verbatim quotes when source pages provided. Need cite [PAGE N] markers and verbatim quotes. Need sections exact XML:
<THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Need perhaps frame as sensitivity audit of ranking model. Since prompt seems intended for sports betting/trading? But paper is academic ranking. We must not mention lines/spreads. We can discuss rankings, model sensitivity, binary outcomes, bowl selection. Need maybe mention no physical/biomechanical/weather data in paper, so veto adjudication must say no physical veto evidence; only statistical/model vetoes. Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof: paper has no biomechanical/weather variables, no home-field effect included. Need proof that these layers cannot veto rankings from this source except through model assumptions? Need be careful: "Physical/biomechanical/weather veto proof" maybe they expect adjudicate if cross-layer info vetoes. We can say source contains no such measurements; cannot claim physical veto; only model-choice vetoes. Need formal equations.

Need include exact quotes. Need cite pages. Need perhaps quote key sentences:
- [PAGE 3] "only win/loss information may now be used (ties are necessarily settled in overtime). This restriction to a binary response complicates the ranking process."
- [PAGE 5] "changes in team ratings resulting from varying these assumptions are small relative to the standard errors associated with each team’s rating. However, these changes result in a reordering of the team rankings that may lead to practically significant differences in the bowl selection process."
- [PAGE 9] "The model likelihood functions in Equations (4) and (5) contain intractable integrals because the random effects enter the model through a nonlinear link function. Furthermore, the (p + q)-dimensional integral in each equation may not be factored as a product of one-dimensional integrals."
- [PAGE 10] "the model of Mease (2003) may be viewed as the PQL approximation to our probit model (6), where the random effects are assumed to have the density specified in Equation (9) rather than the normal density that we specified."
- [PAGE 13] "Upon convergence, eη serves as the vector of team ratings, demonstrating that the choice of integral approximation affects the ratings even if the model parameters Ψ are known."
- [PAGE 16] "if a team is ranked X by PQL.P.0 and Y by FE.P.0, its ranking under LA.P.1 is somewhere between X and Y, inclusive." Wait page 16 says LA.P.1? It says LA.P.1 maybe typo; quote exact.
- [PAGE 16] "In 2009, FE.P.0 lists Alabama and Cincinnati, while PQL.P.0 and LA.P.0 select Alabama and Texas. In 2011, PQL.P.0 and LA.P.0 rank Oklahoma St. 2, while FE.P.0 ranks Alabama 2."
- [PAGE 19] "the probability of a randomly selected FBS team defeating a randomly selected FCS team in 2011 is Φ(2.03) ≈0.979."
- [PAGE 21-22] "none of the top 16 teams from 2008-2011 differ between the ML and the REML rankings (not shown)."
- [PAGE 22] "The resulting changes in team ratings are small relative to the standard errors of the ratings, but could have implications for which teams are assigned to which bowls."
- [PAGE 23] "around 12 binary outcomes on 240 or so subjects." Actually page 23: "around 12 binary outcomes on 240 or so subjects." Need quote exact maybe "around 12 binary outcomes on 240 or so subjects." It says "around 12 binary outcomes on 240 or so subjects." Yes.

Need maybe include equations:
Latent threshold: \(r_i = I\{y_i>0\}\), \(y_i = X_i\beta + Z_i\eta + \epsilon_i\), \(\eta\sim N(0,\sigma_t^2 I)\), \(\epsilon_i\sim N(0,1)\) probit or logistic. Multi-membership design \(Z_i\) has 1 for home, -1 for away.
Likelihood probit:
\[
L(\beta,\sigma_t^2)=\int\cdots\int \prod_{i=1}^n \Phi\left((-1)^{1-r_i}[X_i\beta+Z_i\eta]\right) f(\eta)d\eta
\]
with \(f(\eta)\) normal. Logit likelihood similar.
Integral intractable. Laplace approximation:
\[
L(\sigma_t^2)\approx (2\pi)^{n/2} e^{h(\eta^*)} \left| -\frac{\partial^2 h}{\partial \eta\partial \eta'}\bigg|_{\eta=\eta^*} \right|^{-1/2}
\]
where \(h(\eta)=\log[\prod_i \Phi((-1)^{1-r_i}Z_i\eta)f(\eta)]\).
M-step variance:
\[
\hat{\sigma}_t^2 = \frac{1}{p+q}\operatorname{trace}(e_v + e_\eta e_\eta')
\]
Need units: ratings are latent probit/logit scale, dimensionless; variance components dimensionless squared latent scale; probabilities in [0,1]; no physical SI units. Standard errors on latent scale. Could mention information units: n binary observations, p+q random effects, information limited. Maybe "bits" if binary outcomes: each game provides at most 1 bit; but paper doesn't quantify bits. We can state units: \(r_i\in\{0,1\}\), \(\pi_i\in[0,1]\), \(\eta_j\) dimensionless latent strength; \(\sigma_t^2\) dimensionless; \(\beta\) dimensionless; \(\Phi\) dimensionless. No SI.

Need "SOURCE_OPERATORS_AND_EQUATIONS" with page citations and breakdown regimes. Need exact singularity/breakdown: quasi-complete separation if undefeated/winless teams or all FBS beat FCS, infinite likelihood; multi-membership non-factorable integral; PQL downward bias; Laplace high dimension; ML/REML etc. Need "breakdown regimes" exactly.

Need "RETROCAUSAL_GENEALOGY" historical/scientific lineage & multi-week traps. Discuss Thurstone-Mosteller, Bradley-Terry, Harville, Mease, BCS, Annis/Craig, Breslow/Clayton/Lin, Tierney/Kass/Kadane, Steele, Shun/McCullagh, Karl. Multi-week traps: rankings shift with approximation; top 2 swaps; bowl assignments; FCS handling; variance prior; PQL vs FE; link choice; ML/REML; no home-field; limited binary data. "multi-week traps" maybe season over weeks: early season sparse data, later conference championships; bowl outcomes excluded. Need mention "multi-week" in context of 2008-2011 seasons. Need avoid betting. We can say "multi-week audit trap: using week-by-week rankings as if stable; paper shows monotonic PQL→LA→FE changes can accumulate."

Need "RECURSIVE_THEORY_OF_MIND" Crisis habit regression vs counter-trap vs clock. Need interpret as modeler behavior under crisis. Maybe: crisis habit regression = falling back to PQL/SAS default due computational burden; counter-trap = overfitting to one approximation/rank order; clock = using final pre-bowl rankings as if definitive. Need discuss recursive theory of mind: analysts know selectors use discrete ranks, teams know rankings, incentives? But no betting. Need mention BCS selection committee, bowl assignments. "clock" = temporal cutoff at conference championships; exclude bowl outcomes. Need cite pages 5, 13-16, 21-23. Need avoid wagering.

Need "CROSS_LAYER_VETO_ADJUDICATION" Physical/biomechanical/weather veto proof. Since paper does not include home field, weather, injuries, biomechanics. Need say no physical/biomechanical/weather veto can be proven from source. The only cross-layer variables are division membership (FBS/FCS) and home/away design; home-field effect deliberately omitted due nonrandom scheduling. Quote page 8: "We choose not to include a home field effect. We are concerned about the potential impact of nonrandom scheduling between teams on the estimate of home field advantage." Need quote exact. Also page 8: "The more competitive programs tend to play more home games than other FBS programs." Need maybe quote. Need state physical/weather layer absent, so any veto claim would be hallucinated; only model-layer vetoes are valid. Need "proof" maybe via absence of variables in likelihood and design matrix. In equations, no weather variable; no biomechanical covariate; no injury variable. Thus cross-layer veto cannot be adjudicated; it is out-of-scope. If forced, cross-layer veto = 0 evidence. Need mention no SI units.

Need "RLVR_COUNTERFACTUAL_VETOES" 3 verifiable RLVR veto scenarios + predictions. RLVR maybe reinforcement learning with verifiable rewards? Need create 3 counterfactual scenarios that would veto a claim (e.g., "FE.P.0 top-2 is robust"). Scenario 1: If switching PQL to FE changes top-2 in 2009/2011, then veto claim "top-2 invariant to approximation." Prediction: 2009 FE top-2 Alabama/Cincinnati vs PQL/LA Alabama/Texas; 2011 FE Alabama #2 vs PQL/LA Oklahoma St #2. Scenario 2: If FCS modeling changes #2 in 2011, veto claim "FCS handling irrelevant." Prediction: FE.P.0 ranks Alabama 2, FE.P.1/2 pick Oklahoma St. [PAGE 19]. Scenario 3: If link choice changes top 3 in 2011, veto claim "link choice immaterial." Prediction: FE.P.0 top three LSU, Alabama, Oklahoma St.; FE.L.0 LSU, Oklahoma St., Alabama [PAGE 15]. Or scenario about ML/REML no top16 change but variance estimates differ slightly; veto claim "ML/REML impacts top16" -> false. Need 3 verifiable RLVR veto scenarios + predictions. Need maybe define RLVR as reward for verifiable counterfactual. We can state each with a test and prediction. Need cite pages.

Need ensure >=1000 words. Likely answer will be long. Need exact XML sections. Need no markdown? XML sections. Could include LaTeX inside. Need include verbatim quotes. Use quotes exact. Need ensure no betting lines. Avoid words "odds", "moneyline", "spread", "totals", "bet", "wager", "line". The prompt says never mention spreads, totals, moneylines, or odds. We should avoid "line" except "reference lines" from paper? Hmm "reference lines" is not betting line but contains "lines". To be safe avoid "line" except "reference line"? It says zero betting lines, not zero word line. But "Never mention spreads, totals, moneylines, or odds." Reference lines okay but maybe avoid. We can say "reference curves" or "reference y=x". But if quoting figure note "reference lines" maybe not necessary. Avoid "line" entirely maybe. Use "reference y=x". Need avoid "winning" maybe fine. "Betting" no. "Bowl" fine. "payout" no. The paper mentions payout, but we can avoid.

Need "GSE + GSI Frontier Reasoning Foundry" maybe answer should be in those sections only. No preamble? We can include only XML. Need maybe include a short header? The required exact XML sections. We'll output exactly those tags. Could include no extra text outside. Need maybe include citations [PAGE N] within sections. Use formal LaTeX equations. Need ensure not too much oververbosity but desired 5. Need depth >=1000 words. We'll write around 2000-2500 words? Need satisfy. Oververbosity 5; but requirements demand depth. We'll produce ~2500 words. Need be precise.

Let's draft.

THINK_TRACE >=400 words. Need multi-hop derivation and gray-zone audit. We can discuss: Step 1 data generating: binary win/loss; latent margin; random team effects; multi-membership; Step 2 marginal likelihood integral; Step 3 approximations PQL/LA/FE; Step 4 EBLUP ranking; Step 5 sensitivity. Gray-zone audit: differences small vs SE but rank order changes; statistical vs practical significance; top-2 swaps; FCS handling; link; variance; ML/REML. Need cite pages. Mention exact quote. Need ensure >=400 words. We'll make ~600 words.

SOURCE_OPERATORS_AND_EQUATIONS: formal equations, units, page citations, breakdown. Include equations and quotes. Need maybe include "operators" like \(\Phi\), \(\operatorname{logit}\), \(Z_i\), \(X_i\), \(\eta\), \(\sigma^2_t\), Laplace \(h\), M-step. Need page citations. Need exact verbatim quotes. Breakdown regimes: separation, intractable integral, PQL bias, high-dimensional Laplace, FCS separation, home field omitted. Need maybe cite page 8 quote for home field. Units.

RETROCAUSAL_GENEALOGY: historical lineage. Need mention Thurstone 1927, Mosteller 1951, Bradley-Terry 1952, Keener 1993, Harville 1977/2003, Mease 2003, Annis and Craig 2005, Breslow and Clayton 1993, Breslow and Lin 1995, Tierney et al. 1989, Steele 1996, Shun and McCullagh 1995, Karl 2012a. Multi-week traps: seasons 2008-2011, pre-bowl cutoff, rankings shift. Need cite pages 3-5, 10-12, 16-19, 21-23.

RECURSIVE_THEORY_OF_MIND: crisis habit regression vs counter-trap vs clock. Need maybe describe decision ecology: BCS selectors use discrete ranks; analysts use EBLUPs; models output ranks; institutions have incentives. "Crisis habit regression" = defaulting to PQL/GLLIMMIX or Mease penalty under time pressure; "counter-trap" = treating a single approximation as truth; "clock" = final BCS ranking cutoff pre-bowl. Need cite page 13 "Upon convergence..." and page 22 "small relative..." and page 14 "top 16 relevant". Need mention recursive: modeler anticipates selector uses discretized ranks, so small rating differences matter; selector anticipates model instability; teams/coaches incentives but no betting. Need no odds. Need maybe quote page 14 "The top two teams in the BCS rankings are selected to play in the national championship game." and "top 16 teams ... relevant". Good.

CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto proof. Need state no physical/biomech/weather covariates in equations. The only cross-layer variables: home/away indicator and FCS indicator; home-field omitted. Quote page 8 "We choose not to include a home field effect..." and "The more competitive programs tend to play more home games than other FBS programs." Need say weather/biomechanical veto = unsupported. Physical layer veto proof: none. If a claim says "weather/injury explains rank swap," source cannot verify; veto the claim for lack of variables. Need mention cross-layer veto resolution: cannot use physical/weather to override statistical rank shift; only model-choice audit. Need maybe mention "physical" in terms of binary outcome not margin; no margin of victory. Page 3 quote "only win/loss information may now be used". That supports no physical performance data. Good.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios. Need make them verifiable. Use explicit predictions and page citations. Need maybe define "veto" if counterfactual outcome observed. Scenario 1 approximation order: Claim "Top two are invariant to integral approximation." Veto if PQL vs FE changes top two. Prediction: 2009 FE.P.0 Alabama/Cincinnati vs PQL.P.0/LA.P.0 Alabama/Texas; 2011 PQL/LA Oklahoma St #2 vs FE Alabama #2 [PAGE 16]. Scenario 2 FCS handling: Claim "FCS treatment does not affect #2." Veto if FE.P.0 vs FE.P.1/2 differ. Prediction: 2011 FE.P.0 Alabama 2; FE.P.1 and FE.P.2 pick Oklahoma St [PAGE 19]. Scenario 3 link function: Claim "Probit vs logit cannot alter top three." Veto if FE.P.0 vs FE.L.0 differ. Prediction: 2011 FE.P.0 ranks LSU, Alabama, Oklahoma St.; FE.L.0 picks LSU, Oklahoma St., Alabama [PAGE 15]. Need maybe mention all are verifiable from tables. Good. Could include ML/REML as negative control: claim "ML vs REML changes top16" would be vetoed because none differ [PAGE 21-22]. But need 3 scenarios. Could include as scenario 3 instead of link? Link is better. Need maybe 3 exact.

Need ensure word count. Let's write. Use XML tags exactly. No extra. Need maybe include quotes with [PAGE N] after. Verbatim quotes. Need not overdo. Need exact quotes; check wording.

Let's verify quotes from source:
PAGE 3: "The computer rankings were originally allowed to use margin of victory, but in an attempt to prevent teams from running up scores to inflate their ratings, only win/loss information may now be used (ties are necessarily settled in overtime). This restriction to a binary response complicates the ranking process." I can quote part: “only win/loss information may now be used (ties are necessarily settled in overtime)” [PAGE 3]. Exact.

PAGE 5: "The results from our analysis show that the changes in team ratings resulting from varying these assumptions are small relative to the standard errors associated with each team’s rating. However, these changes result in a reordering of the team rankings that may lead to practically significant differences in the bowl selection process." Exact. Use.

PAGE 9: "The model likelihood functions in Equations (4) and (5) contain intractable integrals because the random effects enter the model through a nonlinear link function. Furthermore, the (p + q)-dimensional integral in each equation may not be factored as a product of one-dimensional integrals." Exact. Use.

PAGE 10: "the model of Mease (2003) may be viewed as the PQL approximation to our probit model (6), where the random effects are assumed to have the density specified in Equation (9) rather than the normal density that we specified." Exact. Use.

PAGE 13: "Upon convergence, eη serves as the vector of team ratings, demonstrating that the choice of integral approximation affects the ratings even if the model parameters Ψ are known." Exact. Use.

PAGE 16: "In 2009, FE.P.0 lists Alabama and Cincinnati, while PQL.P.0 and LA.P.0 select Alabama and Texas. In 2011, PQL.P.0 and LA.P.0 rank Oklahoma St. 2, while FE.P.0 ranks Alabama 2." Exact. Use.

PAGE 15: "in 2011, FE.P.0 ranks LSU, Alabama, and Oklahoma St. as the top three teams, respectively, while FE.L.0 picks LSU, Oklahoma St., Alabama." Exact? Source: "However, in 2011, FE.P.0 ranks LSU, Alabama, and Oklahoma St. as the top three teams, respectively, while FE.L.0 picks LSU, Oklahoma St., Alabama." Yes. Use.

PAGE 19: "FE.P.0 ranks Alabama 2 in 2011, while FE.P.1 and FE.P.2 pick Oklahoma St." Exact? Source: "FE.P.0 ranks Alabama 2 in 2011, while FE.P.1 and FE.P.2 pick Oklahoma St." Yes. Use.

PAGE 21-22: "Under the model PQL.P.1, none of the top 16 teams from 2008-2011 differ between the ML and the REML rankings (not shown)." Exact? Source: "Under the model PQL.P.1, none of the top 16 teams from 2008-2011 differ between the ML and the REML rankings (not shown)." Yes. Use maybe in think trace or source.

PAGE 8: "We choose not to include a home field effect. We are concerned about the potential impact of nonrandom scheduling between teams on the estimate of home field advantage." Exact. Use. Also "The more competitive programs tend to play more home games than other FBS programs." Exact? Source: "The more competitive programs tend to play more home games than other FBS programs." Yes. Use.

PAGE 19: "the probability of a randomly selected FBS team defeating a randomly selected FCS team in 2011 is Φ(2.03) ≈0.979." Exact. Use.

PAGE 22: "The resulting changes in team ratings are small relative to the standard errors of the ratings, but could have implications for which teams are assigned to which bowls." Exact. Use.

PAGE 23: "around 12 binary outcomes on 240 or so subjects." Exact? Source: "around 12 binary outcomes on 240 or so subjects." Yes. Use.

PAGE 14: "The top two teams in the BCS rankings are selected to play in the national championship game." Exact. Use maybe. "The top 16 teams of the BCS rankings are relevant due to the rules involving eligibility for selection in the non-championship BCS bowls." Exact? Source: "Under the current BCS configuration, the top 16 teams of the BCS rankings are relevant due to the rules involving eligibility for selection in the non-championship BCS bowls." Use.

Need use "PAGE" citations exact [PAGE 3] etc. Good.

Need "formal LaTeX equations" with units. Need maybe include "\(\Phi\)" CDF. Include "\( \operatorname{logit}(\pi)=\log(\pi/(1-\pi))\)". Include "\(r_i| \eta \sim \operatorname{Bernoulli}(\pi_i)\)" but paper uses Bin(1,π). Good.

Need "assumptions" and "singularity/breakdown regimes". Include:
- Separation: if undefeated/winless or all FBS beat FCS, fixed-effects likelihood infinite due quasi-complete separation [PAGE 4,6,8]. Random effects avoid this.
- Integral intractability: high-dimensional non-factorable due multi-membership [PAGE 9].
- PQL bias downward variance [PAGE 16, 18, 22].
- Laplace approximation accuracy ordering; FE more accurate but requires 3rd/4th derivatives [PAGE 12].
- ML/REML difference negligible with one fixed effect [PAGE 21-22].
- Link choice changes top3 in 2011 [PAGE 15].
- FCS treatment changes #2 in 2011 [PAGE 19].
Need mention "breakdown regimes" exact.

Need maybe "operators" list: \(I\{\cdot\}\), \(\Phi\), \(\operatorname{logit}^{-1}\), \(E[\eta|r]\), \(var[\eta|r]\), Laplace \(h\), trace. Good.

Need "units": "All quantities are dimensionless latent-scale; no SI units. \(r_i\) is a Bernoulli indicator; \(\pi_i\) is probability; \(\eta_j\) is latent strength; \(\sigma_t^2\) is variance of latent strength; \(\beta\) is FCS effect on latent scale; \(\epsilon_i\) is latent noise with variance 1 (probit) or logistic variance \(\pi^2/3\) if standardized? Paper says logistic distribution no scale parameter; logistic variance \(\pi^2/3\). But if link logit, \(\epsilon_i\) follows logistic. We can state logistic latent-noise variance is \(\pi^2/3\) in conventional parameterization, dimensionless. But paper doesn't state. We can say under standard logistic distribution. Good.

Need maybe "information units" maybe binary game outcome max entropy 1 bit. But don't overstate. We can say "information budget: n binary outcomes; paper notes 'around 12 binary outcomes on 240 or so subjects' [PAGE 23]." Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof: We can include "The likelihood has no \(W_i\) weather vector, no biomechanical/injury vector \(B_i\), no travel covariate; only \(X_i\) FCS indicator and \(Z_i\) home/away multi-membership. Therefore any physical/weather veto is non-identifiable. The only physical-layer proxy is home/away, but home-field effect is not estimated." Good. Need "proof" maybe "A veto requires a variable with non-zero coefficient in the likelihood; none exists. Thus physical/weather veto = failed identification." Good. Need mention "no margin of victory" due BCS restriction [PAGE 3] prevents physical performance signal. Good.

Need answer no betting lines. Avoid words "odds". "payout" not mention. "BCS berths" fine.

Need maybe "RLVR" define as "reinforcement-learning-with-verifiable-rewards style veto" but no need. Could say "RLVR-style verifiable counterfactual." Good.

Need ensure all XML tags closed. Need no markdown outside. Use LaTeX. Word count? We'll estimate. THINK_TRACE ~650 words. SOURCE ~700. RETRO ~400. RECURSIVE ~400. CROSS ~350. RLVR ~350. Total ~2850. Good.

Need maybe include exact phrase "GSE + GSI Frontier Reasoning Foundry" not necessary. The answer is the analysis.

Need be careful with "line" word. In source quote "reference lines" maybe avoid. In our text avoid "line". "baseline" contains line? "baseline" has line but okay? To be ultra safe, avoid "baseline". Use "reference". "moneylines" no. "spreads" no. "totals" no. "odds" no. "bet" no. "wager" no. "line" maybe not. We can use "latent margin" but "margin of victory" is in paper quote; allowed? It's not betting line. It's legitimate. The invariant says never mention spreads, totals, moneylines, or odds. "margin of victory" not forbidden. But "margin" could be okay. We'll use "margin of victory" only in quote or context. Good.

Need maybe mention "home/away" not "home field advantage" maybe quote. Fine.

Let's compose final. Ensure exact XML sections. Use [PAGE N]. Use quotes. Good.

Potential issue: "verbatim quotes" must match source exactly. We should not alter punctuation. Use curly quotes? Fine. Need exact "quasi-complete separation" etc.

Let's write. 

</NATIVE_REASONING>

<THINK_TRACE>
The source’s reasoning chain is a model-sensitivity audit, not a claim that one ranking is “true.” The first multi-hop step is data generation: each game \(i\) yields a binary outcome \(r_i\in\{0,1\}\), because the BCS computer-ranking restriction allows “only win/loss information may now be used (ties are necessarily settled in overtime)” [PAGE 3]. The second step is latent-variable representation: \(y_i=X_i\beta+Z_i\eta+\epsilon_i\), with observed \(r_i=I\{y_i>0\}\), where \(Z_i\) is a multi-membership row with \(+1\) for the home team and \(-1\) for the visitor. This makes each game belong to two team effects, so the random-effect design is not nested and the marginal likelihood is not factorable. The third step is marginalization over \(\eta\): probit and logit likelihoods require \((p+q)\)-dimensional integrals. The paper states: “The model likelihood functions in Equations (4) and (5) contain intractable integrals because the random effects enter the model through a nonlinear link function. Furthermore, the (p + q)-dimensional integral in each equation may not be factored as a product of one-dimensional integrals” [PAGE 9]. The fourth step is approximation: PQL, first-order Laplace (LA), and fully exponential Laplace (FE) produce different EBLUPs. The paper explicitly notes: “Upon convergence, eη serves as the vector of team ratings, demonstrating that the choice of integral approximation affects the ratings even if the model parameters Ψ are known” [PAGE 13]. The fifth step is ranking: EBLUPs are sorted, so even tiny latent-scale changes can swap adjacent teams. The gray-zone audit is the distinction between statistical and practical significance. The paper reports that “the changes in team ratings resulting from varying these assumptions are small relative to the standard errors associated with each team’s rating. However, these changes result in a reordering of the team rankings that may lead to practically significant differences in the bowl selection process” [PAGE 5]. This is the central trap: standard errors are large, but selection rules consume discrete ranks, not continuous ratings. A second gray zone is approximation order. The paper finds monotonic movement from PQL to LA to FE, and in 2009 and 2011 the second-ranked team changes: “In 2009, FE.P.0 lists Alabama and Cincinnati, while PQL.P.0 and LA.P.0 select Alabama and Texas. In 2011, PQL.P.0 and LA.P.0 rank Oklahoma St. 2, while FE.P.0 ranks Alabama 2” [PAGE 16]. A third gray zone is FCS treatment: “FE.P.0 ranks Alabama 2 in 2011, while FE.P.1 and FE.P.2 pick Oklahoma St.” [PAGE 19]. A fourth is link choice: “in 2011, FE.P.0 ranks LSU, Alabama, and Oklahoma St. as the top three teams, respectively, while FE.L.0 picks LSU, Oklahoma St., Alabama” [PAGE 15]. The audit must therefore reject any claim of invariant top-two ordering across all defensible modeling choices. The only near-invariant result in the source is ML versus REML under PQL.P.1: “none of the top 16 teams from 2008-2011 differ between the ML and the REML rankings (not shown)” [PAGE 21]. The information budget is thin: the paper describes “around 12 binary outcomes on 240 or so subjects” [PAGE 23]. Thus the correct inference is not “ranking is meaningless,” but “rank ordering is model-contingent and must be reported with approximation, link, FCS, and variance assumptions.” 
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source uses a multiple-membership generalized linear mixed model for binary game outcomes. Let \(i=1,\dots,n\) index games, \(j=1,\dots,p+q\) index teams, \(r_i\in\{0,1\}\) be the home-team win indicator, \(X_i\) be the FCS-effect indicator, \(Z_i\) be the multi-membership design row, \(\eta\) be the vector of random team effects, and \(\beta\) be the FCS fixed effect. The threshold model is
\[
y_i=X_i\beta+Z_i\eta+\epsilon_i,\qquad r_i=I\{y_i>0\},\qquad \eta\sim N_{p+q}(0,\sigma_t^2 I).
\]
For the probit link, \(\epsilon_i\sim N(0,1)\), so
\[
\pi_i=P(r_i=1\mid \eta)=\Phi(X_i\beta+Z_i\eta),
\]
and the marginal likelihood is
\[
L(\beta,\sigma_t^2)=\int\cdots\int \prod_{i=1}^n
\Phi\!\left((-1)^{1-r_i}[X_i\beta+Z_i\eta]\right)f(\eta)\,d\eta .
\]
For the logit link, \(\epsilon_i\) follows a standard logistic distribution and
\[
\operatorname{logit}(\pi_i)=X_i\beta+Z_i\eta,\qquad
\operatorname{logit}(\pi)=\log\!\left(\frac{\pi}{1-\pi}\right),
\]
with the corresponding product-likelihood integral. Units: \(r_i\) is a Bernoulli indicator; \(\pi_i\in[0,1]\) is a probability; \(\eta_j\), \(\beta\), and \(X_i\beta+Z_i\eta\) are dimensionless latent-strength quantities; \(\sigma_t^2\) is a dimensionless variance component on the latent scale; standard errors are latent-scale standard errors. No SI units apply. Information is measured by \(n\) binary outcomes and \(p+q\) random effects; the paper notes the data are “around 12 binary outcomes on 240 or so subjects” [PAGE 23].

The multi-membership operator is \(Z_i\): if team \(k\) visits team \(l\), then \(Z_i\) has a \(1\) in position \(l\) and a \(-1\) in position \(k\). This is why the integral cannot be factored into one-dimensional pieces; the paper states the \((p+q)\)-dimensional integral “may not be factored as a product of one-dimensional integrals” [PAGE 9]. The Laplace operator is applied through
\[
h(\eta)=\log\!\left[\prod_{i=1}^n \Phi\!\left((-1)^{1-r_i}Z_i\eta\right)f(\eta)\right],
\]
with
\[
L(\sigma_t^2)\approx (2\pi)^{n/2}e^{h(\eta^*)}
\left|
-\frac{\partial^2 h}{\partial\eta\,\partial\eta'}\bigg|_{\eta=\eta^*}
\right|^{-1/2},
\]
where \(\eta^*\) is the mode of \(h(\eta)\). The paper derives Mease’s penalized likelihood as the PQL approximation to the probit model: “the model of Mease (2003) may be viewed as the PQL approximation to our probit model (6), where the random effects are assumed to have the density specified in Equation (9) rather than the normal density that we specified” [PAGE 10]. The M-step variance update is
\[
\hat{\sigma}_t^2=\frac{1}{p+q}\operatorname{trace}(e_v+e_\eta e_\eta'),
\]
where \(e_\eta=E[\eta\mid r]\) and \(e_v=\operatorname{var}[\eta\mid r]\).

Breakdown and singularity regimes are explicit. First, fixed-effect paired-comparison likelihoods encounter “an infinite likelihood if any teams have a perfect record, due to quasi-complete separation of the data” [PAGE 4]. Second, the FCS fixed effect can also separate if every FBS-versus-FCS game is an FBS win; the paper notes an “infinite likelihood due to quasi-complete separation” in that event [PAGE 8]. Random team effects avoid this by construction, but the marginal integral becomes intractable. Third, PQL variance estimates are downward-biased; the paper reports the “downward bias in the PQL estimates of \(\sigma_t^2\)” [PAGE 16], and this bias has “the same effect as modifying the assumed distribution of the random effects” [PAGE 18]. Fourth, approximation order changes rankings: PQL-to-LA-to-FE movement is monotonic in the reported seasons, and the paper says “if a team is ranked X by PQL.P.0 and Y by FE.P.0, its ranking under LA.P.1 is somewhere between X and Y, inclusive” [PAGE 16]. Fifth, scale choices matter: under \(\sigma_t^2=0.0001\), Arkansas St. reaches rank 11, while under \(\sigma_t^2=100\), “12 of the top 15 teams are from either the SEC or Big XII” [PAGE 17]. Sixth, ML versus REML is nearly inert under the sparse fixed-effect specification: “none of the top 16 teams from 2008-2011 differ between the ML and the REML rankings” [PAGE 21]. The exact failure mode is therefore not numerical non-convergence alone; it is rank instability under defensible changes in link, integral approximation, random-effect distribution, FCS population treatment, and variance estimation.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage runs from Thurstone’s law of comparative judgment and Mosteller’s paired-comparison work through Bradley–Terry and Keener’s Perron–Frobenius ranking, then into Harville’s linear-model football ratings and Mease’s penalized win/loss model. The paper positions itself as a generalization: Mease used fixed team effects plus a penalty function, while Karl uses random team effects and a multiple-membership GLMM. The key retrocausal link is that Mease’s penalty is not an arbitrary add-on; it is equivalent to a particular random-effect distribution and a PQL approximation. The paper states that the model “may be viewed as the PQL approximation to our probit model” [PAGE 10]. That lineage exposes a multi-week trap: across the 2008–2011 seasons, analysts may treat a published ranking as a stable weekly signal, but the ranking is a point estimate from a fragile approximation. The paper uses pre-bowl data through conference championships, so the “clock” is the final BCS ranking cutoff, not the bowl results. The multi-week trap is cumulative: early-season sparse schedules create wide uncertainty; late-season conference championships add binary outcomes; then the approximation choice can still swap teams near the top. The paper reports top-two swaps in 2009 and 2011 from approximation order alone [PAGE 16], and a 2011 FCS-treatment swap of Alabama and Oklahoma St. at rank 2 [PAGE 19]. A second historical trap is the BCS restriction to win/loss information. Because margins were removed, the model cannot use physical performance signals; the paper notes the restriction to “only win/loss information” [PAGE 3]. A third trap is the Annis–Craig concern that penalty choice may influence rankings; the paper answers by showing that the penalty corresponds to a distribution, and that fixing \(\sigma_t^2\) at extremes produces radically different orders [PAGE 15–17]. A fourth trap is computational habit: PQL is convenient in SAS, but it is biased; FE is more accurate but requires third and fourth derivatives [PAGE 12]. The lineage therefore teaches that “more sophisticated” is not automatically “more stable”; it is more accurate in variance estimation while still producing discrete rank swaps. 
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The crisis-habit regression is the analyst’s fallback to the default pseudo-likelihood path under time pressure: fit PQL in familiar software, sort the EBLUPs, and publish ranks. The paper warns that PQL “produces biased parameter estimates” [PAGE 11] and that the downward variance bias behaves like a changed random-effect distribution [PAGE 18]. The counter-trap is overcorrecting by treating FE.P.2 as canonical. FE.P.2 is preferred by the author for using more information and estimating separate FCS variance, but the paper still shows rank changes versus FE.P.0 and FE.P.1 [PAGE 19]. The recursive modeler must anticipate two audiences: the selector, who consumes discrete ranks, and the skeptical reviewer, who consumes standard errors. The selector’s mind is rule-bound: “The top two teams in the BCS rankings are selected to play in the national championship game” [PAGE 14], and “the top 16 teams of the BCS rankings are relevant due to the rules involving eligibility for selection in the non-championship BCS bowls” [PAGE 14]. Therefore a one-position swap is not cosmetic; it changes institutional outcomes. The analyst’s mind must recursively represent that the selector will not see the latent-scale confidence interval, only the rank. That is why the paper says the changes “could have implications for which teams are assigned to which bowls” [PAGE 22]. The clock is the pre-bowl cutoff: the model uses outcomes through conference championships, excluding bowls, to match the data available when final BCS rankings were compiled [PAGE 5]. The counter-trap is to use bowl outcomes retroactively and pretend the pre-bowl ranking was validated; the paper explicitly excludes them. The crisis habit is to confuse “not statistically significant” with “practically irrelevant.” The paper’s own resolution is to keep the uncertainty visible: the ratings have large standard errors, but the ranks are the decision object. A disciplined recursive stance is: report the approximation, link, FCS handling, variance estimate, and the rank interval induced by those choices; never present a single ordering as model-free. 
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The source provides no physical, biomechanical, injury, weather, or travel covariates in the likelihood. The model contains only \(X_i\) for the FCS fixed effect and \(Z_i\) for home/away multi-membership. There is no \(W_i\) weather vector, no \(B_i\) biomechanical vector, and no margin-of-victory response. Therefore a physical or weather claim cannot veto the statistical ranking from this source; it would be non-identifiable. The only physical-layer proxy is home/away, and the author deliberately omits a home-field effect: “We choose not to include a home field effect. We are concerned about the potential impact of nonrandom scheduling between teams on the estimate of home field advantage” [PAGE 8]. The paper further notes that “The more competitive programs tend to play more home games than other FBS programs” [PAGE 8]. Thus even the home/away layer is not adjudicated as a causal physical effect; it is absorbed into the multi-membership design without a home-field coefficient. A weather or biomechanical veto would require a measured covariate with a nonzero coefficient and a demonstrated rank reversal; neither exists in the source. The correct cross-layer adjudication is therefore a veto of overclaiming: if someone says “the rank swap is due to weather, injuries, or physical fatigue,” the source cannot support that claim. The only validated cross-layer variable is division membership, because the FCS effect is estimated; the paper reports that in 2011 \(\hat\beta=2.03\), giving “the probability of a randomly selected FBS team defeating a randomly selected FCS team in 2011 is \(\Phi(2.03)\approx0.979\)” [PAGE 19]. That is a statistical division-layer effect, not a physical or weather effect. Hence physical/biomechanical/weather veto proof = absent by design; the proper veto is against importing those layers into a win/loss-only ranking model.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
1. **Veto scenario: “The top two are invariant to integral approximation.”** Test: compare PQL.P.0, LA.P.0, and FE.P.0 within each season. Prediction from the source: the claim is vetoed in 2009 and 2011. The paper states: “In 2009, FE.P.0 lists Alabama and Cincinnati, while PQL.P.0 and LA.P.0 select Alabama and Texas. In 2011, PQL.P.0 and LA.P.0 rank Oklahoma St. 2, while FE.P.0 ranks Alabama 2” [PAGE 16]. Verifiable prediction: any table-check that treats approximation as irrelevant will fail at the second-ranked team in those seasons.

2. **Veto scenario: “FCS treatment cannot change the second-ranked team.”** Test: compare FE.P.0, FE.P.1, and FE.P.2 in 2011. Prediction: the claim is vetoed because “FE.P.0 ranks Alabama 2 in 2011, while FE.P.1 and FE.P.2 pick Oklahoma St.” [PAGE 19]. Verifiable prediction: if FCS teams are consolidated into one effect versus modeled as a separate population, the 2011 rank-2 identity changes. The source also gives the FCS-effect probability check: \(\Phi(2.03)\approx0.979\) [PAGE 19].

3. **Veto scenario: “Probit versus logit cannot alter the top three.”** Test: compare FE.P.0 and FE.L.0 in 2011. Prediction: the claim is vetoed because “in 2011, FE.P.0 ranks LSU, Alabama, and Oklahoma St. as the top three teams, respectively, while FE.L.0 picks LSU, Oklahoma St., Alabama” [PAGE 15]. Verifiable prediction: any assertion that link choice is immaterial to the top-three ordering is false under the fully exponential approximation. A useful negative control is ML versus REML under PQL.P.1: “none of the top 16 teams from 2008-2011 differ between the ML and the REML rankings (not shown)” [PAGE 21], so a claim that ML/REML necessarily changes the top 16 would also be vetoed.
</RLVR_COUNTERFACTUAL_VETOES>