import { m } from 'framer-motion'

interface SplitRevealProps {
  text: string
  className?: string
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'p'
}

const container = {
  hidden: {},
  show: (delay: number) => ({
    transition: { staggerChildren: 0.09, delayChildren: delay },
  }),
}

const word = {
  hidden: { y: '110%', opacity: 0 },
  show: {
    y: '0%',
    opacity: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
}

/** Reveals text one word at a time, each word masked and sliding up into place. */
export default function SplitReveal({ text, className = '', delay = 0, as = 'h2' }: SplitRevealProps) {
  const Tag = m[as] as typeof m.h2
  const words = text.split(' ')

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05, margin: '0px 0px 12% 0px' }}
      variants={container}
      custom={delay}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-top pb-[0.08em]">
          <m.span variants={word} className="inline-block">
            {w}
            {i < words.length - 1 ? '\u00A0' : ''}
          </m.span>
        </span>
      ))}
    </Tag>
  )
}
