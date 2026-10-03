# ops/MURPHY_RES_AND_BRIER_MIN.md
## What it is (1-2 sentences)
A founder-plain-English explainer of GSE's calibration measurement: Brier score with the Murphy decomposition (UNC/REL/RES), the live values showing near-zero resolution, and the honest path to Brier ≤ 0.22 before PROVEN eligibility.
## Key metrics/methods (formulas where given, else "not specified")
Brier = average of (p − y)² per settled pick (p = probability, y = 1 win / 0 loss), between 0 and 1; 0.25 = coin-flip baseline. Murphy identity: Brier ≈ REL − RES + UNC. Term definitions: UNC = baseRate × (1 − baseRate), want = context only, live ~0.25; REL = bin-average p error vs actual win rate, want low, live ~0.026; RES = bin win-rate spread vs overall average, want high, live ~0.002 (10 equal-width p buckets). Brier floor: ≤ 0.22 before PROVEN is even considered. Back-of-envelope: at UNC ≈ 0.25 and residual REL ≈ 0.02, hitting Brier ≤ 0.22 requires RES ≳ 0.03 — about 15× the live 0.002. Murphy RES one-liner: "When we group picks by confidence, do those groups actually win at different rates?"
## Data sources named
None (method doc; live values are internal engine metrics).
## Findings (numbers and facts, not vibes)
- Live calibration state: Brier RED at 0.275 (per LAUNCH_MAX_PATH companion numbers), REL 0.026, RES 0.002, UNC ~0.25.
- RES 0.002 = almost no ranking power ("the model is not ranking"); required RES ≳ 0.03 to reach the Brier ≤ 0.22 floor.
- Honest minimization order: (1) raise RES — fewer better picks, better ranking score, independent model probabilities, sport models, pause dead markets; (2) lower REL (Platt/temperature/isotonic) only after RES moves — "maps alone cannot unlock PROVEN at RES≈0"; (3) UNC fixed by sample, not tunable with theater.
- Autonomy rules: selective + pause + proven-path plan and metrics cron are automatic; PROVEN publish only on floors + GREEN×K + AUTO_PUBLISH policy, never faked; founder needs no clicks for measurement or filtering.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] RES 0.002 → ~0.03 target is the quantified honesty bar: ranking power must come from real independent-model probabilities and dead-market pausing, not calibration theater; PROVEN never publishes off maps alone.
- [OTHER] Calibration methodology; no QB/coaching/OL/scheme content.
## Engine-actionable? (yes — engine's primary job is raising RES to ~0.03 via better ranking score, independent model probs (Kalshi/FPI/ClubElo/Poisson/Elo), sport models, and dead-market pauses; calibration maps only after RES moves)
