# docs/arxiv-program/research/2026-09-21/arxiv-deep/0175-using-experts-opinions-in-machine-learning.md
## What it is (1-2 sentences)
Ledger read of arXiv:2008.04216 (Habibi, Fazelinia, Annamoradnejad; v1 2020, v2 2021, **v3 2021-12-03 — WITHDRAWN**): a three-step framework for merging "expert" opinions (NCAA rating systems) ranked by historical accuracy into March Madness win-probability forecasts. **Verdict in file: REJECT** — the author's withdrawal comment: "These initial results and concrete model structures are flawed and do not represent the work." All numbers below are withdrawn v2 claims, recorded for the ledger only.
## Key metrics/methods (formulas where given, else "not specified")
- General framework: (1) rank experts by previous-prediction accuracy (Formula 1 — extraction garbled, uncertain); (2) pick optimal top-N k on previous results (Formula 2 — uncertain); (3) meld top-N (MERGE function; one variant exponentially-decreasing weights).
- Concrete models: E1 rank-on-last-year merge by equal average; E2 exponentially-decreasing weighted average; E3 rank-on-current-regular-season (day ~100) merge by simple average; E4 E3 + weighted average. Blends B1+E2, B1+E4. Baselines B1/B2/B3 = 2019 1st/2nd/3rd-place models rerun on 2017/2018 via post-deadline submission.
- Log loss (Eq. 3 — rendering garbled, uncertain; standard LL = −(1/N) Σ (y log p + (1−y) log(1−p))).
## Data sources named
Kaggle NCAA March Madness data, section 4 only (weekly team rankings from KenPom/Pomeroy, Sagarin, RPI, ESPN, AP, … since 2002–03); 2,278 unique possible games. Backtest years 2017, 2018, 2019 (competitors 866 / 934 / 441). No code or data URL.
## Findings (numbers and facts, not vibes) — ALL WITHDRAWN, do not cite as valid
- 3-year mean log losses: B1 0.503; B2 0.886; B3 0.511; B1+B2+B3 0.556; E1 0.523; E2 0.515; E3 0.502; E4 0.491; B1+E2 0.500; B1+E4 0.489 (best).
- Leaderboard ranks: E4 → 55th/866, 32nd/934, 2nd/441; B1+E4 → 2nd/866, 130th/934, 7th/441; B2 collapsed to 808th/934 and 435th/441 in 2018/2019 (basis of the paper's "past winners succeed by chance" claim).
- Withdrawal removes all evidentiary weight; no successor version exists.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL (negative exemplar): withdrawn-by-author — nothing is actionable; adoption gate: nothing from this paper unless a non-withdrawn successor passes the standard gate (beats current GSE ensembling on chronological NFL holdouts by ≥ 1 pp log-loss-weighted with significance).
- OTHER: the residue "weight blends by out-of-sample log-loss history rather than equal weighting" is generic ensembling hygiene already standard in GSE's calibration posture. NCAA-only; no NFL port.
## Engine-actionable? (yes/no + one-line what)
No — REJECT; do not implement; all v2 numbers are withdrawn and invalid for decision-making.
