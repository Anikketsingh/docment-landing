"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

const faqs = [
  {
    question: "How does the AI contract generation work?",
    answer:
      "Our AI analyzes your requirements and generates legally compliant contracts using advanced natural language processing, ensuring all necessary clauses are included.",
  },
  {
    question: "Is the e-KYC process secure?",
    answer:
      "Yes, our e-KYC process uses bank-grade security measures and complies with all relevant data protection regulations.",
  },
  {
    question: "Are the contracts legally binding?",
    answer:
      "Yes, all contracts generated through our platform are legally binding and comply with digital signature laws in supported jurisdictions.",
  },
  {
    question: "How long does the process take?",
    answer:
      "Most contracts can be generated, verified, and executed within minutes, depending on the complexity and verification requirements.",
  },
]

export function FaqSection() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-muted-foreground text-lg">Everything you need to know about Docment</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible>
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

