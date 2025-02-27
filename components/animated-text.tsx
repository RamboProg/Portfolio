"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedTextProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span"
}

export default function AnimatedText({ children, className = "", delay = 0, as = "p" }: AnimatedTextProps) {
  const Component = motion[as]

  return (
    <Component
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: delay,
      }}
      className={className}
    >
      {children}
    </Component>
  )
}

