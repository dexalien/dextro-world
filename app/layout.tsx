import type React from "react"
import type { Metadata } from "next"
import { Sora } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
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
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KPCKFKDR');`}
        </Script>
      </head>
      <body className={`${sora.variable} font-sans antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KPCKFKDR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
