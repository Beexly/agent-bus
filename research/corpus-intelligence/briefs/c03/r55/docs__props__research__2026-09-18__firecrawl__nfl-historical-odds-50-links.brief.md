# docs/props/research/2026-09-18/firecrawl/nfl-historical-odds-50-links.md
## What it is (1-2 sentences)
Firecrawl session catalog of 50 verified public URLs for historical NFL odds — closing-odds archives, timestamped line-movement histories, downloadable datasets, ESPN public API endpoints, Pinnacle docs, GitHub modeling repos, and academic market-efficiency studies — as the historical complement to the repo's live Odds API implementation.
## Key metrics/methods (formulas where given, else "not specified")
- 50 URLs grouped A–I: (A) multi-season closing archives, (B) timestamped line-movement histories, (C) downloadable datasets, (D) odds reference/archive pages, (E) free ESPN API endpoints, (F) Pinnacle, (G) GitHub modeling repos, (H) research source-map docs, (I) academic studies.
- Named "five strongest finds": (1) flancast90's pre-scraped SportsbookReview archive (2011–2021): real opening-to-closing spread/total pairs + closing moneylines across books — best free open/close dataset; (2) bobby-king3's 2025–2026 market-movement tracker: 1.8M+ rows, 636 snapshots, 30+ operators at 4x daily — only high-frequency movement dataset; (3) Covers Sports Odds History: game odds 1952-present by season/franchise — deepest free closing-line archive; (4) nflverse games.csv (1999-present): one download with spread/total/moneyline, closing-line provenance caveat documented; (5) VegasInsider per-game line-movement pages: timestamped spread/total/ML/price change logs + Wayback/CDX reconstruction playbook.
- Academic anchors: arXiv 1211.4000 "The Performance of Betting Lines for Predicting NFL Games" (2,560 games 2002–2011, opening AND closing lines, open-vs-close MSE); PLOS ONE 2023 "A statistical theory of optimal decision-making in sports betting" (peer-reviewed closing-line market-efficiency methodology).
- ESPN undocumented public endpoints: scoreboard, per-game odds JSON, odds movement history JSON (`.../odds/1002/history/0/movement?limit=100`), team odds-records — treat as unstable.
- Caveats recorded: nflverse games.csv line provenance uncertain (use as first pass, validate against closers); Wayback/CDX methodology documented for VegasInsider reconstruction; paid Odds API coverage vs free alternatives compared in SOTA research.
## Data sources named
Covers Sports Odds History; VegasInsider line-movement pages; thespread.com archived movement reports; Action Network archived odds/prices; OddsPortal (per-game open+close back to ~2008); Pro Football Reference yearly games hubs; Kaggle Spreadspoke (spreads since 1979); nflverse games.csv; willvernon/nfl_scores_lines (1999–2024/25); aussportsbetting.com (2006–2020, 45 fields/game incl. weather); repole.com sun4cast (1978–2013); nfl-math-spencerronit (1,855 games 2018–2024 closing totals); RotoWire; GitHub repos: flancast90/sportsbookreview-scraper, bobby-king3/nfl-market-movement-tracker, nkgilley/sbrscrape, anaborne/nfl-pricing-model, speencers, koltbern15, isai-salazar, shaanj2469 (model MAE within 0.28 pts of Vegas close), macn84, hienha34 (3,738 games, 45 fields); sharp-ev-picks historical-odds audit; ryanpmcintire data_source_scout_v5; gesmith0606 SOTA research + PROPS_DATA_PLAN (props-odds history mostly paid); Pinnacle API docs (account-gated API).
## Findings (numbers and facts, not vibes)
- Spreadspoke CSV: spreads since 1979 (Kaggle free account required).
- Covers archive: 1952-present; 1952–1977 via Newspapers.com night-before lines; 1978-present via PFR closing odds.
- bobby-king3 tracker: 1.8M+ rows, 636 snapshots, 30+ operators, 4x daily, 2025–2026 season.
- flancast90 archive: 2011–2021, per-book spreads/totals/moneylines/prices, real open→close pairs.
- shaanj2469 power-ratings model: MAE within 0.28 pts of Vegas closing lines — closing-line benchmark quality proof.
- Aussportsbetting: 45 fields/game (weather etc.) — richest feature set beyond lines.
- arXiv 1211.4000: 2,560 games 2002–2011 with BOTH opening and closing lines + open-vs-close MSE.
- Action Network Bet Labs systems content is PAYWALLED (primer itself free); Action Network archives give lookahead-line snapshots ideal for lookahead-vs-close studies.
- Session access policy: public surfaces only, login-gated items marked, no bypass instructions.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (OTHER) The five-strongest-finds ranking is a ready-made ingestion priority list for the historical-odds backfill: SportsbookReview open/close pairs first, Bobby King movement tracker second, Covers third.
- (OTHER) Aussportsbetting's 45-field CSV (incl. weather) is a feature source for the total-signal wiring program's off-field intake lane.
- (OTHER) arXiv 1211.4000 and PLOS ONE 2023 give the peer-reviewed CLV/open-vs-close MSE methodology — the calibration literature the engine's CLV math should cite/implement.
- (OTHER) Wayback/CDX reconstruction playbook for VegasInsider boards extends the movement history back to 2005–2016 where no API covers.
- (OTHER) OddsPortal per-game opening+closing odds back to ~2008; Action Network lookahead snapshots enable lookahead-vs-close studies.
## Engine-actionable? (yes/no + one-line what)
Yes — execute the five-strongest-finds ingestion priority order as the historical-odds backfill for the CLV grader and projection backtests (SportsbookReview open/close pairs → Bobby King 1.8M-row tracker → Covers archive), and implement the arXiv 1211.4000 open-vs-close MSE methodology for market-efficiency calibration.
