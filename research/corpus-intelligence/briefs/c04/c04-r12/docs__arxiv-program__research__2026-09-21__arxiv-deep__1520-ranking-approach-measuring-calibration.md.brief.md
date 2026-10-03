# docs/arxiv-program/research/2026-09-21/arxiv-deep/1520-ranking-approach-measuring-calibration.md
## What it is (1-2 sentences)
Ledger of arXiv:2609.13100 (Chatterjee & Barber 2026), proposing rankECE — a tuning-free calibration-error estimator for binary classifiers that sorts predicted probabilities and multiplies consecutive residual pairs, with closed-form concentration bounds and an asymptotic hypothesis test for miscalibration. Verdict in the ledger: ADAPT — replace GSE's binned ECE with rankECE in calibration reporting and adopt its asymptotic test as a second QC gate; it is a measure, not a recalibration method.
## Key metrics/methods (formulas where given, else "not specified")
- rankECE_n(f) = (1/n)·Σ_{i=1}^{n−1} (Y_{π(i)} − Z_{π(i)})·(Y_{π(i+1)} − Z_{π(i+1)}), where Z sorted ascending, π the ordering permutation (Eq. 2.1). Intuition: data-adaptive binning with bins of size 2.
- ℓ2-ECE(f) = E|E[Y|f(X)] − f(X)|² (Eq. 1.2); ℓ2-binECE(f) = Σ_j P(f(X)∈B_j)·E[Y−f(X)|f(X)∈B_j]² (Eq. 1.3).
- Prop. 2.1 (concentration, assumption-free): |rankECE − rankECE| ≤ √(81·log(2/δ)/(32n)) w.p. ≥ 1−δ.
- Prop. 3.1: 0 ≤ rankECE(f) ≤ ℓ2-ECE(f). Prop. 3.2: rankECE_n(f) →p ℓ2-ECE(f) as n→∞.
- Thm. 3.1: rankECE(f)=0 iff f perfectly calibrated (n≥4) — binned ECE lacks this property.
- Thm. 3.2: under H0, √n·rankECE_n(f)/√(E[Z²(1−Z)²]) →d N(0,1) (martingale CLT); Cor. 3.1 gives the asymptotic test. Prop. 3.4: finite-sample Bernstein-based test (conservative).
- Thm. 4.1 (dominance): rankECE(f) ≥ ℓ2-binECE(f) − 4K/n for any K-bin partition; Lemma 4.1: E[ℓ̂2-binECE] − ℓ2-binECE ≤ K/n (irreducible bias).
- Assumption: Z nonatomic (ties handled in Appendix F); bounded-total-variation residual required (Prop. 3.3); Appendix C: rankECE detects miscalibration iff oscillation frequency m ≪ n.
## Data sources named
Simulations (Z=f(X)~Unif[0,1], n∈{10²,…,10⁵}, T=100 reps; three conditional-probability functions: quadratic, 10-spike, increasing-frequency). Real: Amazon & Yelp Review Polarity (5×10⁴ test subsample), four Hugging Face sentiment models (DistilBERT-SST2, BERT-SST2, RoBERTa-Twitter-Sentiment, BERT-Multilingual-Stars). Code: https://github.com/anirbanc96/rankece.
## Findings (numbers and facts, not vibes)
- rankECE/ℓ2-ECE ratio → 1 rapidly with n and stays substantially closer to 1 than any binECE(K) at moderate n; K=10 collapses on oscillatory functions; K=n/20 shows persistent positive bias.
- Sentiment experiments (all 4 models, both corpora): rankECE consistently the closest approximation; K=√n converges slowly; K=n^{1/3} shows finite-sample bias on BERT/DistilBERT-SST2.
- Tests control type-I error at 0.05; asymptotic rankECE test power comparable to SKCE-U, finite-sample test comparable to/sometimes exceeding SKCE-L; rankECE tests run in ~0.02–0.03 ms vs. SKCE-U's 3–60 ms (MacBook Pro M4).
- Example 4.1 (oscillatory residual, ℓ2-ECE=0.04): rankECE detects it within ±(4·25·0.2+1)/n, while ℓ2-binECE ≤ c²K/m collapses when K≪m.
- Appendix B: Theorem B.1 — plug-in decision rule 1{f(X)≥τ} has excess risk vs. best M-piecewise-monotone-transformed rule bounded by rankECE(f) + √(8(M+1)/n).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Calibration-measurement upgrade: tuning-free, exact zero-iff-calibrated characterization, closed-form asymptotic miscalibration test. Complements ledger 1519 (EDGE, a directed reliability-table test) and 1518 (conformal win probabilities — the numbers being measured).
- [OTHER] If GSE probabilities are rounded (e.g., 2 decimals), tie handling per Appendix F matters (flagged in ledger).
## Engine-actionable? (yes/no + one-line what)
Yes — add rankECE(probs, outcomes) to the calibration module (~15 lines), replace binned ECE in the weekly reliability report with rankECE + asymptotic z-test p-value; acceptance gate: stable across two independent halves (split-half |Δ| < 0.005) AND asymptotic test rejects deliberately-distorted copy at p<0.01 on the 2022–2024 NFL backtest (~800 games).
