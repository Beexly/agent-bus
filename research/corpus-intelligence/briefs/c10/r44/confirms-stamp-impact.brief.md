# engine/research/2026-09-28/confirms-stamp-impact.md
## What it is (1-2 sentences)
Production audit (2026-09-28, Neon read-only) measuring the blast radius of a defect where `agreement: CONFIRMS` corroboration labels were stamped on published pick rows by counting estimators that are not independent sources. Commits `ebd125bd1` (fix) and `bb7e91558`.
## Key metrics/methods (formulas where given, else "not specified")
SQL audit of `picks` JSONB factorBreakdown: 788 rows had CONFIRMS with marketFairProb JSON-null (the defective signal path) vs. 202 rows on the book-priced path that calls assessEdge correctly. JSONB null must be compared as `= 'null'::jsonb`; `->>` on JSON null returns SQL NULL (a false zero was first produced by this gotcha). Source-combo counts: {poisson, mlb_standings, elo} 510; {kalshi, poisson, mlb_standings, elo} 190; {poisson, elo} 47; {kalshi, elo} 20; {kalshi, espn_powerindex} 13; {espn_powerindex, elo} 8. Corroboration-independence probe (`.hermes/scratch/confirms_audit.py`): one train-window team-strength rate vs. realized 2025 outcomes, n=285 players — corr 0.7533, R² 0.5675, top-20% overlap 32/57 (jaccard 0.390).
## Data sources named
Production Neon `picks` table; sources named in the stored `sources` arrays: poisson, mlb_standings, elo, kalshi, espn_powerindex. All 788 defective rows are baseball (MLB).
## Findings (numbers and facts, not vibes)
- 788 published rows carried a CONFIRMS stamp produced by counting estimators: every combo is team-strength estimators (poisson, mlb_standings, elo, espn_powerindex) — "three team-strength models agreeing on a matchup" = one opinion counted three times, presented as corroboration by apps/web/lib/pick-explainer/grounding.ts.
- The per-source direction behind each stamp is NOT recoverable: rows store source names and blended trueProb, not each source's homeFairProb — "reconstructing it would be inventing the number under audit." The fraction actually false is not determinable.
- The fix (ebd125bd1) changes the label only: rows with genuinely differing directions now read SPLIT. decision, confidence, conviction computed above agreement are unchanged — no published probability, rank, or grade moved; no row was rewritten (historical rows keep their label, "the correct treatment of a published record").
- The staleness gate branches on !== "SOLO", so SPLIT and CONFIRMS are treated identically there.
- Corrected reading of the audit script: a single team-strength estimator already explains 57% of outcome variance (corr 0.7533), so extra estimators add little independent information but not zero; at the top-20% end it finds 32 of 57 realized players — "direction agreement is real and far from unanimous."
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Corroboration requires estimator independence; same-class models agreeing is one opinion, not confirmation — TRUST-SIGNAL (label integrity / explainer honesty).
- No-rewriting of published records after a label defect — TRUST-SIGNAL (audit integrity).
- kalshi (market) mixed into some source combos is a genuinely different source class than poisson/elo — TRUST-SIGNAL (source-class weighting in the blend).
## Engine-actionable? (yes/no + one-line what)
Yes — persist per-source homeFairProb + direction alongside the blended trueProb on every pick row so corroboration labels are always re-auditable, and extend the independence check to NFL source classes before shipping explainer corroboration claims.
