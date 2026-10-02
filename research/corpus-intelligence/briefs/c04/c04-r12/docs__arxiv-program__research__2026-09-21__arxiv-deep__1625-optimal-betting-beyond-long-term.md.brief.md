# docs/arxiv-program/research/2026-09-21/arxiv-deep/1625-optimal-betting-beyond-long-term.md
## What it is (1-2 sentences)
Ledger of arXiv:2503.17927 (2025): derives fractional Kelly systematically from the CLT asymptotic variance of the log-growth rate — the asymptotic Sharpe ratio SR_r(f) = g_r(f)/√υ_r(f) and the ridge objective Ri_r(f,γ) = g_r(f) − γυ_r(f), so every γ>0 yields a below-full-Kelly optimizer and varying γ traces a growth-vs-volatility efficient frontier, replacing the ad-hoc "half Kelly" rule. Verdict in the ledger: ADAPT — GSE should adopt the ridge objective for its default sizing.
## Key metrics/methods (formulas where given, else "not specified")
- Asymptotic Sharpe: SR_r(f) = g_r(f) / √υ_r(f), where g_r(f) is the per-bet log-growth and υ_r(f) its asymptotic variance.
- Ridge objective: Ri_r(f,γ) = g_r(f) − γυ_r(f); every γ>0 yields an optimizer strictly below full Kelly; varying γ traces the frontier, so the "fraction" is indexed by a risk-aversion parameter with a Sharpe interpretation.
- Assumptions: i.i.d. bets; CLT applies to the log-growth rate (finite second moments); asymptotic regime approximates GSE-scale bet counts.
## Data sources named
No external dataset. Theory plus a fully worked Bernoulli example (p=.75 even-money bet, full Kelly f*=.5 vs fractional f=.25). No code stated.
## Findings (numbers and facts, not vibes)
- Bernoulli p=.75: full Kelly f*=.5 → growth ≈.13, SR≈.27; fractional f=.25 → growth ≈.10, SR≈.43 — i.e., a ~20%-ish growth sacrifice for a ~60% Sharpe improvement.
- Paper's claim: the ridge frontier dominates ad-hoc fractional rules — each γ maps to a (growth, Sharpe) pair, and the whole curve is attainable by construction.
- Ledger's limitations: asymptotic (CLT) results may mislead at small bet counts; the Bernoulli example is the friendliest possible case (known edge, symmetric); no guidance on choosing γ from data; variance control does not fix a biased p; no correlated-bet treatment.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Stake-sizing: Kelly sizing discussed 12 times in GSE research with zero prior reads (per the ledger's research-map check) — new capability; replaces the ad-hoc "half Kelly" default with a Sharpe-indexed frontier.
- [OTHER] Implementation recipe: per posted pick compute g(f) and υ(f) from the engine's calibrated p and market odds (closed form for binary bets); user-facing "risk dial" γ with presets (conservative/moderate/aggressive) mapped to target asymptotic Sharpe values; size stakes by maximizing Ri_r(f,γ); log realized (growth, volatility) per γ preset for ongoing calibration. Effort: 1 day closed-form solver, 1 week for dial + logging.
## Engine-actionable? (yes/no + one-line what)
Yes — add the ridge objective Ri_r(f,γ) as GSE's default fractional-Kelly sizing rule with a user-facing risk dial; acceptance gate: on the 2025–2026 pick replay, some γ>0 achieves realized Sharpe ≥ half-Kelly's with realized growth within 5% of half-Kelly's; INFERENCE: the ledger's improvement experiment estimates γ adaptively (refit weekly to trailing-8-week realized Sharpe) to auto de-risk in miscalibrated regimes.
