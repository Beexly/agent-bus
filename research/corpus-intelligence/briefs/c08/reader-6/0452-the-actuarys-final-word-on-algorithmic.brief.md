# docs/arxiv-program/research/2026-09-21/arxiv-deep/0452-the-actuarys-final-word-on-algorithmic.md

## What it is (1-2 sentences)
Recht (2026, arXiv:2509.04546) is a decision-theoretic synthesis of Meehl's (1954) "Clinical versus Statistical Prediction" literature: under small outcome sets, equal machine-readable inputs, and average-score evaluation, the optimal predictor is statistical "almost by definition" (metrical determinism). The file's verdict is **ADAPT** — adopt Brier-score evaluation doctrine, human-override auditing, and a staleness monitor for the GSE engine.

## Key metrics/methods (formulas where given, else "not specified")
- Average score decomposition: S_avg = (1/N)Σ S(p_i,y_i) = Σ_{x∈X}(n_x/N){q_x S(p(x),1) + (1−q_x)S(p(x),0)}, with q_x = fraction with y_i=1 given x_i=x.
- Retrospective-optimal prediction: p*(x) ∈ argmin_p q_x S(p,1) + (1−q_x)S(p,0).
- Brier score: S(p,y) = (p−y)² ⟹ p*(x) = q_x (holds for any strictly proper scoring rule per Gneiting & Raftery 2007).
- "Broken leg" override protocol: exceptional-case overrides must themselves be scored actuarially against the table.
- Caveats: statistical staleness (Vela et al. 2022, Munger 2023, Koren 2009); human costs — expertise erosion, decision fatigue, complacency (Klein 2011).

## Data sources named
- Burgess (1928): 1,000 Illinois parole cases; 21 binary predictive factors; psychiatrists' ternary judgments.
- Grove et al. (2000) meta-analysis: 136 clinical-vs-mechanical predictions.
- Ægisdóttir et al. (2006) meta-analysis: 48 predictions (56 years of research).
- No sports data; all outcomes binary (recidivism, law-school success, suicide, treatment response).

## Findings (numbers and facts, not vibes)
- Burgess (1928): of 68 men with ≥16 positive factors, only 1 recidivated; of 25 with <5 factors, 19 recidivated. Burgess rule (≥10 factors): 86% correct on unlikely-to-violate, 51% on likely-to-violate — vs. psychiatrist 1: 85%/30%; psychiatrist 2: 80%/51%.
- Grove et al. (2000), 136 predictions: 46% mechanical ≥0.05 accuracy better than clinical; 48% within ~0.05; <6% clinical substantially better; skew — when mechanical was better it was "more frequently far better."
- Ægisdóttir et al. (2006), 48 predictions: 52% favored statistical, 38% comparable, 10% favored clinical.
- Meehl (1986): "no controversy in social science that shows such a large body of qualitatively diverse studies coming out so uniformly in the same direction."

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: proper-scoring-rule (Brier) evaluation doctrine for the engine — defines the engine probability output as the Brier-optimal q_x for its feature set.
- TRUST-SIGNAL: override-logging protocol — any human override logged with engine probability, override, and outcome; scored actuarially quarterly (Burgess-style), overrides removed if they trail.
- TRUST-SIGNAL: staleness monitor — rolling 4-week Brier/log-loss vs frozen baseline; alert at +0.01 Brier degradation; NFL regimes shift within weeks (paper cites medical rules decaying within years).
- OTHER: scope guard — keep engine inside Meehl's box (binary/ternary outcomes, fixed features); route open-ended decisions (game selection, sizing) through separate review.

## Engine-actionable? (yes/no + one-line what)
Yes — make Brier + log-loss the primary engine metrics on every evaluation slice, add an override log scored actuarially, and run a rolling 4-week staleness monitor tied to retraining cadence (~2–3 days effort, uses existing nflverse/odds data).
