# docs/ops/COMPLETED_UNITS.md
## What it is (1-2 sentences)
A 2026-09-16 coding-handoff log (GSE "coding handoff log") tracking the status of 10 coding units (U0–U9 plus U-CI) for cloud coding agents working through the C1–C8 research-category build backlog, with a unit status board, per-unit acceptance criteria, and a Copilot→Cloud handoff rule.
## Key metrics/methods (formulas where given, else "not specified")
Acceptance-gated methods per unit: board edge sort + partial-rank tie clusters + advisory CI flag (U1/C5); offline generative bake-off with Brier/logLoss/MAE fixtures (U2/C1); Elo/BTL/pi-vs-current-vs-market feature bake-off with MAE deltas (U3/C2); CLV↔Brier diagnostic (mean CLV, beat-close rate, Brier model/open/close; U4/C4); softmax BMA weight schedule from expert losses (sum≈1; U5/C3); lock≠settle lifecycle timestamps (U6/C6); source-bias/park-defense hygiene (U7/C7); reliability-bin calibration dashboard (U8/C8). No formulas given.
## Data sources named
arXiv high-anchor papers (ids given per unit): U1: 2208.08598, 2501.02505, 2406.19563, 2311.03490; U2: 1704.00197, 2408.08331, 2105.09881, 1701.05976; U3: 2405.10247, 2408.08331; U4: 1710.02824. Research intake corpus: High 58 (57 PDF verified, 1 withdrawn); Medium 401. Live line archive (U4 soft-blocked, not yet available).
## Findings (numbers and facts, not vibes)
- U0 research intake DONE 2026-09-16: category P0 order C5→C1→C2→C4→C3→C6→C7→C8; withdrawn paper 2312.11067 excluded.
- Units U1–U8 (all C1–C8): status "CODE LANDED — await CI" on PRs #860/#862 (superseding empties #847/#853/#858, #857, #861).
- U-CI: DOB age-21 gate removed from SubscribeButton 2026-09-14; unblocks Test job.
- U9 (ops, #822 checkout 503): FOUNDER-ONLY — catalogue/PRICING_PHASE not to be touched.
- Handoff rule: founder/Cloud agent opens first non-DONE, non-FOUNDER-ONLY, non-BLOCKED unit; prefer continuing the open PR branch; Cloud Agents unavailable on current plan — use Copilot or direct PR file pushes.
- Hard gates: no flips of gates/env/Stripe catalogue/PRICING_PHASE/MODEL_VERSION; no re-scraping private competitor sources; no DONE marking without DoD/tests.
- Branding: "not AI — math you can read."
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Unit ordering C5 (board edge sort + advisory CI) as P0 before C1–C4 research bakes: TRUST-SIGNAL (trust-safe board output prioritized over model work).
- CLV↔Brier diagnostic as core calibration measurement (mean CLV, beat-close rate): TRUST-SIGNAL (edge-validation honesty machinery).
- Source-bias / park-defense hygiene unit (C7): SCHEME (environment/context normalization).
- No QB-BEHAVIOR, COACHING, or OL findings in this file.
## Engine-actionable? (yes/no + one-line what)
yes — The U5/U3/U4 bake-off harnesses (softmax BMA weights, Elo/BTL/pi vs current, CLV↔Brier diagnostic) map directly onto the model-weighting and calibration layer; the C7 source-bias hygiene unit maps onto SCHEME normalization.
