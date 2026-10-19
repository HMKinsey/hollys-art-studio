import easelWeddingPortrait from '../2ad68489-095f-4433-befd-ab51d09c77af.jpg'
import familyPortrait from '../5179b70a-1d12-42ab-9807-e754a9fbe6b2.jpg'
import weddingPortrait from '../1708808b-75de-4914-9807-d934d5a541f7.jpg'

export interface PortfolioPiece {
  title: string
  image: string
  imageAlt: string
  orientation: 'portrait' | 'landscape'
  crop?: 'top' | 'lower'
}

export const portfolioPieces: PortfolioPiece[] = [
  {
    title: 'Hannah & Liam',
    image: easelWeddingPortrait,
    imageAlt: 'Painted portrait of a couple displayed on an artist’s easel',
    orientation: 'portrait',
    crop: 'top',
  },
  {
    title: 'Danielle & Chad',
    image: familyPortrait,
    imageAlt: 'Painting of a couple holding their baby outdoors',
    orientation: 'portrait',
  },
  {
    title: 'Rachel & Neville',
    image: weddingPortrait,
    imageAlt: 'Painting of a newly married couple holding hands outdoors',
    orientation: 'landscape',
    crop: 'lower',
  },
]

export const processSteps = [
  {
    title: 'A little planning call',
    description:
      'We start with a friendly telephone chat to dream up the moment you would love to remember: perhaps your first kiss, your walk down the aisle, or a quiet moment in the gardens. We’ll talk through the scene, the feeling you want to keep, and which of my previous painting styles has caught your eye.',
  },
  {
    title: 'Setting the scene',
    description:
      'On your wedding day, I arrive with my table, easel, canvas, and oil paints, ready to make a little studio wherever the celebration takes us. I sketch the composition, then begin building the main shapes, colours, and details into the painting.',
  },
  {
    title: 'A painting guests can watch unfold',
    description:
      'As the first layers come to life, guests are welcome to stop by, have a look, and enjoy seeing the painting take shape. I love chatting with everyone and adding a little friendly, arty entertainment to the day. I’ll leave the celebration with the painting around 80% complete.',
  },
  {
    title: 'Finishing touches back at the studio',
    description:
      'Once the first layer has dried enough, I bring the painting home to add the final touches. I then use a breathable satin retouch varnish, so the oil painting can continue drying while gaining a soft, finished sheen—without waiting for the lengthy full-cure period before it can be enjoyed.',
  },
]
