# arxiv-program/research/2026-09-21/arxiv-deep/0403-bigger-data-better-questions-and-a.md
## What it is (1-2 sentences)
Deep-read of arXiv:1909.10631v3 (Lopez 2019), the JQAS special-issue intro on NFL tracking data: shows the famous "go for it on 4th down" benefit was overstated ~40% because play-by-play records only integer distance-to-go while teams self-select on precise distance, and publishes an NGS tracking-data engineering spec (coordinates, accuracy, play-flipping). The reader's verdict is ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- No equations; methods: density plots of precise yards-to-go split by decision within integer buckets; two generalized additive models (GAMs) — P(go | precise distance) and P(convert | precise distance); replication of Yam & Lopez (2019) propensity-score wins-added analysis with integer vs. precise distance; "squeezing the balloon" check (conditioning on the 17-variable play-by-play model *widened* the precise-distance imbalance between go/no-go teams).
- NGS spec: x/y for all 22 players + ball at ~10 fps from RFID chips; 250,000–350,000 rows/game; no z-coordinate; location accurate to ±12 inches, reliable on 99.999% of players/games over three seasons; football coordinates slightly less reliable; field coordinates fixed per stadium (x: 0–120, y: 0–160/3); ~half of offensive plays must be flipped (x→120−x, y→160/3−y); max speed sometimes recorded during/after a tackle; year-to-year speed differences after tag updates.
- Precise distance computed two ways (ball RFID on 4th down vs. 1st-down-derived line-to-gain; ball chip vs. sideline-chain chip) — "differences in the numbers were negligible."
## Data sources named
All 4th-down plays 2017–2019 NFL regular seasons; Yam & Lopez (2019) 17-variable play-by-play covariate set (yardline, time, score, timeouts, pre-play WP); replication code at https://github.com/statsbylopez/nfl-fourth-down/tree/master/Code; six special-issue papers summarized (route clustering, coverage clustering, NGS-from-images, EHCP, LSTM ball-carrier yardage); 2019 Big Data Bowl (1,800+ participants); tracking data covers 2016 onward.
## Findings (numbers and facts, not vibes)
- 4th-and-1: go-teams median 0.70 yards from line vs. 0.98 for no-go teams (0.28-yard gap); 4th-and-2: 1.98 vs. 2.06.
- GAM estimates: 4th-and-inches went for it ~70% of the time vs. ~30% for long 4th-and-1; conversion ~79% vs. ~55%.
- Replication: integer distance → aggressive 4th-down strategy worth +0.35 wins/team/year, per-play WP-added 3.8% (95% CI 2.6%–4.9%); precise distance → +0.22 wins/team/year, per-play 2.2% (95% CI 0.6%–3.4%). Roughly 40% of the benefit is negated; CIs overlap substantially, so the magnitude is noisy.
- Squeezing the balloon: among low-go-probability teams, go-teams were more than half a yard closer than no-go teams — matching on observables worsened the unobserved imbalance.
- Yurko et al. example: Patterson's expected gain 15 yards on 2nd-and-short vs. ~5% historical success rate for such plays.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Precise-distance confounder (~40% attenuation of 4th-down aggressiveness value) must discount any GSE 4th-down value claim until recomputed on 2023–2025 data (COACHING).
- Squeezing-the-balloon diagnostic: conditioning on play-by-play covariates can *increase* imbalance on unobserved tracking covariates — standing causal-hygiene check for any GSE matching/conditioning claim (TRUST-SIGNAL).
- NGS engineering spec (coordinates, ±12-inch bound, play-flipping, no-z, tag-update caution) belongs in the NGS lane as the canonical data-QA checklist (OTHER).
- File's improvement experiment: test box-count/defensive front at the snap as the next unmeasured confounder on 2023–2024 data (SCHEME).
## Engine-actionable? (yes/no + one-line what)
Yes — two ports: (1) replace integer distance-to-go with tracking-derived fractional distance in all GSE 4th-down value estimates and apply the ~40% attenuation as a documented discount until recomputed on 2023–2025 data; (2) adopt the NGS data-handling spec as the canonical QA checklist for every tracking pipeline.
