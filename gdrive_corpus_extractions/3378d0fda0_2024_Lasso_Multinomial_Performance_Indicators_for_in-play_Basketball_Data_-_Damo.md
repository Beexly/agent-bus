---
source: "2024 Lasso Multinomial Performance Indicators for in-play Basketball Data - Damoulaki, Ntzoufras, Pelechrinis.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 38
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4812
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper: "Lasso Multinomial Performance Indicators for in-play Basketball Data" by Damoulaki, Ntzoufras, Pelechrinis (2024). The source text has been provided as a markdown conversion of the arXiv PDF.

I need to follow STRICT INVARIANTS:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
<THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important notes:
- The source text says "machine conversion: equations, tables and figures are NOT preserved - consult the PDF for those". However, I have equations embedded in the text (they were converted somewhat). I need to cite exact [PAGE N] markers. But wait - the user provided source text with page markers? Let me check the text. It says "<!-- arXiv:2406.09895v2 [stat.AP], 2024-06-14 (v1); this file converted from the arXiv PDF via pdftotext + scripted reflow, 2026-09-02 -->" and "PAGES: 38". The text itself doesn't seem to have explicit page number markers like [PAGE 1] etc. But the instruction says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." Since I don't have explicit page markers in the text provided, I might need to infer them or note that page markers aren't explicitly present in the conversion. However, looking closely, the text has section headers but no [PAGE N] markers. I should probably reference sections instead, or note that the conversion lacks explicit page breaks. But the instruction is strict: "cite exact [PAGE N] markers and verbatim quotes." Since I don't have them, I cannot invent them. I should probably say [PAGE N/A] or refer to section numbers. But wait - maybe the text implicitly contains page information? No, it's just a markdown dump. I'll cite section numbers and say [SECTION X.Y] instead, or just note that page markers are not present in the provided machine-converted text. However, the user explicitly asked for [PAGE N] markers. Since I cannot hallucinate them, I'll use [SECTION n.n] as a proxy, or simply refer to the document sections and note that the pdftotext conversion did not preserve explicit page folios. But to be safe and compliant, I should probably write something like "Since the provided conversion lacks explicit page folios, section references are used instead of [PAGE N]." Actually, looking again at the prompt: "When source pages are provided, cite exact [PAGE N] markers..." The user provided "PAGES: 38" but the text itself doesn't have page markers. I think the best approach is to use the section numbers as citations since those are explicit in the text, e.g., [§3.3.2], and mention that explicit page numbers were not preserved in the machine conversion. But the instruction says "cite exact [PAGE N] markers". If I don't have them, I can't cite them. I'll do my best by referencing sections and noting the limitation.

Wait, maybe I should look for any page-like patterns. The text is continuous. There are no [PAGE X] markers. I will proceed with section citations and explicitly state that the machine conversion did not preserve explicit page folios, so section-based citations are used. This is honest and doesn't violate the "no fake" rule.

Let me plan the content:

<THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
I need to do a deep derivation:
- Start from data: n=322,852 possessions, 717 players, m=1437 columns.
- Linear normal regression model (Eq 1): Pts_i ~ N(mu_i, sigma). mu_i = b0 + sum b_j X_ij + sum beta_ko X_ko + sum beta_kd X_kd.
- Coding: offensive 0/1, defensive 0/-1.
- Ridge: lambda_min = 241.07, shrinkage >99%, LTP problem (232 players <200 min).
- Lasso: lambda_min = 0.27, 553 offensive/574 defensive zeroed (reference group), 184 offensive/143 defensive non-zero.
- Binary logistic: Yi = I(Pts_i > 0), Bernoulli(Pi), logit(Pi) = mu_i. R2 ≈ 0.89 between ridge binomial and ridge normal. Conversion: RAPMB_k = 0.02 × RAPMk + epsilon_k, epsilon_k ~ N(0, 0.008). Wait, I need to check if this equation is in the text. Yes: "The estimate equation3 allows us to compute..." and then "RAPMB k = 0.02 × RAPMk + εk , εk ∼ N (0, 0.008 )". That's equation (3)? Actually equation (3) is multinomial probability sum. The linear relationship seems to be inline text, maybe not numbered as an equation but referred to as estimate equation3. I'll cite it carefully.
- Multinomial: YiM in {0,1,2,3+}, pi_l sum to 1. Separate binomials for l=1,2,3 vs baseline 0. log(P_i0 / P_iℓ) = mu_iℓ? Actually text says: log P_i00 = mu_iℓ? Let's read: "Yi = ... with Yi ∼ Bernoulli Pi and log Pi00 = µiℓ .(6)" That seems garbled. Probably log(P_iℓ / P_i0) = mu_iℓ. I'll reconstruct carefully: separate binomials for category ℓ vs baseline 0, logit(P(Y_iM = ℓ | Y_iM ∈ {0, ℓ})) = mu_iℓ.
- Expected points formula: EPTS_kr = Π_rk1 + 2×Π_rk2 + 3.01×Π_rk3. (Eq 7). Value 3.01 is average points for possessions with >=3 points.
- Probabilities under reference scenario: Π_rkℓ = exp(mu_kℓ) / (1 + exp(mu_k1) + exp(mu_k2) + exp(mu_k3)), mu_rkℓ = b0ℓ + b_rkℓ. (Eq 8).
- wEPTS: wEPTS_kr = W_kr EPTS_kr + (1 - W_kr) EPTS_0r. (Eq 10). W_kr = n_rk / n_rtk (proportion of possessions player k participates). EPTS_0r = (e^{b01} + 2e^{b02} + 3.01e^{b03}) / (1 + e^{b01} + e^{b02} + e^{b03}). (Eq 11).
- External validation criteria: 1) All NBA teams, 2) Low time players (bottom 50 min in top-100 RAPM), 3a) Starters in top-100, 3b) Starters in bottom-100, 4) Box score stats.
- Results: wEPTS outperforms: Criterion 1: 67% vs 47% (multinomial EPTS) vs 40% (lasso normal). Criterion 2: 2% low-time players in top-100 (wEPTS) vs 9% (EPTS) vs 3% (lasso normal). Criterion 3a: 74% starters vs 47% vs 55%. Criterion 3b: 45% vs 20% vs 23%. Box scores: wEPTS best in PTS (44%), AST (36%), DREB (22%), STL (28%), BLK (22%). RMSE: multinomial 1.62 < normal 1.86. Bootstrap chi-square p=0.55 good fit.
- Gray zones / audit: The "3+" category averages to 3.01. Poisson inappropriate because observed probabilities non-decreasing (0 > 2 > 3 > 1) whereas Poisson decreasing. Ordered multinomial violates proportional odds (Brant test p < 0.001). Joint vs separate estimation: 305 vs 292 players zeroed (31.4% vs 30%), Pearson r ≈ 95%. After-lasso vs lasso minor differences. LTPs still 38% of top-100 in full data EPTS but wEPTS robust.

I need >= 400 words here.

<SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
I need to write formal LaTeX equations. I'll restate the key equations from the paper, properly formatted. I'll cite sections instead of pages since page markers absent, e.g., [§3.3.2], [§3.3.5], [§5.1]. I'll mention units: possessions (count), points per possession (dimensionless points), minutes (min), coefficients in points per possession (normal model) or log-odds (logistic). Breakdown of dataset: 322,852 possessions, 59.6% zero points, 26.2% two points, 11.6% three points, 2.5% one point, 0.1% >3 points. 717 players, 232 LTPs (<200 min). Ridge lambda 241.07, lasso lambda 0.27. Correlation R^2 ≈ 0.89 between normal and binomial ridge RAPM. Conversion slope 0.02, intercept noise sigma 0.008.

<RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
Lineage: Oliver (2002) plus-minus, Rosenbaum (2004) APM, Ilardi & Barzilai (2007, 2008) ridge RAPM, Sill (2010) lambda 2000 standard, Macdonald (2011, 2012) NHL weighted least squares/ridge, Winston (2012) WINVAL, Tibshirani (1996) lasso, Gramacy et al (2013, 2015) Bayesian lasso logistic hockey, Hvattum (2015, 2018, 2020) soccer plus-minus, Fearnhead & Taylor (2010) Bayesian APM, Deshpande & Jensen (2016) Bayesian linear regression, Grassetti et al (2021) Bayesian RAPM lineup effects, Matano et al (2023) Augmented APM soccer, Schultze & Wellbrock (2017) weighted plus-minus soccer. Multi-week traps: garbage time, collinearity of lineups, low-minute players, LTP overestimation, shrinkage bias of lasso, reference group definition, cumulative season effects vs single-game noise, selection bias in All-NBA validation (official NBA website announcements), box-score criterion circularity (using box scores to validate plus-minus which overlaps conceptually).

<RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
This section is about modeling the mindset of analysts/coaches using these metrics. "Crisis habit regression" = tendency under pressure to revert to familiar ridge RAPM or box-score heuristics despite evidence. "Counter-trap" = lasso/multinomial/wEPTS as the structured alternative that avoids the trap. "Clock" = game clock / possession clock, garbage time, end-of-game scenarios. I need to discuss how coaches might regress to crisis habits (overvaluing high-usage scorers in crunch time, ignoring defensive EPTS), counter-trap (using wEPTS to identify undervalued role players and 3+ gravity creators like Giannis/LeBron), and clock (possession-level data, garbage time inclusion/exclusion, 200-minute LTP threshold, regular season vs playoffs 93.2% vs 6.8%). Also recursive theory of mind: players anticipating how they are rated (e.g., chasing EPTS vs wEPTS), coaches adjusting lineups based on ratings, creating feedback loops.

<CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
The paper is purely statistical/possession-based; no physical/biomechanical/weather variables are included. However, I can discuss veto layers: physical (player load, fatigue not in model), biomechanical (shooting mechanics, shot distance not in model), weather (indoor sport, irrelevant but arena altitude/humidity could affect ball handling not modeled). The veto: any claim that wEPTS captures "true" physical contribution is vetoed because the model conditions only on lineup composition and possession outcome; it omits shot location, defensive pressure, game state, score difference, time remaining. These are veto variables. The model assumes exchangeability of possessions given lineup, which is physically false. Breakdown regime: when lineup composition is constant but game state changes (e.g., garbage time vs close game), wEPTS cannot distinguish. Also, the model assumes reference group players have zero effect; if reference group is not truly average, EPTS/wEPTS biased.

<RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>
RLVR = Reinforcement Learning from Verified Rewards? Or just "verifiable counterfactual vetoes". I need 3 scenarios where the model would fail / be vetoed, with predictions.
1. Garbage time possession: LTP plays 5 minutes in blowout, lasso shrinks to zero but wEPTS might still assign positive weight if they participate in some possessions. Veto: exclude possessions with score differential > 20 points in final 5 minutes. Prediction: wEPTS correlation with All-NBA drops from 67% to <50% if garbage time included vs excluded.
2. Injury replacement: Star player out, backup plays 35 mins, lasso gives backup high RAPM due to teammate quality (playing with stars). Veto: leave-one-out lineup stability test. Prediction: backup's wEPTS drops >40% when star returns.
3. Three-point gravity player (Giannis/LeBron example): player doesn't shoot many threes but creates them. Veto: remove all possessions where player assists on a 3PA; does their EPTS for 3+ remain significant? Prediction: playmakers' 3+ component collapses, proving the metric captures gravity via teammates' probabilities, not just own shooting.

I must ensure no betting lines. No spreads, totals, moneylines, odds. I can mention probabilities but not betting odds.

Word count: >= 1000 words total across sections. THINK_TRACE alone >= 400. Others can be substantial.

Let me draft carefully, ensuring formal LaTeX.

I need to be careful about citing [PAGE N]. Since the text provided is a machine conversion without page numbers, I should explicitly state this and use section citations. I will write something like: "[Note: The provided arXiv conversion lacks explicit page folios; citations below use section markers §n.n instead of [PAGE N] as mandated by the source format.]" This is honest.

Let's write.

THINK_TRACE (>=400 words):
Derive from data to wEPTS.
- n=322,852 possessions, outcome y in {0,1,2,3+}.
- linear model (1), ridge lambda=241.07 >99% shrinkage, LTP issue.
- lasso lambda=0.27, sparsity: 184 off, 143 def non-zero.
- binary logistic R^2=0.89 with normal ridge; conversion equation slope 0.02.
- multinomial separate logits, 3 categories vs baseline.
- EPTS formula with 3.01 average for 3+.
- wEPTS weight W = n_rk / n_rtk.
- validation criteria table values.
- Gray-zone audit: the 3+ binning loses 4/5/6 distinction; reference group zero assumption; lasso bias vs after-lasso minimal difference; low-time players still 38% of top-100 EPTS full data but wEPTS robust; Poisson and ordered multinomial rejected.

SOURCE_OPERATORS_AND_EQUATIONS:
List equations (1) through (11) in LaTeX.
Dataset breakdown table in text.
Units: points per possession (pps), minutes, lambda dimensionless tuning parameter.
Cite sections.

RETROCAUSAL_GENEALOGY:
Lineage paragraph.
Multi-week traps: 82-game season, garbage time accumulation, lineup collinearity over weeks, validation criteria using season-end All-NBA teams (lagging indicator), box-score criteria circularity.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: coach under pressure reverts to ridge/OLS or box-score plus-minus.
Counter-trap: wEPTS as structured shrinkage.
Clock: possession clock, shot clock, game clock, garbage time, 200-minute threshold.
Recursive loops: players optimize for metric, coaches adjust, metric must adapt.

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer: no fatigue, load management.
Biomechanical: no shot mechanics.
Weather: indoor, negligible but arena effects unmodeled.
Veto conditions: lineup stationarity assumption violated by substitutions mid-possession? Actually possession is constant lineup. But game state changes. Veto: if score differential changes strategic behavior, wEPTS is confounded.

RLVR_COUNTERFACTUAL_VETOES:
3 scenarios with predictions.

Let's make sure total words >= 1000. THINK_TRACE ~500. SOURCE_OPERATORS ~400. RETROCAUSAL ~300. RECURSIVE ~300. CROSS_LAYER ~200. RLVR ~200. Total ~1900. Good.

No betting lines. No odds.

Let's write the final response.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The data pipeline begins with n = 322,852 NBA possessions from the 2021–22 season [§3.1–3.2]. Each observation is a single possession with outcome pts_i ∈ {0, 1, 2, 3+}; the rare 4–6 point outcomes are folded into the 3+ category. Marginally, 59.6% of possessions yield zero points, 26.2% yield two, 11.6% yield three, 2.5% yield one (largely because pairs of free throws are coded as two-point possessions), and 0.1% exceed three points [§3.2]. The design matrix is n × m with m = 1,437 columns: 717 players × 2 (offensive/defensive binary dummies) plus home-offense and season-type covariates [§3.2]. Offensive dummies are coded 0/1; defensive dummies are coded 0/−1, so each player receives separate ORAPM and DRAPM coefficients [§3.2].

The baseline normal linear model is [Eq. 1 in §3.3.2]:
Pts_i ∼ N(μ_i, σ), μ_i = b₀ + Σⱼ bⱼXᵢⱼ + Σₖ βᵏᵒXᵢₖ + Σₖ βᵏᵈXᵢₖ.
Ridge regression with 10-fold cross-validation selects λ_min = 241.07, far below the conventional RAPM bibliography value of 2000 [§3.3.2]. Shrinkage exceeds 99%, yet low-time players (LTPs; <200 minutes season-to-date, 232 of 717 players) dominate the ridge leaderboard [§3.3.2]. Lasso with λ_min = 0.27 introduces exact zeros: 553 offensive and 574 defensive players are assigned to the reference group, leaving 184 offensive and 143 defensive players with non-zero ratings [§3.3.2]. Even so, 14% of the lasso top-100 are LTPs versus 77% under ridge [§3.3.2].

Because pts is discrete, the normal likelihood is misspecified. A binary logistic model Yi = I(Pts_i > 0), Yi ∼ Bernoulli(P_i), logit(P_i) = μ_i, is fitted next [§3.3.4]. Ridge binomial and ridge normal RAPMs exhibit R² ≈ 0.89, with the reported linear calibration RAPM^B_k = 0.02 × RAPM_k + ε_k, ε_k ∼ N(0, 0.008) [§3.3.4]. This justifies interpreting conventional normal RAPMs as crude log-odds proxies, but the binary collapse discards one-versus-two-versus-three-point information.

The multinomial model partitions YiM ∈ {0,1,2,3} and is fitted indirectly through three separate binomials: category ℓ versus baseline 0, for ℓ ∈ {1,2,3} [§3.3.5, Eq. 5–6]. The category probabilities are [Eq. 4]:
π_iℓ = exp(μ_iℓ) / [1 + exp(μ_i1) + exp(μ_i2) + exp(μ_i3)], Σℓ π_iℓ = 1.
RMSE falls to 1.62 versus 1.86 for the normal model, and a bootstrap chi-square test on 1,000 simulated samples gives p = 0.55, indicating adequate marginal fit [§3.3.5].

Expected points per possession for player k, role r ∈ {o,d}, under the reference-lineup counterfactual (all other court occupants have zero coefficients) is [Eq. 7]:
EPTS^r_k = Π^r_k1 + 2·Π^r_k2 + 3.01·Π^r_k3,
where 3.01 is the conditional mean of possessions with ≥3 points [footnote 5, §3.3.5]. Under the reference scenario [Eq. 8]:
Π^r_kℓ = exp(μ^r_kℓ) / [1 + exp(μ^r_k1) + exp(μ^r_k2) + exp(μ^r_k3)], μ^r_kℓ = b₀ℓ + b^r_kℓ.

The weighted extension [Eq. 10–11] introduces participation weight W^r_k = n^r_k / n^r_tk, the fraction of team k’s offensive/defensive possessions in which player k appears:
wEPTS^r_k = W^r_k·EPTS^r_k + (1 − W^r_k)·EPTS⁰_r,
EPTS⁰_r = [exp(b₀1) + 2·exp(b₀2) + 3.01·exp(b₀3)] / [1 + exp(b₀1) + exp(b₀2) + exp(b₀3)].
This shrinks low-participation players toward the reference-lineup expectation, directly targeting the LTP inflation problem.

External validation uses four criteria: (1) All-NBA team representation, (2) low-time players in the top 100, (3a) starters in the top 100, (3b) starters in the bottom 100, and (4) overlap with top-50 box-score leaders [§4.1]. Results: wEPTS identifies 67% of All-NBA players (criterion 1) versus 47% for multinomial EPTS and 40% for lasso-normal RAPM; only 2% of wEPTS top-100 are LTPs versus 9% for EPTS and 3% for lasso-normal; 74% of wEPTS top-100 are starters versus 47% EPTS and 55% lasso-normal; and wEPTS leads on points, assists, defensive rebounds, steals, and blocks overlap [Tables 5–6, §5.2].

Gray-zone audit. (i) Binning 4–6 point possessions into “3+” and assigning them a fixed value of 3.01 points discards the higher tail; the model cannot distinguish a four-point foul possession from a three-point shot. (ii) The reference group is defined ex post by lasso’s zeroing mechanism; if the “average” player is not truly average, EPTS and wEPTS inherit a location bias. (iii) After-lasso refitting produces nearly identical validation scores (Table 7–8), implying the lasso shrinkage bias is small relative to sampling noise but not identifiably zero. (iv) On the full dataset (no LTP filter), LTPs constitute 38% of the top-100 EPTS players [Fig. 9, §5.4], while wEPTS remains stable—evidence that the participation weight, not the lasso sparsity alone, resolves the low-minute distortion. (v) The Poisson alternative is rejected because observed scoring probabilities are non-decreasing (0 > 2 > 3 > 1) whereas Poisson implies monotone decay [Fig. 7, §4.5]; the ordered multinomial is rejected by the proportional-odds assumption (Brant test p < 0.001) because player effects differ across one-, two-, and three-point categories [Fig. 8, §4.6]. (vi) Joint versus separate multinomial estimation zeroes 305 versus 292 players (31.4% vs. 30%) but yields Pearson r ≈ 0.95 between EPTS vectors, so the computational simplification is empirically benign [§4.4].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, and equation breakdown. Explicit page folios are not preserved in the supplied machine-converted arXiv text; citations therefore use section markers §n.n in lieu of [PAGE N].

Dataset (§3.1–3.2):
- Observations (possessions): n = 322,852.
- Columns: m = 1,437 = 2·717 player dummies + home-offense + season-type.
- Players: K = 717 total; LTPs = 232 (<200 min season) = 32.2%.
- Outcome distribution: P(pts=0)=0.596, P(pts=1)=0.025, P(pts=2)=0.262, P(pts=3)=0.116, P(pts≥3)=0.001 (aggregated into “3+” for modeling).

Normal linear RAPM (§3.3.2, Eq. 1):
Pts_i ∼ 𝒩(μ_i, σ²), μ_i = b₀ + Σ_{j=1}^{p} b_j X_{ij} + Σ_{k=1}^{K} β_{ko} X_{ik} + Σ_{k=1}^{K} β_{kd} X_{ik}.
Units: μ_i in points per possession (pps); β coefficients in pps; σ² in pps².
Ridge tuning: λ_min = 241.07 via 10-fold CV; shrinkage >99%; standard bibliography value λ = 2000 is rejected by CV.

Lasso normal (§3.3.2):
λ_min = 0.27 via 10-fold CV. Zeroed: 553 offensive / 574 defensive players (reference group); non-zero: 184 offensive / 143 defensive.

Binary logistic RAPM (§3.3.4, Eq. 2):
Y_i = I(Pts_i > 0), Y_i ∼ Bernoulli(P_i), P_i = 1 / (1 + exp(−μ_i)).
Cross-model calibration: RAPM^B_k = 0.02 · RAPM_k + ε_k, ε_k ∼ 𝒩(0, 0.008), R² ≈ 0.89 between ridge-binomial and ridge-normal ratings.

Multinomial separate logits (§3.3.5, Eq. 3–6):
Y_{iM} = Pts_i for Pts_i ∈ {0,1,2}; Y_{iM} = 3 for Pts_i ≥ 3.
π_i = (π_{i0}, π_{i1}, π_{i2}, π_{i3}), Σ_{ℓ=0}^{3} π_{iℓ} = 1.
For each ℓ ∈ {1,2,3}, separate Bernoulli contrast of category ℓ vs. baseline 0 with logit(P_iℓ) = μ_{iℓ}.

Expected points (§3.3.5, Eq. 7–8):
EPTS^r_k = Π^r_{k1} + 2·Π^r_{k2} + 3.01·Π^r_{k3}, r ∈ {o,d}.
3.01 = conditional mean points given Pts_i ≥ 3 (units: points).
Under reference lineup (all co-players β = 0): μ^r_{kℓ} = b_{0ℓ} + b^r_{kℓ}.

Weighted expected points (§5.1, Eq. 10–11):
W^r_k = n^r_k / n^r_{tk}, dimensionless participation proportion ∈ [0,1].
wEPTS^r_k = W^r_k · EPTS^r_k + (1 − W^r_k) · EPTS⁰_r.
EPTS⁰_r = [exp(b_{01}) + 2·exp(b_{02}) + 3.01·exp(b_{03})] / [1 + exp(b_{01}) + exp(b_{02}) + exp(b_{03})].

Model fit diagnostics (§3.3.5):
Multinomial RMSE = 1.62 pps vs. normal RMSE = 1.86 pps. Bootstrap chi-square p = 0.55 (> 0.05) for marginal frequencies.

Validation criteria and results (§4.1, Tables 1–6):
Criterion 1 (All-NBA): lasso-normal 40%, lasso-multinomial EPTS 47%, wEPTS 67%.
Criterion 2 (LTPs in top-100): lasso-normal 3%, EPTS 9%, wEPTS 2%.
Criterion 3a (starters in top-100): lasso-normal 55%, EPTS 47%, wEPTS 74%.
Criterion 3b (starters in bottom-100): lasso-normal 23%, EPTS 20%, wEPTS 45%.
Criterion 4 (box-score overlap): wEPTS leads on PTS 44%, AST 36%, DREB 22%, STL 28%, BLK 22% (versus EPTS 38/28/14/20/14 and lasso-normal 42/26/8/14/12).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage. The paper descends from Oliver (2002) plus-minus philosophy, Rosenbaum (2004) Adjusted Plus-Minus, and Ilardi & Barzilai (2007, 2008) ridge-regularized RAPM. Sill (2010) fixed the conventional ridge penalty at λ = 2000, which this study rejects via cross-validation in favor of λ_min = 241.07 for the normal model and λ_min = 0.27 for lasso. Tibshirani (1996) supplies the lasso operator; Gramacy et al. (2013, 2015) demonstrate lasso logistic regression in hockey, establishing the precedent for sparse plus-minus in invasion sports. Hvattum (2015, 2018, 2020) and Sæbø & Hvattum (2015, 2018) extend ridge plus-minus to soccer with segment-level and league adjustments; Macdonald (2011, 2012) applies ridge to NHL goal prevention; Winston (2012) introduces WINVAL win-probability impacts; Fearnhead & Taylor (2010) and Deshpande & Jensen (2016) bring Bayesian hierarchical and Laplacian-prior formulations to NBA APM; Grassetti et al. (2021) add lineup effects and shot-type covariates to basketball RAPM. Matano et al. (2023) and Schultze & Wellbrock (2017) show that weighting by opponent strength and goal importance can outperform raw APM in soccer, but the present study explicitly avoids betting-derived opponent weights, consistent with invariant 1.

Multi-week traps across an 82-game season plus playoffs. (1) Garbage-time accumulation: possessions late in blowouts are structurally different from close-game possessions, yet the dataset includes all 322,852 possessions without a game-state covariate; over a multi-week horizon, LTPs disproportionately appear in garbage time, inflating normal-model RAPM. (2) Lineup collinearity: specific five-player units recur across weeks, making individual coefficients non-identifiable without shrinkage; ridge distributes credit across collinear teammates, lasso arbitrarily selects one, and the reference-group definition depends on which players are zeroed first. (3) Validation lag: Criteria 1 and 4 use end-of-season All-NBA teams and season-total box-score leaders, which are lagging, summary constructs; a rating optimized to match them may overfit to season-end reputation rather than in-possession causality. (4) Selection bias in the “starters” definition: top-six most-played per team are labeled starters, conflating role with minutes and potentially validating the metric on the same participation variable that wEPTS uses as a weight. (5) Temporal non-stationarity: player effects evolve across the season (injuries, role changes, trades), but the model pools the entire 2021–22 season into one static coefficient vector; a multi-week rolling implementation would likely show coefficient drift that the current cross-validated λ masks.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock.

Crisis habit regression: When a coach or front office faces a losing streak or playoff elimination pressure, the cognitive habit is to revert to the most legible, legacy metric—ridge-normal RAPM or raw plus-minus—because it assigns non-zero ratings to everyone and is easily explained to stakeholders. The paper documents that ridge-normal places 77% of LTPs in its top 100 and assigns all top-20 offensive/defensive slots to LTPs [§3.3.2]. Under crisis, decision-makers overweight these fluke leaders, overpaying low-minute players who happened to be on strong units in garbage time, while underweighting high-usage starters whose defensive contributions are diffuse.

Counter-trap: The lasso-multinomial wEPTS framework is the structured counter-trap. It refuses to give every player a rating (exact zeros), conditions on the discrete points distribution, and weights by actual participation W^r_k. It identifies creators of high-quality three-point shots for teammates (e.g., Giannis Antetokounmpo and LeBron James gravity effects) rather than only volume shooters [§1]. By shrinking low-participation players toward EPTS⁰, it prevents the crisis habit of overvaluing a 5-minute blowout performer.

Clock: Three temporal layers operate simultaneously. (i) Possession clock: the unit of analysis is one possession, so shot-clock violations, fast breaks, and set offenses are implicit in the lineup composition but not explicitly modeled; no time-remaining covariate is included despite the discussion proposing it as future work [§6.2]. (ii) Game clock / garbage time: the dataset contains regular season (93.2%) and playoff (6.8%) possessions without score-differential stratification; end-of-game clock management changes optimal lineups, yet the static model cannot adapt possession-by-possession. (iii) Season clock: the 200-minute LTP threshold is a season-total filter, not a rolling-window criterion; a player crossing the threshold in week 20 is treated identically to one who crossed it in week 2, ignoring recency.

Recursive theory of mind loop: Players and agents observe that wEPTS rewards participation and expected points creation, not just box-score counting. A rational player may therefore seek possessions that raise W^r_k (more minutes) and EPTS^r_k (higher-efficiency usage) simultaneously, potentially altering shot selection to inflate expected-points contribution. Coaches, anticipating this, may overweight wEPTS in lineup construction, creating a feedback loop where the metric changes the behavior it measures. The after-lasso comparison [Tables 7–8, §5.3] shows little performance difference between biased lasso coefficients and refitted MLE coefficients, suggesting the recursive distortion from shrinkage is second-order relative to sampling variability, but it is not zero.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto layers.

Physical layer: The model contains no player-load, fatigue, or travel variables. A back-to-back set, altitude game, or minutes-restriction protocol changes the physical contribution of a given lineup but leaves X_ik unchanged. Veto condition: if two possessions share identical lineups but differ in cumulative fatigue (e.g., starters’ 40th minute versus reserves’ 5th minute), wEPTS cannot distinguish them; any claim that wEPTS isolates “true” physical impact is vetoed.

Biomechanical layer: No shot location, release height, defender distance, or dribble-motion covariates enter the design matrix [§6.2 proposes shot-type as future work]. A player who generates open threes via gravity receives credit through teammates’ Π^r_{k3}, but the model cannot attribute whether the biomechanical mechanism was screening, driving-and-kicking, or off-ball movement. Veto condition: if a player’s high wEPTS is driven entirely by one biomechanical skill (e.g., elite screening) that is not stable across contexts, the metric overgeneralizes.

Weather layer: Basketball is indoors, so ambient weather is nil; however, arena-specific factors (altitude, humidity affecting ball grip, crowd noise affecting communication) are unmodeled. Veto condition: cross-arena comparison of wEPTS is invalid if arena effects systematically interact with lineup composition (e.g., high-altitude home teams fatigue visiting defenses more in the fourth quarter).

Breakdown regime: The core identification assumption is that, conditional on the five offensive and five defensive dummies, possession outcomes are exchangeable and that all non-reference players have zero effect. This breaks down when (a) lineup composition changes mid-possession (impossible by definition, but substitutions create adjacent-possession dependence), (b) game state (score differential, time remaining) alters strategy independently of lineup, or (c) the reference group is not representative of an average player. Under any of these, EPTS and wEPTS are biased estimators of the causal player effect, and the external validation criteria—which correlate with season-end box scores—may validate the bias rather than correct it.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with predictions.

Scenario 1: Garbage-time possession exclusion. Construct a counterfactual dataset removing all possessions with absolute score differential > 20 points in the final 5 minutes of regulation. Refit the lasso-multinomial model and recompute wEPTS. Veto rule: if the correlation between wEPTS and All-NBA criterion membership falls from 67% to below 50%, the original metric is vetoed as garbage-time sensitive. Prediction: wEPTS correlation drops to approximately 48–52% because LTPs and low-stakes possessions inflate participation weights W^r_k for non-star players.

Scenario 2: Star-injury leave-one-out lineup stability. Select a top-20 wEPTS offensive player and simulate his removal by setting his offensive dummy to zero for all possessions in which he played, while refitting only the affected coefficient via one-step lasso debiasing. Veto rule: if the replacement player’s wEPTS increases by more than 40% solely because of the star’s absence (without a corresponding increase in team expected points), the star’s individual wEPTS is vetoed as lineup-contingent. Prediction: for high-gravity playmakers (e.g., creators of teammate threes), the replacement’s wEPTS rises less than 20%, confirming that the star’s rating reflects durable playmaking rather than lineup luck; for pure finishers, the increase exceeds 40%.

Scenario 3: Three-point gravity removal test. For players identified by the model as having high EPTS in the “3+” category despite low personal three-point volume (the Giannis/LeBron class), remove all possessions in which they recorded an assist on a three-point attempt and recompute their 3+ component Π^r_{k3}. Veto rule: if the 3+ component collapses by more than 60%, the original rating is vetoed as capturing teammate shooting rather than player creation. Prediction: playmakers’ 3+ components fall by 65–80%, validating that the multinomial decomposition successfully isolates gravity-driven creation; pure shooters’ 3+ components fall by less than 30%.
</RLVR_COUNTERFACTUAL_VETOES>