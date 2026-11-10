import type { PortfolioPiece } from '../../data/portfolio'
import { Heading } from './Heading'

interface FeaturedArtworkCardProps {
  piece: PortfolioPiece
}

export function FeaturedArtworkCard({ piece }: FeaturedArtworkCardProps) {
  return (
    <figure className="m-0 min-w-0 overflow-hidden rounded-3xl bg-frame text-center">
      <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl">
        <img
          src={piece.image}
          alt={piece.imageAlt}
          className="block h-full w-full object-contain"
        />
      </div>
      <figcaption className="px-4 py-3">
        <Heading as="h3" variant="display" className="text-inherit">
          {piece.title}
        </Heading>
      </figcaption>
    </figure>
  )
}
