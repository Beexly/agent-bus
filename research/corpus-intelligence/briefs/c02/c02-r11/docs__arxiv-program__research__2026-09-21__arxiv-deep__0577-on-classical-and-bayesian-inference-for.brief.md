# docs/arxiv-program/research/2026-09-21/arxiv-deep/0577-on-classical-and-bayesian-inference-for.md

## What it is (1-2 sentences)
A full-text read of arXiv:2301.04251v1 (Arnold, Ghosh 2023) on classical (fixed-point iterative MLE) and Bayesian (conjugate via imaginary-sample elicitation, plus locally-uniform priors) estimation for the bivariate Poisson conditionals (BPC) distribution, a paired-count model where both conditionals are Poisson but the model admits only negative correlation (λ3≤1). The file's verdict is REJECT: the negative-only dependence sign matches no NFL paired-count quantity.

## Key metrics/methods (formulas where given, else "not specified")
- Joint pmf (2.1): P(X=x,Y=y) = K(λ1,λ2,λ3) · λ1^x λ2^y λ3^{xy} / (x! y!), with X|Y=y ~ Poisson(λ1 λ3^y), Y|X=x ~ Poisson(λ2 λ3^x), (λ1,λ2)>0, 0<λ3≤1 (λ3=1 = independence).
- Normalizing constant: K^{-1} = Σ_{y≥0} λ2^y/y! · exp(λ1 λ3^y) = Σ_{x≥0} λ1^x/x! · exp(λ2 λ3^x).
- Correlation structure: always negatively correlated except independence at λ3=1.
- Frequentist: likelihood equations as fixed-point updates (A) λ1 = t1·J(λ)/[n·J(λ1,λ2λ3,λ3)], (B), (C) — iterated cyclically until |λi^m − λi^{m+1}| < ε < 0.005; no optimizer needed. Asymptotics: (λ̂1,λ̂2,λ̂3) ~ N3((λ1,λ2,λ3), V), V = inverse observed FIM (Eq. 3.5).
- Bayesian conjugate: reparameterize δi=log λi (exponential family), prior ∝ K̃(δ)^{η0} exp(η1δ1+η2δ2+η3δ3); hyperparameters elicited as an "imaginary sample" (η0=n*, ηi=n*vi). Posterior means via numerical integration; posterior modes via iterative scheme/Newton-Raphson.
- Bayesian non-conjugate: locally uniform priors Π(δ1)∝1, Π(δ2)∝1, Π(δ3)∝1 on (−∞,0).
- Sufficient statistics: t1=Σxi, t2=Σyi, t3=Σxiyi.

## Data sources named
- Simulations: n=50, 75, 100 draws from the BPC pmf via Shin & Pasupathy (2010), four parameter choices: (λ1,λ2,λ3) = (2,2.5,0.35), (1.75,3.25,0.45), (2.5,1.5,0.55), (3.5,4,0.75). Bayesian simulation: n=100, expert elicitation with confidence index n*=12 and typical values v1=5, v2=4, v3=6.
- Real data: Aitchison & Ho (1989) "lens data" (ophthalmology counts), previously analyzed by Lee et al. (2017) and Ghosh et al. (2021).
- No code or data links provided.

## Findings (numbers and facts, not vibes)
- MSE of all three parameters decreases with n; bias does not decrease monotonically (increases by 0.01–0.05 in some cases); MSE(λ3) > MSE(λ1), MSE(λ2). [OTHER]
- Bootstrap CIs perform satisfactorily and serve as fallback when observed-FIM variance estimates go negative — 4.75%–17% of simulation runs produce negative variance estimates (Table 4.1 "% of negative variances" column), i.e., the asymptotic theory is fragile for this parameterization. [TRUST-SIGNAL]
- Lens data (Table 8.1): conjugate-prior posterior means (λ̂1,λ̂2,λ̂3) = (1.8500, 2.1699, 0.9600), 95% HPD (1.3832,3.6052), (1.7633,6.400), (0.5574,0.9832) — closely matching copula-based MLEs of Ghosh et al. (2021); locally-uniform priors give slightly wider HPDs. [OTHER]
- The paper uses two inconsistent imaginary-sample hyperparameter sets (§6: η0=5/η1=60/η2=48/η3=72 vs §7: η0=1.23, η1=2.325, η2=3.25, η3=2.528) without explanation. [TRUST-SIGNAL]
- No out-of-sample predictive evaluation anywhere: simulations report only coverage/MSE of in-sample estimates; real-data section reports point estimates with no goodness-of-fit or held-out likelihood. [TRUST-SIGNAL]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Negative-only correlation structure of BPC (λ3≤1): OTHER — matches no NFL paired-count quantity (home/away points near-independent to weakly positive); the sports-relevant member of this family is the positively-correlated bivariate Poisson (Maher/Dixon-Coles), which this paper does not cover.
- Imaginary-sample prior elicitation recipe (ask expert for typical values v1,v2,v3 + confidence index n*, set η0=n*, ηi=n*vi): TRUST-SIGNAL — the one portable technique, a general recipe for conjugate-prior hyperparameters in any exponential-family sports model (e.g., Poisson TD-prop model), as a future methods borrowing.
- Up to 17% of runs yielding negative variance estimates from the observed FIM: TRUST-SIGNAL — asymptotic fragility warning; do not trust observed-FIM-based CIs for count-model parameters without bootstrap validation.
- Inconsistent hyperparameter sets across sections (§6 vs §7): TRUST-SIGNAL — treat the Bayesian estimates as illustrative rather than reproducible.

## Engine-actionable? (yes/no + one-line what)
No — the model's defining negative-correlation property matches no NFL quantity; the only salvageable item is the imaginary-sample prior-elicitation recipe for future exponential-family sports models.
