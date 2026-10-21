import {
  Alert,
  Box,
  Button,
  CardMedia,
  Link,
  Stack,
  Typography,
} from '@mui/material'
import { QRCodeSVG } from 'qrcode.react'
import { useRef, useState } from 'react'
import { portfolioPieces } from '../data/portfolio'
import meImage from '../me.jpg'
import './Flyer.css'
import {
  flyerActionsSx,
  flyerArtworkGridSx,
  flyerBodySx,
  flyerContactSx,
  flyerHeaderSx,
  flyerImageFrameSx,
  flyerImageSx,
  flyerPageSx,
  flyerPdfButtonSx,
  flyerPrintButtonSx,
  flyerQuoteSx,
  flyerSectionTitleSx,
  flyerSheetSx,
  flyerSubtitleSx,
  flyerTitleSx,
} from './Flyer.styles'

const instagramUrl = 'https://www.instagram.com/hollys_art_studio'
const studioWebsiteUrl = 'https://hollysartstudio.co.uk'
const flyerPaintings = [
  portfolioPieces[0],
  portfolioPieces[2],
  portfolioPieces[1],
]

export function Flyer() {
  const sheetRef = useRef<HTMLDivElement>(null)
  const [pdfError, setPdfError] = useState('')

  const openFlyerPdf = async () => {
    setPdfError('')

    try {
      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
        import('html2canvas'),
        import('jspdf'),
      ])
      const sheet = sheetRef.current
      if (!sheet) {
        throw new Error('Flyer content could not be found.')
      }

      await document.fonts.ready
      await Promise.all(
        Array.from(sheet.querySelectorAll('img')).map(async (image) => {
          if (!image.complete) {
            await new Promise<void>((resolve, reject) => {
              image.addEventListener('load', () => resolve(), { once: true })
              image.addEventListener(
                'error',
                () => reject(new Error(`Could not load flyer image: ${image.alt}`)),
                { once: true },
              )
            })
          } else if (image.naturalWidth === 0) {
            throw new Error(`Could not load flyer image: ${image.alt}`)
          }
        }),
      )

      const canvas = await html2canvas(sheet, {
        scale: 4,
        backgroundColor: '#FFFDF9',
        useCORS: true,
      })
      const widthMm = (sheet.offsetWidth * 25.4) / 96
      const heightMm = (sheet.offsetHeight * 25.4) / 96
      const pdf = new jsPDF({
        orientation: widthMm > heightMm ? 'landscape' : 'portrait',
        unit: 'mm',
        format: [widthMm, heightMm],
        compress: true,
      })

      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, widthMm, heightMm)
      const pdfUrl = URL.createObjectURL(pdf.output('blob'))
      const downloadLink = document.createElement('a')
      downloadLink.href = pdfUrl
      downloadLink.download = 'hollys-art-studio-flyer.pdf'
      document.body.append(downloadLink)
      downloadLink.click()
      downloadLink.remove()
      window.setTimeout(() => URL.revokeObjectURL(pdfUrl), 60_000)
    } catch (error) {
      setPdfError(
        error instanceof Error ? error.message : 'Unable to create the flyer PDF.',
      )
    }
  }

  return (
    <Box className="flyer-page" sx={flyerPageSx}>
      {pdfError && (
        <Alert severity="error" sx={{ maxWidth: 820, mx: 'auto', mb: 2 }}>
          {pdfError}
        </Alert>
      )}
      <Box className="flyer-sheet" sx={flyerSheetSx} ref={sheetRef}>
        <Box sx={flyerHeaderSx}>
          <Typography component="h1" sx={flyerTitleSx}>
            Holly&apos;s Art Studio
          </Typography>
          <Typography sx={flyerSubtitleSx}>
            Fine Art Live Wedding Painting
          </Typography>
        </Box>

        <Typography sx={flyerQuoteSx}>
          Capturing the magic of your day, one brushstroke at a time.
        </Typography>

        <Box className="flyer-artwork-grid" sx={flyerArtworkGridSx}>
          {flyerPaintings.map((painting) => (
            <Box
              className="flyer-image-frame"
              key={painting.image}
              sx={flyerImageFrameSx}
            >
              <CardMedia
                component="img"
                image={painting.image}
                alt={painting.imageAlt}
                sx={flyerImageSx}
              />
            </Box>
          ))}
        </Box>

        <Box
          className="flyer-intro"
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '150px minmax(0, 1fr)' },
            alignItems: 'center',
            gap: { xs: 1, sm: 2 },
          }}
        >
          <Box
            component="img"
            className="flyer-artist-photo"
            src={meImage}
            alt="Holly, the artist behind Holly’s Art Studio"
            sx={{
              display: 'block',
              width: '100%',
              maxWidth: { xs: 180, sm: 'none' },
              height: 'auto',
              aspectRatio: '3 / 4',
              objectFit: 'contain',
              mx: 'auto',
              borderRadius: 1,
            }}
          />
          <Box>
            <Typography component="h2" sx={flyerSectionTitleSx}>
              A little piece of your day, painted live
            </Typography>
            <Typography className="flyer-body" sx={flyerBodySx}>
              Hi, I&apos;m Holly! I paint a bespoke oil portrait of your special day as it
              unfolds, creating a lovely moment for your guests to enjoy and a one-of-a-kind
              keepsake for you to treasure. From the romance of your ceremony to the joy of
              your reception, your favourite moments come to life on canvas.
            </Typography>
          </Box>
        </Box>

        <Box sx={flyerContactSx}>
          <Box sx={{ flex: 1 }}>
            <Typography component="h2" sx={flyerSectionTitleSx}>
              Let&apos;s make something lovely
            </Typography>
            <Typography className="flyer-body" sx={flyerBodySx}>
              Planning your wedding or curious about live painting? I&apos;d love to hear
              from you.
            </Typography>
            <Stack spacing={0.5} sx={{ mt: 1 }}>
              <Typography className="flyer-body" sx={flyerBodySx}>
                Instagram:{' '}
                <Link href={instagramUrl} color="inherit" underline="always">
                  @hollys_art_studio
                </Link>
              </Typography>
              <Typography className="flyer-body" sx={flyerBodySx}>
                Email:{' '}
                <Link href="mailto:hollysartstudio@gmail.com" color="inherit" underline="always">
                  hollysartstudio@gmail.com
                </Link>
              </Typography>
              <Typography className="flyer-body" sx={flyerBodySx}>
                Website:{' '}
                <Link href={studioWebsiteUrl} color="inherit" underline="always">
                  hollysartstudio.co.uk
                </Link>
              </Typography>
            </Stack>
          </Box>

          <Stack spacing={0.5} sx={{ alignItems: 'center' }}>
            <QRCodeSVG
              value={instagramUrl}
              size={88}
              bgColor="#FFFDF9"
              fgColor="#2D2B2A"
              level="M"
              aria-label="QR code linking to Holly’s Art Studio Instagram"
            />
            <Typography sx={{ ...flyerBodySx, textAlign: 'center', fontSize: '0.7rem' }}>
              See more paintings
            </Typography>
          </Stack>
        </Box>
      </Box>

      <Stack className="flyer-actions" direction="row" spacing={1} sx={flyerActionsSx}>
        <Button
          variant="outlined"
          sx={flyerPdfButtonSx}
          onClick={openFlyerPdf}
        >
          Download flyer PDF
        </Button>
        <Button
          variant="contained"
          sx={flyerPrintButtonSx}
          onClick={() => window.print()}
        >
          Print flyer
        </Button>
      </Stack>
    </Box>
  )
}
