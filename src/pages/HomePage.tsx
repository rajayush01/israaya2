import Hero from '../components/Hero'
import Manifesto from '../components/Manifesto'
import CollectionTeaser from '../components/CollectionTeaser'
import FabricGallery from '../components/FabricGallery'
import DetailsMarquee from '../components/DetailsMarquee'
import CraftTeaser from '../components/CraftTeaser'
import JournalTeaser from '../components/JournalTeaser'
import CtaBand from '../components/CtaBand'
import ScrollProgress from '../components/ScrollProgress'

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Hero />
      <Manifesto />
      <CollectionTeaser />
      <FabricGallery />
      <DetailsMarquee />
      <CraftTeaser />
      <JournalTeaser />
      <CtaBand />
    </>
  )
}
