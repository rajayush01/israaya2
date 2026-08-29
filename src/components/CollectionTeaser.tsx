import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { nikhaarCollection } from '../data/collection'
import SplitReveal from './SplitReveal'
import TiltCard from './TiltCard'

export default function CollectionTeaser() {
  const featured = nikhaarCollection.slice(0, 2)

  return (
    <section className="relative bg-ink py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <span className="eyebrow text-gold">Chapter I</span>
            <SplitReveal
              text="Nikhaar"
              className="font-display text-5xl md:text-6xl text-ivory mt-4"
            />
          </div>
          <Link
            to="/collection"
            className="eyebrow text-ivory/60 hover:text-gold-soft transition-colors border-b border-ivory/20 hover:border-gold-soft pb-1 w-fit"
          >
            View the Full Collection
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {featured.map((piece, i) => (
            <motion.div
              key={piece.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to="/collection" className="group block">
                <TiltCard className="relative aspect-[4/5] overflow-hidden mb-5">
                  <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
                    <img
                      src={piece.photo}
                      alt={piece.photoAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div
                    className="absolute inset-0 mix-blend-multiply"
                    style={{
                      background: `linear-gradient(150deg, ${piece.swatch[0]} 0%, ${piece.swatch[1]} 65%, ${piece.swatch[1]} 100%)`,
                      opacity: 0.6,
                    }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(0deg, rgba(0,0,0,0.35) 0%, transparent 40%)' }}
                  />
                  <div className="absolute inset-0 grain" />
                  <span className="absolute bottom-5 right-6 font-display text-6xl text-white/25 select-none">
                    {piece.number}
                  </span>
                </TiltCard>
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-2xl text-ivory group-hover:text-gold-soft transition-colors">
                    {piece.name}
                  </h3>
                  <span className="eyebrow text-ivory/40">{piece.chapter}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
