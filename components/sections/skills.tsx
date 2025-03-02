"use client"

import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import { Code, LayoutPanelLeft, Server, Smartphone, CloudLightningIcon as Lightning, GitBranch } from "lucide-react"

// Skill categories with their respective skills
const skillCategories = [
  {
    name: "Frontend Frameworks",
    icon: <LayoutPanelLeft className="h-6 w-6" />,
    skills: [
      { name: "Next.js", level: 90 },
      { name: "SvelteKit", level: 85 },
      { name: "React", level: 90 },
      { name: "Angular", level: 70 },
    ],
    color: "primary",
  },
  {
    name: "Core Languages",
    icon: <Code className="h-6 w-6" />,
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 90 },
    ],
    color: "secondary",
  },
  {
    name: "Backend Basics",
    icon: <Server className="h-6 w-6" />,
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
      { name: "REST APIs", level: 85 },
      { name: "GraphQL", level: 70 },
    ],
    color: "accent",
  },
  {
    name: "Development Tools",
    icon: <GitBranch className="h-6 w-6" />,
    skills: [
      { name: "Git", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 80 },
      { name: "Docker", level: 65 },
    ],
    color: "primary",
  },
  {
    name: "CSS Frameworks",
    icon: <Lightning className="h-6 w-6" />,
    skills: [
      { name: "Tailwind CSS", level: 95 },
      { name: "SASS/SCSS", level: 85 },
      { name: "styled-components", level: 80 },
      { name: "CSS Modules", level: 75 },
    ],
    color: "secondary",
  },
  {
    name: "Responsive Design",
    icon: <Smartphone className="h-6 w-6" />,
    skills: [
      { name: "Mobile First", level: 90 },
      { name: "Flexbox/Grid", level: 95 },
      { name: "Media Queries", level: 90 },
      { name: "Accessibility", level: 85 },
    ],
    color: "accent",
  },
]

export default function Skills() {
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
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="section-container bg-muted/30">
      <motion.div ref={ref} initial="hidden" animate={controls} variants={containerVariants} className="space-y-10">
        <div className="text-center space-y-4">
          <motion.h2 variants={itemVariants} className="section-title">
            My Skills & Expertise
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle max-w-2xl mx-auto">
            A curated collection of technologies I've mastered on my journey as a developer
          </motion.p>
        </div>

        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              className="bg-background rounded-lg p-6 border hover-lift shadow-sm"
            >
              <div className={`flex items-center gap-3 mb-4 text-${category.color}`}>
                {category.icon}
                <h3 className="text-xl font-bold">{category.name}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 * idx }}
                        className={`h-full bg-${category.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

