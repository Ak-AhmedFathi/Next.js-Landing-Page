"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How do I get started with ModernFlow?",
    answer:
      "Simply sign up for a free account, invite your team members, and start creating projects. You'll be up and running in minutes with our guided onboarding.",
  },
  {
    question: "Can I switch plans anytime?",
    answer:
      "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any charges or credits.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use bank-level encryption, comply with GDPR and SOC 2, and perform regular security audits. Your data is your data.",
  },
  {
    question: "Do you offer customer support?",
    answer:
      "Yes! Starter plans get email support, Professional plans get priority support, and Enterprise plans get 24/7 support with a dedicated account manager.",
  },
  {
    question: "Can I integrate ModernFlow with other tools?",
    answer:
      "Definitely! We support integrations with 500+ popular tools including Slack, GitHub, Figma, Jira, and more. Custom integrations available for Enterprise.",
  },
  {
    question: "What happens if I cancel my subscription?",
    answer:
      "You can export all your data at any time. We'll give you 30 days to retrieve everything after cancellation. No vendor lock-in.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently asked questions</h2>
          <p className="text-lg text-muted-foreground">Everything you need to know about ModernFlow</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-b border-border">
                <AccordionTrigger className="text-left hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
