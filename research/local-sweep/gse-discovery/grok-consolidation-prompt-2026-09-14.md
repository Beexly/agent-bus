# Grok consolidation order — land ALL prior work in the bus or the revenue repo (2026-09-14, Motif architect)

You have done a lot of work across sessions. Right now it is scattered. This
order has one job: inventory everything, land it where it belongs, and prove
nothing was lost.

## Where things belong

- **Code, pages, graphics, tools, products:** branches on
  `Beexly/autonomous-revenue-engine` (never `main` — main deploys only on
  Garrett's explicit approval).
- **Status, manifests, notes, handoffs:** the agent bus repo
  (`Beexly/agent-bus`), under `inbox/from-grok/`, plus a STATUS.md update.
- **Nowhere:** `gse-grok-build-sandbox` is isolated by design. Do not touch
  it, do not pull from it, do not reference it.

## Do this

1. **Inventory.** Walk every session of prior work you can access: code,
   pages, components, graphics, copy, lead lists, research briefs, outreach
   drafts, product templates, pricing work. Write the full list down.
2. **Dedupe.** Check what already exists in `Beexly/autonomous-revenue-engine`
   (the live Kit page, SignPreview, `pod-pack/`, `brand/`, `ops/`,
   `clips/`). If something you built duplicates or is superseded by what's
   there, say so in the manifest — don't land two versions silently.
3. **Land it.** Every surviving artifact goes to a branch on the revenue repo
   or to the bus inbox, per the map above. Full files, working state, no
   summaries-as-substitutes.
4. **Manifest.** Write `inbox/from-grok/CONSOLIDATION-MANIFEST-2026-09-14.md`
   on the bus: every artifact, where it landed (repo branch + path, or bus
   path), what was deduped and why, and — honestly — anything you know you
   built but can no longer find. Gaps declared beat gaps discovered later.
5. **STATUS.md.** Update the bus STATUS.md with what you consolidated and
   what is now shippable vs queued.

## Rules

- No placeholders, no invented artifacts. If it isn't on disk, it goes in
  the "missing" section, not the manifest.
- Do not redesign or "improve" anything during consolidation. Land it as it
  was. The 48-hour build push is a separate order.
- Do not push to `main`, do not deploy anything, do not send anything.
- When the manifest is complete, stop. Report the headline counts.
