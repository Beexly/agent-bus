---
source: "2026 - The Contract Effect Why NHL Players Perform Differently When Money Is on the Line - Palisin.md"
folder: "/GSE-Research/sports-research-papers/md/library/journals/Wharton Sports Analytics Journal/2026"
pages: 38
model: deepseek/deepseek-v4.1-flash-1017
words: 9142
---

<NATIVE_REASONING>
The user gave me a source paper and a strict template to follow. I need to produce a research analysis with the exact XML sections and >=1,000 words across them, with page citations and verbatim quotes. Let me carefully construct this.

Key paper facts:
- Author: Vanessa Palisin, Wharton Sports Analytics Journal, Spring 2026
- 278 NHL players, 1,390 observations, 29 variables, 2013-2025 CBA era
- Contract length ≥ 3 years, skaters only
- Production Value formula: Total Ice Time / (Goal Points + Assist Points)? Wait, reading: "Production Value = Total Ice Time / (Goal Points + Assist Points)" — actually the paper says lower production = less time needed. So it's Ice Time / Points. So units: minutes per point. Yes, it's inverse efficiency.
- ML: Ridge, Lasso, RandomForest, XGBoost; 80/20 split; SelectKBest; GridSearchCV
- Results: SelectKBest Ridge best: R²=0.430, MSE=263.800, RMSE=16.241, MAE=11.84, CV R²=0.41497, SD 0.08670
- Mean residual -5.63, median -5.47, SD 16.12 — so players produced ~5.6 fewer production units than expected
- OLS results: xG/60 model R²=0.858; HD shots R²=0.692; production R²=0.513; games played R²=0.636; takeaways R²=0.354
- ANOVA: adjusted xG F=22.68, hits F=11.77, fenwick F=30.19, games played F=17.74, high danger shots F=16.84
- Figure 9: negative slope AAV vs production
- Figure 10: flat trendline residual vs AAV

I need to build sections:
1. <THINK_TRACE> (>=400 words)
2. <SOURCE_OPERATORS_AND_EQUATIONS> - formal LaTeX, units, page citations, breakdown regimes
3. <RETROCAUSAL_GENEALOGY> - historical/scientific lineage, multi-week traps
4. <RECURSIVE_THEORY_OF_MIND> - crisis habit regression vs counter-trap vs clock
5. <CROSS_LAYER_VETO_ADJUDICATION> - physical/biomechanical/weather veto proof
6. <RLVR_COUNTERFACTUAL_VETOES> - 3 verifiable veto scenarios + predictions

Wait, the DRIVE SOURCE says pages: 38 but the source text doesn't have explicit PAGE markers. Hmm. The instructions say "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." The source text here doesn't have explicit page markers inserted. I'll have to make reasonable page citations. But I should be careful — inventing page numbers could be seen as fabrication. However, the task explicitly wants page citations. Let me think.

Given the document is 38 pages, and it's a standard journal article, I can estimate page locations. But that's risky. I'll cite [PAGE N] with best-effort mapping based on the document structure, and I must be honest that page breaks aren't preserved in the text conversion. Actually, the header says "machine conversion from the stored PDF via pdftotext + scripted reflow; equations, tables and figures are NOT preserved." So page boundaries are lost. I'll note that and give section-anchored citations with indicative page ranges, and quote verbatim.

Actually, let me reconsider. The system says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." Since the conversion lost page markers, I should use the best available anchoring. I'll be transparent: cite [PAGE ~N] as approximate. But that might violate "exact." Hmm. Alternatively I can cite by section and quote verbatim, noting page numbers are unrecoverable from the provided reflow. I think the honest approach is best: state that page markers were stripped, anchor to section headers, provide verbatim quotes. I'll still provide page estimates labeled as reconstructed from the 38-page layout. I'll do a mix: mark them clearly.

Let me be careful with a few mathematical points to add value:

1. Production Value = T_ice / (G + A) — actually the OCR shows "𝑃𝑟𝑜𝑑𝑢𝑐𝑡𝑖𝑜𝑛 𝑉𝑎𝑙𝑢𝑒 = 𝑇𝑜𝑡𝑎𝑙 𝐼𝑐𝑒 𝑇𝑖𝑚𝑒 / 𝐺𝑜𝑎𝑙 𝑃𝑜𝑖𝑛𝑡𝑠 + 𝐴𝑠𝑠𝑖𝑠𝑡 𝑃𝑜𝑖𝑛𝑡𝑠" — the layout is ambiguous; could be Total Ice Time / (Goal Points + Assist Points). Given "lower production value indicates a player mandates less time to contribute" — yes, lower = better. So it's minutes per point. Units: min·point⁻¹.

2. But then the regression coefficient interpretation "each additional hit is associated with a 0.31 increase in production_value_in_min" — positive hits → higher minutes per point → worse efficiency. But the paper says "suggests that players who record more hits tend to have a slightly higher production value per minute" — that's an interpretive slip: higher production value in this metric is WORSE. I should flag this as a sign-convention hazard / gray zone. This is a genuinely valuable critique: the paper conflates "production value" with "productivity." Since production value = ice time per point, an increase is a decline in efficiency. And the negative correlation with xG/60 (r = -0.63) is then actually GOOD (higher xG/60 → lower minutes per point → better). The paper says "offensive metrics are more negatively correlated with the dependent variable" and treats negative as puzzling. Actually the negative sign is mechanically induced by the reciprocal construction. This is a key "singularity/breakdown regime": division by points, and at G+A = 0 the metric is infinite. That's a real singularity! Players with zero points in a season → undefined/infinite production value. That's a genuine breakdown regime. Excellent.

3. Residual mean −5.63 "production units" — units are min/point. So players needed 5.63 MORE minutes per point than predicted, i.e., they were less efficient. But the paper frames "produced approximately 5.6 fewer production units" — again sign/binding confusion. Actually a positive residual would mean more minutes per point. Mean residual = actual − predicted = −5.63, so actual LOWER than predicted, meaning actual was BETTER (fewer minutes per point) than predicted. Wait, that contradicts the paper's claim of underperformance. Hmm. Let me recompute.

Actually, the paper says "The mean residuals for all possible models are negative, indicating that, on average, each model slightly overpredicted player production." If residual = actual − predicted and mean is negative, then actual < predicted → model overpredicted. And they interpret "overpredicted player production" as overpredicting productivity. But if the metric is minutes-per-point, a lower actual value means BETTER. So the model overpredicted minutes-per-point, i.e., predicted players would be WORSE than they were, i.e., players actually OVERperformed.

So there's a genuine sign-convention inconsistency. Which way does the paper intend? "players produced about 5.63 units less than expected based on their prior years' trends" and "players generally underperformed in their contract year." So they're treating lower production_value_in_min as worse. That means they're implicitly treating the metric as points per minute, not minutes per point. Or the ESPN formula is Points per 60 = (G+A)/TOI*60.

Hmm — the OCR of the formula might be garbled. ESPN's actual stat is "points per 60" — points divided by ice time × 60. If Production Value = (G+A)/TOI, then lower = worse. And the paper says "a lower production value indicates a player mandates less time to contribute" — that's the opposite direction. So the OCR/text is internally inconsistent, likely due to formula loss.

I should flag this as a documented gray zone: the text's stated directionality ("lower production value indicates a player mandates less time to contribute") conflicts with the sign convention used in the residual interpretation ("5.6 fewer production units" = decline). This is a legitimate reproducibility defect worth naming, and I can define both conventions formally.

Let me handle this carefully and rigorously — present the LaTeX for both and state that the text is ambiguous, and that the inferential conclusions in the Discussion are only coherent under the Points-per-60 convention.

Actually wait. Let's re-read: "Production was selected to be the most competent figure for measuring overall player output... ESPN defines this as 'the average ice time per point recorded' [15]. Because this metric reflects how efficiently players generate points relative to their total ice time, a lower production value indicates a player mandates less time to contribute to the team."

So it's ice time per point (min/point). Lower = better. OK so the formula is TOI/(G+A).

Then "players produced about 5.63 units less than expected" — under this convention, −5.63 means actual TOI/point was 5.63 lower than predicted → BETTER efficiency than predicted. So "underperformed" is wrong. Unless they define residual = predicted − actual. Then −5.63 means predicted < actual, i.e., actual higher TOI/point = worse. That would be consistent with "underperformed."

So: residual = predicted − actual, mean −5.63 → predicted less than actual, i.e., actual TOI/point higher → worse efficiency → underperformance. That's coherent! Let me check "each model slightly overpredicted player production" — if residual = predicted − actual and negative, the model underpredicted the metric. Hmm, still muddled.

Also Figure 9: "as AAV increases, actual production for most players tends to slightly decrease... higher salaries produced less in their contract year than lesser-paid players." Under min/point convention, "produced less" would mean lower min/point = better. So again they mean points/min.

Conclusion: The paper is internally inconsistent about the sign convention, most likely because the formula rendering was destroyed and the narrative shifts between "ice time per point" and "points per minute." I'll present this as a formal ambiguity with two competing parameterizations and show that only one is consistent with the residual narrative. This is exactly the kind of "gray-zone audit" the prompt wants. Good.

4. Statistical issues:
- Same F-statistics reported across different dependent variables: adjusted xG F=22.68 appears in the xG/60 ANOVA, takeaways ANOVA, and games played ANOVA. Hits F=11.77 appears in production ANOVA and games played ANOVA. Games played F=17.74 in HD shots ANOVA and takeaways ANOVA. These are almost certainly the F-stats for the *independent* variables (the predictor "adjusted_expected_goals" across contract cycle), shared across models — i.e., the ANOVA is on the predictor time-course, not the outcome. So the ANOVA tables are characterizations of predictor trajectories across t−2…t+2, not outcome trajectories. The narrative conflates the two. That's a major gray-zone finding. Great catch.

- Design violation: OLS with player_id repeated → non-independence; they use repeated-measures ANOVA for stages but OLS with pooled observations for regression. No mixed-effects. Cluster-robust SE absent. 1,390 obs / 278 players ≈ 5 per player, so variance will be understated. That's a real gap.

- Multiple testing: 18 univariate tests × 5 outcomes = 90 tests at α=0.05, no FDR/Bonferroni. Expected ~4.5 false positives. Should mention Benjamini-Hochberg.

- Selection on complete cases only: excludes ~24 named players. Informative censoring — players who left the league (worse performers) are systematically dropped, biasing toward survivorship. This matters for the "shirking" inference because the worst post-contract outcomes are exactly the ones removed.

- 80/20 split with n=278, test n=56. Test R²=0.430 has wide CI. With p=16 predictors and n=56, the adjusted R² ~ 0.20. Standard error of R² ≈ sqrt(4R²(1-R²)²/n) ≈ sqrt(4*0.43*0.3249/56) ≈ sqrt(0.559/56)=sqrt(0.00998)=0.0999. So R²=0.43 ± ~0.20 (95% CI [0.23, 0.63]). Rough.

- GridSearchCV + SelectKBest inside/outside pipeline: leakage risk. SelectKBest applied before CV leaks. The text says SelectKBest was "implemented" and then "each model was trained and evaluated on the test data" — unclear ordering. Flag it.

- XGBoost CV R² 0.567 vs Ridge test R² 0.430 — comparing CV to test is apples/oranges. The paper does acknowledge this partially.

- MSE 263.8 → RMSE 16.24. So residual SD ~16.1, matching. Variance of production_value_in_min ≈ MSE/(1−R²) = 263.8/0.57 = 462.8 → SD ≈ 21.5. So the ~5.6 unit effect is ~0.26 SD — small effect size (Cohen's d ≈ 0.26). Worth stating: the headline "5.6 units" is a quarter of a standard deviation; practically small.

Actually: mean residual / SD = 5.63/16.12 = 0.35 SD of residuals. Relative to outcome SD 21.5, it's 0.26. Either way, small-to-moderate.

5. Multi-hop derivation:
- MRP model: MRP_L = p · ∂Q/∂L. For a player, MRP = ∂(Team Revenue)/∂(wins) × ∂(wins)/∂(player performance).
- Shirking: effort e_t chosen to maximize U = Σ β^t [w_t − c(e_t)] subject to w_t = f(signal_t) where signal is noisy.
- The t0 incentive: w_{t0+1} = f(observed performance at t0). So e_{t0} high. Post-signing, w fixed for 3+ years → ∂w/∂e = 0 → e falls to minimum enforceable (contractual). 
- Formalize: e*_t = argmax w_t(e_t) − c(e_t). With w fixed, e* = 0 (or e_min). With w renegotiable, e* solves w'(e) = c'(e).
- Moral hazard: hidden action with noisy signal, so the principal can't write a forcing contract. Akerlof/Grossman-Hart.
- The "Hidden action" model: effort only observed through a noisy signal s = e + ε. Optimal linear contract w = α + βs with β = 1/(1 + r σ² c''). Here r = risk aversion, σ² = signal noise. This gives the "discounting the future" result of Sen and Rice.
- Multi-year: with T-year contract, β → 0 after year 1.

6. Cross-layer veto adjudication: physical/biomechanical/weather veto proof. This is about hockey: biomechanics of hits, ice conditions, travel, altitude, back-to-backs, and weather (snowstorms affecting travel). I need to argue that physical/biomechanical/weather layers can veto the contract-effect interpretation. Concrete:
- Hit counts are scorekeeper-coded, home-bias systematic. HITS is a rink-attributed stat; NHL official scorers differ. So hits F=11.77 could be an artifact of rink/scorer changes when a player changes teams (free agents move teams!). This is a MASSIVE confound: the contract year → free agency → team change → new home rink → new scorekeeper → systematic change in hits/blocks/giveaways/takeaways. Real, documented home-bias in NHL real-time stats. This is a physical/measurement veto.
- Ice time per point: TOI is measured by the off-ice officials with ±1 shift noise. Denominator instability.
- Games played as "injury proxy" is contaminated by healthy scratches, AHL assignments, suspensions, personal leave, COVID (2020-21 shortened to 56 games, 2012-13 lockout to 48). The paper admits COVID but 2013 lockout season is in the window too (t−2 for 2013 signings = 2011-12, fine; but for a 2014 signing, t−2 = 2012-13 lockout = 48 games). Need to flag.
- Altitude: Colorado (Denver, 1609 m) — visiting teams at altitude. xG generation inflated? There is literature on altitude and shot rates.
- Weather: snowstorms and travel disruption; NHL schedule compression.

7. Retrocausal genealogy: Rosen & Sanderson 2001 MRP; Alchian & Demsetz 1972 team production; Akerlof 1970 lemons; Stiroh 2007 NBA; Jean 2016; Sen & Rice 2011; Ichniowski & Preston 2012 NBER w17928; Ahlstrom Si Kennelly; White & Sheldon 2014 (self-determination theory); Fort 2018; Bruggink & Williams 2011; Gustafson & Hadley 2017; Maxcey et al 2002. Lineage: neoclassical labor economics → principal-agent → behavioral (SDT, availability heuristic) → sports analytics → ML.

Note: reference [3] is cited repeatedly but resolves to a Bryant University honors thesis on MLB salary, not to Stiroh/Fort/Bruggink — the citation is overloaded/misattributed. That's a serious citation-integrity flag. Also [12] is cited in text for Alchian & Demsetz but the reference list shows [12] = Akerlof 1970. And [13] free-rider. Also Stiroh is [4] in reference list but cited as [3] in text. Jean is [6] but text says Jean (2010) while reference says 2016. Ahlstrom et al. text says 1999 while reference says 2016. These are verifiable citation defects — great for the "genealogy" and "RLVR veto" sections.

Also "Bruggink and Williams (2011)" — not in the reference list at all.

8. Recursive theory of mind: crisis habit regression vs counter-trap vs clock. I interpret: modeling the player's own belief about how the GM models the player's effort — a level-k / cognitive hierarchy. The "clock" = contract clock (years remaining). The "counter-trap" = GM knows about contract-year effect and discounts t0 performance (which would destroy the incentive to surge, restoring efficiency — a Goodhart collapse). The "crisis habit regression" = if a player's identity is built on being "the contract-year guy," the strategy regresses under a new CBA (e.g., 8-year max term limits, signing bonuses, no-trade clauses) to baseline habits.

Level-k: Level-0 player exerts e per habit. Level-1 anticipates GM uses t0 stats; surges. Level-2 GM anticipates and uses t−2/t−1 trend-adjusted forecast (which is exactly what this paper's Ridge model does — the GM becomes the ML model). Level-3 player anticipates the model and surges at t−2 and t−1 instead. This is a genuine arms race — "Goodhart's law on the ice." The paper's own model is a Goodhart engine: once teams use it, players shift the manipulation window earlier. That's the recursive ToM insight. Excellent.

Also the "clock": t0 is defined by the signing date, but contracts are signed mid-season or July 1; so "contract year" is a mixed 82-game window straddling two CBA seasons. The definition of the clock is imprecise → measurement error in the treatment variable → attenuation bias toward zero, meaning the true contract effect is LARGER than 0.26 SD. Or if the misclassification is correlated with performance, could bias either way. I'll present it as classical measurement error → attenuation.

9. RLVR counterfactual vetoes: 3 verifiable scenarios + predictions. RLVR = reinforcement learning with verifiable rewards. So I need to design counterfactual tests with deterministic, checkable outcomes.

Veto 1: Scorer-attribution veto. Prediction: re-run hits/blocks/giveaways/takeaways models with home/away split. If the contract-cycle effect on hits (F=11.77) is a rink-scorer artifact, the effect should be ~0 in road games only, and should jump discontinuously at team-change events for free agents. Verifiable: NHL play-by-play JSON, road-only subset, diff-in-diff at team change. Prediction: ≥60% of the hits effect vanishes on road-only.

Veto 2: Denominator singularity veto. Drop all player-seasons with G+A = 0 (undefined TOI/point). Prediction: the metric's distribution becomes defined and the sign of the xG/60 correlation stays negative but the magnitude changes. Verifiable: count zero-point player-seasons in the 1,390 rows; if >0, the metric is undefined and any reported coefficient is from a software-dependent arbitrary fill. Prediction: at least some rows have G+A=0 (fourth-liners) → NaN or inf.

Veto 3: Lockout/COVID schedule veto. Re-run excluding 2012-13 (48-game) and 2019-20/2020-21 (COVID). Prediction: games_played ANOVA F=17.74 drops by ≥50% and the residual mean shrinks in magnitude. Verifiable: season-level game counts from Hockey-Reference.

Maybe also a citation veto: [3] resolves to a Bryant honors thesis; the paper's claims attributed to Fort/Bruggink/Stiroh under [3] cannot be verified. Prediction: a DOI/URL resolution check shows [3] ≠ Stiroh 2007 (which is [4]).

I'll give 3 primary ones with explicit falsifiable predictions. Maybe 4. The prompt says exactly 3 verifiable RLVR veto scenarios. I'll give 3, each with a prediction and a check.

10. Word count: need ≥1,000 words total, with THINK_TRACE ≥400. I'll aim for ~2,500-3,500 words total to be safe and substantive.

Now let me also handle the "ZERO BETTING LINES" invariant — easy, this is not about betting. But I should avoid any mention of "against the spread" etc.

Also "ZERO TOY EQUATIONS" — I must state formal LaTeX with units and assumptions. Good.

Let me now write.

For page citations: I'll use [PAGE N] with reconstructed estimates based on the 38-page structure, but I must be honest. Actually, the prompt says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." The pages weren't provided as markers. I'll include a note at the top of the SOURCE_OPERATORS section: page markers were stripped by the pdftotext reflow; I anchor to section headers and give the page band from the 38-page original as reconstructed. Then I cite with quotes. I think this is the most honest approach. Let me use approximate page bands: Abstract p.1; Introduction p.1-4; Lit Review p.4-10; Methodology p.10-16; Results p.16-30; Discussion p.30-34; Limitations p.34-35; Conclusion p.36; Appendix p.36-37; References p.37-38.

I'll write [PAGE 1], [PAGE 2–3] etc. with the verbatim quotes so the reader can verify regardless of page drift. And I'll flag "page indices reconstructed; verbatim strings are exact."

Let me write the thing.

Structure:

<THINK_TRACE> — ~600 words. Multi-hop derivation: from MRP → hidden action → the sign ambiguity → the ANOVA F-stat reuse → circularity.

<SOURCE_OPERATORS_AND_EQUATIONS> — LaTeX for:
- Production Value (both conventions)
- MRP
- Shirking effort condition
- Principal-agent linear contract
- OLS/stepwise AIC
- VIF
- ANOVA F
- ML metrics (MSE, RMSE, MAE, R², CV)
- Residual decomposition & effect size
- Breakdown regimes: G+A=0 singularity, VIF>9, n=56 test set, multicollinearity, repeated measures.

<RETROCAUSAL_GENEALOGY> — lineage + multi-week traps.

<RECURSIVE_THEORY_OF_MIND> — level-k, Goodhart, clock.

<CROSS_LAYER_VETO_ADJUDICATION> — rink scorer, TOI measurement, travel/altitude/weather, biomechanics of hits, schedule compression.

<RLVR_COUNTERFACTUAL_VETOES> — 3 scenarios.

Let me write carefully with high technical density.

Some more numbers to compute:
- Effect size: mean residual −5.63, residual SD 16.12 → d_z = 0.349. Against outcome SD: total variance σ²_y = MSE/(1−R²) = 263.8/(1−0.430) = 462.8, σ_y = 21.51. 5.63/21.51 = 0.262.
- Power: n=56 test, R²=0.43, p=16 predictors. Adjusted R² = 1 − (1−R²)(n−1)/(n−p−1) = 1 − 0.57×55/39 = 1 − 0.8038 = 0.196. So adjusted R² ≈ 0.20. Big shrinkage.

Hmm, that's a strong point: the test-set R² of 0.430 collapses to adjusted 0.196 with p=16, n=56. And on the full n=278, adjusted would be 1 − 0.57×277/261 = 1 − 0.6049 = 0.395. Still notable shrinkage.

- Cross-validation SD 0.0867 across 5 folds → SE = 0.0867/√5 = 0.0388. 95% CI on CV R²: 0.415 ± 1.96×0.0388 ≈ [0.339, 0.491].

- For the ANOVA F: repeated measures with 5 levels, df1 = 4. F=22.68 with df(4, ~1108) → p ~ 10^-17. Fine.

- AIC stepwise: ΔAIC ≥ 2 rule.

- VIF = 1/(1−R²_j). Threshold 9 → R²_j = 0.889. Note games_played has VIF 8.23 and high_danger_shots_per_60min has 6.92 — retained despite being close to the cutoff. Note the retention is inconsistent with the stated ≥9 rule for corsi in other models.

Actually: the paper says "any VIF coefficient greater than nine was removed." games_played VIF=8.233 retained. OK fine, consistent. But high_danger_shots_per_60min VIF = 6.919 retained. Fine.

- Multicollinearity + the retained VIF list for games played includes 12 features with VIFs up to 8.23 but the narrative says "one statistically insignificant feature, corsi, was removed" — yet corsi isn't in the retained list. Minor inconsistency.

- Another: "When compared to the initial model presented in Table 19, the refined model in Table 20" — table numbering error; Table 20 is an ANOVA table. And "Takeaways ANOVA Results" heading appears over the Games Played section. Document defects.

OK. Also note: 17/18 predictor variables significant at p<0.05 in production univariate — with n=1390, that's expected due to high power. Effect sizes (R²) mostly small. Coefficient significance ≠ importance. Should use standardized betas.

- The correlation table: production_value_in_min vs blocks r = 0.40 positive. Under min/point convention, more blocks → higher minutes per point → worse. The paper says "This pattern highlights that defensive contributions are positively related to production efficiency" — again the sign slip. Under points/60, positive blocks → higher points/60 → better. So the paper is implicitly using points-per-60 there. Confirms the convention is genuinely flipped in the narrative.

Good, so I can definitively show the sign convention is internally inconsistent across three places.

Let me also derive the mechanical reciprocal identity: if PV = T/(P) and xG/60 is roughly proportional to P/T (points per minute) then PV ≈ c/xG. Then ∂PV/∂xG = −c/xG² < 0 always. So the r = −0.63 is mechanically forced, not an empirical discovery. That's a beautiful derivation. The paper says "the offensive variables performed stronger (i.e. closer to −1 rather than 0) due to production value being composed of points from goals and assists, both offensive features" — they half-recognize it, but the reciprocal form makes it structural: corr(T/P, P/T) is near −1 by construction. Should say: under the points-per-60 convention, corr would be positive by construction. Either way, the reported correlations are tautological, not informative. The "strongest" features in Table 1 (xG/60 R²=0.397, shooting% R²=0.345) are the ones most mechanically tied to the denominator.

This is a strong finding: the entire univariate R² ranking is dominated by mechanical coupling to the outcome's construction.

Also: "Adjusted Expected Goals" is a strong positive in the takeaways model with coefficient 0.20, and the paper's interpretation is backwards ("each unit increase in takeaways is associated with a 0.20 increase in adjusted expected goals" — they invert which is the response). Minor but real.

OK, enough. Let me also make sure I address "multi-week traps" in the genealogy — I think this means traps that unfold over multiple weeks: e.g., the late-season surge that begins after the All-Star break (~6-8 weeks before playoffs/trade deadline), the July 1 free agency window, the mid-season signing window. The trap: if you define t0 as "the contract year," but the signing date is July 1 following that season, then the incentive window ends at the trade deadline or whenever the extension is signed. Extensions signed mid-season (which the paper codes as a binary "extension" variable) truncate the incentive window. That's a temporal misclassification trap that plays out over weeks. Good.

Also: hits decline before contract year — but hits are also a health-risk behavior. A player avoiding injury would reduce hits. That's a rational counter-trap, not shirking. Actually hits are also a proxy for engagement; declining hits could be "playing safe." The paper interprets it that way. But it also could be a change in role (fewer minutes → fewer chances to hit). So TOI mediation is unmodeled. Need to note: hits, blocks, giveaways, takeaways are all count stats, not rate stats, so they're mechanically proportional to TOI and GP. The models mix counts and rates. That's a units error: mixing per-60 rates with season counts in the same regression. Big. Because production_value_in_min is a rate (per 60), but hits, blocks, takeaways, giveaways, SOG, penalty_minutes are totals. So they scale with GP. And indeed games_played is in the model. Collinearity between counts and GP. VIF didn't catch it because counts/GP is not perfectly linear.

That's a real methodological finding: numerator/denominator mismatch across features. If you regress a rate on counts, the coefficient absorbs the GP effect. Should use per-60 for everything or include log(TOI).

Excellent. Let me now also do the dimensional analysis properly:

PV [min·pt⁻¹] = TOI [min] / (G + A) [pt]
Under the alternative: PV' [pt·(60 min)⁻¹] = 60·(G+A)/TOI

Hits [count], blocks [count], giveaways [count], takeaways [count], SOG [count], penalty_minutes [min], games_played [count], points_per_game [pt·game⁻¹], corsi [%], fenwick [%], shooting_pct [%], xG/60 [goal·(60 min)⁻¹], adjusted_xG [count], high_danger_shots/60 [count·(60 min)⁻¹], plus_minus [count], age [yr], contract_cycle [index], extension [binary], AAV [USD·yr⁻¹].

So the model mixes 6+ dimensional classes. That's a formal complaint under "ZERO TOY EQUATIONS" — I should state units explicitly.

Now write. I'll be dense.

Word budget: THINK_TRACE ~700, SOURCE_OPERATORS ~900, GENEALOGY ~500, TOM ~450, VETO ~450, RLVR ~450. Total ~3,450. Good.

Let me write it out.

One more: I should double check "5.6 fewer production units". Mean residual −5.63. If residual = actual − predicted, actual is 5.63 lower. Under min/pt, that's better. So the paper must be using pts/min OR residual = predicted − actual. I'll present the residual equation both ways and note that only residual = ŷ − y reconciles with "underperformed" under the stated min/pt convention — and the sign chart says "a majority of points fall below the zero line, indicating that it slightly overpredicted" — points below zero = negative residual = actual−predicted < 0 = overprediction. So residual = actual − predicted. Then actual < predicted, i.e., actual min/pt LOWER = BETTER. Contradiction with "underperformed." So the paper's stated metric direction (min/pt, lower=better) is incompatible with its own interpretation. QED. Definitively a defect. 

Unless... the metric is points per minute and the sentence "a lower production value indicates a player mandates less time to contribute" is just an error. Under pts/min: lower PV = fewer points per minute = worse. Then actual−predicted < 0 = underperformance. Consistent! And Figure 9: higher AAV → lower actual production → "produced less" = consistent. And blocks positively correlated with PV: more blocks → higher pts/60? Odd but possible via TOI effects. And xG/60 negatively correlated with pts/60 would be odd but possible (xG/60 high but conversion low).

So the consistent reading is PV = points per unit ice time, i.e., higher = better, and the abstract/definition sentence is the outlier. That's the cleanest resolution: one sentence is wrong, everything else is coherent. I'll state this: the governing convention must be PV ∝ (G+A)/TOI, and the "lower is better" sentence is a transcription/definition defect. Then note the consequence: the "production value" naming and the ESPN "average ice time per point" gloss are inverted, which propagates to any reader who codes from the text.

Good, I'll present it that way — with the reciprocal identity showing that the correlation structure is sign-flipped relative to the text's stated interpretation.

Now write.

I'll be careful to keep it readable and well-organized, with LaTeX.

Let me draft.

---

Also the "ZERO BETTING LINES" — I won't mention any wagering. Fine.

For [PAGE N] markers, I'll assign:
- Abstract: PAGE 1
- Introduction: PAGE 1–4
- Lit review: PAGE 4–10
- Methodology: PAGE 10–16
- Results: PAGE 16–30
- Discussion: PAGE 30–34
- Limitations: PAGE 34–36
- Conclusion: PAGE 36
- Appendix: PAGE 36–37
- References: PAGE 37–38

I'll annotate that these are reconstructed bands.

Write now.
</NATIVE_REASONING>

# CONTRACT-EFFECT AUDIT — Palisin (Wharton Sports Analytics Journal, Spring 2026)

> **Page-marker provenance note (invariant-2 compliance).** The supplied `.md` is a `pdftotext + scripted reflow` conversion of a 38-page PDF; *page-break tokens, equations, tables and figures were destroyed in conversion* (source header: "equations, tables and figures are NOT preserved - consult the PDF for those"). Every `[PAGE N]` below is therefore a **reconstructed band** from the 38-page original, stated as a range, and is always paired with a **verbatim string** so the claim is verifiable by string search regardless of page drift. No page number is asserted as exact where the conversion removed it.

---

<THINK_TRACE>
The audit chain begins with a definitional collapse that must be resolved before any inference is admissible. The paper states, verbatim: *"Because this metric reflects how efficiently players generate points relative to their total ice time, a lower production value indicates a player mandates less time to contribute to the team"* [PAGE 12–13]. That gloss asserts `PV ∝ TOI/(G+A)` with units **min·pt⁻¹** and *lower = better*. Three downstream passages contradict it:

1. Abstract: *"players produced approximately 5.6 fewer production units, representing a statistically significant decline relative to projected trends"* [PAGE 1] — "decline" requires *higher = better*.
2. Results: *"The Ridge models' residual plot shows that a majority of points fall below the zero line, indicating that it slightly overpredicted player production… This further supports the models' finding that players generally underperformed"* [PAGE 27–28] — with residual `r = y − ŷ`, mass below zero means `y < ŷ`; under **min·pt⁻¹** that is *better*, not worse.
3. Figure 9: *"as AAV increases, actual production for most players tends to slightly decrease… players with higher salaries produced less in their contract year than lesser-paid players"* [PAGE 29] — again *higher = better*.

Only one parameterization reconciles (1)–(3): `PV = 60·(G+A)/TOI`, units **pt·(60 min)⁻¹**, higher = better. The `min·pt⁻¹` sentence is a definitional defect, not an isolated typo, because it propagates into the correlation narrative: *"The preliminary correlation analysis revealed that production value in minutes is most positively associated with blocks (r = 0.40)… the strongest negatively associated relationships are with variables such as expected_goals_per_60min (r = −0.63)"* [PAGE 17]. Under the reciprocal form `PV = c/xG`, `∂PV/∂xG = −c/xG² < 0` **identically**. The `r = −0.63` is not an empirical discovery; it is the derivative of a division. The same holds for `shooting_pct (r = −0.59)` and `adjusted_expected_goals (r = −0.55)`, which are the paper's three "strongest" univariate predictors (Table 1: R² = 0.397, 0.345, 0.306). **The entire univariate R² ranking is ordered by mechanical coupling to the outcome's own construction**, not by explanatory content.

Second hop: the ANOVA tables are misread. The statistic `F = 22.68` is reported three times — as "Adjusted expected goals" in the xG/60 table [PAGE 22], as "Adjusted expected goals" in the takeaways table [PAGE 26], and as "Adjusted_expected_goals" in the games-played table [PAGE 27]. `F = 11.77` appears for *hits* in both the production table [PAGE 19] and the games-played table [PAGE 27]. `F = 17.74` appears for *games played* in both the high-danger table [PAGE 24] and the takeaways table [PAGE 26]. A single scalar cannot be the outcome-side F for five different dependent variables. The only coherent reading is that these are **predictor-side** F-statistics: each row is the trajectory of one *independent* variable across the five contract-cycle levels, and the identical value is reused because the same feature was entered in multiple models. The prose nonetheless narrates them as outcome trajectories: *"Games played (F = 17.74) revealed a strong positive shift after the contract year, which may suggest that players play more conservatively before signing"* [PAGE 24]. That sentence attributes a predictor's time-course to the dependent variable. **The reported ANOVA evidence does not establish what the Discussion claims it establishes.**

Third hop: dimensional incoherence. Regressing a *rate* (`PV`, per-60) on *season totals* (`hits`, `blocks`, `takeaways`, `giveaways`, `SOG`, `penalty_minutes`) while simultaneously including `games_played` forces the count coefficients to absorb the exposure term. A count `N = rate × GP`; including both `N` and `GP` and a rate outcome creates a partial-collinearity ridge that VIF-at-9 will not necessarily flag because the relation is multiplicative, not linear. Table 3's "hits" coefficient is therefore not interpretable as an effort effect.

Fourth hop: the residual effect size. `MSE = 263.800` and `R² = 0.430` on the test split imply outcome variance `σ²_y = MSE/(1−R²) = 263.8/0.570 = 462.8`, `σ_y = 21.51`. The headline `|r̄| = 5.63` is `0.262 σ_y` — a **quarter-standard-deviation** effect, and `0.349` in residual-SD units (`5.63/16.12`). With `p = 16` predictors and `n_test = 56`, the adjusted test R² collapses: `1 − (1−0.430)(55/39) = 0.196`. The 5-fold CV `R² = 0.41497 ± 0.08670` gives `SE = 0.0388`, so the 95% band is `[0.339, 0.491]`. "Ridge with SelectKBest beat XGBoost" is a comparison of a *test* statistic against a *training-CV* statistic (`0.430` vs `0.567`) — non-comparable estimands, and the paper half-concedes it: *"although XGBoost showed the strongest performance across training subsets, the Ridge model proved more effective and reliable when applied to the actual dataset"* [PAGE 29].

Fifth hop: informative censoring. Twenty-four named players were dropped for missing any of five seasons [PAGE 11–12]. Those are disproportionately players who *left the league* — the exact population whose post-contract productivity collapsed. Conditioning on five-season survival selects on the outcome and mechanically deflates any measured shirking effect. Combined with the misclassified treatment clock (see `<RECURSIVE_THEORY_OF_MIND>`), the estimand is biased toward zero, meaning the true contract-cycle effect is plausibly *larger* than 0.26 σ — but the paper's own point estimate cannot bear the weight the Abstract places on it.
</THINK_TRACE>

---

<SOURCE_OPERATORS_AND_EQUATIONS>

## 1. Primary outcome operator and its singularity

**Declared form (text-literal, ESPN gloss):**
$$PV^{(\min)}_{i,s} \;=\; \frac{\mathrm{TOI}_{i,s}\,[\mathrm{min}]}{\big(G_{i,s}+A_{i,s}\big)\,[\mathrm{pt}]}\qquad \big[\mathrm{min}\cdot\mathrm{pt}^{-1}\big]$$
Verbatim: *"𝑃𝑟𝑜𝑑𝑢𝑐𝑡𝑖𝑜𝑛 𝑉𝑎𝑙𝑢𝑒 = 𝑇𝑜𝑡𝑎𝑙 𝐼𝑐𝑒 𝑇𝑖𝑚𝑒 / 𝐺𝑜𝑎𝑙 𝑃𝑜𝑖𝑛𝑡𝑠 + 𝐴𝑠𝑠𝑖𝑠𝑡 𝑃𝑜𝑖𝑛𝑡𝑠"* and *"ESPN defines this as 'the average ice time per point recorded'"* [PAGE 12–13].

**Operative form (reconciling Abstract, residual and Figure 9):**
$$PV_{i,s} \;=\; 60\cdot\frac{G_{i,s}+A_{i,s}}{\mathrm{TOI}_{i,s}}\qquad \big[\mathrm{pt}\cdot(60\,\mathrm{min})^{-1}\big]$$

**Breakdown regime (exact singularity).** `PV^(min)` is *undefined* on the set
$$\mathcal{S}=\{(i,s): G_{i,s}+A_{i,s}=0\}$$
For a fourth-line skater with 480 min TOI and 0 points, `PV^(min) → +∞`. Any software implementation resolves this by `NaN`-dropping (silently removing low-productivity seasons — outcome-dependent deletion) or by `inf` (which destroys OLS leverage). The paper reports no exclusion rule and no zero-point count. **This is an unresolved singular regime in the dependent variable.** Under the operative form `PV`, the same player scores exactly `0.00`, which is finite and admissible. The choice of parameterization therefore determines whether a class of observations is censored.

**Reciprocal identity (mechanical correlation theorem).** With `PV = c/x` and `x ≡ xG/60`, `r_{PV,x} ≈ −1` by construction. The reported `r = −0.63` [PAGE 17] is an attenuation of a unity-slope mechanical relation by measurement noise in both legs, not a finding.

## 2. MRP foundation (Rosen & Sanderson 2001)

Verbatim: *"Rosen and Sanderson (2001) introduced the marginal revenue product (MRP) model… the demand for labor is derived from the demand for the ultimate goods/services"* [PAGE 5].
$$\mathrm{MRP}_{i} \;=\; \underbrace{\frac{\partial R}{\partial W}}_{\text{rev./win}}\cdot\underbrace{\frac{\partial W}{\partial \mathrm{PV}_i}}_{\text{wins/pt}}\cdot\underbrace{\frac{\partial \mathrm{PV}_i}{\partial e_i}}_{\text{pt/effort}}\cdot e_i \qquad \left[\frac{\mathrm{USD}}{\mathrm{season}}\right]$$
**Assumption required and unstated:** `∂W/∂PV_i` is separable across players. Alchian–Demsetz, quoted in the paper, directly denies it: *"when two men jointly lift heavy cargo into trucks it is impossible to determine each person's marginal productivity… Team production is solely measurable by observing the team's total output"* [PAGE 2]. **The paper's own cited authority vetoes its own estimand.** The MRP chain is admissible only as an upper-bound heuristic.

## 3. Shirking operator and the effort first-order condition

Define effort `e_t ∈ [0,1]`, cost `c(e_t)` with `c' > 0, c'' > 0`, discount `β ∈ (0,1)`, wage schedule `w_t`:
$$\max_{\{e_t\}} \; \sum_{t=0}^{T}\beta^{t}\Big[w_t(\hat{s}_t)-c(e_t)\Big],\qquad \hat{s}_t = e_t+\varepsilon_t,\;\; \varepsilon_t\sim\mathcal{N}(0,\sigma_\varepsilon^2)$$
**FOC under a fixed (signed) contract**, `∂w/∂e = 0`:
$$-\,c'(e_t^{*})=0 \;\Longrightarrow\; e_t^{*}=0 \quad\text{(corner solution, effort floor)}$$
**FOC under renegotiation**, `w' > 0`:
$$w_t'(\hat{s}_t)\cdot\frac{\partial \hat{s}_t}{\partial e_t}=c'(e_t^{*})$$
The prediction is a **discrete switch at the signing event**, not a gradual decline. The paper's data are five annual means and cannot distinguish a step function from a slope. Nothing in the Results section tests for a kink at `t₀`; the ANOVA tests only that the five means are unequal, verbatim: *"Overall, these results show that player performance in the form of production value is not consistent across time"* [PAGE 19]. **Stationarity rejection ≠ shirking.**

**Linear-contract solution (Sen & Rice lineage):** with CARA utility, risk aversion `ρ`, and signal noise `σ²`, the optimal piece rate is
$$\beta^{*}=\frac{1}{1+\rho\,\sigma^{2}\,c''(e)}\in(0,1)$$
Because `σ²` is huge in hockey (one shot ≈ one goal ≈ large variance), `β* → 0`, which is *precisely* the economic reason multi-year guaranteed deals dominate. The paper treats guaranteed term as a moral-hazard artifact; the model says it is the efficient response to an unmeasurable signal.

## 4. Estimation operators

**Stepwise-AIC selection** (backward, `k` = parameter count, `L̂` = maximized likelihood):
$$\mathrm{AIC}=2k-2\ln\hat{L},\qquad \text{retain } \mathcal{M}^{*}=\arg\min_{\mathcal{M}}\mathrm{AIC}(\mathcal{M})$$
Verbatim: *"While R-squared constantly increases with more variables, AIC penalizes the model for taking on too many variables"* [PAGE 14]. *Breakdown:* AIC selection invalidates post-selection p-values (the reported Table 3 p-values are not nominal).

**Collinearity gate:**
$$\mathrm{VIF}_j=\frac{1}{1-R^{2}_{j\mid -j}},\qquad \text{reject if } \mathrm{VIF}_j>9 \iff R^{2}_{j\mid -j}>0.8889$$
Verbatim: *"It was deemed that any VIF coefficient greater than nine was removed from the model"* [PAGE 15]. Retained maxima: `games_played = 8.233`, `high_danger_shots_per_60min = 6.919` [PAGE 26]. Rule applied correctly at the individual level, but see §1 third hop — the gate is blind to multiplicative exposure collinearity.

**Repeated-measures ANOVA:**
$$F=\frac{\mathrm{MS}_{\text{contract stage}}}{\mathrm{MS}_{\text{error}}}=\frac{\sum_i n_i(\bar{y}_{i\cdot}-\bar{y}_{\cdot\cdot})^{2}/(k-1)}{\sum_i\sum_j (y_{ij}-\bar{y}_{i\cdot})^{2}/(N-k)}$$
with `k = 5` stages (`t₋₂…t₊₂`), `df₁ = 4`. **Assumption violated:** sphericity across five annual occasions. No Greenhouse–Geisser or Huynh–Feldt correction is reported. With `N = 1,390` and `n ≈ 5` per player, the F-tests will be anti-conservative if sphericity fails, which it will under injury autocorrelation.

**Machine-learning metrics as reported:** `MSE = 263.800`, `RMSE = 16.241`, `MAE = 11.84`, `R² = 0.430`, `CV R² = 0.41497`, `CV SD = 0.08670` [PAGE 29].
$$\mathrm{RMSE}=\sqrt{\tfrac{1}{n}\textstyle\sum(y_i-\hat{y}_i)^2},\quad \mathrm{MAE}=\tfrac{1}{n}\sum|y_i-\hat{y}_i|,\quad R^{2}=1-\frac{\mathrm{SS}_{\mathrm{res}}}{\mathrm{SS}_{\mathrm{tot}}}$$
Note `RMSE² = 16.241² = 263.77 ✓` internally consistent. But `σ̂_y = √(263.800/0.570) = 21.51`, so `|r̄|/σ_y = 0.262`.

**Residual decomposition and the sign question:**
$$r_i = y_i-\hat{y}_i,\qquad \bar{r}=-5.63,\;\; \mathrm{median}(r)=-5.47,\;\; s_r=16.12$$
Under the **operative** convention (`PV` = pt/60, higher better), `r̄ < 0` ⇒ `y < ŷ` ⇒ underperformance — consistent with the Discussion. Under the **text-literal** convention (`min/pt`, lower better), `r̄ < 0` ⇒ `y < ŷ` ⇒ *improvement*. **The single most important interpretive sentence in the paper is convention-dependent and the convention is stated twice, in two contradictory ways.**

## 5. Material table/citation defects (verifiable by string search)

| Defect | Verbatim | Page band |
|---|---|---|
| Reference [3] overloaded across Stiroh, Fort, Bruggink, Jean, Maxcey, Ichniowski, Ahlstrom | reference list [3] resolves to *"The relationship between player salary and performance in Major League Baseball… Bryant University Honors Projects in Economics (Paper 48)"* — an **MLB** thesis, not an NHL source | [PAGE 37] |
| Stiroh mis-cited throughout | text cites Stiroh as `[3]`; reference list assigns Stiroh 2007 to `[4]` | [PAGE 6] vs [PAGE 37] |
| Alchian–Demsetz attribution mismatch | text: *"Alchian and Demsetz define the mark of a capitalistic society…"* `[12]`; reference `[12]` = **Akerlof 1970, "The market for lemons"** | [PAGE 2] vs [PAGE 38] |
| Jean year drift | text: *"Jean (2010)"*; reference: *"Jean, N. (2016)"* | [PAGE 6] vs [PAGE 37] |
| Ahlstrom year drift | text: *"Ahlstrom, Si, and Kennelly (1999) used seasonal data from 1976-1992"*; reference: *"(2016)"* | [PAGE 7] vs [PAGE 37] |
| Bruggink & Williams absent | *"Bruggink and Williams (2011)"* cited twice, **not in the reference list** | [PAGE 1], [PAGE 9] |
| Table-number collision | *"When compared to the initial model presented in Table 19, the refined model in Table 20"* — Table 20 is an ANOVA table; *"All features were found to be statistically significant and, therefore, none were removed"* immediately precedes a figure captioned *"Takeaways ANOVA Results"* inside the Games Played section | [PAGE 26–27] |
| Inverse-response wording | *"each unit increase in takeaways is associated with a 0.20 increase in adjusted expected goals"* — takeaways is the DV, not the IV | [PAGE 25] |

</SOURCE_OPERATORS_AND_EQUATIONS>

---

<RETROCAUSAL_GENEALOGY>

The lineage runs through five distinct regimes and the paper's citations collapse them into one.

**Regime I — neoclassical team production (1970–1972).** Akerlof's lemons market (quality uncertainty under asymmetric information) and Alchian–Demsetz's team-production problem supply the two half-theorems the paper needs: wages cannot track individual marginal product when output is joint, and buyers cannot verify quality pre-purchase. The contract-year effect is the *intersection*: the team is the buyer, the player is the lemon. Critically, Alchian–Demsetz is a **negative** result — it says the estimand is unidentified — and the paper cites it approvingly while proceeding as though identification were achieved.

**Regime II — MRP formalization (Rosen & Sanderson 2001).** Verbatim: *"Today's sports culture allows for a plethora of data on athletic production, so it is one of few cases where the marginal product of a player can be investigated directly"* [PAGE 5]. This is the load-bearing move: sport is treated as the rare domain where `∂Q/∂L` is observable. The paper inherits the claim without inheriting the caveat that Rosen–Sanderson themselves attach — *"one can analyze athletic statistics for long periods of time, but there are many factors… that cannot be summarized in a quantitative form"* [PAGE 5].

**Regime III — empirical contract-year detection (2007–2016).** Stiroh (2007, NBA) → Jean (2010/2016, NBA, PER rather than box score) → Sen & Rice (2011, principal–agent three-period game) → Ichniowski & Preston (2012, NBER w17928, availability heuristic vs. slow thinking) → Ahlstrom/Si/Kennelly (MLB, `−0.14` BA and `+50%` DL time) → White & Sheldon (2014, self-determination theory, ANOVA). The paper's only genuinely novel empirical claim, *"NHL viewership is steadily increasing, while NBA followership is decreasing"* [PAGE 10], is sourced to a **high-school newspaper** (`Oratory Prep Omega`) — the weakest evidentiary link in the chain, used to motivate the entire league choice.

**Regime IV — context-adjusted valuation (2017–2018).** Gustafson & Hadley (predictive xG models) and Fort (2018, salary dynamics) supply Corsi/Fenwick/xG. Verbatim: *"Scoring a goal against recent double-Stanley Cup champions, the Florida Panthers, is far more difficult than against the under-.500 San Jose Sharks. Yet, if a player scored one goal against each team, the ledger would record two goals; This system is static and does not account for the skill level of the opponent"* [PAGE 9]. This is the paper's sharpest passage and it **self-vetoes** — because the Rink/Score adjustment needed to fix it is exactly the *opponent-strength and venue* correction that the paper then omits from its own models (see `<CROSS_LAYER_VETO_ADJUDICATION>`).

**Regime V — ML substitution (2023–2026).** Ridge/Lasso/RF/XGBoost with `SelectKBest` and `GridSearchCV`, sourced to a **Medium blog post** [18]. The methodological citation base is thinner than the economic one.

**Multi-week traps in the genealogy.** Three operate on timescales of weeks-to-months and none are modeled:

1. **The July-1 clock trap.** Free-agent signings cluster on July 1; extensions are signed mid-season. The paper's own binary `extension` variable [PAGE 36] records this but is then dropped as insignificant in *both* the production and xG/60 refits [PAGE 18, PAGE 21]. If a player signed an extension in, say, January, then `t₀` contains ~40 games of incentive and ~42 games of post-incentive play — a 50% dilution of the treatment. This is *classical* measurement error in the treatment, producing **attenuation toward zero**: the true effect exceeds the observed `0.26 σ`. But if extensions are signed *because* the player is producing (reverse causality at the January margin), the bias flips sign. The paper cannot distinguish these and does not try.

2. **The post-All-Star surge trap (≈8 weeks).** If strategic effort concentrates in the ~25 games after the break, an annual mean attenuates by ~`25/82 = 0.30`. Any monthly-resolution analysis would show a step; the annual-resolution analysis shows a ripple. The paper's `t₋₂, t₋₁, t₀, t₊₁, t₊₂` grid is the *coarsest possible* sampling of a weekly-resolution phenomenon — a Nyquist undersampling.

3. **The 2013 lockout / 2020–21 COVID compression trap.** The 2012–13 season was 48 games; 2019–20 was curtailed; 2020–21 was 56 games, division-only. For signings in 2014, 2015, 2021, 2022, the `t₋₂` or `t₊₁` windows intersect compressed seasons. The paper concedes generally — *"The scope of this study also includes the seasons that were affected by the pandemic COVID-19"* [PAGE 35] — but does not exclude them, and `games_played` is one of the five dependent variables with a headline `F = 17.74`. **A dependent variable known to be mechanically depressed by schedule policy is being used to infer voluntary injury-avoidance.**

---

<RECURSIVE_THEORY_OF_MIND>

Model the interaction as a level-`k` cognitive hierarchy over the *contract clock* `τ = (t_signing − t)`, measured in years remaining.

**Level 0 (habit).** Effort `e⁰_t = ē`, constant, fixed by conditioning and role. No strategic response to `τ`.

**Level 1 (surge).** The player believes the principal prices on the most recent signal: `w_{t₀+1} = f(PV_{t₀})`. Best response: `e_{t₀}^1 = \arg\max f(PV(e)) − c(e)`, interior, strictly above `ē`. This is the paper's model, verbatim: *"a player seeks to enhance his perceived value in the year preceding free agency eligibility, he is incentivized to increase his effort"* [PAGE 1–2].

**Level 2 (counter-trap).** The *general manager* knows Level 1 exists and de-weights `t₀`. The paper's own Ridge/SelectKBest model **is** the Level-2 operator, made explicit by the feature weights: `expected_goals_per_60min_t−1 = −3.24`, `expected_goals_per_60min_t−2 = −2.93`, `shooting_pct_t−1 = −2.17`, `shooting_pct_t−2 = −1.74` [PAGE 29]. Transcribed: *"players who generated high scoring opportunities in previous seasons did not always convert those opportunities efficiently during their contract year… players whose prior shooting success rates may have been unsustainably high and regressed toward average performance levels for both years prior to t₀"* [PAGE 29]. The GM should therefore price on `t₋₁, t₋₂` with a **negative** loading on prior shooting percentage — regression to the mean, not shirking. This is the counter-trap, and the paper discovers it without naming it: **the "shirking" residual is largely mean reversion in shooting talent**, which is why the largest negative predictors are *prior* conversion metrics.

**Level 3 (Goodhart on ice).** Once Level 2 is public, the Level-3 player moves the manipulation window *earlier*: surge at `t₋₂` and `t₋₁`, coast at `t₀`, because the GM is now fitting a `t₋₂, t₋₁ → t₀` model. The paper's design is therefore **not a measurement of a fixed behavioral constant but a snapshot of an arms race**, and publishing the model accelerates the shift. Verbatim managerial prescription: *"When players exceed their projected value, executives can capitalize on this momentum by implementing targeted incentives to sustain high performance"* [PAGE 34]. Adopting this destroys the model's own identifying variation within one contract cycle. This is the classic Lucas critique: the estimated coefficients are not invariant to the policy the paper recommends.

**Counter-trap vs. clock — which dominates?** Decompose the observed `−5.63` residual:
$$\underbrace{-5.63}_{\text{observed}}=\underbrace{\Delta_{\text{mean-reversion}}}_{<0,\;\text{mechanical}}+\underbrace{\Delta_{\text{shirk}}}_{<0,\;\text{behavioral}}+\underbrace{\Delta_{\text{scorer/venue}}}_{\text{sign unknown}}+\underbrace{\Delta_{\text{clock misclassification}}}_{\to 0}$$
The paper assigns the whole residual to `Δ_shirk`. The Level-2 reading assigns most of it to `Δ_mean-reversion`, and the coefficient pattern in Figure 1 (prior xG/60 and prior shooting % as the dominant negatives) **strongly supports the Level-2 assignment**. Prediction: partialling out a player's career shooting percentage (a stable talent proxy) should shrink `|r̄|` by a large fraction; the paper has the data (`shooting_pct` at five lags) and does not run it.

**Clock ambiguity.** The paper defines the cycle as `(−2, −1, 0, +1, +2)` around the "contract year" [PAGE 36], but never states whether `t₀` is the season *preceding* signing or the season *of* signing. Since both exist in the data (extensions mid-season vs. July 1 UFA), two players' `t₀` can be offset by up to 12 months. This is a treatment-definition error of the same order as the effect being measured.

---

<CROSS_LAYER_VETO_ADJUDICATION>

A lower-layer veto means: *the observed contract-cycle signature has a sufficient non-behavioral cause, so the behavioral inference is not identified.* Four vetoes are strong enough to be dispositive.

**VETO 1 — Rink-scorer attribution (measurement layer).** `hits`, `blocks`, `giveaways`, `takeaways` are **human-coded by home-arena off-ice officials**, not sensor-derived. Verbatim definitions: *"Hits — Number of body checks the player delivered that separated an opponent from the puck"*; *"Giveaways — Number of times the player lost possession of the puck to the opposing team"* [PAGE 36]. Home-arena bias in real-time scoring stats is a long-documented, persistent, venue-fixed effect. Now the confound: **free agency changes the player's home rink.** A UFA moving from a low-hit-credit barn to a high-hit-credit barn shows a step change in `hits` at exactly `t₀ → t₊₁` — the same location as the predicted shirking step. The paper's `hits F = 11.77`, described as *"dropped leading up to the contract year but rose again afterward"* [PAGE 19], is **exactly the signature of a venue reallocation**, and `extension` (which proxies "did not move") was dropped as insignificant. **Veto proof:** home/away split. If the hits effect persists in road games only (where the scorer is neutral w.r.t. the player's team), it is behavioral; if it lives in home games and appears discontinuously at team change, it is a scorer artifact. The paper has the raw data and does not split.

**VETO 2 — TOI instrumentation (physical-measurement layer).** `TOI` is the denominator of the primary outcome. It is compiled from shift charts with stated ~±1 shift (~45 s) resolution, and it is systematically *coached*, not player-determined: deployment, power-play assignment, and 3-on-3 usage all shift with roster construction. Verbatim, the metric is *"normalized per 60 minutes of ice time to adjust for playing time differences"* [PAGE 36]. A `±1` shift error on a 15-min TOI is `±5%`; propagated through `PV = 60·(G+A)/TOI`, that is a `±5%` multiplicative error on the outcome with no independent variance estimate. **Veto proof:** re-derive `PV` from event-level play-by-play with exact on-ice timestamps and compare to the shift-chart version; if `≥30%` of the residual variance in `PV` is explained by the two TOI reconstructions, the effect is instrument noise.

**VETO 3 — Biomechanical / injury-risk load (physical layer).** The paper's own causal story for pre-contract hits decline is *"players adopt a more conservative style of play to reduce the risk of injury"* [PAGE 34]. That is a **biomechanical** mechanism, not a motivational one: body-check delivery imposes acute head/ACL/soft-tissue load, and players approaching a guaranteed `≥3-year` contract face asymmetric downside. This predicts a hit decline that is *rational risk management*, not shirking, and it predicts a **simultaneous decline in games missed**, not an increase. Verbatim: *"Games played (F = 17.74) followed a similar trajectory, decreasing from t₋₂ to t₀ before increasing significantly from t₀ to t₊₂"* [PAGE 26]. But `games_played` decline pre-signing is equally consistent with **healthy scratches for load management** — a coaching decision. The paper concedes only that *"a player might have missed a game for another reason (maybe paternity leave or sickness), injury was assumed to be the most common"* [PAGE 27]. Assumption, not measurement. **Veto proof:** replace `games_played` with `games missed to injury` from the NHL Injured Reserve transaction log; if IR-derived absence does not move at `t₀`, the games-played effect is scratch-driven and the injury story collapses.

**VETO 4 — Schedule, travel, altitude, and weather (environmental layer).** Three concrete mechanisms:
- *Altitude*: Denver (≈1,609 m) and Utah (≈1,300 m) reduce air density ~17–20%, altering puck flight and shot trajectories; the effect on `xG` and `high_danger_shots/60` is venue-fixed. A player traded to Colorado at `t₀` inherits a permanent venue shift in exactly the advanced-metric family the paper relies on (`adjusted_xG F = 22.68`).
- *Schedule compression and back-to-backs*: the NHL schedule is not balanced across teams; compressed stretches reduce TOI per game and raise soft-tissue injury rates. A player whose new team has more back-to-backs shows lower `PV` for purely scheduling reasons.
- *Winter travel disruption*: snowstorms cause delayed arrivals, missed practices, and elevated injury rates in the following 48–72 h. This is a real, documented, **venue-and-calendar-fixed** source of `games_played` and `PV` variance that is fully independent of contract status.

**Veto adjudication.** These are not "noise to be averaged out." Each is **fixed to the player's team**, and free agency reassigns team at `t₀ → t₊₁` — i.e., **the confounds are maximally correlated with the treatment by design**. The paper acknowledges the class of problem — *"a free agent joining a new team may experience increases or decreases in productivity depending on the influence of surrounding players"* [PAGE 5] — and then does not include team fixed effects. **Adjudication: VETO 1 and VETO 4 jointly defeat the `hits` and `high_danger_shots` conclusions as stated; VETO 2 caps the achievable precision on `PV` at roughly the size of the reported effect; VETO 3 blocks the injury-avoidance interpretation of `games_played`.** Only the `xg/60` and `adjusted_xG` findings survive cross-layer scrutiny, and those are the two most mechanically coupled to the outcome — i.e., the surviving findings are the tautological ones.

---

<RLVR_COUNTERFACTUAL_VETOES>

Each veto is a **deterministic, checkable** operation on public data with a stated falsifiable prediction. Reward is verifiable if the prediction is a numeric threshold computable from the named source.

### RLVR-VETO-1 — Sign-convention adjudication (definitional, cheapest, highest value)

**Operation.** Take the 1,390-row dataset. Compute `PV^(min) = TOI/(G+A)` and `PV^(pts) = 60(G+A)/TOI`. Report `corr(PV, xG/60)` under each. Then check whether the reported residual sign (`r̄ = −5.63`, *"a majority of points fall below the zero line, indicating that it slightly overpredicted"* [PAGE 27]) is consistent with the stated definition *"a lower production value indicates a player mandates less time to contribute"* [PAGE 13].

**Prediction (falsifiable).** Under `PV^(min)`, `corr(PV, xG/60) < 0` **by analytic necessity** (`∂PV/∂xG = −c/xG²`), reproducing `r = −0.63` [PAGE 17] without any data. Under `PV^(pts)`, the same correlation is **positive**. Since the paper reports `r = −0.63` **and** interprets `r̄ < 0` as underperformance, the two readings are mutually exclusive. **Binary outcome:** at most one of `{the r = −0.63 sign, the "lower is better" sentence, the "5.6 fewer units = decline" sentence}` can be correct. Reward `+1` if exactly one is internally consistent; reward `0` if the auditor claims all three.

### RLVR-VETO-2 — Denominator-singularity census

**Operation.** Count rows with `G + A = 0` in the 1,390 observations. Inspect the pipeline for `NaN`/`inf` handling on `PV^(min)`.

**Prediction (falsifiable).** Among 278 skaters × 5 seasons with `contract length ≥ 3 years` and no AAV floor (explicitly stated: *"No rows were eliminated based on average annual value (AAV)"* [PAGE 11]), some player-seasons must have `G + A = 0` — fourth-liners and