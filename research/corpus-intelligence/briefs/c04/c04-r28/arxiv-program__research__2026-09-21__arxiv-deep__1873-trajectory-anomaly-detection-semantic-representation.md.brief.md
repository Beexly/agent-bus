# docs/arxiv-program/research/2026-09-21/arxiv-deep/1873-trajectory-anomaly-detection-semantic-representation.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv:2303.05000 (Jiao et al., Northwestern/UC Irvine, 2023): two learned-representation approaches to vehicle-trajectory anomaly detection — a supervised contrastive encoder + SVM head for known anomaly patterns, and an unsupervised semantic-latent-space autoencoder (disentangling intention, aggressiveness, residual motion) whose reconstruction error flags anomalies without labels. Verdict: ADAPT — gives GSE an interpretable player-movement embedding plus an unsupervised anomaly detector for tracking-data errors and genuinely unusual plays (broken coverages, injury-risk collisions).

## Key metrics/methods (formulas where given, else "not specified")
- Supervised contrastive: feature extractor F (1-D conv over trajectories + map graph) → 128-D → CL encoder E → 32-D latent; per mini-batch N normal + M anomalous scenarios → N(N−1) positive pairs, MN negative pairs; NCE (M+1)-way softmax L_ij = −log[exp(s_niᵀs_nj/τ)/(exp(s_niᵀs_nj/τ) + Σ_m exp(s_niᵀs_am/τ))]; L = 1/(N(N−1)) Σ_{i,j≠i} L_ij; SVM on 32-D latent for online detection.
- Unsupervised semantic AAE: latent partitioned into intention (3 classes), aggressiveness, residual; discriminators regularize each partition; semantic loss Loss_sem(z,g) = −Σ_{i=1}^{3} g_intent log z_intent + (g_agg − z_agg)²; decoder reconstructs with smooth-L1 (Huber); anomaly score = reconstruction error vs threshold.
- Directional-deviation metric for anomaly synthesis: D(α,R) = (p_α − s_α)ᵀ·R(s_{α+1}, s_α).
- Validation metrics: ROC AUC, PR AUC, F1 (imbalanced-data aware); exact numeric AUC/F1 values were figure-rendered (not text-recoverable) — only qualitative rankings reported.

## Data sources named
Argoverse 1 (30K+ scenarios, Miami/Pittsburgh) and Argoverse 2 (six cities, longer scenarios); each scenario = road graph + vehicle trajectories; history = 20 waypoints / 2 s. Anomalies synthesized via white-box PGD attacks: random anomalies (≥5 m avg displacement error) and lateral directional anomalies (≥1.5 m lateral error) — not real-world anomalies. Baselines: naive SVM on acceleration series, one-class SVM on trajectory space, TS2Vec. Proposed NFL data: 2023–2024 NFL 10Hz tracking (plays as scenarios; yard lines, down/distance as the "map graph" analog).

## Findings (numbers and facts, not vibes)
- Supervised CL method "significantly" improves anomaly detection over baselines on both Argoverse datasets (Tables I/II; ROC curves Fig. 4) — exact AUC numbers not text-recoverable.
- Unsupervised semantic-AAE beats OC-SVM and TS2Vec (Tables III/IV) — exact numbers not text-recoverable.
- Cross-pattern generalization: lateral directional anomalies "relatively easy" to generalize from when trained on the other pattern (full ROC in Fig. 5).
- Component study: both the GNN feature extractor and the CL/semantic encoder contribute (Tables V/VI).
- Limitations recorded in file: PGD-synthesized anomalies are still within the attack family (not true unseen patterns); supervised variant needs labeled anomalies; intention/aggressiveness factors are driving-specific and need football redefinition (e.g., intention = route assignment, aggressiveness = closing speed/physicality); no online latency measurement despite "online detection" framing; no code link.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Reconstruction-error anomaly flag doubles as a data-QA head for tracking glitches: OTHER (pipeline tooling, no football content).
- Ledger's proposed "football-native anomaly synthesis" (swap a player's trajectory with a different play's same-position trajectory) — a context-swap detector that would flag busted coverages, not sensor noise: SCHEME (broken coverage is scheme/coaching execution, but this is a ledger-author proposal, marked INFERENCE, not a paper finding).
- Semantic factors (intention = route-concept class; aggressiveness = speed/physicality) as interpretable player-movement features for prop models — INFERENCE: closest to QB-BEHAVIOR only if applied to QB movement; paper itself has no QB content, so OTHER.
- Adversarial-robustness angle (stress-testing forecasters against perturbed histories; opponent game-planning is adversarial): OTHER.

## Engine-actionable? (yes/no + one-line what)
Yes — train a semantic AAE on NFL tracking with latent partitioned into intention (charted route concept), physicality (speed/accel-derived), residual; deploy reconstruction-error anomaly flag for data QA and semantic factors as prop-model features, gated on ROC AUC ≥0.85 on synthetic perturbations AND intention-partition AMI ≥0.30 with charted route concepts.
