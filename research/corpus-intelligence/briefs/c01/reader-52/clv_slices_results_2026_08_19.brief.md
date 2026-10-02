# ops/calibration/2026-08-19-l9-clv-slices/RESULTS.md
## What it is (1-2 sentences)
Results of the 2026-08-19 L-9 CLV (closing-line value) slice analysis on 909 graded picks from local L-7 artifacts (`raw.json`, `ml-and-books.json`, `per-book.json`), with spot-check verification 10/10, 0 mismatches.
## Key metrics/methods (formulas where given, else "not specified")
- Decided-only beat rates per market × month with Wilson 95% CIs (see Findings table).
- Sign-flip classification: lock line and close line with opposite signs = potential sign flip; if |lock| == |close| it's likely the wrong side's number (artifact); if |lock| != |close| the runline genuinely moved through zero.
- ML monster-lock flag: lock_price < -1000 on moneyline = suspect artifact.
## Data sources named
Local L-7 artifacts (`raw.json`, `ml-and-books.json`, `per-book.json`); required DB JOIN against `picks` / `odds_batch` tables for anything beyond local artifacts (marked BLOCKED).
## Findings (numbers and facts, not vibes)
- Decided-only beat rates (Wilson 95% CI):
  - 2026-06 SPREAD: 30/49 = 61.2% [47.2%, 73.6%]
  - 2026-06 TOTAL: 73/118 = 61.9% [52.9%, 70.1%]
  - 2026-06 MONEYLINE: 1/35 = 2.9% [0.5%, 14.5%]
  - 2026-07 SPREAD: 10/100 = 10.0% [5.5%, 17.4%]
  - 2026-07 TOTAL: 103/183 = 56.3% [49.0%, 63.3%]
  - 2026-07 MONEYLINE: 9/100 = 9.0% [4.8%, 16.2%]
- TOTAL deep-dive: 176/301 = 58.5% decided-only beat, Wilson CI [52.8%, 63.9%] — the ONLY market clearing the 52.4% threshold.
- Spot-check spot values (n=3, NOT representative): MLB OVER 9.5 lock=8.642857, close=9.454545, delta=0.8117, verdict BEAT_CLOSE; MLB UNDER 8.0 lock=7.9375, close=7.95, delta=0.0125, LOST_TO_CLOSE; MLB OVER 8.0 lock=8=close, MATCHED_CLOSE.
- Pub-vs-lock sign-flip classification on 388 SPREAD picks: 57 sign flips (14.7%); movement toward our side=40, away=109, unchanged=239; beat rate (toward/away) 40/149 = 26.8%. Spot-checked flips were all MLB SPREAD runlines (e.g., Atlanta Braves -1.5 published=1.5, lock=1.5, close=-0.4090..., verdict SIGN_FLIP).
- Sport breakdown NOT available from local artifacts (by_month groups market × month only); spot-check n=10 insufficient.
- BLOCKED: (3) Lock provenance audit — 909/909 picks have NO odds_batch rows matching `clv_captured_at`; ALL lock prices appear model-derived, not book-captured. (4) ML monster-lock provenance — 59/140 ML locks < -1000 (3 < -10000, 56 in -1000..-500); all 140 close prices in normal range [-500, 500]; lock_min=-21200, lock_max=105; one lock at +105 (impossible for ML favorite — model artifact). The entire -27.4pp ML mean CLV may be an artifact if no odds_batch row matches.
- Bottom line: only the TOTAL market beat showed genuine signal; SPREAD/ML results suggest model-artifact locks, not real edge.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (TRUST-SIGNAL) Core calibration evidence: decided-only CLV beat rates per market/month with CIs — the "graded in public" ledger's numbers; directly gates what the engine may claim (only TOTAL cleared 52.4%).
- (OTHER) Model-artifact diagnosis: model-derived locks without odds_batch provenance = CLV estimates are suspect; the monster-lock pattern (-21200, +105 impossible lock) is a data-quality fingerprint worth re-running as an automated QC rule.
- (SCHEME/COACHING/OL/QB-BEHAVIOR) none — no player/team-scheme content.
## Engine-actionable? (yes/no + one-line what)
Yes — two engine actions: (1) stand up the automated lock-provenance QC rule (flag any lock with no matching odds_batch row at capture time, and any ML lock < -1000 or positive-side ML lock) before trusting CLV numbers; (2) treat only TOTAL-market historical beat (58.5%, CI [52.8%,63.9%]) as validated signal; do not cite SPREAD/ML CLV from this era.
