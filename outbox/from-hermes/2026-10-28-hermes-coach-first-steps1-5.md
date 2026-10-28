# Hermes cycle — coach-first blueprint, steps 1–5

Branch: Beexly/Sports `engine/public-baseline-2026-10-24`
SHA: `1d1e44e652adaea8f16b6b07ad217a0b4d703237`
Remote matches that SHA. Not pushed to main. No reseal.

Executed the ordered sequence in `Autonomous GSE Coach-First Engine Plan.docx` as far as it holds
against disk. Two consecutive fresh-process sweeps, 65 files / 467 tests, zero failures both times.

## Closed

- **Rule 4, the cross-runtime serializer conflict.** `canonicalizeForSeal` +
  `computeCanonicalSealDigest` in `locked-projection.ts`, applied to both `coachMindsetHash` call
  sites. Recursive lexicographic key sort at every depth, `undefined` dropped, arrays left in order.
  `golden-digest-parity.test.ts` spawns `python3` on a hostile fixture and asserts bit-for-bit
  equality. Newly ingested mid-week data is no longer gated Class B on the serializer.

  The blueprint's prescribed fix was half the problem. Key sorting alone left the real payload
  hashing `a293ee26…` in TS and `14d05395…` in Python, because Python emits `27.0` where JS emits
  `27`. `canonical_hash` now narrows integral floats; both runtimes produce `a293ee26…`.

- **D3.** `candidates/` was untracked, one `git clean` from gone. `sealed-center.json` and the
  week-7 candidate are tracked. Both quarantine dirs are intentional — `_quarantine/` canonical,
  `_QUARANTINE_PLACEHOLDER_20261027_185538/` explicitly SUPERSEDED and kept as audit trail. The
  week-8 copy in both is the placeholder (tau 0.001, sequential parent `faab2827`, 26 ratings).

- **D6.** The two Sunday v4.0 crons were not duplicates: 10:30 CT is the early-slate T-90m inactives
  lock, 13:35 CT the afternoon-slate one. Both registered in `CADENCE` as distinct rows, plus the
  orphan `cadence-v2.5-thu-1630`. Registry and `CADENCE` are 1:1 at 6/6, zero orphans either way.

- **Step 1.** `artifacts/ws6-status-2026-10-27.md` written. Every ABSENT claim `test -f`'d first;
  all six confirmed absent, `delta_telemetry.py` confirmed present.

- **Step 2.** `scripts/ops/gse_coach_mind_simulator.py` deployed. The delta selftest reaches the
  simulator leg instead of SKIPping; zero skips. The leg was comparing a projection merkle against a
  baseline-config hash — different objects that can never be equal — so it now runs through and
  names the divergence instead of skipping.

- **Step 4.** 14 `ticket: null` literals removed (9 `call-sheet.ts`, 5 `x-corpus.ts`) plus the
  duplicate literal key in the `Call` type. Grep gate matches only the 4 permitted post-gate lines
  in `calibration-map.ts`.

## Blueprint claims that are wrong on disk

- It says the orchestrator has "1 site at line 180". It has none — both hits are comments.
- It says 8 call-sheet sites and 6 x-corpus sites. Actual: 9 and 5.
- It says 146 `ENABLED=false` modules. Actual: 202.
- It says key sorting closes Rule 4. It does not, alone.

## Found, not fixed

- `scripts/feeds/` was never tracked. `delta_telemetry.py` was living untracked; now in git.
- `repomix-public-surface.md` is untracked and already clean of all three patterns. The other two
  repomix dumps still carry `coachMindsetHash` / `applyInjuryOverlay` / `PROB_PER_POINT`; the
  blueprint only names the public-surface one.

## Not closed

- `repomix-public-surface.md` tracked but not regenerated — no repomix config or npm script exists.
- 307 of 319 citations still unverified by the 4-layer AST and metadata verifier.
- D8 (`cffa75a` not in the repo). Google Docs 403. QB estimator re-run. RLS/NGS gap.
- `ne-chi-fixture.test.ts` fails on a live `webws.365scores.com` fetch — network, not code.

## Harvest index

`docs/strategy/AGENT-ALIGNMENT.md` — the shared record. `scripts/guardrails/alignment-guard.mjs` —
the pre-commit hook that makes it load-bearing. Both landed this cycle.
