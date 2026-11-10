import { featuredPortfolioPieces, studioMoments } from '../../data/portfolio'
import { sharedStrings } from '../../constants/shared'
import { ContentPanel } from '../shared/ContentPanel'
import { Heading } from '../shared/Heading'
import { BodyText } from '../shared/BodyText'
import { FeaturedArtworkCard } from '../shared/FeaturedArtworkCard'

export function HomeTab() {
  return (
    <ContentPanel>
      <Heading className="mb-1">
        {sharedStrings.home.heading}
      </Heading>
      <BodyText className="mb-3">{sharedStrings.home.description}</BodyText>
      <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featuredPortfolioPieces.map((piece) => (
          <FeaturedArtworkCard key={piece.title} piece={piece} />
        ))}
      </div>
      <div className="mt-6 grid grid-cols-1 items-start gap-3 md:grid-cols-2">
        {studioMoments.map((moment) => (
          <figure
            key={moment.image}
            className="overflow-hidden rounded-3xl bg-frame text-center"
          >
            <div className="h-[380px] w-full md:h-[400px]">
              <img
                src={moment.image}
                alt={moment.imageAlt}
                className="block h-full w-full rounded-3xl object-cover"
              />
            </div>
            <figcaption className="px-4 py-3">
              <Heading as="h3" variant="display" className="text-inherit">
                {moment.title}
              </Heading>
            </figcaption>
          </figure>
        ))}
      </div>
    </ContentPanel>
  )
}