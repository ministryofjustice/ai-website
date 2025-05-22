"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const missionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToMission = () => {
    missionRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Binary background with parallax */}
        <div
          className="absolute inset-0 z-0 bg-[url('/binary-background.png')] bg-cover bg-center"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            opacity: 0.3,
          }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60 z-10"></div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-repeat z-20 opacity-10"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        />

        {/* Content */}
        <div className="relative z-30 max-w-5xl px-6 py-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
                Justice AI Unit
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-xl md:text-2xl font-medium text-gray-200 max-w-3xl mx-auto mb-12">
              We're an interdisciplinary team of experts solving critical challenges across our justice system.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-8"
          >
            <Button
              onClick={scrollToMission}
              className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-6 text-lg group"
            >
              Learn More
              <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30">
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.5,
            }}
            className="text-white/70"
          >
            <ChevronDown className="h-8 w-8" />
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="py-24 px-6 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-repeat opacity-5"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              <span className="relative inline-block">
                Our Mission
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-purple-500 rounded-full"></span>
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 max-w-2xl mx-auto"
          >
            <div className="h-2 bg-gradient-to-r from-purple-400 to-purple-600"></div>
            <div className="p-8">
              <p className="text-xl text-gray-700 font-medium text-center">To transform government services using AI</p>
            </div>
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute -left-20 top-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -right-20 bottom-1/4 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Strategic Priorities Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-repeat opacity-5"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              <span className="relative inline-block">
                Our Strategic Priorities
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-purple-500 rounded-full"></span>
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Strengthen our foundations",
              "Embed AI throughout the justice system",
              "Invest in our people and partners",
            ].map((priority, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-2 bg-gradient-to-r from-purple-400 to-purple-600"></div>
                <div className="p-8">
                  <p className="text-xl text-gray-700 font-medium">{priority}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Decorative elements */}
          <div className="absolute -right-20 top-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -left-20 bottom-1/4 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>
    </div>
  )
}
