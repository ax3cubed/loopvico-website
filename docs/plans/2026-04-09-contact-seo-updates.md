# Loopvico Contact And SEO Refresh Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace placeholder contact data, add scan-to-chat support, publish `llms.txt`, and add visible SEO-oriented homepage copy.

**Architecture:** Centralize public business/contact metadata in a shared config module so the UI and structured data stay aligned. Add the QR asset to the contact experience and introduce one homepage content section that expands useful service-area copy without degrading the current landing-page flow.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS

---

### Task 1: Centralize contact data

**Files:**
- Create: `lib/site.ts`
- Modify: `components/header.tsx`
- Modify: `components/hero.tsx`
- Modify: `components/subscriptions.tsx`
- Modify: `components/contact.tsx`
- Modify: `components/footer.tsx`
- Modify: `app/layout.tsx`

**Step 1: Add shared site constants**

Create a module exporting the canonical phone number, phone display format, `tel:` value, WhatsApp URL, email, service areas, and QR image path.

**Step 2: Replace local placeholders**

Update all WhatsApp and call CTAs to import the shared config instead of hard-coded numbers.

**Step 3: Align metadata and schema**

Replace the placeholder phone and WhatsApp data in `app/layout.tsx` so metadata and structured data match the visible site.

### Task 2: Add scan-to-chat and optimization copy

**Files:**
- Create: `components/seo-content.tsx`
- Modify: `components/contact.tsx`
- Modify: `app/page.tsx`

**Step 1: Add a QR scan card**

Show the existing `public/wa.link_8ezlu9.png` asset in the contact section with copy that explains users can scan to open WhatsApp chat.

**Step 2: Add visible SEO-friendly copy**

Create a homepage section with useful language about laundry pickup and delivery in DFW, covered service areas, booking flow, and supported customer types.

**Step 3: Insert the new section into the homepage**

Place the new content near the lower half of the landing page so it supports organic search without disrupting the primary conversion flow.

### Task 3: Publish crawler-facing text and verify

**Files:**
- Create: `public/llms.txt`

**Step 1: Add `llms.txt`**

Publish a concise plain-text/Markdown hybrid file describing the business, service areas, contact methods, and important pages.

**Step 2: Run verification**

Run: `npm run lint`

Expected: lint passes with no new errors from the contact/SEO changes.
