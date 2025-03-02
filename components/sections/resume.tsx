"use client"

import { useEffect } from "react"
import Link from "next/link"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Briefcase, GraduationCap, Download, Building, Calendar } from "lucide-react"

const workExperience = [

  {
    title: "Frontend Developer",
    company: "Atcuts Ltd.",
    location: "Ahmedabad, India",
    period: "2024 - 2025",
    description:
      "Developed and maintained multiple client websites with React. Created reusable component libraries and implemented responsive designs.",
    skills: ["SvelteKit", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Junior Web Developer",
    company: "Signimus Technology",
    location: "Indore, India",
    period: "2023 - 2024",
    description:
      "Converted design mockups into fully functional responsive websites. Collaborated with designers to implement UI improvements.",
    skills: ["HTML", "CSS", "JavaScript","Nextjs", "Tailwind" ],
  },
]

const education = [
  {
    degree: "Master of Computer Science [AIML]",
    institution: "Chandigarh University",
    location: "Chandigarh, India",
    period: "2022 - 2024",
    description:
      "At Tech University in Chandigarh, India (2022 - 2024), I specialized in Human-Computer Interaction and Web Technologies, with my thesis focusing on the performance comparison of modern frontend frameworks.",
  },
  {
    degree: "Bachelor of Computer Science",
    institution: "Mats University",
    location: "Raipur, India",
    period: "2012 - 2016",
    description:
      "Graduated with honors from Mats University in Raipur, India (2012 - 2016), while actively participating in hackathons and web development competitions to sharpen my practical skills.",
  },
]


export default function Resume() {
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
    <section id="resume" className="section-container">
      <motion.div ref={ref} initial="hidden" animate={controls} variants={containerVariants} className="space-y-10">
        <div className="text-center space-y-4">
          <motion.h2 variants={itemVariants} className="section-title">
            Resume & Experience
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle max-w-2xl mx-auto">
            My professional journey and educational background
          </motion.p>

          <motion.div variants={itemVariants} className="pt-4">
            <Button asChild>
              <Link href="#" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                <span>Download Resume</span>
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div variants={containerVariants} className="space-y-6">
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </motion.div>

            <div className="relative pl-6 border-l-2 border-muted space-y-10">
              {workExperience.map((job, index) => (
                <motion.div key={job.title + job.company} variants={itemVariants} className="relative">
                  <div className="absolute -left-[25px] h-4 w-4 rounded-full bg-primary"></div>

                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h4 className="text-lg font-bold">{job.title}</h4>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        <span>{job.period}</span>
                      </div>
                    </div>

                    <div className="flex items-center text-sm text-muted-foreground">
                      <Building className="h-3.5 w-3.5 mr-1" />
                      <span>
                        {job.company} | {job.location}
                      </span>
                    </div>

                    <p className="text-muted-foreground">{job.description}</p>

                    {job.skills && (
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill) => (
                          <span key={skill} className="text-xs px-2 py-1 rounded-full bg-muted font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={containerVariants} className="space-y-6">
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-secondary" />
              <h3 className="text-2xl font-bold">Education</h3>
            </motion.div>

            <div className="relative pl-6 border-l-2 border-muted space-y-10">
              {education.map((edu) => (
                <motion.div key={edu.degree} variants={itemVariants} className="relative">
                  <div className="absolute -left-[25px] h-4 w-4 rounded-full bg-secondary"></div>

                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h4 className="text-lg font-bold">{edu.degree}</h4>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        <span>{edu.period}</span>
                      </div>
                    </div>

                    <div className="flex items-center text-sm text-muted-foreground">
                      <Building className="h-3.5 w-3.5 mr-1" />
                      <span>
                        {edu.institution} | {edu.location}
                      </span>
                    </div>

                    <p className="text-muted-foreground">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

