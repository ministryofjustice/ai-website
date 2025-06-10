"use client"

import { motion } from "framer-motion"
import { Code, Layers, Brain, ExternalLinkIcon, ChevronRight } from "lucide-react" // Added ChevronRight
import { Button } from "@/components/ui/button"

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="py-20 md:py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-gray-900 mb-8">
              Careers at the Justice AI Unit
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are a fast-moving team working at the heart of the justice system. Join us to transform the justice
              system.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-10">Our Approach</h2>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12">
              The justice system presents unique and complex challenges. To make a real difference, our work is guided
              by these principles:
            </p>
            <div className="max-w-3xl mx-auto text-left">
              <ul className="space-y-6">
                
                <li className="flex items-start">
                  <ChevronRight className="h-6 w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700 leading-relaxed">
                    <strong>Rapid Delivery:</strong> We ship products quickly,
                    learning from real-world use, and adapting fast. This allows us to test hypotheses and deliver value
                    incrementally.
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700 leading-relaxed">
                    <strong>User Centric:</strong> We work directly (often in-person)
                    with frontline users in HQ, prisons, probation services, and more, to understand their needs and
                    co-design impactful AI solutions quickly.
                  </span>
                </li>
                
                <li className="flex items-start">
                  <ChevronRight className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700 leading-relaxed">
                    <strong>Scan, Pilot, Scale:</strong> We systematically explore new AI opportunities,
                    rigorously pilot promising tools with real users, and quickly scale successful
                    solutions for national system-wide impact.
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700 leading-relaxed">
                    <strong>Responsible & Ethical AI:</strong> We champion safe, responsible, and ethical AI adoption,
                    embedding principles of fairness, transparency, and accountability into everything we build to
                    enhance, not replace, human judgment.
                  </span>
                </li>
                
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Roles Section */}
      <section className="py-20 md:py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-6">Roles</h2>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              We are looking for high-agency individuals to join us in the following areas:
            </p>
          </motion.div>

          <div className="space-y-12 md:space-y-16">
            {/* Forward Deployed Engineers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm md:flex md:items-start md:gap-8"
            >
              <div className="flex-shrink-0 mb-6 md:mb-0 flex justify-center md:justify-start">
                <div className="inline-block p-3 bg-black rounded-full">
                  <Code className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-medium mb-3 text-gray-900">Forward Deployed Engineers</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                You'll work directly with frontline users, including those in prisons and probation services, to understand their daily
                  challenges and rapidly prototype, build, and deploy AI-driven solutions in complex environments.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  You will be expected to ship code quickly, be versatile across the stack and deeply understand how to
                  build products for users.
                </p>
              </div>
            </motion.div>

            {/* Platform Engineers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm md:flex md:items-start md:gap-8"
            >
              <div className="flex-shrink-0 mb-6 md:mb-0 flex justify-center md:justify-start">
                <div className="inline-block p-3 bg-black rounded-full">
                  <Layers className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-medium mb-3 text-gray-900">Platform Engineers</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  You will design, build, and maintain the secure, scalable, and reliable infrastructure that underpins
                  our AI solutions, managing data pipelines, MLOps, and LLMOps.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This role is essential for tackling the challenges of deploying modern AI systems within government
                  environments effectively.
                </p>
              </div>
            </motion.div>

            {/* AI Product Managers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm md:flex md:items-start md:gap-8"
            >
              <div className="flex-shrink-0 mb-6 md:mb-0 flex justify-center md:justify-start">
                <div className="inline-block p-3 bg-black rounded-full">
                  <Brain className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-medium mb-3 text-gray-900">AI Product Managers</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  You will define the vision, strategy, and roadmap for our AI initiatives, translating user needs and
                  system challenges into well-defined product requirements.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This involves working closely with diverse stakeholders to prioritise features and ensure our AI
                  products are usable, ethical, and impactful.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 md:py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg sm:text-xl text-gray-600 mb-12">
              If you are interested in applying your skills to challenging and meaningful problems within the public
              sector, we encourage you to explore our current openings.
            </p>
            <a href="https://www.civilservicejobs.service.gov.uk/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-black hover:bg-gray-800 text-white rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium inline-flex items-center group">
                View Open Roles on Civil Service Jobs
                <ExternalLinkIcon className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 opacity-80 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
