# arxiv-program/research/2026-09-21/arxiv-deep/1696-balance-asymmetry-subsequent-injury.md
## What it is (1-2 sentences)
A prospective case-control study (n=54, 10-month follow-up) of Tunisian soccer players with non-time-loss groin pain vs matched healthy controls: groin-pain players showed large static/dynamic balance asymmetries and a 7.48 odds ratio of subsequent noncontact lower-extremity injury (63% vs 18.5%). The "minor non-time-loss injury → measurable asymmetry → major subsequent injury" cascade is portable to NFL availability modeling.
## Key metrics/methods (formulas where given, else "not specified")
- Static: force platform single-leg stance, CoP velocity symmetry index (eyes open/closed × 3 trials); group×vision interaction F=4.508, p=0.03, ηp²=0.08
- Dynamic: Y-Balance Test (anterior/posteromedial/posterolateral, normalized to limb length); pre-registered cutoffs ≥4 cm posteromedial asymmetry, ≤89.6% composite
- Stats: G*Power a priori (26/group), repeated-measures ANOVA, t-tests + Cohen's d, logistic regression for injury incidence
## Data sources named
Authors' lab + club recruitment (Sfax, Tunisia): 27 groin-pain + 27 matched controls, Tunisian elite second division; 10-month monthly phone/email surveillance; individual values in supplementary materials; no public repo/code
## Findings (numbers and facts, not vibes)
- Y-BT asymmetries higher in groin-pain group all directions (p<0.001): anterior d=2.23, posteromedial d=2.11, posterolateral d=1.53, composite d=2.83
- Injured-limb composite below 89.6% (p<0.001, d=−11.0); posteromedial asymmetry above 4 cm (p<0.001)
- Subsequent injury: 17/27 (63%) vs 5/27 (18.5%), p<0.001, V=0.45; OR = 7.48 [95% CI 2.15–26.00], p<0.01
- Limitations: no exposure hours recorded; n=54, wide CI; no position stratification; monthly self-report; soccer-specific; no causal mechanism separation (asymmetry vs confounding)
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: availability modeling — replicate the prospective cascade on NFL injury reports 2015–2024: "minor designation but played" → time-loss injury within 8 weeks; Cox model with minor-injury flag as time-varying covariate; "re-injury risk" annotations on injury-report content and availability-risk adjustments in fantasy projections; improvement: dose-response test (limited-snaps gradient) + position-specific cascades (e.g. hamstring→calf for speed positions)
## Engine-actionable? (yes/no + one-line what)
Yes — build the minor-injury→subsequent-injury cascade test on NFL injury reports (1–2 weeks); gate: adjusted OR ≥2.0 for time-loss injury within 8 weeks of a minor designation (p<0.05, controlling age/position/prior-season injuries); reject if OR<1.3.
