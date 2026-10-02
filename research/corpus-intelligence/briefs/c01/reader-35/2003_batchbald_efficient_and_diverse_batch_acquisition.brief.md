# arxiv-program/research/2026-09-21/arxiv-deep/2003-batchbald-efficient-and-diverse-batch-acquisition.md
## What it is (1-2 sentences)
GSE ledger note (verdict: ADAPT) on BatchBALD (Kirsch et al., arXiv:1906.08158) — an active-learning acquisition function that scores candidate batches JOINTLY via mutual information between the joint batch labels and model parameters, so batch acquisition avoids the redundant near-duplicates that naive top-b BALD picks (sometimes performing worse than random). Proven submodular, so greedy selection is a (1−1/e)-approximation.
## Key metrics/methods (formulas where given, else "not specified")
- BatchBALD: a_BatchBALD({x1..xb}, p(ω|D)) = I(y1..yb; ω | x1..xb, D) = H(y_{1:b} | x_{1:b}, D) − E_{p(ω|D)}[H(y_{1:b} | x_{1:b}, ω, D)]. Proven a_BatchBALD ≤ a_BALD; equals BALD at acquisition size 1.
- Greedy acquisition with (1−1/e) guarantee via submodularity (Nemhauser et al. 1978).
- Estimation: MC dropout posterior samples; joint entropy via enumerating c^n label configs then MC sampling; complexity O(b·c·min{c^b, m}·|D_pool|·k) vs O(c^b·|D_pool|^b·k) exact-optimal.
- GSE adaptation sketched: slate-weighted (economic density) + cost-aware greedy (marginal gain/√cost) for binary cover/over heads; ~2 weeks effort (dropout-at-inference or 5-model ensemble).
## Data sources named
MNIST (+ "Repeated MNIST" 3×-replicated variant), EMNIST Balanced (47 classes), CINIC-10 (270k). Code: github.com/BlackHC/BatchBALD.
## Findings (numbers and facts, not vibes)
- Repeated MNIST, acq size 10: BALD performs worse than random; BatchBALD "copes with the replication perfectly."
- MNIST labels-to-90% accuracy (25/50/75% quartiles): BatchBALD 70/90/110 vs BALD reimpl 120/120/170 vs Gal 2017 145. To 95%: 190/200/230 vs 250/250/>300 vs 335. ≈1.6–1.7× label savings.
- BALD's performance "drops drastically" acq size 1→40; BatchBALD acq-10 performs "close to the ideal with acquisition size 1."
- EMNIST: BALD unable to beat random; BatchBALD beats both; acquired class-histogram entropy consistently higher (more diverse).
- CINIC-10 transfer: 59% mark at 1170 acquired (BatchBALD) vs 1330 (BALD) median ≈ 12% label savings, beating BALD from 500 samples onward.
- GSE acceptance gate proposed: BatchBALD at 20% charting budget achieves 2024 held-out log-loss ≤ random at 40% budget AND beats BALD-top-10 by ≥0.005 log-loss.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: general active-learning machinery for GSE's weekly charting/queue allocation — directly relevant to which games/plays get labeled charting budget.
## Engine-actionable? (yes/no + one-line what)
Yes — weekly charting queue acquisition: pick charting batches maximizing joint information (slate-weighted, cost-aware) to cut labeling budget ~1.6× for equal model quality.
