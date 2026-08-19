import PageHero from '../components/PageHero'
import ChapterCard from '../components/ChapterCard'
import { nikhaarCollection } from '../data/collection'
import { photos } from '../data/photos'

export default function CollectionPage() {
  return (
    <>
      <PageHero
        eyebrow="Chapter I"
        title="Nikhaar"
        subtitle="Four pieces, worked by hand, numbered in the order they were made."
        photo={photos.bridalSaree}
        photoAlt="Editorial portrait in a hand-embroidered saree"
      />
      <div className="divide-y divide-gold/15 bg-ink">
        {nikhaarCollection.map((piece, i) => (
          <ChapterCard key={piece.number} piece={piece} index={i} />
        ))}
      </div>
    </>
  )
}
