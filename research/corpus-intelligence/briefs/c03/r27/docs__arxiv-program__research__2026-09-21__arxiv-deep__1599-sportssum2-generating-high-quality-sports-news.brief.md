# docs/arxiv-program/research/2026-09-21/arxiv-deep/1599-sportssum2-generating-high-quality-sports-news.md

## What it is (1-2 sentences)
Three-step (select → rewrite → rerank) sports-game summarizer that converts live text commentary into news articles, improving on the SportsSUM baseline via dataset cleaning (>15% noisy articles removed), a lexical+semantic pseudo-labeler, and a fluency-aware MMR reranker instead of direct sentence stitching. Corpus verdict ADAPT — the architecture transfers to compressing NFL English text streams into daily recap briefs and content drafts.

## Key metrics/methods (formulas where given, else "not specified")
- Pipeline: (1) context-aware selector — RoBERTa-large binary classifier over target sentence + sliding context window ([CLS] c1 [SEP] ... [SEP] cN [SEP], 512 tokens, target centered; avg token embeddings → sigmoid; cross-entropy); (2) rewriter — commentary+timeline → news sentence via PGNet / Bert2bert / mBART; (3) reranker — fluency-aware MMR: MMR(D,R) = argmax_{d_i ∈ D−R}[λ1·info(d_i) + λ2·flu(d_i) − λ3·max_{d_j ∈ R} sim(d_i,d_j)], λ = (0.6, 0.2, 0.2), info = selector's commentary importance, flu = 1 − perplexity(d_i)/η (GPT-2 perplexity), sim = BERTScore; greedy selection to average-article length budget.
- Pseudo-labeler: candidate commentaries in timeline window [h_i, h_i+3]; similarity S(r_i,c_j) = λ·BERTScore(r_i,c_j) + (1−λ)·ROUGE(r_i,c_j), λ = 0.7.
- Assumptions: news sentences carry "in the n-th minute" time markers; the ±3-min window contains the source commentary; GPT-2 perplexity proxies fluency; importance transfers from commentary selector to rewritten sentence.

## Data sources named
SportsSum2.0: 5,402 human-cleaned Chinese sports-game samples (from SportsSum's 5,428; 26 "bad cases" dropped after 7 annotators + 2 experts, ~200 human hours). Noise taxonomy: 2.2% descriptions of other games, 4.6% misplaced history preamble, 9.8% ads/hyperlinks. Schema: live commentary document C = {(t_j, s_j, c_j)} (avg 194 sentences, 1,828 words) → news article R = {r_i} (avg 22 sentences, 407 words). Split: 4,803 train / 300 val / 299 test. Released: github.com/krystalan/SportsSum2.0; models built on HuggingFace Transformers (RoBERTa-large, mBART, GPT-2). Baselines: TextRank, PacSum (extractive), Abs-LSTM, Abs-PGNet (abstractive), SportsSUM two-step + enhanced two-step variants.

## Findings (numbers and facts, not vibes)
- Best reranker model (Bert2bert∗) on SportsSum2.0: ROUGE-1 48.13, ROUGE-2 20.09, ROUGE-L 47.78 — vs SportsSUM baseline 44.73/18.90/44.03 (+2.8 avg points); on SportsSum: 47.61/19.65/47.49 vs 43.17/18.66/42.27 (+3.5 avg points).
- Advanced pseudo-labeler (BERTScore+ROUGE) beats the original semantic-only pseudo-labeler consistently (rows 8→9, 12→13 ablations).
- Human evaluation (5 postgrads × 100 samples, 3-point scale on informativeness/redundancy/fluency/overall): SUM-Clean outperforms SUM-Noisy on all four aspects, largest gap on fluency — dataset noise degrades generation quality.
- Limitations named: Chinese-only corpus; pseudo-labels still heuristic (BERTScore+ROUGE argmax in a ±3-min window — mismatch risk); selector's info score reused as the rewritten sentence's info (style shift unaccounted); reranker λ's set by hand, not learned; GPT-2 perplexity as fluency is crude; no human evaluation of final three-step outputs beyond the Clean-vs-Noisy ablation.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Select → rewrite → fluency-aware-MMR-rerank architecture (+2.8–3.5 avg ROUGE over direct stitching) → OTHER (content pipeline: compress NFL text streams — X posts, beat-writer articles, injury reports — into daily recap briefs and @GalaxySportsHQ draft posts).
- Pseudo-label recipe S = 0.7·BERTScore + 0.3·ROUGE inside timestamp windows; lexical overlap beats semantic-only labeling → OTHER (labeling method for NFL text streams where human labels are scarce).
- Largest human-eval gap from cleaning was fluency, not informativeness → TRUST-SIGNAL (public-facing generated content is judged on polish; dataset noise is the enemy).

## Engine-actionable? (yes/no + one-line what)
Yes — adapt the three-step pipeline to NFL English streams: pseudo-label beat-writer articles to play-by-play/injury-report sentences with the BERTScore+ROUGE recipe in timestamp windows, train a context-aware selector (RoBERTa/DeBERTa) over rolling windows, rewrite with a modern seq2seq LLM and rerank with fluency-aware MMR (LLM perplexity as fluency proxy, budget = target post length) for daily recap briefs, injury digests, and content drafts; acceptance gate: selector precision@k ≥ 0.5 on pseudo-labeled targets on a hand-labeled NFL week, reranked briefs rated ≥ "SUM-Clean" fluency by an LLM judge vs a naive stitch baseline.
