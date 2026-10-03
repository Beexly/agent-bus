# arxiv-program/research/2026-09-21/arxiv-deep/1504-summir-a-hallucination-aware-framework-for.md
## What it is (1-2 sentences)
A cs.IR paper (Kumar et al., 2026) presenting SUMMIR: a pipeline that scrapes sports news at scale, extracts categorized insights with sport-specific LLM prompts, verifies them against hallucination (FactScore + SummaC NLI), and ranks them by user interest with a PPO-fine-tuned permutation policy — on 281,163 insights across 800 cricket/soccer/basketball/baseball matches. Ledger verdict: ADAPT as GSE's pre-game content/insight pipeline.
## Key metrics/methods (formulas where given, else "not specified")
- Two-tier article validation: Qwen 2.5 32B Instruct first pass (precision 88.5%, recall 89.1%) → second pass GPT-4o / Qwen2.5-72B / Llama-3.3-70B / Mixtral-8x7B.
- Hallucination gate: FactScore (GPT-4o atomic verification vs source article) + SummaC-Conv sentence-level NLI entailment.
- SUMMIR ranking: six bounded features — semantic (all-MiniLM-L6-v2 + sports lexicon + FAISS), emotional intensity (roberta-base-go-emotions), sarcasm (T5-base; nullifies emotion when sarcastic), TF-IDF, buzzwords (10k-term lexicon via VADER/Afinn/SentiWordNet), NER (Pantheon popularity).
- ScoreNet: w = softmax(ℓ), f_ℓ(x) = Σ_{j=1..6} w_j x_j; reward R = σ(0.7·N_gold + 0.3·N_SN) over NDCG@k (k = max(1,⌊n/2⌋)); PPO fine-tunes Llama 3.2 1B (lr 2e-5, target_kl 0.2, cliprange 0.1, max_grad_norm 0.5, nucleus p=0.9/T=0.7).
- DCG_k(p,r) = Σ_{t=1..k} (2^{r_{pt}}−1)/log2(t+1); NDCG_k = DCG/IDCG.
## Data sources named
- 32,630 articles scraped via Google Search API (3-day window around each match) → 7,900 relevant articles across 800 matches (200 each: cricket, soccer, basketball, baseball); 996 manually labeled articles for validator selection.
- 281,163 structured insights (New Records, Key Match Events, Pre-game Insights, Post-match Reflections, Miscellaneous Highlights, Others); 4,750 ranking data points with gold ranks from Llama 3.3 70B.
- Code: https://github.com/nitish-iitp/SUMMIR; datasets and prompts public.
## Findings (numbers and facts, not vibes)
- Insight counts by extractor: GPT-4o 68,212; Qwen2.5-72B 77,546; Llama-3.3-70B 85,748; Mixtral-8x7B 49,657.
- Factuality: GPT-4o best — FactScore 95–97%, SummaC 60–72% across sports; Mixtral-8x7B worst 88–94% / 50–63%.
- Ranking: SUMMIR reward → NDCG@10 0.943, Recall@10 0.960, beating NDCG-only (0.911/0.920) and Recall-only (0.910/0.860) rewards.
- SUMMIR vs human: nDCG@3 0.649 vs 0.724 (approaches human); Recall@3 0.556 vs 0.758 (lags).
- Ablations: emotional intensity + named-entity popularity drive most ranking gain; failure modes: NE oversensitivity, sarcasm misclassification on colloquial text, semantic drift beyond 3–4 sentences, ScoreNet softmax instability on near-uniform inputs, PPO noise from inconsistent LLM gold labels.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL (hallucination gate: FactScore-style atomic verification of every extracted insight against its source article before it enters any draft — programmatic version of the trust-no-claims rule for public content)
- OTHER (content pipeline: two-tier article validation funnel + NFL-specific prompt templates + engagement-weighted ranking for @GalaxySportsHQ posts and daily write-ups)
- OTHER (improvement: replace LLM gold ranks with actual engagement data as ScoreNet/PPO supervision; add a GSE-voice feature as 7th ScoreNet input; add betting-market insight categories)
## Engine-actionable? (yes/no + one-line what)
yes — build `gse_insight_ranker.py` as the NFL pre-game content pipeline (scrape → two-tier validate → extract → hallucination-gate → SUMMIR-rank with engagement as gold signal); adopt if the gate catches ≥90% of planted false insights without dropping >15% of true ones and ranked posts correlate positively with engagement.
