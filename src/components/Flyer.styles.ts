import type { SxProps, Theme } from '@mui/material'

export const flyerPageSx: SxProps<Theme> = {
  minHeight: '100vh',
  py: { xs: 2, sm: 4 },
  px: 2,
  backgroundColor: '#F9F6F0',
}

export const flyerSheetSx: SxProps<Theme> = {
  boxSizing: 'border-box',
  width: '100%',
  maxWidth: 820,
  mx: 'auto',
  p: { xs: 2.5, sm: 4 },
  display: 'flex',
  flexDirection: 'column',
  gap: { xs: 1.25, sm: 1.75 },
  backgroundColor: '#FFFDF9',
  border: '1px solid #E9DED5',
  boxShadow: '0 12px 40px rgba(51, 48, 46, 0.10)',
}

export const flyerHeaderSx: SxProps<Theme> = {
  textAlign: 'center',
  py: { xs: 1.5, sm: 2 },
  background:
    'linear-gradient(90deg, rgba(245,232,230,0) 0%, #F5E8E6 18%, #F5E8E6 82%, rgba(245,232,230,0) 100%)',
}

export const flyerTitleSx: SxProps<Theme> = {
  fontFamily: '"Dancing Script", cursive',
  fontSize: { xs: '2.75rem', sm: '3.75rem' },
  fontWeight: 500,
  lineHeight: 1.1,
  color: '#2D2B2A',
}

export const flyerSubtitleSx: SxProps<Theme> = {
  mt: 0.5,
  fontSize: { xs: '0.8rem', sm: '0.95rem' },
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: '#8A7370',
}

export const flyerQuoteSx: SxProps<Theme> = {
  textAlign: 'center',
  fontFamily: '"Dancing Script", cursive',
  fontSize: { xs: '1.5rem', sm: '2rem' },
  lineHeight: 1.25,
  color: '#8A7370',
}

export const flyerArtworkGridSx: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: { xs: 1, sm: 1.5 },
}

export const flyerImageFrameSx: SxProps<Theme> = {
  height: { xs: 185, sm: 220 },
  width: 'fit-content',
  boxSizing: 'border-box',
  p: '5px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  backgroundColor: '#33302E',
}

export const flyerImageSx: SxProps<Theme> = {
  display: 'block',
  height: '100%',
  width: 'auto',
  maxWidth: '100%',
  objectFit: 'cover',
}

export const flyerSectionTitleSx: SxProps<Theme> = {
  mb: 0.75,
  fontFamily: '"Dancing Script", cursive',
  fontSize: { xs: '1.5rem', sm: '1.8rem' },
  lineHeight: 1.2,
  color: '#8A7370',
}

export const flyerBodySx: SxProps<Theme> = {
  fontSize: { xs: '0.82rem', sm: '0.95rem' },
  lineHeight: 1.55,
  color: '#625d59',
}

export const flyerContactSx: SxProps<Theme> = {
  pt: 1,
  borderTop: '1px solid #E9DED5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 2,
}

export const flyerPrintButtonSx: SxProps<Theme> = {
  backgroundColor: '#8A7370',
  '&:hover': { backgroundColor: '#725e5b' },
}

export const flyerPdfButtonSx: SxProps<Theme> = {
  color: '#725e5b',
  borderColor: '#8A7370',
  backgroundColor: '#FFFDF9',
  '&:hover': {
    borderColor: '#725e5b',
    backgroundColor: '#F5E8E6',
  },
}

export const flyerActionsSx: SxProps<Theme> = {
  position: 'fixed',
  right: 20,
  bottom: 20,
  zIndex: 10,
}
