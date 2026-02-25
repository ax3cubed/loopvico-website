# Loopvico Laundry & Linen

A premium pickup and delivery laundry service landing page built with Next.js, React, and Tailwind CSS.

## Overview

This is a modern, responsive landing page for Loopvico Laundry & Linen, serving the DFW Metroplex area (Mansfield, Arlington, Irving, Las Colinas, and Grand Prairie).

## Features

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop
- **Modern UI/UX**: Clean, professional design with smooth animations using Framer Motion
- **Security Best Practices**: 
  - Content Security Policy (CSP)
  - X-Frame-Options
  - X-Content-Type-Options
  - XSS Protection
  - Referrer Policy
- **SEO Optimized**: 
  - Meta tags for Open Graph and Twitter Cards
  - Semantic HTML structure
  - Proper heading hierarchy
- **Performance**: Static export for optimal loading speeds

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

The static files will be generated in the `dist/` directory, ready for deployment.

## Project Structure

```
├── app/                   # Next.js app router
├── components/            # React components
├── dist/                  # Build output (for deployment)
├── public/                # Static assets
├── package.json           # Dependencies
└── next.config.ts         # Next.js configuration
```

## Customization

### Brand Colors

The brand uses a Navy Blue and Cream color scheme defined in `app/globals.css`:

- **Navy**: `#1a365d`
- **Navy Light**: `#2d4a6f`
- **Cream/Off-white**: `#f9f7f2`

### Contact Information

Update the phone number and WhatsApp link in `components/contact.tsx`:

```tsx
// Current placeholder
const WHATSAPP_NUMBER = "1234567890";
```

### Service Areas

Service areas can be updated in `components/contact.tsx` and `components/footer.tsx`.

## Deployment

This project is configured for static export. Deploy the `dist/` folder to any static hosting service:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)
- GitHub Pages
- AWS S3 + CloudFront

### Vercel Deployment

Simply connect your GitHub repo to Vercel - the build settings will be detected automatically.

```bash
npm i -g vercel
vercel --prod
```

### Netlify Deployment

```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

## Security Considerations

For production deployment with custom security headers, configure them at your hosting platform:

### Vercel (`vercel.json`)
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ]
}
```

### Netlify (`netlify.toml`)
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

## License

This project is created for Loopvico Laundry & Linen.

## Support

For questions or issues, contact the development team.
