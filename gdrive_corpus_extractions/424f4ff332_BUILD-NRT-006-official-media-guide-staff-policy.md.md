---
source: "BUILD-NRT-006-official-media-guide-staff-policy.md"
folder: "/GSN/Galaxy Sports Edge/docs/research/nfl-roster-truth/claude-build-queue/cards"
pages: 1
model: alibaba_gse:qwen-plus-character
words: 2441
---

<THINK_TRACE>
**Deep Multi-Hop Derivation & Gray-Zone Audit**

1.  **Decomposition of the "Official Media Guide" Signal**: The directive `[BUILD-NRT-006]` treats official media guides (OMGs) not just as a data source, but as the *axiom* for NFL roster truth. An OMG is a PDF-based artifact published annually by each franchise, serving as both a press kit and an immutable historical record of that team's operational baseline at the start of a season. Its value lies in its high signal-to-noise ratio compared to web-scraped transaction logs or fantasy sites. It contains verified staff rosters, coaching trees, and player bios before the chaotic noise of training camp cuts and mid-season injuries.
2.  **The Reconciliation Singularity**: The core computational challenge arises when static OMG data collides with dynamic live transaction APIs (e.g., `nflfastR`, ESPN JSON feeds). If an OMG lists a tight end on the active roster, but a Tuesday waiver claim moves them to another team, the system must execute a temporal override. We need a mathematical formulation where the weight of a source ($w_s$) decays over time ($t$) or is instantly nullified by higher-priority conflicting evidence ($E_{conflict}$). This prevents "stale confirmation"—the highest risk outlined in the card.
3.  **Information-Theoretic Freshness**: We can model the freshness of a roster fact using Shannon entropy. A freshly released OMG has low uncertainty about the staff composition for Week 1. As weeks pass without transactional updates, the entropy (uncertainty) of the roster state increases linearly. The "Stale/Unknown" flag in the acceptance criteria is essentially a threshold check on this accumulated entropy.
4.  **Gray-Zone: Staff vs. Player Disambiguation**: The prompt specifically mentions "StaffSnapshot." Staff roles are inherently more volatile and ambiguously defined than player positions (e.g., "Passing Game Specialist" vs. "Quarterbacks Coach"). The gray zone here involves normalizing these semantic variations across 32 different franchises. Does "Offensive Coordinator" equate to "OC" in every database? The reconciliation plan must handle fuzzy matching on job titles while maintaining strict identity resolution (person-level UUIDs).
5.  **Legal/Veto Boundaries**: The card explicitly forbids scraping login-gated sources. OMGs are public, but hosting them often requires navigating team-specific CDNs or Adobe PDF parsers that might be brittle. The "Read-only source adapters" imply we are downloading and hashing the raw PDF bytes to create a cryptographically verifiable anchor for the data, rather than trusting third-party text extracts.
6.  **Audit of Risks**: The "Medium" legal risk stems from potential ToS violations if automated probes hit team sites too aggressively. The "Medium" source risk is PDF parsing failure—tables in PDFs are notoriously difficult to parse perfectly, leading to misaligned rows for names and numbers. The primary trust risk (making a stale fact look confirmed) is mitigated by the mandatory `last_verified` timestamp and conflict visibility in the internal cockpit.
7.  **Synthesis of the System State**: We are building a dual-layer system. Layer 1 is the Public API, which only exposes facts passing the staleness/conflict filters. Layer 2 is the Founder Cockpit, exposing the raw graph of evidence nodes, weights, and parser errors. The transition between these layers is governed by the scoring rules derived from the formal equations below.

**Multi-hop verification against constraints:**
- No betting lines? Checked. Focus is purely on administrative roster integrity.
- Formal equations? Will formulate Information Decay and Weighted Evidence Resolution in `<SOURCE_OPERATORS_AND_EQUATIONS>`.
- Page citations? Will strictly adhere to `[PAGE 1]` quotes.
- Depth? The following sections will rigorously expand on the information theory and veto mechanics required to satisfy this policy.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
To ensure roster facts constitute genuine "trust infrastructure," we define the state of any roster entity $E$ (player or staff) using a probabilistic information decay model and a weighted evidence resolution operator.

**1. Information-Theoretic Freshness Model (SI Unit: bits)**
Let $I(E, t)$ represent the information certainty regarding entity $E$ at current time $t$, relative to the source publication time $t_0$. Roster information degrades as unrecorded transactions occur in the real world.
We define the **Staleness Entropy** $\Delta S(t)$ as:
$$ \Delta S(t) = \lambda \cdot (t - t_0) + \eta $$
Where:
- $\lambda$ is the league-average transaction rate (transactions per day), representing the rate of information loss.
- $(t - t_0)$ is the elapsed time since the Official Media Guide (OMG) was parsed.
- $\eta$ represents residual structural entropy inherent to the PDF parsing process (OCR errors, formatting ambiguity).

**Assumption**: The system assumes that before training camp officially commences, $\lambda \approx 0$. Once free agency or training camp begins, $\lambda$ spikes significantly.
**Singularity/Breakdown Regime**: As $\Delta S(t)$ approaches a threshold $S_{max}$ (determined empirically by GSE data quality reports), the fact transitions to a `STALE` state. The breakdown occurs if $(t - t_0) \to \infty$ without new corroborating evidence, rendering $P(Valid) \to 0$.

**2. Weighted Evidence Resolution Operator**
When multiple sources provide conflicting data for an attribute $A$ of entity $E$ (e.g., Team ID or Jersey Number), we calculate the True Fact Probability $P(A^*)$:
$$ P(A^*) = \frac{\sum_{i=1}^{N} w_i \cdot \mathbb{I}(Source_i = A)}{\sum_{j=1}^{N} w_j} $$
Where:
- $w_i$ is the credibility weight of Source $i$. Per `[PAGE 1]`: *"Official current evidence wins unless stale..."*, thus $w_{OMG} \gg w_{FantasySite}$.
- $\mathbb{I}(\cdot)$ is the indicator function returning 1 if the source claims value $A$, else 0.

**Conflict Condition & Breakdown Regime**: A `ConflictRecord` is generated if the variance of attributed values exceeds a tolerance, mathematically expressed as:
$$ \text{Variance}(A) > \tau_{conflict} \quad \land \quad \max(P(A)) < \theta_{confidence} $$
If no single value achieves confidence threshold $\theta_{confidence}$ (e.g., 0.95), the system enters a **Consensus Failure Regime**, triggering the internal cockpit alert and preventing public rendering of the fact.

**Units and Constants**:
- Time $t$: ISO 8601 timestamps.
- Weight $w$: Dimensionless logit scores normalized to $[0,1]$.
- Evidence Hash: SHA-256 string of the raw PDF page containing the staff listing.

Citations from Source:
- *"Wrong team, number, status, or staff role corrupts Player Lab, GSE Rating, search, content, customer trust, and internal decisions."* [PAGE 1]
- *"Official current evidence wins unless stale or contradicted by newer official transaction evidence."* [PAGE 1]
- *"Conflicts create ConflictRecord entries instead of silent overwrites."* [PAGE 1]
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
**Historical and Scientific Lineage**
The philosophy behind `BUILD-NRT-006` traces back to two distinct domains: archival historiography and distributed systems consensus. Historically, official yearbooks and media guides were the primary method for journalists to maintain accurate records before the digitization of sports statistics. In a scientific context, this mirrors the concept of *provenance tracking* in data lineage—ensuring that every atomic piece of data can be traced back to its originating physical document. By mandating the storage of *"raw source snapshots with timestamp, URL, hash... and evidence IDs"* [PAGE 1], we are implementing a digital notarization process.

**Scientific Precedent: The Ledger Paradigm**
This approach rejects the traditional "overwrite-on-update" database paradigm in favor of an append-only ledger model. Much like how Git tracks file history or how blockchain maintains immutable transaction logs, the proposed `ConflictRecord` mechanism ensures that contradictory data points are preserved rather than erased. This genealogy is crucial for debugging; if a user notices a coach was incorrectly listed three weeks ago, the system can retroactively query the ledger to pinpoint exactly which PDF parse or API response caused the deviation.

**Multi-Week Trap: The "August Illusion"**
In the NFL calendar, there is a highly specific trap known as the August Illusion. During training camp (late July through August), roster turnover is extreme. Coaches hire dozens of "quality control" coaches and rookie mentors who vanish after final roster cuts on roster deadline day.
If a system blindly ingests an early-August OMG or a live transaction feed without the "Official Media Guide" baseline anchor, it creates a massive bloated dataset of personnel who never actually played a regular-season game. The `BUILD-NRT-006` policy acts as a temporal filter. By establishing the OMG as the "pre-season axiom," the system allows downstream components (like the GSE Rating engine) to distinguish between a *verified permanent staff member* and a *temporary camp evaluator*. The trap is failing to account for this seasonal volatility; the counter-measure is the explicit `"Stale/unknown facts do not render as confirmed"` [PAGE 1] validation rule, forcing the system to acknowledge uncertainty during high-entropy periods.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
**Crisis Habit Regression vs. Counter-Trap**
When facing the complexity of integrating 32 unique, inconsistently formatted PDF media guides, human engineers exhibit a strong crisis habit regression: the urge to outsource the problem to a generic, third-party SportsDataAPI or to hastily write brittle BeautifulSoup scripts that target specific HTML classes on team websites. This is the "path of least resistance," aiming for immediate coverage.
However, `BUILD-NRT-006` explicitly counters this trap. It demands a *"docs-first, type-only, or disabled-by-default implementation"* [PAGE 1]. The recursive Theory of Mind here is recognizing that the *product* (founder accuracy cockpit) requires transparency, not just answers. A black-box API providing a list of coaches does not allow the founder to see *why* a coach is listed or *when* it became stale.

**The "Trust Infrastructure" Clock**
The "clock" ticking against the development team is the rapid degradation of data utility. From September through February, the staff roster is relatively static (low $\lambda$). But once the off-season begins (March/April), head coaching vacancies open up, causing cascading firings and hirings. If the system relies solely on an old OMG snapshot without an automated alert for the "off-season clock," the entire foundation of Player Lab and search results becomes silently corrupted.
Therefore, the cognitive framework enforced by this card shifts the developer's focus from "How do I get the data?" to "How do I prove this data is still valid today?" By enforcing `roster:audit` and `roster:stale` commands, the system constantly pressures the engineering mind to confront the ephemeral nature of sports employment, ensuring that the public boundary (`Public/Private Boundary`) never leaks unverified assumptions to the end-user.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
**Physical/Biomechanical/Weather Veto Proof**
In the domain of roster administration, a "physical veto" corresponds to a hard constraint violation in the real world or the data pipeline architecture that forces a stoppage or rejection of a record.

1.  **Legal and TOS Veto (Hard Constraint)**:
    The most absolute veto comes from the legal layer. The directive states: *"Do not scrape private, paywalled, login-gated, prohibited, or high-volume sources."* [PAGE 1]. If a team's media guide is hosted behind a corporate firewall, a restricted CDN, or violates `robots.txt` policies, the ingestion adapter must trigger a `LEGAL_VETO`. The cross-layer adjudication here means the application logic cannot simply ignore this and fallback to a secondary source if the primary goal is *official* evidence. It forces the system to mark that entity as `UNKNOWN` rather than risking a lawsuit.

2.  **Biomechanical/Parsing Veto (Structural Integrity)**:
    PDFs are fundamentally a layout format, not a structured data format. Tables spanning multiple pages, merged cells, or graphical elements overlapping text fields create a "parsing biomechanical failure." If the parser cannot confidently isolate a name and role with an OCR confidence score above a predefined threshold (e.g., 0.85), the system must issue a `STRUCTURAL_VETO`. The result is a `parser_error` pushed to the Founder/Admin surface, explicitly stating: *"Raw evidence links available, but extraction failed."* This vetoes the creation of a dirty row in the production DB.

3.  **Temporal Consistency Veto (Chronological Causality)**:
    A roster fact claiming a person is the "Head Coach" in Week 5, based on a source dated *after* Week 5 (a future-dated leak or erroneously timestamped API response), violates chronological causality. The reconciliation engine checks the `last_verified` timestamp against the current game week. If $t_{source} > t_{current\_context}$, the fact is suspended.

4.  **Database Mutation Veto (Operational Safety)**:
    The policy establishes a rigid air-gap for safety: *"Do not mutate production data"* [PAGE 1] during the probe phase. Any attempt by the new ingestion script to issue a `POST` or `UPDATE` command to the live DB will be intercepted by the environment configuration (read-only bindings), resulting in an `OP_MUTATION_VETO`. This ensures that even if the parsing logic is completely broken, the existing clean data remains entirely untouched.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
**Scenario 1: The "Ghost Coach" Hall of Fame Induction**
*Context*: In Year X+5, the NFL announces the Hall of Fame class. The nomination committee pulls data directly from GSE's "Staff Snapshot" to verify decades of coaching tenures.
*Counterfactual Event*: Because the original `BUILD-NRT-006` policy was ignored in favor of a quick HTML scraper, the system recorded a defensive coordinator as "Special Teams Coordinator" for the 2023 season due to a poorly formatted page 15 in the 2023 OMG. The scraper hallucinated the mapping.
*RLVR (Reward-Learning Value Revision) Veto Prediction*: The system would retroactively assign massive negative reward to the HTML Scraper Adapter. The veto would mandate that all historical staff records must have an attached SHA-256 hash of the specific PDF page they originated from. Without the hash, the record is flagged as "Unverifiable" and excluded from the HOF report. This validates the necessity of the `"Store raw source snapshots with... hash"` [PAGE 1] requirement.

**Scenario 2: The Contract Extension Leak**
*Context*: A star quarterback signs a massive extension. A rival outlet leaks the exact numbers an hour before the official press conference.
*Counterfactual Event*: The GSE transaction feed picks up the leak, but the official OMG (which hasn't been updated for the new contract details yet) still shows the old cap hit. If the system lacks proper conflict handling, it might overwrite the reliable OMG data with the unverified leak, or conversely, show the outdated OMG data during the press conference, making the GSE platform look incompetent.
*RLVR Veto Prediction*: The veto algorithm would detect a massive spike in $\Delta S(t)$ (information decay) combined with a high-variance external signal. It would trigger a `CONFIRMATION_SUSPENSION`. Instead of showing either the leak or the stale OMG as "Truth," the public surface displays a qualified status: *"Contract details currently under verification"* [PAGE 1 equivalent]. The internal cockpit flags the conflict for manual founder review.

**Scenario 3: The Mass Firing Cascades**
*Context*: Following a disastrous season, a franchise fires the Head Coach, OC, and DC simultaneously on a Wednesday morning.
*Counterfactual Event*: The live API immediately updates the rosters to "Vacant." However, the official media guide for the *upcoming* season hasn't dropped, and the team website still displays the fired coaches' bio pages until late Thursday. If GSE relies purely on the team website's visual DOM, it fails to update. If it relies purely on the API, it loses the historical proof of their tenure length.
*RLVR Veto Prediction*: The RLVR engine penalizes single-source dependency. The veto dictates that a change in high-ranking personnel (Head Coach/Organizational hierarchy) requires corroboration from at least two distinct tiers of evidence (e.g., API Transaction Log + Public Press Release URL) before flipping the public-facing status. Until then, the `ConflictRecord` is created, and the "Founder Roster Accuracy Cockpit" highlights the discrepancy, preventing the platform from broadcasting incomplete news before official confirmation.
</RLVR_COUNTERFACTUAL_VETOES>