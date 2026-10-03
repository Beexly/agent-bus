# docs/arxiv-program/research/2026-09-21/arxiv-deep/1827-neural-symbolic-regression-that-scales.md
## What it is (1-2 sentences)
A ledger read of arXiv:2106.06427 (Biggio et al., 2021): NeSymReS, a pre-trained Set-Transformer→skeleton-decoder symbolic-regression system (beam search + BFGS constant fitting) that proposes equation skeletons in seconds per dataset and "improves with experience." Verdict in ledger: ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- Architecture: Set Transformer encoder (11M params, m=50 inducing points, O(nm)) maps (x,y) set → latent z; Transformer decoder (13M params) models P(ē_{k+1} | ē_{1:k}, z), trained with cross-entropy on prefix-notation skeletons (Adam, lr 1e-4, no schedule).
- Test time: encode data → beam-search skeletons → fit constants with BFGS on MSE → select best by in-sample loss + 1e-14 × (skeleton token count).
- Pre-training: 1.5M steps ≈ 225M distinct procedurally generated equations; 10M skeletons pre-sampled with up to 3 numerical constants each; support points sampled per equation.
- Accuracy increases monotonically with pre-training dataset size (Fig. 2) — claimed as the only method that "improves with experience."
- Key distributional caveat: "the distribution over equations used during pre-training strongly influences the prior over equations of the final system" (generator = prior).
## Data sources named
- Pre-training: procedurally generated (equation, data) pairs. Evaluation: 5 test sets incl. the Nguyen benchmark suite + 4 others; baselines: GP variants, DSR (Petersen 2021), Eureqa-style, EQL, GrammarVAE-style, GP. No external real-world dataset named.
## Findings (numbers and facts, not vibes)
- NeSymReS outperforms all baselines on all 5 datasets in both time and accuracy by a large margin on most compute budgets (Figs. 3–4; reported as curves, not numeric tables — exact point values not recoverable).
- Test-time budget ~100s per equation; GP baseline is fast in-distribution but poor OOD; on Nguyen at ~10³ s, NeSymReS ≈ DSR (notable: DSR was fine-tuned on Nguyen-7/10, NeSymReS was not).
- Model sizes: 11M encoder + 13M decoder; pre-training expensive (one-time), inference seconds on CPU.
- 1e-14/token skeleton-length penalty is a hand-tuned hack, not principled (ledger defers to paper 1826 for the selector).
- Code + largest pre-trained model released: https://github.com/SymposiumOrganization/NeuralSymbolicRegressionThatScales (MIT per ALIGNMENT context — ledger gives URL only; license not stated in file).
- Limitations noted: prior is the generator distribution (math-textbook shapes risk); synthetic-benchmark evaluation only; noise robustness unstressed; skeleton/constant decoupling assumes BFGS succeeds; "improves with experience" shown only within the synthetic family.
- Ledger verdict: ADAPT; Phase 1 effort ~1 day (released model as proposer on nflverse slices), Phase 2 ~1–2 weeks (sports-plausible generator + fine-tune on ~10–50M equations).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Pre-trained SR as a seconds-per-slice "metric inventor" proposer for metric-discovery pipeline: OTHER (research-automation tooling).
- "Generator distribution IS the prior" → curate a sports-plausible equation generator (operators fit to existing sports corpus, constants in sports ranges, support points from real nflverse marginals): OTHER (methodology for domain adaptation).
- Acceptance gate proposed: NeSymReS best ≤15-node equation within 5% test RMSE of PySR's 30-min best on 2024–2025 (100s budget): TRUST-SIGNAL (audit criterion for adopting the proposer).
## Engine-actionable? (yes/no + one-line what)
Yes — stand up NeSymReS (released checkpoint) as a fast candidate-metric proposer on nflverse slices behind the principled 1826 selector, with a sports-plausible generator fine-tune as the follow-on if the generic prior shows promise.
