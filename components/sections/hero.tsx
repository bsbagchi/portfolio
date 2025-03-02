"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"></div>

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Crafting <span className="text-primary">Interactive</span> Web Experiences
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl">
              I build dynamic, interactive interfaces using Next.js, SvelteKit, and Tailwind CSS.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild size="xl" className="font-medium">
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="font-medium">
              <Link href="#contact">Let's Connect</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <Link href="#about" className="flex items-center justify-center rounded-full p-2 bg-background/80 shadow-md">
          <ArrowDown className="h-6 w-6" />
        </Link>
      </div>
    </section>
  )
}

