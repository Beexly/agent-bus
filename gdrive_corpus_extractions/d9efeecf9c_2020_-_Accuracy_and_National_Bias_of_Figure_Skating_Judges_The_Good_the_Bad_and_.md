---
source: "2020 - Accuracy and National Bias of Figure Skating Judges The Good, the Bad and the Ugly - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2020"
pages: 21
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4434
---

<NATIVE_REASONING>
The user wants a deep analytical response based on the provided PDF text about figure skating judging bias. I need to follow the STRICT INVARIANTS:

1. ZERO BETTING LINES - never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS - no fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

No betting lines. No toy equations.

Let me parse the source carefully:

Paper: "Accuracy and National Bias of Figure Skating Judges: The Good, the Bad and the Ugly" MIT Sloan 2020, ID 1548706, Unknown Authors.

Key facts:
- 21 pages provided.
- Focus on Program Component Scores (PCS), not GOE.
- Dataset: 250 programs, 9 judges, 5 components = 11,250 observations. Judge/athlete same nationality in ≈ 6% of observations. [PAGE 4]
- ISU monitoring: Communication No. 2098, deviation points. |diff| < 1.5 per component acceptable. Total deviation up to 7.5 tolerated. Shortcomings listed [PAGE 5].
- Intrinsic judging error variability σ(l) modeled as function of performance level l, approximated by median panel mark. Example: at quality 9.0, average error 0.272. RMSE low, weighted exponential regression excellent fit. Judges more accurate for best performances. [PAGE 7]
- Marking score: m_{j,p} = e_{j,p} / σ(l_p) = (s_{j,p} - l_p) / σ(l_p). Overall marking score M_j = (1/n_j) Σ m_{j,p}². Wait, looking at text: M_j ≜ (1/n_j) Σ m_{j,p}²? Let me check the LaTeX from page 8:

𝑀1 ≜B
1
𝑛E 𝑚%,1
F
G
%HI

This looks garbled OCR. Let's interpret: M_j ≜ (1/n_j) Σ_p m_{j,p}². Then they say sum of squares of independent standard normal random variables follows χ² distribution: n·M_j ~ χ²_n. Wait, if m ~ N(0,1), then m² ~ χ²_1, sum ~ χ²_n, so (1/n)Σm² ~ χ²_n / n. Then n·M_j ~ χ²_n. Yes.

Confidence interval: CI_{95%}(M_j) = [ n/χ²_{1-α/2, n} · M_j ; n/χ²_{α/2, n} · M_j ]. Need to map garbled LaTeX: WX n / χ_{1-α/2,n}² M_j ; n / χ_{α/2,n}² M_j ]. Yes that matches standard CI for variance of normal.

- National bias regression: e_{j,p} = s_{j,p} - l_p = β_SN · 𝟙_SN · σ(l_p) + ε_{j,p}. Where ε ~ N(μ_j · σ(l_p), σ²_e(l_p) · M_j)? Actually text: ϵ ~ N(μ · σ, σ²_e · M). Need to reproduce carefully.
- μ_j ≜ (1/n_j) Σ m_{j,p} = (1/n_j) Σ e_{j,p}/σ(l_p). General tendency.
- β_SN is same-nationality bias multiple of intrinsic error variability.
- Overall nationalistic bias β_SN = 0.79, p ≪ 0.001 [PAGE 11]. For best performances (median > 8.0), β_SN = 0.81.
- Most biased judges have β_NB ≈ 2·σ(l_p), i.e., twice all other sources of error [PAGE 13].
- Chinese judges Chen Weiguang and Huang Feng do not stand out among numerous judges with statistically significant bias [PAGE 13]. Elena Fomina (Russia) biased for best athletes, lowers others rather than raising own [PAGE 13].
- French judge Anthony Leroy: M ≈ 0.86 (accurate) but β ≈ 1.62 (biased). American judge Deveny Deck: M ≈ 1.17 (erratic) but β ≈ -0.05 (unbiased) [PAGE 16].
- Gender bias: none observed [PAGE 17]. Women judges 7% more accurate than men in aggregate [PAGE 17].
- Conformity/starting number: RMS_order(#) independent of starting number; conformity bias dwarfed [PAGE 18].
- Limitations: median panel mark as proxy for true value; compensation effects/vote trading; single outlier circumspection [PAGE 19].
- Recommendations: long-term monitoring [PAGE 20].

Now structure response.

<THINK_TRACE> (>=400 words): Deep multi-hop derivation & gray-zone audit.
- Derive from raw observations to intrinsic error variability.
- Multi-hop: median as proxy → σ(l) → standardized marking score m → chi-squared CI → national bias regression with β_SN.
- Gray zones: OCR garbling in equations (need to reconstruct intended math), assumption that median = true value (vote trading can bias median), same-nationality only 6% of observations (sparse cell problem), panel size 9 trimmed mean middle 7 discards extremes which may remove bias signal, anonymity history, intent vs effect.
- Units: marks in PCS points (0-10, 0.25 increments), σ in PCS points, β dimensionless (multiple of σ), M dimensionless (chi-squared normalized), n dimensionless count, p-value dimensionless probability.
- Exact singularity/breakdown: when n_j small, CI wide; when σ(l) → 0 at very high performance, m explodes (division by near-zero), median proxy collapses if all judges collude, same-nationality indicator sparse (6%).

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown.
- List equations with proper LaTeX.
- Cite pages exactly [PAGE N].
- Include verbatim quotes where relevant.
- Breakdown of notation: s, l, e, σ, m, M, β, μ, 𝟙, χ².

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps.
- Lineage: 6.0 system → CoP 2004 → anonymity → 2016 abolition [PAGE 1-2]. Zitzewitz [8,9] vote trading, bias increases with event importance. Heiniger & Mercier gymnastics framework [3,4,6]. Dressage Sandberg [7]. Lee [5] outlier aversion.
- Multi-week traps: ISU monitoring thresholds arbitrary (1.5, 7.5) transgressed only once in dataset [PAGE 5]; Huang Feng warned 3 weeks before Olympics but not clear why singled out while Treitz/Leskinen ignored [PAGE 6]; disciplinary arbitrariness.
- Temporal trap: bias measured at single Olympics may not generalize; longitudinal monitoring needed.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: after scandals (2002, 2014, 2018), ISU adopts reforms (anonymity, then abolition) that create new problems (lack of accountability) [PAGE 1-2].
- Counter-trap: judges know monitoring is deviation-point based; can game by staying within thresholds while biasing within tolerance, or canceling positive/negative deviations [PAGE 5].
- Clock: number of observations narrows CI; as n increases, probability that bias is luck decreases [PAGE 8-9]. But only 250 programs, ~6% same-nationality → limited statistical power per judge.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- This is about figure skating judging, not physical sport performance, but I need to address physical/biomechanical/weather vetoes in the context of the paper's claims.
- Physical layer: PCS components (skating skills, transitions, performance, composition, interpretation) are subjective; no direct physical measurement like time/distance. Base values for GOE have difficulty, but PCS is qualitative.
- Biomechanical: quality of execution influences PCS but the paper models true level as median panel mark; biomechanical outliers (a fall) might be captured in GOE not PCS; PCS is artistic.
- Weather: indoor ice rink, negligible weather effect; not discussed in paper. Veto proof: because competition is indoors, weather is a null veto; ice quality could vary but not in dataset.
- Veto adjudication: The paper's median-as-truth assumption can be vetoed if panel colludes or if same-nationality judges shift median (compensation). Vote trading means median is not independent truth.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning from Verifiable Rewards? Or just verifiable scenarios. I'll frame as 3 counterfactual veto scenarios with verifiable predictions.
  1. If median panel mark is replaced by an independent technical controller's ground truth (e.g., from motion capture of jump height/speed), β_SN estimates will change sign/magnitude for judges currently flagged; prediction: judges with β_SN > 1 will shrink toward zero if their bias was relative to a colluding median.
  2. If ISU adopts the paper's chi-squared monitoring with n_j threshold (e.g., n > 50 observations per judge), judges like Pekka Leskinen (erratic) and Anthony Leroy (accurate but biased) would be flagged under new regime; prediction: current ISU deviation thresholds (1.5/7.5) would not flag them, but M_j and β_SN would.
  3. If same-nationality observations increase from 6% to 30% via more mixed-nationality panels, confidence intervals on β_SN narrow by factor ~√5; prediction: currently non-significant judges (e.g., Chinese judges per paper's claim they "do not stand out") would either become significant or be cleared with narrower CIs.

Need to ensure no betting lines. Check: no mention of odds, spreads, etc.

Word count: Need >= 1000 words total across XML sections. THINK_TRACE alone >=400 words.

Let me write carefully.

For LaTeX, I need to reconstruct equations properly. Since source OCR is garbled, I should state them as interpreted from context and cite page. I must not invent fake ratios. These are real equations from the paper (mostly). I'll present them cleanly and note OCR reconstruction.

Equation list:
1. Intrinsic error variability: σ(l_p) estimated via weighted exponential regression; l_p ≈ median(s_{1..9,p}). [PAGE 7]
2. Discrepancy: e_{j,p} = s_{j,p} - l_p. [PAGE 8]
3. Marking score: m_{j,p} = e_{j,p} / σ(l_p). [PAGE 8]
4. Overall marking score: M_j = (1/n_j) Σ_{p=1}^{n_j} m_{j,p}². [PAGE 8]
5. Distribution: n_j M_j ∼ χ²_{n_j} under m_{j,p} ∼ N(0,1). [PAGE 8]
6. CI: CI_{1-α}(M_j) = [ n_j M_j / χ²_{1-α/2, n_j} ; n_j M_j / χ²_{α/2, n_j} ]. Need to check order. For variance σ² estimate from normal: CI for σ² is [(n-1)s²/χ²_{α/2}, (n-1)s²/χ²_{1-α/2}]. Here M_j is like mean of squares. If n M_j ~ χ²_n, then M_j ~ χ²_n / n. CI for E[m²]=1? Actually they want CI for M_j. P(χ²_{α/2} < n M_j < χ²_{1-α/2}) = 1-α → M_j ∈ [χ²_{α/2}/n, χ²_{1-α/2}/n] ·? Wait:
χ²_{α/2, n} < n M_j < χ²_{1-α/2, n}
→ χ²_{α/2, n}/n < M_j < χ²_{1-α/2, n}/n.
But text says: WX n / χ_{1-α/2,n}² M_j ; X n / χ_{α/2,n}² M_j ]. This is inverted, suggesting they might be CI for precision or they parameterized differently. Let's look at garbled: CI_{95%}(1 −α) = WX n / χ_{1-α/2,G}² M_j ; X n / χ_{α/2,G}² M_j ]. It looks like they wrote n/χ² * M_j. If n M_j ~ χ²_n, then solving for M_j gives χ²/n. But n/χ² * M_j doesn't directly follow unless they are inverting the chi-square pivot differently. Actually if X = n M_j ~ χ²_n, then a pivot for M_j is X/n. CI for M_j is [χ²_{α/2}/n, χ²_{1-α/2}/n] *? No, that's CI for the expected value if M_j were the statistic. But they might be computing CI for M_j itself treating it as variance estimate: CI = [n M_j / χ²_{1-α/2}, n M_j / χ²_{α/2}]. That's standard for variance: (n-1)s² / χ²_{α/2} < σ² < (n-1)s² / χ²_{1-α/2}. So lower bound uses upper chi quantile, upper bound uses lower chi quantile. So text's [n/χ²_{1-α/2} · M_j ; n/χ²_{α/2} · M_j] matches variance CI form. I'll present it as in text but note OCR uncertainty.

7. National bias regression: e_{j,p} = β_SN · 𝟙_SN(j,p) · σ(l_p) + ε_{j,p}, with ε_{j,p} ∼ N(μ_j σ(l_p), σ²_{e}(l_p) M_j). [PAGE 9]
8. General tendency: μ_j = (1/n_j) Σ m_{j,p} = (1/n_j) Σ e_{j,p}/σ(l_p). [PAGE 9]
9. Adjusted error for conformity: d_{j,p} = (s_{j,p} - l_p - μ_j σ(l_p)) / (σ(l_p) M_j)? Wait page 10: d_{j,p} ≜ s_{j,p} - l_p - μ_j σ(l_p) all over σ(l_p) M_j? Text: d_{j,p} ≜ s_{j,p} - l_p - μ_4" · σ(l_p) / (σ(l_p) · M_j)? Let's read: "𝑑%,1 ≜𝑠%,1 −𝑙% −µ4" ⋅σ"#𝑙%& σ"#𝑙%& ⋅𝑀1" — formatting is messed up. Probably d_{j,p} = [s_{j,p} - l_p - μ_j σ(l_p)] / [σ(l_p) √M_j] or similar. And RMSorder(#) = sqrt( mean d² ). I'll present carefully and cite page 10, noting OCR garbling but preserving structure.

Need verbatim quotes? The instruction says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." I should include a few verbatim quotes.

Now writing sections.

THINK_TRACE: Must be >=400 words. I'll write ~500-600 words.

SOURCE_OPERATORS_AND_EQUATIONS: Include equations and citations.

RETROCAUSAL_GENEALOGY: Historical lineage.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression etc.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Since figure skating is indoors, weather veto is null. Biomechanical: PCS subjective; physical layer lacks instrumented ground truth. Veto: median-as-truth can be vetoed by collusion.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.

Total words across all sections should exceed 1000. I'll ensure each section is substantial.

Let's draft.

Important: Do not mention betting. No spreads/totals/moneylines/odds.

Check for any accidental "odds" or "spread". Avoid.

Word count estimation: THINK_TRACE ~600, SOURCE ~500, RETRO ~300, RECURSIVE ~300, CROSS ~300, RLVR ~300 = ~2300. Good.

Let's write carefully with exact page citations.

I need to include exact [PAGE N] markers. The text has [PAGE 1 of 21] etc. I will cite as [PAGE 1], [PAGE 2], etc.

Verbatim quotes:
- [PAGE 1]: "suspension of two Chinese judges suspected by the International Skating Union (ISU) of preferential marking in favor of Chinese skaters during the 2018 PyeongChang Olympic Winter Games."
- [PAGE 4]: "The judge and the athlete share the same nationality in ≈ 6% of observations."
- [PAGE 5]: "A difference in absolute value of less than 1.5 per component is acceptable. For the overall program, a total deviation (the sum of the five component deviations) of up to 7.5 is tolerated."
- [PAGE 7]: "For instance, when evaluating a component whose true quality is 9.0, judges make an average error of 0.272."
- [PAGE 11]: "Table II shows that the overall nationalistic bias is βSN = 0.79, and statistically significant (p ≪0.001)."
- [PAGE 13]: "Our main observation is that the most biased judges have βNB ≈ 2 ⋅ σ(l_p), thus their national bias is twice higher than all other sources of error of an average unbiased judge!"

I'll use β_SN notation consistent with text.

Now compose final answer.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's causal chain begins with the raw observation layer: 250 programs at the 2018 PyeongChang Olympics, each evaluated by nine judges on five Program Component Scores (PCS), yielding 11,250 judge-performance-component marks [PAGE 4]. Because the true performance level \(l_p\) is unobservable, the authors approximate it with the median of the nine panel marks for that component. This is the first critical inference hop: median-as-truth. The median is robust to the trimmed-mean aggregation used by the ISU (middle seven of nine marks) [PAGE 3], but it is not independent ground truth. If same-nationality judges collude or if vote trading shifts the median [PAGE 1, 19], the proxy inherits the very bias it is meant to measure.

From the median proxy, the second hop constructs the intrinsic judging error variability \(\sigma(l_p)\), modeled as a weighted exponential regression of judge error on performance level. The paper reports that at quality level 9.0, the average judge error is 0.272 PCS points, and accuracy improves for better performances [PAGE 7]. This establishes a heteroskedastic error floor: the same absolute deviation is more severe at high performance levels because \(\sigma(l)\) shrinks.

The third hop standardizes each mark into a marking score \(m_{j,p} = e_{j,p} / \sigma(l_p)\), where \(e_{j,p} = s_{j,p} - l_p\) is the discrepancy [PAGE 8]. A perfect judge has \(m=0\); an average judge has \(|m| \approx 1\). Aggregating squared marking scores across a judge's \(n_j\) performances gives \(M_j = (1/n_j) \sum_p m_{j,p}^2\) [PAGE 8]. Under the assumption that standardized errors are independent standard normals, \(n_j M_j \sim \chi^2_{n_j}\), which yields confidence intervals that narrow as \(n_j\) grows [PAGE 8]. This is the fourth hop: accuracy inference with probabilistic calibration.

The fifth hop estimates nationalistic bias through the regression \(e_{j,p} = \beta_{SN} \cdot \mathbb{1}_{SN} \cdot \sigma(l_p) + \epsilon_{j,p}\) [PAGE 9]. Here \(\beta_{SN}\) is expressed as a multiple of the intrinsic error variability, making bias comparable across performance levels. The overall estimate is \(\beta_{SN} = 0.79\) (\(p \ll 0.001\)) [PAGE 11], meaning the average same-nationality advantage is nearly as large as the entire error budget of an unbiased judge. The most biased judges reach \(\beta_{NB} \approx 2 \cdot \sigma(l_p)\) [PAGE 13].

Gray-zone audit. The OCR of the LaTeX is garbled in several places (e.g., the confidence interval bounds and the adjusted-error definition on [PAGE 8, 10]), so exact singularities must be inferred rather than quoted verbatim. A breakdown regime occurs when \(\sigma(l_p) \to 0\) at the extreme high end of PCS: the denominator in \(m_{j,p}\) vanishes, turning small absolute discrepancies into infinite standardized scores. A second breakdown occurs because same-nationality observations are only \(\approx 6\%\) of the data [PAGE 4]; per-judge cells are sparse, so confidence intervals on \(\beta_{SN}\) are wide and the paper itself concedes that the suspended Chinese judges "do not stand out" among biased judges [PAGE 13]. A third gray zone is the median proxy: if other-nationality judges compensate for same-nationality generosity (vote trading), the median shifts and national bias is misestimated [PAGE 19]. The paper notes Zitzewitz found the opposite—same-nationality judges slightly increase other judges' marks—implying the analysis may underestimate rather than overestimate bias [PAGE 19]. No betting lines are invoked anywhere; all quantities are PCS points, dimensionless ratios, or probabilities.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and equations reconstructed from [PAGE 3]–[PAGE 10], with units and page citations.

Notation:
- \(s_{j,p}\): mark given by judge \(j\) for performance \(p\), in PCS points (0–10, increments of 0.25) [PAGE 3].
- \(l_p\): true performance level, approximated by the median panel mark [PAGE 7].
- \(e_{j,p} \triangleq s_{j,p} - l_p\): discrepancy (error) in PCS points [PAGE 8].
- \(\sigma(l_p)\): intrinsic judging error variability, in PCS points, estimated by weighted exponential regression as a function of performance level [PAGE 7]. Example: at \(l_p = 9.0\), average error \(= 0.272\) PCS points [PAGE 7].
- \(m_{j,p} \triangleq e_{j,p} / \sigma(l_p)\): marking score, dimensionless (error measured in multiples of intrinsic variability) [PAGE 8]. Perfect judge: \(m=0\); average judge: \(|m| \approx 1\).
- \(M_j \triangleq (1/n_j) \sum_{p=1}^{n_j} m_{j,p}^2\): overall marking score, dimensionless [PAGE 8].
- Sampling distribution: if \(m_{j,p} \sim \mathcal{N}(0,1)\) independently, then \(n_j M_j \sim \chi^2_{n_j}\) [PAGE 8].
- Confidence interval at level \(1-\alpha\) [PAGE 8]:
\[
\mathrm{CI}_{1-\alpha}(M_j) =
\left[
\frac{n_j M_j}{\chi^2_{1-\alpha/2,\, n_j}}\;,\;
\frac{n_j M_j}{\chi^2_{\alpha/2,\, n_j}}
\right].
\]
As \(n_j\) increases, the interval narrows, reducing the probability that an extreme \(M_j\) is luck [PAGE 8].
- General tendency (generosity/severity):
\[
\mu_j \triangleq \frac{1}{n_j}\sum_p m_{j,p} = \frac{1}{n_j}\sum_p \frac{e_{j,p}}{\sigma(l_p)}
\]
dimensionless [PAGE 9].
- Nationalistic bias regression [PAGE 9]:
\[
e_{j,p} = \beta_{SN} \cdot \mathbb{1}_{SN}(j,p) \cdot \sigma(l_p) + \epsilon_{j,p},
\]
where \(\mathbb{1}_{SN}=1\) iff judge and athlete share nationality [PAGE 9], and \(\epsilon_{j,p}\) is a normal error term with mean \(\mu_j \sigma(l_p)\) and variance proportional to \(\sigma^2(l_p) M_j\) [PAGE 9]. \(\beta_{SN}\) is dimensionless (multiples of \(\sigma\)).
- Result: overall \(\beta_{SN} = 0.79\), \(p \ll 0.001\) [PAGE 11]. For median mark \(> 8.0\), \(\beta_{SN} = 0.81\) [PAGE 11]. Most biased judges: \(\beta_{NB} \approx 2 \cdot \sigma(l_p)\) [PAGE 13].
- ISU deviation-point monitoring (legacy, criticized): per-component acceptable deviation \(< 1.5\) PCS points; total program deviation up to 7.5 PCS points tolerated [PAGE 5]. Criticisms: thresholds arbitrary; positive and negative deviations cancel; mean is outlier-sensitive; ignores \(\sigma(l_p)\) heteroskedasticity [PAGE 5].
- Gender bias regression [PAGE 10]: same structure with \(\mathbb{1}_{SG}\) for same gender; result: no significant gender bias [PAGE 17].
- Conformity/starting-number test [PAGE 10]: adjusted error \(d_{j,p}\) removes general tendency and accuracy scaling; \(\mathrm{RMS}_{\text{order}}(\#)\) is independent of starting number, so conformity bias is dwarfed by intrinsic variability and national bias [PAGE 18].

OCR caveat: the LaTeX in [PAGE 8]–[PAGE 10] is visually degraded (e.g., chi-square subscripts and the adjusted-error fraction), so the equations above are the semantically reconstructed forms consistent with the surrounding text; no toy ratios or fabricated constants are introduced.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper sits in a multi-decade lineage of judged-sport reform. The 6.0 ordinal system was replaced by the ISU Code of Points in 2004, introducing GOE and PCS with precise criteria [PAGE 3]. After the 2002 Salt Lake City vote-trading scandal involving French judge Marie-Reine Le Gougne and the Russian/Canadian pairs controversy, judging marks were initially anonymized to impede collusion; anonymity was abolished in 2016 after the 2014 Sochi controversies [PAGE 1]. The 2018 PyeongChang suspension of Chinese judges Huang Feng and Chen Weiguang is the most recent case in this sequence [PAGE 1]. Scientifically, the work extends Heiniger and Mercier's gymnastics judging framework [3, 4, 6] and engages Zitzewitz's findings that national bias increases with event importance and that vote trading exists between judges of different nationalities [8, 9] [PAGE 2]. It also contrasts with dressage [Sandberg, 7] and trampoline/snowboard judging, where bias is absent or lower [PAGE 11].

Multi-week traps: The ISU's own monitoring (Communication No. 2098) uses deviation-point thresholds of 1.5 per component and 7.5 per program [PAGE 5]. In the dataset, these thresholds were transgressed only once—Finnish judge Pekka Leskinen evaluating Israeli skater Alexei Bychenko—showing the rule is practically inert [PAGE 5]. Huang Feng received an ISU warning letter three weeks before the Olympics, yet he and Chen Weiguang were singled out while German judge Elke Treitz, who exhibited harsher cross-national penalization on the same panel, faced no blame [PAGE 5–6]. This is a temporal governance trap: disciplinary action is triggered by episodic scandal rather than longitudinal statistical evidence, and the ISU's deviation method cannot distinguish erratic-but-unbiased judges from precise-but-biased ones because it cancels opposite-sign deviations and uses the mean [PAGE 5]. The paper's conclusion that long-term chi-squared monitoring would solve most judging problems [PAGE 20] is a direct institutional counter-trap to this reactive, week-by-week disciplinary model.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: after each judging crisis (2002, 2014, 2018), the ISU regresses to structural mechanics—anonymity, then its abolition—without adopting the panel-level statistical infrastructure the paper prescribes [PAGE 1–2, 20]. Judges learn from each crisis cycle: anonymity reduced accountability, and its abolition restored public marks but left the deviation-point monitoring unchanged [PAGE 1, 5]. The recursive pattern is that the ISU optimizes for visible scandal containment rather than for the latent parameters \(M_j\) and \(\beta_{SN}\) that the paper identifies as the true drivers of unfairness.

Counter-trap: a sophisticated judge who knows the ISU monitors only net deviation points can bias within tolerance by awarding small same-nationality bonuses and offsetting them with small penalties to others, keeping the total under 7.5 while still shifting rankings because PCS gaps at the elite level are narrow [PAGE 5, 11]. The paper shows this exact pattern for the German judge Elke Treitz relative to Huang Feng: Treitz penalized competitors more severely than Huang rewarded compatriots, yet neither crossed the ISU thresholds [PAGE 5]. A counter-monitoring regime based on \(M_j\) and \(\beta_{SN}\) would catch both because it squares errors (cancellation is impossible) and conditions on \(\sigma(l_p)\) [PAGE 8–9].

Clock: the confidence-interval mechanism acts as a statistical clock. With \(n_j\) observations, the probability that a high marking score or large \(\beta_{SN}\) is random luck decays as the chi-square interval narrows [PAGE 8–9]. However, the dataset contains only 250 programs and same-nationality pairs are \(\approx 6\%\) of observations [PAGE 4], so the clock runs slowly per judge. The paper's own result that the suspended Chinese judges do not stand out [PAGE 13] is consistent with insufficient \(n_j\) in the same-nationality cell, not with innocence. Long-term monitoring across multiple seasons would accelerate the clock and reduce false negatives.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: figure skating is contested indoors on ice, so weather is a null veto; there is no wind, temperature, or precipitation variance in the 2018 Olympic dataset. The physical substrate is the ice surface and the skater's kinematics, but the paper's dependent variable—PCS—is not a biomechanical time or distance. It is a composite of skating skills, transitions, performance, composition, and interpretation, each marked 0–10 in 0.25 increments [PAGE 3]. Because PCS is inherently subjective, there is no instrumented ground truth at the physical layer to veto a judge's component mark.

Biomechanical layer: jump and spin base values (GOE) have technical difficulty anchors, but the paper explicitly excludes GOE and analyzes PCS only [PAGE 3]. A biomechanical outlier (e.g., a fall or under-rotated jump) may influence the "performance" component, yet the median-panel proxy cannot isolate whether a low PCS mark reflects biomechanical failure or national bias. The trimmed mean of the middle seven marks [PAGE 3] removes the two extremes, which can veto genuine outlier correctness: a judge who correctly marks a flawed program lower than a colluding majority is treated as an error by the median model [PAGE 19].

Veto adjudication: the strongest veto against the paper's identification strategy is the median-as-truth assumption. If same-nationality judges engage in vote trading, they shift the median upward for compatriots, causing the regression to attribute the shift to \(\beta_{SN}\) even when the median itself is biased [PAGE 19]. Zitzewitz's finding that same-nationality judges slightly increase other judges' marks implies the median may absorb some bias, meaning \(\beta_{SN}\) could be underestimated [PAGE 19]. A second veto is the single-outlier problem: a judge deviating from the panel may be correct while the panel is wrong or colluding; with few observations per judge, high \(M_j\) or \(\beta_{SN}\) cannot be distinguished from honest error [PAGE 19]. These vetoes are physical/epistemic, not betting-related; no odds or lines enter the analysis.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with testable predictions:

Scenario 1 — Replace the median proxy with an independent technical ground truth.
Veto condition: if an instrumented or technical-panel ground truth \(l_p^*\) (e.g., element-level execution quality from motion capture or a separate technical controller score) replaces the median panel mark as the reference level in the marking score \(m_{j,p} = (s_{j,p} - l_p^*) / \sigma(l_p^*)\).
Prediction: judges currently flagged as precise-but-biased (e.g., Anthony Leroy, \(M \approx 0.86\), \(\beta \approx 1.62\) [PAGE 16]) will show reduced \(\beta_{SN}\) if their apparent favoritism was largely a product of a colluding median. Conversely, judges whose marks deviate from a biased median but were penalized by the median model will see \(M_j\) decrease. Verifiable by re-estimating Table IV with \(l_p^*\) and comparing the sign and magnitude of \(\beta_{SN}\) before/after.

Scenario 2 — Impose an \(n_j\)-threshold monitoring regime on the ISU deviation data.
Veto condition: if the ISU replaces the fixed 1.5/7.5 deviation-point rule [PAGE 5] with a requirement that a judge be reviewed only after \(n_j \geq 50\) component observations and flagged when the upper 95% chi-square bound of \(M_j\) exceeds a threshold or when the lower bound of \(\beta_{SN}\) exceeds 0.5.
Prediction: Pekka Leskinen (erratic, high \(M_j\)) and Anthony Leroy (accurate mean but high \(\beta_{SN}\)) would be flagged under the new regime but were not flagged—or were under-penalized—under the deviation-point method because their net deviations stayed within tolerance [PAGE 5–6, 16]. Verifiable by computing \(M_j\) and \(\beta_{SN}\) confidence intervals for all judges in the 2018 dataset and checking overlap with the ISU's actual disciplinary list.

Scenario 3 — Increase same-nationality observation share via panel reassignment.
Veto condition: if future ISU panels are constructed so that same-nationality judge-athlete pairs rise from \(\approx 6\%\) [PAGE 4] to \(\geq 30\%\) of observations, while total programs per judge remain constant.
Prediction: the standard error of \(\beta_{SN}\) scales approximately as \(1/\sqrt{n_{SN}}\); increasing same-nationality observations fivefold narrows confidence intervals by \(\approx \sqrt{5} \approx 2.24\). Judges like Chen Weiguang and Huang Feng, whom the paper says "do not stand out" [PAGE 13] likely because of sparse same-nationality cells, would either achieve statistically significant \(\beta_{SN}\) (confirming bias) or have their intervals narrow around zero (clearing them). Verifiable by power analysis on the existing 11,250 observations and by simulating panel reassignment under the observed variance components.
</RLVR_COUNTERFACTUAL_VETOES>