import type React from "react"
import type { Metadata } from "next"
import { Sora } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" })

export const metadata: Metadata = {
  title: "Dextro World",
  description: "Carol Franco - Data Analytics & Web Measurement Specialist",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" fontSize="90">🌎</text></svg>',
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    title: "Dextro World",
    description: "Carol Franco - Data Analytics & Web Measurement Specialist | Digital Marketing & Front-End Developer",
    url: "https://www.dextro.world",
    siteName: "Dextro World",
    images: [
      {
        url: "/images/avatar.png",
        width: 1200,
        height: 630,
        alt: "Carol Franco - Dextro World",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dextro World",
    description: "Carol Franco - Data Analytics & Web Measurement Specialist | Digital Marketing & Front-End Developer",
    images: ["/images/avatar.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
