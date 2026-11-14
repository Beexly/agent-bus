---
source: "arxiv_1811.12799v1.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 7
model: deepseek/deepseek-v4.1-flash-1017
words: 8985
---

<NATIVE_REASONING>
The user wants a deep analytical response structured into six XML sections, ≥1,000 words total, with formal LaTeX, citations to page markers, no betting lines, no toy equations. This is a research paper about LTV prediction in video games using deep learning vs parametric BTYD models. I need to build a rigorous multi-hop derivation, gray-zone audit, source operators and equations, retrocausal genealogy, recursive theory of mind (crisis habit regression vs counter-trap vs clock), cross-layer veto adjudication (physical/biomechanical/weather veto proof), and RLVR counterfactual vetoes (3 verifiable scenarios + predictions).

Note: there are no betting lines here — this is an academic paper. I must not mention spreads, totals, moneylines, odds. The "cross-layer veto" in this context refers to physical/biomechanical/weather — but the source is about a mobile game. I should reinterpret honestly: in this corpus, the "physical layer" is computational/operational (compute budget, data pipeline, petabyte scale), biomechanical is player-behavioral physiology (session timing, circadian play), weather is external seasonality/event shocks (gacha banners, holidays). I should be explicit about this reframing and flag that the source contains no physical/biomechanical/weather data — so the veto adjudication is a proof that such vetoes are unsupported by the source. That's honest.

Let me construct the technical content carefully.

Key source facts:
- Pareto/NBD (Schmittlein, Morrison, Colombo 1987) — Gamma mixing for transaction rate λ ~ Gamma(r, α), dropout rate μ ~ Gamma(s, β). NBD for purchases, Pareto for dropout.
- BG/NBD, BG/CNBD, MBG/CNBD, BG/CNBD-k, MBG/CNBD-k (Erlang-k interpurchase times).
- DNN: 5 layers, 203 input nodes, hidden 300/200/100, Xavier init, ADAM, sigmoid activations.
- CNN: 10 layers; conv filters 32/16/1 with sizes 7/3/1; max pool 2; FC 300/150/60; ReLU; Xavier; ADAM.
- Early stopping: stop when validation error doesn't decrease for 20 epochs.
- Dataset: Age of Ishtaria, 2014-09-24 to 2017-05-01 (~32 months). Study window 2016-05-01 to 2017-05-01. 2505 paying users who churned. Churn = 9 days inactivity. Horizon 365 days.
- Whales: ~2% of players → up to 50% revenue. Threshold: sort players by monthly spend, cumulative expenditure reaches 50% of total revenue; average across months.
- Results: Table I training errors, Table II prediction errors, Table III top spenders.
  - Pareto/NBD + average: RMSLE 9.42/9.35, NRMSE 1.89/1.88, SMAPE 95.87/95.65, %Error 6.20%/8.96%
  - Pareto/NBD + gamma: 9.43/9.37, 1.91/1.88, 96.29/96.35, 6.24%/9.01%
  - MGB/CNBD-k + average: 3.41/3.46, 1.72/1.68, 75.44/75.53, 5.52%/7.96%
  - MGB/CNBD-k + gamma: 3.55/3.61, 1.77/1.73, 78.58/79.67, 5.71%/8.16%
  - DNN: 1.78/1.82, 1.07/1.12, 75.08/72.99, 3.90%/5.82%
  - CNN: 1.74/1.84, 1.11/1.05, 72.75/73.76, 3.96%/5.72%
  - Table III top spenders: Pareto/NBD 33.35%, 33.39%; MBG/CNBD-k 29.14%, 30.20%; DNN 15.76%; CNN 15.64%.

Formal equations I can state (derived from the models described, not fake ratios):

1. Pareto/NBD likelihood. Let x = number of transactions, t_x = time of last transaction, T = observation time. For a customer with transaction rate λ and dropout rate μ:

L(λ, μ | x, t_x, T) = [λ^x e^{-λT} (μ + λ) ... ] Actually the standard form:

L(λ,μ|x,t_x,T) = (λ^x e^{-λ t_x}) (μ e^{-μ T} + λ e^{-μ t_x}) / (μ+λ)  ... let me recall.

Standard Pareto/NBD individual likelihood (Fader-Hardie):
L(λ, μ | X=x, t_x, T) = [λ^x e^{-λ t_x}] * [ (μ e^{-μ T} + λ e^{-μ t_x}) / (μ + λ) ]  — hmm, actually the standard is:

L = (λ^x e^{-λ t_x}) * (μ e^{-μT} + λ e^{-μt_x}) / (μ+λ)  ... Let me derive properly.

The derivation: transactions Poisson(λ). Dropout time τ ~ Exp(μ), independent. Customer observed over [0,T]. If still alive at T (τ > T), then x transactions in [0,T] with last at t_x: probability = (λ^x e^{-λT}/x!) * ... Actually the count and timing.

P(X=x, t_x, τ>T) = [λ^x e^{-λ t_x} / x!] * ... no.

Standard: joint density of the purchase history and alive at T:
L_alive = (λ^x e^{-λ T}) * e^{-μ T}  ... For exactly x events in [0,T] with the last at t_x, given alive through T: The likelihood for the observed purchase times given λ is λ^x e^{-λ T} (ignoring x! as constant). Given alive through T, weight e^{-μT}. But we also need the case where dropout occurred at some time in (t_x, T]: then they made x purchases, last at t_x, then dropped at τ ∈ (t_x, T]: ∫_{t_x}^T μ e^{-μτ} dτ * λ^x e^{-λ t_x} = λ^x e^{-λ t_x} (e^{-μ t_x} - e^{-μ T}).

So total: L = λ^x e^{-λT} e^{-μT} + λ^x e^{-λ t_x}(e^{-μ t_x} - e^{-μT}).

= λ^x [ e^{-λT - μT} + e^{-λ t_x - μ t_x} - e^{-λ t_x - μ T} ]

= λ^x e^{-(λ+μ)T} + λ^x e^{-(λ+μ)t_x} - λ^x e^{-λ t_x - μT}.

Hmm, the standard Fader-Hardie form is:

L(λ,μ|x,t_x,T) = λ^x e^{-(λ+μ)T} + λ^x e^{-(λ+μ)t_x}... let me check: the well-known form is

L = (λ^x e^{-λ T} ) * [ ... ] Actually Fader & Hardie (2005) note gives:

L(λ, μ | X = x, t_x, T) = λ^x e^{-(λ+μ)T} + λ^x μ e^{-(λ+μ)t_x} ... no.

Let me just recompute carefully with the standard result. Known result (e.g., Fader-Hardie note 009):

L(λ, μ | x, t_x, T) = λ^x e^{-λT} · [ (μ e^{-μT}... ] 

Hmm, actually the widely cited form:

L(λ,μ|x,t_x,T) = [λ^x e^{-λ t_x}] · [ (μ e^{-μT} + λ e^{-μ t_x}) / (μ+λ) ]  — this is wrong dimensionally? Let's check with x=0, t_x=0.

Standard result from Schmittlein et al. 1987 / Fader-Hardie:

L(λ, μ | X=x, t_x, T) = (λ^x e^{-λt_x}) [ (μ e^{-μT}) + (λ e^{-μ t_x}) ] / (μ + λ)? For x=0, t_x=0: λ^0=1, so = (μ e^{-μT} + λ)/(μ+λ). At μ→0: → λ/λ = 1... but that would be e^{-λT}·... hmm we need e^{-λT} factor.

Let's just use my derived form: L = λ^x [ e^{-(λ+μ)T} + e^{-(λ+μ)t_x} - e^{-λ t_x - μ T} ]. Hmm wait, my second term: λ^x e^{-λ t_x}(e^{-μ t_x} - e^{-μT}) = λ^x (e^{-(λ+μ)t_x} - e^{-λ t_x - μT}). And first term λ^x e^{-(λ+μ)T}. So:

L = λ^x [ e^{-(λ+μ)T} - e^{-λt_x - μT} + e^{-(λ+μ)t_x} ].

Hmm, this doesn't look like the standard known form. Let me re-derive. Actually I think I mis-stated: given the customer is alive at T, the likelihood of observing x purchases with the last at t_x is λ^x e^{-λT} (with x! folded into a constant). But conditional on alive at T, we don't get a factor e^{-μT}; rather we account for survival probability. The joint: P(τ > T) = e^{-μT}. And the purchase process is independent. So P(x purchases in [0,T] with last at t_x, alive at T) = [λ^x e^{-λT}] · e^{-μT}. Wait, but that includes purchases only in [0,T]. Yes, correct — because if alive at T, purchases in [0,T] are Poisson with rate λ. So term 1 = λ^x e^{-λT} e^{-μT}. But this over-counts? No, it's fine: λ^x e^{-λT} is the density (up to 1/x!) — actually density of the x-th purchase time at t_x and no purchases in (t_x, T] is λ^x e^{-λ(t_x)} · e^{-λ(T-t_x)} = λ^x e^{-λT}. Yes.

Term 2: dropout at τ ∈ (t_x, T]: density μ e^{-μτ}; purchases: λ^x e^{-λτ}... wait no — purchases stopped at t_x. So purchases density λ^x e^{-λ t_x}, times survival to t_x e^{-μ t_x}? Hmm, I need to be careful: the dropout at τ > t_x means the customer survived past t_x, so the joint density of dropout at τ given τ > t_x is μ e^{-μ(τ - t_x)} / ... no, unconditionally f(τ) = μ e^{-μτ}. And the purchase density up to t_x is λ^x e^{-λ t_x}. And no purchases in (t_x, τ]. So integrating over τ from t_x to T:

∫_{t_x}^{T} μ e^{-μτ} dτ · λ^x e^{-λ t_x} = λ^x e^{-λ t_x}(e^{-μ t_x} - e^{-μ T}).

Good, matches what I had. So sum:

L = λ^x [ e^{-(λ+μ)T} + e^{-(λ+μ)t_x} - e^{-λ t_x - μ T} ].

Hmm. The standard published form is:

L(λ,μ|x,t_x,T) = (λ^x e^{-(λ+μ)T}) + (λ^x μ e^{-(λ+μ)t_x}) ... no.

Actually the well-known Fader-Hardie form is:

L(λ, μ | x, t_x, T) = λ^x e^{-(λ+μ)T} + λ^x μ e^{-(λ+μ)(t_x - T)}? No.

Let me just check against the widely quoted formula:

L(λ, μ | X = x, t_x, T) = λ^x e^{-(λ+μ)T} · [ ... ] Hmm.

Let me just search memory: Fader & Hardie "A note on deriving the Pareto/NBD model" (2005):

L(λ, μ | X = x, t_x, T) = λ^x e^{-(λ+μ)T} + λ^x μ e^{-(λ+μ)t_x} ... no, hmm. Actually:

L = λ^x e^{-λT} e^{-μT} + λ^x μ ∫_{t_x}^{T} e^{-μt} e^{-λ t_x} dt? That's what I did but I wrote μ e^{-μτ} — the integral ∫ μ e^{-μτ} dτ from t_x to T = e^{-μ t_x} - e^{-μ T}. Yes.

Now, is it possible that the standard form includes a factor for the drop being after t_x? Actually the equivalent standard form:

L = λ^x e^{-(λ+μ)T} + λ^x e^{-(λ+μ)t_x} - λ^x e^{-λ t_x - μT}
= λ^x e^{-λ t_x} [ e^{-μT - λ(T - t_x)} + e^{-μ t_x} - e^{-μT} ].

Hmm, let's compute the second case differently: the probability that the customer is still alive at T is e^{-μT}, and if dropout happens in (t_x, T]... Let's cross-check with x=0, t_x=0:

L = e^{-(λ+μ)T} + 1 - e^{-μT}.

Check: P(dropout > T) = e^{-μT}, times P(0 purchases) = e^{-λT}. Plus P(dropout in (0,T]) = 1 - e^{-μT}, times e^{-λ·0}=1 (no purchases before dropout — well, actually we need no purchases in [0, τ], i.e., e^{-λτ}; hmm, that's not 1). Oops.

Right — I need no purchases before dropout, which for a dropout at τ requires e^{-λ τ} as part of the purchase process. But I claimed the purchase density up to t_x is λ^x e^{-λ t_x} and no purchases in (t_x, τ]. Actually the correct joint for the purchase process given the observation window: we observe x purchases in [0, τ] (all before dropout), the last at t_x. The density is λ^x e^{-λ t_x} for the purchases up to t_x, and no purchases in (t_x, τ]. But that's already incorporated in the integral? No — ∫ μ e^{-μτ} dτ gives the dropout timing but we need the survival probability e^{-μ t_x} for the customer to have survived to make the x-th purchase at t_x.

Hmm, careful: If the dropout time is τ, the customer is active during [0, τ]. Purchases occur in [0, τ]. The observed data: x purchases, last at t_x < min(τ, T). So the likelihood:

∫ over τ of [purchase likelihood given active until min(τ,T)] × f(τ).

Case A: τ > T. Then the customer is active on [0,T]. Purchase likelihood for exactly x events with the last at t_x and none in (t_x, T] = λ^x e^{-λT}/x!. And P(τ > T) = e^{-μT}.

Case B: τ ∈ (t_x, T]. Purchase likelihood: x events with the last at t_x, none in (t_x, τ] = λ^x e^{-λτ}. And f(τ) = μ e^{-μτ}. So ∫_{t_x}^{T} λ^x e^{-λτ} μ e^{-μτ} dτ = λ^x μ ∫_{t_x}^T e^{-(λ+μ)τ} dτ = λ^x μ/(λ+μ) [e^{-(λ+μ)t_x} - e^{-(λ+μ)T}].

Ah, that's the correct form — I made an error before. So:

L = λ^x e^{-λT} e^{-μT} + (λ^x μ/(λ+μ))[e^{-(λ+μ)t_x} - e^{-(λ+μ)T}]

= λ^x e^{-(λ+μ)T} + (λ^x μ/(λ+μ)) e^{-(λ+μ)t_x} - (λ^x μ/(λ+μ)) e^{-(λ+μ)T}

= λ^x [ (1 - μ/(λ+μ)) e^{-(λ+μ)T} + (μ/(λ+μ)) e^{-(λ+μ)t_x} ]

= λ^x [ (λ/(λ+μ)) e^{-(λ+μ)T} + (μ/(λ+μ)) e^{-(λ+μ)t_x} ]

= (λ^x /(λ+μ)) [ λ e^{-(λ+μ)T} + μ e^{-(λ+μ)t_x} ].

Yes! That's the standard Fader-Hardie form. 

So: L(λ, μ | x, t_x, T) = (λ^x/(λ+μ))[λ e^{-(λ+μ)T} + μ e^{-(λ+μ)t_x}], with λ ~ Gamma(r, α), μ ~ Gamma(s, β), and x! constant folded.

Then the mixture: L(r,α,s,β) = ∫∫ L(λ,μ) g(λ|r,α) g(μ|s,β) dλ dμ. Fader-Hardie's closed form:

L(r, α, s, β | x, t_x, T) = Γ(r+x)α^r β^s / (Γ(r)) × [ 1/((α+T)^{r+x}(β+T)^s) + (s/(r+s+x)) × (something) ]...

The known closed form (Fader-Hardie 2005, eq. 10):

L(r, α, s, β | X=x, t_x, T) = (Γ(r+x) α^r β^s)/(Γ(r)) × { 1/[(α+T)^{r+x}(β+T)^s] + (s/(r+s+x)) · A_0 } 

where A_0 = ₂F₁(...)/(α+T)^{r+x} ... I'll present it in the integral form to avoid error, noting the closed form involves the Gaussian hypergeometric ₂F₁.

Actually, safer: I'll present the individual-level likelihood (which I derived) exactly, and the mixture as an integral, mentioning the hypergeometric closed form qualitatively. That satisfies "formal LaTeX, units, assumptions, exact singularity/breakdown regimes."

Units: λ, μ in inverse days (day⁻¹); r, s dimensionless shape; α, β in days (scale of Gamma with rate parameterization: g(λ|r,α) = α^r λ^{r-1} e^{-αλ}/Γ(r) — note α is in days, λ in day⁻¹). Good, dimensional consistency check is a nice "gray-zone audit" item.

P(alive at T | λ, μ, x, t_x, T) = [λ e^{-(λ+μ)T}] / [λ e^{-(λ+μ)T} + μ e^{-(λ+μ)t_x}] — that's the conditional probability from the two terms. Good.

Expected number of purchases in (T, T+τ]:
E[X(τ) | ...] = P(alive) × (1 - e^{-λτ})/λ × ... actually conditional on λ: E[# purchases in (T, T+τ] | alive at T, λ, μ] = (1 - e^{-λτ})/λ × P(alive). Hmm, with dropout: E = ∫... The paper says "the conditioned expected number of purchases times the conditioned probability of the particular customer being active." So E[N(τ)] = P(alive|data) × Ẽ[(1-e^{-λτ})/λ]. Good.

LTV = E[N(τ)] × E[spend per transaction]. With gamma-gamma submodel: E[monetary value | p, q, γ, m̄, x] = (p/q... ) Standard: E[M | m̄, x, p, q, γ] = (γ + x m̄) p / (p x + q - 1) — with the constraint q > 1 for finite expectation and p x + q > 1. Actually the gamma-gamma: E[M|x, m̄] = (p + x)/(p x + q - 1) × ... Let me recall: Fader-Hardie gamma-gamma: E(M | x, m̄) = (p + x)/(p x + q - 1) · (q-1)/(p) · m̄? Hmm. The standard formula:

E[M | m̄, x, p, q, γ] = (γ + x m̄) · (p/(p x + q - 1)) · ... 

Actually Fader-Hardie gamma-gamma: with M ~ Gamma(p, ν) and ν ~ Gamma(q, γ), posterior E[M | x, m̄] = (p x + q)/(γ + x m̄)... hmm I'd rather state it more carefully.

Let me define: transaction value m_i ~ Gamma(p, θ) with shape p and rate θ; θ ~ Gamma(q, γ). Then posterior E[θ | data] = (γ + Σ m_i)/(q + x)?? With rate parameterization and prior Gamma(q, γ) on θ: posterior θ | data ~ Gamma(q + p x, γ + x m̄). Then E[M | data] = E[E[M|θ]] = p × E[1/θ]... no, E[M|θ] = p/θ. So E[M] = p E[1/θ] = p (γ + x m̄)/(q + px - 1) since if θ ~ Gamma(a,b), E[1/θ] = b/(a-1) for a>1. Here a = q + px, b = γ + x m̄. So E[M|data] = p(γ + x m̄)/(q + px - 1), requiring q + px > 1. That matches the known Fader-Hardie form: E(M | x, m̄) = (p(γ + x m̄))/(q + px - 1). Yes I'm fairly confident that's the standard gamma-gamma expected value. And the requirement q > 1 for prior mean p γ/(q-1) to exist.

Breakdown regimes:
- Pareto/NBD individual likelihood is well-defined for all λ, μ > 0; the mixture requires r, s, α, β > 0. Singularity at λ + μ = 0 (measure zero) — explicitly the denominator (λ+μ) → 0 gives divergence in the individual likelihood form? Actually as λ,μ→0, (λ^x/(λ+μ))[λe^{-(λ+μ)T} + μe^{-(λ+μ)t_x}] → for x=0: (λ + μ)/(λ+μ) = 1, finite. For x≥1, λ^x → 0. So no singularity; the form is bounded. But the closed-form mixture has apparent singularities at r+s+x = 0 (only if r,s,x=0 and r+s=0) — never in the interior. And ₂F₁ has branch points at 1.
- Gamma-gamma E[M] blows up as q + px → 1⁺.
- RMSLE with zero actuals: log(1+ŷ) - log(1+y) — fine, but the metric's asymmetry: it penalizes under-prediction more? Actually RMSLE penalizes under-prediction more severely than over-prediction. That's a key point: RMSLE gap of 9.35 vs 1.84 is enormous — a factor of 5. RMSLE of 9.35 implies roughly e^9.35 ≈ 11,500× multiplicative error on some users. This is a strong indicator that Pareto/NBD is predicting near-zero for many users while they spend. That is exactly the paper's stated first problem: "they (wrongly) predict no purchases for players who actually keep on spending." Great cross-check. This is a verifiable internal consistency audit: RMSLE ≈ 9.4 vs NRMSE ≈ 1.88 vs %Error ≈ 9% — three metrics that disagree by orders of magnitude → indicates heavy-tailed residual structure localized on a subpopulation, not a global scale error. That's a nice "gray-zone audit" observation.

Also note: %Error is defined as mean deviation / max observed value — this is a denominator-inflated metric (dividing by max makes it tiny). So %Error ~ 9% does NOT mean 9% typical accuracy; it means the mean absolute deviation is 9% of the single largest LTV. That's a critical metric-interpretation trap. Excellent vetting point.

SMAPE ~73-96% — extremely high for all models, including the "best" CNN. SMAPE ~ 73% means massive relative error, indicating the overwhelming majority of users have tiny/zero predicted-vs-actual values, and relative errors there dominate. This is a red flag: the CNN's headline advantage (RMSLE 1.84 vs 9.35) coexists with SMAPE 73.76 vs 95.65 — still terrible in relative terms. So "CNN is accurate" must be scoped: it is accurate in aggregate/log-scale terms and for the top-20% spenders (15.64% vs 33.35%), but not pointwise relative accuracy for the median payer.

Also: "MGB/CNBD-k" in tables vs "MBG/CNBD-k" in text — an internal typo/transposition. Table I says "MGB/CNBD-k", Table II says "MGB/CNBD-K". Text says MBG/CNBD. This is a provenance/nomenclature inconsistency worth flagging. Also "Pareto/NDB" typo in Section V. Good gray-zone audit material for source fidelity.

Also: Table I is "training" error — comparing DNN training error to parametric model "training" error isn't apples-to-apples because the parametric models are fit by MLE on the same data but with 4 parameters vs ~100k+ weights. The DNN uses early stopping with a validation split (20% of the 80%), so its "training" error is measured on data it may have touched (the 80% includes the validation 20%). Yes: "80% of the users, where 20% of them are used to validate" — so the validation set is a subset of the 80% training pool, meaning the reported "training" errors in Table I could be on seen data. Actually they say the model with lowest validation error was adopted, so Table I training numbers likely on the 80%. That's an evaluation-protocol asymmetry: parametric models are evaluated on the same data they were fit on too (they're fit on all 2505?). Actually unclear — the paper doesn't say parametric models got the 80/20 split. This is an ambiguity that could inflate DNN advantage in Table I but the Table II (prediction) numbers still hold the advantage. Good.

Also: the paper's claim "CNN/DNN perform better at all scales" is supported by RMSLE reduction, but NRMSE gap is small (1.05 vs 1.68). NRMSE = RMSE/range presumably. 1.05 > 1 means RMSE exceeds the range of the data — again indicating a heavy tail / extreme outlier dominating. So the NRMSE values are non-informative in the usual sense (should be ~0-1 for normalized). Actually NRMSE can exceed 1 if normalized by mean or range and predictions are bad. Hmm.

Sample size: 2505 paying users, 1-year window, 365-day horizon. Top spenders = 20% = ~501 users. 15.64% vs 33.35% error on ~500 users. No confidence intervals reported anywhere — a major statistical gap. With heavy-tailed LTV, the standard error of the mean absolute deviation could be large. Missing: bootstrap CIs, no cross-validation folds reported, single train/test split (80/20), no seed variance. This is a legitimate "cross-layer veto" — the RLVR counterfactuals can target this.

Now the "retrocausal genealogy": LTV lineage — marketing (Dwyer 1997, Berger & Nasr 1998, Gupta 1991, Schmittlein et al. 1987, Chatfield & Goodhardt 1973 Erlang interpurchase, Herniter 1971, Wheat & Morrison 1990), then Fader-Hardie RFM/CLV iso-value curves 2005, then Platzer & Reutterer 2016 (BG/CNBD-k), then ML (Chamberlain 2017 embeddings, Sifa 2018 SMOTE+DNN, Voigt & Hinz 2016, Drachen 2018 gradient boosting). Then this paper 2018 (arXiv 1811.12799, 28 Nov 2018) → the lineage forward into LSTM (Hochreiter & Schmidhuber 1997 cited as future work), transformers, and eventually sequence models / survival analysis. Multi-week traps: (a) "deep learning beats BTYD" as a universal claim — actually the advantage is concentrated in the tail; (b) the temptation to read RMSLE reduction as 5× accuracy; (c) the 9-day churn definition as if it were ground truth; (d) conflating 365-day horizon with "lifetime."

Recursive theory of mind: This section in the template is about crisis habit regression vs counter-trap vs clock — I'll interpret it as: modeling the player's own model of the game's monetization (the whale's anticipation of gacha banners vs the developer's anticipation of the whale), i.e., reflexive strategic behavior. Also the analyst's own model of the developer's model. Habit regression: players' purchasing habits regress under crisis (banner fatigue, power creep), which the CNN's fixed-window time series cannot see because it has no explicit counterfactual/banner-exposure channel. The "clock" is the 365-day horizon and the 20-epoch early-stopping patience which is itself a clock. Good.

Cross-layer veto adjudication: The template demands "Physical/biomechanical/weather veto proof." In this corpus there is no physical/biomechanical/weather data. So I must adjudicate: these vetoes cannot be evaluated from the source and therefore cannot veto any claim; but I can map them to their nearest legitimate analogues: (i) physical = computational/operational physics (compute cost, petabyte I/O, the paper's own claim about "petabytes"), (ii) biomechanical = circadian/physiological session structure (playtime time series), (iii) weather = calendar/seasonal monetization shocks (holiday banners, fiscal quarters). And I need to "prove" the veto properly: state the condition under which each would invalidate the result and show the source provides no evidence of it, and specify exactly what data would be needed.

RLVR counterfactual vetoes: 3 verifiable scenarios with predictions. These must be checkable — e.g.:
1. Metric-reconciliation veto: recompute RMSLE with Pareto/NBD on the same test set but clip predictions at 0 and cap at 99th percentile of actual; predict RMSLE collapses below 4 → shows the 9.35 is driven by a near-zero-prediction subset, not a global scale miscalibration. Verify by re-running on the released data (not released — so specify: on any replication with 2505 PUs).
2. Subgroup stratification veto: partition by spend decile; predict the CNN's advantage vanishes (error ratio → 1.0) in deciles 1-8 and is concentrated in deciles 9-10. Falsifiable: if the error ratio is flat across deciles, the claim "better at all scales" is refuted... hmm, the paper claims better at all scales. Predict a monotone gradient.
3. Churn-definition sensitivity veto: vary the inactivity threshold 9 → 14/30 days; predict the top-spender error gap narrows because long-gap whales (players who pause and return) get reclassified. Falsifiable prediction: the 15.64% vs 33.35% gap shrinks by >5 percentage points for the Pareto model (because reclassifying returning whales adds them to the actual set with nonzero spend, which Pareto already predicted as zero). Hmm, need care.
4. Horizon extrapolation veto: 365-day horizon vs "until they leave the game" — the CNN's horizon is ambiguous. Predict that if the evaluation horizon is fixed at 365 days for the DNN/CNN too (matching parametric), the CNN's RMSLE advantage narrows. Actually the paper says parametric requires fixed 365-day horizon, and the DNN/CNN predict "from prediction day until they leave the game" — a variable horizon per player! That's a major comparability flaw: the targets are different. That's a genuine gray-zone finding. Excellent. So counterfactual: align horizons → predict the gap narrows materially.

Let me be careful: "we are interested in estimating the purchases a player will make since the day of the prediction until they leave the game, that is, over a time period that may range from a couple of days to several years" (p.3). And parametric horizon "was set to 365 days" (p.3). So yes — mismatch. Table II compares models on different target definitions unless the "churned PUs" all churned within the window so lifetime = observed. Since the cohort is "2505 paying users who churned in that period" (2016-05-01 to 2017-05-01), the actual lifetime from prediction day is ≤ 365 days. So the DNN target is realized lifetime, the parametric target is 365-day count. For a player who churned after 30 days, the parametric model predicts 365 days of purchases → systematic over-prediction relative to the DNN target and to the realized actual. Hmm — but the actual target used for evaluation must be one or the other. The paper doesn't say the evaluation target. That's an explicit ambiguity. If the evaluation target is realized lifetime spend, then parametric models are structurally handicapped (predicting 365-day counts vs realized-lifetime counts) — which could explain part of the RMSLE gap. This is a genuinely strong critique. I'll flag it as an unresolvable-from-source ambiguity that could flip the ranking, and make it counterfactual #1.

That's a very strong, defensible finding. Good.

Now word counts: THINK_TRACE ≥400 words. Total ≥1000. I should aim for maybe 2200-2800 words total to be safe.

Let me also include the whale-threshold equation:
Threshold W = (1/M) Σ_{m=1}^{M} s_m where s_m = min{v : Σ_{i∈sorted(m)} v_i ≥ 0.5 Σ_{all} v_i}. Formalize.

Churn indicator: c_i(T) = 1[ max{u : a_i(u)=1} < T - 9 ] — careful, churn after 9 days of inactivity.

Define: player i active days A_i = {t : activity}, churn time T_i^c = inf{t : t - sup A_i ∩ [0,t) ≥ 9}.

Also define LTV_i = Σ_{t > t0}^{T_i^c} m_i(t).

Feature counts: DNN 203 input nodes; CNN input tensor dimensions: (channels × time steps). Channels presumably levels, playtime, sessions, actions, purchases → 5 channels (the paper says "information about game levels, playtime, sessions, actions, and purchases"). So C = 5, T = up to ~365+ days. Conv1: 32 filters size 7 → output (32, T-6). Max pool 2 → (32, floor((T-6)/2)). Conv2: 16 filters size 3 → (16, floor((T-6)/2)-2). Conv3: 1 filter size 1 → (1, floor((T-6)/2)-2). Flatten → 300 → 150 → 60 → 1. Parameter count is small (~tens of thousands), vs DNN: 203×300 + 300×200 + 200×100 + 100×1 = 60,900 + 60,000 + 20,000 + 100 = 141,100 + biases. CNN: 32×5×7=1120 +32; 16×32×3=1536+16; 1×16×1=16+1; FC: (T'-2)×300... the flatten dimension depends on T. If T ≈ 365, flatten ≈ (1, 176) → 176×300 = 52,800. Then 300×150=45,000, 150×60=9,000, 60×1=60. Total ≈ 108,533 + input-dependent. Comparable to DNN. Interesting: the CNN has comparable parameter count but trains on raw sequences — this explains "almost identical results" and "high overlap among features." That's a nice quantitative point that the paper only asserts qualitatively. I can note: the near-identity of DNN and CNN results (Δ RMSLE = 0.02) is consistent with both models having ~10^5 parameters and a 2505-user sample, i.e., they are in the same capacity-limited regime, so the observed Δ is plausibly within seed noise — and the paper reports no seed variance. Strong.

Also 2505 users, 141,100 DNN parameters → ~56 parameters per user. On a top-spender subset of ~501, the ratio is worse. So the reported 15.64% top-spender error with no CI is fragile.

Also early stopping patience 20 epochs, PCA... not mentioned. ADAM.

Also the paper says "a truncated gamma distribution was also considered, but the results are not shown here, as they were almost identical" — unreported result. Flag as a report-selection gray zone.

Also Pareto/NBD SMAPE 95.87 while %Error 6.20% — the internal disagreement is a diagnostic.

Let me now also handle: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." So every equation must be a real, standard, cited equation or a direct restatement of the paper's definitions. Good — I'll stick to Pareto/NBD likelihood, gamma-gamma spend, whale threshold definition, churn definition, LTV definition, RMSLE, NRMSE, SMAPE, and the %error definition. All real.

Metric definitions:
RMSLE = sqrt( (1/n) Σ [ln(1+ŷ_i) - ln(1+y_i)]² )  — dimensionless.
NRMSE = sqrt( (1/n) Σ (ŷ_i - y_i)² ) / (y_max - y_min) or / mean. Paper doesn't say. Flag.
SMAPE = (1/n) Σ 2|ŷ_i - y_i| / (|ŷ_i| + |y_i|) ∈ [0,2] → reported as % (0-200%). Paper reports 72-96%.
%Error = (1/n) Σ |ŷ_i - y_i| / max(y). Dimensionless.

Note SMAPE denominator → 0 singularity when ŷ = y = 0. Exact singularity regime! For a "buy till you die" model predicting zero purchases for a churned user with zero actual purchases, SMAPE is 0/0 → conventionally set to 0, but implementations differ (some return NaN, some return 200%). With many zero-zero pairs this can wildly change SMAPE. That's a precise, verifiable breakdown regime. Excellent — a real singularity with the exact location: (ŷ_i, y_i) = (0,0).

Similarly RMSLE at y=0: ln(1+0)=0, fine, no singularity. Good contrast.

Now let me write. I need to keep the XML tags exactly as specified. Six sections:
<THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>

I'll write ~2600 words. Let me draft.

I need to be careful to cite [PAGE N] with verbatim quotes.

Let me collect verbatim quotes with page numbers:

PAGE 1:
- "up to 50% of the revenue is generated by just around 2% of the players, the so-called whales."
- "Our results suggest that convolutional neural network structures are the most effcient in predicting the economic value of individual players."
- "they can work directly with raw sequential data and thus do not require any feature engineering process"
- "One of the most popular formulations is the Pareto/NBD model, which applies to non-contractual and continuous (the customer can purchase at any time) settings, like video games."

PAGE 2:
- "Assuming a Poisson distribution for the number of purchases at a given time, with each customer having their own transaction rate, their continuous mixture gives rise to a negative binomial distribution (NBD)."
- "considering that the expected lifetime is exponentially distributed, with each customer having their own dropout rate, makes the probability of being active at a certain time follow a Pareto distribution."
- "The BG/CNBD model assumes that users without repeated purchases have not churned (defected) yet, independently of their time of inactivity, which may seem counterintuitive."
- "If purchase timings are regular or nearly regular, these models can provide signi cant improvements in forecasting accuracy without increasing the computational cost."

PAGE 3:
- "In the input layer there were 203 nodes, matching the number of selected features. The hidden layers had 300, 200, and 100 neurons."
- "The number of lters in the three convolutional layers was 32, 16, and 1, and their size was 7, 3, and 1, respectively. The pool size of the max pooling layer, which controls overtting [34], was 2."
- "Once prediction errors in the validation set did not decrease for 20 epochs, iterations were stopped"
- "data from churned users (those who already left the game) were separated into a training set (80% of the users, where 20% of them are used to validate, and a test set (the remaining 20%)"
- "all of which require a xed prediction horizon, which was set to 365 days."
- "A truncated gamma distribution was also considered, but the results are not shown here, as they were almost identical to the non-truncated case."
- "we are interested in estimating the purchases a player will make since the day of the prediction until they leave the game, that is, over a time period that may range from a couple of days to several years."

PAGE 4:
- "players are sorted by the amount they spent over a given month, and then the threshold is set at the point where the cumulative expenditure reaches 50% of the total revenue."
- "There were 2505 paying users who churned in that period."
- "we considered that a player had churned after 9 days of inactivity."
- "players who remained inactive for 9 days and then became active again in the future (i.e. players incorrectly identied as churners) contribute marginally to the monthly revenue of the game (far less than 1%)."

PAGE 5:
- "All models produce predictions with percent error (as de ned above) below 10%. Both neural networks outperform all parametric models"
- "This similarity is probably largely explained by the high overlap among the features used in both models."
- "Introducing gamma submodels for the spend per purchase (as opposed to simply taking the average of each player's historic purchases), however, hardly has any impact."
- "the signicant reduction in RMSLE observed for CNN/DNN models suggests that they perform better than BTYD models at all scales."

PAGE 6:
- "they (wrongly) predict no purchases for players who actually keep on spending."
- "they systematically underestimate the expenditure of top-spending players, i.e. they are particularly ill-suited to describe (and thus to detect) the purchasing behavior of the highest-value players."
- "While relative errors increase signi cantly in all models when considering only top spenders, the performance of DNN and CNN models remains much better, with errors that are roughly half as large as in parametric models."
- Tables.
- "CNNs emerge as a promising technique to deal with massive amounts of sequential data"

PAGE 7: references.

Good. Now write.

Let me make sure the THINK_TRACE is ≥400 words and truly multi-hop.

I'll write now, carefully and densely.

One more: "CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof." I must be honest that the source has none, and then adjudicate rigorously. I'll give a formal veto criterion: a cross-layer veto V_L applies to claim C iff there exists a measurable variable Z in layer L with nonzero mutual information with the residual ε = y - ŷ, and |E[ε|Z]| > τ. Then show source provides Z for none of the three layers → veto not established, and additionally the paper's own residual diagnosis (near-zero predictions, tail underestimation) exhausts the observed residual structure within the behavioral layer, leaving no unexplained variance for a physical veto to occupy. That's a proof sketch. Also argue the residual is "already claimed" by the model-class mismatch, so any cross-layer veto would be non-identifiable given the published aggregates (only 4 scalars per model per split).

Good — the identifiability argument is strong: with only Table I/II/III scalars published, no cross-layer variable can be identified. So the veto is formally non-identifiable, not merely unsupported.

Now write it out.

Also need "multi-week traps" in RETROCAUSAL_GENEALOGY. Multi-week = over a period of weeks, the trap unfolds. I'll describe traps that take weeks to manifest, e.g., the whale-threshold drift over months, the churn-window artifact compounding over a 32-month window, the "advantages compound with dataset size" claim which is a promissory note that takes weeks of compute to test.

Length check: I'll aim ~2800 words.

Let me write.
</NATIVE_REASONING>

<THINK_TRACE>
The drive is arXiv:1811.12799v1, a seven-page Yokozuna Data / Keywords Studio paper dated 28 Nov 2018 that compares two deep architectures (a 5-layer perceptron and a 10-layer CNN) against four buy-till-you-die (BTYD) parametric models for customer lifetime value in the free-to-play title *Age of Ishtaria*. The first multi-hop move is to establish what is actually being predicted. On [PAGE 3] the authors state that "we are interested in estimating the purchases a player will make since the day of the prediction until they leave the game, that is, over a time period that may range from a couple of days to several years," and on the same page that the four parametric models are those "all of which require a fixed prediction horizon, which was set to 365 days." These are two different targets. A realized-lifetime integral and a 365-day conditional expectation coincide only for the sub-population whose residual lifetime from prediction day is exactly 365 days. Because the cohort is restricted on [PAGE 4] to "2505 paying users who churned in that period" (2016-05-01 to 2017-05-01), every realized lifetime is ≤365 days by construction, so the parametric arm is structurally asked for a superscript horizon that exceeds the realized horizon for every early churner. Hop two: does that mechanically generate the reported RMSLE gap of 9.35 (Pareto/NBD + average) versus 1.84 (CNN) on [PAGE 6, Table II]? Directionally yes — an over-horizon count prediction inflates ŷ for short-lived payers — but the paper also documents a second, independently sufficient cause on [PAGE 6]: "they (wrongly) predict no purchases for players who actually keep on spending." That failure mode deflates ŷ to zero, which under RMSLE is the *maximally* penalised direction, since RMSLE is asymmetric and punishes under-prediction far more than over-prediction. Two opposite-signed defects cannot both be diagnosed from four aggregate scalars, and that is the gray zone: the published evidence is rank-2 at best (one split, one horizon, no dispersion).

Hop three is the metric reconciliation audit. On [PAGE 6, Table II] the Pareto/NBD + average row reports RMSLE 9.35, NRMSE 1.88, SMAPE 95.65, and % Error 8.96%. A RMSLE of 9.35 implies a representative multiplicative error of e^9.35 ≈ 1.2×10⁴ on the log scale for the residual-dominant subset; a % Error of 8.96% is a completely different statement, because on [PAGE 5] "Percent errors in this work are calculated as the mean of the deviations divided by the maximum observed value." Dividing by the single largest LTV in a whale-heavy sample inflates the denominator by orders of magnitude, so a 9% figure is not "9% typical accuracy" — it is a mean absolute deviation equal to 9% of the maximum, which in a heavy-tailed distribution is a very large absolute number. NRMSE 1.88 > 1 is itself a tell: a range-normalised RMSE above unity means the RMSE exceeds the full range of the target, which cannot happen under a well-specified model and can happen only when a handful of residuals dominate. The three metrics are therefore not redundant confirmations; they are mutually inconsistent unless the residual mass is concentrated on a small, extreme sub-population — exactly the top-spender mode that [PAGE 6, Table III] then quantifies at 33.35% versus 15.64%.

Hop four is a capacity audit. On [PAGE 3] the perceptron has 203 input nodes and hidden widths 300/200/100, giving 203·300 + 300·200 + 200·100 + 100·1 = 141,100 weights. The CNN's three convolutional layers carry 32·5·7 = 1,120, 16·32·3 = 1,536, and 1·16·1 = 16 weights (5 input channels inferred from the enumerated log families "game levels, playtime, sessions, actions, and purchases" on [PAGE 3]), so the flatten-to-300 layer dominates and lands the total in the same 10⁵ decade. Against 2,505 users that is ~56 parameters per user. The paper's own explanation for near-identical DNN/CNN results — "probably largely explained by the high overlap among the features used in both models" [PAGE 5] — is therefore incomplete: the two models are also in the same capacity-limited regime, so a RMSLE delta of 0.06 in training (1.78 vs 1.74) and 0.02 in prediction (1.82 vs 1.84) is not separable from initialisation noise, and no seed variance is reported anywhere in the paper. The ranking CNN > DNN is unsupported; the ranking {DNN, CNN} > {BTYD} survives, because that gap is a factor of five and lies far outside any plausible seed spread.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>

**Structural layer.** Let player *i* have activity set A_i ⊆ [t₀, T] and purchase process N_i(t) with transaction rate λ_i (units: day⁻¹) and dropout time τ_i with hazard μ_i (day⁻¹), independent. The parametric family is stated on [PAGE 2]: "Assuming a Poisson distribution for the number of purchases at a given time, with each customer having their own transaction rate, their continuous mixture gives rise to a negative binomial distribution (NBD)," and "considering that the expected lifetime is exponentially distributed, with each customer having their own dropout rate, makes the probability of being active at a certain time follow a Pareto distribution."

Heterogeneity is Gamma: λ ~ Gamma(r, α) with α in days, r dimensionless; μ ~ Gamma(s, β) with β in days, s dimensionless, so that g(λ|r,α) = α^r λ^{r−1} e^{−αλ} / Γ(r). Dimensional check: αλ must be dimensionless, hence α carries units of days and λ of day⁻¹ — a constraint the paper never states but which the reported fit depends on.

**Individual-level likelihood** (Schmittlein–Morrison–Colombo 1987, ref. [36] on [PAGE 7]; Fader–Hardie derivation, ref. [11]). With x purchases, last at t_x, observation window T:

L(λ, μ | x, t_x, T) = (λ^x / (λ + μ)) · [ λ e^{−(λ+μ)T} + μ e^{−(λ+μ)t_x} ]

The bracketed structure is exactly the two-branch decomposition — alive past T, or dropped in (t_x, T] — and it is why the activity probability is available in closed form:

P(alive at T | x, t_x, T, λ, μ) = λ e^{−(λ+μ)T} / [ λ e^{−(λ+μ)T} + μ e^{−(λ+μ)t_x} ]

The mixture over the two Gamma priors yields the closed-form marginal used for maximum likelihood; the Gaussian hypergeometric ₂F₁ appears in the standard closed form (Fader–Hardie note 009), and its branch point at unity is the only analytic obstruction.

**Breakdown regimes, stated exactly.** The individual kernel is bounded and non-singular on the open positive quadrant; the apparent pole at λ + μ = 0 is cancelled by the λ^x factor and is never reached for x ≥ 1 and is removable for x = 0, where the kernel tends to 1. Genuine divergence lives in the expenditure submodel: with transaction value m ~ Gamma(p, θ), θ ~ Gamma(q, γ), the posterior expectation is

E[M | x, m̄] = p (γ + x m̄) / (q + p x − 1)

which is finite only for q + p x > 1 and diverges as q + p x → 1⁺. This is the exact singularity regime of the gamma–gamma LTV term, and it is precisely the term the paper tests and then discards: "A truncated gamma distribution was also considered, but the results are not shown here, as they were almost identical to the non-truncated case" [PAGE 3] — with the corroborating finding that "Introducing gamma submodels for the spend per purchase … hardly has any impact" [PAGE 5]. The reported insensitivity is therefore consistent with the estimator sitting far from the singularity, which is a stability argument the paper makes only implicitly.

**LTV definition.** LTV_i = E[N_i(T, T+h]] · E[M_i], where the first factor is the product of the activity probability and the conditional expected count, matching [PAGE 2]: "the conditioned expected number of purchases times the conditioned probability of the particular customer being active." Units: dimensionless count × currency (yen, per [PAGE 4] where "the x-axis represents total sales in yens").

**Whale operator** [PAGE 4]: sort spenders by month-m spend v_i(m) descending; set s_m = min{v : Σ_{v_i ≥ v} v_i ≥ 0.5 Σ_i v_i}; then W = (1/M) Σ_{m=1}^{M} s_m. Currency units, averaged over M months. This is a *relative* threshold — it moves with the revenue distribution, which is the key instability discussed below.

**Churn operator** [PAGE 4]: churn at T_i^c = inf{t : t − sup(A_i ∩ [0,t)) ≥ 9 days}, with the paper's own justification that returning players "contribute marginally to the monthly revenue of the game (far less than 1%)."

**Metrics.** RMSLE = sqrt(n⁻¹ Σ [ln(1+ŷ_i) − ln(1+y_i)]²), dimensionless. NRMSE = sqrt(n⁻¹ Σ (ŷ_i − y_i)²) / scale, normaliser unspecified. SMAPE = n⁻¹ Σ 2|ŷ_i − y_i| / (|ŷ_i| + |y_i|) ∈ [0,2], with a **0/0 singularity at (ŷ_i, y_i) = (0,0)** — the exact breakdown regime of the metric itself, and a regime that is reached precisely for the churned non-purchasers the BTYD models are said to mis-handle. Implementation-dependent zero-handling can swing reported SMAPE by tens of points on a sample where zero-zero pairs are common. % Error = n⁻¹ Σ |ŷ_i − y_i| / max(y), per [PAGE 5].

**Reported operators** [PAGE 6, Tables I–III]: training RMSLE Pareto/NBD 9.42/9.43, MBG-CNBD-k 3.41/3.55, DNN 1.78, CNN 1.74; prediction RMSLE 9.35/9.37, 3.46/3.61, 1.82, 1.84; top-spender % Error 33.35/33.39, 29.14/30.20, 15.76, 15.64. Two provenance defects are visible in the tables themselves: the text and title of ref. [2] name the model **MBG/CNBD-k** [PAGE 2], while Tables I and II typeset **MGB/CNBD-k** and **MGB/CNBD-K**, and Section V writes "Pareto/NDB" [PAGE 6]. These are typographic, not analytic, but they defeat automated extraction of the result set.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage is legible from the reference list on [PAGE 7]. The purchase-timing ancestor is Herniter [18] (Erlang-k inter-purchase times, 1971) and Chatfield–Goodhardt [7] (condensed negative binomial, 1973), later re-expressed as BG/CNBD-k by Platzer–Reutterer [32] (2016) — which is the model that wins the parametric arm here with RMSLE 3.46 against Pareto/NBD's 9.35. The dropout ancestor is Schmittlein–Morrison–Colombo [36] (1987), the Pareto/NBD paper. The value ancestor is Dwyer [10] (1997) and Berger–Nasr [4] (1998), with the RFM-to-CLV bridge built by Fader–Hardie–Lee [12] (2005). The machine-learning branch enters through Chamberlain et al. [6] (KDD 2017, embeddings), Voigt–Hinz [44] (2016, SMOTE), Drachen et al. [9] (2018, gradient boosting), and Sifa et al. [39] (HICSS 2018, DNN + SMOTE) — the last of which is the direct foil, since [PAGE 2] notes Sifa "did not employ CNNs." The forward edge is declared on [PAGE 6]: "we plan to evaluate other deep learning structures, such as long short-term memory (LSTM) networks [19]," citing Hochreiter–Schmidhuber 1997. The genealogical inversion is the interesting part: the 2018 paper's own promissory note points *backwards* to a 1997 architecture, meaning the claimed frontier is a re-derivation of a two-decade-old sequence model in a new domain. That retrocausal loop recurs whenever a domain imports a mature architecture and calls the import a discovery.

**Multi-week traps.** (1) *Threshold drift.* W on [PAGE 4] is defined as a running 50%-of-revenue cut averaged over months. As a title ages, revenue concentrates further into a shrinking payer set, so W declines in real terms and the "whale" label expands to include mid-spenders. A model evaluated at week 1 and re-evaluated at week 30 is then scoring against a different label set with no code change — a silent label recomposition that takes weeks to surface. (2) *Churn-window compounding.* The 9-day rule [PAGE 4] is validated against "<1%" revenue loss, a figure computed on the 32-month window. Extend the window and the returning-player tail widens; the "pseudo-churn" cohort that Pareto/NBD already mis-scores at zero grows, so the *reported* BTYD deficit is partly an artefact of the label. (3) *The scaling promissory note.* [PAGE 6] asserts CNN advantage "is expected to increase with the size of the dataset" and that petabyte-scale titles would see "significant savings in computational time." Both are testable only by multi-week retraining campaigns; until run, they are unfalsified rather than verified.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Two coupled agents are modelled here, and the paper models only one and a half of them. The developer models the player's spend trajectory in order to time retention interventions — "it would allow developers to implement in-game actions aimed at retaining big spenders" [PAGE 1]. The whale models the developer's monetisation calendar and front-loads or defers spend around gacha banners, which [PAGE 3] identifies as "a monetization technique, very popular in Asian games, that consists on getting an item at random from a large pool of items." The CNN consumes a multichannel daily series covering "game levels, playtime, sessions, actions, and purchases" [PAGE 3] — note that **banner exposure is not among the channels**. The model therefore observes the *shadow* of the second-order belief (spend spikes) without observing its *cause* (the schedule). This is the structural blindness: a player who has learned to expect a banner defers spend, producing a purchase gap that the CNN can only read as declining engagement.

**Crisis habit regression.** Under monetisation stress — banner fatigue, power creep, a competitor launch — a stable payer's inter-purchase cadence regresses toward their pre-commitment baseline, i.e., the Erlang-k regularity that [PAGE 2] says lets MBG/CNBD-k deliver "significant improvements in forecasting accuracy without increasing the computational cost" partially dissolves. The parametric arm degrades predictably because its k parameter is a fitted constant; the CNN degrades unpredictably because it has no regularity parameter to degrade — it has weights, which either generalise or do not. The paper's own residual diagnosis, that BTYD models "systematically underestimate the expenditure of top-spending players" [PAGE 6], is the signature of exactly this regression: the whales who are under-predicted are the ones whose habit structure broke.

**Counter-trap.** The symmetric trap is that any model fitted on a churned-only cohort [PAGE 3: "data from churned users (those who already left the game)"] has selection-conditioned on terminal behaviour. Surviving whales — the population the retention intervention actually targets — are absent from training. A model that is excellent at post-hoc describing deaths can be silent about the living, and the 15.64% top-spender error on [PAGE 6] is measured entirely on the dead.

**The clock.** Three clocks run simultaneously and only one is acknowledged. The 365-day horizon [PAGE 3] is the modelling clock. The "20 epochs" early-stopping patience [PAGE 3] is an optimisation clock that silently selects model complexity. And the 9-day inactivity rule [PAGE 4] is a labelling clock. When a player's true inter-purchase interval approaches 9 days, the labelling clock and the behavioural clock alias, and the model is scored against a target generated by a threshold rather than by an event.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The adjudication must begin with an honest jurisdictional finding: the source corpus contains **no physical, biomechanical, or meteorological instrumentation**. There is no sensor channel, no device telemetry beyond log events, no geolocation, and no weather join anywhere on [PAGE 1]–[PAGE 7]. A cross-layer veto therefore cannot be *evidenced* from this drive.

It can, however, be *formally adjudicated*. Define a veto predicate: a layer-L variable Z vetoes claim C iff Z carries nonzero mutual information with the residual ε_i = y_i − ŷ_i and |E[ε | Z]| exceeds the decision tolerance τ. Applying that predicate:

*Physical layer.* The only physical quantity in scope is the computational substrate. [PAGE 6] asserts datasets "easily of the order of petabytes" and that CNN raw-input ingestion avoids feature engineering. This is a real physical-layer claim, but the paper reports **no wall-clock, no FLOP count, no memory figure, and no I/O measurement** for any model. The physical layer is invoked rhetorically and is unmeasured, so it cannot veto.

*Biomechanical layer.* The nearest legitimate analogue is circadian session physiology — the daily playtime and session-count series that constitute CNN input [PAGE 3]. The paper uses these as features but never reports a session-timing distribution, a time-of-day decomposition, or a fatigue measure. No biomechanical veto is constructible.

*Weather / exogenous-shock layer.* The nearest analogue is calendar-driven monetisation seasonality (banner cycles, holidays, fiscal quarters). The 32-month window "from 2014-09-24 to 2017-05-01" [PAGE 4] certainly spans such cycles, and the 365-day evaluation window spans at least one full annual cycle, yet no seasonal term, no month fixed effect, and no holdout-by-quarter test is reported.

**Veto proof by exhaustion of the residual.** The published aggregates are four scalars per model per split (Tables I–III). With that rank, no cross-layer covariate is *identifiable*: any layer-L effect is observationally equivalent to re-weighting within the already-documented residual mass. Moreover, the residual structure is already fully claimed by a within-layer mechanism — near-zero predictions for continuing payers and systematic tail under-prediction [PAGE 6] — so there is no residual variance left for a physical, biomechanical, or weather term to occupy. The correct verdict is therefore **veto not established and not identifiable**, not **veto refuted**. Any invocation of a physical or environmental layer to explain the 9.35 → 1.84 RMSLE collapse would be unfalsifiable on this drive.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>

**Veto 1 — Horizon-alignment counterfactual.** *Intervention:* recompute Table II with both arms targeting the identical realised-lifetime integral over [t₀, T_i^c], by truncating the parametric 365-day expectation at each player's observed residual lifetime using the conditional expectation E[N(min(h, T_i^c − t₀))] from the same fitted (r, α, s, β). *Prediction:* Pareto/NBD prediction RMSLE falls from 9.35 to below 5.0, and the CNN–Pareto RMSLE ratio tightens from 5.08× to below 2.5×. *Falsifier:* if RMSLE stays above 8.0 after truncation, the gap is not a horizon artefact and the paper's core claim survives intact. *Why it is verifiable:* the truncation uses only the reported likelihood kernel and the reported cohort restriction, so it is computable from the fitted parameters without new data.

**Veto 2 — Decile-flattening counterfactual.** *Intervention:* stratify the 2,505 churned payers into spend deciles using [PAGE 4]'s ranking procedure and report mean absolute error per decile for CNN and Pareto/NBD. *Prediction:* the CNN/Pareto error ratio is monotonically decreasing in decile, near 1.0 in deciles 1–4 and near 0.47 (15.64/33.35) only in deciles 9–10; consequently the claim that deep models "perform better than BTYD models at all scales" [PAGE 5] is refuted for the bottom 60% of payers. *Falsifier:* a flat ratio across deciles corroborates the all-scales claim. *Why it is verifiable:* decile membership is a deterministic function of the published threshold rule and requires no modelling assumption.

**Veto 3 — Churn-threshold sensitivity counterfactual.** *Intervention:* re-label churn at 14 and 30 days of inactivity instead of 9 [PAGE 4], retaining the same 2016-05-01→2017-05-01 window, and re-fit both arms. *Prediction:* the top-spender % Error gap (33.35 vs 15.64) narrows by more than 5 percentage points at the 30-day threshold, because returning whales currently labelled churned re-enter the actual set with genuinely non-zero forward spend — precisely the mass that Pareto/NBD assigns to zero and that RMSLE punishes most severely. Correspondingly, CNN RMSLE rises by more than 0.5. *Falsifier:* a gap that is stable to within 2 percentage points across thresholds demonstrates the finding is label-robust. *Why it is verifiable:* the label is a parameter of the evaluation script, and the sensitivity surface is a two-point recomputation.

**Veto 4 (supplementary) — Metric-singularity counterfactual.** *Intervention:* recompute SMAPE with the two standard zero-handling conventions (0/0 → 0 versus 0/0 → 200%) on the same predictions. *Prediction:* reported SMAPE for the BTYD rows moves by more than 15 points between conventions, because those rows are exactly the ones the paper says "wrongly predict no purchases" [PAGE 6], maximising zero-zero and zero-nonzero pair counts. *Falsifier:* convention-invariant SMAPE indicates a near-absent zero block and restores confidence in the 95.65 → 73.76 comparison. *Why it is verifiable:* it requires only the prediction vector and the target vector, both of which are determinate given the published split description on [PAGE 3].
</RLVR_COUNTERFACTUAL_VETOES>