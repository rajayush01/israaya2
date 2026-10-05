import { photos } from '../data/photos'
import { sized, type Tier } from './img'

// Kept at module level so the browser holds on to the decoded bitmaps.
const held: HTMLImageElement[] = []

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
]

function load(url: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new Image()
    img.decoding = 'async'
    img.src = url
    held.push(img)
    img.decode().then(() => resolve(), () => resolve())
  })
}

/** Warms every site photo in the background, one or two at a time, so scrolling never waits on a download or decode. */
export function preloadAllImages(concurrency = 2) {
  const queue = list.map(([url, tier]) => sized(url, tier))
  const worker = async () => {
    while (queue.length) {
      const next = queue.shift()
      if (next) await load(next)
    }
  }
  for (let i = 0; i < concurrency; i++) void worker()
}
