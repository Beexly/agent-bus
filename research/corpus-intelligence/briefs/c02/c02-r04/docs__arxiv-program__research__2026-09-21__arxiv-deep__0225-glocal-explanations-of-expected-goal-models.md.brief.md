# docs/arxiv-program/research/2026-09-21/arxiv-deep/0225-glocal-explanations-of-expected-goal-models.md

## What it is (1-2 sentences)
Methodology paper formalizing "glocal" XAI — explanations for groups of observations, between local and global — with two tools: aggregated SHAP (aSHAP, sums per-observation SHAP via additivity) and aggregated ceteris-paribus profiles (AP, averaged per-group profiles). Illustrated on a pre-trained soccer xG model: young-player scoring potential, goalkeeper blind spots, and team season-over-season performance decomposition.

## Key metrics/methods (formulas where given, else "not specified")
- Glocal: e_GL[f(X), M] = e_GL(f, {(x_i,y_i)}_{i=1}^m) for a group M of m < n observations
- Aggregated SHAP: f_A(X) = φ_0 + Σ_{i=1}^n Σ_{j=1}^p φ_{ji} (exploits SHAP additivity/local accuracy)
- Aggregated profile: g^j_AP(z) = E_{X^{-j}}[f(X^{-j|=z})], estimated ĝ^j_AP(z) = (1/k) Σ_{i=1}^k f(x^{ij|z}); differs from PDP by aggregating a group's profiles, not the whole dataset's
- xG variants: xG = Σ_i ŷ_i; xGOT = Σ_i y_i z_i; xGAOT (expected goals against on-target) = Σ_l y_l z_l, z_i ∈ {0,1} on-target indicator
- Implemented in the shapviz package of the DALEX XAI ecosystem

## Data sources named
- Pre-trained xG model (Cavus & Biecek 2022) on Understat event data: 315,430 shots, 12,655 matches, Bundesliga/EPL/La Liga/Ligue 1/Serie A, 2014-15 through 2020-21
- Application subsets: most valuable U18 players 2022/23 (Transfermarkt); three U30 goalkeepers playing all league matches; SSC Napoli 2021/22 vs 2022/23; Lille OSC 2020/21 vs 2021/22
- Code: github.com/adrianstando/glocal-explanations-of-xG-models

## Findings (numbers and facts, not vibes)
- No predictive benchmarking — methodology + illustration paper on a fixed pre-trained model; "validation" is plausibility of the worked applications [OTHER]
- U18 scoring-potential AP: Moukoko (35 shots/7 goals), Garnacho (24/3), Tel (20/5), Bynoe-Gittens (24/3), Ferguson (36/6); Tel slightly best overall; Bynoe-Gittens and Garnacho not competitive [OTHER]
- Goalkeeper blind spots (xGAOT): Schwabe (54 conceded) better than Remiro (69) and Raya (46) in all situations except Set Piece and all shot types except Head; no significant home/away differences [COACHING]
- Napoli season change: distanceToGoal and angleToGoal contributions negative in 2021/22, positive in 2022/23 (championship season) [COACHING]
- Lille OSC: xG per shot 0.267 in title season 2020/21 vs 0.295 in the worse 2021/22 season; lastAction contributed −0.0041 (largest negative effect) in the worse season — i.e., shot quality rose while conversion/results fell [COACHING]
- Stated limitation: aSHAP has heavy computational steps [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- COACHING — decomposing a team/season efficiency change into per-feature contributions (Napoli shot-quality story, Lille title-season story) is the template for coaching/unit evaluation narratives: "why did this team's EPA/play change"
- TRUST-SIGNAL — stable aSHAP decompositions make a team's efficiency claims attributable and auditable rather than hand-wavy, supporting public-facing pick rationales
- OTHER — the xG domain itself is soccer; no NFL-specific findings

## Engine-actionable? (yes/no + one-line what)
yes — apply glocal XAI to GSE's NFL EPA model: per-play SHAP aggregated by team-season to decompose EPA/play swings into per-feature drivers (down/distance mix vs play design), with per-4-game rolling windows as a leading-indicator test
