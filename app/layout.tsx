import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9f7f2" },
    { media: "(prefers-color-scheme: dark)", color: "#1a2744" },
  ],
};

export const metadata: Metadata = {
  title: "Loopvico | Premium Pickup & Delivery Laundry Service",
  description: "Professional laundry and linen pickup & delivery service in Mansfield, Arlington, Irving, Las Colinas, and Grand Prairie. $40 flat-rate bags, subscription plans available.",
  keywords: ["laundry service", "pickup delivery laundry", "Mansfield laundry", "Arlington laundry", "Irving laundry", "Las Colinas laundry", "Grand Prairie laundry", "dry cleaning", "linen service"],
  authors: [{ name: "Loopvico" }],
  creator: "Loopvico",
  publisher: "Loopvico",
  robots: "index, follow",
  metadataBase: new URL("https://loopvico.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://loopvico.com",
    siteName: "Loopvico Laundry & Linen",
    title: "Loopvico | Premium Pickup & Delivery Laundry Service",
    description: "Professional laundry and linen pickup & delivery service. $40 flat-rate bags, subscription plans available in DFW metroplex.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Loopvico Laundry Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Loopvico | Premium Pickup & Delivery Laundry Service",
    description: "Professional laundry and linen pickup & delivery service. $40 flat-rate bags, subscription plans available.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://loopvico.com",
  },
  category: "business",
  other: {
    "X-Frame-Options": "DENY",
    "X-Content-Type-Options": "nosniff",
    "X-XSS-Protection": "1; mode=block",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Security Meta Tags for Static Export */}
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=(), interest-cohort=()" />
        
        {/* Content Security Policy */}
        <meta 
          httpEquiv="Content-Security-Policy" 
          content="default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data:; font-src 'self'; connect-src 'self'; frame-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self';"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
