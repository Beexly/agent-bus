# arxiv-program/research/2026-09-21/arxiv-deep/1351-machine-learning-explainable-models-volleyball.md
## What it is (1-2 sentences)
Ledger note for arXiv:2206.09258v1 (Lalwani et al., BITS Pilani 2022), an undergraduate XAI case study calling IBM's AIX360 library (BRCG, SHAP, ProtoDash) to predict Brazilian SuperLiga volleyball matches. Verdict: REJECT — no novel method, no temporal validation, no code/data release, wrong sport, library-tutorial-level work.

## Key metrics/methods (formulas where given, else "not specified")
- Methods: BRCG-light (OR-of-ANDs Boolean rules via column generation + beam search, from AIX360), logistic regression, SVM, feed-forward ANN, LDA; post-hoc Kernel SHAP with the **faithfulness** metric (correlation between SHAP importance and the attribute's effect on model performance, Alvarez Melis & Jaakkola), and ProtoDash (5 weighted prototypes nearest each test instance).
- One learned BRCG rule reported: predict Y=1 iff [away last-year position > 3.00 AND head-to-head form > −1.02 AND home last-year position ≤ 10.00 AND home win% > 10.53].
- Features: matches won, exponential moving averages of points scored/conceded, head-to-head set difference, last-5 form (exponentially averaged), home/away form, match importance (0 league / 1 QF / 2 SF / 3 final), rest days (capped at 7), current and previous-year league position.
- Faithfulness metric scale: −1 to +1; average SHAP faithfulness reported 0.60.

## Data sources named
- 1,289 matches, Brazilian Volleyball SuperLiga, seasons 2010/11–2018/19, scraped from FlashScore.in (not shared).
- IBM AIX360 library; Google Colaboratory compute. No code, data, seeds, or split definition released.

## Findings (numbers and facts, not vibes)
- Test accuracy (single unspecified split, no temporal ordering): SVM 0.7790 (F1 0.7971, AUC 0.7771); ANN 0.7713; LDA 0.7519; LogReg 0.7403; BRCG 0.7218. Home-win base rate unreported, so 0.779 cannot be judged against anything.
- LogReg top features: away current position, home average points, away previous-year position.
- SHAP example: home-win predicted at probability 0.84 from base 0.45, driven by previous-season positions and average points; average faithfulness 0.60.
- ProtoDash example: nearest prototype weight 0.6946 vs 0.16/0.09/0.05 for the rest; 17/19 features >50% similar.
- With exponentially averaged season features and an undescribed random split, leakage of future games into training is near-certain — reported accuracies are uninterpretable as forecasts.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: faithfulness metric (Alvarez Melis & Jaakkola) as a candidate way to audit GSE's own pick-explanation quality — the one salvageable thread (a SHAP-on-engine-picks faithfulness study), but it belongs to the cited XAI literature, not this paper.
- OTHER: negative signal — no temporal validation on the single train/test split is the canonical failure mode; reinforces GSE's walk-forward requirement.
- No QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, or SCHEME content; volleyball, not football.

## Engine-actionable? (yes/no + one-line what)
No — rejected at the ledger gate; the only reusable idea (explanation-faithfulness measurement) comes from the XAI literature the paper merely borrows, and GSE's toolkit already contains SHAP/AIX360 equivalents.
