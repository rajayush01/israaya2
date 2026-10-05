import { useEffect, useRef, useState } from 'react'
import { m, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import logo from "../assets/logonobg.png"
import heroVideo from "../assets/israaya-video.mp4"
import heroVideoMobile from "../assets/israaya-video-mobile.mp4"
import heroPoster from "../assets/israaya-poster.webp"
import { highPriority } from '../lib/img'

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
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches
  )

  // Pause the video decoder whenever the hero is off-screen so it never
  // competes with scrolling further down the page.
  useEffect(() => {
    const video = videoRef.current
    const section = sectionRef.current
    if (!video || !section) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {})
        else video.pause()
      },
      { threshold: 0 }
    )
    io.observe(section)
    return () => io.disconnect()
  }, [])

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '30%']
  )

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.7],
    [1, 0]
  )

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] w-full overflow-hidden bg-black"
    >

      {/* ================= VIDEO BACKGROUND ================= */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={heroPoster}
          disablePictureInPicture
          src={isMobile ? heroVideoMobile : heroVideo}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* ================= OVERLAYS (one layer: shade + vignette) ================= */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 45%, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.30) 75%, rgba(0,0,0,0.65) 100%), linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.20) 35%, rgba(0,0,0,0.45) 65%, rgba(0,0,0,0.82) 100%)',
        }}
      />

      {/* ================= GOLD THREAD ================= */}
      <svg
        className="absolute inset-0 w-full h-full opacity-60"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <m.path
          d="M -50 720 C 150 680, 250 820, 420 760 S 700 620, 860 700 S 1050 640, 1120 690"
          fill="none"
          stroke="#C6A15B"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.45 }}
          transition={{
            duration: 2.6,
            ease: [0.65, 0, 0.35, 1],
            delay: 0.6,
          }}
        />

        <m.path
          d="M -50 260 C 180 210, 300 340, 480 280 S 760 160, 900 240"
          fill="none"
          stroke="#C6A15B"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.25 }}
          transition={{
            duration: 2.6,
            ease: [0.65, 0, 0.35, 1],
            delay: 1,
          }}
        />
      </svg>

      {/* ================= CONTENT ================= */}
      <m.div
        style={{
          y: contentY,
          opacity: contentOpacity,
          willChange: 'transform, opacity',
        }}
        className="relative z-10 flex flex-col items-center justify-center min-h-[100svh] text-center px-6"
      >

        {/* LOGO */}
        <m.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.3,
          }}
        >
          <img
            src={logo}
            alt="Israaya Logo"
            decoding="async"
            loading="eager"
            {...highPriority}
            className="w-28 md:w-36 h-auto"
          />
        </m.div>

        {/* EYEBROW */}
        <m.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.55,
          }}
          className="eyebrow text-white/75 mb-6"
        >
          Made in India · Worn Around the World
        </m.p>

        {/* BRAND NAME */}
        <m.h1
          initial="hidden"
          animate="show"
          variants={letterContainer}
          className="font-display text-[15vw] leading-[0.95] md:text-[7.5rem] text-white tracking-tight flex"
        >
          {letters.map((l, i) => (
            <span
              key={i}
              className="inline-block overflow-hidden"
            >
              <m.span
                variants={letterVariant}
                className="inline-block"
              >
                {l}
              </m.span>
            </span>
          ))}
        </m.h1>

        {/* DESCRIPTION */}
        <m.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 1.15,
          }}
          className="font-display italic text-xl md:text-2xl text-white/80 mt-5 max-w-xl"
        >
          Modern Indianwear, rooted in craft — weaving memory into every silhouette.
        </m.p>

        {/* CTA */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.9,
            delay: 1.5,
          }}
        >
          <Link
            to="/collection"
            className="mt-14 group flex flex-col items-center gap-3 text-white/70 hover:text-[#C6A15B] transition-colors"
          >
            <span className="eyebrow">
              Enter the Collection
            </span>

            <span className="w-px h-10 bg-current opacity-60 origin-top animate-[pulse_2.4s_ease-in-out_infinite]" />
          </Link>
        </m.div>

      </m.div>
    </section>
  )
}