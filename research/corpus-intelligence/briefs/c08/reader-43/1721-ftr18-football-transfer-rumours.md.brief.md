# docs/arxiv-program/research/2026-09-21/arxiv-deep/1721-ftr18-football-transfer-rumours.md
## What it is (1-2 sentences)
Dataset-construction paper proposing FTR-18, a multilingual (English/Spanish/Portuguese) corpus of 2018 summer-window football transfer news + Twitter reactions with veracity labels resolved via official UEFA registration. No classifier is trained — the contribution is the rumour pipeline taxonomy (detection → tracking → stance → veracity → evidence retrieval) and the hedging-language lexicon used by journalists reporting unverified transfers.

## Key metrics/methods (formulas where given, else "not specified")
Not specified (no equations, no trained model, no precision/recall). Veracity rule: rumour True iff the transfer to that destination is confirmed in the 2018 summer transfer window, or the player stays for "staying" rumours. Collection protocol: manual rumour identification, daily semi-automated headline-filtered news harvesting, Twitter streaming-API crawl per rumour, post-window veracity labeling.

## Data sources named
3,045 news articles (1,517 EN, 747 ES, 781 PT) from 96 news organizations, June 24–August 31, 2018; 2,064K tweets (1,130K EN, 677K ES, 257K PT); 304 transfer moves involving 175 players; 12 monitored clubs (2017–18 UCL group stage clubs: Chelsea, Liverpool, Manchester City, Manchester United, Tottenham, Atlético Madrid, Barcelona, Real Madrid, Sevilla, Benfica, Porto, Sporting CP); GitHub scrapers at github.com/dcaled/FTR-18.

## Findings (numbers and facts, not vibes)
Dataset scale only; zero experimental results. Qualitative observations: pervasive attribution hedging ("according to reports/sources," "linked to," "reports suggest"), echo effect of outlets re-reporting third-party rumours as news, question-headlines concentrated in Spanish media, cascading conditional-move narratives ("club will sell X to fund Y"). Veracity annotation was pending at publication.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: hedging lexicon as features for a rumor-confidence scorer (hedged phrasing → lower extraction confidence); source-attribution graph to discount echo confirmations.
- OTHER: injury/trade rumor pipeline taxonomy (detection → tracking → stance → veracity → evidence retrieval) portable to NFL rumor desk; veracity-via-official-registration maps to official inactive lists and roster transactions as rumor ground truth.

## Engine-actionable? (yes/no + one-line what)
yes — Build the five-stage rumor pipeline with a hedging index that down-weights rumor influence in downstream models, plus echo-graph source discounting.
