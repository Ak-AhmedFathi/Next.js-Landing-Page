"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Zap, Shield, Users, BarChart3, Inbox, GitBranch } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience blazing-fast performance with our optimized infrastructure and real-time sync.",
  },
  {
    icon: Shield,
    title: "Bank-Level Security",
    description: "Your data is protected with enterprise-grade encryption and compliance standards.",
  },
  {
    icon: Users,
    title: "Seamless Collaboration",
    description: "Work together in real-time with built-in communication and commenting features.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Get detailed insights with powerful dashboards and customizable reports.",
  },
  {
    icon: Inbox,
    title: "Smart Notifications",
    description: "Stay informed with intelligent alerts that matter to you, not noise.",
  },
  {
    icon: GitBranch,
    title: "Integrations",
    description: "Connect with 500+ tools seamlessly to automate your workflow.",
  },
]

export function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Features that matter</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build, manage, and scale your project
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full p-6 border border-border hover:shadow-lg hover:border-primary/20 transition-all bg-background">
                  <div className="mb-4 p-3 bg-primary/10 w-fit rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
