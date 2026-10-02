# arxiv-program/research/2026-09-21/arxiv-deep/1004-structured-output-learning-abstention.md
## What it is (1-2 sentences)
Full-paper deep read (ledger 1004, arXiv:1803.08355v2, Garcia/Essid/Clavel/d'Alché-Buc 2018) of SOLA — structured output learning where a predictor pair (h, r) predicts each component label AND decides per-component abstention at user-chosen costs, trained via surrogate least-squares regression with a pre-image decoding step and an excess-risk bound.

## Key metrics/methods (formulas where given, else "not specified")
- Pair (h, r): h predicts each component label, r decides per-component abstention; output in 𝒴* ⊂ {0,1,a}^d (a = abstain), f_i^{h,r}(x) = 1_{h_i=1}1_{r_i=1} + a·1_{r_i=0} (Eq. 1).
- Loss family: Δ_a(h(x),r(x),y) = ⟨ψ_wa(y), C ψ_a(h(x),r(x))⟩ (Eq. 3) — asymmetric embeddings of complete true labels vs incomplete predictions.
- Ha-loss for hierarchies (Eq. 4): Δ_Ha = Σ_i [c_{Ai}·1{abstain at i, parent correct} (abstention cost) + c_{A_c i}·1{wrong at i, parent abstained} (abstention REGRET — penalizes unnecessary parent abstention) + c_i·1{wrong at i, parent correct and predicted} (misclassification)].
- Training: (1) kernel ridge regression min_g (1/n)Σ‖ψ_wa(y_i)−g(x_i)‖² + λ‖g‖²_H in vector-valued RKHS, closed form ĝ(x)=Σ_i α_i(x)ψ_wa(y_i), α(x)=K_x(K+λI_{qn})⁻¹ (Eqs. 5–9); (2) pre-image decoding (ĥ,r̂)=argmin_{(y_h,y_r)}⟨ĝ(x),Cψ_a(y_h,y_r)⟩ (Eq. 6), solved as integer program — polynomial via LP relaxation when constraint matrix totally unimodular (H-loss), else branch-and-bound (Ha-loss).
- Theorem 1 (Eq. 10): excess risk ℛ(h,r)−ℛ(h*,r*) ≤ 2c_l√(ℒ(ĝ)−ℒ(E_{y|x}ψ_wa(y))), c_l=‖C‖max‖ψ_a‖.
- Binary special case: Δ_a^bin = 1 if wrong & predicted, 0 if right & predicted, c if abstained, c∈[0,0.5].
- Cost parameterization: c_i = c_{p(i)}/|siblings(i)| (root c_0=1), c_{Ai}=K_A·c_i, c_{A_c i}=K_{A_c}·c_i, K_A∈[0,0.5], K_{A_c}∈{0.25,0.5,0.75}.

## Data sources named
- TripAdvisor hotel-review subset (Marcheggiani et al. 2014): 369 reviews, 4,856 sentences, predefined train/test split; 10 aspects × 3 polarities annotated at sentence level + review-level star ratings; inputs = InferSent dense sentence embeddings (Conneau et al. 2017). ImageCLEF2007 MRI hierarchical classification (supplementary only).

## Findings (numbers and facts, not vibes)
- Exp1 μ-F1: H Regression (InferSent) 0.59, Logistic Regression 0.60, Linear-chain CRF 0.59, Marcheggiani hierarchical CRF 0.49 — dense embeddings dominate; structured regression matches flat baselines.
- Exp2 μ-F1: H Regression 0.54 vs logistic 0.53 vs CRF 0.52; Hamming-loss baselines 0.03 at 0 abstentions; abstaining on <3 aspects reduces aspect-node errors, beyond 3 quality degrades; polarity-after-abstained-aspect best with 2–4 abstentions/sentence (relaxed constraint wins — can predict polarity even for abstained aspect).
- Exp3: H Regression "strongly outperforms" hierarchical CRF on star-rating regression (Wilcoxon p=10⁻⁶); abstention-aware representation improves text-level prediction over plain H Regression (exact scores not tabulated in main text — chart/qualitative only).
- K_{A_c} and H-strict choice had little influence. Abstention-cost sweep was done on the test task (Exp2 curves are test-set).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, OTHER)
- TRUST-SIGNAL: per-component abstention primitive — abstain on individual low-confidence legs/components at a cost rather than whole predictions; the abstention-REGRET term penalizes unnecessary parent abstention, relevant to multi-leg product QC.
- OTHER: complements 1003's post-hoc whole-prediction abstention (this abstains per component); no structured-output-with-abstention work exists in the repo — new capability for multi-leg products and the NLP text pipeline (beat-writer text → structured injury/news signals with per-sentence abstention).

## Engine-actionable? (yes/no + one-line what)
Yes — two adaptations: (A) parlay/DFS leg-level abstention — greedy leg-drop rule using calibrated per-leg edges, gate = +5.0 pp parlay ROI per dollar staked over ≥300 settled slips (bootstrap p<0.05); (B) NLP injury-news pipeline — sentence-level (entity, aspect, severity) extraction with per-node abstention vs official Wednesday injury reports, gate = F1 ≥ 0.60 AND engine spread MAE improves ≥ 0.15.
