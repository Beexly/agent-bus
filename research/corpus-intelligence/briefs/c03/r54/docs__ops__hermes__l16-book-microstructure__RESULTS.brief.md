# docs/ops/hermes/l16-book-microstructure/RESULTS.md
## What it is (1-2 sentences)
L-16 tested two book-level microstructure hypotheses on 241 MLB clean-close games at ~19-minute entry cadence: (A) persistent per-book "shade" on totals, and (B) book-to-book lead-lag in de-vigged totals probabilities. Both hypotheses were declared DEAD by pre-set kill rules.
## Key metrics/methods (formulas where given, else "not specified")
- Per-book shade: e = p_book_entry − p_median_close; t-stat with Liang-Zeger SEs clustered by game. Anti-shade bet when |p_book − p_median_entry| ≥ 0.005, CLV vs consensus close. Kill: no book with |t|>2 and n≥50, or no such book with positive mean CLV on ≥150 bets.
- Lead-lag: r_b,t = p_b,t − p_b,t−1; ρ₁(A,B) = Pearson corr(r_A,t, r_B,t+1); leader requires ρ₁(A,B)>0.1 AND ρ₁(B,A)≤0 AND Benjamini-Hochberg q<0.05. Train/test split: first 120 games for pair selection, last 121 for holdout CLV. Simulation trigger: leader |r|≥0.005 and follower |r|<0.005. Kill: no qualifying pair with positive mean CLV on ≥150 holdout trades.
- De-vig via Shin method (edge-lab/devig.ts); primary market = totals over-probability.
## Data sources named
Neon Postgres branch `hermes-census-l15-20260819` via L-15 `hermes_ro` extract, queried 2026-08-19T17:54:49Z; 241 MLB clean-close games; 11 books (betus, bovada, draftkings, fanatics, etc.); four entry windows. `espn_public` excluded (not an executable book).
## Findings (numbers and facts, not vibes)
- Test A shade DEAD: 11 books, 863–947 labels each. Largest |t| = betus +1.48 (mean e = +0.12pp, n=901). Nobody clears |t|>2. Anti-shade CLV +1.2 to +1.8pp on the |dev|≥0.005 subset, attributed to fade-the-outlier noise, not persistent shade.
- Test B lead-lag DEAD: 110 ordered pairs; raw-lead count = 0, BH-lead count = 0. Largest ρ₁ = bovada→draftkings 0.075 (reverse +0.054). Nothing above 0.1 with one-way reverse.
- Spread: every book shows significant e — different posted spread *numbers* (home-cover p at −1.5 vs −2.5), not vig-shade.
- Moneyline: fanatics t=−2.18 with +0.8pp CLV on 163 bets — below 150-bet bar for the other |t|>2 names, and not the totals question.
- B dead on all three markets (H2H max ρ₁=0.18 but reverse also positive, so no one-way lead).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Minute-cadence MLB totals is a closed market: no persistent per-book shade, no book leads another at 19-minute cadence. [TRUST-SIGNAL — negative result: book-level microstructure edges are not present in this corpus]
- Fade-the-outlier CLV (+1.2–1.8pp) is noise, not persistent shade: do not build a "fade the soft book" screen on MLB totals at this cadence. [TRUST-SIGNAL — protects against overfitting a spurious outlier-fade strategy]
## Engine-actionable? (yes/no + one-line what)
No — negative result; directive is explicit: do not build a copier or fade-the-soft screen on this corpus.
