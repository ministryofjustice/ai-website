"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { ArrowRight, FileText, Settings, Newspaper } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  const overviewRef = useRef<HTMLDivElement>(null)

  const scrollToOverview = () => {
    overviewRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-[90vh] pt-32 px-6">
        <div className="max-w-4xl mx-auto text-center flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-8">
              Building a faster, fairer, and more accessible system with AI
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              The Justice AI Unit is an interdisciplinary team of AI specialists, designers,
              technologists, and operational experts working to embed responsible AI across the justice system.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              onClick={scrollToOverview}
              className="bg-black hover:bg-gray-800 text-white rounded-full px-8 py-6 text-lg font-medium group transition-all duration-200"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section ref={overviewRef} className="py-32 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">Our Mission</h2>
            <div className="w-12 h-0.5 bg-black mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-12 shadow-sm border border-gray-100"
          >
            <p className="text-xl text-gray-700 leading-relaxed text-center">
              We exist to enable the safe and ethical adoption of AI across the MoJ and its agencies, helping our people deliver faster, better and more human services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/transform-justice-hero.png"
              alt="AI in Justice visualisation"
              width={1200}
              height={600}
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
              <div className="p-12 md:p-24 max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
                  Transforming justice with responsible AI
                </h2>
                <p className="text-white/90 text-lg mb-8">
                  Our approach balances innovation with ethics, ensuring AI enhances human judgment rather than
                  replacing it.
                </p>
                <Link href="/about">
                  <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-6 py-5 text-base font-medium">
                    About our team
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
