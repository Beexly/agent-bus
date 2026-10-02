# arxiv-program/research/2026-09-21/arxiv-deep/0938-csgo-skill-rating-systems-acquisition.md

## What it is (1-2 sentences)
Paper ledger for arXiv:2410.02831 (Bober-Irizar, Dua, McGuinness 2024) benchmarking Elo, Glicko2, TrueSkill (team and per-player), and WinRate on 9,929 pro CS:GO matches, with matchmaking framed as acquisition functions affecting rating quality. Verdict: ADAPT — per-player TrueSkill across roster moves and information-weighted updates are the two transferable findings.

## Key metrics/methods (formulas where given, else "not specified")
- Emulators: WinRate E[A|B]=(1+w(A)−w(B))/2; Elo E=1/(1+10^{(R_B−R_A)/400}); Glicko2 (μ, φ RD, σ volatility, τ): v=[g(φ′)²E(μ,μ′,φ′)(1−E)]^{−1}, Δ=vg(φ′)(s−E); TrueSkill (μ, σ, β, τ); TrueSkillPlayers (per-player, updated jointly)
- Acquisition functions: AF_draw = −p log p − (1−p) log(1−p) (binary entropy, max at p=0.5); CrossEntropy (surprisal vs seen matchups); Weighted (9) = α·draw_factor + β·seen_factor, α=β=1; LeastSeen; TSQuality
- Simulator: 100 runs per emulator×AF; train on AF's top pick of 25 drawn matches; accuracy on non-draw test matches; TrueSkill sensitivity via log grid search ±1 order of magnitude, GP-smoothed

## Data sources named
- 9,929 professional/semi-professional CS:GO matches, hltv.org, ≥1-star team rating, 2017–2022; random 50/50 train/test
- skillbench library: github.com/mgm52/skillbench (emulators + acquisition functions + simulator)

## Findings (numbers and facts, not vibes)
- Accuracy at 500/1000/2000 training matches — 500: Glicko2 60.1→61.2 (best team-based), TSPlayers 59.6→62.1 (best overall); 2000: Glicko2 62.6→63.1, TSPlayers 61.8→64.1 (best achieved); averages 59.4→60.4 / 60.9→62.0 / 62.2→62.8
- Weighted AF best for every emulator; LikeliestDraw/CrossEntropy +1–1.5% over random; MostSeen and LikeliestWin worse than random; TSQuality (fun matchmaking) worse than random (56.5–62.9%)
- TrueSkill sensitivity: β and σ dominate, τ minor; optimal β=σ/0.5 and β=σ/1.6 vs default β=σ/2; per-player emulator robust (1.3% range vs 7.5% for per-team); defaults near-optimal — tuning gains small, mistuning costs large
- Weighted-AF accuracy declines late in training (informative matches consumed early; uninformative leftovers skew ratings)
- Leakage: random non-temporal 50/50 split; accuracy-only eval (no log loss), draws excluded; single pro dataset

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Player-persistent TrueSkill for QBs/key starters (OpenSkill): rating travels with the player across trades/injuries; team strength = aggregate of current-roster ratings — QB-BEHAVIOR
- Information-weighted updates: scale each game's K by matchup informativeness (close games update more; novelty term for new QBs/coaches) — direct port of AF_weighted — OTHER
- skillbench-style bake-off harness (emulator interface + matchup selector + simulator) for all future GSE rating ideas — OTHER
- Week-18 rest-game down-weighting experiment (NFL analog of the late-training accuracy decline) — SCHEME

## Engine-actionable? (yes/no + one-line what)
yes — implement per-player QB TrueSkill (OpenSkill) aggregated to team level + information-weighted K; gate: ≥0.003 walk-forward log-loss improvement over GSE team Elo on 2020–2025.
