# ops/RPCP_AND_CONFORMAL_BRIDGE.md
## What it is (1-2 sentences)
The Ranking Power Control Plane (RPCP) spec: an ops-level attribution system that labels why resolution is low and gates maps, conformal intervals, and AUTO_PUBLISH behind real resolution.
## Key metrics/methods (formulas where given, else "not specified")
- Residual attribution labels: `missing_independent` (trueProb coverage < 35%), `dead_groups`, `selective_needed`, `ranking_dead`, `path_viable`.
- Polarity law: bake-off over confidence | independent_trueProb | blend_indep_conf | marketFairProb; never edge/edgeScore as p; pIndependent = raw trueProb only.
- Conformal bridge: offline by default (RPCP_CONFORMAL_BRIDGE_COMPUTE unset); when on, attaches residual threshold + Mondrian widths to attribution. Coverage never unlocks PROVEN or raises RES.
- Maps gate: `mapsApplyGateOpen` only when live RES ≥ 0.02; still requires floors + GREEN×K + founder policy.
## Data sources named
- `proven-path-seed` → `public-surface-truth.rankingPower` + `rpcpConformalBridge`.
- Independent trueProb maps: Kalshi / FPI / Elo / DC maps.
## Findings (numbers and facts, not vibes)
- Modules: `apps/web/lib/calibration/ranking-power-control.ts` (SoT), `apps/web/lib/calibration/rpcp-conformal-bridge.ts` (offline bridge).
- TrueProb coverage below 35% triggers `missing_independent`; action is expand independent maps, never invent data (soft-fail null).
- Conformal outputs are diagnostic only: they do not set CONFORMAL_ABSTAIN_ENABLED, maps, or AUTO_PUBLISH.
- Founder steps: redeploy main, read `rankingPower.operatorHint` / `residualOperatorHint` in ops truth; optional conformal compute on non-prod preview only.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: coverage never unlocks PROVEN; no invented trueProb.
- OTHER: calibration governance, residual attribution taxonomy, independent-probability ingestion lanes (Kalshi/FPI/Elo/DC).
## Engine-actionable? (yes/no + one-line what)
Yes — wire RPCP residual labels into ops truth and keep maps gated on RES ≥ 0.02.
