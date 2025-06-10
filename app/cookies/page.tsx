"use client"

import { useEffect, useRef } from "react"
import { ExternalLink } from "lucide-react"

export default function CookiePolicyPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
          <p className="text-lg text-gray-600">Last Updated: 24 May 2025</p>
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
            <p className="text-gray-700 leading-relaxed mb-6">
              This Cookie Policy explains how the Justice AI Unit ("we", "us", or "our") uses cookies and similar
              technologies on our website (ai.justice.gov.uk). It explains what these technologies are and why we use
              them, as well as your rights to control our use of them.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Please read this Cookie Policy carefully. By continuing to browse or use our website, you agree that we
              can store and access cookies and other tracking technologies as described in this policy.
            </p>
          </section>

          {/* What are cookies */}
          <section
            ref={(el) => (sectionsRef.current[1] = el)}
            className="opacity-0 translate-y-4 transition-all duration-700"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What are cookies?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website.
              They are widely used to make websites work more efficiently and provide information to the owners of the
              site. Cookies can be "persistent" or "session" cookies.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Persistent cookies remain on your device after you close your browser until they expire or you delete
              them. Session cookies are deleted as soon as you close your browser.
            </p>
          </section>

          {/* Types of cookies we use */}
          <section
            ref={(el) => (sectionsRef.current[2] = el)}
            className="opacity-0 translate-y-4 transition-all duration-700"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Types of cookies we use</h2>
            <p className="text-gray-700 leading-relaxed mb-6">We use the following types of cookies on our website:</p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Essential cookies</h3>
                <p className="text-gray-700 leading-relaxed">
                  These cookies are necessary for the website to function properly. They enable basic functions like
                  page navigation and access to secure areas of the website. The website cannot function properly
                  without these cookies.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Analytics cookies</h3>
                <p className="text-gray-700 leading-relaxed">
                  We use Google Analytics to collect anonymous information about how visitors use our website. These
                  cookies help us understand how visitors interact with our website by collecting and reporting
                  information anonymously. The information collected includes the number of visitors to the site, where
                  visitors have come to the site from, and the pages they visited.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Preference cookies</h3>
                <p className="text-gray-700 leading-relaxed">
                  These cookies enable the website to remember information that changes the way the website behaves or
                  looks, like your preferred language or the region that you are in.
                </p>
              </div>
            </div>
          </section>

          {/* Specific cookies we use */}
          <section
            ref={(el) => (sectionsRef.current[3] = el)}
            className="opacity-0 translate-y-4 transition-all duration-700"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Specific cookies we use</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 mb-6">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Cookie Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Purpose
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Duration
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Type
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">_ga</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Used to distinguish users in Google Analytics</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">2 months</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Analytics</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">_gid</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Used to distinguish users in Google Analytics</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">24 hours</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Analytics</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">_gat</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Used to throttle request rate</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">1 minute</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Analytics</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* How to manage cookies */}
          <section
            ref={(el) => (sectionsRef.current[4] = el)}
            className="opacity-0 translate-y-4 transition-all duration-700"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to manage cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Most web browsers allow you to control cookies through their settings preferences. However, if you limit
              the ability of websites to set cookies, you may worsen your overall user experience, since it will no
              longer be personalized to you. It may also stop you from saving customized settings like login
              information.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Browser controls for managing cookies</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You can manage cookies through your browser settings. Here's how to do it in popular browsers:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <a
                      href="https://support.google.com/chrome/answer/95647"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1"
                    >
                      Google Chrome
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1"
                    >
                      Mozilla Firefox
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1"
                    >
                      Safari
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1"
                    >
                      Microsoft Edge
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Google Analytics opt-out</h3>
                <p className="text-gray-700 leading-relaxed">
                  To opt out of being tracked by Google Analytics across all websites, you can install the{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1"
                  >
                    Google Analytics Opt-out Browser Add-on
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* Changes to this Cookie Policy */}
          <section
            ref={(el) => (sectionsRef.current[5] = el)}
            className="opacity-0 translate-y-4 transition-all duration-700"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to this Cookie Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use or
              for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly
              to stay informed about our use of cookies and related technologies. The date at the top of this Cookie
              Policy indicates when it was last updated.
            </p>
          </section>

          {/* Contact us */}
          <section
            ref={(el) => (sectionsRef.current[6] = el)}
            className="opacity-0 translate-y-4 transition-all duration-700"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
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
        </div>
      </section>
    </div>
  )
}
