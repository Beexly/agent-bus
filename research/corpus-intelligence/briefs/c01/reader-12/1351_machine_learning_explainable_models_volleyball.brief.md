# arxiv-program/research/2026-09-21/arxiv-deep/1351-machine-learning-explainable-models-volleyball.md

**Ledger:** [1351] (arXiv:2206.09258v1) — **Verdict in file: REJECT** (replaces ledger 1192, also REJECT)

## What it is (1-2 sentences)
An undergraduate XAI case study applying IBM's off-the-shelf AIX360 library (BRCG Boolean rules, Kernel SHAP, ProtoDash) to Brazilian volleyball match-outcome prediction, with no temporal validation, no code/data release, and no novel method — a library-usage demo, not research.

## Key metrics/methods (formulas where given, else "not specified")
- White-box: BRCG-light (OR-of-ANDs Boolean rules via column generation + beam search), logistic regression (weight magnitudes as importance). Black-box: SVM, feed-forward ANN, LDA. Post-hoc: Kernel SHAP (Shapley values, base value 0.45 in example), ProtoDash (5 training prototypes with importance weights).
- Faithfulness metric (Alvarez Melis & Jaakkola): correlation between SHAP importance and the attribute's effect on model performance; reported average faithfulness = 0.60 (scale −1 to +1).
- BRCG rule learned: predict Y=1 iff [away last-year position > 3.00 AND head-to-head form > −1.02 AND home last-year position ≤ 10.00 AND home win% > 10.53].
- Features: exponential moving averages of points scored/conceded, form over last 5, home/away form splits, match importance (0/1/2/3), rest days (capped 7), current and previous-year league position. No novel equations.

## Data sources named
FlashScore.in scrape (not shared): 1,289 Brazilian Volleyball SuperLiga matches, seasons 2010/11–2018/19.

## Findings (numbers and facts, not vibes)
- Test accuracy: SVM 0.7790 (F1 0.7971, AUC 0.7771); ANN 0.7713; LDA 0.7519; LogReg 0.7403; BRCG 0.7218. No baselines (home-win base rate, Elo, odds) reported, so numbers are uninterpretable.
- SHAP example: home win predicted at probability 0.84 from base 0.45, driven by previous-season positions and average points. ProtoDash nearest prototype weight 0.6946 vs 0.16/0.09/0.05; 17/19 features >50% similar.
- Validation design is a single unspecified train/test split with exponentially averaged season features — random-split leakage almost certain; accuracies invalid for any forecasting claim.
- Course project (BITS F464 Machine Learning); experiments ran in Google Colab; nothing released.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL (weak/INFERENCE): the only transferable thread is the idea of measuring explanation faithfulness (0.60 average in the paper) plus a human-judgment study of whether explanations increase user trust in engine picks — but this belongs to the cited XAI literature, not to this paper. Wrong sport, no NFL-transferable insight.

## Engine-actionable? (yes/no + one-line what)
No — the paper's entire method is "call AIX360's BRCG/SHAP/ProtoDash"; zero novel features, metrics, or validation tricks. File's own verdict: REJECT outright.
