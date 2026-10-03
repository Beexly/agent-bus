# docs/ops/LAUNCH_MERGE_TRAIN_2026-09-04.md
## What it is (1-2 sentences)
A session log from 2026-09-04 documenting the actual state of the Beexly/Sports repo vs launch claims — ten branches unmerged, a four-PR merge train plan, and a list of open post-train items including a calibration-leaf drift finding.

## Key metrics/methods (formulas where given, else "not specified")
- `origin/main` at `51fa7eaa1`, dated 2026-09-03; nothing from 2026-09-04 was on it; today's PRs were drafts, so none merged.
- File-overlap conflict analysis via `comm -12` on `git diff --name-only origin/main...<branch>` to order merges.
- Merge order: #700 (hermes/night-2026-09-04, 37 files, +3889/−41, 19/19 checks green, run `33892558020`) → #664 (claude/swallowed-error-sweep, 22 files, +2679/−65, 7 new test files, 20/20 green, run `33832773913`) → #691 (claude/hotfix-incomplete-grace-exploit, 3 files) → #690 (docs + Chaos runner). #693 (130 files, independent re-implementation, 118 differing lines in stripe/route.ts vs #664) excluded from the train.
- Formula: not specified.

## Data sources named
- `git log` / `git merge-base` / `git diff --name-only` against `origin` fetched 2026-09-04 ~16:20 UTC; GitHub PRs #700, #664, #691, #690, #693 and runs `33892558020`, `33832773913`; Chaos run C6 hunting an opening-line archive (`scripts/ops/chaos/c6-clv-archive.txt`).

## Findings (numbers and facts, not vibes)
- 6.5–9.5 calibration leaf drift: 65.86% → 57.12% (n=576) — flagged in the H-N6 audit with no follow-up row and left ownerless; still open after the train.
- CLV unmeasured: entry line equals the close by construction in the replay, so every pick grades `MATCHED_CLOSE`; needs a real opening-line archive (Chaos C6).
- #700's #695 keystone fixes `scripts/backfill/historical-settlement-backfill.ts` and `packages/prediction-engine/src/historical-replay.ts` — corrects a measurement (replay/backfill), not live pick generation.
- #664 + #691 are the two that change production behaviour (Stripe webhook / paywall path); merging to main auto-deploys to Vercel production against live Stripe keys (live since 2026-07-09).
- 43 stale July/August PRs (#258 … #607) untriaged.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL — verified-by-command evidence culture (every line traces to a run command; paginated-list failure corrected via direct `head:` query) and explicit "green ≠ ship" posture on production merges.
- OTHER — the calibration leaf drift (65.86% → 57.12%, n=576) is a calibration-state finding relevant to resolution monitoring.

## Engine-actionable? (yes/no + one-line what)
Yes — the 6.5–9.5 leaf drift needs an owner and a holdout re-check, and the CLV-measurement gap (entry==close by construction) is an open measurement bug in the replay path.
