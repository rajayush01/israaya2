import { motion } from 'framer-motion'
import Flourish from './Flourish'

const values = [
  {
    title: 'Built by the hands we build around',
    body: 'Israaya exists because of the karigars who make it. Every decision, from technique to timeline, is shaped around giving their craft the space and respect it has always deserved.',
  },
  {
    title: 'Made to order, not made to sit',
    body: 'Nothing is produced until it is ordered. Every piece is cut, fitted and finished for one person.',
  },
  {
    title: 'Time is part of the design',
    body: 'Every piece carries the time intention takes to get right, not the time a deadline allows. We build slowly on purpose, because craftsmanship rushed is craftsmanship compromised.',
  },
  {
    title: 'Custom made for every body',
    body: 'Standard sizing was never the standard here. Every piece is available in a full size range with custom measurements on request, because fit should never be the reason a woman goes without.',
  },
  {
    title: 'India on the global stage',
    body: 'We build with the belief that Indian craft belongs at the same table as the world\u2019s finest maisons, not referenced from a distance but recognised outright.',
  },
  {
    title: 'Craft as opportunity',
    body: 'Every order supports the women and karigar families behind it, and we are building toward deeper partnerships in education and craft preservation so that opportunity extends further than one order at a time.',
  },
]

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Values() {
  return (
    <section className="relative bg-sand py-28 md:py-36 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-16 md:mb-20"
        >
          <span className="eyebrow text-maroon/60">Our Values</span>
          <h2 className="font-display text-4xl md:text-5xl text-ink mt-5 leading-tight">
            What every piece
            <span className="italic text-maroon"> is built on.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-x-8 md:gap-y-14">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fade}
            >
              <Flourish className="w-8 h-6 text-gold-deep mb-5" />
              <h3 className="font-display text-xl md:text-2xl text-ink mb-3 leading-snug">
                {v.title}
              </h3>
              <p className="font-body text-[15px] leading-relaxed text-ink/60">{v.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
