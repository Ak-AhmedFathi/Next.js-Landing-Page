"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Zap, Rocket } from "lucide-react"

const steps = [
  {
    icon: CheckCircle2,
    title: "Sign Up in Seconds",
    description: "Create your account and invite your team members instantly.",
  },
  {
    icon: Zap,
    title: "Setup Your Workspace",
    description: "Configure your projects and connect your favorite tools.",
  },
  {
    icon: Rocket,
    title: "Start Collaborating",
    description: "Begin working with your team and ship faster than ever.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How it works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Get started in three simple steps</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={i}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Connector Line */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[calc(50%+2rem)] right-[calc(-50%-2rem)] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}

                <div className="relative z-10 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-full">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-2xl font-bold text-primary">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
