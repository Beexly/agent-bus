---
source: "p0237.txt"
folder: "/gpu-ocr-output/pages/James-1890-PrinciplesOfPsychology-Vol2"
pages: 1
model: nvidia_2:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4721
---

<NATIVE_REASONING>
The user wants me to analyze a source text from James (1890) Principles of Psychology Vol 2, page 237 (actually labeled page 227 in the text but user says p0237.txt). The user provides strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
<THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user says "DRIVE SOURCE: /gpu-ocr-output/pages/James-1890-PrinciplesOfPsychology-Vol2/p0237.txt" and "PAGES: 1". The source text is provided. It discusses perception of space, binocular vision, Wheatstone, Helmholtz, disparate images, corresponding points, singleness, diplopia, etc.

I need to produce a response with those exact XML sections. The total depth must be >= 1,000 words across these sections. I need to cite exact [PAGE N] markers and verbatim quotes from the source text. The source text appears to be from page 227 (printed) but the file is p0237.txt. I should cite [PAGE 227] or [PAGE 237]? The user says PAGES: 1 and file p0237.txt. The text itself has page number 227 at top. I'll cite [PAGE 227] as the printed page, maybe mention [PAGE 237] as the file. But invariant says cite exact [PAGE N] markers. Since the source page number visible is 227, I'll use [PAGE 227]. I can also reference the OCR file p0237.txt.

Need to avoid toy equations. Formal LaTeX equations are okay if they are real, with SI/information/probability units, assumptions, exact singularity/breakdown regimes. Since the source is about binocular vision and perception, I can discuss information theory of binocular fusion, disparity, Panum's fusional area, etc., but must not invent fake ratios. I can state formal equations like the horopter equation, disparity d = x_L - x_R, fusion range limits, Vieth-Müller circle, etc., with assumptions and breakdown regimes (e.g., Panum's area limits, suppression, diplopia). I must be careful not to make up fake equations. Use real binocular vision geometry.

Need to ensure no betting lines. This text is about psychology, so no betting content anyway.

Need >=1000 words total across XML sections. THINK_TRACE >=400 words. Other sections also need content. Let's plan:

- THINK_TRACE: Deep multi-hop derivation & gray-zone audit. Discuss James's argument: two distinct questions (can disparate points fuse? can identical points yield double?), evidence against Wheatstone, Helmholtz experiment failure rates, finger experiment, ocular dominance, microscopy/marksmanship. Multi-hop: from retinal correspondence to perceptual singleness to motor dominance to cultural/historical suppression of the debate. Gray-zone: OCR artifacts ("distanc", "fnger", "ye"), footnote contamination, weak eyes confession, bibliographic vs experimental weight. >=400 words.

- SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. Define binocular correspondence, disparity, Panum's fusional area, horopter, Vieth-Müller circle. Units: degrees of visual angle, millimeters on retina, seconds for suppression. Assumptions: orthophoria, normal correspondence, fixed fixation. Breakdown regimes: disparity beyond Panum's limit -> diplopia; identical points -> single under normal conditions; Wheatstone's claim of double with identical points contested. Cite [PAGE 227] verbatim quotes. Maybe cite Helmholtz Phys. Opt. pp. 737-9 as in footnote. Need verbatim quotes from provided text: "points on which the two images of an object fall does not within certain limits affect its seen singleness at all, but rather the distanc at which it shall appear." etc.

- RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps. Wheatstone 1838 stereoscope, Helmholtz Physiological Optics, Wundt, Volkmann, Hering, Aubert, Donders. American lag ("longo intertallo"). Multi-week traps: if a modern researcher replicates Helmholtz's finger experiment over weeks, ocular dominance may shift, fatigue, learning effects; the controversy may resurface. Cite footnote references.

- RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is more abstract. Crisis habit regression: under stress, observers revert to dominant-eye referencing; counter-trap: assuming binocular fusion is automatic when it's effortful; clock: temporal dynamics of fusion, suppression duration, reaction time. Discuss James's own weakness of eyes preventing experiment—recursive limitation. >= some words.

- CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Physical: retinal geometry, optical axes. Biomechanical: extraocular muscle balance, phoria/tropia, finger placement biomechanics. Weather: not really applicable but maybe lighting, atmospheric refraction? Could discuss luminance contrast, atmospheric scattering affecting fusion. Veto proof: conditions under which the claim fails.

- RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. Need 3 scenarios where the hypothesis (from source) is vetoed counterfactually. E.g., if identical points always produce double images (Wheatstone), then prediction X; if not, veto. Scenarios: (1) fusional disparity exceeds Panum's limit -> percept splits despite identical retinal points? (2) Ocular dominance reversal during finger experiment changes singleness report. (3) Long-term monocular deprivation abolishes fusion -> identical points yield double? Provide predictions.

Need to ensure total words >=1000. Let's write substantial content. I'll aim for ~1300-1600 words total across sections.

Important: Use exact XML tags. No extra sections outside? The user says "across these exact XML sections". So I should output exactly those sections, maybe in order. I'll include them in order.

Need to cite [PAGE 227] and verbatim quotes. Let's pull quotes:

Quote 1: "points on which the two images of an object fall does not within certain limits affect its seen singleness at all, but rather the distanc at which it shall appear."

Quote 2: "Wheatstone made an observation, moreover, which subsequently became the bone of much hot contention, in which he strove to show that not only might disparate images fuse, but images on corresponding or identical points might be seen double."

Quote 3: "The two questions, 'Can we see single with disparate points?' and 'Can we see double with identical points?' although at the first blush they may appear, as to Helmholtz they appear, to be but two modes of expressing the same inquiry, are in reality distinct. The first may quite well be answered affirmatively and the second negatively."

Quote 4: "Add to this that the experiment quoted from Helmholtz above by no means always succeeds, but that many individuals place their finger between the object and one of their eyes, oftenest the right;"

Quote 5 (footnote): "When we see the finger the whole time, we usually put it in the line pining object and left eye if it be th left fnger, joining object and right ye if it be the right finger."

Quote 6 (footnote bibliography): "In favor of his interpretation see Helmholtz, Phys. Opt., pp. 737–9; Wundt, Physiol. Psychol., 2te Autl. p. 144..."

I need to be careful with OCR errors; I can quote as they appear, maybe note [sic].

No toy equations: I will not invent Force/Fatigue. I will use real equations: e.g., disparity \delta = x_R - x_L (in degrees or mm), horopter condition, Vieth-Müller circle: \tan(\alpha) = ... maybe keep simple. Panum's fusional area limits: \delta \in [-\delta_{max}, +\delta_{max}] outside which diplopia. Assume units: visual angle degrees, retinal eccentricity mm. Breakdown: \lvert\delta\rvert > \delta_{crit} \Rightarrow \text{diplopia/suppression}. Also information: mutual information between left and right retinal images I(L;R) reduces with disparity beyond fusion range.

Let's structure each section with headings inside XML.

THINK_TRACE >=400 words. I'll write ~450-500 words.

SOURCE_OPERATORS_AND_EQUATIONS: include LaTeX blocks. Use \[ ... \] or \( ... \). Cite [PAGE 227]. Units: deg, mm, s. Assumptions and breakdown regimes.

RETROCAUSAL_GENEALOGY: historical lineage.

RECURSIVE_THEORY_OF_MIND: crisis habit regression etc.

CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios + predictions.

Total >=1000 words.

Let's draft carefully.

I need to ensure no mention of betting. Fine.

Let's start writing.

THINK_TRACE:

The source text is William James, Principles of Psychology Vol. 2, chapter on The Perception of Space, printed page 227 (OCR file p0237.txt). James distinguishes two questions that Helmholtz and others collapse: (Q1) Can we see single with disparate points? (Q2) Can we see double with identical points? He argues Q1 is affirmative, Q2 negative, opposing Wheatstone's stronger claim that identical points can be seen double. Gray-zone audit: James confesses "weakness of my own eyes" prevents personal experimentation, so his balance-of-evidence judgment is secondhand; the OCR contains artifacts ("distanc", "fnger", "ye", "pining") that could corrupt verbatim citation; the Helmholtz finger experiment "by no means always succeeds," and individual differences (right-eye occlusion preference) suggest motor dominance confounds retinal correspondence. The footnote bibliographic split—German/American vs German—shows national lineage traps. Multi-hop: retinal correspondence -> fusional limits -> perceptual singleness -> ocular dominance -> historical suppression of debate. The central gray zone is whether "corresponding or identical points" are ever sufficient for diplopia; if sensory fusion is strictly top-down, identical points might still double under attentional set, but James denies it. Need formal operators to separate geometry from percept.

That's about 200 words. Need more. Expand on each point, the counterfactuals, the breakdown regimes, etc. Target ~450 words.

SOURCE_OPERATORS_AND_EQUATIONS:

Define left/right retinal coordinates x_L, x_R in mm from fovea. Disparity \Delta = x_R - x_L. Corresponding points: \Delta = 0. Disparate points: \Delta \ne 0. Fusion condition: seen singleness S = 1 iff |\Delta| \le \Delta_{panum} (Panum's fusional limit), with \Delta_{panum} ~ few arcminutes to ~0.5 deg depending on eccentricity. Units: degrees of visual angle (°), retinal mm. Assumptions: orthophoria, normal binocular correspondence, free fusion, luminance above threshold, stable fixation. Breakdown: |\Delta| > \Delta_{panum} => physiological diplopia or suppression; \Delta=0 but attention set => alleged double (Wheatstone) contested by James [PAGE 227]. Verbatim quotes included.

Horopter: set of points with \Delta=0; Vieth-Müller circle in longitudinal horopter. Equation maybe not needed but can state formally: for fixation distance d, interocular distance b, horopter satisfies x/d relationship. Keep formal but simple.

Also information: mutual information I(L;R) = H(L)+H(R)-H(L,R) in bits; as disparity increases beyond fusion, I drops and percept entropy H(percept) rises (two images). Units: bits.

Cite [PAGE 227].

RETROCAUSAL_GENEALOGY:

Wheatstone 1838 stereoscope, disparate images fuse. Helmholtz Physiological Optics pp. 737-9 supports Wheatstone. Wundt, Nagel favor. Against: Volkmann, Hering, Aubert, Schön, Donders. James cites these [PAGE 227 footnote]. The controversy "dropped out of the field" quickly; progress in Germany, Holland, America ("longo intertallo"). Multi-week traps: modern replication over weeks shows ocular dominance plasticity, adaptation to prisms, fusional vergence fatigue; a null result in week 1 may become positive in week 4 due to learning, producing false historical consensus. Also the "bone of much hot contention" persists because Q1 and Q2 are distinct but often conflated.

RECURSIVE_THEORY_OF_MIND:

Crisis habit regression: under load or stress, observers regress to dominant-eye direction pointing (footnote: shadow on face when pointing at candle-flame), effectively suppressing the non-dominant eye, so Q2's "double with identical points" may vanish behaviorally even if sensory double persists. Counter-trap: assuming binocular singleness is automatic; James shows it is an achievement within limits, can fail. Clock: fusion has temporal latency; suppression alternates; the finger experiment's success depends on timing ("see the finger the whole time"). James's own weak eyes create a recursive limitation: he cannot experiment, so he weighs authority, which itself is a theory-of-mind about other observers' reports.

CROSS_LAYER_VETO_ADJUDICATION:

Physical veto: if retinal image fall on non-corresponding points due to refractive error or prism, singleness fails regardless of James's claim. Biomechanical veto: extraocular muscle imbalance (phoria/tropia) shifts correspondence; placing finger between object and one eye changes optical path biomechanically, inducing monocularexclusion. Weather veto: luminance contrast reduced by fog/glare degrades fusion; Panum's limit shrinks under low contrast, so "within certain limits" collapses. Veto proof: only under orthophoric, high-contrast, stable-fixation conditions does Q1 hold and Q2 fail; outside these, predictions invert.

RLVR_COUNTERFACTUAL_VETOES:

Three scenarios:

Scenario A: Forced correspondence violation. Place identical targets on identical points but induce a vertical prism dissociating the eyes. Prediction: if Wheatstone/Q2 true, double should appear even at zero disparity; James/Q2 negative predicts singleness (unless prism induces disparity). Veto condition: double observed at \Delta=0 under prism => veto James's negative answer to Q2; prediction: vertical diplopia despite foveal correspondence because the prism shifts one retinal image off the fovea, so actually \Delta !=0; careful. Better: Use a haploscope to present identical stimuli to identical points but with different luminance/color such that binocular rivalry occurs. Prediction: rivalry -> double/alternation, which might support Wheatstone? Hmm.

Need verifiable veto scenarios. Let's define hypothesis H_J (from James): Q1 true (disparate can fuse within limits), Q2 false (identical never double). Counterfactual vetoes:

1. Scenario: Fusional disparity exceeded. Present a stereogram with disparity \Delta gradually increased beyond Panum's limit while keeping fixation stable. H_J implies singleness within limits, failure outside. Veto if singleness persists at \Delta \gg \Delta_{panum} (e.g., > 1°) without suppression; or if double appears at \Delta within Panum's limit due to cognitive set. Prediction: at \Delta = 0.2° (<limit) single; at \Delta = 2° (>limit) diplopia or suppression; if diplopia occurs at 0.2°, veto H_J's Q1 fusion claim.

2. Scenario: Identical points with attentional bias. Present identical points (\Delta=0) but instruct observer to attend to one eye's image or use a brief flash to one eye. H_J/Q2 negative says no double. Veto if reliable double reports occur at \Delta=0 under divided attention; prediction: no double at \Delta=0 under normal binocular viewing; transient rivalry only under interocular suppression.

3. Scenario: Ocular dominance reversal in finger experiment. Replicate Helmholtz finger task daily for 4 weeks, measuring which eye is occluded by finger and singleness reports. H_J implies consistent dominant-eye referencing. Veto if dominance flips and singleness reports correlate with the occluded eye rather than retinal correspondence; prediction: right-eye occlusion preference persists [PAGE 227], and flipping dominance changes the finger-placement line but not the perceived singleness of the object when finger is seen.

Add predictions for each.

Need total words >=1000. Let's ensure each section is long enough. I'll write generously.

Also the user said "STRICT INVARIANTS: ... ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." So I must include formal LaTeX with units. I'll include equations like:

\Delta \equiv x_R - x_L \quad [\mathrm{deg\ of\ visual\ angle}]

S(\Delta) = \begin{cases} 1 & |\Delta| \le \Delta_{\mathrm{panum}} \\ 0 & |\Delta| > \Delta_{\mathrm{panum}} \end{cases}

I(L;R) = ... bits.

Horopter equation maybe:

\frac{x}{d} = \frac{b}{2d} ... not needed but can state formally: points on Vieth-Müller circle satisfy zero disparity.

Assumptions listed. Breakdown regimes listed.

Need cite exact [PAGE 227] markers. Use [PAGE 227] after quotes.

Word count: I'll aim for ~1500 words total. Let's write now.

Check: no betting lines. Good.

Let's produce final answer with exactly those XML sections. I will not add extra text outside.

Need to make sure XML tags are exactly as specified.

<THINK_TRACE>
...
</THINK_TRACE>

etc.

Let's write.

I will be careful to not use markdown code blocks that break XML. Just plain text with LaTeX.

Word count estimation: THINK_TRACE ~500, SOURCE ~400, RETROCAUSAL ~300, RECURSIVE ~300, CROSS ~250, RLVR ~300 = ~2050. Good.

Let's write with depth.

I need to include verbatim quotes. I'll quote from source. Note OCR errors like "distanc" and "fnger" — I can quote as-is with [sic].

Let's draft THINK_TRACE:

(Start)

William James's page 227 (OCR file p0237.txt) in The Principles of Psychology, Vol. 2, chapter "The Perception of Space," organizes the binocular correspondence controversy around two questions that Helmholtz and later writers treat as one. James writes verbatim: "points on which the two images of an object fall does not within certain limits affect its seen singleness at all, but rather the distanc at which it shall appear" [PAGE 227]. This establishes that retinal disparity, within Panum-like limits, changes perceived distance rather than breaking singleness. He then attacks Wheatstone's stronger claim: "not only might disparate images fuse, but images on corresponding or identical points might be seen double" [PAGE 227]. James separates the inquiries: "Can we see single with disparate points?" versus "Can we see double with identical points?" [PAGE 227]. He answers the first affirmatively and the second negatively.

Gray-zone audit. First, James disclaims direct experimentation: "I am unfortunately prevented by the weakness of my own eyes from experimenting enough to form a decided personal opinion" [PAGE 227]. His verdict is therefore a balance-of-evidence judgment over authorities, not a personal psychophysical measurement. Second, OCR artifacts ("distanc," "fnger," "ye," "pining") threaten verbatim fidelity; citations must flag [sic]. Third, the Helmholtz finger experiment "by no means always succeeds" [PAGE 227], and observers often place a finger between object and one eye "oftenest the right" [PAGE 227], implicating motor/ocular dominance rather than pure retinal geometry. Fourth, the footnote bibliography splits the literature into pro-Wheatstone (Helmholtz, Wundt, Nagel) and anti-Wheatstone (Volkmann, Hering, Aubert, Schön, Donders) [PAGE 227], showing a national lineage (Germany, Holland, America) that James says left the debate behind. The deep multi-hop derivation is therefore: retinal image geometry -> fusional limits -> perceptual singleness -> ocular dominance/motor bias -> historical authority weighting -> contemporary replication traps. The exact singularity is the claim that identical points cannot produce double images; if any condition yields diplopia at zero disparity, James's negative answer to Q2 collapses.

That's about 350 words. Need >=400. I'll expand a bit more on counterfactual and breakdown. Add sentences. Good.

Now SOURCE_OPERATORS_AND_EQUATIONS.

Define variables. Use LaTeX.

Let x_L, x_R be retinal image positions (mm from fovea). Disparity \Delta = x_R - x_L (convertible to degrees of visual angle via eye nodal point distance ~17 mm: \Delta_{deg} \approx \Delta_{mm} \cdot 180/(\pi \cdot 17)). Corresponding points: \Delta=0. Disparate points: \Delta \ne 0. Seen singleness indicator S \in {0,1}. James's Q1/Q2 formalized:

S=1 for |\Delta| \in [0, \Delta_{\max}] within limits [PAGE 227].
Q2 would require P(\text{double} | \Delta=0) > 0; James asserts P(\text{double} | \Delta=0)=0 under normal viewing.

Panum's fusional area: \Delta_{\max} depends on eccentricity e and luminance L; typical central values \Delta_{\max} \approx 0.2^\circ\text{--}0.5^\circ. Breakdown: if |\Delta| > \Delta_{\max}(e,L), physiological diplopia or suppression occurs. If \Delta=0 but interocular conflict introduced by dissimilarity (rivalry), alternation occurs, which is not diplopia at identical points but a failure of fusion due to non-identity.

Mutual information: I(L;R) = H(L)+H(R)-H(L,R) [bits]. As |\Delta| increases beyond fusion, I(L;R) does not drop to zero immediately; rather H(percept) increases from one image to two. Assumptions: orthophoria, normal correspondence, stable fixation, photopic luminance, free fusion. Breakdown regimes: strabismus/phoria (motor mismatch), aniseikonia, low contrast, temporal asynchrony. Verbatim quotes with [PAGE 227].

I'll write about 350 words here.

RETROCAUSAL_GENEALOGY ~300 words.

RECURSIVE_THEORY_OF_MIND ~300 words.

CROSS_LAYER_VETO_ADJUDICATION ~250 words.

RLVR_COUNTERFACTUAL_VETOES ~350 words.

Total >1500.

Let's ensure formal tone, no betting, no fake equations. All equations are standard vision science.

Write final.
</NATIVE_REASONING>

<THINK_TRACE>
William James's page 227 (OCR file p0237.txt) of *The Principles of Psychology*, Vol. 2, chapter "The Perception of Space," organizes the binocular correspondence controversy around two questions that Helmholtz and later writers treat as one. James writes verbatim: "points on which the two images of an object fall does not within certain limits affect its seen singleness at all, but rather the distanc at which it shall appear" [PAGE 227]. This establishes that retinal disparity, within permissive limits, changes perceived distance rather than breaking singleness. He then attacks Wheatstone's stronger claim: Wheatstone "strove to show that not only might disparate images fuse, but images on corresponding or identical points might be seen double" [PAGE 227]. James separates the inquiries: "Can we see single with disparate points?" versus "Can we see double with identical points?" [PAGE 227]. He answers the first affirmatively and the second negatively.

Gray-zone audit. First, James disclaims direct experimentation: "I am unfortunately prevented by the weakness of my own eyes from experimenting enough to form a decided personal opinion" [PAGE 227]. His verdict is therefore a balance-of-evidence judgment over authorities, not a personal psychophysical measurement. Second, OCR artifacts ("distanc," "fnger," "ye," "pining") threaten verbatim fidelity; citations must flag [sic]. Third, the Helmholtz finger experiment "by no means always succeeds" [PAGE 227], and observers often place a finger between object and one eye "oftenest the right" [PAGE 227], implicating motor/ocular dominance rather than pure retinal geometry. Fourth, the footnote bibliography splits the literature into pro-Wheatstone (Helmholtz, Wundt, Nagel) and anti-Wheatstone (Volkmann, Hering, Aubert, Schön, Donders) [PAGE 227], showing a national lineage (Germany, Holland, America) that James says left the debate behind. The deep multi-hop derivation is therefore: retinal image geometry → fusional limits → perceptual singleness → ocular dominance/motor bias → historical authority weighting → contemporary replication traps. The exact singularity is the claim that identical points cannot produce double images; if any condition yields diplopia at zero disparity, James's negative answer to Q2 collapses. The deeper gray zone is whether "seen singleness" is a sensory given or an achievement maintained by vergence and attention, which determines whether Q1 and Q2 are truly independent or merely contextually separable.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(x_L\) and \(x_R\) denote retinal image positions in mm from each fovea. Binocular disparity is
\[
\Delta \equiv x_R - x_L \quad [\mathrm{mm\ on\ retina}],
\]
convertible to visual angle by the eye's nodal-point distance \(n \approx 17\ \mathrm{mm}\):
\[
\Delta_{^{\circ}} \approx \Delta \frac{180}{\pi n} \quad [\mathrm{degrees\ of\ visual\ angle}].
\]
Corresponding or identical points satisfy \(\Delta = 0\). Disparate points satisfy \(\Delta \neq 0\). James's Q1/Q2 can be formalized with a singleness indicator \(S \in \{0,1\}\):
\[
S(\Delta)=
\begin{cases}
1, & |\Delta| \le \Delta_{\max}(e,L) \\
0, & |\Delta| > \Delta_{\max}(e,L)
\end{cases}
\quad [\mathrm{dimensionless}],
\]
where \(e\) is retinal eccentricity and \(L\) is luminance. Panum's fusional limit \(\Delta_{\max}\) is typically \(0.2^\circ\)–\(0.5^\circ\) centrally, shrinking with eccentricity and falling off under low luminance [PAGE 227: "within certain limits"]. Q2 asserts \(P(\text{double} \mid \Delta = 0) = 0\) under normal binocular viewing; James defends this negative answer [PAGE 227].

Information-theoretic operator: mutual information between monocular images \(I(L;R) = H(L) + H(R) - H(L,R)\) [bits]. As \(|\Delta|\) approaches and exceeds \(\Delta_{\max}\), percept entropy \(H(\text{percept})\) jumps from one-image entropy to two-image rivalry/diplopia entropy rather than passing smoothly through "double at identical points."

Assumptions: orthophoria, normal retinal correspondence, stable fixation, photopic luminance, free fusion, and intact binocular cortical machinery. Exact breakdown regimes: (i) \(|\Delta| > \Delta_{\max}\) → physiological diplopia or active suppression; (ii) strabismus or phoria → motor correspondence shifted so that foveal images are not on corresponding points despite \(\Delta_{\rm objective}=0\); (iii) interocular luminance or contrast imbalance → binocular rivalry, which is alternation not diplopia at identical points; (iv) temporal asynchrony beyond fusion latency → perceptual suppression. Verbatim source anchors: "many individuals place their finger between the object and one of their eyes, oftenest the right" [PAGE 227]; bibliographic split "In favor of his interpretation see Helmholtz, Phys. Opt., pp. 737–9; ... Against Wheatstone see Volkmann... Hering... Aubert... Schön... Donders" [PAGE 227 footnote].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The historical/scientific lineage runs from Wheatstone's stereoscopic memoir (Section 12, cited on [PAGE 227]) through Helmholtz's *Physiological Optics* (pp. 737–9), Wundt's *Physiological Psychology* (2nd ed., p. 144), and Nagel's *Seeing with Two Eyes* (pp. 78–82) on the pro-Wheatstone side, and Volkmann's *Archives of Ophthalmology* and *Untersuchungen* (p. 266), Hering's *Contributions to Physiology* (pp. 29–45), Aubert's *Physiology of the Retina* (p. 822), Schön's *Archives of Ophthalmology* (I, pp. 56–65), and Donders (p. 15 and note) on the anti-Wheatstone side [PAGE 227 footnote]. James observes that this controversy "should so quickly have dropped out of the field," with later progress concentrated in Germany, Holland, and, "longo intertallo," America [PAGE 227 footnote].

Multi-week trap: if a modern laboratory replicates Helmholtz's finger-occlusion experiment across weeks, ocular dominance is not fixed. Vergence adaptation, fusional vergence fatigue, and attentional reweighting can shift which eye is "oftenest the right" [PAGE 227] on a timescale of days to weeks. A null replication in week 1 (no finger seen, no diplopia at identical points) may become positive in week 4 after prism adaptation, producing a false historical consensus that the Wheatstone–Helmholtz claim is settled. Conversely, prolonged monocular viewing can weaken fusional reserve so that \(\Delta_{\max}\) collapses and even small disparities yield diplopia, reopening Q1. The lineage is therefore not a closed debate but a periodically re-energized trap: each new generation re-conflates Q1 and Q2 because the experimental setup (finger, haploscope, stereoscope) changes the motor and attentional context faster than the retinal geometry does.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: under load, stress, or unstable fixation, observers regress to dominant-eye direction pointing. The source footnote notes that "Microscopists, marksmen, or persons one of whose eyes is much better than the other, almost always refer directions to [a] single eye," visible in head posture and shadow when pointing at a candle-flame [PAGE 227]. This is a crisis habit: when binocular fusion is challenged, the percept defaults to monocular specification, behaviorally eliminating reports of double vision at identical points even if sensory rivalry persists.

Counter-trap: assuming binocular singleness is automatic. James's argument shows singleness is an achievement maintained "within certain limits" [PAGE 227], not a default. The counter-trap is to treat Q2 ("double with identical points") as absurd a priori; the theory-of-mind error is to impute to the visual system a guarantee of correspondence that the motor system (eye dominance, finger placement) routinely violates.

Clock: fusion and suppression have temporal dynamics. The finger experiment's success depends on continuous visibility ("When we see the finger the whole time...") [PAGE 227 footnote], implying that diplopia at near-identical points may be transient, alternating, or suppressed below report threshold. James's recursive limitation is epistemic: because his own eyes are weak, he cannot run the experiment, so he models other observers' reports as evidence. This creates a second-order theory-of-mind loop: he predicts what Helmholtz and Wheatstone observed, weights their credibility by national and bibliographic affiliation, and arrives at a negative answer to Q2 without personal falsification. If those authorities were systematically biased by dominant-eye referencing, James's recursive regression inherits their motor confound.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical veto: retinal correspondence is fixed by optics. If refractive error, prism, or induced aniseikonia shifts one image so that objective disparity \(\Delta \neq 0\) while the observer believes the points are identical, singleness fails regardless of James's claim [PAGE 227: disparate images fuse "within certain limits," not universally]. The veto is physical: no amount of attention can fuse images falling outside Panum's area.

Biomechanical veto: extraocular muscle imbalance (phoria, tropia, or convergence insufficiency) changes the correspondence field. Placing a finger between object and one eye [PAGE 227] alters the optical path and induces monocular exclusion; the reported singleness is then a biomechanical artifact of suppression, not proof that identical retinal points never double.

Weather/environmental veto: luminance contrast and atmospheric scattering reduce effective \(L\) in \(\Delta_{\max}(e,L)\). Under fog, glare, or low illumination, \(\Delta_{\max}\) shrinks, so disparities that fuse in bright conditions diplope in dim conditions. The boundary condition "within certain limits" [PAGE 227] is therefore environment-dependent; outside the photopic, high-contrast regime, Q1's affirmative answer and Q2's negative answer both lose force.

Veto proof: James's asymmetry (single with disparate points; not double with identical points) holds only under orthophoria, stable fixation, photopic contrast, and free fusion. Any layer—physical optics, extraocular mechanics, or environmental luminance—that pushes \(|\Delta|\) beyond \(\Delta_{\max}\) or dissociates the eyes motorially vetoes the generalization.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario A — Forced supralimit disparity with cognitive set. Present a haploscope stimulus with disparity \(\Delta\) ramped from \(0\) to \(2^\circ\) (well beyond central \(\Delta_{\max}\)) while instructing the observer to "try to see it single." Verifiable veto: if singleness (\(S=1\)) is maintained at \(\Delta = 2^\circ\) without suppression or diplopia, James's Q1 limit is falsified; prediction: at \(\Delta \le 0.4^\circ\), \(S=1\) and perceived distance shifts [PAGE 227]; at \(\Delta > 0.6^\circ\), \(S=0\) with physiological diplopia or alternating suppression. Pass condition: diplopia onset tracks \(\Delta_{\max}(e,L)\), not instruction.

Scenario B — Identical points with interocular dissimilarity (rivalry control). Present identical spatial locations (\(\Delta = 0\)) but orthogonal gratings of different orientation/color to each eye. Verifiable veto: if the observer reports sustained double vision at \(\Delta=0\) without alternation, James's Q2 negative answer is falsified; prediction: binocular rivalry yields alternation or suppression, not stable diplopia, because the points are no longer "identical" in information content even if geometrically corresponding [PAGE 227]. Pass condition: rivalry, not diplopia, at geometric correspondence.

Scenario C — Four-week ocular-dominance reversal in the Helmholtz finger task. Replicate the finger-between-object-and-eye procedure daily for 28 days, recording which eye is occluded and whether the object remains single. Verifiable veto: if dominant-eye preference flips and singleness reports correlate with the occluded eye rather than with retinal correspondence, the motor confound invalidates the source's use of the experiment [PAGE 227]; prediction: right-eye occlusion preference persists ("oftenest the right") and finger placement follows the line joining object to the non-dominant eye [PAGE 227 footnote], while object singleness is unchanged when the finger is seen. Fail condition: dominance flips predictably with weekly practice, showing the experiment measures plasticity, not fixed correspondence.
</RLVR_COUNTERFACTUAL_VETOES>