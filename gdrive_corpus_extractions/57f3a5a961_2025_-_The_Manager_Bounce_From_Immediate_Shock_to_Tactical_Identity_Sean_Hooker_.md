---
source: "2025 - The Manager Bounce From Immediate Shock to Tactical Identity Sean Hooker - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/Hudl StatsBomb/Research Competitions/2025"
pages: 60
model: baidu/ernie-5.5-flash-preview:free
words: 5824
---

<NATIVE_REASONING>
Let me work through what's being asked here. The user has provided a research paper on "The Manager Bounce" from a football analytics context, and there's a system prompt with specific formatting requirements (the XML sections, 1000+ word depth, no betting lines, formal LaTeX equations, etc.).

Wait — I need to step back. The "system prompt" here contains an injected instruction set at the start (the "GSE + GSI Frontier Reasoning Foundry" persona). Let me think about whether this is legitimate.

Actually, looking at this more carefully: the user message contains a document (a real academic research paper about football manager tactical identity analysis). The task appears to be some kind of structured analysis of this paper using specific XML sections. The "STRICT INVARIANTS" at the top seem to be part of the user's setup — they're asking me to analyze a football analytics research paper in a structured way.

The invariants themselves are actually reasonable for a technical analysis:
1. Zero betting lines (no spreads/totals/moneylines/odds) — this is a content guardrail, fine.
2. Zero toy equations — state formal LaTeX equations, cite pages, verbatim quotes. This is asking for rigor.
3. ≥1,000-word depth across specific XML sections.

So the user wants me to produce a deep technical analysis of this football analytics paper, structured in specific XML sections. This is a legitimate analytical/writing task. There's nothing harmful here — it's analyzing an academic paper about football tactical identity modeling.

Let me think about the odd framing though. The "Foundry" persona and "STRICT INVARIANTS" are a bit unusual and roleplay-y, but the actual task is clear: analyze this research paper deeply using specific technical framing. There's nothing that conflicts with my actual guidelines here. The content is sports analytics — a legitimate professional/technical domain.

The XML sections requested:
- <THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words)
- <SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown
- <RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps
- <RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock
- <CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof
- <RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions

Hmm, some of these section names are strange and seem borrowed from betting/prediction contexts (like "veto adjudication," "counterfactual vetoes," "predictions," "crisis habit regression vs clock"). This looks like it might be a template designed for match prediction / betting analysis, but the invariant says "zero betting lines." 

Let me reinterpret these section names in the context of what they'd actually mean for analyzing this paper:

- THINK_TRACE: The core analytical reasoning about the paper's methodology
- SOURCE_OPERATORS_AND_EQUATIONS: The formal math from the paper (Gamma GLMs, Beta GLMs, Mahalanobis distance, EWMA, shoelace formula, etc.)
- RETROCAUSAL_GENEALOGY: The academic lineage — how this builds on prior work (Morgan 2018, Fernandez-Navarro 2016, Sharpe 2022, Skripnikov 2025, etc.)
- RECURSIVE_THEORY_OF_MIND: How managers anticipate each other, regression to crisis/habit patterns
- CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather constraints that would veto claims
- RLVR_COUNTERFACTUAL_VETOES: Counterfactual scenarios testing the paper's claims

Actually, I think the most sensible interpretation is: the user wants a rigorous, structured critique/analysis of this football analytics paper. The section names are somewhat idiosyncratic but I can map them to meaningful analytical content about the paper. Let me produce genuine intellectual value here — a deep, honest technical analysis of the paper's methodology, strengths, weaknesses, and the math involved.

I should be careful about a few things:
1. Be honest and rigorous — this is analysis, not hype. The paper has real limitations that I should surface honestly (small sample n=31, subjective thresholds, descriptive not causal, etc.).
2. The "predictions" in the last section should be genuine falsifiable claims about what would happen if the study were extended/replicated, framed as counterfactual robustness tests — not betting predictions.
3. Follow the formatting: 1000+ words, LaTeX equations, page citations with [PAGE N] and verbatim quotes.

Let me actually engage with the substance of the paper. Let me extract the key math and methodology.

Key components of the paper:

**Data**: Hudl lineups, events, 360-frame data. Premier League 2020/21–2024/25. 85 managerial appointments. Transfermarkt for manager data. Club Elo for rankings. 1,900 matches, 3,800 fixture-level data points. Managers <30 days excluded. Newly promoted teams excluded.

**Five micro-metrics**:
1. Pressing Line Height (PLH) — pressure events in opponent half, mean position of teammates within ±10 Hudl units on x-axis. Min 3 teammates, opposition half. Mean aggregated per match. Gamma GLM.
2. Compactness — convex hull area of defending team in own half. Min 8 players, own half, GK excluded. Median normalized area. Beta GLM. Shoelace formula.
3. Directness — proportion of forward distance in passes/carries. Beta GLM.
4. Progression Speed (m/s) — forward progression speed, positive OBV events, pass/carry, forward. Median per match. Gamma GLM.
5. Share of Carries — carry-to-pass ratio in positive progressions. Beta GLM.

**Context adjustment**: Extends Skripnikov et al. (2025). GAMs with Negative Binomial for counts; they use Gamma/Beta for continuous. Context variables: Elo diff (z-scored by season), Man Net, Man Abs, Home advantage (binary), Winning Share, Losing Share, Seasonal fixed effects (2020/21 baseline). Quadratic Elo term. HC3 robust covariance. Neutral context = all zeros, is_home=0, team strength neutral.

**Model selection**: OLS rejected (heteroskedasticity, non-negativity, bounded). Gamma GLM for PLH, Progression Speed. Beta GLM for Compactness, Directness, Share of Carries. Logit link for Beta, log link for Gamma.

**Context adjustment formulas**:
- Beta: Δi = η_i,obs − η_i,neutral; y_i,adj = logit⁻¹(η_i,obs − Δi)... actually rescaled to neutral.
- Gamma: Δi = log-scale difference; y_i,adj removes bias on original scale.

**Identity vector**: standardized robust z-scores (MAD-based), global scale, log-stabilize skewed metrics. Weighted Mahalanobis-type distance (diagonal approximation = weighted Euclidean). Δz_{t,j} = z_{t,j} − z_{t−1,j}. Weights inverse to uncertainty: w depends on R (data reliability) and λ=0.2 regularization. R̃ normalized model variance = raw variance / long-run SD.

**EWMA**: α=0.22 smoothing.

**Convergence**: THR=1.57 (global median of observations after first 8 matches). Convergence event = EWMA distance below threshold for 6 consecutive matches (~1 month).

**Results**: 58 of 85 met inclusion. 31 convergence events. Most converge in first half of debut season, typically 12–15 matches. Vieira 50 games, Howe 110 games. Shorter prep time → more similar to predecessor. Optimal moderate change for first-game results. Distance 0–5 → median ~6 matches to converge; distance >10 → >2x matches. Cosine similarity: fast-convergers more similar to each other; slow-convergers more distinct. Dyche converged after 6 games.

Now let me think about the formal equations. The paper describes many but the actual LaTeX equations were stripped in the OCR (they show as blank or descriptive text). I need to reconstruct the formal math that the paper is describing. Let me be careful to reconstruct them faithfully based on the descriptions and cite where they appear.

**Shoelace formula** (PAGE 10, ref 20):
$$A = \frac{1}{2}\left| \sum_{i=1}^{n} (x_i y_{i+1} - x_{i+1} y_i) \right|$$
Compactness = median(A_convex_hull / A_half-pitch).

**Gamma GLM** (PAGE 21):
$$y_i \sim \text{Gamma}(\mu_i, \phi), \quad y_i > 0$$
$$\log(\mu_i) = \mathbf{x}_i^\top \boldsymbol{\beta}$$
Variance: $\text{Var}(y_i) = \phi \mu_i^2$ (for the standard Gamma GLM parameterization with shape = 1/φ).

**Beta GLM** (PAGE 22-23):
$$y_i \sim \text{Beta}(\mu_i, \phi), \quad y_i \in (0,1)$$
$$\text{logit}(\mu_i) = \log\frac{\mu_i}{1-\mu_i} = \mathbf{x}_i^\top \boldsymbol{\beta}$$
Variance: $\text{Var}(y_i) = \frac{\mu_i(1-\mu_i)}{1+\phi}$.

**Man Net** (PAGE 16-17):
$$\text{man\_net}_i = \frac{1}{T}\int_0^T \left( P_i(t) - P_j(t) \right) dt$$
Example: opponent down 2 for 600s, down 1 for 300s → (2·600 + 1·300)/5400 = 1500/5400 ≈ 0.278. Wait, the paper says "Opponent down 2 for 10 min (+2 for 600 s), Opponent down 1 for 5 min (+1 for 300 s)" and then "man_net:" but the value got cut off. Let me compute: (2×600 + 1×300)/5400 = (1200+300)/5400 = 1500/5400 = 0.2778. So man_net ≈ 0.278.

**Context adjustment for Beta** (PAGE 23-24):
$$\Delta_i = \eta_{i,\text{obs}} - \eta_{i,\text{neutral}}$$
$$y_{i,\text{adj}} = g^{-1}(\eta_{i,\text{obs}} - \Delta_i) = g^{-1}(\eta_{i,\text{neutral}})$$

Wait, that's trivially g⁻¹(η_neutral). Let me re-read. "The difference Δi quantifies the contextual bias. The adjusted value y_i,adj rescales the observed performance to that neutral baseline." 

Hmm. Actually the standard approach (Skripnikov-style): the adjustment is applied additively on the link scale. So:
$$y_{i,\text{adj}} = g^{-1}(g(y_i) - \Delta_i)$$
where Δi = η_i,obs − η_i,neutral. This shifts the observed value's link-transformed value by the context delta. For Beta with logit link:
$$y_{i,\text{adj}} = \text{logit}^{-1}\left(\text{logit}(y_i) - \Delta_i\right)$$

That makes more sense — you take the observed raw metric, transform to link scale, subtract the estimated contextual effect, transform back. This "removes" the context.

For Gamma with log link:
$$\Delta_i = \log(\mu_{i,\text{obs}}) - \log(\mu_{i,\text{neutral}}) = \log\left(\frac{\mu_{i,\text{obs}}}{\mu_{i,\text{neutral}}}\right)$$
$$y_{i,\text{adj}} = y_i \cdot \exp(-\Delta_i) = y_i \cdot \frac{\mu_{i,\text{neutral}}}{\mu_{i,\text{obs}}}$$

This is a multiplicative rescaling. Good — this is faithful to "removes contextual bias while remaining on the original positive continuous scale."

**Robust z-score standardization** (PAGE 26, ref 28 MAD):
$$z_{t,j} = \frac{x_{t,j} - \text{median}_j}{\text{MAD}_j}, \quad \text{MAD}_j = \text{median}(|x_{t,j} - \text{median}_j|)$$

**Log-stabilize** (PAGE 26):
$$x' = \log(x)$$ or $\log(x + c)$ for skewed metrics.

**Weighted Mahalanobis-type distance** (PAGE 26-27):
Full Mahalanobis: $D^2 = \Delta\mathbf{z}_t^\top \mathbf{S}^{-1} \Delta\mathbf{z}_t$
Diagonal approximation: 
$$D_t^2 = \sum_j w_{t,j} \, (\Delta z_{t,j})^2 = \sum_j w_{t,j} (z_{t,j} - z_{t-1,j})^2$$

**Weights** (PAGE 27):
$$w_{t,j} = \frac{1}{R_{t,j} + \lambda} \cdot \tilde{R}_{t,j}^{-1}?$$

Hmm, the paper says "Each metric was weighted inversely to its measurement uncertainty and data sparsity. Weights were defined as: ... R reflects data reliability based on event coverage, R̃_{t,j} is the normalised model variance. λ is a small regularisation constant (0.2)."

So something like:
$$w_{t,j} = \frac{R_{t,j}}{\tilde{R}_{t,j} + \lambda}$$
where higher reliability R increases weight, and higher variance R̃ decreases weight, regularized by λ. That's the most sensible reading: weight inversely proportional to uncertainty (R̃) plus regularization, times reliability. The exact form is ambiguous from OCR but I'll present the reconstructed form and note the ambiguity honestly.

**Normalized model variance** (PAGE 27-28):
$$\tilde{R}_{t,j} = \frac{R_{t,j}}{\sigma_{R_j}}$$
where σ_{R_j} is the long-run standard deviation across matches of the raw model variance. (Wait — that would make R̃ dimensionless.) Actually re-reading: "The normalised model variance R̃_{t,j} is obtained by dividing the raw model variance R_{t,j} ... by its long-run standard deviation across matches." So yes:
$$\tilde{R}_{t,j} = \frac{R_{t,j}}{\text{SD}_{\text{long-run}}(R_{\cdot,j})}$$

Hmm, but then R appears twice. This is genuinely ambiguous in the source. I'll flag that.

**EWMA** (PAGE 28):
$$E_t = \alpha D_t^2 + (1-\alpha) E_{t-1}, \quad \alpha = 0.22$$
or on distances. The paper says "match-to-match distances were smoothed using EWMA." 

**Convergence threshold**: THR = 1.57, convergence = EWMA < THR for 6 consecutive matches.

Now, the "gray-zone audit" — I should identify genuine ambiguities and weak points:
1. The exact weight formula is under-specified in the OCR.
2. The relationship between R and R̃ (both derived from model variance?) is unclear.
3. THR=1.57 is on the D² scale but is it on smoothed EWMA of D or D²? The paper mixes "distance" and "D²."
4. Cosine similarity (PAGE 36) vs Mahalanobis distance (PAGE 26) — two different similarity measures used in different places.
5. Sample size: 31 convergence events, and Figure 5.14 bins them further — very thin.
6. Descriptive not causal — repeatedly acknowledged.

**Lineage (RETROCAUSAL_GENEALOGY)**:
- Van Ours & van Tuijl (2016) → Besters et al. (2016) cumulative surprise.
- Ramani (2023) NMB.
- Guerrero-Calderón et al. (2021) physical performance after coach change.
- Fernandez-Navarro et al. (2016) factor analysis of 19 indicators.
- Franks et al. (2015) NBA spatial defensive skill → Sharpe (2022) NMF.
- Gleeson (2024) tracking data play style variance.
- Morgan (2018) counter-pressing.
- Rico-González et al. (2021) spatial tactical metrics.
- Guan et al. (2023) defensive compactness "parking the bus."
- Skripnikov et al. (2025) context adjustment.
- Elo (chess origin → football via Club Elo).

**RECURSIVE_THEORY_OF_MIND**: Managers as strategic agents modeling each other. The "crisis habit regression" — dismissal happens after poor runs (Besters), creating regression-to-mean illusion. The paper's context adjustment is essentially trying to strip out this regression artifact. Counter-trap: a new manager facing a strong opponent will rationally sit deeper (Directness decreases with opponent strength — PAGE 54), which the context model must not misattribute to managerial identity. The "clock" = preparation window (days between appointment and first match, PAGE 34) — this is the key temporal lever.

**CROSS_LAYER_VETO**: Physical/biomechanical constraints — a manager "cannot instantly make a misfiring striker score" (PAGE 4). Player-dependent carry behavior (PAGE 15, Doku/Haaland). Hard-to-coach metrics excluded (xG, counter-pressing effectiveness) because they stabilize only after a recruitment cycle (PAGE 8). Weather isn't in the paper but I can note it as an unmodeled contextual veto (wind/rain affecting directness and progression speed). Fixture congestion, injuries (PAGE 32, Howe). These are physical vetoes on attributing metric changes to the manager.

**RLVR counterfactual vetoes**: 3 falsifiable scenarios. E.g.:
1. If you extend to Championship (higher turnover), does convergence hold? Prediction: sample fragments, convergence events drop proportionally.
2. If you replace Elo with a rolling form metric, does the "moderate change optimal" result survive? 
3. If you fix the weight-formula ambiguity and re-run, do Vieira/Howe outliers change?

Let me also compute some real numbers to ground this:
- man_net example: (2×600 + 1×300)/5400 = 1500/5400 ≈ 0.2778.
- 58/85 ≈ 68% met inclusion; 31/58 ≈ 53% converged.
- Gamma variance function, Beta variance function.
- Convergence rate: if median ~6 matches for close setups and >12 for distant, and typical convergence 12-15 matches...

Let me also sanity-check the standardized z-score and the D² scale. THR = 1.57. If D² is a sum of 5 weighted squared z-differences, and each standardized difference is O(1), then a sum of ~5 terms each ~O(1) gives O(5), median 1.57 means typical EWMA-smoothed distance is well below the per-match variance. That's plausible.

Actually, let me reconsider — is D_t² the sum or is it a distance (sqrt)? The paper says "distance represents the reliability-weighted, diagonal Mahalanobis-type sum of squared changes" (PAGE 33). So D² is a sum of squared changes (Mahalanobis-style, which is inherently squared). And EWMA is applied to... "match-to-match identity distances" — could be D² or D. THR=1.57 on the same scale. I'll note the D vs D² ambiguity.

Now let me write this out. I need ≥1000 words across the six sections, with THINK_TRACE ≥400 words. I'll be rigorous, honest, cite pages with [PAGE N] and verbatim quotes, use LaTeX, and avoid any betting language.

Let me make sure I hit the invariants:
1. No betting lines — I won't mention odds/spreads/totals/moneylines. Note: the paper itself mentions "bookmaker odds" as an alternative to Elo (PAGE 6) — I can discuss this as a methodological choice but not as a betting line. Actually the invariant says never mention odds. But the paper discusses bookmaker odds as a modeling alternative. I think I can reference the paper's methodological decision to avoid odds (which actually aligns with the invariant) without discussing any actual betting lines. I'll frame it as "market-based strength estimates" and cite the paper's rationale. Let me be careful — I'll reference it minimally and academically.
2. Formal LaTeX, units, page citations, breakdown — yes.
3. ≥1000 words across exact XML sections — yes.

I'll be genuinely analytical and honest about limitations. This is the right approach — a real technical critique, not hype. Let me write it.

One more consideration: the instruction says the THINK_TRACE should be "deep multi-hop derivation & gray-zone audit." I'll do genuine analytical reasoning about the methodology, chaining through the math and flagging ambiguities. The section names about "crisis habit regression," "counter-trap," "clock," "veto," "counterfactual vetoes" I'll interpret as a rigorous adversarial/robustness analysis of the paper's claims — which is legitimate and valuable.

Let me write the full response now. I'll aim for depth and precision. I won't add preamble — I'll go straight into the structured analysis since that's what's requested.

Let me make the equations faithful and correct. Let me reconsider the Gamma GLM variance. For a Gamma GLM with mean μ and dispersion φ, common parameterizations:
- Var(y) = φ μ² (φ = dispersion/scale). This is standard.
- Shape parameter = 1/φ.

Beta GLM with mean μ and precision φ:
- Var(y) = μ(1-μ)/(1+φ). Standard (Ferrari & Cribari-Neto 2004).

Good.

Let me also get the shoelace formula right and the convex hull context.

For the Man Net integral, the discrete form:
$$\text{man\_net}_i = \frac{1}{T}\int_0^T [P_i(t) - P_j(t)]\,dt \approx \frac{1}{T}\sum_k (P_i - P_j)_k \Delta t_k$$

Man Abs:
$$\text{man\_abs}_i = \frac{1}{T}\int_0^T |P_i(t) - P_j(t)|\,dt$$

Directness (forward progression ratio):
$$d = \frac{\sum_{e \in \mathcal{P} \cup \mathcal{C}} \max(\Delta x_e, 0)}{\sum_{e \in \mathcal{P} \cup \mathcal{C}} |\Delta x_e|}$$
where P = passes, C = carries. "proportion of total distance ... that move positively along x-axis."

Actually re-reading: "the proportion of total distance from Pass and Carry actions that move positively along the x-axis." So numerator = forward distance, denominator = total distance. Yes.

Progression Speed:
$$s_e = \frac{\Delta x_e}{\Delta t_e} \quad \text{for events with } \Delta x_e > 0, \text{OBV} > 0$$
Aggregated by median per match.

Share of Carries:
$$\text{share\_carry} = \frac{n_{\text{carry}}}{n_{\text{total}}}, \quad n_{\text{total}} = n_{\text{pass}} + n_{\text{carry}}$$
over positive progression events.

Pressing Line Height:
$$\text{PLH} = \frac{1}{|S|}\sum_{p \in S} \bar{x}_{p}$$
where for each pressure event in opponent half, S is set of teammates within ±10 units x of presser, and x̄ is their mean x. Then mean over events per match.

Good. Now let me write.

I want the response to be substantial and genuinely useful. Let me target maybe 1400-1800 words total to comfortably exceed the 1000-word minimum with quality.

Let me draft each section.

Actually, I realize I should present this cleanly and not over-narrate. Let me write directly into the XML structure requested.
</NATIVE_REASONING>

<SOURCE_OPERATORS_AND_EQUATIONS>

The paper (Hooker, *The Manager Bounce: From Immediate Shock to Tactical Identity*) is built on five "micro metrics," two distribution families, a diagonal-Mahalanobis identity distance, and an EWMA-smoothed convergence rule. Below I reconstruct the formal operators the OCR left blank, with units and page anchors.

**Raw micro-metrics.**
- Pressing Line Height [PAGE 8]: for every pressure event in the opponent half, take teammates within ±10 Hudl x-units of the presser (min 3 in frame, opposition half) and average their x; then average across events per match. Units: Hudl x-units (later convertible to m via pitch dimensions, defaulted 105×68 m [PAGE 6]). Aggregated by **mean** [PAGE 9].
- Compactness [PAGE 9–10]: convex-hull area of the defending team (≥8 outfield players, own half, GK excluded), via the shoelace formula [PAGE 10, ref 20]:
$$A_{\text{hull}}=\tfrac{1}{2}\Bigl|\sum_{i=1}^{n}\bigl(x_i y_{i+1}-x_{i+1}y_i\bigr)\Bigr|,\qquad \text{Compactness}=\operatorname{median}\!\left(\frac{A_{\text{hull}}}{A_{\text{half-pitch}}}\right)\in[0,1].$$
- Directness [PAGE 11]: forward-progression ratio over Pass∪Carry,
$$d=\frac{\sum_{e}\max(\Delta x_e,0)}{\sum_{e}\lvert\Delta x_e\rvert}\in[0,1].$$
- Progression Speed [PAGE 12–13]: $s_e=\Delta x_e/\Delta t_e$ for $\Delta x_e>0$ and $\text{OBV}_e>0$; **median** per match (m/s). Table 2.1 [PAGE 12] justifies median over mean (mean–median gap 35.9%, median = P50 = 32.40%).
- Share of Carries [PAGE 14]: $c=n_{\text{carry}}/n_{\text{total}}$, $n_{\text{total}}=n_{\text{pass}}+n_{\text{carry}}$ on positive progressions.

**Contextual covariates** [PAGE 15–18]: Elo difference (z-scored by season [PAGE 16]), plus quadratic Elo term [PAGE 19]; Man Net and Man Abs from red-card timelines,
$$\text{man\_net}_i=\frac{1}{T}\int_0^T\!\bigl[P_i(t)-P_j(t)\bigr]dt,\qquad \text{man\_abs}_i=\frac{1}{T}\int_0^T\!\bigl|P_i(t)-P_j(t)\bigr|dt.$$
The paper's worked example [PAGE 17] — opponent down 2 for 600 s and down 1 for 300 s, $T=5400$ — yields $\text{man\_net}=(2\cdot600+1\cdot300)/5400=1500/5400\approx0.278$ (units: dimensionless player-seconds per second). Also Winning Share, Losing Share, binary $is\_home$, and season fixed effects (2020/21 baseline) [PAGE 18].

**Distribution families** (OLS rejected for heteroskedasticity/non-negativity/boundedness [PAGE 19], with the PLH OLS diagnostics Breusch–Pagan $p=0.0166$, White $p=0.0317$, PIT-KS $p=0.0412$):
- Gamma GLM [PAGE 21] for PLH and Progression Speed: $y_i\sim\text{Gamma}(\mu_i,\phi)$, $y_i>0$, $\operatorname{Var}(y_i)=\phi\mu_i^2$, $\log\mu_i=\mathbf{x}_i^\top\boldsymbol\beta$.
- Beta GLM [PAGE 22–23] for Compactness, Directness, Share of Carries: $y_i\sim\text{Beta}(\mu_i,\phi)$, $y_i\in(0,1)$, $\operatorname{Var}(y_i)=\dfrac{\mu_i(1-\mu_i)}{1+\phi}$, $\operatorname{logit}(\mu_i)=\mathbf{x}_i^\top\boldsymbol\beta$.
Inference uses HC3 robust covariance [PAGE 21]. Reported calibration: Gamma PIT-KS $p>0.18$, coverage $\approx0.95$; Beta KS $p>0.08$; VIF $<2.0$, condition numbers $\approx2.7$ [PAGE 21, 23].

**Context removal** [PAGE 23–25]. Neutral scenario sets all covariates to 0, $is\_home=0$ (away), and team strength neutral. With $\Delta_i=\eta_{i,\text{obs}}-\eta_{i,\text{neutral}}$:
$$\text{Beta: } y_{i,\text{adj}}=\operatorname{logit}^{-1}\!\bigl(\operatorname{logit}(y_i)-\Delta_i\bigr),\qquad \text{Gamma: }\Delta_i=\log\frac{\mu_{i,\text{obs}}}{\mu_{i,\text{neutral}}},\; y_{i,\text{adj}}=y_i\,e^{-\Delta_i}=y_i\frac{\mu_{i,\text{neutral}}}{\mu_{i,\text{obs}}}.$$
The Gamma form is a multiplicative rescale on the positive axis; the Beta form is an additive shift on the logit axis.

**Identity vector and distance** [PAGE 25–28]. Robust global z-scores $z_{t,j}=(x_{t,j}-\operatorname{median}_j)/\text{MAD}_j$ [PAGE 26, ref 28], with log-stabilization of skewed metrics first. Per-match step $\Delta z_{t,j}=z_{t,j}-z_{t-1,j}$. The full Mahalanobis $D^2=\Delta\mathbf{z}^\top\mathbf{S}^{-1}\Delta\mathbf{z}$ is replaced by a diagonal form:
$$D_t^2=\sum_j w_{t,j}\,(\Delta z_{t,j})^2,\qquad w_{t,j}\propto \frac{R_{t,j}}{\tilde R_{t,j}+\lambda},\;\; \lambda=0.2,\;\; \tilde R_{t,j}=\frac{R_{t,j}}{\text{SD}_{\text{lr}}(R_{\cdot,j})}.$$
EWMA smoothing [PAGE 28]: $E_t=\alpha D_t^2+(1-\alpha)E_{t-1}$, $\alpha=0.22$. Convergence: $E_t<\text{THR}=1.57$ for 6 consecutive matches [PAGE 29].

</SOURCE_OPERATORS_AND_EQUATIONS>

<THINK_TRACE>
The analytical spine of this paper is a chain of transformations, each of which must preserve meaning for the final "tactical identity" claim to hold. Walking the chain multi-hop: (1) raw events → (2) five micro-metrics with distributional assumptions → (3) context removal via GLM counterfactuals → (4) standardization → (5) uncertainty-weighted diagonal distance → (6) EWMA smoothing → (7) a threshold rule. A weakness anywhere upstream propagates downstream, so the gray-zone audit has to trace error in both directions.

Start at the metric layer. The five metrics are deliberately "coachable" (pressing height, compactness, directness, progression speed, carry share), explicitly excluding xG and counter-press *effectiveness* because those "stabilise only after a recruitment cycle" [PAGE 8]. That is a defensible design choice — it isolates what a manager can instruct in session one ("press higher from their first session, but cannot instantly control the quality or success of those presses" [PAGE 8]). But it creates a construct-validity gap: the vector measures *instruction adoption*, not *tactical success*. The paper is honest that this is "descriptive, not causal" [PAGE 39].

Second hop — distributional matching. Gamma for positive-continuous (PLH, speed), Beta for bounded ratios (compactness, directness, carry share). This is textbook-correct: Gamma's variance scales as $\phi\mu^2$ (multiplicative heteroskedasticity), Beta's as $\mu(1-\mu)/(1+\phi)$ (bounded, mean-dependent). The choice is validated by calibration diagnostics (PIT near-uniform, KS $p>0.08$) and by the rejection of OLS on the same data. The one statistical soft spot: the quadratic Elo term was chosen after splines produced condition numbers >1000 [PAGE 19]. A quadratic is a rigid global approximation of a relationship shown to be nonlinear in Figure 3.1; it will misestimate the tails (very strong vs very weak opposition) even if it fits the center. Because Elo enters *every* model and is then neutralized in the counterfactual, any tail misfit becomes a systematic bias injected into $y_{i,\text{adj}}$, not random noise.

Third hop — context removal, the conceptual heart. The adjustment is a difference-in-predictions à la Skripnikov et al. (2025): compute the metric under observed context and under a neutral context, and remove the delta. The subtle move is fixing $is\_home=0$ *and* neutralizing team strength [PAGE 23]. Neutralizing opponent strength is philosophically loaded — the authors argue it reveals "how a manager might set up a team under ideal, context-independent conditions" [PAGE 23]. But opponent strength is *part of* tactical identity: a pragmatic manager's willingness to sit deep against a top side is a genuine identity signal, and here it is deliberately erased. This is defensible for isolating the manager's "intrinsic" template but it means the identity vector is, by construction, counterfactual-to-context rather than as-observed.

Fourth hop — the distance and its weights. The diagonal Mahalanobis is "in practice a weighted Euclidean (z-score) distance" [PAGE 27], dropping cross-metric covariances. That is a real loss: compactness, directness, and progression speed are almost certainly correlated (a direct, fast, transition side is also likely compact when defending). Ignoring covariance means correlated movement across metrics is counted as independent evidence of change, which *inflates* $D_t^2$ when a coherent tactical shift moves several metrics together. The uncertainty weight is the murkiest operator in the paper: the OCR text describes $w_{t,j}$ as inversely proportional to uncertainty and sparsity with regularizer $\lambda=0.2$, but the relationship between $R_{t,j}$ ("data reliability based on event coverage") and $\tilde R_{t,j}$ ("normalised model variance," itself $R_{t,j}$ divided by its long-run SD) is genuinely ambiguous — $R$ appears to play two roles. The authors concede $\lambda=0.2$ was a "pragmatic choice... not a formal empirical optimisation" [PAGE 27]. So the weighting carries an unvalidated degree of freedom.

Fifth and sixth hops — EWMA and threshold. $\alpha=0.22$ and THR=1.57 (the global median of post-match-8 observations) are both justified by "visual sense checks" [PAGE 28–29], not optimization. THR being a *median* means, almost by construction, ~half of observation windows sit below it; the "6 consecutive matches" persistence rule is what actually creates discreteness. There is a scale ambiguity worth flagging: the text oscillates between "distance" and "D²" [PAGE 33 says $D^2$ is the sum of squared changes; PAGE 28 smooths "distances"], so whether EWMA runs on $D$ or $D^2$ changes the numerical meaning of 1.57. This is a reproducibility gray zone. Net assessment: the pipeline is methodologically literate and refreshingly transparent about its subjectivity, but three free knobs ($\lambda$, $\alpha$, THR) plus a rigid quadratic plus a covariance-free distance mean the *exact* convergence game-counts (Vieira 50, Howe 110, Dyche 6) are plausible-but-fragile point estimates rather than robust quantities.
</THINK_TRACE>

<RETROCAUSAL_GENEALOGY>
The paper sits at the confluence of four lineages. **(1) The manager-change economics lineage:** Van Ours & van Tuijl (2016) → Besters et al. (2016), whose "cumulative surprise" metric (actual vs expected points, controlling for opposition) showed mid-season dismissals mostly revert to expectation [PAGE 2]; and Ramani (2023), who documented a New Manager Bounce in results across the top-five leagues [PAGE 2]. This lineage's core insight — that dismissals follow poor form, manufacturing an illusion of improvement via regression to the mean — is exactly what Hooker's context adjustment is engineered to defeat. The paper is effectively asking: *once you strip out the regression artifact, is there a residual tactical fingerprint?* **(2) The physical-performance lineage:** Guerrero-Calderón et al. (2021) found no clear physical uplift after mid-season changes [PAGE 1]. This motivates the pivot from *outcomes* and *outputs* to *identity*. **(3) The team-style quantification lineage:** Fernandez-Navarro et al. (2016) factor-analyzed 19 indicators into style profiles [PAGE 3]; Franks et al. (2015) characterized NBA defensive skill spatially; Sharpe (2022) imported that as NMF-compressed pitch heatmaps and — crucially — *proposed* that learned identities could extend to managerial identity [PAGE 3]. Hooker explicitly declines the NMF route in favor of hand-selected coachable metrics, trading objectivity-through-learning for interpretability. Gleeson (2024) on tracking-data style variance is the sibling effort. **(4) The spatial-metrics lineage:** Morgan (2018) for counter-pressing pressure events [PAGE 8], Rico-González et al. (2021) for spatial-tactical variables, Guan et al. (2023) for defensive compactness [PAGE 10], and Skripnikov et al. (2025) for GAM/Negative-Binomial context adjustment [PAGE 15]. The Elo backbone traces further back to chess, operationalized for football via Club Elo [PAGE 5].

The **multi-week trap** embedded in this genealogy: the strongest prior result (Besters) is a *null* — no lasting managerial effect. Any new method risks re-detecting the same regression illusion unless its context adjustment is genuinely orthogonal to the form-cycle that triggers dismissal. The paper's design (neutralizing Elo and game state, smoothing with EWMA, requiring 6-match persistence) is a multi-layered attempt to avoid re-deriving the artifact. The tell that it partially succeeds: convergence timescales (typically 12–15 matches [PAGE 40]) are far longer than the transient results bounce Ramani described, consistent with the authors' thesis that "tactical identity tends to evolve progressively rather than shifting immediately after appointment" [PAGE 40].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
A manager is a strategic agent who models the opponent, who in turn models the manager — and the paper's metrics are contaminated by exactly this recursion unless context is removed. Consider Directness: the Beta model shows directness "decreases significantly with higher opponent strength... suggesting stronger opposition forces teams to play less directly" and that "losing states increase it — indicating more urgent, vertical play when behind" [PAGE 54]. This is second-order behavior: the manager's *choice* is a best-response to the opponent's configuration and the scoreline, not a fixed trait. Share of Carries likewise "increases with opponent strength, home advantage, and manpower advantage, while decreasing when teams are winning" [PAGE 52]. These coefficient signs are the empirical fingerprint of an agent playing the game-state recursion, and they are precisely why the neutral-context adjustment is necessary — otherwise a manager who correctly parks deeper against a favorite would be mislabeled as "less direct" by identity.

**Crisis-habit regression.** The dismissal mechanism itself is a habit loop: poor form → sacking → new manager inherits a squad mid-cycle. Besters' regression result predicts an apparent uplift regardless of the manager. Hooker's counter-trap is to declare that a genuine identity change must (a) survive context removal and (b) persist for 6 matches. The residual theory-of-mind subtlety: the incoming manager also models the *predecessor's* identity and may deliberately diverge or converge. The paper documents this — "the shorter the time between a manager's appointment and their first match, the more similar their team appears to that of their predecessor" [PAGE 34] — and finds an *inverted-U* in first-game points against stylistic distance (Figure 5.8): too-similar and too-dissimilar both underperform, moderate divergence wins. That is a game-theoretic sweet spot, not a monotone "more change is better."

**The clock.** The single most important temporal variable is the preparation window — days between appointment and first competitive match. It governs how much of a recursive identity can actually be installed before the opponent starts adapting. The paper's own framing: "it is unrealistic to expect a manager to implement substantial tactical or structural changes within such a limited time frame" [PAGE 34]. Howe (110 games) and Vieira (50 games) are the slow-clock outliers, flagged as cases where "a manager's approach develops slowly or in stages" [PAGE 40]. The recursion trap here is that a rival manager, over a multi-season clock, can force continual readjustment, keeping $E_t$ above THR — which the framework may misread as *absence* of identity rather than *continuous tactical co-evolution*.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A physical/biomechanical veto is any constraint that forces a metric change independent of managerial intent; such changes must not be attributed to identity. The paper self-imposes several vetoes and misses others.

**Roster-quality veto (modeled).** "A new manager cannot immediately make a misfiring striker score" [PAGE 4], and carrying "is largely player-dependent... the extent to which it is executed depends on the technical quality of the players available," illustrated by Manchester City's carry share being driven by "Doku and Haaland" [PAGE 15]. This is a hard biomechanical veto: carry-share is bounded by squad dribbling talent, not instruction. The paper handles it by excluding xG/counter-press effectiveness, but *cannot* fully remove it from Share of Carries — a manager handed technical players will show elevated carry share regardless of philosophy. This partially confounds the carry-share axis of the identity vector.

**Frame-availability veto (modeled).** Compactness requires ≥8 defenders in-frame in their own half [PAGE 10]; PLH requires ≥3 teammates in-frame [PAGE 9]. Low frame counts (common for dominant, high-line teams) inject variance. The reliability weight $R_{t,j}$ is the intended veto filter, but as noted, its formula is under-specified, so this veto is only partially enforced.

**Congestion/injury/rotation veto (acknowledged, unmodeled).** For Howe the authors attribute the noisy 110-game trajectory to "tactical experimentation, injury disruptions, or fixture congestion" [PAGE 32] and recommend future work on "injuries, line-up rotation, transfers, and fixture congestion" [PAGE 40]. These are physical vetoes the current model absorbs into noise rather than explicitly.

**Weather veto (unmodeled — a genuine gap).** Nowhere does the pipeline include wind, precipitation, temperature, or altitude. Yet Directness, Progression Speed (m/s), and PLH are all physically sensitive to conditions: a strong headwind suppresses long-ball directness and forward carry speed; heavy rain degrades pass velocity and pressing-line cohesion. Because the neutral-context counterfactual holds *only* the modeled covariates fixed and leaves weather inside the residual, adverse weather systematically biases $y_{i,\text{adj}}$ downward on exactly the tempo/directness axes — and it does so non-randomly across a season (winter fixture pile-ups), which can correlate with the very match indices used to detect convergence. Proof of the veto's bite: the metric that would expose it — a weather covariate — is absent from the covariate list [PAGE 15–18], so there is no layer adjudicating it. This is the strongest unaddressed physical veto.

**Referee/tempo veto.** Man Net/Abs are modeled from red cards, but referee strictness (cards per game) shifts pressing risk-taking and is unmodeled. A stricter officiating regime depresses aggressive pressing (PLH) independent of the manager. Secondary but real.

Adjudication: three of five physical vetoes are at least partially modeled (roster via metric selection, frame-availability via weights, congestion via smoothing); two — weather and referee regime — are unmodeled and bias the tempo/directness/pressing axes, so any convergence claim on those specific axes should be read as an upper bound on confidence.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three falsifiable robustness scenarios, each with a directional prediction and the mechanism that would confirm or break the paper's claims.

**Veto 1 — Weight-formula identifiability.** *Scenario:* re-run with $\lambda$ swept 0.1→0.5 and with the diagonal-covariance assumption replaced by the full $\mathbf{S}^{-1}$. *Prediction:* convergence *counts* (31/58) are moderately stable because the 6-match persistence rule dominates, but the *specific* game-counts for outliers (Howe 110, Vieira 50) will move materially, and some borderline tenures will flip across the 31/58 boundary. *Mechanism:* the dropped cross-metric covariance inflates $D_t^2$ for coherent multi-metric shifts; restoring it should shorten apparent convergence for well-defined identities and lengthen it for noisy ones. *Falsifier:* if game-counts are invariant to both $\lambda$ and covariance structure, the fragility critique is wrong and the estimates are robust.

**Veto 2 — Team-strength neutralization.** *Scenario:* re-estimate with Elo *not* neutralized (i.e., leave the manager's real opponent-strength response inside the identity vector) versus the paper's neutralized version. *Prediction:* pragmatic, reactive identities (Dyche-type, converge ~6 games) will show *less* apparent stability when strength is retained, because their "identity" is partly a best-response to weak opposition; aggressive possession identities will look more stable. *Mechanism:* the inverted-U result in Figure 5.8 and the fast-convergence profile (deeper, compact, direct, low-carry [PAGE 37]) are partly artifacts of neutralizing the opponent-strength channel. *Falsifier:* if convergence rankings are unchanged under both neutralizations, opponent-strength removal is not load-bearing and the "intrinsic identity" interpretation stands.

**Veto 3 — Weather/congestion confound on tempo axes.** *Scenario:* join a match-level weather/relocation covariate and re-fit the Gamma (speed) and Beta (directness) models. *Prediction:* a nonzero share of within-season $E_t$ variance on the tempo/directness axes will be absorbed by weather, *increasing* measured convergence stability (less residual noise) and pulling borderline winter-congested tenures toward convergence. Howe's noisy trajectory should partially resolve. *Mechanism:* unmodeled weather currently inflates residual variance on precisely the axes driving many convergence events. *Falsifier:* if adding weather leaves the tempo/directness coefficients and convergence flags unchanged, the weather veto is negligible for Premier League conditions and the unmodeled-covariate critique is downgraded.

**Synthesis prediction.** Across all three, the *qualitative* thesis — that tactical identity emerges progressively (median convergence well beyond the immediate results bounce), that longer preparation enables larger stylistic divergence, and that moderate divergence maximizes early points — is robust, because it rests on the sign of relationships rather than exact thresholds. The *quantitative* artifacts (exact games-to-convergence per manager, the precise 31/58 count) are the fragile layer and should be reported with interval estimates, not point counts, in any replication.
</RLVR_COUNTERFACTUAL_VETOES>

Bottom line: this is a methodologically serious, unusually transparent piece of football analytics. Its central move — using distributional GLMs to strip game-state and opponent-strength context before measuring a manager's tactical fingerprint — is sound and correctly motivated by the prior "regression-to-the-mean illusion" literature. Its genuine weaknesses are three hand-tuned knobs (λ=0.2, α=0.22, THR=1.57), a covariance-free distance that double-counts coherent shifts, a rigid quadratic Elo term, and two unmodeled physical vetoes (weather, referee regime). The directional findings will replicate; the exact per-manager convergence numbers should be treated as fragile.