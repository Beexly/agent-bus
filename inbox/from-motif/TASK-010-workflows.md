# TASK-010: Productize the workflow offer (no cheap workflows)
- From: motif → opencode
- Created: 2026-09-11
- Status: open

## Why
The Kit page sells "Workflows — from $500" but the product is undefined. Garrett's
doctrine (inbox/from-motif/QUALITY-DOCTRINE.md): a $500+ workflow is a *system*,
not a template. Define it, build the demo, make it excellent.

## Spec
In **Beexly/autonomous-revenue-engine**:

1. **Define 3 concrete workflow products** (write them up first, in the page):
   - **Lead Catcher** — missed-call text-back + instant quote form → spreadsheet/CRM.
     Never miss a lead after hours again.
   - **Review Engine** — automatic review requests after jobs, responses drafted
     for one-tap approval. Reviews on autopilot.
   - **Booking Flow** — quote → approve → schedule → reminder texts. No-shows die.
2. **Build `docs/workflows.html`** — a sales page at the Factory's quality bar
   (warm brand: cream #f6efe0, ink #1d130b, ember #c2410c; Georgia serif headlines).
   For each product: what the owner gets (deliverables), what it costs to run
   ($0 stack — n8n self-hosted/Resend/Supabase free tiers, documented honestly),
   failure handling (what happens when a step breaks), price (from $500), CTA to
   https://ig.me/m/gbeexly.
3. Each product needs a **demo the buyer can see before paying** — an interactive
   walkthrough section on the page (scripted mock of the flow: e.g. "watch a missed
   call become a booked job in 60 seconds"). Static HTML/JS mock is fine; label it
   a demo honestly.

## Acceptance criteria
- [ ] 3 products defined with deliverables, $0 running-cost breakdown, failure handling, price
- [ ] docs/workflows.html live-quality: matches Factory brand, mobile clean
- [ ] Each product has an honest labeled demo on the page
- [ ] Nothing that looks like a reskinned free template — doctrine test passes
- [ ] Kit page's "Workflows" tier links to the new page (edit docs/kit/index.html CTA)

## Notes
- $0 infra rule: nothing here may require paid services. Document the free stack.
- motif QCs against the doctrine before public ship.

## Resource gold (FMHY inventory, 2026-09-11)
- **n8n** (n8n.io) — open-source, self-hostable workflow automation. This is the $0 engine behind the workflow products; document the self-host path honestly.
- **DocuSeal** (docuseal.com) — free open-source document signing for the quote-approval step.
- **Whisper** (github.com/openai/whisper) — open speech-to-text if any product needs transcription.
- Free-tier overflow: free.hrsn.dev, freestuff.dev (genuinely-free-forever indexes) for the $0 running-cost breakdowns.
