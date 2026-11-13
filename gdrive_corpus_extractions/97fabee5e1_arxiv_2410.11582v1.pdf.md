---
source: "arxiv_2410.11582v1.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 16
model: deepseek/deepseek-v4.1-flash-1017
words: 6834
---

<NATIVE_REASONING>
The user has provided a research paper (arXiv 2410.11582v1) about balanced multimodal learning with OPM and OGM strategies. They want me to analyze it using the GSE + GSI Frontier Reasoning Foundry framework with specific XML sections.

Wait - this is a machine learning paper, not a sports betting paper. The framework mentions "ZERO BETTING LINES" and talks about "crisis habit regression" etc. Let me re-read the prompt.

The system prompt is framed around sports/gambling prediction but the actual source document is an academic ML paper. The user's DRIVE SOURCE is this ML paper. I need to analyze it within the framework but adapt it to the actual content.

Looking at the required sections:
- THINK_TRACE: Deep multi-hop derivation & gray-zone audit (>=400 words)
- SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown
- RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps
- RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock
- CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof
- RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions

The "recursive theory of mind" and "cross-layer veto adjudication" sections are clearly designed for sports predictions. But the actual paper is about ML. I need to interpret these sections through the lens of the ML paper being analyzed. "Recursive theory of mind" can be reinterpreted as the adversarial dynamics of modalities in the optimization process. "Cross-layer veto" can be physical/computational vetoes in the ML system. "Crisis habit regression" can map to modality domination.

Actually, the framework seems to be a generic template that adapts to the content. Given the paper is about balanced multimodal learning, I should treat this like a systems analysis where:
- "betting lines" (which I must never mention) → mapping to ML claims
- The framework asks me to make predictions/assessments about the paper

Let me think about what's actually being asked. The user provided a paper and the framework. I should:
1. Deep analysis of the paper's methods
2. Formal equations with citations
3. Historical lineage
4. Analyze the "optimization dynamics" as a game-theoretic situation
5. Cross-layer vetoes (physical/modeling constraints)
6. 3 RLVR (Reinforcement Learning from Verbal feedback/Reasoning) counterfactual vetoes

The RLVR_COUNTERFACTUAL_VETOES section asks for "3 verifiable RLVR veto scenarios + predictions." In an ML context, these could be counterfactual experiments that would falsify the paper's claims.

I need to be careful:
- Never mention betting lines, odds, spreads
- State formal LaTeX equations with units and [PAGE N] citations
- Multi-hop derivation, gray-zone audit
- Historical lineage (multimodal learning history)
- The "recursive theory of mind" seems to mean: analyze strategic behavior over time (in this case, the interplay between modalities in optimization)
- Cross-layer vetoes: physical computation/memory/thermodynamic limits
- RLVR counterfactuals: 3 falsifiable predictions

Let me plan the response:

1. THINK_TRACE (>=400 words): Deep analysis of the OPM/OGM mechanism, multi-hop derivation of why imbalanced learning occurs, and gray-zone audit of the paper's claims.

2. SOURCE_OPERATORS_AND_EQUATIONS: All the formal equations with LaTeX, page citations, assumptions, singularity/breakdown regimes.

3. RETROCAUSAL_GENEALOGY: Historical lineage from Wang et al. 2020 (GBlending) through Huang's modality competition theory, to Du's distillation, to the current paper. Multi-week traps (what got the field to this point).

4. RECURSIVE_THEORY_OF_MIND: The modality dynamical game — dominant modality suppressing suppressed one is a strategic equilibrium. Crisis habit regression = modalities return to dominant behavior. Counter-trap = OGM*/gradient amplification fails. Clock = discrepancy ratio evolution.

5. CROSS_LAYER_VETO_ADJUDICATION: Physical/computational vetoes on the paper's claims. Memory limits, batch size constraints, Gaussian noise assumptions, LLM-based encoders.

6. RLVR_COUNTERFACTUAL_VETOES: 3 falsifiable scenarios.

Let me be careful about not mentioning betting terminology, but the framework seems to have adapted "sports" language. Since the source is an ML paper, I'll interpret everything in ML terms while respecting the XML structure.

Now let me write this out with depth, citing exact pages.

Key equations to cite:
- Eqn 1 (page 4): f(x_i) = W[φ¹;φ²;...;φ^M]+b
- Eqn 2 (page 4): f(x_i) = W¹·φ¹_i + W²·φ²_i + ... + W^M·φ^M_i + b
- Eqn 3 (page 4): W update rule
- Eqn 4 (page 4): θ update rule
- Eqn 5 (page 4): gradient of loss w.r.t. f
- Eqn 6 (page 5): s_i^m = sum_c 1_{c=yi} · ι(W_i^m·φ_i^m + b/M)_c
- Eqn 7 (page 5): ρ_t^m = 1/(M-1) sum_j≠m (sum s_i^m/s_i^j)
- Eqn 8 (page 5): q_{t+1}^m = q_base · (1+λ·z(ρ_t^m)) if ρ>1, else 0
- Eqn 9 (page 6): θ_{t+1}^m = θ_t^m - η∇L
- Eqn 10 (page 6): θ_{t+1}^m = θ_t^m - ηg̃(θ_t^m)
- Eqn 11 (page 6): k_t^m = 1-α·z(ρ_t^m) if ρ>1, else 1
- Eqn 12 (page 7): θ_{t+1}^m = θ_t^m - η·k_t^m·g̃(θ_t^m)
- Eqn 13 (page 7): g̃ ~ N(∇L, U/|B_t|)
- Eqn 14 (page 7): SGD noise decomposition
- Eqn 15 (page 7): noise-harm equation
- Eqn 16 (page 7): noise recovery
- Eqn 17 (page 7): final OGM update
- Eqn 18 (page 8): Accuracy
- Eqn 19 (page 9): mAP
- Eqn 20 (page 9): F1

Let me draft this now.

For the multi-hop derivation: The paper's core claim is that the sum-based feed-forward architecture creates a dominant-modality equilibrium. The gray zone is that the paper doesn't justify why "the sum of uni-modal components determines the gradient" - there's a nonlinearity through softmax that the paper hand-waves.

Actually, looking more carefully at page 4, the text says: "the concrete value of gradient for category c, ∂ℓ(xi,yi)/∂f(xi)c, is also controlled by the sum of uni-modal components, although it is not analytically equal to the sum of corresponding uni-modal components." This is a hedge — the paper admits it's not linear but still claims control.

The gray-zone audit should examine where the paper's reasoning is shaky:
1. The bias split b/M is arbitrary — Table 14 shows it doesn't matter much, but why?
2. The "control by sum" claim is heuristic — softmax introduces nonlinearity
3. The dominance assumption relies on one modality being more discriminative for ALL samples, but category-wise Figure 8 shows per-category dominance flips
4. OPM+OGM combination is inconsistent (Table 12)
5. Train/val contamination in CREMA-D split (6,698 train+val vs 744 test — validation used during training adversely)

For historical lineage: 
- Cognitive neuroscience multi-sensory integration (Page 1, [1])
- Wang et al. CVPR 2020 GBlending [8]
- Huang et al. "Modality Competition" [10]
- Wu et al. Greedy [11]
- Du et al. distillers [22]
- Peng et al. CVPR 2022 original OGM [15]
- Current paper extends to OPM

Multi-week traps: The field spent years adding uni-modal classifiers/losses (GBlending) which added training costs. The distillation approach required good teachers (2-stage training). The paper positions itself as "no extra modules" — but the trap is that any deterministic dominance detection reifies a fixed assumption.

Recursive theory of mind section: This maps to the modality dynamical game — how each modality's optimizer "knows" the other is dominating. Crisis habit regression = the dominant modality returns to domination whenever λ decays or z approaches 0. Counter-trap = OGM* (gradient amplification) demonstrates the asymmetry — the paper's own experiment on page 12 shows OGM* only marginally improves. The clock is the discrepancy ratio ρ_t evolution (Figure 5b, 7b).

Cross-layer vetoes: 
- Computational: batch size |B_t| proportional to noise, and smaller batch means more noise but worse gradient estimate (Table 1)
- Memory: 2× RTX 3090 Ti, SGD momentum 0.9, lr 1e-3
- The Gaussian noise assumption in Eqn 13 requires large batch (CLT) — breakdown at small batch
- OGM noise recovery in Eqn 16 requires sampling U/|B_t|, which is a d×d covariance matrix — infeasible for large models (d ~ millions), so it's probably diagonal
- The paper doesn't say how h is sampled — Appendix not provided

RLVR counterfactual vetoes:
1. What if the discrepancy ratio is inverted at test time? (Would break the dominance assumption)
2. What if a third modality is added that also dominates? (CMU-MOSI/UCF-101-Three shows OPM+OGM doesn't improve much)
3. What if you simply train with matched dropout baseline of the same expected compute? (Does the adaptivity actually help, or just the dropout rate?)
4. What if you swap z(x) to a constant — does it still help? (Table 15 shows yes, suggesting the adaptivity isn't key)

Wait, Table 15 shows variants still improve. This suggests the adaptivity isn't strictly necessary. Interesting.

For predictions: I should predict which claims would survive controlled test, and where the framework would break.

Let me also make sure to include page citations as [PAGE X].

Length: >= 1,000 words. Should be doable with depth.

Let me structure the actual response. I'll use the exact XML tags requested.

I need to be careful:
- LaTeX must be formal with units
- Cite pages with [PAGE N] markers and verbatim quotes
- Identify singularity/breakdown regimes
- No betting lines (but there aren't any in an ML paper, so this is naturally satisfied)
- No toy equations

Let me draft:

---

<THINK_TRACE>
Deep multi-hop derivation. 

Hop 1: The paper's core problem is imbalanced multimodal learning. Key observation on [PAGE 1]: "the visual encoder in the audio-visual model has a more clear drop, compared with the audio modality." This is empirical — Fig 1a/1b show this.

Hop 2: Mechanism derivation. The concatenation fusion in Eqn 1 [PAGE 4] produces f(x_i) = W[φ¹;φ²;...;φ^M] + b, which Eqn 2 rewrites as f(x_i) = Σ_m W^m·φ_i^m + b. So the logit is an additive composition.

Hop 3: Backprop. Eqn 5 [PAGE 4] shows ∂ℓ/∂f_c = softmax(f)_c - 1_{c=yi}. This gradient is fed equally to all modalities via the chain (Eqn 4). So if the dominant modality's logit sum already predicts the correct class with high confidence, softmax(f)_c ≈ 1_{c=yi}, and the gradient shrinks for ALL modalities, including the suppressed one.

Hop 4: This is the "gradient starvation" mechanism. The suppressed modality receives the same small gradient magnitude as the dominant one, but its actual logit contribution was smaller; so it gets insufficient signal to catch up. This is the diagnostic.

Hop 5: Gray zone. The paper's own caveat on [PAGE 4]: "although it is not analytically equal to the sum of corresponding uni-modal components." So the linearity claim is heuristic, not exact. Softmax is a nonlinear bounded map; when ||W^m·φ^m||_2 >> ||W^j·φ^j||_2 for all j≠m, saturating softmax means gradient is essentially determined by m alone. In the regime where two modalities have comparable magnitude, the attribution is ambiguous. The paper's ρ_t measure (Eqn 7) is a proxy, not the true gradient attribution.

Hop 6: Proportionality of ρ. ρ_t^m = (1/(M-1)) Σ_j (Σ s_i^m/Σ s_i^j). This is a geometric mean of pairwise ratios of confidence sums. If modality m is dominantly more confident, ρ > 1 and modulation triggers. But geometric mean is sensitive to outliers — if one modality has collapsed (s_j ≈ 0), ρ blows up to ∞, potentially over-modulating.

Hop 7: The modulation functions. Eqn 8: q^m = q_base·(1+λ·z(ρ^m)) if ρ>1, else 0. With z = tanh(x-1), z is bounded in (0,1), so q ∈ (q_base, q_base·(1+λ)). Constraint q ≤ 1 enforced. Singularity: if λ is unbounded and z unbounded (sigmoid instead of tanh), q can exceed 1 — prevented by cap.

Hop 8: OGM. Eqn 11: k_t^m = 1-α·z(ρ^m) if ρ>1, else 1. k ∈ (1-α, 1). α>0 small. If α·z = 1 exactly (e.g., α=1, z=1), k=0 — gradient is zeroed. This is a singular regime but prevented.

Hop 9: The noise recovery. Eqn 16 introduces h ~ N(0, U/|B_t|). But U is a covariance matrix of dimension d×d. Sampling from d×d Gaussian for d = millions is O(d^2) memory, O(d^3) sampling time — computationally infeasible. The paper says "same covariance as current g̃(θ_t^m)", which strongly suggests diagonal approximation. But this is not stated. Veto on exact implementation.

Hop 10: Gray zone — OPM+OGM combo. Table 12 [PAGE 12] shows OPM+OGM sometimes BETTER (CREMA-D: 76.7 vs OPM 75.1, Kinetics-Sounds: 68.0 vs 67.0) but sometimes WORSE (UCF-101: 81.5 vs OPM 81.9, VGGSound: 53.3 vs OPM 54.1). The paper's own explanation: "the estimation of uni-modal discriminative performance discrepancy is likely to be influenced when simultaneously conducting modulation at the feed-forward stage and back-propagation stage." This is a breakdown regime of the combined method.

Hop 11: Gray zone — OGM* vs OGM. Table 13 [PAGE 13] shows OGM* (amplify suppressed) barely helps: CREMA-D 67.2 (vs OGM 74.6, baseline 66.9), Kinetics-Sounds 63.9 (vs OGM 65.4, baseline 63.0). This proves that suppression of the dominant is necessary, not amplification of the weak. Mechanism: suppression is a symmetric additive operation that changes the equilibrium; amplification is path-dependent and can push the suppressed modality into a bad basin.

Hop 12: Validation set contamination. [PAGE 8]: "6,698-sample training and validation set and a 744-sample testing set." Combined training+validation is used — this means early stopping was on the same 6,698 used for training, unless split internally. Best-practice issue.

Hop 13: Cross-dataset generalizability — CREMA-D shows the largest gains (66.9→75.1, Δ=8.2 accuracy). VGGSound (much larger natural dataset) shows smallest (52.7→54.1, Δ=1.4). This is consistent with the "controlled environment" argument on [PAGE 9]: "data samples of CREMA-D dataset are recorded videos in controlled environments with less noise."

Hop 14: Batch size sensitivity (Table 1, [PAGE 7]). |B_t| = 32 with lr=1e-3 is 66.9; |B_t|=128 is 61.9. This confirms noise-strength hypothesis but also means the "best" configuration is the noisiest, potentially at the cost of convergence stability. The tradeoff: on smaller batch you get more noise (better generalization) but worse gradient signal — a compensable tradeoff only because modalities are 2.

That should be ~500-600 words. Let me continue drafting.

Actually, let me count. I'll aim for about 600-800 words in THINK_TRACE.

<SOURCE_OPERATORS_AND_EQUATIONS>
Provide all equations in LaTeX with units and page citations.

Key units:
- φ^m(θ^m, x^m): feature vector ∈ R^{d_φ^m}
- W^m ∈ R^{C × d_φ^m}
- f(x_i) ∈ R^C
- ρ^m ≥ 0 (dimensionless ratio)
- q^m ∈ [0, 1] (probability)
- k^m ∈ [1-α, 1] (dimensionless coefficient)
- α, λ, q_base, η, |B_t| (hyperparameters/iterations)
- U covariance (Hessian-of-loss scale)

Singularities:
- Eqn 7: ρ → ∞ when s_j = 0 for some modality (modality collapse)
- Eqn 12: k = 0 when α·z(ρ) = 1 — full gradient suppression
- Eqn 13: Gaussian approximation requires |B_t| large (CLT) — breaks at |B_t| below finite-sample threshold
- Eqn 16: sampling from U/|B_t| covariance — O(d²) infeasible for large d

<RETROCAUSAL_GENEALOGY>
Trace the lineage:
- 2018: Pérez FiLM conditioning (multimodal), Tian AVE
- 2019: Kazakos Epic-Fusion
- 2020: Wang GBlending (CVPR), Chen VGGSound, Neverova ModDrop
- 2021: Wu Greedy (ICML), Du distillation
- 2022: Peng OGM (CVPR — original conference version)
- 2022: Huang Modality Competition theory (arXiv)
- 2024: Current journal extension (OPM + OGM)

Multi-week traps:
1. The "add uni-modal classifiers" trap (GBlending): 1.50× training time
2. The "distill from teachers" trap (Du): requires pre-trained modality teachers
3. The "sample-level Shapley valuation" trap (Wei et al. CVPR 2024): K-sample Shapley O(2^M) — combinatorial
4. The "re-initialization" trap (Wei et al. ECCV 2024): reinit is destructive

<RECURSIVE_THEORY_OF_MIND>
Map to the modality dynamical game:
- Dominant modality has "intent" to minimize loss via its own path
- Suppressed modality has "intent" to contribute
- The softmax acts as a "regulator" that allocates gradient by confidence
- Crisis habit regression: when λ decays or ρ→1, dominant modality returns to domination (Figure 5b shows ρ drops but stays >1)
- Counter-trap: OGM* shows amplification of the weak does not break the equilibrium; only suppression works
- Clock: ρ_t dynamics over 100 epochs (Figure 5, 7b) — the "clock" that must be respected

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/computational vetoes:
1. Memory veto: 2× RTX 3090 Ti = 48 GB total, ResNet-18 (11M params each) × 2 modalities + optimizer states — feasible but tight
2. Gaussian sampling veto: U is d×d; for ResNet-18 encoder d ~ 512 feature dim, W is 6×512 or 101×512. U on features manageable, but on parameters d~11M, U is 11M × 11M — clearly diagonal is used
3. Convergence veto: batch 32 with lr 1e-3 — stability requires momentum 0.9, adam would be different
4. Wall-clock veto: Table 4 confirms 1.01× overhead — the OPM/OGM math is cheaper than GBlending 1.50×
5. Data veto: VGGSound 168,618 training videos at 1fps × 3 frames = storage intensive
6. Test set size veto: CREMA-D 744 test examples — a 1% accuracy swing is 7 examples; 8.2% improvement is statistically solid, but 1.4% (VGGSound) is on 13,954 test examples — within reason

<RLVR_COUNTERFACTUAL_VETOES>
3 scenarios:

1. Constant-q baseline veto: Replace ρ_t with constant q = 0.25 (matching mean drop). If matched-compute constant-q achieves equivalent or better than OPM, the adaptivity claim is falsified. Prediction: OPM beats constant q by ≤ 1% on CREMA-D; ~0% on VGGSound. The paper doesn't include this control.

2. Per-category flip veto: Fig 8 [PAGE 14] shows per-category dominance flips (playing saxophone → audio-dominant; dribbling basketball → visual-dominant). If we train a single-dataset model with category-stratified ρ_t (category-wise dominant), do we see further gains? If yes, the batched aggregate ρ_t is too coarse. Prediction: gains from category-stratified OPM ≈ 0.5-1.5% additional on VGGSound (which has 309 classes).

3. Zero-noise OGM veto: OGM without added Gaussian noise h (Eqn 16) — how much does generalization drop? If the drop is negligible, then noise recovery is over-engineered. Prediction: without h, OGM test accuracy drops ~1.5-3% relative to paper's numbers on CREMA-D, because noise effect is empirically significant (Table 1 shows η / |B_t| matters).

That's a good structure. Let me also make sure to cite verbatim quotes with [PAGE N].

Quotes to use:
- [PAGE 1]: "the visual encoder in the audio-visual model has a more clear drop, compared with the audio modality"
- [PAGE 1]: "there often exists a dominant modality [14] with the better discriminative ability (e.g., vision of drawing and sound of wind blowing)"
- [PAGE 4]: "the concrete value of gradient for category c, ∂ℓ(xi,yi)/∂f(xi)c, is also controlled by the sum of uni-modal components, although it is not analytically equal to the sum of corresponding uni-modal components"
- [PAGE 4]: "Even if another modality is under-optimized and yields incorrect results, the component from the better-performing modality m can still 'correct' these errors during summation"
- [PAGE 5]: "When the average uni-modal discriminative performance ratio to other modalities is larger than 1, i.e., ρ_t^m > 1, modality m is more discriminative"
- [PAGE 6]: "the gradient of modality with more discriminative information is mitigated, then the overall training process is slowed down and another modality could gain more optimization efforts"
- [PAGE 7]: "when the learning rate and batch size are fixed, the modulated SGD noise term ξ′_t is smaller than the original ξ_t, leading to the generalization ability of multimodal model could be affected"
- [PAGE 9]: "the convergence loss of our OPM and OGM methods is higher than that of the baseline, possibly because our modulation prevents the multimodal model from over-memorizing the training samples"
- [PAGE 12]: "the estimation of uni-modal discriminative performance discrepancy is likely to be influenced when simultaneously conducting modulation at the feed-forward stage and back-propagation stage"

Let me now write the final response.

I need to make sure each XML section is present and labeled correctly. Let me draft the complete response.

Word count target: >=1,000 words total. I'll aim for 1,800-2,500 to be safe.

One more thing: the framework asks for "multi-week traps" which I interpret as long-horizon design traps that caught the field. And "crisis habit regression" — in a sports context this would be a recurrent behavioral pattern; in ML it's the dominant modality re-asserting itself after early modulation. Let me make sure to be explicit about the reinterpretation.

The framework says ZERO BETTING LINES. I will not mention any betting terminology. In an ML paper context this is trivially satisfied.

The framework says "No toy equations like Force/Fatigue." In my analysis I'll only use the paper's own equations plus derived physical/statistical operators from them.

OK writing now.
</NATIVE_REASONING>

<THINK_TRACE>
**Multi-hop derivation of the OPM/OGM mechanism.**

*Hop 1 — empirical anchor.* The paper opens with a paradox: adding a modality can lower performance. Verbatim [PAGE 1]: "the multimodal model can be inferior to the uni-modal one [8]." The authors localise the loss not to the fusion head but to the encoders: verbatim [PAGE 1], "the visual encoder in the audio-visual model has a more clear drop, compared with the audio modality." The diagnostic quantity is not multimodal accuracy but **encoder intrinsic quality**, measured by freezing an encoder at epoch $t$ and fitting a fresh linear probe (footnote 1, [PAGE 1]).

*Hop 2 — additive decomposition.* Late-fusion concatenation with a single linear classifier gives $f(x_i)=W[\varphi^1;\dots;\varphi^M]+b$, which is algebraically the additive form $f(x_i)=\sum_m W^m\cdot \varphi^m_i + b$ (Eqn 2, [PAGE 4]). The logit is therefore a linear superposition of per-modality contributions — the foundation for all subsequent attribution.

*Hop 3 — gradient starvation.* Eqn 5 [PAGE 4] gives $\partial\ell/\partial f_c = \mathrm{softmax}(f)_c - \mathbf{1}_{c=y_i}$. When the dominant modality alone pushes $\mathrm{softmax}(f)_{y_i}\to 1$, this term collapses toward $0$ for **every** modality simultaneously. The paper's own wording [PAGE 4]: "the component from the better-performing modality $m$ can still 'correct' these errors during summation, thus influencing both the feed-forward and back-propagation stages."

*Hop 4 — the modus ponens.* If the suppressed modality is receiving a near-zero gradient because the dominant modality has already closed the softmax gap, then the only way to restore learnable gradient is to *prevent the dominant modality from closing the gap*. That is the entire architectural logic of both OPM (feature-drop, feed-forward) and OGM (gradient-attenuation, back-propagation).

*Hop 5 — gray-zone audit of linearity.* The paper itself hedges [PAGE 4]: "although it is not analytically equal to the sum of corresponding uni-modal components." This is critical. The softmax argument requires that $\|W^m\varphi^m\|_2 \gg \|W^j\varphi^j\|_2$ for all $j\neq m$ at saturation. In the *mixed regime* where two modalities contribute comparably, attribution is ambiguous and the $\rho^m$ monitor becomes a proxy of confidence rather than a proxy of gradient share. This is the paper's single largest unexamined assumption.

*Hop 6 — the $\rho$ estimator and its singularity.* Eqn 7 [PAGE 5] defines $\rho^m_t = \frac{1}{M-1}\sum_{j\neq m}\left(\sum_{B_t}s^m_i / \sum_{B_t}s^j_i\right)$. It is a geometric mean of pairwise confidence ratios. If any $s^j_i\to 0$ (modality collapse), $\rho$ diverges to $\infty$; if a batch variance is high, the estimate is unstable. The paper caps the resulting $q^m_{t+1}$ at 1 and $k^m_t$ at 0 for legality, but does not bound $\rho$ itself. **Singularity regime:** any modality that produces zero-confidence features (e.g., corrupted sensor, silenced audio) blows up the modulator.

*Hop 7 — OPM vs OGM asymmetry.* OPM drops features with probability $q^m_{t+1}\in(q_{base}, q_{base}(1+\lambda))$; OGM attenuates gradients with coefficient $k^m_t\in(1-\alpha,1)$. Numerically the OPM modulation is *stronger* — a drop is a hard zero on the feed-forward path, while OGM only scales the update by a factor near 0.9 (with typical $\alpha\in(0.1,0.5)$). This matches the empirical hierarchy in Table 2 [PAGE 8]: on CREMA-D, OPM 75.1 vs OGM 74.6 vs baseline 66.9.

*Hop 8 — noise-recovery algebra.* Eqn 14 [PAGE 7] shows SGD noise $\xi_t\sim\mathcal{N}(0,\eta^2 U/|B_t|)$. After modulation, Eqn 15 gives $\xi'_t\sim\mathcal{N}(0,k_t^2\eta^2 U/|B_t|)$ — noise variance scales as $k^2$. With $k\in(1-\alpha,1)$, variance shrinks by up to $\alpha^2$ on the dominant modality, which Table 1 [PAGE 7] shows degrades generalization ($|B_t|=128$ at lr $10^{-3}$: 61.9 vs 66.9). Eqn 16 compensates with $h\sim\mathcal{N}(0,U/|B_t|)$, giving Eqn 17 final noise variance $(k^2+1)\eta^2 U/|B_t|$ — **strictly larger** than baseline.

*Hop 9 — computational veto on $h$.* $U$ is the covariance of $\tilde g(\theta_t^m)$. For ResNet-18 encoder $\theta$ is $O(10^7)$ dimensional, so $U$ is $O(10^{14})$ entries. The paper does not disclose how $h$ is sampled. Under any plausible engineering, this is a **diagonal-Gaussian approximation**, $U\approx \mathrm{diag}(\sigma^2)$, with $\sigma^2$ estimated from the batch gradient. If true, the "same covariance as current $\tilde g$" claim on [PAGE 7] is silently an approximation.

*Hop 10 — combined-instrumentation instability.* Table 12 [PAGE 12]: OPM+OGM is better than either alone on CREMA-D (76.7) and Kinetics-Sounds (68.0) but *worse* than OPM-alone on UCF-101 (81.5 vs 81.9) and VGGSound (53.3 vs 54.1). The paper's own explanation: "the estimation of uni-modal discriminative performance discrepancy is likely to be influenced when simultaneously conducting modulation" [PAGE 12]. This is a genuine breakdown regime of the compound method: when OPM drops a modality in the forward pass, the $\rho$ estimator computed on the *previous* batch no longer reflects the *current* effective modality set.

*Hop 11 — the OGM* control.* Table 13 [PAGE 13]: OGM* (amplify suppressed gradient) yields CREMA-D 67.2 vs OGM 74.6 vs baseline 66.9. This is a decisive control. The mechanism is *not* symmetric — only suppressing the dominant modality breaks the equilibrium, amplifying the weak does not. Graphically corroborated in Fig. 5b [PAGE 12], where OGM* leaves $\rho$ near the baseline while OGM halves it.

*Hop 12 — data hygiene veto.* [PAGE 8] describes CREMA-D as "a 6,698-sample training and validation set and a 744-sample testing set." Since train+val are a single bucket, early-stopping decisions contaminate the test metric unless an internal split was silently applied. This is a best-practice hazard; the 8.2 pp gain on CREMA-D is large enough to survive, but the number should be read as an upper bound.

*Hop 13 — dataset-scale decay.* Marginal gain is monotone decreasing in dataset scale: CREMA-D $\Delta=+8.2$, Kinetics-Sounds $\Delta=+4.0$, UCF-101 $\Delta=+1.4$, VGGSound $\Delta=+1.4$. The paper's own attribution [PAGE 9]: "data samples of CREMA-D dataset are recorded videos in controlled environments with less noise." This is a clean dose-response: the more suppressed information exists in the data-generating process, the more modulation helps.

*Hop 14 — hyperparameter plateau vs optimum.* Fig. 9 [PAGE 15] shows $\lambda$, $q_{base}$, $\alpha$ all yielding improvements regardless of exact value. But this is the **victory of the dropout-rate prior, not of adaptivity**: a constant-rate dropout anywhere in $[0.2,0.6]$ also helps, and the paper does not include the constant-rate matched-$q$ control.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>

**Forward operator (Eqn 1, [PAGE 4]):**
$$f(x_i) = W\left[\varphi^1(\theta^1,x^1_i);\dots;\varphi^M(\theta^M,x^M_i)\right] + b,\quad f:\mathbb{R}^{d}\to\mathbb{R}^C$$
Units: logits, dimensionless (pre-softmax scores). $W\in\mathbb{R}^{C\times\sum_m d_{\varphi^m}}$, $b\in\mathbb{R}^C$; $d_{\varphi^m}$ is output-dim of encoder $m$.

**Additive decomposition (Eqn 2, [PAGE 4]):**
$$f(x_i)= W^1\cdot\varphi^1_i + W^2\cdot\varphi^2_i + \cdots + W^M\cdot\varphi^M_i + b$$
This is the load-bearing operator — all attribution theory in the paper rests on the algebraic identity of concatenation with weighted summation under a linear classifier.

**Parameter updates (Eqns 3–4, [PAGE 4]):**
$$W^m_{t+1} = W^m_t - \eta \cdot \tfrac{1}{N}\sum_{i=1}^{N} \tfrac{\partial \ell(x_i,y_i)}{\partial f(x_i)}\varphi^m_{i,t},\quad \theta^m_{t+1}=\theta^m_t-\eta\cdot\tfrac{1}{N}\sum_i \tfrac{\partial \ell}{\partial f}\tfrac{\partial(W^m_t\cdot\varphi^m_{i,t})}{\partial \theta^m_t}$$
Units: $\eta$ = [update] / [dimensionless loss gradient], i.e. inverse of a gradient.

**Cross-entropy gradient (Eqn 5, [PAGE 4]):**
$$\frac{\partial \ell(x_i,y_i)}{\partial f(x_i)_c}=\mathrm{softmax}_c(f(x_i)) - \mathbf{1}_{c=y_i}$$
Dimensionless. Range $[-1,1]$ per class. **Breakdown regime:** as $\mathrm{softmax}_{y_i}\to 1$ (dominant modality has closed the gap), all components $\to 0$ simultaneously — the "gradient starvation" singularity. This is the *only* equation in the paper that genuinely forbids the dominant-saturation regime.

**Uni-modal proxy (Eqn 6, [PAGE 5]):**
$$s^m_i = \sum_{c=1}^C \mathbf{1}_{c=y_i}\cdot \iota\!\left(W^m_i\cdot\varphi^m_i(\theta^m,x^m_i)+\tfrac{b}{M}\right)_{\!c}$$
Units: probability (dimensionless, $s^m_i\in[0,1]$); $\iota$ = softmax. The bias split $b/M$ is heuristic — Table 14 [PAGE 14] shows deltas of ≤1 pp across splits.

**Discrepancy ratio (Eqn 7, [PAGE 5]):**
$$\rho^m_t = \frac{1}{M-1}\sum_{j\in[M],\,j\neq m}\frac{\sum_{i\in B_t}s^m_i}{\sum_{i\in B_t}s^j_i}$$
Dimensionless, $\rho^m_t\in(0,\infty)$. **Singularity:** $\rho^m_t\to\infty$ when $\sum s^j_i\to 0$; divergence is not bounded, only its downstream factors (Eqns 8, 11) are capped.

**OPM drop schedule (Eqn 8, [PAGE 5]):**
$$q^m_{t+1} = \begin{cases} q_{base}\cdot(1+\lambda\cdot z(\rho^m_t)), & \rho^m_t>1\\ 0, & \text{otherwise}\end{cases}$$
$q\in[0,1]$ (probability); $z=\tanh(x-1)$ so $z\in(0,1)$; range $q\in(q_{base}, q_{base}(1+\lambda))$ subject to $\min(q,1)$. **Breakdown:** with $z=$ sigmoid and $\lambda$ large, $q>1$ — the paper explicitly clamps.

**OGM coefficient (Eqn 11, [PAGE 6]):**
$$k^m_t = \begin{cases}1-\alpha\cdot z(\rho^m_t), & \rho^m_t>1\\ 1,&\text{otherwise}\end{cases}$$
Dimensionless, $k\in(1-\alpha,1)$. **Singularity:** $k=0$ iff $\alpha\cdot z = 1$; clamped to 0 for legality [PAGE 7].

**OGM update (Eqn 12, [PAGE 7]):**
$$\theta^m_{t+1} = \theta^m_t - \eta\cdot k^m_t\cdot\tilde{g}(\theta^m_t), \quad \tilde{g}(\theta^m_t)=\tfrac{1}{|B_t|}\sum_{x\in B_t}\nabla_{\theta^m}\ell(x;\theta^m_t)$$

**SGD noise structure (Eqns 13–14, [PAGE 7]):**
$$\tilde{g}(\theta^m_t)\sim \mathcal{N}\!\left(\nabla_{\theta^m}\mathcal{L}(\theta^m_t),\tfrac{U}{|B_t|}\right),\quad \xi_t\sim\mathcal{N}\!\left(0,\tfrac{\eta^2}{|B_t|}U\right)$$
Units: $U$ = [grad²] per sample, covariance; noise std scales as $\eta/\sqrt{|B_t|}$. **Breakdown (CLT finite-sample bound):** approximation fails when $|B_t|$ is small enough that per-sample gradients are heavy-tailed — the paper relies on $|B_t|=32$ [PAGE 8], precisely in the tail-sensitive regime.

**Modulated noise (Eqn 15, [PAGE 7]):** $\xi'_t \sim \mathcal{N}(0,k_t^2\eta^2 U/|B_t|)$ — variance shrinks by $k^2$.

**Noise recovery (Eqns 16–17, [PAGE 7]):**
$$\theta_{t+1}^m = \theta_t^m - \eta k_t^m\nabla_{\theta^m}\mathcal{L}(\theta^m_t)+\xi''_t,\quad \xi''_t\sim\mathcal{N}\!\left(0,(k_t^2+1)\tfrac{\eta^2}{|B_t|}U\right)$$
Variance is *strictly larger* than baseline by factor $(k^2+1)$ — the "even enhanced" claim on [PAGE 7]. **Implementation veto:** sampling from $U\in\mathbb{R}^{d\times d}$ with $d\sim 10^7$ is $O(d^2)$ memory — infeasible; the actual code must diagonalise, which changes the covariance structure. This is the paper's largest reproducibility gap.

**Evaluation operators (Eqns 18–20, [PAGE 8–9]):**
$$\text{Acc}=\frac{\sum_{i=1}^{A}\mathbf{1}_{\hat y_i=y_i}}{A},\quad \text{AP}_c=\sum_n (R_{c,n}-R_{c,n-1})P_{c,n},\quad \text{F1}=2\cdot\frac{\text{Precision}\cdot\text{Recall}}{\text{Precision}+\text{Recall}}$$
All dimensionless in $[0,1]$.

</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>

**Lineage, 2010 → 2024.**

*Multi-sensory integration lineage.* The framing [PAGE 1] traces to cognitive neuroscience [1] and to the "look, listen, and learn" programme (Arandjelovic & Zisserman, CVPR 2017, ref [48]). The observation of *modality dominance* is not novel to this paper — Parida et al. 2020 [14] and Wang et al. 2020 [8] both flagged asymmetry. The paper's retroscope honestly places itself after these.

*The imbalance genealogy.* Four distinct lineages converge here:
1. **Gradient-balancing lineage** — Wang et al. CVPR 2020 (GBlending, [8]) added uni-modal losses. The paper's Table 5 [PAGE 9] shows GBlending $\Delta$CREMA-D = +5.1, but Table 4 [PAGE 9] shows training time **1.50×** baseline. This is the "extra-classifier trap."
2. **Distillation lineage** — Du et al. 2021 [22], which required *pre-trained uni-modal teachers* and 2× training.
3. **Greedy-learning lineage** — Wu et al. ICML 2022 [11], which measures relative learning speed and guides the model. Table 5 confirms marginal but real gains; Table 4 confirms 1.01× overhead (efficient, but underperforms OPM/OGM).
4. **Modality-valuation lineage** — Wei et al. CVPR 2024 [24] via Shapley $O(2^M)$ sample-level attribution; Wei et al. ECCV 2024 [25] via destructive re-initialisation.

The present paper's originality is the explicit **feed-forward vs back-propagation** dichotomy: OPM (CVPR 2022 conference paper's OGM already existed [15], but OPM is introduced here) is the new contribution, the journal extension is the analysis of *why* both stages need modulation.

*Theoretical lineage.* Huang et al. 2022 [10] "Modality Competition" provided the proof that joint training cannot efficiently learn all modalities — this is the theoretical substrate the paper inherits. The paper does not extend this proof; it assumes it.

*Multi-week traps (long-horizon design failures that captured the field before this paper reset it):*

- **The dropout-rate trap.** Neverova's ModDrop [31] fixed the drop probability at a constant. The paper's Fig. 7a [PAGE 13] shows that constant dropout misses *dynamical* re-balancing. But Table 15 [PAGE 14] also shows that sigmoid vs tanh (both near-constant) yields nearly equivalent performance — so the "dynamical" claim may be weaker than the paper argues.
- **The symmetric-gradient trap.** Pre-2022 literature did not distinguish amplifying the weak from suppressing the strong. Table 13 [PAGE 13] settles the question: OGM* $\Delta$CREMA-D $= +0.3$ vs OGM $= +7.7$. **Suppression is not symmetric to amplification.**
- **The single-layer-classifier trap.** All early attribution methods required the additive identity of Eqn 2. Section 4.3.7 [PAGE 11] extends to multi-layer classifiers with a zero-out approximation, borrowing the method from Hu et al. [66].
- **The "vocabulary" trap.** Categories in VGGSound are defined by sound, but Fig. 8 [PAGE 14] shows category-level dominance flips (dribbling basketball → visual; playing saxophone → audio). Any dataset-level $\rho$ is a *mean* that flattens these flips — an unexamined approximation.

The **retrocausal** direction here is: the 2024 paper's OPM is conditionally derived from the 2022 conference paper's OGM, but the diagnostic logic *inverts* — OGM was justified because modulation slowed training; OPM is justified because it can be applied *even if* the dominant modality's gradient is already small (feed-forward stage offers a lever that back-propagation cannot reach). The paper's conclusion that OPM > OGM on most benchmarks (5/6 datasets) would retroactively invalidate the 2022 paper's implicit priority given to back-propagation.

</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>

**The modality optimization game.**

The paper frames the imbalance as a *strategic* dynamic (even if not so named): each modality's encoder is a self-interested player whose "utility" is the decrease in joint cross-entropy $\ell(x_i,y_i)$, but whose action space is $\theta^m$. Under the additive operator (Eqn 2), the dominant modality can reduce $\ell$ substantially on its own, so it has an optimal action of "close the softmax gap." The suppressed modality faces a first-order condition $\partial\ell/\partial\theta^m \approx 0$ because the chain factor $\partial\ell/\partial f$ is already near zero — it is *not* that it cannot learn; it is that the gradient signal it receives is degenerate. This is a Stackelberg game with a *de facto* leader.

**Crisis habit regression.** After any training interruption (learning-rate decay, batch-shuffle, warm-restart), the dominant modality reverts to type — it re-establishes softmax dominance within a few iterations. The paper's Fig. 5b [PAGE 12] and Fig. 7b [PAGE 13] show $\rho$ remains **strictly $>1$** throughout all 100 epochs even with OGM. Verbatim [PAGE 12]: "the two modalities are hard to have equal performance, i.e., the discrepancy ratio is hard to be close to 1, since the uni-modal discriminative information is naturally not equal in the curated dataset." The habit regression is *irreducible* — the modulator only depresses the asymptote, it does not eliminate dominance. Predicting when this re-emerges requires tracking $\rho_t$ with the same care as the loss curve; the paper's Fig. 7a shows $q$ for audio hovering at $q_{base}+\text{small}$ while $q$ for visual = $0$, so the OPM modulator itself never fully relaxes.

**Counter-trap integrity.** The counter-trap for this method would be *over*-modulation — suppressing the dominant modality so hard that its own learning is permanently damaged. Table 13 [PAGE 13] is the closest the paper comes to testing it: OGM* amplifies suppressed and underperforms, but no experiment tests $\lambda$ or $\alpha$ at very large values (Fig. 9 [PAGE 15] tests $\lambda,\alpha,q_{base}\in[0.2,0.6]$ only). **Untested regime:** $\lambda>2$, $\alpha>0.8$ — where over-suppression would begin to erase the dominant modality's accuracy. The paper's optimum is on the *low* side, which is reassuring but not conclusive.

**Clock sensitivity.** The $\rho$ trajectory over training (Fig. 5a, Fig. 7b [PAGE 12–13]) is the paper's true clock. On Kinetics-Sounds, $\rho$ starts high (audio-dominant) and *decreases* with OGM but *increases* with OGM* — meaning the game can be pushed the wrong direction if the instrumentation is misapplied. The clock analogy is load-bearing: with 100 epochs at ~$10^4$ samples per epoch, the modulator's action must be *slow fast slow* — heavy at early-mid training, relaxed at convergence.

**Recursive belief.** The dominant modality "believes" the suppressed one is hopeless, because in the joint training regime the softmax has already been driven to near-saturation. The modulator is a belief-breaking intervention: it forces the model to introspect whether a *counterfactual* modality could have carried the sample. This is why OPM uses *dropping* rather than *down-weighting* — a scalar multiplier is a continuous belief update, whereas a zero-one drop is a discontinuous one. Discontinuous interventions break equilibria; continuous ones do not. Corroborated by Table 13 [PAGE 13].

</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>

**Layer 1 — thermodynamic / memory veto.** The paper's compute envelope [PAGE 8]: "2 NVIDIA RTX 3090 (Ti)." That is 48 GB total. ResNet-18 is 11.2M params × 2 modalities × (params + grad + Adam/SGD momentum) ≈ 4 weight copies × 22.4M × 4 B = 358 MB. Batch 32 × 3 frames × 224² × 3 channels = 1.7 GB activations per modality. Optimizer state SGD momentum is 1 extra copy. So single-GPU training is feasible with headroom, but the **Gaussian-noise recovery** of Eqn 16 requires sampling from $U/|B_t|$. If implemented as full $U$, this needs $O(d^2)$ = $10^{14}$ B = 100 TB — **physically vetoed**. The paper's silence on this detail (no implementation note on [PAGE 7]) means downstream users will either implement diagonal approx or skip Eqn 16; both materially change the reported numbers.

**Layer 2 — statistical-sample veto.** CREMA-D test set = 744 [PAGE 8]. A 1 pp accuracy delta = ~7 samples. The +8.2 pp gain (66.9→75.1) is $\sim 61$ samples — statistically decisive. But for VGGSound (13,954 test clips), +1.4 pp = ~195 samples — also statistically firm but with much smaller relative effect. **Aveto on comparative ranking** would require bootstrap confidence intervals, which the paper does not report. Multiple single-seed comparisons (Tables 2, 5, 6, 7, 8, 9, 10, 11, 12) with no variance — a genuine reproducibility hazard.

**Layer 3 — weather / domain-shift veto.** Section 4.4.3 [PAGE 13] tests *missing-modality* conditions with 10–30% random dropout. Fig. 6a–d show graceful degradation of OPM vs ModDrop vs baseline, but **the UCF-101 results in Fig. 6c** show non-monotonic accuracy as optical-flow missing percentage rises. The paper's explanation [PAGE 13] — "when the missing probability of RGB modality is low (10% in Fig 6c), ModDrop and OPM methods with more powerful RGB encoders can still rely on the RGB modality to give correct predictions" — is essentially a **saturation veto**: below 15% missing, the noisy modality (optical flow) is *distractor signal*, and its removal helps. This is domain-specific and would not generalise to a scenario where both modalities carry complementary signal.

**Layer 4 — biomechanical / dataset-construction veto.** The paper's claim of "general modality imbalance" is only tested on curated audio-visual and video datasets. Fig. 8 [PAGE 14] shows that the *category-level* dominant modality flips between "playing saxophone" (audio-dominant) and "dribbling basketball" (visual-dominant). A single dataset-level $\rho^m$ therefore aggregates across offsetting category contributions — when two categories have opposite dominance, the global $\rho^m$ can be near 1 and the modulator will not activate, leaving the minority-direction categories under-optimised. This is a **layer-4 veto on the aggregate-$s$ estimator** [PAGE 5, Eqn 6].

**Layer 5 — compute-time veto.** Table 4 [PAGE 9]: OPM/OGM training time = 1.01× baseline. This veto is *satisfied*, and is the paper's strongest engineering claim against GBlending's 1.50×. But wall-clock 1.01× under fixed epochs means more parameter updates per unit time? No — same epochs, only the modulation factors, so overhead is $\sim 1\%$ — plausible.

**Layer 6 — adversarial / generalisation veto.** Eqn 17 [PAGE 7] claims noise is "recovered and even enhanced." But the enhancement is on *parameter-space* variance, not *functional* variance. A high-parameter-noise model with the same loss-landscape curvature has identical functional noise. The paper conflates these on [PAGE 7] and [PAGE 13]. **Veto at the level of the claim** — the noise addition may be no-op in generalisation terms if the model is already in a wide minimum.

</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>

**Veto 1 — the matched-compute constant-dropout control.** *Scenario:* Replace the discrepancy monitor $\rho^m_t$ (Eqn 7) with a constant $q=0.25$ for whichever modality has the higher mean $s^m_i$ over the first 5 epochs (a static, data-driven estimate). This preserves the *information* of dominance but removes the *dynamical* re-estimation. If this model achieves accuracy within ±0.5 pp of OPM on CREMA-D, the adaptivity claim is falsified and the gain is due to the *dropout prior* alone, not the "on-the-fly" monitoring. **Prediction:** OPM will exceed constant-$q$ by, at most, $0.5$ pp on CREMA-D and by $\leq 0.2$ pp on VGGSound. The paper's Table 15 [PAGE 14] already hints at this — the *z*-function ablation yields comparable numbers with tanh vs sigmoid, suggesting Δ from monitor design is small. Verifiable by a single ablation run.

**Veto 2 — category-stratified $\rho$ control.** *Scenario:* Since Fig. 8 [PAGE 14] shows category-level dominance flips, replace the global $\rho^m_t$ with $\rho^{m,c}_t$ estimated per predicted class $c$. If the paper's aggregate $\rho$ leaves measurable headroom, category-stratified OPM should outperform by ≥1 pp on VGGSound (309 classes, largest category diversity). **Prediction:** category-stratified OPM gains **+1.0 to +1.8 pp** on VGGSound (54.1 → 55.1–55.9), and near-zero gain on CREMA-D (6 classes, dominance mostly audio-dominant). This would establish that the aggregate estimator is the paper's rate-limiter. Verifiable with the released code; requires re-computing $\rho$ per class during training.

**Veto 3 — the zero-noise OGM control.** *Scenario:* Run OGM with $h\equiv 0$ in Eqn 16 (i.e., the modulated update only, $k^m_t\tilde{g}$, no noise recovery). This tests whether the "recovered generalisation" claim [PAGE 7] is load-bearing. If the drop versus the paper's reported OGM is ≥2 pp on CREMA-D, then noise recovery is essential and the paper is correct. If the drop is ≤0.5 pp, then noise recovery is over-engineered and the α-hyperparameter story should be read as a *dropout-only* effect. **Prediction:** Given Table 1 [PAGE 7] shows batch-size/lr matters by 5+ pp, and Eqn 15 noise variance loss is up to $\alpha^2$ (typically $\alpha=0.3$ → $\sim 9\%$ variance reduction), I predict the drop is **1.5–2.5 pp on CREMA-D** and **0.5–1.0 pp on VGGSound** — meaningful but not catastrophic. If the actual drop is below 1 pp, the paper's Eqn 16 contribution should be downgraded to "optional." Verifiable in one training run per dataset.

**Cross-veto interaction.** If Veto 1 (constant-dropout matches OPM) and Veto 3 (noise recovery is under 1 pp) both trigger, the paper's *mechanistic* claim — "on-the-fly modulation" — is softened to "adaptive dropout-rate prior" and the two named contributions (OPM, OGM) collapse into a single hyperparameter schedule. The paper would still stand as a strong empirical benchmark, but its theory of *why* it works would need revision. If Veto 2 triggers, the paper actually gains: it identifies a clear path to further improvement via category-stratified monitoring. These are the load-bearing counterfactuals; all three are executable by a competent re-implementer within 3 days per dataset on the released code at https://github.com/GeWu-Lab/BML_TPAMI2024.