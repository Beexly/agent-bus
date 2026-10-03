# docs/ops/SESSION_LEVERAGE_ATLAS_2026-08-09.md
## What it is (1-2 sentences)
A cross-domain leverage map from the 2026-08-09 session: live production probe results (SHA, settlement, calibration, odds freshness) mapped to code already shipped on main, open PRs, and founder-only actions needed to turn shipped code into live capability.
## Key metrics/methods (formulas where given, else "not specified")
- Calibration RED: Brier 0.27, ECE 0.11, RES ≈ 0.002 (RES from PR #398–408 ranking-law work).
- Canonical settled picks: 1017 (≥100 floor); PROVEN ladder still RED.
- Odds insert stale since ~2026-07-25.
- PR series #391–#408 shipped (founding/cal R&D/proven path + independents Kalshi/FPI/ClubElo/DC); open PR #409 (ranking surfaces sort by rankingP), #402 (ranking power control plane UI), #370 (Jynx prompt-cache + max_tokens, cost leverage), #371/#372 (honesty soft-land/real edits), #258 (APEX OS, founder-YES gated).
## Data sources named
Live probe of production deployment; main branch git log; open PR list; CREDITS.md action-pack status.
## Findings (numbers and facts, not vibes)
1. Production SHA lagged main — redeploy main needed so PRs #398–#408 land (TRUST-SIGNAL: never claim PROVEN/ROI while RED).
2. Settlement healthy, 0 overdue; free settle path ready; 1017 canonical settled picks — sample OK but PROVEN still RED (TRUST-SIGNAL).
3. Calibration RED: Brier 0.27, ECE 0.11, RES≈0.002 → maps OFF, AUTO_PUBLISH false, LIVE_BOARD/PERFORMANCE_STATS marketing blocked while RED (TRUST-SIGNAL).
4. Odds insert stale since ~2026-07-25 → market board dark; signal board OK; PUBLIC_BOARD_SURFACE=signal posture (never invent lines / never lower SLA) (TRUST-SIGNAL).
5. Free-spine present but SLA stale; re-run free-spine-health (OTHER).
6. Credit stack: free-lane + Azure/Vertex; keep cash Anthropic last (OTHER).
7. Research harvest ported: sports-skills Kalshi series (live config saved; GSE maps aligned), news RSS curated defaults, betting line_movement ported to public tools math, Oddpool full-catalog triage at docs/research/prediction-market-ecosystem-triage-2026-08-09.md, prediction-market tool bookmarks at docs/research/prediction-market-tool-bookmarks.md (SCHEME/TRUST-SIGNAL).
8. RankingP surfaces (open PR #409) — user-visible demotions sorted by rankingP (OTHER).
9. Founder-only clicks: redeploy main, restore THE_ODDS_API_KEY quota, waitlist gate off, claim Neon/Vercel/AI/Azure action packs, machina CLI login (OTHER).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Finding 1: TRUST-SIGNAL
- Finding 2: TRUST-SIGNAL
- Finding 3: TRUST-SIGNAL
- Finding 4: TRUST-SIGNAL
- Finding 5: OTHER
- Finding 6: OTHER
- Finding 7: SCHEME
- Finding 8: OTHER
- Finding 9: OTHER
## Engine-actionable? (yes/no + one-line what)
No — ops/prod leverage inventory (not sports method), though the hard gate "no PROVEN/ROI claims while calibration RED" is a binding publication doctrine.
