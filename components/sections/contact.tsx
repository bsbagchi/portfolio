"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Mail, MapPin, Phone, MessageSquare, Github, Linkedin, Twitter } from "lucide-react"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const handleChange = (e:any) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e:any) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset submission status after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 1500)
  }

  return (
    <section id="contact" className="section-container bg-muted/30">
      <motion.div ref={ref} initial="hidden" animate={controls} variants={containerVariants} className="space-y-10">
        <div className="text-center space-y-4">
          <motion.h2 variants={itemVariants} className="section-title">
            Get In Touch
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle max-w-2xl mx-auto">
            Let's build something awesome together
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div variants={containerVariants} className="space-y-8">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-muted-foreground">
                I'm interested in freelance opportunities – especially ambitious or large projects. However, if you have
                other request or question, don't hesitate to contact me.
              </p>
            </motion.div>

            <motion.div variants={containerVariants} className="space-y-4">
              {[
                {
                  icon: <Mail className="h-5 w-5" />,
                  text: "brotisunder9@gmail.com.com",
                  href: "mailto:brotisunder9@gmail.com",
                },
                { icon: <Phone className="h-5 w-5" />, text: "+91 7646870428", href: "tel:+917646870428" },
                { icon: <MapPin className="h-5 w-5" />, text: "Ahmedabad, India", href: "https://maps.app.goo.gl/83QwWpaZSame2eqz6" },
              ].map((item) => (
                <motion.a
                  key={item.text}
                  href={item.href}
                  variants={itemVariants}
                  className="flex items-center gap-4 p-4 rounded-lg border bg-background hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <span>{item.text}</span>
                </motion.a>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
              <div className="flex gap-3">
                {[
                  { icon: <Github className="h-5 w-5" />, href: "https://github.com/bsbagchi", label: "GitHub" },
                  { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/broti-sunder-bagchi-aa46b623a/", label: "LinkedIn" },
                  { icon: <Twitter className="h-5 w-5" />, href: "https://x.com/BrotiSunder", label: "Twitter" },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-background border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                    aria-label={item.label}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="bg-background border rounded-xl p-6 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                <span>Send Me a Message</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="Subject of your message"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent"></div>
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>Message Sent Successfully!</>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

