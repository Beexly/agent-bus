# Reasoning dossier pipeline LANDED — the Layer-2 "brain" surface

**From:** Motif · **Date:** 2026-10-15 · **Lane:** GSE engine / reasoning layer

Garrett's Oct 13 held build, released by his Oct 15 directive ("deep reasoning
and intelligence layers — not just math"), is built, tested, and landed.

## Where

- **Beexly/Sports**, branch `motif/reasoning-dossier-2026-10-15`, head
  `74f30edd` (off main `9a989b3`). Path: `intelligence/reasoning-dossier/`
  (15 files; every remote blob SHA verified against local `git hash-object`
  by direct foreground reads — see the correction note at the end).
- Deliverable for Garrett: `~/workspace/your_files/reasoning-dossier-2026-10-15.md`.

## What it is

Per-game reasoning dossiers: stamped inputs in, a fenced reasoning artifact
out (markdown + JSON twin; markdown rendered from the twin so they can't
drift). Inputs: situational graph instance (PIT-stamped edges), archived
line (Layer 1, cited as the starting point, never adjusted), stamped facts,
authored reads, qualitative-only shadow reads, and the nine stamped reasoning
templates from the ingestion ledger, each with an input contract — unmet
contracts are honest empties with the gap named.

The fence is a validator, not a convention: banned pick/probability/odds keys
anywhere in the twin (checked in the raw analyst output too), banned
pick-language phrases in prose, citation completeness in both directions,
standing non-claims appended verbatim by the pipeline, full provenance
(model id, prompt + manifest sha256, timestamps). **No pick, no probability,
no price. Emission ZERO_OBJECT; RVC NOT_CLEARED.** Shadow data is never named
by source — "tracking shadow data" only.

Analyst call: hosted model via the Nous Portal lane, behind a mockable
client interface. Tests: **19/19 pass**, hermetic (stamp enforcement,
citation completeness, fence rejection of planted pick/probability/source-
naming content, provenance tampering).

## First output

`dossiers/2026_06_SEA_DEN.md` (+ `.json`) — tonight's SEA@DEN dossier from a
**live** analyst call: model `anthropic/claude-opus-5.5` via Nous Portal,
16,937 tokens, **$0.14349 per dossier**, fence passed on the first attempt,
28 claims, every factual input cited. Quality at the WO-0 bar: injury
asymmetry centered (Surtain II + Hufanga out, Moss the open swing item),
altitude+short-week composite stated at true size, market tensions framed as
questions, gaps named.

Named gaps for tonight (honest empties in the dossier): atmosphere,
layered-revenge, logistical-disruption, coaching-honesty templates had no
stamped inputs; injury-context APPLIED_PARTIAL (no prior-usage/snap map);
weather-scale qualitative only (feature-store scale not computed); both
shadow lanes returned NO_DATA_FOR_GAME.

Process note: mid-build, a /tmp wipe destroyed the first build tree (batch 1
had landed; the rest was rebuilt byte-carefully under ~/workspace — two fence
refinements came out of the rebuild: standalone-token source-naming check so
"DraftKings" can't false-positive, and banned-key scanning of the raw
analyst output, not just the twin). GitHub egress was in a
RemoteDisconnected storm for ~1 hour, and several background push results
were misreported as successes during it: batches 2–4 were initially NOT on
the branch despite success reports. Caught when a session log contradicted a
success report; the 7 missing files (fence/prompt/analyst, dossier/run/
package.json, tests/README) were re-pushed in the foreground (commits
`283aecb`, `042d77b`, `74f30ed`) and the full 15-file inventory re-verified
by direct API reads, blob SHAs matching local files 15/15. An earlier
version of this note carried a wrong head SHA from the misreported results;
this version corrects it. Trust remote bytes, never push output.
