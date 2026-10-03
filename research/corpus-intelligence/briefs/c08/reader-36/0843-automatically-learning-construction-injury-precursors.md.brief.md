# docs/arxiv-program/research/2026-09-21/arxiv-deep/0843-automatically-learning-construction-injury-precursors.md
## What it is (1-2 sentences)
Full-text read of arXiv:1907.11769v4 (Baker, Hallowell, Tixier, 2019), which trains CNN, HAN, and TF-IDF+SVM classifiers on 90,000+ construction incident reports to predict safety outcomes, then compares three post-training precursor-extraction methods (CNN receptive-field norms, gradient saliency, HAN attention) that surface the text fragments most predictive of the outcome. Verdict: ADAPT — the direct GSE analogue is mining NFL injury-report / practice-report text for predictive phrases.

## Key metrics/methods (formulas where given, else "not specified")
- CNN: document matrix A ∈ ℝ^{s×d}, s=200 words; 3 branches with filter sizes {2,3,4}, 100 filters/branch (300 for incident_type); ReLU; global 1-max pooling; softmax.
- HAN: word- and sentence-level bidirectional GRU encoders with self-attention at both levels.
- Precursor extraction: (1) predictive regions — select receptive-field embeddings with highest norms per report, aggregate over training set → top n-grams per outcome level; (2) word saliency: saliency(a) = |∂CNN/∂a| at a| — one backward pass on the prediction, not the loss; (3) HAN attention weights at word and sentence level.
- Metrics: per-class precision/recall/F1; mean F1 per outcome.

## Data sources named
90,000+ incident reports from a global oil-and-gas industrial partner, five continents, early 2000s–2018; proprietary, not replicable. No public source.

## Findings (numbers and facts, not vibes)
- incident_type mean F1: HAN 68.98, CNN 63.33, TF-IDF+SVM 71.55, random 15.74.
- injury_type FOB class: CNN 95.49 F1; bodypart eye class: HAN 97.04 F1.
- Hard categories: rules (incident_type) best 61.75 F1, pain (injury_type) best 66.17 — both by TF-IDF+SVM.
- HAN beats CNN almost everywhere but trains ~3× slower (216.99 vs 71.47 s/epoch on incident_type); HAN has slightly fewer params (1.63M vs 1.71M).
- TF-IDF+SVM beats deep learning except on bodypart — authors attribute this to dataset size and keyword-sufficiency of the task.
- Top mined n-grams per outcome: "trip hazard" 78,240 mentions for access; "not wearing" 36,603 for rules.
- Leakage warning: narratives often contain the outcome ("his eye", "access"), so headline F1s are inflated; paper discusses mitigation in §7.1.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — injury-text NLP pipeline: mine NFL injury/practice-report text for phrases predictive of will-play/limited/out and performance impact; leakage warning (narratives restate the outcome) is required reading before building.
- TRUST-SIGNAL — the paper's explicit discussion of outcome leakage in narratives is a trust/validation lesson for any text-based injury feature (INFERENCE: mine practice-participation language, not body-part mentions, which are leakage).

## Engine-actionable? (yes/no + one-line what)
Yes — build an NFL injury-report NLP pipeline (attention/saliency/receptive-field phrase mining) with gate: text-augmented inactive prediction must beat designation-only F1 by ≥0.03 on a 2024 holdout after masking explicit designation tokens.
