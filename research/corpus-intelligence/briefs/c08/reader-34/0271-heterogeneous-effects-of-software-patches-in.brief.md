# docs/arxiv-program/research/2026-09-21/arxiv-deep/0271-heterogeneous-effects-of-software-patches-in.md
## What it is (1-2 sentences)
Read-note on He et al. (2021, arXiv:2110.14632) using causal trees (Tran & Zheleva 2019 variant) to estimate heterogeneous treatment effects of 62 League of Legends balance patches on 1.2M players / 437k matches — who benefits, who is hurt. Verdict recorded in the file is ADAPT: the causal-tree HTE machinery transfers to NFL rule changes (e.g., 2024 dynamic kickoff), but the champion-composition layer has no NFL analog.

## Key metrics/methods (formulas where given, else "not specified")
- CATE: τ(x_i) = E[Y_i(w_{t+1}) − Y_i(w_t) | X_i = x_i] (patch = treatment, consecutive versions w_t → w_{t+1})
- Causal trees greedily partition features to minimize expected HTE variance (not CART loss); min leaf 5% of samples, max depth 10; per-node treated-minus-control mean difference with t-test; Tran–Zheleva validation set for generalization
- Feature importance: split features weighted by split sample size, summed across all 1,550 trees (25 champions × 62 patches); effect-gap analysis (left-vs-right child HTE difference, significance tested across trees)
- Assumptions: as-if-random treatment assignment (before vs immediately after a patch); SUTVA implicit; approximate normality of leaf means

## Data sources named
- Sapienza et al. 2017 LoL match data, Harvard Dataverse DOI 10.7910/DVN/B0GRWX, mid-2014–end-2016: 1.2M unique players, 437k matches, 62 patches (versions 4.6–6.22), 130+ champions (analysis on top-25 most popular). No code repo stated.

## Findings (numbers and facts, not vibes)
- Patch 4.20 (pre-season): mean kills +0.5 per match; following patches show slightly negative compensating effects; patch 6.9 (mid-season mage update): mean kills +0.4; remaining 60 patches far smaller effects.
- Patch 4.12: Lucian on team → win rate +5%; Lucian + Rengar → −12.6% (p=0.11, n.s.); Lucian + Nami (no Rengar) → +18% (significant); Kassadin team → more likely to lose.
- Patch 6.4: Jhin + Fiora → win rate +23% (significant, despite Fiora's nerf). Patch 4.20: ≥1 fighter with Jinx → +6.4%; no Jinx + >2 marksmen → −15.4%. Patch 6.9: Lucian + Riven, no Brand/Wukong → +17%.
- Lucian–Vayne win rates negatively correlated: r = −0.46, p = 0.0002.
- Player level: rest matters most — timeSinceLastMatch = 0 performs worst; short breaks (<3 min, 26th percentile) outperform all groups including multi-day breaks. Top-10 features in order: timeSinceLastMatch, meanKdaAtStart, meanMatchDurationAtStart, meanDeathsAtStart, meanKillsAtStart, meanWinsAtStart, meanAssistsAtStart, meanGoldspentAtStart, meanGoldearnedAtStart, meanChamplevelAtStart. Only timeSinceLastMatch has a significant positive effect gap at 5%.
- High-skill players benefit MORE from patches than weak players — patches widened the skill gap, contrary to balancing intent (skill effect-gap p-values slightly above 0.05).
- Weaknesses: as-if-random assumption shaky (players self-select champions around patches; Wang et al. 2020); 1,550 trees with no FDR/multiple-testing correction; before/after contrast confounded with time trends (no concurrent control).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- SCHEME: first tree-based HTE/causal-forest-family method in this sweep — transfers to NFL rule-change analysis (2024 dynamic kickoff rule).
- COACHING: rest/fatigue proxy (timeSinceLastMatch) as the dominant heterogeneity driver — adjacent to GSE situational/rest modeling.
- OTHER: skill-gap-widening from interventions — adjacent to GSE luck-layer splits (turnover luck).

## Engine-actionable? (yes/no + one-line what)
Yes — implement Tran–Zheleva causal trees on nflverse pbp 2022–2025 to estimate heterogeneous effects of the 2024 dynamic kickoff rule (treated 2024–25 vs control 2022–23, team-game kickoff-drive EPA), with DiD pre-processing (season + team fixed effects) to fix the paper's before/after confounding; serves offline HTE tables feeding 2025 special-teams priors. Estimated 2–3 days.
