# docs/arxiv-program/research/2026-09-21/arxiv-deep/0598-twosample-testing-on-ranked-preference-data.md
## What it is (1-2 sentences)
A research-ledger deep read of arXiv:2006.11909v2 — a minimax-optimal model-free two-sample test for whether two populations' pairwise-comparison (or ranked-preference) distributions differ, with the headline negative result that assuming BTL/SST/Thurstone buys no computational advantage over the model-free test. Verdict: ADAPT — deploy the permutation test as a principled regime-change detector for team-strength windows and model-monitoring.
## Key metrics/methods (formulas where given, else "not specified")
- Hypotheses (1): H_0: P=Q vs H_1: (1/d)|||P−Q|||_F ≥ ε.
- Test statistic (8): T = Σ_{i,j} I_ij [k^q(k^q−1)(X²−X) + k^p(k^p−1)(Y²−Y) − 2(k^p−1)(k^q−1)XY] / [(k^p−1)(k^q−1)(k^p+k^q)]; reject when T ≥ 11d (general threshold d√(24(2−ν)/ν) for error ν). Permutation variant (Algorithm 2) for sharp finite-sample Type I control.
- Sample complexity upper bound (Theorem 1): ε² ≥ c/(kd) suffices with k>1 comparisons/pair (testing needs only k=O(1/(dε²)) vs estimation's O(log d/ε²)); random-design corollary ε² ≥ c·max{1/(μd), 1/d²}.
- Ranking data: rank-breaking (random/disjoint-deterministic/complete) → Algorithm 1 (Plackett–Luce, Theorems 7–8); permutation Algorithm 4 controls Type I for the nonparametric model (Theorem 9).
- Model hierarchy: {BTL, Thurstone} ⊂ parameter-based ⊂ SST ⊂ MST ⊂ WST ⊂ model-free.
- Assumptions: no ties; comparisons independent within/across pairs; ranking subset selection independent of preferences.
## Data sources named
Simulations: d=20, ε=0.05, random-design k~Bin(n,a). Real: (1) Shah et al. 2016 MTurk set — 6 experiments (photo age, spelling, city distances, search results, taglines, piano), 10–25 items, 2017 ordinal + 1671 cardinal-converted responses, d=74 combined; (2) European football 2016-17 vs 2017-18 (EPL, Bundesliga, La Liga, Ligue 1), 15–17 common teams, d=67, 801 vs 788 comparisons, draws excluded; (3) Kamishima sushi set — 5000 total + 5000 partial rankings over 10/100 sushi types with demographics. No code link; Algorithms 1–4 fully specified.
## Findings (numbers and facts, not vibes)
- Minimax optimality: MST/WST/model-free critical radius ε²_M > c/(kd) matches the upper bound (Theorem 3); SST/parameter-based information-theoretic lower bound ε²_M > c/(kd^{3/2}) (Theorem 5); computational lower bound for SST at k=1: ε²_M > c/(d(log log d)²) under the planted-clique conjecture (Theorem 6) — no polynomial-time test beats the model-free rate, so assuming SST/BTL buys nothing.
- k≤1 impossible in general: minimax risk ≥ 1/2 for ε ≤ 1/2 (Proposition 4).
- MTurk ordinal vs cardinal-converted-to-ordinal REJECTED, p=0.003 combined (age p=0.001, taglines p=0.083, search p=0.187; spelling/distances/piano n.s.).
- European football 2016-17 vs 2017-18: FAIL TO REJECT, p=0.971 combined (EPL 0.998, Bundesliga 0.691, La Liga 0.67, Ligue 1 0.787) — no detectable shift in relative team strength across consecutive seasons.
- Sushi: significant gender/age/region differences detected in both total and partial ranking sets, competitive with Kendall/Mallows kernel tests.
- Simulation power curves coincide across d, ε, a at the predicted n = 1/(adε²) scaling; power identical under model-free, BTL, and SST data-generating models.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Regime-change gate: only re-fit team-strength priors when the test rejects across pre/post windows (coaching changes, QB injuries, trade deadline, season halves) (COACHING).
- No-detectable-shift baseline (p=0.971 across 4 leagues) licenses strong season-to-season team-strength persistence priors (OTHER — prior calibration).
- Model-monitoring: test whether engine pick-outcome distributions shifted after a model-version deploy (TRUST-SIGNAL).
- Pair-contribution attribution extension turns "something changed" into "the AFC East hierarchy changed" (OTHER — attribution).
## Engine-actionable? (yes/no + one-line what)
Yes — deploy the permutation two-sample test (Algorithm 2, ~50 lines) as a regime-change monitor gating team-strength prior re-fits around coaching changes/QB injuries/trade deadline/season halves, and as a model-deploy outcome-distribution monitor; accept if first-half/second-half false-rejection rate lands in [2%,10%] and the test rejects the 2020-vs-2019 COVID break at p<0.05.
