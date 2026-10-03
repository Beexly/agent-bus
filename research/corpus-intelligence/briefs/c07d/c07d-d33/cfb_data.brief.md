# arxiv-program/research/2026-09-21/notes/cfb_data.md

## What it is (1-2 sentences)
Source notes on @CFB_Data (Bill Radjewski, operator of CollegeFootballData.com) read 2026-09-21: a college-football analytics account profile plus verbatim transcription of his 2026-09-20 "CORE Offense vs. Defense" chart — a preseason-prior-blended per-100-plays efficiency metric — with approximate quadrant placements for ~30 FBS teams through Week 3.

## Key metrics/methods (formulas where given, else "not specified")
- **CORE** (CollegeFootballData.com proprietary): definition as stated in chart footer — "Points above FBS average per 100 plays · Dashed lines = 0 (average)". No formula given. Blend: "25% preseason / 75% observed" (verbatim from the author's post). Chart title: "CORE Offense vs. Defense" / "2026 Through Week 3".
- Axes: X = "Offensive CORE (higher is better)", scale −10 to 15. Y = "Defensive CORE (lower is better)", scale −15 (top, best) to 10 (bottom).
- Quadrants (as labeled): top-left "WEAKER OFFENSE · STRONGER DEFENSE"; top-right "STRONGER ON BOTH SIDES"; bottom-left "WEAKER ON BOTH SIDES"; bottom-right "STRONGER OFFENSE · WEAKER DEFENSE".

## Data sources named
- CollegeFootballData.com (author's public college football data API/site) — the standing public CFB data source named in the file; CORE is their proprietary metric.
- The chart itself: https://x.com/cfb_data/status/2101702177894838281, 10:57 AM · Sep 20, 2026. No other data source named.

## Findings (numbers and facts, not vibes)
- **Author:** Bill Radjewski (aka BlueSCar), @CFB_Data, verified. Bio verbatim: "Bill Radjewski (aka BlueSCar) | Software guy who dabbles in analytics |". Cincinnati, OH; link CollegeFootballData.com; joined Aug 2019; 324 following / 11.7K followers. Independent analytics data provider, creator/operator of CollegeFootballData.com. College-only (not an NFL account).
- **Post engagement:** 10:57 AM Sep 20, 2026 — 12 replies / 63 reposts / 470 likes / 69 bookmarks / 106.7K views.
- **Post text verbatim:** "The early two-way contenders are starting to separate. Alabama, Notre Dame, and Ohio State all sit firmly in the "stronger on both sides" quadrant through Week 3. And then there's that Mississippi State offense. 👀 25% preseason / 75% observed blend."
- **Chart reads (approximate; logos overlap in the middle):**
  - Mississippi State: chart-topping offensive CORE (~+15), defense ~−5; top-right edge of "stronger on both sides".
  - Top-right (strong both sides): LSU (~+2 off, ~−14 def — best defensive CORE shown); Ohio State (~+9, ~−13); Notre Dame (~+9, ~−13); Alabama (~+11, ~−13); Mizzou (~+4, ~−12); Michigan (~+2.5, ~−9.5); Penn State (~+9, ~−8.5); Georgia (~+9.5, ~−7); Indiana (~+6, ~−6.5); Nebraska (~+7, ~−5); Tennessee (~+7.5, ~−4); UCLA (~+11, ~−4); BYU (~+11.5, ~−4.5); Pitt (~+1.5, ~−7); Duke (~+3, ~−7.5); Iowa State (~+3.5, ~−7); Iowa (~+1, ~−8).
  - Top-left (weaker offense, stronger defense): Oklahoma (~0, ~−10); Washington (~−1.5, ~−9); TCU; Old Dominion; Texas A&M (~−2, ~−5); Oregon (~−2, ~−5); Kentucky (~−3.5, ~−4); Kansas; UCF; Clemson; Navy/Army-type logos.
  - Bottom-right (strong offense, weak defense): USC (~+13, ~+1.5); Ole Miss (~+13, ~+3); Louisville.
  - Bottom-left (weak both sides): unmarked/blurry logos.
- **GSE relevance as stated in the file:** CORE = proprietary per-100-plays efficiency above average, preseason-prior blended — "same Bayesian-blend construction as the NFL advanced-metric blends GSE already tracks"; useful as CFB-side team-strength input if GSE ever extends to college.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: Offensive CORE is a team-level per-100-plays efficiency, not a QB-specific behavioral metric — no QB-level findings here. If a CFB lane opens, the 25/75 preseason-observed blend is the stabilization template for early-season QB efficiency reads (same Bayesian-blend construction as the NFL blends GSE tracks). (OTHER.)
- COACHING: None directly; two-way quadrant placement (e.g., LSU ~+2 off / ~−14 def best defense; USC ~+13 off / ~+1.5 def) is a team-strength snapshot, not coaching-tendency data. (OTHER.)
- OL: None directly — CORE aggregates all per-100-plays efficiency without an OL split. Gap noted. (OTHER.)
- TRUST-SIGNAL: Not applicable — college data, and Garrett's lanes are NFL/NCAA-first per standing preference but the engine's trust-target intake is NFL; file itself frames this as "if GSE ever extends to college." (OTHER.)
- SCHEME: The four-quadrant team archetypes (e.g., bottom-right USC/Ole Miss strong-offense-weak-defense shootout profile vs top-left Oklahoma/Washington defense-carrying profile) are SCHEME-relevant team fingerprints for totals modeling — but only at the aggregate CORE level, no play-level scheme data. (SCHEME, weak.)
- OTHER: Two durable intelligence items: (1) the **25% preseason / 75% observed blend** is an explicit, quotable early-season stabilization weight — a concrete Bayesian-shrinkage recipe for any early-season team-strength blend (week-3 weights); (2) CollegeFootballData.com is confirmed in the file as the standing public CFB data source (API + site) with a proprietary efficiency metric — a registered source for a future CFB extension. The Mississippi State ~+15 offensive CORE outlier is an early-season one-sided-outlier archetype worth flagging in any CFB totals/projection intake.

## Engine-actionable? (yes/no + one-line what)
Yes — the 25%/75% preseason-observed blend is a quotable early-season shrinkage weight for team-strength metrics, and CollegeFootballData.com + CORE are registered as the standing public CFB team-strength source if the college lane opens (Mississippi State ~+15 offensive CORE as the week-3 outlier archetype).
