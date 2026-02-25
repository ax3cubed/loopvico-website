# SEO Implementation Guide

This document outlines the comprehensive SEO implementation for Loopvico Laundry & Linen.

## Table of Contents
- [Overview](#overview)
- [Metadata & Meta Tags](#metadata--meta-tags)
- [Structured Data (Schema.org)](#structured-data-schemaorg)
- [Sitemap](#sitemap)
- [Robots.txt](#robotstxt)
- [Open Graph & Social Media](#open-graph--social-media)
- [PWA Support](#pwa-support)
- [Security Headers](#security-headers)
- [Best Practices](#best-practices)

## Overview

The website implements advanced SEO techniques for maximum visibility in search engines:

- **20+ targeted keywords** for DFW laundry services
- **Schema.org structured data** for rich snippets
- **Dynamic sitemap** with all service areas
- **Social media optimization** with Open Graph and Twitter Cards
- **PWA support** for mobile engagement
- **Security best practices** for trust signals

## Metadata & Meta Tags

Located in: `app/layout.tsx`

### Key Features:
- Dynamic title templates
- Comprehensive meta descriptions
- Keyword optimization for local SEO
- Canonical URLs
- Language and locale settings
- Author and publisher attribution
- Robots directives for indexing

### Title Template:
```
Default: "Loopvico | Premium Laundry Pickup & Delivery Service"
Template: "%s | Loopvico Laundry"
```

### Important Meta Tags:
- `viewport`: Responsive design configuration
- `theme-color`: Brand colors for browsers
- `referrer`: Privacy-focused referrer policy
- `format-detection`: Prevents automatic phone number detection

## Structured Data (Schema.org)

Four schema types implemented:

### 1. LocalBusiness Schema
```json
{
  "@type": "LocalBusiness",
  "name": "Loopvico Laundry & Linen",
  "areaServed": "DFW Metroplex",
  "priceRange": "$",
  "openingHours": "Mon-Thu 8AM-6PM, Fri 8AM-12PM"
}
```

**Properties:**
- Business name, description, and contact info
- Service area (GeoCircle around DFW)
- Operating hours
- Payment methods accepted
- Social media profiles
- Offer catalog with pricing

### 2. Service Schema
- Service type: "Laundry Delivery Service"
- Service areas: Mansfield, Arlington, Irving, Las Colinas, Grand Prairie
- Subscription offers (Weekly Loop, Family Loop)

### 3. FAQPage Schema
5 common questions with answers:
- Service areas
- Pricing
- Turnaround time
- Subscriptions
- How to schedule

### 4. BreadcrumbList Schema
- Home page navigation structure

## Sitemap

**Location:** `app/sitemap.ts`

Automatically generates `sitemap.xml` with:
- Homepage (priority: 1.0)
- Services page (priority: 0.9)
- Pricing page (priority: 0.9)
- Contact page (priority: 0.8)
- 5 service area pages (priority: 0.6 each)

**Update Frequency:**
- Homepage: Weekly
- Other pages: Monthly

## Robots.txt

**Location:** `app/robots.ts`

Configuration:
- Allows all user agents
- Blocks: `/api/`, `/_next/`, admin paths
- Googlebot: Full access except API
- Bingbot: Crawl delay of 1 second
- Sitemap location specified
- Host canonical URL set

## Open Graph & Social Media

### Open Graph (Facebook, LinkedIn):
```
type: website
locale: en_US
images: 1200x630 and 1200x1200 variants
```

### Twitter Cards:
```
card: summary_large_image
title: Loopvico | Premium Laundry Pickup & Delivery Service
description: Professional laundry pickup & delivery in DFW
images: /twitter-image.jpg
```

### Image Requirements:
Replace these SVG placeholders with actual images:
- `/public/og-image.svg` → `og-image.jpg` (1200x630)
- `/public/twitter-image.svg` → `twitter-image.jpg` (1200x600)
- `/public/og-image-square.svg` → `og-image-square.jpg` (1200x1200)

## PWA Support

### Web App Manifest:
**Location:** `public/site.webmanifest`

Features:
- App name and short name
- Description and categories
- Theme and background colors
- Icon set (72x72 to 512x512)
- Screenshots for install prompts
- Shortcuts for quick actions

### Icons Needed:
Create these PNG files from the SVG template:
- icon-72x72.png
- icon-96x96.png
- icon-128x128.png
- icon-144x144.png
- icon-152x152.png
- icon-192x192.png
- icon-384x384.png
- icon-512x512.png

### Microsoft Tile Support:
**Location:** `public/browserconfig.xml`

- Tile images for Windows
- Notification polling
- Theme color: #1a365d

## Security Headers

Implemented via meta tags in `app/layout.tsx`:

### Security Headers:
- `X-Frame-Options: DENY` - Prevents clickjacking
- `X-Content-Type-Options: nosniff` - Prevents MIME sniffing
- `X-XSS-Protection: 1; mode=block` - XSS protection
- `Referrer-Policy: strict-origin-when-cross-origin` - Privacy protection
- `Permissions-Policy` - Restricts browser features
- `Content-Security-Policy` - Controls resource loading

### Additional Security Files:
- `public/.well-known/security.txt` - Security contact info
- `public/humans.txt` - Team credits

## Best Practices

### For Production Deployment:

1. **Replace Placeholder Images:**
   - Create branded OG images (1200x630)
   - Create favicon set in all sizes
   - Create Apple touch icon

2. **Update Contact Information:**
   - Replace phone number placeholder in `layout.tsx`
   - Update email addresses
   - Add actual social media URLs

3. **Google Search Console:**
   - Add verification code to `metadata.verification.google`
   - Submit sitemap.xml
   - Monitor indexing status

4. **Bing Webmaster Tools:**
   - Add verification code to `metadata.verification.other`

5. **Facebook Business:**
   - Add Facebook domain verification code
   - Create business page and link

### Content Optimization:

1. **Keywords Used:**
   - Primary: laundry service, pickup delivery laundry
   - Location: Mansfield laundry, Arlington laundry service, etc.
   - Service types: wash and fold, laundry subscription

2. **Local SEO:**
   - Schema markup for each service area
   - Geo-coordinates for DFW area
   - Local business structured data

3. **Rich Snippets Potential:**
   - FAQ rich results
   - Local business pack
   - Service listings
   - Price ranges in search results

### Maintenance:

1. **Update LastModified:**
   - Update sitemap dates when content changes
   - Keep structured data current

2. **Monitor Performance:**
   - Check Core Web Vitals
   - Monitor search rankings
   - Update keywords based on trends

3. **Content Freshness:**
   - Update FAQ with new questions
   - Add new service areas as expanded
   - Refresh OG images seasonally

## Testing

### Validate Implementation:

1. **Google Rich Results Test:**
   https://search.google.com/test/rich-results

2. **Schema.org Validator:**
   https://validator.schema.org/

3. **Facebook Sharing Debugger:**
   https://developers.facebook.com/tools/debug/

4. **Twitter Card Validator:**
   https://cards-dev.twitter.com/validator

5. **Sitemap Validator:**
   https://www.xml-sitemaps.com/validate-xml-sitemap.html

### Checklist:
- [ ] All images replaced with branded versions
- [ ] Phone number updated
- [ ] Google verification code added
- [ ] Sitemap submitted to Google Search Console
- [ ] Robots.txt validated
- [ ] Structured data tested
- [ ] OG images displaying correctly
- [ ] Twitter cards working
- [ ] PWA icons created
- [ ] Favicon working across browsers

## Performance Impact

The SEO implementation adds minimal overhead:
- Structured data: ~5KB inline
- Sitemap: Auto-generated at build
- Robots.txt: Static file
- Manifest: Small JSON file

Total additional payload: <10KB

## Support

For questions about SEO implementation, refer to:
- Next.js SEO documentation: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
- Schema.org: https://schema.org/
- Google Search Central: https://developers.google.com/search/docs
