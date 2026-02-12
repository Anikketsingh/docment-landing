import { CheckCircle2, Database, Lock, ShieldCheck, Workflow, BarChart3 } from "lucide-react"

const platformPoints = [
  {
    icon: ShieldCheck,
    title: "Enterprise‑grade security",
    description:
      "Encryption in transit and at rest, granular access controls, and audited activity trails for every contract action.",
  },
  {
    icon: Lock,
    title: "Privacy by design",
    description:
      "Sensitive personal identifiers stay in your governed data stores while Docment works over a secure abstraction layer.",
  },
  {
    icon: Database,
    title: "Single source of truth",
    description:
      "Turn scattered PDFs and email threads into a structured contract graph that connects people, products, and policies.",
  },
  {
    icon: Workflow,
    title: "Powerful guardrails",
    description:
      "Policy‑driven templates, approvals, and clause libraries keep every agreement on‑brand and on‑policy—by default.",
  },
  {
    icon: CheckCircle2,
    title: "Hallucination‑resistant AI",
    description:
      "Responses are grounded in your approved templates and playbooks so legal, ops, and compliance can trust what ships.",
  },
  {
    icon: BarChart3,
    title: "Insights & telemetry",
    description:
      "Track cycle times, bottlenecks, and completion rates so legal, CX, and product teams can see what’s really happening.",
  },
]

export function PlatformSection() {
  return (
    <section id="platform" className="relative bg-white/40 py-24 md:py-28">
      <div className="container relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 max-w-3xl space-y-4">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Platform your legal &amp; IT will trust
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Enterprise‑ready AI that
            <span className="block bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
              fits into your existing stack
            </span>
          </h2>
          <p className="text-base text-muted-foreground md:text-lg">
            Docment layers on top of your current tools to automate contracts without creating shadow systems or
            compliance blind spots.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {platformPoints.map((point) => (
            <div
              key={point.title}
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-background/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex gap-4">
                <div className="mt-1 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <point.icon className="h-4 w-4" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold md:text-base">{point.title}</h3>
                  <p className="text-xs text-muted-foreground md:text-sm">{point.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

