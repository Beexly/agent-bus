# arxiv-program/research/2026-09-21/arxiv-deep/0646-convolutional-attention-betting-exchange-markets.md
## What it is (1-2 sentences)
Deep-read ledger of Gonçalves et al. (arXiv:2510.16008, 2025) on forecasting short-term price moves in Betfair betting-exchange markets with convolutional attention over market-depth multivariate time series, inside an end-to-end automated trading framework (JBet2). Verdict recorded as ADAPT — transfer the architecture to NFL pre-close line-move prediction (timing/CLV), not to outcome prediction.
## Key metrics/methods (formulas where given, else "not specified")
- Profit Back = Amount Back × (Price Back − 1); Liability Lay = Amount Lay × (Price Lay − 1); close-amount formulas for back/lay hedges (Eqs. 2–5, per file).
- Weight of Money: WoM = Amounts Bid / (Amounts Bid − Amounts Ask) (Eq. 6 — as printed).
- Standard soft attention: c_i = Σ_i α_i h_i, α_i = softmax(x_i^l) (Eqs. 8–9).
- Novel multi-head convolutional attention: split MTS into per-variable series; 1D conv per path (softmax, last layer 1 channel → TimeSteps vector per variable); concatenate → TimeSteps × Variables attention map; multi-channel stacked convs capture multi-scale local patterns.
- Novel "roll padding": pad the VARIABLES dimension by copying from opposite sides (cylinder, not torus); time dimension stays valid — preserves variable correlations without zero-padding distortion.
- Architectures compared: LeNet-style 2D CNN, stacked bidirectional LSTMs, ConvLSTM2D, WaveNet2D, each with attention variants.
- Trading layer: prediction class → mechanism (weak → swing, strong → trailing-stop); target = mean of max tick variation per class; stop-loss = 80% of target (swing) / 60% (trailing-stop). Example category #41: strong up → trailing stop, target 6 ticks, stop 4 ticks.
- Data engineering: 9 indicators (integral of price change runner/competitor, liquidity variation ask/bid, volume variation+direction, price variation from sequence start runner/competitor, WoM runner, WoM others); outlier truncation 10% of each histogram tail, normalized to [−1,1]; target = 5 equal-frequency classes (strong down/weak down/neutral/weak up/strong up, ~20% each). Rule-based market-regime decision tree: favorite? × runners × price × liquidity → 54 categories; only 9 with ≥1,200 examples trained from scratch.
## Data sources named
- Betfair UK To-Win Horse Racing, pre-live 10-minute window, 2 frames/sec, 2014-09-01 to 2016-08-29: 14,421 races (15–30 races/day, 3–25 runners/race). Proprietary collection via Betfair API — not published; no public model weights. Framework: JBet2, https://github.com/rjpg/JBet.
- Proposed GSE data: Odds API odds-history sampled 1–5 min in 24–48h before NFL kickoff; per-game MTS of spread/total snapshots, cross-book dispersion, book count, minutes-to-kickoff, GSE predicted line, steam indicators.
## Findings (numbers and facts, not vibes)
- Table 7 (5-run accuracies): best = LSTM + Conv1D multi-head attention, mean 30.05%, best run 30.92% (min 29.71); plain LSTM mean 28.40%; CNN mean 23.81% → CNN+roll padding 24.30%; WaveNet 25.89% → WaveNet2D+roll 28.64%. Baseline ≈ 20% (5 classes); best model ~11 pp above baseline. Roll padding improved each 2D base architecture.
- Table 8 (best model, validation): accuracy 30.92%; per-class recall — strong down 46.38%, strong up 44.71%, neutral 27.71%, weak down 10.47%, weak up 9.89% (extremes-biased); precision — strong up 36.54%, strong down 23.70%.
- Trade-count implication: 173 trades with expected positive PL vs 98 with expected negative PL (+75 net).
- Production simulation (30 days, category #41, Table 9): 134 trades → 54 greens, 36 reds, 44 null; positive ticks 134 vs negative ticks 87 (£3 stake) — profitable in-tick terms. £100 stake: 50 greens/39 reds — ROI lower at larger stake due to market absorption. Real deployment accuracy on final test = 28.26% (Table 10).
- Limitations recorded: horse-racing pre-live microstructure only, not team sports; weak-class recall ~10% (model mostly predicts extremes); accuracy only 11 pp over baseline; profitability shown for ONE category over 30 days; simulation ≠ live (unknown queue position, no slippage/latency model); 9-indicator engineering is racing-specific.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- LSTM + Conv1D multi-head attention best (30.05% mean, ~11 pp over 20% baseline) → OTHER (architecture result: reusable time-series building block for GSE's odds-movement models).
- Roll padding improves every 2D base (CNN 23.81→24.30; WaveNet 25.89→28.64) → OTHER (portable padding trick for multivariate time-series inputs).
- Extremes-biased recall (strong classes ~45% vs weak ~10%) → TRUST-SIGNAL (calibration caution: model is overconfident on extremes; GSE adaptation must re-derive thresholds rather than inherit the 5-class binning).
- £100 stake ROI lower than £3 stake due to market absorption (50 greens/39 reds) → OTHER (market-impact reality check relevant to any GSE timing/sizing strategy).
- Proposed adaptation (3-class closing-line-move direction → wait-vs-bet-now timing backtest gated on ≥+0.5 points CLV) → OTHER (timing layer, explicitly NOT outcome prediction — file warns judge it on CLV, never ATS hit rate).
## Engine-actionable? (yes/no + one-line what)
yes — build the LSTM + Conv1D multi-head attention stack on NFL odds-history snapshots as a pre-close line-move direction forecaster driving a wait/bet-now timing rule, gated on beating baselines by ≥3 pp accuracy AND ≥+0.5 points mean CLV on 2024 holdout.
