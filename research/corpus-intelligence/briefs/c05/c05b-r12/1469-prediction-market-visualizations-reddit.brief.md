# arxiv-program/research/2026-09-21/arxiv-deep/1469-prediction-market-visualizations-reddit.md
## What it is (1-2 sentences)
Deep read of Sah, Karduni, Markant & Dou (arXiv:2608.16814v1), a qualitative study of ~12,000 r/Kalshi posts / 96,000 comments analyzing how retail prediction-market bettors misread market visualizations (price charts, order books, probability displays). Verdict in file: ADAPT — as concrete calibrated-uncertainty UI rules for GSE's posted picks and website.
## Key metrics/methods (formulas where given, else "not specified")
No equations — qualitative thematic analysis: VLM-assisted filtering of visualization posts → 360 visualization-related posts from 5,600 posts containing visual media → manual open coding → 66 annotated snippets (codes non-exclusive) → theme prevalence counts. No predictive model, no controlled experiment, no statistical inference beyond code frequencies.
## Data sources named
Corpus: ~12,000 posts and ~96,000 comments from r/Kalshi; 5,600 posts contained visual media; VLM filter yielded 360 visualization-related posts; thematic findings based on 66 annotated snippets. One platform (Kalshi), one community. No behavioral/trading outcome data.
## Findings (numbers and facts, not vibes)
- Theme prevalence (of 66 snippets, non-exclusive): chart sensemaking 35; chart-value interpretation 32; external context 22; outside domain knowledge 18; decision reactions 17; probability comprehension 11; skepticism/credibility 11; visualization usability 9.
- Core empirical finding: users systematically confuse market price with probability, payout with expected value, current cash-out quotes with settlement value, and ignore liquidity and the settlement data source.
- Limitations named in file: single community/platform (r/Kalshi = most analytically engaged retail bettors, not representative of casual users); public comments ≠ actual behavior, no trading records link confusion to losses; 66 snippets is a thin base; crypto/polymarket-style AMM users may confuse different things.
- Reproducible test proposed: A/B test labeled probability display vs current format on GSE's X/website posts; metric = follower confusion proxies (reply-question rate about "what does this mean" + click-through on pick card); 4 weeks of NFL content.
- Acceptance gate: ADOPT the display rules if the labeled format reduces clarification-question replies by ≥25% vs control with no drop in engagement rate.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: retail bettors misreading probabilities directly costs follower trust — GSE publishes picks with probabilities on X and the website, so misread probability displays erode trust in the brand.
- TRUST-SIGNAL: concrete display rules — always label "model probability" vs "market-implied probability" vs "price" as three distinct numbers; show line source, timestamp, and liquidity caveat next to any market number; state settlement/resolution rules for props/contests; pair every probability chart with one-line plain-language context ("this means the model thinks X wins ~3 times in 10").
- OTHER: improvement experiment — run the same thematic coding on replies to GSE's own posted pick cards (a corpus Garrett already owns) to build a GSE-specific confusion taxonomy tuned to his actual audience.
## Engine-actionable? (yes/no + one-line what)
Yes — apply the four display rules (model prob vs market-implied prob vs price labeling; line source/timestamp/liquidity caveat; settlement rules; plain-language context line) to GSE's posted picks/website (~2 days effort, no modeling), then A/B test with the ≥25% clarification-reply-reduction gate.
