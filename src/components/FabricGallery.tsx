import { motion } from 'framer-motion'
import { photos } from '../data/photos'
import Flourish from './Flourish'

const items = [
  { photo: photos.silkFolds, alt: 'Draped silk fabric folds', caption: 'Silk, before it is cut' },
  { photo: photos.redTextile, alt: 'Deep red silk textile', caption: 'Colour, matched by hand' },
  { photo: photos.pinkTextile, alt: 'Dusk pink textile close up', caption: 'Every tone, checked twice' },
]

const fade = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function FabricGallery() {
  return (
    <section className="relative bg-ivory py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-12"
        >
          <Flourish className="w-8 h-6 text-gold-deep" />
          <span className="eyebrow text-maroon/60">In the Studio</span>
        </motion.div>

        {/* three columns, deliberately uneven heights for a considered, non-grid rhythm */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 items-end">
          {items.map((item, i) => (
            <motion.figure
              key={item.caption}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fade}
              className={`relative overflow-hidden ${
                i === 1 ? 'sm:mb-10 aspect-[3/4]' : 'aspect-[4/5]'
              }`}
            >
              <img
                src={item.photo}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
              />
              <div className="absolute inset-0 grain" />
              <figcaption className="absolute bottom-0 inset-x-0 px-4 py-3 bg-gradient-to-t from-ink/70 to-transparent">
                <span className="eyebrow text-ivory/90 text-[10px]">{item.caption}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
