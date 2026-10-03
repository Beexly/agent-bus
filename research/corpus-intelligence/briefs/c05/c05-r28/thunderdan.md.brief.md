# props/research/2026-09-18/notes/thunderdan.md
## What it is (1-2 sentences)
Source notes capturing @ThunderDanDFS's matchup-grade methodology (RotoBaller) as of 2026-09-18: a black-box 0-100 composite blending PFF grades/O-line data with FTN DVOA, evaluating blocker quality, scheme, projected role/usage, and game script — explicitly NOT the RB's own elusiveness/explosiveness/broken tackles. Conclusion: inputs known, weights and normalization unpublished — treat as a black-box benchmark, not a replicable formula.
## Key metrics/methods (formulas where given, else "not specified")
Implied totals via standard formula: `team implied total = total/2 - (signed spread)/2` (favorite's perspective) — Dan's exact odds book unconfirmed (INFERENCE: DraftKings/FanDuel sportsbook lines or The Odds API feed). D-ST piece (2026 RotoBaller article) uses offensive/defensive DVOA, adjusted sack rate, turnover rate, scaled 0-100; his pass/rush grade weights NOT documented. Analyst override noted: Week 1 used 2025 data with manual personnel/coaching-change adjustments.
## Data sources named
PFF (grades, O-line data — paid; raw via PFF Data / paid feeds); FTN DVOA (ftnfantasy.com, proprietary/paid; lineage = Football Outsiders/FTN). Methodology article: rotoballer.com/nfl-dfs-picks-running-backs-to-target-in-week-1-2/1923472. Related D/ST piece: rotoballer.com/fantasy-football-d-st-matchups-strength-of-schedule-analysis-2026/1925785.
## Findings (numbers and facts, not vibes)
- Grade evaluates blocker quality, offensive scheme, projected role/usage, projected game script; deliberately excludes the runner's own talent metrics (elusiveness, explosiveness, broken tackles).
- 0-100 scaling confirmed from the D/ST article; input weights, normalization, and percentile transforms unpublished.
- PFF and FTN data both paid — no free path to replicate the composite; the free analogue is nflverse EPA + nfl4th/WP proxies.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OL: O-line data is a confirmed core input; pass/rush matchup grades are substantially OL-vs-DL evaluations.
- COACHING: offensive scheme and projected game script are explicit inputs — coaching/system captured as a composite feature.
- QB-BEHAVIOR: pass matchup grades cover QB-adjacent protection/receiver matchups (indirect).
- SCHEME: projected role/usage is a scheme-design input.
- TRUST-SIGNAL: verdict explicitly labels it a black-box composite with unpublished weights — a paste-a-rank-is-not-a-row caution.
## Engine-actionable? (yes/no + one-line what)
Yes — confirms the design target for a GSE matchup-grade composite: PFF-grade-proxy (charting) + DVOA-proxy (efficiency) + OL/DL data + scheme/script adjustments, all replicable from free sources except the weights, which GSE must fit itself.
