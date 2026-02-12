import { Globe, Brain, Zap } from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Constructing your exact and concurrent team-matching solutions including web development, user interfaces, and enterprise applications.",
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description:
      "Empowering web search systems, natural language processing, artificial intelligence, and hybrid innovation with AI-driven insights.",
  },
  {
    icon: Zap,
    title: "Innovation & Automation",
    description:
      "Innovative automation enables and provides targeted innovation and efficiency, with multi-tier scheduled automated systems.",
  },
]

export function FeaturesSection() {
  return (
    <section className="relative bg-background py-24" id="platform">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 font-display text-lg font-bold text-card-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
