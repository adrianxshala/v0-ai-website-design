export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">S</span>
              </div>
              <span className="font-display text-lg font-bold text-foreground">
                Shota AI
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Empowering businesses through intelligent solutions and
              cutting-edge technology.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Solutions</h4>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Web Development</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">AI Integration</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Automation</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Consulting</a></li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Platform</h4>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Documentation</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">API Reference</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Pricing</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Status</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Company</h4>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">About</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Careers</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Blog</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            {"2026 Shota AI. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  )
}
