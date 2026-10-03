# ops/CLOSEOUT_TRACKS_A_B_C_D.md
## What it is (1-2 sentences)
2026-08-10 close-out status memo across four tracks (edge/PROVEN engineering, revenue, ops hardening, polish) with per-item status and evidence, bottom-lining that signal board + money rails + integrity gates were holding but PROVEN/Brier floor/closed revenue loop were not yet achieved.
## Key metrics/methods (formulas where given, else "not specified")
- Edge gates: independent trueProb coverage ≫ 0% (recorded ~65% ML/SPREAD); Brier ≤ 0.22 with 3× GREEN to close the floor; live p eligibility v5.2.6 with shrink α=0.88 + market-anchored blend; dual-objective selective with RES under Brier cap.
## Data sources named
- Signal spine: process-sport + generate-signal-slate; calibration batch; bake-off; odds dual-path + ESPN free path; full lever matrix in CLOSEOUT_ALL_LEVERS_2026-08-10.md.
## Findings (numbers and facts, not vibes)
- Track A: independent coverage ~65% ML/SPREAD, separation > 0 confirmed, but Brier ≤ 0.22 / GREEN×3 open — needed settled samples + selective + optional pause apply; denser books via THE_ODDS_API_KEY still a founder action.
- Track B: money path 6/6 + webhook healthy, waitlist → paid CTA live, end-to-end card charge still a founder action.
- Track C: Vercel-only scheduler accepted as SoT, GH External Cron documented dead, cron dual auth live, autonomy confirmed unable to flip gates.
- Track D: pick-card rankingP + priced badge live; content drafts cron live but archives thin.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: PROVEN calibration bar (Brier ≤ 0.22, 3× GREEN) and independence-from-market coverage floor for any published pick.
## Engine-actionable? (yes/no + one-line what)
Yes — adopt the Brier ≤ 0.22 + 3× GREEN and independent-coverage ≫ 0% floors as hard gates before any engine confidence is published; shrink α=0.88 + market-anchored blend is the recorded production probability recipe.
