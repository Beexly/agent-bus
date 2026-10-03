# docs/arxiv-program/research/2026-09-21/arxiv-deep/0654-rating-evaluation-sports-development-efficiency.md
## What it is (1-2 sentences)
Solntsev et al. (2016) design a composite-index efficiency rating for the 83 regional football federations of the Football Union of Russia across five development dimensions (reserve training, elite sport, infrastructure, grassroots, development/promotion). Ledger verdict: REJECT — sports-governance efficiency rating with no predictive model, no transferable statistic, no GSE application. (Pool-reserve paper; its REJECT is itself replaced by a fresh-search paper per program rule.)
## Key metrics/methods (formulas where given, else "not specified")
- Main contingent score: R_j = Σ_{i=1}^{I} n_{ij} w_i (I=20 factors, equal weights w_i)
- Overall score: REFD_j = R_j + D_j + T_j (D = density support, T = January-temperature support)
- Three-sigma 0–10 scoring bins: 0 pts if A ≤ X̄−2σ; 1 if X̄−2σ < A ≤ X̄−1.5σ; 2 if X̄−1.5σ < A ≤ X̄−σ; 3 if X̄−σ < A ≤ X̄−0.5σ; 4 if X̄−0.5σ < A ≤ X̄; 5 if X̄ < A ≤ X̄+0.5σ; 6 if X̄+0.5σ < A ≤ X̄+σ; 7 if X̄+σ < A ≤ X̄+1.3σ; 8 if X̄+1.3σ < A ≤ X̄+1.7σ; 9 if X̄+1.7σ < A ≤ X̄+2σ; 10 if A > X̄+2σ (asymmetric top intervals)
- Star categories: ≥8 → 5 stars; ≥6.5 → 4; ≥4.5 → 3; ≥2.5 → 2; <2.5 → 1
- Multicollinearity screen: factors with |paired correlation| ≥ 0.7 eliminated (some kept by "expert judgment")
## Data sources named
Russian Ministry of Sport unified statistical reports "1-FK" and "5-FK" (2013); "trustworthy sports statistics websites" (elite sport); interviews with federation representatives. Proprietary/national — not public.
## Findings (numbers and facts, not vibes)
- Top 10: Krasnodar Krai 7.30 (4★); Altay Krai 6.75; Moscow Oblast 6.70; Mordovia 6.55; Udmurtia 6.15 (3★); Rostov 5.95; Tambov 5.90; Moscow City 5.90; Volgograd 5.75; Tver 5.20
- No region achieved 5 stars; distribution: 43 regions 3★, 30 regions 2★, 5 regions 1★
- Of 11 World Cup 2018 host regions, 5 in top 10; others ranked 13th (Tatarstan), 16th (Sverdlovsk), 24th (St. Petersburg), 26th (Samara), 37th (Nizhny Novgorod), 38th (Kaliningrad)
- No validation of any kind: no holdout, no backtest, no baseline comparison, no sensitivity analysis on weights or cutpoints — a single unvalidated ranking on 2013 data
- The paper's own literature review (Barros et al. 2014; Espitia-Escuer & García-Cebrián 2014/2015) surveys DEA with bootstrapped CIs and stochastic frontier analysis — the authors chose the weakest available method
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: orthogonal to prediction/calibration/markets/fantasy — sports-bureaucracy efficiency rating, not team/player strength; the only adjacent idea (three-sigma-binned composite scoring) is strictly worse than GSE's existing machinery and has no predictive content
## Engine-actionable? (yes/no + one-line what)
No — rejected outright; nothing validated, predictive, or reusable for the engine.
