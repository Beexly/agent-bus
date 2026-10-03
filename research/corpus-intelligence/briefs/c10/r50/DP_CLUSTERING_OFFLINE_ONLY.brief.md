# docs/ops/DP_CLUSTERING_OFFLINE_ONLY.md
## What it is (1-2 sentences)
A six-line policy note stating that Dirichlet-process clustering (DP-GMM, HDP, CRF, PYP, stick-breaking, CRP) is restricted to offline EDA only, and is not proven in production calibration.
## Key metrics/methods (formulas where given, else "not specified")
not specified. Production calibration maps listed as: global Platt, Temp, isotonic, hierarchical EB-τ intercepts. "PROVEN" path named: Murphy RES via ranking + selective publish — explicitly "not DP/HDP/PYP."
## Data sources named
None. References full policy in `BAYES_NONPARAMETRIC_OFFLINE_ONLY.md`.
## Findings (numbers and facts, not vibes)
- Dirichlet-process family methods (DP-GMM, HDP, CRF, PYP, stick-breaking, CRP) are classified as research/EDA only, per the cited full policy.
- Production calibration uses only global Platt/Temp/isotonic/hierarchical EB-τ intercepts.
- The only calibration approach labeled PROVEN in this file is Murphy RES via ranking + selective publish.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Murphy RES via ranking + selective publish as the proven calibration path → TRUST-SIGNAL
- DP/HDP/PYP classified unproven/offline-only for calibration → TRUST-SIGNAL
- Production map set (Platt/Temp/isotonic/hierarchical EB-τ) → TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
Yes — adopt as calibration policy: ranking + selective publish over Murphy RES is the proven lane; do not ship DP/HDP/PYP-based clustering into production calibration.
