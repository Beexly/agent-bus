---
source: "2024 Estimating NBA Team Shot Selection Efficiency from Aggregations of True, Continuous Shot Charts - A Generalized Additive Model Approach.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 15
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4895
---

<NATIVE_REASONING>
The user wants me to analyze a specific research paper about NBA shot selection efficiency using GAMs and continuous true shot charts. They've provided the full text of the paper (17 pages shown).

Requirements:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to be very careful about:
- No betting lines whatsoever.
- Formal LaTeX equations only, no made-up ratios.
- Cite page markers from the provided text. The text has page numbers visible: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17. I should reference them as [PAGE N].
- Verbatim quotes where citing specific claims.
- Total depth >= 1000 words across sections. THINK_TRACE alone needs >= 400 words.

Let me structure the response:

THINK_TRACE: Deep multi-hop derivation & gray-zone audit. Need >= 400 words. Discuss the GAM formulation, the true shot chart concept, shot selection efficiency as Pearson correlation, regression models, payroll analysis, three-point premium/dispremium, gray zones (e.g., missing equations rendered as garbage text "!\"#$!", the FT rate calculations omitted on page 6, the exact GAM smooth terms not specified, sample restrictions 2016-17 to 2022-23 n=210, fixed effects mention but Table 2 doesn't show team FE estimates, Pythagorean exponent 14 assumption, etc.).

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown. I need to reconstruct the formal equations from the text. Since some equations are garbled (Pythagorean formula shows "!\"#$!..."), I should state the standard Pythagorean expectation formula properly: Win% = (Pts^14) / (Pts^14 + OppPts^14) or similar, citing [PAGE 9] where it mentions exponent 14 updating Morey (1993). Shot Selection Efficiency: spatial Pearson correlation between expected proportional volume v(x,y) and expected true points p(x,y): ρ = corr(v, p) over grid G ⊂ ℝ². Units: dimensionless [-1,1]. Exogenous shooting ability: E[p(X,Y)] under uniform spatial distribution, units points per shot. Regression: PythW_i = β0 + β1 SSE_i + β2 ESA_i + β3 DRtg_i + β4 TOV%_i + β5 ORB%_i + γ_i (team FE) + ε_i. Model 2 replaces dependent with actual W proportion. Model 3 with Net Rating. Units: win proportion dimensionless, Net Rating points per 100 possessions. Table 2 coefficients: β_SSE = 0.400 (Pyth W), SE 0.086, p<0.001; β_ESA = 1.307; etc. Table 3 payroll: normalized payroll coefficient 0.018 (p=0.002), squared -0.003 (p=0.336). XGBoost OOS MAE 0.052, OOS R² 0.625, in-sample MAE 0.0004, R² 0.999989 [PAGE 12]. Three-point premium/dispremium: traditional +0.025 to +0.064 points per 3PA 2016-17 to 2020-21; 2021-22 no significant premium; true chart dispremium since 2018-19, -0.066 points per 3PA in 2021-22 [PAGE 15]. FT rate examples: Harden FTA/FGA = 0.557 vs league avg 0.26 [PAGE 4]; Butler 0.709 max, 0.625 in 2022-23 [PAGE 4]. Sample: n=210 team-seasons 2016-17 through 2022-23 [PAGE 10]. Median SSE 0.27, SD 0.06, range 0.01-0.44 [PAGE 7]. Exogenous shooting ability median 0.88 true points per shot [PAGE 8]. Observed sample average true points per shot 1.13 [PAGE 8]. Net value of shot selection ~0.25 points per shot [PAGE 8]. Pythagorean exponent 14 [PAGE 9].

RETROCAUSAL_GENEALOGY: Historical lineage: GAMs Hastie & Tibshirani 1987 [PAGE 2]; shot charts Papalexakis & Pelechrinis 2018; Jiao et al. 2021; Franks et al. 2015; Fichman & O'Brien 2019; Skinner & Goldman 2015; Goldman & Rao 2011; Narayan 2019; Winston et al. 2022 [PAGE 1]. Three-point line changes 1994-1997 (23.75 to 22 feet) [PAGE 1]. SportVU adoption 2013-14 [PAGE 1]. Morey 1993 Pythagorean [PAGE 9]. Ehrlich & Sanders 2021 three-point premium erosion [PAGE 14]. Moneyball Massey & Thaler 2013 [PAGE 16]. Multi-week traps: teams misreading traditional charts, overshooting 3PA market, dispremium hidden by FT omission, payroll not pricing SSE.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is more abstract but needs to connect to the paper's findings. Teams regressing to crisis habits (over-reliance on traditional shot charts, chasing 3PA volume despite dispremium), counter-trap (adopting true shot charts to exploit mispriced long 2PA/FT-rich regions), clock (seasonal trends 2016-17 to 2022-23, the 2021-22 inflection where traditional premium vanished but true dispremium deepened). Need to discuss agent modeling: coaches/front offices updating beliefs vs inertia.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Since basketball is indoor, weather veto is minimal but can discuss arena conditions, travel, back-to-backs (biomechanical fatigue), physical shot clock constraints (24s), court dimensions (94x50 ft, three-point line 23.75 ft above break, 22 ft corners), rim height 10 ft. Veto conditions: if GAM smoothness penalty oversmooths sparse regions (baseline extended long 2PA), estimates break down; if FT rate conditional on location is sparse, true yield unreliable; if team sample n=210 with fixed effects, degrees of freedom limited; Pythagorean exponent 14 assumption may not hold in all eras.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or just verifiable scenarios. I'll frame as counterfactual veto scenarios where the model's prediction would be falsified:
1. Veto: If a team increases SSE by 0.1 but win proportion does not increase by ~0.04 (3.28 wins/82) controlling for ESA, DRtg, etc., the linear causal claim is vetoed. Prediction: teams with SSE delta >0.1 year-over-year should outperform Pythagorean residuals by ~3 wins.
2. Veto: If long 2PA baseline-extended regions do not show higher made-FT rates than adjacent 3PA regions, the foul-deterrence mechanism (defenders avoid fouling 3PA due to 3 FTs vs 2 FTs) is vetoed. Prediction: play-by-play data should show FT rate (FTA/FGA) higher for long 2PAs than step-back 3PAs in identical defensive contexts.
3. Veto: If the three-point dispremium (-0.066 pts/3PA in 2021-22) is driven solely by a few outliers rather than leaguewide aggregation, the claim that teams overshot the market is vetoed. Prediction: season-level true shot chart aggregation for 2022-23 (outside sample) should show continued dispremium or further decline; if premium returns positive under true charts, the 2018-19 structural break claim fails.

Need to ensure no betting lines. No mention of spreads, totals, moneylines, odds. Avoid any gambling terminology. Use "win proportion", "net rating", "expected wins", etc.

Need exact XML section tags. Must be valid XML-ish. Word count total >= 1000. THINK_TRACE >= 400.

Let me draft carefully.

Page citations: The text has page numbers at bottom: 1 through 17. I'll use [PAGE 1], [PAGE 2], etc.

Verbatim quotes: I need to include some exact quotes from the source. I can quote short phrases. Since equations are garbled in the source (shown as "!\"#$!..."), I should note that the source's Equation 1 rendering is corrupted [PAGE 9], but the text states Pythagorean exponent is 14 [PAGE 9]. I will present the formal LaTeX myself, clearly derived from the described model, not fake toy ratios.

Important: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." So I must not invent ad-hoc ratios. All equations should be formal statistical models described in the paper.

Let me write the sections.

THINK_TRACE (>=400 words):
- Multi-hop: paper constructs continuous true shot charts via GAM -> estimates expected true points including shot-pursuant FT -> aggregates to team-season level -> computes Shot Selection Efficiency as spatial Pearson correlation between volume and true yield -> regresses win outcomes on SSE controlling for exogenous shooting ability and four factors -> finds significant causal-ish effect -> payroll augmentation shows SSE is moneyball (supra-payroll) -> three-point premium analysis reveals dispremium when FTs included.
- Gray zones: Equation 1 is visually corrupted in the PDF extraction ("!\"#$!..."), so the exact Pythagorean formula is not directly reproducible from text; however text explicitly states exponent 14 updating Morey 1993 [PAGE 9]. The GAM smooth functions are not explicitly written (no penalty basis, no smoothing parameter selection method) [PAGE 2]. The differential chart FT premium discussion on page 6 has two missing expected-point values ("expected points" placeholders) [PAGE 6], likely 3*(FT%) vs 2*(FT%) but not stated; I must not invent them as toy ratios. The sample is restricted to 2016-17 through 2022-23, n=210 [PAGE 10], which excludes earlier SportVU era and limits generalizability. Fixed effects are mentioned ("team fixed effects") but Table 2 does not report FE estimates, so within-team vs between-team identification is unclear [PAGE 7, PAGE 10]. XGBoost in-sample R²=0.999989 suggests overfitting or data leakage despite OOS R²=0.625 [PAGE 12]. The three-point dispremium claim relies on aggregation of all NBA shots but does not decompose by team or player, so ecological fallacy risk [PAGE 14-15].

SOURCE_OPERATORS_AND_EQUATIONS:
Define domain Ω ⊂ [0,94] × [0,50] ft (half-court). GAM: E[TruePoints | x, y] = β₀ + f₁(x) + f₂(y) + f₃(x,y) + ... smooth terms. Units: points per shot. Shot Selection Efficiency: ρ_SSE = Corr_{g∈Grid}(v̂(g), p̂(g)) where v̂ is expected proportional volume, p̂ is expected true points. Dimensionless, [-1,1]. Exogenous shooting ability: ESA = (1/|Grid|) Σ_g p̂(g), units points per shot. Median 0.88 [PAGE 8]. Observed avg 1.13 [PAGE 8]. Net value ≈ 0.25 points per shot [PAGE 8]. Regression Model 1: PythW_i = α + β_SSE SSE_i + β_ESA ESA_i + β_D DRtg_i + β_T TOV%_i + β_O ORB%_i + μ_team + ε_i. PythW = (PF^14)/((PF^14)+(PA^14)) based on exponent 14 [PAGE 9]. Coefficients from Table 2 [PAGE 10]: β_SSE = 0.400 (SE 0.086, p<0.001) for Pyth W; ΔSSE=0.1 → ΔWinProp=0.040 → ≈3.28 wins/82 [PAGE 10]. Model 3: NetRating_i = ... β_SSE = 14.149 (SE 2.691) → ΔSSE=0.1 → ΔNetRating=1.41 pts/100 possessions [PAGE 10]. Table 3 [PAGE 11]: adding Normalized Payroll and squared: β_SSE = 0.379 (SE 0.084, p<0.001); β_Payroll = 0.018 (SE 0.006, p=0.002); β_Payroll² = -0.003 (SE 0.003, p=0.336). XGBoost: 90/10 split, OOS MAE 0.052, OOS R² 0.625, in-sample MAE 0.0004, R² 0.999989 [PAGE 12]. Three-point premium: traditional +0.025 to +0.064 pts/3PA 2016-17 to 2020-21; 2021-22 null; true chart dispremium since 2018-19, -0.066 pts/3PA in 2021-22 [PAGE 14-15]. FT rates: Harden 0.557 vs league 0.26 [PAGE 4]; Butler 0.625 in 2022-23, max 0.709 [PAGE 4].

RETROCAUSAL_GENEALOGY:
Historical/scientific lineage: Hastie & Tibshirani 1987 GAMs [PAGE 2]; Reich et al. 2006 spatial analysis basketball shot charts [PAGE 16]; Franks et al. 2015 Counterpoints [PAGE 1]; Skinner & Goldman 2015 optimal strategy [PAGE 16]; Goldman & Rao 2011 allocative efficiency [PAGE 16]; Papalexakis & Pelechrinis 2018 thoops [PAGE 16]; Fichman & O'Brien 2019 optimal shot selection [PAGE 16]; Jiao et al. 2021 Bayesian spatial point processes [PAGE 16]; Winston et al. 2022 SportVU revolution [PAGE 1]; Morey 1993 Pythagorean [PAGE 9]; Ehrlich & Sanders 2021 three-point premium erosion [PAGE 14]; Massey & Thaler 2013 loser's curse/market inefficiency analogy [PAGE 16]. Multi-week traps: The 2013-14 SportVU adoption accelerated 3PA volume [PAGE 1]. Teams relied on traditional charts omitting FTs, creating a perceived premium that was actually a dispremium under true scoring [PAGE 15]. This is a multi-week/season trap: incentives align to shoot more 3s because traditional charts say premium exists, but true yield says otherwise, especially post-2018-19. Teams that do not update shot charts continue overshooting the 3PA market.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: under pressure (playoffs, trailing), teams revert to high-volume 3PA habits reinforced by traditional charts [PAGE 14-15]. Counter-trap: adopting Continuous True Shot Charts reveals long 2PA baseline-extended and FT-rich regions as undervalued; coaches who exploit this gain selection efficiency without roster cost [PAGE 10-11]. Clock: the sample clock runs 2016-17 to 2022-23; the 2021-22 season is the inflection where traditional premium goes null and true dispremium swells to -0.066 [PAGE 15]. Agent recursion: front offices observe other teams increasing 3PA volume, infer it is optimal, copy it (herding), but the payoff structure has changed because defensive adjustments and foul avoidance on 3PAs alter true yield [PAGE 6]. This creates a Keynesian beauty contest where the analytic tool (traditional chart) is misspecified, leading to systematic selection errors.

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer: court geometry 94 ft × 50 ft, three-point line 23.75 ft above break, 22 ft corners (changed 1994-97) [PAGE 1], rim 10 ft, 24-second shot clock. Biomechanical: player fatigue across back-to-backs not modeled; FT rate conditional on location may vary by game state and fatigue. Weather: indoor arena, negligible direct weather effect, but arena altitude/humidity could minimally affect ball flight (not modeled). Veto proofs: (1) GAM breakdown if local shot density below smoothing bandwidth → baseline-extended long 2PA estimates unreliable [PAGE 2-3]; (2) True shot chart requires observed fouls; if foul-calling inconsistency across referees introduces measurement error in shot-pursuant FT, yield surface biased [PAGE 5-6]; (3) Regression with team fixed effects and n=210 across 7 seasons: if team FE absorb most SSE variation, between-team coefficient 0.400 may reflect coaching culture rather than player trait [PAGE 7, 10-11]; (4) Pythagorean exponent 14 fixed: if exponent varies by era or pace, win proportion estimates biased [PAGE 9]; (5) XGBoost in-sample R²≈1 indicates possible overfitting; OOS R² 0.625 is the reliable bound [PAGE 12].

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable scenarios + predictions.
Scenario 1: SSE-win margin veto. Counterfactual: Hold ESA, DRtg, TOV%, ORB%, payroll constant. If a team-season improves SSE by +0.10 but actual win proportion changes by less than +0.02 (half the predicted 0.04), veto the linear marginal effect. Prediction: teams with ΔSSE > +0.05 year-over-year should exhibit positive Pythagorean residuals averaging ≥ +2.0 wins per 82, conditional on controls.
Scenario 2: Foul-deterrence mechanism veto. Counterfactual: Compare made-FT rates on long 2PAs vs adjacent step-back 3PAs in identical defensive matchups. If 3PAs do not show lower foul rates (consistent with defenders avoiding 3-shot fouls), the explanation for long 2PA premium is vetoed. Prediction: play-by-play should show FTA/FGA for long 2PAs ≥ FTA/FGA for neighboring 3PAs, and true-yield equivalence between the regions should collapse when FTs are excluded.
Scenario 3: Three-point dispremium persistence veto. Counterfactual: Extend true shot chart aggregation to 2022-23 and 2023-24 (outside the paper's sample). If the leaguewide true 3PA-2PA differential becomes positive again or returns to the +0.025 to +0.064 range, the claim of a structural 2018-19 dispremium break is vetoed. Prediction: the dispremium should persist or deepen (-0.066 or more negative) because traditional volume incentives remain anchored to the obsolete premium.

Now ensure total words >= 1000. Let me estimate. THINK_TRACE ~500. SOURCE_OPERATORS ~500. RETROCAUSAL ~300. RECURSIVE ~300. CROSS_LAYER ~300. RLVR ~300. Total > 2000. Good.

Need to ensure no betting lines. I won't mention any betting terms. I'll use "win proportion," "expected wins," "net rating."

Need to cite exact [PAGE N] markers. I'll include them liberally.

Need verbatim quotes. I'll quote short exact phrases with quotation marks and page markers. Examples:
- "expected true point yield, from the field and line" [PAGE 2]
- "Shot Selection Efficiency" [PAGE 7]
- "moneyball" or supra-payroll source of wins [PAGE 11]
- "a significant and deepening three-point dispremium at the league level since the 2018-19 season" [PAGE 15]
- "exponent for the model is 14, updating from similar earlier estimates, e.g., by Morey (1993)" [PAGE 9]

Let me write the final output. Must be structured with exact XML tags. No markdown code blocks around XML? The user wants exact XML sections. I'll output just the XML sections with content. I can include LaTeX inside.

Double-check: The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." I have page numbers in text. Good.

Let's compose.

Be careful with LaTeX syntax. Use 	? No, just standard LaTeX.

I'll write it now.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper’s causal chain proceeds through five nested layers. First, it replaces discrete binned shot charts with a generalized additive model (GAM) that estimates expected true point yield continuously over the half-court domain, explicitly including shot-pursuant free throw scoring from missed shots drawing shooting fouls and “and-one” opportunities [PAGE 1]-[PAGE 2]. Second, it constructs Continuous True Shot Charts for teams and players, revealing that long two-point attempts along the baseline extended and just inside the three-point break can yield elite expected true points—sometimes comparable to adjacent three-point attempts—once free throw value is internalized [PAGE 3]-[PAGE 5]. Third, it defines Shot Selection Efficiency as the spatial Pearson correlation between expected proportional shot volume and expected true points across a half-court grid, while separately defining exogenous shooting ability as the spatial average of expected true points under uniform location weighting [PAGE 7]-[PAGE 8]. Fourth, it regresses Pythagorean expected win proportion, actual win proportion, and net rating on Shot Selection Efficiency and exogenous shooting ability, controlling for defensive rating, turnover rate, offensive rebounding rate, team fixed effects, and normalized payroll [PAGE 9]-[PAGE 11]. Fifth, it aggregates true shot charts league-wide to show that the traditional three-point premium (+0.025 to +0.064 points per three-point shot from 2016-17 through 2020-21) becomes null in 2021-22 under traditional charts, while true charts reveal a significant deepening three-point dispremium since 2018-19, reaching -0.066 points per three-point shot in 2021-22 [PAGE 14]-[PAGE 15].

Gray-zone audit: (1) Equation 1 is visually corrupted in the extracted text ("!\"#$!..."), so the exact Pythagorean functional form is not directly reproducible; however, the text explicitly fixes the Pythagorean exponent at 14, updating Morey (1993) [PAGE 9]. I therefore render the standard form formally below rather than inventing a toy ratio. (2) The GAM smooth terms, penalty basis, and smoothing-parameter selection are never written as explicit equations [PAGE 2], so the exact estimator is under-specified in the source. (3) Page 6 contains two missing numerical placeholders ("expected points" with no values) in the foul-deterrence comparison between missed three-point and two-point attempts; I do not substitute invented ratios [PAGE 6]. (4) The sample is restricted to 2016-17 through 2022-23, n = 210 team-seasons [PAGE 10], which excludes the pre-SportVU era and limits external validity. (5) Team fixed effects are listed as a control but their estimates are not reported in Table 2, so within-team versus between-team identification of Shot Selection Efficiency is ambiguous [PAGE 7]-[PAGE 10]. (6) XGBoost in-sample R² = 0.999989 with out-of-sample R² = 0.625 suggests possible overfitting or data leakage despite the strong out-of-sample result [PAGE 12]. (7) The leaguewide three-point dispremium is an ecological aggregation; it does not decompose by team or player, creating ecological-fallacy risk when inferring team-level behavior [PAGE 14]-[PAGE 15].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX, units, and page-cited breakdown.

Let the half-court domain be \Omega \subset [0,94] \times [0,50] ft. A Continuous True Shot Chart estimates expected true points per shot at location (x,y) \in \Omega:

\mathbb{E}[T \mid x,y] = \beta_0 + f_1(x) + f_2(y) + f_3(x,y) + \cdots,

where T is true points yielded from the field and shot-pursuant free throw line, units: points per shot [PAGE 2]. The model is a generalized additive model, a generalized linear model with smooth functions of explanatory variables; Hastie and Tibshirani (1987) are cited as the foundational reference [PAGE 2].

Shot Selection Efficiency for team or player i is the spatial Pearson correlation over a finite grid G \subset \Omega:

\rho_{\text{SSE},i} = \operatorname{Corr}_{g \in G}\bigl(\hat v_i(g), \hat p_i(g)\bigr),

where \hat v_i(g) is expected proportional volume and \hat p_i(g) is expected true points at grid cell g [PAGE 7]. Units: dimensionless, range [-1,1]. Sample summary: median 0.27, SD 0.06, range 0.01 to 0.44 across n = 210 team-seasons [PAGE 7]-[PAGE 8]. The 2017-18 Portland Trail Blazers hold the minimum (0.01); the 2021-22 Boston Celtics hold the maximum (0.44) [PAGE 8].

Exogenous shooting ability is the location-uniform average:

\text{ESA}_i = \frac{1}{|G|} \sum_{g \in G} \hat p_i(g),

units: true points per shot. Sample median 0.88, mean 0.88, range 0.76 to 1.03; observed league average true points per shot is approximately 1.13, implying a net shot-selection value of roughly 0.25 points per shot [PAGE 8].

Pythagorean expected win proportion uses exponent 14, updating Morey (1993) [PAGE 9]:

\widehat{\text{WinProp}}_i = \frac{\text{PtsFor}_i^{14}}{\text{PtsFor}_i^{14} + \text{PtsAgainst}_i^{14}}.

Model 1 estimates Pythagorean Win Proportion; Model 2 substitutes actual Win Proportion; Model 3 substitutes Net Rating (points per 100 possessions) [PAGE 9]-[PAGE 10]. Common right-hand side variables: Shot Selection Efficiency, Exogenous Shooting Ability, DRtg, offensive TOV%, offensive ORB%, team fixed effects, normalized payroll [PAGE 7].

Table 2 coefficient estimates [PAGE 10]:
- Pyth W: \beta_{\text{SSE}} = 0.400 (SE 0.086, p < 0.001); \Delta\rho_{\text{SSE}} = 0.10 \Rightarrow \Delta \text{WinProp} \approx 0.040 \approx 3.28 \text{ wins per 82-game season} [PAGE 10].
- Model 3 Net Rating: \beta_{\text{SSE}} = 14.149 (SE 2.691, p < 0.001); \Delta\rho_{\text{SSE}} = 0.10 \Rightarrow \Delta \text{Net Rating} = 1.41 \text{ points per 100 possessions} [PAGE 10].
- Exogenous shooting ability: \beta_{\text{ESA}} = 1.307 (SE 0.107, p < 0.001) in Model 1 [PAGE 10].
- R² between 0.672 and 0.757 across specifications [PAGE 10].

Table 3 payroll augmentation [PAGE 11]:
- \beta_{\text{SSE}} = 0.379 (SE 0.084, p < 0.001) when payroll added, essentially unchanged from 0.400 [PAGE 11].
- Normalized Payroll: \beta = 0.018 (SE 0.006, p = 0.002) [PAGE 11].
- Normalized Payroll Squared: \beta = -0.003 (SE 0.003, p = 0.336), insignificant [PAGE 11].
Conclusion: Shot Selection Efficiency is a supra-payroll, “moneyball” source of wins [PAGE 11].

XGBoost robustness [PAGE 12]: 90/10 train-test split; out-of-sample MAE = 0.052; out-of-sample R² = 0.625; in-sample MAE = 0.0004; in-sample R² = 0.999989. SHAP dependence plot shows monotonic positive impact; teams with Shot Selection Efficiency > 0.23 derive positive win contribution [PAGE 12]-[PAGE 13].

Three-point premium/dispremium [PAGE 14]-[PAGE 15]: Traditional chart aggregation yields +0.025 to +0.064 points per three-point shot over 2016-17 to 2020-21; 2021-22 shows no significant traditional premium. True chart aggregation yields a significant deepening dispremium since 2018-19; 2021-22 dispremium = -0.066 points per three-point shot (~1 point per 15 three-point shots) [PAGE 15]. Free throw rate context: James Harden 2019-20 FTA/FGA = 0.557 vs league average 0.26; Jimmy Butler 2022-23 FTA/FGA = 0.625, seasonal max 0.709 among small forwards [PAGE 4].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage. Generalized additive models originate with Hastie and Tibshirani (1987), cited as the first flexible, interpretable non-linear modeling family [PAGE 2]. Spatial basketball shot-chart analysis traces to Reich, Hodges, Carlin, and Reich (2006) [PAGE 16]. The modern analytical revolution is anchored in Franks, Miller, Bornn, and Goldsberry (2015) and the broader shot-chart tradition including Papalexakis and Pelechrinis (2018), Jiao, Hu, and Yan (2021), Fichman and O’Brien (2019), Skinner and Goldman (2015), Goldman and Rao (2011), Narayan (2019), and Winston, Nestler, and Pelechrinis (2022) on SportVU tracking [PAGE 1], [PAGE 16]. The Pythagorean expectation framework traces to Morey (1993), updated here to exponent 14 [PAGE 9]. The “moneyball” market-inefficiency framing invokes Massey and Thaler (2013) [PAGE 16]. Prior work on three-point premium erosion includes Ehrlich and Sanders (2021) [PAGE 14].

Historical inflections: The NBA three-point line was moved inward from 23.75 feet to 22 feet “above the break” from 1994 through 1997 and then restored, creating a localized rise-and-fall in three-point volume [PAGE 1]. Ubiquitous SportVU adoption began in 2013-14, coinciding with a marked upward slope in three-point attempts per team-game [PAGE 1]. The sample window 2016-17 through 2022-23 captures the post-tracking analytics era [PAGE 10].

Multi-week traps: (1) Tool misspecification trap—teams aggregated traditional shot charts that omit shot-pursuant free throws, producing a perceived three-point premium while true charts show a dispremium since 2018-19 [PAGE 15]. (2) Volume-herding trap—leaguewide three-point attempt volume continued rising dramatically even as the true premium turned negative, indicating teams followed perceived rather than true premia [PAGE 15]. (3) Payroll signaling trap—because Shot Selection Efficiency is not priced in the labor market (payroll coefficient small and SSE coefficient unchanged when payroll added), teams cannot simply buy efficiency; it must be developed through coaching and analytics [PAGE 11].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock.

Crisis habit regression: Under scoreboard pressure (late-game deficits, playoff elimination risk), offensive decision-makers tend to regress to high-visibility shot profiles reinforced by traditional charts—primarily rim attempts and three-pointers—because conventional wisdom labels long two-pointers as inefficient [PAGE 3]-[PAGE 5]. This habit persists even when true shot charts show baseline-extended long two-pointers and just-inside-the-break long two-pointers generating elite expected true points, partly due to elevated made free throw rates on those shots [PAGE 2]-[PAGE 5]. The regression is recursive: coaches observe leaguewide three-point volume, infer strategic optimality, and copy the habit, while the underlying payoff structure has shifted because defenders foul less aggressively on three-point attempts (a missed three-pointer drawing a foul awards 50% more expected free-throw points than a missed two-pointer) [PAGE 6].

Counter-trap: A team that adopts Continuous True Shot Charts can invert the crisis habit. By targeting spatial regions where expected true volume is underweighted relative to expected true yield—long two-point baseline regions with high foul-drawing rates, wing three-point regions, and deep threats out to roughly 26 feet before sharp yield decay—the team raises Shot Selection Efficiency without roster turnover [PAGE 3], [PAGE 10]-[PAGE 11]. The paper emphasizes that shot selection gains “can be taught to players” and do not require costly roster overhaul [PAGE 10]. The counter-trap succeeds only if the coaching staff trusts the continuous surface over the discrete heuristic.

Clock: The sample clock runs 2016-17 to 2022-23 [PAGE 10]. Shot Selection Efficiency trends upward from 0.23 (2016-17) to 0.32 (2022-23), indicating progressive analytic adoption [PAGE 8]-[PAGE 9]. The critical inflection is 2021-22: the traditional three-point premium goes null while the true-chart dispremium swells to -0.066 points per three-point shot [PAGE 15]. Teams that remain on the traditional-clock schedule continue shooting volume into a dispremium; teams that switch to the true-clock schedule exploit the mispriced long-two and foul-rich regions. The recursive loop closes when front offices recognize that the analytic tool itself (traditional shot chart) was misspecified, causing systematic overinvestment in three-point volume and underinvestment in shot-selection efficiency, a supra-payroll attribute [PAGE 11].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and environmental veto conditions.

Physical layer: Court geometry fixes the domain: 94 ft by 50 ft, rim at 10 ft, three-point line at 23.75 ft above the break and 22 ft in the corners (with the 1994-1997 line relocation noted as a historical perturbation) [PAGE 1]. The shot clock imposes a 24-second possession constraint not modeled in the shot-chart surface. Biomechanical layer: Player fatigue across back-to-backs, travel, and game-state intensity is not a covariate; conditional free throw rates by location may vary with fatigue and defensive pressure, introducing unmeasured heterogeneity into \mathbb{E}[T \mid x,y] [PAGE 2]. Environmental layer: NBA games are indoors, so direct weather effects are negligible; arena altitude and humidity may minutely affect ball flight but are not modeled and are treated as invariant across the sample.

Veto proofs and breakdown regimes:
1. GAM oversmoothing veto: In sparse regions (e.g., baseline-extended long two-pointers or deep three-pointers beyond 26 ft), local shot density may fall below the smoothing bandwidth, causing the continuous yield surface to borrow strength from adjacent locations and distort the estimated premium [PAGE 2]-[PAGE 3]. If local n is too low, the estimate breaks down and the “elite long two-point” finding becomes unreliable.
2. Foul-calling measurement veto: True yield depends on shot-pursuant free throws, which require observed shooting fouls. Referee inconsistency in foul-calling across locations and teams introduces measurement error into the made-FT rate component, biasing the differential between true and conventional charts [PAGE 5]-[PAGE 6].
3. Fixed-effects identification veto: Team fixed effects are included but not reported; if they absorb most of the between-season variation in Shot Selection Efficiency, the published 0.400 coefficient may reflect coaching/analytics culture rather than a portable player trait, weakening the labor-market “moneyball” inference [PAGE 7], [PAGE 10]-[PAGE 11].
4. Pythagorean exponent veto: Fixing the exponent at 14 assumes a static relationship between point differential and win proportion [PAGE 9]. If the exponent varies by era or pace (possession count converging toward ~100 per game in 2022-23) [PAGE 8], the win-proportion estimates are biased.
5. XGBoost overfitting veto: In-sample R² = 0.999989 versus out-of-sample R² = 0.625 indicates the out-of-sample bound is the only reliable estimate of predictive validity [PAGE 12].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable reinforcement-learning-from-verifiable-rewards counterfactual veto scenarios with predictions.

Veto Scenario 1 — Shot Selection Efficiency win margin. Construct counterfactual team-seasons holding Exogenous Shooting Ability, DRtg, offensive TOV%, offensive ORB%, and normalized payroll constant at observed values. If a team improves Shot Selection Efficiency by +0.10 units but actual win proportion changes by less than +0.020 (half the model-implied 0.040), the linear marginal effect is vetoed. Verifiable prediction: Teams with year-over-year \Delta\rho_{\text{SSE}} > +0.05 should exhibit Pythagorean residuals averaging at least +2.0 wins per 82 games, conditional on the control vector [PAGE 10].

Veto Scenario 2 — Foul-deterrence mechanism. Construct counterfactual play-by-play observations comparing long two-point attempts (baseline extended and just inside the three-point break) with adjacent step-back three-point attempts in identical defensive matchups. If three-point attempts do not exhibit a lower shooting-foul rate (inconsistent with defenders avoiding the 50% larger expected free-throw award on a missed three-pointer), the explanation for long-two-point true-yield equivalence is vetoed. Verifiable prediction: Play-by-play data should show FTA/FGA for long two-pointers greater than or equal to FTA/FGA for neighboring three-pointers, and the true-yield equivalence between those regions should collapse when shot-pursuant free throws are excluded [PAGE 2]-[PAGE 6].

Veto Scenario 3 — Three-point dispremium persistence. Extend true shot chart aggregation beyond the paper’s 2016-17 to 2021-22 window into 2022-23 and subsequent seasons. If the leaguewide true-chart three-point minus two-point differential returns to the traditional positive range (+0.025 to +0.064 points per three-point shot), the claimed 2018-19 structural break into dispremium is vetoed. Verifiable prediction: The dispremium should persist or deepen (at or below -0.066 points per three-point shot in 2021-22 terms) because traditional volume incentives remain anchored to the obsolete premium [PAGE 14]-[PAGE 15].
</RLVR_COUNTERFACTUAL_VETOES>