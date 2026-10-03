# arxiv-program/research/2026-09-21/arxiv-deep/1911-support-set-diversity-necessary-meta-learning.md
## What it is (1-2 sentences)
Full-paper research ledger on Setlur, Li, Smith (2020) "Is Support Set Diversity Necessary for Meta-Learning?" (arXiv:2011.14048v2), verdict ADAPT. It argues GSE's meta-training episode samplers should use a FIXED canonical support pool per task ("fix-ml") instead of random support sampling, claiming better generalization and lower run variance at zero implementation cost.
## Key metrics/methods (formulas where given, else "not specified")
- Objective reformulation: standard meta-learning objective [A] min_w E_C E_{(S,Q)|C} ℓ(w,S,Q) rewritten as [B] min_w E_{S_p∼Unif(𝒫)} E_C E_{Q|C} ℓ(w;S_p^C,Q); fix-ml objective (Eq. 2): min_w E_C E_{Q|C} ℓ(w;S_{p,0}^C,Q) with a single fixed support pool S_{p,0}.
- Diagnostic: approximate Takeuchi Information Criterion tr(C)/tr(F) (C = uncentered gradient covariance, F = Fisher information), correlating with the generalization gap; 1D loss-landscape interpolation between w_fixml and w_ml.
- Method under test: Prototypical Networks (main), plus SVM and Ridge-Regression last-layer solvers; ResNet-12 (main), WideResNet-16-10, Conv64.
## Data sources named
miniImageNet (100 classes, 64/16/20 split; 600 images/class), CIFAR-FS, FC-100; evaluation over 2,000 random novel-class tasks (95% CI ±0.32–0.36%) for mini, 10,000 for CIFAR (±0.13–0.14%). Code: https://github.com/ars22/fixml (stated).
## Findings (numbers and facts, not vibes)
- mini 5-way 5-shot, Protonet ResNet-12: fix-ml 78.19% vs ml 77.43% (+0.76pp); competitive with MetaOptNet-SVM 77.40% and TADAM 76.70%.
- On all mini and CIFAR 5w1s and 5w5s evaluations, Protonets trained with fix-ml beat ml; SVM and RR also improve.
- WRN-16-10 (over-parameterized): fix-ml still beats ml; Conv64 (shallow): fix-ml hinders performance — effect requires over-parameterized models.
- Run variance: 5 fix-ml runs with different random pools have standard deviation "not only not worse but actually better than ml".
- Mechanism: fix-ml ends with higher ml-training loss but lower ml-test loss (smaller generalization gap); approx-TIC ratio tr(C)/tr(F) is higher for ml than fix-ml on all three datasets.
- Sharpness visualization inconclusive (fix-ml sits at a sharper minimum yet generalizes better).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — meta-learning training-design principle (episode sampler design), relevant to GSE's regime-adapter meta-training, not to any football-domain lane directly.
## Engine-actionable? (yes/no + one-line what)
yes — swap GSE's random-support meta-training episode sampler for a fixed canonical K-game support pool per team-season (spec in §11), gated on ≥1pp new-regime accuracy win and non-worse run variance; test both over-parameterized and small tabular backbones given the Conv64 failure mode.
