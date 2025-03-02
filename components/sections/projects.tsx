"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Github } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Dashboard",
    description:
      "A responsive admin dashboard for an e-commerce platform with real-time analytics, inventory management, and order processing capabilities.",
    image: "/ecom.jpeg?height=500&width=800",
    tags: ["Next.js", "Tailwind CSS", "Chart.js", "Redux"],
    demoUrl: "#",
    repoUrl: "#",
    featured: true,
  },
  {
    title: "Social Media App",
    description: "A modern social networking application with real-time chat, post sharing, and user authentication.",
    image: "/social.jpeg?height=500&width=800",
    tags: ["React", "Firebase", "Tailwind CSS", "Socket.io"],
    demoUrl: "#",
    repoUrl: "#",
    featured: true,
  },
  {
    title: "Personal Finance Tracker",
    description:
      "A tool for tracking personal expenses, income, and budgeting with interactive visualizations and reports.",
    image: "/finance.jpeg?height=500&width=800",
    tags: ["SvelteKit", "TypeScript", "D3.js", "Supabase"],
    demoUrl: "#",
    repoUrl: "#",
    featured: true,
  },
  {
    title: "Weather App",
    description: "A weather application that provides current conditions and forecasts with beautiful visualizations.",
    image: "/placeholder.svg?height=500&width=800",
    tags: ["React", "OpenWeather API", "Styled Components"],
    demoUrl: "#",
    repoUrl: "#",
    featured: false,
  },
  {
    title: "Task Management Tool",
    description:
      "A Kanban-style task management application with drag-and-drop functionality and team collaboration features.",
    image: "/placeholder.svg?height=500&width=800",
    tags: ["Vue.js", "Vuex", "Tailwind CSS", "Firebase"],
    demoUrl: "#",
    repoUrl: "#",
    featured: false,
  },
  {
    title: "Recipe Finder App",
    description:
      "An application that helps users discover recipes based on available ingredients and dietary preferences.",
    image: "/placeholder.svg?height=500&width=800",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    demoUrl: "#",
    repoUrl: "#",
    featured: false,
  },
]

export default function Projects() {
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

  // Filter featured projects for the main section
  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <section id="projects" className="section-container">
      <motion.div ref={ref} initial="hidden" animate={controls} variants={containerVariants} className="space-y-12">
        <div className="text-center space-y-4">
          <motion.h2 variants={itemVariants} className="section-title">
            My Projects
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle max-w-2xl mx-auto">
            A showcase of my work, experiments, and personal projects
          </motion.p>
        </div>

        <motion.div variants={containerVariants} className="space-y-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
            >
              <div className="w-full lg:w-1/2 relative">
                <div className="relative h-64 sm:h-80 w-full rounded-lg overflow-hidden hover-lift shadow-md">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <div
                  className={`absolute -z-10 w-full h-full rounded-lg ${
                    index % 2 === 0 ? "-bottom-3 -right-3" : "-bottom-3 -left-3"
                  } bg-gradient-to-br from-primary/20 to-secondary/20`}
                ></div>
              </div>

              <div className="w-full lg:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-2 my-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-muted font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-2">
                  <Button asChild size="sm">
                    <Link href={project.demoUrl} className="flex items-center gap-1">
                      <span>Live Demo</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.repoUrl} className="flex items-center gap-1">
                      <Github className="h-4 w-4" />
                      <span>Source Code</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={containerVariants}>
          <h3 className="text-xl font-bold mb-6">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((project) => !project.featured)
              .map((project) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  className="bg-background border rounded-lg overflow-hidden hover-lift shadow-sm"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-5 space-y-3">
                    <h4 className="text-lg font-bold">{project.title}</h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>

                    <div className="flex flex-wrap gap-2 my-3">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-muted font-medium">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-muted font-medium">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex gap-3 pt-2">
                      <Button asChild variant="ghost" size="sm">
                        <Link href={project.demoUrl} className="flex items-center gap-1">
                          <span>Demo</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                      </Button>
                      <Button asChild variant="ghost" size="sm">
                        <Link href={project.repoUrl} className="flex items-center gap-1">
                          <Github className="h-3.5 w-3.5" />
                          <span>Code</span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

