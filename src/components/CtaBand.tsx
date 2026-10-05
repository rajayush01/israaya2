import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Flourish from './Flourish'

export default function CtaBand() {
  return (
    <section className="relative bg-ivory py-24 md:py-28 px-6 md:px-10 border-t border-ink/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05, margin: '0px 0px 12% 0px' }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <Flourish className="w-9 h-7 text-gold-deep mx-auto mb-7" />
        <h2 className="font-display text-3xl md:text-4xl text-ink leading-snug">
          Each piece is made to order,
          <span className="italic text-maroon"> start to finish, by hand.</span>
        </h2>
        <Link
          to="/enquire"
          className="inline-block mt-8 px-9 py-4 bg-maroon text-ivory font-label text-sm tracking-widest2 hover:bg-gold-deep transition-colors duration-500"
        >
          Begin a Private Enquiry
        </Link>
      </motion.div>
    </section>
  )
}
