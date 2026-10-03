# docs/formal/packets/README.md

## What it is (1-2 sentences)
Docs for the Weekly Gravity Packets (`week-YYYYWW.json`, produced by `scripts/growth/weekly-gravity-packet.ts` from whatever real data exists on the branch), including an honest caveat that several fields are currently stubbed with conservative defaults rather than real data.

## Key metrics/methods (formulas where given, else "not specified")
not specified — the doc names the packet's moat-score inputs (`sdkStars`, `labeledShadowN`, `distinctSurfacesGoverned`) and other fields, but gives no formulas; the moat-score computation itself lives at `apps/web/lib/growth/moat-score.ts`, where `moatScore` is defined as a LEAD-TIME indicator, not a claim of permanent/defensible uniqueness.

## Data sources named
- `scripts/growth/weekly-gravity-packet.ts` (packet generator; exports `isPacketMissingForWeek`)
- `apps/web/lib/growth/moat-score.ts` (moat-score definition)
- `formal/receipts/cutoff-matrix/summary.txt` (makes `cutoffNStar` real; currently lives on a separate, not-yet-merged formal branch)

## Findings (numbers and facts, not vibes)
- [TRUST-SIGNAL] Stubbed fields with conservative defaults (usually 0/false), honestly disclosed: `sdkStars`, `labeledShadowN`, `uniqueReceiptVerifies7d` / `receiptsSigned7d`, `distinctSurfacesGoverned`, `mrrCents`, `stressTestPass` — each has no real data source wired yet, and the script stubs them rather than fabricating numbers.
- [TRUST-SIGNAL] `cutoffNStar` is real only when `formal/receipts/cutoff-matrix/summary.txt` exists on the branch; otherwise it defaults to 0 and is not real.
- [OTHER] `moatScore` is a lead-time indicator, not a defensibility/uniqueness claim.
- [OTHER] CI enforcement is owner opt-in only: `REQUIRE_GRAVITY_PACKET=1` makes a build fail if a week's packet is missing; it is NOT wired into CI by default.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the stub-rather-than-fabricate convention and the "0 = not real" convention for `cutoffNStar` are integrity controls the engine should mirror — unwired metrics default to 0/false with the gap disclosed, never interpolated.
- OTHER: internal growth/ops tooling, not a predictive signal.

## Engine-actionable? (yes/no + one-line what)
yes — adopt the stub-not-fabricate convention: any unwired metric the engine exposes must default to 0/false with the gap disclosed, never interpolated.
