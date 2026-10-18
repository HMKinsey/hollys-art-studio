import type { SxProps, Theme } from '@mui/material'

export const detailsItemSx: SxProps<Theme> = {
  borderBottom: '1px solid',
  borderColor: 'divider',
  pb: 1,
}

export const galleryArtworkSx: SxProps<Theme> = {
  height: 220,
  background: 'linear-gradient(135deg, #f9d976 0%, #f76b8a 100%)',
}

export const featuredArtworkSx: SxProps<Theme> = {
  height: { xs: 340, sm: 380 },
  objectFit: 'cover',
  backgroundColor: '#F9F6F0',
}
