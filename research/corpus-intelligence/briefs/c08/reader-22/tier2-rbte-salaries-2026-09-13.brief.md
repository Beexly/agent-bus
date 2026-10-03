# docs/dfs/research/2026-09-13/verify/tier2-rbte-salaries-2026-09-13.md
## What it is (1-2 sentences)
Two-source verification of eight claimed FanDuel Week 1 RB/TE salaries against permitted publications (20 banned outlets excluded); only 2 of 8 reach CONFIRMED.
## Key metrics/methods (formulas where given, else "not specified")
- Threshold: CONFIRMED = ≥2 independent permitted publications report the exact FanDuel salary; CORRECTED/UNVERIFIABLE per rules.
- CONFIRMED: Jahmyr Gibbs DET RB **$9,100**; Michael Mayer LV TE **$4,600**. UNVERIFIABLE (no second permitted source): Lloyd $4,900; Javonte Williams $6,800; Chase Brown $7,500; Juwan Johnson $5,400; Tyler Warren $5,600; Trey McBride $7,600.
- Scale check: all figures consistent with FanDuel $60K-cap scale (Gibbs FD $9,100 vs DK $8,000).
## Data sources named
Fantasy Life (Sep 11, 2026 FanDuel Week 1 plays); Fantasy Leagues Info; DraftDashboard Raiders team page (live Week 1 `site=fanduel` view).
## Findings (numbers and facts, not vibes)
- **2 of 8 salaries verified**; the remaining 6 appear at submitted values only in banned outlets — usable as direction, not verdicts.
- Javonte Williams is highest slate-risk: his single $6,800 source names no contest and he plays Sunday Night Football; a banned primetime piece lists him at $7,000 for a different slate — slate-specific pricing varies.
- No permitted source explicitly labels coverage as the "Sunday–Monday" contest; the FanDuel contest lobby itself is the only definitive source.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: salary figures need slate-scoped two-source confirmation before entering an optimizer; banned-source numbers are direction-only.
- OTHER: the slate-labeling gap (main vs Sun–Mon) is a contamination risk for any salary snapshot.
## Engine-actionable? (yes/no + one-line what)
Yes — only Gibbs $9,100 and Mayer $4,600 are two-source CONFIRMED; the other six salaries must enter the model flagged UNVERIFIED and re-pulled from the actual FanDuel contest lobby.
