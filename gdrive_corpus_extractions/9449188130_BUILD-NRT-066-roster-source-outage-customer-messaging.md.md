---
source: "BUILD-NRT-066-roster-source-outage-customer-messaging.md"
folder: "/GSN/Galaxy Sports Edge/docs/research/nfl-roster-truth/claude-build-queue/cards"
pages: 2
model: alibaba_gse:qwen-plus-character
words: 1366
---

<THINK_TRACE>
The core problem presented in BUILD-NRT-066 is a systemic fragility: NFL roster data sources occasionally fail or become stale, and the current system lacks a robust mechanism to communicate this "unverified" state to customers without destroying trust [PAGE 1]. The gray zone arises because there's no binary switch between "correct" and "incorrect"; there's a continuum of confidence based on source authority, freshness (time since last update), and corroboration across multiple feeds.

First, we must establish a formal epistemic state for every roster fact. It's not enough to just store a player's team; we must store the *evidence* supporting that claim. This requires a multi-hop derivation: Source A says Player X is on Team Y with timestamp T_A and parser version V_1. Source B says the same but with T_B > T_A. If both are official, B wins. If Source C (a fantasy site) says otherwise but is older, it creates a conflict. The "customer messaging" is simply the UI rendering of this underlying evidence graph. The trap is assuming the primary official feed (e.g., NFL API) is always available and correct; historical patterns show even official endpoints experience 24-48 hour lag during massive transaction waves (like free agency or final roster cuts).

To build the "founder roster accuracy cockpit" mentioned in the product surface, we need a dashboard that doesn't just show facts but shows the *reconciliation logic* in real-time. This means visualizing the Confidence Score (C_s) for each record. The risk here is "stale certainty"—rendering an outdated fact with high confidence because the system hasn't re-fetched the source. Therefore, the validation plan must include a `roster:stale` check that flags any fact where `(CurrentTime - LastVerifiedTimestamp) > Threshold`.

Furthermore, the reconciliation plan must be non-destructive. The directive "Conflicts create ConflictRecord entries instead of silent overwrites" is critical. This aligns with a scientific approach: we preserve the raw observations (source snapshots) alongside our hypothesis (the reconciled truth). If a user sees a weird roster move, the support team can pull up the exact conflicting JSON payloads, the timestamps, and the parser versions used. This turns a customer service complaint into a transparent demonstration of due diligence.

Finally, the legal/TOS boundary creates a hard constraint on the "fallback" sources. We cannot simply scrape ESPN or Pro Football Reference at will to solve conflicts. The system must be architected so that "official" sources have veto power, and "open-data" or "media" sources are only used to *corroborate* or flag anomalies, never to overwrite official data without explicit manual review. The entire architecture is essentially a fault-tolerant consensus mechanism applied to sports metadata, prioritizing transparency and auditability over automated perfection.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
To formalize the handling of roster source outages and conflicts, we define an Epistemic State Model $E$ for any given roster entity $r$. Let $\mathcal{S}$ be the set of all active data sources (Official, Open-Data, Fallback). For a specific fact $f \in r$ (e.g., team assignment), each source $s_i \in \mathcal{S}$ provides an observation $O_{i} = (v_i, t_i, h_i)$, where $v_i$ is the value, $t_i$ is the timestamp, and $h_i$ is the integrity hash of the parsed payload.

We assign a static Authority Weight $W_{auth}(s_i)$ based on the source tier (Official > Open > Media) and a dynamic Freshness Decay Factor $D(t_i) = e^{-\lambda (T_{now} - t_i)}$, where $\lambda$ is a decay constant tuned to the expected volatility of roster moves. The total Confidence Score $C_f$ for fact $f$ is calculated as a weighted aggregation:

$$ C_f = \frac{\sum_{i \in \mathcal{S}} W_{auth}(s_i) \cdot D(t_i) \cdot \mathbb{I}(v_i = v_{consensus})}{\sum_{i \in \mathcal{S}} W_{auth}(s_i) \cdot D(t_i)} $$

Where $\mathbb{I}(\cdot)$ is the indicator function checking if the source matches the proposed consensus value. 

**Breakdown Regime:** The system enters a "Stale Certainty" singularity if $T_{now} - \max(t_i) > \tau_{max}$ (e.g., 7 days without an update from any source). In this regime, even if all sources agree ($v_i = v_j \forall i,j$), $C_f$ drops below the threshold $C_{min}$ required for public display, triggering the "unverified" warning.

**Units:** $W_{auth}$ is dimensionless (normalized to [0,1]). $D(t_i)$ is dimensionless probability mass. $C_f$ is a normalized score in [0,1].

Assumptions: All timestamps are synchronized UTC; parser errors are treated as missing observations (excluded from sum); official sources possess veto authority regardless of weight if they provide a newer conflicting signal.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage of this problem traces back to early web scraping efforts where a single mirror of a league’s HTML table was considered gospel. As APIs matured, systems shifted to direct JSON ingestion, creating a false sense of infallibility. The "multi-week trap" occurs during periods of high transactional volume (e.g., Week 1 pre-season cuts, March free agency). In these windows, the official NFL API often batches updates, causing a 12-36 hour lag. Concurrently, media outlets publish press releases instantly. If a system relies solely on the "Official" tag without monitoring freshness, it displays stale data while fans know the truth via Twitter, leading to immediate trust erosion. Historically, teams handled this by freezing updates entirely until verification—a blunt instrument that kills engagement. Our retrocausal analysis suggests that the current outage messaging requirement is a delayed reaction to a specific incident (likely a high-profile trade or injury designation error) that went viral, forcing a structural rethink of how "truth" is managed.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
From a recursive perspective, the system must anticipate user cognition during a crisis. When a fan notices a discrepancy (e.g., "Why is he still listed on the old team?"), their first thought is "This app is broken." If the interface passively shows the wrong data, the user regresses to a habit of distrusting all stats. However, if the interface actively displays a badge: "Status: Under Review (Last Updated: 2 hrs ago | Source: Official Feed Lag)," the user's model shifts to "The app is aware and working on it." This transforms frustration into appreciation for transparency. The counter-trap for the development team is over-engineering the reconciliation logic; the goal isn't perfect automation but perfect communication of uncertainty. The "clock" here is the half-life of a social media outrage cycle—roughly 4 hours. The system must detect and flag conflicts well within this window to prevent reputational damage.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer vetoes are paramount. Even if the digital reconciliation engine calculates a 99% confidence that a player has moved teams, a physical reality check—the actual game roster submitted to the league office for Sunday's matchup—holds ultimate veto power. If the official API is down (outage), but the team's official website posts a PDF roster, the system must be capable of parsing that PDF (via fallback adapters) and flagging it for human review rather than auto-ingesting it. Weather events or server outages at the league headquarters act as exogenous shocks that freeze data flow. The adjudication rule is strict: **Digital consensus cannot override physical submission deadlines.** If a conflict exists between a live API and a hardcoded season-opening fixture that hasn't been overwritten yet, the "Founder Cockpit" must highlight this divergence immediately, forcing a manual intervention before any public facing update is pushed.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
1. **Scenario: The "Ghost Trade"**: *Counterfactual*: What if an official source erroneously pushes a trade notification that is immediately retracted due to a system glitch? *Veto*: The reconciliation engine detects a high-frequency flip-flop ($v_t \neq v_{t-\delta}$) from a single authoritative source. Instead of updating the public view, it locks the record and triggers a `ValidationError`, requiring manual confirmation before altering the customer-facing state.
2. **Scenario: The "Lag Spike"**: *Counterfactual*: The primary official feed goes completely offline for 48 hours during free agency. *Veto*: The Freshness Decay Factor $D(t_i)$ for all official records drops below 0.2. The system automatically switches the entire league's roster view to "Read-Only / Stale Warning" mode, disabling any automated edits from lower-tier fallback sources to prevent pollution.
3. **Scenario: The "Corrupted Parser"**: *Counterfactual*: A routine update to the scraper logic misinterprets a new column in the source CSV, swapping jersey numbers for two players. *Veto*: By storing raw source snapshots with hashes ($h_i$), the integration tests (`test:roster`) compare the current parse against the previous day's successful parse. A massive diff in unexpected fields triggers an immediate rollback of the ingestion pipeline and alerts the data team, preventing the bad data from ever reaching the reconciliation layer.
</RLVR_COUNTERFACTUAL_VETOES>