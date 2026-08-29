import { motion } from 'framer-motion'

const cities = ['MUMBAI', 'LONDON', 'DUBAI', 'NEW YORK', 'TORONTO', 'SYDNEY', 'SINGAPORE', 'DOHA']

export default function WorldReach() {
  const loop = [...cities, ...cities]

  return (
    <section className="relative bg-maroon-deep py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 grain" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.9 }}
        className="relative text-center px-6"
      >
        <span className="eyebrow text-gold-soft/80">Where Israaya Travels</span>
        <h2 className="font-display text-4xl md:text-6xl text-ivory mt-6 max-w-3xl mx-auto leading-tight">
          Made in India.
          <br />
          <span className="italic">Worn around the world.</span>
        </h2>
      </motion.div>

      <div className="relative mt-16 overflow-hidden select-none">
        <div className="flex whitespace-nowrap animate-[marquee_32s_linear_infinite]">
          {loop.map((c, i) => (
            <span
              key={i}
              className="font-display text-3xl md:text-5xl text-ivory/15 mx-8 flex items-center gap-8"
            >
              {c}
              <span className="text-gold/40 text-xl">✦</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
