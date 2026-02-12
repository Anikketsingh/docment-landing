function DemoLogo({ label }: { label: string }) {
  return (
    <div className="flex h-7 w-24 items-center justify-center rounded-md bg-muted/80 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
      {label}
    </div>
  )
}

export function TrustSection() {
  return (
    <section className="border-y border-gray-200/50 bg-white/60 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Trusted by modern teams
            </p>
            <p className="max-w-md text-sm text-muted-foreground">
              Docment is built for teams that need contracts to move as fast as their business, while
              staying compliant and audit-ready.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 md:justify-end">
            <DemoLogo label="FINTECH" />
            <DemoLogo label="RETAIL" />
            <DemoLogo label="LEGAL OPS" />
          </div>
        </div>
      </div>
    </section>
  )
}

