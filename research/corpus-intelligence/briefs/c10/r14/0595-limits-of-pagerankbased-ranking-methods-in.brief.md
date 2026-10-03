# arxiv-program/research/2026-09-21/arxiv-deep/0595-limits-of-pagerankbased-ranking-methods-in.md
## What it is (1-2 sentences)
Deep read of Zhou et al. (2020, arXiv:2012.06366v1): a negative result proving PageRank-based sports rankings beat the plain win ratio only in a tiny low-randomness early-season corner, and are worse everywhere else. Verdict REJECT — keep as a guardrail against adopting network-centrality rankings in the team-strength pipeline.
## Key metrics/methods (formulas where given, else "not specified")
- Two-parameter outcome model: P(i,j) = [1 + e^{−(f_i − f_j + H)/δ}]^{−1}; calibrated version with f_i ≈ win ratio w_i: P(i,j) = [1 + e^{−(Δw_{i,j} + H)/δ}]^{−1} (δ = randomness, H = home advantage)
- PageRank: P_i = (1−α)Σ_j P_j w_{ji}/s_j^{out} + α/N + (1−α)/N Σ_j P_j δ(s_j^{out}), α=0.15, loser→winner edges with dangling-node correction
- Bi-directional PageRank: S_i = P_i − Q_i (Q_i = PageRank on reversed winner→loser edges)
- Metrics: Kendall τ, top-5 AUC, average computed rank of top-5 ground-truth teams
## Data sources named
18 leagues: MLB AL/NL 1997–2016, NPB 2010–2019, LMB 2007–2019, NHL 2000–2019, LNA 2008–2019, DEL 2007–2020, Bundesliga 2000–2019, Serie A 2005–2019, La Liga 1998–2017, EPL 1999–2018, MLS 2000–2019, Ligue 1 2000–2019, CSL 2004–2019, LBSA 2008–2019, CBA 2007–2017, ACB 2007–2019, NBA 2001–2020; data from sports-reference.com and win007.com; synthetic N=30 teams with calibrated model.
## Findings (numbers and facts, not vibes)
- PageRank beats WinRatio only when δ small AND fraction of season P small; the δ threshold shrinks as P grows; the vast majority of real datasets have δ > 0.15, where PageRank brings no improvement — significantly worse for high-δ sports late season
- Real data: BiPageRank beats WinRatio only at P ≈ 0.1 or lower per league; averaged over all leagues the threshold is P = 0.035, and WinRatio never loses by more than 0.03 in Kendall τ
- BiPageRank ≥ PageRank in all settings but beats WinRatio only for lowest-randomness sports at small P (e.g., δ=0.1, P=0.1); power-law fitness shrinks the advantage further
- Calibration: baseball most random, basketball least (CBA least random of 17 leagues); H ∈ [0, 0.25]; CBA's H/δ is 5.4× baseball's
- Mechanism: a single upset perturbs only two teams' win ratios but propagates through the whole PageRank network; with many upsets (high δ), accumulation is detrimental
- No fraction of removed/reversed upsets (η) lets PageRank/BiPageRank beat WinRatio — WinRatio improves uniformly
- Real-data ground truth = final win-ratio ranking, which structurally favors WinRatio; the early-season PageRank edge survives it
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Negative result: no PageRank-family method in the ratings pipeline; licenses exactly one use — BiPageRank on first ~3.5% of games (roughly NFL weeks 1–2) — OTHER
- (δ, H/δ) outcome model and calibration protocol adjacent to existing HFA/luck work — OTHER
- Upset-propagation mechanism as a caution for any network-based NFL strength metric — TRUST-SIGNAL (a TRUST finding about what NOT to trust)
## Engine-actionable? (yes/no + one-line what)
No — it is a rejection guardrail: do not build PageRank-family team rankings; if a network ranking is ever tried, the only licensed window is the first ~3.5% of games with BiPageRank, per the file's conditional acceptance gate.
