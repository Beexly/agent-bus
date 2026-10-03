# arxiv-program/research/2026-09-21/arxiv-deep/0006-unsupervised-pass-coverage-identification.md
## What it is (1-2 sentences)
Deep ledger of Dutta, Yurko & Ventura (arXiv:1906.11373v3, 2020) on unsupervised man-vs-zone pass-coverage classification for cornerbacks from NFL tracking data; verdict ADAPT as a weak-labeler to re-fit on modern data, not adopt as-is.
## Key metrics/methods (formulas where given, else "not specified")
- Feature vector per cornerback-play (snap to forward pass): VAR_X, VAR_Y, SPEED_VAR, OFF_VAR, DEF_VAR, OFF_MEAN, DEF_MEAN, OFF_DIR_VAR, OFF_DIR_MEAN, RAT-MEAN, RAT-VAR + distance-ratio summaries at snap, throw, midpoint (exact names for the three ratio summaries not recovered from paper).
- Unsupervised: Gaussian mixture models + hierarchical clustering; GMM posteriors used as probabilistic man/zone assignments. Model-selection details (K, covariance structure, PCA, linkage) not stated in recoverable paper text.
- Acceptance gate (pre-registered): bootstrap ARI >= 0.70 over >= 100 resamples, qualitative audit agreement >= 90% on 100 sampled plays, stability when re-fit on a held-out season.
## Data sources named
NFL Big Data Bowl inaugural tracking release (2018/19, public via Kaggle): first six weeks of 2017 NFL season; all 22 players + ball at 10 Hz, x in 0-120, y in 0-58; no orientation data in this release. 6,712 pass plays; 16,316 cornerback-play observations.
## Findings (numbers and facts, not vibes)
- Paper reports NO accuracy/AUC or supervised metric — no ground truth exists at scale; evaluation is qualitative cluster inspection only.
- Coverage-behavior assumptions: man defenders show low/stable defender-to-receiver distance ratio and lower/stable direction difference vs zone defenders.
- Limitations: cornerbacks only (no safeties/nickel/linebackers → no team-level scheme), snap-to-throw window ignores pre-snap alignment (called the strongest signal of coverage intent, unused), six weeks of 2017 is stale; unsupervised solutions sensitive to undocumented normalization/K choices.
- NGS claims per-defender coverage classification on every dropback but its architecture/features/equations are not publicly disclosed — this paper supplies the missing public baseline, not duplication.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Unsupervised man/zone weak-labeler from tracking data → probabilistic coverage assignments feed CB matchup man-vs-zone splits: SCHEME
- Pre-snap alignment unused despite being the strongest coverage-intent signal → feature gap for any coverage model: SCHEME
- Team-structure-aware upgrade (joint model over all 11 defenders, scheme posterior Cover 1/2/3/4) → feeds QB matchup features (expected coverage shell): QB-BEHAVIOR, SCHEME
- No ground truth, qualitative-only eval → TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
yes — replicate GMM weak-labeler on modern Big Data Bowl releases (with orientation + pre-snap features), serve per-play coverage_prob_man table for CB/QB matchup features; ADOPT downstream only if bootstrap ARI >= 0.70 gate passes.
