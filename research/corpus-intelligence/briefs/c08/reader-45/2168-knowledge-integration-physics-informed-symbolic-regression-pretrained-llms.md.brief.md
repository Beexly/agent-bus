# docs/arxiv-program/research/2026-09-21/arxiv-deep/2168-knowledge-integration-physics-informed-symbolic-regression-pretrained-llms.md
## What it is (1-2 sentences)
Ledger note on arXiv:2509.03036 (Taskin/Xie/Lazebnik, 2026): embeds a frozen LLM (temperature 0) inside the symbolic-regression search loop as a domain-knowledge judge, scoring each candidate equation for dimensional consistency, simplicity, and physical realism — tested across 3 SR engines × 3 LLMs on physics ground truths.
## Key metrics/methods (formulas where given, else "not specified")
- Composite loss: L = w₁·e + w₂·s + w₃·c (Eq. 1), wᵢ ∈ [0,1], Σwᵢ=1; e = MSE, s = expression-tree node count, c = LLM plausibility score.
- LLM returns ONLY Python list [dim_corr, simp, sim, "feedback"]: dimensional consistency, simplicity, physical realism (0→1), 3 few-shot examples; final c := 1 − (c₁+c₂+c₃)/3.
- Structural metric: expression tree score = 1 − d(e₁,e₂), recursive root-to-leaf distance handling commutativity.
- LLMs: Mistral 7B, Llama 2 7B, Falcon 7B (local, temp 0). SR engines: DEAP-GP (pop 100, 50 gens, crossover 0.6, mutation 0.05, tournament 3, max depth 8, early stop <0.1% over 3 gens), gplearn, PySR (Huber loss + complexity penalty, operators +−×÷ exp log sin cos).
- Prompt ablations: 8 variants A (no context) … H (kitchen sink; D/F/G/H disclose the ground-truth formula — circular, deliberate alignment-bias test).
## Data sources named
In-silico physics, N=500 experiments each, 1% Gaussian noise (SNR ≈ 40 dB), SI units: dropping ball v = √(2gh); SHM x(t) = A·cos(√(k/m)·t + φ); damped EM wave E(t) = E₀·e^(−αt/2)·cos(kx − ωt). Noise robustness: 1–5% noise × 3 placements (features/target/both). Code + data: https://github.com/bilgesi/SR-LLM-Integration.
## Findings (numbers and facts, not vibes)
- Every LLM–SR pair beat its no-LLM baseline on all three scenarios (Table 2). Best: Mistral + PySR — EM wave: MAE 0.030, MSE 0.003, R² 0.99, tree score 1.00 vs PySR baseline MAE 0.150, R² 0.88, tree 0.79. SHM: Mistral+PySR MAE 0.060, R² 0.97, tree 1.00 vs baseline MAE 0.170.
- Prompt E (variable descriptions + experiment description, NO ground truth): tree score 1.00 across all 9 LLM×SR combos — exact ground-truth recovery without answer leakage. Richer prompts strictly better; Prompt A (no context) still beat baseline.
- Noise robustness: DEAP tree score 0.93→0.82 (1%→5% noise) vs baselines collapsing to 0.40–0.60 under combined noise at 5%. LLM ranking: Mistral > Llama 2 > Falcon; SR ranking: PySR > DEAP > gplearn.
- Limitations (file's own): LLM scores never human-expert-validated (gains could partly be a second simplicity term); w₁,w₂,w₃ selection undocumented; occasional invalid LLM outputs inflate training time; adaptation risk — an LLM judging "football realism" inherits stale/wrong priors, needs domain-specific few-shot anchors.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: the missing constraint layer for GSE's PySR pipelines — current runs are unconstrained beyond MSE + parsimony and return expressions that violate domain sense (probabilities outside [0,1], negative yardage terms, dimensionally absurd composites).
- TRUST-SIGNAL: LLM-judge term = semantic/domain-validity gate; two-judge adversarial scoring improvement (judge + critic, keep equations where both agree within 0.2) converts the unverified-judge weakness into a measurable confidence signal for which discovered equations GSE publishes.
## Engine-actionable? (yes/no + one-line what)
Yes — spec: add c_LLM term to PySR loss scoring bound-consistency (win-prob structurally capable of [0,1]), football realism (penalize absurd composites, reward known-structure terms), simplicity; small local Mistral-class 7B judge, temp 0, score cache by equation string; adopt iff ≥80% domain-validity on Pareto front (vs ≤50% without) AND validation Brier degrades ≤5% AND per-generation overhead <2×. INFERENCE: pairs directly with the CV/computer-vision and win-prob equation discovery work.
