"use client"

import { motion } from "framer-motion"
import { ArrowRight, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "Welcome to the Justice AI Unit blog",
    excerpt:
      "Welcome to the first blog post from the Justice AI Unit, a new team in the Ministry of Justice created to lead the safe and effective adoption of artificial intelligence across justice services.",
    date: "10 June 2025",
    readTime: "5 min read",
    image: "/dan-blog.png",
    slug: "welcome-to-the-blog",
  },
]

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-gray-900 mb-8">Blog</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Updates, insights, and learning from the Justice AI Unit
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <Link href={`/blog/${blogPosts[0].slug}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="rounded-2xl overflow-hidden">
                  <Image
                    src={blogPosts[0].image || "/placeholder.svg"}
                    alt={blogPosts[0].title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div>
                  <div className="flex items-center text-gray-500 mb-4">
                    <span>{blogPosts[0].date}</span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {blogPosts[0].readTime}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6 hover:text-gray-700 transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-xl text-gray-600 mb-8">{blogPosts[0].excerpt}</p>
                  <span className="text-black font-medium hover:underline inline-flex items-center">
                    Read article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="h-48 relative">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-medium mb-4 hover:text-gray-700 transition-colors">{post.title}</h3>
                    <p className="text-gray-600 mb-6 line-clamp-3">{post.excerpt}</p>
                    <span className="text-black font-medium hover:underline inline-flex items-center">
                      Read article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* View All CTA */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-8">Want to learn more?</h2>
            <p className="text-xl text-gray-600 mb-12">
              Meet the team behind our work and learn about our mission.
            </p>
            <Link href="/about">
              <button className="bg-black hover:bg-gray-800 text-white rounded-full px-8 py-4 text-lg font-medium inline-flex items-center">
                About our team
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
