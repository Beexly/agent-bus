# docs/dfs/research/2026-10-01/full-tables/README.md
## What it is (1-2 sentences)
Index of full CSV transcriptions from an X analytics sweep on 2026-10-01 (9:30 PM CDT 9/30 → 10:15 AM CDT 10/01), covering situational play-calling tendency posts (mainly @RyanPaganetti) and player efficiency leaders (PFF, GridironInfo, PattonAnalytics), read-only as @GalaxySportsHQ.
## Key metrics/methods (formulas where given, else "not specified")
- League-wide 2nd & 1 pass rate by season ("normal situations only"): 2017 16.6% → 2025 20.6% → 2026 (Week 3) 32.7%.
- After 1st & 10 pass gains first down: league-avg 59.0% run next play (thrown RPOs counted as runs).
- After 1st & 10 run gains 5+: league-avg 42.2% pass on 2nd (113/268); Panthers 87.5% highest, Jets 0.0% (0/6) lowest.
- After 1st & 10 incompletion: league-avg 43.4% run on 2nd; Seahawks 100% (3/3), Ravens 0.0% (0/1) and Colts 0.0% (0/9) lowest.
- After 1st & 10 run gains ≤3 yards: Broncos 100% pass (11/11), Titans 53.8% (7/13) lowest.
- Season EPA/dropback leaders 2026: Purdy +0.62 (83 db), Dart +0.58 (36), Lock +0.45 (50) … Geno Smith +0.22 (112).
- PFF lowest catch% allowed CB 2026 (min 10 targets): Trent McDuffie 23.1%.
- PFF lowest passer rating allowed CB 2025: Jamel Dean 47.7.
- Off-target throw%: Jordan Love 33.1% leads, Bryce Young 18.3% last listed.
## Data sources named
X posts (@RyanPaganetti, @GridironInfo_ via nflverse/nflreadpy 2026-09-29, @PattonAnalytics via @StatRankings, @PFF, @ghatz_28 via nflfastR). No CSVs embedded in README (index only). Attributed reply note: Paganetti called a 1-yard 2nd & 1 gain "negative EPA".
## Findings (numbers and facts, not vibes)
- [COACHING] 2026 league 2nd & 1 pass rate through Week 3 is 32.7% vs 20.6% in 2025 — a sharp jump; attributed post notes Ben Johnson is "pass heaviest 2nd and 1 coach this century".
- [COACHING] Team-level situational pass/run splits vary wildly (Panthers 87.5% pass after successful 1st-down run; Jets 0.0%; Cardinals/Falcons 100% run after 1st-down pass first down).
- [QB-BEHAVIOR] Purdy (+0.62) leads 2026 EPA/dropback; Geno Smith +0.22 over 112 dropbacks.
- [OTHER] Still-missing item: @AjayTakes "Robbed Score" backtest was still missing as of ~10:15 AM CDT 10/01.
- [TRUST-SIGNAL] Data provenance documented per item (source + caveats); scatter values flagged APPROXIMATE with no CSV.
## Engine-actionable? (yes/no + one-line what)
Yes — ingest the per-team situational tendency splits as coaching tendency features for game-script/projection priors.
