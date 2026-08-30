import PageHero from '../components/PageHero'
import ChapterCard from '../components/ChapterCard'
<<<<<<< HEAD
import CollectionInfo from '../components/CollectionInfo'
=======
>>>>>>> ef60104c4d56e5c386e4299865ffec061bce503a
import { nikhaarCollection } from '../data/collection'
import { photos } from '../data/photos'

export default function CollectionPage() {
  return (
    <>
      <PageHero
        eyebrow="Chapter I"
        title="Nikhaar"
<<<<<<< HEAD
        subtitle="Six pieces from our debut chapter, worked by hand, numbered in the order they were made."
        photo={photos.bridalSaree}
        photoAlt="Editorial portrait in a hand-embroidered saree"
      />
      <CollectionInfo />
=======
        subtitle="Four pieces, worked by hand, numbered in the order they were made."
        photo={photos.bridalSaree}
        photoAlt="Editorial portrait in a hand-embroidered saree"
      />
>>>>>>> ef60104c4d56e5c386e4299865ffec061bce503a
      <div className="divide-y divide-gold/15 bg-ink">
        {nikhaarCollection.map((piece, i) => (
          <ChapterCard key={piece.number} piece={piece} index={i} />
        ))}
      </div>
    </>
  )
}
