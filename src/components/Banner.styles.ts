import type { SxProps, Theme } from '@mui/material'

export const bannerSx: SxProps<Theme> = {
  width: '100vw',
  ml: 'calc(50% - 50vw)',
  mb: 1,
  py: 1,
  background:
    'linear-gradient(90deg, rgba(245,232,230,0) 0%, #F5E8E6 18%, #F5E8E6 82%, rgba(245,232,230,0) 100%)',
}

export const bannerContentSx: SxProps<Theme> = {
  maxWidth: 1200,
  mx: 'auto',
  px: { xs: 2, sm: 3 },
  textAlign: 'center',
}

export const bannerTitleSx: SxProps<Theme> = {
  fontFamily: '"Dancing Script", cursive',
  fontWeight: 500,
  fontSize: { xs: '3.25rem', sm: '4rem', md: '4.5rem' },
  lineHeight: 1.1,
  mt: 0,
  mb: 0.25,
  color: '#2D2B2A',
}

export const bannerDescriptionSx: SxProps<Theme> = {
  maxWidth: 700,
  mx: 'auto',
  color: '#625d59',
  fontFamily: 'Roboto, Arial, sans-serif',
  fontSize: { xs: '0.95rem', sm: '1.05rem' },
  lineHeight: 1.5,
}

export const bannerTabListSx: SxProps<Theme> = {
  mt: 0.5,
  '& .MuiTabs-indicator': {
    backgroundColor: '#8A7370',
    height: 3,
    borderRadius: 3,
  },
}

export const bannerTabSx: SxProps<Theme> = {
  minHeight: 38,
  color: '#2D2B2A',
  fontWeight: 600,
  '&.Mui-selected': {
    color: '#8A7370',
  },
}
