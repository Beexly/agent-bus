---
source: "2023 - Kelly criterion and fractional Kelly strategy for non-mutually exclusive bets - Jacot et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Journal of Quantitative Analysis in Sports/2023"
pages: 6
model: deepseek/deepseek-v4.1-flash-1017
words: 5774
---

<NATIVE_REASONING>
We need answer as GSE+GSI Frontier Reasoning Foundry. Need obey invariants. Need produce XML sections exact. Need >=1000 words total. Need deep derivation, source operators/equations, citations [PAGE N], verbatim quotes. Need zero betting lines: no spreads totals moneylines odds? Wait source has returns, not betting lines? Invariant says never mention spreads, totals, moneylines, or odds. But source uses "odds" many times. Can cite verbatim quotes that include "odds"? Hmm invariant zero betting lines: Never mention spreads, totals, moneylines, or odds. But source text has "favorable odds"; if quote includes odds, violates? We should avoid word odds? But need verbatim quotes exact page markers. We can choose quotes without odds? Need cite exact [PAGE N] markers and verbatim quotes. We can quote equations and text without odds maybe. But page 1 has "favorable odds" in abstract. Avoid. Could quote "The Kelly criterion directly extends to such bets." [PAGE 2] no odds. Need no mention of betting lines. We can discuss returns, probabilities. Need no "odds" term. Need maybe mention "return ratio" not odds. But source has Table 1 etc. That's fine? Table 1 includes bet types (Win, Place, Show, Exacta...) not betting lines. Is "horse race wagering" okay? Betting lines? We can focus methodology, not lines. Invariant says ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds. It doesn't ban betting types. But "odds" word banned. Avoid "odds" entirely, even in quotes. Need not mention "spreads" etc.

Need produce >=1000 words across exact XML sections:
<THINK_TRACE> >=400 words deep multi-hop derivation & gray-zone audit.
<SOURCE_OPERATORS_AND_EQUATIONS> formal LaTeX, units, page citations, breakdown.
<RETROCAUSAL_GENEALOGY> historical/scientific lineage & multi-week traps.
<RECURSIVE_THEORY_OF_MIND> crisis habit regression vs counter-trap vs clock.
<CROSS_LAYER_VETO_ADJUDICATION> physical/biomechanical/weather veto proof.
<RLVR_COUNTERFACTUAL_VETOES> 3 verifiable RLVR veto scenarios + predictions.

Need likely user expects research reasoning around paper, maybe sports betting? But invariants no lines. Need maybe apply to decision system? The sections are generic but can ground in Kelly non-mutually exclusive bets. Need discuss "crisis habit regression vs counter-trap vs clock" maybe in context of wagering strategy? Need avoid betting lines. We can make analogy to capital allocation under uncertainty; recursive theory of mind about agents copying strategy? The paper mentions noise from bettors following same strategy at last minute [PAGE 5]. This can support.

Need include formal LaTeX equations and units. Units: capital dimensionless ratios a; log-growth in nats per trial if natural log, or bits per trial if log base 2. Need state assumption. Probability dimensionless. r_i dimensionless return. G∞ has units log(capital ratio) per trial = nats/trial. Since log(C_N/C_0) dimensionless? Actually log of ratio dimensionless; per trial. We can say natural log yields nats/trial; base-2 bits/trial. Need singularity/breakdown regimes: constraints 1 + r_i^T a > 0, if approaches zero log diverges -inf; if p_i>0 and r_i^T a=-1 then G=-inf. Non-unique maximum if proportional returns r_1+/r_1- = r_2+/r_2- (det zero) [PAGE 4]. Edge cases: a_j>=0, sum<=1, no leverage. If no favorable edge, a*=0. Gradient zero not always at max; border solution if ratios unequal. Fractional Kelly optimization min 1^T a s.t. G/G*> = k, a>=0, sum <=1; breakdown if k >1 infeasible; k=1 recovers Kelly maybe nonunique; k<=0 trivial? Need mention.

Need include source operators: G∞, C_N, a*, gradient, Hessian, optimization problems (9), (15), equation (12), (13), (14), constraints. Need cite PAGE exact. Use verbatim quotes. Need not quote "odds". Need cite page markers. Need exact quotes. Can quote:
- "maximize the expected log-growth of capital by betting a ﬁxed fraction of available capital" [PAGE 1].
- "The Kelly criterion directly extends to such bets." [PAGE 2].
- "This equation is a more general expression of (7)." [PAGE 3].
- "∇aG∞=..." maybe equations not quotes. Verbatim quotes can be equations? We can quote text.
- "a gradient-descent numerical approach is preferred" [PAGE 3].
- "only the most rewarding of the two bets is kept in the allocation" [PAGE 4].
- "The computed af is also shown in Figure 4." [PAGE 5].
Need ensure no banned terms in quotes. Avoid "odds"; "returns" okay. The word "wagering" maybe okay. "betting" okay? Invariant says zero betting lines, not zero betting. But "betting" is in source. Should be okay. But maybe avoid "betting lines" phrase. We can use "capital allocation" and "wager" carefully. No "odds" word.

Need answer style: XML only? User requested exact XML sections. We can provide only these XML tags. Need no markdown? We can put XML. Need maintain >=1000 words. Desired oververbosity 5. Need include at least 1000-word depth. We can produce around 1800-2500 words. Need ensure each section complete. Need maybe include all sections. We can use LaTeX inside XML. Need escape < and >? XML content with LaTeX uses < maybe issue? We can use \lt or keep text? Since they want XML sections, content can include LaTeX with < signs? To be safe use \le, \ge, \lt, \gt? But LaTeX uses < in inequalities. XML parsers may interpret. We can use \lt and \gt macros or escape &lt;. Use \le, \ge mostly. For strict positivity > use \gt? Better use \ge, \le, \gt? In LaTeX \gt isn't standard? Could write \text{>} or use \mathrel{>}? Maybe use plain "greater than" or ">" escaped as &gt;. But user wants formal LaTeX. Use \ge and \le, avoid strict < by \gt? We can use \mathbb{1}^{\top}a \le 1. For positivity use 1+r_i^\top a \gt 0? \gt is not standard LaTeX maybe but okay? Use \mathopen{} >? Hmm. XML needs escaping. We can use &gt; and &lt;. But within LaTeX, &gt; renders as >. Let's do that. Need no unescaped ampersand. Use &gt; in text? Fine.

Need maybe include units. Need mention "dimensionless" and "nats per trial". Good.

Need address "non-mutually exclusive bets" in all sections. Cross-layer veto: physical/biomechanical/weather veto proof. This is odd: Need physics/biomechanical/weather veto proof. We can discuss "Physical layer" as execution constraints: capital, liquidity, race-day weather? But invariants no betting lines; we can mention weather affects race outcomes? The source is horse racing. Cross-layer veto: physical/biomechanical/weather could veto estimated probabilities and returns. Need "proof" that if physical/weather layer invalidates p_i or r_i, optimization must be vetoed. Need not mention betting lines. We can use "surface conditions, horse biomechanics, weather" but not odds. Need formal: if p_i not stationary or r_i realized differs, G estimate has model risk. Veto if max_i |p_hat - p| > epsilon or r matrix changes. Need cite page 5 about need reliable estimates and variable returns depend on other bettors [PAGE 5]. It says "variable odds" but banned word. Can't quote that. Could paraphrase? Avoid quote. Need cite page 5 quote without "odds": "need for reliable estimates of the probability of each outcome and the returns for each bet type" [PAGE 5]. That's great. Then physical veto: if weather/biomechanical conditions alter ordering probabilities, p vector invalid. Need proof via sensitivity of G and gradient. Use Lipschitz or derivative. If Δp causes G change > threshold, veto. Need maybe not overdo.

Need "recursive theory of mind: crisis habit regression vs counter-trap vs clock." Interpret: In crisis, agents regress to habit (e.g., use full Kelly? overbet? chase?), counter-trap (anticipate others following same fractional Kelly, causing last-minute noise/crowding), clock (time horizon, drawdown). Need tie to paper: fractional Kelly mitigates drawdowns; Benter suggests af <= a*/2 [PAGE 2]. Recursive ToM: bettors estimate others estimating p and returns; if many follow same strategy, last-minute noise [PAGE 5]. Crisis habit regression: under uncertainty, revert to overconcentration or full Kelly; counter-trap: if everyone uses same model, returns degrade; clock: horizon and drawdown constraints. Need discuss multi-agent recursive beliefs. Need not mention betting lines. Use "wager" maybe okay. Could use "allocation".

Need "RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions." RLVR means reinforcement learning with verifiable rewards? Need propose 3 scenarios with verifiable predictions. Need design counterfactual vetoes: if conditions met, reject optimization. Need predictions measurable. Example:
1. Probability calibration drift: if out-of-sample Brier score or log-loss exceeds threshold, veto Kelly allocation; prediction that veto reduces drawdown or avoids negative G. Need verifiable.
2. Return matrix instability: if max column variation in realized r_i across replicates > ε or if r_1+/r_1- = r_2+/r_2- within tolerance causing non-unique a*, veto; prediction that forcing unique non-border solution increases out-of-sample G? Actually if proportional returns produce nonunique, any allocation along line same G; fractional Kelly min capital selects minimal. Veto if determinant near zero? Need verifiable: if determinant |r1+ r2- - r2+ r1-| < δ and a* has nonunique continuum, veto full Kelly and use fractional min-norm; prediction lower capital at risk with same in-sample G within tolerance. 
3. Liquidity/crowding execution: if last-minute noise or parameter uncertainty high, veto full Kelly; prediction realized G below threshold? Need cite page 5. 
Need include exact predictions: e.g., "Veto triggers when k<0.75? No." Need be careful.

Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. Need formal proof: Layer L (physical) provides set Θ of admissible (p,r) with physical constraints. Optimization over nominal p0,r0 is admissible only if p0,r0 ∈ Θ and robust margin η >0. If weather/biomechanical state w changes ranking, then there exists outcome i,j with p_i(w)>p_j(w) but nominal p_i<p_j; this violates the assumed outcome probability simplex used in G. Since G is concave in a but not invariant to p permutation, the optimizer may allocate to wrong subset. Veto if min over constraints 1+r_i^T a <= ε (singularity). Also if realized return ratio r_i^T a <= -1 for positive p_i, G=-∞. Proof: log argument ≤0. Need maybe state "biomechanical" as horse fatigue/injury changes finish order. Weather as track condition changes outcome distribution. Need avoid "odds". Good.

Need "RETROCAUSAL_GENEALOGY" historical/scientific lineage & multi-week traps. Need lineage: Kelly 1956, Thorp 2006, Benter 1994, Kempton 2011, Maclean Thorp Ziemba 2011, Busseti Ryu Boyd 2016, Deza Huang Metel 2015/2017, Baker McHale 2013, Chu Wu Swartz 2018, Conn Gould Toint 2000, Virtanen SciPy 2020. Multi-week traps: overfitting p and r over short samples; full Kelly volatility and drawdowns; non-unique solutions from proportional returns; underestimating parameter uncertainty; ignoring variable returns due to other bettors; last-minute noise. Need cite pages. "multi-week traps" could mean traps over multi-week horizons: compounding errors, drawdown, model drift. Need discuss.

Need "SOURCE_OPERATORS_AND_EQUATIONS" formal LaTeX, units, page citations, breakdown. Need include equations:
C_N(a)=C_0(1+ar_+)^W(1-a)^L [PAGE 1]
G_N(a)=... [PAGE 2]
G∞(a)=p log(1+ar_+)+q log(1-a) [PAGE 2]
a*=(p-q)/r_+ [PAGE 2]
k=G∞(a_f)/G∞(a*) [PAGE 2]
G∞(a)=Σ p_i log(b+a_i(1+r_i^+)) [PAGE 2]
b=1-1^T a [PAGE 2]
Non-mutually exclusive:
r_i=(r_{i,j}) [PAGE 3]
G∞(a)=Σ_i p_i log(1+r_i^T a) [PAGE 3]
grad and Hessian [PAGE 3]
optimization (15) [PAGE 3]
fractional Kelly (9) [PAGE 3]
Examples equations (16)-(20) [PAGE 4]
Need mention singularity: log argument >0 constraints (15b), if 1+r_i^T a → 0+ with p_i>0, G→ -∞. Hessian negative semidefinite? It is negative sum of outer products weighted positive. Concavity if denominators positive. KKT valid since objective concave and constraints linear [PAGE 3]. Non-unique max if determinant zero and returns proportional [PAGE 4]. Border solution if ratios unequal [PAGE 4]. Fractional Kelly min capital with G≥k; infeasible if k>G∞(a*)? Actually k defined ratio; k=1 feasible at a*. k>1 infeasible if denominator positive. k<0? If G can be negative? They likely use positive. Need mention.

Need "THINK_TRACE" deep multi-hop derivation and gray-zone audit >=400 words. Need include multi-hop derivation: from single bet log-growth to vector, to non-mutually exclusive, gradient/Hessian, fractional Kelly. Gray-zone audit: when model assumptions fail, when constraints active, when p/r uncertain, nonunique, numerical trust region. Need maybe mention "not a toy ratio" and formal. Need not use "odds". Need no fake ratios. Need "units". Need maybe include "capital normalized to C_0=1". Need "log base e". Need "G units nats/trial".

Need total length >=1000 words. We can aim 2000. Need not be too long but enough. Since desired oververbosity 5, maybe 1600-2000 words. Need satisfy >=1000. Let's craft robust answer.

Need decide whether to mention "horse racing" and "bets" often. It's okay. But "odds" banned; avoid entirely. Also "moneylines", "spreads", "totals" avoid. We can mention "returns" not odds. Careful not to write "favorable odds" in quotes. Use "positive expected log-growth" etc. Avoid "odds" even in references? References may include "Optimal Bett..." no odds. Fine.

Need XML valid: Use no unescaped &, <, >. In LaTeX, use \le, \ge, \gt? \gt not standard but okay? Maybe use \mathrel{>}? Better use \ge, \le mostly; for strict positivity use \mathopen{} > cannot put > unescaped. Use &gt; in text but inside LaTeX maybe renders. XML parser sees &gt; as >. That's fine. For less than, &lt;. But LaTeX command \le is safe. Use \top. Use \mathbb{1}^{\top}. Use \Delta. Use \epsilon. Use \infty. Use \sum. Use \log. Use \max. Use \min. Use \text{s.t.}. Use \operatorname{argmax}. Use \nabla. Use \mathbf{r}. Use \mathbf{a}. Use \mathbf{p}. Need no & in LaTeX align? If use \begin{aligned} with & would need escape. Avoid align environments with &. Use separate equations. Use \sum without &.

Need include page citations exact [PAGE N]. Good.

Need maybe cite verbatim quotes. Use quotation marks. Ensure no banned terms. Quotes:
- [PAGE 1]: "maximize the expected log-growth of capital by betting a ﬁxed fraction of available capital" — contains ﬁ ligature. Fine. No odds.
- [PAGE 2]: "The Kelly criterion directly extends to such bets." Good.
- [PAGE 3]: "This equation is a more general expression of (7)." Good.
- [PAGE 3]: "a gradient-descent numerical approach is preferred" Good.
- [PAGE 4]: "only the most rewarding of the two bets is kept in the allocation." Good.
- [PAGE 5]: "need for reliable estimates of the probability of each outcome and the returns for each bet type" Good.
- [PAGE 5]: "the variable returns that depend on the bets made by other bettors" Wait source says "variable odds that depend on the bets made by other bettors"—contains odds. Can't quote. Paraphrase without quote. Need exact quote no banned. Could quote "the potential for noise from bettors following the same strategy when placing bets at the last minute" [PAGE 5]. That's okay. And "need for reliable estimates..." quote. Good.

Need "verbatim quotes" plural. We can use several. Need exact [PAGE N]. Good.

Need "breakdown regimes" exact. Include list.

Need "RETROCAUSAL_GENEALOGY" historical lineage: Kelly 1956; Thorp 2006; Benter 1994; Maclean et al. 1992/2011; Kempton 2011; Busseti et al. 2016; Deza et al. 2015/2017; Baker and McHale 2013; Chu et al. 2018; Conn et al. 2000; Virtanen et al. 2020. Need maybe mention "retrocausal" means later methods illuminate earlier assumptions: trust-region numerical optimization retroactively solves KKT for non-mutually exclusive bets. "Genealogy" from scalar Kelly to vector non-mutually exclusive fractional Kelly. Multi-week traps: compounding, drawdown, parameter drift, nonunique solutions. Good.

Need "RECURSIVE_THEORY_OF_MIND" maybe use terms: crisis habit regression, counter-trap, clock. Need explicitly define:
- Crisis habit regression: under stress/drawdown, allocator reverts to full Kelly or all-in or overconcentration, violating fractional Kelly af≤a*/2 [PAGE 2]. 
- Counter-trap: if other agents anticipate same p and r and use same fractional Kelly, their last-minute actions perturb returns; the counter-trap is to model recursive beliefs and reduce allocation or require execution margin; cite page 5 noise quote. 
- Clock: finite horizon and drawdown constraints; Kelly maximizes asymptotic log-growth, but finite N and time horizon create ruin/drawdown risk; fractional Kelly preserves k fraction of G∞ with less capital. Mention Busseti et al. and Deza et al. from page 1. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. Need maybe define layers:
- Physical layer: capital constraint 1^T a ≤1 and no leverage [PAGE 2/3]. If violated, veto.
- Biomechanical layer: horse fitness/injury changes outcome ordering; p_i not stable. If a horse's biomechanical state changes, p vector invalid. 
- Weather layer: track surface/weather changes r_i and p_i. If weather shifts finish-order distribution, the nominal G optimizer may choose an allocation that isn't robust. Need "veto proof": Suppose p_i>0 and realized return vector r_i^w gives 1+(r_i^w)^T a ≤0, then G=-∞ by log singularity. The optimizer's constraint (15b) was only checked for nominal r_i, not all weather states. Thus veto if min_{i,w} [1+(r_i^w)^T a] ≤ ε. Also if ranking reversal causes probability mass on outcomes where selected bets lose, gradient sign changes; then a* not optimal. We can state monotonicity: G is concave in a for admissible domain, but under p^w changes the maximizer set changes; no guarantee. Need "proof" via counterexample: if p_i and p_j swap, the KKT active set changes; if a_j=0 was optimal under nominal, under swapped p it should be positive. If not veto, expected log-growth lower. Need maybe use equations. Good.

Need "RLVR_COUNTERFACTUAL_VETOES" three verifiable scenarios. Need make them concrete, measurable, with predictions:
1. Calibration veto: Before allocation, compute out-of-sample log-loss L(p_hat) vs baseline L0 on held-out races. If L(p_hat)-L0 > δ (e.g., 0.02 nats/outcome), veto Kelly and set a=0 or fractional min. Prediction: vetoed periods have non-positive realized G or lower drawdown; measurable next 50 races. Need not mention lines.
2. Non-uniqueness/proportional-return veto: Compute determinant D = r_{1}^{+} r_{2}^{-} - r_{2}^{+} r_{1}^{-}. If |D| < δ and gradient zero continuum exists, veto full Kelly; use min-capital fractional solution (9). Prediction: same G within tolerance ε but lower 1^T a by ≥20%, and lower max drawdown. This is verifiable from Table 2 case (b) maybe. In case (b), a1*+a2*=20%, af sum=10.1% for k=0.75 [PAGE 5 Table 2]. Prediction: fractional min-capital halves capital at risk while retaining ≥75% G∞. Good.
3. Execution/crowding veto: If last-minute noise indicator N_t exceeds threshold or return matrix instability across repeated observations > ε, veto full Kelly and apply af≤a*/2. Prediction: realized G lower? Actually veto predicts reduced variance/drawdown and avoids negative realized G. Verifiable: compare vetoed vs counterfactual full Kelly on same events using shadow simulation; vetoed capital ≤ half; realized log-wealth drawdown ≤ threshold; if full Kelly would have breached risk limit, veto triggers. Need include exact. Good.

Need "RLVR" maybe "Reinforcement Learning with Verifiable Rewards" scenarios: The model should output veto when condition verifiable. We can phrase as "RLVR veto scenario". Need predictions. Good.

Need maintain no "odds". Check all words. Avoid "odds" in references? None. Avoid "spread", "total", "moneyline". "total" might appear in "total capital"? The invariant says never mention totals maybe as betting totals; but word "total" could be interpreted? Avoid "total" entirely. Use "aggregate" instead. Avoid "spread" word. Avoid "moneyline". Avoid "odds". Avoid "line"? "lineage" contains "line"? Not "betting line". But maybe safe. "linear" okay. "deadline" source? Avoid "deadline" maybe contains line. Hmm invariant zero betting lines; not ban word line. But we can avoid "betting line". Fine.

Need not mention "spreads, totals, moneylines, or odds" even in negative? Better not mention the banned words at all. So do not say "no odds". Good.

Need include "zero betting lines" not mention. Good.

Need XML sections exact order. Need no extra text outside? Probably okay to include only XML. Need ensure all sections present. Need total word count >=1000. Let's draft.

Potential issue: XML content with LaTeX backslashes. Fine. Need escape ampersand if any. Use \&? Avoid ampersand. Use "and" not &. Use \text{s.t.} no ampersand. Use \mathbb{1}^{\top}\mathbf{a} \le 1. Good.

Need maybe mention "fractional Kelly strategy" K. Use k. Good.

Let's write in coherent paragraphs.

Need maybe mention "source pages provided" and cite exact [PAGE N]. Use page markers. Good.

Need "THINK_TRACE" >=400 words. We can make 500. Let's draft carefully.

THINK_TRACE content:
Start: normalize capital C0=1; scalar log-growth. Multi-hop: scalar to vector to non-mutually exclusive. Derive gradient Hessian. Discuss KKT. Gray-zone audit: constraints, active set, nonunique, numerical, estimation errors, execution. Mention fractional Kelly optimization. State units. Cite pages. Need no banned terms. Use quotes? It's okay. Need no fake ratios. Good.

SOURCE_OPERATORS_AND_EQUATIONS content: formal equations with units and citations. Include breakdown regimes. Need maybe not too verbose but enough.

RETROCAUSAL_GENEALOGY: historical lineage. Multi-week traps. Cite pages.

RECURSIVE_THEORY_OF_MIND: crisis habit regression, counter-trap, clock. Cite page 2 and page 5.

CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather. Formal proof. Cite page 5.

RLVR_COUNTERFACTUAL_VETOES: three scenarios. Good.

Need "at least 1000 words across exact XML sections": our draft likely ~2000. Good.

Let's produce final. Need use exact XML tags. Ensure no markdown code fence. Good.

Double-check banned words: In final, avoid "odds". Avoid "spread" (maybe "spread" not). Avoid "total" (use aggregate). Avoid "moneyline". Avoid "line" maybe "lineage" includes line but not betting. Fine. Avoid "over/under". Good.

Use "returns" not "odds". Use "capital allocation". "bets" okay. "wager" okay. "favorable" maybe "positive expected log-growth". Good.

Need mention "Table 1" maybe no banned. Fine.

Need cite exact quotes: "maximize the expected log-growth of capital by betting a ﬁxed fraction of available capital" [PAGE 1] includes ligature; okay. "The Kelly criterion directly extends to such bets." [PAGE 2]. "This equation is a more general expression of (7)." [PAGE 3]. "a gradient-descent numerical approach is preferred" [PAGE 3]. "only the most rewarding of the two bets is kept in the allocation." [PAGE 4]. "need for reliable estimates of the probability of each outcome and the returns for each bet type" [PAGE 5]. "the potential for noise from bettors following the same strategy when placing bets at the last minute" [PAGE 5]. These contain "bets" not banned. Good.

Need maybe quote "The computed af is also shown in Figure 4." [PAGE 5]. Good.

Need ensure exact quote "a gradient-descent numerical approach is preferred" from page 3: source: "Therefore, a gradient-descent numerical approach is preferred in the examples of the following section." We can quote fragment. Good.

Need "verbatim quotes" exact? Fragment okay? They said verbatim quotes; fragments are verbatim. Good.

Need equations with exact notation: In source uses a_i, r_i^+, b. Use \mathbf{a}. Fine. Need mention log base natural; if base 2, units bits/trial. Good.

Need maybe state "C_N/C_0 dimensionless"; G∞ nats/trial. Good.

Need "singularity/breakdown regimes" list:
- 1+r_i^T a ≤0 with p_i>0 => log undefined/nonpositive; G=-∞ at zero, complex/undefined negative; constraint (15b) must be strict.
- 1^T a >1 or a_j<0 -> infeasible/no leverage.
- k>1 in fractional Kelly infeasible; k=1 recovers Kelly; k≤0 trivial/nonmeaningful.
- gradient zero not at maximum when proportional condition fails; solution on boundary [PAGE 4].
- determinant zero -> nonunique maximum [PAGE 4].
- p_i estimation error and return instability [PAGE 5].
- numerical trust region may converge to boundary; active set.
Good.

Need "RLVR predictions" maybe include "verifiable rewards" but no need. Good.

Let's final.
</NATIVE_REASONING>

<THINK_TRACE>
Normalize initial capital to \(C_0=1\). The scalar Kelly derivation is a multi-hop chain: first, compound wealth \(C_N(a)=C_0(1+ar_+)^W(1-a)^L\) [PAGE 1]; second, take the per-trial log-growth \(G_N(a)=\frac{1}{N}\log(C_N/C_0)\) [PAGE 2]; third, pass to the infinite-trial limit \(G_\infty(a)=p\log(1+ar_+)+q\log(1-a)\) [PAGE 2]; fourth, maximize under \(0\le a\lt 1\), yielding \(a^*=(p-q)/r_+\) [PAGE 2]. This is not a toy ratio: \(a\) is dimensionless capital fraction, \(r_+\) and \(r_-\) are dimensionless return ratios, and \(G_\infty\) has units of nats per trial under natural log, or bits per trial under base-2 log. The key assumption is stationarity: independent trials with constant \(p,q,r_+\). The paper’s stated aim is to “maximize the expected log-growth of capital by betting a ﬁxed fraction of available capital” [PAGE 1].

The next hop is mutually exclusive bets. With \(n\) outcomes and bets indexed by outcome, the paper writes \(G_\infty(\mathbf{a})=\sum_{1\le i\le n}p_i\log(b+a_i(1+r_i^+))\), where \(b=1-\mathbf{1}^{\top}\mathbf{a}\) is the unallocated capital fraction [PAGE 2]. The statement “The Kelly criterion directly extends to such bets” [PAGE 2] is justified because exactly one bet wins per outcome, so the log argument is the sum of unbet capital and the single winning return. KKT methods can solve this case [PAGE 2–3].

The crucial generalization is non-mutually exclusive bets: multiple bets can have positive returns under one outcome. Let \(n\) be outcomes, \(m\) be bets, and \(\mathbf{r}_i=(r_{i,j})_{1\le j\le m}\) the return vector for outcome \(i\) [PAGE 3]. Then \(G_\infty(\mathbf{a})=\sum_i p_i\log(1+\mathbf{r}_i^{\top}\mathbf{a})\) [PAGE 3]. This simplification is pivotal because it makes the gradient and Hessian explicit: \(\nabla_{\mathbf{a}}G_\infty=\sum_i p_i(1+\mathbf{r}_i^{\top}\mathbf{a})^{-1}\mathbf{r}_i\) and \(\nabla^2_{\mathbf{a}}G_\infty=-\sum_i p_i(1+\mathbf{r}_i^{\top}\mathbf{a})^{-2}\mathbf{r}_i\mathbf{r}_i^{\top}\) [PAGE 3]. The Hessian is negative semidefinite on the admissible region, so concavity holds when all log arguments are strictly positive. The paper states “This equation is a more general expression of (7)” [PAGE 3], and because closed-form solutions are tedious, “a gradient-descent numerical approach is preferred” [PAGE 3].

The fractional Kelly extension is a second optimization, not a simple rescaling: minimize \(\mathbf{1}^{\top}\mathbf{a}\) subject to \(G_\infty(\mathbf{a})/G_\infty(\mathbf{a}^*)\ge k\), \(\mathbf{a}\ge 0\), and \(\mathbf{1}^{\top}\mathbf{a}\le 1\) [PAGE 3]. This is a risk-versus-reward trade: keep at least fraction \(k\) of maximal log-growth while betting as little capital as possible. The paper notes that with \(a_f/a^*=0.5\), \(k\approx0.75\), and with \(a_f/a^*=0.33\), \(k\approx0.55\) [PAGE 2]. In the two-bet, two-outcome example, when returns are proportional the maximum is non-unique and satisfies \(a_1^*+(r_2^-/r_1^-)a_2^*=-(p/r_1^-+q/r_1^+)\) [PAGE 4]; when the ratios are unequal, “only the most rewarding of the two bets is kept in the allocation” [PAGE 4]. The gray-zone audit is therefore: check strict positivity \(1+\mathbf{r}_i^{\top}\mathbf{a}\gt0\); check \(\mathbf{a}\ge0\) and \(\mathbf{1}^{\top}\mathbf{a}\le1\); check whether the determinant \(r_1^+r_2^--r_2^+r_1^-\) is near zero; check whether \(k\gt1\) makes the fractional problem infeasible; and check whether estimated \(p_i\) or returns have drifted. The paper explicitly warns of “the need for reliable estimates of the probability of each outcome and the returns for each bet type” [PAGE 5]. The breakdown regimes are singular: if \(p_i\gt0\) and \(1+\mathbf{r}_i^{\top}\mathbf{a}\to0^+\), then \(G_\infty\to-\infty\); if the log argument is nonpositive, the objective is undefined; if leverage is allowed, the constraint set changes and the no-ruin logic is not covered; if returns are proportional, the optimizer is non-unique; if ratios differ, the optimum lies on a boundary; if \(p_i\) or \(\mathbf{r}_i\) are unstable, the numerical trust-region solution is only nominal.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source operators are formal and unit-bearing. Capital is normalized to \(C_0\); \(a,a_i,a_j\) are dimensionless fractions; \(r_+,r_-\) and \(r_{i,j}\) are dimensionless return ratios; \(p_i,q\) are dimensionless probabilities; \(G_\infty\) is expected log-growth per trial, in nats/trial for natural log or bits/trial for base-2 log. The scalar wealth equation is \(C_N(a)=C_0(1+ar_+)^W(1-a)^L\) [PAGE 1]. The finite-sample log-growth is \(G_N(a)=\frac{1}{N}\log(C_N/C_0)=\frac{W}{N}\log(1+ar_+)+\frac{L}{N}\log(1-a)\) [PAGE 2]. The infinite limit is \(G_\infty(a)=p\log(1+ar_+)+q\log(1-a)\) [PAGE 2]. The scalar Kelly allocation is \(a^*=(p-q)/r_+\) under \(0\le a\lt1\) [PAGE 2]. The fractional Kelly ratio is \(k=G_\infty(a_f)/G_\infty(a^*)\) [PAGE 2].

For mutually exclusive bets, the paper gives \(G_\infty(\mathbf{a})=\sum_{1\le i\le n}p_i\log(b+a_i(1+r_i^+))\) with \(b=1-\mathbf{1}^{\top}\mathbf{a}\) [PAGE 2]. For non-mutually exclusive bets, define \(\mathbf{r}_i=(r_{i,j})_{1\le j\le m}\) [PAGE 3]; then \(G_\infty(\mathbf{a})=\sum_{1\le i\le n}p_i\log(1+\mathbf{r}_i^{\top}\mathbf{a})\) [PAGE 3]. The gradient is \(\nabla_{\mathbf{a}}G_\infty=\sum_i p_i(1+\mathbf{r}_i^{\top}\mathbf{a})^{-1}\mathbf{r}_i\), and the Hessian is \(\nabla^2_{\mathbf{a}}G_\infty=-\sum_i p_i(1+\mathbf{r}_i^{\top}\mathbf{a})^{-2}\mathbf{r}_i\mathbf{r}_i^{\top}\) [PAGE 3]. The Kelly problem is \(\max_{\mathbf{a}}G_\infty\) subject to \(1+\mathbf{r}_i^{\top}\mathbf{a}\gt0\), \(a_j\ge0\), and \(\mathbf{1}^{\top}\mathbf{a}\le1\) [PAGE 3]. The fractional Kelly problem is \(\min_{\mathbf{a}}\mathbf{1}^{\top}\mathbf{a}\) subject to \(G_\infty(\mathbf{a})/G_\infty(\mathbf{a}^*)\ge k\), \(a_i\ge0\), and \(\mathbf{1}^{\top}\mathbf{a}\le1\) [PAGE 3].

The two-bet, two-outcome example is \(G_\infty(a_1,a_2)=p\log(1+a_1r_1^++a_2r_2^+)+q\log(1+a_1r_1^-+a_2r_2^-)\) [PAGE 4] with positivity and simplex constraints. At a zero-gradient interior point, \(\begin{bmatrix}r_1^+ & r_1^-\\ r_2^+ & r_2^-\end{bmatrix}\) times the two weighted inverse log-arguments is zero [PAGE 4]. If the determinant is zero, then \(r_1^+r_2^-=r_2^+r_1^-\), the maximum is non-unique, and \(a_1^*+(r_2^-/r_1^-)a_2^*=-(p/r_1^-+q/r_1^+)\) [PAGE 4]. If \(r_1^+/r_1^-\ne r_2^+/r_2^-\), the optimum lies on a border with one allocation zero [PAGE 4]. Breakdown regimes: \(1+\mathbf{r}_i^{\top}\mathbf{a}\le0\) with \(p_i\gt0\) gives undefined or \(-\infty\) log-growth; \(\mathbf{1}^{\top}\mathbf{a}\gt1\) violates no-leverage; \(a_j\lt0\) violates no-short; \(k\gt1\) is infeasible for fractional Kelly; \(k=1\) recovers the Kelly set, possibly non-unique; near-zero determinants make the optimizer non-identifiable; and unstable \(p_i\) or \(\mathbf{r}_i\) invalidate the nominal concavity argument. The paper’s examples use trust-region methods from Conn, Gould, and Toint and SciPy [PAGE 5], and it notes “The computed af is also shown in Figure 4” [PAGE 5].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage runs from Kelly’s 1956 information-rate interpretation and Thorp’s 2006 treatment of blackjack, sports, and markets, through Benter’s 1994 horse-race handicapping report and Maclean, Thorp, and Ziemba’s 2011 capital-growth synthesis, into Kempton’s 2011 KKT solution for mutually exclusive wagers and then into Jacot and Mochkovitch’s 2023 non-mutually exclusive formulation [PAGE 1–6]. The retrocausal reading is that later numerical trust-region methods [PAGE 5] make earlier KKT logic computable for the vector case: the 2023 paper’s gradient/Hessian formulation [PAGE 3] is the bridge from scalar Kelly [PAGE 2] to constrained multi-bet allocation. Risk-constrained Kelly by Busseti, Ryu, and Boyd 2016 and chance-constrained exotic-wager work by Deza, Huang, and Metel 2015/2017 enter as drawdown and loss-management ancestors [PAGE 1, PAGE 6]. Parameter-uncertainty corrections by Baker and McHale 2013 and Chu, Wu, and Swartz 2018 are ancestors of the paper’s warning about unreliable probability and return estimates [PAGE 5–6].

Multi-week traps are compounding traps, not one-shot errors. First, full Kelly can produce “common occurrences of downswings that result in the loss of more than half of the capital” [PAGE 1]; over a multi-week horizon, a single deep drawdown changes the compounding base, so the practical growth path can diverge sharply from asymptotic \(G_\infty\). Second, fractional Kelly with \(a_f\le a^*/2\) is recommended to “counterbalance the estimation errors for p and q” [PAGE 2]; over many weeks, small calibration biases accumulate in the log argument, so a model that looks adequate in-sample can become structurally overconfident out-of-sample. Third, non-unique maxima under proportional returns [PAGE 4] create hidden implementation drift: different solvers or tie-breaking rules can choose different allocations with the same nominal \(G_\infty\), but different capital at risk and different drawdown paths. Fourth, the paper warns about “the potential for noise from bettors following the same strategy when placing bets at the last minute” [PAGE 5]; over repeated weeks, crowding and feedback can alter realized returns, so the return matrix used to compute \(\mathbf{a}^*\) is not invariant. Fifth, \(k\) is only a nominal growth-retention ratio; if \(p_i\) or \(\mathbf{r}_i\) drift, the realized \(G_\infty(\mathbf{a}_f)/G_\infty(\mathbf{a}^*)\) can fall below \(k\), making the fractional guarantee retrospective rather than guaranteed.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression appears when drawdown stress pushes an allocator back to an overconcentrated habit: full Kelly, all-in behavior, or ignoring the \(a_f\le a^*/2\) guideline [PAGE 2]. The recursive model should recognize that the crisis agent’s policy is not the same as the calm agent’s policy; under stress, the agent may maximize short-horizon expected value and discard the log-growth objective that avoids ruin. Counter-trap reasoning is required because other agents may infer the same \(p_i\), the same \(\mathbf{r}_i\), and the same fractional Kelly rule. If many agents act on the same last-minute signal, the paper’s warning about “noise from bettors following the same strategy when placing bets at the last minute” [PAGE 5] becomes a recursive belief problem: I estimate your estimate of the return matrix, and your estimate includes my likely action. The counter-trap is to impose an execution margin, reduce \(\mathbf{a}_f\), or veto the allocation when crowding indicators exceed a threshold, because the nominal \(G_\infty\) assumes fixed returns.

The clock is the finite-horizon and drawdown constraint. Kelly’s \(G_\infty\) is an infinite-trial limit [PAGE 2], but a multi-week operator faces a finite clock and path-dependent capital. Fractional Kelly is a clock-aware compromise: it preserves a fraction \(k\) of maximal log-growth while reducing capital at risk [PAGE 2–3]. Recursive theory of mind should therefore represent three clocks: the model’s asymptotic clock, the strategy’s drawdown clock, and the adversary’s reaction clock. When the asymptotic clock says “bet \(a^*\)” but the drawdown clock says “capital loss is path-breaking,” the fractional problem \(\min \mathbf{1}^{\top}\mathbf{a}\) subject to \(G_\infty/G_\infty^*\ge k\) [PAGE 3] is the correct arbitration. When the reaction clock says other agents will copy the signal, the counter-trap is to require stronger evidence or reduce the allocation. The paper’s example that the most allocated bet in \(\mathbf{a}^*\) and \(\mathbf{a}_f\) can differ [PAGE 5] is a concrete reminder that risk-minimizing fractional Kelly is not merely a uniform rescaling; it changes the composition under a fixed growth-retention constraint.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical-layer veto: the admissible set requires \(\mathbf{1}^{\top}\mathbf{a}\le1\) and \(a_j\ge0\), because leverage and short allocations are excluded [PAGE 2–3]. If a proposed allocation violates either constraint, the optimization is outside the source model and must be vetoed. Positivity veto: if any \(1+\mathbf{r}_i^{\top}\mathbf{a}\le0\) with \(p_i\gt0\), the log-growth is undefined or diverges to \(-\infty\); therefore the strict constraint \(1+\mathbf{r}_i^{\top}\mathbf{a}\gt0\) [PAGE 3] is a hard feasibility gate.

Biomechanical-layer veto: horse fitness, injury, fatigue, and gait changes can alter the finish-order probabilities \(p_i\). The source model treats \(p_i\) as an input and warns of “the need for reliable estimates of the probability of each outcome and the returns for each bet type” [PAGE 5]. If biomechanical state \(w\) implies a different outcome ranking, then the nominal \(\mathbf{p}\) is not the physical \(\mathbf{p}(w)\). Proof of veto: \(G_\infty\) depends on \(\mathbf{p}\) through \(\sum_i p_i\log(1+\mathbf{r}_i^{\top}\mathbf{a})\). If a ranking reversal moves probability mass from an outcome where the selected allocation has positive log argument to one where it has smaller or negative log argument, the KKT active set changes; the nominal \(\mathbf{a}^*\) need not be optimal and can even violate positivity under the realized return vector. A biomechanical veto should trigger when the posterior probability of a finish-order change exceeds a calibrated threshold or when a horse’s state estimate is outside the training support.

Weather-layer veto: track surface, rain, heat, wind, and visibility can change both \(\mathbf{p}\) and the realized return matrix. The model’s returns are assumed fixed in \(G_\infty(\mathbf{a})=\sum_i p_i\log(1+\mathbf{r}_i^{\top}\mathbf{a})\) [PAGE 3]. If weather state \(w\) produces \(\mathbf{r}_i(w)\) such that \(\min_{i:p_i\gt0}[1+\mathbf{r}_i(w)^{\top}\mathbf{a}]\le\epsilon\), the singular log boundary is approached and the allocation must be vetoed regardless of nominal \(G_\infty\). If weather changes the ordering distribution enough that the gradient sign changes, then the nominal maximizer is no longer justified. The adjudication rule is: accept only if the nominal optimum remains feasible for all weather/biomechanical states in the robust set and if the worst-case log argument exceeds a positive margin. Otherwise, fall back to the fractional problem with lower \(k\), lower \(\mathbf{1}^{\top}\mathbf{a}\), or zero allocation. This is a proof by constraint violation and by non-invariance of the optimizer under \(\mathbf{p}\)- and \(\mathbf{r}\)-perturbations, not a stylistic preference.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: calibration-drift veto. Verifiable condition: on held-out outcomes, the estimated probability vector \(\hat{\mathbf{p}}\) has log-loss exceeding the baseline by \(\Delta\) nats/outcome, or the Brier score exceeds a pre-registered threshold. Action: veto full Kelly and set \(\mathbf{a}=\mathbf{0}\) or use the fractional solution with \(k\) reduced. Prediction: over the next \(N\) events, the vetoed policy has lower realized drawdown and does not produce negative realized log-growth when the counterfactual full-Kelly shadow policy breaches the drawdown limit. This is verifiable by replaying both policies on the same event stream.

Scenario 2: proportional-return non-uniqueness veto. Verifiable condition: \(|r_1^+r_2^--r_2^+r_1^-|\lt\delta\), so the determinant in [PAGE 4] is near zero and the Kelly maximum is non-unique. Action: veto the full-Kelly tie-breaking allocation and solve the fractional min-capital problem [PAGE 3]. Prediction: the fractional allocation keeps \(G_\infty(\mathbf{a}_f)/G_\infty(\mathbf{a}^*)\ge k\) within numerical tolerance while reducing \(\mathbf{1}^{\top}\mathbf{a}_f\) relative to the full-Kelly allocation; in the paper’s case (b), the fractional sum is \(10.1\%\) versus \(20\%\) for \(k=0.75\) [PAGE 5]. This is verifiable from the computed allocations and the objective ratio.

Scenario 3: execution/crowding veto. Verifiable condition: a last-minute noise indicator or return-matrix instability statistic exceeds threshold, consistent with “noise from bettors following the same strategy when placing bets at the last minute” [PAGE 5]. Action: veto full Kelly, cap at \(a_f\le a^*/2\), and require a liquidity/execution margin. Prediction: the vetoed policy has lower variance of realized log-growth and avoids the singular \(1+\mathbf{r}_i^{\top}\mathbf{a}\le0\) region; a shadow full-Kelly policy on the same events shows larger maximum drawdown or a higher rate of infeasible log arguments. This is verifiable by comparing realized capital paths, constraint violations, and drawdown statistics between vetoed and counterfactual policies.
</RLVR_COUNTERFACTUAL_VETOES>