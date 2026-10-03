# GSE Intelligence Program — consolidated handoff 2026-10-02

**For:** the coding agent, post-audit. **Do not build from this until the codebase audit clears.**
**Companion branch:** `Beexly/Sports@motif/gse-intelligence-build-2026-10-02` — the full build (`intelligence/`) + research (`docs/engine/research/2026-10-02/`).
**Supersedes/extends:** `inbox/from-motif/tnf-intelligence-program-2026-10-01.md` (Tracks 1–3: the data). This package is Tracks 1–3 + the mind that reasons over them.

## Why this exists

October 1, Steelers–Browns: the card went 4–4 and the four losses shared one failure mode — stat-deep, reasoning-shallow analysis. The counter-evidence (Monken 2026 quick-game 0.639 vs 0.508 league avg, air yards 8.33→6.12) existed pre-kickoff in our own research output. No reasoning layer connected it to the card. Garrett's directive: the engine must have reasoning levels, depth of intelligence, and complex reasoning comparable to Grok 4.x — over ALL the signals, inside/outside/around the game.

## What was built overnight (all on the branch)

`intelligence/` — 13 modules, 219 files, **704/704 tests green** (`intelligence/tests/last-run-report.md`, verified 2026-10-02 06:53 UTC):

| Module | Contents | Tests |
|---|---|---|
| `qb-behavior/` | QB behavioral profile engine (c01) + situational splits: pressure, INT-by-situation, Protection Stress, trust-target HHI (c02). 302,282 INT cells, trust/protection tables in `data/`. | 152 |
| `coaching/` | Tendency engine: PROE, fingerprints, tenures, regime detection, red-zone, tempo, adjustments, DC pressure (c03) + 4th-down risk preference τ̂ per coach-team-season, situational WP, coach audit (c04). 12 CSV tables in `data/`. | 43+16 |
| `trust-signals/` | X-account monitoring pipeline per the intake registry, news-wire intake with profile re-run triggers (c05) + video/social extraction framework: extractors, clustering, tempered-Bayes trust scoring (c06) | 59+155 |
| `reasoning/` | L1–L5 reasoning engine: escalation state machine, specialist agents, content-addressed persistent traces, resume-by-merge (c07/c08) | 222 |
| `integration/` | Unified API: `analyze()`, `adversary_review()`, `correlated_theses()`, `validate_checklist()`; provider ABCs; §5 checklist gate; pipeline with spec thresholds | 38 |
| `ratings/`, `combining/`, `trust/`, `qb/`, `staking/`, `newregime/` | PlusDC-BT/Elo, angular forecast combining, calibration chain + EnbPI, QB residuals + INT prop rule, Kelly staking + governors, regime research lanes | 136 |
| `tests/` | Master runner `run_all.py` (missing module = FAIL, never skip), e2e gates: reasoning-trace T1–T7, research gates (22 numeric + 5 negative), pipeline integration | 267+65 |

**Mandatory acceptance test (T1):** `intelligence/tests/e2e/test_reasoning_trace_e2e.py` — Steelers–Browns Week 4 pre-kickoff data through the real `analyze()`: L3 chain built (OL injuries → Monken quick-game → pressure neutralization), adversary marks breaking conditions met, four funnel legs bundled as ONE thesis on `pit_pressure_lands`, L5 recommendation = REJECT the stack. Green.

## The reasoning spec (the mind's contract)

`docs/engine/research/2026-10-02/reasoning-depth-spec.md` — the full L1–L5 specification the code implements:
- **L1** direct lookup → **L2** cross-stat correlation → **L3** causal chain (every link sourced, breaking conditions listed) → **L4** adversarial (breaking-condition check, correlated-thesis detection, steelman, pre-mortem) → **L5** synthesis. Escalation triggers as a state machine; skipping levels is a logged exception.
- **No-blind-spots checklist:** QB behavior, coaching/scheme, OL, trust signals, scheme matchup — each checked at L3+ with verdicts CLEAR / NOTHING-MATERIAL / DATA-GAP / CONFLICT / UNCHECKED. UNCHECKED at L3+ invalidates the trace (blocking validator).
- **Garrett's hierarchy** honored in every L5 synthesis: OL → scheme → QB.
- **Rule:** only L5 may produce a public pick or multi-leg card.

## Deep research (the evidence base)

`docs/engine/research/2026-10-02/corpus-deep/c01…c10/` — per-slice: `verified-claims.md` (every claim file:line-pinned, confidence-labeled), `syntheses.md`, `challenges.md` (inflated numbers struck, contradictions left open), `buildable-systems.md`. The full 2,996-file corpus was deep-read twice (intake + critical pass).

## X intake registry (standing source lane)

`docs/engine/research/2026-10-02/x-intake/` — 6 accounts profiled with priority tiers and a monitoring spec (what to check, how often, where items land):
- @throwthedamball (PFF betting/OL charting — Garrett's OL hierarchy lane) — daily
- @the_waldman (independent NFL modeler, full-game sims) — weekly
- @mysportsupdate (NFL news wire — triggers profile re-runs) — daily
- @doug_clawson (historical QB comps) — weekly
- @shauncore (All-22 film breakdowns) — event-driven
- @matt_barlowe — PENDING_VERIFICATION, excluded from active intake until confirmed
- Standing rule: any source Garrett sends gets ingested same-session.

## Open models survey (the mind's future fuel)

`docs/engine/research/2026-10-02/hf-open-models-survey.md` — 20 ranked open models with HF URLs, licenses, and test gates. Top 5: DeepSeek-V4.1-Flash (763B MoE, MIT) as the L4/L5 mind — first test is the T1 assertion; TabPFN-v2 for small-n prop/INT classification; Chronos-2 vs TimesFM-3.0 on totals (must beat the 4.87 MAE naive bar); R1-Distill-Qwen-7B on ZeroGPU as the always-on L1–L3 layer; Kimi-K2-Thinking as the L4 adversary. Note: no usable NFL prediction models exist on HF — the sports lane must be built, not discovered. License flags: Moirai-2.0/Nemotron CC-BY-NC (research-only); Kimi/TimesFM/TabPFN custom licenses need review before product use.

## What the coding agent must do with this (post-audit)

1. **Converge the reasoning contract:** `intelligence/reasoning/` and `intelligence/integration/` both implement the reasoning engine. Pick ONE contract owner; the other becomes a thin adapter. Do not ship two.
2. **Wire into the engine per the spec's API shape** (`analyze()`, `adversary_review()`, `correlated_theses()`, `validate_checklist()`), honoring: L5-only for public picks/cards, the §5 checklist gate as a blocking validator, Garrett's OL→scheme→QB hierarchy in every synthesis.
3. **Real-data validation:** backtests ran on seeded synthetic DGPs (labeled as such). Re-run every gate on real NFL data before any weight > 0. Wire-first order stands: research → wire → weight → calibrate → test → polish.
4. **Close the honest gaps:** live X feed (needs Garrett's X API key or browser session); NGS stays internal reasoning fuel only, never public; half-lives/tipster/materiality thresholds are SPEC defaults awaiting backtest.
5. **Keep the negative findings:** xFP/FPOE is a preregistered holdout REJECT for the performance use case; play-level bootstrap is misleading (use game-clustered resampling); the kill-list registry in the research gates e2e must stay green.

## Provenance

Built 2026-10-02 by Motif's 10-coordinator fleet under Garrett's directive ("I don't care how long it takes, I want it all done" — deep research → code → test → autonomous improve → re-test → polish → final improvement). Every module reports its own test counts; the 704/704 run report is on disk at `intelligence/tests/last-run-report.md`. Nothing was inflated; corrections are documented in the modules.
