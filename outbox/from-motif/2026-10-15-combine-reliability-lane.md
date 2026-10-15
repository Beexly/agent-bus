# Combine-Feature Reliability Lane — built (Motif, 2026-10-15)

Garrett's order: wire and add all signals into the engine. This lane is the
feature-level trust gate for Combine-derived signals (distinct from the
data-level trust shadow).

**Phase 1 — extraction (complete).** All 11 named BDB 2027 repos cloned to
`~/workspace/vendor/bdb27-reliability/` and extracted under Grok's
seven-field standard (Source / Repeatability / Transfer / Controls / Power /
Negatives / Redundancy), every number sourced to a file or notebook cell.
Full tables: `~/workspace/your_files/census-combine-reliability-addendum-2026-10-15.md`.

Headline audit results:
- faith-amanze: pre-registered reliability floor 0.5; tracked peak speed vs
  official forty **r = −0.98** (notebook cell 5); DL nulls at n = 65 carry
  MDE 0.36 → underpowered, not falsified.
- Pratheeksh-7S: reps-needed table (peak speed 0.98 → 1 rep; cut retention
  0.40 → 4; re-acceleration 0.15 → 13); burst → get-off is a **powered
  null** (0.03, CI −0.16–0.23, ceiling 0.68).
- vanductan-NLT: the same-yardstick normalization method extracted in full
  (identical feature function, onset back-extrapolation, L/R averaging,
  class/position centering) — infrastructure prerequisite for any
  Combine→game comparison.
- StevanHRG Bend Score: +0.99 POE/100 (CI 0.45–1.53), nested
  leave-one-class-out validated; **repeatability never measured** → gate
  verdict UNDERPOWERED, shadow-admissible. (The writeup's CI is 0.45–1.53;
  a secondhand summary circulating 0.58–1.39 is wrong.)
- **KTD fails verification**: KTD ≡ ΔS / mean separation exactly (outcome
  in the denominator); shipped CSV holds 14 of the claimed 106 rows.
  Numerator alone vs separation: r_s = −0.23, n.s.
- **Bend & Burst (itsmesujan) is internally inconsistent**: writeup R²
  claims are contradicted by the repo's own regression_summary.csv
  (KPRI→pressure CV R² = −0.13). Redundancy test vs CBS pre-registered in
  the addendum; not run (data absent).
- rdsciv direction-of-turn: code private, NOT REACHED. Big Red repo:
  README-only placeholder. chasko winners collection: registry reference.

**Phase 3 — built, landed, NOT merged.** Branch
`motif/combine-reliability-lane-2026-10-15` @ `ade0fd4` on Beexly/Sports
(remote-verified):
- `intelligence/combine_reliability/gate.py` — PASS / FAIL / UNDERPOWERED
  gate encoding the four audits' decision rules; 19 tests pass, including
  the known cases (peak speed FAIL-REDUNDANT; cut composite FAIL;
  DL n = 65 null UNDERPOWERED).
- `yardstick.py` — same-yardstick module per the extracted method.
- `features.py` — Bend Score + KTD primitives as SHADOW features (weight
  0); the published KTD ratio is deliberately not implemented.
- `shadow/combine_shadow_ledger.jsonl` — 10 seeded gate-evaluation /
  feature rows.

Fences: emission stays ZERO_OBJECT; nothing touches picks/pricing;
shadow wiring only, no promotion. Merge is Garrett/runbook-gated as usual.
