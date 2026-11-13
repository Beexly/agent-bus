---
source: "Eisenstein-2019-IntroductionToNaturalLanguageProcessing-Draft.pdf"
folder: "/GSE-GSI-Mega-Sweep-2026-11-06/books-d-models"
pages: 587
model: deepseek/deepseek-v4.1-flash-1017
words: 7285
---

<NATIVE_REASONING>
We need answer user asks with drive source and strict format. Need produce >=1000 word depth in exact XML sections. They provided source pages incl Eisenstein NLP draft. Need respond as GSE+GSI Frontier Reasoning Foundry. Need likely analyze source? Prompt weird: "DRIVE SOURCE: ... PAGES: 587 SOURCE TEXT:" Then long excerpts. They demand invariants, sections. Need write deep multi-hop derivation & gray-zone audit, formal LaTeX, units, page citations, breakdown, retrocausal genealogy, recursive theory of mind, cross-layer veto, RLVR counterfactual vetoes. No betting lines. No toy equations. Must cite exact [PAGE N] markers and verbatim quotes when source pages provided. Need not answer specific question? There's no explicit task besides source and format. Need infer produce analysis of source maybe "frontier reasoning foundry" with sections. We should assemble a rigorous audit of the source's conceptual operators and equations (NLP textbook). Need stay within source content. Need include formal equations from pages. Need at least 1000 words across exact XML sections. Include THINK_TRACE >=400 words. Other sections likely moderate. Need cite exact pages and verbatim quotes. Need analyze "gray-zone" maybe ambiguities, source limitations. "Crisis habit regression vs counter-trap vs clock" in RECURSIVE_THEORY_OF_MIND — interpret as cognitive/decision? Hmm GSE-GSI maybe game/sports? But source is NLP book. Need adapt: "crisis habit regression" could be model tendency under distribution shift, counter-trap (adversarial/domain adaptation), clock (temporal drift). Need avoid betting. Need "Physical/biomechanical/weather veto proof" but source has no physical/biomechanical/weather. Need adjudicate cross-layer veto: no evidence in source for physical/biomechanical/weather; so veto any such claims. Need say not applicable/unsupported. "RLVR_COUNTERFACTUAL_VETOES" = 3 verifiable RLVR veto scenarios + predictions. Need formulate based on source equations and failure regimes. Could use NLP model experiments as RLVR? Need interpret "RLVR" maybe reinforcement learning with verifiable rewards. We can create counterfactual veto scenarios tied to source: e.g., Naive Bayes correlated features, HMM vs CRF local features, word embeddings bias. Need predictions. Must avoid betting odds/lines. Need no fake ratios. Need formal equations SI/information/probability units. Source uses base-2 logs, probabilities dimensionless, counts dimensionless, entropy bits, complexity O. Need cite pages.

Need maybe mention exact quotes. Let's collect quotes from source:

- [PAGE 13]: "The goal of this text is focus on a core subset of the natural language processing, unified by the concepts of learning and search. A remarkable number of problems in natural language processing can be solved by a compact set of methods: Search. Viterbi, CKY, minimum spanning tree, shift-reduce, integer linear programming, beam search. Learning. Maximum-likelihood estimation, logistic regression, perceptron, expectation-maximization, matrix factorization, backpropagation."

- [PAGE 25]: "Many natural language processing problems can be written mathematically in the form of optimization, ˆy = argmax y∈Y(x) Ψ(x, y; θ)" and equation [1.1]. Need quote.

- [PAGE 27]: "When a model is capable of making subtle linguistic distinctions, it is said to be expressive. Expressiveness is often traded off against efficiency of search and learning." Also "Many of the most important problems ... require expressive models, in which complexity of search grows exponentially... exact search impossible." Good for gray zone.

- [PAGE 37]: "Why 'naïve'? Because the multinomial distribution treats each word token independently, conditioned on the class: the probability mass function factorizes across the counts." And page 43 quote about NB underestimating correlated features: "Naïve Bayes will systematically underestimate the true probabilities of conjunctions of positively correlated features." Useful.

- [PAGE 49]: margin loss Eq 2.44/2.45, hinge.

- [PAGE 53]: logistic regression conditional probability Eq 2.56.

- [PAGE 55]: gradients Eq 2.61-2.67.

- [PAGE 61]: summary of learning algorithms.

- [PAGE 71]: neural net loss cross entropy Eq 3.19/3.20? Actually page 71 has margin loss and squared error, lookup layer.

- [PAGE 73]: backprop/chain.

- [PAGE 77]: dropout etc.

- [PAGE 115]: K-means algorithm eq 5.1.

- [PAGE 117]: Jensen inequality lower bound, EM.

- [PAGE 119]: M-step φ Eq 5.23.

- [PAGE 145]: n-gram chain rule Eq 6.6-6.9.

- [PAGE 147]: smoothing Eq 6.13.

- [PAGE 151]: Kneser-Ney.

- [PAGE 153]: RNN LM Eq 6.27-6.29.

- [PAGE 155]: backprop through time, hyperparameters.

- [PAGE 167]: Viterbi recurrence? Need check page 167 has Viterbi variables? It includes eq 7.13-7.19 maybe. Need quote maybe "inference problem can be solved efficiently using dynamic programming".

- [PAGE 175]: HMM log Viterbi Eq 7.49.

- [PAGE 181]: CRF conditional Eq 7.74 and learning 7.75.

- [PAGE 183]: gradient expected counts Eq 7.85.

- [PAGE 185]: forward-backward log eq 7.91-7.92.

- [PAGE 225]: context-free language and pumping lemma.

- [PAGE 235]: CFG productions? Not required.

- [PAGE 243]: parsing complexity O(M^3 R) maybe page 247. Actually [PAGE 247] has complexity O(M^3R).

- [PAGE 261]: projectivity.

- [PAGE 267]: dependency parsing structured perceptron.

- [PAGE 281?] no.

- [PAGE 291]: beam search.

- [PAGE 313?] lambda calculus? Need maybe.

- [PAGE 335]: CBOW objective Eq 14.15-14.17.

- [PAGE 337]: negative sampling Eq 14.23.

- [PAGE 357]: cosine similarity Eq 14.26.

- [PAGE 369?] coreference etc.

Need build sections:

THINK_TRACE (>=400 words) deep multi-hop derivation & gray-zone audit. Need present chain: source is NLP methods, not physical sports. Show conceptual derivation from optimization operator [1.1] to classification, sequence labeling, parsing, distributional semantics. Audit gray zones: exact search vs approximations; probabilistic vs discriminative; NB independence; HMM locality; CRF normalization; neural overfitting; embedding bias; coreference pragmatics; discourse implicit relations. Include page citations and quotes. Need >=400 words, likely 500-700. Need maybe mention no physical/biomechanical/weather claims. Use terms "gray-zone" as ambiguous/unverified.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown. Need include formal equations:
- Optimization operator: \(\hat y = \arg\max_{y \in \mathcal{Y}(x)} \Psi(x,y;\theta)\) [PAGE 25 eq 1.1]. Units: Ψ score, arbitrary real; argmax dimensionless label. Breakdown: if \(\mathcal{Y}(x)\) infinite or score non-decomposable.
- Naive Bayes multinomial factorizes: \(p(\mathbf{x},y;\theta)\) etc. Could cite [PAGE 37]. Formal: \(p_{\text{mult}}(\mathbf{x};\phi_y)=B(\mathbf{x})\prod_{j=1}^V \phi_{y,j}^{x_j}\), with \(\sum_j \phi_{y,j}=1\). Units: counts dimensionless, φ probability dimensionless, log-likelihood in bits if base 2. Breakdown: correlated features -> underestimates conjunctions [PAGE 43].
- Margin/hinge loss: \(\ell_{\text{MARGIN}}=(1-\gamma(\theta;x^{(i)},y^{(i)}))_+\) [PAGE 49]. Units: loss dimensionless, margin score difference. Breakdown: non-smooth at hinge; subgradients.
- Logistic regression: \(p(y|x;\theta)=\frac{\exp(\theta\cdot f(x,y))}{\sum_{y'}\exp(\theta\cdot f(x,y'))}\) [PAGE 53]. Gradient Eq 2.65. Units: exponentiated score dimensionless.
- EM lower bound: \(J=\sum_i E_{q^{(i)}}[\log p(x^{(i)},z;\phi,\mu)] + H(q^{(i)})\). Entropy bits if base 2 [PAGE 117]. Breakdown: local optima; q update.
- n-gram: \(p(w_m|w_{m-1}\ldots w_1)\approx p(w_m|w_{m-1},\ldots,w_{m-n+1})\) [PAGE 145]. Smoothing Eq 6.13. Units: probability dimensionless; perplexity maybe \(2^{\ell/M}\) bits? Source page 159? Actually perplexity page 140? They didn't include page 140 in excerpt? Table of contents only. We can cite page 159? Page 159 is OOV. Perplexity in contents [PAGE 5] maybe. Avoid if not in source text.
- RNN LM: \(h_m = RNN(x_m,h_{m-1})\), \(p(w_{m+1}|w_{1:m})=\frac{\exp(\beta_{w_{m+1}}\cdot h_m)}{\sum_{w'}\exp(\beta_{w'}\cdot h_m)}\) [PAGE 153]. Units: h dimensionless, logits real, probabilities dimensionless. Breakdown: vanishing/exploding gradients [PAGE 155].
- Viterbi: \(v_m(y_m)=\max_{y_{m-1}}[s_m(y_m,y_{m-1})+v_{m-1}(y_{m-1})]\) maybe eq 7.22 on page 167/169. Cite [PAGE 169]. Complexity \(O(MK^2)\) [PAGE 169]. Breakdown: exact only for local scores.
- CRF: \(p(y|w)=\exp(\Psi(w,y))/\sum_{y'}\exp(\Psi(w,y'))\) [PAGE 181]. Gradient Eq 7.85 [PAGE 183].
- CKY complexity \(O(M^3R)\) [PAGE 247].
- CBOW objective Eq 14.17 [PAGE 335]; negative sampling Eq 14.23 [PAGE 337]; cosine Eq 14.26 [PAGE 357].
Need include exact quotes maybe within section.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps. Need mention source's lineage: Naive Bayes -> perceptron -> SVM -> logistic regression; HMM -> CRF -> neural sequence labeling; n-gram -> RNN/LSTM; distributional semantics -> LSA -> Brown clusters -> word2vec; parsing CKY -> graph/transition. Multi-week traps: independence assumptions, local features, exact search intractability, evaluation leakage, bias. Need cite pages. "Retrocausal" maybe show how later neural methods reinterpret earlier equations as computation graphs / matrix factorization. Include no betting.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Need map to model behavior:
- Crisis habit regression: under distribution shift, models regress to prior/heuristic, e.g. NB baseline most common tag [PAGE 199] "In the Penn Treebank, this simple baseline obtains accuracy above 92%." Actually page 199 says simple baseline >92%. Need quote. This is crisis habit. Or "most common tag" baseline.
- Counter-trap: adversarial/domain adaptation and bias; embeddings encode social biases [PAGE 359] quote "word embeddings encode the belief that women are as unlikely to be programmers..." and "debiasing..." Need exact quote.
- Clock: temporal drift/OOV; page 141 quote about Reuters article terms absent from Gigaword. Need cite [PAGE 141]? Yes page 141 has OOV example. Also "new technologies, previously unknown individuals, new words (e.g., hashtag), and numbers." Good. Discuss recursive ToM: model's internal user model? Could mention dialogue systems and coreference pragmatics. Need not overdo.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Source is NLP; no physical/biomechanical/weather variables. Need state veto: if a claim invokes physical/biomechanical/weather causality, it is inadmissible unless source contains such operators; it doesn't. Page citations: source defines language as set of strings [PAGE 209]; text classification [PAGE 31]; no biomechanics/weather. "Natural language processing is the set of methods for making human language accessible to computers" [PAGE 19]. So cross-layer veto: physical claims cannot override textual/probabilistic operators. Need "proof" via absence of equations with physical units. Maybe mention source has no SI mechanical units; only dimensionless probabilities/logs/counts and computational complexity. Exact breakdown regimes: if a proposed physical variable is added, it must be mapped to a feature \(x_j\) and weight; otherwise unidentifiable. Cite page 31 text classification and page 25 optimization. This is a "veto proof" by type mismatch.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. Need define scenarios tied to source:
1. Naive Bayes with positively correlated features: Train NB vs logistic regression on synthetic documents where "unfit" and prefix "un-" co-occur. Prediction: NB underestimates conjunction; LR with correlated feature weights can fit; verifiable by held-out log-loss/accuracy. Cite [PAGE 43] quote. Veto: any claim NB captures conjunction credit is vetoed.
2. HMM cannot use fine-grained context this/these; CRF/Viterbi with local features can. Prediction: on constructed data where singular/plural determiner disambiguates noun number, HMM error higher; CRF/Viterbi lower. Cite [PAGE 159] quote: "A hidden Markov model would be unable to correctly label fish as singular or plural in both of these cases, because it only has access to two features..." Good.
3. Word embedding bias: train embeddings on corpus; test gender stereotype analogies/pronoun resolution. Prediction: bias appears in cosine similarities; debiasing may reduce but not eliminate. Cite [PAGE 359] quote about women/programmers/nephews and pronoun resolution. Veto: claims embeddings are neutral are unsupported.
Maybe also 3rd can be exact search vs approximate: Viterbi exact for local scoring; beam search not exact. But need "RLVR" verifiable. Use "counterfactual veto": if condition absent, prediction changes. Need include predictions and verification.

Need satisfy ">= 1,000-word depth across exact XML sections." Need total likely 1800+ words. Need exact XML tags. No markdown? Can use XML-like sections with content. Need no betting lines. We can include LaTeX equations. Need no fake ratios. Need mention SI/information/probability units. Use "bits" for base-2 logs per [PAGE 17] notation: "exp x the base-2 exponent, 2x; log x the base-2 logarithm, log2 x" quote [PAGE 17]. Good cite.

Need not mention "spreads/totals/moneylines/odds". Avoid words "odds". "Prediction" okay. Avoid "bet". Avoid "line". Need be careful "moneylines" not mention. They said zero betting lines, never mention. We can mention "no odds" maybe that itself mentions? Better avoid those terms entirely. Don't use "betting". Use "forecast" or "prediction".

Need "DRIVE SOURCE" maybe cite exact page markers as [PAGE N]. Need quote verbatim. We need ensure quotes exactly match source. Let's collect exact quotes and page numbers.

Quote 1 [PAGE 13]: "The goal of this text is focus on a core subset of the natural language processing, uniﬁed by the concepts of learning and search." There is typo "is focus" in source. We can quote with [sic] maybe. Also "Search. Viterbi, CKY, minimum spanning tree, shift-reduce, integer linear programming, beam search." and "Learning. Maximum-likelihood estimation, logistic regression, perceptron, expectation-maximization, matrix factorization, backpropagation." Need exact.

Quote 2 [PAGE 25]: "Many natural language processing problems can be written mathematically in the form of optimization,6" then Eq. Actually text: "Many natural language processing problems can be written mathematically in the form of optimization,6" We can quote "Many natural language processing problems can be written mathematically in the form of optimization" [PAGE 25].

Quote 3 [PAGE 27]: "When a model is capable of making subtle linguistic distinctions, it is said to be expressive. Expressiveness is often traded off against efﬁciency of search and learning." Note source has ligature "efﬁciency". Use exactly? We can include "efﬁciency" with ligature? Better copy exact: "efﬁciency". Also "Many of the most important problems in natural language processing seem to require expressive models, in which the complexity of search grows exponentially with the size of the input. In these models, exact search is usually impossible." Exact from page 27: "Many of the most important problems in natural language processing seem to require expressive models, in which the complexity of search grows exponentially with the size of the input. In these models, exact search is usually impossible." Good.

Quote 4 [PAGE 37]: "Why “na¨ıve”? Because the multinomial distribution treats each word token independently, conditioned on the class: the probability mass function factorizes across the counts." Need exact with naive weird. Could quote shorter: "the probability mass function factorizes across the counts." [PAGE 37]. Good.

Quote 5 [PAGE 43]: "Na¨ıve Bayes will systematically underestimate the true probabilities of conjunctions of positively correlated features." Exact. Good.

Quote 6 [PAGE 159]: "A hidden Markov model would be unable to correctly label ﬁsh as singular or plural in both of these cases, because it only has access to two features: the preceding tag (determiner in both cases) and the word (ﬁsh in both cases)." Exact. Good. Note page 159 in source text. Use.

Quote 7 [PAGE 199]: "In the Penn Treebank, this simple baseline obtains accuracy above 92%." Exact. Good.

Quote 8 [PAGE 141]: "The bolded terms either did not exist at this date, or were not widely known; they are unlikely to be in the vocabulary. The same problem can occur for a variety of other terms: new technologies, previously unknown individuals, new words (e.g., hashtag), and numbers." Exact. Good.

Quote 9 [PAGE 359]: "If, for example, word embeddings encode the belief that women are as unlikely to be programmers as they are to be nephews, then software is unlikely to successfully parse, translate, index, and generate texts in which women do indeed program computers." Exact? Check source: "If, for example, word embeddings encode the belief that women are as unlikely to be programmers as they are to be nephews, then software is unlikely to successfully parse, translate, index, and generate texts in which women do indeed program computers." Yes. Also "contemporary NLP systems often fail to properly resolve pronoun references in texts that cut against gender stereotypes" exact from page 359. Good.

Quote 10 [PAGE 19]: "Natural language processing is the set of methods for making human language accessible to computers." Exact. Good.

Quote 11 [PAGE 209]: "a language is deﬁned as a set of strings, each of which is a sequence of elements from a ﬁnite alphabet." Exact. Good. Need use in cross-layer.

Quote 12 [PAGE 17]: "exp x the base-2 exponent, 2x" and "log x the base-2 logarithm, log2 x". Exact? Source: "exp x the base-2 exponent, 2x" and "log x the base-2 logarithm, log2 x". We can quote "log x the base-2 logarithm, log2 x" [PAGE 17]. Good.

Quote 13 [PAGE 169]: "The total time complexity of populating the trellis is therefore O(MK2)" maybe exact. Actually page 169: "The total time complexity of populating the trellis is therefore O(MK2), with an additional factor for the number of active features at each position." Good. Use.

Quote 14 [PAGE 247]: "The time complexity is O(M3R)" exact? Page 247: "The time complexity is O(M3R): each cell is computed by searching over O(M) split points, with R possible productions for each split point." Good.

Quote 15 [PAGE 181]: "p(y | w) = exp(Ψ(w, y)) / P y′∈Y(w) exp(Ψ(w, y′))" and "This is almost identical to logistic regression (§ 2.5)" Exact. Use.

Quote 16 [PAGE 335] CBOW Eq 14.17. Need no quote perhaps.

Need ensure equations use LaTeX. In XML, can include. Need escape ampersands? XML content with LaTeX uses & maybe invalid in XML. We can either avoid raw & or use `\land` for and. Since they want XML tags, content may contain `<`? Use LaTeX with `\le`, `\ge`, `\sum` no `<`. Avoid raw `&` by using `\wedge`. Avoid `<` by `\langle`. XML comments? The tags themselves are XML-like; equations with `\max_{...}` okay. Need not be well-formed XML? They said exact XML sections. Best to keep content plain text with LaTeX, no unescaped `<` or `&`. Use `\sum` and `\prod`. Avoid less-than signs. Use words "less than". Use `\mathbb{R}`. Good.

Need word count. Let's draft with sections.

Need "THINK_TRACE" first. Content: multi-hop derivation chain. Start from [PAGE 13] quote. Then [PAGE 25] optimization. Decompose: classification: label set finite; sequence labeling: label space \(\mathcal{Y}^M\) exponential; local scores enable Viterbi [PAGE 169]; parsing: CKY [PAGE 247]; dependency: arc-factored [PAGE 263?]; semantics: distributional [PAGE 327?]. Gray-zone audit: source's own tension "expressiveness vs efficiency" [PAGE 27]; exact search impossible. Probabilistic independence: NB factorization [PAGE 37] causes correlated-feature underestimation [PAGE 43]. HMM locality [PAGE 159]. Neural OOV [PAGE 141] and bias [PAGE 359]. Coreference pragmatics? [PAGE 351?] mentions world knowledge. Need cite maybe [PAGE 351] has "Coreference resolution involves not only linguistic reasoning, but also world knowledge and pragmatics". Exact quote: "Coreference resolution involves not only linguistic reasoning, but also world knowledge and pragmatics: you may not have known that China was Apple’s biggest growth market..." [PAGE 351]. Could use. Need 400 words. We'll write ~600.

Then SOURCE_OPERATORS_AND_EQUATIONS. Need include formal equations with page citations. Use bullet list. Each with units and breakdown. This section could be ~700 words. Need "formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes." Include:
- Score optimization [1.1]; units: score real; label dimensionless; assumptions: \(\mathcal{Y}(x)\) enumerable, exact max; breakdown if infinite/exponential and no local decomposition.
- Naive Bayes multinomial: \(p(\mathbf{x},y;\phi,\mu)=p_{\mathrm{cat}}(y;\mu)B(\mathbf{x})\prod_j \phi_{y,j}^{x_j}\). Since pcat maybe \(\mu_y\). Units: probability dimensionless, \(\phi\) probability, \(x_j\) count; log-likelihood in bits under base-2 [PAGE 17]. Breakdown: \(\phi_{y,j}=0\) for unseen word gives zero probability; smoothing \(\alpha\) [PAGE 147]; correlated features [PAGE 43].
- Margin loss: \(\ell_{\mathrm{MARGIN}}=(1-\gamma(\theta;x^{(i)},y^{(i)}))_+\). Units dimensionless. Breakdown: non-differentiable at hinge; subgradient [PAGE 49?]. Use page 49.
- Logistic: \(p(y|x;\theta)=\exp(\theta\cdot f(x,y))/\sum_{y'}\exp(\theta\cdot f(x,y'))\) [PAGE 53]. Gradient Eq 2.65 [PAGE 55]. Breakdown: normalization over all labels; if \(\theta\) large saturates; overtraining.
- EM lower bound: \(J=\sum_i E_{q^{(i)}}[\log p(x^{(i)},z;\phi,\mu)]+H(q^{(i)})\), \(H=-\sum_z q\log q\) [PAGE 117]. Units bits. Breakdown: Jensen bound; local optima; q update.
- n-gram: \(p(w_m|w_{1:m-1})\approx p(w_m|w_{m-n+1:m-1})\) [PAGE 145]; Lidstone smoothing [PAGE 147]. Breakdown: n small high bias, n large high variance [PAGE 147? Actually page 147 says "A small n-gram size introduces high bias, and a large n-gram size introduces high variance." Good cite [PAGE 147]? Source page 147 starts 6.2; yes page 147 includes "These two problems point to another bias-variance tradeoff... A small n-gram size introduces high bias..." It is on page 147? The text: "These two problems point to another bias-variance tradeoff (see § 2.2.4). A small n-gram size introduces high bias..." Yes [PAGE 147].
- Viterbi recurrence: \(v_m(y_m)=\max_{y_{m-1}}[s_m(y_m,y_{m-1})+v_{m-1}(y_{m-1})]\), complexity \(O(MK^2)\) [PAGE 169]. Breakdown: exact only if score decomposes into adjacent pairs.
- CRF: \(p(y|w)=\exp(\Psi(w,y))/\sum_{y'}\exp(\Psi(w,y'))\) [PAGE 181]; gradient expected counts [PAGE 183]. Breakdown: forward-backward normalization cost \(O(MK^2)\) [PAGE 185].
- CKY: \(t[i,j,X]=\max_k \psi(X\to YZ,(i,j,k))+t[i,k,Y]+t[k,j,Z]\), complexity \(O(M^3R)\) [PAGE 247]. Breakdown: binary local productions; non-binary binarized.
- CBOW/negative sampling: \( \log p(w) \approx \sum_m [u_{w_m}\cdot v_m - \log\sum_j \exp(u_j\cdot v_m)] \) [PAGE 335]; negative sampling \(\psi(i,j)=\log\sigma(u_i\cdot v_j)+\sum_{i'\in W_{\rm neg}}\log(1-\sigma(u_{i'}\cdot v_j))\) [PAGE 337]. Units: dot products real, probabilities dimensionless; breakdown: normalization over V; negative samples approximate.
- Cosine similarity: \(\cos(u_i,u_j)=\frac{u_i\cdot u_j}{\|u_i\|_2\|u_j\|_2}\) [PAGE 357]. Units dimensionless. Breakdown: zero norm; bias.
Need not all equations too many. But section maybe long.

Could include "No physical SI units appear in these operators; only dimensionless probabilities, counts, scores, bits, and asymptotic counts." Good.

RETROCAUSAL_GENEALOGY: Need lineage and traps. Use exact quotes. Write 250-350 words. Mention [PAGE 13] compact methods. Genealogy: Naive Bayes generative -> perceptron discriminative -> SVM margin -> logistic probabilistic discriminative; HMM -> CRF -> neural. N-gram -> RNN/LSTM -> embeddings. Parsing CKY -> dependency graph/transition. Retrocausal reading: modern neural methods preserve earlier objectives: logistic loss cross entropy; CRF normalization; matrix factorization reinterprets word2vec [PAGE 337?] "negative sampling is equivalent to factorization of matrix M" [PAGE 337]. Good. Multi-week traps: independence, local scoring, evaluation leakage, OOV, bias.

RECURSIVE_THEORY_OF_MIND: 200-350 words. Need "Crisis habit regression vs counter-trap vs clock." We can structure. "Crisis habit regression: under pressure, model reverts to frequent-class prior; PTB baseline >92% [PAGE 199]. Counter-trap: models learn social bias; embeddings encode stereotypes [PAGE 359]; debiasing not purely algorithmic. Clock: temporal drift/OOV; Gigaword 2003 misses 2017 terms [PAGE 141]. Recursive ToM: systems that model users must track speaker, referent, intent; coreference requires world knowledge/pragmatics [PAGE 351]; dialogue acts [PAGE 187?]. Need quote page 187? "Dialogue acts are labels over utterances in a dialogue, corresponding roughly to the speaker’s intention — the utterance’s illocutionary force" [PAGE 187]. Could cite. Good.

CROSS_LAYER_VETO_ADJUDICATION: 200-300 words. State physical/biomechanical/weather veto proof. Source defines NLP as methods making language accessible [PAGE 19]; language as set of strings [PAGE 209]; operators are probabilistic/logical/computational. No physical variables. Therefore any physical/biomechanical/weather claim is type-inadmissible unless recoded as feature \(x_j\) with learned weight. Need exact: "Natural language processing is the set of methods for making human language accessible to computers." [PAGE 19]. "a language is defined as a set of strings..." [PAGE 209]. No SI units; base-2 logs [PAGE 17]. If external physical data are introduced, they must enter through \(f(x,y)\) or generative model; otherwise unidentifiable. Veto proof by type mismatch and absence of source operators. Breakdown: if feature is time-varying, add temporal index; but source has no weather dynamics. Good.

RLVR_COUNTERFACTUAL_VETOES: 350-500 words. Three scenarios:
1. Correlated-feature NB veto. Setup: synthetic corpus with positively correlated features "un-" prefix and word "unfit"; compare multinomial NB vs logistic regression. Prediction: NB underestimates \(p(\text{unfit},\text{un-}|y)\) due to factorization; held-out log-loss higher; logistic can assign weight to conjunction. Cite [PAGE 37], [PAGE 43]. Verification: measure calibration/log-loss. Veto: any claim that NB captures conjunction structure is rejected.
2. HMM fine-grained context veto. Setup: examples "this fish" vs "these fish" where determiner number disambiguates noun number; HMM only sees preceding tag and word; CRF/Viterbi with word features sees determiner form. Prediction: HMM cannot distinguish; CRF improves. Cite [PAGE 159]. Verification: accuracy on constructed test. Veto: HMM has enough context.
3. Embedding bias veto. Setup: train word embeddings on corpus; evaluate cosine similarities and pronoun resolution with gender stereotypes. Prediction: embeddings encode bias; pronoun resolution fails on counter-stereotypical text; debiasing reduces but doesn't guarantee neutral. Cite [PAGE 359]. Verification: WEAT? But source doesn't mention WEAT. Use "cosine similarity" [PAGE 357] and pronoun resolution. Veto: claims of neutral embeddings without counter-stereotype evaluation.
Need "RLVR" maybe "Reinforcement Learning with Verifiable Rewards" but source not about RL. Could say "Verifiable-reward counterfactual vetoes" using experiments. Need include predictions and verification. Good.

Need ensure word count >1000. Likely ~2500.

Need exact XML sections with no extra outside? User wants exact sections. We can wrap in `<THINK_TRACE>...</THINK_TRACE>` etc. No introduction. Use plain text. Need include LaTeX. Avoid unescaped `&`; use `\wedge`. Avoid `<` in text: use "less than" or `\le`. Avoid raw `>`? `>` okay in XML text? Yes. But `\rightarrow` no. Use `\to`. Avoid `&` entirely; use "and". Need check equations with `\sum_{y'}` no &. Use `\prod`. Use `\cdot`. Use `\log`. Use `\max`. Use `\arg\max`. Use `\frac`. Use `\exp`. Use `\mathbb{R}`. Use `\mathcal{Y}`. Use `\phi`. Use `\theta`. Good. Use `_+` for positive part: \((1-\gamma)_+\). Need no `<`. Use `\le` for less/equal. Use `\ge`. Fine.

Need cite exact page markers. Use [PAGE 25] etc. Need maybe "verbatim quote" with quote marks. Use exact quotes. For quote with "na¨ıve" maybe hard to reproduce; can use "the probability mass function factorizes across the counts." [PAGE 37]. That's verbatim substring. Good.

Need "source pages provided, cite exact [PAGE N] markers and verbatim quotes." We have many.

Need "formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes." We'll explicitly label Units and Breakdown for each equation. Good.

Need maybe mention "SI" though no SI units. We can say "No SI mechanical units appear; probabilities are dimensionless; log base 2 yields bits [PAGE 17]." Good.

Need ">= 1,000-word depth across these exact XML sections" maybe include word count? Not necessary. But could mention "Depth: >1,000 words". Maybe not.

Need "ZERO TOY EQUATIONS" - our equations are source-derived. Avoid invented ratios. Good.

Need "Never invent fake ratios (Force / Fatigue)" — we don't.

Need "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." We'll do.

Need "RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps." We'll include.

Need "RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock." We'll explicitly use those terms.

Need "CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof." We'll explicit.

Need "RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions." We'll explicit.

Need maybe mention "GSE + GSI Frontier Reasoning Foundry" no need. Could include "Audit stance" inside THINK_TRACE. Good.

Need be careful with "source says ... [PAGE 13]" and quotes. Some page numbers maybe approximate. Need ensure page markers align with supplied text. The source text has page markers at top. We can cite exact. Use [PAGE 13] for preface excerpt. Yes. [PAGE 25] for optimization. [PAGE 27] for expressiveness. [PAGE 37] for naive. [PAGE 43] for correlated. [PAGE 159] for HMM fine context. [PAGE 199] for baseline. [PAGE 141] for OOV. [PAGE 359] for bias. [PAGE 19] for definition. [PAGE 209] for language set. [PAGE 17] for log base 2. [PAGE 169] for Viterbi complexity. [PAGE 247] for CKY complexity. [PAGE 181] for CRF. [PAGE 183] for gradient. [PAGE 185] for forward-backward. [PAGE 337] for negative sampling/matrix factorization. [PAGE 357] for cosine. [PAGE 187] for dialogue acts. [PAGE 351] for coreference pragmatics. Good.

Need maybe exact quote from [PAGE 187]: "Dialogue acts are labels over utterances in a dialogue, corresponding roughly to the speaker’s intention — the utterance’s illocutionary force (Austin, 1962)." Exact. Use.

Need "multi-week traps" maybe mention "test set reused" [PAGE 41]? It says "The ideal practice is to use the test set only once — otherwise, the test set is used to guide..." [PAGE 41]. Could cite as evaluation trap. Good quote: "The ideal practice is to use the test set only once — otherwise, the test set is used to guide" [PAGE 41]. Use in genealogy traps. Also multiple comparisons [PAGE 105]? Not necessary.

Need "gray-zone audit" perhaps mention "ambiguous source status: draft 2018, not peer-reviewed final"? But not necessary. We can mention "source is a draft textbook [PAGE 1]". The page 1 says "Natural Language Processing Jacob Eisenstein November 13, 2018". Not necessary.

Need possible issue: user says "DRIVE SOURCE: /GSE-GSI-Mega-Sweep-2026-11-06/books-d-models/Eisenstein-2019-IntroductionToNaturalLanguageProcessing-Draft.pdf PAGES: 587" but source text is only excerpts. We can only cite provided pages. Good.

Need write answer. Use XML tags. Need no markdown outside. Let's compose carefully.

Need maybe include `\text{bits}` in units. Use `\log_2`. Good.

Let's draft:

<THINK_TRACE>
The audit starts from... quote [PAGE 13]. Then multi-hop chain:
1. Optimization operator [PAGE 25]. If \(\mathcal{Y}(x)\) finite and \(\Psi\) decomposable, exact search. If not, gray zone.
2. Classification -> sequence labeling: exponential tag space; local scoring enables Viterbi [PAGE 169]; parsing CKY [PAGE 247]; dependency arc-factored. 
3. Probabilistic vs discriminative: NB factorizes [PAGE 37] and fails correlated [PAGE 43]; logistic conditional [PAGE 53]; CRF [PAGE 181].
4. Neural/distributional: RNN LM [PAGE 153]; OOV [PAGE 141]; bias [PAGE 359].
Gray-zone audit: source itself warns expressiveness vs efficiency [PAGE 27]. Exact search usually impossible. Therefore any claim of exact global inference outside local decomposition is vetoed. Another gray zone: "probabilistic" does not mean calibrated; NB independence is assumption. Another: HMM cannot use fine context [PAGE 159]. Another: test leakage [PAGE 41]. Another: coreference pragmatics [PAGE 351]. The correct adjudication is to require operator-level proof: if a claim uses physical/biomechanical/weather variables, source has none; must be recoded as feature. Good.

Need maybe mention "multi-hop" explicitly: optimization -> local decomposition -> dynamic programming -> learning -> evaluation. Good.

Now write full answer. Keep length. Need not use markdown headings beyond XML. Ensure all XML tags close. Use self-contained.

Let's now produce final.
</NATIVE_REASONING>

<THINK_TRACE>
The audit begins with the source’s own compact statement of scope: “The goal of this text is focus on a core subset of the natural language processing, uniﬁed by the concepts of learning and search” [PAGE 13]. That sentence is the first operator in the derivation: the book does not treat NLP as a loose collection of applications. It treats NLP as a repeated application of search over structured outputs plus learning of scoring functions. The next hop is explicit: “Many natural language processing problems can be written mathematically in the form of optimization” [PAGE 25], with the canonical operator \(\hat y = \arg\max_{y \in \mathcal{Y}(x)} \Psi(x,y;\theta)\) [PAGE 25, equation 1.1]. This is the formal spine. Classification uses a finite label set; sequence labeling replaces the label with a tag sequence \(y_{1:M}\); parsing replaces it with a tree; dependency parsing replaces it with an arc set; semantic parsing replaces it with a logical form. The multi-hop consequence is that every downstream claim must identify the search space, the scoring decomposition, the learning objective, and the inference procedure.

The source immediately marks the gray zone: “When a model is capable of making subtle linguistic distinctions, it is said to be expressive. Expressiveness is often traded off against efﬁciency of search and learning” [PAGE 27]. It then sharpens the point: “Many of the most important problems in natural language processing seem to require expressive models, in which the complexity of search grows exponentially with the size of the input. In these models, exact search is usually impossible” [PAGE 27]. This is the central audit rule: exactness is not free. Viterbi is exact only because the score decomposes into local parts; the source reports \(O(MK^2)\) trellis complexity [PAGE 169]. CKY is exact only because productions are local; the source reports \(O(M^3R)\) time complexity [PAGE 247]. If a claim asserts global exact optimization over a non-decomposable or exponentially large space, the source itself vetoes that claim.

A second gray zone is probabilistic independence. The source states that the multinomial Naïve Bayes model is “naïve” because “the probability mass function factorizes across the counts” [PAGE 37]. That factorization is an assumption, not a discovered fact. The source then gives the failure regime: “Na¨ıve Bayes will systematically underestimate the true probabilities of conjunctions of positively correlated features” [PAGE 43]. Therefore any claim that Naïve Bayes captures conjunction credit or feature interaction without a corrected model is invalid. Logistic regression and CRFs avoid that joint-likelihood factorization by defining conditional probabilities directly, e.g. \(p(y|x;\theta)=\exp(\theta\cdot f(x,y))/\sum_{y'}\exp(\theta\cdot f(x,y'))\) [PAGE 53] and \(p(y|w)=\exp(\Psi(w,y))/\sum_{y'}\exp(\Psi(w,y'))\) [PAGE 181]. But that does not make them assumption-free; they still impose a local normalization and feature decomposition.

A third gray zone is locality in sequence labeling. The source gives a concrete boundary: “A hidden Markov model would be unable to correctly label ﬁsh as singular or plural in both of these cases, because it only has access to two features: the preceding tag (determiner in both cases) and the word (ﬁsh in both cases)” [PAGE 159]. That is a proof by feature insufficiency, not a preference. A CRF or Viterbi-based feature model can add the determiner form and succeed. A fourth gray zone is temporal and lexical drift: the source notes that terms in a 2017 Reuters article were unlikely to appear in a model trained on Gigaword 2003, and that “The same problem can occur for a variety of other terms: new technologies, previously unknown individuals, new words (e.g., hashtag), and numbers” [PAGE 141]. A fifth gray zone is evaluation leakage: “The ideal practice is to use the test set only once — otherwise, the test set is used to guide” [PAGE 41]. A sixth gray zone is pragmatic inference: the source says coreference requires “not only linguistic reasoning, but also world knowledge and pragmatics” [PAGE 351]. The resulting audit stance is conservative: claims must be tied to explicit operators and named breakdown regimes. If a claim invokes physical, biomechanical, or weather causality, it must first be recoded as a feature \(x_j\) inside \(f(x,y)\) or inside a generative model; otherwise the source provides no operator for it. That is the first cross-layer veto.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source uses base-2 logarithms: “log x the base-2 logarithm, log2 x” [PAGE 17]. Thus log-likelihoods and entropies are in bits when base 2 is used. Probabilities and counts are dimensionless. The source does not introduce SI mechanical units in these NLP operators; its units are probability, counts, scores, bits, and asymptotic computational complexity.

1. General structure-prediction operator. The canonical form is
\[
\hat y = \arg\max_{y\in\mathcal{Y}(x)} \Psi(x,y;\theta),
\]
with \(x\in\mathcal{X}\), \(y\in\mathcal{Y}(x)\), and score \(\Psi\) real-valued [PAGE 25, equation 1.1]. Units: \(\Psi\) is a scalar score, dimensionless unless assigned a log-probability interpretation; \(\hat y\) is a discrete structure. Assumption: \(\mathcal{Y}(x)\) is searchable and \(\Psi\) is evaluable. Breakdown: if \(\mathcal{Y}(x)\) is exponential and \(\Psi\) lacks local decomposition, exact search is generally intractable; the source states that for expressive models “exact search is usually impossible” [PAGE 27].

2. Naïve Bayes multinomial factorization. The generative model factorizes word counts, so the conditional text probability has the form
\[
p_{\mathrm{mult}}(\mathbf{x};\phi_y)=B(\mathbf{x})\prod_{j=1}^{V}\phi_{y,j}^{x_j},
\quad \sum_{j=1}^{V}\phi_{y,j}=1,
\]
with \(x_j\) a count and \(\phi_{y,j}\) a probability [PAGE 37]. The source explains “the probability mass function factorizes across the counts” [PAGE 37]. Units: \(x_j\) is a count, \(\phi_{y,j}\) is dimensionless probability, \(B(\mathbf{x})\) is a multinomial coefficient. Breakdown: zero counts can force zero probability without smoothing; correlated features violate the independence assumption and cause systematic underestimation of conjunctions [PAGE 43]. Smoothing adds pseudo-counts, as in Lidstone smoothing [PAGE 147].

3. Margin loss. The margin loss is
\[
\ell_{\mathrm{MARGIN}}(\theta;x^{(i)},y^{(i)})
=
\left(1-\gamma(\theta;x^{(i)},y^{(i)})\right)_{+},
\]
where \((z)_{+}=\max(0,z)\) [PAGE 49]. Units: the margin \(\gamma\) is a score difference; the loss is dimensionless. Assumption: a margin of at least 1 separates the true label from the best alternative. Breakdown: the hinge is non-differentiable at the margin boundary; the source discusses subgradients and tie-breaking [PAGE 49].

4. Logistic regression conditional probability. The source defines
\[
p(y\mid x;\theta)
=
\frac{\exp(\theta\cdot f(x,y))}
{\sum_{y'\in\mathcal{Y}}\exp(\theta\cdot f(x,y'))}
\]
[PAGE 53]. The gradient for a single example is
\[
\frac{\partial \ell}{\partial \theta}
=
-f(x^{(i)},y^{(i)})
+
\sum_{y'\in\mathcal{Y}}
p(y'\mid x^{(i)};\theta)\,f(x^{(i)},y'),
\]
i.e. observed feature counts minus expected feature counts [PAGE 55, equations 2.61–2.65]. Units: exponentiated scores are positive dimensionless terms; probabilities are dimensionless. Breakdown: normalization is over all labels; large score gaps saturate probabilities and can slow learning; the source notes that logistic loss can “overtrain” on correctly labeled examples [PAGE 61].

5. Expectation-maximization lower bound. For latent variables \(z\), the source derives
\[
\mathcal{J}
=
\sum_{i=1}^{N}
E_{q^{(i)}}\left[\log p(x^{(i)},z;\phi,\mu)\right]
+
H(q^{(i)}),
\]
with \(H(q^{(i)})=-\sum_z q^{(i)}(z)\log q^{(i)}(z)\) [PAGE 117]. Units: log-probabilities and entropy in bits under base-2 logs. Assumption: Jensen’s inequality gives a lower bound because \(\log\) is concave [PAGE 117]. Breakdown: EM increases the bound but need not find the global maximum; the E-step updates \(q^{(i)}\), and the M-step uses expected counts [PAGE 119].

6. n-gram approximation and smoothing. The source writes
\[
p(w_m\mid w_{m-1}\ldots w_1)
\approx
p(w_m\mid w_{m-1},\ldots,w_{m-n+1})
\]
[PAGE 145]. Lidstone smoothing is
\[
p_{\mathrm{smooth}}(w_m\mid w_{m-1})
=
\frac{\mathrm{count}(w_{m-1},w_m)+\alpha}
{\sum_{w'\in V}\mathrm{count}(w_{m-1},w')+V\alpha}
\]
[PAGE 147]. Units: counts are dimensionless; probabilities are dimensionless. Breakdown: the source states, “A small n-gram size introduces high bias, and a large n-gram size introduces high variance” [PAGE 147]. Rare events can make probabilities zero without smoothing.

7. Viterbi recurrence. For local scores \(s_m(y_m,y_{m-1})\),
\[
v_m(y_m)
=
\max_{y_{m-1}}
\left[
s_m(y_m,y_{m-1})+v_{m-1}(y_{m-1})
\right].
\]
The source reports \(O(MK^2)\) time to populate the trellis [PAGE 169]. Units: scores are log-probabilities or real scores; \(M\) and \(K\) are counts. Breakdown: exactness depends on the pairwise locality restriction; higher-order features increase complexity [PAGE 153].

8. CRF conditional form. The source defines
\[
p(y\mid w)
=
\frac{\exp(\Psi(w,y))}
{\sum_{y'\in\mathcal{Y}(w)}\exp(\Psi(w,y'))}
\]
[PAGE 181]. Its gradient is a difference between observed and expected feature counts:
\[
\frac{d\ell}{d\theta_j}
=
\lambda\theta_j
+
\sum_{i=1}^{N}
E[f_j(w^{(i)},y)]
-
f_j(w^{(i)},y^{(i)})
\]
[PAGE 183, equation 7.85]. Units: features and weights are real; log-probabilities in bits if base 2. Breakdown: normalization requires the forward algorithm; forward-backward has \(O(MK^2)\) time and \(O(MK)\) space [PAGE 185].

9. CKY parsing. For a binary production \(X\to YZ\) and split \(k\),
\[
t[i,j,X]
=
\max_{k,Y,Z}
\left[
\psi(X\to YZ,(i,j,k))
+
t[i,k,Y]
+
t[k,j,Z]
\right].
\]
The source reports space \(O(M^2N)\) and time \(O(M^3R)\) [PAGE 247]. Units: table entries are scores; \(M,N,R\) are counts. Breakdown: exactness requires local production scores; non-binary productions must be binarized.

10. Continuous bag-of-words and negative sampling. The CBOW approximation is
\[
\log p(w)
\approx
\sum_{m=1}^{M}
\left[
u_{w_m}\cdot v_m
-
\log\sum_{j=1}^{V}\exp(u_j\cdot v_m)
\right]
\]
[PAGE 335]. Negative sampling uses
\[
\psi(i,j)
=
\log\sigma(u_i\cdot v_j)
+
\sum_{i'\in W_{\mathrm{neg}}}
\log\left(1-\sigma(u_{i'}\cdot v_j)\right)
\]
[PAGE 337]. Units: dot products are real scores; sigmoid outputs and probabilities are dimensionless. Breakdown: the full softmax is a vocabulary-wide bottleneck; negative sampling approximates it. The source also notes that negative sampling is connected to factorization of a shifted positive PMI matrix [PAGE 337].

11. Cosine similarity for embedding evaluation:
\[
\cos(u_i,u_j)
=
\frac{u_i\cdot u_j}
{\|u_i\|_2\,\|u_j\|_2}
\]
[PAGE 357]. Units: dimensionless. Breakdown: zero-norm vectors are undefined; cosine similarity also inherits corpus bias, which the source treats as a fairness and bias problem [PAGE 359].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The source’s lineage is visible in its own summary of methods: “Search. Viterbi, CKY, minimum spanning tree, shift-reduce, integer linear programming, beam search” and “Learning. Maximum-likelihood estimation, logistic regression, perceptron, expectation-maximization, matrix factorization, backpropagation” [PAGE 13]. That list is a retrocausal map. The older generative route runs from Naïve Bayes and HMMs to smoothed n-gram models; the discriminative route runs from perceptron to margin methods and logistic regression; the structured route runs from Viterbi and CKY to CRFs, structured perceptron, and neural sequence labeling; the distributional route runs from latent semantic analysis and Brown clusters to WORD2VEC, negative sampling, and matrix-factorization interpretations [PAGE 337]. Later neural methods do not erase the earlier operators. They re-express them: logistic loss becomes cross-entropy, CRF normalization becomes a forward algorithm inside a differentiable graph, and word embeddings become a factored word-context matrix.

The multi-week traps are stable across this genealogy. First, independence assumptions are easy to forget: Naïve Bayes factorizes counts [PAGE 37] and then underestimates correlated conjunctions [PAGE 43]. Second, local scoring assumptions are easy to overextend: HMMs cannot use the fine determiner context that a CRF feature model can use [PAGE 159]. Third, exact-search assumptions are easy to overstate: expressive models can have exponential search, and “exact search is usually impossible” [PAGE 27]. Fourth, evaluation leakage is easy to commit: the test set should be used once, otherwise it guides modeling [PAGE 41]. Fifth, temporal drift is easy to ignore: Gigaword 2003 does not cover 2017 terms, new technologies, new names, or new words [PAGE 141]. Sixth, fairness bias is not a separate “application” problem; it is inside the distributional objective, because word embeddings can encode social stereotypes [PAGE 359]. A multi-week audit should therefore track the same four objects across every chapter: search space, scoring decomposition, learning objective, and evaluation protocol.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression appears when a system under distribution shift falls back to a high-frequency prior. The source gives a concrete baseline: “In the Penn Treebank, this simple baseline obtains accuracy above 92%” [PAGE 199]. That high baseline is not evidence of linguistic understanding; it is evidence that the label prior and word-frequency habits dominate. The recursive-theory-of-mind lesson is that a system’s apparent competence can be a habit regression to the most common tag or label. Counter-trap behavior appears when the model learns a socially salient shortcut. The source warns that word embeddings can encode the belief that women are as unlikely to be programmers as they are to be nephews, and that “contemporary NLP systems often fail to properly resolve pronoun references in texts that cut against gender stereotypes” [PAGE 359]. The counter-trap is that the model’s “objective” distributional conclusion can reproduce and reinforce the corpus bias. Clock behavior appears when the model freezes its vocabulary and world model. The source’s OOV example is explicit: terms from a 2017 Reuters article are unlikely to be in a Gigaword 2003 vocabulary, and the same problem occurs for “new technologies, previously unknown individuals, new words (e.g., hashtag), and numbers” [PAGE 141]. A recursive user model must therefore track not only the speaker’s intention but also the temporal index of the lexicon. The source defines dialogue acts as labels corresponding roughly to “the speaker’s intention — the utterance’s illocutionary force” [PAGE 187]. That is the correct recursive layer: infer the speaker’s intent, the referent, and the discourse role, while auditing for habit regression, stereotype traps, and clock drift.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The cross-layer veto is type-based. The source defines NLP as “the set of methods for making human language accessible to computers” [PAGE 19], and it defines a language as “a set of strings, each of which is a sequence of elements from a ﬁnite alphabet” [PAGE 209]. Its operators are probabilistic, logical, and computational: probabilities, counts, log-likelihoods in bits [PAGE 17], scores, and asymptotic complexity. It contains no physical, biomechanical, or weather dynamics. Therefore a claim that a physical or biomechanical variable directly explains a linguistic prediction is inadmissible unless the variable is first mapped into the source’s feature function \(f(x,y)\) or into a generative model. Otherwise the variable is unidentified: it has no weight, no likelihood term, and no search operator. The veto proof is not empirical; it is a proof by absence of operators and by unit mismatch. If a proposed weather variable is introduced, it must become a time-indexed feature \(x_j(t)\) with a learned weight \(\theta_j\), and its effect must be tested against the source’s evaluation protocol. Without that mapping, the physical claim cannot adjudicate the NLP claim. The only legitimate cross-layer statement is conditional: physical data may enter as features, but they do not override the probabilistic or logical operators that the source actually defines.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: correlated-feature Naïve Bayes veto. Construct a labeled corpus in which the prefix “un-” and the word “unfit” are positively correlated within a class. The multinomial Naïve Bayes model factorizes counts [PAGE 37], and the source states that it “will systematically underestimate the true probabilities of conjunctions of positively correlated features” [PAGE 43]. Prediction: held-out log-loss for Naïve Bayes will be worse than for a logistic-regression model that can assign weight to the conjunction feature. Verification: compare held-out log-loss and calibration on the synthetic corpus. Veto: any claim that Naïve Bayes captures the conjunction without a corrected model is rejected.

Scenario 2: HMM fine-context veto. Construct examples such as “this fish” versus “these fish,” where the determiner form disambiguates noun number. The source states that a hidden Markov model “would be unable to correctly label ﬁsh as singular or plural in both of these cases, because it only has access to two features: the preceding tag (determiner in both cases) and the word (ﬁsh in both cases)” [PAGE 159]. Prediction: the HMM will not separate the two cases, while a CRF or Viterbi feature model with determiner-form features will separate them. Verification: measure accuracy on a constructed test set that balances the two determiner forms. Veto: any claim that the HMM has sufficient context for this distinction is rejected.

Scenario 3: embedding-bias veto. Train word embeddings on a corpus and evaluate cosine similarity [PAGE 357] on gender-stereotyped word pairs and on pronoun resolution in counter-stereotypical texts. The source warns that embeddings can encode the belief that women are as unlikely to be programmers as they are to be nephews, and that systems “often fail to properly resolve pronoun references in texts that cut against gender stereotypes” [PAGE 359]. Prediction: the unmodified embeddings will show stereotype-aligned similarity structure, and a downstream pronoun resolver will show elevated error on counter-stereotypical examples; debiasing may reduce but will not automatically eliminate the error. Verification: report similarity gaps and pronoun-resolution error on a counter-stereotype test set. Veto: any claim that the embeddings are neutral without a counter-stereotype evaluation is rejected.
</RLVR_COUNTERFACTUAL_VETOES>