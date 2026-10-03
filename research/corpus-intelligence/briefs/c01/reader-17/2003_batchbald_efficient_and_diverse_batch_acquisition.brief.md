# arxiv-program/research/2026-09-21/arxiv-deep/2003-batchbald-efficient-and-diverse-batch-acquisition.md
## What it is (1-2 sentences)
Full-text read of arXiv:1906.08158 (Kirsch, van Amersfoort & Gal, 2019 — BatchBALD): selects batches of points for deep Bayesian active learning by scoring the joint mutual information I(y₁..y_b; ω) between a batch's labels and model parameters, fixing BALD's pathology of acquiring redundant near-replicas — proven submodular, so greedy selection is a (1−1/e)-approximation. Ledger's GSE translation: acquire diverse, non-redundant weekly charting batches for the engine's pick-probability heads, with MC-dropout posterior draws.
## Key metrics/methods (formulas where given, else "not specified")
- BatchBALD: a_BatchBALD({x₁..x_b}, p(ω|D)) = I(y₁..b; ω | x₁..b, D) = H(y_{1:b}|x_{1:b},D) − E_{p(ω|D)}[H(y_{1:b}|x_{1:b},ω,D)]; BALD sums individual scores (double-counts overlaps); BatchBALD computes the overlap-aware union μ*((∪ᵢyᵢ) ∩ ω). Proven: a_BatchBALD ≤ a_BALD; equals BALD at acquisition size 1.
- Greedy: xₙ = argmax_{x∈pool\A_{n−1}} a_BatchBALD(A_{n−1}∪{x}); submodular ⇒ (1−1/e)-approximation (Nemhauser et al. 1978).
- Estimator: MC dropout posterior; conditional term decomposes; joint entropy via enumerating cⁿ label configs then MC sampling; caching identity (1/k)Σⱼp(ŷ_{1:n}|ω̂ⱼ) = ((1/k)P̂_{1:n−1}P̂ₙᵀ).
- Complexity: O(b·c·min{c^b,m}·|D_pool|·k) vs O(c^b·|D_pool|^b·k) exact-optimal vs O((b+k)·|D_pool|) BALD.
- Protocol detail: models reinitialized after each acquisition (decorrelates acquisitions); 10/50/100 MC dropout samples across experiments; Adam lr 0.001; early stop after 3 declining validation epochs.
## Data sources named
MNIST (60k/10k + Repeated-MNIST near-duplicate variant), EMNIST Balanced (47 classes, 112,800 train), CINIC-10 (160k pool / 20k val / 90k test, ImageNet-pretrained VGG-16 transfer). Code: https://github.com/BlackHC/BatchBALD.
## Findings (numbers and facts, not vibes)
- Repeated MNIST (acq 10): BALD performs **worse than random**; BatchBALD "copes with the replication perfectly"; more replication makes BALD gradually worse (App. D).
- MNIST labels to 90% accuracy (quartiles 25/50/75%): BatchBALD 70/90/110; BALD reimpl 120/120/170; BALD (Gal 2017) 145. To 95%: BatchBALD 190/200/230; BALD reimpl 250/250/>300; BALD (Gal 2017) 335 — roughly **1.6–1.7× label savings**.
- Larger batches: BALD "drops drastically" from size 1 to 40; BatchBALD maintains 5→10, drops only slightly at 40 (estimator noise). BatchBALD acq-10 performs "close to the ideal with acquisition size 1."
- EMNIST (acq 5): BatchBALD consistently beats random and BALD; BALD cannot beat random; BatchBALD acquires higher-entropy class distribution.
- CINIC-10 transfer (acq 10): 59% accuracy at 1170 acquired (BatchBALD) vs 1330 (BALD), median — ~12% label savings.
- Paper's own scope limits: does not follow dataset density (poor on unbalanced sets); ignores unlabeled-data structure; MC-dropout/estimator noise binds at large batches; classification-only.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: principled formalism for the weekly charting queue — acquire b games maximizing joint information about engine parameters; the (1−1/e) guarantee fits the retrain-costly weekly cycle.
- QB-BEHAVIOR / SCHEME (INFERENCE): joint scoring avoids charting redundant near-duplicate situations (e.g., ten similar blowout scripts) and forces diversity across game scripts — directly relevant to building behavioral profiles that don't overfit repeated contexts.
- TRUST-SIGNAL: adoption gate requires MC-dropout plumbing not to degrade the engine's own calibration (ECE increase > 0.01 ⇒ REJECT); acquisition should be slate-weighted by economic density, not class balance, since accuracy-only acquisition spends budget on low-handle games.
## Engine-actionable? (yes/no + one-line what)
Yes — run BatchBALD on Sunday nights for the coming week's charting queue: engine pick-probability head (binary cover/over) with MC dropout (k=50) or 5-model deep ensemble, greedy joint scoring over 2^b binary label configs for b=10 from ~300 pool games, with slate-weighted (expected edge × handle) and cost-aware (÷√cost) greedy extensions; adopt iff at 20% charting budget it matches random's 40%-budget held-out 2024 log-loss and beats BALD-top-10 by ≥0.005.
