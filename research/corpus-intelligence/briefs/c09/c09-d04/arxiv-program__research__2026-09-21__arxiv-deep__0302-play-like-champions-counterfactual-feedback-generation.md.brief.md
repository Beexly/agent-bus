# arxiv-program/research/2026-09-21/arxiv-deep/0302-play-like-champions-counterfactual-feedback-generation.md
## What it is (1-2 sentences)
Białecki, Mastalerz & Zhou (2026, arXiv:2607.00190): StarCraft II esports coaching paper generating counterfactual "play like a champion" feedback for amateur players via a classifier-guided VAE and latent-path traversal methods. Verdict in-file is REJECT — SC2 macro-economics have no NFL transfer path into GSE's engine.

## Key metrics/methods (formulas where given, else "not specified")
Guided VAE: encoder [32, 16], latent dim 16 with four supervised dimensions, λ_cls = 1.2824, lr = 1.7725e-4, weight decay 1.3597e-5; log-variance clamped to [−20, 2]; win-probability classifier (binary cross-entropy, lr = 4.1398e-4, wd = 4.55e-6). Latent traversals: linear centroid, linear kNN, iterative optimal transport (Wasserstein-2 barycentric projection), KDE-regularized gradient ascent (Adam), neural OT via conditional flow matching (UNet, 20 discretization steps, 20 epochs). WinP(y=1|z) = σ(w^T z + b); path success = fraction crossing the 0.5 win-probability threshold while staying on-manifold (KDE likelihood, max latent norm, monotonicity).

## Data sources named
SC2EGSet (23,476 SC2 replays, Jan 2021–Jul 2024, pro tournaments/showmatches; parsed with SC2InfoExtractorGo; splits 18,780/2,347/2,178 random 80/10/10 — not temporal); amateur OOD set (2,178 replays from unreleased sc2replaystats data). Code: anonymous 4open SC2_LatentTrainer-1E5B.

## Findings (numbers and facts, not vibes)
- Guided VAE test/OOD: normalized MSE 0.5830 / 1.6619; accuracy 98.76% / 97.11%; ROC-AUC 0.9991 / 0.9926; F1 0.9881 / 0.9714; Brier 0.0090 / 0.0229.
- Path success (test/OOD): linear centroid 0.834 / 0.715; linear kNN 0.845 / 0.543; OT 0.837 / 0.720; neural flow 0.931 / 0.731; gradient ascent 1.000 / 0.998.
- Gradient ascent's perfect success is off-manifold: path KDE −4.63±1.40 vs OT −2.80±0.50; max ‖z‖ 3.95±1.74 vs 2.03±0.58; monotonicity 0.727±0.227 vs 0.998±0.041; nearest-pro-win 0.15±0.12 vs 0.06±0.04.
- OT has earliest crossover (0.120±0.065 test, 0.140±0.084 OOD) and near-perfect monotonicity — best on-manifold method.
- 196 features per player (three game windows × 39 attributes + 39 final-economy + 39 economy-change + supply-capped %); races/game versions omitted.
- Limitations (in-file): random (non-temporal) split; tournament selection bias; counterfactuals associational, not causal; no human user study; 0.9991 AUC smells of within-era memorization.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: no NFL transfer — SC2 macro-economics, supply caps, and replay-derived win labels have no football analogue.
- OTHER: portable honesty lesson for any future interpretability lane — always report on-manifold metrics (KDE likelihood, max latent norm, monotonicity) alongside raw path-success rates, since gradient ascent "won" on success while producing fantasy counterfactuals.

## Engine-actionable? (yes/no + one-line what)
No — no build recommended; the only portable idea (counterfactual-recourse interpretability) has no consumer in GSE since its features are game-level rather than player-controllable actions.
