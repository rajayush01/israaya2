interface PhoenixMarkProps {
  className?: string
  animated?: boolean
}

/**
 * The Israaya bird-mark: a rising phoenix rendered as a single continuous
 * gold line, its trailing wing dissolving into scattered points — echoing
 * the profile emblem on the brand's own Instagram (@israayaindiaofficial).
 * Used sparingly as the site's one recurring signature motif.
 */
export default function PhoenixMark({ className = 'w-10 h-10', animated = false }: PhoenixMarkProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M50 78C50 78 30 70 26 50C23 35 30 24 38 20C34 30 36 38 40 42C38 30 44 18 56 14C50 24 50 32 54 38C58 30 68 26 76 28C66 32 60 40 60 48C64 44 72 42 78 44C70 46 64 52 62 58C64 56 68 55 71 56C65 60 58 62 54 68C58 66 62 66 65 68C58 70 52 74 50 78Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={animated ? 'phoenix-draw' : ''}
      />
      <path
        d="M50 78C50 82 48 87 44 90"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="79" cy="27" r="1.1" fill="currentColor" />
      <circle cx="84" cy="32" r="0.8" fill="currentColor" />
      <circle cx="73" cy="24" r="0.7" fill="currentColor" />
      <circle cx="88" cy="37" r="0.6" fill="currentColor" />
    </svg>
  )
}
