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
  featuredArtworkSx,
  featuredCaptionSx,
  featuredTitleSx,
  galleryLandscapeFrameSx,
  galleryPortraitFrameSx,
  galleryImageSx,
  galleryTitleSx,
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
            <Typography variant="h6" component="h2" gutterBottom>
              Add a little magic to your special day with live wedding painting
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Guests can watch the artwork take shape, leaving you with a one-of-a-kind
              keepsake of the moment.
            </Typography>

            <Box sx={featuredGridSx}>
              {featuredPieces.map((piece) => (
                <Box component="article" key={piece.title} sx={{ minWidth: 0 }}>
                  <Card sx={contentCardSx}>
                    <CardMedia
                      component="img"
                      image={piece.image}
                      alt={piece.imageAlt}
                      sx={featuredArtworkSx}
                    />
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

        <TabPanel value="details" sx={portfolioTabPanelSx}>
          <Paper sx={contentPanelSx}>
            <Typography variant="h4" component="h2" gutterBottom>
              About me
            </Typography>
            <Stack spacing={2}>
              <Typography variant="body1" color="text.secondary">
                Hi, I&apos;m Holly, the artist behind Holly&apos;s Art Studio. I create original
                paintings and custom commissions that bring personality, color, and meaning
                into your space.
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Whether you&apos;re looking for a one-of-a-kind piece or have an idea you&apos;d
                like to bring to life, I&apos;d love to hear from you.
              </Typography>
            </Stack>
          </Paper>
        </TabPanel>

        <TabPanel value="gallery" sx={portfolioTabPanelSx}>
          <Typography variant="h4" component="h2" sx={galleryTitleSx}>
            Recent Paintings
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
