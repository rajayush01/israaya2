import { motion } from 'framer-motion'
import Flourish from './Flourish'
import type { ChapterPiece } from '../data/collection'

export default function ChapterCard({ piece, index }: { piece: ChapterPiece; index: number }) {
  const reversed = index % 2 === 1

  return (
    <div
      className={`grid md:grid-cols-2 items-stretch min-h-[560px] md:min-h-[640px] ${
        reversed ? 'md:[&>*:first-child]:order-2' : ''
      }`}
    >
      {/* image / fabric panel */}
      <motion.div
        initial={{ clipPath: 'inset(0 0 100% 0)' }}
        whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
        className="relative overflow-hidden"
      >
        <motion.div
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img src={piece.photo} alt={piece.photoAlt} className="w-full h-full object-cover" />
        </motion.div>
        {/* colour-matched duotone tint, ties the photograph to this piece's palette */}
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
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(120% 100% at 20% 0%, rgba(255,255,255,0.22), transparent 55%)' }}
        />
        {/* number watermark */}
        <span className="absolute bottom-6 right-7 font-display text-[6rem] leading-none text-white/25 select-none">
          {piece.number}
        </span>
      </motion.div>

      {/* story card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="relative bg-maroon text-ivory flex flex-col justify-center px-8 py-14 md:px-16 md:py-16"
      >
        <div className="absolute inset-0 grain opacity-60" />
        <div className="relative flex items-start justify-between mb-8">
          <div>
            <span className="eyebrow text-gold-soft">
              {piece.collection} · {piece.chapter}
            </span>
          </div>
          <span className="font-display text-sm text-gold-soft/80">{piece.number}</span>
        </div>

        <Flourish className="relative w-9 h-7 text-gold mb-6" />

        <h3 className="relative font-display text-4xl md:text-5xl mb-6">{piece.name}</h3>

        <div className="relative space-y-4 max-w-md">
          {piece.description.map((para, i) => (
            <p key={i} className="font-body text-[15px] leading-relaxed text-ivory/75">
              {para}
            </p>
          ))}
        </div>

        <div className="relative mt-8 pt-6 border-t border-gold/25">
          <p className="eyebrow text-gold-soft/70 leading-relaxed">{piece.detail}</p>
        </div>
      </motion.div>
    </div>
  )
}
