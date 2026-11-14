---
source: "2026 - SoccerNet-FoulRet Retrieving Semantically Similar Soccer Foul Videos - Arthur et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/preprints/arXiv/2026"
pages: 1
model: alibaba_gse:qwen-plus-character
words: 2045
---

<THINK_TRACE>
Deep multi-hop derivation begins by dissecting the core proposition of the 2026 SoccerNet-FoulRet paper [PAGE 1]: refereeing inconsistency stems from an inability to "easily compare a contentious foul against similar past cases." This is not merely a complaint about human memory, but a fundamental breakdown in information retrieval. The referee acts as a real-time classifier and precedent-matcher under extreme temporal pressure and high cognitive load. We must model this using formal decision theory. Let $D_t$ be the binary decision (foul/no-foul or yellow/red card) at time $t$. The optimal Bayesian referee updates their belief state $B_t$ based on observation $O_t$ and a prior distribution over precedents $\mathcal{P}$. Inconsistency arises when the conditional probability $P(D_t | O_t, \mathcal{P})$ is highly sensitive to noise in $O_t$ because the mapping from visual pixels to semantic "intent" or "force" is ill-posed without explicit access to relevant historical embeddings.

The paper reframes this as a retrieval problem: given a query clip $q$, retrieve $k$ clips from a database $\mathcal{D}$ that are semantically similar according to *refereeing interpretation*. The critical distinction from standard video-to-video retrieval—often solved via Siamese networks optimizing contrastive loss on raw pixels—is the introduction of "category-relevance labels" and "human-verified queries." This implies a ground truth that exists in the latent space of rules, not in Euclidean feature space. The reported performance metric is stark: zero-shot models achieve "under 5% HitRate@10." This failure mode is analytically derivable. Standard vision-language embedders (like CLIP variants) are trained on natural language captions describing actions ("a player kicking a ball"). A foul, however, is defined by the *absence* of proper contact or the *presence* of excessive force—concepts requiring a physics-aware or rule-aware embedding space. The model fails because the semantic gap between "two players colliding" and "a professional foul denying a goal-scoring opportunity" is vast.

Furthermore, we must apply the gray-zone audit to the dataset's construction. The source text mentions building the benchmark from "SoccerNet-MVFoul" with "693 human-verified queries." Verification introduces a subjective bias; what one expert annotator deems a relevant precedent, another might classify as distinct due to differing interpretations of advantage or context. This inter-rater variability creates a noisy target for retrieval systems. Fine-tuning on these category labels improves "category relevance" but transfers only "modestly to precedent retrieval." This suggests a hierarchical failure: the model learns coarse-grained semantics (e.g., 'trip' vs. 'push') but misses the fine-grained contextual modifiers (e.g., 'from behind', 'in the box', 'excessive force') necessary for true precedent matching. Therefore, the bottleneck is not just data scarcity, but the absence of a formal, differentiable representation of soccer laws within the embedding architecture.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formalizing the retrieval task of SoccerNet-FoulRet requires rigorous definitions of similarity metrics, embedding spaces, and performance bounds, adhering strictly to SI-aligned information units and established machine learning paradigms.

**1. The Precedent Retrieval Operator:**
Let $\mathcal{V} = \{v_i\}_{i=1}^N$ be the corpus of annotated foul videos, where each $v_i$ is a spatiotemporal sequence of pixel tensors $\mathbb{R}^{T \times H \times W \times 3}$.
Let $\mathbf{f}: \mathcal{V} \rightarrow \mathbb{R}^d$ be an embedding function (encoder) parameterized by $\theta$, mapping a video to a $d$-dimensional vector.
Given a query $q \in \mathcal{V}$, the retrieval operator seeks a set of $k$ indices $\mathcal{I}_k \subset \{1, \dots, N\}$ maximizing the similarity score $S(\cdot, \cdot)$ against the query embedding $\mathbf{z}_q = \mathbf{f}(q)$.
Using the standard cosine similarity for normalized embeddings (unit vectors):
$$ S(\mathbf{z}_q, \mathbf{z}_j) = \frac{\langle \mathbf{z}_q, \mathbf{z}_j \rangle}{\|\mathbf{z}_q\| \|\mathbf{z}_j\|} $$
The retrieved set is:
$$ \mathcal{I}_k = \underset{\mathcal{J} \subset \{1, \dots, N\}, |\mathcal{J}|=k}{\arg\max} \sum_{j \in \mathcal{J}} S(\mathbf{z}_q, \mathbf{z}_j) $$

**2. Human-Verified Relevance Metric (Hit Rate @ k):**
Per [PAGE 1], the evaluation relies on "human-verified queries and category-relevance labels." Let $R(q) \subseteq \{1, \dots, N\}$ be the ground truth set of relevant precedents for query $q$, verified by human experts.
The Hit Rate at $k$ ($HR@k$) is defined as the proportion of queries for which at least one relevant precedent appears in the top-$k$ results:
$$ HR@k = \frac{1}{|Q|} \sum_{q \in Q} \mathbb{1}\left( (\mathcal{I}_k(q) \cap R(q)) \neq \emptyset \right) $$
where $Q$ is the set of test queries (size 693). The source notes a severe performance floor: $HR@10 < 0.05$ for zero-shot models.

**3. Embedding Space Assumptions and Breakdown Regimes:**
Standard video embedders assume the embedding space is isotropic and primarily driven by photometric consistency or generic object co-occurrence.
*Assumption:* Two videos sharing high cosine similarity contain the same physical action.
*Breakdown Regime:* In soccer fouls, visually similar collisions (e.g., two attackers battling for height) may have opposite refereeing outcomes depending on minute details (who initiated contact, position of the feet). The embedding space fails when the manifold of "visual similarity" is orthogonal to the manifold of "legal/referencing similarity." The singularity occurs when the gradient of the decision boundary in the rule-space projects to near-zero magnitude in the visual feature space.

**4. Category Supervised Fine-Tuning Loss:**
The authors evaluate "category-supervised fine-tuning." If we denote $C(v)$ as the categorical label (e.g., "Tripping," "Pushing"), the fine-tuning objective minimizes the cross-entropy loss:
$$ \mathcal{L}_{cls} = - \sum_{i} \sum_{c} y_{i,c} \log(\text{softmax}(\mathbf{W} \mathbf{f}(v_i))_c) $$
While this aligns $\mathbf{f}$ with coarse categories, the transfer to precedent retrieval (measured by $HR@k$) is modest. Formally, let $\mathcal{M}_{cat}$ be the mutual information between embedding and category, and $\mathcal{M}_{prev}$ be mutual information between embedding and precedent relevance. The findings imply that maximizing $\mathcal{M}_{cat}$ does not proportionally maximize $\mathcal{M}_{prev}$, indicating category labels lack sufficient granularity to resolve the fine-grained retrieval task.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The conceptual lineage of SoccerNet-FoulRet extends far beyond computer vision benchmarks into the epistemological foundations of law and early 20th-century sports officiating. Historically, the concept of "retrieving precedents" belongs exclusively to common law jurisdictions (stare decisis), where judges search corpuses of case law to determine rulings. Applying this to soccer represents a shift from viewing refereeing as an instantaneous application of abstract physics (Law of the Game) to viewing it as a continuous process of analogical reasoning. 

Scientifically, this paper sits at the confluence of Event-QA (Question Answering over Videos) and Contrastive Learning. Early video retrieval relied on handcrafted features like Histograms of Oriented Gradients (HOG) combined with optical flow, entirely failing to grasp "intent." The advent of deep Siamese networks allowed for metric learning, yet these were confined to visual duplicates. SoccerNet-FoulRet retrocausally exposes a flaw in the modern reliance on massive, unsupervised foundation models: they encode statistical regularities of the natural world but remain oblivious to arbitrary social constructs like "professional fouls" or "simulating a dive." 

The multi-week trap lies in assuming that increasing compute or scaling dataset sizes will linearly solve this. Because the ground truth is inherently subjective and reliant on unspoken referee consensus, simply throwing more GPUs at a contrastive loss function will hit a hard asymptotic ceiling (as evidenced by the <5% HitRate@10). The genealogical error is treating refereeing decisions as static labels rather than dynamic, argumentative outputs that require justification—a capability completely absent in current embedding architectures.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
To understand why zero-shot models fail so dramatically on the SoccerNet-FoulRet benchmark, we must simulate the recursive state of mind of the AI system facing a crisis of categorization. When a Vision-Language Model (VLM) processes a query foul—say, a sliding tackle that catches both the ball and the ankle—it enters a regression loop. Its pre-training habit is to identify objects and broad actions ("player", "slide", "ball"). However, to match the "refereeing interpretation," it must regress further into the implicit theory of mind of the off-field referee. It must infer intent: "Did the tackler play the ball first?" This requires counter-factual reasoning (predicting the trajectory had the challenge been clean), which standard feedforward transformers cannot execute.

Consequently, the model exhibits crisis habit regression: instead of performing complex causal inference, it defaults to superficial feature matching (skin tone, jersey color, camera angle, stadium lighting). This explains the paper's finding that relevance is compromised by surface-level variances. The "counter-trap" would be designing a model forced to explicitly articulate the physical dynamics of the collision before retrieving a precedent, effectively forcing the AI to adopt the mindset of a VAR official reviewing the incident. Finally, the "clock" constraint—the immense temporal pressure referees face in real matches—is entirely absent in the offline retrieval setting, creating a false sense of security. An AI system might easily find a precedent given infinite time, yet proving its utility in real-time officiating requires solving the retrieval problem within milliseconds, an engineering constraint the current benchmark does not stress-test.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
For any AI-driven precedent retrieval system to transition from a research benchmark to practical officiating aid, it must survive rigorous cross-layer vetoes, particularly those originating from biomechanics and environmental physics.

First, the **Physical/Biomechanical Veto**: The Laws of the Game often hinge on microscopic biomechanical events, such as whether a foot was planted firmly or sliding when contact occurred. Current RGB-based video embedders aggregate spatial dimensions, inevitably blurring these millisecond, centimeter-scale distinctions. A retrieval system returning a precedent where the defender’s cleat made contact *after* the ball, based purely on visual similarity to a challenge where contact occurred *before* the ball, constitutes a catastrophic adjudication failure. The visual similarity metric must be vetoed if the underlying kinematic reconstruction (via pose estimation) violates the biomechanical constraints of a legal challenge.

Second, the **Weather/Environmental Veto**: Soccer matches are subject to variable weather conditions—rain making the pitch slippery, reducing traction and altering typical sliding mechanics. A foul committed on a pristine dry pitch follows different physical expectations than one on a rain-soaked field. If the retrieval system ignores metadata regarding pitch friction coefficients or precipitation, it risks retrieving precedents from vastly different environmental contexts. Thus, a robust system must incorporate environmental vectors into the embedding space; otherwise, the cross-layer veto invalidates the semantic similarity claim, as the baseline for "excessive force" shifts dynamically with weather variables.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
To validate the fragility of the proposed semantic retrieval paradigm, we establish three Reinforcement Learning from Verifiable Rules (RLVR) scenarios. These act as strict counterfactual vetoes, demonstrating how minor perturbations break the semantic equivalence assumed by the benchmark.

**Scenario 1: The "Advantage" Counterfactual Veto**
*Setup:* A forward is tripped clearly in the penalty area. In the actual footage, the ball rolls away harmlessly, and the referee plays advantage. The retrieval system finds a precedent of a similar trip where a penalty was awarded.
*Verifiable Rule Violation:* Law 5 mandates that a referee stops play for a foul unless the non-offending team benefits from the advantage.
*Prediction:* The retrieval fails because the *outcome* (advantage played vs. whistle blown) dictates the semantic classification of the incident for future review. A model optimizing only for collision geometry will incorrectly flag the awarded penalty as the correct precedent for the advantage-played trip. The RLVR agent penalizes the model for ignoring the temporal consequence following the foul.

**Scenario 2: The Geospatial Veto**
*Setup:* A defender commits a professional foul (a last-man trip) on a fast-breaking attacker. The query video shows the incident occurring 30 yards from the goal. The top-1 retrieved precedent shows an identical trip occurring inside the six-yard box.
*Verifiable Rule Violation:* While both are professional fouls warranting a yellow or red card, the proximate punishment (free kick vs. penalty kick) and the tactical gravity differ fundamentally.
*Prediction:* Purely visual or even basic action-recognition embedders will cluster these tightly. However, an adjudication-aware retrieval system must veto the six-yard box precedent as "semantically too distant" due to the massive difference in expected goals (xG) denied. The retrieval score must decay exponentially relative to the distance from the goal line.

**Scenario 3: The Dual-Intent Ambiguity Veto**
*Setup:* Two attackers collide in the air while jumping for a header. The retrieval system returns a precedent classified as a "reckless challenge" resulting in a yellow card.
*Counterfactual Perturbation:* If we slightly alter the takeoff timing in the query video so that Player A jumps exactly 0.1 seconds earlier, Player B's elbow makes incidental contact.
*Verifiable Rule Violation:* Foul determination relies heavily on "carelessness" vs. "recklessness" vs. "using excessive force."
*Prediction:* The marginal change in takeoff timing shifts the liability entirely from Player B to Player A (for moving dangerously). A static video embedder, unable to isolate individual kinematic causality, will return the wrong liable party's precedent. The RLVR agent enforces a veto requiring precise skeletal segmentation; if the collision dynamics cannot be cleanly separated into actor-specific forces, the retrieval confidence must be forcibly nulled.
</RLVR_COUNTERFACTUAL_VETOES>