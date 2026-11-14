---
source: "2026 - Economic resources, sporting efficiency and uncertainty a global test on the 2026 FIFA World Cup - Thioune et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/preprints/arXiv/2026"
pages: 9
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3570
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper (arXiv:2610.28344) and produce a response following strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user provided a paper about football (soccer) economics, not a sports betting scenario per se, but the headers suggest a forensic/frontier reasoning style. I need to make sure I don't mention betting lines. The paper is about economic resources, sporting efficiency, and uncertainty tested on the 2026 FIFA World Cup.

Let me structure this carefully:

THINK_TRACE: Deep multi-hop derivation & gray-zone audit (>=400 words). Need to trace how GDP/population -> performance -> residual -> stochastic process -> simulation. Gray zones: identification assumptions, OLS residual not SFA, circularity of residual vs dependent variable, tie artifact with 40 teams tied, England/Scotland proxy issue, cross-sectional vs panel, uncalibrated kappa/sigma. Multi-hop: from Equation (1) to OLS to residual circularity formula to rank correlation robustness.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. Must include:
- Equation (1): Yi,t = θi,t f(Xi,t) + εi,t; dz_i,t = [κ_i(z̄_i - z_i,t) + γ_i u_i,t] dt + σ_i dW_i,t; θ_i,t = e^{z_i,t}
- Production function f(X_i) = A · GDP_i^{α1} Pop_i^{α2}
- OLS: ln(Y_i) = ln A + α1 ln GDP_i + α2 ln Pop_i + z_i
- Circularity: Corr(z_i, ln Y_i) = sqrt(1 - R^2)
- Numbers: R2(A)=0.091, Corr=0.954; R2(B)=0.328, Corr=0.820, Spearman=0.801; Table 1 values; rank correlation 0.562; grid [0.560, 0.578]; kappa/sigma grid values.
- Units: log points, log USD, log persons; time horizon T=5 years; κ dimensionless (1/year?), σ (sqrt(1/year)?). Actually in SDE, κ has units 1/time, σ has units 1/sqrt(time). But I should state assumptions.
- Page citations: [PAGE 1], [PAGE 2], [PAGE 3], etc. Verbatim quotes where possible.
- Breakdown/singularity: N=48 cross-section cannot identify dynamic parameters; England/Scotland proxy; 40 tied teams in regression A; single tournament vs aggregated ranking; ¯z_i = z_i identification assumption; heteroskedasticity robust HC3.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps. Lineage: Thioune & Ndiaye related paper [1] arXiv:2610.06967 (AFCON 2025, 24 teams). SFA/DEA traditions (Aigner et al. 1977; Charnes et al. 1978). Hamilton-Jacobi-Bellman, stochastic control, verification theorem. Multi-week traps: the paper itself warns that single cross-section is a snapshot; multi-edition panel needed to calibrate κ, σ; single tournament dominated by idiosyncratic shock ε vs long-run rankings by systematic term; circularity trap where residual is mechanically correlated with outcome.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is more abstract. Crisis habit regression: teams/economies reverting to mean (Ornstein-Uhlenbeck in log-efficiency). Counter-trap: interpreting residual as efficiency when it's just restatement of performance measure. Clock: simulation horizon T=5 years, mean reversion speed κ, the "clock" of the stochastic process. Need to discuss how analysts might regress on crisis habits (underperformance of rich economies) vs counter-trap (GDP doesn't explain World Cup single tournament) vs clock (dynamic parameters unidentified, cannot forecast beyond snapshot).

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Hmm, the paper is macroeconomic. But I can interpret "veto proof" as factors that veto the GDP/potential model: omitted variables (institutional quality, diaspora, expatriate players, football tradition, demographic structure) act as vetoes; single-elimination tournament structure vetoes economic determinism; England/Scotland data limitation vetoes clean residual interpretation for those two; coarse scoring scale vetoes fine-grained inference in regression A; weather/biomechanical not in paper but I can say the model does not include physical/biomechanical/weather layers, so those are external vetoes not captured. However, the header says "Physical/biomechanical/weather veto proof" — I should address whether the model is proof against such vetoes. Since the paper explicitly omits these, the model is NOT veto-proof; physical/biomechanical/weather factors are in ε_i,t or omitted factors. I should state this clearly.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR likely means Reinforcement Learning Verifiable Rewards? Or some counterfactual framework. I need 3 scenarios:
1. If a future World Cup uses a non-knockout or group-stage-only scoring with fewer ties, then R2 of actual outcome regression should rise above 0.09 and residual-outcome correlation should fall below 0.954.
2. If a panel dataset of multiple World Cups (2022, 2026, 2030) is used to estimate κ and σ rather than fixing them, then the rank correlation band [0.560, 0.578] should either narrow or shift, and ¯z_i = z_i assumption should be testable/rejected.
3. If institutional quality or diaspora player share is added as controls, then the conditional performance residual variance explained by GDP/population should drop, and the over-performance ranking of Morocco/Senegal should attenuate (or change rank order).
Each with predictions.

Word count: >= 1,000 words total across sections. THINK_TRACE alone >=400 words.

No betting lines. No fake ratios. Formal LaTeX. Page citations [PAGE N]. Verbatim quotes.

Let's draft carefully.

Important: I must include verbatim quotes from the source with page markers. Let's find some good ones.

Page 1: "Yi,t = θi,tf(Xi,t) + εi,t, dzi,t = ..." (Equation 1). Abstract: "GDP and population explain only 9% of single-tournament performance variance, compared with 33% for FIFA points."
Page 2: "The quantity we estimate here by OLS, zi = ln(Yi) − d ln f(GDPi, Popi), is a symmetric residual..." Actually it says "zi = ln(Yi) − d ln f..." wait typo in source? It says "zi = ln(Yi) − d \ln f(GDPi, Popi)" but likely means minus ln f. I'll quote carefully.
Page 3: Data limitation England/Scotland. "both are assigned the United Kingdom's GDP and population as the best available proxy."
Page 4: Table 1 values. "40 of the 48 teams share the same pre-quarter-final score, making their residuals mechanically equal to zi = − d ln f(GDPi, Popi)."
Page 5: Circularity formula: "Corr(zi, ln Yi) = √(1 − R2) for any regression". "Corr(...) = √1 − 0.091 = 0.954". "Spearman rank correlation ... is 0.801 (p < 0.001)."
Page 6: Figure 2 description. Largest positive residuals: Argentina, Spain, Morocco, etc. USA z = -0.09.
Page 7: Simulation parameters κ=0.7, σ=0.30, etc. Rank correlation 0.562. Grid κ ∈{0.3,...}, σ∈{0.10,...}. Rank correlation stays in [0.560, 0.578].
Page 8: Discussion. "roughly two-thirds of the residual's cross-country variance mechanically reflects the underlying performance measure".
Page 9: Conclusion. "economic resources determine potential, while a sizeable GDP-independent component drives performance".

Now let's write. I need to be careful with LaTeX formatting inside XML tags. Use standard LaTeX.

Structure:

<THINK_TRACE>
(>=400 words). Deep derivation. Start from Eq (1). Explain OLS estimation. Trace circularity. Explain tie artifact. Explain identification issues. Gray zones. Multi-hop.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX, units, citations, breakdown.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Lineage and traps.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression vs counter-trap vs clock.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
3 scenarios + predictions.
</RLVR_COUNTERFACTUAL_VETOES>

Total words need to be >=1000. Let's aim for ~1300-1500.

Check for any mention of betting: none. No spreads, moneylines, odds. Good.

Check toy equations: I will not invent Force/Fatigue. I will use the paper's actual equations and the circularity identity. Units: log points, log USD, log persons. SDE units: κ [time^{-1}], σ [time^{-1/2}], W_i,t Wiener process. Breakdown regimes: N=48 cross-section cannot identify dynamic parameters; single tournament dominated by ε; ¯z_i = z_i assumption; England/Scotland proxy; 40 tied teams.

Let's write.

For verbatim quotes, I need to include exact text. Let's pick a few:

[PAGE 1] "Yi,t = θi,tf(Xi,t) + εi,t," and the SDE.
[PAGE 2] "The quantity we estimate here by OLS, zi = ln(Yi) − d ln f(GDPi, Popi), is a symmetric residual..."
[PAGE 3] "England and Scotland compete as separate national teams but are not sovereign states and have no independent GDP or population statistics; both are assigned the United Kingdom's GDP and population as the best available proxy."
[PAGE 4] "40 of the 48 teams share the same pre-quarter-final score, making their residuals mechanically equal to zi = − d ln f(GDPi, Popi)."
[PAGE 5] "By construction, Corr(zi, ln Yi) = √(1 − R2) for any regression..."
[PAGE 5] "Corr(zWC_i, ln YWC2026_i) = √1 − 0.091 = 0.954"
[PAGE 7] "κ ∈{0.3, 0.5, 0.7, 1.0, 1.5}, σ ∈{0.10, 0.20, 0.30, 0.40, 0.50} (Monte Carlo, N = 8,000 paths per cell). The rank correlation stays in a narrow band, [0.560, 0.578]..."

I'll write now.

Need to ensure THINK_TRACE >= 400 words. Let's count roughly as I write.

I will not use markdown code blocks for the XML, just raw XML tags. The content inside can have LaTeX.

Let's draft THINK_TRACE:

Start: The paper posits a state-space production system... Equation (1)... f(X_i) = A GDP^α1 Pop^α2... OLS estimation... residual z_i... Two regressions... Regression A (actual WC score) R2=0.091... Regression B (FIFA points) R2=0.328... Circularity identity... Tie artifact 40 teams... England/Scotland proxy... Simulation... Sensitivity grid... Gray zones: identification, circularity, cross-section vs panel, coarse scoring, uncalibrated dynamic parameters, symmetric residual vs one-sided inefficiency. Multi-hop: from SDE to OLS to rank correlation to policy interpretation.

That's plenty.

Now write the whole thing. Ensure exact XML section names.

One nuance: The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." The source text has page markers like [PAGE 1 of 9]. I should cite as [PAGE 1], [PAGE 2], etc.

Let's go.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's central object is the stochastic production system in Equation (1) on [PAGE 1]: national-team performance \(Y_{i,t}\) equals the product of a latent mean-reverting log-efficiency \(\theta_{i,t}=e^{z_{i,t}}\) and an economic-potential production function \(f(X_{i,t})\), plus an idiosyncratic shock \(\varepsilon_{i,t}\). The efficiency state \(z_{i,t}\) follows an Ornstein–Uhlenbeck-type diffusion \(dz_{i,t} = [\kappa_i(\bar z_i - z_{i,t}) + \gamma_i u_{i,t}]dt + \sigma_i dW_{i,t}\). The related AFCON paper derived this as the state equation of a discounted stochastic control problem with an associated Hamilton–Jacobi–Bellman equation and verification theorem [PAGE 2], but the present global test reuses only the cross-sectional state equation and estimation strategy.

The first multi-hop derivation moves from the structural model to the OLS estimating equation on [PAGE 4]: \(\ln(Y_i) = \ln A + \alpha_1 \ln GDP_i + \alpha_2 \ln Pop_i + z_i\), estimated on \(N=48\) teams with HC3 robust standard errors. Two outcomes are tried. Regression (A) uses the actual World Cup 2026 coarse score (Champion=6, Runner-up=5, 3rd=4, 4th=3.5, quarter-final=2.5, all others=1) and yields adjusted \(R^2=0.091\) with joint test \(F=2.44, p=0.099\). Regression (B) uses FIFA ranking points and yields adjusted \(R^2=0.328\) with \(F=13.32, p<0.001\). The paper explicitly designates (B) as primary because a single knockout tournament is a thin realization of \(\varepsilon_{i,t}\), whereas FIFA points aggregate over a longer horizon and better isolate the systematic term \(\theta_i f(X_i)\) [PAGE 5].

A second, critical hop is the circularity identity on [PAGE 5]: for any OLS regression, \(\operatorname{Corr}(z_i, \ln Y_i) = \sqrt{1-R^2}\) by construction. For regression (A), this gives \(\sqrt{1-0.091}=0.954\) (numerically 0.9537), meaning the residual is almost the raw log outcome re-centered. For regression (B), \(\sqrt{1-0.328}=0.820\) (numerically 0.8197), with Spearman rank correlation between the \(z_i\)-implied ranking and raw FIFA ranking of 0.801 (\(p<0.001\)). Thus the residual's cross-country variance is largely mechanically determined by the fit itself, not an independent efficiency signal.

Gray-zone audit: (i) The England/Scotland data limitation on [PAGE 3] assigns both teams UK GDP/population, mechanically producing a large negative residual for the lower-ranked team (Scotland) and vetoing any clean sovereign-level interpretation for that pair. (ii) Regression (A) has 40 of 48 teams tied at the same pre-quarter-final score, so their residuals collapse to \(z_i = -\ln f(GDP_i, Pop_i)\), driving the extreme negative U.S. residual [PAGE 4]. (iii) The simulation in Section 5 sets \(\bar z_i = z_i\), an identification assumption that mechanically preserves initial relative standing rather than identifying mean-reversion endogenously [PAGE 7]. (iv) Dynamic parameters \(\kappa, \sigma\) are not calibrated because a single cross-section cannot identify them; robustness is checked over a \(5\times5\) grid with Monte Carlo \(N=8{,}000\) paths per cell, and the rank correlation remains in \([0.560, 0.578]\) [PAGE 7]. (v) The residual is explicitly non-SFA: symmetric, mixing noise and efficiency, with no distributional separation [PAGE 2]. These are not minor caveats; they define the exact breakdown regimes where the model's efficiency language must be replaced by the more honest label "conditional performance residual."
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal model (from [PAGE 1], Equation (1)):
\[
Y_{i,t} = \theta_{i,t} f(X_{i,t}) + \varepsilon_{i,t}, \qquad
\theta_{i,t} = e^{z_{i,t}},
\]
\[
dz_{i,t} = \bigl[\kappa_i(\bar z_i - z_{i,t}) + \gamma_i u_{i,t}\bigr]dt + \sigma_i dW_{i,t},
\]
where \(W_{i,t}\) is a Wiener process. Dimensional assumptions: \(\kappa_i\) carries units of \(\text{time}^{-1}\) (mean-reversion speed), \(\sigma_i\) carries units of \(\text{time}^{-1/2}\) (volatility of log-efficiency), and \(z_{i,t}\) is dimensionless log-elasticity. Economic potential:
\[
f(X_i) = A \cdot GDP_i^{\alpha_1} Pop_i^{\alpha_2}.
\]
Cross-sectional OLS operator (from [PAGE 4]):
\[
\ln(Y_i) = \ln A + \alpha_1 \ln GDP_i + \alpha_2 \ln Pop_i + z_i,
\]
estimated by OLS on \(N=48\) with heteroskedasticity-robust (HC3) standard errors. Table 1 results [PAGE 4]:
\[
\begin{array}{c|ccc|c}
 & \hat\alpha_1 \text{ (GDP)} & \hat\alpha_2 \text{ (Pop)} & R^2_{\text{adj}} & H_0:\alpha_1=\alpha_2=0 \\
\hline
\text{(A) Actual WC2026 score} & 0.109\ (0.050)^{**} & -0.065\ (0.047) & 0.091\ (0.050) & F=2.44,\ p=0.099 \\
\text{(B) FIFA points (primary)} & 0.034\ (0.011)^{***} & 0.003\ (0.012) & 0.328\ (0.298) & F=13.32,\ p<0.001
\end{array}
\]
GDP per capita \(GDPpc_i = GDP_i/Pop_i\) is excluded due to collinearity [PAGE 2].

Circularity identity (from [PAGE 5]):
\[
\operatorname{Corr}(z_i, \ln Y_i) = \sqrt{1-R^2}.
\]
Numerical confirmations [PAGE 5]:
\[
\operatorname{Corr}(z^{\text{WC}}_i, \ln Y^{\text{WC2026}}_i) = \sqrt{1-0.091} = 0.954 \quad (\text{numerically } 0.9537),
\]
\[
\operatorname{Corr}(z_i, \ln \text{FIFA}_i) = \sqrt{1-0.328} = 0.820 \quad (\text{numerically } 0.8197),
\]
with Spearman rank correlation \(\rho = 0.801\) (\(p<0.001\)).

Simulation protocol (from [PAGE 6–7]): each team simulated forward from \(z_{i,0} = \bar z_i = z_i\) under shared illustrative parameters \(\kappa=0.7,\ \sigma=0.30,\ \gamma=0.6,\ c=1,\ u=0.2\), horizon \(T=5\) years, fitted potential \(f(X_i)\). Resulting GDP-rank vs. simulated-performance-rank correlation \(=0.562\). Sensitivity grid [PAGE 7]: \(\kappa \in \{0.3,0.5,0.7,1.0,1.5\}\), \(\sigma \in \{0.10,0.20,0.30,0.40,0.50\}\), Monte Carlo \(N=8{,}000\) paths per cell; rank correlation band \([0.560,0.578]\) across all 25 combinations.

Breakdown/singularity regimes: single cross-section \(N=48\) cannot identify \(\kappa_i,\sigma_i,\gamma_i\) individually; the \(\bar z_i = z_i\) assumption freezes cross-sectional rank order; Regression (A) is singular when 40 teams share identical scores, making residuals a deterministic function of \(-\ln f(GDP_i, Pop_i)\); the England/Scotland UK proxy introduces a mechanical negative-residual bias for Scotland [PAGE 3]. Residual units are log performance points relative to log economic potential; no betting-implied probability units are used or defined in the source.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage runs from the related AFCON paper [1] (arXiv:2610.06967, 24 teams, Africa Cup of Nations 2025) to the global 48-team World Cup test, extending without modifying the underlying model [PAGE 1–2]. That paper itself positions the efficiency measure relative to the stochastic frontier analysis (SFA) and data envelopment analysis (DEA) traditions, citing Aigner, Lovell, and Schmidt (1977) and Charnes, Cooper, and Rhodes (1978) [PAGE 2, References]. The theoretical derivation invokes discounted stochastic control, the Hamilton–Jacobi–Bellman equation, and a verification theorem under explicit growth conditions [PAGE 2].

Historical trap 1 — static vs dynamic: SFA and DEA are static, one-sided inefficiency decompositions from a snapshot; the present residual is symmetric and mixes ordinary noise with any genuine efficiency component, so no distributional assumption separates the two [PAGE 2]. Treating \(z_i\) as a validated SFA efficiency parameter is therefore a genealogical category error that the paper explicitly disavows.

Historical trap 2 — single tournament vs long-run aggregation: The model anticipates that noisier, higher-frequency \(Y\) identifies \(\theta\) less precisely than a smoothed measure [PAGE 5]. A single knockout World Cup is dominated by the idiosyncratic shock \(\varepsilon_{i,t}\), whereas FIFA points aggregated over several years and many matches capture the systematic component \(\theta_i f(X_i)\) [PAGE 9]. Interpreting any single tournament as a clean measure of genuine efficiency is a multi-week trap: the residual–outcome mechanical correlation of 0.954 for Regression (A) shows that short-run outcomes restate the dependent variable rather than revealing independent structure [PAGE 5].

Historical trap 3 — identification of dynamic parameters: The AFCON study abandoned calibration from a four-edition panel rather than report potentially spurious point estimates; the present paper inherits that limitation and checks robustness over a grid instead [PAGE 7]. A multi-edition panel is required to calibrate \(\kappa\) and \(\sigma\) and to move from snapshot residuals to structurally identified efficiency [PAGE 9]. Until then, claims of GDP-relative over-performance denote conditional deviation from a model-implied benchmark, not direct efficiency measurement [PAGE 5].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: Economically large football nations (United States, Germany, Japan, South Korea, Canada) under-perform their GDP-implied potential, with residuals \(z \approx -0.09\) for the USA and \(z \approx -0.07\) for South Korea and Canada [PAGE 6]. A recursive analyst might regress these outcomes on a "crisis habit" narrative—rich economies over-invest in infrastructure yet under-deliver on pitch—mistaking the conditional residual for a behavioral syndrome. Because the residual is symmetric and mechanically correlated with the underlying measure (\(\operatorname{Corr}=0.820\)), such a regression risks endogenizing the outcome: the residual partly *is* the log performance score re-centered.

Counter-trap: The counter-trap is to observe that GDP and population jointly explain only 33% of FIFA-points variance (\(p<0.001\)) and only 9% of single-tournament score variance, then conclude that economic resources are irrelevant to World Cup performance. This is invalid: the low \(R^2\) in Regression (A) reflects the small-sample, single-elimination nature of the tournament, not the absence of an economic channel [PAGE 9]. The FIFA-points regression, based on the same 48 teams and covariates, reproduces the GDP/conditional-performance split observed in Africa and is jointly significant [PAGE 9].

Clock: The simulation clock runs \(T=5\) years with shared \(\kappa=0.7\), implying a mean-reversion timescale of order \(\kappa^{-1}\approx 1.43\) years if \(\kappa\) is read in annual units. However, because \(\bar z_i = z_i\) is imposed by assumption, the clock does not discover new steady states; it mechanically preserves initial relative standing [PAGE 7]. The rank correlation between GDP and simulated performance (\(0.562\), band \([0.560,0.578]\)) is positive but firmly below 1, indicating that the clock's output is driven more by the initial cross-sectional residual than by endogenous mean-reversion dynamics. Recursive theory-of-mind failure occurs when an analyst treats the simulated path as a forecast of future efficiency rather than a sensitivity display of an unidentified snapshot.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The model contains no biomechanical, physiological, or match-level physical inputs; player fatigue, injury accumulation, travel load, and pitch conditions are subsumed into \(\varepsilon_{i,t}\) or omitted factors. The model is therefore not veto-proof against physical-layer shocks; a single red card, knockout-tournament variance, or extreme weather event in a given match can overturn the economic ranking without appearing in \(f(X_i)\).

Biomechanical layer: Squad depth, player age structure, and injury rates are not covariates. The paper acknowledges omitted factors including institutional quality, diaspora and expatriate players, football tradition, and demographic structure, but states reliable data are unavailable across the full 48-country sample [PAGE 5]. These omitted variables act as unmodeled vetoes on the GDP/population frontier.

Weather layer: No weather or climate variables enter Equation (1) or the OLS specification. Host-nation climate (United States, Canada, Mexico in July 2026) and match-time heat/humidity are external to the model and can veto systematic performance in individual knockout ties.

Adjudication: The paper's own resolution is to requalify \(z_i\) as a conditional performance residual rather than a validated efficiency parameter [PAGE 5], precisely because these cross-layer vetoes are not structurally identified. The strongest veto is architectural: a single-elimination tournament with 40 tied teams produces a residual that is almost the outcome itself [PAGE 4–5]. Until a multi-edition panel with richer controls and a proper SFA decomposition is available, the economic-potential model must be treated as a benchmark with explicit, exogenous veto layers, not as a veto-proof predictor.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Tournament format change. Counterfactual: A future World Cup replaces the single-elimination knockout format with a group-stage-only or double-elimination format that yields fewer tied exit scores and a finer-grained \(Y_i\). Verifiable veto: If the actual-outcome regression \(R^2\) rises materially above 0.091 and the residual–outcome correlation \(\sqrt{1-R^2}\) falls below 0.954, then the tie artifact is confirmed as the driver of Regression (A)'s near-degeneracy. Prediction: Under a finer scoring scale, the joint test \(H_0:\alpha_1=\alpha_2=0\) should become more significant (lower p-value than 0.099) and the U.S. extreme negative residual should attenuate, because fewer teams will share identical scores.

Scenario 2 — Panel identification of dynamic parameters. Counterfactual: A panel spanning World Cups 2022, 2026, and 2030 is assembled to estimate \(\kappa_i\) and \(\sigma_i\) rather than fixing them at shared illustrative values. Verifiable veto: If estimated \(\kappa,\sigma\) produce a rank-correlation band outside \([0.560, 0.578]\) or if the \(\bar z_i = z_i\) assumption is rejected by a Hausman-type test comparing cross-sectional vs panel residuals, then the current simulation's rank-order preservation is an artifact of the identification assumption. Prediction: Panel estimation will likely widen the rank-correlation band and reduce the out-of-sample stability of the "five highest-ranked" configurations \(\{Argentina, Brazil, England, France, Spain\}\) vs \(\{Argentina, England, France, Morocco, Spain\}\).

Scenario 3 — Inclusion of omitted institutional/diaspora controls. Counterfactual: Variables for institutional quality, share of expatriate/diaspora players, and demographic structure are added to the regression on FIFA points. Verifiable veto: If the adjusted \(R^2\) rises above 0.328 and the conditional performance residual variance attributed to mechanical correlation (\(\sqrt{1-R^2}\)) falls below 0.820, then part of the current residual is confirmed to reflect omitted socio-institutional factors rather than idiosyncratic footballing efficiency. Prediction: The over-performance ranking of Morocco and Senegal should attenuate or reorder, and several large-economy under-performers (e.g., USA, South Korea) should show smaller negative residuals once diaspora and institutional controls partial out GDP-independent strength.
</RLVR_COUNTERFACTUAL_VETOES>