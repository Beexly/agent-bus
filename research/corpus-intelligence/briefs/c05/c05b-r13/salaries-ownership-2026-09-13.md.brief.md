# docs/dfs/research/2026-09-13/verify/salaries-ownership-2026-09-13.md
## What it is (1-2 sentences)
Verification wave for the Week 1 FanDuel Sun-Mon slate: 4 worker passes consolidated to confirm or flag previously submitted salaries and ownership numbers, with a strict verdict key (CONFIRMED / UNVERIFIABLE / CORRECTED) and a banned-source list honored throughout.

## Key metrics/methods (formulas where given, else "not specified")
Formulas: not specified. Methods: CONFIRMED = 2+ independent allowed sources agree; UNVERIFIABLE = fewer than 2 allowed sources, number kept as submitted (never invented); CORRECTED = 2+ allowed sources establish a different number. No submitted salary was disproven (zero corrections this wave).

## Data sources named
FantasyLife (Sep 11 FD W1 article), Fantasy Leagues Info (FLI QB/WR pages), DraftDashboard (live FD Week 1 view), FantasyAlarm ownership model ("NFL DFS Game Stacks Week 1", Sep 12), FantasyLabs (Sep 13 free stacks article), DraftKings Network (Sep 10), RotoWire, SI (excluded — stale 2025 table), FanDuel's own main-slate export (slate ID 133104, 3 independent GitHub mirrors).

## Findings (numbers and facts, not vibes)
- Only two double-confirmed salaries: Jahmyr Gibbs $9,100 (FantasyLife + Fantasy Leagues Info "FanDuel prices him at $9,100") and Michael Mayer $4,600 (FantasyLife + DraftDashboard).
- Submitted-but-UNVERIFIABLE single-source figures: Barkley $8,100, Goedert $5,300, DeVonta Smith $7,500, Murray $7,200, Jefferson $8,100, Hockenson $5,000, LaPorta $5,800, JAX DST $4,800, Prescott $8,300, McConkey $6,500, Zay Flowers $7,300, Olave $7,400, Lloyd $4,900, Javonte $6,800, Chase Brown $7,500, Juwan Johnson $5,400, Tyler Warren $5,600, McBride $7,600.
- QBs/WRs matched against FanDuel's own main-slate export (slate ID 133104, 3 GitHub mirrors) + one corroborating source, but still marked UNVERIFIABLE for Sun-Mon: Burrow $8,200, Hurts $8,300, Herbert $7,600, Lamar $8,400, Allen $8,900, Baker $7,500, Goff $7,800, Chase $8,900, ARSB $8,600, Olave $7,400.
- FLAGS: JAX DST $4,800 submitted vs $5,000 in banned-source articles — check in lobby; Javonte $6,800 vs $7,000 on a banned primetime piece (SNF player, pricing may vary by slate).
- Numeric ownership HITS (prior "zero" assumption was wrong): Burrow/Chase ~30% both DK and FD (FantasyAlarm) — highest-owned QB/WR pair; Herbert 21%+ FD / 14% DK (FantasyAlarm) — ownership changes the Herbert read: value holds but leverage angle weaker on FD; Lamar ~5% (FantasyLabs) — confirmed leverage; Drake London well under 10% (DK Network); Bucky Irving single digits (RotoWire).
- RotoGrinders keeps numerics behind Premium; Stokastic/SaberSim/ETR/DFSArmy/FantasyCruncher/FantasySixPack/LineupLab surfaced nothing numeric and free.
- Recalibration: zero corrections; treat unverified numbers as "matched FanDuel's main-slate export where checkable" rather than invented; two in-lobby checks before lock (JAX DST, Javonte); residual gap: no free source publishes FanDuel Sun-Mon Classic salaries — only FanDuel's lobby closes it; live-browser lobby check recommended.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **TRUST-SIGNAL**: the file's core value — a verification protocol (CONFIRMED = 2+ independent sources; UNVERIFIABLE kept-as-submitted, never invented; banned-source list honored; stale-trap avoidance: SI 2025 ownership table excluded, flagged explicitly) that quantifies confidence per number instead of hand-waving it. Ownership HITS corrected a prior "zero" assumption.
- **OTHER**: practical data-market finding — free numeric ownership is scarce (FantasyAlarm, FantasyLabs, RotoWire, DKN only); six major tools publish nothing numeric free; slate ID 133104 + 3 GitHub mirrors is a reproducible FanDuel export reference.

## Engine-actionable? (yes/no + one-line what)
Yes — the verdict-key protocol (confirmed/unverifiable/corrected with per-number confidence) is a template for labeling engine output certainty, and the known free-source gaps for FD salaries/ownership define what data must come from the lobby/API instead of scraped research.
