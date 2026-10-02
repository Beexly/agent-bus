# arxiv-program/research/2026-09-21/arxiv-deep/0460-rethinking-evaluation-metric-for-probability-estimation.md
## What it is (1-2 sentences)
Proposes the "Balance score," a binning-free per-example signed gain/loss function whose average magnitude is claimed to approximate true ECE without binning; the dossier verdict is REJECT — signed errors cancel across oppositely miscalibrated regions, so the approximation holds only under globally one-directional miscalibration.
## Key metrics/methods (formulas where given, else "not specified")
- Balance score g(q;p): piecewise function of predicted q and true p (paper Eq. 8); sample average (Eq. 9); claimed E[g]=0 at q=p (Eq. 10); |g(q;p)|=|q−p| (Eq. 11) — so |average Balance|≈true ECE ONLY if sign(q−p) is constant over the whole range.
- Brier decomposition (Eqs. 1–3); binned ECE (Eqs. 5–7); proposed as replacement for Brier and binned ECE.
- Not a proper scoring rule; no binning required; converges faster than ECE in the paper's sample-efficiency study.
## Data sources named
Synthetic: 100,000 samples from Beta(0.5,0.5), Beta(1,1), Beta(2,2); second study 10,000 uniform with overconfidence tendencies 0.10 vs 0.11. Real: League of Legends match data — 100,000 matches at each of 5/10/15 minutes; 60k train/40k test; logistic regression; 14 features (role-level gold/XP diffs, dragons, towers); target = match winner.
## Findings (numbers and facts, not vibes)
- Paper's Table II: Balance ≈ 0 (−0.0004 to 0.0043) on all six settings while ECE ranges 0.0017–0.0078 — near-zero Balance readings alongside nonzero ECE, exactly the cancellation concern.
- Ordering stress test: ECE with bins M∈[5,100] can reverse the ranking of the two overconfident models while |Balance| preserves it (the paper's legitimate complaint — bin-count instability of ECE).
- Sample-efficiency: true ECE for tendency 0.1 is 0.025; |Balance| approaches it with far fewer samples than ECE, which needs >500 samples.
- Dossier's fatal flaw note: a model +5% miscalibrated on favorites and −5% on underdogs scores ~0 on Balance — the failure mode ECE's absolute value was designed to avoid.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: calibration-metric hygiene (what not to adopt).
## Engine-actionable? (yes/no + one-line what)
no — REJECT as a metric; at most a one-line signed mean (predicted−empirical) per calibration slice as a supplemental diagnostic next to existing ECE/LRD dashboards.
