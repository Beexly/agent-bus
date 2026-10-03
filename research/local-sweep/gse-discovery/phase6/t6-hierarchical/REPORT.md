# T6 — Bayesian Hierarchical Partial Pooling — REPORT
MOVE-37 Phase 6 | Family T6 | Worker: Motif | 2026-09-13/14
Prereg: PREREG.md (written BEFORE any data access). Code: t6_duel.py.

## Method (one paragraph)
Team-season offensive/defensive strength estimated by empirical-Bayes
partial pooling: team-game EPA/play observations with known sampling
variance (play counts), team strengths drawn from a Normal prior whose
variance tau2 is estimated by marginal maximum likelihood on 1999-2010
(no subjective priors). Posterior-mean ratings are analytic James-Stein
shrinkage toward the era mean. Duel: hierarchical vs raw (unpooled) team
EPA means vs standard Elo on weeks 1-6 game prediction (the small-sample
regime), era-split train <=2010 / validate 2011-2017 / test 2018-2025,
plus a full-season duel for completeness. No PyMC/Stan on this box;
empirical Bayes is the exact posterior-mean solution for the
Normal-Normal conjugate model, not an approximation.

## VERDICT: _PENDING — awaiting frozen data snapshot_

### Hyperparameters (train <= 2010)
- tau2_offense = _pending_ (LL gain vs complete pooling: _pending_,
  profile curvature: _pending_)
- tau2_defense = _pending_ (LL gain: _pending_, curvature: _pending_)
- sigma2 (play-level EPA variance) = _pending_
- HFA = _pending_ pts; probit s = _pending_; Elo K = _pending_
- garbage-time inclusion: _pending_ (tuned on validate)

### Shrinkage factors (test era, weeks 1-6)
Mean posterior weight on team data lambda by week: _pending_

### PRIMARY DUEL — weeks 1-6, test 2018-2025 (kill gate)
_pending_

### SECONDARY DUEL — full season, test 2018-2025
_pending_

### HFA ablation
_pending_

### Market duel (report only)
_pending_

### Permutation / placebo
_pending_

## Kill-criteria audit
_pending_
