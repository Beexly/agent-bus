# arxiv-program/research/2026-09-21/arxiv-deep/0124-integrating-large-language-models-with-network.md
## What it is (1-2 sentences)
Supply-chain planning case study (Venkatachalam, arXiv:2508.21622, 2025) layering a two-LLM context-engineering pipeline over a classical multi-period MIP solved with SCIP, so non-technical stakeholders can interrogate optimization results — served via FastAPI/React over REST/MCP. The reader's verdict was ADAPT — the transferable asset is the architecture pattern (deterministic optimizer as the sole source of truth; LLM as explainer checked against the optimizer's numbers), not the supply-chain MIP.
## Key metrics/methods (formulas where given, else "not specified")
- MIP (constraints 1a–1l, notation partially garbled): maximize Σ_tΣ_i (safety-stock reward − shortage penalty) − Σ_tΣ_{i,j} (fixed transfer cost · Y_{i,j,t}); inventory balance inv_{i,t} = inv_{i,t−1} + inbound − outbound − demand + replenishment; safety-stock inv ≥ ss − short; big-M linking 0 ≤ x ≤ cap·Y, Y ∈ {0,1}.
- Two-LLM pipeline: LLM1 builds role-specific context (planner/finance/warehouse views); LLM2 reflects/checks LLM1's context for consistency.
- Serving: FastAPI backend, React UI, JSON config, REST/MCP interface; optimizer outputs are the only numbers LLMs may present.
- LLM temperature/settings: not stated in paper.
## Data sources named
Real industrial offshore-replenishment case (14–20 week lead times, DC inventory/demand/transfer data); spot figures only (Week 37 demand 184 units; Week 33 transfers 255 units; DC1 inventory −1,141 units by Week 38 absent transfers; total transferred 294 units). No released dataset; no code.
## Findings (numbers and facts, not vibes)
- Claimed savings $394,734 vs no-transfer baseline — single proprietary case, no counterfactual methodology shown.
- No baseline optimizer comparison, no LLM hallucination/explanation-accuracy evaluation, no ablation of two-LLM reflection vs single LLM.
- Constraint notation internally inconsistent (index i for SKU and DC; y/Y casing) — not proofread against implementation.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- LLM-as-explainer-over-deterministic-optimizer pattern for GSE's DFS lineup optimizer / edge engine: LLM drafts role-specific write-ups from optimizer JSON, numeric cross-checker enforces faithfulness — TRUST-SIGNAL.
- Schema-constrained verifier improvement (LLM emits (metric, value, source-field) triples mechanically checked against optimizer JSON, mismatch forces regeneration) — TRUST-SIGNAL.
- New pattern for the corpus; GSE's DFS/pick write-ups are currently human-authored — OTHER.
## Engine-actionable? (yes/no + one-line what)
Yes — build an LLM explanation endpoint over the DFS optimizer (numbers only from optimizer JSON, deterministic numeric-consistency checker) and adapt it iff ≥98% numeric faithfulness on a 1-week DFS test set AND Garrett rates ≥70% of write-ups publishable-with-minor-edits.
