# research/2026-09-19-dk-week2/deep/new-metrics-sweep-2026-09-19.md
## What it is (1-2 sentences)
A 7-day inventory (2026-09-19) of every new metric/table added to the Sports repo — X-analytics sweeps, a 2,232-row StatRankings CSV dump, a props-consensus lane, and an 8-metric evening sweep — cross-referenced against the Week 2 DK main-slate research to record what the unused metrics change for the slate.

## Key metrics/methods (formulas where given, else "not specified")
- benbbaldwin v3 tiers: "market-implied win% vs league-average team on neutral field," blending game lines + division/conference/Super Bowl/playoff/#1-seed futures (Kalshi); 32 teams in 6 tiers.
- PROE+ = Pass Rate Over Expectation x Pace; ARBY = Adjusted Run Blocking Yards/Carry; CoverageIQ+ (man/zone + 8 shells); xFP.
- Props-consensus method: base = 100% 2025 full-season means for rates (0% blended Week 1); script-adjusted volume via 2025 dropback rates by win-probability bucket (neutral ~0.57, trailing ~0.62–0.68); garbage-time correction filters ~11% of plays; sack props deliberately NULL (pressure-to-sack conversion R^2 < 0.005).
- sfdata9ers composite QB ranking: PFR weights QBR 0.35, EPA/play 0.25, CPOE 0.15, Bad Throw% 0.10, Pressure-to-Sack% 0.10, Air Yds/Rec 0.05.
- Patton playcaller "Tendency Rating": Y-Aware PCA on personnel diversification / play sequencing / tendencies; correlates with EPA.
- Turnover luck: actual minus expected INTs (e.g., CLE +7.11, LV +7.74 thrown over expected = positive regression; CHI +7.22 takeaways over expected = negative regression).
- StatRankings free leaderboards: target share (JSN 45.8%, Bijan 45.5%, Jefferson 37.5%, McBride 35.1%, Wilson 29.2%), first-read share (JSN 57.9%), air yards (Olave 234), YPRR (Z. Flowers 15.0), DK FPPG (Henry 38.3, Caleb 37.3).
- Neutral pace (sec/play): GB 21.8, TEN 22.0, CAR 22.3, WAS 22.7, NO 23.6.
- Team pressure/sack 2026 Wk1: JAX 53.1% pressure / 16.7% sack%; MIN 80.4% blitz; 2025 pressure forced: SF 8.1% (2nd-worst, rush-4 75.3%) vs DEN elite differential (21.5% forced / 10.2% allowed).

## Data sources named
@benbbaldwin, @DevyEusuf (PFF), SumerSports (via @BucsJuice screenshot), gridironviz.co (via @WillBrinson/@MediJo20), @CharlesChillFFB, StatRankings LLC (nflfastR + FTN Data), FTN charting (sfdata9ers), @hawkblogger, @rjanalytics7002 (NGS), @JMac_FF, PFF single-game grades, @Paganetti (play-by-play data, NGS), @tejfbanalytics (Sumer Sports), @PattonAnalytics, @cmain7, @ScottBarrettDFB (Fantasy Points Data Suite 2.0), @statyxio, nflverse.

## Findings (numbers and facts, not vibes)
- Unused-metric gaps closed for the slate: StatRankings free leaderboards (biggest asset); Lemon debut table (29 routes, -5 yds, -0.17 YPRR); MediJo20 rushing-EPA/TD scatter (Hurts ~2.0 EPA/gm + ~0.685 TDs/gm — slate's only QB in elite rushing-value quadrant; Jacobs -1.6 EPA/gm + 0.70 TDs/gm = TD-or-bust; Kamara 0.51 TDs/gm below 0.60 avg = receiving-dependent).
- Sharpeners: Caleb 37.3 DK FPPG + 1.20 FP/dropback + 120.6 passer rating under pressure (1st); JAX 53.1% pressure vs DEN 56.3% pressure allowed = best slate pressure mismatch; CIN 11.1% sack% + -1.49 EPA/play allowed blitzing (NFL best) vs Stroud 21% aggressiveness; MIN 80.4% blitz vs CHI in rain = CHI-DST weather leverage.
- Temperers: SF DST consensus #1 at $3.8k but 2025 pressure forced 8.1% (2nd-worst) — case is entirely MIA allowing 40.5% pressure, not SF's rush; JAX +5.04 INTs over expected 2025 (takeaway regression risk); CHI +7.22 INTs over expected (INT luck not repeatable); MIN threw +5.74 INTs over expected (unlucky — mild support for Jefferson weather-game side).
- New angles: Bryce Young deep-GPP (111.9 passer rating under pressure, 2nd; 0.81 FP/db); sfdata9ers composite QB board never consulted; Patton Tendency Rating never used; defensive-targets-by-position unused (TE-funnel/Schultz case).
- Quality flags: StatRankings team affiliations stale vs real rosters (K. Walker on KC, A.J. Brown on NE, Mike Evans on SF, Waddle on DEN; "Next Opp" DET vs NYJ stale post-TNF); statyx rush-path packages carry "Available after 3 games" footer (full RB coverage Week 4+).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] Sack props NULLed by literature veto (R^2 < 0.005) — metric-honesty standard, not a signal.
- [TRUST-SIGNAL] benbbaldwin v3: Kalshi-blended market-implied team tiers as game-script baseline; 13-game slate coverage.
- [QB-BEHAVIOR] Hurts ~2.0 EPA/gm + ~0.685 TDs/gm elite rushing-value+scoring quadrant; sfdata9ers composite QB ranking (pre-weighted board).
- [COACHING] Patton Tendency Rating (Y-Aware PCA, correlates with EPA) — unused playcaller-efficiency input.
- [OL] Pressure proxies 2025/2026: DEN 21.5%|10.2% elite differential, MIN 18.8%|21.5%, SF 8.1%|13.2%; blitz rates MIN 80.4%, GB 48.4%.
- [SCHEME] PROE+, playcalling tendencies (motion/PA/no-huddle/RPO by team), defensive targets by position (TE funnels).
- [OTHER] Turnover-luck tables (CLE +7.11, LV +7.74, MIA +6.82, MIN +5.74 over expected; CHI +7.22 takeaways over expected) — regression screens for DST and offense.

## Engine-actionable? (yes/no + one-line what)
Yes — ingest StatRankings free leaderboards + turnover-luck + pressure-proxy + neutral-pace tables as calibrated priors; adopt the sack-prop NULL veto and 100%-2025/0%-Wk1 rate-blend rule for early-season props.
