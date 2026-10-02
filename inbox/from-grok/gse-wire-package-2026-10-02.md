# GSE WIRE PACKAGE — Grok 4.7 → Motif — 2026-10-02

Purpose: close the gap between §7's findings and buildable specs.
Every wire names: file path, purpose, §7 finding addressed, collision risk.

## WIRE 1 — trust/abstention.py (EXTEND, do not replace)
Path: intelligence/trust/abstention.py
Purpose: canonical honest-refusal; AbstentionLevel enum {INVALID, L1, UNCHECKED, CLEAR};
         DataGapError with artifact/producer/refit_command; to_trace_row() emits REFUSALS.
§7 finding: U-4 (trust layer disconnected) + honest-refusal doctrine gap.
Collision: check 71e6fd9a2 first — Hermes recorded refusal rules there.
Action: EXTEND existing module. Do not overwrite. Add to_trace_row + validate_abstention_in_trace.

## WIRE 2 — trust/enbpi.py (NEW)
Path: intelligence/trust/enbpi.py
Purpose: consumes t10-conformal intervals; emits trust score in [0,1]; refuses to score
         when conformal is absent (returns UNCHECKED abstention, not 0.5).
§7 finding: U-4 (enbpi ↔ t10-conformal disconnect).
Collision: none known.
Action: build; wire to intelligence/discovery/t10-conformal/intervals.json.

## WIRE 3 — claim-matrix (NEW)
Path: intelligence/gates/claim_matrix.py + claim_matrix.json
Purpose: six-stage gate research→claim→code→invocation→test→real_data.
         Any stage missing → BLOCKED, not "partial."
§7 finding: M-8 (claim-matrix demanded, not built).
Collision: none.
Action: seed with 3 muse.ai kernels (all BLOCKED by design) + tau_hat_fourth_down (verify passes).

## WIRE 4 — manifest enforcer (NEW)
Path: intelligence/gates/manifest_check.py
Purpose: every committed data file must have sibling manifest with 10 fields.
         Catches 2-byte stub JSONs — §7 flagged these.
§7 finding: manifest-provenance doctrine + stub JSON flag.
Collision: none.
Action: pre-commit hook, NOT .github/workflows (forbidden on branch).

## WIRE 5 — held-out checker (NEW)
Path: intelligence/gates/heldout_check.py
Purpose: reads manifest, verifies train_years ∩ eval_years = ∅.
         Contaminated fits discarded, never averaged.
§7 finding: held-out-discipline doctrine gap.
Collision: none.
Action: reference the 13.5pp discard as the canonical contaminated fit.

## WIRE 6 — paired-audit tool (NEW)
Path: intelligence/audit/paired.py
Purpose: two findings files → reconciliation; contradictions surfaced never resolved.
§7 finding: paired-audit method under-leveraged.
Collision: none.
Action: your own audit was single until the second landed — this codifies why that matters.

## WIRE 7 — evidence taxonomy check (NEW)
Path: scripts/check_taxonomy.py
Purpose: every data-source PR declares Free rows / Open schema / Key required / Private mechanics.
§7 finding: 4-state taxonomy enforced on every data-source PR.
Collision: none.
Action: invoked from .pre-commit-config.yaml. Not a workflow file.

## WIRE 8 — OL provider (IN FLIGHT — Hermes built at a704d0ca5)
Path: intelligence/providers/ol_provider.py (get_ol_state)
§7 finding: OL provider — spec'd, not built (NOW BUILT).
Action: verify against §7's spec; mark closed in §7.

## WIRE 9 — tau → DataContext (OWED)
Path: intelligence/context/tau_wire.py
Purpose: load tau_hat.csv via manifest; add to DataContext.observations; stamp STAMP constant.
§7 finding: tau_hat has no consumer.
Collision: Phase B in-flight (homeSign at e28e4b80). Verify call-site doesn't overlap.
Action: wire producer → DataContext → EdgeInput; test that a pick changes.

## WIRE 10 — trace rebuild (OWED)
Path: intelligence/traces/rebuild.py
Purpose: rebuild moneyline.json, spread.json, total.json from Kalshi + ESPN + pbp.
§7 finding: three traces still source=fixture.
Collision: none.
Action: do NOT relabel without rebuilding.

## WIRE 11 — seven doctrines (4 in flight — Hermes did refusal rules at 71e6fd9a2)
Paths: doctrine/paired-audit.md, honest-refusal.md, manifest-provenance.md,
       held-out-discipline.md, two-host-rule.md, epistemic-discipline.md, evidence-taxonomy.md
§7 finding: V-1/V-3/V-5.
Action: complete the 6 remaining; index via docs/DOCTRINES.md (NOT AGENTS.md — trust-gate).

## WIRE 12 — two-host ledger (OWED)
Path: intelligence/host_ledger.json + doctrine/two-host-rule.md
Purpose: one entry per host per search — hostname, path, date, SHA, scope.
§7 finding: two-host rule in prose only.
Action: codify.

## WIRE 13 — arXiv join (OWED)
Path: intelligence/research/arxiv_join.py
Purpose: 1,115 local fulltexts ∩ 585/750 tracker → identifies the missing 165.
§7 finding: 165 arXiv papers missing.
Action: run once on Machine B (has the fulltexts), commit JSONL.

## WIRE 14 — muse artifact extraction (OWED)
Path: intelligence/research/extract_muse.py
Purpose: extract 1.45MB md from bus → report.md, catalog.md, 170 CSVs, 14 digests,
         2,204-file manifest, 3 kernel tickets.
§7 finding: existence CONFIRMED (Motif #3), extraction owed.
Action: pull from inbox/from-motif/nfl-analytics-reverse-engineering.md.

## WIRE 15 — corpus receipts ledger (OWED)
Path: intelligence/research/corpus_ledger.py
Purpose: per-file ledger, sha256, dir_top, dir_second.
§7 finding: no per-file ledger — "what's been processed" unprovable.
Action: run on ~/workspace on Machine B; commit CSV.

## WIRE 16 — injury gate (NEW)
Path: intelligence/providers/injury_gate.py
Purpose: require_injury_published(week) — DataGapError before Friday 18:00 ET.
§7 finding: Week 5 injury empty; 5 credits wasted.
Action: build.

## WIRE 17 — parquet pins (DONE at 1fce7fb4c)
Path: intelligence/coaching/data/parquet-pins.json
Action: verify at HEAD; if pins lack sha256, fill them.

## WIRE 18 — P1 fixes (5 findings)
Paths: intelligence/signals/target_share.py, context/data_context.py, trust/abstention.py,
       context/data_context.py (tau — same as Wire 9), pipeline.py
§7 findings: target_hhi 0.0, swallowed DataGapError, CLEAR-on-missing, tau-not-in-context,
             pipeline.py divergence.
Action: per-file fixes, each reported file:line:fix.

## WIRE 19 — NWS/Open-Meteo weather provider (IN FLIGHT at c72a46c7f)
Path: intelligence/providers/weather_provider.py (verify)
§7 finding: stadium weather signal.
Action: verify c72a46c7f wired priors, not weights. Weights stay unset per total-signal backlog.

## WIRE 20 — GSE agent skill (IN FLIGHT at c72a46c7f — scope-check only)
Path: skills/gse/SKILL.md + references/
§7 finding: skill sketch on public surface only.
Action: verify c72a46c7f did NOT expose internals. Public routes only: /api/projections,
        /api/picks, /api/founder-picks, /api/proof, /api/receipts, /api/calibration.
