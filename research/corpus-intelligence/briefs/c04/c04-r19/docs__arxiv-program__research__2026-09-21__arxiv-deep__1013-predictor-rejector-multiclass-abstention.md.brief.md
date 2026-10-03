# docs/arxiv-program/research/2026-09-21/arxiv-deep/1013-predictor-rejector-multiclass-abstention.md
## What it is (1-2 sentences)
A full-read ledger of arXiv:2310.14772 (Mao, Mohri, Zhong 2023) on predictor-rejector multi-class abstention. Resolves an open question on Bayes-consistent surrogate losses for learning a predictor h and rejector r from possibly different function families; the two-stage variant (fixed predictor, learned rejector) beats SOTA score-based abstention methods.

## Key metrics/methods (formulas where given, else "not specified")
- Abstention loss with cost c = {0.03, 0.05, 0.15}; evaluation metrics: abstention loss, misclassification error on accepted data, rejection ratio.
- Calibration-gap lemma (Lemma 20): C*_Labs(H,R,x) = 1 − max{max_{y∈H(x)} p(x,y), 1−c}.
- Conditional risk: C_L(h,r,x) = Σ_y p(x,y) L(h,r,x,y). R "regular for abstention": for each x some f∈R accepts and some g∈R rejects (Definition 19). H-consistency bounds via calibration/minimizability gaps.
- Two-stage P-R: freeze engine predictor h, train rejector r on a DIFFERENT feature set (market features, CQR width, ensemble disagreement, OOD scores) with exponential surrogate loss; abstention cost c mapped from sportsbook vig (wrong pick costs ~1.1 units of 1-unit bet, abstention costs 0). Numeric gate: ADOPT if two-stage P-R beats two-stage score-based on abstention loss by ≥5% relative (paired p<0.05), or beats confidence baseline by ≥15% relative at rejection ratio ≤ 0.30.

## Data sources named
SVHN, CIFAR-10, CIFAR-100 (ResNet-34 / WRN-28-10, SGD+Nesterov, 200 epochs). Baselines: Mozannar & Sontag 2020 (μ=1.0), Cao et al. 2022 (μ=1.7) score-based surrogates; single-stage predictor-rejector with ℓ_mae.

## Findings (numbers and facts, not vibes)
- Table 1 abstention loss (exact): SVHN — Mozannar 1.61%±0.06%, Cao 2.16%±0.04%, single-stage P-R 2.22%±0.01%, two-stage P-R 0.94%±0.02%. CIFAR-10 — 4.48%±0.10%, 3.62%±0.07%, 3.64%±0.05%, 3.31%±0.02%. CIFAR-100 — 10.40%±0.10%, 14.99%±0.01%, 14.99%±0.01%, 9.23%±0.03%.
- Two-stage P-R wins on all three datasets and beats 1012's two-stage score-based on CIFAR-100 (9.23% vs 9.54%).
- Table 2 (CIFAR-10): two-stage P-R achieves lowest accepted-set error (2.69%±0.05%) at LOWER rejection ratio (22.83%±0.21%) than Cao (28.27%±0.18%) — better selection, not just more abstention. Full row: abstention loss 3.31%±0.02% / accepted error 2.69%±0.05% / rejection ratio 22.83%±0.21%.
- Single-stage P-R (ℓ_mae) is no better than baselines; all gains are in the two-stage variant.
- Proposed deferral cascade: three tiers — publish, human review, hard no-bet.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Engine no-bet head design: predictor consumes game/team features, rejector consumes market features (line moves, steam), uncertainty features (CQR width, ensemble disagreement), OOD scores — directly applicable to GSE pick publication decisions (OTHER).
- Efficiency property "lower error at lower rejection ratio" = fewer no-bets, better published set — relevant to any published-pick pipeline (OTHER).

## Engine-actionable? (yes/no + one-line what)
yes — Implement two-stage predictor-rejector no-bet head (freeze engine h, train rejector on market/uncertainty/OOD features, threshold to target no-bet rate); numeric ADOPT gate is ≥5% relative abstention-loss reduction vs score-based at rejection ratio ≤ 0.30.
