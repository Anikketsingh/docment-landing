"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does the waitlist work?",
    answer:
      "Once you join the waitlist, you'll receive a confirmation email. When we launch, waitlist members will be given priority access to the platform in the order they joined.",
  },
  {
    question: "What are the benefits of joining the waitlist?",
    answer:
      "Waitlist members get early access to the platform, exclusive pricing, priority support, and special features not available to regular users.",
  },
  {
    question: "When will the platform launch?",
    answer:
      "We're currently in the final stages of development. Waitlist members will be the first to know when we're ready to launch.",
  },
  {
    question: "Can I change my email address after joining?",
    answer:
      "Yes, you can update your email address by contacting our support team with your original signup information.",
  },
]

export function WaitlistFaq() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-[800px] space-y-8"
        >
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Common questions about our waitlist and platform</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

