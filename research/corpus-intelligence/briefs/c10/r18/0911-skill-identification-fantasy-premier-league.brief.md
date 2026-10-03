# arxiv-program/research/2026-09-21/arxiv-deep/0911-skill-identification-fantasy-premier-league.md
## What it is (1-2 sentences)
Full-text ledger (read 2026-09-21) of O'Brien, Gleeson & O'Sullivan, arXiv:2009.01206v1 — asks whether fantasy success is skill or luck using 901,912 FPL managers' full 2018/19 season, and isolates the mechanisms: season-to-season skill persistence, top-tier transfer quality, chip timing, and template-team herding via co-occurrence clustering. Verdict: ADAPT — three portable instruments: template-team (chalk) detection, a transfer-regret decision-quality metric for GSE's optimizer/waiver logic, and skill-persistence correlations to calibrate real DFS edge vs noise.
## Key metrics/methods (formulas where given, else "not specified")
- Skill persistence: pairwise Pearson correlations of season points totals across 13 seasons; OLS of 2018/19 points on number of prior seasons played
- "Fraction of better transfers possible" y_G(x_i,x_j) = Σ_k 1[q_G(x_k)≤q_G(x_i)]·1[p_G(x_k)>p_G(x_j)] / Σ_l 1[q_G(x_l)≤q_G(x_i)] (perfect-foresight transfer-regret metric)
- Template team: player co-occurrence matrix A^G_ij (# teams containing both i and j); hierarchical clustering (k=4, elbow on WSS); Jaccard similarity J^G(i,j) = |T_i∩T_j|/|T_i∪T_j| between manager squads (100 teams × 10,000 resamples per tier-pair per GW)
- Financial cognizance: OLS of final points on team value at each GW; chip strategy: timing distributions + point returns by tier; tier analysis: disjoint tiers by final rank (top 10³/10⁴/10⁵/10⁶) with per-GW mean-point deltas
## Data sources named
FPL 2018/19: 901,912 managers with full-season data (from ~1M top-ranked; ~50M API calls to fantasy.premierleague.com endpoints: entry/event/picks, bootstrap-static, history); historical ~6M managers in 2019/20, ~3.8M with ≥1 prior season, 13 seasons of pairwise overlap. No code links.
## Findings (numbers and facts, not vibes)
- Season-to-season points correlation 0.42 (2018/19 vs 2017/18, n≈3M); 13-season matrix 0.13–0.47, decaying with gap — persistent skill over a decade
- +1 year of experience = +22.1 points/season (R²=0.082); winner scored 2659
- Top tiers beat lower tiers every GW; largest gaps: GW1 (top-10³ averaged 88.16 vs 63.17 — preparation before a ball is kicked), DGW35, BGW33
- Top tiers' transfer-regret CCDF decays faster (consistently pick nearer-optimal replacements); captaincy points distributions shift right with tier
- Team value: +£1M at GW19 → +21.8 final points (R²=0.169); top-10k team values diverge upward from GW1
- Chips: 79.4% of top-10k played Bench Boost in DGW35 vs 28.9% of the rest; returns 23.2 vs 13.8 points; dominant sequence: Free Hit DGW32 → Wildcard GW34 → Bench Boost DGW35 (long-horizon planning)
- Template team: 3 smallest clusters contain only 5.13% (32/624) of players yet anchor most squads; Jaccard similarity rises with tier and oscillates — consensus forms then dissolves; GW1 already shows high similarity among top managers (shared pre-season information)
- 85.05% used all chips (top-manager-biased sample)
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Template-team detection via co-occurrence clustering = formal DFS chalk measurement (5.13% of players anchor most squads): OTHER (DFS contest intelligence)
- Transfer-regret metric y_G ported to audit GSE's optimizer/waiver swaps (fraction of same-salary-or-cheaper alternatives that outscored the pick, tracked as weekly CCDF): TRUST-SIGNAL (decision-quality KPI)
- Skill-persistence correlations (0.42 season-to-season) to calibrate real edge vs noise before scaling stakes: TRUST-SIGNAL
- GW1 preparation gap (88.16 vs 63.17) — pre-kickoff information work dominates: COACHING (process lesson for GSE's weekly DFS packet prep cadence)
- Long-horizon chip sequencing (DGW32 → GW34 → DGW35) — multi-week planning beats per-week optimization: COACHING (season-long/milestone-game planning analog)
## Engine-actionable? (yes/no + one-line what)
Yes — build a per-slate chalk meter (ownership-weighted co-occurrence clustering → template concentration, published in the weekly DFS packet) with a contrarian tilt trigger on top-quartile concentration slates, and adopt the transfer-regret metric as a weekly decision-quality KPI for the optimizer; gate on ≥10% higher ROI for template-fading vs template-following lineups on top-quartile slates, paired by slate, p<0.05.
