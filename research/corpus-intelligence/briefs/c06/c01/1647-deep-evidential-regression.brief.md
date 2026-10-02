# arxiv-program/research/2026-09-21/arxiv-deep/1647-deep-evidential-regression.md
## What it is (1-2 sentences)
Deep Evidential Regression learns both aleatoric and epistemic uncertainty for regression in a single forward pass — no inference sampling, no OOD training data — by having the network output the four hyperparameters (γ, ν, α, β) of a Normal-Inverse-Gamma prior over the Gaussian likelihood, trained with closed-form NLL plus an evidence regularizer that inflates uncertainty where predictions are wrong.
## Key metrics/methods (formulas where given, else "not specified")
- NIG prior: p(μ,σ²|γ,ν,α,β) as in Eq; prediction E[μ]=γ; aleatoric E[σ²]=β/(α−1); epistemic Var[μ]=β/(ν(α−1))
- Model evidence: p(y|m) = St(y; γ, β(1+ν)/(να), 2α) (Student-t marginal)
- Loss: L = L^NLL + λ·L^R; L^NLL = ½log(π/ν) − α log(Ω) + (α+½)log((y−γ)²ν + Ω) + log(Γ(α)/Γ(α+½)), Ω=2β(1+ν); L^R = |y−γ|·(2ν+α)
- Assumes Gaussian likelihood, α>1; λ tuned; positivity constraints (softplus/exp) required on ν,α,β
## Data sources named
UCI-style benchmark suite (Boston, Concrete, Energy, Kin8nm, Naval, Power, Protein, Wine, Yacht); NYU Depth v2 (>27k RGB-to-depth pairs); ApolloScape outdoor driving (OOD); code at github.com/aamini/evidential-deep-learning
## Findings (numbers and facts, not vibes)
- Benchmark regression: evidential models outperform MC-dropout and deep ensembles on NLL and inference speed on ALL datasets; RMSE competitive
- NYU Depth: strong inverse confidence-vs-error relationship; calibration curve near y=x with small calibration error; uncertainty maps track actual error spatially
- OOD: positive shift of entropy CDF on ApolloScape vs ID; OOD-detection AUC-ROC competitive — without any OOD training data
- Adversarial: uncertainty rises steadily with perturbation magnitude, spatially aligned with error
- Limitations (paper's own §6): NO calibration guarantee — conformalize before publishing; λ sensitive; Gaussian likelihood may miss heavy tails (blowouts)
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: cheapest uncertainty head for the engine — add 4-output evidential head (γ,ν,α,β) to margin/total models; epistemic Var[μ] = β/(ν(α−1)) as the per-game "engine trust" / abstention signal gating selective publishing; conformalize derived intervals (CQR) before any published number; improvement: Student-t likelihood for blowout tails; distill evidential uncertainty as a feature into temperature-map calibrators
## Engine-actionable? (yes/no + one-line what)
Yes — add evidential head to margin/total models (~1 week); gate: NLL improves vs Gaussian-MLE baseline AND Spearman(epistemic,|error|) ≥ 0.3 AND top-uncertainty-decile abstention improves win rate ≥2pp; reject the head if λ-tuning is unstable across seeds.
