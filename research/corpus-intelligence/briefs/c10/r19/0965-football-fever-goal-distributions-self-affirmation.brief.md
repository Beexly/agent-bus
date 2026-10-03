# arxiv-program/research/2026-09-21/arxiv-deep/0965-football-fever-goal-distributions-self-affirmation.md
## What it is (1-2 sentences)
Deep-read ledger for arXiv:physics/0606016v1 — "Football fever: goal distributions and non-Gaussian statistics" (Bittner, Nußbaumer, Janke, Weigel, 2006). Fits soccer goal distributions with microscopic "self-affirmation" feedback models (scoring changes subsequent scoring probability) rather than ad-hoc Poisson/NBD/GEV; verdict ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- Model A (additive feedback): p(n) = p₀ + nκ; Model B (multiplicative): p(n) = p₀κⁿ (clipped to [0,1]); Model C (coupled): home goal → p_h × κ_h, p_a / κ_a and vice versa.
- Exact distribution via Pascal recurrence: P_N(n) = [1−p(n)]P_{N−1}(n) + p(n−1)P_{N−1}(n−1), O(N²), N=90 Bernoulli steps.
- Continuum limit of Model A = NBD with r = p₀/κ, p = 1 − e^(−κN) (Appendix A proof).
- GEV: P_{ξ,μ,σ}(n) = (1/σ)[1 + ξ(n−μ)/σ]^(−1−1/ξ) exp(−[1 + ξ(n−μ)/σ]^(−1/ξ)).
- Sum/difference consistency: P_Σ(σ) = Σ_n P_h(n)P_a(σ−n); P_Δ(δ) via modified Bessel I_δ (Poisson case).
## Data sources named
fussballdaten.de, fussballportal.de, nordostfussball.de, sportergebnisse.de, rdasilva.demon.co.uk. Bundesliga 1963/64–2004/05 (~12,800 matches), Oberliga (GDR) 1949/50–1990/91 (~7,700), Frauen-Bundesliga 1997/98–2004/05 (~1,050), FIFA World Cup qualification 1930–2002 (~3,400), plus 14 further European premier leagues.
## Findings (numbers and facts, not vibes)
- Poisson rejected everywhere: χ²/dof 6.53–12.8 (e.g., Bundesliga home λ=2.01±0.02, χ²/dof=6.53; Oberliga away λ=1.05±0.01, 12.8). Tails fatter than Poisson.
- NBD fits well: χ²/dof 0.68–4.09 (Bundesliga home p=0.11±0.01, r=15.9±2.10, 0.68); Bundesliga r ≈ 2× Oberliga r.
- Larger κ in Oberliga than Bundesliga ("more encouraging" scoring; alternatively West teams switched to defensive mode when leading); Frauen-Bundesliga much larger κ (fatter tails), paralleling WC qualification.
- Model B fits World Cup qualification extremely well — away scores better than GEV ("each goal motivates more than the previous — true football fever").
- GEV: ξ small and mostly negative (Weibull); ξ=0 (Gumbel) rejected; GEV never best fit for German leagues.
- Home–away correlation: R = −0.015±0.011 (Oberliga), −0.031±0.009 (Bundesliga) — weak but significant negative correlation.
- Caveat [37]: NBD arises both as compound-Poisson (non-contagious) and as limit of contagious Model A — fit quality alone cannot prove the feedback mechanism (spurious contagion).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Poisson rejected; multiplicative feedback fits WCQ best — OTHER (scoring-event distributional modeling for totals)
- Per-league κ profiling (Oberliga > Bundesliga; Frauen-BL largest) — OTHER (league-level scoring-feedback priors for low-data leagues)
- Weak but significant negative home–away correlation −0.031±0.009 — OTHER (build into bivariate score models; quantifies cost of independence assumption)
- Sum/difference convolution consistency check as coherence gate — TRUST-SIGNAL (template for GSE spread/total coherence gate: flag inconsistent score-difference distributions)
- κ interpretation: "more encouraging" scoring vs defensive-mode-when-leading — COACHING (in-play behavioral read: trailing vs leading team behavior modulates subsequent scoring)
## Engine-actionable? (yes/no + one-line what)
yes — Replace Poisson totals modeling with multiplicative feedback model B (exact O(N²) recurrence, one κ per league) with gate: feedback model must beat Poisson by ≥4 χ²/dof points before use in totals pricing; immediate application: multiplicative in-play totals updates after each goal plus a spread/total coherence gate.
