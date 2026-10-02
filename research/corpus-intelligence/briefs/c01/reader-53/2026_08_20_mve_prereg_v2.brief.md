# docs/ops/edge/2026-08-20-mve-prereg-v2.md

## What it is (1-2 sentences)
Frozen 2026-08-20 statistical pre-registration (supersedes retired v1) for the MVE (Minimum Viable Edge) experiment: a prospective, e-process-based kill/certify test of a hierarchical MLB totals model vs the no-vig market, with DeepSeek round-2 audit + Claude side-adaptive amendment, binding under F-10.

## Key metrics/methods (formulas where given, else "not specified")
- **Mechanism:** MLB full-game totals; hierarchical outcome model vs Shin-de-vigged no-vig entry market.
- **Entry window:** exactly 6–3h before game start. Entry price quality: book-quoted, age ≤ 15 min, ≥ 3 books. No fresh entry price → game EXCLUDED (exclusion recorded and counted).
- **E-variable (side-adaptive asymmetric fractional, λ = 0.3):** `E_t = 1 + 0.3·(W_t·(q_bet/m_bet) + (1−W_t)·(1−q_bet) − 1)`, one predictable bet per game; q_bet, m_bet = model and de-vigged market probabilities of the bet side; W_t = bet side hit.
- **SIDE-SELECTION RULE (frozen, deterministic):** with q_t = model over prob, m_t = de-vigged market over prob — if q_t > m_t bet OVER; if q_t ≤ m_t bet UNDER (ties → UNDER). Over bet: q_bet = q_t, m_bet = m_t, W_t=1 iff total goes over. Under bet: q_bet = 1−q_t, m_bet = 1−m_t, W_t=1 iff total goes under. No other rule permitted.
- **Null:** per game, the market's quoted (de-vigged) probability of the bet side is an upper bound on its true probability. (Amendment: DeepSeek's first draft was over-side-only, blind to under-side edges; side-adaptive keeps identical supermartingale validity under the per-side composite null — DeepSeek round-3 verdict 2026-08-20: PROVEN.)
- **Model probability:** hierarchical posterior predictive; hyperparameters frozen before walk-forward or updated strictly online.
- **Certification threshold:** E_n ≥ 20 at a scheduled checkpoint. **Kill threshold:** E_n ≤ 0.10 at any checkpoint. **Checkpoint cadence:** every 50 graded picks, starting at n=50 (walk-forward over 241 games).
- **Early abort:** capital < 0.01 after 50 graded picks → abort, publish the kill, close the edge program.
- **Report:** final capital, max drawdown, threshold crossings at 2/5/10/20, chronological capital path, exclusion count. Publish all variants if any were run (none permitted besides primary).
- Outcome rules: early abort / kill / final capital ≤ 2 → publish the kill (fifth Kill Ledger entry), edge program closed for good. E ≥ 20 → draft prospective pre-registration, founder signs before any track opens. Otherwise → "did not certify, did not survive".
- Prospective track: identical mechanism; certification null for prospective track is the vig-inclusive composite null (b_i = 1/D_i); frozen model hash recorded before opening; verbatim disclosure language given.

## Data sources named
- Shin de-vigging of the entry market; book-quoted prices (≥3 books, ≤15 min age). No named external data vendors.

## Findings (numbers and facts, not vibes)
- Protocol frozen 2026-08-20 BEFORE any MVE computation; v1 (symmetric point-null) retired unrun.
- Binding under F-10; full validity argument lives in docs/ops/hermes/FINAL-RUN-2026-08-20.md STATISTICAL RULING v2 block.
- Walk-forward is retrospective over 241 games; prospective track only fires on certification (E_n ≥ 20).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: a template for any engine-edge certification — e-process kill/certify thresholds, side-adaptive selection, exclusion accounting — reusable methodology for the engine's own edge programs.
- No QB, coaching, OL, or scheme material.

## Engine-actionable? (yes/no + one-line what)
**Yes** — adopt its asymmetric-fractional e-process protocol (λ=0.3, certify ≥20, kill ≤0.10) as the engine's edge-certification harness for any predictive module.
