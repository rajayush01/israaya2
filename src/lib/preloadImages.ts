<<<<<<< HEAD
import { photos } from '../data/photos'
import { sized, type Tier } from './img'
=======
import { allPhotos, photos } from '../data/photos'
>>>>>>> 2dffdd0697aed51743daed1954c1450c5b3a9ac9

// Kept at module level so the browser holds on to the decoded bitmaps.
const held: HTMLImageElement[] = []

<<<<<<< HEAD
// [photo, size tier] — must match the tier used in the component, so the
// preloaded URL is byte-identical to what the page asks for (one download, cached).
const list: [string, Tier][] = [
  // Home, in scroll order
  [photos.manifesto, 'small'],
  [photos.piece01, 'half'],
  [photos.piece02, 'half'],
  [photos.fabric1, 'third'],
  [photos.fabric2, 'third'],
  [photos.fabric3, 'third'],
  [photos.craftTeaser, 'half'],
  [photos.journalTeaser, 'half'],
  // Collection
  [photos.collectionHero, 'hero'],
  [photos.piece03, 'half'],
  [photos.piece04, 'half'],
  [photos.piece05, 'half'],
  [photos.piece06, 'half'],
  // Other pages
  [photos.aboutHero, 'hero'],
  [photos.aboutStory, 'half'],
  [photos.aboutFounder, 'half'],
  [photos.aboutPhilosophy, 'half'],
  [photos.aboutMadeInIndia, 'half'],
  [photos.craftHero, 'hero'],
  [photos.technique1, 'third'],
  [photos.technique2, 'third'],
  [photos.technique3, 'third'],
  [photos.craftThread, 'half'],
  [photos.craftFinish, 'half'],
  [photos.journalHero, 'hero'],
  [photos.journalFounder, 'half'],
  [photos.enquireHero, 'hero'],
  [photos.enquireAppointment, 'half'],
=======
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
>>>>>>> 2dffdd0697aed51743daed1954c1450c5b3a9ac9
]

function load(url: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new Image()
    img.decoding = 'async'
    img.src = url
    held.push(img)
<<<<<<< HEAD
=======
    // decode() resolves once the bitmap is ready to paint, so the first
    // time an image scrolls into view there is no decode hitch.
>>>>>>> 2dffdd0697aed51743daed1954c1450c5b3a9ac9
    img.decode().then(() => resolve(), () => resolve())
  })
}

<<<<<<< HEAD
/** Warms every site photo in the background, one or two at a time, so scrolling never waits on a download or decode. */
export function preloadAllImages(concurrency = 2) {
  const queue = list.map(([url, tier]) => sized(url, tier))
=======
/** Fetches + decodes every site photo in the background (small pool so the hero video is never starved). */
export function preloadAllImages(concurrency = 3) {
  const queue = [...new Set([...priority, ...allPhotos])]
>>>>>>> 2dffdd0697aed51743daed1954c1450c5b3a9ac9
  const worker = async () => {
    while (queue.length) {
      const next = queue.shift()
      if (next) await load(next)
    }
  }
  for (let i = 0; i < concurrency; i++) void worker()
}
