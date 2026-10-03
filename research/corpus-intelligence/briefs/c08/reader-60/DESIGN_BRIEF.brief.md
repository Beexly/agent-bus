# docs/predictions/research/2026-09-17/edge-sheet/DESIGN_BRIEF.md
## What it is (1-2 sentences)
Worker B's read-only design brief for the GSE Edge Sheet v2: a single 1080×1350 portrait PNG per NFL game, rendered in Python matplotlib, phone-first (X/TikTok/Instagram), replacing the text-heavy v1 with 8 data charts where every insight is drawn on a chart or does not ship.

## Key metrics/methods (formulas where given, else "not specified")
Eight charts, each with a stated question: (1) 32-team efficiency map — scatterplot, X = offensive EPA/play, Y = defensive EPA/play (flipped so up = better defense), dashed mist crosshairs at league average; (2) 10-metric percentile faceoff — rows: Off EPA/play, Dropback EPA, Rush EPA, Success rate, Explosive play rate, Def EPA/play, Def dropback EPA, Def rush EPA, Points/drive, Turnover luck (actual minus expected, signed); (3) per-play EPA distribution curves — KDE (`scipy.stats.gaussian_kde`, bw_method ~0.25; fallback `np.histogram(density=True)` + Gaussian smoothing), X clipped ~-2 to +2 EPA, right-tail explosive-share % shaded; (4) 2×2 unit-vs-unit EPA grid (pass/rush offense vs defense, cells tinted toward matchup winner); (5) 4-week rolling offensive EPA/play, 2025 Weeks 1–18, then Week 1 2026 as hollow single-game dot ("1-game sample"); (6) luck ledger — diverging actual-vs-expected bars for INTs thrown, fumbles lost, INTs taken, plus net luck in approximate points per team; (7) drive anatomy — 32-team dot plot, X = points/drive, Y = giveaway (or 3-and-out) rate (flipped); (8) situational small multiples — early-down EPA/play, late-down EPA/play, red-zone EPA/play, EPA/dropback under pressure (the brief calls pressure EPA "the single most predictive situational split in football"), shared 0–100 scale. Number formatting rules: EPA always signed 2dp (+0.13; zero = +0.00); percentiles integer ordinals (93rd); rates 1dp with %; points/drive 2dp (2.41); counts "13 / 8.9 exp". Ship rule: 7–8 panels, never 9. Copy rules: no em dashes, no "sports intelligence", no hashtag walls, no AI-voice adjectives, max 5–12 word on-chart takeaways, no paragraph text.

## Data sources named
nflverse (CC-BY 4.0) — data-source footer. Game data window: 2025 full season (garbage time and kneels removed), plus Week 1 2026 flagged explicitly as one-game sample, not a rating.

## Findings (numbers and facts, not vibes)
- This-sheet constants: Bills (BUF) vs Lions (DET), Week 2 2026, 7:15 PM CT, New Highmark Stadium; market line BUF -5.5. Both were top-8 offenses in 2025; the separation is defensive EPA.
- Illustrative annotation examples (not claimed as final data): DET "14.2% of dropbacks gain 1.0+ EPA" tail example; v1 suggested BUF 13 actual vs 8.9 expected INTs, DET 12 vs 10.5.
- FIELD brand tokens (hex): Ground #08090C, Panel #12141A, Bone #EDE8E0 (BUF identity), Fog #C4BFB6, Mist #8A857C, Signal #FF4D2E (DET identity + loudest takeaway + fair-line delta), fog-gray #262A33 (the other 30 teams), Hairline #1E2128.
- VM environment findings (verified 2026-09-17 via fc-list): Noto Sans Display Condensed (Bold/Black/ExtraBold/SemiBold) present at /usr/share/fonts/truetype/noto/ — real condensed grotesque for headlines; Liberation Sans (Regular/Bold/Italic) for body/data; DejaVu Sans Mono for tabular accents; system Python matplotlib import BROKEN (numpy 2.5.3 vs numpy-1.x-compiled matplotlib) — builder must create a fresh venv and pip install matplotlib numpy scipy pandas.
- Hard-banned techniques (16 items): no pie/donut charts ever; no radar/spider charts ("the fastest 'AI generated this' tell"); no 3D/bevels/gradients/glows/drop shadows; no dual y-axes; no truncated bar axes that exaggerate gaps; no rainbow palettes; no legends where direct labeling works; no tick-label soup; no scatter gridlines/heavy spines; no orphan numbers (every stat carries rank/percentile/average or is cut); no paragraph text; no em dashes / "sports intelligence" / hashtag walls; no DejaVu Sans headlines; no fake precision; no overlapping text on data; do not touch v1 script/PNG, do not edit Sports AGENTS.md, no git push, no external sends.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR — EPA/dropback under pressure situational split (called the single most predictive situational split).
- COACHING — form lines (4-week rolling EPA trajectories) and the turnover-luck ledger (actual-minus-expected).
- SCHEME — 2×2 unit-vs-unit matchup grid; situational small multiples (early/late down, red zone).
- TRUST-SIGNAL — league-context-on-every-number doctrine, orphan-number ban, no-fake-precision rule, direct-labeling discipline.
- OTHER — public-facing visual product doctrine and matplotlib execution spec; not engine modeling itself.

## Engine-actionable? (yes/no + one-line what)
Yes — the 10-metric feature set and situational splits (EPA under pressure, turnover luck actual-minus-expected) are directly reusable engine features, and the league-context discipline is the standard for engine output surfacing.
