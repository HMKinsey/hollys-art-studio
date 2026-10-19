import { Box, Paper, Stack } from '@mui/material'
import { processSteps } from '../../data/portfolio'
import { galleryTitleSx } from '../PortfolioTabs.styles'
import { ContentPanel } from './ContentPanel'
import { ScriptHeading } from './ScriptHeading'
import { SoftText } from './SoftText'

export function ProcessTab() {
  return (
    <ContentPanel>
      <Box sx={galleryTitleSx}>
        <ScriptHeading>The Process</ScriptHeading>
      </Box>
      <Box sx={{ mb: 3 }}>
        <SoftText>
          From our first conversation to the last little brushstroke, we’ll make a keepsake
          that feels wonderfully yours.
        </SoftText>
      </Box>

      <Stack spacing={3}>
        {processSteps.map((step, index) => (
          <Box key={step.title}>
            <ScriptHeading component="h3">
              {index + 1}. {step.title}
            </ScriptHeading>
            <SoftText>{step.description}</SoftText>
          </Box>
        ))}
      </Stack>

      <Paper
        elevation={0}
        sx={{
          mt: 4,
          p: { xs: 2, sm: 3 },
          borderRadius: 2,
          backgroundColor: '#F5E8E6',
        }}
      >
        <ScriptHeading component="h3">A note about booking</ScriptHeading>
        <SoftText>
          Your date is secured with a non-refundable deposit. The remaining balance is due
          after your special day.
        </SoftText>
      </Paper>
    </ContentPanel>
  )
}