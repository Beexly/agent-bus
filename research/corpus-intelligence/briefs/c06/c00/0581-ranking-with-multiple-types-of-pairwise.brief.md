# arxiv-program/research/2026-09-21/arxiv-deep/0581-ranking-with-multiple-types-of-pairwise.md
## What it is (1-2 sentences)
Deep read of Newman (2022, arXiv:2206.13580v2): a modified Bradley-Terry model with a latent "stance" per interaction and a per-interaction-type "valence" probability q_t = P(dominant party wins an interaction of type t), fit by EM to jointly infer the ranking and each type's informativeness/direction from the data — demonstrated on synthetic, vervet monkeys, classroom networks, and the 2015 NFL season. Verdict in file: ADAPT — port the EM + valence machinery to NFL team strength where play facets are auto-weighted by inferred informativeness.
## Key metrics/methods (formulas where given, else "not specified")
- p_uv = λ_u/(λ_u+λ_v), λ_u = e^{s_u}; stance likelihood P(σ_r|λ) = λ_u^{σ_r}λ_v^{1−σ_r}/(λ_u+λ_v); observation model P(x_r|σ_r,q_t) = q_t^{σ_r}(1−q_t)^{1−σ_r}.
- EM: E-step π_r = λ_{u_r}q_{t_r}/(λ_{u_r}q_{t_r}+λ_{v_r}(1−q_{t_r})); M-step q_t = Σ δπ/Σδ; λ_i = Σ[πδ_u+(1−π)δ_v]/Σ_u A_{iu}/(λ_i+λ_u) (Zermelo-style), renormalized by geometric mean.
- MAP variant: logistic prior P(s) = 1/((e^s+1)(e^{−s}+1)) (uniform prior on dominance-vs-average probability); λ_i = (1+Σ[…])/(2/(λ_i+1)+Σ_u A_{iu}/(λ_i+λ_u)).
- Handles sign-flip invariance (λ→1/λ, q→1−q) by post-hoc inversion.
## Data sources named
Synthetic (N=100, M=1000/5000, T=5/10, 1000 replicates); vervet monkeys (66 monkeys, 11,664 encounters, 8 types, 2015–2017); 7th-grade classroom (Vickers & Chan 1981); 2015 NFL (32 teams, 36,030 play-level interactions, 5 play types — run/pass/sack/punt/FG — from Yurko et al./nflverse lineage; NO success info used, only play-type choices). Code: supplementary at doi.org/10.1098/rspa.2022.0517.
## Findings (numbers and facts, not vibes)
- Synthetic Spearman R² (multimodal/traditional): M=5000,T=5: 0.88/0.83 (q∈[0.5,1]), 0.83/0.53 (q∈[0.25,1]), 0.88/0.42 (q∈[0,1]) — multimodal wins hugely when some types signal subordination.
- 2015 NFL: inferred rank scores vs win fraction R²=0.453, p<0.0001 — with no success information; valences: rushing plays and field goals signal dominance (q_t>0.5); passing plays, sacks, punts signal subordination (q_t<0.5); bottom-10 teams averaged 620 pass plays vs 504 for top-10. Runtime 11 s on a circa-2022 laptop.
- Limitations: NFL result is in-sample description, not a backtest; "passing signals subordination" is largely a game-script artifact (trailing teams pass more; no score/clock controls); single season; independence assumption false (drives correlated).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- COACHING: valence per play facet (rushing success, dropback success, turnover margin, special teams, penalties) — each facet's inferred q_t measures its information about true team strength; team strengths s_u become a new power rating for the engine.
## Engine-actionable? (yes/no + one-line what)
yes — define per-drive facet matchup outcomes on nflverse 2009–2025, residualize on pre-drive score differential (fixing the game-script confound), fit MAP-EM per season/rolling 8-week window; adopt if ≥2% better log-loss than unimodal BT on 2016–2023 week-18+playoff windows or ATS hit-rate beats EPA-ranking baseline by ≥1.5 pts in ≥6 of 8 seasons.
