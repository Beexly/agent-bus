# docs/arxiv-program/research/2026-09-21/arxiv-deep/1165-ambiguous-role-of-social-influence.md

## What it is (1-2 sentences)
Deep read (ledger #1165) of arXiv:2007.15508 (Mavrodiev & Schweitzer, 2020) deriving closed-form dynamics for how social influence (coupling to others' opinions, α) and individual conviction (anchoring to initial opinion, β) affect wisdom-of-crowds error and diversity over time. Verdict in file: ADAPT — as an ensemble-diversity governance rule: audit GSE's model pool for correlated retraining toward consensus and enforce conviction.

## Key metrics/methods (formulas where given, else "not specified")
- Opinion dynamics: dx_i(t)/dt = α[⟨x(t)⟩ − x_i(t)] + β[x_i(0) − x_i(t)] + Aξ_i(t), α = social influence, β = conviction, ξ_i Gaussian white noise, A = noise strength; agents observe only the mean opinion.
- Collective error: E(t) = [ln T − ⟨ln x(t)⟩]². Group diversity: D(t) = Var[ln x(t)] ≈ ⟨δ²(t)⟩/⟨x(t)⟩² (delta method).
- Long-term diversity (exact): D_LT = ⟨δ²(0)⟩·β² / [⟨x(0)⟩(α+β)]².
- Sensitivities: dD_LT/dα = −2⟨δ²(0)⟩β²/[⟨x(0)⟩²(α+β)³] < 0 (social influence always destroys diversity); dD_LT/dβ = 2αβ⟨δ²(0)⟩/[⟨x(0)⟩²(α+β)³] > 0 (conviction preserves it).
- Long-term collective error E_LT: infinite series in initial moments with (α,β) weights (Eqn. 19); d⟨ln x(t)⟩/dt > 0 always.
- GSE adaptation in file: α_proxy = mean pairwise correlation of week-to-week prediction changes across component models; β_proxy = each model's correlation with its private signal vs the ensemble mean; weekly δ²(t) tracking of cross-model log-odds variance; model-independence registry (each model keeps ≥1 unshared feature family/source); new-model gate requiring mean pairwise |correlation| < 0.85 with pool on holdout.

## Data sources named
- No new dataset — theory paper; motivating distribution is log-normal initial opinions from cited experiments (e.g., Switzerland border-length estimates, Lorenz et al. 2011); numerical illustrations: ln T = −2.83, ⟨ln x(0)⟩ = −3, E(0) = 0.02, ⟨x(0)⟩ = 0.075, ⟨δ²(0)⟩ = 0.004–0.01.

## Findings (numbers and facts, not vibes)
- Parameter-sweep scenarios (Fig. 3, exact): (a) E(0)=0.80, ⟨ln x(0)⟩<ln T: increasing α always improves; increasing β worsens. (b) E(0)=0.02, ⟨ln x(0)⟩>ln T: any α deteriorates; β counterbalances. (c) E(0)=0.01, ⟨ln x(0)⟩<ln T: non-monotonic — E_LT=0 achievable with α<0.5 and sufficient β; α>0.5 deteriorates. [OTHER: consensus dynamics]
- Qualitative (paper's claims): social influence helps only when initial collective error is large AND the initial mean is below truth; in most cases it deteriorates; conviction always mitigates; D_LT monotonically decreasing in α, increasing in β. [OTHER: theory]
- Illustration: with ⟨δ²(0)⟩=0.006, D(0)=0.8, (α,β)=(0.5,2.0)→(0.8,2.0)→(0.8,2.5): diversity decay rate steepens with α, flattens with β (Fig. 2). [OTHER: theory]
- GSE mapping in file: ensemble members sharing nflverse data, features, and retraining pipelines are the analog of high-α agents — correlated errors, "diversity rot"; no repo file currently audits cross-model dependence. [TRUST-SIGNAL: calibration/ensemble-health risk]
- Acceptance gate in file: ADOPT governance if audit finds significant downward δ²(t) trend over 2025 (p<0.05) or any model pair with |correlation| > 0.9 on holdout; otherwise keep the one-time audit only.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Ensemble diversity governance (α_proxy/β_proxy audit, model-independence registry, <0.85 correlation gate): [TRUST-SIGNAL — protects ensemble calibration from correlated-model rot]
- Market-coupled vs independent model experiment (closing-line features included vs excluded): [TRUST-SIGNAL — quantifying consensus cost]
- Caution against consensus-fitting retraining pipelines: [COACHING-adjacent process discipline — tagged COACHING only in the operational sense; primary tag TRUST-SIGNAL]

## Engine-actionable? (yes/no + one-line what)
yes — Run the one-day ensemble-diversity audit (weekly δ²(t) trend on 2024–2025 component-model log-odds; pairwise holdout correlations) and adopt the governance rule (model-independence registry, <0.85 correlation gate for new models, no consensus-fitting retraining) if rot is found; plus the market-coupling controlled experiment.
