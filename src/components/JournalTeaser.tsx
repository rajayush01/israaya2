import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { imgProps } from '../lib/img'
import { m, useScroll, useTransform } from 'framer-motion'
import Flourish from './Flourish'
import SplitReveal from './SplitReveal'
import { photos } from '../data/photos'

export default function JournalTeaser() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section ref={ref} className="relative bg-sand py-24 md:py-36 px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <Flourish className="w-9 h-7 text-gold-deep mb-6" />
          <span className="eyebrow text-maroon/60">The Journal</span>
          <SplitReveal
            text="Notes on memory, occasion, and building for both."
            className="font-display text-4xl md:text-5xl text-ink mt-4 mb-6 leading-[1.08]"
          />
          <m.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05, margin: '0px 0px 12% 0px' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-body text-[15px] md:text-base leading-relaxed text-ink/60 max-w-md mb-8"
          >
            A piece has to work twice — once in photographs, and once in the room itself, under
            whatever light the evening actually has. We write about what that means for how we
            build.
          </m.p>
          <m.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05, margin: '0px 0px 12% 0px' }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <Link
              to="/journal"
              className="eyebrow text-maroon hover:text-gold-deep transition-colors border-b border-maroon/30 hover:border-gold-deep pb-1"
            >
              Read the Journal
            </Link>
          </m.div>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden">
          <m.div style={{ y }} className="absolute inset-0 -top-[10%] -bottom-[10%]">
            <img
              {...imgProps(photos.journalTeaser, 'half')}
              alt="Israaya, from the journal"
              className="w-full h-full object-cover"
            />
          </m.div>
        </div>
      </div>
    </section>
  )
}
