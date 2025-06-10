"use client"

import { motion } from "framer-motion"
import { Users, Lightbulb, Scale } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-gray-900 mb-8">About Us</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              An interdisciplinary team working to embed responsible AI across the justice system.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-8">Who we are</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              The Justice AI Unit was established in 2024 to lead the Ministry of Justice's approach to safe,
              responsible and proportionate AI adoption. We are a cross-functional team spanning AI, data science, product,
              design, operations, policy, ethics and change.
            </p>
          </motion.div>

          <div className="relative rounded-2xl overflow-hidden mb-24">
            <Image
              src="/who-we-are.png"
              alt="Justice AI Unit team"
              width={1000}
              height={500}
              className="w-full object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-8">What we do</h2>
            <ul className="space-y-6 text-xl text-gray-700">
              <li className="flex items-start">
                <span className="mr-4 text-black">•</span>
                <span>Drive the delivery of the AI Action Plan for Justice</span>
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-black">•</span>
                <span>Scan, pilot and scale transformative AI products</span>
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-black">•</span>
                <span>Embed ethical AI principles across the justice system</span>
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-black">•</span>
                <span>Support our people with AI literacy, training and adoption</span>
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-black">•</span>
                <span>Partner with experts across government, industry, and academia</span>
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-black">•</span>
                <span>Promote transparency, public engagement and responsible AI standards</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-8">Why it matters</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Our justice system faces serious challenges, from rising demand and staff shortages to siloed systems and
              inconsistent access. AI presents an opportunity to address these problems at scale. But this opportunity
              must be seized with care. By embedding AI that enhances, not replaces, human judgement, we aim to deliver
              better outcomes, faster services, and greater fairness for all.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our approach to AI in justice
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <div className="w-12 h-12 bg-black rounded-full mb-6 flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-medium mb-4">Human-centered</h3>
              <p className="text-gray-600">
              We will design AI tools that augment human capabilities and put the needs of users first
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <div className="w-12 h-12 bg-black rounded-full mb-6 flex items-center justify-center">
                <Scale className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-medium mb-4">Put safety and fairness first</h3>
              <p className="text-gray-600">
              AI in justice must work within the law, protect individual rights, and maintain public trust.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <div className="w-12 h-12 bg-black rounded-full mb-6 flex items-center justify-center">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-medium mb-4">Innovative</h3>
              <p className="text-gray-600">
                We embrace responsible innovation, constantly exploring new ways AI can improve justice outcomes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
