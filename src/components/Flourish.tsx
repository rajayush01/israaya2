export default function Flourish({ className = 'w-8 h-8 text-gold' }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 40" fill="none" className={className} aria-hidden="true">
      <path
        d="M30 34C30 34 30 22 22 16C16 11.5 8 12 6 6C10 12 17 11 22 15C26 18 28 24 29 30"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M30 34C30 34 30 22 38 16C44 11.5 52 12 54 6C50 12 43 11 38 15C34 18 32 24 31 30"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path d="M30 34V38" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  )
}
