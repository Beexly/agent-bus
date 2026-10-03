# arxiv-program/research/2026-09-21/arxiv-deep/1461-beyond-winning-margin-of-victory-relative.md
([1461] Beyond Winning: Margin of Victory Relative to Expectation Unlocks Accurate Skill Ratings — arXiv:2506.00348, Shorewala & Yang 2025)

## What it is (1-2 sentences)
Proposes MOVDA (Margin of Victory Differential Analysis), an Elo-style sequential rating update whose step is scaled by the *surprise* of the actual margin versus a learned expected-margin function of the rating gap, not just the win/loss surprise. Ledger verdict: ADAPT the method (independent chronological reimplementation for GSE's NFL team-strength layer); distrust the paper's reported numbers — the paper fails to reproduce its own headline figures.

## Key metrics/methods (formulas where given, else "not specified")
- Elo expectation: E_A from standard logistic of rating gap.
- Expected margin: **E_MOV = α·tanh(β·ΔR) + γ + δ·I_HA**, where ΔR = rating difference, I_HA = home-advantage indicator; parameters (α, β, γ, δ) fit on the training split.
- Surprise margin: **ΔMOV = TMOV − E_MOV** (TMOV = actual margin of victory).
- Rating update: **R'_A = R_A + K·(S_A − E_A) + λ·ΔMOV**; **R'_B = R_B − K·(S_A − E_A) − λ·ΔMOV** (zero-sum; paper prints B update inconsistently — symmetric reading is the reader's inference).
- Hyperparameters tuned: (α, β, γ, δ, K, λ); tuning criterion unstated.
- Evaluation metrics: out-of-sample win/loss accuracy, Brier score, "convergence games" (criterion not fully specified).
- Baselines: standard Elo, linear MOV Elo, Glicko-2, TrueSkill.
- GSE-specified gate (from ledger §12): beat plain Elo by ≥0.3 pp accuracy AND ≥0.002 Brier on 2022–2025 NFL hold-out; reject if tanh parameter CV > 25% across refits or it underperforms linear-MOV Elo.
- Improvement experiment: replace rating-fitted E_MOV with spread-implied expected margin (closing line) → ΔMOV becomes "surprise vs the market", linking directly to the CLV lane.

## Data sources named
- 13,619 NBA regular-season games, 2013–2023, from the Kaggle "Wyatt Owalsh Basketball" dataset (name as given in paper). Per-game schema: home/away team IDs, actual margin TMOV, home-court indicator. All ratings initialized at 1500.
- Split: 70% chronological training (hyperparameter tuning), 20% testing (comparison table), 10% hold-out.
- Code "available upon request" only.

## Findings (numbers and facts, not vibes)
Main comparison table (paper's labels, 20% test split):
- Standard Elo: accuracy **62.77**, Brier **0.2274**, convergence **193** games.
- Linear MOV Elo: accuracy **63.18**, Brier **0.2282**, convergence **199**.
- Glicko-2: accuracy **63.18**, Brier **0.2264**, convergence **189**.
- TrueSkill: accuracy **62.66**, Brier **0.2294**, convergence **192**.
- MOVDA: accuracy **63.32**, Brier **0.2258**, convergence **166**.
Internal inconsistency: the paper's own ablation table reports MOVDA as **63.24 / 0.2259 / 166** — disagreeing with the main table (63.32 / 0.2258).
Abstract/conclusion claims "1.54% lower Brier, 0.58 pp higher accuracy, 13.5% quicker convergence versus TrueSkill" — the ledger's arithmetic check: (0.2294−0.2258)/0.2294 = **1.57%** (not 1.54%); 63.32−62.66 = **0.66 pp** (not 0.58); (192−166)/192 = **13.5%** (matches). Two of three claims do not reproduce from the paper's own table.
Suspicious detail: "34 teams present throughout test" — the NBA had 30 teams over 2013–2023; the extra 4 are unexplained (ledger inference: likely a data-cleaning artifact, unaddressed).
Several references appear malformed or topically unrelated on inspection — treat the literature review as unreliable.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **OTHER — Team-strength layer / calibration program:** The margin-surprise update is a genuinely new extension over GSE's existing catalog (plain Elo, Glicko, TrueSkill, Bradley-Terry, Massey/Sagarin/Colley, benbbaldwin objective ratings v2, nfelo — all inventoried; no margin-residual variant exists). If it reproduces on NFL data it feeds the spread/total model as a weekly batch feature; the convergence-speed claim (166 vs 193 games) matters because faster-converging ratings react sooner to regime changes (coaching changes, QB injuries) — serving the calibration/tracking lanes, not the QB-behavioral or trust-target programs.
- **COACHING (indirect):** A margin-residual rating implicitly credits/blames coaches for over/under-performance vs expectation; the ledger's improvement experiment (spread-implied E_MOV) would isolate "surprise vs market", which is the cleanest team-strength signal for coaching-tendency adjustments — but this is an INFERENCE, not a paper finding.
- **TRUST-SIGNAL — CONTRADICTION / UNCERTAIN:** The paper cannot reproduce its own headline numbers across its own tables and its percentage claims fail basic arithmetic; per the integrity rule, nothing in the paper clears the bar as a trust-worthy finding. It is a *method worth stealing and a paper worth distrusting*.

## Engine-actionable? (yes/no + one-line what)
**Yes** — reimplement MOVDA from the equations on nflverse 2006–2025 with pre-registered tuning/test windows and the §12 acceptance gate; optionally test the spread-implied-E_MOV variant against the CLV lane.
