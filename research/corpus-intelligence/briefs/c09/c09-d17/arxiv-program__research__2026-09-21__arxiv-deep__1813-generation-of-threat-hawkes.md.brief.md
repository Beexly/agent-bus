# arxiv-program/research/2026-09-21/arxiv-deep/1813-generation-of-threat-hawkes.md
## What it is (1-2 sentences)
Deep-read ledger of Baouan et al. (arXiv:2304.05242), "Generation of Threat" — attributes football threat-creation to players through interaction chains using 12-dimensional Hawkes processes on ball-touch event streams. Verdict: ADAPT as GSE's sequence-credit engine for red-zone-entry/explosive-play generation.
## Key metrics/methods (formulas where given, else "not specified")
- Intensity: λᵢ(t) = μᵢ + ΣⱼΣ_{tₖʲ<t} αᵢⱼ exp(−β(t−tₖʲ)); branching matrix Γᵢⱼ = αᵢⱼ/β; stability requires spectral radius ρ(Γ) < 1.
- Four GoT indices: GoTᵈⁱʳᵢ = Γ_{threat,i}; GoTⁱⁿᵈᵢ = [(I−Γ)⁻¹]_{threat,i}; GoT₉₀,ᵢ = GoTᵈⁱʳᵢ × E[touchesᵢ]; GoT₉₀,ᵢ = E[threats] − E[threats | row/col i of (K, μ) zeroed].
- MLE with exponential kernels (per-dimension-separable likelihood, Ogata); common decay β fixed across dimensions (Bonnet et al. 2022b) to tame non-concavity. SEs via parametric bootstrap.
## Data sources named
StatsPerform F24 event files: Chelsea 2016–17 (13 games, stable 3-4-3 XI); Stade Rennais 2021–22 (appendix); Ligue 1 2021–22 for player rankings. No public code; proprietary data.
## Findings (numbers and facts, not vibes)
- Simulation: ~600 min horizon suffices — at 600 min: 0.4% false-positive link rate, 0.0063 FN error, 18.6% relative Γ error; at 1,200 min FP rate 0.0%, rel error 13.4%; at 2,400 min rel error 9.5%.
- Chelsea GoT₉₀ (SE): Hazard 14.2 (2.02); Kanté 6.2 indirect (1.40), ranked 4th (box-to-box danger role recovered); Moses 5.7 (1.47); Pedro 5.5 (1.22). GoTᵈⁱʳ per touch: Hazard 0.16 (0.020).
- Ligue 1 2021–22 GoT₉₀ surprises: Berthomier 9.34 (10th), Moses Simon 8.79 (15th), right-back Frédéric Guilbert 8.42 (18th). CB ranking: Marquinhos 5.625 (0.805) #1.
- Threat defined as ball entering a danger area covering 50% of pitch width × 25% of length near opponent goal.
- Assumptions: exponential decay of influence; concatenation of games harmless given fast decay; set-piece crosses excluded; opponent possession compressed to ~12 s.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — sequence-credit assignment methodology: immigration–birth attribution credits players for generating threat through chains (e.g., a decoy WR creating the coverage bust two plays before the TD, an OL block setting up play-action). No direct QB/coaching/OL findings; the 12th dimension (red-zone entry) and per-position dimensions port to NFL personnel groupings.
## Engine-actionable? (yes/no + one-line what)
Yes — implement Hawkes GoT analogs (red-zone-entry/explosive-play as threat dimension) on GSE NFL event data to surface hidden threat generators (TEs/FBs/decoys) for projection models and weekly DFS packet content.
