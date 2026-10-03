# AUDIT-B — adversarial audit of gse-intelligence-build (qwen3.8-flash)

**Auditor:** agent B (twin of agent A; identical brief, different model — reconcile both).
**Analytical model:** `qwen/qwen3.8-flash` via OpenRouter (used for silent-degradation
and theater/duplication analysis; verdicts below are my own, grounded in code I read).
**Scope:** `~/workspace/gse-intelligence-build/` (modules live at build root, not under
an `intelligence/` subdir). **Time-boxed 90 min. Audit only — nothing fixed.**
**Read first:** `IMPROVEMENTS-LOG.md` (Batches 1–5c), `REAL-DATA-VALIDATION.md` — known
items below are marked KNOWN and not re-reported as discoveries.

**Method:** grep-verified import reachability from the live path
(`integration/api.py::analyze` → `_build_data_context` → `ProviderRegistry`),
line-level reads of `integration/api.py` (façade), `reasoning/engine.py`,
`tests/test_real_provider_wiring.py`, `tests/e2e/test_reasoning_trace_e2e.py`,
plus two model-assisted analyses (silent-degradation sweep, theater/duplication review).

**Headline:** the honest-labeling culture is real — no faked calibration found in
production code, the UNVALIDATED discipline holds, and `test_real_provider_wiring.py`
is genuine (real parquet data, asserts real values). The rot is subtler: the single
VALIDATED gate (coaching τ̂) never feeds the live reasoning path, withheld-data
signals die in the façade before reaching the trace, and ~40% of the "13 modules"
are unreachable from `analyze()`.

---

## P1 — fix this week

### P1-1. The VALIDATED τ̂ gates don't feed the live engine
**File:** `coaching/provider.py` (live surface), `integration/api.py::_build_data_context`
**What's wrong:** `REAL-DATA-VALIDATION.md` Gate 2 VALIDATED the coaching τ̂ gates
(+6.77pp Hamming, 7.28% Brier) — the build's only fully-validated intelligence.
But `_build_data_context` calls exactly four coaching methods: `get_scheme_fingerprint`
(`coaching/fingerprint.py`), `get_pressure_answer` (`coaching/pressure_answer.py`),
`get_adjustment` (`coaching/adjustments.py`, M10 Mahalanobis — not τ̂), plus
`tenures`. The τ̂ machinery — `coaching/coach_risk.py`, `coaching/refit_tau.py`,
`coaching/situational_wp.py`, `coaching/behavior.py`, `coaching/coach_audit.py` —
is never invoked from the provider. The validated fourth-down edge exists as
research beside the engine, not inside it. No test asserts a τ̂-derived observation
reaches a trace.
**Fix:** add `CoachingEngineProvider.get_tau_adjustment(team, week, season)` returning
the τ̂-vs-baseline delta with COMPUTED verification, wire it in `_build_data_context`
as `scheme.{team}.tau_edge`, and pin one test in `test_real_provider_wiring.py`
asserting the observation exists on the 2024–2025 4th-down sample.

### P1-2. Withheld rolling form leaves no trace evidence
**File:** `integration/api.py`, lines ~143–151 (`_build_data_context`, qb loop)
**What's wrong:**
```python
if f and f.get("form_epa") is not None:
    ev("qb_behavior", f"... rolling form ...", R.Verification.LIVE_VERIFIED)
    ctx.observations[f"form.{qb_id}.epa"] = f["form_epa"]
```
When `form_epa` is None (withheld — e.g. Watson, 57 trailing dropbacks < 100),
**nothing** is added to evidence. The provider's `gap_note` ("withheld, 57 db < 100")
dies on the provider dict. `test_form_withheld_has_gap_note` asserts the note on the
provider return, not on the trace — so the L4 adversary never learns "we have no
form signal for this QB," exactly the load-bearing unknown it should discount.
Withheld ≠ absent; the code treats them identically.
**Fix:** in the `else` branch, `ev("qb_behavior", f"{name}: rolling form WITHHELD "
f"({f['gap_note']})", R.Verification.INFERENCE)` and set
`ctx.observations[f"form.{qb_id}.withheld"] = 1.0`. Extend
`test_real_provider_wiring.py::test_form_withheld_has_gap_note` to assert the
evidence/observation exists in the built context.

### P1-3. Missing target HHI becomes 0.0 — a quantitative lie
**File:** `integration/api.py`, trust-target block (~line 168)
```python
ctx.observations[f"trust.{qb_id}.target_hhi"] = float(tt["hhi"]) if tt.get("hhi") else 0.0
```
HHI = 0.0 means "perfectly diversified targets" — a strong, specific, **false**
claim when the value is simply unknown. The L4 adversary reads this observation
as concentration evidence. Contrast with form (P1-2), which at least withholds.
**Fix:** only set the observation when `tt.get("hhi")` is not None; otherwise add
`ev(..., "target HHI unavailable", INFERENCE)` or omit. Never default a concentration
metric to its most-diversified value.

### P1-4. The T1 "e2e" test bypasses the entire e2e path
**File:** `tests/e2e/test_reasoning_trace_e2e.py`, lines 60–130
**What's wrong:** `TestT1PressureFunnelRejected` hand-builds a `ReasoningTrace`
(fixture values, all tracks CLEAR) and calls `adversary_review()` directly. It never
touches `integration.analyze()`, providers, or `_build_data_context`. As a contract
unit test of the adversary it's legitimate; sitting in `tests/e2e` named "T1" it
implies end-to-end validation that doesn't exist. Meanwhile the honest real-data
verdict (PARTIAL — trace INVALID, kill can't fire) lives only in
`REAL-DATA-VALIDATION.md` and an uncommitted scratch script
(`tests/e2e/real_data_t1.py`, deliberately pytest-proof). Nothing in CI pins the
real behavior.
**Fix:** commit one test that runs `integration.analyze()` with stub providers shaped
like the real-data outcome (OL provider absent/empty, TTT None) and asserts
`label == "INVALID"` and no kill — making the PARTIAL verdict executable. Keep the
handcrafted adversary test, but move it to `tests/test_adversary_contract.py` or
rename to say what it is.

### P1-5. Empty QB map marks the track CLEAR
**File:** `integration/api.py`, lines ~119–121
```python
for team, qb_id in (game.get("qbs") or {}).items():
    ...
hints["qb_behavior"] = "CLEAR"
```
If `game` has no `"qbs"` key (or it's empty), the loop body never runs and the track
is still marked CLEAR — with zero observations and zero evidence. Downstream reads
"no QB issues" where the truth is "lineup unknown."
**Fix:** after the loop, `if not (game.get("qbs") or {}): hints["qb_behavior"] = "DATA-GAP"`
(or UNCHECKED), with an evidence note. One-line guard, one test.

---

## P2 — fix soon

### P2-1. Missing market data is indistinguishable from zero edge
**Files:** `integration/api.py:475`, `reasoning/engine.py:179`, `reasoning/escalation.py:68`
`market_edge_pct=float(game.get("market_contradiction_pct", 0.0) or 0.0)` feeds
`if req.market_edge_pct and abs(req.market_edge_pct) > 5.0`. Absent market data →
0.0 → falsy → the `market_contradiction` escalation never fires, silently. "No market
data" and "market agrees with us" are different states; the code collapses them.
**Fix:** use `Optional[float]` (None = unknown); trigger only when not None. Or keep
0.0 but add a `market.unknown` observation when the key is absent.

### P2-2. Unwired-code scale: the "13 modules" overstates the live engine
Verified by import reachability from `analyze()` — **zero** imports outside their own
tests:
- `ratings/`, `combining/`, `trust/`, `qb/`, `staking/`, `newregime/` — 6 of 13
  modules entirely unreachable (documented as synthetic-DGP, KNOWN — but the module
  count in status reports implies engine components; they're research artifacts).
- `trust-signals/`: `extractors/*`, `fetch.py`, `news_wire.py`, `pipeline.py`
  (`process_item`, `build_beat_vector`, `hold_flags` — test-only callers),
  `harvest.py`, `transcript.py`, `accounts.py`, `discover.py` unreachable from
  `FileStoreTrustSignalProvider` (imports only decay/models/sources/store/tipster).
  The intake store is empty, so the whole extraction pipeline is built-but-dark.
- `coaching/`: `behavior.py`, `coach_risk.py`, `coach_audit.py`, `situational_wp.py`,
  `ingame.py`, `redzone.py`, `sequencing.py`, `tempo.py`, `proe.py`, `regime.py`,
  `script_elasticity.py`, `dc_pressure.py`, `refit_tau.py` not called by the live
  provider (see P1-1).
- `engines/`: standalone (only `tests/test_engines.py` imports it) — acceptable,
  it's the new lane; note for the record, not a defect.
**Fix:** don't delete — but add a `docs/LIVE-PATH.md` (or extend build README) listing
exactly which modules `analyze()` can reach, so "wired" stops being ambiguous.
Prioritize wiring P1-1's τ̂ surface over any new module.

### P2-3. Bare `except DataGapError: pass` swallows loud signals
**File:** `integration/api.py` — three sites in `_build_data_context`:
- pressure splits gap (~line 131): `except DataGapError: pass` — unknown clean/pressured
  INT rates become absence with no evidence note.
- form gap (~line 148): same (compounds P1-2).
- regime-staleness loop (~line 186): same — unknown coaching adjustments become
  "no regime change."
**Fix:** each site gets a one-line `ev(track, f"DATA-GAP: {e.reason}", INFERENCE)`
before passing. The DataGapError already carries the reason; use it.

### P2-4. Legacy duplicates: delete, don't document
**Files:** `integration/escalation.py`, `integration/checklist.py` (+ their pinned tests)
KNOWN (Batch 3.4 marked them LEGACY), zero production imports confirmed. Keeping
test-pinned dead contract code is how the next convergence gets confused about
which contract is canonical.
**Fix:** delete both files and their legacy-only tests (history stays in git); if any
pinned behavior isn't covered by `reasoning/` tests, port the assertion first, then delete.

---

## Checked and clear (do NOT report as findings)

- **`test_real_provider_wiring.py` is genuine**, not theater: real providers over real
  parquet, asserts real values (Rodgers form in (−1,1), Watson withheld, CLE
  starter_share < 0.5, BAL-2024 `off_elite_rush` fires). The suite's honest core.
- **UNCHECKED → INVALID flow works:** `ctx.checklist_hints` (api.py:325) reaches
  `_invalid_trace` and the post-hoc `validate_checklist` gate; the real-data T1
  INVALID verdict proves it end to end.
- **No faked calibration in production code:** zero "VALIDATED"/"calibrated" claims in
  non-test code under reasoning/, integration/, coaching/, qb-behavior/,
  trust-signals/. Validation claims live in `REAL-DATA-VALIDATION.md` with n's
  attached — as they should.
- **reasoning/ vs integration/ convergence is holding:** no re-divergence; enums,
  escalation, checklist all delegate one way. The id-vocabulary and strict-grain
  decisions are recorded in `contracts/` and respected in code.
- **`engines/` tests pass** (16/16); standalone status is correct for a new lane.

---

## Reconciliation notes for the parent

- My P1-1 (τ̂ not wired) is the highest-value finding: the build's only VALIDATED
  gate doesn't influence any trace. If agent A found the same, it's confirmed P0.
- P1-2/P1-3/P2-3 are one theme: the façade converts unknown→neutral instead of
  unknown→flagged. A single fix pattern (evidence note + no neutral default) covers all.
- The model (qwen3.8-flash) independently surfaced the empty-qbs→CLEAR issue (my P1-5)
  which I had initially under-weighted — worth keeping.
- No P0 (data-corrupting, user-facing) found: nothing publishes, so the blast radius
  of every finding above is internal reasoning quality, not public output.
