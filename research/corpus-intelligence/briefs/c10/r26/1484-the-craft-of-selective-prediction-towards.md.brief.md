# arxiv-program/research/2026-09-21/arxiv-deep/1484-the-craft-of-selective-prediction-towards.md
## What it is (1-2 sentences)
Deep-read ledger for arXiv:2409.18645v1 (2024) by Santosh et al.: an empirical study of selective prediction (abstention) for case-outcome classification on European Court of Human Rights cases, testing pre-trained model, confidence estimator, and fine-tuning loss across 80 configs × 3 tasks. Verdict: ADAPT — the selective-classification machinery maps exactly to GSE's "should this pick go up publicly?" decision.
## Key metrics/methods (formulas where given, else "not specified")
- Selective classifier h=(f,g): coverage C(h) = fraction predicted; risk R(h) = error on predicted subset; g(x)=1[g̃(x)>γ]. Summaries: AURCC (area under risk–coverage curve, lower=better); RPP (reversed pair proportion, Kendall-tau-style confidence/error ranking); Refinement Rf = Σ 1[g̃(x_i)<g̃(x_j), l_i<l_j] / c(|D|−c), c = #correct (0/0.5/1 = best/random/worst).
- Confidence estimators: Softmax Response (SR) = max_y p(y); MC Dropout (10 runs): SMP (sample-mean max prob), PV (probability variance), BALD (mutual information / total uncertainty).
- Confident Error Regularizer (CER, Xin et al. 2021): LCER = Σ_{i,j} Δ_{i,j} 1[e_i > e_j], Δ_{i,j} = max{0, max_y p_i(y) − max_y p_j(y)}² — penalizes confidence exceeding that of an easier example; weight ∈ {0.01, 0.05, 0.1, 0.5} tuned on AURCC.
- LECE = Σ_m (|B_m|/N)·|acc(B_m) − conf(B_m)| over 10 bins; Gambler's loss L = Σ I(y) log[p(y) + p(abs)]/r, r ∈ {1.0, 5.0, 6.5, 14.0}, 4 warm-up epochs.
## Data sources named
LexGLUE ECtHR (European Court of Human Rights): 11k case fact descriptions, multi-label over 14 convention articles; chronological split train 2001–2016 (9k), val 2016–2017 (1k), test 2017–2019 (1k). Tasks B (alleged articles), A (decided violations), A|B (violations given allegations).
## Findings (numbers and facts, not vibes)
- MC Dropout beats SR on every task/metric consistently (e.g., Task B LexLM-large task-loss: SR AURCC 17.92 vs BALD 14.42; RPP 0.914 vs 0.745; mac-F1 64.31). Among MC variants BALD leads slightly, then PV, then SMP (BALD captures total incl. aleatoric uncertainty).
- CER improves all selective metrics without harming accuracy (Task B LexLM-base: mac-F1 61.42 → 65.21 with CER; AURCC 16.86 → 16.85 SMP / 15.37 PV). ECE regularizer hurts both calibration and accuracy (non-differentiable). Gambler's loss: comparable accuracy, worse selective metrics.
- Domain pre-training helps calibration BUT more ECtHR corpus in pre-training → more overconfidence (InCaseLawBERT, no ECtHR, best selective metrics; LegalBERT worse than LexLM). LexLM-large best Task-B accuracy (64.31–65.82 mac-F1) yet overconfident on harder tasks A|B and A. Larger = more accurate, more overconfident.
- CER's gain concentrates in frequent-label buckets; overconfidence rises with label frequency; LexLM-large suffers on rare articles (<1%) but wins on frequent ones.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Abstention gate for public picks (post only top-confidence subset at target coverage, e.g. 70%) and risk–coverage reporting for every weekly pick set: [TRUST-SIGNAL]
- MC-dropout > softmax confidence everywhere (use 10 stochastic passes, BALD-style total uncertainty; do NOT trust raw softmax): [TRUST-SIGNAL]
- CER training regularizer improving selective metrics without accuracy cost: [TRUST-SIGNAL]
- Pre-training overconfidence warning (heavy in-domain pretraining → overconfidence on hard cases; keep diverse training mix): [TRUST-SIGNAL]
- Existing-research-map check: no selective-prediction/abstention framework in GSE corpus (calibration/temperature-scaling work exists, incl. 1480) — new capability: [OTHER]
## Engine-actionable? (yes/no + one-line what)
Yes — build gse_selective_picks.py: CER-style confidence regularizer in pick-head training + MC-dropout (BALD) confidence at inference + γ threshold on validation for target coverage, reporting risk–coverage/AURCC per weekly pick set; accept iff it beats single-pass baseline on AURCC and realized ROI at fixed coverage on a hold-out season.
