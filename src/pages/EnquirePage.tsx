import PageHero from '../components/PageHero'
import PhotoFeature from '../components/PhotoFeature'
import Enquire from '../components/Enquire'
import { photos } from '../data/photos'

export default function EnquirePage() {
  return (
    <>
      <PageHero
        eyebrow="Private Enquiries"
        title="Begin a Piece"
        subtitle="Made to order, start to finish, for one wearer at a time."
        photo={photos.enquireHero}
        photoAlt="Israaya, made to order"
      />

      <PhotoFeature
        photo={photos.enquireAppointment}
        photoAlt="Israaya, by appointment"
        eyebrow="By Appointment"
        title="A conversation before a single stitch."
        paragraphs={[
          'Every enquiry begins the same way — a conversation about the occasion, the silhouette you have in mind, and a colour that has to work under more than one kind of light.',
          'From there we share fabric and thread options, confirm a timeline, and schedule fittings around your calendar, not ours.',
        ]}
        tone="ivory"
      />

      <Enquire />
    </>
  )
}
