# arxiv-program/research/2026-09-21/arxiv-deep/2189-tcto-multi-agent-rl-automated-feature-transformation.md
## What it is (1-2 sentences)
The in-repo deep-dive ledger for arXiv:2504.17355v1 (TCTO: Collaborative Multi-Agent RL for Automated Feature Transformation). Verdict: **ADAPT** — adapt its roadmap + multi-agent architecture to systematically mine the gse-lab metric corpus for machine-discovered interaction features, with a full GSE implementation spec, reproducible test, acceptance gate, and improvement experiment already drafted.

## Key metrics/methods (formulas where given, else "not specified")
- **Dual reward:** R_p = V(M(F_{t+1}),Y) − V(M(F_t),Y) (Eq. 5, downstream delta); R_c = (1/n)Σ_j 1/e^{h(v_j)} (Eq. 6, complexity penalty on roadmap depth); R = R_p + R_c, weights 1:1 (ablation: either alone is worse).
- **Q-loss:** L = (Q_p^π(s_t,a_t) − (R_t + γ·max Q_t^π(s_{t+1},a_{t+1})))² (Eq. 7), value-based RL with prediction/target Q-networks.
- **MI pruning score:** I(v,Y) = ΣΣ p(f,y) log[p(f,y)/(p(f)p(y))] (Eq. 8); node-wise pruning at **30% ratio** (optimal per sweep).
- **Roadmap clustering:** similarity matrix Ã[i,j] = cosine(v_i, v_j) on node embeddings; enhanced Laplacian S = D − (A + Ã); hierarchical spectral clustering to k clusters.
- **State representation:** 2-layer Relational GCN over roadmap, relations = operation types: v_i^{(l+1)} = φ(Σ_r Σ_{j∈N_i^r} (1/c_{i,r}) W_r^{(l)} v_j^{(l)}); cluster state Rep(c_i) = mean of node embeddings.
- **Three collaborative agents (sequential):** Head Cluster Agent (π_h: Rep(c_i) ⊕ Rep(V) → score), Operation Agent (π_o: Rep(c_h) ⊕ Rep(V) → o ∈ O), Operand Cluster Agent (π_t: Rep(c_h) ⊕ Rep(V) ⊕ Rep(o) ⊕ Rep(c_i) → tail cluster for binary ops).
- **Operation set O:** unary x², x³, √x, sin, cos, ln, eˣ, tanh, sigmoid, 1/x, standard scaler, min-max, quantile transform; binary +, −, ×, ÷.
- **GSE implementation spec details:** run on game-level rows (~5k) × ~40 gse-lab metrics, LightGBM log-loss as V, operation set = paper's O plus sports-sane additions (z-score within season, rolling ranks); domain guards: forbid division by near-zero-variance features, cap transform depth at 3, require every generated feature to beat its parents' univariate log-loss; train 2015–2023 folds, reward = held-out 2024 season log-loss delta; effort ~5 engineer-days.
- **Acceptance gate:** accept iff 2024-holdout TCTO feature set improves LightGBM log-loss by ≥ 0.003 over raw-metric baseline AND matches-or-beats exhaustive pairwise crosses with ≤ half the feature count (≤ 60 features retained); reject if RL loop fails to beat naive pairwise crosses, runtime exceeds 48 h, or top features are numerically unstable transforms.
- **Improvement experiment (temporal roadmap):** weight roadmap edges by recency (recent seasons' MI counts more in pruning), re-run agents each offseason — a self-updating feature factory testing whether discovered interactions are stable across NFL seasons or regime-specific.

## Data sources named
- Paper benchmarks: 20 tabular datasets — 9 regression (Housing Boston 506×13, Airfoil 1503×5, 7 OpenML sets), 11 classification (Higgs 50k×28, Amazon Employee 32769×9, PimaIndian 768×8, SpectF 267×44, SVMGuide3, German Credit, Credit Default 30k×25, Messidor 1150×19, Wine Red/White); scalability sets ALBERT (425,240×78) and Newsgroups (13,142×61,188). Code/data via Dropbox link (not verified live).
- GSE side: "29 gse-lab CSVs" of hand-built metrics (EPA/play, success rate, pressure, CPOE-adjacent); gse-lab team-game CSVs 2015–2024 with spread-cover label.

## Findings (numbers and facts, not vibes)
- **Table I: TCTO best on all 20 datasets.** Selected margins vs runner-up: Housing Boston 0.495 ± 0.015 (vs 0.491 FastFT); Airfoil 0.622 ± 0.011 (vs 0.605 OpenFE); Openml_616 0.499 ± 0.052 (vs 0.467 GRFG); Openml_607 0.670 ± 0.008 (vs 0.640 GRFG); Openml_586 0.689 ± 0.004 (vs 0.650 GRFG); PimaIndian 0.850 ± 0.007 (vs 0.835 FastFT); SpectF 0.950 ± 0.012 (vs 0.927 FastFT); Messidor 0.742 ± 0.003 (vs 0.731 FastFT); German Credit 0.768 ± 0.008 (vs 0.749 FastFT); Higgs 0.709 ± 0.001 (vs 0.709 GRFG, tie broken at 3rd decimal); Amazon Employee 0.936 ± 0.001 (vs 0.935).
- **Table II robustness:** TCTO features best or tied-best across all 7 downstream models on Housing Boston (Lasso 0.370 vs 0.238 FastFT — 56% relative lift) and Messidor (SVM-C 0.701 vs 0.681).
- **Case study (Table III):** Housing Boston 1−RAE 0.414 (raw) → 0.474 (TCTO-g) → **0.494** (TCTO); top-10 importance sum falls 0.993 → 0.527 (diversifies importance across deeper transforms; reuses high-value intermediate nodes v₁₇, v₃₀). Wine White F1 0.536 → 0.559.
- **Costs:** reward estimation dominates runtime (16 min/step on ALBERT-425k with RF → switched to LightGBM); linear time scaling with dataset size; node-wise pruning ratio 30% optimal; on extremely large-sample sets all AFT methods show limited gains (networks already learn latent patterns).
- **Adversarial read notes:** only TCTO reports ± std; baselines appear point estimates; reward = downstream validation performance (risk of feature-space overfit without nested CV; paper doesn't detail discipline); operation set is generic math — discovered features like 1/(sin v₁₂ − v₀) are uninterpretable and potentially numerically unstable (division near zero); all experiments tabular IID, no temporal validation.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **OTHER:** Automated feature-invention machinery for the engine's metric corpus — machine-discovered crosses of gse-lab metrics (e.g. standardized EPA/play × explosive-play rate ÷ pressure rate) with full provenance paths, feeding public-facing displays. The complexity penalty R_c aligns with the need for deployable, explainable features for pick cards. Feeds buckets INVENT/MODEL.
- **OL (indirect):** pressure rate and related OL metrics are named as candidate operands in the interaction-discovery spec (e.g. EPA/play × explosive-play rate ÷ pressure rate).
- **QB-BEHAVIOR (indirect):** EPA/play, success rate, CPOE-adjacent metrics are named candidate operands; discovered crosses could surface QB interaction terms (INFERENCE).

## Engine-actionable? (yes/no + one-line what)
**Yes** — reimplement the cluster→3-agents→reward→prune loop on ~40 gse-lab metrics with LightGBM log-loss as the downstream objective and domain guards (no near-zero division, depth ≤3, parents must be beaten univariately), accepting only if 2024-holdout log-loss improves ≥ 0.003 over raw baselines with ≤60 features retained.
