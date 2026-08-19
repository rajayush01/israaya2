import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
// import PhoenixMark from './PhoenixMark'
import { photos } from '../data/photos'
import logo from "../assets/logonobg.png"


const letters = 'Israaya'.split('')

const letterContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.055, delayChildren: 0.5 },
  },
}

const letterVariant = {
  hidden: { y: '100%', opacity: 0 },
  show: {
    y: '0%',
    opacity: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={sectionRef} className="relative min-h-[100svh] w-full overflow-hidden bg-maroon-deep">
      {/* campaign photograph */}
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ y: imgY }}
        className="absolute inset-0"
      >
        <img
          src={photos.bridalSaree}
          alt=""
          className="w-full h-[120%] object-cover object-top"
        />
      </motion.div>
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(46,10,17,0.55) 0%, rgba(46,10,17,0.72) 45%, rgba(46,10,17,0.92) 100%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background:
            'radial-gradient(120% 90% at 50% 8%, rgba(122,36,54,0.35) 0%, rgba(90,24,38,0.25) 42%, rgba(62,16,25,0.55) 78%, rgba(42,10,17,0.75) 100%)',
        }}
      />
      <div className="absolute inset-0 grain" />

      {/* drifting gold thread line — the signature motif, drawn once on load */}
      <svg
        className="absolute inset-0 w-full h-full opacity-70"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          d="M -50 720 C 150 680, 250 820, 420 760 S 700 620, 860 700 S 1050 640, 1120 690"
          fill="none"
          stroke="#C6A15B"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 2.6, ease: [0.65, 0, 0.35, 1], delay: 0.6 }}
        />
        <motion.path
          d="M -50 260 C 180 210, 300 340, 480 280 S 760 160, 900 240"
          fill="none"
          stroke="#C6A15B"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.35 }}
          transition={{ duration: 2.6, ease: [0.65, 0, 0.35, 1], delay: 1 }}
        />
      </svg>

      {/* content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex flex-col items-center justify-center min-h-[100svh] text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        >
          <img src={logo} alt="Israaya Logo" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="eyebrow text-gold-soft mb-6"
        >
          Made in India · Worn Around the World
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={letterContainer}
          className="font-display text-[15vw] leading-[0.95] md:text-[7.5rem] text-ivory tracking-tight flex"
        >
          {letters.map((l, i) => (
            <span key={i} className="inline-block overflow-hidden">
              <motion.span variants={letterVariant} className="inline-block">
                {l}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.15 }}
          className="font-display italic text-xl md:text-2xl text-peach/90 mt-5 max-w-xl"
        >
          Modern Indianwear, rooted in craft — weaving memory into every silhouette.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.5 }}
        >
          <Link
            to="/collection"
            className="mt-14 group flex flex-col items-center gap-3 text-ivory/70 hover:text-gold-soft transition-colors"
          >
            <span className="eyebrow">Enter the Collection</span>
            <span className="w-px h-10 bg-current opacity-60 origin-top animate-[pulse_2.4s_ease-in-out_infinite]" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
