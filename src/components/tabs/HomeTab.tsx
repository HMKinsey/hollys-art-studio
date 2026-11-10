import { portfolioPieces } from '../../data/portfolio'
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
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-4">
        {portfolioPieces.map((piece) => (
          <FeaturedArtworkCard key={piece.title} piece={piece} />
        ))}
      </div>
    </ContentPanel>
  )
}