# arxiv-program/research/2026-09-21/arxiv-deep/1094-driving-engagement-in-daily-fantasy-sports.md
## What it is (1-2 sentences)
Deep read of Padalkar (2026), "Driving Engagement in Daily Fantasy Sports with a Scalable and Urgency-Aware Ranking Engine" (arXiv:2604.13796v1): an urgency-aware Deep Interest Network with target-aware attention and listwise neuralNDCG training, built at 100B+ interaction scale for time-sensitive DFS ranking. Verdict in-file: **ADAPT** — urgency features carry the gains; architecture fits GSE's time-sensitive ranking surfaces.
## Key metrics/methods (formulas where given, else "not specified")
- Temporal positional encoding: Δt_j = t_c − t_j (elapsed time between candidate time and historical action j).
- Urgency features: time-to-round-lock, time-since-lineups (candidate urgency features).
- Target-aware attention (DIN-style) over user histories (match clicks, team saves, contest joins), conditioned on the candidate.
- Listwise loss: neuralNDCG via NeuralSort (differentiable relaxation of sorting operator applied to predicted scores, optimizing a smooth nDCG surrogate).
- Distributed training: 80-GPU example setup, ~1 hour per epoch.
- Metrics: nDCG@1/3/5. Baselines: user-level LightGBM + ablations (pointwise loss, no positional encoding, no urgency features).
## Data sources named
- Production-scale DFS platform data (proprietary, no public code/data). Train: 200,000 users, 92.5B interactions, 12 months. Validation: 200,000 users, 10.5B interactions, 4 months. Test: 250,000 users, 11.7B interactions, 4 months. Strictly disjoint users across splits AND out-of-time (no user or time overlap). Candidate window: matches starting within 24 hours.
## Findings (numbers and facts, not vibes)
- Full model: nDCG@1 0.6445, nDCG@3 0.7920, nDCG@5 0.8152.
- Ablations (nDCG@1/@3/@5): pointwise loss 0.6405/0.7893/0.8129; no positional encoding 0.6288/0.7812/0.8058; no urgency features 0.3832/0.5240/0.5676 — removing urgency features collapses nDCG@1 from 0.6445 to 0.3832; urgency carries the model.
- Reported relative lift: +9% nDCG@1 over the primary user-level LightGBM (no confidence intervals given).
- No online A/B yet — online/edge deployment stated as planned; paper's scale (80 GPUs, 92.5B interactions) far beyond GSE's data.
- GSE adaptation spec: urgency features per surface (time-to-kickoff, time-since-lineup-posted, time-to-line-close); DIN-style attention with Δt encodings on GSE engagement logs; neuralNDCG training; 3–4 weeks for first surface.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: engagement/product — personalization/ranking architecture for time-sensitive surfaces (pre-lock notifications, slate-day pick feeds, live-betting nudges); no QB/coaching/OL content.
## Engine-actionable? (yes/no + one-line what)
yes — adopt urgency-feature + neuralNDCG-listwise architecture for GSE's slate-closing pick feeds and pre-lock notifications (adapt urgency features to time-to-kickoff/time-to-line-close; single-GPU DIN feasible at GSE scale); acceptance gate: ≥3% relative nDCG@5 over no-urgency baseline on user-disjoint out-of-time splits.
