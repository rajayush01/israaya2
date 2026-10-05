import { imgProps } from '../lib/img'
import { m } from 'framer-motion'
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
<<<<<<< HEAD
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
=======
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
>>>>>>> 2dffdd0697aed51743daed1954c1450c5b3a9ac9
          viewport={{ once: true, amount: 0.05, margin: '0px 0px 12% 0px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className={`relative aspect-[4/5] overflow-hidden ${reversed ? 'md:order-2' : ''}`}
        >
<<<<<<< HEAD
          <m.img
            initial={{ scale: 1.05 }}
=======
          <motion.img loading="eager" decoding="async"
            initial={{ scale: 1.12 }}
>>>>>>> 2dffdd0697aed51743daed1954c1450c5b3a9ac9
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.05, margin: '0px 0px 12% 0px' }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
            {...imgProps(photo, 'half')}
            alt={photoAlt}
            className="w-full h-full object-cover"
          />
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05, margin: '0px 0px 12% 0px' }}
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
        </m.div>
      </div>
    </section>
  )
}