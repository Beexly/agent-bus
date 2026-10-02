# docs/props/research/2026-09-18/notes/shauncore.md
## What it is (1-2 sentences)
A 9-line index of source notes (read 2026-09-18) on @Shauncore's PFF QB scatter plot and the PFF grading system, documenting that per-play PFF grades are paid/proprietary and defining a public proxy for positive/negative play rates.
## Key metrics/methods (formulas where given, else "not specified")
- PFF grading: every player/play graded −2 to +2 in 0.5 increments (0 = expected), position-specific rubrics, situational adjustments, converted to 0–100 across facets (passing, rushing, receiving, blocking, pass rush, run defense, coverage).
- Final 0–100 accounts for frequency and magnitude of positive/negative grades.
- Scatter plot (inferred computation): positive-play rate = count(grade > 0 on QB pass plays) / eligible graded QB pass plays; negative-play rate = count(grade < 0) / same denominator; zeros retained in denominator but in neither numerator. Exact eligibility (dropbacks vs attempts, minimum-attempt cutoff) not documented — labeled INFERRED.
- Public proxy (own): positive EPA rate / negative EPA rate on QB dropbacks — explicitly NOT a PFF-grade replica.
## Data sources named
- https://www.pff.com/grades (PFF grading system documentation).
- https://www.pff.com/news/nfl-caleb-williams-pff-grade-explained (grade construction explainer).
- @Shauncore scatter plot (PFF employee): per-QB positive-play rate vs negative-play rate.
- nflverse public box-score/PBP (as the source of the public EPA proxy; cannot reproduce subjective throw/decision grades).
## Findings (numbers and facts, not vibes)
- [QB-BEHAVIOR] Raw per-play PFF grades are paid/proprietary (PFF Data) — public box-score/PBP cannot reproduce subjective throw/decision grades; any QB "grade"-style metric built from public data is a proxy, not the thing itself.
- [QB-BEHAVIOR] The zero-grade plays are retained in the denominator of the positive/negative play-rate computation but counted in neither numerator — a stated design choice for separating true positive/negative rates from neutral plays.
- [QB-BEHAVIOR] The public proxy defined here is positive EPA rate / negative EPA rate on QB dropbacks — usable immediately on nflverse data as a stand-in for the PFF positive/negative play-rate concept.
- [TRUST-SIGNAL] Eligibility details (dropbacks vs attempts, minimum-attempt cutoff) are explicitly undocumented and labeled INFERRED — an honesty marker that the public cannot exactly replicate the chart.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Per-QB positive/negative play-rate concept and public EPA proxy → QB-BEHAVIOR
- Proprietary-vs-public gap disclosure → TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
yes — Positive/negative EPA rate on QB dropbacks is computable from nflverse today as a public stand-in for PFF's positive/negative play-rate framework; wire as a QB signal with the proprietary-grade caveat.
