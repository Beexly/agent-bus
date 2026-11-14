---
source: "numpybook_contexts"
folder: "/CorpusRoot"
pages: 33
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4766
---

<NATIVE_REASONING>
The user wants a GSE + GSI Frontier Reasoning Foundry response. They provided a large corpus from a NumPy book context, with pages 33? Actually they said PAGES: 33 but the text includes pages 121-123, 100-107, 164-166, 181-190, 229-230, 256-257, 283-284, 311-312, 348-349, 364-371, etc. It seems like the source text is a dump of multiple pages from a NumPy book. The user hasn't asked a specific question beyond the system prompt? Wait, the user message just says "DRIVE SOURCE: ..." and provides the text. There's no explicit question. But as the GSE + GSI Frontier Reasoning Foundry, I need to produce the required XML sections with >=1000 words depth, strict invariants: zero betting lines, zero toy equations, formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes, cite exact [PAGE N] markers and verbatim quotes.

Since there's no specific question, I should probably treat the corpus as the subject and produce a deep reasoning trace about the NumPy window functions, Bessel functions, miscellaneous functions, etc., as presented in the pages. I need to include all sections: THINK_TRACE, SOURCE_OPERATORS_AND_EQUATIONS, RETROCAUSAL_GENEALOGY, RECURSIVE_THEORY_OF_MIND, CROSS_LAYER_VETO_ADJUDICATION, RLVR_COUNTERFACTUAL_VETOES.

Word count >= 1000 across sections, THINK_TRACE >= 400 words.

I must not mention betting lines (spreads, totals, moneylines, odds). No fake ratios like Force/Fatigue. Use formal LaTeX, units, assumptions, singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes from source.

Let's plan:

THINK_TRACE: Deep multi-hop derivation & gray-zone audit. Discuss the mathematical relationship between i0, sinc, kaiser, blackman, bartlett, hanning windows. Derive the Kaiser window formula, the empirical beta-alpha relationship, piecewise definition, singularity at alpha thresholds (21, 50), M=1 edge case (division by M-1), beta=0 singularity? Actually I0(0)=1 fine. Discuss numerical overflow for large x in I0 series, breakdown regimes. Multi-hop: from Kaiser window -> i0 Bessel -> series convergence -> factorial growth -> floating point limits -> connection to von Mises distribution (circular statistics) and noncentral chi-square (Rice distribution) via modified Bessel I_{nu}. Gray zones: empirical beta formula is piecewise, discontinuities in derivative at alpha=21, 50; sinc limiting value at x=0; i0 integral vs series equivalence; blackman/bartlett/hanning parameter constraints M positive integer; M=1 leads to division by zero in blackman denominator M-1. Cite pages 121, 122, 123, 187, 190, etc.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX for sinc, i0 integral and series, kaiser window, beta(alpha) piecewise, blackman, bartlett, hanning (partial), von Mises pdf with I0, noncentral chi-square pdf with I_{(nu-2)/2}, covariance matrix definition. Units: dimensionless window samples, radians for phase, dB for alpha (logarithmic relative power), N dimensionless count. Page citations exact: [PAGE 121], [PAGE 122], [PAGE 123], [PAGE 187], [PAGE 190], [PAGE 104], [PAGE 100], [PAGE 164], [PAGE 182], etc. Verbatim quotes: "Compute the logarithm to the base 2 of x." etc. Need to include verbatim quotes from provided text. I'll quote exact lines.

RETROCAUSAL_GENEALOGY: Historical lineage: MLab/Numeric compatibility, Kaiser window from Bell Labs (James Kaiser, 1960s), prolate spheroidal wave functions (Slepian, Pollack, 1961), Bessel functions (Daniel Bernoulli, Euler, Bessel 1824), modified Bessel, von Mises (1918), Rice distribution (1944-45), noncentral chi-square (Fisher? Patnaik 1949), NumPy book context. Multi-week traps: if one treats beta-alpha relationship as continuous/smooth, derivative mismatch at thresholds; if one ignores M=1 singularity; if one conflates discrete dB alpha with continuous beta; numerical series divergence for large |x| in i0 before asymptotic switching.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is a strange section but required. I need to interpret it: maybe modeling the reasoning process as an agent that under cognitive load regresses to default habits (e.g., using i0 series for all x, ignoring overflow), counter-trap (switching to asymptotic/continued fraction for large x), clock (iteration count, series terms until machine epsilon). Discuss habit regression: default to direct series sum; counter-trap: use scaled Bessel or asymptotic expansion; clock: number of terms k ~ O(x) or until term ratio < eps. Apply to window design: choosing beta based on alpha dB target; clock = filter order M.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Since this is NumPy/digital signal processing, map to signal processing layers: numerical precision layer, algorithmic layer, application layer (FIR filter design). Vetoes: (1) M must be integer >=2 for windows with M-1 denominator; M=1 vetoes blackman/kaiser normalization? Kaiser: (2n-M-1) at n=0,M=1 gives -1? Actually M=1: n=0 only, term (2*0 -1 -1)= -2? Wait formula uses (2n - M - 1). For M=1, n=0: 2*0 -1 -1 = -2. Squared =4. Divided by (M-1)^2 =0 -> division by zero. So M=1 singular. Veto. (2) alpha <=21 => beta=0 => rectangular window (I0(0)=1) but side-lobe height target not met if alpha actually >21? The piecewise says beta=0 for alpha<21. Veto if user requests alpha<21 expecting suppression? Actually if alpha<21, beta=0, rectangular window has ~-13 dB side lobes, so requesting -alpha dB with alpha<21 yields beta=0 which may not achieve -alpha if alpha between 13 and 21? Hmm empirical formula says beta=0 alpha<21. That's a breakdown regime: requested side-lobe attenuation below achievable with beta=0? Rectangular is ~-13 dB. So if alpha<13, beta=0 cannot achieve -alpha dB (since rectangular is -13, actually better than -alpha if alpha<13? Wait side-lobe height of -alpha dB means attenuation alpha dB. Rectangular has highest side lobe about -13 dB. If you want -alpha dB with alpha=10 (i.e., -10 dB, higher side lobes), beta=0 gives -13 dB which is lower side lobes (better). But the empirical formula is for achieving at least? Not specified. Anyway, note regime. (3) Numerical overflow in i0 series: terms x^{2k}/(4^k (k!)^2). For large x, intermediate terms huge before summing; breakdown when x > ~700 for double (exp(700) overflow). Actually i0(x) ~ e^x/sqrt(2 pi x), so for x > ~700, result overflows double. Series terms may overflow earlier. Veto: use exponentially scaled Bessel i0e or asymptotic. (4) sinc at x=0 limiting value 1.0; direct sin(pi x)/(pi x) gives 0/0 NaN. Must special-case. (5) blackman denominator M-1: M=1 invalid. (6) bartlett piecewise boundaries at n=(M-1)/2 etc.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. Need 3 scenarios where a counterfactual change triggers a veto, with predictions. Example: Scenario A: M=1 passed to kaiser -> division by zero -> veto, prediction NaN or inf. Scenario B: alpha=50.1 vs 49.9 crossing threshold -> beta formula branch changes; counterfactual small perturbation in alpha causes discontinuous derivative in beta, prediction discontinuity in side-lobe design target. Scenario C: x=1e300 passed to i0 series -> overflow before convergence -> veto, prediction inf or error; counterfactual using scaled i0e avoids. Or scenario D: sinc(0) direct formula -> NaN; special case returns 1.0.

Need >=1000 words total. Let's aim for ~1400-1800 words.

Need to cite exact [PAGE N] markers. From text: pages 121, 122, 123, 186, 187, 190, 100, 101, 103, 104, 105, 106, 164, 165, 166, 181-190, 229, 230, 256, 257, 283, 284, 311, 312, 348, 349, 364-371. I'll use [PAGE 121], [PAGE 122], [PAGE 123], [PAGE 187], [PAGE 190], [PAGE 104], [PAGE 100], [PAGE 164], [PAGE 182], [PAGE 103], [PAGE 105], etc.

Need verbatim quotes. I'll quote e.g. "Compute the logarithm to the base 2 of x." [PAGE 121]; "the limiting value (1.0) of the ratio is taken for x = 0." [PAGE 121]; "I0 (x) = ..." [PAGE 122]; Kaiser window definition [PAGE 123]; beta piecewise [PAGE 123]; von Mises pdf [PAGE 190]; noncentral chi-square [PAGE 187]; blackman [PAGE 122]; bartlett [PAGE 122].

No betting lines. No toy equations. Formal LaTeX only. Avoid fake ratios like Force/Fatigue. All equations must be formal and sourced or derived.

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

Make sure each section is substantive. Word count across all sections >=1000. THINK_TRACE >=400.

Let's draft carefully.

THINK_TRACE content (>=400 words):

Start: The corpus centers on NumPy's miscellaneous and special functions, particularly the Kaiser window and modified Bessel function I0. First hop: sinc definition on [PAGE 121] with removable singularity at x=0. Second hop: i0 defined both as integral and series on [PAGE 122]. Third hop: kaiser window on [PAGE 123] normalized by I0(beta) and evaluated at scaled argument involving sqrt(1 - ((2n - M - 1)/(M-1))^2). This creates a nested dependency: computing kaiser requires i0 at beta and at argument <= beta. Fourth hop: empirical beta-alpha relationship piecewise on [PAGE 123] with breakpoints alpha=21 and alpha=50. Fifth hop: I0 appears in von Mises pdf on [PAGE 190] and noncentral chi-square on [PAGE 187], linking window design to circular statistics and Rice fading.

Gray-zone audit: The empirical beta formula is discontinuous in its first derivative at alpha=21 and alpha=50; below 21 beta=0 exactly, producing rectangular window whose peak side-lobe is about -13 dB, so targets alpha<13 are over-satisfied while 13<alpha<21 are met with zero taper. At alpha=21+, beta grows as power law then linear. Singularity regimes: M=1 causes division by (M-1)^2 = 0 in kaiser argument; blackman denominator M-1 similarly singular at M=1. sinc(0) is 0/0 in naive evaluation; source mandates limit 1.0. i0 series terms grow as x^{2k}/(4^k(k!)^2); for large x the summand itself may overflow double precision around |x| > ~700 before the total converges to e^x/sqrt(2 pi x). The integral form on [PAGE 122] avoids term overflow but requires numerical quadrature. Connection to noncentral chi-square: I_{(nu-2)/2}(sqrt(lambda x)) appears for nu>2; at nu=2 the order becomes 0, recovering I0 and Rayleigh/Rice special case. Numerical breakdown when lambda x large: Bessel argument large, exponential scaling needed.

Clock/counter-trap: default habit is to sum the i0 series until term ratio < eps; counter-trap for large |x| is asymptotic expansion e^x/sqrt(2 pi x) or scaled Bessel i0e = e^{-x} i0(x). Verifiable predictions can be made for overflow thresholds and branch discontinuities.

Need to ensure >400 words. This looks okay.

SOURCE_OPERATORS_AND_EQUATIONS:

List operators: sinc, i0, kaiser, blackman, bartlett, hanning, beta(alpha), von Mises, noncentral chi-square, covariance. Units: dimensionless index n, M in samples (count), alpha in dB (10 log10 power ratio), beta dimensionless, x dimensionless, theta radians, pdf units 1/x.

Equations:

sinc(x) = sin(pi x)/(pi x), sinc(0)=1. [PAGE 121]

i0(x) = (1/pi) ∫_0^pi e^{x cos theta} d theta = sum_{k=0}^∞ x^{2k}/(4^k (k!)^2). [PAGE 122]

kaiser: w[n] = I0( beta sqrt(1 - ((2n - M - 1)/(M-1))^2) ) / I0(beta), n=0..M-1. [PAGE 123]

beta(alpha) = {0.1102(alpha - 8.7) alpha > 50; 0.5842(alpha - 21)^0.4 + 0.07886(alpha - 21) 21 <= alpha <= 50; 0 alpha < 21.} [PAGE 123]

blackman: w[n] = 0.42 - 0.5 cos(2 pi n/(M-1)) + 0.08 cos(4 pi n/(M-1)). [PAGE 122]

bartlett: piecewise triangular. [PAGE 122]

von Mises: f(x) = e^{kappa cos(x - mu)} / (2 pi I0(kappa)) on [-pi, pi]. [PAGE 190]

noncentral chi-square: f(x; nu, lambda) = e^{-(lambda+x)/2} (1/2) (x/lambda)^{(nu-2)/4} I_{(nu-2)/2}(sqrt(lambda x)) I_{[0,∞)}(x). [PAGE 187]

covariance: C = E[(X - EX)(X - EX)^H] approx 1/(N-1) sum ... [PAGE 100]

Breakdown regimes: M=1 singular; x=0 sinc removable; alpha branch points; i0 overflow |x| ≳ 700 double precision.

RETROCAUSAL_GENEALOGY:

Historical lineage: MLab/Numeric compatibility [PAGE 121], Kaiser window from Kaiser 1960s, approximation to prolate spheroidal windows (Slepian & Pollack 1961) via eigenvector expensive [PAGE 123], Bessel functions from 19th century, modified Bessel in NumPy to avoid separate library [PAGE 121/122]. Von Mises 1918 circular distribution [PAGE 190], Rice 1944/45 and noncentral chi-square [PAGE 187]. Multi-week traps: treating beta-alpha as smooth across 21/50; assuming i0 series always numerically safe; ignoring M=1; using kaiser for alpha<21 where beta=0 yields rectangular.

RECURSIVE_THEORY_OF_MIND:

Crisis habit regression: under pressure, implementer codes i0 via raw series for all x, or computes sinc via direct division. Counter-trap: branch on x magnitude, use limit at zero, use scaled Bessel for large x. Clock: number of series terms k until |t_{k+1}/t_k| < eps; for kaiser design clock = filter length M iterations; alpha target sets beta then M determined by transition width (not in source but note). Apply to source: source itself encodes the counter-trap (limiting value for sinc, piecewise beta). Regression trap: forgetting the M-1 denominator when M=1.

CROSS_LAYER_VETO_ADJUDICATION:

Layer 1 numerical precision: veto M<=1 for kaiser/blackman because denominator zero; veto |x| > ~700 for raw i0 series (overflow); predict inf/nan. Layer 2 algorithmic: sinc(0) must branch to 1.0 else NaN; beta branch at alpha exactly 21 or 50 continuous value but derivative jumps; predict derivative discontinuity. Layer 3 application (FIR filter design via convolve [PAGE 123]): if side-lobe target alpha<13 dB, beta=0 rectangular already exceeds target? Actually rectangular side lobe -13 dB; asking for -20 dB (alpha=20) yields beta=0 which gives -13 dB, failing to achieve -20 dB. So veto alpha in (13,21) if strict requirement is at least -alpha dB attenuation? Need careful: side-lobe height of -alpha dB. If alpha=20, height -20 dB. Rectangular highest side lobe ~ -13 dB, which is higher (worse) than -20 dB. So beta=0 fails. But source says beta=0 for alpha<21. That's a breakdown/under-design regime. Veto if application demands guaranteed attenuation >13 dB with alpha<21. Prediction: side-lobe remains ~-13 dB, not -alpha.

Weather/biomechanical mapping: not directly applicable; but can frame as environmental layer: sampling rate (clock), finite word length (temperature analog), dynamic range (pressure). Veto proof: finite precision imposes floor.

RLVR_COUNTERFACTUAL_VETOES:

Scenario 1: Counterfactual input M=1 to kaiser. Veto: division by zero in (M-1)^2. Prediction: NaN/inf or exception; fix M>=2. Verifiable by evaluating formula at M=1,n=0.

Scenario 2: Counterfactual alpha crossing 21 from below to above. Veto: beta jumps derivative from 0 to power-law; at alpha=21 beta=0 both sides continuous but not smooth. Prediction: side-lobe design target changes sensitivity abruptly; small delta alpha yields delta beta ~ 0 for alpha<21 but ~0.5842*0.4*(alpha-21)^(-0.6) delta alpha for alpha>21, which diverges as alpha→21+. Verifiable by finite difference.

Scenario 3: Counterfactual x=1e300 to i0 via series. Veto: intermediate summand overflows double (~1e308) before convergence; actual i0 ~ e^x/sqrt(2 pi x) also overflows for x>~709. Prediction: raw series returns inf or hangs; scaled i0e = e^{-x}i0(x) remains finite until x enormous. Verifiable by comparing term magnitudes.

Need to ensure no betting lines. No fake ratios.

Word count: let's make sure total is >=1000. THINK_TRACE ~500. SOURCE ~400. Others ~200 each. Total ~1500+. Good.

Now write final answer with exact XML tags. No extra preamble. Use [PAGE N] citations. Include verbatim quotes.

Be careful with LaTeX in XML: fine.

Let's write.

One concern: user said PAGES: 33 but source pages are 121-123 etc. I'll cite actual page markers present in text: [PAGE 121], [PAGE 122], [PAGE 123], [PAGE 187], [PAGE 190], [PAGE 100], [PAGE 104], [PAGE 105], [PAGE 164], [PAGE 182], [PAGE 229], [PAGE 230], etc.

Let's draft final.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The corpus is dominated by NumPy's miscellaneous and special-function entries, especially the Kaiser window and the modified Bessel function of the first kind, order zero, I0. The first dependency hop is the sinc function on [PAGE 121], defined as sinc(x) = sin(πx)/(πx) with the explicit caveat that the limiting value 1.0 is taken at x = 0. This is a removable singularity: naive floating-point evaluation yields 0/0 at x = 0, so the source mandates a branch. The second hop is i0(x) on [PAGE 122], given both as an integral, I0(x) = (1/π) ∫₀^π e^{x cos θ} dθ, and as the power series Σ_{k=0}^∞ x^{2k}/(4^k (k!)²). These two forms are mathematically equivalent but numerically divergent in their failure modes: the integral avoids term overflow but needs quadrature; the series is termwise simple but its summands grow as x^{2k}/(4^k (k!)²), which overflows IEEE-754 double precision for sufficiently large |x| before the total converges to the asymptotic e^x/√(2πx).

The third hop is the Kaiser window on [PAGE 123]: w[n] = I0( β √(1 − ((2n − M − 1)/(M−1))²) ) / I0(β), for n = 0 … M−1. This nests i0 twice: once at the real argument β and once at an argument whose magnitude never exceeds β. Because the inner square root requires (M−1)² in the denominator, M = 1 is a hard singularity. The same denominator M−1 appears in the Blackman window on [PAGE 122], so M = 1 simultaneously invalidates Blackman and Kaiser normalization.

The fourth hop is the empirical β(α) relationship on [PAGE 123], piecewise in α (side-lobe height in −α dB): β = 0.1002(α − 8.7) for α > 50; β = 0.5842(α − 21)^0.4 + 0.07886(α − 21) for 21 ≤ α ≤ 50; β = 0 for α < 21. This mapping is continuous in value at α = 21 and α = 50 but not in its first derivative, creating two gray-zone breakpoints. Below α = 21 the source forces β = 0, i.e., a rectangular window whose peak side lobe is approximately −13 dB. Consequently any design request for α strictly between 13 and 21 dB is under-satisfied by the empirical rule: β = 0 cannot produce a side-lobe floor lower than roughly −13 dB. Above α = 50 the growth switches from a fractional power law to linear in α.

A fifth hop connects I0 to probability distributions on [PAGE 187] and [PAGE 190]: the noncentral chi-square density uses I_{(ν−2)/2}(√(λx)), and for ν = 2 this order collapses to I0, recovering a Rayleigh/Rice special case; the von Mises density on [PAGE 190] is f(x) = e^{κ cos(x−μ)}/(2π I0(κ)) over [−π, π]. Thus the same Bessel core underlies windowing, circular statistics, and fading-channel distributions.

Gray-zone summary: (1) M = 1 singularity in Kaiser and Blackman denominators; (2) sinc(0) 0/0 without the mandated limit; (3) β(α) derivative discontinuities at α = 21 and α = 50; (4) under-design region 13 dB < α < 21 dB where β = 0; (5) i0 series overflow for |x| ≳ 700 in double precision, while the integral form remains defined but costly; (6) large-argument Bessel in noncentral chi-square and von Mises requires exponential scaling (i0e-style) to avoid overflow. The default cognitive habit is to implement the series literally for all x; the counter-trap encoded by the source is the x = 0 special case for sinc and the piecewise β branches, but no overflow guard is stated for i0 itself, which is an audit gap.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>

Formal operators and equations extracted from the provided NumPy book pages.

Units: n and M are dimensionless sample counts (M ∈ ℕ, M ≥ 2 where denominators appear); x, β, α are dimensionless except α expressed in dB, i.e., α = −10 log₁₀(P_side/P_main) with P in watts or arbitrary power units, hence dB is a logarithmic dimensionless ratio; θ is in radians; probability densities have units of inverse x.

Verbatim source: "sinc (x) ... y = sinc ( x) = sin(πx ) / πx with the caveat that the limiting value (1.0) of the ratio is taken for x = 0." [PAGE 121]

Verbatim source: "i0 (x) ... I0 (x) = 1/π ∫₀^π e^{x cos θ} dθ = Σ_{k=0}^∞ x^{2k} / (4^k (k!)²)." [PAGE 122]

Verbatim source: "kaiser (M, β) ... w [n] = 1/I0(β) I0( β √(1 − (2n − M − 1)²/(M − 1)²) )." [PAGE 123]

Verbatim source: β(α) piecewise on [PAGE 123]:
β(α) = ⎧ 0.1002(α − 8.7)  α > 50
⎨ 0.5842(α − 21)^0.4 + 0.07886(α − 21)  21 ≤ α ≤ 50
⎩ 0             α < 21

Blackman on [PAGE 122]: w[n] = 0.42 − 0.5 cos(2πn/(M−1)) + 0.08 cos(4πn/(M−1)), n = 0 … M−1.

Bartlett on [PAGE 122]: w[n] = { 2n/(M−1), 0 ≤ n ≤ (M−1)/2; 2 − 2n/(M−1), (M−1)/2 < n ≤ M−1 }.

Von Mises on [PAGE 190]: f(x) = e^{κ cos(x−μ)} / (2π I0(κ)) I_{[−π,π]}(x), with concentration parameter κ dimensionless and x an angle in radians.

Noncentral chi-square on [PAGE 187]: f(x; ν, λ) = e^{−(λ+x)/2} (1/2) (x/λ)^{(ν−2)/4} I_{(ν−2)/2}(√(λx)) I_{[0,∞)}(x), where I_ν is the modified Bessel function of the first kind; x ≥ 0, ν > 0 degrees of freedom, λ ≥ 0 noncentrality.

Covariance estimator on [PAGE 100]: C = E[(X − E X)(X − E X)^H] ≈ (1/P) Σ_{i=0}^{N−1} (x_i − x̄)(x_i − x̄)^H, with P = N − 1 unbiased, P = N biased; N is the count of observations.

Breakdown and singularity regimes:
- Kaiser/Blackman: M = 1 ⇒ (M−1)² = 0 ⇒ division by zero in the window argument; veto M < 2.
- sinc: direct evaluation at x = 0 gives 0/0; source mandates limit sinc(0) = 1.0.
- β(α): derivative discontinuity at α = 21 (dβ/dα jumps from 0 to +∞ as α → 21⁺ because of the (α−21)^{−0.6} term in the derivative of the power law) and at α = 50 (slope changes from fractional-power regime to constant 0.1002).
- i0 series: summand magnitude ~ x^{2k}/(4^k(k!)²); for IEEE-754 double precision, intermediate terms overflow near |x| ≳ 700 even though the sum remains finite until larger x; asymptotic form i0(x) ∼ e^x/√(2πx) itself overflows for x ≳ 709.
- von Mises: κ → 0 yields uniform distribution on [−π, π] because I0(0) = 1; κ → ∞ tends to normal with mean μ and variance 1/κ [PAGE 190].

</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>

Historical and scientific lineage. The source frames these functions as "largely for compatibility with MLab of the old Numeric package" [PAGE 121], so the immediate genealogy is Numeric → MLab → NumPy miscellaneous module. The Kaiser window itself descends from James Kaiser's work at Bell Labs in the 1960s as a practical approximation to the discrete prolate spheroidal sequences of Slepian and Pollack (1961); the source notes that exact main-lobe/side-lobe energy maximization requires an eigenvector computation expensive for large window sizes, and that the Kaiser window is "a good approximation to these prolate-spheroidal windows" [PAGE 123]. The modified Bessel function I0 traces to Bessel's 19th-century cylinder functions, extended to imaginary argument; NumPy includes a separate implementation "without needing a separate library" [PAGE 121–122]. The same I0 appears in the von Mises distribution (circular statistics, von Mises 1918) [PAGE 190] and in the noncentral chi-square / Rice density [PAGE 187], linking filter-window engineering to directional statistics and wireless fading models.

Multi-week traps embedded in this genealogy: (1) Treating β(α) as a smooth, globally invertible design map across α = 21 and α = 50, when the derivative is discontinuous; a multi-week FIR tuning loop that assumes local linearity around α = 21 will misestimate required β adjustments. (2) Using the raw i0 power series for all arguments without an overflow or asymptotic branch; over weeks of parameter sweeps, a large β or large noncentrality λ will intermittently produce inf where the mathematical value is finite. (3) Setting M = 1 in Kaiser or Blackman during exploratory scripting; the code will not fail at definition time but at evaluation when n = 0 is inserted into (M−1)². (4) Requesting side-lobe attenuation α in (13, 21) dB and expecting β > 0; the empirical rule returns β = 0, yielding a rectangular window with about −13 dB peak side lobe, so the specification is silently violated. These traps are causal because later filter coefficients computed with convolve [PAGE 123] inherit the corrupted window, and the failure mode is delayed until frequency-domain inspection.

</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>

Crisis habit regression versus counter-trap versus clock. Under implementation stress, the default habit regression is to transcribe formulas literally: code i0 as the unguarded power series Σ x^{2k}/(4^k(k!)²), compute sinc as sin(πx)/(πx) without a zero branch, and apply β(α) by copying the piecewise formula without checking whether α lies in the under-satisfied (13, 21) dB band. The counter-trap is to insert domain guards before arithmetic: branch sinc at |x| < machine epsilon to return 1.0; branch i0 on |x| using a scaled or asymptotic evaluation for large argument; enforce M ≥ 2 for Kaiser and Blackman; and reject or flag α < 21 dB targets that require side-lobe floors below the rectangular-window floor of roughly −13 dB because the empirical rule returns β = 0 there [PAGE 123].

The clock variable is the iteration budget. For i0 via series, the clock is the smallest k such that |t_{k+1}/t_k| < ε_mach, where t_k = x^{2k}/(4^k(k!)²); for large x the number of terms grows and intermediate terms overflow before the ratio test succeeds. For Kaiser window synthesis, the clock is the loop over n = 0 … M−1, i.e., O(M) evaluations of i0; each evaluation must itself respect the i0 overflow clock. For filter design via convolve [PAGE 123], the outer clock is the chosen filter length M, which trades main-lobe width against side-lobe height through β. A recursive theory-of-mind model therefore predicts: a stressed implementer regresses to raw series (habit), produces NaN at sinc(0) or inf at large i0 arguments (failure), applies the counter-trap of domain branching (recovery), and is constrained by the O(M) clock in real-time filter design. The source partially encodes the counter-trap (sinc limit, piecewise β) but omits an explicit i0 overflow guard, which is the residual regression risk.

</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>

Layered veto proof across physical/biomechanical/weather analogues mapped to numerical-signal-processing layers.

Layer 1 — numerical precision (physical analog: finite sensor resolution / temperature noise floor): Veto any Kaiser or Blackman call with M = 1 because the denominator (M−1)² = 0 induces an exact singularity [PAGE 122–123]. Veto raw i0 series evaluation for |x| ≳ 700 in IEEE-754 double precision because summands overflow before convergence; prediction is inf or exception rather than the finite value e^x/√(2πx). Veto sinc evaluation without the x = 0 branch because 0/0 yields NaN [PAGE 121].

Layer 2 — algorithmic correctness (biomechanical analog: joint range-of-motion limits): Veto design requests for side-lobe height −α dB with 13 dB < α < 21 dB because β(α) = 0 in that band per [PAGE 123], producing a rectangular window whose peak side lobe is ≈ −13 dB, i.e., worse than requested. Veto α perturbations crossing 21 or 50 without recomputing the derivative of β because dβ/dα is discontinuous at both breakpoints [PAGE 123].

Layer 3 — application / FIR filter chain (weather analog: operational envelope): The source states the windows are used with convolve and show time- and frequency-domain behavior [PAGE 123]. A veto at Layer 1 or 2 propagates to corrupted filter coefficients; therefore any pipeline that consumes w[n] must first validate M ≥ 2, finite β, and that the achieved side-lobe floor meets the −α dB specification. Verifiable veto criterion: compute max_{n} 20 log₁₀(|w[n]| / w[0]) after window construction; if it exceeds −α dB by more than a numerical tolerance, veto the window and raise M or switch to an eigenvector-based prolate spheroidal design (expensive per [PAGE 123]).

No weather or biomechanical variables appear in the source; the veto proof is strictly computational and bounded by IEEE-754 ranges and the stated domain constraints.

</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>

Three verifiable reinforcement-learning-from-verifiable-rewards (RLVR) counterfactual veto scenarios with point predictions.

Scenario 1 — M = 1 counterfactual to kaiser. Counterfactual input: kaiser(M=1, β=5). Veto trigger: the term (2n − M − 1)²/(M−1)² at n = 0 evaluates to (−2)²/0, a division-by-zero singularity [PAGE 123]. Prediction: the implementation returns NaN, inf, or raises ZeroDivisionError; no finite window vector exists. Verification: symbolically substitute M = 1 into the source equation and observe the zero denominator; empirically run the call and confirm a non-finite or exception outcome. Veto is enforced pre-evaluation by requiring M ∈ ℕ, M ≥ 2.

Scenario 2 — α crossing 21 from below. Counterfactual: α = 20.999 versus α = 21.001 dB side-lobe target. Veto trigger: continuity of β value holds (both ≈ 0), but differentiability fails; dβ/dα = 0 for α < 21 while dβ/dα → +∞ as α → 21⁺ because of the derivative of 0.5842(α − 21)^0.4 plus 0.07886(α − 21) [PAGE 123]. Prediction: a finite-difference optimizer perturbing α by Δα = 10⁻³ around 21 will measure Δβ ≈ 0 on the left but Δβ/Δα → large on the right, causing erratic step-size behavior in a design loop that assumes local smoothness. Verification: compute β(20.999), β(21), β(21.001) from the piecewise formula; report the left and right difference quotients. Veto: flag any α within 10⁻² of 21 or 50 as non-smooth and require analytic sub-step handling.

Scenario 3 — large-argument i0 counterfactual. Counterfactual input: i0(x = 10³⁰⁰) evaluated via the raw power series [PAGE 122]. Veto trigger: summand t_k grows until k ≈ x/2 before decaying; intermediate terms exceed IEEE-754 double maximum (~1.8 × 10³⁰⁸) long after x = 10³⁰⁰ is already beyond the asymptotic overflow region (i0(x) itself overflows for x ≳ 709). Prediction: raw series returns inf or hangs in overflow; the mathematically correct value is also out of double range, so the only finite representation is a scaled form such as i0e(x) = e^{−x} i0(x), which remains representable for much larger x. Verification: compare term magnitudes max_k t_k against DBL_MAX; confirm overflow occurs before the ratio |t_{k+1}/t_k| drops below ε_mach. Veto: reject raw-series i0 for |x| > 700 and route to exponentially scaled Bessel or asymptotic expansion.

Each scenario yields a binary verifiable signal (finite vs non-finite, smooth vs derivative jump, overflow vs scaled) suitable for RLVR reward shaping.
</RLVR_COUNTERFACTUAL_VETOES>