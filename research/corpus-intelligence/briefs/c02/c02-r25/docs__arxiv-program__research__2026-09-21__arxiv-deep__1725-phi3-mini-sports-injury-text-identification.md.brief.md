# docs/arxiv-program/research/2026-09-21/arxiv-deep/1725-phi3-mini-sports-injury-text-identification.md

## What it is (1-2 sentences)
A deep-read note on Brogly et al. (2025, arXiv:2504.08764v1), which tests whether zero-shot phi-3-mini scoring 9.35M Canadian news headlines 1–10 on health topics can triage sports-injury texts for manual review, finding the SLM wildly overconfident on sports injury (human mean 1.87 vs SLM 9.87) with binary agreement as low as 6.69%. Ledger verdict: **ADAPT** strictly as a recall-oriented triage filter in a cascade (never a labeler), with human/LLM review downstream.

## Key metrics/methods (formulas where given, else "not specified")
- Zero-shot numeric scoring with phi-3-mini (no fine-tuning): prompt "On a scale of 1-10, is the following about (T)? Report only the number:" across 7 topics (medicine/health, cannabis, sports injuries, opioids, firearm injury, traffic accidents, hospitalization + sentiment).
- Filtering: low-filter = topic score > 7; high-filter = topic > 7 AND cross-topic Boolean conditions (e.g., sports-injury high-filter requires medicine/health > 7, cannabis = 1, opioids = 1).
- Agreement metrics: binary % agreement, Spearman ρ on 1–10 ratings, Fleiss's κ, ICC (two-way random effects).
- Throughput: ~475K texts/week per GTX 1080Ti instance; ~950K/week per RTX 4090; 9.35M texts took ~4 weeks on 2×1080Ti + 1×4090.

## Data sources named
- 9,353,430 Canadian news headlines/links from Common Crawl (Jan 3, 2017 – Jun 27, 2023, every Tuesday and Friday), 236 domains. Not released.
- Human eval: 7 raters (health-science graduates); 1,144 medicine/health + 1,117 sports-injury texts; inter-rater ICC 0.758/0.640, Fleiss's κ 0.789/0.648.

## Findings (numbers and facts, not vibes)
- [OTHER] Binary agreement (human concurs text is related): medicine/health low-filter 54.68%, high-filter 74.58%; sports-injury low-filter 6.69%, high-filter 24.01% — the SLM's sports-injury positives are wrong ~93% unfiltered, ~76% even filtered.
- [OTHER] Spearman ρ (SLM vs human): med/health low 0.2255, high 0.3854; sports-injury low 0.3413, high 0.0318 — the Boolean high-filter collapsed the sports-injury ranking signal to negligible.
- [OTHER] Overconfidence gap: sports-injury low-filter human mean 1.87 vs SLM mean 9.87.
- [OTHER] Humans agree with each other substantially (κ 0.789/0.648), so the disagreement is the SLM's problem.
- [OTHER] Serendipitous finding: the SLM rated some "junk" texts (e.g., "Reporter_Name, The Associated Press") highly — investigation showed they were sports/health reporters' bylines; the model picked up a real latent signal (reporter identity) the task did not intend.
- [TRUST-SIGNAL] The note's rejection gates: REJECT the Boolean high-filter for sports injury (ρ = 0.03 — a worse filter); REJECT using uncalibrated SLM 1–10 scores as model inputs (1.87-vs-9.87 mean gap); ADAPT proceeds only if a GSE test shows recall ≥ 0.95 at an affordable operating point.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: the recall-oriented cascade pattern (cheap SLM triage at score ≥ 7 → expensive LLM extraction, 4–6 low-priority queue, < 4 discarded) is the cost architecture for GSE's injury-news ingestion — SLM filters, LLM extracts.
- TRUST-SIGNAL: the byline discovery — author/source identity as a predictive feature for sports-injury news — should be made deliberate (reporter-specialty prior × SLM score). The uncalibrated-scores-are-not-features rule generalizes to any score the engine consumes.
- OTHER: the throughput math (~950K texts/week/GPU) must be replicated on GSE hardware before committing GPU fleet sizing.

## Engine-actionable? (yes/no + one-line what)
Yes — deploy a modern SLM as a recall-oriented injury-text triage layer (score ≥ 7 → LLM extraction pipeline) with byline/source features added deliberately, gated by a 5,000-text GSE test requiring recall ≥ 0.95.
