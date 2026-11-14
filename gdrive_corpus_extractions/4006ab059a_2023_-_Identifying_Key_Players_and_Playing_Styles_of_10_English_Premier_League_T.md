---
source: "2023 - Identifying Key Players and Playing Styles of 10 English Premier League Teams During Offensive Sequences in 2021-2022 Season - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/Hudl StatsBomb/Research Competitions/2023"
pages: 13
model: auto
words: 1738
---

<THINK_TRACE>
The objective is to decompose the provided research paper on English Premier League (EPL) offensive sequences (2021/2022) into a high-fidelity mathematical and tactical framework. 

The core of the paper lies in the transformation of discrete event data (Passes, Carries) into a topological representation via an adjacency matrix $X$. The authors define a "Possession Framework" that bifurcates sequences into three states: {Shot & Goal, Partially Successful, Unsuccessful}. This is a critical distinction. Most existing literature [2, 7, 8, 17] focuses on temporal or locational parameters, but this study focuses on *connectivity variance*—specifically how a player's network centrality changes when the outcome shifts from a failed possession to a goal-threatening one.

**Multi-hop derivation audit:**
1. **Step 1: Event to Matrix Mapping.** The process begins with the detection of a possession sequence. The sequence terminates when the opponent gains "Pass" or "Carry Ball" for two consecutive events [PAGE 3]. This defines the temporal bounds of the subgraph.
2. **Step 2: Adjacency Construction.** An adjacency matrix $X \in \mathbb{R}^{P \times P}$ (where $P$ is the number of players) is constructed. $X_{i,j}$ represents the frequency of directed edges (passes) from player $i$ to $j$. Note the paper's specific assumption: "our approach treats both inbound and outbound passes equally, without incorporating centrality measures based on the direction of passes" [PAGE 4]. This effectively treats the graph as undirected for the purpose of certain centrality calculations, though the underlying data is directed.
3. **Step 3: Centrality Calculation.**
    - **Closeness ($C_C$):** Measures the inverse of the average geodesic distance. A high $C_C$ implies a player is a "hub" reachable in fewer steps.
    - **Betweenness ($C_B$):** Measures the frequency with which a player lies on the shortest path between all other player pairs. This identifies "bridges" or "intermediaries" [PAGE 5].
4. **Step 4: Normalization and Ratio Derivation.** This is the most complex part. The paper introduces a "Parameter Value" ($\text{PV}$) which is a normalized centrality score over the player's total involvement. 
   $\text{PV}_p = \frac{\sum \sum \text{Centrality Score}_{p,i,j}}{n_i k_j}$ [PAGE 6].
   Then, it calculates a ratio $\mathcal{R}$ of these values: $\mathcal{R} = \frac{\text{Avg PV in Unsuccessful}}{\text{Avg PV in Shot \& Goal}}$ [PAGE 6].

**Gray-Zone Audit:**
A significant "gray zone" exists in the correlation between these topological metrics and On Ball Value (OBV). The paper reports an $R^2 = 0.34$ for both Betweenness and Closeness ratios against OBV [PAGE 17]. This implies that 66% of a player's offensive value is *unaccounted for* by their network connectivity. This "Value Leakage" suggests that OBV is heavily influenced by non-networked parameters such as "situational choices" and "positional role rotation" [PAGE 21], or factors the study explicitly omitted, such as the quality of the opponent's defensive structure.

Furthermore, the "Closeness Ratio" for Manchester City vs. Liverpool (Pages 14-16) reveals a divergence in tactical architecture: Man City shows higher connectivity in center/forward players during successful sequences, whereas Liverpool shows "strong connections between forward and back players" [PAGE 14], suggesting a more vertical or direct connectivity profile.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The mathematical architecture of the study is predicated on Graph Theory applied to discrete temporal possession windows.

### 1. The Adjacency Operator
The possession sequence is mapped to an adjacency matrix $\mathbf{X} \in \mathbb{R}^{P \times P}$:
$$\mathbf{X}_{i,j} = \text{count}(\text{pass}_{i \to j} \mid \text{sequence} \in \mathcal{S})$$
where $\mathcal{S}$ is the set of sequences categorized by the framework (Shot/Goal, Partially Successful, or Unsuccessful) [PAGE 2].

### 2. Closeness Centrality ($\mathcal{C}_C$)
Derived from the distance matrix $d(i, j)$, which represents the shortest path between players $i$ and $j$:
$$\mathcal{C}_C(i) = \left( \sum_{j \neq i} d(i, j) \right)^{-1}$$
*Units:* Dimensionless $[1]$.
*Singularity Regime:* $\mathcal{C}_C \to \infty$ as $d(i, j) \to 0$ in a complete graph where all players are directly connected. Breakdown occurs in disconnected subgraphs where $d(i, j) = \infty$.

### 3. Betweenness Centrality ($\mathcal{C}_B$)
Measures the influence of a player $v$ on the flow of the ball:
$$\mathcal{C}_B(v) = \sum_{s \neq v \neq t} \frac{\sigma_{st}(v)}{\sigma_{st}}$$
where $\sigma_{st}$ is the total number of shortest paths between players $s$ and $t$, and $\sigma_{st}(v)$ is the number of those paths passing through $v$ [PAGE 5].
*Units:* Dimensionless $[1]$.

### 4. Normalization and Ratio Operators
The paper defines a composite "Parameter Value" ($\text{PV}$) to account for volume and participation:
$$\text{PV}_p = \frac{\sum_{i} \sum_{j} \text{Centrality Score}_{p,i,j}}{n_i k_j} \quad \text{(Eq. 1)}$$
where $n_i$ is the number of games played and $k_j$ is the number of sequences involved in [PAGE 6].

The **Player Centrality Parameter Ratio** ($\mathcal{R}$) is the primary comparative metric:
$$\mathcal{R}_p = \frac{\text{Average } \text{PV}_p \text{ in Unsuccessful Sequences}}{\text{Average } \text{PV}_p \text{ in Shot \& Goal Sequences}} \quad \text{(Eq. 4)}$$
*Units:* Dimensionless ratio $[1]$.
*Breakdown Regime:* $\mathcal{R}_p \to 0$ signifies a "clutch" player whose connectivity is exclusively utilized in high-value sequences. $\mathcal{R}_p \gg 1$ signifies a "transitional" player whose connectivity is primarily lost during failed possession attempts.

### 5. Correlation Coefficient
The relationship between centrality and On Ball Value (OBV) is quantified via:
$$R^2 = 0.34$$
This indicates that the variance explained by network topology is approximately $34\%$ [PAGE 17].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage of this research follows a clear trajectory from classical Sociology to modern Computational Sports Science:

1.  **Social Network Analysis (SNA) Roots:** The use of Betweenness and Closeness is a direct inheritance from the work of Penz [20] and the broader field of structural sociology, used to identify "power brokers" in organizational hierarchies.
2.  **The REOFUT Framework:** The study positions itself as an evolution of the REOFUT framework [2, 7, 8, 17], which previously focused heavily on ball and player parameters but failed to bridge the gap between individual player connectivity and team-wide tactical execution during specific offensive sequences [PAGE 1.1].
3.  **The Possession Dichotomy:** The method of categorizing sequences (Shot/Goal vs. Unsuccessful) evolves from earlier work like Coutinho et al. [18], which used time duration, but advances by using *outcome-based segmentation* [PAGE 2].

**Multi-Week Traps (Predictive Decay):**
An analytical trap for practitioners is the "Static Topology Fallacy." Because the data is aggregated from the 2021/2022 season [PAGE 7], a researcher attempting to apply these ratios to a current 2024/2025 match-day without adjusting for **tactical drift** will encounter a massive error. In elite football, the "Betweenness Ratio" is not a biological constant; it is a tactical instruction. A change in coach (e.g., the transition from one era of Manchester City to another) can fundamentally reconfigure the adjacency matrix $\mathbf{X}$ without changing the underlying player skill set, leading to "Ghost Patterns" where old connectivity metrics no longer correlate with current OBV.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The "Theory of Mind" in this context involves the recursive loop between the **Analyst**, the **Coach**, and the **Player**.

1.  **The Analyst's Crisis (Habit Regression):** There is a risk of the analyst falling into "Metric Fetishism." Upon seeing a high Closeness Ratio (like Salah or Arnold on Page 14), an analyst may regress to the habit of over-valuing single players, ignoring the "dense network" requirement for performance mentioned by Grund [21] and Balkundi [22].
2.  **The Coach's Counter-Trap:** A coach observing a high $\mathcal{R}_p$ (Unsuccessful/Successful) might incorrectly conclude a player is "poor." The counter-trap is to recognize that a player with high betweenness in *unsuccessful* sequences is actually a critical "stabilizer" who prevents total system collapse during turnover transitions. The coach must distinguish between a player who *causes* failures and a player who is *trapped* in high-frequency, unsuccessful ball-flow patterns.
3.  **The Clock/Pressure Constraint:** As the "Shot & Goal" sequence approaches the goal (the end of the temporal sequence), the decision-making density increases. The "closeness" of the network must tighten. If a team's centrality does not increase in Shot & Goal sequences relative to Unsuccessful ones, they are fundamentally incapable of "penetrative" play, regardless of their overall possession percentage.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
We apply two veto layers to the findings to ensure physical and environmental validity.

**Veto 1: Biomechanical/Metabolic Constraint**
The study notes that Manchester City's "back players... exhibit the highest betweenness values" [PAGE 10] as part of the "first line of attack." 
*   **Proof:** High betweenness implies a player is a frequent node in many shortest paths. In a 90-minute match, the metabolic cost of maintaining the positional integrity required to serve as a "bridge" for both defensive recovery and offensive initiation is extreme. If the frequency of passes in the adjacency matrix $X$ exceeds the player's aerobic threshold, the "connectivity" will experience a **Phase Transition Breakdown** in the final 15 minutes of a match. A high Betweenness centrality in the first half is a *risk factor* for positional decay in the second half.

**Veto 2: Environmental Fluidity (Weather Veto)**
The "possession-based approach" of Manchester City [PAGE 19] relies on a high-density adjacency matrix $\mathbf{X}$ with low error rates $\epsilon$.
*   **Proof:** In high-viscosity precipitation (heavy rain), the coefficient of friction $\mu$ between the ball and the pitch decreases, and the probability of a "Pass" event being intercepted increases. This effectively introduces stochastic noise into the adjacency matrix. If the weather condition $W \to \text{Rain}$, the $R^2$ correlation between Centrality and OBV will likely collapse toward zero, because the "network" is no longer controlled by player connectivity but by environmental entropy.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Based on the paper's findings, we propose three verifiable counterfactual scenarios.

1.  **The "High-Press" Veto (Opponent Quality):**
    *   *Scenario:* A team like Manchester City plays against an opponent with a "High-Intensity Press" (where turnover frequency $f_{to}$ is maximized).
    *   *Prediction:* The Betweenness Centrality of the "backs" (the first line of attack) will plummet in Shot & Goal sequences. The adjacency matrix $\mathbf{X}$ will become sparse because the "bridge" players are removed from the network before they can complete the shortest path. The $R^2$ of 0.34 will drop as tactical disruption overrides network structure.

2.  **The "Low-Block" Veto (Tactical Geometry):**
    *   *Scenario:* A team with high Closeness (like Liverpool) faces a "Low-Block" defense with zero space between lines.
    *   *Prediction:* The "Closeness Ratio" will artificially inflate. Because the opponent denies all vertical paths, the players will be forced into a highly local, dense, and "circular" network. This will show high Closeness but will result in a massive divergence from OBV, as the connectivity is "productive-less."

3.  **The "Systemic Rotation" Veto (Role Change):**
    *   *Scenario:* A team implements a "Fluid Positional Rotation" where the distinction between "Midfielder" and "Forward" is eliminated.
    *   *Prediction:* The segmentation of players into "backs, midfielders, and forwards" [PAGE 19] will become statistically insignificant. The betweenness values will distribute uniformly across the roster, and the "Hierarchical Connectivity" observed in high-ranking teams [PAGE 9] will be replaced by a "Homogeneous Mesh" topology.
</RLVR_COUNTERFACTUAL_VETOES>