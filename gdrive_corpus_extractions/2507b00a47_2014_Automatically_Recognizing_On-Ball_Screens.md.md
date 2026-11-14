---
source: "2014 Automatically Recognizing On-Ball Screens.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 8
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 7404
---

<NATIVE_REASONING>
The user wants a deep reasoning response based on the source paper "Automatically Recognizing On-Ball Screens" (McQueen, Wiens, Guttag, 2014). I need to produce output with these exact XML sections:

<THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Constraints:
- Zero betting lines: never mention spreads, totals, moneylines, odds.
- Zero toy equations: no invented fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
- Cite exact [PAGE N] markers and verbatim quotes from source pages when source pages provided.
- >= 1,000-word depth across sections.

Let me analyze the source carefully.

Source pages: The provided text has page markers: page 2 (after labeling section?), page 3, page 4, page 5, page 6, page 7, page 8, page 9 (Appendix). Actually looking at the text:

- Abstract/Intro: pages 1-2? The text shows "2014 Research Paper Competition Presented by:" then "2" before section 3.1 Labeling. So page 2 is around there.
- Page 3: Table 1, feature extraction details.
- Page 4: Figure 5, ROC curve, performance metrics.
- Page 5: Section 4.1 Augmented Team-Specific Classifiers, Figure 7.
- Page 6: Section 6 Limitations.
- Page 7: References start? Actually references are on page 7? The text shows page 7 before references? Let's trace:
   - After Section 4.1 and Figure 7, text continues to Section 6 Limitations. There's a "2014 Research Paper Competition Presented by: 6" then Section 6.
   - Then page 7: Despite limitations... References start? Actually references appear after page 7 marker? The text shows "2014 Research Paper Competition Presented by: 7" then References [1][2][3]. Then page 8 Appendix. Then page 9 Appendix continued.

Wait, looking at raw:
- After Figure 7 discussion: "It appears that on-ball screens run by Golden State..." then "# 6 Limitations..." preceded by "2014 Research Paper Competition Presented by: 6". So page 6 contains end of section 4.1 and section 6 start? Actually Section 6 starts after page 6 marker.
- Then page 7 marker: "2014 Research Paper Competition Presented by: 7" then "Despite these limitations..." then References.
- Then page 8: Appendix starts with Labeled Games table.
- Then page 9: Appendix continued with Labeled Data Size and Performance matrix.

I need to cite exact [PAGE N] markers. Since the text doesn't have explicit [PAGE 1] tags but has page numbers in the footer ("2014 Research Paper Competition Presented by: N"), I can cite those as [PAGE 2], [PAGE 3], etc. Or I can infer page numbers. Let's map content to page numbers based on the footers visible:

Content and footers:
- Abstract, Section 1 Introduction, Section 2 Data Segmentation, Figure 1 rule-based algorithm: No footer visible before "2"? Actually the text starts with title/abstract/intro/data segmentation. Then Figure 1. Then text about segmenting. Then Figure 2 placeholders. Then Section 3. Then "2014 Research Paper Competition Presented by:" and "2" before Section 3.1. So page 2 contains end of Section 2 and start of Section 3? Wait the "2" appears right before "# 3.1 Labeling the Data Figure 3...". So page 2 footer is after Section 2 content and before Section 3.1? That seems odd. Usually footer is at bottom of page. So page 2 contains content up to that point. Then page 3 footer appears after Table 1 text: "2014 Research Paper Competition Presented by: 3". Then page 4 footer after performance text? Actually "2014 Research Paper Competition Presented by: 4" appears after Figure 5 description? Let's trace:

Raw sequence:
...
# 3.5 Performance
... mean AUROC ...
> footnotes
"2014 Research Paper Competition Presented by: 4" -> So page 4 ends after section 3.5 and Figure 5? Actually the Figure 5 image text comes after that footer? Let's see: after footer 4, there is Figure 5 image text placeholder, then Figure 5 caption. Then # 4 Improving The Classifier... So page 4 includes section 3.5 and start of section 4? Then page 5 footer after "Augmented Team-Specific Classifiers" heading? Let's see:
# 4.1 Augmented Team-Specific Classifiers
"2014 Research Paper Competition Presented by: 5"
Then text of 4.1, Figure 7, discussion of GSW/HOU/OKC.
Then # 6 Limitations...
"2014 Research Paper Competition Presented by: 6"
Then Section 6 text continues? Actually Section 6 starts before footer 6? The text shows "# 6 Limitations..." then "2014 Research Paper Competition Presented by: 6" then "Despite these limitations..." So page 6 contains section 6 and references? Wait references are after footer 7. Let's continue:
"2014 Research Paper Competition Presented by: 6" then "Despite these limitations..." then "2014 Research Paper Competition Presented by: 7" then References. So page 7 contains end of section 6 and references.
Then page 8 Appendix starts.
Then page 9 Appendix continued.

So page mapping:
- Page 1: Title, Abstract, Section 1, Section 2 (Data Segmentation, Figure 1, Figure 2 placeholders, Section 3 intro). Probably page 1.
- Page 2: Section 3.1 Labeling, Section 3.2 Feature Extraction start (Ball-Handler, Screener, On-Ball Defender, pairwise distance notation, Figure 4 placeholder, screen moment definition, Table 1 partial). Footer "2" appears before 3.1 though. Hmm. Actually the footer "2" appears right before "# 3.1 Labeling the Data". That suggests page 2 ends right before 3.1, meaning page 2 contains Sections 1-2 and start of 3. But usually footer is at bottom. So page 2 bottom is just before 3.1. Then page 3 contains 3.1, 3.2, Table 1, etc. Footer "3" after Table 1 discussion. Then page 4 contains rest of 3.2? Actually Table 1 is on page 3. Then 3.3 Splitting, 3.4 Training, 3.5 Performance, Figure 5. Footer "4" after 3.5 footnotes. Then Figure 5 image and caption might be on page 4 or 5. Then Section 4 starts. Footer "5" after 4.1 heading. Then 4.1 text, Figure 7, discussion. Then Section 6 starts. Footer "6" after Section 6 heading? Then "Despite these limitations..." Footer "7" then References. Then page 8 Appendix. Page 9 Appendix continued.

For citations, I'll cite [PAGE 2] for rule-based algorithm criteria if it's on page 2? Actually Figure 1 is in Section 2 which is likely page 1 or 2. The footer "2" appears before 3.1, so Figure 1 and Section 2 are on page 2 (bottom). But to be safe, I can cite [PAGE 1] for Abstract/Intro, [PAGE 2] for Data Segmentation/Figure 1, [PAGE 3] for Feature Extraction/Table 1, [PAGE 4] for Performance/Figure 5, [PAGE 5] for Augmented Team-Specific/Figure 7, [PAGE 6] for Limitations, [PAGE 7] for References, [PAGE 8] for Appendix Labeled Games, [PAGE 9] for Appendix matrices.

However, the text explicitly shows page numbers in footers. I will cite them as they appear. Since the user provided the source text, I should use exact [PAGE N] markers. I'll assign based on the footers visible in the text:

- The rule-based algorithm (Figure 1) appears before footer "2", so likely [PAGE 1] or [PAGE 2]. But the footer "2" is right after Section 2 discussion and before 3.1. So Section 2 and Figure 1 are on page 2? Actually the footer "2" is at the bottom of page 2. The content before it includes Figure 1 and Section 2 text. So cite [PAGE 2] for Figure 1 criteria and segmentation. Wait, Abstract and Introduction are page 1. Then Data Segmentation starts page 1? The footer "2" appears after the paragraph "Of course, a PPV of 52% is not nearly good enough." and Figure 2 placeholders. So page 2 contains end of Section 2. So Figure 1 is on page 2? Possibly page 1 contains Abstract, Intro, start of Section 2. Page 2 contains Figure 1, rest of Section 2, Figure 2, Section 3 start. But the footer "2" is placed right before 3.1 in the raw text, which might mean page 2 ends there. Let's not overthink; I can cite [PAGE 2] for the rule-based algorithm and segmentation because that content is adjacent to footer 2. For Figure 2 and action categories, also [PAGE 2] or [PAGE 3]? The footer "3" appears after Table 1 text. So Figure 2 is likely page 2 or 3. I'll cite [PAGE 2] for Figure 1 and segmentation, [PAGE 3] for feature extraction, Table 1, screen moment, [PAGE 4] for SVM, ROC, AUROC, performance thresholds (80% PPV / 82% sensitivity), [PAGE 5] for team-specific classifiers, similarity, Figure 7, GSW/HOU/OKC discussion, [PAGE 6] for Limitations start, [PAGE 7] for Limitations continuation/References, [PAGE 8] for Appendix games, [PAGE 9] for Appendix matrices.

Now content requirements:

THINK_TRACE: Deep multi-hop derivation & gray-zone audit (>=400 words). I need to derive things, discuss gray zones (e.g., labeling subjectivity, Type 3 ambiguity, non-symmetric similarity, small sample sizes, stationarity assumptions, personnel changes, frame rate 25 fps, 13 consecutive frames = 0.52 seconds, 10 feet distance, 2 ft further from basket, 12 ft defender, etc.). Multi-hop: from raw coordinates -> actions -> features -> classifier -> team similarity -> augmented classifiers. Gray-zone audit: the boundary between screen and non-screen is fuzzy; Type 3 actions are problematic; labeling was done by authors not outside experts; 25 fps means 13 frames is ~0.52s; the "screen moment" is min distance which may be noisy; quintile discretization loses information; linear SVM may not capture non-linear interactions; team-specific classifiers trained on only 28 examples per team (14 pos/14 neg) which is very small; similarity is non-symmetric; AUROC mean 0.8309 but confidence intervals not reported; 200 random splits but no variance reported; data from 2012-2013 season only; SportVu system limitations.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. Need to define:
- Position table: $p_i(t) = (x_i(t), y_i(t)) \in \mathbb{R}^2$, ball $b(t) = (x_b(t), y_b(t), z_b(t)) \in \mathbb{R}^3$, sampling $f_s = 25\,\text{Hz}$, $\Delta t = 0.04\,\text{s}$.
- Action indicator $\mathbb{1}_{\text{action}}(t)$ from Figure 1: conjunction of predicates:
  1. $\exists h: \text{dribble}(h,t)$ (ball-handler)
  2. $\exists s \neq h: \|p_s(t) - p_h(t)\|_2 \le 10\,\text{ft}$ (screener within 10 ft)
  3. $s \notin \text{paint} \cup \mathcal{N}(\text{paint})$ (not in/near paint)
  4. $\|p_s(t) - \text{basket}\|_2 \le \|p_h(t) - \text{basket}\|_2 + 2\,\text{ft}$
  5. $\exists d: \|p_d(t) - p_h(t)\|_2 \le 12\,\text{ft}$ (on-ball defender)
  6. $b(t) \notin \text{paint}$
  for $\Delta t_{\text{action}} \ge 13/f_s = 0.52\,\text{s}$, with $h$ constant over interval.
- Screen moment: $t^* = \arg\min_{t \in [t_0, t_1]} \|p_h(t) - p_s(t)\|_2$.
- Pairwise distance time series: $d_{ij}(t) = \|p_i(t) - p_j(t)\|_2$.
- Features: for each pair $(i,j)$ among $\{h,s,d,\text{basket}\}$ (6 pairs), five statistics over approach $[t_0, t^*]$ and departure $[t^*, t_1]$: mean, min, max, sum? The table is garbled but says five continuous values: likely mean, min, max, sum? Actually table shows ( ), ∑, ( ), ∑. It lists 1-5 with some formulas missing. I can state generically: $\mu_{ij}^{A}, \mu_{ij}^{D}, \min, \max, \sum$ or similar. But must not invent fake ratios. I can say the paper extracts 5 continuous values per pairwise distance series (exact formulas obscured in text extraction but summarized in Table 1). Then 6 pairs × 5 = 30 continuous features. Discretized into 5 binary quintile features each → 150-dimensional binary feature vector $\phi(a) \in \{0,1\}^{150}$.
- SVM: $f(x) = \mathbf{w}^\top \phi(x) + b$, $\hat{y} = \text{sign}(f(x))$, trained with LIBSVM, cost $C$ via 5-fold CV.
- Decision threshold trade-off: vary threshold $\tau$ on decision value or probability; PPV $= TP/(TP+FP)$, sensitivity $= TP/(TP+FN)$. At 80% PPV, sensitivity 82%.
- AUROC: $\text{AUROC} = P(f(x_+) > f(x_-))$ for random positive/negative pair. Mean AUROC $= 0.8309$.
- Team-specific: classifier $c_A$ trained on team A, tested on team B. Similarity $S(A \to B) = \text{AUROC}(c_A \text{ on } B)$. Non-symmetric.
- Augmented: nested subsets by similarity rank, training size reduced, optimal at $\le 56\%$ of data.
- Breakdown regimes: small $n$ per team (e.g., GSW 35 pos/42 neg), high-dimensional $d=150$ relative to $n$, non-stationarity (personnel changes), frame skipping/occlusion in SportVu, paint definition boundary, ball in paint exclusion, 13-frame minimum may merge/split screens.

Units: feet (ft), seconds (s), frames (dimensionless count), Hz, AUROC (unitless probability), PPV/sensitivity (unitless probabilities [0,1]).

RETROCAUSAL_GENEALOGY: Historical lineage: Stan Van Gundy quote [1] (NYT 2009), Cortes & Vapnik 1995 SVM, LIBSVM 2011, STATS SportVu tracking (2012-13 season), MIT research paper competition. Multi-week traps: if one applies this to a whole season, team rosters change (paper acknowledges), coaching philosophies dominate but personnel-specific classifiers lack data; Type 3 brush screens (Westbrook-Durant OKC) create false positives; over weeks, a team may shift from Type 1 to Type 3, breaking classifier trained on earlier weeks; similarity ranks non-symmetric mean training on GSW to predict HOU may not transfer back; small sample per team means week-to-week variance swamps signal.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is a bit abstract. Need to interpret in context: crisis habit regression = under pressure, teams revert to habitual pick-and-roll (Van Gundy quote: "what we're going to be in when the game's on the line"). Counter-trap = defense anticipates the screen, switches, or goes under; offense may use brush screens to force switches (OKC). Clock = shot clock/game clock pressure reduces time for screen to develop, affecting the 13-frame (0.52s) minimum; end-of-game clock situations may produce non-standard actions not captured by segmentation. The recursive theory of mind: offense models defender's expectation of screen; defender models offense's likelihood of screening; second-order: offense runs a fake screen (Type 3 near-miss) to induce defender overcommitment. The classifier's PPV/sensitivity trade-off reflects this adversarial equilibrium. At 80% PPV, 82% sensitivity means 18% of screens missed (false negatives) — under clock pressure, those missed screens may be exactly the high-leverage ones.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical veto: court dimensions fixed; paint geometry; 10 ft and 12 ft radii; if screener in paint, vetoed by rule 3. Ball not in paint veto. If ball-handler not dribbling (isolation), veto.
- Biomechanical: player speed limits, acceleration, deceleration to set screen; stationary screener factor; minimum time 0.52s; human reaction time; defender caught on screen (distance weighting in first 11 frames).
- Weather: indoor NBA arena, climate-controlled; no weather veto (or negligible). But if outdoor/other league, weather could affect ball handling, not applicable here. State that SportVu indoor optical tracking is immune to weather but vulnerable to occlusion, lighting, camera calibration.
- Breakdown: occlusion breaks Position table; ball z-coordinate may be missing; 25 fps may miss fast screens; frame dropping creates singularity in $t^*$ estimation.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or maybe "Reinforcement Learning Verifiable Rewards"? The user asks for "3 verifiable RLVR veto scenarios + predictions." I should interpret RLVR as a framework where rewards are verifiable from source data. I need to create counterfactual scenarios that could be tested/verified using the paper's data or logic, and give predictions.

Scenario 1: Veto on Type 3 ambiguity. If an action is classified as Type 3 (perimeter movement, ball-handler and another player move opposite directions), the ground-truth label is uncertain because the second player may or may not set a screen. Verifiable condition: pairwise distance $d_{h,s}(t)$ does not dip below a threshold (e.g., screener never within 2 ft of ball-handler) OR $t^*$ occurs in last 20% of action. Prediction: classifier sensitivity on Type 3 drops below global 82%; PPV drops below 52% baseline; AUROC for OKC (heavy Type 3) remains <0.80 (see appendix OKC row max ~0.8232 but column OKC low). Actually from matrix, OKC test set column values are around 0.73-0.79, and row OKC is low. Prediction: for OKC test set, team-specific classifier AUROC $\le 0.7959$ (global) and best specific maybe 0.7890; cross-team classifiers on OKC are all $\le 0.7959$.

Scenario 2: Veto on insufficient training data per team. If a team has fewer than $N_{\min}$ labeled actions (e.g., PHO 31 pos/34 neg), the 150-dim feature space causes overfitting; linear SVM with $C$ selected by 5-fold CV on $\sim 28$ training points per class is unstable. Verifiable: leave-one-out variance of $\mathbf{w}$ exceeds threshold. Prediction: PHO-specific classifier AUROC on PHO test (0.8012) is lower than GSW-specific on GSW (0.8472); augmenting with similar teams (e.g., BOS, CHI) improves PHO AUROC above 0.8012 but below GSW.

Scenario 3: Veto on temporal non-stationarity within a game. If personnel substitution changes the ball-handler/screener dyad mid-game, a classifier trained on first-half actions fails on second-half. Verifiable: split a single game's labeled actions by quarter; train on Q1-Q2, test on Q3-Q4; AUROC drops relative to random split within same game. Prediction: intra-game temporal AUROC < inter-game random AUROC (0.8309); specifically for CLE vs BOS game (all 4 quarters labeled), within-game temporal generalization degrades by at least 0.05 AUROC.

Need to ensure no betting lines. No spreads/totals/moneylines/odds. I can mention probabilities (PPV, sensitivity, AUROC) which are fine. "Odds" is banned; avoid that word.

Need >=1000 words across sections. Let's aim for each section substantial.

THINK_TRACE >=400 words. I'll write maybe 500-600 words.

SOURCE_OPERATORS_AND_EQUATIONS: formal LaTeX with page citations. I'll include equations and cite pages.

RETROCAUSAL_GENEALOGY: historical lineage and multi-week traps. Maybe 200-300 words.

RECURSIVE_THEORY_OF_MIND: crisis habit regression vs counter-trap vs clock. Maybe 200 words.

CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto proof. Maybe 200 words.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios + predictions. Maybe 250 words.

Total should exceed 1000 words easily.

Let's draft carefully.

Important: cite exact [PAGE N] markers and verbatim quotes. I need to include verbatim quotes from source. Examples:
- "[The pick and roll is] what we're going to be in when the game's on the line. [...] I don't care how good you are, you can't take away everything" [1] (Abstract, page 1)
- "contains the {x,y} position of every player on the court and the {x,y,z} coordinates of the ball, at 25 frames a second." (Page 2? Data Segmentation)
- "An action represents a continuous period of time during which every frame fulfills the criteria." (Page 2)
- "The average length of an action was just over 1.5 seconds long." (Page 2)
- "approximately 98% of all the on-ball screens were part of actions and approximately 52% of all actions contained an on-ball screen." (Page 2)
- "If we had any doubt that an on-ball screen occurred, we did not include it in our analysis." (Page 2? Labeling section, before footer 2? Actually labeling starts before footer 2. So page 2.)
- "We define the moment of the screen, $t^*$, as the time when the pairwise distance between the ball-handler and the screener is at a minimum." (Page 3)
- "This screen moment divides the action into two halves: the approach and the departure." (Page 3)
- "If we set the threshold so that we have 80% confidence that a positive label is correct (80% PPV), we can identify 82% of the positively labeled actions (82% sensitivity)." (Page 4)
- "The mean AUROC across all splits was 0.8309." (Page 4)
- "In almost every case the optimal classifier was trained on 56% or less of the available training data." (Page 5)
- "Oklahoma City, a team for which it is more difficult to identify on-ball screens, focuses on forcing switches by running Westbrook-Durant brush screens on the perimeter." (Page 5)
- "To the extent that offenses are dominated by coaching philosophies, our approach makes sense." (Page 6)
- "Unfortunately, at the time of this writing, we did not have enough data to do this [personnel-specific classifiers]." (Page 6/7)

I will cite these with [PAGE N].

Need to be careful: the text has page footers but not explicit [PAGE N] tags. I will use [PAGE 1] etc. as markers. The instruction says "cite exact [PAGE N] markers". Since the source text doesn't literally contain [PAGE N], I'll infer page numbers from footers and use that format. That should satisfy.

Let's structure the final output:

THINK_TRACE
... derivation ...
</THINK_TRACE>

SOURCE_OPERATORS_AND_EQUATIONS
... LaTeX ...
</SOURCE_OPERATORS_AND_EQUATIONS>

RETROCAUSAL_GENEALOGY
...
</RETROCAUSAL_GENEALOGY>

RECURSIVE_THEORY_OF_MIND
...
</RECURSIVE_THEORY_OF_MIND>

CROSS_LAYER_VETO_ADJUDICATION
...
</CROSS_LAYER_VETO_ADJUDICATION>

RLVR_COUNTERFACTUAL_VETOES
...
</RLVR_COUNTERFACTUAL_VETOES>

No markdown outside? The user wants exact XML sections. I'll wrap content in those tags.

Let's write.

Word count estimation:
THINK_TRACE: ~550 words.
SOURCE_OPERATORS_AND_EQUATIONS: ~400 words (equations + text).
RETROCAUSAL_GENEALOGY: ~250 words.
RECURSIVE_THEORY_OF_MIND: ~250 words.
CROSS_LAYER_VETO_ADJUDICATION: ~250 words.
RLVR_COUNTERFACTUAL_VETOES: ~300 words.
Total ~2000 words. Good.

Need to ensure LaTeX is formal. Use \[ \] or $ $. Avoid toy equations. All equations must be grounded in the paper.

Let's draft THINK_TRACE:

Start with multi-hop: raw SportVu stream at 25 Hz -> position table -> action segmentation via Figure 1 rule set -> 30 continuous features -> 150-dim binary vector -> SVM -> team similarity -> augmented classifiers. Gray zones: labeling subjectivity ("if we had any doubt... did not include"), Type 3 ambiguity, non-symmetric similarity, small n per team, personnel changes, 13-frame minimum = 0.52 s vs average action 1.5 s, ball not in paint excludes post-up screens, 10 ft screener proximity may miss off-ball screens that become on-ball, etc.

Derivation of frame budget: $13/25 = 0.52$ s. Average action 1.5 s means ~37.5 frames; screen moment extraction splits into approach/departure. If screen happens very early or late, one half has few frames, feature estimates (mean/min/max/sum) become high-variance. Singularity: if $t^* = t_0$ or $t_1$, approach/departure empty → undefined statistics. This is a breakdown regime.

Classifier: linear SVM in 150-dim space. With ~28 examples per class per team (from page 5: 28 from each of 8 most similar teams = 224 total; but per team original training 14 pos/14 neg = 28 total). High-dimensional, low-sample. Risk of overfitting mitigated by linear kernel and quintile discretization but not eliminated.

AUROC 0.8309 mean across 200 splits; no std dev reported → gray zone on variance. PPV/sensitivity operating point chosen at 80% PPV → 82% sensitivity. False negative rate 18% means nearly 1 in 5 screens missed; in crunch time (Van Gundy quote) those are high-leverage.

Team similarity: non-symmetric. Training on GSW to predict HOU may differ from HOU to GSW. Appendix matrix shows e.g. GSW classifier on HOU test = 0.8348, HOU classifier on GSW test = 0.8348 (symmetric here?) Actually matrix row GSW col HOU = 0.8348; row HOU col GSW = 0.8348. But row OKC col GSW = 0.7441; row GSW col OKC = 0.8092. So asymmetric. Non-similarity can hurt.

Now write it out.

For SOURCE_OPERATORS_AND_EQUATIONS, list operators and equations with page citations.

Define:
- $\mathcal{P} = \{p_i(t) = (x_i(t),y_i(t))\}$ etc.
- Action predicate $\mathcal{A}(t)$.
- Temporal constraint: $\forall t \in [t_0,t_1], \mathcal{A}(t)=1$, $t_1-t_0 \ge 13/f_s$.
- $t^* = \arg\min_t \|p_h(t)-p_s(t)\|_2$.
- Pairwise features: for pair $(u,v)$, time series $d_{uv}(t)$. Five scalars per half (approach/departure) → 10 per pair? Wait paper says 5 continuous values per pairwise distance time series, not per half? Let's re-read: "Given the pairwise distance between player and player, and we summarize each time series using 5 continuous values". Then "We repeat the above to characterize the distance between each player and the basket... Extracting the features listed above for each set of pairwise distance results in 30 continuous features (five for each pair)." There are 4 entities (ball-handler, screener, on-ball defender, basket) → 6 pairwise distances. 6 × 5 = 30. So the 5 values summarize the whole time series, not split by approach/departure? But Figure 4 says screen moment divides action into two halves and extract features before and after. Hmm. There's a slight inconsistency or the table may include before/after. The garbled table shows 5 columns with formulas. Maybe the 5 features are: min before, min after, mean before, mean after, something else? Actually if 6 pairs × 5 = 30, and they mention before/after, perhaps each pair yields 5 features that capture both halves somehow (e.g., min distance, time of min, distance at start, distance at end, change). Since exact formulas are obscured in text extraction (Table 1 shows blank/garbled), I must not invent. I will state: the paper extracts five continuous statistics per pairwise distance series (Table 1, [PAGE 3]); the exact scalar functionals are not fully legible in the provided extraction, but they are applied to the full series and/or the approach/departure split defined by $t^*$ [PAGE 3]. Then discretized into quintiles → 5 binary features per continuous feature → 150-dim vector.

Equation for SVM:
$\hat{y} = \text{sign}(\mathbf{w}^\top \boldsymbol{\phi}(\mathbf{x}) + b)$, $\boldsymbol{\phi} \in \{0,1\}^{150}$.

AUROC definition.

PPV/Sensitivity definitions.

Breakdown regimes: $n_{\text{team}} \ll d$; occlusion; $t^*$ boundary; non-stationarity.

Now RETROCAUSAL_GENEALOGY:
- Lineage: Van Gundy quote via Abrams NYT 2009 [1] establishes pick-and-roll as crunch-time default; SportVu (2012-13) provides data; MIT paper competition 2014; SVM (Cortes & Vapnik 1995 [2]); LIBSVM (Chang & Lin 2011 [3]).
- Multi-week traps: roster turnover invalidates team-specific models across weeks; coaching philosophy stable but personnel not; OKC's Westbrook-Durant brush screens create persistent Type 3 false positives that a global classifier cannot distinguish; as season progresses, teams adjust (e.g., if GSW/HOU spacing is exploited, defenses change), causing concept drift; similarity ranks computed on 2012-13 data may not generalize to 2013-14; 21 quarters from 14 games is too few for multi-week stability.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: under clock pressure, offense regresses to pick-and-roll (Van Gundy quote). Defender anticipates this and prepares to counter-trap (switch, hedge, go under). Offense second-guesses: may run a brush screen or fake screen (Type 3 near-screen) to induce defender overcommitment. This creates an adversarial fixed point where the classifier's labels reflect not just physical screen occurrence but strategic deception.
- Clock: shot clock and game clock compress the action window; the 13-frame minimum (0.52 s) may exclude rapid late-clock screens or include non-screen dribble maneuvers. End-of-quarter actions in labeled data (4th quarters) are especially vulnerable.
- Recursive loop: classifier output influences coaching (if known), coaching changes play selection, changing the data distribution the classifier was trained on.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical veto: court geometry (paint boundaries), ball not in paint, screener within 10 ft but not in paint, screener no more than 2 ft further from basket than ball-handler, defender within 12 ft, ball-handler dribbling. If any fails, no action.
- Biomechanical: 25 fps sampling; minimum 0.52 s action; human acceleration/deceleration limits for setting a legal screen; stationary screener factor; first 11 frames defender weighting (0.44 s) captures initial defensive assignment before screen contact.
- Weather: indoor arena, climate-controlled; no meteorological veto. Optical tracking failure modes: occlusion, camera calibration, ball z-coordinate noise. If occlusion breaks position continuity, the 13-frame consecutive constraint fails → veto.
- Singularity: if $t^*$ at boundary, approach/departure statistics undefined; if ball in paint, segmentation excludes post plays; if no dribble event in Event table, frame rejected.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable scenarios and predictions.

Scenario A: Type 3 screen/non-screen boundary. Verifiable: take all Type 3 actions from OKC test set (or all teams), compute pairwise distance minimum $d_{hs}(t^*)$. If $d_{hs}(t^*) > 2.5$ ft (or some threshold) and label is positive, it's a brush screen where contact may not be close. Prediction: classifier PPV on Type 3 subset falls below global PPV 0.80 operating point (and below 0.52 segmentation PPV); sensitivity on Type 3 < 0.82; AUROC for OKC column $\le 0.7959$ (from matrix). Specifically, OKC-specific classifier on OKC test = 0.7890 [PAGE 9], below global 0.8309.

Scenario B: Low n per team overfitting. Verifiable: PHO has only 31 positive / 34 negative actions [PAGE 9]; train linear SVM on 14 pos/14 neg (per team split) → $n=28$, $d=150$. Compute stability via bootstrap: if $\|\mathbf{w}^{(b)} - \mathbf{w}\|_2$ large. Prediction: PHO-specific AUROC on PHO test (0.8012) < GSW-specific on GSW test (0.8472); augmenting PHO training with similar teams (BOS, CHI per similarity?) may improve but not reach GSW levels.

Scenario C: Temporal non-stationarity within game. Verifiable: CLE-BOS game has all 4 quarters labeled [PAGE 8]. Train on Q1-Q2 actions from CLE-BOS, test on Q3-Q4. Prediction: within-game temporal AUROC < 0.8309 global random-split mean; degradation at least 0.05 because second-half substitutions alter ball-handler/screener identities and the paper notes insufficient data for personnel-specific classifiers [PAGE 6/7].

Need to avoid "odds". I can say "probability".

Check for any banned words: spread, total, moneyline, odds. I won't use them.

Now let's write the final output. Ensure word count. I'll aim for rich detail.

One concern: The user said "DRIVE SOURCE: /GSE-Research/sports-research-papers/md/2014 Automatically Recognizing On-Ball Screens.md PAGES: 8". But the text goes to page 9 (Appendix). That's fine.

Let's ensure I cite page numbers correctly based on footers:
- Figure 1 rule-based algorithm: appears before footer "2" but after Section 2 start. I'll cite [PAGE 2] since footer 2 is near it. Actually Abstract and Intro are page 1. Data Segmentation starts page 1? The footer "2" appears after the PPV 52% paragraph and Figure 2. So page 2 includes Figure 1, segmentation discussion, Figure 2. I'll cite [PAGE 2] for Figure 1 criteria and [PAGE 2] for average action length and 98%/52% stats.
- Labeling: starts before footer 2? The text shows "# 3.1 Labeling the Data Figure 3..." then "2014 Research Paper Competition Presented by:" then "2". So footer 2 is after 3.1 heading but before content? That's weird. Probably page 2 contains Section 3.1. I'll cite [PAGE 2] for labeling doubts/no handoffs.
- Feature extraction / Table 1 / screen moment: footer "3" appears after Table 1 discussion. So [PAGE 3] for these.
- Performance / 80% PPV 82% sensitivity / AUROC 0.8309: footer "4" after 3.5 footnotes. So [PAGE 4].
- Team similarity / Figure 7 / GSW-HOU-OKC / 56%: footer "5" after 4.1 heading. So [PAGE 5] for these.
- Limitations start: footer "6" after Section 6 heading? Then "Despite these limitations..." footer "7". I'll cite [PAGE 6] for coaching philosophy/personnel-specific, [PAGE 7] for references maybe. Actually references start after footer 7. Appendix starts footer 8. Then footer 9 for matrix. Good.

Let's craft.

Need to be careful with verbatim quotes. I'll include them in quotation marks with citations.

Let's write now.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper’s pipeline is a sequence of deterministic and statistical filters applied to STATS SportVu optical-tracking data. Raw input is a Position table at $f_s = 25$ frames per second, i.e. $\Delta t = 0.04$ s per frame, containing $\{x,y\}$ for all ten players and $\{x,y,z\}$ for the ball [PAGE 2]. An “action” is declared only when every frame in a contiguous interval satisfies the Figure 1 rule conjunction: a dribbling ball-handler exists; an offensive screener lies within 10 ft of the ball-handler; the screener is not in or near the paint; the screener is at most 2 ft farther from the basket than the ball-handler; a defensive on-ball defender is within 12 ft of the ball-handler; and the ball is not in the paint [PAGE 2]. This must hold for $\ge 13$ consecutive frames with a fixed ball-handler [PAGE 2]. Temporally, 13 frames at 25 Hz equals $0.52$ s, which is far shorter than the observed mean action length of just over 1.5 seconds [PAGE 2]. Thus the segmentation window admits brief pick-and-roll engagements while excluding prolonged isolation or post-up sequences.

The first-hop output is a set of action candidates. The authors report that this rule-based segmenter captures roughly 98% of all on-ball screens but has a positive predictive value (PPV) of only about 52%: about half of all segmented actions are Type 2 (establishing half-court positions with no screen) or Type 3 (perimeter movement that may or may not include a screen) [PAGE 2; Figure 2, PAGE 2]. This is the primary gray zone: the boundary between a genuine screen and a non-screen proximity event is not sharp in the position data alone.

The second hop extracts 30 continuous features from six pairwise distance time series among ball-handler, screener, on-ball defender, and basket. The “screen moment” $t^*$ is defined as the time of minimum ball-handler-to-screener distance, splitting each action into an approach and a departure [PAGE 3]. Five continuous statistics summarize each series (Table 1, PAGE 3), yielding six pairs $\times$ five values = 30 continuous features. Each continuous feature is then discretized into five binary quintile indicators, producing a 150-dimensional binary feature vector per action [PAGE 3]. Because the exact functional forms in Table 1 are obscured in the text extraction, I treat them as summary functionals (e.g., location, dispersion, extrema) rather than inventing ratios.

The third hop trains a linear support vector machine (SVM) via LIBSVM with cost parameter $C$ selected by 5-fold cross-validation [PAGE 4]. The classifier learns $\mathbf{w} \in \mathbb{R}^{150}$ and scalar $b$, labeling a new action by $\text{sign}(\mathbf{w}^\top \boldsymbol{\phi} + b)$ where $\boldsymbol{\phi} \in \{0,1\}^{150}$ [PAGE 4]. Performance is summarized by AUROC, defined as the probability that a randomly drawn positive example scores higher than a randomly drawn negative example [PAGE 4]. Across 200 random train-test splits, mean AUROC was 0.8309 [PAGE 4]. At an operating point of 80% PPV, sensitivity reaches 82% [PAGE 4], implying an 18% false-negative rate on screened actions.

Critical gray zones: (1) labeling was performed by the authors, who excluded any screen about which they had doubt and did not count handoffs as screens [PAGE 2], introducing conservative label noise; (2) Type 3 actions are intrinsically ambiguous—“that second offensive player may or may not set a screen” [PAGE 2]—so PPV is structurally capped for perimeter-heavy offenses; (3) team-specific classifiers are built from only 14 positive and 14 negative examples per team in the base split [PAGE 5], a severe $n \ll d$ regime ($28$ samples vs. 150 dimensions); (4) similarity is explicitly non-symmetric—if Team A’s classifier works on Team B, the reverse need not hold [PAGE 5]; (5) rosters and personnel change within a season, and the authors state they lacked enough data for personnel-specific classifiers [PAGE 6–7], violating stationarity across weeks. The optimal augmented team classifier used 56% or less of available training data in almost every case [PAGE 5], indicating that pooling dissimilar teams degrades performance more than sample reduction helps.

A singularity/breakdown regime occurs when the screen moment $t^*$ falls at either boundary of the action interval, rendering the approach or departure set empty and making the pre/post feature statistics undefined. Another breakdown occurs if the ball enters the paint, because the segmentation rule explicitly excludes that region [PAGE 2], thereby vetoing post-entry pick-and-rolls regardless of screen quality. Finally, occlusion or dropped frames in the SportVu stream break the “13 consecutive frames” requirement, causing valid screens to be dropped before the classifier ever sees them.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX, SI/information/probability units, assumptions, page citations, and breakdown regimes.

Sampling and coordinate operators [PAGE 2]:
\[
p_i(t) = (x_i(t),y_i(t)) \in \mathbb{R}^2,\quad
b(t) = (x_b(t),y_b(t),z_b(t)) \in \mathbb{R}^3,\quad
f_s = 25\,\text{Hz},\quad \Delta t = f_s^{-1} = 0.04\,\text{s}.
\]

Action predicate from Figure 1 [PAGE 2]:
\[
\mathbb{1}_{\text{action}}(t) = 
\mathbb{1}\{\exists h: \text{dribble}(h,t)\}
\land
\mathbb{1}\{\exists s \neq h:\ \|p_s(t)-p_h(t)\|_2 \le 10\,\text{ft}\}
\land
\mathbb{1}\{s \notin \text{paint} \cup \mathcal{N}_{\text{paint}}\}
\land
\mathbb{1}\{\|p_s(t)-\text{basket}\|_2 \le \|p_h(t)-\text{basket}\|_2 + 2\,\text{ft}\}
\land
\mathbb{1}\{\exists d:\ \|p_d(t)-p_h(t)\|_2 \le 12\,\text{ft}\}
\land
\mathbb{1}\{b(t) \notin \text{paint}\}.
\]
An action interval $[t_0,t_1]$ is valid iff $\mathbb{1}_{\text{action}}(t)=1$ for all $t \in [t_0,t_1]$, $h$ is constant, and $t_1 - t_0 \ge 13\Delta t = 0.52\,\text{s}$ [PAGE 2].

Screen moment and pairwise distances [PAGE 3]:
\[
t^* = \arg\min_{t \in [t_0,t_1]} \|p_h(t)-p_s(t)\|_2,\qquad
d_{uv}(t) = \|p_u(t)-p_v(t)\|_2,
\]
for $\{u,v\} \subset \{h,s,d,\text{basket}\}$, six pairs total. Five continuous summary values are extracted per pair (Table 1, PAGE 3), giving 30 continuous features; quintile discretization yields $\boldsymbol{\phi}(a) \in \{0,1\}^{150}$ per action $a$ [PAGE 3].

Linear SVM decision rule [PAGE 4]:
\[
\hat{y} = \operatorname{sign}\!\big(\mathbf{w}^{\top}\boldsymbol{\phi} + b\big),\qquad
\mathbf{w}\in\mathbb{R}^{150},\ b\in\mathbb{R}.
\]
Cost parameter $C$ tuned by 5-fold cross-validation on the training split via LIBSVM [PAGE 4].

Probability/performance units [PAGE 4]:
\[
\text{sensitivity} = \frac{TP}{TP+FN},\qquad
\text{PPV} = \frac{TP}{TP+FP},\qquad
\text{AUROC} = \Pr\!\big(f(x_+) > f(x_-)\big).
\]
Mean AUROC $= 0.8309$ over 200 splits [PAGE 4]. Operating point: 80% PPV $\leftrightarrow$ 82% sensitivity [PAGE 4], so false-negative rate on screened actions is 18%.

Team-similarity operator [PAGE 5]:
\[
S(A \to B) = \text{AUROC}\big(\text{classifier trained on }A\text{, tested on }B\big),
\]
with $S(A\to B) \neq S(B\to A)$ generally [PAGE 5]. Augmented classifiers train on nested similarity-ranked subsets; optimal size $\le 56\%$ of available data in almost every case [PAGE 5].

Breakdown and singularity regimes:
1. Boundary screen moment: if $t^* = t_0$ or $t^* = t_1$, the approach or departure subset is empty, making pre/post screen statistics undefined [PAGE 3].
2. Paint exclusion: if $b(t) \in \text{paint}$ or screener is in/near paint, the action predicate is false by construction, vetoing post-entry screens [PAGE 2].
3. High-dimensional, low-sample regime: per-team base training sets contain 14 positive and 14 negative examples ($n=28$) in a 150-dimensional feature space [PAGE 5]; risk of variance-dominated $\mathbf{w}$.
4. Non-stationarity: personnel changes during a game or season invalidate fixed team classifiers; authors lacked data for personnel-specific models [PAGE 6–7].
5. Frame dropout/occlusion breaks the consecutive-13-frames constraint, causing valid screens to be lost before feature extraction [PAGE 2].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week traps.

The intellectual lineage begins with Stan Van Gundy’s observation, cited via Abrams (The New York Times, 19 Nov. 2009), that the pick-and-roll is the default crunch-time weapon: “[The pick and roll is] what we’re going to be in when the game’s on the line. [...] I don’t care how good you are, you can’t take away everything” [PAGE 1]. This establishes the pick-and-roll as a high-leverage, high-pressure play, which motivates automation. The methodological lineage runs from Cortes and Vapnik’s support vector networks (1995) [PAGE 7] through LIBSVM (Chang & Lin, 2011) [PAGE 7] to the MIT 2014 research paper competition, which supplied the venue for this work [PAGE 1]. The data lineage is the STATS SportVu system deployed across NBA arenas during the 2012–2013 season, producing 25 Hz player and ball coordinates [PAGE 2].

Multi-week traps arise from three interacting instabilities. First, roster turnover: the authors explicitly note that teams change personnel during a game and across a season, and that they lacked sufficient data for personnel-specific classifiers [PAGE 6–7]. A team-specific classifier trained on November 2012 footage may face a different ball-handler/screener dyad by March 2013. Second, strategic adaptation: Golden State and Houston are easier to classify because they emphasize spacing and generate few Type 3 perimeter actions, whereas Oklahoma City runs Westbrook–Durant brush screens on the perimeter, producing many Type 3 actions that blur the screen/non-screen boundary [PAGE 5]. If opponents adjust to GSW/HOU spacing over a multi-week horizon, those teams’ screen distributions will drift, invalidating a static classifier. Third, non-symmetric similarity: training on Golden State to predict Houston need not generalize in reverse [PAGE 5], so a weekly pipeline that transfers models based on one-directional AUROC can systematically misfire. The 21-quarter, 14-game sample from a single season is too thin to estimate these week-to-week transition dynamics, creating a concept-drift trap for any production deployment spanning multiple weeks.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock.

Under clock pressure, offensive habit regression converges on the pick-and-roll as the default play, echoing Van Gundy’s crunch-time assertion [PAGE 1]. The defender, anticipating this regression, deploys a counter-trap: switching, hedging, or going under the screen to nullify the advantage. The offense then recurses: it may run a brush screen or a perimeter feint (a Type 3 action) not to set a hard screen but to induce the defender into overcommitting to the counter-trap [PAGE 5]. This second-order intentionality means the physical event “screen” is entangled with the defender’s belief about the offense’s intent, and the classifier’s labels capture only the observable proxy, not the strategic game tree.

The clock layer imposes a hard constraint on observability. The segmentation rule requires 13 consecutive frames, or 0.52 s, of stable screen geometry [PAGE 2], yet the mean action lasts just over 1.5 s [PAGE 2]. In late-shot-clock or end-of-game situations, the action window compresses; a rapid screen-and-roll may not satisfy the 13-frame minimum, or a non-screen dribble maneuver may briefly mimic screen proximity, generating false positives and false negatives. The labeled dataset includes multiple fourth quarters [PAGE 8], so end-of-clock selection bias is present: the model’s 82% sensitivity at 80% PPV [PAGE 4] may overstate performance in the exact high-leverage moments Van Gundy described, because those moments are temporally compressed and strategically deceptive.

Recursively, if a coaching staff knows an opponent uses this classifier to scout pick-and-roll tendencies, they can alter screen timing, spacing, or personnel to shift the action distribution, causing the classifier’s operating point to migrate away from the validated 80/82 regime. The theory of mind loop is therefore: offense models defender’s screen expectation; defender models offense’s screen likelihood; offense inserts decoy Type 3 motion; classifier observes only distance time series and misattributes intent. The 18% false-negative rate at the chosen threshold [PAGE 4] is the measurable residue of this recursive adversarial equilibrium.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and environmental veto layers.

Physical veto (court geometry and event logic): the Figure 1 rule set rejects any frame where the ball is in the paint, where the screener is in or near the paint, where no dribbling ball-handler exists, where the screener is farther than 10 ft from the ball-handler, where the screener is more than 2 ft farther from the basket than the ball-handler, or where no defender is within 12 ft of the ball-handler [PAGE 2]. If any predicate fails, the action is vetoed before feature extraction. This excludes post-entry pick-and-rolls and isolation plays by design.

Biomechanical veto (human motion and sampling): the 25 Hz sampling rate and 13-frame minimum impose a 0.52 s temporal floor [PAGE 2]. A legal screen requires the screener to be stationary or moving laterally into a legal position; the paper’s screener selection weights stationarity, early approach, and proximity [PAGE 2]. The on-ball defender is identified using the first 11 frames (0.44 s) with distance weighted toward early frames to account for defenders caught on the screen [PAGE 2]. Human acceleration limits mean a defender cannot instantaneously recover after contact, so the 12 ft proximity window captures the defensive assignment before screen contact alters positioning.

Weather/environmental veto: NBA games occur in climate-controlled indoor arenas, so there is no meteorological veto (wind, temperature, precipitation are null). The relevant environmental failure mode is optical-tracking degradation: occlusion, camera calibration error, or missing ball z-coordinates break the Position table continuity [PAGE 2]. If a dropped frame interrupts the 13-frame consecutive requirement, the action is vetoed even if a screen physically occurred.

Singularity/breakdown conditions: if the screen moment $t^*$ coincides with $t_0$ or $t_1$, the approach or departure series is empty and the five summary statistics per pair are undefined [PAGE 3]. If the ball-handler changes mid-interval, the fixed-ball-handler constraint fails and the action is split or rejected [PAGE 2]. If roster substitution changes the identities of $h$, $s$, or $d$ between training and test weeks, the team-specific classifier’s feature distribution shifts, violating stationarity [PAGE 6–7].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable reinforcement-learning verifiable reward (RLVR) counterfactual veto scenarios with testable predictions.

Scenario 1 — Type 3 brush-screen veto. Verifiable condition: isolate all Type 3 actions (perimeter movement, ball-handler and second offensive player moving in opposite directions) from the Oklahoma City test set and compute the minimum ball-handler-to-screener distance $d_{hs}(t^*)$ [PAGE 3, PAGE 5]. Veto any positive-labeled Type 3 action where $d_{hs}(t^*)$ does not fall into the close-contact regime associated with classic Type 1 screens, because Oklahoma City’s Westbrook–Durant perimeter brush screens generate many near-screen non-events [PAGE 5]. Prediction: the classifier’s sensitivity on the Type 3 subset will fall below the global 82% operating point [PAGE 4], and PPV will collapse toward the segmentation baseline of 52% [PAGE 2]; in the appendix matrix, every classifier’s AUROC on the OKC test column is at or below 0.7959 (global), with the OKC-specific self-test at 0.7890 [PAGE 9], confirming the cross-team difficulty.

Scenario 2 — Low-sample per-team veto. Verifiable condition: Phoenix has only 31 positive and 34 negative labeled actions [PAGE 9]; the base per-team split provides 14 positive and 14 negative training examples in a 150-dimensional feature space [PAGE 5]. Veto any team-specific prediction for a team with $n \ll d$ unless bootstrap resampling shows low variance in $\mathbf{w}$ (e.g., $\|\mathbf{w}^{(b)} - \mathbf{w}\|_2$ below a stability threshold across 100 bootstrap replicates). Prediction: PHO-specific AUROC on PHO test data (0.8012) will be materially below GSW-specific AUROC on GSW test data (0.8472) [PAGE 9], and augmenting PHO training with similar teams will improve but not equal the GSW self-classifier, consistent with the finding that optimal classifiers used $\le 56\%$ of available data [PAGE 5].

Scenario 3 — Within-game temporal non-stationarity veto. Verifiable condition: the Cleveland–Boston game has all four quarters labeled [PAGE 8]. Train on Q1–Q2 actions from that game and test on Q3–Q4 actions from the same game, keeping teams fixed. Veto the cross-quarter transfer if AUROC drops by more than 0.05 relative to the global mean random-split AUROC of 0.8309 [PAGE 4]. Prediction: because personnel substitutions alter the ball-handler/screener dyad and the authors lacked data for personnel-specific classifiers [PAGE 6–7], intra-game temporal generalization will underperform inter-game random splitting, demonstrating that a classifier trained on early-game actions cannot be safely redeployed late in the same game without retraining.
</RLVR_COUNTERFACTUAL_VETOES>