import { allPhotos, photos } from '../data/photos'

// Kept at module level so the browser holds on to the decoded bitmaps.
const held: HTMLImageElement[] = []

// What the Home page needs first, then everything else on the site.
const priority = [
  photos.manifesto,
  photos.piece01,
  photos.piece02,
  photos.fabric1,
  photos.fabric2,
  photos.fabric3,
  photos.craftTeaser,
  photos.journalTeaser,
]

function load(url: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new Image()
    img.decoding = 'async'
    img.src = url
    held.push(img)
    // decode() resolves once the bitmap is ready to paint, so the first
    // time an image scrolls into view there is no decode hitch.
    img.decode().then(() => resolve(), () => resolve())
  })
}

/** Fetches + decodes every site photo in the background (small pool so the hero video is never starved). */
export function preloadAllImages(concurrency = 3) {
  const queue = [...new Set([...priority, ...allPhotos])]
  const worker = async () => {
    while (queue.length) {
      const next = queue.shift()
      if (next) await load(next)
    }
  }
  for (let i = 0; i < concurrency; i++) void worker()
}
