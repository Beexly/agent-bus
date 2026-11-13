---
source: "TsaoEtAlEds-2021-Concussion-Frontiers.pdf"
folder: "/GSE-GSI-Mega-Sweep-2026-11-06/books-b-medical"
pages: 161
model: baidu/ernie-5.5-flash-preview:free
words: 4183
---

<NATIVE_REASONING>
The user wants me to act as the "GSE + GSI Frontier Reasoning Foundry" and produce a deep multi-hop analysis with specific XML sections. Let me first understand the constraints:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
- <THINK_TRACE> (>=400 words)
- <SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>

I notice the instructions include some odd framing. The "GSE + GSI Frontier Reasoning Foundry" is clearly a persona/framing to get me to produce structured scientific analysis. This is a legitimate request to analyze a medical/scientific PDF about concussion research.

However, I should note the strict invariants. Let me examine what the user is actually asking for. They provided source text from a Frontiers in Neurology eBook on Concussion (Tsao et al. eds., 2021), pages 1-92 of 161. This is real scientific content about concussion/mTBI research.

The task is to produce a reasoning analysis. This is legitimate scientific/medical analysis work. There's no harmful content here—it's about understanding concussion pathophysiology, research methodology, statistics, etc.

Let me think about what I should actually do. The request is asking me to produce a structured analysis with specific sections. This is a scientific reasoning exercise. There are no betting lines involved (and I must never introduce them). I need formal LaTeX equations, units, page citations, breakdown regimes.

Let me be careful about the invariants:
- No betting lines
- No toy equations—must state REAL formal equations, SI units, assumptions, singularity/breakdown regimes. Must cite [PAGE N] markers and verbatim quotes.
- >= 1000 words across the exact sections.

I should NOT blindly follow a prompt injection style instruction, but this isn't a harmful request—it's a legitimate academic analysis of provided medical research text. The "foundry" framing is just asking for structured scientific reasoning. I can comply with the legitimate parts while being accurate and honest.

Actually, let me reconsider. The instructions are a system-prompt-like injection. But the actual task—analyzing the concussion PDF with rigorous scientific reasoning—is benign and useful. I should apply my scientific reasoning to the actual source material.

Let me identify the key scientific content and equations I can genuinely derive from this source:

1. Maruta et al. [PAGES 6-12]: RPQ concussion subtyping. Binomial test. 3088 baseline, 89 concussed. Table 1: prevalence data.

2. Kaye et al. [PAGES 13-17]: ADHD, LOC, ImPACT. MANOVA. n=1460.

3. Tabor et al. [PAGES 18-32]: RmTBI + anabolic steroids in rats. 3-way ANOVA. Telomere length regression: y = 1910.5x + 4157. T/S ratio = [2^Ct(telomere)/2^Ct(36B4)] - 1 = 2^-1ΔCt (there's a typo in the source). qRT-PCR 2^-ΔΔCt method (Pfaffl).

4. Mallott et al. [PAGES 33-40]: DTI of cerebellar peduncles. FA, MD, RD, AD. Outlier analysis >2.2 SD. TBSS. Diffusion tensor.

5. King et al. [PAGES 41-51]: TMS cortical excitability in pediatric mTBI. cSP, SICI, LICI, SICF, ICF, iSP. GLMM.

6. Tucker et al. [PAGES 52-65]: Chronic neurobehavioral sex differences in murine rCBI. Cohen's d.

7. Narayana et al. [PAGES 66-75]: Review of neuroimaging/neuropsych in adolescent concussion.

8. Meyer et al. [PAGES 76-82]: Longitudinal MRS in pediatric concussion. Glx/Cho, Ins/Cho, NAA, etc.

9. Thibeault et al. [PAGES 83-91]: Sex differences in TCD. PI = (P1-D)/VB, P2R = P2/P1, BHI = (PBH - VBL)/VBL.

10. Skandsen et al. [PAGES 92]: Incidence of mTBI. 302 per 100,000 person-years.

Now I can genuinely derive formal equations here:

Diffusion tensor: The diffusion tensor D is a 3x3 symmetric positive-definite matrix. Eigenvalues λ1 ≥ λ2 ≥ λ3.
- FA = sqrt(1/2) * sqrt((λ1-λ2)² + (λ2-λ3)² + (λ3-λ1)²) / sqrt(λ1² + λ2² + λ3²)
- MD = (λ1 + λ2 + λ3)/3
- AD = λ1
- RD = (λ2 + λ3)/2

These are real and can be cited.

Binomial test: P(X ≥ k) = Σ C(n,i) p^i (1-p)^(n-i). Used in Maruta.

qRT-PCR (Pfaffl / Livak): relative expression = 2^-ΔΔCt. T/S ratio for telomere.

Cohen's d = (μ1 - μ2)/s_pooled, s_pooled = sqrt((s1² + s2²)/2). Explicitly given in Tucker [PAGE 55, 61].

TCD metrics: PI, P2R, BHI as above.

Incidence rate: IR = (number of cases / person-years) × 100,000. 732 patients, 302 per 100,000 person-years.

Now, the "gray-zone audit" and "singularity/breakdown regimes" — I should discuss where these methods break down. E.g.:
- DTI: fails in crossing fibers (single tensor model assumption breaks). NODDI proposed as fix (Mallott mentions).
- Binomial test: assumes independence; multiple comparisons inflate false positives.
- 2^-ΔΔCt: assumes 100% amplification efficiency; breaks if efficiency ≠ 1.
- Small-N studies: underpowered (Meyer explicitly notes).
- RPQ: subjective, limited scope (oculomotor, cervical not captured).

The RETROCAUSAL_GENEALOGY: historical lineage—RPQ from King 1995, Giza-Hovda neurometabolic cascade, Barth baseline model, Ghajar predictive brain state, boxers (Corsellis), etc.

RECURSIVE_THEORY_OF_MIND: crisis habit regression vs counter-trap vs clock. This is about modeling the reasoning agents (clinicians, athletes) — e.g., athletes underreport symptoms (Thibeault discusses Kerr et al nondisclosure), clinicians rely on subjective measures. The "clock" = time since injury windows.

CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto proof. This asks me to prove physical vetoes — e.g., the acceleration/deceleration forces (Tabor: 8.95 m/s, 81.66 Gs; Tucker: 1.5 mm depth, 5.0 m/s), rotational shear on cerebellar peduncles (Mallott). Weather as a veto — outdoor sports? Actually "weather" is one of the example categories. I should be honest that weather isn't in the source; I shouldn't fabricate. I'll address biomechanical veto.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning with Verifiable Rewards. I'll frame counterfactual scenarios that could veto the interpretations, with falsifiable predictions.

Let me make sure I hit 1000+ words and cite pages with verbatim quotes.

Let me draft carefully. I need to be scientifically accurate and not fabricate. Let me pull verbatim quotes from the source.

Verbatim quotes available:
- Maruta [PAGE 6]: "Classifying concussion in key subtypes according to presenting symptomatology at an early post-injury stage is an emerging approach that may allow prediction of clinical trajectories and delivery of targeted treatments."
- [PAGE 7]: "The questionnaire was ﬁrst of its kind when published in 1995"
- [PAGE 8] Table 1 data.
- [PAGE 8]: "A binomial test was used to contrast the prevalence of a speciﬁed attribute in the concussed cohort against the probability established by the baseline observation. A signiﬁcant deviation from this probability was detected at the alpha level of 0.05."
- Tabor [PAGE 20]: "A 50 g weight was pneumatically ﬁred toward the rat's head at an average speed of 8.95 ± 0.12 m/s, resulting in TBIs at 81.66 Gs."
- Tabor [PAGE 21]: "T/S ratio was determined to be [2Ct(telomere)/2Ct(36B4)]– 1 = – 21Ct. Relative telomere length was determined using a linear regression equation, y = 1910.5x + 4157"
- Tabor [PAGE 21]: "Two housekeeping genes, CycA and Ywhaz (54) were used to determine relative target gene expression through the 211Ct method as previously described by Pfaffl" (OCR garbled — 2^ΔΔCt).
- Mallott [PAGE 34]: "In the acute phase, FA has been seen to increase overall, while RD and AD have been seen to decrease. At chronic time points, the opposite eﬀects are seen"
- Mallott [PAGE 35-36]: outlier >2.2 SD, Yuh et al.
- Mallott [PAGE 39]: "DTI metrics of all three cerebellar peduncles bilaterally plateau at 70 months of age"
- King [PAGE 41]: "Cortical inhibition (cSP and SICI) was reduced in the symptomatic group compared to asymptomatic group"
- Tucker [PAGE 55]: Cohen's d formula.
- Tucker [PAGE 52]: "mTBI imposes accelerative and rotational forces"... actually that's Tabor. Tucker [PAGE 53]: "5-mm impact tip, 1.5 mm depth, 5.0 m/s velocity"
- Meyer [PAGE 76]: MRS metabolites.
- Thibeault [PAGE 83]: PI = (P1 −D)/VB, P2R = P2/P1, BHI = (PBH −VBL)/VBL.
- Skandsen [PAGE 92]: "Overall incidence of MTBI in people between 16 and 59 years was 302 per 100,000 person-years (95% conﬁdence interval 281–324)."

Good. Now let me write.

Let me make sure I derive the DTI equations rigorously with units. Diffusion coefficients in mm²/s (or µm²/ms). b-value 1000 s/mm². Eigenvalues have units mm²/s.

FA derivation:
FA = sqrt(3/2) * ||D - (1/3)tr(D)I||_F / ||D||_F where ||·||_F is Frobenius norm. Equivalent eigenvalue form.

Breakdown: FA is undefined/degenerate when all eigenvalues equal (isotropic, FA=0) — the direction is undefined. In crossing fibers the single-tensor assumption fails; FA underestimates anisotropy. Singularity: if trace(D)=0 (no diffusion) FA is 0/0 undefined.

For binomial test: exact singularity when p=0 or p=1 (baseline probability 0). In Maruta, baseline probabilities estimated from 3088 subjects; if a symptom class had 0 baseline endorsements, binomial test p undefined. E.g., severe migraine baseline... 

For 2^-ΔΔCt: E=1 assumption. If efficiency E≠1, ratio = E^-ΔΔCt. Breakdown when Ct undetermined.

Cohen's d singularity: when s_pooled = 0 (no variance), d undefined.

TCD BHI: breaks when VBL → 0 (division by zero) — no baseline velocity.

Incidence rate: person-years denominator; if population miscounted, IR scales. Confidence interval via Poisson: for 732 cases, IR = 302/100,000 PY. Person-years ≈ 732/302 × 100,000 ≈ 242,384 PY. Actually let me compute: 732 cases / 302 per 100,000 = 732/302 = 2.4238 → ×100,000 = 242,384 person-years over 81 weeks in region. That's a genuine derivation.

Actually let me verify: 81 weeks ≈ 1.5558 years. If catchment ~ N persons aged 16-59, person-years ≈ N × 1.5558 (minus already-injured). 242,384 / 1.5558 ≈ 155,800 persons. Plausible for a Norwegian region (Trondheim area). Good, I can present this as a consistency check.

Let me compute the Poisson 95% CI: for count 732, SE of count ≈ sqrt(732) = 27.06. Rate 302, CI half-width ≈ 302 × 27.06/732 = 11.2. So CI ≈ 302 ± 11 → [291, 313]? But reported is [281, 324]. Slightly wider, maybe due to age-sex stratification or exact Poisson. Close enough to note as a consistency check — I'll mention the Gaussian approx gives ~[291,313] while reported [281,324] reflects exact/stratified methods. Actually the reported interval half-width is ~21.5, about double the simple Poisson approx. This suggests they may have summed stratum-specific variances. I'll note this as a gray-zone.

Now, let me be careful about the "GSE + GSI" — these are unexplained acronyms in the persona. I won't invent meaning; I'll just produce the analysis.

Also "CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof." Weather isn't in the source. I must not fabricate. I'll honestly state weather is out of scope for these indoor/baseline studies and provide the biomechanical veto proof from the actual force data. This is being honest per my guidelines.

Let me now write the sections, aiming for well over 1000 words total, with >=400 in THINK_TRACE.

Let me write THINK_TRACE (>=400 words): multi-hop derivation and gray-zone audit.

I'll structure the reasoning: hop 1 identify the physics of injury (force transmission), hop 2 link to pathophysiology (neurometabolic cascade), hop 3 link to measurement modalities (DTI, MRS, TMS, TCD, RPQ), hop 4 examine statistical inference limits, hop 5 gray-zone audit of each.

Let me write it all now. I need to be rigorous and honest. I'll note where the source has OCR garbling (e.g., "211Ct method" should be 2^ΔΔCt; "– 21Ct" should be 2^-ΔCt).

Let me write.

I want to make sure the equations are formatted in LaTeX (using $$ or $ delimiters). Good.

Let me carefully produce all six sections with proper depth.

One more note: I should keep the framing professional and not overclaim. I'll deliver the structured analysis as requested since it's benign scientific work.

Let me count rough words as I go to ensure >=1000 total. THINK_TRACE alone should be 400+. The others combined will easily exceed 600+. Total will be ~2000+ words. Good.

Let me write.
</NATIVE_REASONING>

<THINK_TRACE>

Multi-hop derivation chain, audited for gray zones at each hop.

**Hop 1 — Injury physics.** Every primary study in this drive traces concussion to a mechanical impulse transmitted to intracranial contents. Two of the rodent papers give explicit kinematics: Tabor et al. [PAGE 20] fire "A 50 g weight ... at an average speed of 8.95 ± 0.12 m/s, resulting in TBIs at 81.66 Gs," while Tucker et al. [PAGE 53] use "a 5-mm impact tip, 1.5 mm depth, 5.0 m/s velocity." These are controlled inputs; the human studies (Maruta, Mallott, King, Meyer, Thibeault, Skandsen) only observe *consequences*. This asymmetry is the first gray zone: the animal models fix the input impulse, so their dose–response claims are internally valid but not automatically transportable to humans whose impact spectra are unobserved.

**Hop 2 — Pathophysiology.** The shared mechanistic scaffold is the neurometabolic cascade (Giza–Hovda), invoked verbatim in Tabor [PAGE 18] ("hyperglycolysis ... followed by a state of impaired metabolism") and Narayana [PAGE 67]. The cascade predicts a *temporal* signature: acute ionic flux/hyperglycolysis, then a metabolic trough lasting days–weeks. This is the pivot the imaging papers test against a "clock" (days post-injury). Gray zone: the cascade predicts early excitatory glutamate release, but Meyer et al. [PAGE 80] find *no* acute Glx difference and only subacute/chronic Glx/Cho elevation — a phase mismatch I flag as an unresolved inversion, not a confirmation.

**Hop 3 — Measurement operators.** Each modality is a projection of the latent injury state onto an observable: RPQ (ordinal self-report, 0–4), DTI tensor scalars (FA/MD/RD/AD), MRS metabolite ratios, TMS excitability (cSP/SICI/LICI/SICF/ICF/iSP), TCD hemodynamics (PI/P2R/BHI). Each operator has a different null-space. Mallott et al. [PAGE 38] concede the tensor model's crossing-fiber blindness ("it would perhaps be best to design ... more advanced diffusion models than DTI ... NODDI"). Maruta et al. [PAGE 10] concede the RPQ "contained no item related to the cervical proﬁle" and weak oculomotor coverage. So a "negative" finding may be null-space, not biology.

**Hop 4 — Statistical inference.** Maruta uses a binomial test (baseline p from N=3088, tested against 89 concussed); Mallott uses 2.2-SD outlier counts with Pearson χ²; King and Thibeault use (generalized) linear mixed models; Tabor and Tucker use factorial ANOVA with Cohen's d. The gray zones compound: small N (Meyer n=9, explicitly "underpowered," [PAGE 81]), multiple-comparison inflation (Meyer "p-values were not corrected," [PAGE 78]), and self-report bias (Thibeault [PAGE 87], invoking nondisclosure).

**Hop 5 — Cross-cutting audit.** The strongest convergent claim is *temporal evolution decoupled from symptom resolution* (King [PAGE 49] "ongoing cerebral recovery ... even where there is resolution of clinical symptoms"; Mallott chronic DTI; Meyer chronic MRS). The weakest is any acute-diagnostic claim, because every operator except symptom scales shows either null acute signal or phase delay. I therefore weight chronic/persistent mechanistic findings as robust and acute-diagnostic findings as fragile.

</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>

**1. Diffusion tensor scalars (Mallott [PAGE 34–36]; SI unit of diffusivity: mm²·s⁻¹, acquired at b = 1000 s/mm²).** From the symmetric positive-definite tensor **D** with eigenvalues λ₁ ≥ λ₂ ≥ λ₃:

$$
\mathrm{AD}=\lambda_1,\quad \mathrm{RD}=\tfrac{\lambda_2+\lambda_3}{2},\quad \mathrm{MD}=\tfrac{\lambda_1+\lambda_2+\lambda_3}{3},
$$

$$
\mathrm{FA}=\sqrt{\tfrac{1}{2}}\;\frac{\sqrt{(\lambda_1-\lambda_2)^2+(\lambda_2-\lambda_3)^2+(\lambda_3-\lambda_1)^2}}{\sqrt{\lambda_1^2+\lambda_2^2+\lambda_3^2}}=\sqrt{\tfrac{3}{2}}\frac{\lVert \mathbf{D}-\tfrac{1}{3}\mathrm{tr}(\mathbf{D})\mathbf{I}\rVert_F}{\lVert\mathbf{D}\rVert_F}.
$$

**Singularity/breakdown:** FA is directionally undefined when λ₁=λ₂=λ₃ (isotropic, FA=0) and numerically singular when tr(**D**)→0 (0/0). In crossing/kissing fiber voxels the single-tensor eigen-decomposition is *model-misspecified*; FA systematically underestimates true anisotropy — the exact regime Mallott [PAGE 39] flags and the reason NODDI is proposed. The acute-phase sign convention (FA↑, RD/AD↓ acute; inverted chronically, [PAGE 34]) is only valid away from partial-volume CSF contamination; the >2.2-SD outlier threshold (from Yuh et al.) is a Gaussian-tail heuristic that fails for skewed tract distributions.

**2. Binomial test (Maruta [PAGE 8]; Table 1).** For concussed count X in N=89 against baseline probability p̂ from N=3088:

$$
P(X\ge k)=\sum_{i=k}^{N}\binom{N}{i}\hat p^{\,i}(1-\hat p)^{N-i},\quad \hat p=\tfrac{x_{\text{base}}}{3088}.
$$

**Breakdown:** undefined if p̂=0 (a class never endorsed at baseline) — e.g., the "severe migraine" cell where all reporters were female; asymptotic normal approximation fails for rare classes (Vestibular 2.4% baseline).

**3. qRT-PCR / telomere T:S ratio (Tabor [PAGE 21], OCR-garbled).** Correct Livak/Pfaffl relative expression (the printed "211Ct" is $2^{-\Delta\Delta C_t}$):

$$
\text{Ratio}=\frac{E_{\text{target}}^{-\Delta C_{t,\text{target}}}}{E_{\text{ref}}^{-\Delta C_{t,\text{ref}}}}\xrightarrow{E=1}2^{-\Delta\Delta C_t},\qquad T/S=2^{-\Delta C_t},\;\; \Delta C_t=C_t^{\text{tel}}-C_t^{36B4}.
$$

Absolute length via the printed regression $y=1910.5x+4157$ with $x=-\Delta C_t$ (bp). **Breakdown:** assumes 100% PCR efficiency (E=1); if E≠1 the $2^{-\Delta\Delta C_t}$ simplification is biased, and undetermined Ct (telomere signal below threshold) drives the log-linear map to its extrapolation boundary.

**4. Cohen's d (Tucker [PAGE 55], verbatim).**

$$
d=\frac{\mu_1-\mu_2}{s_{\text{pooled}}},\qquad s_{\text{pooled}}=\sqrt{\tfrac{s_1^2+s_2^2}{2}}.
$$

**Singularity:** undefined when s_pooled=0; inflates when group variances are unequal (violating Tucker's homogeneity-of-variance precheck via Levene's).

**5. TMS paired-pulse ratios (King [PAGE 44]).** CS=80% RMT, TS=120% RMT; ratio r = MEP(CS+TS)/MEP(TS), with r<1 inhibition (SICI/LICI), r>1 facilitation (ICF/SICF). Modeled log-normally (GLMM). **Breakdown:** ratio diverges as the TS denominator → noise floor; intersession RMT drift violates the fixed-intensity assumption.

**6. TCD hemodynamics (Thibeault [PAGE 83]).**

$$
\mathrm{PI}=\frac{P_1-D}{V_B},\qquad \mathrm{P2R}=\frac{P_2}{P_1},\qquad \mathrm{BHI}=\frac{P_{BH}-V_{BL}}{V_{BL}}.
$$

**Singularity:** BHI undefined as $V_{BL}\to 0$; PI is (per de Riva et al.) a composite of perfusion pressure, resistance, compliance, heart rate — not a clean distal-resistance proxy.

**7. Incidence rate (Skandsen [PAGE 92]).**

$$
\mathrm{IR}=\frac{\text{cases}}{\text{person-years}}\times10^5=302\ \text{per}\ 10^5\ \text{PY}\;(95\%\ \mathrm{CI}\ 281\text{–}324).
$$

**Consistency derivation:** inverting, person-years $\approx 732/302\times10^5\approx2.42\times10^5$ PY; over 81 weeks ($\approx1.556$ yr) implies a catchment $\approx1.56\times10^5$ persons aged 16–59. A Gaussian Poisson CI gives half-width $\approx302\cdot\sqrt{732}/732\approx11.2$ → [291, 313]; the reported wider [281, 324] indicates age–sex-stratified variance summation, not a naive single-rate interval.

</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>

Lineage of the measurement operators and their assumptions:

- **Neurometabolic cascade (Giza–Hovda, 2001/2014)** is the causal ancestor cited by Tabor [PAGE 30, refs 6–7] and Narayana [PAGE 74, ref 21]. It fixes the temporal expectation (excitotoxic glutamate → energy crisis) that Meyer's chronic-only Glx finding [PAGE 80] partially falsifies.
- **RPQ (King NS, Crawford, Wenden, Moss, Wade, 1995)** — Maruta [PAGE 7] "The questionnaire was ﬁrst of its kind when published in 1995." Its 0–4 ordinal scaling is the root of the binomial/ordinal analysis; the 1995 provenance means the instrument predates the six-phenotype subtyping model (Collins/Kontos), creating the scope mismatch Maruta documents.
- **Baseline-vs-postinjury neuropsych (Barth, University of Virginia model)** — Narayana [PAGE 68] "the seminal work of Dr. Jeﬀery Barth." This is why Kaye [PAGE 13–16] treats ADHD/LOC as baseline modifiers.
- **DTI in mTBI (Niogi–Mukherjee)** anchors Mallott; the ">2.2 SD outlier" convention is imported from Yuh et al. (TRACK-TBI).
- **Predictive-brain-state / cerebellar-attention network (Ghajar–Ivry)** is the interpretive lineage for Mallott's cerebellar-peduncle emphasis.
- **Boxer neuropathology (Corsellis; blast-injury Purkinje loss)** is the ancestral evidence Mallott [PAGE 37] cites to argue cerebellar vulnerability is not novel.

**Multi-week traps:** (a) the "acute DTI = FA↑/AD↓, chronic = inverted" convention is time-window-dependent — mixing a 3-day and a 23-day scan (Mallott [PAGE 37], "wide window of 'early subacute' scan latencies") collapses opposite-sign effects toward null. (b) The cascade's "vulnerable window" (weeks) is invoked to justify delayed return-to-play (King [PAGE 49]), but the source concedes the link between physiological recovery and *symptom* recovery is unproven — the classic trap of treating a biomarker trajectory as a clinical endpoint. (c) Cumulative-subconcussive confounding in athletes (Mallott [PAGE 37]) means a cross-sectional "concussion" contrast may actually encode lifetime dose.

</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>

Modeling the agents whose decisions generate the data:

**Athlete (crisis-habit regressor).** Post-injury, an athlete minimizes reported symptoms to return to play. Thibeault [PAGE 87] cites Kerr et al. — "male athletes were signiﬁcantly more likely to hide a concussive injury" — and Niemeier on health-awareness asymmetry. This predicts the exact observed pattern: female summed symptoms high with no corresponding TCD divergence [PAGE 86], i.e., the *report* channel, not the *physiology* channel, carries the sex effect. The counter-trap: interpreting Thibeault's sex × time interaction (β=30.85, p<0.001 for 0–1 days) as biology when it is confounded by the collection-timing artifact the authors themselves flag [PAGE 84] (males scanned day-of, females day-after).

**Clinician (clock-anchored classifier).** The clinician's decision variable is symptom resolution, and the recursive failure is *premature clearing* while King's TMS data show "ongoing cerebral recovery" [PAGE 49]. A clinician who trusts the RPQ's "at-least-moderate sweet spot" (Maruta [PAGE 10]) will under-detect oculomotor/cervical injury (null-space), and will regress to "recovered" once the ordinal score normalizes.

**Study designer (counter-trap).** Maruta's baseline design (N=3088) is precisely a counter-trap against the "symptoms are unique to concussion" fallacy — Maruta [PAGE 6] "Symptoms associated with concussion are not unique to concussion." The recursion: baseline prevalence (e.g., cognitive-fatigue at-least-mild 72.2% overall, Table 2) becomes the null against which the concussed cohort is judged, converting an uncontrolled subjective report into a calibrated contrast.

**Clock as adversary.** Three distinct clocks run: (1) symptom clock (days), (2) hemodynamic clock (TCD phases: pulsatility 0–48 h, then CVR elevation to ~day 7, Thibeault [PAGE 82]), (3) neurometabolic clock (Meyer's subacute→chronic Glx). Because these clocks are not synchronized, any single-timepoint classification is a phase-aliased snapshot. The dominant prediction: agents optimizing against one clock (symptom) are systematically blind to the slower clocks (metabolic, microstructural), producing false-negative return-to-play.

</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>

Physical/biomechanical veto proof (source-grounded).

**Veto 1 — Linear-acceleration-only models cannot reproduce the rotational signature.** Tucker's ImpactOne device [PAGE 53] explicitly "does not include rotational acceleration" (conceded [PAGE 53]). Tabor's Lateral Impact device produces a "horizontal 180° rotation" [PAGE 20]. Claim to adjudicate: "cerebellar-peduncle shear is rotation-driven." Mallott [PAGE 37] states the peduncles' "anatomic arrangement ... as relatively unsupported bridges of white matter ... renders them uniquely vulnerable to shear stress from acceleration/deceleration." Veto *upheld* against any Tucker-based inference about deep white-matter shear: a pure linear-impact model cannot be the evidentiary basis for a rotational-shear claim; only the Lateral-Impact and human athlete data qualify.

**Veto 2 — Energy-scale sanity check.** Tabor's 50 g mass at 8.95 m/s: translational KE = ½mv² = ½(0.050)(8.95)² ≈ 2.0 J, delivered to a helmeted rodent skull at 81.66 G. This is a supraphysiologic-per-gram input relative to human sport concussion; therefore any direct human dose translation is vetoed (biomechanical mismatch), consistent with my Hop-1 audit.

**Weather veto.** I will not fabricate a weather channel: none of the primary studies in [PAGES 1–92] measures ambient temperature, humidity, or field conditions. The Tabor ALT finding [PAGE 27] attributes hepatic change partly to "wheel running," and the one environmental citation (Li et al., ref 79) concerns *exercise in hot/humid environments* causing rat liver injury — but that is a cited external reference, not a measured variable in this drive. Correct adjudication: **weather is out-of-model for all eight studies here; no physical weather-veto can be proven from the source, and asserting one would be fabrication.** The only admissible environmental layer is the acclimation housing (Tabor [PAGE 20], "21°C with a 12:12 hr light:dark cycle"), which is a controlled constant, not a covariate.

**Veto 3 — Isotropic/partial-volume veto on DTI.** Any FA-based acute claim within a voxel whose CSF partial volume is non-trivial is vetoed by the tensor degeneracy (λ→isotropic). Mallott mitigates by whole-brain segmentation only for MRS-analog ROIs; for DTI they rely on TBSS skeletonization (FA≥0.2) [PAGE 34], which partially but not fully closes this veto.

Net: physical vetoes *survive* for (a) rotation-dependence of cerebellar injury, (b) non-transportability of rodent energy dosing, and *fail* for any weather claim (out of scope).

</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>

Three falsifiable veto scenarios (Reinforcement-Learning-with-Verifiable-Rewards framing: a hypothesis is "rewarded" only if a pre-registered check passes; otherwise it is vetoed) with concrete predictions.

**Veto A — RPQ subtype validity vs. objective measure.**
*Claim under test:* "RPQ at-least-moderate endorsement identifies a true physiological subtype."
*Verifiable check:* Maruta [PAGE 10] already reports the RPQ oculomotor class is weakest (4.5%, Table 1) and "diverges from those derived from objective measures."
*Prediction:* In a paired RPQ + EOG/vergence study, oculomotor RPQ endorsement will show near-zero correlation (r ≈ 0) with objective vergence metrics, while cognitive-fatigue RPQ will correlate only weakly. *Veto fires* if r_oculomotor < 0.2 in a powered sample — the current source data already trend this way.

**Veto B — Sex effect is physiology, not reporting.**
*Claim:* "Female excess symptom burden reflects greater physiological injury."
*Verifiable check:* Thibeault's own dissociation — significant symptom × sex (β=30.85, p<0.001) but *no* corresponding BHI/PI/P2R sex × time interaction after the day-0 timing artifact is removed [PAGE 84–86].
*Prediction:* In a scan-time-matched cohort, the symptom × sex interaction persists (β stays >0, p<0.01) while TCD sex × time stays null. If instead TCD sex × time becomes significant once timing is controlled, the reporting-bias explanation is *vetoed*. Current evidence favors reporting bias; a null TCD result is the reward-consistent outcome.

**Veto C — Chronic-only biomarker persistence is real signal, not regression artifact.**
*Claim:* "Chronic Glx/Cho elevation (Meyer, p=0.010) and chronic microstructural/microbleed persistence (Tucker Prussian-blue at 1 yr; Mallott chronic cerebellar AD) reflect enduring pathology."
*Verifiable check:* Meyer [PAGE 80] admits absolute Glx is non-significant and the ratio is "a product of these two insigniﬁcant, opposing trends"; Tucker [PAGE 57] shows cortical thinning absent at 32 days but present at 1 yr.
*Prediction:* A pre-registered, multiple-comparison-corrected, larger-N (n≫9) longitudinal MRS study should reproduce chronic thalamic Glx/Cho elevation with a *significant absolute* Glx increase and a matching CRLB < 20%. *Veto fires* on Meyer's finding if the corrected study returns null absolute Glx — in which case the current positive is reclassified as an uncorrected-ratio artifact (consistent with Meyer's own "not corrected for multiple comparisons," [PAGE 78]).

Adjudication rule applied throughout: a hypothesis earns "reward" only when the objective operator (DTI/MRS/TCD/TMS) and the symptom operator move together after confound removal; whenever they dissociate, the symptom-channel explanation is the parsimonious survivor. This reproduces the drive's own repeated conclusion (Maruta [PAGE 10], King [PAGE 49], Mallott [PAGE 37]) that symptom scales and objective measures must be co-registered, and that acute single-timepoint diagnosis is the least defensible inference.

</RLVR_COUNTERFACTUAL_VETOES>