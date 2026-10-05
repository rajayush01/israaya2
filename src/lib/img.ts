import type { SyntheticEvent } from 'react'

/**
 * Photos live on R2 as full-size originals. Decoding a multi-megapixel image just to
 * paint it in a 500px slot is the main source of scroll jank, so every photo is
 * requested at the width its slot actually needs (resized + re-encoded as WebP by
 * wsrv.nl, a free image CDN). If the resizer is ever unreachable the <img> silently
 * falls back to the original R2 URL.
 *
 * To turn the resizer off (e.g. once you've pre-resized the files on R2), set this to false.
 */
export const USE_IMAGE_RESIZER = true

export const tiers = {
  hero: 1600, // full-bleed page heroes
  half: 1000, // half-width features, collection cards, teasers
  third: 800, // three-up galleries
  small: 480, // small thumbnails
} as const
export type Tier = keyof typeof tiers

export function sized(url: string, tier: Tier): string {
  if (!USE_IMAGE_RESIZER) return url
  return `https://wsrv.nl/?url=${encodeURIComponent(url)}&w=${tiers[tier]}&output=webp&q=78&we`
}

export const highPriority = { fetchpriority: 'high' } as Record<string, string>

/** Spread onto an <img>: eager, async-decoded, right-sized, with automatic fallback. */
export function imgProps(url: string, tier: Tier, priority = false) {
  return {
    src: sized(url, tier),
    loading: 'eager' as const,
    decoding: 'async' as const,
    ...(priority ? highPriority : {}),
    onError: (e: SyntheticEvent<HTMLImageElement>) => {
      const el = e.currentTarget
      if (el.dataset.fallback) return
      el.dataset.fallback = '1'
      el.src = url
    },
  }
}
