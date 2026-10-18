import type { SxProps, Theme } from '@mui/material'

export const detailsItemSx: SxProps<Theme> = {
  borderBottom: '1px solid',
  borderColor: 'divider',
  pb: 1,
}

const galleryFrameBaseSx = {
  boxSizing: 'border-box',
  p: 1,
  backgroundColor: '#33302E',
  borderRadius: 2,
  overflow: 'hidden',
  boxShadow: 'none',
}

export const galleryPortraitFrameSx: SxProps<Theme> = {
  ...galleryFrameBaseSx,
  width: { xs: '88%', sm: '72%', md: '62%' },
  maxWidth: 760,
}

export const galleryLandscapeFrameSx: SxProps<Theme> = {
  ...galleryFrameBaseSx,
  width: '100%',
}

export const galleryImageSx: SxProps<Theme> = {
  display: 'block',
  width: '100%',
  height: 'auto',
  maxWidth: '100%',
  objectFit: 'contain',
}

export const featuredArtworkSx: SxProps<Theme> = {
  aspectRatio: '4 / 5',
  width: '100%',
  height: 'auto',
  boxSizing: 'border-box',
  objectFit: 'cover',
  backgroundColor: '#33302E',
}

export const featuredCaptionSx: SxProps<Theme> = {
  minHeight: 76,
  px: 2,
  py: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  '&:last-child': {
    pb: 1,
  },
}

export const featuredTitleSx: SxProps<Theme> = {
  fontFamily: '"Dancing Script", cursive',
  fontSize: { xs: '1.75rem', sm: '2rem' },
  fontWeight: 500,
  lineHeight: 1.2,
}

export const galleryTitleSx: SxProps<Theme> = {
  mb: 3,
  textAlign: 'center',
}
