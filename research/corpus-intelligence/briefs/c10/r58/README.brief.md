# research/2026-09-20/full-tables/README.md
## What it is (1-2 sentences)
Inventory of full data tables transcribed verbatim from live X posts during the 2026-09-20 AM and PM benchmark sweeps (with the full AGENTS.md X-analytics sweep as the metric inventory; this file is the per-table provenance record).
## Key metrics/methods (formulas where given, else "not specified")
No formulas specified. Table-level methods: Raritos "nota 1–10" composite = EPA + success rate + pressure summarized into one 1–10 figure with ATAQUE/DEFENSA sub-ratings (data as stated: SumerLive/SumerSports via raritosdelfootball.com public stats table); ThunderDanDFS "WR Coverage Upgrades" = 2025 baseline YPPR crossed with projected opponent coverage splits to a projected YPPR, coverage blend 80% 2025 data + 20% Week 1 (author's own model, source not stated); @ngreenberg fourth-down GoForIt% values are VISUAL ESTIMATES from a line chart (TruMedia, Datawrapper); @SamHoppen waterfall = Win probability added and total EPA by ten game facets (Pass Off, Run Off, Pass Def, Run Def, Takeaways, Giveaways, Off Pen, Def Pen, Special Teams, Other), data nflfastR; QB EPA/play leaderboard (hawkblogger, min 50 dropbacks, partial — image cut at row 7).
## Data sources named
@RaritosFootball (team 1–10 ratings, QB ratings top-10 image), @MagicSportsGuy/StatRankings (11/12/21 personnel usage for 21 new-OC teams 2026 vs 2025; coverageIQ+ Defense Card: Ravens pass-defense dossier vs WR, 2025, 655 coverage snaps), @ThunderDanDFS (WR coverage upgrades, 50 WRs+TEs), @ngreenberg (fourth-down aggressiveness 2002–2026, TruMedia), @SamHoppen (waterfall recaps, nflfastR; full set at samhoppen.substack.com, paywall unverified), @hawkblogger (QB EPA/play leaderboard, no source stated), @sfdata9ers (BAL@NO recap; early-window recaps).
## Findings (numbers and facts, not vibes)
- QB ratings image (Raritos): Geno Smith 9.3 (highest) ... Caleb Williams 7.0 (10th); columns: NOTA, DROPBACKS, EPA/DROPBACK, success-in-dropback %, target-throw %, pressures→sack %.
- New-OC personnel usage: league averages 11 personnel 57.7%, 12: 21.9%, 21: 7.8% (2026-to-date; 21 new-OC teams, 63 rows).
- BAL 17 vs NO 24, Week 2: BAL posted 16.6% higher success rate than NO and still lost — second-largest net success-rate upset since 2022 (@sfdata9ers).
- Week 2 score recorded: MIN 9 @ CHI 3 (win probability and EPA attributed across ten facets in the waterfall chart).
- QB EPA/play leaderboard (min 50 dropbacks, partial): Purdy 0.51, Drew Lock 0.44, Allen 0.39, Prescott 0.34, B. Young 0.27, Lawrence 0.23, Caleb Williams 0.22.
- Fourth-down aggressiveness: 2026 Weeks 1–2 ≈ 16% (down from ≈ 21% in 2025); 2025 ≈ 20.5%; 2013 ≈ 9% (series low); 2009 ≈ 14.5% (first spike). Author framing: "small-sample blip or new normal?"
- coverageIQ+ feature: clicking a WR's opponent/matchup icon opens a per-team pass-defense dossier (coverage splits × snap rate/FP-route/y-route/TGT-G/REC-G/catch %/tgt rate/passer RTG/y-att/TDs/rank-of-32; alignment allowed Left/Slot/Right/Perimeter; summary incl. Fantasy Allowed to WRs, Target Share Allowed by position). Ravens example: "pass defense vs WR · 2025 · 655 coverage snaps". Detail sections gated behind statrankings+ (not accessed).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Fourth-down go-for-it 16% vs 21% — if sustained, meaningful points/game impact across all projections (COACHING; TRUST-SIGNAL: flag as visual estimate, small sample)
- New-OC personnel usage table = 63 rows of 11/12/21 rate changes, directly usable as TE/scheme inputs (SCHEME)
- Ravens coverageIQ defense card = coverage-split vs FP/route matchup data structure to replicate for all 32 teams (SCHEME; OTHER: data gated behind paywall)
- Success-rate upsets (BAL 16.6% higher and lost, 2nd-largest since 2022) — calibration input on variance of success rate vs score (TRUST-SIGNAL)
- Ten-facet EPA/WPA attribution (Hoppen) = team win contribution decomposition model (OTHER)
## Engine-actionable? (yes — new-OC personnel-usage CSVs as TE/WR scheme inputs; coverage-card matchup schema; fourth-down-rate trend as projection input if it holds past Week 4)
