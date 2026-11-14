---
source: "[15590410 - Journal of Quantitative Analysis in Sports] Meta-analytics_ tools for understanding the statistical properties of sports metrics.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 15
model: deepseek/deepseek-v4.1-flash-1017
words: 8279
---

<NATIVE_REASONING>
We need answer to user. They provided source and prompt. Need produce structured response exact XML sections, >=1000 words, no betting lines, no toy equations. Need analyze sports metrics meta-analytics. Need think trace >=400 words, formal LaTeX equations with units/page citations/breakdown, retrocausal genealogy, recursive theory of mind (crisis habit regression vs counter-trap vs clock), cross-layer veto adjudication (physical/biomechanical/weather veto proof), RLVR counterfactual vetoes 3 verifiable scenarios + predictions.

Need be careful: The prompt says "DRIVE SOURCE: ..." It's a research paper. Need likely create deep analysis. No specific question besides source. We must infer task: produce frontier reasoning foundry response. Need include citations exact [PAGE N] markers and verbatim quotes. Need no betting lines/odds. Need avoid spreads/totals/moneylines. Mention "decision-makers" okay but not gambling lines. Can mention gambling in quote? Paper says gambling decision but invariant says zero betting lines: never mention spreads totals moneylines odds. We can quote "gambling decision" maybe not line. Better avoid betting terms except maybe no. The paper abstract mentions gambling decision; quoting could include "gambling" but not odds. Invariant says zero betting lines, not zero word gambling. But safer maybe not mention gambling in our own. We can quote abstract? Need cite exact quotes. Could use quote with "management, coaching, or gambling decision" but "gambling" might be risky. I can omit if not necessary. Need not mention odds.

Need formal operators. From paper:
- Data array X, X_spm metric m player p season s.
- Linear mixed effects: X_spm = μ_m + Z_sm + Z_pm + Z_spm + ε_spm, variances σ²_SM, σ²_PM, σ²_SPM, τ²_M. Page 2.
- Discrimination D_sm = 1 - E_sm[V_spm[X]] / V_sm[X]. Under LME = (σ²_PM+σ²_SPM)/(σ²_PM+σ²_SPM+τ²_M). Page 3.
- Stability S_m = 1 - E_m[V_pm[X] - V_spm[X]] / (V_m[X] - E_m[V_spm[X]]). Under LME = σ²_PM/(σ²_PM+σ²_SM+σ²_SPM). Page 3.
- Independence with Gaussian copula Z_sp iid MVN(0,C); X_spm = F_m^{-1}[Φ(Z_spm)]; I_mM = Var[Z_spm | {Z_spq:q∈M}]/Var[Z_spm] = C_m,m - C_m,M C^{-1}_{M,M} C_{M,m}. Page 4.
- PCA variance explained F_k = sum_{i=1}^k λ_i / sum_{i=1}^M λ_i. Page 4.
- Estimators: D_hat_sm = 1 - (1/P) sum_p BV[X_spm] / (1/P) sum_p (X_spm - \bar X_s·m)^2. S_hat. Need enough.
- Shrinkage hierarchical Bernoulli: X_3P%_sp = z_sp/n_sp, z_sp~Bin(n_sp, π_sp), π_sp~Beta(r_p π^0_p, r_p(1-π^0_p)). Page 9.
- Algorithm 1 independence curves. Need cite.

Need units: Variances in squared metric units; discrimination/stability/independence dimensionless in [0,1] (stability proof). Sampling variance τ²_M in squared metric units; bootstrap BV in squared units. PCA eigenvalues in variance units of latent normal? Actually C correlation matrix dimensionless; eigenvalues dimensionless. F_k dimensionless. Information/entropy? Could mention independence as fraction of variance, not bits. Need formal. Break down singularity regimes: e.g., D=1 if τ²=0 (infinite season/no sampling noise); D=0 if signal variance zero (all between-player variance chance). Stability: S=1 if no within-player/context/season changes and no sampling? From formula under LME S=1 when σ²_SM+σ²_SPM=0; S=0 when σ²_PM=0 (within-player variance dominates). Need note denominator breakdown if V_m[X] = E_m[V_spm[X]] (total variance equals sampling variance) -> 0/0; undefined. D denominator V_sm=0 if all players identical metric variance zero -> undefined; finite sample issue. Independence: I=1 if metric independent orthogonal to M; I=0 if perfectly linearly predictable in latent space. C singular if collinearity; use pseudo-inverse/regularization. PCA F_k = 1 when selected components reconstruct all, etc. Need note 3P%: over 50% variation due to chance quote [PAGE 6]. "three point percentage... least stable and least discriminative" [PAGE 6]. Steals I≈0.40, "only 60% of variation in steals... explainable by other 69 metrics" [PAGE 6]. TK I=0.73, others explain 27% [PAGE 7]. NBA F15≈0.75; omnibus 5 first PC 0.75/73? Need exact: Page 6 says "PCA ... first 15 out of 65 principal components, i.e., F15 ≈0.75." Page 7 caption says first PC from five-by-five sub-correlation matrix ... explains 73% (text page 6 says 75%). Need cite both carefully. NHL F15=0.90 [PAGE 8]. Corsi vs Fenwick more discriminative and stable [PAGE 7]. Plus-minus non-discriminative due to paucity goals [PAGE 7]. Need "HIT, BLK, S" most discriminative/stable. Good.

Need sections:
<THINK_TRACE> >=400 words. Multi-hop derivation & gray-zone audit. Should discuss from variance decomposition to meta-metric definitions, inference with bootstrap, copula independence, conditioning, estimators, edge cases. Gray-zone audit: classification signal/noise is decision-task dependent (attribution vs acquisition). The same chance/context is signal for attribution but noise for acquisition [PAGE 2]. Need mention nonparametrics because metrics unique distributions, support [PAGE 2-3]. Need mention bootstrap at game level because within-game dependencies [PAGE 4-5]. Need mention caveat relevance fourth meta-metric; birthplace zip code example [PAGE 12]. Need maybe "internal quality" only. Need audit: meta-metrics don't measure relevance; conditional on player type; sample size restrictions. Also page 12 says "The meta-metrics are not designed to provide any information about how relevant the metrics are for the sport of interest." Need quote.

<SOURCE_OPERATORS_AND_EQUATIONS>: formal LaTeX, units, page citations, breakdown. Need include all equations. Could be fairly long. Need exact [PAGE n]. Use verbatim quotes. Must have "breakdown singularity/regimes." Need no toy equations. Need use proper notation. Need mention units: metric values have sport-specific units e.g., minutes, counts, percentage; variances squared units; dimensionless scores. Need formal assumptions: exchangeable additive LME for example, not universal. Nonparam estimates do not assume LME. Need note "sampling variance τ²_M →0 as season →∞". Need cite verbatim: "for an infinitely long season, we would observe τ2 M →0 and thus ϵspm = 0" [PAGE 2]. Need quote exact. Need no fake ratios. Fine.

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps. Discuss Fisher 1925 ANOVA, Kuder-Richardson 1937, Cronbach 1951; psychometrics reliability; baseball Tango/Lichtman/Dolphin 2007, Arthur 2015; blogs Blackport/Sprigings. Multi-week traps: treating unstable 3P% as skill; overcounting redundant omnibus metrics; comparing total vs rate metrics; using league-wide dependencies for position-specific decision; ignoring minutes/usage; misreading Corsi vs Fenwick as relevance. Need mention "multi-week traps" maybe are traps that unfold over weeks/seasons: hot streak 3P% regression, small-sample takeaways, plus-minus noise, redundancy in MVP metrics. Need not mention betting. Could mention "decision horizons" not lines.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. Need interpret this section. It likely asks about crisis habit regression vs counter-trap vs clock in decision-making. Need map to sports analytics: decision-maker under crisis may regress to trusted habits (raw points, plus-minus, reputation), counter-trap avoids overcorrection (e.g., discard all box metrics because redundancy), clock is temporal horizon (attribution vs acquisition; season length; stability vs discrimination). Use recursive theory of mind: model analyst/coach/opponent? Need discuss "crisis habit regression" = under pressure, coaches revert to familiar traditional metrics; "counter-trap" = overfitting to meta-metric or over-shrinking and ignoring relevance; "clock" = season timing, sample size, decision deadline. Need tie to paper: stability important for acquisition [PAGE 3], discrimination within season [PAGE 3], attribution vs acquisition signal/noise [PAGE 2], sample restrictions [PAGE 5/12], minute effects [PAGE 6]. Need perhaps "recursive theory of mind" as nested beliefs: analyst believes coach believes metric X; must model decision context and opponent? We can keep as decision-theoretic recursion. Need ensure section title exact. Need mention "crisis habit regression" maybe not paper term; explain as our interpretation. Need be careful not to fabricate source quotes. Cite where relevant.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Need connect to sports metrics. The paper doesn't discuss weather or biomechanics. Need cross-layer veto: metrics can be vetoed by physical/biomechanical/weather constraints not in data. Need prove using paper's caveat: meta-metrics only internal quality, not relevance [PAGE 12]. Need physical: minutes played, injuries/work stoppages (paper normalizes by minutes/possessions to ameliorate anomalous events [PAGE 5]); biomechanical: three-point shooting requires little athleticism and isolated from team strategy (free throw?) [PAGE 6]; actually free throw quote. For 3P% context "openness" sensitive to teammate ability and strategy [PAGE 12]. Weather: NHL/NBA indoor so weather not direct, but travel/rest? Paper doesn't discuss; we can state out-of-scope and veto if metric context lacks weather/travel; do not invent. Need "adjudication proof": if physical/biomechanical/weather layer changes state variables that are not included in C or variances, then meta-metric invariance fails; relevance/validity can be vetoed even if D/S/I high. Example: birthplace zip code perfectly discriminative stable independent but irrelevant [PAGE 12]. That's a strong proof of internal vs external validity. Need "weather veto" maybe not in source; say no weather variables are present, so weather cannot be adjudicated from this paper; any weather-layer claim must be treated as unverified and vetoed. That is safe. Need include physical/biomechanical: injury and minutes are acknowledged [PAGE 5/6], free throw requires little athleticism [PAGE 6], three-point sensitivity to openness [PAGE 12]. Need maybe "biomechanical" not explicit; state not directly measured; use proxy "athleticism" quote and "openness". Need cite. Cross-layer veto: a metric that passes D/S/I can still fail if physical mechanism invalid. Need "proof" by counterexample: zip code. Good.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = reinforcement learning with verifiable rewards? Need propose 3 scenarios with verifiable predictions. Must not be betting. Need maybe scenarios:
1. 3P% raw vs empirical Bayes: if a player has low attempts (e.g., n<50) and raw 3P% high/low, raw metric will be unstable; shrinkage estimate should reduce variance and improve stability/discrimination. Prediction: D_hat and S_hat for EB 3P% > raw 3P% on same data; also posterior sd shrinks with n. Verifiable by recomputing from paper's GitHub. Veto raw 3P% for acquisition decisions when attempts small. Need note paper says EB improves both [PAGE 6/9]. Prediction exact: raw 3P% has >50% between-player variation due to chance for players with ≥10 attempts [PAGE 6]; EB will lower bootstrap variance and increase D/S. Good.
2. Independence redundancy: if conditioning set includes WS, VORP, PER, BPM, PTS, first PC explains ~73-75%; adding all five as independent evidence is invalid. Prediction: I_m|M for one omnibus metric will be small; PCA F1 ~0.73-0.75. Veto treating them as independent. Verifiable via copula C. Good.
3. Game-level bootstrap vs possession-level bootstrap: If one resamples at possession level, within-game correlations (garbage time, star benching) are broken; estimates of BV and thus D/S biased. Prediction: possession-level bootstrap yields lower variance / higher D than game-level? Need be careful direction. Paper says game-level replicates within-game correlations; higher resolution may understate variance. Prediction: D_hat and S_hat from possession bootstrap will be upward-biased relative to game-level (because BV underestimated). Verifiable by running both on play-by-play. Veto possession-level bootstrap for D/S unless validated. Good. Alternatively 4th: relevance veto zip code. But need 3. Could include "plus-minus in hockey" but that's not RLVR? Better scenarios.

Need final answer length >=1000 words. Likely around 2500-3500 words. Need exact XML sections. No markdown? It's okay XML tags. Need ensure no betting lines. Avoid "odds", "spread", "moneyline", "totals" maybe except "total variance" and "total minutes" are okay? Invariant says never mention spreads, totals, moneylines, or odds. "total variance" contains "total" but not betting "totals". It says never mention totals—could be interpreted as betting totals; but "total variance" is mathematical. To be safe, use "aggregate variance" instead of "total variance"? But source quotes include "total variance" and "total minutes". Exact quotes might include total. Hmm invariant "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." They likely mean betting markets. "Total variance" is not betting. But to avoid any trigger, I can use "aggregate variance" in my prose; but exact quote "total variance" appears in source. It is not betting. Should be fine. But maybe avoid "totals" as standalone. No "spread". Use "total variance" necessary. Need no "odds". Good.

Need "verbatim quotes" with exact [PAGE N]. We need quote exact text. Need ensure quotes are exact from source. Let's collect exact quotes:

Page 1 abstract: "we develop methods to evaluate metrics based on three criteria: (1) stability: does the metric measure the same thing over time (2) discrimination: does the metric differentiate between players and (3) independence: does the metric provide new information?" [PAGE 1]. Good.

Page 2: "The linear mixed effects model (1) may be a reasonable choice for some metrics and, due to its simplicity, provides a convenient example to illustrate our meta-metrics. However, an exchangeable, additive model is not appropriate for many of the metrics we consider." [PAGE 2]. Good.

Page 2: "for an infinitely long season, we would observe τ2 M →0 and thus ϵspm = 0." Exact has line break; use simplified. Quote with τ²? Exact text: "for an infinitely long season, we would observe τ2 M →0 and thus ϵspm = 0." Use [PAGE 2]. Good.

Page 2: "For attribution, we do not care whether a player can repeat their performance in another season (or arguably even how much of their performance was due to chance), whereas repeatability is a central question in player acquisition." [PAGE 2]. Good.

Page 3: "By the law of total variance, the between player variance can be decomposed as" [PAGE 3]. Fine.

Page 3: "Intuitively, this describes the fraction (between 0 and 1) of between-player variance in metric m (in season s) due to true differences in player ability." [PAGE 3]. Good.

Page 3: "If the within player variance is as large as the total variance, then 𝒮m = 0 whereas if a metric is constant over time, then 𝒮m = 1." [PAGE 3]. Exact? Yes.

Page 4: "Metrics for which ℐmℳis small (e.g. for which the R-squared is large) provide little new information relative to the information in the set of metrics ℳ." [PAGE 4]. Good.

Page 4: "Note that ℐmℳ= 1 implies that metric m is independent from all metrics in ℳ." [PAGE 4]. Good.

Page 4: "Rather than establish a parametric model for each metric (e.g. the linear mixed effects model (1)), we use nonparametric methods to estimate these variances." [PAGE 4]. Good.

Page 4: "For each team, we resample (with replacement) every game played in a season and reconstruct end-of-season metrics for each player." [PAGE 4]. Good.

Page 5: "By resampling games, we replicate any within-game correlations that might affect player metrics." [PAGE 5]. Good.

Page 6: "Amazingly, over 50% of the variation in three point percentage between players who take a non-negligible number of three point shots (at least 10) in a given season is due to chance." [PAGE 6]. Good.

Page 6: "Of the metrics that we examine, steals (STL) appear to provide some of the most unique information." [PAGE 6]. Good. And "ℐSTL ℳ≈0.40 , meaning that only 60% of the variation in steals across player-seasons is explainable by the other 69 metrics." [PAGE 6]. Good.

Page 7: "Like steals in the NBA, we found that takeaways (TK) provide the most unique information relative to the other 39 metrics. Here, ℐTK ℳ= 0.73, meaning that all other metrics together only explain 27% of the total variance in takeaways" [PAGE 7]. Good.

Page 7: "Our results indicate that with the addition of blocks, Corsi metrics (e.g. “CF% rel” and “CF%”) are both more discriminative and stable than the Fenwick metrics." [PAGE 7]. Good.

Page 8: "We can explain over 90% of the variation in the data using only 15 out of 40 principal components, that is ℱ15 = 0.90" [PAGE 8]. Good.

Page 9: "Observed three point percentage is an unbiased estimate of three point ability but is highly unreliable. The Bayes estimate is biased for all players, but theory suggests that the estimates have lower mean squared error due to a reduction in variance" [PAGE 9]. Good.

Page 12: "The meta-metrics are not designed to provide any information about how relevant the metrics are for the sport of interest." [PAGE 12]. Good.

Page 12: "an athlete’s birthplace zip code would be perfectly discriminative, stable and independent from all other metrics, but is clearly irrelevant for determining a player’s value to the team." [PAGE 12]. Good. This is great for cross-layer veto.

Page 12: "the meta-metrics can easily be recalculated for relevant subsets of players" [PAGE 12]. Good.

Page 12: "When using metrics to evaluate players of a certain type, we should compute the meta-metrics conditional on this player type." [PAGE 12]. Good.

Page 6: "Metrics based on total minutes played are highly discriminative but less stable, whereas per-minute or per-game metrics are less discriminative but more stable." [PAGE 6]. Good.

Page 6: "free throw percentage is a relatively non-discriminative statistic within-season but very stable over time." [PAGE 6]. Good.

Need perhaps mention "BPM-based metrics over other rate-based metrics like WS/48, ORTg and DRtg" [PAGE 6]. Good.

Need exact page markers: [PAGE 1], etc. The source text has spaces. Use [PAGE N].

Need no "betting lines". Avoid "gambling". I can quote page 1? It has "gambling decision" but skip.

Need answer structure exact XML. Could include only XML sections. The user asked exact sections. Need include all tags. Could include introductory note? Better just sections.

Need ensure >=1000 words. Let's target 3000. Need not too verbose but deep. Desired oververbosity 5. Need include detailed equations. Need maybe "THINK_TRACE" >=400 words. I'll make it ~700-900 words. Overall maybe 4000. That's okay.

Need think about "RLVR_COUNTERFACTUAL_VETOES": "3 verifiable RLVR veto scenarios + predictions." Need explicitly label "Scenario 1/2/3", "Prediction", "Veto". Could mention "verifiable by rereunning paper's replication code at GitHub" [PAGE 5]. It says repository available at GitHub [PAGE 5]. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION": "Physical/biomechanical/weather veto proof." Need formal proof maybe:
Let M be metric, q be external layer (physical/biomechanical/weather) not in C or variance decomposition. The paper's D/S/I are functions of X's (co)variances and copula C. If q changes X via non-exchangeable mechanism, then D/S/I can remain high but relevance/validity invalid. Counterexample zip code [PAGE 12] proves internal metrics insufficient. Therefore veto condition: if q is not encoded in M or conditioning set, and q's mechanism changes X, then any acquisition/attribution decision using M is not licensed. For weather: paper has no weather covariates; no adjudication; veto weather claims as unsupported. For physical: minutes/injury are acknowledged; normalize by minutes/possessions [PAGE 5] and minutes-based metrics confound availability [PAGE 6]. Biomechanical: free throw "requires little athleticism" [PAGE 6]; 3P% "sensitive to the 'openness' of the shooter" [PAGE 12]—openness is contextual/biomechanical; if unmodeled, stability of 3P% suffers. Need cite "openness" exact? Page 12: "three point percentage in basketball is likely sensitive to the “openness” of the shooter, which is in turn a function of teammate ability and strategy." Exact yes. Good.

Need "RETROCAUSAL_GENEALOGY": "Historical/scientific lineage & multi-week traps." Need mention retrodiction? It asks retrocausal genealogy. Could frame as "the paper's operators are retrofitted from earlier reliability theory; they re-describe old box-score debates." Mention Fisher 1925, Kuder-Richardson 1937, Cronbach 1951 [PAGE 2]. Need quote: "Our meta-metrics are based on ideas that have a long history in statistics (e.g., analysis of variance) and psychometrics (e.g., Cronbach’s alpha) (Fisher 1925; Kuder and Richardson 1937; Cronbach 1951) but have not received widespread treatment in sports." [PAGE 2]. Exact. Also "The limited work quantifying the reliability of metrics in sports mostly appears in blogs" [PAGE 2]. Good. Multi-week traps:
- 3P% stabilization: paper says over 50% chance; blogs asked how long to stabilize; trap is taking multi-week hot/cold as skill. Need cite [PAGE 6] and maybe Blackport/Sprigings. We can mention "Blackport 2014; Sprigings 2014" from page 2 and page 15 references. Good.
- Omnibus redundancy: WS/VORP/PER/BPM/PTS first PC 73-75%; trap is stacking them as independent evidence. [PAGE 6/7].
- Corsi vs Fenwick: paper says Corsi more discriminative/stable, but meta-metrics not relevance [PAGE 12]; trap is assuming Corsi is more predictive of team wins. Good.
- Total vs rate metrics: MP is discriminative but less stable; trap comparing total metrics to rate metrics [PAGE 6].
- Plus-minus in hockey: non-discriminative due to few goals [PAGE 7]; trap using ± as player quality. Good.
- Conditional subsets: league-wide blocks/rebounds discriminative due to position; for centers, less variation [PAGE 12]; trap using league meta-metrics for position-specific acquisition. Good.

Need "RECURSIVE_THEORY_OF_MIND": Need perhaps describe nested agents:
- Level 0: raw metric.
- Level 1: analyst uses meta-metric.
- Level 2: coach/decision-maker under crisis may regress to familiar metrics because they distrust model-based metrics; analyst must anticipate this and provide simple, stable, independent summaries.
- Counter-trap: analyst overfits to meta-metric and ignores relevance; recursive model must include "relevance" as fourth criterion [PAGE 12].
- Clock: decision horizon. Within-season discrimination vs multi-season stability. Under deadline (trade deadline, acquisition), unstable metrics have high variance; early season small samples; late season attribution vs next-season acquisition. Need "clock" maybe shot clock? But likely temporal decision clock. Use "decision clock." Need tie: paper's stability is season-to-season; discrimination within season; attribution vs acquisition [PAGE 2-3]. Under "clock" short horizon, discrimination and chance dominance; long horizon, stability and shrinkage. Need mention "crisis habit regression" = when clock short, agents revert to habits; "counter-trap" = don't overcorrect by discarding all traditional metrics; use meta-metrics to choose metric class. Need state "recursive theory of mind" as higher-order beliefs: the analyst should model what the coach believes and what the public/opponent infers; redundancy can create false consensus. E.g., five omnibus metrics all agree but are one factor, so social evidence is illusory. That's good. Need cite PCA redundancy.

Need "SOURCE_OPERATORS_AND_EQUATIONS": Need maybe include table of operators. Formal LaTeX. Need units. Need exact equations with page citations. Need breakdown.

Let's draft.

Potential issue: The answer must be ">=1,000-word depth across these exact XML sections". Need maybe include all tags with no extra. Use LaTeX. Need not be perfect but enough.

Let's think of formal equations in detail.

Notation:
Let \(X\in \mathbb{R}^{S\times P\times M}\), \(X_{spm}\) value of metric \(m\) for player \(p\) in season \(s\). \(X\) random entry. \(V_{spm}[X]=\operatorname{Var}(X_{spm}\mid S=s,P=p,M=m)\), etc.

LME:
\[
X_{spm}=\mu_m+Z_{sm}+Z_{pm}+Z_{spm}+\epsilon_{spm},
\]
\[
Z_{sm}\sim(0,\sigma_{SM}^2),\quad Z_{pm}\sim(0,\sigma_{PM}^2),\quad Z_{spm}\sim(0,\sigma_{SPM}^2),\quad \epsilon_{spm}\sim(0,\tau_M^2).
\]
Units: \(X_{spm}\) in metric units; each variance in squared metric units. \(\tau_M^2\) sampling variance.

Discrimination:
\[
\mathcal D_{sm}=1-\frac{E_{sm}[V_{spm}[X]]}{V_{sm}[X]}.
\]
Under LME:
\[
\mathcal D_m = \frac{\sigma_{PM}^2+\sigma_{SPM}^2}{\sigma_{PM}^2+\sigma_{SPM}^2+\tau_M^2}.
\]
Dimensionless. 0 to 1.

Stability:
\[
\mathcal S_m=1-\frac{E_m[V_{pm}[X]-V_{spm}[X]]}{V_m[X]-E_m[V_{spm}[X]]}.
\]
Under LME:
\[
\mathcal S_m = \frac{\sigma_{PM}^2}{\sigma_{PM}^2+\sigma_{SM}^2+\sigma_{SPM}^2}.
\]
Dimensionless. Paper proof [PAGE 13-14]. Note sign? Wait check: Page 3 equation (5) says \(\mathcal S_m = \frac{\sigma^2_{PM}}{\sigma^2_{PM}+\sigma^2_{SM}+\sigma^2_{SPM}}\). Yes. But earlier stability definition numerator \(E_m[V_{pm}[X] - V_{spm}[X]]\). Under LME, \(V_{pm}[X] = \sigma^2_{SM}+\sigma^2_{SPM}+\tau^2\), \(V_{spm}=\tau^2\), so numerator = \(\sigma^2_{SM}+\sigma^2_{SPM}\). Denominator \(V_m - E_m[V_spm] = \sigma^2_{PM}+\sigma^2_{SM}+\sigma^2_{SPM}\). So 1 - that = \(\sigma^2_{PM}/(\sigma^2_{PM}+\sigma^2_{SM}+\sigma^2_{SPM})\). Good. In text they call "fraction of total variance ... due to within-player changes over time" but formula is fraction due to player persistent? Wait check: Stability=1 - [within-player season variability (context+season skill)]/[total nonsampling]. That equals persistent player between-player variance over total nonsampling. But they say "fraction of total variance (with sampling variability removed) that is due to within-player changes over time" — that seems contradictory? Let's read: Page 3: "This estimand reflects the fraction of total variance (with sampling variability removed) that is due to within-player changes over time. If the within player variance is as large as the total variance, then S=0 whereas if a metric is constant over time, then S=1." Hmm formula S = σ²_PM / (σ²_PM+σ²_SM+σ²_SPM). That is persistent player variance, not within-player changes. Maybe they define stability as 1 - within-player/total, so fraction due to stable player differences. Text "due to within-player changes" might be typo? Actually if within player variance as large as total, S=0; if constant over time S=1, so S is fraction explained by stable player differences. The quote says "due to within-player changes over time" but formula says opposite. Need handle carefully. We can state as paper defines it and quote exact. Maybe in source, they mean "reflects fraction ... [1 minus] due to within-player changes"? But quote exact says "due to within-player changes". To avoid contradiction, cite equation and say "operationally S increases when within-player, between-season variation and sampling variance are small relative to persistent between-player variation; the paper's verbal gloss says..." But need not overcomplicate. Actually "This estimand reflects the fraction of total variance (with sampling variability removed) that is due to within-player changes over time." That would be \(1-\mathcal S\), not S. Maybe source typo. We should not accuse; but can note "the operational equation is the authority; the text phrase should be read against Eq. (5)." In gray-zone audit, mention possible semantic inversion? That could be valuable. But need cite exact quote. Hmm.

Let's verify source page 3: It says "This estimand reflects the fraction of total variance (with sampling variability removed) that is due to within-player changes over time. If the within player variance is as large as the total variance, then 𝒮m = 0 whereas if a metric is constant over time, then 𝒮m = 1." If within-player variance as large as total -> S=0, so S is not fraction due to within-player changes; it is fraction due to stable between-player differences. They may mean "1 - fraction". There is an apparent mismatch. We can mention in THINK_TRACE gray-zone audit: "The prose gloss on p. 3 is easy to invert; use Eq. (5): S=1 when within-player changes vanish, S=0 when within-player variance equals total nonsampling variance." That is a good audit. Need not say error harshly. Good.

Independence:
\[
Z_{sp}\sim MVN(0,C), \quad X_{spm}=F_m^{-1}[\Phi(Z_{spm})],
\]
\[
\mathcal I_{m\mathcal M} = \frac{\operatorname{Var}[Z_{spm}\mid\{Z_{spq}:q\in\mathcal M\}]}{\operatorname{Var}[Z_{spm}]}
= C_{m,m}-C_{m,\mathcal M}C_{\mathcal M,\mathcal M}^{-1}C_{\mathcal M,m}.
\]
Dimensionless. If M empty, I=1. If M includes perfect predictor, I=0. C singular breakdown.

PCA:
\[
C=U\Lambda U^\top,\quad \Lambda=\operatorname{diag}(\lambda_1,\dots,\lambda_M),
\]
\[
\mathcal F_k = \frac{\sum_{i=1}^k \lambda_i}{\sum_{i=1}^M \lambda_i}.
\]
Dimensionless. F_k large for small k = redundancy.

Estimators:
\[
\hat{\mathcal D}_{sm}=1-\frac{\frac1P\sum_{p=1}^P \widehat{BV}[X_{spm}]}{\frac1P\sum_{p=1}^P (X_{spm}-\bar X_{s\cdot m})^2}.
\]
\[
\hat{\mathcal S}_m=1-\frac{\frac1P\sum_{p=1}^P \frac{1}{S_p}\sum_{s=1}^{S_p}[(X_{spm}-\bar X_{\cdot pm})^2-\widehat{BV}[X_{spm}]]}{\frac1P\sum_{p=1}^P\frac{1}{S_p}\sum_{s=1}^{S_p}[(X_{spm}-\bar X_{\cdot\cdot m})^2-\widehat{BV}[X_{spm}]]}.
\]
Wait source has typo denominator \(\sum_{p=1}^P\)? Let's use source. Need not exact if too complex. But formal.

Shrinkage:
\[
X^{3P\%}_{sp}=\frac{z_{sp}}{n_{sp}},\quad z_{sp}\sim \operatorname{Bin}(n_{sp},\pi_{sp}),\quad \pi_{sp}\sim \operatorname{Beta}(r_p\pi_p^0,r_p(1-\pi_p^0)).
\]
Units: probability dimensionless; \(n_{sp}\) attempts count. Empirical Bayes.

Breakdown:
- D denominator \(V_{sm}=0\): all players same value; undefined. D=1 if τ²=0 and signal positive; D=0 if signal variance zero. With finite P, bootstrap BV may be zero for constant metric; denominator zero if metric constant in season.
- S denominator \(V_m - E_m V_spm=0\): if all non-sampling variance zero (constant across players and seasons) or sampling variance equals aggregate; 0/0. S=1 if σ²_SM+σ²_SPM=0; S=0 if σ²_PM=0. 
- I: C not invertible if perfect collinearity; use regularization/pseudoinverse; I=1 independence; I=0 perfect latent linear prediction. 
- PCA: λ_i=0 for collinear dimensions; F_k undefined if trace zero (all zero variance). 
- LME inappropriate for non-exchangeable metrics [PAGE 2]; use nonparam bootstrap.

Need mention "R-squared style statistics" [PAGE 2]. "All meta-metrics are all R-squared style statistics" [PAGE 2]. Good.

Need "information/probability units": Discrimination/stability/independence are dimensionless fractions of variance; not bits. If want information units, can say they are variance-fraction scores, not entropy in bits; a conversion to bits would require a distributional model and is not in paper. Good. Since prompt asks "SI/information/probability units" — we should specify units: dimensionless, squared metric units for variances, counts for attempts, probability for π. No bits. Good.

Need "ZERO TOY EQUATIONS" — our equations are from source, no invented ratios. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" proof: Could write formal:
Let \(q\) be an external layer not in \(X\). The paper's operators are \(\mathcal F(X)=\{\mathcal D,\mathcal S,\mathcal I,\mathcal F_k\}\). If \(q\) is a confounder/mechanism such that \(X=f(q,\eta)\), then \(\mathcal F(X)\) is invariant to \(q\) only if \(q\) is exchangeable with the player/season/metric sampling scheme. The zip-code counterexample proves \(\mathcal F\) can be maximal while relevance is zero [PAGE 12]. Therefore a cross-layer veto is licensed when \(q\) changes the physical/biomechanical/weather mechanism and is not in the conditioning set. For NBA/NHL indoor sports, weather is not modeled; no weather inference. For physical layer, minutes/injury are acknowledged and normalized [PAGE 5]; MP-based metrics confound availability [PAGE 6]. For biomechanical/contextual, free throw quote [PAGE 6] and 3P% openness [PAGE 12]. Good.

Need "RLVR_COUNTERFACTUAL_VETOES": Need "verifiable RLVR veto scenarios + predictions." Could phrase "RLVR" as "reward learning with verifiable rewards" but maybe not necessary. Need "counterfactual veto" = if condition violated, reject metric. Scenarios:
1. Raw 3P% in low-attempt sample. Prediction: EB estimate has higher S and D; raw has >50% chance variance. Veto raw if n attempts < some threshold and no shrinkage. Verify by recomputing from replication code and paper's Figure 5. Good.
2. Omnibus independence. Prediction: \(\mathcal I_{m|\{WS,VORP,PER,BPM,PTS\}}\) small and \(\mathcal F_1\approx0.73-0.75\). Veto using all five as independent evidence. Verify via C and PCA. 
3. Bootstrap granularity. Prediction: possession-level bootstrap underestimates \(BV\), inflates D/S relative to game-level. Veto D/S estimates from possession-level bootstrap unless within-game correlation is preserved. Verify by comparing bootstraps. 
Maybe need "RLVR" specifically: "reward = whether predicted relation holds on held-out seasons; veto if not." Add "Prediction: held-out 2015 D/S ordering preserved." Hmm.

Need "THINK_TRACE" include multi-hop derivation. We'll outline:
1. Start from random entry and variance decomposition. The paper's operators are not black-box; D uses law of total variance; S uses within-player vs sampling; I uses copula latent correlation; PCA uses eigenvalues.
2. The LME is a pedagogical scaffold, not assumption; actual inference uses bootstrap because metrics have unique supports [PAGE 2-4].
3. Bootstrap at game level because within-game dependencies; this is a key gray-zone: higher-resolution resampling can bias variance downward.
4. Signal/noise classification is decision-task dependent; attribution vs acquisition [PAGE 2]. This is the main gray-zone: a metric can be "good" for one task and bad for another.
5. Conditional subsetting: league-wide D/S/I can be driven by player type; must condition [PAGE 12]. 
6. Relevance not included; zip code counterexample [PAGE 12].
7. Stability prose inversion audit; use equation. 
8. Independence curves greedy algorithm; order-dependent? The algorithm greedily removes metrics with largest increase; resulting curve can depend on path but is a diagnostic. Need mention gray-zone: greedy not exhaustive; conditioning set size changes. Good.

Need maybe "source pages provided" cite exact [PAGE N] markers and verbatim quotes. We have many.

Need ensure "THINK_TRACE" is >=400 words. I'll write around 800.

Need not use markdown? XML tags are okay. Inside can use LaTeX. Need no extra tags? Fine.

Let's draft final answer. Need be concise but deep. Ensure no betting terms. Avoid "odds". Use "decision markets" no. Avoid "line". Use "line of evidence" maybe contains line? That's not betting; but to be safe avoid. "lineage" okay. "linear" okay. "baseline" okay. "deadline" okay. No "moneyline". "total variance" okay.

Need mention "no betting lines" not necessary. Don't mention.

Let's write.

Potential exact quotes with page markers. Ensure verbatim. For page 3 stability quote, use exact. For page 6 3P%. For page 7 TK. For page 12 zip code.

Need include "Appendix proof [PAGE 13-14]" for stability. Good.

Let's produce final with exact XML sections. Use `<THINK_TRACE>` etc. Need not include markdown headings. Ensure all tags closed. Use `&`? XML requires escaping ampersand in text if strict. We can avoid ampersands or use `&amp;`. The tags are XML-like; text can include `&`? Better avoid ampersands. Use "and" instead. But equations have `\top` no ampersand. Use `<`? In text "0 ≤" okay. Avoid `&`. Use `\mathcal` etc. If using `\top` no issue. Need not be valid XML? They asked XML sections; we can keep tags. Ampersand not used. Good. But quote "Corsi- or Fenwick-based" no ampersand. Good.

Need use `$` for LaTeX. Fine.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s reasoning chain is a variance-decomposition argument, not a metric-ranking exercise. It begins with the random entry \(X_{spm}\), the value of metric \(m\) for player \(p\) in season \(s\), and asks what fraction of observed variation is signal versus sampling noise, context, and persistent player skill. The pedagogical scaffold is the linear mixed-effects model on [PAGE 2], but the paper explicitly warns: “The linear mixed effects model (1) may be a reasonable choice for some metrics and, due to its simplicity, provides a convenient example to illustrate our meta-metrics. However, an exchangeable, additive model is not appropriate for many of the metrics we consider.” That warning matters: the operators must be estimated nonparametrically because percentages, counts, per-minute rates, and plus-minus-like metrics have different supports and distributions [PAGE 2–3]. The inference layer therefore uses game-level bootstrap resampling: “For each team, we resample (with replacement) every game played in a season and reconstruct end-of-season metrics for each player” [PAGE 4]. The multi-hop derivation is: law of total variance → discrimination as signal fraction of between-player variance; within-player versus between-season variance → stability; Gaussian-copula latent correlation → independence; eigendecomposition of the copula correlation matrix → redundancy and PCA metrics. 

A gray-zone audit surfaces several traps. First, signal and noise are decision-task dependent. The paper states that “For attribution, we do not care whether a player can repeat their performance in another season (or arguably even how much of their performance was due to chance), whereas repeatability is a central question in player acquisition” [PAGE 2]. Thus a metric can be valid for attribution and invalid for acquisition. Second, the stability prose is easy to invert: the operational equation on [PAGE 3] makes \(\mathcal S_m=1\) when a metric is constant over time and \(\mathcal S_m=0\) when within-player variance equals aggregate nonsampling variance. Any interpretation must follow Eq. (4)–(5), not a casual verbal gloss. Third, bootstrap granularity is a hidden assumption: “By resampling games, we replicate any within-game correlations that might affect player metrics” [PAGE 5]. Resampling possessions or one-minute intervals can break within-game dependence and understate sampling variance, which would inflate discrimination and stability. Fourth, the independence curves are greedy diagnostics, not unique decompositions; the order of removal in Algorithm 1 can shape the curve, so the curve should be read as a path-dependent diagnostic of redundancy. Fifth, meta-metrics are internal-quality measures only. The paper’s own counterexample is decisive: “an athlete’s birthplace zip code would be perfectly discriminative, stable and independent from all other metrics, but is clearly irrelevant for determining a player’s value to the team” [PAGE 12]. That is the central gray-zone veto: high \(\mathcal D\), \(\mathcal S\), and \(\mathcal I\) do not imply relevance. Sixth, league-wide estimates can be driven by player type. The paper says “When using metrics to evaluate players of a certain type, we should compute the meta-metrics conditional on this player type” [PAGE 12]. Blocks and rebounds may separate players league-wide because they encode position, but within centers the discrimination and stability can shrink. Seventh, sampling restrictions change the estimand: players with fewer than 250 NBA minutes or fewer than 500 NHL minutes are excluded in the main D/S analyses [PAGE 5 and PAGE 7], so the scores describe a filtered population, not all recorded player-seasons. Finally, the empirical examples calibrate the audit: raw three-point percentage is “both the least stable and least discriminative” among evaluated metrics, and “over 50% of the variation in three point percentage between players who take a non-negligible number of three point shots (at least 10) in a given season is due to chance” [PAGE 6]. This is not a minor nuisance; it is the canonical case where a familiar metric fails the reliability audit.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(X\in\mathbb{R}^{S\times P\times M}\) be the three-dimensional array of players, seasons, and metrics, with \(X_{spm}\) the value of metric \(m\) for player \(p\) in season \(s\). The paper defines the meta-metrics as “R-squared style statistics” and functions of the (co)variances along the three dimensions of \(X\) [PAGE 2]. For a random entry \(X_{spm}\), define
\[
E_{spm}[X]=E[X\mid S=s,P=p,M=m],\qquad 
V_{spm}[X]=\operatorname{Var}[X\mid S=s,P=p,M=m],
\]
with analogous notation \(E_{sm},V_{sm},E_m,V_m\). Units: \(X_{spm}\) carries the metric’s native unit, such as counts, minutes, or a probability; every variance is in squared metric units; \(\mathcal D_m,\mathcal S_m,\mathcal I_{m\mathcal M},\mathcal F_k\) are dimensionless fractions in \([0,1]\) where defined. They are variance-fraction scores, not entropy in bits.

The illustrative linear mixed-effects model is
\[
X_{spm}=\mu_m+Z_{sm}+Z_{pm}+Z_{spm}+\epsilon_{spm},
\]
with
\[
Z_{sm}\sim(0,\sigma_{SM}^2),\quad 
Z_{pm}\sim(0,\sigma_{PM}^2),\quad 
Z_{spm}\sim(0,\sigma_{SPM}^2),\quad 
\epsilon_{spm}\sim(0,\tau_M^2),
\]
where \(\tau_M^2\) is sampling variance. The paper notes: “for an infinitely long season, we would observe τ2 M →0 and thus ϵspm = 0” [PAGE 2]. The model encodes league-season variation, persistent player variation, player-season skill variation, and finite-sample noise; the paper maintains \(\sigma_{SM}^2\) “for completeness in our theoretical development” but usually ignores it because league averages vary little on the relevant time scales [PAGE 2].

Discrimination is defined as
\[
\mathcal D_{sm}=1-\frac{E_{sm}[V_{spm}[X]]}{V_{sm}[X]}.
\]
By the law of total variance,
\[
V_{sm}[X]=E_{sm}[V_{spm}[X]]+V_{sm}[E_{spm}[X]],
\]
so \(\mathcal D_{sm}\) is the fraction of between-player variance due to true between-player differences rather than sampling noise [PAGE 3]. Under the mixed model,
\[
\mathcal D_m
=
1-\frac{\tau_M^2}{\sigma_{PM}^2+\sigma_{SPM}^2+\tau_M^2}
=
\frac{\sigma_{PM}^2+\sigma_{SPM}^2}{\sigma_{PM}^2+\sigma_{SPM}^2+\tau_M^2}.
\]
Breakdown regimes: \(\mathcal D_m=1\) when \(\tau_M^2=0\) and signal variance is positive; \(\mathcal D_m=0\) when \(\sigma_{PM}^2+\sigma_{SPM}^2=0\); the estimand is undefined when \(V_{sm}[X]=0\), i.e. when the metric has no between-player variance in that season. Finite-sample bootstrap estimates \(\widehat{BV}[X_{spm}]\) can be zero for constant metrics, creating a \(0/0\) or unstable denominator.

Stability is defined as
\[
\mathcal S_m
=
1-\frac{E_m[V_{pm}[X]-V_{spm}[X]]}{V_m[X]-E_m[V_{spm}[X]]}.
\]
The paper proves \(0\le \mathcal S_m\le 1\) in the Appendix [PAGE 13–14]. Under the mixed model,
\[
\mathcal S_m
=
1-\frac{\sigma_{SM}^2+\sigma_{SPM}^2+\tau_M^2-\tau_M^2}
{\sigma_{PM}^2+\sigma_{SM}^2+\sigma_{SPM}^2+\tau_M^2-\tau_M^2}
=
\frac{\sigma_{PM}^2}{\sigma_{PM}^2+\sigma_{SM}^2+\sigma_{SPM}^2}.
\]
Operationally, \(\mathcal S_m=1\) when within-player, between-season variation and sampling variance vanish relative to persistent player variation; \(\mathcal S_m=0\) when persistent player variance is zero. The paper’s verbal gloss on [PAGE 3] says “If the within player variance is as large as the total variance, then 𝒮m = 0 whereas if a metric is constant over time, then 𝒮m = 1.” The equation, not a loose inversion of the phrase, should be used. Breakdown regime: the denominator \(V_m[X]-E_m[V_{spm}[X]]=0\) produces an undefined score when the metric has no nonsampling variation or when sampling variance equals aggregate variance.

Independence uses a Gaussian copula:
\[
Z_{sp}\overset{iid}{\sim}\operatorname{MVN}(0,C),
\qquad
X_{spm}=F_m^{-1}[\Phi(Z_{spm})],
\]
where \(C\) is an \(M\times M\) correlation matrix and \(F_m^{-1}\) is the inverse CDF for metric \(m\) [PAGE 4]. For a conditioning set \(\mathcal M\),
\[
\mathcal I_{m\mathcal M}
=
\frac{\operatorname{Var}[Z_{spm}\mid\{Z_{spq}:q\in\mathcal M\}]}
{\operatorname{Var}[Z_{spm}]}
=
C_{m,m}-C_{m,\mathcal M}C_{\mathcal M,\mathcal M}^{-1}C_{\mathcal M,m}.
\]
The paper states: “Metrics for which ℐmℳis small (e.g. for which the R-squared is large) provide little new information relative to the information in the set of metrics ℳ” [PAGE 4]. Also, “ℐmℳ= 1 implies that metric m is independent from all metrics in ℳ” [PAGE 4]. Breakdown regimes: \(\mathcal I=1\) for latent orthogonality; \(\mathcal I=0\) for perfect latent linear predictability; if \(C_{\mathcal M,\mathcal M}\) is singular because of exact collinearity, the inverse must be replaced by a pseudoinverse or regularized estimator.

PCA redundancy is
\[
C=U\Lambda U^\top,\qquad 
\Lambda=\operatorname{diag}(\lambda_1,\dots,\lambda_M),
\qquad
\mathcal F_k=
\frac{\sum_{i=1}^k\lambda_i}{\sum_{i=1}^M\lambda_i}.
\]
\(\mathcal F_k\) is the fraction of latent correlation variance explained by the first \(k\) principal components [PAGE 4]. If \(\operatorname{tr}(C)=0\), \(\mathcal F_k\) is undefined; if \(\lambda_i=0\) for collinear directions, the effective dimension is lower than \(M\).

The nonparametric estimators use bootstrap variance \(\widehat{BV}[X_{spm}]\). The discrimination estimator is
\[
\widehat{\mathcal D}_{sm}
=
1-
\frac{\frac1P\sum_{p=1}^P\widehat{BV}[X_{spm}]}
{\frac1P\sum_{p=1}^P(X_{spm}-\bar X_{s\cdot m})^2},
\]
and the stability estimator is the analogous ratio of average within-player nonsampling variation to aggregate nonsampling variation [PAGE 5]. The paper does not require a parametric model for each metric: “Rather than establish a parametric model for each metric (e.g. the linear mixed effects model (1)), we use nonparametric methods to estimate these variances” [PAGE 4]. The three-point shrinkage model is
\[
X^{3P\%}_{sp}=\frac{z_{sp}}{n_{sp}},
\qquad
z_{sp}\sim\operatorname{Bin}(n_{sp},\pi_{sp}),
\qquad
\pi_{sp}\sim\operatorname{Beta}(r_p\pi_p^0,r_p(1-\pi_p^0)),
\]
where \(n_{sp}\) is attempts, \(\pi_p^0\) is career average, and \(r_p\) controls shrinkage [PAGE 9]. Units: \(n_{sp}\) is a count; \(X^{3P\%}_{sp}\) and \(\pi_{sp}\) are probabilities; \(r_p\) is dimensionless dispersion. The paper reports that the Bayes estimate is biased but reduces variance, improving stability and discrimination [PAGE 9].

Key empirical singularities and redundancy regimes from the source: raw three-point percentage is “both the least stable and least discriminative” and over 50 percent of between-player variation is chance for players with at least 10 attempts [PAGE 6]; steals have \(\mathcal I_{\mathrm{STL}\,\mathcal M}\approx0.40\), meaning “only 60% of the variation in steals across player-seasons is explainable by the other 69 metrics” [PAGE 6]; NHL takeaways have \(\mathcal I_{\mathrm{TK}\,\mathcal M}=0.73\), meaning all other metrics explain only 27 percent of their variance [PAGE 7]; NBA PCA explains “over 75% of the dependencies ... using only the first 15 out of 65 principal components” [PAGE 6]; NHL PCA gives \(\mathcal F_{15}=0.90\) [PAGE 8].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The genealogy runs backward from modern sports meta-analytics to classical reliability theory. The paper explicitly places its operators in the lineage of “analysis of variance” and “psychometrics (e.g., Cronbach’s alpha) (Fisher 1925; Kuder and Richardson 1937; Cronbach 1951)” [PAGE 2]. That lineage matters because the meta-metrics are reliability coefficients disguised as sports diagnostics: discrimination is a signal-to-noise variance ratio, stability is a temporal reliability ratio, and independence is a partial-correlation or incremental-variance score. The paper also says that “The limited work quantifying the reliability of metrics in sports mostly appears in blogs” [PAGE 2], citing Blackport, Sprigings, and Arthur; the formal contribution is to generalize blog-level stabilization questions into a three-dimensional variance framework.

A retrocausal reading reveals multi-week traps that unfold over a season or several seasons. The first is the three-point stabilization trap: a short hot or cold stretch is treated as a change in ability, but the paper shows that over half of between-player variation in raw three-point percentage is chance for players with at least 10 attempts [PAGE 6]. The multi-week trap is not merely “regression to the mean”; it is that the metric’s stability and discrimination are both poor, so using raw percentage as an acquisition signal overweights noise. The second trap is omnibus redundancy: WS, VORP, PER, BPM, and PTS can agree because they share latent dimensions. The paper reports that for the five-by-five sub-correlation matrix of overall skill metrics, the first principal component explains 73 to 75 percent of variation [PAGE 6–7]. The multi-week trap is treating five correlated summaries as five independent confirmations. The third trap is total-versus-rate comparison: “Metrics based on total minutes played are highly discriminative but less stable, whereas per-minute or per-game metrics are less discriminative but more stable” [PAGE 6]. Comparing a total-minute metric to a rate metric without conditioning on minutes manufactures a false reliability hierarchy. The fourth is the plus-minus trap in hockey: plus-minus is non-discriminative because goals are relatively rare per game [PAGE 7]; a multi-week plus-minus swing can be driven by on-ice shooting and save percentages, not stable player skill. The fifth is the Corsi-versus-Fenwick trap: the paper finds Corsi metrics more discriminative and stable than Fenwick metrics because blocks are added [PAGE 7], but it also warns that meta-metrics “are not designed to provide any information about how relevant the metrics are for the sport of interest” [PAGE 12]. A metric can be more reliable internally and still not be more predictive of team success. The sixth is the conditional-population trap: league-wide blocks and rebounds are discriminative partly because they encode position; within a single position group, the same metrics can lose discrimination [PAGE 12]. The genealogical lesson is that reliability theory always depends on the population, the decision horizon, and the signal-noise partition; the sports setting makes those dependencies visible because seasons are short, roles are heterogeneous, and metrics are highly collinear.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Under a short decision clock, crisis habit regression is predictable: coaches and analysts revert to familiar, salient summaries such as raw points, raw shooting percentage, plus-minus, or reputation. The paper’s results explain why that regression is dangerous. Raw three-point percentage is the least stable and least discriminative metric examined, with “over 50% of the variation ... due to chance” for players with at least 10 attempts [PAGE 6]. Hockey plus-minus is non-discriminative because goals are scarce [PAGE 7]. Crisis habit regression feels safe because the metric is familiar, but familiarity is not reliability.

The counter-trap is overcorrection: an analyst who learns meta-analytics may discard every traditional metric, over-shrink every estimate, or treat PCA components as “true” ability. That is also a failure. The paper’s shrinkage example improves three-point ability estimates, but the Bayes estimate is “biased for all players” even though it reduces variance [PAGE 9]. The counter-trap is to confuse lower mean squared error with unbiasedness or with relevance. The paper’s fourth-criterion warning is the corrective: a birthplace zip code can be perfectly discriminative, stable, and independent yet “clearly irrelevant for determining a player’s value to the team” [PAGE 12]. A recursive theory of mind must therefore model nested beliefs: the analyst believes the coach will trust a familiar metric; the coach believes the analyst’s model is opaque; the public or rival may infer ability from redundant summaries. If five omnibus metrics agree because they load on one principal component, the social evidence is illusory. The analyst should anticipate that redundancy will be read as consensus and should present independent metrics instead.

The clock changes the optimal inference. For attribution at the end of a season, chance and context can be treated as part of the story; for acquisition, repeatability is central [PAGE 2]. Under a short clock, discrimination within the current season matters and sampling variance is large; under a long clock, stability and shrinkage matter more. Early-season three-point percentage should be shrunk aggressively; late-season attribution can tolerate more raw context; multi-season acquisition should penalize unstable metrics. The recursive move is to ask: what decision is being made, by whom, under what deadline, and what will that decision-maker infer from the metric’s redundancy? The paper’s conditional advice is explicit: “When using metrics to evaluate players of a certain type, we should compute the meta-metrics conditional on this player type” [PAGE 12]. Thus the clock is not only temporal; it is institutional. A front-office deadline, a coaching adjustment, and a public narrative operate on different clocks, and a metric that is reliable on one clock can be a habit trap on another.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The cross-layer veto follows from the paper’s own scope condition. The meta-metrics are functions of observed \(X\), its variances, and the copula correlation matrix \(C\). They do not encode physical availability, biomechanical mechanism, or weather. The paper says: “The meta-metrics are not designed to provide any information about how relevant the metrics are for the sport of interest” [PAGE 12]. Therefore, if an external layer changes the data-generating mechanism and is absent from \(X\) or the conditioning set, a high \(\mathcal D\), \(\mathcal S\), or \(\mathcal I\) cannot adjudicate validity. The zip-code counterexample is the formal proof of insufficiency: maximal internal reliability with zero relevance [PAGE 12].

Physical-layer veto: minutes played and injuries are acknowledged as confounders. The paper normalizes by minutes or possessions “to ameliorate the impact of anomalous events in our data range, such as injuries and work stoppages” [PAGE 5], and it notes that “Metrics based on total minutes played are highly discriminative but less stable” [PAGE 6]. Thus an availability-driven metric can pass discrimination because it separates starters from bench players while failing stability because injuries and role changes alter minutes. A physical-layer veto is licensed when the metric’s variance is dominated by availability rather than skill, and the conditioning set does not include minutes, role, or health.

Biomechanical and contextual veto: the paper’s free-throw discussion says free-throw shooting “requires little athleticism (e.g., does not change with age or health) and is isolated from larger team strategy and personnel” [PAGE 6], which is why it is stable but not very discriminative. In contrast, three-point percentage is “likely sensitive to the ‘openness’ of the shooter, which is in turn a function of teammate ability and strategy” [PAGE 12]. Openness is a biomechanical-contextual layer: release geometry, defender distance, and team creation affect the observed percentage. If openness is not modeled, stability estimates for three-point percentage mix player skill with team context. The veto condition is: if the physical or biomechanical mechanism is not represented in the metric or the conditioning set, the metric’s stability cannot be interpreted as skill stability.

Weather-layer veto: the source provides no weather variables for NBA or NHL analyses, and both are indoor sports in the paper’s data. There is no weather operator, no weather covariate, and no weather validation in the text. Therefore any weather-layer claim about these metrics is unsupported by this source and must be vetoed as an extrapolation. The correct adjudication is not that weather is irrelevant in all sports; it is that the present operators cannot certify weather-mediated variation. The cross-layer proof is thus a scope proof: meta-metrics certify internal variance structure, not external causal relevance. They can rank reliability within the observed data, but they cannot override a physical, biomechanical, or weather mechanism that is outside the measurement model.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: raw three-point percentage versus empirical-Bayes three-point ability in a low-attempt sample. RLVR reward is whether the predicted reliability ordering is reproducible on held-out seasons using the paper’s replication code [PAGE 5]. Prediction: raw \(3P\%\) will show lower \(\widehat{\mathcal D}\) and lower \(\widehat{\mathcal S}\) than the empirical-Bayes estimate, especially when \(n_{sp}\) is small, because “over 50% of the variation ... is due to chance” for players with at least 10 attempts [PAGE 6]. Veto: reject raw \(3P\%\) as an acquisition signal when attempts are small and no shrinkage is applied. Verification: recompute \(\widehat{\mathcal D}\) and \(\widehat{\mathcal S}\) for raw and shrunken estimates; the paper reports the shrunken estimate improves both [PAGE 6 and PAGE 9].

Scenario 2: treating omnibus metrics as independent evidence. RLVR reward is whether the claimed independence is verifiable in the estimated copula correlation matrix \(C\). Prediction: for the set \(\{WS,VORP,PER,BPM,PTS\}\), the first principal component explains about 73 to 75 percent of latent variation, so the average conditional independence score is low [PAGE 6–7]. A counterfactual “independent evidence” claim should fail: adding all five metrics should not behave like five independent observations. Veto: reject any synthesis that counts WS, VORP, PER, BPM, and PTS as separate confirmations without checking \(\mathcal I_{m\mathcal M}\) or \(\mathcal F_1\). Verification: compute \(C\), eigendecompose it, and compare \(\mathcal F_1\) to the reported 73–75 percent range.

Scenario 3: possession-level bootstrap instead of game-level bootstrap for discrimination and stability. RLVR reward is whether the bootstrap variance matches the game-level resampling variance on the same player-seasons. Prediction: possession-level resampling will understate \(\widehat{BV}[X_{spm}]\) relative to game-level resampling when within-game correlations exist, because the paper warns that games are used to “replicate any within-game correlations that might affect player metrics” [PAGE 5]. Consequently, possession-level \(\widehat{\mathcal D}\) and \(\widehat{\mathcal S}\) will be biased upward. Veto: reject possession-level or one-minute-interval bootstrap estimates of \(\mathcal D\) and \(\mathcal S\) unless the within-game dependence is explicitly modeled or empirically shown to be negligible. Verification: run both bootstraps on the same data and compare variance estimates and meta-metric scores; a systematic upward shift in \(\mathcal D\) and \(\mathcal S\) confirms the veto.
</RLVR_COUNTERFACTUAL_VETOES>