"use client"

import { motion } from "framer-motion"
import { ArrowRight, FileText, BarChart, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ActionPlanPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-gray-900 mb-8">
              AI Action Plan for Justice
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A roadmap for safe and effective AI adoption in justice
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-8">Overview</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              The AI Action Plan for Justice sets the strategic direction for responsible AI use across the Ministry of
              Justice over the next three years. It focuses on:
            </p>
            <ul className="space-y-6 text-xl text-gray-700">
              <li className="flex items-start">
                <span className="mr-4 text-black">•</span>
                <span>Strengthening AI foundations</span>
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-black">•</span>
                <span>Embedding AI across services through a Scan, Pilot, Scale model</span>
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-black">•</span>
                <span>Investing in the people and partnerships that make this possible</span>
              </li>
            </ul>
          </motion.div>

          <div className="relative rounded-2xl overflow-hidden mb-24">
            <Image
              src="/placeholder.svg?height=500&width=1000&query=strategic roadmap visualisation with connected nodes"
              alt="AI Action Plan visualisation"
              width={1000}
              height={500}
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">Quick Links</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Access the full plan and related resources</p>
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
                <Download className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-medium mb-4">Download the full plan</h3>
              <p className="text-gray-600 mb-6">Get the complete AI Action Plan for Justice document (PDF)</p>
              <Link href="/files/ai-action-plan.pdf">
                <Button className="bg-black hover:bg-gray-800 text-white rounded-full px-6 py-3 text-base font-medium inline-flex items-center">
                  Download PDF
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <div className="w-12 h-12 bg-black rounded-full mb-6 flex items-center justify-center">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-medium mb-4">Executive Summary</h3>
              <p className="text-gray-600 mb-6">Read a concise overview of the key points and objectives</p>
              <Link href="/action-plan/summary">
                <Button className="bg-black hover:bg-gray-800 text-white rounded-full px-6 py-3 text-base font-medium inline-flex items-center">
                  Read summary
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <div className="w-12 h-12 bg-black rounded-full mb-6 flex items-center justify-center">
                <BarChart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-medium mb-4">Roadmap</h3>
              <p className="text-gray-600 mb-6">Explore our implementation timeline and key milestones</p>

              <Button
                onClick={() => {
                  document.getElementById("roadmap")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }}
                className="bg-black hover:bg-gray-800 text-white rounded-full px-6 py-3 text-base font-medium inline-flex items-center"
              >
                View roadmap
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Roadmap Timeline Section */}
      <section id="roadmap" className="py-32 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Our Roadmap for AI Delivery</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A 3-year journey guided by our "Scan, Pilot, Scale" approach.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line - hidden on mobile */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full hidden md:block">
              <div className="w-px h-full bg-white/20"></div>
            </div>

            {/* Timeline dots and horizontal line - hidden on mobile */}
            <div className="relative mb-24">
              <div className="absolute top-12 left-0 right-0 h-px bg-white/20 hidden md:block"></div>

              {/* Responsive container - flex-col on mobile, flex-row on desktop */}
              <div className="flex flex-col md:flex-row justify-between relative gap-16 md:gap-4">
                {/* Year 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="w-full md:w-1/3 px-4"
                >
                  <div className="flex flex-col items-center">
                    <div className="text-2xl md:text-3xl font-medium mb-2">2025</div>
                    {/* Timeline elements - hidden on mobile */}
                    <div className="w-4 h-4 rounded-full bg-green-500 mb-4 relative z-10 hidden md:block"></div>
                    <div className="h-16 w-px bg-white/30 hidden md:block"></div>
                    <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/10 mt-4 w-full">
                      <h3 className="text-xl font-medium mb-4">Year 1</h3>
                      <h4 className="text-lg font-medium mb-3">Establish foundations and deliver early wins</h4>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start">
                          <span className="mr-2 text-green-500">🟢</span>
                          <span>Roll out secure AI productivity tools across the department</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-green-500">🟢</span>
                          <span>Pilot domain-specific AI (e.g., chat, search, transcription)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-green-500">🟢</span>
                          <span>Build AI capability and governance structures</span>
                        </li>
                      </ul>
                      <p className="text-sm text-gray-300 italic">
                        Laying the groundwork: embedding safe, scalable AI across core services
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Year 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="w-full md:w-1/3 px-4"
                >
                  <div className="flex flex-col items-center">
                    <div className="text-2xl md:text-3xl font-medium mb-2">2026</div>
                    {/* Timeline elements - hidden on mobile */}
                    <div className="w-4 h-4 rounded-full bg-yellow-500 mb-4 relative z-10 hidden md:block"></div>
                    <div className="h-16 w-px bg-white/30 hidden md:block"></div>
                    <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/10 mt-4 w-full">
                      <h3 className="text-xl font-medium mb-4">Year 2</h3>
                      <h4 className="text-lg font-medium mb-3">Scale what works and deepen transformation</h4>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start">
                          <span className="mr-2 text-yellow-500">🟡</span>
                          <span>Expand successful pilots across agencies</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-yellow-500">🟡</span>
                          <span>Integrate AI into frontline operations and case handling</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-yellow-500">🟡</span>
                          <span>Use time saved to reinvest in better public and staff experiences</span>
                        </li>
                      </ul>
                      <p className="text-sm text-gray-300 italic">
                        From promising pilots to embedded solutions that improve delivery
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Year 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="w-full md:w-1/3 px-4"
                >
                  <div className="flex flex-col items-center">
                    <div className="text-2xl md:text-3xl font-medium mb-2">2027</div>
                    {/* Timeline elements - hidden on mobile */}
                    <div className="w-4 h-4 rounded-full bg-blue-500 mb-4 relative z-10 hidden md:block"></div>
                    <div className="h-16 w-px bg-white/30 hidden md:block"></div>
                    <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/10 mt-4 w-full">
                      <h3 className="text-xl font-medium mb-4">Year 3</h3>
                      <h4 className="text-lg font-medium mb-3">System-wide AI integration at scale</h4>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500">🔵</span>
                          <span>Deliver scaled, interoperable AI solutions</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500">🔵</span>
                          <span>Make AI part of how we work every day, from decisions to operations</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500">🔵</span>
                          <span>Enable smarter, joined-up use of data across the system</span>
                        </li>
                      </ul>
                      <p className="text-sm text-gray-300 italic">
                        Enabling fairer, faster, and more personalised justice
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guiding Principles Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-8">Guiding Principles</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              Our approach to AI in justice is guided by these core principles:
            </p>
          </motion.div>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-medium mb-4">Put safety and fairness first</h3>
              <p className="text-lg text-gray-700">
                We prioritise ethical considerations, bias mitigation, and safety in all AI applications. Our systems
                are designed to promote fairness and equal access to justice.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-medium mb-4">Preserve legal independence</h3>
              <p className="text-lg text-gray-700">
                We ensure AI systems support but never replace independent judicial decision-making. Technology enhances
                human judgment rather than substituting for it.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-medium mb-4">Design around users</h3>
              <p className="text-lg text-gray-700">
                Our AI solutions are developed with continuous input from justice staff and service users, ensuring they
                address real needs and deliver tangible benefits.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-medium mb-4">Build or buy once, use many times</h3>
              <p className="text-lg text-gray-700">
                We develop reusable components and shared platforms to maximise efficiency and consistency across
                justice services, avoiding duplication of effort.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
