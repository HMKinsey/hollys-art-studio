import HannahLiam from '../assets/HannahLiam.jpg'
import danielleChadEvie from '../assets/DanielleChad.jpg'
import weddingPortrait from '../assets/NevilleRachel.jpg'
import { sharedStrings } from '../constants/shared'

export interface PortfolioPiece {
  title: string
  image: string
  imageAlt: string
  orientation: 'portrait' | 'landscape'
  crop?: 'top' | 'lower'
}

export const portfolioPieces: PortfolioPiece[] = [
  {
    ...sharedStrings.portfolio.pieces.hannahLiam,
    image: HannahLiam,
    orientation: 'portrait',
    crop: 'top',
  },
  {
    ...sharedStrings.portfolio.pieces.danielleChad,
    image: danielleChadEvie,
    orientation: 'portrait',
  },
  {
    ...sharedStrings.portfolio.pieces.rachelNeville,
    image: weddingPortrait,
    orientation: 'landscape',
    crop: 'lower',
  },
]

export const processSteps = sharedStrings.process.steps
