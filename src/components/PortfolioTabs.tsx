import { useState } from 'react'
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import { TabContext, TabPanel } from '@mui/lab'
import { Banner } from './Banner'
import {
  contentCardSx,
  contentPanelSx,
  featuredGridSx,
  portfolioTabPanelSx,
  portfolioTabsSx,
} from './shared.styles'
import {
  featuredArtworkFrameSx,
  featuredArtworkSx,
  featuredArtworkTopCropSx,
  featuredArtworkLowerCropSx,
  featuredCaptionSx,
  featuredTitleSx,
  galleryLandscapeFrameSx,
  galleryPortraitFrameSx,
  galleryImageSx,
  galleryTitleSx,
  homeHeadingSx,
  homeSubheadingSx,
  processBodySx,
} from './PortfolioTabs.styles'
import easelWeddingPortrait from '../2ad68489-095f-4433-befd-ab51d09c77af.jpg'
import familyPortrait from '../5179b70a-1d12-42ab-9807-e754a9fbe6b2.jpg'
import weddingPortrait from '../1708808b-75de-4914-9807-d934d5a541f7.jpg'

const featuredPieces = [
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

const processSteps = [
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

export function PortfolioTabs() {
  const [value, setValue] = useState('home')

  return (
    <Box sx={portfolioTabsSx}>
      <TabContext value={value}>
        <Banner onTabChange={(_, newValue) => setValue(newValue)} />

        <TabPanel value="home" sx={portfolioTabPanelSx}>
          <Paper sx={contentPanelSx}>
            <Typography variant="h6" component="h2" sx={homeHeadingSx}>
              Add a little magic to your special day with live wedding painting
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={homeSubheadingSx}>
              Guests can watch the artwork take shape, leaving you with a one-of-a-kind
              keepsake of the moment.
            </Typography>

            <Box sx={featuredGridSx}>
              {featuredPieces.map((piece) => (
                <Box component="article" key={piece.title} sx={{ minWidth: 0 }}>
                  <Card sx={contentCardSx}>
                    <Box sx={featuredArtworkFrameSx}>
                      <CardMedia
                        component="img"
                        image={piece.image}
                        alt={piece.imageAlt}
                        sx={
                          piece.crop === 'top'
                            ? featuredArtworkTopCropSx
                            : piece.crop === 'lower'
                              ? featuredArtworkLowerCropSx
                              : featuredArtworkSx
                        }
                      />
                    </Box>
                    <CardContent sx={featuredCaptionSx}>
                      <Typography variant="h5" component="h3" sx={featuredTitleSx}>
                        {piece.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Box>
          </Paper>
        </TabPanel>

        <TabPanel value="process" sx={portfolioTabPanelSx}>
          <Paper sx={contentPanelSx}>
            <Typography variant="h4" component="h2" gutterBottom sx={galleryTitleSx}>
              The Process
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ ...processBodySx, mb: 3 }}
            >
              From our first conversation to the last little brushstroke, we’ll make a
              keepsake that feels wonderfully yours.
            </Typography>

            <Stack spacing={3}>
              {processSteps.map((step, index) => (
                <Box key={step.title}>
                  <Typography variant="h5" component="h3" sx={featuredTitleSx}>
                    {index + 1}. {step.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={processBodySx}>
                    {step.description}
                  </Typography>
                </Box>
              ))}
            </Stack>

            <Paper
              elevation={0}
              sx={{
                mt: 4,
                p: { xs: 2, sm: 3 },
                borderRadius: 2,
                backgroundColor: '#F5E8E6',
              }}
            >
              <Typography variant="h5" component="h3" sx={featuredTitleSx}>
                A note about booking
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={processBodySx}>
                Your date is secured with a non-refundable deposit. The remaining balance
                is due after your special day.
              </Typography>
            </Paper>
          </Paper>
        </TabPanel>

        <TabPanel value="details" sx={portfolioTabPanelSx}>
          <Paper sx={contentPanelSx}>
            <Typography variant="h4" component="h2" gutterBottom>
              About me
            </Typography>
            <Stack spacing={2}>
              <Typography variant="body1" color="text.secondary" sx={processBodySx}>
                Hi, I’m Holly, the artist behind Holly’s Art Studio. I specialize in live wedding
                painting and custom oil portraits, capturing life’s most cherished moments on
                canvas. My love for art began at a young age, drawing people and capturing
                personality through fine detail. As a warm, friendly, and sociable painter, I
                adore connecting with couples and guests, bringing both fine art and a gentle,
                joyous energy to your special day.
              </Typography>
            </Stack>
          </Paper>
        </TabPanel>

        <TabPanel value="gallery" sx={portfolioTabPanelSx}>
          <Typography variant="h4" component="h2" sx={galleryTitleSx}>
            Recent Work
          </Typography>
          <Stack spacing={4} sx={{ alignItems: 'center' }}>
            {featuredPieces.map((piece) => (
              <Card
                key={piece.title}
                sx={
                  piece.orientation === 'portrait'
                    ? galleryPortraitFrameSx
                    : galleryLandscapeFrameSx
                }
              >
                <CardMedia
                  component="img"
                  image={piece.image}
                  alt={piece.imageAlt}
                  sx={galleryImageSx}
                />
              </Card>
            ))}
          </Stack>
        </TabPanel>
      </TabContext>
    </Box>
  )
}
