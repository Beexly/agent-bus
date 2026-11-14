---
source: "openalex_W3132266770.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 42
model: deepseek/deepseek-v4.1-flash-1017
words: 8489
---

<NATIVE_REASONING>
We need answer user. They provided source paper and strict format. Need produce >=1000 words across exact XML sections. But also drive source maybe "GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs/openalex_W3132266770.pdf". Need no betting lines. Need cite [PAGE N] exact quotes when pages provided. We should analyze paper and construct deep multi-hop derivation, gray-zone audit. Need sections:

<THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Need likely answer as synthesis/analysis of paper. The "Crisis habit regression vs counter-trap vs clock" is odd. Need align with source? Perhaps meta-evaluation of reasoning under crisis. Need include source equations and exact citations. Need no invent fake ratios. We can mention "weather veto" as source example hurricane/probabilities. "Physical/biomechanical" maybe not relevant; can adjudicate no physical biomechanical layer in source; source weather example. Need not mention betting. Need mention no betting lines.

Need be careful with exact quotes. Use page markers and verbatim. Need ensure citations exact. Use quotes from source. Let's plan.

We need cover:

- Paper is Neyman & Roughgarden "From Proper Scoring Rules to Max-Min Optimal Forecast Aggregation" (2023). Main contributions:
  - QA pooling: given proper scoring rule s with expected reward G, exposure g=gradient/subgradient, aggregate p* satisfies g(p*) = sum_i w_i g(p_i) (or subgradient condition). Equivalent argmin_x G(x)-<x, sum_i w_i g(p_i)> and weighted average Bregman divergence sum_i w_i D_G(x||p_i). [PAGE 6], [PAGE 13], [PAGE 14].
  - Quadratic rule G_quad = sum p_j^2, g=2p => QA = linear pooling.
  - Log rule G_log = sum p_j ln p_j, g=(ln p_j+1) => QA = log pooling p*(j)=c prod_i p_i(j)^w_i.
  - Proper scoring rules and Savage representation: G(p)=sum p(j)s(p;j), s(p;j)=G(p)+<g(p),δ_j-p>. G strictly convex. [PAGE 5-6, 11]
  - Bregman divergence D_G(p||q)=G(p)-G(q)-<g(q),p-q>; expected reward lost. [PAGE 12]
  - Max-min optimality Theorem 4.1: agent subcontracts experts, pays w_i s(p_i;j), profit u(p;j)=s(p;j)-sum_i w_i s(p_i;j); min_j u(p;j) uniquely maximized by p*=QA pool. min = sum_i w_i D_G(p*||p_i), achieved all j with p*_j>0; non-negative, positive unless equal. [PAGE 15-16]
  - Learning weights: Theorem 5.1 score WS_j(w)=s(QA pool; j) concave in w if convex exposure. [PAGE 16-17]. Theorem 5.3 no-regret O(sqrt T), bound 3√m M√T with M upper bound on ||g||_2 [PAGE 17].
  - Axiomatization: n=2 weighted quasi-arithmetic means, axioms weight additivity, commutativity, associativity, continuity, idempotence, monotonicity. Theorem 6.6. [PAGE 19-20]
  - General n uses cyclic monotonicity, Definition C.2 etc. [PAGE 32-34].
  - Convex exposure: range of g on D is convex. [PAGE 14]. Holds for all binary proper scoring rules [PAGE 38], log, quadratic, spherical, Tsallis γ≤2; fails Tsallis γ>2 n>2 [PAGE 41-42].
  - Papers examples weather: 10%,25%,70% models, equal trust, aggregate. Linear pooling vs logarithmic pooling for extreme weather: 0.1% and 20% equal weights -> linear ~10%, log ~1.6% [PAGE 5]. This is "weather veto" maybe.
  - Selection of scoring rule value judgment: log penalizes extremes, quadratic uniform. [PAGE 4-5].
  - "No betting lines" avoid odds.
  - Historical lineage: Brier 1950, Good 1952, Savage 1971, Gneiting & Raftery 2007, Kolmogorov 1930/Nagumo 1930 quasi-arithmetic means, Aczél 1948 weighted means, Genest & Zidek 1986, Ranjan & Gneiting 2010, Satopää et al 2014, Grünwald & Dawid 2004, Chen & Pennock prediction markets, cost-function markets Abernethy et al 2013.
  - Multi-week traps: weight learning with unbounded scoring rules, convex exposure assumption, idempotence vs Bayesian aggregation, n>2 cyclic monotonicity complexity, adversarial vs calibrated, computational convex optimization. "Retrocausal genealogy" historical lineage & traps.

Need "crisis habit regression vs counter-trap vs clock" in recursive theory of mind. We can interpret in source context: crisis = high-stakes forecast aggregation. Habit regression = default linear pooling or choose best expert; counter-trap = log pooling overweights extreme low probabilities? Clock = proper scoring rule selection and QA correspondence as time-consistent/axiomatic. Need discuss recursive theory of mind: agent (forecaster) models experts, principal, adversary, self; sub-contracting. Perhaps "crisis habit regression" = under crisis actors revert to simple average (linear) even when logarithmic needed; "counter-trap" = overcompensating by log pool can create extreme consensus and ignore disagreement; "clock" = weights learned online with no-regret. Need include.

"CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. We need adjudicate whether physical/biomechanical constraints veto the source's conclusions. Source is mathematical/statistical; no biomechanical layer. Weather example in source establishes an application, but not physical proof. So veto: physical/biomechanical layer can veto application if probabilities are not forecasts, experts not independent, or model outputs don't satisfy regularity/forecast domain. Need proof via equations. Use source: weather extreme example linear vs log [PAGE 5]. But physical weather dynamics/observation constraints are outside paper; no theorem makes storm physically impossible. "Weather veto" as source example only, not a physical model. Need explain.

"RLVR_COUNTERFACTUAL_VETOES": Need 3 verifiable RLVR veto scenarios + predictions. RLVR? Maybe "Reinforcement Learning from Verification Rewards"? Or "Retrospective Logical Verification Review"? Need create three scenarios that would veto/validate claims, with predictions. Must be verifiable. Need tie to paper: e.g. (1) expert weights adversarial; test Theorem 5.3 bound O(√T) with bounded proper scoring rule and convex exposure; prediction: cumulative regret ≤3√m M√T; verify by simulation. (2) Test QA pooling mapping for quadratic/log; if using quadratic and equal weights, output equals arithmetic mean; if log, output geometric scaled; falsify if not. (3) Convex exposure counterexample Tsallis γ>2, n>2; prediction range nonconvex and QA associativity/subtraction/monotonicity may fail; test with G=sum p_j^γ, p=δ1,q=δ2,w=1/2 for n=3; expected no x. Need maybe exact from PAGE 42. Good.

Need include units: probabilities dimensionless; scoring rules in arbitrary reward units (utility units); weights dimensionless nonnegative sum 1; Bregman divergence in same units as G/s. No fake ratios. We can mention SI: probability dimensionless; information units if log base e yields nats; logarithmic scoring rule uses ln so s_log in nats (dimensionless but information units); we can say "if interpreted as information, ln p is nats." Need not overdo. Avoid "force/fatigue." Must state assumptions and singularity/breakdown regimes. Need exact singularity/breakdown: 
- proper scoring rule regular, s(·;j) continuous; G strictly convex; g subgradient; if p_j=0 log rule gives -∞; forecast domain D excludes boundaries; two experts (1,0),(0,1) under log aggregation give infinities [PAGE 11 footnote 9? Actually PAGE 11 below? PAGE 11 includes footnote 9: "This choice removes from consideration cases such as two experts reporting (1, 0) and (0, 1) under the logarithmic scoring rule; aggregating these forecasts using our method is tantamount to adding positive and negative infinity." Use [PAGE 11].
- If no convex exposure, QA p* may exist via subgradient but equation g(p*)=sum w_i g(p_i) may fail; associativity/subtraction/monotonicity may fail. [PAGE 32 footnote 28? PAGE 35 footnote 28 gives example G=x1^4+x2^4+x3^4, Πi=(δ_i,1), associativity difference approx. Good.
- Weight learning requires bounded s and convex exposure; unbounded adversarial no no-regret guarantee [PAGE 23].
- Axioms n>2 require cyclic monotonicity; not just coordinatewise increasing. [PAGE 33].
- Bregman divergence requires differentiable strictly convex G, convex S [PAGE 12].
- Max-min optimality unconditional over proper scoring rules? Theorem 4.1 holds unconditionally (not require convex exposure) but QA defined via subgradient. [PAGE 14? It says "While our max-min optimality result (Section 4) holds unconditionally, our results in Section 5 and 6 require convex exposure." PAGE 14.] Use exact quote.

Need maybe mention "source operators" as operators: linear pooling, logarithmic pooling, QA pooling, expected reward G, exposure g, Bregman divergence, weight-score WS_j, cyclic monotonicity. Need formal LaTeX.

Need satisfy >=1000 words. Our answer will be long maybe 2500-3500 words. Desired oververbosity 5 but user demands depth. Need exact XML sections. No extra text outside? We can put only XML sections.

Need be cautious: "ZERO BETTING LINES" means don't mention odds. Avoid "moneyline" etc. We won't.

Need cite exact [PAGE N] markers and verbatim quotes. Need quotes exact. Let's collect exact quotes:

PAGE 1 abstract: "This paper forges a strong connection between two seemingly unrelated forecasting problems: incentive-compatible forecast elicitation and forecast aggregation." "To each such rule s we associate a corresponding method of aggregation, mapping expert forecasts and expert weights to a “consensus forecast,” which we call quasi-arithmetic (QA) pooling with respect to s." Could cite.

PAGE 2: "Linear pooling is arguably the simplest of all reasonable pooling methods: a weighted arithmetic mean of the probability distributions." and formula. "Logarithmic pooling ... weighted geometric mean..."

PAGE 3: proper scoring rule definition exact: "A scoring rule is a function s that takes as input (1) a probability distribution over n outcomes1 and (2) a particular outcome, and assigns a score, or reward." "A scoring rule is called proper if the expert’s expected score is strictly maximized by reporting their probability distribution truthfully." and formula. "squad(p; j) := 2p(j) − \sum p(k)^2." "slog(p; j) := ln p(j)."

PAGE 4: "The logarithmic rule is the only proper scoring rule for which an expert’s score only depends on the probability assigned to the eventual outcome and not other outcomes" and "logarithmic rule indicates a preference ... for high precision close to 0 and 1, while quadratic rule indicates a more even preference for precision across [0, 1]."

PAGE 5: "The Savage representation of the quadratic scoring rule is Gquad(p) = \sum p(j)^2. The Savage representation of the logarithmic scoring rule is Glog(p) = \sum p(j) ln p(j)." Actually page 6? Let's check: PAGE 6 starts "where g is the gradient..." and includes "The Savage representation of the quadratic scoring rule is Gquad(p) = Pn j=1 p(j)2. The Savage representation of the logarithmic scoring rule is Glog(p) = Pn j=1 p(j) ln p(j)." Yes [PAGE 6]. Need exact.

PAGE 6: "Given a proper scoring rule s used for elicitation, and given m probability distributions p1, . . . , pm and expert weights w1, . . . , wm, the aggregate distribution p∗that we suggest is the one satisfying g(p∗) = \sum_{i=1}^m w_i g(p_i)." and "This definition of p∗can be restated as the forecast that minimizes the weighted average Bregman divergence (with respect to G) to all experts’ forecasts." Good.

PAGE 5: weather example? Actually page 5 top: "As an example, consider the setting of weather prediction, with models playing the role of experts. In such contexts we often care about low-probability extreme events: a 0.1% chance of an imminent major hurricane may not be worth preparing for; a 1% chance could mean significant preparations, and a 10% chance could mean mandatory evacuations." Exact. Then "if the more informed model predicts a 0.1% chance and the less informed model predicts a 20% chance, linear pooling with equal weights3 would predict roughly a 10% chance. Logarithmic pooling, by contrast, assigns roughly a 1.6% chance to the event, avoiding this failure mode." Exact. Use [PAGE 5].

PAGE 11: "We will henceforth assume that s(·; j) is continuous on ∆n for all j, as is G(·); to our knowledge, this is the case for all frequently-used proper scoring rules." Maybe. Also footnote 9: "This choice removes from consideration cases such as two experts reporting (1, 0) and (0, 1) under the logarithmic scoring rule; aggregating these forecasts using our method is tantamount to adding positive and negative infinity." [PAGE 11]. Check page 11 includes footnote 9? Yes PAGE 11 text includes footnote 9 at bottom? It starts "We define the forecast domain D..." and footnote 9 maybe on page 11. The provided page 11 includes "9This choice removes..." yes.

PAGE 12: Definition 3.2: "D_G(p ∥q) := G(p) −G(q) −⟨g(q), p −q⟩." and Remark 3.3: "If G is the expected reward function of a proper scoring rule, then DG(p ∥q) is the expected reward lost by reporting q when your belief is p." Good.

PAGE 13: Definition 3.6 exact: "the quasi-arithmetic (QA) pool of these forecasts with respect to s (or with respect to g), denoted by ... is the unique p∗∈∆n such that \sum w_i g(p_i) is a subgradient of G at p∗." and Remark 3.7 eq (3). Also "The QA-pool is well-defined, i.e. exists and is unique." Good.

PAGE 14: "While our max-min optimality result (Section 4) holds unconditionally, our results in Section 5 and 6 require that our proper scoring rule s satisfy a property that we term convex exposure." Definition 3.11: "A proper scoring rule s with forecast domain D has convex exposure if the range of its exposure function g on D is a convex set." Good.

PAGE 15-16: Theorem 4.1 exact: "Then the quantity minj u(p; j) is uniquely maximized by setting p to p∗..." and "Furthermore, this minimum (across outcomes j) is achieved simultaneously by all j with p∗_j > 0. This quantity is non-negative, and is positive unless all reports pi with positive weights are equal." Good.

PAGE 16: Theorem 5.1: "Then for every j ∈[n], WSj(w) a concave function of w." Typo. Use exact? Maybe quote "Then for every j ∈[n], WSj(w) a concave function of w." [PAGE 16-17]. Actually page 16 ends "Then for every j ∈[n], WSj(w) a concave function of w." Page 17 starts. Use [PAGE 16]? The exact statement spans. We can cite [PAGE 16-17].

PAGE 17: Theorem 5.3 bound: "\sum ... ≤3\sqrt{m}M\sqrt{T}." and "This result is quite strong in that it does not merely achieve low regret compared to the best expert, but in fact compared to the best possible weighted pool of experts in hindsight." Good.

PAGE 19: Definition 6.5 axioms. Page 20 Theorem 6.6: "A pooling operator is a QA pooling operator (as in Definition 6.2) with respect to some g if and only if it satisfies the axioms in Definition 6.5." Good.

PAGE 33: Definition C.3 cyclic monotonicity. "A function g : U ⊆Rn →Rn is cyclically monotone if for every list of points x0, x1, . . . , xk−1, xk = x0 ∈U, we have \sum_{i=1}^k ⟨g(x_i), x_i − x_{i−1}⟩ ≥0." Good.

PAGE 35 footnote 28: "Without convex exposure, the associativity, subtraction, and monotonicity axioms may be violated. For example, consider Πi = (δi, 1) for i = 1, 2, 3, for the scoring rule with expected reward function G(x) = x^4_1 +x^4_2 +x^4_3. We have that (Π1 ⊕g Π2)⊕g Π3 = ((1/2, 1/2, 0), 2)⊕g (δ3, 1) ≈((0.182, 0.182, 0.635), 3), whereas Π1 ⊕g (Π2 ⊕g Π3) = ((0.635, 0.182, 0.182), 3)" [PAGE 35]. Good.

PAGE 38: Proposition D.1: "If n = 2, every (continuous) proper scoring rule has convex exposure." Good.

PAGE 41-42: Tsallis: Proposition D.9: "For γ ≤2, the Tsallis scoring rule with parameter γ has convex exposure. For γ > 2, this is not the case if n > 2." Good.

Need "source operators" include equations with units. We should state units: probabilities in [0,1] dimensionless, weights in Δ^m dimensionless, G and s in reward units (call U), g in U per unit probability? Since g is gradient of G w.r.t. probability coordinates; probability dimensionless so units U. Bregman divergence in U. If log scoring uses natural log, s_log has nats; but scoring reward can be reinterpreted: properness preserved under positive affine transformations [PAGE 3], so units arbitrary. We can say "ln p is in nats if one assigns information units; as a reward, it is an affine-scaled utility." Need avoid fake ratios. Formal.

Need "THINK_TRACE" >=400 words. We'll write maybe 600-800 words. It should be "Deep multi-hop derivation & gray-zone audit". We can include chain: 1) proper scoring -> Savage G -> g; 2) define QA via subgradient; 3) show quad/log; 4) max-min profit; 5) concavity/no-regret; 6) axioms; 7) limitations. Gray-zone audit: conditions fail if no convex exposure, unbounded scoring, boundary p=0, non-convex range, cyclic monotonicity, idempotence. Need mention multi-hop derivation.

Need "RETROCAUSAL_GENEALOGY" historical/scientific lineage & multi-week traps. Include lineage dates and references from paper. Multi-week traps: (a) conflating properness with aggregation; (b) assuming linear pooling is universal; (c) using log pooling with zero probabilities -> -∞; (d) ignoring convex exposure; (e) learning weights with unbounded scores/adversarial; (f) overfitting vs axiomatic; (g) n>2 cyclic monotonicity. "multi-week traps" maybe traps that unfold over weeks in research? We can phrase as "multi-week trap" in implementation. Keep source.

Need "RECURSIVE_THEORY_OF_MIND" crisis habit regression vs counter-trap vs clock. We need interpret in decision-theoretic terms. We'll discuss levels:
- Level 0: principal's objective and scoring rule.
- Level 1: expert reports p_i truthfully under proper s.
- Level 2: aggregator sub-contracts experts, knows weights, chooses p to maximize worst-case profit.
- Level 3: adversary chooses outcomes and reports; online learner updates weights.
Crisis habit regression: under crisis, aggregator defaults to linear average or best expert; paper shows this is not max-min optimal unless quadratic rule. Counter-trap: overcorrecting by log pooling can be too extreme and zero-forcing; source shows extreme weather case log avoids drowning out low probability but can amplify disagreements. Clock: time/online learning with O(√T) regret provides clock; idempotence and axioms. Need mention weather example.

Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. Need state: The paper's mathematical layer can be vetoed by physical layer if:
1. Forecasts are not probability distributions over n outcomes (violates domain Δ_n). 
2. Weather model outputs have physical constraints or dependence; linear/log pooling ignores physical conservation laws? Source doesn't model physics. The source's weather example is illustrative; "0.1% vs 20%" is not a physical prediction. 
3. Biomechanical layer: no biomechanical variables in paper; any biomechanical claim would be overreach. Veto proof: The only equations are probability/scoring; no biomechanical terms. If a proposed policy uses QA pool to prescribe physical action, the physical/weather model must supply calibrated likelihoods and loss structure; otherwise veto. 
Need maybe "weather veto" prediction: if two models 0.1% and 20% equal weight, linear gives ~10%, log ~1.6%; but if 0.1% model is not calibrated or not in D, log undefined/zero-force; physical weather event with zero probability? Use [PAGE 5], [PAGE 11]. Good.

Need "RLVR_COUNTERFACTUAL_VETOES" 3 verifiable scenarios. We need define RLVR maybe "verifier-grounded counterfactual". We can say "Verifier-grounded RLVR vetoes" and each with scenario, verifier test, prediction, veto condition. Ensure not betting. Use source equations.

Scenarios:
1. Quadratic/log correspondence test: Given s_quad and s_log, compute QA pools for arbitrary p_i,w_i; verify p* equals arithmetic vs normalized geometric. Prediction: exact equality within numerical tolerance. Veto if not; also if weights sum to 1 and n=2. Cite pages 6.
2. Convex exposure failure for Tsallis γ=3,n=3: Use G_Tsa,3(p)=sum p_j^3. Take p=δ1, q=δ2, w=1/2. Predicted no x∈Δ3 with g(x)= (1/2,1/2,0) because x_j^2 = 1/2 for j=1,2, x_3^2 = c? Wait g= (p_j^{γ-1}) = p_j^2. For p=δ1, g(p)=(1,0,0); q=δ2, g(q)=(0,1,0); average=(0.5,0.5,0). Need x_j^2=0.5+c? Actually equation includes additive c due modulo translation? Let's derive. For Tsallis γ=3, g=(p1^2,p2^2,p3^2) modulo translation by 1_n? Actually g values in H_n(0) if subtract mean? But in proof they use g(p)=(p_j^{γ-1}) and allow adding c to all coordinates because modulo translation. Need find x such that x_j^2 = w p_j^2 +(1-w)q_j^2 + c. For p=δ1, q=δ2, w=1/2: x1^2 = 1/2 + c; x2^2 = 1/2 + c; x3^2 = c. Need x_j≥0 and sum x_j=1. Need c ≥0 for x3 real? Equation (9): 2(1/2+c)^{1/(γ-1)} +(n-2)c^{1/(γ-1)}=1. For γ=3,n=3: 2(0.5+c)^{1/2}+ c^{1/2}=1. At c=0, h=2√0.5=√2≈1.414>1, increasing, so c<0; but x3^2=c<0 contradiction. So no x. This exactly page 42. Prediction: QA pool does not exist with convex exposure; range nonconvex; associativity/subtraction/monotonicity can fail. Veto condition: if implementation silently projects c to 0, it violates axioms. Good.
3. Online weight learning regret: Use bounded proper scoring rule, e.g. quadratic on n=2? s bounded? Quadratic score range maybe [−1,1]? Actually s_quad=2p(j)-sum p(k)^2; with p∈[0,1], s∈[-1,1]? For n=2, max? Bounded. Choose m experts, T steps, adversarial reports/outcomes. Run Algorithm B.3; prediction cumulative regret ≤3√m M√T with M bound on ||g||. For s_quad, g=2p, ||g||≤2? In n=2 p=(p,1-p), ||2p||≤2? M=2 maybe. Verify empirically. Veto if regret exceeds bound or if using unbounded log scoring without calibration, because no guarantee [PAGE 17, 23]. Good.

Could also include "max-min theorem test" but three enough. Need "predictions" verifiable.

Need maintain exact XML. Use no markdown? The sections are XML tags. We can use paragraphs and LaTeX. Fine.

Need ensure all sections present and >=1000 words. We'll write comprehensive.

Need maybe include "SOURCE_OPERATORS_AND_EQUATIONS" with formal LaTeX and page citations. Use `\[
...
\]`? Within XML, okay. Need not escape < >? In XML, `<` in LaTeX like `\langle` not issue, but raw `<` maybe in text? Avoid raw `<` and `>` except tags. Use `\le`, `\ge`, `\sum`. Use `\Delta_n`. Ampersand? Avoid `&` in text. Use "and". In XML, `&` must be escaped if used. Avoid ampersands. Use `\mathbb{R}` etc. Raw `>`? Use `\to` instead. Avoid `<` in inequalities. Use `\le`. Good. Use `∥` maybe okay. Quotes fine. Use `[PAGE 6]`. Use `\operatorname{argmin}`. Use `\delta_j`. Good.

Need maybe mention exact quote "Then for every j ∈[n], WSj(w) a concave function of w." It has typo missing "is"; we can quote exactly or paraphrase. Exact quote should be verbatim; if quote includes typo, okay. Use blockquote? Fine.

Need "SOURCE_OPERATORS_AND_EQUATIONS" include:
- Proper scoring rule:
  s: Δ_n × [n] → R ∪ {−∞}; proper if for all p, E_{j←p}[s(p;j)] ≥ E_{j←p}[s(x;j)] with equality only x=p. [PAGE 3]
- Expected reward G(p)=Σ p(j)s(p;j). Savage representation s(p;j)=G(p)+⟨g(p),δ_j−p⟩; G convex; g subgradient. [PAGE 5-6, 11]
- QA pooling: p*=M_{g,i=1}^m(p_i,w_i) unique p*∈Δ_n with Σ w_i g(p_i) ∈ ∂G(p*); equivalent argmin_x G(x)−⟨x,Σ w_i g(p_i)⟩; equivalent argmin_x Σ w_i D_G(x||p_i). [PAGE 13]
- Bregman D_G(p||q)=G(p)−G(q)−⟨g(q),p−q⟩ ≥0, convex in first arg. [PAGE 12]
- Quadratic: G_quad=Σ p_j^2, g_quad=(2p_j); QA = linear. [PAGE 6]
- Log: G_log=Σ p_j ln p_j, g_log=(ln p_j+1); p*(j)=c ∏ p_i(j)^{w_i}. [PAGE 6]
- Max-min u(p;j)=s(p;j)−Σ w_i s(p_i;j); min_j u(p;j) unique max at p*. [PAGE 15-16]
- Weight-score WS_j(w)=s(M_g(p_i,w_i);j) concave under convex exposure. [PAGE 16-17]
- No regret bound. [PAGE 17]
- Axioms. [PAGE 19-20]
- Cyclic monotonicity. [PAGE 33]
- Convex exposure. [PAGE 14], [PAGE 38], [PAGE 41-42].
- Units and breakdown. Need state assumptions and singularities.

Need "THINK_TRACE" deep multi-hop. Let's draft with a chain and audit. Include exact quotes? It says source pages provided cite exact [PAGE N] markers and verbatim quotes. We should include quotes in THINK_TRACE too? At least some. We'll quote one or two.

Need avoid overly generic. Let's formulate:

THINK_TRACE:
- Start from elicitation: proper scoring rule ensures truthful report; the Savage representation makes score depend on convex G and exposure g. The key move is to treat g as coordinates in which aggregation is linear. If g(p*) = Σ w_i g(p_i), then the consensus forecast is dual average. This is not arbitrary: it is argmin Bregman divergence. The max-min theorem makes it robust: agent sub-contracts experts, pays w_i s(p_i;j), profit u; worst-case = min_j u. The QA pool equalizes profit across outcomes with positive p*_j and yields min = Σ w_i D_G(p*||p_i). This is a multi-hop: properness -> convexity -> Bregman -> dual averaging -> max-min. Then quad/log map to linear/log; so the correspondence explains why these two common methods are special. Then learning: concavity of WS_j in w under convex exposure; gradient bound; no-regret. Then axioms.
- Gray-zone audit: What can go wrong? (1) Properness alone doesn't imply convex exposure; for max-min it's unconditional, but for weight learning and axioms it's needed. (2) If g range not convex, the equation g(p*)=Σ w_i g(p_i) may not have solution; QA may still be defined via subgradient but algebraic relations fail. Example Tsallis γ>2 n>2. (3) Boundary log rule: p_j=0 gives -∞; D excludes (1,0) and (0,1) log pool [PAGE 11]. (4) Unbounded s: no adversarial no-regret guarantee [PAGE 23]. (5) Axioms n>2 use cyclic monotonicity; coordinatewise monotonicity insufficient. (6) Idempotence is intentionally not Bayesian; Bayesian aggregation violates it [PAGE 22? Actually PAGE 23 conclusions: "While idempotence is a fairly natural axiom, Bayesian approaches to aggregation often violate this axiom..." [PAGE 23]. Good.
- "gray-zone" audit of weather example: 0.1% and 20% equal weights -> linear ~10%, log ~1.6%; this is illustrative, not physical model. It shows scoring rule choice is value judgment. If one treats 0.1% as zero (outside D), log breaks. Good.

Need "RETROCAUSAL_GENEALOGY": 
- Brier 1950 quadratic [PAGE 2? PAGE 3 citation [Bri50]; Good 1952 log [PAGE 4]; Savage 1971 [PAGE 5]; Gneiting and Raftery 2007 [PAGE 11]; Kolmogorov 1930/Nagumo 1930 quasi-arithmetic [PAGE 7-8, 18]; Aczél 1948 weighted [PAGE 10]; Genest and Zidek 1986 [PAGE 8]; Ranjan and Gneiting 2010 linear pooling common [PAGE 2]; Satopää et al 2014 log pooling outperforms [PAGE 7]; Grünwald and Dawid 2004 max-min/entropy [PAGE 16]; Abernethy et al 2013 cost-function markets [PAGE 9]; Chen and Pennock 2007 [PAGE 9]; Chun and Shachter 2011 collusion [PAGE 9-10]. 
- Multi-week traps: treating "proper scoring rule" as one-dimensional choice; ignoring that score units can be affine transformed; log scoring "only proper rule depending only on outcome probability" [PAGE 4]; linear pooling common despite empirical evidence log often outperforms [PAGE 7]; convex exposure hidden assumption; n>2 cyclic monotonicity; unbounded scores; non-idempotent Bayesian alternatives. We can label "multi-week trap" as an implementation schedule: week 1 choose s; week 2 aggregate; week 3 learn weights; week 4 axiomatize; each has trap.

Need "RECURSIVE_THEORY_OF_MIND": We need possibly invent no fake ratios. We'll use decision-theoretic levels. 
- "Crisis habit regression": In high-stakes, aggregator reverts to "take average" or "trust one expert" because simple. Source says linear pooling is most frequent [PAGE 2] and often outperforms sophisticated methods due overfitting [PAGE 3]. But if scoring rule is log, linear is not QA and not max-min optimal. So habit is a regression to quadratic-rule behavior under crisis even when loss is extreme-sensitive.
- "Counter-trap": If one switches to logarithmic pooling to avoid drowning out low-probability expert, it can over-amplify disagreement and push consensus toward extremes; source weather example 0.1% vs 20% -> ~1.6% log vs ~10% linear [PAGE 5]. Counter-trap is treating log as universally better. The paper's answer is not "always log"; it's choose s matching value judgment and aggregate by QA(s). 
- "Clock": online weight learning with O(√T) regret and idempotent axioms provide time-consistency. But if s unbounded or experts non-calibrated/adversarial, clock fails. Also recursive: experts may anticipate aggregator and strategic reporting; properness protects elicitation, but sub-contracting and collusion? Source mentions collusion and QA pool [PAGE 9-10]. If experts collude, they can exploit? The paper says preventing collusion impossible for n=2 if same s; QA pool recovers [PAGE 9-10]. This is recursive theory of mind: experts know aggregator uses QA and can collude by reporting QA pool. Need mention this as counter-trap. 
- "Counter-trap vs clock": The aggregator must model experts modeling aggregator. Proper scoring rule elicits truth if expert paid directly, but sub-contracting creates principal-agent layer; max-min profit equalization may be exploited by colluding experts. The no-regret clock learns weights but not strategic manipulation if reports adversarial? It is robust in regret but not incentive-compatible for experts? Need source: "preventing this is impossible: the experts can successfully collude by all reporting what we are calling the QA pool of their reports with respect to s. Our Theorem 4.1 recovers this result as a special case." [PAGE 9-10]. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION": 
- Physical layer: source is probability over n outcomes, no physics. Weather example is a decision context, not a physical simulation. 
- Biomechanical layer: absent. Any biomechanical veto is "not applicable in the source text"; the only cross-layer veto is domain validity: forecasts must be in D and weights nonnegative sum 1. 
- Weather veto proof: For extreme weather, log scoring/ pooling distinguishes 0.1% and 1% [PAGE 5]. But if a physical model cannot resolve probability below some threshold or assigns zero, log rule has -∞ at p_j=0 [PAGE 11], so domain veto. Also if two models (1,0),(0,1) under log, aggregation "tantamount to adding positive and negative infinity" [PAGE 11], so no valid p*. 
- Physical conservation? We shouldn't invent. We can say no theorem in source proves physical consistency; it only aggregates probabilities. If physical constraints imply outcomes impossible, set prior zero, but then log rule domain excludes. 
- Biomechanical: no variables; no veto proof possible; claim would be category error. 
- "Adjudication": The mathematical results survive as conditional theorems; physical/weather layer can veto application but not the theorem. We can state "veto is at the model-input layer: calibrated probabilities and bounded s; not at the algebra layer." Good.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 scenarios. We can structure each with "Scenario, Verifier, Prediction, Veto trigger". Use exact equations. Good.

Need count words. We'll aim ~3000 words. User demands >=1000. We can be thorough. But need not too long? Desired oververbosity 5; but strict >=1000. 2500 okay.

Need ensure no "betting" words. Avoid "odds" even in Bayesian evidence? Source has log odds. The instruction says ZERO BETTING LINES: never mention spreads, totals, moneylines, or odds. Does "odds" as betting line banned? It says no betting lines: "Never mention spreads, totals, moneylines, or odds." So avoid the word "odds" entirely. In source, log odds appears. We can avoid quoting that. Use "log posterior probability ratio" instead. But if quoting exact from page 29? We don't need. Avoid "odds" word. Also avoid "bet" etc. Good.

Need avoid "money" etc? Not banned but okay.

Need exact quotes: ensure no "odds" in quotes. We won't quote those.

Need XML validity: use `[PAGE 6]` inside text. Use `\le` not `<`. Use `\ge`. Use `\Delta_n`. Use `\operatorname{argmin}`. Use `\mathbb{R}`. Use `\langle`, `\rangle`. Use `\sum`. Use `\prod`. Use `\sqrt`. Use `\oplus`. Use `\mathcal{M}` maybe.

Need maybe escape `&` if any? Avoid. Use "and" instead. In LaTeX align environment uses `&`; avoid align. Use separate equations. Use `\begin{aligned}`? Contains `&`; may break XML? XML doesn't parse &, but we should escape or avoid. Use `\[
...
\]` with no `&`. For multiple lines separate `\[` `\]`. Good.

Need no raw `<` inside LaTeX: `\langle` fine. Avoid `x < y`; use `x \lt y`? In LaTeX `\lt` not standard? Use `x \le y`, `x \ne y`. For strict less use `x \lt y`? LaTeX has `\lt`? Actually `\lt` is not standard? It is a relation? Better use `x \mathbin{<} y` but raw `<` may be okay in XML text? In XML, `<` starts tag, so avoid. Use `x \text{ is less than } y` or `x \prec y`. Simpler avoid strict less in equations. Use `\le`, `\ge`, `\ne`. For 0.1% less than 1%, write "below". Good.

Need "units" formal: "All probabilities are dimensionless; weights are dimensionless; G, s, D_G have units of reward U; g has units U per unit probability coordinate, thus U after normalization; ln p is in nats if treated as information." Avoid "ratio". Fine.

Need "singularity/breakdown regimes": include boundary p_j=0 log; no convex exposure; unbounded s; non-associative; cyclic monotonicity; large n. Good.

Let's draft.

Potential issue: "SOURCE_OPERATORS_AND_EQUATIONS" section should be formal. Include "Theorem 4.1" quote exact. Use "min_j" etc. Need include "This quantity is non-negative, and is positive unless all reports pi with positive weights are equal." Good.

Let's write now.
</NATIVE_REASONING>

<THINK_TRACE>
The source’s central derivation is a multi-hop correspondence, not a single formula. The first hop is incentive compatibility: a proper scoring rule \(s\) makes truthful reporting optimal for an expert, and its Savage representation writes the score as a tangent-plane construction from a convex expected-reward function \(G\). The source states: “A regular scoring rule s is proper if and only if \(s(p; j) = G(p) + \langle g(p), \delta_j - p \rangle\), for some convex function \(G : \Delta_n \to \mathbb{R}\) and subgradient function g of G” [PAGE 11]. The second hop is to use the exposure function \(g\) as the coordinate system for aggregation. Instead of averaging probabilities directly, QA pooling averages exposures and then maps back: \(g(p^*) = \sum_i w_i g(p_i)\) [PAGE 6], or more generally \(\sum_i w_i g(p_i)\) is a subgradient of \(G\) at \(p^*\) [PAGE 13]. The third hop is variational: the same \(p^*\) minimizes \(G(x) - \langle x, \sum_i w_i g(p_i)\rangle\), equivalently minimizes the weighted average Bregman divergence \(\sum_i w_i D_G(x \| p_i)\) [PAGE 13]. This is why the method is not ad hoc: it is a dual averaging rule with a Bregman projection interpretation.

The fourth hop is the max-min theorem. If an aggregator subcontracts experts and pays expert \(i\) the amount \(w_i s(p_i; j)\), then the aggregator’s profit is \(u(p; j) = s(p; j) - \sum_i w_i s(p_i; j)\). The theorem says \(\min_j u(p; j)\) is uniquely maximized at the QA pool \(p^*\), and the minimum equals \(\sum_i w_i D_G(p^* \| p_i)\), achieved simultaneously for every outcome with \(p^*_j \gt 0\) [PAGE 15-16]. This is the deepest step: properness of \(s\) gives the variational inequality that forbids any other report from improving the worst-case profit. The fifth hop specializes the correspondence: for the quadratic rule, \(G_{\mathrm{quad}}(p) = \sum_j p_j^2\) and \(g_{\mathrm{quad}}(p) = 2p\), so QA pooling is exactly linear pooling; for the logarithmic rule, \(G_{\mathrm{log}}(p) = \sum_j p_j \ln p_j\) and \(g_{\mathrm{log}}(p) = (\ln p_j + 1)_j\), so QA pooling is exactly logarithmic pooling \(p^*(j) = c \prod_i p_i(j)^{w_i}\) [PAGE 6]. Thus the two most-used scoring rules recover the two most-used pooling rules, which is the paper’s organizing fact.

The gray-zone audit matters because the correspondence is conditional. First, the max-min theorem is claimed unconditionally, but the learning and axiomatization results require convex exposure: “While our max-min optimality result (Section 4) holds unconditionally, our results in Section 5 and 6 require that our proper scoring rule s satisfy a property that we term convex exposure” [PAGE 14]. Convex exposure means the range of \(g\) on the forecast domain is convex [PAGE 14]. Without it, the convenient equation \(g(p^*) = \sum_i w_i g(p_i)\) can fail; the QA pool may still be defined by a subgradient condition, but the algebraic and axiomatic properties degrade. The paper gives a concrete warning: without convex exposure, “the associativity, subtraction, and monotonicity axioms may be violated,” with the example \(G(x) = x_1^4 + x_2^4 + x_3^4\) [PAGE 35]. Second, boundary singularities are real. The logarithmic rule assigns \(-\infty\) if an outcome is assigned probability zero, and the forecast domain excludes cases such as two experts reporting \((1,0)\) and \((0,1)\), where aggregation would be “tantamount to adding positive and negative infinity” [PAGE 11]. Third, unbounded scoring rules break adversarial no-regret learning: the source says that if \(s\) is unbounded, “in a fully adversarial setting it is impossible to achieve a no-regret guarantee” [PAGE 23]. Fourth, the higher-dimensional axioms are not merely coordinatewise monotonicity; they require cyclic monotonicity [PAGE 33]. Fifth, idempotence is deliberately non-Bayesian: the source notes that “Bayesian approaches to aggregation often violate this axiom” [PAGE 23]. These are the gray zones: the mathematical results are strong, but they are domain-conditional, convexity-conditional, and boundary-aware.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The paper’s formal objects are probability distributions on the simplex \(\Delta_n\), nonnegative expert weights \(w_i\) with \(\sum_i w_i = 1\), a proper scoring rule \(s\), its expected-reward function \(G\), and its exposure function \(g\). All probabilities and weights are dimensionless. The score \(s(p;j)\) and the expected reward \(G(p)\) carry reward units \(U\). The exposure \(g\) is a gradient or subgradient of \(G\) with respect to probability coordinates, so it carries units \(U\) per unit probability coordinate; after normalization it is treated in the same reward scale. The logarithmic score \(\ln p(j)\) is a dimensionless information quantity in nats when interpreted information-theoretically, but as a scoring rule it is only defined up to positive affine transformation because “properness is preserved under positive affine transformations” [PAGE 3]. The Bregman divergence \(D_G\) carries reward units \(U\).

The proper scoring rule condition is
\[
\sum_{j=1}^n p(j)\,s(p;j) \ge \sum_{j=1}^n p(j)\,s(x;j)
\]
for all \(x \in \Delta_n\), with equality only at \(x=p\) [PAGE 3]. The Savage representation is
\[
s(p;j)=G(p)+\langle g(p),\delta_j-p\rangle,
\]
where \(G\) is convex and \(g\) is a subgradient of \(G\) [PAGE 11]. The expected reward is
\[
G(p)=\mathbb{E}_{j\leftarrow p}[s(p;j)]=\sum_{j=1}^n p(j)s(p;j).
\]
The quadratic and logarithmic expected-reward functions are
\[
G_{\mathrm{quad}}(p)=\sum_{j=1}^n p(j)^2,\qquad
G_{\mathrm{log}}(p)=\sum_{j=1}^n p(j)\ln p(j)
\]
[PAGE 6]. Their exposures are \(g_{\mathrm{quad}}(p)=(2p_j)_j\) and \(g_{\mathrm{log}}(p)=(\ln p_j+1)_j\), so QA pooling becomes linear pooling and logarithmic pooling respectively: \(p^*=\sum_i w_i p_i\) and \(p^*(j)=c\prod_i p_i(j)^{w_i}\) [PAGE 6].

The Bregman divergence is
\[
D_G(p\|q)=G(p)-G(q)-\langle g(q),p-q\rangle.
\]
The source explains that if \(G\) is the expected-reward function of a proper scoring rule, then \(D_G(p\|q)\) is “the expected reward lost by reporting q when your belief is p” [PAGE 12]. QA pooling is defined as the unique \(p^*\in\Delta_n\) such that
\[
\sum_{i=1}^m w_i g(p_i)
\]
is a subgradient of \(G\) at \(p^*\) [PAGE 13]. Equivalently,
\[
p^*=\operatorname*{arg\,min}_{x\in\Delta_n}\left(G(x)-\left\langle x,\sum_{i=1}^m w_i g(p_i)\right\rangle\right),
\]
and equivalently
\[
p^*=\operatorname*{arg\,min}_{x\in\Delta_n}\sum_{i=1}^m w_i D_G(x\|p_i)
\]
[PAGE 13]. The source states that “The QA-pool is well-defined, i.e. exists and is unique” [PAGE 13].

For max-min optimality, define
\[
u(p;j)=s(p;j)-\sum_{i=1}^m w_i s(p_i;j).
\]
Theorem 4.1 states that \(\min_j u(p;j)\) is uniquely maximized by \(p=p^*\), the QA pool, and “this minimum (across outcomes j) is achieved simultaneously by all j with \(p^*_j \gt 0\). This quantity is non-negative, and is positive unless all reports pi with positive weights are equal” [PAGE 15-16]. The minimum value is
\[
\sum_{i=1}^m w_i D_G(p^*\|p_i).
\]
This is the formal statement of the subcontracting argument: the aggregator pays experts in proportion to weights and chooses the report that maximizes the worst-case profit.

For learning weights, under convex exposure define
\[
\mathrm{WS}_j(w)=s\left(\bigoplus_{g,i=1}^m (p_i,w_i);j\right).
\]
Theorem 5.1 says \(\mathrm{WS}_j(w)\) is concave in \(w\) for every outcome \(j\) [PAGE 16-17]. The source’s no-regret result is: for a bounded proper scoring rule with convex exposure, online gradient descent on the weights gives
\[
\sum_{t=1}^T s\left(\bigoplus_{g,i=1}^m (p_i^t,w_i^*);j^t\right)
-
\sum_{t=1}^T s\left(\bigoplus_{g,i=1}^m (p_i^t,w_i^t);j^t\right)
\le 3\sqrt{m}\,M\sqrt{T},
\]
where \(M\) is an upper bound on \(\|g\|_2\) [PAGE 17]. The source emphasizes that this is regret “compared to the best possible weighted pool of experts in hindsight,” not merely the best single expert [PAGE 17].

The axiomatic characterization for \(n=2\) uses a binary pooling operator \(\oplus\) on weighted forecasts with axioms: weight additivity, commutativity, associativity, continuity, idempotence, and monotonicity [PAGE 19]. Theorem 6.6 states: “A pooling operator is a QA pooling operator (as in Definition 6.2) with respect to some g if and only if it satisfies the axioms in Definition 6.5” [PAGE 20]. For \(n\gt 2\), the monotonicity axiom is replaced by strict cyclical monotonicity:
\[
\sum_{i=1}^k \langle g(x_i),x_i-x_{i-1}\rangle \ge 0
\]
for every cycle \(x_0,x_1,\dots,x_{k-1},x_k=x_0\), with strict inequality except when all points coincide [PAGE 33]. The higher-dimensional axiomatization is stated in Definition C.6 and Theorem C.7 [PAGE 34-35].

Convex exposure is defined as: “A proper scoring rule s with forecast domain D has convex exposure if the range of its exposure function g on D is a convex set” [PAGE 14]. It holds for every continuous proper scoring rule when \(n=2\) [PAGE 38]. It holds for the logarithmic rule, the quadratic rule, spherical scoring rules, and Tsallis scoring rules with parameter \(\gamma \le 2\); for Tsallis rules with \(\gamma \gt 2\) and \(n\gt 2\), it fails [PAGE 41-42]. The breakdown regimes are therefore exact: boundary zero probabilities under the logarithmic rule produce \(-\infty\) and can make the QA pool undefined [PAGE 11]; failure of convex exposure can break associativity, subtraction, and monotonicity [PAGE 35]; unbounded scores remove the adversarial no-regret guarantee [PAGE 23]; and higher-dimensional aggregation requires cyclic monotonicity rather than coordinatewise monotonicity [PAGE 33].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s lineage runs through four scientific traditions. The first is scoring-rule theory: Brier’s quadratic rule [PAGE 3], Good’s logarithmic rule [PAGE 4], Savage’s representation of proper scoring rules [PAGE 5], and Gneiting and Raftery’s technical synthesis [PAGE 11]. The second is quasi-arithmetic means: Kolmogorov and Nagumo independently axiomatized quasi-arithmetic means in 1930, Aczél extended the idea to weighted means in 1948, and the source explicitly generalizes Kolmogorov’s axioms to weighted and vector-valued settings [PAGE 7-8, PAGE 18]. The third is opinion pooling: Genest and Zidek’s annotated bibliography, linear pooling’s prevalence, and the empirical claim that logarithmic pooling often outperforms linear pooling even though linear pooling is more common [PAGE 2, PAGE 7]. The fourth is online learning and market design: Grünwald and Dawid’s entropy and worst-case loss connection [PAGE 16], cost-function markets and market scoring rules [PAGE 9], and the collusion/arbitrage line of work by Chun and Shachter and follow-up work [PAGE 9-10].

Retrocausally, the paper explains why older methods look the way they do. Linear pooling is the QA pool for the quadratic rule; logarithmic pooling is the QA pool for the logarithmic rule. This means the historical dominance of linear pooling is not a theorem of nature but a consequence of choosing a scoring rule with an even preference for precision across \([0,1]\) [PAGE 4]. The source says the logarithmic rule “indicates a preference (of the elicitor) for high precision close to 0 and 1,” while the quadratic rule indicates “a more even preference for precision across [0,1]” [PAGE 4]. In the weather example, two equal-weight models giving \(0.1\%\) and \(20\%\) produce roughly \(10\%\) under linear pooling but roughly \(1.6\%\) under logarithmic pooling [PAGE 5]. That is the paper’s retrocausal diagnostic: the pooling controversy is partly a scoring-rule controversy in disguise.

The multi-week traps are implementation traps, not merely mathematical footnotes. Week 1 trap: choosing a scoring rule without recognizing that it encodes a value judgment about extreme probabilities. Week 2 trap: defaulting to linear pooling because it is common, even when the scoring rule is logarithmic and the max-min theorem says the QA pool is required. Week 3 trap: learning expert weights without checking convex exposure; the concavity result and the \(O(\sqrt{T})\) regret guarantee are conditional on it. Week 4 trap: using the \(n=2\) axioms as if they extend automatically to \(n\gt 2\); they do not, because the higher-dimensional monotonicity axiom requires cyclic monotonicity [PAGE 33]. Week 5 trap: treating logarithmic pooling as universally superior. The paper does not say that; it says logarithmic pooling is the QA pool for the logarithmic rule, and the logarithmic rule is appropriate when extremes matter. Week 6 trap: ignoring boundary cases. If any expert assigns probability zero to an outcome under the logarithmic rule, the score is \(-\infty\), and the aggregate may be undefined [PAGE 11]. Week 7 trap: assuming unbounded scores still permit adversarial no-regret learning; the source explicitly denies this [PAGE 23]. The deeper historical lesson is that proper scoring rules and pooling methods are dual descriptions of the same value judgment, and the trap is to choose one side without choosing the other.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
In recursive terms, the source has at least four levels of agency. Level 0 is the principal, who chooses a scoring rule \(s\) and thereby chooses what counts as a good forecast. Level 1 is the expert, who truthfully reports \(p_i\) because \(s\) is proper. Level 2 is the aggregator, who knows that experts are paid according to \(w_i s(p_i;j)\) and chooses \(p\) to maximize worst-case profit; the QA pool is the solution [PAGE 15-16]. Level 3 is the adversary or environment, which chooses outcomes and, in the online learning section, chooses expert reports and outcomes adversarially while the aggregator updates weights [PAGE 17]. The recursive problem is that each level may model the level below it: the principal chooses \(s\) anticipating expert truthfulness; the aggregator chooses \(p^*\) anticipating expert weights; the experts may anticipate the aggregator’s QA rule and collude. The source notes that for \(n=2\), if experts are rewarded with the same scoring rule, “preventing this is impossible: the experts can successfully collude by all reporting what we are calling the QA pool of their reports with respect to s” [PAGE 9-10]. That is a genuine recursive counter-trap: the aggregator’s optimal response can become a coordination point for strategic experts.

The “crisis habit regression” is the tendency, under high-stakes uncertainty, to regress to the simplest aggregation habit: take the arithmetic average or trust the single most credible expert. The source documents that linear pooling is “the most frequently used opinion pooling method across a wide range of applications” [PAGE 2] and that it “frequently outperforms attempts at more sophisticated pooling methods, which often lead to overfitting” [PAGE 3]. That is the attractive side of the habit. But the habit is a regression when the scoring rule is logarithmic or when extreme probabilities carry decision-relevant information. In the weather case, linear pooling with equal weights would take \(0.1\%\) and \(20\%\) to roughly \(10\%\), while logarithmic pooling gives roughly \(1.6\%\) [PAGE 5]. The habit is not wrong in general; it is wrong when the value judgment embedded in the scoring rule is not quadratic.

The “counter-trap” is overcorrection: switching to logarithmic pooling because extremes matter, then treating the logarithmic pool as universally superior or as a physical model. The source’s weather example supports logarithmic pooling for extreme-event decisions, but it is an illustration, not a theorem that logarithmic pooling dominates in every domain. The paper’s own framing is that scoring-rule choice is a value judgment: logarithmic scoring distinguishes \(0.01\) and \(0.001\) more sharply than quadratic scoring, while quadratic scoring treats them as “very similar” [PAGE 4]. The counter-trap is to forget that the aggregator must first choose the scoring rule, then use the corresponding QA pool. A second counter-trap is strategic: experts who know the aggregator uses QA pooling may coordinate on the QA pool of their reports, as the collusion discussion shows [PAGE 9-10]. The aggregator’s “correct” aggregation rule can become a manipulation target.

The “clock” is the time-consistency device. The source’s online gradient descent result gives \(O(\sqrt{T})\) regret against the best weighted pool in hindsight when \(s\) is bounded and has convex exposure [PAGE 17]. This is the clock: repeated experiments, weight updates, and a regret bound that does not require knowing the best weights in advance. But the clock is conditional. If \(s\) is unbounded, the adversarial guarantee fails [PAGE 23]. If convex exposure fails, concavity of \(\mathrm{WS}_j(w)\) may fail. If experts are calibrated rather than adversarial, the source points to separate work on unbounded losses and logarithmic pooling [PAGE 23]. The recursive lesson is that crisis habits and counter-traps are both static; the clock is dynamic. The aggregator should not ask “Which pooling rule is intuitively right?” but “Which scoring rule encodes the loss, and does the corresponding QA pool have the required convexity, boundedness, and incentive properties over time?”
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The source is a mathematical and statistical paper about probability aggregation. It contains no biomechanical model and no physical weather simulation. The weather discussion is an illustrative decision context: “a 0.1% chance of an imminent major hurricane may not be worth preparing for; a 1% chance could mean significant preparations, and a 10% chance could mean mandatory evacuations” [PAGE 5]. The paper then compares linear and logarithmic pooling for two models giving \(0.1\%\) and \(20\%\) [PAGE 5]. That example is a veto test for interpretation, not a proof about hurricane physics. The physical layer can veto the application if the inputs are not calibrated probabilities over a well-defined outcome set, or if the forecast domain excludes the reported probabilities. The source itself enforces a domain restriction: the logarithmic rule has \(s(p;j)=-\infty\) when \(p_j=0\), and the forecast domain is chosen to avoid cases such as \((1,0)\) and \((0,1)\), where aggregation would be “tantamount to adding positive and negative infinity” [PAGE 11]. Therefore, a weather model that reports a hard zero probability for an outcome cannot be plugged into logarithmic pooling without a domain repair.

The biomechanical layer has no standing in the source. There are no forces, loads, joint angles, fatigue variables, or physical constraints in the paper. Any claim that the paper’s equations directly adjudicate a biomechanical question would be a category error. The correct cross-layer veto is narrower: the paper’s theorems survive as conditional mathematical results, but their application to a physical or biomechanical decision requires an external mapping from physical states to probabilities and from outcomes to rewards. The source provides the aggregation and elicitation layer; it does not provide the physical likelihood model. The weather example can be used as a consistency test: if two equal-weight models give \(0.1\%\) and \(20\%\), the quadratic QA pool is the linear average, while the logarithmic QA pool is the normalized geometric mean [PAGE 6]. If a physical constraint or calibration audit says one of those numbers is not a probability in the admissible domain, the aggregation is vetoed at the input layer, not refuted at the theorem layer.

The proof of the veto is therefore three-part. First, domain veto: all forecasts must lie in the forecast domain \(D\) of the chosen proper scoring rule; boundary zeros under the logarithmic rule are singular [PAGE 11]. Second, convexity veto: if the exposure range is not convex, the convenient identity \(g(p^*)=\sum_i w_i g(p_i)\) may fail, and the higher-dimensional associativity, subtraction, and monotonicity axioms may fail [PAGE 14, PAGE 35]. Third, physical-model veto: the paper’s weather example is not a physical forecast model, so no physical conclusion follows unless an external calibrated model supplies the probabilities. The mathematical layer is not vetoed by weather; the weather application is vetoed if its inputs violate the mathematical layer’s assumptions. That is the correct adjudication.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto scenario 1: Quadratic and logarithmic correspondence verifier. Use the paper’s exact mapping. For a bounded proper scoring rule with \(G_{\mathrm{quad}}(p)=\sum_j p_j^2\), compute the QA pool by solving \(2p^*=\sum_i w_i(2p_i)\). The verifier prediction is \(p^*=\sum_i w_i p_i\), the linear pool [PAGE 6]. For \(G_{\mathrm{log}}(p)=\sum_j p_j\ln p_j\), compute \(p^*(j)=c\prod_i p_i(j)^{w_i}\) with \(c\) normalizing to one [PAGE 6]. The verifier should reject any implementation that returns a different pool while claiming QA pooling with respect to the quadratic or logarithmic rule. Prediction: exact equality within numerical tolerance on random probability vectors with positive coordinates and weights summing to one. Veto trigger: any systematic deviation, or any use of linear pooling when the declared scoring rule is logarithmic.

Veto scenario 2: Convex exposure failure for Tsallis \(\gamma \gt 2\). Use \(n=3\), \(\gamma=3\), \(G(p)=\sum_j p_j^3\), with \(p=\delta_1\), \(q=\delta_2\), and \(w=1/2\). The source’s analysis says that for \(\gamma \gt 2\) and \(n\gt 2\), convex exposure fails; the proof considers exactly this counterexample and shows that the required normalization would force a negative value under a square root [PAGE 42]. The verifier prediction is that there is no \(x\in\Delta_3\) satisfying the QA exposure equation with a common additive shift; the range of \(g\) is not convex. A correct implementation should report non-existence or domain failure, not silently project to a probability vector. Veto trigger: if the implementation returns an \(x\) and claims it satisfies the QA equations, the verifier should reject the implementation as violating the source’s convex exposure boundary. This is a hard, reproducible counterexample.

Veto scenario 3: Online weight-learning regret bound. Use a bounded proper scoring rule with convex exposure, for example the quadratic rule on \(n=2\), with \(m\) experts and \(T\) time steps. Run Algorithm B.3, the online gradient descent update on the weight vector, and record cumulative score difference against the best fixed weight vector in hindsight [PAGE 17]. The source predicts the bound
\[
\sum_{t=1}^T s\left(\bigoplus_{g,i=1}^m (p_i^t,w_i^*);j^t\right)
-
\sum_{t=1}^T s\left(\bigoplus_{g,i=1}^m (p_i^t,w_i^t);j^t\right)
\le 3\sqrt{m}\,M\sqrt{T},
\]
with \(M\) an upper bound on \(\|g\|_2\) [PAGE 17]. For the quadratic rule, \(g=2p\), so \(M\) is bounded on the simplex. The verifier prediction is that the empirical cumulative regret stays below the bound for adversarial reports and outcomes. Veto trigger: if the empirical regret grows faster than \(O(\sqrt{T})\), or if the implementation uses an unbounded scoring rule and still claims the adversarial guarantee, the claim is vetoed; the source explicitly states that unbounded scores make adversarial no-regret guarantees impossible [PAGE 23]. A second veto trigger is failure to check convex exposure before invoking the concavity of \(\mathrm{WS}_j(w)\) [PAGE 16-17]. These three verifier scenarios are reproducible, source-grounded, and falsifiable.
</RLVR_COUNTERFACTUAL_VETOES>