# ops/FOUNDING_LAUNCH_CHECKLIST.md

## What it is (1-2 sentences)
A launch-readiness checklist enforcing integrity gates for the GSE founding full launch: money path, lead capture, picks surface, calibration/proven claims, and ACI. It is organized around ops-truth config flags and hard rules on what may not be claimed.

## Key metrics/methods (formulas where given, else "not specified")
- **Stale-data SLA:** 503 `stale_data` / quiet board is honest when last odds insert > 240 minutes or no games. Do not lower the Refresh SLA or the `oddsInserted>0` filter.
- **Eligibility gate:** GREEN × K with default K=3 on live Brier/ECE/Murphy floors before performance claims.
- **One-time publish ceremony:** `CALIBRATION_AUTO_PUBLISH=true` (or sticky `CALIBRATION_PUBLISHED=true`); performance claims only when published AND GREEN.
- **ACI:** `CONFORMAL_ABSTAIN_ENABLED` default false (show/abstain only; not publish).
- **Sample counts:** `sample.canonicalSettled` must use non-seed counts; see `SAMPLE_N_VS_MAP_N.md` — 1017 canonical (incl. PUSH) vs ~760 map (learning-eligible WIN/LOSS).
- Flag settings given: `GSE_WAITLIST_GATE_ENABLED=false` opens public `/waitlist` (leave true only while testing Basic Auth); `PUBLIC_PICKS_ENABLED=true` is OK.

## Data sources named
- ops truth `billingMoney` (money path: Stripe secret + webhook → `moneyPathReady`; dashboard webhook host must be galaxysportsedge.com only; no ROI claims on pricing).
- `SAMPLE_N_VS_MAP_N.md` for canonical vs map n counts.

## Findings (numbers and facts, not vibes)
- Five checklist domains: Money path, Lead capture, Picks surface, Performance/PROVEN, ACI, plus Redeploy.
- Hard prohibitions: never set `CALIBRATION_ADJUSTMENTS_ENABLED` without bake-off + ceremony; never claim ROI/verified/PROVEN while RED or unpublished.
- Empty daily-slate (0 games) is treated as quiet board, not an outage.
- After merges land on main, Production must serve the new SHA before ops fields like `mapVsCanonical` / quiet-board copy appear (deploy-propagation gate).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: The entire checklist is a trust-signal system — honest stale-data/quiet-board handling, calibration floors (Brier/ECE/Murphy), published∩GREEN gating before any "PROVEN" claim, and hard rules against ROI theater. This is the mechanism behind "never claim ROI/verified while RED" seen elsewhere.
- OTHER: Operational wiring detail (waitlist gate flags, webhook host pinning, redeploy SHA gate) — infrastructure provenance, not sports intelligence.

## Engine-actionable? (yes/no + one-line what)
No — ops/launch governance, not engine model content.
