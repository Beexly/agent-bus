# docs/arxiv-program/research/2026-09-21/arxiv-deep/1693-linear-acceleration-concussion-risk.md
## What it is (1-2 sentences)
Deep read of Towns et al. (2025), arXiv:2507.09098 — using instrumented mouthguards with direct measurements during diagnosed human concussions, the paper refutes the rotational-acceleration dogma: peak LINEAR acceleration is the primary concussion predictor, with concrete logistic injury risk functions (50% risk at 100 g).
## Key metrics/methods (formulas where given, else "not specified")
- Logistic injury risk functions: P(concussion) = logit⁻¹(β0 + β1·a [+ β2·ω or β2·α]); 50% risk thresholds solved from fitted curves.
- 12 logistic classifiers screened by deviance (G²), BIC, LASSO, dominance analysis → retained 5 (a+ω, a+α, a, α, ω); 80/20 train/test split.
- Kinematics: peak linear acceleration (a), peak rotational acceleration (α), peak rotational velocity (ω), head impact power (HIP), MPS95 strain via finite-element DAMAGE model; brain natural period Δtn ≈ 40 ms (~25 Hz).
- Metrics: AUPRC + F1 on held-out set; 95% CIs; separate youth-concussion recall check (n=4); odds ratios (Wald tests).
## Data sources named
Stanford-led multi-sport instrumented-mouthguard program (MiG2.0): 3,805 non-concussive + 47 concussive impacts across 203 athletes (American football, Australian football, rugby union, gymnastics, ice hockey, MMA, lacrosse); 40 athletes concussed. Data available from corresponding author on request only (NOT public). Virginia Tech Varsity Football Helmet STAR protocol for the helmet test (3.1, 4.9, 6.4 m/s; front/back/side).
## Findings (numbers and facts, not vibes)
- Held-out AUPRC: a = 0.65 [0.27, 0.90]; a+ω = 0.64 [0.29, 0.90]; a+α = 0.60 [0.24, 0.90]; α = 0.36 [0.12, 0.67]; ω = 0.35 [0.07, 0.67]; random classifier = 0.01.
- F1: a = 0.50; a+α = 0.55; a+ω = 0.40; α = 0.31; ω = 0.30. Precision/recall: a = 0.80/0.38; a+ω = 1.00/0.25; a+α = 0.50/0.63.
- 50% risk thresholds (200 Hz filtered): a = 100 g; α = 8.3 krad/s²; ω = 40 rad/s. Decision thresholds: a 78.7 g; α 5874.2 rad/s²; ω 29 rad/s.
- Odds ratios (a+α model): OR_a = 2.3 [1.5–3.6] (significant), OR_α = 1.3 [0.81–1.9] (ns); (a+ω): OR_a = 2.1, OR_ω = 2.2 (both significant, no difference).
- Importance: LASSO β: a 0.91 > ω 0.842 > α 0.380; dominance R²: a 0.108, ω 0.065, α 0.061.
- Concussive MPS95: upper gray matter 0.36±0.21, cortical white matter 0.30±0.12, basal ganglia 0.28±0.10, corpus callosum 0.48±0.14 vs non-concussive 0.04–0.09 (p<0.0001).
- Youth recall = 0 for all models (all four youth concussions missed — magnitudes much lower).
- Helmet finding: liquid pads reduced mean predicted risk 1.6%→0.8% (3.1 m/s), 26.7%→13.4% (4.9 m/s), 73.3%→55.7% (6.4 m/s) — BUT authors Camarillo and Cecchi are inventors with financial interest in the liquid shock-absorbing tech (Stanford/SoftShox); file verdict says REJECT this claim for GSE purposes.
- Limitations: only 47 concussive impacts (wide CIs); cumulative subconcussive exposure not modeled; multi-sport pooling; selection bias acknowledged.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Linear-acceleration risk-function methodology ports to NFL mouthguard data for per-play concussion probability: OTHER — injury-lane new capability (availability-risk adjustments, protocol-return modeling).
- Conflict-of-interest discount on the helmet-tech claim: TRUST-SIGNAL — provenance flag for any concussion-prevention content.
- Position-specific risk functions and cumulative-load augmentation (season-cumulative HIP) proposed as the open experiment: OTHER — injury model improvement path.
## Engine-actionable? (yes/no + one-line what)
Yes — replicate the screening pipeline (univariate/bivariate logistic risk functions on a/α/ω, BIC+LASSO selection, temporal 80/20 holdout, AUPRC/F1) on NFL mouthguard/helmet-sensor data to derive NFL-specific 50% risk thresholds for a per-play concussion-probability model feeding availability-risk adjustments; gate = linear acceleration in top-2 by AUPRC with 50% threshold 60–140 g; REJECT the conflicted helmet-tech claim.
