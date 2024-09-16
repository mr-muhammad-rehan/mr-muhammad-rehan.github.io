import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import "./globals.css";
import ogImage from '../../public/og-image.jpg';
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import dynamic from 'next/dynamic';
import { GoogleAnalytics } from '@next/third-parties/google';
import { GITHUB_URL_PROFILE, HOMEPAGE_URL } from "@/lib/constraints";
const ParticlesBackground = dynamic(() => import('@/components/ParticlesBackground'), {
  ssr: false,
  loading: () => <></>
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});
const rubik = Rubik({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-rubik",
});

export const siteConfig = {
  name: "Muhammad Rehan",
  description: "I am a Passionate Software Developer",
  ogImage: ogImage,
  url: HOMEPAGE_URL,
}

export const metadata: Metadata = {
  metadataBase: new URL(HOMEPAGE_URL),
  title: {
    default: siteConfig.name,
    template: `%s - Software Engineer`,
  },
  description: siteConfig.description,

  // added new keywords for seo
  keywords: [
    "portfolio",
    "web developer",
    "web",
    "web dev",
    "developer",
    "PROGRAMMER ",
    "programmer ",
    "website",
    "software engineer",
    "software developer",
    "software",
    "engineer",
    "developer",
    "full stack",
    "fullstack",
    "full stack developer",
    "fullstack developer",
    "full stack engineer",
    "fullstack engineer",
    "frontend",
    "frontend developer",
    "frontend engineer",
    "backend",
    "backend developer",
    "backend engineer",
    "react",
    "react js",
    "reactjs",
    "next js",
    "nextjs",
    "next.js",
    "typescript",
    "tailwindcss",
    "tailwind css",
    "css",
    "html",
    "javascript",
    "nodejs",
    "node js",
    "node.js",
    "express",
    "express js",
    "expressjs",
    "mongodb",
    "mongoose",
    "mysql",
    "mssql",
    "sqlite",
    "SQL",
    "nosql",
    "postgresql",
  ],
  authors: [
    {
      name: "Muhammad Rehan",
      url: GITHUB_URL_PROFILE,
    },
  ],
  creator: "Muhammad Rehan",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: HOMEPAGE_URL,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${HOMEPAGE_URL}/og-image.jpg`],
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${HOMEPAGE_URL}/og-image.jpg`],
    creator: "@rehandevprgmr",
  },
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${rubik.variable}`}>
        <main
          className={cn(
            "flex relative screen break-words min-h-screen items-center justify-between pt-14 pb-4 px-40 max-md:p-4 bg-transparent max-sm:pt-20 bg-[radial-gradient(#2f7df4_1px,transparent_1px)] [background-size:16px_16px]",
            { "bg-white": "#E6E7EB" }
          )}
        >
          {/* NAVBAR ->  */}
          <Navbar />
          <ParticlesBackground />
          {children}
        </main>
      </body>
      <GoogleAnalytics gaId="G-4VHSC56WM8" />
      <script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `(function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "o44ieznnxr");`,
        }}
      />
      <noscript><img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" referrerPolicy="no-referrer-when-downgrade" /></noscript>
    </html>
  );
}
