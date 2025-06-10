"use client"

import { useEffect, useRef } from "react"
import { Mail, Phone, ExternalLink } from "lucide-react"

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">Last Updated: 24 May 2025</p>
          <div className="mt-4">
            <a
              href="mailto:ai@justice.gov.uk"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <Mail className="h-5 w-5 mr-2" />
              Contact: ai@justice.gov.uk
            </a>
          </div>
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
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              This notice sets out how we process your personal data when you visit our website, in compliance with
              Articles 13 and/or 14 of the UK General Data Protection Regulation (UK GDPR).
            </p>
          </section>

          {/* Your Data */}
          <section
            ref={(el) => (sectionsRef.current[1] = el)}
            className="opacity-0 translate-y-4 transition-all duration-700"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Data</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We will process the following personal data:</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3 text-black">•</span>
                <span>
                  Anonymous data such as pages visited, time spent on each page, and the method by which you accessed
                  our site.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-black">•</span>
                <span>
                  Information you provide directly, such as your email address and any message content, if you contact
                  us.
                </span>
              </li>
            </ul>
          </section>

          {/* Purpose */}
          <section
            ref={(el) => (sectionsRef.current[2] = el)}
            className="opacity-0 translate-y-4 transition-all duration-700"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Purpose</h2>
            <p className="text-gray-700 leading-relaxed mb-4">The purposes for processing your personal data are:</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3 text-black">•</span>
                <span>To gather feedback to improve our services.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-black">•</span>
                <span>To respond to your feedback or inquiries.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-black">•</span>
                <span>To understand website usage and improve functionality.</span>
              </li>
            </ul>
          </section>

          {/* Legal Basis */}
          <section
            ref={(el) => (sectionsRef.current[3] = el)}
            className="opacity-0 translate-y-4 transition-all duration-700"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Legal Basis</h2>
            <p className="text-gray-700 leading-relaxed">
              The legal basis for processing your personal data under Article 6 of the UK GDPR is:
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>1(e) Public task:</strong> Processing is necessary for the performance of a task carried out in
              the public interest, namely improving government services.
            </p>
          </section>

          {/* Recipients */}
          <section
            ref={(el) => (sectionsRef.current[4] = el)}
            className="opacity-0 translate-y-4 transition-all duration-700"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Recipients</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3 text-black">•</span>
                <span>Your personal data will not be shared with third parties for marketing purposes.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-black">•</span>
                <span>Data collected may be processed by Google Analytics under strict privacy safeguards.</span>
              </li>
            </ul>
          </section>

          {/* Retention */}
          <section
            ref={(el) => (sectionsRef.current[5] = el)}
            className="opacity-0 translate-y-4 transition-all duration-700"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Retention</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We retain personal data collected through our website only for as long as necessary to fulfil the purposes
              for which it was collected, or as required by applicable laws and regulations. Specifically:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Google Analytics data</h3>
                <p className="text-gray-700 leading-relaxed">
                  We have configured Google Analytics to retain user and event data for the minimum period of 2 months.
                  After this period, the data is automatically deleted from Google's systems.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Contact information</h3>
                <p className="text-gray-700 leading-relaxed">
                  If you provide personal data, such as your email address when contacting us, this information will be
                  retained only for as long as necessary to respond to your enquiry or for up to 12 months, whichever is
                  shorter, unless a longer period is required for legal or audit purposes.
                </p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mt-6">
              At the end of the retention period, personal data will be securely deleted or anonymised. Anonymised data
              may be retained for statistical purposes, where it cannot be used to identify individuals. We review our
              data retention practices regularly to ensure they comply with the UK GDPR and the Ministry of Justice's
              data protection policies.
            </p>
          </section>

          {/* International Transfers */}
          <section
            ref={(el) => (sectionsRef.current[6] = el)}
            className="opacity-0 translate-y-4 transition-all duration-700"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">International Transfers</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Data collected through Google Analytics may be transferred outside the UK and the European Economic Area
              (EEA), including to the United States, where Google's servers are located. To ensure compliance with UK
              GDPR, Google relies on safeguards such as:
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3 text-black">•</span>
                <span>
                  The UK-US Data Privacy Framework, which provides assurance that transferred data will be protected to
                  standards equivalent to UK law.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-black">•</span>
                <span>
                  Where necessary, the use of Standard Contractual Clauses (SCCs), supplemented by Google's technical
                  measures such as encryption and pseudonymisation to ensure data protection.
                </span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-6">
              These mechanisms are designed to protect your personal data during any international transfer and ensure
              compliance with UK data protection standards.
            </p>
          </section>

          {/* Your Rights */}
          <section
            ref={(el) => (sectionsRef.current[7] = el)}
            className="opacity-0 translate-y-4 transition-all duration-700"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the following rights regarding your personal data:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="mr-3 text-black">•</span>
                <span>To request information about how your data is processed.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-black">•</span>
                <span>To request correction or deletion of your data.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-black">•</span>
                <span>To object to data processing where applicable.</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              The data controller for your personal data is the Ministry of Justice. You can contact the MoJ Data
              Protection Officer at:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="font-medium text-gray-900 mb-2">Data Protection Officer</p>
              <p className="text-gray-700">Ministry of Justice</p>
              <p className="text-gray-700">102 Petty France</p>
              <p className="text-gray-700">London</p>
              <p className="text-gray-700 mb-4">SW1H 9AJ</p>
              <a
                href="mailto:DataProtection@justice.gov.uk"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                DataProtection@justice.gov.uk
              </a>
            </div>
            <p className="text-gray-700 leading-relaxed mt-6">
              If you are unhappy with the way we have handled your personal data, please write to the department's Data
              Protection Officer in the first instance using the contact details above.
            </p>
          </section>

          {/* Complaints */}
          <section
            ref={(el) => (sectionsRef.current[8] = el)}
            className="opacity-0 translate-y-4 transition-all duration-700"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Complaints</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you consider that your personal data has been misused or mishandled, you may make a complaint to the
              Information Commissioner, who is an independent UK regulator. The Information Commissioner can be
              contacted at:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="font-medium text-gray-900 mb-2">Information Commissioner's Office</p>
              <p className="text-gray-700">Wycliffe House</p>
              <p className="text-gray-700">Water Lane</p>
              <p className="text-gray-700">Wilmslow, Cheshire</p>
              <p className="text-gray-700 mb-4">SK9 5AF</p>
              <div className="space-y-2">
                <a
                  href="tel:03031231113"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  0303 123 1113
                </a>
                <br />
                <a
                  href="https://ico.org.uk/make-a-complaint/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors gap-1"
                >
                  https://ico.org.uk/make-a-complaint/
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mt-6">
              Any complaint to the Information Commissioner is without prejudice to your right to seek redress through
              the courts.
            </p>
          </section>

          {/* Updates to this Notice */}
          <section
            ref={(el) => (sectionsRef.current[9] = el)}
            className="opacity-0 translate-y-4 transition-all duration-700"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Updates to this Notice</h2>
            <p className="text-gray-700 leading-relaxed">
              If this privacy notice changes in any way, we will place an updated version on this page. Regularly
              reviewing this page ensures you are always aware of what information we collect, how we use it, and under
              what circumstances we will share it with other parties. The 'last updated' date at the top of this page
              will also change. If these changes affect how your personal data is processed, we will take reasonable
              steps to let you know.
            </p>
          </section>
        </div>
      </section>
    </div>
  )
}
