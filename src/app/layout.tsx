import type { Metadata } from "next"
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "next-themes"
import { ScrollWatermark } from "@/components/ui/scroll-watermark"
import "./globals.css"

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Kanchan Simlandi | Full-Stack Developer",
  description:
    "Portfolio of Kanchan Simlandi — Full-Stack / Backend Developer specializing in Laravel, PHP, MySQL, and System Design.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bricolage.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen font-sans antialiased noise-overlay overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-foreground focus:rounded-lg">
            Skip to main content
          </a>
          <ScrollWatermark />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
