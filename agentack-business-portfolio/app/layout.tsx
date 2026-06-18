import type { Metadata } from "next";
import { Syne, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Script from "next/dist/client/script";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["500", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Agentack",
    default: "Agentack - AI Automation for Growing Businesses",
  },
  description:
    "We build custom AI automation systems for mid-size businesses. Eliminate manual work, scale operations, and free your team to focus on what matters.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Agentack",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Agentack — AI Automation Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <GoogleAnalytics gaId="G-S1FQB759TQ" /> */}

      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-S1FQB759TQ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S1FQB759TQ');
          `}
      </Script>

      {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-S1FQB759TQ"></script>
<script>
  winscriptdow.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-S1FQB759TQ');
</script> */}

      <body
        className={`${syne.variable} ${inter.variable} ${jetbrainsMono.variable} bg-black-base text-frost-white antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
