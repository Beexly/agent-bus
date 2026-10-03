# docs/arxiv-program/research/2026-09-21/arxiv-deep/1700-park-factor-pairwise-comparison.md
## What it is (1-2 sentences)
Konaka (arXiv:2109.09287, 2021): estimates pure MLB ballpark effects via a pairwise logistic model decomposing each plate appearance into batter-team strength, pitcher-team strength, and park effect; shows ESPN's conventional park factor is confounded and degrades prediction for singles/walks. Verdict in ledger: ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- Conventional PF: PF_a^HR = [(HS_home+HA_home)/Games_home] / [(HS_road+HA_road)/Games_road]; 1.0 = neutral.
- Proposed: p_{i,j,k} = 1/(1+exp(−(b_i − d_j − r_k))); fit by steepest descent on squared error J = Σ(p−x_l)²; reported in ESPN units via PF̄_k = σ(E(b)−E(d)−r_k)/σ(E(b)−E(d)−E(r)).
- Evaluation: log-loss (base 2): L = E(−x_l log₂ p_l − (1−x_l) log₂(1−p_l)), improvement vs constant-probability baseline.
## Data sources named
- 1,550,000 MLB plate appearances, 2010–2017 seasons, scraped from Baseball Reference; per-PA: batting team, pitching team, ballpark; binary outcomes for HR/1B/2B/3B/BB.
## Findings (numbers and facts, not vibes)
- 2017 HR: conventional Coors PF = 1.195 → P(HR) = 1.195 × 0.03193 = 0.03816; proposed–conventional HR PF correlation = 0.81.
- Conventional PF improves log-loss for long hits (2B/3B/HR) but degrades it for singles and walks — home/road ratio misspecified there.
- Proposed beats conventional for HR, 3B, H; tied on 2B; park effect on singles/walks found negligible.
- Context: Rockies' claim — a 400-ft sea-level HR → 408 ft Atlanta → 440 ft Denver (1,609 m altitude); bases/PA vs runs/game R² = 0.8522.
- Limitations: in-sample only (no held-out); steepest descent on squared error despite log-loss evaluation; static within-season team strengths; no identifiability constraints stated; baseball-specific event set.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Direct recipe for NFL stadium factors (Denver altitude, domes, wind bowls) as features for totals/spread engine: OTHER (venue/weather modeling) — fills GSE's open "no verified travel/altitude coefficient" gap.
- The singles/walks sanity check (neutral events should come out ≈ 0) is a structural-validity pattern reusable for any factor estimation: TRUST-SIGNAL.
## Engine-actionable? (yes/no + one-line what)
yes — build weather/stadium_factors.py: penalized-MLE pairwise logistic (offense o_i − defense d_j − stadium s_k) on nflverse drive data for TD/FG/explosive/punt events with sum-to-zero constraints, feeding s_k into the totals/spread engine; adopt if ≥ 0.003 log-loss beat over baselines on 2025 holdout with neutral-event factors ≈ 0.
