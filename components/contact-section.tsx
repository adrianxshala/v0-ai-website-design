"use client"

import { Mail, MapPin, Phone } from "lucide-react"

export function ContactSection() {
  return (
    <section className="relative bg-background py-24" id="contact">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Get in Touch
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">Ready to transform your business?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Reach out to us and discover how our AI-powered solutions can
            accelerate your digital transformation.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {/* Contact cards */}
          <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-1 font-display font-bold text-card-foreground">Email Us</h3>
            <p className="text-sm text-muted-foreground">hello@shotaai.com</p>
          </div>

          <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-1 font-display font-bold text-card-foreground">Call Us</h3>
            <p className="text-sm text-muted-foreground">+1 (555) 000-0000</p>
          </div>

          <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-1 font-display font-bold text-card-foreground">Visit Us</h3>
            <p className="text-sm text-muted-foreground">San Francisco, CA</p>
          </div>
        </div>
      </div>
    </section>
  )
}
