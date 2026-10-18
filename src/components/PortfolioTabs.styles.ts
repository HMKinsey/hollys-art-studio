import type { SxProps, Theme } from '@mui/material'

export const detailsItemSx: SxProps<Theme> = {
  borderBottom: '1px solid',
  borderColor: 'divider',
  pb: 1,
}

const galleryFrameBaseSx = {
  boxSizing: 'border-box',
  p: 0,
  backgroundColor: 'transparent',
  borderRadius: 0,
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
  maxHeight: '72vh',
  objectFit: 'contain',
}

export const featuredArtworkFrameSx: SxProps<Theme> = {
  aspectRatio: '4 / 5',
  width: '100%',
  maxHeight: 'min(380px, calc(45vh - 64px))',
  boxSizing: 'border-box',
  p: 1,
  backgroundColor: '#33302E',
}

export const featuredArtworkSx: SxProps<Theme> = {
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}

export const featuredArtworkTopCropSx: SxProps<Theme> = {
  ...featuredArtworkSx,
  objectPosition: 'center 25%',
}

export const featuredArtworkLowerCropSx: SxProps<Theme> = {
  ...featuredArtworkSx,
  objectPosition: 'center 65%',
}

export const featuredCaptionSx: SxProps<Theme> = {
  minHeight: 54,
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
  fontFamily: '"Dancing Script", cursive',
  fontWeight: 500,
  fontSize: { xs: '2.5rem', sm: '3rem' },
  color: '#2D2B2A',
}

export const homeHeadingSx: SxProps<Theme> = {
  fontFamily: '"Dancing Script", cursive',
  fontSize: { xs: '1.8rem', sm: '2.1rem' },
  fontWeight: 600,
  mb: 0.5,
  lineHeight: 1.25,
}

export const homeSubheadingSx: SxProps<Theme> = {
  fontFamily: 'Roboto, Arial, sans-serif',
  fontSize: { xs: '1rem', sm: '1.05rem' },
  lineHeight: 1.7,
  color: '#625d59',
  mb: 1.5,
}

export const processBodySx: SxProps<Theme> = {
  fontFamily: 'Roboto, Arial, sans-serif',
  fontSize: { xs: '1rem', sm: '1.05rem' },
  lineHeight: 1.7,
  color: '#625d59',
}
