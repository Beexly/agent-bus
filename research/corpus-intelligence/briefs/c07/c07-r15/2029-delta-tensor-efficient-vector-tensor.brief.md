# arxiv-program/research/2026-09-21/arxiv-deep/2029-delta-tensor-efficient-vector-tensor.md
## What it is (1-2 sentences)
Delta Tensor (arXiv:2405.03708v3, Northeastern/Oracle Labs): five Delta Lake table layouts for storing dense and sparse tensors efficiently — FTSF (chunked dense format), COO, CSR/CSC, CSF (compressed sparse fiber), and BSGS (block sparse generic storage, Mode-Generic, enables slice-before-decode). A systems paper: the only lane paper on storing sparse, high-dimensional signal arrays in the lakehouse instead of blobs.

## Key metrics/methods (formulas where given, else "not specified")
- FTSF (dense): chunk tensor along last D_c dimensions; one row per chunk with (id, chunk BINARY, dim_count, dimensions, chunk_dim_count); dictionary encoding on repeated metadata; schema evolution adds custom metadata
- COO: (id, layout, dense_shape, indices, value) per nonzero
- CSR/CSC: flatten tensor to 2D, three arrays (values, col/row indices, row/col pointers); record dense_shape + flattened_shape for reconstruction
- CSF: tree-structured compression of duplicate indices per dimension; first two dimensions' fiber pointers/indices unchunked per tensor, remaining dimensions chunked
- BSGS: partition into dense blocks of any order, store non-null blocks + block indices; enables slicing without reading the whole tensor
- Design split: encoding-before-partitioning (CSR, CSF) vs partitioning-before-encoding (BSGS); BSGS allows slice-before-decode
- Compression ratio: C_r = S_encode / S_binary; t_write = t_ser + t_en(X); t_read_tensor = t_des + t_de(X_encode); t_read_slice = t_des + t_de(XS_encode)
- Assumptions: access patterns are chunk-local (SGD batch reads); 10% nonzero sparsity rule of thumb (admitted to be a rule of thumb; crossover not quantified); binary/PyTorch-PT serialization is the fair baseline
- 100 repetitions averaged per timing; no statistical tests reported

## Data sources named
Dense case: FFHQ subset — 5,000 images of 1024×1024 RGB as tensor (5000, 3, 1024, 1024), 14.6 GB serialized. Sparse case: NYC Uber Pickups Apr–Aug 2014 as tensor (183, 24, 1140, 1717) = 8,596,812,960 elements with 3,309,490 nonzeros → 0.038% nonzero (below the 10% sparsity rule). Environment: Spark cluster, 2× Intel Xeon Gold 5215, 128 GB RAM, 1 Gbps network. No code published; datasets public.

## Findings (numbers and facts, not vibes)
- Dense FFHQ (exact quotes): size 14.6 GB → 13.3 GB (−8.90%) despite no compression, via chunking + metadata dict encoding; write 135.69s → 251.77s (+85.52% overhead — authors attribute 60.73 pts to a Python for-loop RDD construction, removable); read full tensor 379.51s → 474.51s (+25.02%, from Spark scheduling); read slice (X[1:100]:::, 100-image fiber) 494.33s → 49.24s (−90.04%) — the payoff case: slice reads fetch only relevant chunks
- Sparse Uber: all methods < 13.23% of PT size; BSGS best C_r = 4.83%; write: CSF most efficient, 26.68% less time than PT; CSF ≈ BSGS; read full: BSGS most efficient, 29.59% less than PT; read slice: BSGS most efficient, 55.34% less than PT
- Authors' recommendation: CSF for write-heavy, BSGS for read/slice-heavy sparse workloads; FTSF for dense
- Block-size selection in BSGS is called "crucial" but only qualitatively discussed; no integration with actual training loops; no ANN/vector-index integration (acknowledged future work)

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: storage infrastructure for the self-learning engine mandate — discovered-signal storage: store dense matchup embeddings or player-skill matrices in Delta with FTSF-style chunking (id, chunk, dims metadata) rather than numpy/PyTorch blobs — buys the ~90% slice-read win for batch-time feature extraction ("fetch only this game's embeddings" matches the paper's SGD-batch argument exactly); sparse interaction features (trick plays, injuries per matchup) in COO/CSF when nonzeros < 10%; model checkpoint registry as versioned Delta tables — time travel gives parameter history for free (pairs with ledger 2026's rollback story). Improvement experiment: access-log-driven auto-chunker that learns chunk shape from actual (week, team) fetch patterns.

## Engine-actionable? (yes/no + one-line what)
yes — reproduce the dense-slice experiment on a (weeks × teams × features) season tensor (~90 × 32 × 50) as numpy blob vs FTSF-style Delta table; ADOPT iff (a) slice-read latency ≤ 25% of blob slice read, (b) write overhead ≤ 2× blob write, (c) exact float32 round-trip parity — and use COO for the sparse injury/outcome indicator tensor.
