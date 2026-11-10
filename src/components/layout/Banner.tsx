import type { KeyboardEvent } from 'react'
import { sharedStrings, type StudioTabId } from '../../constants/shared'
import { cn } from '../../lib/cn'
import { BodyText } from '../shared/BodyText'
import { Heading } from '../shared/Heading'

const tabClasses = {
  base: 'min-h-[38px] shrink-0 border-b-[3px] px-4 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose',
  active: 'border-rose text-rose',
  inactive: 'border-transparent text-ink',
}

interface BannerProps {
  activeTab: StudioTabId
  onTabChange: (tab: StudioTabId) => void
}

export function Banner({ activeTab, onTabChange }: BannerProps) {
  const { tabs } = sharedStrings.navigation

  function handleKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    let nextIndex = index

    if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length
    else if (event.key === 'ArrowLeft')
      nextIndex = (index - 1 + tabs.length) % tabs.length
    else if (event.key === 'Home') nextIndex = 0
    else if (event.key === 'End') nextIndex = tabs.length - 1
    else return

    event.preventDefault()
    const nextTab = tabs[nextIndex].id
    onTabChange(nextTab)
    document.getElementById(`tab-${nextTab}`)?.focus()
  }

  return (
    <header className="wash relative left-1/2 mb-2 w-screen -translate-x-1/2 py-2">
      <div className="mx-auto max-w-studio px-4 text-center sm:px-6">
        <Heading as="h1" className="mt-0 mb-1">
          {sharedStrings.site.name}
        </Heading>

        <BodyText className="mx-auto max-w-[43.75rem]">
          {sharedStrings.banner.description}
        </BodyText>

        <div
          role="tablist"
          aria-label={sharedStrings.navigation.tabListLabel}
          className="mt-2 flex justify-center gap-1 overflow-x-auto"
        >
          {tabs.map((tab, index) => {
            const selected = activeTab === tab.id
            return (
              <button
                key={tab.id}
                id={`tab-${tab.id}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`panel-${tab.id}`}
                tabIndex={selected ? 0 : -1}
                className={cn(
                  tabClasses.base,
                  selected ? tabClasses.active : tabClasses.inactive,
                )}
                onClick={() => onTabChange(tab.id)}
                onKeyDown={(event) => handleKeyDown(event, index)}
              >
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>
    </header>
  )
}
