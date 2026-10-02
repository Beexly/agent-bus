# docs/arxiv-program/research/2026-09-21/arxiv-deep/1167-wisdom-and-persuadability-of-threads.md

## What it is (1-2 sentences)
A full-text ledger of arXiv:2008.05203 (Engelhardt, Hendricks, Stærk-Østergaard 2020) — an MTurk dot-guessing experiment testing whether pristine vs filtered social information in estimation threads helps or hurts collective accuracy, plus a per-participant GMM persuadability score. Verdict: ADAPT — ingest the full evolution of betting lines (never curated "steam"/extreme-only moves) and downweight GSE component models that merely herd the market.

## Key metrics/methods (formulas where given, else "not specified")
- Thread accuracy: y_dv = log(M(d,v)/d), with M(d,v) the thread median; linear normal model μ_dv = α_v + β_v log d, v as categorical factor.
- Individual GMM: Yi = log(ei/d); Si = Σ_j w_j log(z_ij/d) (log weighted-geometric-mean of visible estimates, weights from v=0 control density estimates, extreme estimates get weight ≈ 0); Yi | (Xi=j) ~ N(μj, σj²); μj = αj + βj Si (eq. 2); P(Yi) = Σ_j P(Xi=j)P(Yi|Xi=j) (eq. 1).
- Persuadability score: β_iw = Σ_j δ_ij β_j (eq. 3); bands: >0.6 = follower, ≈0 = skeptic, ≈0.4 = compromiser.
- State count k ∈ {2,3,4,5} selected by BIC = 3k ln(n) − 2 ln(L) (AIC favored k=5 everywhere — overfitting; BIC used). Fit via R depmixS4 (EM).
- Residuals: ε̂_i = (yi − α̂_iw − β̂_iw xi)/σ̂_iw² checked vs N(0,1) after removing the 5% most extreme observations.

## Data sources named
- Amazon Mechanical Turk dot-guessing experiment coded in oTree 2.1; participants estimate dot counts d ∈ {55, 148, 403, 1097} while seeing v ∈ {1, 3, 9} previous estimates; estimates bounded [10, 1,000,000]; $0.10 participation fee + $1 bonus if within 10% of truth.
- Anonymized `dots.xlsx` (parameters: task, d, v, session, hashed turker, decision order, hist, guess); quality: ≥100 HITs, ≥98% acceptance, 32 duplicate participants removed.

## Findings (numbers and facts, not vibes)
- 11,748 estimates from 6,196 unique participants: 5,990 in 12 historical (pristine) threads, 3,934 in 12 manipulated (filtered, seeing the v highest estimates so far) threads, 1,824 in 4 control (v=0) threads. 3,157 participants saw one image, 1,259 two, 1,047 three, 733 all four. Attrition reduced to 6.5% after waiting-room fix; average wage ~$12/hour.
- Historical threads: collective performance declines with difficulty d but improves with v. For v=9 the thread median is "statistically indistinguishable from the true value for all d" (confidence intervals overlap in places — effects discernible only for hard tasks with abundant social information).
- Manipulated threads: large positive bias for v=3 and v=9, increasing with d; v=1 a small negative trend (manipulation ineffective). Conclusion: filtered social information is highly detrimental when the task is demanding.
- Persuadability β_iw increases with difficulty d and with social-information amount v; at low d and v=1 participants not significantly influenced in either thread type.
- Manipulated high-d/high-v threads: population splits into a highly persuadable minority and a skeptic/compromiser majority; historical high-d/high-v threads: large majority medium-to-strongly influenced (β_iw ≈ 0.5). Bandwagon effect: following probability increases with the number already following.
- Thread-level table: e.g., history 55-dot threads bonus rate (within 10% of truth) 57–67% vs max (filtered) 55-dot threads 44–54%. SI confirms main results (Figs. 7–10, Table I totaling 11,748 estimates).
- GSE implementation spec in the ledger: (1) full line-evolution feed rule — ingest openers + every move via The Odds API, never curated "top steam picks"/extreme-only move lists; (2) per-model market-β_iw (slope of model log-odds on market log-odds), weight by max(0, Brier_market − Brier_model) on trailing data; flag weeks the pool's average market-β drifts up (pool is herding). Adoption gate: orthogonal-information weighting beats equal-weight ensemble on full-season Brier and by a larger margin on the top-tercile closing-line-uncertainty subset; veto: raw-Brier weighting rejected if any model has market-β>0.9 removed without Brier loss.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- The persuadability split (follower/skeptic/compromiser populations) and the pristine-vs-filtered information regime switch → OTHER (wisdom-of-crowds / market-information methodology; no QB, coach, OL, or scheme content in the paper).
- The market-reliability switch extension (bettor mixture on pick shifts after line moves; steam-driven = manipulated regime → reduce market weight; broad balanced action = pristine regime → keep weight) → OTHER (ensemble market-integration methodology).

## Engine-actionable? (yes/no + one-line what)
Yes — screen every component model with a market-β_iw (model log-odds on market log-odds) and weight ensembles by orthogonal (market-residual) information, never by raw accuracy that rewards herders; ingest the complete line-evolution feed, never curated steam-only signals.
