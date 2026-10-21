import { Box } from '@mui/material'
import meImage from '../../me.jpg'
import { ContentPanel } from './ContentPanel'
import { ScriptHeading } from './ScriptHeading'
import { SoftText } from './SoftText'

export function AboutTab() {
  return (
    <ContentPanel>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1fr) minmax(220px, 32%)' },
          alignItems: 'center',
          gap: { xs: 2, md: 4 },
        }}
      >
        <Box>
          <ScriptHeading>About me</ScriptHeading>
          <SoftText>
            Hi, I’m Holly, the artist behind Holly’s Art Studio. I specialize in live wedding
            painting and custom oil portraits, capturing life’s most cherished moments on
            canvas. My love for art began at a young age, drawing people and capturing
            personality through fine detail. As a warm, friendly, and sociable painter, I
            adore connecting with couples and guests, bringing both fine art and a gentle,
            joyous energy to your special day.
          </SoftText>
        </Box>
        <Box
          component="img"
          src={meImage}
          alt="Holly, the artist behind Holly’s Art Studio"
          sx={{
            display: 'block',
            width: '100%',
            maxHeight: 360,
            aspectRatio: '4 / 5',
            objectFit: 'cover',
            borderRadius: 2,
          }}
        />
      </Box>
    </ContentPanel>
  )
}