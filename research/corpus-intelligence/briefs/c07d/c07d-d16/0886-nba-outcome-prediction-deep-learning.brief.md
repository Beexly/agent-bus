# arxiv-deep/0886-nba-outcome-prediction-deep-learning.md
## What it is (1-2 sentences)
Deep-learning feature-selection horse race on NBA game outcomes (Migliorati 2021, arXiv:2111.09695v1) asking whether box-score Four-Factors aggregates or simple strength-of-record summaries (Elo, relative win frequency) predict wins better. The negative finding is the contribution: single-feature Elo/win-frequency models beat all Four-Factors-based deep models.

## Key metrics/methods (formulas where given, else "not specified")
- Elo update: R ← R + K·(outcome − 1/(1+10^(−(R_opp−R+HFA)/400))) with HFA=40, K=30, 20% offseason regression to mean.
- Dynamic Elo variant: depth-2 (two-level) updating.
- Four Factors (team-strength proxies): eFG%, turnover rate (TOV%), offensive rebound rate (ORB%), free-throw rate (FT/FGA), each per team, computed ex ante.
- Target: binary home-win/away-win; models = deep-learning classifiers, cross-validated, compared on AUC and accuracy.
- Numeric gate in ledger: Elo wins under walk-forward if AUC difference ≥ −0.005 (tolerance for pooled-CV inflation); hybrid Elo + Four-Factors differentials succeeds if it beats Elo alone by ≥ 0.005 AUC.

## Data sources named
- NBA regular seasons 2004/05–2019/20 (16 seasons), ~18,000 game observations; game date, home/away teams, box-score Four Factors, Elo ratings, win frequencies; home-court factor handled ex ante.
- Access: public game data (basketball-reference-class sources). No odds data used.

## Findings (numbers and facts, not vibes)
- Best dynamic Elo (depth 2): AUC 0.7117, accuracy 0.6736.
- Historical Elo (20% offseason regression, HFA=40, K=30): AUC 0.7117, accuracy 0.6721 (near-identical to depth-2).
- Single-feature (Elo / relative victory frequency) models beat box-score Four-Factors models — direction is the finding; exact per-variant numbers live in the paper's tables (ledger notes them, not the brief).
- No odds comparison, no calibration metrics (accuracy/AUC only), no properly tabulated walk-forward results (documented weaknesses).
- Leakage caveats: cross-validation over pooled seasons without strict time ordering — future games can inform past predictions within folds; ex-ante feature computation mitigates but does not eliminate temporal leakage. Feature selection itself was done on the same data used to report performance (selection-on-reporting-data).
- NBA-only; the "Elo beats box score" finding may not transfer to leagues where box-score stats are more informative (NFL).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (feature-selection doctrine): the mechanism is a portable caution against rich feature sets when a simple strength-of-record summary suffices — for any GSE league, run the ledger's audit (single Elo/win-frequency/net-rating vs box-score sets under strict walk-forward) and keep whichever wins per league. Serves the calibration/model-design lane, not any player-level lane.
- TRUST-SIGNAL: the 0.7117 AUC / 0.6736 accuracy numbers are an NBA single-feature ceiling reference — the amount of game-outcome signal a bare team-strength summary carries, against which GSE's richer models can be judged (anything at/near these with more features is a flag that the features add nothing).
- OTHER (prior values): K≈30, HFA≈40, 20% offseason regression are usable starting constants for an NBA Elo baseline.
- CONTRADICTION (partial, with NBA-ledger 0930-type optimism): not a contradiction of a known result but a tension to resolve — this paper's Elo-vs-box-score gap was measured under pooled CV with known temporal leakage; if the walk-forward re-test reverses it, the finding is a CV artifact, not a doctrine. UNCERTAIN: whether any of the reported AUC/accuracy edges survive time-ordered evaluation.

## Engine-actionable? (yes/no + one-line what)
Yes — build a per-league feature-selection audit harness (strength-summary vs box-score feature sets under walk-forward, keep the winner), and start NBA baselines from dynamic Elo (K=30, HFA=40, 20% regression), effort 3–5 days per league.
