# arxiv-program/research/2026-09-21/arxiv-deep/0358-scope-meets-screen-lessons-learned-in.md
## What it is (1-2 sentences)
Ledger [0358]: design study (arXiv:2507.00333v1, Zerman et al. 2025) comparing 5 composite visualizations for marksmanship training across novices vs experts (n=10). Verdict: ADAPT — findings transfer to GSE's sports-visualization and clip-content lane.
## Key metrics/methods (formulas where given, else "not specified")
- Five visualizations: (1) raw video control; (2) stabilized video + text overlay; (3) time-series plots; (4) polar aim plot; (5) combined dashboard (video + 3 time series + polar plot).
- Statistics: Mann-Whitney U (novice/expert), Wilcoxon signed-rank (vis-vs-vis), pairwise preference consistency ζ = 1 − (24 × circular triads)/(n³ − n)-style; D ≥ χ²(4, 0.05) ≈ 9.448; D_combined ≥ χ²(9, 0.05) = 16.919.
## Data sources named
- System data: first-person rifle-scope video (Raspberry Pi camera + 16mm telephoto on hunting rifle), fiducial-marker targets, OpenCV template matching; per-frame: elapsed time, aimpoint-to-target distance, velocity, acceleration, windowed accuracy/precision.
- User study: 10 participants (5 experts with 6–46 yrs practice, 5 novices); 4 one-minute videos by a professional shooter; three-stage protocol (~1 hr each). Supplement: Carlsson's MSc thesis [6] (public, diva-portal).
## Findings (numbers and facts, not vibes)
- Vis #5 (combined dashboard) ranked 1st for novices, experts, combined; won 37/40 pairwise matchups (20/20 novice, 17/20 expert); preferred in 9/10 cases per abstract.
- Consistency ζ = 1 in all groupings; D_novice = 32.32, D_expert = 22.72, D_combined = 53.76 — all significant.
- Rankings: Novice Vis5>Vis4>Vis2>Vis3>Vis1; Expert Vis5>Vis2>Vis4>Vis3>Vis1; Combined Vis5>Vis4>Vis2>Vis3>Vis1.
- Only Vis #1 (raw) significantly worse than Vis #2, #4, #5 on understanding ratings; novice/expert differences not significant.
- Both groups warned Vis #5 has "too much going on" (cognitive overload); experts called the acceleration graph "very useful" and wanted filtering; novices fixated on aesthetics; both wanted shot-hit outcome markers; recoil in raw video was key shot-counting cue.
- Limitations: n=10, fixed order, non-interactive prototype, no performance-outcome measured (preference only).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **COACHING**: design feedback visuals separately for novices vs experts (novice: aesthetics/simplicity; expert: filterable data).
- **TRUST-SIGNAL**: video-anchored composites beat detached charts on perceived understanding — evidence base for real-footage-first content doctrine.
- **OTHER** (content/design): ~4 concurrent data-layer cap per visual (Vis #5 overload at 5 panels + overlays); always mark the outcome event; same-day review cadence; polar plots for genuinely directional football data (target direction, pass location).
## Engine-actionable? (yes/no + one-line what)
yes — ADOPT the video-first composite pattern for GSE visual breakdowns, a novice/expert two-version rule, and a ~4-layer overload cap; gate on the paper's reproducible small-scale viewer test (composite vs chart vs raw on comprehension).
