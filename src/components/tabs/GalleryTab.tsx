import { Card, CardMedia, Stack } from '@mui/material'
import { portfolioPieces } from '../../data/portfolio'
import {
  galleryImageSx,
  galleryLandscapeFrameSx,
  galleryPortraitFrameSx,
  galleryTitleSx,
} from '../PortfolioTabs.styles'
import { ScriptHeading } from './ScriptHeading'

export function GalleryTab() {
  return (
    <>
      <Stack sx={{ alignItems: 'center', mb: 3, ...galleryTitleSx }}>
        <ScriptHeading>Recent Work</ScriptHeading>
      </Stack>
      <Stack spacing={4} sx={{ alignItems: 'center' }}>
        {portfolioPieces.map((piece) => (
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
    </>
  )
}