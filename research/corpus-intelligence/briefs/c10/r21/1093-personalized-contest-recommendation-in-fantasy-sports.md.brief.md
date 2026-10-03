# arxiv-program/research/2026-09-21/arxiv-deep/1093-personalized-contest-recommendation-in-fantasy-sports.md
## What it is (1-2 sentences)
Full-read ledger of Srilakshmi et al. (arXiv:2508.14065v1), which proposes WiDIR — a wide-and-deep multi-branch learning-to-rank model for personalized fantasy contest recommendation on Dream11, validated on ~1B joins and a 4-arm online A/B test. Verdict in file: ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- WiDIR: wide linear branch (memorizes feature interactions) + three deep branches — player tower, contest tower, player–contest interaction tower — embeddings concatenated into a final scoring layer.
- Pairwise hinge loss: max(0, 1 − s_i(c) + s_i(c′)), where s_i(c) is the score of contest c for user i and c′ is a lower-ranked contest.
- Offline evaluation: precision/recall at 1, 3, 5, 10. Online: 4-arm A/B (control, Popular, LightGBM ranker, WiDIR), 1M players per cohort, 6 weeks. Serving: rankings within 10 ms; inference restricted to users active in the previous month.
## Data sources named
- Dream11 production data (proprietary): train ~1B joins, 100k players, 1.5M contests; test ~0.5B joins, 100k players, 0.9M contests; ~12 mo train / 2 mo validation / 6 mo test, time-ordered.
- Features: 107 player features, 11 contest features, 9 player–contest interaction features. Candidate list fixed at 100 contests (50/100/200 evaluated).
## Findings (numbers and facts, not vibes)
- WiDIR beat Popular and LightGBM offline (P/R@k) and won the online A/B — the paper reports the win via plots only; exact numeric lifts not stated in text (chart-read only).
- Scale: ~1B training joins; serving latency ≤10 ms; inference cohort = users active in the previous month.
- Ledger's acceptance gate: ADAPT if an offline WiDIR-style model beats the LightGBM baseline by ≥5% relative on P/R@5 on a time-ordered test window; REJECT if a well-tuned GBM wins at GSE's data scale.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Wide+deep three-tower ranking architecture with pairwise hinge loss on implicit feedback: OTHER (product/recommender capability — personalized pick feed, notification prioritization — not prediction engine).
- 1B-join scale validates the design but advantage demonstrated only at that scale: OTHER (transfer risk).
- Add calibration head (isotonic/Platt) to convert rankings to P(join) thresholds: TRUST-SIGNAL (calibrated notification expected value).
## Engine-actionable? (yes/no + one-line what)
No for the prediction engine; yes for product — adapt the WiDIR architecture (not weights) for GSE's personalized pick-feed/notification ranking with a pairwise hinge loss on engagement logs, with a ≥5% relative P/R@5 gate over LightGBM before adoption.
