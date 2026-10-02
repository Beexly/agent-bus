# docs/arxiv-program/research/2026-09-21/arxiv-deep/1105-sportsense-realtime-detection-nfl-events.md
## What it is (1-2 sentences)
Ledger of arXiv:1205.3212v1 (Zhao, Zhong, Wickramasuriya, Vasudevan 2012), "SportSense: Real-Time Detection of NFL Game Events from Twitter." Two-stage matched-filter recipe for real-time touchdown detection from tweet-rate time series; verdict ADAPT — validated event-detection recipe transferable to GSE's live injury/news detection, with 2012 Twitter assumptions needing modernization.
## Key metrics/methods (formulas where given, else "not specified")
- Stage 1: keyword-based tweet retrieval (claimed 60% recall, <5% irrelevant-tweet false-positive rate).
- Stage 2: matched-filter event detector on per-second tweet-rate time series, plus a combined detector fusing multiple signal components. Exact equation-level template not stated in paper.
- Historical search variant: window=30, threshold=8. Manual timing of touchdowns as ground-truth labels.
- Validation: leave-one-out cross-validation over 18 games / 100 touchdowns; time-ordered by construction (streaming simulation).
## Data sources named
18 NFL games, 100 touchdowns, manually timed as ground truth. Tweets collected via Twitter streaming API filtered by game keywords (2011–2012 data).
## Findings (numbers and facts, not vibes)
- [TRUST-SIGNAL] LOOCV: combined detector 98% true-positive / 9% false-positive; single matched filter 96% TP / 13% FP.
- [TRUST-SIGNAL] Keyword retrieval: 60% recall, <5% FP rate. Historical search (window 30, threshold 8): 97% TP, <4% FP.
- [OTHER] Latency: average detection delay ~45 seconds; 60% of events within 40 seconds; all events detected within 90 seconds.
- [TRUST-SIGNAL] Limitations: small event set (100 touchdowns, 18 games); 2011–2012 Twitter API and tweet volumes — today's X API is paid, rate-limited, and tweet distribution shifted (bots, engagement farming); manual timing may bias latency favorably; keyword recall of 60% means 40% of signal discarded upstream; events are easy-mode (touchdowns) — injuries, controversial calls, news were not tested.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] Fills GAP 12 (text/news-as-features): GSE has no published real-time event-detection recipe with calibrated latency/accuracy numbers — the matched-filter recipe ports directly to live injury-news detection.
- [TRUST-SIGNAL] Ledger implementation spec: X API filtered stream on NFL keywords + beat-writer lists; per-game rolling median/MAD baseline over last 15 min; matched filter over z-scored rate with template learned from 2024 games (labels: official play-by-play event times); fuse with keyword sub-streams (injury, trade keywords); alert into the GSE event bus with latency SLO; ~1 engineer-week.
- [COACHING] INFERENCE: real-time coaching-decision events (4th-down attempts, challenges, timeout usage) are time-locked public surges like touchdowns — the same matched-filter template could detect scheme/personnel-relevant in-game decisions as features.
## Engine-actionable? (yes — adapt the matched-filter event detector for real-time injury/news detection on X with a latency-SLO alert into the event bus; acceptance gate: ≥90% of 2025-season injury-designation news detected, median latency <3 min, FP <15%)
