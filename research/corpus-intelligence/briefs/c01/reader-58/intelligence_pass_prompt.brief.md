# research/intelligence-pass-prompt.md
## What it is (1-2 sentences)
A review brief (prompt, not findings) tasking an agent with a six-area intelligence pass over Galaxy Sports Edge: calibration mathematics, DFS optimizer correctness, GSE Score ranking, visual design/motion, copy, and data flow/factor engine — with explicit "what NOT to do" bounds and an insight+recommendation+risk output format per area.
## Key metrics/methods (formulas where given, else "not specified")
- Calibration: floors n>=100, Brier<=0.22, ECE<=0.05 (debiased); selective gate delta=0.1 ranking on marketFairProb; plug-in noise subtraction max(0, raw − noise) for debiased ECE; skill metrics Brier Skill Score, Negative Log Likelihood, Murphy decomposition (REL/RES/UNC), null-band ECE; pushes excluded from win rates; published line snaps to nearest book quote (not consensus mean).
- DFS optimizer: exact DP over (roster-slot fill state) × (salary bucket), provably optimal for its objective; leverage = ceiling / (proj × own); QB stacking via one solver per candidate stacked team; cash mode maximizes projection (median), GPP maximizes ceiling; exposure cap maxExp 1–100% per player via greedy rejection; value = proj / salary × 1000 (points per $1k); LineStar parity targets: Consensus, Cons Diff, AlertScore, SIC Score, Safety, Imp Pts, vs Pos rank, Range (floor-to-ceiling spread).
- GSE Score: 0–100 player ranking; LIVE reads processGrade from nflverse, SAMPLE is pool percentile; expected-metrics module fits own CPOE/RYOE/xYAC via linear regression on play features, validated against NGS.
- Factor engine (founder picks): composes depth chart, injury, matchup split, underlying metrics, consensus, rest; missing data treated as ABSENT (never zero); candidate missing factors: weather, travel, referee tendencies, public money splits.
- Design tokens: near-black #08090C, bone #EDE8E0, ember #FF4D2E; ticker 90s full loop; five nav destinations trimmed to four (Board/Players/Fantasy/GSN).
## Data sources named
nflverse (play-by-play, expected metrics CPOE/RYOE/xYAC, processGrade, next-gen stats ground truth); Statcast season-aggregate CSVs (new loader).
## Findings (numbers and facts, not vibes)
- Calibration state recorded in the brief: market's own price is best-calibrated forecaster (Brier 0.197 vs 0.231 for confidence on 469 rows); CLV beat-close 23% vs 52.4% required — "the ESTABLISHED blocker"; open root-cause question: line timing vs market efficiency vs selection bias.
- Optimizer open questions (design debates, not findings): whether ceiling is the right GPP objective (vs top-percentile of simulated outcomes); whether greedy-rejection exposure control should integrate into the DP; QB-stacking formulation elegance; which LineStar metrics actually improve lineup quality.
- GSE Score open questions: pool percentile vs z-score/percentile-of-position for SAMPLE; linear regression vs gradient-boosted for CPOE/RYOE/xYAC; points-per-$1k as value metric.
- Factor engine candidates not computed: weather, travel, referee tendencies, public money splits.
- This file is a prompt (questions to answer), not a findings document — no new empirical results are contained in it.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB stacking constraint formulation and leverage = ceiling/(proj×own) — QB-BEHAVIOR (QB-WR stacking correlations in DFS).
- GSE-CPOE/GSE-RYOE/GSE-xYAC expected-metrics models validated against NGS ground truth — QB-BEHAVIOR (CPOE) and OL (RYOE run-efficiency over expectation; xYAC receiving).
- Candidate missing factors weather/travel/referee-tendencies/public-money-splits — OTHER (signal families for the adjustment layer).
- No coaching, OL-specific, scheme, or trust-signal content.
## Engine-actionable? (yes/no + one-line what)
Yes — the expected-metrics fitting questions (linear vs gradient-boosted CPOE/RYOE/xYAC), the GPP ceiling-vs-top-percentile objective debate, and the named missing factor families (weather, travel, referee tendencies, public money splits) are concrete engine improvement candidates an implementer could act on.
