import { motion } from 'framer-motion'
import Flourish from './Flourish'

export default function Enquire() {
  return (
    <section className="relative bg-ivory py-28 md:py-32 px-6 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.9 }}
        className="max-w-3xl mx-auto text-center"
      >
        <Flourish className="w-10 h-8 text-gold-deep mx-auto mb-8" />
        <span className="eyebrow text-maroon/60">Write to Us</span>
        <h2 className="font-display text-4xl md:text-5xl text-ink mt-5 leading-tight">
          Tell us the occasion.
          <br />
          <span className="italic text-maroon">We'll take it from there.</span>
        </h2>
        <p className="font-body text-ink/60 mt-6 max-w-lg mx-auto leading-relaxed">
          Share your occasion, sizing, and the piece that caught your eye — our styling team
          responds within two working days with fabric notes, timelines, and fitting guidance.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="mailto:studio@israaya.in"
            className="group relative px-9 py-4 bg-maroon text-ivory font-label text-sm tracking-widest2 overflow-hidden"
          >
            <span className="relative z-10">Enquire by Email</span>
            <span className="absolute inset-0 bg-gold-deep translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </a>
          <a
            href="https://www.instagram.com/israayaindiaofficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow text-ink/60 hover:text-maroon transition-colors border-b border-ink/20 hover:border-maroon pb-1"
          >
            @israayaindiaofficial
          </a>
        </div>
      </motion.div>
    </section>
  )
}
