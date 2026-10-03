# arxiv-program/research/2026-09-21/arxiv-deep/1714-using-social-networks-improve-group-transition.md

## What it is (1-2 sentences)
Deep-read ledger of Evans, Williams & Thomas (2020), arXiv:2009.00550v1 — tests whether Twitter follow-graph "social affinity" predicts a free agent/traded player's destination team better than performance/value features. Verdict: ADAPT — the timestamped-graph recipe is useful for a free-agency destination prior, but the paper's headline numbers are contaminated by a July-2020 snapshot graph used to predict transitions back to 2001/2002.

## Key metrics/methods (formulas where given, else "not specified")
- Social affinity: affinity(p,t) = |{q : p follows q and q is on team t}| — raw count, no edge weighting, no recency, follow-out direction only.
- Destination classifier: Random Forest, ExtraTrees, AdaBoost, XGBoost, logistic regression, KNN; ten runs of 70/30 random train/test split, averaged.
- Random-guess baseline: 1/29 ≈ 3.45% (30-team league).
- Proposed GSE implementation: gradient-boosted destination classifier over 32 NFL teams with walk-forward splits by league year, reporting log-loss and top-3 accuracy; improvement experiment: interaction-weighted affinity (replies/mentions/likes) vs raw counts, plus coach-destination affinity feature.

## Data sources named
- MLB transitions 2002–2018: 4,207 unique switchers, 702 with identified Twitter handles (16.7% coverage).
- NBA transitions 2001–2018/2019: 1,847 unique switchers, 784 with handles (42.4% coverage).
- Twitter follow graph scraped July 2020 (one-off, no edge timestamps; handles matched manually).
- Non-social features: player salary, team win/loss rank, player value metrics, current-team indicator.

## Findings (numbers and facts, not vibes)
- MLB destination accuracy: social-only 16.880%; all features 19.402%; team ID + social 19.955% (best reported). Non-social baseline below social-only.
- NBA: Twitter-only 26.104%; all-social 26.667%; all features 29.740%; rank/value + social 30.238% (best).
- All figures ~5–9x random (3.45%); social-over-non-social gain ≈ +3–6 pp in both leagues.
- No standard errors on the ten-run means; differences like 19.402% vs 19.955% may not be significant.
- Fatal leakage: graph scraped July 2020 with no edge timestamps used to predict transitions from 2001/2002 — post-transition follows leak the label. No temporal train/test split. No roster-capacity constraints.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: player-movement/offseason modeling — social-affinity as a free-agency destination prior for player-prop and team-win-total adjustments after roster moves; detects market overreaction to social-media-driven rumors.
- TRUST-SIGNAL: the paper's own lesson is a vendor-signal caution — any signal built on a current-snapshot social graph is definitionally leaky; only strictly pre-tampering-window, timestamped follows count.

## Engine-actionable? (yes/no + one-line what)
Yes — build `gse/offseason/social_affinity.py` with timestamped per-team affinity features in a walk-forward destination classifier, guarded so any untimestamped follow edge is excluded.
