# docs/arxiv-program/research/2026-09-21/arxiv-deep/0227-stop-simulating-efficient-computation-of-tournament.md
## What it is (1-2 sentences)
Deep read of arXiv:2307.10411v1 (Brandes, Marmulla, Smokovic, 2026): exact (non-simulation) computation of tournament winning probabilities by enumerating group-stage outcome sequences and propagating joint advancement probabilities up the knockout bracket exploiting independence among non-mixing subtrees. Ledger verdict: ADAPT — the exact bottom-up bracket DP for fixed-seed single elimination transfers to NFL playoff probabilities; the group-stage enumeration does not (NFL has no group phase).
## Key metrics/methods (formulas where given, else "not specified")
- Group enumeration: 3^6 = 729 outcome sequences per 4-team group as ternary integers s ∈ {0,1,2}^6; sequence probability p = ∏ single-match probabilities; joint advancement G[4g+i_1, 4g+i_2] += p·(1/|R[s]|); only 1,260 distinct (1st,2nd) pairs vs 7,296 naive; group-exit probability for team i = 1 − Σ_j (G_ij + G_ji).
- Knockout propagation (R16): p = G[i,j]·G[k,ℓ]; L16[i,j] += p·M'[i,ℓ]·M'[j,k]; plus three sibling updates; semifinal (mixing): p = QF[i,j]·QF[k,ℓ] with four SF updates; final: F_i += p·M'[i,j].
- Demonstration single-match model (illustrative only): team strengths θ_i = 1/(1+10^{(ρ_j−ρ_i)/σ}), FIFA points ρ; group via Bradley-Terry + Davidson-Beaver draw extension; knockout draw split 50/50; recalibrated σ = 360 (men), 240 (women, fit vs betting odds).
- Total exact cases: 80,452 (2022), 23,256 (2023); one simulation run = 63 sampled matches.
## Data sources named
FIFA/Coca-Cola World Ranking points (Oct 2022 men, Jun 2023 women; Appendix A); 2022/2023 World Cup schedules; published simulation baselines (FiveThirtyEight, Alan Turing Institute, Joshua Bull, DTAI, Zeileis). No code or data stated as available (Appendix D R implementation and Appendix C tables "to be provided").
## Findings (numbers and facts, not vibes)
- Exact computation finishes in the time of a few hundred simulation runs; at that point simulation max error ≈ 2.5% points; ≥10,000 sims needed for 1%-point max error, ≥20,000 for "reasonable accuracy"; even at 100,000 sims max error still >0.1% points. Claim: exact is two orders of magnitude faster than reasonably-accurate simulation.
- 2022 men's winner probabilities: Brazil 18.01%, Belgium 14.63%, Argentina 10.46%, France 9.24%, England 6.78%; Morocco 0.7392% (reached semifinal).
- 2023 women's: USA 21.12%, Germany 12.58%, Sweden 12.03%, England 10.17%.
- Structural observation: independence among non-mixing subtrees persists up the tree; dependencies arise only for teams on trajectories that meet. Live updates: clamp known outcomes to probability 1.
- 2026 format (48 teams, 8 groups of 6): enumeration needs 3^15 = 14,348,907 sequences per group — prohibitive; the algorithm does not fit formats with third-placed teams advancing.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: exact fixed-bracket DP replacing Monte Carlo for NFL playoff advancement (P(make playoffs), P(bye), P(reach divisional/Super Bowl), P(win SB)); joint-pair intermediates usable for correlated futures pricing; live-update property for in-season recomputation.
## Engine-actionable? (yes/no + one-line what)
Yes — build exact 14-team NFL bracket DP (~50 lines, 2–3 days) fed by GSE's single-game win probabilities, recomputed weekly/live with clamped results; also enumerate ≤4-game division races exactly (2^4–3^4 combos); accept if DP <1s/run and 100k-run Monte Carlo shows >0.25% max error in ≥2 of 3 backtest seasons.
