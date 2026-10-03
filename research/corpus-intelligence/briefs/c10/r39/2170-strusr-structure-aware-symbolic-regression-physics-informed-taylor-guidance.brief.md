# arxiv-program/research/2026-09-21/arxiv-deep/2170-strusr-structure-aware-symbolic-regression-physics-informed-taylor-guidance.md
## What it is (1-2 sentences)
Ledgered deep read of arXiv:2510.06635 (StruSR). It guides genetic-programming symbolic regression with local Taylor expansions extracted from a trained PINN via autodiff — using them both as a structural loss term and as a masking-based subtree attribution that protects important subexpressions during crossover/mutation. Verdict: ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- PINN Taylor prior: T_PINN(x;x₀) = Σ_{k=0}^K u^(k)(x₀)/k!·(x−x₀)^k, default K=5
- Structure loss: L_Taylor(f;x₀) = Σ_{k=0}^K (f^(k)(x₀)/k! − u^(k)(x₀)/k!)²
- Hybrid fitness: F(f) = L_phys(f) + λ·L_Taylor(f); L_phys = (1/N)Σ(N[f](x_i))² (PDE residual)
- Subtree attribution: Δ^struct_j = L_Taylor(f_{−s_j}) − L_Taylor(f); Δ^res_j = MSE(N[f_{−s_j}]) − MSE(N[f]); Δ^total_j = β·Δ^res_j + (1−β)·Δ^struct_j; softmax over Δ^total biases evolution toward low-sensitivity subtrees
## Data sources named
Synthetic: 8 PDE benchmarks with analytic solutions (Advection, Diffusion, Poisson2D/3D, Heat2D/3D, Wave2D/3D), Strogatz dynamical systems, Feynman equations — 75/25 train/test, 10 independent runs. No public code; no real sports data.
## Findings (numbers and facts, not vibes)
- PDE test MAE (10 runs): Advection 1.21×10⁻¹³, Diffusion 6.38×10⁻⁶, Poisson2D 7.32×10⁻⁵, Poisson3D 5.62×10⁻³, Heat2D 1.53×10⁻⁶, Heat3D 1.09×10⁻⁴ (RAG-SR slightly better at 9.27×10⁻⁵), Wave2D 4.33×10⁻⁵, Wave3D 7.09×10⁻⁶
- Baselines orders of magnitude worse (e.g. Poisson2D: NetGP 5.69×10⁻¹, HD-TLGP 1.87×10⁻², PhySO 7.13)
- Ablation: structure-loss decreases monotonically for StruSR; vanilla GP barely improves structurally; physics-informed GP stalls early; K=5 optimal
- Recovered forms match ground truth up to algebraic variants (Wave3D: exp(−0.5001t + 1.000x₁² + 0.999x₃²)·sin(x₂)); some outputs algebraically ugly (Diffusion polynomial×sin form)
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: derivative-consistent distillation path for GSE's neural win-prob heads — distilled equations inherit the network's feature sensitivities, a capability no existing GSE ledger uses
- OTHER: masking attribution as a "which subexpression matters" diagnostic for any GP run
- TRUST-SIGNAL: sensitivity-fidelity correlation (equation's vs network's feature gradients at held-out game states) proposed as new calibration metric
## Engine-actionable? (yes/no + one-line what)
Yes — distill GSE's neural win-probability model into a symbolic equation with hybrid fitness (validation Brier + λ·Taylor-coefficient mismatch) and masking attribution (β=0.5), acceptance gate pre-registered: sensitivity-fidelity correlation ≥ 0.9 at Brier within 2% of the network's. (~2–3 weeks, no public code, PySR custom loss needed)
