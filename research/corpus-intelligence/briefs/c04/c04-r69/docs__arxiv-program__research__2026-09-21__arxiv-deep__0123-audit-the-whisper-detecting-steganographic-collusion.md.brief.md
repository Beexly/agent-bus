# docs/arxiv-program/research/2026-09-21/arxiv-deep/0123-audit-the-whisper-detecting-steganographic-collusion.md
## What it is (1-2 sentences)
A full-paper deep-read of Tailor (2025, arXiv:2510.04303v2): a battery of statistical detectors for steganographic collusion between LLM agents (cross-run MI, permutation invariance, watermark variance, acceptance bias, welfare shift) plus a "martingale union" with a reciprocal-p-value "e-value" construction. The verdict is REJECT: zero GSE application surface, and the central mathematical construction is flagged in the file as invalid.
## Key metrics/methods (formulas where given, else "not specified")
- Five detectors on multi-agent transcripts; multiple-testing corrections: Bonferroni union (alpha/k), Holm step-down, Westfall-Young resampling, and "martingale union" where per-run p-values become E_t = 1/max(p_t, 1e-12) and the product is asserted (Lemma 2) to be a non-negative supermartingale enabling optional stopping.
- Reported operating point: TPR at FPR = 1e-3.
## Data sources named
ColludeBench-v0: 3 scenarios (pricing, auctions, peer review), 200 honest + 200 colluding runs each (600 transcripts total); claimed 10,000 honest audits/scenario with zero false alarms; no public URL confirmed ("not stated in paper").
## Findings (numbers and facts, not vibes)
- Table 1 (as reported): cross_run_mi ROC AUC 0.819 / PR AUC 0.652 / TPR@1e-3 0.598 / FPR 0.001; acceptance_bias TPR 1.000 / FPR 0.000; Bonferroni union TPR@1e-3 0.889; Holm/Westfall-Young 0.556; martingale union 0.667. FPR upper bound claimed: 5.1e-4 (derived from the defective construction — see below).
- Hosted-model surplus claim: honest 79.3 +/- 0.2 vs colluding 0. Baselines anonymized (no real comparison possible).
- Mathematical defect flagged in the file (not a transcription issue): E_t = 1/max(p_t, 1e-12) is NOT a valid e-value (reciprocal of a uniform p-value has infinite expectation; E_0[E_t] <= 1 does not hold) — this undermines Lemma 2, the 5.1e-4 FPR bound, and all optional-stopping claims. A second backwards claim: "minimum of two thresholds can only reduce Type I error" (lowering a rejection threshold generally increases rejections).
- Additional red flags: perfect 1.000/0.000 scores on 200/200 runs with no held-out test (possible overfitting to own simulated colluders); anonymized baselines and citations, consistent with an unreviewed draft; zero NFL/GSE overlap (GSE has no multi-agent LLM pricing/auction/review system).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL (negative): a cautionary example of how a mathematically defective construction can still carry an authoritative FPR guarantee (5.1e-4) — relevant to Garrett's trust-no-claims posture when evaluating claimed statistical guarantees; but nothing to port.
- OTHER: none — no duplicate in corpus, no GSE capability it would extend.
## Engine-actionable? (yes/no + one-line what)
No — no GSE application surface and the core FPR guarantee rests on an invalid e-value construction; revisit only if a named, released benchmark with valid (e.g., conformal or calibrated) sequential guarantees appears.
