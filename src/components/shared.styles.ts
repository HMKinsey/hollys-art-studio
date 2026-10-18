import type { SxProps, Theme } from '@mui/material'

export const portfolioTabsSx: SxProps<Theme> = {
  width: '100%',
  mb: 4,
}

export const portfolioTabPanelSx: SxProps<Theme> = {
  p: 0,
}

export const contentPanelSx: SxProps<Theme> = {
  p: { xs: 1.5, md: 2 },
  borderRadius: 3,
}

export const featuredGridSx: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
  gap: 2,
}

export const contentCardSx: SxProps<Theme> = {
  height: '100%',
  minWidth: 0,
  overflow: 'hidden',
  borderRadius: 3,
  backgroundColor: '#33302E',
  color: '#fff',
  '& .MuiTypography-root': {
    color: 'inherit',
  },
  '& .MuiTypography-colorTextSecondary': {
    color: 'rgba(255, 255, 255, 0.76)',
  },
}
