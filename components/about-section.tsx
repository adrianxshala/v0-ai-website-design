import { Shield, Cpu, BarChart3, Users } from "lucide-react"

const stats = [
  { icon: Shield, value: "99.9%", label: "Uptime" },
  { icon: Cpu, value: "50+", label: "AI Models" },
  { icon: BarChart3, value: "10x", label: "Faster Delivery" },
  { icon: Users, value: "500+", label: "Clients Worldwide" },
]

export function AboutSection() {
  return (
    <section className="relative bg-secondary py-24" id="about">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              About Us
            </p>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              <span className="text-balance">
                Building the future with intelligent solutions
              </span>
            </h2>
            <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">
              We combine cutting-edge artificial intelligence with modern web
              technologies to create transformative solutions that drive
              business growth and innovation across industries.
            </p>
            <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
              Our team of experts specializes in machine learning, natural
              language processing, and scalable web architecture to deliver
              solutions that exceed expectations.
            </p>
          </div>

          {/* Right - stats grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-8 text-center"
              >
                <stat.icon className="mb-3 h-8 w-8 text-primary" />
                <span className="font-display text-3xl font-bold text-foreground">
                  {stat.value}
                </span>
                <span className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
