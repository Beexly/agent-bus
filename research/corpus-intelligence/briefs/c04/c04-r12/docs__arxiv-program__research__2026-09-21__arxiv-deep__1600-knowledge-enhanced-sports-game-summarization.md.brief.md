# docs/arxiv-program/research/2026-09-21/arxiv-deep/1600-knowledge-enhanced-sports-game-summarization.md
## What it is (1-2 sentences)
Ledger of arXiv:2111.12535 (Wang et al., WSDM '22): KES — a knowledge-corpus-enhanced sports commentary summarizer that retrieves from a structured corpus (14,724 player passages, 523 team articles) via NER + entity linking and fuses knowledge embeddings into an mT5 rewriter, trained on K-SportsSum (7,854 human-cleaned Chinese commentary–news pairs). Verdict in the ledger: ADAPT — adaptable to enriching GSE's generated NFL content with roster/player knowledge, but only with a faithfulness guard the paper lacked.
## Key metrics/methods (formulas where given, else "not specified")
- NLev(entity,title) = Lev(entity,title)/max(len(entity),len(title)); keep PER/ORG from FLAT NER (trained on MSRA, 94.21 F1); entity-linking thresholds λp=0.2, λo=0.25 against game-linked candidate passages/articles.
- Rewriter input embedding: z_k = LN(z_token + z_pos + z_seg + z_know), where z_seg ∈ {[Player],[Team],[Time],[Other]} learnable segment embeddings, z_know = averaged RoBERTa-[CLS] sentence embeddings of the linked passage/article; trained with NLL loss.
- Selector: RoBERTa-Large over target sentence + sliding context window (avg token embeddings → sigmoid, cross-entropy); pseudo-labels via BERTScore argmax in [h_i, h_i+3].
- Ablations: remove segment embeddings (−0.53 avg ROUGE), remove knowledge embeddings (−0.72), remove both (−1.71), PGN rewriter instead of mT5 (−2.92), TextCNN selector (−2.22).
## Data sources named
K-SportsSum: 7,854 human-cleaned Chinese commentary–news pairs (from 8,640 Sina Sports Live games 2012–2020; dual-annotator + senior adjudicator; 6,854/500/500 split). Knowledge corpus: 14,724 player passages (Sina knowledge cards → templated sentences, avg 15.05 sentences/283 tokens) + 523 team Wikipedia articles (manually aligned by 3 students + 2 experts; avg 18.28 sentences/1,342 tokens). Released: github.com/krystalan/K-SportsSum.
## Findings (numbers and facts, not vibes)
- Knowledge-gap audit (300 samples): 14.7% of news needs team/home-away resolution, 6.3% player info, 4.7% team info.
- KES on K-SportsSum: ROUGE-1 48.79, ROUGE-2 21.04, ROUGE-L 47.17 vs SportsSUM 44.89/19.04/44.16 (+3.7 avg); on SportsSum: 47.43/20.54/47.79 vs 43.17/18.66/42.27.
- Human study (5 masters × 50 samples): KES > KES(w/o know.) > SportsSUM on informativeness/fluency/overall (3-pt scale).
- Caveat: qualitative analysis catches a factual error — KES injected "De Yang is 1.7 meters" when his actual height is 1.8 m (authors: pattern of adding knowledge learned, correctness not guaranteed).
- Ledger's limitations: Chinese-only; implicit knowledge fusion hallucinates facts; entity linking by edit distance brittle to nicknames/abbreviations (the cases needing knowledge most); knowledge corpus frozen in time (stale rosters).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Knowledge-fused content generation: NFL knowledge corpus (32 teams + ~1,700 active players as structured cards: bio, contract, season stats, injury history + Wikipedia/team-page text), English NER + entity linking over the game's two rosters, knowledge injection via the z_seg/z_know recipe into seq2seq generation of game recaps, injury explainers, matchup previews. Distinct from ledger 1599 (SportsSum2.0 — companion paper, non-overlapping method).
- [OTHER] Faithfulness requirement: entailment-check every injected fact against the knowledge card before emission (fixes the documented 1.7 m-class hallucination) — the ledger converts this to ADAPT rather than ADOPT.
## Engine-actionable? (yes/no + one-line what)
Yes — adapt KES to English NFL content with an added per-fact entailment filter at decode time and live weekly knowledge-corpus refresh; gate: generated recaps rated more informative than knowledge-blind baseline with zero entailed-fact errors on a 50-game sample.
