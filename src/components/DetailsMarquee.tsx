const terms = [
  'RESHAM THREAD',
  'HAND EMBROIDERY',
  'PEARL & SEQUIN WORK',
  'MOTIF STORYTELLING',
  'GOTA PATTI',
  'ZARDOZI',
]

export default function DetailsMarquee() {
  const loop = [...terms, ...terms]

  return (
    <div className="relative bg-ink py-8 overflow-hidden border-y border-gold/15 select-none">
      <div className="flex whitespace-nowrap animate-[marquee_38s_linear_infinite]">
        {loop.map((t, i) => (
          <span
            key={i}
            className="font-label text-sm md:text-base tracking-widest2 text-ivory/40 mx-6 flex items-center gap-6"
          >
            {t}
            <span className="text-gold/50 text-xs">✦</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
