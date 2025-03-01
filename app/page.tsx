"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import AnimatedSection from "@/components/animated-section"
import AnimatedText from "@/components/animated-text"
import AnimatedSkillBadge from "@/components/animated-skill-badge"
import AnimatedProjectCard from "@/components/animated-project-card"
import AnimatedExperienceItem from "@/components/animated-experience-item"
import { ThemeToggle } from "@/components/theme-toggle"
import SkillIcons from "../components/animated-skill-badge"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            <span className="text-primary">Mohamed's </span>Portfolio
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
              Experience
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="https://github.com/RamboProg" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:text-primary transition-colors group">
                <Github className="h-5 w-5 transition-all duration-300 group-hover:icon-glow" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/mohamedismailcs/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:text-primary transition-colors group">
                <Linkedin className="h-5 w-5 transition-all duration-300 group-hover:icon-glow" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="#contact">
              <Button className="transition-all duration-300 hover:scale-105">Contact Me</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container py-8 md:py-12">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-24 h-24 md:w-32 md:h-32 mb-6 rounded-full overflow-hidden border-4 border-primary"
          >
            <Image src="/professional_me_cropped.jpg?height=256&width=256" alt="Profile" fill className="object-cover" priority />
          </motion.div>
          <AnimatedText as="h1" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4" delay={0.2}>
            Hi, I'm <span className="text-primary">Mohamed Ismail</span>
          </AnimatedText>
          <AnimatedText className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-[700px]" delay={0.4}>
            Software Engineer & An Aspiring Game Developer
          </AnimatedText>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link href="#projects">
              <Button
                size="lg"
                className="transition-all duration-300 hover:scale-105 hover:shadow-lg hover:button-glow"
              >
                View My Work
              </Button>
            </Link>
            <Link href="#contact">
              <Button
                size="lg"
                variant="outline"
                className="transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:button-glow"
              >
                Get In Touch
              </Button>
            </Link>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 justify-center md:py-24 scroll-mt-16">
          <div className="justify-center md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p className="text-muted-foreground mb-4">
                Passionate software engineer with a love for problem-solving,
                clean architecture, and building engaging digital experiences.
                Always exploring new technologies and refining skills, striving for both efficiency and creativity.
                Values direct communication, practical solutions, and continuous growth.
              </p>
              <p className="text-muted-foreground mb-4">
                My journey in software development began during my highschool years, and since then, I've worked on
                various projects ranging from small e-commerce websites to complex web applications.
              </p>
              <p className="text-muted-foreground">
                When I'm not coding, you can find me exploring new technologies, playing video games or building them, refining my skills,
                and enjoying outdoor activities.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 scroll-mt-16">
          <AnimatedText as="h2" className="text-3xl font-bold mb-12 text-center">
            My Skills
          </AnimatedText>
          <SkillIcons />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-24 scroll-mt-16">
          <AnimatedText as="h2" className="text-3xl font-bold mb-12 text-center">
            Featured Projects
          </AnimatedText>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatedProjectCard
              title="E-Commerce Platform"
              description="A full-stack e-commerce application with user authentication, product management, and payment processing."
              technologies={["React", "Node.js", "MongoDB", "Stripe"]}
              imageUrl="/placeholder.svg?height=300&width=500"
              githubUrl="https://github.com"
              liveUrl="https://example.com"
              index={0}
            />
            <AnimatedProjectCard
              title="Task Management App"
              description="A responsive task management application with drag-and-drop functionality, user roles, and real-time updates."
              technologies={["Next.js", "TypeScript", "Prisma", "Socket.io"]}
              imageUrl="/placeholder.svg?height=300&width=500"
              githubUrl="https://github.com"
              liveUrl="https://example.com"
              index={1}
            />
            <AnimatedProjectCard
              title="Portfolio Website"
              description="A modern portfolio website built with Next.js and Tailwind CSS, featuring responsive design and animations."
              technologies={["Next.js", "Tailwind CSS", "Framer Motion"]}
              imageUrl="/placeholder.svg?height=300&width=500"
              githubUrl="https://github.com"
              liveUrl="https://example.com"
              index={2}
            />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 md:py-24 scroll-mt-16">
          <AnimatedText as="h2" className="text-3xl font-bold mb-12 text-center">
            Work Experience
          </AnimatedText>
          <div className="space-y-8">
            <AnimatedExperienceItem
              title="Senior Software Engineer"
              company="Tech Solutions Inc."
              period="2021 - Present"
              description="Lead the development of web applications using React and Node.js. Implemented CI/CD pipelines and mentored junior developers."
              technologies={["React", "Node.js", "AWS", "Docker"]}
              index={0}
            />
            <AnimatedExperienceItem
              title="Software Developer"
              company="Digital Innovations"
              period="2018 - 2021"
              description="Developed and maintained multiple client websites and applications. Collaborated with design and product teams to deliver high-quality solutions."
              technologies={["JavaScript", "React", "Express", "MongoDB"]}
              index={1}
            />
            <AnimatedExperienceItem
              title="Junior Developer"
              company="WebCraft Studios"
              period="2016 - 2018"
              description="Assisted in the development of responsive websites and implemented UI components based on design specifications."
              technologies={["HTML", "CSS", "JavaScript", "jQuery"]}
              index={2}
            />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-24 scroll-mt-16">
          <AnimatedText as="h2" className="text-3xl font-bold mb-12 text-center">
            Get In Touch
          </AnimatedText>
          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection>
              <p className="text-muted-foreground mb-6">
                I'm currently open to new opportunities and collaborations. Whether you have a question or just want to
                say hi, I'll do my best to get back to you!
              </p>
              <div className="space-y-4">
                <motion.div
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Mail className="h-5 w-5 text-primary transition-all duration-300 hover:icon-glow" />
                  <a href="mailto:your.email@example.com" className="hover:text-primary transition-colors">
                    m.ismail.official23@gmail.com
                  </a>
                </motion.div>
                <motion.div
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Github className="h-5 w-5 text-primary transition-all duration-300 hover:icon-glow" />
                  <a
                    href="https://github.com/RamboProg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    github.com/RamboProg
                  </a>
                </motion.div>
                <motion.div
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Linkedin className="h-5 w-5 text-primary transition-all duration-300 hover:icon-glow" />
                  <a
                    href="https://linkedin.com/in/mohamedismailcs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    linkedin.com/in/mohamedismailcs
                  </a>
                </motion.div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <form
                action="https://formsubmit.co/m.ismail.official23@gmail.com"
                method="POST"
                className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full px-3 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-3 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full px-3 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                    placeholder="Subject"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-3 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                    placeholder="Your message..."
                  />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    className="w-full transition-all duration-300 hover:shadow-lg hover:button-glow"
                  >
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </AnimatedSection>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <motion.div whileHover={{ y: -3 }}>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:text-primary transition-colors group">
                  <Github className="h-5 w-5 transition-all duration-300 group-hover:icon-glow" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -3 }}>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:text-primary transition-colors group">
                  <Linkedin className="h-5 w-5 transition-all duration-300 group-hover:icon-glow" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -3 }}>
              <Link href="mailto:your.email@example.com">
                <Button variant="ghost" size="icon" className="hover:text-primary transition-colors group">
                  <Mail className="h-5 w-5 transition-all duration-300 group-hover:icon-glow" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  )
}

