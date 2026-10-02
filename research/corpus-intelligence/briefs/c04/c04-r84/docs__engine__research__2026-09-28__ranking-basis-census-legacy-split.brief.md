# docs/engine/research/2026-09-28/ranking-basis-census-legacy-split.md
## What it is (1-2 sentences)
Correction of the author's own earlier census: the reported 34.8% confidence-branch share is entirely legacy (June–July 2026 rows); August–September picks are 100% rankingP-present. Proves the confidence inversion is a property of the dead cohort only, and that pooled-era fits/calibration curves are averaging two different populations.

## Key metrics/methods (formulas where given, else "not specified")
- rankingP presence by generatedAt month (n, has rankingP): 2026-05: 62 (57, 91.9%); 2026-06: 451 (2, 0.4%); 2026-07: 561 (0, 0.0%); 2026-08: 760 (760, 100%); 2026-09: 1,079 (1,079, 100%). Confidence branch = 1,015 rows = 449 + 561 + 5, all Jun–Jul (+5 May).
- Ranking key comparator order: readSignedEdge() primary → rankingP first fallback → confidence only when both absent.
- Era behavior split (same slice, generatedAt):

| Era | n | avg conf | win rate | claimed−realized | conf 80+ n | conf 80+ win rate |
|---|---|---|---|---|---|---|
| legacy Jun–Jul | 1,074 | 64.4 | 0.5084 | +0.1358 | 130 | 0.4077 |
| current Aug–Sep | 1,839 | 65.5 | 0.5808 | +0.0739 | 146 | 0.6164 |

- Band-by-band realized win rate — legacy: 50–59: 0.5033; 60–69: 0.5256; 70–79: 0.5642; 80–89: **0.3776**; 90–99: **0.3478**. Current: 50–59: 0.5360; 60–69: 0.5863; 70–79: 0.6047; 80–89: 0.5826; 90–99: 0.7143 (28 picks, "should not be over-read").
- SQL failure modes recorded: jsonb 'null' IS NOT NULL is TRUE in Postgres (first query errored toward clean); JSON null reports an EMPTY type string, not 'null' (second query bucketed 1,015 rows into an unprinted bucket).
- Recommendation: fit/threshold/backtest on 2026-08-01 onward only — recorded, not applied (MODEL_VERSION implication, founder decision).

## Data sources named
- Production picks table on Neon main branch (read-only, role hermes_ro); columns generatedAt, result (WIN/LOSS), isPublished, isBootstrap, factorBreakdown->rankingP, modelVersion (v5.2.7 in June, v5.1.0 in July — month boundary ≠ version boundary).
- Code comparator readSignedEdge() / readRankingKey() in Node; branch-only Neon policy (b4b9bdd09) respected — no writes/branches/migrations.

## Findings (numbers and facts, not vibes)
- Current board is clean: every pick since August has rankingP, so the anti-predictive confidence branch orders nothing a customer sees today.
- The inversion is real and ENTIRELY in the legacy cohort: legacy climbs honestly to 0.5642 at conf 70–79 then falls to 0.3776 / 0.3478 at the top — a shape "no calibrator can fix"; current cohort is roughly monotone and its top band beats its middle.
- Current-cohort defects are milder, not inverted: 80–89 band at 0.5826 against claimed 0.80–0.89 is over-confident rather than inverted; claimed−realized +0.0739 vs legacy +0.1358.
- loadRankingBasisCensus() has zero non-test callers — a version bump dropping rankingP would move the board off 100% with no test noticing; wiring it to one founder-facing read stays with the founder.
- 5 May rows (0.2% of population) have null rankingP alongside 57 that don't; oldest month is mixed, not chased.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the inversion analysis is the canonical evidence that published confidence ordering is trustworthy on current data but inverted on legacy — any calibration/confidence curve work must split eras or it misprices trust.
- OTHER: measurement-hygiene precedent — when a SQL approximation disagrees with the code it models, the code is the measurement and the query is the draft; both wrong queries erred toward "no problem".

## Engine-actionable? (yes/no + one-line what)
yes — re-fit all confidence curves and backtests on 2026-08-01-onward data only; confidence-inversion work in AGENTS.md is aimed at a population that no longer exists.
