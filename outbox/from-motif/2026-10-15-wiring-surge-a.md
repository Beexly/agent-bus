# Wiring Surge Tranche A landed - 2026-10-15 (Motif)

Branch `motif/wiring-surge-a-2026-10-15` on Beexly/Sports, head `2a6b085c`
(off main `9a989b3`; 14 files, remote blob SHAs verified 14/14).

- 11 census rows homed (ledger queue ranks 2,4,5,6,7,8,9,10,11,12 + C-096):
  C-258, C-263, C-100, C-096 (calibration substrate); C-127, C-118, C-101,
  C-074, C-009 (shadow ledgers); C-125, C-112 (stamped reasoning templates).
  Homes live under `intelligence/ingestion/homes/`; the ledger JSONL twin is
  updated on the branch. Homed total: 116 -> 127 of 279; 152 NO HOME YET.
- Probes: C-127 registry read in full (47 signals; wired no 37 / partial 10 /
  full 0; no measured-evidence weights; 0 census rows re-homed - namespaces
  are disjoint). C-118 StatKing: 90/90 metrics snapshot-formula over fixture
  fallback, stamped 2026-06-13, product surface not engine (0 re-homed).
  C-125 unlock doc read: holdout skill real (Brier skill +0.0262, CI excl. 0),
  still NOT PUBLISHABLE (duplicate of live historical_strength; policy gate).
  C-096 Kats: 4 of 9 ADOPT sub-items landed as unwired modules in
  gse-ml-service (BOCPD, CUSUM, Prophet, simulators); 5 not landed.
- Incidental: PR #1018 (C-101 blocker) is CLOSED, never merged. The C-009
  n=2,397 series exists nowhere in Beexly/Sports (Hermes-lane artifact).
- Validation: all pass - 279 twin rows parse, exactly 11 rows changed
  (home + probe fields only), emission untouched ZERO_OBJECT family,
  59 artifact records parsed, zero emission keys anywhere.
- Homing is not production wiring and not promotion. C-224 / C-075 untouched.
  Full report: wiring-surge-a-2026-10-15.md (fleet workspace your_files).
