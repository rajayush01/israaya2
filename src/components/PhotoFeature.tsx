import { motion } from 'framer-motion'
import Flourish from './Flourish'

interface PhotoFeatureProps {
  photo: string
  photoAlt: string
  eyebrow: string
  title: string
  paragraphs: string[]
  reversed?: boolean
  tone?: 'ivory' | 'sand'
}

export default function PhotoFeature({
  photo,
  photoAlt,
  eyebrow,
  title,
  paragraphs,
  reversed = false,
  tone = 'ivory',
}: PhotoFeatureProps) {
  return (
    <section className={`relative ${tone === 'ivory' ? 'bg-ivory' : 'bg-sand'} py-24 md:py-32 px-6 md:px-10`}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <motion.div
          initial={{ clipPath: 'inset(0 0 100% 0)' }}
          whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
          className={`relative aspect-[4/5] overflow-hidden ${reversed ? 'md:order-2' : ''}`}
        >
          <motion.img
            initial={{ scale: 1.15 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            src={photo}
            alt={photoAlt}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <Flourish className="w-9 h-7 text-gold-deep mb-6" />
          <span className="eyebrow text-maroon/60">{eyebrow}</span>
          <h2 className="font-display text-4xl md:text-5xl text-ink mt-4 mb-6 leading-tight">
            {title}
          </h2>
          <div className="space-y-4 max-w-md">
            {paragraphs.map((p, i) => (
              <p key={i} className="font-body text-[15px] md:text-base leading-relaxed text-ink/65">
                {p}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
