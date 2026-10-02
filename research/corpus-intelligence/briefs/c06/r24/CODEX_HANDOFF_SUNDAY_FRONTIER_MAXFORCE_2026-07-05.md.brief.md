# ops/archive/leverage/CODEX_HANDOFF_SUNDAY_FRONTIER_MAXFORCE_2026-07-05.md
## What it is (1-2 sentences)
A 374-line, 49KB execution handoff from the 2026-07-05 "Sunday Frontier Maxforce" Codex session: safety gates first, then ten proprietary metric slices (SLRS, QBI, RVI, CIG, DPI, CUW, NBP, PWS, PFS, MMS) with birth certificates, evidence cards, drift cards, historical adapters, guardrails, and full test receipts.
## Key metrics/methods (formulas where given, else "not specified")
- Metric inventory (all governed SHADOW / INTERNAL, publicApiAllowed false): SLRS (Stale Line Risk Score), QBI (QB Burden Index), RVI (Role Volatility Index), CIG (Calibration Integrity Grade), DPI (Drift Pressure Index), CUW (Conformal Uncertainty Width), NBP (No-Bet Pressure), PWS (Playable Window Score), PFS (Portfolio Fit Score), MMS (Market Mirage Score); plus GSS in composed payloads, GSE Action Score (`computeGseActionScore`), `computeNoBetStrength()`.
- No formulas stated for the metrics; the file documents governance mechanics, not equations — formulas "not specified."
- Method: fail-closed seams (stale/source/no-bet/drift/calibration/debt all hard-close windows or veto action), source-rights + payload-rights reviews before any metric execution, draft-first model cards, synthetic/local evidence only.
- Decision gates: PWS closes the window when market signals stale/blocked, source-policy blocked, or NBP/DPI/calibration-debt high; MMS blocks market interpretation under the same conditions; no-bet governor integration tests prove high edge cannot override missing data, stale gravity, unclear rights, drift, or debt.
## Data sources named
- nflverse-shaped historical records (local, source-rights-reviewed) for validation/distribution adapters; canonical scraping registry (`apps/web/lib/scraping/source-rights-registry.ts`).
- No live provider data; explicit "Intentionally Deferred" list: no live AWS, no credentials, no DB migrations, no public API routes, no affiliate links.
## Findings (numbers and facts, not vibes)
- Test receipts (file/test counts per the handoff): baseline all-workspaces 635 files / 8,052 tests passed; later segmented aggregate 669 files / 8,235 tests; CUW 670 files / 8,239; final MMS aggregate 661 files / 8,196 (segmented: web 538/7,111, crypto 1/13, data-ingestion 16/131, ingestion-pipeline 6/60, prediction-engine 99/850, types 1/31).
- Red/green discipline documented per metric: e.g., no-bet governor first failed (drift+debt still produced PLAY), repaired to pass (1 file, 5 tests); prediction-engine suite grew from 85 files/786 tests to 99 files/850 tests across the session.
- Six frontier guardrails wired into `npm run guardrails`: commercial-copy, performance-claims, no-raw-ngs, partner-offers, api-payload-rights, openapi-security (+ AWS compatibility index).
- Branch `codex/sunday-frontier-maxforce-2026-07-05`, starting SHA 6f193b5dc09541c2490a1b2212eccda8ca7894ba.
- Receiver/rusher metrics with birth certificates + directional tests: Receiver Difficulty Index, Expected YAC, YAC Creation, Rush Environment Index, Expected Rush Yards, Rush Over Expected, plus receiver/rusher residual rollups (yac-creation-gse, rush-over-expected-gse).
- B2B Evidence API: docs, shadow harness, idempotency replay, abuse-response fixtures, live-route promotion packet (non-executable, owner-review) — live `app/api/v1` routes intentionally deferred.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: QBI (QB Burden Index) — a governed passing-context metric explicitly separate from QB quality; QB is treated as context load, not win probability.
- TRUST-SIGNAL: birth-certificate governance for every metric, no-raw-NGS-export guardrail, unsupported-performance-claims guardrail, claim-safety review queues, synthetic-vs-real evidence labeling.
- SCHEME: Receiver Difficulty Index, Expected YAC, YAC Creation, Rush Environment Index, Expected Rush Yards, Rush Over Expected — receiving/rushing scheme-context metrics with directional tests.
- OL: none directly (OL is INFERENCE-free; no OL-specific metric named).
- OTHER: decision-window and portfolio mechanics (PWS/PFS/NBP), market-integrity risk (MMS), drift/calibration pressure (DPI/CIG/CUW), source-rights/IP governance.
## Engine-actionable? (yes/no + one-line what)
Yes — inventory these ten SHADOW metrics + QBI/RDI/Expected-YAC as wire-ready governed metrics; prioritize QBI and the receiving metrics for the ranking-power lane.
