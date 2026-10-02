# arxiv-program/research/2026-09-21/arxiv-deep/1714-using-social-networks-improve-group-transition.md
## What it is (1-2 sentences)
Deep-dive ledger of Evans et al. (arXiv:2009.00550v1), which tests whether a player's Twitter follow graph (social affinity to candidate destination teams' rosters) improves prediction of which team a free agent / traded player joins in MLB (2002–2018) and NBA (2001–2018). Verdict: ADAPT the timestamped-graph recipe only — the paper's headline gains are contaminated by a July-2020 snapshot predicting transitions back to 2001.
## Key metrics/methods (formulas where given, else "not specified")
- affinity(p,t) = |{q : p follows q and q is on team t}| (unweighted count, no recency, no edge timestamps).
- Classifiers: Random Forest, ExtraTrees, AdaBoost, XGBoost, logistic regression, KNN; ten runs of 70/30 random train/test split; destination classification over ~30 candidate teams (random-guess 1/29 ≈ 3.45%).
- Proposed GSE test: walk-forward by league year, log-loss + top-3 destination accuracy, success = ≥2x random (9.4% NFL) and log-loss gain ≥0.05 nats over no-social baseline.
## Data sources named
MLB transitions 2002–2018 (4,207 switchers, 702 with Twitter handles); NBA transitions 2001–2018/19 (1,847 switchers, 784 with handles); Twitter follow graph scraped July 2020 (one-off snapshot, no timestamps); non-social features: salary, team rank, player value metrics. No public code or dataset.
## Findings (numbers and facts, not vibes)
- MLB destination accuracy: social-only 16.880%, all features 19.402%, team ID + social 19.955% (best).
- NBA: Twitter-only 26.104%, all-social 26.667%, all features 29.740%, rank/value + social 30.238% (best).
- Gains ≈ 5–9x random; social adds roughly +3–6 pp over non-social. Point means over ten runs; no standard errors.
- **Fatal leakage:** July-2020 scrape (no edge timestamps) used to predict transitions from 2001/2002 — post-signing follows leak the label. Reported gains are an upper bound, not a forecast.
- Handle coverage selection bias: only 16.7% of MLB switchers, 42.4% of NBA switchers identified.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: player destination-choice behavior driven by social ties — a player-decision behavioral signal for free-agency prediction.
- TRUST-SIGNAL: cautionary trust case — current-snapshot social graphs are definitionally leaky; only timestamped (pre-tampering-window) edges are admissible as signals.
- OTHER: free-agency/trade destination prior module for roster-move-driven prop and win-total adjustments; interaction-weighted (mentions/replies) and coach-network extensions.
## Engine-actionable? (yes/no + one-line what)
Yes — build timestamped per-team social-affinity features (follows created before the tampering window only) into a walk-forward NFL free-agent destination classifier; hard guardrail: exclude any follow edge without a creation timestamp.
