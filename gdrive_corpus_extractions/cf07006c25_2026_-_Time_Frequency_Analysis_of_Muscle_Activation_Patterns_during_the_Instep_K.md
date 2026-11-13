---
source: "2026 - Time Frequency Analysis of Muscle Activation Patterns during the Instep Kick in Elite and Amateur Soccer Players - Zhu et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Journal of Sports Science and Medicine/In Press/2026"
pages: 15
model: deepseek/deepseek-v4.1-flash-1017
words: 8985
---

<NATIVE_REASONING>
The user wants a deep multi-section analysis of this sports science paper. Strict invariants: no betting lines, no toy equations, formal LaTeX with units, page citations with verbatim quotes, ≥1000 words across specified XML sections. The paper is about time-frequency EMG analysis of instep kick in elite vs amateur soccer players.

Note: I should be careful — the paper has no equations visible in text (they were images), but equations (1)-(6) referenced. I can reconstruct the Morlet CWT formally and note page citations. Also need to note the "DRIVE SOURCE" framing — this seems like a template for sports betting analysis, but I must not mention betting lines. I'll treat it as a scientific/analytical deep-dive. Also there's a "RETROCAUSAL_GENEALOGY" and "RECURSIVE_THEORY_OF_MIND" — these are odd sections for a betting framework. I'll interpret them scientifically: lineage of methods (Morlet wavelet, von Tscharner intensity analysis, SPM1D, PCA), and habit regression vs counter-trap vs clock — I can map to "crisis habit regression" as neuromuscular habit under pressure, counter-trap as the counterfactual where the amateur pattern would be superior, and "clock" as normalized time axis.

CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto proof — biomechanical vetoes (fatigue, surface, ball pressure, turf, temperature affecting EMG). Weather: indoor artificial turf, 10 psi ball.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable veto scenarios with predictions. RLVR = reinforcement learning with verifiable rewards presumably. I'll give falsifiable predictions tied to the paper's numbers.

Let me be careful about exact numbers:
- Phase 1 PC3: 54–75% normalized time, peak t = 7.62, p < 0.001, Hedges' g = 2.96, critical threshold 5.41, cluster extent 21%.
- Phase 2 PC1: 60–70%, peak t = −9.88, p < 0.001, Hedges' g = −2.03, critical threshold 5.88, cluster extent 9%.
- Bonferroni α_adjusted = 0.05/12 = 0.0042.
- n = 15 + 15, G*Power, Cohen's d = 1.06, power 0.80.
- Morlet center frequencies: 6.90, 19.29, 37.71, 62.09, 92.36, 128.48, 170.39, 218.08, 271.50, 330.63, 395.46 Hz.
- EMG 2000 Hz, band-pass 20–450 Hz, 4th order zero-phase Butterworth.
- Kinematics 200 Hz, 32 markers, low-pass 10 Hz.
- 11 × 101 intensity matrix, 77-dimensional feature vector (7 muscles × 11 bands), 101 time points.
- Normalization: eqs (3)-(6), total intensity sum, median of three trials, divide, average.
- Sensitivity: max-intensity normalization; regression adjustment p = 0.012, 0.018, 0.016, 0.023.
- Ball: size 5, 10 psi, indoor artificial turf, habitual shooting angle 30–45°, approach ≤ 2 m, 30-s rest, three valid kicks, ±5% target speed.
- Attempts: elite 3.47 ± 0.64, amateur 3.67 ± 0.72, p = 0.429; invalid trials 7/52 (13.5%) vs 10/55 (18.2%), p = 0.601.
- Ball speed reliability ICC = 0.96, SEM 0.21 m·s⁻¹. Event detection ICC 0.96, 1.2 frames = 5.0 ms.
- Table 3 peak intensities.
- Table 1 demographics.

I need verbatim quotes with [PAGE N] markers. Let me pick exact sentences.

Quotes I can use:
- [PAGE 1]: "In Phase 1, PC3 showed a significant between-group difference at 54 - 75% of the normalized time (peak t = 7.62, p < 0.001, Hedges' g = 2.96), with higher scores in the elite group."
- [PAGE 1]: "These findings suggest that skill-level differences are expressed as phase-specific redistribution of muscle and frequency-band activity within critical time windows, rather than as a simple global difference in activation magnitude."
- [PAGE 3]: "the final SPM1D inference was evaluated using a Bonferroni-adjusted threshold across the 12 PC-phase comparisons."
- [PAGE 5]: "The center frequencies of the Morlet wavelets were 6.90, 19.29, 37.71, ..." — actually that's on page 5 bottom → page 6 top. The text: "The center frequencies of the Morlet wavelets were 6.90, 19.29, 37.71," at end of PAGE 5, continuing on page 6: "62.09, 92.36, 128.48, 170.39, 218.08, 271.50, 330.63, and 395.46 Hz (von Tscharner, 2000)."
- [PAGE 5]: "Rectification was not performed before wavelet transformation because wavelet intensity was subsequently calculated as the squared magnitude of the complex wavelet coefficients"
- [PAGE 2]: "wavelet-derived frequency-band characteristics should be interpreted as descriptive features of the recorded EMG signal rather than as direct evidence of performance mechanisms."
- [PAGE 11]: "Importantly, this difference should not be interpreted simply as greater biceps femoris effort."
- [PAGE 7]: "A cluster was considered statistically significant only when it exceeded the SPM1D critical threshold under this adjusted alpha level."
- [PAGE 8]/[PAGE 9] Table 4 numbers.

Formal LaTeX equations:
Morlet CWT:
$$ W(f,t) = \int_{-\infty}^{\infty} x(\tau)\, \psi_f^{*}(\tau - t)\, d\tau $$
with ψ_f(τ) = ... Morlet: ψ_f(u) = (1/√(2π)) exp(2πi f u) exp(−u²/(2σ_f²))? Actually von Tscharner's wavelets are non-linearly scaled Morlet. I'll present a general form:

$$\psi_f(u)=\frac{1}{\sqrt{2\pi}\,\sigma_f}\exp\!\left(-\frac{u^2}{2\sigma_f^2}\right)\exp\!\left(i\,2\pi f u\right)$$

Units: x(t) in volts (or µV), W(f,t) in V·s (if integrating over dτ), or in V if using normalized convolution. Intensity I(f,t) = |W(f,t)|² in V²·s² or normalized dimensionless after scaling. Note that the paper uses normalized intensity (dimensionless). I should state units carefully: sEMG recorded in mV/µV; W in V·s; I in V²·s²; after normalization Ĩ dimensionless.

Also time-frequency resolution tradeoff: Δt·Δf ≥ 1/(4π) for the Gaussian envelope (uncertainty principle). For Morlet: Δt = σ_f, Δf = 1/(2πσ_f). Provide exact singularity: at f = 6.90 Hz band with band-pass at 20 Hz, the wavelet band center is below the high-pass corner → the lowest band is a residual artifact-dominated band; "interpreted cautiously as a residual low-frequency contribution after preprocessing rather than as unfiltered movement artifact" [PAGE 5].

Breakdown regimes:
1. Boundary/edge effects: CWT at phase boundaries (t → 0 and t → 1) — cone of influence; Phase 2 cluster at 60–70% is mid-phase, safe; but Phase 1 heat maps report 80–100% intensity → edge-affected.
2. Normalization coupling: dividing by total intensity K makes the features compositional (sum-to-one constraint) — induces spurious negative correlations; PCA loadings then not interpretable as magnitude. Sum constraint: Σ_f Σ_t Ĩ = 1 exactly for each participant-muscle-phase. That's an exact algebraic constraint — good "singularity": the covariance matrix of the 77-dim feature vectors has rank ≤ 76 within each muscle block? Actually across the 101×11 matrix per muscle, the sum over all entries equals 1. In the concatenated z-scored 77-dim vectors at each time point, the constraint is over the whole matrix, not per-time-point. But per-muscle across time... The normalization total is over all 11×101 elements, so at any single time point the 11 band values don't sum to a constant. Hmm. Still, the total across the entire matrix is fixed to 1 → one linear dependency across all time points. I can state: rank deficiency of at most 1 per participant-muscle-phase in the full 1111-dim space; since PCA is on 77-dim per-time-point vectors, the constraint is not per-time-point, but the total energy collinearity still biases toward "low-frequency dominance" reading. Let me be precise and honest: state the constraint Σ_{f,t} Ĩ = 1 (exactly, by construction from Eq. 5), which is a global rather than per-time-point constraint, so it does not create an exact rank deficiency in the 77-dim per-time-point PCA input; but it does create a compositional distortion where bands with larger raw variance get suppressed (because K is dominated by low-frequency power). That's a defensible gray-zone audit.

3. Multiple comparison: Bonferroni over 12 PC-phase comparisons but SPM1D cluster inference within each; critical thresholds 4.23–7.19 vary because of SPM1D's nonparametric/parametric cluster thresholding depending on df and smoothness of the trajectory (actually critical threshold in SPM1D depends on the trajectory's temporal smoothness RESEL count). Good: Phase 1 PC3 critical threshold 5.41, Phase 2 PC1 5.88, Phase 2 PC2 7.19 — the higher threshold for PC2 suggests lower smoothness → more resels. That's a gray-zone: thresholds differ per comparison, so peak t comparison across PCs is invalid; can't rank effect magnitude by peak t.

4. Effect size vs cluster extent: Phase 1 PC3 g = 2.96 with 21% extent; Phase 2 PC1 g = −2.03 with 9% extent but peak t = −9.88 larger than 7.62 — variance differences. The g smaller but t larger implies lower within-cluster SD in Phase 2 PC1. Good multi-hop point.

5. Sign convention: Hedges' g calculated elite minus amateur; negative = higher in amateur. PC1 Phase 2 negative → amateur higher. But the paper's text at page 9–10 says "PC1 scores significantly lower in the elite group" and then in discussion "amateur players showed greater reliance on medial gastrocnemius-related high-frequency pattern". But wait — the abstract says "In Phase 2, PC1 differed significantly... with higher scores in the amateur group." Consistent.

But there's a subtlety: PC sign is arbitrary in PCA (eigenvector sign). So the interpretation "positive PC3 scores primarily reflected a greater relative contribution of mid- to high-frequency biceps femoris intensity" is a post-hoc sign assignment. That's a legitimate gray-zone: PCA sign indeterminacy means the direction claim depends on the loading sign convention, which is not identifiable from the data. Excellent audit point.

6. G*Power based on Cohen's d = 1.06 but observed g = 2.96 and −2.03 → post-hoc power very high, but the a priori assumption was for a univariate t-test, whereas the actual inference is a cluster-level SPM test with Bonferroni over 12 → the a priori power calculation does not correspond to the actual test. "the G*Power calculation was treated as an approximation" [PAGE 3]. Good.

7. Dominant leg, position distribution "examined descriptively" — no statistical test; potential confounding.

8. Ball speed as a validity gate ±5% of individual target → this is a self-referenced criterion, so it removes between-group ball-speed differences by design (each participant kicks to their own mean). That means the study cannot test whether elite kick harder — and indeed it doesn't. Good point: the design deliberately equalizes output speed within subject; between-group comparisons are at matched relative intensity.

Now for the "RETROCAUSAL_GENEALOGY": lineage — Morlet (1946ish), Gabor 1946, Grossmann & Morlet 1984, Mallat 1989 multiresolution [PAGE 13 ref], Torrence & Compo 1998 [PAGE 13], von Tscharner 2000 intensity analysis with 11 non-linearly scaled wavelets [PAGE 5-6, PAGE 13], Wakeling & Rozitis 2004, SPM1D (Friston cluster inference lineage — not cited but implied), PCA (Bro & Smilde 2014; Jolliffe & Cadima 2016; Shlens 2014). Multi-week traps: e.g., the "11-band von Tscharner filter bank" is a legacy choice from 2000 running/cycling EMG with 1000 Hz sampling; adopting it at 2000 Hz sampling and 20–450 Hz band-pass creates a factor-2 oversampling and a first band (6.90 Hz) below the high-pass corner. Multi-week trap: teams that copy the pipeline without re-deriving wavelet scales get a dead band.

Also: "Medial gastrocnemius" vs "biceps femoris" — the historical claim that hamstrings brake the shank near contact (Kellis & Katis 2007; Brophy et al. 2007), and the counter-lineage (Nunome et al. 2006 segmental dynamics) that quadriceps dominate and hamstrings are relatively quiet during instep kick. There's a real literature conflict: some studies report BF activity is low during the kick's acceleration. The retrocausal point: the 2026 result re-reads the 2007 Brophy finding through a spectral lens; if you only look at amplitude (2007) you'd see nothing, because the effect is a redistribution not a magnitude change.

RECURSIVE_THEORY_OF_MIND: "Crisis habit regression vs counter-trap vs clock." Interpretation: under pressure/fatigue, athletes regress to dominant habitual motor patterns (crisis habit regression) — the amateur MG high-frequency post-contact pattern is arguably a "protective/habitual" pattern; the elite pattern is a trained suppression. Counter-trap: the intuitive coaching response ("train more plantar flexor power") is the counter-trap because the amateur already over-expresses MG; more MG work could deepen the pattern. The clock: the normalized-time axis (101 points) destroys absolute duration information — 60–70% of Phase 2 is a different absolute duration for elite vs amateur if phase durations differ; the paper normalizes time, so a between-group difference in the normalized window could be an artifact of different absolute phase durations. This is a key gray-zone: time normalization confounds timing with duration. Let me check: paper says "linearly interpolated and time-normalized to 101 time points". Yes [PAGE 6]. And it does not report absolute phase durations. So a group difference at 60–70% normalized could reflect duration differences. Excellent.

CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto.
- Turf: indoor artificial turf, standardized; turf–shoe traction affects foot planting and support-leg behavior, but only kicking leg EMG recorded → support-leg layer is a veto on generalization.
- Ball pressure 10 psi = 68.9 kPa (10 psi × 6894.76 Pa/psi = 68,947.6 Pa ≈ 68.9 kPa). Standard is 0.6–1.1 bar = 60–110 kPa, so 10 psi ≈ 0.69 bar, mid-range. Contact time and impulse depend on pressure; a softer ball lengthens contact and shifts spectral content.
- Temperature/humidity: not reported. Cold reduces muscle temperature → lowers conduction velocity → shifts EMG spectrum downward (well-documented). Since the key findings are spectral redistributions, unreported ambient temperature is a genuine cross-layer veto for the frequency-band interpretation. That's a strong, defensible point. Cite pages 5 for "Testing was conducted on an indoor artificial turf surface" and note absence of thermal/humidity reporting.
- Electrode: 10 mm inter-electrode distance fixed, SENIAM. Subcutaneous adiposity not measured → tissue low-pass filtering varies between groups (elite vs amateur body mass similar, p = 0.520, but body fat not reported).
- Biomechanical: EMG amplitude ≠ force [PAGE 2]; no inverse dynamics, no joint moments, no ball speed reported per group (only validity). So no mechanical outcome layer.
- Phase definition: maximum hip extension via sagittal hip angle from skin markers; 5 ms event reliability vs 2000 Hz EMG → fine, but 1.2 frames at 240 fps video for ball contact = 5.0 ms; EMG at 2000 Hz gives 0.5 ms resolution, so contact timing uncertainty (5 ms) spans 10 samples. At ~40 Hz wavelet band, period = 25 ms, so 5 ms = 20% of a cycle. Acceptable but nonzero.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable veto scenarios with predictions.
1. Duration-normalization veto: if absolute Phase 2 durations differ by >X ms between groups, the 60–70% window maps to non-overlapping absolute intervals. Prediction: re-running with absolute-time warping (or reporting phase durations) will shrink or abolish the PC1 cluster; falsifiable by requesting duration data. Veto rule: if |ΔT_phase2| / T̄ > 0.10, treat the cluster as uninterpretable in absolute time.
2. Sign-indeterminacy / loading-stability veto: bootstrap the PCA (resample participants, recompute global PCA) and check the congruence of PC1/PC3 loadings (e.g., Tucker congruence coefficient ≥ 0.95). Prediction: PC1 (Phase 2) will be stable (huge t = −9.88, 9% extent), PC3 (Phase 1) will be less stable because g = 2.96 but only 21% extent and mid-frequency BF loadings are near-degenerate with adjacent bands. If congruence < 0.85, the "BF mid-frequency" attribution is vetoed.
3. Ball-pressure / contact-time veto: if ball pressure is varied within the legal range (0.6–1.1 bar), contact duration and impulse change; prediction — the post-contact MG high-frequency cluster is contact-transient-driven and will scale with pressure while the pre-contact BF cluster will not. Veto rule: if PC1 Phase 2 cluster amplitude changes monotonically with pressure while PC3 does not, then PC1 is a measurement/impact artifact rather than a skill marker.

Maybe also a fatigue veto as a 4th but only 3 needed.

Also I should note: "zero betting lines" — no odds. Fine.

Word count: need ≥1000 words across sections; likely I'll write 2500+. THINK_TRACE ≥400 words.

Let me also carefully derive quantitative details.

Sampling: EMG 2000 Hz → Nyquist 1000 Hz. Band-pass 20–450 Hz. Highest wavelet center 395.46 Hz. For a Morlet with bandwidth, the effective support extends above 450 Hz — so the top band (395.46 Hz) is partially attenuated by the anti-alias/band-pass filter. That's a second gray-zone: top band and bottom band are both filter-attenuated. Report may show lower intensity in top band as filter artifact.

Wavelet bandwidth: von Tscharner's non-linear scaling gives roughly constant Q (quality factor). Check: adjacent center frequencies: 19.29/6.90 = 2.80; 37.71/19.29 = 1.955; 62.09/37.71 = 1.646; 92.36/62.09 = 1.487; 128.48/92.36 = 1.391; 170.39/128.48 = 1.326; 218.08/170.39 = 1.280; 271.50/218.08 = 1.245; 330.63/271.50 = 1.218; 395.46/330.63 = 1.196. So the ratio decreases toward 1 → not constant Q; it's a "non-linear scaling" where relative bandwidth increases with frequency. Actually the ratio → smaller means bands get relatively closer, meaning Q increases. von Tscharner's wavelets: bandwidth increases with frequency so that time resolution improves. Hmm. Let me just compute Δf between adjacent bands as fraction of center: (37.71−19.29)/28.5 ≈ 0.646 → 65%. (62.09−37.71)/49.9 ≈ 0.488. (92.36−62.09)/77.2 = 0.392. (128.48−92.36)/110.4 = 0.327. (170.39−128.48)/149.4 = 0.281. (218.08−170.39)/194.2 = 0.246. (271.5−218.08)/244.8 = 0.218. (330.63−271.5)/301 = 0.196. (395.46−330.63)/363 = 0.178. So the fractional spacing shrinks → higher bands are denser in relative terms. That means the filter bank oversamples the high-frequency end relative to low, or the wavelets broaden more than the spacing... Actually in von Tscharner's scheme, the wavelets are spaced so that each is about 1.5× the previous bandwidth; the intensity pattern is then "gamma" like. I'll describe it factually: adjacent-band center-frequency ratios decrease monotonically from 2.80 to 1.20, so the bank is not octave-spaced; the low bands (6.90, 19.29) are widely separated and the high bands are densely packed. Consequence: any "mid- to high-frequency" attribution spans a variable-width band set and the PC loading interpretation must specify which bands, which the paper does not (it gives "mid- to high-frequency" verbally). That's a strong audit point: the paper's qualitative band labels ("low to low mid 6.90–128.48 Hz", "low 6.90–62.09 Hz") are used inconsistently — Phase 1 says intensity "mainly distributed within the low to low mid frequency range, approximately 6.90 to 128.48 Hz" while Phase 2 says "low frequency range, approximately 6.90 to 62.09 Hz". Same word "low" for different ranges. And the PC3 attribution is "mid- to high-frequency" — but Table 3 peak frequencies are all ~37.71 Hz, which is 2nd–3rd band. So "mid- to high" must mean 92–395 Hz. Fine, but the descriptive heat maps say main intensity is 6.90–128.48 Hz, which barely overlaps "high." This is a genuine internal-tension: the loadings driving PC3 are claimed as "mid- to high-frequency biceps femoris" while the intensity maps show BF peak at 37.71 Hz. Actually "mid-frequency components of the biceps femoris" in the abstract. Slight inconsistency between abstract "mid-frequency" and discussion "mid- to high-frequency". Worth flagging as a gray-zone/lexical drift. Yes! Abstract [PAGE 1]: "centered on mid-frequency components of the biceps femoris". Discussion [PAGE 10]: "PC3 was mainly associated with mid- to high-frequency components of the biceps femoris". That's a verifiable lexical drift. 

Also Hedges' g = 2.96 vs 2.03: with n=15 per group, g of 2.96 is enormous (overlap ~7%). Fine.

Another point: 12 PC-phase comparisons with Bonferroni α = 0.0042, but SPM1D cluster p-values reported as "< 0.001" — the paper says "Adjusted p values were calculated using Bonferroni correction across the 12 PC phase comparisons" (Table 4 caption). But Table 4 reports p < 0.001 for both. The Bonferroni-adjusted p for a cluster with p < 0.001/12 would still be < 0.012; reporting "< 0.001" as adjusted is ambiguous. Gray-zone: whether the reported p is cluster-level or adjusted is not fully separable. I'll note it.

Also Phase 2 PC3 peak t = −4.71 with critical threshold 5.49 → non-significant, cluster extent 0. So the second-largest t doesn't survive. Fine.

Also note: critical thresholds vary 4.23–7.19. In SPM1D, the critical threshold depends on the RESEL count from temporal smoothness of the residual trajectories. Phase 2 PC2 had threshold 7.19 (highest) → fewest resels → least smooth trajectory → highest threshold needed. Actually more resels → higher threshold. Hmm: with more independent resels, the maximum of the random field is larger → threshold higher. So threshold 7.19 implies more resels = rougher trajectory. And PC1 Phase 2 threshold 5.88 with peak t −9.88 → margin 4.00. PC3 Phase 1 threshold 5.41, peak 7.62 → margin 2.21. So PC1's exceedance is proportionally larger in threshold units. Good.

Now, "clock" in RECURSIVE_THEORY_OF_MIND: the normalized-time clock. Also the 30-s rest interval, 3 valid kicks, and the 24-h no-high-intensity rule — a fatigue-avoidance clock. And the "counter-trap": an analyst might treat PC1's amateur over-expression as "amateur tries harder" — the trap. The correct reading requires the loading structure, which is not published in the extracted text (PC loading values are absent from the provided pages). That's a hard veto: the paper's central mechanistic claim (BF-dominant PC3; MG-dominant PC1) rests on loadings that are only described verbally and appear in Figure 4 (panel graphics) not numerically. Verifiable: request the loading matrix.

Great — that's a strong, verifiable audit point.

Let me now also do the formal equations carefully.

Equation (1) Morlet CWT as given in the paper (image). I'll reconstruct:

$$W(f,t)=\int_{-\infty}^{+\infty} x(\tau)\,\psi_f^{*}(\tau-t)\,d\tau$$

Units: x in µV, dτ in s, ψ dimensionless (normalized L2) → W in µV·s. Alternatively with the 1/√s normalization, ψ_f(τ−t) has units s^{-1/2} → W in µV·s^{1/2}. I'll be explicit and state both conventions, noting the paper does not specify normalization, which propagates to Eq. (2) units.

Equation (2): $$I(f,t)=|W(f,t)|^2$$ units µV²·s² (or µV²·s).

Equations (3)–(6):
(3) K_{s,r,m,p} = Σ_{f} Σ_{t} I_{s,r,m,p}(f,t) — units µV²·s², over 11×101 samples. Actually summing discrete samples of a continuous density; if I is a density per (Hz·s) then sum approximates integral. Paper calls it "total wavelet intensity". Units: as computed by discrete sum, µV²·s² × (number of samples) — messy. I'll define as discrete sum and note units are "sample-counted intensity" and that the discretization means K is grid-dependent.

(4) K^{median}_{s,m,p} = median{K_{s,r,m,p} : r = 1,2,3}
(5) Ĩ_{s,r,m,p}(f,t) = I_{s,r,m,p}(f,t) / K^{median}_{s,m,p} — dimensionless, units Hz⁻¹... actually 1/(samples). Dimensionless per grid cell.
(6) Ī_{s,m,p}(f,t) = (1/3) Σ_r Ĩ_{s,r,m,p}(f,t)

Then PCA:
(7) Z: z-score standardize each of 77 columns: z_j = (x_j − μ_j)/σ_j
(8) Covariance C = (1/(N−1)) Z^T Z, eigendecomposition C v_k = λ_k v_k, PC scores s_k(t) = z(t)^T v_k
Explained variance ratio λ_k / Σλ.

Then SPM1D t-statistic:
(9) t(t) = (μ_E(t) − μ_A(t)) / sqrt(σ_E²(t)/n_E + σ_A²(t)/n_A) — actually SPM1D uses pooled variance by default in the two-sample test:
t(t) = (x̄_E(t) − x̄_A(t)) / sqrt(s_p²(t)(1/n_E + 1/n_A)), with s_p² = ((n_E−1)s_E² + (n_A−1)s_A²)/(n_E+n_A−2), df = 28.

Cluster: for a supra-threshold set A = {t : |t(t)| > u_α}, cluster extent = measure(A). Cluster p-value from random field theory: P(max_{A} t > u) ≈ ... or via permutation. The paper uses the parametric SPM1D.

Effect size: Hedges' g = (x̄_E − x̄_A)/s_p × J, J = 1 − 3/(4(n_E+n_A)−9) = 1 − 3/(4·30−9) = 1 − 3/111 = 0.9730. So the small-sample correction is ~0.973.

Bonferroni: α_adj = 0.05/12 = 4.1667×10⁻³.

Uncertainty principle for the Morlet: Δt Δf ≥ 1/(4π) ≈ 0.0796 (in units of s·Hz, dimensionless). With Gaussian envelope ψ ∝ exp(−u²/(2σ²))exp(i2πf₀u), we get σ_t = σ, σ_f = 1/(2πσ), so σ_t σ_f = 1/(2π) ≈ 0.159. Time resolution at band f: if Q = f/Δf constant, σ_t = Q/(2πf). For f = 395.46 Hz and, say, Q = 3 → σ_t = 3/(2π·395.46) = 1.21 ms. For f = 37.71 Hz, σ_t = 12.7 ms. Ball contact duration in instep kicking is typically ~8–12 ms (literature). So the low bands (6.90, 19.29, 37.71 Hz) have envelopes that are comparable to or longer than the contact event itself → they cannot resolve contact transients; the high bands can. That's a quantitative, checkable statement — and it grounds the claim that "high-frequency = brief, rapidly changing activity" [PAGE 3]. Also implies the PC1 MG "high-frequency" post-contact cluster is the only part of the analysis with adequate temporal resolution to resolve contact-adjacent events. Nice.

Also: at 37.71 Hz with 101 normalized time points, if Phase 2 duration T₂ ≈ 200 ms, Δt_norm = 2 ms per point. 60–70% = 20 ms window = 10 points. Cluster extent of 9% = ~9 points. Consistent. If T₂ ≈ 300 ms, window = 30 ms. Anyway.

Now compute: elite vs amateur ball speed not reported per group. Right.

Let's also flag: "Hedges' g calculated from participant-level mean PC scores within each significant cluster" — but the cluster was selected because it maximized the between-group difference → the g is selection-biased (winner's curse). With α = 0.0042 and n=15, the observed g is upward-biased. This is a well-known circularity: effect size computed on the same data used to select the region. Strong audit point; prediction: cross-validated g will be ~40–60% smaller.

Good. Now, the sections.

Let me draft.

Structure:
1. <THINK_TRACE> ≥400 words, multi-hop derivation + gray-zone audit.
2. <SOURCE_OPERATORS_AND_EQUATIONS> equations with units, page cites, breakdown regimes.
3. <RETROCAUSAL_GENEALOGY>
4. <RECURSIVE_THEORY_OF_MIND>
5. <CROSS_LAYER_VETO_ADJUDICATION>
6. <RLVR_COUNTERFACTUAL_VETOES>

Total ≥1000 words, I'll aim ~3000.

Be careful: no betting lines. Avoid "odds", "spread", "total", "moneyline". I'll avoid all gambling framing entirely — treat as research audit. Actually the system prompt says never mention them; I just won't.

Let me write with precise numbers and page cites.

For the "DRIVE SOURCE" framing — I'll acknowledge the document identity at the top briefly.

Let me write.

Word budget: THINK_TRACE ~600 words; SOURCE_OPERATORS ~800; RETROCAUSAL ~400; RTOM ~400; CROSS_LAYER ~450; RLVR ~450. Total ~3100. Good.

Careful with verbatim quotes — must be exact from the text.

Quotes to use verbatim:
1. [PAGE 1] "In Phase 1, PC3 showed a significant between-group difference at 54 - 75% of the normalized time (peak t = 7.62, p < 0.001, Hedges' g = 2.96), with higher scores in the elite group."
2. [PAGE 1] "These findings suggest that skill-level differences are expressed as phase-specific redistribution of muscle and frequency-band activity within critical time windows, rather than as a simple global difference in activation magnitude."
3. [PAGE 1] "Elite players showed a more temporally focused pre-contact activation pattern centered on mid-frequency components of the biceps femoris, whereas amateur players showed greater reliance on higher-frequency components of the medial gastrocnemius during the post-contact follow-through."
4. [PAGE 2] "wavelet-derived frequency-band characteristics should be interpreted as descriptive features of the recorded EMG signal rather than as direct evidence of performance mechanisms."
5. [PAGE 3] "the final SPM1D inference was evaluated using a Bonferroni-adjusted threshold across the 12 PC-phase comparisons."
6. [PAGE 5] "Rectification was not performed before wavelet transformation because wavelet intensity was subsequently calculated as the squared magnitude of the complex wavelet coefficients"
7. [PAGE 5] "The 20 - 450 Hz band-pass range was selected as a conventional preprocessing range for surface EMG during dynamic movement."
8. [PAGE 6] "The center frequencies of the Morlet wavelets were 6.90, 19.29, 37.71, 62.09, 92.36, 128.48, 170.39, 218.08, 271.50, 330.63, and 395.46 Hz (von Tscharner, 2000)." — this sentence spans pages 5/6; the marker on page 5 ends with "The center frequencies of the Morlet wavelets were 6.90, 19.29, 37.71," and page 6 begins "62.09, ...". So I'll cite [PAGE 5–6] and quote the full sentence with a note. Better: quote "the lowest wavelet band was interpreted cautiously as a residual low-frequency contribution after preprocessing rather than as unfiltered movement artifact" [PAGE 5].
9. [PAGE 6] "The time-frequency intensity within each phase was then linearly interpolated and time-normalized to 101 time points, yielding an 11 × 101 time-frequency intensity matrix for each muscle"
10. [PAGE 7] "A cluster was considered statistically significant only when it exceeded the SPM1D critical threshold under this adjusted alpha level."
11. [PAGE 8] "In both groups, wavelet intensity was mainly distributed within the low to low mid frequency range, approximately 6.90 to 128.48 Hz."
12. [PAGE 10] "In Phase 1, PC3 was mainly associated with mid- to high-frequency components of the biceps femoris, with additional contributions from lower-leg muscles."
13. [PAGE 11] "Importantly, this difference should not be interpreted simply as greater biceps femoris effort."
14. [PAGE 5] "Testing was conducted on an indoor artificial turf surface."
15. [PAGE 3] "Because no established effect size is available for wavelet-based PCA and SPM1D analyses of EMG time-frequency patterns during soccer instep kicking, the calculation was based on an independent-samples comparison between two groups and assumed a large standardized effect size (Cohen's d = 1.06)."
16. [PAGE 9 Table 4 caption] "Adjusted p values were calculated using Bonferroni correction across the 12 PC phase comparisons."

That's plenty.

Now write. I'll keep LaTeX clean.

One more: verify "Phase 1 PC3 54%-75%" vs discussion "54.6 - 75.4%". Table 4 says 54%-75%. Fine.

Also note Phase 2 PC1 window 60–70% is only 9% extent but 11 percentage points wide? 60→70 is 10 points; extent 9%. Minor inconsistency: cluster extent 9% vs window 60–70% (11 points). Because 101 points → 60–70% is ~10-11 points; extent reported 9. Slight rounding. Worth a one-line flag as internal arithmetic tension. Phase 1: 54–75 = 21-22 points, extent 21. Consistent. Phase 2: 60–70 = 10-11 points, extent 9. Slight under-count. Could be inclusive/exclusive index differences. I'll flag briefly.

Write now.
</NATIVE_REASONING>

# GSE + GSI Frontier Reasoning Foundry — Source Audit

**Drive source:** *Journal of Sports Science and Medicine* (2026) 25, 807-821 · Zhu, Chen, Wang, Zhou, Song, Cen, Fekete, Jemni, Wiltshire, Baker, Gu & Sun — "Time–Frequency Analysis of Muscle Activation Patterns during the Instep Kick in Elite and Amateur Soccer Players" · DOI 10.52082/jssm.2026.807 · 15 pages supplied.

---

<THINK_TRACE>
**Multi-hop derivation chain and gray-zone audit (opening audit: what the paper actually licenses).**

*Hop 1 — What is the estimand?* The paper does not estimate a performance quantity. It estimates the between-group separation of **PCA score trajectories** derived from a 77-dimensional (7 muscles × 11 frequency bands) time-frequency intensity vector evaluated at 101 normalized time points, separately for two phases. The reported quantities are SPM1D *t*-trajectories, cluster extents, cluster-level *p*, and Hedges' *g* computed *inside* the significant cluster. Therefore the estimand is a **spectral-topographic separation statistic**, not a force, torque, or accuracy estimand. The authors themselves fence this: "wavelet-derived frequency-band characteristics should be interpreted as descriptive features of the recorded EMG signal rather than as direct evidence of performance mechanisms" [PAGE 2].

*Hop 2 — What is the design's internal logic?* Sampling rate 2000 Hz sEMG, band-pass 20–450 Hz, fourth-order zero-phase Butterworth, **no rectification** before the transform because "wavelet intensity was subsequently calculated as the squared magnitude of the complex wavelet coefficients" [PAGE 5]. Eleven non-linearly scaled Morlet center frequencies from 6.90 to 395.46 Hz [PAGE 5–6]. Phase definition is kinematic: maximum hip extension → ball contact (Phase 1); ball contact → maximum hip flexion (Phase 2). Time is then **normalized to 101 points** [PAGE 6]. This last step is the single most consequential operator in the paper and it is the one that most heavily constrains interpretation (see Clock, below).

*Hop 3 — What survives multiple-comparison control?* Twelve PC-phase tests, Bonferroni α_adj = 0.05/12 = 4.17 × 10⁻³ [PAGE 3, PAGE 7]. Two clusters survive: Phase 1 PC3 at 54–75 %, peak *t* = 7.62, critical threshold 5.41, extent 21 %, *g* = 2.96; Phase 2 PC1 at 60–70 %, peak *t* = −9.88, critical threshold 5.88, extent 9 %, *g* = −2.03 [PAGE 1, PAGE 9]. Everything else has cluster extent 0. Ten of twelve comparisons are nulls, including one with peak *t* = −4.71 (Phase 2 PC3) that does not clear its own 5.49 threshold — a useful reminder that the inferential bar here is *shape-dependent*, since SPM1D critical thresholds differ across PCs (4.23 to 7.19) as a function of the temporal roughness (RESEL count) of each residual trajectory. **Consequence: peak *t* values are not comparable across PCs.** You cannot rank PC1 Phase 2 as "stronger" than PC3 Phase 1 by |*t*| = 9.88 vs 7.62 without first normalizing by their respective thresholds, and even then the comparison is informal.

*Hop 4 — The effect-size circularity.* Table 4's caption states Hedges' *g* was "calculated from participant level mean PC scores within each significant cluster" [PAGE 9]. The cluster was *selected* because it maximized the group separation. The *g* is therefore a selection-conditional (winner's-curse) statistic, upward-biased by construction. *g* = 2.96 with *n* = 15/15 corresponds to roughly 93 % non-overlap; an honest cross-validated estimate would be materially smaller. This does not invalidate the cluster test — the SPM1D *p* is a valid familywise statement under its own assumptions — but it does mean **2.96 and −2.03 must never be read as population effect magnitudes.**

*Hop 5 — The sign-indeterminacy gray zone.* PCA eigenvectors are defined only up to sign. The claim that "positive PC3 scores primarily reflected a greater relative contribution of mid- to high-frequency biceps femoris intensity" is a **post-hoc sign convention**, not an identifiable quantity. The substantive content is carried entirely by the loading matrix, and the loading *values* are absent from the supplied pages — they appear only as graphical arcs in Figure 4 [PAGE 10] and as verbal summaries. This is the paper's hardest verifiable vulnerability: the mechanistic attribution (BF-dominant in Phase 1; MG-dominant in Phase 2) rests on numbers the reader cannot inspect.

*Hop 6 — Lexical drift check.* The abstract assigns PC3 to "mid-frequency components of the biceps femoris" [PAGE 1]; the discussion assigns PC3 to "mid- to high-frequency components of the biceps femoris" [PAGE 10]. Meanwhile Table 3 puts the participant-level BF peak frequency at 37.71 Hz in *both* groups in Phase 1 — the second/third band of the bank, which no reasonable reading calls "high." And page 8 states that in both groups "wavelet intensity was mainly distributed within the low to low mid frequency range, approximately 6.90 to 128.48 Hz" — while the same word "low" is applied on page 8 to a *different* range for Phase 2 (6.90 to 62.09 Hz). **Band labels are not operationally defined anywhere in the text.** Any downstream citation of "BF mid-frequency" is citing a label, not a band set.

*Hop 7 — Internal arithmetic tension.* Phase 1's window 54–75 % spans 21 percentage points and the reported cluster extent is 21 % — consistent. Phase 2's window 60–70 % spans ~10–11 points while the reported extent is 9 % [PAGE 9]. This is almost certainly an index-inclusivity artifact on a 101-point grid, but it should be reconciled before the extent number is quoted.

*Hop 8 — What the design deliberately equalized away.* Validity required ball speed within ±5 % of each participant's **own** familiarization mean [PAGE 5]. This is a self-referenced gate: it removes between-group ball-speed variance *by construction*. The study therefore cannot test whether elite players strike faster, and correctly does not claim to. All between-group statements are at **matched relative output intensity** — an important scope fence that most secondary citations will drop.

*Verdict on hop chain:* the two clusters are inferentially defensible as *phase-localized, frequency-resolved, group-separating patterns within a controlled indoor task*, and nothing more. The paper says so repeatedly; the risk lives entirely in downstream over-reading.
</THINK_TRACE>

---

<SOURCE_OPERATORS_AND_EQUATIONS>

### 1. Morlet continuous wavelet transform — Eq. (1)

$$W(f,t)=\int_{-\infty}^{+\infty}x(\tau)\,\psi_f^{*}(\tau-t)\,d\tau$$

with the analyzing kernel (Morlet/Gabor form, non-linearly scaled center frequency $f$):

$$\psi_f(u)=\frac{1}{\sqrt{2\pi}\,\sigma_f}\exp\!\left(-\frac{u^{2}}{2\sigma_f^{2}}\right)\exp\!\left(i\,2\pi f u\right)$$

**Symbols / units (SI):** $x(\tau)$ = band-pass-filtered, **non-rectified** sEMG potential, V (recorded in µV, Delsys system at 2000 Hz) [PAGE 3, PAGE 5]; $\tau$ = integration time, s; $t$ = time-localization parameter, s; $f$ = wavelet center frequency, Hz; $\sigma_f$ = Gaussian envelope scale at center frequency $f$, s; $\psi_f$ = dimensionless if $L_2$-normalized, or s$^{-1/2}$ under the $1/\sqrt{s}$ convention. **The paper's pages do not state which normalization convention is used**, so the physical units of $W$ are either V·s or V·s$^{1/2}$ and cannot be resolved from the supplied text. This propagates directly into Eq. (2).

### 2. Time-frequency intensity — Eq. (2)

$$I(f,t)=\left|W(f,t)\right|^{2}$$

Units: V²·s² (or V²·s under the alternative normalization). The authors define this explicitly as the power surrogate: "wavelet intensity was subsequently calculated as the squared magnitude of the complex wavelet coefficients, thereby quantifying the time-frequency power of the EMG signal" [PAGE 5].

**Resolution constraint (uncertainty).** For a Gaussian-windowed kernel, $\sigma_t\sigma_f = 1/(2\pi) \approx 0.159$ (dimensionless), satisfying $\Delta t\,\Delta f \ge 1/(4\pi) \approx 0.0796$. At the bank's own extremes this yields an envelope width $\sigma_t = 1/(2\pi\sigma_f)$; for the 395.46 Hz band $\sigma_t$ is on the order of 1 ms, and for the 37.71 Hz band on the order of 13 ms for comparable $Q$. **Consequence:** the low bands cannot temporally resolve a ball-contact transient (contact is a few milliseconds); only the upper bands can. The paper's own interpretive convention is consistent — "higher-frequency components were considered to reflect brief and rapidly changing EMG activity" [PAGE 3] — but this means the Phase 2 PC1 (MG, higher-frequency) statement is the *only* part of the analysis with adequate time resolution to speak about contact-adjacent events, while the Phase 1 PC3 (mid-frequency BF) statement is intrinsically smoothed over a window comparable to the entire late pre-contact interval.

### 3. Amplitude normalization — Eqs. (3)–(6)

$$K_{s,r,m,p}=\sum_{f}\sum_{t}I_{s,r,m,p}(f,t)\qquad\text{(3)}$$

$$K^{\mathrm{median}}_{s,m,p}=\operatorname*{median}_{r\in\{1,2,3\}}\left\{K_{s,r,m,p}\right\}\qquad\text{(4)}$$

$$\tilde{I}_{s,r,m,p}(f,t)=\frac{I_{s,r,m,p}(f,t)}{K^{\mathrm{median}}_{s,m,p}}\qquad\text{(5)}$$

$$\bar{I}_{s,m,p}(f,t)=\frac{1}{3}\sum_{r=1}^{3}\tilde{I}_{s,r,m,p}(f,t)\qquad\text{(6)}$$

Units: $K$ inherits V²·s²; $\tilde{I}$ and $\bar I$ are **dimensionless per grid cell** (units of 1/(band·time-sample)). Indices: $s$ participant, $r$ trial (3 valid kicks), $m$ muscle (7), $p$ phase (2), $f$ one of 11 bands, $t$ one of 101 normalized points.

**Exact algebraic property (singularity of the normalization).** By construction Eq. (5) forces

$$\sum_{f=1}^{11}\sum_{t=1}^{101}\tilde{I}_{s,r,m,p}(f,t)=1 .$$

This is a *global* rather than per-time-point constraint, so it does **not** induce an exact rank deficiency in the 77-dimensional per-time-point PCA input; but it makes the feature set **compositional**, and because $K$ is overwhelmingly dominated by low-frequency power, the normalization systematically suppresses exactly the low bands that carry most of the raw variance and inflates the relative weight of the high bands. Every "high-frequency" claim in the paper is therefore a *relative* claim conditional on this denominator. The authors ran a sensitivity analysis with maximum-intensity normalization and report the "main significant PC-phase findings remained unchanged" [PAGE 6] — a partial, but not complete, defense.

### 4. Global PCA and PC score trajectories

$$\mathbf{z}(t)=\mathbf{D}^{-1}\!\left(\mathbf{x}(t)-\boldsymbol{\mu}\right),\qquad \mathbf{C}=\frac{1}{N-1}\sum_{i=1}^{N}\mathbf{z}_i^{T}\mathbf{z}_i,\qquad \mathbf{C}\mathbf{v}_k=\lambda_k\mathbf{v}_k$$

$$s_k(t)=\mathbf{z}(t)^{\!\top}\mathbf{v}_k,\qquad \mathrm{EVR}_k=\lambda_k\Big/\sum_{j}\lambda_j$$

Units: $\mathbf{z}$ dimensionless (z-scored per column); $s_k(t)$ dimensionless. Dimensionality: $\mathbf{x}\in\mathbb{R}^{77}$ (7 × 11), $N = 30$ participants × 101 time points stacked. Six PCs retained [PAGE 6]. **Breakdown regime:** $N_{\mathrm{eff}}=30$ participants — the effective sample for loading stability is 30, not 3030; the 101 time points per participant are strongly autocorrelated and contribute almost nothing to loading precision.

### 5. SPM1D two-sample *t*-trajectory

$$t(t)=\frac{\bar{s}_{E}(t)-\bar{s}_{A}(t)}{\sqrt{s_p^{2}(t)\left(\tfrac{1}{n_E}+\tfrac{1}{n_A}\right)}},\qquad s_p^{2}=\frac{(n_E-1)s_E^{2}+(n_A-1)s_A^{2}}{n_E+n_A-2},\qquad \nu=28$$

$$A=\{\,t:\ |t(t)|>u_{\alpha}\,\},\qquad \text{extent}(A)=\mu(A)$$

$$g=\frac{\bar{s}_{E}-\bar{s}_{A}}{s_p}\cdot J,\qquad J=1-\frac{3}{4(n_E+n_A)-9}=1-\frac{3}{111}=0.9730$$

Units: $t$ dimensionless; extent in % of the 101-point normalized grid; $g$ dimensionless with small-sample correction $J\approx 0.973$. Threshold $u_\alpha$ is set at Bonferroni $\alpha_{\mathrm{adj}}=0.05/12=4.17\times10^{-3}$ [PAGE 3, PAGE 7], with the explicit rule: "A cluster was considered statistically significant only when it exceeded the SPM1D critical threshold under this adjusted alpha level" [PAGE 7].

### 6. Reported outcomes (verbatim, [PAGE 1])

> "In Phase 1, PC3 showed a significant between-group difference at 54 - 75% of the normalized time (peak t = 7.62, p < 0.001, Hedges' g = 2.96), with higher scores in the elite group. In Phase 2, PC1 differed significantly between groups at 60 - 70% of the normalized time (peak t = -9.88, p < 0.001, Hedges' g = -2.03), with higher scores in the amateur group."

Table 4 [PAGE 9] full threshold set: Phase 1 — PC1 *t* = −0.96/4.23/0; PC2 2.30/5.46/0; PC3 7.62/5.41/21/***; PC4 1.74/4.90/0; PC5 2.56/4.80/0; PC6 −2.94/4.71/0. Phase 2 — PC1 −9.88/5.88/9/***; PC2 −1.99/7.19/0; PC3 −4.71/5.49/0; PC4 2.51/5.01/0; PC5 −1.70/4.83/0; PC6 1.19/4.96/0.

### 7. Breakdown / singularity regimes (exact)

| Regime | Condition | Consequence |
|---|---|---|
| **Dead low band** | $f_1 = 6.90\ \mathrm{Hz} < f_{\mathrm{HP}} = 20\ \mathrm{Hz}$ | Band 1 sits *below* the high-pass corner. Authors concede: "the lowest wavelet band was interpreted cautiously as a residual low-frequency contribution after preprocessing rather than as unfiltered movement artifact" [PAGE 5]. |
| **Attenuated top band** | $f_{11}=395.46\ \mathrm{Hz}$ with $f_{\mathrm{LP}}=450\ \mathrm{Hz}$ and finite-rolloff Butterworth | Upper Morlet sidelobes extend past the passband edge; band 11 intensity is filter-shaped, not physiology-shaped. |
| **Gaussian envelope ≫ event** | $\sigma_t(f)\gtrsim T_{\mathrm{contact}}$ for $f\lesssim 40\ \mathrm{Hz}$ | Low/mid bands cannot resolve ball contact. |
| **Compositional closure** | $\sum_{f,t}\tilde I = 1$ exactly (Eq. 5) | All band amplitudes are ratios to a low-frequency-dominated denominator. |
| **Sign indeterminacy** | $\mathbf{v}_k \to -\mathbf{v}_k$ leaves $\mathbf{C}$ unchanged | Directional claims are convention-dependent; loadings absent from the supplied pages. |
| **Selection-conditional *g*** | *g* computed inside the significant cluster | Upward-biased; not a population effect size. |
| **Time-warp collinearity** | 101-point linear normalization per phase, absolute durations unreported | A normalized-time cluster is confounded with absolute phase duration. |

Verbatim anchor for the filter rationale: "The 20 - 450 Hz band-pass range was selected as a conventional preprocessing range for surface EMG during dynamic movement" [PAGE 5] — i.e., **conventional, not derived from this task's spectral content.**
</SOURCE_OPERATORS_AND_EQUATIONS>

---

<RETROCAUSAL_GENEALOGY>

**Lineage of the operator stack.** Four independent lineages are fused here, and each carries its own inherited assumptions.

*(i) Wavelet lineage.* Morlet/Gabor complex-kernel analysis → Mallat's multiresolution framework [Mallat, 1989, PAGE 13] → Torrence & Compo's practical wavelet guide [1998, PAGE 13] → **von Tscharner's 2000 intensity analysis with "wavelets of specified resolution"** [PAGE 13], which is the direct ancestor of the 11-band non-linearly scaled bank used here [PAGE 5–6]. The critical inherited assumption: von Tscharner's bank was designed for myoelectric signals in cyclic locomotion at a specific sampling regime. Transplanting it to a 2000 Hz, 20–450 Hz, non-cyclic ballistic task is an **unvalidated port**. Note the arithmetic: adjacent-band center-frequency ratios fall monotonically from 2.80 (6.90→19.29 Hz) to 1.196 (330.63→395.46 Hz). The bank is explicitly *not* octave-spaced and is disproportionately dense at the high end. Every verbal "mid- to high-frequency" claim inherits this non-uniform geometry.

*(ii) Intensity-normalization lineage.* von Tscharner, Ullrich, Mohr, Comaduran Marquez & Nigg (2018) — clustering runner steps by wavelet-based time-frequency patterns [PAGE 13] — plus Mohr et al. (2022) on systematic reduction of leg muscle activity across footwear [PAGE 13]. The normalization scheme in Eqs. (3)–(6) is a direct descendant. The inherited assumption is that **total intensity is a nuisance scale factor**; that is defensible for footwear comparisons, but here the two groups differ in training volume by a factor of ~1.7 (10.27 ± 1.28 vs 5.93 ± 1.22 h/week, *g* = 2.92, *p* < 0.001 [PAGE 3, Table 1]), so "total intensity" may itself be a group-encoding variable, and dividing by it removes a *signal*, not just a scale.

*(iii) Cluster-inference lineage.* SPM1D as implemented in Python [PAGE 7], descended from random-field theory over continua. The inherited assumption is smoothness: the critical threshold $u_\alpha$ is a functional of the trajectory's RESEL count, which is why Table 4 shows thresholds ranging from 4.23 to 7.19 [PAGE 9]. **Retrocausal consequence:** a reader who imports the familiar "*t* > 2" heuristic will mis-rank the components. PC3 Phase 1 (*t* = 7.62 vs *u* = 5.41, margin 2.21) and PC1 Phase 2 (*t* = −9.88 vs *u* = 5.88, margin 4.00) are not comparable in the way raw *t* suggests.

*(iv) PCA lineage.* Bro & Smilde (2014), Jolliffe & Cadima (2016), Shlens (2014) [PAGE 13]. Inherited assumption: component stability is a function of $N$, and $N_{\mathrm{eff}} = 30$.

**Multi-week traps (each ≥ 2 weeks of sunk analytical effort if walked into):**

- **Trap 1 — The dead-band replication.** A lab reproduces the pipeline, finds near-zero band-1 intensity, and spends weeks hunting "low-frequency pathology." The 6.90 Hz band is below the 20 Hz high-pass. The authors flag this themselves [PAGE 5]; most replicators will not read that sentence.
- **Trap 2 — The label-driven literature search.** "Mid-frequency biceps femoris" appears in the abstract [PAGE 1] and "mid- to high-frequency biceps femoris" in the discussion [PAGE 10], while Table 3 places the BF Phase 1 peak at 37.71 Hz in both groups [PAGE 8]. A systematic reviewer coding band labels across papers will produce an inconsistent taxonomy, because **this paper never defines its bands operationally**.
- **Trap 3 — The normalized-time transplant.** Copying the 101-point normalization into a study where the *question is timing* guarantees that timing information is destroyed. The paper's own Phase 2 cluster at 60–70 % is uninterpretable in milliseconds without the unreported absolute phase durations.
- **Trap 4 — Amplitude-vs-spectrum category error.** The muscle-physiology literature the paper cites (Kellis & Katis 2007; Brophy et al. 2007; Nunome et al. 2006) is largely **amplitude-based**. The 2026 result is a *redistribution* result. Anyone attempting to reconcile the two by comparing activation magnitudes will find nothing, because "this difference should not be interpreted simply as greater biceps femoris effort" [PAGE 11]. The retrocausal re-reading is: the 2007 amplitude literature was looking at the right muscle through the wrong operator.

*(v) Kinetic-chain lineage.* Proximal-to-distal sequencing (Kellis & Katis 2007; Lees et al. 2010; Nunome et al. 2006) is invoked as interpretive scaffolding, but the authors correctly fence it: "the present EMG data do not directly quantify intersegmental coordination" [PAGE 10]. No inverse dynamics, no segmental power, no joint moments — the chain is a *narrative*, not a measured layer.
</RETROCAUSAL_GENEALOGY>

---

<RECURSIVE_THEORY_OF_MIND>

**Three constructs, three failure modes.**

**1. Crisis habit regression.** Under load, time pressure, or fatigue, motor systems revert to the most over-learned pattern available. The paper's Phase 2 finding is the cleanest available signature of this: the *amateur* group shows a stronger MG-linked higher-frequency organization during 60–70 % of follow-through, and the authors read it as a divergent "control demand on the ankle plantar flexor muscles" [PAGE 11]. The recursive inference an applied practitioner will make — "elite players have suppressed the plantar-flexor habit; amateurs have not" — is **not stated by the paper and is not testable from it**, because fatigue was deliberately excluded ("all participants avoided high-intensity training or competition within 24 hours before testing" [PAGE 3], 30-s inter-trial rest with no reported discomfort [PAGE 5]). A cross-sectional, non-fatigued sample cannot license a *regression-under-crisis* claim. The honest formulation: the amateur pattern is *compatible with* a less-suppressed distal strategy, at rest, in a lab.

**2. Counter-trap.** The intuitive coaching response to "amateurs over-express medial gastrocnemius" is to prescribe **more** plantar-flexor work — resisted plantar flexion, plyometrics, ankle proprioception — which the paper itself floats as a hypothesis [PAGE 11]. That is the counter-trap: if the amateur phenotype is *excess* MG-linked high-frequency organization, adding MG-directed load may deepen the very pattern being targeted. The paper is scrupulous here — "whether these approaches reduce reliance on high-frequency-dominated EMG patterns, improve movement stability, or reduce injury risk remains to be tested in longitudinal intervention designs" [PAGE 11] — but the sentence is buried and the candidate exercises are named. Second counter-trap: reading PC3's elite elevation as "more hamstring effort." The authors pre-empt it: "Importantly, this difference should not be interpreted simply as greater biceps femoris effort" [PAGE 11]. A third counter-trap is statistical: the sensitivity regressions adjusted for training experience (*p* = 0.012, 0.016) and weekly volume (*p* = 0.018, 0.023) [PAGE 8], which keeps the group effect alive but **does not** separate skill from any unmeasured correlate of full-time training (tissue adaptation, electrode-site adiposity, movement economy).

**3. The clock.** Two clocks operate, and they are not the same clock. The *normalization clock* maps each phase onto 101 points [PAGE 6]; the *physiological clock* runs in milliseconds. If Phase 2 duration differs between groups by even 10 %, the 60–70 % window maps to non-overlapping absolute intervals, and a "group difference in follow-through control" becomes a group difference in *when* follow-through is being sampled. The paper reports event-detection reliability (ICC = 0.96, mean absolute timing difference 5.0 ms at 240 fps [PAGE 5]) but **not phase durations**. Second clock: the 30-s inter-trial rest and the three-valid-kick criterion (elite 3.47 ± 0.64 attempts, amateur 3.67 ± 0.72, *p* = 0.429 [PAGE 5]) bound the fatigue accumulation; invalid-trial rates (13.5 % vs 18.2 %, *p* = 0.601) are statistically indistinguishable but directionally suggest the amateur group needed more attempts to satisfy the self-referenced speed gate — a small, non-significant asymmetry that the normalization clock cannot absorb.

**Recursive correction.** The disciplined reading is: *elite = temporally concentrated, spectrally narrowed pre-contact organization; amateur = temporally dispersed, distally weighted post-contact organization; both at matched relative output speed, both non-fatigued, both indoors.* Everything past that sentence is hypothesis. The paper says so: "These findings should be interpreted as controlled laboratory evidence from a small male sample performing standardized indoor kicks" [PAGE 12].
</RECURSIVE_THEORY_OF_MIND>

---

<CROSS_LAYER_VETO_ADJUDICATION>

**Layer 1 — Environmental / meteorological.** The task was run indoors on artificial turf: "Testing was conducted on an indoor artificial turf surface" [PAGE 5]. Ambient temperature, relative humidity, and turf surface temperature are **not reported anywhere in the supplied pages**. This is not a trivial omission, because the primary dependent variables are *spectral*. Muscle fiber conduction velocity is temperature-dependent; a downward shift in the EMG power spectrum accompanies cooling. Since both significant findings are frequency-band redistributions with no reported thermal control, **ambient thermal state is a live cross-layer veto on the spectral interpretation** — though the randomized mixing of groups within a single indoor session makes it a *variance* threat rather than a *bias* threat, provided sessions were interleaved (not stated). **Verdict: partial veto on frequency-band mechanism claims; no veto on cluster existence.**

**Layer 2 — Equipment / ball physics.** "All participants used the same size 5 soccer ball, with ball pressure standardized to 10 psi and verified using a pressure gauge" [PAGE 5]. 10 psi = 68.95 kPa ≈ 0.69 bar, mid-range of the Laws of the Game window (0.6–1.1 bar). Ball pressure sets contact stiffness, hence contact duration and impulse spectral content. Because pressure was *fixed*, it cannot confound the between-group comparison — but it *bounds generalization*: the Phase 2 post-contact window (0–20 % of Phase 2 in the heat maps, [PAGE 8]) is contact-transient-adjacent, and a softer or harder ball would move that transient's spectral footprint. **Verdict: no internal veto; hard external validity fence.**

**Layer 3 — Biomechanical / measurement.** Three hard constraints:
- *Surface EMG ≠ force.* "EMG amplitude should not be interpreted as a direct equivalent of mechanical output" [PAGE 2]. No inverse dynamics, no joint moments, no ground reaction forces reported. The kinetic-chain language is explicitly fenced [PAGE 10].
- *Support leg absent.* "EMG was recorded only from the kicking leg, the present findings should be interpreted as reflecting kicking-leg muscle activation patterns rather than support-leg control mechanisms" [PAGE 11]. Whole-body postural reorganization after impact — the mechanism the Phase 2 interpretation leans on — is **not measured**.
- *Tissue-filter heterogeneity.* Electrode geometry was standardized (10 mm inter-electrode distance, SENIAM landmarks, fiber-parallel alignment [PAGE 4]), but subcutaneous adiposity was not measured. Body mass did not differ (*p* = 0.520, *g* = −0.23 [PAGE 3]), which is a weak proxy at best. Subcutaneous fat acts as a spatial low-pass filter; unmeasured between-group differences in tissue thickness would shift the spectrum in the same direction the paper interprets as "high-frequency reliance."
- *Kinematic chain of custody.* 32 markers at 200 Hz, low-pass 10 Hz [PAGE 4–5]; event detection ICC = 0.96 with 1.2 frames ≈ 5.0 ms at 240 fps [PAGE 5]. Against a 2000 Hz EMG (0.5 ms per sample), contact-time uncertainty spans ~10 EMG samples and ~20 % of a 25 ms cycle at 40 Hz. **Tolerable, but it caps the sharpest temporal claims.**

**Layer 4 — Task ecology.** Fixed indoor turf, habitual 30°–45° approach, ≤ 2 m run-up, self-referenced ±5 % speed gate, central target [PAGE 5]. Every one of these is a *constraint that suppresses variance*. The authors enumerate the missing ecological stressors themselves — opposition, fatigue, time pressure, decision-making, moving ball, accuracy–speed trade-off [PAGE 12]. **Verdict: the joint cross-layer veto is on any claim that these patterns predict match behavior.** The paper's own conclusion concedes exactly this [PAGE 12].

**Aggregate adjudication.** No single layer vetoes the two reported clusters. The *conjunction* of (unreported thermal state) × (unmeasured tissue thickness) × (no support-leg EMG) × (self-referenced speed gate) × (normalized time with unreported durations) vetoes the *mechanistic* reading — "elite players rely less on plantar-flexor high-frequency drive" — while leaving the *descriptive, phase-localized, group-separating spectral pattern* intact.
</CROSS_LAYER_VETO_ADJUDICATION>

---

<RLVR_COUNTERFACTUAL_VETOES>

Three falsifiable veto scenarios, each with an explicit decision rule and a stated prediction derived from the paper's own reported numbers.

**Veto 1 — Duration-warp veto (Clock).**
*Scenario:* Obtain absolute Phase 1 and Phase 2 durations for all 30 participants (currently unreported; the paper only reports event-detection reliability, "ICC = 0.96 … mean absolute timing difference of 1.2 frames, corresponding to 5.0 ms" [PAGE 5]). Re-map the 60–70 % normalized window onto absolute milliseconds per participant.
*Decision rule:* If $\left|\bar T_{2,E}-\bar T_{2,A}\right| / \bar T_{2} > 0.10$, declare the Phase 2 PC1 cluster **uninterpretable in absolute time**.
*Prediction:* Phase 2 durations will differ by more than 10 % (elite follow-throughs are typically shorter and more terminally damped), and the absolute-time clusters will not coincide. **Falsifier:** if durations differ by < 10 %, the veto fails and the normalized-time cluster stands as a timing statement.

**Veto 2 — Loading-stability / sign-congruence veto (PCA).**
*Scenario:* Bootstrap-resample participants ($B \ge 1000$), recompute the *global* PCA on each resample, and compute the Tucker congruence coefficient $\varphi_k$ between bootstrap and original loadings for PC1 (Phase 2) and PC3 (Phase 1). Report the full 77-element loading vector, which is absent from the supplied pages.
*Decision rule:* If $\varphi < 0.85$ for a component, **veto the muscle/frequency attribution** for that component (the cluster may survive; the "BF-dominant" / "MG-dominant" label does not).
*Prediction:* $\varphi_{\mathrm{PC1}} \ge 0.95$ (peak *t* = −9.88, margin 4.00 over threshold, *g* = −2.03) but $\varphi_{\mathrm{PC3}} < 0.90$ — because PC3's margin is only 2.21, its effect size (2.96) is selection-conditional, and its claimed content (adjacent bands around 37.71–92 Hz) sits in a densely packed, highly correlated region of the bank. **Falsifier:** if $\varphi_{\mathrm{PC3}} \ge 0.95$, the BF mid-frequency attribution is validated and this veto is withdrawn.

**Veto 3 — Ball-pressure / contact-transient veto (equipment layer).**
*Scenario:* Re-run the identical pipeline at three legal pressures spanning 0.6–1.1 bar (here 0.69 bar), with the same participants, and test whether cluster amplitude is monotone in pressure.
*Decision rule:* If the Phase 2 PC1 (MG, post-contact) cluster amplitude varies monotonically with pressure **while** the Phase 1 PC3 (BF, pre-contact) cluster does not, then PC1 is classified as an **impact-transient / measurement artifact** rather than a skill marker, because pre-contact organization cannot be causally downstream of ball stiffness.
*Prediction:* PC1 amplitude will scale with pressure (its window, 60–70 % of Phase 2, sits in the contact-adjacent recovery region the heat maps place within 0–20 % and 70–100 % of Phase 2 for