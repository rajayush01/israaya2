import { photos } from './photos'

export interface ChapterPiece {
  number: string
  name: string
  chapter: string
  collection: string
  swatch: [string, string]
  photo: string
  photoAlt: string
  description: string[]
  detail: string
}

export const nikhaarCollection: ChapterPiece[] = [
  {
    number: '06',
    name: 'Komal Tara',
    chapter: 'Chapter I',
    collection: 'Nikhaar',
    swatch: ['#F1D3BE', '#E9C3AC'],
    photo: photos.bridalSaree,
    photoAlt: 'Komal Tara — styled in soft peach, Nikhaar chapter I',
    description: [
      'Komal Tara arrives in a soft peach, easy to wear and easy to love — subtle enough for a summer morning, striking enough for a formal room. The three-piece suit is built to feel put together without ever asking for effort.',
      'The embroidery is worked in resham thread with silver pearls and sequins, hand-done across the front and back of the outfit. Every motif is placed with intention — one full peacock, one garden — coming together only when you move.',
    ],
    detail: 'Resham thread · silver pearls · sequins · hand embroidered peacock and garden motif',
  },
  {
    number: '05',
    name: 'Sona Pankh',
    chapter: 'Chapter I',
    collection: 'Nikhaar',
    swatch: ['#E2D0A6', '#DCC9A3'],
    photo: photos.loomThread,
    photoAlt: 'Sona Pankh — champagne gold thread work, Nikhaar chapter I',
    description: [
      'Sona Pankh is worked in a warm champagne gold, rich and grounded rather than loud. The three-piece Farsi suit set carries the heaviest hand-embroidered dupatta we have made, worked in resham thread, pearls, and sequins with trees and birds running across the surface.',
      'The detailing runs through the entire outfit — sleeves, hem, dupatta — all done entirely by hand. Every motif is placed with care, giving the surface a texture you can feel as much as see.',
    ],
    detail: 'Resham thread · pearls · sequins · hand embroidered tree and bird motif',
  },
  {
    number: '04',
    name: 'Raah Noor',
    chapter: 'Chapter I',
    collection: 'Nikhaar',
    swatch: ['#EAD9DE', '#D9B9C4'],
    photo: photos.pinkTextile,
    photoAlt: 'Raah Noor — dusk pink with hand-worked florals, Nikhaar chapter I',
    description: [
      'Raah Noor takes a dusk pink and lets it sit quietly against ivory georgette. The straight-cut kurta is left unembellished at the body so the dupatta can carry the weight — a border of hand-worked florals that catches the light as it moves.',
      'Built for the in-between moments of a wedding week: the mehendi that turns formal by evening, the sangeet that needs one considered piece rather than three.',
    ],
    detail: 'Georgette · zardozi border · hand finished dupatta edge',
  },
  {
    number: '03',
    name: 'Meher Rung',
    chapter: 'Chapter I',
    collection: 'Nikhaar',
    swatch: ['#C98F6B', '#A85C3E'],
    photo: photos.redTextile,
    photoAlt: 'Meher Rung — burnt terracotta with gold gota patti, Nikhaar chapter I',
    description: [
      'Meher Rung is the deepest colour in the chapter — a burnt terracotta worked with gold gota patti along the neckline and cuffs. Where the other pieces whisper, this one is meant to be noticed across a room.',
      'The silhouette stays close to classic Anarkali proportions, cut generously through the flare so the embroidery has room to move with every step.',
    ],
    detail: 'Gota patti · mukaish work · floor-length Anarkali flare',
  },
]
