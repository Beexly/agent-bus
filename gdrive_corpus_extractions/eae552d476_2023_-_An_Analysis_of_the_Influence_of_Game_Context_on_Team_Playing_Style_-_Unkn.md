---
source: "2023 - An Analysis of the Influence of Game Context on Team Playing Style - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/Hudl StatsBomb/Research Competitions/2023"
pages: 14
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5621
---

<NATIVE_REASONING>
The user wants me to analyze a specific research paper about soccer game context and playing style. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to deeply analyze the provided source text (pages 1-17 of the paper). Let me trace through the content:

Paper: "An Analysis of the Influence of Game Context on Team Playing Style" by Deniz Can Oruç et al., KU Leuven.
- Pages 1-17 provided.
- Key sections: Introduction, Modeling Passing Dynamics, Data Description, Modeling Passing Dynamics (SoccerMap), Game State Factors, Predicting how game state impacts pass decision, Adapting SoccerMap, Experiment and Results, Practical Applications (Figures 3-4), Describing how game state alters passing strategy (Encoder-Decoder), Experiment and Results, Practical Applications (Figures 5-7), Conclusions.

Key technical details:
- Data: StatsBomb 360 tactical event stream data. 2021/22 PL (162,991 passes), 2022/23 PL (164,423 passes), EURO2020 (19,544 passes for eval). Filter: foot passes only, no dead-ball, origin/dest within visible 360 snapshot. Teams top-10 only.
- SPADL representation [18].
- Passing dynamics shaped by: (1) Phase of play (ball location), (2) Available passing options (teammate/opponent positioning).
- SoccerMap [17]: 9-channel spatiotemporal representation from 360 snapshot + two preceding actions [21]:
  1. Sparse matrix attacking team locations
  2. Sparse matrix defending team locations
  3. Dense matrix distance to ball
  4. Dense matrix distance to defending goal
  5. Dense matrix sin(angle to ball)
  6. Dense matrix cos(angle to ball)
  7. Dense matrix distance to goal (wait, #4 and #7 seem similar, maybe one is to attacking goal? Text says "between every location and the goal" for #7)
  8. x component ball velocity
  9. y component ball velocity
- CNN with scales 1x, 1/2x, 1/4x. Fusion layers. Sigmoid activation. Log-loss training. Binary mask for destination cell.
- Game state factors:
  1. Venue: binary home/away [22]
  2. Scoreline: six groups: -3, -2, -1, draw, +1, +2, +3 (that's 7 categories) [23]
  3. Time remaining: quarters, last quarter subdivided into 5-min intervals [24]
  - One-hot encoding: 16-dimensional vector (1 venue + 7 scoreline + 8 time).
- Modified SoccerMap:
  - Concatenate game state + team identity (23 teams, one-hot) -> 24-dimensional? Wait text says 23-dimensional one-hot for team. So 16 + 23 = 39 dimensions? Then compressed to 21-dimensional vector via fully connected layer. Then each variable treated as 68x104 channel, replicated across pitch cells. Concatenated with original 9-channel input -> 30x68x104 matrix. Then 1x1 convolutions to blend and reduce back to 9 channels.
  - Comparison to Pleuler [25]: parallel network, latent embeddings reshaped into surfaces. Problems: creates artificial spatial behavior, locality via convolution. Their approach: same embedding at all locations, 1x1 conv without neighbor consideration.
- Training: learning rate 1e-6, batch 32, early stopping patience 10, delta 1e-5, max 500 epochs. 20% validation.
- Table 1: SoccerMap log-loss 5.989, Brier 0.988, 271k params. Modified: 5.961, 0.987, 275k params. Improvement is tiny (0.028 log-loss).
- Practical app: Liverpool home tied, 30-45 min vs 85-90 min. Early: cautious, backward pass to central defender. Late: direct offensive, fullbacks/offensive midfielders. Arsenal away vs home, minutes 15-30 tied: away = patient center build-up; home = direct to flanks.
- Encoder-Decoder:
  - Input: SoccerMap probability surface, actual pass mask, team info.
  - Output: predict game state.
  - Encoder: Convolutional Encoder (3 conv layers on 2D inputs -> flattened), concatenated with team info, Combined Encoder (3 FC layers) -> 16-dim latent space.
  - Decoder: expand latent to 256-dim via 3 FC layers. Predictor network: joint (3 parallel nets, 3 FC each) or separate (3 FC layers).
  - Loss: binary cross entropy home/away, categorical cross entropy time period, categorical cross entropy goal difference.
  - Challenges: imbalance (goal diff zero common). Two approaches: sample max 2000 per game state, or inverse frequency weighting. Loss scale normalization for joint model.
- Training encoder-decoder: SoccerMap on 2021/22 PL. Encoder-decoder eval on 2022/23 PL. Adam optimizer. LR 5e-6 for SoccerMap, 1e-6 for encoder-decoder. Batch 32. 20% validation.
- Table 2: Separate model accuracy: home/away 0.5056, goal diff 0.1291, time 0.1824. Joint: 0.5122, 0.1027, 0.1081. Random: 0.5, 0.143, 0.125.
  - Note: goal diff random is 0.143 (1/7). Time random is 0.125 (1/8). Separate model time 0.1824 > random 0.125. Goal diff separate 0.1291 < random 0.143! That's a key finding: separate model performs worse than random on goal difference.
- Table 3: sampling vs weighting. Sampling only: home/away 0.5108, goal diff 0.3066, time 0.1421. Weighting only: 0.5085, 0.0916, 0.1421. Both: 0.5056, 0.1291, 0.1824.
- Practical apps: t-SNE Figure 5 shows team clustering. Figure 6: time influence Q1 vs Q4. Fulham least variable, Bournemouth and Liverpool most. Figure 7: venue influence. Aston Villa least dependent, Liverpool and Bournemouth most affected.
- Conclusions: imbalance huge problem, joint loss harder, separate better but misses interactions, signal too sparse due to fine-grained pitch resolution.

Now I need to write the response with the exact XML sections.

Constraints:
- No betting lines. This is a soccer tactics paper, so betting lines shouldn't naturally appear, but I must be careful not to mention odds, spreads, etc.
- No toy equations. Must use formal LaTeX. Units: information (bits, nats?), probability, SI. Exact singularity/breakdown regimes.
- Page citations: [PAGE N] markers and verbatim quotes.
- >= 1000 words total across sections. THINK_TRACE >= 400 words.

Let me plan each section:

<THINK_TRACE> (>=400 words)
Deep multi-hop derivation:
- Hop 1: Data pipeline: StatsBomb 360 -> SPADL -> filters -> 327k passes. Top-10 teams only introduces selection bias.
- Hop 2: SoccerMap 9 channels -> CNN scales -> pass probability surface p(x,y|context). Log-loss L = -Σ [m log p + (1-m) log(1-p)]? Actually binary cross entropy over pitch grid with mask.
- Hop 3: Game state encoding: venue (1 bit), scoreline (7 bits), time (8 bits) = 16 bits. Team ID 23 bits. Concatenated -> 39 -> FC to 21 -> broadcast to 68x104 -> concatenate with 9 channels -> 30 channels -> 1x1 conv to 9 channels.
- Hop 4: Modified SoccerMap results: log-loss 5.989 -> 5.961 (Δ=0.028), Brier 0.988 -> 0.987. Parameter increase 271k -> 275k (+4k). Marginal gain suggests weak identifiability of game state signal in pass data.
- Hop 5: Encoder-decoder inverts mapping: from pass surface + mask + team -> game state. Latent dim 16. Separate decoders outperform joint. Random baselines: home/away 0.5, goal diff 1/7≈0.143, time 1/8=0.125.
- Hop 6: Separate model goal diff accuracy 0.1291 < random 0.143. This is a breakdown regime: the model cannot infer goal difference from passes better than chance. Time accuracy 0.1824 > 0.125, weak signal.
- Hop 7: Imbalance handling: sampling max 2000/state vs inverse weighting. Sampling-only gives goal diff 0.3066 (huge jump), but average accuracy highest? Wait Table 3 says sampling only has goal diff 0.3066 which is much higher, but text says "model with only sampling has highest average accuracy" — let's check: (0.5108+0.3066+0.1421)/3 = 0.3198. Both: (0.5056+0.1291+0.1824)/3 = 0.2724. Weighting: (0.5085+0.0916+0.1421)/3 = 0.2474. So sampling only is best on average but distortive.
- Hop 8: Practical findings: Liverpool/Bournemouth most time- and venue-sensitive; Fulham/Aston Villa most stable. t-SNE clustering by team.
- Gray-zone audit: The paper conflates "game state" with scoreline/time/venue but omits opposition strength, red cards, injuries, weather. The 68x104 grid is fine-grained -> sparse signal. EURO2020 eval has different lineups. Top-10 filter restricts generalizability.

Need to cite pages. The text has page numbers 1-17 at bottom. I'll reference [PAGE 1], [PAGE 3], etc.

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX:
- Define state space S = V × G × T where V∈{0,1}, G∈{-3,...,3}, T∈{1,...,8}. One-hot φ(s)∈{0,1}^{16}. Team τ∈{1,...,23}, one-hot ψ(τ)∈{0,1}^{23}. Combined c = [φ(s); ψ(τ)] ∈ {0,1}^{39}. FC: z = W_c c + b_c ∈ R^{21}. Broadcast B(z)_{h,w} = z for all h,w ∈ {1..68}×{1..104}. Input X ∈ R^{9×68×104}. Augmented Ã = [X; B(z)] ∈ R^{30×68×104}. 1×1 conv: Ã' = Conv1x1(Ã) ∈ R^{9×68×104}.
- SoccerMap probability surface: P = σ(F(X)) where F is CNN hierarchy (scales 1, 1/2, 1/4). Loss: L_pass = -Σ_{i,j} M_{ij} [ y_{ij} log P_{ij} + (1-y_{ij}) log(1-P_{ij}) ]? Actually text: "cell corresponding to destination selected by multiplying probability surface with binary masked matrix. trained using log-loss." So cross entropy over grid cells: L = -log P_{dest} perhaps, or cross entropy with one-hot destination. Brier score: BS = (1/N) Σ (P_{dest} - 1)^2 + Σ_{other} P^2? Multi-class Brier: (1/N)Σ_k (p_k - y_k)^2.
- Encoder: E_conv: R^{2×68×104} → R^{d_flat}. E_comb: [E_conv(surface, mask); ψ(τ)] → R^{16}. Latent ℓ ∈ R^{16}. Decoder D: R^{16} → R^{256} → predictors.
- Losses: L_HA = BCE(ŵ, w), L_GD = CCE(ĝ, g), L_T = CCE(ŷ, t). Joint: L_joint = (1/3)(L_HA/σ_HA + L_GD/σ_GD + L_T/σ_T) normalized.
- Random baselines: P_random(HA)=0.5, P_random(GD)=1/7≈0.142857, P_random(T)=1/8=0.125.
- Table values with units: accuracy dimensionless [0,1]. Log-loss in nats. Brier score dimensionless. Parameters count dimensionless.
- Breakdown regimes: (1) Goal difference prediction accuracy 0.1291 < 0.143 random -> below chance, singularity of signal. (2) Time remaining 0.1824 vs 0.125 -> weak but above chance. (3) Fine-grained 68×104 pitch resolution -> sparse signal, per conclusions. (4) EURO2020 eval distribution shift vs PL training.
- Page citations: [PAGE 1] intro hypothesis, [PAGE 3] data description, [PAGE 4] SoccerMap channels, [PAGE 5] game state factors, [PAGE 6] adapted SoccerMap, [PAGE 7] Table 1, [PAGE 8-9] figures, [PAGE 9-10] encoder-decoder, [PAGE 10-11] Table 2/3, [PAGE 12-13] Figures 5-7, [PAGE 14] conclusions.

<RETROCAUSAL_GENEALOGY>
Historical/scientific lineage:
- Cites [6]-[10] on contextual variables (venue, opposition, game state) from 2008-2018 (Taylor et al. 2008, Lago 2009, Marcelino 2011, Konefał 2018).
- Cites [14]-[16] on match status and passing (Paixão 2015, Fernandez-Navarro 2018, Monte StatsBomb xPass).
- SoccerMap [17] Fernández & Bornn 2020/2021. SPADL [18] Decroos et al. 2019. un-xPass [21] Robberechts et al. 2023. Pleuler [25] Nessis 2021 player masks.
- Multi-week traps: The paper trains on 2021/22 PL and evaluates on 2022/23 PL — a one-season temporal gap, not truly multi-week, but the evaluation on EURO2020 (different competition, national teams, summer tournament) introduces distribution shift. The "multi-week" trap: team tactics evolve within a season (manager changes, injuries, form), so latent vectors averaged over a season may conflate distinct tactical epochs. The paper averages latent vectors per team per quarter/season, obscuring intra-season drift.

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression vs counter-trap vs clock:
- Crisis habit regression: When losing (negative goal difference) late in match, teams regress to direct, risky passing (long balls, crosses) as a default panic response. Paper confirms losing teams prefer direct style [14]-[16]. Liverpool late tied: shifts to direct offensive.
- Counter-trap: Opponents anticipate this regression and compact centrally or press passing lanes to flanks; the "direct" strategy becomes predictable. Arsenal away: patient center build-up may be a counter to expected home pressure.
- Clock: Time remaining discretized into quarters + 5-min intervals in last quarter. The clock acts as a forcing function: as T→0, utility of scoring ↑, utility of ball retention ↓ for trailing teams; opposite for leading teams (time-wasting [24]). The model's 16-dim latent space must encode this temporal pressure, but separate decoders miss interactions between scoreline and time (e.g., losing by 1 at 89' vs losing by 1 at 15').
- Theory of mind: The encoder learns to infer game state from pass decisions, effectively modeling the opponent's theory of mind (what state are they in given how they pass?). The decoder predicts the state, testing whether passing behavior is a sufficiently informative signal about the team's latent objectives.

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof:
- This is tricky because the paper doesn't discuss weather or biomechanics directly. I need to discuss what WOULD veto the findings based on physical constraints, using the paper's data limitations.
- Physical layer: Pitch dimensions 68×104 cells (standardized). Ball velocity channels derive from timestamps and ball location over two preceding actions. No weather data (rain, wind, temperature) in 360 snapshot. Wind would alter pass trajectory and destination probability, violating the stationarity assumption of the CNN trained on all weather conditions.
- Biomechanical layer: Player positioning in 360 snapshot is partial (only players in broadcast video). Passing options depend on player fatigue, sprint capacity, biomechanical limits — not modeled. The 1×1 convolution assumes game state has global, location-independent influence, but physical fatigue is local (players in specific zones). This is a veto: if a team parks the bus due to physical exhaustion late in match, the model attributes it to "time remaining" rather than biomechanical state.
- Weather veto: No precipitation/wind channels. A cross to the flank in a headwind behaves differently than in calm conditions; the model cannot distinguish context-driven flank preference from weather-driven trajectory constraints.
- Adjudication: The cross-layer veto is not resolved in the paper. The 9-channel input lacks meteorological and physiological channels. Therefore, any attribution of pass-surface differences to game state alone is confounded by unmodeled physical layers. The paper's conclusion that "signal is too sparse" [PAGE 14] partially acknowledges this.

<RLVR_COUNTERFACTUAL_VETOES>
3 verifiable RLVR veto scenarios + predictions:
RLVR = Reinforcement Learning via Verifiable Rewards? Or just verifiable scenarios. I'll frame as counterfactual veto scenarios that can be tested.
1. Veto: Wind speed > threshold. Prediction: In high-wind matches, the modified SoccerMap's predicted increase in direct passes late-game will be attenuated or reversed because long passes are physically suppressed, regardless of game state. Testable via matching weather data.
2. Veto: Red card / numerical disadvantage. Prediction: A team playing with 10 men will show a "defensive lead" pass surface (backward passes to defenders) even when scoreline is tied or losing, because the game state vector lacks a manpower channel. The encoder-decoder will misclassify the game state (e.g., predict "winning" when actually losing with 10 men).
3. Veto: Pitch dimension / surface variation. Prediction: On narrower pitches (some Premier League grounds vary within permitted limits), the flank-preference effect for Arsenal at home [PAGE 8] will disappear or invert because the physical width constrains crossing angles, violating the location-independent embedding assumption.

Each needs a clear prediction and verification method.

Word count: Need >=1000 words total. THINK_TRACE >=400. Let me ensure each section is substantial.

Also must avoid betting lines. None of this is betting-related, so fine.

No toy equations: All equations must be formal and tied to the paper. No invented ratios like Force/Fatigue.

Let me draft carefully, citing pages and using verbatim quotes where appropriate.

Page mapping based on text:
- Page 1: Introduction, hypothesis, contributions.
- Page 2: Modeling Passing Dynamics intro.
- Page 3: Data Description, Modeling Passing Dynamics, SoccerMap channels list.
- Page 4: Figure 1, end of SoccerMap section.
- Page 5: Game State Factors (venue, scoreline, time), one-hot 16-dim.
- Page 6: Adapting SoccerMap, Figure 2, comparison to Pleuler, footnote 1.
- Page 7: Experiment and Results, Table 1.
- Page 8: Practical Applications, Liverpool/Arsenal, Figure 3/4.
- Page 9: Describing how game state alters..., A Game State Encoder-Decoder.
- Page 10: Encoder details, loss functions, challenges.
- Page 11: Experiment and Results, Table 2.
- Page 12: Table 3, Practical Applications latent space.
- Page 13: Figure 5, Figure 6, Fulham/Bournemouth/Liverpool.
- Page 14: Figure 7, Aston Villa, Liverpool/Bournemouth venue, Conclusions start.
- Page 15: Conclusions continued, References start.
- Page 16: References continued.
- Page 17: References end.

I'll cite accordingly.

Let me write the response now, ensuring XML sections are exact and well-formed. I should not add extra sections outside the required ones? The user said "across these exact XML sections" — so I should only output these six sections. Let me make sure I have exactly those six.

I'll write substantial content for each.

THINK_TRACE >=400 words. Let me target ~500-600 words there.

Total will easily exceed 1000.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

Hop 1 — Data provenance and selection bias. The pipeline begins with StatsBomb 360 tactical event streams, converted to SPADL, then filtered to foot passes from open play within the visible 360 snapshot [PAGE 3]. The training set comprises 162,991 passes (2021/22 Premier League) and 164,423 passes (2022/23 Premier League), restricted to games involving top-10 finishing teams; EURO2020 contributes 19,544 passes held out for evaluation [PAGE 3]. The top-10 filter induces a selection bias: tactical conclusions generalize only to elite, possession-dominant squads and exclude relegation-battle dynamics where game-state desperation may be most acute.

Hop 2 — SoccerMap forward operator. The baseline SoccerMap consumes a 9-channel spatiotemporal tensor built from the 360 snapshot and the two preceding actions [PAGE 3]: attacking/defending sparse location matrices, dense distance-to-ball, dense distance-to-defending-goal, sine/cosine of angle-to-ball, dense distance-to-goal, and ball velocity x/y components [PAGE 3]. A convolutional hierarchy at scales 1×, 1/2×, and 1/4× produces a pitch-wide sigmoid probability surface P ∈ [0,1]^{68×104} over pass destinations, trained with log-loss and a binary destination mask [PAGE 4]. Formally, P = σ(F(X)) where F is the convolutional feature extractor and X ∈ ℝ^{9×68×104}.

Hop 3 — Game-state injection. Three factors are encoded as a 16-dimensional one-hot vector: venue (1 bit), scoreline grouped into {-3, -2, -1, draw, +1, +2, +3} (7 bits), and time remaining in quarters with the final quarter split into 5-minute intervals (8 bits) [PAGE 5]. Team identity adds a 23-dimensional one-hot (23 top-10 teams across both seasons) [PAGE 6, footnote 1]. The concatenated 39-dimensional vector is compressed by a fully connected layer to 21 dimensions, broadcast across every 68×104 pitch cell, concatenated with the 9 SoccerMap channels to form a 30-channel input, and blended back to 9 channels via 1×1 convolutions [PAGE 6]. This design asserts that game state is a global, location-independent prior—an assumption that fails if contextual tactics are spatially localized (e.g., pressing only in the final third).

Hop 4 — Predictive gain is marginal. Modified SoccerMap reduces log-loss from 5.989 to 5.961 (Δ = 0.028 nats) and Brier score from 0.988 to 0.987, with parameters rising only from 271,000 to 275,000 [PAGE 7, Table 1]. The negligible improvement implies that game-state and team-identity channels explain very little additional variance in pass destination beyond raw spatiotemporal configuration. The signal-to-noise ratio for contextual adaptation is low.

Hop 5 — Encoder-decoder inversion and breakdown regimes. The encoder-decoder attempts to invert the mapping: given a pass probability surface, the realized pass mask, and team ID, predict the game state [PAGE 9]. The encoder compresses inputs into a 16-dimensional latent space ℓ ∈ ℝ^{16}; separate decoders predict venue, goal difference, and time [PAGE 9–10]. Random baselines are 0.5 (home/away), 1/7 ≈ 0.143 (goal difference), and 1/8 = 0.125 (time) [PAGE 11, Table 2]. The separate model achieves home/away 0.5056, goal difference 0.1291, and time 0.1824 [PAGE 11]. Crucially, goal-difference accuracy 0.1291 falls below the random baseline of 0.143—a singularity indicating that pass decisions do not reliably encode scoreline. Time prediction (0.1824 > 0.125) is weakly informative. Joint training collapses further (goal difference 0.1027, time 0.1081), confirming that the multi-task loss is ill-conditioned [PAGE 11].

Hop 6 — Imbalance interventions distort rather than clarify. Sampling (max 2,000 passes per state) inflates goal-difference accuracy to 0.3066 but at the cost of rare-state overfitting; inverse frequency weighting suppresses it to 0.0916 [PAGE 12, Table 3]. The authors admit rare states receive excessive weight, causing the model to optimize for infrequent configurations at the expense of frequent ones [PAGE 11].

Hop 7 — Practical findings and team heterogeneity. t-SNE projections show latent vectors cluster by team [PAGE 12, Figure 5]. Between first and last quarters, Fulham is most temporally stable; Bournemouth and Liverpool are most time-sensitive [PAGE 13, Figure 6]. For venue, Aston Villa is least home/away dependent; Liverpool and Bournemouth are most affected [PAGE 14, Figure 7]. Qualitative surfaces show Liverpool shifting from cautious backward passes to central defenders (30–45 min, tied, home) to direct passes to fullbacks/attacking midfielders (85–90 min, tied, home) [PAGE 8], and Arsenal shifting from patient central build-up away to direct flank play at home (minutes 15–30, tied) [PAGE 8].

Gray-zone audit. The paper omits opposition strength, red cards, weather, pitch condition, and player fatigue from the game-state vector. The 68×104 fine grid creates sparse data per cell, which the authors themselves cite as a core limitation: "the signal in the data is too sparse" [PAGE 14]. Evaluation on EURO2020 introduces distribution shift (national-team lineups vs. Premier League club squads) [PAGE 8]. Averaging latent vectors across an entire season obscures intra-season tactical drift under managerial or personnel changes. These are not mere caveats; they are structural vetoes on causal attribution of pass-surface differences to game state alone.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, page citations, and breakdown regimes.

1. State space and encoding. Let the game-state random variable S take values in the product space
\mathcal{S} = \mathcal{V} \times \mathcal{G} \times \mathcal{T},
where \mathcal{V} = \{0,1\} (away, home), \mathcal{G} = \{-3,-2,-1,0,+1,+2,+3\} (goal difference from the in-possession team’s perspective), and \mathcal{T} = \{1,\dots,8\} (time buckets) [PAGE 5]. The one-hot encoding is \phi(s) \in \{0,1\}^{16}: one venue bit, seven scoreline bits, eight time bits [PAGE 5]. Team identity \tau \in \{1,\dots,23\} is encoded as \psi(\tau) \in \{0,1\}^{23} [PAGE 6]. The combined context vector is c = [\phi(s); \psi(\tau)] \in \{0,1\}^{39}.

2. Context injection into SoccerMap. A fully connected layer maps c to z = W_c c + b_c \in \mathbb{R}^{21} [PAGE 6]. Each scalar z_k is broadcast to a constant 68 \times 104 channel, yielding B(z) \in \mathbb{R}^{21 \times 68 \times 104} where B(z)_{k,h,w} = z_k for all h \in \{1,\dots,68\}, w \in \{1,\dots,104\} [PAGE 6]. Augmented input \widetilde{X} = [X; B(z)] \in \mathbb{R}^{30 \times 68 \times 104} is passed through 1\times1 convolutions to recover \widetilde{X}' \in \mathbb{R}^{9 \times 68 \times 104}, preserving the original SoccerMap channel count [PAGE 6]. Units: channel index dimensionless; pitch coordinates in grid cells; no physical meters are modeled despite the 68 \times 104 cell approximation of a standard pitch.

3. Forward pass prediction. SoccerMap outputs a location-wise pass probability surface P = \sigma(F(X)) \in [0,1]^{68 \times 104}, where F is the multi-scale convolutional hierarchy (scales 1\times, 1/2\times, 1/4\times) [PAGE 4]. Training minimizes log-loss over the binary destination mask M \in \{0,1\}^{68 \times 104}: \mathcal{L}_{\text{pass}} = -\sum_{h,w} M_{h,w} \log P_{h,w} (equivalently cross-entropy over the one-hot destination cell) [PAGE 4]. Brier score for the multi-class destination distribution over K = 68 \cdot 104 cells: \mathrm{BS} = \frac{1}{N}\sum_{n=1}^{N}\sum_{k=1}^{K} (p_{n,k} - y_{n,k})^2, dimensionless in [0,1] [PAGE 7, Table 1].

4. Encoder-decoder. The encoder E = E_{\text{comb}} \circ E_{\text{conv}} maps [P, M, \psi(\tau)] to latent \ell \in \mathbb{R}^{16} [PAGE 9]. E_{\text{conv}} applies three convolutional layers to the 2D inputs (surface and mask); E_{\text{comb}} uses three fully connected layers after concatenation with team information [PAGE 9]. The decoder expands \ell via three fully connected layers to \mathbb{R}^{256}, then a predictor network outputs distributions over \mathcal{V}, \mathcal{G}, and \mathcal{T} [PAGE 9]. Loss terms: binary cross entropy for venue, categorical cross entropy for goal difference, categorical cross entropy for time [PAGE 10]. In the joint model, losses are normalized and equally weighted to prevent scale domination [PAGE 10].

5. Random baselines and observed accuracies. P_{\text{rand}}(V) = 0.5; P_{\text{rand}}(G) = 1/7 \approx 0.142857; P_{\text{rand}}(T) = 1/8 = 0.125 [PAGE 11, Table 2]. Separate-model accuracies: A(V) = 0.5056, A(G) = 0.1291, A(T) = 0.1824 [PAGE 11]. Joint-model accuracies: A(V) = 0.5122, A(G) = 0.1027, A(T) = 0.1081 [PAGE 11]. All accuracies dimensionless, \in [0,1]. Log-loss values in nats: SoccerMap 5.989 vs. modified 5.961 [PAGE 7].

6. Breakdown and singularity regimes.
(a) Goal-difference inference failure: A(G) = 0.1291 < P_{\text{rand}}(G) \approx 0.143. The pass surface contains less information about scoreline than a uniform guess; the latent representation is unidentifiable for this factor under the separate-decoder objective.
(b) Temporal weakness: A(T) = 0.1824 exceeds P_{\text{rand}}(T) = 0.125 only marginally; clock pressure is weakly encoded.
(c) Spatial sparsity: fine-grained 68 \times 104 resolution yields few passes per cell per game state, violating density assumptions of the convolutional prior; the authors conclude "the signal in the data is too sparse" [PAGE 14].
(d) Distribution shift: EURO2020 evaluation data differ in competition, lineup typicality, and tactical culture from Premier League training data [PAGE 8].
(e) Imbalance distortion: inverse weighting pushes A(G) down to 0.0916 while pure sampling pushes it to 0.3066, showing the metric is sensitive to the sampling regime rather than stable signal [PAGE 12, Table 3].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week temporal traps.

Lineage. The paper explicitly roots its premises in prior work on contextual variables in soccer. It cites Almeida et al. [6], Taylor et al. [7], Lago [8], Marcelino et al. [9], and Konefał et al. [10] for the finding that match location, opposition quality, and match status alter team dynamics within and between matches [PAGE 1]. It cites Paixão et al. [14], Fernandez-Navarro et al. [15], and Monte [16] for the claim that losing or drawing teams prefer direct play while winning teams favor shorter passing sequences [PAGE 1]. The architectural backbone is SoccerMap by Fernández and Bornn [17], an arXiv 2020 / published 2021 deep convolutional network for visually interpretable soccer analysis [PAGE 3, PAGE 17]. Event data are structured via SPADL by Decroos et al. [18] [PAGE 3]. The paper positions itself against Pleuler’s "Player Masks" approach [25], which encodes individual decision tendencies into latent embeddings reshaped into pitch surfaces; the authors criticize that method for inventing spatial behavior where none exists and for imposing artificial locality via convolutional kernels larger than 1×1 [PAGE 6]. Related action-valuation work includes un-xPass by Robberechts, Van Roy, and Davis [21] [PAGE 3, PAGE 17].

Multi-week traps. Although the study spans two Premier League seasons (2021/22 and 2022/23), it treats each season as a static tactical epoch [PAGE 3]. This creates a multi-week trap: team playing style is not stationary across a season. Managerial changes, injuries, fixture congestion, and mid-season tactical pivots mean that averaging latent vectors over all passes in a season conflates distinct tactical regimes [PAGE 12–13]. For example, Liverpool’s high time-sensitivity [PAGE 13, Figure 6] may reflect a specific injury crisis or managerial adjustment in one month rather than a season-long contextual trait. The EURO2020 holdout set introduces a second trap: international tournament football in summer differs systematically from club league play in player familiarity, tactical preparation, and stakes, so validation performance may not transfer to a domestic league context [PAGE 8]. Finally, the joint model’s failure to learn interactions among time, scoreline, and venue reflects a temporal confound: losing by one goal at minute 15 is strategically distinct from losing by one goal at minute 89, yet the separate-decoder design discards exactly these cross-factor interactions [PAGE 9–10].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock.

Crisis habit regression. When a team trails on the scoreline, especially late in the match, it exhibits a regressed habit: a shift toward riskier, direct, long passes and crosses to accelerate scoring opportunities [PAGE 1, citing 14–16]. The paper’s qualitative surface for Liverpool (home, tied, 85–90 minutes) shows probability mass shifting toward direct offensive passes to fullbacks and attacking midfielders, consistent with this panic-direct regression [PAGE 8]. Conversely, leading teams adopt conservative retention, including backward passes to central defenders and time-wasting [PAGE 1, citing 23–24]. This is a first-order theory of mind: the observer infers the team’s objective (protect a lead vs. chase a goal) from its passing distribution.

Counter-trap. The regressed habit is itself exploitable. If opponents anticipate direct, flank-oriented desperation late in a tied match, they can compact central channels and press wide receiving players, turning the team’s default crisis response into a predictable trap. Arsenal’s away behavior—patient central build-up when tied in minutes 15–30 [PAGE 8, Figure 4]—may represent a counter-trap to expected home-team intensity, while its home directness to the flanks may be a pre-emptive strike against away-side defensive caution. The encoder-decoder’s latent space attempts to capture these second-order beliefs: it learns whether a pass surface reveals a team’s latent game state, which is precisely the problem of modeling an opponent’s theory of mind (what state do they believe they are in, given how they pass?).

Clock. Time remaining is discretized into quarters, with the final quarter subdivided into 5-minute intervals [PAGE 5]. The clock acts as a forcing function on expected utility: as T \to 0, the marginal value of scoring rises for the trailing team and falls for the leading team, which shifts toward ball retention and clock management [PAGE 1, citing 24]. The model’s 16-dimensional latent space must encode this temporal pressure, but the separate-decoder architecture forbids interaction terms—e.g., the effect of scoreline depends nonlinearly on time (losing by one at minute 15 versus minute 89) [PAGE 9–10]. The weak time-prediction accuracy (0.1824 vs. random 0.125) [PAGE 11] suggests that passing decisions only partially reveal clock state; teams may retain stylistic inertia despite temporal urgency, violating the assumption that game state cleanly determines passing tendencies.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather vetoes; adjudication of confounding layers.

Physical layer veto. The SoccerMap input contains no meteorological channels: wind speed/direction, precipitation, temperature, and air density are absent from the 9-channel tensor [PAGE 3]. Wind materially alters pass trajectory and destination probability—particularly long passes and crosses, which the paper identifies as hallmarks of direct, losing-team style [PAGE 1]. A home team’s apparent flank preference (Arsenal at home, [PAGE 8]) could be a wind-driven trajectory constraint rather than a tactical choice. Because the model attributes all surface differences to the injected game-state vector, wind effects are silently absorbed into the "venue" or "time" channels. Veto condition: if wind variance is not conditionally independent of game state, the estimated context effect is confounded.

Biomechanical layer veto. The 360 snapshot provides only partial spatial context—players visible in broadcast video at the moment of the event [PAGE 3]. It does not encode player fatigue, sprint history, muscular load, or individual biomechanical limits. Late-match cautious passing (backward to defenders, [PAGE 8]) may reflect accumulated fatigue and reduced high-speed running capacity rather than a strategic response to time remaining. The 1×1 convolutional integration assumes game state has a location-independent, global influence [PAGE 6], but fatigue is spatially heterogeneous (e.g., fullbacks making repeated sprints). Veto condition: if biomechanical state correlates with time remaining, the "time remaining" coefficient in the latent space is biased by physiology.

Weather and pitch veto. Pitch dimensions are fixed at a 68 × 104 cell grid, but actual Premier League grounds vary within Laws of the Game tolerances, and grass length/ moisture affect ball roll and passing tempo. The model’s fine-grained spatial resolution already produces sparse per-cell data [PAGE 14]; adding unmodeled surface variation further dilutes signal.

Adjudication. The paper acknowledges that "the signal in the data is too sparse" and that fine pitch resolution complicates learning [PAGE 14], but it does not resolve the cross-layer confound. No ablation removes weather, fatigue, or pitch-quality channels because none exist in the input. Therefore, any attribution of pass-surface differences to game state alone fails the veto proof: the physical, biomechanical, and meteorological layers are unblocked backdoor paths between game state and passing behavior. The modified SoccerMap’s marginal log-loss gain (5.989 → 5.961, [PAGE 7]) is consistent with these layers absorbing most of the explainable variance.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with testable predictions.

Veto 1 — High-wind match suppression of direct play.
Setup: Identify Premier League matches with recorded wind speed above a physical threshold (e.g., headwind or crosswind exceeding 8 m/s along the axis of attack). Hold game state constant (tied scoreline, home venue, final quarter). Counterfactual: compare the modified SoccerMap’s predicted pass surface against actual completed passes in high-wind vs. calm conditions.
Prediction: The model’s latent time/scoreline channels will predict increased direct, long-pass probability late in tied matches [PAGE 8], but in high-wind conditions actual long-pass completion and attempt rates will drop significantly, and the model’s surface will misattribute the suppression to "caution" rather than physics. Verifiable via public weather APIs matched to match timestamps and stadium geolocation; the veto is confirmed if the model’s Brier score degrades specifically on high-wind long-pass cells while calibrated on calm cells.

Veto 2 — Numerical disadvantage (red card) masquerading as scoreline.
Setup: Filter matches where a team receives a red card while tied or losing, reducing it to 10 men. The game-state vector contains no manpower channel [PAGE 5]. Counterfactual: run the encoder-decoder on passes from the 10-man team and observe the predicted game state distribution.
Prediction: The encoder-decoder will misclassify the 10-man team’s state as "winning" or "comfortable lead" because its pass surface shifts toward backward retention and defensive shape—behavior the model associates with protecting a lead [PAGE 1, citing 23]. The veto is confirmed if the predicted goal-difference distribution shifts positive (toward +1, +2, +3) despite the actual scoreline being negative or draw. This demonstrates that the latent space conflates tactical necessity from manpower loss with game-state strategic posture.

Veto 3 — Pitch-width constraint inverting flank preference.
Setup: Use Premier League grounds with measurably narrower pitch widths within legal tolerances. Arsenal’s home behavior shows direct play to the flanks when tied in the second quarter [PAGE 8, Figure 4]. Counterfactual: compare Arsenal’s flank-directed pass probability on its home pitch (standard width) vs. a narrower away venue, holding scoreline, time, and opponent strength fixed.
Prediction: On narrower pitches, the model’s venue channel will still predict flank-seeking at home [PAGE 8], but physical crossing angles and touchline congestion will suppress wide passes, causing actual pass surfaces to shift centrally. Verifiable via match-level pitch dimension records and event data; the veto is confirmed if the home/away accuracy (baseline 0.5056, [PAGE 11]) drops on narrow-pitch matches while the model persists in predicting flank bias from the venue bit alone. This falsifies the assumption that venue influence is location-independent and context-invariant [PAGE 6].
</RLVR_COUNTERFACTUAL_VETOES>