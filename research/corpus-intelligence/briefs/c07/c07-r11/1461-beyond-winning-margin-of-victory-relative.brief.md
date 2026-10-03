# arxiv-program/research/2026-09-21/arxiv-deep/1461-beyond-winning-margin-of-victory-relative.md
## What it is (1-2 sentences)
A stat.AP paper (Shorewala & Yang, 2025) proposing MOVDA, an Elo-style rating update that adds a margin-surprise term — actual minus expected margin, with expected margin a learned tanh function of the rating gap — on top of the standard outcome-surprise update; it beats Elo, Glicko-2, and TrueSkill on 13,619 NBA games. Ledger verdict: ADAPT the method, DISTRUST the paper's numbers (internal table inconsistencies, arithmetic errors, 34 unexplained teams).
## Key metrics/methods (formulas where given, else "not specified")
- Expected margin: E_MOV = α·tanh(β·ΔR) + γ + δ·I_HA (ΔR = rating gap, I_HA = home indicator).
- Surprise margin: ΔMOV = TMOV − E_MOV.
- Rating update: R'_A = R_A + K·(S_A − E_A) + λ·ΔMOV (zero-sum; paper prints the B update inconsistently).
- Baselines: standard Elo, linear MOV Elo, Glicko-2, TrueSkill.
## Data sources named
- 13,619 NBA regular-season games, 2013–2023, Kaggle "Wyatt Owalsh Basketball" dataset (name as given). Code: "available upon request."
## Findings (numbers and facts, not vibes)
- Main comparison table (20% test split): Standard Elo 62.77 / 0.2274 / 193 convergence games; Linear MOV Elo 63.18 / 0.2282 / 199; Glicko-2 63.18 / 0.2264 / 189; TrueSkill 62.66 / 0.2294 / 192; MOVDA 63.32 / 0.2258 / 166 (accuracy / Brier / convergence).
- Ablation table reports MOVDA as 63.24 / 0.2259 / 166 — inconsistent with the main table.
- Abstract claims "1.54% lower Brier, 0.58 pp higher accuracy vs TrueSkill"; own arithmetic from the paper's table gives 1.57% and 0.66 pp — the claims do not reproduce.
- "34 teams present throughout test" vs 30 actual NBA teams — unexplained (INFERENCE: likely a data-cleaning artifact).
- Tuning criterion for (α, β, γ, δ, K, λ) unstated; convergence metric threshold unspecified.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (team-strength rating: margin-surprise update for the NFL strength layer — implement from equations, never cite the reported numbers)
- OTHER (integrity method: strict chronological reimplementation, pre-registered tuning criterion, pre-defined convergence metric)
- OTHER (improvement: replace ad-hoc tanh with market-implied expected margin from closing line — removes rating/margin circularity, connects to CLV lane)
## Engine-actionable? (yes/no + one-line what)
yes — implement MOVDA from scratch on nflverse 2006–2025 (fit ≤2019, tune 2020–2021, test 2022–2025); adopt into team-strength layer only if it beats plain Elo by ≥0.3 pp accuracy AND ≥0.002 Brier on hold-out.
