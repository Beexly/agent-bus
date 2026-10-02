# design/redesign-2026-09/copy-audit-and-voice-pairs.md
## What it is (1-2 sentences)
A 393-file copy audit of the GSE web surface plus 19 before/after voice rewrites, feeding the site redesign brief. Headline result: the literal banned-phrase list (`positioning-vocab.json`, enforced by CI lint `scripts/guardrails/trust-gate.mjs` / `npm run lint:brand`) had zero hits; all violations were second-tier — legacy brand terms, personified model language, slogan cadence, rhetorical questions/devices, em-dashes, colon-headlines.

## Key metrics/methods (formulas where given, else "not specified")
- Method: scope `apps/web/app/**` and `apps/web/components/**` excluding admin/cockpit/ops/api/test files; 393 files searched; every "before" quoted verbatim with file:line.
- Raw em-dash grep: 983 hits across 393 files → narrowed to ~141 likely real-copy instances (majority were CSS `transform`/`translate` tokens or code comments). No formula.
- Findings by rule: banned literal AI phrases 0; "Mission Control" 4 occurrences (3 files); personified model language 5 (3 files); closing-slogan cadence 4 (3 files); "not X, [it is/but] Y" rhetorical contrast 5 (4 files); rhetorical questions in headings 3 (3 files); colon-headlines 3 on priority pages + 59/393 files site-wide with `title: "X: Y"` pattern; "Unlock(s)" family 7 occurrences (flagged for review, not clean hits); "Insider" 2 occurrences (context caveat — news-source credibility tier, not marketing); grandiose framing 1 ("A Sports Intelligence Operating System").
- Readiness gates affecting copy: `getReadinessGates().canExposePublicPicks` (picks board), `canExposePerformanceStats` (performance), `minSettledPicksForLearning` default 100 (per-row `WithheldStat` suppression), pricing phases FOUNDING → PROVEN → ESTABLISHED → AUTHORITY (`PRICING_PHASE` env var).
- Calibration badge: `components/picks/pick-card.tsx:528-558` — per-pick calibrated probability available → badge reads "...about {pct} percent win probability"; absent → raw `{confidence}/100` score, aria-label "Model confidence: {confidence} out of 100", no "probability" language. Confidence is a ranking score, not a probability (brief §10) — already correct per the audit.

## Data sources named
- `8970241d-claudedesignprompt.md` §6 (copy voice), §10 (constraints)
- `docs/positioning.md`
- `apps/web/lib/positioning-vocab.json` (canonical banned-phrase list)
- `apps/web/lib/compliance-scanner/rules.ts` (runtime enforcement)
- `scripts/guardrails/trust-gate.mjs`, `npm run lint:brand` (CI enforcement)
- `apps/web/lib/picks/market-implied-display.ts` (`MARKET_IMPLIED_CALIBRATION_CLAIM`)
- `apps/web/lib/pricing/value-architecture.ts` (`POSITIONING`, `EMOTIONAL_VALUE`)
- `apps/web/lib/pricing/pricing-phases.ts:150` (`getCurrentPricingPhase`)
- `apps/web/lib/competitive/honesty-contrast.ts` (`honestyContrastStrip`)
- `apps/web/lib/gse/waitlist-copy.ts` (`WAITLIST_COPY`)
- `docs/ops/OPERATOR.md`, `CLAUDE.md` (pricing phase names)
- Five pages inventoried with line counts: home `app/page.tsx` (404 lines, 14 copy slots), board (`board/page.tsx` 387 lines, `board/gate/page.tsx` 305 lines, `picks/page.tsx` 810 lines; 11 slots), record (`performance/page.tsx` 680 lines, `calibration/page.tsx` 225 lines, `proof/page.tsx` 509 lines, `verify/page.tsx` 63 lines; 13 slots), pricing (`pricing/page.tsx` 760 lines; 11 slots), methodology (`methodology/page.tsx` 357 lines; 8 slots).

## Findings (numbers and facts, not vibes)
- 393 files searched; 19 before/after pairs delivered (within brief's 15-20 range).
- Literal banned phrases: 0 occurrences — CI/runtime lint is doing its job.
- Systemic patterns: 59/393 files use `title: "X: Y"` metadata; ~141 real-copy em-dash instances site-wide; one ~85-word single sentence on `/verify`, one 60-word run-on `POSITIONING` string on `/pricing`.
- Per-pick confidence badge already correctly distinguishes calibrated probability from raw ranking score.
- Gate-dependent strings: `/picks` locked-paywall state requires three simultaneous conditions (gate open AND free-tier viewer AND picks published for the date/sport filter); `/performance` open state still withholds per-row cells below `minSettledPicksForLearning` (default 100 settled); `/board` has four mutually exclusive degradation states that must stay visually distinct (DB-unreachable outage must never wear "quiet by design" copy).
- Two "Mission Control" files cited as `app/today/page.tsx` vs `apps/web/app/today/page.tsx` (INFERENCE: paths differ in `apps/web/` prefix across sections — flag for verification before use).
- "Insider" and "unlock(s)" items were flagged but NOT rewritten (founder review pending); "Ask the model why" occurrences (4) were rewritten to "Show the reasoning".

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Hard public/private doctrine mechanics in the copy gates: performance stats withheld below 100 settled picks — this is a TRUST-SIGNAL enforcement mechanism, not copy choice (TRUST-SIGNAL).
- Confidence-vs-probability badge distinction already in place per brief §10 (TRUST-SIGNAL).
- Pricing rises only on verified proof milestones, never a marketing calendar; founding-member rate locked (OTHER — pricing/product).
- `WithheldStat` pattern ("opens at {floor} settled · {settled} so far", tooltip: "a win rate on fewer than {floor} settled picks is noise, not signal") is the canonical honesty-with-reason pattern (TRUST-SIGNAL).
- Voice rules relevant to output: no em-dashes, no colon-headlines, no rhetorical questions, no "not X, but Y", no slogans, engine never framed as AI, confidence as ranking score — applies to any GSE-facing copy (OTHER — copy standards).

## Engine-actionable? (yes/no + one-line what)
No — this is a design/marketing copy audit, not engine input; the only actionable item for the engine program is the badge/gate mechanics documentation (calibrated-probability vs ranking-score distinction) which is already implemented.
