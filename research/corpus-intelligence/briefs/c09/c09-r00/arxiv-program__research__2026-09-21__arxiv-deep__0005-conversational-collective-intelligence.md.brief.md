# arxiv-program/research/2026-09-21/arxiv-deep/0005-conversational-collective-intelligence.md
## What it is (1-2 sentences)
Full-paper deep read of arXiv:2511.03732v2 (Schumann et al., Unanimous AI, 2025): does AI-structured group deliberation (Hyperchat/Thinkscape) produce MLB forecasts that beat Vegas? Verdict recorded in the file: **REJECT** — vendor-authored, n=59, no preregistration, no control arm, uncorrected multiple comparisons.
## Key metrics/methods (formulas where given, else "not specified")
- Protocol: ~24 Prolific baseball fans per session, 5 subgroups of 4–5 + 1 AI "Conversational Surrogate" agent each (relays insights across subgroups, injects counterpoints); 5-min text deliberation per game; LLM-derived weighted mean predicted margin = collective forecast.
- High Confidence = predicted margin ≥ 1.5 runs (choice never justified/preregistered).
- Tests named: Poisson-binomial (High-Conf accuracy vs Vegas odds, p=0.020); 95% CIs; Cohen's d=0.82; hypothetical $100 flat-stake ROI.
- No equations derived in the paper.
## Data sources named
Proprietary Thinkscape.ai sessions: 15 sessions (Tue/Fri over 7 weeks from 2025-07-18), 60 MLB games predicted (1 rained out → 59), Vegas odds "from a major sportsbook" (unnamed). No dataset/code/transcripts published.
## Findings (numbers and facts, not vibes)
- 59 forecasts; 27 (46%) High Confidence, 32 (54%) Low Confidence.
- High Confidence: 78% accurate vs 57% average Vegas odds (Poisson-binomial p=0.020); 95% CI 59.2–89.4%; Low Confidence CI 25.5–57.7% (non-overlapping); Cohen's d=0.82.
- Moneyline $100/game on 27 High-Conf → 37% ROI, $997 profit; ATS → 63% accuracy, $1,245 profit, 46% ROI (p=0.037); fading all 32 Low-Conf picks → 23% ROI, $736.
- Favorite bias: 43/59 picks (73%) were Vegas favorites; High-Conf favorites 78%, Low-Conf favorites 41%.
- Interaction cell: High Conf + above-average messages/min (16 games): 88% vs 57% odds (p=0.010); High + below-average: 64%; Low + above-average (13 games): 31% vs 53% (fading → 69%, p=0.116 ns).
- Reviewer's arithmetic (labeled analysis, not paper claim): group overall 34–25 (57.6%) vs ~32.4 expected from Vegas — total edge negligible; 100% of outperformance concentrated in High-Conf slice; favorites picked overall ~26–17 (60.5%) ≈ naive always-pick-favorite rate.
- Critique: 78% = 21 of 27; 88% cell = 14 of 16; CI 59.2–89.4% includes near-baseline; threshold/rate-split/inverse-bet all post-hoc; participants unsupervised, could browse web (5-min sessions, no lookup prohibition stated); vig inflates 57% baseline; repeated measures ignored.
- GSE implementation spec (file's own): do NOT license Thinkscape; only testable idea is deliberation-intensity × confidence interaction — preregistered internal replication on NFL (≥100 games, ~7-pt High-Conf threshold, median message-rate split, pre-discussion poll control, primary test: High+high-deliberation accuracy vs closing odds, Poisson-binomial one-sided), then three-arm trial (deliberation vs silent poll vs play-money market) to separate mechanisms.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (crowd-forecasting method, rejected): the portable mechanism is deliberation-intensity × self-rated confidence as a confidence signal — vigorous debate that fails to converge is an inverse signal. Relevant to TRUST-SIGNAL intake only as a caution (crowd confidence claims need the control arm the paper lacked).
## Engine-actionable? (yes/no + one-line what)
No — verdict is REJECT; the one candidate mechanism (deliberation-intensity-gated confidence) is flagged for a cheap preregistered NFL replication experiment, not wiring.
