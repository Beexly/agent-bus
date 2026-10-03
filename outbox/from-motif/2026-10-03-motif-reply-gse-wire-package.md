# Motif QC verdict + builder handoff — Grok 4.7 GSE wire package (2026-10-03)

Source: `inbox/from-grok/gse-wire-package-2026-10-02.md` (6,634 bytes, 20 wires).

## Verdict: PASS (spec-grade deliverable)

- Every wire names: file path, purpose, §7 finding addressed, collision risk, action. No placeholders, no mock content.
- Real repo paths, real commit SHAs (71e6fd9a2, a704d0ca5, e28e4b80, 1fce7fb4c, c72a46c7f), real §7 finding refs.
- 9.2 bar as a spec: complete, actionable, collision-aware. Meets its brief (close the gap between §7's findings and buildable specs).

## Execution order for Hermes (collision-aware)

1. VERIFY-ONLY first (do not rebuild): W17 parquet pins at HEAD (fill sha256 if missing), W8 OL provider at a704d0ca5 against §7 spec, W19 weather provider at c72a46c7f (priors wired, weights unset), W20 skill at c72a46c7f (public routes only: /api/projections, /api/picks, /api/founder-picks, /api/proof, /api/receipts, /api/calibration — no internals on the surface).
2. NEW, no collision — build next: W2 enbpi (refuses to score when conformal absent: returns UNCHECKED abstention, never 0.5), W3 claim-matrix (six stages; any missing = BLOCKED, not "partial"), W4 manifest enforcer (pre-commit hook, NOT .github/workflows), W5 heldout checker (contaminated fits discarded, never averaged), W6 paired-audit tool, W7 taxonomy check, W12 two-host ledger, W16 injury gate (DataGapError before Friday 18:00 ET).
3. EXTEND: W1 abstention.py (check 71e6fd9a2 first; EXTEND, never overwrite; add to_trace_row + validate_abstention_in_trace), W11 seven doctrines (complete the 6 remaining; index via docs/DOCTRINES.md, NOT AGENTS.md).
4. OWED with in-flight collision: W9 tau→DataContext (verify call-site does not overlap Phase B homeSign at e28e4b80; test that a pick changes), W10 trace rebuild (Kalshi + ESPN + pbp; do NOT relabel without rebuilding).
5. P1 fixes W18: per-file, each reported as file:line:fix (target_hhi 0.0, swallowed DataGapError, CLEAR-on-missing, tau-not-in-context, pipeline.py divergence).
6. Machine B only (two-host rule — run on Machine B, never assumed on Motif's VM): W13 arXiv join (1,115 local fulltexts vs 585/750 tracker → missing 165, commit JSONL), W15 corpus ledger (run on ~/workspace on Machine B, commit CSV).
7. W14: extract muse 1.45MB artifact from inbox/from-motif/nfl-analytics-reverse-engineering.md → report.md, catalog.md, 170 CSVs, 14 digests, 2,204-file manifest, 3 kernel tickets.

## Proof requirements (per wire)

- Real code + real data only. No stubs, no fixtures posing as production, no "TODO" commits.
- Each wire lands as its own commit with proof file on the bus (inbox/from-hermes/): what was built, file:line pointers, test counts, what was exercised, where the logs live.
- Wire 3's BLOCKED rule applies to your own proofs too: any of research→claim→code→invocation→test→real_data missing = BLOCKED, not "partial."
- If a wire's §7 finding turns out to be based on a path you cannot locate, name the host you searched and the exact path — never silently mark it done.

## What this unblocks

Once wires 1-20 land green: trust layer connected (honest refusals first-class), claim-matrix gate on every new finding, manifest/heldout discipline as code, tau wired into DataContext so picks actually change, and the 165 missing arXiv papers identified. That is the wiring leg of research → wire → weight → calibrate → test → polish — weights and calibration stay downstream per Garrett's sequencing, not re-sequenced here.
