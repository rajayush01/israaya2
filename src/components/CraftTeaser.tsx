import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import Flourish from './Flourish'
import SplitReveal from './SplitReveal'
import { photos } from '../data/photos'

export default function CraftTeaser() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section ref={ref} className="relative bg-ivory py-24 md:py-36 px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="relative aspect-[4/5] overflow-hidden order-2 md:order-1">
          <motion.div style={{ y }} className="absolute inset-0 -top-[10%] -bottom-[10%]">
            <img
              src={photos.needleMacro}
              alt="Macro photograph of a sewing needle mid-stitch"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="order-1 md:order-2">
          <Flourish className="w-9 h-7 text-gold-deep mb-6" />
          <span className="eyebrow text-maroon/60">The Craft</span>
          <SplitReveal
            text="Worked by hand, across weeks not hours."
            className="font-display text-4xl md:text-5xl text-ink mt-4 mb-6 leading-[1.08]"
          />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-body text-[15px] md:text-base leading-relaxed text-ink/60 max-w-md mb-8"
          >
            Resham thread, hand-set pearls, motifs chosen for what they mean rather than how they
            photograph. Every technique on an Israaya piece is done by hand, start to finish.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <Link
              to="/craft"
              className="eyebrow text-maroon hover:text-gold-deep transition-colors border-b border-maroon/30 hover:border-gold-deep pb-1"
            >
              Explore the Craft
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
