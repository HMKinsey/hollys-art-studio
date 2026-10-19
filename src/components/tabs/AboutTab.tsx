import { ContentPanel } from './ContentPanel'
import { ScriptHeading } from './ScriptHeading'
import { SoftText } from './SoftText'

export function AboutTab() {
  return (
    <ContentPanel>
      <ScriptHeading>About me</ScriptHeading>
      <SoftText>
        Hi, I’m Holly, the artist behind Holly’s Art Studio. I specialize in live wedding
        painting and custom oil portraits, capturing life’s most cherished moments on
        canvas. My love for art began at a young age, drawing people and capturing
        personality through fine detail. As a warm, friendly, and sociable painter, I
        adore connecting with couples and guests, bringing both fine art and a gentle,
        joyous energy to your special day.
      </SoftText>
    </ContentPanel>
  )
}