# docs/arxiv-program/research/2026-09-21/arxiv-deep/0696-selective-ensembles-for-consistent-predictions.md

## What it is (1-2 sentences)
Black, Leino & Fredrikson (2021, arXiv:2111.08230v1) study prediction disagreement across retrained models and propose "selective ensembles": predict the majority vote only if a two-sided binomial test on the top-2 vote counts rejects a toss-up at level α, else ABSTAIN — with a theorem bounding inconsistency. Ledger verdict: ADAPT — binomial-tested majority-vote ensembles give GSE a principled stability gate for published picks.

## Key metrics/methods (formulas where given, else "not specified")
- Mode predictor: g_{P,S}(x) = argmax_y E_{S∼S}[1[P(S;x)=y]] (Eq. 1).
- Prediction rule (Alg. 2): if binom_p_value(n_A, n_A+n_B, 0.5) ≤ α return argmax(Y) else ABSTAIN (n_A, n_B = top-2 vote counts).
- Theorem 4.1: ∀x, Pr_{S∼S^n}[ĝ_n(P,S;α,x) ≠_ABS g_{P,S}(x)] ≤ α.
- Corollary 4.2: E_x[V(x)] ≤ α+β (expected loss-variance bounded by α + abstention bound β).
- Corollary 4.3: E_x[Pr[two ensembles disagree]] ≤ 2(α+β).
- Experiments: α=0.05, n∈{5,10,15,20}, 24 random ensembles per setting; 500 models per tabular dataset (independent seeds / LOO data), 200 per image dataset.
- Validation: 276 pairwise ensemble comparisons per tabular dataset (40 for image); disagreement rate p_flip per test point; attribution stability via Spearman's ρ, top-5 intersection, SSIM; ablation n=5→20, RS vs LOO randomness.

## Data sources named
Seven benchmark datasets (no sports data): UCI German Credit (n=800), Adult, Taiwanese Credit Default, Seizure, Warfarin dosing, Fashion-MNIST, Colorectal Histology. Code availability not stated in extracted text; all datasets public.

## Findings (numbers and facts, not vibes)
- Singleton models: p_flip>0 on up to 57% of test points (German Credit); typically 5–10% elsewhere. (TRUST-SIGNAL — instability of single models is the motivating fact)
- Selective ensembles of n=10: zero points with p_flip>0 across all seven datasets. (OTHER)
- Abstention at n=20, α=0.05 (RS): Adult 2.4%, Seizure 1.4%, Warfarin 3.1%, Taiwanese Credit 2.3%, FMNIST 3.6%, Colon 1.9%; German Credit 16.5% (outlier: tiny dataset, 57% baseline disagreement). (OTHER)
- n=5 → 100% abstention (α must be raised for tiny ensembles). (OTHER)
- Selective-ensemble accuracy (abstain as error) within a few points of non-selective ensembles: Adult .830 vs .842 at n=20; Warfarin .670 vs .688. (OTHER)
- Attributions: singleton German-Credit saliency maps agree on ~1 of top-5 features on average; plain ensembling roughly doubles attribution agreement; selective abstention further stabilizes attributions when variance is high. (TRUST-SIGNAL — explainability stability)
- Cost: 10–20× training cost per publish cycle for the stability gate. (OTHER)
- INFERENCE: GSE's season-level samples resemble German Credit (n=800) more than Adult — expect abstention higher than the headline 1.5–5% in production.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
Tagged inline above.

## Engine-actionable? (yes/no + one-line what)
Yes — train n=10–15 seed-varied classification heads, publish a game's pick only if the vote margin passes the binomial test at tuned α (a "model disagreement" abstention gate), optionally combined with learned-abstention heads as a two-key publish gate.
