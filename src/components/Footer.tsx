import { Box, Link, Stack, Typography } from '@mui/material'
import { footerContentSx, footerSx } from './Footer.styles'

export function Footer() {
  return (
    <Box component="footer" sx={footerSx}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={1}
        sx={footerContentSx}
      >
        <Typography variant="body2" color="text.secondary">
          © 2026 Holly&apos;s Art Studio
        </Typography>

        <Stack direction="row" spacing={2}>
          <Link href="mailto:hollysartstudio@gmail.com" underline="hover">
            Email
          </Link>
          <Link
            href="https://www.instagram.com/hollys_art_studio"
            target="_blank"
            rel="noreferrer"
            underline="hover"
          >
            Instagram
          </Link>
        </Stack>
      </Stack>
    </Box>
  )
}
