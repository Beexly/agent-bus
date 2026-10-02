# arxiv-program/research/2026-09-21/arxiv-deep/0040-match-chat-generative-ai-tennis.md
## What it is (1-2 sentences)
Research ledger (deep read, 2026-09-21) on arXiv:2509.12592v1, a real-time GenAI tennis assistant deployed at 2025 Wimbledon and US Open (508 matches, ~1M users). Ledger verdict: ADAPT the live Likelihood-to-Win model design only; the tennis chatbot stack is not transferable.
## Key metrics/methods (formulas where given, else "not specified")
- Live win-probability recipe: pre-match P from XGBoost (features: age, Watson Power Index, recent form, surface, historical win ratios; +H2H counts/sets/game ratios), then in-play momentum M_x(t) updated recursively with context-weighted deltas ΔM_x(t)=α·g(S(t)) on point won / −β·g(S(t)) on point lost, exponentially decayed M^decayed_x(t)=M_x(t)·e^{−λ·c(t)} (c(t)=completion %), scaled M^scaled_x=M^decayed_x/(M^decayed_x+M^decayed_y), blended P_live(t)=P^pre·(1−w(t))+M^scaled_x(t)·w(t) with remaining-points weight w(t), plus a set-booster (1+s_x/S). Hyperparameters α, β, λ, w(t), XGBoost configs: **not stated**.
- GenAI shielding: >50% of queries bypass LLM via structured feeds; fallback MiniLM-L6-v2 cosine similarity over 600 generated sentences.
- Question classifier: MiniLM embeddings → Random Forest (100 trees); precision 84%, recall 85.7%, accuracy 85.7% on 116 test samples.
## Data sources named
Streaming match feeds (300+ statistical measures, point-by-point, MQTT pub-sub, CDN-distributed); static player profiles, H2H records, career/cumulative stats; IBM watsonx proprietary stack; Watson Power Index (proprietary); 544 gold-standard QA questions, 1,379 classifier exemplars, 2,664-term slur DB, 33-user usability study.
## Findings (numbers and facts, not vibes)
- Judge pass rate (0.8 threshold on factualness+relevance): 92.83%; avg response 6.25s at up to 120 RPS; 100% uptime; nearly 1M unique users; 96.08% of queries guided by prompt design.
- Synthesizer-only path latency 0.21s; Tool-to-LLM avg 6.42s (SD 3.02, max 25.42s); 65% of interactions during live matches.
- Usability: 81% helpful, 69% low-friction, 63% intuitive; 38% didn't understand how predictions were generated.
- NO predictive-accuracy evaluation of the Likelihood-to-Win model itself (no Brier, log-loss, reliability) — stated plainly in ledger.
- Maps to corpus gap §4 item 7: in-play live NFL spread/total modeling is thin (iWinRNFL covers in-game WP, not spread/total surfaces).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (in-play modeling): pre-game win prob blended with exponentially-decayed momentum weighted by closeness to game end is a portable live-spread/total recipe — pre-game P from GSE engine, momentum from in-game EPA/WP deltas, score-differential/possession booster instead of set-booster.
- TRUST-SIGNAL: the paper's honesty gap is itself a caution — a deployed win-prob product shipped without any calibration evaluation; GSE's honest calibration-state labeling (uncalibrated signals stay shadow) is the correct opposite.
## Engine-actionable? (yes/no + one-line what)
Yes — port the momentum-blend live-model pattern to an NFL in-play WP/spread experiment on nflverse 2020–2024, calibrating λ and w(t) on log-loss vs nflfastR in-game WP (accept gate: beat nflfastR by ≥0.005 log-loss, fitted λ>0); chatbot stack rejected.
