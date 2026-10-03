# docs/POLISH_BACKLOG.md

## What it is (1-2 sentences)
A standing owner-directive backlog ("polish EVERYTHING. mapping, data, stats") updated 2026-06-13, with shipped items and open items, each carrying gates and owner actions.

## Key metrics/methods (formulas where given, else "not specified")
not specified — no formulas. One formatting standard: one-decimal percentages across /performance (the pct() calibration panel was rounding to whole numbers; tabular-nums on every numeric stat/cell/reliability row).

## Data sources named
SPORTSDATAIO/FANTASYDATA licensed salary feed (env keys light up /fantasy/dfs board automatically); DraftKings CSV import; nflverse source files spot-checked (pfr_advstats pass/def, snap_counts, ngs_receiving, player_stats); Jeff Mans "One MANS Opinion" free public podcast (FantasyGuru Elite+ network), registered as `jeff-mans-one-mans-opinion` with status `manual_research_only` — RSS metadata readable, audio copyrighted, no automated transcription without written permission; SiriusXM corporate licensing parked per owner.

## Findings (numbers and facts, not vibes)
- Optimizer real-pool path SHIPPED: licensed salary feed + DK CSV import live; sample-slate banner shipped. [OTHER]
- Players Lab stat polish SHIPPED 2026-06-13: every fmtPercent column spot-checked against live nflverse files (pfr_advstats pass/def, snap_counts, ngs_receiving, player_stats); all 0–1 vs 0–100 scales verified correct — only two scale bugs existed (Box% and STACKED_BOX_HIGH, fixed 2026-06-12); per-view "rows + fetched" stamps added to /players hero line. [TRUST-SIGNAL: scale-verification discipline]
- Galaxy Twin mapping SHIPPED 2026-06-12: board state → node posture (published glow / gate-held dim / scoring pulse) with inspector chips. [OTHER]
- Performance/calibration formatting SHIPPED 2026-06-13: one-decimal percentage standard across /performance; pct() was rounding to whole numbers — INFERENCE: previously published calibration percentages had integer-rounding noise that could mislead readers of Brier/calibration panels. [TRUST-SIGNAL]
- Pundit lanes licensable check EVALUATED 2026-06-13: Jeff Mans podcast added to source-rights registry as manual-research-only; SiriusXM corporate licensing parked. [TRUST-SIGNAL: rights-aware sourcing precedent]
- Film Room render slate HELD: burns Higgsfield credits (staged media_id fe262e43…, ~18cr/clip, ~100cr full slate); do not run while credits constrained. [OTHER]
- ADMIN_EMAILS in Vercel is a founder action; code side shipped 2026-06-13 (amber "ADMIN_EMAILS unset" badge in cockpit header). [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- nflverse 0–1 vs 0–100 scale audit pattern (Box% and STACKED_BOX_HIGH were the only two bugs across four source files): a reusable check for any engine stat ingestion — verify every percentage column's scale against the live source before trusting it. [TRUST-SIGNAL]
- One-decimal calibration percentage standard: whole-number rounding on reliability rows hides calibration drift; a display-level fidelity rule for the engine's calibration panels. [TRUST-SIGNAL]
- Manual-listener-log rights posture (metadata yes, automated transcription no): precedent for ingesting expert pundit claims legally — relevant to any Airwave claim-intake lane. [OTHER]

## Engine-actionable? (yes/no + one-line what)
Yes — adopt the nflverse 0–1/0–100 scale-verification step and the one-decimal calibration display standard as standing engine QA rules.
