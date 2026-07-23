import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site, siteOrigin, siteUrl } from "@/data/site";

// Monospace everywhere — self-hosted by next/font, works with static export.
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const description =
  "Portfolio of Arijit Paul — Electronics & Telecommunication Engineering undergrad at Jadavpur University. 5G/wireless research at IIT Guwahati, enterprise networking at Accenture, and applied ML/AI projects.";

export const metadata: Metadata = {
  // Resolves the file-based OG image against the deployed origin. It is the
  // origin only — opengraph-image.png is already served under `basePath`.
  metadataBase: new URL(siteOrigin),
  title: {
    default: `${site.name} — Portfolio`,
    template: `%s — ${site.name}`,
  },
  description,
  applicationName: `${site.name} — Portfolio`,
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  keywords: [
    "Arijit Paul",
    "Jadavpur University",
    "Electronics and Telecommunication Engineering",
    "5G",
    "RIS",
    "beamforming",
    "wireless research",
    "machine learning",
    "portfolio",
  ],
  alternates: {
    canonical: `${siteUrl}/`,
  },
  openGraph: {
    type: "profile",
    siteName: `${site.name} — Portfolio`,
    title: `${site.name} — Portfolio`,
    description,
    url: `${siteUrl}/`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Portfolio`,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

/**
 * Schema.org Person markup — lets search engines link the name, role, and
 * social profiles together in a knowledge panel / rich result.
 */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: siteUrl,
  email: `mailto:${site.email}`,
  telephone: site.phone,
  jobTitle: "Electronics & Telecommunication Engineering Undergraduate",
  description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Jadavpur University",
  },
  knowsAbout: [
    "5G",
    "Reconfigurable Intelligent Surfaces",
    "Beamforming",
    "Wireless Communication",
    "Machine Learning",
    "Computer Vision",
  ],
  sameAs: [site.github, site.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="scanlines min-h-screen bg-terminal font-mono text-fg antialiased">
        <script
          type="application/ld+json"
          // Static, author-controlled object — no user input is interpolated.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
