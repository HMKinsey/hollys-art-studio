import { useState } from 'react'
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import { TabContext, TabPanel } from '@mui/lab'
import { Banner } from './Banner'
import {
  contentCardSx,
  contentPanelSx,
  portfolioTabPanelSx,
  portfolioTabsSx,
} from './shared.styles'
import { featuredArtworkSx, galleryArtworkSx } from './PortfolioTabs.styles'
import easelWeddingPortrait from '../2ad68489-095f-4433-befd-ab51d09c77af.jpg'
import familyPortrait from '../5179b70a-1d12-42ab-9807-e754a9fbe6b2.jpg'
import weddingPortrait from '../1708808b-75de-4914-9807-d934d5a541f7.jpg'

const featuredPieces = [
  {
    title: 'Wedding-day portrait',
    description: 'A keepsake painting capturing a special moment together.',
    image: easelWeddingPortrait,
    imageAlt: 'Painted portrait of a couple displayed on an artist’s easel',
  },
  {
    title: 'Family portrait',
    description: 'A heartfelt family moment brought to life in paint.',
    image: familyPortrait,
    imageAlt: 'Painting of a couple holding their baby outdoors',
  },
  {
    title: 'Wedding portrait',
    description: 'A custom portrait celebrating a couple’s wedding day.',
    image: weddingPortrait,
    imageAlt: 'Painting of a newly married couple holding hands outdoors',
  },
]

const galleryItems = [
  {
    title: 'Sunset Study',
    description: 'Warm layered tones and painterly texture for statement walls.',
  },
  {
    title: 'Botanical Bloom',
    description: 'Soft florals blended with vibrant accent colors and delicate movement.',
  },
  {
    title: 'Coastal Quiet',
    description: 'A calm seascape designed to bring a soothing mood to a room.',
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
              Add a little magic to your special day with live wedding painting.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Guests can watch the artwork take shape, leaving you with a one-of-a-kind
              keepsake of the moment.
            </Typography>

            <Grid container spacing={3}>
              {featuredPieces.map((piece) => (
                <Grid size={{ xs: 12, md: 4 }} key={piece.title}>
                  <Card sx={contentCardSx}>
                    <CardMedia
                      component="img"
                      image={piece.image}
                      alt={piece.imageAlt}
                      sx={featuredArtworkSx}
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {piece.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {piece.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
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
          <Grid container spacing={3}>
            {galleryItems.map((item) => (
              <Grid size={{ xs: 12, md: 4 }} key={item.title}>
                <Card sx={contentCardSx}>
                  <Box sx={galleryArtworkSx} />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </TabPanel>
      </TabContext>
    </Box>
  )
}
