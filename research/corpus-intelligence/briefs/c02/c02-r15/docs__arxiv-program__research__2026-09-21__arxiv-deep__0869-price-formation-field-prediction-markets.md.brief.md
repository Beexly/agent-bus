# docs/arxiv-program/research/2026-09-21/arxiv-deep/0869-price-formation-field-prediction-markets.md

## What it is (1-2 sentences)
ArXiv 2209.08778 (Bossaerts et al., 2022): a field study of 2,770 traders on the Almanis prediction-market platform asking how information enters prices — finding it enters through the amplified flow of a few price-sensitive ("informed") traders ("wisdom IN the crowd"), not through crowd averaging.

## Key metrics/methods (formulas where given, else "not specified")
- Per-trader price-sensitivity regression (eq. 2): Δp_i(t_i+1) = α_i + β_i(p_0(t_i+1) − p_{m,i}(t_i)) + ε(t_i); traders with t-stat < −1.65 on β_i are labeled price-sensitive/informed. Kyle (1985) prediction: informed traders show negative (reverting) price sensitivity; positive sensitivity is momentum, not informedness.
- Informativeness test: ΔAUC from offer price p_0 to final marginal price p_m vs settlement, stratified by minimum price impact (KL divergence), 95% bootstrap CIs.
- Convergence test: 152 truncated markets grouped by # of price-sensitive traders; daily ROC/AUC 14→1 days pre-settlement; 10,000 bootstrap subsamples.
- LMSR market maker: p_i(q) = e^{q_i/B}/Σ_j e^{q_j/B}, B = 150; errors-in-variables handled by Total Least Squares via SVD (eq. 7–10).

## Data sources named
- Almanis field market (Dysrupt Labs / Univ. of Melbourne), Dec 1 2015 – May 2 2017: 2,770 traders, ~£70,000 (~$105k) real-money incentives (data restricted, license on request).
- Four replication LMSR experiments on scientific-replication prediction (Dreber et al. 2015 PNAS; Camerer et al. 2016 Science; Camerer et al. 2018 Nat Hum Behav; Forsell et al. 2019), public via R package PooledMarketR.

## Findings (numbers and facts, not vibes)
- Price-sensitive traders' trades add information; others' trades destroy it. Table 2 ΔAUC (p_m vs p_0): PS +0.0394 [+0.0196,+0.0592] vs non-PS −0.0026 for days-to-EOS [0,5); PS +0.0376 [+0.0244,+0.0508] vs non-PS −0.0119 [−0.0208,−0.0030] for [30,∞). Larger minimum price impact → larger PS gains and larger non-PS losses. Reproduced on all four external datasets.
- More informed traders → faster, better convergence: markets with 2–3 or 4+ price-sensitive traders have significantly higher AUCs earlier than 0/1-PS markets (two-sample z, p < 0.001) at every horizon 14→1 days before settlement.
- Mean 3.06 price-sensitive traders per market (7.3% of traders; median 33.3% among traders with ≥3 trades).
- Informedness is NOT a persistent trait: 75% of traders are price-sensitive in fewer markets than the mean; the max trader was PS in 64 markets but non-PS in 42. Expertise is topic-specific.
- Detection blind spot (authors' honest caveat): when prices are already good, informed traders have no incentive to trade, so "no PS traders" can mean "no informed" OR "too many informed".

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Weight line moves by the informedness of the flow behind them, rather than treating all line moves equally — adapt the per-segment price-sensitivity regression to sportsbook line-move data (TRUST-SIGNAL)
- Book-level informedness test: which books' moves are price-sensitive vs noise (Pinnacle vs recreational books as the natural first test) (TRUST-SIGNAL)
- ΔAUC-by-move-size filter for GSE's market-implied features: keep features whose large moves add information, discard those whose moves degrade it (the non-PS signature) (TRUST-SIGNAL)
- Do not assume sharp flow in NFL is sharp in NBA — estimate informedness per league × market, topic-specificity → league-specificity (OTHER)

## Engine-actionable? (yes/no + one-line what)
Yes — implement the price-sensitivity regression (eq. 2) as an informed-flow detector on sportsbook line moves and use the ΔAUC-by-move-size test to keep/discard market-implied features.
