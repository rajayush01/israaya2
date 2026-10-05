import { m, useScroll } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleY = scrollYProgress

  return (
    <div
      className="hidden lg:block fixed right-7 top-1/2 -translate-y-1/2 z-40 h-40 w-px"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-ink/10" />
      <m.div
        className="absolute inset-x-0 top-0 bottom-0 bg-gold origin-top"
        style={{ scaleY }}
      />
    </div>
  )
}
