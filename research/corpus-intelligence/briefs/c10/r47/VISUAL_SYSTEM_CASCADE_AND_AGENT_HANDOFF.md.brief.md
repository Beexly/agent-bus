# gse/VISUAL_SYSTEM_CASCADE_AND_AGENT_HANDOFF.md
## What it is (1-2 sentences)
A compact architecture + handoff sheet for GSE's decision pipeline: quote/stats bulkheads → ingest → slate partitioning → calibration → IVAP multiprob gating → DecisionCertificate (FIRE|NO_BET) → honesty surfaces (UA, Phase C live meter, HEOS walk-forward). Thesis: "Sell honesty, not pick volume. Refusal-Native Forecasting."
## Key metrics/methods (formulas where given, else "not specified")
- IVAP multiprob fire rule: FIRE ⇔ n≥100 ∧ width ok ∧ (p_lo − q) > τ. Phase C baseline: 888|359|283|0 eval|(5b)=0 — to be remeasured after Odds paid.
## Data sources named
None named beyond bulkheads (quotes, stats), ingest (*/30 + fetchedAt + hist vault append), hist_odds_snapshot.
## Findings (numbers and facts, not vibes)
- Integrity law: No LIVE_BOARD=1 · no 6h widen · no pav/ivap rewrite · no invented ROI · certificates issued only after gate · HEOS is separate from public tips.
- Phase C baseline recorded as 888|359|283|0 eval|(5b)=0; remeasure owed after the paid Odds feed.
- Live board stays dark until measurement says a stratum can evaluate; thin strata are not close enough; stale quotes are not close enough.
- Merge order noted: #220 → #218 → #219 → #224 (preferred over #222) → #223 → #226 HEOS.
- HEOS consumes `ivapPredict` only (intervalFn → real ivapPredict, consume only); `certificateFromGateCandidate` runs after gate only.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Integrity law (no invented ROI, certificates after gate only, live board dark until measurement) — honest calibration-state labeling (TRUST-SIGNAL)
## Engine-actionable? (yes/no + one-line what)
No — architecture/handoff snapshot with no new sports signal; the fire rule and integrity law are pipeline design already in place, not new wire-able findings.
