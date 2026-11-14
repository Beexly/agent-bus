---
source: "2026 - Longitudinal Bayesian networks for assessing team performance in the National Basketball Association - Calvo et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/preprints/arXiv/2026"
pages: 29
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5333
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about Longitudinal Bayesian networks for assessing team performance in the NBA (Calvo et al., 2026). I need to produce a response with specific XML sections, each meeting certain criteria:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. Must state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important constraints:
- No betting lines whatsoever.
- Formal LaTeX equations only, no invented toy ratios.
- Cite page markers from the provided source text. The source text has page markers like [PAGE N] implicitly? Actually the text shows page numbers at bottom: 1, 2, 3... up to 24. I should cite as [PAGE 7], [PAGE 8], etc. based on the page numbers visible in the text.
- Need verbatim quotes where appropriate.
- Need >=1000 words total, with THINK_TRACE >=400 words alone.

Let me carefully map page numbers from the source text:
- Page 1: Title, abstract
- Page 2: Introduction continued
- Page 3: Section 2, Table 1
- Page 4: Section 3, equations (1), (2), (3)
- Page 5: Section 3 continued
- Page 6: Section 4 start
- Page 7: Section 4.1, equation (4)
- Page 8: Section 4.1.2, equations (5), (6)
- Page 9: Equation (7), (8), (9), (10)
- Page 10: Equation continued, (11), (12)
- Page 11: Section 4.1.3 priors, Section 4.2 start
- Page 12: Figure 2, equation (13), dynamic structure
- Page 13: Equation (14), Section 4.3 hidden Markov
- Page 14: Equation (15), transition matrix, hidden Markov LBN structure
- Page 15: Section 5 start, NIMBLE, MCMC details
- Page 16: Section 5.1 model selection, Table 2 WAIC values
- Page 17: Section 5.2 estimation, Table 3, Table 4
- Page 18: Table 5, Table 6
- Page 19: Table 7, Section 5.3 prediction, equation (16)
- Page 20: Figures 5, 6
- Page 21: Section 6 conclusions
- Page 22: Acknowledgements, References start
- Page 23: References continued
- Page 24: References end

Wait, looking at the text, page numbers appear at bottom of each page section. Let me trace:
- After title/abstract: "1" then page break? Actually the first page shows "1" at bottom after abstract? Let me look carefully.

The text has:
- Title page stuff, then "1" centered? Actually it shows "1" then page break marker? Let's read:
After abstract: "1" then "" (form feed). So page 1 is title+abstract.
- Page 2: Introduction starts. Bottom shows "2".
- Page 3: Section 2 Philadelphia 76ers, Table 1. Bottom shows "3".
- Page 4: Section 3 Bayesian framework, eq (1), (2). Bottom shows "4".
- Page 5: Eq (3), predictive. Bottom shows "5".
- Page 6: Section 4 start, 4.1 static LBN. Bottom shows "6".
- Page 7: 4.1.1 Structure, eq (4). Bottom shows "7".
- Page 8: 4.1.2 Conditional distributions, Games played eq (5), Minutes played eq (6). Bottom shows "8".
- Page 9: Fouls drawn eq (7),(8), Shots attempted eq (9),(10). Bottom shows "9".
- Page 10: Shots attempted continued, eq (11),(12). Bottom shows "10".
- Page 11: 4.1.3 Prior, 4.2 Dynamic LBN start. Bottom shows "11".
- Page 12: Figure 2, eq (13), dynamic structure. Bottom shows "12".
- Page 13: Eq (14), Section 4.3 Hidden Markov. Bottom shows "13".
- Page 14: Eq (15), transition matrix, Figure 3, hot/cold state binomials. Bottom shows "14".
- Page 15: Section 5 Philadelphia 76ers Player Performance, NIMBLE details. Bottom shows "15".
- Page 16: Section 5.1 Model selection, WAIC, Table 2. Bottom shows "16".
- Page 17: Section 5.2 Estimation, Table 3, Table 4. Bottom shows "17".
- Page 18: Table 5, Table 6. Bottom shows "18".
- Page 19: Table 7, Section 5.3 Prediction, eq (16). Bottom shows "19".
- Page 20: Figure 5, Figure 6. Bottom shows "20".
- Page 21: Section 6 Conclusions. Bottom shows "21".
- Page 22: Acknowledgements, References. Bottom shows "22".
- Page 23: References continued. Bottom shows "23".
- Page 24: References end. Bottom shows "24".

Wait, the source text shows page numbers but I need to be careful. Let me re-examine the text provided:

After abstract: "1" then form feed.
Then Introduction page has "2" at bottom? Actually it shows:
"                                                                                       1
                                           1
                                             Department..."
Hmm, there's a "1" then page break, then title again? Let me look at the raw text:

"                                                                                       1
                                           1
                                             Department of Statistics..."

Actually it seems page 1 is title/abstract, then page 2 starts with "1" maybe? Wait, there's a "1" before "Department..." That might be a page number. Let me trace more carefully.

The text begins:
"# Longitudinal Bayesian networks..."
Then authors, date, arXiv.
Abstract.
Then "                                                                                       1
                                           1
                                             Department..."

So there's a "1" (page number) then form feed, then "1" again? That might be the page number for the next page. Actually the first "1" might be page number of abstract page. Then next page starts with "1" (maybe section number?) No, looking at it:

"                                                                                       1
                                           1
                                             Department of Statistics and Operations Research..."

It seems like page 1 ends with page number "1". Then page 2 begins with... wait, there's another "1" right after the form feed? That might be a stray. Let me not overthink. The bottom of pages show numbers.

Actually looking at:
"                                                                                       1
                                           1
                                             Department..."

This is confusing. Let me look at where numbers appear centered at bottom:
- After abstract: "                                                                                       1" then form feed. So page 1.
- Then "                                           1" appears? That might be page 2 number but it's "1"? Or maybe it's section number? Wait, looking at later pages:

Page with Section 3:
"                                                                                                         4
"
So page 4 ends with 4.

Page with Section 4:
"                                                                                       6
"
So page 6 ends with 6.

Page with Section 4.1:
"                                                                                                                      7
"
Page 7 ends with 7.

So the pattern is page number at bottom right. The first "1" after abstract is page 1. Then there's another "1" that might be page 2? Actually looking at introduction page:
"                                                                                       1
                                           1
                                             Department..."
Wait, maybe the first "1" is page number of abstract page (page 1). Then after form feed, "                                           1" could be page number of page 2 but it says 1? That seems like a typo in the extraction or maybe page 1 continued? Actually, looking at the introduction text, it starts with "The analysis of team and player performance..." and at bottom it shows "2"? Let me check:

In the provided text after introduction paragraph:
"...since then, BN have become an indispensable tool in mastering AI in uncertain environments (Wiegerinck et al., 2013).
    Although BNs have attracted increasing attention in sports analytics, the applied literature remains sparse. Among the existing contributions, a copula-based Bayesian network jointly models multivariate indicators of players’ performances, capturing non-linear dependencies for interpretable probabilistic comparison of profiles (D’Urso et al., 2023). From a team perspective, structure learning has been used to discriminate ‘winning’ from ‘losing’ team formations and to identify influential variables along the path to victory (Zhang et al., 2020). Regarding temporal scoring patterns, the hot-hand phenomenon has been examined with hidden Markov models, which are particular instances of dynamic BNs, with latent temporal states and observable nodes, thus enabling inference on state-dependent efficiencies and streakiness over time (Sun, 2004; Sandri et al., 2020; Ötting and Andreas, 2022; Calvo et al., 2025). Applications of BNs can also be found in the prediction of the outcomes of football matches (Constantinou et al., 2012; Owramipur et al., 2013; Razali et al., 2017).
    In this context, this article focuses on the analysis of longitudinal basketball data using BNs. We present three foundational models for evaluating basket- ball player performance over the course of a season through the joint analysis of minutes played, fouls drawn, and shots attempted and made. Utilising lon- gitudinal Bayesian networks, specifically static, dynamic, and dynamic with hidden states, these models are examined through a Bayesian inferential and predictive framework. We illustrate our methodology using a case study of the Philadelphia 76ers (NBA, 2005–06 season), though the modelling is broadly ap- plicable to any team, league, or season. One of the objectives of the study is to predict the number of points scored by each player in each game. Both model estimation and prediction are carried out within a fully Bayesian framework.
    The remainder of the paper is organised as follows. Section 2 outlines the performance data for the Philadelphia 76ers during the 2005–2006 NBA season, which serves as the empirical basis for the analysis conducted in Section 5. Sec- tion 3 presents the general Bayesian framework for estimation and prediction in longitudinal Bayesian networks. Section 4 describes the three specific modelling approaches proposed for analysing basketball data. Section 5 reports the results obtained from applying the three models to the Philadelphia 76ers 2005-2006 NBA season. Finally, Section 6 discusses the main findings and limitations of the study, presents some conclusions, and outlines directions for future research.


                                       2
                                           2
                                             Department..."

Ah! So page 2 ends with "2", then page 3 starts with "2"? Wait, the text shows "                                       2" then form feed, then "                                           2" then Department... Actually that seems like page number 2 at bottom, then next page starts with page number 2 again? No, looking carefully:

After introduction text: "                                       2
                                           2
                                             The Philadelphia 76ers..."

Wait, "The Philadelphia 76ers" is Section 2. So page 2 is end of introduction, page 3 is Section 2. The "                                           2" after form feed might be the page number at top? Or maybe it's just a stray. Actually the page numbers seem to be at bottom right before form feed. Let me map based on content:

Page 1: Title, abstract. Ends with "1".
Page 2: Introduction. Ends with "2".
Page 3: Section 2 (Philadelphia 76ers), Table 1. Ends with "3".
Page 4: Section 3 (Bayesian framework), eq (1),(2). Ends with "4".
Page 5: Eq (3), posterior predictive. Ends with "5".
Page 6: Section 4 start, 4.1 static LBN. Ends with "6".
Page 7: 4.1.1 Structure, eq (4). Ends with "7".
Page 8: 4.1.2 Conditional distributions, Games played eq (5), Minutes played eq (6). Ends with "8".
Page 9: Fouls drawn eq (7),(8), Shots attempted eq (9),(10). Ends with "9".
Page 10: Shots attempted continued, eq (11),(12). Ends with "10".
Page 11: 4.1.3 Prior, 4.2 Dynamic LBN start. Ends with "11".
Page 12: Figure 2, eq (13), dynamic structure. Ends with "12".
Page 13: Eq (14), Section 4.3 Hidden Markov. Ends with "13".
Page 14: Eq (15), transition matrix, Figure 3, hidden Markov binomials. Ends with "14".
Page 15: Section 5 Philadelphia 76ers Player Performance, NIMBLE, MCMC. Ends with "15".
Page 16: Section 5.1 Model selection, WAIC, Table 2. Ends with "16".
Page 17: Section 5.2 Estimation, Table 3, Table 4. Ends with "17".
Page 18: Table 5, Table 6. Ends with "18".
Page 19: Table 7, Section 5.3 Prediction, eq (16). Ends with "19".
Page 20: Figure 5, Figure 6. Ends with "20".
Page 21: Section 6 Conclusions. Ends with "21".
Page 22: Acknowledgements, References start. Ends with "22".
Page 23: References continued. Ends with "23".
Page 24: References end. Ends with "24".

Wait, looking at the text, after Section 4.1.3 Prior, it says "                                           11
                                           4.2    A dynamic LBN". So page 11 ends with 11.

Then "                                           12
" after dynamic structure eq? Actually:
"                                                      12
                                           4.3     A hidden Markov LBN"
So page 12 ends with 12.

Then "                                                      13
                                           [transition matrix]..." Page 13 ends with 13.

Then "                                                      14
                                           [Figure 3...]" Page 14 ends with 14.

Then "                                                      15
                                           [Section 5...]" Page 15 ends with 15.

Then "                                                      16
                                           [Table 2...]" Page 16 ends with 16.

Then "                                                      17
                                           [Table 3...]" Page 17 ends with 17.

Then "                                                      18
                                           [Table 6...]" Page 18 ends with 18.

Then "                                                      19
                                           [Table 7... Section 5.3... eq (16)]" Page 19 ends with 19.

Then "                                                      20
                                           [Figure 5, Figure 6]" Page 20 ends with 20.

Then "                                                      21
                                           [Section 6 Conclusions]" Page 21 ends with 21.

Then "                                                      22
                                           [Acknowledgements, References]" Page 22 ends with 22.

Then "                                                      23
                                           [References continued]" Page 23 ends with 23.

Then "                                                      24
                                           [References end]" Page 24 ends with 24.

OK, so I have page mapping. I need to cite exact [PAGE N] markers.

Now I need to write the response with 6 XML sections. Let me plan content.

**THINK_TRACE (>=400 words):** Deep multi-hop derivation & gray-zone audit.
- Derive the joint distribution factorization from eq (4) on page 7.
- Trace the dynamic extension from static to dynamic via autoregressive minutes played eq (13)-(14) on pages 12-13.
- Trace the hidden Markov layer from eq (15) on page 14 to shot success probabilities.
- Audit gray zones: zero-inflated Poisson assumptions, ZIP breakdown at zero minutes/participation, identifiability constraint βC0k < βH0k on page 14, label switching, prior sensitivity (uniform 0-100 on page 11), MCMC convergence with 1M iterations burn-in 500k thinning 500 on page 15.
- Gray zone: aggregation vs player-game level (page 3), balanced data assumption (page 5), home effect credibility intervals crossing zero (page 16).
- Must be >=400 words.

**SOURCE_OPERATORS_AND_EQUATIONS:** Formal LaTeX, units, page citations, breakdown.
- List equations with LaTeX: (1) joint density p(y,z,ϕ,θ) = p(y,z|ϕ,θ)p(ϕ|θ)π(θ) [PAGE 4]
- (2) factorization product [PAGE 5]
- (3) posterior π(ϕ,θ|D) ∝ L(ϕ,θ)p(ϕ|θ)π(θ) [PAGE 5]
- (4) static LBN joint factorization [PAGE 7]
- (5) participation Bernoulli [PAGE 8]
- (6) minutes ZIP conditional [PAGE 8]
- (7) ZIP for minutes [PAGE 9]
- (8) fouls ZIP [PAGE 9]
- (9) shots attempted factorization [PAGE 10]
- (10) log mean for FT attempts [PAGE 10]
- (11) shots scored binomial factorization [PAGE 10]
- (12) logit for made shots [PAGE 10]
- (13) dynamic minutes conditional [PAGE 12]
- (14) log-linear autoregressive mean [PAGE 13]
- (15) transition matrix Ω [PAGE 14]
- (16) posterior predictive distribution [PAGE 19]
- WAIC comparison Table 2 [PAGE 16]
- Units: minutes (continuous count via Poisson), counts dimensionless, probabilities [0,1], log-odds dimensionless, WAIC dimensionless information criterion.
- Breakdown regimes: ZIP degenerates when participation indicator Y^(A)=0 forces minutes and fouls to zero (structural zero, not sampling zero); dynamic model requires y_{i,j-1}>0 for log(1+y) defined (always defined since y>=0, log(1+0)=0); hidden Markov identifiability requires βC0k < βH0k to avoid label switching [PAGE 14]; posterior predictive integral (16) is analytically intractable requiring MCMC [PAGE 15].

**RETROCAUSAL_GENEALOGY:** Historical/scientific lineage & multi-week traps.
- Lineage: Pearl (1988) [PAGE 2], Pearl & Russell (1995) [PAGE 2], Ghahramani (1997) DBNs [PAGE 2], Kulkarni (2011) HMM [PAGE 2], Fokianos & Tjøstheim (2011) log-linear Poisson autoregression [PAGE 13], Lambert (1992) ZIP [PAGE 9], Watanabe (2010) WAIC [PAGE 16], Calvo et al. (2025) hot hand HMM [PAGE 13].
- Multi-week traps: season-long temporal dependence assumes stationarity across 82 games; player fatigue/injury not modeled; aggregation of 2005-06 season to player-game level ignores within-game dynamics; home indicator effect weak/uncertain (credible intervals include zero) [PAGE 16]; autoregressive coefficient small but positive [PAGE 18]; hot hand latent state unobserved and may capture referee or opponent effects rather than internal streakiness.

**RECURSIVE_THEORY_OF_MIND:** Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: When star players (Iverson) score <10 points, model infers likely non-participation or few minutes [PAGE 20]. This is a recursive inference: low points → low minutes → low participation probability.
- Counter-trap: Korver can score <10 without low minutes (role player efficiency variance), so the same observation yields different posterior over minutes [PAGE 20]. The model must invert the generative direction (points → minutes) using Bayes rule.
- Clock: Longitudinal index j=1..J with first-order Markov assumption; the "clock" is game index, not continuous time. Autoregressive term βM log(1+y_{i,j-1}) [PAGE 13] creates path dependence. Breakdown if games are irregularly spaced or rest days intervene (not modeled).

**CROSS_LAYER_VETO_ADJUDICATION:** Physical/biomechanical/weather veto proof.
- Physical layer: Minutes played are bounded [0,48] regulation time (plus overtime), but ZIP Poisson allows unbounded counts → physical veto at >48 min unless overtime modeled (not in paper) [PAGE 9].
- Biomechanical layer: Fouls drawn and shot attempts depend on minutes played; no explicit fatigue or load-management node; injury absence is only via participation indicator [PAGE 8-9].
- Weather: Indoor NBA games, no weather covariate; home indicator IH(j) captures venue but not climate [PAGE 10].
- Veto proof: The model assumes conditional independence given minutes and participation; if a player is rested (load management), participation indicator is exogenous and not predicted by prior performance, violating the autoregressive minutes structure [PAGE 12-13].

**RLVR_COUNTERFACTUAL_VETOES:** 3 verifiable RLVR veto scenarios + predictions.
- Veto 1: Structural zero enforcement. If Y^(A)_{ij}=0, then Y^(M), Y^(F), Y^(T), Y^(C) all must be exactly 0. Veto scenario: model predicts nonzero minutes for a recorded DNP (Did Not Play). Prediction: posterior predictive probability of Y^(M)>0 given Y^(A)=0 should be exactly 0 under ZIP; any MCMC sample violating this indicates sampler bug.
- Veto 2: Autoregressive positivity. βM posterior 95% CI entirely positive (0.076, 0.119) [PAGE 18]. Veto scenario: shuffle game order randomly, destroying temporal sequence. Prediction: dynamic LBN WAIC should degrade or βM posterior should collapse toward 0; if not, temporal structure is spurious.
- Veto 3: Hot-state identifiability constraint. Constraint βC0k < βH0k [PAGE 14]. Veto scenario: remove constraint and allow label switching. Prediction: posterior becomes bimodal in (βC0k, βH0k) space with two symmetric modes; WAIC should not improve, showing the constraint is necessary for identifiability, not predictive gain.

Need to ensure total words >= 1000. THINK_TRACE alone >=400. Others can be substantial too.

No betting lines. No toy equations.

Let me draft carefully, ensuring page citations and verbatim quotes.

Verbatim quotes to use:
- Page 7: "The DAG for a player i that participates in match j (i.e. Yij^(A) = 1) associated with this LBN is shown in Figure (1)."
- Page 9: "We assume a conditional zero-inflated Poisson model (Lambert, 1992) (ZIP)"
- Page 13: "Now µ0^(M) also represents an overall mean..."
- Page 14: "It is worth noting that the restriction βC0k < βH0k is imposed, ensuring that the team’s overall success probability is always higher in the hot state. Moreover, this constraint ensures that we avoid the identifiability problem caused by label switching, which is inherent in models with latent variables."
- Page 16: "Based on this criterion, the dynamic LBN is the preferred model, as it attains a lower WAIC value than the remaining alternatives."
- Page 18: "the autoregressive coefficient responsible for turning this LBN into a dynamic LBN takes relatively small values. However, the 95% credible interval of the approximated posterior distribution is entirely positive."
- Page 20: "if Allen Iverson scores fewer than 10 points in a game, this is likely because he did not play or played very few minutes. This does not occur with Kyle Korver"

Need to be careful with LaTeX formatting inside XML. It should be fine.

Let me write the response now. I'll aim for around 1400-1600 words total to be safe.

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

Check word counts mentally:
- THINK_TRACE: need 400+. I'll write ~500.
- SOURCE_OPERATORS: ~350.
- RETROCAUSAL: ~250.
- RECURSIVE: ~250.
- CROSS_LAYER: ~200.
- RLVR: ~250.
Total ~1800. Good.

Let's write.

Important: Use exact page markers like [PAGE 7]. Use verbatim quotes with quotation marks.

Make sure no mention of odds, spreads, moneylines, totals (in betting context). The paper talks about "total points scored" but that's not a betting line, it's a prediction variable. I should avoid phrasing that sounds like betting. I can mention "total points" as a variable but not "over/under" or "totals market". The invariant says "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." So I should avoid the word "totals" if it could be interpreted as betting totals. I'll say "aggregate points" or "sum of points" instead.

Also "zero toy equations" means don't invent fake ratios like Force/Fatigue. All equations must be from the paper or formally derived from it.

Let's draft.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation begins with the joint density on [PAGE 4]: p(y, z, ϕ, θ) = p(y, z | ϕ, θ) p(ϕ | θ) π(θ). This decomposes the longitudinal Bayesian network (LBN) into a sampling model for observables and latents, a prior on random effects, and a hyperprior. The global semantics property then yields the DAG factorization on [PAGE 5]: p(y,z | ϕ, θ) = ∏ᵢ∏ᵥ∏𝓌 p(yⱼ⁽ᵛ⁾ | pa(yⱼ⁽ᵛ⁾), ϕ, θ) p(zⱼ⁽ʷ⁾ | pa(zⱼ⁽ʷ⁾), ϕ, θ). Any parent node indexed at j−1, j−2, …, 1 converts the static BN into a dynamic BN [PAGE 5].

Tracing the static basketball specification on [PAGE 7], the joint factorization in expression (4) orders the generative chain as participation y⁽ᴬ⁾ → minutes y⁽ᴹ⁾ → fouls y⁽ᶠ⁾ → attempts y⁽ᵀ⁾ → made baskets y⁽ᶜ⁾. The participation node yᵢⱼ⁽ᴬ⁾ is Bernoulli with player-specific probability pᵢ [PAGE 8]. Minutes yᵢⱼ⁽ᴹ⁾ follow a zero-inflated Poisson (ZIP): structurally zero when yᵢⱼ⁽ᴬ⁾ = 0, and Po(μᵢ⁽ᴹ⁾) with log(μᵢ⁽ᴹ⁾) = μ₀⁽ᴹ⁾ + bᵢ⁽ᴹ⁾ when played [PAGE 8–9]. Fouls inherit the same ZIP logic conditional on minutes [PAGE 9]. Shot attempts decompose by category k∈{1,2,3}; free throws depend on fouls y⁽ᶠ⁾, while two- and three-point attempts depend on minutes y⁽ᴹ⁾ [PAGE 10]. Made baskets are binomial yᵢⱼₖ⁽ᶜ⁾ | yᵢⱼₖ⁽ᵀ⁾ ~ Bi(yᵢⱼₖ⁽ᵀ⁾, pᵢⱼₖ⁽ᶜ⁾) with logit link [PAGE 10].

The dynamic extension inserts autoregression only into minutes: for j>1, log(μᵢⱼ⁽ᴹ⁾) = μ₀⁽ᴹ⁾⁽⁺⁾ + βᴹ⁽⁺⁾ log(1 + yᵢ,ⱼ₋₁⁽ᴹ⁾) + bᵢ⁽ᴹ⁾⁽⁺⁾ [PAGE 13]. Because log(1+0)=0, a prior zero-minute game contributes a null autoregressive impulse, but the chain requires ordered game indices j=1,…,J. The hidden Markov alternative adds a latent team state Zⱼ ∈ {C,H} with transition matrix Ω on [PAGE 14], and shifts the binomial success logits to state-specific intercepts βC0ₖ vs βH0ₖ under the identifiability constraint βC0ₖ < βH0ₖ to suppress label switching [PAGE 14].

Gray-zone audit: (1) The data are aggregated season totals in Table 1 [PAGE 3] but modeled at player-game level; the paper does not document the disaggregation mechanism, creating a temporal alignment risk. (2) “Balanced data” is assumed on [PAGE 5], yet the 76ers roster shows highly uneven participation (e.g., Lee Nailon mean play probability 0.273 vs Andre Iguodala 0.988 on [PAGE 19]), threatening the balanced-design likelihood. (3) The ZIP creates structural zeros: y⁽ᴹ⁾=0 whenever y⁽ᴬ⁾=0, so the model cannot separate “did not play” from “played zero minutes,” a distinction that matters for load-management inference. (4) The home-effect coefficients βH₁, βH₂, βH₃ have 95% credible intervals that straddle zero on [PAGE 16–17], so venue dependence is weakly identified. (5) MCMC used 1,000,000 iterations, 500,000 burn-in, thinning by 500 on [PAGE 15]; with 13 players × 82 games × multiple nodes, effective sample sizes for hyperparameters (σT3 = 2.194, Sd 1.003 on [PAGE 18]) may remain low despite long chains. (6) The dynamic autoregressive coefficient is small (βM⁽⁺⁾ mean 0.097, 95% CI (0.076, 0.119) on [PAGE 18]) but strictly positive, implying weak carryover of minutes from game j−1 to j; this is consistent with coach rotation habits rather than physiological fatigue, which is not modeled.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and equations extracted from the manuscript, with SI/information units and breakdown regimes:

[PAGE 4] Joint density: p(y, z, ϕ, θ) = p(y, z | ϕ, θ) p(ϕ | θ) π(θ). Units: all terms are probability densities; θ and ϕ are parameter/random-effect vectors.

[PAGE 5] DAG factorization: p(y,z | ϕ, θ) = ∏ⱼ₌₁ᴶ ∏ᵥ₌₁ⱽ ∏𝓌₌₁ᵂ p(yⱼ⁽ᵛ⁾ | pa(yⱼ⁽ᵛ⁾), ϕ, θ) p(zⱼ⁽ʷ⁾ | pa(zⱼ⁽ʷ⁾), ϕ, θ). Units: dimensionless conditional probabilities.

[PAGE 5] Posterior: π(ϕ, θ | D) ∝ L(ϕ, θ) p(ϕ | θ) π(θ). L is the likelihood over balanced player-game observations D = {yᵢⱼ⁽ᵛ⁾}.

[PAGE 7] Static LBN joint (expression 4): p(y⁽ᶜ⁾, y⁽ᵀ⁾, y⁽ᶠ⁾, y⁽ᴹ⁾, y⁽ᴬ⁾, θ, ϕ) = p(y⁽ᶜ⁾ | y⁽ᵀ⁾, θ, ϕ) p(y⁽ᵀ⁾ | y⁽ᶠ⁾, y⁽ᴹ⁾, y⁽ᴬ⁾, θ, ϕ) p(y⁽ᶠ⁾ | y⁽ᴹ⁾, y⁽ᴬ⁾, θ, ϕ) p(y⁽ᴹ⁾ | y⁽ᴬ⁾, θ, ϕ) p(y⁽ᴬ⁾ | θ, ϕ) p(ϕ | θ) π(θ).

[PAGE 8–9] Participation: yᵢⱼ⁽ᴬ⁾ ~ Bern(pᵢ), pᵢ ∈ [0,1]. Minutes ZIP: (yᵢⱼ⁽ᴹ⁾ | yᵢⱼ⁽ᴬ⁾=0) ≡ 0; (yᵢⱼ⁽ᴹ⁾ | yᵢⱼ⁽ᴬ⁾=1) ~ Po(μᵢ⁽ᴹ⁾), log(μᵢ⁽ᴹ⁾) = μ₀⁽ᴹ⁾ + bᵢ⁽ᴹ⁾, bᵢ⁽ᴹ⁾ ~ N(0, σₘ²). Units: minutes are counts on a continuous scale (observed MP in Table 1 [PAGE 3] has decimals, but the model treats them as Poisson counts).

[PAGE 9–10] Fouls ZIP: log(μᵢⱼ⁽ᶠ⁾) = μ₀⁽ᶠ⁾ + βₘ⁽ᶠ⁾ yᵢⱼ⁽ᴹ⁾ + bᵢ⁽ᶠ⁾. Shot attempts: free throws log(μᵢⱼ₁⁽ᵀ⁾) = β0₁⁽ᵀ⁾ + βF₁⁽ᵀ⁾ yᵢⱼ⁽ᶠ⁾ + position terms + bᵢ₁⁽ᵀ⁾; field goals k=2,3: log(μᵢⱼₖ⁽ᵀ⁾) = β0ₖ⁽ᵀ⁾ + βₘₖ⁽ᵀ⁾ yᵢⱼ⁽ᴹ⁾ + position terms + bᵢₖ⁽ᵀ⁾.

[PAGE 10] Made baskets: yᵢⱼₖ⁽ᶜ⁾ | yᵢⱼₖ⁽ᵀ⁾ ~ Bi(yᵢⱼₖ⁽ᵀ⁾, pᵢⱼₖ⁽ᶜ⁾), logit(pᵢⱼₖ⁽ᶜ⁾) = β0ₖ⁽ᶜ⁾ + βHₖ⁽ᶜ⁾ IH(j) + position terms + bᵢₖ⁽ᶜ⁾. p ∈ [0,1]; IH(j) ∈ {0,1}.

[PAGE 12–13] Dynamic minutes (expressions 13–14): p(y⁽ᴹ⁾ | y⁽ᴬ⁾, θ, ϕ) = ∏ᵢ p(yᵢ₁⁽ᴹ⁾ | yᵢ₁⁽ᴬ⁾, θ, ϕ) ∏ⱼ₌₂ᴶ p(yᵢⱼ⁽ᴹ⁾ | yᵢ,ⱼ₋₁⁽ᴹ⁾, yᵢⱼ⁽ᴬ⁾, θ, ϕ); log(μᵢⱼ⁽ᴹ⁾) = μ₀⁽ᴹ⁾⁽⁺⁾ + βᴹ⁽⁺⁾ log(1 + yᵢ,ⱼ₋₁⁽ᴹ⁾) + bᵢ⁽ᴹ⁾⁽⁺⁾. βᴹ⁽⁺⁾ ~ N(0, 10²) prior [PAGE 13].

[PAGE 14] Hidden Markov transition: Ω = [qCC qCH; qHC qHH], qCC + qCH = 1, qHC + qHH = 1. State-dependent scoring: logit(pCᵢⱼₖ⁽ᶜ⁾) and logit(pHᵢⱼₖ⁽ᶜ⁾) with constraint βC0ₖ < βH0ₖ [PAGE 14].

[PAGE 16] WAIC comparison: Static LBN 21274.69; Dynamic LBN 21194.13; Hidden Markov LBN 21274.60. WAIC is a dimensionless out-of-sample predictive error estimate; lower is preferred [PAGE 16].

[PAGE 19] Posterior predictive: f(y*⁽ᶜ⁾, y*⁽ᵀ⁾, y*⁽ᶠ⁾, y*⁽ᴹ⁾, y*⁽ᴬ⁾ | D) = ∫ f(y*⁽ᶜ⁾, y*⁽ᵀ⁾, y*⁽ᶠ⁾, y*⁽ᴹ⁾, y*⁽ᴬ⁾ | θ, ϕ) π(θ, ϕ | D) d(θ, ϕ).

Breakdown regimes: ZIP degenerates when y⁽ᴬ⁾=0 forces all downstream counts to exactly zero (structural zero, not sampling zero). The autoregressive log(1 + yᵢ,ⱼ₋₁⁽ᴹ⁾) is defined for all y ≥ 0, but loses sensitivity when prior minutes are zero. The hidden Markov model is unidentifiable under label switching unless βC0ₖ < βH0ₖ is imposed [PAGE 14]. The posterior predictive integral in (16) is analytically intractable and requires MCMC [PAGE 15].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The statistical lineage traces from Pearl (1988) and Pearl & Russell (1995), who established Bayesian networks as direct representations of the world rather than reasoning processes [PAGE 2]. Ghahramani (1997) extended BNs to dynamic formulations for temporal processes [PAGE 2], while Kulkarni (2011) provided the hidden Markov specialization [PAGE 2]. The basketball-specific hot-hand precedent is Calvo et al. (2025), which models latent cold/hot team states [PAGE 13]. The autoregressive minutes component draws on Fokianos & Tjøstheim (2011) for log-linear Poisson autoregression [PAGE 13]; the zero-inflated count kernel uses Lambert (1992) ZIP regression [PAGE 9]; and model selection uses Watanabe (2010) WAIC [PAGE 16].

Multi-week traps: The 82-game 2005–06 season is treated as a single longitudinal index j=1,…,J with first-order Markov transitions [PAGE 5, 13]. This assumes stationarity across the full season, ignoring mid-season trades, injuries, coaching adjustments, and rest cycles that violate a constant transition structure. The participation indicator y⁽ᴬ⁾ is exogenous in the static model and only weakly endogenous in the dynamic minutes equation [PAGE 12–13], so load-management decisions (coach-imposed DNP) are not generated by the model’s own state. The home indicator IH(j) captures venue but not travel fatigue, back-to-backs, or altitude; credible intervals for βHₖ include zero for 1PT and 3PT shots [PAGE 16–17], indicating the venue effect is statistically fragile. Finally, the autoregressive coefficient βM⁽⁺⁾ is small but strictly positive, 95% CI (0.076, 0.119) [PAGE 18], implying minutes in game j weakly depend on game j−1; over a multi-week horizon this compounding is negligible unless the chain is non-stationary.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: When a high-usage star such as Allen Iverson scores fewer than 10 points, the posterior predictive distribution inverts the generative arrow—low points imply high posterior probability of zero or very few minutes played [PAGE 20]. This is a recursive habit regression: the model learns that Iverson’s low-scoring games are almost entirely explained by non-participation, because when he plays more than 30 minutes his expected point total is substantially higher [PAGE 20, Figure 5].

Counter-trap: Kyle Korver exhibits the opposite recursion. Scoring 10 points or fewer does not collapse his posterior over minutes toward zero; a low-scoring Korver game is compatible with normal participation and variance in role-player efficiency [PAGE 20, Figure 6]. The same observation (≤10 points) therefore produces two distinct posterior regimes over minutes, conditional on player identity. This is a counter-trap to naive inversion: points → minutes is not a universal function; it is moderated by usage and role.

Clock: The temporal clock is the discrete game index j, not continuous elapsed time [PAGE 5, 13]. The autoregressive term βM⁽⁺⁾ log(1 + yᵢ,ⱼ₋₁⁽ᴹ⁾) propagates information one game backward [PAGE 13]. The clock breaks down if games are irregularly spaced, if rest days are inserted, or if a player misses multiple consecutive games—because the first-order Markov assumption cannot represent multi-game absence except through repeated structural zeros in y⁽ᴬ⁾ and y⁽ᴹ⁾. The model has no explicit node for injury, fatigue accumulation, or minutes-cap enforcement, so the clock is purely observational rather than biomechanical.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: Regulation NBA play is 48 minutes plus overtime, but the ZIP model for minutes y⁽ᴹ⁾ ~ Po(μ) has support on all non-negative integers [PAGE 9]. Nothing in the conditional distribution excludes predicted minutes above 48 or 53, creating a physical veto unless the data-generation process naturally truncates. The paper does not model overtime explicitly.

Biomechanical layer: Fouls drawn y⁽ᶠ⁾ and shot attempts y⁽ᵀ⁾ are conditionally dependent on minutes played y⁽ᴹ⁾ [PAGE 9–10]. No node represents cumulative load, player age, or injury status. Therefore a veto is triggered when a star rests for load management: the participation indicator y⁽ᴬ⁾ switches to zero exogenously, but the autoregressive minutes chain has no mechanism to anticipate or propagate this planned absence beyond one step [PAGE 12–13].

Weather/venue layer: Games are indoors, so weather is irrelevant; the only environmental covariate is the home indicator IH(j) ∈ {0,1} [PAGE 10]. Its coefficients βH₁, βH₂, βH₃ have credible intervals containing zero for free throws and three-pointers [PAGE 16–17], so the venue veto is statistically weak—home/away cannot be reliably adjudicated from these posteriors alone.

Veto proof summary: The model’s conditional independence structure assumes that, given y⁽ᴬ⁾ and y⁽ᴹ⁾, downstream nodes are independent of exogenous rest or tactical substitution. Any real-world intervention that sets y⁽ᴬ⁾=0 without updating y⁽ᴹ⁾ through the autoregressive chain violates the assumed generative order and voids the downstream predictive distribution for fouls, attempts, and made baskets [PAGE 7–10].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto scenario 1 — Structural-zero enforcement. Rule: if yᵢⱼ⁽ᴬ⁾ = 0 (player did not participate), then yᵢⱼ⁽ᴹ⁾ = yᵢⱼ⁽ᶠ⁾ = yᵢⱼₖ⁽ᵀ⁾ = yᵢⱼₖ⁽ᶜ⁾ = 0 for all k with probability exactly 1 under the ZIP construction [PAGE 8–10]. Verifiable prediction: draw from the posterior predictive conditional on a recorded DNP; the fraction of samples with yᵢⱼ⁽ᴹ⁾ > 0 must be 0. If MCMC produces nonzero minutes for a DNP observation, the sampler or link function is mis-specified.

Veto scenario 2 — Temporal-order destruction. Rule: the dynamic LBN relies on the ordered autoregressive link yᵢⱼ⁽ᴹ⁾ ← yᵢ,ⱼ₋₁⁽ᴹ⁾ [PAGE 13]. Verifiable prediction: randomly permute game order within each player’s season and refit. The posterior for βM⁽⁺⁾ (mean 0.097, 95% CI (0.076, 0.119) on [PAGE 18]) should collapse toward 0 and the dynamic LBN WAIC (21194.13 [PAGE 16]) should worsen or match the static LBN (21274.69). If predictive performance is unchanged under permutation, the autoregressive term is capturing non-temporal heterogeneity, not genuine carryover.

Veto scenario 3 — Hidden-state identifiability constraint. Rule: the hot/cold model imposes βC0ₖ < βH0ₖ to prevent label switching [PAGE 14]. Verifiable prediction: remove the inequality constraint and allow the two latent states to exchange labels. The posterior over (βC0ₖ, βH0ₖ) should become bimodal with two symmetric modes, and WAIC should not improve relative to the constrained model. If the unconstrained version yields equal or better WAIC without bimodality, the latent states are not statistically distinguishable and the hot-hand node is a redundant layer.
</RLVR_COUNTERFACTUAL_VETOES>