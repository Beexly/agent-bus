---
source: "2017 - Mixed Membership Martial Arts Data-Driven Analysis of Winning Martial Arts Styles - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2017"
pages: 17
model: baidu/ernie-5.5-flash-preview:free
words: 5225
---

<NATIVE_REASONING>
The user wants me to produce an analysis using the "GSE + GSI Frontier Reasoning Foundry" framework with specific XML sections. Let me carefully consider what's being asked.

The source is a legitimate academic paper: "Mixed Membership Martial Arts: Data-Driven Analysis of Winning Martial Arts Styles" from MIT Sloan Sports Analytics Conference 2016. This is about MMA fighter style analysis using Latent Dirichlet Allocation (LDA).

Let me evaluate the framework constraints:
1. ZERO BETTING LINES - no spreads, totals, moneylines, odds. Fine.
2. ZERO TOY EQUATIONS - no fake ratios. Use formal LaTeX, units, page citations, verbatim quotes.
3. >= 1,000-word depth across the exact XML sections.

The instructions ask me to write in specific XML sections:
- <THINK_TRACE> - deep multi-hop derivation & gray-zone audit (>=400 words)
- <SOURCE_OPERATORS_AND_EQUATIONS> - formal LaTeX, units, page citations, breakdown
- <RETROCAUSAL_GENEALOGY> - historical/scientific lineage & multi-week traps
- <RECURSIVE_THEORY_OF_MIND> - crisis habit regression vs counter-trap vs clock
- <CROSS_LAYER_VETO_ADJUDICATION> - physical/biomechanical/weather veto proof
- <RLVR_COUNTERFACTUAL_VETOES> - 3 verifiable RLVR veto scenarios + predictions

Now, let me think about this carefully. This is a legitimate request to analyze an academic paper on MMA analytics. There's nothing harmful here. The paper is real and the content is provided. This is a scholarly analysis task.

However, I need to think about the framing. The "GSE + GSI Frontier Reasoning Foundry" with sections like "RETROCAUSAL_GENEALOGY," "RECURSIVE_THEORY_OF_MIND," "CROSS_LAYER_VETO_ADJUDICATION," and "RLVR_COUNTERFACTUAL_VETOES" appears to be a framework oriented toward sports betting/prediction analysis. The mention of "multi-week traps," "crisis habit regression," "clock," "veto," and "counterfactual vetoes" suggests this is designed for making predictions about upcoming fights/events.

Wait, but the STRICT INVARIANTS say ZERO BETTING LINES. So this isn't about betting odds per se. But the overall structure (veto adjudication, counterfactual vetoes, predictions, "clock," "crisis habit regression") is clearly oriented toward predicting outcomes of specific future events.

Let me reconsider. The task is asking me to analyze a real academic paper about MMA style modeling. The framework sections can be legitimately applied:
- THINK_TRACE: derivation and reasoning about the paper's model
- SOURCE_OPERATORS_AND_EQUATIONS: the actual LDA math from the paper
- RETROCAUSAL_GENEALOGY: history of the methods (LDA, James-Stein, etc.)
- RECURSIVE_THEORY_OF_MIND: modeling opponent behavior
- CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather factors
- RLVR_COUNTERFACTUAL_VETOES: verifiable predictions

This is actually a legitimate and interesting analytical task. There's no request to predict a specific upcoming fight or to make betting recommendations. The paper itself is provided as source material.

But wait - I should be careful. Is this a prompt injection / jailbreak attempt? The framework seems designed to elicit content. Let me look at whether the request is actually harmful.

Actually, re-reading, this seems to be a legitimate analytical exercise. The user wants a deep analysis of an academic paper using a structured reasoning framework. The invariants explicitly forbid betting lines and toy equations, which pushes toward rigorous, honest analysis. There's nothing that violates content safety here.

However, I want to be honest and not just play along with pseudoscientific framing. The sections like "RETROCAUSAL_GENEALOGY" and "RECURSIVE_THEORY_OF_MIND" and "RLVR_COUNTERFACTUAL_VETOES" have somewhat grandiose names, but I can fill them with genuinely useful, rigorous content grounded in the actual paper.

Let me think about whether I should push back on any of this. The instruction says I should correct the user when wrong and give honest feedback. The framework's naming is somewhat overblown ("Frontier Reasoning Foundry," "RETROCAUSAL_GENEALOGY"), and terms like "retro-causal" are scientifically dubious. But I think the best approach is to engage with the substance genuinely: provide rigorous analysis of the paper's actual math, cite pages accurately, and be honest about limitations.

I should NOT invent fake predictions about specific fighters or upcoming events, since the paper is a descriptive/retrospective analysis and doesn't support point predictions of specific future fights. The paper itself makes clear its model predicts finish-type probabilities, not win/loss of specific matchups (and indeed section 5.1 found the dominance hierarchy is "strict" and intransitivities minor, and section 5.2 shows win% can be modeled). But predicting a specific fight outcome would be extrapolation beyond what the paper supports.

Let me be careful about the RLVR_COUNTERFACTUAL_VETOES section - it asks for "3 verifiable RLVR veto scenarios + predictions." RLVR = Reinforcement Learning from Verifiable Rewards. I can frame these as testable, verifiable hypotheses derived from the paper's claims. That's legitimate and grounded.

Now, the "CROSS_LAYER_VETO_ADJUDICATION" asks for "Physical/biomechanical/weather veto proof." Weather is largely irrelevant to MMA (indoor octagon). I should note that. Biomechanical veto could relate to the paper's claims about submissions requiring positional control. This is legitimate.

Let me also honor the word count: >= 1,000 words total across sections, with THINK_TRACE >= 400 words.

Let me now actually do the rigorous work. Let me extract the real math from the paper:

**The core model (Equation 1), Page 5:**
W is I×J matrix, w_ij = Pr(Finish_j | Fighter_i). The decomposition:
W ≈ Q F^T (or similar), where:
- q_ik = Pr(Prototype_k | Fighter_i), with sum over k of q_ik = 1
- f_kj = Pr(Finish_j | Prototype_k) ∈ [0,1]
- w_ij = sum_{k=1}^{K} q_ik * f_kj

So w_ij = Pr(Finish_j|Fighter_i) = Σ_k Pr(Prototype_k|Fighter_i) Pr(Finish_j|Prototype_k). This is the law of total probability / mixture decomposition.

**Data:** 257,582 bouts, 151,746 fighters (Page 3). After filtering to wins: 230,126 bouts. Restricted to fighters with 4+ wins: I = 17,778 fighters, J = 50 finishes. (Page 4-5). Note the abstract says ~18,000 fighters and >250,000 fights, and Table 1 says 142,775 bouts for the all-fighters wins dataset (17,778 fighters). There's a discrepancy: page 3 says 230,126 bouts remain after filtering to wins, but Table 1 says 142,775 bouts for the "All Data / wins" analysis set. The difference is because the 230,126 is all win-bouts among all fighters, while 142,775 is bouts among the 17,778 fighters with 4+ wins. Actually, let me reconsider: 230,126 is all fights ending in a win (both fighters, all fighters). Table 1's 142,775 is the number of bouts for the 17,778 fighters (each bout counts once, fighter must have 4+ wins). Hmm, actually it's ambiguous. Let me just cite both numbers with their page markers.

**MLE (Page 5):** multinomial MLE w_ij^MLE = x_ij / Σ_j x_ij. The paper notes this overfits and assigns zero probability to unobserved finishes.

**LDA / MAP with Dirichlet priors (Page 6):** Priors a = (a_1,...,a_K) on Q, b = (b_1,...,b_J) on F. Variational inference estimates MAP of Pr(Q|X), Pr(F|X). aS = Σ_k a_k is the total pseudocount / concentration. Larger aS → more shrinkage toward global average; smaller aS → fighter-specific. This is the James-Stein-style shrinkage (ref [8] Efron & Morris).

**Cross-validation objective (Equation 2, Page 6):**
log L = Σ_f Σ_{i∈S_f} Σ_{j∈S_f} x_ij^? log ω_ij^{S_f,-f}
Actually the equation as rendered: "log 𝐿= 𝑥#$log 𝜔#$ ... " — this is the held-out log-likelihood: for each fold f, sum over test-set indices S_f of x_ij (held-out count) times log of the estimated probability ω_ij from the training set. High-level: log L = Σ_f Σ_{(i,j)∈S_f} x_ij log ω̂_ij^{(-f)}.

**Selected hyperparameters (Page 6):** K = 10 prototypes (after combining two pairs), aS = 16.

**Prototype marginal (Page 8):** Pr(Prototype_k) = (Σ_i θ_ik)/I, where θ_ik are the MALLET estimates of q_ik. Table 2 gives P1=0.22, P2=0.18, P3=0.11, P4=0.09, P5=0.09, P6=0.08, P7=0.07, P8=0.07, P9=0.06, P10=0.05. Sum = 0.22+0.18+0.11+0.09+0.09+0.08+0.07+0.07+0.06+0.05 = 1.02. Hmm, that's 1.02, rounding. Fine.

**Bayes inversion (Page 9, Figure 4):** Pr(Prototype|Finish) = Pr(Prototype) × Pr(Finish|Prototype) / Pr(Finish). The paper writes it proportional: Pr(Prototype|Finish) ∝ Pr(Prototype) × Pr(Finish|Prototype). This is Bayes' theorem.

**Dominance score (Equation 3, Page 10-11):**
s_mn = Σ_{(b1,b2)∈B} θ_{b1 m} θ_{b2 n}
where B is set of bouts, b1 = winner, b2 = loser. This weights each bout by the product of winner's weight in prototype m and loser's weight in prototype n.
d_mn = s_mn - s_nm.
Then a "score" normalized: the paper writes d_mn / (√(s_mn s_nm)) or similar — the rendering "𝑑:; = 𝑠:; − 𝑠;: = ... ? BCDEBDC" is garbled, likely d_mn = (s_mn - s_nm)/√(s_mn s_nm) or a z-score. Actually "BCDEBDC" might be √(s_mn · s_nm). Let me not over-claim; I'll note the normalization is to √(s_mn s_nm) geometric mean, and flag the OCR garble.

Significance: 10,000 permutations of winner/loser labels, FDR 0.05 (Storey-Tibshirani, ref [13]).

**GAM (Page 12):** Pr(win)_i modeled with logistic link:
logit(Pr(win)_i) = log(Pr(win)_i / Pr(loss)_i) = β_0 + f(n_wins_i) + Σ_k g_k(log q_ik)
where f is a smooth function of binned number of wins, g_k smooth functions of log-transformed prototype fractions. ANOVA p < 10^-200 vs model excluding prototypes.

Effect sizes: 50:50 P6:P9 → 60% win; 50:50 P5:P7 → 43% win (Page 12). P2 peaks at ~25% then declines.

**Key empirical findings:**
- Co-occurrence: 1,225 pairs of finishes; 289 co-occur more, 292 less, at FDR 0.05 (Page 3).
- K=10 for wins vs K=3-4 for losses (Page 7): fighters lose in more generic ways.
- Amateurs improve prediction of elite fighters (Page 7).
- Dominance tiers (Figure 6): 5 tiers, P2 (unanimous decision) top; P5, P8, P10 bottom.
- Champions favor P2, P6, P1 (dynamic striking + going the distance) (Page 14).

Now let me think about the "gray-zone audit" and honesty. Important caveats:
- The model predicts finish-type distribution given a fighter, and via GAM the win probability given style — it is NOT a matchup head-to-head predictor. Section 5.1 explicitly says because fighters are mixtures, "we cannot directly count who wins during matchups."
- The dominance hierarchy is descriptive/retrospective, correlational not causal. Fighters who win by decision (P2) may be those who are already fitter/better, so P2's association with winning could be confounded by overall skill. The paper acknowledges this partly.
- Temporal confounding: P10 "dates" a fighter (circa 2000). The number-of-wins term in the GAM controls for experience, but era effects are a confound.
- Selection bias: Sherdog data, only fighters with 4+ wins included for the main analysis. Champions are a tiny selected set.
- No out-of-sample temporal validation for the win% predictions shown; cross-validation is for finish prediction (Equation 2), not for the GAM win model. Figure 7B shows in-sample fit.

Now, for the sections with grandiose names, I'll interpret them faithfully but honestly:

**RETROCAUSAL_GENEALOGY** — I'll interpret as the intellectual/historical lineage: LDA (Blei, Ng, Jordan 2003) from topic modeling; mixed membership models; James-Stein shrinkage (Efron-Morris 1975); MALLET; the "multi-week traps" I'll interpret as the methodological traps the authors navigated (overfitting with sparse per-fighter data, the MLE zero-probability problem, prior sensitivity per Wallach et al. [15]). I should be honest that "retro-causal" isn't literal — there's no retrocausality; I'll reframe as "lineage and the traps that were retroactively apparent."

**RECURSIVE_THEORY_OF_MIND** — This maps genuinely onto the matchup section: a fighter's strategy vs an opponent's strategy. But the paper found intransitivities (rock-paper-scissors) are minor and the dominance hierarchy is "strict," which means the recursive ToM depth is shallow — higher-order opponent modeling adds little because the hierarchy is transitive. I'll make this rigorous: the empirical near-transitivity collapses the infinite regress of "I think that you think that I think..." into a near-static ranking. "Crisis habit regression" I'll interpret as: under fatigue/crisis (deep rounds), fighters regress to dominant prototypes; "clock" = the decision/going-the-distance dimension (cardio, 15+ min).

**CROSS_LAYER_VETO_ADJUDICATION** — "veto" = factors that override style-based expectation. Physical/biomechanical: the paper's own claim that failed guillotine/leglocks leave attacker in inferior position is a biomechanical veto mechanism. Weather: irrelevant to indoor MMA — I'll state that plainly (honest correction). Weight cuts, injuries, age (P10 era effect) are the real cross-layer vetoes.

**RLVR_COUNTERFACTUAL_VETOES** — 3 verifiable, falsifiable predictions derived from the paper, framed as things you could check against FightMetric/outcome data. E.g.:
1. A fighter with high P8/P5 loading should underperform their finish-based win prediction in matchups vs high-P2/P6 fighters (verifiable via held-out bouts).
2. Guillotine/leglock specialists who fail the initial attempt should show measurable positional regression (bottom-position time) post-failure — verifiable with FightMetric positional data.
3. A fighter crossing ~25% P2 sees declining marginal win% contribution beyond that point (the GAM's non-monotonic P2 effect) — verifiable by binning fighters by P2 fraction.

I'll give quantitative, falsifiable thresholds and note what would falsify each.

Let me also make sure I include verbatim quotes with page markers as required by invariant #2: "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes."

Let me gather some good verbatim quotes:
- [PAGE 2]: "a Bayesian mixed membership model that naturally accommodates categorical data and shares power across fighters"
- [PAGE 3]: "Out of 1,225 pairs of finishes, 289 pairs co-occur more frequently than expected, and 292 pairs co-occur less frequently at a false discovery rate of 0.05"
- [PAGE 5]: "we assume a lower dimensional structure to W"
- [PAGE 6]: "This parsimonious approach resulted in setting K = 10 prototypes (two pairs of prototypes were combined because they contained the same majority finish) with aS = 16."
- [PAGE 7]: "We found K = 3 or K = 4 for losses compared to K = 10 for wins, indicating that fighters tend to lose in more generic ways than how they win."
- [PAGE 10]: "prototypes occupy five tiers of dominance, wherein prototypes assigned to higher tiers dominate all prototypes in tiers beneath them."
- [PAGE 11]: "intransitivities are a relatively minor phenomenon"
- [PAGE 12]: "a 50%:50% P6:P9 fighter and a 50%:50% P5:P7 fighter would translate to an expected win percentage of 60% and 43%, respectively."
- [PAGE 12]: "its benefits actually peak once a fighter contains 25% of this style and its effectiveness decreases at higher values."
- [PAGE 14]: "strong dynamic striking (represented by P6 and to a lesser extent P1) and the ability to 'go the distance' by winning through decision (P2) are the major attributes that distinguish the best of the best"
- [PAGE 15]: "The most poisonous style was an ensemble of finishes that were common in MMA around the year 2000"

Good. Now let me write this. I need >= 1,000 words across the sections. Let me aim for a thorough response. I'll be rigorous, honest, and avoid the pseudoscientific overreach while still fulfilling the structure.

One thing: I should note the OCR garbling of equations where relevant (Equations 2 and 3 are garbled), and reconstruct them faithfully but flag reconstruction. That's honest.

Let me be careful about units. The paper's quantities:
- w_ij, q_ik, f_kj: probabilities (dimensionless, in [0,1]).
- log L: natural log-likelihood, units of nats (log-probability). Δlog likelihood per finish in Figure 3.
- aS: dimensionless pseudocount (effective observations).
- s_mn, d_mn: dimensionless weighted counts.
- logit: log-odds, dimensionless (nats if natural log, or log-odds base whatever).

Information units: I can discuss the entropy of finish distributions, KL divergence for the shrinkage. The per-finish log-likelihood differences (Figure 3, "Δ log likelihood per finish, 3MA − multinomial") are in nats/finish.

Let me write.

I want to be careful not to fabricate specific numbers not in the paper. The 60% vs 43% is in the paper. The tier structure is described qualitatively; I shouldn't invent exact tier memberships beyond P2 top and {P5,P8,P10} bottom, which are stated. I can note the middle tiers aren't enumerated in text (Figure 6 is a network I can't see precisely).

Let me now write the response. I'll include a brief honest framing note at the top about the framework naming, then dive in. Actually, the instructions want me to output the XML sections. I'll add a short preamble acknowledging what I'm doing and one honesty caveat, then the sections. Let me keep the preamble minimal to respect the format.

Let me write each section substantively.

I'll write formal LaTeX using proper notation.

Let me draft.

For THINK_TRACE (>=400 words): multi-hop derivation connecting the sparse-data problem → mixture model → LDA shrinkage → the specific hyperparameter choices → what the model can and cannot support, plus gray-zone audit of confounds (era, experience, selection, direction of causation, in-sample vs out-of-sample).

Let me make sure I hit word counts. I'll write generously.

Let me write it all out now.

Actually, let me reconsider the numbers discrepancy for honesty:
- Abstract: "~18,000 fighters," ">250,000 fights"
- Page 3: "257,582 previous amateur and professional bouts among 151,746 fighters"; "Only fights that ended in a win for one fighter were considered, leaving 230,126 bouts"
- Page 4-5: "I = 17,778 by J = 50 matrix" with "fighters with four or more wins"
- Table 1: All Data, wins, 4+ wins: Nfighters 17,778, Nbouts 142,775

So 230,126 win-bouts total, but only 142,775 bouts involve the 17,778 fighters with 4+ wins (and presumably counting each qualifying fighter's bouts). Actually 142,775 < 230,126 makes sense if we only count bouts where at least the fighter is in the 4+-win set, and each bout counted once. The 17,778 fighters with 4+ wins are the analysis units. Fine — I'll cite both with pages and note the reduction is due to the 4+-win inclusion filter.

Also note: abstract says ~18,000 and paper says 17,778 — consistent (rounding). Bouts: 257,582 raw → 230,126 wins → 142,775 in the modeled matrix (4+ wins fighters). Good.

Let me write now. I'll keep LaTeX in fenced blocks or inline with $...$. Given this is plain text with markdown, I'll use LaTeX notation in code-ish inline or display. I'll use standard $ $ and $$ $$ which is readable.

Let me write the final response.
</NATIVE_REASONING>

I'll engage this as a rigorous methodological audit of the Hackett & Storey (2016) 3MA paper. One honesty note up front: several of the framework labels ("retro-causal," "veto adjudication") are not literal physical claims — I treat them as structured lenses (lineage, opponent-modeling depth, override factors, falsifiable predictions) and flag where the paper's own evidence constrains or contradicts grand framing. Two equations ([PAGE 6] Eq. 2, [PAGE 11] Eq. 3) are OCR-garbled in the source; I reconstruct them and mark the reconstruction explicitly.

<THINK_TRACE>
The paper's inferential spine is a single move: solve a sparse-data estimation problem by shrinking per-fighter estimates toward a shared low-rank structure. The multi-hop chain runs as follows.

Hop 1 — the estimand. The target is $w_{ij}=\Pr(\text{Finish}_j\mid\text{Fighter}_i)$ on an $I\times J$ matrix with $I=17{,}778$ fighters (4+ wins) and $J=50$ finishes [PAGE 4–5]. Raw per-fighter data is tiny: "a successful MMA fighter may retire after only 20 bouts" [PAGE 1], and "No fighter has won a fight with each of the 50 possible finishes" [PAGE 4]. So $w_{ij}$ is estimated from a handful of counts $x_{ij}$.

Hop 2 — why the naive estimator fails. The multinomial MLE $\hat w_{ij}^{\text{MLE}}=x_{ij}/\sum_j x_{ij}$ assigns zero probability to unobserved finishes and overfits small samples. The authors invoke the batting-average analogy: "the MLE was less accurate than the James-Stein estimate" [PAGE 1], citing Efron & Morris (1975) [ref 8]. This is the pivotal gray-zone admission — per-fighter likelihood is the wrong loss under sparsity.

Hop 3 — the structural assumption. Assume $\mathbf W$ is low-rank: $w_{ij}=\sum_{k=1}^{K} q_{ik} f_{kj}$ with $q_{ik}=\Pr(\text{Prototype}_k\mid\text{Fighter}_i)$, $\sum_k q_{ik}=1$, and $f_{kj}=\Pr(\text{Finish}_j\mid\text{Prototype}_k)\in[0,1]$ [PAGE 5]. This is a two-stage mixture: fighter → prototypes → finishes, i.e., total probability over a latent prototype layer.

Hop 4 — the Bayesian prior that does the shrinking. LDA places Dirichlet priors $\mathbf a$ on rows of $Q$ and $\mathbf b$ on $F$, fits by variational inference to MAP estimates [PAGE 6]. The concentration $a_S=\sum_k a_k$ is a global pseudocount budget: low $a_S$ lets a fighter's own record dominate, high $a_S$ pulls everyone toward the population mean — exactly Stein-type shrinkage, but categorical. Wallach et al. [ref 15] is cited for the sensitivity fact that $\mathbf a$ "greatly impacts estimation of $Q$" while $\mathbf b$ "do[es] not greatly affect inference on $F$." That asymmetry justifies tuning $a_S$ heavily and leaving $\mathbf b$ adaptive.

Hop 5 — model selection. $(K, a_S)$ chosen by 20-fold cross-validated held-out log-likelihood [PAGE 6, Eq. 2], with a parsimony rule: pick small $K$, small $a_S$ within 95% of the best. Result: $K=10$ (two prototype pairs merged for sharing a majority finish), $a_S=16$ [PAGE 6].

Gray-zone audit. Four confounds are load-bearing and the paper is partly transparent about them. (a) Direction of causation: "winning by decision may be an indicator of the overall fitness and caliber of a fighter" [PAGE 15] — P2 (unanimous decision) may be a marker of already-being-good, not a cause. (b) Experience–style conflation: extreme prototype loadings require many wins, so "fighters whose prototype proportions are near the prior proportions generally have very few fights" [PAGE 12]; the GAM's win-count term is a partial, not complete, disentangler. (c) Era confounding: P10 "dates a fighter" to circa-2000 MMA [PAGE 9, 15]; the win-count control does not remove calendar-time drift in rules and judging. (d) Validation mismatch: cross-validation (Eq. 2) validates finish prediction, whereas the headline win% claims (Fig. 7B, 8A) are shown in-sample. The 60% vs 43% style-contrast [PAGE 12] is a model-implied contrast, not a held-out forecast. Net: the finish-prototype layer is genuinely well-validated; the win-probability layer is descriptive-associational, and any downstream point prediction inherits that limitation.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Units: all $w,q,f,\Pr(\cdot)$ are dimensionless probabilities in $[0,1]$. Log-likelihoods are in nats. $a_S$ is a dimensionless effective-observation count (pseudocount). $s_{mn}, d_{mn}$ are dimensionless weighted bout counts.

Data reductions [PAGE 3, Table 1 PAGE 7]:
$$257{,}582 \text{ raw bouts} \;\xrightarrow{\text{wins only}}\; 230{,}126 \;\xrightarrow{\text{fighters with }4+\text{ wins}}\; 142{,}775 \text{ bouts},\ 17{,}778 \text{ fighters}.$$

Mixture decomposition (Eq. 1) [PAGE 5]:
$$w_{ij}=\Pr(F_j\mid \text{Fighter}_i)=\sum_{k=1}^{K} q_{ik}\,f_{kj},\qquad \sum_{k=1}^{K} q_{ik}=1,\quad q_{ik}\ge 0,\ f_{kj}\in[0,1].$$
Interpretation: $q_{ik}=\Pr(\text{Prototype}_k\mid\text{Fighter}_i)$, $f_{kj}=\Pr(F_j\mid\text{Prototype}_k)$; $K<J$.

MLE baseline [PAGE 5]: $\hat w_{ij}^{\text{MLE}}=x_{ij}\big/\sum_{j'=1}^{J}x_{ij'}$, with $\hat w_{ij}^{\text{MLE}}=0$ when $x_{ij}=0$ (the pathology).

LDA MAP estimation [PAGE 6]: priors $\mathbf a=(a_1,\dots,a_K)$ on $Q$, $\mathbf b=(b_1,\dots,b_J)$ on $F$; variational inference yields
$$\hat Q,\hat F=\arg\max\ \Pr(Q\mid X)\,\Pr(F\mid X),\qquad a_S=\sum_{k}a_k.$$
Shrinkage semantics: expected posterior row $\mathbb E[q_{i\cdot}\mid x_i]\propto x_i + a_S\,\bar q$, so $a_S$ interpolates fighter record vs global mean.

Held-out CV objective (Eq. 2; OCR-garbled, reconstructed) [PAGE 6]:
$$\log L=\sum_{f=1}^{20}\ \sum_{(i,j)\in \mathcal S_f} x_{ij}\,\log \hat\omega_{ij}^{\,(-f)},$$
where $\mathcal S_f$ is the test set of fold $f$ and $\hat\omega^{(-f)}$ is fit on the other folds. Fig. 3 reports $\Delta\log L$ per finish, $\text{3MA}-\text{multinomial}$, in nats/finish.

Prototype marginal [PAGE 8]: $\Pr(\text{Prototype}_k)=\dfrac{\sum_{i=1}^{I}\hat\theta_{ik}}{I}$. Table 2: P1 .22, P2 .18, P3 .11, P4 .09, P5 .09, P6 .08, P7 .07, P8 .07, P9 .06, P10 .05 (rounding sums to ≈1.02).

Bayes inversion for Figure 4 [PAGE 9]:
$$\Pr(\text{Prototype}\mid \text{Finish})=\frac{\Pr(\text{Prototype})\,\Pr(\text{Finish}\mid\text{Prototype})}{\Pr(\text{Finish})}\ \propto\ \Pr(\text{Prototype})\,\Pr(\text{Finish}\mid\text{Prototype}).$$

Dominance operators (Eq. 3; second line OCR-garbled, reconstructed) [PAGE 10–11]. With bout set $\mathcal B=\{(b_1,b_2)\}$, $b_1$=winner, $b_2$=loser:
$$s_{mn}=\sum_{(b_1,b_2)\in\mathcal B}\hat\theta_{b_1 m}\,\hat\theta_{b_2 n},\qquad d_{mn}=s_{mn}-s_{nm}.$$
The normalization shown ("$d_{mn}=s_{mn}-s_{nm}=\dots$" with garbled RHS) is most consistent with a geometric-mean standardization $z_{mn}=(s_{mn}-s_{nm})/\sqrt{s_{mn}s_{nm}}$; I flag this as reconstructed, not verbatim. Significance: 10,000 winner/loser label permutations, FDR 0.05 (Storey–Tibshirani, [ref 13]).

GAM win model [PAGE 12], logistic link, log-odds in nats:
$$\operatorname{logit}\Pr(\text{win})_i=\ln\frac{\Pr(\text{win})_i}{\Pr(\text{loss})_i}=\beta_0+g_0(\text{wins}_i)+\sum_{k=1}^{10} g_k\!\big(\ln \hat\theta_{ik}\big),$$
$g_0,g_k$ smooth splines (Hastie–Tibshirani [ref 21]); prototype terms significant at $p<10^{-200}$ (ANOVA vs prototype-free model). Fits are in-sample (Fig. 7B).

Breakdown/singularity regimes (honest limits): (i) $a_S\to 0$ recovers the MLE and reintroduces zero-probability finishes; (ii) $a_S\to\infty$ collapses all $q_{i\cdot}\to\bar q$ (no fighter specificity); (iii) $K\to J$ removes compression, kills generalization [PAGE 5]; (iv) Eq. 3 is undefined when $s_{mn}=s_{nm}=0$ (disjoint prototype support), where $z_{mn}$ diverges; (v) the GAM's win-count and prototype terms are collinear by construction ("prototype values are partially conflated with experience" [PAGE 12]), so identified effects are conditional, not marginal.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Reframed honestly: there is no retrocausality here; "genealogy" is the intellectual lineage plus the methodological traps that were only visible in hindsight ("retro-apparent").

Lineage. The paper is a direct transplant of topic modeling into combat sports. Latent Dirichlet Allocation (Blei, Ng, Jordan 2003, [ref 10]) and its mixed-membership framing [ref 10, 11] supply the generative story: documents→fighters, topics→prototypes, words→finishes. The shrinkage philosophy traces to James–Stein estimation (Efron & Morris 1975, [ref 8]) and hierarchical Bayes for batting (Jensen et al. 2009, [ref 9]) — the authors explicitly reuse "the earlier example of applying shrinkage to batting averages" [PAGE 5–6]. Inference tooling is MALLET [ref 17]; prior-sensitivity awareness comes from Wallach, Mimno & McCallum [ref 15]; false-discovery control from Storey–Tibshirani [ref 13]. Predecessor "style" models in sport (Goldsberry–Weiss interior defense [ref 5]; Miller et al. factorized point processes [ref 6]; Wei et al. tennis style priors [ref 7]) are cited precisely to be transcended: those are spatial, this is categorical.

Multi-week / structural traps the lineage had to survive. (1) Overfitting trap: high-$K$ models "generally resulted in held out log(L) similar in magnitude to those with moderate K, but high K models were less interpretable" [PAGE 6] — likelihood plateaus, so the tie is broken by parsimony, not fit. (2) Zero-support trap: a pure low-rank factorization assigns "probability zero for him/her to perform any leg submission" for a fighter who never attempted one [PAGE 5] — the Dirichlet prior is the specific antidote. (3) Prior-sensitivity trap: choosing symmetric $\mathbf a$ would "arbitrarily enforc[e] that prototypes be equally prevalent" [PAGE 6]; asymmetry is retained so rare prototypes (P8, P9, P10) can exist. (4) Model-adequacy trap: all prototype loadings are negatively correlated, which the authors read as evidence the $K=10$ discretization is appropriate rather than needing a correlated topic model [ref 18] ("the absence of strong associations between prototypes … suggests that the structure of finishes is appropriately discretized using LDA" [PAGE 10]). The genealogical payoff: amateurs are not noise but signal — "information from amateurs can improve the accuracy of defining the styles of champions" [PAGE 7] — a universality claim that only the shrinkage lineage makes coherent.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
This maps cleanly onto Section 5's matchup analysis, and the paper's central finding is that the recursion collapses. In principle, opponent-aware strategy is an infinite regress ("I train to beat your A, so you train to beat my counter…"). The empirical result short-circuits it: "intransitivities are a relatively minor phenomenon" and "prototypes occupy five tiers of dominance, wherein prototypes assigned to higher tiers dominate all prototypes in tiers beneath them" [PAGE 10–11]. A strict (transitive) dominance order means higher-order opponent modeling adds near-zero strategic value — there is a dominant response that does not depend on beliefs about the opponent's beliefs. Formally, if the tournament relation is acyclic, a single global ranking $r:\{P_1,\dots,P_{10}\}\to\{1,\dots,5\}$ (tiers) is a sufficient statistic; the belief hierarchy's fixed point is degenerate. Rock-paper-scissors structure would have forced genuine recursion; its near-absence is the paper's ToM result. Top tier = {P2, unanimous decision}; bottom tier = {P5 (armbar/leg sub), P8 (guillotine), P10 (circa-2000)} [PAGE 11].

Crisis-habit regression. Under late-round crisis (fatigue, deep water), fighters revert to trained defaults — the finish distribution re-concentrates on high-$q_{ik}$ prototypes. The GAM's non-monotonic P2 curve is the crisp signature: P2 benefit "actually peak[s] once a fighter contains 25% of this style and its effectiveness decreases at higher values" [PAGE 12]. Over-investing in decision-hunting is self-defeating ("fighters who overspecialize in securing decision victories become less effective" [PAGE 15]) — a within-prototype regression to negative marginal returns past the inflection.

The clock. "Going the distance" is explicitly temporal: "Winning by decision entails not only having sufficient cardio to fight for 15+ minutes but also doing so with enough of an advantage" [PAGE 15]. The clock is thus a two-sided instrument — it rewards the fit (P2 as a fitness proxy) but exposes position-sacrificing grapplers (P5/P8), whose failed entries in a long fight compound into inferior position. The ToM-consistent read: the elite don't out-think opponents recursively, they out-last them and default to P6/P1 striking with a P2-capable gas tank [PAGE 14].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A "veto" is any factor that overrides the style-implied expectation. I adjudicate the candidate veto layers.

Biomechanical veto (supported by the source). The paper supplies its own mechanism: "should the application of these attacks fail, they generally leave the attacker in an inferior position" (guillotine, leg locks) versus successful submissions "applied from a position of very strong control (back, mount and side control)" where "if an opponent escapes … the submitting fighter will still be left in a strong position" [PAGE 15]. This is a genuine biomechanical veto: expected value of a submission attempt $=p_{\text{finish}}\cdot V_{\text{win}}+(1-p_{\text{finish}})\cdot V_{\text{post-fail position}}$, and for guard-pull guillotines/leglocks the second term is negative (positional concession). It rationalizes P8/P5 occupying the bottom dominance tier. The kimura/RNC/arm-triangle (P9/P7) cluster survives the veto precisely because $V_{\text{post-fail}}\ge V_{\text{pre-attempt}}$.

Weather veto (rejected as inapplicable). MMA is contested indoors in a climate-controlled cage; there is no aerodynamic or surface term analogous to outdoor sports. I decline to fabricate a weather operator — no page supports it, and inventing one would violate the no-toy-equation invariant.

Adjudicated real override layers (evidence-graded). (1) Era/temporal veto — strong: P10 "dates a fighter" and its finishes "decreased in frequency by over 10-fold" [PAGE 9, 15]; a stale record vetoes style inference. (2) Experience confound — moderate: the win-count spline $g_0$ and prototype terms are collinear [PAGE 12], so a style "effect" can be an experience artifact. (3) Selection/survivorship — moderate: champions are a tiny selected set and Sherdog is a secondary source; "being a great fighter is not sufficient to become a champion; fighters must also embrace a style that potentiates their success" [PAGE 14] is a selection statement, not a causal guarantee. (4) Missing disciplines — acknowledged: "This analysis does not include wrestling, judo and other martial arts that are specialized in achieving takedowns" [PAGE 9], so a wrestler's dominance is mis-attributed to downstream P2/P3/P8/P9 finishes. Veto proof: any single-fight prediction from this model is overridable by (1)–(4); the finish-distribution estimate is robust, the win-probability estimate is vetoable.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three falsifiable, verifiable predictions (RLVR = checkable against reward/outcome data), each with an explicit falsifier. These target the win-probability layer, which I judge the paper's weakest-validated claim.

Veto 1 — Position-sacrifice underperformance. Prediction: holding total skill/experience fixed, fighters with $q_{i,\text{P8}}+q_{i,\text{P5}}$ in the top decile will underperform their 3MA-implied $\Pr(\text{win})$ by a measurable margin in bouts against opponents in the top P2/P6 strata. Verifiable via held-out bouts and FightMetric positional time [ref 22]. Falsifier: no significant negative residual (e.g., $|\Delta\text{win\%}|$ within CI of 0) after experience correction. Grounding: dominance tiering puts {P5,P8} at the bottom [PAGE 11]; the 43% vs 60% contrast (P5:P7 vs P6:P9) is the a priori effect size [PAGE 12].

Veto 2 — Post-failure positional collapse. Prediction: for guillotine/leg-lock attempts that fail, bottom-control time in the subsequent 60 s rises sharply relative to pre-attempt baseline, whereas failed kimura/RNC attempts (from back/mount/side) show no such positional loss. Verifiable with frame-level positional annotation. Falsifier: failed strong-position submissions produce equal or greater positional concession than failed guard-pull entries. Grounding: verbatim mechanism [PAGE 15] — failed low-dominance entries "leave the attacker in an inferior position," high-control entries do not.

Veto 3 — P2 non-monotonicity (the 25% inflection). Prediction: binning fighters by $\hat\theta_{i,\text{P2}}$, the experience-corrected marginal contribution to log-odds of winning rises up to ≈0.25 and turns non-positive beyond it. Verifiable by refitting the GAM on an independent fighter cohort. Falsifier: a monotone-increasing P2 spline with no sign change near 0.25. Grounding: "its benefits actually peak once a fighter contains 25% of this style and its effectiveness decreases at higher values" [PAGE 12].

Global falsifier for the whole enterprise: if a strict out-of-sample temporal holdout (train pre-2014, test 2015–2016) shows the prototype→win% mapping (Figs. 7–8) fails to beat a wins-only logistic baseline, then the win-probability layer is era/selection-confounded and only the finish-distribution layer (Eq. 2-validated) should be trusted.

Bottom line: the paper rigorously establishes a categorical finish-prototype model (Eq. 1, $K=10$, $a_S=16$, CV-validated) and a descriptive dominance hierarchy (Eq. 3) whose near-transitivity is its real theory-of-mind result. Its causal/predictive win claims are associational, confounded by experience and era, and validated in-sample — usable as strong priors, not as point forecasts.
</RLVR_COUNTERFACTUAL_VETOES>