"use client"

import { useEffect } from "react"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function About() {
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
    <section id="about" className="section-container">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="grid md:grid-cols-2 gap-10 items-center"
      >
        <motion.div variants={itemVariants} className="relative">
          <div className="relative h-80 md:h-96 w-full rounded-lg overflow-hidden border-4 border-background shadow-lg dark:shadow-primary/5">
            <Image src="/brotibg.jpeg?height=600&width=600" alt="Developer Avatar" fill className="object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 h-40 w-40 bg-primary/10 rounded-full -z-10"></div>
          <div className="absolute -top-6 -left-6 h-24 w-24 bg-secondary/10 rounded-full -z-10"></div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-6">
          <h2 className="text-3xl font-bold">
            Hi, I'm <span className="text-primary">Broti Sunder Bachi</span>
          </h2>

          <p className="text-muted-foreground">
            I'm a passionate frontend developer focused on creating engaging digital experiences that combine aesthetics
            with functionality. My journey in web development started with a curiosity about how websites work, which
            led me to dive deep into modern frontend technologies.
          </p>

          <p className="text-muted-foreground">
            With a strong foundation in JavaScript and a love for clean UI/UX, I specialize in building responsive,
            accessible, and performant web applications using the latest tools and frameworks.
          </p>

          <div className="grid grid-cols-2 gap-2">
            {["Creative Thinker", "Problem Solver", "UI Enthusiast", "Continuous Learner"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

