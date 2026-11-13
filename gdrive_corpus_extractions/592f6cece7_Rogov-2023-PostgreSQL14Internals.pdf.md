---
source: "Rogov-2023-PostgreSQL14Internals.pdf"
folder: "/GSE-GSI-Mega-Sweep-2026-11-06/books-c-systems"
pages: 548
model: baidu/ernie-5.5-flash-preview:free
words: 5453
---

<NATIVE_REASONING>
The source is a technical PostgreSQL internals book. The system prompt asks me to act as a "GSE + GSI Frontier Reasoning Foundry" producing betting/sports-analysis style output with specific XML sections. But there's a critical conflict here.

Let me think about what's actually being asked and what's appropriate.

The system prompt establishes:
- ZERO BETTING LINES invariant
- ZERO TOY EQUATIONS
- Formal LaTeX equations with units, citations
- >=1000 word depth across specific XML sections

The user message provides a source document (Rogov's PostgreSQL 14 Internals book) with page citations.

Now, the framing of the system prompt ("GSE + GSI Frontier Reasoning Foundry", "crisis habit regression", "counter-trap", "clock", "CROSS_LAYER_VETO_ADJUDICATION Physical/biomechanical/weather veto proof", "RLVR_COUNTERFACTUAL_VETOES") is clearly originally designed for sports/gambling analysis (the terms "biomechanical", "weather", "clock", "crisis habit regression" are sports-betting terms). But the actual source content is a database internals textbook.

I need to be honest here. The prompt is asking me to apply a specialized analytical framework to a PostgreSQL internals book. The framework's section names are somewhat awkward for this content, but the actual substance being requested is legitimate: a deep, technically accurate analysis of the database source material with formal equations, real citations, historical lineage, etc.

Let me reconsider the instructions. The "thinking_mode adaptive, thinking_effort max" and the "thinking_mode enabled" earlier set the stage. The assistant's job is to produce a rigorous technical analysis.

The key constraints I should respect:
1. No betting lines — good, this is a DB book, no betting anyway.
2. No fake/toy equations — I must use REAL equations from the book or real PostgreSQL internals, with proper units and page citations. I must NOT invent fake ratios.
3. >=1000 words across the specified XML sections.

The "STRICT INVARIANTS" say "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes."

This is actually good guidance. I should use the actual equations and mechanisms described in the Rogov book. The book contains many real formulas:
- Transaction ID wraparound: 32-bit xid, comparison via 32-bit arithmetic (TransactionIdPrecedes)
- Freezing thresholds (vacuum_freeze_min_age 50 million, vacuum_freeze_table_age 150 million, autovacuum_freeze_max_age 200 million, vacuum_failsafe_age)
- Buffer cache clock sweep algorithm, usagecount limited by 4
- LSN arithmetic (XLogRecPtr, 64-bit)
- Selectivity formulas: sel(x AND y) = sel(x)·sel(y), sel(x OR y) = sel(x)+sel(y)−sel(x)·sel(y) [PAGE 263]
- Cost estimation: seq_page_cost=1, random_page_cost=4, cpu_operator_cost=0.0025, cpu_tuple_cost=0.01, cpu_index_tuple_cost=0.005
- parallel workers formula: 1 + ⌊log₃(table size / min_parallel_table_scan_size)⌋ [PAGE 305]
- Bitmap pages fetched: min(2·relpages·reltuples·sel / (2·relpages + reltuples·sel), relpages) [PAGE 345]
- pages_fetched cost interpolation: rnd_cost − (rnd_cost − seq_cost)·√(pages_fetched/relpages) [PAGE 345]
- top-N heapsort: O(n log₂ k), formula uses n log₂ 2k [PAGE 395]
- Bloom filter optimal signature: m = −n log₂ p / ln 2 [PAGE 537]
- TOAST threshold: row > 1/4 of page (~2000 bytes for 8192 page)
- Autovacuum trigger: n_dead_tup > autovacuum_vacuum_threshold + autovacuum_vacuum_scale_factor × reltuples [PAGE 111]
- Autoanalyze: n_mod_since_analyze > autovacuum_analyze_threshold + autovacuum_analyze_scale_factor × reltuples [PAGE 113]
- Hash join batches, buckets (power of two)
- Hash index ffactor 307, fillfactor 75%

These are all real and citable.

Now let me map the awkward sections to this content:

- THINK_TRACE: deep multi-hop derivation and "gray-zone" audit. I can do genuine reasoning about, e.g., xid wraparound arithmetic, or the interplay of horizon and vacuum.

- SOURCE_OPERATORS_AND_EQUATIONS: formal LaTeX, units, page citations, breakdown. This is where I put the real equations.

- RETROCAUSAL_GENEALOGY: historical/scientific lineage. PostgreSQL's academic origins (Berkeley Postgres, Ingres, MVCC lineage, Hellerstein "Looking Back at Postgres" [PAGE 83]), the two-phase locking history [PAGE 43], the "multi-week traps" → I can talk about wraparound timescales (the book explicitly says ~6 weeks at 1000 tps [PAGE 123]).

- RECURSIVE_THEORY_OF_MIND: "crisis habit regression vs counter-trap vs clock." I'll interpret this as reasoning about how the system behaves under adversarial/edge conditions and how one's mental model must account for the planner/vacuum "second-guessing." Honestly this is a stretch but I can map it to: the planner's cost model vs actual behavior, autovacuum's deferred decisions, the "clock sweep" and horizon dynamics. I'll be honest that I'm reinterpreting the section for a technical text.

- CROSS_LAYER_VETO_ADJUDICATION: "Physical/biomechanical/weather veto proof." Map to physical/hardware vetoes: disk fsync semantics, non-atomic writes [PAGE 189], checksums, WAL, byte-order/alignment incompatibilities [PAGE 65]. These are the real "physics" constraints on the DB.

- RLVR_COUNTERFACTUAL_VETOES: 3 verifiable counterfactual scenarios + predictions. I can construct 3 concrete, testable PostgreSQL scenarios with predicted outcomes (e.g., write skew under RR, wraparound forcing aggressive autovacuum, bitmap lossy under low work_mem).

I need to be honest with the user that I'm adapting a framework that was clearly built for a different (sports/gambling) domain to a database internals text, and that some section names don't map naturally. But I can produce genuinely rigorous content.

Actually — let me reconsider the honesty angle. The system prompt is somewhat of a "roleplay" wrapper. The core legitimate task is: produce a deep, accurate, well-cited technical analysis of the PostgreSQL source material with real equations. I should do that well and not fabricate. I should avoid pretending the section headers perfectly fit, but I can use them as given while making the content genuinely correct.

I should also not invent citations. The source text gives page markers and footnotes. I should only cite what's actually there. Let me be careful to use verbatim-accurate page references.

One concern: the instruction says ">= 1,000-WORD DEPTH across these exact XML sections." I'll aim for a thorough response, likely 1500-2500 words, well distributed. Given max thinking effort, I should be comprehensive but not padded.

Let me make sure my equations are actually correct and sourced.

1. Selectivity of AND/OR [PAGE 263]:
"sel_{x and y} = sel_x · sel_y
sel_{x or y} = 1 − (1 − sel_x)(1 − sel_y) = sel_x + sel_y − sel_x · sel_y"
And the assumption: "these formulas assume that predicates x and y do not depend on each other. For correlated predicates, such estimations will be inaccurate." Breakdown regime: correlated predicates → the multivariate statistics chapter [PAGE 289-293] addresses this (functional dependencies, MCV lists).

2. Parallel workers formula [PAGE 305]:
"1 + ⌊log₃(table size / min_parallel_table_scan_size)⌋", min_parallel_table_scan_size = 8MB.

3. Bitmap pages fetched [PAGE 345]:
"min( (2·relpages·reltuples·sel) / (2·relpages + reltuples·sel), relpages )"
cost per page: "rnd_cost − (rnd_cost − seq_cost)·√(pages_fetched/relpages)"

4. top-N heapsort cost [PAGE 395]: O(n log₂ k) but formula uses n log₂ 2k.

5. Bloom filter [PAGE 537]: m = −n log₂ p / ln 2. Where n = number of elements, p = false positive probability. Params: n_distinct_per_range (−0.1), false_positive_rate (0.01).

6. Autovacuum dead-tuple trigger [PAGE 111]: threshold + scale_factor × reltuples; defaults 50 and 0.2. Autoanalyze [PAGE 113]: 50 and 0.1, condition n_mod_since_analyze > autovacuum_analyze_threshold + autovacuum_analyze_scale_factor × reltuples.

7. xid wraparound [PAGE 123]: 32-bit xid, ~6 weeks at 1000 tps. TransactionIdPrecedes uses 32-bit arithmetic: compute difference, compare to zero. FullTransactionId is 64-bit (32-bit epoch + 32-bit xid), internal only.

8. TOAST [PAGE 29]: row exceeds 1/4 of page excluding header (~2000 bytes for 8192-byte page). "PostgreSQL aims at having at least four rows in a page."

9. Cost constants [PAGE 297, 333]: seq_page_cost=1, random_page_cost=4, cpu_operator_cost=0.0025, cpu_tuple_cost=0.01, cpu_index_tuple_cost=0.005. parallel_setup_cost=1000, parallel_tuple_cost=0.1.

10. Buffer cache clock sweep: usagecount limited to 4 [PAGE 155]. 

11. LSN: 64-bit, XLogRecPtr, file name format 8 hex digits timeline + rest LSN [PAGE 169].

12. Freezing ages [PAGE 127-132]: vacuum_freeze_min_age 50 million, vacuum_freeze_table_age 150 million, autovacuum_freeze_max_age 200 million (1 billion hardcoded, default 200M, "default value is 200 times smaller" than 1 billion... wait let me check). 

Actually [PAGE 131]: "The autovacuum_freeze_max_age limit is set to 1 billion transactions (a bit less than half of the circle), while the default value is 200 times smaller." So default autovacuum_freeze_max_age = 200 million. Hmm 1 billion / 200 = 5 million, not 200 million. Wait, re-reading: "The autovacuum_freeze_max_age limit is set to 1 billion transactions (a bit less than half of the circle), while the default value is 200 times smaller." 

Hmm, that's contradictory with the "200 million" default shown at PAGE 131 top: "200 million / autovacuum_freeze_max_age". Let me re-read.

PAGE 131 header text: "Autovacuum is forced (even if it is switched off) when there is a risk that the age of some unfrozen transaction xids in the database will exceed the 200 million autovacuum_freeze_max_age value."

Then: "The autovacuum_freeze_max_age limit is set to 1 billion transactions (a bit less than half of the circle), while the default value is 200 times smaller."

Wait, this seems internally inconsistent unless "200 times smaller" refers to... 1 billion / 200 = 5 million. That doesn't match 200 million either. Hmm. Actually I think there might be an OCR issue. Let me just report the default as 200 million (which is what's stated at the parameter listing) and note the hardcoded max is ~1 billion. I'll avoid making a false claim about "200 times smaller." Actually, to be safe, I'll cite the concrete default value 200 million from the parameter annotation and the "1 billion, a bit less than half the circle" hard limit. I won't over-interpret the "200 times smaller" phrase since it's ambiguous/possibly garbled.

Actually wait — let me reconsider. Perhaps the intended reading: hardcoded absolute max is ~2 billion (full circle minus safety), but there's a note... no. The text literally says "1 billion transactions (a bit less than half of the circle)". Half of 2^32 ≈ 2.1 billion is ~1.07 billion... no, half of ~4.29 billion is ~2.15 billion. So "1 billion" is about a quarter of the circle, not half. Hmm, the text says "a bit less than half of the circle" for 1 billion — that's also slightly off (1 billion of 4.29 billion is ~23%, a quarter). 

There may be OCR corruption in numbers throughout (the text uses weird glyphs for digits). I should be careful. Let me only use the cleanly-stated parameter default values that appear in the margin annotations: vacuum_freeze_min_age "50 million", vacuum_freeze_table_age "150 million", autovacuum_freeze_max_age "200 million". These appear as clean margin notes. I'll cite those and be conservative.

Given the OCR garbling of digits (many numbers rendered as odd Unicode glyphs like Ҁ, ѿ, ҁ etc.), I need to be very careful about numeric precision. The margin annotations in normal text ("50", "0.2", "150 million", "200 million", "4MB", "64MB", etc.) seem reliable. The inline garbled numbers I should treat cautiously and mostly avoid or clearly caveat.

Let me verify the selectivity and cost numbers are from clean parts. The selectivity formulas [PAGE 263] are clean. The cost constants: seq_page_cost 1, random_page_cost 4 [PAGE 297] — these appear as clean margin "1" and "4" and text. cpu_operator_cost 0.0025 [PAGE 299] — clean. cpu_tuple_cost 0.01 [PAGE 299] — clean. cpu_index_tuple_cost 0.005 [PAGE 333] — clean. parallel_setup_cost 1000 [PAGE 303] — clean. parallel_tuple_cost 0.1 [PAGE 303] — clean. work_mem 4MB — clean margin.

Good. Bitmap formula [PAGE 345] is given as clean LaTeX-ish text:
"min ( (2 relpages · reltuples · sel) / (2 relpages + reltuples · sel), relpages )"
and "rnd_cost − (rnd_cost − seq_cost) · sqrt(pages_fetched / relpages)". These are clean.

Bloom [PAGE 537]: "m = −n log₂ p / ln 2" clean.

top-N heapsort [PAGE 395]: "O(n log₂ k)" and "n log₂ 2k" clean.

parallel workers [PAGE 305]: "1 + ⌊log₃(table size / min_parallel_table_scan_size)⌋" clean.

Great, these are my solid citable equations.

Now, the response. I'll be upfront (briefly) that this is a technical text and I'm adapting the analytical frame to it, keeping the section structure but making the content domain-appropriate (database internals, not sports). Actually, I think I should just produce the analysis in the requested structure without excessive meta-commentary, but I'll include a short honest note about the framework mismatch, because pretending "biomechanical/weather veto" applies literally to PostgreSQL would be a fabrication. The honesty guideline matters. I'll reinterpret those sections transparently.

Let me write. I'll keep each section substantive. Target ~2000 words total.

Let me draft.

Actually, let me reconsider how much meta-commentary to include. The user clearly wants the analysis in the given format. I'll put a one-line note at the top acknowledging the domain, then proceed. Keep it crisp.

For citations I'll use [PAGE N] markers as given.

Let me be careful with the "units" requirement. Cost units in PostgreSQL are abstract "cost units" (not SI). Selectivity is dimensionless probability in [0,1]. xid is a 32-bit unsigned integer. LSN is a 64-bit byte offset into the WAL stream. These are the "information units." I'll state them.

Let me write the sections now.

THINK_TRACE (>=400 words): I'll do a genuine multi-hop derivation. Pick a concrete theme: the coupling between the transaction horizon, MVCC visibility, and vacuum's inability to reclaim — plus wraparound as the hard physical clock. Or I could do the cost-model derivation. Let me do a multi-hop on "why an index-only scan can degrade and how the visibility map + horizon gate it," tying to the freeze map and wraparound. Actually a cleaner multi-hop: the whole chain from xid assignment → tuple xmin/xmax → snapshot xmin/xmax/xip_list → horizon → vacuum's removable/nonremovable decision → freeze → wraparound. That's genuinely how the book builds it (chapters 3-7). And gray-zone: the read-committed re-read of locked rows, the read-only anomaly, and the fail-safe.

Let me write ~450 words for THINK_TRACE.

SOURCE_OPERATORS_AND_EQUATIONS: list the real equations with LaTeX, units, citations, breakdown regimes. ~500 words.

RETROCAUSAL_GENEALOGY: Berkeley Postgres lineage, Hellerstein "Looking Back at Postgres" [PAGE 83], the removal of time-travel/retrospective queries, 2PL history [PAGE 43], Eswaran et al. predicate locks [PAGE 235], SSI protocol, Knuth sorting [PAGE 397], Bloom filter, "multi-week traps" = wraparound at ~6 weeks / 1000 tps [PAGE 123]. ~350 words.

RECURSIVE_THEORY_OF_MIND: I'll reinterpret as "modeling the adversary/other agents" = the planner's cost model second-guessing, autovacuum deferring, and how a DBA must anticipate. Crisis = wraparound crisis forcing autovacuum even when off [PAGE 131]. Counter-trap = COPY FREEZE requiring same-transaction truncate/create [PAGE 133]. Clock = the horizon advancing and the clock-sweep. ~350 words.

CROSS_LAYER_VETO_ADJUDICATION: physical/hardware vetoes — non-atomic writes / torn pages / FPI [PAGE 189], fsync & wal_sync_method [PAGE 187], checksums blind spots [PAGE 187], endianness/alignment cross-platform incompatibility [PAGE 65], direct I/O absence. These "veto" any plan that assumes durability/portability. ~350 words.

RLVR_COUNTERFACTUAL_VETOES: 3 concrete testable scenarios with predictions:
1. Write skew under RR [PAGE 55-57]: two transactions each update one of Bob's two accounts under a non-negative-total rule; predict both commit, anomaly occurs; only SSI (Serializable) aborts with "could not serialize access due to read/write dependencies."
2. Wraparound forced autovacuum [PAGE 131]: age of oldest relfrozenxid approaches autovacuum_freeze_max_age (200M default); predict forced aggressive autovacuum even with autovacuum_enabled=off.
3. Bitmap lossy under small work_mem [PAGE 341-345]: set work_mem tiny; predict bitmap segments become lossy, Heap Blocks: lossy count > 0, recheck re-reads all tuples on those pages, cost rises toward the lossy estimate.
Each with a falsifiable prediction. ~350 words.

That should exceed 1000 words comfortably.

Let me make sure LaTeX renders in markdown — I'll use $...$ and $$...$$ / or \[ \]. I'll use standard notation.

Let me write it out.

One more check on the selectivity breakdown and correlated predicates: the book at PAGE 289-293 shows the flight_no/departure_airport example where product-of-selectivities underestimates (rows=15 vs actual 277), and CREATE STATISTICS ... (dependencies) fixes it (rows=277). Good, I can cite that as the breakdown regime and its remedy. Clean numbers? "rows=15" and "rows=277" — these appear in clean EXPLAIN output blocks. Good.

Also the expression selectivity default 0.5% (0.005) for function-call = constant [PAGE 285]: "rows=1074" and "reltuples * 0.005 = 1074". Clean-ish. The 0.005 appears as "0.5%" text and eqsel footnote. Good.

Now writing final.

I'll include a brief honesty note at top. Let me keep it to 2 sentences.

Let me write the equations carefully.

Snapshot visibility rule (informal, [PAGE 81]): "a tuple is visible in a snapshot that includes xmin transaction changes but excludes xmax transaction changes." I can formalize:
Visible(t, S) ⟺ (xmin_t ∈ Committed(S)) ∧ (xmax_t ∉ Committed(S) ∨ xmax_t = 0)
where Committed(S) determined by xid < xmin_S (all committed) or (xmin_S ≤ xid < xmax_S ∧ xid ∉ xip_list_S). This is a faithful formalization of the book's rules [PAGE 85].

Wraparound comparison (TransactionIdPrecedes) [PAGE 123]: 
xid_a precedes xid_b ⟺ (int32)(xid_a − xid_b) < 0
This is exactly what the book says: "first the difference between 32-bit transaction xids is found, and then this result is compared to zero." Good.

Age: age(xid) = (current_xid − xid) mod 2^32.

Freezing decision: freeze if age(xmin) > vacuum_freeze_min_age (default 50M). Aggressive when age(relfrozenxid) > vacuum_freeze_table_age (150M). Forced autovacuum when age(datfrozenxid) approaches autovacuum_freeze_max_age (200M).

Clock-sweep usagecount cap: usagecount ∈ {0,1,2,3,4}, capped at BM_MAX_USAGE_COUNT = 4 [PAGE 155: "PostgreSQL limits the usage count by 4"].

Good.

Let me also mention LSN as 64-bit: pg_current_wal_insert_lsn returns like 0/3DF70920 [PAGE 167] — a 64-bit value split high/low.

Now, cost model equations:
Total seq scan I/O cost = relpages × seq_page_cost [PAGE 297], seq_page_cost=1.
Aggregate cpu = reltuples × cpu_operator_cost [PAGE 299], 0.0025.
Index scan heap pages (perfect correlation) = relpages × sel; index pages = index_relpages × sel [PAGE 333].
Bitmap pages fetched = min(2·relpages·reltuples·sel/(2·relpages+reltuples·sel), relpages) [PAGE 345].
per-page cost interpolation [PAGE 345].

Parallel workers = 1 + ⌊log₃(table_size/min_parallel_table_scan_size)⌋ [PAGE 305], min_parallel_table_scan_size = 8MB.

OK writing now. I'll aim for correctness and cite pages.

I want to avoid being preachy or over-disclaiming. One short note then dive in.

Let me produce the final answer.
</NATIVE_REASONING>

This source is Egor Rogov's *PostgreSQL 14 Internals* — a database-engineering text, not a competitive-sports feed. I'm keeping the requested section scaffold, but I'm mapping the domain-specific labels ("biomechanical/weather veto," "crisis habit regression," "clock") onto their only honest analogues in this material: hardware/physical durability constraints, adversarial/deferred-agent behavior of the planner and autovacuum, and the transaction-ID wraparound clock. I will not manufacture ratios; every equation below is one the book states verbatim, with its stated assumptions and breakdown regime.

<THINK_TRACE>
The book's spine is a single causal chain, and the "gray zone" lives in the seams between its links. Start at tuple construction: an INSERT stamps `xmin`, a DELETE/UPDATE stamps `xmax`, both 32-bit xids written into a ≥24-byte header [PAGE 65][PAGE 73]. Because MVCC keeps stale versions ("row versions rather than rows… multiversion concurrency control implies having several versions of the same row" [PAGE 63]), visibility is not stored — it is *computed* against a snapshot. A snapshot is not a copy; it is three numbers plus a list: `xmin` (oldest still-running xid), `xmax` (one past the newest committed xid), and `xip_list` (all non-virtual in-progress xids) [PAGE 83]. The visibility predicate is then: a version is visible iff its `xmin` transaction is committed-before-snapshot AND its `xmax` is not. The book's informal rule — "a tuple is visible in a snapshot that includes xmin transaction changes but excludes xmax transaction changes" [PAGE 81] — is the whole thing in one sentence.

Now the multi-hop. The snapshot's `xmin` is not just a read gate; it is the *transaction horizon* [PAGE 87]. Anything with xid < horizon is guaranteed committed and therefore *frozen-eligible and vacuum-eligible*; anything at or beyond the horizon might still roll back, so its versions must be retained. This is why a single long-open transaction pins `backend_xmin` and blocks reclamation — "avoid combining long transactions with frequent updates… it will lead to table and index bloating" [PAGE 89]. Vacuum's VERBOSE line quantifies the seam precisely: "found 0 removable, 2 nonremovable row versions… 1 dead row versions cannot be removed yet, oldest xmin: 834" [PAGE 105]. That "cannot be removed *yet*" is the gray zone — the tuple is logically dead (deleted by a committed xid) but physically immortal because the horizon hasn't advanced.

Push one more hop into the *clock*. Freezing replaces the need to keep `xmin` alive by marking the tuple visible-to-all via a hint bit rather than rewriting the stored xid (the book notes FrozenTransactionId=2 "used to replace xmin in versions prior to 9.4, but now hint bits are employed instead… the original transaction xid remains in the tuple" [PAGE 125]). Vacuum only freezes when `age(xmin) > vacuum_freeze_min_age` (50M) [PAGE 127], skips all-visible pages via the visibility map unless `age(relfrozenxid) > vacuum_freeze_table_age` (150M) triggers aggressive freezing [PAGE 129], and the whole subsystem is backed by a hard deadline: forced autovacuum near `autovacuum_freeze_max_age` (200M) [PAGE 131]. The singular threat that overrides everything — including an *administrator who disabled autovacuum* — is wraparound.

Audit of the traps: (1) Read Committed re-reads a locked row after the locker commits, so "different rows have been read from different snapshots" — read skew reappears *inside a single UPDATE* [PAGE 51]. (2) Snapshot Isolation provably leaks exactly two anomalies, write skew and the read-only-transaction anomaly [PAGE 55][PAGE 57], which is why PostgreSQL's "Repeatable Read" is not the SQL-standard phantom-free ideal but a stronger-than-standard snapshot level [PAGE 45]. (3) `COPY … WITH FREEZE` can still break isolation across a concurrent REPEATABLE READ reader unless the table was created/truncated in the same transaction [PAGE 133] — the lock is the only thing preventing it. The through-line: correctness is bounded below by physical durability and above by the horizon, and the horizon is bounded above by the wraparound clock.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Units follow PostgreSQL's conventions: costs are dimensionless planner "cost units"; selectivities are probabilities in $[0,1]$; xids are unsigned 32-bit integers; LSNs are 64-bit byte offsets into the WAL stream.

**1. XID wraparound comparison** [PAGE 123]. Comparison is 32-bit modular, not integer:
$$a \prec b \iff \big(\operatorname{int32}(a - b)\big) < 0, \qquad \operatorname{age}(x) = (C - x) \bmod 2^{32}$$
where $C$ is the current xid. The space is $2^{32}$; the book's operational figure: "an average load of 1,000 transactions per second… it will happen in about six weeks" [PAGE 123]. Breakdown regime: as $\operatorname{age}(\text{oldest unfrozen}) \to$ `autovacuum_freeze_max_age`, the system forces aggressive freezing regardless of settings.

**2. Autovacuum/analyze firing thresholds** [PAGE 111][PAGE 113]:
$$N_{\text{dead}} > T_v + s_v\cdot \texttt{reltuples}, \qquad N_{\text{mod}} > T_a + s_a\cdot \texttt{reltuples}$$
Defaults $T_v=50,\ s_v=0.2$; $T_a=50,\ s_a=0.1$. Note `reltuples = -1` before first ANALYZE is treated as $0$ [PAGE 115], so the effective threshold collapses to the constant.

**3. Aggregate boolean selectivity** [PAGE 263]:
$$\mathrm{sel}(x \wedge y) = \mathrm{sel}(x)\,\mathrm{sel}(y), \qquad \mathrm{sel}(x \vee y) = \mathrm{sel}(x)+\mathrm{sel}(y)-\mathrm{sel}(x)\,\mathrm{sel}(y)$$
Assumption stated verbatim: "these formulas assume that predicates x and y do not depend on each other." Breakdown regime: correlated predicates. The book's own counterexample estimates `rows=15` where the true count is `277` for `flight_no ∧ departure_airport` [PAGE 289]; the remedy is `CREATE STATISTICS … (dependencies)`, restoring `rows=277` [PAGE 289]. Unknown functions default to $\mathrm{sel}=0.005$ ("0.5%") for `function = constant` [PAGE 285].

**4. Sequential-scan cost** [PAGE 297][PAGE 299]:
$$C_{\text{seqio}} = \texttt{relpages}\cdot c_{\text{seqpage}},\quad c_{\text{seqpage}}=1;\qquad C_{\text{agg}} = \texttt{reltuples}\cdot c_{\text{op}},\quad c_{\text{op}}=0.0025,\ c_{\text{tuple}}=0.01$$
Random page cost $c_{\text{rand}}=4$ [PAGE 297]; index tuple cost $c_{\text{idx}}=0.005$ [PAGE 333]. Assumption/breakdown: $c_{\text{rand}}/c_{\text{seqpage}}=4$ is tuned for spinning disks; the book says to lower it sharply for SSDs [PAGE 297].

**5. Bitmap pages fetched** [PAGE 345]:
$$P_{\text{fetch}} = \min\!\left(\frac{2\,\texttt{relpages}\cdot \texttt{reltuples}\cdot \mathrm{sel}}{2\,\texttt{relpages} + \texttt{reltuples}\cdot \mathrm{sel}},\ \texttt{relpages}\right)$$
with per-page I/O cost interpolated by
$$c_{\text{page}} = c_{\text{rand}} - (c_{\text{rand}} - c_{\text{seq}})\sqrt{P_{\text{fetch}}/\texttt{relpages}}.$$
Breakdown: when `work_mem` (4MB) is exceeded, segments go *lossy* [PAGE 341] and the planner adds recheck cost via the expected lossy fraction [PAGE 345].

**6. Parallel worker count** [PAGE 305]:
$$W = 1 + \left\lfloor \log_3\!\frac{\text{table size}}{\texttt{min\_parallel\_table\_scan\_size}} \right\rfloor,\qquad \texttt{min\_parallel\_table\_scan\_size}=8\text{MB}.$$
Governed above by `max_parallel_workers` (8) and `max_parallel_workers_per_gather` (2) [PAGE 305].

**7. Top-N heapsort complexity** [PAGE 395]: $O(n\log_2 k)$, but costed as $n\log_2(2k)$ because "each particular operation is more expensive as compared to the quicksort algorithm."

**8. Bloom-filter signature length** [PAGE 537]:
$$m = \frac{-\,n\log_2 p}{\ln 2}$$
with $n$ = distinct values per range, $p$ = false-positive rate (defaults $p=0.01$). This is the only true closed-form optimum in the book; everything else is a cost *model*, not a guarantee — "An accurate solution does not guarantee that the selected plan is really the optimal one, as the planner uses simplified mathematical models" [PAGE 259].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage is academic before it is industrial. MVCC and the "tuple" vocabulary are "borrowed from the relational theory — it is yet another legacy of Postgres's academic past" [PAGE 63]; the heap is a deliberate pun on dynamic allocation [PAGE 65]. The isolation model descends from Eswaran, Gray, Lorie & Traiger's *notions of consistency and predicate locks* [PAGE 235], and the book is candid that the SQL standard predates the theory: "the actual database theory also diverges from the standard: it was developed after the standard had been adopted, and the practice was already well ahead" [PAGE 41]. Two-phase locking (2PL) is named as the historical substrate the standard implicitly assumed [PAGE 43], even though PostgreSQL rejected pure lock-based isolation for snapshots.

The most striking "retro" artifact is a *removed* feature: retrospective/time-travel queries "was declared as one of the objectives of Postgres and was implemented at the very start, but it was removed from the database system when the project support was passed on to the community," citing Hellerstein's *Looking Back at Postgres* [PAGE 83]. The reason it is impossible now is structural: `GetSnapshotData` records only `xmin/xmax/xip_list`, so PostgreSQL "cannot create a snapshot that shows a consistent state of data at some arbitrary point in the past" [PAGE 83]. Sorting's external-merge component still carries magnetic-tape vocabulary ("runs," "merge order") inherited from Knuth's *Sorting and Searching* [PAGE 397].

The "multi-week traps" are literal here: the ~6-week wraparound horizon at 1,000 tps [PAGE 123] is the recurring operational cliff, and multixact xids — being 32-bit — "are subject to wraparound… just like regular transaction xids" [PAGE 215], so `pg_multixact` files require their own freeze machinery (`vacuum_multixact_freeze_*`, `vacuum_multixact_failsafe_age` [PAGE 215]). The lineage of each subsystem explains its scars: hash indexes were non-durable until v10 ("Prior to PostgreSQL 10, hash indexes were not logged" [PAGE 417]); `VACUUM FULL ANALYZE` predated standalone `ANALYZE` [PAGE 109]; the buffer-cache hash table is "of no use when it comes to finding all the buffers taken by pages of a particular relation" yet "no one has suggested an adequate alternative" [PAGE 151].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Reframed honestly, this section models *the other decision-making agents in the system* — the planner, autovacuum, and the executor — each of which "reasons" about state that our transaction cannot directly observe, forcing us to anticipate their second-order moves.

*Crisis (the deadline that overrides local intent).* The sharpest agent is forced autovacuum: "Autovacuum is forced (even if it is switched off) when there is a risk that the age of some unfrozen transaction xids… will exceed the 200 million `autovacuum_freeze_max_age` value" [PAGE 131]. A DBA who disabled autovacuum believes they control the schedule; the wraparound clock does not negotiate. The counter-model: monitor `age(datfrozenxid)` and `age(relfrozenxid)` — "all row versions in the database are guaranteed to be frozen" only below `datfrozenxid` [PAGE 131].

*Counter-trap (the deferred adversary in the planner).* The plan-cache agent switches from custom to generic plans after five executions, comparing *estimated* not *actual* costs, and "will not consider them at all" once it commits to a generic plan [PAGE 269] — so a workload whose early custom plans were unlucky can be locked out of a better plan. Anticipation: pin `plan_cache_mode` [PAGE 269]. Similarly, autovacuum "deferred" summarization for BRIN is asynchronous; unsummarized ranges "are always scanned" [PAGE 523], so a freshly loaded table gives no index benefit until `brin_summarize_new_values` runs.

*Regression to habit vs. the trap.* The classic habit is `IF (SELECT …) THEN UPDATE …` — an anti-pattern the book dissects: "anything that can go wrong will go wrong. Such errors are very hard to reproduce" [PAGE 47]. The rational agent replaces check-then-act with a single declarative operator or a `CHECK amount >= 0` constraint [PAGE 47].

*The clock agent (horizon).* Every reader continuously publishes `backend_xmin`; vacuum reads it as a constraint it cannot violate [PAGE 87][PAGE 105]. The strategic move against a stuck horizon is either splitting OLTP/OLAP ("keep fast OLTP queries on the primary server and direct all OLAP transactions to a replica" [PAGE 141]) or bounding it with `old_snapshot_threshold` / `idle_in_transaction_session_timeout` [PAGE 141]. The theory-of-mind lesson: you do not control the horizon unilaterally; you control which *other* transactions are allowed to hold it open.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
These are the physical/hardware-layer constraints that *veto* any correctness or durability claim made at the logical layer — the database-engineering analogue of "physics beats tactics."

**Veto 1 — Torn (non-atomic) writes.** "A database page usually takes 8kB, but at the low level writing is performed by blocks, which are often smaller (typically 512 bytes or 4kB). Thus, if a failure occurs, a page may be written only partially" [PAGE 189]. This vetoes any assumption that a heap page reaches disk atomically. PostgreSQL's proof-by-construction is the full-page image (FPI): the first modification of a page after a checkpoint logs the entire page, and recovery "will unconditionally write it to disk (without checking its LSN)" before applying deltas [PAGE 189]. Corollary veto: hint-bit changes have "no separate WAL entry type… this operation is considered non-critical" [PAGE 189] — but if checksums are on, hint-bit flips are logged as FPIs [PAGE 189], coupling logical bookkeeping to physical logging volume.

**Veto 2 — The fsync gap.** "the asynchronous commit and lack of synchronization are two totally different stories. Turning off synchronization (by the `fsync` parameter) boosts system performance, yet any failure will lead to fatal data loss. The asynchronous mode guarantees crash recovery up to a consistent state, but some of the latest data updates may be missing" [PAGE 187]. This adjudicates the durability boundary: `synchronous_commit = off` (measured at 670→2060 tps [PAGE 185]) never corrupts, but the last window of commits can vanish — a physical veto on "acknowledged ⇒ durable."

**Veto 3 — Checksum blind spots.** Checksums are "calculated only for the main fork of relations; other forks and files (such as transaction status in clog) remain unprotected," and "a zeroed page is considered correct" [PAGE 187]. So corruption detection has provable holes even when enabled.

**Veto 4 — Cross-platform byte layout.** "Data layout on disk fully coincides with data representation in RAM… That's why data files are incompatible between different platforms" [PAGE 65]. Endianness (x86 little-endian vs. z/Architecture big-endian) and word-alignment (`double precision` aligned to 4-byte words on 32-bit x86 vs. 8-byte on 64-bit) veto any assumption of copying data files between heterogeneous hosts; only `pg_dump`/logical paths survive this layer.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three falsifiable scenarios drawn directly from the text, each with a concrete prediction.

**Veto A — Write skew under Repeatable Read.** Setup [PAGE 55–57]: a consistency rule "it is allowed to have a negative balance in some of the customer's accounts as long as the total balance is non-negative." Two REPEATABLE READ transactions each debit one of Bob's two accounts; a third read-only RR transaction reads an unrelated (Alice) row between the second's commit and the first's commit. *Prediction:* all three commit with **no error** at REPEATABLE READ — the anomaly occurs (Snapshot Isolation "does not prevent only two anomalies… the first one is write skew" [PAGE 55]). *Veto condition (the discriminating test):* rerun the identical schedule at `ISOLATION LEVEL SERIALIZABLE`; the read-only transaction now aborts with "could not serialize access due to read/write dependencies… Canceled on identification as a pivot" [PAGE 59], or can be saved with `READ ONLY DEFERRABLE` [PAGE 59]. Falsifier: if plain RR ever aborts here, the snapshot-isolation claim is wrong.

**Veto B — Wraparound forces autovacuum against configuration.** Setup: `ALTER TABLE … SET (autovacuum_enabled = off)`, then advance `age(relfrozenxid)` of the oldest table toward `autovacuum_freeze_max_age` (200M) [PAGE 111][PAGE 131]. *Prediction:* autovacuum runs anyway, "even if it is switched off," in aggressive mode, choosing the table by the oldest `relfrozenxid` across the database [PAGE 131]. Measurable signal: `last_autovacuum` populates despite the per-table disable. Falsifier: a table with autovacuum disabled and age above the limit that is *never* processed would refute the forced-autovacuum rule.

**Veto C — Bitmap lossiness under a tiny `work_mem`.** Setup [PAGE 341–345]: on `bookings` (13447 pages [PAGE 337]), query a moderately selective predicate with `work_mem` set below the bitmap's exact size. *Prediction:* EXPLAIN ANALYZE shows `Heap Blocks: lossy=N` with $N>0$, and `Rows Removed by Index Recheck` becomes nonzero because lossy segments force re-reading *every* tuple on the affected pages [PAGE 341][PAGE 345]; total cost shifts from the exact-bitmap estimate toward $P_{\text{fetch}}$ evaluated with the lossy fraction. *Boundary note from the text:* the bitmap is *never* shrunk or spilled — "this limit is ignored, and the bitmap takes as much space as required" [PAGE 343] — so below a floor the accuracy stops degrading and memory simply overshoots. Falsifier: an exact-bitmap plan (`lossy=0`, zero recheck) persisting as `work_mem → 0` would contradict the lossy model.

Cross-cutting prediction tying all three to the horizon/WAL spine: any long-open transaction in these experiments will simultaneously (i) hold `backend_xmin`, (ii) inflate `nonremovable` counts in `VACUUM VERBOSE` [PAGE 105], and (iii) enlarge WAL via FPIs at the next checkpoint [PAGE 189] — a single observable signature confirming the horizon-to-physical-storage coupling the book asserts.
</RLVR_COUNTERFACTUAL_VETOES>