"use client"

import { motion } from "framer-motion"
import { Search, PenTool, Code2, Rocket, HeartHandshake } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Discovery & Strategy",
    desc: "We dive deep into your goals, audience, and competition to create a roadmap for success.",
  },
  {
    icon: PenTool,
    title: "Design & Prototyping",
    desc: "Interactive mockups and visual designs crafted to align with your brand and user expectations.",
  },
  {
    icon: Code2,
    title: "Development & Testing",
    desc: "Clean, performant code built with modern frameworks. Rigorous testing at every stage.",
  },
  {
    icon: Rocket,
    title: "Launch & Optimization",
    desc: "Seamless deployment with performance monitoring, SEO optimization, and analytics setup.",
  },
  {
    icon: HeartHandshake,
    title: "Support & Growth",
    desc: "Ongoing maintenance, feature updates, and strategic guidance to keep you ahead.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="relative bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            How We Work
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Our Proven{" "}
            <span
              className="inline-block bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(120deg, hsl(199 89% 48%), hsl(187 85% 55%), hsl(199 89% 48%))",
                backgroundSize: "200% auto",
              }}
            >
              Process
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            A structured approach that delivers consistent, high-quality results every time.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative mb-12 flex items-start last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Icon circle */}
              <div
                className="absolute left-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full shadow-lg md:left-1/2"
                style={{
                  background: "linear-gradient(120deg, hsl(199 89% 48%), hsl(187 85% 55%))",
                  boxShadow: "0 4px 20px rgba(0, 180, 255, 0.3)",
                }}
              >
                <step.icon className="h-5 w-5 text-primary-foreground" />
              </div>

              {/* Content */}
              <div
                className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${
                  i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                }`}
              >
                <span className="text-xs font-bold uppercase tracking-wide text-primary">
                  Step {i + 1}
                </span>
                <h3 className="mt-1 mb-2 font-display text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: steps.length * 0.1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-6 py-3 text-sm font-medium text-primary shadow-sm">
            <Rocket className="h-4 w-4" />
            Typical project timeline: 4–8 weeks
          </div>
        </motion.div>
      </div>
    </section>
  )
}
