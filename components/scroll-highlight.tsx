"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { FileText, Shield, AlertTriangle, Clock, CheckCircle, BanknoteIcon, XCircle, Sparkles } from "lucide-react"

const stories = [
  {
    icon: AlertTriangle,
    variant: "warning" as const,
    title: "A Costly Mistake: The Risk of Undocumented Transactions",
    content: "Ajay from our college purchased a phone via OLX, only to receive a police call 20 days later—the phone was reported stolen. The seller? Vanished without a trace.",
  },
  {
    icon: Shield,
    variant: "info" as const,
    content: "Don't let this happen to you. Protect your transactions with docment.ai—verify parties, document deals, and generate legally binding contracts in minutes. Stay secure. Stay documented.",
  },
  {
    icon: FileText,
    variant: "primary" as const,
    title: "Skip the Hassle. Get Legally Valid Documents in Minutes",
    content: "Gauri, a newly enrolled student at Miranda House, needed to submit an affidavit for her department and hostel. She took a 30-minute ride to the nearest notary, only to wait over an hour—only to find an error in the typing.",
  },
  {
    icon: Clock,
    variant: "info" as const,
    content: "With docment.ai, she could have generated a legally valid affidavit instantly, error-free and hassle-free. Save time, avoid errors, and get your documents done in minutes!",
  },
  {
    icon: BanknoteIcon,
    variant: "warning" as const,
    title: "Lend Smart. Stay Protected.",
    content: "Aniket lent ₹1 Lakh to his colleague Sumit in an emergency, backed by a cheque for repayment. When the time came, the cheque was dishonored. In court, Sumit denied the debt, spinning a false narrative to escape liability.",
  },
  {
    icon: XCircle,
    variant: "danger" as const,
    title: "The Reality:",
    list: ["8–10 court hearings just to prove the debt", "₹40,000+ in litigation costs", "Minimal chance of recovery"],
  },
  {
    icon: CheckCircle,
    variant: "success" as const,
    title: "The Solution – docment.ai",
    content: "With docment.ai, Aniket could have generated a legally binding contract in minutes, detailing:",
    list: ["Purpose of transfer – Debt", "Mode of transfer – UPI/NEFT/RTGS", "Mode of recovery – Cheque (with a photo attached)"],
  },
  {
    icon: Sparkles,
    variant: "primary" as const,
    title: "The Impact:",
    impact: [
      { num: 1, text: "Prevents disputes – Clear documentation deters defaults" },
      { num: 2, text: "Speeds up legal claims – Transaction particulars are proven in the first hearing" },
      { num: 3, text: "Cuts litigation costs by 70% – Faster resolution, lower expenses" },
    ],
  },
]

const variantColors = {
  warning: "text-amber-600",
  success: "text-emerald-600",
  info: "text-blue-600",
  danger: "text-red-600",
  primary: "text-primary",
}

function StoryBlock({
  story,
  index,
}: {
  story: (typeof stories)[number]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    margin: "-15% 0px -15% 0px",
    amount: 0.4,
    once: false,
  })
  const Icon = story.icon
  const colorClass = variantColors[story.variant]

  return (
    <motion.div
      ref={ref}
      key={index}
      className={`flex gap-6 rounded-xl px-4 py-3 -mx-4 transition-colors duration-300 ${
        isInView ? "bg-primary/[0.06]" : ""
      }`}
      initial={false}
      animate={{
        opacity: isInView ? 1 : 0.65,
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className={`mt-1.5 shrink-0 rounded-full p-3 transition-colors duration-300 ${isInView ? "bg-primary/15" : "bg-gray-100/80"} ${colorClass}`}>
        <Icon className="h-5 w-5 md:h-6 md:w-6" />
      </div>
      <div className="min-w-0 flex-1 space-y-3">
        {story.title && (
          <h3 className={`text-lg font-semibold tracking-tight md:text-xl leading-snug transition-colors duration-300 ${isInView ? "text-gray-900" : "text-gray-700"}`}>
            {story.title}
          </h3>
        )}
        {story.content && (
          <p className={`text-base leading-[1.75] md:text-[1.0625rem] transition-colors duration-300 ${isInView ? "text-gray-800" : "text-gray-600"}`}>
            {story.content}
          </p>
        )}
        {story.list && (
          <ul className={`list-disc space-y-2 pl-5 text-base leading-[1.75] md:text-[1.0625rem] transition-colors duration-300 ${isInView ? "text-gray-800" : "text-gray-600"}`}>
            {story.list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
        {story.impact && (
          <ol className="mt-3 space-y-3">
            {story.impact.map((item) => (
              <li
                key={item.num}
                className={`relative pl-10 text-base leading-[1.75] md:text-[1.0625rem] transition-colors duration-300 ${isInView ? "text-gray-800" : "text-gray-600"}`}
              >
                <span className="absolute left-0 top-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {item.num}
                </span>
                {item.text}
              </li>
            ))}
          </ol>
        )}
      </div>
    </motion.div>
  )
}

export function ScrollHighlight() {
  return (
    <section id="get-real" className="relative overflow-hidden bg-white/40 py-28 md:py-36">
      <div className="mx-auto max-w-[75vw] px-4 md:px-8 relative z-10">
        {/* Section title – Watch docment.ai in action */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Watch docment.ai in action
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            See how contracts are created in minutes
          </p>
        </motion.div>

        {/* Arcade embed */}
        <div className="mb-16 w-full" style={{ position: "relative", paddingBottom: "calc(62.5% + 41px)", height: 0, width: "100%" }}>
          <iframe
            src="https://demo.arcade.software/1fkdXSNHjOfkvQZdl6bi?embed&embed_mobile=inline&embed_desktop=inline&show_copy_link=true"
            title="Arcade Flow (Sun May 18 2025)"
            frameBorder="0"
            loading="lazy"
            allow="clipboard-write; fullscreen"
            className="rounded-2xl"
        style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              colorScheme: "light",
            }}
          />
        </div>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="inline-block mb-4 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Real Stories
          </span>
          <h2 className="mb-5 font-serif text-4xl font-medium tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Experiences That Matter
          </h2>
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-gray-600 md:text-xl">
            See how docment.ai prevents costly mistakes and protects your interests
          </p>
        </motion.div>

        {/* Single container – each story highlights when in view */}
        <div className="mx-auto w-full max-w-[75vw] rounded-2xl border border-gray-200/90 bg-white px-8 py-12 shadow-xl md:px-16 md:py-16">
          <div className="space-y-12 font-[var(--font-inter)]">
            {stories.map((story, index) => (
              <StoryBlock key={index} story={story} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
