---
source: "2305.13654v3.pdf"
folder: "/CorpusRoot"
pages: 13
model: deepseek/deepseek-v4.1-flash-1017
words: 5512
---

<NATIVE_REASONING>
We need answer as GSE + GSI Frontier Reasoning Foundry with exact XML sections, >=1000 words depth, zero betting lines, no toy equations, formal LaTeX units assumptions singularities, cite exact [PAGE N] and verbatim quotes. Need analyze paper. Need produce deep multi-hop derivation, gray-zone audit. The prompt is unusual: "DRIVE SOURCE" paper about spurious correlations. No sports betting? We must not mention betting lines. Need adhere. We need likely produce a rigorous theoretical analysis of paper using neighborhood analysis and NFL regularization, with formal equations, units, page citations. Need sections exactly:
<THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Need "crisis habit regression vs counter-trap vs clock" maybe interpret as model behavior under distribution shift? We can map "crisis habit regression" to biased model reverting to spurious shortcut under stress/OOD, counter-trap as NFL regularization, clock as fine-tuning epochs/training schedule. Cross-layer veto: physical/biomechanical/weather veto proof - since no physical biomechanics in paper, we must be careful: likely "physical/biomechanical/weather veto" means if no physical constraints applicable state no veto? We can give proof that computational/embedding-space layer is only relevant; physical/biomechanical/weather layers are non-identifiable/no evidence. Need not invent. We can say "No physical or biomechanical or weather variable appears in source; any claim requiring them is vetoed as out-of-scope." Need provide formal proof-ish.

Need include >=1000 words total. Desired oververbosity 5. Need cite exact page markers and verbatim quotes. Need not use all pages, but many. Need formal equations for spurious score, cosine distance regularizer, parameter L2, prompt tuning. Units: embedding dimensions d, cosine similarity dimensionless, probabilities dimensionless, accuracy %, parameter change? Equation 3 sum squared parameter changes has units parameter squared; regularization weight λ dimensionless? Actually loss term weight can have inverse units to match loss but paper doesn't specify. We can state units under standard practice; note no explicit normalization; singularity/breakdown when K=0, cosine undefined for zero vectors, spurious score undefined if f* unavailable, parameter regularizer scale-dependent, frozen model spurious score zero degenerate. Need mention "cos-dist" likely 1 - cosine similarity. Need exact equation from page 5. Need cite [PAGE 5]. Need cite table values. Need quote "Spurious tokens receive high spurious scores while non-spurious tokens receive low spurious scores." [PAGE 5]. Quote "NFL effectively prevents erroneous clusters and significantly improves classifier robustness without auxiliary data." [PAGE 1 abstract]. Need maybe quote definitions of spurious/genuine. Page 1: "we call PERFORMANCES a spurious token, i.e., a token that does not causally affect a task label. On the other hand, a genuine token such as EXCELLENT is a token that does causally affect a task label." [PAGE 1]. Important.

Need "RETROCAUSAL_GENEALOGY" historical/scientific lineage and multi-week traps. We can discuss lineage: distribution shift, shortcut learning, annotation artifacts, ERM, DFR, frozen features, prompt tuning. Multi-week traps: treating spurious score as causal proof, using biased-domain accuracy, forgetting f* necessity, over-reliance on frozen PLM assumption, bias ratio synthetic-to-natural extrapolation, human evaluation precision, regularization hyperparameter transfer. Need cite pages. "multi-week traps" maybe long-horizon experimental traps. No betting.

Need "RECURSIVE_THEORY_OF_MIND" Crisis habit regression vs counter-trap vs clock. Need interpret. Could be about model's own belief? The paper's models don't have theory of mind. We can say there's no intentional agent; map "crisis habit regression" to ERM under biased data using shortcut under stress; counter-trap to NFL that prevents alignment; clock to training epoch/hyperparameter search. Need explicitly state recursive ToM is not claimed by paper; if interpreted anthropomorphically, no evidence. Need use page evidence: standard fine-tuning random-guess robust accuracy 53.3/50.3 [PAGE 7]. NFL-PT etc. Training epochs [PAGE 12]. Need discuss "clock" as fine-tuning duration and early stopping; no temporal dynamics provided beyond epochs.

Need "CROSS_LAYER_VETO_ADJUDICATION" Physical/biomechanical/weather veto proof. We can formally say: Let P be physical variables, B biomechanical, W weather. Source's model domain is text X, labels Y, embeddings R^d. No P,B,W in equations 1-3 or experimental design. Therefore any causal claim involving them is non-identifiable; veto. Need provide proof sketch: equations only contain tokens, embeddings, parameters, probabilities. Page 3 defines f: X→Y and Mθ: X→R^d [PAGE 3]. No physical units. Thus cross-layer veto: reject any inference requiring physical/biomechanical/weather constraints. The "proof" can be scope exclusion, not empirical. Need maybe mention weather could affect data collection? But not in source. So veto.

Need "RLVR_COUNTERFACTUAL_VETOES" 3 verifiable RLVR veto scenarios + predictions. RLVR = reinforcement learning with verifiable rewards? Need provide 3 scenarios with predictions, likely testable. Need tie to paper. Could design three veto tests:
1. Remove f* unbiased reference; use biased model for spurious score detection. Prediction: detection precision degrades? Actually paper does use biased model for natural detection [PAGE 8]. Need counterfactual: If f* is a random/unreliable model, spurious score won't identify spurious tokens; predicted high false positives. Veto if score not correlated with human labels. 
2. Freeze LM (NFL-F) should yield spurious score 0 but robustness not perfect; if claimed "low spurious score implies robust", NFL-F has score 0 yet robust acc 77.3/70.3 and gap -12.2/-5.0 [PAGE 7, PAGE 6 says score 0]. Prediction: score alone insufficient; veto metric-only.
3. Increase regularization λ: paper says tradeoff but drop in ID insignificant and robustness considerable up to λ=15000 [PAGE 12]. Counterfactual: if λ too high, model underfits; spurious score low but accuracy collapses. Need test with λ beyond 20000? Prediction: robust accuracy non-monotonic/plateau, biased accuracy drops. Veto if claim "any restriction helps" universally? The paper says "any sensible restriction" [PAGE 6]. We can test with λ sweep. Need exact predictions.

Need maybe include "3 verifiable RLVR veto scenarios" as if reward conditions. We can define verifiable reward: e.g., compare human-annotated spurious token precision, robust accuracy, spurious score. Need avoid betting lines. No odds.

Need ensure >=1000 words across sections. We can produce ~2000-2500 words. Need not too verbose but enough. Need exact XML tags. Need maybe use LaTeX. No markdown? Can use text within XML. Need be careful XML special chars? LaTeX with < >? Avoid raw < or >? In XML, tags contain text; if use < in text, might break. We can use \leq, \geq, \in, etc. Use &? Avoid ampersands. Use "and". Use no raw angle brackets. We can use \(\). Fine.

Need formal equations. Let's draft.

Need THINK_TRACE >=400 words. Need multi-hop derivation and gray-zone audit. We can:
- Step 1: define spurious vs genuine token from [PAGE 1].
- Step 2: representation extraction: Mθ([BOS]w[EOS]) mean last layer, cosine similarity, top-K neighbors [PAGE 4]. Formal: \(r_\theta(w)=\frac{1}{L_w}\sum_{\ell=1}^{L_w} h_{\theta,\ell}(w)\) maybe paper says mean output of last layer for tokens. Actually "collecting the mean output of the last layer" for [BOS]w[EOS]. We can state \(r_\theta(w)=\mathrm{MeanPool}(M_\theta([BOS]w[EOS]))\in \mathbb{R}^d\). \(s_\theta(w,v)=\frac{r_\theta(w)^\top r_\theta(v)}{\|r_\theta(w)\|_2\|r_\theta(v)\|_2}\). Neighbors \(N^\theta_K(w)=\mathrm{TopK}_{v\in V} s_\theta(w,v)\).
- Step 3: spurious score equation: \(\mathcal{S}(w)=\frac{1}{K}\sum_{i=1}^K |f^*(N_i^{\theta_0})-f^*(N_i^\theta)|\). Units: probability difference dimensionless, average over K. K=100 [PAGE 5 footnote]. If class 1 probability. Breakdown if K=0, f* undefined, neighbors unstable, non-binary. 
- Step 4: NFL regularizers: \(\mathcal{L}_{CO}=\sum_{m=1}^M \mathrm{cos-dist}(M_\theta(w_{i,m}), M_{\theta_0}(w_{i,m}))\), \(\mathrm{cos-dist}=1-\cos\). \(\mathcal{L}_{CP}=\sum_i(\theta_i-\theta_{i0})^2\). Units: parameter squared. Need note no normalization; λ scale-dependent. 
- Step 5: results: standard RoBERTa spurious scores film 0.03, movie 67.4, people 28.72; unbiased 0.03,0.09,2.79 [PAGE 5]. NFL-CO 0.01,2.28,1.91; NFL-CP 0.01,4.83,2.00 [PAGE 6]. Robust acc standard 53.3/50.3; NFL-CP 91.3/80.9; NFL-PT 92.9/78.2; ideal 95.6/82.2 [PAGE 7].
- Gray-zone audit: correlation not causation; spurious score uses f* reference; detection uses biased model [PAGE 8]; frozen score zero [PAGE 6]; "without auxiliary data" but NFL uses off-the-shelf PLM; DFR uses unbiased data [PAGE 6-7]; natural spurious detection precision 0.60/0.50/0.53 etc [PAGE 8]. Human eval max votes three annotators [PAGE 12]. Need mention no statistical uncertainty? Means over 3 seeds [PAGE 12]. So audit: small seed count, no confidence intervals, human eval limited, synthetic bias ratio 1.0 main, weaker in appendix. 

Need SOURCE_OPERATORS_AND_EQUATIONS section: Include formal LaTeX with assumptions/units/breakdown. Cite pages. We need maybe list operators:
- \(f:X\to Y\), \(M_\theta:X\to\mathbb{R}^d\), \(C_\phi:\mathbb{R}^d\to Y\) [PAGE 3].
- \(D_{biased}\), \(D_{unbiased}\) [PAGE 3].
- \(r_\theta(w)\), cosine similarity.
- spurious score equation 1.
- NFL-CO equation 2.
- NFL-CP equation 3.
- NFL-F: freeze LM weights, train head only [PAGE 5].
- NFL-PT: train continuous prompts, freeze PLM [PAGE 5].
- Maybe "cos-dist" definition.
- Units: \(d\) dimensionless, probabilities dimensionless, score dimensionless. Parameter penalty has units of parameter squared; if parameters dimensionless, dimensionless. Accuracy percent. 
- Breakdown/singularity: \(K=0\), \(\|r\|=0\), f* unavailable, non-binary class, parameter penalty scale-dependent and no normalization, λ=0 reduces to standard fine-tuning, λ→∞ collapses to θ0 and underfits, frozen model spurious score zero but not perfect robustness.

Need include exact quotes:
[PAGE 3] "The task is to learn a model f : X →Y to perform the classification task; f is usually achieved by fine-tuning a PLM Mθ : X →Rd where d is the embedding size, with a classification head Cϕ : Rd →Y which takes the pooled outputs of Mθ as its inputs." Verbatim quote maybe line breaks. Use exact quote with spaces.
[PAGE 5] "we define a token’s spurious score by the mean probability change of class 1 in the prediction when inputting the top K neighbors,2 Ni, to f∗:" and equation. 
[PAGE 6] "minimize the cosine distance between the representation of each token produced by the LM and that of the initial LM."
[PAGE 5] "Linear probing, i.e., freezing the LM weights and using the LM as a fixed feature extractor, can be viewed as the simplest form of NFL."
[PAGE 7] robust accuracy values maybe quote "NFL exhibits low degradation when exposed to spurious correlation." 
[PAGE 1] "NFL effectively prevents erroneous clusters and significantly improves classifier robustness without auxiliary data." Abstract.

Need "RETROCAUSAL_GENEALOGY" historical/scientific lineage. Need mention:
- Spurious correlation lineage: shortcut learning, annotation artifacts, distribution shift. Cite [PAGE 1] mentions Glockner et al., Gururangan et al., Liusie et al. [PAGE 2] related work. [PAGE 2] "some studies design scores to detect spurious tokens... whereas other studies propose methods to mitigate spurious correlations, including dataset balancing... model ensemble, and model regularization." 
- Neighborhood analysis lineage: static embeddings and contextualized reductions (Bommasani et al. 2020) [PAGE 12 appendix B mentions alternative strategy]. The paper says "Bommasani et al., however, consider a vocabulary of only 2005 words..." [PAGE 12]. 
- DFR lineage Kirichenko et al. [PAGE 2, PAGE 6]. 
- Prompt tuning lineage Liu et al. 2022 [PAGE 5, PAGE 12].
- Multi-week traps: 
  1. Confusing spurious score with causal identification; score is correlational and depends on f*. 
  2. Assuming frozen model is fully robust; NFL-F spurious score 0 but robust acc 77.3/70.3 and gaps [PAGE 6, PAGE 7]. 
  3. Synthetic bias ratio 1.0 may overstate; appendix C weaker biases still alignment [PAGE 12]. 
  4. Natural detection precision moderate; top-10 0.60 SST2, 0.50 Jigsaw, 0.50 Amazon; top-20 lower [PAGE 8]. 
  5. Hyperparameter λ=15000 fixed; search set up to 20000 [PAGE 12]. 
  6. Human eval 3 annotators max votes [PAGE 12]. 
Need "multi-week traps" maybe "weeks-long research traps" - okay.

Need "RECURSIVE_THEORY_OF_MIND" crisis habit regression vs counter-trap vs clock. Need frame:
- Crisis habit regression: under biased training, model learns shortcut; when OOD crisis, reverts to spurious cluster; evidence standard fine-tuning robust acc random 53.3/50.3 [PAGE 7]. 
- Counter-trap: NFL regularizers prevent representational misalignment; NFL-CO/CP keep spurious scores low [PAGE 6] and improve robustness. The "counter-trap" is not a model of opponent; it's a constraint. 
- Clock: training schedule and epochs: standard/NFL-CO/NFL-CP 6 epochs; NFL-F 20; NFL-PT 100; prompt length 40 [PAGE 12]. The clock matters because frozen/prompt methods need longer training; without matching compute, comparisons can be confounded. 
- Recursive ToM: no intentional mental states; anthropomorphic language "don't forget" is shorthand. The model has no beliefs; "theory of mind" is only an analyst's recursive model of the model's inductive bias. We should state this to avoid overclaim. 
- Need mention "NFL-PT robust acc 92.9 Amazon, 78.2 Jigsaw; NFL-CP 91.3/80.9; standard 53.3/50.3; ideal 95.6/82.2" [PAGE 7]. 
- "Crisis habit regression vs counter-trap vs clock" maybe compare three hypotheses: H1 crisis habit regression (shortcut dominates under OOD), H2 counter-trap (regularization blocks shortcut), H3 clock (training duration explains). Evidence: NFL-F has zero spurious score due to freezing but less robust than NFL-CP, so clock/compute isn't sole explanation [PAGE 6, PAGE 7]. Need say "clock" not enough because NFL-F trained 20 epochs and NFL-PT 100 epochs, still lower robust acc than NFL-CP 6 epochs on Jigsaw? Actually NFL-CP 80.9 vs NFL-PT 78.2, NFL-F 70.3. So longer epochs don't guarantee robustness. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. Need formal:
Let source's explanatory variables \(S = \{w, \theta, \theta_0, r_\theta, f^*, \lambda, K\}\). Let \(P,B,W\) be physical/biomechanical/weather variables. Equations 1-3 are functions only of S. The model's input space X is text sequences [PAGE 3]. No equations include P,B,W. Therefore any hypothesis \(H: P \to Y\) or \(H: B \to \text{robustness}\) is not identified by this source. Veto as source-scope violation. If a proposed counterfactual requires physical biomechanical weather measurements, it cannot be tested from this paper. If asked to "veto proof", we can provide: \( \frac{\partial \mathcal{S}}{\partial P}=0\) structurally because P absent; \( \frac{\partial \mathcal{L}_{CO}}{\partial B}=0\); \( \frac{\partial \mathcal{L}_{CP}}{\partial W}=0\). This is not empirical zero but structural exclusion. Need be careful: formal derivative zero due to no dependence in defined functions. That's a proof of scope. Mention no weather variables in datasets (Amazon, Jigsaw, SST2) [PAGE 3, PAGE 7]. So cross-layer veto: reject any physical/biomechanical/weather causal claim; only text/embedding-layer claims allowed. If physical constraints are introduced, they need separate data and experimental design. This satisfies.

Need "RLVR_COUNTERFACTUAL_VETOES" 3 verifiable RLVR veto scenarios + predictions. Need define RLVR reward check. Maybe:
Scenario A: Reference-model substitution veto. Replace f* (unbiased reference) with a biased fine-tuned model or random model in Eq 1. Verifiable criterion: human-annotated precision of top-10 spurious tokens. Prediction: if reference is biased, spurious score ranks tokens by bias of reference, not spuriousness; precision falls below paper's 0.60 SST2/0.50 Jigsaw/0.50 Amazon [PAGE 8] or unstable. Veto if precision not above chance. This tests necessity of f*.
Scenario B: Metric-sufficient veto. Use NFL-F, which fixes LM and yields spurious score 0 [PAGE 6], as if low score implies robustness. Verifiable criterion: robust accuracy on \(\hat D_{unbiased}\) [PAGE 7]. Prediction: NFL-F robust acc 77.3 Amazon /70.3 Jigsaw, below NFL-CP 91.3/80.9 and ideal 95.6/82.2 [PAGE 7]. Veto the claim "spurious score is sufficient for robustness" because zero score coexists with nontrivial robustness gap. 
Scenario C: Regularization monotonicity veto. Sweep λ beyond paper's grid {1,10,100,1000,10000,15000,20000} [PAGE 12] and test both biased and robust accuracy. Prediction: at very high λ, parameter movement suppressed; spurious score low but both accuracies drop; non-monotonic. Veto universal "any sensible restriction helps" [PAGE 6] if robust accuracy collapses at high λ. Need define verifiable: robust acc drop > e.g. 5 points from λ=15000. Also check λ=0 recovers standard fine-tuning. 
Maybe Scenario D: Natural-vs-synthetic transfer veto. But only 3. Good.

Need ensure no betting lines. Avoid "odds", "spread", "moneyline", "total". We can mention "accuracy" not betting. Fine.

Need exact XML. We can include paragraphs. Need ensure no raw ampersand. Use "and". Avoid "&" in text. Use "vs." okay. Use "≤"? Use LaTeX \leq. No raw < in XML text. Avoid "<" in "λ<..." use \lambda \to 0. Use "greater than". Good.

Need total >=1000 words. We'll write ~2500. Need maybe not too huge but enough.

Need perhaps include page markers exact. Use [PAGE 1], etc.

Let's compose carefully.

Potential issue: "SOURCE_OPERATORS_AND_EQUATIONS" must include "page citations and breakdown" - we can include "Breakdown regimes" subsection. Good.

Potential issue: "DRIVE SOURCE" maybe from a sports betting prompt template? But no betting lines. We're analyzing paper. Good.

Need maybe mention "GSE + GSI Frontier Reasoning Foundry" not necessary in answer. But answer should be in XML.

Let's draft. Ensure each XML section present exactly. Need no markdown code fences? It's okay. But XML tags with text. Use LaTeX inside. Need escape? The system will parse? We just output text. Use no raw `<` except tags. In equations, use \leq etc. Use "R^d" not \(R^d\) maybe okay. Use \(...\). Fine.

Need include verbatim quotes. Use quotation marks. For exact quote with equation, maybe quote text. Need not quote entire equation? We can quote. The equation is from page 5: 
"we define a token’s spurious score by the mean probability change of class 1 in the prediction when inputting the top K neighbors,2 Ni, to f∗:
1
K
K
X
i=1
|f∗(N θ0
i ) −f∗(N θ
i )|. (1)"
We can quote as "we define a token’s spurious score by the mean probability change of class 1 in the prediction when inputting the top K neighbors ... to f*" [PAGE 5]. Good. The exact OCR is messy. We can present formal equation. Good.

Need quote "Spurious tokens receive high spurious scores while non-spurious tokens receive low spurious scores." [PAGE 5]. Good.

Need quote "NFL effectively prevents erroneous clusters and significantly improves classifier robustness without auxiliary data." [PAGE 1]. Good.

Need quote "We observe that as we increase the regularization term weights, the drop in in-distribution accuracy is insignificant but the improvement in robustness is considerable." [PAGE 12]. Good.

Need quote "any sensible restriction on the LM to preserve each token’s semantics is helpful in learning a robust model." [PAGE 6]. Good.

Need quote "This experiment does not apply to NFL-F/NFL-PT because they obtain a spurious score of 0 simply by fixing the language model." [PAGE 6]. Good.

Need quote "we simply use the model (RoBERTa) fine-tuned on the potentially biased dataset that we seek to perform detection on." [PAGE 8]. Good.

Need quote "Precision of top detected spurious tokens according to human annotators." [PAGE 8] maybe.

Need maybe mention Table 7 values: Ours SST2 0.60/0.50/0.53; Jigsaw 0.50/0.45/0.43; Amazon 0.50/0.40/0.40; Wang et al. SST2 0.40/0.35/0.32 [PAGE 8]. Good.

Need "units SI/information/probability units" - We can state probabilities dimensionless in [0,1], bits if log? But paper doesn't use bits. We can say no information-theoretic unit is assigned. Cosine similarity dimensionless. Parameter penalty has squared parameter units. Accuracy percent. This meets. Maybe include "no SI physical units are used." Good.

Need "exact singularity/breakdown regimes" - enumerate.

Need "zero toy equations" - Our equations are from source or standard definitions; no invented fake ratios. We can avoid inventing new ratios. The derivative zero proof is standard, not fake. Maybe "structural derivative" okay. We shouldn't invent "Force/Fatigue". Fine.

Let's write.

Need maybe "THINK_TRACE" >=400 words. We'll write 600. Then others. Total ~2500. Good.

Let's ensure no raw "<" in text: In "λ<..." avoid. Use "less than". In "K>0" raw > is okay? XML text can contain >; `<` is problematic. Avoid `<` entirely, use "less than" or \lt. In LaTeX use \lt? TeX has \lt? Use \leq, \geq. Avoid literal < and >. We can use "\(K \gt 0\)" but `>` ok. But safe use \gt. No raw ampersand. Avoid "R&D". Good.

Need final only XML. No preamble. Let's produce.
</NATIVE_REASONING>

<THINK_TRACE>
The source’s central multi-hop argument is: spurious correlations in text classification are not merely label-frequency artifacts; they become representational misalignments in the embedding neighborhood. The first hop is definitional. The paper distinguishes spurious from genuine tokens: “we call PERFORMANCES a spurious token, i.e., a token that does not causally affect a task label. On the other hand, a genuine token such as EXCELLENT is a token that does causally affect a task label” [PAGE 1]. The second hop is representational. The model is decomposed as \(M_\theta:X\to\mathbb{R}^d\) and \(C_\phi:\mathbb{R}^d\to Y\), where \(d\) is embedding size [PAGE 3]. Neighborhood analysis extracts \(r_\theta(w)\) by feeding \(\mathrm{[BOS]}\,w\,\mathrm{[EOS]}\) through \(M_\theta\), taking the mean last-layer output, and ranking vocabulary tokens by cosine similarity [PAGE 4]. The third hop is diagnostic. The proposed spurious score is the mean absolute change in the reference model’s class-1 probability when the top-\(K\) neighbors change from \(\theta_0\) to \(\theta\): \(\mathcal{S}(w)=\frac{1}{K}\sum_{i=1}^{K}|f^*(N_i^{\theta_0})-f^*(N_i^{\theta})|\) [PAGE 5]. The fourth hop is interventional in spirit but regularizing in practice: NFL prevents misalignment by freezing, output-constraining, parameter-constraining, or prompt-tuning the language model [PAGE 5-6]. The fifth hop is empirical: standard RoBERTa gets spurious scores FILM 0.03, MOVIE 67.4, PEOPLE 28.72 on biased data, while NFL-CO reduces them to 0.01, 2.28, 1.91 and NFL-CP to 0.01, 4.83, 2.00 [PAGE 5-6]. Robust accuracy moves from 53.3 and 50.3 for standard fine-tuning to 91.3 and 80.9 for NFL-CP on Amazon binary and Jigsaw, with ideal-model values 95.6 and 82.2 [PAGE 7].

The gray-zone audit is where the reasoning must slow down. First, the score is not a causal identification proof; it is a neighborhood-stability proxy. It depends on \(f^*\), the reference model trained on \(D_{unbiased}\), and the paper explicitly uses a biased fine-tuned RoBERTa when \(f^*\) is unavailable for natural detection [PAGE 8]. Thus a low score can mean either preserved semantics or a frozen model with no representational movement. The paper states: “This experiment does not apply to NFL-F/NFL-PT because they obtain a spurious score of 0 simply by fixing the language model” [PAGE 6]. That is a crucial degenerate case: zero spurious score is not equal to full robustness. Second, the main synthetic bias ratio is 1.0, though Appendix C tests 0.8 and 0.9 and reports that “erroneous alignment also occurs with weaker biases” [PAGE 12]. Third, natural detection precision is moderate: top-10 precision is 0.60 for SST2, 0.50 for Jigsaw, and 0.50 for Amazon; top-20 and top-50 are lower [PAGE 8]. Fourth, regularization weight is fixed at 15000 after a grid search over \(\{1,10,100,1000,10000,15000,20000\}\) [PAGE 12]. That is a scale-dependent penalty, so transfer across architectures or parameterizations is not guaranteed. Fifth, accuracies are means of 3 trials over seeds \(\{0,24,\text{seed}\}\) [PAGE 12], but the source does not report confidence intervals. The gray-zone conclusion is therefore: the paper gives strong evidence for a representational mechanism and a practical mitigation family, but it does not prove that spurious score is a universal causal detector, nor that NFL’s hyperparameters are architecture-invariant.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators from the source. The task object is \(f:X\to Y\), implemented by fine-tuning \(M_\theta:X\to\mathbb{R}^d\) with head \(C_\phi:\mathbb{R}^d\to Y\) [PAGE 3]. The domains are \(D_{biased}\), where spurious correlations can be exploited, and \(D_{unbiased}\), where they do not hold [PAGE 3]. The embedding map for a token \(w\) is \(r_\theta(w)=\mathrm{MeanPool}\left(M_\theta(\mathrm{[BOS]}\,w\,\mathrm{[EOS]})\right)\in\mathbb{R}^d\) [PAGE 4]. Cosine similarity is \(s_\theta(w,v)=\frac{r_\theta(w)^\top r_\theta(v)}{\|r_\theta(w)\|_2\|r_\theta(v)\|_2}\), dimensionless. The top-\(K\) neighbor set is \(N_K^\theta(w)=\mathrm{TopK}_{v\in V}s_\theta(w,v)\), with \(K=100\) in the analysis [PAGE 5]. The spurious score is exactly the source’s Eq. (1): \(\mathcal{S}(w)=\frac{1}{K}\sum_{i=1}^{K}\left|f^*(N_i^{\theta_0})-f^*(N_i^{\theta})\right|\), where \(f^*\) is a reference model and the output is a class-1 probability in \([0,1]\); the score is dimensionless [PAGE 5]. The paper says: “we define a token’s spurious score by the mean probability change of class 1 in the prediction when inputting the top K neighbors ... to f*” [PAGE 5]. The NFL-CO regularizer is \(\mathcal{L}_{CO}=\sum_{m=1}^{M}\mathrm{cos-dist}\left(M_\theta(w_{i,m}),M_{\theta_0}(w_{i,m})\right)\), with \(\mathrm{cos-dist}(a,b)=1-\frac{a^\top b}{\|a\|_2\|b\|_2}\), dimensionless [PAGE 6]. The NFL-CP regularizer is \(\mathcal{L}_{CP}=\sum_i(\theta_i-\theta_{i0})^2\), with squared-parameter units unless parameters are treated as dimensionless [PAGE 6]. NFL-F freezes the LM and trains only the classification head; NFL-PT trains continuous prompts while freezing PLM parameters [PAGE 5]. The source states: “Linear probing, i.e., freezing the LM weights and using the LM as a fixed feature extractor, can be viewed as the simplest form of NFL” [PAGE 5]. It also states: “minimize the cosine distance between the representation of each token produced by the LM and that of the initial LM” [PAGE 6].

Units and assumptions: all probabilities and accuracies are dimensionless; accuracy is reported in percent [PAGE 7]. No SI physical units appear in the model. The cosine similarity assumes nonzero representation norms. Equation (1) assumes binary classification because “both tasks presented in this work are binary classification” [PAGE 5]. Equation (2) assumes token-level alignment is meaningful and that \(M_{\theta_0}\) is an acceptable semantic anchor. Equation (3) assumes parameter displacement is a meaningful proxy for semantic displacement, which is scale-dependent and not normalized.

Breakdown and singularity regimes: (i) if \(K=0\), Eq. (1) is undefined; (ii) if \(r_\theta(w)=0\) or \(r_\theta(v)=0\), cosine similarity is undefined; (iii) if \(f^*\) is unavailable or itself biased, Eq. (1) measures reference-model instability rather than spuriousness; the paper uses a biased RoBERTa for natural detection [PAGE 8]; (iv) if the task is multiclass, the class-1 probability reduction is not generally sufficient; (v) if \(\lambda=0\), NFL-CO and NFL-CP reduce toward standard fine-tuning; (vi) if \(\lambda\to\infty\), parameter or output movement collapses toward \(\theta_0\), causing underfitting even if spurious score is low; (vii) if the LM is frozen, spurious score is zero by construction, but robustness is not automatically perfect [PAGE 6-7]. These are exact breakdown conditions, not empirical guesses.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage is shortcut learning under distribution shift. The paper places itself against earlier detection and mitigation work: “Some studies design scores to detect spurious tokens ... whereas other studies propose methods to mitigate spurious correlations, including dataset balancing ... model ensemble, and model regularization” [PAGE 2]. Its novelty is to ask why spurious tokens acquire excessive importance, answering with neighborhood misalignment in embedding space [PAGE 1-2]. The diagnostic lineage runs through static and contextualized embedding comparisons; Appendix B notes an alternative strategy of aggregating contextualized representations over a huge corpus, but says Bommasani et al. used only 2005 words and 100K–1M sentences, while the paper’s simple \(\mathrm{[BOS]}\,w\,\mathrm{[EOS]}\) strategy scales to a 50265-token vocabulary [PAGE 12]. The mitigation lineage runs through frozen feature extractors, shallow-model ensembles, DFR, and prompt tuning. The paper contrasts itself with DFR, which “has access to both Dbiased (during the training of feature extractors) and Dunbiased (during the re-training of classifiers)” [PAGE 7]. NFL instead uses off-the-shelf PLMs as semantic anchors [PAGE 5]. Prompt-tuning v2 is cited as the NFL-PT implementation [PAGE 5, PAGE 12]. The historical trap is retrocausal overreach: because a token’s neighbors change after fine-tuning, one may infer that the token “caused” the label. The source explicitly defines spurious tokens as those that do not causally affect the label [PAGE 1], so neighborhood change is a diagnostic shadow, not a causal intervention.

Multi-week traps. Trap 1: treating spurious score as a universal detector. Natural detection precision is 0.60/0.50/0.53 for SST2 top-10/20/50, 0.50/0.45/0.43 for Jigsaw, and 0.50/0.40/0.40 for Amazon [PAGE 8]. That is useful but not near-perfect. Trap 2: assuming frozen LMs are robust because their score is zero. NFL-F reaches robust accuracy 77.3 on Amazon binary and 70.3 on Jigsaw, versus 91.3 and 80.9 for NFL-CP, and the ideal model reaches 95.6 and 82.2 [PAGE 7]. Trap 3: assuming synthetic bias ratios generalize automatically. The main experiments use bias ratio 1.0, while weaker 0.8 and 0.9 biases are only in Appendix C [PAGE 12]. Trap 4: treating \(\lambda=15000\) as universal. The search grid stops at 20000, and the source says “as we increase the regularization term weights, the drop in in-distribution accuracy is insignificant but the improvement in robustness is considerable” [PAGE 12]; that statement is bounded by the tested grid. Trap 5: ignoring training-clock confounds. Standard fine-tuning, NFL-CO, and NFL-CP use 6 epochs; NFL-F uses 20; NFL-PT uses 100 with prompt length 40 [PAGE 12]. Cross-method comparisons must account for these schedules. Trap 6: overreading the human evaluation. It uses maximum votes of three independent annotators with a causal-relatedness question [PAGE 12], which is a reasonable but small protocol. These traps matter over weeks because a single high-precision table or one low spurious score can be mistaken for a general law.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The source does not attribute beliefs, intentions, or theory of mind to the classifier. “doN’t Forget your Language” is a mnemonic for regularization, not a mental-state claim. The recursive model here is the analyst’s model of the model’s inductive bias. Under this reading, “crisis habit regression” is the ERM habit: when the biased domain is the training crisis, the model latches onto tokens such as MOVIE, BOOK, or PEOPLE and aligns their neighborhoods with genuine positive, negative, or toxic words [PAGE 4-5]. The evidence is stark: standard RoBERTa’s robust accuracy is 53.3 on Amazon binary and 50.3 on Jigsaw, near random guessing, while biased accuracy is 95.7 and 86.5 [PAGE 7]. That is the regression-to-shortcut pattern: high in-distribution confidence with near-chance out-of-distribution behavior.

The “counter-trap” is NFL. It is not a second agent; it is a constraint that blocks the erroneous alignment. NFL-CO minimizes output-representation drift and NFL-CP penalizes parameter drift [PAGE 6]. NFL-PT freezes the PLM and trains prompts, while NFL-F freezes the PLM and trains only the head [PAGE 5]. The paper’s claim is carefully limited: “any sensible restriction on the LM to preserve each token’s semantics is helpful in learning a robust model” [PAGE 6]. The empirical counter-trap works: NFL-CP achieves 91.3 robust accuracy on Amazon binary and 80.9 on Jigsaw; NFL-PT achieves 92.9 and 78.2; the ideal model achieves 95.6 and 82.2 [PAGE 7]. The paper also reports that NFL “effectively prevents erroneous clusters and significantly improves classifier robustness without auxiliary data” [PAGE 1].

The “clock” is the training schedule and hyperparameter clock. Standard fine-tuning, NFL-CO, and NFL-CP use 6 epochs; NFL-F uses 20; NFL-PT uses 100; prompt length is 40 [PAGE 12]. This matters because a frozen or prompt-based counter-trap may need more optimization steps to fit the task, and a short-clock comparison can understate or overstate robustness. However, the clock is not the whole story: NFL-F, trained for 20 epochs and yielding spurious score 0 by construction, still has lower robust accuracy than NFL-CP, which is trained for only 6 epochs [PAGE 6-7]. Thus the recursive audit rejects a pure “more training time fixes robustness” theory. The best-supported theory is: crisis habit regression arises from representational misalignment; the counter-trap works by preserving semantic neighborhoods; the clock modulates optimization but does not by itself determine robustness. The model has no recursive ToM; the analyst’s recursive ToM must therefore remain falsifiable and tied to measurable quantities such as spurious score, robust accuracy, and \(\lambda\)-sensitivity.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather variables are absent from the source’s formal layer. Let the source’s explanatory set be \(S=\{w,\theta,\theta_0,r_\theta,f^*,K,\lambda\}\). The model maps text sequences to labels, \(f:X\to Y\), with \(M_\theta:X\to\mathbb{R}^d\) [PAGE 3]. Equations (1), (2), and (3) are functions only of tokens, embeddings, parameters, reference-model probabilities, and regularization weights [PAGE 5-6]. Therefore, for any physical variable \(P\), biomechanical variable \(B\), or weather variable \(W\), the source-implied structural dependencies are \(\partial\mathcal{S}/\partial P=0\), \(\partial\mathcal{L}_{CO}/\partial B=0\), and \(\partial\mathcal{L}_{CP}/\partial W=0\), not because empirical effects were measured and found zero, but because those variables do not enter the defined functions. The datasets are Amazon reviews, Jigsaw comments, and SST2 movie reviews [PAGE 3, PAGE 7]; no weather station, biomechanical sensor, or physical measurement is described.

Adjudication: a claim that spurious correlation is caused by physical biomechanics or weather is vetoed as a source-scope violation. A claim that weather changes text-label distribution could be a separate hypothesis, but it would require new data and cannot be verified from this paper. The cross-layer proof is thus an exclusion proof: the only admissible causal layer in this source is the text-to-embedding-to-classifier layer. Any downstream physical interpretation must be labeled speculative and tested outside this corpus. If a proposed counterfactual requires physical or biomechanical measurements, the correct verdict is “not identifiable from this source,” not “confirmed” or “refuted.” This veto protects against category errors: the paper’s mechanism is neighborhood misalignment, not a physical force, fatigue process, or meteorological driver.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Reference-model substitution veto. Replace the reference \(f^*\) in Eq. (1) with a deliberately biased model or a random model, then rank tokens by \(\mathcal{S}(w)\). Verifiable criterion: human-annotated precision of the top-10 detected spurious tokens, compared with the paper’s reported 0.60 for SST2, 0.50 for Jigsaw, and 0.50 for Amazon [PAGE 8]. Prediction: the ranking will shift toward tokens that are unstable under the substitute model, not tokens that are causally unrelated to the label; precision should fall toward chance or become dataset-dependent. Veto condition: if the substitute model does not degrade precision, the claim that \(f^*\) must be an unbiased semantic anchor is falsified for that setting.

Scenario 2: Metric-sufficiency veto. Use NFL-F as a zero-spurious-score model and test whether low score alone implies robustness. Verifiable criterion: robust accuracy on \(\hat{D}_{unbiased}\), the subset where every example contains at least one spurious token [PAGE 7]. Prediction: NFL-F will have score 0 by construction [PAGE 6] but robust accuracy 77.3 on Amazon binary and 70.3 on Jigsaw, below NFL-CP at 91.3 and 80.9 and below the ideal model at 95.6 and 82.2 [PAGE 7]. Veto condition: if zero score coincided with ideal robust accuracy, spurious score could be treated as sufficient; the source’s own numbers predict it is not.

Scenario 3: Regularization-monotonicity veto. Sweep \(\lambda\) beyond the reported grid \(\{1,10,100,1000,10000,15000,20000\}\) [PAGE 12] for NFL-CO and NFL-CP, measuring both biased accuracy and robust accuracy. Verifiable criterion: a pre-registered robust-accuracy drop, for example a drop greater than 5 percentage points from the \(\lambda=15000\) result, together with a biased-accuracy drop. Prediction: at very high \(\lambda\), parameter or output movement is suppressed, spurious score falls, but both accuracies degrade; the relationship is non-monotonic or plateauing, not “any restriction always helps” without bound. Veto condition: if robust accuracy continues improving monotonically to arbitrarily large \(\lambda\) with no in-distribution cost, the paper’s stated tradeoff and the finite search grid would be insufficient; the source predicts the opposite. These three RLVR checks are verifiable because they use the paper’s own metrics, datasets, and reported numbers, and they can be run as explicit reward-veto tests rather than narrative claims.
</RLVR_COUNTERFACTUAL_VETOES>