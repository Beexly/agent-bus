# Adversarial Audit — Agent A (model: z-ai/glm-5.3-flash via OpenRouter)

**Scope:** `~/workspace/gse-intelligence-build/` (modules live at top level, not under `intelligence/`).
**Method:** read `IMPROVEMENTS-LOG.md` + `REAL-DATA-VALIDATION.md` first (no re-report of known items), then code-read the five hunt targets, with two analytical passes run through `z-ai/glm-5.3-flash` (OpenRouter; total spend ~$0.0025). Every finding points at code.

---

## P1

### P1-1. `get_pressure_splits` failure is swallowed silently — absence of evidence masquerades as evidence of nothing
**File:** `integration/api.py:130-132`
```python
try:
    s = providers.qb.get_pressure_splits(qb_id, week, season)
    ev("qb_behavior",
       f"{p.name} INT clean {s.int_rate_clean} / pressured {s.int_rate_pressure}",
       R.Verification(s.verification.value))
except DataGapError:
    pass
```
**What's wrong:** the INT clean/pressured splits are the load-bearing numbers for the L4 pressure counter-argument — REAL-DATA-VALIDATION.md confirms Watson's 1.03% clean / 4.43% pressured as the numeric premise the funnel-kill's counter-argument stands on. When this provider throws, *nothing* is written to the evidence trail, yet `hints["qb_behavior"]` still lands on `"CLEAR"` (line 197). A downstream reader — or the L4 adversary — cannot distinguish "splits were attempted and the provider failed" from "splits were never needed." The sibling failure path (whole-function DataGapError, line 198) correctly records `"DATA-GAP: {e.reason}"`; the granular path is held to a lower standard than the coarse one.
**Failure scenario:** splits provider goes down mid-week (bad CSV refresh, corrupt row) → trace shows CLEAR with a healthy-looking QB profile → L4 adversary builds its pressure counter-argument without the INT-split premise and with no flag that the premise is missing → a pressure thesis survives that the splits would have helped kill.
**Fix:** replace `pass` with `ev("qb_behavior", f"GAP: pressure splits unavailable ({e.reason})", R.Verification.INFERENCE)`. (GLM-backed.)

### P1-2. Missing `target_hhi` is zero-filled into a meaningful value
**File:** `integration/api.py:174-175`
```python
ctx.observations[f"trust.{qb_id}.target_hhi"] = \
    float(tt["hhi"]) if tt.get("hhi") else 0.0
```
**What's wrong:** HHI = 0.0 is not "unknown" — it is the mathematical statement that targets are perfectly diversified across receivers. A missing HHI (provider returned shares but no concentration index) is recorded as a confident claim of perfect diversification. Any downstream consumer comparing HHI across QBs (the trust-target profile exists precisely for this) reads a data absence as the most extreme possible value on the scale.
**Fix:** omit the observation when `hhi` is None: `if tt.get("hhi") is not None: ctx.observations[...] = float(tt["hhi"])`.

### P1-3. The "thin façade" claim does not hold — L3 chain CONSTRUCTION still lives in `integration/`
**Files:** `integration/pipeline.py:43-160` vs `reasoning/levels.py:107`
**What's wrong:** IMPROVEMENTS-LOG.md Batch 1 claims `integration/` is "a thin provider-wired façade" with "every reasoning operation delegated to `reasoning/`." But `build_l1` (L1 claim assembly), `build_l2_correlations` (L2 cross-stat correlation), `build_causal_chains` (~75 lines: the OL-deficiency → scheme-adjustment → pressure-neutralization construction), and `detect_scheme_matchup_conflict` all live in `integration/pipeline.py`. `reasoning/levels.py::run_l3` only *evaluates* pre-built chains that `_build_data_context` injects into the DataContext — construction authority sits at the wrong layer, and nothing in the naming signals the inversion.
**Failure scenario:** a maintainer edits `run_l3` believing it owns chain construction → the new logic never fires (chains arrive pre-built) → change merges green without running, or worse, double-construction silently discards the pipeline-authored chains downstream consumers expect. Defects surface steps away from both the edited file and the true constructor. (GLM-backed.)
**Fix:** either move `build_causal_chains` (+ `build_l1`/`build_l2_correlations`) into `reasoning/` behind a single entry point that `_build_data_context` calls, or correct the architecture docs to state the split honestly (integration/ constructs, reasoning/ evaluates).

---

## P2

### P2-1. Inconsistent DataGapError handling: `get_familiarity` / `get_trust_targets` nuke the whole track
**File:** `integration/api.py:155-156` (`get_fam`), `167` (`get_tt`)
**What's wrong:** `get_form`, `get_pressure_splits`, and `get_adjustment` all swallow `DataGapError` (additive semantics). But `get_familiarity` (line 156: `fam = get_fam(team, season, week, qb_id)`) and `get_trust_targets` (line 167) have **no** try/except — a gap in either propagates to line 198's outer handler and flips the *entire* `qb_behavior` track to DATA-GAP, even though the QB profile served fine. Identical failure shapes produce opposite verdicts depending on which sub-provider failed.
**Fix:** wrap both in `try/except DataGapError` like the other additive providers — or document why familiarity/trust-targets are load-bearing while form is not.

### P2-2. `engines/` is completely unwired — dead code in the tree
**Files:** `engines/*.py`
**What's wrong:** zero imports of `engines` anywhere outside its own tests (`grep -rn "from engines\|import engines"` excluding `engines/` and `test_engines.py` returns nothing). `engines/drift_monitor.py` — the ZeroGPU safety monitor Garrett explicitly required — is never invoked by any code path or cron. The module exists, is tested against mocks, and does nothing in production.
**Fix:** wire `LLMEngine` into a real entry point (or document `engines/` as in-flight with a landing date); schedule `drift_monitor.py` on cron as its own docstring requires. (Known in-flight per parent lane — but the tree carries no marker saying so.)

### P2-3. Dead loop in `test_engines.py` MockBackend
**File:** `tests/test_engines.py:35-37`
```python
for tool, resp in self.script.items():
    if tool in prompt or True:
        break
```
**What's wrong:** `or True` makes the loop always break on the first item; `tool`/`resp` are never used afterward — routing actually happens via the `"causal chains"` / `"ADVERSARY"` / `"SYNTHESIZER"` string markers below. Dead code in a *contract* test erodes trust in exactly the file that certifies the harness contract.
**Fix:** delete the loop (3 lines).

### P2-4. LLM T1 fixture bypasses the checklist gate real data hits
**File:** `engines/harness.py:78-86`
```python
checklist_hints={t: "CLEAR" for t in TRACKS},
```
**What's wrong:** `build_t1_context()` pre-marks every track CLEAR, including `offensive_line`. On real data the T1 trace is INVALID precisely because the OL track is UNCHECKED — the checklist gate is the mechanism that makes the system safe. The LLM funnel-kill test therefore exercises the kill logic while assuming away the gate; a regression in gate behavior would pass this test.
**Fix:** run the LLM T1 once against a context with `offensive_line: "UNCHECKED"` and assert the trace comes back INVALID (gate holds), in addition to the all-CLEAR kill test.

---

## Checked and clear (not findings)

- **`tests/test_real_provider_wiring.py` is genuine, not theater.** It instantiates the real `SituationalQBProvider` / `CoachingEngineProvider` against real CSVs and asserts real values (Rodgers form in (−1,1), `fam.CLE.starter_share < 0.5`, Watson form withheld with gap note, BAL 2024-W4 `off_elite_rush == 1.0`). The assertions would fail on wrong data, not just on missing data.
- **No faked calibration in production code.** No "validated" claims outside tests/docs; every trust-classifier output carries `verification=INFERENCE`; the BAL 2023 divergence is pinned in tests, not hidden.
- **`market_edge_pct` default 0.0 is correct** (`integration/api.py:475`): the escalation trigger is `abs(x) > 5.0`, so missing market data correctly produces no contradiction signal. Not silent degradation — the trigger is opt-in by design.
- **L5 exposure gate enforced** (`reasoning/engine.py:221-225`): published pick/card below L5 raises loudly, never passes quiet.
- **Enums converged** (`integration/types.py` re-exports `reasoning/enums.py`); `integration/escalation.py` + `checklist.py` are header-marked LEGACY with no production importers — the convergence held, no re-divergence found.
- **MiMo Space exists** as `ENGINE-REPORT.md` claims (`Beexly/mimo-brain-engine`, model `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`).

---

## Summary for reconciliation

Three P1s (swallowed splits gap, HHI zero-fill, façade-thinness overclaim) and four P2s (inconsistent gap handling, unwired engines/, dead test loop, gate-bypassing T1 fixture). Nothing P0 — no finding shows a currently producible wrong pick, but P1-1 and P1-3 sit on the paths that guard picks. Total GLM spend: ~$0.0025.
