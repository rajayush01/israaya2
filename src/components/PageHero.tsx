import { motion } from 'framer-motion'
import Flourish from './Flourish'

interface PageHeroProps {
  eyebrow: string
  title: string
  subtitle?: string
  photo?: string
  photoAlt?: string
}

export default function PageHero({ eyebrow, title, subtitle, photo, photoAlt = '' }: PageHeroProps) {
  return (
    <section className="relative min-h-[62vh] md:min-h-[68vh] w-full overflow-hidden bg-maroon-deep flex items-end">
      {photo && (
        <motion.div
          initial={{ scale: 1.1, opacity: 0.7 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img src={photo} alt={photoAlt} className="w-full h-full object-cover" />
        </motion.div>
      )}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(46,10,17,0.35) 0%, rgba(46,10,17,0.55) 55%, rgba(46,10,17,0.92) 100%)',
        }}
      />
      <div className="absolute inset-0 grain" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className="relative z-10 w-full px-6 md:px-10 pb-14 md:pb-20 pt-32"
      >
        <div className="max-w-7xl mx-auto">
          <Flourish className="w-9 h-7 text-gold mb-6" />
          <span className="eyebrow text-gold-soft">{eyebrow}</span>
          <h1 className="font-display text-5xl md:text-7xl text-ivory mt-4 leading-[0.95]">
            {title}
          </h1>
          {subtitle && (
            <p className="font-display italic text-lg md:text-xl text-ivory/70 mt-5 max-w-lg">
              {subtitle}
            </p>
          )}
        </div>
      </motion.div>
    </section>
  )
}
