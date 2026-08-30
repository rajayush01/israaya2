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
    photo: photos.pinkTextile,
    photoAlt: 'Komal Tara — styled in soft peach silk, Nikhaar chapter I',
    description: [
      'Komal Tara sits in a soft peach silk, comprising a long straight kurta, matching straight pants and a dupatta finished in a unique textured organza that sets it apart from the rest of the set.',
      'Resham thread and sequin embroidery run along the neckline and down the front split of the kurta, kept precise and detailed against an otherwise clean silhouette — the dupatta\u2019s texture adding dimension without competing with it.',
    ],
    detail: 'Silk · textured organza dupatta · resham thread and sequin embroidery at neckline and split',
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
      'Sona Pankh is worked in a warm champagne gold silk — a straight kurta and farsi salwar kept comparatively minimal, so the heaviest hand-embroidered dupatta in the collection can carry the weight.',
      'Resham thread, pearls and sequins are worked by hand into a dense pattern of trees and birds across the dupatta, letting the set be styled two ways: fully embellished with the dupatta, or relaxed and everyday without it.',
    ],
    detail: 'Silk · resham thread · pearls · sequins · hand embroidered tree and bird motif',
  },
  {
    number: '04',
    name: 'Kamal',
    chapter: 'Chapter I',
    collection: 'Nikhaar',
    swatch: ['#F3D9E0', '#E2A8B8'],
    photo: photos.redTextile,
    photoAlt: 'Kamal — pink ombre farsi suit set, Nikhaar chapter I',
    description: [
      'Kamal is built around a version of festive dressing that whispers instead of shouts — silk meets a flowing organza dupatta in an ombre that fades gently from one shade into another.',
      'Come closer and the fabric tells its own story: butterflies caught mid-flight and flowers formed through organza patchwork, finished with beadwork that lifts just slightly off the surface, catching light differently with every step.',
    ],
    detail: 'Silk · ombre organza dupatta · butterfly and floral patchwork · raised beadwork',
  },
  {
    number: '03',
    name: 'Sitara Chandni',
    chapter: 'Chapter I',
    collection: 'Nikhaar',
    swatch: ['#F5F1E8', '#E4DCC8'],
    photo: photos.silkFolds,
    photoAlt: 'Sitara Chandni — white anarkali with silver zardozi, Nikhaar chapter I',
    description: [
      'Sitara Chandni is the white staple anarkali you\u2019ll keep coming back to — a three-piece set in pure Chanderi, inspired by the way moonlight sits on everything it touches, never loud, never fading into the background either.',
      'Hand embroidered with intricate silver zardozi work, detailed with delicate floral and subtle animal motifs woven through the yoke and sleeves, it is timeless in silhouette and effortless across multiple occasions.',
    ],
    detail: 'Pure Chanderi · silver zardozi work · floral and animal motifs on yoke and sleeves',
  },
  {
    number: '02',
    name: 'Madhura',
    chapter: 'Chapter I',
    collection: 'Nikhaar',
    swatch: ['#DCD0E8', '#C3AEDD'],
    photo: photos.bridalSaree,
    photoAlt: 'Madhura — lilac sharara set with dori work, Nikhaar chapter I',
    description: [
      'Madhura is the balance of subtle and fun — simple enough to feel effortless, detailed enough to become a statement piece the moment you put it on. Crafted in pure Chanderi, it carries white and silver dori hand work embellished with pearls.',
      'At its centre sits our own interpretation of the lotus, surrounded by florals that trail across the neckline as though they were always meant to be there — easy across daytime events, intimate occasions and destination weddings alike.',
    ],
    detail: 'Pure Chanderi · white and silver dori work · pearls · lotus and floral motif',
  },
  {
    number: '01',
    name: 'Hansa',
    chapter: 'Chapter I',
    collection: 'Nikhaar',
    swatch: ['#C7D3A3', '#A9BB7E'],
    photo: photos.brideDetail,
    photoAlt: 'Hansa — pista green dhoti set with dori embroidery, Nikhaar chapter I',
    description: [
      'Hansa is our interpretation of swans in love, drifting through a garden of their own making — a three-piece dhoti set in satin, worked with dori embroidery and pearl work in a vibrant colour that feels alive the moment it catches light.',
      'Swans move throughout the embroidery alongside pearls and delicate garden motifs, each detail hand worked and placed with precision, while the dhoti silhouette stays modern yet rooted, easy to dress up or keep effortless.',
    ],
    detail: 'Satin · dori embroidery · pearl work · hand embroidered swan and garden motif',
  },
]
