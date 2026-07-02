import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Monospace everywhere — self-hosted by next/font, works with static export.
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arijit Paul — Portfolio",
  description:
    "Portfolio of Arijit Paul — Electronics & Telecommunication Engineering undergrad at Jadavpur University. 5G/wireless research at IIT Guwahati, enterprise networking at Accenture, and applied ML/AI projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="scanlines min-h-screen bg-terminal font-mono text-fg antialiased">
        {children}
      </body>
    </html>
  );
}
