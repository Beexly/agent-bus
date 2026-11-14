---
source: "arxiv_1911.04529v5.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 61
model: deepseek/deepseek-v4.1-flash-1017
words: 7178
---

<NATIVE_REASONING>
We need answer to user's prompt. They provided strict system-like instructions: GSE + GSI Frontier Reasoning Foundry with XML sections, >=1000 words, no betting lines, formal LaTeX equations units citations exact [PAGE N] markers and verbatim quotes. They gave DRIVE SOURCE and pages text. Need produce response with exact XML sections. Need likely analyze paper, not betting. Need be careful: "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." We won't. Need ">=1,000-word DEPTH across exact XML sections". Need include THINK_TRACE >=400 words. Other sections with formal equations, units, page citations, breakdown. Need likely deal with "retrocausal genealogy", "recursive theory of mind", "cross-layer veto adjudication", "RLVR counterfactual vetoes" — odd but must satisfy. Need not mention betting. Need cite exact [PAGE N] markers and verbatim quotes. Need formal LaTeX equations with units/assumptions/singularity/breakdown. Need mention source operators/equations from paper. We can quote verbatim from page text. Need ensure citations exact. Need maybe address "drive source" as research corpus paper. We can frame as identification in discrete choice models with imperfect information. Need satisfy all XML sections exactly. Need include ≥1000 words total. Let's plan.

Need parse paper thoroughly. Key equations:
- Baseline decision problem G := {Y,V,u,P_V}; info structure S := {T,P_{T|V}}; augmented {G,S}. DM chooses y maximizing ∫ u(y,v) P_{V|T}(v|t) dv; ties.
- 1BCE definition: P_{Y,V} consistent: sum_y P_{Y,V}(y,v)=P_V(v;θ_V); obedient: ∫ P_{Y,V}(y,v)(u(y,v;θ_u)-u(y',v;θ_u))dv ≥0.
- Identified set Θ* := {θ: P_Y ∈ R(θ)}; Q(θ) set distributions from 1BCEs; Proposition 1 Θ*=Θ**.
- Construction linear program eq (2)/(3)/(4); Bernstein sieve (5) and finite LP (6) with γ terms.
- Counterfactual info provision Prop 3: P^*_{Y†}(h)=∪_{θ∈Θ*}[Ψ_l(h;θ),Ψ_u(h;θ)] with LP constraints (7)-(9).
- Covariates Prop 4: linked decisions, equations (11)-(15).
- Welfare ΔE_{θ0} eq (10).
- Empirical: UK 2017 election, BES, spatial model. Results: under complete info β1 EU -0.0770 CI [-0.0998,-0.0541], β2 social care -0.0064 CI includes 0, β3 inequality -0.0342 CI [-0.0613,-0.0070], β4 left-right -0.1507 CI [-0.1782,-0.1232], γ gender -0.0071, class -0.0461, income 0.0044. Identified bΘ* projections include zero for β, exclude positive β3 and almost positive β4. Table 9 counterfactual gains/losses: Abstention [-0.1591,-0.0350], Conservative [-0.1722,-0.1293], Labour [-0.2316,-0.1716], Lib Dem [0.1234,0.1673], UKIP [-0.0173,0.2358], Green [0.1458,0.1781]. Table 10 welfare cost [0,1.1697]; equivalent ~3 points left-right distance. Table 11 Labour social care change: bΛcom -0.2283; bΛy [-0.3648,0.0158]; 0.95 [-0.5682,0.0163].
- Simulations: Kd selection; bounds stable Kd=10; Table 1 [0,1.565] for true β=1.3; Table 2 exogenous shrink, correlated enlarge; Table 3 complete [0,1.565], mixture [0,1.706], null [0,∞), complete info βcom 1.3/1.632/15.186.
- Proposition 2 identification power: under complete info with full support V and additive, no restrictions: Θ* projections equal entire spaces; discrete choice models no identification without covariates/restrictions.
- Section 3.3 comparison to 2-player games, inability to use at infinity arguments because nature lacks covariates/behavior.
- Consideration sets Appendix D.

Need "RETROCAUSAL_GENEALOGY": historical/scientific lineage and multi-week traps. We can describe lineage: Milnor games against nature -> Blackwell informativeness -> Kamenica & Gentzkow Bayesian persuasion -> Bergemann & Morris BCE -> STZ21/MR23 partial identification in games -> Han & Yang sieve -> Andrews & Shi inference -> spatial voting Downs/Black, Alvarez & Nagler, Degan & Merlo. Multi-week traps: assuming complete info; discretizing continuous V arbitrary bins; ignoring mixture/heterogeneity; treating Bernoulli/multinomial Probit as point-identified; small K vs larger K; correlated X,V can widen; interpreting zero-inclusion as no effect; counterfactual info provision with unknown expansion; welfare cost not point identified; social care left position robust but CI includes zero; etc. "multi-week" maybe traps that persist over long horizon / long-run research traps. Need tie to source.

Need "RECURSIVE_THEORY_OF_MIND": crisis habit regression vs counter-trap vs clock. We need map to agents' beliefs, researcher's beliefs about agents' beliefs, mediator recommendations, counterfactual policy. "Crisis habit regression" perhaps refers to reverting to complete-information Habit under stress; "counter-trap" is not assuming it; "clock" maybe timing/knowledge structure. Need formulate as recursive hierarchy: nature → DM prior → signal → posterior → choice → researcher agnostic → 1BCE mediator → counterfactual expansion. Crisis habit regression: when policy asks "what if perfect information?", analyst habitually uses multinomial Probit/Logit point estimates. Counter-trap: use sharp bounds and 1BCE. Clock: timing of signal, observation, choice; linked decision problem for covariates holds S fixed; info provision expands S. Need mention recursive ToM in voting: voters' beliefs about parties, parties' ambiguity, researcher beliefs about voter info; "omniscient mediator" in 1BCE. Need avoid over-psychologizing? But prompt demands.

Need "CROSS_LAYER_VETO_ADJUDICATION": Physical/biomechanical/weather veto proof. This is odd for econ paper. We can state no physical/biomechanical/weather variables in source; veto proof via model invariants: probability axioms, consistency, obedience, support assumptions; physical-layer veto: V support, prior absolute continuity, finite Y, utility bounded/integrable; biomechanical: none (no biomechanics); weather: none (no weather); If a proposed inference violates consistency, obedience, nonnegativity, data match, etc., veto. Need "veto proof" maybe demonstrate that no cross-layer variable can override the identification constraints. Mention Page 11 Definition 1, Page 12 constraints, Page 13 LP, etc. Need exact quotes.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. RLVR = reinforcement learning with verifiable rewards? Need propose three counterfactual veto scenarios that would falsify/veto claims, with predictions. Must be verifiable. E.g.
1. Complete-info MLE vs 1BCE identified set: if data generated under null info, complete-info βcom can be 15.186 while true 1.3, so any claim "complete-info estimate identifies true β" is vetoed. Prediction: in simulation with null info, identified set [0,∞) and βcom=15.186 [PAGE 25 Table 3]. 
2. K-order stability: if Kd too small, bounds narrow due to misspecification. Veto any claim based on Kd=3; prediction with true β=1.3, Kd=3 gives [0,1.321] vs Kd≥10 [0,1.565] [PAGE 23 Table 1]. 
3. Ignoring correlation X,V: if X,V correlated, increasing support cardinality enlarges set; any "more covariates always shrink bounds" claim vetoed. Prediction Table 2: independent X support 3 -> [0,1.565], 7 -> [0,1.474] shrink; correlated support 3 -> [0.548,1.317], 7 -> [0.479,1.627] enlarge [PAGE 24 Table 2]. 
Need maybe 3 scenarios "verifiable" with predictions. Good.

Need include exact [PAGE N] markers and verbatim quotes. We should quote exact phrases. Need ensure quote text matches source exactly (some OCR has weird characters, but can quote short exact). Use exact snippets:
[PAGE 1]: "We leverage the notion of one-player Bayes Correlated Equilibrium by Bergemann and Morris (2016) to provide a tractable characterization of the sharp identified set." (Note source uses "identiﬁed" with ligature; but can quote normal? "verbatim" maybe exact. Could quote with ligature? Use "identiﬁed" maybe not exact. Better use short exact visible: "We leverage the notion of one-player Bayes Correlated Equilibrium by Bergemann and Morris (2016) to provide a tractable characterization of the sharp identiﬁed set." The source has "identiﬁed" ligature. We can quote exact with ﬁ? Hard to replicate. We can quote "We develop a procedure to practically construct the sharp identiﬁed set following a sieve approach" exact. Need maybe not every quote has weird ligature. Use quote from PAGE 11: "PY,V is a 1BCE of G(θ) if:"? We can quote Definition 1 text. Use exact English snippets without ligatures? Hmm.

Need cite exact [PAGE N] markers. For equations, cite pages. Need formal equations in LaTeX, with units/assumptions. Units: probabilities are dimensionless; utilities in "utility units" (not SI); distances in points on 0–10 scales; welfare ΔE in utility points; coefficients β units per point (utility per scale point); γ per unit covariate (gender indicator, class index, log income). Information structure not measured in bits (Blackwell order only); no entropy in main paper (rational inattention appendix example uses Shannon but not empirical). Need mention singularities/breakdown: LP infeasibility; sieve K→∞; support finite; V full support/absolute continuity for Prop 2; prior density positive; utility integrable; obedience constraints; if K finite approximate, not exact; if V unbounded use Szasz/Butzer extension; if X support large, consistency weakens with correlated X,V; if no covariates/parametric restrictions, no identification; if complete info assumption misspecified, βcom outside/inside? Actually Table 3: βcom 1.632 under mixture, 15.186 under null, truth 1.3, identified set contains truth? [0,1.706] contains 1.3; βcom 1.632 is within set? yes. For null [0,∞) contains 1.3 and 15.186. So complete-info estimate is one value in set but can be far from truth; not point identified.
Singularity/breakdown regimes:
- LP feasibility break if θ not in Θ*; no P_{Y|V} satisfying consistency/obedience/data match.
- Sieve truncation K: if K too small, artificial narrowing; as K→∞, uniform approximation but computational cost grows linearly/exponentially; stable at Kd=10 in sim, Kd=5 empirical.
- If P_V not absolutely continuous/full support, Prop 2 no-identification result may not apply; if prior degenerate, different.
- If V finite, finite LP; if continuous, infinite-dimensional; arbitrary discretization can bias.
- If X,V correlated, identification weakens as support cardinality increases, breaking heuristic "more covariates shrink set."
- If all DMs null info, identified set can be unbounded [0,∞) (Table 3); complete-info βcom = 15.186.
- If policy S is complete info, S†=S, unique model-implied choice distribution; Ψ_l=Ψ_u. If S not complete, interval nontrivial.
- Welfare cost ΔE has lower bound 0 due complete info ≥ null expected payoff? Actually first term average ex-post utility under complete info, second under null info; complete info DM earns ex-post payoff on average greater or equal? They claim. Identified set [0,1.1697].
- Covariate counterfactual linked problem: if unknown S held fixed, bounds; if S changes, use Prop 3 not Prop 4.

Need include "source operators and equations" with formal LaTeX and page citations. We can present main definitions and equations. Need "operators" maybe define Conv, ∆, integrals, Bernstein basis, LP constraints. Use [PAGE 10], [PAGE 11], [PAGE 12], [PAGE 13], [PAGE 14], [PAGE 17], [PAGE 18], [PAGE 20], [PAGE 21]. Need quote exact page markers.

Need ensure total >=1000 words. We can make ~3000 words maybe. Desired oververbosity 5 but prompt demands deep. Need not overdo too much but satisfy.

Need structure exact XML tags. Only those tags? They ask exact XML sections. We can include XML only. Need not include preamble. Use:

<THINK_TRACE>
...
</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>
...
</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>
...
</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>
...
</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>
...
</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>
...
</RLVR_COUNTERFACTUAL_VETOES>

Need maybe include "THINK_TRACE" as deep derivation and gray-zone audit. It's not hidden? Fine.

Need be careful not to claim "betting" or odds. No.

Need cite exact quotes. Let's collect exact quotes from pages. Need verbatim short. Use quotes:
- [PAGE 2]: "We consider a large class of static single-agent discrete choice models, where the decision maker (DM) has to choose an alternative from a ﬁnite set." exact (has ligature). Could quote without ligature? Hmm.
- [PAGE 3]: "determining whether a given parameter value belongs to the sharp identiﬁed set consists of solving a linear program" exact? Source: "determining whether a given parameter value belongs to the sharp identiﬁed set consists of solving a linear program, which is a well-understood and computationally tractable problem." Good.
- [PAGE 10]: "The identiﬁed set of θ0 is defined as, Θ∗:= {θ ∈Θ : PY ∈R(θ)}." maybe quote.
- [PAGE 11]: "A fundamental result in the theoretical literature on robust predictions (Theorem 1, BM16) is that the set of optimal strategies that arise from adding an arbitrary information structure to the baseline decision problem G(θ) is equivalent to the set of 1BCE of G(θ)." exact.
- [PAGE 12]: "Observe that the above constraints are linear in PY,V." exact.
- [PAGE 13]: "When V is not a ﬁnite set, the simple ﬁnite-dimensional linear programming approach is no longer applicable as PY,V is an inﬁnite-dimensional object." exact.
- [PAGE 14]: "It can be shown that this approximation tends to PY |V (y|v) uniformly over V as K goes to inﬁnity." exact.
- [PAGE 17]: "Proposition 3. (Counterfactual bounds - information provision)" exact.
- [PAGE 19]: "The complete information benchmark is also useful to evaluate the welfare cost of limited information which may keep agents from choosing their ﬁrst best." exact.
- [PAGE 20]: "Proposition 4. (Counterfactual bounds - change in covariates)" exact.
- [PAGE 24]: "When Xi is exogenous, we find that the identiﬁed set shrinks as the cardinality of X increases." exact? Source: "When Xi is exogenous, we find that the identiﬁed set shrinks as the cardinality of X increases." yes. And "Conversely, when Xi and Vi are allowed to be correlated, the identiﬁed set becomes larger as the cardinality of X increases." exact.
- [PAGE 25]: Table 3 null [0,∞), βcom 15.186. We can cite table values.
- [PAGE 35]: "we find that voters beneﬁt from full information as it leads to a considerable drop in the abstention rate." exact? Source page 6 has that. Page 35? Table 9. Use page 6 quote for that. [PAGE 6]: "We find that voters beneﬁt from full information as it leads to a considerable drop in the abstention rate." exact.
- [PAGE 36]: "the 'losers' from the policy intervention are the two biggest parties, i.e., the Conservative Party and the Labour Party." exact.
- [PAGE 37]: "A utility increase of 1.1697 is equivalent to the utility gain achieved by reducing the ideological distance from a given party on the left-right dimension by approximately 1.1697/0.3948 ≈3 points." exact maybe source has line break. Use.
- [PAGE 38]: "weakening the social care position to 5 leads to a decrease in the Labour Party’s vote share." exact.
- [PAGE 16]: Proposition 2. "the projection of Θ∗on ˜∆(R|Y|) is equal to ˜U; (b) the projection of Θ∗on ˜U is equal to ˜∆(R|Y|)." exact.
- [PAGE 15]: "our identification procedure imposes weak assumptions on the DMs’ behavior by allowing for any information structures through the 1BCE characterization." exact? Source: "Our identiﬁcation procedure imposes weak assumptions on the DMs’ behavior by allowing for any information structures through the 1BCE characterization." Good.

Need maybe mention "units" with equations. For Eq (1): R(θ) := Conv{...} probabilities dimensionless. For LP: P_{Y,V} joint probability; constraints integrals over V. If V continuous, P_{Y,V}(y,v) is not a probability mass but a sub-probability density in v; units: probability per unit v? The paper writes P_{Y,V}(y,v) and integrates over V. In continuous V, P_{Y,V}(y,v) is a density with respect to Lebesgue measure; ∫ P_{Y,V}(y,v) dv is probability. Consistency sum_y P_{Y,V}(y,v)=P_V(v) where P_V(v) density. Need mention "probability density per unit V". In discrete V, mass. For Bernstein coefficients λ dimensionless? λ approximates conditional probabilities; dimensionless. γ_1 includes utility times probability density integrated over v; if V continuous, γ_1 units of utility times probability? Let's derive: γ_{1,k,K}^{y,y'} = ∫ a_k(v) P_V(v;θ_V)[u(y,v;θ_u)-u(y',v;θ_u)] dv. a_k dimensionless, P_V density per unit v, u utility; integral over v gives utility (dimensionless if v coordinate? Actually if V has units, P_V dv probability; so integral yields utility). λ dimensionless; product λ γ_1 = utility. Obedience ≥0. γ_2,k,K = ∫ a_k(v)P_V(v;θ_V)dv, dimensionless probability. Data match sum λ γ_2 = P_Y(y) dimensionless. Good. Need mention "utility units" not SI.

Need "source operators and equations" maybe list:
- Convex hull operator Conv.
- ∆(Y) simplex.
- 1BCE W(θ).
- Q(θ) operator.
- R(θ)=Q(θ), Θ*=Θ**.
- LP in Eq (2)/(3)/(4).
- Bernstein sieve Eq (5)/(6).
- Counterfactual operators Ψ_l/u and Φ_l/u.
- Linked 1BCE constraints.
- Welfare ΔE.
- Identification power Prop 2.
Need include exact equations in LaTeX.

Need "breakdown regimes" in same section: finite vs continuous V, sieve K, support, prior, no covariates, correlated X,V, complete info misspecification, unbounded identified set, LP infeasibility. Also "singularity" maybe "singularity of the LP" not matrix singular; "breakdown" when constraints not feasible; "approximately equal" in Eq (5); "K goes to infinity"; "uniformly over V" quote.

Need "cross-layer veto adjudication": Since no physical/biomechanical/weather variables, any physical claim is out-of-scope; cross-layer vetoes:
- Probability-layer veto: consistency, obedience, nonnegativity, data match. If violated, veto.
- Measurement-layer veto: V and X definitions; distances 0–10; utility normalization abstention 0; if counterfactual changes scale, invalid.
- Computational-layer veto: arbitrary discretization or small K; if K too small, bounds artificially narrow; veto [PAGE 23 Table 1].
- External-layer (physical/weather): no source support; cannot inject weather as V unless re-specify model; no biomechanical components; if injected, must satisfy prior/support/integrability and info structure; no evidence in provided pages.
- "veto proof" maybe say "The proof is not empirical but model-invariant: any candidate conclusion must be obtainable as a projection of bΘ* or C0.95 under the LP; otherwise rejected." Good.

Need "recursive theory of mind" with crisis habit regression vs counter-trap vs clock. Let's craft:
- Level 0 nature draws V.
- Level 1 DM prior P_V.
- Level 2 DM receives signal T and forms P_{V|T}.
- Level 3 DM chooses best response; researcher remains agnostic about level 2.
- Level 4 mediator recommendation (1BCE) rationalizes joint P_{Y,V}; does not require observing T.
- Level 5 policy analyst considers expansion S†; if complete info, S†=S; counterfactual.
- Recursive ToM: voters' beliefs about parties' positions (V vs Z), parties' ambiguity strategies; researcher's beliefs about voters' info structures. "Crisis habit regression": in a crisis or high-dimensional policy question, analyst regresses to complete-information multinomial Probit/Logit because it is familiar and gives point estimates; this is the "habit". Counter-trap: force 1BCE sharp set and report projections/CIs, not point. Clock: timing distinctions: observed Z distances before choice; V tastes potentially learned; counterfactual info provision changes clock (pre-choice signal expansion); covariate change holds info structure fixed (same clock). Need mention "linked augmented decision problem" for covariate change preserves common S; if clock changed, use Prop 3. Good.

Need "RLVR counterfactual vetoes" maybe "RLVR" could be "reinforcement learning with verifiable rewards" but in context maybe "RLVR" means "Reinforcement Learning from Verifiable Rewards". We can define as "verifiable-reward veto tests". Need provide 3 scenarios with predictions. Each should be verifiable by re-running paper's simulation/empirical tables. Use equations/predictions. Need include page citations.

Need include word count? Not necessary. But ensure ≥1000. We can write ~2500.

Need avoid "source text" quoting too much? Fine.

Need possibly mention "no betting lines" not mention at all. Avoid word "odds". Don't mention "spreads/totals/moneylines". Good.

Need maybe use "Bayes Correlated Equilibrium" not "equilibrium selection". Fine.

Let's compose. Need ensure XML tags are exact. Use "&" escaped? In XML text, ampersands should be &amp; if strict. Could avoid & or use "and". Use "<" in math? XML with LaTeX contains < maybe unsafe. Need escape or avoid? The prompt wants XML sections. We can use LaTeX with inequalities like \le, \ge rather than < >. Use \leq, \geq. Avoid raw ampersands. Use "and". For tags, content can have LaTeX braces etc. If using "P_{Y,V}" no issue. Avoid "<" in text. Use \theta \in \Theta. Good.

Need use exact [PAGE N] markers. We can put [PAGE 10] etc.

Potential issue: In XML, quotes fine. Ampersand in "Bergemann and Morris" no &. Use "and". Avoid "X & Y". Use "X and Y".

Need include verbatim quotes. Some quotes contain apostrophes and ligatures. Use normal apostrophes. "identiﬁed" has ligature; maybe not exact. But we can quote phrases without ligature. The instruction says exact [PAGE N] markers and verbatim quotes when source pages provided. We should try exact. We can copy from source including ligature "ﬁ" maybe. Unicode fine. Use "identiﬁed" with ligature in quotes? Might be okay. But maybe better use quotes that don't contain ligature. Example [PAGE 11]: "A fundamental result in the theoretical literature on robust predictions (Theorem 1, BM16) is that the set of optimal strategies that arise from adding an arbitrary information structure to the baseline decision problem G(θ) is equivalent to the set of 1BCE of G(θ)." This has no ligature. Good. [PAGE 12]: "Observe that the above constraints are linear in PY,V." exact. [PAGE 13]: "When V is not a ﬁnite set, the simple ﬁnite-dimensional linear programming approach is no longer applicable as PY,V is an inﬁnite-dimensional object." contains ﬁ. We can quote "When V is not a finite set, the simple finite-dimensional linear programming approach is no longer applicable as PY,V is an infinite-dimensional object." Not exact due ligature. Better avoid this quote or include exact ligature. Use exact with "ﬁnite" maybe. Fine.
Need quote [PAGE 14]: "It can be shown that this approximation tends to PY |V (y|v) uniformly over V as K goes to inﬁnity." Contains ligature? no. Good.
[PAGE 24]: "When Xi is exogenous, we find that the identiﬁed set shrinks as the cardinality of X increases." contains ﬁ? identiﬁed? Source "identiﬁed" with ligature. Use "When Xi is exogenous, we find that the identiﬁed set shrinks as the cardinality of X increases." maybe not exact. We can use "the identiﬁed set shrinks" with ligature. Hmm.
Maybe quote shorter "the cardinality of X increases" no ligature. But need verbatim quote. Could quote "Xi and Vi are allowed to be correlated" exact. Use that.
[PAGE 6]: "We find that voters beneﬁt from full information as it leads to a considerable drop in the abstention rate." contains beneﬁt? "beneﬁt" ligature. Could quote "as it leads to a considerable drop in the abstention rate." exact no ligature? "considerable drop in the abstention rate" yes. Use.
[PAGE 36]: "the “losers” from the policy intervention are the two biggest parties" exact? Contains curly quotes. Fine.
[PAGE 37]: "A utility increase of 1.1697 is equivalent to the utility gain achieved by reducing the ideological distance from a given party on the left-right dimension by approximately 1.1697/0.3948 ≈3 points." exact.
[PAGE 38]: "weakening the social care position to 5 leads to a decrease in the Labour Party’s vote share." exact.
[PAGE 15]: "Our identiﬁcation procedure imposes weak assumptions on the DMs’ behavior by allowing for any information structures through the 1BCE characterization." has ﬁ. Could quote "allowing for any information structures through the 1BCE characterization" exact. Good.
[PAGE 16]: "the projection of Θ∗on ˜∆(R|Y|) is equal to ˜U" etc. Use.
[PAGE 25] Table 3 values, no quote. Cite [PAGE 25].
[PAGE 23] Table 1 values, cite [PAGE 23].
[PAGE 24] Table 2 values, cite [PAGE 24].
Need maybe not overquote.

Need formal equations with page citations:
- Eq (1) [PAGE 10].
- Definition 1 [PAGE 11].
- Eq (2) [PAGE 12].
- Eq (3) [PAGE 12].
- Eq (4) [PAGE 14].
- Eq (5)-(6) [PAGE 14].
- Prop 3 [PAGE 17-18].
- Eq (10) [PAGE 19].
- Prop 4 [PAGE 20-21].
- Prop 2 [PAGE 15-16].
- Table results [PAGE 32-38].

Need "units" in equations. Let's write:
"All choice probabilities P_Y(y), λ_{k,K}^y, P_{Y,V}(y,v)dv are dimensionless; P_V(v) is a density in inverse units of V if V continuous; utilities u and ΔE are in utility units; ideological distances are in 0–10 scale points; β coefficients are utility units per scale point; γ coefficients are utility units per covariate unit (gender indicator, class index, log-income)." Good.

Need "singularity/breakdown regimes" exact:
"LP feasible set is empty iff θ not in Θ*; the equality constraints may be infeasible; the Bernstein approximation breaks exactness for finite K; as K→∞ uniform approximation, but unknowns (D+1)K grow; in empirical D=5, Kd=5 gives K=7,776 and 46,656 unknowns [PAGE 32 Table 7]." Good.
"At K_d=3 bounds [0,1.321] vs K_d=10 [0,1.565] true β=1.3 [PAGE 23 Table 1], so small K can narrow artificially." "At Kd≥10 stable [PAGE 23]."
"Null info all: [0,∞) and βcom=15.186 vs true 1.3 [PAGE 25 Table 3]."
"Complete-info assumption misspecified in mixture: βcom=1.632 [PAGE 25]."
"Correlated X,V: larger support enlarges set [PAGE 24 Table 2]."
"Prop 2: no identification without restrictions; projections equal full spaces [PAGE 16]."

Need maybe "Source operators" include "Conv" and "∆". Good.

Let's draft in final only. Need no markdown? XML tags okay. Use paragraphs.

Need ensure total word count. Let's estimate: THINK_TRACE ~600 words; SOURCE ~700; RETRO ~400; RECURSIVE ~500; CROSS ~500; RLVR ~500. Total ~3200. Good.

Need be mindful of exact XML section names. Use exactly as prompt. Do not add extra tags. Could include LaTeX display with \[ ... \] inside XML. Fine. Avoid raw "<" by using \leq, \geq. Use "∫" maybe okay. Use \(...\). Need maybe escape "&" none.

Let's compose carefully.

Potential issue: XML content with "Q(θ) := \{ P_Y ∈ ∆(Y) ... \}" contains `\` fine. `<` not present? Use `\leq` not `<`. Avoid "≥" as unicode? Fine but LaTeX better. Use "≥" in text okay. Use "≤" okay. XML valid. Ampersand no. The `\subset`? fine.

Need mention "no betting lines" not mention. Good.

Let's write.

Need "THINK_TRACE" deep multi-hop derivation & gray-zone audit. We can structure with numbered steps. Good.

Need "gray-zone audit" mention ambiguous points:
- The paper's "sharp identified set" is sharp within model and info-agnostic class, not sharp about actual info structure.
- "sharp" requires full class of information structures and convexification; heterogeneity via mixtures.
- "complete information" counterfactual is a benchmark; when S complete, Ψ_l=Ψ_u.
- "welfare cost" maximum cost of limited info, not average actual cost; identified set.
- "social care change" result mostly negative but CI includes zero; so not definitive.
- "UKIP gain interval includes negative and positive; do not overclaim."
- "β2 complete info CI includes zero; agnostic set also includes zero; no robust ideological effect on social care."
- "β1 inconclusive under agnostic; cannot claim Brexit distance irrelevant; only cannot reject zero."
- "zero in projection does not mean true parameter zero; projection union can include zero at one info structure."
- "counterfactual vote share intervals are unions over θ in Θ* and x; not simultaneous for all parties; no sum-to-one across intervals necessarily at bounds."
This is good.

Need "RETROCAUSAL_GENEALOGY" multi-week traps. Mention "retrocausal" as lineage from later robust BCE back to early spatial voting and games against nature. "Multi-week traps" maybe "long-horizon traps" — I can phrase "long-horizon research traps (multi-week modeling traps)". Good.

Need "RECURSIVE_THEORY_OF_MIND" crisis habit regression vs counter-trap vs clock. Use subheadings in text. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. Must mention those exact layers. State none in paper, but adjudicate.

Need "RLVR_COUNTERFACTUAL_VETOES" 3 scenarios. Use "Veto scenario 1/2/3". Include predictions and page citations. Good.

Let's final.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s central move is to replace an unobservable and possibly heterogeneous information structure with a sharp, linear-programming representation of all choice distributions consistent with some information structure. The first derivation step is the baseline decision problem \(G := \{Y,V,u,P_V\}\) and information structure \(S := \{T,P_{T|V}\}\), with the DM choosing \(y\) to maximize \(\int_V u(y,v)P_{V|T}(v|t)dv\) [PAGE 7]. The second step is to treat the DM’s problem as a one-player game against nature, so that the set of optimal strategies generated by adding an arbitrary information structure equals the set of one-player Bayes Correlated Equilibria, or 1BCE [PAGE 11]. The third step is to observe that the 1BCE constraints are linear in the joint distribution \(P_{Y,V}\), so the identified set can be checked by linear-program feasibility [PAGE 12]. The fourth step is the sieve approximation for continuous \(V\), using Bernstein polynomials so that \(P_{Y|V}(y|v)\) is approximated by \(\sum_{k\in K}\lambda^y_{k,K}a_{k,K}(v)\), with uniform approximation as \(K\to\infty\) [PAGE 14]. The fifth step is counterfactual identification: information provision expands the information structure and the counterfactual choice probabilities are the 1BCE of \(\{G(\theta),S\}\) for the policy-imposed \(S\) [PAGE 17]; covariate changes instead use a linked decision problem that holds the latent information structure fixed while changing \(X\) [PAGE 20].

A gray-zone audit is necessary because “sharp identified set” here means sharp relative to the maintained model class and the class of information structures, not sharp relative to the true latent signal. The paper is explicit that it remains agnostic about \(S_1,\dots,S_n\), allows information structures to differ across agents, and convexifies the set of model-implied choice probabilities to permit mixtures over information structures [PAGE 9]. Thus, a projection interval such as \([-0.3844,0.0827]\) for \(\beta_1\) in Table 6 is not an estimate of the true information structure; it is the set of parameter values that can be rationalized by at least one allowed mixture. A second gray zone is the complete-information benchmark: when \(S\) is complete, any expansion \(S^\dagger\) equals \(S\), so the counterfactual choice distribution is unique for a given \(\theta\) and \(\Psi_\ell(y|x;\theta)=\Psi_u(y|x;\theta)\) [PAGE 18-19, PAGE 35]. That does not mean the complete-information MLE is identified under the agnostic model; Table 3 shows that under all-null information the complete-information estimate is \(15.186\) while the truth is \(1.3\), and the agnostic identified set is \([0,\infty)\) [PAGE 25]. A third gray zone is that zero inclusion in a projection does not prove “no effect”; it says that some allowed information structure can rationalize zero. Conversely, excluding positive values of \(\beta_3\) and almost all positive values of \(\beta_4\) is a robust sign restriction within the allowed class [PAGE 32-33]. A fourth gray zone is computational: small Bernstein order can artificially narrow bounds; the simulation gives \([0,1.321]\) at \(K_d=3\) but \([0,1.565]\) at \(K_d=10\) when the truth is \(1.3\) [PAGE 23]. A fifth gray zone is covariate support: with exogenous \(X\), larger support shrinks the set, but with correlated \(X,V\), larger support can enlarge it because smaller groups share a prior, weakening consistency [PAGE 24]. A sixth gray zone is counterfactual aggregation: the reported intervals are unions over \(\theta\in\Theta^*\) and over covariate realizations, not simultaneous confidence statements for all party shares; intervals for different parties need not add to one at every bound. These are the main reasons the paper’s language is “sharp bounds” and “robust” rather than point identification.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source’s formal objects are probability distributions, convex hulls, conditional expectations, and linear-program feasibility tests. Let \(\Delta(Y)\) be the simplex of choice distributions and \(\mathrm{Conv}\{\cdot\}\) the convex hull operator. The model-implied agnostic choice set is
\[
R(\theta):=\mathrm{Conv}\left\{P_Y\in\Delta(Y):P_Y(y)=\int_T\int_V P_{Y|T}(y|t)P_{T|V}(t|v)P_V(v;\theta_V)\,dv\,dt\ \forall y,\ P_{Y|T}\in R(\theta,S),\ S\in\mathcal S\right\},
\]
and the identified set is
\[
\Theta^*:=\{\theta\in\Theta:P_Y\in R(\theta)\}.
\]
These are on [PAGE 10]. The 1BCE definition is: \(P_{Y,V}\) is consistent,
\[
\sum_{y\in Y}P_{Y,V}(y,v)=P_V(v;\theta_V)\quad\forall v\in V,
\]
and obedient,
\[
\int_V P_{Y,V}(y,v)\big(u(y,v;\theta_u)-u(y',v;\theta_u)\big)\,dv\geq 0\quad\forall y'\in Y\setminus\{y\},\ \forall y\in Y.
\]
See [PAGE 11]. Theorem 1 of Bergemann and Morris (2016) is quoted as: “A fundamental result in the theoretical literature on robust predictions (Theorem 1, BM16) is that the set of optimal strategies that arise from adding an arbitrary information structure to the baseline decision problem \(G(\theta)\) is equivalent to the set of 1BCE of \(G(\theta)\)” [PAGE 11]. The operational finite-\(V\) program is
\[
\sum_{y\in Y}P_{Y,V}(y,v)=P_V(v;\theta_V),\quad
\sum_{v\in V}P_{Y,V}(y,v)\big(u(y,v;\theta_u)-u(y',v;\theta_u)\big)\geq 0,
\]
\[
P_{Y,V}(y,v)\geq 0,\quad
\sum_{y\in Y}\sum_{v\in V}P_{Y,V}(y,v)=1,\quad
\sum_{v\in V}P_{Y,V}(y,v)=P_Y(y),
\]
as in [PAGE 12]. The paper notes: “Observe that the above constraints are linear in \(P_{Y,V}\)” [PAGE 12]. For continuous \(V\), the Bernstein sieve is
\[
P_{Y|V}(y|v)\approx \sum_{k\in K}\lambda^y_{k,K}a_{k,K}(v),\qquad
a_{k,K}(v):=\binom{K}{k}\frac{(v-v_\ell)^k(v_u-v)^{K-k}}{(v_u-v_\ell)^K},
\]
with coefficient \(\lambda^y_{k,K}:=P_{Y|V}(y|v_\ell+(v_u-v_\ell)k/K)\) [PAGE 14]. The approximate LP uses
\[
\gamma^{y,y'}_{1,k,K}(\theta):=\int_V a_{k,K}(v)P_V(v;\theta_V)\big(u(y,v;\theta_u)-u(y',v;\theta_u)\big)\,dv,
\]
\[
\gamma_{2,k,K}(\theta_V):=\int_V a_{k,K}(v)P_V(v;\theta_V)\,dv,
\]
and constraints
\[
\sum_{k\in K}\lambda^y_{k,K}\gamma^{y,y'}_{1,k,K}(\theta)\geq 0,\quad
\lambda^y_{k,K}\geq 0,\quad
\sum_{y\in Y}\lambda^y_{k,K}=1,\quad
\sum_{k\in K}\lambda^y_{k,K}\gamma_{2,k,K}(\theta_V)=P_Y(y),
\]
as in [PAGE 14]. The paper states: “It can be shown that this approximation tends to \(P_{Y|V}(y|v)\) uniformly over \(V\) as \(K\) goes to infinity” [PAGE 14]. The counterfactual information-provision bounds are
\[
P^*_{Y^\dagger}(h)=\cup_{\theta\in\Theta^*}[\Psi_\ell(h;\theta),\Psi_u(h;\theta)],
\]
with \(\Psi_\ell,\Psi_u\) defined by minimizing and maximizing
\[
\int_V\int_T P_{Y^\dagger,V,T}(h,v,t)\,dt\,dv
\]
subject to consistency, obedience, and probability constraints (7)-(9) on [PAGE 17-18]. The welfare cost of limited information is
\[
\Delta E_{\theta_0}:=
\int_V u\!\left(\arg\max_{y\in Y}u(y,v;\theta_{0,u}),v\right)P_V(v;\theta_{0,V})dv
-\int_V u\!\left(\arg\max_{y\in Y}\int_V u(y,v;\theta_{0,u})P_V(v;\theta_{0,V})dv,v\right)P_V(v;\theta_{0,V})dv,
\]
on [PAGE 19]. The covariate-counterfactual bounds use a linked 1BCE of \(\{G(\theta,X),G(\theta,X^\dagger)\}\), with constraints (11)-(15) on [PAGE 20-21].

Units and dimensional accounting: all choice probabilities, \(\lambda^y_{k,K}\), and \(P_Y(y)\) are dimensionless; if \(V\) is continuous, \(P_V(v)\) is a density in inverse units of \(V\) and \(P_{Y,V}(y,v)dv\) is a probability; utilities \(u\) and \(\Delta E\) are in utility units; ideological distances are in 0–10 scale points; \(\beta\) coefficients are utility units per scale point; \(\gamma\) coefficients are utility units per covariate unit, with gender as an indicator, class as an index, and income in log pounds. The LP feasibility set is empty exactly when a candidate \(\theta\) is not in the identified set. The approximation is not exact for finite \(K\); the paper’s own simulation shows narrow bounds at \(K_d=3\) and stability from \(K_d=10\) onward [PAGE 23]. The program becomes infeasible or non-sharp under arbitrary discretization of continuous \(V\), under a degenerate prior, under misspecified support restrictions, or when the complete-information assumption is imposed on data generated by null or mixed information. The no-identification benchmark is Proposition 2: with full-support absolutely continuous \(P_V\) and additive \(u(y,v)=\tilde u(y)+v_y\), “the projection of \(\Theta^*\) on \(\tilde\Delta(\mathbb R^{|Y|})\) is equal to \(\tilde U\); (b) the projection of \(\Theta^*\) on \(\tilde U\) is equal to \(\tilde\Delta(\mathbb R^{|Y|})\)” [PAGE 15-16]. Thus, without covariates and parametric restrictions, the model has no identifying power even under complete information.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s scientific lineage runs backward from robust mechanism design and partial identification to classical spatial voting. The older layer is the spatial model of voting: Downs and Black posit that voters prefer the party closest to their ideal point [PAGE 4]. The empirical layer is Alvarez and Nagler-style parametric discrete choice, usually estimated under perfect information [PAGE 4]. The information-friction layer includes Shepsle, Weisberg and Fiorina, Enelow and Hinich, Baron, Matsusaka, Carpini and Keeter, Lupia and McCubbins, Feddersen and Pesendorfer, and Matějka and Tabellini, who argue that uncertainty pervades voting [PAGE 4]. The robust-games layer comes from Milnor’s game against nature, Blackwell’s ranking of information structures, Kamenica and Gentzkow’s Bayesian persuasion, and Bergemann and Morris’s Bayes Correlated Equilibrium [PAGE 2-3, PAGE 6]. The econometric partial-identification layer comes from Syrgkanis, Tamer, and Ziani, Magnolfi and Roncoroni, Beresteanu–Molchanov–Molinari, and Han and Yang’s sieve approach [PAGE 2-3, PAGE 14]. The inference layer is Andrews and Shi’s conditional moment inequalities and bootstrap critical values [PAGE 54-57]. The empirical voting application then closes the loop: it estimates a spatial voting model under weak assumptions on voter information and compares it with complete-information multinomial Probit-type results [PAGE 24-38].

The retrocausal genealogy exposes several multi-week modeling traps. Trap one is the complete-information habit: because multinomial Logit and Probit are familiar and point-identify parameters under strong assumptions, an analyst may treat the complete-information MLE as the object of interest. The paper shows that this is unsafe when information structures are heterogeneous: in the third simulation, the complete-information estimate is \(1.3\) under complete information, \(1.632\) under a mixture, and \(15.186\) under null information, while the truth is \(1.3\) [PAGE 25]. Trap two is arbitrary discretization of continuous \(V\): the paper explicitly says that when \(V\) is not finite, “the simple finite-dimensional linear programming approach is no longer applicable as \(P_{Y,V}\) is an infinite-dimensional object” [PAGE 13]. A long-horizon project that bins \(V\) into a few arbitrary intervals can produce bounds that look precise but are artifacts of the binning. Trap three is small sieve order: Table 1 shows that \(K_d=3\) yields \([0,1.321]\) while \(K_d=10\) yields \([0,1.565]\) with truth \(1.3\) [PAGE 23]. Trap four is “more covariates always shrink bounds”: with exogenous \(X\), the set shrinks as the support of \(X\) grows, but with correlated \(X,V\), it becomes larger [PAGE 24]. Trap five is treating an interval that includes zero as proof of no effect; the paper’s own \(\beta_1\) projection includes zero while the complete-information CI excludes zero, which reflects how information heterogeneity can rationalize different signs [PAGE 32-33]. Trap six is overclaiming from counterfactual intervals: the UKIP gain interval \([-0.0173,0.2358]\) includes both losses and gains, so the robust statement is directional only for the Conservative, Labour, Liberal Democrat, and Green results, not for UKIP [PAGE 36, Table 9]. Trap seven is assuming that the Labour social-care counterfactual is definitively negative: the point estimate under complete information is \(-0.2283\), but the agnostic bound is \([-0.3648,0.0158]\) and the 95% region is \([-0.5682,0.0163]\), so the result is mostly negative but not uniformly signed [PAGE 38, Table 11].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Recursive theory of mind here has three levels. Level 1 is nature: \(V\) is drawn from \(P_V\), and nature is indifferent, has no payoff, and chooses \(V\) by randomization [PAGE 8]. Level 2 is the voter: the voter has a prior \(P_V\), receives a private signal \(T\), updates to \(P_{V|T}\), and chooses a best response. Level 3 is the researcher: the researcher does not observe \(T\) or the information structure and therefore does not model the voter’s posterior directly; instead, the researcher uses the 1BCE mediator device to characterize all joint distributions \(P_{Y,V}\) that are consistent and obedient [PAGE 11]. A fourth level is the policy analyst: the analyst asks what happens under an expanded information structure \(S^\dagger\), and the counterfactual set is the 1BCE of \(\{G(\theta),S\}\) [PAGE 17]. A fifth level is the empirical voter’s own theory of mind about parties: voters may know highly debated issue distances \(Z_{iy}\) but may be uncertain about less advertised candidate qualities and obscure policy positions \(V_i\) [PAGE 27]. The parties may strategically “becloud” characteristics “in a fog of ambiguity” to expand support [PAGE 34]. Thus, the recursive structure is not merely statistical; it encodes voters’ beliefs about parties, parties’ beliefs about voters’ beliefs, and the researcher’s beliefs about both.

The “crisis habit regression” is the analyst’s tendency, when faced with a difficult information environment, to regress to the familiar complete-information multinomial Probit or Logit. This habit is visible in the paper’s comparison: under complete information, all \(\beta\) coefficients except \(\beta_2\) are statistically different from zero at 5%, but under the agnostic 1BCE model all \(\beta\) projections include zero [PAGE 32-33]. The counter-trap is to refuse point identification as the default and instead report \(\Theta^*\), \(C_{0.95}\), counterfactual intervals, and welfare-cost intervals. The clock is the timing of information relative to choice. For information-provision counterfactuals, the clock is reset: the policy intervention expands \(S\) before choice, so one uses Proposition 3 and the 1BCE of \(\{G(\theta),S\}\) [PAGE 17-18]. For covariate counterfactuals, the clock is held fixed: the voter processes the same latent information structure in the factual and counterfactual scenarios, so one uses the linked augmented decision problem and Proposition 4 [PAGE 20-21]. Confusing the clocks produces the wrong counterfactual: changing \(X\) while allowing \(S\) to change is an information-provision object, not a covariate-shift object. The recursive discipline is therefore: state which agent knows what, at which stage, and under which information expansion; then let the LP enforce consistency and obedience.

The empirical application illustrates the recursive trap in a concrete way. The “Brexit election” narrative would suggest a strong negative \(\beta_1\), but the agnostic set for \(\beta_1\) is \([-0.3844,0.0827]\), so the analyst cannot rule out zero [PAGE 32]. The robust result is instead that \(\beta_3\) excludes positive values and \(\beta_4\) almost entirely excludes positive values [PAGE 32-33]. The paper interprets this as consistent with left-right ideology remaining the main driver [PAGE 33]. In recursive terms, the voter’s uncertainty about \(V\) can rationalize a range of apparent issue weights; the researcher must not mistake the complete-information point estimate for the voter’s actual decision rule. The counterfactual information-provision exercise then shows that full information lowers abstention and harms the two largest parties while helping the Liberal Democrats and Greens [PAGE 35-36, Table 9]. That is a statement about the welfare consequences of a change in the voter’s clock, not about a change in the voter’s ideology.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The source contains no physical, biomechanical, or weather variables. Its layers are probability, utility, information, and computation. A cross-layer veto therefore cannot be an empirical weather veto; it is a consistency veto. The first veto is probability-consistency: any candidate \(P_{Y,V}\) must satisfy
\[
\sum_{y\in Y}P_{Y,V}(y,v)=P_V(v;\theta_V)\quad\forall v\in V
\]
and nonnegativity, total mass one, and data match [PAGE 11-12]. If a proposed counterfactual violates these, it is vetoed regardless of how plausible its economic story is. The second veto is obedience: for every recommended \(y\),
\[
\int_V P_{Y,V}(y,v)\big(u(y,v;\theta_u)-u(y',v;\theta_u)\big)dv\geq 0\quad\forall y'\neq y.
\]
If a voter is recommended an alternative that yields lower posterior expected utility, the 1BCE is invalid [PAGE 11]. The third veto is support and integrability: continuous \(V\) requires a prior density and integrable utilities; otherwise the integrals in (2), (4), and (6) are not well-defined [PAGE 12-14]. The fourth veto is computational truncation: finite \(K\) is an approximation, not an identity. A claim based on \(K_d=3\) can be vetoed by the paper’s own \(K_d=10\) result, since the bounds widen from \([0,1.321]\) to \([0,1.565]\) with truth \(1.3\) [PAGE 23]. The fifth veto is counterfactual-clock mismatch: using Proposition 3 when information is held fixed, or Proposition 4 when information is expanded, is a specification veto [PAGE 17-21]. The sixth veto is welfare interpretation: \(\Delta E_{\theta_0}\) is the maximum welfare cost of limited information, not the average actual loss; the identified set is \([0,1.1697]\) and the 95% region is \([0,1.2387]\) [PAGE 36-37, Table 10]. A claim that “the average voter loses 1.1697 utility points” is vetoed; the correct statement is that the maximum cost can be as high as 1.1697 utility points under the model class. The seventh veto is physical/biomechanical/weather injection: because the source’s utility is \(u(y,X_i,V_i;\beta)=\beta X_{iy}+V_{iy}\) in the simulation and \(\beta_y^\top Z_{iy}+\gamma_y^\top W_i+V_{iy}\) in the empirical model [PAGE 21, PAGE 26], any weather or biomechanical variable would have to enter either \(X\), \(W\), or \(V\), and would then be subject to the same prior, support, and obedience constraints. There is no page in the provided source that supplies such a variable, so any assertion that weather or biomechanics “explains” the voting bounds is outside the model and is vetoed by lack of source support.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto scenario 1: complete-information point-estimate veto. Verifiable claim: “The complete-information estimate identifies the true \(\beta\) even when agents may be imperfectly informed.” Veto test: reproduce the third simulation with \(|Y|=3\), \(D=2\), true \(\beta=1.3\), and all agents processing the null information structure. Prediction: the agnostic identified set is \([0,\infty)\), and the complete-information estimate is \(\beta_{\mathrm{com}}=15.186\) [PAGE 25, Table 3]. Therefore any claim that the complete-information MLE is the true parameter is vetoed unless the analyst adds and defends the complete-information assumption. A second check under a mixture of \(5/6\) complete and \(1/6\) null gives \(\beta_{\mathrm{com}}=1.632\) and identified set \([0,1.706]\) [PAGE 25]. The verifiable prediction is that the complete-information estimate can be inside the agnostic set but far from the truth; it is not a point-identification certificate.

Veto scenario 2: sieve-order artifact veto. Verifiable claim: “The reported bounds are insensitive to the Bernstein order, so \(K_d=3\) is enough.” Veto test: rerun the first simulation with truth \(\beta=1.3\), \(D=2\), and \(K_d\in\{3,5,7,10\}\). Prediction: the identified set is \([0,1.321]\) at \(K_d=3\), \([0,1.402]\) at \(K_d=5\), \([0,1.504]\) at \(K_d=7\), and \([0,1.565]\) at \(K_d=10\) [PAGE 23, Table 1]. The width increases and stabilizes from \(K_d=10\). Therefore a conclusion based on \(K_d=3\) is vetoed as a likely truncation artifact. In the empirical application the paper chooses \(K_d=5\) after checking \(K_d=3,5,7,10\), with projections approximately stable from \(K_d=5\) onward [PAGE 31-32, Table 6]. The verifiable prediction is that small-order bounds are narrower, not more credible.

Veto scenario 3: “more covariates always shrink the identified set” veto. Verifiable claim: “Increasing the support of \(X\) necessarily tightens identification.” Veto test: compare the exogenous-\(X\) and correlated-\((X,V)\) simulations. Prediction: when \(X_i\) and \(V_i\) are independent, the identified set shrinks from \([0,1.565]\) at \(X=\{-2.4,-0.4,0.3\}\) to \([0,1.505]\) at five support points and \([0,1.474]\) at seven support points; when \(X_i\) and \(V_i\) are correlated, the set changes from \([0.548,1.317]\) to \([0.494,1.448]\) to \([0.479,1.627]\) as support grows [PAGE 24, Table 2]. The prediction is directional: exogenous support tightens; correlated support can widen because smaller groups share a prior and weaken the consistency requirement. Any universal “more covariates shrink bounds” claim is vetoed by these tables. A fourth check is the Labour social-care counterfactual: the complete-information estimate is \(-0.2283\), while the agnostic interval is \([-0.3648,0.0158]\) and the 95% interval is \([-0.5682,0.0163]\) [PAGE 38, Table 11]. The verifiable prediction is that the sign is mostly negative but not uniformly identified, so a claim of a definitive negative effect is vetoed. These three RLVR-style checks are reproducible from the paper’s simulation and empirical tables without external data.
</RLVR_COUNTERFACTUAL_VETOES>