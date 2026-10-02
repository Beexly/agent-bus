# docs/arxiv-program/research/2026-09-21/arxiv-deep/0598-twosample-testing-on-ranked-preference-data.md

## What it is (1-2 sentences)
Deep-read ledger of arXiv:2006.11909v2 (Rastogi, Balakrishnan, Shah, Singh 2021) on minimax-optimal two-sample testing for ranked preference data, with the headline negative result that assuming BTL/Thurstone/SST buys nothing computationally over a model-free quadratic test. Verdict: ADAPT — the model-free two-sample test is directly usable as a principled change-detection tool for team-strength regimes (seasons, coaching changes, QB injuries).

## Key metrics/methods (formulas where given, else "not specified")
- Test statistic (Eq. 8): T = Σ_{i,j} I_ij [k^q(k^q−1)(X²−X) + k^p(k^p−1)(Y²−Y) − 2(k^p−1)(k^q−1)XY] / [(k^p−1)(k^p−1)... (k^p−1)(k^q−1)(k^p+k^q)] — unbiased-for-zero-under-null quadratic form; reject when T ≥ 11d (general threshold d√(24(2−ν)/ν) for error ν). Permutation variant (Algorithm 2) for sharp finite-sample Type I control.
- Ranking data: rank-breaking (random/disjoint-deterministic/complete) converts rankings to pairwise comparisons, then Algorithm 1 (Plackett-Luce, Theorems 7–8); permutation Algorithm 4 controls Type I error for the nonparametric marginal-probability model (Theorem 9).
- Sample complexity: testing needs only k = O(1/(dε²)) comparisons per pair vs estimation's k = O(log d/ε²) — testing is far cheaper than estimation.
- Lower bounds match: MST/WST/model-free critical radius ε²_M > c/(kd) (Theorem 3 — minimax optimal); parameter-based/SST information-theoretic lower bound ε²_M > c/(kd^{3/2}) (Theorem 5); computational lower bound for SST at k=1: ε²_M > c/(d(log log d)²) under the planted-clique conjecture (Theorem 6) — no polynomial-time test beats the model-free rate, so assuming SST/BTL buys nothing.
- k ≤ 1 impossible in general: minimax risk ≥ 1/2 for ε ≤ 1/2 (Proposition 4).

## Data sources named
- Theory: d items, per-pair counts k^p_ij, k^q_ij, win counts X_ij ∼ Bin(k^p_ij, p_ij). Simulations: d=20, ε=0.05, random-design k∼Bin(n,a).
- Real data: (1) Shah et al. 2016 MTurk crowdsourcing set — 6 experiments, 2017 ordinal + 1671 cardinal-converted-to-ordinal responses, d=74; (2) European football 2016-17 vs 2017-18 (EPL, Bundesliga, La Liga, Ligue 1), 15–17 common teams/league, d=67, 801 vs 788 comparisons, draws excluded; (3) Kamishima sushi preferences — 5000 total + 5000 partial rankings with demographics. No code released; Algorithms 1–4 fully specified.

## Findings (numbers and facts, not vibes)
- Simulations: power-vs-scaling curves coincide across varied d, ε, a, confirming the predicted rate; power identical under model-free, BTL, and SST data-generating models.
- Ordinal vs cardinal-converted-to-ordinal REJECTED, p=0.003 combined (age p=0.001, taglines p=0.083, search p=0.187; spelling/distances/piano n.s.).
- European football 2016-17 vs 2017-18: FAIL TO REJECT, p=0.971 combined (EPL 0.998, Bundesliga 0.691, La Liga 0.67, Ligue 1 0.787) — no detectable shift in relative team strength across consecutive seasons.
- Sushi: significant demographic differences (gender, age, region) detected in both ranking sets, competitive with Kendall/Mallows kernel tests.
- Limitations: football analysis drops draws and uses ≤2 comparisons/pair — near the k>1 boundary, low power against small shifts; test detects *any* shift with no attribution of which teams changed.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Model-free test as regime-change monitor (pre/post coaching changes, QB injuries, trade deadline, season halves): gate re-fitting of team-strength priors on rejection: OTHER (new corpus capability; corpus has regime/momentum detection but no principled two-sample change test).
- Cross-season non-shift baseline p=0.971: priors on season-to-season team-strength persistence should be strong — claims of "the league got weaker" need this test's bar: TRUST-SIGNAL.
- "Assuming BTL/SST buys you nothing" licenses the simple model-free test over fancier parametric change detectors: TRUST-SIGNAL (method-selection discipline).
- Per-pair decomposition of T as post-rejection attribution step (which team-pairs drive the change): OTHER (improvement experiment proposed).

## Engine-actionable? (yes/no + one-line what)
Yes — deploy the permutation two-sample test (Algorithm 2, ~50 lines) as the regime-change gate: only re-fit team-strength priors when the test rejects at α=0.05; adoption gate: false-rejection rate on within-season halves within [2%, 10%] AND the test rejects 2020-vs-2019 (a known structural break) at p<0.05.
