# docs/arxiv-program/research/2026-09-21/arxiv-deep/1468-safe-leads-and-lead-changes.md
## What it is (1-2 sentences)
Deep-read ledger of Clauset, Kogan & Redner (2015) "Safe Leads and Lead Changes in Competitive Team Sports" (arXiv:1503.03509v1). Verdict: ADAPT — the arcsine-law scoring model plus the closed-form safe-lead formula gives GSE a parameter-light baseline for in-game win probability and "lead safety" features, as a benchmark/feature rather than a replacement for play-by-play models.

## Key metrics/methods (formulas where given, else "not specified")
- Arcsine density: f(t) = 1 / [π √(t(T−t))], t ∈ (0,T) — applies to fraction of time leading, time of last lead change, and time of maximal lead.
- Safe-lead probability (evenly matched teams): Q(L,τ) = erf(L / √(4Dτ)), where L = lead, τ = time remaining, D = diffusion constant estimated from scoring-event data.
- Scoring modeled as biased random walk / diffusion; team strength enters as drift (Péclet number); persistence parameter p = P(scoring team scores next).
- Acceptance gate: adopt safe-lead features if adding them to the live WP model improves 2022–2024 log-loss by ≥1% with reliability-curve slope in [0.95, 1.05].

## Data sources named
40,747 games / 1,306,515 scoring events: NBA 11,744 games / 1,098,747 events (2002–2010); CFB 14,586 / 123,448 (2000–2009); NFL 2,654 / 20,561 (2000–2009); NHL 11,763 / 63,759 (2000–2009). Replication path: nflverse play-by-play 2015–2025 for NFL calibration.

## Findings (numbers and facts, not vibes)
- Arcsine laws hold well in NBA and NHL; football fits are weaker (discrete 3/7-point scoring, field position effects, larger team-strength disparities, few events).
- NBA: a 10-point lead is ~90% safe with 7.87 minutes remaining; 18 points at halftime likewise ~90% safe.
- Maximum empirical NBA overestimate of lead safety reported as 6.2%.
- NBA estimates: mean 93.56 scoring events/game, 2.07 points/event, persistence p = 0.360 (scoring runs have memory — same team scores next 36% of the time beyond the random-walk baseline), 9.37 lead changes/game; diffusion D ≈ 0.0391 points²/sec; Péclet ≈ 0.77.
- NFL context: ~7.75 scoring events/game vs NBA's ~93.6 — the diffusion approximation is weakest exactly where GSE needs it.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Safe-lead formula Q(L,τ) as a live WP baseline feature — OTHER (methodological; no QB/coaching/OL behavioral content).
- Persistence p = 0.360 suggests scoring-run memory that a within-game model should capture — OTHER (game-state dynamic, not QB behavior specifically).
- Team strength as drift term with per-game estimation from pregame spread — OTHER.
- Suggested NFL improvement (compound Poisson jump-diffusion with 3/7-point masses instead of Brownian) — OTHER.

## Engine-actionable? (yes/no + one-line what)
Yes — implement Q(L,τ) as a closed-form baseline WP and "lead safety" feature fed into the existing live model, with NFL-calibrated D and per-game drift; ~3 days effort.
