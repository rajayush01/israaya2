import { Link } from 'react-router-dom'
import PhoenixMark from './PhoenixMark'

export default function Footer() {
  return (
    <footer className="relative bg-ink text-ivory/60 px-6 md:px-10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 md:gap-8 pb-14 border-b border-ivory/10">
        <div>
          <PhoenixMark className="w-8 h-8 text-gold mb-5" />
          <p className="font-display text-2xl text-ivory mb-3">Israaya India</p>
          <p className="text-sm leading-relaxed max-w-xs">
            Modern Indianwear, rooted in craft. Weaving memory into every silhouette.
          </p>
        </div>

        <div>
          <span className="eyebrow text-gold-soft/70">Explore</span>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-gold-soft transition-colors">Our Story</Link></li>
            <li><Link to="/collection" className="hover:text-gold-soft transition-colors">Collection — Nikhaar</Link></li>
            <li><Link to="/craft" className="hover:text-gold-soft transition-colors">The Craft</Link></li>
            <li><Link to="/journal" className="hover:text-gold-soft transition-colors">Journal</Link></li>
            <li><Link to="/enquire" className="hover:text-gold-soft transition-colors">Private Enquiries</Link></li>
          </ul>
        </div>

        <div>
          <span className="eyebrow text-gold-soft/70">Studio</span>
          <ul className="mt-5 space-y-3 text-sm">
            <li>studio@israaya.in</li>
            <li>
              <a
                href="https://www.instagram.com/israayaindiaofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-soft transition-colors"
              >
                Instagram — @israayaindiaofficial
              </a>
            </li>
            <li>By appointment, Mumbai</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 pt-7 text-xs text-ivory/35">
        <span>© {new Date().getFullYear()} Israaya India. All rights reserved.</span>
        <span className="eyebrow">Made in India · Worn Around the World</span>
      </div>
    </footer>
  )
}
