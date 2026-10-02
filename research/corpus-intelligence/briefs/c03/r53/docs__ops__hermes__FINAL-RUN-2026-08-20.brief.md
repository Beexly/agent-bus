# docs/ops/hermes/FINAL-RUN-2026-08-20.md
## What it is (1-2 sentences)
Founder's 14-item Definition-of-Done execution queue for 2026-08-20, mapping remaining launch work to owners: Grok Build ran the H-F1–H-F7 queue (completed), the seat then swapped to Hermes-run-on-Laguna, and H-F5 is the founder-ordered one-shot MVE (real-data MLB totals e-process experiment) with a pre-registered asymmetric side-adaptive fractional e-process and binding outcome branches (kill, certify-track draft, or close).
## Key metrics/methods (formulas where given, else "not specified")
- H-F5 MVE e-process (side-adaptive, pre-registered): `E_t = 1 + 0.3·(W_t·(q_bet/m_bet) + (1−W_t)·(1−q_bet) − 1)`; bet side per game chosen from model BEFORE outcome (q_t > m_t → OVER; q_t ≤ m_t → UNDER, ties UNDER); q_bet, m_bet = model and Shin-de-vigged market probabilities OF THE BET SIDE; W_t = bet side hit. One bet per game.
- Validity (verified algebra): increment's conditional expectation is linear in true side-probability p and ≤ 1 at p=0 and p=m_bet, hence on all p ≤ m_bet — a supermartingale under composite null "the market's quoted probability of each bet side is an upper bound on its true probability"; every increment ≥ 0.7 > 0; per-game orientation is a predictable function → ONE process, no multiplicity.
- Binding rules: entry price book-quoted inside 6–3h window, age ≤ 15 min, from ≥ 3 books (exclusions counted); checkpoints every 50 graded picks starting n=50; certification = E ≥ 20 at a scheduled checkpoint; kill = E ≤ 0.10 at any checkpoint; early abort = capital < 0.01 after 50 graded picks. Outcomes: capital ≤ 2 → fifth Kill Ledger entry, program closed for good; capital > 20 → prospective pre-registration draft (founder signs; track NOT opened); in between → "did not certify, did not survive", program closes identically. ONE cycle, no reruns, no tuning after seeing the path.
- Model inputs: 241 clean-close MLB totals games; m_t = Shin no-vig over prob from cross-book median at entry; hierarchical outcome model from PRE-GAME data only (team rolling metrics via MLB Stats API, SP FIP/recent form, bullpen 3-day usage, park, Open-Meteo forecast, umpire zone history, rest/travel); walk-forward, never trained on a game's own future.
- Result language rule: evidence against the composite null only — NEVER net-of-vig profitability or "positive expected value" (vig not in this test).
## Data sources named
MLB Stats API; Open-Meteo forecast; umpire zone history; cross-book median odds; docs/ops/edge/2026-08-20-mve-prereg-v2.md (full frozen pre-registration); 48 August NFL games seeded from ESPN; `odds_line_snapshots` table (H-F7 liveness check).
## Findings (numbers and facts, not vibes)
- H-F5 statistical ruling v2 supersedes v1 (amended 2026-08-20 before any computation; v1's symmetric point-null design retired unrun). DeepSeek's over-side-only formula was corrected in-house: it would have been blind to under-side edges and lost on them in expectation — fatal in a one-shot final experiment.
- H-F3 note: Odds API serves preseason under `americanfootball_nfl_preseason`; 48 August NFL games seeded under `americanfootball_nfl` from ESPN; hard expiry ~Aug 30.
- Seat history: Grok Build ran H-F1..H-F7 on 2026-08-20 — every task DONE or honestly BLOCKED; seat then swapped to HERMES RUN ON LAGUNA; Grok steps back to fallback/verifier. Seat-swap rule: whoever builds a task cannot verify it; H-F5's independent audit is MANDATORY before merge (e-process arithmetic, frozen side-selection rule, walk-forward causality, one-bet-per-game, binding outcome applied without post-hoc modification).
- DeepSeek statistics lane: audits STATISTICS while Grok audits CODE (two independent reviewers: DeepSeek mis-sorts rank tables and confabulates citations; Grok inflates novelty). DeepSeek assignments: pre-draft BOTH MVE outcome documents before the result exists; audit finished MVE statistics; check metric interpretation guides state what the number does NOT measure. All DeepSeek output audited by Claude before adoption.
- 14-item scoreboard states: items 3/4/6 merged (BookGrade, PulseScore, receipts+verify) — deploy only; item 5 Glass Ledger BLOCKED on founder F-9; item 9 Stripe live test checkout founder-gated; item 11 Terms/Privacy/RiskDisclosure DONE (45d3f1f7, bd60fc71).
- /fable dashboard ECE language verbatim: "This ECE largely measures the market's calibration through our confidence echo. It is not evidence of independent skill." — render LIVE value, never hardcode 0.0044.
- Honest-empty states required where data not yet published; readiness gates untouched.
- H-F4: content engine emits DRAFTS ONLY — publishing founder-gated; refuse to fabricate when DB has no rows.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Side-adaptive fractional e-process as the edge-certification engine [TRUST-SIGNAL]
- Binding outcome discipline (kill/certify/close with no middle state, one cycle, no reruns) [TRUST-SIGNAL]
- Walk-forward causality + one-bet-per-game dependence discipline [OTHER]
- Builder-cannot-verify seat rule for audit independence [OTHER]
- Umpire zone history, bullpen 3-day usage, SP FIP as hierarchical-model inputs [OTHER]
## Engine-actionable? (yes/no + one-line what)
YES — the pre-registered side-adaptive e-process (λ=0.3, 6–3h window, ≥3-book entry prices, per-game predictable orientation) is the binding certification engine for any edge claim, and the MVE model spec is the MLB totals model to correct (per research-track findings) before firing.
