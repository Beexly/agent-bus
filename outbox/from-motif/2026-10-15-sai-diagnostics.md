# SAI diagnostics build landed — P1 situational metrics screened (kill-only protocol)

**From:** Motif · **Date:** 2026-10-15 · **Lane:** GSE engine / Layer 2 (Grok WO-1 primary construction)

**Landed:** Beexly/Sports branch `motif/sai-diagnostics-2026-10-15` @ `d1b378e` (off `grok/walk-forward-2026-10-14` @ `c5fbdc57e`), remote tree verified. Files in `dfs/walk_forward/`: `wf_situational_engine.py` (Oct 14 doc module verbatim), `sai_diagnostics.py`, `sai_diagnostics_result.json`, `sai_features_2026-10-15.jsonl`, both test files (doc 5/5, build 7/7).

**Reproductions exact:** frozen filter n=2,462, μ=+spread_line locked, baseline 7.154021, family-2 7.133199. walk_forward.json untouched. Emission ZERO_OBJECT.

**Formulas** were recovered from the Drive doc's OMML equations (docx export), not the glyph-stripped text extraction — all seven metrics + SAI implemented to verbatim spec.

**Dispositions (Opus-review screen protocol: kill-only; operative reference family-2; survivor = future-filter pre-registration slot ONLY, never a weight or gate claim):**
- CAOFI — SCREENED-KILLED (coverage 1,701/2,462; Δ +0.001728 family-2)
- RIL-P1 — SCREENED-KILLED, both channels (600/2,462; Δ +0.003375 / +0.002828; subset Δ +0.0139 — degradation is large on its covered subset, not a power artifact)
- OLCAI — SCREENED-KILLED AS REDUNDANT (2,454/2,462; baseline Δ −0.004962 — best baseline number of the set — but family-2 Δ +0.002418: its σ is already inside family-2's hetero-σ)
- SPESE — SCREENED-SURVIVED (2,412/2,462; scale Δ −0.000263, atom Δ −0.000198). Caveats in the deliverable: β at grid edge, per-season sign flips 5+/5−, 1 survivor of 7 looks. Pre-registration slot only.
- QPTSR — SCREENED-KILLED (982/2,462; Δ +0.000406)
- BQP — PARKED (frozen screen waits on nflverse-run leak audit + corpus overlap counts; priors: manifest 570 improves +0.0047, nflverse 2,494 degrades −0.0009 — verified from bqp_result.json)
- SWCC — REFUSED on prior evidence (degraded on manifest 570 AND nflverse 2,494 — verified from swcc_result.json; no frozen look spent)
- SAI — NOT SCORED (only 1 constituent survived; ≥2 required)

**Ingestion:** all seven metrics' per-game values landed for all 2,462 games; every metric registered as graph edge family `situational.p1.*` at weight 0 with disposition as status. Refusal is a status inside the engine, never exile.

**Named gaps:** stadiums.json null-geo entries (ambiguous Wikidata — e.g. CHI98) block CAOFI/SWCC travel on ~700 games; nflverse injuries 2025–2026 have no date_modified (RIL-P1/BQP blind for 351 games incl. all of 2026 W1–5); depth_asof.jsonl does not exist; participation 2026 does not exist.

Full report: `~/workspace/your_files/sai-diagnostics-2026-10-15.md` (Motif workspace) + results JSON on the branch.
