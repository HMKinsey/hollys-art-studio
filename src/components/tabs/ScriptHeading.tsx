import type { ReactNode } from 'react'
import { Typography } from '@mui/material'
import { featuredTitleSx } from '../PortfolioTabs.styles'

interface ScriptHeadingProps {
  children: ReactNode
  component?: 'h2' | 'h3'
}

export function ScriptHeading({ children, component = 'h2' }: ScriptHeadingProps) {
  return (
    <Typography variant="h4" component={component} sx={featuredTitleSx}>
      {children}
    </Typography>
  )
}