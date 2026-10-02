# arxiv-program/research/2026-09-21/arxiv-deep/1150-predict-confidently-predict-right-abstention.md
## What it is (1-2 sentences)
"Predict Confidently, Predict Right" (arXiv:2501.08397, Gayen et al. 2025) integrates a coverage-based reject option (SelectiveNet-style) into continuous-time dynamic graph neural networks for link prediction and node classification under extreme class imbalance. Ledger verdict: ADAPT — the coverage-constrained abstention objective is portable to GSE's pick-selection/abstention lane (named an explicit gap in the existing-research map).
## Key metrics/methods (formulas where given, else "not specified")
- Objective: max_{f,q} P(f(x)=y | a(x) ≤ θ). Loss: L_t = r̂(f,q|E_t) + λΨ(c − φ̂(q|E_t)), Ψ(b)=max(0,b)², combined as αL(f,q) + (1−α)L_h with auxiliary full-sample BCE so the model still sees rejected samples.
- Empirical selective risk: r̂ = Σ ℓ(f(z),y)(1−q(z)) / (|E|·φ̂); coverage φ̂ = (1/|E|) Σ (1−q(z)). θ set post-hoc on validation-sorted abstention scores to hit target coverage c.
- Imbalance: auxiliary loss reweighted β·L_minor + L_major, β ∈ [2,100] searched; best β = 2 or 5, degrades ≥ 10.
- Encoders: TGN, GraphMixer, DyGFormer via DyGLib; training Adam/SGD, 75 epochs, early stop patience 10, batch 200, λ=32, α=0.5, 5 seeds.
## Data sources named
Four public temporal-graph datasets (Zenodo record 7213796, DyGLib): Wikipedia (9,227 nodes, 157,474 links, 0.14% banned), Reddit (10,984 nodes, 672,447 links, 0.05% banned), Canadian Parliament (734 nodes, 74,478 links, 2006–2019), UN Trade (255 nodes, 507,497 links, 30 yrs). Chronological 70/15/15 splits; coverage sweep 100→50%.
## Findings (numbers and facts, not vibes)
- Transductive link-pred AP (TGN, random NSS): Wikipedia 98.56±0.06 (100%) → 99.88±0.02 (60%); UN Trade 64.87±1.93 → 81.46±1.81; Canadian Parliament 74.14±1.51 → 90.19±3.50 (≈16.05-pt gain claimed).
- Inductive link-pred AUC (TGN Reddit): 97.17±0.04 → 99.73±0.13 at 60% coverage (≈2.56-pt gain).
- Node classification AUC (TGN): Wikipedia 86.23±3.30 → 89.86±2.52 (60%, β>1); Reddit 63.08±1.48 → 66.03±3.45 (β=1) → 69.58±2.96 (β=5) — minority-weighting adds ≈3.55 pts on the 0.05%-minority Reddit task.
- Compute: TGN 9 s/epoch / 668 MB GPU vs DyGFormer 91 s/epoch / 18,326 MB; abstention heads add negligible cost.
- Caveats from the ledger: AP/AUC computed only on the kept subset (mechanically guaranteed gains); threshold set post-hoc so test coverage drifts (Appendix B); no comparison to plain softmax-threshold abstention; DyGFormer unstable on UN Trade (std up to ±11.67).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Pick-selection abstention: formalizes the "no play" decision — a learned selection head with coverage penalty instead of post-hoc confidence gating (OTHER — pick/selection pipeline).
- TRUST-SIGNAL: the β-weighted auxiliary loss pattern applies to rare high-edge markets (e.g., upset moneylines) — treat rare outcomes as the "minority class" with β ∈ {2,5}.
## Engine-actionable? (yes/no + one-line what)
Yes — add a lightweight selection head (selective risk + λ·max(0,c−coverage)² + auxiliary BCE) to the existing pick classifier at coverage targets {0.9, 0.8, 0.7}, gated on beating softmax-threshold abstention by ≥3 ROI points at matched realized coverage on a chronological backtest.
