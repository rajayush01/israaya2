import { motion } from 'framer-motion'
import Flourish from './Flourish'
import { photos } from '../data/photos'

const techniques = [
  {
    title: 'Resham Thread',
    body: 'The base of nearly every piece — silk thread worked by hand in long, patient rows until the motif sits slightly raised off the fabric.',
    photo: photos.technique1,
    alt: 'Resham thread work on an Israaya piece',
  },
  {
    title: 'Pearl & Sequin Work',
    body: 'Added after the thread work is done, one pass at a time, so the shine never overwhelms the motif underneath it.',
    photo: photos.technique2,
    alt: 'Pearl and sequin work on an Israaya piece',
  },
  {
    title: 'Motif & Memory',
    body: 'Peacocks, gardens, birds in flight — each motif is chosen for what it represents, then placed so it only reveals itself in movement.',
    photo: photos.technique3,
    alt: 'Motif detail on an Israaya piece',
  },
]

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Craft() {
  return (
    <section className="relative bg-sand py-28 md:py-36 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05, margin: '0px 0px 12% 0px' }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-16 md:mb-20"
        >
          <span className="eyebrow text-maroon/60">The Craft</span>
          <h2 className="font-display text-4xl md:text-5xl text-ink mt-5 leading-tight">
            Worked by hand,
            <span className="italic text-maroon"> across weeks, not hours.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {techniques.map((t, i) => (
            <motion.div
              key={t.title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.05, margin: '0px 0px 12% 0px' }}
              variants={fade}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <img loading="eager" decoding="async"
                  src={t.photo}
                  alt={t.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 grain" />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(180deg, rgba(62,16,25,0.15) 0%, transparent 45%)' }}
                />
              </div>
              <Flourish className="w-8 h-6 text-gold-deep mb-5 transition-transform duration-500 group-hover:-translate-y-1" />
              <h3 className="font-display text-2xl text-ink mb-3">{t.title}</h3>
              <p className="font-body text-[15px] leading-relaxed text-ink/60">{t.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
