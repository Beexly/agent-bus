# arxiv-program/research/2026-09-21/arxiv-deep/0420-gaining-momentum-uncovering-hidden-scoring-dynamics.md
## What it is (1-2 sentences)
A pipeline (logistic event weights → XGBoost xG → 32-dim event embeddings + single-layer LSTM sequence scoring → PCA+K-means "momentum chains" → X-Learner ATE) claims momentum causally increases hockey scoring; the dossier's verdict is REJECT — the causal claim is circular on proprietary data, only the sequence-embedding architecture is salvageable.
## Key metrics/methods (formulas where given, else "not specified")
- Event-weight logistic: Pr(y_i=1|x_i) = σ(β_0 + Σ_e β_e x_i,e); Momentum M_i = Σ_e β_e x_i,e; composite S_i = M_i + p̂_i^xG + p̂_i^LSTM.
- XGBoost xG: depth 6, 200 rounds, lr 0.05, 80% row subsampling, early stopping 25 rounds, 70/15/15 split.
- LSTM: 32-dim event embeddings, single 50-unit LSTM, 30% dropout, ≤20 events, Adam 0.001, batch 32, 30 epochs, 80/20 split.
- PCA to first 3 PCs (>85% variance), K-means clustering; X-Learner ATE with CV + bootstrap.
## Data sources named
Proprietary Sportlogiq dataset: 541,000 NHL event records, overlapping 30-second windows. Not public; no access path given.
## Findings (numbers and facts, not vibes)
- XGBoost xG: train acc 73.4%, test acc 71.2%, AUC 0.85, precision 0.36, recall 0.42 (at ~2% goal base rate).
- LSTM: train acc 83.9%, val acc 82.6%; train loss 0.357, val loss 0.379.
- 1,148 chains identified; top composite sequence score 4.33; low-probability-reward chains averaged 27% higher composite; top-ten LSTM sequences avg goal prob 0.91 ± 0.07.
- X-Learner ATE: CV 0.12576; bootstrap 0.10688; 95% CI 0.05002–0.17436; p-value 1.42883e-52 (dossier flags this as a dependence-ignored artifact, not strength).
- Fatal flaws per file: treatment defined from composite score that includes the outcome model (circularity); overlapping windows violate independence; random splits leak same-game sequences; team strength unadjusted; data unverifiable.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: drive-momentum as a predictive feature only (Hawkes/LSTM drive-energy, never a causal claim).
## Engine-actionable? (yes/no + one-line what)
no — Paper's causal claim rejected unconditionally; salvage concept (momentum as predictive drive feature) needs from-scratch rebuild on nflverse with team-clustered validation.
