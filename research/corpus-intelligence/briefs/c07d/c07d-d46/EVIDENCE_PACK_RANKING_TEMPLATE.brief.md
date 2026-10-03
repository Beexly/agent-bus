# ops/EVIDENCE_PACK_RANKING_TEMPLATE.md

## What it is (1-2 sentences)
Inventory-only template for assembling an "evidence pack" (EU-AI-Act-style control mapping) for the ranking/ calibration program — a table of 12 control→artifact mappings with NIST/AI-control and EU-theme tags, explicitly disclaimed as NOT a declaration of conformity, CE mark, or PROVEN claim.

## Key metrics/methods (formulas where given, else "not specified")
No formulas or numeric metrics. The method is a control-mapping table with columns: id, control, artifactPath, nist, euTheme. 12 rows:

| id | control | artifactPath | nist | euTheme |
|----|---------|--------------|------|---------|
| rpcp-module | Ranking Power Control Plane | `apps/web/lib/calibration/ranking-power-control.ts` | AU-6 | transparency |
| polarity-rows | Independent load honesty | `apps/web/lib/calibration/proven-path-rows.ts` | SI-10 | accuracy |
| bakeoff-kinds | Score kinds never edge-as-p | `apps/web/lib/calibration/proven-path-engine.ts` | SI-10 | accuracy |
| conformal-bridge | Coverage ≠ eligibility | `apps/web/lib/calibration/rpcp-conformal-bridge.ts` | AU-2 | transparency |
| maps-off | Adjustments default off | `docs/ops/CALIBRATION_MAP_APPLY_MATRIX.md` | CM-3 | human oversight |
| gates-off | Public picks/stats dark | `docs/ops/GATE_OPENING_RUNBOOK.md` | AC-3 | human oversight |
| free-path | ABSENT-only odds | `docs/ops/ODDS_FREE_DUAL_PATH_HONESTY.md` | SI-12 | accuracy |
| kalshi-maps | Fair-value fuel maps | `packages/ingestion-pipeline/src/kalshi-team-abbr.ts` | SI-10 | accuracy |
| b2b-signals | rankingP on signals API | `apps/web/app/api/v1/signals/route.ts` | AU-2 | transparency |
| dark-reason | Quiet ≠ outage honesty | `apps/web/lib/public/dark-reason.ts` | AU-2 | transparency |
| floors | Brier/ECE/RES floors | `docs/ops/MURPHY_RES_AND_BRIER_MIN.md` | SI-10 | accuracy |
| dase-map | DASE→GSE module map | `docs/ops/DASE_PREDICTIONIO_MAP.md` | PL-2 | accountability |

Export: `npx tsx scripts/governance/export-evidence-pack.ts` from repo root. Export rule: "Fill real artifact digests at export time; do not invent settled metrics or ROI." Assembler: `apps/web/lib/governance/evidence-pack.ts` ("disclaimer load-bearing").

## Data sources named
- Kalshi (team-abbreviation map for fair-value fuel maps: `packages/ingestion-pipeline/src/kalshi-team-abbr.ts`).
- DASE / predictionio (DASE→GSE module map: `docs/ops/DASE_PREDICTIONIO_MAP.md`).
- B2B signals API (`apps/web/app/api/v1/signals/route.ts`) — internal surface carrying rankingP.

## Findings (numbers and facts, not vibes)
1. The pack is explicitly "inventory only" — not a declaration of conformity, not a CE mark, not a PROVEN claim; the disclaimer in the assembler module is described as "load-bearing."
2. 12 controls mapped across 4 NIST families (AU-6, SI-10, SI-12, AU-2, CM-3, AC-3, PL-2) and 3 EU themes (transparency, accuracy, human oversight, accountability).
3. Accuracy-family controls (SI-10/SI-12) pin four honesty rules: score kinds are never presented as edge-as-p; Brier/ECE/RES floors exist (`docs/ops/MURPHY_RES_AND_BRIER_MIN.md`); odds path is ABSENT-only honest (`docs/ops/ODDS_FREE_DUAL_PATH_HONESTY.md`); Kalshi fair-value fuel maps are team-abbreviation keyed.
4. Transparency controls (AU-2/AU-6) pin: coverage ≠ eligibility (conformal bridge); independent load honesty rows; rankingP on the B2B signals API; dark-reason honesty ("Quiet ≠ outage").
5. Human-oversight controls (CM-3/AC-3): calibration maps default OFF; public picks/stats dark by default with a gate-opening runbook.
6. Accountability (PL-2): DASE→GSE module map records the lineage of the prediction engine.
7. Export is a real script (`scripts/governance/export-evidence-pack.ts`) run with `npx tsx` from repo root; artifact digests are filled at export time — never pre-invented — and settled metrics/ROI must not be fabricated in the pack.
8. The pack covers the "ranking RES program" specifically.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — Governance inventory template; no behavioral signal. It serves the calibration/sizing and audit-readiness programs by defining the exact control surface any model lane must satisfy: mechanism — because the pack's SI-10 accuracy controls forbid presenting "score kinds as edge-as-p," any new lane (QB-behavioral profiles, coaching tendencies, trust-target intake) must enter the engine as a calibrated probability contributor, never as a raw score relabeled as edge.
- TRUST-SIGNAL — The "polarity-rows / Independent load honesty" control (`apps/web/lib/calibration/proven-path-rows.ts`, SI-10) is the mechanism that keeps the independent-vs-market blend honest: trust-target intake signals are audited against whether their loads are independent, which is what lets the engine claim any edge at all.
- OTHER — The "floors" control (Brier/ECE/RES floors in `docs/ops/MURPHY_RES_AND_BRIER_MIN.md`) is the quantitative counterpart to the close-out matrix's Brier ≤ 0.22 target — the two files agree, no contradiction.
- No CONTRADICTION found (consistent with calibration stack and close-out matrix on Brier/ECE gating, maps-off, gates-off). UNCERTAIN: none material — the file is a template, and it correctly disclaims any PROVEN assertion.

## Engine-actionable? (yes/no + one-line what)
Yes — one line: require every new signal lane's spec to name its SI-10 accuracy control mapping (floors file + polarity-rows honesty) before it is eligible for the PROVEN path.

### Referenced files, papers, datasets
- `apps/web/lib/governance/evidence-pack.ts` (assembler)
- `apps/web/lib/calibration/ranking-power-control.ts`
- `apps/web/lib/calibration/proven-path-rows.ts`
- `apps/web/lib/calibration/proven-path-engine.ts`
- `apps/web/lib/calibration/rpcp-conformal-bridge.ts`
- `docs/ops/CALIBRATION_MAP_APPLY_MATRIX.md`
- `docs/ops/GATE_OPENING_RUNBOOK.md`
- `docs/ops/ODDS_FREE_DUAL_PATH_HONESTY.md`
- `packages/ingestion-pipeline/src/kalshi-team-abbr.ts`
- `apps/web/app/api/v1/signals/route.ts`
- `apps/web/lib/public/dark-reason.ts`
- `docs/ops/MURPHY_RES_AND_BRIER_MIN.md`
- `docs/ops/DASE_PREDICTIONIO_MAP.md`
- `scripts/governance/export-evidence-pack.ts`
- Kalshi (data source), DASE/predictionio (lineage source)
- No papers named.
