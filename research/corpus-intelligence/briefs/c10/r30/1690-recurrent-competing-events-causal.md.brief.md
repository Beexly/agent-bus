# arxiv-program/research/2026-09-21/arxiv-deep/1690-recurrent-competing-events-causal.md
## What it is (1-2 sentences)
ADAPT verdict deep-read of Janvin, Young, Ryalen & Stensrud, arXiv:2202.08500 (2022; updated 2026-08-08): a formal causal-inference framework for recurrent events with competing events — defining total, controlled-direct, and separable effects and deriving estimators via a unified stochastic differential equation. The brief maps it to GSE's injury/workload lane: recurrent soft-tissue injuries with season-ending IR as the competing event; recommends starting with a lightweight discrete-time IPW version.
## Key metrics/methods (formulas where given, else "not specified")
- Estimands: total effect E[Y^{a=1}_k] vs E[Y^{a=0}_k] (Eq. 1); controlled direct effect E[Y^{a=1,d̄=0}_k] vs E[Y^{a=0,d̄=0}_k] (Eq. 3); separable effects via hypothetical treatment components (aY, aD) with isolation conditions (Eq. 4).
- Estimator: unified SDE (Eq. 47) — (Ŷt, Ŝt, D̂t)ᵀ = (0,1,0)ᵀ + ∫₀ᵗ diag(Ŝs−, −Ŝs−, Ŝs−) d(B̂s^Y, B̂s^D, B̂s^{D,w}); risk-set (Eq. 48) and Horvitz–Thompson/Hájek IPW (Eq. 49) integrators with additive-hazard weight processes; R packages transform.hazards and ahw at github.com/palryalen/.
- Censoring generalized (Young et al. 2020): a competing event is censoring for the controlled direct effect but NOT for the total effect.
## Data sources named
SPRINT trial demonstration (age >75, complete baseline covariates): 1,312 standard + 1,311 intensive arms; 73 vs 52 deaths by day 1,000; 668 lost to follow-up; baseline covariates smoking/CVD history/CKD/statin use/sex; time-varying mean arterial pressure. SPRINT data via NHLBI BioLINCC (controlled access). No sports data in the paper — the sports-injury mention is motivational only.
## Findings (numbers and facts, not vibes)
- SPRINT recurrent-AKI over 1,000 days: total effect 0.017 [−0.001, 0.037]; controlled direct effect 0.017 [−0.003, 0.037]; separable direct effect (aD=1) 0.011 [−0.005, 0.034] — all 95% bootstrap CIs; weights truncated to [0.2, 5]; smoothing b ∈ {100, 200, 500} similar. (OTHER)
- Borderline increased AKI under intensive treatment; no evidence the separable (kidney-specific) component explains it. (OTHER)
- Separable effects rest on strong, untestable "modified treatment" assumptions — the authors flag this explicitly. (TRUST-SIGNAL)
- Gate: ADAPT the taxonomy if the NFL replication shows the naïve censor-at-IR estimate and IPW total effect differ by ≥ 20% with identified positivity; REJECT the full machinery if the difference is < 10%. (TRUST-SIGNAL)
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- COACHING: formalizes the load-management question ("does high workload cause hamstring re-injury?") with season-ending ACL/IR as the competing event that truncates recurrence — naïve censor-at-IR analyses estimate an ill-defined controlled direct effect, not the total effect coaches care about.
- OTHER: separable-effects lens applies directly to the NFLPA turf-vs-grass debate — decompose the surface effect into (aY) direct surface-mechanics vs (aD) the component operating through season-ending injuries.
- TRUST-SIGNAL: no existing GSE doc distinguishes these estimands; adopting the taxonomy as a reporting standard prevents causal claims from resting on ambiguous estimands.
- SCHEME: INFERENCE — improved proposal replaces the continuous-time additive-hazard SDE with a discrete-time doubly robust learner with cross-fitted ML at each week, more natural for weekly NFL data.
## Engine-actionable? (yes/no + one-line what)
Yes — estimate the total effect of high-workload exposure on recurrent soft-tissue injury counts (2018–2024, discrete-time IPW with IR as competing event) and publish the estimand-taxonomy reporting standard for injury-causal claims.
