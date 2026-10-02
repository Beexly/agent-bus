# docs/arxiv-program/research/2026-09-21/arxiv-deep/0405-augmenting-adjusted-plusminus-in-soccer-with.md
## What it is (1-2 sentences)
A Bayesian recast of ridge Adjusted Plus-Minus (APM) for soccer that centers the prior on preseason FIFA video-game ratings instead of zero ("Augmented APM"), tested over three English Premier League seasons. Augmentation beats both standard APM and FIFA-only prediction in all three seasons' 10-fold cross-validation.

## Key metrics/methods (formulas where given, else "not specified")
- Ridge APM: β̂ = argmin_β ‖y−Xβ‖²₂ + λ‖β‖²₂ (Sill 2010).
- Bayesian recast: y|β ~ N(Xβ, σ²); β ~ N(0, τ²), with τ = 0.1, σ = 1 used in reported results.
- Augmented APM: y|β ~ N(Xβ, σ²); β|α ~ N(α × rating, τ²); α ~ N(μ_α, σ_α²). Ratings mean-centered; learned scale α lets data decide prior weight.
- Time weighting: y|β ~ N(tXβ, tσ²) for segment length t — optimization equivalent of regressing y/t with weights √t.
- Design: each row = a substitution-free game segment; y = goal differential in segment; X columns = player indicators (+1 home, −1 away, 0 absent). Fit in Stan via R packages PlusMinusModels + apm.

## Data sources named
- English Premier League play-by-play event data (goals, substitutions), seasons 2015–16, 2016–17, 2017–18.
- Preseason FIFA overall ratings per player per season, scraped from sofifa.com (released late August each year); single overall rating (not components); mean-centered.
- Authors' R packages PlusMinusModels and apm; results tables at www.intraocular.net/apm.

## Findings (numbers and facts, not vibes)
- 10-fold CV per season, MSE of summed segment predictions vs actual game goal differentials: Augmented APM has the best predictive accuracy in all three seasons (figure-read, no numeric table in paper). — OTHER
- FIFA-only beats the Intercept model (mean home advantage); FIFA ratings "are a valuable predictor." — TRUST-SIGNAL
- Standard APM out-predicts FIFA-only in 2015 and 2017 despite soccer's collinearity limitations. — OTHER
- Rolling-origin analysis (train through month M, predict next two months): FIFA starts the season as the best predictor; both APM and Augmented APM out-predict FIFA by February. — SCHEME (calendar decay of prior value)
- 2017–18 top-15 lists: Mohamed Salah ranks 1st in standard APM, 4th in Augmented APM (EPL Player of the Year, presented as passing the eye test); Augmented APM up-weights high-FIFA players and down-weights low-FIFA players vs standard APM. — TRUST-SIGNAL
- Decorrelation: Manchester City/Manchester United player "cluster" in standard APM is "less pronounced" under Augmented APM — collinear teammates split credit per FIFA ratings. — OTHER
- Negative result: replacing goal differential with an expected-goals (xG) response did NOT improve accuracy — attributed to coarse play-by-play data. — OTHER
- Prior hyperparameters (τ = 0.1, σ = 1) were set by intuition, not estimated or cross-validated; only the overall FIFA rating was used, components discarded; MSE differences reported without confidence intervals. — TRUST-SIGNAL (uncertainty in the headline edge)

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: external subjective priors (FIFA ratings from 9,000+ scouts/coaches/season-ticket holders covering 18,000+ players) beat the intercept model from day one — NFL analogue is preseason Madden ratings as an internal player-valuation prior.
- SCHEME: prior-value decay is calendar-dependent (best predictor early season, beaten by on-field data by February) — implies a time-decaying prior weight, not a static one.
- OTHER: the Bayesian recast (interpretable τ as ability SD; posterior uncertainty for rankings; learned scale α) is the portable machinery; soccer's segment structure has no NFL analogue (NFL has no stints — drives or personnel packages would need the redesign).

## Engine-actionable? (yes/no + one-line what)
yes — Port the prior trick, not the model: regularize noisy NFL drive-EPA player-value estimates toward mean-centered preseason Madden ratings with a learned scale α (weekly "players outperforming their Madden rating" content + a one-number player-value leaderboard with posterior uncertainty).
