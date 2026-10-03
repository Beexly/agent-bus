# docs/arxiv-program/research/2026-09-21/arxiv-deep/1013-predictor-rejector-multiclass-abstention.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv:2310.14772 (Mao, Mohri, Zhong 2023): resolves the open question on Bayes-consistent surrogate losses for predictor-rejector multi-class abstention in both single-stage and two-stage settings. Verdict ADAPT: its two-stage predictor-rejector variant is the paper's best method, and its rejector-uses-different-features structure maps exactly onto GSE's planned no-bet head (game features for the predictor, market/uncertainty features for the rejector).
## Key metrics/methods (formulas where given, else "not specified")
- Abstention loss with explicit abstention cost c; conditional risk C_L(h,r,x) = Σ_y p(x,y) L(h,r,x,y)
- Calibration-gap lemma (Lemma 20): C*_Labs(H,R,x) = 1 − max{max_{y∈H(x)} p(x,y), 1−c}
- H-consistency bounds: abstention excess risk ≤ Γ(surrogate excess risk); assumption R "regular for abstention" (Definition 19)
- Two-stage variant: freeze predictor h, train rejector r from a possibly different function family on possibly different features
- Evaluation: abstention loss, misclassification error on accepted data, rejection ratio; means±SD; abstention costs c ∈ {0.03, 0.05, 0.15}
## Data sources named
SVHN, CIFAR-10, CIFAR-100 (public benchmarks). Baselines: Mozannar & Sontag 2020 (μ=1.0), Cao et al. 2022 (μ=1.7) score-based surrogates; ResNet-34 / WRN-28-10, SGD+Nesterov, 200 epochs. No code stated.
## Findings (numbers and facts, not vibes)
Table 1 abstention loss — SVHN: Mozannar 1.61%±0.06%, Cao 2.16%±0.04%, single-stage P-R 2.22%±0.01%, two-stage P-R 0.94%±0.02%. CIFAR-10: 4.48%±0.10%, 3.62%±0.07%, 3.64%±0.05%, 3.31%±0.02%. CIFAR-100: 10.40%±0.10%, 14.99%±0.01%, 14.99%±0.01%, 9.23%±0.03%. Two-stage P-R wins everywhere and beats 1012's two-stage score-based on CIFAR-100 (9.23% vs 9.54%). Table 2 CIFAR-10 (abstention loss / accepted-set error / rejection ratio): Mozannar 4.48%/4.30%/25.99%; Cao 3.62%/3.08%/28.27%; single-stage P-R 3.64%/3.54%/17.21%; two-stage P-R 3.31%/2.69%/22.83%. Two-stage P-R has the lowest accepted-set error (2.69%) at a LOWER rejection ratio than Cao (22.83% vs 28.27%) — better selection, not more abstention. Single-stage P-R (ℓ_mae) is no better than baselines; all gains are in the two-stage variant. c is hand-set near Bayes error (caveat).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: abstention/no-bet head design — rejector trained on market features (line moves, steam, reverse line movement), uncertainty features (CQR width, ensemble disagreement), OOD scores rather than game features
- OTHER: H-consistency theory for abstention surrogates; deferral-cascade idea (publish / human-review / hard no-bet tiers)
## Engine-actionable? (yes/no + one-line what)
yes — Build the two-stage predictor-rejector no-bet head: freeze engine predictor, train rejector on line-move/uncertainty/OOD features with exponential loss and vig-derived abstention cost; accept if it beats the score-based no-bet head by ≥5% relative abstention-loss reduction at rejection ratio ≤ 0.30.
