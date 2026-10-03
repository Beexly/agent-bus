# arxiv-program/research/2026-09-21/arxiv-deep/1815-fractional-tackles-tracking.md
## What it is (1-2 sentences)
Full-text read of Nguyen, Yurko & Yu (2024), "Fractional Tackles" (arXiv:2403.14769): a new defensive stat from NFL tracking data that detects contact windows around the ball-carrier and distributes fractional tackle credit among all contacting defenders proportional to their toward-carrier velocity, replacing the binary conventional tackle count. Verdict in file: ADAPT — adopt fractional tackles as GSE's reliable defensive metric for IDP projections and tackle-prop pricing.

## Key metrics/methods (formulas where given, else "not specified")
- Contact window: {t : min_d dist(d, carrier, t) ≤ 1.5 yd} (threshold chosen because ~95% of first-contact/tackle-event distances fall below it). Multiple windows per play allowed.
- Window value: v(w) = E[Y_end | state at window end] − E[Y_end | state at window start] (yards prevented, positive = good defense).
- Fractional tackle per defender: FT_d = Σ_w v(w) · share_d(w); share allocated by peak toward-carrier velocity, adjusted by a first-contact indicator.
- Extensions: tackle-attempt detection (lunge/angle changes); forced missed tackles (defender enters 1.5-yd radius but carrier escapes).
- Validation: split-half (Spearman–Brown style) reliability; cross-validation of the window-value model.

## Data sources named
- NFL Big Data Bowl 2024: 12,486 plays / 136 games, weeks 1–9 of the 2022 season; 10 Hz player tracking (x, y, speed, acceleration, orientation) + play/event annotations.
- Analysis restricted to 5,539 running-back run plays (of 6,670 total run plays).
- Code: https://github.com/qntkhvn/tackle (R package/scripts). Data public on Kaggle.

## Findings (numbers and facts, not vibes)
- Split-half reliability: fractional tackles 0.69 vs. combined tackles 0.59 overall; by position group 0.57/0.57/0.73 vs. 0.46/0.51/0.64 — fractional wins in every group.
- Leaderboard (2022 weeks 1–9 RB runs): Roquan Smith 19.83 total / 0.102 per-play; Christian Wilkins 17.53 / 0.125; Bobby Wagner 17.33.
- Coverage: 19,691 player-play instances credited vs. 7,720 conventional tackle/assist instances (~2.5× coverage).
- 7,453 contact windows detected; mean window duration 1.28 s.
- First-contact share and forced-missed-tackle extensions identify defenders whose box-score tackles understate disruption.
- Limitations: RB run plays only (no pass plays, scrambles, WR screens); 1.5-yd threshold and velocity-share rule are heuristics with no ground truth; 10 Hz tracking can miss brief contacts; forced-missed-tackle detection rule-based and unvalidated; single 9-week sample, no season-to-season stability shown.
- Reproducible test in file: split-half reliability ≥ 0.65 for fractional tackles, strictly above conventional tackles on the same sample; Roquan Smith must rank #1 among LBs.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (IDP/defense): fractional tackles are a more reliable per-defender defensive metric (0.69 vs. 0.59) — directly feeds IDP fantasy projections and tackles+assists prop pricing; the contact-window + window-value + attribution template generalizes to pass-rush windows (time-to-pressure credit) and coverage windows (target-prevention credit).
- OL-adjacent (INFERENCE): contact windows on runs implicitly encode offensive line performance (ball-carrier value preserved vs. lost), but the file does not develop this; run-blocking application would be original GSE work.

## Engine-actionable? (yes/no + one-line what)
Yes — implement contact-window detection (1.5-yd rule) + window-value model + velocity-share attribution on run plays to produce per-defender fractional-tackle rate (per play/per snap) as a higher-reliability feature for IDP projections and tackle-prop pricing, then extend the template to pass-rush pressure windows.
