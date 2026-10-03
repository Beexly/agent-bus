# docs/arxiv-program/research/2026-09-21/arxiv-deep/0255-sportsmetrics-blending-text-and-numerical-data.md
## What it is (1-2 sentences)
An LLM evaluation benchmark (arXiv:2402.10979v2) that tests whether large language models can fuse long play-by-play narratives with numerical records — tracking game stats, maintaining a JSON working memory, and surviving adversarial perturbations (new scoring rules, swapped affiliations, shuffled narratives, renamed players).

## Key metrics/methods (formulas where given, else "not specified")
- Four tasks: (a) long-form narrative tracking — LLM fills a JSON stat object from full game play-by-play; (b) new scoring rules (basketball where every scoring action = 1 point; player-affiliation swaps of 2 players/team); (c) scrambled narratives — plays shuffled (timestamps preserved), non-scoring-play density varied at p ∈ {+20%, +50%, −20%, −50%}, NFL players renamed to science-fiction characters; (d) masked-recap fill-in via a three-step JSON working-memory scaffold (create → enrich + self-reflect → populate).
- Scoring aggregates used: Hollinger Game Score (team-adapted, NBA) and NCAA Passing Efficiency (NFL) — referenced, formulas not restated.
- Primary metric: average absolute deviation Δ between model-predicted and box-score values per stat (ΔPoints, ΔGScore, ΔYards, ΔATT, ΔCOMP, ΔTD, ΔINT, ΔPE; adversarial ΔNewRule, ΔSwap, ΔShuffle). No other equations stated.
- Models evaluated: Claude-2.1 (200k), GPT-4-1106-preview (128k), Gemini-Pro (32k), GPT-3.5-Turbo-1106 (16k), GPT-3.5-Turbo-0613 (4k), Mistral-7B-Instruct-v0.1 (8k), Llama-2-13B-Chat (4k).

## Data sources named
- NBA + NFL play-by-play scraped from ESPN.com, 2002–2023: 28,492 NBA games, 5,867 NFL games. Schema: timestamped play descriptions, player actions, team affiliations, box scores. Test set: 100 randomly selected games per sport. NBA games average 466 plays / 6,229 tokens (max 7,322); NFL games average 173 plays / 6,166 tokens (max 7,659). Data "available through ESPN's archives" — the assembled benchmark itself is not clearly released; no code or dataset link.

## Findings (numbers and facts, not vibes)
- [TRUST-SIGNAL] NBA (ΔPoints/ΔGScore; teams typically score 100–120 points): GPT-3.5-Turbo-1106 ΔGScore 33.50 / ΔPoints 9.45 (best points); Gemini-Pro slightly better on GScore at 32.30; Claude-2.1 55.16/21.73; GPT-4-1106-preview 51.97/25.17 — with 79% of GPT-4's returned JSON objects containing zeros/nulls on long games. Llama-2-13B: ΔPoints 70.77, ΔGScore 110.69.
- [TRUST-SIGNAL] NBA adversarial (ΔNewRule/ΔSwap/ΔShuffle on points): GPT-3.5-Turbo-1106 14.10/13.53/9.89; Claude-2.1 22.28/17.12/31.11; GPT-4-1106-preview 14.55/39.91/49.57.
- [TRUST-SIGNAL] NFL (teams average 200–250 passing yards/game): GPT-4-1106-preview best — ΔYards 34.77, ΔATT 4.44, ΔCOMP 2.96, ΔTD 0.17, ΔINT 0.13, ΔPE 14.33; Claude-2.1 ΔYards 52.53; Llama-2-13B ΔYards 244.48, ΔPE 191.76. Authors attribute the GPT-3.5-vs-GPT-4 reversal across sports to scoring frequency (frequent basketball scoring harder for GPT-4 to track; sparser football scoring easier).
- [TRUST-SIGNAL] Robustness: performance degrades as non-scoring-play density increases (needle-in-haystack); renaming players "significantly decreases all models' performance," suggesting models lean on pretraining name familiarity rather than the provided play-by-play. Recap fill-in: Claude-2.1 strongest; Mistral-7B best among standard models; GPT-4 and Llama-2 struggle to build working memory (hallucinated fields).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the task design (adversarial stat-tracking, masked-recap fill-in) ports directly as a QC harness for hallucinated statistics in GSE's LLM-generated content (X posts, clip scripts, DFS write-ups).
- OTHER: a content-pipeline evaluation method, not a predictive model — no probabilities, features, or calibration relevant to the engine itself.

## Engine-actionable? (yes/no + one-line what)
Yes — build a "Stat-Claim Harness" that gates LLM-generated stat claims in GSE content before publication, routing claims the harness shows the model gets wrong at >5% to deterministic template rendering from nflverse instead of free generation.
