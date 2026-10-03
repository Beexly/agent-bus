# arxiv-program/research/2026-09-21/arxiv-deep/1691-two-versions-of-treatment.md
## What it is (1-2 sentences)
Deep read of arXiv:1705.03918 (Hasegawa, Deshpande, Small, Rosenbaum 2018) — causal-inference method for treatments with observable versions: report both the primary confidence interval Ic (all data) and a versions-robust interval Iv (union of version-specific intervals) jointly with NO multiplicity penalty, plus Rosenbaum Γ sensitivity analysis; illustrated with a high-school-football-and-cognitive-decline study. Ledger verdict: ADAPT for GSE's situational-factor causal claims (rest, dome, travel).

## Key metrics/methods (formulas where given, else "not specified")
- Setup: full-matching observational study; randomization inference for additive effect τ; versions a, b with Yij(0,a), Yij(0,b); τ^a, τ^b; τmin=min(τ^a,τ^b), τmax=max(τ^a,τ^b).
- Nulls: H^aτ0, H^bτ0, Hτ0 = H^aτ0 ∧ H^bτ0; one-sided p-values Pτ0, P^aτ0, P^bτ0.
- Ic^− = smallest [τ̃,∞) containing {τ0 : Pτ0 > α}; Iv^− = smallest [τ̃,∞) containing {τ0 : Pτ0>α or P^aτ0>α or P^bτ0>α}; two-sided via intersecting 1−α/2 one-sided intervals; Iv = union of conventional intervals (or convex hull).
- Prop 1: if one version, Pr(Iv ⊇ Ic ⊇ τ) ≥ 1−α; in any case Pr(Iv ⊇ τmin) ≥ 1−α — jointly, NO multiplicity correction, NO power loss on Ic.
- Sensitivity: Rosenbaum Γ bounds for unmeasured confounding at Γ=1 and Γ>1.
- Improvement idea from read: extend to heterogeneous versions via causal forests τ^a(x), τ^b(x); apply dual-interval reporting to engine model-version comparisons.

## Data sources named
- Football study: matched sets of HS football players vs controls (control versions: "no sport" vs "non-collision sport"); outcome = delayed word recall score in later life. No public dataset named; no code.
- GSE test data: NFL games 2015–2024 with rest-day differentials, ATS margin (actual − spread) as outcome; match on spread bucket and home/away; versions: 3–4 extra rest days vs 7+ extra days; ≥200 matched sets.

## Findings (numbers and facts, not vibes)
- Football study (Γ=1): Ic = [−0.308, 0.099]; Iv = [−0.357, 0.219] — both compatible with no effect; both rule out ±0.5 words (full age-65→72 age-related decline benchmark).
- Simulation (Appendix): dual-interval method beats the omnibus F-test in power to reject Fisher's sharp null when versions differ by < ~30–40% in magnitude with the same sign.
- Zero multiplicity cost: Ic is exactly the conventional interval.
- Gate from read: ADAPT if Iv width ≤ 1.4× Ic width AND Γ-value tipping Iv to include 0 ≥ 1.3; REJECT if Iv > 2× Ic or primary finding tips at Γ < 1.1.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- COACHING (SITUATIONAL FACTORS): rest advantage, short weeks (Thursday vs Monday→Sunday), travel (time zones), dome (fixed vs retractable roof), surface, backup-QB versions (veteran vs rookie) — report Ic+Iv pairs for every published causal claim.
- OTHER (METHODOLOGY): multiple-assumptions-not-multiple-hypotheses framing; usable for model-version performance deltas.

## Engine-actionable? (yes/no + one-line what)
Yes — upgrade every situational-factor write-up and internal calibration to dual-interval Ic/Iv reporting with Rosenbaum Γ sensitivity (1–2 weeks effort).
