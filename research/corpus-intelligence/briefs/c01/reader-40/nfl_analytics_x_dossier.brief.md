# data-sources/research/2026-09-17/dossiers/nfl-analytics-x-dossier.md
## What it is (1-2 sentences)
A verified dossier (research date 2026-09-17, public-search verified) of 25 NFL analytics X accounts across data science, independent metrics, film/scheme, fantasy, betting markets, plus 3 essential brands — ranked as a follow list with methods and lanes per handle, framed as "learn from, do not copy."

## Key metrics/methods (formulas where given, else "not specified")
No formulas; catalogs metric families per handle: EPA/play, success rate, CPOE, empirical-Bayes/Markov rankings, fourth-down win probability, DVOA/DYAR, win-probability calibration, pressure/completion/conversion probability, pass-rush/pass-block win rates, Receiver Tracking Metrics, Run Block/Run Stop Win Rate, Rush Yards Over Expectation, Weighted EPA, Elo, Relative Athletic Score (0–10 scale), True Sack Rate, usage splits (snap share/route participation/target share), QB EPA/play tiers, Offseason Improvement Index, blended win probabilities, opponent-adjusted ratings, SumerScore, yards created.

## Data sources named
- nflfastR/nflverse (open R packages; via @benbbaldwin, RBSDM creator)
- Next Gen Stats (official tracking data; @NextGenStats, @KeeganAbdoo)
- PFF (charting: grades, pressures, pass/run-blocking grades)
- SumerSports (EPA, personnel tendencies, pressure-to-sack, frame-level completion/sack probability, coverage metrics, yards created, SumerScore)
- FTN (DVOA via @ASchatzNFL)
- ESPN analytics (win probability, Run Block/Run Stop Win Rate, Receiver Tracking Metrics)
- NFL Football Data and Analytics (internal, via @StatsbyLopez: causal fourth-down research)
- Sports Info Solutions (Total Points, routes/coverages/assignments charting)
- RayCarp.com / *The Spade* (@csv_enjoyer: EPA/play, rush-gap splits, combine percentiles, player-similarity)
- nfelo (@greerreNFL: open Elo + predictions + betting context, DMs invited)
- RAS.football (@MathBomb: Relative Athletic Scores 0–10)

## Findings (numbers and facts, not vibes)
- Five most important follows: @csv_enjoyer (reproducible open research), @benbbaldwin (infrastructure everyone stands on), @ASchatzNFL (DVOA standard-bearer), @KeeganAbdoo (inside-NGS tracking research), @MikeClayNFL (largest-audience projection baseline, explicitly reply-friendly — invites questions/error reports in his 2026 draft guide).
- Wrong-seed corrections documented: @FO_ASchatz → @ASchatzNFL, @RichHribar → @LordReebs, @DianteLeeNFL → @DianteLeeFB, @DrewDinsick → @whale_capper, @KevinColePFF → @KevinCole___; unconfirmed handles (@TimoRiske, Nathan Jahnke) excluded until verified.
- @ClevTA self-publishes 54% ATS over 1,000+ contest selections since 2013 and 58.4% on 2025 sides/totals — self-published, NOT independently audited.
- @BaldyNFL ("Baldy's Breakdowns") does film-based protection-scheme/line-technique analysis with no proprietary model; @BrandonThornNFL tracks "True Sack Rate" and OL tiers; @BenjaminSolak connects scheme intent to statistical output; @Nate_Tice bridges film and DVOA/tracking metrics.
- @KevinCole___ (ex-PFF) publishes QB EPA/play tiers and an Offseason Improvement Index on projected roster point differential; @RufusPeabody is the professional-bettor benchmark for noise removal (opponent adjustment, garbage-time/penalty-noise removal, regression toward market).
- Engagement posture: only @MikeClayNFL and @greerreNFL have documented outreach channels; all others "reply frequency not established."

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (TRUST-SIGNAL) — @RufusPeabody's noise-removal methodology (opponent adjustment, garbage-time/penalty-noise removal, regression toward market) is a calibration discipline for engine outputs; self-published-vs-audited records distinction (ClevTA 54% ATS) is a trust-signal grading rule.
- (SCHEME) — @BenjaminSolak / @Nate_Tice / @DianteLeeFB (defensive structure, coverage, pressure, run-defense tendencies) as scheme-context sources; @SharpFootball's situational-efficiency/personnel-tendency charts.
- (OL) — @BrandonThornNFL (OL tiers, True Sack Rate, trench mismatches), @BaldyNFL (protection-scheme film), ESPN's Run Block/Run Stop Win Rate and pass-rush/pass-block win rates (@bburkeESPN, @SethWalder).
- (QB-BEHAVIOR) — @KevinCole___ QB EPA/play tiers; @KeeganAbdoo pressure/completion probability; @StatsbyLopez causal fourth-down work.
- (COACHING) — @SharpFootball personnel tendencies and situational efficiency as coaching-tendency readouts.

## Engine-actionable? (yes/no + one-line what)
Yes — one-line: nfelo (@greerreNFL) is an open, replicable Elo baseline the engine should benchmark ratings against, Mike Clay's projection set is the public projection baseline, and SumerSports' free pressure-to-sack/frame-level metrics are the cheapest sack-attribution signal available.
