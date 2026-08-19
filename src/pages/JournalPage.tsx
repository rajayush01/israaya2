import PageHero from '../components/PageHero'
import Manifesto from '../components/Manifesto'
import PhotoFeature from '../components/PhotoFeature'
import WorldReach from '../components/WorldReach'
import { photos } from '../data/photos'

export default function JournalPage() {
  return (
    <>
      <PageHero
        eyebrow="The Journal"
        title="Notes from the House"
        subtitle="On memory, craft, and building Indianwear that travels."
        photo={photos.brideDetail}
        photoAlt="Portrait in traditional Indian bridal jewellery"
      />

      <Manifesto />

      <PhotoFeature
        photo={photos.redTextile}
        photoAlt="Deep red silk textile, close up"
        eyebrow="On Occasion"
        title="Made for the room it enters."
        paragraphs={[
          "A piece has to work twice — once in photographs, taken close and in bright light, and once in the room itself, under whatever light the evening actually has. We fit for both.",
          'That means proportions that read from across a hall and details that reward whoever gets close enough to look. Neither is optional.',
        ]}
      />

      <WorldReach />
    </>
  )
}
