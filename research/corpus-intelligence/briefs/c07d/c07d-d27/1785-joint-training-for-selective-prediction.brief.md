# arxiv-program/research/2026-09-21/arxiv-deep/1785-joint-training-for-selective-prediction.md
## What it is (1-2 sentences)
Evidence that jointly training the classifier and the deferral (reject) policy with shared representations plus a policy-gradient loss term beats every post-hoc gate (threshold, logistic regression on softmax features, separately-trained policy) on all four tested datasets — and both modules improve — so the "train model, then bolt on a gate" pipeline order is itself the thing to fix.

## Key metrics/methods (formulas where given, else "not specified")
- JTSP (joint training for selective prediction): classifier (CL) + deferral policy (DP) share learned representations, trained jointly; deferral loss includes a policy-gradient term (Algorithm 1, line 15) that directly optimizes the selective-prediction reward (reward correct keeps, penalty structure for defers/errors) rather than proxy cross-entropy.
- JTSP CE = same joint architecture with the policy-gradient term REMOVED (ablation for the term itself).
- Five SP settings: Thresh. (Hendrycks & Gimpel max-prob threshold tuned on validation), LR (logistic regression on predicted class + softmax probs + per-question training accuracy, Li et al. 2023), Policy (separate training), JTSP CE, JTSP.
- Reported metrics: DP = deferral-policy accuracy/F1; SP = overall selective accuracy/F1; DR = deferral rate (lower is better). No closed-form equations given in the brief beyond the policy-gradient loss term reference.

## Data sources named
- BEETLE (~6,000 undergraduate short-answer responses, electricity/electronics); SciEntsBank (SemEval-2013 Task 7; original link dead, authors share on request); Mid-PHYS; ISTUDIO. Classifiers: SFRN (relation network over BERT encodings, SOTA on two datasets) and fine-tuned BERT (HuggingFace AutoModelForSequenceClassification). Deferral-policy encoder: RoBERTa (beat BERT as policy encoder).

## Findings (numbers and facts, not vibes)
SFRN backbone (selective accuracy / F1, Table 1a):
- BEETLE: JTSP *85.33 / 79.63 (DR 8.20) vs LR 83.89 / 77.67 (8.64) vs Policy 83.39 / 76.98 (7.76) vs Thresh. 80.74 / 72.68 (2.63) vs no-deferral 79.35 / 70.73. JTSP deferral-policy accuracy 81.02 / 61.47 also bests all policy variants.
- SciEntsBank: JTSP *80.00 / 73.78 (8.56) vs JTSP CE 79.41 / 73.60 vs Policy 76.78 / 68.94 vs LR 75.74 / 66.52.
BERT backbone (Table 1a): BEETLE JTSP 85.29 / 80.08 (10.71) vs Policy 82.92 / 77.99; SciEntsBank JTSP 77.37 / 69.56 vs Policy 76.53 / 67.20.
Mid-PHYS / ISTUDIO (Table 1b, SFRN): Mid-PHYS JTSP *83.33 / 82.49 (5.90) vs Policy 80.75 / 79.69; ISTUDIO JTSP *85.83 / 84.29 (1.84) vs Policy 85.03 / 82.95.
- JTSP best SP on ALL four datasets with BOTH backbones; the policy-gradient term (JTSP vs JTSP CE) adds a consistent ~0.5–2.5 point gain (e.g., SciEntsBank 80.00 vs 79.41, +0.59).
- Both modules improve vs separately-trained versions — the classifier gets better because the deferral signal shapes its representations (classifier-only gains not isolated in tables — UNCERTAIN on magnitude).
- Limitations: deferral policy's LR baseline uses per-question classifier training accuracy (mild train-set peeking); NLP short-answer domain, deferral cost unpriced; policy-gradient variance at small data scales unanalyzed (GSE per-season pick counts smaller); both-modules-improve classifier-only gains not isolated.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL]: Architectural upgrade for the entire gating stack (ledgers 1775–1780 all assume fixed pick model + post-hoc gate). Mechanism: rebuild pick-model training as GSE-JTSP — shared feature trunk, two heads (pick head: spread/total/moneyline outcome; deferral head: post/don't post), joint training with cross-entropy on pick head + policy-gradient term on deferral head optimizing POSTED-PICK UNITS (selective reward in units, not accuracy — sports abstention has priced opportunity cost). Keep current post-hoc gate (1775) as the Policy-baseline analog; require JTSP to beat it. Log both heads' standalone metrics to verify "both modules improve" on sports data. Serves trust-target intake and calibration/sizing.
- [OTHER — CALIBRATION/SIZING]: The paper's binary deferral maps to sports as a STAKE decision, not post/don't-post. Improvement experiment: make the deferral head stake-aware — output a stake fraction (0 = abstain, continuous to full Kelly), policy gradient on risk-adjusted units (Sharpe of weekly P&L) — test whether continuous-stake JTSP beats binary JTSP on risk-adjusted return. This connects gating to the sizing program directly.
- CONTRADICTION check vs 1775: none — 1775 optimizes the post-hoc gate, 1785 says the pipeline order is wrong; they compose (joint training WITH a Fisher-consistent score recipe for the deferral head), but the acceptance gate must require JTSP to beat the already-strong 1775-style gate before justifying training-loop surgery (~3 weeks).
- UNCERTAIN: whether the "classifier gets better" effect transfers to sports where the deferral signal (units on posted picks) is sparse and noisy; paper didn't isolate classifier-only gains.
- Referenced: arXiv:2410.24029 (Li, Passonneau, Penn State); Hendrycks & Gimpel (threshold baseline); Li et al. 2023 (LR baseline); SemEval-2013 Task 7; HuggingFace AutoModelForSequenceClassification; SFRN; RoBERTa/BERT encoders.

## Engine-actionable? (yes/no + one-line what)
Yes — rebuild pick-model training loop as GSE-JTSP (shared trunk, pick + deferral heads, policy-gradient on posted-pick units); adopt only if it beats the separate-gate Policy baseline (1775-style) by ≥2 points of posted-pick hit-rate at matched deferral rate walk-forward AND the JTSP-vs-JTSP-CE ablation shows the policy-gradient term contributes.
