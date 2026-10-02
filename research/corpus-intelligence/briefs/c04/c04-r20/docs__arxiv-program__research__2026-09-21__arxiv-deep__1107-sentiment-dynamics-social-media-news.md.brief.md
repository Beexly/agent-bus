# docs/arxiv-program/research/2026-09-21/arxiv-deep/1107-sentiment-dynamics-social-media-news.md
## What it is (1-2 sentences)
A deep-read ledger of arXiv:1908.08147v1 (Kumar et al. 2019), a descriptive study of sentiment in ~0.15M Facebook posts and 1.13B reactions across five news channels. Verdict: **REJECT** — purely descriptive with no predictive task, no held-out evaluation, and no transferable method; replaced by ledger 1308 (few-shot LLM topic+stance pipeline for live sports-event social data).

## Key metrics/methods (formulas where given, else "not specified")
- VADER sentiment scoring of posts and comments, scores mapped to integer [-5,5].
- LDA topic modeling; optimum k=10; human topic precision 80.3%; relevance weight λ=0.6.
- Post/comment sentiment correlation per channel: CNN 0.97, Fox 0.98, Economist 0.95, NYT 0.97, NPR 0.93 (claimed p<.05).
- No predictive model, no held-out evaluation, no equations of the transferable kind — "not specified" beyond the descriptives.

## Data sources named
~0.15M Facebook posts and 1.13B reactions. Post counts by channel: CNN 33,324; NPR 18,266; Fox 26,525; Economist 24,272; NYT 47,522.

## Findings (numbers and facts, not vibes)
- Fox: negative posts 40%; NPR: positive 43%, negative 28%.
- Post/comment sentiment correlations ~0.93–0.98 across all five channels (CNN 0.97, Fox 0.98, Economist 0.95, NYT 0.97, NPR 0.93), claimed p<.05.
- Ledger's critique: correlations ~0.95+ are likely artifacts of the normalized engagement metric and a common audience, not discovered signal; engagement is normalized, removing the scale prediction needs; p<.05 on N≈10^5 correlations is meaningless (any correlation is "significant" at that N).
- Rejection grounds: purely descriptive — no predictive task, no held-out evaluation, no model applicable to new data; object of study is news-channel Facebook audience behavior, not sports outcomes, markets, or fan sentiment with a prediction horizon.
- Replacement: ledger 1308 — arXiv:2408.02520v1, "OneLove beyond the field" (few-shot LLM topic+stance pipeline for live sports-event social data), described as a directly operational NLP read.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Nothing transferable — the study's object is news-channel audience behavior, not sports, markets, or fan sentiment with a prediction horizon: **OTHER**.
- The sports-social-NLP need is covered by replacement ledger 1308: **OTHER** (lane covered elsewhere).
- No QB behavioral, coaching, OL, trust-signal, or scheme content.

## Engine-actionable? (yes/no + one-line what)
No — REJECT: descriptive-only, no predictive model; the live sports social-data NLP lane is covered by replacement ledger 1308 instead.
