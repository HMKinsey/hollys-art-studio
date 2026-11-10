import type { ComponentType } from 'react'
import { useState } from 'react'
import type { StudioTabId } from '../../constants/shared'
import { Banner } from '../layout/Banner'
import { AboutTab } from './AboutTab'
import { GalleryTab } from './GalleryTab'
import { HomeTab } from './HomeTab'
import { ProcessTab } from './ProcessTab'

const panels: Array<{ id: StudioTabId; component: ComponentType }> = [
  { id: 'home', component: HomeTab },
  { id: 'process', component: ProcessTab },
  { id: 'details', component: AboutTab },
  { id: 'gallery', component: GalleryTab },
]

export function PortfolioTabs() {
  const [activeTab, setActiveTab] = useState<StudioTabId>('home')

  return (
    <div className="mb-8 w-full">
      <Banner activeTab={activeTab} onTabChange={setActiveTab} />
      {panels.map(({ id, component: Panel }) => (
        <div
          key={id}
          role="tabpanel"
          id={`panel-${id}`}
          aria-labelledby={`tab-${id}`}
          hidden={activeTab !== id}
        >
          <Panel />
        </div>
      ))}
    </div>
  )
}
