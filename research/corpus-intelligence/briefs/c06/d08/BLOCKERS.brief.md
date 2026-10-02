# fable/evidence/BLOCKERS.md

## What it is (1-2 sentences)
A numbered registry of **10 top blockers** constraining the fable evidence/build program — spanning toolchain, automation, infrastructure access, legal posture, and performance-proof requirements.

## Key metrics/methods (formulas where given, else "not specified")
not specified — no formulas; the blockers are qualitative gates. Item 5 ("No repo-data replay proves any model-performance gain") implies a required method — repo-data replay demonstrating measured improvement — but defines no metric, threshold, or sample size.

## Data sources named
None named. References: OneNote (claim extraction), AWS (account/access/credentials), BigInt-literal prediction-engine files, Clean Rooms partners (synthetic partner schemas only), Ground Truth / paid labeling providers.

## Findings (numbers and facts, not vibes)
All 10 blockers, verbatim categories:
1. **Typecheck**: Broad workspace typecheck fails — `apps/web` targets below ES2020 while importing BigInt-literal prediction-engine files. (INFERENCE: TS target vs. BigInt literal syntax conflict — `apps/web` must be raised to ES2020+ or the engine files transpiled.)
2. **OneNote extraction**: Full OneNote claim extraction is not automated; high-risk claim examples from the addendum are downgraded here.
3. **AWS**: No AWS account access, no budget approval, no deploy approval, no live credentials — four distinct absences.
4. **Legal**: No legal review marker exists beyond source-specific registry evidence.
5. **Performance proof**: No repo-data replay proves any model-performance gain — no measured improvement exists on record.
6. **ML runtime**: No MC Dropout implementation allowed until the owner approves an ML runtime — MC Dropout is explicitly gated.
7. **Clean Rooms**: No Clean Rooms partner exists; only synthetic partner schemas allowed.
8. **Labeling**: No Ground Truth job or paid labeling provider exists.
9. **Competitive claims**: Competitive notice claims require measured improvement + demo surfaces + lawful source posture (three-part requirement).
10. **Demo posture**: Any public demo must remain fixture-only until approved data and source freshness are proven — corroborates DEMO_DATA_DICTIONARY.md's synthetic-only stance.
- INFERENCE: The blockers form a dependency chain — items 3 (AWS), 6 (ML runtime approval), 8 (labeling), and 5 (replay proof) must clear before any model-performance claim in item 9 can be made. The program is currently in a pre-execution posture: no live infra, no live data, no automated claim extraction, no performance proof.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: Item 2 — high-risk claims from the OneNote addendum are "downgraded here" because extraction isn't automated; treat any fable claim lacking an extraction trail as unverified.
- TRUST-SIGNAL: Item 5 — no measured model-performance gain exists on record; any fable performance claim is currently unproven by the program's own bar.
- TRUST-SIGNAL: Item 9 — competitive notice claims have an explicit three-part evidentiary bar (measured improvement, demo surfaces, lawful source posture) that is not yet met.
- OTHER: Toolchain blocker (item 1) is a concrete, fixable ES2020/TS-target issue; MC Dropout gating (item 6) means uncertainty-quantification methods are unavailable until owner approves an ML runtime.

## Engine-actionable? (yes/no + one-line what)
yes — Do not cite fable model-performance or competitive claims in any engine output until blocker #5 (repo-data replay proof) clears; fix the ES2020 typecheck gap (blocker #1) as the cheapest unblock.
