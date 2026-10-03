# arxiv-program/research/2026-09-21/arxiv-deep/1785-joint-training-for-selective-prediction.md
## What it is (1-2 sentences)
A ledger on Li & Passonneau (arXiv:2410.24029, Penn State): JTSP jointly trains the classifier and the deferral (gate) policy with shared representations plus a policy-gradient loss term, beating every post-hoc gate (threshold, LR-on-softmax, separately-trained policy) on all four short-answer assessment datasets — and both modules improve.
## Key metrics/methods (formulas where given, else "not specified")
- JTSP: classifier + deferral policy share representations; deferral loss includes a policy-gradient term (Algorithm 1, line 15) directly optimizing the selective-prediction reward. JTSP CE = joint training without the policy-gradient term (ablation).
- Five settings compared: Thresh. (max-prob threshold), LR (logistic on predicted class + softmax + per-question train accuracy), Policy (separately trained), JTSP CE, JTSP.
- Metrics: DP = deferral-policy accuracy/F1; SP = overall selective accuracy/F1; DR = deferral rate (lower better).
## Data sources named
BEETLE (~6,000 undergrad responses), SciEntsBank (SemEval-2013 Task 7), Mid-PHYS, ISTUDIO; SFRN and fine-tuned BERT classifiers; RoBERTa deferral-policy encoder.
## Findings (numbers and facts, not vibes)
- SFRN, BEETLE (SP acc/F1, DR): JTSP 85.33/79.63 (8.20) vs LR 83.89/77.67 (8.64) vs Policy 83.39/76.98 (7.76) vs Thresh. 80.74/72.68 (2.63) vs no-deferral 79.35/70.73.
- SciEntsBank SFRN: JTSP 80.00/73.78 (8.56) vs JTSP CE 79.41/73.60 vs Policy 76.78/68.94 vs LR 75.74/66.52.
- BERT BEETLE: JTSP 85.29/80.08 (10.71) vs Policy 82.92/77.99; SciEnts JTSP 77.37/69.56 vs Policy 76.53/67.20.
- Mid-PHYS SFRN: JTSP 83.33/82.49 (5.90) vs Policy 80.75/79.69; ISTUDIO: JTSP 85.83/84.29 (1.84) vs Policy 85.03/82.95.
- JTSP best on all four datasets with both backbones; the policy-gradient term (JTSP vs JTSP CE) adds a consistent ~0.5–2.5 point gain.
- Limitations: deferral cost unpriced (GSE abstention has opportunity cost); policy-gradient variance unanalyzed at small data scales; NLP defer-to-human domain.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Train pick model and gate jointly with shared trunk instead of bolting gate on post-hoc — architectural upgrade for GSE's gating stack (TRUST-SIGNAL)
- Policy-gradient-on-selective-reward beats proxy cross-entropy; both modules improve, not just the gate (OTHER — training method)
- Deferral decision made stake-aware: binary post/don't-post extends naturally to continuous stake fraction via the same machinery (OTHER — staking)
## Engine-actionable? (yes/no + one-line what)
yes — Rebuild pick-model training as GSE-JTSP (shared trunk, pick head + deferral head, policy gradient on posted-pick units), gated on beating the post-hoc gate by ≥2 points hit-rate at matched deferral rate on walk-forward seasons.
