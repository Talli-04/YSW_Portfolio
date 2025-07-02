import "./globals.css"
import { Inter, Space_Grotesk, Noto_Sans_KR } from "next/font/google"
import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/app/components/Navigation"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })
const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-kr",
})

export const metadata = {
  title: "YSW_Portfolio | B2C/B2B 웹 서비스 기획 및 개발 PM",
  description: "B2C/B2B 웹 서비스 기획 및 개발 커뮤니케이션 경험 보유 PM",
  metadataBase: new URL("https://ysw-portfolio.vercel.app"),
  openGraph: {
    title: "YSW_Portfolio",
    description: "B2C/B2B 웹 서비스 기획 및 개발 커뮤니케이션 경험 보유 PM",
    type: "website",
    locale: "ko_KR",
    url: "https://ysw-portfolio.vercel.app",
    siteName: "YSW_Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "YSW_Portfolio - Product Manager Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YSW_Portfolio",
    description: "B2C/B2B 웹 서비스 기획 및 개발 커뮤니케이션 경험 보유 PM",
    images: ["/og-image.png"],
  },
  other: {
    "og:image": "/og-image.png",
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:type": "website",
    "og:title": "YSW_Portfolio",
    "og:description": "B2C/B2B 웹 서비스 기획 및 개발 커뮤니케이션 경험 보유 PM",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning className="scroll-smooth">
      <head>
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="YSW_Portfolio" />
        <meta property="og:description" content="B2C/B2B 웹 서비스 기획 및 개발 커뮤니케이션 경험 보유 PM" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${notoSansKR.variable} font-sans bg-slate-950 text-white`}
      >
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-H0CE9YXBM9" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H0CE9YXBM9');
          `}
        </Script>

        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
