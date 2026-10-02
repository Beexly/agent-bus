# docs/arxiv-program/research/2026-09-21/arxiv-deep/1115-x-vars-explainability-football-refereeing-multimodal.md
## What it is (1-2 sentences)
Ledger of arXiv:2404.06332v1 (Held et al. 2024), "X-VARS: Introducing Explainability in Football Refereeing with Multi-Modal Large Language Models." Fine-tuned VLM that narrates soccer foul decisions in referee language, conditioning explanations on injected classifier predictions; verdict ADAPT — the "inject predictions as text into a fine-tuned VLM" pattern ports to GSE's show-your-work pick narratives; the soccer task itself does not.
## Key metrics/methods (formulas where given, else "not specified")
- Architecture: fine-tuned CLIP ViT-L/14 (temporal + spatial pooling of frame features, linear projection into Vicuna/Video-ChatGPT token embedding space).
- Key trick: foul/severity predictions of the classifier injected as text into the LLM prompt so explanations are conditioned on (grounded in) the model's own decision.
- Two-stage training: Stage 1 — CLIP fine-tune 14 epochs, LR 5×10⁻⁶, batch 64, 16 frames at 224p (~9 hours on a V100). Stage 2 — QLoRA fine-tune of LLM (1% of layers), 3 epochs, LR 2×10⁻⁴, batch 32 (~2 hours on two A100 40GB).
- No novel equations; standard CLIP contrastive objective (stage 1) and next-token cross-entropy (QLoRA, stage 2).
## Data sources named
SoccerNet-XFoul (new): 10,000 clips, 22,000+ QA triplets, annotated by 70+ experienced referees; ~1.5 answers per question/action; 540,000+ words total, mean nearly 25 words/answer. Built on SoccerNet (public); XFoul annotation release status: treat redistribution as request/verify.
## Findings (numbers and facts, not vibes)
- [OTHER] Human study (20 referees × 20 clips): human-written explanations mean 4.0; X-VARS 3.8; X-VARS rated higher than the human in 46% of comparisons.
- [OTHER] Severity/foul classification accuracy: CLIP-only 0.52 → X-VARS 0.62; paper claims 19% above prior SOTA.
- [TRUST-SIGNAL] X-VARS agreed with the injected CLIP predictions in only 76% of cases — the LLM overrides its own classifier's input nearly 1 in 4 times; paper explicitly acknowledges hallucination as a limitation. This weakens the core "explainability" claim: the text is not a reliable readout of the decision.
- [TRUST-SIGNAL] Human study is small (20 refs × 20 clips), mean ratings where X-VARS still trails humans; soccer-foul domain only; no code stated (reimplementation from description only).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] Pattern transfer to GSE "show your work" cards: inject engine structured outputs (win prob, spread, key edges, top features) as text into a fine-tuned LLM prompt to generate 3–5 sentence analyst-style rationales; QLoRA recipe (~1% of layers); data = historical posted picks + analyst rationales; target prediction–text agreement >90% (vs the paper's 76%); human review before posting (approve-desk gate); ~2 engineer-weeks + GPU fine-tune time.
- [TRUST-SIGNAL] Fix the faithfulness gap with a structured consistency loss: penalize the model when generated text contradicts injected numbers (extract numbers via regex/NER and compare to inputs) — the paper's obvious missing constraint.
- [OTHER] INFERENCE: the 76%-agreement diagnostic (model's text vs injected prediction) is itself a reusable QC metric for any LLM narration layered on GSE engine outputs — adopt the agreement-rate test in the acceptance gate (adopt only if blind mean rating ≥ human mean − 0.3 AND agreement ≥ 90%).
## Engine-actionable? (yes — build prediction-grounded LLM rationales for published picks with a consistency loss and a ≥90% agreement gate; acceptance gate blocks fluent-but-unfaithful narrators)
