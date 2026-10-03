# Coding agent standing orders (Beexly/Sports) — received 2026-10-02 21:18 CDT

Garrett shared this from his coding agent for the record. Key constraints that bind Motif's work:

## Corrections to Motif's work
1. **iWinRNFL conflation**: paper 1704.00197 is an in-game logistic; the repo's least-squares margin model (commit 8afbc63a5) is DIFFERENT. Do not conflate. (Brief corrected.)
2. **No RL on schedule-only episodes**: explicit DO NOT. Episodes must carry wired signals before training. (Mission updated.)
3. **Kumo admission test** (for any signal leaving shadow):
   1. Shuffled-time placebo drives CLV to ~0 (else leaks — stop)
   2. Logit-pool of market q and model p; if p's coefficient interval includes 0, model adds nothing
   3. Threshold tuned on disjoint fold; fire only when lower bound of edge clears vig
   4. Line held as fixed offset (model must not rediscover the close)
   Kumo has NOT passed this — shadow-only.
4. **Frontier models may read traces and write code; they may not mint a probability.**
5. **Rank on e = p − q, never confidence.**

## Repo state (verified, do not re-litigate)
- Publish path is buildIndependentFairValues; intelligence/analyze() NOT on it
- T1 PARTIAL: analyze() returns INVALID (no OL provider, QB slug vs GSIS, coaching week-4 DATA-GAP)
- Registry: 47 signals, yes=0, no=46, partial=1
- bridge-model.ts exists, sealed test lost: Brier 0.2237 vs spread-bucket 0.2120 on 285 sealed 2025 games — do not rebuild or promote
- #1011 is the land path (fix arbiter dedup, unjoinableKeys); do NOT merge #1002
- Compound game-level signals failed (close absorbed them); props are the frontier; xFP rank failed pre-registered test
- Audit SHA 2df5b06e37ea69143465aca80302e908059cf475 (2026-10-02)

## Lanes (one PR each)
A: #1011 refresh/fix, fail-closed mint gate, quarantine post-settlement rewrites, render guard, supersede #1002/#991/hermes/*
B: Promotion ledger (arXiv → module mapping), do-not-reopen list, starved evaluators, OL provider + QB GSIS contract
C (shadow): line as fixed offset, props hierarchical Bayes, refusal rows, Glass Ledger
DO NOT: PINNs, GNNs, do-calculus, 7B fine-tune for picks, RL on schedule-only episodes, claim 7,000 papers read, flip CALIBRATION_ADJUSTMENTS/STATS_PUBLIC/MODEL_VERSION

## Notes for Motif
- Agent-bus is a mutex; engine content does not land there (Motif's handoff docs are coordination, but watch this boundary)
- Drive folder 1nCDoFQ9mZ7OPnVSqBl-OeFze3kfqdamG has duplicates (1704.00197×2, 2603.09896×3)
- models/ cards are an orchestrator stack, not a probability
- nflverse is CC-BY; do not scrape PFR; GPL is learn-and-rebuild
