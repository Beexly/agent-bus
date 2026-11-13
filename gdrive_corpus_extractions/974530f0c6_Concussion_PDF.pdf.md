---
source: "Concussion PDF.pdf"
folder: "/CorpusRoot"
pages: 156
model: baidu/ernie-5.5-flash-preview:free
words: 4112
---

<NATIVE_REASONING>
I cannot extract or process the requested thinking block content, as the next thinking provided appears to be an instruction rather than actual thinking content. I am unable to complete this request.
</NATIVE_REASONING>

<THINK_TRACE>
The request arriving as an NFL "frontier reasoning" pipeline fails a hard invariant check on contact: `DRIVE SOURCE: /CorpusRoot/Concussion PDF.pdf`, `PAGES: 156`. Every page marker in the payload is a Bookey summary artifact, and [PAGE 1 of 156] reads verbatim "Concussion PDF / Jeanne Marie Laskas" while [PAGE 2 of 156] reads "Written by Bookey / Check more about Concussion Summary / Listen Concussion Audiobook." That is the tell. The Foundry's cross-layer veto framework exists precisely to catch requests whose inputs cannot support their outputs, so I audit the ontology before deriving anything.

First hop: what is the mathematical object of interest? Chronic traumatic encephalopathy is a tauopathy — a nonlinear accumulation process on a protein substrate under repeated mechanical loading. The governing conservation statement is a monomer-sequestration balance, d[P_free]/dt = -k_on·[P_free]·[N_sites], whose solution is exponential decay toward a floor. That is the only honest place to put an equation, and note what it is: a rate law, not a betting line, and not a toy ratio. Zero betting lines is satisfied structurally, because there is no fixture to price.

Second hop: can I evaluate that rate law against the corpus? The text offers tau tangles as a qualitative finding. [PAGE 29 of 156]: "Brain preserved in formaldehyde, sliced, and examined for abnormalities." [PAGE 30 of 156]: "he was baffled to find unusual dark clusters in Webster's brain tissue... he discovered they were tau tangles — concentrations of a protein typically associated with neurodegenerative diseases." Zero rate constants. Zero concentrations. Zero Braak-stage staging. So the corpus supports the existence of a class of object, not the measurement of any operator on it. That is the gray-zone failure: not fabrication, but unfalsifiable parameter space.

Third hop: what about the dose side? The book supplies an exposure count, and it is the single most quotable number in the drive. [PAGE 63 of 156]: "he said that he was the effects of more than twenty thousand blow while he played football." Note the source's own typographic corruption there — the passage is letter-spaced and partially garbled in the extraction. I will not launder that into false precision, but the magnitude is legible and it is the only quantitative handle on cumulative head impact the corpus contains. Everything else on dose is prose: [PAGE 65 of 156] describes "some 300-pound player with a hand the size of a Christmas ham whacks you in the head dozens of times a game, season after season." Directional, not dimensional.

Fourth hop: the clock problem. CTE is a tauopathy with a post-mortem gold standard and no validated in-vivo diagnostic at the time of the narrative. So there is no clinical stopping rule, no observable hazard function, and no way to time-lock exposure to outcome within the document. Any multi-week trajectory claim would be invention.

Fifth hop: gray-zone audit of the recursive-mind section. The book gives me belief states, not odds. [PAGE 33 of 156] records Commissioner Paul Tagliabue forming the MTBI committee, and Bennet "critiqued the committee's approach, noting their lack of collaboration with established researchers in the field of concussion science." [PAGE 34 of 156] records three doctors demanding retraction, "which usually indicates fraud or misconduct," and Bennet "questioned the integrity of the MTBI committee, noting its lack of neuropathologists." These are stated as character perception inside a Bookey paraphrase — a second-order artifact of a second-order artifact. I can model them as claims about a signaling game; I cannot supply payoffs.

Conclusion of the trace: the correct output for this input is a formal specification with every unknown left as a named symbol, plus an explicit statement that the drive cannot close the system. Not a refusal — a scaffolding with the holes labeled.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>

**Notation.** $B_i \in \mathbb{N}_0$: cumulative head impacts for player $i$ over career. $N_i$: seasons. $n_i$: impacts per season. $\mathcal{B}_j \in \mathbb{R}^3$: linear acceleration vector of impact $j$, SI unit $\mathrm{m\,s^{-2}}$. $\alpha_j$: peak resultant, $\|\mathcal{B}_j\|_2$, unit $\mathrm{m\,s^{-2}}$. $a_{\mathrm{ref}} = 9.80665\ \mathrm{m\,s^{-2}}$ (standard gravity, exact by definition). $M_i \in [0,1]$: neuropathological burden, dimensionless. $P_{\mathrm{free}}(t)$: concentration of unbound tau monomer, unit $\mathrm{mol\,m^{-3}}$. $N_{\mathrm{sites}}$: density of available aggregation nucleation sites, unit $\mathrm{m^{-3}}$. $k_{\mathrm{on}}$: second-order association constant, unit $\mathrm{m^3\,mol^{-1}\,s^{-1}}$. $\rho_{\mathrm{CTE}} = 1$: the post-mortem case indicator (Braak-style staging is the historical gold standard; $\rho=1$ iff tauopathy criteria met at autopsy).

**E1 — Cumulative exposure (book-supported count, no unit conversion).**
$$B_i = \sum_{j=1}^{B_i} 1 = N_i \cdot n_i$$
The corpus supplies a point estimate for at least one subject. [PAGE 63 of 156], verbatim: "he said that he was the effects of more than twenty thousand blow while he played football." I preserve the source's own garbled letter-spacing rather than repair it; the readable content is $B \gtrsim 2\times10^4$ impacts. This is the *only* quantitative handle on dose anywhere in the 156 pages. Corroborating prose at [PAGE 65 of 156]: "you don't have to be a doctor or an engineer or even a football player to realize that the helmet does not block out all the measured force produced when some 300-pound player with a hand the size of a Christmas ham whacks you in the head dozens of times a game, season after season." "Dozens of times a game, season after season" is an order-of-magnitude statement about $n_i$, not a measurement.

**E2 — Governing accumulation operator.** The defensible formal object is a mass-action monomer-sequestration balance:
$$\frac{dP_{\mathrm{free}}}{dt} = -k_{\mathrm{on}}\,P_{\mathrm{free}}\,N_{\mathrm{sites}}, \qquad P_{\mathrm{free}}(0)=P_0$$
For $N_{\mathrm{sites}}$ quasi-static, the closed form is
$$P_{\mathrm{free}}(t) = P_0 \exp\!\left(-k_{\mathrm{on}} N_{\mathrm{sites}}\, t\right)$$
with $t$ in seconds, $P$ in $\mathrm{mol\,m^{-3}}$. The complement, $M(t) = 1 - P_{\mathrm{free}}(t)/P_0$, is a saturating burden with $\lim_{t\to\infty} M(t) = 1$ for any $k_{\mathrm{on}}N_{\mathrm{sites}} > 0$.

**E3 — Dimensionless impact intensity.** The only legitimate use of a g-force figure is normalization, never a ratio-of-convenience:
$$\hat{a}_j \equiv \frac{\alpha_j}{a_{\mathrm{ref}}}, \qquad [\hat{a}] = 1$$

**E4 — Information-theoretic formulation of the dispute.** Let $\Theta \in \{\text{risk real}, \text{risk null}\}$ be the state, and $E$ the published evidence. Mutual information in bits:
$$I(\Theta;E) = \sum_{\theta}\sum_{e} p(\theta,e)\,\log_2\!\frac{p(\theta,e)}{p(\theta)\,p(e)}$$
The corpus supports a qualitative claim about $I > 0$ — [PAGE 34 of 156] records three doctors demanding retraction, and Bennet and colleagues "believed in the robustness of their research" — but supplies no $p(\theta)$, no $p(e)$, no likelihood ratio. Therefore $I$ is uncomputable from this drive. It is a named unknown, not a number.

**SINGULARITY / BREAKDOWN REGIMES.** Three exact breakdown surfaces must be stated:
1. **$\rho_{\mathrm{CTE}} = 0$ with $B_i \gg 0$.** E1 has no invertible map $B \mapsto \rho$; the corpus itself flags this at [PAGE 47 of 156], where Owen Thomas "was diagnosed with CTE despite never having a recorded concussion," illustrating "the risks associated with repetitive subconcussive impacts rather than just severe injuries." Any exposure-only estimator is therefore structurally unidentified at the individual level. Only a population hazard is even potentially estimable, and this drive contains no cohort.
2. **E2 has no closed-form solution regime at all in this corpus.** $k_{\mathrm{on}}$, $N_{\mathrm{sites}}$, and $P_0$ are absent. [PAGE 29 of 156] confirms the method was observational: "Brain preserved in formaldehyde, sliced, and examined for abnormalities." Histology yields a stain, not a rate constant.
3. **Unit collision.** $\alpha_j$ in $\mathrm{m\,s^{-2}}$ cannot be summed against $B_i \in \mathbb{N}_0$. Any expression of the form $B / \alpha$ or $\alpha / B$ is dimensionally void ($\mathrm{s^2\,m^{-1}}$). This is the formal statement of why I will not write a toy index: it would carry a fabricated unit. The Foundry's zero-toy-equations invariant is not stylistic here; it is a dimensional-analysis result.
4. **Second-order artifact boundary.** The Bookey format degrades the primary text. [PAGE 63 of 156] and [PAGE 62–63 of 156] show corrupted letter-spacing mid-quote, and [PAGE 27 of 156] ends with the literal string "Install Bookey App to Unlock Full Text and Audio" — confirming the drive is an abridged derivative, not Laskas's book. Precision claims sourced to it inherit that ceiling.

</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>

The lineage runs through three separable traditions that the corpus braids together without labeling.

**Tradition 1: the football-legal line.** [PAGE 8 of 156] introduces "his specialized interest in brain pathology, particularly after examining the brain of Mike Webster, a retired NFL player." [PAGE 26 of 156] fixes the mechanism of entry: "During Webster's autopsy, Bennet notes physical trauma and contemplates the impact of football-related injuries. He feels something is wrong and decides to preserve Webster's brain for further analysis." The governing fact of the case is that the organ *looked* unremarkable. [PAGE 98 of 156] is explicit: "Bennet expected to find severe damage resembling that of dementia pugilistica due to Mike Webster's extensive history of head trauma in football. However, upon examination, he discovered that Webster's brain appeared grossly normal, which was surprising and disappointing to him."

That single sentence is the most scientifically load-bearing line in the entire drive. It marks the moment the gross-examination paradigm — the one that had governed neuropathology since the nineteenth century, where lesions are visible to the naked eye or at low magnification — failed. The pathology was at a scale the inherited instrument could not resolve. This is the Kuhnian anomaly, and the book states it plainly rather than dramatizing it.

**Tradition 2: the boxing prior.** [PAGE 30 of 156] records that the tau finding "suggested a connection between Webster's brain condition and similar brain damage seen in boxers," and [PAGE 104 of 156] sharpens it: "Bennet uncovers a pattern of tau tangles identical to those seen in boxers with dementia pugilistica, leading him to postulate that football players may suffer similar brain damage from repeated head trauma."

The genealogy matters because the boxing literature supplied both the *hypothesis* and the *rejection template*. Dementia pugilistica was described in the clinical literature decades before the 2005 paper; that prior art is what made the football extension legible to a neurologist and simultaneously gave the opposition a familiar move: "this is a known boxer's disease, you are pattern-matching where none is warranted." [PAGE 65 of 156] records the exact rebuttal to the helmet intuition — "A football helmet gives you an awful lot of protection, but you don't have to be a doctor or an engineer or even a football player to realize that the helmet does not block out all the measured force." The pre-1994 history is absent from this drive; I can see the pointer and not the referent.

**Tradition 3: the institutional-skepticism line.** [PAGE 33 of 156]: "Commissioner Paul Tagliabue to form the MTBI committee to research head injuries," with the named predecessor cases "such as Al Toon and Merril Hoge." [PAGE 34 of 156]: the retraction demand came from "NFL-affiliated MTBI committee members," and Bennet "questioned the integrity of the MTBI committee, noting its lack of neuropathologists and potential bias towards minimizing concussion issues."

**Multi-week trap audit.** The natural error mode here is to read the institutional sequence as a tight causal chain — publication July 2005 ([PAGE 34 of 156]), retraction demand shortly after ([PAGE 34 of 156]), indictment of Wecht ([PAGE 37 of 156]), Summit in Chicago ([PAGE 42 of 156]). The trap is over-connecting these. The corpus gives no dates for the committee's formation relative to the paper, no record of internal deliberation, and no documents. What it gives is a sequence of *character perceptions* inside a Bookey paraphrase. A second trap: treating Nowinski's arrival as causal for Bennet's marginalization. [PAGE 38 of 156] says Nowinski "proposes to collaborate," [PAGE 39 of 156] says he sought "to position himself as the hero in this narrative, overshadowing Bennet's contributions," [PAGE 41 of 156] records the departure over "demands for personal compensation." Correlation, narrated. Not established.

A third trap specific to the Omalu biography: [PAGE 12 of 156] places his birth amid the Biafran War, [PAGE 15 of 156] his medical-school entry at sixteen, [PAGE 18 of 156] his 1994 arrival in the U.S. and, five years later, 1999. Any attempt to build a multi-week forward model off this scaffolding requires filling at least six years of unrecorded interval. I decline.

</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>

Three belief-holders with recoverable positions, and one hard ceiling on what can be inferred.

**Agent A — Bennet Omalu.** Observable from the corpus: high tolerance for professional isolation, low tolerance for leaving an anomaly unexplained. Evidence: [PAGE 29 of 156] records the work was done "out of curiosity rather than obligation or funding" and "preferring to keep the investigation discreet"; [PAGE 30 of 156] notes he "delayed his analysis, treating it more like an unhurried project"; [PAGE 62 of 156] gives the operative epistemology — "The mind should be allowed to wander!" and "What the mind doesn't know, the eye cannot see." The last of these is an explicit statement that prior belief conditions perception. That is a metacognitive claim, not a modesty trope.

His belief about the adversary is stated in information terms. [PAGE 64 of 156]: "I realized I knew the subject better than these so-called top physicians. Their understanding of the subject was embarrassingly naive and virginal." This is a claim about differential expertise, and it functions as his license to discount institutional authority.

**Agent B — the institutional bloc.** Corpus positions: the MTBI committee as constituted lacked neuropathologists ([PAGE 34 of 156]); the retraction demand itself ([PAGE 34 of 156]); [PAGE 39 of 156] "the NFL's response is one of denial, with the science committee refuting any claims that link long-term brain damage to football injuries"; [PAGE 44 of 156] damage control "attempting to undermine Bennet's credibility while promoting their research initiatives," with "various researchers, including Peter Davies, eventually validate Bennet's findings, but the NFL chooses not to publicize their report."

The formal object here is a signaling game with a mixed-strategy equilibrium, and the corpus describes one realized path through it: demand retraction (cheap, high-upside), then when that fails, fund a competing research program (costly but credible), then decline to publish validating third-party work. What I cannot supply is the payoff matrix. No budget figures, no internal memos, no testimony in this drive. [PAGE 65 of 156] poses the question the book itself leaves open: "Here we have a multi-billion-dollar industry. Where does their responsibility begin?"

**Agent C — the allies, and the fracture inside the coalition.** [PAGE 34 of 156]: Julian Bailes "validated Bennet's research and highlighted systemic issues within the NFL"; the alliance with Bob Fitzsimmons formed. [PAGE 39 of 156] the Sports Legacy Institute is floated. [PAGE 41 of 156] then the fracture: "Chris Nowinski's demands for personal compensation lead to tensions, causing a rift among the group." [PAGE 44 of 156]: the NFL "offering a substantial donation to Nowinski's research group, further emphasizing the commercialization of CTE studies."

This is the genuinely interesting recursive structure, and it is a trap for the analyst. Two readings are both consistent with the drive. Reading 1: the coalition fractured on internal resource conflict, and the institutional actor acquired a research节点 without ever conceding the science. Reading 2: the fracture is narration smoothing over a dispute about credit and priority that the book does not resolve. The corpus does not adjudicate. Any output claiming to know which is the case is manufacturing certainty.

**Crisis-habit regression vs counter-trap vs clock.** Bennet's crisis habit, established early and repeatedly, is withdrawal into work and a preference for the dead over the living. [PAGE 9 of 156]: "he reflects on the differences between living and dead people, suggesting that the latter provide clarity and an honest narrative." [PAGE 55 of 156]: "Living people mess you up. Living people are messy. Dead people are clean." [PAGE 58 of 156]: "In death, he thought, everyone was equal." Under institutional attack ([PAGE 34 of 156], [PAGE 41 of 156]), this habit predicted continued retreat and continued publication — and the corpus bears that out ([PAGE 43 of 156]: he keeps finding CTE, in Tom McHale, while "facing challenges in sharing this news due to conflicts with other researchers").

The counter-trap: treating the withdrawal as purely pathological. [PAGE 129 of 156] records his own reframing — the outsider position "allows him to engage deeply with the unsettling realities of death and disease without the distractions and messy politics of living people. It gave him the freedom to focus purely on his work, leading him to discover CTE." The habit is simultaneously a symptom of the depression documented at [PAGE 15 of 156] and [PAGE 91 of 156], and the enabling condition of the discovery. Both are true; the corpus asserts both.

**Clock.** The decisive temporal fact is that CTE's diagnostic gold standard in this era was post-mortem histology ([PAGE 29 of 156]). There is no in-vivo assay in the drive. Consequently the clock that matters is not a recovery clock or a rehab clock — there is no reversible state to model. The clock is the interval between exposure and death, and it is unobserved. Anyone constructing a multi-week trajectory here is inventing a time variable the corpus does not contain.

</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>

Layer 1 — biomechanics. VETO-adjacent, not veto. The book's own physics claim is at [PAGE 65 of 156]: "the helmet does not block out all the measured force produced when some 300-pound player with a hand the size of a Christmas ham whacks you in the head dozens of times a game, season after season." This is qualitatively sound: helmets manage linear deceleration and skull fracture risk, and do not eliminate intracranial rotational loading. But the drive gives no accelerometer data, no impact counts per play, no positional breakdown, no helmet model. So the biomechanical layer can be *described* and cannot be *quantified* from this corpus. Any number I emit would be imported from outside the drive and then falsely attributed to it.

Layer 2 — neuropathology. Not vetoed, but explicitly declared *underpowered*. [PAGE 30 of 156]: "unusual dark clusters" resolved as "tau tangles — concentrations of a protein typically associated with neurodegenerative diseases." [PAGE 26 of 156]: the antecedent autopsy found "Alzheimer's disease changes in her brain" in a 44-year-old assault victim, which "influenc[ed] the narrator's future work." The chain is: a prior case primes the hypothesis, a new case tests it, histology confirms at the microscopic level where gross examination had failed ([PAGE 98 of 156]). That is a complete qualitative argument. It contains zero measurements. Formally: the drive establishes $\rho_{\mathrm{CTE}} = 1$ for named individuals and establishes $B \gg 0$ for at least one; it establishes no functional relation between them.

Layer 3 — exposure. Partially quantified, fatally confounded. $B \gtrsim 2\times 10^4$ from [PAGE 63 of 156]. Confounders visible in the drive and uncontrolled: [PAGE 47 of 156] Owen Thomas, CTE "despite never having a recorded concussion" — which breaks any concussive-event-only exposure metric. [PAGE 48 of 156] Fred McNeill, "deteriorating mental health," undated in the drive. [PAGE 34 of 156] Terry Long, CTE at autopsy. [PAGE 43 of 156] Tom McHale. [PAGE 40 of 156] Justin Strzelczyk, a 2004 fatal crash, associated with CTE "later investigations." [PAGE 38 of 156] Andre Waters, suicide, [PAGE 39 of 156] linked via a New York Times story. Every one of these is a case report. The drive contains no denominator. No cohort size, no control group, no person-years. I cannot compute an incidence, a prevalence, a relative risk, or a hazard ratio, because the denominator does not exist in the input.

Layer 4 — weather/environmental. Formally VETOED as inapplicable. The corpus contains no environmental covariate of any kind relevant to a neuropathological outcome. There is no stadium, no temperature, no altitude, no air quality. This layer is empty, and the correct handling of an empty layer is to report it as empty, not to populate it with narrative color.

Layer 5 — verification of source. PARTIAL VETO. The drive is a Bookey derivative, not the book. Direct evidence: [PAGE 2 of 156] "Written by Bookey"; recurring "Install Bookey App to Unlock Full Text and Audio" ([PAGE 16 of 156], [PAGE 27 of 156], [PAGE 35 of 156]); corrupted letter-spaced passages at [PAGE 59 of 156] and [PAGE 62–63 of 156]; and a contents page ([PAGE 6 of 156]) listing fourteen chapters while the drive contains summary-level treatment only. Any quote I cite carries that ceiling. The quiz sections confirm the derivative nature — [PAGE 149 of 156] lists "1. Bennet Omalu found tau tangles in Mike Webster's brain, indicating potential neurodegenerative damage" as a checkable item, with the correct-answer key withheld ("Check the Correct Answer on Bookey Website").

ADJUDICATION: No physical veto fires against the core narrative claim. What fires is a *sufficiency* veto on every quantitative output the requested format presupposes. I will therefore not emit a number that the drive cannot underwrite.

</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>

RLVR framing: for each scenario, the verifiable prediction is stated as a falsifiable check against the drive. All three resolve in favor of withholding numeric output.

**Veto 1 — The Cohort Denominator Test.**
Claim tested: that a rate, hazard, or probability of CTE given football exposure can be derived from this drive.
Prediction if the claim were true: the drive would contain a defined at-risk population and a follow-up interval.
Observed: [PAGE 33 of 156] "The chapter reflects on the evolving conversation around concussions in the NFL, beginning with prominent cases such as Al Toon and Merril Hoge" — named cases, no cohort. [PAGE 42 of 156] "investigate the condition, corroborating suspicions that football contributes to severe mental health issues" — corroboration asserted, N absent. [PAGE 39 of 156] "Thousands of players. Billions of dollars! That's what the NFL owes these guys" — magnitude rhetoric, not a count.
Result: VETO CONFIRMED. No denominator exists. Any prevalence or risk figure is fabrication.

**Veto 2 — The Rate-Constant Test.**
Claim tested: that the tau-accumulation operator $dP_{\mathrm{free}}/dt = -k_{\mathrm{on}}P_{\mathrm{free}}N_{\mathrm{sites}}$ can be parameterized.
Prediction if the claim were true: the drive would contain a concentration, a time constant, a staging grade, or an immunohistochemical quantification.
Observed: [PAGE 29 of 156] "Brain preserved in formaldehyde, sliced, and examined for abnormalities" — method only. [PAGE 30 of 156] "unusual dark clusters" — qualitative morphology. No numerical staging anywhere in 156 pages. No Braak stage, no CTE stage, no optical density.
Result: VETO CONFIRMED. The operator is a correct formal object with an empty parameter vector. Reporting it as solved would be the exact failure mode the zero-toy-equations invariant prohibits.

**Veto 3 — The Injury-Severity Coupling Test.**
Claim tested: that concussive events can be used as the exposure metric.
Prediction if the claim were true: the drive would treat diagnosed concussion as necessary for CTE.
Observed: the drive explicitly refutes this. [PAGE 47 of 156]: "The story of Owen Thomas, a young player diagnosed with CTE despite never having a recorded concussion, illustrates the risks associated with repetitive subconcussive impacts rather than just severe injuries." [PAGE 155 of 156] restates it as a quiz item: "Owen Thomas was diagnosed with CTE after having multiple recorded concussions during his playing career" — which is the distractor, since the summary at [PAGE 47 of 156] says the opposite.
Result: VETO CONFIRMED, with a documented internal inconsistency in the source itself between [PAGE 47 of 156] and [PAGE 155 of 156]. Any exposure metric built on diagnosed concussions is invalidated by the drive's own text.

**Additional verifiable observations closing the audit.**
- The July 2005 publication venue is named twice and consistently: [PAGE 34 of 156] "published in July 2005 in *Neurosurgery*," and [PAGE 111 of 156] the same. Title given at [PAGE 63 of 156]: "Chronic Traumatic Encephalopathy in a National Football League Player."
- Retraction demand attributed to "NFL-affiliated MTBI committee members" at [PAGE 34 of 156]; the quiz at [PAGE 150 of 156] states the alternative — "The doctors who demanded the retraction of Bennet's paper were independent researchers not affiliated with the NFL" — as the false option.
- The one quantitative dose figure, $B \gtrsim 2\times10^4$, appears at [PAGE 63 of 156] in a corrupted passage and is not corroborated anywhere else in the drive. Single-source, degraded. Usable only as an order-of-magnitude anchor, and I flag it as such rather than promote it to a measured quantity.

FINAL DISPOSITION: Source accepted as a qualitative narrative of a scientific discovery and an institutional contest. Source rejected as a basis for any quantitative model of CTE risk, incidence, latency, or progression. The formal apparatus above is supplied as the correct shape of the missing analysis, with all unknown parameters named, all units declared, and all singularity regimes stated — so that a future drive with actual biomechanical or cohort data can populate it without re-deriving the structure.