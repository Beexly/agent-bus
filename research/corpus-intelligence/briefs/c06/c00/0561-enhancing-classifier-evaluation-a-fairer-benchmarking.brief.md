# arxiv-program/research/2026-09-21/arxiv-deep/0561-enhancing-classifier-evaluation-a-fairer-benchmarking.md
## What it is (1-2 sentences)
Deep read of Cardoso et al. (2025, arXiv:2504.09759): a benchmarking strategy combining Item Response Theory (3PL: per-instance difficulty/discrimination/guessing) with Glicko-2 round-robin tournaments over classifiers (winner = higher IRT True-Score), producing an ability-vs-robustness ranking of classifiers on OpenML-CC18. Verdict in file: ADAPT — fit IRT difficulty/discrimination parameters to GSE's games and rank engine versions by Glicko-2 tournaments; adapt the 3PL setup from classification benchmarks to betting games.
## Key metrics/methods (formulas where given, else "not specified")
- 3PL: P(U_ij=1|θ_j) = c_i + (1−c_i)·(1/(1+e^{−a_i(θ_j−b_i)})) — difficulty b_i, discrimination a_i, guessing c_i per test instance.
- True-Score: TS_j = Σ_i P(U_ij=1|θ_j); Birnbaum two-step ability estimation (catsim), instances sorted by difficulty in 10 ascending groups.
- Glicko-2 tournament: each dataset = one rating period, round-robin, chess scoring 1/0/0.5, initial 1500 / RD 350 / volatility 0.06; final rating → ranking.
- Principle of Consistent Order: getting a hard item right while missing easier ones penalizes ability.
## Data sources named
OpenML-CC18 (60 of 72 datasets used; 11 largest excluded as too slow; Pc4 excluded — ltm non-convergence); 120 MLPs + 12 classifiers + 7 artificial anchors; stratified 70/30 splits, test capped at 500. decodIRT tool: https://osf.io/wvptb/files/.
## Findings (numbers and facts, not vibes)
- Only 16.66% of datasets have mean difficulty >0, 3.33% >1 — ~1/6 of the benchmark truly challenging; >90% positive discrimination.
- Difficulty–discrimination inversion: hardest bin (mean difficulty 0.63) has mean discrimination −2.44; easiest (−1.99) has 20.09.
- Negative-discrimination pathology: on "ilpd", negative-discrimination instances let the pessimal classifier outscore optimal on True-Score; dropping them restores ordering.
- Glicko-2 (increasing-discrimination): optimal 1799.001, SVM 1734.361, MLP 1700.412, RF 1697.411, KNN 1690.538; (increasing-difficulty): RF 1709.253, SVM 1708.006, optimal 1628.72 — ordering is tournament-schedule dependent. Low-variation 30-dataset subsets: optimal 1975.373/1904.183, agreeing on all real-classifier positions (76.6% overlap).
- Metadata: MajorityClassPercentage correlates with guessing deviation (0.26) and discrimination deviation (0.29); ClassEntropy correlates highly with all item-parameter SDs.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: honest model selection — per-game difficulty/discrimination answers "which NFL games are genuinely hard to call"; Glicko-2 tournaments over engine versions replace headline-accuracy comparisons that overweight easy games; difficulty estimates also size bets (reduce stake on high-guessing-parameter coin-flip games).
## Engine-actionable? (yes/no + one-line what)
yes — define items = NFL games 2018–2025, respondents = engine versions + baselines, response = beat-the-close (ATS); adopt IRT-for-games only if per-game difficulty is temporally stable (r ≥ 0.5 across season blocks) and the IRT/Glicko-2 rankings correct an easy-games bias (≥1 rank flip among top 3 vs plain accuracy).
