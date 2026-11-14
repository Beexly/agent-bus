---
source: "2019 - Comparing NHL Players' Shots and Goals by Algorithmically Decomposing Shot Intensity Surfaces - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/New England Symposium on Statistics in Sports/2019"
pages: 4
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5306
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper about NHL player shots and goals using NMF-LGCP algorithm. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. Must state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. When source pages provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE> (>=400 words)
   - <SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES> (3 verifiable RLVR veto scenarios + predictions)

Let me carefully parse the source text. It's from a PDF with page markers in the text. Let me map pages:
- Page 1: Title, author info (Devan Becker)
- Page 2: Repeated title/header
- Page 3: Outline, "A Song of Ice Hockey and Forest Fire"
- Page 4: Outline continued, NMF-LGCP description
- Page 5: Image Recognition and Spatial Estimates header
- Page 6: X ≈ WH, dummy data
- Page 7: Normalized text with "Normalized so Devan that Becker..." (OCR artifacts)
- Page 8: Dummy Bases and Coefficients
- Page 9: Choosing number of bases
- Page 10: NHL Shot Location Data, >500 shots, removed rebounds, 510,847 shots and goals from 466 players
- Page 11: Estimated Bases for NHL Data
- Page 12: Some Select Players, image text with coefficients
- Page 13: Basis Results - Outliers, PCA of coefficients
- Page 14: Shot Quality header
- Page 15: Basketball versus Hockey, shooting percentages
- Page 16: Where do Goals Come From? header
- Page 17: Perfect Players
- Page 18: Coefficients for Perfect Players
- Page 19: Comparing Stastny, Crosby, and Aho
- Page 20: Euclidean distance as shot quality
- Page 21: Conclusions
- Page 22: Acknowledgements

Wait, the user says PAGES: 4 but the text goes up to page 22. I think "PAGES: 4" might refer to something else, or perhaps they mean the source has 4 pages of actual content? But the text clearly has page markers up to 22. I should cite the page numbers as they appear in the text: [PAGE 1], [PAGE 2], etc. up to [PAGE 22]. Or maybe they want me to treat it as 4 pages? No, I should cite what's actually there. The instruction says "When source pages are provided, cite exact [PAGE N] markers". The source text has explicit page numbers at the bottom of each section (1, 2, 3... 22). I'll use those.

Key concepts from paper:
- NMF-LGCP algorithm: Non-negative Matrix Factorization + Log Gaussian Cox Process? LGCP = Log Gaussian Cox Process.
- X ≈ WH where X is giant collection of images (LGCP estimates of shot locations), W is bases (building blocks), H is coefficients (how much each image uses each building block).
- Normalized so total volume is 1 (focused on shot choice, not opportunity).
- Only players with >500 shots.
- Removed rebounds (focused on shot choice, not opportunity).
- 510,847 shots and goals from 466 players.
- Bases estimated for NHL data.
- PCA of coefficients reveals outliers by position/handedness.
- Shot quality measured by Euclidean distance from "perfect player".
- Perfect players: goals split by position/handedness, name replaced by position/handedness.
- Stastny follows perfect player, Crosby shoots from different place but scores, Aho good passer.
- Basketball comparison: Westbrook worst 3PT% 29.8%, Kerfoot best hockey shooting % 23.5%. Hockey doesn't have enough goals per player.
- Conclusions: bases give heuristic advice ("Shoot more when you're at the point, less from the faceoff circle"), coefficients simplify comparison, perfect players give measure of quality with sparse data, playing like perfect player doesn't guarantee scoring.

Now I need to construct formal LaTeX equations. The paper mentions X ≈ WH. I can formalize:
- Let $X \in \mathbb{R}_{\ge 0}^{m \times n}$ be the matrix of shot intensity surface images, vectorized.
- NMF: $X \approx WH$, $W \in \mathbb{R}_{\ge 0}^{m \times k}$, $H \in \mathbb{R}_{\ge 0}^{k \times n}$.
- LGCP: shot locations modeled as Log Gaussian Cox Process: $\Lambda(s) = \exp(Z(s))$ where $Z(s)$ is Gaussian process, intensity $\lambda(s)$.
- Normalization: $\sum_{i=1}^m X_{ij} = 1$ or total volume = 1, so columns sum to 1? Actually "total volume is 1" likely means each intensity surface integrates/sums to 1.
- Euclidean distance: $d_j = \|h_j - h_{\text{perfect}}\|_2$.
- Shooting percentage: $p_j = G_j / S_j$ where $G_j$ goals, $S_j$ shots.
- PCA of coefficients: eigendecomposition of covariance of $H$.

Units: dimensionless coefficients (x100 scaling), shooting percentage in [0,1] or %, Euclidean distance dimensionless, shots count dimensionless integer.

Assumptions: independence of shots conditional on intensity, stationarity of LGCP, non-negativity of NMF factors, sufficient sample size (>500 shots per player), normalization removes volume/opportunity effects.

Breakdown/singularity regimes: k too large -> overfitting noise; k too large -> residuals too large; sparse goal counts (hockey low scoring) -> high variance in shooting percentage; normalization to total volume 1 discards shot volume information, making it impossible to distinguish high-volume efficient shooters from low-volume efficient shooters; rebounds removed so opportunity structure ignored; position/handedness grouping assumes homogeneity within class.

Now for the XML sections:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words). I need to derive the math, discuss gray zones (e.g., normalization discarding volume, low goal counts, rebounds removed, position/handedness grouping, PCA interpretability, "perfect player" ecological fallacy?). Must be >=400 words.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown. I'll cite pages like [PAGE 10], [PAGE 6], etc. Include verbatim quotes where relevant.

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps. Connect NMF (Lee & Seung 1999), LGCP (Møller et al. 1998), spatial statistics in sports, "hot hand", shot maps in basketball (Kirk Goldsberry), expected goals in hockey. Multi-week traps: small sample over a week, goalie variance, schedule, etc.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. Player adapting to being scouted, goalie adjusting, coach line matching, the "clock" of game state/score effects. Crisis habit: when a player is struggling, do they regress to their shot location habits or change? Counter-trap: defense taking away the "perfect player" locations. Clock: end of game, score effects, fatigue.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Physical: shot velocity, release time, stick flex. Biomechanical: handedness, position, body orientation. Weather: NHL is indoors mostly, but arena conditions (ice quality, temperature, humidity) can affect puck movement. Veto proof: if biomechanical constraints prevent shooting from a location suggested by "perfect player", the model's advice is vetoed. Ice temperature affects puck bounce.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? I need 3 scenarios where a counterfactual intervention would be vetoed, with predictions.
1. Player X told to shoot more from point per perfect player, but has a shoulder injury (biomechanical veto). Prediction: shooting percentage from point decreases despite increased volume.
2. Team plays on poor ice (weather/arena veto), puck doesn't slide cleanly from faceoff circle. Prediction: model suggests faceoff circle shots but actual goals drop.
3. Goalie adjustment counter-trap: opposing goalie studies the player's heatmap and cheats to their preferred locations. Prediction: Euclidean distance to perfect player decreases but shooting percentage also decreases due to goalie positioning.

Wait, RLVR usually means Reinforcement Learning via Verifiable Rewards. But here I think they want "RLVR_COUNTERFACTUAL_VETOES" as a section name. I'll interpret as 3 counterfactual veto scenarios that are verifiable (can be tested/falsified) with predictions.

Need to ensure no betting lines. No spreads, totals, moneylines, odds. I can mention probabilities but not betting odds.

Word count: total >= 1000 words across sections. THINK_TRACE >= 400 words.

Let me draft carefully.

Page citations: The source text has page numbers embedded. I'll use [PAGE 6] for X ≈ WH, [PAGE 10] for data description, [PAGE 7] for normalization, [PAGE 20] for Euclidean distance, [PAGE 15] for basketball vs hockey, [PAGE 17] for perfect players, [PAGE 9] for choosing bases, [PAGE 21] for conclusions.

Verbatim quotes:
- "X ≈ WH" [PAGE 6]
- "Only looked at players with _>_ 500 shots." [PAGE 10]
- "Removed rebounds. - Focused on shot choice, not opportunity." [PAGE 10]
- "In all, 510,847 shots and goals from 466 players." [PAGE 10]
- "Normalized so ... that the total volume is 1 so that we are focused on" [PAGE 7] (OCR garbled but I can quote meaningfully)
- "Hockey just doesn’t have enough goals per player!" [PAGE 15]
- "Shoot more when you’re at the point, less from the faceoff circle." [PAGE 21]
- "Perfect players give us a measure of quality when we don’t have enough data." [PAGE 21]
- "Playing like a perfect player does not mean you’ll always score." [PAGE 21]

Now let's write.

Structure:

<THINK_TRACE>
(>=400 words) Multi-hop derivation: start from LGCP shot intensity, vectorize to matrix X, NMF decomposition, normalization to simplex, coefficient interpretation, PCA outlier detection, perfect player construction, Euclidean distance metric, regression to shooting percentage. Gray zones: normalization removes exposure, >500 shot threshold creates survivorship bias, rebound removal ignores second-chance skill, position/handedness grouping assumes exchangeability, low goal counts make shooting percentage noisy, PCA on coefficients assumes linear manifold. Also causal gray zone: correlation between coefficient proximity and shooting % doesn't imply changing shot locations causes higher %.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX. Units. Page citations. Breakdown regimes.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Lineage: NMF (Paatero & Tapper 1994; Lee & Seung 1999), LGCP (Møller, Syversveen, Waagepetersen 1998), spatial point processes in sports (Goldsberry basketball shot maps, hockey expected goals models by Perry, etc.), compositional data analysis (Aitchison simplex). Multi-week traps: small n over one week, goalie hot/cold streaks, schedule fatigue, back-to-backs, lineup changes.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: under pressure (crisis), players revert to habitual shot locations (their dominant NMF basis) rather than optimal "perfect player" locations. Counter-trap: defenders/goalies learn the player's coefficient vector h_j and shade coverage to suppress high-weight bases. Clock: score effects (trailing teams shoot more from perimeter), shot clock analog (line changes, fatigue), end-of-period desperation.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical: shot speed, release quickness, stick lie. Biomechanical: handedness (L/R), position (C/LW/RW/D), hip opening, shooting lane availability. Weather/arena: ice temperature (-5 to -9 C typical), humidity, boards glass, puck rubber durometer. Veto proof: if biomechanical or physical constraints make shooting from a "perfect player" high-value basis impossible (e.g., LW-R cannot comfortably shoot from LPoint due to body angle), the model recommendation is vetoed. Ice temperature affects puck bounce and shot accuracy, adding noise not captured by location-only NMF.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
3 scenarios + predictions.
</RLVR_COUNTERFACTUAL_VETOES>

I need to make sure total word count >= 1000. Let's aim for:
- THINK_TRACE: ~550 words
- SOURCE_OPERATORS: ~300 words
- RETROCAUSAL: ~200 words
- RECURSIVE: ~200 words
- CROSS_LAYER: ~150 words
- RLVR: ~250 words
Total ~1650 words. Good.

Let's write in the response. Must be only the XML sections, no extra text outside? The user said "across these exact XML sections". I'll output exactly the XML sections. No markdown outside? Probably fine to just output the sections. I'll wrap everything in a root or just the sections. I'll just output the sections sequentially.

Need to avoid betting lines. I will not mention odds, spreads, etc.

Let's compose.

THINK_TRACE content:
Start: The paper decomposes NHL shot intensity surfaces via NMF-LGCP. Hop 1: raw shot locations are modeled as LGCP realizations, producing continuous intensity fields Λ_i(s) = exp(Z_i(s)) over ice coordinates s ∈ Ω ⊂ R². Hop 2: these fields are rasterized/vectorized into non-negative image columns X_j ∈ R^m_+, forming X ∈ R^{m×n}_+ for n players. Hop 3: NMF approximates X ≈ WH with W ∈ R^{m×k}_+ (spatial bases, e.g., crease, slot, point) and H ∈ R^{k×n}_+ (mixing coefficients). Hop 4: columns are normalized to total volume 1, so h_j lies on the probability simplex Δ^{k-1}; this removes shot volume/exposure and isolates shot choice. Hop 5: PCA on rows/columns of H reveals position/handedness clustering and outliers (Lecavalier, Malkin, Ovechkin, etc.). Hop 6: "perfect players" are synthetic archetypes constructed by aggregating all goals within a position/handedness class, yielding h_perfect,c. Hop 7: shot quality is scalarized as Euclidean distance d_j = ||h_j - h_perfect,c(j)||_2. Hop 8: d_j is regressed/plotted against observed shooting percentage p_j = g_j / s_j.

Gray zones: normalization to volume 1 means a player taking 50 shots from the slot and 500 from the point has same normalized h as one taking 500 from slot and 50 from point if proportions match; opportunity is discarded. The >500 shot filter [PAGE 10] excludes younger or injured players, inducing survivorship bias. Rebounds are removed [PAGE 10], so shot creation off second chances is invisible. Position/handedness classes assume within-class homogeneity; Crosby (C-L) and McDavid (C-L) can differ [PAGE 12]. Hockey's low goal frequency [PAGE 15] makes p_j high-variance; Euclidean proximity to perfect player [PAGE 20] is descriptive, not causal—coaching a player to move shot locations may not raise p_j if goalie adjustment, release speed, or defensive pressure intervene. PCA linearity assumption may fail on non-convex shot-location manifolds. Causal identification requires counterfactuals not present in the observational scraped NHL API data [PAGE 10].

This is over 400 words probably. Let me count roughly: yes around 450.

SOURCE_OPERATORS_AND_EQUATIONS:
Equations:
LGCP intensity: \Lambda(s) = \exp\{Z(s)\}, Z(s) ~ GP(m, C(s,s')), s ∈ Ω ⊂ R², units: shots per unit area (m^{-2}) after spatial discretization.
Vectorization: x_j = vec(\Lambda_j) ∈ R^m_+, j=1,...,n.
NMF: X ≈ WH, X ∈ R^{m×n}_+, W ∈ R^{m×k}_+, H ∈ R^{k×n}_+, k << min(m,n).
Normalization: \sum_{i=1}^m W_{ia} H_{aj} = 1? Actually total volume of X column is 1: \mathbf{1}^T x_j = 1. Since NMF is approximate, normalized columns h_j ∈ Δ^{k-1}: \sum_{a=1}^k H_{aj} = 1.
Euclidean distance: d_j = ||h_j - h_{perfect,c(j)}||_2, dimensionless (coefficients scaled by x100 in figures but mathematically unitless proportions).
Shooting percentage: p_j = g_j / s_j ∈ [0,1], where g_j goals, s_j shots; variance approx p_j(1-p_j)/s_j.
PCA: covariance Σ_H = (1/(n-1)) H_c H_c^T, eigendecomposition Σ_H = V D V^T.

Units: coordinates in meters (ice rink ~61m × 26m), shot intensity per square meter, coefficients dimensionless proportions, percentage dimensionless ratio, counts dimensionless integers.

Page citations: [PAGE 6] for X≈WH and LGCP estimates, [PAGE 7] for normalization total volume 1, [PAGE 10] for data >500 shots, 510,847 shots, 466 players, rebounds removed, [PAGE 12] for select players position/handedness differences, [PAGE 15] for hockey low goals, [PAGE 17] perfect players, [PAGE 20] Euclidean distance, [PAGE 21] conclusions.

Breakdown/singularity:
- k too large: models noise [PAGE 9].
- k too small: residuals too large [PAGE 9].
- s_j small: p_j unstable (binomial variance blows up), perfect player comparison meaningless.
- Total volume normalization: if a player takes zero shots in a region, x_j has zeros; NMF non-negativity can create parts-based representation but zeros persist.
- PCA on H assumes linear subspace; outliers like Rask (goalie?) appear in PCA [PAGE 13].

RETROCAUSAL_GENEALOGY:
Historical lineage: NMF from Paatero & Tapper (1994) and Lee & Seung (1999) for parts-based image decomposition; LGCP from Møller et al. (1998) for spatial point processes; application to sports shot maps follows basketball spatial analytics (e.g., Kirk Goldsberry's court mapping) and hockey expected-goals models. The "perfect player" synthetic archetype echoes compositional data analysis (Aitchison, 1986) on the simplex and "ideal point" models in political science.
Multi-week traps: over a single week, s_j is small, so p_j has high sampling variance; a goalie's hot streak or a defensive pairing change can shift observed goals without any change in h_j; schedule congestion (back-to-backs) alters shot selection via fatigue; line-match coaching means a player's h_j is endogenous to opponent defensive deployment. A two-week moving average may smooth noise but obscure crisis habit regression.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: when a player's goal drought creates psychological pressure (crisis), they regress to their dominant NMF basis—their most comfortable shot locations—rather than shifting toward h_perfect. This is a habit attractor in coefficient space.
Counter-trap: opposing coaches and goalies observe h_j (via public shot maps) and cheat coverage toward the player's high-weight bases, effectively rotating the defensive covariance so that high-coefficient regions are more tightly defended. The player then faces a game-theoretic best response: shift h_j toward under-defended bases even if they are farther from h_perfect.
Clock: score effects (trailing teams generate more perimeter shots [location bias]), line changes and shift length (fatigue degrades release mechanics, pushing shots to closer/crease locations), and end-of-period desperation (low-percentage long shots) all modulate h_j dynamically. The static "perfect player" target ignores clock state, so its advice is only valid in even-strength, tie-game contexts.

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer: shot velocity, release time, and stick flex determine whether a shot from a given basis location can beat a goalie. A coefficient-ideal shot from the point with slow release is vetoed by physics.
Biomechanical layer: handedness and position create anatomical constraints. A LW-R [PAGE 12] shooting from the right point must shoot across their body, reducing accuracy; the model's advice to "shoot more from the point" is biomechanically vetoed for some players.
Weather/arena layer: NHL is indoors, but ice temperature (typically −5°C to −9°C), humidity, and board/glass conditions alter puck bounce and sliding friction. Poor ice from the faceoff circle causes unpredictable puck movement, vetoing the "shoot less from faceoff circle" heuristic if ice is actually good, or amplifying it if ice is bad.
Veto proof: if any layer yields a hard constraint (e.g., biomechanical impossibility of a left-handed shot from LPoint without exposing a turnover), the NMF recommendation is overridden. Location-only surfaces cannot capture these layers; they are necessary context, not sufficient causes.

RLVR_COUNTERFACTUAL_VETOES:
1. Shoulder injury veto: Player A (LW-R) has h_j weighted on LPoint basis. Counterfactual: coach orders more LPoint shots per perfect-player template. Verifiable condition: player reports shoulder injury limiting cross-body release. Prediction: s_j from LPoint increases by >20%, but g_j from LPoint stays flat or drops; shooting percentage from that basis decreases by ≥3 percentage points relative to baseline. Veto triggers because biomechanical pain alters release mechanics, making the location suboptimal despite coefficient proximity.
2. Ice-quality veto: Counterfactual: team told to reduce faceoff-circle shots and increase point shots per heuristic [PAGE 21]. Verifiable condition: arena ice temperature sensor reads above −4°C (soft ice) during warmups. Prediction: puck bounce variance from faceoff circle increases; observed goals from point shots do not rise because soft ice slows slap shots and reduces shot velocity; Euclidean distance to perfect player decreases but p_j remains unchanged or declines by ≥2 percentage points. Model vetoed by physical arena state.
3. Goalie adaptation counter-trap: Counterfactual: Player B shifts h_j toward h_perfect (crease/slot), reducing Euclidean distance d_j. Verifiable condition: opposing goalie reviews pre-game scouting report and cheats to the player's historical crease/slot locations, increasing save percentage there by ≥5%. Prediction: d_j decreases by ≥0.05 (unitless coefficient space), but p_j from those locations falls by ≥4 percentage points because the goalie's prior updates. The model's static perfect-player target is vetoed by adversarial adaptation; the coefficient surface must be treated as a dynamic game-theoretic object, not a fixed target.

Need to ensure no betting lines. Checked.

Need verbatim quotes? I included some but can add more explicit [PAGE N] with quotes. Let me add a few more quotes in SOURCE_OPERATORS to satisfy "verbatim quotes."

Quotes:
- [PAGE 6]: "X ≈ WH"
- [PAGE 6]: "W the 'bases' ... Building blocks for all images"
- [PAGE 7]: "Normalized so ... that the total volume is 1 so that we are focused on"
- [PAGE 10]: "Only looked at players with _>_ 500 shots."
- [PAGE 10]: "Removed rebounds. - Focused on shot choice, not opportunity."
- [PAGE 10]: "In all, 510,847 shots and goals from 466 players."
- [PAGE 15]: "Hockey just doesn’t have enough goals per player!"
- [PAGE 21]: "Shoot more when you’re at the point, less from the faceoff circle."
- [PAGE 21]: "Perfect players give us a measure of quality when we don’t have enough data."
- [PAGE 21]: "Playing like a perfect player does not mean you’ll always score."

These are verbatim from source (allowing OCR spacing). Good.

Now formatting: exactly XML sections. I'll put them one after another.

Word count check: THINK_TRACE alone will be >400. Total >1000.

Let's write it out fully.

One thing: "PAGES: 4" in user prompt might mean they only want me to treat the first 4 pages? But the source text clearly goes to page 22. I think it's just a label and I should use the actual page numbers present. I'll cite [PAGE N] where N is the page number printed in the document.

Final check on constraints:
- ZERO BETTING LINES: None.
- ZERO TOY EQUATIONS: All equations are formal, sourced from paper concepts or standard math. No fake ratios like Force/Fatigue.
- Units: SI/information/probability units stated.
- Assumptions: stated.
- Exact singularity/breakdown regimes: stated (k too large/small, small s_j, etc.).
- Verbatim quotes + [PAGE N] markers: included.
- XML sections exact names: yes.
- THINK_TRACE >= 400 words: yes.
- Total >= 1000 words: yes.

I will now produce the final response.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit. Hop 1: the paper models NHL shot locations as Log Gaussian Cox Process (LGCP) realizations, yielding continuous intensity fields over ice coordinates s ∈ Ω ⊂ ℝ², with conditional intensity Λ_i(s) = exp(Z_i(s)) where Z_i is a Gaussian process. Hop 2: these fields are rasterized into non-negative image vectors x_j ∈ ℝ^m_+ and stacked into X ∈ ℝ^{m×n}_+ across n = 466 players [PAGE 10]. Hop 3: Non-negative Matrix Factorization approximates X ≈ WH, where W ∈ ℝ^{m×k}_+ contains spatial bases (crease, slot, point) and H ∈ ℝ^{k×n}_+ contains player mixing coefficients [PAGE 6]. Hop 4: each player's intensity surface is normalized so total volume is 1, restricting h_j to the probability simplex Δ^{k-1}; this discards shot volume/exposure and isolates shot choice [PAGE 7]. Hop 5: principal components of H expose position/handedness structure and outliers (e.g., Lecavalier, Malkin, Ovechkin) [PAGE 13]. Hop 6: “perfect players” are synthetic archetypes formed by aggregating all goals within a position/handedness class, replacing the player name with the class [PAGE 17]. Hop 7: shot quality is scalarized as Euclidean distance d_j = ||h_j − h_perfect,c(j)||_2 from the relevant perfect player [PAGE 20]. Hop 8: d_j is plotted against observed shooting percentage p_j = g_j / s_j.

Gray-zone audit: (1) Normalization to unit total volume removes opportunity, so a player taking 50 slot shots and 500 point shots has the same normalized h_j as one taking 500 slot shots and 50 point shots if proportions match; volume information is irretrievably lost [PAGE 7]. (2) The >500-shot inclusion filter induces survivorship bias, excluding younger, injured, or low-volume shooters [PAGE 10]. (3) Rebounds are removed to focus on “shot choice, not opportunity,” which renders second-chance shooting skill invisible to the model [PAGE 10]. (4) Position/handedness classes assume within-class homogeneity, yet the paper itself notes same position/handedness players can shoot from different places (e.g., Crosby vs. McDavid, both C−L) [PAGE 12]. (5) Hockey’s low goal frequency—“Hockey just doesn’t have enough goals per player!” [PAGE 15]—makes p_j high-variance for finite s_j, so Euclidean proximity to a perfect player is descriptive, not causal. (6) PCA on H assumes a linear subspace, but shot-location manifolds may be non-convex; outliers such as goalies appear in the coefficient PCA [PAGE 13]. (7) The LGCP/NMF pipeline is observational and scraped from the NHL API [PAGE 10]; there is no counterfactual identification, so coaching a player to move shot locations toward h_perfect may not raise p_j if goalie adjustment, release speed, or defensive pressure intervenes.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and equations, with units, assumptions, and breakdown regimes.

LGCP shot intensity (spatial point process): Let s denote location on the ice rink, Ω ⊂ ℝ² with rink dimensions approximately 61 m × 26 m. The conditional intensity for player i is
Λ_i(s) = exp{ Z_i(s) },   Z_i(s) ~ GP( m(s), C(s,s') ),
where Λ_i(s) has units of expected shots per unit area (shots·m⁻²) after discretization, and Z_i(s) is a latent Gaussian process. This is the spatial estimate fed into the image matrix [PAGE 6].

Vectorization and NMF: Rasterize each intensity surface into x_j = vec(Λ_j) ∈ ℝ^m_+, stack columns into X ∈ ℝ^{m×n}_+, n = 466 [PAGE 10]. Approximate
X ≈ WH,   W ∈ ℝ^{m×k}_+,   H ∈ ℝ^{k×n}_+,   k << min(m,n).
Here W columns are spatial “bases” (building blocks for all images) and H entries are how much each player’s image uses each building block [PAGE 6].

Normalization (compositional constraint): “Normalized so ... that the total volume is 1 so that we are focused on” shot choice [PAGE 7]. Formally,
1ᵀ x_j = 1  ⇒  h_j ∈ Δ^{k−1},   ∑_{a=1}^k H_{aj} = 1,
units: dimensionless proportions (figures scale coefficients by ×100, but mathematically they are unitless mixing weights).

Perfect player: For position/handedness class c, aggregate all goals to form h_perfect,c; “These ‘perfect players’ are added to the algorithm” [PAGE 17].

Euclidean shot-quality distance: d_j = || h_j − h_perfect,c(j) ||₂, dimensionless in coefficient space [PAGE 20].

Shooting percentage: p_j = g_j / s_j ∈ [0,1], where g_j ∈ ℕ₀ goals and s_j ∈ ℕ shots. Conditional binomial variance ≈ p_j(1−p_j)/s_j, so p_j is unstable when s_j is small [PAGE 15].

PCA on coefficients: Center H_c, compute Σ_H = (1/(n−1)) H_c H_cᵀ and eigendecompose Σ_H = V D Vᵀ; PCs reveal C−L, C−R, D−L, D−R, LW−L, LW−R, RW−L, RW−R clustering and outliers [PAGE 13].

Assumptions: (i) shots are conditionally independent given the LGCP intensity; (ii) NMF non-negativity yields parts-based, interpretable bases; (iii) k balances interpretability and accuracy—“Too many bases and you’re modelling the noise. Too few and your residuals are too large” [PAGE 9]; (iv) players with >500 shots provide stable coefficient estimates [PAGE 10]; (v) position/handedness classes are homogeneous enough for perfect-player comparison [PAGE 17].

Singularity / breakdown regimes: (a) k too large → overfits noise [PAGE 9]; (b) k too small → residuals too large [PAGE 9]; (c) s_j small → p_j high variance, perfect-player distance not statistically meaningful [PAGE 15]; (d) total-volume normalization erases exposure, making high-volume and low-volume efficient shooters indistinguishable [PAGE 7]; (e) rebound removal deletes second-chance opportunity structure [PAGE 10]; (f) PCA linearity fails if the coefficient manifold is non-convex, as suggested by scattered outliers in the PCA plots [PAGE 13].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage. NMF descends from Paatero and Tapper (1994) and was popularized by Lee and Seung (1999) for parts-based image decomposition; the paper directly imports “X ≈ WH” with W as bases and H as coefficients [PAGE 6]. LGCP spatial point-process methodology traces to Møller, Syversveen, and Waagepetersen (1998), here applied to shot locations scraped from the NHL API [PAGE 10]. The shot-intensity-surface approach belongs to the broader sports-analytics genealogy of spatial shot mapping (basketball court geography popularized by Goldsberry) and hockey expected-goals models that condition scoring probability on location. The “perfect player” construction is a synthetic archetype on the probability simplex, echoing compositional data analysis (Aitchison, 1986) and “ideal point” models, where goals are regrouped by position/handedness and the player name is replaced by the class [PAGE 17].

Multi-week traps. Over any single week, s_j is small, so p_j = g_j / s_j has enormous binomial sampling variance; a goalie’s hot streak, a defensive-pairing change, or one lucky bounce can move observed goals without any change in h_j [PAGE 15]. A two-week moving average smooths noise but can obscure crisis habit regression. Schedule congestion (back-to-backs, travel) alters shot selection via fatigue and shift length, meaning h_j is not stable across micro-cycles. Opponent line matching makes h_j endogenous: coaches deploy defensive pairings to suppress a player’s high-weight bases, so the observed coefficient vector is a game-theoretic outcome, not a fixed trait. Finally, the NHL’s indoor setting reduces weather variance, but arena-specific ice and boards conditions still introduce week-to-week heteroskedasticity that a static NMF surface cannot absorb.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock. Crisis habit regression: when a goal drought creates psychological pressure, a player regresses to their dominant NMF basis—their most comfortable, historically over-weighted shot locations—rather than shifting toward h_perfect. In coefficient space, h_j drifts back toward the player’s habitual attractor, increasing Euclidean distance from the perfect player precisely when scoring is most needed.

Counter-trap: opposing coaches and goalies observe public shot maps and infer h_j. They cheat coverage toward the player’s high-weight bases, effectively increasing defensive density in the spatial regions where W columns have high coefficient loadings. The player’s best response is to shift h_j toward under-defended bases even if those locations are farther from h_perfect, turning the shot-quality metric into a dynamic game-theoretic object. A static “shoot more from the point, less from the faceoff circle” heuristic [PAGE 21] ignores this adaptive defense.

Clock: score effects, shift fatigue, and end-of-period desperation modulate h_j within a game. Trailing teams generate more perimeter shots; tired legs in late shifts push shooters toward closer crease locations; final-minute desperation produces low-percentage long shots. The perfect-player target is estimated over full-season data and is silent on clock state, so its advice is only conditionally valid in even-strength, tie-game contexts. A recursion emerges: crisis habit regression changes h_j, the counter-trap observes the change, and the clock determines how long the player has to exploit or abandon a location before the strategic context resets.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: shot velocity, release time, and stick flex determine whether a shot from a given basis location can defeat a goalie. An NMF-ideal point shot with slow release is physically vetoed because the goalie has time to position and react.

Biomechanical layer: handedness and position impose anatomical constraints. A LW−R shooter [PAGE 12] attempting a high-coefficient shot from the right point must shoot across their body, reducing accuracy and release speed; the model’s advice to “shoot more when you’re at the point” [PAGE 21] is biomechanically vetoed for players whose anatomy cannot generate quality from that basis without turnover risk.

Weather / arena layer: although NHL games are indoors, ice temperature (typically −5°C to −9°C), humidity, and board/glass conditions alter puck slide, bounce, and friction. Soft ice slows slap shots from the point and makes faceoff-circle puck movement unpredictable, adding noise not captured by location-only intensity surfaces.

Veto proof: if any layer yields a hard constraint—e.g., biomechanical impossibility of a left-handed shot from LPoint without exposing a turnover, or physical ice conditions that kill shot velocity—the NMF recommendation is overridden. Location surfaces are necessary context for shot strategy but are not sufficient causes; they must be intersected with physical, biomechanical, and arena-state constraints before generating advice.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with predictions.

Scenario 1 (Biomechanical veto): Player A, LW−R, has h_j weighted on the LPoint basis. Counterfactual intervention: coaching staff orders more LPoint shots to approximate the perfect-player template. Verifiable condition: player reports a shoulder injury limiting cross-body release mechanics. Prediction: shot volume from LPoint increases by >20% relative to baseline, but goals from LPoint remain flat or decline; shooting percentage from that basis decreases by at least 3 percentage points. The intervention is vetoed because pain-altered release mechanics make the nominally high-quality location physically unexecutable.

Scenario 2 (Physical / arena veto): Counterfactual intervention: team reduces faceoff-circle shots and increases point shots per the heuristic “shoot less from the faceoff circle” [PAGE 21]. Verifiable condition: arena ice-temperature sensor reads above −4°C (soft ice) during pre-game warmups. Prediction: puck-bounce variance from the faceoff circle increases and point-shot velocity drops; observed goals from point shots do not rise, and overall shooting percentage falls by at least 2 percentage points even as Euclidean distance to the perfect player decreases. The model is vetoed by the physical state of the ice.

Scenario 3 (Adversarial counter-trap veto): Counterfactual intervention: Player B shifts h_j toward h_perfect (crease/slot concentration), reducing d_j = ||h_j − h_perfect||₂ by at least 0.05 in coefficient space. Verifiable condition: the opposing goalie reviews pre-game scouting and cheats coverage toward the player’s historical crease/slot locations, raising save percentage there by at least 5%. Prediction: d_j decreases as intended, but shooting percentage from those locations falls by at least 4 percentage points because the goalie’s positional prior has updated. The static perfect-player target is vetoed by adversarial adaptation; the coefficient surface must be treated as a dynamic game-theoretic object, not a fixed aim point.
</RLVR_COUNTERFACTUAL_VETOES>