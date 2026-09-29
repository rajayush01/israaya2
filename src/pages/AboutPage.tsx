import PageHero from '../components/PageHero'
import PhotoFeature from '../components/PhotoFeature'
import Values from '../components/Values'
import WorldReach from '../components/WorldReach'
import CtaBand from '../components/CtaBand'
import { photos } from '../data/photos'

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Craft, Reconsidered"
        subtitle="Indian wear does not have to choose between heritage and ease, between occasion and everyday, between tradition and the rest of the world."
        photo={photos.aboutHero}
        photoAlt="Israaya editorial, hand-embroidered Indian wear"
      />

      <PhotoFeature
        photo={photos.aboutStory}
        photoAlt="Israaya piece, made to order"
        eyebrow="Our Story"
        title="Reimagining what Indian wear can be."
        paragraphs={[
          'Israaya exists at the intersection of craft, comfort and global design sensibility, conceived to reimagine what Indian wear can be for the woman of today. The label moves beyond the occasion-wear formula Indian wear has long been confined to, building elevated basics alongside statement pieces and treating Indian wear as something to be worn often rather than reserved for a handful of days a year. Design is never limited by geography, body or moment.',
          'Each collection under Israaya exists as its own chapter — a distinct world built around a theme, an era or an idea that will never be repeated. No chapter borrows from the one before it; each is created once and retired to make space for the next. It is this structure that lets Israaya experiment freely across centuries and aesthetics, while staying rooted in one philosophy: that Indian craftsmanship, handled with care, can hold its own on any global stage.',
          'That philosophy extends to how Israaya is made. Every piece begins with karigars practising techniques passed down through generations, reimagined through a modern lens for the women wearing them today. Nothing is mass produced. Every piece is made to order and hand embroidered only once it is called for, because slow fashion is not a limitation but the intended way forward — an industry built on intention rather than volume.',
        ]}
        tone="ivory"
      />

      <PhotoFeature
        photo={photos.aboutFounder}
        photoAlt="Hand embroidery detail from Israaya"
        eyebrow="Our Founder"
        title="A lens built by living between worlds."
        paragraphs={[
          'Israaya is the work of Khushi Dang, Founder and Creative Director, built from a pull toward Indian craft, fashion and culture that began early and never faded, sharpened later by an education in fashion and luxury business between London and Manchester, and by a life lived between India and abroad. That movement between worlds — growing up in India, living overseas, travelling widely — became the lens Israaya was eventually built through, a way of seeing Indian craftsmanship not as something regional, but as something the rest of the world had simply never been given proper access to.',
          'What Israaya is built on is this: Indian craft is top tier and endlessly versatile, and it deserves a global stage, real recognition, and the space to be refined and elevated rather than mass produced and repeated. Every silhouette, every detail and every decision is created with intention — not simply to make beautiful clothing, but pieces with soul, pieces that become a reflection of the woman wearing them. This is knowledge that cannot be taught in a season, carried instead by karigars who have spent generations perfecting a single stitch and passing it down as inheritance rather than instruction.',
          '"Indian artists and Indian ideas have shaped the world for centuries without ever being given full credit for it. Israaya exists to change that, one piece at a time."',
        ]}
        reversed
        tone="sand"
      />

      <PhotoFeature
        photo={photos.aboutPhilosophy}
        photoAlt="Israaya craft and philosophy"
        eyebrow="Our Philosophy"
        title="As easy to live in as it is beautiful to look at."
        paragraphs={[
          'Every Israaya piece is designed around one rule: it has to be as easy to live in as it is beautiful to look at. A silhouette that looks stunning but restricts movement is a failed design, not a finished one. So every cut is tested against how it moves, not just how it photographs.',
          'Craft comes before decoration. We do not add embroidery to fill space or justify a price point. Every technique used — zardozi, dori work, resham, beadwork — is chosen because it is the right technique for that piece, developed in conversation with the karigars who actually know how to execute it well. This is also why no two chapters repeat a technique the same way twice; each chapter is built from scratch, on its own terms.',
          'Craft, for us, is also livelihood. Every order placed puts income directly into the hands of the women and karigar families who make it, and we are actively building the systems to make that support go further — from consistent, fair work to skill development that lasts beyond a single order. We are also in conversation with organisations focused on education, craft preservation and women\u2019s empowerment, with the intention of formalising these partnerships as Israaya grows.',
        ]}
        tone="ivory"
      />

      <Values />

      <PhotoFeature
        photo={photos.aboutMadeInIndia}
        photoAlt="Israaya, made in India by karigar families"
        eyebrow="Made in India"
        title="India's craft, made by India's hands, for the world."
        paragraphs={[
          'Every Israaya piece is made in India, start to finish, by karigar families who have carried their craft across generations. These are artisans trained not in a single technique but in an entire inherited language of embroidery, skills passed down as knowledge rather than instruction, refined over years until they become instinct rather than method. Our artisans come from different cities across India, each carrying craft shaped by its own region, era and cultural history, so every piece draws from a distinct part of the country rather than one single tradition.',
          'What makes working with them extraordinary is not just what they already know, but how willing they are to take it further. Age-old techniques, in their hands, continue to grow rather than simply repeat — open to interpretation, to experimentation, to being reimagined in ways that feel modern and fresh while staying rooted in exactly where they came from.',
          'Made in India is not a label we add for credibility. It is the only way Israaya was ever going to be built. Every order placed puts value directly back into the artisan communities behind it, keeping techniques alive that would otherwise fade with each generation that moves further from them.',
        ]}
        reversed
        tone="sand"
      />

      <WorldReach />
      <CtaBand />
    </>
  )
}
