import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter, Playwrite_AU_NSW, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["100", "200", "400", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const playwrite = Playwrite_AU_NSW({
  display: "swap",
  variable: "--font-playwrite",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",

  icons: {
    icon: "/logo_candy.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt_BR"
      className={`${inter.variable} ${playwrite.variable} ${poppins.variable}`}
    >
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
