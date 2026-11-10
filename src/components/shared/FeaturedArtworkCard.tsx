import type { PortfolioPiece } from '../../data/portfolio'
import { cn } from '../../lib/cn'
import { Heading } from './Heading'

const imagePositionClasses = {
  top: 'object-[center_25%]',
  lower: 'object-[center_65%]',
} as const

interface FeaturedArtworkCardProps {
  piece: PortfolioPiece
}

export function FeaturedArtworkCard({ piece }: FeaturedArtworkCardProps) {
  const imagePosition = piece.crop ? imagePositionClasses[piece.crop] : undefined

  return (
    <article className="h-full min-w-0 overflow-hidden rounded-3xl bg-frame text-white">
      <div className="box-border aspect-[4/5] max-h-[min(380px,calc(45vh-64px))] w-full bg-frame p-2">
        <img
          src={piece.image}
          alt={piece.imageAlt}
          className={cn('block h-full w-full object-cover', imagePosition)}
        />
      </div>
      <div className="flex min-h-[54px] items-center justify-center px-4 py-2 text-center">
        <Heading as="h3" className="text-inherit">
          {piece.title}
        </Heading>
      </div>
    </article>
  )
}