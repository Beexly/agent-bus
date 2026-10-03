# docs/arxiv-program/research/2026-09-21/arxiv-deep/0426-camp-a-contextaware-cricket-players-performance.md
## What it is (1-2 sentences)
A context-aware cricket performance metric (CAMP) that decomposes each over into actual-minus-expected runs from a state-dependent expected-remaining-runs model, aggregates batter and bowler contributions, and validates against Man-of-the-Match (MoM) awards. Verdict in the file: REJECT — the wicket penalty and batting/bowling weights were tuned to maximize MoM agreement on the same 961-match corpus they are evaluated on (textbook data snooping).

## Key metrics/methods (formulas where given, else "not specified")
- Expected remaining runs in state S_i: R(S_i) = P(S_i) − T(S_i), P = projected total, T = Duckworth-Lewis-style target/resource adjustment.
- Expected runs in over i: e_i = R(S_i) − R(S_{i+1}); wicket-adjusted e'_i = (1−w)·e_i if a wicket fell in the over, else e_i, with w tuned to 1.
- Actual over value: r_i = A(S_i) − A(S_{i+1}) from realized scores.
- Batter contribution: c_i^p = r_i^p − (e'_i/6)·b_p (b_p = balls faced). Bowler contribution: ĉ_i^p = e'_i − r_i.
- Final score: CAMP_score = w_bat·C_bat(p) + w_bowl·C_bowl(p), with w_bat = 1, w_bowl = 0.2 — both tuned to maximize MoM agreement on the evaluation corpus.
- Player representations: team 72-d (k=3 clusters), batter 132-d (k=4 clusters + dummy fifth), bowler 156-d (k=4 clusters + dummy fifth).

## Data sources named
- ESPNcricinfo ball-by-ball ODI data, 2001–2019: 1,625 matches originally; 1,110 after preprocessing; evaluation on 961 matches. 1,002 batters, 802 bowlers.
- Preprocessing: matches involving Bangladesh/Zimbabwe removed; matches with total scores beyond ±2 SD filtered out.
- Public code/data: https://github.com/sohaibayub/CAMP.

## Findings (numbers and facts, not vibes)
- Table 9, MoM agreement among the winning team's 11 — Rank 1: CAMP 638/961 (66.3%) vs LNC 585/961 (60.8%); Top 2: CAMP 799/961 (83.1%) vs LNC 784/961 (81.5%); Top 3: CAMP 867/961 (90.2%) vs LNC 864/961 (89.9%). — TRUST-SIGNAL (headline edge, but measured on the tuning corpus)
- Table 9, MoM agreement among all 22 players — Rank 1: CAMP 458/961 (47.6%) vs LNC 461/961 (47.9%); Top 2: CAMP 686/961 (71.3%) vs LNC 650/961 (67.6%); Top 3: CAMP 789/961 (82.1%) vs LNC 773/961 (80.4%). — TRUST-SIGNAL (no rank-1 edge where it matters most)
- Tuned constants: w = 1 (a wicket zeroes the over's expectation — an extreme constant with no cricket justification offered); w_bat = 1, w_bowl = 0.2 (tuned on the evaluation set). — OTHER
- No train/test split in the ML sense; no temporal validation of any kind. — TRUST-SIGNAL
- INFERENCE: the rank-1 edge (+53 matches, +5.5 pp among winning eleven) is the paper's headline but is in-sample; the all-22 rank-1 numbers showing no edge are the fairer read.
- MoM as ground truth is narrative-driven (voters reward match-winning moments, exactly what a context metric also rewards — shared bias inflates agreement). — TRUST-SIGNAL

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: core lesson is a negative one for the corpus — any metric whose parameters are tuned on its evaluation metric on the same corpus cannot be adopted regardless of headline numbers; the decomposition concept (expected vs actual state value per play, credited to participants) is the salvageable idea, better rebuilt NFL-natively via snap-APM (ledger 0421) with no award-agreement tuning and out-of-sample validation.
- OTHER: cricket overs are discrete, symmetric, fully observed — a cleaner setting than football; the paper's validation teaches nothing transferable, though the expected-state-value decomposition form is familiar (EPA-like).

## Engine-actionable? (yes/no + one-line what)
no — Do not implement CAMP; any per-player context decomposition should be built NFL-natively (per-play expected points vs actual EPA credited via snap-APM, gated by held-out NFL data), and CAMP contributes no additional machinery worth porting.
