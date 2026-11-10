import aliceTheCat from '../assets/AliceTheCat.jpg'
import danielleChadImage from '../assets/DanielleChad.jpg'
import HannahLiamImage from '../assets/HannahLiam.jpg'
import mePainting from '../assets/mepainting.jpg'
import weddingPortrait from '../assets/NevilleRachel.jpg'
import sheilaRegImage from '../assets/SheilaReg.jpg'
import sonyaDaveImage from '../assets/SonyaDave.jpg'
import { sharedStrings } from '../constants/shared'

export interface PortfolioPiece {
  title: string
  image: string
  imageAlt: string
}

const sonyaDave: PortfolioPiece = {
  ...sharedStrings.portfolio.pieces.sonyaDave,
  image: sonyaDaveImage,
}
const danielleChad: PortfolioPiece = {
  ...sharedStrings.portfolio.pieces.danielleChad,
  image: danielleChadImage,
}
const hannahLiam: PortfolioPiece = {
  ...sharedStrings.portfolio.pieces.hannahLiam,
  image: HannahLiamImage,
}
const sheilaReg: PortfolioPiece = {
  ...sharedStrings.portfolio.pieces.sheilaReg,
  image: sheilaRegImage,
}
const rachelNeville: PortfolioPiece = {
  ...sharedStrings.portfolio.pieces.rachelNeville,
  image: weddingPortrait,
}
const alice: PortfolioPiece = {
  ...sharedStrings.portfolio.pieces.aliceTheCat,
  image: aliceTheCat,
}

export const featuredPortfolioPieces = [sonyaDave, danielleChad, hannahLiam]

export const portfolioPieces = [
  alice,
  ...featuredPortfolioPieces,
  sheilaReg,
  rachelNeville,
]

export const flyerPaintings = [hannahLiam, rachelNeville, danielleChad]

export const studioMoments = [
  {
    ...sharedStrings.portfolio.pieces.sheilaReg,
    image: sheilaRegImage,
  },
  {
    ...sharedStrings.portfolio.pieces.rachelNeville,
    image: weddingPortrait,
  },
]

export const paintingInProgress = {
  image: mePainting,
  imageAlt: sharedStrings.portfolio.studioMoments.painting.imageAlt,
}

export const processSteps = sharedStrings.process.steps
