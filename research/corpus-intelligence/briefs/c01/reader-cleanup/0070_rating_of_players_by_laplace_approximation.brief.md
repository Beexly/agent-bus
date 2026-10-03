# arxiv-program/research/2026-09-21/arxiv-deep/0070-rating-of-players-by-laplace-approximation.md

## What it is (1-2 sentences)
arXiv:2310.10386v1 (Hua, Chang, Lin, Weng, 2023) develops a per-match Laplace-approximation variance update for Bradley-Terry/Elo ratings, with a closed-form surface-transfer extension, validated on men's pro tennis. Verdict in ledger: ADAPT — a concrete, implementable refinement of GSE's existing dynamic-Elo lane, McNemar-significant on 5,100 test matches.

## Key metrics/methods (formulas where given, else "not specified")
- Elo step: θ̂′ = θ̂ + K(S − E); Bradley-Terry win prob p_ij = e^{bθ_i}/(e^{bθ_i}+e^{bθ_j}), b = log(10)/400.
- Laplace single Newton step: μ′ = μ − H⁻¹(μ)J(μ); Σ′ = −H⁻¹(μ′) (single-step vs numerical integration relative error 1e-6–1e-2).
- Variance recipe: (σ_i²)′ = σ_i²(1 − L_i), with L_i = b²p̂′_ijp̂′_jiσ_i²C′, C = (1 + b²p̂_ijp̂_ji(σ_i²+σ_j²))⁻¹.
- Dynamic evolution: (σ_i²)′ = σ_i²(1−AL_i), A = 1−α ∈ [0,1]; lower bound: (σ_i²)′ = max(B², σ_i²(1 − AL_i)). (A,B)=(0,0) = constant-variance Elo; (1,0) = naive variance update.
- Surface-transfer formula: δ_il = ρ_ml(σ_l/σ_m)δ_im — unplayed-surface adjustment ∝ cross-surface correlation × SD ratio; per-surface update μ′_il = μ_il + k_il(s_ij − p̂_ij), k_il = bCσ_mσ_lρ_ml.
- McNemar test: Z = (n₂₁−n₁₂)/√(n₁₂+n₂₁), one-sided.
- Parameters estimated by minimizing train negative log-likelihood; (A,B) over grid A ∈ {1,1/2,1/3,1/4,1/5}, B ∈ {0,50,60,75,80,100}.

## Data sources named
Jeff Sackmann ATP matches 2010–2019 (public, tennis_atp GitHub); 25,537 matches: train 2010–2017 (20,437: Hard 11,613 / Clay 6,399 / Grass 2,425), test 2018–2019 (5,100: Hard 2,907 / Clay 1,559 / Grass 634). 771 players; 135 with >250 appearances. New-player study: 670 players absent from first 5,000 matches, first n ∈ {20,30,40} matches each.

## Findings (numbers and facts, not vibes)
- Table 3 (all surfaces): constant-variance (0,0) σ=80 → 0.6338 accuracy; naive (1,0) σ=200 → 0.6199 (worse); bound B=80, A=1/3 → 0.6381; A=1/5 → 0.6387 (best, +21.9–25.0 of 5,100). McNemar Z=2.668 p=0.0038; Z=2.887 p=0.0019.
- Table 4 (surface model): GenElo 0.6452 (σ_clay=91.62, σ_grass=98.71, σ_hard=80.37, ρ_cg=0.47, ρ_ch=0.72, ρ_gh=0.84 — grass most variable; grass–hard most correlated). vGenElo 0.6487 (+17.9 matches) but McNemar p=0.1772, not significant.
- Table 5 (hard-only, 2,907 matches): μ-only σ=85 → 0.6462; (A,B)=(1/4,50) → 0.6535, McNemar p=0.0510; (1/5,50) p=0.0478.
- Table 7 (new players, (A,B)=(1/5,80)): m₁₀ > m₀₁ consistently (variance update wins for a majority of new players); naive update over-reduces variance late in careers (Medvedev case).
- Variance addition scales with matchup closeness: L_i peaks at p̂=0.5; wider strength gaps get smaller additions. Naive variance collapses σ to 16–20 after ~500 games (vs. typical K=32).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Per-match Elo variance update (Eq. 25) is a drop-in refinement for GSE's NFL team/QB rating updates: faster adaptation to rookies/QB changes without variance collapse. The gate: adopt only if vElo beats constant-variance Elo with McNemar p<0.05 at ≥+0.3pp on time-ordered 2018–2023 NFL games.
- [OTHER] Surface-transfer formula δ_il = ρ_ml(σ_l/σ_m)δ_im is the template for NFL context-split ratings (grass vs. turf, dome vs. outdoor, home vs. away): propagate a result on one split to others ∝ correlation × SD ratio. Prior template: cross-split correlations 0.47–0.84.
- [OTHER] Caution: if the context split is already modeled, the variance-update value shrinks (p=0.1772) — model the split first, variance second. Do not adopt tennis (A,B); re-tune on NFL data.

## Engine-actionable? (yes/no + one-line what)
Yes — insert (σ²)′ = max(B², σ²(1−AL)) into GSE's Elo updater with NFL grid-searched (A,B), and prototype context-split rating transfer via δ_il = ρ_ml(σ_l/σ_m)δ_im for surface/home splits.
