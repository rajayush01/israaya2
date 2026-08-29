import PageHero from '../components/PageHero'
import Manifesto from '../components/Manifesto'
import PhotoFeature from '../components/PhotoFeature'
import WorldReach from '../components/WorldReach'
import { photos } from '../data/photos'

export default function JournalPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Notes from the House"
        subtitle="On memory, craft, and building Indianwear that travels."
        photo={photos.brideDetail}
        photoAlt="Portrait in traditional Indian bridal jewellery"
      />

      <Manifesto />

      <PhotoFeature
        photo={photos.needleMacro}
        photoAlt="Macro photograph of hand embroidery mid-stitch"
        eyebrow="Our Founder"
        title="A lens built by living between worlds."
        paragraphs={[
          'Israaya is the work of Khushi Dang, Founder and Creative Director — built from a pull toward Indian craft, fashion and culture that began early, sharpened by an education in fashion and luxury business between London and Manchester, and by a life lived between India and abroad.',
          '"Indian artists and Indian ideas have shaped the world for centuries without ever being given full credit for it. Israaya exists to change that, one piece at a time." Growing up in India, living overseas and travelling widely became the lens Israaya was eventually built through — a way of seeing Indian craftsmanship not as something regional, but as something the rest of the world had simply never been given proper access to.',
        ]}
      />

      <WorldReach />
    </>
  )
}
