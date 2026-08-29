import PageHero from '../components/PageHero'
import PhotoFeature from '../components/PhotoFeature'
import Craft from '../components/Craft'
import CtaBand from '../components/CtaBand'
import { photos } from '../data/photos'

export default function CraftPage() {
  return (
    <>
      <PageHero
        eyebrow="The Craft"
        title="Worked by Hand"
        subtitle="Every yard of thread on an Israaya piece was pulled through fabric by a person, not a machine."
        photo={photos.loomThread}
        photoAlt="Close-up of a loom with many threads"
      />

      <PhotoFeature
        photo={photos.loomThread}
        photoAlt="Threads on a loom, prepared before embroidery begins"
        eyebrow="Before the Needle"
        title="The thread comes first."
        paragraphs={[
          'Every colourway begins on the loom, long before a needle touches fabric — resham silk thread wound and matched against the base cloth until the tone sits exactly right against skin.',
          'Nothing is dyed to a swatch alone. Each spool is checked in daylight, then again indoors, since the piece will be worn in both.',
        ]}
        tone="ivory"
      />

      <Craft />

      <PhotoFeature
        photo={photos.needleMacro}
        photoAlt="Macro photograph of a sewing needle mid-stitch"
        eyebrow="The Finish"
        title="Detail is where the work shows."
        paragraphs={[
          'The last pass is always the slowest — pearls and sequins set one at a time along a motif that has already taken days to outline in thread.',
          'It is also the most visible part of the work, which is why it is never rushed. A piece is only finished when it holds up to a closer look, not just a first one.',
        ]}
        reversed
        tone="sand"
      />

      <CtaBand />
    </>
  )
}
