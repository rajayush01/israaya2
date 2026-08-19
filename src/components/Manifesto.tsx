import { motion } from 'framer-motion'
import { photos } from '../data/photos'

const fade = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}

export default function Manifesto() {
  return (
    <section className="relative bg-ivory py-28 md:py-36 px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 md:gap-8">
        <motion.div
          className="md:col-span-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fade}
        >
          <span className="eyebrow text-maroon/60">The House</span>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-ink mt-5">
            Every piece
            <br />
            begins as a
            <br />
            <span className="italic text-maroon">memory.</span>
          </h2>

          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, ease: [0.65, 0, 0.35, 1], delay: 0.2 }}
            className="relative mt-10 aspect-[3/4] max-w-[220px] overflow-hidden"
          >
            <img
              src={photos.silkFolds}
              alt="Draped silk fabric, before it is cut"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 grain" />
          </motion.div>
        </motion.div>

        <motion.div
          className="md:col-span-7 md:col-start-6 flex flex-col justify-center gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fade}
          transition={{ delay: 0.15 }}
        >
          <p className="font-display text-2xl md:text-[1.7rem] leading-relaxed text-ink/85">
            Israaya works from the belief that Indianwear should feel handed down before it's
            ever worn — carrying the weight of resham thread, the patience of hand embroidery,
            and a silhouette that moves the way memory does.
          </p>
          <p className="font-body text-base md:text-lg leading-relaxed text-ink/60 max-w-xl">
            Each garment is worked by hand across weeks, not hours. Motifs are chosen with
            intention — a peacock, a garden, a pair of birds in flight — so that no detail on the
            outfit feels accidental. The result sits somewhere between an heirloom and a first
            wear: comfortable enough for a summer morning, considered enough for the most formal
            room in the house.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <span className="h-px w-12 bg-gold-deep/60" />
            <span className="eyebrow text-gold-deep">Made in India. Worn Around the World.</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
