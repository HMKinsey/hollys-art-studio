import { QRCodeSVG } from 'qrcode.react';
import { useRef, useState } from 'react';
import { flyerPaintings } from '../data/portfolio';
import { en } from '../locales/en';
import meImage from '../assets/me.jpg';
import { BodyText } from '../components/shared/BodyText';
import { Caption } from '../components/shared/Caption';
import { Heading } from '../components/shared/Heading';
import './FlyerPage.css';

export function FlyerPage() {
  const sheetRef = useRef<HTMLDivElement>(null);
  const [pdfError, setPdfError] = useState('');

  const openFlyerPdf = async () => {
    setPdfError('');

    try {
      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
        import('html2canvas'),
        import('jspdf'),
      ]);
      const sheet = sheetRef.current;
      if (!sheet) {
        throw new Error(en.errors.flyerContentNotFound);
      }

      await document.fonts.ready;
      await Promise.all(
        Array.from(sheet.querySelectorAll('img')).map(async (image) => {
          if (!image.complete) {
            await new Promise<void>((resolve, reject) => {
              image.addEventListener('load', () => resolve(), { once: true });
              image.addEventListener(
                'error',
                () =>
                  reject(
                    new Error(en.errors.flyerImageCouldNotLoad(image.alt))
                  ),
                { once: true }
              );
            });
          } else if (image.naturalWidth === 0) {
            throw new Error(en.errors.flyerImageCouldNotLoad(image.alt));
          }
        })
      );

      const canvas = await html2canvas(sheet, {
        scale: 4,
        backgroundColor: '#FFFDF9',
        useCORS: true,
      });
      const widthMm = (sheet.offsetWidth * 25.4) / 96;
      const heightMm = (sheet.offsetHeight * 25.4) / 96;
      const pdf = new jsPDF({
        orientation: widthMm > heightMm ? 'landscape' : 'portrait',
        unit: 'mm',
        format: [widthMm, heightMm],
        compress: true,
      });

      pdf.addImage(
        canvas.toDataURL('image/png'),
        'PNG',
        0,
        0,
        widthMm,
        heightMm
      );
      const pdfUrl = URL.createObjectURL(pdf.output('blob'));
      const downloadLink = document.createElement('a');
      downloadLink.href = pdfUrl;
      downloadLink.download = en.flyer.pdfFilename;
      document.body.append(downloadLink);
      downloadLink.click();
      downloadLink.remove();
      window.setTimeout(() => URL.revokeObjectURL(pdfUrl), 60_000);
    } catch (error) {
      setPdfError(
        error instanceof Error ? error.message : en.errors.createFlyerPdfFailed
      );
    }
  };

  return (
    <main className="flyer-page bg-canvas min-h-screen px-4 py-4 sm:py-8">
      {pdfError && (
        <p
          role="alert"
          className="max-w-flyer mx-auto mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-800"
        >
          {pdfError}
        </p>
      )}
      <div
        className="flyer-sheet max-w-flyer border-line bg-paper shadow-sheet mx-auto box-border flex w-full flex-col gap-2.5 border p-5 sm:gap-3.5 sm:p-8"
        ref={sheetRef}
      >
        <header className="wash py-3 text-center sm:py-4">
          <Heading as="h1" className="text-rose">
            {en.site.name}
          </Heading>
          <Caption className="text-rose mt-1 block">{en.flyer.title}</Caption>
        </header>

        <p className="font-display text-rose text-center text-2xl leading-tight md:text-3xl">
          {en.flyer.quote}
        </p>

        <div className="flyer-artwork-grid flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {flyerPaintings.map((painting) => (
            <div
              className="flyer-image-frame bg-frame box-border flex h-[185px] w-fit items-center justify-center overflow-hidden p-[5px] sm:h-[220px]"
              key={painting.image}
            >
              <img
                src={painting.image}
                alt={painting.imageAlt}
                className="block h-full w-auto max-w-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="flyer-intro grid grid-cols-1 items-center gap-2 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-4">
          <img
            className="flyer-artist-photo mx-auto block aspect-[3/4] h-auto w-full max-w-[180px] rounded object-contain sm:max-w-none"
            src={meImage}
            alt={en.about.artistImageAlt}
          />
          <div>
            <Heading className="text-rose mb-1.5">
              {en.flyer.aboutHeading}
            </Heading>
            <BodyText className="flyer-body">{en.flyer.about}</BodyText>
          </div>
        </div>

        <div className="border-line flex items-center justify-between gap-4 border-t pt-2">
          <div className="min-w-0 flex-1">
            <Heading className="text-rose mb-1.5">
              {en.flyer.contactHeading}
            </Heading>
            <BodyText className="flyer-body">
              {en.flyer.contactIntroduction}
            </BodyText>
            <div className="mt-2 flex flex-col gap-1">
              <BodyText className="flyer-body">
                {en.site.instagram}:{' '}
                <a
                  className="text-inherit underline"
                  href={en.site.instagramUrl}
                >
                  {en.site.instagramHandle}
                </a>
              </BodyText>
              <BodyText className="flyer-body">
                {en.site.emailLabel}:{' '}
                <a className="text-inherit underline" href={en.site.emailUrl}>
                  {en.site.email}
                </a>
              </BodyText>
              <BodyText className="flyer-body">
                {en.site.websiteLabel}:{' '}
                <a className="text-inherit underline" href={en.site.websiteUrl}>
                  {en.site.website}
                </a>
              </BodyText>
            </div>
          </div>

          <div className="flex shrink-0 flex-col items-center gap-1">
            <QRCodeSVG
              value={en.site.instagramUrl}
              size={88}
              bgColor="#FFFDF9"
              fgColor="#2D2B2A"
              level="M"
              aria-label={en.flyer.qrCodeLabel}
            />
            <Caption className="flyer-body text-center">
              {en.flyer.qrCodeCaption}
            </Caption>
          </div>
        </div>
      </div>

      <div className="flyer-actions fixed right-5 bottom-5 z-10 flex gap-2">
        <button
          className="border-rose bg-paper text-rose-dark hover:bg-blush rounded border px-4 py-2 font-semibold"
          onClick={openFlyerPdf}
        >
          {en.flyer.downloadButton}
        </button>
        <button
          className="bg-rose hover:bg-rose-dark rounded px-4 py-2 font-semibold text-white"
          onClick={() => window.print()}
        >
          {en.flyer.printButton}
        </button>
      </div>
    </main>
  );
}
