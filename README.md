# Israaya India — Website

A one-page, award-show-style site for Israaya India (@israayaindiaofficial), built around the
brand's own "chapter" storytelling format for its Nikhaar collection.

## Design plan

- **Palette** — Maroon `#5A1826` / deep maroon `#3E1019` (the brand's own story-card colour),
  gold `#C6A15B`, ivory `#F6F1E7`, sand `#EFE4D2`, plus two garment-tone accents pulled straight
  from the screenshots: peach `#E9C3AC` and champagne `#DCC9A3`.
- **Type** — Cormorant Garamond for display headlines, EB Garamond for body copy, Marcellus (small
  caps, wide tracking) for eyebrows/labels — echoing the serif label style on the brand's own
  Instagram cards.
- **Signature element** — the "Chapter Card": a fabric-toned panel paired with a maroon story card
  and a hand-drawn gold flourish, directly adapting the brand's existing Instagram carousel format
  (numbered piece, "Chapter I", story copy) into a full-bleed, scroll-revealed web section.
- **Motion** — Framer Motion for scroll reveals and page-load choreography, Lenis for inertial
  smooth scroll, a single hand-drawn gold thread animating once across the hero. Reduced-motion is
  respected throughout.

## Structure

```
src/
  components/
    Navbar.tsx        centered mark, flanked nav links (transparent → solid on scroll)
    Hero.tsx           full-bleed thesis statement + animated gold thread
    Manifesto.tsx       brand statement
    ChapterCard.tsx     the signature product-story card (see data/collection.ts)
    ChapterShowcase.tsx wraps the Nikhaar collection cards
    Craft.tsx           embroidery technique breakdown
    WorldReach.tsx       marquee + "Made in India, Worn Around the World" statement
    Enquire.tsx          contact CTA
    Footer.tsx
    PhoenixMark.tsx     the brand's bird emblem, redrawn as a single gold line
    Flourish.tsx        small recurring gold divider
  data/collection.ts    Nikhaar piece copy — edit here to add/replace pieces
```

## Pages

The nav now routes to standalone pages instead of scrolling to homepage sections:

- `/` — Home: hero, brand manifesto, a two-piece collection teaser, CTA
- `/collection` — the full four-piece Nikhaar chapter showcase
- `/craft` — embroidery technique breakdown with two photo features
- `/journal` — extended brand story + "Made in India, Worn Around the World"
- `/enquire` — contact / private enquiry page

## Photography

Editorial photography (hero banners, page headers, and the two craft/journal photo features) uses
three free-to-use Unsplash photos, credited in `src/data/photos.ts` and free for commercial use
under the [Unsplash License](https://unsplash.com/license) — swap them for real campaign shoot
photography whenever it's ready by replacing the URLs in that file.

Product imagery on the Nikhaar chapter cards (both on the homepage teaser and the full
`/collection` page) now layers a real photograph under a colour-matched duotone tint keyed to
each piece's actual swatch (`mix-blend-mode: multiply`) — so every card reads as a styled colour
treatment of that piece's palette rather than a literal, misleading product shot. This uses the
same three sourced Unsplash photos, reused across pieces. Swap in real product photography
whenever it's ready: in `data/collection.ts`, point each piece's `photo` field at your asset —
the tint and reveal animation will apply automatically.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
```

Requires Node 18+.
