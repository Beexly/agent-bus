# arxiv-program/research/2026-09-21/arxiv-deep/0700-dual-threshold-conformal-abstention.brief.md
## What it is (1-2 sentences)
Kumar et al. (2025) propose dual-threshold conformal prediction for autonomous perception: one threshold guarantees coverage-valid prediction sets (P(y_true ∈ Ĉ) ≥ 1−α), a second ROC-optimized threshold governs adaptive abstention — with abstention rates scaling 13.5% → 63.4% as input perturbations worsen.
## Key metrics/methods (formulas where given, else "not specified")
- Nonconformity: s_i = −log p_i(y_i) (Eq. 2); conformal threshold q̂_conf = Quantile({s_i}, (n+1)(1−α)/n) (Eq. 3); prediction sets Ĉ(X) = {y : −log p(y) ≤ q̂_conf} with coverage ≥ 1−α (Eq. 4).
- Abstention threshold: q̂_abs = argmax_τ {TPR(τ) − FPR(τ)} — Youden's J on calibration set (Eq. 5); abstain iff −log p(y) > q̂_abs (Eq. 7).
- Diagnostics: normalized entropy H_norm (Eq. 8), set size (Eq. 9), margin M(X) = p(y_(1)) − p(y_(2)) (Eq. 11), ROC/AUC for should-abstain detection.
## Data sources named
CIFAR-100, ImageNet1K (camera), ModelNet40 (LiDAR); 4 synthetic perturbations (rain, fog, snow, motion blur) × 5 severities; evaluation at fixed coverage α=0.9. Code: github.com/divake/Conformal_Prediction_based_Sensor_Trustworthiness_Detection.
## Findings (numbers and facts, not vibes)
- ImageNet1K rain: abstain-detection AUC 0.993 → 0.995 (moderate→heavy); fog 0.9704 → 0.9865; beats STARNet (rain moderate 0.922, heavy 0.975) and likelihood methods.
- Coverage stays near target: ImageNet1K fog 90.0% → 91.1%; ModelNet40 >84.5% under heavy perturbations; CIFAR-100 motion blur degrades 92.3% → 77.2%.
- Abstention scales adaptively with severity: 13.5% → 63.4% ± 0.5 overall; CIFAR-100 motion blur 27% → 58%; ImageNet1K rain peaks 63.4%.
- Heavy-perturbation detection AUC: 0.995 ± 0.001.
- Caveats: "should_abstain" labels derive from the authors' own severity protocol (mildly circular); conformal coverage is marginal, not conditional; authors disclosed LLM text-polishing.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: replaces ad-hoc confidence cutoffs with a distribution-free coverage guarantee + Youden-J-optimal publish/abstain threshold — a principled gating protocol for pick publishing.
- OTHER: regime-conditional thresholds (divisional, weather, short-week) as an attack on the marginal-vs-conditional coverage gap.
## Engine-actionable? (yes/no + one-line what)
yes — Post-hoc on GSE's outcome classifier: set q̂_conf for 90% coverage sets over {cover, no-cover} and q̂_abs via Youden's J on a calibration season (should_abstain = games the model got wrong); publish only when −log p(ŷ) ≤ q̂_abs; adopt if it beats a fixed 70%-confidence cutoff on published ROI ≥1pp.
