---
source: "2015 Predicting Sports Scoring Dynamics UC Boulder.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 25
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4984
---

<NATIVE_REASONING>
The user wants a deep reasoning response based on the provided source text (a research paper about predicting sports scoring dynamics). I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important constraints:
- No betting lines (spreads, totals, moneylines, odds). Even though the paper mentions AUC and probability, I must avoid framing as betting.
- No toy equations. Use formal LaTeX from the paper.
- Cite page markers [PAGE N]. The source text provided doesn't have explicit page numbers like "[PAGE 2]" embedded, but I can infer page numbers from the text flow (the text shows page breaks: page 1 starts with title, page 2 starts with "2", etc.). I should cite based on the visible page numbers in the text. Looking at the text:
  - Page 1: Title, abstract, intro start
  - Page 2: "2" appears, intro continues
  - Page 3: "3" appears, Table I, preprocessing
  - Page 4: "4" appears, scoring and lead size, Fig 1
  - Page 5: "5" appears, where standard tests fail
  - Page 6: "6" appears, skill-based scoring dynamics, restorative models
  - Page 7: "7" appears, modeling scoring dynamics, tables II-V
  - Page 8: "8" appears, predicting outcomes
  - Page 9: "9" appears, who will score next, who will win
  - Page 10: "10" appears, team skill evolves over time
  - Page 11: "11" appears, figures 8-9, conclusion
  - Page 12: "12" appears, references/acknowledgements

Wait, I need to look carefully at the page markers in the text. Let me scan:
- After abstract, "Professional team sports..." no page number visible at start.
- Then "2" appears after "opponent [14]." -> that's page 2.
- Then "3" appears after preprocessing paragraph -> page 3.
- Then "4" appears after "All of the resulting gradients..." -> page 4.
- Then "5" appears after "fixed population of teams." -> page 5.
- Then "6" appears after "the independent scoring model." -> page 6.
- Then "7" appears after tables? Actually after Fig 3 caption "6" then later "7" appears before Table II. -> page 7.
- Then "8" appears before "We now apply our models..." -> page 8.
- Then "9" appears after Fig 7 text -> page 9.
- Then "10" appears after "few years are likely to be very different..." -> page 10.
- Then "11" appears after Cleveland Cavaliers text -> page 11.
- Then "12" appears after references start -> page 12.

I will cite [PAGE N] where N corresponds to these visible numbers.

I need to ensure total depth >= 1000 words across sections. Each section must be present. THINK_TRACE >= 400 words.

Structure:
<THINK_TRACE>
Deep multi-hop derivation & gray-zone audit (>=400 words).
- Discuss the paper's hypotheses, models, mathematical transformations, limitations (low power tests, short sequences), anti-persistence vs restoration, lead size dependence, sigmoid approximation singularity, MCMC fitting, cross-validation, etc.
- Gray zones: merging simultaneous events, removing overtime (0.88%), one-sided games (6.24%), lead size computation from team r perspective, assumptions of fixed skill per season, etc.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX, units, page citations, breakdown.
- Bradley-Terry: P(r beats b) = π_r / (π_r + π_b) or similar (need to infer from text; text says "probability that team r wins... is given by the skill of r relative to b: [equation]" but equation is missing in text due to formatting. I should reconstruct based on standard BT: P(r|b) = π_r / (π_r + π_b) but must be careful not to invent. Actually the text shows equation placeholders that are blank in the markdown. I can cite the model names and describe them formally using LaTeX, noting that the source omits the explicit rendered equations but describes them verbally. Wait, the invariant says "State formal LaTeX equations... When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." Since the source text has blank equation images, I can quote the verbal description and then provide the formal LaTeX that corresponds to the described model, clearly labeling it as the formalization of the text's description. But I must not invent fake ratios. I can use standard BT formulation as it's a well-known model cited in the paper (Bradley and Terry 1952). That's not a toy ratio; it's a formal model from the literature referenced in the paper.
- Independent model: Bernoulli with game-specific bias.
- Restorative model: π_r modified by γ_r * ℓ_r, with c_rb = γ_r - γ_b? Need to check text: "A game as a whole exhibits a restorative pattern whenever c_rb < 0." Equation (4) probably has c_rb. I can write formal LaTeX based on description: logit(P(ψ_i = r)) = ... + c_rb * ℓ_{i,r}. But since equation image is missing, I should describe what the text says and provide the LaTeX that matches the verbal description, citing [PAGE 6].
- Sigmoid: σ(x) = (1 + e^{-x})^{-1}. Change of variables matching gradients at P=1/2.
- Anti-persistence: offensive/defensive skills π^off, π^def. Probability depends on who scored last.
- Tables II-V log-likelihoods.
- AUC definition.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical/scientific lineage & multi-week traps.
- Lineage: Bradley-Terry (1952), Elo, Glickman, hot hand (Gilovich et al. 1985), Arkes & Martinez momentum, Bar-Eli et al. hot hand review, Vergin winning streaks, Gabel & Redner random walk basketball, Merritt & Clauset scoring dynamics, Clauset et al. safe leads.
- Multi-week traps: non-stationarity of team skill across seasons, roster changes (Cavaliers LeBron example), CFB regional monopolies vs NFL free agency, injury accumulation, coaching changes, the 2004 NHL lockout canceling season (preprocessing footnote [PAGE 3]).
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression vs counter-trap vs clock.
- This section is more abstract but must be grounded in the paper. "Crisis habit regression" could refer to teams reverting to mean or restorative behavior under pressure (leading team substitutes stars, losing team tries harder). "Counter-trap" could be anti-restoration/momentum where leading team presses advantage. "Clock" refers to game clock proportion observed (0.1 to 0.9), halftime prediction >80% accuracy, online prediction as game unfolds.
- Discuss how models update beliefs recursively as game state (ψ_j, φ_j) observed, and how baselines fail (leading model only slightly better than chance, Bradley-Terry cannot update in real time).
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof.
- The paper doesn't discuss weather or biomechanics explicitly. I need to address what would veto the model's assumptions: physical layers not in the data (weather, altitude, fatigue, injuries, ball positioning, timing of events). The paper itself notes future work could incorporate player/ball positioning and timing [PAGE 11-12]. Veto proof: if simultaneous events are merged incorrectly, lead size is distorted; if overtime events are included (0.88% of events), they follow different scoring processes [PAGE 3]; if one-team games are included (6.24%), raw data lacks non-scoring team identity [PAGE 3]. These are data-layer vetoes. Physical/biomechanical vetoes: the model assumes fixed skill per season [PAGE 5], which breaks with mid-season injuries/trades; anti-persistence depends on possession rules (football/basketball alternate possession, NHL faceoff) [PAGE 6-7].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning from Verifiable Rewards? Or just verifiable scenarios. I'll provide 3 counterfactual veto scenarios where the model's predictions would fail or be vetoed, with predictions.
  1. Overtime inclusion veto: If overtime scoring events (different process) are not removed, the Bernoulli/skill model misattributes overtime scoring to regulation skill, causing prediction error at end of close games. Prediction: AUC for "who will win" drops below 0.8 at halftime if overtime events are included in training/test.
  2. Simultaneous event merging veto: In basketball free-throw/Inbound sequences, if simultaneous events are not merged and instead ordered arbitrarily, the team sequence ψ gets spurious anti-persistence or persistence, inflating Markov model performance artificially. Prediction: First-order Markov AUC in NBA would decrease significantly if event order within simultaneous clusters is randomized.
  3. Skill non-stationarity veto: If a key player is traded mid-season (e.g., LeBron leaving Cleveland), the fixed-season skill assumption is violated; the model's inferred skill from early games becomes stale. Prediction: Out-of-sample log-likelihood for Cleveland Cavaliers games after the trade will be worse (higher negative log-likelihood) than for teams with stable rosters, and the restorative anti-persistent model's advantage over independent model will diminish for that team.

Need to avoid betting lines. No mention of odds, spreads, etc. Use AUC, log-likelihood, probability.

Word count: Need >=1000 words total. THINK_TRACE alone >=400. Let's aim for each section to be substantial.

Let's draft carefully.

THINK_TRACE: Must be >=400 words. I'll write a detailed derivation.
- Start with the two hypotheses.
- H1: scoring independent of state (skill alone). H2: depends on state.
- Figure 1 shows empirical vs Bernoulli. Bernoulli produces positive gradient due to variance in biases, but empirical shows different gradients/ranges, especially NBA.
- Randomization tests (serial, Wald-Wolfowitz, autocorrelation) have low power for short sequences (CFB, NFL, NHL <10 events/game; NBA ~93).
- Solution: model latent team skills across a fixed population, inducing cross-game correlations.
- Bradley-Terry extension to event-level.
- Independent model: game-specific bias from BT.
- Restorative model: skill covaries with lead via γ_r. When γ_r < 0 restorative; γ_r > 0 anti-restorative. Game-level c_rb < 0 restorative.
- Linear function unbounded, corrected by sigmoid σ(x) = (1+e^{-x})^{-1}, change of variables matching gradients at P=1/2 [PAGE 6].
- Anti-persistence: offensive/defensive skills, possession alternation. NBA rr/bb bigram rate 0.35 vs CFB 0.45, NFL 0.44, NHL 0.49 [PAGE 6].
- Combined model: restorative anti-persistent.
- Fitting: MCMC, 10-fold CV held-out likelihood. Tables II-V [PAGE 7].
- Best models: CFB independent; NFL independent anti-persistent; NBA restorative anti-persistent; NHL restorative (tentative) [PAGE 7].
- Prediction tasks: Who scores next (AUC vs proportion season observed), Who wins (AUC vs fraction of game observed, >80% at halftime) [PAGE 8-9].
- Baselines: leading (slightly better than chance), Bradley-Terry (no online update), first-order Markov.
- Gray zones: removed overtime (0.88%), one-sided games (6.24%), merged simultaneous events to preserve lead size, timestamps discarded (only order), lead computed from team r perspective, fixed skill per season assumption.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX.
I need to cite page numbers. Let's assign:
- BT model: [PAGE 5] (Section V).
- Independent model: [PAGE 5-6].
- Restorative: [PAGE 6].
- Sigmoid: [PAGE 6].
- Anti-persistence: [PAGE 6].
- Tables: [PAGE 7].
- AUC: [PAGE 8].
- Prediction: [PAGE 8-9].

I'll write equations. Since the source markdown has blank equation images, I'll quote the verbal descriptions and then present the formal LaTeX that encodes them, explicitly noting they formalize the text's descriptions. This is acceptable as long as I don't invent fake ratios; BT is a real formal model referenced.

RETROCAUSAL_GENEALOGY: Historical lineage.
- Bradley & Terry 1952 [6], Elo 1978 [11], Glickman 1999 [17], Glickman & Stern 1998 [18].
- Hot hand: Gilovich et al. 1985 [16], Bar-Eli et al. 2006 [2], Arkes & Martinez 2011 [1].
- Winning streaks: Vergin 2000 [37], Sire & Redner 2009 [32].
- Basketball random walk: Gabel & Redner 2012 [14].
- Scoring dynamics: Merritt & Clauset 2013 [26], 2014 [27], Clauset et al. 2015 [8] safe leads.
- Multi-week traps: roster churn, LeBron Cavaliers example [PAGE 10-11], CFB vs NFL player mobility [PAGE 9], NHL 2004 lockout [PAGE 3 footnote], skill non-stationarity Fig 7 [PAGE 9-10].

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: restorative behavior under lead pressure (substituting stars, losing team motivation) [PAGE 6].
- Counter-trap: anti-restoration/momentum, leading team presses advantage [PAGE 6].
- Clock: online observation fraction T, halftime >80% accuracy, first-order Markov worse early but converges later [PAGE 8-9].
- Recursive belief update: models observe (ψ_j, φ_j) for j < i and update prediction for ψ_i. Skill parameters inferred from first T games then applied to unobserved games [PAGE 8].

CROSS_LAYER_VETO_ADJUDICATION:
- Physical/biomechanical: not in model. Vetoes: weather, altitude, fatigue, injuries not modeled. Future work: player/ball positioning, timing [PAGE 11-12].
- Data-layer vetoes: overtime removal (0.88% events, different process) [PAGE 3]; one-sided game removal (6.24%, missing non-scoring team) [PAGE 3]; simultaneous event merging preserves lead size [PAGE 3]; discarding timestamps loses tempo information [PAGE 3].
- Model assumption vetoes: fixed skill per season [PAGE 5] breaks with mid-season trades/injuries; possession alternation assumption [PAGE 6] fails in NHL faceoff (not anti-persistent by design) [PAGE 7]; unbounded linear restorative model requires sigmoid approximation [PAGE 6].

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.
1. Overtime contamination veto.
2. Simultaneous event ordering veto.
3. Mid-season roster shock veto.

Need to ensure total words > 1000. Let's write generously.

Important: Do not mention betting lines. Avoid "odds", "spread", "moneyline", "total". Use AUC, probability, log-likelihood, accuracy.

Let's draft now.

Check word count as I go mentally. THINK_TRACE needs >=400 words. I'll write about 500 there. Other sections maybe 150-200 each. Total ~1200-1500.

Citations: Use [PAGE N] exactly. I will reference page numbers visible in text.

Let's verify page numbers:
- Page 1: title/abstract/intro start. No number visible at top but text starts.
- Page 2: number "2" visible after "opponent [14]." Actually looking at text: "...opponent [14]. 2" yes page 2.
- Page 3: number "3" visible after preprocessing paragraph before Table I. Yes "3 TABLE I..."
- Page 4: number "4" visible after "All of the resulting gradients..." Yes "4" then text.
- Page 5: number "5" visible after "fixed population of teams." Yes "5"
- Page 6: number "6" visible after "independent scoring model." Yes "6"
- Page 7: number "7" visible before Table II? Actually after Fig 3, "6" then later text continues. I see "7 TABLE II..." after some text. Yes page 7.
- Page 8: number "8" visible before "We now apply our models..." Yes "8"
- Page 9: number "9" visible after Fig 7 text. Yes "9"
- Page 10: number "10" visible after "few years..." Yes "10"
- Page 11: number "11" visible after Cleveland Cavaliers text. Yes "11"
- Page 12: number "12" visible before references. Yes "12"

Good.

Now write the response. Must be valid XML-like sections. No markdown outside? The user asked for exact XML sections. I'll output just those sections.

Be careful: The invariant says "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." I will not invent Force/Fatigue. I'll use standard BT equation and describe restorative/anti-persistent models based on the text. Since the paper's equation images are blank, I'll quote the text and then provide the formal LaTeX that corresponds to the described model, clearly attributing it to the paper's formalism.

Let's write.

THINK_TRACE content:
- Multi-hop derivation from H1/H2 to models.
- Gray-zone audit: data exclusions, assumptions, low power tests, sigmoid breakdown at extreme lead sizes (though sigmoid bounds it), MCMC convergence not discussed but implied.
- Lead size L computed from team r perspective, rotationally symmetric P(ψ_i=r|L_{i-1}) = 1 - P(ψ_i=b|-L_{i-1}) [PAGE 4].
- Serial test strict uniform assumption contradicted by skill differences [PAGE 5].
- Wald-Wolfowitz runs test identifies momentum/restoration [PAGE 4-5].
- Autocorrelation identifies anti-persistence [PAGE 4-5].
- Cross-game correlations from finite fixed team population [PAGE 5].

SOURCE_OPERATORS_AND_EQUATIONS:
- BT: P(r beats b | π_r, π_b) = π_r / (π_r + π_b). Cite [PAGE 5] where text describes it.
- Independent: each scoring event Bernoulli with game-specific bias from Eq (2). [PAGE 5-6]
- Restorative: logit or linear modification: s_r(i) = π_r + γ_r * ℓ_{i,r}; c_rb = γ_r - γ_b? Actually text says c_rb < 0 for game restorative. I'll write generically: the restorative force modifies strength in response to lead ℓ_r. [PAGE 6]
- Sigmoid: σ(x) = (1 + e^{-x})^{-1}; match σ' = c_rb at P=1/2. [PAGE 6]
- Anti-persistence: separate π^off, π^def; apply defensive skill after own score, offensive after opponent score. [PAGE 6]
- Combined model.
- Log-likelihood tables. [PAGE 7]
- AUC definition. [PAGE 8]

RETROCAUSAL_GENEALOGY:
- Citations [1], [2], [6], [11], [14], [16], [17], [18], [26], [27], [32], [37].
- Multi-week traps: roster turnover, LeBron example [PAGE 10-11], CFB regional monopoly vs NFL free agency [PAGE 9], NHL lockout [PAGE 3], skill non-stationarity Fig 7 [PAGE 9-10].

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression = restorative force when behind/ahead.
- Counter-trap = anti-restoration/momentum.
- Clock = proportion of season/game observed; online updating; halftime >80% [PAGE 8-9].
- Baselines: leading model (state-only), Bradley-Terry (no online update), first-order Markov (local only).

CROSS_LAYER_VETO_ADJUDICATION:
- Physical/biomechanical: weather, altitude, fatigue, injury not in data [PAGE 11-12 future work].
- Data vetoes: overtime 0.88% [PAGE 3], one-sided 6.24% [PAGE 3], simultaneous merging [PAGE 3], timestamps discarded [PAGE 3].
- Model vetoes: fixed skill per season [PAGE 5], possession alternation [PAGE 6], NHL faceoff exception [PAGE 7].

RLVR_COUNTERFACTUAL_VETOES:
- Scenario 1: Overtime events retained. Prediction: held-out log-likelihood worsens; "who will win" AUC at end-of-game drops below 0.8 because overtime process differs.
- Scenario 2: Simultaneous events not merged, arbitrary order. Prediction: NBA first-order Markov AUC artificially inflated; de-merging reduces anti-persistence signal and lowers Markov AUC.
- Scenario 3: Mid-season star trade (Cleveland Cavaliers 2010). Prediction: fixed-season skill parameter becomes stale; out-of-sample negative log-likelihood for post-trade Cavaliers games increases relative to pre-trade; restorative anti-persistent model's advantage over independent model narrows for that team.

Need to avoid saying "betting" or "odds". Use "prediction accuracy", "AUC".

Let's write the final output now. Ensure sections are exactly named. No extra text outside sections.
</NATIVE_REASONING>

<THINK_TRACE>
The paper advances two competing hypotheses about within-game scoring. Hypothesis 1 states that scoring probability depends only on latent team skill, implying an independent Bernoulli process at the event level. Hypothesis 2 states that scoring probability depends on the current game state, specifically lead size and the identity of the last scoring team. The empirical test in Figure 1 compares observed scoring probabilities against synthetic Bernoulli sequences. A critical subtlety is that the Bernoulli simulation necessarily produces a positive gradient because the per-game bias is drawn from the empirical distribution of team scoring shares; broader variance in these biases yields a steeper positive slope. The observed gradients, however, differ in both slope and range—especially in the NBA, where lead sizes extend much further than the synthetic process generates—falsifying Hypothesis 1 and supporting state dependence [PAGE 4].

The authors then apply three randomization tests: serial, Wald-Wolfowitz runs, and autocorrelation. These tests suffer from low statistical power because team sequences are short: college and professional football average fewer than 9 scoring events per game, hockey fewer than 6, while basketball averages roughly 93 [PAGE 3, PAGE 5]. The serial test additionally assumes a uniform coin flip, which is contradicted by systematic skill differences; rejecting uniformity does not imply state dependence because skill alone can create apparent non-uniformity [PAGE 5]. The solution proposed is to exploit cross-game correlations induced by a finite, fixed population of teams, modeling latent team skill within each season. This bridges the gap between single-game event sequences and inter-season team dynamics.

The model hierarchy begins with the Bradley-Terry formulation extended to individual scoring events. The independent model treats each event as a Bernoulli trial with a game-specific bias derived from team skills. The restorative model introduces a per-team parameter γ_r that modulates skill as a function of lead size ℓ_r. When γ_r < 0, skill decreases as the lead grows (restorative); when γ_r > 0, skill increases with the lead (anti-restorative or momentum). A game-level restorative pattern emerges when c_rb < 0, which can occur through mutual restoration or through one team's restorative force dominating the other's anti-restorative force [PAGE 6]. Because the linear restorative term is not bounded to [0,1], the authors approximate it with a sigmoid σ(x) = (1 + e^{−x})^{−1}, matching gradients at the symmetry point P(ψ_i = r) = 1/2 [PAGE 6]. This is where a breakdown regime appears: the linear approximation is valid only near the point of symmetry; at extreme lead sizes the sigmoid saturates, bounding probabilities where the linear form would not.

Anti-persistence is modeled through separate offensive and defensive skill parameters. In sports with alternating possession, a team's defensive skill applies immediately after it scores, and its offensive skill applies after the opponent scores. The NBA exhibits strong anti-persistence: the joint probability of rr or bb bigrams is only 0.35, compared to 0.45 (CFB), 0.44 (NFL), and 0.49 (NHL) [PAGE 6]. The combined restorative anti-persistent model fits the NBA best across all seasons; NFL favors independent anti-persistent in 8 of 10 seasons; CFB strongly favors the independent model; NHL results are ambiguous but tentatively favor restorative [PAGE 7]. Parameter estimation uses Markov chain Monte Carlo with 10-fold cross-validation held-out likelihood.

Gray-zone audits are necessary. The preprocessing discards overtime events (0.88% of all events) because they follow a different scoring process, removes games where only one team scored (6.24% of games) because the non-scoring team's identity is missing, and merges simultaneous scoring events to preserve running lead size [PAGE 3]. Timestamps are discarded entirely, so the model uses event order only, discarding tempo information that could affect scoring rates [PAGE 3]. Lead size L is computed from the perspective of team r, imposing rotational symmetry P(ψ_i = r | L_{i−1}) = 1 − P(ψ_i = b | −L_{i−1}) [PAGE 4]. The assumption that team skill is fixed within a season [PAGE 5] is a strong prior that breaks under mid-season injuries, trades, or coaching changes, a vulnerability examined in the counterfactual vetoes below.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formalization of the paper’s generative models, with page citations.

Bradley-Terry skill model (latent team skill π ∈ [0,1]):
P(r defeats b | π_r, π_b) = π_r / (π_r + π_b)
The paper describes this as the probability team r wins against team b based on relative skill [PAGE 5].

Independent event-level model:
Each scoring event i is a Bernoulli trial with game-specific bias derived from Eq. (2) above, applied to every event in the sequence [PAGE 5–6].

Restorative model:
Team r’s effective strength before event i is modified by lead size ℓ_{i,r}:
s_r(i) = π_r + γ_r · ℓ_{i,r}
where γ_r < 0 denotes restoration (skill falls as lead grows) and γ_r > 0 denotes anti-restoration/momentum [PAGE 6]. Game-level restorative condition: c_rb < 0 [PAGE 6].

Sigmoid correction for bounded probabilities:
σ(x) = (1 + e^{−x})^{−1}
Parameters m_rb and v_rb are obtained by matching σ′ to the linear gradient c_rb at P(ψ_i = r) = 1/2, ensuring the smooth approximation preserves the linear interpretation near symmetry [PAGE 6].

Anti-persistence model:
Offensive skill π^{off} and defensive skill π^{def} are assigned per team. After team r scores, its defensive skill governs the next event; after team b scores, team r’s offensive skill governs its next scoring opportunity [PAGE 6].

Combined model:
Restorative anti-persistent model superposes lead-dependent modulation and last-scoring-team dependence [PAGE 6].

Model assessment:
Held-out log-likelihood via 10-fold cross validation, computed per season per sport [PAGE 7]. Tables II–V report negative log-likelihoods; lower values indicate better fit [PAGE 7].

Prediction metric:
AUC = probability that a randomly selected true positive is ranked above a randomly selected false positive, used for both “who will score next” and “who will win” tasks [PAGE 8].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s intellectual lineage draws from paired-comparison skill modeling and the psychology of streaks. Bradley and Terry’s 1952 method of paired comparisons [6] provides the statistical foundation for latent team skill; Elo’s chess rating system [11] and Glickman’s dynamic paired-comparison estimation [17] extend this to evolving competencies. Glickman and Stern’s state-space model for NFL scores [18] is the closest direct predecessor for within-season skill tracking.

The momentum/hot-hand literature forms the behavioral counterweight. Gilovich, Vallone, and Tversky’s 1985 critique of the hot hand in basketball [16] challenges the perception of streakiness; Bar-Eli, Avugos, and Raab’s 2006 review [2] surveys two decades of debate. Arkes and Martinez’s 2011 evidence for an NBA momentum effect [1] and Vergin’s 2000 analysis of winning streaks [37] support state dependence. Gabel and Redner’s 2012 random-walk picture of basketball scoring [14] anticipated the restoration/anti-persistence framework. Clauset’s prior work with Merritt on environmental structure and scoring advantages [26] and on scoring dynamics across professional team sports [27] directly precedes this paper, as does Clauset et al.’s 2015 work on safe leads [8].

Multi-week traps are evident in the data. Team skill is assumed fixed within a season [PAGE 5], yet the Spearman rank correlations in Figure 7 reveal strong serial correlation along the diagonal and decay in off-diagonal blocks, indicating nonstationarity over the ten-year span [PAGE 9–10]. The Cleveland Cavaliers trajectory exemplifies this: drafting LeBron James in 2003 moved them from third-worst to mid-range offensive skill; his departure for Miami in 2010 collapsed Cleveland’s offensive skill to the bottom while Miami’s rose [PAGE 10–11]. The authors attribute CFB’s unusually long inter-season skill correlation to regional player monopolies, contrasting with the national player market of professional leagues [PAGE 9]. The 2004 NHL lockout canceled an entire season, creating a structural break in the hockey time series [PAGE 3 footnote]. These are not one-game anomalies; they are multi-week regime shifts that invalidate any model assuming static skill across a full season.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression refers to the restorative behavioral mode: when a team trails, it may deploy its best players or increase motivation; when ahead, it may substitute stars to conserve energy or avoid injury [PAGE 6]. The counter-trap is anti-restoration or momentum, where the leading team presses its advantage, improves field control, or exploits learned weaknesses [PAGE 6]. The clock is the online observation window: models train on the first T games of a season and then predict event-by-event as the game unfolds, observing states (ψ_j, φ_j) for j < i [PAGE 8].

Recursive theory of mind operates at two levels. First, the model updates its prediction of ψ_i based on the realized history of the current game. Second, it maintains a belief about latent team skill that was formed from earlier season games and is applied to unobserved games. The “leading” baseline regresses to a crisis habit of pure state reaction: it predicts the current leader will score next and win, performing only slightly better than chance [PAGE 8]. The Bradley-Terry baseline possesses a theory of team skill but no online updating mechanism; it performs well early in a game but is quickly overtaken because it cannot integrate real-time scoring evolution [PAGE 8–9]. The first-order Markov model possesses a short-term theory of mind conditioned only on the last scorer; it captures NBA anti-persistence well but lacks the heterogeneous skill information that skill-based models use early in games [PAGE 8–9].

As the game progresses, all models’ predictions converge because less extrapolation remains; later in the game, the remaining scoring events are fewer and the random-walk nature of the binary sequence dominates [PAGE 9]. The “who will win” task shows that skill-aware models predict the winner with at least 80% accuracy at halftime [PAGE 9], demonstrating that the recursive integration of skill and in-game state outperforms crisis-habit regression alone.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical and biomechanical layers are absent from the dataset. The model uses only event order, team identity, and point value; it excludes player positioning, ball location, timing between events, weather, altitude, and fatigue [PAGE 3, PAGE 11–12]. Any of these can veto the model’s assumptions if they systematically covary with game state.

Data-layer vetoes are explicit in the paper. Overtime events comprise 0.88% of all scoring events and follow a different scoring process than regulation; they are removed [PAGE 3]. Games in which only one team scored comprise 6.24% of all games and are removed because the non-scoring team’s identity is unknown [PAGE 3]. Simultaneous events (e.g., football conversion attempts, basketball free throws and inbounds) are merged to avoid ambiguous ordering that would distort the running lead size [PAGE 3]. Discarding timestamps discards tempo, which may correlate with lead size and possession changes [PAGE 3].

Model-assumption vetoes include the fixed-skill-per-season assumption [PAGE 5], which collapses under mid-season injuries, trades, or coaching changes. The anti-persistence model assumes alternating possession after scoring, which holds for American football and basketball but not for hockey, where possession is determined by a faceoff after each goal; consequently, the NHL is “not anti-persistent by design,” and model rankings are less clear-cut [PAGE 7]. The restorative model’s linear term is unbounded, requiring a sigmoid transformation that saturates at extreme lead sizes; the approximation is formally exact only at the symmetry point P = 1/2 [PAGE 6].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto Scenario 1 — Overtime contamination. If overtime scoring events (0.88% of all events, different scoring process [PAGE 3]) were retained in training and test sets, the latent skill parameters estimated from regulation sequences would be contaminated by overtime-specific scoring rates. Prediction: held-out negative log-likelihood would increase, and end-of-game “who will win” AUC would fall below the reported halftime threshold of 0.80 because overtime scoring is not generated by the same skill-based process.

Veto Scenario 2 — Simultaneous event misordering. If basketball free-throw/inbound clusters were not merged and instead assigned an arbitrary temporal order, the team sequence ψ would acquire spurious bigrams. Prediction: the first-order Markov baseline’s NBA AUC would be artificially inflated because arbitrary ordering within simultaneous clusters could either amplify or destroy the observed anti-persistence signal (rr and bb bigram rate of 0.35 [PAGE 6]); de-merging or randomizing intra-cluster order would reduce Markov model performance relative to the skill-based restorative anti-persistent model.

Veto Scenario 3 — Mid-season roster shock. The Cleveland Cavaliers’ offensive skill collapsed when LeBron James left for Miami at the start of the 2010–11 season [PAGE 10–11]. If a model is trained on pre-shock games and tested on post-shock games for the same team, the fixed-season skill assumption is violated. Prediction: post-trade Cavaliers games will exhibit higher out-of-sample negative log-likelihood than pre-trade games, and the performance gap between the restorative anti-persistent model and the independent model will narrow for Cleveland specifically, because the lead-dependent behavioral parameters (γ_r) inferred before the trade no longer describe the post-trade roster.
</RLVR_COUNTERFACTUAL_VETOES>