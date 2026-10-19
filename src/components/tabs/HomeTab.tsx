import { Box, Typography } from '@mui/material'
import { portfolioPieces } from '../../data/portfolio'
import { featuredGridSx } from '../shared.styles'
import { homeHeadingSx, homeSubheadingSx } from '../PortfolioTabs.styles'
import { ContentPanel } from './ContentPanel'
import { FeaturedArtworkCard } from './FeaturedArtworkCard'

export function HomeTab() {
  return (
    <ContentPanel>
      <Typography variant="h6" component="h2" sx={homeHeadingSx}>
        Add a little magic to your special day with live wedding painting
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={homeSubheadingSx}>
        Guests can watch the artwork take shape, leaving you with a one-of-a-kind keepsake
        of the moment.
      </Typography>
      <Box sx={featuredGridSx}>
        {portfolioPieces.map((piece) => (
          <FeaturedArtworkCard key={piece.title} piece={piece} />
        ))}
      </Box>
    </ContentPanel>
  )
}