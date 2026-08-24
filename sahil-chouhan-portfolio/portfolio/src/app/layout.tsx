import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import { profile } from "@/data/profile";
import { theme } from "@/config/theme";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

const siteUrl = "https://sahilchouhan.dev"; // placeholder — update once deployed

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.name} | Java Developer | Software Developer | AI Prompt Engineer`,
  description:
    "Portfolio of Sahil Chouhan, a B.Tech Information Technology student and aspiring Java Developer, Software Developer, and AI Prompt Engineer.",
  keywords: [
    "Sahil Chouhan",
    "Java Developer",
    "Software Developer",
    "AI Prompt Engineer",
    "SRM Institute of Science and Technology",
    "Portfolio",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} | Java Developer | Software Developer | AI Prompt Engineer`,
    description:
      "Portfolio of Sahil Chouhan, a B.Tech Information Technology student and aspiring Java Developer, Software Developer, and AI Prompt Engineer.",
    url: siteUrl,
    siteName: `${profile.name} — Portfolio`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Java Developer | Software Developer | AI Prompt Engineer`,
    description:
      "Portfolio of Sahil Chouhan, a B.Tech Information Technology student and aspiring Java Developer, Software Developer, and AI Prompt Engineer.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: theme.meta.themeColorLight },
    { media: "(prefers-color-scheme: dark)", color: theme.meta.themeColorDark },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
