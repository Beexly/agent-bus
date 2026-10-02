# ops/archive/dated/ZK_PROOF_EVOLUTION_ROADMAP.md
## What it is (1-2 sentences)
The design-locked, phased roadmap for cryptographic proof layers on the pick record — Merkle (live) → Pedersen (dark) → Halo2 (roadmap) → STARK (roadmap, optional) — with a CI overclaim fence that blocks "zero-knowledge"/"post-quantum" public language until each system is live and externally audited.

## Key metrics/methods (formulas where given, else "not specified")
- Merkle: SHA-256 receipts minted per pick pre-kickoff, publicly verifiable at `/verify` (re-hash + recompute-it-yourself); root of trust, never removed.
- Pedersen: secp256k1 @noble, constant-time, additively homomorphic, perfectly hiding, computationally binding (~128-bit DLOG); aggregate over frozen slate's published edge scores minted in the SAME atomic transaction as the Merkle root; opener (`pedersenAggregateValue`, `pedersenBlindingSum`) stays server-side, fenced in CI by `pedersen-opener-boundary.mjs`.
- Commitment envelope (no public API break at any phase): `{ merkleProof, pedersenAggregate?, zkProof?: {type:"halo2"|"stark", data:Uint8Array}, publicInputs:{ aggregateClv, N, merkleRoot } }`; verifier order: Merkle first → Pedersen if present → zkProof if present.
- Halo2: constant proof size ~3-5 KB, verification <60 ms mobile, no trusted setup; fixed-point arithmetic scale 1e6 for the 52.4% boundary; pushes excluded exactly as `settlement.ts` grades them.
- STARK: hash-based (FRI), transparent, post-quantum under standard hash assumptions; larger proofs (tens of KB), slower provers.
- Phases: Phase 0 done; 0.5 Pedersen shipped dark @ commit `6669359` (commit side only, public hex via `/api/verify/slate`); 0.5b opening MERGED (#235), dark behind `SLATE_OPENING_REVEAL_ENABLED` (unset in git, founder flips); Phase 1 = 4–6 wks eng, `packages/zk` Rust crate; Phase 2 = 8–12 wks, optional STARK sibling.
- Explicit correction: Halo2/IPA recursion is discrete-log-based and must NEVER be labeled post-quantum; PQ comes only from the STARK phase.

## Data sources named
None (crypto/trust infrastructure, not data feeds).

## Findings (numbers and facts, not vibes)
- Merkle receipts: LIVE, minted per pick pre-kickoff by `process-sport.ts`, public verifier shows payload + hash for offline recompute.
- Pedersen: LIVE but SEALED-SIDE ONLY; `freeze-slate-commitments.ts` mints the aggregate inside the same atomic transaction as the Merkle root; fails open (unencodable slate mints nothing rather than blocking Merkle); public copy says "commitment" only.
- Opening (0.5b): planner `planSlateOpening` refuses unless ALL hold — slate fully settled, opener exists, opener verifiably reproduces the published hex; settlement checked BEFORE the opener is parsed; a mostly-settled slate is not partly openable; a mismatched opener is withheld because it would read like a forged commitment. Merkle root stays authoritative in every refusal.
- An opening proves the aggregate was fixed before kickoff and unedited since — a binding check on the record, NOT a claim the picks were good or profitable.
- Overclaim fence `scripts/guardrails/no-zk-overclaim.mjs` is CI-blocking; "zero-knowledge" enters ALLOWED_PHRASES only after the Phase-1 audit, citing it.
- Why ordering serves revenue: Phase 0.5 strengthens the anti-cherry-picking story in days; Phase 1 makes GSE the only prediction service whose aggregate claims are provable without trust; both compound the pricing ladder's moat (verifiable honesty).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Pre-kickoff commitment + post-settlement opening as the anti-cherry-picking mechanism (commit to the record before the games start) — [TRUST-SIGNAL]
- CI-blocking overclaim fence: public copy never claims what the customer cannot verify TODAY — [TRUST-SIGNAL]
- 52.4% aggregate-CLV boundary as the fixed-point proof target (breakeven benchmark) — [TRUST-SIGNAL]
- Verifier-order / root-of-trust discipline (Merkle never weakened by newer layers) — [OTHER]

## Engine-actionable? (yes/no + one-line what)
yes — The frozen-slate commitment pattern (fix the aggregate before kickoff, open after settlement, withhold on mismatch) is the engine's verifiable-honesty template; and the 52.4% boundary is the CLV-prove target for the pricing ladder.
