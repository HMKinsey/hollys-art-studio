import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import type { PortfolioPiece } from '../../data/portfolio'
import { contentCardSx } from '../shared.styles'
import {
  featuredArtworkFrameSx,
  featuredArtworkLowerCropSx,
  featuredArtworkSx,
  featuredArtworkTopCropSx,
  featuredCaptionSx,
  featuredTitleSx,
} from '../PortfolioTabs.styles'

interface FeaturedArtworkCardProps {
  piece: PortfolioPiece
}

export function FeaturedArtworkCard({ piece }: FeaturedArtworkCardProps) {
  const imageStyles =
    piece.crop === 'top'
      ? featuredArtworkTopCropSx
      : piece.crop === 'lower'
        ? featuredArtworkLowerCropSx
        : featuredArtworkSx

  return (
    <Card component="article" sx={contentCardSx}>
      <Box sx={featuredArtworkFrameSx}>
        <CardMedia
          component="img"
          image={piece.image}
          alt={piece.imageAlt}
          sx={imageStyles}
        />
      </Box>
      <CardContent sx={featuredCaptionSx}>
        <Typography variant="h5" component="h3" sx={featuredTitleSx}>
          {piece.title}
        </Typography>
      </CardContent>
    </Card>
  )
}