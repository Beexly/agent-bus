# docs/arxiv-program/research/2026-09-21/arxiv-deep/0482-structured-prediction-theory-based-on-factor.md

## What it is (1-2 sentences)
Cortes, Kuznetsov, Mohri & Yang (2016, arXiv:1605.06443): data-dependent margin generalization bounds for structured prediction via empirical factor-graph Rademacher complexity, plus Voted Risk Minimization algorithms (Voted CRF, Voted Structured Boosting) designed from the bounds. File verdict: **REJECT** — margin-bound theory for NLP sequence labeling (POS tagging); nothing transfers to NFL pick modeling.

## Key metrics/methods (formulas where given, else "not specified")
- General data-dependent margin bound (Theorem 1, additive): R(h) ≤ R^{add}_ρ(h) ≤ R̂^{add}_{S,ρ}(h) + (4√2/ρ)·R^G_m(H) + M·√(log(1/δ)/(2m)), with probability ≥ 1−δ; multiplicative-margin version analogous.
- VCRF per-example term: F_i(w) = (1/m)·log(Σ_{y∈Y} exp(L(y,y_i) − w·δΨ(x_i,y_i,y))); gradient via marginal expectations over factor neighborhoods (Lemma 15); VRM-style complexity penalties r_k over feature-family orders plus L1.
- Baselines: L1-regularized CRF; one-sided paired t-test at 5% significance.

## Data sources named
- 10 part-of-speech tagging datasets: Basque UD (8,993 sentences, 121,443 tokens, 16 labels), Chinese Treebank 6.0 (28,295 / 782,901 / 37), UD Dutch (13,735 / 200,654 / 16), UD English Web Treebank (16,622 / 254,830 / 17), Finnish UD (13,581 / 181,018 / 12), UD Finnish-FTB (18,792 / 160,127 / 15), UD Hindi (16,647 / 351,704 / 16), UD Tamil (600 / 9,581 / 14), METU-Sabanci Turkish (5,635 / 67,803 / 32), Tweebank/Twitter (929 / 12,318 / 25).
- Features: products of binary indicator features over word/prefix/suffix/punctuation/capitalization windows; 20%-label-noise injection experiment on frequent tokens.

## Findings (numbers and facts, not vibes)
- Table 2 token error % (VCRF vs L1-CRF, mean ± std over 5 runs): Basque 7.26±0.13 vs 7.68±0.20; Chinese 7.38±0.15 vs 7.67±0.12; Dutch 5.97±0.08 vs 6.01±0.92; English 5.51±0.04 vs 5.51±0.06; Finnish 7.48±0.05 vs 7.86±0.13; Finnish-FTB 9.79±0.22 vs 10.55±0.22; Hindi 4.84±0.10 vs 4.93±0.08; Tamil 19.82±0.69 vs 22.50±1.57; Turkish 11.28±0.40 vs 11.69±0.37; Twitter 17.98±1.25 vs 19.81±1.09. VCRF significantly better on all except English and Dutch; on every significant dataset VCRF won on every fold.
- Sparsity (Table 3): feature-count ratios VCRF/CRF from 0.00007 (Basque: 7,028 vs 94,712,653) to 1.0 (Dutch).
- Noise injection (20% label flips): VCRF outperforms L1-CRF in the majority of cases, differences magnified on English and Twitter.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: NLP sequence labeling with decomposable Hamming loss and factor-graph structure — GSE has no structured-output task (per-game scalar probabilities); the VRM complexity-penalty machinery has no analog in the pick engine. Noted as companion to the same-wave Osokin et al. structured-prediction theory; not in Garrett's corpus elsewhere.

## Engine-actionable? (yes/no + one-line what)
No — rejected at the paper level; the only conceivable future use (voted ensembles with complexity penalties for joint full-slate portfolio models) is a new project, not an implementation of this paper.
