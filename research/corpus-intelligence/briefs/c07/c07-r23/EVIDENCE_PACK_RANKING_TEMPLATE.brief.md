# ops/EVIDENCE_PACK_RANKING_TEMPLATE.md
## What it is (1-2 sentences)
Template for assembling an evidence pack for the ranking/Calibration (ranking RES) program: an inventory of 12 control→artifact→NIST→EU-theme rows, explicitly an inventory only — not a declaration of conformity, CE mark, or PROVEN claim.
## Key metrics/methods (formulas where given, else "not specified")
12 suggested controls, e.g.: rpcp-module (Ranking Power Control Plane → `apps/web/lib/calibration/ranking-power-control.ts`, NIST AU-6); polarity-rows (independent load honesty, SI-10); bakeoff-kinds (score kinds never edge-as-p, SI-10); conformal-bridge (coverage ≠ eligibility, AU-2); maps-off (adjustments default off, CM-3); gates-off (public picks/stats dark, AC-3); free-path (ABSENT-only odds, SI-12); kalshi-maps (fair-value fuel maps, `packages/ingestion-pipeline/src/kalshi-team-abbr.ts`, SI-10); b2b-signals (rankingP on signals API, AU-2); dark-reason (quiet ≠ outage honesty, AU-2); floors (Brier/ECE/RES floors, SI-10); dase-map (DASE→GSE module map, PL-2). Export via `npx tsx scripts/governance/export-evidence-pack.ts`; real artifact digests filled at export time — do not invent settled metrics or ROI.
## Data sources named
Kalshi (fair-value fuel maps); DASE (module map to GSE).
## Findings (numbers and facts, not vibes)
- The assembler (`apps/web/lib/governance/evidence-pack.ts`) carries a load-bearing disclaimer: the pack is inventory, not a conformity claim.
- "Score kinds never edge-as-p" (bakeoff-kinds) enforces that ranking scores are not presented as probabilities.
- Controls encode honesty defaults: maps off by default, public picks/stats dark, quiet ≠ outage.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: "score kinds never edge-as-p" and the do-not-invent-settled-metrics export rule are claim-governance artifacts — ranking power must never be sold as probability.
- OTHER: Kalshi fair-value maps as a named data-source pattern; NIST/EU-AI-Act control tagging for a future GSE compliance story.
## Engine-actionable? (yes/no + one-line what)
yes — adopt "score kinds never edge-as-p" as a hard display rule for any GSE ranking/score surface, and the evidence-pack inventory pattern for PROVEN-readiness bookkeeping.
