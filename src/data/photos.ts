// Every photograph on the site comes from uploaded-links.json (the Israaya
// R2 bucket). To swap an image, change the index next to its slot below —
// nothing else in the codebase references image URLs.
import links from './uploaded-links.json'

export const allPhotos: string[] = links.map((l) => l.url)

const at = (i: number): string => {
  const url = allPhotos[i]
  if (!url) throw new Error(`photos: no image at index ${i} in uploaded-links.json`)
  return url
}

export const photos = {
  // Collection — Nikhaar, Chapter I (one per piece, same order as collection.ts)
  piece06: at(0),
  piece05: at(1),
  piece04: at(2),
  piece03: at(3),
  piece02: at(4),
  piece01: at(5),

  // Home
  hero: at(6),
  manifesto: at(7),
  fabric1: at(8),
  fabric2: at(9),
  fabric3: at(10),
  craftTeaser: at(11),
  journalTeaser: at(12),

  // Craft section (three techniques)
  technique1: at(13),
  technique2: at(14),
  technique3: at(15),

  // Page heroes
  collectionHero: at(16),
  aboutHero: at(17),
  craftHero: at(18),
  journalHero: at(19),
  enquireHero: at(20),

  // Page features
  aboutStory: at(21),
  aboutFounder: at(22),
  aboutPhilosophy: at(23),
  aboutMadeInIndia: at(24),
  craftThread: at(25),
  craftFinish: at(26),
  journalFounder: at(27),
  enquireAppointment: at(28),
}
