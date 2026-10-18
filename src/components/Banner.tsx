import { Box, Tab, Typography } from '@mui/material'
import { TabList } from '@mui/lab'
import type { SyntheticEvent } from 'react'
import {
  bannerContentSx,
  bannerDescriptionSx,
  bannerSx,
  bannerTabListSx,
  bannerTabSx,
  bannerTitleSx,
} from './Banner.styles'

interface BannerProps {
  onTabChange: (_event: SyntheticEvent, newValue: string) => void
}

export function Banner({ onTabChange }: BannerProps) {
  return (
    <Box sx={bannerSx}>
      <Box sx={bannerContentSx}>
        <Typography variant="h2" component="h1" sx={bannerTitleSx}>
          Holly&apos;s Art Studio
        </Typography>

        <Typography variant="h6" sx={bannerDescriptionSx}>
          Specialising in wedding painting, pet and family portrait commissions
        </Typography>

        <TabList
          onChange={onTabChange}
          aria-label="Studio pages"
          centered
          variant="scrollable"
          allowScrollButtonsMobile
          sx={bannerTabListSx}
        >
          <Tab label="Live Wedding Painting" value="home" sx={bannerTabSx} />
          <Tab label="The Process" value="process" sx={bannerTabSx} />
          <Tab label="About Me" value="details" sx={bannerTabSx} />
          <Tab label="Gallery" value="gallery" sx={bannerTabSx} />
        </TabList>
      </Box>
    </Box>
  )
}
