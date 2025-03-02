"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Calendar } from "lucide-react"

const blogPosts = [
  {
    title: "Building Performant Animations with Framer Motion",
    excerpt: "Learn how to create smooth, performant animations in React applications using Framer Motion.",
    date: "2023-12-15",
    image: "/placeholder.svg?height=400&width=600",
    url: "#",
    category: "Animation",
  },
  {
    title: "Mastering Server Components in Next.js",
    excerpt: "A deep dive into React Server Components and how they improve performance in Next.js applications.",
    date: "2023-11-20",
    image: "/placeholder.svg?height=400&width=600",
    url: "#",
    category: "Next.js",
  },
  {
    title: "The Power of Tailwind CSS: From Skeptic to Advocate",
    excerpt: "My journey with Tailwind CSS and why I now prefer it for most of my projects.",
    date: "2023-10-05",
    image: "/placeholder.svg?height=400&width=600",
    url: "#",
    category: "CSS",
  },
  {
    title: "Getting Started with SvelteKit: A Practical Guide",
    excerpt: "A beginner-friendly introduction to SvelteKit and how to build your first application.",
    date: "2023-09-10",
    image: "/placeholder.svg?height=400&width=600",
    url: "#",
    category: "Svelte",
  },
  {
    title: "Optimizing Images in Modern Web Applications",
    excerpt: "Best practices for handling images in web applications for better performance and user experience.",
    date: "2023-08-18",
    image: "/placeholder.svg?height=400&width=600",
    url: "#",
    category: "Performance",
  },
  {
    title: "Creating Custom Hooks in React",
    excerpt: "How to build reusable custom hooks to improve code organization and reusability in React.",
    date: "2023-07-22",
    image: "/placeholder.svg?height=400&width=600",
    url: "#",
    category: "React",
  },
]

// Unique categories from blog posts
const categories = ["All", ...new Set(blogPosts.map((post) => post.category))]

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)

  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredPosts(blogPosts)
    } else {
      setFilteredPosts(blogPosts.filter((post) => post.category === activeCategory))
    }
  }, [activeCategory])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="blog" className="section-container bg-muted/30">
      <motion.div ref={ref} initial="hidden" animate={controls} variants={containerVariants} className="space-y-10">
        <div className="text-center space-y-4">
          <motion.h2 variants={itemVariants} className="section-title">
            Blog & Insights
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about frontend development
          </motion.p>
        </div>

        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <motion.article
              key={post.title}
              variants={itemVariants}
              className="bg-background border rounded-lg overflow-hidden hover-lift shadow-sm"
            >
              <Link href={post.url} className="block">
                <div className="relative h-48 w-full">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm text-xs font-medium px-2.5 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
              </Link>

              <div className="p-5 space-y-3">
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5 mr-1" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>

                <Link href={post.url} className="block">
                  <h3 className="text-lg font-bold hover:text-primary transition-colors">{post.title}</h3>
                </Link>

                <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>

                <Button asChild variant="ghost" size="sm" className="px-0">
                  <Link href={post.url} className="flex items-center gap-1">
                    <span>Read More</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

