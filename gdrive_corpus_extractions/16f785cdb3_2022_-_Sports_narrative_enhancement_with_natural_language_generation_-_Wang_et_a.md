---
source: "2022 - Sports narrative enhancement with natural language generation - Wang et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2022"
pages: 10
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4971
---

<NATIVE_REASONING>
The user wants me to analyze a specific research paper about sports narrative enhancement with NLG. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the sections seem somewhat mismatched to the content (sports narrative NLG paper), but I must fill them as requested. The sections mention betting, physical/biomechanical/weather, crisis habit regression, etc. I need to adapt these to the source material without violating the "zero betting lines" rule. I should NOT invent betting lines. I can discuss the paper's methodology, equations (BLEU, Perplexity), pipeline, etc.

Let me structure the response:

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit. Analyze the two-stage NLG pipeline, data generation, T5 fine-tuning, BLEU metric, back translation, paraphrasing, perplexity, workflow, keyword constraints, failure modes, semantic drift, etc. Gray zones: information loss in back translation ("when leading" left out), keyword strictness causing original narratives to be selected despite awkwardness, paraphrasing semantic distortion ("pressuring" -> "hitting"), perplexity as proxy not ground truth, BLEU >99 indicates mimicry not necessarily naturalness, synthetic dataset limitations (generic names Bobcats/John Peccy), 80/10/10 split, only 300 sample human evaluation, etc.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX for BLEU, Perplexity. Units: BLEU 0-100 (or 0-1), Perplexity dimensionless but exp of average negative log-likelihood (nats if natural log). Page citations. Exact breakdown of Table 1, Table 2, Table 3, Table 4. Mention singularity/breakdown: back translation information loss regime, paraphrasing semantic distortion regime, keyword dictionary hard constraint regime causing rejection of valid paraphrases, perplexity comparison only valid among same semantic meaning, T5 fine-tuning data regime (57k samples synthetic). No toy equations.

RETROCAUSAL_GENEALOGY: Historical lineage: NLG survey Gatt & Krahmer 2018 [PAGE 10 ref], transfer learning Tan et al. 2018, T5 Raffel et al. 2019, BLEU Papineni et al. 2002, back translation Edunov et al. 2018, fairseq Ott et al. 2019, paraphrasing Bannard & Callison-Burch 2005, PAWS Zhang et al. 2019, Top-K/P Fan et al. 2018 & Holtzman et al. 2019, Perplexity Jelinek et al. 1977, GPT2 Radford 2019. Multi-week traps: if deployed across weeks, distribution shift as new players/metrics emerge, fine-tuning with few hundred samples claim but actual training on 57k synthetic, template maintenance vs ML maintenance shift, keyword dictionary staleness as terminology evolves, back translation language choice bias (German/Spanish better than Chinese/Russian for American Football due to unique terms), etc.

RECURSIVE_THEORY_OF_MIND: This is tricky. Crisis habit regression vs counter-trap vs clock. I need to interpret this in context of the paper/system. Broadcasters' habit of relying on templates (crisis habit regression under live pressure), the ML system as counter-trap, the game clock as real-time constraint. Commentators may ignore narratives if hard to grasp (regression to habit). The system attempts to counter this trap. Clock: fast-paced nature of games, real-time generation, live commentating. Multi-hop: if system fails under clock pressure, broadcasters revert to templates (habit regression), if templates too rigid, fans disengage, etc.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Since this is an NLP paper, physical/biomechanical/weather are not directly in the paper. But I can frame them as external context layers that could veto narrative generation: e.g., weather affects game situations (stadium_retractable_dome feature in Table 1 is True/False, dome vs outdoor), biomechanical not relevant but player metrics like QB knockdowns relate to physical events, weather could cause data collection issues. I need to be careful not to invent fake ratios. I can state that the paper does not model physical/biomechanical/weather variables beyond the categorical "stadium_retractable_dome" boolean feature [PAGE 2 Table 1], and thus any veto based on physical layer is outside scope; however, the boolean dome feature can act as a gate. Breakdown: if weather/dome status is missing or mislabeled, narrative generation conditions on false premise.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or just verifiable scenarios. I need 3 counterfactual veto scenarios where the system would fail or be vetoed, with predictions.

1. Keyword dictionary strictness veto: If paraphrase uses synonym "incomplete passes" but doesn't contain all hard-coded keywords ("fail, complete, pass"), it is vetoed/rejected, forcing output of original T5 narrative despite higher perplexity. Prediction: ~X% of valid paraphrases rejected due to strict keyword matching (paper mentions "significant portion" comprises original narratives because of this).
2. Information loss veto in back translation: If back translation drops critical context like "when leading" or "when trailing", the narrative is vetoed because it fails keyword/information containment check. Prediction: outputs from back translation with missing situation tokens fall back to T5 or paraphrase.
3. Perplexity inversion veto: If a rewritten narrative has lower perplexity but distorted semantics (e.g., "pressuring" -> "hitting"), and the keyword check passes coincidentally but semantics are wrong, a human/commentator would veto. Prediction: semantic distortion events occur when nouns/verbs are substituted with near-synonyms that alter statistical meaning.

Wait, RLVR usually stands for something like "Reinforcement Learning with Verifiable Rewards" in LLM contexts, but here I can interpret as "Rule/Logic Verifiable Rejection" scenarios. I'll define them clearly as verifiable counterfactuals based on the paper's workflow.

Word count: Need >=1000 words total across sections. THINK_TRACE alone >=400. I'll aim for substantial depth in each.

Constraints check:
- No betting lines: I will not mention spreads, totals, moneylines, odds. The paper mentions NFL stats but not betting. Good.
- No toy equations: I will use real equations from paper: Perplexity formula, BLEU n-gram matching. I will not invent Force/Fatigue.
- Formal LaTeX, SI/information/probability units: Perplexity is dimensionless (nats if log base e), BLEU 0-100 (percentage points), dataset 57,000 samples (dimensionless count), 80/10/10 split (proportion), 300 samples (count).
- Exact [PAGE N] markers: I'll cite pages for claims.
- Verbatim quotes: I'll include short quotes.

Let me draft carefully.

THINK_TRACE:

Start with the two-stage pipeline. Stage 1: T5 fine-tuned on synthetic tabular-to-text. Stage 2: readability enhancement via back translation and paraphrasing, governed by keyword containment and perplexity comparison.

Multi-hop derivation:
- Input tabular features (8 features) concatenated into text sequence [PAGE 3].
- T5 (text-to-text transfer transformer) pretrained on C4 [PAGE 3], fine-tuned with template outputs as labels [PAGE 3].
- BLEU measures n-gram overlap 1-4 gram [PAGE 4], score above 99 on test set [PAGE 4].
- However, BLEU >99 indicates template mimicry, not necessarily naturalness [PAGE 4 gray zone].
- Stage 2 addresses verbosity/awkwardness [PAGE 4].
- Back translation via fairseq NMT [PAGE 5], intermediate language matters (German/Spanish better than Chinese/Russian for American Football terms) [PAGE 5].
- Information loss example: "when leading" left out [PAGE 5].
- Paraphrasing via T5 fine-tuned on PAWS (>100k human labels) [PAGE 5], Top-K and Top-P sampling [PAGE 5].
- Perplexity formula: PPL(X) = exp(-1/N sum log p(x_i | x_<i)) [PAGE 6]. Lower = more common/natural.
- Original perplexity 63.9(±26.3), back translation 42.5(±17.4), paraphrase 47.3(±17.4), workflow 55.7(±26.5) [PAGE 7].
- Workflow: T5 -> back translation (if keywords present and PPL lower, accept) else -> paraphrase (same check) else -> T5 [PAGE 6-7].
- Keyword dictionary hard constraint: "pass incomplete" maps to "fail, complete, pass"; "incomplete passes" rejected despite semantic equivalence [PAGE 8].
- 300 sample narratives tested [PAGE 7]; back translation and paraphrase combined rewrite over half [PAGE 7 Figure 4.b / PAGE 8 text].
- Table 4 examples show perplexity reduction 13% average [PAGE 8].

Gray-zone audit:
- Synthetic data with generic names limits real-world entity generalization despite claim of extensibility [PAGE 2].
- 57,000 samples but only 8 features; combinatorial coverage may not cover rare game situations [PAGE 2].
- Perplexity is a proxy trained on GPT2 corpus; not ground truth human naturalness [PAGE 6].
- BLEU references are themselves template-generated, so high BLEU measures fidelity to flawed templates [PAGE 4].
- Workflow perplexity 55.7 is worse than back translation alone (42.5) because of vetoes/fallbacks [PAGE 7], showing the constraint layer trades off naturalness for information fidelity.
- No human evaluation scores reported, only 300 samples and automatic metrics [PAGE 7].
- Real-time constraint: live game clock means inference latency could matter, but not measured [PAGE 1 intro: fast-paced nature].

This should be >400 words.

SOURCE_OPERATORS_AND_EQUATIONS:

Define BLEU: sentence-level BLEU = average of n-gram precisions for n=1..4 with brevity penalty perhaps (paper says average of 1-4 gram BLEU scores). Range 0 to 100 [PAGE 4].

Perplexity: Given tokenized sentence X = (x_1, ..., x_N),
PPL(X) = exp( - (1/N) \sum_{i=1}^{N} \log p_\theta(x_i | x_{<i}) )
Units: dimensionless; if natural log, expressed in nats equivalent via exp; lower is better. GPT2 assigns low PPL to grammatical sentences [PAGE 6].

Tabular feature vector: x_tab = [Team name, Metric, Value, Situation, Rank, ...] in R^{d} mixed categorical/integer/boolean [PAGE 3 Table 3]. Example: "Team Bobcats, prss, 4, score_differential_leading, 7".

Dataset: N=57,000 samples, 8 features, split 80/10/10 [PAGE 2].

Boolean stadium_retractable_dome in {True, False} [PAGE 2 Table 1].

Singularity/breakdown regimes:
- Back translation breakdown: intermediate language lacks American Football lexicon (Chinese, Russian) -> semantic drift or information loss [PAGE 5].
- Keyword containment breakdown: hard dictionary requires exact token presence; synonyms rejected [PAGE 8].
- Perplexity comparison breakdown: only valid among sentences sharing similar semantic meaning; cross-semantic PPL comparison is invalid [PAGE 6].
- T5 fine-tuning breakdown: few hundred samples claim for new sports but actual base training used 57k synthetic; new sport fine-tuning data regime unspecified [PAGE 1].

I'll include page citations and verbatim quotes like "The Bobcats’ 5 caught passes for touchdowns when playing in a retractable roof is the 7th highest out of 32 in the NFL this season." [PAGE 3 Table 2].

RETROCAUSAL_GENEALOGY:

Trace lineage backwards and forwards. Historical references:
- NLG survey Gatt & Krahmer 2018 (JAIR 61:65-170) [PAGE 10 ref 1].
- Transfer learning survey Tan et al. 2018 [PAGE 3; PAGE 10 ref 2].
- T5 Raffel et al. 2019 arXiv:1910.10683 [PAGE 3; PAGE 10 ref 3].
- BLEU Papineni et al. 2002 ACL [PAGE 4; PAGE 10 ref 4].
- Back translation Edunov et al. 2018 arXiv:1808.09381 [PAGE 5; PAGE 10 ref 5].
- fairseq Ott et al. 2019 arXiv:1904.01038 [PAGE 5; PAGE 10 ref 6].
- Paraphrasing Bannard & Callison-Burch 2005 ACL [PAGE 5; PAGE 10 ref 7].
- PAWS Zhang et al. 2019 arXiv:1904.01130 [PAGE 5; PAGE 10 ref 9].
- Top-K/P Fan et al. 2018 arXiv:1805.04833; Holtzman et al. 2019 arXiv:1904.09751 [PAGE 5; PAGE 10 refs 10-11].
- Perplexity Jelinek et al. 1977 JASA [PAGE 6; PAGE 10 ref 13].
- GPT2 Radford et al. 2019 [PAGE 6; PAGE 10 ref 14].

Multi-week traps:
- Temporal distribution shift: as NFL season progresses, new players, records, rankings shift; static keyword dictionary and 57k synthetic dataset become stale [PAGE 8 future work synonyms].
- Week-over-week rank changes (e.g., 7th highest out of 32) require live data feeds; narrative validity decays if stat updates lag [PAGE 3 Table 2].
- Fine-tuning with "a few hundred samples" for new sports [PAGE 1] may be insufficient if sport-specific jargon differs greatly from American Football, given back-translation language bias observed [PAGE 5].
- Template maintenance burden supposedly reduced, but ML pipeline introduces keyword dictionary maintenance and perplexity threshold calibration as new hidden template-like artifacts [PAGE 8].

RECURSIVE_THEORY_OF_MIND:

Crisis habit regression: Under live-game pressure (fast-paced nature [PAGE 1]), commentators revert to rigid template narratives or ignore them if hard to grasp [PAGE 1]. The ML system is designed to prevent this regression by offering natural narratives. However, if the workflow rejects valid rewrites due to strict keywords [PAGE 8], broadcasters receive original verbose T5 outputs, regressing to template-like habit.

Counter-trap: The system tries to counter the rigidity trap with back translation/paraphrasing, but creates a new trap: over-constrained keyword filtering that outputs original narratives anyway (workflow PPL 55.7 vs back translation 42.5 [PAGE 7]).

Clock: Real-time constraint. Live commenting during games means latency and immediacy matter [PAGE 1]. If inference or validation (keyword check, PPL comparison) adds delay, the "clock" forces fallback to simplest path (T5 output), reducing the system to stage 1. The 300-sample test [PAGE 7] does not measure latency under game clock.

Recursive ToM: Broadcasters model audience comprehension; if narrative too rigid, audience disengages; system models broadcaster preference; if system output too awkward, broadcaster ignores. This nested modeling can oscillate: template -> ML natural -> keyword veto -> template.

CROSS_LAYER_VETO_ADJUDICATION:

Physical layer: The paper includes a boolean feature stadium_retractable_dome [PAGE 2 Table 1], which is a proxy for weather/environment (dome vs outdoor). If this physical layer flag is missing or erroneous, narrative conditions on wrong venue type. However, the model does not ingest temperature, precipitation, wind; thus any weather-based veto is outside model scope. Breakdown: outdoor game mislabeled as dome yields false narrative context.

Biomechanical layer: Player metrics like qbkd (QB knockdowns), rec_td, prss (pressures) derive from physical events [PAGE 2 Table 1]. The NLP pipeline treats them as abstract integers; no biomechanical validity check (e.g., physically impossible value for a game). If a data pipeline error inserts value 190 for rank etc., the narrative is syntactically correct but semantically void.

Weather veto proof: Since weather variables beyond dome boolean are absent, there is no veto mechanism for severe weather delays/cancellations. A narrative generated for a postponed game would be factually stale. The system lacks a cross-layer veto from physical weather layer to suppress narrative generation.

I need to state assumptions: assume tabular data is correct; assume keyword dictionary maps correctly; assume perplexity model (GPT2) is aligned with broadcaster naturalness.

Breakdown regimes: mislabeled stadium feature; data entry error in rank/value; weather postponement not reflected in tabular input.

RLVR_COUNTERFACTUAL_VETOES:

I'll define RLVR here as Rule/Logic Verifiable Rejection scenarios (counterfactual vetoes). Three scenarios:

Scenario 1: Synonym keyword veto.
- Counterfactual: Original narrative contains keyword set K = {"fail","complete","pass"} for "pass incomplete" [PAGE 8]. Paraphraser outputs "incomplete passes" which is semantically identical but contains none of the hard tokens.
- Verifiable rule: workflow accepts only if all required keywords present [PAGE 6-7].
- Veto: paraphrase rejected; fallback to T5 original despite higher perplexity.
- Prediction: a measurable fraction of valid paraphrases (paper says "significant portion" [PAGE 8]) will be suppressed, inflating workflow perplexity above raw back-translation/paraphrase perplexity (observed 55.7 vs 42.5/47.3 [PAGE 7]).

Scenario 2: Context deletion veto.
- Counterfactual: Back translation drops "when leading"/"when trailing" situation token [PAGE 5].
- Verifiable rule: keyword containment check requires situation keywords; missing context fails check [PAGE 6].
- Veto: back-translated output discarded.
- Prediction: in games with frequent score-differential situations, a nonzero rate of back-translated candidates will fail, shifting workflow output toward paraphrase or T5.

Scenario 3: Semantic distortion false-positive veto.
- Counterfactual: Paraphraser substitutes "pressuring the quarterback" with "hitting the quarterback" [PAGE 8]. Keyword check may pass if tokens overlap, but statistical meaning changes (pressure vs hit).
- Verifiable rule: no semantic equivalence check beyond keyword presence [PAGE 6-8].
- Veto: human commentator or downstream editor must manually veto; otherwise false narrative airs.
- Prediction: distortion events correlate with verbs/nouns having high-frequency near-synonyms in sports domain; without an external semantic validator, these escape the pipeline.

That covers it.

Word count: I need to ensure total >1000 and THINK_TRACE >400. I'll write generously.

Also careful: The user said "DRIVE SOURCE" and provided the text. I should not claim to have accessed external files beyond what's given, but I can cite the pages given.

Let's check formatting: exact XML sections. No markdown outside? I can use markdown inside but keep XML tags. I will not add betting content.

Double-check for accidental toy equations: None. I will use the actual PPL equation from page 6 (though the formatting in source is garbled, I can reconstruct standard LaTeX). I'll state it's as given on page 6.

Double-check page citations: [PAGE 1] through [PAGE 10]. Good.

Verbatim quotes: include at least a few.

Let me write the final response now. I'll structure each section clearly.

Word count estimation: THINK_TRACE ~600 words, SOURCE_OPERATORS ~400 words, RETROCAUSAL ~300, RECURSIVE ~250, CROSS_LAYER ~250, RLVR ~250. Total ~2050. Good.

Let's draft carefully.

One thing: The invariant says ">= 1,000-WORD DEPTH across these exact XML sections". So sum across sections must be >=1000. THINK_TRACE must be >=400. Others presumably contribute to total. I'll make sure THINK_TRACE alone is comfortably over 400.

I need to avoid saying "odds", "spread", "moneyline", "total". The paper doesn't have them anyway.

I'll now produce the final output.
</NATIVE_REASONING>

<THINK_TRACE>
The paper proposes a two-stage machine-learning pipeline to replace rigid, template-generated sports narratives with natural language generation (NLG). Stage 1 fine-tunes a Text-To-Text Transfer Transformer (T5) on synthetically generated tabular-to-text pairs; Stage 2 rewrites the Stage-1 output for readability using back translation and paraphrasing, governed by a keyword-containment gate and a perplexity comparison.

Multi-hop derivation begins with the data layer. The authors synthetically generate more than 57,000 samples composed of eight features by permuting statistics, feature values, team and player names, and game situations [PAGE 2]. Each row is concatenated into a text sequence; the corresponding target is a rule-based template narrative [PAGE 2–3]. For example, the tabular input “Team Bobcats, prss, 4, score_differential_leading, 7” maps to the target “The Bobcats’ 4 total times of pressuring the quarterback when leading is the 7th highest in the NFL this season” [PAGE 3 Table 3]. T5, pretrained on the Colossal Clean Crawled Corpus (C4), is fine-tuned with these input–label pairs [PAGE 3]. Because the model learns positional meaning, it is claimed to generalize to unseen players and metrics [PAGE 3].

Evaluation in Stage 1 uses sentence-level BLEU, defined as the average of 1-gram through 4-gram BLEU scores, ranging from 0 to 100 [PAGE 4]. After fine-tuning on a few thousand sentences, the T5 model achieves a BLEU score above 99 on the test set, which the authors interpret as near-identity with template-generated sentences [PAGE 4]. This is a gray zone: BLEU measures n-gram overlap against references that are themselves template-generated, so a score above 99 demonstrates template mimicry rather than proven naturalness or broadcaster acceptance.

Stage 2 targets verbosity and awkwardness inherited from fixed templates [PAGE 4]. Back translation uses pretrained fairseq neural machine translation models; the intermediate language matters, with German and Spanish yielding more accurate results for American Football than Chinese or Russian, likely because unique football terms lack cross-cultural lexical equivalents [PAGE 5]. A documented failure mode is information loss: the context “when leading” can be dropped during back translation [PAGE 5]. Paraphrasing uses a T5 model fine-tuned on the PAWS dataset (over 100,000 human paraphrase labels) with Top-K and Top-P sampling to diversify candidates [PAGE 5]. A separate distortion failure mode is lexical substitution that changes statistical meaning, e.g., “pressuring the quarterback” rephrased as “hitting” or “pushing” the quarterback [PAGE 8].

Readability is quantified with perplexity. For a tokenized sentence X = (x₁, …, x_N), perplexity is defined as exp(−1/N Σ log p(xᵢ | x_{<i})) [PAGE 6]. Lower perplexity indicates a sentence the language model finds less surprising, serving as a proxy for naturalness. On 300 randomly selected narratives, original narratives score 63.9 (±26.3); back translation reduces perplexity to 42.5 (±17.4); paraphrasing to 47.3 (±17.4); and the final workflow output to 55.7 (±26.5) [PAGE 7]. The workflow perplexity is worse than either enhancement alone because the keyword gate vetoes many rewrites [PAGE 7–8]. For instance, “pass incomplete” maps to hard keywords “fail, complete, pass”; “incomplete passes” is semantically equivalent but rejected for missing required tokens [PAGE 8].

Gray-zone audit: (1) the 57,000-sample synthetic corpus uses generic entities (Bobcats, John Peccy), limiting claims about real-name generalization [PAGE 2]; (2) BLEU references are template outputs, so high BLEU does not validate against human preference [PAGE 4]; (3) perplexity is a GPT2-based proxy, not ground-truth broadcaster or fan judgment [PAGE 6]; (4) only 300 samples are tested, with no reported latency under live game-clock pressure [PAGE 7]; (5) the workflow trades naturalness for information fidelity, as evidenced by workflow perplexity (55.7) exceeding raw back-translation perplexity (42.5) [PAGE 7].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and units extracted from the source:

1. Tabular input vector. Each sample is an 8-dimensional mixed-type vector
   x_tab = [Statistic, Situation, Value, Time frame, Rank, Rank Order, Population, Team/Player name] ∈ 𝒞 × 𝒮 × ℤ × 𝒯 × ℤ × {0,1} × ℤ × 𝒩 [PAGE 2 Table 1; PAGE 3 Table 3].
   Verbatim example from Table 3: “Team Bobcats, prss, 4, score_differential_leading, 7” [PAGE 3]. The boolean stadium_retractable_dome feature ∈ {True, False} encodes venue enclosure [PAGE 2 Table 1].

2. BLEU operator. Sentence BLEU = average of n-gram matching scores for n = 1,2,3,4 [PAGE 4]. Range: [0, 100], dimensionless percentage points. Verbatim: “BLEU score ranges from 0 to 100” [PAGE 4]. Test-set performance: BLEU > 99 after fine-tuning on a few thousand sentences [PAGE 4].

3. Perplexity operator. Given tokenized sentence X = (x₁, …, x_N),
   PPL(X) = exp( − (1/N) Σ_{i=1}^{N} log p_θ(x_i | x_{<i}) ) [PAGE 6].
   Units: dimensionless; with natural logarithms, the exponent is in nats, so PPL is an effective branching factor. Lower PPL = less “surprise” under the language model [PAGE 6]. GPT2 assigns low PPL to grammatical sentences (e.g., “Can you do it?”) and high PPL to ungrammatical ones (e.g., “Can you does it?”) [PAGE 6].

4. Empirical perplexity results on N = 300 sample narratives [PAGE 7]:
   Original: 63.9 (±26.3)
   Back translation: 42.5 (±17.4)
   Paraphrasing: 47.3 (±17.4)
   Final workflow: 55.7 (±26.5)
   Average perplexity reduction claimed: 13% [PAGE 8].

5. Workflow decision rule [PAGE 6–7]. Let K be the fixed keyword dictionary derived from tabular features, and let PPL_T5 be the perplexity of the T5 output. A back-translated candidate B is accepted iff (i) K ⊆ tokens(B) and (ii) PPL(B) < PPL(T5). Else a paraphrased candidate P is evaluated under the same conjunction. If neither passes, output T5.

Breakdown / singularity regimes:
- Back-translation language mismatch: intermediate languages without American Football lexicon (Chinese, Russian) produce semantic drift or dropped context such as “when leading” [PAGE 5].
- Keyword dictionary over-constraint: exact-token matching rejects synonyms (“incomplete passes” vs. “fail, complete, pass”), forcing fallback to higher-perplexity T5 output [PAGE 8].
- Perplexity cross-semantic invalidity: PPL comparison is meaningful only among sentences sharing similar semantic meaning; comparing PPL across different propositions is not justified by the paper [PAGE 6].
- Fine-tuning data regime: extensibility to other sports is claimed with “a few hundred samples” [PAGE 1], but the base model was trained on 57,000 synthetic samples; the small-sample regime for new sports is untested in the paper.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s lineage is explicitly citation-dense. It grounds NLG in Gatt & Krahmer’s state-of-the-art survey (JAIR 61, 2018) [PAGE 10 ref 1], invokes transfer learning per Tan et al. (2018) [PAGE 3; PAGE 10 ref 2], and adopts T5 from Raffel et al. (arXiv:1910.10683, 2019) pretrained on C4 [PAGE 3; PAGE 10 ref 3]. Evaluation reaches back to BLEU (Papineni et al., ACL 2002) [PAGE 4; PAGE 10 ref 4], while enhancement methods cite back translation (Edunov et al., arXiv:1808.09381, 2018) [PAGE 5; PAGE 10 ref 5], fairseq (Ott et al., arXiv:1904.01038, 2019) [PAGE 5; PAGE 10 ref 6], bilingual paraphrase extraction (Bannard & Callison-Burch, ACL 2005) [PAGE 5; PAGE 10 ref 7], PAWS adversarial paraphrase pairs (Zhang et al., arXiv:1904.01130, 2019) [PAGE 5; PAGE 10 ref 9], Top-K/Top-P sampling (Fan et al., arXiv:1805.04833; Holtzman et al., arXiv:1904.09751) [PAGE 5; PAGE 10 refs 10–11], perplexity (Jelinek et al., JASA 1977) [PAGE 6; PAGE 10 ref 13], and GPT2 likelihood behavior (Radford et al., 2019) [PAGE 6; PAGE 10 ref 14].

Tracing forward, the system inherits structural assumptions from this genealogy that create multi-week traps. First, the back-translation language bias—German and Spanish outperform Chinese and Russian for American Football terms [PAGE 5]—means the enhancement layer is culturally and linguistically coupled to the source sport’s lexicon; extending to other sports with different terminology may require re-tuning the intermediate-language choice, contradicting the “few hundred samples” portability claim [PAGE 1]. Second, the synthetic dataset of 57,000 samples [PAGE 2] freezes a combinatorial snapshot of statistics and ranks; as an NFL season progresses, team rankings, player rosters, and situational frequencies drift, making static template-derived targets stale week over week. Third, the keyword dictionary is itself a hidden template artifact: it must be manually maintained as terminology evolves, and the paper acknowledges future work should add synonyms because strict exact matching rejects valid paraphrases [PAGE 8]. Thus the ML pipeline replaces surface template maintenance with keyword-dictionary and perplexity-threshold maintenance, reintroducing the very operational burden the introduction claims to eliminate [PAGE 1].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: Under live-game pressure, broadcasters rely on template-generated narratives because they are fast and deterministic [PAGE 1]. If the ML output is verbose or awkward, commentators regress to the habit of ignoring the generated narrative [PAGE 1]. The audience, in turn, fails to receive exciting stats, and engagement drops.

Counter-trap: The two-stage pipeline attempts to counter the rigidity trap by making narratives more natural [PAGE 4]. However, the workflow’s keyword gate and perplexity check create a counter-trap: valid rewrites are rejected for missing hard-coded tokens, so the system falls back to the original T5 output [PAGE 7–8]. This means broadcasters may receive the same rigid, verbose sentences they were trying to escape, re-triggering habit regression despite the ML layer.

Clock: The introduction emphasizes the fast-paced nature of games and real-time stat sharing [PAGE 1]. The workflow adds sequential inference—T5 generation, then optional back translation or paraphrasing, then keyword containment and perplexity comparison [PAGE 6–7]. No latency benchmark is reported [PAGE 7], so under game-clock pressure the system may default to the cheapest path (Stage 1 T5 only), collapsing the recursive benefit.

Recursive theory of mind nesting: Broadcasters model audience comprehension; the ML system models broadcaster preference; the keyword dictionary models required information [PAGE 6–8]. If the system’s model of the broadcaster is wrong—e.g., it over-constrains on exact keywords—the broadcaster models the system as unreliable and regresses to manual templates. The audience then models the broadcaster as uninformative. This loop can oscillate between template rigidity and ML awkwardness unless the semantic gate is relaxed with synonyms, which the paper leaves to future work [PAGE 8].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer. The only physical/environmental variable in the tabular schema is stadium_retractable_dome ∈ {True, False} [PAGE 2 Table 1]. This is a categorical proxy for enclosure, not a measurement of temperature, precipitation, wind, or game-delay conditions. Assumption: the venue flag is correctly labeled. Breakdown regime: if an outdoor game is mislabeled as a dome (or vice versa), the narrative conditions on a false physical context, but the NLP pipeline contains no cross-layer physical veto to suppress generation. Severe weather postponement is not represented in the input schema at all, so a narrative for a canceled game could be generated and aired without a weather-layer veto.

Biomechanical layer. Player and team metrics (rec_td, qbkd, prss, etc.) are downstream of physical events [PAGE 2 Table 1]. The pipeline treats these as abstract integers and ranks [PAGE 3]. Assumption: the upstream sports-data feed is physically valid. Breakdown regime: a data-entry error producing an impossible rank or value (e.g., rank exceeding population) yields a syntactically fluent but semantically void narrative, because the model has no biomechanical validity checker; it only preserves tokens and n-gram overlap via BLEU and PPL [PAGE 4–6].

Weather veto proof. Because weather beyond the boolean dome flag is absent, there is no veto mechanism from a physical weather layer to the narrative generator. A veto would require an external signal (delay, cancellation, venue change) to block output; the paper describes no such interface [PAGE 6–7]. Therefore the system is not weather-veto proof by design; it is conditionally robust only to the extent that the input tabular features are correct and complete.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable rule/logic rejection (RLVR) counterfactual scenarios, each tied to a written workflow rule in the paper:

Scenario 1 — Synonym keyword veto.
Rule: Accept a rewritten narrative only if all hard-coded keywords from the fixed tabular-feature dictionary are present [PAGE 6–7].
Counterfactual: For “pass incomplete,” the dictionary requires tokens {"fail", "complete", "pass"} [PAGE 8]. The paraphraser emits “incomplete passes,” which is semantically identical but contains none of the required hard tokens.
Veto: The paraphrase is rejected; the system falls back to the Stage-1 T5 narrative despite its higher perplexity.
Prediction: A measurable fraction of valid paraphrases will be suppressed (the paper notes a “significant portion” of final selections are original narratives for this reason [PAGE 8]), which explains why workflow perplexity (55.7) is worse than raw paraphrase perplexity (47.3) [PAGE 7].

Scenario 2 — Situation-context deletion veto.
Rule: Accept back-translated output only if it contains the necessary keywords and has lower perplexity than T5 [PAGE 6–7].
Counterfactual: Back translation drops the situation phrase “when leading” or “when trailing” [PAGE 5], so the resulting narrative omits a required situation keyword.
Veto: The back-translated candidate fails the keyword containment check and is discarded, even though its perplexity (42.5) is substantially lower than the original (63.9) [PAGE 7].
Prediction: In games with frequent score-differential situations, a nonzero rate of back-translation candidates will be vetoed, shifting final outputs toward paraphrase or unregressed T5 text.

Scenario 3 — Semantic-distortion false-pass veto.
Rule: No explicit semantic-equivalence validator exists beyond keyword presence and perplexity [PAGE 6–8].
Counterfactual: The paraphraser substitutes “pressuring the quarterback” with “hitting the quarterback” [PAGE 8]. If “quarterback” and other tokens overlap, the keyword check may pass and perplexity may drop, but the statistical meaning changes from pressure to hit.
Veto: The pipeline has no automatic veto for this; a human commentator or downstream editor must manually reject the narrative before it airs.
Prediction: Distortion events will concentrate on high-frequency sports verbs/nouns with near-synonyms (pressure/hit, catch/reception, blitz/rush). Without an external semantic validator, these false positives escape the workflow and reach the broadcast layer.
</RLVR_COUNTERFACTUAL_VETOES>