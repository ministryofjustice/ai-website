"use client"

import { useEffect, useRef } from "react"
import { ExternalLink } from "lucide-react"

export default function AccessibilityPage() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
            entry.target.classList.remove("opacity-0", "translate-y-4")
          }
        })
      },
      { threshold: 0.1 },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Accessibility Statement</h1>
          <p className="text-lg text-gray-600">This statement applies to all pages on ai.justice.gov.uk</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-12">
          {/* Introduction */}
          <section
            ref={(el) => (sectionsRef.current[0] = el)}
            className="opacity-0 translate-y-4 transition-all duration-700"
          >
            <p className="text-gray-700 leading-relaxed mb-6">
              This website is run by the Ministry of Justice's Justice AI Unit. We want as many people as possible to be
              able to use this website. For example, that means you should be able to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>change colours, contrast levels and fonts</li>
              <li>zoom in up to 300% without the text spilling off the screen</li>
              <li>navigate most of the website using just a keyboard</li>
              <li>navigate most of the website using speech recognition software</li>
              <li>
                listen to most of the website using a screen reader (including the most recent versions of JAWS, NVDA
                and VoiceOver)
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              We've also made the website text as simple as possible to understand.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <a
                href="https://mcmw.abilitynet.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1"
              >
                AbilityNet
                <ExternalLink className="w-3 h-3" />
              </a>{" "}
              has advice on making your device easier to use if you have a disability.
            </p>
          </section>

          {/* Feedback and contact information */}
          <section
            ref={(el) => (sectionsRef.current[1] = el)}
            className="opacity-0 translate-y-4 transition-all duration-700"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Feedback and contact information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you need information on this website in a different format (like accessible PDF, large print, easy
              read, audio recording or braille), please contact:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="text-gray-700">
                📩{" "}
                <a href="mailto:ai@justice.gov.uk" className="text-blue-600 hover:text-blue-800 underline">
                  ai@justice.gov.uk
                </a>
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We'll consider your request and get back to you as soon as possible.
            </p>
          </section>

          {/* Reporting accessibility problems */}
          <section
            ref={(el) => (sectionsRef.current[2] = el)}
            className="opacity-0 translate-y-4 transition-all duration-700"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Reporting accessibility problems with this website
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We're always looking to improve the accessibility of this website. If you find any problems not listed on
              this page or think we're not meeting accessibility requirements, please contact:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                📩{" "}
                <a href="mailto:ai@justice.gov.uk" className="text-blue-600 hover:text-blue-800 underline">
                  ai@justice.gov.uk
                </a>
              </p>
            </div>
          </section>

          {/* Enforcement procedure */}
          <section
            ref={(el) => (sectionsRef.current[3] = el)}
            className="opacity-0 translate-y-4 transition-all duration-700"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Enforcement procedure</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Equality and Human Rights Commission (EHRC) is responsible for enforcing the Public Sector Bodies
              (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018 (the "accessibility
              regulations").
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you're not happy with how we respond to your complaint, contact the Equality Advisory and Support
              Service (EASS):
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                🌐{" "}
                <a
                  href="https://www.equalityadvisoryservice.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1"
                >
                  https://www.equalityadvisoryservice.com
                  <ExternalLink className="w-3 h-3" />
                </a>
              </p>
            </div>
          </section>

          {/* Technical information */}
          <section
            ref={(el) => (sectionsRef.current[4] = el)}
            className="opacity-0 translate-y-4 transition-all duration-700"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Technical information about this website's accessibility
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The Ministry of Justice is committed to making this website accessible, in accordance with the Public
              Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018.
            </p>
          </section>

          {/* Compliance status */}
          <section
            ref={(el) => (sectionsRef.current[5] = el)}
            className="opacity-0 translate-y-4 transition-all duration-700"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Compliance status</h2>
            <p className="text-gray-700 leading-relaxed">
              This website is fully compliant with the{" "}
              <a
                href="https://www.w3.org/WAI/WCAG22/quickref/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1"
              >
                Web Content Accessibility Guidelines version 2.2 AA standard
                <ExternalLink className="w-3 h-3" />
              </a>
              .
            </p>
          </section>

          {/* Preparation of this statement */}
          <section
            ref={(el) => (sectionsRef.current[6] = el)}
            className="opacity-0 translate-y-4 transition-all duration-700"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Preparation of this accessibility statement</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              This statement was prepared on 24 May 2025 and last reviewed on 24 May 2025.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This website was last tested on 10 May 2025 by the Justice AI Unit.
            </p>
            <p className="text-gray-700 leading-relaxed">
              All pages were manually tested using the Website Accessibility Conformance Evaluation Methodology
              (WCAG-EM).
            </p>
          </section>
        </div>
      </section>
    </div>
  )
}
