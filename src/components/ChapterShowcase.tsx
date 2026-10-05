import { motion } from 'framer-motion'
import ChapterCard from './ChapterCard'
import { nikhaarCollection } from '../data/collection'

export default function ChapterShowcase() {
  return (
    <section id="collection" className="relative bg-ink">
      <div className="px-6 md:px-10 pt-24 pb-14 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05, margin: '0px 0px 12% 0px' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <span className="eyebrow text-gold">The Collection</span>
            <h2 className="font-display text-5xl md:text-6xl text-ivory mt-4">Nikhaar</h2>
          </div>
          <p className="font-body text-ivory/55 max-w-sm text-[15px] leading-relaxed">
            A first chapter told in four pieces — each one worked by hand, numbered in the order
            it was made rather than the order it will be worn.
          </p>
        </motion.div>
      </div>

      <div className="divide-y divide-gold/15">
        {nikhaarCollection.map((piece, i) => (
          <ChapterCard key={piece.number} piece={piece} index={i} />
        ))}
      </div>
    </section>
  )
}
