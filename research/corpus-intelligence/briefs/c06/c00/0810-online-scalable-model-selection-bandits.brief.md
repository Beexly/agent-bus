# arxiv-program/research/2026-09-21/arxiv-deep/0810-online-scalable-model-selection-bandits.md
## What it is (1-2 sentences)
Deep read of Xie et al. (2021, arXiv:2101.10385): the Automatic Model Selector (AMS) — a decay ε-greedy multi-armed bandit that rotates candidate ML models onto live ad-bidding traffic every 15 minutes, concentrating traffic on the best-performing arm by the live business KPI (CTR/CPC/CPA), after showing offline AUC doesn't predict online performance. Verdict in file: ADAPT — transfer the decay ε-greedy protocol to live model selection among GSE engine versions, with the rotation cadence adapted to pick-release cadence; the paper gives no exact numbers (figure-only results), so GSE must set its own gate.
## Key metrics/methods (formulas where given, else "not specified")
- Activation: P(best) = (1−ε) + ε/M; P(alt) = ε/M for M candidates; decay ε(t) = ε₀·max(0, 1 − t/α).
- Chosen over Thompson sampling/UCB per Mäkinen 2017 (simplicity + empirical performance); reward-agnostic (no Beta-Bernoulli/sub-Gaussian assumptions).
## Data sources named
Two proprietary live-traffic experiments on Xaxis (Copilot AI) RTB ad campaigns — no public dataset, no row counts, no dates. Exp 1: logistic CTR models, 7-day vs 60-day lookback; Exp 2: ~1,000 features vs ~7,000 features with sub-campaign crossings. Not replicable.
## Findings (numbers and facts, not vibes)
- Exp 1: model7 led offline AUC early; model60 took the AUC lead ~day 7 and kept it; online cumulative CTR followed "a similar, but not identical" trend — at campaign start, higher offline AUC did NOT translate to higher live CTR.
- Exp 2: modelControl had slightly better test AUC but "significantly outperforms" modelTest on live KPI — offline metrics misaligned with online KPI twice.
- Paper reports NO exact numbers, no p-values, no N — the effectiveness claim is unquantified; all results are qualitative figure readings.
- Internal tension flagged: ε-decay is monotone-decreasing with no reset — in a non-stationary environment it locks onto a stale winner; 15-minute rotation injects its own non-stationarity into KPI estimates.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: a safety protocol for shipping engine versions — arms = model versions, rewards = realized pick ROI/Brier over a rolling window computed only on picks each version actually shipped; challenger capped at ε-share of volume until it beats production on two consecutive weekly windows; ε-reset triggers on regime change (roster/injury shocks, drift alarms) instead of monotone decay.
## Engine-actionable? (yes/no + one-line what)
yes — replay decay ε-greedy on the 2024 posted-pick ledger as counterfactual arms (production vs challenger); adopt if cumulative-regret reduction ≥20% vs equal-split A/B by Week 9 AND traffic share for the ex-post best arm ≥70% by Week 12.
