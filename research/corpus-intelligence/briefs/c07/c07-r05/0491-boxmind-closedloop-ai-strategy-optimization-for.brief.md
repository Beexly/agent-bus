# arxiv-program/research/2026-09-21/arxiv-deep/0491-boxmind-closedloop-ai-strategy-optimization-for.md

Source paper: Wang et al. (2026), arXiv:2601.11492v2. Ledger verdict: ADAPT — port the differentiable strategy-gradient mechanism; reject the boxing machinery.

## What it is (1-2 sentences)
BoxMind is a closed-loop boxing AI: atomic punch-event detection from video → 18 hierarchical technical-tactical indicators → BoxerGraph (explicit indicator profiles + learnable time-variant latent embeddings, MLP fusion) predicting match outcomes → strategy recommendations via the gradient G_b = ∂ŷ/∂I_{b,ind} ranking the 18 indicators. The ledger ports the gradient-based "which tactical levers move win probability" paradigm into GSE's matchup/preview workflow as an opponent-specific gameplan-recommendation engine.

## Key metrics/methods (formulas where given, else "not specified")
- Atomic punch event: e = (t_start, t_end, a_hand, a_dist, a_tech, a_target, a_eff) (eq. 1).
- Latent embedding: E_b(t) = Σ_{c=0}^{C−1} E_b^{(c)}·t^c (eq. 2).
- Fusion: F_match = MLP_fusion(I_{b,ind} ⊕ E_b(t) ⊕ I_{o,ind} ⊕ E_o(t)) (eq. 3).
- Multi-task loss: L_total = α·L_MSE(Î_curr, I_GT) + β·L_CE(ŷ, y_GT) (eq. 4); CE weight 1, indicator weight 0.02; Adam lr 0.02, 800 epochs, weight decay 1e-5, single batch.
- Strategy gradient: G_b = ∂ŷ/∂I_{b,ind} (eq. 5); top-5 positive-gradient indicators = recommended tactical adjustments.
- KDE advantage labeling (S8): p_b^{(k)} = max(P(KDE_1D(i_b^{(k)}) > KDE_1D(i_level^{(k)})), P(u>v)).
- Vision pipeline: anchor-free TCN punch detector (P 0.806, R 0.763, F1 0.783 at tIoU 0.5); PRG two-stream attribute classifier (avg F1 0.700); tracking IDF1 0.985.

## Data sources named
BoxingWeb (50 rounds 2021–2024 high-level matches, public broadcast, 30 fps) + BoxingStudio (30 sparring rounds, FastMove system, 4 synchronized 60 fps views with 3D keypoints) = 80 rounds (240 min), 10.9K atomic events manually annotated by pro coaches; BoxingWeb-Full: 651 matches → 1,909 rounds (119 hours); BoxerGraph-80KG: 298 matches among 68 elite 80kg boxers; 2,240 rounds of Chinese National Team training footage. No public release stated.

## Findings (numbers and facts, not vibes)
- BoxerGraph-80KG test accuracy: Glicko 58.7%, Elo 60.3%, WHR 60.3%; indicator-only 54.0% / 68.8% (test/Olympics); latent-only 63.5% / 75.0%; BoxMind unified 69.8% / 87.5% (+9.5pp over best baseline on test).
- Olympic event: 14/16 correct (WHR 12/16); Chinese team: 3 gold, 2 silver — causal attribution asserted, not identified (no control arm).
- Expert comparison F1: BoxMind 0.601±0.194 vs human experts' mean 0.467±0.238 (paired t=1.623, p=0.111 — not significant); advantage-label F1 0.854±0.094 vs 0.802±0.123 (p=0.230). Narrower σ is the more defensible claim, on tiny samples (n=10 matches / 10 boxers).
- Indicator extraction correlation vs ground truth r=0.761 overall (Counter Punches weakest at 0.579).
- Li Qian case: Close-&Mid-Range Punches 28.5%→39.0% in training, +11.6pp more in Olympic semis/finals.
- Ledger critique: indicator-profile-only ablation (54.0%) implies the latent embedding does most work — the system is largely a sophisticated strength-rating model, limiting how matchup-informative the gradients are.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- COACHING: the portable mechanism — opponent-specific tactical levers (∂P(cover)/∂style-indicator) for matchup previews and weekly DFS packets, e.g. "increasing early-down pass rate vs this opponent moves cover probability most."
- OTHER: the fusion pattern (explicit style-profile features + learnable latent team embeddings with time decay + MLP head) and KDE advantage-labeling (edge vs league average vs edge vs opponent's specific history).

## Engine-actionable? (yes/no + one-line what)
Yes — build "GSE Strategy Gradient": team-pair cover/margin model on gse-lab style metrics + latent team embeddings, surfacing top-5 matchup levers per game; adopt if the fused model beats Elo/spread baseline by ≥3pp cover accuracy on 2023–2024 holdout and realized top-gradient levers show p<0.05 cover-rate advantage.
