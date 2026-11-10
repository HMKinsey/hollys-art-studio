import { portfolioPieces } from '../../data/portfolio'
import { sharedStrings } from '../../constants/shared'
import { cn } from '../../lib/cn'
import { Heading } from '../shared/Heading'

const galleryFrameClasses = {
  portrait: 'm-0 box-border w-[88%] overflow-hidden sm:w-[72%] md:w-[62%] md:max-w-[760px]',
  landscape: 'm-0 w-full overflow-hidden',
} as const

export function GalleryTab() {
  return (
    <>
      <div className="mb-3 text-center">
        <Heading>{sharedStrings.gallery.heading}</Heading>
      </div>
      <div className="flex flex-col items-center gap-8">
        {portfolioPieces.map((piece) => (
          <figure
            key={piece.title}
            className={cn(galleryFrameClasses[piece.orientation])}
          >
            <img
              src={piece.image}
              alt={piece.imageAlt}
              className="block h-auto max-h-[72vh] w-full max-w-full object-contain"
            />
          </figure>
        ))}
      </div>
    </>
  )
}