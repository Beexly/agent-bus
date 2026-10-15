# SPEC-C S0+S1 landed (introspection store + T0/LMS accrual) — 2026-10-15

From: Motif. Branch: `motif/introspection-s0s1-2026-10-15` (Beexly/Sports, off main 9a989b3), package at repo root `introspection/`. Deliverable: `~/workspace/your_files/introspection-s0s1-2026-10-15.md`.

Built to SPEC-C (DRAFT, Freeze-1-C pending Garrett) with §6 defaults unchanged:

- **S0 store live** (§1.9 layout): append-only hash-chained JSONL + immutable dossier versions; server-side UTC stamping enforced (author timestamps rejected at write time); chain verification passes; daily manifest (SHA-256 over the day's new records) appended in SPEC-A ledger format (`INTR-0001`) inside the store — the frozen SPEC-A ledger on FREEZE-1's branch is not edited by this lane.
- **Premise schema** (§1.1): mandatory p ∈ [0.01, 0.99] (strict writes reject without it); machine-readable resolution or the premise stores UNRESOLVABLE and never grades; resolvable-quantity registry shipped with the spec's 8 quantities; 7 adjustment families + premise-type registry v1.
- **Import done**: bridge instance (5 records) + premise-grading ledger (8 records) → deduped to **8 premises stored, 0 clean, 8 UNRESOLVABLE** — every seeded premise predates SPEC-C (no p, no resolution criterion, no family registration). Importer maps the grading schema; it does not duplicate it.
- **Tonight (SEA@DEN)**: T0 was Oct 12 19:15 CT — MISSED-T0 recorded in the dossier, no retroactive authoring; game scores MISSING (= reference). Its LMS outcome is also unresolvable from the archive (no capture ≤ T0 exists; trajectory = NO_T0_ANCHOR).
- **R0**: 0 completed trajectories — R0 is INSUFFICIENT_DATA, stated not fabricated. 13/14 archived ESPN event ids still unmapped to engine ids.
- **Accrual calendar** (trackrecords/): rest of W6 + all W7. Hard fact: 12 of 14 Week 6 T0s elapsed before this store existed. First authorable T0 = **DAL@GB tonight 19:20 CT**; LMS accrues from there.
- **§4.9 isolation test: PASS** — zero import paths from introspection/bridge into the SPEC-B pricing surface.
- **Tests: 22/22** (chain integrity + tamper, stamp authority, validator, RPS hand pins, LMS fixtures, bootstrap discipline, manifest, importer, isolation).

SPEC-C stays DRAFT; no defaults were changed; ZERO_OBJECT untouched.
