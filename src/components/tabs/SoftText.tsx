import type { ReactNode } from 'react'
import { Typography } from '@mui/material'
import { processBodySx } from '../PortfolioTabs.styles'

interface SoftTextProps {
  children: ReactNode
}

export function SoftText({ children }: SoftTextProps) {
  return (
    <Typography variant="body1" color="text.secondary" sx={processBodySx}>
      {children}
    </Typography>
  )
}