import type { ReactNode } from 'react'
import { Paper } from '@mui/material'
import { contentPanelSx } from '../shared.styles'

interface ContentPanelProps {
  children: ReactNode
}

export function ContentPanel({ children }: ContentPanelProps) {
  return <Paper sx={contentPanelSx}>{children}</Paper>
}