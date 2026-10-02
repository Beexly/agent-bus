# docs/arxiv-program/research/2026-09-21/arxiv-deep/1887-a-comprehensive-empirical-evaluation-on-online.md

## What it is (1-2 sentences)
Empirical benchmark of 9 rehearsal-based online continual learning (OCL) methods on Split-CIFAR100 and Split-TinyImageNet, comparing final accuracy, forgetting, worst-case accuracy, anytime accuracy, and probed representation quality over 5 seeds (arXiv:2308.10328, 2023).

## Key metrics/methods (formulas where given, else "not specified")
- WC-ACC_t = (1/k)·A(E_k, f_t) + (1 − 1/k)·min-ACC_{T_k} (Eqs. 1–2)
- AAA_t = (1/t)·Σ_j (1/k)·Σ_i A(E_i, f_j) (Eq. 3)
- AA = (1/k)·Σ_i A(E_i, f_t); average forgetting per standard CL definition
- Methods: AGEM, ER (plain experience replay), ER+LwF, ER-ACE, MIR, SCR, RAR, DER++, GDumb
- Protocol: batch 10 new + 10 replay per step; 3 training passes/mini-batch (CIFAR100), 9 (TinyImageNet); memory 2000 (CIFAR100)/4000 (TinyImageNet), plus 500/8000 ablations

## Data sources named
Split-CIFAR100 (20 tasks, 5 classes each), Split-TinyImageNet (20 tasks, 10 classes each), plus an i.i.d.-stream ER reference; Avalanche framework; GitHub code: github.com/AlbinSou/ocl_survey.

## Findings (numbers and facts, not vibes)
- [OTHER] No method wins across metrics or memory sizes; final accuracies cluster within ~5% of the i.i.d. reference (Table 2); ER+LwF best on CIFAR100 by a tiny margin; ER-ACE best on TinyImageNet; RAR and SCR underperform on TinyImageNet; AGEM is the clear loser.
- [OTHER] Stability ≠ accuracy: MIR beats SCR by 1% final accuracy on CIFAR100, but SCR beats MIR by ~9% on WC-Acc; AAA moderately correlates with WC-Acc but can diverge (low WC-Acc with high AAA possible).
- [OTHER] Probed representation quality ≈ i.i.d. reference: 45.8% (CIFAR100) / 34.3% (TinyImageNet); plain ER has the BEST probed accuracy despite below-average stability — paper's conclusion: the classifier head, not the representation, is the main failure point.
- [OTHER] Underfitting, not forgetting: classical forgetting rises across the stream (misleading in class-incremental settings — task difficulty grows); cumulative forgetting shows steady backward transfer. Authors attribute gains to underfitted networks and advise against using classical forgetting in class-incremental settings.
- [OTHER] Memory ablations: even 5 samples/class suffices for decent representation strength (probed gap only 1%→2% between memory sizes).
- [COACHING] GDumb (retrain from scratch on the buffer before each inference) is a strong reference — implies the "online" constraint may buy little vs periodic from-scratch refits. INFERENCE: directly relevant to GSE's weekly refit-vs-incremental-update choice.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- 5-metric evaluation discipline (worst-case accuracy, anytime accuracy, probed representation quality, cumulative forgetting) as the scoring protocol for any weekly online-update policy — OTHER
- "Properly tuned plain experience replay beats most fancy methods" baseline rule: any proposed update scheme must first beat plain refit — OTHER
- New-regime teams (new HC, rookie QB) as the non-stationary regime-change context where underfitting-not-forgetting matters — COACHING

## Engine-actionable? (yes/no + one-line what)
yes — Adopt the 4-metric online-update evaluation suite (final Brier, worst-4-week Brier, anytime/mean-weekly Brier, early-season forgetting) as the scoring protocol for weekly refit/update-policy experiments, with plain trailing-window replay as the mandatory baseline to beat.
