# docs/arxiv-program/research/2026-09-21/arxiv-deep/0773-when-minute-resolution-monitoring-meets-session-level.md
## What it is (1-2 sentences)
A full-text deep-read ledger of arXiv:2609.03790v2 (Chatzidimitriou, Tserpes 2026), a landmark-based framework for injury-associated-session discrimination when minute-resolution monitoring meets session-level injury labels, tested on elite women's football. Verdict in file: ADAPT — not for its near-chance discrimination numbers, but for its unit-alignment/label-resolution discipline that GSE needs when combining high-resolution workload proxies with game-level injury labels.

## Key metrics/methods (formulas where given, else "not specified")
- Landmark representation: X_{a,s,1:ℓ} = within-session monitoring observed no later than landmark ℓ (fixed elapsed-time landmarks 10, 20, 30, 40, 50, 60 min); one representation per athlete-session per landmark; target stays session-level.
- Estimand: P(injury-associated session | X_{a,s,1:ℓ}) — session-level, not minute-level.
- Metrics: ROC-AUC, PR-AUC with athlete-cluster bootstrap CIs.
- Robustness battery: athlete-disjoint evaluation, paired athlete-cluster bootstrap, fixed 60-min common cohort, 100 alternative negative-athlete fold allocations, leave-one-positive-athlete-out, equal-athlete weighting.
- Anti-footgun rule: never replicate the session label across minutes (no unsupported minute-level supervision).

## Data sources named
SoccerMon 2020 (elite Norwegian women's football): 3,743 athlete-sessions from 48 athletes; modeling cohort 2,259 Team A sessions from 27 athletes, all 22 positive sessions arising from just 5 athletes. Features: PRE (14 contextual: 7 workload, 2 sleep, 5 wellness), CUM (30 expanding accelerometer/gyroscope summaries), DYN (33 short-horizon dynamic summaries: first differences, trailing-5 windows). Public code linked; raw SoccerMon data not redistributed.

## Findings (numbers and facts, not vibes)
- Primary CUM+DYN logistic regression ROC-AUC across landmarks 10–60 min: 0.499, 0.557, 0.607, 0.428, 0.402, 0.367 — non-monotonic, near/at chance at later landmarks; pattern persists on fixed common cohort and across fold allocations.
- TabPFN: 0.692 at 30 min; improves later-landmark discrimination vs logistic regression but does not consistently beat Random Forest.
- PRE-containing representations look stronger (PRE alone ~0.70; PRE+DYN 0.784 at 20 min) but paired contrasts vs CUM+DYN include zero at every landmark; PRE has substantial missingness + unverified sleep timing — treated as sensitivity only.
- Synthetic augmentation (SMOTE/CTGAN) is condition-specific, not universal: RF benefits at 30-min SMOTE / 40-min CTGAN; logistic regression shows little benefit and several negative CTGAN contrasts; CTGAN shows no near-duplicate memorization but substantial distributional drift.
- Core limitation: only 5 positive athletes — inferential precision fundamentally limited; leave-one-positive-athlete-out confirms fragility; any "signal" could be athlete identity, not injury.
- Paper's own conclusion: contribution is the framework, not injury prediction.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] Landmark/checkpoint discipline for GSE availability models: player-game as unit, features frozen at Wednesday/Thursday/Friday practice-report checkpoints, player-disjoint folds, player-cluster bootstrap, leave-one-positive-player-out sensitivity.
- [TRUST-SIGNAL] Audit existing GSE injury/projection code for any replication of game-level labels across sub-game time units; remove or reframe as session-level.
- [TRUST-SIGNAL] Negative result disciplines readiness work: with few positive athletes, availability models look predictive in-sample and collapse athlete-disjoint — run the robustness battery before trusting any availability signal.
- [OTHER] Props application: do not build "in-game injury probability tickers" from session-level labels — the paper identifies that as exactly the unsupported-supervision error.

## Engine-actionable? (yes/no + one-line what)
Yes — retrofit the landmark/unit-alignment evaluation protocol (player-game unit, Wed/Thu/Fri checkpoint landmarks, player-disjoint CV + cluster bootstrap) onto all GSE injury/availability models; ~2 days to adopt.
