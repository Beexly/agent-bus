# arxiv-program/research/2026-09-21/arxiv-deep/2029-delta-tensor-efficient-vector-tensor.md
## What it is (1-2 sentences)
Deep read (ledger completed 2026-09-22, verdict ADAPT) of Bao et al. (Northeastern/Oracle Labs, arXiv:2405.03708v3), the only lane paper on storing sparse, high-dimensional signal arrays in a lakehouse instead of blobs: five Delta Lake table layouts (FTSF dense chunking; COO, CSR/CSC, CSF, BSGS sparse encodings) benchmarked on dense image tensors and sparse event tensors. Positioned as the array-native storage complement to 2026 (lake tables) and 2024 (KONTOGRAPH), directly relevant to the mandated self-learning engine's need to store discovered signals/embeddings versioned with the data.

## Key metrics/methods (formulas where given, else "not specified")
Five storage methods, each a Delta Lake table layout:
1. **FTSF** (Flattened Tensor Storage Format, dense): chunk the tensor along its last D_c dimensions; one row per chunk with (id, chunk BINARY, dim_count, dimensions, chunk_dim_count). Dictionary encoding on repeated metadata; schema evolution adds custom metadata.
2. **COO**: (id, layout, dense_shape, indices, value) per nonzero.
3. **CSR/CSC**: flatten tensor to 2D, three arrays (values, col/row indices, row/col pointers); record dense_shape + flattened_shape for reconstruction.
4. **CSF** (Compressed Sparse Fiber): tree-structured compression of duplicate indices per dimension; first two dimensions' fiber pointers/indices stored unchunked per tensor, remaining dimensions chunked.
5. **BSGS** (Block Sparse Generic Storage): Mode-Generic format — partition into dense blocks of any order, store non-null blocks + block indices; enables slicing without reading the whole tensor.
- Design split: encoding-before-partitioning (CSR, CSF) vs partitioning-before-encoding (BSGS). BSGS allows slice-before-decode.
- Equations: compression ratio C_r = S_encode / S_binary (S_binary = naive serialization size); t_en(X) = elapsed(F(X)), t_de(X_encode) = elapsed(F^-1(X_encode)); t_write = t_ser + t_en(X); t_read_tensor = t_des + t_de(X_encode); t_read_slice = t_des + t_de(XS_encode). Tensor/notation formalism: slice X[0:100,:,:,:] ≡ X_[1:100]:::, fibers as higher-order rows/columns.
- Assumptions: access patterns are chunk-local (SGD batch reads); the 10% nonzero sparsity rule of thumb; binary/PyTorch-PT serialization is the fair baseline.
- Validation: dense FTSF vs binary on FFHQ subset; sparse COO/CSR/CSF/BSGS vs PyTorch PT on Uber tensor; ops = write tensor, read full tensor, read slice (dense: X[1:100]::: = 100-image fiber; sparse: X[i]::: for i in 0..183). 100 repetitions averaged per timing.

## Data sources named
- Dense case: FFHQ subset — 5,000 images of 1024×1024 RGB as tensor (5000, 3, 1024, 1024), 14.6 GB serialized. (Reader notes the subset is 5K of 70K images "due to hardware limitation," biasing the dense case toward one fixed workload.)
- Sparse case: NYC Uber Pickups Apr–Aug 2014 as tensor (183, 24, 1140, 1717) = 8,596,812,960 elements with 3,309,490 nonzeros → 0.038% nonzero (below the paper's 10% sparsity rule of thumb).
- Environment: Spark cluster, 2× Intel Xeon Gold 5215, 128 GB RAM, 1 Gbps network. Timings averaged over 100 repetitions.
- Code: not published; datasets public (FFHQ, Uber pickups); implementation described but not released.
- Cross-referenced corpus items: 2026 (lake tables — tabular features), 2024 (KONTOGRAPH — tabular features), 2031 (AutoComp, planned — maintenance-side pairing for the auto-chunker improvement).

## Findings (numbers and facts, not vibes)
Dense FFHQ (exact quotes):
- Size: 14.6 GB → 13.3 GB (−8.90%) despite no compression, via chunking + metadata dict encoding.
- Write: 135.69s → 251.77s (+85.52% overhead; authors attribute 60.73 pts to a Python for-loop RDD construction — removable).
- Read full tensor: 379.51s → 474.51s (+25.02%, from Spark scheduling).
- Read slice: 494.33s → 49.24s (−90.04%) — the payoff case: slice reads fetch only relevant chunks.
Sparse Uber:
- Storage: all methods < 13.23% of PT size; BSGS best C_r = 4.83%.
- Write: CSF most efficient, 26.68% less time than PT; CSF ≈ BSGS.
- Read full: BSGS most efficient, 29.59% less time than PT.
- Read slice: BSGS most efficient, 55.34% less time than PT.
- Authors' recommendation: CSF for write-heavy, BSGS for read/slice-heavy sparse workloads; FTSF for dense.
- Limitations flagged: no statistical tests — 100 repetitions reported as averages only, no variance/confidence; Spark scheduling dominates overheads (gains partially an artifact of the baseline being unoptimized Python/PT rather than a tuned system); the 10% sparsity threshold is admitted to be a rule of thumb and the sparse-vs-dense cost/benefit crossover is not quantified; no integration with actual training loops (no end-to-end model-training time comparison); no ANN/vector-index integration (acknowledged future work); block-size selection in BSGS is called "crucial" but only qualitatively discussed.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER — self-learning engine data infra] This is the storage layer for the mandated self-learning/self-growing engine (the 1,250-paper wave: "more signals... statistical engineering to invent stats humans never thought of"): store discovered dense matchup embeddings or player-skill matrices in Delta with FTSF-style chunking (id, chunk, dims metadata) rather than numpy/PyTorch blobs — the ~90% slice-read win maps to the "fetch only this game's embeddings" batch-time feature-extraction pattern exactly as the paper's SGD-batch argument. Serves the engine-data-infrastructure program.
- [OTHER — sparse sports-event tensors] Sparse interaction features (rare event tensors — trick plays, injuries per matchup): COO or CSF layout when nonzeros < 10%; the paper's Uber tensor at 0.038% nonzero is more extreme than anything GSE will store, so expected compression will be even better (INFERENCE: bounded by the reported 13.23%-of-PT ceiling / 4.83% best case). Serves the trust-signal intake lane for rare-event features.
- [OTHER — model checkpoint registry] Store model weights as versioned Delta tables — time travel then gives parameter history for free (pairs with 2026's rollback story). Serves the engine-versioning/calibration-audit lane: every calibration change traceable.
- [OTHER — learned chunking] The improvement experiment — access-log-driven auto-chunker: log which (week, team) slices the feature pipeline fetches over one season, then optimize chunk shape to minimize expected bytes-fetched (bytes fetched as a function of chunk dims, greedy search), turning FTSF from a fixed layout into a learned layout — addresses the paper's open wound (block/chunk-size selection is heuristic) and pairs with AutoComp (2031 planned) on the maintenance side. Serves the infra-optimization lane.

## Engine-actionable? (yes/no + one-line what)
Yes — reproduce the dense-slice experiment on GSE data (build a ~90 × 32 × 50 weeks × teams × features season tensor; FTSF-style Delta table vs numpy blob) and ADOPT the layout iff slice-read latency ≤ 25% of blob read-slice latency (paper showed 10%), write overhead ≤ 2× blob write, and exact numeric round-trip parity (decode == original to float32); REJECT if slice reads don't beat blobs on GSE's smaller tensors, since the paper's advantage scales with tensor size (medium effort — one storage-layout utility + benchmarks; no dependency on the paper's unreleased code).
