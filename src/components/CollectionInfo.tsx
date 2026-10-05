import { motion } from 'framer-motion'

const details = [
  {
    title: 'Wash Care',
    body: 'Dry clean only. For detailed care, see our Care Instructions page.',
  },
  {
    title: 'Delivery Timeline',
    body: '15–20 days, made to order, inclusive of delivery within India. International orders may take slightly longer.',
  },
  {
    title: 'Customization',
    body: 'Every piece is made to order and open to customization, from sizing to small design changes. Reach out on WhatsApp or email to personalize your piece or request faster delivery.',
  },
  {
    title: 'Shipping',
    body: 'Made to order and shipped both within India and internationally, from order confirmation, depending on destination.',
  },
]

export default function CollectionInfo() {
  return (
    <section className="relative bg-ivory py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05, margin: '0px 0px 12% 0px' }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-14 md:mb-16"
        >
          <span className="eyebrow text-maroon/60">Chapter I</span>
          <h2 className="font-display text-4xl md:text-5xl text-ink mt-5 mb-6 leading-tight">
            Nikhaar
          </h2>
          <div className="space-y-4">
            <p className="font-body text-[15px] md:text-base leading-relaxed text-ink/65">
              Nikhaar means the full blossoming of beauty into its most radiant form — the moment
              a flower stops growing and simply becomes what it was always meant to be. This is
              our debut chapter, the one Israaya launches from, and it draws its inspiration
              entirely from nature, from gardens, from the small quiet details you only notice
              when you slow down and actually look. Every piece takes its name from something
              found there — a star caught in moonlight, a peacock feather, a bird mid-flight —
              each one carrying its own small story from the natural world.
            </p>
            <p className="font-body text-[15px] md:text-base leading-relaxed text-ink/65">
              The colours in this chapter lean soft and daytime, easy to wear, easy to style,
              built to move between occasions rather than sit in a wardrobe waiting for one
              specific day. What Gardens Know is the language behind it all — the idea that
              nature has always understood beauty, growth and timing far better than we give it
              credit for. Like every chapter at Israaya, Nikhaar is one of a kind. It will not
              repeat, and it will not return once it closes.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05, margin: '0px 0px 12% 0px' }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 pt-10 border-t border-ink/10"
        >
          {details.map((d) => (
            <div key={d.title}>
              <span className="eyebrow text-gold-deep">{d.title}</span>
              <p className="font-body text-sm leading-relaxed text-ink/55 mt-3">{d.body}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
