# arxiv-program/research/2026-09-21/arxiv-deep/1464-acl-landing-simulation-thesis.md
## What it is (1-2 sentences)
Deep-read ledger for arXiv:2202.13749v1, a 123-page master's thesis running OpenSim/SCONE/Moco musculoskeletal what-if simulations of ACL landing mechanics. Verdict: REJECT — no injury-labeled cohort and no validated prediction of actual injury incidence.
## Key metrics/methods (formulas where given, else "not specified")
not specified (no predictive formulas; simulation-only). Simulation sweeps: landing height 30→55 cm; hip/trunk angle variations; muscle force scaled ±35%; Moco effort-goal weight swept 0→1. Outputs: vGRF, anterior tibial force, knee moments.
## Data sources named
Generic OpenSim musculoskeletal model + literature biomechanics values used to set simulation parameters. No athlete cohort, no injury labels, no recorded injuries.
## Findings (numbers and facts, not vibes)
- Height 30→55 cm: vGRF 1.436→1.797 BW; anterior force 6.300→6.699 (units as reported).
- Moco effort weight 0→1: vGRF 1.967→11.479 BW — a ~6× swing from one free modeling parameter.
- No injury-prediction metrics exist (no ROC/AUC, no epidemiological comparison); thesis assumptions: no femoral-tibial contact model, no ligament/cartilage modeling, no population variation, generic non-athlete-specific geometry.
- Replaced in the same injury lane by ledger 1498 (arXiv:2608.06635v1, RACE athletic ageing).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- REJECT status: [TRUST-SIGNAL] — file is a documented rejection, not an endorsement; do not treat its simulation outputs as evidence.
- Parameter-sensitivity result: [OTHER] — cautionary data point that simulation-based injury claims without injury labels are quantitatively fragile.
## Engine-actionable? (yes/no + one-line what)
No — REJECT; no implementable component transfers to player-availability modeling.
