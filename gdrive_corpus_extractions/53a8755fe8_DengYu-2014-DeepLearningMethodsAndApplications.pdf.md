---
source: "DengYu-2014-DeepLearningMethodsAndApplications.pdf"
folder: "/GSE-GSI-Mega-Sweep-2026-11-06/books-d-models"
pages: 197
model: deepseek/deepseek-v4.1-flash-1017
words: 8202
---

<NATIVE_REASONING>
The user wants deep technical content from the Deng & Yu 2014 monograph. Let me construct a rigorous multi-section analysis with formal LaTeX, page citations, verbatim quotes, and the required RLVR counterfactual veto scenarios. The "GSE+GSI Frontier Reasoning Foundry" framing wants a deep multi-hop derivation and a gray-zone audit, source operators and equations, retrocausal genealogy, recursive theory of mind, cross-layer veto adjudication, and at least 3 RLVR counterfactual veto scenarios with predictions. No betting lines. At least 1000 words total across sections; THINK_TRACE at least 400 words.

I need to cite exact [PAGE N] markers and verbatim quotes from the provided text. Let me pull out the key equations from pages 52-54, 64-65, 69, 123-125, etc.

Key equations:
- RBM joint distribution p(v,h;θ) = exp(−E(v,h;θ))/Z, Z = Σ_v Σ_h exp(−E(v,h;θ)) [PAGE 52]
- Bernoulli-Bernoulli energy E(v,h;θ) = −Σ_i Σ_j w_ij v_i h_j − Σ_i b_i v_i − Σ_j a_j h_j [PAGE 52]
- conditional p(h_j=1|v;θ) = σ(Σ_i w_ij v_i + a_j), p(v_i=1|h;θ) = σ(Σ_j w_ij h_j + b_i) [PAGE 52]
- Gaussian-Bernoulli energy E(v,h;θ) = −Σ_iΣ_j w_ij v_i h_j − (1/2)Σ_i (v_i − b_i)^2 − Σ_j a_j h_j [PAGE 52]
- p(v_i|h;θ) = N(Σ_j w_ij h_j + b_i, 1) [PAGE 53]
- Δw_ij = E_data(v_i h_j) − E_model(v_i h_j) [PAGE 53]
- CD-1: v0 at data, h0 ~ p(h|v0), v1 ~ p(v|h0), h1 ~ p(h|v1) [PAGE 53]
- DSN: y_i = U^T h_i, h_i = σ(W^T x_i) [PAGE 64]
- E = (1/2) Σ_i ||y_i − t_i||^2 = (1/2) Tr[(Y−T)(Y−T)^T] [PAGE 64]
- U = (HH^T)^{-1} H T^T = F(W) [PAGE 65]
- Lagrangian E = (1/2)Σ_i ||G_i(U,W) − t_i||^2 + λ||U − F(W)|| [PAGE 65]
- ∂E/∂W = 2X[H^T ∘ (1−H)^T ∘ [H†(H T^T)(T H†) − T^T(T H†)]] — that's what's printed; I should reproduce carefully as given. The text: "∂E/∂W = 2X[H T ◦(1 −H)T ◦[H †(HT T)(TH †) −TT(TH †)]]" where H† = H^T(HH^T)^{-1}. It's garbled OCR; I should note that and present the standard form but flag the OCR ambiguity. Good—this is a gray-zone audit item.
- K-DSN: minimize (1/2)Tr[EE^T] + (C/2)U^T U subject to T − U^T G(X) = E [PAGE 69]
- a = (CI + K)^{-1} T, K = G(X)G^T(X), K_nm = g^T(x_n)g(x_m) [PAGE 69]
- y(x) = U^T g(x) = a^T G(X) g(x) = k^T(x)(CI + K)^{-1} T [PAGE 69]
- DSSM: l_1 = W_1 x, l_i = f(W_i l_{i−1} + b_i), y = f(W_N l_{N−1} + b_N) [PAGE 123]
- f(x) = (1 − e^{−2x})/(1 + e^{−2x}) = tanh(x) [PAGE 124]
- R(Q,D) = cosine(y_Q, y_D) = y_Q^T y_D/(||y_Q|| ||y_D||) [PAGE 124]
- P(D|Q) = exp(γR(Q,D))/Σ_{D'∈D} exp(γR(Q,D')) [PAGE 124]
- L(Λ) = log Π P(D^+|Q) [PAGE 125]
- DBN greedy layer-wise improves variational lower bound [PAGE 55]
- DNN-HMM interfacing [PAGE 58-59]
- RNN primal-dual: cross entropy maximized subject to infinity norm of recurrent matrix less than fixed value [PAGE 89]
- Dropout: hidden unit randomly omitted with fixed probability p=0.5; decoding with weights scaled by (1−p) or training scaling 1/(1−p) [PAGE 95]
- WER table [PAGE 79]

Also Table 7.1 numbers: TIMIT GMM w/ hidden dynamics 24.8%, DNN 5×2048 23.0%; Voice Search SER GMM MPE 36.2%, DNN 30.1%; Switchboard 309h GMM BMMI 23.6%, DNN 7×2048 15.8%; 2000h GMM 21.7%, DNN 14.6%.

Gray-zone items: OCR of ∂E/∂W has superscript collapse (H T vs H^T, TT vs T T^T); "three orders of magnitudes" vs earlier "one order of magnitude" in caption/text inconsistency — [PAGE 79] says "the training data are increased approximately one order of magnitude from one task to the next" then Table caption says "From sub-tables A to D, the training data are increased approximately three orders of magnitudes." Actually 3 hours → 24-48h → 309h → 2000h is about 3 orders of magnitude total (2.8 orders), but per-step it's ~1 order. So both statements are true under different readings; that's a genuine gray-zone audit.

Also inconsistency: [PAGE 95] "Seltzer and Yu [325]" vs earlier [PAGE 81] "Seltzer et al. [325]" — reference is Seltzer, Yu, and Wang. Minor.

Another: [PAGE 21-22] Figure 2.3/2.4 claims WER flat then drops; no numbers given, only qualitative.

Another: [PAGE 88-89] "Chen and Deng [48] and Deng and Chen [85]" — primal-dual. The constraint "infinity norm of the recurrent matrix of the RNN is less than a fixed value to guarantee the stability of RNN dynamics" — that's echo-state property, spectral radius < 1 is the standard condition, not infinity norm. Gray zone: infinity norm is a sufficient but not necessary condition for spectral radius < 1; ‖W‖_∞ ≥ ρ(W). So the paper's claim is a conservative sufficient condition. Good gray-zone audit.

Another: [PAGE 3] DOI shows "[PHONE]" — redaction artifact.

Another: [PAGE 44] says "312 unit bottleneck code layer"; Figure 4.3 caption "312-bit VQ" and "312-bit autoencoder"; Figure 4.4 "A total of 312 binary codes are with one for each single frame"; Figure 4.6 "936 binary codes for three adjacent frames"; Figure 4.9 "2000 binary codes with one for each single frame". So 312 per frame × 3 = 936 for N=3. But then Figure 4.9 says 2000 codes for a single frame, contradicting the fixed 312-unit bottleneck. Gray zone: the bottleneck dimension appears to vary across experiments (312 vs 2000) — the text on page 43 describes quantization threshold 0.5 at the coding layer, but doesn't state that bottleneck width was varied. Good audit item.

Also: Figure 4.2 caption says "N = 1, 3, 9, and 13" and text says "lower reconstruction errors for N = 9 and N = 13 are clearly seen" [PAGE 44].

Also note [PAGE 42] says "two RBM's can then be composed to form a deep belief net (DBN)"; and [PAGE 41] says Gaussian-Bernoulli RBM with "one hidden layer of 500 to 3000 binary latent variables" — that's the hidden layer, not the code layer. So the "312" is the code layer above. Fine.

Cross-layer veto: physical/biomechanical/weather veto proof. For this source, the "physical layers" are: (1) audio/speech signal physics — sampling rate, Nyquist, vocal tract length, formant frequencies; (2) silicon/compute physics — GPGPU FLOPs, memory bandwidth; (3) information-theoretic limits — channel capacity, perplexity, entropy; (4) biomechanical — articulatory dynamics, coarticulation, elasticity of speech temporal dynamics [PAGE 58-59]. I should construct vetoes: e.g., Nyquist veto on 8kHz vs 16kHz bandwidth in the mixed-bandwidth DNN [PAGE 151]; the ReLU saturation/vanishing-gradient veto; the K-DSN kernel-matrix O(N^2) memory and O(N^3) inversion veto on scalability [PAGE 71]; the RBM partition function intractability veto [PAGE 53].

Let me be careful: "weather veto" is a generic requirement of the template. I can map weather to something in the source—there isn't weather. I should handle honestly: the source contains no meteorological layer; the nearest analogue is acoustic-environment noise (Aurora4, C-MMSE, SPLICE) [PAGE 81-82]. I'll adjudicate that explicitly rather than fabricate. That's the correct "gray-zone audit" behavior.

Retrocausal genealogy: Hinton & Salakhutdinov 2006 [163,164], Bengio 2006 [28], Ranzato 2006 [297], LeCun 1998 CNN [212], TDNN 1989 [382], Fukushima-Lang-Waibel-Hinton 1990 [202], Bourlard & Morgan 1993 [42], Robinson 1994 [304], Hochreiter 1991 [167], Hochreiter & Schmidhuber 1997 [168], Breiman 1996 stacked regression [44], Wolpert 1992 stacked generalization [392], Cohen & Carvalho 2005 [60], Vinyals 2012 [377], Hutchinson 2013 [181], Deng 2011 [106]/2012 [110], Huang 2013 [171], Huang/He/Gao/Deng 2013 DSSM [172], Shen 2014 C-DSSM [328], Krizhevsky 2012 [198], Zeiler & Fergus 2013 [436], Frome 2013 DeViSE [117], Mikolov 2013 [246,250], Socher 2013 [340,347], Graves 2013 [135,136], Mnih & Hinton 2007 [252], Morin & Bengio 2005 [263], Schwenk 2012 [320], Sarikaya 2011 [318].

Multi-week traps: The template asks for "multi-week traps" — I interpret as traps that unfold over multi-week horizons in a deployment/research program. I'll frame: (T1) chasing DBN pre-training as a permanent requirement after data scale grows [PAGE 156: "the DBN pre-training that ignited a new era of (deep) machine learning research appears unnecessary if enough data and computing power are used"]; (T2) treating the DSN's closed-form U as globally optimal; (T3) K-DSN kernel scaling O(N^3) blowup; (T4) frame-level cross-entropy vs sequence MMI mismatch [PAGE 92]; (T5) language identification / speaker recognition where generative pre-training features fail [PAGE 155: "it failed to work for some other tasks that have been explored (e.g., language identification or speaker recognition; unpublished)"].

RLVR counterfactual vetoes: 3 verifiable scenarios with predictions. Each should be a testable counterfactual: if X were true, we'd observe Y; the source predicts Z. E.g.:

1. Bottleneck-code-rate counterfactual: If the deep autoencoder's 312-bit code were an information-theoretic optimum rather than a learned encoder, then increasing code width to 936 (N=3) would not reduce reconstruction error. Prediction: reconstruction error monotone decreasing in N with diminishing returns; testable via PESQ/spectral distortion. Actually better: the source shows 312 codes at N=1 vs 936 at N=3 with lower error [PAGE 44, 46]. Counterfactual veto: if the code were merely a VQ of equal rate, the deep autoencoder would show no advantage; source shows red curve below blue [PAGE 44-45]. Prediction: at matched bit rate, AE residual spectrogram has energy concentrated in low-energy time-frequency cells (fricative onsets) vs VQ spreading error.

2. Convexity counterfactual on DSN: If U = (HH^T)^{-1}HT^T were not the exact minimizer (i.e., if the MSE were non-quadratic in U), then batch-mode learning would be as noisy as BP. Prediction: with H fixed and U solved in closed form, the residual ||Y − T||_F^2 should equal the projection residual and be a monotonically non-increasing function of module count; test by instrumenting residual vs module index. If residuals increase, the closed-form assumption is violated (e.g., bias augmentation omitted [PAGE 64]).

3. RBM CD-1 counterfactual: If CD-1's (v1,h1) were an unbiased estimate of E_model(v_i h_j), then increasing CD-k would not reduce RBM generative log-likelihood gap. Prediction: PCD-k (PAGE 53-54: "Both work better than CD when using the RBM as a generative model") gives monotone improvement in held-out log-likelihood; CD-1 bias scales as O(k^{-1}) in mixing time. Veto: if a task is purely discriminative fine-tuned, CD-1 vs PCD should show no difference — but source says PCD better "when using the RBM as a generative model," so the veto prediction is: after DBN→DNN discriminative fine-tuning, CD-1 and PCD initialized DNNs converge to within noise on classification error. That's a genuine testable prediction distinguishing the two claims.

Also could do a 4th: kernel K-DSN with random Fourier features [PAGE 71] — if random Fourier features approximate the Gaussian kernel to ε, then K-DSN with D random features should approach exact-kernel NDCG/accuracy as D grows; veto if D=1000 already saturates.

I'll do 3 as required, maybe 4.

Recursive theory of mind: crisis habit regression vs counter-trap vs clock. Interpret: In a crisis (e.g., speech recognition plateau, or a deep-learning team under pressure), the habit regression is to revert to shallow/convex models (SVMs, GMM-HMM) because they're tractable — the source documents exactly this regression [PAGE 16: "This difficulty is partially responsible for steering away most of the machine learning and signal processing research from neural networks to shallow models that have convex loss functions"]. The counter-trap is the opposite: over-committing to generative pre-training as a universal ritual (the "pre-training cargo cult") — source says it fails for language ID / speaker recognition [PAGE 155]. The clock is the compute/data clock: GPU + data scale changes which strategy is rational [PAGE 11, 156]. And theory-of-mind: modeling what the other researchers believe — the "hype cycle" [PAGE 19-21] is literally a theory-of-mind model of collective belief. That's a great mapping. I'll build a 3-agent recursion: (a) the shallow-model incumbent, (b) the pre-training believer, (c) the scale-maximalist; and a 4th-order observer (the reviewer) who must predict which belief each will hold at time t given the compute clock.

Now the word count. Need ≥1,000 words total across the exact XML sections, with THINK_TRACE ≥400 words. I'll aim for ~3,000-4,000 words total to be safe, with THINK_TRACE ~900-1000 words.

Let me be careful with verbatim quotes — must match source text exactly. Let me collect precise quotes:

PAGE 16: "This difficulty is partially responsible for steering away most of the machine learning and signal processing research from neural networks to shallow models that have convex loss functions (e.g., SVMs, CRFs, and MaxEnt models), for which the global optimum can be efficiently obtained at the cost of reduced modeling power"

PAGE 17: "A DBN is composed of a stack of restricted Boltzmann machines (RBMs)."

PAGE 17: "initializing the weights of an MLP with a correspondingly configured DBN often produces much better results than that with the random weights"

PAGE 53: "Unfortunately, Emodel(vihj) is intractable to compute."
PAGE 53-54: "Both work better than CD when using the RBM as a generative model."

PAGE 65: "Assuming H = [h1, . . . , hi, . . . , hN] is known, or equivalently, W is known. Then, setting the error derivative with respective to U to zero gives U = (HH T)−1HTT = F(W)"

PAGE 65: "Compared with conventional backpropagation, the above method has less noise in gradient computation due to the exploitation of the explicit constraint U = F(W)."

PAGE 71: "as inherent in any kernel method, the scalability becomes an issue also for the K-DSN as the training and testing samples become very large."

PAGE 79: "the relative error rate reduction increases substantially with increasing amounts of training data — from approximately 10% to 20%, and then to 30%."
PAGE 79 caption: "From sub-tables A to D, the training data are increased approximately three orders of magnitudes."
PAGE 78: "the training data are increased approximately one order of magnitude from one task to the next."

PAGE 155: "it failed to work for some other tasks that have been explored (e.g., language identification or speaker recognition; unpublished)."
PAGE 155: "For these tasks, the features extracted at the generative pre-training phase seem to describe the underlying speech variations well but do not contain sufficient information to distinguish between different languages."

PAGE 156: "the DBN pre-training that ignited a new era of (deep) machine learning research appears unnecessary if enough data and computing power are used."

PAGE 92: "the use of frame-level cross entropy to train the DNN for phone sequence recognition does not explicitly take into account the fact that the neighboring frames have smaller distances between the assigned probability distributions over phone class labels."

PAGE 95: "On each training instance, each hidden unit is randomly omitted with a fixed probability (e.g., p = 0.5). Then, decoding is done normally except with straightforward scaling of the DNN weights (by a factor of 1 −p)."

PAGE 89: "cross entropy is maximized subject to the condition that the infinity norm of the recurrent matrix of the RNN is less than a fixed value to guarantee the stability of RNN dynamics."

PAGE 55: "it is shown that the stacking procedure above improves a variational lower bound on the likelihood of the training data under the composite model."

PAGE 59: "the unique elasticity of temporal dynamics of speech as elaborated in [45, 73, 76, 83] would require temporally correlated models more powerful than HMMs"

PAGE 121-122: DSSM
PAGE 124: "where γ is a smoothing factor set empirically on a held-out data set"

PAGE 125: "the set of D is approximated by including D+ and only four randomly selected unclicked documents"

PAGE 42: "After learning the Gaussian-Bernoulli RBM, the activation probabilities of its hidden units are treated as the data for training another Bernoulli-Bernoulli RBM."

PAGE 55: "After learning a Gaussian-Bernoulli RBM (for applications with continuous features such as speech) or Bernoulli-Bernoulli RBM (for applications with nominal or binary features such as black-white image or coded text), we treat the activation probabilities of its hidden units as the data for training the Bernoulli-Bernoulli RBM one layer up."

PAGE 11: "the drastically increased chip processing abilities (e.g., general-purpose graphical processing units or GPGPUs), the significantly increased size of data used for training, and the recent advances in machine learning and signal/information processing research."

PAGE 21: "The height of the 'plateau of productivity' phase, not yet reached in our opinion, is expected to be higher than that in the stereotypical curve (circled with a question mark in Figure 2.2), and is marked by the dashed line that moves straight up."

PAGE 68: "In the new K-DSN extension, we completely eliminate nonconvex learning for W using the kernel trick."

PAGE 69-70: "if the bottom module is tuned too well, then adding more modules would not benefit much. In contrast, when the lower modules are loosely tuned (i.e., relaxed from the results obtained from straightforward methods), the overall K-DSN often performs much better."

PAGE 73: "By the ICASSP-2013 timeframe, at least 15 major speech recognition groups worldwide confirmed experimentally the success of DNNs with very large tasks"

PAGE 74: "such de-correlation becomes irrelevant due to the very strength of the deep learning methods in modeling data correlation."

PAGE 291: "hand-crafted feature design is sub-optimal and unsustainable, that the power of shallow architectures is fundamentally limited, and that short-time analysis cannot encode musically meaningful structure."

Good. Now let me also do formal units:
- Energy E in RBM is dimensionless (nats) since it appears as exp(−E). Units: E is in nats (dimensionless), p dimensionless.
- Free energy F = −ln Z in nats.
- Log-likelihood gradient Δw_ij in units of nats per unit activation product — actually E_data(v_i h_j) has units of "activation²" if v,h are 0/1 then dimensionless, so Δw_ij is dimensionless (natural units). If v is Gaussian with units of, say, log-power (dB), then w has units of dB^{-1}... Actually with Gaussian-Bernoulli energy the (1/2)(v−b)² term and w v h term: for E to be dimensionless (nats), w must carry inverse units of v. If v is in dB, w in 1/dB. And b in dB, a dimensionless. That's a nice formal unit analysis.
- DSN: E = (1/2)Σ||y−t||² in units of target² per sample; if t is 0/1 coding, dimensionless energy per sample. Hessian of E w.r.t. U is HH^T, units activation², so U has units target/activation.
- Kernel K-DSN: K_nm = g^T(x_n)g(x_m) dimensionless if g dimensionless; C has units of 1/(target²); a = (CI+K)^{-1}T has units of T. Consistency check: CI must be dimensionless, so C dimensionless if I dimensionless — but T is a target matrix, so (CI+K)^{-1} is dimensionless and a has units of T. Then y = k^T a · ... wait y(x) = a^T G(X) g(x) — a^T has units target, G(X)g(x) dimensionless (kernel), so y has units target. Good, dimensionally consistent. So C is dimensionless regularization strength — actually in standard KRR, C has units of 1/variance(target). Let me check: minimizing (1/2)Tr[EE^T] + (C/2)U^T U, with E = T − U^T G(X). First term units target². Second term C·U². U = G^T a has units... U must map G(X) (dimensionless features) to targets, so U has units target. So C·target² must match target² ⇒ C dimensionless. OK so C dimensionless. Fine, I'll state that.
- DSSM: R(Q,D) dimensionless cosine. γ has units 1/... to make γR dimensionless, γ dimensionless. P(D|Q) dimensionless. L(Λ) in nats.
- Perplexity: exp(cross-entropy in nats) dimensionless.
- WER: dimensionless fraction.

Breakdown regimes:
- RBM: Z intractable; breakdown when partition function estimation error dominates; CD-1 bias when mixing time τ ≫ 1 Gibbs step.
- Gaussian-Bernoulli: variance fixed at 1 → breakdown when input dynamic range ≫ 1 (unit variance assumption violated); requires per-feature normalization [PAGE 43: "each normalized to zero-mean and unit-variance across samples per feature"].
- DSN: (HH^T)^{-1} singular when N < L or when hidden activations are linearly dependent → rank deficiency; breakdown regime N_hidden ≥ N_samples.
- K-DSN: O(N²) memory, O(N³) for (CI+K)^{-1}; breakdown at N ~ 10^4-10^5; fixed by random Fourier features [PAGE 71].
- DNN-HMM: senone count ~10^4, output layer eval 1/3 of compute [PAGE 83]; breakdown when output dim × frame rate exceeds decoder budget → low-rank SVD [PAGE 83].
- RNN: gradient explosion when ‖W_rec‖∞ ≥ 1; vanishing when ≪ 1 [PAGE 89, PAGE 30].
- ReLU: dead-unit breakdown when pre-activation < 0 persistently.
- Dropout: breakdown of the weight-scaling approximation when p→1.
- Kernel bandwidth σ: under-smoothing → K→I, over-smoothing → K→11^T, rank-1.

Now let me write. I'll structure carefully and keep it dense. Let me target the XML tags exactly as specified.

Word budget: THINK_TRACE ~1000 words. SOURCE_OPERATORS ~800. RETROCAUSAL ~450. RECURSIVE_TOM ~450. CROSS_LAYER ~450. RLVR ~500. Total ~3650. Good.

Let me write it.

For THINK_TRACE I need "deep multi-hop derivation & gray-zone audit (>=400 words)". I'll do a chain: (1) start from the definition of DL as ≥2 nonlinear layers [PAGE 9-10], (2) derive why BP fails at depth (gradient magnitude), (3) derive the DBN fix as variational bound improvement, (4) derive the DSN as a constrained least-squares relaxation, (5) derive DSSM as a conditional-likelihood ranker, (6) audit gray zones.

Multi-hop means I chain derivations where each hop's output is the next input. Let me do:

Hop 0: Layer count L, nonlinearity σ. Representation h^(l) = σ(W^(l) h^(l−1)).
Hop 1: BP gradient chain: ∂E/∂W^(1) = product of L Jacobians. Show ||∂E/∂W^(1)|| ≤ Π ||J^(l)|| ||∂E/∂h^(L)||. With ||J|| ~ σ'·||W|| and σ' ≤ 1/4 for sigmoid, depth kills it.
Hop 2: Hence either reduce L (shallow regression) or find an initialization/constraint that makes each ||J|| ≈ 1 at init. DBN pre-training does this implicitly: greedy layer-wise training makes each layer a "good" generative model, so the linearization around init is well-conditioned.
Hop 3: Formalize as variational bound: ln p(x) ≥ L(q) and stacking RBMs increases L(q) — source [PAGE 55]. So pre-training = coordinate ascent on a bound, which is a surrogate for the ill-conditioned BP problem.
Hop 4: The DSN removes the depth-dependence entirely by making depth = number of independent convex modules. Each module solves a linear least squares in U given H. Depth then only enters through feature concatenation. Gradient noise reduction is a direct consequence of projecting out U.
Hop 5: DSSM removes the need for labels by replacing the classification loss with a smoothed ranking likelihood over click data. The partition function over D is truncated to 1+4 negatives [PAGE 125], which is a Monte Carlo estimate of the softmax denominator with 4 samples → high variance, but γ smoothing stabilizes.
Hop 6: The unifying operator across all five hops is "replace an intractable marginal/partition by a tractable surrogate and constrain the remaining freedom." RBM: replace E_model by CD-1. DSN: replace joint (U,W) by (U=F(W), W). K-DSN: replace explicit G(X) by kernel. DSSM: replace full D by 5 negatives. Dropout: replace ensemble by weight scaling. That's the "surrogate operator."

Gray zones: (a) OCR corruption of ∂E/∂W; (b) order-of-magnitude inconsistency; (c) infinity-norm vs spectral radius; (d) 312 vs 2000 bottleneck; (e) [PHONE] redaction; (f) "Seltzer and Yu" vs "Seltzer et al."; (g) Figure 2.3/2.4 WER without numeric values; (h) DSSM 4 negatives, no strategy sensitivity stated but "no significant difference" [PAGE 125].

Good, that's a rich audit.

Write it now.

One more: must not mention betting lines. Fine.

Let me write the final answer.
</NATIVE_REASONING>

<THINK_TRACE>
**Hop 0 — The depth operator.** The source defines deep learning by two necessary conditions: "(1) models consisting of multiple layers or stages of nonlinear information processing; and (2) methods for supervised or unsupervised learning of feature representation at successively higher, more abstract layers" [PAGE 11]. Formally, with layer index $l=1,\dots,L$, $h^{(0)}=x$, and $h^{(l)}=\sigma\!\left(W^{(l)}h^{(l-1)}+b^{(l)}\right)$, the class is defined by $L\ge 2$ plus a learning rule that sets $\{W^{(l)},b^{(l)}\}$ from data rather than by hand.

**Hop 1 — Why the depth operator breaks back-propagation.** Differentiating $E$ with respect to the bottom weight gives a product of $L$ Jacobians: $\partial E/\partial W^{(1)}=\prod_{l=2}^{L}J^{(l)}\cdot\partial E/\partial h^{(L)}$, hence $\|\partial E/\partial W^{(1)}\|\le \prod_l\|J^{(l)}\|\cdot\|\partial E/\partial h^{(L)}\|$. For a logistic unit $\sigma' \le 1/4$, so with $\|W^{(l)}\|\sim \mathcal{O}(1)$ the product shrinks geometrically in $L$. The source states the empirical consequence: "BP alone did not work well in practice then for learning networks with more than a small number of hidden layers" and "It often gets trapped in poor local optima when the batch-mode or even stochastic gradient descent BP algorithm is used. The severity increases significantly as the depth of the networks increases" [PAGE 16]. It also states the field-level consequence verbatim: "This difficulty is partially responsible for steering away most of the machine learning and signal processing research from neural networks to shallow models that have convex loss functions (e.g., SVMs, CRFs, and MaxEnt models), for which the global optimum can be efficiently obtained at the cost of reduced modeling power" [PAGE 16].

**Hop 2 — The first surrogate: replace the ill-conditioned joint problem by coordinate ascent.** Greedy layer-wise RBM stacking is a coordinate-ascent procedure on a variational lower bound, not on the true likelihood. The source states: "it is shown that the stacking procedure above improves a variational lower bound on the likelihood of the training data under the composite model" [PAGE 55]. This is the crucial logical hop: pre-training is not claimed to find a better optimum of the supervised objective, it is claimed to move the initialization onto a well-conditioned manifold of the same objective. The empirical payoff is stated: initializing "the weights of an MLP with a correspondingly configured DBN often produces much better results than that with the random weights" [PAGE 17].

**Hop 3 — The second surrogate: eliminate the depth coupling entirely (DSN).** If each module's output units are linear and the hidden activities $H$ are held fixed, the upper weight matrix has a closed form $U=(HH^{\mathsf T})^{-1}HT^{\mathsf T}=F(W)$ [PAGE 65]. The joint $(U,W)$ problem is replaced by a constrained problem in $W$ alone, with $U$ slaved to $W$ through $F$. The stated benefit is exactly a variance reduction in the gradient estimator: "Compared with conventional backpropagation, the above method has less noise in gradient computation due to the exploitation of the explicit constraint $U = F(W)$" [PAGE 65]. Depth then re-enters only through feature concatenation (output of module $k$ becomes part of the input of module $k+1$), so $L$ no longer multiplies Jacobians.

**Hop 4 — The third surrogate: eliminate $W$ entirely (K-DSN).** Taking the dual of $\min \tfrac12\mathrm{Tr}[EE^{\mathsf T}]+\tfrac{C}{2}U^{\mathsf T}U$ subject to $T-U^{\mathsf T}G(X)=E$ yields $U=G^{\mathsf T}a$ with $a=(CI+K)^{-1}T$ [PAGE 69]. The source states the design intent plainly: "In the new K-DSN extension, we completely eliminate nonconvex learning for $W$ using the kernel trick" [PAGE 68]. Depth survives only through the kernel's argument set, which is extended to include previous modules' predictions: $K=G([X|Y^{(l-1)}|Y^{(l-2)}|\dots Y^{(1)}])G^{\mathsf T}([X|Y^{(l-1)}|Y^{(l-2)}|\dots Y^{(1)}])$ [PAGE 69].

**Hop 5 — The fourth surrogate: replace labels by a truncated ranking likelihood (DSSM).** With click-through data, the target is not a class label but a relevance ordering, so the objective becomes $P(D\mid Q)=\exp(\gamma R(Q,D))/\sum_{D'\in\mathcal D}\exp(\gamma R(Q,D'))$ [PAGE 124]. The denominator over Web-scale $\mathcal D$ is intractable, so it is Monte-Carlo truncated: "the set of $\mathcal D$ is approximated by including $D^{+}$ and only four randomly selected unclicked documents" [PAGE 125].

**Unifying observation.** All five hops apply the same operator: *replace an intractable marginal or partition by a tractable surrogate, then constrain the residual freedom so the surrogate cannot drift.* RBM replaces $\mathbb E_{\text{model}}$ by CD-1; DSN replaces joint $(U,W)$ by $(F(W),W)$; K-DSN replaces explicit $G(X)$ by a kernel; DSSM replaces full $\mathcal D$ by 5 negatives; dropout replaces an exponential ensemble by a single network with rescaled weights.

**Gray-zone audit (8 findings).**
1. The printed batch-gradient formula "$\partial E/\partial W = 2X[H^{\mathsf T}\circ(1-H)^{\mathsf T}\circ[H^{\dagger}(HT^{\mathsf T})(TH^{\dagger})-T^{\mathsf T}(TH^{\dagger})]]$" [PAGE 65] has suffered superscript collapse in extraction ($HT^{\mathsf T}$ vs $H^{\mathsf T}T$, $T^{\mathsf T}$ vs $TT^{\mathsf T}$). The stated pseudo-inverse $H^{\dagger}=H^{\mathsf T}(HH^{\mathsf T})^{-1}$ is unambiguous, so the operator is recoverable, but the literal string is not trustworthy.
2. Sample-size scaling is stated two ways: "the training data are increased approximately one order of magnitude from one task to the next" [PAGE 78] versus the Table 7.1 caption "the training data are increased approximately three orders of magnitudes" [PAGE 79]. Both are defensible: per-step $\approx 10^{1}$, cumulative A→D from 3 h to 2000 h $\approx 10^{2.8}$. Not a contradiction, but a genuine ambiguity for anyone citing a single ratio.
3. The RNN stability constraint is given as an infinity-norm bound: "cross entropy is maximized subject to the condition that the infinity norm of the recurrent matrix of the RNN is less than a fixed value" [PAGE 89]. Since $\|W\|_\infty \ge \rho(W)$, this is sufficient but not necessary for the echo-state property; the claim is conservative, so empirical results understate achievable capacity.
4. Code-layer width drifts: "the 312 unit bottleneck code layer" [PAGE 44] versus "A total of 2000 binary codes with one for each single frame" [PAGE 45–48, Fig. 4.9]. The text never states that the bottleneck width was varied between experiments.
5. The DOI is redacted to "[PHONE]" on [PAGE 3] and [PAGE 7]; citation cannot be completed from this text alone.
6. Attribution shifts: "[325]" is "Seltzer et al." on [PAGE 81] and "Seltzer and Yu" on [PAGE 95].
7. Figures 2.3/2.4 assert a WER plateau-then-drop for Switchboard but supply no numeric ordinate in the extracted text [PAGE 21–22]; only the qualitative claim is auditable.
8. The DSSM negative-sampling choice is justified by a negative result: "no significant difference was found when different sampling strategies were used to select the unclicked documents" [PAGE 125] — an absence of evidence, with no effect size reported.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
**1. Restricted Boltzmann machine (generative energy model).**
$$p(v,h;\theta)=\frac{\exp(-E(v,h;\theta))}{Z},\qquad Z=\sum_v\sum_h \exp(-E(v,h;\theta)),\qquad p(v;\theta)=\frac{\sum_h \exp(-E(v,h;\theta))}{Z}$$
[PAGE 52]. *Units:* $E$ is dimensionless (nats) because it appears as an exponent; $Z$ dimensionless; $p$ dimensionless.

Bernoulli–Bernoulli energy and conditionals:
$$E(v,h;\theta)=-\sum_{i=1}^{I}\sum_{j=1}^{J}w_{ij}v_i h_j-\sum_{i=1}^{I}b_i v_i-\sum_{j=1}^{J}a_j h_j$$
$$p(h_j=1\mid v;\theta)=\sigma\!\left(\sum_{i}w_{ij}v_i+a_j\right),\qquad p(v_i=1\mid h;\theta)=\sigma\!\left(\sum_{j}w_{ij}h_j+b_i\right),\qquad \sigma(x)=\frac{1}{1+e^{-x}}$$
[PAGE 52]. *Units:* with $v,h\in\{0,1\}$, $w_{ij}$, $b_i$, $a_j$ are all dimensionless.

Gaussian–Bernoulli energy and conditionals:
$$E(v,h;\theta)=-\sum_{i}\sum_{j}w_{ij}v_i h_j-\frac{1}{2}\sum_{i}(v_i-b_i)^2-\sum_{j}a_j h_j$$
$$p(h_j=1\mid v;\theta)=\sigma\!\left(\sum_i w_{ij}v_i+a_j\right),\qquad p(v_i\mid h;\theta)=\mathcal N\!\left(\sum_j w_{ij}h_j+b_i,\;1\right)$$
[PAGE 52–53]. *Units:* if $v_i$ carries physical units $[u]$ (e.g., dB of log-power), then $b_i\in[u]$, $w_{ij}\in[u]^{-1}$, $a_j$ and $E$ dimensionless. **Breakdown regime:** the variance is hard-wired to 1 ("variance one" [PAGE 53]), so the model is misspecified whenever per-feature dynamic range exceeds unity — which is precisely why the source normalizes inputs: "each normalized to zero-mean and unit-variance across samples per feature" [PAGE 43].

Log-likelihood gradient:
$$\Delta w_{ij}=\mathbb E_{\text{data}}(v_i h_j)-\mathbb E_{\text{model}}(v_i h_j)$$
[PAGE 53]. **Exact singularity:** "Unfortunately, $\mathbb E_{\text{model}}(v_i h_j)$ is intractable to compute" [PAGE 53]. The tractable surrogate is CD-$k$: $v_0\!\sim\!\text{data}$, $h_0\!\sim\!p(h\mid v_0)$, $v_1\!\sim\!p(v\mid h_0)$, $h_1\!\sim\!p(h\mid v_1)$ [PAGE 53]. **Breakdown regime:** when the Gibbs mixing time $\tau_{\text{mix}}\gg k$, the CD-$k$ bias is $\mathcal O(\tau_{\text{mix}}/k)$ and the fixed point of learning is the wrong distribution. The source flags the remedy conditionally: "Both work better than CD when using the RBM as a generative model" [PAGE 53–54].

**2. Deep belief network / pre-trained DNN (hybrid).**
Stacking rule: after learning a Gaussian–Bernoulli or Bernoulli–Bernoulli RBM, "we treat the activation probabilities of its hidden units as the data for training the Bernoulli–Bernoulli RBM one layer up" [PAGE 55]. Validation operator: "the stacking procedure above improves a variational lower bound on the likelihood of the training data under the composite model" [PAGE 55] — i.e., $\ln p(x)\ge \mathcal L(q)$ increases monotonically per added layer, where $\mathcal L$ is in nats.

Dropout regularization: "each hidden unit is randomly omitted with a fixed probability (e.g., $p=0.5$). Then, decoding is done normally except with straightforward scaling of the DNN weights (by a factor of $1-p$)" [PAGE 95]. Formally the inference-time weight is $W_{\text{test}}=(1-p)W$, the deterministic approximation to $\mathbb E_{\text{mask}}[W\odot m]$. **Breakdown regime:** the approximation is exact only for linear/softmax readouts; as $p\to 1$ the estimator degenerates.

**3. Deep stacking network (supervised).**
$$y_i=U^{\mathsf T}h_i,\qquad h_i=\sigma(W^{\mathsf T}x_i),\qquad E=\frac{1}{2}\sum_i\|y_i-t_i\|^2=\frac{1}{2}\mathrm{Tr}\left[(Y-T)(Y-T)^{\mathsf T}\right]$$
[PAGE 64]. *Units:* $E$ in $[t]^2$ per sample (dimensionless for 0–1 coding, as in "a 0–1 coding scheme" [PAGE 62]); $U\in[t]\cdot[\text{activation}]^{-1}$; $W$ dimensionless for unit-normalized inputs; biases absorbed by augmentation: "Bias terms are implicitly represented in the above formulation if $x_i$ and $h_i$ are augmented with ones" [PAGE 64].

Closed-form upper layer:
$$U=(HH^{\mathsf T})^{-1}HT^{\mathsf T}=F(W)$$
[PAGE 65]. **Exact singularity:** $(HH^{\mathsf T})$ is singular whenever $\mathrm{rank}(H)<L$, i.e., when the number of hidden units $L$ exceeds the number of training samples $N$, or when activations are collinear. This is the hard breakdown of the DSN.

Constrained reformulation and batch gradient:
$$E=\frac{1}{2}\sum_i\|G_i(U,W)-t_i\|^2+\lambda\|U-F(W)\|,\qquad H^{\dagger}=H^{\mathsf T}(HH^{\mathsf T})^{-1}$$
with $\partial E/\partial W$ as printed at [PAGE 65] (see gray-zone item 1 for the extraction corruption). *Comparison operator:* "Compared with conventional backpropagation, the above method has less noise in gradient computation due to the exploitation of the explicit constraint $U = F(W)$" [PAGE 65].

**4. Kernel deep stacking network (K-DSN).**
$$\text{minimize}\;\;\frac{1}{2}\mathrm{Tr}[EE^{\mathsf T}]+\frac{C}{2}U^{\mathsf T}U\quad\text{subject to}\quad T-U^{\mathsf T}G(X)=E$$
$$U=G^{\mathsf T}a,\qquad a=(CI+K)^{-1}T,\qquad K=G(X)G^{\mathsf T}(X),\qquad K_{nm}=g^{\mathsf T}(x_n)g(x_m)$$
$$y(x)=U^{\mathsf T}g(x)=a^{\mathsf T}G(X)g(x)=k^{\mathsf T}(x)(CI+K)^{-1}T$$
[PAGE 69]. *Units:* $G(\cdot)$ dimensionless; $K$ dimensionless; $C$ dimensionless (so $CI$ matches $K$); $a\in[t]$; $y\in[t]$ — dimensionally consistent. **Breakdown regime:** explicit at [PAGE 71]: "as inherent in any kernel method, the scalability becomes an issue also for the K-DSN as the training and testing samples become very large." Cost is $\mathcal O(N^2)$ memory and $\mathcal O(N^3)$ for the inverse. Also a smoothing-regime singularity: $\sigma\to 0$ gives $K\to I$ (no sharing, pure memorization); $\sigma\to\infty$ gives $K\to \mathbf 1\mathbf 1^{\mathsf T}$ (rank-1, all test points predicted identically). The stated remedy is random Fourier features [PAGE 71].

A non-obvious tuning inversion is documented: "if the bottom module is tuned too well, then adding more modules would not benefit much. In contrast, when the lower modules are loosely tuned (i.e., relaxed from the results obtained from straightforward methods), the overall K-DSN often performs much better" [PAGE 69–70].

**5. DSSM (deep semantic similarity model).**
$$l_1=W_1x,\qquad l_i=f(W_i l_{i-1}+b_i)\;(i>1),\qquad y=f(W_N l_{N-1}+b_N),\qquad f(x)=\frac{1-e^{-2x}}{1+e^{-2x}}$$
[PAGE 123–124]. Relevance and ranking likelihood:
$$R(Q,D)=\cos(y_Q,y_D)=\frac{y_Q^{\mathsf T}y_D}{\|y_Q\|\|y_D\|},\qquad P(D\mid Q)=\frac{\exp(\gamma R(Q,D))}{\sum_{D'\in\mathcal D}\exp(\gamma R(Q,D'))}$$
$$\mathcal L(\Lambda)=\log\prod_{(Q,D^{+},D^{-}_j)}P(D^{+}\mid Q)$$
[PAGE 124–125]. *Units:* $R$ and $\gamma$ dimensionless; $\mathcal L$ in nats. **Breakdown regime:** the truncated denominator ($1$ positive + $4$ negatives) is a 5-sample Monte Carlo estimator of a Web-scale softmax; its variance grows as the number of near-miss negatives grows, and it vanishes only when the negative pool is uninformative.

**6. Sequence-level training and RNN stability.**
Frame-level cross-entropy is mismatched to WER; the source states why: "the use of frame-level cross entropy to train the DNN for phone sequence recognition does not explicitly take into account the fact that the neighboring frames have smaller distances between the assigned probability distributions over phone class labels" [PAGE 92]. The corrective operator is full-sequence MMI, equivalent to placing a CRF at the top of the DNN [PAGE 92].

RNN primal-dual: "cross entropy is maximized subject to the condition that the infinity norm of the recurrent matrix of the RNN is less than a fixed value to guarantee the stability of RNN dynamics" [PAGE 89]. Since $\rho(W)\le\|W\|_\infty$, the constraint implies $\rho<1$ (echo-state property) but is strictly stronger. **Breakdown regimes:** $\rho\gg1$ → gradient explosion; $\rho\ll1$ → gradient vanishing, both documented as known since the early 1990s [PAGE 30].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The monograph is itself a retrocausal artifact: it retroactively rewrites 1989–2006 neural-network work as "pre-history" of a 2006 event. The declared hinge is the pair of papers that introduced the DBN and its greedy layer-wise algorithm [PAGE 17], which the authors date explicitly and treat as the ignition point. Everything before is read backwards through that hinge.

**Strand 1 — Convolution.** The lineage runs TDNN (1989) [PAGE 35, citing 382] → LeCun's document-recognition CNN (1998) [PAGE 34, citing 212] → ImageNet 2012. The source states the inversion precisely: TDNN is "a special case and predecessor of the CNN when weight sharing is limited to one of the two dimensions, i.e., time dimension, and there is no pooling layer," and then "It was not until recently that researchers have discovered that the time-dimension invariance is less important than the frequency-dimension invariance for speech recognition" [PAGE 35]. That is a genuine retrocausal reversal: a design choice made in 1989 for the wrong reason turned out to be the correct choice for a different reason in 2012.

**Strand 2 — Stacking.** Breiman's stacked regression (1996) and Wolpert's stacked generalization (1992) → Cohen & Carvalho's stacked CRF (2005) → Deng & Yu's deep convex network (2011) → tensor DSN (2012–2013) → kernel DSN (2012–2013) [PAGE 61, PAGE 67–68]. The DSN is not a new idea; it is stacking plus a convexity constraint that the 1990s versions did not impose.

**Strand 3 — Sequence models.** Bourlard–Morgan ANN/HMM hybrid (1993) and Bengio's 1991 joint HMM–NN training → Robinson's recurrent phone-probability estimator (1994) → Graves' CTC/LSTM (2006–2013) [PAGE 33–34, PAGE 88]. The monograph is explicit that the 1990s attempts failed for data reasons, not architectural ones: "where shallow neural networks were trained with small amounts of training data and with no generative pre-training" [PAGE 37].

**Multi-week traps (traps whose cost is only visible on a multi-week horizon).**

*Trap A — Pre-training as permanent ritual.* Pre-training appears mandatory in 2006–2010 and becomes optional by 2013. The source states the retraction directly: "the DBN pre-training that ignited a new era of (deep) machine learning research appears unnecessary if enough data and computing power are used" [PAGE 156]. A team that institutionalized RBM pre-training in 2010 would have carried a 2–3× training-cost tax for years with no accuracy benefit.

*Trap B — Pre-training as universal.* Stronger still, the monograph records outright failure outside the tasks where it was validated: "while the popular learning strategy of generative pre-training followed by discriminative fine-tuning seems to work well empirically for many tasks, it failed to work for some other tasks that have been explored (e.g., language identification or speaker recognition; unpublished)" with the diagnosis "the features extracted at the generative pre-training phase seem to describe the underlying speech variations well but do not contain sufficient information to distinguish between different languages" [PAGE 155]. This is a *disentangling* failure, not an optimization failure — a distinction that takes weeks of ablation to discover.

*Trap C — Kernel scaling.* The K-DSN's $\mathcal O(N^3)$ inversion is invisible at TIMIT scale and fatal at Web scale; the source pre-registers both the problem and the fix (random Fourier features) [PAGE 71].

*Trap D — Frame-level optimism.* Frame cross-entropy reduces to a surrogate that is decorrelated from WER at sequence level [PAGE 92]; teams that stop at frame-CE plateau and misdiagnose the plateau as a model-capacity problem will spend weeks widening layers instead of switching criteria.

*Trap E — Hype-cycle misreading.* The authors place themselves on the curve and predict the plateau's height with a question mark: "The height of the 'plateau of productivity' phase, not yet reached in our opinion, is expected to be higher than that in the stereotypical curve (circled with a question mark in Figure 2.2)" [PAGE 21]. Any 2014 reader who took the 2012 curve as literal would have over-scheduled deployment.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_OMIND_PLACEHOLDER>
</RECURSIVE_THEORY_OF_OMIND_PLACEHOLDER>

<RECURSIVE_THEORY_OF_MIND>
Model three agents and their nested beliefs, then score each against the *clock* (compute/data scale) and the *crisis* (a benchmark plateau).

**Agent A — the shallow incumbent.** Belief: convex loss ⇒ global optimum ⇒ safety. The source records this belief forming under duress: the field moved to "shallow models that have convex loss functions (e.g., SVMs, CRFs, and MaxEnt models), for which the global optimum can be efficiently obtained at the cost of reduced modeling power" [PAGE 16]. A's *crisis habit regression* is to reach for the tractable model whenever a deep model underperforms — a regression that is rational at $10^2$ hours of data and irrational at $10^4$ hours.

**Agent B — the pre-training believer.** Belief: depth requires generative initialization. B's counter-trap is mistaking a historical accident for a law: the DBN worked in 2006–2009 for exactly the regime where it was tested — "This benefit is found critical when the training data are limited and no other appropriate regularization approaches (i.e., dropout) are exploited" [PAGE 13]. B's regression under crisis is to add more pre-training layers rather than more data or dropout.

**Agent C — the scale maximalist.** Belief: capacity + data dominates architecture. C's evidence is the error-reduction gradient across Table 7.1: relative reduction "from approximately 10% to 20%, and then to 30%" as training data grows from 3 h to 2000 h [PAGE 79]. C's counter-trap is ignoring that C's own recipe silently deletes B's contribution [PAGE 156].

**Recursive structure.** Each agent models the others' beliefs and updates on the *observable* rather than the mechanism:
- A models B as "unreliable, non-convex"; A's action is to demand convexity certificates.
- B models A as "the reason the field stalled for 15 years"; B's action is to demand pre-training ablations.
- C models both as "pre-GPU thinking"; C's action is to demand scaling curves.
- The *reviewer* (4th order) must model all three and predict which will be right at a given time $t$. The monograph supplies the scoring function: the crossover is where "a deep learning algorithm that appears to be performing not so remarkably on small data sets can begin to perform considerably better when these limitations are removed" [PAGE 156].

**Clock resolution.** The clock is not wall time; it is $\log(\text{FLOPs}\cdot\text{tokens})$. A is correct below the crossover, C is correct above it, B is correct only in the narrow band where data are scarce and dropout is unavailable [PAGE 13]. The monograph's own self-location on the hype cycle — "not yet reached in our opinion" [PAGE 21] — is a second-order belief about the collective belief, i.e., a theory-of-mind statement embedded in a technical survey.

**Crisis-habit regression vs counter-trap, scored.** The correct counter-trap is neither "add depth" nor "add data" but "add *discriminative* signal at the right level": the source's own answer to the plateau is sequence-level MMI [PAGE 92] and dropout [PAGE 95], both of which change the objective or the estimator, not the capacity. Any intervention that changes only capacity is a habit regression; any intervention that changes only regularization is a counter-trap; the winning move changes the objective.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
**Veto layer 1 — Acoustic/physical (Nyquist and bandwidth).** Wideband (16 kHz) and narrowband (8 kHz) speech are physically non-interchangeable: the 8 kHz channel has no energy above 4 kHz by construction. The joint DNN "trained with mixed-bandwidth acoustic data with 16-kHz and 8-kHz sampling rates" [PAGE 151] cannot recover the missing band; it can only learn a shared lower-band representation. **Veto verdict:** any claim of cross-bandwidth accuracy parity above 4 kHz is physically inadmissible and must be rejected without experiment. The architecture is admissible only as a shared-trunk/multi-head construction, which is what Figure 11.6 depicts.

**Veto layer 2 — Articulatory/biomechanical (coarticulation elasticity).** Speech production imposes temporal correlation that a static classifier cannot represent. The source asserts the veto itself: "the unique elasticity of temporal dynamics of speech as elaborated in [45, 73, 76, 83] would require temporally correlated models more powerful than HMMs for the ultimate success of speech recognition" [PAGE 59], and calls integration of such models "a challenging new research direction" [PAGE 59]. **Veto verdict:** a frame-independent DNN–HMM with senone outputs [PAGE 58–59, Figure 5.3] is biomechanically under-specified; it is admissible as an acoustic scorer but cannot, by construction, represent target-directed articulatory dynamics. Any claim that it does is vetoed.

**Veto layer 3 — Biomechanical (visual, face).** The stochastic feed-forward network is admitted for facial expression because "the network can produce a distribution with two distinct modes and use them to represent two or more different facial expressions $y$ given a neutral face $x$" [PAGE 133]. A deterministic network with a unimodal output cannot represent co-occurring expressions (e.g., surprise+joy). **Veto verdict:** unimodal-output architectures are inadmissible for multi-mode facial datasets, independent of accuracy on unimodal benchmarks.

**Veto layer 4 — Signal-processing/physical (spectrogram invertibility).** The 312-bit bottleneck code is a hard quantization at threshold 0.5 [PAGE 43]; reconstruction of a full spectrogram from independent per-window codes relies on overlap-and-add, which requires window overlap. **Veto verdict:** a claim of exact reconstruction from 312 bits/frame is information-theoretically inadmissible; the source is careful to say "reconstructed," and Figure 4.3 shows residual energy explicitly [PAGE 44].

**Veto layer 5 — Compute/physical (memory and FLOP ceilings).** The output layer of a context-dependent DNN is high-dimensional and "the output layer evaluation can cost 1/3 of the total computation time" [PAGE 83]; the K-DSN requires an $\mathcal O(N^3)$ inverse [PAGE 69–71]; the DSN requires an $L\times L$ inverse where $L$ is the hidden width [PAGE 65]. **Veto verdict:** any deployment claim that ignores these three specific ceilings is physically inadmissible at scale, regardless of benchmark F1.

**Veto layer 6 — Statistical/physical (partition-function intractability).** $Z$ in the RBM is a sum over $2^{I+J}$ states [PAGE 52]. **Veto verdict:** exact maximum-likelihood RBM training is inadmissible for any $I+J$ beyond trivial size; only surrogates (CD-$k$, PCD) are admissible, and any claim of "exact RBM MLE" is vetoed on sight.

**Weather layer — explicit non-adjudication.** The source contains no meteorological variable, no environmental telemetry, and no outdoor-corpus conditioning. The nearest analogue is acoustic-environment distortion, handled by C-MMSE feature enhancement and noise-aware training on Aurora4 [PAGE 81–82] and by SPLICE applied to a DNN [PAGE 82]. **Verdict:** no weather veto can be constructed from this source without fabrication; the honest adjudication is that the source's "environment" layer is acoustic, not atmospheric, and any attempt to import a weather covariate is out of scope.

**Cross-layer composition rule.** A claim survives only if it clears layer 1 (bandwidth), layer 2 (temporal dynamics), layer 5 (compute ceilings), and layer 6 (partition function). Failure at any single layer is fatal and non-compensable by accuracy at the others.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
**Veto scenario 1 — Bottleneck code is not a rate-optimal quantizer.**
*Counterfactual:* Suppose the deep autoencoder's 312-bit code carried the same information as a 312-bit vector quantizer at matched rate. Then the reconstruction residual spectra would be statistically indistinguishable.
*Source prediction (falsifiable):* "the autoencoder (red curve) is producing lower errors than the VQ coder (blue curve) throughout the entire span of the utterance" [PAGE 44–45], and "the much more faithful reconstruction from the 312-bit deep autoencoder" versus "the blurry reconstruction from the 312-bit VQ" [PAGE 44].
*Prediction to test:* At matched 312 bits/frame on held-out TIMIT utterances, compute per-time-frame spectral distortion (dB) for both coders. **Veto condition:** if the per-frame distortion distributions overlap at the 95% level (paired Wilcoxon, $n\ge 500$ frames), the deep-autoencoder advantage is an artifact of frame count or normalization, and the claim is vetoed. **Secondary prediction:** the AE residual should concentrate energy in high-frequency, low-energy cells (fricative onsets, stop bursts), whereas the VQ residual should be broadband — testable directly from the two residual spectrograms shown at [PAGE 44].

**Veto scenario 2 — CD-1 bias disappears after discriminative fine-tuning.**
*Counterfactual:* Suppose the CD-$k$ approximation error is irrelevant to the downstream discriminative task. Then DBNs pre-trained with CD-1 vs PCD-$k$ should yield statistically identical DNN–HMM word error after fine-tuning.
*Source prediction (falsifiable):* "Both work better than CD when using the RBM as a generative model" [PAGE 53–54] — note the explicit scope restriction to *generative* use, which implies the difference should NOT necessarily survive discriminative fine-tuning.
*Prediction to test:* Two DBN–DNN systems, identical architecture ($5\times2048$) and identical fine-tuning schedule, one pre-trained with CD-1 and one with PCD-10, evaluated on the 24–48 h voice-search condition where relative gain is stated at $\approx 10\%$ [PAGE 79, Table 7.1B]. **Veto condition:** if WER differs by more than the seed-to-seed standard deviation across 5 seeds, the source's scope restriction is wrong and the generative/discriminative distinction is not the right cut. **Inverse veto:** if generative held-out log-likelihood differs significantly while WER does not, the source's scope restriction is confirmed and the CD/PCD choice is a pure compute-vs-likelihood trade.

**Veto scenario 3 — DSN closed-form residual monotonicity.**
*Counterfactual:* Suppose $U=(HH^{\mathsf T})^{-1}HT^{\mathsf T}$ is not the exact minimizer of the module MSE (e.g., because bias augmentation is omitted or because the output units are not truly linear). Then the training-set residual $\|Y-T\|_F^2$ would not decrease monotonically as modules are stacked.
*Source prediction (falsifiable):* The closed form is derived by "setting the error derivative with respective to $U$ to zero" [PAGE 65], and the residual is a projection residual; stacking concatenates the previous module's output into the input [PAGE 63, Figure 6.1], which can only expand the column space of $H$, so the projection residual is monotonically non-increasing.
*Prediction to test:* Instrument $\|Y-T\|_F^2/N$ after each module on a fixed training split, $M=1\!\dots\!50$ modules. **Veto condition:** any strictly positive increment between consecutive modules falsifies the convexity claim as implemented, and points to exactly one of: missing bias augmentation, non-linear output units, or rank deficiency $\mathrm{rank}(H)<L$ (the exact singularity identified above). **Tertiary prediction:** the empirical learning-curve knee should occur at $M\approx$ round $\ln(N)/\ln(\text{units per module})$, beyond which added modules cannot expand the column space further.

**Veto scenario 4 — K-DSN scalability crossover.**
*Counterfactual:* Suppose the $\mathcal O(N^3)$ kernel inverse is not the binding constraint in practice. Then K-DSN wall-clock training time should scale sub-cubically with $N$ over the tested range.
*Source prediction (falsifiable):* "as inherent in any kernel method, the scalability becomes an issue also for the K-DSN as the training and testing samples become very large" [PAGE 71], with random Fourier features offered as the fix that "renders efficient computation in both training and evaluation of the K-DSN with large training samples" [PAGE 71].
*Prediction to test:* Fit $\log(\text{train time})$ vs $\log(N)$ for exact-kernel K-DSN at $N\in\{10^3,3\times10^3,10^4,3\times10^4\}$. **Veto condition:** if the fitted slope is $<2.5$, the cubic term is not dominant and the random-Fourier-feature extension is solving a non-problem for that range. **Secondary prediction:** the exact and random-Fourier K-DSN test accuracies should converge as $D_{\text{RFF}}\to\infty$ with error $\mathcal O(D_{\text{RFF}}^{-1/2})$, so the $D$ at which the gap closes is itself a measurable quantity that should track $N$.
</RLVR_COUNTERFACTUAL_VETOES>