# docs/commercial/COMMERCIALIZATION_DOCTRINE.md
## What it is (1-2 sentences)
GSE's operating doctrine (updated 2026-07-04) stating the company commercializes trust before picks: all revenue lanes must pass an evidence standard of no fake data, no fabricated claims, and no sponsor influence over model outputs. Currently repo-visible doctrine only; it does not activate any affiliate links, sponsors, billing, publishing, or external integrations.

## Key metrics/methods (formulas where given, else "not specified")
- Evidence standard checklist (qualitative, not specified as formulas): no fake data, no fabricated audience numbers, no fake revenue claims, no unsupported win-rate/ROI/profit/calibration/market-beating claims, no sponsor control over picks/model outputs/no-bet decisions/loss autopsies/calibration claims/editorial conclusions, no auto-publish, no auto-send, no automated betting, no undisclosed partner/affiliate placement.
- Commercial chain (sequence, not a formula): Data -> Source Rights -> Reliability -> Proprietary Metrics -> Model Parliament -> Calibration -> No-Bet Governor -> Evidence -> Content -> API -> Partnerships -> Revenue -> Audit -> Trust.
- Owner gates requiring approval: adding real affiliate links; naming real partners as active; signing sponsor packages; connecting a newsletter provider; exposing public API v1 routes; claiming public performance, calibration, or market edge; enabling paid or live infrastructure.

## Data sources named
- Code surface named: `apps/web/lib/media-revenue/*` (media strategy and content safety); `apps/web/lib/revenue/*` (partner, offer, disclosure, risk, audit primitives); `docs/media/*`, `docs/commercial/*`, `docs/revenue/*` (operating boundaries).

## Findings (numbers and facts, not vibes)
- 6 approved commercial lanes with statuses: Media sponsorship (draft/manual), Affiliate/tool reviews (draft/manual), Local sponsors (draft/manual), Newsletter sponsorship (coming soon, no provider integration), B2B Evidence API (future/shadow, derived intelligence only not raw data resale), Licensing and data room (future, source-rights and metric validation required).
- 7 hard owner-approval gates listed above.
- Doctrine explicitly states commercial work can begin before all models/API surfaces are live because the first product sold is disciplined attention.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] No-bet governor and public calibration-claim gate: the engine must not publish unsupported win-rate/ROI/calibration/market-beating claims — directly governs what GSE can say about its picks publicly.
- [TRUST-SIGNAL] Model parliament + evidence standard: all commercial outputs gated on no fabricated data or audience numbers.
- [OTHER] B2B Evidence API lane (future/shadow): derived intelligence only, never raw data resale — constrains API product design.

## Engine-actionable? (yes/no + one-line what)
No — operating doctrine, no metrics or methods to wire; it constrains what the engine may claim publicly, not how it computes.
