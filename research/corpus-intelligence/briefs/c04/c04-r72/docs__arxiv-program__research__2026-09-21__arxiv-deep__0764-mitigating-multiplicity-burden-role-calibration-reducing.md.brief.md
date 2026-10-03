# docs__arxiv-program__research__2026-09-21__arxiv-deep__0764-mitigating-multiplicity-burden-role-calibration-reducing
## What it is (1-2 sentences)
Cavus (2026), arXiv:2603.11750v2 — studies predictive multiplicity: multiple classifiers can sit within ε of the best model's AUC (the Rashomon set) yet disagree on individual instances; across 9 credit datasets it finds multiplicity concentrates in low-confidence regions and disproportionately burdens minority classes, and that post-hoc calibration (Platt, isotonic, temperature) reduces per-instance disagreement (obscurity). Ledger verdict: ADAPT — adopt the Rashomon-set + obscurity metric as a stability layer for GSE's published picks.
## Key metrics/methods (formulas where given, else "not specified")
- Model zoo: 20 candidate models per dataset (GBM, random forest, deep nets, GLMs, ensembles) via h2o AutoML, 60/20/20 train/calibration/test split.
- Rashomon set: R(ε) = {f ∈ F : L(f,D) ≤ L(f_best,D) + ε}, ε = 0.05 relative AUC tolerance (robustness checked at nearby ε).
- Multiplicity metrics: ambiguity α_ε(x) = 1{∃f_i,f_j∈R: f_i(x)≠f_j(x)}; discrepancy Δ_ε(R) = max_{f_i,f_j} mean 1{f_i(x)≠f_j(x)}; obscurity γ_ε(x) = (1/(|R|−1))Σ_{f≠f_best} 1{f(x)≠f_best(x)} — primary metric.
- Calibration per Rashomon model on the calibration split: Platt p̂_cal = 1/(1+exp(A·p̂(x)+B)); isotonic: min Σ_i(y_i−g(p̂(x_i)))² s.t. monotone g; temperature: p̂_cal = σ(z(x)/T), T>0. Ranking preserved by construction.
- Statistical tests: Wilcoxon rank-sum, Pearson χ², stratified Dunn post-hoc with Bonferroni correction (N=133,852).
## Data sources named
- Nine public credit-risk datasets: AER_credit_card_data (1,319 obs, 12 vars, imbalance 3.426), bank_marketing (45,211, 17, 7.548), german_credit (1,000, 21, 2.333), give_me_credit (251,503, 11, 13.961), hmeq (5,960, 13, 4.012), loan_data (1,225, 15, 2.792), poland_year3 (10,503, 65, 20.218), poland_year5 (5,910, 65, 13.414), taiwan_credit (30,000, 24, 3.520). No paper code stated; standard UCI/Kaggle credit datasets, h2o AutoML open source.
## Findings (numbers and facts, not vibes)
- Inverse confidence–multiplicity relation: high-confidence regions (>0.90) converge to consensus; low-to-medium confidence spikes in obscurity; bank_marketing and give_me_credit show "tent-like" formations with 50%–80% model disagreement near the decision threshold.
- Class disparity (Wilcoxon): minority obscurity > majority, W=36,894,926, p<.001; majority confidence > minority, W=89,252,968, p<.001; χ²(1, N=10,503)=1885.8, p<.001 for group×ambiguity association.
- Calibration reduces obscurity (grand means): minority mean obscurity ≈0.14 raw → below 0.10 for Platt and isotonic; majority obscurity "nearly eliminated."
- Dunn tests (Bonferroni, N=133,852), obscurity — Majority: Isotonic vs raw Z=−41.1, Platt Z=−41.3, Temperature Z=−36.6 (all p_adj<.001). Minority: Isotonic Z=−4.19, Platt Z=−5.62 (p<.001), Temperature Z=−2.91 (p_adj=.022).
- Confidence effects: majority all significant (Platt Z=−26.6 most refining); minority: only Platt significant (Z=13.0, p<.001); isotonic and temperature not significant on minority confidence (p_adj≈1).
- Majority confidence adjusted down to ≈0.90 after Platt/isotonic; minority confidence marginally boosted.
- The author frames results as "empirical associations... rather than causal effects" and does NOT claim calibration improves accuracy metrics ("outside the scope").
- File's limitations: part of the mechanism is mechanical (calibrated models cluster on the same probability scale); ε=0.05 AUC tolerance arbitrary; label-level disagreement ignores probability-level disagreement (what matters for betting); no time structure (static credit data, unlike sports); paper never reports whether calibrated probabilities are better calibrated (no ECE).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: honest association-not-causal framing; the obscurity metric is a publishable model-health signal — GSE ships single-model picks today with no stability layer; the "contested pick" concept (obscurity > threshold → withhold/down-stake/disclose disagreement) is a trust mechanism for a public card.
- OTHER: new capability for the program — Rashomon-set construction (K near-optimal variants within ε=0.02 log-loss on a rolling window), per-pick obscurity gate, consensus calibration (calibrate each variant, then average); the paper's proposed probability-level extension (stake ∝ 1/(1+k·σ) over calibrated probabilities) converts disagreement into a Kelly-fraction shrink for staking.
## Engine-actionable? (yes/no + one-line what)
Yes — build a Rashomon training harness (8 model variants within ε log-loss), compute per-game obscurity, and gate the public card on it (withhold or down-stake picks with obscurity > 0.3); adopt if the obscurity-gated ensemble card beats the champion-only card by ≥1.5% ROI on the 2024 weeks 9–18 holdout.
