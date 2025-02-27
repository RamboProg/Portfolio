"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface SkillBadgeProps {
  name: string
  level: number
  index: number
}

export default function AnimatedSkillBadge({ name, level, index }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.3,
        delay: index * 0.05,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
    >
      <Card className="overflow-hidden transition-all duration-300 card-glow dark:bg-card/90">
        <CardContent className="p-4">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="font-medium">{name}</span>
              <span className="text-sm text-muted-foreground">{level}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
              <motion.div
                className="bg-primary h-2.5 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: index * 0.05 + 0.3,
                  ease: "easeOut",
                }}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

