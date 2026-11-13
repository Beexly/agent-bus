---
source: "2025 - Movement dynamics in elite female soccer athletes the quantile cube approach - Thomas et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Journal of Quantitative Analysis in Sports/2025"
pages: 18
model: baidu/ernie-5.5-flash-preview:free
words: 5727
---

<NATIVE_REASONING>
The user has provided a research paper about the "quantile cube approach" for analyzing movement dynamics in elite female soccer athletes. They want me to produce an analysis following a very specific template with XML sections, >=1,000-word depth, formal LaTeX equations, page citations, and adherence to strict invariants (no betting lines, no fake ratios/toy equations).

Let me understand the framework being requested:
- GSE + GSI Frontier Reasoning Foundry
- Zero betting lines
- Zero toy equations - state formal LaTeX, SI/information/probability units, assumptions, breakdown regimes, cite exact page markers and verbatim quotes
- >=1,000-word depth across exact XML sections

The sections required:
1. <THINK_TRACE> - Deep multi-hop derivation & gray-zone audit (>=400 words)
2. <SOURCE_OPERATORS_AND_EQUATIONS> - Formal LaTeX, units, page citations, breakdown
3. <RETROCAUSAL_GENEALOGY> - Historical/scientific lineage & multi-week traps
4. <RECURSIVE_THEORY_OF_MIND> - Crisis habit regression vs counter-trap vs clock
5. <CROSS_LAYER_VETO_ADJUDICATION> - Physical/biomechanical/weather veto proof
6. <RLVR_COUNTERFACTUAL_VETOES> - 3 verifiable RLVR veto scenarios + predictions

This is a statistical/methodological paper. The framing is odd - it uses sports analytics language ("crisis habit regression," "clock," "veto," "RLVR counterfactual vetoes") that seems designed for game/match prediction. But the source is a pure statistics paper about GPS movement data analysis.

I need to be careful here. The invariants say:
- ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
- ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes.

So I should focus on the actual statistics and methodology in the paper. Let me extract the real equations and content.

Key equations from the paper:

1. Hellinger distance (Equation 1, PAGE 6):
H(P, Q) = sqrt(1/2 * sum_{i=1}^{d} (sqrt(p_i) - sqrt(q_i))^2)
Bounded 0 <= H(P,Q) <= 1

2. Dirichlet-multinomial density (Equation 2, PAGE 10):
f_DM(y_i | eta_i) = [Gamma(N_i + 1) * Gamma(sum eta_ij)] / [Gamma(N_i + sum eta_ij)] * prod_j [Gamma(y_ij + eta_ij) / (Gamma(eta_ij) * Gamma(y_ij + 1))]
where N_i = sum_j y_ij

3. Log-linear concentration parameter (Equation 3, PAGE 10):
eta_ij := exp(beta_j0 + sum_{k=1}^{r} beta_jk * x_ik)

4. Significance threshold: |beta_jk / SE_beta_jk| > 3

5. Bonferroni correction: alpha_a = 0.05 / g_a

Key numbers/facts:
- 33 athletes, filtered to 9 athletes, 23 matches, 198 athlete-match sessions
- 198 x 2 = 396 athlete-match-halves
- d = 5 × 5 × 4 = 100 dimensions (velocity x acceleration x angle quantiles)
- r = 13 covariates
- 188/198 (94.9%) significant half differences
- Block bootstrap block size b = 10 (1s)
- 10,000 bootstrap iterations
- PCA: 90% variance -> 7 PCs retained
- Data: 1 point per second raw, interpolated spline at 10 points per second
- Third-degree interpolating spline
- velocity threshold 0.01 m/s, acceleration threshold 0.001 m/s^2
- log10(1+v) and log10(1+a) transforms
- angle modulo 360, shifted to -180 to 180
- 5 velocity quantiles: 0.0100, 0.3289, 0.9006, 1.5026, 2.5983 m/s (Table 1)
- 5 acceleration quantiles: 0.0010, 0.4220, 0.8159, 1.2930, 2.0367 m/s^2
- 4 angle quantiles: -30, 31.6302, 149.2631, -148.7042 degrees

Let me verify some of these numbers.

Table 1 velocity quantiles (raw, pre-log): 0.0100, 0.3289, 0.9006, 1.5026, 2.5983 m/s
Table 1 acceleration: 0.0010, 0.4220, 0.8159, 1.2930, 2.0367 m/s^2
Table 2 angle: -30.0000, 31.6302, 149.2631, -148.7042 degrees

The largest proportion of time (0.04629) was in the highest velocity and acceleration quantiles while turning left. Smallest proportion (0.0008) in lowest velocity quantile and highest acceleration quantile while moving backward. (PAGE 5)

PC1: match 1 second half, systematic reduction in middle quantiles of velocity and acceleration, shift toward polarized movement. Top loadings ~-0.13, negative.
PC4: match 23 final match. Low velocity (Q1, Q2) with maximal acceleration (Q5), forward/backward. Top loading Q1_vel_Q5_acc_Q1_angle 0.3297.

PC2, PC3 explained substantial variance but diffusely distributed, no coherent patterns.

DMR results:
- Second half: more negative coefficients in higher velocity quantiles -> decreased time in high-intensity movement
- Above-average playing time: less time in lowest velocity and acceleration quantiles
- Midfielders: more time in lower velocity/acceleration + elevated time in highest velocity quantile (bimodal)
- Forwards: less time in middle/lower velocity quantiles, exception in first velocity quantile at maximum acceleration, reduced left-right movement vs forward-backward

Now let me think about the "framework" sections and how to map them honestly onto this statistical paper.

The framing (RECURSIVE_THEORY_OF_MIND, CROSS_LAYER_VETO_ADJUDICATION, RLVR_COUNTERFACTUAL_VETOES) is clearly designed for match/game prediction. But this paper is NOT a prediction paper. It's a methodological paper about summarizing and testing movement distributions. So I should be honest and treat these sections as applying to the methodology's claims, limitations, and reproducibility — not fabricate match predictions. The invariants forbid betting lines and toy equations.

I think the right approach is to use these sections to rigorously interrogate the paper's methodology, claims, and breakdown regimes — which is actually a legitimate "frontier reasoning" analysis. I'll interpret:
- THINK_TRACE: multi-hop derivation of the methodology, gray-zone audit of the statistical assumptions
- SOURCE_OPERATORS_AND_EQUATIONS: the formal equations with units, page citations, breakdown regimes
- RETROCAUSAL_GENEALOGY: scientific lineage (Mosimann 1962, Dirichlet-multinomial, van der Vaart, Hellinger, block bootstrap Künsch 1989, etc.) and "multi-week traps" (reproducibility issues, arbitrary binning)
- RECURSIVE_THEORY_OF_MIND: this is where I map "crisis habit regression vs counter-trap vs clock" — I'll interpret as modeling assumptions vs the actual generative process (fatigue/tactical vs habit), and the "clock" as the temporal structure (half boundaries, block bootstrap). I need to be honest this isn't a prediction contest.
- CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto proof — the paper explicitly notes weather, altitude, etc. as unmodeled confounders. I can do a rigorous treatment of whether the observed distributional shifts can be attributed to biomechanics/physiology vs artifacts.
- RLVR_COUNTERFACTUAL_VETOES: 3 verifiable veto scenarios + predictions — falsifiable claims about the methodology.

I need to be careful and honest. Let me be a rigorous statistical analyst. I should NOT fabricate match outcome predictions or pretend this is a betting scenario. The invariants explicitly forbid that. I'll keep everything grounded in the actual content.

Let me note some gray-zone / critique points (real methodological audits):

1. The block bootstrap under the null: The paper constructs simulated first and second half samples by sampling contiguous blocks "drawn uniformly at random from a randomly selected athlete-match-half." This is a bit confusing — it pools blocks from a single athlete-match-half to simulate both halves under H0. The null hypothesis is that both halves come from the same distribution. But the block bootstrap samples from ONE half (a randomly selected athlete-match-half) to construct both simulated halves. This is a form of permutation/bootstrap that assumes exchangeability. The temporal dependence is handled by block size b=10 deciseconds = 1 second. Wait — the data is at 10 points per second (deciseconds). Block size b=10 means 10 deciseconds = 1 second. So they're sampling contiguous 1-second blocks. That's quite short for preserving "local temporal structure" — movement dynamics have autocorrelation timescales much longer than 1 second (e.g., a sprint lasts several seconds). So the block bootstrap may not fully capture the temporal dependence. This is a legitimate gray-zone critique.

2. Compositional data: The quantile cube proportions are compositional (sum to 1). Hellinger distance is appropriate. But the count matrix Y has fixed total per half (N_i = playing time in deciseconds). The DM model handles this.

3. d=100 with n=396. PCA to 7 PCs. Fine.

4. The 25-min-per-half selection threshold and >5 matches → 9 athletes, selection bias (acknowledged in limitations).

5. Multiple comparisons: Bonferroni within each athlete (alpha_a = 0.05/g_a). 188/198 significant. With such a large effect and n=396 halves pooled into quantile boundaries, this is expected. Actually, the quantile boundaries are GLOBAL (derived from all 396 halves), so each half's proportions are comparable. The test compares two halves of the SAME athlete-match. With thousands of deciseconds per half, even tiny distributional differences become "significant." So 94.9% significance is almost guaranteed by power — it's a statistical significance vs practical significance issue. This is a key gray-zone point: with large N (playing time in deciseconds, e.g., 45 min = 27,000 deciseconds), the test has enormous power to detect trivial differences.

Wait, let me reconsider. The bootstrap resamples t1 and t2 deciseconds. For a 45-min half, t = 45*60*10 = 27,000 deciseconds. The empirical proportion vectors are estimated from these. The Hellinger distance null distribution accounts for sampling variability. With n=27,000 per half, the null Hellinger distances would be very small (tight), so even small real differences exceed the critical value. So the "significance" mostly reflects that the test is well-powered, not that the effect is large. The actual effect sizes (Hellinger distances) are shown in Figures 5, 6. This is a legitimate critique: statistical significance ≠ magnitude of fatigue effect.

6. The angle quantiles are weird: -30, 31.6302, 149.2631, -148.7042. The baseline is shifted -30. The quantiles are 0, 25, 50, 75 percent. So 75th percentile is -148.7042, which after wraparound... this is a circular statistics issue. Movement angle is circular (mod 360), but they're treating quantiles linearly on a circular variable. The cut-points don't look evenly spaced (from -30 to 31.63 is 61.63°, from 31.63 to 149.26 is 117.63°, from 149.26 to -148.70 is... going through 180/-180 wrap = 360-149.26-148.70 = 62.04°, then -148.70 to -30 is 118.70°). So the angle binning is uneven because of the underlying distribution's circularity. This is a subtle methodological point.

Actually let me compute: bins for angle: [-30, 31.63], [31.63, 149.26], [149.26, -148.70], [-148.70, -30]. Since these are quantiles (25% each by count), the widths vary because the data isn't uniform. That's expected for quantile binning. But the circular wraparound at ±180 makes the "cardinal direction" interpretation (forward, right, backward, left) questionable. The paper claims alignment with forward, right, backward, left. Let me check: baseline -30, then +31.63 (forward-ish?), 149.26 (backward?), -148.70 (backward-left?). Hmm. The cardinal interpretation is approximate.

7. Velocity/acceleration derived from spline derivatives — differentiating GPS data amplifies noise. Third-degree spline at 10 Hz. Acceleration is the second derivative, very noise-sensitive. They threshold low magnitudes. Legitimate concern about noise amplification in acceleration estimates.

8. The DM concentration parameterization: eta_ij = exp(linear predictor). The DM variance is a function of eta and N. Overdispersion captured. But with d=100 categories and per-category regression coefficients (100 intercepts + 100×r coefficients), that's a lot of parameters. The model uses all 13 covariates as candidates but selects 3 (half, position, playing time). Estimation via MGLM.

Let me also think about the DM equation normalization. The DM density:
f(y_i | eta_i) = [Gamma(N_i+1) * Gamma(sum_j eta_ij) / Gamma(N_i + sum_j eta_ij)] * prod_j [Gamma(y_ij + eta_ij) / (Gamma(eta_ij) * Gamma(y_ij + 1))]

Yes, this is the standard DM. The mean of category j is N_i * eta_ij / sum_k eta_ik. The overdispersion is governed by sum eta (larger sum → less overdispersion, approaching multinomial).

Now for information-theoretic / probability units in the Hellinger section:
- Hellinger distance is dimensionless, bounded [0,1].
- Hellinger affinity: A(P,Q) = sum sqrt(p_i q_i). H^2 = 1 - A. So H = sqrt(1 - A).
- Relationship to total variation: H^2 <= TV <= H sqrt(2 - H^2). And H^2 relates to Bhattacharyya.

Let me be precise: For discrete distributions, H^2(P,Q) = 1 - BC(P,Q) where BC = sum_i sqrt(p_i q_i) is the Bhattacharyya coefficient. So H = sqrt(1 - sum sqrt(p_i q_i)).

Given equation 1: H = sqrt( (1/2) sum (sqrt(p_i) - sqrt(q_i))^2 ). Expand: sum (p_i + q_i - 2 sqrt(p_i q_i)) = sum p_i + sum q_i - 2 sum sqrt(p_i q_i) = 1 + 1 - 2 BC = 2(1 - BC). Times 1/2 = 1 - BC. So H = sqrt(1 - BC). Confirmed. Good, this is a clean derivation I can show.

Now, "singularity/breakdown regimes":
- Hellinger: well-defined always for distributions summing to 1. Breakdown: if bins have zero counts (empty cells), sqrt(0)=0 fine. But estimation of p from finite counts with empty bins → bias. The Hellinger distance is robust to this (downweights low-count bins). Breakdown regime: when N_i is small (short playing time) the empirical proportions are noisy; but the 25-min threshold mitigates.
- DM: breakdown when sum eta → 0 or → infinity. As sum eta → infinity, DM → multinomial (no overdispersion). As some eta_j → 0, category j is essentially never occupied. Gamma function requires eta_j > 0 (satisfied by exp parameterization). Numerical breakdown if linear predictor overflows (exp of large number).
- PCA: 90% variance threshold arbitrary; breakdown when PCs mix signal and noise.
- Bootstrap: block size b choice; breakdown when b << autocorrelation time (underestimates variance → anti-conservative test → inflated significance).

This gives me solid material.

Let me now also think about "RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock." I'll reinterpret honestly:
- The paper's causal claim is that second-half distributional shifts reflect "neuromuscular fatigue or tactical decisions" (PAGE 11). This is a theory-of-mind about the athlete/coach: are the shifts due to physiological crisis (fatigue) or strategic habit/pacing (tactical)?
- "Counter-trap": the confounds — the model can't distinguish fatigue from tactical substitution, opponent, score state (game state effects), etc. The paper acknowledges these aren't modeled.
- "Clock": the temporal structure — half boundary, block bootstrap, season timing (match 1 opener, match 23 final). The "clock" governs the temporal autocorrelation and the selection of what counts as a half.

I'll be honest that this isn't a prediction contest; there's no "crisis habit regression" in the betting sense. I'll map it to the interpretive ambiguity in the paper.

Actually, I want to be careful not to over-force the sports-betting framing onto a legitimate stats paper. The template seems designed for match prediction tasks. Since the invariants explicitly forbid betting lines and fake equations, and the source is a methods paper, I'll produce a rigorous methodological/forensic analysis using the required section headers but keeping content truthful and grounded. I'll note where the framing doesn't cleanly apply (e.g., "this is not a forecasting artifact, so the 'clock' maps to the temporal-inference structure rather than a game clock prediction").

Let me write the sections. I need >=1,000 words total, with THINK_TRACE >=400 words. Let me aim for a thorough, genuinely rigorous analysis. I'll write substantially more than 1,000 words given the depth expected.

Let me be meticulous with citations — exact page markers and verbatim quotes where I use them.

Verbatim quotes I might use:
- PAGE 6: "The square root transformation naturally moderates the inﬂuence of variance across categories, downweighting diﬀerences arising from high-variance or low-count bins."
- PAGE 6: "Its symmetry and boundedness (0 ≤ H (P, Q) ≤ 1) facilitate interpretable and robust comparisons"
- PAGE 6: "a block bootstrap procedure with block size of b = 10 (1 s) was employed"
- PAGE 6: "Repeating this process 10,000 times produced an empirical null distribution of Hellinger distances for each athlete-match pair."
- PAGE 6: "𝛼 a = 0.05∕ g a , where g a is the number of valid matches played by athlete a"
- PAGE 11: "second-half differences were not conﬁned to one or two performance metrics but reﬂected a broader reshaping of movement intensity proﬁles that may be driven by neuromuscular fatigue or tactical decisions"
- PAGE 9: overdispersion "where the observed variance in movement category counts exceeds the variance predicted by standard multinomial models due to individual athlete diﬀerences, match-speciﬁc contexts, and temporal clustering effects."
- PAGE 3: "To remove low-magnitude noise, velocity values below 0.01 m/s and acceleration values below 0.001 m/s 2 were thresholded to zero"
- PAGE 3: "Due to the right-skewed nature of the raw distributions, log 10 (1 + velocity) and log 10 (1 + acceleration) transformations were applied"
- PAGE 10: "|𝛽 jk ∕SE 𝛽 jk | > 3" significance threshold; "This threshold was determined based on the empirical distribution of standardized coefficients in the dataset"
- PAGE 13 limitations: "match session selection was based on a threshold of at least 25 min per half; while this ensures data quality, it may introduce selection bias"
- PAGE 13: "the selection and binning of quantiles in the quantile cube framework, while aiming for interpretabil-ity and robustness, are somewhat arbitrary and may need tuning for other teams or application scenarios."
- PAGE 13: "important contextual inﬂuences such as weather conditions, opposition strength, ﬁxture congestion, match importance (postseason vs. regular season), and pitch quality were not included in our models"
- PAGE 12: "environmental conditions like moderate altitude reduce high-intensity running and overall distance in collegiate female soccer matches (Bohner et al. 2015)"
- PAGE 2: "reliance on summary statistics can obscure important extremes of the data distribution"

Good. Let me write this now. I'll aim for rigor and honesty. I'll use LaTeX for equations.

Let me structure the whole response. The instructions require these exact XML sections. I'll produce them in order.

Let me draft.

I should keep the summary at the end brief (a few sentences), per response style. Actually the response is dominated by the required XML sections, so I'll just produce them. I won't add a lot of extra prose outside.

Let me write each section carefully.

For THINK_TRACE (>=400 words): multi-hop derivation. I'll walk through: (1) how the pipeline transforms data, (2) the inference logic of the Hellinger test and why significance is near-guaranteed, (3) the compositional/DM reasoning, (4) the PCA interpretation, (5) gray-zone audit of assumptions and confounds. I'll show the Hellinger-Bhattacharyya identity derivation as one "hop."

Let me be careful about the power argument. The block bootstrap builds the null by resampling t1 and t2 deciseconds from a single randomly selected athlete-match-half. Under H0 (both halves same distribution), the empirical Hellinger distances reflect pure sampling noise at sample sizes t1, t2 (tens of thousands of deciseconds). Because H scales roughly as sqrt(d/(4N)) under the null for the multinomial sampling (I can derive an approximate scaling), with large N the null critical values are tiny, so real shifts (even modest) exceed them. Let me derive the null scaling of Hellinger.

Under multinomial sampling with N draws over d cells from true p, E[H^2(p_hat, p)] ≈ (1/2) sum E[(sqrt(p_hat_i) - sqrt(p_i))^2]. For large N, p_hat_i ≈ p_i + noise with var p_i(1-p_i)/N. Delta method: sqrt(p_hat_i) ≈ sqrt(p_i) + (p_hat_i - p_i)/(2 sqrt(p_i)). So (sqrt(p_hat_i)-sqrt(p_i))^2 ≈ (p_hat_i - p_i)^2/(4 p_i). E ≈ var(p_hat_i)/(4 p_i) = p_i(1-p_i)/(4 p_i N) = (1-p_i)/(4N). Sum over i: sum (1-p_i)/(4N) = (d - 1)/(4N) since sum p_i =1, sum over d cells of (1-p_i) = d - 1. Times 1/2: E[H^2] ≈ (d-1)/(8N). So E[H^2_null] ≈ (d-1)/(8N) for comparing an estimate to truth; for two independent estimates each size N, roughly double: (d-1)/(8) (1/N1 + 1/N2)... Actually comparing two independent empirical distributions p_hat1 (N1 draws) and p_hat2 (N2 draws) from the same p: E[H^2] ≈ (1/2)[sum var contributions] = (1/2) sum [p_i(1-p_i)/N1 + p_i(1-p_i)/N2]/(4 p_i) = (1/2)(1/4)(1/N1+1/N2) sum (1-p_i) = (1/8)(1/N1+1/N2)(d-1).

So E[H^2_null] ≈ (d-1)/8 * (1/N1 + 1/N2). With d=100, N1=N2=N: ≈ 99/8 * 2/N = 24.75/N. For N = 27,000 (45 min), H^2 ≈ 9.2e-4, H ≈ 0.030. So the null critical Hellinger distance is on the order of 0.03. Any real half-to-half shift producing H > ~0.03-0.05 is flagged. Given reported max cell proportions ~0.046 and substantial redistribution, real shifts easily exceed 0.03. Hence near-universal significance is a power artifact. This is a legitimate, quantitative gray-zone audit. I'll present it with proper units/assumptions and note it's an approximation (delta method, ignoring block dependence which inflates variance somewhat — so true critical values are a bit larger, but order of magnitude holds).

Actually the block bootstrap with b=10 introduces dependence that increases the variance of p_hat relative to iid multinomial (variance inflation factor ~ related to autocorrelation). So the true null critical values are larger than the iid approximation, meaning the test is somewhat less anti-conservative than the naive iid calc suggests. But the qualitative point (large N → tiny critical values → high power → significance ≠ importance) stands. I'll state this carefully.

Let me make sure I present this as my own derivation/assumption, clearly labeled, not as a claim from the paper. Good — the invariant wants formal equations with assumptions and breakdown regimes. 

Now writing. Let me keep LaTeX clean. I'll use display math with $$ and inline $.

I'll produce a thorough answer. Let me write it.

One more consideration: I must not fabricate. Where I derive the Hellinger null scaling, I'll label it as an analyst derivation under stated assumptions (iid multinomial, delta method), and note the paper uses a block bootstrap (dependent) which modifies constants. Good.

Let me write the final response now.

I'll make THINK_TRACE ~450-550 words, SOURCE_OPERATORS_AND_EQUATIONS substantial with the 3 equations + Hellinger-Bhattacharyya + null scaling + breakdown regimes, RETROCAUSAL_GENEALOGY covering Mosimann 1962, Dirichlet-multinomial, Hellinger/van der Vaart, block bootstrap Künsch 1989/Liu-Singh 1992, Bonferroni, plus multi-week traps (arbitrary binning, reproducibility, package version). RECURSIVE_THEORY_OF_MIND covering the fatigue-vs-tactics interpretive ambiguity, confounds (game state, opponent, score), clock = temporal inference structure, and honesty that it's not a forecasting artifact. CROSS_LAYER_VETO_ADJUDICATION covering physical/biomechanical (spline derivative noise, acceleration second-derivative), weather/altitude (Bohner), and whether distributional shift can be attributed to physiology vs artifact. RLVR_COUNTERFACTUAL_VETOES: 3 falsifiable scenarios with predictions (e.g., (a) if you recompute Hellinger with block size matched to autocorrelation, significance fraction drops below X; (b) empty-cell / short-half breakdown; (c) circular angle binning artifact). Each verifiable against the paper's own quantities.

Let me write.
</NATIVE_REASONING>

<THINK_TRACE>
This artifact is a methodological statistics paper (Thomas & Hannig, JQAS 2026), not a forecasting system, so I map the requested "frontier reasoning" frame onto a forensic interrogation of its inference chain rather than onto any match-prediction task — the invariants forbid betting lines and toy ratios, and the source contains none. My multi-hop audit proceeds in five layers.

Hop 1 — the transform pipeline. Raw GPS is 1 Hz longitude/latitude [PAGE 3]; coordinates are projected to meters, a third-degree interpolating spline is fit and resampled at 10 Hz, and velocity/acceleration are the first/second derivatives. Angle is the angular difference between velocity and acceleration vectors, wrapped mod 360 into [-180,180]. Low-magnitude points (v<0.01 m/s, a<0.001 m/s²) are zeroed and dropped, then log10(1+x) is applied to velocity and acceleration [PAGE 3]. The immediate gray flag: acceleration is a second derivative of spline-fit position, and differentiation amplifies high-frequency noise; the third-degree spline smooths, but the acceleration quantiles (Table 1) are therefore model-dependent, not raw observations.

Hop 2 — the quantization. Global quantile cut-points are computed on the pooled 396 athlete-match-halves, then applied identically to every half [PAGE 4]. d = 5×5×4 = 100 cells [PAGE 5]. Because the boundaries are global and fixed, per-half proportion vectors are directly comparable — a good design choice.

Hop 3 — the test logic. Each half becomes p̂ ∈ Δ^99 (probability simplex). The statistic is Hellinger distance λ = H(p̂¹, p̂²), with a moving-block bootstrap null (b=10 deciseconds = 1 s, 10,000 replicates) and Bonferroni α_a = 0.05/g_a [PAGE 6]. The reported result — 188/198 (94.9%) significant [PAGE 6-7] — is the key interpretive trap. Each half contains ~10⁴–10⁵ deciseconds (a 45-min half is 27,000). Under iid multinomial sampling the null Hellinger scale is tiny (derived below, ~0.03), so the test has enormous power; near-universal rejection reflects power, not necessarily large physiological effect. This is significance masquerading as importance, and the paper's own Figures 5-6 (effect magnitudes) are the correct readout.

Hop 4 — the model. The Dirichlet-multinomial (Eq. 2) with log-linear concentration (Eq. 3) respects compositional closure (time in one cell subtracts from others) and overdispersion [PAGE 9]. The |β/SE|>3 rule is an empirical, non-standard cutoff [PAGE 10].

Hop 5 — the gray zones. Circularity: angle is intrinsically circular, yet it is quantized linearly on a shifted baseline of -30° with unequal bins (Table 2: -30, 31.63, 149.26, -148.70), and the "forward/right/back/left" labels are approximate. Confounding: half-to-half shifts are attributed to "neuromuscular fatigue or tactical decisions" [PAGE 11], but game state, opponent, score, and weather are explicitly unmodeled [PAGE 13]. Selection: the 25-min/half and >5-match filters reduce 33 athletes to 9 [PAGE 2-3], acknowledged as a bias source [PAGE 13]. The audit conclusion: the machinery is sound; the causal labels and the raw significance count are the fragile parts.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>

Equation (1) — Hellinger distance [PAGE 6], discrete, on the shared cell set {1,…,d}, d=100:
$$H(P,Q)=\sqrt{\tfrac{1}{2}\sum_{i=1}^{d}\left(\sqrt{p_i}-\sqrt{q_i}\right)^2},\qquad 0\le H\le 1.$$
Units: dimensionless (probability units). Assumptions: p_i,q_i ≥ 0, Σp_i=Σq_i=1. Derivation of the boundedness claim: expand the square,
$$\sum_i(\sqrt{p_i}-\sqrt{q_i})^2=\sum_i p_i+\sum_i q_i-2\sum_i\sqrt{p_iq_i}=2\Big(1-\sum_i\sqrt{p_iq_i}\Big),$$
so with the Bhattacharyya coefficient $BC(P,Q)=\sum_i\sqrt{p_iq_i}$,
$$H(P,Q)=\sqrt{1-BC(P,Q)}.$$
This confirms the paper's [PAGE 6] verbatim claim: "Its symmetry and boundedness (0 ≤ H (P, Q) ≤ 1) facilitate interpretable and robust comparisons," and the "downweighting differences arising from high-variance or low-count bins." Breakdown/edge regime: empty cells (p_i=0) are handled since √0=0; the failure mode is finite-sample estimation of p from small N, which the 25-min threshold mitigates but does not remove.

Analyst null-scaling (my derivation, not the paper's; stated assumptions): under iid multinomial sampling of N deciseconds over d cells from common p, delta-method gives √p̂_i ≈ √p_i +(p̂_i−p_i)/(2√p_i), hence
$$\mathbb{E}\big[H^2(\hat p^{(1)},\hat p^{(2)})\big]\approx \tfrac{1}{8}\Big(\tfrac{1}{N_1}+\tfrac{1}{N_2}\Big)(d-1).$$
With d=100 and N₁=N₂=27,000 (a 45-min half), this is ≈ 24.75/27,000 ⇒ H²≈9.2×10⁻⁴, H≈0.030 (SI: pure count/proportion units). The paper uses a dependent moving-block bootstrap (b=10 deciseconds [PAGE 6]: "block size of b = 10 (1 s)"), which inflates Var(p̂) above the iid value, so the true critical value exceeds 0.030 — but the order of magnitude shows why 94.9% rejection is a power consequence, not proof of large fatigue.

Equation (2) — Dirichlet-multinomial density [PAGE 10]:
$$f_{DM}(y_i\mid\eta_i)=\frac{\Gamma(N_i+1)\,\Gamma\!\big(\sum_{j=1}^{d}\eta_{ij}\big)}{\Gamma\!\big(N_i+\sum_{j=1}^{d}\eta_{ij}\big)}\prod_{j=1}^{d}\frac{\Gamma(y_{ij}+\eta_{ij})}{\Gamma(\eta_{ij})\,\Gamma(y_{ij}+1)},\quad N_i=\sum_j y_{ij}.$$
Units: y_ij = deciseconds in cell j; N_i = total half playing time (deciseconds); η_ij > 0 dimensionless concentration. Mean: E[y_ij]=N_i η_ij/Σ_k η_ik. Overdispersion regime: total concentration A_i=Σ_j η_ij controls dispersion; A_i→∞ recovers the multinomial (variance→multinomial floor), A_i→0 gives maximal clustering. The paper's stated motivation [PAGE 9]: overdispersion "exceeds the variance predicted by standard multinomial models due to individual athlete differences, match-specific contexts, and temporal clustering effects."

Equation (3) — log-linear concentration [PAGE 10]:
$$\eta_{ij}:=\exp\!\Big(\beta_{j0}+\sum_{k=1}^{r}\beta_{jk}x_{ik}\Big),\quad r=13.$$
The exp map enforces η_ij>0 (positivity). Numerical breakdown: overflow when the linear predictor is large (exp of ≳709 in double precision); identifiability requires the reference-level dummy encoding described [PAGE 10]. Significance rule [PAGE 10, verbatim]: coefficients "were considered statistically significant when |β_jk/SE_β_jk| > 3," an empirical (not α=0.05) threshold "determined based on the empirical distribution of standardized coefficients."

PCA operator [PAGE 8]: Y (n×d, n=396, d=100) → eigendecomposition; 90% cumulative-variance cutoff retains 7 PCs. PC1 loadings ≈ −0.13 (Table 3), PC4 top loading Q1_vel_Q5_acc_Q1_angle = 0.3297 (Table 4). Breakdown: the 90% cutoff is a heuristic; PC2/PC3 were "diffusely distributed… showing no coherent patterns" [PAGE 8], i.e., variance ≠ interpretability.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage is layered. The distributional engine descends from Mosimann (1962) "On the compound multinomial distribution…" [PAGE 9, 18] and Chen & Li (2013) for sparse Dirichlet-multinomial regression [PAGE 17], implemented via MGLM (Zhang & Zhou 2022; Zhang et al. 2017) [PAGE 10]. The distance metric descends from Hellinger/Bhattacharyya via van der Vaart (1998, pp. 211-212) [PAGE 6], chosen explicitly over Kullback-Leibler for symmetry and boundedness. The dependence-robust inference descends from Künsch (1989) and Liu & Singh (1992) moving-block bootstrap [PAGE 6, 18], itself a descendant of Efron's bootstrap. Multiple-comparison control uses Bonferroni (Kaltenbach 2012, p. 72) [PAGE 6]. The high-dimensional backdrop (Bai & Saranadasa 1996; Chen & Qin 2010) is cited only to be rejected [PAGE 6]: those tests "still emphasize aggregate changes and may overlook important extreme fluctuations."

Multi-week traps (reproducibility/legacy hazards a downstream team inherits): (1) The software pin — "MGLM package in R (Zhang and Zhou 2022)… version 0.2.1" [PAGE 10,18] — MLE on a 100-category DM is sensitive to optimizer/starting values; results may drift across versions. (2) The quantile-cube package (quantile-cube, PyPI) [PAGE 14] fixes d and binning, but the paper itself warns "the selection and binning of quantiles… are somewhat arbitrary and may need tuning for other teams or application scenarios" [PAGE 13]. Any multi-week longitudinal reuse that re-derives global cut-points as new matches accrue will silently redefine every historical cell proportion — a non-stationary reference frame. (3) The angle baseline (-30°, Table 2) and the mod-360 wrap are legacy choices baked into the 100-cell indexing; changing them reorders every feature vector, breaking coefficient comparisons across studies.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
I read this section as the interpretive-mind problem the paper actually faces, not a contest clock. The "crisis habit regression" question is: are second-half distributional contractions physiological crisis (fatigue) or strategic habit (pacing/role)? The paper's own language is deliberately dual — "may be driven by neuromuscular fatigue or tactical decisions" [PAGE 11] — and the model cannot separate them because it contains no internal-load, game-state, or substitution covariates.

Counter-trap layer: the obvious counter is that observed high-velocity collapse in the second half is confounded by score state and opponent. A team protecting a lead drops tempo; a team chasing equalizes raises it. Because result and score differential are in the covariate bank X [PAGE 5] but were dropped from the final model (only half, position, playing time retained [PAGE 10]), the DMR half-coefficient absorbs game-state variance. So the "fatigue" reading is not identified — it is one of several observationally-equivalent stories.

Clock layer: here the "clock" is the temporal-inference structure, not a match forecast. Two clocks operate: the within-half block clock (b=10 deciseconds [PAGE 6]) that sets how much autocorrelation the null preserves, and the season clock (Match 1 opener, Match 23 postseason final [PAGE 8-9, 12]). PC1 isolates the Match 1 second half; PC4 isolates Match 23. The paper interprets Match 23 as "accumulated fatigue combined with heightened match intensity" and Match 1 as "early-season conditioning rather than tactical pressure" [PAGE 12] — again unfalsifiable without the omitted covariates.

Recursive regress: a coach acting on a real-time "deviation alert" [PAGE 13] changes behavior (substitution, pacing), which changes the very distribution being monitored. The monitoring policy is not independent of the process it measures — a reflexivity the paper's static half-vs-half design cannot represent. The honest verdict: the framework detects that a shift occurred with high reliability; it does not identify why, and any operational "counter-trap" (e.g., substitute the flagged player) risks intervening on a signal that is partly an artifact of game state.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical layer. The most fragile physical claim is the acceleration quantile. Acceleration is the second derivative of spline-fit position [PAGE 3]; differentiation is a high-pass operator that amplifies GPS position noise (typically ~0.1-0.5 m). A third-degree spline evaluated at 10 Hz partially regularizes this, but the acceleration cut-points in Table 1 (0.0010, 0.4220, 0.8159, 1.2930, 2.0367 m/s²) are conditional on that smoother's bandwidth. Veto proof: if the same trajectories were smoothed with a different spline tension, the 80th-percentile acceleration (2.0367) would move, shifting cells across the Q4/Q5 boundary and mechanically altering PC4 (whose defining feature is "low-velocity, high-acceleration movements" [PAGE 9]). Because PC4 is the paper's marquee "final match" signal and is built entirely on the highest acceleration quantile, its distinctiveness is partly a smoother artifact — this is a genuine biomechanical/measurement veto on the strongest claim.

Weather/altitude layer. The paper concedes "environmental conditions like moderate altitude reduce high-intensity running and overall distance in collegiate female soccer matches (Bohner et al. 2015)" and that "weather conditions… pitch quality were not included in our models" [PAGE 12-13]. Formal veto argument: let the true half-i distribution be P^{(i)} = P^{(i)}(fatigue, game-state, weather, surface). The test rejects H₀: P^{(1)}=P^{(2)}. Rejection is guaranteed if any single argument differs across halves. Weather and surface are constant within a match (same for both halves) so they do not drive the within-match half contrast — that particular confound is neutralized by the paired design. But kickoff-time weather drift, and score-state/opponent, are not. Therefore the within-match Hellinger rejection is robust to time-invariant weather but not to within-match state changes.

Physical-limit veto on "94.9%": a fraction that high is more consistent with a well-powered test against a trivially small null distance than with a large biomechanical effect, per the derived null scale H≈0.030. The veto is not that the shift is unreal — Figure 4 [PAGE 5] shows a visible mass migration toward lower velocity/acceleration — but that its statistical ubiquity cannot be graded as physiological without reporting H magnitudes against a sport-meaningful reference. Net adjudication: biomechanical/measurement vetoes strike the acceleration-dependent PC4 story hardest; the second-half distributional shift survives as real but is causally under-identified.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable, falsifiable scenarios, each checkable against the paper's own quantities.

Veto 1 — Block-length sensitivity (dependence misspecification). Claim to test: the b=10 (1 s) block [PAGE 6] under-preserves the true autocorrelation time of human movement (sprints/turns persist multiple seconds). Prediction: re-running the moving-block bootstrap with b≈30-60 deciseconds (3-6 s) inflates the null critical value c_{a,m}, and the significant fraction drops below 188/198 — plausibly toward the ~150-175 range, with the marginal matches (e.g., Athlete 6, already only 17/19 [PAGE 7]) flipping first. Verifiable: recompute λ vs c under matched block length. Falsified if the significant fraction is stable across b (would indicate autocorrelation is negligible at the 1-s scale).

Veto 2 — Power-vs-effect (the trivial-null regime). Claim to test: significance is driven by large N per half, not effect magnitude. Prediction: subsampling each half to, say, 300 deciseconds and recomputing the null will move the significant fraction sharply below 94.9%, while the observed H values (Figures 5-6) stay ~unchanged. Verifiable: hold λ fixed, vary N, watch rejection rate collapse. Falsified if rejection stays ~95% at small N (would mean genuinely large effects).

Veto 3 — Circular-angle binning artifact. Claim to test: the linear quantile cut of a circular variable (baseline -30°; cut-points -30, 31.63, 149.26, -148.70 [PAGE 4]) plus the mod-360 wrap misclassifies near-±180° movement, contaminating the "backward" cell and any coefficient on it (e.g., the reported forward/backward-vs-lateral asymmetry for forwards [PAGE 11]). Prediction: re-encoding angle with a circular kernel (von Mises binning) shifts a measurable mass of deciseconds across the ±180° boundary, and the forwards' "reduced left-right movement" contrast attenuates. Verifiable: recompute cell proportions under circular binning and diff against Table 2 assignment. Falsified if <1% of deciseconds sit near the ±180° seam (then the artifact is negligible).

All three are decidable from the existing GPS-derived data or the released quantile-cube package [PAGE 14]; none require the confidential coordinates withheld on [PAGE 3].
</RLVR_COUNTERFACTUAL_VETOES>

Bottom line: this is a statistically sound compositional-analysis pipeline whose reliability claims (half-to-half distributional change) are strong, but whose causal labels (fatigue vs tactics), its marquee acceleration-driven PC4 signal, and its headline 94.9% significance rate are each vulnerable to specific, testable vetoes — chiefly dependence misspecification in the block bootstrap, the power-vs-effect gap, and circular-angle binning.