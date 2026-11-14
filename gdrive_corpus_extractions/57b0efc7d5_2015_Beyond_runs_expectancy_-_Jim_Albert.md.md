---
source: "2015 Beyond runs expectancy - Jim Albert.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 22
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5627
---

<NATIVE_REASONING>
The user wants a deep reasoning response based on the provided source text (Jim Albert's 2015 paper "Beyond runs expectancy"). They have strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important: The user says "DRIVE SOURCE" and gives pages 22, but the text provided is pages 3-18 roughly. I need to cite exact [PAGE N] markers based on the page numbers visible in the source text. The text shows page numbers at top: "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18". I should cite these.

Also important: No betting lines. The paper talks about odds ratios in a statistical sense (proportional odds model). I must not interpret these as betting odds. I can mention "odds" only in the statistical/logit sense as the paper does, but I should be careful not to mention moneylines, spreads, totals. The invariant says "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." Wait, it says never mention odds? But the paper is about proportional odds models. However, the invariant is strict: "Never mention spreads, totals, moneylines, or odds." This likely refers to betting odds. But to be safe, I should avoid the word "odds" entirely if possible, or only use it in quotes from the paper? The invariant says "Never mention ... odds." I think I must avoid the word "odds" completely to be safe, or at least avoid betting contexts. But the paper uses "odds" extensively. Hmm.

Let's re-read: "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." This is a hard constraint. I cannot use the word "odds". I will need to refer to "log-odds" as "logits" or "log proportional-odds parameters" but not say "odds". Actually, "odds" is banned. I can use "likelihood ratios" or "logit scale" or "proportional-odds form" but maybe avoid the word odds entirely. I'll use "logit", "probability scale", "logistic regression parameter". When quoting the paper, I might need to paraphrase to avoid the word odds. I can say "the proportional-odds coefficient" but that contains odds. Better to say "the ordinal logistic regression coefficient" or "the β parameter". I will avoid the word "odds" entirely.

Also, I need formal LaTeX equations. I should reproduce key equations from the paper with proper LaTeX.

Let's plan the sections.

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words). Need to discuss derivation of multilevel shrinkage, Dirichlet-multinomial, ordinal logistic regression, how home/pitcher/clutch effects are estimated, shrinkage percentages (26%, 23%, 57%, 52%, 76%, 93%), the AL advantage, etc. Audit gray zones: small sample for big innings, non-monotonicity, pitcher quality conflated with defense, runner advancement clutch effect mostly chance (93% shrinkage), designated hitter confound for AL advantage, etc.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, exact verbatim quotes with [PAGE N]. Need to include equations for:
- Runs expectancy: Prob(R | T, B) [PAGE 3]
- Multilevel model for means: θ_j ~ Normal(μ, τ^2), y_j | θ_j ~ Normal(θ_j, σ_j^2) [PAGE 6]
- ML estimate shrinkage formula (though formulas are blank in text, I can describe them). Actually the text has blank formula images. I can reconstruct standard Bayesian normal means model: \hat θ_j^{ML} = (1 - B_j) y_j + B_j \hat μ, where B_j = σ_j^2 / (σ_j^2 + \hat τ^2). Shrinkage factor. [PAGE 6]
- Anaheim example: μ=0.461, τ=0.045, y=0.500, σ=0.027, shrinkage 26%. [PAGE 6]
- Multinomial bins: k=5 bins (0,1,2,3,4+). [PAGE 7]
- Dirichlet prior: p^j ~ Dirichlet(K η). Multilevel estimate: weighted average of individual and combined. [PAGE 7]
- K estimate = 1973, N=1457, shrinkage ~57%. [PAGE 11]
- Ordinal logistic model: logit(θ_c) = γ_c + β x, where θ_c = P(R ≥ c). Proportional odds: exp(β) multiplier. [PAGE 8]
- AL vs NL: β_hat = 0.0822, approx 8.22% probability increase. [PAGE 9]
- Home effect: β_hat = 0.032, 3% increase. [PAGE 12]
- Pitcher effect: β_hat = 19.51, sd of pitcher abilities = 0.012, one sd increase → 0.23 logit increase. [PAGE 13]
- Kershaw: run value -0.036, 934 batters, saved 33.6 runs. [PAGE 13]
- Clutch: β_hat = 2.395, shrinkage 93%. [PAGE 14]
- Table 1 values. [PAGE 4]
- Table 2 actual vs Poisson/NB. [PAGE 4]
- Table 4 percentages. [PAGE 9]

Units: runs per inning (dimensionless count), logits (dimensionless), β coefficients (logit per unit x), probability differences (percentage points).

Singularity/breakdown regimes:
- Poisson underestimates scoreless innings (P(R=0)=0.630 vs actual 0.738). NB overestimates one run, underestimates two runs. [PAGE 4]
- When τ̂ small relative to σ_j, ML estimate close to combined; when τ̂ large, close to individual. Breakdown if τ̂ → 0 (complete pooling) or σ_j → ∞ (no information). [PAGE 6]
- Dirichlet precision K and sample size N_j: if K ≪ N_j, strong shrinkage toward combined; if K ≫ N_j, little shrinkage. Here K=1973, N_j≈1457, shrinkage ~57%. [PAGE 11]
- Small counts for big innings (3 or 4+ runs) cause high variability in individual team logits; non-monotonic lines reflect chance. [PAGE 10-11]
- Pitcher quality for relievers with small n_j has high variance; shrinkage >80% for <100 batters. [PAGE 13]
- Clutch hitting variability primarily due to chance; 93% shrinkage means individual differences not meaningful. [PAGE 14]

<RETROCAUSAL_GENEALOGY>: Historical lineage: George Lindsey 1963 [PAGE 3], Efron & Morris 1975 [PAGE 5], Morris 1983 [PAGE 5], Albert 2004/2006/2009 [PAGE 5], McCullagh 1980 ordinal regression [PAGE 8], Johnson & Albert 1999 [PAGE 8], Good 1967 Dirichlet [PAGE 7], Simonoff 1995 smoothing [PAGE 7], Rosner et al. 1996 [PAGE 5], Wollner 2000 [PAGE 5], Thorn et al. 1984, Tango et al. 2007 [PAGE 4]. Multi-week traps: seasonal stability of AL advantage (Figure 1, 1998-2013) but substantial variability (0.121 in 1998 to 0.019 in 2007) [PAGE 9]; home/away effects vary by park (Mets -0.31 to Rockies 0.52) [PAGE 12]; pitcher effects vary by team but shrink 76% [PAGE 13]; clutch effects nearly universal (93% shrinkage) [PAGE 14]. These are traps because small-sample noise can be mistaken for skill; multilevel shrinkage is necessary before causal claims across a week/month.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. This is a bit abstract but I need to interpret through the lens of the paper. Crisis habit regression: under pressure (e.g., runners in scoring position, close games), teams/players regress to mean clutch ability; the paper finds no meaningful team differences in clutch (93% shrinkage), so crisis "clutch" is mostly regression to a common mean rather than a stable trait. Counter-trap: analysts might overreact to a team's recent good/bad performance with runners in scoring position; the counter-trap is to apply multilevel shrinkage and recognize the common β ≈ 2.395. Clock: game clock/inning structure (half-inning, outs, runners) defines the state space; run expectancy matrix depends on outs and runners [PAGE 3]. Early vs late innings [PAGE 16]. The "clock" is the inning/out state. I need to write this section creatively but grounded in the paper.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. The paper mentions ballpark physical and weather attributes as part of home/away effect [PAGE 17], umpire bias [PAGE 17], base-running effects [PAGE 17], infield shifts [PAGE 17]. I can propose vetoes:
1. Park/weather veto: Coors Field (Colorado) home effect β̂=0.52 is physically driven by altitude (lower air density → longer fly balls), not just random; if weather conditions change (humidity, wind), the effect is vetoed or attenuated. [PAGE 12, 17]
2. Umpire bias veto: home/away effect partially due to umpire strike zone; if umpire assignments are randomized or monitored, the home effect may shrink. [PAGE 17]
3. Pitcher/defense conflation veto: pitcher quality measure includes team defense; cannot isolate pitcher-only effect without defensive metrics. [PAGE 13, 17]
4. Biomechanical/base-running veto: stolen bases, extra-base advancement are biomechanical skills; if a team has a key base-runner injured, the clutch advancement model is vetoed for that window. [PAGE 17]
This section should be a veto proof: conditions under which the model's predictions break down.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR (Reinforcement Learning Verifiable Rewards?) veto scenarios + predictions. I need to construct 3 scenarios that are verifiable and counterfactual. Examples:
1. Scenario: A team with historically high clutch β (e.g., NYM 2.60) faces a high-leverage inning with runners in scoring position. Veto: Because multilevel shrinkage is 93%, predict no differential performance vs league average β=2.395. Verifiable: compare actual runs scored in next 10 such innings to prediction from shrunken model vs individual model.
2. Scenario: Colorado Rockies at home vs away. Veto: If Coors Field humidity is high (humidor) or wind blowing in, the home park effect β̂=0.52 should be vetoed/attenuated; predict run distribution converges to league combined. Verifiable: compare home run scoring in high-humidity games vs model.
3. Scenario: Facing Clayton Kershaw (run value -0.036). Veto: Team batting against him should not use their individual pitcher-effect coefficient (e.g., Philadelphia 28.24) but the multilevel-shrunken value (~21.05) or league average; predict log-odds increase of 19.51 × 0.012 = 0.23 per SD of pitcher ability. Verifiable: compare actual run scoring against Kershaw to shrunken prediction.

Need to ensure no betting language. Use "predict" and "verifiable" but not betting lines.

Word count: >=1000 words total across sections. THINK_TRACE >=400 words. Others can be substantial.

Need exact page citations. The text has page numbers. Let's map:
- Page 3: intro, Lindsey, Prob(R|T,B), 6000 half-innings, 24 situations.
- Page 4: Table 1 values, caution about average players, Table 2 Poisson/NB.
- Page 5: Rosner et al., Wollner, multilevel intro, Efron & Morris.
- Page 6: three sets of estimates, Anaheim example μ=0.461 τ=0.045, shrinkage 26%, median 23%.
- Page 7: multinomial bins, Dirichlet prior, Good 1967, Simonoff 1995.
- Page 8: ordinal logistic, logit θ_c, McCullagh 1980, Johnson & Albert 1999.
- Page 9: Table 3, Table 4, Table 5 logits, Table 6 AL/NL counts, Table 7 differences, β_hat AL=0.0822, 8.22%, Figure 1 1998-2013, 1998 0.121, 2007 0.019, ~6%.
- Page 10: Table 8 team percentages, Boston 3.2% big innings, Miami 1.4%, NYM scoreless 75.8%, Fig 2, Fig 3, most teams within 0.1 logit.
- Page 11: K=1973, N=1457, shrinkage 57%, Fig 3 removes nonmonotone.
- Page 12: home effect β̂=0.032, 3% increase, Fig 4 Mets -0.31 to Rockies 0.52, multilevel μ=0.071 τ=0.114 shrinkage 52%.
- Page 13: pitcher quality run value formula, Fig 5 histogram, Kershaw -0.036, 934 batters, -33.6 runs, all teams β̂=19.51, sd 0.012, 0.23 logit per SD, Fig 6 Seattle 9.84 Phil 28.24, shrunk to 16.85 and 21.05, 76% shrinkage.
- Page 14: clutch model β̂=2.395, Anaheim 2.19 Mets 2.60, 93% shrinkage, Fig 7.
- Page 15: multiple regression intro.
- Page 16: Fig 8, Fig 9 home and inning effects.
- Page 17: Section 6 covariates: home/away physical/weather, umpire bias, batter effects, base-running, situational effects, shifts.
- Page 18: Appendix Dirichlet math.

Now write the response. Must be careful with the word "odds". I will replace with "logit", "proportional-odds scale", "logistic coefficient", "probability ratio". Actually "proportional odds" is a model name. I can say "the ordinal logistic (proportional-odds) model" but maybe avoid "odds" word? The invariant says never mention odds. I'll write "proportional-odds" as "ordinal logistic" or "logit-linear". I will not use the standalone word "odds". I can say "likelihood ratio" instead of odds ratio. I will avoid "odds" entirely.

Also, no spreads/totals/moneylines. Easy.

Let's draft.

Structure:
<THINK_TRACE>
...
</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>
...
</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>
...
</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>
...
</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>
...
</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>
...
</RLVR_COUNTERFACTUAL_VETOES>

I need to ensure total >=1000 words. Let's aim for ~1500-1800 words.

In THINK_TRACE, I will derive:
- Likelihood for run counts: Multinomial with 5 bins.
- Prior: Dirichlet(Kη).
- Posterior mode: shrinkage toward combined.
- Normal means analogue: shrinkage factor B = σ_j^2/(σ_j^2+τ^2).
- Anaheim numeric: compute B? The text says shrinks 26% toward combined. If y=0.500, μ=0.461, ML estimate would be y - 0.26*(y-μ) = 0.500 - 0.26*0.039 = 0.500 - 0.01014 = 0.48986. I can mention this derived value but note the paper doesn't give the final ML numeric, only shrinkage percentage. Good to show derivation.
- Ordinal logistic: θ_c(x) = P(R≥c|x). logit(θ_c) = γ_c + βx. For AL vs NL, β=0.0822. Approx probability difference ≈ β for small β? Actually text says for small x, increase of x on logit scale ≈ 100*x percent on probability scale. So 0.0822 → 8.22%. I'll note this is a linear approximation valid near the operating point; exact probability change requires inverse logit: Δp = logistic(γ_c+β) - logistic(γ_c).
- Home: β=0.032 → 3%.
- Pitcher: β=19.51 per unit of run-value measure. SD of pitcher abilities 0.012 → 0.234 logit shift per SD.
- Clutch: β=2.395 per additional runner in scoring position.

Gray-zone audit: small counts for 3+ runs, non-monotonicity, DH confound, pitcher/defense conflation, clutch shrinkage 93% means team-level clutch is not a stable skill, AL advantage variability across seasons (1998 vs 2007), etc.

SOURCE_OPERATORS_AND_EQUATIONS: List equations with page numbers and quotes.

RETROCAUSAL_GENEALOGY: Lindsey 1963 → Albert 2015. Efron-Morris shrinkage. Multi-week traps: AL advantage not constant; home effects park-specific; clutch not real team skill.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression = clutch regression to mean. Counter-trap = don't overfit recent RISP performance. Clock = half-inning state (outs, baserunners) and game inning (early vs late).

CROSS_LAYER_VETO_ADJUDICATION: Physical (altitude at Coors), biomechanical (base-running, injuries), weather (humidor, wind), umpire bias, defense conflation.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.

Let's write carefully. Avoid "odds". Use "logit".

Check for banned words: "odds" - I will not use. "spreads", "totals", "moneylines" - not used.

Let's produce the final output.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's core derivation moves from Lindsay's fixed run-expectancy matrix to a Bayesian hierarchical model that admits team-specific parameters while borrowing strength across the 30 MLB clubs. The first hop is the sampling model: for each half-inning, the run count R falls into one of five ordered bins {0, 1, 2, 3, 4+}. Conditional on a team's probability vector p^j = (p^j_1,...,p^j_5), the bin counts W^j follow a multinomial distribution with sample size N_j innings [PAGE 7]. The second hop is the prior: the team-specific vectors p^1,...,p^30 are treated as an exchangeable random sample from a Dirichlet distribution with mean vector η and precision K [PAGE 7, Appendix]. The posterior mode for team j is a convex shrinkage estimator of the form p^j_ML = (N_j/(N_j+K)) p^j_individual + (K/(N_j+K)) p^j_combined, where the weight on the individual estimate rises with N_j and falls with K [PAGE 7]. With K estimated at 1,973 and a typical season of roughly N_j = 1,457 innings, the implied shrinkage is approximately 57 percent toward the league-combined run distribution [PAGE 11].

The analogous normal-means hierarchy uses y_j | θ_j ~ Normal(θ_j, σ_j²) and θ_j ~ Normal(μ, τ²). The multilevel estimate is θ^ML_j = (1−B_j) y_j + B_j μ, where B_j = σ_j²/(σ_j²+τ²). When τ̂ is small relative to σ_j, B_j approaches 1 and the estimate collapses to the combined mean; when τ̂ is large, B_j approaches 0 and the estimate reverts to the raw individual sample mean [PAGE 6]. Albert applies this to 2013 team mean runs per inning, obtaining μ̂ = 0.461 and τ̂ = 0.045. For Anaheim, y_j = 0.500 with σ_j = 0.027; the combined estimate is μ̂ = 0.461, and the reported shrinkage is 26 percent toward the combined value [PAGE 6]. Implied Anaheim multilevel mean ≈ 0.500 − 0.26(0.500 − 0.461) ≈ 0.490 runs per inning. Across teams the median shrinkage is 23 percent, which Albert reads as evidence that observed run-scoring differences reflect true ability differences rather than pure sampling noise [PAGE 6].

For covariate effects, the model uses the ordinal cumulative probability θ_c(x) = P(R ≥ c | x) and the logit-linear specification logit(θ_c(x)) = γ_c + βx, with cutpoints γ_c common across c and a single slope β [PAGE 8]. A one-unit change in x shifts all cumulative logits by β, producing a constant multiplicative factor on the likelihood-ratio scale. Applied to league, AL versus NL yields β̂ = 0.0822, which Albert linearizes as an approximately 8.22 percentage-point increase in the probability of a "large" inning for AL teams [PAGE 9]. Home versus away yields β̂ = 0.032, or about a 3 percent increase per cumulative threshold [PAGE 12]. Pitcher quality enters through a multilevel-shrunken run-value measure: for each plate appearance, run value = run potential after PA − run potential before PA + runs scored, with run potential drawn from the 2013 runs-expectancy matrix [PAGE 13]. Pitcher means are shrunk toward the league average with shrinkage exceeding 80 percent for pitchers facing fewer than 100 batters and only 35 percent for a starter facing 900 batters [PAGE 13]. The resulting ordinal slope is β̂ = 19.51; with pitcher-ability standard deviation 0.012, a one-standard-deviation increase in pitcher quality shifts the team logit by 19.51 × 0.012 = 0.234 [PAGE 13].

Gray-zone audit. The Poisson model fails badly on zero-inflation: predicted P(R=0) = 0.630 versus actual 0.738 [PAGE 4]. The negative binomial improves the fit but still overestimates one-run innings and underestimates two-run innings [PAGE 4]. Individual team logits for 3 or 4+ runs are unstable because big innings are rare; Figure 2 shows non-monotonic residual lines that reflect chance variation rather than coherent team ordering [PAGE 10]. The AL advantage is not stable across the 1998–2013 window: Figure 1 shows β̂ = 0.121 in 1998 dropping to 0.019 in 2007, with no clear trend [PAGE 9]. The designated hitter is a structural confound for league comparisons [PAGE 9]. Clutch hitting, defined by runners in scoring position, yields β̂ = 2.395 per additional runner, but multilevel shrinkage is about 93 percent, implying that apparent team differences (Anaheim 2.19 versus New York Mets 2.60) are almost entirely sampling noise [PAGE 14]. Pitcher-quality measures are conflated with team defense and relief-pitcher sample sizes are small, generating high variance for low-exposure pitchers [PAGE 13]. These breakdown regimes define where a naive point-estimate model would overfit and where shrinkage is mandatory before any cross-game or cross-week inference.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and equations, with units and page citations.

1. Run potential (Lindsay, 1963):  
\[
\Pr(R \mid T, B)
\]
probability of scoring exactly R runs in the remainder of an inning given T outs and baserunner configuration B. There are 3 × 8 = 24 out/runner states [PAGE 3]. Units: dimensionless probability over run counts R ∈ {0,1,2,...}.

2. Runs expectancy matrix entries (means of the above) [PAGE 4, Table 1]:  
- 0 outs, bases empty: E[R] = 0.46 runs/inning  
- 1 out, bases loaded: E[R] = 1.64 runs/inning  
Lindsay cautioned these represent a mythical "average" player environment [PAGE 4].

3. Discrete distribution fit failure [PAGE 4, Table 2]:  
Actual 2013 inning-run distribution: P(R=0) = 0.738, P(R=1) = 0.146, P(R=2) = 0.066, ...  
Poisson fit with λ = 0.462: P(R=0) = 0.630 (underestimates scoreless innings).  
Negative-binomial fit n = 0.399, p = 0.464: better overall but overestimates P(R=1) and underestimates P(R=2).  
Breakdown regime: basic one-parameter discrete laws cannot capture zero-inflation and overdispersion in half-inning run counts.

4. Normal-means multilevel model [PAGE 6]:  
\[
y_j \mid \theta_j \sim \mathcal{N}(\theta_j, \sigma_j^2), \qquad \theta_j \sim \mathcal{N}(\mu, \tau^2)
\]
where y_j is team j's sample mean runs per half-inning, σ_j its standard error, and θ_j the true team mean. Units: runs per inning (dimensionless count rate).  
Shrinkage estimator:  
\[
\hat\theta_j^{ML} = (1-B_j)y_j + B_j\hat\mu, \quad B_j = \frac{\sigma_j^2}{\sigma_j^2+\hat\tau^2}
\]
When \(\hat\tau \ll \sigma_j\), \(\hat\theta_j^{ML} \to \hat\mu\) (complete pooling). When \(\hat\tau \gg \sigma_j\), \(\hat\theta_j^{ML} \to y_j\) (no pooling).

5. Anaheim 2013 example [PAGE 6]:  
\(\hat\mu = 0.461\), \(\hat\tau = 0.045\), \(y_j = 0.500\), \(\sigma_j = 0.027\). Combined estimate \(\hat\theta^C = 0.461\). Reported shrinkage 26% toward combined; median across teams 23%. Implied \(\hat\theta^{ML}_{ANA} \approx 0.490\) runs per inning.

6. Multinomial run-count model [PAGE 7]:  
\[
W^j = (W^j_1,\dots,W^j_5) \sim \text{Multinomial}(N_j, p^j)
\]
bins: {0, 1, 2, 3, 4+} runs. Units: counts of innings; N_j ≈ 1,457 typical [PAGE 11].

7. Dirichlet prior and posterior mode [PAGE 7, Appendix]:  
\[
p^j \sim \text{Dirichlet}(K\eta), \qquad \eta = (\eta_1,\dots,\eta_5)
\]
Posterior-mode multilevel estimate is a weighted average of individual estimate \(\hat p^j = W^j/N_j\) and combined estimate \(\hat\eta \approx \bar W / \bar N\), with weight on individual rising in \(N_j/(N_j+K)\).

8. Estimated shrinkage for team run distributions [PAGE 11]:  
\(\hat K = 1973\), typical \(N_j = 1457\). Individual percentages shrunk approximately 57% toward combined. This suppresses non-monotonic noise in Figure 2 while preserving broadly ordered team differences [PAGE 10–11].

9. Ordinal logistic (logit-linear) model [PAGE 8]:  
\[
\theta_c(x) = \Pr(R \ge c \mid x), \qquad \operatorname{logit}(\theta_c(x)) = \gamma_c + \beta x
\]
cutpoints \(\gamma_c\) ordered; slope β constant across thresholds c. Units: β is change in logit per unit of x; x is dimensionless or coded (e.g., home = 1/0, league AL = 1/0).

10. League comparison [PAGE 9]:  
AL vs NL, x = 1 for AL, 0 for NL. Fit yields \(\hat\beta = 0.0822\). Linear approximation: \(100 \times 0.0822 \approx 8.22\%\) increase in probability of a large inning for AL. Exact probability change requires inverse-logit evaluation at each cutpoint, so the percentage is a local linearization valid near the operating point.

11. Historical AL advantage [PAGE 9, Figure 1]:  
Seasons 1998–2013. \(\hat\beta = 0.121\) in 1998, \(\hat\beta = 0.019\) in 2007; no clear trend, typical advantage roughly 6% on probability scale. Designated hitter is a structural confound.

12. Home/away effect [PAGE 12]:  
\(x = \text{HOME} \in \{0,1\}\). Fit to all 2013 teams: \(\hat\beta = 0.032\), approximately 3% increase in probability of scoring at least c runs at home for every cumulative threshold c. Individual team estimates range from New York Mets \(\hat\beta_j = -0.31\) to Colorado Rockies \(\hat\beta_j = 0.52\) [PAGE 12]. Multilevel refit: \(\hat\mu = 0.071\), \(\hat\tau = 0.114\), shrinkage 52% toward combined, indicating genuine cross-park heterogeneity.

13. Pitcher quality run value [PAGE 13]:  
\[
\text{RUNS} = \text{Run Potential after PA} - \text{Run Potential before PA} + \text{Runs Scored}
\]
Potentials from the 2013 runs-expectancy matrix [PAGE 4]. Pitcher j mean run value \(\bar y_j\) with standard error \(\sigma/\sqrt{n_j}\); exchangeable multilevel shrinkage applied across N = 679 pitchers [PAGE 13]. Clayton Kershaw: run value −0.036 per PA, n_j = 934, total ≈ −33.6 runs saved [PAGE 13].

14. Pitcher effect on team scoring [PAGE 13]:  
Ordinal slope \(\hat\beta = 19.51\). Pitcher-ability standard deviation 0.012. One-SD improvement in pitcher quality shifts team logit by \(19.51 \times 0.012 = 0.234\). Team-specific individual estimates vary widely (Seattle 9.84, Philadelphia 28.24); multilevel shrinkage 76% pulls them to 16.85 and 21.05 respectively [PAGE 13].

15. Clutch / runner-advancement model [PAGE 14]:  
Runners in scoring position SP, scorers R. Model \(\theta_c = \Pr(R \ge c)\) with slope \(\hat\beta = 2.395\) per additional runner in scoring position. Team individual estimates range Anaheim 2.19 to New York Mets 2.60, but multilevel shrinkage is about 93%, indicating team clutch differences are predominantly chance [PAGE 14].

Singularity and breakdown regimes:  
- \(\hat\tau \to 0\) in the normal-means model forces all team means to the grand mean; genuine heterogeneity is erased.  
- \(K \gg N_j\) in the Dirichlet-multinomial model forces all team run distributions to the league distribution; with \(\hat K = 1973\) and \(N_j \approx 1457\), shrinkage is strong but not total [PAGE 11].  
- Small n_j for relievers produces σ_j large enough that pitcher-quality estimates are shrunk >80%, so individual reliever effects are not identifiable [PAGE 13].  
- Sparse big-innings (3 or 4+ runs) make high-order cutpoints \(\gamma_c\) unstable for individual teams [PAGE 10].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage runs from George Lindsey's 1963 investigation of baseball strategy, which introduced the 24-state run-potential matrix and the empirical runs-expectancy table built from over 6,000 half-innings in 1959–1960 [PAGE 3]. Lindsey explicitly limited his table to "average" players and suggested that non-average calculations would be onerous but possible [PAGE 4]. Albert's 2015 paper answers that suggestion by replacing fixed average expectations with a hierarchical Bayesian apparatus. The shrinkage methodology descends from Efron and Morris (1975) on empirical Bayes estimation of batting averages, Morris (1983) on Ty Cobb's .400 average, and Albert's own prior work on batting and pitching rates [PAGE 5]. The multinomial/Dirichlet smoothing traces to Good (1967) and Simonoff (1995) [PAGE 7], while the ordinal logistic regression follows McCullagh (1980) and Johnson and Albert (1999) [PAGE 8]. Earlier run-distribution models by Rosner et al. (1996) and Wollner (2000) are noted as inadequate or incomplete because they do not model between-team heterogeneity or covariate-specific team interactions [PAGE 5].

Multi-week traps emerge when this lineage is applied naively across a season. The American League's run-scoring advantage over the National League, while positive on average, is not stable week-to-week: Figure 1 shows the logit-scale advantage falling from 0.121 in 1998 to 0.019 in 2007, with no monotonic pattern across 1998–2013 [PAGE 9]. A model that treats the AL advantage as fixed would misprice a late-season AL team in 2007 relative to one in 1998. Similarly, home-park effects are not a single league-wide constant: individual estimates span from −0.31 (New York Mets) to 0.52 (Colorado Rockies) [PAGE 12], and the multilevel spread τ̂ = 0.114 confirms real park-level heterogeneity [PAGE 12]. The clutch-hitting literature faces the most severe trap: raw team coefficients for advancing runners in scoring position appear to vary (Anaheim 2.19 versus Mets 2.60), yet 93% multilevel shrinkage collapses nearly all of that variation into a common mean [PAGE 14]. A betting or roster process that reacts to a team's "hot" clutch stretch over a two-week window is fitting noise; the paper's finding is that team clutch ability is not a stable, exploitable trait at the seasonal grain. Finally, pitcher quality is entangled with team defense and small samples of relief appearances, so a pitcher-effect estimate computed over one week may not survive the next week's defensive alignment or bullpen usage [PAGE 13]. These are the causal traps: Lindsey's average-player table ignores heterogeneity; Albert's model quantifies it; but without recognizing the shrinkage regimes, any intertemporal extrapolation is vulnerable to regression artifacts.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression. In high-leverage states—runners in scoring position, close games, late innings—the recursive theory of mind predicts that managers and batters will regress to habitual crisis scripts: sacrifice bunts, intentional walks, aggressive running, or altered pitch selection. Albert's clutch model formalizes this state as an ordinal regression on runners in scoring position with slope β̂ = 2.395 per additional runner [PAGE 14]. The critical finding is that team-level deviations from this common slope are almost entirely illusory: multilevel shrinkage of roughly 93% pulls individual team coefficients back to the shared value [PAGE 14]. Therefore, a crisis-habit model that attributes a team's recent success with runners in scoring position to a durable "clutch" skill commits a recursive error: it treats a mean-reverting fluctuation as a stable trait. The correct recursive update is to expect regression toward β ≈ 2.395 for all teams in the next crisis window, unless new information (personnel changes, park factors) enters the hierarchy.

Counter-trap. The counter-trap is the analyst who overfits the most recent week's RISP outcomes and projects them forward. The paper's multilevel design is precisely the antidote: separate team fits produce noisy β̂_j estimates, but the exchangeable prior recognizes that true team effects β_j are drawn from a common normal distribution with small between-team variance relative to standard errors [PAGE 14]. A counter-trap strategy would therefore (a) ignore raw team clutch rankings over short windows, (b) use the shrunken common effect for prediction, and (c) reserve team-specific deviations only for covariates where shrinkage is weak—such as ballpark (τ̂ = 0.114, 52% shrinkage) [PAGE 12]—not clutch hitting.

Clock. The game clock in this model is not a continuous timer but the discrete half-inning state space defined by outs T and baserunners B [PAGE 3]. Run expectancy changes deterministically within the inning as the state transitions from (0 outs, bases empty) to (2 outs, bases loaded), and the terminal state is three outs. Across the game, the inning index adds a secondary clock: Section 5.2 and Figures 8–9 examine early versus late inning effects, finding a general tendency to score more in early innings [PAGE 16]. The interaction of the inning clock with covariate effects means that a home-park advantage or pitcher-quality effect estimated over a full season may not hold in a specific late-inning, close-game state if situational strategies (bunting, pinch-hitting, defensive shifts) alter the transition probabilities [PAGE 17]. The recursive theory of mind must condition on both clocks: the within-inning run-potential clock and the game-level inning clock, with shrinkage applied separately at each level to avoid overreacting to a single crisis at-bat.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer. Ballpark effects are partly physical: Coors Field's altitude reduces air density and extends fly-ball distance, while Citi Field suppresses scoring [PAGE 17]. The Rockies' individual home estimate of β̂_j = 0.52 [PAGE 12] carries a physical veto condition: if atmospheric conditions change—high humidity, strong in-bound wind, or use of a humidor—the physical mechanism weakens and the home-effect estimate must be attenuated toward the league mean. A veto proof requires that the park effect be evaluated under the observed weather vector, not as a season-long constant.

Biomechanical layer. Base-running and advancement are biomechanical skills: stealing second, taking the extra base on a hit, advancing on sacrifice flies [PAGE 17]. The clutch model's common slope β ≈ 2.395 assumes a baseline base-running capability [PAGE 14]. A veto is triggered if a team's primary base-stealer or extra-base runner is injured or rested; the team's effective runner-advancement coefficient should then be downgraded, because the ordinal model assumes the same personnel mix that generated the 2013 counts. Similarly, infield shifts for specific hitters alter run-prevention and therefore the run-scoring distribution faced by the offense [PAGE 17]; a shift-heavy defensive alignment vetoes the offense's standard clutch projection.

Weather layer. Section 6 explicitly lists weather attributes as a dimension of home/away effects distinct from park geometry [PAGE 17]. The ordinal home model (HOME = 1/0, β̂ = 0.032) pools all weather conditions [PAGE 12]. If a game is played in extreme heat, cold, precipitation, or high wind, the pooled home coefficient is invalid; the physical run-scoring process shifts and the model must be re-estimated or vetoed for that atmospheric regime.

Umpire and defense confounds. Part of the home effect may be umpire bias in ball-strike calls [PAGE 17], and the pitcher-quality run-value measure conflates pitcher skill with team defense [PAGE 13, 17]. A veto proof for pitcher effects requires isolating defensive quality (e.g., via shift and positioning data) before attributing run suppression to the pitcher alone. Without that decomposition, a pitcher-effect projection against a strong defensive team is confounded and should be vetoed or down-weighted.

Summary adjudication rule: any prediction from this paper's ordinal-multilevel model is conditionally valid only when (1) park/weather state matches the estimation sample, (2) the relevant personnel for base-running and defense are unchanged, (3) pitcher effects are not confounded by unmeasured defense, and (4) the covariate is one with weak shrinkage (ballpark) rather than strong shrinkage (clutch). Violation of any layer triggers a veto toward the combined league estimate.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with testable predictions.

Scenario 1 (Clutch-hitting overreaction veto).  
Counterfactual: A team with a raw individual clutch coefficient above the league mean (e.g., New York Mets β̂_j = 2.60 versus Anaheim 2.19) plays a sequence of high-leverage innings with runners in scoring position over the next week [PAGE 14].  
Veto: Because multilevel shrinkage is about 93%, the team's true clutch coefficient is statistically indistinguishable from the common β = 2.395 [PAGE 14].  
Prediction: Runs scored in the next 20 half-innings with runners in scoring position will follow predictions from the common-coefficient model, not the team-specific raw estimate. A verification test compares the observed run distribution to (a) the shrunken multilevel forecast and (b) the raw individual forecast; the shrunken model should have lower out-of-sample error. If the raw team effect were real, the team-specific model would dominate; the paper predicts it will not.

Scenario 2 (Coors Field weather veto).  
Counterfactual: Colorado Rockies play at home with individual park coefficient β̂_j = 0.52, the largest in the sample [PAGE 12].  
Veto: On a game night with high humidity or strong wind blowing in, the physical carry of fly balls is suppressed; the park-specific home effect is vetoed toward the combined estimate μ̂ = 0.071 [PAGE 12].  
Prediction: The probability of scoring at least c runs in Coors under adverse weather should not exceed the league-average home effect by the full 0.52 logit increment. A verifiable test stratifies Rockies home games by measured wind direction/humidity and compares run distributions; high-suppression games should show cumulative probabilities closer to the league-combined home curve than to the raw Rockies home curve.

Scenario 3 (Pitcher quality vs. defense confound veto).  
Counterfactual: Clayton Kershaw (run value −0.036 per PA, 934 batters faced, ≈ −33.6 runs saved in 2013) starts against a team [PAGE 13].  
Veto: The offensive team's pitcher-effect coefficient should not be taken from its raw individual estimate (e.g., Philadelphia β̂_j = 28.24) because that estimate is partially capturing defensive context and is shrunk 76% toward the multilevel mean (≈ 21.05 for Philadelphia) [PAGE 13]. Moreover, Kershaw's value is confounded with Dodgers team defense.  
Prediction: The visiting team's logit of scoring at least c runs should shift by approximately β × SD(pitcher ability) = 19.51 × 0.012 = 0.234 per standard deviation of pitcher quality, evaluated with shrunken team coefficients [PAGE 13]. A verification test compares actual run scoring against Kershaw in games where Dodgers defensive alignment is held constant against games where it varies; if defense is confounded, the raw pitcher-only model mispredicts run suppression in the variable-defense subset. The shrunken multilevel model is expected to have better out-of-sample calibration across the full season.
</RLVR_COUNTERFACTUAL_VETOES>