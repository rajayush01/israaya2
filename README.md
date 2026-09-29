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

Every photograph on the site comes from `src/data/uploaded-links.json` (the Israaya R2 bucket).
`src/data/photos.ts` maps each slot (hero, page heroes, feature blocks, collection cards) to an
index in that file — change the index next to a slot to swap its image. Only the brand logo in
`src/assets` is bundled locally.

Product imagery on the Nikhaar chapter cards layers the photograph under a colour-matched
duotone tint keyed to each piece's swatch (`mix-blend-mode: multiply`).

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
```

Requires Node 18+.
