# docs/arxiv-program/research/2026-09-21/arxiv-deep/0502-do-they-mean-us-interpreting-referring.md

## What it is (1-2 sentences)
Govindarajan et al. (2024, arXiv:2406.17947): builds a tagger resolving ambiguous pronouns to in-group ("we/us") vs out-group ("they/them") team references in NFL Reddit game-thread comments, then measures how reference rates co-move with nflFastR live win probability. File verdict: **REJECT** — descriptive linguistics, not predictive signal: WP is the grounding variable, so there is no evidence of incremental value for win/spread/total models.

## Key metrics/methods (formulas where given, else "not specified")
- Two taggers per comment → labels (none / in-group / out-group, plus pronoun-form subtypes like we[in], they[out]): (a) GPT-4o prompting with WP supplied numerically or linguistically plus temperature scaling variants; (b) fine-tuned Llama-3-8B (batch size 4, sequence length 2,560, cosine LR 1e-5, 10 warmup steps, weight decay 0.1, max 2 epochs, early-stopping patience 3; two A40 GPUs, ~1.5 hours per run).
- Analysis: OLS slopes of per-WP-bin reference rates on WP over 100k silver-labeled comments; R² reported. No predictive (forecasting) validation — contemporaneous correlation only.

## Data sources named
- Corpus: 6M+ comments from 1,104 game threads across all 32 team subreddits, 569 games, 2021–22 and 2022–23 NFL seasons; aligned to nflFastR live win probability by comment timestamp.
- Expert annotations: 1,499 comments (26.7% with no relevant team reference; of referenced, 76.3% in-group, 14.6% out-group); split 1,181 train / 318 test.
- Crowd annotations: 3 annotators per comment; Fleiss κ = 0.69; gold-match accuracy 0.65 ± 0.005.
- Silver-labeled: 100,000 comments tagged by the best model for the WP-correlation analysis.
- Code/data: https://github.com/venkatasg/intergroup-nfl (stated).

## Findings (numbers and facts, not vibes)
- Tagging (Table I, best values as printed): GPT-4o with linguistic-WP + temperature scaling 69.0 (1.1); fine-tuned Llama-3-8B with numeric WP 71.0 (1.0) — modestly exceeds average crowd agreement with gold (0.65).
- Slopes of reference rate on WP (Table II, scaled ×10⁻⁴, with R²): any reference −19.3, R² 0.72; none 2.4, R² 0.65; in-group −2.8, R² 0.31; we[in] −2, R² 0.61; out-group 2.5, R² 0.56; they[in] −0.3, R² 0.15; they[out] 0.4, R² 0.25.
- Paper's interpretation: as WP rises, fans make fewer references overall and shift from in-group "we" talk toward out-group references.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: adjacent to the corpus gap #12 ("text/news as features beyond the price") but does not fill it — it studies fan *reaction* text grounded on WP, not news text as a predictive feature; GSE already produces the variable (WP) the paper treats as ground truth. The correct design for the text lane is the reverse: pre-game text embeddings tested for incremental log-loss on top of market-implied probabilities with strict time cutoffs.
- QB-BEHAVIOR: tagged as adjacent curiosity only — this is fan crowd psychology (pronoun shifts by live WP), not quarterback behavior; INFERENCE: could feed a sentiment/crowd-mood feature family for live-betting contexts, but no predictive evidence exists.

## Engine-actionable? (yes/no + one-line what)
No — no out-of-sample predictive test of any kind; information flows from WP to text, so no incremental signal over GSE's existing WP inputs is even hypothesized, and the ~71% tagger accuracy leaves the silver-label analysis fragile.
