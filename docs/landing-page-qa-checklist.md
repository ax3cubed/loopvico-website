# Landing Page QA Checklist

## Content Structure
- [ ] H1 is unique and intent-specific for each page.
- [ ] Intro copy maps to the page intent (location, service, or use-case).
- [ ] Trust points are specific and non-duplicative.
- [ ] Pricing snapshot is present and accurate.
- [ ] FAQ answers are clear and useful.

## SEO Validation
- [ ] Title and description are unique per page.
- [ ] Canonical URL points to the page itself.
- [ ] Open Graph and Twitter metadata render expected values.
- [ ] Page includes valid JSON-LD (Service + Breadcrumb + FAQ, plus Offer where relevant).
- [ ] Sitemap includes the page URL.

## Conversion UX
- [ ] Primary CTA points to WhatsApp booking.
- [ ] Secondary CTA points to phone contact.
- [ ] CTA appears in hero and is visible on first load.
- [ ] Internal links connect to related hubs or detail pages.

## Technical Checks
- [ ] Route builds statically without runtime errors.
- [ ] Page passes lint and type checks.
- [ ] Mobile layout remains readable and tappable.
- [ ] No broken links in hub pages.

## Suggested Rollout
- Batch A: publish `/locations/*` and top 2 service pages.
- Batch B: publish remaining service and solution pages.
- Measure impressions/clicks and contact conversions by page type after each batch.
