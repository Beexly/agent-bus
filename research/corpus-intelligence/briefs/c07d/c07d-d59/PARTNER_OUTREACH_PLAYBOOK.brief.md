# revenue/PARTNER_OUTREACH_PLAYBOOK.md
## What it is (1-2 sentences)
A short partner-outreach operations doc (updated 2026-07-04) defining a daily outreach cadence of 10 human-reviewed messages with a fixed per-category allocation, plus hard honesty rules for outreach copy, for GSE revenue partnerships.

## Key metrics/methods (formulas where given, else "not specified")
not specified — no formulas. The operative numbers: daily target = 10 human-reviewed messages. Default allocation: 4 creator/tool partners, 2 sports data/API partners, 1 fantasy tool partner, 1 sports cards/collectibles partner, 1 local sponsor, 1 podcast/creator collaboration (sums to 10).

## Data sources named
None — no data sources, datasets, or APIs named. Code surface named instead: `apps/web/lib/revenue/outbound-tracking.ts` and `apps/web/lib/revenue/partner-pipeline.ts`.

## Findings (numbers and facts, not vibes)
- Updated: 2026-07-04.
- Daily target: 10 human-reviewed messages.
- Default allocation: 4 creator/tool partners; 2 sports data/API partners; 1 fantasy tool partner; 1 sports cards/collectibles partner; 1 local sponsor; 1 podcast/creator collaboration.
- Outreach rules (verbatim): "No fake audience claims. No fake revenue claims. No unsupported performance claims. No live links until approval. Every outreach should explain GSE's evidence-first posture."
- Code surface: `apps/web/lib/revenue/outbound-tracking.ts`, `apps/web/lib/revenue/partner-pipeline.ts`.
- Note: the file is thin (27 lines); the code surface is asserted but its contents are not verified here — UNCERTAIN whether those lib files exist as described.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL — the playbook's hard honesty rules (no fake audience/revenue/performance claims; evidence-first posture in every outreach) serve the trust-signal lane for commercial partnerships: credibility with data partners is the stated mechanism for getting partner data access, which feeds the trust-target intake program. The "no unsupported performance claims" rule is also a calibration discipline — it prevents revenue copy from running ahead of the engine's actual audited accuracy, which is the live friction in the 17:34 audit-challenge thread.
- OTHER — the 2 sports data/API partner slots per day are a defined intake channel for licensed data sources (relevant to the source-acquisition lane, e.g. paths toward GREEN-classifying ORANGE sources like Scores24 or licensing Sportradar/Stats Perform).
- OTHER — the sports cards/collectibles slot (1/day) connects to the Marketplace cards lane (Garrett's existing listings), a lateral revenue surface for the GSE brand audience.

## Engine-actionable? (yes/no + one-line what)
no — this is a revenue-operations cadence doc (10 msgs/day, allocation, honesty rules); it directs partner outreach, not engine modeling — its only engine touch is that the honesty rules guard against premature accuracy claims.

## Referenced files, papers, datasets
Code files: `apps/web/lib/revenue/outbound-tracking.ts`, `apps/web/lib/revenue/partner-pipeline.ts`. No papers or datasets referenced.
