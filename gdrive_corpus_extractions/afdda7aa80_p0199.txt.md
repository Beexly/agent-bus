---
source: "p0199.txt"
folder: "/gpu-ocr-output/pages/James-1890-PrinciplesOfPsychology-Vol2"
pages: 1
model: nvidia:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4311
---

<NATIVE_REASONING>
The user wants me to analyze a source text from James (1890) Principles of Psychology Vol 2, page 199 (OCR output). I need to produce output with specific XML sections:

<THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Constraints:
- Zero betting lines: never mention spreads, totals, moneylines, or odds.
- Zero toy equations: never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
- >= 1,000-word depth across these exact XML sections.
- Cite exact [PAGE N] markers and verbatim quotes when source pages are provided. Here source page is p0199.txt, which corresponds to page 189 of the printed text? Let's check: the text says "THE PERCEPTION OF SPACE. 189" at top. The file is p0199.txt. So [PAGE 189] or [PAGE p0199]? The user says "cite exact [PAGE N] markers". The text header shows page number 189. The file name p0199. I should probably cite [PAGE 189] since that's the printed page number, but also maybe [p0199]. Let's use [PAGE 189] as printed page number, referencing the source text provided.

I need to analyze the text: James discusses feelings in joints and muscles, perception of space, muscular sense as space-measurer, Thomas Brown, Prof. Delbœuf, Münsterberg, whether spatial sensibility is affair of surfaces vs muscular contractions.

I must not invent fake ratios. I need formal LaTeX equations with units and assumptions. I can discuss psychophysics, spatial perception, afferent signals, efference copy, etc., but must be careful not to invent toy equations. I can state formal equations like Weber-Fechner law: ΔI/I = k, with units, assumptions, breakdown regimes. Or signal detection theory: d' = (μ_signal - μ_noise)/σ. But I must not invent fake ratios like Force/Fatigue. I can use legitimate equations with proper units and cite assumptions.

I need to connect James's 1890 text to modern concepts: proprioception, muscle spindles, Golgi tendon organs, joint receptors, efference copy, corollary discharge, active touch, sensorimotor contingencies (O'Regan & Noë), etc.

Structure:
- THINK_TRACE: deep multi-hop derivation and gray-zone audit. >=400 words. I need to reason about the text, its implications, ambiguities (gray zones), e.g., James's agnosticism between skin-surface spatialism and muscular measurement, the footnote about Münsterberg, the OCR errors ("metacrpal", "At irst", "swall", "imuedied", etc.), the historical context.
- SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown. I'll define variables: cutaneous spatial resolution ρ_c [points/mm²], proprioceptive resolution ρ_p [1/rad or 1/mm], efference copy signal E[t], afferent afferent signal A[t], etc. Use Weber's law Δθ/θ = k_θ, with k_θ dimensionless, breakdown at θ→0 (absolute threshold) and saturation. Cite [PAGE 189] for quotes.
- RETROCAUSAL_GENEALOGY: historical/scientific lineage from Thomas Brown, Delbœuf, Münsterberg, James, to Sherrington (proprioception), Helmholtz (unconscious inference), modern sensorimotor theory. Multi-week traps: e.g., assuming muscular sense is sufficient without cutaneous feedback; deafferentation studies (I&N, lost proprioception); week-long adaptation to prism glasses (Stratton).
- RECURSIVE_THEORY_OF_MIND: crisis habit regression vs counter-trap vs clock. This is a bit abstract; I need to interpret: crisis habit regression = under stress, subjects revert to habitual spatial strategy (surface vs muscular). Counter-trap = the experimenter's expectation that muscular sense dominates creates demand characteristics. Clock = temporal dynamics of sensorimotor integration, efference copy delays (~50 ms), reafference loop.
- CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Physical: joint range limits, muscle force-velocity, skin deformation. Biomechanical: metacarpophalangeal joint flexion arc ~90°, moment arms. Weather veto: not directly relevant but maybe temperature effects on skin sensitivity and muscle spindle firing? Or "weather" as environmental noise? I need a veto proof: conditions under which the muscular-space hypothesis fails (e.g., passive movement, paralysis, local anesthesia, tendon vibration illusions). Use formal veto conditions.
- RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. I'll interpret as verifiable counterfactual veto scenarios. Provide 3 scenarios with predictions that can be tested.

Word count: >=1000 words across sections. I'll aim for ~1500+ words.

I must be careful with "ZERO TOY EQUATIONS": Never invent fake ratios. So if I write an equation, it must be formal, with SI/information/probability units, assumptions, exact singularity/breakdown regimes. Example: Weber fraction for kinesthetic discrimination: Δθ_JND / θ_ref = k_K, k_K dimensionless, valid for θ_ref > θ_abs (absolute threshold ~0.5° for finger joints), breaks down near θ=0 and near joint limit where proprioceptive afferents saturate.

I need verbatim quotes from source. Let's extract some:
- "Feelings of Movement in Joints."
- "When, by simply flexing my right forefinger on its metacrpal joint, I trace with its tip an inch on the palm of my left hand, is my feeling of the size of the inch purely and simply a feeling in the skin of the palm, or have the muscular contractions of the right hand and forearm anything to do with it?"
- "Many writers, of whom the foremost was Thomas Brown, in his Lectures on the Philosophy of the Human Mind, and of whom the latest is no less a Psychologist than Prof. Delbœuf, hold that the consciousness of active muscular motion, aware of its own amount, is the fons et origo of all spatial measurement."
- "It would seem to follow, if this theory were true, that two skin-feelings, one of a large patch, one of a swall one, possess their difference of spatiality, not as an imuedied element, but solely by virtue of the fact that the large one, to get its points successively excited, demands more muscular contraction than the small one does."
- Footnote: "Herr M.'s work... more radically than ever the doctrine that muscular sensation proper is our one means of measuring extension."

OCR errors: "metacrpal" = metacarpal, "At irst" = At first, "swall" = small, "imuedied" = immediate, "Pourquoi les Sensations visuelles sont elles étendues?" etc.

I will cite [PAGE 189] for printed page number. Also mention file p0199.

Now let's draft each section.

THINK_TRACE: Need >=400 words. I'll write a deep derivation: starting from James's phenomenological question, moving to the computational decomposition of spatial perception into cutaneous (static spatial array) vs kinesthetic (dynamic efferent/afferent) components. Gray zones: James does not resolve the debate; he sets it up. OCR noise introduces uncertainty in exact wording ("swall" vs "small"). The muscular sense hypothesis implies a mapping from motor command magnitude to perceived extent. But this confounds efferent command with reafferent feedback. Gray zone: in passive movement, no muscular contraction is felt, yet spatial extent is perceived (e.g., finger moved by experimenter). Another gray zone: isochrony—same muscular extent can produce different cutaneous extents depending on speed and surface texture. Multi-hop: James → Brown/Delbœuf → Münsterberg → Sherrington's proprioception → efference copy (Sperry, von Holst) → sensorimotor contingency theory. Audit: check for overclaiming; James only says muscular contractions "have anything to do with it," not that they are sole source.

SOURCE_OPERATORS_AND_EQUATIONS: Define:
- Spatial extent perception variable Ψ [dimensionless, normalized 0-1] or in meters [m].
- Cutaneous afferent rate λ_c [spikes/s] as function of contact area A_c [mm²] and spatial sampling density ρ_c [receptors/mm²].
- Muscular afferent rate λ_m [spikes/s] as function of joint angle θ [rad] and angular velocity ω [rad/s].
- Efference copy ε[t] [dimensionless normalized command] from motor cortex.
- Reafference loop: y[t] = h * (ε[t] + a[t]) where h is plant biomechanics, a is afferent feedback.
Weber's law for kinesthetic discrimination: Δθ_JND / θ_ref = k_θ, k_θ ≈ 0.02–0.05 dimensionless for finger joints (cite assumptions), valid θ_ref ∈ [θ_abs, θ_max − θ_abs], breakdown at θ_ref → θ_abs (absolute threshold ~1°–2°, neural noise floor) and θ_ref → θ_max (joint limit, afferent saturation).
Signal detection: d' = |μ_active − μ_passive| / σ_pool, dimensionless. If d' < 1, cannot discriminate active vs passive origin; breakdown when efference copy unavailable (curare, deafferentation).
Cite [PAGE 189] for quotes.

RETROCAUSAL_GENEALOGY: Lineage: Thomas Brown (Lectures on Philosophy of Human Mind) → Delbœuf (Revue Philosophique) → Münsterberg (Beiträge) → James (1890) → Sherrington (1906 proprioception) → Sperry (1950) / von Holst (1950) efference copy → O'Regan & Noë (2001) sensorimotor contingency. Multi-week traps: (1) Stratton's prism adaptation (weeks) shows spatial remapping is not purely muscular; (2) deafferented subject I.W. (weeks/months of rehab) can relearn movement using vision, showing cutaneous/vestibular substitution; (3) tendon vibration induces illusory movement (lack of actual muscle contraction), showing muscle spindle signal alone can create spatial percept without movement—trapping the "muscular amount = space" equation.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression: under stress or novel load, subjects regress to dominant strategy (e.g., rely on cutaneous landmarks if proprioception degraded). Counter-trap: experimenter priming "muscular sense" creates demand characteristics; subjects report effort-based extent even when cutaneous info is sufficient. Clock: sensorimotor loop delay τ ≈ 30–80 ms (afferent) + 20–40 ms (efferent). If movement duration T < 2τ, online correction impossible; percept relies on efferent prediction (forward model). Crisis occurs when T ≈ τ and internal model mismatched (e.g., added load), causing perceptual regression.

CROSS_LAYER_VETO_ADJUDICATION: Veto conditions:
- Physical veto: joint angle θ exceeds anatomical range θ_max (MCP flexion ~90° = 1.57 rad). Beyond, no muscular signal; percept impossible → veto of muscular sufficiency.
- Biomechanical veto: force-velocity relation F(v) = F_0 (1 − v/v_max)/(1 + v/v_max) (Hill-type). At high v, afferent rate cannot encode extent linearly; percept compresses.
- Weather/environmental veto: skin temperature T_skin alters cutaneous receptor dynamics (Q10 ≈ 2–3). Cold reduces spatial acuity; if James's surface theory held, cold should not affect active tracing extent judgment equally across conditions. Predict interaction.
- Formal veto: If ∃ condition where Δθ_JND remains constant while muscular effort E varies by factor >2, then muscular sense is not fons et origo. E.g., passive displacement by robot: E=0, Δθ_JND < threshold. Veto passes.

RLVR_COUNTERFACTUAL_VETOES: Three verifiable scenarios:
1. Local anesthesia of finger skin + intact muscle afferents: Predict spatial extent judgment preserved (supports muscular) OR degraded (supports cutaneous). Verifiable via psychophysical curve.
2. Tendon vibration without movement: Predict illusory extent percept proportional to vibration frequency/duration, violating pure surface theory.
3. Prism adaptation over 5 days: Predict aftereffect magnitude decays with washout, showing recalibration not fixed muscular association.

Include predictions with units and decision thresholds (e.g., d' > 1.5).

Now ensure no betting lines. No spreads etc.

Word count: I need to write substantial text. Let's produce maybe 200-300 words per section average, total >1000.

I need to use exact XML tags. No markdown code blocks? The user wants XML sections. I'll output raw XML with the tags. But I can use LaTeX inside. I'll avoid using < and > inside text except tags, or escape them. Since LaTeX uses \frac etc., no angle brackets needed mostly. I should avoid raw < in text. I'll use words.

Let's write.

Be careful: The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I must include [PAGE 189] and verbatim quotes from the text.

Let's draft.

THINK_TRACE content (~450 words):
Start: The OCR page 189 of James's Vol. 2 presents a foundational phenomenological problem... etc. Multi-hop derivation. Gray zone audit: OCR ambiguities, James's non-committal stance, confound of efference and reafference.

SOURCE_OPERATORS_AND_EQUATIONS (~250 words): Formal LaTeX.

RETROCAUSAL_GENEALOGY (~250 words).

RECURSIVE_THEORY_OF_MIND (~250 words).

CROSS_LAYER_VETO_ADJUDICATION (~250 words).

RLVR_COUNTERFACTUAL_VETOES (~250 words).

Total likely >1500 words. Good.

Let's ensure LaTeX equations are formal and have units/assumptions/breakdown.

Example equation block:
\[
\frac{\Delta \theta_{\mathrm{JND}}}{\theta_{\mathrm{ref}}}=k_{\theta},\quad k_{\theta}\in[0.02,0.05]\ \text{(dimensionless)}
\]
Assumptions: active finger flexion, θ_ref measured in radians [rad] from neutral metacarpophalangeal position, no vision, isometric contraction absent. Valid for θ_abs < θ_ref < θ_max − θ_abs, where θ_abs ≈ 0.02 rad (absolute kinesthetic threshold) and θ_max ≈ 1.57 rad (anatomical MCP flexion limit). Breakdown: as θ_ref → θ_adr? Wait absolute threshold θ_abs. As θ_ref → θ_abs, ratio diverges because neural noise floor dominates. As θ_ref → θ_max, afferent saturation compresses Δθ_JND, violating Weber linearity.

Another:
\[
d' = \frac{|\mu_{\mathrm{active}} - \mu_{\mathrm{passive}}|}{\sqrt{\frac{1}{2}(\sigma^2_{\mathrm{active}}+\sigma^2_{\mathrm{passive}})}}\quad\text{[dimensionless]}
\]
Breakdown when efference copy ε[t] is pharmacologically or neurally silenced (curare, deafferentation), then μ_active → μ_passive and d' → 0.

Another:
\[
\tau_{\mathrm{loop}} = \tau_{\mathrm{afferent}} + \tau_{\mathrm{efferent}} \approx 30\text{--}80\,\mathrm{ms} + 20\text{--}40\,\mathrm{ms}.
\]
If movement duration T < 2τ_loop, closed-loop correction unavailable; percept depends on forward model.

For Hill muscle model:
\[
F(v)=F_0\frac{1-v/v_{\max}}{1+v/v_{\max}},\quad v\in[-v_{\max},v_{\max}],\ [F]=\mathrm{N},\ [v]=\mathrm{m\,s^{-1}}.
\]
Breakdown at v → v_max (force → 0) and v → −v_max (eccentric limit).

Now write everything.

I must avoid using < character inside text because it may break XML parsing? Actually inside XML text, < must be escaped. I'll avoid less-than signs entirely or use words like "less than". I'll use &lt; if needed. Simpler: avoid < and >. Use "exceeds", "below", etc. Also avoid & except &amp;. I'll just not use them.

Now let's produce final answer.

Need to include verbatim quotes with quotation marks. Fine.

Let's write carefully.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The source page, printed as page 189 in James (1890), Principles of Psychology, Vol. 2, opens the section "Feelings in Joints and Feelings in Muscles" with a direct phenomenological challenge to surface-based spatialism. James asks, quoting the text verbatim: "When, by simply flexing my right forefinger on its metacrpal joint, I trace with its tip an inch on the palm of my left hand, is my feeling of the size of the inch purely and simply a feeling in the skin of the palm, or have the muscular contractions of the right hand and forearm anything to do with it?" [PAGE 189] This frames two competing operators for spatial extent: a cutaneous-surface operator, in which spatiality is an immediate element of skin feeling, and a muscular-efferent operator, in which spatiality is reconstructed from the amount of contraction needed to scan the surface. James notes that this muscular sense as space-measurer was postponed in earlier pages, and he reports that Thomas Brown and Prof. Delbœuf hold that "the consciousness of active muscular motion, aware of its own amount, is the fons et origo of all spatial measurement." [PAGE 189] If true, then two skin-feelings, one of a large patch and one of a small one, possess their difference of spatiality "not as an immediate element, but solely by virtue of the fact that the large one, to get its points successively excited, demands more muscular contraction than the small one does." [PAGE 189] The footnote adds that Münsterberg, in Beiträge zur Experimentellen Pocbology, reaffirms "more radically than ever the doctrine that muscular sensation proper is our one means of measuring extension." [PAGE 189]

Multi-hop derivation: (1) James’s question isolates a confound between afferent cutaneous spatial sampling and efferent motor-command magnitude. (2) The Brown–Delbœuf–Münsterberg lineage reduces spatiality to a scalar function of muscular contraction, implying a monotonic mapping from contraction amount to perceived extension. (3) James does not resolve this; he leaves open whether contractions merely co-vary with extent or constitute it. (4) A gray zone emerges in OCR fidelity: "metacrpal" for metacarpal, "swall" for small, "imuedied" for immediate, and "At irst" for At first. These do not change the argument but warn that verbatim quotation must be checked against the scan. (5) A second gray zone is the efference/re-afference confound: James treats "muscular contractions" as a felt quantity, but modern physiology distinguishes motor command (efference copy), spindle/Golgi-tendon afference, and cutaneous reafference from contact. The 1890 text cannot separate these, so any claim that James proved muscular sufficiency overclaims. (6) A third gray zone is passive movement: if spatial extent is perceived when the finger is moved by an experimenter with zero voluntary contraction, the muscular-amount theory fails unless one posits passive afference as equivalent to active feeling, which James does not establish. Audit conclusion: the page sets up a genuine theoretical fork but supplies no experimental decision rule; it is a programmatic sketch, not a closed psychophysical law. The derivation must therefore treat James’s muscular-space hypothesis as a boundary condition to be vetoed under specified physical and biomechanical regimes, not as an axiom.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, page citations, and breakdown regimes.

Let perceived spatial extent be Ψ [dimensionless, normalized 0–1] or linear extent L [m]. Define cutaneous spatial sampling density ρ_c [receptors mm⁻²] over contact area A_c [mm²], giving maximum resolvable points N_c = ρ_c · A_c. Define kinesthetic joint angle θ [rad] about the metacarpophalangeal joint, with angular velocity ω = dθ/dt [rad s⁻¹]. Let muscular afferent rate λ_m [spikes s⁻¹] encode θ and ω, and let efference copy ε[t] [dimensionless, normalized motor command] represent the descending signal. The re-afferent loop output y[t] is generated by plant biomechanics H acting on ε[t] plus afferent feedback a[t].

Kinesthetic Weber law (formal, not toy):
Δθ_JND / θ_ref = k_θ, k_θ ∈ [0.02, 0.05] dimensionless.
Units: Δθ_JND and θ_ref both in [rad], so k_θ is dimensionless. Assumptions: active finger flexion, no vision, isometric co-contraction absent, θ_ref measured from neutral MCP position. Valid regime: θ_abs < θ_ref < θ_max − θ_abs, with absolute kinesthetic threshold θ_abs ≈ 0.02 rad and anatomical MCP flexion limit θ_max ≈ 1.57 rad [PAGE 189 context: forefinger metacarpal joint]. Breakdown singularities: as θ_ref → θ_abs, the ratio diverges because neural noise floor dominates; as θ_ref → θ_max, spindle and Golgi-tendon afferents saturate, compressing Δθ_JND and violating Weber linearity.

Signal-discrimination test for active versus passive origin:
d' = |μ_active − μ_passive| / sqrt( ½(σ²_active + σ²_passive) ), dimensionless.
Assumptions: Gaussian internal noise, equal variance approximation. Breakdown: if efference copy is removed (curare, deafferentation, or paralysis), μ_active → μ_passive and d' → 0; any residual spatial judgment under these conditions falsifies the claim that conscious muscular effort is the fons et origo of spatial measurement [PAGE 189 quote].

Sensorimotor loop timing:
τ_loop = τ_afferent + τ_efferent ≈ (30–80 ms) + (20–40 ms).
If movement duration T < 2·τ_loop, online closed-loop correction is unavailable and the percept must rely on a forward model; if T ≫ 2·τ_loop, iterative cutaneous re-sampling can dominate. This timing regime is not stated by James [PAGE 189] but is required to adjudicate his question.

Hill-type muscle force-velocity relation for biomechanical bounds:
F(v) = F_0 · (1 − v/v_max) / (1 + v/v_max), [F] = N, [v] = m s⁻¹, v ∈ [−v_max, v_max].
Breakdown: as v → v_max, concentric force → 0; as v → −v_max, eccentric structural limits apply. At extreme v, λ_m(θ,ω) ceases to be a linear encoder of extent, producing perceptual compression unrelated to cutaneous area.

Citation anchor: all phenomenological claims above trace to the verbatim text on [PAGE 189], including the forefinger-tracing question, the Brown–Delbœuf fons-et-origo assertion, and the Münsterberg footnote.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage plus multi-week traps.

The lineage begins on [PAGE 189] with James’s explicit debt to Thomas Brown’s Lectures on the Philosophy of the Human Mind and to Prof. Delbœuf, followed immediately by the Münsterberg footnote claiming muscular sensation as the sole means of measuring extension [PAGE 189]. This 1890 position sits inside a longer genealogy: Brown’s associationist effort theory → Delbœuf’s Revue Philosophique argument that visual sensations are extended because of motor scanning → Münsterberg’s experimental psychology reaffirmation → James’s Principles → Sherrington’s later coining of proprioception and the detailed mapping of muscle spindle and Golgi-tendon organs → Sperry (1950) and von Holst & Mittelstaedt (1950) efference-copy and re-afference principles → modern sensorimotor-contingency theory (O’Regan & Noë, 2001), in which spatial perception is constituted by sensorimotor laws rather than by any single sensory channel.

Multi-week traps embedded in this lineage: (1) Stratton’s prism-reversal experiments required days to weeks of wear before spatial behavior normalized, showing that spatial recalibration is not an immediate readout of muscular amount but a slow re-weighting of the sensorimotor contingency. A subject relying purely on a fixed muscular-amount-to-extent mapping would not show the gradual aftereffect decay observed. (2) The deafferented subject I.W., studied over months of rehabilitation, relearned reaching and grasping using visual substitution despite profound proprioceptive loss, violating the necessity of muscular sensation for spatial action. (3) Tendon-vibration illusions produce illusory limb movement and extent without actual contraction or change in cutaneous contact area; if muscular sensation proper were the one means of measuring extension, vibration-driven spindle firing alone should not generate a spatial percept, yet it does. These are multi-week or multi-session traps because they expose that the Jamesian muscular-space equation holds only in a narrow active, intact, unperturbed regime and collapses under sensory substitution, adaptation, or isolated afferent drive.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock.

Recursive theory of mind here models the subject, the experimenter, and the perceptual system as nested predictors. Crisis habit regression: under load, stress, or sensory conflict, the subject regresses to the dominant spatial habit. For James’s tracing task, the dominant habit in ordinary vision is cutaneous-surface feedback; if vision is removed and proprioception is degraded by fatigue, the subject regresses to effort-based judgments and overestimates extent because contraction feels costly. Counter-trap: the experimenter, primed by Brown–Delbœuf–Münsterberg rhetoric, may demand or interpret reports as “muscular amount = space,” creating a demand characteristic in which the subject reports extent in proportion to felt effort even when cutaneous cues are sufficient. The counter-trap is inverted when the subject guesses the hypothesis and deliberately discounts effort, producing an underestimation that falsifies the muscular theory for the wrong reason.

Clock: the sensorimotor loop sets a hard temporal constraint. τ_loop ≈ 50–120 ms total. If the tracing movement duration T is shorter than 2·τ_loop, the subject cannot correct online based on cutaneous contact; the percept must be generated prospectively from efference copy and predicted reafference. If T is long, repeated skin contact provides a slow but high-resolution spatial sample. Crisis occurs at T ≈ 2·τ_loop with an unexpected load (added mass at the finger): the forward model predicts one extent, the cutaneous reafference signals another, and the system must regress to a habit. The recursive trap is that the subject’s report reflects which model was trusted at the moment of crisis, not a pure spatial magnitude. A valid experiment must therefore vary T relative to τ_loop and measure whether extent judgments scale with contraction (muscular hypothesis) or with contact-point succession (cutaneous hypothesis) across the clock boundary.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and environmental veto proof.

A veto is formalized as a condition under which the muscular-space hypothesis predicts outcome A but physics or physiology forces outcome B, with A ≠ B beyond measurement noise.

Physical veto: joint-range singularity. The MCP joint has anatomical flexion limit θ_max ≈ 1.57 rad. If the subject attempts to trace an extent requiring θ > θ_max, no further muscular contraction can produce angular displacement. The muscular-amount theory predicts that perceived extent should saturate or become undefined because no additional “amount of motion” exists [PAGE 189 logic]. In reality, the subject can still perceive the intended spatial extent via visual or cutaneous memory, or via the effort of isometric contraction against the stop. If perceived extent does not collapse to zero at θ_max, the muscular sense is not the sole means of measuring extension. Veto passes if extent judgment remains above chance (d' > 1.0) at the joint limit.

Biomechanical veto: force-velocity nonlinearity. Using Hill’s relation F(v) = F_0(1 − v/v_max)/(1 + v/v_max), [F] = N, [v] = m s⁻¹. At high shortening velocity v → v_max, force and spindle length-rate signals fall nonlinearly. Two movements of equal angular extent Δθ but different duration (fast vs slow) produce different afferent rate integrals ∫λ_m dt. If spatial perception were purely muscular amount, the fast movement should be perceived as smaller extent than the slow one for equal Δθ. Psychophysical constancy across speed (within the valid regime θ_abs < θ < θ_max − θ_abs) vetoes the pure muscular theory. Breakdown at v → v_max is excluded by restricting to v < 0.5·v_max.

Weather/environmental veto: cutaneous temperature dependence. Skin temperature T_skin alters mechanoreceptor dynamics with Q_10 ≈ 2–3. Cooling the palm reduces spatial acuity on the surface but does not change the muscular contractions required to trace the inch [PAGE 189 task]. If spatiality were solely muscular, cooling should leave extent judgment unchanged. If cooling degrades extent judgment while effort reports stay constant, the cutaneous layer is co-constitutive, vetoing muscular sufficiency. Formal veto condition: ∃ T_skin such that ΔΨ/ΔT_skin ≠ 0 while ΔEffort/ΔT_skin ≈ 0. This is experimentally verifiable with thermode-controlled contact surfaces.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with predictions.

Scenario 1: Digital nerve block plus intact proprioception. Anesthetize the skin of the left palm (cutaneous input silenced) while preserving muscle spindle and joint afferents in the right hand. Subject traces the inch with the right forefinger and reports perceived size. Prediction under muscular-space hypothesis: extent judgment preserved (d' > 1.5 vs baseline) because contraction amount is intact. Prediction under surface hypothesis: judgment collapses to chance (d' < 0.5) because the skin-feeling of the palm is removed. Verifiable metric: psychometric slope and threshold in mm; decision threshold d' = 1.0.

Scenario 2: Tendon vibration without movement. Vibrate the right flexor digitorum tendon at 80–100 Hz to induce illusory flexion while the finger is physically immobilized and the palm contacts nothing. Prediction under muscular/spindle theory: illusory extent percept scales with vibration duration and intensity, producing a non-zero Ψ despite zero contraction and zero cutaneous contact. Prediction under pure Jamesian surface theory: no spatial extent should arise because no points are successively excited on the skin and no actual movement occurs [PAGE 189]. Verifiable metric: magnitude of illusory displacement in degrees or mm; decision threshold: reported displacement > 2° with p < 0.01 against sham.

Scenario 3: Five-day prism adaptation with washout. Subject wears right-left reversing prisms while performing the tracing task for 30 minutes daily over five days (multi-week trap regime). Prediction under fixed muscular-association theory: aftereffects should be permanent or very slow to decay because the “fixed associations with amounts of muscular contraction” [PAGE 189] are entrenched. Prediction under sensorimotor contingency theory: aftereffect magnitude decays exponentially over washout trials with time constant τ_w ≈ 20–50 trials, because the contingency is recalibrated, not the muscular amount itself. Verifiable metric: aftereffect degrees on day 5 vs day 7 post-removal; decision criterion: exponential fit R² > 0.8 and τ_w < 100 trials.
</RLVR_COUNTERFACTUAL_VETOES>