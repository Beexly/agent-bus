# arxiv-program/research/2026-09-21/arxiv-deep/1118-betxplain-explanation-annotated-dataset-manipulative-betting.md
## What it is (1-2 sentences)
Research brief (ledger 1118) on arXiv:2606.27274v2 (Sathvik et al., 2026), which releases BetXplain — an explanation-annotated 3-class dataset for detecting manipulative/deceptive gambling ads on social media — with encoder fine-tune vs GPT-4o baselines. **Verdict: ADAPT** — the classifier is a working content-integrity primitive for GSE's affiliate/promo compliance; the explanation-generation results are too weak to use.
## Key metrics/methods (formulas where given, else "not specified")
- Fine-tuning recipe: 5 epochs, AdamW, weight decay 0.01, 10% warmup, learning rate 2×10⁻⁵, max length 256, batch 16, inverse-frequency weighted cross-entropy (no novel equations).
- Models: ELECTRA, Longformer, others (encoder fine-tunes); GPT-4o few-shot and chain-of-thought prompting for classification + explanation generation.
- Explanation evaluation: ROUGE-1/L, BLEU-1, cosine similarity of embeddings.
- Assumptions: two annotators' (the coauthors') labels are ground truth; 3-class taxonomy (manipulative/deceptive/responsible) is exhaustive and separable; explanations evaluable via n-gram overlap.
## Data sources named
BetXplain: 4,000 ads collected, 216 duplicates removed → final 3,779 (manipulative 1,507 = 39.9%; deceptive 396 = 10.5%; responsible 1,876 = 49.6%), split 70%/10%/20% = 2,645/378/756 stratified; sourced from Meta Ads Library, described as primarily Instagram (narrative also claims Instagram+Reddit — conflicts with methods; dataset access promised "upon acceptance," no download link in anonymized version).
## Findings (numbers and facts, not vibes)
- ELECTRA best macro-F1: 0.6946. Longformer best accuracy: 0.8511. GPT-4o few-shot: accuracy 0.8210, macro-F1 0.6898 (Table 2); narrative text inconsistently says CoT highest macro-F1 at 0.6870 — small table-vs-text discrepancy, table values quoted.
- Deceptive class is weakest: ELECTRA F1 0.511 — the most policy-relevant class is the worst-detected, on only 396 examples (10.5% of data).
- Explanation generation (CoT): ROUGE-1 0.2707, ROUGE-L 0.2144, BLEU-1 0.0173, cosine 0.5776 — weak; explanations are decorative, not functional.
- Limitations: only two annotators (both coauthors), no inter-annotator agreement reported; single split; no temporal validation; no adversarial paraphrase test; platform coverage claims conflict.
- GSE gate in brief: adopt if macro-F1 ≥ 0.65 on triple-annotated held-out promos with annotator κ ≥ 0.6 AND deceptive-class F1 ≥ 0.60 (clear the paper's 0.511); reject otherwise — a compliance filter that misses deceptive ads is liability theater.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: content-integrity/compliance primitive — scans GSE's affiliate promo copy, sportsbook ad creatives, and sponsored content for manipulative/deceptive patterns pre-publication (responsible-gambling compliance + brand safety); new capability, no existing GSE ledger overlaps (0618 is model abstention — distinct).
- OTHER: revenue-lane protection — the affiliate lane (Amazon/FanDuel/DraftKings) makes promo-copy compliance a live liability surface; the multimodal + active-learning improvement (image OCR, uncertainty sampling on the rare deceptive class) targets exactly the weakest point.
## Engine-actionable? (yes/no + one-line what)
Yes — fine-tune ELECTRA per the paper's recipe on 500–1,000 triple-annotated sportsbook promos (~2 engineer-weeks + annotation) and batch-screen affiliate/sponsored copy, flagging manipulative/deceptive for human review, gating on deceptive-class F1 ≥ 0.60.
