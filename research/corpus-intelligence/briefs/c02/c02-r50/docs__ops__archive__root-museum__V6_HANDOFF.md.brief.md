# docs/ops/archive/root-museum/V6_HANDOFF.md

## What it is (1-2 sentences)
The 2026-05-21 overnight autonomous "v6 pass" handoff: it triaged 13 uploaded zip archives (rejecting 9 on legal/security/quality grounds and mining 2 for ideas), shipped two pure-math engine helpers (quarter-Kelly bankroll sizing and a Maher 1982 / Dixon-Coles 1997 Poisson soccer goal model) with ~46 new tests, and produced a launch QA checklist, a rejected-sources audit log, and a legitimate sports-data provider catalogue.

## Key metrics/methods (formulas where given, else "not specified")
- `packages/prediction-engine/src/kelly.ts` — quarter-Kelly bankroll math: `recommendStake({confidence, edgeScore, pickType, line}) → KellyStake | null`; hard-capped at **3 units**, minimums **confidence ≥ 65** and **edge ≥ 50**; standard professional defaults. ~**16 tests** (odds conversion, Kelly math, units, threshold gates, MONEYLINE/SPREAD/TOTAL handling, 3-unit cap). Exact formula not given in this file ("not specified" — see kelly.ts itself for the equation).
- `packages/prediction-engine/src/poisson.ts` — **Maher 1982 / Dixon-Coles 1997** goal-distribution model: joint score matrix, moneyline + over/under probabilities, consistency-score helper; **not yet wired into scoring** — guarded in production via `assertTeamRatesAvailable()` until a team-rate ingestion adapter ships. ~**30 tests** (factorial, PMF/CDF, joint matrix coverage→1, moneyline/over-under probability invariants, consistency-score monotonicity, production guard).
- Test totals: pre-v6 suite at **273 passing**; expected **~319** (~273 + ~46 new). Both modules re-exported from `packages/prediction-engine/src/index.ts`.
- Archive triage: **13** uploads reviewed; **9 of 13 rejected** (legal/security/quality/off-stack); **2 mined for ideas**; **three** deemed "genuinely dangerous."
- Data catalogue (`docs/data-source-options.md`): recommended launch posture **~$41–61/mo** (api-sports.io, SportsDataIO, balldontlie, ESPN public endpoints — with rate limits, costs, ToS posture, integration cost).

## Data sources named
- api-sports.io, SportsDataIO, balldontlie, ESPN public endpoints (legitimate sports-data provider catalogue with rate limits/costs/ToS).
- Rejected archives: `Stake-All-Games-Predictor-Latest`, `Public-FotMob-API`, `Upcoming-and-Live-Sports-Data` (plus 6 more rejected by category, detailed in `docs/rejected-data-sources.md`).
- David Dias' Front-End Checklist (source distilled into `docs/launch-qa-checklist.md` — 11 sections, MUST/SHOULD/NICE).

## Findings (numbers and facts, not vibes)
- Dangerous uploads documented by name so they can't sneak back in: `Stake-All-Games-Predictor-Latest` — two obfuscated-filename PHP files, basic array math only (SEO-spam or web-shell scaffolding), skipped; `Public-FotMob-API` — README instructs downloading an unsigned Windows .exe from `raw.githubusercontent.com` posing as a "releases page," reverse-engineers FotMob's private endpoints (ToS violation), skipped; `Upcoming-and-Live-Sports-Data` — JSON containing DRM decryption keys + stream URLs for Amazon Prime Video, Sky Sports, Star Sports, JioHotstar, Willow, PTV Sports — "pirated IPTV redistribution… a one-way ticket to DMCA + Stripe termination + every-provider ban," skipped; full triage log in `docs/rejected-data-sources.md`. [TRUST-SIGNAL, OTHER]
- Kelly public-surface wiring (UI panel on `/picks`, `stakeRecommendation` on `PublicPick`, Elite-only entitlement, server-side gating) was attempted and **reverted 3 times by the brand-safety linter** enforcing the "intelligence not gambling" positioning — a "suggested stake" UI element, even with disclaimers, crosses a brand line; the pure helpers stay, the public surface stays clean. [TRUST-SIGNAL]
- Verification was blocked this pass by a persistent sandbox ACL issue on `node_modules` and `.git/index.lock` — `npm install/typecheck/test/build/commit` could not run; the verification gate (typecheck 0 errors, lint 0 warnings, ~319 tests, build green, guardrails) is delegated to the follow-on machine session. [OTHER]
- No production-path code was modified; no types broken; pass was purely additive. [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Quarter-Kelly with 3-unit cap + confidence≥65 / edge≥50 gates: OTHER (bankroll math) — TRUST-SIGNAL-adjacent as the disciplined, gate-enforced staking lens; note the brand-safety linter's 3× revert keeps suggested stakes OFF the public surface, so any stake math stays internal/advisory.
- Maher 1982 / Dixon-Coles 1997 Poisson goal model (joint score matrix → moneyline/O-U probabilities + consistency score): OTHER (soccer probability model) — directly engine-actionable once a team-rate ingestion adapter exists; the `assertTeamRatesAvailable()` production guard is the wire-first pattern.
- Probability invariants tested (joint matrix coverage→1; consistency-score monotonicity): OTHER — model correctness test patterns reusable for any engine probability module.
- Rejected-sources audit log (`docs/rejected-data-sources.md`) + supply-chain caution: TRUST-SIGNAL — provenance/integrity hygiene; legal line-drawing (ToS violations, pirated IPTV, DRM keys) that protects Stripe + provider standing.
- Brand-safety linter's 3× authoritative revert of Kelly UI: TRUST-SIGNAL — codified brand-boundary enforcement; the "intelligence not gambling" line is load-bearing.
- $41–61/mo launch data posture vs current survival-mode cost caps: OTHER — INFERENCE: conflicts with the ≤$25/mo cap in cost-controls.md, so this file's recommended posture predates the tighter cap.

## Engine-actionable? (yes/no + one-line what)
Yes — the Poisson goal model (Maher 1982 / Dixon-Coles 1997) produces moneyline and over/under probabilities from team attack/defense rates, so wire a team-rate ingestion adapter to unlock the guarded scoring path; keep the Kelly helpers internal-only since the brand-safety linter bars suggested-stake UI.
