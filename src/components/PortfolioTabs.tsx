import { useState } from 'react'
import { Box } from '@mui/material'
import { TabContext, TabPanel } from '@mui/lab'
import { Banner } from './Banner'
import { portfolioTabPanelSx, portfolioTabsSx } from './shared.styles'
import { AboutTab } from './tabs/AboutTab'
import { GalleryTab } from './tabs/GalleryTab'
import { HomeTab } from './tabs/HomeTab'
import { ProcessTab } from './tabs/ProcessTab'

export function PortfolioTabs() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <Box sx={portfolioTabsSx}>
      <TabContext value={activeTab}>
        <Banner onTabChange={(_, nextTab) => setActiveTab(nextTab)} />
        <TabPanel value="home" sx={portfolioTabPanelSx}>
          <HomeTab />
        </TabPanel>
        <TabPanel value="process" sx={portfolioTabPanelSx}>
          <ProcessTab />
        </TabPanel>
        <TabPanel value="details" sx={portfolioTabPanelSx}>
          <AboutTab />
        </TabPanel>
        <TabPanel value="gallery" sx={portfolioTabPanelSx}>
          <GalleryTab />
        </TabPanel>
      </TabContext>
    </Box>
  )
}
