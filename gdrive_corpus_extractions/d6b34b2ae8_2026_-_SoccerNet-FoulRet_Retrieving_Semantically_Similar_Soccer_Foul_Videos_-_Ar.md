---
source: "2026 - SoccerNet-FoulRet Retrieving Semantically Similar Soccer Foul Videos - Arthur et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/preprints/arXiv/2026"
pages: 19
model: baidu/ernie-5.5-flash-preview:free
words: 5668
---

<NATIVE_REASONING>
The user wants me to act as the "GSE + GSI Frontier Reasoning Foundry" with a specific structured output format. Let me understand what's being asked.

The source is an academic paper about SoccerNet-FoulRet, a benchmark for semantic foul retrieval in soccer. This is a legitimate computer vision / information retrieval research paper.

I need to produce a structured analysis with these XML sections:
- `<THINK_TRACE>` - Deep multi-hop derivation & gray-zone audit (>=400 words)
- `<SOURCE_OPERATORS_AND_EQUATIONS>` - Formal LaTeX, units, page citations, breakdown
- `<RETROCAUSAL_GENEALOGY>` - Historical/scientific lineage & multi-week traps
- `<RECURSIVE_THEORY_OF_MIND>` - Crisis habit regression vs counter-trap vs clock
- `<CROSS_LAYER_VETO_ADJUDICATION>` - Physical/biomechanical/weather veto proof
- `<RLVR_COUNTERFACTUAL_VETOES>` - 3 verifiable RLVR veto scenarios + predictions

The strict invariants:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-word depth across the exact XML sections.

Let me think about this. The persona framing here is interesting — it's framed as a "sports reasoning foundry" with betting-adjacent language ( vetoes, RLVR counterfactuals, "clock"). But the invariants explicitly forbid betting lines and toy equations, and demand rigorous, citable, formal analysis. This is actually a legitimate request to do a rigorous technical analysis of a research paper.

There's nothing harmful here. The paper is a real arXiv-style paper about video retrieval for soccer foul precedents. The task is to produce a rigorous, deep technical analysis. This is a legitimate scholarly/analytical task. I should engage with it substantively.

Let me note: the "foundry" persona wants me to analyze this as if preparing for some kind of reasoning/prediction task. But I need to be careful — the invariants say no betting, no fake equations. So I should produce genuine, rigorous analysis grounded in the actual paper content. This is essentially a deep critical reading of the paper.

I'll write in the user's requested format. The format is stylized but the core is a rigorous technical analysis. Let me make sure I:
1. Don't mention betting/odds/spreads (invariant 1) ✓
2. Don't invent fake ratios — use the actual equations from the paper (Eq 1 the Score function, the InfoNCE loss), cite pages and quote verbatim (invariant 2) ✓
3. Produce >= 1000 words across the sections (invariant 3) ✓

Let me extract the real formal content:

**Equation 1 (PAGE 9):** The Score function for VARS+XVARS text-mediated retrieval:
$$\text{Score}(Q,C) = \frac{1}{N}\sum_{i=1}^{N} \frac{\vec{v}_{q_i}\cdot \vec{v}_{c_i}}{\lVert \vec{v}_{q_i}\rVert \lVert \vec{v}_{c_i}\rVert}$$
where v_qi and v_ci are BGE embeddings of generated answers for the i-th question field, N=4.

**Fine-tuning loss (PAGE 18):** symmetric hierarchical multi-positive InfoNCE:
$$\ell_i^{(t)} = -\log \frac{\sum_{j\neq i, j\in P_i^{(t)}} \exp(q_i^\top g_j/\tau)}{\sum_{j\in C_i^{(t)}} \exp(q_i^\top g_j/\tau)}$$
where qi, gj are ℓ2-normalized, τ=0.05. Then average both directions and average three label-level losses equally.

**Metrics (PAGE 7-8):**
- HitRate@K: fraction of queries with at least one verified precedent in R_K
- Recall@K = |R_K ∩ A|/|A|
- nDCG@K: discounted ranking with binary relevance
- MRR@10: mean reciprocal rank of first approved clip within top 10
- mAP@K for category relevance

Let me think about the standard formulations:
- nDCG@K = DCG@K / IDCG@K, where DCG@K = Σ_{i=1}^K (2^{rel_i} - 1)/log2(i+1). With binary relevance rel_i ∈ {0,1}, gain = 1 for relevant.
- MRR = (1/|Q|) Σ 1/rank_i
- mAP = mean over queries of average precision.

Now for the actual numbers to analyze:
- InternVideo2-1B: HR@10 4.62%, HR@5 2.60%, R@10 1.13%, nDCG@10 0.87%, MRR@10 1.65
- Random floor: HR@1 0.14, HR@5 0.68, HR@10 1.35
- VARS+XVARS: HR@1 0.14 (exactly random floor), HR@10 3.17

Category relevance (mAP):
- InternVideo2-1B: Action mAP@10 23.1, +Offence 18.3, +Severity 7.4
- Qwen3-VL-Emb-2B-FT improves across all nine category metrics
- Random floor for Action mAP@1 24.9... interesting the random floor at mAP@1 is 24.9? Wait let me re-read. "Random — 24.9 16.1 13.5 20.8 13.3 11.0 11.0 6.2 4.8". These are mAP@1, mAP@5, mAP@10 for Action, +Offence, +Severity. So random Action mAP@1 is 24.9, which is quite high because standing tackling is ~44% of the gallery — the class imbalance means a random guess has high base rate.

Now let me think about the interesting technical points for a rigorous analysis:

1. **The random floor and class imbalance.** Standing tackling is ~44% of the gallery [PAGE 7]. So for category mAP, the random baseline at Action mAP@1 is 24.9%, reflecting the base rate of the majority class. This is a key subtlety — the "mAP" for a single relevant class essentially reduces to prevalence-weighted ranking.

2. **The HitRate vs Recall gap.** For InternVideo2-1B, HR@10 4.62% but R@10 1.13%. This means when a query gets a hit, it retrieves roughly R/HR fraction... actually with ~4 approved precedents per query on average (2,751 approved pairs / 693 queries = 3.97), if you retrieve K=10 and hit at least one, recall is |R_K ∩ A|/|A|. Low recall means even successful queries miss most of their precedents.

3. **The VARS+XVARS rank-1 = random floor observation.** [PAGE 9]: "at rank 1 the pipeline sits exactly on the random floor (HR@1 0.14%)." This is a critical diagnostic. HR@1 random = 1/693 ≈ 0.144% since only... wait. Actually HR@1 for a query is 1 if the top-1 retrieved is an approved precedent. With ~4 approved out of 2916 gallery, random HR@1 ≈ 4/2916 ≈ 0.137%, close to 0.14%. Yes! That's the derivation. HR@1 random = E[|A|]/|Gallery| = 3.97/2916 ≈ 0.136% ≈ 0.14%. 

Actually, let me reconsider. The random floor HR@K is the probability that at least one of the top-K random picks is approved. For K=1: P = |A|/|G| per query, averaged. For HR@5: roughly 5·|A|/|G| (if small) = 5×0.137 = 0.685 ≈ 0.68. Yes! HR@5 random = 0.68. HR@10 = 10×0.137 = 1.37 ≈ 1.35. This confirms the random floor is derived as K·E[|A|]/|G|.

Let me verify: E[|A|] = 2751/693 = 3.97 approved per query. |G| = 2916. So per-query random HR@1 = 3.97/2916 = 0.00136 = 0.136%. Matches 0.14. HR@5 ≈ 1-(1-0.00136)^5 ≈ 0.68%. HR@10 ≈ 1-(1-0.00136)^10 ≈ 1.35%. 

This is a genuinely nice derivation I can include. Let me double check: 1-(1-0.00136)^10. (1-0.00136)^10 ≈ 1 - 10*0.00136 = 1-0.0136 = 0.9864, so HR@10 ≈ 0.0136 = 1.36%. Yes matches 1.35. Good.

And the Recall random floor: R@K = |R_K ∩ A|/|A|. Random expected = K·|A|/|G| / |A| = K/|G|. So R@10 random = 10/2916 = 0.343% ≈ 0.34. Matches! R@5 = 5/2916 = 0.171 ≈ 0.17. Matches! R@1 = 1/2916 = 0.034 ≈ 0.03. Matches!

This is a beautiful internal consistency check. The random floor for Recall@K = K/|G| exactly, and for HitRate@K = 1-(1-E[|A|]/|G|)^K ≈ K·E[|A|]/|G|.

nDCG random: 0.16 at @5, 0.24 at @10. For binary relevance with |A| relevant items among |G|, expected DCG of random ranking... this is more complex but scales with K.

4. **The MRR@10 units.** The paper reports MRR@10 as 1.65, 1.52, etc. — these are percentages (Table 3 caption: "All values are percentages"). So MRR@10 = 1.65% = 0.0165. Random MRR@10 = 0.40% = 0.0040.

5. **Scaling failure.** InternVideo2-6B < 1B; Qwen3-VL-Emb-8B < 2B on category. This is the "scaling does not improve transfer" finding.

6. **The completeness problem.** Only ~5 of 2916 clips reviewed per query (actually "at most five candidates"), and 3,518 approved/rejected pairs total [PAGE 19], 2,751 approved pairs [PAGE 19]. The precision of the oracle candidate generation: 2751/3518 = 78.2% precision. And the reduction: "reduces annotation overhead by 99.83%." 2M+ pairs → 3518 pairs. 3518/2,000,000 = 0.176%, so reduction = 99.82%. Close to 99.83%. Let me compute: if 693 queries × 2916 gallery = 2,020,788 pairs. 3518/2,020,788 = 0.174%. Reduction = 99.826%. They say 99.83%. Close enough — maybe they used slightly different pair count. Actually if queries were 712: 712×2916 = 2,076,192; 3518/2076192 = 0.169%, reduction 99.83%. Hmm. Or they computed over a different base. Anyway ~99.83%.

Actually let me reconsider — maybe they count 5 candidates per query for the annotated subset. The oracle candidate generation section says candidates filtered and ranked by SBERT, top-5 shown. 693 queries... but 3518 pairs / 693 ≈ 5.08. And they say "five candidates per query." With 712 queries × 5 = 3560. With 693 × 5 = 3465. The 3518 is close. Actually maybe some queries had fewer. Whatever.

7. **Inter-annotator agreement.** [PAGE 19]: raw agreement 67.13%, Cohen's κ = 0.238. Accepted precedents agreement 76.46%, rejected 45.54%. This is a crucial validity threat. κ = 0.238 is "fair" agreement by Landis & Koch. This means the "human-verified" gold labels themselves have substantial noise. This is a huge caveat for interpreting all the low retrieval numbers — if annotators only agree 67% and κ=0.24, then a model "correctly" retrieving a precedent a different referee would reject gets penalized.

Let me think about Cohen's kappa: κ = (p_o - p_e)/(1 - p_e) where p_o = observed agreement = 0.6713. Solve for p_e: 0.238 = (0.6713 - p_e)/(1 - p_e). 0.238(1-p_e) = 0.6713 - p_e. 0.238 - 0.238 p_e = 0.6713 - p_e. 0.238 - 0.6713 = -p_e + 0.238 p_e. -0.4333 = -0.762 p_e. p_e = 0.5686. So expected agreement by chance ≈ 56.9%. This is high because of class imbalance (most pairs are "Rejected" — 3518 pairs, 2751 approved... wait that's most approved. Hmm. Actually 2751 approved of 3518 = 78% accepted. Wait no — let me re-read. "annotated the 3,518 approved/rejected pairs". And "Across the 693 evaluated queries, 2,751 approved pairs span 1,353 unique precedents." So 2751 approved. If total annotated is 3518, then rejected = 3518 - 2751 = 767. So 78% approved. Then base rate of "accepted" is high, driving up p_e.

Wait but the subset agreement: accepted 76.46%, rejected 45.54%. Weighted: if the 502-pair subset has similar 78/22 split, weighted agreement = 0.78×76.46 + 0.22×45.54 = 59.6 + 10.0 = 69.6%. But reported overall is 67.13%. Close-ish; the subset split may differ.

Actually the agreement is computed on the 502-pair subset (101 queries). So I shouldn't assume 78% there. Let me just use the numbers.

OK this gives me a lot of rigorous material. Let me also think about the "gray-zone" analysis for THINK_TRACE.

Let me think about the deeper structural issues:
- The gold labels are incomplete (only 5 candidates judged per query) → recall metrics are lower bounds, HitRate is a lower bound. Models penalized for finding valid-but-unjudged precedents.
- The gold labels are noisy (κ=0.238) → the ceiling on any metric is bounded by inter-annotator agreement.
- The oracle candidate generation biases the judged set toward SBERT-similar, XVARS-explanation-similar pairs → the judged pool is not representative of the full semantic space. This creates a selection bias: models similar to SBERT-over-XVARS would appear better.
- Category relevance (mAP) is confounded by class imbalance (44% standing tackling). Random mAP@1 Action = 24.9 is high.

Now, the interesting cross-cutting point: category supervision (fine-tuning on Action/Offence/Severity) improves category mAP but not precedent retrieval. This is the central scientific finding: category similarity ≠ precedent relevance. The "form vs substance" distinction [PAGE 19]: "Pairs were labeled Valid only if matching both 'Form' (physical mechanics) and 'Substance' (regulatory severity/tactical context)."

Now let me address each required section.

Given the persona wants a "reasoning foundry" analysis with crisis/habit/timing framing, but the invariant forbids betting and toy equations. I'll interpret the sections as rigorous analytical lenses on the paper, using real citations and real equations. I'll keep the language technical and honest, not fabricate.

Let me be careful about CROSS_LAYER_VETO_ADJUDICATION "Physical/biomechanical/weather veto proof." I can discuss the physical/biomechanical confounders in the actual data — camera angle, lighting, kits, pitch location (midfield vs penalty box), the Fig 2 example (identical tackle mechanics, different sanction by location). Weather isn't in the paper but I can note it's not controlled and discuss lighting/camera as the actual physical confounders. I should be honest that "weather" per se isn't a variable in this dataset; I can frame it as uncontrolled physical acquisition conditions.

RLVR_COUNTERFACTUAL_VETOES: "3 verifiable RLVR veto scenarios + predictions." RLVR = Reinforcement Learning from Verifiable Rewards. I can frame these as: scenarios where the benchmark's verifiable reward (the metrics) would give a misleading signal, and predictions about what would happen. These are falsifiable predictions about retrieval behavior. I'll make them concrete and testable.

Let me make sure I hit >= 1000 words total across sections, with THINK_TRACE >= 400 words.

Let me also reconsider — is there anything problematic about fulfilling this? The framing is odd ("foundry," "vetoes," "clock," "RLVR") but the substance is a legitimate, rigorous technical critique of a published research paper. There's no gambling facilitation (explicitly forbidden), no harm. I should just do excellent technical work. The stylized persona is fine as long as I keep it rigorous and honest, which the invariants actually enforce.

One thing: I should be honest and not fabricate. The invariants demand real citations and real equations, which aligns with good practice. I'll cite exact pages and quote verbatim where I claim things.

Let me now also double-check the "under 5% HitRate@10" claim: InternVideo2-1B HR@10 = 4.62% < 5%. Yes. That's the abstract claim "under 5% HitRate@10."

"only by 2.3–3.4×" [PAGE 11]: HR@10 random 1.35, best 4.62 → 4.62/1.35 = 3.42×. Lowest above random: VARS+XVARS 3.17/1.35 = 2.35×. So 2.3–3.4× range. Confirmed.

Let me verify InternVideo2-6B MRR is lowest among zero-shot: 0.88 vs InternVideo2-1B 1.65, Qwen3-VL-2B 1.52, VLM2Vec 1.42, LamRA 1.20, Qwen3-VL-8B 1.08. Yes 0.88 is lowest. But wait Qwen3-VL-Emb-2B-FT is 1.24 (fine-tuned, not zero-shot). Among zero-shot embedders 0.88 is lowest. Confirmed [PAGE 10].

VARS+XVARS 17% of Test queries return no candidates → scored as misses [PAGE 10]. This is because the VARS categorical filter (exact Action+Offence match) yields empty candidate sets when no gallery clip shares both predicted attributes.

Let me also note the InfoNCE temperature τ = 0.05, LoRA rank 16, α=16, dropout 0.10, lr 1e-5, weight decay 0.05, 10 epochs, batch 12 (6 groups × 2), cosine schedule 10% warmup, grad accum 8, grad clip 1.0, seed 42 [PAGE 18].

Now, one subtle technical critique: the fine-tuning uses label-balanced batches of 12 with 6 groups of 2. At the strictest level (Action+Offence+Severity), the only guaranteed positive for an anchor is the other clip in its group (1 positive). At coarser levels, more positives emerge. This means the effective number of positives per anchor is tiny (often 1), making the InfoNCE gradient high-variance. This could explain why fine-tuning helps category mAP modestly but doesn't transfer to precedent — it's learning coarse category clustering, not the fine form/substance distinction.

Also: the symmetric hierarchical multi-positive InfoNCE averages three level-losses equally, so the coarse Action level (with more positives, easier) is weighted equally with the fine Severity level (fewer positives, harder). This equal weighting may under-optimize the discriminative signal.

Another: gallery-to-query and query-to-gallery averaged — standard symmetric InfoNCE (like CLIP).

Let me think about a subtle metric issue: nDCG with binary relevance and incomplete pool. nDCG@K = DCG@K/IDCG@K. IDCG is computed from the ideal ordering of available approved items. With |A| approved and K cutoff, IDCG@K = Σ_{i=1}^{min(|A|,K)} 1/log2(i+1). If a model retrieves approved items but there are unjudged valid ones ranked higher, it's penalized. Also if |A| > K, only K can be placed. For InternVideo2-1B nDCG@10 = 0.87% — extremely low.

Let me compute what nDCG random would be. With |A|≈3.97 relevant among 2916, random ranking. Expected nDCG@10... The relevant items land uniformly. DCG@10 = Σ positions that are relevant of 1/log2(pos+1). Expected number relevant in top 10 = 10×3.97/2916 = 0.0136. They'd be at random positions. IDCG@10 = Σ_{i=1}^{min(4,10)} 1/log2(i+1) = 1/log2(2)+1/log2(3)+1/log2(4)+1/log2(5) = 1 + 0.631 + 0.5 + 0.431 = 2.562. Expected DCG ≈ 0.0136 × (avg discount). If a relevant item is uniformly in positions 1-10, avg discount = (1/10)Σ_{i=1}^{10} 1/log2(i+1). Σ = 1+0.631+0.5+0.431+0.387+0.356+0.332+0.315+0.301+0.290 = 4.543, /10 = 0.454. So expected DCG@10 ≈ 0.0136 × 0.454... no wait. Expected DCG = (expected count relevant in top-K) × (average discount) only if the count and positions independent — roughly E[DCG] = Σ_{pos=1}^{10} P(relevant at pos) × discount(pos) = Σ (3.97/2916) × discount(pos) = (3.97/2916) × 4.543 = 0.00136 × 4.543 = 0.00618. nDCG = 0.00618/2.562 = 0.00241 = 0.24%. Matches nDCG@10 random = 0.24! 

And nDCG@5 random: IDCG@5 = 1+0.631+0.5+0.431+0.387 = 2.949. E[DCG@5] = (3.97/2916) × (1+0.631+0.5+0.431+0.387) = 0.00136 × 2.949 = 0.00401. nDCG@5 = 0.00401/2.949 = 0.00136 = 0.14%. Matches nDCG@5 random = 0.16 approximately (close; the small discrepancy is because E[|A|] varies and IDCG uses min(|A|,K)). Good enough — this confirms the random floor is analytically derived.

This is a really clean set of derivations. Let me present the random-floor derivation as a highlight in SOURCE_OPERATORS_AND_EQUATIONS since it's verifiable from the paper's own numbers.

Actually, let me reconsider nDCG@5: I got 0.136% vs reported 0.16%. And nDCG@10 0.24% vs reported 0.24%. The @5 small diff might be from IDCG using actual |A| distribution or ties. Close enough to demonstrate the mechanism.

Hmm, wait. Let me reconsider. For nDCG, IDCG depends on |A| for that query. For queries with |A|=1, IDCG@5 = 1 (only one relevant, ideal places it at rank 1: 1/log2(2)=1). For |A|=4, IDCG@5 = 2.949. Averaging over queries with different |A| complicates it. But the approximation holds reasonably.

Actually there's an even cleaner way to see nDCG random for @K when relevant are sparse: since with high probability a random top-K has 0 or 1 relevant items, and when 1 relevant at position p, DCG = 1/log2(p+1) and IDCG ≥ 1, so nDCG ≈ (1/log2(p+1))/IDCG. This gets complicated. My integral approximation is fine for illustration. I'll present it as approximate.

Let me now also reconsider the HitRate random floor derivation more carefully since it's the cleanest:
- Per query q, |A_q| approved precedents among |G|=2916 gallery.
- Random top-1: P(hit) = |A_q|/|G|.
- Averaged over queries: HR@1 = E[|A_q|]/|G| = 3.97/2916 = 0.00136 = 0.136% ≈ 0.14%. ✓
- Random top-K (sampling without replacement): P(at least one approved in K) = 1 - C(|G|-|A_q|, K)/C(|G|, K). For small |A_q|/|G|, ≈ K|A_q|/|G|. HR@5 ≈ 5×0.136 = 0.68%. ✓ HR@10 ≈ 10×0.136 = 1.36% ≈ 1.35%. ✓

Great, and Recall random:
- R@K = |R_K ∩ A|/|A|. E[|R_K ∩ A|] = K|A|/|G| (hypergeometric mean). So E[R@K] = K/|G|. R@10 = 10/2916 = 0.343% ≈ 0.34. ✓ R@5 = 5/2916 = 0.171 ≈ 0.17. ✓ R@1 = 1/2916 = 0.034 ≈ 0.03. ✓

These are exact (Recall one especially: R@K random = K/|G| exactly, independent of |A|, beautiful).

And MRR random: E[1/rank of first hit]. For rare hits, first hit rank ~ geometric-ish. MRR@10 random ≈ 0.40%. Roughly Σ... I won't over-derive, I'll note it's consistent with the HitRate/rank structure.

OK, I have strong quantitative material. Let me write.

For word count: I need >= 1000 words total. THINK_TRACE >= 400. Let me aim for THINK_TRACE ~500, and each other section ~150-250, total ~1300-1500.

Let me write the sections now. I'll use LaTeX in the equations section. I'll cite [PAGE N] and quote verbatim where relevant.

Let me draft.

Actually, I want to be careful about the tone. The persona is "GSE + GSI Frontier Reasoning Foundry." I'll adopt a rigorous analyst voice. I won't fabricate any "prediction" as fact — the RLVR counterfactuals are explicitly hypothetical/falsifiable scenarios, which is honest.

Let me be careful with the CROSS_LAYER section: "weather veto" — I'll be honest that weather is not a modeled variable; the actual physical confounders are camera viewpoint, zoom, lighting, kit color, and pitch location. I'll present the veto proof as: physical confounals that a robust retrieval system must be invariant to, and show that the benchmark's own qualitative example (Fig 4) demonstrates invariance to camera zoom, while Fig 2 shows that identical biomechanics yield different labels based on pitch location — meaning biomechanics alone cannot determine the label (a "veto" on pure-motion matching).

Let me write it all now. I'll make sure equations are properly formatted and cite pages.

For the "clock" in RECURSIVE_THEORY_OF_MIND — I'll interpret as the temporal/evaluation pressure and habit regression of models (e.g., reverting to visual-appearance matching under distribution shift). And "crisis habit regression" = under the hard distribution, models regress to the easy heuristic (visual similarity / category matching). This is actually well-supported: zero-shot embedders do better than the engineered pipeline on precedents but still near floor; fine-tuning on categories regresses HR@1 downward (the paper notes FT "reduces HR@1 and MRR@10"). That's a concrete habit-regression signature.

Good. Let me write.

I'll keep it substantive and grounded. Let me produce the final answer.

Word count check as I write — I'll ensure sections are substantial.
</NATIVE_REASONING>

<THINK_TRACE>

The paper's central object is a retrieval function that maps a query foul clip to a ranked gallery, and the whole scientific payload lives in the gap between two relevance operators that the authors deliberately keep orthogonal: precedent relevance (human "Similar/Not Similar" judgments) and category relevance (MVFoul Action/Offence/Severity labels). The multi-hop reasoning task is to audit whether the reported numbers actually measure what the abstract claims — that "semantic foul retrieval remains challenging" [PAGE 14] — or whether that conclusion is partly an artifact of the measurement apparatus.

Hop 1: reconstruct the random floor analytically, because every headline number is defined relative to it. The gallery is |G| = 2,916 [PAGE 5, Table 1; PAGE 5 "comprises 2,916 actions"], and the human-verified set is 693 queries with 2,751 approved pairs [PAGE 19, Sec. C], giving mean approved-per-query E[|A|] = 2751/693 = 3.97, i.e. the paper's "about four on average" [PAGE 7]. If retrieval were random, HitRate@1 = E[|A|]/|G| = 3.97/2916 = 0.136% (paper: 0.14), and to first order HitRate@K ≈ K·E[|A|]/|G| gives 0.68 (K=5) and 1.36 (K=10) against reported 0.68 and 1.35. The Recall floor is exact and independent of |A|: E[Recall@K] = K/|G|, so 1/2916=0.034, 5/2916=0.171, 10/2916=0.343 — matching the reported 0.03/0.17/0.34 to the digit. This internal consistency is the first strong signal: the benchmark's "Random" row is not a placeholder, it is the analytic hypergeometric floor, so the contrast between InternVideo2-1B (HR@10 4.62) and floor (1.35) is a genuine 3.42× lift, and the weakest above-floor method (VARS+XVARS, 3.17) is 2.35×, reproducing the "only by 2.3–3.4×" claim [PAGE 11].

Hop 2: interrogate the ceiling. The gold pool is not just incomplete ("only about five of the 2,916 gallery clips were reviewed per query" [PAGE 11]; "at most five candidates are reviewed per query" [PAGE 7]), it is also noisy. Inter-annotator agreement is raw 67.13% with Cohen's κ = 0.238 [PAGE 19, Sec. E], and agreement on accepted precedents (76.46%) far exceeds rejected (45.54%). Inverting κ = (p_o − p_e)/(1 − p_e) with p_o = 0.6713 yields p_e ≈ 0.569, so nearly 57% "agreement" is chance-driven by the majority class. A metric ceiling near ~0.67 raw agreement means a retriever that surfaces a precedent a second qualified referee would reject is nonetheless scored as a miss — so the sub-5% HitRate@10 is a lower bound contaminated by label noise, not a clean measurement of model incompetence.

Hop 3: the gray-zone. The oracle candidate generator (SBERT over referee-written XVARS explanations, filtered by MVFoul attributes [PAGE 18, Sec. B]) determines which pairs ever get judged. This injects a selection bias: the judged pool is enriched for pairs that are already close in SBERT-over-explanation space, so text-mediated and explanation-similar models are structurally advantaged on the very pool used to rank them, while a genuinely novel perceptual match that SBERT would score low is never reviewed and thus never credited. The completeness caveat the authors raise [PAGE 8, PAGE 11] is therefore deeper than "unjudged clips may be valid"; the unjudged region is adversarially aligned with one retrieval family.

Hop 4: reconcile the two evaluations. Category mAP moves exactly as supervision predicts (Qwen3-VL-Emb-2B-FT "improves on its zero-shot counterpart across all nine category metrics" [PAGE 11]; VARS+XVARS "achieving the highest +Severity scores" [PAGE 11]) yet precedent metrics barely move, and fine-tuning actively "reduces HR@1 and MRR@10 relative to its zero-shot initialization" [PAGE 11]. The only coherent explanation is that Action/Offence/Severity span a strictly coarser equivalence relation than precedent relevance: category labels partition clips by form and disciplinary tier, whereas precedent labels additionally require "matching both 'Form' … and 'Substance'" including "pitch location … midfield versus inside the box" [PAGE 19, Sec. D]. Fine-tuning collapses the embedding toward the coarse partition, which raises category mAP while pushing apart clips that differ only in the fine substance axis — hence the HR@1 regression. This is the paper's real theorem, and it is stated most sharply in the ablation: the "Detailed" instruction that literally names action/offence/severity "never outperforms Generic on category mAP" and degrades gold MRR@10 (e.g., Qwen3-VL-Emb-2B 1.52→0.82) [PAGE 13, Table 5].

</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>

Text-mediated score, Eq. (1) [PAGE 9], verbatim structure:

$$\mathrm{Score}(Q,C)=\frac{1}{N}\sum_{i=1}^{N}\frac{\vec v_{q_i}\cdot \vec v_{c_i}}{\lVert \vec v_{q_i}\rVert\,\lVert \vec v_{c_i}\rVert},\qquad N=4.$$

Units: dimensionless cosine similarity in $[-1,1]$, averaged over the four XVARS question fields ("What card…", "Did the defender touch the ball?", "Did the defender intend to play the ball?", "Where was the point of contact?" [PAGE 9]). Breakdown regime: the upstream VARS filter enforces exact Action∧Offence equality [PAGE 8], so Score is undefined (empty candidate set) whenever no gallery clip matches both predicted attributes — realized as "no candidates for 17% of Test queries, which are scored as misses" [PAGE 10]. Fig. 5 [PAGE 14] is the causal instance: "VARS misclassifies an elbowing as a challenge, removing relevant precedents before semantic ranking."

Fine-tuning objective, InfoNCE [PAGE 18]:

$$\ell_i^{(t)}=-\log\frac{\sum_{j\neq i,\,j\in P_i^{(t)}}\exp\!\big(q_i^\top g_j/\tau\big)}{\sum_{j\in C_i^{(t)}}\exp\!\big(q_i^\top g_j/\tau\big)},\quad \lVert q_i\rVert=\lVert g_j\rVert=1,\ \tau=0.05,$$

symmetrized over query→gallery and gallery→query, then averaged equally over levels $t\in\{\text{Action},\text{+Offence},\text{+Severity}\}$. Assumptions/units: embeddings are $\ell_2$-normalized (dimensionless), $\tau=0.05$ (dimensionless inverse-temperature), batch of 12 = 6 label groups × 2 clips, so at the strictest level $|P_i^{(t)}|=1$ (single guaranteed positive). Singularity/breakdown: as $|P_i^{(t)}|\to 1$ the numerator has one term and the gradient variance is maximal — the strict-severity signal is estimated from one positive per anchor, which structurally under-weights the very axis (substance) that precedent relevance needs. Hyperparameters: LoRA rank 16, α = 16, dropout 0.10, AdamW lr $10^{-5}$, weight decay 0.05, 10 epochs, cosine schedule with 10% warmup, grad-accum 8, clip-norm 1.0, seed 42 [PAGE 18].

Metrics [PAGE 7–8], with random-floor derivations (units: probability/percent):
- $\mathrm{Recall}@K=\dfrac{|R_K\cap A|}{|A|}$; random floor $\mathbb E=K/|G|$ → 0.034/0.171/0.343% (matches 0.03/0.17/0.34).
- $\mathrm{HitRate}@K=\Pr[R_K\cap A\neq\varnothing]$; random $\approx 1-(1-|A|/|G|)^K$ → 0.14/0.68/1.35%.
- $\mathrm{nDCG}@K=\mathrm{DCG}@K/\mathrm{IDCG}@K$, $\mathrm{DCG}@K=\sum_{i=1}^{K}\frac{2^{rel_i}-1}{\log_2(i+1)}$, binary $rel_i$; sparse-pool random ≈ 0.14% (@5), 0.24% (@10).
- $\mathrm{MRR}@10=\frac{1}{|Q|}\sum_q \frac{1}{\mathrm{rank}_q}$; all Table 3 values are percentages, so InternVideo2-1B MRR@10 = 1.65% = 0.0165 vs random 0.40%.
- Category relevance: mAP@K, with random floor inflated by class imbalance — "standing tackling is ∼44% of the gallery" [PAGE 7] drives Action mAP@1 random to 24.9% [PAGE 12, Table 4].

Annotation overhead reduction [PAGE 18]: 3,518 judged pairs against 693×2,916 = 2.02M candidate pairs → reduction $\approx 1-3518/2{,}020{,}788 = 99.83\%$, matching the stated 99.83%.

</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>

The benchmark is the fourth link in a SoccerNet chain that progressively moves from perception to judgment. Lineage: SoccerNet action spotting [ref 6, PAGE 15] → SoccerNet-v2 holistic understanding [ref 5] → tracking/re-ID [refs 2–4] → game-state reconstruction [ref 19] → and the refereeing branch, VARS/MVFoul [ref 7] and X-VARS [ref 8], which the authors "repurpose … for retrieval" [PAGE 3]. The retrieval lineage it deliberately breaks from is older and visually anchored: near-duplicate (CC_WEB_VIDEO [23], UQ_VIDEO [20], SVD [9]), copy detection (VCDB [10], TRECVID-CBCD [13]), and event retrieval (FIVR-200K [12], EVVE [18]), all of which "tie relevance to visual or shared-event overlap" [PAGE 5]. The immediate parent is ConViS-Bench [15], "closest to our setting," which "ranks videos by shared semantic concepts" but "does not target soccer" [PAGE 4].

The multi-week trap embedded here is a construct-validity trap that will recur in any derivative work: because the source datasets "contain no similarity links between actions" [PAGE 6], the authors had to synthesize relevance, and every shortcut in that synthesis (SBERT filtering, five-candidate review, single expert annotator with "18 years of soccer experience," 50 hours [PAGE 19]) becomes baked into "ground truth." A later team that trains on these labels and reports high HitRate risks mistaking agreement-with-the-oracle-generator for semantic competence — the exact circularity the incomplete-pool caveat [PAGE 8] only partially flags. The κ = 0.238 result [PAGE 19] is the load-bearing warning: the historical lineage from deterministic copy-detection (where labels are unambiguous) to subjective jurisprudence means the evaluation floor is now a human-agreement ceiling, not a pixel-identity oracle.

</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>

Model the retriever as an agent whose default policy under distribution shift is to regress to the cheapest correlated cue — visual appearance and coarse category — rather than the expensive target (form∧substance jurisprudence). The evidence for this "crisis habit regression" is direct. Zero-shot embedders outperform the engineered pipeline on precedents, but the engineered pipeline's collapse is diagnostic: it "leads on no metric" and at rank 1 "sits exactly on the random floor (HR@1 0.14%)" [PAGE 9], because its hard categorical filter (a habit inherited from classification) deletes valid cross-category precedents before ranking. Under the harder precedent objective, the text-mediated agent regresses to its trained habit (exact category match) and fails.

The counter-trap — task-specific fine-tuning — is designed to break the appearance habit, and it partially works on the proxy objective (all nine category metrics improve [PAGE 11]) but regresses on the true objective (HR@1 and MRR@10 fall [PAGE 11]). This is the theory-of-mind crux: the supervisor (MVFoul labels) and the human referees have different mental models of "similar." Optimizing to the supervisor's model actively harms alignment with the human model on the earliest, most-inspected rank. The ablation confirms the human model is not verbally specifiable either: the "Detailed" instruction naming action/offence/severity degrades gold MRR@10 (Qwen3-VL-Emb-2B 1.52→0.82 [PAGE 13]), so the residual signal referees use (intent, point of contact, tactical context) is tacit, not expressible as an attribute list. The "clock" — the practical fact that "a user actually inspects" only shallow cutoffs (HR@5, HR@10) [PAGE 9] — punishes exactly the regime where all methods are weakest: 2.60% and 4.62% for the best model. Any agent optimizing this benchmark under time pressure is pushed toward shallow, high-precision category matching, which is the habit the task was built to defeat.

</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>

Physical/biomechanical veto proof. Claim to test: pure motion/biomechanics cannot determine the precedent label, so any retriever keyed on mechanics is vetoed on a subset of the data.

Proof (by the paper's own constructions): Fig. 2 [PAGE 5] presents "Two fouls with identical mechanics but vastly different sanctions depending on pitch location and context (penalty area vs. midfield)." Formally, let mechanics $m$ be the biomechanical state and $\lambda$ the disciplinary label. Fig. 2 exhibits $m_1=m_2$ (identical tackle) but $\lambda_1\neq\lambda_2$ (DOGSO penalty vs. non-scoring free kick). Therefore the label map $\lambda=f(m)$ is not well-defined: $f$ is multivalued over the mechanics fiber, and any embedding that is a function of mechanics alone, $e=g(m)$, must assign $d(e_1,e_2)=0$ while the target requires them separated. The MVFoul category labels encode exactly the coarse part of $f$ and, per the results, "do not fully determine human judgments of precedent relevance" [PAGE 11]. QED: mechanics-only retrieval is vetoed on the DOGSO/location subset.

Physical-acquisition invariance layer. The successful retrieval in Fig. 4 [PAGE 13] is a verified precedent pair "despite substantial differences in camera angle, lighting, and team kits" and "differences in camera zoom," establishing that a valid retriever must be invariant to the acquisition nuisance group (viewpoint, zoom, illumination, kit color). Weather is not a modeled variable in this dataset — I will not invent one — but it belongs to the same uncontrolled acquisition class as lighting; the correct statement is that the benchmark does not control environmental nuisance and implicitly requires invariance to it, evidenced by cross-view/cross-zoom positives (Fig. 4) and the "elbowing … filmed from opposite ends of the pitch" positive [PAGE 5]. Any pipeline whose score is not invariant under this group (e.g., appearance-keyed embeddings) is vetoed on cross-view precedent pairs. The category metrics partially mask this because same-match/same-camera near-duplicates inflate coarse similarity, but the human pool strips that crutch by construction.

</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>

Framed as Reinforcement-Learning-from-Verifiable-Relevance scenarios: each is a falsifiable claim about how the benchmark's verifiable reward would mislead an optimizer, with a concrete prediction.

Veto 1 — Reward hacking via the oracle generator. Because the judged pool is SBERT-over-XVARS-enriched [PAGE 18], a policy that maximizes similarity in that exact space is over-rewarded. Prediction: a retriever using SBERT-over-generated-XVARS-explanation embeddings, scored on this human-verified pool, will exceed InternVideo2-1B's HR@10 (4.62%) even though it would underperform on a densely annotated pool. Falsification test: re-rank the same queries against a fresh, generator-independent candidate sample; the advantage should shrink or vanish.

Veto 2 — Category-supervision negative transfer (verified already, predict the dose-response). The FT model reduces HR@1 (1.01% zero-shot → 0.58% FT) and MRR@10 (1.52 → 1.24) while raising category mAP [PAGE 10–12]. Prediction: increasing category-supervision weight monotonically lowers shallow precedent metrics; specifically, a variant trained only on Action+Offence+Severity (dropping the coarse equal-weight averaging) will show the steepest HR@1 drop and the largest +Severity mAP gain. This is directly checkable against the existing three-level averaging scheme [PAGE 18].

Veto 3 — Class-imbalance mAP illusion. With standing tackling ~44% of the gallery [PAGE 7], Action mAP@1 random is already 24.9% [PAGE 12]. Prediction: a trivial majority-class ranker scores Action mAP@1 near the mid-20s while its precedent HR@10 stays at the ~1.35% floor; therefore any leaderboard that reports only category mAP will rank a near-constant baseline as "competitive," and the balanced subset "+Severity" (2,561 clips, 650 queries [PAGE 12]) will show the tightest separation between real and trivial rankers. Verifiable by evaluating a constant-order baseline on both tables.

Cross-cutting prediction for all three: because the human pool's ceiling is bounded by inter-annotator agreement (κ = 0.238 [PAGE 19]), no retriever on the current benchmark can verifiably exceed roughly the accepted-precedent agreement band (~76% on accepted items) in a noise-corrected sense; reported sub-5% figures are lower bounds, and denser multi-referee annotation is the identified de-bias lever [PAGE 14].

Note: I kept this to the paper's own quantitative claims and derived floors; I did not introduce any wagering constructs, and every equation above is either quoted from the source or derived from its reported counts.