import { Building2, Briefcase, Hotel, ShoppingBag, Stethoscope, TrainFront } from "lucide-react"

const industries = [
  {
    icon: ShoppingBag,
    name: "Retail & e‑commerce",
    description: "Standardize vendor, franchise, and partner contracts while keeping every transaction traceable.",
  },
  {
    icon: Briefcase,
    name: "Financial services",
    description: "Automate loan, advisory, and vendor paperwork with full audit trails and approval flows.",
  },
  {
    icon: Hotel,
    name: "Real estate & housing",
    description: "Generate tenancy, lease, and facility agreements that stay consistent across locations.",
  },
  {
    icon: Stethoscope,
    name: "Healthcare",
    description: "Manage consent forms, panel agreements, and supplier contracts with governed templates.",
  },
  {
    icon: TrainFront,
    name: "Logistics & mobility",
    description: "Digitize fleet, vendor, and partner contracts with clear SLAs and escalation paths.",
  },
  {
    icon: Building2,
    name: "Enterprises & startups",
    description: "From NDAs to MSAs, keep every agreement on-brand, compliant, and centrally searchable.",
  },
]

export function IndustriesSection() {
  return (
    <section id="industries" className="relative bg-white/40 py-24 md:py-28">
      <div className="container relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 max-w-2xl space-y-4">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Built for the real world
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Built for the unique needs of{" "}
            <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
              high‑volume, B2C businesses
            </span>
          </h2>
          <p className="text-base text-muted-foreground md:text-lg">
            Whether it&apos;s a one–time affidavit or millions of recurring agreements, Docment keeps
            contracts consistent, compliant, and discoverable across products, channels, and regions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-background/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex flex-col gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <industry.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold md:text-lg">{industry.name}</h3>
                <p className="text-sm text-muted-foreground md:text-[0.95rem]">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

