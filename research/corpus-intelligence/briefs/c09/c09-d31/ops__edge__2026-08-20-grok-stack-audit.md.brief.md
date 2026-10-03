# ops/edge/2026-08-20-grok-stack-audit.md
## What it is (1-2 sentences)
Audit of a Grok-proposed elevated prediction engine (hierarchical negative-binomial totals model with Rao-Blackwellized particle filter, Liu-West kernel, cubature Kalman updates, fractional e-process with residual-information gating). Verdict: algorithmic core genuine, several claims rejected as novelty-inflated or unverified, a scoped synthetic-first adoption queued as R-9/R-10.
## Key metrics/methods (formulas where given, else "not specified")
- Liu & West (2001) kernel: `a·φ + (1−a)·mean + sqrt(1−a²)·noise` (formula stated as correct in-file).
- Arasaratnam & Haykin (2009) cubature filter: 2n equal-weight points, all positive.
- Fractional e-process with bet intensity λ and prior temperature modulated by "residual information" estimate; audit verdict: sequential estimation of conditional mutual information I(X;Y given m) with a few hundred binary outcomes is noise-dominated — estimator/confidence sequence unspecified, gate treated as liability until demonstrated on synthetic nulls.
- Acceptance criteria adopted: engine must **die cleanly on pure noise** (capital process certifies at no more than nominal α rate across many noise seeds) and recover planted hierarchical edges faster than an open-loop baseline.
- NB hierarchical model with park/weather/pitcher/umpire effects; hierarchical shrinkage for umpire/ABS effects.
- R-10: DML causal inference, shadow-only, one treatment (QB out), time-aware cross-fitting, mandatory overlap/placebo/sensitivity diagnostics.
## Data sources named
- Real 241-game MLB totals archive (kill test explicitly declined — Track E CLOSED on this corpus, C-44 pre-registered).
- Grok's own sandbox synthetic data with a planted edge (final capital ≈896 — smoke test only, never citable).
- In-repo verified ground truth: `packages/prediction-engine/src/team-strength-filter.ts` (42KB bootstrap particle filter, TeamIntervention, snapshot/restore, seeded, shadow status).
- Bickel & Kim update: 2-4% posterior for a real MLB totals edge (prices expected value of running the 241-game kill test at ≈ zero).
## Findings (numbers and facts, not vibes)
- n=241 is "a high-quality kill test, not a discovery test" per Grok's own power math — cannot detect a realistic edge.
- Umpire/ABS magnitudes cited as ±0.3-0.5 runs and CS% thresholds — rated "folklore-tier and unverified"; the shrinkage treatment is right regardless of magnitude.
- No fabricated algorithms or invented citations in the Grok proposal.
- Novelty claim ("this closed loop does not exist in any published paper") rejected: λ_t depending on past capital/data is a predictable betting strategy already licensed by anytime-valid theory (Waudby-Smith & Ramdas; GRAPA/aGRAPA-style adaptive bets).
- C-44 leaves one door open: a separately pre-registered prospective program on forward data (NFL accumulating since 2026-08-20, MLB 2027, phase-tagged archive now writing).
- R-9 amended to extend house filter conventions rather than invent a parallel style; Grok sandbox artifacts remain spec references only — nothing imported, nothing cited as evidence.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — prediction-engine methodology audit: null-test gating, e-process bet sizing, hierarchical totals modeling, DML causal treatment evaluation (QB-out treatment).
## Engine-actionable? (yes/no + one-line what)
Yes — the "dies cleanly on pure noise at ≤ nominal α rate across many seeds" null-test gate is a concrete acceptance criterion for any future engine module.
