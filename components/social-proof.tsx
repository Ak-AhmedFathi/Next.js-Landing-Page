"use client"

import { motion } from "framer-motion"

const companies = ["Stripe", "Vercel", "Notion", "Figma", "Linear", "GitLab"]

export function SocialProof() {
  return (
    <motion.section
      className="py-12 border-y border-border bg-muted/50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8">Trusted by leading companies</p>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center">
          {companies.map((company, i) => (
            <motion.div
              key={company}
              className="text-muted-foreground opacity-60 hover:opacity-100 transition-opacity font-semibold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {company}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
