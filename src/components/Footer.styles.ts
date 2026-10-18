import type { SxProps, Theme } from '@mui/material'

export const footerSx: SxProps<Theme> = {
  mt: 6,
  py: 4,
  borderTop: '1px solid',
  borderColor: 'divider',
}

export const footerContentSx: SxProps<Theme> = {
  justifyContent: 'space-between',
  alignItems: { xs: 'flex-start', sm: 'center' },
}
