import meImage from '../../assets/me.jpg'
import { sharedStrings } from '../../constants/shared'
import { ContentPanel } from '../shared/ContentPanel'
import { Heading } from '../shared/Heading'
import { BodyText } from '../shared/BodyText'

export function AboutTab() {
  return (
    <ContentPanel>
      <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-[minmax(0,1fr)_minmax(220px,32%)] md:gap-8">
        <div>
          <Heading>{sharedStrings.about.heading}</Heading>
          <BodyText>{sharedStrings.about.description}</BodyText>
        </div>
        <img
          src={meImage}
          alt={sharedStrings.about.artistImageAlt}
          className="mx-auto block aspect-[4/5] max-h-[360px] w-full rounded-2xl object-cover"
        />
      </div>
    </ContentPanel>
  )
}