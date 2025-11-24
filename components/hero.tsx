"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" />
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" />
      </div>

      <motion.div
        className="w-full max-w-7xl px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div variants={itemVariants} className="inline-block">
              <span className="px-3 py-1 bg-primary-light text-primary text-sm font-medium rounded-full">
                ✨ The Future of Workflow
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-6xl lg:text-7xl font-bold tracking-tight text-foreground"
            >
              <span className="text-balance">
                Work faster,{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  together
                </span>
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg lg:text-xl text-muted-foreground max-w-lg">
              ModernFlow brings your team together with the tools you need to collaborate seamlessly and ship faster
              than ever.
            </motion.p>

            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2">
                Start Free Trial <ArrowRight size={16} />
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Dashboard Preview */}
          <motion.div
            variants={itemVariants}
            className="relative hidden lg:block h-96 lg:h-screen lg:max-h-96 rounded-2xl border border-border bg-muted overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="space-y-4 w-full h-full p-8">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-border rounded w-3/4" />
                  <div className="h-4 bg-border rounded w-1/2" />
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-24 bg-border rounded-lg" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
