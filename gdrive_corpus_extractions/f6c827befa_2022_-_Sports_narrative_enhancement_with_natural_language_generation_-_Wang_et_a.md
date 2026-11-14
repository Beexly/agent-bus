---
source: "2022 - Sports narrative enhancement with natural language generation - Wang et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2022"
pages: 9
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4297
---

<NATIVE_REASONING>
The user wants a GSE + GSI Frontier Reasoning Foundry response based on a provided source paper about sports narrative enhancement with natural language generation (Wang et al., 2022 MIT Sloan).

Strict invariants:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important constraints: The source is a paper about NLG for sports narratives. There are no betting lines in the paper, so invariant 1 is easy to satisfy (just don't mention them). I need to avoid toy equations. I need to use formal LaTeX equations with units (information theory units like bits, nats, probability units, BLEU scores which are dimensionless 0-100 or 0-1, perplexity dimensionless). I need exact page citations [PAGE N] based on the provided markdown which has page numbers embedded (1, 2, 3, etc. appear as standalone numbers between sections). I should map content to page numbers.

Let's map pages from the markdown:
- Page 1: Title, Abstract/Introduction, Section 2 start, Figure 1 mention.
- Page 2: Section 2.1 Template to ML, 2.1.1 Dataset, Table 1, Table 2.
- Page 3: Section 2.1.2 Methods (T5), Table 3, 2.1.3 Evaluation metric BLEU.
- Page 4: Section 2.2 Improve comprehensibility, 2.2.1 Methods – back translation, Figure 2.
- Page 5: Section 2.2.1 Methods - paraphrasing (note mislabeled header), Figure 3 mention, 2.2.2 Model evaluation, Perplexity formula.
- Page 6: Section 2.3 Solution Architecture, Figure 4 workflow.
- Page 7: Section 3 Results, Figure 5 (a) and (b) mention, discussion of keyword constraints, Table 4 mention.
- Page 8: Table 4 comparisons, Figure 6 mention.
- Page 9: Section 4 Conclusion, References.

Wait, the markdown shows page numbers like "1", "2", etc. as standalone lines. Let's trace:
- After intro text: "1" appears -> Page 1 ends? Actually looks like page breaks.
- After Table 2: "2" appears -> Page 2.
- After BLEU discussion: "3" appears -> Page 3.
- After back translation section: "4" appears -> Page 4.
- After perplexity formula: "5" appears -> Page 5.
- After Figure 4 mention: "6" appears -> Page 6.
- After Figure 5 description: "7" appears -> Page 7.
- After Table 4: "8" appears -> Page 8.
- After Conclusion/References: "9", "10" appears -> Page 9/10? The source says PAGES: 9 but markdown shows 10 at end. Anyway, I'll cite [PAGE 1] through [PAGE 9] based on visible markers.

Need verbatim quotes where citing exact pages.

Now, content requirements:
- THINK_TRACE: Deep multi-hop derivation & gray-zone audit >=400 words. Need to analyze the paper's methodology, potential failure modes, information-theoretic constraints, semantic preservation vs fluency trade-offs, keyword constraint strictness, perplexity vs BLEU tension, etc.
- SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. Need equations for:
  - BLEU: BP * exp( (1/4) sum_{n=1}^4 log p_n ) or similar. Units: dimensionless [0,100] or [0,1]. Paper says ranges 0 to 100.
  - Perplexity: PPL(X) = exp( - (1/N) sum_{i=1}^N log p(x_i | x_{<i}) ). Units: dimensionless (perplexity). Or in bits: 2^{H} etc. Need formal LaTeX with assumptions.
  - Transfer learning objective: minimize cross-entropy L = - E_{(x,y)~D} [ log p_θ(y|x) ]. Units: nats or bits depending on log base.
  - Back translation as composition: x ->_{M_{src->tgt}} z ->_{M_{tgt->src}} x'. Information bottleneck.
  - Keyword constraint: indicator function 1{ all k in K ⊆ tokens(x') }.
  - Breakdown regimes: when perplexity reduction fails to preserve keywords; when intermediate language lacks sport-specific lexemes (American Football terms in Chinese/Russian vs German/Spanish); when template is too strict (synonym mismatch).
- RETROCAUSAL_GENEALOGY: Historical lineage: NLG from rule-based templates to T5 transfer learning, back-translation (SMT/NMT), PAWS paraphrasing, GPT-2 perplexity. Multi-week traps: overfitting to template style, distributional shift across sports/seasons, keyword brittleness over weeks as new metrics emerge, semantic drift in paraphrase.
- RECURSIVE_THEORY_OF_MIND: This is about modeling the broadcaster/fan as an agent with beliefs. Crisis habit regression: under pressure, broadcasters revert to rigid templates. Counter-trap: ML pipeline might over-optimize for perplexity and lose semantic nuance, causing commentator distrust. Clock: real-time constraint of live game, latency of T5 + back translation/paraphrasing pipeline.
- CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. This is a bit odd for a pure NLP paper, but I can frame it as: the narrative generation layer is vetoed by physical broadcast constraints (airtime seconds, audio latency), biomechanical constraints (commentator reading speed ~ words per minute), weather (none really, but outdoor stadium conditions affecting data collection? Maybe not). Better: Cross-layer veto = if the generated narrative exceeds time-to-speak threshold given commentator articulation rate, veto. Weather doesn't apply directly but can be noted as null set. Physical layer: GPU inference latency must be < broadcast delay. Biomechanical: words per minute (wpm) comprehension limit. Weather: not applicable / null veto.
- RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR (Reinforcement Learning from Verifiable Rewards?) veto scenarios + predictions. Need to invent scenarios that are verifiable (not betting). e.g., Veto scenario 1: Keyword absence despite lower perplexity -> system falls back to T5 output. Prediction: fallback rate > X%. Veto scenario 2: Intermediate translation language lacks NFL terminology -> information loss (e.g., "when leading" dropped). Prediction: semantic slot error rate increases for low-resource intermediate languages. Veto scenario 3: Paraphrasing substitutes domain-specific term ("pressuring the quarterback" -> "hitting the quarterback") changing factual claim -> human audit catches factual contradiction. Prediction: precision on predicate-argument structure drops below threshold.

Word count: >=1000 words across sections. THINK_TRACE alone >=400. Total must be >=1000. I'll aim for roughly 1500-2000 total to be safe.

Format: Exact XML sections. No extra text outside? The user says "across these exact XML sections". I should output only these sections, or at least ensure they are present. I'll output just the sections in order.

Need to be careful: "ZERO TOY EQUATIONS" means no made-up ratios. All equations must be formal and cited to page where applicable. The paper gives BLEU range [PAGE 3] and perplexity formula on [PAGE 5] (though the formula in markdown is garbled, I can reconstruct standard formula and note it's from page 5 discussion). I should cite page numbers like [PAGE 3], [PAGE 5], etc.

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

No betting lines anywhere.

Check word counts as I write.

THINK_TRACE content plan:
- Multi-hop derivation: Tabular features -> concatenated text sequence -> T5 fine-tuning (cross-entropy) -> template-mimicking output -> back translation / paraphrasing -> perplexity ranking -> keyword gating -> final output. Each hop has information loss risk.
- Gray-zone audit: The paper claims 13% average perplexity reduction [PAGE 7], but back translation alone reduces to 42.5 from 63.9 (~33%) and paraphrase to 47.3 (~26%), while final workflow only 55.7 (~13%) because of strict keyword gate [PAGE 6-7]. This reveals a gray zone: readability gains are sacrificed for factual slot preservation.
- Another gray zone: BLEU >99 on test set [PAGE 3] means the model memorizes template syntax rather than learning robust semantics; it may not generalize to truly novel metric combinations outside permutation space.
- Synthetic dataset generation via permutation [PAGE 2] creates a closed-world assumption; real-world injuries, new players, or rule changes are OOD.
- Back translation intermediate language choice matters: German/Spanish preserve American Football terms better than Chinese/Russian [PAGE 4], indicating a morphological/syntactic compatibility constraint that is unstated but critical.
- Keyword dictionary is fixed and exact-match [PAGE 6], causing false negatives for synonyms ("incomplete passes" vs "pass incomplete" keywords fail/complete/pass) [PAGE 7].
- Breakdown regimes: when perplexity and keyword containment conflict; when paraphrase alters predicate ("pressuring" -> "hitting") [PAGE 7]; when live latency budget is exceeded by multi-stage pipeline.

Need to ensure >=400 words.

SOURCE_OPERATORS_AND_EQUATIONS content plan:
- Define input space X, output space Y.
- T5 fine-tuning objective: L_NLL(θ) = - Σ log p_θ(y_i | x_i). Units: nats (if natural log). Page [PAGE 3].
- BLEU: BLEU = min(1, exp(1 - |r|/|c|)) * exp( (1/4) Σ_{n=1}^4 log p_n ). Dimensionless [0,1] or [0,100]. Paper says 0 to 100 [PAGE 3]. Test score above 99 [PAGE 3].
- Perplexity: PPL(X) = exp( - (1/T) Σ_{t=1}^T log p(x_t | x_{<t}) ). Dimensionless. Paper page [PAGE 5] gives formula and GPT-2 example.
- Lower perplexity indicates higher estimated probability under language model; units can be converted to bits: H(X) = log2(PPL). 
- Keyword gate: accept x' iff PPL(x') < PPL(x_T5) AND ∀k ∈ K: k ∈ tokens(x'). Else fallback. Page [PAGE 6].
- Breakdown regime: If K ∩ tokens(x') = ∅ due to synonym substitution, reject despite lower PPL. Exact-match rigidity.
- Information bottleneck of back translation: I(X; Z) ≤ min(H(X), H(Z)); if intermediate language lacks sport-specific lexemes, mutual information drops, causing slot deletion (e.g., "when leading" omitted) [PAGE 4].

RETROCAUSAL_GENEALOGY content plan:
- Lineage: Rule-based templates (rigid, high maintenance) [PAGE 1] -> statistical MT / NLG surveys [PAGE 1 refs] -> T5 transfer learning from C4 [PAGE 3] -> back translation for data augmentation/fluency [PAGE 4] -> PAWS paraphrasing with Top-K/Top-P [PAGE 5] -> GPT-2 perplexity as fluency proxy [PAGE 5].
- Historical trap: earlier template systems failed at scale due to manual maintenance [PAGE 1]; current system risks overfitting to template distribution (BLEU >99 means mimicry not understanding) [PAGE 3].
- Multi-week traps: Across a season, new statistics emerge; fine-tuning with a few hundred samples is claimed [PAGE 1] but synthetic permutation distribution may not cover novel joint configurations, causing covariate shift week-to-week. Paraphrase drift accumulates over weeks if synonym library isn't updated [PAGE 7 future work].

RECURSIVE_THEORY_OF_MIND content plan:
- Model broadcaster B and fan F as agents. B has beliefs about narrative quality Q; F has beliefs about game state G.
- Crisis habit regression: Under live-game time pressure (clock), B reverts to template narratives if ML output latency > airtime gap or if distrust from prior semantic errors. This is a regressive habit loop: stress -> rigid templates -> reduced engagement.
- Counter-trap: ML pipeline optimizes PPL (fluency) but not commentator trust; if system over-rewrites and drops keywords ("when leading"), B perceives narrative as unreliable and reverts, causing automation bias collapse.
- Clock: Real-time constraint. Inference latency L_T5 + L_backtrans + L_paraphrase must fit within broadcast delay Δ_t. If L_total > Δ_t, pipeline is bypassed. This creates a hard deadline game-theoretic constraint.

CROSS_LAYER_VETO_ADJUDICATION content plan:
- Physical layer: Inference latency (ms) vs broadcast delay (seconds). Veto if L_total > Δ_air.
- Biomechanical layer: Commentator articulation and listener comprehension. Words per minute (wpm). Typical human listening comprehension ~150-180 wpm; narrative length L_words must satisfy L_words / WPM ≤ segment duration. Veto if too verbose.
- Weather layer: Null set for this paper (no weather dependency in NLG pipeline); however, if tabular inputs are corrupted by weather-related sensor outages, upstream data veto applies. State explicitly as null/not applicable.
- Veto adjudication: The keyword gate [PAGE 6] acts as a semantic veto over the statistical fluency optimizer. Cross-layer: physical latency veto OR keyword veto OR length veto overrides perplexity minimization.

RLVR_COUNTERFACTUAL_VETOES content plan:
- RLVR = Reinforcement Learning from Verifiable Rewards (verifiable, not betting).
- Scenario 1: Synonym exact-match veto. Input: "pass incomplete" mapped to keywords {fail, complete, pass}. Rewrite: "incomplete passes" has lower PPL but fails exact keyword check. Verifiable by string matching. Prediction: fallback rate to T5 output >40% for plays involving pass outcomes; exact-match gate suppresses fluency gains.
- Scenario 2: Intermediate language lexical gap. Back translation via Chinese/Russian drops American Football-specific situational modifiers (e.g., "when leading", "inside two minutes"). Verifiable by slot extraction F1. Prediction: semantic slot recall drops ≥15 points for low-compatibility intermediate languages vs German/Spanish [PAGE 4].
- Scenario 3: Predicate substitution alters truth value. Paraphrase maps "pressuring the quarterback" to "hitting the quarterback" [PAGE 7]. Verifiable by human audit or predicate-argument consistency check. Prediction: factual error rate ≥5% on defensive pressure metrics, triggering manual override and pipeline bypass for that sample.
- Each includes counterfactual prediction and verification method.

Need to ensure no toy equations. All formal. Use LaTeX.

Need to ensure page citations are exact and quotes verbatim where cited. I'll quote short phrases.

Page mapping verification:
- [PAGE 1]: Introduction. "to keep up with the fast-paced nature of many games, broadcasters rely on template-generated narratives" and "Because of the fixed structure, however, these narratives often sound rigid". Also "This enables broadcasters to produce more natural-sounding narratives and easily scale narrativegeneration engines." (typo in source narrativegeneration).
- [PAGE 2]: Dataset section. "synthetically generate a dataset using rule-based methodology... includes more than 57,000 samples composed of eight features." Table 1 and Table 2.
- [PAGE 3]: Methods T5. "T5 achieves state-of-the-art results on many NLP benchmarks". BLEU section: "BLEU score ranges from 0 to 100." "After fine-tuning on a few thousand sentences, the T5 model is able to achieve a BLEU score above 99 on the test set".
- [PAGE 4]: Back translation. "For back translation, we used pre-trained neural machine translation models from fairseq". "Languages that share similar syntax and word roots are usually good candidates... German and Spanish generate more meaningful and accurate back translation results compared to Chinese and Russian." "We also notice undesirable occasions where some information is lost during the back translation process. For example, the “when leading” context is left out".
- [PAGE 5]: Paraphrasing and Perplexity. "we employ Top-K and Top-P sampling techniques". Perplexity formula (garbled but discussed). "GPT2 will assign a lower perplexity score to a sentence like “Can you do it?” and assign a higher perplexity score to a sentence like “Can you does it?”".
- [PAGE 6]: Solution Architecture. "replacing the current ruled-based approach with the finetuned T5 model and 2) enhancing the generated narratives through a multistep ML-based approach." "A fixed tabular feature to keywords dictionary is passed to check if the resulting narratives contain the keywords."
- [PAGE 7]: Results. "Original narratives have perplexity score of 63.9(±26.3), back translation reduces perplexity to 42.5(±17.4), paraphrasing reduces perplexity to 47.3(±17.4) and final narratives out of workflow have perplexity score of 55.7(±26.5)." "With a 13% average reduction in perplexity". Table 4 discussion. "One way to improve is to include synonyms of keywords and features... We leave this as part of the future work."
- [PAGE 8]: Table 4 examples.
- [PAGE 9]: Conclusion. "Because the solution is built on top of language models that are pretrained on huge text corpus, additional metrics and game situations can get passed in directly to generate the desired outputs."

Okay. I'll write it now, ensuring word count.

Let's estimate words. THINK_TRACE needs >400. I'll write about 500. SOURCE_OPERATORS about 400. Others 200 each. Total ~1700.

Need to ensure no mention of betting. None.

Let's compose carefully.

Use XML tags exactly as specified.

Start writing.
</NATIVE_REASONING>

<THINK_TRACE>
The pipeline operates as a sequence of information-transform hops, each introducing a distinct failure regime. Hop one maps eight tabular features—statistic, situation, value, time frame, rank, rank order, population, and team/player name—into a flattened text sequence via concatenation [PAGE 2]. This collapses a structured relational record into a linear token stream, discarding schema-level type constraints. Hop two fine-tunes a T5 language model, pretrained on the Colossal Clean Crawled Corpus (C4), to maximize the conditional likelihood of template-generated target narratives given those sequences [PAGE 3]. Because the synthetic dataset contains more than 57,000 samples produced by permuting feature values, team names, and player names [PAGE 2], the model’s high test-set BLEU score above 99 [PAGE 3] primarily demonstrates mimicry of fixed template syntax within the permutation support, not robust semantic generalization to novel, out-of-distribution game events. The gray zone emerges here: a BLEU score near the ceiling signals overfitting to the template distribution, meaning that any statistic or situation outside the permuted training set lies in an unquantified breakdown region.

Hop three applies readability enhancement through back translation or paraphrasing. Back translation composes two neural machine translation mappings, X → Z → X′, where Z is an intermediate language [PAGE 4]. The paper notes that German and Spanish preserve American Football terminology better than Chinese and Russian, and that context such as “when leading” can be dropped entirely [PAGE 4]. This is an information-bottleneck failure: the mutual information I(X; Z) is bounded by the entropy of the intermediate language’s sport-specific lexicon, so low-compatibility languages induce slot deletion. Paraphrasing, implemented with a T5 model fine-tuned on PAWS and decoded with Top-K and Top-P sampling [PAGE 5], further risks predicate substitution—for example, “pressuring the quarterback” becoming “hitting the quarterback” [PAGE 7]—which preserves fluency while altering the propositional content.

Hop four is the keyword gate described in the solution architecture: a fixed tabular-feature-to-keywords dictionary must be wholly contained in the candidate output, and the candidate’s perplexity must be lower than the T5 baseline, otherwise the workflow falls back to the raw T5 output [PAGE 6]. The results quantify the cost of this gate. Original narratives average perplexity 63.9(±26.3); back translation reaches 42.5(±17.4); paraphrasing reaches 47.3(±17.4); but the final workflow output averages only 55.7(±26.5), a 13% reduction [PAGE 7]. The gap between the unconstrained enhancement methods and the gated workflow reveals that semantic-preservation constraints suppress most of the readability gain. A stricter exact-match keyword check rejects valid synonyms—for instance, “incomplete passes” fails against keywords {fail, complete, pass} [PAGE 7]—creating a brittle boundary where statistical fluency and factual slot containment are in direct tension.

The multi-hop chain therefore has three exact breakdown regimes: (1) out-of-permutation support inputs where T5 has no template analog; (2) intermediate-language lexical gaps that delete situational modifiers; and (3) exact-match keyword rejection of lower-perplexity paraphrases. The paper’s proposed remedy—synonym expansion—is explicitly deferred to future work [PAGE 7], leaving the system vulnerable to silent semantic drift whenever a paraphraser selects a domain-adjacent but factually different verb.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(x \in \mathcal{X}\) denote a flattened tabular feature sequence and \(y \in \mathcal{Y}\) the corresponding template narrative. Stage one fine-tunes T5 by minimizing the negative log-likelihood over the synthetic dataset \(\mathcal{D} = \{(x_i, y_i)\}_{i=1}^{N}\), \(N > 57{,}000\) [PAGE 2]:

\[
\mathcal{L}_{\text{NLL}}(\theta) = -\frac{1}{N}\sum_{i=1}^{N} \log p_{\theta}(y_i \mid x_i).
\]

With natural logarithms the loss unit is nats; with base-2 logarithms it is bits. The reported test-set BLEU score above 99 [PAGE 3] uses the standard sentence-level definition

\[
\text{BLEU} = \text{BP}\cdot \exp\!\left(\frac{1}{4}\sum_{n=1}^{4}\log p_n\right), \qquad
\text{BP} = \min\!\left(1,\; e^{1-|r|/|c|}\right),
\]

where \(p_n\) is the modified n-gram precision, \(r\) is reference length, and \(c\) is candidate length. BLEU is dimensionless and the paper states its range as 0 to 100 [PAGE 3].

Stage two ranks candidates by perplexity. For a tokenized sentence \(X = (x_1,\dots,x_T)\), perplexity is

\[
\operatorname{PPL}(X) = \exp\!\left(-\frac{1}{T}\sum_{t=1}^{T}\log p(x_t \mid x_{<t})\right),
\]

a dimensionless quantity; its information-theoretic equivalent is the cross-entropy \(H(X) = \log_2 \operatorname{PPL}(X)\) measured in bits per token [PAGE 5]. The workflow accepts a rewritten candidate \(x'\) only if

\[
\operatorname{PPL}(x') < \operatorname{PPL}(x_{\text{T5}})
\quad\text{and}\quad
\forall k \in K:\; k \in \text{tokens}(x'),
\]

where \(K\) is the fixed keyword dictionary derived from the tabular features; otherwise it reverts to \(x_{\text{T5}}\) [PAGE 6].

Back translation is the composition \(x \xrightarrow{M_{\text{src}\to\text{int}}} z \xrightarrow{M_{\text{int}\to\text{src}}} x'\) [PAGE 4]. Its information bottleneck satisfies \(I(X;Z) \le \min(H(X), H(Z))\); when the intermediate language lacks American Football-specific lexemes, \(I(X;Z)\) collapses and situational slots such as “when leading” are deleted [PAGE 4]. Breakdown occurs exactly when the conjunction above is false despite \(\operatorname{PPL}(x') < \operatorname{PPL}(x_{\text{T5}})\), which the paper documents as the dominant reason the final workflow achieves only a 13% average perplexity reduction instead of the larger unconstrained gains [PAGE 7].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s lineage begins with rule-based template stitching, which broadcasters use because of the fast-paced nature of live games but which produces rigid, hard-to-understand narratives that scale poorly as data volume rises [PAGE 1]. This places the work in the classical NLG tradition surveyed by Gatt and Krahmer [PAGE 1, ref. 1], moving from handcrafted templates to statistical transfer learning. The methodological ancestor is the Text-To-Text Transfer Transformer (T5), pretrained on C4 and repurposed via fine-tuning on tabular-to-text pairs [PAGE 3, ref. 3]. The readability stage inherits two distinct NLP lineages: back translation, drawn from neural machine translation and text augmentation via fairseq [PAGE 4, refs. 5–6], and paraphrasing via a PAWS-fine-tuned T5 with Top-K and Top-P sampling [PAGE 5, refs. 8–11]. Fluency is proxied by perplexity, itself a speech-recognition and language-modeling metric popularized by GPT-2-style unsupervised multitask learners [PAGE 5, refs. 13–14].

Two multi-week traps are latent in this genealogy. First, covariate shift across a season: the paper claims extensibility to new sports and metrics with only a few hundred fine-tuning samples [PAGE 1], but because training data are generated by permuting a fixed feature schema [PAGE 2], any newly introduced statistic, situation, or player outside the original support lies in an out-of-distribution region where BLEU > 99 provides no guarantee. Week-to-week roster changes and rule adaptations will therefore erode template-analog coverage unless the synthetic permutation space is regenerated. Second, semantic drift through paraphrase accumulation: if the system runs continuously over multiple weeks, each Top-K/Top-P sampled rewrite introduces small lexical substitutions. Without the deferred synonym expansion [PAGE 7], these substitutions compound into predicate drift—for example, “pressuring” shifting toward “hitting”—gradually decoupling the narrative from the underlying tabular ground truth.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Model the broadcaster \(B\) and the fan \(F\) as recursive agents. \(B\) holds a belief \(b_B(Q)\) about narrative quality \(Q\), updated by on-air reception and by prior automation failures; \(F\) holds \(b_F(G)\) about game state \(G\), updated by the narrative stream. Under the clock of a live broadcast, \(B\) faces a hard real-time constraint: total inference latency \(L_{\text{total}} = L_{\text{T5}} + L_{\text{enhance}}\) must fit inside the available airtime gap \(\Delta_{\text{air}}\). If \(L_{\text{total}} > \Delta_{\text{air}}\), the pipeline is bypassed and \(B\) regresses to crisis habit: rigid rule-based templates. This is crisis habit regression—under temporal stress, the human operator abandons the probabilistic ML output and reverts to the deterministic legacy system because it guarantees slot containment at the cost of fluency.

The counter-trap is that the ML pipeline’s objective, minimizing perplexity [PAGE 5], is misaligned with \(B\)’s trust objective. When back translation or paraphrasing lowers perplexity but drops a situational modifier such as “when leading” [PAGE 4] or substitutes “pressuring” with “hitting” [PAGE 7], \(B\) observes a factual inconsistency. A single high-visibility error causes \(b_B(Q)\) to collapse, after which \(B\) preemptively vetoes ML outputs even when they are accurate. This automation-bias collapse is a recursive trap: the system optimizes a proxy (perplexity) that the end-user does not directly observe, while the user-visible property (factual slot integrity) is protected only by an exact-match keyword gate [PAGE 6] that rejects valid synonyms. The clock therefore determines whether the system operates in the ML-enhanced regime or falls back to the regressive template regime.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: inference latency must satisfy \(L_{\text{T5}} + L_{\text{backtrans}} + L_{\text{paraphrase}} \le \Delta_{\text{air}}\), where \(\Delta_{\text{air}}\) is the broadcast delay budget in seconds. A multi-stage T5-plus-translation pipeline risks exceeding this bound; if violated, the physical layer vetoes the ML output and the template narrative is used. Biomechanical layer veto: let \(W\) be narrative word count and \(\nu\) the commentator’s sustainable articulation/comprehension rate in words per minute (typical human speech comprehension bounded near 150–180 wpm). The segment duration constraint is \(W / \nu \le \Delta_{\text{seg}}\). Verbose back-translated outputs that satisfy perplexity but violate this bound are biomechanically unairable and must be vetoed. Weather layer veto: null set for this paper; the NLG pipeline consumes tabular game statistics, not meteorological inputs, so no weather-dependent veto operator exists in the documented architecture. If upstream sensor outages from weather corrupt the tabular features themselves, that is an upstream data-layer veto, not a narrative-generation veto.

Cross-layer adjudication order: the keyword gate \( \forall k \in K: k \in \text{tokens}(x') \) [PAGE 6] acts as the semantic veto and is evaluated before the perplexity comparison. If any physical, biomechanical, or keyword veto fires, the system outputs the raw T5 narrative \(x_{\text{T5}}\) regardless of perplexity. Only when all layer vetoes pass does the lower-perplexity rewrite become the final output. This ordering guarantees that factual slot containment and real-time deployability dominate fluency optimization.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Exact-match keyword veto on synonymic rewrite.
Setup: Tabular feature maps to keywords \(K = \{\text{fail}, \text{complete}, \text{pass}\}\). The T5 baseline outputs a sentence containing “pass incomplete.” The paraphraser generates “incomplete passes,” which has lower perplexity but contains none of the exact keyword strings.
Verification: Deterministic string-matching audit over the 300-sample evaluation set [PAGE 7].
Prediction: Fallback rate to raw T5 output for pass-outcome samples exceeds 40%, because the exact-match gate rejects all synonym-preserving rewrites; measured perplexity reduction on accepted samples will be statistically indistinguishable from zero.

Scenario 2 — Intermediate-language lexical-gap veto.
Setup: Back translation uses Chinese or Russian as intermediate language instead of German or Spanish [PAGE 4]. The situational modifier “when leading” is deleted during the \(X \to Z \to X'\) cycle.
Verification: Slot-extraction F1 score comparing source and output narratives for the “leading/trailing” situation slot across language conditions.
Prediction: Semantic slot recall for “when leading/when trailing” drops by at least 15 points under Chinese/Russian intermediate translation relative to German/Spanish; the keyword gate will reject those outputs, increasing fallback frequency.

Scenario 3 — Predicate substitution altering truth conditions.
Setup: Paraphraser maps “pressuring the quarterback” to “hitting the quarterback” [PAGE 7], changing the defensive pressure metric into a hit metric while lowering perplexity.
Verification: Human audit or predicate-argument consistency check on a stratified sample of defensive-pressure narratives.
Prediction: Factual error rate on pressure-related narratives is at least 5%; each detected contradiction triggers a manual override, and the system logs a counterfactual in which the keyword gate would have vetoed the output had “pressuring” been included in \(K\).
</RLVR_COUNTERFACTUAL_VETOES>