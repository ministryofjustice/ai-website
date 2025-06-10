"use client"

import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      // Change to logo when scrolled past 100px
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Reset scroll position when pathname changes - use 'auto' behavior for immediate jump
  useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      })
    })
  }, [pathname])

  return (
    <html lang="en">
      <head>
        <title>Justice AI Unit</title>
        <meta
          name="description"
          content="An interdisciplinary team of experts solving critical challenges across our justice system"
        />
        <meta name="generator" content="v0.dev" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <header className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="flex justify-between h-20 items-center">
                <div className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <div className="relative flex items-center h-[52px]">
                      {/* Logo - shown when scrolled */}
                      <div
                        className={`transition-all duration-300 ${isScrolled ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                      >
                        <Image
                          src="/icon-logo-black.png"
                          alt="Justice AI Unit Logo"
                          width={52}
                          height={52}
                          className="object-contain"
                        />
                      </div>

                      {/* Text - shown when not scrolled */}
                      <div
                        className={`absolute top-0 left-0 h-full flex items-center transition-all duration-300 ${!isScrolled ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                      >
                        <span className="text-[1.4rem] font-medium text-gray-900 whitespace-nowrap">
                          Justice AI Unit
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
                <nav className="hidden md:flex space-x-8">
                  <Link
                    href="/"
                    className={`text-gray-600 hover:text-gray-900 px-2 py-2 text-sm font-medium transition-colors ${pathname === "/" ? "text-gray-900" : ""}`}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className={`text-gray-600 hover:text-gray-900 px-2 py-2 text-sm font-medium transition-colors ${pathname === "/about" ? "text-gray-900" : ""}`}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/blog"
                    className={`text-gray-600 hover:text-gray-900 px-2 py-2 text-sm font-medium transition-colors ${pathname === "/blog" ? "text-gray-900" : ""}`}
                  >
                    Blog
                  </Link>
                  <Link href="/careers" passHref>
                    <Button
                      variant="default"
                      size="sm"
                      className={`bg-black text-white hover:bg-gray-800 transition-colors ${pathname === "/careers" ? "ring-2 ring-offset-2 ring-black" : ""}`}
                    >
                      We're hiring
                    </Button>
                  </Link>
                </nav>
              </div>
            </div>
          </header>

          <main>{children}</main>

          <footer className="bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
              {/* Logo section */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-16">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-8 lg:mb-0">
                  <Image
                    src="/moj-logo-black.png"
                    alt="Ministry of Justice"
                    width={200}
                    height={60}
                    className="object-contain"
                  />
                  <div className="w-px h-16 bg-gray-300 hidden sm:block"></div>
                  <Image
                    src="/icon-logo-black.png"
                    alt="Justice AI Unit"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="max-w-md">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    The Justice AI Unit is a dedicated team within the Ministry of Justice, focused on transforming
                    justice services using artificial intelligence.
                  </p>
                </div>
              </div>

              {/* Links section */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">JUSTICE AI</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                        About us
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">OUR WORK</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/blog" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link href="/careers" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                        Careers
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">CONNECT</h3>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="https://www.gov.uk/government/organisations/ministry-of-justice"
                        className="text-gray-600 hover:text-gray-900 text-sm transition-colors flex items-center"
                      >
                        <span className="text-gray-600 text-sm">Ministry of Justice</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/justice-ai-unit/"
                        className="text-gray-600 hover:text-gray-900 text-sm transition-colors flex items-center"
                      >
                        <span className="mr-2">LinkedIn</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">SITE POLICIES</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/privacy" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="/cookies" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                        Cookie Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/accessibility"
                        className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                      >
                        Accessibility
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Copyright */}
              <div className="pt-8 border-t border-gray-200">
                <p className="text-gray-500 text-sm text-center">
                  © {new Date().getFullYear()} Ministry of Justice. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
