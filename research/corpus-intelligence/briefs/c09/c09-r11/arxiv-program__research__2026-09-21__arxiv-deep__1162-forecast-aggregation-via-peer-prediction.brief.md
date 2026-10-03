# arxiv-program/research/2026-09-21/arxiv-deep/1162-forecast-aggregation-via-peer-prediction.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv:1910.03779 (Wang, Liu, Chen 2022, 22 pp): a three-step framework that aggregates probabilistic forecasts by first ranking forecasters with peer-prediction scores (no ground truth needed), selecting the top rank subset, then applying a mean or extremized-logit aggregator. Verdict: ADAPT — use the peer-assessment ranking to weight/trim GSE's model pool without waiting for game outcomes.
## Key metrics/methods (formulas where given, else "not specified")
- Aggregators: F^Mean(p) = Σ w_j p_{i,j}; F^Logit(p) = sigmoid(|N|/α · Σ w_j logit(p_{i,j})), α = 2. Selection: top max(10%·|N|, 10) agents per event by peer assessment score (PAS).
- Five PAS mechanisms: DMI, CA, PTS, SSR (unbiased surrogate-scoring-rule estimate of the true proper score), PSR. Example formulas: CA: R^{CA}_j = Σ_{u,v∈{0,1}} |d̂^{j,k}_{u,v} − d̂^j_u · d̂^k_v|; Brier S^Brier = 2(q̂−Y)² (range [0,2]); log score = −Y log q̂ − (1−Y) log(1−q̂), predictions clipped to 0.01/0.99.
## Data sources named
14 real-world binary-event human forecast datasets: Good Judgment Project G1–G4 (2011–2014; e.g., G1: 94 questions / 1409 agents, G4: 94 / 3086); IARPA Hybrid Forecasting Competition H1–H3 (2018; e.g., H2: 80 / 551); 7 MIT static datasets M1a–M4b (20–51 agents, 50–90 questions, majority often wrong by design). GJP data public at https://doi.org/10.7910/DVN/BPCDH5.
## Findings (numbers and facts, not vibes)
- 9 of 10 PAS-aided aggregators beat the best benchmark (Mean, Logit, VI, MP) on ≥5 of 14 datasets; each Mean-based PAS-aided aggregator beats the second-best benchmark on ≥12 of 14 (only exception: PSR-aided Logit on M1a).
- Cross-dataset (Table 11): Mean-based DMI-aided mean Brier 0.221 (std 0.150) vs Mean 0.290 (0.130), Logit 0.317 (0.224), VI 0.315 (0.267); log scores 0.354 (0.214) vs 0.453/0.578/0.701. All Mean-based PAS-aided significantly better than all benchmarks at p<0.05 (paired t-tests), except vs MP on 7 MIT datasets.
- PAS selection peaks at top 5–20% and "perfectly recovers" oracle Brier-aided performance on G2; fails when forecasters make <40 predictions (HFC datasets show minimal improvement).
- Multi-outcome events: no benchmark significantly beats any PAS-aided aggregator (exception: Logit vs CA-aided Mean on H2).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: ensemble combination method — skill-ranks GSE's model pool per game-week using only peer agreement, no resolved outcomes (cold-start model weighting). Caveats noted in-file: A1 (events homogeneous) violated by NFL heterogeneity; A2 (conditionally independent signals) violated when GSE models share data/features.
## Engine-actionable? (yes/no + one-line what)
yes — implement CA-style pairwise-agreement scoring over the GSE component-model pool per week and replace fixed equal weights with softmax weights w_j ∝ exp(β·s_j) on the weighted mean, backtested on 2025 log-loss/Brier with a ≥3% Brier-improvement gate.
