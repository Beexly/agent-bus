# docs/ops/hermes/BUILD-QUEUE-2026-08-20B.md
## What it is (1-2 sentences)
A build-queue spec for a Hermes (Grok Build seat) session dated 2026-08-20: tasks B-6 (Glass Ledger chain wiring, blocked on founder), B-7 (Consensus Clock + Line DNA spec library), and research tails R-9 (Grok engine synthetic particle filter) and R-10 (DML causal prototype for starting-QB-out effects).
## Key metrics/methods (formulas where given, else "not specified")
- B-7: Consensus Clock dispersion half-life fit D(t) = D_inf + (D_0 − D_inf)·e^(−λt), per game; Line DNA per-game path summary = normalized total variation, increment count, book count, first/last snapshot age.
- R-9: negative-binomial hierarchical model (team/pitcher/park/umpire effects), Rao-Blackwellized particle filter with Liu-West on log-scale variance components applied after weighting and BEFORE resampling, fractional e-process with FIXED λ=0.3 primary vs adaptive-λ comparison arm; NULL TEST acceptance: across ≥200 pure-noise seeds, fixed-λ capital exceeds 20 in ≤ 5% of runs.
- R-10: Double Machine Learning (Chernozhukov et al. 2018), IRM/AIPW form, 5-fold TIME-AWARE cross-fitting, outcome = win indicator, treatment = starting-QB out/limited from nflverse injury data; diagnostics: overlap/positivity trim, placebo treatment test, sensitivity-to-unobserved-confounding bounds.
## Data sources named
nflverse injury data (R-10); synthetic data only for R-9 (hard rule: never load the odds archive or any real game table — Track E closed, C-44); Grok sandbox artifacts as spec references only, never import/trust.
## Findings (numbers and facts, not vibes)
- B-6 is BLOCKED on founder: the in-memory/JSON-file store on branch `hermes/b6a-chain-append` would ship a fake chain (module state does not survive Vercel serverless cold start); real fix requires a new Prisma model (sealed path) per proposal in docs/ops/edge/2026-08-20-ledger-chain-durability-proposal.md.
- Verified gaps in Glass Ledger: edge-lab chain `ledger-chain.ts` appendPick/appendSettlement have ZERO runtime callers; `loadLedgerView()` is a hardcoded empty stub; no public chain-export endpoint exists.
- B-7 page gated: no page ships until the phase-tagged snapshot archive holds ≥7 days of games; "collecting" rendered honestly before that.
- R-9 rule: sandbox result Grok reported (capital 896) must not be cited anywhere.
- R-10 note: SUTVA is violated in sports (game-script interference) — must be stated, not pretended away.
- Feature flags: LEDGER_CHAIN_ENABLED default OFF; PUBLISH_LEDGER must not be touched.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Starting-QB out/limited as the single treatment in the R-10 DML causal prototype: QB-BEHAVIOR (causal effect of QB absence on win probability)
- Team-strength posterior mean/variance as DML controls: OTHER
- Disperson half-life / line DNA as line-movement descriptors: OTHER
- Everything else (ledger chain, flags, branches): OTHER
## Engine-actionable? (yes/no + one-line what)
yes — R-10 is a directly engine-relevant causal design (DML estimate of starting-QB-out effect on win probability vs the filter's current TeamIntervention magnitude) and B-7's dispersion half-life formula is a reusable line-movement metric.
