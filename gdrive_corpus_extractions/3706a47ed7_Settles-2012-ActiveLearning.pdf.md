---
source: "Settles-2012-ActiveLearning.pdf"
folder: "/GSE-GSI-Mega-Sweep-2026-11-06/books-d-models"
pages: 67
model: deepseek/deepseek-v4.1-flash-1017
words: 5841
---

<NATIVE_REASONING>
We need answer as GSE + GSI Frontier Reasoning Foundry. Need comply with strict invariants. User provided DRIVE SOURCE and SOURCE TEXT. They ask? There's no explicit question, but likely need produce analysis using exact XML sections. Need infer task: We need produce deep multi-hop derivation, gray-zone audit, source operators/equations, retrocausal genealogy, recursive theory of mind, cross-layer veto adjudication, RLVR counterfactual vetoes, >=1000 words. No betting lines. Need cite [PAGE N] exact quotes. Need maybe not mention betting at all. Need avoid spreads/totals/moneylines/odds. The source is Active Learning Literature Survey. Need construct response in required XML sections.

Need ensure all sections present exactly. Need >=1000-word depth across exact XML sections. THINK_TRACE >=400 words. SOURCE_OPERATORS_AND_EQUATIONS formal LaTeX, units, page citations, breakdown. RETROCAUSAL_GENEALOGY historical/scientific lineage & multi-week traps. RECURSIVE_THEORY_OF_MIND crisis habit regression vs counter-trap vs clock. CROSS_LAYER_VETO_ADJUDICATION physical/biomechanical/weather veto proof. RLVR_COUNTERFACTUAL_VETOES 3 verifiable RLVR veto scenarios + predictions.

But source is active learning, not sports/physical. Need adapt? The "Cross-layer veto adjudication physical/biomechanical/weather veto proof" seems from sports prediction context, but no betting lines. We can tie to physical/biomechanical/weather constraints as "cannot validate from source" maybe. We need not mention betting lines. But we need answer based on source. Need probably say no physical/biomechanical/weather veto data in source; therefore source cannot adjudicate such vetoes except by domain-shift/assumption violations. Need gray-zone audit: active learning survey has no physical/biomechanical/weather variables; if attempting to use it as predictive model for physiological/weather layers, that's invalid.

Need maybe discuss "DRIVE SOURCE" and "PAGES:67". Need cite exact [PAGE N] markers and verbatim quotes. Need not overcomplicate.

Need structure:
<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit. We can explain active learning as query selection under label cost. Multi-hop: (1) active learning premise; (2) scenarios; (3) query frameworks; (4) theory; (5) practical traps. Gray-zone: active learning survey is not a physical/biomechanical/weather model; any attempt to map to those layers requires explicit assumptions not in source. Also discuss bias, noisy oracles, batch mode, variable costs, changing model classes, stopping. Need >=400 words. Include citations and quotes.

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX equations from source: least confident, margin, entropy, vote entropy, KL divergence, EGL, expected error reduction, variance decomposition, Fisher info, FIR, information density, submodularity. Need include units: probabilities dimensionless, entropy nats/bits depending log base, gradient norm in parameter units, variance in output units squared, Fisher information units? In source no explicit units. Need state formal units and assumptions. Need page citations exact quotes. Need breakdown regimes: QBC version space exponential [PAGE 20], expected error reduction complexity [PAGE 23], variance O(UK^3) [PAGE 27], etc. Need mention singularities/breakdown: entropy zero when posterior one-hot; margin zero when top two equal; KL zero when committee consensus; Fisher inverse singular if information matrix not full rank; similarity density zero if no similar instances; submodular greedy guarantee under monotone submodular.

<RETROCAUSAL_GENEALOGY>
Historical lineage: query learning/optimal experimental design statistics, membership queries Angluin 1988, selective sampling Cohn, pool-based Lewis & Gale, uncertainty sampling, QBC Seung, expected error reduction Roy & McCallum, variance reduction Cohn/MacKay, density Settles & Craven, theory PAC, QBC Freund, agnostic active learning. Multi-week traps: using active learning without accounting for cost, noisy oracles, batch mode, model-class change, publication bias, stopping criteria.

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression vs counter-trap vs clock. Interpret active learner's "theory of mind" about oracle: model assumes oracle correct, same cost, available, stable quality. Crisis habit regression could be "default to uncertainty sampling" even when outlier/density issue; counter-trap: querying controversial outliers or repeated labels; clock: stopping criteria. Need mention human annotator fatigue, expertise (Baldridge & Palmer) [PAGE 41], noisy oracles [PAGE 38], stopping [PAGE 46]. Need be careful no betting.

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof. Since source has no such data, source-level veto: cannot prove physical/biomechanical/weather constraints. Need state no cross-layer proof exists; any claim requiring those layers is vetoed by absence of variables. Maybe mention "machine learning" and "robot scientist" as physical experiment application [PAGE 11-12] but not biomechanical/weather. The robot scientist uses metabolic pathways in yeast; physical lab robot. This is closest. But no biomechanics/weather. Need adjudicate: if a proposed inference depends on biomechanical/weather veto, the source cannot support it; it is a category error. Need maybe include "domain shift" not validated.

<RLVR_COUNTERFACTUAL_VETOES>
3 verifiable RLVR veto scenarios + predictions. Need define RLVR? Maybe "Reinforcement Learning with Verifiable Rewards"? We can invent scenarios? Need verifiable veto scenarios. Must be tied to source. Scenario 1: if query strategy uses entropy but labels are noisy and oracle quality varies, prediction: active learning may underperform random unless repeated labeling or annotator modeling. Source: Donmez et al. [PAGE 38] and Sheng [PAGE 38]. Scenario 2: if batch-mode uses myopic Q-best, prediction worse than random; source Guo & Schuurmans [PAGE 37]. Scenario 3: if cost ignored and costs variable, prediction no better than random; source Settles et al. [PAGE 40]. Need "veto" conditions and predictions. Could also include "changing model class" scenario. Need 3.

Need include exact [PAGE N] markers and verbatim quotes. Need not cite every sentence. Need include quotes from source. Need ensure not mention betting lines. Need no odds.

Need satisfy "ZERO TOY EQUATIONS": We should not invent fake ratios. Equations from source are okay. But could mention "no toy ratios". Need formal LaTeX with units. Need not invent fake ratios like Force/Fatigue. Avoid that. Need use source equations.

Need word count >=1000. We'll produce around maybe 2500-3500 words. Desired oververbosity 5. Need concise but deep. Let's draft.

Need be careful with XML tags. Use exact tags. Could include line breaks. Need not use markdown? Probably okay. But exact XML sections. Need maybe include <ANSWER>? No. Only required sections. We'll output exactly those XML sections.

Need include citations as [PAGE N]. Verbatim quotes in quotation marks. Need exact quotes from source. Need ensure quotes accurate.

Let's select quotes:
- Page 2 abstract: "The key idea behind active learning is that a machine learning algorithm can achieve greater accuracy with fewer training labels if it is allowed to choose the data from which it learns."
- Page 7: "Active learning systems attempt to overcome the labeling bottleneck by asking queries in the form of unlabeled instances to be labeled by an oracle"
- Page 9: "After labeling 30 new instances, the accuracy of uncertainty sampling is 81%, while the random baseline is only 73%."
- Page 14: "uncertainty sampling simply queries the instance whose posterior probability of being positive is nearest 0.5"
- Page 15: entropy equation quote? "uses entropy (Shannon, 1948) as an uncertainty measure"
- Page 20: "Haussler (1994) shows that the size of the version space can grow exponentially with the size of L."
- Page 22: "expected error reduction is also the most computationally expensive query framework"
- Page 23 complexity: "binary logistic regression model would require O(ULG) time complexity simply to choose the next query"
- Page 24 variance decomposition quote? "Minimizing the variance, then, is guaranteed to minimize the future generalization error of the model"
- Page 25 Fisher info quote: "Fisher information is the variance of the score"
- Page 27: "Estimating output variance requires inverting a K × K matrix for each new instance... O(UK3)"
- Page 28: "informative instances should not only be those which are uncertain, but also those which are 'representative' of the underlying distribution"
- Page 29: "a training set built in cooperation with an active learner is inherently tied to the model that was used to generate it"
- Page 29: "Schein and Ungar (2007) showed that active learning can sometimes require more labeled instances than passive learning"
- Page 37: "Myopically querying the 'Q-best' queries according to some instance-level query strategy often does not work well"
- Page 38: "some instances are implicitly difficult for people and machines, and second, people can become distracted or fatigued over time"
- Page 40: "active learning approaches which ignore cost may perform no better than random selection"
- Page 41: "The domain expert was a more efficient oracle with an uncertainty-based active learner"
- Page 46: "the real stopping criterion for practical applications is based on economic or other external factors"
- Page 47: "active learning and semi-supervised learning attack the same problem from opposite directions"
- Page 48: submodular quote? "Submodularity is a property of set functions that intuitively formalizes the idea of 'diminishing returns.'"
- Page 49: "using a greedy algorithm to optimize a submodular function gives us a lower-bound performance guarantee of around 63% of optimal"

Need use exact page numbers from source. Good.

Need include equations. Let's write formal LaTeX:

1. Least confident:
\(x^*_{LC} = \arg\max_x [1 - P_\theta(\hat{y}|x)]\), \(\hat{y} = \arg\max_y P_\theta(y|x)\). Units: probability dimensionless. Breakdown: if \(P=1\) all classes? Actually if model certain, score 0; if tie across all classes, score \(1-1/K\). For binary, max at P=0.5.

2. Margin:
\(x^*_M = \arg\min_x [P_\theta(\hat{y}_1|x)-P_\theta(\hat{y}_2|x)]\). Units dimensionless. Breakdown: zero margin if top two equal; ignores remaining labels.

3. Entropy:
\(x^*_H = \arg\max_x -\sum_i P_\theta(y_i|x)\log P_\theta(y_i|x)\). Units: nats if natural log, bits if log2. Max log K; min 0 at degenerate posterior. Breakdown at zero probabilities? 0 log 0 treated as 0.

4. Vote entropy:
\(x^*_{VE} = \arg\max_x -\sum_i \frac{V(y_i)}{C}\log \frac{V(y_i)}{C}\). Units nats/bits. Max log C? Actually if votes split. Breakdown C small, hard votes.

5. KL:
\(x^*_{KL} = \arg\max_x \frac{1}{C}\sum_{c=1}^C D(P_{\theta^{(c)}}\|P_C)\). KL units nats/bits. Breakdown if consensus zero probability and member positive -> infinite KL if not smoothed.

6. EGL:
\(x^*_{EGL} = \arg\max_x \sum_i P_\theta(y_i|x) \|\nabla \ell_\theta(L\cup\langle x,y_i\rangle)\|\). Units: gradient norm in parameter units. Breakdown: feature scaling can overestimate; regularization.

7. Expected 0/1 error reduction:
\(x^*_{0/1} = \arg\min_x \sum_i P_\theta(y_i|x) [\sum_{u=1}^U 1 - P_{\theta+\langle x,y_i\rangle}(\hat{y}|x^{(u)})]\). Units: expected count of errors. Breakdown: retraining cost.

8. Expected log-loss:
\(x^*_{\log} = \arg\min_x \sum_i P_\theta(y_i|x) [-\sum_{u=1}^U \sum_j P_{\theta+\langle x,y_i\rangle}(y_j|x^{(u)})\log P_{\theta+\langle x,y_i\rangle}(y_j|x^{(u)})]\). Units: nats/bits expected entropy.

9. Variance decomposition:
\(\mathbb{E}_T[(\hat{y}-y)^2|x] = \mathbb{E}[(y-\mathbb{E}[y|x])^2] + (\mathbb{E}_L[\hat{y}]-\mathbb{E}[y|x])^2 + \mathbb{E}_L[(\hat{y}-\mathbb{E}_L[\hat{y}])^2]\). Units squared output units. Breakdown: noise irreducible; bias fixed; variance reducible.

10. Neural network output variance:
\(\sigma^2_{\hat{y}}(x) \approx \nabla_x^T F^{-1}\nabla_x\). Units squared output. Breakdown: F singular or ill-conditioned; local linear assumption.

11. Fisher information:
\(I(\theta) = N \int_x P(x) \int_y P_\theta(y|x) \frac{\partial^2}{\partial\theta^2}\log P_\theta(y|x)\). Wait source equation has ∂²/∂θ² log P, but normally Fisher is negative expected Hessian or variance of score. The source writes "I(θ) = N ∫_x P(x) ∫_y Pθ(y|x) ∂²/∂θ² log Pθ(y|x)" maybe missing negative. Use as source. Units: parameter^-2. Breakdown: singular if no information.

12. FIR:
\(x^*_{FIR} = \arg\min_x \mathrm{tr}(I_U(\theta) I_x(\theta)^{-1})\). Units dimensionless? If both Fisher in same units, trace dimensionless? Actually product of information and inverse information is dimensionless. Breakdown: \(I_x\) singular; O(UK^3).

13. Information density:
\(x^*_{ID} = \arg\max_x \phi_A(x) [\frac{1}{U}\sum_{u=1}^U \mathrm{sim}(x,x^{(u)})]^\beta\). Units: depends on φ and sim. Breakdown: β large overweights density; sim nonnegative.

14. Submodular:
\(F(A\cup\{x\})-F(A) \ge F(A'\cup\{x\})-F(A')\), \(A\subseteq A'\). Greedy guarantee \((1-1/e)F(S_N^*)\). Units: objective units. Breakdown: monotone submodular with F(∅)=0.

Need maybe include "no physical/biomechanical/weather variables in equations" in cross-layer.

Need write <THINK_TRACE> with deep multi-hop. Let's plan:
- Start: source is Settles survey, 67 pages, active learning. It is not a sports or physical prediction source. Multi-hop derivation: premise -> scenarios -> query strategies -> empirical/theory -> practical caveats. Gray-zone audit: identify assumptions: oracle correct, single oracle, uniform cost, model class known, batch serial, i.i.d. pool, representative U. Each assumption is a potential failure mode. Quote page 36: assumptions? Page 36 says "we often assume that there is a single oracle, or that the oracle is always correct, or that the cost for labeling queries is either free or uniformly expensive." Need cite [PAGE 36]. Great.
- Then discuss two major gray zones: (1) active learning can be worse than passive under model-class shift, noisy oracles, batch myopia, cost-ignoring. (2) physical/biomechanical/weather layers are outside source; only robot scientist physical experiment [PAGE 11-12] but not biomechanics/weather. So cross-layer proof impossible.
- Deep multi-hop: If one tries to use active learning as analogy for "querying a biomechanical/weather oracle", need map oracle to sensor, labels to weather states, query strategy to uncertainty sampling. But source does not validate sensor delay, physical constraints, weather nonstationarity. Therefore veto. Need maybe mention "source operators are information-theoretic and label-cost operators, not physical forces." Good.

Need maybe include "gray-zone audit" with "breakdown regimes":
- Entropy degeneracy, margin degeneracy, QBC version space exponential, expected error computational explosion, variance matrix inversion, density outlier, batch diversity, stopping.

Need write in a formal, analytical tone. No betting. Need not mention "betting lines". Avoid "odds". Use "probability" but not "odds". Words like "moneylines" no. Good.

Need ensure at least 1000 words. We'll write ~3000.

Need include "RLVR" maybe define as "reinforcement learning with verifiable rewards" if needed. But user uses acronym; we can say "RLVR counterfactual vetoes" and give scenarios. Need "verifiable" meaning each has a measurable prediction. Need not define if not necessary. Could say "RLVR-style counterfactual vetoes" or "verifiable reward veto." Let's be explicit: "Under an RLVR reading (verifiable reward veto), each scenario must be falsifiable by a metric." Good.

Need no fake ratios. We can mention "not a toy Force/Fatigue ratio" maybe but that would mention toy equation? Better avoid. Just say "No non-source ratio is introduced."

Need include page citations and verbatim quotes. Need exact [PAGE N] markers. Good.

Let's draft.

Potential issue: "CROSS_LAYER_VETO_ADJUDICATION Physical/biomechanical/weather veto proof." We need "proof" maybe state "Veto proof: no evidence in source; cannot adjudicate." Maybe phrase: "Physical veto: The source's only physical experiment is the robot scientist [PAGE 11-12]... It does not provide biomechanical force, fatigue, or weather state variables. Therefore a cross-layer claim that depends on those variables is vetoed." Good.

Need mention "biomechanical" maybe source has "robot arm kinematics" [PAGE 11? Actually page 11 says Cohn et al. extended to regression learning tasks, such as learning to predict the absolute coordinates of a robot hand given joint angles of mechanical arm as inputs [PAGE 11]. That's biomechanical-adjacent but not human biomechanics. We can cite. Also variance reduction Cohn robot arm [PAGE 24]. Quote "robot arm kinematics problem" [PAGE 24]. Good. Weather: no weather. So cross-layer veto: robot arm kinematics is mechanical, not weather; no weather variables. Good.

Need maybe mention "physical/biomechanical/weather veto proof" in terms of "source cannot prove; it can only prove label-query efficiency under assumptions." That's a strong adjudication.

Need final section with 3 scenarios:
1. Noisy oracle / fatigue and expertise mismatch. Veto prediction: If annotator fatigue introduces jitter/pause and oracle quality varies over time, uncertainty sampling without oracle modeling will fail to beat random under time-based cost; repeated labeling or annotator-quality modeling needed. Source quotes [PAGE 38], [PAGE 40], [PAGE 41]. Metric: labels per target accuracy, annotation time, oracle quality estimate.
2. Batch-mode myopic Q-best. Veto prediction: If batch size Q>1 and queries selected by top-Q uncertainty without diversity, active batch can be worse than random; source [PAGE 37] "often does not work well" and [PAGE 29] Guo & Schuurmans. Metric: accuracy vs batch size, overlap/diversity.
3. Variable/unknown labeling costs. Veto prediction: If costs vary across instances and are ignored, active learning may be no better than random; source [PAGE 40] quote. Metric: cost to target accuracy. Also if predicted cost model used naively dividing informativeness by cost may not reduce cost [PAGE 40-41]. Good.

Could include 4th? User asks 3. Good.

Need maybe include "predictions" explicitly. Good.

Need ensure all XML tags close. Need no extra outside? We can output only sections. Need maybe include XML comments? No.

Need include "THINK_TRACE" with >=400 words. We'll ensure around 600-800. Total >1000. Good.

Let's write now. Need be precise. Use LaTeX in XML; likely fine. Need escape < in equations? In XML, raw < inside text may break. We should avoid raw `<` in text except tags. In LaTeX, use \langle and \rangle instead of <. Use \le instead of ≤? Fine. Use no raw ampersand? Use "and" instead of &. Avoid raw `<` or `&`. In equations, use \arg\max, no < symbols. If need less than, use \lt? LaTeX \lt not standard? Use \le, \ge. Avoid raw `<` entirely. XML tags use < >. In text, use "less than" not <. Good.

Need avoid raw `&` in text. Use "and". In LaTeX, `\&`? Avoid. Equations with `\sum` fine. Use `\mathbb{E}`. Good.

Need maybe include `[PAGE 36]` markers. Good.

Let's produce.

Potential issue: "SOURCE_OPERATORS_AND_EQUATIONS" should include formal LaTeX, units, page citations, breakdown. We'll structure with bullet list. Use `\begin{aligned}`? Fine.

Need include "Assumptions" and "singularity/breakdown regimes" explicitly. Good.

Need "exact singularity/breakdown regimes" — mention when denominator zero, matrix singular, entropy degenerate, etc. Good.

Need "VERBATIM quotes" — use quotes exactly. Check quotes:
- Page 36: "we often assume that there is a single oracle, or that the oracle is always correct, or that the cost for labeling queries is either free or uniformly expensive." Source text: "For example, we often assume that there is a single oracle, or that the oracle is always correct, or that the cost for labeling queries is either free or uniformly expensive." Exact.
- Page 29: "a training set built in cooperation with an active learner is inherently tied to the model that was used to generate it" Exact.
- Page 40: "active learning approaches which ignore cost may perform no better than random selection" Exact.
- Page 37: "Myopically querying the “Q-best” queries according to some instance-level query strategy often does not work well" Source uses curly quotes. We can quote with regular quotes: "Myopically querying the 'Q-best' queries according to some instance-level query strategy often does not work well". Good.
- Page 38: "people can become distracted or fatigued over time" exact.
- Page 41: "The domain expert was a more efficient oracle with an uncertainty-based active learner" exact.
- Page 46: "the real stopping criterion for practical applications is based on economic or other external factors" exact.
- Page 20: "the size of the version space can grow exponentially with the size of L" exact.
- Page 22: "expected error reduction is also the most computationally expensive query framework" exact.
- Page 27: "Estimating output variance requires inverting a K × K matrix for each new instance" exact.
- Page 24: "Minimizing the variance, then, is guaranteed to minimize the future generalization error of the model" exact.
- Page 28: "informative instances should not only be those which are uncertain, but also those which are “representative” of the underlying distribution" exact.
- Page 48: "Submodularity is a property of set functions that intuitively formalizes the idea of “diminishing returns.”" exact.
- Page 49: "using a greedy algorithm to optimize a submodular function gives us a lower-bound performance guarantee of around 63% of optimal" exact.

Need maybe include "PAGES: 67" no need.

Need write in clear sections.

Let's produce final.
</NATIVE_REASONING>

<THINK_TRACE>
The supplied drive source is Burr Settles’s *Active Learning Literature Survey*, a 67-page technical report. Its core operator is not a physical-force, biomechanical-fatigue, or weather-state operator; it is an information-and-label-cost operator. The abstract states the central premise verbatim: “The key idea behind active learning is that a machine learning algorithm can achieve greater accuracy with fewer training labels if it is allowed to choose the data from which it learns” [PAGE 2]. From that premise, the multi-hop derivation is: first, define the labeling bottleneck and the oracle relation [PAGE 7]; second, distinguish the three query scenarios—membership query synthesis, stream-based selective sampling, and pool-based sampling [PAGE 10–11]; third, compare query strategies—uncertainty sampling, query-by-committee, expected model change, expected error reduction, variance reduction, and density weighting [PAGE 12–26]; fourth, audit empirical and theoretical claims [PAGE 27–32]; fifth, enumerate practical failure modes—batch mode, noisy oracles, variable costs, alternative query types, multi-task learning, changing model classes, and stopping [PAGE 34–46]. The gray-zone audit is therefore an assumption audit. The survey explicitly warns that “we often assume that there is a single oracle, or that the oracle is always correct, or that the cost for labeling queries is either free or uniformly expensive” [PAGE 36]. Those assumptions are not universal laws; they are scope conditions. Once they fail, the apparently dominant active-learning curve can invert.

A second gray-zone is model-class dependence. Settles writes that “a training set built in cooperation with an active learner is inherently tied to the model that was used to generate it” [PAGE 29]. That means the labeled set is not an i.i.d. sample from the natural density; it is a biased sample shaped by the query policy. If a later model class differs, the earlier active set may lose value. The survey also records negative or cautionary results: “Schein and Ungar (2007) showed that active learning can sometimes require more labeled instances than passive learning” [PAGE 29], and batch-mode myopia is specifically flagged: “Myopically querying the ‘Q-best’ queries according to some instance-level query strategy often does not work well” [PAGE 37]. A third gray zone is computational breakdown. Expected error reduction is “the most computationally expensive query framework” [PAGE 22], and variance reduction requires inverting a \(K \times K\) matrix per instance, yielding \(O(UK^3)\) cost [PAGE 27]. A fourth gray zone is cross-layer scope: the source contains no weather variables and no human biomechanical force, fatigue, or injury state variables. It contains a robot-arm kinematics example [PAGE 11, PAGE 24] and a “robot scientist” that performs physical biological experiments [PAGE 11–12], but neither supplies a validated weather or biomechanical veto layer. Therefore, any inference that depends on those physical layers must be vetoed at the source-support level; the survey can adjudicate label-query efficiency under stated assumptions, not physical/biomechanical/weather causality. The deep multi-hop conclusion is that active learning is a controlled information-acquisition theory, not a universal prediction engine; its operators are probability, entropy, divergence, gradient norm, variance, Fisher information, similarity density, and submodular gain, all conditioned on oracle and cost assumptions.

<SOURCE_OPERATORS_AND_EQUATIONS>
The source’s formal operators are information-theoretic, probabilistic, and decision-theoretic. Units are stated where the source permits; where the source omits units, the unit follows the mathematical definition. No non-source ratio is introduced.

**1. Least-confident uncertainty sampling.** Settles defines the multi-class least-confident rule as
\[
x^*_{LC}=\arg\max_x \left[1-P_\theta(\hat y\mid x)\right],
\qquad
\hat y=\arg\max_y P_\theta(y\mid x).
\]
The source presents this on [PAGE 14] and interprets it as “the expected 0/1-loss, i.e., the model’s belief that it will mislabel \(x\)” [PAGE 14]. Units: probability is dimensionless; the score is dimensionless. Breakdown regime: for binary classification the maximum occurs at posterior \(0.5\) [PAGE 14]; for \(K\) classes the least-confident score is maximized when the top posterior is smallest. If a model is perfectly certain, the score is zero; if the posterior is degenerate, the score collapses.

**2. Margin sampling.** The source gives
\[
x^*_M=\arg\min_x \left[P_\theta(\hat y_1\mid x)-P_\theta(\hat y_2\mid x)\right],
\]
where \(\hat y_1\) and \(\hat y_2\) are the first and second most probable labels [PAGE 15]. Units: dimensionless probability margin. Breakdown regime: the margin is zero when the top two labels tie; the rule ignores the remaining label distribution for large label sets [PAGE 15].

**3. Entropy-based uncertainty sampling.** The source gives
\[
x^*_H=\arg\max_x\left[-\sum_i P_\theta(y_i\mid x)\log P_\theta(y_i\mid x)\right],
\]
with \(y_i\) ranging over all possible labelings [PAGE 15]. Units: nats if the logarithm is natural, bits if base 2; the source invokes Shannon entropy [PAGE 15]. Breakdown regime: minimum entropy is zero at a one-hot posterior; maximum entropy is \(\log K\) for \(K\) equally likely labels. The convention \(0\log 0=0\) is required; otherwise the expression is undefined at zero-probability labels.

**4. Vote entropy for query-by-committee.** The source gives
\[
x^*_{VE}=\arg\max_x\left[-\sum_i \frac{V(y_i)}{C}\log\frac{V(y_i)}{C}\right],
\]
where \(V(y_i)\) is the vote count for label \(y_i\) and \(C\) is committee size [PAGE 19]. Units: nats or bits. Breakdown regime: hard votes only; if all committee members agree, the score is zero. Small committees can work in practice [PAGE 18], but vote entropy is coarse when \(C\) is tiny or when members are correlated.

**5. Average Kullback–Leibler divergence.** The source gives
\[
x^*_{KL}=\arg\max_x \frac{1}{C}\sum_{c=1}^C D\!\left(P_{\theta^{(c)}}\,\|\,P_C\right),
\]
with
\[
D\!\left(P_{\theta^{(c)}}\,\|\,P_C\right)
=
\sum_i P_{\theta^{(c)}}(y_i\mid x)
\log\frac{P_{\theta^{(c)}}(y_i\mid x)}{P_C(y_i\mid x)},
\]
and \(P_C(y_i\mid x)=\frac{1}{C}\sum_{c=1}^C P_{\theta^{(c)}}(y_i\mid x)\) [PAGE 19]. Units: nats or bits. Breakdown regime: if a committee member assigns positive probability where the consensus assigns zero, the divergence is infinite; smoothing is required. If all members agree, the divergence is zero.

**6. Expected gradient length.** The source gives
\[
x^*_{EGL}=\arg\max_x \sum_i P_\theta(y_i\mid x)
\left\|\nabla\ell_\theta\!\left(L\cup\langle x,y_i\rangle\right)\right\|,
\]
where \(\|\cdot\|\) is the Euclidean norm of the gradient vector [PAGE 21]. Units: gradient norm in parameter units; the expectation is over label probabilities. Breakdown regime: the source warns that EGL “can be led astray if features are not properly scaled” [PAGE 21], because a large feature value or large parameter estimate can inflate gradient magnitude. Regularization helps but does not eliminate the scaling sensitivity.

**7. Expected 0/1-error reduction.** The source gives
\[
x^*_{0/1}=\arg\min_x \sum_i P_\theta(y_i\mid x)
\left[
\sum_{u=1}^U 1-P_{\theta+\langle x,y_i\rangle}\!\left(\hat y\mid x^{(u)}\right)
\right],
\]
where \(\theta+\langle x,y_i\rangle\) is the retrained model [PAGE 21]. Units: expected count of incorrect predictions over the pool \(U\). Breakdown regime: it requires incremental retraining for each candidate label and each pool item; the source notes that a binary logistic regression can require \(O(ULG)\) time to choose the next query [PAGE 23].

**8. Expected log-loss reduction.** The source gives
\[
x^*_{\log}=\arg\min_x \sum_i P_\theta(y_i\mid x)
\left[
-\sum_{u=1}^U\sum_j
P_{\theta+\langle x,y_i\rangle}(y_j\mid x^{(u)})
\log P_{\theta+\langle x,y_i\rangle}(y_j\mid x^{(u)})
\right],
\]
which is equivalent to reducing expected entropy over \(U\) [PAGE 22]. Units: nats or bits of expected entropy. Breakdown regime: same retraining cost; for sequence models the source states the complexity can explode to \(O(TM^{T+2}ULG)\) [PAGE 23].

**9. Bias–variance decomposition.** The source invokes Geman et al.:
\[
\mathbb{E}_T\left[(\hat y-y)^2\mid x\right]
=
\mathbb{E}\left[(y-\mathbb{E}[y\mid x])^2\right]
+
\left(\mathbb{E}_L[\hat y]-\mathbb{E}[y\mid x]\right)^2
+
\mathbb{E}_L\left[(\hat y-\mathbb{E}_L[\hat y])^2\right].
\]
The terms are noise, bias, and variance [PAGE 23–24]. Units: squared output units. Breakdown regime: noise is irreducible; bias is fixed for a model class; only variance is reducible by query selection. Settles states: “Minimizing the variance, then, is guaranteed to minimize the future generalization error of the model” [PAGE 24].

**10. Neural-network output variance approximation.** The source gives
\[
\sigma^2_{\hat y}(x)\approx
\left[\frac{\partial \hat y}{\partial \theta}\right]^T
\left[\frac{\partial^2}{\partial \theta^2}S_\theta(L)\right]^{-1}
\left[\frac{\partial \hat y}{\partial \theta}\right]
\approx \nabla_x^T F^{-1}\nabla_x,
\]
where \(S_\theta(L)\) is squared error on \(L\), and \(F\) is the Fisher information matrix [PAGE 24]. Units: squared output units. Breakdown regime: \(F\) must be invertible and well-conditioned; singularity or near-singularity makes the variance estimate unstable. The approximation also assumes local linearity and Gaussian variance [PAGE 24].

**11. Fisher information.** The source writes
\[
I(\theta)=N\int_x P(x)\int_y P_\theta(y\mid x)
\frac{\partial^2}{\partial\theta^2}\log P_\theta(y\mid x),
\]
and describes it as “the variance of the score” [PAGE 25]. Units: inverse parameter-squared. Breakdown regime: if the information matrix is rank-deficient, its inverse does not exist; the Cramér–Rao lower bound becomes uninformative or infinite in the singular directions.

**12. Fisher information ratio.** The source gives
\[
x^*_{FIR}=\arg\min_x \operatorname{tr}\!\left(I_U(\theta)I_x(\theta)^{-1}\right),
\]
where \(I_U(\theta)\) is the Fisher information of the unlabeled pool and \(I_x(\theta)\) is that of query \(x\) [PAGE 26]. Units: the trace of an information times inverse-information product is dimensionless. Breakdown regime: \(I_x(\theta)\) must be invertible; the cost is \(O(UK^3)\) [PAGE 27], which is intractable for large parameter spaces unless diagonal approximations or dimensionality reduction are used [PAGE 27].

**13. Information density.** The source gives
\[
x^*_{ID}=\arg\max_x
\phi_A(x)
\left[
\frac{1}{U}\sum_{u=1}^U \operatorname{sim}(x,x^{(u)})
\right]^\beta,
\]
where \(\phi_A(x)\) is the base informativeness and \(\beta\) controls density weight [PAGE 27–28]. Units: depend on \(\phi_A\) and the similarity function; the bracket is an average similarity. Breakdown regime: if \(\beta\) is too large, density overwhelms uncertainty; if similarity is zero for all pool items, the density term collapses to zero. The source’s rationale is that “informative instances should not only be those which are uncertain, but also those which are ‘representative’ of the underlying distribution” [PAGE 28].

**14. Submodularity.** The source defines submodularity by
\[
F(A\cup\{x\})-F(A)\ge F(A'\cup\{x\})-F(A'),
\qquad A\subseteq A',
\]
or equivalently
\[
F(A)+F(B)\ge F(A\cup B)+F(A\cap B),
\]
and states that greedy selection for monotone non-decreasing submodular \(F\) with \(F(\varnothing)=0\) guarantees \((1-1/e)F(S_N^*)\) [PAGE 48–49]. Units: objective-function units. Breakdown regime: the guarantee requires monotonicity, submodularity, and \(F(\varnothing)=0\); without those conditions the \(1-1/e\) bound does not apply.

<RETROCAUSAL_GENEALOGY>
The scientific lineage runs from statistical optimal experimental design and query learning to modern pool-based active learning. Settles notes that active learning is “sometimes called ‘query learning’ or ‘optimal experimental design’ in the statistics literature” [PAGE 6]. Membership queries trace to Angluin [PAGE 11], selective sampling to Cohn et al. [PAGE 12], and pool-based sampling to Lewis and Gale [PAGE 13]. Uncertainty sampling is attributed to Lewis and Gale [PAGE 14]; query-by-committee to Seung et al. [PAGE 17]; expected error reduction to Roy and McCallum [PAGE 22]; variance reduction and Fisher-information design to Cohn, MacKay, Zhang and Oles, and Schein and Ungar [PAGE 24–26]; density weighting to Settles and Craven [PAGE 27–28]. The theoretical lineage includes PAC learning [PAGE 30], QBC label-complexity results by Freund et al. [PAGE 31], perceptron-based active learning by Dasgupta et al. [PAGE 31], and agnostic active learning by Balcan et al. and Hanneke [PAGE 31–32]. The multi-week trap is that these results are often proved for restricted settings—binary classification, 0/1-loss, noise-free or agnostic assumptions, known concept class, or tractable algorithms. The survey explicitly says that “most positive theoretical results to date have been based on intractable algorithms” [PAGE 32], and that “the few analyses performed on efficient algorithms have assumed uniform or near-uniform input distributions” [PAGE 32]. A second multi-week trap is publication bias and model-class lock-in: the same active learner that selects labels in week one may create a biased training set that fails under a different model class in week two [PAGE 29]. A third trap is cost drift: if annotation costs vary and are unknown, ignoring cost can erase the active-learning advantage [PAGE 40]. A fourth trap is stopping: the survey’s practical view is that “the real stopping criterion for practical applications is based on economic or other external factors” [PAGE 46], not merely an intrinsic learner plateau.

<RECURSIVE_THEORY_OF_MIND>
The recursive theory-of-mind layer is the learner’s model of the oracle and of itself. The default “crisis habit regression” is to keep using uncertainty sampling because it is simple and often effective [PAGE 14], even when the oracle is noisy, fatigued, variable-cost, or available only in batches. The survey warns that “people can become distracted or fatigued over time” [PAGE 38], and that oracle quality can differ by annotator: “The domain expert was a more efficient oracle with an uncertainty-based active learner” [PAGE 41]. The counter-trap is to over-model the oracle: repeated labeling may de-noise data [PAGE 38], but if some instances are inherently noisy regardless of oracle, repeated labeling will not help [PAGE 38]. The clock trap is stopping too late or too early: intrinsic stopping criteria exist, but Settles argues that practical stopping is usually economic or external [PAGE 46]. A recursive learner should therefore maintain three nested beliefs: (i) a model of the task label posterior; (ii) a model of oracle reliability, fatigue, expertise, and cost; and (iii) a model of whether additional labels have positive expected value under the current budget. The survey’s batch-mode warning is a theory-of-mind failure: myopically choosing the “Q-best” queries ignores overlap in information content among the best instances [PAGE 37]. The correction is diversity-aware or submodular batch construction [PAGE 37, PAGE 48–49]. The counter-trap is to treat the oracle as a passive label dispenser; the source’s multi-task and alternative-query sections show that queries can be at bag level, instance level, feature level, or across tasks [PAGE 39–44]. The clock is not just “when accuracy plateaus”; it is “when marginal label value falls below marginal acquisition cost.”

<CROSS_LAYER_VETO_ADJUDICATION>
Cross-layer veto proof: the source does not contain a validated physical, biomechanical, or weather layer. Its closest physical examples are the robot-arm kinematics regression problem [PAGE 11, PAGE 24] and the “robot scientist” that executes autonomous biological experiments on yeast [PAGE 11–12]. Those examples prove that active learning can be coupled to a physical experimental apparatus in narrow, instrumented settings. They do not prove anything about human biomechanical force, fatigue, injury risk, weather state, or weather-driven performance. The source has no weather variables, no biomechanical load variables, and no physical-force equations. Therefore, if a proposed inference depends on a physical/biomechanical/weather veto, the source cannot adjudicate it; the correct verdict is “unsupported by this drive source.” The only valid cross-layer claim is conditional: active learning can choose queries under an oracle model, but the oracle must supply the physical label or measurement, and the cost model must be specified. The survey itself says that assumptions often include “a single oracle,” “the oracle is always correct,” and uniform or free labeling cost [PAGE 36]. Those are not physical laws. A weather or biomechanical layer would require additional state variables, sensors, delay models, and nonstationarity models that are absent from the 67 pages. Thus the cross-layer veto is not that active learning is false; it is that active learning’s formal operators are information-theoretic and cost-theoretic, so they cannot be silently promoted into physical causation.

<RLVR_COUNTERFACTUAL_VETOES>
Under an RLVR-style verifiable-reward audit, each veto must be falsifiable by a measurable outcome. Three source-grounded counterfactual vetoes follow.

**Veto 1: Noisy or fatigued oracle with time-varying reliability.** If the oracle’s quality changes over time or differs by annotator, then an uncertainty-sampling policy that assumes a single reliable oracle should not be credited with label-efficiency gains. The source states that “people can become distracted or fatigued over time” [PAGE 38] and that annotator quality can differ, with a domain expert better utilized by an uncertainty-based active learner than a novice [PAGE 41]. Prediction: under time-based annotation cost and oracle fatigue, active uncertainty sampling will fail to beat a passive or repeated-labeling baseline unless the learner estimates oracle reliability or repeats labels. Verifiable metrics: labels-to-target-accuracy, elapsed annotation time, repeated-label agreement, and per-oracle error rate. Veto trigger: if active selection does not improve cost-adjusted accuracy over random after controlling for oracle identity and fatigue proxy, the noisy-oracle claim is vetoed.

**Veto 2: Myopic batch-mode “Q-best” selection.** If batch size is greater than one and the learner selects the top-\(Q\) uncertain instances without diversity, the batch can contain redundant queries. The source says: “Myopically querying the ‘Q-best’ queries according to some instance-level query strategy often does not work well” [PAGE 37]. Prediction: as batch size grows, top-\(Q\) uncertainty selection will degrade relative to random batch sampling or diversity-aware batch selection; the degradation should be measurable by pairwise similarity or information overlap within the batch. Verifiable metrics: accuracy at fixed label budget, average pairwise similarity in the batch, and comparison against random-batch and submodular-batch baselines. Veto trigger: if top-\(Q\) uncertainty matches or exceeds diversity-aware batch selection across increasing \(Q\), the myopic-batch veto is falsified for that task.

**Veto 3: Variable or unknown labeling costs ignored.** If annotation cost varies across instances and the learner ignores cost, the active-learning advantage can disappear. The source reports: “active learning approaches which ignore cost may perform no better than random selection” [PAGE 40]. It also notes that simply dividing informativeness by cost is not necessarily effective [PAGE 40–41]. Prediction: under heterogeneous real annotation costs, a cost-blind uncertainty policy will not reduce total cost to target accuracy relative to random sampling; a learned cost model or cost-sensitive decision rule is required. Verifiable metrics: total annotation cost to target accuracy, correlation between predicted and actual annotation time, and cost-adjusted learning curves. Veto trigger: if cost-blind active learning significantly reduces total cost versus random on the same task and oracle pool, the cost-ignored veto is falsified there.