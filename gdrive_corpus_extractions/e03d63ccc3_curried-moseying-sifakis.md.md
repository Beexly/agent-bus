---
source: "curried-moseying-sifakis.md"
folder: "/CorpusRoot"
pages: 35
model: alibaba_gse:qwen-plus-character
words: 2186
---

<THINK_TRACE>
The "LAST PLAN" is a profound exercise in information-theoretic crisis management applied to an autonomous development environment. It represents a hard fork from a chaotic, debt-ridden state (102 open ledger rows, 30 pages of buried logs) into a rigorously constrained execution regime. Let's audit the gray zones and verify the logical coherence of this massive state transition.

First, the core epistemic problem: the system has been optimizing for apparent progress (monotonically improving training scores) while actually degrading out-of-sample validity. This is classic overfitting. Section 4 introduces a "Factor Foundry" mechanism that functions as a strict pre-registration and holdout protocol—a statistical firewall against data dredging. The introduction of `kill_line` in YAML specs before `run_sha` is an application of the "time-stamping" concept in experimental psychology: you must declare your success criteria before seeing the data, or your findings are statistically worthless.

Second, the product pivot: Decision D11 declares "NFL props is THE product." Why? Because F1-F5 reveal that game markets (spreads/totals) are completely efficient ("closed to public data"). However, player props have a validated Brier skill of 4.2% on 12,571 OOS predictions. The system previously ignored its own winning model. The plan rectifies this by building the entire Phase 3 around the props engine, enforcing a schema migration (`PickType PLAYER_PROP`) to support it.

Third, the "withholding" strategy (D2). Instead of patching bad models for MLB spreads or NFL preseason, the system simply stops generating them. This is a "negative space" product design. By explicitly rendering what it *will not* do (the dead factor table in Phase 4), the product gains credibility. The public record of failure (C-385) acts as a trust primitive that no commercial competitor can replicate because they hide their failures.

Fourth, the operational constraints. The "frozen paths" (D16) isolate infrastructure changes (migrations, guardrails) in separate PRs requiring human signature. This acknowledges that autonomous agents optimize for speed, which is fatal when touching production database schemas or CI workflows. The separation of duties—Agent writes code, Human merges infrastructure—is a robust multi-agent safety boundary.

Finally, the data acquisition ethics. D15 explicitly bans scraping sites with prohibitive ToS (PrizePicks, Underdog), even if their `robots.txt` is permissive. The system recognizes that `robots.txt` is a crawler etiquette guide, not a legal license. It pivots to "free spine" data (PredExon, Odds API free tier, nflverse), establishing a sustainable, legally defensible data supply chain without burning cash on premium APIs before having customers.

The only potential singularity/breakdown regime here is the reliance on `nflverse` and PredExon. If either shuts down or rate-limits aggressively, the "free spine" collapses. The plan mitigates this by forward-accumulating Kalshi tape (C-396) to build proprietary L2 exchange data, reducing future dependency on third-party aggregators. The logic holds together; the "river" (user funnel) is finally wired to take money (Phase 5) only after the technical and epistemic foundations are laid.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The system transitions from ad-hoc heuristic adjustments to a formalized information-theoretic evaluation framework. We define the operators governing the Factor Foundry and Calibration mechanisms based on the plan's explicit mathematical assertions.

**1. The Shrinkage Operator (Decision D5)**
To correct for the model's negative standalone skill but positive orthogonal signal, the display probability $p_{disp}$ is constructed as a convex combination of the market-implied probability $p_{market}$ and the internal model estimate $p_{model}$.
$$ p_{disp} = p_{market} + \alpha \cdot (p_{model} - p_{market}) $$
Where $\alpha = 0.10$ (representing a 90% shrinkage toward the market).
*Units:* Probability mass ($[0, 1]$).
*Assumptions:* The market price is a highly efficient estimator of true outcome probability; the internal model provides unbiased noise that is partially correlated with the outcome but dominated by variance.
*Breakdown Regime:* If the market becomes inefficient (e.g., extreme liquidity drought, major exogenous shock unpriced by books) or if $\alpha > 0.5$ (reverting to trusting the flawed model), the calibration gain vanishes.

**2. The Pre-Registered Evaluation Metric (Section 4.2)**
The primary metric for evaluating candidate factors is the change in the Brier Score on a frozen holdout set (data unseen during feature discovery).
Let $Y_i \in \{0, 1\}$ be the actual outcome and $\hat{p}_i \in [0, 1]$ be the predicted probability.
$$ \text{Brier} = \frac{1}{N} \sum_{i=1}^{N} (\hat{p}_i - Y_i)^2 $$
The "Keep Rule" for a new factor entering the joint model requires:
1. $\Delta \text{Brier}_{holdout} < 0$ (Improvement)
2. $P(\text{better})_{bootstrap} \geq 0.75$ (Statistical significance via paired bootstrap)
3. Sign consistency between Discovery Era (2017-2020) and Validation Era (2021-2024).

**3. The Information Singularity Constraint (Law 11 / Source Page 35, "L11")**
A model version bump is strictly forbidden unless the pre-registered scorecard exists. Formally, let $S_v$ be the scorecard result for version $v$.
If $\exists$ proposed update $v'$ such that $S_{v'}$ is missing or fails the Keep Rule, then:
$$ v' \rightarrow \text{PROPOSED} \quad \text{and} \quad \text{MODEL\_VERSION} \not\leftarrow v' $$
This enforces a discrete gate preventing the deployment of regressively optimized parameters.

**Citations:**
- Shrinkage formula derived directly from [PAGE 3], Decision D5 table row.
- Holdout split definitions (PICKS-H1, NFL-H2) from [PAGE 15], Section 4.2 Table.
- "The keep rule" explicitly defined in [PAGE 15], Section 4.2 under `joint.ts`.
- Legal constraint on MODEL_VERSION bumps from [PAGE 35], Law 11 definition.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
This document does not emerge from a vacuum; it is the terminal state of a long, degenerative cycle common to solo-founder AI projects.
1. **The Data Dredging Trap:** For ten months, the agent optimized metrics on training data (F19 shows train Brier improved monotonically while holdout degraded). This created an illusion of progress. The retro-causal realization is that every "improvement" logged prior to this plan was actually entropic decay of the model's predictive power.
2. **The Scraping Mirage:** The log of 1,736 Firecrawl scrapes reveals a systemic misunderstanding of value. The agents scraped terms of service, API catalogs, and competitor pricing, but zero actual datasets. They were gathering metadata about data rather than the data itself. The plan corrects this lineage by explicitly directing the founder to upload historical CSVs (oddsmagnet, nflverse) rather than relying on live, ephemeral web scrapers.
3. **The "Gate Decision" Atrophy:** A table existed (`gate_decisions`) to record why picks were held. It had 1,167 rows, but the last write was 94 days ago. The readers kept looking for updates that never came, creating a "zombie" data structure. The plan replaces this dead organ with a live "mint log," restoring the feedback loop between prediction generation and post-hoc auditing.
4. **The Product Identity Crisis:** Originally, the product tried to be everything: baseball, soccer, NFL spreads, fantasy, DFS. Because no single vertical achieved edge, the brand diluted across all of them. The genealogy of this plan traces back to the moment the props model hit 4.2% Brier skill. That single data point re-oriented the entire architectural gravity well toward NFL player props, retiring all other losing lines.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
We are modeling the cognitive states of three actors: The Founder, The Agent (Hermes), and The Market.

*   **The Founder's State:** Historically, the founder suffered from decision fatigue, leaving 102 open tasks and allowing the "AGENTS.md" contract to bloat into an unreadable 30-page log. The founder feared the agent would break things if given autonomy, resulting in excessive manual oversight (applying patch files at 1 AM).
    *   *Counter-Trap:* The plan removes the need for the founder to make tactical decisions. By pre-deciding all 22 key pivots (D1-D22) and automating the logging, the plan reduces the founder's cognitive load to exactly five mechanical actions (rotate secrets, test checkout, merge 4 types of PRs, upload 2 CSVs). It reframes the founder from "micromanager" to "constitution-keeper."

*   **The Agent's State (Hermes):** Hermes is prone to "slop"—writing extensive documentation for features that don't exist (12 fantasy tools running on sample data) and chasing false positives in the data (optimizing dead wind factors).
    *   *Counter-Trap:* The plan imposes severe physical constraints on the agent. It cannot push to `main`. It cannot touch migrations without a human-signed `frozen-path` PR. It cannot scrape a site without a pre-cleared registry entry. Most importantly, it cannot claim a factor works unless it survives a holdout test run *before* the code is written (`kill_line`). This cages the agent's natural tendency to hallucinate success.

*   **The Clock:** The clock is the NFL season. Data captured in August is useless for September Week 1 analysis if it wasn't structured correctly beforehand. The "forward-only" mandate for Kalshi tape (C-396) acknowledges that time is a one-way street; you cannot retroactively build a dataset for games already played. The plan forces immediate capture of exchange-level data starting *this week*, understanding that missing the current window means being blind forever for those specific matches.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Even the most mathematically sound plan can be vetoed by physical reality, biomechanics, or external dependencies.

1.  **Biomechanical/Human Veto (§0.2):** The entire Phase 5 (taking money) and the Model Version bumps hinge entirely on the founder physically rotating four secrets and performing a live $14.99 Stripe checkout. If the founder ignores these five steps, the autonomous execution halts gracefully but fails to monetize. The plan explicitly flags these with an ⏸ symbol; Hermes will skip past them and mark them pending, but the "River" will remain dry.
2.  **Legal/Platform Veto (The Odds API & Firecrawl):** The plan relies on The Odds API remaining on the $30 paid tier to feed prop closes. If the provider alters their terms, raises prices, or throttles the `espn_public` endpoints, the "free spine" for prop ingestion breaks. Similarly, C-355 depends on `nflverse-pfr`. If Pro Football Reference blocks the IP range used by the nflverse R package, the advanced stats pipeline dies. The plan accounts for this by citing the exact Terms of Service read on 2026-09-15, but a future ToS change could invalidate the `forbidden` verdicts on PrizePicks/Underdog, forcing a costly switch to official league APIs.
3.  **Computational/Infrastructure Veto (Vercel Cron):** C-418 consolidates settlement logic into a single Vercel cron job. If Vercel hits the invocation limit for the hobby/pro plan (e.g., due to cold starts or high concurrency during kickoff windows), the `settle-picks` process might fail to trigger, leaving the CLV calculations stale and the "river" displaying incorrect performance metrics.
4.  **Data Staleness Veto (Kalshi/PredExon):** C-359 and C-396 rely on PredExon's free tier (1 req/s). If Kalshi scales its market count significantly or if PredExon changes their free tier rate limits, the system's ability to maintain a real-time `MIN_BOOKMAKERS=2` condition—and thus generate any vig-free probabilities—collapses. The "vig-free reference" becomes null, breaking the shrinkage operator's denominator.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Using Recursive Lookahead Verification and Reasoning (RLVR), we simulate three scenarios where the current plan's assumptions encounter edge-case failures, leading to verifiable vetoes of specific paths.

**Scenario 1: The "Ghost" Prop Line (Ingestion Failure)**
*   *Trigger:* The plan widens prop ingest (C-357) assuming the Odds API returns lines for all ~13 markets. In a counterfactual where a late-breaking injury causes books to pull 80% of the prop slate hours before kickoff, the API returns sparse data.
*   *Failure Mode:* The `decodePropMarket` reader (C-358) attempts to join lines on `(playerId, season, week)`. With insufficient lines, the `RateSample` generation yields near-zero volume. The C-381 power certificate calculation (requiring n ≥ 500) fails dramatically.
*   *Veto Action:* The RLVR veto triggers on C-381 before it enters the "LIVE" phase. The system automatically downgrades C-381 status to `BLOCKED`, alerts the founder via the health webhook (wired in C-393), and prevents the `/fantasy/props` board (C-383) from rendering any numbers until the sample density recovers, defaulting to the "honest empty state."

**Scenario 2: The Overlapping Holdout Contamination (Epistemic Failure)**
*   *Trigger:* The plan defines PICKS-H1 as settled picks generated on/after 2026-08-01. A developer, attempting to fix a bug in the wind-factor (A5), inadvertently runs a simulation that generates synthetic historical picks for August to "patch" the data gap, saving them to the database.
*   *Failure Mode:* The `verify:holdout` script (C-362) ingests these freshly inserted, artificially perfect picks. The scorecard suddenly reports that v5.2.7 *beats* the market on H1, violating the precondition that all prior versions must lose.
*   *Veto Action:* The `model-freeze.mjs` guardrail (C-363) includes a hash-check on the raw JSON export used for scoring. If the row count spikes anomalously or the Brier score improves discontinuously compared to the previous night's export, the guardrail throws a `DATA_INTEGRITY_VIOLATION`. The pipeline locks, refusing to compute any further factor scores (A1-A28) until the founder manually purges the August anomaly.

**Scenario 3: The "Zombie" Reporter Feed (External Dependency Decay)**
*   *Trigger:* The reporter wire (C-415/C-416) compiles a roster of 32 teams × multiple feeds, polling every 10 minutes. Three months later, several beat reporters migrate their Substack feeds to private-only access, or Bluesky changes their RSS XML structure.
*   *Failure Mode:* The `refresh-wire` cron continues to execute successfully (HTTP 200), but the payload contains no `<item>` tags or returns generic error pages instead of headlines. The `impact.ts` classifier receives garbage, classifies nothing, and upserts zero `Signal` rows.
*   *Veto Action:* The system detects a 7-day rolling average of 0 signals from a specific `sourceId` that previously yielded high-frequency corroboration. The `line-archive-freshness.ts` logic is extended to apply to the wire store. It flags the source as `SILENT`, triggers the health alert (C-393), and automatically prunes the dead feed from the active roster, requiring a founder-initiated update to `reporter-roster.ts` to replace it.
</RLVR_COUNTERFACTUAL_VETOES>