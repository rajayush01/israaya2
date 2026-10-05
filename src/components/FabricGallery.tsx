import { imgProps } from '../lib/img'
import { m } from 'framer-motion'
import { photos } from '../data/photos'
import Flourish from './Flourish'

const items = [
  { photo: photos.fabric1, alt: 'Israaya silk, before it is cut', caption: 'Silk, before it is cut' },
  { photo: photos.fabric2, alt: 'Israaya colour, matched by hand', caption: 'Colour, matched by hand' },
  { photo: photos.fabric3, alt: 'Israaya tones, checked twice', caption: 'Every tone, checked twice' },
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
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05, margin: '0px 0px 12% 0px' }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-12"
        >
          <Flourish className="w-8 h-6 text-gold-deep" />
          <span className="eyebrow text-maroon/60">In the Studio</span>
        </m.div>

        {/* three columns, deliberately uneven heights for a considered, non-grid rhythm */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 items-end">
          {items.map((item, i) => (
            <m.figure
              key={item.caption}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.05, margin: '0px 0px 12% 0px' }}
              variants={fade}
              className={`relative overflow-hidden ${
                i === 1 ? 'sm:mb-10 aspect-[3/4]' : 'aspect-[4/5]'
              }`}
            >
<<<<<<< HEAD
              <img
                {...imgProps(item.photo, 'third')}
=======
              <img loading="eager" decoding="async"
                src={item.photo}
>>>>>>> 2dffdd0697aed51743daed1954c1450c5b3a9ac9
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
              />
              <figcaption className="absolute bottom-0 inset-x-0 px-4 py-3 bg-gradient-to-t from-ink/70 to-transparent">
                <span className="eyebrow text-ivory/90 text-[10px]">{item.caption}</span>
              </figcaption>
            </m.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
