"use client"

import { ExternalLink, Code, Rocket, Sparkles } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

const projects = [
  {
    id: 1,
    name: "AI-Powered Web Platform",
    description:
      "A cutting-edge web application leveraging artificial intelligence to deliver intelligent user experiences and automated workflows.",
    tech: ["Next.js", "AI/ML", "TypeScript"],
    image: "/placeholder.jpg",
    link: "#",
    icon: Sparkles,
  },
  {
    id: 2,
    name: "Enterprise Dashboard",
    description:
      "A comprehensive analytics dashboard with real-time data visualization and advanced reporting capabilities for enterprise clients.",
    tech: ["React", "Node.js", "PostgreSQL"],
    image: "/placeholder.jpg",
    link: "#",
    icon: Code,
  },
  {
    id: 3,
    name: "E-Commerce Solution",
    description:
      "A modern e-commerce platform with AI-driven recommendations, seamless checkout, and inventory management system.",
    tech: ["Next.js", "Stripe", "MongoDB"],
    image: "/placeholder.jpg",
    link: "#",
    icon: Rocket,
  },
]

export function FeaturesSection() {
  return (
    <section className="relative bg-background py-24" id="projects">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Our Work
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            Explore our portfolio of innovative solutions built with cutting-edge technology
          </p>
        </motion.div>

        <div className="grid w-full gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-primary/20 bg-primary/[0.03] shadow-[0_0_40px_-12px_rgba(0,180,255,0.1)] backdrop-blur-xl transition-all hover:border-primary/40 hover:shadow-[0_0_40px_-8px_rgba(0,180,255,0.15)] md:rounded-3xl"
            >
              {/* Project Image */}
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative flex flex-1 flex-col p-5 pt-6 sm:p-6 sm:pt-7 md:p-8 md:pt-8">
                {/* Diamond accent */}
                <svg
                  className="absolute right-5 top-5 h-12 w-12 text-primary/30 sm:right-6 sm:top-6 md:right-8 md:top-8"
                  viewBox="0 0 48 48"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path
                    d="M 8 24 L 24 8 L 40 24 L 24 40 Z"
                    strokeDasharray="1 1"
                    strokeDashoffset="0"
                    opacity="0.9"
                  />
                </svg>

                {/* Icon */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <project.icon className="h-6 w-6 text-primary" />
                </div>

                {/* Project Name */}
                <h3 className="mb-2 font-display text-lg font-bold text-foreground">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="flex items-center gap-2 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
                  <span>View Project</span>
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
