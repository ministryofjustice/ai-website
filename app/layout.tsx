import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Link from "next/link"
import Image from "next/image"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Justice AI Unit",
  description: "An interdisciplinary team of experts solving critical challenges across our justice system",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <header className="fixed w-full z-50 bg-gray-900 border-b border-gray-800 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16 items-center">
                <div className="flex items-center">
                  <Link href="/" className="flex-shrink-0 flex items-center">
                    <Image
                      src="/digital_ai_logo.png"
                      alt="Justice AI Unit Logo"
                      width={40}
                      height={40}
                      className="mr-3"
                    />
                  </Link>
                </div>
                <nav className="hidden md:flex space-x-8">
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium relative group"
                  >
                    Home
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full"></span>
                  </Link>
                </nav>
              </div>
            </div>
          </header>
          <main>{children}</main>
          <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-repeat opacity-5"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <h3 className="text-2xl font-semibold mb-6">Get in touch</h3>
              <a
                href="mailto:ai@justice.gov.uk"
                className="text-gray-300 hover:text-white text-xl inline-block relative group"
              >
                ai@justice.gov.uk
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full"></span>
              </a>
              <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
                <p>© {new Date().getFullYear()} Justice AI Unit. All rights reserved.</p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -left-20 top-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -right-20 bottom-1/4 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl"></div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
