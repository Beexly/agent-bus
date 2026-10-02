# docs/research/2026-10-01/ig-fieldcoachai-reel-intel.md
## What it is (1-2 sentences)
Competitive/method intel from a 2026-10-01 observation of @fieldcoachai's public Instagram demo reel (posted 2026-06-22) showing CV football film analysis: player bounding boxes with PID/TID track IDs, a WR tag, and on-screen route metrics with coaching verdicts.
## Key metrics/methods (formulas where given, else "not specified")
Demo-observed metric panel (definitions not specified): Break Angle 92°; Sep @ Break 2.1 yds; Sep @ Catch 1.4 yds. Feedback verdicts shown: "Crisp direction change", "Got friendly out of cut", "Both feet down in bounds cleanly". No paper, repo, or API observed.
## Data sources named
Public Instagram reel https://www.instagram.com/reel/DZ6J49Evm-v/ (@fieldcoachai, verified; bio "Sports Technology for Coaches, Players & Teams — Automatically analyzes film to present key metrics + insights"; link fieldcoach.ai). Engagement: ~1 comment, likes not enumerated (logged-out view).
## Findings (numbers and facts, not vibes)
- Exact target output shape for GSE's CV lane (PR #986, motif/cv-pipeline-2026-09-30) once tracklets + homography mature: per-player field-plane tracklets → breakAngle, sepAtBreak, sepAtCatch → receiver route-quality evaluation → WR props and fantasy separation edges.
- Binary coaching verdicts ("crisp direction change") are a presentation mechanic worth copying for internal film-study surfaces (internal-only per NGS/public-private doctrine).
- Commercial product for coaches/teams, not a public model; no repo, no paper, no API — RESEARCH-only on implementation; the metrics are the adoptable part.
- Wiring target recorded: add `breakAngle`, `sepAtBreak`, `sepAtCatch` to the CV derived-metrics spec in packages/prediction-engine/src/tracking/ (post-homography layer), weight 0 / shadow until validated, no public surface.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Break angle + separation-at-break/catch as WR route-quality metrics feeding WR props and fantasy separation edges — OTHER
- Feedback-verdict presentation pattern for internal film-study surfaces — COACHING
- Competitor output-shape confirmation for GSE's CV tracklet→metric pipeline — OTHER
## Engine-actionable? (yes/no + one-line what)
Yes — add `breakAngle`, `sepAtBreak`, `sepAtCatch` (weight 0/shadow) to the CV derived-metrics spec in packages/prediction-engine/src/tracking/ once field-plane tracklets exist, mirroring FieldCoachAI's demo panel.
