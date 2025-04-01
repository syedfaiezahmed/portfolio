import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// SEO Constants
const FULL_NAME = "Syed Faiez Ahmed";
const JOB_TITLE = "Front-end Developer | Digital Marketer | Graphic Designer";
const SITE_URL = "https://syedfaiezahmed.vercel.app";
const HERO_IMAGE = `${SITE_URL}/images/title-image.png`;
const BASE_DESCRIPTION = `Professional portfolio of ${FULL_NAME}, ${JOB_TITLE}. Featuring web development projects, digital marketing campaigns, and graphic design work.`;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: {
    default: `${FULL_NAME}'s Portfolio`,
    template: `%s | ${FULL_NAME}`,
  },
  description: BASE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: `${FULL_NAME}'s Professional Portfolio`,
    description: BASE_DESCRIPTION,
    url: SITE_URL,
    siteName: `${FULL_NAME}'s Portfolio`,
    images: [
      {
        url: HERO_IMAGE,
        width: 1200,
        height: 630,
        alt: `${FULL_NAME} Portfolio Preview`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${FULL_NAME}'s Portfolio`,
    description: BASE_DESCRIPTION,
    images: [HERO_IMAGE],
  },
  // Icons section has been completely removed
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload hero image - kept as it's not an icon */}
        <link rel="preload" href="/images/title-image.png" as="image" />
      </head>
      <body className={`${inter.className} antialiased bg-black text-white`}>
        {children}
        <Analytics /> {/* Only change made - added this line */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: FULL_NAME,
              url: SITE_URL,
              jobTitle: JOB_TITLE,
              description: BASE_DESCRIPTION,
              image: HERO_IMAGE,
              knowsAbout: [
                "Web Development",
                "Digital Marketing",
                "Graphic Design",
                "React",
                "Next.js",
              ],
              sameAs: [
                "https://github.com/syedfaiezahmed",
                "https://www.linkedin.com/in/syed-faiez-ahmed-b45612279/",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}