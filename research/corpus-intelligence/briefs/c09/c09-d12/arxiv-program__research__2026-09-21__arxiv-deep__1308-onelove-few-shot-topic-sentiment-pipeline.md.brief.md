# arxiv-program/research/2026-09-21/arxiv-deep/1308-onelove-few-shot-topic-sentiment-pipeline.md
## What it is (1-2 sentences)
Validated few-shot LLM pipeline (BERTopic topic discovery + Mistral-7B with 3-shot/translation/CoT for stance labeling, no training data) for measuring public topics and stance toward a fast-moving sports controversy as it unfolds; verdict ADAPT for GSE's real-time event/narrative monitoring on X.

## Key metrics/methods (formulas where given, else "not specified")
- Pipeline: BERTopic (multilingual embeddings, UMAP, HDBSCAN, CountTokenizer 1–3 grams) → few-shot LLM stance classification.
- Mistral-7B-Instruct-v0.2 evaluated with: base prompt, +3-shot examples, +English translation, +Chain-of-Thought (Kojima et al. 2022), +all combined; compared vs two fine-tuned BERT sentiment models and GPT-3.5/GPT-4 with full prompt stack.
- No equations stated; assumptions: tweet stance annotatable (κ=0.68); stance toward armband is the right construct (stance-detection framing, not generic sentiment).

## Data sources named
132,150 German tweets, Nov 20 – Dec 18 2022 (FIFA World Cup Qatar), collected via the then-free official Twitter API with 30-day lookback (retweets/replies/quotes and liveticker accounts excluded); 148-tweet gold set annotated by two native German speakers (63 in favor / 15 against / 70 neutral; IAA κ=0.68); 600-tweet topic-validation labels across 7 topics; dataset released dehydrated (IDs only).

## Findings (numbers and facts, not vibes)
- Sentiment-model accuracy/F1: nlptown BERT-multilingual 46.4/19.6; oliverguhr german-sentiment-bert 62.6/43.9; Mistral-7B zero-shot 64.9/47.3; +3-shot 67.1/50.7; +translation 69.8/54.7; +CoT 74.3/61.5; +all three 76.1/64.2; GPT-3.5 (full stack) 59.9/39.9; GPT-4 (full stack) 80.2/70.3.
- Per-class AUC (GPT-4): 0.697 against, 0.769 in favor, 0.747 neutral.
- Substantive: discussion shifted from armband/LGBT topics to "politics in sports" after the Nov 21 2022 ban; sentiment drifted subtly toward neutral; more support than opposition but support faded over time.
- Limitations: German-only; X demographics unrepresentative; replies/quotes excluded; dehydrated dataset needs paid X API; "against" class tiny (15 tweets) and hardest.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: stance-classification framing (vs generic sentiment) applies to injury/trade rumor monitoring — e.g., "is this player actually injured?" stance per tweet, not just sentiment.
- OTHER (signal desk): BERTopic + few-shot LLM as a real-time narrative/intake stream feeding the event bus; INFERENCE — stance drift timing (topics shift after a trigger event) maps to line-move timing around news breaks.

## Engine-actionable? (yes/no + one-line what)
Yes — stand up BERTopic + few-shot stance classifier on game-day X windows (e.g., injury storylines), human-label a ~150-tweet gold set per event type, and adopt if pilot clears 70% stance accuracy with minority-class F1 ≥ 0.55.
