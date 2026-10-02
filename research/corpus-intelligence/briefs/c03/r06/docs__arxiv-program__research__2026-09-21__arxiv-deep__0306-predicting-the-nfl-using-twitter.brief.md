# docs/arxiv-program/research/2026-09-21/arxiv-deep/0306-predicting-the-nfl-using-twitter.md
## What it is (1-2 sentences)
Deep-read ledger of Sinha, Dyer, Gimpel & Smith (2013, arXiv:1310.6998): tests whether Twitter output (team-assigned tweet volume and unigrams, 2010–2012 seasons) can predict NFL game winners, winners-against-the-spread, and over/under outcomes as well as traditional game-stat features, using logistic regression with a strictly online evaluation protocol. Verdict ADAPT — the tweet-volume-rate feature (public attention momentum) is a cheap portable signal worth re-testing on modern social data; the 2010–2012 pipeline is obsolete and the WTS accuracies sit at the edge of noise.

## Key metrics/methods (formulas where given, else "not specified")
- Logistic regression, three tasks (winner / winner-WTS / over-under); online protocol: test week k ∈ [4,16] of 2012, train on 2010–2011 all weeks + 2012 weeks [1,k−3], tune L1/L2 ∈ {0,1,5,10,25,50,100,250,500,1000} on dev weeks [k−2,k−1]; weeks 1–3 and 17 excluded.
- rateS(v_old, v_curr, Δ) = sign(v_curr−v_old)·⌊|v_curr−v_old|/Δ⌋, Δ=500 (tuned on 2010–11); output ∈ {−2,−1,0,1,2}.
- rateP(v_old, v_curr, θ) = sign(v_curr−v_old)·⌊|v_curr−v_old|/(θ·v_old)⌋, θ ∈ {0.1..0.5}, v_old ∈ {v_prev, v_prev_avg}.
- Twitter unigrams: (home/away, unigram) log(1+frequency), 0.1% occurrence threshold, reduced via CCA (1/2/4/8 components).
- Statistical baselines: 10 feature sets F1–F10 (spread line; O/U line; avg points beaten/missed spread; beaten/missed O/U; avg scored; avg given up; avg total; avg(spread+scored); home/away WTS %; avg INTs/fumbles/sacks) + all 55 pairwise unions.
- Data volumes (Table 2): 2012 weekly tweets 1,014,473 (pregame 266,382 / postgame 290,879); garden-hose 10% stream, ~42M messages/day.

## Data sources named
- Twitter garden-hose (10%) stream 2010–2012; team assignment via manually-built hashtag lists (Table 1; #giants/#nyg/#nyjets etc.); multi-team hashtag tweets discarded; Japanese-baseball #giants contamination removed via Unicode script filters.
- NFLdata.com 2010–2012 regular seasons (weeks 1–16) with bookmaker point spreads and totals.
- Data released for academic research at www.ark.cs.cmu.edu/football (game data + tweet IDs per team/game); no model code stated.

## Findings (numbers and facts, not vibes)
- Winner: F1 (spread line) 60.6; F5 (avg points scored) 65.9; ∪F_i 63.0; Twitter unigrams 52.3; rateS 51.0.
- Winner WTS: F1 47.6; F4 54.8; ∪F_i 47.6; Twitter unigrams 47.6; CCA(4 comp) 51.9; rateS 55.3 (above the 53% profit threshold); rateP θ=0.1 (v_prev) 52.4.
- Over/under: F1/F2 48.6; Twitter unigrams 54.3 (best single-set number on O/U); rateS 52.4.
- Oracle conjunctions (starred): F5∪F9∪rateP(θ=.2) winner 65.9*; F3∪F10∪rateP(θ=.1) WTS 57.2*; F3∪F4∪rateS(Δ=200) O/U 58.2*.
- Adaptive weekly feature selection (trailing-2-week best set, 177 games): winner 63.8%, WTS 52.0% (below profitability), O/U 44.1% — trailing-2-week selection unstable (best set changed in 8 of 13 weeks).
- Postgame-tweet win/loss classifier domain lexicon: 67% avg accuracy (features: "win/victory/WIN" vs "refs/lost/bad").
- The 53%+ WTS accuracy profitability assumption is used throughout; rateS hyperparameters tuned on 2010–11 transferred to 2012.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- rateS tweet-volume momentum hits 55.3% WTS — above the 53% profit threshold — OTHER (social volume as a totals/spread feature family)
- Twitter unigrams 54.3% on O/U — best single-set O/U number — OTHER (text-as-feature for the totals model)
- Oracle conjunctions (57.2 WTS*, 58.2 O/U*) are max-over-large-search with no significance testing; honest online test only reached 52.0% WTS — TRUST-SIGNAL (multiple-comparison garden; distrust starred numbers)
- Trailing-2-week adaptive feature selection failed (O/U 44.1%) — TRUST-SIGNAL (model-selection instability; argues for online expert-weighting instead)
- 2013-era Twitter ecosystem is unrecognizable in 2026 (140-char era, bots, different fan behavior) — OTHER (signal portability risk for social features)

## Engine-actionable? (yes/no + one-line what)
Yes — port the rateP-style per-team X-post volume momentum feature (locked hyperparameters, 2023–24 tuned / 2025 locked online test) as an additive totals-model and spread-model feature, with the 53% WTS bar and CIs as the gate.
