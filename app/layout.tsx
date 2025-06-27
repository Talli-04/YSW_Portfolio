import "./globals.css"
import { Inter, Space_Grotesk, Noto_Sans_KR } from "next/font/google"
import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/app/components/Navigation"

const inter = Inter({ subsets: ["latin"] })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })
const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-kr",
})

export const metadata = {
  title: "YSW_Portfolio | B2C/B2B 웹 서비스 기획 및 개발 PM",
  description: "IT 제품의 기획부터 출시까지 전 과정을 관리하는 Product Manager 포트폴리오입니다.",
  openGraph: {
    title: "YSW_Portfolio",
    description: "B2C/B2B 웹 서비스 기획 및 개발 커뮤니케이션 경험 보유 PM",
    type: "website",
    locale: "ko_KR",
    siteName: "YSW_Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
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
    images: ["/images/og-image.jpg"],
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
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${notoSansKR.variable} font-sans bg-slate-950 text-white`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
