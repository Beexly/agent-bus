# ops/archive/root-museum/MARKETING_AND_GROWTH_BLUEPRINT.md
## What it is (1-2 sentences)
A 2026-06-01 growth-marketing strategist session's blueprint for Galaxy Sports Edge (then "GSN"): wedge = "win on proof, not promises" — public calibration, verifiable settled record, and loss autopsies. Every claim is evidence-labeled: `verified` (read in repo) / `inferred` (from code, not run) / `recommended` / `speculative`.
## Key metrics/methods (formulas where given, else "not specified")
- Calibration-report gating: public calibration curve stays gated until n≥30 settled canonical picks.
- North-star metric (recommended): verified-record-driven activated signups = free users who viewed ≥1 proof page then opted into newsletter or upgraded.
- Measurement: K-factor + cycle time for referral (dropbox-style dual-sided: free Pro month ↔ 50% off, fired at aha moment — after user sees 3+ settled picks); organic→signup rate; proof-card share→visit→signup via UTM.
- Post-March-2026 core-update rule (external): Google penalized scaled/templated content 60–90% ranking losses; every programmatic page needs ≥30% unique proprietary data + `Dataset`/`SportsEvent`/`Article` JSON-LD.
- Compliance: AGA Responsible Marketing Code — bans "risk-free" and guaranteed-win messaging; banned-phrase list hard-rule: guaranteed profit/winning, lock of the day, free money, sure thing, risk-free; substitutes "confidence-rated signal."
## Data sources named
External: digitalapplied, 15m, seeklab, beehiiv State of Newsletters 2026 (median newsletter hits first revenue in 66 days; Essential Sports scaled ~1M/day at zero CAC), AGA code/statutes, Pikkit/Betstamp (tracker co-marketing). Internal: `ContentDraft`, `ModelJournalEntry` (with `emailedAt`/`twitterTeasedAt` hooks), `BlogPost`, `LossAutopsy`, `Promotion` (Prisma schema); `COMPETITIVE_INTELLIGENCE.md` §§0–5 (market splitting into venues vs intelligence); 7 sports × 3 markets (NFL, NCAAF, NBA, NCAAB, MLB, NHL, MLS × h2h/spread/total).
## Findings (numbers and facts, not vibes)
- March 2026 Google core update: 60–90% ranking losses for scaled/templated content — blueprint's answer is "scale with substance" using proprietary per-game signal snapshots.
- YouTube Shorts: ~200B daily views, ~5.91% engagement; TikTok = FIFA Preferred Platform with World Cup 2026 hub (June 2026-era context).
- Blocker noted: only one static OG image existed; proof pages (`/performance/losses/[id]`, `/ledger`, `/journal/[slug]`) lacked per-route dynamic OG cards.
- Highest-leverage safe code change specified: homepage `export const metadata` in `apps/web/app/page.tsx` (~10 additive lines) anchoring title/description on the proof wedge.
- Banned-phrase scan enforced in code (`Promotion` hard-gates on disclosureText/termsUrl/responsibleGamingText/complianceStatus=APPROVED; `ContentDraft.bannedPhraseScanClean`).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (TRUST-SIGNAL) The proof-wedge doctrine itself: public calibration, loss autopsies, "no number we can't back" — directly the GSE public-facing trust posture; banned-phrase list (lock of the day, sure thing, risk-free) is the outward-voice gate.
- (OTHER) Marketing/growth ops: SEO, newsletter, referral loop, compliance — no QB/coaching/OL/scheme intelligence.
## Engine-actionable? (yes/no + one-line what)
Partially — no engine model value, but the calibration-gating rule (n≥30 settled before public claims) and the banned-phrase/compliance posture feed GSE's trust-signal/public-output governance; file is dated 2026-06-01 and pre-dates the 9/28 public/private surface doctrine.
