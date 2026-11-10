import { portfolioPieces } from '../../data/portfolio'
import { sharedStrings } from '../../constants/shared'
import { Heading } from '../shared/Heading'

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
            className="m-0 w-full max-w-[900px] overflow-hidden rounded-3xl bg-frame"
          >
            <img
              src={piece.image}
              alt={piece.imageAlt}
              className="block h-auto w-full object-contain"
            />
          </figure>
        ))}
      </div>
    </>
  )
}
