# docs/arxiv-program/research/2026-09-21/arxiv-program/phase2/PHASE3-SUMMARY.md
## What it is (1-2 sentences)
The 2026-09-22 program summary of the arXiv 1,000-paper extension (Phase 4): 252 audited additions minus 2 removed phase-1 phantom entries = net +250 papers, reaching 1,000/1,000 full-text-read, ledgered, integrity-audited papers (969 ADAPT / 31 ADOPT, zero REJECTs in tracker). Canonical tracker: `docs/research/2026-09-21/arxiv-program/state/ledger-tracker-750.jsonl`.

## Key metrics/methods (formulas where given, else "not specified")
not specified — this is program accounting, not a method. Audit protocol: every paper full-text read (ar5iv/PDF/source), every ledger with 14 sections, every counted paper independently re-audited by the coordinator (file existence, ID match, verdict match, tracker + in-batch dedup) before appending; 22 reader agents; commits via `github-push-files` (Git Database API).

## Data sources named
The ledger-tracker JSONL (1,000 rows, 1,000 unique normalized arXiv IDs); wave-4/wave-4b dedup base-ID snapshots; per-wave reports; commit IDs b83e12f through 7e68114 (program_phase 1:362, 2:215, 3:171, 4:252).

## Findings (numbers and facts, not vibes)
- Final verdicts: 969 ADAPT / 31 ADOPT; zero REJECTs in tracker (a REJECT never counts; every formal REJECT replaced with another full read).
- Lane breakdown (top): tracking_ngs 102 · team_ratings 84 · win_spread_total 74 · calibration_uncertainty 73 · experimental 63 · ensembles 52 · abstention 48 · causal_injury 48 · kelly_sizing 47 · odds_market 45 · nlp_llm 45 · weather 36 · markets 33 · bayesian_statespace 30.
- Integrity corrections found by audit: overflow overcount (claimed 19, audited to 17 eligible); ledger-number collision (wave-4 causal reused weather ledgers 1578–1580, renumbered 1636–1638); two phase-1 phantom tracker entries (2603.13397v2, 2602.22073v1) removed and replaced with fresh reads 1820/`2103.04647` and 1821/`1403.7642`; wave4b-nlp2 malformed JSON line rewritten.
- Notable finds of the extension: **2409.04889** (Brill/Yee/Deshpande/Wyner) audits NFL expected-points construction itself — size bias, 1/Nᵢ drive weighting, cluster bootstrap, catalytic prior (no prior corpus ledger covered EP construction); **2110.03874** (Gao/Shen/Zhang) per-team standard errors and data-driven rank CIs for Bradley-Terry-Luce; proves BT-MLE locally minimax optimal — paper #1000; **2103.04647** Bayesian marked Hawkes-like framework for football event sequences (fills self-exciting-process gap for live NFL modeling); **1403.7642** proves Mease (2003) penalized likelihood is exactly PQL of a multiple-membership GLMM, and integral approximation alone flips title pairings; **2112.07002** joint E[max] of correlated Showdown lineups: +$5,376 (+55.6% ROI) on 16 real 2018 DK Showdown contests; **2407.13438** multi-entry March Madness portfolio framework with 2.2% win probability on the real DK 2023 $1M pool.
- DFS lane exhaustion reported honestly: reader ran 23 arXiv search rounds; "fantasy sports" = 24 total arXiv hits, all sports-relevant already in corpus; 4 counting papers, no padding.
- Blocked: `2206.11105` withdrawn (no ledger, not counted). One abstract-only candidate (`2102.07738`) disqualified.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: 2409.04889 audits EP construction itself (size bias, drive weighting, cluster bootstrap) — any engine EP model inherits these biases; calibration-postprocessing lane (1 paper) and calibration_uncertainty lane (73) are the trust lanes.
- OTHER: program catalog accounting; DFS-portfolio methods (2112.07002, 2407.13438) for contest construction; Hawkes football event framework (2103.04647) for live in-game modeling.

## Engine-actionable? (yes/no + one-line what)
yes — Two direct items: (1) apply the 2409.04889 EP-construction audit (size bias, 1/Nᵢ drive weighting, cluster bootstrap) to any GSE expected-points model before calibration; (2) lift the 2112.07002 joint-E[max] correlated-lineup framework (+55.6% ROI on 16 real DK Showdown contests) for Showdown/portfolio construction.
