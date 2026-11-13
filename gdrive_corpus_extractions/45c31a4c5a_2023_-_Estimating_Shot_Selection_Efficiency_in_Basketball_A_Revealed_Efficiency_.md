---
source: "2023 - Estimating Shot Selection Efficiency in Basketball A Revealed Efficiency Approach - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/New England Symposium on Statistics in Sports/2023"
pages: 1
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4219
---

<NATIVE_REASONING>
The user wants me to analyze a specific research paper about Shot Selection Efficiency in Basketball. I need to follow strict invariants:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE 1] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.

Let me analyze the source text carefully:

Key points from [PAGE 1]:
- Shot Selection Efficiency (SSE): input is team's expected points and expected proportional volume from each observed shooting bin of half court, computes bin shot volume weighted correlation between bin-level proportional volume and bin-level expected points, from field and free throw line, across all shooting bins for a season.
- Authors: Justin Ehrlich and Shane Sanders, Syracuse University.
- Measure does not depend on overall shooting ability. Separate exogenous shooting ability measure.
- Positive significant relation between SSE and team success in 2-way, 4-factor models.
- Improving weighted correlation by 0.1 units -> expected 0.035 units win proportion or nearly 3 games. 1 s.d. increase -> 1.41 expected wins per Pyth_W_pct model.
- 1 s.d. increase in Exogenous Shooting Ability ~ three-fold effect on wins.
- SSE source of expected wins not fully explained by payroll.
- May not be fully priced into player market -> Moneyball opportunity.
- Future work: coaching efficiency via tenure fixed effects.
- Data: play-by-play from bigdataball.com 2016/17-2022/23.
- SSE calculated as shot-volume weighted correlation between bin-level expected true points and bin-level shooting volume across all bins for season.
- Exogenous Shooting Ability: average expected true points from each bin, then unweighted average of all bin-level expected true points.
- Fixed effects regression models, LHS: Pyth_W_pct or W_pct. RHS: four factors at different aggregation levels.
- Explanatory variables: DRtg, exogenous shooting ability, shot selection efficiency, ORB%, TOV%, team fixed effects, season.
- Third set: payroll-conditional effect.
- Tables show models with estimates, std errors, p-values.
- Intercept -31.323 (Pyth_W_pct model 1), DRtg -0.031, true shooting efficiency 0.350, exogenous shooting ability 1.050, season 0.017, off TOV% -0.036, off ORB% 0.016.
- Third model includes payroll_normalized 1.095 (p=0.079), payroll_normalized^2 -0.674 (p=0.084).
- Observations 210, R2 values.
- Summary stats: N=210, Pyth_W_pct median 0.50 SD 0.14, etc.

Wait, there's a slight inconsistency: "true shooting efficiency" appears in the table but in the bullet points they call it "Shot Selection Efficiency". Looking closely at the table, there's a row "true shooting efficiency" with estimate 0.350. But the bullet says Shot Selection Eff. Actually looking at the table columns: Predictors include "true shooting efficiency" and "exogenous shooting ability". Wait, the first model column seems to have predictors: Intercept, DRtg, true shooting efficiency, exogenous shooting ability, season, off TOV%, off ORB%. But the text says they isolate effect of shot selection efficiency. Maybe "true shooting efficiency" in the table is actually "shot selection efficiency"? Or maybe the table has both? Looking at the table layout, it's a bit garbled. There are three model columns. The first shows Intercept -31.323, DRtg -0.031, true shooting efficiency 0.350, exogenous shooting ability 1.050, season 0.017, off TOV% -0.036, off ORB% 0.016. Then second column similar but without off ORB? Third includes payroll.

Actually the table formatting is messy. But I'll work with what's there.

Important: I must NOT mention betting lines. No spreads, totals, moneylines, odds. The paper mentions win proportion and wins, which is fine (not betting lines per se, but I should be careful not to frame it as betting).

I need formal LaTeX equations. The core is a weighted correlation:
Let bins be $i = 1, \dots, B$. Let $v_i$ be bin-level proportional shot volume (expected proportional volume?), $e_i$ be bin-level expected true points. Then SSE is something like:
$\text{SSE} = \frac{\sum_i w_i (v_i - \bar{v}_w)(e_i - \bar{e}_w)}{\sqrt{\sum_i w_i (v_i - \bar{v}_w)^2 \sum_i w_i (e_i - \bar{e}_w)^2}}$
where $w_i = v_i$ (shot-volume weighted). Or maybe weighted correlation with weights proportional to volume.

Expected true points from field and free throw line: need to incorporate FT scoring.

Breakdown regimes: when bins have zero volume (singularity in correlation denominator), when expected points are constant across bins (zero variance in e_i), when volume is concentrated in one bin.

Units: win proportion is dimensionless [0,1]. Expected true points is points per shot (dimensionless ratio of points to shot attempts, effectively points/shot). Correlation is dimensionless [-1,1]. 0.1 units of correlation -> 0.035 win proportion -> ~3 games in 82-game season.

Let me structure the response.

THINK_TRACE (>=400 words): Deep multi-hop derivation and gray-zone audit.
- Derive SSE from first principles based on text.
- Gray zones: "expected proportional volume" vs "observed shooting bin" ambiguity; FT scoring incorporation method unspecified; bin definition (half court binning resolution) unspecified; correlation vs causation; fixed effects with only 210 observations and 7 NBA seasons * 30 teams = 210 exactly, so no missing teams-seasons? Actually 7 seasons * 30 = 210. Balanced panel.
- Endogeneity: team fixed effects control time-invariant coaching, but season trend and payroll may be endogenous.
- "Three-fold effect" comparison: exogenous shooting ability 1.050 vs SSE 0.350? Ratio is 3.0 exactly? 1.050/0.350 = 3.0. That's a clean three-fold. But note units differ: exogenous shooting ability is average expected true points per bin (points per shot), SSE is correlation [-1,1]. So comparing 1 s.d. of each is what matters.
- The table lists "true shooting efficiency" estimate 0.350 but text says Shot Selection Efficiency. Gray zone: is that a labeling error in the extracted PDF, or is true shooting efficiency a separate variable? The summary stats show true_shooting_efficiency median 0.51 SD 0.05, and exogenous_shooting_ability median 0.88 SD 0.05. So there are two distinct variables: true shooting efficiency (likely actual shooting ability/TS%) and exogenous shooting ability (model-based expected points). The text says "Shot Selection Efficiency" but table says "true shooting efficiency". This is a critical gray-zone audit point.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, citations [PAGE 1], breakdown.
- Define bins $\mathcal{B}$.
- $p_i$: proportional volume in bin $i$.
- $\mu_i$: expected true points in bin $i$ (including FT).
- Weighted correlation formula.
- Exogenous shooting ability: $\bar{\mu} = \frac{1}{B}\sum_i \mu_i$ (unweighted).
- Regression: $Y_{ts} = \beta_0 + \beta_1 \text{SSE}_{ts} + \beta_2 \text{DRtg}_{ts} + \beta_3 \text{TS}_{ts} + \beta_4 \text{Exog}_{ts} + \beta_5 \text{season}_t + \beta_6 \text{TOV}_{ts} + \beta_7 \text{ORB}_{ts} + \alpha_s + \epsilon_{ts}$.
- Payroll model adds payroll and payroll^2.
- Units: points/shot for $\mu_i$; dimensionless for correlation; win proportion dimensionless.
- Breakdown: $N_b=0$ bins cause division by zero; constant $\mu_i$ across bins makes correlation undefined; perfect collinearity between payroll and team FE? Not exactly but payroll normalized has limited range [0.46,1.00].
- Cite [PAGE 1] for every claim.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
- Lineage: Moneyball (Lewis, 2003), Moreyball / shot value, expected points (EPV) literature (Cervone et al., Goldsberry), Four Factors (Dean Oliver), Pythagorean expectation (Bill James), fixed effects panel models.
- Multi-week traps: in-season coaching adjustments, sample size early season (bins unstable), injury-driven shot distribution changes, schedule strength confounding with DRtg, payroll as proxy for talent not selection.
- "Retrocausal" here means using past shot charts to infer current coaching/selection quality, but selection is endogenous to roster construction.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: under pressure (close games, playoffs), teams revert to iso/high-usage mid-range instead of efficient bins, regressing to mean shot selection.
- Counter-trap: defense adjusts to take away the bins a team over-volumes, making the correlation negative ex post.
- Clock: shot clock pressure (late clock) forces inefficient bins; end-of-game fouling changes FT expected points. The measure is season-level, so it masks within-game clock dynamics.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical: court dimensions fixed, rim height 10 ft, three-point line distance (NBA: 23.75 ft top, 22 ft corners). Bins are spatial.
- Biomechanical: release height, angle, defender distance (not in data per text). Fatigue not modeled. Weather is indoor, no weather veto. Altitude? NBA arenas are climate controlled, so weather veto is null/indoor.
- Veto: if a player is injured, the shot chart bin volumes change exogenously; measure would misattribute roster shock to selection quality.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning from Verifiable Rewards? Or some verification framework. I'll treat as counterfactual veto scenarios that can be verified.
- Scenario 1: Zero-volume bin exclusion. Prediction: SSE changes discontinuously if a bin with $v_i=0$ is included vs excluded; breakdown at empty bins.
- Scenario 2: Constant expected points across bins. Prediction: correlation undefined (0/0), model fails to produce SSE.
- Scenario 3: Payroll perfect collinearity with team FE in a single season subsample. Prediction: payroll coefficients blow up or become insignificant (as seen p=0.079, 0.084).
- Provide verifiable predictions: e.g., if we simulate uniform $\mu_i$, SSE should return NaN.

Word count: Need >=1000 words total across sections. THINK_TRACE alone >=400. I'll aim for substantial depth in each.

Let me draft carefully, ensuring no betting language. I will mention "win proportion" and "expected wins" but not odds/spreads/moneylines.

Need verbatim quotes with [PAGE 1]. Let me pull exact quotes:
- "We create a shot selection measure called Shot Selection Efficiency that takes as input a team’s (player’s) expected points and expected proportional volume from each observed shooting bin of the half court and computes the team’s bin shot volume weighted correlation between bin-level proportional volume and bin-level expected points, from the field and free throw line, across all shooting bins for a season." [PAGE 1]
- "The measure does not depend on overall shooting ability. A separate measure of exogenous shooting ability is created that is exogenous of shot selection." [PAGE 1]
- "If a team in a season can improve the weighted correlation between bin-level shot-volume and expected true points by 0.1 units, it gains an expected 0.035 units of win proportion or nearly 3 games." [PAGE 1]
- "Play-by-play data was subscribed from bigdataball.com for the 2016/17-2022/23 seasons." [PAGE 1]
- "Exogenous Shooting Ability is obtained by finding a team’s average expected true points from each bin of its shot chart in a season. Then, we take an unweighted average of all bin-level expected true point values to obtain a measure of shooting ability that is exogenous of shot selection." [PAGE 1]
- "A third set of models suggests Shot Selection Efficiency is a source of expected wins not fully explained by team payroll." [PAGE 1]

Now write the response. Must use exact XML tags. No markdown outside? Probably fine to put XML tags directly.

Let's ensure formal LaTeX is correct.

Weighted correlation:
Let $i \in \{1,\dots,B\}$ index spatial half-court bins. Let $v_{i,ts} \in [0,1]$ be the proportional shot volume for team $t$ in season $s$ in bin $i$, with $\sum_i v_{i,ts}=1$. Let $\mu_{i,ts} \in \mathbb{R}_{\ge 0}$ be the expected true points per shot from bin $i$, incorporating field-goal value and free-throw expected points from fouls drawn. Then define weighted means:
$\bar{v}_{w,ts} = \sum_{i=1}^B v_{i,ts} v_{i,ts}$? Wait weights are shot-volume weighted. Usually weighted correlation uses weights $w_i$. Here $w_i = v_{i,ts}$ (the volume itself). So weighted mean of $v$ with weights $v$: $\bar{v}_w = \frac{\sum_i v_i \cdot v_i}{\sum_i v_i} = \sum_i v_i^2$ since $\sum v_i=1$. Weighted mean of $\mu$: $\bar{\mu}_w = \sum_i v_i \mu_i$.
Then:
$\text{SSE}_{ts} = \frac{\sum_{i=1}^B v_{i,ts}(v_{i,ts}-\bar{v}_{w,ts})(\mu_{i,ts}-\bar{\mu}_{w,ts})}{\sqrt{\left[\sum_i v_{i,ts}(v_{i,ts}-\bar{v}_{w,ts})^2\right]\left[\sum_i v_{i,ts}(\mu_{i,ts}-\bar{\mu}_{w,ts})^2\right]}}$
This is the Pearson correlation weighted by volume.

Units: $\mu$ is points per shot (dimensionless but physically points/shot). $v$ is proportion (dimensionless). SSE is correlation coefficient, dimensionless, $[-1,1]$.

Breakdown regimes:
1. If $\exists i: v_{i,ts}=0$ for all but one bin, then variance terms collapse -> undefined.
2. If $\mu_{i,ts} = \mu$ constant for all $i$, denominator second factor is zero -> undefined (singularity).
3. If $B$ is too large relative to observations, many empty bins -> sparse correlation, high variance.

Regression equation (from text):
$Y_{ts} = \beta_0 + \beta_1 \text{SSE}_{ts} + \beta_2 \text{DRtg}_{ts} + \beta_3 \text{TS}_{ts} + \beta_4 \text{ExogAbility}_{ts} + \beta_5 \text{Season}_t + \beta_6 \text{TOV\%}_{ts} + \beta_7 \text{ORB\%}_{ts} + \lambda_s + \epsilon_{ts}$
Wait, team fixed effects are team $t$, season is time trend. So $\lambda_t$ for team, plus season trend.
Payroll model adds $\beta_8 \text{Payroll}_{ts} + \beta_9 \text{Payroll}^2_{ts}$.

From table: DRtg coefficient -0.031. Note DRtg is defensive rating (points allowed per 100 possessions), negative coefficient means better defense (lower DRtg) -> higher win%. Wait coefficient is negative: as DRtg increases (worse defense), win% decreases. That makes sense.

Exogenous shooting ability coefficient 1.050. If exogenous shooting ability is expected points per shot (median 0.88), a 1 unit increase is huge; 1 SD (0.05) increase -> 1.050 * 0.05 = 0.0525 win proportion, which is ~4.3 games. The text says 1 s.d. increase in Exogenous Shooting Ability has approx three-fold effect compared to SSE. SSE estimate 0.350, SD of SSE? Not given directly, but we have true_shooting_efficiency SD 0.05, exogenous SD 0.05. Actually maybe SSE SD is around 0.05 too? 0.350 * 0.05 = 0.0175 win prop (~1.4 games), matching text "1 s.d. increase ... increases expected wins by 1.41". So 1.41/82 = 0.0172 win proportion. Yes, 0.350 * SD_SSE = 0.0172 -> SD_SSE ≈ 0.049. So consistent.

Exogenous: 1.050 * 0.05 = 0.0525 -> 4.3 games, which is ~3x 1.41. Good.

Now, writing the sections. Need to be careful with word count. Let's aim:
THINK_TRACE: ~500 words
SOURCE_OPERATORS_AND_EQUATIONS: ~250 words
RETROCAUSAL_GENEALOGY: ~200 words
RECURSIVE_THEORY_OF_MIND: ~200 words
CROSS_LAYER_VETO_ADJUDICATION: ~200 words
RLVR_COUNTERFACTUAL_VETOES: ~200 words
Total ~1550 words. Good.

I will not use markdown code blocks for LaTeX? I can use inline $...$ and display $$...$$. That's fine.

Let's draft.

Important: No mention of betting. I'll avoid words like "spread", "total", "moneyline", "odds", "bookmaker", "wager", "bet". I can mention "win proportion", "expected wins", "games".

Check: "nearly 3 games" is fine. "win proportion" is fine.

Now write the final response.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper constructs Shot Selection Efficiency (SSE) as a shot-volume weighted Pearson correlation between bin-level proportional shot volume and bin-level expected true points across the half court, including free-throw expected points [PAGE 1]. The first derivation hop is to define the sample space: let $i \in \{1,\dots,B\}$ index observed half-court shooting bins for team $t$ in season $s$. Let $v_{i,ts} \in [0,1]$ be proportional volume in bin $i$, such that $\sum_i v_{i,ts}=1$. Let $\mu_{i,ts} \in \mathbb{R}_{\ge0}$ be expected true points per shot from bin $i$, incorporating made field goals and expected points from fouls/free throws [PAGE 1]. The weighted means under volume weights $w_i = v_{i,ts}$ are $\bar{v}_{w,ts} = \sum_i v_{i,ts}^2$ and $\bar{\mu}_{w,ts} = \sum_i v_{i,ts}\mu_{i,ts}$. SSE is then the ratio of the weighted covariance to the product of weighted standard deviations. A second hop identifies the counterfactual object: a 0.1 unit increase in this weighted correlation is claimed to yield 0.035 units of win proportion, or nearly three games in an 82-game season [PAGE 1]. The third hop separates selection from conversion: Exogenous Shooting Ability is an unweighted average of bin-level expected true points, $\bar{\mu}_{ts} = B^{-1}\sum_i \mu_{i,ts}$, explicitly designed to be independent of where the team chooses to shoot [PAGE 1]. The fourth hop places both variables in a team fixed-effects panel with Pythagorean win percentage or actual win percentage as the left-hand side, controlling for defensive rating, turnover rate, offensive rebound percentage, season, and team [PAGE 1].

Gray-zone audit reveals several specification risks. First, the PDF table lists a predictor labeled "true shooting efficiency" with coefficient 0.350, while the narrative refers to "Shot Selection Efficiency" [PAGE 1]. These may be the same variable mislabeled in extraction, or they may be distinct constructs; the summary statistics show true_shooting_efficiency (median 0.51, SD 0.05) separate from exogenous_shooting_ability (median 0.88, SD 0.05), but no separate SSE summary row appears, creating an identification ambiguity. Second, the bin resolution is never defined: "each observed shooting bin of the half court" [PAGE 1] does not state whether bins are 1-foot, 2-foot, or court-region cells, which materially affects the correlation because finer bins increase sparsity and empty-bin singularities. Third, the FT scoring incorporation is described only as "from the field and free throw line" [PAGE 1] without stating whether expected points are conditional on fouls drawn, shot clock, or defender distance, leaving the expected-points operator underspecified. Fourth, the panel is exactly balanced: 210 observations equals 30 teams $\times$ 7 seasons (2016/17–2022/23) [PAGE 1], leaving no within-team seasonal gaps to identify team fixed effects separately from time-invariant coaching quality; the paper itself proposes future coaching-tenure fixed effects because the current design cannot cleanly separate selection skill from roster stability [PAGE 1]. Fifth, payroll enters only in the third model with linear and quadratic terms (coefficients 1.095 and -0.674, p=0.079 and p=0.084), suggesting marginal, non-significant pricing of SSE into salaries, but the normalized payroll range [0.46, 1.00] [PAGE 1] compresses cross-sectional variation and risks attenuation bias. Finally, causal direction is unresolved: high SSE may cause wins, or winning teams may have the roster construction and coaching security to take higher-value shots, making the fixed-effects control necessary but not sufficient for causal claims.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, page citations, and breakdown regimes.

Define the spatial bin set $\mathcal{B} = \{1,\dots,B\}$. For team $t$, season $s$:
- Proportional bin volume: $v_{i,ts} \in [0,1]$, $\sum_{i \in \mathcal{B}} v_{i,ts} = 1$ [PAGE 1].
- Expected true points per shot: $\mu_{i,ts} \in \mathbb{R}_{\ge0}$, measured in points/shot, including field-goal expected value and free-throw expected value [PAGE 1].

Volume-weighted means:
$$\bar{v}_{w,ts} = \frac{\sum_i v_{i,ts} \cdot v_{i,ts}}{\sum_i v_{i,ts}} = \sum_i v_{i,ts}^2, \qquad \bar{\mu}_{w,ts} = \sum_i v_{i,ts}\mu_{i,ts}.$$

Shot Selection Efficiency:
$$\text{SSE}_{ts} = \frac{\sum_{i \in \mathcal{B}} v_{i,ts}(v_{i,ts} - \bar{v}_{w,ts})(\mu_{i,ts} - \bar{\mu}_{w,ts})}{\sqrt{\left[\sum_i v_{i,ts}(v_{i,ts} - \bar{v}_{w,ts})^2\right]\left[\sum_i v_{i,ts}(\mu_{i,ts} - \bar{\mu}_{w,ts})^2\right]}}.$$
SSE is dimensionless, range $[-1,1]$, unit: correlation coefficient [PAGE 1].

Exogenous Shooting Ability (unweighted, selection-independent):
$$\text{ExogAbility}_{ts} = \frac{1}{B}\sum_{i \in \mathcal{B}} \mu_{i,ts},$$
unit: points/shot [PAGE 1].

Fixed-effects regression (Pyth_W_pct or W_pct as $Y_{ts}$):
$$Y_{ts} = \beta_0 + \beta_1\text{SSE}_{ts} + \beta_2\text{DRtg}_{ts} + \beta_3\text{TS}_{ts} + \beta_4\text{ExogAbility}_{ts} + \beta_5\text{Season}_t + \beta_6\text{TOV\%}_{ts} + \beta_7\text{ORB\%}_{ts} + \lambda_t + \epsilon_{ts},$$
where $\lambda_t$ are team fixed effects [PAGE 1]. Payroll-augmented model adds $\beta_8\text{Payroll}_{ts} + \beta_9\text{Payroll}_{ts}^2$ [PAGE 1].

Empirical anchors from table [PAGE 1]: $\hat\beta_1 \approx 0.350$ (SE 0.118–0.148), $\hat\beta_4 \approx 1.050$–$1.095$ (SE 0.127–0.150), DRtg $\hat\beta \approx -0.031$, $N=210$, $R^2$ between 0.739 and 0.827. Claim: $\Delta \text{SSE} = +0.1 \Rightarrow \Delta Y = +0.035$ win proportion $\approx 3$ games; $1\text{ s.d.}$ SSE $\Rightarrow +1.41$ expected wins; $1\text{ s.d.}$ ExogAbility $\Rightarrow \approx 3\times$ that effect [PAGE 1].

Breakdown / singularity regimes: (1) If $\mu_{i,ts} = \mu$ constant across all bins, the second variance term is zero and SSE is undefined ($0/0$). (2) If volume is concentrated in a single bin ($v_{i,ts}=1$ for one $i$, zero elsewhere), the first variance term collapses and SSE is undefined. (3) If bins are defined too finely relative to observed attempts, empty bins ($v_{i,ts}=0$) induce sparse high-leverage correlations and unstable estimates. (4) Payroll normalized range [0.46, 1.00] [PAGE 1] limits identification of the quadratic payroll term, consistent with its marginal p-values (0.079, 0.084).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week inference traps.

SSE descends from three lineages. The Moneyball tradition (Lewis, 2003) treats market mispricing of undervalued skills as arbitrage; the paper explicitly frames SSE as a potential Moneyball opportunity if shot selection is not fully priced into player salaries [PAGE 1]. The expected-points / shot-value tradition (Cervone et al.; Goldsberry spatial shot charts; modern Expected Point Value models) supplies the $\mu_{i,ts}$ operator: expected true points per shot from field and free-throw line [PAGE 1]. Dean Oliver’s Four Factors supply the control variables DRtg, TOV%, ORB%, and the Pythagorean win expectation (Bill James) supplies the left-hand side Pyth_W_pct [PAGE 1]. The panel fixed-effects design follows labor and sports economics practice of isolating within-team variation over time while absorbing time-invariant coaching and roster quality.

Multi-week traps: Early-season shot charts have small bin counts, making $\mu_{i,ts}$ and $v_{i,ts}$ noisy; SSE estimates in weeks 1–4 are high-variance and should not be used for roster inference. Mid-season injuries alter roster composition exogenously, shifting bin volumes without a corresponding change in selection intelligence; the fixed effects absorb only time-invariant roster quality, not mid-season personnel shocks. Late-season rest and tanking change shot volume toward bench players in low-leverage bins, mechanically depressing or inflating SSE independent of coaching. Playoff roster shortening further breaks season-level stationarity: a regular-season SSE measured over 82 games may not transfer to a 7-game playoff series where rotation length shrinks and defensive schemes converge. Because the data span 2016/17–2022/23 [PAGE 1], rule changes (e.g., officiating emphasis on non-basketball moves, three-point line spacing) and tactical evolution (mid-range abandonment, corner-three emphasis) create cohort effects that a simple linear season trend may under-correct.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and clock structure.

Crisis habit regression: under high-leverage late-game conditions, teams regress from efficient bin selection to isolation-heavy, high-usage mid-range or at-rim attempts that are easier to execute under defensive pressure but lower in expected true points. Because SSE is computed across all shooting bins for a full season [PAGE 1], crisis-time regressions are averaged with regular-volume bins, potentially masking a selection collapse precisely when it matters most. A team with high seasonal SSE may still exhibit negative in-crisis correlation between volume and expected points.

Counter-trap: defenses observe a team’s shot chart and voluntarily cede the bins the offense over-volumes while taking away high-expected-points bins. If team $t$ over-volumes corner threes, the defense shifts to deny them; the ex-post correlation between volume and expected points may turn negative in subsequent games even if the pre-adjustment SSE was high. The measure is therefore an equilibrium object, not a static advantage; its value decays as opposing scouting adapts over a multi-week horizon.

Clock: The season-level aggregation erases shot-clock structure. Late-clock shots (shot clock under 8 seconds) are physically forced into lower-efficiency bins regardless of selection intelligence. End-of-game fouling changes free-throw expected points and the denominator of true points. The model includes no shot-clock or game-state interaction [PAGE 1], so SSE cannot distinguish a team that consistently takes good early-clock shots from one that merely avoids bad late-clock shots. A recursive opponent model would condition SSE on defensive pressure, score differential, and shot-clock time, which the current revealed-efficiency approach does not observe.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto proof.

Physical layer: NBA court geometry is fixed—rim height 10 ft, three-point line at 23.75 ft (top) and 22 ft (corner), lane width 16 ft. Half-court bin definitions are therefore bounded by invariant court dimensions; bin centroids cannot drift season to season absent a rule change. Because the data span fixed-court seasons [PAGE 1], spatial binning is physically stable, and no court-dimensional veto applies.

Biomechanical layer: Expected true points $\mu_{i,ts}$ depends on release height, release angle, approach velocity, and defender contest distance, none of which are specified in the paper’s operator [PAGE 1]. Fatigue across back-to-backs, minutes restriction, and injury status alter shooting mechanics and shot location without changing selection intent. If a primary rim runner is injured, the team’s bin volumes shift toward lower-expected-points shots not because of worse selection but because of roster constraint; the fixed effect $\lambda_t$ cannot absorb this time-varying biomechanical shock. This constitutes a veto: SSE misattributes roster-driven volume shifts to coaching/selection quality.

Weather layer: NBA games are indoors in climate-controlled arenas. Temperature, humidity, wind, and precipitation do not vary across the observed population [PAGE 1]. Therefore no weather veto exists for this dataset; the physical environment is homogeneous and cannot explain cross-team SSE variation. Altitude is also effectively constant across NBA venues relative to outdoor sports.

Adjudication: The only operative vetoes are biomechanical (injury, fatigue, mechanics) and spatial sparsity (empty bins). Physical court and weather layers are null. Any causal claim about SSE must therefore condition on roster availability and minutes distribution; otherwise the volume vector $v_{i,ts}$ is contaminated by forced substitution, not pure selection.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR (reinforcement learning from verifiable rewards) counterfactual veto scenarios with falsifiable predictions.

Veto Scenario 1 — Empty-bin singularity. Construct a synthetic team-season where shot volume occupies only one bin ($v_{1,ts}=1$, all others $0$) while expected true points vary across bins. Verifiable prediction: SSE returns NaN or $0/0$ because both weighted variance terms vanish; any software implementation must exclude zero-volume bins before computing correlation, and inclusion of empty bins without exclusion will crash or produce undefined output. This is directly verifiable from the formal equation [PAGE 1].

Veto Scenario 2 — Flat expected-points surface. Construct a counterfactual where $\mu_{i,ts} = c$ for all bins (identical expected true points everywhere) but volume is non-uniform. Verifiable prediction: SSE is undefined because the expected-points weighted variance term is zero; the measure cannot distinguish selection quality when the payoff surface is flat. This tests whether the model correctly signals non-identification rather than returning a spurious correlation near zero.

Veto Scenario 3 — Payroll fixed-effects collinearity. Subsample to a single season ($T=1$) so team fixed effects $\lambda_t$ absorb all cross-sectional payroll variation because normalized payroll range [0.46,1.00] [PAGE 1] is limited and team-specific. Verifiable prediction: the coefficients on payroll_normalized and payroll_normalized$^2$ will blow up in standard error or be dropped by the software due to collinearity with team fixed effects; the reported p-values of 0.079 and 0.084 [PAGE 1] are consistent with weak identification, and in a single-season subsample they should become statistically inseparable from zero or computationally infeasible. Each scenario is verifiable by re-estimation on the described counterfactual data without appealing to unobserved betting markets.
</RLVR_COUNTERFACTUAL_VETOES>