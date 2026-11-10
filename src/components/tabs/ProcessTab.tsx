import { processSteps } from '../../data/portfolio'
import { sharedStrings } from '../../constants/shared'
import { ContentPanel } from '../shared/ContentPanel'
import { Heading } from '../shared/Heading'
import { BodyText } from '../shared/BodyText'

export function ProcessTab() {
  return (
    <ContentPanel>
      <div className="mb-3 text-center">
        <Heading>{sharedStrings.process.heading}</Heading>
      </div>
      <div className="mb-3">
        <BodyText>{sharedStrings.process.introduction}</BodyText>
      </div>

      <div className="flex flex-col gap-6">
        {processSteps.map((step, index) => (
          <section key={step.title}>
            <Heading as="h3">
              {index + 1}. {step.title}
            </Heading>
            <BodyText>{step.description}</BodyText>
          </section>
        ))}
      </div>

      <aside className="mt-8 rounded-2xl bg-blush p-4 sm:p-6">
        <Heading as="h3">{sharedStrings.process.bookingHeading}</Heading>
        <BodyText>{sharedStrings.process.booking}</BodyText>
      </aside>
    </ContentPanel>
  )
}