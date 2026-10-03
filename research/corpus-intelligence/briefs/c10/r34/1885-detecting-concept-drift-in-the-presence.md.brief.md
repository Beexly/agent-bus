# arxiv-program/research/2026-09-21/arxiv-deep/1885-detecting-concept-drift-in-the-presence.md
## What it is (1-2 sentences)
An empirical study answering "which drift detector, on messy real data": no single drift detector wins across metrics, so it prescribes majority-vote ensembles (abrupt: ADWIN+HDDM-A+KSWIN; gradual: HDDM-A+HDDM-W+Page-Hinkley), sparsity-aware imputation recipes, and two new evaluation metrics (TPD, drift count) that fix misleading prequential-error/TPR scoring; deployed at Walmart with a claimed 33% reduction in major incidents.
## Key metrics/methods (formulas where given, else "not specified")
- Majority-vote ensemble: drift declared if ≥2 of 3 detectors fire within a tuned window (optimal 2000 instances Harvard / 1000 change-risk).
- New metrics: TPD = detected-true / actual drifts (optimal 1; fixes TPR inflation from multiple detections inside one ADI); Drift Count = total actual drifts detected; ADI = 4× drift width; ADD = mean instances between true and detected drift; prequential error e_i = (1/i)Σ_k L(y_k, ŷ_k) shown misleading (a constantly-firing bad detector lowers prequential error via constant retraining).
- Imputation recipe: runs-test on missingness indicator to separate MAR/MNAR, Q-Q distribution fit, mask-complete-rows RMSE bake-off; kNN variants dominate (kNN50 for <30% sparsity, kNN100 above on multivariate normal).
## Data sources named
Harvard dataverse synthetic abrupt/gradual drift sets; proprietary Walmart change-risk data (~50K binary-labeled change requests, drifts injected by label flipping; missingness injected 5–60% under MCAR/MAR/MNAR).
## Findings (numbers and facts, not vibes)
- Imputation always helped: positive effect on all 6 metrics for all 7 detectors on both datasets (change-risk lowest imputation RMSE with kNN, k=4).
- No single detector is best across all metrics for any missingness/drift type — headline empirical finding (Figure 3).
- Majority-vote ensemble is top-3 on every metric on the change-risk data ("if not the best, always in the top-3").
- Production deployment credited with 33% reduction in major incidents and multi-million-dollar savings (Q2 2021, attribution with acknowledged confounders).
- Drifts are label-flip injections after shuffling (coarse proxy for organic regime change); no significance tests for ensemble-vs-best-single gap.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] New capability: no drift-detection work exists in the repo; composes with lane-mates 1882 (PUDD), 1883 (CDSeer), 1884 (ECDD) into one production monitor instead of betting on a single detector.
- [TRUST-SIGNAL] TPD/ADI/drift-count metrics are the correct way to evaluate GSE's regime-change monitor, replacing misleading prequential error.
- [COACHING] Regime episodes (new HC, rookie QB starts) are the NFL analog of drift events the ensemble should flag; per-feature sparsity audit handles injury-designation and charting-coverage gaps.
## Engine-actionable? (yes/no + one-line what)
yes — Run three detectors in parallel on the weekly resolved-game stream (ECDD on error stream, PUDD on PU-index stream, Page-Hinkley on Brier stream) with ≥2-of-3 firing within a 3-week window declaring drift; adopt if ensemble TPD ∈ [0.8,1.2] per labeled regime episode with ≤2 false alarms/season (~2 days effort, reuses 1882–1884 components).
