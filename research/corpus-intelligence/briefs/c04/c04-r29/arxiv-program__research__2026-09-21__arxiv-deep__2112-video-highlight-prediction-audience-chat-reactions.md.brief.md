# docs/arxiv-program/research/2026-09-21/arxiv-deep/2112-video-highlight-prediction-audience-chat-reactions.md
## What it is (1-2 sentences)
Ledger deep-read of arXiv:1707.08559v1 (UNC Chapel Hill, 2017) on predicting video highlights from joint modeling of visual features and live audience chat reactions during esports streams. Verdict: ADAPT — crowd reaction (chat velocity + slang content) is a predictive signal for which moments matter; character-level modeling beats word-level on internet slang by 22.3 points.
## Key metrics/methods (formulas where given, else "not specified")
- Metric: P = |S_gt ∩ S_pred|/|S_pred|, R = |S_gt ∩ S_pred|/|S_gt|, F = 2PR/(P+R) × 100% (Eq. 1–2).
- Models: V-CNN (pretrained ResNet-34 frame features); V-CNN-LSTM (LSTM over image features, unfolded 16 steps, predict every 10th frame at 30fps ≈5s window, interpolate); L-Char-LSTM (character-level 3-layer LSTM over all chats in next W_t seconds; best W_t = 7s; tested 5–9s → F-scores 32.1/29.6/41.5/28.2/34.4%); L-Word-LSTM (vocab 10,019, words appearing >10×); joint lv-LSTM = concat(F_v, F_l) → 2-layer MLP.
- Chat encoding trick: chats concatenated with a stop character; the NUMBER of stop characters encodes chat count (model can learn to use volume); deleted messages → "\n" symbol.
- Positive-label heuristic: only the last 25% of frames in each highlight clip labeled positive (action usually occurs late in the clip).
- Training: 5k positive + 5k negative frames/epoch, batch 32, 60 epochs, lr 1e-2 (20 epochs) → 1e-3, weight decay 1e-4, cross-entropy.
## Data sources named
Novel dataset: 321 League of Legends championship videos from Twitch (spring 2017): NALCS (North American, English chat) 218 videos; LMS (Taiwan/Macau/Hong Kong, Traditional Chinese chat) 103 videos. Each game 30–50 min with timestamped chat. Ground truth: community-created highlight clips matched back to match timestamps (frame-level binary labels). Splits by game number: games 1&3 train (NALCS 128, LMS 57), game 2 of weeks 1–4 val (40/18), remaining game 2s test (50/28). Dataset "will be released" (2017 — ledger flags verify link freshness).
## Findings (numbers and facts, not vibes)
- Dev F-scores: L-Char-LSTM 41.5 (chat only, last-25% heuristic) vs L-Word-LSTM 19.2 — character-level beats word-level by 22.3 points on internet slang.
- V-CNN 64.0; V-CNN-LSTM 68.3; joint lv-LSTM 74.8 (P 0.77, R 0.72) — combination is best.
- Test: NALCS — lv-LSTM 74.7 vs video-only 72.2 vs chat-only 43.2. LMS — 70.0 vs 69.2 vs 39.7.
- "Surprisingly," vision alone beats language alone, but language disambiguates hard cases and the combination is best in both languages.
- Chat works better in English (43.2) than Traditional Chinese (39.7).
- The paper uses FUTURE chat (next 7s) relative to the frame — fine for post-hoc highlight generation, NOT for real-time prediction.
- Ground truth = fan-made highlight clips: biased toward popular teams/players and spectacular (not important) plays.
- Chat-only F-scores (~40) are weak — signal is real but noisy; the value is in the JOINT model.
- Proposed GSE acceptance gate: joint model beats best single-modality baseline by ≥5 F-score points on held-out weeks AND Precision@10 ≥ 0.5.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Reaction-velocity highlight ranker (X posts/minute in 5 min after the play + sentiment via char/subword model) for automated "top plays" selection: OTHER.
- Chat-COUNT trick transfers: encode reaction volume as an explicit feature the model can learn to use: OTHER.
- "Crowd excitement" as a candidate engine feature (plays the crowd reacts to — test what it correlates with); "the 5 plays that broke NFL Twitter" content use: OTHER.
- Streaming variant using only PAST reactions (t−60s to t) measuring highlight-detection latency/accuracy tradeoff — deployable live product ("highlight detected 45 seconds after the play"): OTHER.
- No QB, coaching, OL, trust-signal, or scheme content present.
## Engine-actionable? (yes/no + one-line what)
Yes — build a reaction-velocity highlight ranker (broadcast-video embeddings + X reaction volume/sentiment + tracking-based excitement proxies) trained against official "Top 10 plays" reels, gated on ≥5 F-score points over best single-modality baseline and Precision@10 ≥ 0.5; feeds the nightly highlight reel and a "crowd excitement" engine feature.
