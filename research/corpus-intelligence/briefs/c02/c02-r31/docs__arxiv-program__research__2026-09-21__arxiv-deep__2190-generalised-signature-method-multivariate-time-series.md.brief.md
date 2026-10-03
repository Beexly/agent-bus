# docs/arxiv-program/research/2026-09-21/arxiv-deep/2190-generalised-signature-method-multivariate-time-series.md
## What it is (1-2 sentences)
A unification of the rough-path "signature method" for multivariate time-series feature extraction into one general framework (z = Sig^N ∘ ρ ∘ ϕ(x) over augmentations, windows, transforms, rescalings) plus a first-of-its-kind empirical study — 8,569 dataset×variation×model combinations across 26 datasets — identifying which variations matter, yielding a canonical best-practices pipeline (time+basepoint augmentation, hierarchical dyadic windows, signature depth ≤6, random forest) that lands in the top statistical clique on the UEA archive. Verdict in file: ADAPT — signatures capture order-dependent cross-channel interactions (e.g., the joint trajectory of EPA/play, pressure rate, pace over 8 games where event order is the signal) that static aggregates and per-channel features miss.

## Key metrics/methods (formulas where given, else "not specified")
- Generalised framework: for a multivariate path x, features z_{i,j} = (transform ∘ rescale ∘ window_j ∘ augment)(x), stacked into a vector, fed to any classifier.
- Signature transform: Sig^N(x) = collection of iterated integrals of x up to depth N — a graded, order-aware summary of the path; logsignature variant compresses redundancies.
- Baseline: z = Sig³ ∘ ρ_pre ∘ ϕ_t(x) (Eq. baseline).
- Augmentations tested: time, basepoint, invisibility-reset (sensitivity-adding); lead-lag, singleton/pair/triplet coordinate projections, random projections (e ∈ {3,6}, p ∈ {2,5}), learnt projections, multi-headed stream-preserving networks (3-layer ReLU FFNs, 16/32 units).
- Windows: global (baseline), sliding/expanding (5 or 20 windows), hierarchical dyadic (depths 2, 3, 4).
- Rescaling: none / pre-signature / post-signature.
- Canonical pipeline: augment with time + basepoint → hierarchical dyadic windows (depth 2–4) → signature depth 1–6 (OOB-selected) → random forest (n_trees ∈ {50,100,500,1000}, max_depth grid, 20 random combos).
- Scale: 8,569 dataset×variation×model combinations; 1,415 unique variations; combos producing >10^5 signature features omitted.
- Assumptions: (i) iterated integrals carry the discriminative information (universal nonlinearity property); (ii) augmentations fix signature blind spots — time adds parametrization sensitivity, basepoint fixes translation invariance, lead-lag captures quadratic variation; (iii) dyadic windows give multi-resolution structure without dense-sliding-window redundancy.
- Feature count grows geometrically in channels d and depth N (hence the >10^5 cap and coordinate-projection variants).

## Data sources named
- 26 datasets: 24 from the UEA multivariate time-series classification archive (6 with d>60 channels excluded from the variation study — DuckDuckGeese, FaceDetection, Heartbeat, InsectWingbeat, MotorImagery, PEMS-SF — but included in the canonical-pipeline demo), plus Human Activities and Postural Transitions (Reyes-Ortiz 2016) and Speech Commands (Warden 2018). UEA predefined train/test splits respected; 80/20 stratified train/validation for GRU/CNN tuning.
- Tooling lineage: iisignature/esig/signatory (no single repo link extracted from the read — verify API currency before implementing).

## Findings (numbers and facts, not vibes)
- The canonical signature pipeline ranks in the first clique (group of classifiers with best accuracy, not significantly different from each other) on the UEA archive. The two better-ranked algorithms: MUSE (could not finish on 5/26 datasets with 500 GB RAM — Ruiz et al. 2020) and HIVE-COTE (ensemble, very high train/inference cost). The signature pipeline had no memory errors on a smaller machine and was significantly faster than HIVE-COTE. [OTHER]
- Variation study: hierarchical dyadic windows and signature-tailored augmentations (lead-lag, time, basepoint) are the dominant performance drivers; learnt projections / stream-preserving nets performed relatively weakly (authors note undertuning). [OTHER]
- Runtimes (mean sec over UEA datasets): baseline augmentation+global window — CNN 69.8, GRU 22.2, logistic 2.67, RF 2.23; random projection + logistic: 0.86 s; learnt projections: 917 s (CNN) / 752 s (GRU). [OTHER]
- Limitations: signature features explode combinatorially in channels × depth — GSE's ~40-metric space needs aggressive projection or depth ≤ 3; variation selection per dataset risks overfitting the framework to UEA; baselines point-estimated; lead-lag doubles channel count (d → 2d); signatures are translation-invariant without basepoint (silent feature duplication risk); interpretability is poor — individual signature coefficients don't map to human-readable stats, which matters for GSE's public pick cards. [OTHER]
- INFERENCE: the dyadic windows map naturally onto GSE's multi-scale program (2188) — signature features at 4/8/17-game dyadic depths; TCTO (2189) finds static crosses (x·y) while signatures find path-dependent interactions — complements, not duplicates.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Path-dependent interactions over a team's last 8 games — e.g., collapse-then-recovery vs steady decline in the joint trajectory of (EPA/play, pressure rate, pace) — where event order is the signal: SCHEME.
- Lead-lag on betting-market channels: joint path of [team EPA/play, closing spread, spread movement from open]; lead-lag signatures capture quadratic variation so the cross-terms encode "the market moved against the team's form" — a market-vs-form interaction feature family: TRUST-SIGNAL.
- Proposed GSE spec: 5-channel path [EPA/play, success rate, pressure rate, explosive-play rate, pace] over trailing 8 games, time+basepoint augmented, dyadic depth 3, signature depth 1–3 (d=6 → depth 3 ≈ 258 terms/window); feed into LightGBM spread model, select via the 2185 SHAPEffects procedure: OTHER.
- Acceptance gate: 2024 held-out log-loss improvement ≥ 0.003 over baseline with ≤300 signature features AND the no-time-augmentation ablation performing worse (confirming the mechanism transfers): OTHER.
- Poor coefficient interpretability vs GSE's public-pick-card transparency need — signature features stay internal: TRUST-SIGNAL.
- No direct QB-behavior, coaching, or OL findings in the paper.

## Engine-actionable? (yes/no + one-line what)
yes — Compute path-signature features (time+basepoint augmentation, dyadic windows depth 3, signature depth ≤3) over trailing-8-game multivariate team paths and test as LightGBM spread-model features with SHAPEffects selection, gating on ≥0.003 2024 log-loss improvement with ≤300 features.
