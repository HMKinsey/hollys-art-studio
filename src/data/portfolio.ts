import aliceTheCat from '../assets/AliceTheCat.jpg';
import danielleChadImage from '../assets/DanielleChad.jpg';
import HannahLiamImage from '../assets/HannahLiam.jpg';
import mePainting from '../assets/mepainting.jpg';
import weddingPortrait from '../assets/NevilleRachel.jpg';
import sheilaRegImage from '../assets/SheilaReg.jpg';
import sonyaDaveImage from '../assets/SonyaDave.jpg';
import { en } from '../locales/en';

export interface PortfolioPiece {
  title: string;
  image: string;
  imageAlt: string;
}

const sonyaDave: PortfolioPiece = {
  ...en.portfolio.pieces.sonyaDave,
  image: sonyaDaveImage,
};
const danielleChad: PortfolioPiece = {
  ...en.portfolio.pieces.danielleChad,
  image: danielleChadImage,
};
const hannahLiam: PortfolioPiece = {
  ...en.portfolio.pieces.hannahLiam,
  image: HannahLiamImage,
};
const sheilaReg: PortfolioPiece = {
  ...en.portfolio.pieces.sheilaReg,
  image: sheilaRegImage,
};
const rachelNeville: PortfolioPiece = {
  ...en.portfolio.pieces.rachelNeville,
  image: weddingPortrait,
};
const alice: PortfolioPiece = {
  ...en.portfolio.pieces.aliceTheCat,
  image: aliceTheCat,
};

export const featuredPortfolioPieces = [sonyaDave, danielleChad, hannahLiam];

export const portfolioPieces = [
  alice,
  ...featuredPortfolioPieces,
  sheilaReg,
  rachelNeville,
];

export const flyerPaintings = [hannahLiam, rachelNeville, danielleChad];

export const studioMoments = [
  {
    ...en.portfolio.pieces.sheilaReg,
    image: sheilaRegImage,
  },
  {
    ...en.portfolio.pieces.rachelNeville,
    image: weddingPortrait,
  },
];

export const paintingInProgress = {
  image: mePainting,
  imageAlt: en.portfolio.studioMoments.painting.imageAlt,
};

export const processSteps = en.process.steps;
