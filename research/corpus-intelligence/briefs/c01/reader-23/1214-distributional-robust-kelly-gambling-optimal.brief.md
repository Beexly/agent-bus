# arxiv-program/research/2026-09-21/arxiv-deep/1214-distributional-robust-kelly-gambling-optimal.md
## What it is (1-2 sentences)
Deep-research ledger on Sun & Boyd (2018) arXiv:1812.10371, "Distributional Robust Kelly Gambling": it formulates Kelly betting as maximizing worst-case expected log growth over an uncertainty set of outcome distributions, solved as a disciplined convex program for six set types. Verdict: ADAPT — as GSE's sizing layer under calibration error, with uncertainty sets built from GSE's own calibration residuals.
## Key metrics/methods (formulas where given, else "not specified")
- Robust objective: maximize_{b ∈ B} inf_{π ∈ Π} E_π[log(rᵀb)], where b = allocation vector, r = return vector, Π = uncertainty set.
- Set types handled (all DCP-tractable): polyhedral, box, ellipsoidal, f-divergence balls, Wasserstein balls, mean/covariance-estimated sets.
- Paper's horse-race example numbers: nominal Kelly growth under nominal distribution = 4.3%; nominal growth of robust strategies = 2.2%; worst-case growth of nominal Kelly = −2.2%; worst-case growth of robust Kelly = 0.7% (box set, η = 0.26) and 0.4% (ball set, c = 0.016). Interpretation (INFERENCE): robustness costs ~half nominal growth but converts −2.2% worst case into positive.
- GSE spec: implement maximize_{b} inf_{π∈Π} E_π[log(1 + bᵀr)] in convex programming with the existing fractional cap (≤ 0.25 default); "robustness dial" (set radius) in staking config; log nominal vs robust stake for every pick.
- Acceptance gate: ADOPT robust sizing if it improves worst-decile-of-weeks realized growth by ≥ 20% relative to baseline while keeping total realized log growth ≥ 0.9× baseline.
## Data sources named
Illustrative synthetic horse-race example only (nominal win probabilities, pari-mutuel-style returns) — no real dataset. CVXPY for implementation; no code repository stated in paper.
## Findings (numbers and facts, not vibes)
- Robust Kelly converts a −2.2% worst-case nominal growth into +0.7% (box set η=0.26) / +0.4% (ball set c=0.016) at a cost of ~half nominal growth (4.3% → 2.2%).
- Guarantee collapses if the true distribution lies outside Π; radii in the paper are illustration-only with no data-driven selection rule.
- Fills a confirmed gap in GSE: "Kelly criterion / optimal bet sizing under uncertainty" and "estimation error" have zero deep reads per existing-research-map.md; GSE's kelly-investigation.ts takes point win probabilities with no uncertainty machinery.
- Improvement experiment proposed: adaptive Π that shrinks with GSE's live calibration-in-the-small diagnostics (recent reliability by probability bin).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: staking/sizing layer — Kelly robustness under probability miscalibration. No QB/coaching/OL/scheme/trust-signal content.
## Engine-actionable? (yes/no + one-line what)
yes — implement robust-Kelly convex sizer in the staking module with Π parameterized by calibration residuals, gated on the worst-decile-of-weeks ≥20% improvement acceptance test.
