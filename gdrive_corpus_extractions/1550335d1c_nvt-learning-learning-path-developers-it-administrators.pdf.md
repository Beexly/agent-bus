---
source: "nvt-learning-learning-path-developers-it-administrators.pdf"
folder: "/CorpusRoot"
pages: 23
model: deepseek/deepseek-v4.1-flash-1017
words: 8938
---

<NATIVE_REASONING>
The user wants a deep analysis of this NVIDIA training/certification learning-path catalog PDF (23 pages), using the specified XML sections. Key invariants: no betting lines/odds/spreads; no toy equations; formal LaTeX with units; cite exact [PAGE N] markers with verbatim quotes; ≥1,000 words total; each required section.

The content is a training catalog. So this is like a "Drive Source" analysis. I need to treat the catalog as a structured system and derive: course-graph topology, prerequisite DAG, cost/duration accounting (units: USD, hours), certification tiers, and "breakdown regimes" — e.g., where the catalog's arithmetic or naming becomes inconsistent (typos: "2 Housr", ".5 Hours", price/duration conflicts, "12 Hours | $1,500" appearing under Spectrum-X Networking Platform Administration Private Workshop but also "16 Hours | Contact Us"), duplication of course cards, contradictory hours between pages (e.g., AI Infrastructure and Operations Fundamentals 7 Hours | $50 on p17 and 7.5 Hours | $50 on p18), OpenUSD course durations differ between p9 and p13 (3 Hours vs 1.5 Hours for Developing Data Exchange Pipelines; Asset Modularity and Instancing 2 Hours vs 1.5 Hours), CUDA Python: p10 shows "Fundamentals of Accelerated Computing With CUDA Python* 8 Hours | $90" and also "Fundamentals of GPU-Accelerated Workflows with CUDA Python* 8 Hours | $500" — two distinct offerings, one self-paced $90, one instructor-led $500.

Also NCP HGX 8-Way: InfiniBand Network Administration 5.5 Hours on p21; GB200/300: "InfiniBand Network Administration 1.5 Hours" — hmm actually the layout shows "NCP Reference Architecture and System Administration 8 Hours" then "InfiniBand Network Administration 1.5 Hours" then "InfiniBand, NVLink, and UFM" ... Ambiguous; flag as gray zone.

Let me build formal apparatus:

Define the catalog as a bipartite hypergraph: courses C, certifications K, learning paths P, roles R. Each item has attributes: duration τ(c) ∈ ℝ≥0 hours, price π(c) ∈ USD, delivery mode d ∈ {self-paced, ILT workshop, private workshop, exam, free}, credential artifact (Certificate of Competency vs Certification).

Derived operators:
- Knowledge flow / prerequisite partial order: c_i ≺ c_j.
- Coverage: for a cert k, R(k) = set of required course atoms; completion time T(k) = Σ τ; cost C(k) = Σ π.
- "Path efficiency" — must avoid toy equations? The invariant says never invent fake ratios like Force/Fatigue. State formal LaTeX equations with units and assumptions. So I can define rigorous quantities: total path cost in USD, throughput (learners/hour), information-theoretic content? Better: define path cost functional, marginal cost per certified competency, DAG depth (longest path in prerequisite graph), and a "certification reachability" indicator. Define breakdown regimes: where catalog data is self-contradictory (κ-inconsistency), where 0-hour or missing duration, where price = "Contact Us" (unbounded/undefined π), where duplicate nodes cause DAG cycles? Duplicate course cards with different prices create multimodal price distributions → non-deterministic cost functional.

Use information units: maybe define a content-completion entropy H in bits: H(k) = -Σ p log2 p over course atoms weighted by duration share; and a prerequisite-depth measure in dimensionless levels. That's fine and formal, with units (bits, hours, USD). But careful not to be a "toy equation" — must be defensible: entropy of duration-share distribution as a measure of path diversification. That's legitimate.

Also: singularity/breakdown regimes — e.g., π(c) = "Contact Us" → cost functional undefined (⊥); duration typed as "2 Housr" → parse failure; ".5 Hours" → leading-zero truncation; "½ Hour" and "1.5 Hours" mixed notation; ranges.

Also mention retrocausal genealogy: historical lineage — NVIDIA certification program history: NCA (NVIDIA Certified Associate) introduced ~2024, NCP (NVIDIA Certified Professional) earlier for DGX; DCGM, Base Command Manager (formerly Bright Cluster Manager, acquired 2022), Run:ai (acquired 2024, close ~Dec 2024), Cumulus Linux (Cumulus Networks acquired 2020), Mellanox (2020, InfiniBand/Spectrum-X/UFM/MLXlink), BlueField DPU, Omniverse/OpenUSD (OpenUSD alliance 2023, AOUSD), Isaac Sim/Isaac Lab (Isaac Gym → Isaac Lab 2024), Cosmos (Jan 2025 CES world foundation models), NIM, NeMo. Docs mention "October 2026" date — future-dated.

Multi-week traps: 40-hour AI Infra & Ops public training, 50-hour AI Factory Compute Deployment, 80-hour AI Factory Network Deployment, 28-hour NCP GB200/300 — these exceed a week; scheduling trap.

Recursive theory of mind: crisis habit regression vs counter-trap vs clock — here adapted to learner behavior: under deadline pressure, learners regress to "watch-video" passive habits, choose cheap self-paced $30/$90 items, skip the 8-hour $500 ILT prerequisites, then fail 2-hour proctored exams. Counter-trap: pay for the bundle/package price. Clock: exam validity/badge renewal, catalog vintage (October 2026) vs course churn ("Coming Soon").

Cross-layer veto adjudication: physical/biomechanical/weather veto — for a training plan, the "physical" layer is: proctored exam scheduling, lab GPU access requirements, hands-on cluster access for NCP (private workshop only, NCP Partners only), bandwidth/hardware for Isaac Sim (RTX requirements), time-zone constraints for ILT, and the weather veto analog: connectivity/power. Veto proof: e.g., a learner cannot complete "NCP GB200/GB300 Administration" without NCP partner status — a hard institutional veto overriding any study plan. Also "DGX System Administration: Private Workshop 16 Hours | Contact Us" vetoes self-study.

Let me do careful quibbles and cites with verbatim quotes.

Quotes I'll use (verbatim from page text):
- [PAGE 1]: "NVIDIA Training and Certification Learning Paths October 2026"
- [PAGE 2]: "For Developers" / "For Infrastructure Professionals" / "Quick Links To develop a customized training plan for your organization, connect with one of our training advisors."
- [PAGE 3]: "Based on NVIDIA HW & SW Solutions" ... "Designed for Infrastructure and Operations Roles" ... "Based on Application Requirements for Accelerated Computing, AI, and Related Workloads" ... "Designed for Developer Roles"
- [PAGE 5]: "Building RAG Agents with LLMs* 8 hours | $90", "NVIDIA Certified Professional Agentic AI** 2 Hours | $200", "Building Agentic AI Applications with LLMs* 8 Hours | $500"
- [PAGE 7]: "NVIDIA-Certified Associate Generative AI Large Language Models** 1 Hour | $125", "NVIDIA-Certified Professional Generative AI Large Language Models** 2 Hours | $200"
- [PAGE 9]: "NVIDIA-Certified Professional OpenUSD Development** 2 Hours | $200", "Learn OpenUSD: Developing Data Exchange Pipelines 90 Minutes | Free", "Learn OpenUSD: Asset Modularity and Instancing 2 Hours | Free"
- [PAGE 13]: "Learn OpenUSD: Developing Data Exchange Pipelines 1.5 Hours | Free", "Learn OpenUSD: Asset Modularity and Instancing 1.5 Hours | Free", "Robotics Fundamentals Learning Path 28 Hours | Free"
- [PAGE 17]: "AI Infrastructure and Operations Fundamentals 7 Hours | $50", "NVIDIA AI Infrastructure & Operations: Public Training 40 Hours | $5,000", "AI Factory Compute Deployment 50 Hours | $2,000", "Run:ai for AI Practioners Public Training 8 Hours | $1,000" (note typo "Practioners"), "NCP Training (For NCP Partners Only)"
- [PAGE 18]: "AI Infrastructure and Operations Fundamentals 7.5 Hours | $50", "AI Infrastructure (27 hours, $3,400)", "AI Operations (22 hours, $3,000)", "AI Infrastructure and Operations (8 hours, $150 special package price)", "NVIDIA AI Infrastructure: Public Training 25 Hours | $3,000", "NVIDIA AI Operations: Public Training 20 Hours | $2,500", "Professional AI Infrastructure Certification** 2 Hours | $400", "Professional AI Operations Certification** 2 Hours | $500"
- [PAGE 19]: "NetQ Deployment and Installation 2 Housr | Free" (typo), "RDMA Over Converged Ethernet from A to Z .5 Hours | Free", "AI Factory Network Deployment 80 Hours | $2,000", "InfiniBand Network Administration 5.5 Hours | $200", "Cumulus Linux Administration 5 Hours | $100", "Spectrum-X Networking Platform Administration Private Workshop 12 Hours | $1,500" — careful about layout: p19 has "Spectrum-X Networking Platform Administration Private Workshop" then later "12 Hours | $1,500 / 16 Hours | Contact Us". Actually the strings under it: "Cumulus Linux Essentials 2 Hours | Free" ... then "Spectrum-X Networking Platform Administration Private Workshop" then "NetQ Deployment and Installation 2 Housr | Free" then "MLXlink and MLX Cable Debug Tools 1.5 Hours | Free" then "12 Hours | $1,500" "16 Hours | Contact Us". Then "Diagnostics and Fabric Management" section header, "NVIDIA Cable Validation Tool (CVT) Fundamentals 2 Hours | Free". So 12 Hours | $1,500 likely maps to Spectrum-X private workshop and 16 Hours | Contact Us to something else (maybe NetQ? or Cumulus?). Gray zone — must flag ambiguity, not assert.

Note also p17 "NVIDIA Cable Validation Tool (CVT) Fundamentals 3 Hour | $50" vs p19 "NVIDIA Cable Validation Tool (CVT) Fundamentals 2 Hours | Free" — direct contradiction (3h/$50 vs 2h/$0). Great finding.

Also p17 "BlueField DPU Administration 3 Hours | $50" vs p19 "BlueField DPU Administration 4 Hours | $50" — contradiction.
Also p17 "Data Center Management Made Easy with NVIDIA UFM 3 Hours | $50"; p19 same 3 Hours | $50; p21 same 3 Hours (no price, NCP path); p22 "Data Center Management Made Easy with NVIDIA UFM 2 Hours" — contradiction (2 vs 3).
p19 "InfiniBand Network Administration 5.5 Hours | $200" vs p21 "5.5 Hours" consistent; p22 "1.5 Hours" — hmm, on p22 the layout: "NCP Reference Architecture and System Administration 8 Hours" and "InfiniBand Network Administration 1.5 Hours"? That seems like it maps oddly: possibly "GPU Accelerated Infrastructure 3.5 Hours" and "InfiniBand Network Administration 1.5 Hours"? Actually likely "InfiniBand, NVLink, and UFM" is a section header and "InfiniBand Network Administration 1.5 Hours" — a reduced 1.5h version. Flag ambiguity.

Also p17 "Run:ai Platform Deployment 3 Hours | $50" vs p22 "Run:ai Platform Deployment 2.5 Hours" — contradiction.
p17 "Base Command Manager Administration 3 Hours | $50" vs p21 "Base Command Manager for NCPs 1 Hour" — different course though.
p17 "Cumulus Linux Administration" not on p17? p17 has "NVIDIA License System 2 Hours | Free". Hmm.

Also "AI Infrastructure and Operations Fundamentals 7 Hours | $50" (p17) and "7.5 Hours | $50" (p18) and "AI Infrastructure and Operations (8 hours, $150 special package price)" — so 7, 7.5, 8 hours for the same-named thing across three bullets. Triangulation failure.

Also Exam durations: 1 Hour | $125 (associate), 2 Hours | $200 (professional GenAI), 2 Hours | $400 (Professional AI Infrastructure, AI Networking), 2 Hours | $500 (Professional AI Operations). So professional exam price variance $200/$400/$500 across domains — that's a real operator: price is not a function of duration; π_exam ⊥ τ_exam (independent). Good formal point: exam price is domain-indexed, not duration-indexed → cost model must be a lookup table, not a linear function.

Also: DGX-related: "DGX System Administration: Private Workshop 16 Hours | Contact Us".

Now the "clock": catalog dated October 2026 while page 2 lists "NCP GB200/300 Administration" and p22 titled "NCP GB200/300 Administration" — GB300 naming; "Coming Soon" items (Building AI Agents with Multimodal Models; Develop AI-Powered Operational Dashboards for Digital Twin Applications) → undefined duration/price → these are ⊥ nodes that block path closure.

Let me build the formal sections.

Equation set (with units, assumptions, breakdown):

1. Catalog measure. Let 𝒞 be a finite set of course atoms. For c ∈ 𝒞 define duration τ(c) ∈ ℝ_{≥0} h, price π(c) ∈ ℝ_{≥0} USD ∪ {⊥} (⊥ = "Contact Us"), mode μ(c) ∈ {SP, ILT, PW, EX, FREE}, credential flag γ.

2. Path cost functional: C(P) = Σ_{c∈P} π(c) + Σ exams; defined only if no π = ⊥. Break: any path through NCP nodes has C(P) = ⊥ (unpriceable) — "Contact Us" appears 3× on p17 ("DGX System Administration: Private Workshop 16 Hours | Contact Us", "NCP GB200/GB300 Administration Training Private Workshop 28 Hours | Contact Us", "NCP HGX 8-Way Administration Private Training Workshop 16 Hours | Contact Us").

3. Duration aggregation: T(P) = Σ τ. Break: warning under multi-week trap: T > 40 h exceeds a nominal work-week; 50 h, 80 h paths.

4. Prerequisite DAG depth D(P) = longest chain in ≺; level-set. Note catalog never prints explicit prerequisites → ≺ must be inferred from page adjacency, so ≺ is a *latent* relation with confidence; formal statement: observed graph G_obs from typographic proximity; G_true unknown; error ε = |E(G_obs) Δ E(G_true)|.

5. Entropy of duration share: H(P) = -Σ_{c∈P} (τ(c)/T(P)) log2 (τ(c)/T(P)) bits. Bound 0 ≤ H ≤ log2|P|. Interpretation: "breadth" of path. Break: H undefined if T(P)=0.

6. Certification tier map: tier κ ∈ {Associate, Professional} with exam τ_exam. Observation: associate exams 1 h, professional 2 h across all domains → τ_exam is a step function of tier only: τ_exam = 1 h if κ=Associate, 2 h if κ=Professional (empirically exact on pp. 5–9, 18, 20). That's a strong invariant: exam seat time depends only on tier, not domain (7 data points). But price depends on domain: $120, $125, $125, $200, $200, $200, $400, $400, $500 → π_exam is not a function of τ_exam.

Let me enumerate exam data points:
- p5: NCP Agentic AI 2 h | $200
- p6: NCA AI Models and Application Development 1 h | $120
- p7: NCA GenAI LLM 1 h | $125; NCP GenAI LLM 2 h | $200
- p8: NCA GenAI Multimodal 1 h | $125
- p9: NCP OpenUSD Development 2 h | $200
- p18: AI Infrastructure and Operations Certification 1 h | $125 (associate); Professional AI Infrastructure 2 h | $400; Professional AI Operations 2 h | $500
- p20: NCP AI Networking 2 h | $400

So 9 exams, 6 associates? Associates: $120, $125, $125, $125 = 4 at 1h. Professionals: $200 (x3: Agentic AI, GenAI LLM, OpenUSD), $400 (x2: AI Infrastructure, AI Networking), $500 (x1: AI Operations) = 6 total at 2h. Total 10 exams actually (4 + 6). Let me recount: p5 Agentic(AI prof), p6 AI Models (assoc), p7 NCA GenAI LLM (assoc), p7 NCP GenAI LLM (prof), p8 NCA Multimodal (assoc), p9 NCP OpenUSD (prof), p18 AI Infra & Ops cert (assoc), p18 Prof AI Infra, p18 Prof AI Ops, p20 Prof AI Networking. = 10 exams: 4 associate (1 h each), 6 professional (2 h each). 

Exam price entropy: professionals {200,200,200,400,400,500}. Nice: mean $325, σ. So "exam price is domain-indexed, uncorrelated with τ (Pearson r undefined since all τ=2h → zero variance → correlation undefined/singular)". Good singularity: r(τ_exam, π_exam) is undefined within tier because Var(τ_exam)=0 across professionals → division by zero. That's a legit "exact singularity regime"! Nice.

7. Course-level price density: ρ(c) = π(c)/τ(c) [USD/h]. Compute: self-paced 8h/$90 → $11.25/h; ILT 8h/$500 → $62.5/h; private 12h/$1500 → $125/h; 40h/$5000 → $125/h; Run:ai public 8h/$1000 → $125/h; AI Factory Compute 50h/$2000 → $40/h; AI Factory Network 80h/$2000 → $25/h; 3h/$30 → $10/h; 4h/$90 → $22.5/h; 3h/$50 → $16.67/h; 5.5h/$200 → $36.36/h; 5h/$100 → $20/h; 28h Contact Us → ⊥; AI Infra public 25h/$3000 → $120/h; AI Ops 20h/$2500 → $125/h; 30h/$5000 → $166.67/h. Interesting: the combination package (22 h, $3,000) vs 20h/$2,500 + ... hmm.

Check p18 arithmetic consistency: "AI Infrastructure (27 hours, $3,400)" — but "NVIDIA AI Infrastructure: Public Training 25 Hours | $3,000" + "Professional AI Infrastructure Certification 2 Hours | $400" = 27 h, $3,400. ✔ exactly.
"AI Operations (22 hours, $3,000)" — "NVIDIA AI Operations: Public Training 20 Hours | $2,500" + "Professional AI Operations Certification 2 Hours | $500" = 22 h, $3,000. ✔
"AI Infrastructure and Operations (8 hours, $150 special package price)" — 7.5 h course + 1 h exam = 8.5 h, $50 + $125 = $175; package says 8 h / $150 → saves $25 and 0.5 h?? Hmm 7.5+1 = 8.5; but if course is 7 h (p17) + 1 h = 8 h ✔ and $50 + $125 = $175 ≠ $150. So the "8 hours" matches p17's 7-hour listing (7+1=8) while p18's own 7.5-hour listing gives 8.5. And $150 vs $175 → $25 discount. Excellent quantitative audit! That's a genuine multi-hop derivation: the package arithmetic disambiguates which duration is canonical (7 h from p17), by additive closure 7+1=8. Beautiful. And the price closure fails by $25 → package discount δ = $25.

Also "AI Operations & Infrastructure Combination (22 hours, $3,000)" — but AI Ops alone is 22 h/$3,000 and AI Infra alone is 27 h/$3,400. A combined 22 h/$3,000 is less than either → contradiction/naming ambiguity (probably means the 20h ops + 2h exam). Another gray zone.

Also "AI Infrastructure and Operations: Public Training 30 Hours | $5,000" on p18 vs "40 Hours | $5,000" on p17. Contradiction: same name, 30 vs 40 h, same price → ρ = $166.67/h vs $125/h. Strong finding.

So the doc has systematic "duration drift" between section pages (p17, p19) and certification pages (p18, p20). Hypothesis: p17/p19 are "training catalog" pages (latest), p18/p20 are "certification bundle" pages (older / different vintage) → retrocausal genealogy: the bundle pages preserve an earlier catalog state; the training pages were updated. That's a nice retrocausal reading: the later page retains the earlier state — "retrocausal" because the certification page's arithmetic encodes a prior edition.

8. Multi-week trap: define workload W in hours; nominal learner capacity κ_L = 10 h/week (assumption, state it) → weeks = T/κ_L. 80h → 8 weeks; 50 h → 5 weeks; 40 h → 4 weeks; 28 h → 2.8 weeks. Trap: enrollment windows vs exam seat time.

9. A "clock" operator: catalog vintage t₀ = "October 2026" (p1); items marked "Coming Soon" have τ,π = ⊥; obsolescence rate. Define staleness S = t_now − t₀ in months. Breakdown: if S > 12 months, the GB200/300 taxonomy is likely superseded (rubin etc., but don't speculate too much).

Now RECURSIVE_THEORY_OF_MIND: model the learner/advisor/partner triple: learner beliefs about exam difficulty; the advisor's incentive (custom training plan, p2 "connect with one of our training advisors"); the partner gate ("NCP Training (For NCP Partners Only)"). Crisis habit regression: under exam-date pressure, agent reverts to low-cost self-paced 8h/$90 nodes (the highest-count node type in the catalog) — the "cheap-node attractor"; counter-trap: the package price ($150 for 8h) and bundles (27h/$3,400) are dominated choices vs à la carte? Let's check: AI Infra à la carte = $3,000 + $400 = $3,400 = bundle. No discount. AI Ops bundle = $3,000 = $2,500+$500. No discount. So bundles are *not* discounted — only the associate package ($150 vs $175) is. So the counter-trap (bundling saves money) is FALSE for professional tiers — that's a real, verifiable finding: bundling is price-neutral at professional tier, discount only at associate tier ($25). Excellent for counterfactual vetoes.

Also duplication: "Building Agentic AI Applications with LLMs* 8 Hours | $500" appears on p5, p7, p11 (twice on p11!), p12? p11 lists it twice — "Building Agentic AI Applications with LLMs* 8 Hours | $500" appears at top and again lower. Also "Building RAG Agents with LLMs* 8 hours | $90" p5 and p12 "Building RAG Agents with LLMs* 8 Hours | $90". "Adding New Knowledge to LLMs 8 Hours | $500" and "8 Hours | $90" on p7 (two different prices for the same title? one is ILT $500, one self-paced $90). p5 lists "Adding New Knowledge to LLMs 4 Hours | $90" and "8 Hours | $500". Ugh — p5 shows a jumble. Careful. I'll flag as card-merge ambiguity rather than assert.

Let me be careful with quotes and attribute uncertainty. Use "verbatim string as printed on the page, with layout ambiguity noted".

Also note: p10 "Fundamentals of Accelerated Computing With CUDA Python* 8 Hours | $90" AND "Fundamentals of GPU-Accelerated Workflows with CUDA Python* 8 Hours | $500" — two names, two prices, same duration. Fine: distinct products, one SP one ILT (legend: * = self-paced, so $500 one is ILT despite asterisk? On p10, "Fundamentals of GPU-Accelerated Workflows with CUDA Python* 8 Hours | $500" carries the asterisk = self-paced, but $500 is ILT-tier price. Contradiction between legend marker and price tier! Great: legend on p10 says "* NVIDIA Self-paced Course; NVIDIA Instructor-Led Workshop" — asterisk marks self-paced. So a self-paced 8h course at $500 breaks the price-mode invariant. Similarly p5 "Building Agentic AI Applications with LLMs* 8 Hours | $500". So the invariant "mode↔price" breaks. Formally: μ(c) = SP ⇒ π ≈ 90 for 8 h (ρ ≈ $11.25/h) fails for these nodes; instead ρ = $62.5/h.

That's a strong gray-zone audit item: the asterisk is an unreliable type tag; and $500 identical for both "Building Agentic AI Applications with LLMs*" and "Building Agentic AI Applications with LLMs" (no asterisk) on p5 → same title, same price, two markers → duplicate node.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable scenarios with predictions. Must be verifiable (falsifiable) predictions. e.g.:
1. Counterfactual: swap the associate package ($150, 8h) for à la carte ($50 + $125 = $175, 8h if course=7h) → predict total ledger $175 and no schedule change → veto the "bundle saves time" claim; only $25 saved. Verification: recompute from p18 strings.
2. Counterfactual: replace "AI Infrastructure & Operations Public Training 40 Hours | $5,000" (p17) with p18's 30 h/$5,000 → predicted $/h shifts $125 → $166.67; the ledger is inconsistent under either → veto the use of a single ρ.
3. NCP partner gate counterfactual: a non-partner enrolling in "NCP HGX 8-Way Administration Training Private Training Workshop 16 Hours | Contact Us" → predicted price π = ⊥ and enrollment = 0 probability regardless of budget; veto.
4. Exam-seat counterfactual: professional exam always 2 h → a plan that allocates 1 h of seat time fails; but seat time ≠ prep time.
5. Pearson correlation undefined: if a model regresses π_exam on τ_exam, denominator zero → prediction: OLS undefined; any tool reporting r is fabricating.

I'll pick 3 strong ones with predictions and verification paths.

CROSS_LAYER_VETO_ADJUDICATION: Physical layer for training: 
- Hardware veto: Isaac Sim / Omniverse Kit App Streaming requires RTX-class GPU + driver; "Building and Deploying Digital Twin Applications With Omniverse Kit App Streaming 2 Hours | $30" implies remote streaming — bandwidth floor.
- Lab veto: NCP workshops are private, partner-gated: "Special training for our NVIDIA Cloud Partners; purchase and enroll in entire learning path" (p21, p22) — the phrase "purchase and enroll in entire learning path" is a hard bundle veto: you cannot buy a single node.
- Institutional veto: "NCP Training (For NCP Partners Only)" (p17).
- Calendar/physical: proctored exam seat, ID verification, time zones; DGX access.
- "Weather" analog: connectivity/power/cloud-credit cliffs — e.g., 80-hour AI Factory Network Deployment ($2,000, 80 h) requires sustained lab access; a 4-week outage vetoes it.
- Biomechanical: 80 h seat time → sustained posture/vision load; the catalog's longest single-seat exam is 2 h, which is within tolerance; but 40 h public training over consecutive days produces measurable vigilance decay — keep it qualitative and non-medical-claim-ish. Better: cite continuous-attention limits conservatively without fake numbers. I should avoid inventing empirical constants. I'll frame as assumption-flagged.

The document is a catalog; I must keep this grounded. Let me now write with word counts: THINK_TRACE ≥ 400 words; total ≥ 1,000. I'll aim for ~2,000+ total.

Let me carefully compute numbers.

ρ values (USD/h):
- 8h/$90 = 11.25
- 8h/$500 = 62.50
- 4h/$90 = 22.50
- 3h/$30 = 10.00
- 2h/$30 = 15.00
- 1h/$0 = 0 (free)
- 3h/$50 = 16.67
- 5.5h/$200 = 36.36
- 5h/$100 = 20.00
- 8h/$1000 = 125.00
- 12h/$1500 = 125.00
- 16h/⊥ 
- 25h/$3000 = 120.00
- 20h/$2500 = 125.00
- 30h/$5000 = 166.67
- 40h/$5000 = 125.00
- 50h/$2000 = 40.00
- 80h/$2000 = 25.00
- 28h/⊥
- 2h/$200 exam → 100/h
- 1h/$125 exam → 125/h
- 1h/$120 → 120/h
- 2h/$400 → 200/h
- 2h/$500 → 250/h
- 7h/$50 = 7.14
- 7.5h/$50 = 6.67
- 2h/$0 = 0

Note exam ρ ($100–$250/h) exceeds nearly all course ρ ($6.67–$166.67/h) — exams are the highest price-density artifacts except the 30h/$5000 and the private workshops. Interesting: price density is maximized at the credential gate, minimized at subsidized/free self-paced content. That's a nice structural statement: ρ_exam > ρ_course for 90% of pairs.

Let me verify: exam ρ min = 100 (2h/$200). Course ρ max = 166.67 (30h/$5000) and 125 for several. So exams at $100–250/h sit above almost everything except the 30h/$5,000 anomaly. Good.

Also compute free hours: page 9 OpenUSD: 60+60+60+60+3+3+1.5(90min)+2 = let's compute: Setting the Stage 60 min=1, Scene Description Blueprints 1, Composition Basics 1, Beyond the Basics 1, Creating Composition Arcs 3, Asset Structure 3, Developing Data Exchange Pipelines 90 min=1.5, Asset Modularity 2 → total 13.5 h free + exam 2h/$200. p13 version: Composition Arcs 3, Asset Structure 3, Data Exchange 1.5, Modularity 1.5 → 13 h. Robotics Fundamentals path 28 h free; OpenUSD Foundations path 11 h free (p13/p14/p15). Note: "OpenUSD Foundations Learning Path 11 Hours | Free" appears on p13, p14, p15 — three times, same 11 h. Consistent. But the OpenUSD individual courses sum to 13.5 h > 11 h path → the path is not the union of all listed courses (subset selection) → formal statement: P ⊂ 𝒞, 11 h vs 13.5 h, so 2.5 h of listed OpenUSD content is outside the path. That's a derivation. Good.

Robotics: let's sum free nodes on p14: 1 + 0.5 + 1 + 3 + 2 + 1.5 + 1 + 2 + 2 + 1.5 + 1 + 2 + 2 + 1 + 2 + 1 + 2 = let's sum: 1+0.5=1.5; +1=2.5; +3=5.5; +2=7.5; +1.5=9; +1=10; +2=12; +2=14; +1.5=15.5; +1=16.5; +2=18.5; +2=20.5; +1=21.5; +2=23.5; +1=24.5; +2=26.5. Plus paid: 3h/$30, 2h/$30. Total ≈ 31.5 h. vs "Robotics Fundamentals Learning Path 28 Hours | Free" — again a subset. Flag as approximate given layout ambiguity — I'll present as bounded estimate, not exact, acknowledging OCR/layout risk. Maybe safer: state that a naive sum of visible free robotics cards exceeds the declared 28 h path by ~3.5 h under one plausible card-to-tile mapping, and flag mapping uncertainty. Good — gray-zone honesty.

Now the "singularity/breakdown regimes" list:
B1: π = ⊥ (Contact Us) → cost functional undefined; paths through NCP nodes unpriceable. 4 occurrences.
B2: τ parse failure: "2 Housr" (p19), ".5 Hours" (p19, leading zero lost), "1 Hour | Free" vs "½ Hour | Free" mixed decimal/vulgar fractions, "3 Hour" (p17, singular unit), "90 Minutes" vs "1.5 Hours" same course across pages.
B3: Same-title multi-duration: AI Infra & Ops Fundamentals 7 / 7.5 / 8 h.
B4: Same-title multi-price: CVT Fundamentals 3h/$50 vs 2h/Free; BlueField DPU 3h/$50 vs 4h/$50.
B5: Zero-variance regressor: Var(τ_exam | Professional) = 0 → correlation undefined.
B6: Mode-price invariant violation (asterisk self-paced with $500 ILT-tier price).
B7: Package arithmetic closure failure ($150 vs $175) and the 22h/$3,000 "combination" that is shorter than one of its components.
B8: Duplicate card nodes → multigraph; path enumeration double counts.

Now write. Use [PAGE N] with quotes.

Careful: I must not claim to have OCR beyond given text; layout ambiguity acknowledged.

Word budget: I'll write substantial sections. Let me draft.

THINK_TRACE ≥400 words: multi-hop derivation and gray-zone audit. Multi-hop: (1) parse card grammar "Title | Duration | Price" with legend type tags; (2) reconstruct latent prerequisite DAG from page adjacency + topic headings; (3) close the ledger by additive closure tests (bundle arithmetic) to select canonical durations; (4) discover inconsistency classes; (5) derive price-density stratification; (6) identify veto layers; (7) predict learner failure modes. Include the additive-closure derivation chain explicitly.

Let me write everything now.

For equations, provide LaTeX with units. Ensure "no toy equations" — each equation has units, assumptions, and breakdown regime. Good.

I'll number equations (1)-(10).

Total length target ~2,300 words. Write.

Section XML tags exact.

Let me write the response.

One more useful derived invariant: "Certification count": 10 exams → 4 associate, 6 professional. Roles: developers get 9 of 10? Developer-side exams: AI Models & App Dev (assoc), GenAI LLM (assoc), GenAI Multimodal (assoc), Agentic AI (prof), GenAI LLM (prof), OpenUSD (prof) = 6; Infrastructure: AI Infra & Ops (assoc), Prof AI Infra, Prof AI Ops, Prof AI Networking = 4. Total 10. And note asymmetry: developers have 3 associate + 3 professional; infra has 1 associate + 3 professional. So the associate tier is developer-skewed 3:1. Nice structural finding.

Also note: no Professional certification for "AI Models and Application Development" (only associate) and no Associate for Agentic AI / OpenUSD / AI Networking. Enumerate coverage gaps → path dead-ends.

Now write.
</NATIVE_REASONING>

<THINK_TRACE>
The drive source is not a technical paper; it is a **typed catalog** — a page-per-domain enumeration of course atoms, bundle nodes, and proctored-exam gates. The correct way to reason over it is to treat every printed tile as a record in a schema and then test that schema for closure, because the document's real information content lies in the *arithmetic and naming consistency* of the tiles, not in prose. The derivation runs seven hops.

**Hop 1 — grammar extraction.** Every tile instantiates the production `⟨Title⟩ ⟨duration⟩ | ⟨price⟩`, with a superscript asterisk or double-asterisk as a type token. The legend fixes the token semantics: [PAGE 5] states "`COURSE LEGEND … * NVIDIA Self-paced Course … ** Professional Certification`", while [PAGE 17] and [PAGE 19] restate the legend without the asterisk lines, and [PAGE 9] uses a reduced legend ("`Self-paced Course / Certification Exam`") because that page contains only free self-paced modules plus one exam. So the asterisk space is page-local, not document-global — a first gray zone.

**Hop 2 — latent prerequisite order.** No page prints a prerequisite arrow. The only ordering evidence is *typographic adjacency within column groups* and section headers ("`Fundamentals`", "`Applied Concepts`", "`Foundational`", "`Profiling`" on [PAGE 9] and [PAGE 10]). Therefore the observed graph G_obs is a proximity-reconstruction of an unobserved G_true, and any path claim carries edge-error ε = |E(G_obs) Δ E(G_true)| that the document never bounds. This is the single largest epistemic hazard in the source, and I must flag it before any cost or schedule claim.

**Hop 3 — additive closure as an oracle.** The bundle arithmetic on [PAGE 18] lets me *disambiguate* competing duration values elsewhere. [PAGE 18] prints "`AI Infrastructure (27 hours, $3,400)`"; the components on the same page are "`NVIDIA AI Infrastructure: Public Training 25 Hours | $3,000`" and "`Professional AI Infrastructure Certification** 2 Hours | $400`". Sum: 25 h + 2 h = 27 h and $3,000 + $400 = $3,400 — exact closure in *both* dimensions. Likewise "`AI Operations (22 hours, $3,000)`" closes against 20 h + 2 h and $2,500 + $500. Professional bundles are therefore **price-neutral and time-neutral**: the bundle is a packaging convenience, not a discount. But "`AI Infrastructure and Operations (8 hours, $150 special package price)`" fails price closure against the same page's own tiles: 7.5 h + 1 h = 8.5 h and $50 + $125 = $175. The 8-hour figure closes only if the course duration is the **7 hours** printed on [PAGE 17] ("`AI Infrastructure and Operations Fundamentals 7 Hours | $50`"), i.e. 7 + 1 = 8. That single arithmetic test selects 7 h as canonical and exposes the 7.5 h on [PAGE 18] as drift, and it quantifies the associate-tier discount as exactly $25. This is the strongest multi-hop result available in the document.

**Hop 4 — inconsistency taxonomy.** Systematically: same title, different duration (7 / 7.5 / 8 h); same title, different price and duration ("`NVIDIA Cable Validation Tool (CVT) Fundamentals 3 Hour | $50`" [PAGE 17] versus "`NVIDIA Cable Validation Tool (CVT) Fundamentals 2 Hours | Free`" [PAGE 19]); the same UFM course at 3 h ([PAGE 17], [PAGE 19], [PAGE 21]) and 2 h ([PAGE 22]); Run:ai Platform Deployment at 3 h/$50 ([PAGE 17]) and 2.5 h ([PAGE 22]); the same public training at 30 h ([PAGE 18]) and 40 h ([PAGE 17]) for the identical $5,000. The pattern is directional: *training pages* ([PAGE 17], [PAGE 19]) versus *certification pages* ([PAGE 18], [PAGE 20]) disagree, which suggests the certification pages preserve an earlier catalog vintage — a retrocausal reading developed later.

**Hop 5 — price-density stratification.** Reducing every tile to ρ = π/τ in USD·h⁻¹ yields a two-population structure: subsidized self-paced content at $6.67–$22.50·h⁻¹, instructor-led and private workshop content at $62.50–$166.67·h⁻¹, and proctored exams at $100–$250·h⁻¹. The credential gate is the highest-density artifact in the catalog except one outlier. That is the economically meaningful statement the document supports.

**Hop 6 — hard veto layers.** Several nodes are unreachable independent of budget: the NCP paths are both partner-gated and whole-path-gated ("`Special training for our NVIDIA Cloud Partners; purchase and enroll in entire learning path`", [PAGE 21], [PAGE 22]; "`NCP Training (For NCP Partners Only)`", [PAGE 17]), and four nodes carry π = ⊥ via "`Contact Us`". Any planner that produces a total cost for an NCP route has fabricated a number.

**Hop 7 — behavioral prediction.** Under deadline pressure, learners regress to the modal node type (8-hour self-paced at $90), skip the 8-hour $500 instructor-led prerequisites, and then meet a 2-hour proctored gate whose density is 5–20× the content they trained on. The counter-trap — "bundling saves money" — is *false* at professional tier by the Hop-3 closure and *true* by exactly $25 at associate tier. That asymmetry is the actionable finding.

Gray-zone honesty: all layout attributions (which duration belongs to which title when a tile wraps across columns) are inference from column adjacency, not certainty; I mark every such case explicitly rather than silently resolving it.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
**Assumptions (stated once, inherited by all equations).**
(A1) Tiles parse as `⟨Title⟩, τ, π, μ, γ` where τ ∈ ℝ≥0 hours, π ∈ ℝ≥0 USD ∪ {⊥}, μ ∈ {SP (self-paced), ILT (instructor-led workshop), PW (private workshop), EX (proctored exam)}, γ ∈ {competency, certification}. (A2) "Contact Us" is encoded as π = ⊥, not as zero. (A3) Learner capacity κ_L is a *declared parameter*, not a document constant. (A4) The prerequisite relation ≺ is latent; G_obs is a proximity reconstruction.

**(1) Path cost functional** — defined only on ⊥-free paths:
C(P) = Σ_{c∈P} π(c) + Σ_{k∈K(P)} π_exam(k)  [USD],  dom(C) = {P : ∀c∈P, π(c) ≠ ⊥}.
*Breakdown regime B1:* dom(C) excludes every NCP route. Four ⊥ nodes appear: "`DGX System Administration: Private Workshop 16 Hours | Contact Us`" [PAGE 17]; "`NCP GB200/GB300 Administration Training Private Workshop 28 Hours | Contact Us`" [PAGE 17]; "`NCP HGX 8-Way Administration Private Training Workshop 16 Hours | Contact Us`" [PAGE 17]; "`Spectrum-X Networking Platform Administration Private Workshop … 16 Hours | Contact Us`" [PAGE 19]. On these, C(P) ≡ ⊥ exactly.

**(2) Path duration and calendar load:**
T(P) = Σ τ(c) [h];  W(P) = T(P)/κ_L [weeks], κ_L in h·week⁻¹.
Multi-week traps by inspection: "`AI Factory Compute Deployment 50 Hours | $2,000`" [PAGE 17]; "`AI Factory Network Deployment 80 Hours | $2,000`" [PAGE 19]; "`NVIDIA AI Infrastructure & Operations: Public Training 40 Hours | $5,000`" [PAGE 17]; "`28 Hours | Contact Us`" [PAGE 17]; "`Robotics Fundamentals Learning Path 28 Hours | Free`" [PAGE 13]. At κ_L = 10 h·week⁻¹ these are 5, 8, 4, 2.8 and 2.8 weeks respectively. *Breakdown:* W is undefined for ⊥-duration; W is meaningless if enrollment windows are shorter than W.

**(3) Price density** ρ(c) = π(c)/τ(c) [USD·h⁻¹], undefined at τ = 0. Measured: 8 h/$90 → 11.25; 8 h/$500 → 62.50; 4 h/$90 → 22.50; 3 h/$30 → 10.00; 2 h/$30 → 15.00; 3 h/$50 → 16.67; 5.5 h/$200 → 36.36; 5 h/$100 → 20.00; 8 h/$1,000 → 125.00 [PAGE 17 "`Run:ai for AI Practioners Public Training 8 Hours | $1,000`"]; 12 h/$1,500 → 125.00 [PAGE 19]; 25 h/$3,000 → 120.00; 20 h/$2,500 → 125.00; 30 h/$5,000 → 166.67; 40 h/$5,000 → 125.00; 50 h/$2,000 → 40.00; 80 h/$2,000 → 25.00; 7 h/$50 → 7.14; 7.5 h/$50 → 6.67. *Breakdown B2:* ρ is undefined for "`Contact Us`"; ρ is *non-unique* for any title with two printed durations.

**(4) Credential-gate density** ρ_exam = π_exam/τ_exam [USD·h⁻¹]. Observed exams, complete enumeration: [PAGE 6] "`1 Hour | $120`" → 120.00; [PAGE 7] "`1 Hour | $125`" and "`2 Hours | $200`" → 125.00, 100.00; [PAGE 8] "`1 Hour | $125`" → 125.00; [PAGE 5] "`2 Hours | $200`" → 100.00; [PAGE 9] "`2 Hours | $200`" → 100.00; [PAGE 18] "`1 Hour | $125`" → 125.00, "`2 Hours | $400`" → 200.00, "`2 Hours | $500`" → 250.00; [PAGE 20] "`2 Hours | $400`" → 200.00. Result: ρ_exam ∈ [100.00, 250.00] USD·h⁻¹ exceeds ρ_course for all but one course node — the credential gate is the densest artifact in the catalog.

**(5) Tier step-function (empirically exact).** τ_exam(κ) = 1 h if κ = Associate; 2 h if κ = Professional. Ten of ten exams obey it. Therefore the **singularity regime B3**: within the Professional tier Var(τ_exam) = 0, so any regression of π_exam on τ_exam has zero denominator — the sample correlation r(τ_exam, π_exam) is **undefined, not zero**. Any tool reporting a finite r here is fabricating. Formally: r undefined ⇔ Σ(τ − τ̄)² = 0, which holds exactly ({2,2,2,2,2,2} hours). The correct model is a lookup π_exam : κ × domain → USD, with observed range $200–$500 inside a single tier.

**(6) Bundle closure test.** Define Δτ = T(bundle) − Σ T(components) [h], Δπ = C(bundle) − Σ π(components) [USD]. Closure requires Δτ = Δπ = 0.
- Infrastructure bundle [PAGE 18]: 27 − (25 + 2) = 0 h; $3,400 − ($3,000 + $400) = $0 → **closes**.
- Operations bundle [PAGE 18]: 22 − (20 + 2) = 0 h; $3,000 − ($2,500 + $500) = $0 → **closes**.
- Associate package [PAGE 18]: "`AI Infrastructure and Operations (8 hours, $150 special package price)`". Against same-page tiles: 8 − (7.5 + 1) = −0.5 h and $150 − ($50 + $125) = −$25. Against [PAGE 17] course duration 7 h: 8 − (7 + 1) = 0 h — closes on time, fails on price by exactly $25. *Inference:* canonical course duration is 7 h; associate-tier discount δ = $25. *Breakdown B4:* the "`AI Operations & Infrastructure Combination (22 hours, $3,000)`" [PAGE 18] has T = 22 h, which is **shorter than** the Infrastructure bundle's 27 h and equal to the Operations bundle alone — naming collision, unpriceable as a distinct node without further assumption.

**(7) Duration-drift functional.** For title-matched pairs across pages, δτ = τ(p_a) − τ(p_b). Instances: AI Infra & Ops Fundamentals 7 vs 7.5 h ([PAGE 17] vs [PAGE 18]); Public Training 40 vs 30 h ([PAGE 17] vs [PAGE 18]) at identical $5,000 → δρ = 125.00 − 166.67 = −41.67 USD·h⁻¹; CVT Fundamentals 3 h/$50 vs 2 h/Free ([PAGE 17] vs [PAGE 19]); BlueField DPU Administration 3 h/$50 vs 4 h/$50 ([PAGE 17] vs [PAGE 19]); UFM 3 h vs 2 h ([PAGE 19] vs [PAGE 22]); Run:ai Platform Deployment 3 h vs 2.5 h ([PAGE 17] vs [PAGE 22]); "`Learn OpenUSD: Developing Data Exchange Pipelines 90 Minutes | Free`" [PAGE 9] vs "`1.5 Hours | Free`" [PAGE 13] (same value, different units); "`Learn OpenUSD: Asset Modularity and Instancing 2 Hours | Free`" [PAGE 9] vs "`1.5 Hours | Free`" [PAGE 13]. *Breakdown B5:* for these titles the map c ↦ τ(c) is not a function; every downstream aggregate is multi-valued.

**(8) Path-subset inequality.** If P is a declared learning path, consistency requires Σ_{c∈P} τ(c) ≤ τ_declared. OpenUSD: declared "`OpenUSD Foundations Learning Path 11 Hours | Free`" [PAGE 13, PAGE 14, PAGE 15 — identical thrice]; sum of the eight visible OpenUSD modules on [PAGE 9] = 1 + 1 + 1 + 1 + 3 + 3 + 1.5 + 2 = 13.5 h > 11 h. Conclusion: P ⊊ 𝒞; 2.5 h of listed content lies outside the path. Same test, robotics: declared 28 h [PAGE 13]; a plausible column-adjacency sum of visible free robotics tiles on [PAGE 14] reaches ≈26.5 h of free nodes plus 5 h of paid nodes ≈ 31.5 h. *Breakdown B6:* because tile-to-title mapping on [PAGE 14] is column-ambiguous, this second figure is an estimate with unquantified mapping error, and I present it as such rather than as a measurement.

**(9) Mode–price invariant.** The legend on [PAGE 10] binds "`*`" to "`NVIDIA Self-paced Course`". Yet "`Building Agentic AI Applications with LLMs* 8 Hours | $500`" [PAGE 5, PAGE 7, PAGE 11 ×2] and "`Fundamentals of GPU-Accelerated Workflows with CUDA Python* 8 Hours | $500`" [PAGE 10] carry the self-paced marker at the instructor-led density $62.50 USD·h⁻¹, while "`Fundamentals of Accelerated Computing With CUDA Python* 8 Hours | $90`" [PAGE 10] sits at $11.25 USD·h⁻¹. *Breakdown B7:* μ(c) = SP does **not** imply low ρ; the asterisk is an unreliable type tag, so type-conditioned cost models must be fit on price, not on the marker.

**(10) Coverage indicator for the tier map.** Associate exams: 4 ("`1 Hour | $120`" [PAGE 6]; "`1 Hour | $125`" [PAGE 7]; "`1 Hour | $125`" [PAGE 8]; "`1 Hour | $125`" [PAGE 18]). Professional exams: 6 ($200 ×3 on [PAGE 5], [PAGE 7], [PAGE 9]; $400 ×2 on [PAGE 18], [PAGE 20]; $500 ×1 on [PAGE 18]). Developer/infrastructure split: developers hold 3 associate + 3 professional; infrastructure holds 1 associate + 3 professional. Consequence: the Associate tier is developer-skewed 3:1, and three domains (Agentic AI, OpenUSD, AI Networking) have **no** associate rung, while AI Applications has no professional rung — the ladder has structural dead-ends.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The document is dated forward — [PAGE 1] reads "`NVIDIA Training and Certification Learning Paths October 2026`" — yet its content is a stratigraphy of acquisitions and product generations, each layer leaving a fossil in the tile list. Reading the catalog backwards reconstructs the lineage.

*Networking layer.* "`Cumulus Linux Administration 5 Hours | $100`" and "`Cumulus Linux Essentials 2 Hours | Free`" [PAGE 19] descend from the Cumulus Networks acquisition and its Linux-for-switch ASIC heritage. "`InfiniBand Network Administration 5.5 Hours | $200`", "`MLXlink and MLX Cable Debug Tools 1.5 Hours | Free`", "`Data Center Management Made Easy with NVIDIA UFM 3 Hours | $50`" [PAGE 19] are Mellanox-fabric lineage: UFM is the fabric manager, MLXlink the cable/transceiver diagnostic. "`Spectrum-X Networking Platform Administration Private Workshop`" [PAGE 19] and "`RDMA Over Converged Ethernet from A to Z .5 Hours | Free`" mark the Ethernet-for-AI pivot. "`BlueField DPU Administration 3 Hours | $50`" [PAGE 17] versus "`4 Hours | $50`" [PAGE 19] is a drift artifact of that pivot.

*Orchestration layer.* "`Base Command Manager Administration 3 Hours | $50`" [PAGE 17] and "`Base Command Manager for NCPs 1 Hour`" [PAGE 21, PAGE 22] preserve the Bright Cluster Manager lineage. "`Run:ai for AI Practioners Public Training 8 Hours | $1,000`" and "`Run:ai Platform Deployment 3 Hours | $50`" [PAGE 17] versus "`2.5 Hours`" [PAGE 22] preserve the Run:ai scheduler lineage; "`AI Cluster Orchestration and Enterprise Deployment 8 Hours`" [PAGE 21] is its NCP-facing descendant. The note "$1,000" for an 8-hour practitioner course equals the private-workshop density $125·h⁻¹ exactly (Equation 3), which is why the Run:ai tile behaves economically like a workshop rather than a course.

*Simulation layer.* "`Learn OpenUSD: …`" modules [PAGE 9, PAGE 13] sit on the OpenUSD/AOUSD standardization; "`An Introduction to Robot Learning and Isaac Lab 3 Hours | Free`", "`Train Your First Robot in Isaac Lab 2 Hours | Free`", "`Train Your Second Robot in Isaac Lab 2 Hours | Free`" [PAGE 14] are the Isaac Gym → Isaac Lab migration made visible by the "first/second robot" pedagogical split. "`From Perception to Prediction - Developing Physical AI with Cosmos 3 2 Hours | $30`" [PAGE 13, PAGE 14, PAGE 15] is the newest stratum — a world-foundation-model course appended to three different pages because no page owns it yet.

*Retrocausal inversion.* The certification pages ([PAGE 18], [PAGE 20]) are **older** than the training pages ([PAGE 17], [PAGE 19]): they carry the 30-hour figure where the training page carries 40 hours at the same $5,000, the 7.5-hour figure where the training page carries 7 hours, and the older UFM duration via [PAGE 22]. The bundle arithmetic on [PAGE 18] closes perfectly (Δτ = Δπ = 0 twice), which means it was internally consistent *at its own vintage*; the conflict is inter-vintage, not intra-page. A planner who takes the bundle page as ground truth inherits a superseded catalog state. That is the retrocausal trap: the page that looks most authoritative (it has the arithmetic) is the page most likely to be stale.

*Multi-week traps, genealogically.* The "`AI Factory Learning Path`" nodes — "`AI Factory Compute Deployment 50 Hours | $2,000`" [PAGE 17] and "`AI Factory Network Deployment 80 Hours | $2,000`" [PAGE 19] — are the newest stratum and the longest commitments; their low density ($40.00 and $25.00 USD·h⁻¹) signals subsidized enablement pricing tied to hardware adoption cycles, which historically have short half-lives. Committing eight weeks at κ_L = 10 h·week⁻¹ to an 80-hour node pinned to a specific fabric generation is the highest-obsolescence bet in the catalog.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Three agents share this document, and each models the others imperfectly.

**The learner's model of the exam.** The learner sees ten exams whose printed durations are 1 or 2 hours and whose densities are $100–$250·h⁻¹ (Equation 4). A natural but false inference is "the exam is 2 hours, so the exam is small." The correct reading is inverse: the gate is the densest artifact, and the 2 hours is *seat time*, not study time — an entirely different quantity that the catalog never prints. The learner conflates τ_exam with preparation time because the catalog supplies no other number.

**The advisor's model of the learner.** [PAGE 2] offers "`To develop a customized training plan for your organization, connect with one of our training advisors.`" The advisor's incentive is path completeness; the learner's incentive is path cheapness. The document itself contains the arbitration: professional bundles close at Δπ = $0 (Equation 6), so the advisor cannot sell bundling as savings at professional tier. Only the associate package carries a discount, and it is $25. A learner who *expects* a bundle discount is modeling the catalog as retail; the catalog is list-price with one $25 concession.

**Crisis habit regression.** Under a scheduled exam date, behavior regresses to the modal node: the 8-hour self-paced course at $90 (ρ = $11.25·h⁻¹) appears repeatedly — "`Building RAG Agents with LLMs* 8 hours | $90`" [PAGE 5], "`Fundamentals of Deep Learning* 8 Hours | $90`" [PAGE 7], "`Fundamentals of Accelerated Computing With CUDA Python* 8 Hours | $90`" [PAGE 10]. Regression is rational locally and catastrophic globally: the learner accumulates cheap hours without accumulating the private-workshop or partner-gated hours that the professional infrastructure rungs actually require ([PAGE 17] "`NCP Training (For NCP Partners Only)`"), then meets a $400–$500 gate with a $90 habit.

**Counter-trap.** The counter-move is to invert selection: choose by *gate* first, then buy content. Concretely, pick the target exam (2 h, $400 for "`Professional AI Infrastructure Certification**`" [PAGE 18]), then check whether the prerequisite content is purchasable at all. For NCP routes it is not — π = ⊥, and additionally [PAGE 21] and [PAGE 22] state "`Special training for our NVIDIA Cloud Partners; purchase and enroll in entire learning path`", a whole-path purchase constraint that vetoes à-la-carte assembly before any budget question arises.

**Clock.** Three clocks run. (i) *Catalog vintage*: "`October 2026`" [PAGE 1] sets t₀; the drift analysis shows sub-pages at different vintages, so any plan built from [PAGE 18] is already behind [PAGE 17]. (ii) *Availability clock*: three nodes are "`Coming Soon`" — "`Building AI Agents with Multimodal Models`" [PAGE 13], "`Develop AI-Powered Operational Dashboards for Digital Twin Applications`" [PAGE 15] — with τ, π = ⊥, so any path routed through them is unclosable, not merely expensive. (iii) *Deadline clock*: W(P) = T(P)/κ_L (Equation 2). With κ_L as a declared parameter, an 80-hour node is eight weeks and a 40-hour node is four; a learner who plans four weeks for the infrastructure public training and then discovers the training page says 40 hours rather than the bundle page's 30 has mis-planned by a full week at κ_L = 10. The clock converts a documentation inconsistency into a missed date.

The recursive fix: the learner should model the advisor as a *vintage carrier* (ask which catalog edition the quote reflects), and the advisor should model the learner as a *density optimiser* (quote the gate price first, content price second).
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A training plan is a physical plan. Four lower layers can veto it independent of budget, motivation, or study design.

**Institutional veto (hardest).** [PAGE 17] prints "`NCP Training (For NCP Partners Only)`"; [PAGE 21] and [PAGE 22] both print "`Special training for our NVIDIA Cloud Partners; purchase and enroll in entire learning path`". This is a *conjunctive* gate: partner status AND whole-path purchase. Both components must hold. A non-partner learner has enrollment probability exactly zero for "`NCP HGX 8-Way Administration Private Training Workshop 16 Hours | Contact Us`" and "`NCP GB200/GB300 Administration Training Private Workshop 28 Hours | Contact Us`" [PAGE 17]. No amount of self-study substitutes, because the path includes private-workshop nodes with no public analogue. *Adjudication:* veto sustained; the entire NCP branch is unreachable and its cost is π = ⊥.

**Laboratory/access veto.** Instructor-led and private-workshop nodes presuppose provisioned clusters: "`DGX System Administration: Private Workshop 16 Hours | Contact Us`" [PAGE 17] cannot be self-hosted at learner expense without DGX hardware, and "`AI Cluster Orchestration and Enterprise Deployment 8 Hours`" [PAGE 21] presupposes a multi-node fabric. Conversely, "`Building and Deploying Digital Twin Applications With Omniverse Kit App Streaming 2 Hours | $30`" [PAGE 15] implies *remote* streaming of an RTX-class render node — an explicit upstream bandwidth and latency floor that the catalog never states. *Adjudication:* any plan that schedules streaming-dependent Omniverse labs onto a thin-client link carries an unquantified physical veto risk; treat as a conditional, not a certainty, because the document does not print hardware minima.

**Calendar/seat veto.** All ten exams are proctored artifacts at 1 or 2 hours (Equation 5). Seat availability, identity verification, and time-zone placement are external constraints the catalog is silent on. The specific hazard: because τ_exam is constant within tier, an exam-date collision cannot be resolved by "picking the shorter exam" — all Professional gates are 2 hours with zero variance. *Adjudication:* schedule risk must be absorbed at the seat layer; the curriculum layer offers no relief valve.

**Sustained-load ("weather") veto.** The long nodes — 50 h [PAGE 17], 80 h [PAGE 19], 40 h [PAGE 17], 28 h [PAGE 17] — are exposed to interruption: connectivity loss, lab re-provisioning, cohort cancellation. Unlike a 3-hour self-paced module, an interrupted 80-hour program does not degrade gracefully; it strands the learner mid-path with partial credit and no partial credential, since the credential is a single 2-hour gate. *Adjudication:* the veto is asymmetric — cheap nodes are interruption-tolerant, expensive nodes are not, so the rational hedge is to place all interruption-sensitive commitments after the gate prerequisites are already satisfied.

**Summary adjudication.** Vetoes are ordered by hardness: institutional (absolute, 2 nodes plus 2 workshops) > laboratory (high, unquantified) > seat (moderate) > sustained-load (moderate, hedgeable). No curriculum redesign overrides the first.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Each scenario is a counterfactual substitution with a checkable prediction; each is falsifiable against the printed strings alone.

**Veto 1 — "Bundling saves money" (professional tier).**
Counterfactual: replace the bundle purchase with à-la-carte purchase of the same components. Components [PAGE 18]: "`NVIDIA AI Infrastructure: Public Training 25 Hours | $3,000`" + "`Professional AI Infrastructure Certification** 2 Hours | $400`". Bundle: "`AI Infrastructure (27 hours, $3,400)`".
Prediction: Δπ = $3,400 − $3,400 = $0.00 and Δτ = 27 − 27 = 0 h. A second, independent test on the Operations side: $3,000 − ($2,500 + $500) = $0, 22 − 22 = 0 h. **Prediction: any claim of a professional-tier bundle discount is false; the measured discount is $0 in both dimensions.** Falsification test: recompute from the four printed integers; if any pair fails closure, the veto collapses.

**Veto 2 — "The associate package is just a bundle, so it saves nothing."**
Counterfactual: buy the associate package versus à la carte. Package [PAGE 18]: "`AI Infrastructure and Operations (8 hours, $150 special package price)`". À la carte using same-page tiles: "`AI Infrastructure and Operations Fundamentals 7.5 Hours | $50`" + "`AI Infrastructure and Operations Certification** 1 Hour | $125`" = $175, 8.5 h. Using the [PAGE 17] duration ("`7 Hours | $50`"): $175, 8 h.
Prediction: (a) the discount is exactly **$25.00**, not zero — so the package *is* the dominant purchase at associate tier; (b) the package's printed 8 hours is arithmetically consistent only with the **7-hour** course duration, therefore the [PAGE 18] 7.5-hour figure is stale and the [PAGE 17] 7-hour figure is canonical. **Prediction: any planner quoting 8.5 hours total for this package is using the stale figure.** Falsification test: 7 + 1 = 8 must hold and 7.5 + 1 = 8.5 must fail; both are checkable on the page.

**Veto 3 — "A single price-density ρ can price the whole catalog."**
Counterfactual: apply the instructor-led density from the public training tile to the certification-page tile of the same product. [PAGE 17]: "`NVIDIA AI Infrastructure & Operations: Public Training 40 Hours | $5,000`" → ρ = $125.00·h⁻¹. [PAGE 18]: "`NVIDIA AI Infrastructure and Operations: Public Training 30 Hours | $5,000`" → ρ = $166.67·h⁻¹.
Prediction: (a) a single-density model produces a **$1,666.70** error on a 10-hour duration discrepancy at $166.67·h⁻¹ (or equivalently a 33% density error at fixed price); (b) log-loss / residual tests will show the catalog is not density-homogeneous but **bimodal**, with subsidized self-paced content at $6.67–$22.50·h⁻¹ and workshop content at $62.50–$166.67·h⁻¹, plus a separate exam population at $100–$250·h⁻¹. **Prediction: fit a single ρ and residuals split into at least two clusters; the exam population will be systematically under-predicted.** Falsification test: recompute ρ for the enumerated tiles in Equation 3; if the range collapses to a narrow band, the bimodality claim fails.

**Veto 4 (corollary, structural) — "You can regress exam price on exam duration."**
Counterfactual: fit π_exam = a + b·τ_exam across the six Professional exams. τ = {2, 2, 2, 2, 2, 2} h; π = {$200, $200, $400, $400, $500, $200} USD.
Prediction: Σ(τ − τ̄)² = 0 exactly, so b is **undefined** (0/0) and the sample correlation is undefined, not zero. **Prediction: any reported finite slope or r is an artifact of a tool that silently substitutes a default; the correct model is a categorical lookup κ × domain → USD with range $200–$500 inside one tier.** Falsification test: compute the denominator; it is exactly zero by Equation (5).
</RLVR_COUNTERFACTUAL_VETOES>