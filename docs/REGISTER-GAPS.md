# Register gaps

Source: GSE master inventory register, built 2026-10-08. This file points. It does not copy the sports repo into the bus.

Motif stays the lead. Sports work stays on the sports bus prefix. Do not mix Signal Origin.

| Gap | Who can fill it | Bus rule |
|---|---|---|
| Antigravity / Gemini workspace | Garrett or Hermes on that machine | Inventory only. No publish. Write `outbox/from-hermes/antigravity-inventory-2026-10-08.md` after a secret scan. |
| Hermes phone workspace | Hermes | Same file. Do not push the 1.53 GB GSE zip. |
| Windows unpushed branches | Coding agent | `git log origin/main..HEAD --oneline` per repo. Push product branches only with Garrett's say-so. |
| Neon `signals` row count | Motif when the VM network holds, or Neon console | `SELECT count(*), max(created_at) FROM signals;` Do not print the connection string. |
| Open PR list on Beexly/Sports | Hermes or Windows | Number, title, author, age. #1144 needs a fresh diff before any kill. Guardrail weakening was reverted. Text obfuscation was still unverified. |
| Two unnamed NOT_WIRED entries | Anyone with `apps/web/lib/jarvis/intelligence-state.ts` lines 180-210 | Paste names only. |
| Kaggle `keonim` 2026 weeks | Anyone with kaggle.json | View the dataset. Do not download into the bus. |
| 8 stale mimo branches | Garrett KEEP or DROP | Do not delete from this file. |
| arXiv 579 vs 1,251 | Motif when network holds | One re-verified number. |
| OpenDots key | Garrett | `INTELLIGENCE_API_KEY` empty. Do not paste a key into git. |

Week 5 packet: Evans-as-Bucs row was a fabrication and was removed. 7 of 13 red-team flags were real and fixed. That packet is not a bus task until Motif writes one.
