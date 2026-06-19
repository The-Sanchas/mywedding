'use client'

import { motion, type Variants } from 'framer-motion'

interface Props {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  delay?: number
  /** Use a faster, shorter ease for timeline items etc. */
  fast?: boolean
}

function makeVariants(duration: number, y: number, ease: number[] | string, delay: number): Variants {
  return {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, ease, delay },
    },
  }
}

export default function RevealDiv({ children, className, style, delay = 0, fast = false }: Props) {
  const variants = fast
    ? makeVariants(0.8, 24, 'easeOut', delay)
    : makeVariants(1.1, 44, [0.2, 0.7, 0.2, 1], delay)

  return (
    <motion.div
      className={className}
      style={style}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10% 0px' }}
    >
      {children}
    </motion.div>
  )
}
