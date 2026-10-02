# docs/arxiv-program/research/2026-09-21/arxiv-deep/0773-when-minute-resolution-monitoring-meets-session-level.md
## What it is (1-2 sentences)
Ledger of arXiv:2609.03790v2 (Chatzidimitriou, Tserpes 2026): a landmark-based framework for injury-session discrimination when monitoring is minute-resolution but injury labels exist only at athlete-session level (elite women's football, SoccerMon 2020). Verdict ADAPT — not for its near-chance discrimination numbers, but for the unit-aligned evaluation protocol (one representation per athlete-session at fixed landmarks, athlete-disjoint evaluation, never replicate session labels across minutes).
## Key metrics/methods (formulas where given, else "not specified")
- Landmark representation: X_{a,s,1:ℓ} = within-session monitoring observed no later than landmark ℓ; landmarks at 10, 20, 30, 40, 50, 60 min.
- Estimand: P(injury-associated session | X_{a,s,1:ℓ}) — session-level, never minute-level.
- Feature sets: PRE (14 contextual), CUM (30 expanding summaries), DYN (33 short-horizon dynamics); CUM+DYN (63) primary.
- Models benchmarked: logistic regression, Random Forest, XGBoost, TabPFN; augmentation conditions NONE / SMOTE / CTGAN.
- Metrics: ROC-AUC, PR-AUC with athlete-cluster bootstrap CIs; robustness: leave-one-positive-athlete-out, 100 alternative negative-athlete fold allocations, equal-athlete weighting.
## Data sources named
SoccerMon 2020 (elite Norwegian women's football): 3,743 athlete-sessions from 48 athletes; modeling cohort 2,259 Team A athlete-sessions from 27 athletes, with all 22 positive sessions arising from just 5 athletes. Public code repo linked; raw data not redistributed.
## Findings (numbers and facts, not vibes)
- Primary CUM+DYN logistic regression ROC-AUC across 10–60 min landmarks: 0.499, 0.557, 0.607, 0.428, 0.402, 0.367 — non-monotonic, near/at chance at later landmarks; pattern persists on the fixed 2,104-session 60-min common cohort.
- TabPFN: 0.692 at 30 min; improves later-landmark discrimination vs logistic regression but does not consistently beat Random Forest.
- PRE+DYN: 0.784 at 20 min (PRE alone ~0.70), but paired contrasts vs CUM+DYN include zero at every landmark; PRE has substantial missingness + unverified same-day sleep timing — treated as sensitivity, not evidence.
- Synthetic augmentation is condition-specific, not universal: RF benefits at 30-min SMOTE / 40-min CTGAN; logistic regression shows little benefit and several negative CTGAN contrasts; CTGAN shows distributional drift without near-duplicate memorization.
- Core stated limitation: only 5 positive athletes — inferential precision fundamentally limited; leave-one-positive-athlete-out confirms fragility.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Anti-footgun protocol for GSE injury modeling: player-game as the unit; features frozen at weekly checkpoints (Wed/Thu/Fri practice reports); never smear game-level injury labels across sub-game time units; player-disjoint folds; player-cluster bootstrap CIs; expect non-monotonic checkpoint-by-checkpoint discrimination.
- [OTHER] Explicit prohibition: don't build "in-game injury probability tickers" from session-level labels — the paper demonstrates this is the unsupported-supervision error.
- [TRUST-SIGNAL] With few positive athletes, availability models look predictive in-sample and collapse athlete-disjoint — the paper's negative result disciplines GSE's readiness/availability work; run the robustness battery (leave-one-positive-player-out) before trusting any availability signal.
## Engine-actionable? (yes/no + one-line what)
Yes — retrofit the landmark/unit-alignment evaluation protocol onto GSE availability models (player-game unit, checkpoint landmarks, player-disjoint CV), ~2 days, with a label-resolution audit of existing injury code.
