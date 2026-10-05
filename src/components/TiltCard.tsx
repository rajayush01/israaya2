import { useRef } from 'react'
import { m, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface TiltCardProps {
  children: React.ReactNode
  className?: string
}

/** Wraps children in a subtle, spring-damped 3D tilt that follows the cursor. */
export default function TiltCard({ children, className = '' }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)

  const springCfg = { stiffness: 200, damping: 22, mass: 0.6 }
  const rotateX = useSpring(useTransform(my, [0, 1], [6, -6]), springCfg)
  const rotateY = useSpring(useTransform(mx, [0, 1], [-6, 6]), springCfg)

  const rectRef = useRef<DOMRect | null>(null)

  function handleEnter() {
    rectRef.current = ref.current?.getBoundingClientRect() ?? null
  }

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = rectRef.current
    if (!rect) return
    mx.set((e.clientX - rect.left) / rect.width)
    my.set((e.clientY - rect.top) / rect.height)
  }

  function handleLeave() {
    mx.set(0.5)
    my.set(0.5)
  }

  return (
    <m.div
      ref={ref}
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={className}
    >
      {children}
    </m.div>
  )
}
