# reasoning/overnight-agent-prompt-2026-09-26.md
## What it is (1-2 sentences)
Full operating charter for the 2026-09-26 overnight autonomous coding run (Grok executor) on the GSE reasoning layer: verified-current-truth snapshot, 20-item forbidden list, the scalarizer honesty gate for signal activation, a 13-slice work queue, and measurement rules — with measured numbers on candidate signals (officials, weather, coaching) recorded as of that night.
## Key metrics/methods (formulas where given, else "not specified")
- The SCALARIZER: f1 = 0 when |r| ≥ 0.08 AND |slope| > se, else f1 = 1; f2 = 1 when the direction already has a LIVE representative; f3 = 1 when the week-3 row is missing; g = max over λ=(0.5, 0.3, 0.2) of λᵢ·fᵢ; only g = 0 goes LIVE.
- 16 signal directions with priors summing to 1: efficiency .14, scheme .12, availability .12, schedule .08, historical .08, weather .07, coaching .06, trench .05, airwave .05, officials .04, chemistry .04, bio_nutrition .04, narrative .03, social 0, market .05, meters .03 (market = context only, meters = meters).
- Separate 8-member SignalFamily union: MARKET .28, EFFICIENCY .22, TRENCHES .14, SITUATIONAL .12, MICROCLIMATE .08, MARKET_MICROSTRUCTURE .06, LUCK .05, NARRATIVE .05.
- Calibration contract bar (for later calibration slice): sample ≥ 250, ECE ≤ 0.06, drift ≤ 0.10.
- Edge math: edge = p − q with q from Shin devigging (not proportional vig); CLV needs decision-time + later price.
- Trace encoding: signed part in [−1,1] rendered as 0.5 + 0.49·clip(signed); the number is not a win probability.
## Data sources named
nflverse ingests (contracts.jsonl 11,550 rows, rosters.jsonl 99,740, snap-counts 53,228, participation 91,103 with sha256 hashes; FTN Data participation CC-BY-SA 4.0, OverTheCap contract facts, NFL+ / nfl4th precomputed `pre_computed_go_boost_{season}.rds` parsed with Python rdata 1.1.0); bridge-premises.jsonl (`pregame_context_logit`, logistic-IRLS, sample_count 6955); Sunday DraftKings salaries DKSalaries-Week3-SunMon.csv.
## Findings (numbers and facts, not vibes)
- Eight LIVE parts locked in parts-registry.jsonl for 2026_03_LAC_BUF (week W3): edge sum 0.30259224777263855, coverage 0.68. Family weights/signed: on_field_efficiency .14/1; scheme_play_design .12/0.0337; availability .12/0.6667; schedule_and_body .08/0.0880; historical_strength .08/0.5561; trench_personnel .05/0.7487; chemistry .04/0; airwave .05/−0.2083.
- DARK candidates (failed honesty gate f1): officials — 2025 holdout of 2024 crew means, n=113, r=−0.09257, slope=−0.01007, se=0.01028 (|r| clears .08 but |slope| does not clear se); weather_physics — wind slope −0.135/mph, se 0.1618, n=349 (forecast can't flip); coaching — fourth-down go rate r=−0.01363, n=255 (nfl4th counts as same family, not a second signal).
- Data-quality traps documented: bridge-premises constant sample_count across holdout rows (smell); play_by_play_2024.csv.gz lacks go_wp/punt_wp/fg_wp; `punt_wp` null on 2321/8465 fourth-down rows; snap rows have pfr_player_id but no gsis_id; NGS uses LAR while games/injuries use LA (do not alias to double-count); frozen 199 bad entryOdds rows kept as history (valid American odds: |v| ≥ 100).
- Frozen doctrine: no invented nutrition/cognition/sleep/RFID/PFF/SIS series; no scraping of scores24/PFF/Sports Reference advanced/SiriusXM; market never the objective; 2025 is the holdout — never train on 2025 then score 2025.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — engine governance and measurement machinery: the full scalarizer (honesty gates, anti-duplicate family rule), signal-direction prior map, calibration contract bars, and the measured f1 failures of officials/weather/coaching candidate signals.
## Engine-actionable? (yes/no + one-line what)
Yes — adopt the scalarizer verbatim as the signal-activation gate (|r| ≥ .08 AND |slope| > se on a true holdout, no duplicate family representatives) and the 16-prior map before promoting any new engine signal.
