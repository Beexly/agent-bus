# docs/fable/GITHUB_ISSUES_TO_CREATE.md
## What it is (1-2 sentences)
Three draft GitHub issues for the FABLE lane: wiring the source-registry adapter into an internal visibility route, promoting uncertainty ranking into a local review queue, and requiring repo-data calibration validation before any gain claim.
## Key metrics/methods (formulas where given, else "not specified")
not specified
## Data sources named
`apps/web/lib/fable/source-registry.ts` (`buildFableSourceRegistry`); `rankUncertainCandidates` (least confidence, margin, entropy); repo data or approved replay fixtures for Brier and ECE measurement; `docs/fable/MODEL_CALIBRATION.md` for report linkage.
## Findings (numbers and facts, not vibes)
- Issue 1: internal route/dashboard panel reading the FABLE source registry — must not duplicate registry data, shows AWS storage status inherited from source storage rights, tests for approved/blocked/conditional sources.
- Issue 2: local review queue from prediction candidates via `rankUncertainCandidates` — must record why each candidate was selected; no retraining or publishing; queue stays local until owner approval.
- Issue 3: calibration validation report (command, dataset/window, sample count, baseline, candidate metric, delta) that blocks unsupported copied claims such as ".5+ Brier/ECE gain".
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL — uncertainty ranking, claim-scanning against unsupported gain claims, source-rights registry visibility.
## Engine-actionable? (yes/no + one-line what)
Yes — file the three issues and enforce the calibration-validation report before accepting any quoted Brier/ECE gain in engine claims.
