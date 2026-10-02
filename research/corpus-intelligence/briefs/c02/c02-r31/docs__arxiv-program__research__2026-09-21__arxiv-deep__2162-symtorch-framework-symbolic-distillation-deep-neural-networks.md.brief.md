# docs/arxiv-program/research/2026-09-21/arxiv-deep/2162-symtorch-framework-symbolic-distillation-deep-neural-networks.md
## What it is (1-2 sentences)
SymTorch is an open-source library (`pip install torch-symbolic`, a `nn.Module` wrapper) that automates symbolic distillation of any trained PyTorch component: it records block I/O via forward hooks, runs PySR evolutionary symbolic regression, and swap-in replaces the dense block with a closed-form Pareto-front equation (`switch_to_symbolic`, restorable via `switch_to_block`), proven on GNNs, PINNs, and LLMs (Qwen2.5-1.5B, Llama-3.2-1B). Verdict in file: ADOPT — distills GSE's win-probability/pick-confidence heads into readable ≤10-term equations as a glass-box audit artifact.

## Key metrics/methods (formulas where given, else "not specified")
- SR objective: g* = argmin_{g∈S} Σᵢ ℒ(yᵢ, g(xᵢ)) (Eq. 1), ℒ = MSE, S = closed-form analytic expressions.
- Pareto-front equation selection: score_j = −log(loss_j/loss_{j−1}) / (complexity_j − complexity_{j−1}) (Eq. 2); complexity = expression-tree node count.
- Multi-output: f: xᵢ → yᵢ (Eq. 3), one expression per output dimension.
- Perplexity: exp(−(1/N) Σᵢ log p(xᵢ|x_{<i})) (Eq. 4).
- GNN edge/node updates (Eqs. 5–8): eₖ′ = φᵉ(v_rₖ, v_sₖ); ēᵢ′ = Σ_{j≠i} φᵉ(vᵢ, vⱼ); v̂ᵢ′ = φᵛ(vᵢ, ēᵢ′).
- SLIME objective: s = argmin_{s∈S} Σ_{z∈synthetic} πₓ(z)[f(z)−s(z)]² + M Σ_{z∈neighbors}[f(z)−s(z)]², proximity kernel πₓ(z)=exp(−‖x₀−x‖²/σ²); training set = J nearest neighbors from data distribution + N_synthetic Gaussian points around x* (variance = half neighbors' variance).
- Heat equation recovered (Eq. 9): ∂u/∂t = α ∂²u/∂x², α = 0.2.
- LLM speedup framework: PCA-compress MLP activations (32 input PCs, 8 output PCs), distill reduced mapping with SymTorch, invert PCA; intervened on layers 7, 14, 21 of Qwen2.5-1.5B (SwiGLU, 1536→8960 dim).
- Assumptions: SR runtime scales exponentially in #inputs, linearly in #outputs; PySR node-count complexity can prefer equivalent-but-less-readable forms.

## Data sources named
- LLM speedup: Qwen2.5-1.5B-Instruct on Wikitext-2-v1 (Merity et al. 2016), train/test split each 178k tokens; throughput benchmark on Nvidia A100-SXM4-80GB (5 warmup passes, 100 forward passes averaged, KV caching disabled).
- GNN force-law recovery: simulated 2-D particle systems (Cranmer et al. 2020 reproduction); node features [x, y, vx, vy, charge, mass]; targets = per-particle accelerations; four pairwise force laws: gravity, spring, 1/r, 1/r².
- PINN: 1-D heat equation (α=0.2), x∈(0,1), t∈(0,1], trained on only 10 data points.
- LLM arithmetic: Llama-3.2-1B-Instruct on 3-digit addition, 3-digit multiplication, counting 1s in binary strings, Celsius→Fahrenheit.
- Code/docs: `pip install torch-symbolic`; https://symtorch.readthedocs.io/en/latest/; https://github.com/astroautomata/LLM_PCA; https://github.com/astroautomata/SymTorch_symbolic_distillation_GNNs; reproducing notebooks.

## Findings (numbers and facts, not vibes)
- LLM speedup: baseline perplexity 10.62. Δ-perplexity: PCA+MLP +3.11; PCA+SymTorch +3.14; Control +6.97 (Table 1). Distilling 3 of 28 MLP layers delivered an 8.3% token-throughput increase; the symbolic approximation itself contributed only ~1% of the perplexity increase — PCA dimensionality reduction was the dominant degradation source. Modified model sits on the perplexity–throughput Pareto front vs similarly-sized open LLMs (Figure 5). [OTHER]
- GNN: recovered the true interaction laws for all four force systems (gravity, spring, 1/r, 1/r²); the new Pruning variant matched the best Bottleneck variant. Distilling SR directly on the raw dataset (not the GNN edge MLP) failed — the GNN decomposition (2N candidates vs N² composite search) is what makes recovery tractable. [OTHER]
- PINN: distilled the PINN into a closed-form expression recovering the 1-D heat-equation solution; the PINN substantially outperformed the standard NN given only 10 training points (Figure 6). [OTHER]
- LLM arithmetic (Table 2): the correct equation was present in the SR Pareto front for addition, multiplication, and temperature conversion but was NOT selected as "best" — the LLM's learned operation ≈ true equation + small ε systematic-error terms; for counting, the true equation was absent from the front entirely. Example distilled addition: x₁·((inv(x₀−70.16)+1.07) + (inv(sin(x₁)+0.80)+x₁)·(−ε))·x₀. [TRUST-SIGNAL]
- Limitations: SR runtime exponential in inputs; no distribution-shift/downstream-task testing for the speedup; PCA (not symbolic step) caused nearly all perplexity damage; SLIME's half-variance default and M weighting are heuristic without sensitivity analysis; GNN recovery depends on message-dim = system-dim inductive bias. [OTHER]
- INFERENCE: the "true equation present in front but not selected" result is a caution for GSE — a distilled win-prob equation must be human-reviewed before publication, not auto-selected by the Eq. 2 score alone.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Closed-form "glass box" audit artifact for the neural win-probability head: every public pick links the symbolic law; neural-vs-symbolic disagreement > 0.02 flags a model-risk case: TRUST-SIGNAL.
- SLIME per-game local explanations ("why did the model give KC 72%?" → 3–5-term local symbolic explanation around that game state): TRUST-SIGNAL.
- The "learned op = true equation + small ε systematic-error terms" finding: distilling the engine's head exposes systematic biases (e.g., persistent over-crediting of some input) as readable ε terms — a calibration-diagnostic channel: TRUST-SIGNAL.
- Pairwise-decomposition distillation for team ratings (edge MLP = team-vs-team matchup function distilled into a closed-form "matchup law"; direct SR on outcomes would fail as N² composite search): SCHEME.
- Proposed acceptance gate: distilled equation uses ≤10 terms AND matches the neural head within 0.01 MAE on held-out 2025 Weeks 1–4 AND beats a linear logistic baseline by ≥20% MAE: OTHER.
- No direct QB/coaching/OL findings in the paper.

## Engine-actionable? (yes/no + one-line what)
yes — Distill the engine's neural win-probability head into a ≤10-term symbolic equation (PySR with sports-natural variable transforms) as a glass-box audit artifact, gating on ≤0.01 MAE match to the head on held-out 2025 Weeks 1–4 and ≥20% MAE win over a linear baseline.
